# FullStack-webApp-POC
Full Stack webApp development documentation:

Creating the backend on Node.JS a.	Install the dynamoDb locally so that database read and write can be performed without incurring any cost. Following dependent module needs to be installed locally - AWS-SDK b.	Create a database table ‘NodeJsProductJS’ with partition key as ‘text’ with key type HASH and attribute type String . Then insert the data from given ‘database.json’ file using Node.js project ‘dynamoDBTest’.(refer backend folder)

c.	Create backend for accessing the database, node.js project ‘dynamodb-backend’ . It provides following two API endpoints. i.	GET /ingredient/{key} ii.	GET /fuzzy-search/ Following dependent module needs to be installed locally - AWS-SDK Express Body-Parser

Creating the frontend on React.JS The frontend is designed in React which uses the GET APIs exposed by the backend module and displays the ingredients ‘text’ value and the ‘tags’ value on onChange event of the Input box.
