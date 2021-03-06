const express = require("express");
const exercisesController = require("./../controller/exercises");
const router = express.Router();

router.post("/users/:id/exercises", exercisesController.createItem);

module.exports = router;
