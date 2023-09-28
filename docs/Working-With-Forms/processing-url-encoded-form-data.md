---
id: processing-url-encoded-form-data
title: Processing URL Encoded Form Data
sidebar_position: 2
description: Processing URL Encoded Form Data
---

# Processing URL Encoded Form Data

Once we have completed the HTML to correctly **render** our &lt;form&gt; element, we can concentrate on handling the form submission within our server logic.

Let's begin by first creating a [Simple Web Server using Express.js](Web-Server-Introduction/simple-web-server-using-expressjs.md) that returns a valid HTML document for the "/" route. Somewhere in the &lt;body&gt; of this document, create a simple form using controls from our [HTML Form Elements Review](Working-With-Forms/html-form-elements-review.md), for example:

```html
<form method="post" action="/addEntry">
  Full Name<br />
  <input type="text" name="fullName" /><br /><br />

  Blog Entry<br />
  <textarea name="blogEntry"></textarea><br /><br />

  Pet<br />
  <select name="pet">
    <option value="">-- Please choose an option --</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option></select
  ><br /><br />

  Transportation<br />
  <select multiple name="transportation">
    <option value="car">Car</option>
    <option value="motorcycle">Motorcycle</option>
    <option value="bus">Bus</option>
    <option value="jet">Private Jet</option></select
  ><br /><br />

  Fast Food<br />
  <label><input type="radio" name="fastFood" value="hamburger" /> Hamburger </label><br />
  <label><input type="radio" name="fastFood" value="pizza" /> Pizza </label><br />
  <label><input type="radio" name="fastFood" value="sandwich" /> Sandwich </label><br /><br />

  <label><input type="checkbox" name="active" /> Active </label><br /><br />

  <input type="hidden" name="productID" value="193774" />

  <button type="submit">Submit</button>
</form>
```

Notice how the form element has _omitted_ the "enctype" attribute on the "form" element, as well as updated the action to `"/addEntry"` (instead of `"https://httpbin.org/post"`). This is because we will be using the **default** enctype ("application/x-www-form-urlencoded") and we wish to process the form on our own server, _instead_ of using "httpbin".

## Body Parsing Middleware

As mentioned in the [Middleware](Advanced-Routing-Middleware/middleware.md) / [Built-In Middleware](Advanced-Routing-Middleware/middleware.md#built-in-middleware) discussion, we require some "preprocessing" on the "req" object, before we can access the form data in our routes. For example, if we were to submit the form now, the **data** sent would look something like this:

```
fullName=John+Smith&blogEntry=Cool+Blog&pet=cat&transportation=car&transportation=bus&fastFood=pizza&active=on&productID=193774
```

While it does contain the data from the form, it is very difficult to work with and requires manual parsing of the string. Instead, we would prefer an object in memory:

```js
{
  fullName: "John Smith",
  blogEntry: "Cool Blog",
  pet: "cat",
  transportation: [ "car", "bus" ],
  fastFood: "pizza",
  active: "on",
  productID: "193774"
}
```

This is where "Middleware" comes in, ie: perform some processing on the HTTP Request "body" data, before sending it to our route handlers in the "req" object.

To achieve this, we can use the built-in middleware: [express.urlencoded()](Advanced-Routing-Middleware/middleware.md#expressurlencoded):

```js
app.use(express.urlencoded({ extended: true }));
```

## Writing The Route Handler

In the example above, the form "action" attribute is set to "/addEntry". If the form were to be submitted now, Express would return a "404" error with a response containing the text "Cannot POST /addEntry".

To remedy this, create a "POST" route for "/addEntry":

```js
app.post('/addEntry', (req, res) => {
  res.send(req.body);
});
```

once the "/addEntry" route is in place (beneath our "express.urlencoded()" middleware), we can try submitting the form again. This time, we should see the form data rendered as JSON in the browser.

### Special Consideration ("checkbox")

As previously mentioned in the ["checkbox" section](Working-With-Forms/html-form-elements-review.md#checkbox) of the "HTML Form Elements Review", checkboxes submit the string "on" when checked and _undefined_ when unchecked. Instead, we would prefer that the value be _true_ or _false_. As a simple fix for this, we can add the following code:

```js
req.body.active = req.body.active ? true : false;
```

Here, we see if the "active" value is [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) (ie: not false, 0, -0, 0n, "", null, undefined, or NaN) and if it is, set it explicitly to "true". If the value is "falsy" (ie: _undefined_), then set it explicitly to "false".

```js
app.post('/addEntry', (req, res) => {
  req.body.active = req.body.active ? true : false;
  res.send(req.body);
});
```
