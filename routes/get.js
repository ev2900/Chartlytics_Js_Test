
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
		var sortedByOrder = data.sort(function(a,b){
			return a.order - b.order;
		});

		// grouping
		var output = [];
		for( var i=1; i<sortedByOrder.length; i++){
			if(sortedByOrder[i].type === sortedByOrder[i-1]){
				console.log("loop")
			}
		}
		res.send("end of loop");	

	});
});


// Return router
module.exports = router;