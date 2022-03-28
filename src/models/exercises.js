const mongoose = require("mongoose");

const ExercicesShema = new mongoose.Schema({
  username: {
    type: String,
  },
  description: {
    type: String,
  },
  duration: {
    type: Number,
  },
  date: {
    type: String,
    default: new Date(Date.now()).toDateString(),
  },
});

module.exports = mongoose.model("Exercises", ExercicesShema);
