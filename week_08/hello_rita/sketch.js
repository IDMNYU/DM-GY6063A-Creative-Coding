function setup() {

    createCanvas(400,400);
    textSize(20);
    noStroke();
    // take a string and split it into an array of words
    var words = RiTa.tokenize("I scream you scream we all scream for ice cream.")
    for (var i=0, j = words.length; i<j; i++) {
        text(words[i], 50, 50 + i*20);
    }
  }