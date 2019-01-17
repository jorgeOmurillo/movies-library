const mongoose = require('mongoose');
const Movies = require('./models/Movies');

let data = [
  {
    genre: 'Action',
    movie: 'The Matrix',
  },
  {
    genre: 'Action',
    movie: 'The Big Hit',
  },
  {
    genre: 'Action',
    movie: 'Speed',
  }
];

function seedDB() {
  // Remove all Campgrounds
  Movies.remove({}, function(err) {
    if (err) {
      console.log(err);
    }
    console.log('removed movies!');
    //add some campgrounds
    data.forEach(function(seed) {
      Movies.create(seed, function(err, movie) {
        if (err) {
          console.log(err);
        } else {
          console.log('added a movie');
        }
      });
    });
    //add comments
  });
}

module.exports = seedDB;
