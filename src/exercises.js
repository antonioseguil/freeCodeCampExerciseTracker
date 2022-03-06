const { mongoose } = require('./db.js');
const user = require('./user.js');

const exercisesSchema = mongoose.model('Exercises', mongoose.Schema({
    username: String,
    description: String,
    duration: Number,
    date: String,
}));


async function saveExcercise(_excercise, _userId) {
    //crear funcion de busqueda en user
    let reqUser = await user.findUser(_userId);
    //Agregando dato al modelo de exercise
    _excercise.username = reqUser.username;

    if (_excercise.date === '') {
        let dateNow = new Date(Date.now()).toDateString();
        _excercise.date = dateNow;
    }
    let excercise = new exercisesSchema(_excercise);
    return await excercise.save();
}


module.exports = {
    saveExcercise
}