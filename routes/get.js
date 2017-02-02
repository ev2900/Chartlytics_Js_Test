
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
		
		// error 
		if (err) 
			res.send(err);
		
		// sort the data
		var sortedByOrder = data.sort(function(a,b) {
			return a.order - b.order;
		});

		// grouping
		var output = [];
		for(var i=0; i<sortedByOrder.length; i++) {
			if(sortedOrder[i].type === 'Person') {
				output.push({
					"type": sortedOrder[i].type;
					"order": sortedOrder[i].order;
					"people": [sortedOrder[i].name];
				});
			}
		}
		res.send("end of loop");	

	});
});


// Return router
module.exports = router;