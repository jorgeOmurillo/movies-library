const mongoose = require('mongoose');
const Distributors = require('./models/Distributors');

let data = [
  {
    region: 'Southeast Asia',
    name: 'Videonet',
    sales: 'Ana',
    op: 'Lydia',
    logistics: 'Jane'
  },
  {
    region: 'South Asia',
    name: 'Cubix Micro Systems',
    sales: 'Hank',
    op: 'Rachel',
    logistics: 'Grace'
  },
  {
    region: 'Middle East',
    name: 'Global Distributors',
    sales: 'Karim',
    op: 'Kayla',
    logistics: 'Jane'
  }
];

function seedDB() {
  // Remove all Campgrounds
  Distributors.remove({}, function(err) {
    if (err) {
      console.log(err);
    }
    console.log('removed distributors!');
    //add some campgrounds
    data.forEach(function(seed) {
      Distributors.create(seed, function(err, distributor) {
        if (err) {
          console.log(err);
        } else {
          console.log('added a distributor');
        }
      });
    });
    //add comments
  });
}

module.exports = seedDB;
