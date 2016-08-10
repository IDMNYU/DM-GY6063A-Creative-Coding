var numColumns = 3;
var colorRange = 45;
var h = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360,100,100);
  noStroke();
  noLoop();
}

function draw() {
  for(var i=0; i < numColumns; i++){
    var randomHue = random(h-colorRange, h+colorRange);
    fill(randomHue,100,100);
    rect(i* width / numColumns, 0, width/numColumns, height);
  }
}

function keyPressed(){
  h = random(360);
  redraw();
}