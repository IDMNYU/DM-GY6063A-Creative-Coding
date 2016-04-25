var img;
var numImages = 20;
function preload(){
  img = loadImage('Perito_Moreno_Glacier_Patagonia_Argentina_Luca_Galuzzi_2005.jpeg');
}
function setup() {
  createCanvas(400,400);
}

function draw() {
  //images also work as backgrounds
  //background(img);
  //try changing the 4th and 5th parameters
  image(img,0,0, width,height);
}