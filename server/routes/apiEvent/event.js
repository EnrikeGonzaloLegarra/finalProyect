  /*jshint esversion:6*/
  const express = require('express');
  const router = express.Router();
  const Even = require('../../models/event');
  const upload = require('../../config/multer');
  const File = require('../../models/file');

  router.get('/events', function(req, res, next) {
    Even.find().lean().exec(function(err, events) {
      if (err) return next(err);
      return res.send(JSON.stringify(events));
    });
  });

  router.get('/event/:id', function(req, res, next) {
    const eventId = req.params.id;
    Even.findById(eventId, (err, even) => {
      if (err) return next(err);
      return res.send(JSON.stringify(even));
    });
  });

  router.post('/event/new', upload.single('gpxFile'), function(req, res, next) {
    const body = req.body;
    const even = new Even(body);
    even.save(function(err, doc) {
      if (err) {
        return next(err);
      }
      res.status(202).json(even);

    });
  });

  router.get('/edit/:id', function(req, res, next) {
    const id = req.params.id;
    Even.findOne({
      _id: id
    }, function(err, product) {
      if (err) return next(err);
      return res.send(JSON.stringify(even));
    });
  });

  router.post('/edit/:id', function(req, res, next) {
    const id = req.params.id;
    const body = req.body;
    const {
      name,
      lastName,
      email,
      town,
      age,
      club,
      date
    } = body;

    const criteria = {
      _id: id
    };
    const update = {
      $set: {
        name,
        lastName,
        email,
        town,
        age,
        club,
        date
      }
    };

    Even.updateOne(criteria, update, function(err, even) {
      if (err) return next(err);
      return res.send(JSON.stringify(even));
    });
  });


  module.exports = router;
