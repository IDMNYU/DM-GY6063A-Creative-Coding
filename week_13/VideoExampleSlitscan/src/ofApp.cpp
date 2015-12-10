/**
 ** VideoExampleSlitscan by Kevin Siwoff
 ** @indefinit
 **/

#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
	ofSetWindowShape(1440, 720);
	
	
	player.loadMovie("3.Mousetraps.mp4");
	player.play();
	buttonColor = ofColor(255, 255, 255, 255);
	ofSetFrameRate(120);
}

//--------------------------------------------------------------
void ofApp::update(){
	player.update();
	if(player.isFrameNew()){
		frames.push_front(player.getPixelsRef());
		if(frames.size() > N ){ //if frames are greater than our max number
			frames.pop_back(); //remove the last frame from the deque
		}
	}
	//if our frames deque is not empty
	if(!frames.empty()){
		//and imagePixels is not allocated
		if(!imagePixels.isAllocated()){
			imagePixels = frames[0];
		}
		
		int w = frames[0].getWidth();
		int h = frames[0].getHeight();
		
		for (int y=0; y< h; y++) {
			for (int x=0; x < w; x++) {
				//get the pixel color from our slit and assign to variable col
				ofColor col = getSlitPixelColor(x,y);
				
				imagePixels.setColor(x, y, col);
			}
		}
		image.setFromPixels(imagePixels);
	}
}

//--------------------------------------------------------------
void ofApp::draw(){
	ofBackground(0);
	ofSetColor(255, 255, 355);
	if (player.isLoaded()) {
		//aspect ratio is the proportional relationship between width and height
//		float aspectRatio = player.getWidth() / player.getHeight();
		image.draw(0.0f, 0.0f);
	}
	//if the button color alpha is greater than 4
	//animate the button
	if(buttonColor.a >= 4){
		animatePlayPause();
	}
	
	ofSetColor(255, 0, 0, 255);
	ofFill();
	//draw our progress along the bottom of our screen
	ofRect(0.0f, ofGetHeight() - 10.0f, player.getPosition() * ofGetWidth(), 10.0f);
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){
	bool isPaused;
	switch (key) {
		case 'f':
			ofToggleFullscreen();
			break;
		case ' ':
			buttonColor.a = 255;
			//this is a ternary expression
			// if the player is paused, return false, otherwise return true
			isPaused = (player.isPaused()) ? false : true;
			player.setPaused(isPaused);
			break;
		case OF_KEY_LEFT:
			if (player.isPaused()) {
				player.previousFrame();
			}
			break;
		case OF_KEY_RIGHT:
			if (player.isPaused()) {
				player.nextFrame();
			}
			break;
		case '0':
			player.firstFrame();
			break;
		default:
			break;
	}
}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){
	
}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){
}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){
	
}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){
	
}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){
	
}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){
	
}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){
	
}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){
	
}

//--------------------------------------------------------------
ofColor ofApp::getSlitPixelColor(int x, int y){
	float dist = ofDist(x, y, mouseX, mouseY);
	float f = dist / 8.0f;
	
	int i0 = int(f);
	int i1 = i0 + 1;
	
	//compute weights of the frames i0 and i1
	float weight0= i1 - f;
	float weight1 = 1 - weight0;
	
	//make sure we limit out frames between 0 and frames.size() - 1
	i0= ofClamp(i0, 0, frames.size() - 1);
	i1= ofClamp(i1, 0, frames.size() - 1);

	ofColor color0 = frames[i0].getColor(x, y);
	ofColor color1 = frames[i1].getColor(x, y);
	
	//interpolate between colors 0 and 1
	// this is the meat of the algorithm!
	ofColor interpolatedColor = color0 * weight0 + color1* weight1;
	
	return interpolatedColor;
	
}


//--------------------------------------------------------------
void ofApp::animatePlayPause(){
	ofSetColor(buttonColor);
	if(player.isPaused()){
		ofPushMatrix();
		ofFill();
		ofRect(ofGetWidth()/2.0, ofGetHeight()/2.0, 10.0, 50.0);
		ofRect(ofGetWidth()/2.0+25.0, ofGetHeight()/2.0, 10.0, 50.0);
		ofPopMatrix();
		buttonColor.a-=4;
	}
	else{
		ofPushMatrix();
		ofTriangle(ofGetWidth()/2.0, ofGetHeight()/2.0, ofGetWidth()/2.0+50.0, ofGetHeight()/2.0+25.0, ofGetWidth()/2.0, ofGetHeight()/2.0+50.0);
		ofPopMatrix();
		buttonColor.a-=4;
	}
}
