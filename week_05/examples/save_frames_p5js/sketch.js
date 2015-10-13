var t = 0;
var noiseIncr = 0.01;

function setup() {
  createCanvas(500,500);

  saveFrames("sketch", "png", 2, 12);
}

function draw() {
  var dia = map(noise(t), 0,1,50,width/2);
  
  ellipse(width/2, height/2, dia, dia);

  t+=noiseIncr;
}