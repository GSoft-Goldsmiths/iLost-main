# 3.Functional Specification
FUNCTIONAL REQUIREMENT (What it needs to do)
Our product has the ability to prevent the loss of personal belongings as well as, retrieve lost belongings.
HOW DOES IT DO THAT?
We will accomplish this through a hybrid approach, utilizing small computers and the precision of short range wireless technology as well as long range wireless technology (essentially unlimited range). Given different scenarios, these technologies will alternately adapt according to the users need. Through the medium of software application, the user will be able to interact with the tracker on the tagged item.
WHAT DOES THE APPLICATION EXACTLY DO?
The application will allow sending requests to the server for generating a new account in order to store a new users’ data in the database. It will also consent updating account details, retrieve existing users’ data from the server once the application has acknowledged sign in details. Customers then can register item/s of interest that needs to be tracked; 
this can be done by selecting from an existing items list as well as adding a new item label to be tracked.
 
In a normal scenario, the users’ smartphone will be tracking their position while the application on the phone frequently requests the labelled items’ location tagged by tracker, utilizing the short range wireless communication technology by default. 

In the event of the application not detecting signals from short range wireless technology in the tracker, will trigger the application to send out a notification to the smartphone warning the user that the item is not in their neighbouring. In this case the item is out of the users’ range, so the user can head back to the location to recover the item. Customer can choose to stop the notification temporarily and retrieve the item in a later time.
Once the user is back within the range of receiving signals from the tracker to the application, the notification will then permanently stop. The incident will then be recorded and stored on smartphones’ database as lost history with the location.

On the other hand, long range wireless technology mounted on the tracker comes in play when an object needs to be recovered or tracked once it is out of the short reading range. In this case the consumer can utilize the application to interact with the tracker, and switch to the long range wireless technology for it to locate itself displaying the position of the tagged item/object. At this stage the location of the item has a vague accuracy range, approximately around 40 metres. However, as the user progresses towards the tagged item the application will notify the long range wireless technology server to switch on the short range wireless technology for greater accuracy of positioning range, roughly of 3 metres.
