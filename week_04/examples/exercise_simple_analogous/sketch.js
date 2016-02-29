var hueSpread = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  colorMode(HSB, 360,100,100);

  frameRate(1);
}

function draw() {
  var myHue = 0;
  hueSpread = map(mouseX, 0, width, 0, 35);
  
  for(var i =0; i < 4; i++){
    fill(myHue + (i * hueSpread),100,100);
    rect(i* 100 + 50,height / 2, 50,50);
  }
}