var pulseHue;
var pulseSat;
var period;
var amplitude;

function setup() {
  createCanvas(windowWidth, windowHeight);
  period = createSlider(4,255,100);
  period.position(20,20);
  
  amplitude = createSlider(2,255,100);
  amplitude.position(20,55);
}

function draw() {
  background(255);
  //var hVal = 255 * (sin(frameCount / pulseHue.value() * TWO_PI) * 0.5 + 0.5);
  //var sVal = 255 * (cos(frameCount / pulseSat.value() * TWO_PI) * 0.5 + 0.5);
  text("period: " + period.value(), 50,25);
  text("amplitude: " + amplitude.value(), 50,60);
  
  
  
  var circleX = frameCount % width;
  var circleY = -sin(frameCount / period.value() * TWO_PI) * amplitude.value();
  push();
  translate(0,height/2);
  ellipse(circleX,circleY,20,20);
  pop();
  push();
  translate(width/2, height/2);
  
  beginShape();
    
    for(var i=0; i < period.value() * 2.0; i++){
      var y = -sin(i / period.value() * TWO_PI) * amplitude.value();
      vertex(i, y);
    }
  endShape();
  pop();
}