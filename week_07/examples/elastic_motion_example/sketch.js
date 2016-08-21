function setup(){
  createCanvas(400,400);
}
function draw(){
  var amplitude = height/2;
  var y = sin(radians(frameCount)) * amplitude;
  background(255);
  translate(width/2,height/2);
  ellipse(0,y,50,50);
}