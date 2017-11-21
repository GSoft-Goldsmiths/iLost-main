# Hardware Research

## Bluetooth Component module
Bluetooth has established itself as the wireless communication standard of choice to connect wearable devices to smartphones, tablets or PCs, 

The SESUB-PAN-D14580 module, which is based on TDK's SESUB (semiconductor embedded in substrate) integration technology, features an embedded DA14580 Bluetooth 4.1 chip from Dialog Semiconductor. All terminals of the discrete chip are available, allowing full use of chip functions

The module features an integrated DC-DC converter. With a voltage supply of 3.0 V, its current consumption is only 5.0 mA when transmitting, 5.4 mA when receiving and 0.8 µA in standby mode. 

The ultra-compact dimensionsTDK SESUB-PAN-D14580 module are just 3.5 mm x 3.5 mm x 1.0 mm.

### Main features and benefits

* Ultra compact module dimensions of 3.5 mm x 3.5 mm x 1.0 mm (typical) drastically reduces the mounting footprint to only about 12 mm2
* Easy implementation of Bluetooth connectivity
* Integrated DC-DC converter

## Active RFID tag

Active RFID systems have three essential parts – a reader or interrogator, antenna, and a tag. Active RFID tags possess their own power source – an internal battery that enables them to have extremely long read ranges as well as large memory banks.

Typically, active RFID tags are powered by a battery that will last between 3 – 5 years
Essentially, two different types of active RFID tags are available – transponders and beacons.

### Transponders
In a system that uses an active transponder tag, the reader (like passive systems) will send a signal first, and then the active transponder will send a signal back with the relevant information. Transponder tags are very efficient because they conserve battery life when the tag is out of range of the reader. Active RFID transponders are commonly used in secure access control and in toll booth payment systems.

### Beacons
In a system that uses an active beacon tag, the tag will not wait to hear the reader’s signal. Instead, true to its name, the tag will ‘beacon’, or send out its specific information every 3 – 5 seconds. Beacon tags are very common in the oil and gas industry, as well as mining and cargo tracking applications. Active tag’s beacons can be read hundreds of meters away, but, in order to conserve battery life, they may be set to a lower transmit power in order to reach around 100 meters read range.

### Pros

* Extremely Long Read Range
* Increased tag abilities with partnered technologies (GPS, sensors, etc.)
* Extremely Rugged tag options

## IBeacon Technology (Bluetooth Low Energy Tags)

### Accessibility
With smartphones primarily acting as receivers, beacons form a highly accessible indoor location technology.

Pros: The capability of beacons to allow smartphones to primarily act as the receivers, makes it a highly accessible location technology

Cons:Beacons once installed need to be checked regularly for battery levels, making this less practical.

### Range
Beacons typically have a wireless range of 1m to 70m

Pros: Beacons typically have a wireless range of 1m to 70 m

### Accuracy
Beacons being radio transmitters are not very accurate as they stand the chance of interference, as radio signals can be absorbed by different media, such as water, air, human bodies or even metallic surfaces
Cons: Beacons being radio transmitters are prone to suffer from interference

### Security

Pros: No intrinsic security risks. Since beacons are primarily proximity detection devices that broadcast outbound signals, there is no inherent security risk in the transmission.

Cons: The Signals sent out by beacons can be intercepted and used by hackers. Most manufacturers have built in countermeasures that attempt to counter this.

### Cost 

While beacons by themselves are relatively cheap (a typical beacon would cost you anywhere between £5 to £50), the number of beacons required depends on the size of the space and range needed. The cost of beacon system depends on several other factors such as app and integration cost, licensing and data service cost. 


## Side note – Bluetooth 5

Although I don’t believe Bluetooth 5 is currently established, I’m going to include these notes. The Bluetooth 5 update will bring:
* 4x the range
* 2x the speed
* 800% more broadcast messaging capacity


## Cellular

A great advantage of cellular is its long range, it comes second to GPS for range. Our product will be used in an unpredictable urban environment. Cell phone towers are everywhere in an urban and even sub-urban environment. Cellular requires less energy than Wi-Fi and does not require a WPA/WEP key (or any other login system) to fully exploit. 
However, a tracker using Cellular will require a bigger antenna than what a wi-fi tracker currently uses. During research we discovered whenever a tracking device was using Cellular networks it was in fact using 2G (3G, 4G etc.) to connect to the internet (this is expensive and defeats the purpose of using cellular in this context). What we really want is a Cellular tracker to use triangulation from different cell phone towers to pinpoint its own location.
Government agencies such as intelligence services and emergency services use Cellular triangulation, through our research we found that it would not be possible to implement cellular triangulation in the same way Government/emergency agencies do, we lack expertise knowledge, resources and connections.
But, we have found a “middle-man” who can, so to speak. SkyHook, the same location provider Apple uses, also provide cell phone triangulation using a map of cell phone towers, they also use the same technique with wi-fi hotspots. 

## Acoustic Location

Sound waves travel at an average 343 m/s. By detecting the time taken for the phone (which is what the user interacts with) to detect a sound (which is an inaudible frequency emitted at regular time intervals by the tracker) we can work out the average location of the tracker: distance (m) = speed(m/s) * time (s).
A unique approach, its currently only extensively used by the military and emergency rescue teams. The problem is that the product environment (chaotic Urban) has to much sound interference, this will severely limit the smartphones microphone ability to distinguish the inaudible frequency emitted by the tracker. We also need more than one “listening” device to make triangulation possible.
In environments were acoustic location is possible, high grade/ large microphones are used and they are normally used in an open or quieter environment than a chaotic urban environment which this product is designed for.

## Hybrid Server Side – SkyHook implementation 

Whatever device (android, iOS, wearable, any modern operating system) SkyHook can use the device Wi-Fi/cellular/GPS capability and to find the precise location of the device. It does this by mapping wi-fi hotspots, cell phone towers and/or GPS which the device comes across. By using this map, SkyHook can triangulate the location of the device, thus providing a precise location.  The iPhone location capability is actually provided by SkyHook. 
The device, in this case our product, the SkyHook APK maps nearby WI-FI hotspots and cell phone towers and use this data to triangulate were the location of the device is. It can also add GPS data (but our product may not have GPS capability) 
SkyHook is only part of the product, a tracker still needs to interact with SkyHook’s servers. SkyHook data is stored in the United States raising privacy concerns, however SkyHook has “Skyhook has certified to the EU-U.S. Privacy Shield Framework for the transfer of Personal Information from the EEA to the United States” so we can still deploy using SkyHook
### https://www.privacyshield.gov/participant?id=a2zt0000000KzW8AAK&status=Active 21/11/17   21:15

