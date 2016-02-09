function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  for(var i =0; i < 10; i++){
    fill(0);
    rect(i * 20, 0, 8, height/2);
    
  }
}