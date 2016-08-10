var img;
var imgBg;
var numElvises = 5;
function preload(){
  img = loadImage('elvis-flaming-star.png');
  imgBg = loadImage('Blue_sky_south_of_France.png');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(imgBg);
  //try different tints and repetition patterns
  tint(100,0,0,150);
  for(var i=0; i < numElvises; i++){
    tint(100,i*10,0,150);
    image(img,i*40,0,img.width/2,img.height/2);
  }

}