/* const mongoose = require("mongoose");

const UserShema = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
  })
);

async function saveUser(_user = {}) {
  let newUser = new UserShema(_user);
  return await newUser.save();
}

async function allUser() {
  let users = await UserShema.find({});
  return users;
}

async function findUser(userId) {
  let user = await UserShema.findById(userId).exec();
  return user;
}

module.exports = {
  saveUser,
  allUser,
  findUser,
};
 */