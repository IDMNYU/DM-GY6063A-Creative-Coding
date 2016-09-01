var Cat = {
  color : "brown",
  greeting : "purr!",
  sayHello : function(){
    return this.greeting;
  }
};
function setup() {
 createCanvas(400,400);
 textAlign(CENTER);
 var cat = Cat;
 
 var cat2 = Cat;
 
 cat2.color = "blue";
 fill(cat2.color);
 println(cat.color);
 text(cat.sayHello(), width/2, height/2);
 
 
}