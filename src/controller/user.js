const User = require("./../models/user");

const allItems = async (req, res) => {
  let data = await User.find({});
  res.json(data);
};

const findItem = () => {};

const createItem = async (req, res) => {
  let { body } = req;
  console.log(body);
  let data = await User.create(body);
  res.json(data);
};

module.exports = {
  allItems,
  findItem,
  createItem,
};
