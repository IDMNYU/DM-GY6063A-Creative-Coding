function Particle(posY){
  this.speed = 2;
  this.color = "blue";
  this.pos = posY;
  this.name = "Ball";
}

Particle.prototype = {
  constructor : Particle,
  bounce : function(){
    if(this.pos > height || this.pos < 0){
      this.speed *= -1;
    }
    this.pos += this.speed;
  }
};

var particle;
function setup() {
  createCanvas(400,400);
  textAlign(CENTER);
  particle = new Particle(0);
}

function draw() {
  background(255);
  noStroke();
  translate(width/2,0);
  fill(particle.color);
  ellipse(0,particle.pos, 100,100);
  particle.bounce();
  fill(255);
  text(particle.name, 0,particle.pos);
}