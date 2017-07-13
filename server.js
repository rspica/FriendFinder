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

app.use(express.static(path.join(__dirname, 'app/public')));

// ********************* Routes *********************
//---------------------------------------------------
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



// ******* Starts server to begin listening *********
//---------------------------------------------------
app.listen(app.get('port'), function(err) {
	if (err) {
		console.error("No connection made", err)
	}
	console.log("listening on port " + app.get('port'));
});