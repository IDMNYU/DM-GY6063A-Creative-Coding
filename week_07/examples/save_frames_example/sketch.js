function setup() {
  createCanvas(400,600);
  background(255);
  textSize(15);
  saveFrames("Goodnight_ipad", "png", 3, 24, function(){alert('yo');});
}

function draw() {
  setTimeout(function(){
    text("Goodnight ipad", 170,200);
  }, 200);
}