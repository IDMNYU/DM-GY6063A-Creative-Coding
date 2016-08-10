function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  fill(0);
  //we loop 11 times
  for(var i=0; i <= 10; i++){
    rect(i*20,0,8,height/2);
  }
}