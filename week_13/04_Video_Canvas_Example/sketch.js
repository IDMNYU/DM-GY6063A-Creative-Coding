/*
 * @name Video Canvas
 * @description <p>Load a video with multiple formats and draw it to the canvas.</p>
 * <p><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.dom">p5.dom library</a>
 * at least one video file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">local server</a>.</span></em></p>
 */
var space;
function preload(){
 space = createVideo(['media/anni003.mp4']); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // specify multiple formats for different browsers
  
  space.loop(); // set the video to loop and start playing
  space.hide(); // by default video shows up in separate dom
                  // element. hide it and draw it to the canvas
                  // instead
  space.volume(0);//we set the volume to 0 because we don't want
                  //sound
}

function draw() {
  background(150);
  image(space,0,0);
  space.filter(BLUR);
  image(space, width/2,height/2);
  //image(space,10,10); // draw the video frame to canvas
  //image(space,150,150); // draw a second copy to canvas
}