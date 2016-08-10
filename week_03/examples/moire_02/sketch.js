/**
 * moire #2
 * @author: kevin siwoff
 */
 
var theta = 0.0;
var ellipseWidthMultiplier = 10;
var ellipseHeightMultiplier = 20;
var rotationSpeed = 0.001;
function setup() {
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(255);
  noFill();
  
  //stationary ellipse
  translate(width/2, height/2);
  //loop 25 times
  for(var i =0; i < 25; i++){
    rect(0, 0,
    i*ellipseWidthMultiplier,
    i*ellipseHeightMultiplier);
  }
}