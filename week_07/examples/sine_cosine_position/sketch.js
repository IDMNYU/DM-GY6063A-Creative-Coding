var angle = 0.0;
function setup(){
  createCanvas(400,400);
}
function draw(){
  //background(255); 
   translate(width/2,height/2);
    var amplitude = height/4;//play with the amplitude value 
    
    angle +=2.0;
    var y=sin(radians(angle)) * amplitude;
    var x = cos(radians(angle+45)) * amplitude;
    fill(100);
    ellipse(x,y,10,10);
}