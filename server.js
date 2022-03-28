require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./src/config/db");
/* ========== */
const exercise = require("./src/exercises.js");

const app = express();

app.use(cors());
//cabeceras
app.use(express.static("public"));
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// RUTAS DE USER
app.use("/api", require("./src/models/user"));

//RUTAS DE EXCERCISES
app.post("/api/users/:id/exercises", async (req, res) => {
  let result = await exercise.saveExcercise(req.body, req.params.id);
  res.json(result);
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port");
});

db(); //Haciendo un llamado a la base de datos
