var lexicon;
function setup() {
  createCanvas(400, 400);
  lexicon = new RiLexicon();
  textSize(20);
  textAlign(CENTER, CENTER);
  generateHaiku();
}

function mousePressed(){
  background(255);
  generateHaiku();
}

function generateHaiku(){
  //5 syllables
  var output = lexicon.randomWord('jj', 1) + ' ';
  output += lexicon.randomWord('vbg',2) + ' ';
  output += lexicon.randomWord('nn', 2) + '\n';
  
  //7 syllables
  output += lexicon.randomWord('vbg', 2) + ' ';
  output += lexicon.randomWord('jj', 2) + ' ';
  output += lexicon.randomWord('nn', 3) + '\n';
  
    //5 syllables
  output += lexicon.randomWord('nns', 1) + ' ';
  output += lexicon.randomWord('rb', 2) + ' ';
  output += lexicon.randomWord('vbg', 2) + '\n';
  
  text(output, width/2, height/2);
}