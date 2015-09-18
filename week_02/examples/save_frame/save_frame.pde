void setup(){
  size(displayWidth,displayHeight);
}
void draw(){
  triangle(0,height, width / 3,0,mouseX, mouseY);
  saveFrame("frame-####.png");
}