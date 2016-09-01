function setup() {

    createCanvas(400,400);
    textSize(20);
    noStroke();
    var words = RiTa.tokenize("I scream you scream we all scream for Ice Cream.");
    for(var i=0; i < words.length; i++){
      text(words[i], 10, i *20 + 20);
    }
  }