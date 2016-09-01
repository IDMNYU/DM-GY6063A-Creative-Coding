/////////////////////////////
// Object constructor!
/////////////////////////////
function Particle(pos) {
  this.speed   = 20;
  this.name    =  "Ball";
  this.color   = color(0,0,255);
  this.pos     = pos;
  this.lifespan = 255;
}

Particle.prototype = {
  constructor: Particle,
  bounce : function(){
    if(this.pos < 0 || this.pos > height){
      this.speed *= -1;
    }
    this.pos += this.speed;
    this.lifespan-=4;
  }
};

var particles = [];
function setup() {
  createCanvas(400,400);
  textAlign(CENTER);
}

function draw() {
  background(255);
  translate(width/2,0);
  
  noStroke();
  for(var i=0; i < particles.length; i++){
    if(particles[i].lifespan <= 0){
      particles.splice(i, 1);
    } else {
      fill(
        red(particles[i].color),
        green(particles[i].color),
        blue(particles[i].color),
        particles[i].lifespan
      );
      ellipse(0,particles[i].pos, 100,100);
      particles[i].bounce();      
    }

  }
  
}

function mousePressed(){
  particles.push(new Particle(mouseY));
}