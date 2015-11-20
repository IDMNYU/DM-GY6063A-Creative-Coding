//code by:
// https://github.com/Jared-Sprague
var spriteSheet;

var spriteCharacters = {
  alienGuy : {
    position: {
      x: 110,
      y: 0
    }
  },
  fence : {
      position: {
      x: 110,
      y: 132
    }
  },
  water : {
      position: {
      x: 164,
      y: 75
    }
  }
};

function setup() {
  createCanvas(600, 600);
  background(200);

  spriteSheet = loadImage('image/sprite_sheet.jpg', function () {

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
    image(spriteSheet,
    spriteCharacters.alienGuy.position.x,
    spriteCharacters.alienGuy.position.y,
    53, 75, spriteSheet.width + 10, 0, 53, 75);

    // Fence
    image(spriteSheet, 
    spriteCharacters.fence.position.x,
    spriteCharacters.fence.position.y,
    55, 55, spriteSheet.width + 10, 80, 55, 55);

    // Water
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
  });
}