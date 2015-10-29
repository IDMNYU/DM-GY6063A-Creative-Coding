function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);
}

function draw() {
  background(100);
  var dirY = (mouseY / height - 0.5) *2;
  var dirX = (mouseX / width - 0.5) *2;
  directionalLight(255, 100, 0, dirX, -dirY, 0.25);
  sphere(100);
}