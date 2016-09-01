var lyricLine = "Thank you very much Mister Robot.";
var words = [];
function setup() {
    createCanvas(400,400);
    textSize(20);
    
    words = RiTa.tokenize(lyricLine);
}
  
  function draw(){
    background(255);
    translate(20,20);
    var pos = 0;
    for(var i=0; i < words.length; i++){
      var stresses = RiTa.getStresses(words[i]);
      text(words[i], pos, 20);
      text(stresses, pos, 45);
      pos += textWidth(words[i]);
    }
  }