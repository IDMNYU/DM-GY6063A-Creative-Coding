function setup() {
  createCanvas(windowWidth,windowHeight); 
}

function draw(){
  background(255);
	owl();
}
function owl(){
  push();
  translate(110,110);
  stroke(0);
	line(0,-35,0,-65);
	noStroke();
	fill(204);
	ellipse(-17.5, -65,35,35);//left eye dome
	ellipse(17.5,-65,35,35);//right eye dome
	arc(0,-65,70,70,0,PI);//chin
	fill(0);
	ellipse(-14,-65,8,8);//left eye
	ellipse(14,-65,8,8);//right eye
	quad(0,-58,4,-51,0,-44,-4,-51);//beak
	pop();
}
