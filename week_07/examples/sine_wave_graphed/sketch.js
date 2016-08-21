


function setup(){
  createCanvas(400,400);
  frameRate(10);
}
function draw(){
  var x = 0.0;
  var angle = 0.0;
  background(255);
  translate(0,height/2);
    while(x < width){
      var amplitude = height/4;//play with the amplitude value 
      var y = sin(radians(angle)) * amplitude;
      fill(100);
      ellipse(x,y,10,10);
      x+=10.0;    
      angle+=10.0;
    }
    //x = x % width;  
}