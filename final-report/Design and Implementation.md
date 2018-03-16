# Design Stage

Our final design for the iLost tracker consists of an Android app and a Raspberry pi with the attached Hologram Nova. The User interacts with the Android app, whereas the raspberry pi provides the short-range capability of the Bluetooth and the Hologram Nova cellular modem attached to the raspberry pi provides the long-range capability.

Short range is defined as less than 30 metres from the target and long-range is defined as above 30 metres to 400 km and beyond. 

![tracker concept at January - long range](https://github.com/GSoft-Goldsmiths/iLost-main/blob/master/final-report/Sources/Ch4%20Design%20and%20Implemenation/iLost_final_concept_v2.0_long_range.jpg)

![tracker concept at january - short range](https://github.com/GSoft-Goldsmiths/iLost-main/blob/master/final-report/Sources/Ch4%20Design%20and%20Implemenation/iLost_final_concept_v2.0_short_range.jpg)

This Hybrid approach, compensates for the weaknesses of the Bluetooth range and the weaknesses of accuracy of the Hologram Cellular modem, by leveraging the short-range accuracy of the Bluetooth and extremely long range of the cellular modem. (there are cell towers in nearly every part of the world)

In our final design, considering the strong demand from users to have the tracker as small as possible (similar to the Tile Mate). We endeavoured to ensure the tracker is compact as possible. 

We also initially designed the Tracker to be serverless. In this way, the tracker would communicate and share information directly with users iLost app.

Moreover, we set out to have tracker adapt to the users need. The iLost tracker should be able to be smart enough to understand that a user has left behind an item regardless of the item type (luggage, handbag, laptop etc..)
However, our design plan changed rapidly as we started implementing the tracker and as we consulted with more users and professionals (both in marketing and in engineering).

![image of Tile Mate ](https://github.com/GSoft-Goldsmiths/iLost-main/blob/master/final-report/Sources/Ch4%20Design%20and%20Implemenation/tile_mate.jpg)

image source: https://images-na.ssl-images-amazon.com/images/I/91yCqcF4bxL._SL1500_.jpg

At the computer fair, in which we consulted with various industry professionals, we realised that we should focus on a minimum viable product for duration of this project. Certain product features such as having the tracker as physically small as a sticker (similar to the Tile Mate) is not possible in the scope of the project as we need specialist manufacturers, engineers and funding (we already looked at all the possible routes making the tracker smaller). Most users clearly want a tracker that is small as the Tile Mate, so we looked at next viable use case and the minimum physical size of the tracker that can fit that viable use case, this was baggage use case.

It is feasible in the time frame and available resources in this project, to build a physical tracker that is small enough (insert dimensions here) to fit in the user’s handbag, rucksack and travel luggage (the baggage use case). While also available to fulfil the user criteria in terms of accurate, long range tracking (over 30 metres)

At the design stage, we initially designed the tracker to be serverless i.e. the physical tracker solely communicates via cellular data to the app on the users phone, reducing cost and increasing security for the user. However, for the cellular modem to function properly, it must communicate with Hologram Nova cloud servers, this is so that the Hologram can negotiate with multiple phone carriers, this functionality allows the user with one sim card to able to have a tracker that can triangulate and transmit data anywhere in the world which has cell towers. 

Currently the tracker communicates with the Hologram Cloud servers, which in turn communicates with the user’s app.
Also, in the design stage we realised that our tracker can be developed into an enterprise framework. If our product is successful at item tracking for consumers and is fully tried and tested, this same technology can be used for enterprise applications, such as asset tracking, shipment tracking, even livestock tracking. However, this is not in the scope of this project.

# Implementation Stage

We initially designed the user app to be hosted on the Android platform, instead we implemented the user app on both the iOS and the Android platform. We did this for two reasons. Firstly, from market research, roughly 53% of users do not have an Android smartphone. Secondly, developing the Android app allows us to have a plan B, in case we cannot develop the iOS app in time or if there are compatibility issues with the tracker. The Android and iOS app both have different programming languages and paradigms. 

![market reseatch](https://github.com/GSoft-Goldsmiths/iLost-main/blob/master/final-report/Sources/Ch4%20Design%20and%20Implemenation/statistic_id262179_mobile-os_-market-share-in-the-united-kingdom--uk--2011-2018.png)

source: https://www.statista.com/statistics/262179/market-share-held-by-mobile-operating-systems-in-the-united-kingdom/ 

The reason why we developed an Android/iOS app instead of a web app, is that as part of the iLost design, the user needs notifications in real-time (when an item has been left behind). Real-time notifications are not currently possible with web apps.

Another significant change to the iLost tracker was the discarding of the Bluetooth function. Initially, the iLost tracker was supposed to use the Generic Bluetooth adapter on the Raspberry pi and the user’s smartphone.  

The Bluetooth function is needed for the tracker at short range (less than 30 metres) to remind the user if they have left an item behind, if an individual recently just stole their item or for tracking down the location of an item (to a range +- 5 metres). This is after the long-range function (i.e. the cellular modem) locates a rough location of the item (30-40 metres from actual location)

In a situation whereby, the user is greater than 30 metres away from the physical tracker but requires a more precise location of the tracker, the Bluetooth function was supposed to fulfil this use case. My measuring Bluetooth signal strength coming out of the tracker, (2.4 to 2.485 GHz radio frequencies) the user can determine how near they are to the tracker and thereby their lost/stolen item. 

However, although the Bluetooth concept is simple, as many developers (we talked with one personally in the department) implementing reliable Bluetooth functionality is problematic (looking at most Bluetooth products on the market, many products have connectivity problems)  

The main disadvantage that led us to cancelling the Bluetooth function, is that in order to support the iOS platform for the users, the iLost tracker must comply with MFi (Made For iPhone) program. The MFi program restricts the types of devices that can connect to Apple products. The iLost tracker is a Raspberry pi with an attached cellular modem, the Raspberry pi is not certified under the MFi program. This means the iLost tracker Bluetooth function (it’s a Raspberry pi zero, which has a Bluetooth module by default) cannot interact with the user app and we cannot release the iLost tracker for the iOS platform.

Subsequently, we tried to implement the iLost Bluetooth feature with the Android app. Although, the android platform did not have a compliance program like the iOS, there were other serious issues. We simply could not find the functionality to be able measure Bluetooth signal strength emitting from the iLost tracker.  We assumed that the mac address of the iLost tracker would always be the same, but this is not correct. After Bluetooth 4.2 was released, the mac addresses of any Bluetooth device is constantly randomised. Because the mac addresses (we need this address to communicate with the iLost tracker) is randomised we cannot from android app side be certain which Bluetooth device is the iLost tracker. 

We also looked at other Bluetooth products on the market, such as most headphones. They were also plagued with stability issues (such as signal not receiving or pairing breaking), if we were to implement the Bluetooth feature we would need experienced developers who specialise in implementing reliable Bluetooth communications between user apps and physical computing devices. Unfortunately, there is also no library or service (like Hologram) which simplifies the Bluetooth stack. 

Moreover, we experimented with other Bluetooth based technologies, to find a replacement. We tested and built mock-ups using the estimote beacon (a Bluetooth tracker, used in upcoming retail and asset tracking), this did not fit our use case, as it increased unnecessary cost and complications to the user. Another novel Bluetooth tracker which failed the use case was the puck.js (a small Bluetooth tracker that can programmed using JavaScript) although a novel concept we did not possess enough technical skill to be able to program the Puck to detect read Bluetooth signals specifically emitting from the raspberry Pi. 

[insert picture of raspberry pi 3 model B with hologram nova attached, we need to take a picture of this]

Our next step, was to implement the Cellular functionality of the iLost tracker. The cellular functionality consists of a cellular modem (called Hologram Nova) provided by the company Hologram. The Hologram Nova, via USB is attached to the raspberry pi (for testing and early prototyping we used the Raspberry pi 3 model B) and this what we refer to as the iLost tracker. We manged to establish a protocol to communicate with the iLost tracker.

This protocol consists of sending HTTP requests to the tracker, the tracker then responds via HTTP post with the data back to the sender.   

At first, we sent HTTP requests via our computers (using the Postman application) to the iLost tracker, we received responses that showed that the communication method functioned. 

After, we checked that the cellular modem method of location worked and that it could return useful data. The Hologram Nova uses nearby cell towers to triangulate its location. It did work, but the accuracy was not satisfactory, on average location was 40 metres away from the bag we were tracking.

Even though we could send HTTP requests to the tracker as well as sending simple worded messages (such as “RL” for request location), we could not request the tracker to send its location back to the sender.

So, we needed to solve this issue. At first, we tried to set up an apache web server on the raspberry pi, open a specified port on the server and send messages to that port. We built a python script that would reply to any specified message we sent to the server. This did not work, any messages we sent were not received by the server. What we didn’t realise was that when we were sending a message to the tracker, the payload was being sent to the Hologram Cloud servers, these cloud servers would then forward the payload directly to the tracker.

We could not find a way around the Hologram cloud servers, in fact the Hologram cloud servers were essential. They reason why their cloud servers are needed is that in order for us to communicate with the Hologram nova (cellular modem) and be able to triangulate the location of the tracker (i.e. Raspberry pi), the Hologram service as a whole needs to negotiate with multiple mobile network carriers. Being able to triangulate location using cell towers and communicate with a cellular modem internationally at a regular price (it currently costs us $1 a month) is only possible currently using the Hologram service. Previously developers had overcome many administrative, legal and economic issue in order to work with cellular networks.  

Through all our testing and use the Cloud servers did not fail and reliably delivered any payloads we sent to the tracker. Without the Apache server, we then used Hologram SDK (which includes a Command Line interface) to open a server at port 4010 (on the Raspberry pi), any messages we sent via HTTP were now received (we could view the message on a terminal) we then used Bash scripts to automate useful responses. For example, if the message “RL” was sent (Request Location) then the tracker via the scripts would triangulate its location, store this data (longitude, latitude, altitude) as string data and send this back to the sender. Scripts were also created for the tracker to shut itself down, power itself up, disconnect from cellular networks (use cases such as the user traveling on an airline)

We also tried to host a server on Igor instead of the raspberry pi, however we found a more efficient solution, this was to leverage the Hologram Cloud servers. The Igor servers are not available worldwide and offered limited scalability. 

The reason why Bash scripts were used instead of python is that there is native support for using CLI commands provided by the Hologram SDK. Another advantage of using Bash scripts were that we were able turn these scripts into daemons. Daemons are process that run without user supervision and in the background on Unix/Unix-like operating systems. The cron (specifically crontab) program is used and whenever the tracker is turned on, all of the Bash scripts that enable tracker functionality run as background processes, lowering the power consumption of the tracker.

Using a Bash script, and using inbuilt Linux programs such as grep, cron, is line with the Unix philosophy of small programs which do one specific function efficiently, being chained together to build a larger program. 

Even though we could request the tracker to send its location back successfully, we still needed to be able to store this data, so the user app could access it and use it. We researched into possibility of running a small server on the user app, which could receive this data. This is not possible; any server must operate outside of iOS and Android platform.

We then decided to use the amazon s3 servers which are scalable (servers can be replicated or moved to any AWS region), reliable (good track record, enterprise grade), available worldwide and inexpensive. The tracker now sends location data to our s3 server. We were then able to have the user app request location data from the s3 server and display this data/their location of the tracker to the user.

We also encrypt this data using AES-256 servers side encryption keys, each record is encrypted with a unique key, even the key itself is regularly encrypted. This service is provided by amazon.

![current stack](https://github.com/GSoft-Goldsmiths/iLost-main/blob/master/final-report/Sources/Ch4%20Design%20and%20Implemenation/current_stack.png)

Post-Snowden age, we understand users are concerned about privacy. All data that is stored on Amazon servers are automatically encrypted AES-256 servers side encryption keys. We only store longitude, latitude and time data, for 14 days. Its saves us space and cost, to not store data permanently.

Location data such as longitude and latitude is metadata, its ambiguous not content that can identify the users personal information. The purpose of the Amazon server is only required to provide data back to the user. Also, each tracker has unique ID number, personal information is not identifiable from the data. 

We cannot guarantee compliance with UK Data protection act, due to the legal complexity of having the Amazon operating servers globally as well as the Hologram nova having to operate with many network carriers globally. Ideally, with more funding we would be able to consult with legal professionals. 

Next, we needed to create the UI for the iOS app and Android app. We approached this by keeping everything as minimal and simple as possible for the user. The user would take a picture of their item they want to track, assign a category for it. When the user wants the location of their bag for example they would tap on the on the “[locate]” button, a google map of their item would show along with any information such as directions and distance. 

However, we migrated from the iOS app being built in the swift language to React Native. React Native is framework that allows developers to build mobile apps for both the iOS and android platform using JavaScript and the React framework. 

At the beginning of the project, our iOS developer team did not have experience with using the Swift language and associated frameworks. We spent 3 - 4 weeks building a basic application which only had a tab bar view to switch between pages, and only half of the user interface components were functional. 

Due to the limited development time, we searched for an alternative method that would reduce development time. We found that React Native and Flutter were good alternatives to develop native mobile applications. React Native was chosen because it was more mature than Flutter, which was relatively unstable as it had just been released. Unexpectedly, only three days were required to develop the same application, which the iOS team spent almost a month to build, in React Native. Switching to React Native was a good decision as it significantly shortened the development time providing us more time to do usability tests.

The iOS team also had previous experience in developing React web applications, where React shares the same component-based concept and reactive function programming paradigm with React Native. Also, React Native uses JavaScript which we were more familiar with, so it was relatively easier for us to develop the application.

The Swift API had many noteworthy changes from Swift 2.0 to 4.0 which is the latest version (we were developing with latest version), so whenever we encountered an issue, it was difficult to search for the solution for the latest version of Swift. The official documentation of Swift was also quite ambiguous, it lacked working examples. This led to a steep of learning curve when developing in Swift. On the other hand, React Native had better documentations and community support. The official documentation was explained clearly with good working examples, there were more community-built components can be approached easily as well, this improved the developing experience and made it easier.

**Android app**
![Android app UI](https://github.com/GSoft-Goldsmiths/iLost-main/blob/master/final-report/Sources/Ch4%20Design%20and%20Implemenation/android_app_ui_02.png)

**iOS app**
![iOS app UI](https://github.com/GSoft-Goldsmiths/iLost-main/blob/master/final-report/Sources/Ch4%20Design%20and%20Implemenation/iOS_app_ui_02.png)

For our tracker to be useful and satisfy its use cases it had to be portable. When we were testing our tracker, which was a raspberry pi 3 model b, it had be plugged into the mains. We replaced the raspberry pi 3 model b with the raspberry pi zero. The raspberry pi zero is 2x smaller than the raspberry pi 3, uses much less power and still uses the same operating system (so all the Bash scripts and configurations still worked) 

We first tried to use small power banks to power the tracker (normally used for mobile phones) to test the average power consumption of the tracker. The tracker requires 130 mA. Using power banks is not practical for the user, so instead we tested lithium-ion batteries, these were slim and provided more power. We used 1200 mAH batteries, current testing shows that the tracker can last....

We have a method of charging the battery, but this requires us to remove the power cable connecting the battery to the raspberry pi zero, there is at the moment no option for the user to charge the device...  
[not finished yet] 

**combined**
![final tracker images](https://github.com/GSoft-Goldsmiths/iLost-main/blob/master/final-report/Sources/Ch4%20Design%20and%20Implemenation/current_tracker_no_case.jpg)

**all the components**
![final tracker images](https://github.com/GSoft-Goldsmiths/iLost-main/blob/master/final-report/Sources/Ch4%20Design%20and%20Implemenation/current_tracker_no_case_parts_expanded.jpg)

Moreover, a physical case which would fulfil the user use cases was needed for the tracker. Namely, it needed to be reasonably drop proof, strong enough to withstand day to day life, durable, simple and functional enough to be attached to a bag. A prototype was created using laser-cut cardboard, which was interlocking. As a first iteration, it was useful as it allowed us to show to users how our Physical tracker would look, in terms of size (how it compared to other items a user may carry), this iteration was also low cost as it was made from cardboard. By creating the first iteration, we could also see dimensions required for the internal components of the tracker and how these components would behave inside an enclosed space.

Some members of team also undertook 3D printing training. Ideally, we wanted the case to be 3D printed, unfortunately we did not have enough time to progress beyond the cardboard prototype. 

![concept case](https://github.com/GSoft-Goldsmiths/iLost-main/blob/master/final-report/Sources/Ch4%20Design%20and%20Implemenation/physical_case_concept_01.png)

![concept case](https://github.com/GSoft-Goldsmiths/iLost-main/blob/master/final-report/Sources/Ch4%20Design%20and%20Implemenation/physical_case_concept_02.png)

![prototype case](https://github.com/GSoft-Goldsmiths/iLost-main/blob/master/final-report/Sources/Ch4%20Design%20and%20Implemenation/prototype_case.png)
**dimensions  5.6 * 3.6 * 15.5 cm**
