# 6.Prototyping

## Singular approach

Initially, our orginal prototype simply consists of a [Beetle BLE](https://www.dfrobot.com/wiki/index.php/Bluno_Beetle_SKU:DFR0339) (with a 3.7v battery) which pings at regular intervals to the user’s smartphone (if the ping is not detected by the smartphone after a certain time then the item is out of range) 

We later replaced the Beetle BLE with an estimote [Sticker Beacon](https://community.estimote.com/hc/en-us/articles/203323543-What-are-Estimote-Stickers-) which has greater range and battery life as well as being relatively compact in size (also , built in 1 year battery). 

This initial prototype did receive positive responses, however a substantial number of users stated that our product was too similar to other competitors on the market such as [tile](https://www.thetileapp.com/en-gb/products/sport) etc.

We needed to prototype a product that was unique, Bluetooth is being overused in the market, however Bluetooth is a reliable technology at short range (0 -30 meters, users expect the tracker to last at least 6 months in the field).

Test prototypes were created with a GPS shield attached to an Arduino, the GPS capability was too inaccurate and power consuming. Another prototype was created using a passive and active RFID reader shield and Arduino. We discovered that either way the range was too short for the product to be feasible and too large for the user. Moreover, active RFID's are far too expensive to implement.

We exhausted other possibilities too. A test using acoustic location (using environmental sound to triangulate the Arduino’s location) proved that this was not feasible in the user environment (noisy – chaotic urban) and the Arduino did not have the processing capability of handling so many sound sources.

Moreover, we also prototyped an Arduino using wi-fi hotspots to locate itself. This proved to be unreliable as wi-fi hotspots are still not frequent enough and are not guaranteed to be operational at all times, Wi-Fi is also more power consuming than our previous prototypes.  Lastly, with a cellular shield and an Arduino- we tried to manually implement cellular triangulation. This did not work for many reasons, we did not have the ability to negotiate with multiple cellular carriers and data costs would be too expensive, but we recognised that cellular was low power consuming and provided unlimited long range (cell towers cover most of the world – more than satellites or Wi-Fi hotspots). 

After all of these singular approaches, we decided it’s best to take a Hybrid approach which allows us to exploit many of the different singular approaches we prototyped earlier.

## Hybrid approach

Using [Skyhook](http://www.skyhookwireless.com/) was our first approach to prototyping using many different tracking technologies (Bluetooth, wi-fi hotspot triangulation, GPS etc..) combined. Skyhook is what the apple iPhone uses for location tracking, so it is well supported and we could use our own group member's iPhones for testing accuracy of the location tracking. The Skyhook API can be Installed on a raspberry pi or any smartphone device. It uses whatever sensors on the device to determine its location. For example, it triangulates its location from Wi-Fi hotspots, cell towers and Bluetooth signal strength. 

The Hybrid approach does provide better location tracking, so we needed to replace Skyhook. We were inspired by the recent iTrack tracking device (the first device on the market to exclusively use cell tower triangulation). Its seemed best to combine the long range effectiveness of cellular with the excellent short range ability of Bluetooth. 

Skyhook was replaced with [Hologram Cloud](https://hologram.io/cloud/), they provide us with a small USB sized cellular modem (Hologram Nova) and a python SDK which can be installed on the raspberry pi, the modem provides cellular location data (it simplifies cell tower triangulation) which can be transmitted via 2G/3G to a Hologram cloud server. The Hologram cloud server then connects to the user’s smartphone/wearable app, sending the user the location of the tracker.

We tested out the python SDK and read through the documentation thoroughly.

Hologram Cloud does not store user data, so they charge a small amount for data usage. However, they can negotiate with carriers worldwide and provide us with automatic carrier switching. 

## Current Prototype

To clarify our tracker consists of a raspberry pi, a [Hologram Nova](https://hologram.io/nova/) and a lithium poly battery. Bluetooth for short range and cellular triangulation for long range. 

We developed a new protocol from this hybrid approach - In a long range situation, when the user gets closer to the tracker, less than 40 meters. The app on the user’s smartphone sends a request to Hologram cloud server, the server then sends a message to the tracker to turn on the Bluetooth module and look for the user’s smartphone/wearable thus providing a more precise location, especially in an chaotic urban environment or indoor multi-level environment. We couldn’t find any other product that provided this feature. We now need to implement and test this protocol.
