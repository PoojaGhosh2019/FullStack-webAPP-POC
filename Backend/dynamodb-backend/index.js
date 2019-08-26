var express = require("express");
var bodyParser = require("body-parser");
var AWS = require('aws-sdk');
var cors = require('cors')
var app = express();

app.use(cors()) 

AWS.config.update({
    region: 'us-east-1',
    endpoint: 'http://localhost:8000'
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require("./routes/routes.js")(app);

var server = app.listen(4000, function () {
    console.log("Listening on port %s...", server.address().port);
});
