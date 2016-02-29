/**
** Simple second clock.
** An exercise in translating from polar to cartesian coordinates
**/
float radius = 250.0;
float angle = 0.0;
float x,y;
void setup(){
  size(600,600);
}
void draw(){
  background(25);
  translate(width/2, height/2);
  ellipseMode(CENTER);
  ellipse(0,0,5,5);
  
  angle = (second() / 59.0) * TWO_PI;
  
  x = cos(angle)* radius;
  y = sin(angle)* radius;
  
  stroke(255);
  
  //draw a line from the center of our screen and as long as our radius
  line(0,0,x,y);
  ellipse(x,y,10,10);
  
  
}
