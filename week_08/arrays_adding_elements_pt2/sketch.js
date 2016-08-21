var mySecondArray = [];

function setup() {
  createCanvas(500,500);
  println(mySecondArray);
  for(var i=0; i < 5; i++){
    mySecondArray[i] = i*50;
  }
  println(mySecondArray);
}

function draw() {
  background(255);
  noFill();
  for(var i=0; i < mySecondArray.length; i++){
    ellipse(width/2, height/2, mySecondArray[i]+50,mySecondArray[i]+50);
  }
}