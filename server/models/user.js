/*jshint esversion:6*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String
  },
  email: {
    type: String

  },
  password: {
    type: String,
    required: true
  },
  town: {
    type: String,
  },
  age: {
    type: String,
  },
  club: {
    type: String,
  },
  date: {
    type: Date,
  },
  role: {
    type: String,
    enum: ['USER', 'ADMIN'],
    default: 'USER'
  }
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
