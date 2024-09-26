const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Room = require("../models/Room");
const { signToken } = require("../utils/auth");
require("dotenv").config();

const resolvers = {
  Query: {
    getUser: async (_, __, { user }) => {
      if (!user) throw new Error("You are not authenticated!");
      return await User.findOne(user.id);
    },
    getRooms: async (_, __, { user }) => {
      if (!user) throw new Error("You are not authenticated!");
      return await Room.find({ user: user.id });
    },
  },

  Mutation: {
    register: async (_, { username, email, password }) => {
      const existingUser = await User.findOne({ email });
      if (existingUser) throw new Error("User already exists");

      const newUser = new User({
        username,
        email,
        password,
      });

      const savedUser = await newUser.save();
      const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      return {
        token,
        user: savedUser,
      };
    },

    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) throw new Error("User not found");

      const isMatch = await user.isCorrectPassword(password, user.password);

      if (!isMatch) throw new Error("Invalid credentials");

      const token = signToken(user);

      return {
        token,
        user,
      };
    },

    addRoom: async (_, { volume, description, savings }, { user }) => {
      if (!user) throw new Error("You are not authenticated!");

      const newRoom = new Room({
        volume,
        description,
        savings,
        user,
      });

      return await newRoom.save();
    },

    updateRoom: async (_, { _id, savings }) => {
      const room = await Room.findByIdAndUpdate(
        { _id },
        { savings },
        { new: true }
      );

      return room;
    },

    deleteRoom: async (_, { id }, { user }) => {
      if (!user) throw new Error("You are not authenticated!");

      const room = await Room.findById(id);
      if (!room) throw new Error("Room not found");

      if (room.user.toString() !== user.id) {
        throw new Error("You do not have permission to delete this room");
      }

      await room.remove();
      return true;
    },
  },
};

module.exports = resolvers;
