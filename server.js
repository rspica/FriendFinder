// ***************** Dependencies *****************
//-------------------------------------------------
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// **************** express set-up ****************
//-------------------------------------------------
var app = express();


app.set( 'port', process.env.PORT || 3000 );


// ******************** Routes ********************
//-------------------------------------------------
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, "home.html"));
});

app.get('/survey', function(req, res) {
	res.sendFile(path.join(__dirname, "survey.html"));
});



// ****** Starts server to begin listening ********
//-------------------------------------------------
app.listen(app.get('port'), function() {
	console.log("listening on port " + app.get('port'));
});