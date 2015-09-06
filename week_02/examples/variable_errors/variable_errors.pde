/**
* Warning: This code will produce errors
*/ 
boolean hello;
int circleWidth;
void setup(){
  size(500,500);

  println(hello);
}

void draw(){

  background(255);
  
  fill(0);
  ellipse(width/2,height/2, circleWidth, 100);
  
  circleWidth++;
}
