
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


		var output = [];
		for( var i=1; i<sortedByOrder.length; i++){
			if(sortedByOrder[i].type === sortedByOrder[i-1]){
				res.send(sortedByOrder[i].type)
			}
		}

		/*var sortedByOrder.reduce(function(a,b){
			if(a[a.length-1].type === 'Person' && b.type === 'Person'){
				return a.people.push(b.name);
			}
		},[]);*/
		

	});
});


// Return router
module.exports = router;