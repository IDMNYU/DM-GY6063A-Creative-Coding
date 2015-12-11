function PrismaticShape(scaleSize, position, rotation){
  this.scaleSize = scaleSize;
  //our default position is either passed in
  // or it's just 0
  this.position = position || createVector(0,0);
  this.rotation = rotation || 0;
}

PrismaticShape.prototype = {
  constructor: PrismaticShape,
  
  getPosition : function(){
    return this.position;
  },
  
  makeShape: function(scaleVal){
    push();
    var _scale = scaleVal || this.scaleSize;
    scale(_scale);
    //quad shape
    fill(100,100,100,40);
    beginShape();
      stroke(0);
      vertex(0,0);
      vertex(width/2,0);
      vertex(width,height/2);
      vertex(width/2,height);
    endShape(CLOSE);
    
    //fan shape
    fill(100,100,100,40);
    noStroke();
    beginShape(TRIANGLE_FAN);
      vertex(width/2,0);
      vertex(width,height/2);
      vertex(width-100,height/4);
      vertex(width/2,height);
    endShape(CLOSE);
    pop();
  }
  
};