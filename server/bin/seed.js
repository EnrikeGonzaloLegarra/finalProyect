/*jshint esversion:6*/
const mongoose = require('mongoose');
const Event = require('../models/event');

mongoose.connect('mongodb://localhost/raceapp');

const event = [{
  name: 'Orbea Monegros',
  eventAdress: 'Sariñena',
  inscribedFinalDate: "12/05/2017",
  eventDate: "29/04/2017",
  inscribed: '0',
  eventWeb: 'www.orbeaMonegros.com',
  gpxFile: 'noFile'
}, {
  name: 'Gran Fondo',
  eventAdress: 'Vitoria',
  inscribedFinalDate: "12/05/20017",
  eventDate: "29/04/2017",
  inscribed: '0',
  eventWeb: 'www.granFondoVitoria.com',
  gpxFile: 'noFile'
}];

Event.create(event, function(err, entries) {
  if (err) {
    return console.log(err);
  }
  entries.forEach(function(elem) {
    console.log(elem.name);
  });
});
