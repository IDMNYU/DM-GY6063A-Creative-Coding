PVector triangleTip;

PVector ellipse1Pos;
PVector ellipse2Pos;

float currTime;
float lastTime;

float growingLinePos;

void setup(){
  size(500,500);
  triangleTip = new PVector(width - 20, 20);
  ellipse1Pos = new PVector(20,height-20);
  ellipse2Pos = new PVector(width-20,20);
  growingLinePos = ellipse1Pos.x; 
}

void draw(){
  background(255);
//  fill(0);
  ellipse(ellipse1Pos.x, ellipse1Pos.y, 20,20);
  line(20, height - 20, width - 20, 20);

  PVector triangleBase1 = PVector.sub(ellipse2Pos, new PVector(20,-20));
  float distance = PVector.dist(triangleBase1, ellipse2Pos);
  

//  println(distance);
  
//  PVector triangleBase2 = PVector.add(triangleTip, new PVector(-20,-20));
//  ellipse(triangleBase1.x,triangleBase1.y,10,10);

//  println(triangleTip.x, triangleTip.y, triangleBase1.x, triangleBase1.y, triangleBase2.x, triangleBase2.y);
//  triangle(triangleTip.x, triangleTip.y, triangleBase2.x, triangleBase2.y, triangleBase1.x, triangleBase1.y);
  ellipse(ellipse2Pos.x, ellipse2Pos.y, 20,20);
  
  currTime = millis();
  float dt = currTime - lastTime;
    
  if(dt >= 1000){
    rectMode(CENTER);
    growingLinePos +=10; 
    
    println("second passed");
    lastTime = currTime;  
  }
  rect(growingLinePos,ellipse1Pos.y,10,5);
}
