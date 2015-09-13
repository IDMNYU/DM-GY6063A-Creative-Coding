int numCircles = 20;
float scalar = 1.0;

void setup(){
  size(500,500);
  smooth();  
}

void draw(){
  background(255);
  scale(scalar);
  
  for(int i = 1; i <= numCircles; i++){
    fill(random(255), random(255), random(255));
    ellipse( width/2, height/2, width / i, width / i );
  }
  println("before ", scalar);
  
  scalar = scalar - 0.0005;
  //is the same as above
  //scalar -= 0.0005;
  println("after ", scalar);
}