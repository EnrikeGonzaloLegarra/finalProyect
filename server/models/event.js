/*jshint esversion:6*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventShema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  eventAdress: {
    type: String,
  },
  inscribedFinalDate: {
    type: Date,
  },
  eventDate: {
    type: Date,
  },
  inscribed: {
    type: String,
  },
  eventWeb: {
    type: String
  },
  gpxFile: {
    type: String
  }
});

const Event = mongoose.model('Event', eventShema);
module.exports = Event;
