var particleNums = [2,3,4,5,1];

var Particle = {
  name : "Hal",
  xPos : 0,
  speed : 23
};

function setup() {
  for(var i in particleNums){
    println(particleNums[i]);
  }
  
  for(var prop in Particle){
    if (Particle.hasOwnProperty(prop)){
      println(Particle[prop]);
    }
  }
}

function draw() {
  
}