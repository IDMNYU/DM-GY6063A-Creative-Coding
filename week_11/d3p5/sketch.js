/**
   * based on http://sciutoalex.github.io/p5-D3-cookbook/
   */
var table;
function preload(){
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable("data/antarctica_weather_averages.csv", "csv", "header");  
}

function setup() {
  var margin = 30; 
  var c = createCanvas(400, 400);
  var canvas = c.canvas;
  var ctx = canvas.getContext('2d');
  push();
  translate(margin,margin);
  
  var aveTemperatureData = subset(table.getRow(2).arr, 1, table.getRow(2).arr.length - 4);
  
  // this is a function stored in a variable!
  var lineGenerator = d3.line()
    .x(function(data,index) { return map(index,0,12,0,width-margin*2); })
    .y(function(data,index) { return map(data,-24,24,0,height-margin*2); })
    .curve(d3.curveCatmullRomClosed.alpha(1));

  strokeWeight(3);
  stroke('#033E8C');
  var cPathLinear = new Path2D(lineGenerator(aveTemperatureData));
  ctx.stroke(cPathLinear);
  
  //p5js drawing only
  // beginShape();
  //   for(var i=0; i < aveTemperatureData.length; i++){
  //     curveVertex(map(i, 0,12,0,width-margin*2), map(aveTemperatureData[i], -24,24,0,height-margin*2));
  //   }
  // endShape();
}