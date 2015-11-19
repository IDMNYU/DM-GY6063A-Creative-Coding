var videoInput;
var main;
function setup() {
  main = createCanvas(320,240);
		  // set up video and canvas elements needed
		
			videoInput = createCapture(VIDEO);
      videoInput.size(320, 240);
      videoInput.hide();
		// 	var canvasInput = document.getElementById('compare');
		// 	var canvasOverlay = document.getElementById('overlay')
		// 	var debugOverlay = document.getElementById('debug');
			
		// 	// add some custom messaging
			
		// 	statusMessages = {
		// 		"whitebalance" : "checking for stability of camera whitebalance",
		// 		"detecting" : "Detecting face",
		// 		"hints" : "Hmm. Detecting the face is taking a long time",
		// 		"redetecting" : "Lost track of face, redetecting",
		// 		"lost" : "Lost track of face",
		// 		"found" : "Tracking face"
		// 	};
			
		// 	supportMessages = {
		// 		"no getUserMedia" : "Unfortunately, <a href='http://dev.w3.org/2011/webrtc/editor/getusermedia.html'>getUserMedia</a> is not supported in your browser. Try <a href='http://www.opera.com/browser/'>downloading Opera 12</a> or <a href='http://caniuse.com/stream'>another browser that supports getUserMedia</a>. Now using fallback video for facedetection.",
		// 		"no camera" : "No camera found. Using fallback video for facedetection."
		// 	};
			
		// 	document.addEventListener("headtrackrStatus", function(event) {
		// 		if (event.status in supportMessages) {
		// 			var messagep = document.getElementById('gUMMessage');
		// 			messagep.innerHTML = supportMessages[event.status];
		// 		} else if (event.status in statusMessages) {
		// 			var messagep = document.getElementById('headtrackerMessage');
		// 			messagep.innerHTML = statusMessages[event.status];
		// 		}
		// 	}, true);
			
			// the face tracking setup
			
			var htracker = new headtrackr.Tracker();
			htracker.init(videoInput.elt, main.elt);
			htracker.start();
			
}

function draw() {
  //image(videoInput, 0, 0, 320, 240);
}
	// for each facetracking event received draw rectangle around tracked face on canvas
document.addEventListener("facetrackingEvent", function( event ) {
				
				// once we have stable tracking, draw rectangle
				if (event.detection == "CS") {
					push();
					translate(event.x, event.y)
					rotate(event.angle-(Math.PI/2));
					stroke(0,255,0);
					noFill();
					rect((-(event.width/2)) >> 0, (-(event.height/2)) >> 0, event.width, event.height);
				}
			});