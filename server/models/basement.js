const mongoose = require('mongoose');

const BasementSchema = new mongoose.Schema({
  length: {
    type: Number,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  height: {
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

module.exports = mongoose.model('basement', BasementSchema);