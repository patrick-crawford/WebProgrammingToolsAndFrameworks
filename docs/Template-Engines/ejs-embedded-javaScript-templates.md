---
id: ejs-embedded-javaScript-templates
title: EJS (Embedded JavaScript Templates)
sidebar_position: 2
description: EJS (Embedded JavaScript Templates)
---

# EJS (Embedded JavaScript Templates)

[EJS](https://ejs.co/) is described as "a simple templating language that lets you generate HTML markup with plain JavaScript. No religiousness about how to organize things. No reinvention of iteration and control-flow. It's just plain JavaScript."

It contains features that will help us generate HTML that renders complex data. For example, consider the problem with our “/viewData” route from the [introduction](Template-Engines/introduction.md); we can leverage the EJS template engine to write a simple (separate) HTML5 document that references the data using special delimiters, ie: `<%=` and `%>`, rather than returning a long, complex string from our route handler.

## Getting Started

To begin, create the following file in your “views” directory and name it “viewData.ejs”:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>View Data</title>
  </head>

  <body>
    <table border="1">
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Occupation</th>
        <th>Company</th>
      </tr>
      <tr>
        <td><%= data.name %></td>
        <td><%= data.age %></td>
        <td><%= data.occupation %></td>
        <td><%= data.company %></td>
      </tr>
    </table>
  </body>
</html>
```

This is a much cleaner approach. We no longer have to generate the full page as a string within our “/viewData” route and most importantly, all of the **view** logic (HTML) is separate from our **control** logic (routing).

In order to set this up correctly and get express to understand the file above, we need to modify our server code slightly:

1.  The first thing that we need to do is download / install the EJS package using NPM. Open a terminal in Visual Studio Code (ctrl + \` or View -> Integrated Terminal) and make sure that your working directory is somewhere within your project and run the command

    ```bash
    npm install ejs
    ```

    This will install the "ejs" package in the same way that we installed the "express" package and update the dependencies in our package.json file:

    ```json
    "dependencies": {
      "ejs": ...,
      "express": ..."
    }
    ```

2.  Next, our server needs to know how to handle HTML files that are formatted using ejs, so near the top of our code (after we define our "app"), add the line:

    ```js
    app.set('view engine', 'ejs');
    ```

    This will tell our server that any file with the ".ejs" extension (instead of ".html") will use the EJS "engine" (template engine).

3.  The final step involves updating our "/viewData" route to "render" our EJS file with the data:

    ```javascript
    app.get('/viewData', function (req, res) {
      let someData = {
        name: 'John',
        age: 23,
        occupation: 'developer',
        company: 'Scotiabank',
      };

      res.render('viewData', {
        data: someData,
      });
    });
    ```

Now, the route no longer returns a string consisting of our HTML + data using res.send(), but instead invokes the [render](http://expressjs.com/en/api.html#res.render) method on the [response](http://expressjs.com/en/api.html#res) object (res). We pass the name of our new file without the extension (ie: "viewData" instead of "viewData.ejs"), and a "data" object to hold all of our data (someData).

## EJS Syntax

Before we begin to discuss the more advanced features of EJS, we must first become familiar with the syntax. For example, we have seen that `<%= ... %>` is used to render a specific value within our template. However, we should understand that this delimiter ("tag"), _also_ escapes any HTML contained in the value (ie: "&lt;br /&gt;" will be rendered as "&amp;lt;br /&amp;gt;" so that it appears as text, _instead_ of a new line).

The `<%= ... %>` is not the only delimiter available to us. EJS also provides a number of _opening_ and _closing_ delimiters ("tags") that control how a value is rendered within the template.

### Delimiters (Tags)

- **`<%= ... %>`** (HTML Escaped)

  As we have seen, this tag outputs the value into the template (HTML escaped). For example: `<br />` will be rendered as: `&lt;br /&gt;`, when using the tag:

  ```html
  <%= someValue %>
  ```

- **`<%- ... %>`** (Unescaped)

  This tag works exactly as the above `<%=` tag, except the value is _not_ HTML escaped.For example: `<br />` will be rendered as: `<br />`, when using the tag:

  ```html
  <%- someValue %>
  ```

- **`<%# ... %>`** (Comment)

  This tag is used when we wish add a comment to our templates that will **not** be output in the final HTML, ie:

  ```html
  <%# This is a comment that will not be rendered %>
  ```

- **`<% ... %>`** (Scriptlet)

  This is the tag that will enable us to insert **logic** into our templates (discussed further down). For example, if our "data" object contained an array of colors, ie: `['red','green','blue]`, we could use the following "scriptlet" tags to render the contents using a "forEach" loop:

  ```ejs
  <% data.colors.forEach((color) => { %>
    <%= color %>
  <% }) %>
  ```

> **NOTE:** Delimiters that output a value (ie "HTML escaped" / "unescaped") are also capable of executing JavaScript expressions. For example, if "someValue" is a string, we could use the following code:
>
> `<%= someValue.toUpperCase() %>`

### Includes / "Partials"

When using EJS, it is also possible to place reusable blocks of our user interface in separate files, such as a common header or an in-page modal window / dialog box. To achieve this, EJS uses an "include" function that may be used in one of the output tags (ie: "HTML escaped" or "unescaped", however since these included .ejs files typically use HTML, the "unescaped" delimiter is more commonly used).

To see how this works in practice, we will create a "partials" folder within the "views" folder (this will help us separate the reusable templates, from the "page" templates)

Next, (within the "partials" folder) create a file called **"header.ejs"**:

```html
<h1>EJS Practice - <%= page %></h1>
<hr />
<a href="/">Home</a> | <a href="/about">About</a> | <a href="/viewData">View Data</a>
<hr />
<br />
```

Notice how our partial template includes a block of reusable HTML as well as an "HTML escaped" tag to render a variable called "page". To render this template _inside_ another template, we can use the aforementioned "include" function:

**File: viewData.ejs**

```html
<%- include('partials/header', {page: '/viewData'}) %>
```

Here, we have used the "unescaped" delimiter to ensure that the HTML within the "partial" is correctly rendered. Additionally, the second parameter contains an object that we an pass to our partial (in this case, the value of the "page" variable)

> **NOTE:** Partial views have access to the data in the template in which they are placed. For example, if the "header" partial (above) was placed in the viewData template, it would have access to the "data" object and could render "data.name", for example

## Logic

Using the "Scriptlet" delimiter (ie: `<% ... %>`), we can easily insert JavaScript code into our templates. This is one of the key benefits of using EJS:

> "We love JavaScript. It's a totally friendly language. All templating languages grow to be Turing-complete. Just cut out the middle-man, and use JS!
>
> [https://ejs.co](https://ejs.co/)

### if / else

To conditionally render portions of our template (HTML), we can use a simple if / else statement. To get this to work correctly, each "line" of JavaScript code should be placed inside a scriptlet delimiter. For example, say we wish to conditionally show our developer "John":

```javascript
let someData = {
  name: 'John',
  age: 23,
  occupation: 'developer',
  company: 'Scotiabank',
  visible: true,
};
```

Notice, we have added a "visible" property that we can reference before we render "someData" in our view. Using a simple if / else statement, we can easily hide or show rows in the table:

**File: viewData.ejs**

<!-- prettier-ignore-start -->
```html
<% if (data.visible) { %>
  <tr>
    <td><%= data.name %></td>
    <td><%= data.age %></td>
    <td><%= data.occupation %></td>
    <td><%= data.company %></td>
  </tr>
<% } else { %>
  <tr>
    <td colspan="4">User: '<%= data.name %>' has hidden their information</td>
  </tr>
<% } %>
```
<!-- prettier-ignore-end -->

### Iterating over Collections

In addition to conditionally rendering portions of our templates, we may also need to display the content of an array / collection. This may be done using the usual constructs, ie "for", "for...of", "while", "forEach()", etc. For example, if our someData object contained an **array** of objects:

```js
let someData = [
  {
    name: 'John',
    age: 23,
    occupation: 'developer',
    company: 'Scotiabank',
  },
  {
    name: 'Sarah',
    age: 32,
    occupation: 'manager',
    company: 'TD',
  },
];
```

we could use the "forEach()" method to display each object in our table:

**File: viewData.ejs**

<!-- prettier-ignore-start -->
```html
<% data.forEach(user=>{ %>
  <tr>
    <td><%= user.name %></td>
    <td><%= user.age %></td>
    <td><%= user.occupation %></td>
    <td><%= user.company %></td>
  </tr>
<% }) %>
```
<!-- prettier-ignore-end -->

Please note that we are not limited to the forEach() loop when iterating over data. As mentioned above, we could also use another construct, such as the "for...of" loop:

<!-- prettier-ignore-start -->
```html
<% for (const user of data){ %>
  <tr>
    <td><%= user.name %></td>
    <td><%= user.age %></td>
    <td><%= user.occupation %></td>
    <td><%= user.company %></td>
  </tr>
<% } %>
```
<!-- prettier-ignore-end -->

### "Nesting" Logic

The "scriptlet" tag is extremely powerful - it let's us inject JavaScript into our views to control how our data is displayed. In the above examples, we have only used single pieces of logic at a time (ie: "if/else", "forEach()", etc), but it is also possible that this logic may be "nested".

For example, maybe each of our "users" in the "someData" array has a "visible" property as well. We would like to render each of the elements in the array, but **also** hide a user if their visible property is set to _false_

```js
let someData = [
  {
    name: 'John',
    age: 23,
    occupation: 'developer',
    company: 'Scotiabank',
    visibility: false,
  },
  {
    name: 'Sarah',
    age: 32,
    occupation: 'manager',
    company: 'TD',
    visibility: true,
  },
];
```

**File: viewData.ejs**

<!-- prettier-ignore-start -->
```html
<% for (const user of data){ %>
  <% if(user.visible){ %>
    <tr>
      <td><%= user.name %></td>
      <td><%= user.age %></td>
      <td><%= user.occupation %></td>
      <td><%= user.company %></td>
    </tr>
  <% }else{ %>
    <tr>
      <td colspan="4">User: '<%= user.name %>' has hidden their information</td>
    </tr>
  <% } %>
<% } %>
```
<!-- prettier-ignore-end -->

## Layouts

EJS does not natively support "layouts". Typically, the structure of an application using EJS as its template engine will feature a common "header, "footer", "sidebar", etc with every page, ie:

<!-- prettier-ignore-start -->
```html
<body>
  <%- include('header') %>

  <%# Page Content / Data Here %>

  <%- include('footer') %>
</body>
```
<!-- prettier-ignore-end -->

If you wish to customize the 'header' or 'footer' based on the current page, data can be sent to each of the partials separately. For example, one common task is for a navigation bar within the 'header' to highlight the link for the current page. For example, if the user is currently viewing the "/about" route, then "About" should be highlighted:

**File: header.ejs**

<!-- prettier-ignore-start -->
```html
<h1>EJS Practice - <%= page %></h1>
<hr />
<a href="/">Home</a> | <a href="/about"><strong>About</strong></a> | <a href="/viewData">View Data</a>
<hr />
<br />
```
<!-- prettier-ignore-end -->

To achieve this, we can pass the current route to the partial view. Currently, we are passing this value as "page":

**File: viewData.ejs**

```html
<%- include('partials/header', {page: '/viewData'}) %>
```

Therefore, we can leverage the "unescaped" tag to conditionally highlight each of the options using the "ternary" operator, by checking the "href" attribute against the "page" value:

<!-- prettier-ignore-start -->
```html
<h1>EJS Practice - <%= page %></h1>
<hr />
  <a href="/"><%- (page=="/") ? '<strong>Home</strong>' : 'Home' %></a> |
  <a href="/about"><%- (page=="/about") ? '<strong>About</strong>' : 'About' %></a> |
  <a href="/viewData"><%- (page=="/viewData") ? '<strong>View Data</strong>' : 'View Data' %></a>
<hr />
<br />
```
<!-- prettier-ignore-end -->

> **NOTE:** If you wish to use EJS with full layout support, consider the NPM package: [express-ejs-layouts](https://www.npmjs.com/package/express-ejs-layouts)
