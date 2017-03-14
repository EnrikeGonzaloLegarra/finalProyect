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
    //console.log(req.file.filename);

    //const gpxFile = `/uploads/${req.gpxFile.filename}`;

    //body.gpxFile = gpxFile;

    const even = new Even(body);
    even.save(function(err, doc) {
      if (err) {
        console.log(err);
        return next(err);
      }
      console.log("back event", doc);
      res.status(202).json(even);

    });
  });

  // router.post('/event/upload', upload.single('file'), function(req, res) {
  //   const file = new File({
  //     name: req.body.name,
  //     brand: req.body.brand,
  //     image: `/uploads/${req.file.filename}`,
  //     specs: JSON.parse(req.body.specs) || []
  //   });
  //
  //   file.save((err) => {
  //     if (err) {
  //       return res.send(err);
  //     }
  //
  //     return res.json({
  //       message: 'New Phone created!',
  //       file: file
  //     });
  //   });
  // });


  router.post('/event/uploadFile', upload.single('file'), function(req, res) {
    const file = new File({
      //eventId: req.body.name,
      //file.filename: "prueba",
      gpx: `/uploads/${req.file.filename}`,
      //specs: JSON.parse(req.body.specs) || []
    });

    file.save((err) => {
      if (err) {
        return res.send(err);
      }

      return res.json({
        message: 'GPX FILE OK!',
        file: file
      });
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
      gpxFile,
      eventFile,
      town,
      club,
      eventDate,
      inscribedFinalDate
    } = body;

    const criteria = {
      _id: id
    };
    const update = {
      $set: {
        gpxFile,
        eventFile,
        town,
        club,
        eventDate,
        inscribedFinalDate,
        eventWeb
      }
    };

    Even.updateOne(criteria, update, function(err, even) {
      if (err) return next(err);
      return res.send(JSON.stringify(even));
    });
  });
  /*--------------------De aqui para arriba funciona----------*/






  module.exports = router;
