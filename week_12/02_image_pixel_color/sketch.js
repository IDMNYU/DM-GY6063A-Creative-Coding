var img;
var pixelColor;

function preload(){
  img = loadImage('assets/Crimson_sunset.jpg');
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  pixelColor = color(0);
}

function draw() {
  background(255);
  image(img);
  noStroke();
  fill(pixelColor);
  rect(width-50,0,50,50);
  fill('white');
  text("color picker", width-125,25);
}
function mouseMoved(){
  //get the pixel color at x and y position
  pixelColor = img.get(mouseX,mouseY);
}