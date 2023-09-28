"use strict";(self.webpackChunkipc144=self.webpackChunkipc144||[]).push([[1701],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,g=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return a?n.createElement(g,s(s({ref:t},d),{},{components:a})):n.createElement(g,s({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},118:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));a(8209);const o={id:"introduction-to-postgres",title:"Introduction to Postgres",sidebar_position:1,description:"Introduction to Postgres"},s="Introduction to Postgres",i={unversionedId:"Relational-Database-Postgres/introduction-to-postgres",id:"Relational-Database-Postgres/introduction-to-postgres",title:"Introduction to Postgres",description:"Introduction to Postgres",source:"@site/docs/Relational-Database-Postgres/introduction-to-postgres.md",sourceDirName:"Relational-Database-Postgres",slug:"/Relational-Database-Postgres/introduction-to-postgres",permalink:"/WebProgrammingToolsAndFrameworks/Relational-Database-Postgres/introduction-to-postgres",draft:!1,editUrl:"https://github.com/patrick-crawford/WebProgrammingToolsAndFrameworks/tree/master/docs/Relational-Database-Postgres/introduction-to-postgres.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"introduction-to-postgres",title:"Introduction to Postgres",sidebar_position:1,description:"Introduction to Postgres"},sidebar:"courseNotesSidebar",previous:{title:"Example Code",permalink:"/WebProgrammingToolsAndFrameworks/Working-With-Forms/example-code"},next:{title:"Sequelize ORM with Postgres",permalink:"/WebProgrammingToolsAndFrameworks/Relational-Database-Postgres/sequelize-orm-with-postgres"}},l={},p=[{value:"PostgreSQL (Postgres)",id:"postgresql-postgres",level:2},{value:"pgAdmin",id:"pgadmin",level:2}],d={toc:p},m="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction-to-postgres"},"Introduction to Postgres"),(0,r.kt)("p",null,'"Data Persistence" (the ability to "persist" or "save" new, updated or deleted information) is a vital part of any web application project. For example, this could be registering new users, deleting users, updating profile information or payment data for users, viewing saved files or uploaded images, etc. etc. To truly create an "application" we must be able to work with (and persist) data.'),(0,r.kt)("p",null,'Fortunately, there are many different database systems that we can leverage to accomplish this notion of "data persistence". These range from powerful "relational" database systems, including: ',(0,r.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/sql-server/"},"Microsoft SQL Server"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.oracle.com/database/"},"Oracle"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.mysql.com/"},"MySQL"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"PostgreSQL"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_relational_database_management_systems"},"many others"),' as well as "NoSQL" database systems such as ',(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/dynamodb/"},"Amazon's DynamoDB"),", ",(0,r.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/services/cosmos-db/"},"Azure Cosmos DB")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.mongodb.com/"},"MongoDB"),"."),(0,r.kt)("p",null,"We will be focusing specifically on ",(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"PostgreSQL")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.mongodb.com/"},"MongoDB")," - today, we will look at how we can work with a PostgreSQL database in a node.js environment."),(0,r.kt)("h2",{id:"postgresql-postgres"},"PostgreSQL (Postgres)"),(0,r.kt)("p",null,"From the PostgreSQL site, ",(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org"},"postgresql.org"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'"PostgreSQL (also known as "Postgres") is a powerful, open source object-relational database system. It has more than 15 years of active development and a proven architecture that has earned it a strong reputation for reliability, data integrity, and correctness. It runs on all major operating systems, including Linux, UNIX (AIX, BSD, HP-UX, SGI IRIX, macOS, Solaris, Tru64), and Windows. It is fully ',(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ACID"},"ACID compliant"),", has full support for foreign keys, joins, views, triggers, and stored procedures (in multiple languages). It includes most SQL:2008 data types, including INTEGER, NUMERIC, BOOLEAN, CHAR, VARCHAR, DATE, INTERVAL, and TIMESTAMP. It also supports storage of binary large objects, including pictures, sounds, or video. It has native programming interfaces for C/C++, Java, .Net, Perl, Python, Ruby, Tcl, ODBC, among others, and ",(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/manuals/"},"exceptional documentation"),".")),(0,r.kt)("p",null,"This is a great choice for us for multiple reasons; it is open source, highly available, standards compliant and most importantly, works nicely with node.js."),(0,r.kt)("p",null,"To get started, proceed to ",(0,r.kt)("a",{parentName:"p",href:"https://www.elephantsql.com"},"https://www.elephantsql.com")," and click on the large green button: ",(0,r.kt)("strong",{parentName:"p"},'"Get a managed database today"')," and follow the below steps to set up the database:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Choose the "TINY TURTLE" option by clicking the ',(0,r.kt)("strong",{parentName:"p"},'"Try now for FREE"')," button")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"At the next screen, click the ",(0,r.kt)("strong",{parentName:"p"},'"sign in with GitHub"')," button, since we already have a GitHub account")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Next, you will need to provide a "Name" for your instance. You may choose anything you like for this field, ie "Seneca DB Instance".')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("strong",{parentName:"p"},'"Select Region"')," button")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"At the next screen, feel free to choose whichever data center you wish. However, keeping the default (US-East-1, depending on where you are) is fine. Click the green ",(0,r.kt)("strong",{parentName:"p"},'"Review"')," button to proceed")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'If everything looks correct (ie: "Total" should be "Free", the name should be what you typed in, etc.), click the ',(0,r.kt)("strong",{parentName:"p"},'"Create Instance"'),' button. This will take you to the "Instances" screen.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Click on the name of your newly created instance, ie "Seneca DB Instance"')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Record the following information, as we will need it later:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Server"),': something like: "jelani.db.elephantsql.com" - do not include the value in brackets after ".com"'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"User & Default database"),": This will serve as both your user name and database name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Password"),": This is the password that you will use to connect to this instance in your code",(0,r.kt)("br",null),(0,r.kt)("br",null))),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE:")," You can always log back in to ElephantSQL if you forget the server / credentials")))),(0,r.kt)("h2",{id:"pgadmin"},"pgAdmin"),(0,r.kt)("p",null,"Now that we have our brand new Postgres database created in ElephantSQL, why don't we try to connect to it using the most popular GUI tool for Postgres; ",(0,r.kt)("a",{parentName:"p",href:"https://www.pgadmin.org"},"pgAdmin"),". If you're following along from the lab room, it should already be installed. However, if you're configuring your home machine, you will need to download pgAdmin:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.pgadmin.org/download/"},"https://www.pgadmin.org/download/"))),(0,r.kt)("p",null,"Once it is installed and you have opened the app, we need to configure it to connect to our database:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Right Click on the ",(0,r.kt)("strong",{parentName:"p"},'"Servers"'),' icon in the left pane (Under "Browser") and select ',(0,r.kt)("strong",{parentName:"p"},"Create > Server"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'This will open the "Create - Server" Dialog window. Proceed to enter the following information about your Postgres Database on ElephantSQL'),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",{parentName:"tr",align:null},'This can be anything you like, ie "Test Connection"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"(Connection Tab) Host")),(0,r.kt)("td",{parentName:"tr",align:null},"This is the server for your ElephantSQL Postgres DB, ie: ",(0,r.kt)("strong",{parentName:"td"},"jelani.db.elephantsql.com"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"(Connection Tab) Port")),(0,r.kt)("td",{parentName:"tr",align:null},"This is the port for your ElephantSQL Postgres DB - it should be the same as what's already there, ie: ",(0,r.kt)("strong",{parentName:"td"},"5432"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"(Connection Tab) Maintenance database")),(0,r.kt)("td",{parentName:"tr",align:null},'Enter your randomly generated "User & Default database" value here')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"(Connection Tab) Username")),(0,r.kt)("td",{parentName:"tr",align:null},'Enter your randomly generated "User & Default database" value here')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"(Connection Tab) Password")),(0,r.kt)("td",{parentName:"tr",align:null},"Enter your randomly generated ElephantSQL Postgres Database password here")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"(Advanced Tab) DB restriction")),(0,r.kt)("td",{parentName:"tr",align:null},'Under the "Advanced" tab in the "DB Restriction" field, enter your User & Default database" value and press the "enter" key')))),(0,r.kt)("p",{parentName:"li"},'Once you have entered all of your information, hit the "Save" button and click "Servers" in the left pane to expand your server connections. If you entered valid information for the above fields, you should see your ElephantSQL Postgres DB Connection. Expand this item and the following ',(0,r.kt)("strong",{parentName:"p"},'"Databases (1)"')," item, and you should see your database. Expand this item, as well as the nested ",(0,r.kt)("strong",{parentName:"p"},'"Schemas (1)"')," item, followed by the ",(0,r.kt)("strong",{parentName:"p"},'"public"')," item, and you should be presented with something that looks like this:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"DB in pgAdmin",src:a(8995).Z,width:"2624",height:"1646"})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Success!")," We will be keeping an eye on our data using this tool, so it is wise to have it running during development."))}c.isMDXComponent=!0},8995:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pgAdmin4-05e8d4ec9ffd8f7f70337298725c2d2e.png"},8209:(e,t,a)=>{a(7294)}}]);