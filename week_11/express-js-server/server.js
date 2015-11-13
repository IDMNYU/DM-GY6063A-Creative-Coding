var express = require('express');
var app = express();//need to use round brackets to activate express

//we use app.get to retrieve our request and pass the success into a 
//callback
app.get('/', function(request, response){
	response.send('successful response!');
});

var server = app.listen(4000, function(){
	var host = server.address().address;
	var port = server.address().port;
});
