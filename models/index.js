require("dotenv").config();
console.log("MONGO_URI:", process.env.MONGO_URI); // Check if MONGO_URI is printed correctly
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

// Rest of your code


module.exports.Place = require('./places')