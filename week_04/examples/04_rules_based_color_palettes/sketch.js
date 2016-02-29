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
  rectStep = max(45, mouseX);
  //try uncommenting this line for HSB mode
  colorMode(HSB, 360,255,255);
  for(var x=0; x < width; x +=rectStep){
    for(var y =0; y < height; y+=rectStep){
    noStroke();
    fill(h+x % 255,s+x % 255,b+x % 255);
    rect(x,y,rectStep,rectStep);
    }

  }
}

function keyPressed(){
  if(key === '1'){
    h = random(360);
  }
  else if(key === '2'){
    s = random(255);
  }
  else if(key === '3'){
    b = random(255);
  }
}