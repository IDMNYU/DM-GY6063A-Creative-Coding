/**
* Based on Nature of Code Example 1.1 
* Bouncing ball with no vectors
* By Dan Shiffman.  Modified by Kevin Siwoff
* Fall 2015
*/

//[full] Variables for location and speed of ball.
var x = 100;
var y = 100;
var xspeed = 1;
var yspeed = 3.3;
var ballColor;

function setup() {
  createCanvas(windowWidth,windowHeight);
  colorMode(HSB);
  ballColor = color(34,100,250);
}

function draw() {
  background(0,0,255);
  //Move the ball according to its speed.
  x = x + xspeed;
  y = y + yspeed;

  //Check for bouncing.
  if ((x > width) || (x < 0)) {
    xspeed = xspeed * -1;
  }
  if ((y > height) || (y < 0)) {
    yspeed = yspeed * -1;
    ballColor = color(random(255), random(255), 200);
    
  }

  noStroke();
  fill(ballColor);
  // Display the ball at the location (x,y).
  ellipse(x,y,50,50);
}

//function to call when mouse is clicked
function mouseClicked(){
  x = mouseX; //assign x the value of our mouseX position
  y = mouseY; //assign y the value of our mouseY position
  if(x >= width/2){
    xspeed  = abs(xspeed) * -1.0; //make sure xspeed is negative
  }
  else{
    xspeed = abs(xspeed); //otherwise xspeed is positive
  }
  yspeed = abs(yspeed); //make sure yspeed is always positive
}
