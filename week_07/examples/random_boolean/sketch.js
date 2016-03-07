/**
 * Random truth by Kevin Siwoff,
 * Fall 2015
 * 
 */
var truthList = [];
var currTruth;
function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  frameRate(1);
}

function draw() {
  background(255);
  
  ///////////////////////////////////////////
  // Our truth algorithm
  //////////////////////////////////////////
  var bTruth = Math.round(random(1));
  if(bTruth == 1){
    currTruth = true;
  } else {
    currTruth = false;
  }
  truthList.push(currTruth);
  ///////////////////////////////////////////
  
  textAlign(LEFT);
  textSize(32);
  fill(0);
  text("random truth: ", 10,32);
  for(var i=0; i < truthList.length; i++){
    text("test " + i + ": " + truthList[i], 10, 64 + (32 * i));
  }
  
  textSize(64);
  textAlign(CENTER);
  if(currTruth){
    fill(0,255,0);
  } else {
    fill(255,0,0);
  }
  text(currTruth, width/2, height/2);
}