# 6.Prototyping

Initially we prototyped a short-range tracker. This tracker (which was attached the users personal belongings) would remind the user via smartphone/wearable app when they forgot/unintentionally left the item behind, thus preventing the user losing items or having them stolen in the first place. 

This initial prototype simply consists of a Beetle BLE (with a 3.7v battery) which pings at regular intervals to the user’s smartphone (if the ping is not detected by the smartphone after a certain time then the item is out of range) 

We later developed on this prototype, to replace the Beetle BLE with an estimote Sticker Beacon which has greater range and battery life as well as being relatively compact in size (also , built in 1 year battery). 

This initial prototype did receive positive responses, however a substantial number of users stated that our product was too similar to other competitors on the market such as tile etc. (one potential user remarked that our prototype was “tile 2.0”).
We needed to prototype a product that was unique, Bluetooth was being overused in the market, but Bluetooth is technology at short range (0 -30 meters, users expect the tracker to last at least 6 months in the field).

Test prototypes were created with a GPS shield attached to an Arduino, the GPS capability was too inaccurate and power consuming as well as already being available on the market. Another functional prototype was created using a passive and active RFID reader shield and Arduino- we found out either way the range was too short for the product to be feasible and too large, we discovered that active RFID were far to expensive to implement.

We exhausted other options too. A test using acoustic location (using environmental sound to triangulate the Arduino’s location) proved that this was not feasible in the user environment (noisy – chaotic urban) and the Arduino did not have the processing capability of handling so many sound sources as well as another foreseeable microcontroller.

Moreover, we also prototyped an Arduino using wi-fi hotspots to locate itself. This proved to be unreliable as wi-fi hotspots are still not frequent enough and are not guaranteed to be operational at all times, Wi-Fi is also more power consuming than our previous prototypes.  Lastly, with a cellular shield and an Arduino- we tried to manually implement cellular triangulation. This did not work for many reasons, we did not have the ability to negotiate with multiple cellular carriers and data costs would be too high, but we recognised that cellular was low power consuming and provided unlimited long range (cell towers cover most of the world – more than satellites or Wi-Fi hotspots). 

After all of these singular approaches, we decided it’s best to take a Hybrid approach which allows us to exploit many of the different singular approaches we prototyped earlier.

Using Skyhook was our first approach to prototyping using many different tracking technologies (Bluetooth, wi-fi hotspot triangulation, GPS etc..) combined. Skyhook is what the apple iPhone uses for location tracking, so it is well supported and we could use our own iPhone’s for testing accuracy of the location tracking. The Skyhook API can be Installed on a raspberry pi or any smartphone device. It uses whatever sensors on the device to determine its location. For example, it triangulates its location from Wi-Fi hotspots, cell towers and Bluetooth signal strength. 

There are privacy issue with using skyhook (American company- but part of EU privacy shield) they offer a “free” service but what they actually do when our tracker connects to their servers (these server will then send location data back to the user) is store an sell the data themselves. It maybe “free”, but for users this not acceptable.

The Hybrid approach does provide better location tracking, so we needed to replace Skyhook. We were inspired by the recent iTrack tracking device (the first device on the market to exclusively use cell tower triangulation). Its seemed best to combine the long range effectiveness of cellular with the short range ability of Bluetooth. 

Skyhook was replaced with Hologram Cloud, they provide us with a small USB size cellular modem (Hologram Nova) and a python SDK which can be installed on the raspberry pi, the modem provides cellular location data (it simplifies cell tower triangulation) which can be transmitted via 2G/3G to a Hologram cloud server. The Hologram cloud server then connects to the user’s smartphone/wearable app, sending the user the location of the tracker.

We tested out the python SDK and read through the documentation thoroughly.

Hologram Cloud does not store user data, so they charge a small amount for data usage. However, they can negotiate with carriers worldwide and provide us with automatic carrier switching. 

This is currently our latest prototype, to clarify our tracker consists of a raspberry pi, a Hologram Nova and a lithium poly battery. Bluetooth for short range and cellular triangulation for long range. 

We developed a new protocol from this hybrid approach - In a long range situation, when the user gets closer to the tracker, less than 40 meters. The app on the user’s smartphone/wearable sends a request to Hologram cloud server, the server then sends a message to the tracker to turn on the Bluetooth module and look for the user’s smartphone/wearable thus providing a more precise location, especially in an chaotic urban environment or indoor multi-level environment. We couldn’t find any other product that provided this feature. We now need to implement and test this protocol.
