
PShape rocket;

int currentTime;
float ry;

import processing.sound.*;
int noteCount = 0;
int buttonPin= 32;

import processing.serial.*;

Serial myPort;
int potState;
int buttonState;
int[] inputVars = {0, 0}; //make array to be populated from serial (note number of variables)

boolean isPlaying = false;

SinOsc sine;
/////              f     d     f     C     d     c      c      c    b    b    b    A     A    A    a   d     A      d
int pitches[] = {1397, 1175, 1397, 1108, 1175, 1046 , 1046 , 1046, 988, 988, 988, 932 , 932, 932, 880, 1175, 932, 1175,
//a      d   c     f    d    f    e   A  f    f      f    e     e     e     d      d     
880, 1175,1108, 698,587, 698, 659, 932, 1397, 1397, 1397, 1318, 1318, 1318, 1175, 1175,};
//////               f   d  f  C   d c   c  c  c  b  b  b  A  A  A  a d A  d
float durations[] ={2,2, 4, 4, 4 , 3.5 , 2, 2, 4, 2, 2, 2, 2, 2, 2, 2,2, 2,2,
//a d c f d f e  A   f   f  f e e e d d  
  4,1,6, 2, 2,4, 4,  2, 2, 4, 2,2,4,2,4, };

void setup() {

  size(240, 360, P3D);
  
  println(Serial.list()); //print serial devices (remember to count from 0)
  myPort = new Serial(this, Serial.list()[2], 9600); //make sure the baudrate matches arduino
  myPort.bufferUntil('\n'); // don't generate a serialEvent() unless you get a newline character

  // create and start the sine oscillator.
  sine = new SinOsc(this);
  //sine.play();
  sine.amp(0);
  
  rocket = loadShape("ballerina.obj");
  rocket.scale(7);
  
  
  currentTime = millis();
}

void draw() {
  if (inputVars[1] == 1){
    isPlaying = true;
  }
  if (isPlaying){
  sine.play();
  }
  sine.amp( map(inputVars[0],0, 1023, 0, 1)); 
  background(255);
  rocket.disableStyle();
  lights();
  fill(0);

//pitches.amp(map( [0], 0, 1023, 01));



  translate(width/2, height/2 + 100, -200);
  rotateZ(PI);
  rotateY(ry);
  rotateX (180.6);
  shape(rocket);

  ry += 0.02;

  if (millis() - currentTime >= 100*durations[noteCount]){
    sine.freq(pitches[noteCount]);
    noteCount++;
    currentTime= millis();
  }
if (noteCount >= pitches.length){ 
  noteCount = 0;
}

}

void serialEvent (Serial myPort) {
  String inString = myPort.readStringUntil('\n'); //read until new line (Serial.println on Arduino)
  if (inString != null) {
    inString = trim(inString); // trim off whitespace
    inputVars = int(split(inString, '&')); // break string into an array and change strings to ints 
}
}
