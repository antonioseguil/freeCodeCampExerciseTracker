const { mongoose } = require('./db.js');

const exercisesSchema = mongoose.model('Exercises', mongoose.Schema({
    id: String,
    description: String,
    duration: Number,
    date: { type: Date, default: new Date() }
}));