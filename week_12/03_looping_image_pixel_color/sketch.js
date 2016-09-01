var img;

function preload(){
  img = loadImage('assets/moonwalk.jpg');
}
function setup() {
  createCanvas(400,400);
  noStroke();
  noLoop();
}

function draw() {
  background(255);
  for(var x = 0; x < img.width; x+=20){
    for (var y=0; y < img.height; y+=20){
      fill(img.get(x,y));
      ellipse(x + random(-2,2),y+ random(-2,2), 10,10);
    }
  }
}