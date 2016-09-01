var img;
function preload(){
  img = loadImage('Titian_Venus_of_Urbino.jpg');
}
function setup() {
  createCanvas(400,400);
}

function draw() {
  background(255);
  var resizedHeight = img.height * width / img.width;
  
  image(img, 0,0,img.width, img.height, 0,0, width, resizedHeight);
  
  // filter(THRESHOLD, map(mouseX, 0, width, 0,1));
  // filter(POSTERIZE, map(mouseX, 0,width, 2,5));
  // filter(INVERT);
  filter(GRAY);
}