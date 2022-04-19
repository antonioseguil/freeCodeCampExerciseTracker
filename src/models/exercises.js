const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExercicesShema = new mongoose.Schema(
  {
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
      default: Date.now().toLocaleString(),
    },
  }
);

module.exports = mongoose.model("Exercises", ExercicesShema);
