/**
* 2D noise, based on Nature of Code Example 1.6
* Adapted for p5js by Kevin Siwoff, Fall 2015
*/
var incr = 0.01; //value to increment our x and y offsets

function setup(){
  createCanvas(windowWidth,windowHeight);
  noStroke();
}

function draw(){
  background(255);
  var xOff = 0.0;
  translate(width/4, height/4);
  
  for(var x=0; x < width/2 ; x+=10){ //loop through each pixel horizontally  
    var yOff = 0.0;
    for(var y= 0; y < height/2; y+=10){//& loop through each pixel vertically
      var bright = map(noise(xOff,yOff),0,1,0,255); //map our 2D noise to a value between 0->255
      //assign a brightness value to the current item in our pixels array
      fill(bright);
      rect(x,y,10,10);
      yOff += incr; // add assign our increment to yOff
    }
    xOff += incr; // add assign our increment to xOff
  }
}