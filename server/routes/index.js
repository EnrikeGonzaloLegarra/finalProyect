/*jshint esversion:6*/
const express = require('express');
const eventApi = require('./apiEvent/event');
const router = express.Router();

router.use('/apiEvent', eventApi);

module.exports = router;
