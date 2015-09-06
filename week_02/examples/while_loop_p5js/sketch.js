function setup(){
  createCanvas(500,500);
}
function draw(){
  var x = 0;
  var y = 0;
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
