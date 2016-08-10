/**
 * Random truth by Kevin Siwoff,
 * 
 */
var rectPosX, rectPosY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  frameRate(1);
  rectPosX = 0;
  rectPosY = height/2;
}

function draw() {
  if(randomBool() === true){
    rectPosX +=12;
    rectPosY +=12;
  } else {
    rectPosY -=12;
  }
  fill(0);
  rect(rectPosX,rectPosY,12,12);
}

/**
 * randomBool function
 * returns: true | false
 */
function randomBool(){
  // forces value to be either 0 or 1
  var randomNum = Math.round(random(1));
  var isTrue = true;
  if(randomNum === 1){
    isTrue = true;
  }
  else {
    isTrue = false;
  }
  return isTrue;
}