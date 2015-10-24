/*
pull wind info from open weather
use that info to control a graphic on z screen

*/

var wind;
var position;

function setup(){
	createCanvas(720, 200);
	var url = 'http://api.openweathermap.org/data/2.5/weather?q=New%20York,NY&units=imperial&APPID=7bbbb47522848e8b9c26ba35c226c734';
	loadJSON(url, gotWeather);

	position = createVector(width/2, height/2);
	wind = createVector();

}

function draw(){
	background(200);

	push();
		translate(32, height - 32);
		//rotate by the wind's angle
		rotate(wind.heading() + PI/2);
		noStroke();
		fill(255);
		ellipse(0, 0, 48, 48);
		stroke(45, 123, 182);
		strokeWeight(3);
		line(0, -16, 0, 16);
		noStroke();
		fill(45, 123, 182);
		triangle(0, -18, -6, -10, 6, -10);
	pop();

	position.add(wind);
	stroke(0);
	fill(51);
	ellipse(position.x, position.y, 16, 16);

	if(position.x > swidth) position.x = 0;
	if(position.x < 0) position.x = width;
	if(position.y > height) position.y =0;
	if(position.y < 0) position.y = height;

}

function gotWeather(weather){
	// getting the angle, convert radians)
	var angle = radians(Number(weather.wind.deg));
	// get wind speed
	var windmag = Number(weather.wind.speed);

	//display as HTML elements
	var temperatureDiv = createDiv(floor(weather.main.temp) + '&deg;');
	var windDiv = createDiv("WIND " + windmag + "<small>MPH</small>");

	wind = p5.Vector.fromAngle(angle);

}