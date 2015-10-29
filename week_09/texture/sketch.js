var img;
var theta = 0;

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
  img = loadImage("assets/DSC_7651.JPG");
}

function draw(){
  background(255, 255, 255, 255);
  translate(0,0,400);
  translate(-300, 0, 0);
  push();
    rotate(theta * mouseX * 0.001, [1,1,1]);
    
    //pass image as texture
    texture(img);
    sphere(45);
  pop();
    translate(150,0,0);
  push();

    rotateZ(theta * mouseX * 0.001);
    rotateX(theta * mouseX * 0.001);
    rotateY(theta * mouseX * 0.001);
    texture(img);
    torus();
  pop();
     translate(150,0,0);
    push();
 
    rotateZ(theta * mouseX * 0.001);
    rotateX(theta * mouseX * 0.001);
    rotateY(theta * mouseX * 0.001);
    texture(img);
    cone();
  pop();
    translate(150,0,0);
    push(); 
    rotateZ(theta * mouseX * 0.001);
    rotateX(theta * mouseX * 0.001);
    rotateY(theta * mouseX * 0.001);
    texture(img);
    box();
  pop();
  theta += 0.05;
}