---
id: object-oriented-javascript
title: Object Oriented JavaScript
sidebar_position: 1
description: Object Oriented JavaScript
---

# Object Oriented JavaScript

Like many other modern languages, Javascript is "Object Oriented":

> "Object-oriented programming is about modeling a system as a collection of objects, where each object represents some particular aspect of the system. Objects contain both functions (or methods) and data. An object provides a public interface to other code that wants to use it but maintains its own private, internal state; other parts of the system don't have to care about what is going on inside the object."
>
> [https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming)

## Object Literal Notation

The most simple and straight-forward way to create an object in JavaScript is to use "Object Literal Notation" (sometimes referred to as "object initializer" notation). The syntax for creating an object using this notation is as follows:

```javascript
let obj = {
  property_1: value_1,
  property_2: value_2,
  // ...,
  'property n': value_n,
}; // properties can also be defined as a string`
```

So, if we wanted to create an object with the following properties:

- **name** (string)
- **age** (number)
- **occupation** (string)

and methods...

- **setName** ("setter" to set a new value for the "name" property)
- **setAge** ("setter" to set a new value for the "age" property)
- **getName** ("getter" to get the current value of the "name" property)
- **getAge** ("getter" to get the current value of the "age" property)

using "Object Literal" notation, we would write the code:

```js
let architect = {
  name: 'Joe',
  age: 34,
  occupation: 'Architect',

  setName: function (newName) {
    this.name = newName;
  },

  setAge: function (newAge) {
    this.age = newAge;
  },

  getName: function () {
    return this.name;
  },

  getAge: function () {
    return this.age;
  },
};
```

and access the data (properties) and functions (methods) using the following code, ie:

```js
console.log(architect.name); // "Joe"
// or
console.log(architect.getName()); // "Joe"
```

We must use the **“this”** keyword whenever we refer to one of the properties of the object inside one of it’s methods. This is due to the fact that when a method is executed, "age" (for example) might already exist in the global scope, or within the scope of the function as a local variable. To be absolutely sure that we are referring to the correct "age" property of the current object, we must refer to the "execution context" - ie: the object that is actually making a call to this method. We know the object has an "age" property, so in order to be more specific about _which_ age variable that we want to change, we leverage the keyword **this**. "this" will refer to the "execution context", ie: the object that called the function! So, **"this.age"** can be read literally as **"the age property on this object"**, which is exactly the property that we wish to edit.

However, while "this" allows us to be specific with which **properties** that we refer to in our **methods**, it can lead to some confusing scenarios. For example, what if we added a new "outputNameDelay()" method to our architect object that writes the architect's name to the console after 1 second (1000 milliseconds):

```js
// ...
outputNameDelay: function(){
  setTimeout(function(){
    console.log(this.name);
  },1000);
}
// ...
architect.outputNameDelay(); // outputs undefined
```

Everything looks correct and we have made proper use of the "this", however because the setTimeout function is not executed as a method of our architect object, we end up with "undefined" as output to the console. There are a number of fixes for this issue (most noteworthy is the "arrow function" syntax - discussed further on) - one common way is to introduce a local variable (often named "that") into the current scope that **holds a reference to "this"**

```javascript
// ...
outputNameDelay: function(){
    let that = this;
    setTimeout(function(){
      console.log(that.name);
    },1000);
}
// ...
architect.outputNameDelay(); // outputs "Joe"
```

Now, we aren't using the "this" keyword from within the setTimeout() function, but rather "that" from our outputNameDelay function and everything works as it should! (ie, "that" points to architect, since it was the architect that invoked the outputNameDelay method).

## The "class" keyword

If we wish to create multiple objects of the same "type" (ie: that have the same properties and methods, but with different values), we can leverage the "class" and "new" keywords, ie:

<!-- prettier-ignore-start -->
```javascript
class Architect {
  name;
  age;
  occupation = 'architect'; // default value of "architect" for occupation

  constructor(setName = '', setAge = 0) { // handle missing parameters with '' and 0
    this.name = setName;
    this.age = setAge;
  }

  setName(newName) {
    this.name = newName;
  }

  setAge(newAge) {
    this.age = newAge;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }
}

// define new "architect objects using the "new" keyword with the "architect" class

let architect1 = new Architect('Joe', 34);
let architect2 = new Architect('Mary', 49);

// samples of accessing properties and methods on both objects

console.log(architect1.name); // "Joe"

console.log(architect1.getName()); // "Joe"
console.log(architect2.getName()); // "Mary"
```
<!-- prettier-ignore-end -->

Here, we specify the properties (with default values), a "constructor" function to take initialization parameters, as well as specify all of the methods within the "class" block.

### Private Methods / Properties

Notice how we can access the "name" property of the new Architect objects, directly (ie: without using the "getName()" function)? This is because by default, all properties and methods are "public". If we wish to mark properties as "private" (preventing the property from being accessed directly), we must add a "#" character to the beginning of the property or method name. For example:

```js
class Architect {
  #name;
  #age;
  #occupation = 'architect'; // default value of "architect" for occupation

  constructor(setName = '', setAge = 0) {
    this.#name = setName;
    this.#age = setAge;
  }

  #privateMethod() {
    console.log("I'm a private method");
  }

  setName(newName) {
    this.#name = newName;
  }

  setAge(newAge) {
    this.#age = newAge;
  }

  getName() {
    return this.#name;
  }

  getAge() {
    return this.#age;
  }
}

let architect1 = new Architect('Joe', 34);
console.log(architect1.#name); // SyntaxError
```

If we now try to access the "#name" property directly on an object created with this class, we get the following error:

```
SyntaxError: Private field '#name' must be declared in an enclosing class
```

### Getters / Setters

If we do wish to provide direct access to the "name" and "age" properties however, we can use ["setters"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set) and ["getters"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get). This way, we have more control over how the properties are manipulated and retrieved, internally to the class. For example, if we want controlled access to the "name" and "age" properties, we could use the following syntax:

```js
class Architect {
  #name;
  #age;
  #occupation = 'architect'; // default value of "architect" for occupation

  constructor(setName = '', setAge = 0) {
    this.#name = setName;
    this.#age = setAge;
  }

  #privateMethod() {
    console.log("I'm a private method");
  }

  set name(newName) {
    this.#name = newName;
  }

  set age(newAge) {
    this.#age = newAge;
  }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age;
  }
}

let architect1 = new Architect('Joe', 34);
console.log(architect1.name); // Joe
```

### Inheritance

A core principal of Object-Oriented Programming is "inheritance":

> "a mechanism where you can to derive a class from another class for a hierarchy of classes that share a set of attributes and methods."
>
> [https://stackify.com/oop-concept-inheritance](https://stackify.com/oop-concept-inheritance)

In JavaScript, this is implemented via the "Prototype Chain":

> "When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain."
>
> [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

This is why we can access properties like "length" on a string, even though it is a primitive - it exists on the **prototype** of the built-in [String Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String). When we access the "length" property, a string primitive is automatically wrapped in a "String" object via a process known as ["auto-boxing"](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) and we gain access to the property on the prototype.

To see this in action, let's modify the String prototype after we create a new string primitive. Once the string primitive is "auto-boxed" with the String object, we should have access to whatever we add on the prototype:

```js
let name = 'Thomas Anderson';

String.prototype.sayHello = function () {
  console.log('Hello from String!');
};

name.sayHello(); // Hello from String!
```

Now that we know a little about how inheritance is implemented in JavaScript, you might be asking: "how does this work in our class definition?" and "do we have to modify the prototype of new objects directly?"

Fortunately, JavaScript has added the "extend" keyword so that we do not have to. For example, if our "architect" class inherits from a more generic "Job" class, we could write the code:

```js
class Job {
  #name;
  #age;
  #occupation;

  constructor(setName = '', setAge = 0) {
    this.#name = setName;
    this.#age = setAge;
  }

  set name(newName) {
    this.#name = newName;
  }

  set age(newAge) {
    this.#age = newAge;
  }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age;
  }
}
```

for the "Job" class and add the new functionality for the "Architect" class using the following code:

```js
class Architect extends Job {
  #occupation = 'architect';

  constructor(setName = '', setAge = 0) {
    super(setName, setAge); // invoke the "parent" constructor
  }

  #privateMethod() {
    console.log("I'm a private method");
  }
}

let architect1 = new Architect('Joe', 34);
console.log(architect1.name);
```

To verify that Job is indeed part of the "prototype chain" of the new architect1 object, we can use the familiar "prototype" test from above, ie:

```js
Job.prototype.sayHello = function () {
  console.log('Hello from Job!');
};

architect1.sayHello(); // Hello from Job!
```
