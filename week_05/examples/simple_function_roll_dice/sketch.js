function setup() {
  createCanvas(windowWidth,windowHeight);
  
  println("ready to roll!");
  //roll the dice 10 times
  for(var i=0; i < 10; i++){
    rollDice();    
  }
  println("finished rolling the dice");
}

function rollDice(){
  var d = 1+ int(random(6));
  println("Rolled: " + d );
}