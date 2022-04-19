const Exercises = require("./../models/exercises");
const User = require("./../models/user");

/**
 * Función para obtener todos los registros
 * @param {*} req
 * @param {*} res
 */
const allItems = async (req, res) => {};

const findItem = () => {};

/**
 * Función para registrar un nuevo item - exercise
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  const { body } = req;
  let dataUser = await User.findOne({ _id: body[":_id"] });
  //validante fecha
  if (!body.date) {
    body.date = new Date().toDateString();
  } else {
    body.date = new Date(body.date).toDateString();
  }
  //agregando id de usuario al body
  body.user = dataUser["_id"];

  let data = await Exercises.create(body);

  return res.json({
    _id: dataUser._id,
    username: dataUser.username,
    description: data.description,
    duration: data.duration,
    date: data.date,
  });
};

module.exports = {
  allItems,
  findItem,
  createItem,
};
