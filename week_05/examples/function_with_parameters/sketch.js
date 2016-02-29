function setup() {
  createCanvas(400,400);
  myFunction("hi there!");
}

function myFunction( greeting ) {
  textAlign(CENTER);
  text(greeting, 10,height/2, width, 20);
}