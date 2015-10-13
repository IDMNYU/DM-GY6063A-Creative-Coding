class Particle {
  PVector location;
  PVector vel;
  PVector acc;
  float lifespan;
  
  Particle(PVector loc){
    this.location = loc.get();
    this.acc = new PVector();
    this.vel = new PVector(random(-1,1), random(-2,0));
    this.lifespan = 255;
  }
  void update(){
    vel.add(acc);
    location.add(vel);
    lifespan -=2.0;
  }
  void display(){
    stroke(0,lifespan);
    fill(175, lifespan);
    ellipse(location.x, location.y, 8, 8);
  }  
}

