function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();
  fill(255,0,0);
  rect(0,0, 200,200);
  
  fill(0,255,0);
  translate(200,200);
  rect(0,0,200,200);
}