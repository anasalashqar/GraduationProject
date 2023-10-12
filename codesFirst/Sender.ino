//sender
#include <Arduino.h>
#include <Adafruit_Sensor.h>
#include <dht11.h>

#define ledPin 2
#define DHT11PIN 5

dht11 DHT11;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
  
}




void loop() {
  DHT11.read(DHT11PIN);
  //int loc = 6
  //int heart = 5
  
  float tmp = DHT11.temperature;
  float hmd = DHT11.humidity;

  String strTemp = String(tmp);
  String strHumd = String(hmd);
  //String strLoc = String(loc);
  //String strHeart = String(heart);
  
  

  String message1 = "\nTempreture: "+ strTemp + "\nHumidity: "+ strHumd;

  // put your main code here, to run repeatedly:
  Serial.println("AT+SEND=2,"+String(message1.length())+","+message1);
  digitalWrite(ledPin, HIGH);
  delay(1000);
  digitalWrite(ledPin, LOW);
  delay(1000);
}
