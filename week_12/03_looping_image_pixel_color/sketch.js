var img;
var pixelColor;

function preload(){
  img = loadImage('assets/Acanthurus_leucosternon_Maldives_2.jpg');
}
function setup() {
  createCanvas(400,400);
  noStroke();
  
}

function draw() {
  background(255);
  for(var x =0; x < img.width; x+=30){
    for(var y=0; y < img.height; y+=30){
      fill(img.get(x,y));
      ellipse(x+random(-2,2),y+random(-2,2),20,20);
    }
  }
}