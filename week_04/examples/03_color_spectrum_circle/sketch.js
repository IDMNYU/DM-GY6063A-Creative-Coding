var segmentCount = 24;
var radius;
function setup() {
  createCanvas(windowWidth,windowHeight);
  radius = 300;
}

function draw() {
  colorMode(HSB, 360,width,height);
  background('white');
  //floor is a fancy way of saying,
  //round downward so that our resulting value is the
  //nearest whole number
  var angleStep = floor(360/segmentCount);
  //there are different drawing modes with beginShape()
  //to learn more, go to: http://p5js.org/reference/#p5/beginShape
  beginShape(TRIANGLE_FAN);
    vertex(width/2,height/2);
    for(var angle =0; angle <= 360; angle += angleStep){
      var vx = width/2 + cos(radians(angle))* radius;
      var vy = height/2 + sin(radians(angle))* radius;
      vertex(vx, vy);
      fill(angle, mouseX, mouseY);
      stroke(angle,mouseX,mouseY);
    }
  endShape();
}