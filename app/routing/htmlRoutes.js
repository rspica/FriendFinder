// ****************** Dependencies ******************
//---------------------------------------------------
const path = require('path');


// ********************* Routes *********************
//---------------------------------------------------
module.exports = function(app) {

    app.use('/home', function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, "../public"
            "survey.html"));
    });

}
