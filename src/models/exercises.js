const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExercicesShema = new mongoose.Schema({
  username: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  description: {
    type: String,
  },
  duration: {
    type: Number,
  },
  date: {
    type: String,
  },
});

module.exports = mongoose.model("Exercises", ExercicesShema);
