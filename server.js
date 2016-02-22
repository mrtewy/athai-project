// modules =================================================
var express 			= require('express');
var bodyParser     		= require('body-parser');
var router 				= express.Router();
var app 				= express();

// configuration ===========================================
var port = process.env.PORT || 9000; // set our port
 
// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
// Directory
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.use('/libs', express.static(__dirname + '/bower_components')); // set the static files location /public/img will be /img for users

var config = require('./src/config.js');
// routes ==================================================
var routes = require('./src/routes.js')(router);
// apply the routes to our application
app.use('/api/', router);

// start app ===============================================
app.listen(port);	
console.log('Server happens on port ' + port); 			// shoutout to the user