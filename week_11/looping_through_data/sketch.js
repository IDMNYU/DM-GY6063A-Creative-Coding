var data = [
  2,
  3,
  6,
  1.2,
  4,
  4.5,
  5.5
];

function setup() {
  createCanvas(400,400);
  translate(0,height/2);
  for(var i=0; i < data.length; i++){
    var circleSize = map(data[i], 1.2, 6, 5, 45);
    translate(50,0);
    ellipse(0,0, circleSize, circleSize);
  }  
}