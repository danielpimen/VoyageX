var express = require("express");
var fs = require('fs');
var axios = require('axios');
var bodyParser = require("body-parser");
var cors = require('cors');
var request = require('request');
//var distance = require("../app/config/api.js");



var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

//////////////////////////////////////
axios
    .default({
        method: 'GET',
        url: 'http://api.astronomyapi.org/auth',
        params: {
            app_id: 'a7e18630-5475-4179-83d8-6451d46dad00',
            app_secret: '35416913f4afce4b6793597f57fc1b43f9ca0bfe'
        }
    })
    .then(response => populateData(response.data.data.token))
    .catch(err => console.error(err) || process.exit(1));

function populateData (token) {
    axios
        .default({
            method: 'GET',
            url: 'http://api.astronomyapi.org/positions',
            params: {
                lat: 33.60,
                lon: -84.37,
                from_year: 2018,
                from_month: 2,
                from_day: 24,
                to_year: 2018,
                to_month: 2,
                to_day: 24
            },
            headers: {
                "Authorization": 'Bearer ' + token,
                "Content-type": "application/json"
            },
        })
        .then(response => writeToFile(response.data.data))
        .catch(err => console.error(err) || process.exit(1))
}

function writeToFile (data) {
    fs.writeFile('./data.json', JSON.stringify(data), 'utf8', function(err) {
        if (err) console.error(err) || process.exit(1);
    });
}

app.get('/example', function (req, res) {
    fs.readFile('./data.json', 'utf8', function(err, data) {
        if (err) console.error(err) || process.exit(1);
        res.json(JSON.parse(data));
    });
});




// Static directory to be served
app.use(express.static("app/public"));

require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});