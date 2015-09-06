var numCircles = 20;
var scalar = 1.0;

function setup(){
  createCanvas(500,500);
}

function draw(){
  background(255);
  scale(scalar);
  
  for(var i = 1; i <= numCircles; i++){
    noFill();
    fill(random(255), random(255), random(255));
    ellipse(width/2, height/2, width / i, width / i);
  }
  scalar-=0.001;
}
