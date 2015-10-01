/**
** Harmonic motion with angular acceleration
**/
float aVelocity = 0.0;
float aAccel = 0.001;
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
  x = sin(angle)* amplitude;
  fill(245,0,123);
  rect(0,0,x,40);
  
  angle+=aVelocity;
  aVelocity+=aAccel;
  constrain(aVelocity, 0.0,1.0);
}
