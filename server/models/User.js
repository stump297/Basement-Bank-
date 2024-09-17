const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    username: {
      type: String,
    },
    password: {
      type: Number,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
}
);

const user = model("user", userSchema);

module.exports = user;
