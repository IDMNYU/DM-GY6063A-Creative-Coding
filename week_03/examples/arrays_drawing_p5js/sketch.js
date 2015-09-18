var xPos = [];
var yPos =[];
var arraySize = 10;
function setup() {
  createCanvas(windowWidth,windowHeight);
  for(var i=0; i < arraySize; i++){
    xPos[i] = random(500.0);
    yPos[i] = random(500.0);
  }
}

function draw() {
  background(255);
  for(var i=0; i < xPos.length; i++){
    fill(255,0,0,50);//r, g, b, a
    rect(xPos[i], yPos[i], 300, 250);
  }
}