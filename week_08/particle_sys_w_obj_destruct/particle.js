function Particle(loc) {
  this.loc = loc;
  this.acc = new p5.Vector();
  this.vel = new p5.Vector(random(-1,1), random(-2,0));
  this.lifespan = 255;
}

Particle.prototype = {
  constructor: Particle,
  update : function(){  
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.lifespan -=2.0;
  },
  display : function(){
    stroke(0,this.lifespan);
    fill(175, this.lifespan);
    ellipse(this.loc.x, this.loc.y, 8, 8);
  }  
};