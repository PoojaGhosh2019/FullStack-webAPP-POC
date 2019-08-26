var AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-east-1',
    endpoint: 'http://localhost:8000'
});

var dynamodb = new AWS.DynamoDB();
var params = 
{
    TableName: 'NodeJsProductJS',
    KeySchema: [
        {AttributeName: "text", KeyType: "HASH"} //PartionKey
    ],
    AttributeDefinitions: [
        {AttributeName: "text", AttributeType: "S"}
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
    }
};

dynamodb.createTable(params,function(err,data){
    if(err){
        console.log('Unable to create table!', JSON.stringify(err));      
    } else{
        console.log('Table created');
    }
});