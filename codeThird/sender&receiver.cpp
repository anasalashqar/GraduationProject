//Receiver & Sender 
#include <Arduino.h>


String play;

#define ledPin 2
String incoming;
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
  
}

void loop() {
   digitalWrite(ledPin, LOW);
  // put your main code here, to run repeatedly:
  //reciver 
  if(Serial.available()) {
    incoming = Serial.readString();
      digitalWrite(ledPin, HIGH);
      

    // put your main code here, to run repeatedly:
    //sender side inside the if must
    Serial.println("AT+SEND=,"+String(incoming.length())+","+incoming);
    digitalWrite(ledPin, HIGH);
    delay(1000);
    digitalWrite(ledPin, LOW);
    delay(1000);
    if(Serial.available()){
      
    }
}

}
