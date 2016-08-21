/**
** Simple harmonic motion
**/
var x = 0.0;
var angle = 0.0;
var period = 145.0;
function setup(){
  createCanvas(windowWidth,windowHeight);
}
function draw(){
  background(255);
  translate(width/2, height/2);
  fill(245, 0, 123);
  var amplitude = width/2;
  angle = frameCount / period * TWO_PI;
  x = sin(angle) * amplitude;
  rect(x,0, 45,45);
}

