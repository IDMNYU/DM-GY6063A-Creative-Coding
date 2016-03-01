var mySecondArray = [];

function setup() {
  createCanvas(500,500);
  colorMode(HSB,360,100,100);
  for(var i =0; i < 5; i++){
    mySecondArray.push(random(12));
  }
  
  print(mySecondArray);
}

function draw() {
  background(0,0,100);
  for(var i = 0; i < mySecondArray.length; i++){
    fill(0,100,100,0.4);
    rect(width/2,
    height/2,
    mySecondArray[i] * 10, 
    mySecondArray[i] * 10);
  }
}

function mousePressed(){
  var tempArray = mySecondArray.slice(0,2);
  mySecondArray = tempArray;
  print(mySecondArray);
}
