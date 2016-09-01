//Couplet by Ezra Pound
var couplet = "Drawing a sword, cut into water, water again flow: Raise cup, quench sorrow, sorrow again sorry.";

var words = [];
var pos = [];
function setup() {
    createCanvas(400,400);
    textSize(12);
    words = RiTa.tokenize(couplet);
    pos = RiTa.getPosTags(words);
}
  
  function draw(){
    background(255);
    translate(10,10);
    var wordPosX = 0;
    var wordPosY = width/4;

    for(var i=0; i < words.length; i++){
      text(words[i], wordPosX, wordPosY, textWidth(words[i]),20);
      text(pos[i], wordPosX, wordPosY + 20);
      wordPosX += textWidth(words[i]) + 16;
      if(wordPosX > width){
        wordPosX = 0;
        wordPosY += 35;
      }
    }
  }