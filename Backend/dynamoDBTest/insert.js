var AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-east-1',
    endpoint: 'http://localhost:8000'
});

var tableName = 'NodeJsProductJS';
var dynamodb = new AWS.DynamoDB();

//load data
var productName = require('./database.json');

putItems(productName)
    .catch((err) => {
        console.error('Insert failed',err);
    });

function putItems(items){
    var insertedCount = 0;
    return new Promise((resolve,reject) =>{
        Object.values(items).forEach(item => {
            var params ={
                TableName : tableName,
                Item: {
                    text: {
                        S: item['text']
                    },
                    tags: {
                        S: JSON.stringify(item['tags'])
                    }
                }
            };

            dynamodb.putItem(params,(err, data) => {
                if(err){
                    reject(err);
                }else{
                    if(++insertedCount == items.length){
                       console.log('Successfully Inserted' + items.length + 'items');
                        resolve();
                    }
                }
            });
        });
    });
}