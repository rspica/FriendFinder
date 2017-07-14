const path = require('path');

const friends = require('../data/friends')

module.exports = function(app) {

    app.get('/api/survey', function(req, res) {
        res.json(friends);
    });

    app.post('/data/friends', function(req, res) {
    	console.log("You're hittin the fucking ting")
    	console.log(req.body)
        // friendData.push(req.body);

    });
};
