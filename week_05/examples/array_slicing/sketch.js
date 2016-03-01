var myArray = [23,52,1,24,5];
function setup() {
  print("my array has " + myArray.length + " elements");
}

function mousePressed(){
  
  myArray = myArray.slice(0, myArray.length-1);
  print("now my array has " + myArray.length + " elements");
}