var path = require("path");



module.exports = function(app) {


    app.get("/create_account", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/create_account.html"));
    });
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    app.get("/itinerary", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/itinerary.html"));
    });
    app.get("/book", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/book.html"));
    });
    app.get("/about", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/about.html"));
    });
    app.get("/mytrip", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/mytrip.html"));
    });
    app.get("/destinations/mars", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/destinations/mars.html"));
    });
    app.get("/destinations/moon", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/destinations/moon.html"));
    });
    app.get("/destinations/pluto", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/destinations/pluto.html"));
    });
    app.get("/destinations/mercury", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/destinations/mercury.html"));
    });


};