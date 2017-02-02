// Dependencies 
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var node_restful = require('node-restful');

// MongoDB (helpful hint. if this data base does not exist I will create it for you)
mongoose.connect('mongodb://localhost/chartalytics');

// Express
var app = express();

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route
app.use('/api', require('./routes/api'));
app.use('/api', require('./routes/get'));

// Start server
app.listen(9000);
console.log('API is running on port 9000');