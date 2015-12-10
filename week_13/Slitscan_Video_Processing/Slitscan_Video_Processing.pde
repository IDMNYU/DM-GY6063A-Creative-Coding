import processing.video.*;

Movie myVideo;

int video_width     = 640;
int video_height    = 360;
int video_slice_x   = video_width/2;
int window_width    = 1000;
int window_height   = video_height;
int draw_position_x = 0; 
boolean newFrame  = false;

void setup() {
  myVideo = new Movie(this, "6.Eagle_1.mov");
  
  
  size(window_width, window_height, P2D);
  background(0);
  myVideo.loop();
}

void movieEvent(Movie myVideo) {
  myVideo.read();
  newFrame = true;
}

void draw() {
  if (newFrame) {
    loadPixels();
    for (int y=0; y<window_height; y++){
      int setPixelIndex = y*window_width + draw_position_x;
      int getPixelIndex = y*video_width  + video_slice_x;
      pixels[setPixelIndex] = myVideo.get(0,0);
    }
    updatePixels();
    
    //draw the raw video image to our screen
    //image(myVideo, 0,0);
    
    draw_position_x++;
    if (draw_position_x >= window_width) {
      draw_position_x = 0;
    }
    newFrame = false;
  }
}
