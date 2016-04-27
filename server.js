var express = require('express');
var app = express();
var path = require('path');
var request = require("request");
var temp;
var obj = "";


var url = "https://api.mlab.com/api/1/databases/sunayana/collections/sunayana?apiKey=qJ9DBhvvMIUeEMdsy7XvjgY44JE-HT9F"
request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
	obj = JSON.stringify(body);

    }
	});
	
	
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client.html'));
});

app.get('/data', function(req, res) {

	res.setHeader('Content-Type', 'application/json');
    res.send(obj);
});
//console.log(obj.data);
var serverPort = Number(process.env.PORT || 8080);
app.listen(serverPort);
console.log("Server running at 8080"); 

