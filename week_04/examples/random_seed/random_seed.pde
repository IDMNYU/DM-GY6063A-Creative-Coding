/**
* demonstrating randomSeed();
* notice how each time you press 'r' 
* it will reset the random sequence to the same value
*/
void setup(){
  size(500,500);
  randomSeed(1);
  frameRate(1); //set frame rate to 1 fps
}
void draw(){
  drawRandomLines();//call our function once per frame
}
void keyPressed(){
  if (key == 'r'){
    randomSeed(1); //reset the random seed to the first number in the sequence
    drawRandomLines();
  }
}

void drawRandomLines(){
  //loop from 0 to window, add assigning 100 after each loop
  for (int i=0; i < width; i+=100) {
    float r = random(0, 255); //r is a random value between 0 and 255
    strokeWeight(4);
    stroke(r);
    line(i, 0, i, height); //draw a vertical line
  }
}
