const path = require('path');
const friends = require('../data/friends')

module.exports = function(app) {

    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function(req, res) {
        console.log("req.body from apiRoutes.js ",req.body)
        var toMatchData = {
            firstName: "",
            lastName: "",
            email: "",
            photo: "",
            userDiff: 1000
        };

        var userData = req.body;
        var userScore = userData.scores
        var totalDiff = 0;

        friends.forEach(function(friend, i){
            console.log(friend[i]);
            totalDiff = 0;

            for(let j=0; j < friend[i].score[j]; j++){
                totalDiff += Math.abs(parseInt(userScore[j]) - parseInt(friend[i].scores[j])); 
                
                if (totalDiff <= toMatchData.userDiff) {
                    toMatchData.firstName = friend[i].firstName;
                    toMatchData.lastName = friend[i].lastName;
                    toMatchData.email = friend[i].emaile;
                    toMatchData.photo = friend[i].photo;
                    toMatchData.userDiff = totalDiff;
                }
            }
        });

        friends.push(userData);

        res.json(toMatchData);

        });

};
