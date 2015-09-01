//create buttons
//this can be done in html as well
//

// var button1 = document.createElement("button");
// button1.id = "button1";
// document.body.appendChild(button1);
// button1.textContent = "show sketch 1";
// button1.addEventListener("click", showFirstSketch);

// var button2 = document.createElement("button");
// button2.id = "button2";
// button2.textContent = "show sketch 2";
// document.body.appendChild(button2);
// button1.addEventListener("click", showSecondSketch);

// first sketch instance
var FirstSketch = function(p5Inst){
  p5Inst.setup = function(){
    p5Inst.createCanvas(500,500);
    //other setup methods go here
  };
  p5Inst.draw = function(){
    p5Inst.background(50);
    p5Inst.ellipse(p5Inst.width/2, p5Inst.height/2, 50,50);
  };
};

// second sketch instance
var SecondSketch = function(p5Inst){
  p5Inst.setup = function(){
    p5Inst.createCanvas(500,500);
    //other setup methods go here
  };
  p5Inst.draw = function(){
    p5Inst.background(0);
    p5Inst.ellipse(p5Inst.width/2, p5Inst.height/2, 50,50);
  };
};

//handler when button1 is pressed
var showFirstSketch = function (){
  // var canvas = document.getElementById('defaultCanvas');
  // canvas.parentElement.removeChild(canvas);
  // var sketch1 = new p5(FirstSketch);
};

//handler when button2 is pressed
var showSecondSketch = function(){
  // var canvas = document.getElementById('defaultCanvas');
  // canvas.parentElement.removeChild(canvas);
  // //document.createElement('canvas');
  // var sketch2 = new p5(SecondSketch);
};

window.onload = function(){
  var firstNode = document.getElementById('p5sketch1');
  var sketch = new p5(FirstSketch, firstNode); //global reference to our p5 sketch object
  
  var secondNode = document.getElementById('p5sketch2');
  var anotherSketch = new p5(SecondSketch, secondNode);
};

//load our first sketch when the window loads
//note:  this function gets called first
//window.onload = function(){
  // sketch = p5(FirstSketch);
//};


