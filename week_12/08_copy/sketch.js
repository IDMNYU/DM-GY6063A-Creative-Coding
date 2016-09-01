var img;
var bandMisalign = 120;
var bandHeight = 40;

function preload(){
  img = loadImage('Crimson_sunset.jpg');  
}
function setup() {
  createCanvas(400,400);
  for(var i=0; i < img.height; i += bandHeight){
    img.copy(img,
    0, i,
    img.width, img.height,
    random(-bandMisalign, bandMisalign), i,
    img.width, img.height);
  }
  var heightResized = width * img.height / img.width;
  image(img, 0,0,img.width,img.height,0,0,width,heightResized);
}
