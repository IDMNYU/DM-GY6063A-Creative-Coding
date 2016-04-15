function setup(){
  createCanvas(400,400);
}
function draw(){
  var shapeWidth = 200;
  var shapeHeight = 200;
  
  //clear background white
  //comment this line out with // to test
  //background color
  background(255);

  rect(20,20,mouseX,mouseY);
  ellipse(200,120,mouseX,mouseY);
}

