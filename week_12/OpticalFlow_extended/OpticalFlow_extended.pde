import gab.opencv.*;
import processing.video.*;
import java.awt.*;

OpenCV opencv;
Capture capVideo;

ArrayList<Contour> contours;

void setup() {
  size(800, 800);
  //video = new Movie(this, "sample1.mov");
  
  capVideo = new Capture(this, width/2,height/2);
  
  opencv = new OpenCV(this, width/2, height/2);
  //video.loop();
  //video.play();
  opencv.startBackgroundSubtraction(1, 5, 1.0);
  capVideo.start();  
}

void draw() {
  background(0);
  opencv.updateBackground();
  opencv.loadImage(capVideo);
  opencv.calculateOpticalFlow();
  
  image(capVideo, 0, 0);
  translate(capVideo.width,0);
  stroke(0,255,0);
  opencv.drawOpticalFlow();
  contours = opencv.findContours();
  
  for(Contour contour : contours){
    ArrayList<PVector> points = contour.getPoints();
    for(PVector _point : points){
      point(_point.x, _point.y);
    }
  }
  
  PVector aveFlow = opencv.getAverageFlow();
  int flowScale = 50;
//  println(aveFlow.x, aveFlow.y);
  stroke(255);
  strokeWeight(2);
  line(capVideo.width/2, capVideo.height/2, capVideo.width/2 + aveFlow.x*flowScale, capVideo.height/2 + aveFlow.y*flowScale);
}

//void movieEvent(Movie m) {
//  m.read();
//}

void captureEvent(Capture c){
  c.read();
}
