/*jshint esversion:6*/
const express = require('express');
const router = express.Router();
const Even = require('../../models/event');

router.get('/events', function(req, res, next) {
  Even.find().lean().exec(function(err, even) {
    if (err) return next(err);
    return res.send(JSON.stringify(even));
  });
});

router.get('/event/:id', function(req, res, next) {
  const eventId = req.params.id;
  Even.findById(eventId, (err, even) => {
    if (err) return next(err);
    return res.send(JSON.stringify(even));
  });
});


module.exports = router;
