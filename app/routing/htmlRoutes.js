var path = require("path");

module.exports = function(app) {
    // When domain/survey is hit show server.html
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
    // when domain/ anything else is hit show home.html 
    app.get("*", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

};