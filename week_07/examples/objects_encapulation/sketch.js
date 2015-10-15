var Particle = {
  speed   : 10,
  name    : "astroid",
  color   : "red"
};

function setup() {
  createCanvas(windowWidth,windowHeight);
  var particle = Particle;
  fill(particle.color);
  noStroke();
  ellipse(width/2,height/2, 100,100);
  
  fill(255);//white text
  textAlign(CENTER);
  text(particle.name, width/2, height/2);
}

function draw() {
  
}