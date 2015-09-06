void setup(){
  size(500,500);
}
void draw(){
  int x = 0;
  int y = 0;
  background(45,43,100);
  stroke(255);
  beginShape(LINES);
  while(x < width && y < height) {
      vertex(x,y);
      x+=10;
      y+=10;
  }
  endShape();
}
