/**
* WARNING: THIS APPLICATION WILL PURPOSELY SLOW DOWN TREMENDOUSLY
* It is meant to demonstrate the need for object destruction
* And the impact that objects creation have on RAM
**/
var particles = [];
numInitialParticles = 2000;
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
    particles[i].update();
    particles[i].display();
  }
  var numOfParticles = particles.length + " particles";
  text(numOfParticles, 20, height-100);
}