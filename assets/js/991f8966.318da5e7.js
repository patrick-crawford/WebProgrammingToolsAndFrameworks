"use strict";(self.webpackChunkipc144=self.webpackChunkipc144||[]).push([[8764],{3905:(e,o,t)=>{t.d(o,{Zo:()=>l,kt:()=>h});var n=t(7294);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?r(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,n,a=function(e,o){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),m=function(e){var o=n.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},l=function(e){var o=m(e.components);return n.createElement(c.Provider,{value:o},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},u=n.forwardRef((function(e,o){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=m(t),u=a,h=d["".concat(c,".").concat(u)]||d[u]||p[u]||r;return t?n.createElement(h,s(s({ref:o},l),{},{components:t})):n.createElement(h,s({ref:o},l))}));function h(e,o){var t=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=u;var i={};for(var c in o)hasOwnProperty.call(o,c)&&(i[c]=o[c]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var m=2;m<r;m++)s[m]=t[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1301:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var n=t(7462),a=(t(7294),t(3905));t(8209);const r={id:"mongoose-odm-with-mongodb",title:"Mongoose ODM with MongoDB",sidebar_position:2,description:"Mongoose ODM with MongoDB"},s="Mongoose ODM with MongoDB",i={unversionedId:"NoSQL-Database-MongoDB/mongoose-odm-with-mongodb",id:"NoSQL-Database-MongoDB/mongoose-odm-with-mongodb",title:"Mongoose ODM with MongoDB",description:"Mongoose ODM with MongoDB",source:"@site/docs/NoSQL-Database-MongoDB/mongoose-odm-with-mongodb.md",sourceDirName:"NoSQL-Database-MongoDB",slug:"/NoSQL-Database-MongoDB/mongoose-odm-with-mongodb",permalink:"/NoSQL-Database-MongoDB/mongoose-odm-with-mongodb",draft:!1,editUrl:"https://github.com/patrick-crawford/WebProgrammingToolsAndFrameworks/tree/master/docs/NoSQL-Database-MongoDB/mongoose-odm-with-mongodb.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"mongoose-odm-with-mongodb",title:"Mongoose ODM with MongoDB",sidebar_position:2,description:"Mongoose ODM with MongoDB"},sidebar:"courseNotesSidebar",previous:{title:"Introduction to MongoDB",permalink:"/NoSQL-Database-MongoDB/introduction-to-mongodb"},next:{title:"Operations (CRUD) Reference",permalink:"/NoSQL-Database-MongoDB/operations-crud-reference"}},c={},m=[{value:"Mongoose Schemas",id:"mongoose-schemas",level:2},{value:"Creating a Schema",id:"creating-a-schema",level:3},{value:"Unique Index",id:"unique-index",level:3},{value:"Adding Data",id:"adding-data",level:2},{value:"Reading Data",id:"reading-data",level:2},{value:".exec()",id:"exec",level:3},{value:"Arrays and Recursive Schemas",id:"arrays-and-recursive-schemas",level:2},{value:"Multiple Connections",id:"multiple-connections",level:2}],l={toc:m},d="wrapper";function p(e){let{components:o,...r}=e;return(0,a.kt)(d,(0,n.Z)({},l,r,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mongoose-odm-with-mongodb"},"Mongoose ODM with MongoDB"),(0,a.kt)("p",null,'When we work with MongoDB in Node, we won\'t work directly with the MongoDB driver. Instead, we will use a popular open source module called "Mongoose" - an ODM ("Object Data Modeling") library that serves as a wrapper for the Mongo driver and provides extra functionality:'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'"Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.".'),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://mongoosejs.com/"},"https://mongoosejs.com"))),(0,a.kt)("p",null,"To begin working with Mongoose, we need to retrieve it from ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/mongoose"},"NPM"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install mongoose\n")),(0,a.kt)("p",null,"and 'require' it in our code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const mongoose = require('mongoose');\n")),(0,a.kt)("h2",{id:"mongoose-schemas"},"Mongoose Schemas"),(0,a.kt)("p",null,'Before we look at how to establish a connection to our MongoDB Atlas DB and work with the data using Mongoose, let\'s first determine the type of data that we wish to store. For example, let\'s say that our application requires "company" information to be persisted. Each "company" used by our system can be represented using the following properties (ie, its "shape"), as illustrated below for "The Kwik-E-Mart":'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n  companyName: "The Kwik-E-Mart",\n  address: "Springfield",\n  phone: "212-842-4923",\n  employeeCount: 3,\n  country: "U.S.A"\n}\n')),(0,a.kt)("p",null,'To begin working with "companies" like this in our database using Mongoose, the first step is to create a "',(0,a.kt)("a",{parentName:"p",href:"https://mongoosejs.com/docs/guide.html#definition"},"schema"),'".'),(0,a.kt)("h3",{id:"creating-a-schema"},"Creating a Schema"),(0,a.kt)("p",null,'From the documentation: "Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection". So, for us to work with a specific collection in our MongoDB database, we must first define a "schema", which defines the structure of the documents to be added to the collection (as well as to provide other features such as ',(0,a.kt)("a",{parentName:"p",href:"https://mongoosejs.com/docs/validation.html#validation"},'"validators"'),", etc.)."),(0,a.kt)("p",null,"To represent the above company data as a Mongoose Schema, we can use the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const mongoose = require('mongoose');\nlet Schema = mongoose.Schema;\n\nlet companySchema = new Schema({\n  companyName: String,\n  address: String,\n  phone: String,\n  employeeCount: {\n    type: Number,\n    default: 0,\n  },\n  country: String,\n});\n\nlet Company = mongoose.model('companies', companySchema);\n")),(0,a.kt)("p",null,"Essentially, a schema is like a blueprint for a document that will be saved in the DB. Here, we define the fields that can exist on a document for this collection, and setting their expected ",(0,a.kt)("a",{parentName:"p",href:"http://mongoosejs.com/docs/schematypes.html"},"types"),", default values, and sometimes if they are required, or have an index on them."),(0,a.kt)("p",null,"In the above code, we have defined a Company schema with 5 properties as discussed, and set their ",(0,a.kt)("a",{parentName:"p",href:"http://mongoosejs.com/docs/schematypes.html"},"types")," appropriately. The employee count is not just a simple number, we also want to include a default value of 0 of the count field is not supplied. Using defaults where it makes sense to have them is good practice."),(0,a.kt)("p",null,'The last line of code tells mongoose to register this schema (companySchema) as a model and connect it to the companies collection (Note: the "companies" collection will be automatically created if it doesn\'t exist yet). We can then use the Company variable to make queries against this collection and insert, update, or remove documents from the Company model.'),(0,a.kt)("h3",{id:"unique-index"},"Unique Index"),(0,a.kt)("p",null,"A unique index may also be applied at the database level and can be attached to one or more fields of a document."),(0,a.kt)("p",null,"The most common use for this is when we want to enforce a unique value across all documents in a collection for a certain field. A perfect use case for this is the companyName field of our company schema, ie: it wouldn't make sense to have multiple companies with the same name in the system. To prevent this and add a unique index in to the companyName field, we just have to add ",(0,a.kt)("inlineCode",{parentName:"p"},"unique: true")," to the schema declaration from before."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// define the company schema\nconst companySchema = new Schema({\n  companyName: {\n    type: String,\n    unique: true,\n  },\n  address: String,\n  phone: String,\n  employeeCount: {\n    type: Number,\n    default: 0,\n  },\n  country: String,\n});\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"NOTE:"),' With the "unique: true" property set on the "companyName" field, Mongoose will return "E11000 duplicate key error" if we try to save two companies with the same "companyName" field.')),(0,a.kt)("h2",{id:"adding-data"},"Adding Data"),(0,a.kt)("p",null,'Now that we have determined the "schema", let\'s see how Mongoose works to add our data ("The Kwik-E-Mart") to the database.'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"NOTE:")," For the below code to function correctly, you will need to place your connection string (determined earlier in ",(0,a.kt)("a",{parentName:"p",href:"/NoSQL-Database-MongoDB/introduction-to-mongodb#obtaining-your-connection-string"},"Introduction to MongoDB"),"), in place of the ",(0,a.kt)("inlineCode",{parentName:"p"},"'Your connection string here'"),". You will ",(0,a.kt)("strong",{parentName:"p"},"also")," have to ",(0,a.kt)("strong",{parentName:"p"},"update")," it to include a database name. For example, if your connection string looks like the following:"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},"mongodb+srv://user:yourPassword@cluster0.abc123.mongodb.net/?retryWrites=true&w=majority\n")),(0,a.kt)("p",{parentName:"blockquote"},"You must update it to include a ",(0,a.kt)("strong",{parentName:"p"},"database"),' name so that the default name: "test" is not used. For example, if you wish your database to be called "demo", you would update the connection string to include "demo" after "mongodb.net/", ie:'),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},"mongodb+srv://user:yourPassword@cluster0.abc123.mongodb.net/demo?retryWrites=true&w=majority\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// require mongoose and setup the Schema\nconst mongoose = require('mongoose');\nlet Schema = mongoose.Schema;\n\n// connect to Your MongoDB Atlas Database\nmongoose.connect('Your connection string here');\n\n// define the company schema\nlet companySchema = new Schema({\n  companyName: String,\n  address: String,\n  phone: String,\n  employeeCount: {\n    type: Number,\n    default: 0,\n  },\n  country: String,\n});\n// register the Company model using the companySchema\n// use the companies collection in the db to store documents\nlet Company = mongoose.model('companies', companySchema);\n\n// create a new company\nlet kwikEMart = new Company({\n  companyName: 'The Kwik-E-Mart',\n  address: 'Springfield',\n  phone: '212-842-4923',\n  employeeCount: 3,\n  country: 'U.S.A',\n});\n\n// save the company\nkwikEMart\n  .save()\n  .then(() => {\n    console.log('The Kwik-E-Mart company was saved to the companies collection');\n    process.exit();\n  })\n  .catch((err) => {\n    console.log('There was an error saving the Kwik-E-Mart company');\n    process.exit();\n  });\n")),(0,a.kt)("h2",{id:"reading-data"},"Reading Data"),(0,a.kt)("p",null,'To confirm that our data was indeed added to the database, we can either log back in to MongoDB Atlas and click "Browse collections" for our cluster:'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Browse collections",src:t(2449).Z,width:"1638",height:"610"})),(0,a.kt)("p",null,'or we can query the data using Mongoose to confirm that it was entered correctly. Here, we will use the same code as above (being sure to include the code to create the "Company" object), except we can omit creating ',"&",' saving a new "Company" (ie: "kwikEMart"). Instead, we will use the ',(0,a.kt)("a",{parentName:"p",href:"https://mongoosejs.com/docs/api/model.html#Model.find()"},'"find"'),' method on the "Company" model to locate our "The Kwik-E-Mart" company:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Company.find({ companyName: 'The Kwik-E-Mart' })\n  .exec()\n  .then((company) => {\n    if (!company) {\n      console.log('No company could be found');\n    } else {\n      console.log(company);\n    }\n    // exit the program after saving and finding\n    process.exit();\n  })\n  .catch((err) => {\n    console.log(`There was an error: ${err}`);\n    process.exit();\n  });\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"NOTE:")," If you examine the output, you will notice that the data returned includes two extra fields, added by default to our document:"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"_","id: A unique ",(0,a.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/reference/bson-types/#std-label-objectid"},"ObjectID")),(0,a.kt)("li",{parentName:"ul"},"_","_","v: The ",(0,a.kt)("a",{parentName:"li",href:"https://mongoosejs.com/docs/guide.html#versionKey"},"versionKey")))),(0,a.kt)("h3",{id:"exec"},".exec()"),(0,a.kt)("p",null,"The .exec() call is added after a mongoose query to tell mongoose to ",(0,a.kt)("a",{parentName:"p",href:"https://mongoosejs.com/docs/promises.html#queries-are-not-promises"},"return a promise"),". If you leave out the .exec(), mongoose will still work with .then() calls but the object returned will not be a proper promise. It is good practice to always use .exec() after your query has been setup and before the .then() method is invoked."),(0,a.kt)("h2",{id:"arrays-and-recursive-schemas"},"Arrays and Recursive Schemas"),(0,a.kt)("p",null,'A "recursive schema" is a schema that contains an array of elements with the same schema as the definition. We can use this to store tree structures such as file / folder hierarchies or comment trees for a blog post. For example: say we wish to store a tree of comments, where each comment can have one or more comments, which can have one or more comments, and so on. We can specify our recursive "commentSchema" using the following code:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const commentSchema = new Schema({\n  comment: String,\n  author: String,\n  date: Date,\n});\n\ncommentSchema.add({ comments: [commentSchema] });\n\nlet Comment = mongoose.model('comments', commentSchema);\n")),(0,a.kt)("p",null,'Here, we add a "comments" field with a type of "',"[commentSchema]",'" to the original "commentSchema". Using this syntax, we indicate that all "comments" will consist of an ',(0,a.kt)("a",{parentName:"p",href:"https://mongoosejs.com/docs/schematypes.html#arrays"},"Array"),' defined by "commentSchema". Now, we can easily create documents that appear in this format, ie:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let commentChain = new Comment({\n  comment: 'Star Wars is awesome',\n  author: 'Author 1',\n  date: new Date(),\n  comments: [\n    {\n      comment: 'I agree',\n      author: 'Author 2',\n      date: new Date(),\n      comments: [\n        {\n          comment: 'I agree with Author 2',\n          author: 'Author 3',\n          date: new Date(),\n          comments: [],\n        },\n      ],\n    },\n  ],\n});\n")),(0,a.kt)("h2",{id:"multiple-connections"},"Multiple Connections"),(0,a.kt)("p",null,"Using Mongoose, it is also possible to have ",(0,a.kt)("a",{parentName:"p",href:"https://mongoosejs.com/docs/connections.html#multiple_connections"},"multiple connections")," configured for your application. If this is the case, we have to make a few small changes on how we ",(0,a.kt)("strong",{parentName:"p"},"connect")," to each DB, and how we define our models"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"NOTE"),': The use of the "',(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent"},"encodeURIComponent"),'" is necessary if your password contains special characters, ie "$"')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// ...\n\nlet pass1 = encodeURIComponent('pa$$word1'); // this step is needed if there are special characters in your password, ie \"$\"\nlet db1 = mongoose.createConnection(\n  `mongodb+srv://user:${pass1}@cluster0.abc123.mongodb.net/demo?retryWrites=true&w=majority`\n);\n\n// verify the db1 connection\n\ndb1.on('error', (err) => {\n  console.log('db1 error!');\n});\n\ndb1.once('open', () => {\n  console.log('db1 success!');\n});\n\n// ...\n\nlet pass2 = encodeURIComponent('pa$$word2'); // this step is needed if there are special characters in your password, ie \"$\"\nlet db2 = mongoose.createConnection(\n  `mongodb+srv://dbUser:${pass2}@cluster0.2def3.mongodb.net/db2?retryWrites=true&w=majority`\n);\n\n// ...\n\nlet model1 = db1.model('model1', model1Schema); // predefined \"model1Schema\" used to create \"model1\" on db1\n\nlet model2 = db2.model('model2', model2Schema); // predefined \"model2Schema\" used to create \"model2\" on db2\n\n// ...\n")),(0,a.kt)("p",null,"Instead of using ",(0,a.kt)("strong",{parentName:"p"},'"connect"'),", we instead use ",(0,a.kt)("strong",{parentName:"p"},'"createConnection"')," and save the result as a reference to the connection (ie: ",(0,a.kt)("strong",{parentName:"p"},'"db1"')," and ",(0,a.kt)("strong",{parentName:"p"},'"db2"')," from above). We can then use ",(0,a.kt)("strong",{parentName:"p"},"db1")," or ",(0,a.kt)("strong",{parentName:"p"},"db2")," to create models on each database separately. Additionally, if we want to ",(0,a.kt)("em",{parentName:"p"},"test")," the connection, we can use the ",(0,a.kt)("strong",{parentName:"p"},".on()")," and ",(0,a.kt)("strong",{parentName:"p"},".once()")," methods of each connection."))}p.isMDXComponent=!0},2449:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/Atlas-browse-collections-588f04e5660fe1341f8b45ab9a455b67.png"},8209:(e,o,t)=>{t(7294)}}]);