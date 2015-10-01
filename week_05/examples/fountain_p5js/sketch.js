/**
* Code based on sketch by Jerome Herr
* with small modifications for readability
* http://pastebin.com/abDpCgGt
*/

var num = 1000;
var frames = 60;
var theta = 0;
var xoffset = 0, yoffset = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  randomSeed(1);
  background(20);
  noStroke();
  translate(width/2, height/2);
  //from 0->10000, loop
  for (var i=0; i<num; i++) {
    //all draw transforms are isolated inside push and pop()
    push();
    
    //rotationAngle is a random radian from 0 to TWO_PI
    var rotationAngle = random(TWO_PI);
    //rotate our drawing by rotationAngle
    rotate(rotationAngle);
    
    var s = 100;
    var xPosMax =  random(s, height*0.35);
    if (random(1)>0.9) xPosMax = random(s,height*.45);
    
    var xPosMin = s + random(-10,10);
    
    //we map the output of our sine function to xPosMin, xPosMax
    //the output of sin() ranges between -1.0 and 1.0.
    var x = map(sin(theta+random(TWO_PI)), -1, 1, xPosMin, xPosMax);
    
    //the size of our ellipse is equal to the output of this function
    var szNoise = noise(xoffset, yoffset) *16.0;
    
    fill(255,150,0);
    ellipse(x, 0, szNoise, szNoise);
    pop();
  }
  
  //increment our theta by ~0.1 
  theta += TWO_PI/frames;

  xoffset+=0.01;//increment our xoffset by 0.01
  yoffset+=0.02;//increment our yoffset by 0.02
}
