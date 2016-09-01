var table;
var columnData = [];

colors = [
'#D100FF',
'#7000FF',
'#0900FF'
];

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable("data/antarctica_weather_averages.csv", "csv", "header");
}
function setup() {
  createCanvas(500,500);
  textSize(12);
  textAlign(CENTER);
  columnData = table.getColumn('MAY');
}

function draw(){
  background(255);

  
  translate(width/2 - 10,height/4);
  textAlign(CENTER);
  fill(0);
  text("May temperatures", -width/2 + 10,-24, width,12);
  noStroke();
  for(var i=columnData.length-2; i >= 0; i--){
    var mappedData = map(columnData[i],
      min(columnData),
      max(columnData),
      100,
      10);
    fill(colors[i % colors.length]);
    rect(0,0,20, mappedData);
    fill(0);
    text(columnData[i], 35, mappedData);
  }
    
}