var treeArray = [
  [
    [1,2,4],
    [5,4,3],
    [2,2,2]
  ],
  
  [2,3,4],
  
  [5,4,3]
];
  
var treeObj = {
 parents1 : {
   child1 : 1,
   child2: 2
 },
 parents2 : {
   child1 : 2,
   child2: 4
 }
};

function setup() {
  //println(treeArray.length);
  for(var i = 0; i < treeArray.length; i++){
    //println(treeArray[i]);
    
    for(var j = 0; j < treeArray[i].length; j++){
      
      for(var k = 0; k < treeArray[i][j].length; k++){
        println(treeArray[i][j][k]);
      }
      
    }
    
  }  
}