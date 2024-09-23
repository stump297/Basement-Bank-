const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Room = require('../models/Room');
require('dotenv').config();

const resolvers = {
  // Queries
  Query: {
    getUser: async (_, __, { user }) => {
      if (!user) throw new Error('You are not authenticated!');
      return await User.findById(user.id);
    },

    getRooms: async (_, __, { user }) => {
      if (!user) throw new Error('You are not authenticated!');
      return await Room.find({ user: user.id });
    },
  },

  // Mutations
  Mutation: {
    register: async (_, { username, email, password }) => {
      const existingUser = await User.findOne({ email });
      if (existingUser) throw new Error('User already exists');

      const newUser = new User({
        username,
        email,
        password,
      });

      const savedUser = await newUser.save();
      const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      
      return {
        token,
        user: savedUser
      };
    },

    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) throw new Error('User not found');

      const isMatch = await user.isCorrectPassword(password, user.password);
      
      if (!isMatch) throw new Error('Invalid credentials');

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

      return {
        token,
        user,
      };
    },

    addRoom: async (_, { length, width, height, savings }, { user }) => {
      if (!user) throw new Error('You are not authenticated!');

      const newRoom = new Room({
        length,
        width,
        height,
        savings,
        user: user.id,
      });

      return await newRoom.save();
    },

    updateRoom: async (_, { id, length, width, height, savings }, { user }) => {
      if (!user) throw new Error('You are not authenticated!');

      const room = await Room.findById(id);
      if (!room) throw new Error('Room not found');

      if (room.user.toString() !== user.id) {
        throw new Error('You do not have permission to update this room');
      }

      room.length = length || room.length;
      room.width = width || room.width;
      room.height = width || room.height;
      room.savings = savings || room.savings;

      return await room.save();
    },

    deleteRoom: async (_, { id }, { user }) => {
      if (!user) throw new Error('You are not authenticated!');

      const room = await Room.findById(id);
      if (!room) throw new Error('Room not found');

      if (room.user.toString() !== user.id) {
        throw new Error('You do not have permission to delete this room');
      }

      await room.remove();
      return true;
    },
  },
};

module.exports = resolvers;
