var table;
function preload() {
  table = loadTable('data/antarctica_weather_averages.csv', 'csv', 'header');
}
function setup() {
  createCanvas(400,400);
  textSize(24);
  text(table.getRowCount(), width/2, height/2);
  
  text(table.getColumnCount(), width/2, height/2 + 35);
}