/**
** Simple harmonic motion
**/

var angle = 0.0;
var x = 0.0;
//change the value of period to change how fast the rectangle animates
var periodSlider;
function setup(){
  createCanvas(windowWidth,windowHeight);
  periodSlider = createSlider(0,100, 45);
  periodSlider.position(20,20);
}
function draw(){
  background(255);
  fill(0);
  text("period: " + periodSlider.value(), 175,30);
  translate(width/2, height/2);
  var amplitude = width/2;//play with the amplitude value 
  var angle = frameCount / periodSlider.value() * TWO_PI;
  x = sin(angle)* amplitude;
  fill(245,0,123);
  rect(0,0,x,40);
}
