//declare an empty array variable
var myCollection = [];

function setup(){
  // you can fill the array by referencing the array's
  // indices
  for(var i =1; i <= 5; i++){
    myCollection[i-1] = random(1,5);
  }
  
  //or you can push items onto the array
  myCollection.push("hello");
  myCollection.push("world");
  myCollection.push(3);
  myCollection.push(2000.2);
  
  println(myCollection);

  //how large is our array?
  println(myCollection.length);
}
