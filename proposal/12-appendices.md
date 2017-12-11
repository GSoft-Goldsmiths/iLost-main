# 12.Appendices

## 5-1. Use Cases Details

### Use case 1: Log trackers

#### Basic Flow

  1. User attachs Tracker to a personal item.
  1. App links to Tracker with bluetooth.
  1. App activates Tracker.
  1. User logs details of the item and Tracker in App.
  1. App validates and saves the inputs.

#### Alternative Flows

[Multiple Trackers]
After Step 4, repeat step 1 to 4 for additional Trackers and items.

### Use case 2: Monitor Tracker

#### Basic Flow

1. App listens for signal at regular intervals.
1. App saves the history of the position of Tracker at regular intervals.

#### Alternative Flows

[Tracker is with user]
Tracker is within certain distance from User:

1. App listens for bluetooth singal.

[Tracker is lost]
Tracker is not within certain distance from User:

1. App activates Tracker's cellular mode via bluetooth.
2. App sends a notification to mobile OS to nofity User.
3. App listens for the geolocation data of Tracker sent from Server.

[Tracker is nearby but not with User after being lost]
Tracker is within bluetooth dectable distance after being far away from User :

1. App activates Tracker's bluetooth mode via Server.
1. App listens for the geolocation data of Tracker sent from Server and bluetooth singal at the same time.

[Tracker is with User after being lost]
1. App deactivates Tracker's cullular mode via bluetooth.

Resume at Base Flow step 1.

### Use case 3: Track Item

#### Basic Flow

1. User selects desired tracking item in App.
1. App displays the position data of Tracker.

### Use case 4: Send position data

#### Basic Flow

1. Tracker sends position data to App.

#### Alternative Flows

[Activates Cellular mode]
Tracker's bluetooth signal is not reaching App after a period of time: 
1. Tracker activates cellular mode.

[Bluetooth mode is activated]
Tracker sends position data via bluetooth to App.

[Cellular mode is activated]
1. Tracker sends position data via cellular to Server.
1. Server transfer the position data to App.

### Use case 6: Register account

#### Basic Flow

1. User input account details.
1. App validates the inputs.
1. App creates a new account.

#### Alternative Flows

[Inputs are validated failed]
After step 2, resume at step 1 if the inputs are not validated.

### Use case 7: Login account

#### Basic Flow

1. User input account details.
1. App validates the inputs.
1. App allows User to login.

#### Alternative Flows

[Inputs are validated failed]
After step 2, resume at step 1 if the inputs are not validated.
