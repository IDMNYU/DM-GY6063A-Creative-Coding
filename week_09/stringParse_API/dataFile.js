/**
 * CountingString example
 * by Daniel Shiffman.  
 * 
 * This example demonstrates how to use a IntDict to store 
 * a number associated with a String.  Java HashMaps can also
 * be used for this, however, this example uses the IntDict
 * class offered by Processing's data package for simplicity
 * and added functionality. 
 *
 * This example uses the IntDict to perform a simple concordance
 * http://en.wikipedia.org/wiki/Concordance_(publishing)
 *
 */

// The next line is needed if running in JavaScript Mode with Processing.js
/* @pjs font="Georgia.ttf"; */

// an intdict pairs strings with intergers
var concordance;
//the array of words
var tokens;
var counter = 0;
var rawtext;

function preload(){
	rawtext = loadStrings("data/aliceinwonderland.txt");
}

function setup(){

	createCanvas(windowWidth, windowHeight);

	concordance = createNumberDict();

	//load file and chop it up
	var allText = join(rawtext, "\n").toLowerCase();
	tokens = splitTokens(allText, " ,.?!:;\n");
}


function draw(){
	background(51);
	fill(255);
	noStroke();
	// look at words one at atime
	if(counter < tokens.length){
		var s = tokens[counter];
		counter++;
		concordance.increment(s);
	}

	var x = 0;
	var y = 48;

	concordance.sortValuesReverse();

	var keys = concordance.keyArray();

	//look at each word
	for(var i = 0; i < keys.length; i++){
		var word = keys[i];
		var count = concordance.get(word);  //("to")


		if(count > 3){
			var fsize = constrain(count, 0, 48);
			textSize(fsize);
			text(word, x, y);

			x += textWidth(word + " ");
		}
		//if x gets to the end, move y

		if (i > width){  // i
			x = 0;
			y += 48;
			// if y gets to the end, then we finished
			if( y > height){
				break;
			}
		}
	}
}