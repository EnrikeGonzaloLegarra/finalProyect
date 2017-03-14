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

router.post('/user/:id', (req, res, next) => {
  const id = req.params.id;
  console.log("body", req.body);
  const body = req.body;
  const {
    name,
    lastName,
    email,
    town,
    club

  } = body;
  const criteria = {
    _id: id
  };
  const update = {
    $set: {
      name,
      email
    }
  };

  User.updateOne(criteria, update, function(err, user) {
    if (err) return next(err);
  });
});

module.exports = router;
