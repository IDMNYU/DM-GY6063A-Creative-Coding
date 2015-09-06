var circleWidth;

function setup(){
  createCanvas(500,500);
  circleWidth = 5;
}

function draw(){
  background(255);
  
  fill(0);
  ellipse(width/2,height/2, circleWidth, 100);
  
  circleWidth++;
}
