---
id: operations-crud-reference
title: Operations (CRUD) Reference
sidebar_position: 3
description: Operations (CRUD) Reference
---

# Operations (CRUD) Reference

Once again, we will be discussing the four major operations typically performed on data: **C**reate, **R**ead, **U**pdate and **D**elete (**CRUD**). The operations in the code below will each work with the familiar "companySchema" using the "Company" model:

```js
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

## Create

To "save" (create) a new document, we must first create the document in code using the model we want (ie: "Company"). Then we can call a built in method, ["save"](https://mongoosejs.com/docs/models.html#constructing-documents) on the new object to save it.

```js
const kwikEMart = new Company({ ... });

kwikEMart.save().then(() => {
  // everything good
  console.log("kwikEMart saved");
}).catch(err => {
  // there was an error
  console.log(err);
});
```

## Read

To "find" (read) documents from the database, we use the ["find"](<https://mongoosejs.com/docs/api/model.html#Model.find()>) method on the model object itself (ie: "Company"), ie:

```js
Company.find({ companyName: 'The Kwik-E-Mart' })
  //.sort({}) //optional "sort" - https://docs.mongodb.com/manual/reference/operator/aggregation/sort/
  .exec()
  .then((companies) => {
    // companies will be an array of objects.
    // Each object will represent a document that matched the query
    console.log(companies);
  });
```

### Selecting specific fields

If we wish to limit the results to include only specific fields, we can pass the list of fields as a space-separated string in the second parameter to the find() method, ie:

```js
Company.find({ companyName: 'The Kwik-E-Mart' }, 'address phone')
  //.sort({}) //optional "sort" - https://docs.mongodb.com/manual/reference/operator/aggregation/sort/
  .exec()
  .then((companies) => {
    // companies will be an array of objects.
    // Each object will represent a document that matched the query
    console.log(companies);
  });
```

For complex queries (ie: ["greater than"](https://docs.mongodb.com/manual/reference/operator/query/gt/), ["in"](https://docs.mongodb.com/manual/reference/operator/query/in/), ["or"](https://docs.mongodb.com/manual/reference/operator/query/or/), etc, etc.) see the [Mongoose Query Guide](https://mongoosejs.com/docs/queries.html) and the MongoDB documentation under [Query and Projection Operators](https://docs.mongodb.com/manual/reference/operator/query/)

## Update

To update documents in the database, we use the [updateOne()](<https://mongoosejs.com/docs/api/model.html#Model.updateOne()>) method on the model object (ie: "Company"). We typically pass this function two arguments: the query to select which documents to update and the fields to set for the documents that match the query.

> **NOTE:** See [update operators](https://docs.mongodb.com/manual/reference/operator/update/), ie: [$set](https://docs.mongodb.com/manual/reference/operator/update/set/), [$push](https://docs.mongodb.com/manual/reference/operator/update/push/) and [$addToSet](https://docs.mongodb.com/manual/reference/operator/update/addToSet/) for more information.

<!-- prettier-ignore-start -->
```js
Company.updateOne(
  { companyName: 'The Kwik-E-Mart' }, 
  { $set: { employeeCount: 3 } }
).exec();
```
<!-- prettier-ignore-end -->

## Delete

To delete documents in the database, we use the [deleteOne()](<https://mongoosejs.com/docs/api/model.html#Model.deleteOne()>) method on the model object (ie: "Company").

```js
Company.deleteOne({ companyName: 'The Kwik-E-Mart' })
  .exec()
  .then(() => {
    // removed company
    console.log('removed company');
  })
  .catch((err) => {
    console.log(err);
  });
```
