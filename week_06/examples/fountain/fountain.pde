/**
* Code based on sketch by Jerome Herr
* with small modifications for readability
* http://pastebin.com/abDpCgGt
*/

int num = 10000, frames=60;
float theta;
float xoffset, yoffset;

void setup() {
  size(540, 540);  
  smooth();
}

void draw() {
  randomSeed(1);
  background(20);
  noStroke();
  translate(width/2, height/2);
  //from 0->10000, loop
  for (int i=0; i<num; i++) {
    //all draw transforms are isolated inside push and popMatrix()
    pushMatrix();
    
    //rotationAngle is a random radian from 0 to TWO_PI
    float rotationAngle = random(TWO_PI);
    //rotate our drawing by rotationAngle
    rotate(rotationAngle);
    
    float s = 100;
    float xPosMax =  random(s, height*0.35);
    if (random(1)>0.9) xPosMax = random(s,height*.45);
    
    float xPosMin = s + random(-10,10);
    
    //we map the output of our sine function to xPosMin, xPosMax
    //the output of sin() ranges between -1.0 and 1.0.
    float x = map(sin(theta+random(TWO_PI)), -1, 1, xPosMin, xPosMax);
    
    //the size of our ellipse is equal to the output of this function
    float szNoise = noise(xoffset, yoffset) *4.0;
    
    fill(255,150);
    ellipse(x, 0, szNoise, szNoise);
    popMatrix();
  }
  
  //increment our theta by ~0.1 
  theta += TWO_PI/frames;

  xoffset+=0.01;//increment our xoffset by 0.01
  yoffset+=0.02;//increment our yoffset by 0.02
  
  //Uncomment this line if you want to save drawn frames from this sketch.
  //images will be saved by default to the current sketch folder.
  //  if (frameCount<=frames) saveFrame("image-###.gif");
}
