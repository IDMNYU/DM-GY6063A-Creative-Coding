var myGeometry = [240,"Fred",120,"#ff2323"];
function setup() {
  createCanvas(500,500);

}

function draw() {
  background(255);
  fill(myGeometry[myGeometry.length - 1]);
  
  ellipse(width/2, height/2, myGeometry[0], myGeometry[2]);
  
  textAlign(CENTER);
  //text draws text to the screen
  //it requires the following parameters:
  // 1: the text to draw
  // 2: position x,
  // 3: position y
  text(myGeometry[0],
  width/2,
  height - 100);
}