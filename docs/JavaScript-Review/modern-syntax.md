---
id: modern-syntax
title: Modern Syntax
sidebar_position: 2
description: Modern Syntax
---

# Modern Syntax

JavaScript is constantly evolving. Since 2015 with the release of ECMAScript 6 (ES6), there has been a [new release every year](https://webreference.com/javascript/basics/versions/). This steady release schedule means that it is extremely important to be familiar with some of the concepts released in the last few years as more and more examples, tutorials and online documentation make use of these features. It can be easy to fall behind and find some of the new syntax unusual or confusing.

To help navigate these notes and other related documentation, we have outlined some of the more important, ubiquitous features released since ES6:

## Functions

In JavaScript, functions are typically defined using either a [declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_declarations) or [expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_expressions) and may contain either a fixed or [variable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) list of parameters, which may or may not have [default values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters).

However, as JavaScript evolved, additional options and features for working with functions have as well. The following sections outline some of the features that we will use in these notes:

### Arrow Functions

ES6 (ECMAScript 2015) introduced a compact version of function expressions known as ["Arrow functions"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#arrow_functions), for example:

```js
let adder = function (num1, num2) {
  return num1 + num2;
};

// is the same as:

let adderArrow = (num1, num2) => {
  return num1 + num2;
};
```

Essentially, we have removed the "function" keyword and replaced it with an arrow following the parameter list. While this is indeed shorter, we can compress the function expression even further as arrow functions use an "implicit return". This means that if the curly brackets ("&#123;" and "&#125;") are _omitted_ from the arrow function, the inner expression is returned:

```js
let adderArrowShort = (num1, num2) => num1 + num2;
```

Additionally, if there is only a _single_ parameter, the brackets _surrounding_ the parameters may also be omitted, ie:

<!-- prettier-ignore-start -->
```js
let squared = num => num * num;
```
<!-- prettier-ignore-end -->

> **NOTE:** if there are 0 parameters to the function, empty round brackets must be used, ie:
>
> ```js
> let getHello = () => 'Hello World';
> ```

#### Lexical "this"

Arrow functions are great for creating simplified code that is easier to read (sometimes referred to as "syntax sugar"), however there is another very useful and slightly misleading feature that we have yet to discuss: the notion of a "lexical 'this'". Recall that when we added the "outputNameDelay" method to the architect object, we had to overcome the issue with "this" pointing at the incorrect object by introducing a new local variable, "that":

```js
outputNameDelay: function(){
    let that = this;
    setTimeout(function(){
      console.log(that.name);
    },1000);
}
```

While this does solve the problem, wouldn't it be better if we didn't have to always create a new local variable to sit in for "this"? Fortunately, arrow functions actually use a "lexical this" instead of their own value for "this", so functions defined using the arrow notation use the "this" value of their parent scope.

With this in mind, we can re-write the above function using an arrow function to achieve the same result without having to introduce any new variables to handle the "this" issue. Additionally, because it's such a simple function, we can transform it into a single line:

```js
outputNameDelay: function(){
    setTimeout(() => console.log(this.name), 1000);
}
```

This is a typical use of arrow functions, ie: to simplify a scenario in which we need to declare a function in place, often as a parameter to other functions ("callbacks"). We don't have to concern ourselves with how "this" will behave in the new context and the added "syntax sugar" makes the operation much simpler to read and shorter to code.

### Destructuring Object Parameters

Another common feature introduced in ES6 is the ability to perform a ["destructuring assignment"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) for objects. For example, if we have the following code that defines a "product" object:

```js
let product = {
  id: '145be9',
  price: 1.35,
  onSale: false,
};
```

and we wish to extract the "price" and "id" values into separate variables, we would typically use the following syntax:

```js
let price = product.price;
let id = product.id;
```

However, this can be shortened to the following, using a "destructuring assignment":

```js
let { price, id } = product;
```

This type of syntax is commonly used when passing object properties as parameters to functions. For example, instead of the following code:

```js
function outputProduct(productObj) {
  console.log('Product', productObj.id, productObj.price);
}
```

we could use the more concise:

```js
function outputProduct({ id, price }) {
  console.log('Product', id, price);
}
```

## Arrays

### Iterating

An Array in JavaScript is technically an "indexed collection", ie: "an ordered list of values that you refer to with a name and an index". Because of this, the simplest ways to iterate over the collection are with the common [for loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) and [do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while) / [while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) loops. However, there are other ways to iterate over an array, including:

#### for...of loop

The [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) statement "executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables."

```js
let sample = ['A', 'B', 'C'];

for (const element of sample) {
  console.log(element);
}
```

#### forEach() Method

The [forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method of the Array object can be used to execute a function once per element of the array, with the element (and optionally, the index) as the parameter(s), for example:

```js
let sample = ['A', 'B', 'C'];

sample.forEach((element, index) => console.log(element + ' at index: ' + index));
```

> **NOTE:** There are many other methods similar to "forEach" that serve to:
>
> - [Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) the array
> - [Find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) elements in the array
> - [Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) the array to a single value
> - Test if the array contains [some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) element that meets a specific criteria
> - Test if [every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) element of the array meets a specific criteria
> - [and so on...](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Destructuring Elements

As we have seen above, ES6 introduced the ["destructuring assignment"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment). We used this feature to make the syntax for extracting properties from objects more concise and to clarify function parameters. Fortunately, this feature is also available for arrays using a similar process:

```js
let sample = ['A', 'B', 'C'];

// let a = sample[0];
// let b = sample[1];

let [a, b] = sample;
```

Here, we assign the variables a & b at the same time by "destructuring" the array. This syntax is popular in libraries such as [React](https://react.dev) (for example, when using the common ["useState" hook"](https://react.dev/reference/react/useState)), so it's important that we become familiar with it.

### Spread Syntax

You have likely seen the "..." syntax before in JavaScript. A common use for it is in the form of ["rest" parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters), which allow for the creation of functions that take on an _unknown_ number of parameters:

<!-- prettier-ignore-start -->
```js
function sum(...numbers) {
  let total = 0;

  for (const num of numbers) 
    total += num;

  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6)); // 21
```
<!-- prettier-ignore-end -->

However, "..." can also be used outside of function parameters as a placeholder for values in an array (or properties in an object). This is commonly referred to as ["spread" syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax). For example, if we wished to merge two arrays to create a new array (without using the built-in ["concat" function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)), one option is to use the following code:

```js
let sample1 = ['A', 'B', 'C'];
let sample2 = ['D', 'E', 'F'];

let sample3 = [];
sample1.forEach((element) => sample3.push(element));
sample2.forEach((element) => sample3.push(element));

console.log(sample3); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]
```

Here, we must loop through each array and add each element in turn to a new array. However, using the "spread" syntax, we can instead use the following code:

```js
let sample1 = ['A', 'B', 'C'];
let sample2 = ['D', 'E', 'F'];

let sample3 = [...sample1, ...sample2];

console.log(sample3); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]
```

By using the "..." syntax, we're essentially saying "the elements of the array".

> **NOTE:** This can be used for objects as well, ie:
>
> ```js
> let product = {
>   id: '145be9',
>   price: 1.35,
>   onSale: false,
> };
>
> let productWithStore = { ...product, store: '53' };
>
> console.log(productWithStore); // { id: '145be9', price: 1.35, onSale: false, store: '53' }
> ```

It is important to note however, that while we are using the "..." to create a new copy of arrays / objects, it is only a **"shallow" copy** (ie: it will not copy "nested" elements and properties, leaving a reference to the original array / object).

## Strings

### Template Literals

A common way to place text and data together in a single string in JavaScript is to use the "+" operator. For example:

<!-- prettier-ignore-start -->
```js
let x = 5, y = 6;
console.log(x + " + " + y + " = " + (x + y)); // 5 + 6 = 11
```
<!-- prettier-ignore-end -->

However, wouldn't it be simpler if we could have a single string with _placeholders_ for data, rather than multiple strings placed _next_ to data, concatenated using the "+" operator?

Fortunately, ES6 has introduced ["Template literals"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) sometimes called "Template strings", which use the ( **`** ) character to define the string and the "$&#123;expression&#125;" syntax to insert an expression into the string to be evaluated.

Using this, we can re-write our above example to remove the "+" operator and instead use the more concise (and easier to read):

<!-- prettier-ignore-start -->
```js
let x = 5, y = 6;
console.log(`${x} + ${y} = ${x + y}`); // 5 + 6 = 11
```
<!-- prettier-ignore-end -->

Additionally, since the "$&#123;&#125;" syntax within the template literal allows to evaluate an expression, we can also execute functions and other logic within the string definition, such as:

```js
let shapes = ['circle', 'square', 'triangle'];
console.log(`My favourite shapes are:${shapes.map((shape, index) => ` ${index + 1}: ${shape}`)}`);

// My favourite shapes are: 1: circle, 2: square, 3: triangle
```

> **NOTE:** We also have the added bonus of creating **multi-line** strings, ie:
>
> ```js
> let myString = `Hello
> World`;
>
> console.log(myString);
> // Hello
> // World
> ```

## Errors

One of the most important aspects of writing any program is elegantly handling errors. It is important to never let your program suddenly crash or enter an unknown state due to an unanticipated error. JavaScript features numerous mechanisms to handle certain types of logical errors; for example the global [isNaN()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/isNaN) function is a way to elegantly respond to a situation in which a number was expected, but not returned:

```js
let x = 'twenty';
let y = parseInt(x);

if (isNaN(y)) {
  console.log('x cannot be converted to a number');
} else {
  console.log(`success! the numeric value of x is: ${y}`);
}
```

Similarly, we can use the global [isFinite()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/isFinite) function to handle a situation where division by zero has occurred:

<!-- prettier-ignore-start -->
```js
let x = 30, y = 0;
let z = x / y;

if (isFinite(z)) {
  console.log(`success! ${x} / ${y} = ${z}`);
} else {
  console.log(`${x} is not divisible by ${y}`);
}
```
<!-- prettier-ignore-end -->

### try / catch

While the above functions are extremely useful for handling logical errors, they are not sophisticated enough to handle a situation that would completely break your code and cause the program to fail. For example, consider the following example that uses our new "const" keyword:

```js
const PI = 3.14159;

console.log('trying to change PI!');

PI = 99;

console.log(`Haha! PI is now: ${PI}`);
```

Here, we are trying to change the value of a constant: PI. If we try to run this short program in Node.js, the program will crash before we get a chance to see the string "Haha! PI is now: 99", or even "Haha! PI is now: 3.14159". There is no elegant recovery and we do not get to exit the program gracefully. This can be a huge problem if, for example we were working with a live connection to a service and an unexpected error occurred. Our program would crash and we would not be able to respond to the error by alerting the user and properly closing the connection. Fortunately, before our program crashes in such a way, Node.js will **"throw"** an **["Error"](https://nodejs.org/docs/latest/api/errors.html#class-error)** object that we can intercept using the **["try...catch"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)** statement:

```js
const PI = 3.14159;

console.log('trying to change PI!');

try {
  PI = 99;
} catch (ex) {
  console.log('uh oh, an error occurred!');
}

console.log(`Alas, it cannot be done, PI remains: ${PI}`);
```

If we execute the above code in Node.js we will find that our program doesn't crash and that our string: "Alas, it cannot be done, PI remains: 3.14159" gets correctly logged to the terminal! Additionally, we can execute a specific block of code right when the error is encountered; in this case we output "uh oh, an error occurred!". This is not very useful to help us debug the error, but it better than having the program crash and at least we know that an error did indeed occur. If we wish to obtain additional information about the error, we can make use of some of the properties / methods of the **[Error](https://nodejs.org/docs/latest/api/errors.html#class-error)** object that was thrown as an exception and caught in our "catch" block. For example, we can alter the code to use the "message" property of the caught exception (ex) to display a more helpful error:

```js
const PI = 3.14159;

console.log('trying to change PI!');

try {
  PI = 99;
} catch (ex) {
  console.log(`uh oh, an error occurred: ${ex.message}`);
  // outputs: uh oh, an error occurred: Assignment to constant variable.
}

console.log(`Alas, it cannot be done, PI remains: ${PI}`);
```

By utilizing properties such as [Error.message](https://nodejs.org/docs/latest/api/errors.html#errormessage) & [Error.stack](https://nodejs.org/docs/latest/api/errors.html#errorstack), we can gain further insight to exactly what went wrong and we can either refactor our code to remedy the error, or acknowledge that the error will happen and handle it gracefully.

Lastly, if we have some code that we would like to execute regardless of whether or not the code in our "try" block is successful, we can use a "finally" block:

```js
const PI = 3.14159;

console.log('trying to change PI!');

try {
  PI = 99;
} catch (ex) {
  console.log(`uh oh, an error occurred: ${ex.message}`);
  // outputs: uh oh, an error occurred: Assignment to constant variable.
} finally {
  console.log('always execute code in this block');
}

console.log(`Alas, it cannot be done, PI remains: ${PI}`);
```

### Throwing Errors

Now that we know how to correctly handle errors that have been thrown by the Node.js runtime environment or by other code / modules included in our solutions, why don't we try throwing our **own exceptions**? This is very straightforward and only requires the use of the **["throw"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)** keyword and (typically) an **[Error](https://nodejs.org/docs/latest/api/errors.html#class-error)** Object:

```js
function divide(x, y) {
  if (y == 0) {
    throw new Error('Division by Zero!');
  }
  return x / y;
}

let a = 3,
  b = 0,
  c;

try {
  c = divide(a, b);
} catch (ex) {
  console.log(`uh oh, an error occurred: ${ex.message}`);
  // outputs: uh oh, an error occurred: Division by Zero!
  c = NaN;
}

console.log(`${a} / ${b} = ${c}`); // 3 / 0 = NaN
```

Notice how the code below the "throw" statement does not get executed, and the flow of execution goes directly into the catch block. This prevents the error from propagating and ensures that it is handled immediately. As you can see, we can throw a new error whenever we detect that an error _may_ occur anywhere in our code. In the above example, we check if our second parameter (y) is zero (0) and rather than trying to do the division, we immediately throw a custom error with the message "Division by Zero!". If the function call exists in a "try" block ( as above ), the execution of the code will immediately continue in the "catch" block and we mitigate the error by setting "c" to NaN.
