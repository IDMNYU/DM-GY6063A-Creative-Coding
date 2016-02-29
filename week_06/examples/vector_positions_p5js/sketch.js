var triangleTip;

var ellipse1Pos;
var ellipse2Pos;

var currTime = 0;
var lastTime = 0;

var growingLinePos;

function setup(){
  createCanvas(windowWidth,windowHeight);
  triangleTip = createVector(width - 20, 20);
  ellipse1Pos = createVector(20,height-20);
  ellipse2Pos = createVector(width-20,20);
  growingLinePos = ellipse1Pos.x; 
}

function draw(){
  background(255);
//  fill(0);
  ellipse(ellipse1Pos.x, ellipse1Pos.y, 20,20);
  line(20, height - 20, width - 20, 20);

  var triangleBase1 = ellipse2Pos.sub(createVector(20,-20));
  var distance = triangleBase1.dist(ellipse2Pos);
  

  
  var triangleBase2 = triangleTip.add(createVector(-20,-20));
  ellipse(triangleBase1.x,triangleBase1.y,100,100);

//  println(triangleTip.x, triangleTip.y, triangleBase1.x, triangleBase1.y, triangleBase2.x, triangleBase2.y);
  triangle(triangleTip.x, triangleTip.y,
    triangleBase2.x, triangleBase2.y,
    triangleBase1.x, triangleBase1.y);
  
  ellipse(ellipse2Pos.x, ellipse2Pos.y, 200,200);
  
  currTime = millis();
  var dt = currTime - lastTime;
    
  if(dt >= 1000){
    growingLinePos +=10; 
    
    println("second passed");
    lastTime = currTime;  
  }
  rect(growingLinePos,ellipse1Pos.y,100,50);
}
