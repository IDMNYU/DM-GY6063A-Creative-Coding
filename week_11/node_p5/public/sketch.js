var img;
function preload(){
  img = loadImage('assets/cat.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(255);
  push();
  rotate(map(frameCount % 360, 0,360,0,TWO_PI), [1,1,1]);
  texture(img);
  box(100);
  pop();
}