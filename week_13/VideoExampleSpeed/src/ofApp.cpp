/**
 ** VideoExampleSpeed by Kevin Siwoff
 ** @indefinit
**/

#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
	ofSetWindowShape(1440, 720);
	
	
	player.loadMovie("3.Mousetraps.mp4");
	player.play();
	buttonColor = ofColor(255, 255, 255, 255);
}

//--------------------------------------------------------------
void ofApp::update(){
	player.update();
}

//--------------------------------------------------------------
void ofApp::draw(){
	ofBackground(0);
	ofSetColor(255, 255, 355);
	if (player.isLoaded()) {
		//aspect ratio is the proportional relationship between width and height
		float aspectRatio = player.getWidth() / player.getHeight();
		player.draw(0.0f, 0.0f, ofGetWidth(), ofGetWidth() / aspectRatio);
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
	float mappedSpeed = ofMap(float(x), 0.0f, ofGetWidth(), -2.0f, 2.0f);
	player.setSpeed(mappedSpeed);
	
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
