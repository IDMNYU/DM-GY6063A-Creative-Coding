function setup() {
  createCanvas(400,400); 
}

function draw(){
  background(100);
  translate(50,100);
  for(var i=0; i < 400; i+=100){
    for(var j=0; j < 400; j+=100){
      push();
      translate(i,j);
      owl();
      pop();      
    }
  }

}
function owl(){
  push();
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