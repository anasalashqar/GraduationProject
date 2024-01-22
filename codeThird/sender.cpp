#include "TinyGPS++.h"
#include "SoftwareSerial.h"
#include <Adafruit_MLX90614.h>
#include <Arduino.h>
#include <SPI.h>

#define GPS_UART_RX_PIN 8
#define GPS_UART_TX_PIN 9

int output_Pin = A0;
double alpha = 0.65;

Adafruit_MLX90614 mlx = Adafruit_MLX90614();



SoftwareSerial serial_connection(GPS_UART_RX_PIN,GPS_UART_TX_PIN); //RX=pin 10, TX=pin 11
TinyGPSPlus gps;//This is the GPS object that will pretty much do all the grunt work with the NMEA data
void setup()
{
  Serial.begin(9600);//This opens up communications to the Serial monitor in the Arduino IDE
  serial_connection.begin(9600);//This opens up communications to the GPS
  Serial.println("GPS Start");//Just show to the monitor that the sketch has started

  Serial.println("Adafruit MLX90614 test");

  if (!mlx.begin()) {
    Serial.println("Error connecting to MLX sensor. Check wiring.");
    while (1);
  };

  Serial.print("Emissivity = "); Serial.println(mlx.readEmissivity());
  Serial.println("================================================");
}

void loop()
{
  while(serial_connection.available())//While there are characters to come from the GPS
  {
    gps.encode(serial_connection.read());//This feeds the serial NMEA data into the library one char at a time
  }
  if(gps.location.isUpdated())//This will pretty much be fired all the time anyway but will at least reduce it to only after a package of NMEA data comes in
  {
      int rawValue = analogRead(output_Pin);
      //value off BPM
     double value = (alpha / rawValue) * 70 * 1000;

     float TEMP = mlx.readObjectTempC();
     //Serial.print("Object = "); Serial.print(TEMP); Serial.println("*C");
  
  }

    String msg = String(gps.location.lng(),6) + " " + String(gps.location.lat(),6) + " " +  String(value,6) + " " + String(TEMP, 4);
    
    
    
    Serial.println("AT+SEND=0,"+String(msg.length())+","+msg);
    delay(1000);
  
  
}
