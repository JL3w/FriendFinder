var friends = require("../data/friends");

module.exports = function(app) {
    // send our friend data stored in friends.js when a get on api/friends is performed
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    // on survey submission receive user survey data(req) as a var for calcin, calculate best "friend", send match data (res), save data back to friends.js
    app.post("/api/friends", function(req, res) {
        var loh = {
            name: "",
            image: "",
            convergence: 10000
        };

        var newMate = req.body;
        var newValues = req.body.values

        var delta;

        for (var i = 0; i < friends.length; i++) {
            var potMate = friends[i];
            delta = 0;

                for (var k = 0; k < potMate.values.length; k++) {
                    var potMateValue = potMate.values[k];
                    var newMatevalue = newValues[k];
                    delta += Math.abs(parseInt(newMatevalue) - parseInt(potMateValue));
                }
            if (delta <= loh.convergence) {
                loh.name = potMate.name;
                loh.image = potMate.image;
                loh.convergence = delta;
            }  
        }
        res.json(loh);
        friends.push(newMate);
    });
};