# Event_Manager

Event Manager - Coding Challenge

Backstory

This challenge is based around allowing people to send events to Techs of Color that can be fed to our website.  Currently the process is done manually and this challenge will test your skills in building an Event Manager.

What does it need to do?

The program will need to do the following.
Add/Delete/Store/Edit Events
Create a New User Profile and send an authentication email
Authenticate Users
Edit a User Profile
Needs administrator capability to accept/decline events

Roles

There will be essentially two roles in this program.  They are the user role and the administrator role.

User
A user will need to be able to create an account.  They will need to provide their name, phone number, email, and organization name.  Once the account is created and authenticated.  The user should be able to submit an event for review to the admin.  If the event is approved or declined, they should get an email letting them know the status.  

Administrator
The administrator should be able to review all events that are submitted.  The events should consist of the following:

Name of Event
Date
Location
Description
Link to Register for Event
The administrator can accept or decline the event.  In either case, an email will be sent to the user who submitted the event.  Admins should also have the ability of deleting a user if they are abusing the system.  All accepted invites will feed into our website.

Views

The program will require the following views at a minimum.
Create User View
Edit User View
Create Event View
Edit Event View
Create Administrator View
Edit Administrator View
Show Events View 
Create/Edit Email Template View

Tools/Services

For the production release of this program you will need to be able to port over/use the following:

Heroku for hosting
Amazon web services for lambda functions
Authentication using firebase (or comparable tool)
API query language GraphQL
Code can be in visual studio code, atom or any IDE.

Teams

There will be essentially 4 core areas in which you can select one to join.  The areas are:
UI/UX
Front End
Backend
API

Version Control

We will have a repository to push your code for this project.

