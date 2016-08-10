var capture;

function setup() {
  createCanvas(720, 360);
  capture = createCapture(VIDEO);
  //capture.hide();
}

function draw() {
  background(255);
  image(capture,0,0);
  capture.loadPixels();
  for(var y=0; y<capture.height;y++){
    for(var x=0; x<capture.width;x++){
      var i = y * width + x;
      var darkness = 255 - capture.pixels[i*4];
      fill(darkness);
      ellipse(x, y, 10, 10);
    }
  }
}