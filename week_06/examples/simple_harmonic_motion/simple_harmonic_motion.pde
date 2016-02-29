/**
** Simple harmonic motion
**/

float angle = 0.0;
float x = 0.0;
//change the value of period to change how fast the rectangle animates
float period = 45;
void setup(){
  size(500,500);
}
void draw(){
  background(255);
  translate(width/2, height/2);
  float amplitude = width/2;//play with the amplitude value 
  float angle = frameCount / period * TWO_PI;
  x = sin(angle)* amplitude;
  fill(245,0,123);
  rect(0,0,x,40);
}
