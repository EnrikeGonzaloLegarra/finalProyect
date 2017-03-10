  /*jshint esversion:6*/
  const express = require('express');
  const router = express.Router();
  const Even = require('../../models/event');

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

  router.post('/new', function(req, res, next) {
    const body = req.body;
    const even = new Even(body);
    Even.save(function(err, doc) {
      if (err) return next(err);
      return res.send(JSON.stringify(even));
    });
  });
  /*---------DE AQUI PARA ARRIBA FUNCIONA---------------*/

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
      eventAdress,
      inscribedFinalDate,
      eventDate,
      inscribed,
      eventWeb,
      gpxFile
    } = body;

    const criteria = {
      _id: id
    };
    const update = {
      $set: {
        name,
        eventAdress,
        inscribedFinalDate,
        eventDate,
        inscribed,
        eventWeb,
        gpxFile
      }
    };

    Even.updateOne(criteria, update, function(err, even) {
      if (err) return next(err);
      return res.send(JSON.stringify(even));
    });
  });
  /*--------------------De aqui para arriba funciona----------*/






  module.exports = router;
