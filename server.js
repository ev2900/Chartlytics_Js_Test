// Dependencies 
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var node_restful = require('node-restful');
var path = require('path');

// MongoDB (helpful hint. if this data base does not exist I will create it for you)
mongoose.connect('mongodb://localhost/chartalytics');

// Express
var app = express();

// View Engine
app.set("views", __dirname + "/views");
app.set('view engine', 'ejs');

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from ./public folder
app.use(express.static(path.join(__dirname, 'public')));

// Route
app.use('/api', require('./routes/api'));
app.use('/api', require('./routes/get'));

// Home Page 
app.get('/', function(req, res) {
	res.render("index.ejs");
});

// Start server
app.listen(9000);
console.log('API is running on port 9000');