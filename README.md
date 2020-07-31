# T3A2 FULL STACK MERN APP 
## Final Assignment Part B - PID Electrical Services 

This project is for a client who is an electrician. He wanted a website where he could advertise his business and also allow customers to make enquiries. This project also contains a dashboard where the client can view new messages and delete messages when contact with the customer is completed. 

## Getting Started 

The app uses Netlify for deployment on the client side which can be accessed via the link below. For the server, the app is deployed with Heroku. 

https://pid-electrical-services.netlify.app/

https://pacific-woodland-56783.herokuapp.com/

## Accessing the website as a customer
Just like you would see on a normal company website, the customer is able to access the homepage, services page and create a new request form. This does not require the customer to be logged in. 

## Accessing the dashboard as the client
Our client is the sole owner of the business and works alone, and there is no need for other clients to Register or Log In. We have created a dashboard hidden from customers so that our client can access any customer queries. 

The link to access the dashboard is below 

https://pid-electrical-services.netlify.app/dashboard

or 

https://pid-electrical-services.netlify.app/login


Before the client can access the dashboard they will be redirected to the Log In page. For the purpose of this assignment we have created a simple log in for the assessors. 

username: admin 

password: 12345

## Steps to run in development


### Clone with SSH or download
```terminal
$ git clone git@github.com:electrician-app-assignment/client-side.git
$ yarn install
```
```terminal
$ git clone git@github.com:electrician-app-assignment/server-side.git
$ npm install
```


## Prerequirements
- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/)
- [npm](https://nodejs.org/en/download/package-manager/)

To run locally, ensure that the client and server is running simultaneously in differnt terminal sessions so that they are talking to each other.

## Client-side usage(PORT: 3000)
```terminal
$ cd client-side   // go to client folder
$ yarn i       // npm install pacakges
$ yarn run dev // run it locally

// deployment for client app
$ yarn run build // this will compile the react code using webpack and generate a folder called docs in the root level
$ yarn run start // this will run the files in docs
```

## Server-side usage(PORT: 3009)

```terminal
$ cd server-side   // go to server folder
$ npm i       // npm install pacakges
$ npm run dev // run it locally
$ npm run build // this will build the server code 
```

## Dependencies(tech-stacks)

### Client-side dependencies
  ```"@material-ui/core": "^4.11.0",
    "@material-ui/icons": "^4.9.1",
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
    "axios": "^0.19.2",
    "bootstrap": "^4.5.0",
    "colorette": "^1.2.0",
    "fontsource-roboto": "^2.2.6",
    "moment": "^2.27.0",
    "node-sass": "^4.14.1",
    "react": "^16.13.1",
    "react-bootstrap": "^1.3.0",
    "react-dom": "^16.13.1",
    "react-moment": "^0.9.7",
    "react-redux": "^7.2.0",
    "react-router-dom": "^5.2.0",
    "react-scripts": "3.4.1",
    "redux": "^4.0.5",
    "redux-devtools-extension": "^2.13.8",
    "sass": "^1.26.10",
    "styled-components": "^5.1.1",
    "swiper": "^6.0.4"
```
### Client-side dev-dependencies
```
    "css-loader": "^4.1.0",
    "cypress": "^4.11.0",
    "style-loader": "^1.2.1"
```

### Server-side dependencies
```
   "axios": "^0.19.2",
    "body-parser": "^1.19.0",
    "connect-mongo": "^3.2.0",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "express-session": "^1.17.1",
    "mongoose": "^5.7.1",
    "passport": "^0.4.1",
    "passport-local": "^1.0.0",
    "passport-local-mongoose": "^5.0.1"
```
### Server-side dev-dependencies
```
    "expect": "^26.1.0",
    "mocha": "^8.0.1",
    "nodemon": "^2.0.4",
    "jest": "^24.9.0"
```

## Project Management

- Daily standups on ed discussion thread discussing what we worked on yesterday, what we are working on today and any issues that are blocking us from completing these tasks. 
- Using Trello board with weekly sprints as part of Agile Methodology. On Trello we create cards to allocate and sort features to be worked on and discuss the difficulty of each task for the developer and approximately how long it will take them to complete each task.
https://trello.com/b/9SMftIeC/agile-sprint-board
- Main form of communication is made with Slack. On slack we dicuss any issues we have with the assignment and further discuss our daily tasks, breaking it down to smaller components and the difficulty level of each task. We talk about our strengths and weaknesses and discuss any issues we have with the development process. We notify our team mates for pull requests that require merging and resolving conflicts. 
- Big Blue Button for screen sharing and to communicate with fellow team mates and our instructors. 

## Authors
[Stephanie Pruna](https://github.com/Victoriablu)

[Margarita Alamo De Parkin](https://github.com/MargaritaPK)

[Mia Brunner](https://github.com/Mia-Brunner)