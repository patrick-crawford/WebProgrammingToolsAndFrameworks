---
id: introduction
title: Introduction
sidebar_position: 1
description: Introduction
---

# Introduction

Express.js is a powerful library for helping us create web servers in Node.js. In very few lines of code we can send / receive data in a way that is very straightforward and easy to understand. Recall our first example, where we were able to create two routes: "/" and "/about", each corresponding to a specific response from our server:

```js
const express = require('express');
const app = express();
const path = require('path');

const HTTP_PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send("Hello World<br /><a href='/about'>Go to the about page</a>");
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/about.html'));
});

app.listen(HTTP_PORT, () => {
  console.log(`server listening on: ${HTTP_PORT}`);
});
```

In the above example, we make use of the **get** method of the app object to define a route and a callback function that's executed when the route is encountered. We can leverage the 2nd parameter "res" to send either an HTML formatted string (for route "/"), or a static html page (for route "/about").

If we wanted to send (JSON formatted) data only, we can use the following route (/getData):

```js
app.get('/getData', function (req, res) {
  let someData = {
    name: 'John',
    age: 23,
    occupation: 'developer',
    company: 'Scotiabank',
  };

  res.send(someData);
});
```

This will return the JSON-formatted string:

```json
{ "name": "John", "age": 23, "occupation": "developer", "company": "Scotiabank" }
```

The important thing to notice here is that our server can return HTML formatted strings, static HTML (.html) files, and JSON data.

## Returning HTML & Data

If we want to return a valid HTML5 page to the client that actually references data stored on the server, one solution would be to build a string that contains both **HTML code** and **data**, ie:

```js
app.get('/viewData', function (req, res) {
  let someData = {
    name: 'John',
    age: 23,
    occupation: 'developer',
    company: 'Scotiabank',
  };

  let htmlString = `<!doctype html>  
                  <html> 
                      <head>  
                          <title>View Data</title> 
                      </head> 
                      <body>  
                          <table border='1'>  
                              <tr>  
                                  <th>Name</th>  
                                  <th>Age</th>  
                                  <th>Occupation</th>  
                                  <th>Company</th>  
                              </tr>  
                              <tr>  
                                  <td>${someData.name}</td>  
                                  <td>${someData.age}</td>  
                                  <td>${someData.occupation}</td>  
                                  <td>${someData.company}</td>  
                              </tr>  
                          </table>  
                      </body>  
                  </html>`;

  res.send(htmlString);
});
```

While this will work to send a valid HTML5 page containing our data back to the client, it's clearly not the best way to approach this problem. What if we had a complex page that contains data in different places throughout the layout? We would be building out an enormous string containing normal, static html and in a few places, inserting a reference to our data (someData object). Wouldn't it be better if we could just write a normal HTML document that **references** the data, instead of having to build one huge string for the whole page?

## Template Engines

Fortunately, we can leverage ["template engines" with Express](https://expressjs.com/en/guide/using-template-engines.html) to solve this exact problem. From the express.js documentation:

> A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.

This sounds like exactly what we need and there are a number of popular options that we can choose from, such as:

- ["Pug"](https://pugjs.org/api/getting-started.html)
- ["Express Handlebars"](https://www.npmjs.com/package/express-handlebars)
- ["EJS"](https://ejs.co)

In the next section, we will take a look at "EJS":

> A simple templating language that lets you generate HTML markup with plain JavaScript. No religiousness about how to organize things. No reinvention of iteration and control-flow. It's just plain JavaScript.
