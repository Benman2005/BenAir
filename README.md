# Javascript Full Stack Test#
  This Project uses React-Redux in the front/client side, and TypeOrm(Typescript), Koa and Postgres in the back/server end.
  It's basically a tiny page to find airplane tickets on the homepage.
  Logs of requests are also available to see in /logs(super secret, don't tell anyone, since no authentication was added yet)

# Instructions

To run this application you'll need a postgres cient to connect to via something like docker. after that:

* clone folder
* go to /server folder
..* yarn install
..* yarn start
* go to /client folder
..* yarn install
..* yarn start
  
# Aim

By no means did I fulfill all wishes in this assignment, but I managed to tick some off.

## What i did do:
* Front end with searchable origins/destinations and flights
* Front end with some stats on requests
* Backend with flights and response table
* Response logging. Not the way I wanted, but kinda works for now.
* Used noImplicitAny flag with Typescript.
* Build app with state management, using standalone modules and components.

## What i didn't do:
* RAML api documentation
* In memory database. Next time try to make backend with Redis.
* Authentication for accessing logs.
* Add tests

---
This is how i received the assignment:

# Story
You are providing a service to a charted airplane company. This fiction company LINKIT AIR has the following flights daily (times are in departure city time):

* 09:55 - Amsterdam to London 

* 13:15 - London to Amsterdam

* 10:45 - Amsterdam to Frankfurt

* 14:35 - Frankfurt to London

They want to get rid of some of travel agents and make it easier to customers to buy their tickets, so they need to develop a simple sales website. 
At the same time, they want to gather some statistics about this service.

## Time limit
Up to you on how much effort you want to spend and how perfect you want it to be. You can take your time to build the backend service with latest Node.js and frontend user interface with latest version of any framework you feel comfortable with.

## Assignment
Create a REST Service, on latest version of Node.js preferably using Express, following the HTTP standards.
Provide documentation for your API as SWAGGER or RAML.
Create a web user interface with latest version of any framework / library of your choice where a customer of the site could do the following:

* Be able to select an origin.
* Be able to select a destination.
* Retrieve a fare offer for the given origin-destination combination.
* Selections for origin and/or destination should be searchable, in other words the customer should be able to find an origin or destination by providing a few characters that would match either an airport code, name or description. The user interface may be in any technique that you feel comfortable with.

The authentication is on application level, so make sure the user interface is not bothered with authentication. There is no need for a login to purchase tickets.
Add statistics for your backend
To get some input on our application usage we need to collect and store some information from its traffic. Retrieve and store the require values below:

* Total number of requests processed

* Total number of requests resulted in an OK, 4xx and 5xx responses

* Average response time of all requests

* Min response time of all requests

* Max response time of all requests

To not only store this data expose this information in a new restful endpoint as JSON and provide a dashboard to visualise this info. How to authenticate the access to this dashboard, it is up to you.

Collecting metrics should not impact the user experience in any way.
Make the application configurable. No hard coded values for things like endpoints, etc. Everything should be configurable in some kind of configuration file.

## Bonus points
* Use noImlicitAny flag if you chose to develop with Typescript.
* Build your app with state management, using standalone modules and components.
* Build your backend using Typescript, use packager/script to create the distribution.
* Add e2e tests to cover basic few functional requirements.
* Instead of using hardcoded mocked data, you can create in memory database.

Show us your knowledge of javascript with including next generation JS features!

# Summary #
By no means is the goal to get a solution covering all special cases in a 100% robust way. It's important that you can explain why you chose your solution instead of another. You can create mock data and values that make no sense (like fare prices and so on). Feel free!

At least the functionality that you deliver should be error free. What you implement and how you do it is subject to your creativity and ambition :-). Good luck!

## How do I submit it? ##
* Create your branch and keep pushing your changes. 
* Create and explain in a Markdown about your decisions in the process.
* When it is done, let your LINKIT contact know about it via Pull Request.
* Give instructions in a readme file so that anyone with a unix based system could download the repo and run the service on their `localhost`.