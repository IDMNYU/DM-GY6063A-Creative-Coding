/**
** spiral.pde
**/
float radius = 0.0;
float angle  = 0.0;
void setup(){
  size(500,500);
}
void draw(){
 background(255);
 float x=0.0,y=0.0;
 
 radius = 0.0;
 //try commenting out this line for movement
 angle  = 0.0;
 
 while (radius < width/2){
   
   convert from polar coordinates to cartesian
   y = sin(angle)*radius + height/2;
   x = cos(angle)*radius + width/2;
   
   fill(0);
   ellipse(x,y,2,2);
   angle+=0.1;
   radius++;
 } 

}
