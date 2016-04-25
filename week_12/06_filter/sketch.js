var img;
function preload(){
  img = loadImage('Titian_Venus_of_Urbino.jpg');
}
function setup() {
  createCanvas(400,400);
}

function draw() {
  background(255);
  //maintain source image ratio when resizing height
  var resizedHeight = img.height * width / img.width;
  image(img, 0,0,img.width,img.height,0,0,width,resizedHeight);
  //very important: filter needs to come after image()
  //uncomment each filter to test
  //filter(BLUR,map(mouseX,0,width,0,5));
  filter(THRESHOLD,map(mouseX,0,width,0,1));
  // filter(POSTERIZE,map(mouseX,0,width,2,10));
  // filter(ERODE);
  // filter(INVERT);
  //filter(GRAY);
  //filter(DILATE);
}