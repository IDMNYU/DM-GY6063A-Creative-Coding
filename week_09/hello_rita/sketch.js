var words=[];
var wordPosX = 20;
var wordPosY = 20;

var syllables = [];
var syllablePosX =20;
var syllablePosY = wordPosY+300;

var madlibpoetry= "Susan had dressed her daintily in a white, starched, and embroidered dress, with sash of blue and beaded slippers. Her long ruddy curls were sleek and round, and Susan had let her put on her best hat, out of compliment to the manse. It was a somewhat elaborate affair, wherein Susan's taste had had more to say than Anne's, and Rilla's small soul gloried in its splendours of silk and lace and flowers. She was very conscious of her hat, and I am afraid she strutted up the manse hill. The strut, or the hat, or both, got on the nerves of Mary Vance, who was swinging on the lawn gate. Mary's temper was somewhat ruffled just then, into the bargain. Aunt Martha had refused to let her peel the potatoes and had ordered her out of the kitchen.";

var lexicon1;
var lexicon2;

function preload(){
  words=RiTa.tokenize(madlibpoetry);
}

function setup() {
  createCanvas(550,1100);
  textSize(15);
  lexicon1 = new RiLexicon();
  lexicon2 = new RiLexicon();
  
  var wordPos = 0;
    for(var i=0; i < words.length; i++){
      text(words[i], wordPosX, wordPosY, textWidth(words[i]),20);
      syllables[i]=RiTa.getPhonemes(words[i]);
      text(syllables[i], syllablePosX, syllablePosY, textWidth(syllables[i]),20);
      wordPosX += textWidth(words[i])+5;
      syllablePosX += textWidth(syllables[i])+5;
      if(wordPosX > 450){
        wordPosX = 10;
        wordPosY +=  20;
      }
    if(syllablePosX > 400){
        syllablePosX = 10;
        syllablePosY +=  20;
      }
    }
}

function mousePressed() {
  background(255);
  var wordPosX1 = 20;
  var wordPosY1 = 20;
  var syllablePosX1 =20;
  var syllablePosY1 = wordPosY+200;
  
  for(var i=0; i < words.length; i++){
    if(lexicon2.isNoun(words [i])){
      words[i]= lexicon1.randomWord("nn");
      syllables[i]=RiTa.getPhonemes(words[i]);
    }
    else if(lexicon2.isAdjective( words [i])){
      words[i]= lexicon1.randomWord("jj");
      syllables[i]=RiTa.getPhonemes(words[i]);
      }
  }

  for(var w=0; w< words.length-1; w++){
      text(words[w], wordPosX1, wordPosY1, textWidth(words[w]),20);
      text(syllables[w], syllablePosX1, syllablePosY1, textWidth(syllables[w]),20);
      wordPosX1 += textWidth(words[w])+5;
      syllablePosX1 += textWidth(syllables[w])+5;
      if(wordPosX1 > 450){
        wordPosX1 = 10;
        wordPosY1 +=  20;
      }
      if(syllablePosX1 > 400){
        syllablePosX1 = 10;
        syllablePosY1 +=  20;
      }
    }

}