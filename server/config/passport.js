const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const bcrypt = require("bcrypt");


module.exports = function(passport) {

  passport.use(new LocalStrategy({
    usernameField: "name",
    passwordField: "password"
  }, (name, password, next) => {
    console.log("esto es el fockin username", name);
    console.log(password);
    User.findOne({
      name
    }, (err, user) => {

      console.log('esto es el fockin User', user);
      console.log('passwordljsndljasdlj d', user.password);
      if (err) {
        return next(err);
      }
      if (!user) {
        return next(null, false, {
          message: "Incorrect username"
        });
      }
      if (!bcrypt.compareSync(password, user.password)) {
        return next(null, false, {
          message: "Incorrect password"
        });
      }
      return next(null, user);
    });
  }));

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });

  passport.deserializeUser((id, cb) => {
    User.findOne({
      "_id": id
    }, (err, user) => {
      if (err) {
        return cb(err);
      }
      cb(null, user);
    });
  });
};