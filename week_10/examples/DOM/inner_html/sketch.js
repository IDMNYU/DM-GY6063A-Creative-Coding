/**
* Project Title: DOM tutorial, positioning
* Author: Kevin Siwoff
**/

var elements = [];
function setup() {

  for(var i =0; i < 10; i++){
    var elem = createElement('h1', '');
    elem.position(cos(map(i, 0,10,0, TWO_PI))*300 +windowWidth/2,
                sin(map(i,0,10,0,TWO_PI))*300 + windowHeight/2);
    elements.push(elem);
  }
}

function draw(){
  for(var i =0; i < elements.length; i++){
    elements[i].html(frameCount);
  }
}