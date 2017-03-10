/*jshint esversion:6*/
const express = require('express');
const router = express.Router();
const User = require('../../models/user');

router.get('/user', function(req, res, next) {
  User.find().lean().exec(function(err, user) {
    if (err) return next(err);
    return res.send(JSON.stringify(user));
  });
});

router.get('/user/:id', function(req, res, next) {
  const entryId = req.params.id;
  User.findById(entryId, (err, user) => {
    if (err) return next(err);
    return res.send(JSON.stringify(user));
  });
});

module.exports = router;
