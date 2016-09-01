/**
* Project Title: DOM tutorial, positioning
* Author: Kevin Siwoff
**/

var header;
function setup() {
  
  header = createElement('h1', 'hi I\'m an h1 tag');
  frameRate(1);
}

function draw(){
 header.position(random(windowWidth), random(windowHeight));
}