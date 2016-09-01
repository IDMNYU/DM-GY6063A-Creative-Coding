var btn;
var bg = 'black';
function setup() {
  createCanvas(windowWidth, windowHeight);
  btn = createElement('button', 'Click me');
  btn.position(20,20);
  btn.mousePressed(
    function(){
      bg = color(random(255), random(255), random(255));
    }  
  );
}

function draw() {
  background(bg);
}
