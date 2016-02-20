function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(0);
  colorMode(HSB, 100,100,100);
  

  var tileCountY = map(mouseY, 0,height,2,100);
  var tileCountX = map(mouseX, 0, width, 2, 100);
  var tileWidth = width / tileCountX;
  var tileHeight = height / tileCountY;
  var lerpedCol;
  
  for(var y=0; y < tileCountY; y++){
    for(var x=0; x < tileCountX; x++){
      lerpedCol = lerpColor(color(x,x,100),color(y,y,100), 0.23 );
      var posX = tileWidth * x;
      var posY = tileHeight * y;
      noStroke();
      fill(lerpedCol);
      rect(posX,posY, tileWidth,tileHeight);
    }
  }
}