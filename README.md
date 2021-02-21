Group Project completed during course at Nashville Software School [October 2020]

Plenty of witches is a Halloween themed social site. Users can manager messages, tasks, events, friends and events.
My contribution to group project: News Article components.

Technologies: React.js, ReactStrap, Json, HTML, CSS

# Nutshell: The Information Dashboard

## Instructions for project:

Nutshell is a new product offering that you have been tasked with building. It's a dashboard for people to use to organize their daily tasks, events, news article, friends, and chat messages.

You will be utilizing all of the skills and concepts that you've learned up to this point in the course.

1. Functions
1. Databases
1. Github
1. Objects
1. CSS/Flexbox
1. Array methods
1. Components
1. Handling user events
1. Implementing CRUD operations
1. Relational data
1. ERDs

To start you off, here's an example of what the resources in your API should look like once it's populated with some data from your application.

### Users

```json
{ "id": 1, "username": "Steve", "email": "me@me.com" }
```

### Messages

```json
{ "id": 1, "userId": 1, "message": "What's up?" }
```

### News

```json
{
	"id": 1,
	"userId": 2,
	"url": "https://www.quantamagazine.org/newfound-wormhole-allows-information-to-escape-black-holes-20171023/",
	"title": "Wormholes Allow Information to Escape Black Holes",
	"synopsis": "Check out this recent discovery about workholes"
}
```

### Friends

```json
{ "id": 1, "userId": 1, "following": 3 }
```

### Tasks

```json
{ "id": 1, "userId": 3, "task": "Take out garbage", "complete": false }
```

## Professional Requirements

1. Each module should have a comment at the top with the following info: author(s) and purpose of module
1. The README for your project should include instructions on how another person can download and run the application

## A Note About Authentication

We want you to know that the login and registration code we have given you is fake, completely insecure, and would never be implemented in a professional application. It is a simulation authentication using very simplistic tools, because authentication is not a learning objective of students at NSS.

You will be using [session storage](https://javascript.info/localstorage#sessionstorage) to keep track of which user has logged into Nutshell. You need to read the code in the **`LoginForm`** and **`RegisterForm`** components so that you see what is going on, but you do not need to change it. However, you will have to use a custom message that is being dispatched by those components.
