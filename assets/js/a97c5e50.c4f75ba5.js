"use strict";(self.webpackChunkipc144=self.webpackChunkipc144||[]).push([[2963],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),c=a,h=d["".concat(p,".").concat(c)]||d[c]||m[c]||o;return r?n.createElement(h,s(s({ref:t},u),{},{components:r})):n.createElement(h,s({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7468:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));r(8209);const o={id:"api-introduction-and-implementation",title:"API Introduction & Implementation",sidebar_position:3,description:"API Introduction & Implementation"},s="API Introduction & Implementation",i={unversionedId:"Web-API-Overview/api-introduction-and-implementation",id:"Web-API-Overview/api-introduction-and-implementation",title:"API Introduction & Implementation",description:"API Introduction & Implementation",source:"@site/docs/Web-API-Overview/api-introduction-and-implementation.md",sourceDirName:"Web-API-Overview",slug:"/Web-API-Overview/api-introduction-and-implementation",permalink:"/Web-API-Overview/api-introduction-and-implementation",draft:!1,editUrl:"https://github.com/patrick-crawford/WebProgrammingToolsAndFrameworks/tree/master/docs/Web-API-Overview/api-introduction-and-implementation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"api-introduction-and-implementation",title:"API Introduction & Implementation",sidebar_position:3,description:"API Introduction & Implementation"},sidebar:"courseNotesSidebar",previous:{title:"AJAX Review",permalink:"/Web-API-Overview/ajax-review"},next:{title:"Example Code",permalink:"/Web-API-Overview/example-code"}},p={},l=[{value:"Route Configuration",id:"route-configuration",level:2},{value:"AJAX Testing (View)",id:"ajax-testing-view",level:2},{value:"Adding Data (JSON)",id:"adding-data-json",level:2}],u={toc:l},d="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api-introduction--implementation"},"API Introduction & Implementation"),(0,a.kt)("p",null,"You may have heard of the term ",(0,a.kt)("strong",{parentName:"p"},"REST")," or ",(0,a.kt)("strong",{parentName:"p"},"RESTful")," API when reading about Web Programming. For our purposes, this can be described as way to use the HTTP protocol (ie, ",(0,a.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7231#section-4.3.1"},'"GET"'),", ",(0,a.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7231#section-4.3.3"},'"POST"'),", ",(0,a.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7231#section-4.3.4"},'"PUT"'),", ",(0,a.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7231#section-4.3.5"},'"DELETE"'),", etc.) with a standard message format (ie, JSON or XML) to preform CRUD operations (",(0,a.kt)("strong",{parentName:"p"},"C"),"reate, ",(0,a.kt)("strong",{parentName:"p"},"R"),"ead, ",(0,a.kt)("strong",{parentName:"p"},"U"),"pdate, ",(0,a.kt)("strong",{parentName:"p"},"D"),"elete) on a data source."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"NOTE:")," To truly create a ",(0,a.kt)("em",{parentName:"p"},"fully compliant")," ",(0,a.kt)("strong",{parentName:"p"},"REST API")," we must conform to the standards outlined in Roy Fielding's PhD dissertation, ",(0,a.kt)("a",{parentName:"p",href:"http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm"},"Architectural Styles and the Design of Network-based Software Architectures"),'. The design pattern that we are using here could more appropriately be called a "Web API".')),(0,a.kt)("p",null,"What makes this architecture so valuable, is that we remove any assumptions about how a client will access the data. A client could make HTTP requests to the API from a website, mobile app, etc. and it would be the website or app's job to correctly render the data once it's received. This simplifies development of front-end applications that use the data and even removes any specific programming language requirements for the client. If it can handle HTTP requests / responses and JSON, it can use our data."),(0,a.kt)("h2",{id:"route-configuration"},"Route Configuration"),(0,a.kt)("p",null,"Before we think about getting any kind of persistent storage involved however, let's first see how we can configure all of our routes in our server to allow for CRUD operations on a simple collection of users in the format"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{userId: number, fName: string, lName: string}\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Route"),(0,a.kt)("th",{parentName:"tr",align:null},"HTTP Method"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/api/users"),(0,a.kt)("td",{parentName:"tr",align:null},"GET"),(0,a.kt)("td",{parentName:"tr",align:null},"Get all the users")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/api/users"),(0,a.kt)("td",{parentName:"tr",align:null},"POST"),(0,a.kt)("td",{parentName:"tr",align:null},"Create a user")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/api/users/:userId"),(0,a.kt)("td",{parentName:"tr",align:null},"GET"),(0,a.kt)("td",{parentName:"tr",align:null},"Get a single user")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/api/users/:userId"),(0,a.kt)("td",{parentName:"tr",align:null},"PUT"),(0,a.kt)("td",{parentName:"tr",align:null},"Update a user with new information")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/api/users/:userId"),(0,a.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,a.kt)("td",{parentName:"tr",align:null},"Delete a user")))),(0,a.kt)("p",null,"When these routes are applied to our Express server code, we get something that looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express');\nconst app = express();\n\nconst HTTP_PORT = process.env.PORT || 8080;\n\napp.get('/api/users', (req, res) => {\n  res.send({ message: 'fetch all users' });\n});\n\napp.post('/api/users', (req, res) => {\n  res.send({ message: 'add a user' });\n});\n\napp.get('/api/users/:userId', (req, res) => {\n  res.send({ message: `get user with Id: ${req.params.userId}` });\n});\n\napp.put('/api/users/:userId', (req, res) => {\n  res.send({ message: `update User with Id: ${req.params.userId}` });\n});\n\napp.delete('/api/users/:userId', (req, res) => {\n  res.send({ message: `delete User with Id: ${req.params.userId}` });\n});\n\n// setup http server to listen on HTTP_PORT\napp.listen(HTTP_PORT, () => {\n  console.log(`Express http server listening on: ${HTTP_PORT}`);\n});\n")),(0,a.kt)("p",null,"Here, we have made use of the ",(0,a.kt)("a",{parentName:"p",href:"https://expressjs.com/en/api.html#req"},"request")," object's ",(0,a.kt)("a",{parentName:"p",href:"https://expressjs.com/en/api.html#req.params"},"params method")," to identify the specific user that needs to be fetched, updated or deleted based on the URL alone. In a sense, what we're allowing here is for the URL + HTTP Method to act as a way of querying the data source, as ",(0,a.kt)("strong",{parentName:"p"},"/api/users/3"),", ",(0,a.kt)("strong",{parentName:"p"},"/api/users/4923")," or even ",(0,a.kt)("strong",{parentName:"p"},"/api/users/twelve")," will all be accepted. They may not necessarily return valid data, but the routes will be found by our server and we can attempt to preform the requested operation."),(0,a.kt)("h2",{id:"ajax-testing-view"},"AJAX Testing (View)"),(0,a.kt)("p",null,'Now that we have all of the routes for our API in place, let\'s create a "view" that will make AJAX requests to test our API functionality. To begin, create a ',(0,a.kt)("strong",{parentName:"p"},"views")," folder and add the file ",(0,a.kt)("strong",{parentName:"p"},"index.html"),". This will be a simple HTML page consisting of 5 buttons (each corresponding to a piece of functionality in our API) and some simple JavaScript to make an AJAX request."),(0,a.kt)("p",null,"However, since we are serving this file from the same server that our API is on, we will need to add some additional code to our server file; specifically:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\n")),(0,a.kt)("p",null,"and"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"app.get('/', (req, res) => {\n  res.sendFile(path.join(__dirname, '/views/index.html'));\n});\n")),(0,a.kt)("p",null,'Finally - our server is setup and ready to serve the index.html file at our main route ("/"). Our next step is to add our client-side logic / JS to the index.html file. Here, we hard-code some requests to the API and output their results to the web console to make sure they function correctly:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!doctype html>\n<html>\n  <head>\n      <title>API Test</title>\n      <script>\n          function makeAJAXRequest(method, url, body) {\n              fetch(url, {\n                  method: method,\n                  body: JSON.stringify(body), // if missing \'body\', \'undefined\' is returned\n                  headers: { \'Content-Type\': \'application/json\' }\n              })\n              .then(response => response.json())\n              .then(json => {\n                  console.log(json);\n              });\n          }\n      <\/script>\n  </head>\n  <body>\n      <p>Test the API by outputting to the browser console:</p>\n      \x3c!-- Get All Users --\x3e\n      <button type="button" onclick=\'makeAJAXRequest("GET", "/api/users")\'>Get All Users</button><br /><br />\n      \x3c!-- Add New User --\x3e\n      <button type="button" onclick=\'makeAJAXRequest("POST", "/api/users", {fName: "Bob", lName: "Jones"})\'>Add New User</button><br /><br />\n      \x3c!-- Get User By Id --\x3e\n      <button type="button" onclick=\'makeAJAXRequest("GET", "/api/users/2")\'>Get User</button><br /><br />\n      \x3c!-- Update User By Id --\x3e\n      <button type="button" onclick=\'makeAJAXRequest("PUT", "/api/users/2", {fName: "Wanda", lName: "Smith"})\'>Update User</button><br /><br />\n      \x3c!-- Delete User By Id --\x3e\n      <button type="button" onclick=\'makeAJAXRequest("DELETE", "/api/users/2")\'>Delete User</button>\n  </body>\n</html>\n')),(0,a.kt)("h2",{id:"adding-data-json"},"Adding Data (JSON)"),(0,a.kt)("p",null,"Once you have entered the above code, save the changes and try running the server locally - you will see that All of the routes tested return a JSON formatted message. This confirms that our Web API will correctly respond to AJAX requests made by the client. Additionally, If you open the ",(0,a.kt)("strong",{parentName:"p"},"Network tab")," (Google Chrome) before initiating one of the calls to ",(0,a.kt)("strong",{parentName:"p"},"Update")," or ",(0,a.kt)("strong",{parentName:"p"},"Add a New User"),", you will see that our request is also carrying a payload of information, ie:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AJAX Request Payload",src:r(5912).Z,width:"1426",height:"298"})),(0,a.kt)("p",null,'If we wish to capture this information in our routes (so that we can make the appropriate updates to our data source), we must make some small modifications to our server.js file and individual routes (ie: POST to "/api/users" & PUT to "/api/users/:userId"). The first thing that we must do is incorporate middleware to parse the incoming data, ie:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"app.use(express.json());\n")),(0,a.kt)("p",null,"This should allow our routes to access data passed to our API using the ",(0,a.kt)("a",{parentName:"p",href:"https://expressjs.com/en/api.html#req.body"},"req.body")," property. More specifically, we can update our POST & PUT routes to use req.body to fetch the new / updated ",(0,a.kt)("strong",{parentName:"p"},"fName")," and ",(0,a.kt)("strong",{parentName:"p"},"lName")," properties:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"app.post('/api/users', (req, res) => {\n  res.send({ message: `add the user: ${req.body.fName} ${req.body.lName}` });\n});\n")),(0,a.kt)("p",null,"and"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"app.put('/api/users/:userId', (req, res) => {\n  res.send({ message: `update User with Id: ${req.params.userId} to ${req.body.fName} ${req.body.lName}` });\n});\n")),(0,a.kt)("p",null,"If we try running the server to test the API again, we will see that the messages returned back from the server correctly echo the data sent to the API. We now have everything that we need to preform simple CRUD operations via AJAX on a data source using a web service. The only thing missing is the data store itself."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"NOTE:")," If we want to allow the API to respond to requests from ",(0,a.kt)("em",{parentName:"p"},"outside")," the domain (this is what ",(0,a.kt)("a",{parentName:"p",href:"https://reqres.in/"},"https://reqres.in")," does), we will have to enable ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS"},"Cross-Origin Resource Sharing (CORS)")," - see the third-party ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cors"},"CORS middleware"))))}m.isMDXComponent=!0},5912:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ajax-payload-5ae8422eab84120b943c82566d54f336.png"},8209:(e,t,r)=>{r(7294)}}]);