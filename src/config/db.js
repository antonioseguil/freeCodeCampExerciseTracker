const mongoose = require("mongoose");
const URL_URI = process.env.URI;

const dataBaseConnect = () => {
  mongoose.connect(URL_URI, (err) => {});
};

module.exports = dataBaseConnect;
