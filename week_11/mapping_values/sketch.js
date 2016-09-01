function setup() {
  createCanvas(400,400);
  textAlign(CENTER);
}
function draw(){
  background(255);
  var mappedMouse = map(mouseX, 0,width, 0,1);
  text("mapped mouse is " + mappedMouse, width/2, height/2);
}