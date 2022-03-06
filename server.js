const express = require('express')
const cors = require('cors')
const user = require('./src/user.js');
const exercise = require('./src/exercises.js');

require('dotenv').config()
const app = express()

app.use(cors())
app.use(express.static('public'))
//cabeceras
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// RUTAS DE USER
app.route('/api/users').post(async (req, res) => {
  let data = await user.saveUser(req.body);
  res.json(data);
}).get(async (req, res) => {
  res.json(await user.allUser());
});

//RUTAS DE EXCERCISES
app.post('/api/users/:id/exercises', async (req, res) => {
  delete req.body[':_id'];
  let result = await exercise.saveExcercise(req.body, req.params.id);
  res.json(result);
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
