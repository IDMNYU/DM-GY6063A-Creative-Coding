var bgImg, elvisImg;
var numElvises = 5;

function preload(){
  bgImg = loadImage('Blue_sky_south_of_France.png');
  elvisImg = loadImage('elvis-flaming-star.png');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(bgImg);
 for(var i=0; i < numElvises; i++){
   tint(i*20, i*20,0, 150);
   image(elvisImg, i * 20, 0, elvisImg.width /2, elvisImg.height /2);
 } 
}