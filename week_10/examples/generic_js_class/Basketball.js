/**
 * Basketball class
 */
function Basketball(){
  this.color = 'orange';
  this.radius = 6.0;
}

Basketball.prototype.inflateBall = function(){
  this.radius++;
};

var myBasketball = new Basketball();

myBasketball.inflateBall();