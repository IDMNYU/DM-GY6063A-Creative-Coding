var font;
var msg;
var find;
var msg2;
var delimiters = " ,.?!:;"
var noSpace;
var noJunk;
var allWords;
var listWords;
var backTo;

function preload(){
	font = loadFont('data/font1.otf');

}

function setup(){
	createCanvas(windowWidth, windowHeight);
	msg = new String("There,once,was,a,dog,that,lived,on,the,moon.,He,ate,lunch,with,a,spoon. ");
	find = new String("oon");

	msg2 = "What, the. Hell? is going! on?";
	listWords = ["I", "love", "ales", ",", "especially", "on", "Friday", "."];
}

function draw(){
	background(175);
	fill(0);
	textFont(font, 32);
	text(msg, 20, 20, 800, 800);

	var index = msg.indexOf(find);
	console.log(index);  //print
	text(index, 1000, 50);

	var clip= msg.substr(15, 5);
	text(clip, 1000, 100);

	noSpace = split(msg, " "); // split string into substrings based " "

/*
	for(var i = 0; i < noSpace.length; i++){
		console.log(noSpace[i] + " " + i);
	}
	*/
	allWords = splitTokens(msg2, delimiters);
	text(allWords, 20, 200, 1200, 400);

	backTo = join(listWords, " ");
	text(backTo, 20, 250, 1200, 400);

}