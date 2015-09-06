int circleWidth;

void setup(){
  size(500,500);
  circleWidth = 5;
}

void draw(){
  background(255);
  
  fill(0);
  ellipse(width/2,height/2, circleWidth, 100);
  
  circleWidth++;
}
