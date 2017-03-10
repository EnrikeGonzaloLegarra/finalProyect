const mongoose = require('mongoose');
const User = require('../models/user');

mongoose.connect('mongodb://localhost/raceapp');
const users = [{
  name: 'Enrike',
  lastName: 'Gonzalo',
  email: "enrike@enrike.com",
  password: "enrike",
  town: 'Atxondo',
  club: 'Rural Bikers',
  date: '22/06/1986',
  role: "ADMIN"
}, {
  name: 'Gonzalo',
  lastName: 'Sanz',
  email: "gonzalo@gonzalo.com",
  password: "enrike",
  town: 'Madrid',
  club: 'Madrid Bikers',
  date: '22/03/1986',
  role: "USER"
}, {
  name: 'Anthony',
  lastName: 'Bruscantiny',
  email: "anthony@anthony.com",
  password: "enrike",
  town: 'Miami',
  club: 'Miami Bikers',
  date: '22/012/1986',
  role: "USER"
}];

User.create(users, function(err, user) {
  if (err) {
    return console.log(err);
  }
  user.forEach(function(elem) {
    console.log(elem.name);
  });
});
