const { Schema, model } = require("mongoose");

const basementSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Basement = model("Basement", basementSchema);

module.exports = Basement;
