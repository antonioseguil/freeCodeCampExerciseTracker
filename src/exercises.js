const { mongoose } = require('./db.js');
const user = require('./user.js');

const exercisesSchema = mongoose.model('Exercises', mongoose.Schema({
    username: String,
    description: String,
    duration: Number,
    date: { type: Date, default: new Date() }
}));


async function saveExcercise(_excercise) {
    //crear funcion de busqueda en user
    let excercise = new exercisesSchema(_excercise);
    return await excercise.save();
}


module.exports = {
    saveExcercise
}