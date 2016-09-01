function setup() {
  createCanvas(400,400);
  textSize(20);

  var word = "huge";
  var wordWidth = textWidth(word);
  text(word, 50,50, wordWidth, 20);
  rect(50,70, wordWidth, wordWidth);
  
  var word2 = "huuuuuge";
  var word2Width = textWidth(word2);
  text(word2, 100 + wordWidth ,50, word2Width, 20);
  rect(100 + wordWidth,70, word2Width, word2Width);
  
  var word3 = "huuuuuuuuuge";
  var word3Width = textWidth(word3);
  text(word3, 150 + word2Width ,50, word3Width, 20);
  rect(150 + word2Width,70, word3Width, word3Width);
  
  
}