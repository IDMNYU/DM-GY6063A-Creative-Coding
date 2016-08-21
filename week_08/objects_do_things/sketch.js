/////////////////////////////
// Object constructor!
/////////////////////////////
function Particle(pos) {
  this.speed   = 10;
  this.name    =  "astroid";
  this.color   = "red";
  this.pos     = pos;//pos is a p5.Vector
}

// here's where we define our methods
// aka. the stuff the Object does
Particle.prototype = {
  constructor : Particle,
  bounce : function(){
    // if particle position has gone outside the boundary
    // of our canvas.  reverse speed!
    if (this.pos.y > height || this.pos.y < 0){
      this.speed *= -1;
    }
    //add speed to our our particle position
    this.pos.add(new p5.Vector(0,this.speed));
  }
  
};

var particle;
function setup() {
  createCanvas(windowWidth,windowHeight);
  particle = new Particle(createVector(width/2, height/2));
}

function draw() {
  background(255);
  fill(particle.color);
  noStroke();
  ellipse(particle.pos.x,particle.pos.y, 100, 100);
  
  fill(255);//white text
  textAlign(CENTER);
  text(particle.name, particle.pos.x, particle.pos.y);
  particle.bounce();
}