---
id: middleware
title: Middleware
sidebar_position: 2
description: Middleware
---

# Middleware

Middleware in Express refers to functions that can execute in the ‘middle’ of a request/response cycle typically before a matching route handler function is executed.

> Middleware functions are functions that have access to the request object (req), the response object (res), and the next() function in the application’s request-response cycle. The next() function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.
>
> [http://expressjs.com/en/guide/writing-middleware.html](http://expressjs.com/en/guide/writing-middleware.html)

By implementing middleware, we can perform tasks such as:

- Directly modify the "req" (request) or "res" (response) objects _before_ processing the route (ie: `app.get('/', (req, res) => { ... });`)
- Redirect the user or respond to requests before other routes are processed
- Block clients from accessing specific routes
- Log requests / handle logic before processing routes
- Respond to requests for routes that _do not exist_ (ie: generate "404" errors)
- Handle exceptions that occur during the processing of a route handler (ie: generate "500" series errors)

## Getting Started

To implement middleware in our servers, we will begin by writing a simple middleware function that logs every request to the console. This function will be placed **before** any of our route handlers, ensuring that it gets executed for every request:

```js
app.use((req, res, next) => {
  console.log(`Request from: ${req.get('user-agent')} [${new Date()}]`);
  next();
});
```

Notice how we make use of the aforementioned [app.use()](https://expressjs.com/en/api.html#app.use) method to implement our middleware function. It looks very similar to a regular route handler, except it accepts a third parameter: **_next_** and (in this case) does not return anything to the client. It is because this function does not return anything to the client (ie: generate a "response"), that we must use the "next()" function - it simply calls the next middleware function, such as a route handler, ie:

```js
app.get('/', (req, res) => {
  res.send('Hello World');
});
```

> **NOTE**: If we fail to invoke the **next()** function or return a response, our server will hang and the client request will timeout.

### Updating "req"

Let's continue the example by updating the "req" object in our middleware example to include a "log" property that simply stores the output of the log entry as a string. We can use this value in a subsequent route handler and send it back to the client, ie:

```js
app.use((req, res, next) => {
  let loggedItem = `Request from: ${req.get('user-agent')} [${new Date()}]`;
  console.log(loggedItem);
  req.log = loggedItem;
  next();
});

app.get('/', (req, res) => {
  res.send(`Hello - ${req.log}`);
});
```

### Restricting Route Access

Another common use for middleware is to **restrict** route access for a specific route. This can be be accomplished by placing your middleware function as a _parameter_ to the route handling function that requires restricted access. For example:

```js
function randomDeny(req, res, next) {
  let allowed = Math.floor(Math.random() * 2); // 0 or 1

  if (allowed) {
    next();
  } else {
    res.status(403).send('Access Denied');
  }
}

app.get('/secure', randomDeny, (req, res) => {
  res.send('Welcome!');
});
```

Here, we have implemented our middleware function as "randomDeny", which randomly generates either a 0 or 1. If a 1 is generated, the "next()" function is invoked, allowing the route to be processed as normal. However, if a 0 is generated, a response, including the [403 - Forbidden](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403) error code is generated, informing the user that they do not have access (we could also redirect them to a "login" or "register" page, etc).

To ensure that this middleware function only affects the "/secure" route, we place it as the second parameter _before_ the callback function.

### 404 Errors

As a final example of how to implement middleware in our server.js code - let's create a custom "404" error to send to the client if it has requested an unknown route (ie: a route that we have not created a handler for):

```js
// Other route handlers, middleware, etc ...

app.use((req, res, next) => {
  res.status(404).send("404 - We're unable to find what you're looking for.");
});

// app.listen()
```

Here, we have created a middleware function using the familiar "use()" function. However, the main difference is where it is placed, ie: _below_ all of our other middleware functions / route handlers. By placing it in this way, we can ensure that it _only_ gets executed if none of the other route handlers return a response to the client.

## Types of Middleware

Now that we have seen how middleware is typically implemented within an Express application, let's quickly review the 5 types of middleware available:

### Application-Level Middleware

[Application-level middleware](http://expressjs.com/en/guide/using-middleware.html#middleware.application) is bound to your entire application and can run when every request comes in or only when it matches a specified route.

In the examples above, we have implemented "Application-level middleware".

### Router-Level Middleware

[Router-level middleware](http://expressjs.com/en/guide/using-middleware.html#middleware.router) works the same way as application middleware but is attached to a separate router instance. Essentially, instead of "app.use()", a separate `express.Router()` instance is created and the middleware is applied to it, ie:

```js
const userRouter = express.Router();

userRouter.use((req, res, next) => {
  console.log('userRouter Middleware!');
  next();
});
```

> For more information on express.Router(), see the official documentation in the official Express [Routing](https://expressjs.com/en/guide/routing.html) documentation.

### Error-Handling Middleware

[Error-handling middleware](http://expressjs.com/en/guide/using-middleware.html#middleware.error-handling) is defined with 4 parameters in the callback function, ie: (err, req, res, next). We must specify all 4 parameters so that express can differentiate it from a regular middleware function. Error handling middleware is invoked either when a regular middleware function calls next(err) instead of next(), or when exceptions occur in your route handlers. Like our "404" example above, error handling middleware should be placed _below_ your route handlers. For example:

```js
app.get('/error-test', (req, res) => {
  throw new Error('Error Test');
});

app.use((err, req, res, next) => {
  res.status(500).send(`500 - ${err.message}`);
});
```

### Built-In Middleware

There are three types of [built-in middleware](http://expressjs.com/en/guide/using-middleware.html#middleware.built-in) functions available for us to use:

#### express.static()

This is what we used when sending "static" files (ie: "css" files, images, etc) in the ["CSS & Images"](Web-Server-Introduction/simple-web-server-using-expressjs.md#css--images) section of the "Simple Web Server using Express.js" notes, ie:

```js
app.use(express.static('public'));
```

#### express.json()

This is used to parse "JSON" formatted payloads, and make the result available on the "req" object. For example:

```js
app.use(express.json());

app.post('/json-test', (req, res) => {
  res.send(req.body);
});
```

#### express.urlencoded()

This is nearly identical to "express.json", except this is used to parse data from a web form using the default "enctype", (ie: "application/x-www-form-urlencoded").

> **NOTE:** The “extended” option utilizes the "qs" library which enables rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded. For more information, please see the [qs library](https://www.npmjs.org/package/qs#readme).

```js
app.use(express.urlencoded({ extended: true }));

app.post('/urlencoded-test', (req, res) => {
  res.send(req.body);
});
```

### Third-Party Middleware

Since Express 4.x, previously included middleware that did common things such as handle cookies, or handle file uploads, have been moved to individual [third-party middleware](https://expressjs.com/en/guide/using-middleware.html#middleware.third-party) packages.

For example, parsing cookies requires the installation of [cookie-parser](https://expressjs.com/en/resources/middleware/cookie-parser.html):

```bash
$ npm install cookie-parser
```

```js
const cookieParser = require('cookie-parser');

// load the cookie-parsing middleware
app.use(cookieParser());
```

> For a list of supported, third party middleware, refer to the [official documentation](http://expressjs.com/en/resources/middleware.html).
