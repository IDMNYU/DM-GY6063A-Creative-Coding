function setup() {
  var evenNumbers = [];
  for(var i=0; i < 100; i++){
    evenNumbers[i] = i *2;
  }
  println(evenNumbers);
  
  var tenths = [];
  var number = 0.0;
  for(var j=0; j < 10; j++){
    tenths[j] = (number += 0.1);
  }
  println(tenths);
}