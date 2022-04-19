const Exercises = require("./../models/exercises");

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
  const { body, params } = req;
  body["user"] = body[":_id"];
  //body.user = params.id;
  let data = await Exercises.create(body);
  data["_id"] = body[":_id"];
  res.json(data);
};

module.exports = {
  allItems,
  findItem,
  createItem,
};
