const { Schema, model } = require("mongoose");

const moneySchema = new Schema();

const Money = model("Money", moneySchema);

module.exports = Money;
