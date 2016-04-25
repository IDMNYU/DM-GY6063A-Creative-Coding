var img;
var bandHeight = 60;
var bandMisalign = 60;
function preload(){
  img = loadImage('Crimson_sunset.jpg');  
}
function setup() {
  createCanvas(400,400);
  for(var i=0; i < img.height; i+=bandHeight){
    img.copy(img,
    0,i,img.width,bandHeight,
    random(-bandMisalign,bandMisalign),i+10,img.width,bandHeight);    
  }
  var heightResized = width * img.height / img.width;
  image(img, 0,0,img.width,img.height,0,0,width,heightResized);
}
