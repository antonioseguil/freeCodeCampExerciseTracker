const { mongoose } = require('./db.js');

const exercisesSchema = mongoose.model('Exercises', mongoose.Schema({
    username: String,
    description: String,
    duration: Number,
    date: { type: Date, default: new Date() }
}));