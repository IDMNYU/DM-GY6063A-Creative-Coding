/**
* Based on Nature of Code Example 1.1 
* Bouncing ball with no vectors
* By Dan Shiffman.  Modified by Kevin Siwoff
*/

//[full] Variables for location and speed of ball.
float x = 100;
float y = 100;
float xspeed = 1;
float yspeed = 3.3;
color ballColor;

void setup() {
  size(640,480);
  background(255);
  colorMode(HSB);
  ballColor = color(34,100,250);
}

void draw() {
  background(255);
  //Move the ball according to its speed.
  x = x + xspeed;
  y = y + yspeed;

  //Check for bouncing.
  if ((x > width) || (x < 0)) {
    xspeed = xspeed * -1;
  }
  if ((y > height) || (y < 0)) {
    yspeed = yspeed * -1;
    ballColor = color(int(random(255)), int(random(255)), 200);
    
  }

  noStroke();
  fill(ballColor);
  // Display the ball at the location (x,y).
  ellipse(x,y,50,50);
}

//function to call when mouse is clicked
void mouseClicked(){
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
