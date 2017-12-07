# Use Cases

## Actors

* User
* iLost App
* Hologram Cloud
* Trackers

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

## Register Use Case Scenario

1. The user creates a new account in the tracking app.
2. The server receives the account creating request and send a new acount confirmation email to the registered email. 
3. The user receives the email and activates the account by clicking the link in the email.
4. The server receives the account activation request and store the new user account data in the database.
5. The user logs in to the account and edits the details of the account.
6. The server receives the account editing request and validate the input data, if the input data is validated, stores in the database and send editing successful response back to the tracking app. If not, send the error message back to the tracking app. 
7. The tracking app receives the response and shows on the screen.

## Normal Use Case Scenario

1. The user logs in to the account and logs the tracking items attached with the tracking sensors.
2. The database receives the tracked items data and stores them in the database.
3. The tracking app monitors the sensors on the of the tracking item.
4. The user left the wallet, which is one of the tracking item, in a random place.
5. The tracking app can’t detect the sensor of the wallet, so it sends a notification to the mobile OS and warn the user that the item is not near him.
6. The user goes back and retrieve the lost item.
7. The tracking app send the data of losing time, location and so on to the database.
 
## Warning Use Case Warning Scenario

1. The user has several lost history in the database already.
2. The tracking app listens to the mobile’s geolocation every content time period, and send the data back to the server.
3. The server receives the data from the tracking app and fetch the user’s losing history data from the database. 
4. The server uses algorithm(ex: decision tree) to determine if the user has higher possibility to lose his item again at certain location based upon the previous history.
5. If so, the server sends a message to the tracking app
6. The app sends a notification to the mobile OS to tell the user to be aware of his or her belongs today, because the user has potential to lose the item here.
