function setup() {

    createCanvas(400,400);
    textSize(20);
    
    noFill();
    stroke(2);
    rect(25,25,350,350);
    
    noStroke();
    fill(0);
    
    var words = RiTa.getPhonemes("Got me lookin so crazy right now.");
    text(words, 50,50, 300,100);
  }