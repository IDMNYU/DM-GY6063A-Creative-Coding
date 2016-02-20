//A simple color interpolation example
//try changing the colorMode from RGB to HSB
var colorFrom, colorTo;
//increase this number for more steps between colors
var rectStep = 45;
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1);
}

function draw() {
  background(255);
  //the color we want to start interpolating from
  colorFrom = color(random(255),
  random(255),
  random(255));
  
  //the color we want to interpolate to
  colorTo = color(random(255),
  random(255),
  random(255));
  
  for(var x=0; x < width; x += rectStep){
    noStroke();
    //interpolation amount changes each step of our
    //for loop
    var lerpAmt = map(x, 0, width, 0, 1.0);
    var lerpedCol = lerpColor(colorFrom, colorTo, lerpAmt); 
    fill(lerpedCol);
    rect(x,0,rectStep,height);
  }
}