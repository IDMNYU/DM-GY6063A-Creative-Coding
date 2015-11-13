var express = require('express');
var app = express();//need to use round brackets to activate express

var PORT = process.argv[2] || 9000;

//we use app.get to retrieve our request and pass the success into a 
//callback
//home page
app.get('/', function(request, response){
	response.send('successful response!');
});

//about page
app.get('/about', function(request, response){
  response.send('you landed on' + request.url);
});

app.get('/contact', function(request, response){
  response.send('you landed on' + request.url);
});


var server = app.listen(PORT, function(){
	var host = server.address().address;
	var port = server.address().port;
});
