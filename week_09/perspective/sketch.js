function setup() {
  createCanvas(windowWidth,windowHeight, WEBGL);
}

function draw() {
  perspective(map(mouseY, 0,height,0,45), width/height, 0, -1000);
  
  background(255);
  rotateX(PI/8);
  
  push();
  translate(0,150,0);
  fill(0,255,0);
  cylinder(5,200,5);
  pop();
  
  normalMaterial();
  box();
  
  translate(0,100,0);
  push();
  rotate(PI, [0,1,0]);
  //fill(0,255,0);
  normalMaterial();
  box();
  pop();
  
  translate(0,100,0);
  push();
  rotateY(PI/8);
  normalMaterial();
  box();
  pop();
  
}