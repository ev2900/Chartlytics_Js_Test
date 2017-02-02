
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var spotSchema = new mongoose.Schema({
	type: String,
	order: Number,
	name: String,
});

// Return model
module.exports = restful.model('info', spotSchema);