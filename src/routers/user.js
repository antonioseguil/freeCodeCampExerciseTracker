const express = require("express");
const userController = require("./../controller/user");
const router = express.Router();

router.get("/users", userController.allItems);

router.post("/user", (req, res) => {});

/* app
  .route("/api/users")
  .post(async (req, res) => {
    let data = await user.saveUser(req.body);
    res.json(data);
  })
  .get(async (req, res) => {
    res.json(await user.allUser());
  }); */

module.exports = router;
