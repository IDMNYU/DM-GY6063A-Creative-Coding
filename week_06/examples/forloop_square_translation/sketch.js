function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();
  fill(255,0,0);
  for(var i=0; i < 400; i+=40){
    push();
    translate(i, 0);
    rect(0,0,20,20);
    pop();
  }
}