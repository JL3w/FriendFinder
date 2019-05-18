var friends = require("../data/friends");

module.exports = function(app) {
    // send our friend data stored in friends.js when a get on api/friends is performed
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    // on survey submission receive user survey data(req) as a var for calcin, calculate best "friend", send match data (res), save data back to friends.js
    app.post("api/friends", function(req, res) {
        // logics
    })
}