const fs = require('fs');
const mongoose = require('mongoose');

//DB SCHEMA
const distributorsSchema = new mongoose.Schema({
  genre: String,
  name: String,
});

module.exports = mongoose.model('Movies', distributorsSchema);
