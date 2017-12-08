# Use Cases

## Actors

* User
* iLost App
* Hologram Cloud
* Physical Tracker

## Use Case Index

ID| Name | Primary Actor |
|---|---|---|
1 |Log trackers | User
2 |Check Trackers | User
3 |Notify User the tracker is missing | iLost App
4 |Track Trackers | User
5 |Setting safe place | User
6 |Register account | User
7 |Identify user | User

## Use case 1: Log trackers

* Description: Log trackers' information to the iLost application.
* Basic Flow: 
  1. User links the mobile with the tracker with blooth to activate it.
  1. User input the trackers information to the application.
* Alternative Flows:

## Use case 2: Check trackers positions
* Basic Flow
* Alternative Flows

## Use case 3: Track Trackers
* Basic Flow
* Alternative Flows

## Use case 4: Notify User that the tracker is missing
* Basic Flow
* Alternative Flows

## Use case 5: Setting safe place
* Basic Flow
* Alternative Flows

> Extends
## Use case 6: Register account
Basic Flow
Alternative Flows

## Use case 7: Identify user
Basic Flow
Alternative Flows


---

## Use Scenarios
* tracker = iLost physical product
* tracking app = the smartphone app the user interacts with

## Register Use Case Scenario
1.	The user creates a new account in the tracking smartphone app.
2.	The server receives the account creating request and send a new account confirmation email to the registered email.
3.	The user receives the email and activates the account by clicking the link in the email.
4.	The server receives the account activation request and store the new user account data in the database.
5.	The user logs in to the account and edits the details of the account.
6.	The server receives the account editing request and validate the input data, if the input data is validated, stores in the database and send editing successful response back to the tracking app. If not, send the error message back to the tracking app.
7.	The tracking app receives the response and shows on the screen.

## Normal Use Case Scenario (short range)
1.	The user logs in to the account (if not already logged in)
2.	User logs what item is attached to the tracker (select a picture, take a picture of the item or choose from common items or choose from previous history)
3.	The tracking app regularly or when needed (depending on what user is tracking) request the trackers location and the smartphone location (smartphone location is native and already built in)
4.	By default, the Bluetooth module in the tracker is on and cellular modem is Off (because the user is near the tracker).
5.	App on smartphone is now currently “listening” for Bluetooth signal from the tracker.
6.	The user left the item, which is attached to the tracker. They have forgotten that they left it behind.
7.	The tracking app can’t detect the Bluetooth signal of the tracker (out of range), after a short period of time, it sends a notification to the smartphone OS and warn the user that the item is not near him.
8.	The user goes back and retrieves the item.
9.	The tracking app and tracker are now within Bluetooth range, so notifications stop. Incident is stored on smartphone database as lost history with the location.

## Normal Use Case Scenario (long range)
1.	The user logs in to the account (if not already logged in)
2.	User logs what item is attached to the tracker (select a picture, take a picture of the item, choose from common items or choose from previous history)
3.	The tracking app regularly or when needed (depending on what user is tracking) request the trackers location and the smartphone location (smartphone location is native and already built in)
4.	By default, the Bluetooth module in the tracker is on and cellular modem is Off (because the user is near the tracker).
5.	User states that item will be intentionally left in a location and does not require the location now (example the user wants to know where they have parked their car in a big car park before shopping). 
6.	Tracker app sends request via Bluetooth to Tracker to switch on its cellular modem because its Bluetooth signal is not required now.
7.	Tracker uses cellar modem to locate itself (via cell tower triangulation) sends location data to the Hologram Cloud servers using 2G/3G.
8.	Hologram Cloud server then contacts tracker app displaying location of item.
9.	This location is not accurate (could be off target by 40 meters).
10.	As user approaches at least 40 meters near the item, the tracker app notifies the Hologram Cloud servers to send a request to the tracker to turn on its Bluetooth module.
11.	Tracker app now tries to listen to the Bluetooth signal coming out from the tracker, when signal found the tracker app directs user to the item (in this case, car) when the user gets closer the Bluetooth signal strength increases.
12.	User finds item, (within 3 meters) tracker app directly communicates via Bluetooth to the Tracker to switch off its cellular modem, thus saving battery. 
13.	Tracker app “knows” that user has found item, no notifications are sent.


## Normal Use Case Scenario (item stolen)
1.	The user logs in to the account (if not already logged in)
2.	User logs what item is attached to the tracker (select a picture, take a picture of the item or choose from common items)
3.	The Hologram Cloud servers receives the location data of the tracker and stores this data on the user’s smartphone and links this location data to item the user is tracking. 
4.	The tracking app regularly or when needed (depending on what user is tracking) request the trackers location and the smartphone location (smartphone location is native and already built in)
5.	By default, the Bluetooth module in the tracker is on and cellular modem is Off (because the user is near the tracker).
6.	App on smartphone is now currently “listening” for Bluetooth signal from the tracker.
7.	The user item is stolen. 
8.	The tracking app can’t detect the Bluetooth signal of the item (out of range), so it sends a notification to the smartphone OS and warns the user that the item is not near him.
9.	The user goes back and determines item is stolen.
10.	User reports item is stolen to the tracker app. 
11.	Tracker switches on its cellular modem because its Bluetooth signal is not reaching users smartphone after a period of time.
12.	Tracker uses cellar modem to locate itself (via cell tower triangulation) sends location data to the Hologram Cloud servers using 2G/3G.
13.	Hologram Cloud server then contacts tracker app displaying location of stolen item.
14.	User can report its location to police and provide location history of the item.  

## Warning Use Case Warning Scenario
1.	The user has several lost items in the lost history database already.
2.	The smartphone app uses an algorithm(ex: decision tree) to determine if the user has higher possibility to lose their item again at certain location based upon the previous history.
3.	The app sends a notification to the mobile OS to tell the user to be aware of his or her belongs today, because the user has potential to lose the item here.



