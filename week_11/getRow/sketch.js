var table;
var aveTemperatureData = [];
function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable("data/antarctica_weather_averages.csv", "csv", "header");
}
function setup() {
  createCanvas(400,400);
  textSize(24);
  textAlign(CENTER);
  aveTemperatureData = table.getRow(2).arr;//average lows
}

function draw(){
  background(255);
  noFill();
  translate(0,height/2);
  beginShape();
  noFill();
  for(var i=2; i < aveTemperatureData.length -3; i++){
    var temp = aveTemperatureData[i] * 5;
    var x = width / (aveTemperatureData.length - 1) * i;
    
    vertex(x, -temp);
    fill(0);
    ellipse(x, -temp, 10, 10);
    noFill();
  }
  endShape();
}