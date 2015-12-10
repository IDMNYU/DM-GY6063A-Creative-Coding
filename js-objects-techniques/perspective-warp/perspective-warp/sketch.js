var stampPosX = 0,stampPosY = 0;
var clonable = false;
function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(255);
  
  
  push();
  scale(0.5);
  //quad shape
  fill(100,100,100,40);
  beginShape();
    stroke(0);
    vertex(0,0);
    vertex(width/2,0);
    vertex(width,height/2);
    vertex(width/2,height);
  endShape(CLOSE);
  
  //fan shape
  fill(100,100,100,40);
  noStroke();
  beginShape(TRIANGLE_FAN);
    vertex(width/2,0);
    vertex(width,height/2);
    vertex(width-100,height/4);
    vertex(width/2,height);
  endShape(CLOSE);
  pop();
  
  
  
  push();
  translate(stampPosX,stampPosY);    

  //quad shape
  fill(100,100,100,40);
  beginShape();
    stroke(0);
    vertex(0,0);
    vertex(width/2,0);
    vertex(width,height/2);
    vertex(width/2,height);
  endShape(CLOSE);
  
  //fan shape
  fill(100,100,100,40);
  noStroke();
  beginShape(TRIANGLE_FAN);
    vertex(width/2,0);
    vertex(width,height/2);
    vertex(width-100,height/4);
    vertex(width/2,height);
  endShape(CLOSE);
  pop();
}

function mouseClicked(){
    if(clonable){
      stampPosX = mouseX;
      stampPosY = mouseY;      
    }

}

function keyPressed(){
  if(keyCode === SHIFT){
    clonable = true;
  }
}

function keyReleased(){
  if(keyCode == SHIFT){
    clonable = false;
  }
}