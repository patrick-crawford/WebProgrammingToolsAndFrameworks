---
id: javascript-object-notation-json
title: JavaScript Object Notation (JSON)
sidebar_position: 1
description: JavaScript Object Notation (JSON)
---

# JavaScript Object Notation (JSON)

JSON ("JavaScript Object Notation") is a plain-text format that easily converts to a JavaScript object in memory. Essentially, JSON is a way to define an object using "Object Literal" notation, **outside** your application. Using the native JavaScript built-in [JSON Object](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON), we can preform the conversion from plain-text (JSON) to JavaScript Object (and vice-versa) easily. For example:

## Converting JSON to an Object

<!-- prettier-ignore-start -->
```js
let myJSONStr = '{"users":[{"userId":1,"fName":"Joe","lName":"Smith"},{"userId":2,"fName":"Jeffrey","lName":"Sherman"},{"userId":3,"fName":"Shantell","lName":"McLeod"}]}';

// Convert to An Object:
let myObj = JSON.parse(myJSONStr);

// Access the 3rd user (Shantell McLeod)
console.log(myObj.users[2].fName); // Shantell
```

## Converting an Object to JSON

```js
let myObj = {
  users: [
    { userId: 1, fName: 'Joe', lName: 'Smith' },
    { userId: 2, fName: 'Jeffrey', lName: 'Sherman' },
    { userId: 3, fName: 'Shantell', lName: 'McLeod' },
  ],
};

let myJSON = JSON.stringify(myObj);

console.log(myJSON); // Outputs: '{"users":[{"userId":1,"fName":"Joe","lName":"Smith"},{"userId":2,"fName":"Jeffrey","lName":"Sherman"},{"userId":3,"fName":"Shantell","lName":"McLeod"}]}'
```
<!-- prettier-ignore-end -->

## Caveats When Using JSON

The JSON format works exceptionally well to "serialize" (convert an object in memory to a byte / string representation) and "deserialize" (converting back to an object in memory). However, there are certain things that cannot be encoded to JavaScript Object Notation:

### Object Instances

Instances of objects in memory cannot be stored in a JSON format. For example, consider the following "product" object:

```js
let product = {
  name: 'Pencil',
  price: 3.95,
  added: new Date('December 17, 1995 03:24:00'),
};
```

Since the "added" property is an instance of the [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object, we can invoke methods such as "toLocalStimeString()":

```js
console.log(product.added.toLocaleTimeString('fr-CA')); // 03 h 24 min 00 s
```

However, if we convert the product to JSON and back, we lose this ability:

```js
// convert to JSON
let productJSON = JSON.stringify(product);

// restore (convert to object)
let productFromJSON = JSON.parse(productJSON);

console.log(productFromJSON.added.toLocaleTimeString('fr-CA')); // TypeError: productFromJSON.added.toLocaleTimeString is not a function
```

This issue occurs because during the conversion to JSON, the Date object was implicitly converted to a string:

```json
{
  "name": "Pencil",
  "price": 3.95,
  "added": "1995-12-17T08:24:00.000Z"
}
```

### Functions (Methods)

Functions ("methods") that exist on the object also will not convert to JSON. For example:

```js
let counter = {
  current: 0,
  increase: function () {
    this.current++;
  },
};

console.log(counter.current); // 0
counter.increase();
console.log(counter.current); // 1
```

Once again, if we attempt to convert this object to JSON and back, we lose the "increase()" function:

```js
// convert to JSON
let counterJSON = JSON.stringify(counter);

// restore (convert to object)
let counterFromJSON = JSON.parse(counterJSON);

console.log(counterFromJSON.current); // 0
counterFromJSON.increase(); // TypeError: counterFromJSON.increase is not a function
```

In this case, this issue occurs because during the conversion to JSON, the "increase" function was not included:

```json
{ "current": 0 }
```

> **NOTE:** For more information on how values are "stringified", refer to the MDN documentation on ["JSON.stringify()"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#description)
