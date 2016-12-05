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
  space.volume(0);//we set the volume to 0 because we don't want
                  //sound
  space.hide();
}

function draw() {
  background(150);
  tint(255,0,0);
  image(space, width/2 - space.width/2, height/2 - space.height/2);
}