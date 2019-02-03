const fs = require('fs');
const mongoose = require('mongoose');

//DB SCHEMA
const moviesSchema = new mongoose.Schema({
  genre: String,
  name: String,
 	image_url: String,
  year: String,
  description: String
});

module.exports = mongoose.model('Movies', moviesSchema);
