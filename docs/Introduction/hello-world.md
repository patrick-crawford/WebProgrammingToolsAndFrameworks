---
id: hello-world
title: Hello World
sidebar_position: 3
description: Hello World
---

# Hello World

To get a sense of how to write code using the tools for this course and to ensure that your development environment is set up correctly, let's start with a simple ["Hello World"](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program).

1.  If you haven’t already, be sure to [download](https://nodejs.dev/en/download/) and install the current release of Node.js. If you’re not sure whether or not you have Node.js installed, open the **Command Prompt** and type **node -v**. If Node.js has been installed, this will output the version.
2.  Make sure you have Visual Studio Code installed. This is an open-source, cross-platform development environment provided by Microsoft. While it is true that you can write your code in any text editor, Visual Studio Code works very nicely alongside Node.js and all examples going forward will assume that you are using Visual Studio Code. You can [download it here](https://code.visualstudio.com/download)
3.  On your Local computer, navigate to your desktop and **create a folder** called **Ex1**
4.  Open **Visual Studio Code** and select **File -> Open Folder**. Choose your newly created **“Ex1”** Folder and click **“Select Folder”**
5.  You should see an “Explorer” pane open on the left side with two items: “Open Editors” and “Ex1”. Click to expand “Ex1” and locate the “New File” button ( ![New File Button](/img/vscode-new-file.jpg) ). Click this and type **“hello.js”.**
6.  You should now see your newly created “Hello.js” file in the editor. Enter the following line of code:

    ```javascript
    console.log('Hello World!');
    ```

    and click **File -> Save (Ctrl + S)**

7.  Open the **Integrated Terminal** by selecting **View -> Integrated Terminal (Ctrl + `` ` ``)** and type:

    ```bash
    node hello.js
    ```

**Hello World!** This is the most basic example in Node.js – notice how we didn’t need to open a web browser, scratchpad, devtools, etc? It’s also important to note that the command **“node hello.js”** can be executed in any command prompt as long as the active working directory is set to wherever your **hello.js** file is located (Ex1 in this case). The Integrated Terminal is just a quick, easy way to get a command prompt running in the correct location without leaving the development environment.

## Node.js Globals

Regarding the code that we wrote, it’s very simple; however we have made an important assumption: that we have access to a global **“console”** object. In Node.js we have access to [a number of global objects / variables](https://nodejs.org/docs/latest/api/globals.html) in addition to [the built-in objects that are built into the JavaScript language](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects). Some of the Node.js Globals that we will be using include:

### console

The [console object](https://nodejs.org/docs/latest/api/console.html) provides a simple debugging console that is similar to the JavaScript console mechanism provided by web browsers.

Some of the key methods that we will be using are:

<ul>
<li><a href="https://nodejs.org/docs/latest/api/console.html#consolelogdata-args" target="_blank">console.log()</a></li>
<li><a href="https://nodejs.org/docs/latest/api/console.html#consoletimelabel" target="_blank">console.time()</a> / <a href="https://nodejs.org/docs/latest/api/console.html#consoletimeendlabel" target="_blank">console.timeEnd()</a></li>
<li><a href="https://nodejs.org/docs/latest/api/console.html#consoledirobj-options" target="_blank">console.dir()</a></li>
</ul>

### process

The [process object](https://nodejs.org/docs/latest/api/process.html) is a global instance of the <a href="https://nodejs.org/docs/latest/api/events.html#class-eventemitter" target="_blank">EventEmitter</a> class that provides information about, and control over, the current Node.js process. It exposes many properties, methods and events related to controlling system interactions.

Some of the key elements that we will be using are:

<ul>
<li>Methods: process.on(), <a href="https://nodejs.org/docs/latest/api/process.html#processabort" target="_blank">process.abort()</a>, <a href="https://nodejs.org/docs/latest/api/process.html#processkillpid-signal">process.kill()</a>, <a href="https://nodejs.org/docs/latest/api/process.html#processexitcode" target="_blank">process.exit()</a></li>
<li>Properties: <a href="https://nodejs.org/docs/latest/api/process.html#processstdin">process.stdin</a>, <a href="https://nodejs.org/docs/latest/api/process.html#processstdout">process.stdout</a>, <a href="https://nodejs.org/docs/latest/api/process.html#processstderr">process.stderr</a>, <a href="https://nodejs.org/docs/latest/api/process.html#processpid" target="_blank">process.pid</a>, <a href="https://nodejs.org/docs/latest/api/process.html#processenv" target="_blank">process.env</a></li>
<li>Events: <a href="https://nodejs.org/docs/latest/api/process.html#event-beforeexit" target="_blank">beforeExit</a>, <a href="https://nodejs.org/docs/latest/api/process.html#event-exit" target="_blank">Exit</a>, <a href="https://nodejs.org/docs/latest/api/process.html#event-uncaughtexception" target="_blank">uncaughtException</a></li>
</ul>

### \_\_dirname

[\_\_dirname](https://nodejs.org/docs/latest/api/modules.html#__dirname) is used to obtain name of the directory that the currently executing script resides in.

For example: if our .js file is located in /Users/pcrawford/ex1.js:

```js
console.log(__dirname);
// outputs /Users/pcrawford
```

### \_\_filename

[\_\_filename](https://nodejs.org/docs/latest/api/modules.html#__filename) is used to obtain file containing the code being executed as well as the directory. This is the resolved absolute path of this code file.

For example: if our .js file is located in /Users/pcrawford/ex1.js:

```js
console.log(__filename);
// outputs /Users/pcrawford/ex1.js
```

### setTimeout()

The [setTimeout()](https://nodejs.org/docs/latest/api/timers.html#settimeoutcallback-delay-args) function will execute a piece of code (function) after a certain delay. It accepts 3 parameters:

<ul>
<li><strong>callback</strong> Function: The function to call when the timer elapses.</li>
<li><strong>delay</strong> number: The number of milliseconds to wait before calling the callback</li>
<li><strong>[, …arg]</strong> Optional arguments to pass when the callback is called.</li>
</ul>

For example:

```js
// outputs "Hello after 1 second" to the console
setTimeout(function () {
  console.log('Hello after 1 second');
}, 1000);
```

### setInterval()

The [setInterval()](https://nodejs.org/docs/latest/api/timers.html#setintervalcallback-delay-args) function will execute a piece of code (function) after a certain delay and continue to call it repeatedly. It accepts 3 parameters (below) and returns a <a href="https://nodejs.org/docs/latest/api/timers.html#timeout" target="_blank">timeout</a> object

<ul>
<li><strong>callback</strong> Function: The function to call when the timer elapses.</li>
<li><strong>delay</strong> number: The number of milliseconds to wait before calling the callback</li>
<li><strong>[, …arg]</strong> Optional arguments to pass when the callback is called.</li>
</ul>

**Note:** Unless you want the interval to continue forever, you need to call <a href="https://nodejs.org/docs/latest/api/timers.html#clearintervaltimeout" target="_blank">clearInterval()</a> with the timeout object as a parameter to halt the interval

For example:

```js
let count = 1; // global counter
let maxCount = 5; // global maximum

let myCountInterval = setInterval(function () {
  console.log('Hello after ' + count++ + ' second(s)');
  checkMaximum();
}, 1000);

let checkMaximum = function () {
  if (count > maxCount) {
    clearInterval(myCountInterval);
  }
};
```

### URL

The [URL](https://nodejs.org/docs/latest/api/url.html) class is used to create a new URL object by parsing the full URL string, ie:

```js
let myURL = new URL('https://myProductInventory.com/products?sort=asc&onSale=true');
```

Once we have a new URL object, we can access / modify aspects of it via their associated properties:

```js
console.log(myURL);

/*
URL {
  href: 'https://myproductinventory.com/products?sort=asc&onSale=true',
  origin: 'https://myproductinventory.com',
  protocol: 'https:',
  username: '',
  password: '',
  host: 'myproductinventory.com',
  hostname: 'myproductinventory.com',
  port: '',
  pathname: '/products',
  search: '?sort=asc&onSale=true',
  searchParams: URLSearchParams { 'sort' => 'asc', 'onSale' => 'true' },
  hash: ''
*/
```

To access the parsed query parameters (ie the "search" property), we can use a ["for...of"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop to iterate over key-value pairs the "searchParams": property:

```js
for (const [key, value] of myURL.searchParams) {
  console.log('key: ' + key + ' value: ' + value);
}

/*
key: sort value: asc
key: onSale value: true
*/
```

## Built-In Modules / 'require()'

You may have noticed that some of the examples from the documentation include a mandatory ['require()'](https://nodejs.org/docs/latest/api/modules.html#requireid) statement. For example, if we try to execute this _simplified_ 'EventEmitter' sample from the documentation:

```js
const myEmitter = new EventEmitter();

myEmitter.on('event', function () {
  console.log('an event occurred!');
});

myEmitter.emit('event');
```

we run into an error: `ReferenceError: EventEmitter is not defined`. As you will have guessed, this is because our running script does not know about the "EventEmitter" class, as it is not global. To remedy this, we can include the required class by "requiring" it, with the following syntax:

```js
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('event', function () {
  console.log('an event occurred!');
});

myEmitter.emit('event');
```

By using the global ['require'](https://nodejs.org/docs/latest/api/esm.html#require) function, we have loaded a code "module" which contains code and logic that we can use in our own solutions. We will discuss modules in detail in the "Web Server Introduction" section (see: ["Modules & Node Package Manager"](/Web-Server-Introduction/modules-node-package-manager)), however for now we should be aware of the following "Built-In" modules:

### fs

The ['fs' module](https://nodejs.org/docs/latest/api/fs.html) is used to work directly with the file system (ie: read / write files, list the contents of a directory, etc). For example, if we had a CSV file with names, (ie: _names.csv_):

```csv
Jacob,Alexandra,Jessie,Ranya,Felix
```

We could read the contents of the file and convert the list into an array:

```js
const fs = require('fs');

fs.readFile('names.csv', function (err, fileData) {
  if (err) console.log(err);
  else {
    namesArray = fileData.toString().split(',');
    console.log(namesArray);
  }
});
```

Similarly, if we had a directory of images, ie: "img", we could list the files using:

```js
const fs = require('fs');

fs.readdir('img', function (err, filesArray) {
  if (err) console.log(err);
  else {
    console.log(filesArray);
  }
});
```

### path

The ['path' module](https://nodejs.org/docs/latest/api/path.html) provides utilities for working with file and directory paths. This will be useful when working with reading template files or writing uploaded files. For example, it can easily be used to safely concatenate two directories / paths together:

<!-- prettier-ignore-start -->

```js
const path = require('path');

console.log('Absolute path to about.html');

console.log(path.join(__dirname, '/about.html')); // with leading slash
console.log(path.join(__dirname, '//about.html')); // with multiple leading slashes
console.log(path.join(__dirname, 'about.html')); // without leading slash
console.log(path.join(__dirname, '\about.html')); // with incorrect leading slash
```
<!-- prettier-ignore-end -->

### readline

The ['readline' module](https://nodejs.org/docs/latest/api/readline.html) provides a way to read data from a "Readable stream" (such as process.stdin) one line at a time. For example, we can use this to prompt the user to enter data in the console using the following code:

```js
const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('First Name: ', function (fName) {
  rl.question('Last Name: ', function (lName) {
    console.log('Hello: ' + fName + ' ' + lName);
    rl.close();
  });
});
```
