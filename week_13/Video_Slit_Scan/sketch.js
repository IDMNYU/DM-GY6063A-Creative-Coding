/*
 * @name Video Slit Scan
 * @frame 320,240
 * @description <p>Load a video, manipulate its pixels and draw to canvas.
 * <p><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.dom">p5.dom library</a>
 * at least one video file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">local server</a>.</span></em></p>
 */
var fingers;

// function setup() {
//   createCanvas(320, 240);
//   // specify multiple formats for different browsers
//   fingers = createVideo(['media/anni003.mp4']);
//   fingers.loop();
//   fingers.hide();
//   fingers.volume(0);
//   noStroke();
//   fill(0);
// }

// function draw() {
//   background(255);
//   fingers.loadPixels();
//   var stepSize = round(constrain(mouseX / 8, 6, 32));
//   for (var y=0; y<height; y+=stepSize) {
//     for (var x=0; x<width; x+=stepSize) {
//       var i = y * width + x;
//       var darkness = (255 - fingers.pixels[i*4]) / 255;
//       var radius = stepSize * darkness;
//       ellipse(x, y, radius, radius);
//     }
//   }
// }

var video_width     = 640;
var video_height    = 360;
var video_slice_x   = video_width/2;
var draw_position_x = 0; 

function setup() {
  createCanvas(320, 240);
  // specify multiple formats for different browsers
  fingers = createVideo(['media/anni003.mp4']);
  fingers.loop();
  fingers.hide();
  fingers.volume(0);
  //noStroke();
  //fill(0);
}

function draw() {

    fingers.loadPixels();
    for (var y=0; y<fingers.height; y++){
      var setPixelIndex = y*fingers.width + draw_position_x;
      var getPixelIndex = y*fingers.width  + video_slice_x;
      fingers.pixels[setPixelIndex] = fingers.get(0,y);
    }
    fingers.updatePixels();
    
    //draw the raw video image to our screen
    
    
    draw_position_x++;
    if (draw_position_x >= width) {
      draw_position_x = 0;
    }
    image(fingers, 0,0);
}