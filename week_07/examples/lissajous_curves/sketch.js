var periodOne = 125.0;
var periodTwo = 90.0;
var pointCount = 0;
var angle = 0.0;
var amplitude = 200;
function setup(){
  createCanvas(400,400);
}
function draw(){
  noFill();
  strokeWeight(1);
  stroke(100);
  translate(width/2, height/2);
  if(pointCount > 250){
    noLoop();
  }
  beginShape();
    for(var i=0; i < pointCount; i++){
      angle = i / periodOne * TWO_PI;
      var x = sin(angle) * amplitude;
      angle = i / periodTwo * TWO_PI;
      var y = sin(angle) * amplitude;
      vertex(x,y);
    }
  endShape();
  pointCount++;
}