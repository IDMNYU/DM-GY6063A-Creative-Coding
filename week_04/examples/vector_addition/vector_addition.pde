/**
* Vector addition
*/

PVector location;
PVector velocity;
void setup(){
  size(500,500);
  location = new PVector(50,10);
  velocity = new PVector(4,4);
}
void draw(){
  background(255);
  strokeWeight(2);
  stroke(#666666);
  fill(#cccccc);
  location.add(velocity);
  if(PVector.dist(location, PVector.mult(velocity, 4)) >= width-20){
    location = new PVector(50,10);
  }
  ellipse(location.x,location.y,50,50);
}
