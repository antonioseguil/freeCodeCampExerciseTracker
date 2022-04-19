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
  body["username"] = body[":_id"];
  //validante fecha
  if (!body.date) {
    body["date"] = new Date().toDateString();
  } else {
    body["date"] = new Date(body["date"]).toDateString();
  }

  let data = await Exercises.create(body);
  //buscando user
  let dataUser = await User.findById(body[":_id"]);
  //Alterando respuesta JSON
  data["_id"] = body[":_id"];
  let dataReturn = { ...data._doc };
  dataReturn.username = dataUser.username;
  res.json(dataReturn);
};

module.exports = {
  allItems,
  findItem,
  createItem,
};
