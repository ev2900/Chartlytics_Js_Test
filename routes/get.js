
// Dependencies
var express = require('express');

// Models
var data = require('../models/data');

// Router
var router = express.Router();

// GET - in aggredated manner 
router.route('/get') 

.get(function(req, res) {
	data.find(function(err, sortedData) {
		if (err) 
			res.send(err);
		res.json(sortedData);
	});
});


// Return router
module.exports = router;