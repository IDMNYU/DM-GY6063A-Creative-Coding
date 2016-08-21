var myFirstArray = [];

function setup() {
  createCanvas(500,500);
  colorMode(HSB,360,100,100);
  rectMode(CENTER);
  println(myFirstArray);
  for(var i=0; i < 5; i++){
    myFirstArray.push(random(100));
  }
  println(myFirstArray);
}

function draw() {
  background(0,0,100);
  fill(0,100,100,0.4);
  for(var i =0; i < myFirstArray.length; i++){
    rect(width/2, height/2, myFirstArray[i], myFirstArray[i]);
    println('element value is: ' + myFirstArray[i]);
  }
}