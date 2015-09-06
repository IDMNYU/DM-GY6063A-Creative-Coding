/**
 * The differences between an ellipse and an arc 
 * notice that the arc has 2 more parameters: start and stop.
 */
function setup() {
  createCanvas(500,500);
}

function draw() {
  stroke(0,0,255);
  ellipse(width/2, height/2, 50, 50);
  stroke(255,0,0);
  arc(width/2, height/2, 50,50, radians(180), TWO_PI);
  
}