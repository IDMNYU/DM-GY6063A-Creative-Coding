var lyricLine = "Thank you very much Mister Robot.";
var words = [];

function setup() {
    createCanvas(400,400);
    textSize(20);
    
    //get all of the stresses as an array of 1's and 0's where 1 means stressed
    //and 0 means unstressed
    stresses = RiTa.getStresses(lyricLine);
    words = RiTa.tokenize(lyricLine);
}
  
  function draw(){
    background(255);
    var wordPos = 0;
    for(var i=0; i < words.length; i++){
      var wordStresses = RiTa.getStresses(words[i]);
      push();
      translate(wordPos,height/2);
      beginShape();
      print(wordStresses);
      for(var j=0; j < wordStresses.length; j++){
        vertex(j, -wordStresses[j]*100);        
      }
      endShape();
      pop();
      text(words[i], wordPos, 0, textWidth(words[i]),200);
      wordPos += textWidth(words[i])+ 20;
    }
  }