/**
** spiral.pde
**/
var radius = 0.0;
var angle  = 0.0;
function setup(){
  createCanvas(windowWidth,windowHeight);
}
function draw(){
 background(255);
 var x=0.0,y=0.0;
 
 radius = 0.0;
 //try commenting out this line for movement
 angle  = 0.0;
 
 while (radius < width/2){
   
   //convert from polar coordinates to cartesian
   y = sin(angle)*radius + height/2;
   x = cos(angle)*radius + width/2;
   
   fill(0);
   ellipse(x,y,2,2);
   angle+=0.1;
   radius++;
 } 

}
