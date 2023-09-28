"use strict";(self.webpackChunkipc144=self.webpackChunkipc144||[]).push([[980],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||s;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,r[1]=i;for(var c=2;c<s;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9302:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));a(8209);const s={id:"sequelize-orm-with-postgres",title:"Sequelize ORM with Postgres",sidebar_position:2,description:"Sequelize ORM with Postgres"},r="Sequelize ORM with Postgres",i={unversionedId:"Relational-Database-Postgres/sequelize-orm-with-postgres",id:"Relational-Database-Postgres/sequelize-orm-with-postgres",title:"Sequelize ORM with Postgres",description:"Sequelize ORM with Postgres",source:"@site/docs/Relational-Database-Postgres/sequelize-orm-with-postgres.md",sourceDirName:"Relational-Database-Postgres",slug:"/Relational-Database-Postgres/sequelize-orm-with-postgres",permalink:"/WebProgrammingToolsAndFrameworks/Relational-Database-Postgres/sequelize-orm-with-postgres",draft:!1,editUrl:"https://github.com/patrick-crawford/WebProgrammingToolsAndFrameworks/tree/master/docs/Relational-Database-Postgres/sequelize-orm-with-postgres.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"sequelize-orm-with-postgres",title:"Sequelize ORM with Postgres",sidebar_position:2,description:"Sequelize ORM with Postgres"},sidebar:"courseNotesSidebar",previous:{title:"Introduction to Postgres",permalink:"/WebProgrammingToolsAndFrameworks/Relational-Database-Postgres/introduction-to-postgres"},next:{title:"Operations (CRUD) Reference",permalink:"/WebProgrammingToolsAndFrameworks/Relational-Database-Postgres/operations-crud-reference"}},l={},c=[{value:"Getting Started",id:"getting-started",level:2},{value:"Models (Tables) Introduction",id:"models-tables-introduction",level:2},{value:"Defining Models",id:"defining-models",level:2},{value:"Model Relationships / Associations",id:"model-relationships--associations",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...s}=e;return(0,o.kt)(d,(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sequelize-orm-with-postgres"},"Sequelize ORM with Postgres"),(0,o.kt)("p",null,'Sequelize is an "ORM" tool, which stands for "Object-Relational Mapper". Using an Object-Relational Mapper enables us to interact with a relational database using object-oriented programming techniques, which abstracts away the need to write specific SQL statements. Instead, we work with regular JavaScript to interact with the data using familiar object-oriented & asynchronous programming techniques.'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Using an ORM has two benefits:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can replace the underlying database without necessarily needing to change the code that uses it. This allows developers to optimize for the characteristics of different databases based on their usage.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Basic validation of data can be implemented within the framework. This makes it easier and safer to check that data is stored in the correct type of database field, has the correct format (e.g. an email address), and isn't malicious in any way (hackers can use certain patterns of code to do bad things such as deleting database records)."))),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Web_frameworks#abstract_and_simplify_database_access"},"MDN: Abstract and simplify database access"))),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,'Fortunately, "Sequelize" is packaged as a module on NPM (see: ',(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/sequelize"},'"sequelize"'),'). Therefore to get started, we will need to "install" it as a dependency within our project. With your application folder open in Visual Studio Code, open the ',(0,o.kt)("strong",{parentName:"p"},"integrated terminal")," and enter the command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install sequelize pg pg-hstore\n")),(0,o.kt)("p",null,"This will add both the ",(0,o.kt)("strong",{parentName:"p"},"sequelize")," and the ",(0,o.kt)("strong",{parentName:"p"},"pg / pg-hstore"),' modules to our node_modules folder, as well as add their names & version numbers to our package.json file under "dependencies".'),(0,o.kt)("p",null,"Next, we need to update our ",(0,o.kt)("strong",{parentName:"p"},"server.js")," file to use the new modules so that we can test our connection to the database. If you're working with an existing application, comment out any existing Express app code (routes, listen, etc.) that you have in server.js (for the time being) and add the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const Sequelize = require('sequelize');\n\n// set up sequelize to point to our postgres database\nlet sequelize = new Sequelize('database', 'user', 'password', {\n  host: 'host',\n  dialect: 'postgres',\n  port: 5432,\n  dialectOptions: {\n    ssl: { rejectUnauthorized: false },\n  },\n});\n\nsequelize\n  .authenticate()\n  .then(() => {\n    console.log('Connection has been established successfully.');\n  })\n  .catch((err) => {\n    console.log('Unable to connect to the database:', err);\n  });\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("strong",{parentName:"p"},"database")," is your randomly generated \u201cUser & Default database\u201d value, ",(0,o.kt)("strong",{parentName:"p"},"user")," is also your randomly generated \u201cUser & Default database\u201d value, ",(0,o.kt)("strong",{parentName:"p"},"password")," is your password and lastly, ",(0,o.kt)("strong",{parentName:"p"},"host"),' will be your host url (ie: "jelani.db.elephantsql.com").'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTE"),": All of this information is available online via the ElephantSQL dashboard by clicking on your chosen instance name")),(0,o.kt)("p",null,"Once you have updated your app to use the ",(0,o.kt)("strong",{parentName:"p"},"Sequelize"),' module, try running it using our usual "',(0,o.kt)("strong",{parentName:"p"},"node server.js"),'" command. If everything was entered correctly, you should see the following message in the console:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Executing (default): SELECT 1+1 AS result\nConnection has been established successfully.\n")),(0,o.kt)("p",null,"Finally, If you see any other errors at this point, go back and check that you have entered all of your credentials correctly when creating the sequelize object. Recall: You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"ctrl + c")," to stop a node.js application from running."),(0,o.kt)("h2",{id:"models-tables-introduction"},"Models (Tables) Introduction"),(0,o.kt)("p",null,"Now that we have successfully tested the connection to our Postgres database from our node.js application, we must discuss what the ",(0,o.kt)("strong",{parentName:"p"},"Sequelize")," module does and how we will be using it to manage data persistence within our Postgres Database."),(0,o.kt)("p",null,"As we know, sequelize is technically an ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Object-relational_mapping"},'Object-Relational Mapping ("ORM") framework'),'. It maps our JavaScript objects ("models") to tables and rows within our database and will automatically execute relevant SQL commands on the database whenever data using our "models" (JavaScript objects) is updated. This saves us the trouble of manually writing complex SQL statements whenever we wish to update the back-end database to reflect changes made by the user.'),(0,o.kt)("p",null,"To see this in action, update your server.js file to use the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const Sequelize = require('sequelize');\n\n// set up sequelize to point to our postgres database\nconst sequelize = new Sequelize('database', 'user', 'password', {\n  host: 'host',\n  dialect: 'postgres',\n  port: 5432,\n  dialectOptions: {\n    ssl: { rejectUnauthorized: false },\n  },\n  query: { raw: true },\n});\n\n// Define a \"Project\" model\n\nconst Project = sequelize.define('Project', {\n  title: Sequelize.STRING,\n  description: Sequelize.TEXT,\n});\n\n// synchronize the Database with our models and automatically add the\n// table if it does not exist\n\nsequelize.sync().then(() => {\n  // create a new \"Project\" and add it to the database\n  Project.create({\n    title: 'Project1',\n    description: 'First Project',\n  })\n    .then((project) => {\n      // you can now access the newly created Project via the variable project\n      console.log('success!');\n    })\n    .catch((error) => {\n      console.log('something went wrong!');\n    });\n});\n")),(0,o.kt)("p",null,"Once again, ",(0,o.kt)("strong",{parentName:"p"},"database")," is your randomly generated \u201cUser & Default database\u201d value, ",(0,o.kt)("strong",{parentName:"p"},"user")," is also your randomly generated \u201cUser & Default database\u201d value, ",(0,o.kt)("strong",{parentName:"p"},"password")," is your password and lastly, ",(0,o.kt)("strong",{parentName:"p"},"host")," will be your server host url."),(0,o.kt)("p",null,"There is a lot going on in the above code - but before we walk through what everything is doing, try updating the above code with your database credentials and run it once again with ",(0,o.kt)("strong",{parentName:"p"},"node server.js"),". You should see the something very similar to the following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'Executing (default): INSERT INTO "Projects" ("id","title","description","createdAt","updatedAt") VALUES (DEFAULT,\'Project1\',\'First Project\',\'2017-02-28 22:45:25.163 +00:00\',\'2017-02-28 22:45:25.163 +00:00\') RETURNING \\*;\nsuccess!\n')),(0,o.kt)("p",null,'It appears that Sequelize has done some of the heavy lifting for us. To confirm that the create operation was successful and that we have indeed persisted "Project1" in a new "Projects" table, go back to your ',(0,o.kt)("strong",{parentName:"p"},"pgAdmin"),' application, right-click on "',(0,o.kt)("strong",{parentName:"p"},"Tables"),'" and choose "Refresh". You should now see our new "Projects" table in the list.'),(0,o.kt)("p",null,"To view the contents of the table, ",(0,o.kt)("strong",{parentName:"p"},"right-click")," on the ",(0,o.kt)("strong",{parentName:"p"},'"Projects"')," table and select ",(0,o.kt)("strong",{parentName:"p"},"View / Edit Data > All Rows"),". This will open a new window with a grid view that you can use to explore the data in the table:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"View Project Data in pgAdmin",src:a(4178).Z,width:"2580",height:"1148"})),(0,o.kt)("p",null,'You will notice that there are some columns in the "Project" table that we didn\'t define in our "Project" Model; specifically: ',(0,o.kt)("strong",{parentName:"p"},"id"),", ",(0,o.kt)("strong",{parentName:"p"},"createdAt")," and ",(0,o.kt)("strong",{parentName:"p"},"updatedAt"),"; recall:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Define a \"Project\" model\n\nconst Project = sequelize.define('Project', {\n  title: Sequelize.STRING,\n  description: Sequelize.TEXT,\n});\n")),(0,o.kt)("p",null,"It follows that the ",(0,o.kt)("strong",{parentName:"p"},"title")," and ",(0,o.kt)("strong",{parentName:"p"},"description")," columns are there, but where did the others come from? The addition of the extra columns are actually added by default by the ",(0,o.kt)("strong",{parentName:"p"},"sequelize"),' module. Whenever we "define" a new model, we automatically get ',(0,o.kt)("strong",{parentName:"p"},"id"),", ",(0,o.kt)("strong",{parentName:"p"},"createdAt")," and ",(0,o.kt)("strong",{parentName:"p"},"updatedAt"),' and when we save data using this model, our data is automatically updated to include correct values for those fields. This is extremely handy, as we didn\'t actually create our primary-key for the table (sequelize went ahead and made "id" our primary key). Also, the ',(0,o.kt)("strong",{parentName:"p"},"createdAt")," and ",(0,o.kt)("strong",{parentName:"p"},"updatedAt")," fields are both widely used. However, if we decide that we want to specify our own auto-incrementing primary key and remove the createdAt and updatedAt fields, we can define our model using the following code instead:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// Define a "Project" model\n\nconst Project = sequelize.define(\n  \'Project\',\n  {\n    project_id: {\n      type: Sequelize.INTEGER,\n      primaryKey: true, // use "project_id" as a primary key\n      autoIncrement: true, // automatically increment the value\n    },\n    title: Sequelize.STRING,\n    description: Sequelize.TEXT,\n  },\n  {\n    createdAt: false, // disable createdAt\n    updatedAt: false, // disable updatedAt\n  }\n);\n')),(0,o.kt)("p",null,"Now that we have defined our ",(0,o.kt)("strong",{parentName:"p"},"Project"),' model (either with or without the "createdAt" and "updatedAt" timestamps) we can look at the rest of the code, ie the ',(0,o.kt)("strong",{parentName:"p"},"sync()")," operation and creating ",(0,o.kt)("strong",{parentName:"p"},"Project1")," - recall:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// synchronize the Database with our models and automatically add the\n// table if it does not exist\n\nsequelize.sync().then(() => {\n  // create a new \"Project\" and add it to the database\n  Project.create({\n    title: 'Project1',\n    description: 'First Project',\n  })\n    .then((project) => {\n      // you can now access the newly created Project via the variable project\n      console.log('success!');\n    })\n    .catch((error) => {\n      console.log('something went wrong!');\n    });\n});\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://sequelize.org/docs/v6/core-concepts/model-basics/#model-synchronization"},"sequelize.sync()")," operation needs to be completed before we can do anything else. This ensures that all of our models are represented in the database as tables. If we have defined a model in our code that doesn't correspond to a table in the database, ",(0,o.kt)("strong",{parentName:"p"},"sequelize.sync()")," will automatically create it (as we have seen)."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTE:")," We ",(0,o.kt)("strong",{parentName:"p"},"do not")," have to sync() the database before every operation. This is only required when the server starts to ensure that the models are correctly represented as tables within the database.")),(0,o.kt)("p",null,"Once our models have been successfully sync()'d with the database, we can start working with the data. You will notice that we use the familiar ",(0,o.kt)("strong",{parentName:"p"},"then()")," and ",(0,o.kt)("strong",{parentName:"p"},"catch()")," functions; this is because both sync() and create() return a ",(0,o.kt)("strong",{parentName:"p"},"promise")," and as we stated above, we must work with the data ",(0,o.kt)("strong",{parentName:"p"},"after")," the sync() operation has successfully completed."),(0,o.kt)("p",null,'If sync() resolves successfully, we then wish to create a new record in the "Project" table, so we use ',(0,o.kt)("strong",{parentName:"p"},"Project.create()")," method and pass it some data (",(0,o.kt)("strong",{parentName:"p"},"title")," and ",(0,o.kt)("strong",{parentName:"p"},"description"),'). If the operation completed successfully, we see the message "success!" in the console - otherwise we catch the error and output "something went wrong!"'),(0,o.kt)("h2",{id:"defining-models"},"Defining Models"),(0,o.kt)("p",null,"One of the most important things we must do when working with Sequelize is to correctly ",(0,o.kt)("a",{parentName:"p",href:"https://sequelize.org/master/manual/models-definition.html"},"set up our models"),". Once the models are set up successfully, working with the data is simple. Since each model technically corresponds to a table within our database, what we are really doing is defining tables. Each column of a table within our database stores a specific ",(0,o.kt)("strong",{parentName:"p"},"type")," of data. In our previous example, we define the column ",(0,o.kt)("strong",{parentName:"p"},"title")," as a ",(0,o.kt)("strong",{parentName:"p"},"STRING")," and the column ",(0,o.kt)("strong",{parentName:"p"},"description")," as ",(0,o.kt)("strong",{parentName:"p"},"TEXT")," within a table called ",(0,o.kt)("strong",{parentName:"p"},"Project"),"."),(0,o.kt)("p",null,"Sequelize provides definitions for a full ",(0,o.kt)("a",{parentName:"p",href:"https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types"},"list of types"),", and each column is given a type. The following is a list of the most common types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Sequelize.STRING")," - A variable length string. Default length 255"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Sequelize.TEXT")," - An unlimited length text column."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Sequelize.INTEGER")," - A 32 bit integer."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Sequelize.FLOAT")," - Floating point number (4-byte precision)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Sequelize.DOUBLE")," - Floating point number (8-byte precision)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Sequelize.DATE")," - A datetime column"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Sequelize.TIME")," - A time column"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Sequelize.BOOLEAN")," - A boolean column")),(0,o.kt)("p",null,"So, if we want to define a model (table) that stores blog entries, we could use the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Define a \"BlogEntry\" model\n\nconst BlogEntry = sequelize.define('BlogEntry', {\n  title: Sequelize.STRING, // entry title\n  author: Sequelize.STRING, // author of the entry\n  entry: Sequelize.TEXT, // main text for the entry\n  views: Sequelize.INTEGER, // number of views\n  postDate: Sequelize.DATE, // Date the entry was posted\n});\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTE:")," It is also possible to introduce ",(0,o.kt)("strong",{parentName:"p"},"data validation")," when we define our models. For a full list of available rules and how they're implemented, see: ",(0,o.kt)("a",{parentName:"p",href:"https://sequelize.org/master/manual/validations-and-constraints.html"},"Validators")," in the official documentation.")),(0,o.kt)("h3",{id:"model-relationships--associations"},"Model Relationships / Associations"),(0,o.kt)("p",null,"In a relational database system, tables (models) can be ",(0,o.kt)("strong",{parentName:"p"},"related")," using foreign key relationships / ",(0,o.kt)("a",{parentName:"p",href:"https://sequelize.org/docs/v6/core-concepts/assocs/"},"associations"),". For example, say we have a table of ",(0,o.kt)("strong",{parentName:"p"},"Users")," and a table of ",(0,o.kt)("strong",{parentName:"p"},"Tasks"),", where each User could have ",(0,o.kt)("strong",{parentName:"p"},"1 or more"),' Tasks. To enforce this relationship, we would add an additional column on the Tasks table as a foreign-key to the Users table, since 1 or more Tasks could belong to a specific user. For example, "Task 1", "Task 2" and "Task 3" could all belong to "User 1", whereas "Task 4" and "Task 5" may belong to "User 2".'),(0,o.kt)("p",null,'Using Sequelize models, we can easily define this relationship using the hasMany() method on our User model (since "User has many Task(s)"), for example:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// Define our "User" and "Task" models\n\nconst User = sequelize.define(\'User\', {\n  fullName: Sequelize.STRING, // the user\'s full name (ie: "Jason Bourne")\n  title: Sequelize.STRING, // the user\'s title within the project (ie, developer)\n});\n\nconst Task = sequelize.define(\'Task\', {\n  title: Sequelize.STRING, // title of the task\n  description: Sequelize.TEXT, // main text for the task\n});\n\n// Associate Tasks with user & automatically create a foreign key\n// relationship on "Task" via an automatically generated "UserId" field\n\nUser.hasMany(Task);\n')),(0,o.kt)("p",null,'If we wish to create a User and then assign him some tasks, we can "create" the tasks immediately after the user is created, ie:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"sequelize.sync().then(() => {\n  // Create user \"Jason Bourne\"\n  User.create({\n    fullName: 'Jason Bourne',\n    title: 'developer',\n  }).then((user) => {\n    console.log('user created');\n\n    // Create \"Task 1\" for the new user\n    Task.create({\n      title: 'Task 1',\n      description: 'Task 1 description',\n      UserId: user.id, // set the correct Userid foreign key\n    }).then(() => {\n      console.log('Task 1 created');\n    });\n\n    // Create \"Task 2\" for the new user\n    Task.create({\n      title: 'Task 2',\n      description: 'Task 2 description',\n      UserId: user.id, // set the correct Userid foreign key\n    }).then(() => {\n      console.log('Task 2 created');\n    });\n  });\n});\n")),(0,o.kt)("p",null,"Next, try running this code and take a look at your database in pgAdmin. You should see that two new tables, ",(0,o.kt)("strong",{parentName:"p"},'"Users"')," and ",(0,o.kt)("strong",{parentName:"p"},'"Tasks"')," have been created, with ",(0,o.kt)("strong",{parentName:"p"},'"Jason Bourne"'),' inside the "User" table and ',(0,o.kt)("strong",{parentName:"p"},'"Task 1"')," and ",(0,o.kt)("strong",{parentName:"p"},'"Task 2"'),' inside the "Task" table. The two new tasks will both have a ',(0,o.kt)("strong",{parentName:"p"},"UserId"),' matching "Jason Bourne"\'s id. We have achieved the one-to-many relationship between this user and his tasks.'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTE:")," Sequelize also supports other relationships, such as:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"belongsTo()"),(0,o.kt)("li",{parentName:"ul"},"hasOne()"),(0,o.kt)("li",{parentName:"ul"},"belongsToMany()")),(0,o.kt)("p",{parentName:"blockquote"},"For more information, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://sequelize.org/docs/v6/core-concepts/assocs/"},'"Associations"')," in the official documentaiton.")))}u.isMDXComponent=!0},4178:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pgAdmin4-projects-79d2888159fe9e2d36cfd261a2541de6.png"},8209:(e,t,a)=>{a(7294)}}]);