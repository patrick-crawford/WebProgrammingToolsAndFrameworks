"use strict";(self.webpackChunkipc144=self.webpackChunkipc144||[]).push([[275],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return a?o.createElement(g,i(i({ref:t},c),{},{components:a})):o.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2158:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=a(7462),n=(a(7294),a(3905));a(8209);const r={id:"introduction-to-mongodb",title:"Introduction to MongoDB",sidebar_position:1,description:"Introduction to MongoDB"},i="Introduction to MongoDB",s={unversionedId:"NoSQL-Database-MongoDB/introduction-to-mongodb",id:"NoSQL-Database-MongoDB/introduction-to-mongodb",title:"Introduction to MongoDB",description:"Introduction to MongoDB",source:"@site/docs/NoSQL-Database-MongoDB/introduction-to-mongodb.md",sourceDirName:"NoSQL-Database-MongoDB",slug:"/NoSQL-Database-MongoDB/introduction-to-mongodb",permalink:"/WebProgrammingToolsAndFrameworks/NoSQL-Database-MongoDB/introduction-to-mongodb",draft:!1,editUrl:"https://github.com/patrick-crawford/WebProgrammingToolsAndFrameworks/tree/master/docs/NoSQL-Database-MongoDB/introduction-to-mongodb.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"introduction-to-mongodb",title:"Introduction to MongoDB",sidebar_position:1,description:"Introduction to MongoDB"},sidebar:"courseNotesSidebar",previous:{title:"Example Code",permalink:"/WebProgrammingToolsAndFrameworks/Relational-Database-Postgres/example-code"},next:{title:"Mongoose ODM with MongoDB",permalink:"/WebProgrammingToolsAndFrameworks/NoSQL-Database-MongoDB/mongoose-odm-with-mongodb"}},l={},p=[{value:"NoSQL vs Traditional SQL",id:"nosql-vs-traditional-sql",level:2},{value:"Setting up a MongoDB Atlas account",id:"setting-up-a-mongodb-atlas-account",level:2},{value:"Obtaining your Connection String",id:"obtaining-your-connection-string",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction-to-mongodb"},"Introduction to MongoDB"),(0,n.kt)("p",null,'MongoDB is an open source database that stores its data as collection of JSON like documents known as BSON or "Binary JSON", instead of tables with rows / columns. Technically, it is classified as a "NoSQL" database - a popular alternative to traditional Relational Databases (RDBMS):'),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"NoSQL (\u201cnon SQL\u201d or \u201cnot only SQL\u201d) databases were developed in the late 2000s with a focus on scaling, fast queries, allowing for frequent application changes, and making programming simpler for developers. Relational databases accessed with SQL (Structured Query Language) were developed in the 1970s with a focus on reducing data duplication as storage was much more costly than developer time. SQL databases tend to have rigid, complex, tabular schemas and typically require expensive vertical scaling."),(0,n.kt)("p",{parentName:"blockquote"},"Some of the main benefits include:"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Flexible data models")),(0,n.kt)("p",{parentName:"li"},"NoSQL databases typically have very flexible schemas. A flexible schema allows you to easily make changes to your database as requirements change. You can iterate quickly and continuously integrate new application features to provide value to your users faster.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Horizontal scaling")),(0,n.kt)("p",{parentName:"li"},"Most SQL databases require you to scale-up vertically (migrate to a larger, more expensive server) when you exceed the capacity requirements of your current server. Conversely, most NoSQL databases allow you to scale-out horizontally, meaning you can add cheaper commodity servers whenever you need to.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Fast queries")),(0,n.kt)("p",{parentName:"li"},"Queries in NoSQL databases can be faster than SQL databases. Why? Data in SQL databases is typically normalized, so queries for a single object or entity require you to join data from multiple tables. As your tables grow in size, the joins can become expensive. However, data in NoSQL databases is typically stored in a way that is optimized for queries. The rule of thumb when you use MongoDB is ",(0,n.kt)("strong",{parentName:"p"},"data that is accessed together should be stored together"),". Queries typically do not require joins, so the queries are very fast.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Easy for developers")),(0,n.kt)("p",{parentName:"li"},"Some NoSQL databases like MongoDB map their data structures to those of popular programming languages. This mapping allows developers to store their data in the same way that they use it in their application code. While it may seem like a trivial advantage, this mapping can allow developers to write less code, leading to faster development time and fewer bugs."))),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://www.mongodb.com/nosql-explained/nosql-vs-sql"},"https://www.mongodb.com/nosql-explained"))),(0,n.kt)("h2",{id:"nosql-vs-traditional-sql"},"NoSQL vs Traditional SQL"),(0,n.kt)("p",null,"As we have seen, one of the major differences between NoSQL and traditional SQL systems is the way the data is ",(0,n.kt)("em",{parentName:"p"},"structured"),", ie: SQL databases are table-based. This means they use a rigid schema where data is organized into tables with rows and columns and primary / foreign keys to establish relationships between them. NoSQL databases however, can have different structures such as document-oriented (in the case of MongoDB), key-value pairs, or graph structures. In a NoSQL database, a document can contain key-value pairs and can be ordered and nested. Ths leads to additional benefits mentioned above, such horizontal scaling and fast queries."),(0,n.kt)("p",null,"Before we get started with MongoDB, we should be familiar with how some of the terms translate to traditional RDBMS:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"RDBMS term"),(0,n.kt)("th",{parentName:"tr",align:null},"MongoDB term"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Table"),(0,n.kt)("td",{parentName:"tr",align:null},"Collection")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Record"),(0,n.kt)("td",{parentName:"tr",align:null},"Document")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Column"),(0,n.kt)("td",{parentName:"tr",align:null},"Field")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Joins"),(0,n.kt)("td",{parentName:"tr",align:null},"Embed data or link to another collection")))),(0,n.kt)("p",null,"See: ",(0,n.kt)("a",{parentName:"p",href:"https://www.mongodb.com/compare/mongodb-mysql"},"MongoDB vs. MySQL Differences")),(0,n.kt)("h2",{id:"setting-up-a-mongodb-atlas-account"},"Setting up a MongoDB Atlas account"),(0,n.kt)("p",null,"MongoDB Atlas is a ",(0,n.kt)("strong",{parentName:"p"},"free")," online service that hosts MongoDB in the cloud:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"MongoDB Atlas is a multi-cloud database service by the same people that build MongoDB. Atlas simplifies deploying and managing your databases while offering the versatility you need to build resilient and performant global applications on the cloud providers of your choice."),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/atlas/#what-is-service-fullname-"},"https://www.mongodb.com/docs/atlas"))),(0,n.kt)("p",null,"To get started, open ",(0,n.kt)("a",{parentName:"p",href:"https://www.mongodb.com/cloud/atlas"},"https://www.mongodb.com/cloud/atlas"),' and click the "Try free" button.'),(0,n.kt)("p",null,"This will take you to the ",(0,n.kt)("a",{parentName:"p",href:"https://www.mongodb.com/cloud/atlas/register"},'"register"')," page, where you can either create an account with Atlas, or sign in with Google. If you prefer to sign in with GitHub, you can proceed directly to: ",(0,n.kt)("a",{parentName:"p",href:"https://account.mongodb.com/account/login"},"https://account.mongodb.com/account/login"),' and click the "GitHub" button.'),(0,n.kt)("p",null,"Once you have logged in, you should be prompted to ",(0,n.kt)("strong",{parentName:"p"},'"Create a deployment"'),". To begin:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Click the ",(0,n.kt)("strong",{parentName:"p"},'"+ Create"')," button to continue.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"At the next screen, we will see the ",(0,n.kt)("strong",{parentName:"p"},'"Deploy your database"')," options. Be sure to Choose the ",(0,n.kt)("strong",{parentName:"p"},'"FREE"')," option before clicking the large, green ",(0,n.kt)("strong",{parentName:"p"},'"Create"')," button:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"Free Options",src:a(1013).Z,width:"2188",height:"1766"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You will then be taken to the ",(0,n.kt)("strong",{parentName:"p"},'"Security Quickstart"'),' screen, which should have the "Username and Password" option checked with a form containing pre-filled values for the "Username" and "Password". ',(0,n.kt)("strong",{parentName:"p"},"Write these down")," as we will need them later, and click the green ",(0,n.kt)("strong",{parentName:"p"},'"Create User"')," button")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"With this section complete, you should be taken to a ",(0,n.kt)("strong",{parentName:"p"},'"Where would you like to connect from?"'),' screen with "My Local Environment" selected and an "IP Access List". For now, we will ',(0,n.kt)("em",{parentName:"p"},"allow access from anywhere"),', so ensure that you enter the following values "0.0.0.0/0" and "any" before clicking the "Add Entry" button:'),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"ip access",src:a(1273).Z,width:"1430",height:"346"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Finally, click the ",(0,n.kt)("strong",{parentName:"p"},'"Finish and Close"')," button"))),(0,n.kt)("h2",{id:"obtaining-your-connection-string"},"Obtaining your Connection String"),(0,n.kt)("p",null,'Once your cluster has been created, you should be taken to the "Overview" screen, where we can view our deployments.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Deployments Overview",src:a(9389).Z,width:"1450",height:"680"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"From here, click the ",(0,n.kt)("strong",{parentName:"p"},'"CONNECT"')," button and choose the ",(0,n.kt)("strong",{parentName:"p"},'"Drivers"')," option"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"drivers",src:a(7106).Z,width:"1510",height:"278"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Scroll down to ",(0,n.kt)("strong",{parentName:"p"},'"3. Add your connection string into your application code"')," and ",(0,n.kt)("strong",{parentName:"p"},"write down")," the connection string (we will need it later) - it should look something like:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"mongodb+srv://user:<password>@cluster0.abc123.mongodb.net/?retryWrites=true&w=majority\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Finally, replace the ","<","password",">"," value with the password recorded from earlier, ie: ",(0,n.kt)("inlineCode",{parentName:"p"},"mongodb+srv://user:yourPassword@cluster0.abc123.mongodb.net/?retryWrites=true&w=majority")," and click the ",(0,n.kt)("strong",{parentName:"p"},'"Close"'),' button to return to the "Overview" screen.'))))}u.isMDXComponent=!0},1013:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Atlas-Cluster-Free-Options-2cb4894eb305b1b4071408fde2dc1177.png"},7106:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Atlas-connect-drivers-14987b6f17c5d94faf855c0893b4396b.png"},9389:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Atlas-deployments-overview-09f2a0cefcf08fca9ec15f4eae978121.png"},1273:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Atlas-ip-access-446e0d61bd02e9c5e26e905efd64eeee.png"},8209:(e,t,a)=>{a(7294)}}]);