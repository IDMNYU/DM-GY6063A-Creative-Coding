/**
* Random ellipse height & width
*/

function setup(){
  createCanvas(windowWidth,windowHeight);
}
function draw(){
  background(0);
  var noiseWidth = width/2 + 200 * random(1);
  var noiseHeight = height/2 + 200 * random(1);
  
  fill(200);
  ellipse(width/2,height/2, noiseWidth,noiseHeight);
}
