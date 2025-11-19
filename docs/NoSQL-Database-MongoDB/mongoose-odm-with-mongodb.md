---
id: mongoose-odm-with-mongodb
title: Mongoose ODM with MongoDB
sidebar_position: 2
description: Mongoose ODM with MongoDB
---

# Mongoose ODM with MongoDB

When we work with MongoDB in Node, we won't work directly with the MongoDB driver. Instead, we will use a popular open source module called "Mongoose" - an ODM ("Object Data Modeling") library that serves as a wrapper for the Mongo driver and provides extra functionality:

> "Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.".
>
> [https://mongoosejs.com](https://mongoosejs.com/)

To begin working with Mongoose, we need to retrieve it from [NPM](https://www.npmjs.com/package/mongoose):

```bash
npm install mongoose
```

and 'require' it in our code:

```js
const mongoose = require('mongoose');
```

## Mongoose Schemas

Before we look at how to establish a connection to our MongoDB Atlas DB and work with the data using Mongoose, let's first determine the type of data that we wish to store. For example, let's say that our application requires "company" information to be persisted. Each "company" used by our system can be represented using the following properties (ie, its "shape"), as illustrated below for "The Kwik-E-Mart":

```js
{
  companyName: "The Kwik-E-Mart",
  address: "Springfield",
  phone: "212-842-4923",
  employeeCount: 3,
  country: "U.S.A"
}
```

To begin working with "companies" like this in our database using Mongoose, the first step is to create a "[schema](https://mongoosejs.com/docs/guide.html#definition)".

### Creating a Schema

From the documentation: "Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection". So, for us to work with a specific collection in our MongoDB database, we must first define a "schema", which defines the structure of the documents to be added to the collection (as well as to provide other features such as ["validators"](https://mongoosejs.com/docs/validation.html#validation), etc.).

To represent the above company data as a Mongoose Schema, we can use the following code:

```js
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let companySchema = new Schema({
  companyName: String,
  address: String,
  phone: String,
  employeeCount: {
    type: Number,
    default: 0,
  },
  country: String,
});

let Company = mongoose.model('companies', companySchema);
```

Essentially, a schema is like a blueprint for a document that will be saved in the DB. Here, we define the fields that can exist on a document for this collection, and setting their expected [types](http://mongoosejs.com/docs/schematypes.html), default values, and sometimes if they are required, or have an index on them.

In the above code, we have defined a Company schema with 5 properties as discussed, and set their [types](http://mongoosejs.com/docs/schematypes.html) appropriately. The employee count is not just a simple number, we also want to include a default value of 0 of the count field is not supplied. Using defaults where it makes sense to have them is good practice.

The last line of code tells mongoose to register this schema (companySchema) as a model and connect it to the companies collection (Note: the "companies" collection will be automatically created if it doesn't exist yet). We can then use the Company variable to make queries against this collection and insert, update, or remove documents from the Company model.

### Unique Index

A unique index may also be applied at the database level and can be attached to one or more fields of a document.

The most common use for this is when we want to enforce a unique value across all documents in a collection for a certain field. A perfect use case for this is the companyName field of our company schema, ie: it wouldn't make sense to have multiple companies with the same name in the system. To prevent this and add a unique index in to the companyName field, we just have to add `unique: true` to the schema declaration from before.

```js
// define the company schema
const companySchema = new Schema({
  companyName: {
    type: String,
    unique: true,
  },
  address: String,
  phone: String,
  employeeCount: {
    type: Number,
    default: 0,
  },
  country: String,
});
```

:::info
With the "unique: true" property set on the "companyName" field, Mongoose will return "E11000 duplicate key error" if we try to save two companies with the same "companyName" field.
:::

## Adding Data

Now that we have determined the "schema", let's see how Mongoose works to add our data ("The Kwik-E-Mart") to the database.

:::caution
For the below code to function correctly, you will need to place your connection string (determined earlier in [Introduction to MongoDB](NoSQL-Database-MongoDB/introduction-to-mongodb.md#obtaining-your-connection-string)), in place of the `'Your connection string here'`. You will **also** have to **update** it to include a database name. For example, if your connection string looks like the following:

```
mongodb+srv://user:yourPassword@cluster0.abc123.mongodb.net/?retryWrites=true&w=majority
```

You must update it to include a **database** name so that the default name: "test" is not used. For example, if you wish your database to be called "demo", you would update the connection string to include "demo" after "mongodb.net/", ie:

```
mongodb+srv://user:yourPassword@cluster0.abc123.mongodb.net/demo?retryWrites=true&w=majority
```

:::

<!-- prettier-ignore-start -->
```js
// require mongoose and setup the Schema
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

// define the company schema
let companySchema = new Schema({
  companyName: String,
  address: String,
  phone: String,
  employeeCount: {
    type: Number,
    default: 0,
  },
  country: String,
});

// register the Company model using the companySchema
// use the companies collection in the db to store documents
let Company = mongoose.model('companies', companySchema);

// connect to Your MongoDB Atlas Database
mongoose.connect('Your connection string here').then(()=>{

  // create a new company
  let kwikEMart = new Company({
    companyName: 'The Kwik-E-Mart',
    address: 'Springfield',
    phone: '212-842-4923',
    employeeCount: 3,
    country: 'U.S.A',
  });

  // save the company
  kwikEMart.save().then(() => {
      console.log('The Kwik-E-Mart company was saved to the companies collection');
      process.exit();
    })
    .catch((err) => {
      console.log('There was an error saving the Kwik-E-Mart company');
      process.exit();
    });

}).catch(err=>{
  console.log(err);
});
```
<!-- prettier-ignore-end -->

## Reading Data

To confirm that our data was indeed added to the database, we can either log back in to MongoDB Atlas and click "Browse collections" for our cluster:

![Browse collections](/img/Atlas-browse-collections.png)

or we can query the data using Mongoose to confirm that it was entered correctly. Here, we will use the same code as above (being sure to include the code to create the "Company" object), except we can omit creating &amp; saving a new "Company" (ie: "kwikEMart"). Instead, we will use the ["find"](<https://mongoosejs.com/docs/api/model.html#Model.find()>) method on the "Company" model to locate our "The Kwik-E-Mart" company:

```js
Company.find({ companyName: 'The Kwik-E-Mart' })
  .exec()
  .then((company) => {
    if (!company) {
      console.log('No company could be found');
    } else {
      console.log(company);
    }
    // exit the program after saving and finding
    process.exit();
  })
  .catch((err) => {
    console.log(`There was an error: ${err}`);
    process.exit();
  });
```

:::info
If you examine the output, you will notice that the data returned includes two extra fields, added by default to our document:

- \_id: A unique [ObjectID](https://docs.mongodb.com/manual/reference/bson-types/#std-label-objectid)
- \_\_v: The [versionKey](https://mongoosejs.com/docs/guide.html#versionKey)
  :::

### .exec()

The .exec() call is added after a mongoose query to tell mongoose to [return a promise](https://mongoosejs.com/docs/promises.html#queries-are-not-promises). If you leave out the .exec(), mongoose will still work with .then() calls but the object returned will not be a proper promise. It is good practice to always use .exec() after your query has been setup and before the .then() method is invoked.

## Arrays and Recursive Schemas

A "recursive schema" is a schema that contains an array of elements with the same schema as the definition. We can use this to store tree structures such as file / folder hierarchies or comment trees for a blog post. For example: say we wish to store a tree of comments, where each comment can have one or more comments, which can have one or more comments, and so on. We can specify our recursive "commentSchema" using the following code:

```js
const commentSchema = new Schema({
  comment: String,
  author: String,
  date: Date,
});

commentSchema.add({ comments: [commentSchema] });

let Comment = mongoose.model('comments', commentSchema);
```

Here, we add a "comments" field with a type of "[commentSchema]" to the original "commentSchema". Using this syntax, we indicate that all "comments" will consist of an [Array](https://mongoosejs.com/docs/schematypes.html#arrays) defined by "commentSchema". Now, we can easily create documents that appear in this format, ie:

```js
let commentChain = new Comment({
  comment: 'Star Wars is awesome',
  author: 'Author 1',
  date: new Date(),
  comments: [
    {
      comment: 'I agree',
      author: 'Author 2',
      date: new Date(),
      comments: [
        {
          comment: 'I agree with Author 2',
          author: 'Author 3',
          date: new Date(),
          comments: [],
        },
      ],
    },
  ],
});
```

## Multiple Connections

Using Mongoose, it is also possible to have [multiple connections](https://mongoosejs.com/docs/connections.html#multiple_connections) configured for your application. If this is the case, we have to make a few small changes on how we **connect** to each DB, and how we define our models

:::caution
The use of the "[encodeURIComponent](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)" is necessary if your password contains special characters, ie "$"
:::

```js
// ...

let pass1 = encodeURIComponent('pa$$word1'); // this step is needed if there are special characters in your password, ie "$"
let db1 = mongoose.createConnection(
  `mongodb+srv://user:${pass1}@cluster0.abc123.mongodb.net/demo?retryWrites=true&w=majority`
);

// verify the db1 connection

db1.on('error', (err) => {
  console.log('db1 error!');
});

db1.once('open', () => {
  console.log('db1 success!');
});

// ...

let pass2 = encodeURIComponent('pa$$word2'); // this step is needed if there are special characters in your password, ie "$"
let db2 = mongoose.createConnection(
  `mongodb+srv://dbUser:${pass2}@cluster0.2def3.mongodb.net/db2?retryWrites=true&w=majority`
);

// ...

let model1 = db1.model('model1', model1Schema); // predefined "model1Schema" used to create "model1" on db1

let model2 = db2.model('model2', model2Schema); // predefined "model2Schema" used to create "model2" on db2

// ...
```

Instead of using **"connect"**, we instead use **"createConnection"** and save the result as a reference to the connection (ie: **"db1"** and **"db2"** from above). We can then use **db1** or **db2** to create models on each database separately. Additionally, if we want to _test_ the connection, we can use the **.on()** and **.once()** methods of each connection.
