import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import gab.opencv.*; 
import processing.video.*; 
import java.awt.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class FindEdges extends PApplet {

/**
** based on FindEdges Example by Greg Borenstein
** video addition by Kevin Siwoff
**/




OpenCV opencv;
Capture video; //our video capture
PImage canny, scharr, sobel;

public void setup() {
  size(800, 800);
  video = new Capture(this, width /2, height/2);
  opencv = new OpenCV(this, width /2, height /2);
  
  video.start();
  opencv.gray();
  
  opencv.loadImage(video);
  opencv.threshold(200);  
  
}

public void draw() {


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

public void captureEvent(Capture c){
  c.read();
}

  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "FindEdges" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
