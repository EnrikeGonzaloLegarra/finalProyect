const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const layouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require("bcrypt");
const cors = require('cors');
const session = require("express-session");
const passport = require("passport");
const apiUserController = require('./routes/apiUser/user');
const apiEventController = require('./routes/apiEvent/event');
const apiFileController = require('./routes/apiFile/file');
const authController = require("./routes/apiUser/auth-controller");
require('./config/passport')(passport);
var parse = require('xml2json');

mongoose.connect('mongodb://localhost/raceapp');

var app = express();
//FALTA CONFIGURAR EL CORS
var whitelist = [
  'http://localhost:4200',
];
//a Connect/Express middleware 
var corsOptions = {
  origin: function(origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
app.use(cors(corsOptions));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  secret: "passport-local-strategy",
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 2419200000
  }
}));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
app.use(passport.session());

const index = require('./routes/index');

app.use('/', index);
app.use('/', authController);
app.use('/apiUser', apiUserController);
app.use('/apiEvent', apiEventController);
app.use('/apifile', apiFileController);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.all('/*', function(req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

module.exports = app;
