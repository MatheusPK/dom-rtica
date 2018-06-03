#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>
// Set these to run example.
#define FIREBASE_HOST "casa-automatica-86bff.firebaseio.com"
#define FIREBASE_AUTH " nULru985ChWogscC8nnBfl8QLMO3Yw9nWNS8oCyZ"
#define WIFI_SSID "Net-Virtua-0213"
#define WIFI_PASSWORD "280502130"
void setup() {
Serial.begin(9600);
Serial.print("Net-Virtua-0213");
Serial.print("280502130");
pinMode(2, OUTPUT);
// connect to wifi.
WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
Serial.print("connecting");
while (WiFi.status() != WL_CONNECTED) {
Serial.print(".");
delay(500);
}
Serial.println();
Serial.print("connected: ");
Serial.println(WiFi.localIP());
Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
Firebase.set("Led1", 0);
}
int n = 0;
void loop() {
// get value
n = Firebase.getInt("Led1");
// handle error
if (n==1) {
Serial.println("LED ON");
digitalWrite(2,HIGH);  
return;
delay(10);
}
else {
Serial.println("LED OFF");
digitalWrite(2,LOW);  
return;
}
}
