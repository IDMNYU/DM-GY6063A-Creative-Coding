//define an object that holds lyrics and time codes
//key = time in millis
//val = "lyrics"
var timecodes = {
  "100"  : "One, two, three! My baby don't mess around Because she loves me so This I know fo sho!",
  "5000" : "But does she really wanna But can't stand to see me walk out the door Don't try to fight the feeling Because the thought alone is killin' me right now Thank God for Mom and Dad For sticking to together Like we don't know how"
};

//function to process and schedule lyrics.
//we pass an object as parameter to this function
//only run this function once (if in p5js, do this in setup())

function processLyrics(lyric, time){
  setTimeout(function(){
    console.log(lyric);
  }, time);
}


function setup() {
//if in p5js, run this function call inside setup()
for(var lyricTime in timecodes){
  if(timecodes.hasOwnProperty(lyricTime)){
    processLyrics(timecodes[lyricTime], lyricTime);      
  }
}

}

function draw() {
  
}