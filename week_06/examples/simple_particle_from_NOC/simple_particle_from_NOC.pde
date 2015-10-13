Particle[] particles = new Particle[50];
void setup(){
  size(500,500);
  for (int i=0; i< particles.length; i++){
    particles[i] = new Particle(new PVector(width/2, height/2));
  }
}
void draw(){
  background(0);
  for (Particle particle : particles){
    particle.update();
    particle.display();
  }
    saveFrame("frames/frame-###.png");
}
