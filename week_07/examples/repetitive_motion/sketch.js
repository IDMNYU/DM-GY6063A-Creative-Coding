var x = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(220);
translate(0,height/4);
  noStroke();
  fill(255,0,0);
  rect(x, 0, 200,200);
  x++;
  x = x % width;
}