var xspeed = 10.0;
var x = 0.0;
var angle = 0.0;

function setup(){
  createCanvas(400,400);
  frameRate(10);
}
function draw(){
  background(255); 
  translate(0,height/2);
  var amplitude = height/4;//play with the amplitude value 
  var y;
  angle = angle += 10.0;  
  y = sin(radians(angle)) * amplitude;
  fill(100);
  ellipse(x,y,10,10);
  x +=10.0;
  x = x % width;
}