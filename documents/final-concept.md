# iLost: a universal unlimited range tracker v2.0

The majority has the experience of losing item, base on [the research from Mozy](https://mozy.co.uk/about/news/reports/lost-and-found), “the average value of a lost item is $176.25 and the average person irretrievably loses $95.78 of stuff each year”. Our idea is to address the daily life issue with mobile device and bluetooth technique. By attaching a sensor to the belongings, the user can get notifications whenever the items are far away from them, and aiming to reduce the possibility of losing item.

***

There’s a gap in the market. All of trackers (estimote, tiles etc..) we have researched on the market all use Bluetooth. Bluetooth has great advantages as having low-power consumption and providing accurate location at short range (0 – 40m). There’s also the opportunity to adopt Bluetooth 5.

On the other end of the spectrum, we have long (essentially unlimited) range but inaccurate trackers. iTraq is one of them. iTraq happens to be first long-range tracker to leverage Cell towers to triangulate the trackers own location (cell towers triangulation). It has received a good reception by the market. Using cellular triangulation is also low power and by using 2G and 3G networks it has international coverage. 

This is where iLost comes into the picture. We use Bluetooth in our tracker for short range precision and Cellular (the same used by any phone) for unlimited long range.

Imagine our tracker being lost 100 miles away, A unique protocol our product can implement is that when the user approaches a tracker that has located itself using cellular triangulation, it can switch on the Bluetooth module, so the user can get a precise location of the tracker, thus combining the long range of cellular and the short-range precision of Bluetooth.

We have undertaken a unique Hybrid approach; our task now is to build a working prototype. Our tracker has now geared itself to being multi-purpose. Initially, when the user left a valuable item behind with the tracker attached, the user via smartphone/wearable app would be alerted, thus preventing you from losing the item in the first place. This uses Bluetooth but is too similar to our competitors such as Tile. Now by having an additional cellular module attached to the tracker we have a extensive range of opportunities. For example, if the user places the iLost tracker in your airline luggage, you can track the location of it becomes lost by the airline (even if it’s in a different continent) as there are cell towers in nearly every part of the world.

---------------
## Use cases:

•	Don’t forget an item reminder

•	Asset tracking indoors & outdoors

•	Shipment tracking

•	People tracking

•	Vehicle tracking


---------------
## Overview:

•	User interacts with iOS/Android app on their smartphone or wearable.

• ***App adapts to the type of user and their needs***.A student or office worker may have the tracker attached to their keys, laptop bag etc. when the user leaves the area of the item range (30m radius) that is being tracked, their smartphone/wearable will warn them by vibration/sound - preventing loss in the first place.

•	In long range situations, as an example, you can leave the tracker in their car. The user may be travelling a long distance away from the car (unknown area, parking overnight, leaving at the airport and travelling to another country etc..) the cellular modem, will turn on in the tracker and use nearby cell towers to triangulate a location-

•	- This cellular location data can be transmitted via 2G/3G to a Hologram cloud server. The Hologram cloud server then connects to the users smartphone/wearable app, notifying the user where their item/tracker.

•	In a long range situation, when the user gets closer to the tracker, less than 40 meters. The app on the user’s smartphone/wearable sends a request to Hologram cloud server, the server then sends a message to the tracker to turn on the Bluetooth module and look for the user’s smartphone/wearable thus providing a more precise location, especially in an chaotic urban environment or indoor multi-level environment. 

•	Cell tower triangulation, is made possible by the Hologram Nova modem which connects to Hologram cloud server. The Hologram Cloud server then connects back to the iLost app.

•	Hologram Global SIM Card (2G/3G) is pre-installed on the tracker for cellular tracking capability. 

•	Why do we need the Hologram framework ?
  * AUTOMATIC CARRIER SWITCHING - Hologram SIMs are designed to connect to the best cell signal available.
  * NO CONTRACTS - we can order as many sims and scale at any level, the data costs are cheap and stay cheap.
  * NO CARRIER NEGOTIATIONS - this would not possible without the connections and resources that Hologram has.
  * Ive already tried cellular triangulation with the Hologram SDK, its straightforward and simple.

•	iTraq had an estimated battery life of 2 – 3 years using cellular. Bluetooth trackers have an estimated 1-year battery life. Our tracker will have a non-replaceable Lithium polymer battery and will have safe battery operating time of 1 year.

• Working tracker prototype will consist of a raspberry pi zero with an attached Hologram nova modem and a battery pack for portability.

• possible Dimensions of the finished iLost product: 85 x 65 x 7 mm, battery life 1 year.

PLEASE REFER TO CONCEPT DIAGRAMS 



