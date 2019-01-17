const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const LocalStrategy = require('passport-local');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const path = require('path');
const publicPath = path.join(__dirname, '..', 'public');
const seedDB = require('./seeds');

// CORS configuration
let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With'
  );
  //intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
};

app.use(allowCrossDomain);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Mongoose configuration
const db_url = process.env.DATABASEURL || 'mongodb://localhost/movies';
mongoose.connect(
  db_url,
  { useNewUrlParser: true }
);
mongoose.set('useFindAndModify', false);

// API routes
require('./routes')(app);

// Set path
app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

//app.use(methodOverride('_method'));
//app.use(flash());
//seedDB();

// Passport configuration
//app.use(
//require('express-session')({
//secret: 'hola tamal',
//resave: false,
//saveUninitialized: false
//})
//);

//app.use(passport.initialize());
//app.use(passport.session());
//passport.use(new LocalStrategy(User.authenticate()));
//passport.serializeUser(User.serializeUser());
//passport.deserializeUser(User.deserializeUser());

//app.use(function(req, res, next) {
//res.locals.currentUser = req.user;
//res.locals.error = req.flash('error');
//res.locals.success = req.flash('success');
//next();
//});

const _ip = process.env.IP || '0.0.0.0';
const _port = process.env.PORT || 9005;

app.listen(_port, _ip, () => {
  console.log(`Server is running at http://${_ip}:${_port}!`);
});
