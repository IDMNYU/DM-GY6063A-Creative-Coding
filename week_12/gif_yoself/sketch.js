var videoInput;
var instructions;
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1);
  videoInput = createCapture(VIDEO);
  instructions = createDiv("click for the photobooth");
}

function draw() {
  image(videoInput, 0, 0, 320, 240);
}

function mouseClicked(){
}