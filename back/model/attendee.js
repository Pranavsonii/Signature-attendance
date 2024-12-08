const mongoose = require("mongoose");

const AttendeeSchema = new mongoose.Schema({
  _id: Number,
  Name: String,
  Roll: Number,
  Birthday: Date,
  Address: String,
});

module.exports = mongoose.model("attendee", AttendeeSchema, "entries");
