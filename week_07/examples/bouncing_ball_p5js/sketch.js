/**
* Based on Nature of Code Example 1.1 
* Bouncing ball with no vectors
* By Dan Shiffman.  Modified by Kevin Siwoff
* Fall 2015
*/
var y = 0;
var yspeed = 4.0;

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(255);
  y = y + yspeed;
  if(y > height || y < 0){
    yspeed *= -1.0;
  }
  ellipse(width/2, y, 50,50);
  
}