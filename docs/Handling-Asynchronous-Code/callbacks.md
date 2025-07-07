---
id: callbacks
title: Callbacks
sidebar_position: 1
description: Callbacks
---

# Callbacks

Before we begin to discuss "callbacks" and other methods for working with asynchronous logic within our programs, we should first define what "asynchronous programming" is:

> "Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result."
>
> [https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)

This means that potentially long-running tasks will not cause delays within our main execution logic. However, it also means that we need to find a way to execute code when a long-running task has completed (ie: connecting to a database, reading a file, etc).

As a simple example of how JavaScript works with asynchronous code, we can refer back to our ["setTimeout"](/Introduction/hello-world#settimeout) example; only this time we will wait 2 seconds (2000 milliseconds) and execute some code _before_ and _after_ the function:

```js
console.log('Hello');

setTimeout(() => {
  console.log('World');
}, 2000);

console.log('!');
```

Here, we see the text output to the console is out of order, ie: "Hello" followed by "!" and (2 seconds later) we finally see the text "World". This is because the "setTimeout" function is "asynchronous" and will not cause the main flow of execution to wait (2 seconds) for it to complete. The _function_ that is passed in the first parameter of "setTimeout" (which is responsible for outputting "World" to the console) is a [**callback**](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) function:

> "a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action."

## Defining Functions with Callbacks

Now that we know that a callback is really just a function passed to another function to perform an action once some asynchronous logic is complete, let's try writing our own code. Here, we will be using the [setTimeout()](https://nodejs.org/docs/latest/api/timers.html#settimeoutcallback-delay-args) function to approximate an asynchronous action such as connecting to a database.

For our first example, let's say that we have a function called "connectToDatabase" that establishes a database connection after a random amount of time (between 1 and 2000 milliseconds). We also have a function called "queryData" that also takes a random amount of time to complete (in this case, it is between 1 and 1000 milliseconds).

```js
function connectToDatabase() {
  let randomTime = Math.floor(Math.random() * 2000) + 1;

  setTimeout(() => {
    console.log('Connection Established');
  }, randomTime);
}

function queryData() {
  let randomTime = Math.floor(Math.random() * 1000) + 1;

  setTimeout(() => {
    console.log('Query Complete');
  }, randomTime);
}
```

For our code to work correctly, we must first connect to the database, then query the data. To accomplish this, we would intuitively write the code to invoke the functions in order, ie:

```js
connectToDatabase();
queryData();
```

However, this poses a problem as there's no way to ensure that the logic to connect to the database happens **before** the query. In fact, since it takes longer to connect to the database, it's more likely that the query logic will complete first.

One way to solve this problem is to provide the "queryData()" function as a **callback** function to "connectToDatabase()" to be executed once the connection has been established:

```js
function connectToDatabase(queryFunction) {
  let randomTime = Math.floor(Math.random() * 2000) + 1;

  setTimeout(() => {
    console.log('Connection Established');
    queryFunction();
  }, randomTime);
}
```

Notice how we have added "queryFunction" as a parameter to the connectToDatabase() function. Once the connection has been established, we manually invoke the function using "()".

Now, we can ensure that the functions are executed in order, using the code:

```js
connectToDatabase(queryData);
```

## Adding Parameters

As our code stands now, the "queryData" function is very simple and does not take any parameters. Why don't we try making it a little more dynamic by adding parameters to it, so that a query can be provided:

```js
function queryData(query) {
  let randomTime = Math.floor(Math.random() * 1000) + 1;

  setTimeout(() => {
    console.log(query);
  }, randomTime);
}
```

Now we can invoke our queryData with a given query, for example:

```js
queryData('select * from Employees');
```

However, a problem occurs when we attempt to provide the "queryData" function as a **callback** to another function (in our case, the "connectToDatabase" function):

```js
connectToDatabase(queryData('select * from Employees')); // TypeError: queryFunction is not a function
```

This is because the "()" syntax after the function name causes the function to _execute_ which then passes its return value ("undefined") to the connectToDatabase function. To solve this, we must pass the parameters to the "queryData()" callback function, as parameters to the "connectToDatabase()" function:

```js
function connectToDatabase(queryFunction, query) {
  let randomTime = Math.floor(Math.random() * 2000) + 1;

  setTimeout(() => {
    console.log('Connection Established');
    queryFunction(query);
  }, randomTime);
}
```

Here, you can see that we have added the "query" as a 2nd parameter to the connectToDatabase function and use it as a parameter to the "queryFunction".

Putting it all together, we get:

```js
function connectToDatabase(queryFunction, query) {
  let randomTime = Math.floor(Math.random() * 2000) + 1;

  setTimeout(() => {
    console.log('Connection Established');
    queryFunction(query);
  }, randomTime);
}

function queryData(query) {
  let randomTime = Math.floor(Math.random() * 1000) + 1;

  setTimeout(() => {
    console.log(query);
  }, randomTime);
}

connectToDatabase(queryData, 'select * from Employees');
```
