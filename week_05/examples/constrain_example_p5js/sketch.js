function setup() {
  for(var i=0; i < 500; i++){
    var constrained = constrain(i,0,200); 
    println(constrained);  
  }
}