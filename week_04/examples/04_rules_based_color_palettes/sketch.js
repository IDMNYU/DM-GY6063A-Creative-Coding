/**
 * Rules based color palettes
 * 
 */
var h = 100;
var s = 100;
var b = 100;

//increase this number for more steps between colors
var rectStep = 45;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  //try uncommenting this line for HSB mode
  //colorMode(HSB, 255,255,255);
  for(var x=0; x < width; x += rectStep){
    noStroke();
    fill(h+x % 255,s+x % 255,b+x % 255);
    rect(x,0,rectStep,height);
  }
}

function keyPressed(){
  if(key === '1'){
    h = random(255);
  }
  else if(key === '2'){
    s = random(255);
  }
  else if(key === '3'){
    b = random(255);
  }
}