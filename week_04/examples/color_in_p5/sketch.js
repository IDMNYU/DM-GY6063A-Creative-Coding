var colors = [];
function setup() {
  createCanvas(windowWidth,windowHeight);
  colorMode(RGB);
  var c1 = color(255,0,0);
  var c2 = color("rgb(100%,0%,0%)");
  var c3 = color("#ff0000");
  colors.push(c1);
  colors.push(c2);
  colors.push(c3);
}

function draw() {
  translate(width/2 - (colors.length * 75),height/2);
  for(var i=0; i < colors.length; i++){
    fill(colors[i]);
    rect(i*150, 0, 75, 75);
  }
}