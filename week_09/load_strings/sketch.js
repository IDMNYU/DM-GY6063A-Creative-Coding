var lines;
function preload(){
  lines = loadStrings('assets/The Problems of Philosophy.txt');

}
function setup() {
  createCanvas(400,400);
  text(lines, 0,0,width,height);
}

function draw() {
  
}