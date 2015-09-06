/*
* The differences between an ellipse and an arc
* notice that the arc has 2 more parameters: start and stop.
*/
void setup(){
  size(500,500);
}

void draw(){
  arc(width /2, height / 2, 50,50,           radians(180), TWO_PI);
  ellipse(width /2 , height / 2, 50, 50                          );
}
