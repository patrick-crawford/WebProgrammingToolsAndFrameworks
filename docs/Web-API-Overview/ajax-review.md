---
id: ajax-review
title: AJAX Review
sidebar_position: 2
description: AJAX Review
---

# AJAX Review

**AJAX (Asynchronous JavaScript and XML)** can be described as a collection of technologies used together to create a richer user experience by enabling data to be transferred between a web client (browser) and web server without the need to refresh the page:

> Ajax, is not a technology in itself, but rather an approach to using a number of existing technologies together, including HTML or XHTML, CSS, JavaScript, DOM, XML, XSLT, and most importantly the XMLHttpRequest object. When these technologies are combined in the Ajax model, web applications are able to make quick, incremental updates to the user interface without reloading the entire browser page. This makes the application faster and more responsive to user actions. Ajax's most appealing characteristic is its "asynchronous" nature, which means it can communicate with the server, exchange data, and update the page without having to refresh the page.
>
> Although X in Ajax stands for XML, JSON is preferred because it is lighter in size and is written in JavaScript. Both JSON and XML are used for packaging information in the Ajax model.
>
> [https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX)

## AJAX Introduction: The Fetch API

In modern browsers, we can use the ["Fetch API"](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to make AJAX requests. Essentially, we can configure a **new Request** by providing two parameters:

- The location of the resource
- A set of "options", (defined using "object literal" notation)

The "location" parameter is simply the URI of the resource, ie: "[https://jsonplaceholder.typicode.com/users/](https://jsonplaceholder.typicode.com/users/)", while the "options" parameter could contain any number of options, including:

- The http method, ie: 'POST'
- The 'body' of the request, ie: `JSON.stringify({user:"John Doe", job:"unknown"})`
- An object consisting of a number of headers, ie: `{"Content-Type": "application/json"}`
- And [Many Others](https://developer.mozilla.org/en-US/docs/Web/API/Request#Properties)

In practice, this would look something like this:

```javascript
let myRequest = new Request('https://jsonplaceholder.typicode.com/users/', {
  method: 'POST',
  body: JSON.stringify({ username: 'jDoe', name: 'John Doe' }),
  headers: {
    'Content-Type': 'application/json',
  },
});
```

Once the request is configured, we can "Fetch" the data using "fetch()" with our request. This "fetch" method will return a promise that resolves with a "[response](https://developer.mozilla.org/en-US/docs/Web/API/Response)" object that has a number of [methods](https://developer.mozilla.org/en-US/docs/Web/API/Response#static_methods), including:

- **response.text()** - which we can use to read the 'response' stream. This method returns a promise that will resolve with text.
- **response.json()** - which we can use to read the 'response' stream. This method returns a promise that will resolve with an object.

To execute the request defined above (ie: myRequest), we can wire up the "fetch" using the following code (assuming that our resource is returning JSON-formatted data).

```javascript
fetch(myRequest)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log(json); // here is the parsed JSON response
  });
```

### AJAX: The Fetch API (Compressed)

To save lines and make your code more readable and concise, the above two pieces of code can be combined, ie:

```javascript
fetch('https://jsonplaceholder.typicode.com/users/', {
  method: 'POST',
  body: JSON.stringify({ username: 'jDoe', name: 'John Doe' }),
  headers: { 'Content-Type': 'application/json' },
})
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  });
```
:::info
Our code is even shorter if we're simply doing a "GET" request, ie:

```javascript
fetch('https://jsonplaceholder.typicode.com/users/')
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  });
```
:::

## Handling Responses with an "Error" Status

If we wish to handle a situation where the fetch fails, we can always add a catch statement at the end of the above code. However, it is important to note that if the response itself was successful (ie a connnection was made and a response was returned), then the "catch" callback code will not be executed _even if_ the response status code indicates an error, ie 500 or 404. To handle these situations, we can leverage a method on the response object callded "ok" (see: [response.ok](https://developer.mozilla.org/en-US/docs/Web/API/Response/ok)) which will be true if the status code of the response was in the **200 range**. Practically speaking, it can be used like this:

```javascript
fetch('https://jsonplaceholder.typicode.com/unknown')
  .then((response) => {
    // return a rejected promise with the status code of the response if it wasn't "ok"
    return response.ok ? response.json() : Promise.reject(response.status);
  })
  .then((json) => {
    console.log(json);
  })
  .catch((err) => {
    console.log(err);
  });
```
