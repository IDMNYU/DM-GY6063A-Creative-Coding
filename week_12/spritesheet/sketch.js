//code by:
// https://github.com/Jared-Sprague
var spriteSheet;
var posYSlider, posXSlider;
var alienPosX;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  posYSlider = createSlider(0,height,height/2);
    posXSlider = createSlider(0,width,width/2);
  posYSlider.position(width - 50,20);
  posYSlider.position(width - 50,45);
  spriteSheet = loadImage('image/sprite_sheet.jpg', function () {
    
  });
  
  alienPosX = posXSlider.value();
}

function draw(){
  clear();
  // Full sprite sheet
    image(spriteSheet, 0, 0);

    // Alien guy
    //arguments:
    // image,
    // sourcePositionX,
    // sourcePositionY,
    // sourceWidth,
    // sourceHeight,
    // destinationPositionX,
    // destiationPositionY
    // destinationWidth,
    // destinationHeight
    alienPosX += 1.0;
    image(spriteSheet, 110, 0, 53, 75, alienPosX, posYSlider.value(), 53, 75);

    // Fence
    // image(spriteSheet, 110, 132, 55, 55, spriteSheet.width + 10, 80, 55, 55);

    // // Water
    // image(spriteSheet, 164, 75, 55, 55, spriteSheet.width + 10, 140, 55, 55);

    // // Happy plant
    // image(spriteSheet, 220, 20, 40, 110, spriteSheet.width + 10, 200, 40, 100);

    // // Grass block
    // image(spriteSheet, 0, 75, 53, 53, 0, spriteSheet.height + 10, 125, 125);

    // // Three coins in a row
    // //notice how we call image each time our for loop iterates
    // var x = 70;
    // for (var i = 0; i < 3; i++) {
    //   image(spriteSheet,
    //     67, 202, 30, 30, x += 75, spriteSheet.height + 10, 75, 75);
    // }
  
}