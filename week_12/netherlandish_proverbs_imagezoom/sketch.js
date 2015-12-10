//code by:
// https://github.com/Jared-Sprague
var proverbs,
  RECT_WIDTH,
  RECT_HEIGHT,
  rectX,
  rectY,
  dx,
  dy,
  dWidth,
  dHeight,
  isZoomed = false,
  destTopLeft,
  destBottomRight,
  topLeftParticle,
  bottomRightParticle,
  EXTRA_ZOOM_SPEED = 1.75,
  FRAME_RATE = 30;

function doSomethingAfterImageLoad(){
  createCanvas(proverbs.width, proverbs.height);
    image(proverbs, 100, 0);
    RECT_WIDTH = floor(proverbs.width * 0.075);
    RECT_HEIGHT = floor(RECT_WIDTH / (proverbs.width / proverbs.height));
    dWidth = RECT_WIDTH * 10;
    dHeight = RECT_HEIGHT * 10;
    dx = floor((proverbs.width / 2) - (dWidth / 2));
    dy = floor((proverbs.height / 2) - (dHeight / 2));
    destTopLeft = createVector(dx, dy);
    destBottomRight = createVector(dx + dWidth, dy + dHeight);
}


function setup() {
  frameRate(FRAME_RATE);
  var image_name =
    'image/netherlandish_proverbs.jpg';

  proverbs = loadImage(image_name, doSomethingAfterImageLoad);
}

function draw() {
  clear();
  noFill();
  stroke('#FFFFF');
  strokeWeight(2);

  image(proverbs, 0, 0);

  if (isZoomed) {
    topLeftParticle.update();
    bottomRightParticle.update();

    var zoom_rect_x = topLeftParticle.position.x;
    var zoom_rect_y = topLeftParticle.position.y;
    var zoom_rect_width = bottomRightParticle.position.x - topLeftParticle.position.x;
    var zoom_rect_height = bottomRightParticle.position.y - topLeftParticle.position.y;

    rect(zoom_rect_x, zoom_rect_y, zoom_rect_width, zoom_rect_height);

    // Draw a zoomed image of the current rect
    image(proverbs, rectX, rectY, RECT_WIDTH, RECT_HEIGHT, zoom_rect_x,
      zoom_rect_y, zoom_rect_width, zoom_rect_height);

    return;
  }

  updateZoomSelectRect();
  drawZoomSelectRect();
}

function updateZoomSelectRect() {
  var cursorX, cursorY;
    cursorX = mouseX;
    cursorY = mouseY;
  if (cursorX === 0 && cursorY === 0) {
    cursorX = floor((proverbs.width / 2) - (RECT_WIDTH / 2));
    cursorY = floor((proverbs.height / 2) - (RECT_HEIGHT / 2));
  }

  // keep the rect within the bounds of the image
  rectX = cursorX - floor(RECT_WIDTH / 2);
  rectY = cursorY - floor(RECT_HEIGHT / 2);
  rectX = applyCoordBoundary(rectX, RECT_WIDTH, proverbs.width);
  rectY = applyCoordBoundary(rectY, RECT_HEIGHT, proverbs.height);
}

function drawZoomSelectRect() {
  // Draw the zoom rect
  rect(rectX, rectY, RECT_WIDTH, RECT_HEIGHT);

  // draw the plus symbol circle in the top left
  var w = 14;
  var line_w = w / 2;
  var x = rectX + w;
  var y = rectY + w;
  ellipse(x, y, w, w);

  // draw the cross in the ellipse
  line(x, y + line_w, x, y - line_w);
  line(x + line_w, y, x - line_w, y);
}


function touchStarted() {
  updateZoomSelectRect();
}

function touchMoved() {
  updateZoomSelectRect();
}

function touchEnded() {
  var origin =
    createVector(mouseX, mouseY);
  var topLeftDist = p5.Vector.dist(destTopLeft, origin);
  var bottomRightDist = p5.Vector.dist(destBottomRight, origin);
  var multiplierA;
  var multiplierB;

  updateZoomSelectRect();

  // try to make two particles arrive at their destination at the same time
  if (topLeftDist < bottomRightDist) {
    multiplierA = topLeftDist / FRAME_RATE;
    multiplierB = multiplierA * (bottomRightDist / topLeftDist);
  } else if (bottomRightDist < topLeftDist) {
    multiplierB = bottomRightDist / FRAME_RATE;
    multiplierA = multiplierB * (topLeftDist / bottomRightDist);
  } else {
    multiplierB = multiplierA = topLeftDist / FRAME_RATE;
  }

  topLeftParticle = new Particle(origin, destTopLeft, multiplierA * EXTRA_ZOOM_SPEED);
  bottomRightParticle = new Particle(origin, destBottomRight, multiplierB * EXTRA_ZOOM_SPEED);

  isZoomed = !isZoomed;
  return false;
}

/**
 * Prevents the rect from drawing outside the canvas boundary
 */
function applyCoordBoundary(coord, sideLength, boundary) {
  if (coord < 0) {
    return 0;
  }
  if ((coord + sideLength) > boundary) {
    return boundary - sideLength;
  }
  return coord;
}

// A simple Particle class
var Particle = function (position, dest, speed) {
  this.position = position.copy();
  this.dest = dest.copy();
  this.acceleration = createVector(0.00, 0.00);
  this.direction = p5.Vector.sub(dest, position);
  this.direction.normalize();
  this.direction.mult(speed);
  this.velocity = createVector(this.direction.x, this.direction.y); //createVector(0, 0);
};

// Method to update position
Particle.prototype.update = function () {
  this.velocity.add(this.acceleration);
  if (p5.Vector.dist(this.dest, this.position) < 20) {
    this.velocity = createVector(0, 0);
  }
  this.position.add(this.velocity);
};