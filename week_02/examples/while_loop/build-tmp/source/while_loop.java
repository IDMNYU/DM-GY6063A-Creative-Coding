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

public class while_loop extends PApplet {

public void setup(){
 
}
public void draw(){
  int x = 0;
  int y = 0;
  background(45,43,100);
  stroke(255);
  beginShape(LINES);
  while(x < width && y < height) {
      vertex(x,y);
      x+=10;
      y+=10;
  }
  endShape();
}
  public void settings() {  size(500,500); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "while_loop" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
