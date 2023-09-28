---
id: api-introduction-and-implementation
title: API Introduction & Implementation
sidebar_position: 3
description: API Introduction & Implementation
---

# API Introduction & Implementation

You may have heard of the term **REST** or **RESTful** API when reading about Web Programming. For our purposes, this can be described as way to use the HTTP protocol (ie, ["GET"](https://tools.ietf.org/html/rfc7231#section-4.3.1), ["POST"](https://tools.ietf.org/html/rfc7231#section-4.3.3), ["PUT"](https://tools.ietf.org/html/rfc7231#section-4.3.4), ["DELETE"](https://tools.ietf.org/html/rfc7231#section-4.3.5), etc.) with a standard message format (ie, JSON or XML) to preform CRUD operations (**C**reate, **R**ead, **U**pdate, **D**elete) on a data source.

> **NOTE:** To truly create a _fully compliant_ **REST API** we must conform to the standards outlined in Roy Fielding's PhD dissertation, [Architectural Styles and the Design of Network-based Software Architectures](http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm). The design pattern that we are using here could more appropriately be called a "Web API".

What makes this architecture so valuable, is that we remove any assumptions about how a client will access the data. A client could make HTTP requests to the API from a website, mobile app, etc. and it would be the website or app's job to correctly render the data once it's received. This simplifies development of front-end applications that use the data and even removes any specific programming language requirements for the client. If it can handle HTTP requests / responses and JSON, it can use our data.

## Route Configuration

Before we think about getting any kind of persistent storage involved however, let's first see how we can configure all of our routes in our server to allow for CRUD operations on a simple collection of users in the format

```
{userId: number, fName: string, lName: string}
```

| Route              | HTTP Method | Description                        |
| ------------------ | ----------- | ---------------------------------- |
| /api/users         | GET         | Get all the users                  |
| /api/users         | POST        | Create a user                      |
| /api/users/:userId | GET         | Get a single user                  |
| /api/users/:userId | PUT         | Update a user with new information |
| /api/users/:userId | DELETE      | Delete a user                      |

When these routes are applied to our Express server code, we get something that looks like this:

```js
const express = require('express');
const app = express();

const HTTP_PORT = process.env.PORT || 8080;

app.get('/api/users', (req, res) => {
  res.send({ message: 'fetch all users' });
});

app.post('/api/users', (req, res) => {
  res.send({ message: 'add a user' });
});

app.get('/api/users/:userId', (req, res) => {
  res.send({ message: `get user with Id: ${req.params.userId}` });
});

app.put('/api/users/:userId', (req, res) => {
  res.send({ message: `update User with Id: ${req.params.userId}` });
});

app.delete('/api/users/:userId', (req, res) => {
  res.send({ message: `delete User with Id: ${req.params.userId}` });
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, () => {
  console.log(`Express http server listening on: ${HTTP_PORT}`);
});
```

Here, we have made use of the [request](https://expressjs.com/en/api.html#req) object's [params method](https://expressjs.com/en/api.html#req.params) to identify the specific user that needs to be fetched, updated or deleted based on the URL alone. In a sense, what we're allowing here is for the URL + HTTP Method to act as a way of querying the data source, as **/api/users/3**, **/api/users/4923** or even **/api/users/twelve** will all be accepted. They may not necessarily return valid data, but the routes will be found by our server and we can attempt to preform the requested operation.

## AJAX Testing (View)

Now that we have all of the routes for our API in place, let's create a "view" that will make AJAX requests to test our API functionality. To begin, create a **views** folder and add the file **index.html**. This will be a simple HTML page consisting of 5 buttons (each corresponding to a piece of functionality in our API) and some simple JavaScript to make an AJAX request.

However, since we are serving this file from the same server that our API is on, we will need to add some additional code to our server file; specifically:

```js
const path = require('path');
```

and

```js
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});
```

Finally - our server is setup and ready to serve the index.html file at our main route ("/"). Our next step is to add our client-side logic / JS to the index.html file. Here, we hard-code some requests to the API and output their results to the web console to make sure they function correctly:

<!-- prettier-ignore-start -->
```html
<!doctype html>
<html>
  <head>
      <title>API Test</title>
      <script>
          function makeAJAXRequest(method, url, body) {
              fetch(url, {
                  method: method,
                  body: JSON.stringify(body), // if missing 'body', 'undefined' is returned
                  headers: { 'Content-Type': 'application/json' }
              })
              .then(response => response.json())
              .then(json => {
                  console.log(json);
              });
          }
      </script>
  </head>
  <body>
      <p>Test the API by outputting to the browser console:</p>
      <!-- Get All Users -->
      <button type="button" onclick='makeAJAXRequest("GET", "/api/users")'>Get All Users</button><br /><br />
      <!-- Add New User -->
      <button type="button" onclick='makeAJAXRequest("POST", "/api/users", {fName: "Bob", lName: "Jones"})'>Add New User</button><br /><br />
      <!-- Get User By Id -->
      <button type="button" onclick='makeAJAXRequest("GET", "/api/users/2")'>Get User</button><br /><br />
      <!-- Update User By Id -->
      <button type="button" onclick='makeAJAXRequest("PUT", "/api/users/2", {fName: "Wanda", lName: "Smith"})'>Update User</button><br /><br />
      <!-- Delete User By Id -->
      <button type="button" onclick='makeAJAXRequest("DELETE", "/api/users/2")'>Delete User</button>
  </body>
</html>
```
<!-- prettier-ignore-end -->

## Adding Data (JSON)

Once you have entered the above code, save the changes and try running the server locally - you will see that All of the routes tested return a JSON formatted message. This confirms that our Web API will correctly respond to AJAX requests made by the client. Additionally, If you open the **Network tab** (Google Chrome) before initiating one of the calls to **Update** or **Add a New User**, you will see that our request is also carrying a payload of information, ie:

![AJAX Request Payload](/img/ajax-payload.png)

If we wish to capture this information in our routes (so that we can make the appropriate updates to our data source), we must make some small modifications to our server.js file and individual routes (ie: POST to "/api/users" & PUT to "/api/users/:userId"). The first thing that we must do is incorporate middleware to parse the incoming data, ie:

```js
app.use(express.json());
```

This should allow our routes to access data passed to our API using the [req.body](https://expressjs.com/en/api.html#req.body) property. More specifically, we can update our POST & PUT routes to use req.body to fetch the new / updated **fName** and **lName** properties:

```js
app.post('/api/users', (req, res) => {
  res.send({ message: `add the user: ${req.body.fName} ${req.body.lName}` });
});
```

and

<!-- prettier-ignore-start -->
```js
app.put('/api/users/:userId', (req, res) => {
  res.send({ message: `update User with Id: ${req.params.userId} to ${req.body.fName} ${req.body.lName}` });
});
```
<!-- prettier-ignore-end -->

If we try running the server to test the API again, we will see that the messages returned back from the server correctly echo the data sent to the API. We now have everything that we need to preform simple CRUD operations via AJAX on a data source using a web service. The only thing missing is the data store itself.

> **NOTE:** If we want to allow the API to respond to requests from _outside_ the domain (this is what [https://reqres.in](https://reqres.in/) does), we will have to enable [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS) - see the third-party [CORS middleware](https://www.npmjs.com/package/cors)
