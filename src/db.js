const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://antonio:72841851@freecodecamp.omzcv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

module.exports = {
    mongoose
}