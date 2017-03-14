/*jshint esversion:6*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventShema = new mongoose.Schema({
  gpxFile: {
    type: String,
  },
  eventName: {
    type: String,
  },
  town: {
    type: String,
  },
  club: {
    type: String,
  },
  eventDate: {
    type: String,
  },
  inscribedFinalDate: {
    type: String,
  },
  eventWeb: {
    type: String
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  gpxFile: {
    type: String

  },
});

const Event = mongoose.model('Event', eventShema);
module.exports = Event;
