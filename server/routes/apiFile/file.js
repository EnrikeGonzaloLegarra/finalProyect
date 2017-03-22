const upload = require('../../config/multer');
const express = require('express');
const router = express.Router();
const Event = require('../../models/event');

router.post('/create', upload.single('file'), function(req, res) {
  const body = req.body;
  body.gpxFile = req.file.filename;

  const event = new Event(body);
  event.save(function(err, doc) {
    if (err) {
      return next(err);
    }

  });
  return res.status(200).json({
    message: "File was uploaded"
  });
});

module.exports = router;
