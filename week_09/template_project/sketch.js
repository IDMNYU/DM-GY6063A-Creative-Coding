var noiseT = 0.0;
var numEllipses = 2;
var angle = 0.0;//the starting angle of our wave
/**
 * function that runs before setup.  typically http requests done here
 * @return {[type]} [description]
 */
function preload(){
}

function setup() {
  //create our drawing canvas
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  for(var i=0; i < numEllipses; i++)
    for (var j = 0; j < width; j++) {
      ellipse(j+noiseT, i * height/numEllipses + map(sin(angle), -1,1,-height/2,height/2), 40,40);
      angle +=0.1;
    }
    noiseT+=0.001;
}