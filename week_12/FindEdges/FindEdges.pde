/**
** based on FindEdges Example by Greg Borenstein
** video addition by Kevin Siwoff
**/
import gab.opencv.*;
import processing.video.*;
import java.awt.*;

OpenCV opencv;
Capture video; //our video capture
PImage canny, scharr, sobel;

void setup() {
  size(800, 800);
  video = new Capture(this, width /2, height/2);
  opencv = new OpenCV(this, width /2, height /2);
  
  video.start();
  opencv.gray();
  
  opencv.loadImage(video);
  opencv.threshold(200);  
  
}

void draw() {


  opencv.loadImage(video);
  opencv.findScharrEdges(OpenCV.HORIZONTAL);
  scharr = opencv.getSnapshot();
  
  //find canny edges with low threshold and high threshold
  opencv.findCannyEdges(10,200);
  canny = opencv.getSnapshot();
  
  //find sobel edges direction x and direction y
  opencv.findSobelEdges(0,1);
  sobel = opencv.getSnapshot();
  //raw video
  image(video, 0, 0);

  //scharr detected
  image(scharr, 0, video.height);
  
  //canny detected
  image(canny, video.width, 0);

  image(sobel, video.width, video.height);
  
}

void captureEvent(Capture c){
  c.read();
}

