/**
 * Challenge: refactor this code into functions
 * There are many more elegant ways of drawing these eyes, 
 * however this is intentially long winded 
 * for the purpose of refactoring code.
 * */
var eyeSize = 45;
var openSize = 0;
var bgGray = 76;

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(bgGray);
  var eyeCenterX = width/2;
  var eyeCenterY = height/2;
  //left eye
  strokeWeight(1);
  stroke(0);
  fill(255);
  //top
  curve( 
  eyeCenterX-50, eyeCenterY+eyeSize*5-openSize*8,
  eyeCenterX-150, eyeCenterY,
  eyeCenterX-100+(eyeSize), eyeCenterY,
  eyeCenterX-(eyeSize), eyeCenterY-openSize+eyeSize*5);
  //bottom
  curve( 
  eyeCenterX-50, eyeCenterY-eyeSize*5+openSize,
  eyeCenterX-150, eyeCenterY,
  eyeCenterX-100+(eyeSize), eyeCenterY,
  eyeCenterX-eyeSize, eyeCenterY-eyeSize*5+openSize*8);
  //Iris
  fill(70,210,50);
  ellipse(eyeCenterX-100, eyeCenterY, eyeSize, eyeSize-openSize*0.85);
  //pupil
  fill(0);
  noStroke();
  ellipse(eyeCenterX-100, eyeCenterY, eyeSize/2,eyeSize/2);
  //mask
  noFill();
  strokeWeight(2);
  stroke(255);
  ellipse(eyeCenterX-100, eyeCenterY, eyeSize, eyeSize-openSize*0.90);
  
  
  
  //right eye
  stroke(0);
  fill(255);
  stroke(0);
  fill(255);
  //top
  curve( 
  eyeCenterX+75, eyeCenterY+eyeSize*5,
  eyeCenterX+50, eyeCenterY,
  eyeCenterX+100+(eyeSize), eyeCenterY,
  eyeCenterX+100+(eyeSize/14), eyeCenterY+eyeSize*5);
  //bottom curve
  curve( 
  eyeCenterX+75, eyeCenterY-eyeSize*5,
  eyeCenterX+50, eyeCenterY,
  eyeCenterX+100+(eyeSize), eyeCenterY,
  eyeCenterX+100+(eyeSize/14), eyeCenterY-eyeSize*5);
  
  //iris
  noStroke();
  fill(70,210,50);
  ellipse(eyeCenterX+100, eyeCenterY, eyeSize, eyeSize);
  //pupil
  fill(0);
  ellipse(eyeCenterX+100, eyeCenterY, eyeSize/2,eyeSize/2);
  
  openSize = abs(sin(radians(frameCount)))*20;
}