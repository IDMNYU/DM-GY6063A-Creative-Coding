/**
* Random ellipse height & width
*/

void setup(){
  size(500,500);
  smooth();
}
void draw(){
  background(0);
  float noiseWidth = width/2 + 200 * random(1);
  float noiseHeight = height/2 + 200 * random(1);
  
  fill(200);
  ellipse(width/2,height/2, noiseWidth,noiseHeight);
}
