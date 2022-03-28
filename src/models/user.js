const mongoose = require("mongoose");

const UserShema = new mongoose.Schema({
  username: {
    type: String,
  },
});

module.exports = mongoose.model("User", UserShema);
