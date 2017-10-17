// ****************** Dependencies ******************
//---------------------------------------------------
const path = require('path'); //delivers html pages to browser via express

// ****************** html Routes *******************
//---------------------------------------------------
module.exports = function(app) {  //app referes to express
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

};
