const { Schema, model } = require("mongoose");

const moneySchema = new Schema({
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    volume: {
      type: Number,
    },
}
);

const money = model("money", moneySchema);

module.exports = money;
