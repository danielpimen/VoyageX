
var express = require("express");
var bodyParser = require("body-parser");
//var distance = require("../app/config/api.js");



var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Static directory to be served
app.use(express.static("app/public"));

require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
