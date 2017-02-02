
// Dependencies
var express = require('express');
var router = express.Router();

//Models
var data = require('../models/data');

// Routes
data.methods(['put', 'post', 'delete']);
data.register(router, '/upload');

// Return router
module.exports = router;