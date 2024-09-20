const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  volume: {
    type: Number,
    required: true,
  },
  description: {
    type: Number,
    required: true,
  },
  savings: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('room', RoomSchema);