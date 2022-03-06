const { mongoose } = require('./db.js');
const user = require('./user.js');

const exercisesSchema = mongoose.model('Exercises', mongoose.Schema({
    username: String,
    description: String,
    duration: Number,
    date: { type: Date, default: new Date(), require : true }
}));


async function saveExcercise(_excercise, _userId) {
    //crear funcion de busqueda en user
    let reqUser = user.findUser(_userId);
    //Agregando dato al modelo de exercise
    _excercise.username = reqUser.username;
    let excercise = new exercisesSchema(_excercise);
    return await excercise.save();
}


module.exports = {
    saveExcercise
}