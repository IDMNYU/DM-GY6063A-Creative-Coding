var myThirdArray = [
  'apple',
  'orange',
  'banana',
  'peach'
];
var spliced = [];

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(255);
  text(myThirdArray[0], width/2, height/2);
  text(spliced,  width/2, height/2+45);
}

function mousePressed(){
  spliced = myThirdArray.splice(0,1);
}