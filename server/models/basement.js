const { Schema, model } = require("mongoose");

const basementSchema = new Schema({
  name: {
    type: String,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  money_id: {
    type: Schema.Types.ObjectId,
    ref: 'money',
  },
  description: {
    type: String,
  },
  saved: {
    type: Integer,
  },
  volume: {
    type: Integer,
  },
  total: {
    type: Integer,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const basement = model("basement", basementSchema);

module.exports = basement;
