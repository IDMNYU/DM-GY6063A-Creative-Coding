function setup() {
  createCanvas(800,800);
  // specify multiple formats for different browsers
  fingers = createVideo('assets/6.Eagle_1.mov');
  fingers.loop();
  fingers.hide();
  noStroke();
  fill(0);
}

function draw() {
  ackground(255);
  fingers.loadPixels();
  var stepSize = round(constrain(mouseX / 8, 6, 32));
  for (var y=0; y<height; y+=stepSize) {
    for (var x=0; x<width; x+=stepSize) {
      var i = y * width + x;
      var darkness = (255 - fingers.pixels[i*4]) / 255;
      var radius = stepSize * darkness;
      ellipse(x, y, radius, radius);
    }
  }
}
