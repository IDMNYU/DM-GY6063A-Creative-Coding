/*
* Frame rate.
* Frame rate is how many frames per second your app will run.
* You can set frame rate with the function frameRate(), and get frameRate
* with the system variable frameRate.
*/
void setup(){
  size(displayWidth, displayHeight);
  frameRate(2);  
}

void draw(){
  ellipse(random(255), random(255),random(255),random(255));
  println(frameRate);
}
