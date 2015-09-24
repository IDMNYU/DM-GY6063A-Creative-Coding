//adjust this number to set how many frames
//to loop
var frameLimit = 100;
var burstWidth = 800.0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noiseSeed(20);
}

function draw() {
  if (frameCount >= frameLimit){
    noLoop();
  }
  //commented out so we don't clear our background
  //on each draw loop
  //background(255);
  
  //translate our drawing origin to the center
  // of our canvas
  translate(width/2, height/2);
  
  //push drawing matrix
  push();
  beginShape(LINES);//every 2 vertices creates a line
    for(var i=0; i < 10; i++){
      vertex(0,0);        
      vertex( random(-burstWidth/2, burstWidth/2),
      random(-height/2, 0));        
    }
  endShape();
  pop();
}