var z = 0;
var moveZ = false;

function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);
}

function draw() {
  background(100);

  if(moveZ){
    z = sin(radians(frameCount % 360)) * 400;
  }
  var dirY = mouseY;
  var dirX = mouseX;
  
  push();
  translate(-width/2 + mouseX,-height/2 + mouseY,z);
  fill(255, 100, 0);
  sphere();
  pop();
  
  pointLight(255, 100, 0, dirX, -dirY, z);
  sphere(100);
  
}

//if mouse is pressed, set moveZ true
function mousePressed(){
  moveZ = true;
}

//otherwise don't move our light in z
function mouseReleased(){
  moveZ = false;
}