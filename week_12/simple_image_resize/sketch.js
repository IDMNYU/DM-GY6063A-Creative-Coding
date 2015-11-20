/*
 * @name Load and Display Image
 * @description Images can be loaded and displayed to the screen at their
 * actual size or any other size.
 * <p><em><span class="small"> To run this example locally, you will need an 
 * image file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">
 * local server</a>.</span></em></p>

 */
var img;  // Declare variable 'img'.
var destXSlider;
var destYSlider;
function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage("assets/moonwalk.jpg");  // Load the image

  destXSlider = createSlider(0,100,100);
  destXSlider.position(20,20);
  
  destYSlider = createSlider(0,100,100);
  destYSlider.position(20,50);
}

function draw() {
background(255);
  // Displays the image at its actual size at point (0,0)
image(img,
  0, 0, //source position
  img.width, img.height, //source size
  //when we change the slider values,
  //our image moves inside the canvas
  destXSlider.value(),destYSlider.value(), //destination position
  500, 500);//dest size
}
