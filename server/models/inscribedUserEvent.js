/*jshint esversion:6*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inscribedSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  eventId: {
    type: Schema.Types.ObjectId,
    ref: 'event'
  }
});

const Inscribed = mongoose.model('Inscribed', inscribedSchema);
module.exports = Inscribed;
