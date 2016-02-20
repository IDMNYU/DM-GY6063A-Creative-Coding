function setup() {
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
}

function draw() {
  noStroke();
  fill(255);
  rect(width/4,height/2,width/2,height);
  fill(0);
  rect(width/4,height/2, 10, 10);
  
  fill(0);
  rect((width*3)/4, height/2,width/2, height);
  fill(255);
  rect(width*3/4, height/2, 10,10);
}