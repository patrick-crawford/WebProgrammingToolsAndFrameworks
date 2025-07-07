---
id: what-is-a-ui-toolkit-framework
title: What is a UI Toolkit / Framework?
sidebar_position: 1
description: What is a UI Toolkit / Framework?
---

# What is a UI Toolkit / Framework?

Creating a web site / application that is functional, visually appealing and provides a good user experience can be difficult. In fact, there are entire branches of web application development that focus entirely on the front end and/or user experience ([https://brainstation.io/career-guides/what-is-a-ui-designer](https://brainstation.io/career-guides/what-is-a-ui-designer)). However, when first developing your application, you may not have access to a UI / UX designer and so you must craft the user interface yourself. Fortunately, there are a plethora of resources that can help with this task. The easiest way to build your web application in a way that adheres to fundamental design principles, is to use a pre-built CSS / JS UI toolkit or framework. These typically come with user interface "components" that are styled and ready to use out of the box.

## Popular Frameworks

The following is a list of some popular frameworks and how to quickly get started using them. Typically all we need to do is include their CSS / JS files using a CDN, then reference the documentation for some boilerplate, starter code, ie:

```html
<!-- Create a button in Bootstrap using the "Primary" colour -->
<button type="button" class="btn btn-primary">Primary</button>
```

<!-- Before deciding on one, let's discuss some of the most popular frameworks and how we can utilize them in our web application. For the below frameworks, we will see how common controls are implemented, ie: the "Grid System", "Buttons", "Navbar" and "Forms", using code from the documentation: -->

### Bootstrap

One of oldest and most popular UI frameworks is ["Bootstrap"](https://getbootstrap.com):

> "Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins."

If we wish to incorporate Bootstrap into our projects, we can link to the files directly using the "jsdelivr" Content Delivery Network (CDN):

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
  crossorigin="anonymous"
></script>
```

> **NOTE:** It is important that we include the CDN links _before_ our own CSS / JS.

### Materialize

Back in June, 2014 Google introduced "Material Design":

> "Material Design is an adaptable system of guidelines, components, and tools that support the best practices of user interface design. Backed by open-source code, Material Design streamlines collaboration between designers and developers, and helps teams quickly build beautiful products."
>
> [https://m3.material.io](https://m3.material.io)

A simple way to get started with Material Design is to use ["Materialize"](https://materializecss.com), which is described as a "responsive front-end framework based on Material Design". Essentially, Materialize provides the CSS and JS for components that follow the Material Design guidelines.

To get started using Materialize, we can follow the same strategy as we used for Bootstrap, ie: using the "cloudflare" CDN links directly in our HTML documents:

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
```

### Bulma

Another alternative is ["Bulma"](https://bulma.io): It was released in 2016 and has had a number of releases - at the time of writing, Bulma is at 0.9.4.

> "Bulma is a free, open source framework that provides ready-to-use frontend components that you can easily combine to build responsive web interfaces.
>
> No CSS knowledge required."
>
> [https://bulma.io](https://bulma.io)

You will notice that Bulma does not require any JS to run, making it more straightforward to incorporate into existing projects. It also provides a simple ["modular"](https://bulma.io/documentation/overview/modular) approach to including "only what you need" from the framework.

As with other frameworks on this list, the simplest way to start is to use the minified CSS, available on the ["jsdelivr"](https://www.jsdelivr.com) CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css" />
```

### Foundation

Finally, we should mention ["Foundation"](https://get.foundation/) - a framework released by ["Zurb"](https://zurb.com) back in 2011. It has gone through a number of major releases since then and (at the time of writing) is currently on version 6, released in 2015. Foundation has extensive documentation and while it may be more complex then some of the other frameworks, it has may resources such as ["starter projects"](https://get.foundation/sites/docs/starter-projects.html) and video tutorials to help new users. Interestingly, it also has a version that is used to help design ["responsive HTML emails"](https://get.foundation/emails/docs), which can be cumbersome and difficult.

To get started using it, the simplest way is to use the CDN links:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.5/dist/css/foundation.min.css"
  crossorigin="anonymous"
/>
<script
  src="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.5/dist/js/foundation.min.js"
  crossorigin="anonymous"
></script>
```

## Introduction to Sass

After exploring the documentation for the above frameworks, you will notice that all them make use of something called ["Sass"](https://sass-lang.com/):

> "CSS on its own can be fun, but stylesheets are getting larger, more complex, and harder to maintain. This is where a preprocessor can help. Sass has features that don't exist in CSS yet like nesting, mixins, inheritance, and other nifty goodies that help you write robust, maintainable CSS."
>
> [https://sass-lang.com/guide](https://sass-lang.com/guide)

Sass, or "Syntactically Awesome StyleSheets" is a superset of CSS that adds power and elegance to the basic language. It allows you to use [variables](http://sass-lang.com/guide#topic-2), [nested rules](http://sass-lang.com/guide#topic-3), [mixins](http://sass-lang.com/guide#topic-6), [modules](http://sass-lang.com/guide#topic-5), [and more](https://sass-lang.com/documentation), all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized as well as getting small stylesheets up and running quickly. This is a natural choice for large CSS frameworks like those mentioned above.

There are two syntaxes available for Sass. The first, known as SCSS (defined using the ".scss" extension) is an **extension** of the syntax of CSS while the other syntax SASS (defined using the ".sass" extension), provides a more concise way of writing CSS. It uses indentation rather than brackets to indicate nesting of selectors, and newlines rather than semicolons to separate properties.

### Getting Started

To get started working with Sass, first create a [simple web server using Express](/Web-Server-Introduction/simple-web-server-using-expressjs), making sure that there is at least one route and a "public" static folder has been configured.

Once this is complete run the following command to install the ["sass" command](https://www.npmjs.com/package/sass) as a "devDependency" (ie: a package that that is only needed for local development and testing.)

```bash
npm i -D sass
```

We require this command because Sass functions as a CSS precompiler - it adds functionality to CSS in a layer **_above_** it and we must run a script / program to convert our Sass files into regular CSS so that the browser can interpret it.

With our command correctly installed, we should add a "scss" folder _outside_ the "public" folder (it does not need to be accessed by the client) and create a couple of .scss files (main.scss & \_reset.scss):

```
/scss
  ↪ main.scss
  ↪ _reset.scss
```

Finally, to make sure our new "sass" CLI works to "watch" our **.scss** files for changes and correctly update a new file: **/public/css/main.css**, we must add the following "scripts" property to our "package.json" file:

```json
"scripts": {
  "build-css": "sass --no-source-map --watch scss:public/css"
}
```

> **NOTE:** From the documentation: "When compiling whole directories, Sass will ignore partial files whose names begin with \_. You can use partials to separate out your stylesheets without creating a bunch of unnecessary output files." This is why we do not get a "\_reset.css" file as a result of our build step (below)

Notice how the "build-css" script is set to run "sass" with "**scss**" as the **_source_** and "**public/css**" as the **_destination_**. We also use the **--no-source-map** and **--watch** flags to ensure that the command will not generate a [source map](https://web.dev/source-maps/) as well as "watch" our source directory for changes and automatically re-compile on save.

To get sass running, simply execute the command:

```
npm run build-css
```

Now, every time we make a change to any file within our **/scss** directory our Sass will be compiled and the resulting CSS will be saved in the pubic css folder as **main.css**. We can leave this process running in the background and not have to worry about any additional "compile" steps.

You will know when the process has completed successfully when you see the following green message in the terminal: **Compiled scss/main.scss to public/css/main.css.**. Similarly, you will know that there was an error compiling your SCSS if you see an "Error" message in the terminal.

### Working with SCSS

With our script humming along in the background waiting for changes, why don't we try out some of the great features of our new CSS extension language?

#### Variables

Think of variables as a way to store information that you want to reuse throughout your stylesheet. You can store things like colors, font stacks, or any CSS value you think you'll want to reuse. Sass uses the $ symbol to make something a variable. Here's an example:

```scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

When the Sass is processed, it takes the variables we define for the **$font-stack** and **$primary-color** and outputs normal CSS with our variable values placed in the CSS. This can be extremely powerful when working with brand colors and keeping them consistent throughout the site.

```css
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```

#### Nesting

When writing HTML you've probably noticed that it has a clear nested and visual hierarchy. CSS, on the other hand, doesn't.
Sass will let you nest your CSS selectors in a way that follows the same visual hierarchy of your HTML. Be aware that overly nested rules will result in over-qualified CSS that could prove hard to maintain and is generally considered bad practice.
With that in mind, here's an example of some typical styles for a site's navigation:

```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    display: inline-block;
  }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

You'll notice that the **ul**, **li**, and **a** selectors are nested inside the **nav** selector. This is a great way to organize your CSS and make it more readable. When you generate the CSS you'll get something like this:

```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  display: inline-block;
}

nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

#### Import (Use)

CSS has an import option that lets you split your CSS into smaller, more maintainable portions. The only drawback is that each time you use **@import** in CSS it creates another HTTP request. Sass builds on top of the current CSS **@import** (as **@use**) but instead of requiring an HTTP request, Sass will take the file that you want to import and combine it with the file you're importing into so you can serve a single CSS file to the web browser.

In our Sass directory, we have two scss files: **\_reset.scss** and **main.scss**. We want to import **\_reset.scss** into **main.scss**.

```scss
// _reset.scss

html,
body,
ul,
ol {
  margin: 0;
  padding: 0;
}
```

```scss
// main.scss

@use '_reset';

body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}
```

Notice we're using **@use '\_reset';** in the **main.scss** file. When you import a file you don't need to include the file extension **.scss**. Sass is smart and will figure it out for you. When you generate the CSS you'll get:

```css
html,
body,
ul,
ol {
  margin: 0;
  padding: 0;
}

body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}
```

#### Mixins

Mixins let you make groups of CSS declarations that you want to reuse throughout your site. You can even pass in values to make your mixin more flexible, making it more like a function definition within your CSS. The "Bulma" framework makes use of the following "overlay" mixin which can be used to help position elements on the page using "absolute" positioning (ie a "modal" window):

```scss
@mixin overlay($offset: 0) {
  bottom: $offset;
  left: $offset;
  position: absolute;
  right: $offset;
  top: $offset;
}

.modal {
  @include overlay(150px);
}
```

To create a mixin you use the **@mixin** directive and give it a name, ie "overlay". We're also using the variable **$offset** inside the parentheses so we can pass in an offset of whatever we want (using "0" as the default). After you create your mixin, you can then use it as a CSS declaration starting with **@include** followed by the name of the mixin. When your CSS is generated it'll look like this:

```css
.modal {
  bottom: 150px;
  left: 150px;
  position: absolute;
  right: 150px;
  top: 150px;
}
```

#### Extend / Inheritance

This is one of the most useful features of Sass. Using **@extend** lets you share a set of CSS properties from one selector to another. It helps keep your Sass very DRY ("Don't Repeat Yourself"). In our example we're going to create a simple series of messaging for errors, warnings and successes.

```scss
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend .message;
  border-color: green;
}

.error {
  @extend .message;
  border-color: red;
}

.warning {
  @extend .message;
  border-color: yellow;
}
```

What the above code does is allow you to take the CSS properties in **.message** and apply them to **.success**, **.error**, & **.warning**. The magic happens with the generated CSS, and this helps you avoid having to write multiple class names on HTML elements. This is what it looks like:

```css
.message,
.success,
.error,
.warning {
  border: 1px solid #cccccc;
  padding: 10px;
  color: #333;
}

.success {
  border-color: green;
}

.error {
  border-color: red;
}

.warning {
  border-color: yellow;
}
```

#### Operators

Doing math in your CSS is very helpful. Sass has a handful of standard math operators like **+**, **-**, **\***, **/**, and **%**. For example we can do the following simple math to calculate widths for an **aside** & **article**.

```scss
.container {
  width: 100%;
}

article[role='main'] {
  float: left;
  width: calc(600px / 960px * 100%); // gets 600px as a percentage of 960px
}

aside[role='complementary'] {
  float: right;
  width: calc(300px / 960px * 100%); // gets 300px as a percentage of 960px
}
```

In the above case, the generated CSS will look like:

```css
.container {
  width: 100%;
}

article[role='main'] {
  float: left;
  width: 62.5%;
}

aside[role='complementary'] {
  float: right;
  width: 31.25%;
}
```
