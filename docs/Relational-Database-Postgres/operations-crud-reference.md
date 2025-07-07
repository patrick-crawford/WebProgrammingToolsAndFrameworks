---
id: operations-crud-reference
title: Operations (CRUD) Reference
sidebar_position: 3
description: Operations (CRUD) Reference
---

# Operations (CRUD) Reference

The four major operations that are typically performed on data are **C**reate, **R**ead, **U**pdate and **D**elete (**CRUD**). Using these four operations, we can effectively work with the data in our database. Assume we have a simple **Name** model defined:

```js
// Define a "Name" model

const Name = sequelize.define('Name', {
  fName: Sequelize.STRING, // first Name
  lName: Sequelize.STRING, // Last Name
});
```

We can use the following code to **C**reate new names, **R**ead a list of names, **U**pdate a specific name and lastly **D**elete a name from the "Name" table in our database

## Create

To **create** new names in our **Name** table, we can use the following code:

```js
sequelize.sync().then(() => {
  Name.create({
    fName: 'Kyler',
    lName: 'Odin',
  }).then(() => {
    console.log('Kyler Odin created');
  });

  Name.create({
    fName: 'Grier',
    lName: 'Garrick',
  }).then(() => {
    console.log('Grier Garrick created');
  });

  Name.create({
    fName: 'Kolby',
    lName: 'Greyson',
  }).then(() => {
    console.log('Kolby Greyson created');
  });
});
```

In the above code we [create](https://sequelize.org/docs/v6/core-concepts/model-instances/#a-very-useful-shortcut-the-create-method) three new objects following the fields defined in our "Name" model. Since our "Name" model is synchronized with the database, this adds three new records - each with their own unique "id" value, as well as "createdAt" and "updatedAt" values for the implicit primary key and timestamp columns. The create function automatically persists the new object to the database and since it also returns a [promise](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise), we can execute code after the operation is complete. In this case we simply output the name to the console.

## Read

To **read** entries from our **Name** table, we can use the following code:

```js
sequelize.sync().then(() => {
  // return all first names only
  Name.findAll({
    attributes: ['fName'],
  }).then((data) => {
    console.log('All first names');
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].fName);
    }
  });

  // return all first names where id == 2
  Name.findAll({
    attributes: ['fName'],
    where: {
      id: 2,
    },
  }).then((data) => {
    console.log('All first names where id == 2');
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].fName);
    }
  });
});
```

Here, we are once again using a reference to our "Name" model. This time we are using it to fetch data from the "Name" table using the [findAll()](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#simple-select-queries) method. This method takes a number of configuration options in it's object parameter, such as **attributes**, which allows you to limit the columns that are returned (in this case we only want 'fName') and a **where** parameter that enables us to specify conditions that the data must meet to be returned. In the above example, **id** must have a value of **2**.

> **NOTE:** It is important to note that trying to log a model instance directly to console.log (ie: `console.log(data[i])`) will produce a lot of clutter, since Sequelize instances have a lot of things attached to them. Instead, you can use the **.toJSON()** method (which automatically guarantees the instances to be JSON.stringify-ed well). See [sequelize.org - logging instances](https://sequelize.org/docs/v6/core-concepts/model-instances/#note-logging-instances) for more information.

We can also specify an [order](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#ordering) that the returned data should be in, ie:

```js
sequelize.sync().then(() => {
  // return all first names only
  Name.findAll({ order: ['fName'] }).then((data) => {
    console.log('All data');
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].fName);
    }
  });
});
```

> **NOTE**: See the documentation for [advanced queries](https://sequelize.org/master/manual/querying.html) and [fetching associated elements](https://sequelize.org/docs/v6/advanced-association-concepts/eager-loading/#fetching-a-single-associated-element) with the "include" option when using [Model Relationships / Associations](/Relational-Database-Postgres/sequelize-orm-with-postgres#model-relationships--associations) (ie: `Task.findAll({include:[User]})` )

## Update

To **update** existing names in our **Name** table, we can use the following code:

```js
sequelize.sync().then(() => {
  // update User 2's last name to "James"
  // NOTE: this also updates the "updatedAt field"
  Name.update(
    {
      lName: 'James',
    },
    {
      where: { id: 2 }, // only update user with id == 2
    }
  ).then(() => {
    console.log('successfully updated user 2');
  });
});
```

In order to "update" a record in the "Name" table, we make use of the [update](https://sequelize.org/docs/v6/core-concepts/model-instances/#updating-an-instance) method. This method takes two parameters: an object that contains all of the properties and (updated) values for a record, and a second object that is used to specify options for the update - most importantly, the **"where"** property. The "where" property contains an object that is used to specify exactly _which_ record should be updated. In this case, it is the row that has an **id** value of **2**.

## Delete

To **delete** existing names in our **Name** table, we can use the following code:

```js
sequelize.sync().then(() => {
  // remove User 3 from the database
  Name.destroy({
    where: { id: 3 }, // only remove user with id == 3
  }).then(() => {
    console.log('successfully removed user 3');
  });
});
```

The delete functionality is actually achieved via a method called [destroy](https://sequelize.org/docs/v6/core-concepts/model-instances/#deleting-an-instance). In this case, we invoke the **destroy** method on the model that contains the record that we wish to remove (ie, "Name"). It takes a single options object as it's only parameter and like the **update** function, the most important option is the **"where"** property. The "where" property contains an object that is used to specify exactly _which_ record should be removed. In this case, it is the row that has an **id** value of **3**.
