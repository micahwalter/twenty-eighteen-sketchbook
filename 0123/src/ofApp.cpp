#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){

}

//--------------------------------------------------------------
void ofApp::update(){

}

//--------------------------------------------------------------
void ofApp::draw(){
    
    ofBackground(0,0,0);
    
    glBegin(GL_TRIANGLES);
    glColor3f( 1.0f, 0.0f, 0.0f );
    glVertex3f( ofGetWidth()/2, 0.0f, 0.0f );

    glColor3f( 0.0f, 0.0f, 1.0f );
    glVertex3f( ofGetWidth(), ofGetHeight(), 0.0f );
    
    glColor3f( 0.0f, 1.0f, 0.0f );
    glVertex3f( 0.0f, ofGetHeight(), 0.0f );
    
    glColor3f( 1.0f, 0.0f, 0.0f );
    glVertex3f( ofGetWidth()/2, 0.0f, 0.0f );
    
    glColor3f( 0.0f, 0.0f, 1.0f );
    glVertex3f( ofGetWidth(), ofGetHeight(), 0.0f );

    glColor3f( 0.0f, 1.0f, 0.0f );
    glVertex3f( ofGetWidth(), 0.0f, 0.0f );
    
    glColor3f( 0.0f, 0.0f, 1.0f );
    glVertex3f( 0.0f, 0.0f, 0.0f );
    
    glColor3f( 1.0f, 0.0f, 0.0f );
    glVertex3f( ofGetWidth()/2, 0.0f, 0.0f );
    
    glColor3f( 0.0f, 1.0f, 0.0f );
    glVertex3f( 0.0f, ofGetHeight(), 0.0f );

    
    glEnd();
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){

}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y){

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
void ofApp::mouseEntered(int x, int y){

}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y){

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
