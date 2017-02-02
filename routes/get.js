
// Dependencies
var express = require('express');

// Models
var data = require('../models/data');

// Router
var router = express.Router();

// GET - in aggredated manner 
router.route('/get') 

.get(function(req, res) {
	data.find(function(err, data) {
		if (err) 
			res.send(err);
		var sortedByOrder = data.sort(function(a,b){
			return a.order - a.order;
		});

		res.send(sortedByOrder);

		


		//res.json(sortedData);
	});
});


// Return router
module.exports = router;