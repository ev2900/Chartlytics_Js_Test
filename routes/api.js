
// Dependencies
var express = require('express');
var router = express.Router();

//Models
var Spot = require('../models/data');

// Routes
Spot.methods(['get', 'put', 'post', 'delete']);
Spot.register(router, '/upload');

// Return router
module.exports = router;