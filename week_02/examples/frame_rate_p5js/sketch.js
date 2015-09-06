/*
* Frame rate.
* Frame rate is how many frames per second your app will run.
* You can set frame rate with the function frameRate(), and get frameRate
* with the system variable frameRate.
*/
function setup(){
  createCanvas(windowWidth, windowHeight);
  frameRate(2);  
}

function draw(){
  ellipse(random(0, width), random(0,height),random(255),random(255));
  println(frameRate);
}
