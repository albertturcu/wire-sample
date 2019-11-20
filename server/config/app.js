require('./database');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const logger = require('./logger');
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const passport = require("passport");
const localStrategy = require("passport-local");
const User = require('../models/user');
const cors = require('cors');
// ================== EXPRESS SETTINGS ==============================
const app = express();
if (process.env.NODE_ENV !== 'production') app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false, limit: '20mb' }));
app.use(bodyParser.json({ limit: '20mb' }));
app.use(cors());

// ================== PASSPORT SETTINGS ==============================
const store = new MongoDBStore({
  uri: process.env.MONGODB_URI_LOCAL,
  collection: "mySessions"
});

app.use(
  session({
    secret: process.env.PASSPORT_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 30 // month
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ================== SECURITY SETTINGS ==========================
app.use(helmet());
app.disable('x-powered-by');
app.use(helmet.hidePoweredBy({ setTo: 'PHP 7.3.0' }));
app.use(helmet.ieNoOpen());
app.use(helmet.xssFilter());
app.use(helmet.noCache());
// Allow cross origin requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  return next();
});

// ================== SERVER ROUTES ==============================
const ProductRoutes = require('../routes/product.js');
const ApiRoutes = require('../routes/index');

app.use('/product', ProductRoutes);
app.use('/api', ApiRoutes);
// ================== ERROR HANDLING MIDDLEWARE ==================

app.use((req, res, next) => {
  const error = new Error('Route not found');
  error.status = 404;
  next(error);
});

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  logger.error(error);
  const status = error.status || 500;
  res.status(status);
  res.json({
    status_code: status,
    message: error.message,
    data: []
  });
});

module.exports = app;
