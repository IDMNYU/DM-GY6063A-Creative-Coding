/**
** Sketch based on Ab Olympo by Claudio Parmiggiani 
*/
void setup(){
  size(500,600);
}
void draw(){
  background(#D3D1D1);
  fill(#FAFAFA);
  int outerWidth = width -40;
  ellipse(width /2, height /2 , outerWidth, outerWidth);
  
  fill(#243CD1);
  ellipse(width /2 , height /2 , outerWidth /2 , outerWidth /2);
}