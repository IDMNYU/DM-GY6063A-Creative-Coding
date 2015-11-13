//welcome to our simple server.js!
//import dependencies here
var http = require('http');

//Lets define a port we want to listen to
//const is a node js specific data type for a READ ONLY variable
const PORT=9000;

//Create a server
//we pass in a function as our parameter
var server = http.createServer(
  function(request,response){
    response.end('you\'ve requested: ' + request.url);
  }
);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
