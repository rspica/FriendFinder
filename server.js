// ****************** Dependencies ******************
//---------------------------------------------------
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// ***************** express set-up *****************
//---------------------------------------------------
var app = express();

app.set( 'port', process.env.PORT || 3000 );


// * Sets up the Express app to handle data parsing *
//---------------------------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// ********************* Routes *********************
//---------------------------------------------------
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, "public/home.html"));
});

app.get('/about', function() {
	res.sendFile(path.join(__dirname, "public" "about.html"));
});

app.get('/survey', function(req, res) {
	res.sendFile(path.join(__dirname, "public" "survey.html"));
});



// ******* Starts server to begin listening *********
//---------------------------------------------------
app.listen(app.get('port'), function() {
	console.log("listening on port " + app.get('port'));
});