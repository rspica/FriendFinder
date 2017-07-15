const path = require('path');

const friends = require('../data/friends')

module.exports = function(app) {

    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    app.post('/data/friends', function(req, res) {
        friends.push(req.body);
    });
};
