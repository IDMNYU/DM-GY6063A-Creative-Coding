var stampPosX = 0,stampPosY = 0;
var clonable = false;
function setup() {
  createCanvas(windowWidth,windowHeight);
  
  var prism = new PrismaticShape(0.5,
  createVector(width/2, height/2),
  45
  );
  
  var secondPrism = new PrismaticShape(0.25);
  
  prism.makeShape();
  println(prism.getPosition());
  
  secondPrism.makeShape();
  
}

function draw() {
  
    // makeShape(0.75);
  // for(var i =0; i < 100; i++){
  //     makeShape(i / 100);    
  // }

}

function mouseClicked(){
    if(clonable){
      stampPosX = mouseX;
      stampPosY = mouseY;      
    }

}

function keyPressed(){
  if(keyCode === SHIFT){
    clonable = true;
  }
}

function keyReleased(){
  if(keyCode == SHIFT){
    clonable = false;
  }
}