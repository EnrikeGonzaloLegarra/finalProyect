const upload = require('../../configs/multer');


router.post('/event/create-event', upload.single('file'), function(req, res) {
  const file = new File({
    eventId: req.body.name,
    gpx: `/uploads/${req.file.filename}`,
    specs: JSON.parse(req.body.specs) || []
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
