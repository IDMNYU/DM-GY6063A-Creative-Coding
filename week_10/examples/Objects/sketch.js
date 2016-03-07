////////////////////
// This is an Object Literal
// Object literals are Objects defined within 
// curly brackets like : { }
/////////////////////
var Cat = {
  color: "brown",
  greeting: "purr!",
  
  sayHello : function(){
    return this.greeting;
  } 
};

/**
 * This is another way of creating an Object.
 * The technique is to use a special function
 * called a "constructor", and then setting methods
 * on that constructor Object's prototype
 */
function Bear(){
  //we define our default properties
  this.color = "brown";
  this.greeting = "Roar!";
}

Bear.prototype = {
  constructor: Bear,
  // methods
  sayHello: function(){
    return this.greeting;
  },
  getColor: function(){
    return this.color;
  }
};

/**
 * This is another Object constructor function.
 * You can add properties to your Object by
 * calling Object.defineProperties.
 * This is an advanced technique.
 */
function Dog(numEars, numNose){
  var ears = numEars;
  var nose = numNose;

  Object.defineProperties(
    this,
    {
      ears : {
        get: function(){
          return ears;
        },
        set: function(numEars){
          ears = numEars;
        }
      }
    }
  );
}

function setup() {
 //since Cat does not have a constructor
 //function, we can create Cat instance like this.
 var myCat = Cat;
 
 //a more common way of creating object instances is
 //to use the "new" operator
 var bear = new Bear();
 println(bear.getColor());
 
 //Here we construct a new Dog instance.
 //notice how we can pass parameters into our Dog constructor
 var myDog = new Dog(2,1);
 println( myDog.ears );
 myDog.ears = 3;
 println("my dog now has "+ myDog.ears + " ears");
}