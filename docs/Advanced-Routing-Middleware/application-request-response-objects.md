---
id: application-request-response-objects
title: Application, Request & Response Objects
sidebar_position: 1
description: Application, Request & Response Objects
---

# Application, Request & Response Objects

Express.js makes it very straightforward to get a web server running on a given port and responding to simple "get" requests (ie: `GET / HTTP/1.1`):

```js
const express = require('express');
const app = express();

const HTTP_PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(HTTP_PORT, () => console.log(`server listening on: ${HTTP_PORT}`));
```

From the above code, it is clear that there are three important objects that are used to configure the server: `app`, `req` and `res`. Let's discuss these objects in detail and how we can use them to handle more complicated scenarios, such as route / query parameters, cookies and custom errors.

## The Application object

The ["app"](https://expressjs.com/en/api.html#app) object in the example above represents the express main application object. It contains several methods for tasks, such as processing route requests, setting up middleware, and managing html views or view engines.

In the above example, we set a route on the host to handle HTTP GET requests to “/”. This means any "GET" requests to localhost:8080/ will be sent to this function. A typical route handler in express (like the one above) is created by invoking a function on the app object using the HTTP method (verb) that matches the type of request and passing it two parameters: a string representing the route, and a callback function to invoke when the route is matched. In this case, we wish to handle GET requests for the default route "/" (typically requests from the browser to load the page initially).

Here are some of the commonly used application properties and methods that we will use throughout these notes.

### app.all()

This method is used to register a single callback for a route that matches _any_ [HTTP Method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) IE: GET, PUT, POST, DELETE, etc.

```js
app.all('/http-testing', (req, res) => {
  res.send('test complete');
});
```

### HTTP Verb Methods

We can also respond to a request a callback for a route using a _single_ HTTP Method (ie: `app.get()` from our [Simple Web Server using Express.js](Web-Server-Introduction/simple-web-server-using-expressjs.md#simple-get-routes) example):

```js
app.get('/get-test', (req, res) => {
  res.send('GET Test Complete');
});

app.put('/put-test', (req, res) => {
  res.send('PUT Test Complete');
});

app.post('/post-test', (req, res) => {
  res.send('POST Test Complete');
});

app.delete('/delete-test', (req, res) => {
  res.send('DELETE Test Complete');
});

// etc.
```

### app.locals

The "locals" property allows you to attach local variables to the application, which persist throughout the life of the app. You can access local variables in templates rendered within the application (discussed in ["Template Engines"](Template-Engines/introduction.md)).

```js
app.locals.title = 'My App';
```

### app.listen()

As we have seen, this function is used to start the HTTP server listening for connections on a specific port, ie:

```js
const HTTP_PORT = process.env.PORT || 8080;

// (route handlers / middleware) ...

app.listen(HTTP_PORT, () => {
  console.log('server listening on: ' + HTTP_PORT);
});
```

### app.set()

The "set" method assigns a value to a specific "setting". According to the documentation, you may store any value that you want in your own custom "setting", however [certain settings](https://expressjs.com/en/5x/api.html#app.settings.table) can be used to configure the behavior of the server. For example, we will be setting the value of the "view engine" setting when configuring our template engine.

### app.use()

The **_use_** method is used to add middleware to your application. Middleware consists of functions (typically placed before the route handlers) that automatically execute either when a specified path is matched or globally before every request. This is very useful when you want to do something with every request like add properties to the request object or check if a user is logged in.

This is discussed further in the next section: ["Middleware"](Advanced-Routing-Middleware/middleware.md)

## The Request object

The ["req"](https://expressjs.com/en/api.html#req) object represents the object that contains all the information and metadata for the request sent _to_ the server. When you see examples of the request object in use, it will typically be referred to as ‘req’ (short for request object).

Some of the commonly used request properties and methods used throughout these notes are:

### req.body

The req.body property contains the data submitted as part of request. It requires that you use a "body parsing" middleware (discussed in: ["Middleware"](Advanced-Routing-Middleware/middleware.md)) which will attach data (properties) to req.body. If you post data in your request, this is how you access that data.

```js
app.post('/urlencoded-test', (req, res) => {
  res.send(req.body);
});
```

### req.cookies

If we wish to read the value specific "cookie" value, ie:

> "a small piece of data that a server sends to a user's web browser. The browser may store the cookie and send it back to the same server with later requests."
>
> [https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

we can reference it using the corresponding property on the "req.cookies" object:

```js
// Cookie: name=tj
console.log(req.cookies.name); // "tj"
```

However, like "req.body" above, we must use a ("cookie parsing") middleware function to populate "req.cookies" with data from the cookie

### req.params

The "params" property is used when we wish to read the values of "Route Parameters" defined in our route handlers:

> "Route parameters are named URL segments used to capture values at specific positions in the URL. The named segments are prefixed with a colon and then the name (E.g., /:your_parameter_name/)."
>
> [https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes#route_parameters](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes#route_parameters)

For example, if we wish to match all GET requests for the route "/employee/**employeeNum**", where **employeeNum** can be _any_ value, ie: "123", "abc456", etc, we can use the following code:

```js
app.get('/employee/:employeeNum', (req, res) => {
  res.send(`Employee Number: ${req.params.employeeNum}`);
});
```

### req.query

The "query" property is needed when we wish to read the values of the "query string" in the url:

> A query string is a part of a uniform resource locator (URL) that assigns values to specified parameters. A query string commonly includes fields added to a base URL by a Web browser or other client application, for example as part of an HTML document, choosing the appearance of a page, or jumping to positions in multimedia content
>
> A typical URL containing a query string is as follows: `https://example.com/over/there?name=ferret`
>
> [https://en.wikipedia.org/wiki/Query_string](https://en.wikipedia.org/wiki/Query_string)

For example, if we wanted to match a GET request for the route "/products" that _also_ supports the optional query string value "onsale", ie: "/products?onsale=true", we could use the code:

```js
app.get('/products', (req, res) => {
  let result = 'all Products';

  // NOTE: query parameter values are always strings

  if (req.query.onsale == 'true') {
    result += ' (on sale)';
  }

  res.send(result);
});
```

When designing route handlers that can accept query string values, we do not include them in the "route" (ie: "/products"). Additionally, since the route will match _without_ the "onSale" query sting value, it is important to return a value if it's missing (ie: "all Products" or an error if the query parameter _must_ be present)

:::info
Multiple query parameters may also be used, and are separated by an ampersand, "&": `https://example.com/path/to/page?name=ferret&color=purple`
:::

### req.get()

req.get() is necessary for checking the values of specific HTTP headers sent with the request. For example:

```js
app.get('/hello', (req, res) => {
  res.send(`Hello ${req.get('user-agent')}`);
});
```

Here, when a user requests the "/hello" route, they should see the text "Hello" followed by the content of the ["user-agent"](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent) header sent with the request.

## The Response object

The ["res"](https://expressjs.com/en/api.html#res) object represents the object that contains all the information and metadata for a response sent _from_ the server. When you see examples of the response object in use it will typically be referred to as ‘res’ (short for response object). The data you send back from the server can be one of several different formats - the most common of which are HTML, JSON, CSS, JS and plain files (.pdf, .txt, .jpg, .png, etc).

Some of the commonly used response properties and methods used throughout these notes are:

### res.cookie()

This allows you to send a cookie with the response, specified using a name = value key pair. You can set the value to a string / object using JSON notation and it will be included in the "Set-Cookie" header of the response. For example:

```js
app.get('/cookie-test', (req, res) => {
  res.cookie('message', 'Hello World!');
  res.send('Cookie Sent!');
});
```

### res.set()

res.set() enables you to set the values of specific / custom HTTP headers sent with the request. For example:

```js
app.get('/custom', (req, res) => {
  res.set('Custom-Header', 'MyValue');
  res.send(`Custom-Header Sent`);
});
```

### res.end()

res.end() is used you want to end a response immediately and send nothing back. For example, we may wish to send a ["204 - No Content"](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204) status code, which indicates that "a request has succeeded, but that the client doesn't need to navigate away from its current page". For example:

```js
app.put('/update', (req, res) => {
  // ... (update logic)
  res.status(204).end();
});
```

### res.redirect()

The res.redirect() method is used to perform a redirect to another page on your site, go back to the previous page, or redirect to another domain. For example:

```js
app.get('/to-google', (req, res) => {
  res.redirect('https://www.google.ca/');
});
```

### res.send()

This is the primary response method to send a response to the client. You can send a String, Object, Array, or even a Buffer object back to the client. The send() method will automatically set the Content-Type header for you based on the type of data sent. For example:

```js
app.get('/json-test', (req, res) => {
  res.send({ message: 'Hello World!' }); // Content-Type: application/json; charset=utf-8
});

app.get('/plain-text-test', (req, res) => {
  res.send('Hello World!'); // Content-Type: text/html; charset=utf-8
});
```
:::info
When sending a JavaScript object back (as in the example above), the "send()" method will internally convert it to a JSON-formatted string
:::

### res.sendFile()

As we have seen, this function is used when we wish to send a file (typically .html) back to the client. We use [path.join()](https://nodejs.org/api/path.html#pathjoinpaths) to safely join [\_\_dirname](https://nodejs.org/docs/latest/api/modules.html#__dirname) with the path of the file to be sent. This function also correctly sets the Content-Type response HTTP header based on the file extension. For example:

```js
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/home.html'));
});
```

### res.status()

res.status() is used to set a specific status code for the response (as seen above in the [res.end()](Advanced-Routing-Middleware/application-request-response-objects.md#resend) example). This will be useful when handling client / server errors and setting [4xx](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses) / [5xx](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses) series error codes. More detail is discussed in the following ["Middleware"](/Advanced-Routing-Middleware/middleware.md) section.
