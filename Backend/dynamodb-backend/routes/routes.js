
var stringUtil = require('./StringUtils.js');
var AWS = require('aws-sdk');

var dynamodb = new AWS.DynamoDB();

var appRouter = function(app) {
    app.get("/ingredient/:key", function(req, res) {

        console.log(req.params.key);

        var params = {
            Key: {
             "text": {
               S: req.params.key
              }
            }, 
            ConsistentRead: true,
            TableName: "NodeJsProductJS"
           };

           dynamodb.getItem(params, function(err, data) {
            if (err) { 
                console.log("ERROR in QUERY = " + err + err.stack); // an error occurred
            } else {
                console.log(data);           // successful response
                if (Object.keys(data).length === 0) {
                    console.log("Empty response");
                    res.send("");
                } else {
                    res.send(data);
                }
            }     
          });
    });


    app.get("/fuzzy-search/:key", function(req, res) {
        var keyStr = req.params.key
        var correctedKey = keyStr.toHashKey();
        var params = {
            Key: {
             "text": {
               S: correctedKey
              }
            }, 
            ConsistentRead: true,
            TableName: "NodeJsProductJS"
           };

           dynamodb.getItem(params, function(err, data) {
            if (err) { 
                console.log("ERROR in QUERY = " + err + err.stack); // an error occurred
            } else {
                console.log(data);           // successful response
                if (Object.keys(data).length === 0) {
                    console.log("Empty response");
                    res.send("");
                } else {
                    res.send(data);
                }
            }     
          });
    });

}

module.exports = appRouter;