// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com
// fix for repeller radius by Kevin Siwoff
// Particles + Forces

// A very basic Repeller class
function Repeller(x,y) {
  
  // Gravitational Constant
  this.G = 100;
  this.r = 20.0;//roughly equivalent to Repeller radius

  this.loc = new p5.Vector(x,y);
}

Repeller.prototype = {
  constructor : Repeller,
  display : function() {
    stroke(0);
    strokeWeight(2);
    fill(175);
    ellipse(this.loc.x,this.loc.y,48,48);
  },
  // Calculate a force to push particle away from repeller
  repel : function(p) {
    var dir = p5.Vector.sub(this.loc,p.loc);      // Calculate direction of force
    var d = dir.mag() - this.r;                       // Distance between objects - offset for ellipse radius
    dir.normalize();                           // Normalize vector (distance doesn't matter here, we just want this vector for direction)
    d = constrain(d,5,100);                    // Keep distance within a reasonable range
    var force = -1 * this.G / (d * d);            // Repelling force is inversely proportional to distance
    dir.mult(force);                           // Get force vector --> magnitude * direction
    return dir;
  }
};