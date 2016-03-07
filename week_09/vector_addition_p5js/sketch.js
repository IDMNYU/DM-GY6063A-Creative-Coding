/**
* Vector addition
* adapted for p5js by Kevin Siwoff,
* Fall 2015
*/
var loc, vel;
var strokeColor = '#666666';
var fillColor = '#cccccc';

function setup(){
  createCanvas(windowWidth,windowHeight);
  loc = createVector(0,0);
  vel = createVector(4,4);
}
function draw(){
  background(255);
  strokeWeight(2);
  stroke(strokeColor);
  fill(fillColor);
  loc.add(vel);
  if(loc.x >= width || loc.y >= height){
    loc = createVector(50,10);
  }
  ellipse(loc.x,loc.y,50,50);
}
