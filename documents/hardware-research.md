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
SkyHook is only part of the product, a tracker still needs to interact with SkyHook’s servers.

SkyHook data is stored in the United States raising privacy concerns, however SkyHook has “Skyhook has certified to the EU-U.S. Privacy Shield Framework for the transfer of Personal Information from the EEA to the United States” so we can still deploy using SkyHook
### https://www.privacyshield.gov/participant?id=a2zt0000000KzW8AAK&status=Active 21/11/17   21:15


## RFID (Radio Frequency Identification) systems 

Passive RFID systems use tags with no internal power source and instead are powered by the electromagnetic energy transmitted from an RFID reader.

Made up of two main components – the tag’s antenna and the microchip or integrated circuit.

There are three main frequencies within which passive RFID tags operate:
125 – 134 KHz – Low Frequency (LF) range : 1 – 10 centimeters.
13.56 MHz – High Frequency (HF) & Near-Field Communication (NFC)			range: 1 centimeter up to 1 meter.
865 – 960 MHz – Ultra High Frequency (UHF)  range:  5 – 6 meters


## Pros of Passive RFID:
Smaller tags
Much cheaper tags (starting from £1 - £20+) 
Thinner/more flexible tags
Higher range of tag options
Tags can last a lifetime without a battery (depending on the wear and tear)

## Cons of Passive RFID:
The tag can be read only at short distances.
Passive tags have difficulty sending data through liquids or metal.
The orientation of a passive RFID tag must be just right or the reader won't locate it.


## Active RFID systems use battery-powered RFID tags that continuously broadcast their own signal (like a cell phone).

Made up of three essential parts – a reader (or interrogator), antenna, and a tag.


There are two main frequencies used by active systems – 433 MHz and 915 MHz

 Pros of Active RFID Tags:

Extremely Long Read Range
Increased tag abilities with partnered technologies (GPS, sensors, etc.)
Extremely Rugged tag options
It can have more memory to, store more data.
Cons of Passive RFID:	
Sensitive to harsh environment
Costs more (starting from 15/20£ a piece)
Larger size and weight.

## Conclusions:
Either RFID system has advantages and disadvantages of their own, depending on needs. 

Speaking for our purpose an active ultra-wideband (UWB) RFID system, would be able to determine a tagged objects location within few inches. But UWB tags are really expensive.

A passive UHF RFID system can provide about 5 - 10 metres of read range (distance from which a reader can communicate with tag). These can tell the tag is within a read field, but not specifically where within the field.

Passive RFID system uses something called Received Signal Strength Indicator (RSSI) to determine how close the tagged object is to the RFID interrogator. RSSI can’t tell if tag is, for example 20 cm away, but it can tell if tagged object is getting closer or further away.


## Arduino GPS

There are many Arduino GPS hardwares out in the market that are buyable. The prices of the GPS Arduino hardwares depends on usually the spec that they have. The hardware will be incorporated with the other features that our initial product will carry. Looking into the market, not one GPS Arduino hardware is perfect, however some excel above all the others. Popular builds so far for the Arduino GPS have been the Copernicus, LS23060, D2523, SUP500F, MN5010 (uMini) and EM-406A. All if not most GPS, are connected via satellites, to get a broad understanding of how each of these look and what they display on a map it is best recommend to configure Google 2D Maps along with a side to side 2D analysis. 

The one flaw that these GPS Arduino hardwares have is that inside a structure the signal might not give off an accurate pinpoint location.

Image Source: https://www.sparkfun.com/tutorial/GPSTracking/gpsinside-M.jpg

This image shows why at first call someone should not use a GPS Arduino hardware inside as signals are distraught. Also why someone should not try to access a area inside a structure even if they are outside. The different colours are the different modules that are mentioned above and how they react to finding a location from inside a structure or a location in the structure. However, there is a likely solution for this. You can attach other elements to the Arduino GPS hardware, a user will have to program a solution on how to make the signals content and not overly responsive. This is only for
being able to use the Arduino GPS hardware from inside a structure. Coding something to pinpoint a location within a structure is far more complicated.


| Name of Modules  |Price   |Pro's   |Con's   |
|---|---|---|---|
| Copernicus  | £56 | - Basic Understanding of code, at least be able to code serial or TTL. - One of the most accurate and reliable modules. - It evaluates data in all conditions.   | A good understanding of electrical prototyping as user will need to know how much power is required, what each pin does, how to hook up the hardware, etc.   |
| LS23060  | £45 | - This requires a good understanding of code, at least be able to code serial or TTL. -Tracks longitude and latitude in all conditions. -This module also has a good evaluation in all conditions.   | - A well understanding of electrical prototyping due to users needing to know how much power is required, what all the pins do, and how to hook up the hardware, etc. - User should be able to solder to a high standard as this is a small hardware. - Users might need to make their own cable. |
| D2523  | £60  | - This requires a well round understanding of code, at least be able to code serial or TTL. - Good at places where it is hard to get a signal due to certain conditions such as a high source of dielectric materials. - Excellent latitude and longitude when the sky is clear. Similarly with data evaluation.  | A well understanding of electrical prototyping due to users needing to know how much power is required, what all the pins do, and how to hook up the hardware, etc. - User should be able to solder to a high standard as this is a small hardware. - Users might need to make their own cable.|
| SUP500F  | £35 | - The hardware (module) is very small. - Due to its size, it also does not take too much power. | - Not having a lot of power can also be an disadvantage. |
| MN5010 (uMini) | £55 | - This hardware is also very small, therefore it does not take up a lot of space. - Allows both hot start and cold start. | - Connection is not as accurate as it uses chip antenna. |
| EM-406A  | £48 | - Allows for all 3 start up times.  | - Requires and will take up a lot of power. - Likely to be interference due to it connecting via chip antenna.  |
