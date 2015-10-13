/**
** Simple second clock.
** An exercise in translating from polar to cartesian coordinates
**/
var radius = 250.0;
var angle = 0.0;
var x=0, y=0;
function setup(){
  createCanvas(windowWidth,windowHeight);
}
function draw(){
  background(25);
  translate(width/2, height/2);
  ellipse(0,0,5,5);
  
  angle = (second() / 59.0) * TWO_PI;
  
  // memorize this formula, it's helpful
  x = cos(angle)* radius;
  y = sin(angle)* radius;
  
  stroke(255);
  
  //draw a line from the center of our screen and as long as our radius
  line(0,0,x,y);
  ellipse(x,y,10,10);
  
  
}
