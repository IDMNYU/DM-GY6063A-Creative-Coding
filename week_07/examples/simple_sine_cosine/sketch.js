function setup() {
  createCanvas(400,400);
  frameRate(10);
}

function draw() {
  background(255);
  var val = sin(radians(frameCount)) * 34;
  println(val);
}