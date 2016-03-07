function setup() {
  createCanvas(400,400); 
  colorMode(HSB,360,100,100);
}

function draw(){
  background(200,100,30);
  fill(45,76,100);
  //uncomment this line to see the translation
  showTranslation();
  translate(mouseX,mouseY);
  triangle(-40,0,40,0,0,-40);

}

function showTranslation(){
  //the translation function
  text("translate("+mouseX+","+mouseY+")",20,height-40);
}