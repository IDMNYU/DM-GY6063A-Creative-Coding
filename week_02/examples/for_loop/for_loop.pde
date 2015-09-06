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
    noFill();
    fill(random(255), random(255), random(255));
    ellipse(width/2, height/2, width / i, width / i);
  }
  scalar-=0.001;
}
