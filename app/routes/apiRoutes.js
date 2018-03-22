var tripList = require("./practice.js");
var userChoice = require("./practice2.js");
var newUser = require('./account.js');

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

    app.get("/user/trip", function(req, res){
        res.json(userChoice);
    });
    app.post("/user/trip", function(req, res){
        res.json(true);
        userChoice.push(req.body);
    });

    app.get("/api/new", function(req, res){
        res.json(newUser);
    });
    app.post("/api/new", function(req, res){
        res.json(true);
        newUser.push(req.body);
    });






};