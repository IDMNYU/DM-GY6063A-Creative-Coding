var colors = [
  '#FFFC19',
  '#1485CC',
  '#FF0000',
  
  '#0971B2'
];
function setup() {
  createCanvas(windowWidth,windowHeight);
  noStroke();
  background(255);
  var x = 0;
  while(x < width){
    for(var i=0; i < 4; i++){
      fill(colors[i]);
      rect(x, 0, width,height);
      //x += 45;
      x+=floor(random(width/9));
    }
  }
}