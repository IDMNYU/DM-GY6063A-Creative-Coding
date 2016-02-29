var stepX, stepY;

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  //note: we can define our H,S,&B spectrum maxes
  //here we set hue max val to width and
  //sat val to height vars.
  colorMode(HSB, 360,100,100);
  stepX = map(mouseX,0,width, 20, 200);
  stepY = map(mouseY,0, height, 20, 200);
  background(0);
  for(var y=0; y < height; y+=stepY){
    
    for(var x=0; x < width; x+=stepX){
      noStroke();
      fill(x % 360, y % 100, 100);
      rect(x,y,stepX,stepY);
    }
    
  }
}