function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);
}

function draw() {
  background(100);
  //ambient light takes 3 or 4 parameters:
  // r, g, b, and alpha
  ambientLight(255,100,0);
  sphere(100);
}