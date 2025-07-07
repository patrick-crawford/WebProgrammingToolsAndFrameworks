---
id: simple-web-server-using-expressjs
title: Simple Web Server using Express.js
sidebar_position: 3
description: Simple Web Server using Express.js
---

# Simple Web Server using Express.js

A major focus of these notes going forward will be creating modern web applications using Node.js. While are many ways of accomplishing this task, including using the built-in ['http' module](https://nodejs.org/docs/latest/api/http.html), we will be using the extremely popular ["Express"](https://expressjs.com) web framework, [available on NPM](https://www.npmjs.com/package/express).

## Project Structure

To get started working with Node.js and Express, we should create a new folder for our application (ie: "MyServer", as used in the below example). Once this is completed, open it in Visual Studio Code and create the following directory structure by adding "public" and "views" folders as well as a "server.js" file:

```
/MyServer
  ↪ /public
  ↪ /views
  ↪ server.js
```

Next, we must open the integrated terminal and create the all-important "package.json" file at the root of our "MyServer" folder, using the command **"npm init"**.

> **NOTE:** You will be using all of the _default_ options when creating your package.json file

Once this is complete, you should have a new package.json file in your MyServer folder that looks like the following:

```json
{
  "name": "myserver",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "author": "",
  "license": "ISC"
}
```

## Express.js

Express.js is described as:

> "a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."

Essentially, it is a Node module that takes a lot of the leg work out of creating a framework to build a website. It is extremely popular in the node.js community with a multitude of developers using it to build websites. It is a proven way to build flexible web applications quickly and easily.

To use it in our project we need to use "npm" to install it. From the integrated terminal in Visual Studio code, enter the command:

```bash
npm i express
```

(where "i" is shorthand for the "install" command).

Once this is complete, you should see that your "package.json" file has a new entry that looks like the following (**NOTE:** Your version may differ from the below):

```json
"dependencies": {
    "express": "^4.18.2"
  }
```

You will also notice that a 2<sup>nd</sup> file was created called "package-lock.json":

> The purpose of package-lock.json is to ensure that the same dependencies are installed consistently across different environments, such as development and production environments. It also helps to prevent issues with installing different package versions, which can lead to conflicts and errors.
>
> [https://www.atatus.com/blog/package-json-vs-package-lock-json/#package-lock-json](https://www.atatus.com/blog/package-json-vs-package-lock-json/#package-lock-json)

Finally, we also now have the aforementioned "node_modules" folder, which not only contains an "express" folder, but also folders for all of the other modules that "express" depends upon, such as "cookie", "encodeurl", "http-errors", etc.

To begin using Express.js, we must first "require" it in our server.js file and execute the code to start our server. As a starting point, you may use the following _boilerplate_ code:

**File: server.js**

```js
const express = require('express'); // "require" the Express module
const app = express(); // obtain the "app" object
const HTTP_PORT = process.env.PORT || 8080; // assign a port

// start the server on the port and output a confirmation to the console
app.listen(HTTP_PORT, () => console.log(`server listening on: ${HTTP_PORT}`));
```

The above code will be used in nearly every server written using "Express" in these notes. As mentioned above, it "requires" the Express module, which is then invoked as a function to get an "app" object, which is used to start our server on a given HTTP Port. The reason that the HTTP_PORT constant is defined as `process.env.PORT || 8080` is because when we move our server online, it will be assigned a different port, using a "PORT" environment variable.

If we now want to start our server, we can simply execute the "server.js" file using node:

```bash
node --watch server.js
```

> **NOTE:** the "--watch" flag will cause Node to run in "watch" mode, which will restart the process when a change is detected

If you open a browser to: `http://localhost:8080`, you should see the following message:

```
Cannot GET /
```

**Congratulations!** Your web server is up and running! Unfortunately, we don't have any "routes" (ie: paths to pages / resources) defined yet, so the Express framework automatically generated a **404** error for the path that we tried to access (ie: GET /)

> **NOTE:** To stop the server from running, you may use the `Ctrl+C` command from the integrated terminal in Visual Studio Code

### Simple 'GET' Routes

As you have seen from running our server, not much is happening. Even if we try to navigate around to other paths such as "http://localhost:8080/about" (thereby making a "GET" request to the "/about" path (route)), we will keep getting the same 404 error: "Cannot GET". This is because we have not defined any "GET" routes within our server.

To fix this, we must write code in our server.js file to correctly _respond_ to these types of requests. This can be accomplished using the ["app"](https://expressjs.com/en/api.html#app) object, that was used to start our server. If we wish to respond to a "GET" request, we must invoke a "GET" function and provide the target path as well as a "callback" function to handle the request. For example, if we wish to respond to a "GET" request on the "/" route, we would write the following code _before_ the call to app.listen();

```js
app.get('/', (req, res) => {
  res.send('Hello World!');
});
```

Here, we have specified a callback function to be executed when our server encounters a "GET" request for the "/" route. It will be invoked with the following parameters:

- ["req"](https://expressjs.com/en/api.html#req): The "request" object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on.
- ["res"](https://expressjs.com/en/api.html#res): "The "response" object represents the HTTP response that an Express app sends when it gets an HTTP request

In the above case, we use the "res" object's ["send"](https://expressjs.com/en/api.html#res.send) method to send a response back to the client.

If we wish to have a second route, all we have to do is add another call to ["app.get()"](https://expressjs.com/en/api.html#app.get.method) with the new path. This is how we will define any path "route" that we wish our server to respond to, when it encounters a "GET" request from a web client (ie: web browser):

```js
app.get('/about', (req, res) => {
  res.send('About the Company');
});
```

Now, we should be able to navigate to both: `http://localhost:8080` and `http://localhost:8080/about` and see the text sent by our server.

### Returning .html Files

Returning plain text is fine to test if our routes are configured properly, however if we want to start making web applications, we should be returning valid HTML documents. To get started, we will create two simple .html files within the "views" folder:

**File: /MyServer/views/home.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home</title>
  </head>
  <body>
    <h1>Welcome Home</h1>
    <p>...</p>
    <p><a href="/about">About the Company</a></p>
  </body>
</html>
```

**File: /MyServer/views/about.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>About</title>
  </head>
  <body>
    <h1>About the Company</h1>
    <p>...</p>
    <p><a href="/">Back Home</a></p>
  </body>
</html>
```

Next, we must update our route definitions to return these documents _instead_ of the simple messages: "Hello World!" and "About the Company". To achieve this, we will be using the ["sendFile()"](https://expressjs.com/en/api.html#res.sendFile) method of the "res" object, _instead_ of "send()".

For "sendFile()" to function correctly, we must provide an **absolute** path to the file we wish to send as a parameter to the function. As you know, we cannot hard-code this path into our server.js, as this path will differ depending on which machine is executing the code - for example: the service the app is deployed on, vs. your local computer.

This is where knowledge of the built-in "path" module and the \_\_dirname global come into play.

At the top of your server file, we will _require_ "path";

```js
const path = require('path');
```

Next, we can update our routes to use "sendFile()" as follows:

```js
res.sendFile(path.join(__dirname, '/views/someFile.html'));
```

where **"someFile.html"** would be any file that you wish to send back to the client, from your "views" folder, ie: "home.html" or "about.html". We use `path.join()` to safely join the "\_\_dirname" path with the local path to the file. Together, this results in an absolute path that is _not_ tied to a specific machine.

### CSS & Images

Now that we know how to send complete HTML files back to the client, the next step is including "static" resources, ie: images, CSS, etc. So far, if we wish to respond to a request from a client we must have an explicit "route" configured. For example, the "/about" route only works because we have defined the corresponding `app.get("/about", ...)` function call. What happens when a request for a static resources is requested? Do we have to have a specific root configured for every resource? Thankfully, the answer is _no_.

Using Express, we can identify a specific folder as "static" and any valid requests for resources contained within that folder are automatically sent back to the client with a 200 status code.

Using our existing project structure, we can use the "public" folder as our static folder and place any static resources in there. For example, if we want a custom CSS file, we could place it in:

```
/MyServer
  ↪ /public
    ↪ /css
      ↪ site.css
```

We could then link to it in our HTML documents the code:

```html
<link rel="stylesheet" href="/css/site.css" />
```

> **NOTE:** The same pattern would work for images as well, ie:
>
> ```
> /MyServer
>   ↪ /public
>     ↪ /img
>       ↪ banner.jpg
> ```
>
> ```html
> <img src="/img/banner.jpg" alt="site banner" />
> ```

Notice how we do not include "/public" in the `href` (or `src`) properties. This is because we will mark "/public" as the official "static" folder and all requests must made to resources _within_ the folder. To accomplish this in our server.js file, we can add the following code _above_ the other `app.get()` function calls:

```js
app.use(express.static('public'));
```

Here, we have used ["express.static()"](https://expressjs.com/en/api.html#express.static) - a built-in [middleware](https://expressjs.com/en/guide/using-middleware.html#middleware.application) function (explained later in these notes) to mark the "public" directory as static. With this code in place, whenever a request is sent to our server, Express will first check to see if the requested resource exists in the "public" folder, before checking our other routes.

## Public Hosting (Vercel)

As a final exercise, review the documentation on ["Getting Started with Vercel"](/Resources/vercel-guide) and see if you can get the server running online!
