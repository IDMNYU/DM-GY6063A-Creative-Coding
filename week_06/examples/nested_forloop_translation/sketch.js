function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();
  fill(255,0,0);
  for(var i=0; i < 400; i+=40){
    for(var j=0; j < 400; j+=40){
      push();
      translate(i, j);
      rect(0,0,20,20);
      pop();
    }

  }
}