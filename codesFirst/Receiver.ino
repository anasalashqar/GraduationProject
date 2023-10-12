//Receiver
#include <Arduino.h>

#define ledPin 2
String incomingString;
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
  
}

void loop() {
   digitalWrite(ledPin, LOW);
  // put your main code here, to run repeatedly:
  if(Serial.available()) {
    incomingString = Serial.readString();
      digitalWrite(ledPin, HIGH);
      Serial.println(incomingString);
    
}
}
