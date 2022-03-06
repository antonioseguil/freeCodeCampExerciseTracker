const { mongoose } = require('./db.js');

const UserShema = mongoose.model('User', new mongoose.Schema({
    username: String
}));


async function saveUser(_user = {}) {
    let newUser = new UserShema(_user);
    return await newUser.save();
}

async function allUser() {
    let users = await UserShema.find({});
    return users;
}

async function findUser(userId) {
    let user = await UserShema.findById(userId);
    return user;
}

module.exports = {
    saveUser,
    allUser,
    findUser
}

