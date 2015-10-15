/**
* a smooth and simple particle system
**/
var particles = [];
numInitialParticles = 100;
var now =null;

function setup(){
  createCanvas(windowWidth,windowHeight);
  for (var i=0; i< numInitialParticles; i++){
    particles.push(new Particle(new p5.Vector(width/2, height/2)));
  }
}

function draw(){
  background(0);
  //we add a new particle to our ArrayList once per frame
  particles.push(new Particle(new p5.Vector(width/2, height/2)));  
  
  for(var i=0; i < particles.length; i++)
  {
    //if our particle is dead, remove it
    if(particles[i].lifespan <=0){
      //splice is a way of removing a specific
      //element from an array
      particles.splice(i, 1);
    }else {
      particles[i].update();
      particles[i].display();
    }
    
  }
  var numOfParticles = particles.length + " particles";
  text(numOfParticles, 20, height-100);
}