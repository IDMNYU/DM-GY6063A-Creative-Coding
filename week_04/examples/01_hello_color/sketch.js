function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  colorMode(HSB, 360,100,100);
  rectMode(CENTER);
  background(mouseY%360, 100,100);
  noStroke();
  fill(360-mouseY%360, 100,100);
  rect(width/2,height/2, mouseX+1,mouseX+1);
}