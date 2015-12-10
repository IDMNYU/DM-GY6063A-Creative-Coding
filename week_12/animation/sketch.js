//code by:
// https://github.com/Jared-Sprague
var runningCat;
var savanna;
var dest;//destination for our running cat
var isRunning = false;
var dX = 170;//our initial x pos of the cat
function setup() {
  frameRate(15);
  createCanvas(windowWidth, 800);

  savanna = loadImage('image/african-savanna.png');
  runningCat = loadImage('image/running-cat.png');
}

var sX = 0, sY = 0;

function draw() {
  clear();
  image(savanna,0,0,savanna.width,savanna.height,
  0,0,width,savanna.height);

  // Animate running cat
  
  sX += 300;
  if (sX > 300) {
    sX = 0;
    sY += 150;
    if (sY === 600) {
      sY = 0;
    }
  }
  if(isRunning){
    println("running");
    runToDest();
    if(dX >= dest.x){
      sX = 170;
      isRunning = false;      
    }

  } else{
    image(runningCat, sX, sY, 300, 150, 170, 100, 300, 150);
  }
  // Show full sprite sheet for reference
  image(runningCat, 0, 300, 300, 300);
}
function runToDest(){
  dX +=5.0;
  image(runningCat, sX, sY, 300, 150, dX, 100, 300, 150);
}

function mouseClicked(){
  isRunning = true;
  dest= createVector(mouseX,mouseY);
  println(dest.x);
}