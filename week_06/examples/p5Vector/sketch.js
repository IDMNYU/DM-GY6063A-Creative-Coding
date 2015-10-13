/**
 * We can create vectors in 2 ways- through a function,
 * or by creating an object instance using the "new" operator
 */

var currentPosition;//we declare a global var velocity
var velocity;

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  //functional contruction
  currentPosition = createVector(width/2,height/2);
  println("creating a positional vector: ");
  println(currentPosition);
  
  //construction using the "new" operator
  velocity = new p5.Vector(2,2);
  println("creating a velocity vector: ");
  println(velocity);
}

function draw() {
  if(currentPosition.x > width || currentPosition.y > height){
    currentPosition = new p5.Vector(random(width/2),random(height/2));
  }
  ellipse(currentPosition.x,currentPosition.y, 45,45);
  currentPosition.add(velocity);

}