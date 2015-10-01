/**
** Harmonic motion with angular acceleration
**/
var aVelocity = 0.0;
var aAccel = 0.001;
var angle = 0.0;
var x = 0.0;
//change the value of period to change how fast the rectangle animates
var period = 45;
function setup(){
  createCanvas(windowWidth,windowHeight);
}
function draw(){
  background(255);
  translate(width/2, height/2);
  var amplitude = width/2;//play with the amplitude value 
  x = sin(angle)* amplitude;
  fill(245,0,123);
  rect(0,0,x,40);
  
  angle+=aVelocity;
  aVelocity+=aAccel;
  constrain(aVelocity, 0.0,1.0);
}
