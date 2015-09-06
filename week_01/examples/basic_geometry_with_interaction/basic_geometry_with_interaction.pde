void setup(){
  size(800,500);
}
void draw(){
  int shapeWidth = 200;
  int shapeHeight = 200;
  
  //clear background white
  //comment this line out with // to test
  //background color
  background(255);
  
  rect(20,20,mouseX,mouseY);
  ellipse(400,120,mouseX,mouseY);
  line(600,20,600, 20 + mouseY);
  triangle(20,240,
    20+mouseX,240,
    110,240 + mouseY);
  arc(400, 240, mouseX, mouseY, 0, PI);
  point(600, 260);
}

