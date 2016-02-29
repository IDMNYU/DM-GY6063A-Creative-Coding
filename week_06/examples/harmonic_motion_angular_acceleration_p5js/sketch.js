/**
** Harmonic motion with angular acceleration
**/
var aVelocity;
var aAccel;
var angle;
var x = 0.0;

function setup(){
  createCanvas(windowWidth,windowHeight);
  aVelocity = createVector();
  aAccel = createVector(0.001, 0.003 );
  angle = createVector(0,0);
}
function draw(){
  background(255);
  translate(width/2, height/2);
  var amplitude = width/2;//play with the amplitude value 
  
  // angle = incr / period * TWO_PI
  //angle = (frameCount / period ) *TWO_PI;
  
  x = cos(angle.x)* amplitude;
  y = sin(angle.y)*amplitude;
  fill(245,0,123);
  rect(0,0,x,y);
  
  angle = p5.Vector.add(angle, aVelocity);
  // angle+=aVelocity;
  
  aVelocity.add(aAccel);
  //aVelocity+=aAccel;
  //constrain(aVelocity, 0.0,1.0);
}
