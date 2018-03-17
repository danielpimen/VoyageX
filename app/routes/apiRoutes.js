var tripList = require("./practice.js")



module.exports = function(app) {

    app.get("/api/trip", function(req, res) {
        res.json(tripList);
    });

    app.post("/api/trip", function(req, res) {
        if (tripList.length < 5) {
            tripList.push(req.body);
            res.json(true);
        } else {
            res.json(false);
        }
    });
};