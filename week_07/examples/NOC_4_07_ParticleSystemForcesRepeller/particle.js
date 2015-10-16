function Particle(loc) {
  this.loc = loc;
  this.acc = new p5.Vector();
  this.vel = new p5.Vector(random(-1,1), random(-2,0));
  this.lifespan = 255;
  this.mass = 1; // Let's do something better here!
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
  },
  // Is the particle still useful?
  isDead : function() {
    if (this.lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  },
  run : function() {
    this.update();
    this.display();
  },

  applyForce : function(force) {
    var f = force;
    f.div(this.mass);   
    this.acc.add(f);
  }
};

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com
//////////////////////////////////
// OUR CONSTRUCTOR FUNCTION
///////////////////////////////////

function ParticleSystem(loc) {
  this.particles = [];
  this.origin = loc;
}
ParticleSystem.prototype = {
  constructor : ParticleSystem,
  
  addParticle :  function(loc) {
    this.particles.push(new Particle(loc || this.origin));
  },
  // A function to apply a force to all Particles
  applyForce : function(f) {
    for (var p in this.particles) {
      this.particles[p].applyForce(f);
    }
  },
  applyRepeller : function(r) {
    for (var p in this.particles) {
      var force = r.repel(this.particles[p]);        
      this.particles[p].applyForce(force);
    }
  },
  run : function() {
    for (var i = this.particles.length - 1; i >= 0; i--) {
      var p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }
  
};