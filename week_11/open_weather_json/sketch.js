var weather;
function preload() {
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=bd82977b86bf27fb59a04b61b657fb6f';
  weather = loadJSON(url);
  
}

function setup() {
  noLoop();
}

function draw() {
  background(200);
  // get the humidity value out of the loaded JSON
  var data = weather.main;
  println("our data is : ");
  println(data);
  
  println("now were looping");
  for(var item in data){
    if (data.hasOwnProperty(item)){
      println("data has an item : ");
      println(data[item]);
    }
    
  }
  var humidity = weather.main.humidity;
  fill(0, humidity); // use the humidity value to set the alpha
  ellipse(width/2, height/2, 50, 50);
}