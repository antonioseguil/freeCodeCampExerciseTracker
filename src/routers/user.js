const express = require("express");
const userController = require("./../controller/user");
const router = express.Router();

router.get("/users", userController.allItems);

router.post("/users", userController.createItem);

module.exports = router;
