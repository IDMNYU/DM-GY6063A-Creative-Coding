/**
** based on FindContours Example by Greg Borenstein
** video addition by Kevin Siwoff
**/
import gab.opencv.*;
import processing.video.*;
import java.awt.*;

PImage src, dst;
OpenCV opencv;
Capture video; //our video capture

ArrayList<Contour> contours;
ArrayList<Contour> polygons;

void setup() {
  size(800, 800);
  video = new Capture(this, width /2, height/2);
  opencv = new OpenCV(this, width /2, height /2);
  
  video.start();
  opencv.gray();
  
  opencv.loadImage(video);
  opencv.threshold(70);  
  
  //println("found " + contours.size() + " contours");
}

void draw() {
  scale(0.5);

  opencv.loadImage(video);
  contours = opencv.findContours();
  dst = opencv.getOutput();
  image(video, 0, 0);
  image(dst, video.width, 0);

  noFill();
  strokeWeight(3);
  
  for (Contour contour : contours) {
    stroke(0, 255, 0);
    contour.draw();
    
    stroke(255, 0, 0);
    beginShape();
    for (PVector point : contour.getPolygonApproximation().getPoints()) {
      vertex(point.x, point.y);
    }
    endShape();
  }
}

void captureEvent(Capture c){
  c.read();
}

