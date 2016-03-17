/**
* demonstrating randomSeed();
* notice how each time you press 'r' 
* it will reset the random sequence to the same value
* by Kevin Siwoff, Fall 2015
*/
function setup(){
  createCanvas(windowWidth,windowHeight);
  randomSeed(1);
  frameRate(1); //set frame rate to 1 fps
}
function draw(){
  drawRandomLines();//call our function once per frame
}
function keyPressed(){
  if (key == 'r'){
    randomSeed(1); //reset the random seed to the first number in the sequence
    drawRandomLines();
  }
}

function drawRandomLines(){
  //loop from 0 to window, add assigning 100 after each loop
  for (var i=0; i < width; i+=100) {
    var r = random(0, 255); //r is a random value between 0 and 255
    strokeWeight(4);
    stroke(r);
    line(i, 0, i, height); //draw a vertical line
  }
}
