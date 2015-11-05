var colors = [];
function setup() {
  createCanvas(windowWidth,windowHeight, WEBGL);
  var c1 = color(255,0,0);
  var c2 = color("rgb(100%,0%,0%)");
  var c3 = color("#ff0000");
  colors.push(c1);
  colors.push(c2);
  colors.push(c3);
}

function draw() {
  background(255);
  translate(-width/5,0,0);
  for(var i=0; i < colors.length; i++){
    //basicMaterial is the same as fill
    basicMaterial(colors[i]);
    push();
    translate(250 * i,0,0);
    plane(40);
    pop();
  }
}