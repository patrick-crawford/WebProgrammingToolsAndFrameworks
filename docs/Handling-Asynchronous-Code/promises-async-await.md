---
id: promises-async-await
title: Promises & Async / Await
sidebar_position: 2
description: Promises & Async / Await
---

# Promises & Async / Await

As we have seen in our ["callbacks"](/Handling-Asynchronous-Code/callbacks) discussion, JavaScript is "asynchronous" in nature. Code can be written to respond to events or wait for tasks to complete before executing. One way of handling such situations was to enclose our "follow up" logic in a function that may be passed to another function to be executed (typically, after some asynchronous logic has completed such as connecting to a database, or reading a file).

## Callback Review

As a quick review of the callback logic discussed earlier, consider the following three functions:

```js
// output "A" after a random time between 0 & 3 seconds
function outputA() {
  let randomTime = Math.floor(Math.random() * 3000) + 1;

  setTimeout(() => {
    console.log('A');
  }, randomTime);
}

// output "B" after a random time between 0 & 3 seconds
function outputB() {
  let randomTime = Math.floor(Math.random() * 3000) + 1;

  setTimeout(() => {
    console.log('B');
  }, randomTime);
}

// output "C" after a random time between 0 & 3 seconds
function outputC() {
  let randomTime = Math.floor(Math.random() * 3000) + 1;

  setTimeout(() => {
    console.log('C');
  }, randomTime);
}
```

If we were to execute them in order, ie:

```js
outputA();
outputB();
outputC();
```

we would have no idea which letter would be output to the console first ("A", "B", or "C"), since each function takes a random amount of time to complete. If however, we wanted to be absolutely sure that the output of the code is in the correct order ("A", "B", "C") regardless of how long it takes each function to execute, we must ensure that the "follow up" functions are passed as parameters to the functions with the asynchronous logic (ie: "callbacks"). This case is more complicated because we have 3 functions, however it can still be achieved using the following code:

```js
// output "A" after a random time between 0 & 3 seconds
function outputA(firstCallback, secondCallback) {
  let randomTime = Math.floor(Math.random() * 3000) + 1;

  setTimeout(() => {
    console.log('A');
    firstCallback(secondCallback);
  }, randomTime);
}

// output "B" after a random time between 0 & 3 seconds
function outputB(lastCallback) {
  let randomTime = Math.floor(Math.random() * 3000) + 1;

  setTimeout(() => {
    console.log('B');
    lastCallback();
  }, randomTime);
}

// output "C" after a random time between 0 & 3 seconds
function outputC() {
  let randomTime = Math.floor(Math.random() * 3000) + 1;

  setTimeout(() => {
    console.log('C');
  }, randomTime);
}

// invoke the functions in order

outputA(outputB, outputC);
```

In the above code, we have ensured the correct flow of execution of the three functions by passing both follow up functions to the first function as parameters. The final function is then passed to the second function as a callback, so that it may be executed in the right order.

While this does indeed work to solve the intended problem (getting the output to happen in order: "A", "B" then "C"), we have created some code which is difficult to follow, maintain and scale. For example, what happens when we add an "outputD()" function? We would need to pass it as well to the outputA() function as a parameter, only to get passed down the chain until it is executed in the correct context (for example, after outputC() has completed). As you can imagine, this creates a problem in our code and leaves us asking: "is there a better way?"

## Promises

### Resolve & Then

Fortunately, JavaScript has the notion of the **["Promise"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** that can help us deal with this type of situation. Put simply, a promise object is used for asynchronous computations (like the situation in the example above) and represents a value which may be available now, or in the future, or never. Basically, what this means is that we can place our asynchronous code inside a promise object as a function with specific parameters ("resolve" and "reject"). When our code is complete, we invoke the ["resolve" function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) and if our code encounters an error, we can invoke the ["reject" function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject). We can handle both of these situations later with the [.then()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) method or (in the case of an error that we wish to handle) the [.catch()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) method. To see how this concept is implemented in practice, consider the following addition to the outputA() method from above:

```js
// output "A" after a random time between 0 & 3 seconds
function outputA() {
  let randomTime = Math.floor(Math.random() * 3000) + 1;

  return new Promise((resolve, reject) => {
    // place our code inside a "Promise" function
    setTimeout(() => {
      console.log('A');
      resolve(); // call "resolve" because we have completed the function successfully
    }, randomTime);
  });
}

// call the outputA function and when it is "resolved", output a confirmation to the console

outputA().then(() => {
  console.log('outputA resolved!');
});
```

Our "outputA()" function still behaves as it did before (outputs "A" to the console after a random period of time). However, our outputA() function now additionally returns a **new Promise** object that contains all of our asynchronous logic and its status. The container function for our logic always uses the two parameters mentioned above, ie: **resolve** and **reject**. By invoking the **resolve** method we are placing the promise into the fulfilled state, meaning that the operation completed successfully and the character "A" was successfully output to the console. We can respond to this situation using the ["then"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) function on the returned promise object to execute some code **after** the asynchronous operation is complete! This gives us a mechanism to react to asynchronous functions that have completed successfully so that we can perform additional tasks.

### Adding Data

Now that we have the promise structure in place and are able to **"resolve"** the promise when it has completed it's task and **"then"** execute another function using the returned promise object (as above), we can begin to think about how to pass data from the asynchronous function to the "then" method. Fortunately, it only requires a little tweak to the above the above example to enable this functionality:

```js
// output "A" after a random time between 0 & 3 seconds
function outputA() {
  let randomTime = Math.floor(Math.random() * 3000) + 1;

  return new Promise((resolve, reject) => {
    // place our code inside a "Promise" function
    setTimeout(() => {
      console.log('A');
      resolve('outputA resolved!'); // call "resolve" because we have completed the function successfully
    }, randomTime);
  });
}

// call the outputA function and when it is "resolved", output a confirmation to the console

outputA().then((data) => {
  console.log(data);
});
```

Notice how we are able to invoke the **resolve()** function with a single parameter that stores some data (in this case a string with the text "outputA resolved!"). This is typically where we would place our freshly returned data from an asynchronous call to a web service / database, etc. The reason for this is that we will have access to it as the first parameter to the anonymous function declared inside the **.then** method and this is the perfect place to process the data.

### Reject & Catch

It is not always safe to assume that our asynchronous calls will complete successfully. What if we're in the middle of a request and our connection is dropped or a database connection fails? To ensure that we handle this type of scenario gracefully, we can invoke the "reject" method instead of the "resolve" method and provide a reason why our asynchronous operation failed. This causes the promise to be in a "rejected" state and the ".catch" function will be invoked, where we can gracefully handle the error. The typical syntax for handling both "then" and "catch" in a promise is as follows:

```js
// output "A" after a random time between 0 & 3 seconds
function outputA() {
  let randomTime = Math.floor(Math.random() * 3000) + 1;

  return new Promise((resolve, reject) => {
    // place our code inside a "Promise" function
    setTimeout(() => {
      console.log('-');
      reject('outputA rejected!'); // call "reject" because the function encountered an error
    }, randomTime);
  });
}

// call the outputA function and when it is "resolved" or "rejected, output a confirmation to the console

outputA()
  .then((data) => {
    console.log(data);
  })
  .catch((reason) => {
    console.log(reason);
  });
```

> **NOTE**: Calling "resolve()" or "reject()" won't immediately exit the promise and invoke the related ".then()" or ".catch()" callback - it simply puts the promise in a "resolved" or "rejected" state and code immediately following the statement will still run, ie:
>
> ```js
> // ...
> reject();
> console.log('I will still be executed');
> resolve(); // This promise will not be "resolved", since the resolve() call came after reject()
> // this also works the other way around.  A promise has been "settled" once reject or resolve has been called
> // ...
> ```
>
> If we want to immediately exit the function and prevent further execution of the code within the promise, we can invoke the "return" statement, immediately following the "resolve()" or "reject()" call, ie:
>
> ```js
> // ...
> reject();
> return;
> console.log('I will not be executed');
> // ...
> ```

### Putting it Together

Now that we know how the promise object and pattern can help us manage our asynchronous code, let's loop back to our original problem - ensuring that "A", "B" and "C" are output in the correct order when invoking the "outputA()", "outputB()" and "outputC()" functions, respectfully.

To make it more interesting, we will alter our code such that each of the functions **resolve** with the value if the _randomTime_ is _odd_ and **reject** with an error if _randomTime_ is _even_:

```js
// output "A" after a random time between 0 & 3 seconds
function outputA() {
  let randomTime = Math.floor(Math.random() * 3000) + 1;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      randomTime % 2 ? resolve('A') : reject('Error with outputA()');
    }, randomTime);
  });
}

// output "B" after a random time between 0 & 3 seconds
function outputB() {
  let randomTime = Math.floor(Math.random() * 3000) + 1;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      randomTime % 2 ? resolve('B') : reject('Error with outputB()');
    }, randomTime);
  });
}

// output "C" after a random time between 0 & 3 seconds
function outputC() {
  let randomTime = Math.floor(Math.random() * 3000) + 1;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      randomTime % 2 ? resolve('C') : reject('Error with outputC()');
    }, randomTime);
  });
}
```

If we wish to use the promises correctly to output the values in order **and** correctly handles errors, our code looks like the following (this is known as [promise "chaining"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining)):

```js
outputA()
  .then((data) => {
    console.log(data); // output the result of "outputA()" to the console
    return outputB();
  })
  .then((data) => {
    console.log(data); // output the result of "outputB()" to the console
    return outputC();
  })
  .then((data) => {
    console.log(data); // output the result of "outputC()" to the console
  })
  .catch((err) => {
    console.log(err); // output the error to the console
  });
```

Success! We always have "A", followed by "B" and "C" in the console and the errors are correctly handled when they occur (preventing the subsequent promises from executing). We have the benefit of not having to _alter_ the functions themselves at all if follow-up logic is necessary. Each function simply does its job, then reports back with the data ("resolves") if it was successful or sends the error ("rejects") it failed. This is a much more maintainable, scalable and cleaner approach to working with asynchronous code. This is why you will find that most modules mentioned in these notes are "promise-based", ie: if their logic is asynchronous, functions provided by the module will return **Promise** objects.

While functions that return promises are indeed the preferred way to work with asynchronous operations in JavaScript, as you can see from the above code, _working_ with promises can sometimes be difficult. If we wish to chain promises (in the case above) We must ensure that for every "then()" callback function returns the correct follow up function and it can be difficult to visually walk through the code.

## Async & Await

To help us work with promises more easily in JavaScript, ECMAScript 2016 (ES7) released [async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) & [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) as an alternative to using "then()" and "catch()"

### Putting it Together (again)

Knowing that there is an alternative to "then()" and "catch()", let's see how we can re-write the section of "Putting it Together" that _makes use of_ the promises (we will _not_ alter the functions themselves) using "async" and "await". To achieve this, we must place our logic inside a function, ie "showOutput()" - the reason for this will be described below:

```js
async function showOutput() {
  try {
    let A = await outputA();
    console.log(A); // output the result of "outputA()" to the console

    let B = await outputB();
    console.log(B); // output the result of "outputB()" to the console

    let C = await outputC();
    console.log(C); // output the result of "outputC()" to the console
  } catch (err) {
    console.log(err); // output the error for outputA(), outputB() or outputC() to the console
  }
}

showOutput();
```

This is _much_ cleaner and easier to read. By using the "await" operator, we're essentially saying "wait for this function's returned promise to resolve". Additionally, you can see that we actually get the resolved value from the promise!

### Using Await

> "await" pauses the execution of its surrounding async function until the promise is settled (that is, fulfilled or rejected). When execution resumes, the value of the await expression becomes that of the fulfilled promise.
>
> If the promise is rejected, the await expression throws the rejected value.
>
> [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

Notice how the documentation mentions the "surrounding async function". This is because to actually **use** the "await" operator, it **must** be placed within a function marked as "async". If we fail to do this and try to use await outside of an async function, we will get an error:

```
SyntaxError: await is only valid in async functions and the top level bodies of modules
```

You will also notice how the documentation mentions that if the promise is rejected, the await expression "throws the rejected value". This is why we must place our "await" logic within a "try" / "catch" block. If we fail to do so and one of the promise-based functions is actually rejected, we will get the following error (**NOTE:** this error also occurs if a ".catch()" function is missing when using then() & catch()):

```
UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch().
```

> **NOTE**: When using "async" to identify a function, you are implicitly **returning a Promise**. This is because async functions _cannot_ exist within the normal flow of execution (since they contain asynchronous code). If you do return a value from an "async" function, it will be the "resolved" value of the returned promise:
>
> ```js
> async function adder(num1, num2) {
>   return num1 + num2;
> }
>
> adder(1, 2).then((result) => console.log(result)); //3
> ```
