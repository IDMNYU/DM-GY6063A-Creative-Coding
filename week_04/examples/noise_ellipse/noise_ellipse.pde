/**
* Based on Learning Processing, exercise 13-3
*/

float xtime = 0.0;
float ytime = 100.0;
float incr = 0.01;

void setup(){
  size(500,500);
  smooth();
}
void draw(){
  background(0);
  float noiseWidth = width/2 + 200 * noise(xtime);
  float noiseHeight = height/2 + 200 * noise(ytime);
  
  xtime+=incr;
  ytime+=incr;
  
  fill(200);
  ellipse(width/2,height/2, noiseWidth,noiseHeight);
}
