var lexicon;
function setup() {
  createCanvas(400, 400);
  textSize(20);
  textAlign(CENTER);
  text("Click for random word", width/2, height/2);
  lexicon = new RiLexicon();
}

function mousePressed() {
  background(255);
  var word = lexicon.randomWord();
  text(word, width/2, height/2);
}