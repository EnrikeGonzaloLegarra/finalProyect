/*jshint esversion:6*/
const express = require('express');
const router = express.Router();
const User = require('../../models/user');

router.get('/user', function(req, res, next) {
  User.find().lean().exec(function(err, journals) {
    if (err) return next(err);
    return res.send(JSON.stringify(journals));
  });
});


module.exports = router;
