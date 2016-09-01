var table;

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable("data/antarctica_weather_averages.csv", "csv", "header");
}
function setup() {
  createCanvas(600,200);
  textSize(8);
}

function draw(){
  background(255);
  translate(20,20);
  for(var c=0; c < table.getColumnCount(); c++){
    for(var r = 0; r < table.getRowCount(); r++){
      push();
      if(c === 0){
        translate(0,r * 20);       
      } else {
        translate(c * 25 + 150, r*20);
      }
      var data = table.getString(r,c);
      ellipse(0,0, data*25, data*25);
      pop();
    }
    
  }
}