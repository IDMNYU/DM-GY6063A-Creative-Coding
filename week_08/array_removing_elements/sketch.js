var myThirdArray = [
  'apple',
  'orange',
  'banana',
  'peach'
];
function setup() {
  createCanvas(500,500);
}

function draw() {
  background(255);
  text(myThirdArray[myThirdArray.length-1], width/2, height/2);
}

function mousePressed(){
  shorten(myThirdArray);
}