/*
 * @name Video Pixels
 * @frame 320,240
 * @description <p>Load a video, manipulate its pixels and draw to canvas.
 * <p><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.dom">p5.dom library</a>
 * at least one video file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">local server</a>.</span></em></p>
 */
var fingers;

function setup() {
  createCanvas(windowWidth,windowHeight);
  // specify multiple formats for different browsers
  space = createVideo(['media/anni003.mp4']);
  space.loop(); // set the video to loop and start playing
  space.volume(0);//we set the volume to 0 because we don't want
                  //sound
  space.hide();
  noStroke();
  //fill(0);
}

function draw() {
  background(255);
  space.loadPixels();
  //var stepSize = round(constrain(mouseX / 8, 6, 64));
  for (var y=0; y<height; y+=25) {
    for (var x=0; x<width; x+=25) {
      var i = y * width + x;
      var darkness = (255 - space.pixels[i*4 % (space.pixels.length / 4)])/255;
      var radius = darkness*25;//stepSize * darkness;
      fill(
        space.pixels[i % space.pixels.length],
        space.pixels[i*2 % space.pixels.length],
        space.pixels[i*3 % space.pixels.length]
      );
      ellipse(x, y, radius, radius);
    }
  }
}