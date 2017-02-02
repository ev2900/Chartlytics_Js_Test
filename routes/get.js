
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
		
		// Error 
		if (err) 
			res.send(err);
		
		// Sort the Data
		var sortedByOrder = data.sort(function(a,b) {
			return a.order - b.order;
		});

		// Grouping Logic
		var output = [];

			// handling base case
			if(sortedByOrder[0].type === 'Person'){
				output.push({
					"type": sortedByOrder[i].type,
					"order": sortedByOrder[i].order,
					"people": [sortedByOrder[i].name]
				})
			}
			else if(sortedByOrder[0].type === 'Place'){
				output.push{
					"type": sortedByOrder[i].type,
					"order": sortedByOrder[i].order,
					"name": sortedByOrder[i].name
				}
			}

			// handling the remander of the list 
			for(var i=1; i<sortedByOrder.length; i++) {
				if(sortedByOrder[i].type === 'Person') {
					if(output[output.length-1].type === sortedByOrder[i])

					output[output.length-1].people.push(sortedByOrder[i].name);
				}
			}
		
		res.send(output);	
	});
});

// Return router
module.exports = router;