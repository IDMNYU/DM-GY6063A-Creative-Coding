float t = 0.0;
void setup(){
  size(500,500);
  frameRate(1);
}
void draw(){
  background(255);
  
  //the default value is 4
  //play around with other values to get smoother or more spikey lines
//  noiseDetail(16);
  
  float x = 0.0;
  beginShape(LINES);
  
    while(x < width){//loop until we get to the edge of our window
      
      //place a vertex at x,y where y is equal to the center of our window + 
      // a noisey offset between 0 & 200
      vertex(x, width/2 + (200 * noise(t))); 
      
      x++;  //increment x by 1
      t+=0.01; //increment our noise coordinate by 0.01
    }
  endShape();
  
}
