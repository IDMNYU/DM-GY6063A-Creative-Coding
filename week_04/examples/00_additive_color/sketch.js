function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(1);
}

function draw() {
  background(255);
  noStroke();
  //Our first color group
  //additive color
  var col1 = color(random(255), random(255), random(255));
  var col2 = color(random(255), random(255), random(255));
  fill(
    red(col1) + red(col2),
    green(col1) + green(col2),
    blue(col1) + blue(col2));
  //draw the mixed color rectangle
  rect(0, 0, width/2,width/2);
  
  fill(col1);
  rect(0,0,width/4, 200);
  fill(col2);
  rect(width/4,0,width/4, 200);
  
  fill(0);
  text("additive color: The top two colors are combined to produce the bottom color", 24,width/2+24);
}