var capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(600, 400);
  capture.hide();//uncomment this to hide the video DOM element
}

function draw() {
  background(255);
  tint(255,0,0);
  image(capture, 0, 0, 640, 480);
}