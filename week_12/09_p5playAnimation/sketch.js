/**
 * CODE DEPENDENCY: P5.Play Library 
 */
var ballerina;
function preload(){

//create an animation from a sequence of numbered images
//pass the first and the last file name and it will try to find the ones in between
ballerina = loadAnimation("assets/out-00000.png", "assets/out-00012.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  //specify the animation instance and its x,y position
  //animation() will update the animation frame as well
  animation(ballerina, width/2, height/2);
}