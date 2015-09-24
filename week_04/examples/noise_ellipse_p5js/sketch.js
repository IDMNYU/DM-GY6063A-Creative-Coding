/**
* Based on Learning Processing, exercise 13-3
* Adapted for p5js by Kevin Siwoff, Fall 2015
*/

var xtime = 0.0;
var ytime = 100.0;
var incr = 0.01;

function setup(){
  createCanvas(windowWidth,windowHeight);
}
function draw(){
  background(0);
  var noiseWidth = width/2 + 200 * noise(xtime);
  var noiseHeight = height/2 + 200 * noise(ytime);
  
  xtime+=incr;
  ytime+=incr;
  
  fill(200);
  ellipse(width/2,height/2, noiseWidth,noiseHeight);
}
