function setup() {
  createCanvas(windowWidth, windowHeight);
  var firstDiv = createDiv("This is my first div");
  firstDiv.id("first-div");
  firstDiv.position(0,0);
  firstDiv.style("background-color", "yellow");
  
  var secondDiv = createDiv("this is my second div");
  secondDiv.id("second-div");
  secondDiv.position(0,200);
  secondDiv.style("background-color", "rgba(0,0,255,1)");
}

function draw() {
  background("yellow");
}