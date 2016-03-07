function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();
  fill(255,0,0);
  for(var i=0; i < 4; i++){
    //there's a problem here.
    //what do we expect to happen?
    translate(i*40, 0);
    rect(0,0,20,20);
  }
}