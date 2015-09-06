function setup(){
  createCanvas(800,500);
}
function draw(){
  var shapeWidth = 200;
  var shapeHeight = 200;
  
  //clear background white
  //comment this line out with // to test
  //background color
  background(255);
  
  rect(20,20,shapeWidth,shapeHeight);
  ellipse(400,120,shapeWidth,shapeHeight);
  line(600,20,600, 20 + shapeHeight);
  triangle(20,240,
    20+shapeWidth,240,
    110,240 + shapeHeight);
  arc(400, 240, shapeWidth, shapeHeight, 0, PI);
  point(600, 260);
}

