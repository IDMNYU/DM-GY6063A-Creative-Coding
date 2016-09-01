var inputTextElement;
var inputText = '';

function setup() {
  createCanvas(500, 500);
  
  inputTextElement = createInput();
  inputTextElement.position(20,20);
  inputTextElement.input(handleInput);
}

function handleInput(){
  inputText = this.value();
}

function keyPressed(){
  if (key === '\r'){
    text(inputText, random(width), random(height));
  }
}