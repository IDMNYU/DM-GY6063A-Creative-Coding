//our Particle Object
var Particle = {
  size   : 100,
  name    : "astroid",
  color   : "red"
};
///////////////////
function setup() {
  createCanvas(400,400);
  //we assign the data of our Particle object
  //to a local variable called particle
  var particle = Particle;

  fill(particle.color);
  noStroke();
  ellipse(width/2,height/2, particle.size,particle.size);
  
  fill(255);//white text
  textAlign(CENTER);
  text(particle.name, width/2, height/2);
}