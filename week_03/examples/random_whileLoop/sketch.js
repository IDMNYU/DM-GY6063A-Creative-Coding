function setup() {
  createCanvas(500,500);

  noLoop();
}

function draw() {
  var x = 0;
  var y = 0;
  
  background(45,43,100);
  stroke(255);
  beginShape(LINES);
  while(x < width && y < height){
    vertex(x,y);
    x+=random(10);
    y+=random(10);
  }
  endShape();
}