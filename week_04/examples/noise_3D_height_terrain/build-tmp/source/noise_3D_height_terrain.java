import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class noise_3D_height_terrain extends PApplet {

// 3D perlin noise based on
// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

float increment = 0.01f;
float zoff = 0.0f;  
// We will increment zoff differently than xoff and yoff
float zincrement = 0.02f; 

public void setup(){
 //draw in 3D mode
}
public void draw(){
  
  background(204);
  
  perspective();
  
  float xoff = 0.0f; // Start xoff at 0
  
  //a 3D transformation.
  // See documentation for more info
  pushMatrix(); 
  translate(0, height/2,-500); //translate our drawing in 3d
  
  beginShape(TRIANGLE_STRIP);

  for (int x = 0; x < width; x+=5) { //for every 5 pixels wide 
    xoff += increment;   // Increment xoff 
    float yoff = 0.0f;   // For every xoff, start yoff at 0
    
    for (int y = 0; y < height; y+=5) { // for every 5 pixels tall
      yoff += increment; // Increment yoff
      
      // Calculate noise and scale by 255
      float z = noise(xoff,yoff,zoff)*255;

      // Try using this line instead
      //float z = random(0,255);
      
      //since we want z to represent a noisey height terrain,
      // we need to flip our y & z coords 
      vertex(x,z,y); 
    }
  }
    zoff += zincrement; // Increment zoff
  endShape(CLOSE);
  popMatrix();
}
  public void settings() {  size(500,500,P3D); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "noise_3D_height_terrain" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
