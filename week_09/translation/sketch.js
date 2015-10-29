function setup() {
  createCanvas(windowWidth,windowHeight, WEBGL);
}

function draw() {
  background(255);
  rotateX(PI/4);
  
  //closer cube
  fill(255,0,0);
  box();
  
  //further cube
  translate(0,0,-200);
  fill(0,255,0);
  box();
}