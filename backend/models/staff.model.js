const { Schema, model } = require("mongoose");

const staffSchema = new Schema({
  _id: String,
  monday: [String],
  tuesday: [String],
  wednesday: [String],
  thursday: [String],
  friday: [String],
});

module.exports = model("Staff", staffSchema);
