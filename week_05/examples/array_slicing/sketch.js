var myArray = [23,52,1,24,5];
function setup() {
  print("my array has " + myArray.length + " elements");
}

function mousePressed(){
  //remember that slice does not actually make a change
  //to myArray.  We need to assign the result to myArray
  //in order for the changes to take effect
  myArray = myArray.slice(0, myArray.length-1);
  print("now my array has " + myArray.length + " elements");
}