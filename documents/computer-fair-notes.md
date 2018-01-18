# Questions they will ask:

## What is the concept (what is iLost) ?

- final concept document answers this question, please make sure you've read it well !
  - [concept - pls read me](final-concept.md)

## Unique protocol:

  In a long range situation, when the user gets closer to the tracker. The smartphone app tells the tracker to turn on the Bluetooth module. The smartphone then measures the bluetooth signal strength, the stronger the signal, the closer the user is to the tracker. (the cellular modem is switched off to save battery) This increase the trackers location accuracy, espicially in an urban environment. 


## What is the market for the concept ?

- Don’t forget an item reminder, app adapts to users need
- Long-range & Short-range Asset tracking indoors & outdoors
- Air & Sea Shipment tracking
- Vehicle tracking (where you parked your car, recover stolen car etc..)


## what role did the conceptual prototype have in the project ?

summary of our conceptual process:

1. reminder app that stops you from forgetting your item in the first place
1. added the ability to find the location of the item at short range
1. added long range capabilities , item can be found if stolen
1. added feature where the app now adapts to the user and the app can now track item worldwide
1. conceptual prototyping influenced what our users needed and helped us decide which functional prototyping path would fulfil users needs

## What influence did stakeholder feedback have in the project ?

In our previous interviews with prospect users, the interviewees reflected that instead of merely reminding them the items are lost, it will be more helpful if it can help to track the item as well. That’s why we converted our product as a lost item **reminder application** to an lost item **tracking application**.

##  What role did the functional prototype have in the project ?

- we went through 10 different tecnologies to reach point were we are now:
  - [hardware reaserch](hardware-research.md)
- singular approaches evolved into a hybrid approach we have now
- we evaluated all the advantages and disadvantages of the technologies listed in [hardware reaserch document](hardware-research.md) at each technology assesed wether this technology could fulfil the use cases.
- the functional prototyping is what made our product iLost evolve to reach a point where its unique compared to our competitors (it exclusively uses cellular for long range and bluetooth at short range) 
- we now are in the process of making a full working prototype which would not be possible without the functional prototype (a lot of time has been saved by narrowing down on technolgies we need to fulfil the use cases)


## What technical architecture and technology will be used to realise the project ?

- We will be using the Hologram Cellular platform
- Hologram provides a cellular modem called Hologram Nova
- the tracker will be a raspberry pi zero which is connected to the Hologram nova, this is the most efficient setup so far that will acomplish short range and longe range tracking
- Android app will be the user interface (App adapts to the type of user and their needs)
- All android smartphones have an bluetooth module and the ability to geo-locate itself. thats all we need
