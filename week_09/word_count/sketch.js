var lyricLine = "Thank you very much Mister Robot";
function setup() {
    createCanvas(400,400);
    textSize(20);
    textAlign(CENTER);
}
  
  function draw(){
    background(255);
    text(lyricLine, 0,height/2, width, 20);
    text(RiTa.getWordCount(lyricLine), height/2, height /2 + 45);
  }