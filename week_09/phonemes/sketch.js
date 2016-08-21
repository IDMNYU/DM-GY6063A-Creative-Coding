function setup() {

    createCanvas(400,400);
    textSize(20);
    noStroke();
    // gets the phonemes from a string of text and returns a phonetically spelled string
    var words = RiTa.getPhonemes("Got me looking so crazy right now.");
    text(words, 50, 50,300,100);
    noFill();
    stroke(2);
    rect(25,25,350,350);
  }