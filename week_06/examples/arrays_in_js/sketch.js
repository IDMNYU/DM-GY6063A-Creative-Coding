/////////////////
///This is an Object constructor function
function Ball(){
  //these are our default properties
  //of Ball
  this.color = "#000";
  this.width = 200;
  this.height = 200;
  this.position = null;
}

Ball.prototype = {
  constructor: Ball,
  setPosition: function(x,y){
    this.position = createVector(x,y);
  }
};

var balls = [];//an empty array of balls
var finalPos = [];
var finalPosVectArray = [];
var numClicks = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  finalPos.push(200);
  finalPos.push(300);
  
  finalPosVectArray.push(createVector(200,300));
  finalPosVectArray.push(new p5.Vector(300,300));
  
  //println(finalPos);
  //println(finalPosVectArray);
    
  //println("my finalPos array is " + finalPos.length);
  
  println(balls);
}

function draw() {
  background(255);
  
  for(var i =0; i < balls.length; i++){
      ellipse(balls[i].position.x,
        balls[i].position.y,
        balls[i].width,
        balls[i].height);
  }

  
}

function mousePressed(){
  var ball = new Ball();
  ball.setPosition(mouseX,mouseY);
  balls.push(ball);
  
  println(balls);
}