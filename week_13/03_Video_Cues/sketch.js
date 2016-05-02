/*
 * @name Video Cues
 * @description <p>Load a video and create a DOM element for it to play inside</p>
 * <p><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.dom">p5.dom library</a>
 * at least one video file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">local server</a>.</span></em></p>
 */
var space;
var bgColor;

function setup() {
  bgColor = color(255,255,255);
  createCanvas(windowWidth,windowHeight);
  // specify multiple formats for different browsers
  space = createVideo(['media/anni003.mp4']);
  space.loop(); // set the video to loop and start playing
  space.volume(0);//we set the volume to 0 because we don't want
                  //sound
  space.showControls();
  //a centered video element
  space.position(windowWidth/2 - (space.width/2),windowHeight/2 - (space.height/2));

  textSize(32);
}
function draw(){
  background(bgColor);
  text("current video time: " + space.time(), 20,32);
  text("video duration: " + space.duration(), 20,64);
  
  space.addCue(3.0, changeBgColor, color(123,0,23));
  space.addCue(4.0, changeBgColor, color(0,124,23));
  space.addCue(6.5, changeBgColor, color(23,0,125));
  
}

function changeBgColor(col){
  bgColor = col;
}