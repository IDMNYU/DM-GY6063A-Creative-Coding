var ps;//particle system
var repeller;//an object that reps repulsion force

function setup() {
  createCanvas(windowWidth,windowHeight);
  ps = new ParticleSystem(new p5.Vector(width/2,50));
  repeller = new Repeller(width/2-20,height/2);
}

function draw() {
  background(255);
  ps.addParticle();
  
  // Apply gravity force to all Particles
  var gravity = new p5.Vector(0,0.1);
  ps.applyForce(gravity);
  
  ps.applyRepeller(repeller);
  
  repeller.display();
  ps.run();
}

function mousepressed(){
  ps.addParticle(new p5.Vector(mouseX,mouseY));
}