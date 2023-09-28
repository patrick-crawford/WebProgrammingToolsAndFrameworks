"use strict";(self.webpackChunkipc144=self.webpackChunkipc144||[]).push([[1925],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var p=a.createContext({}),i=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},d=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=i(r),h=s,m=c["".concat(p,".").concat(h)]||c[h]||u[h]||o;return r?a.createElement(m,n(n({ref:t},d),{},{components:r})):a.createElement(m,n({ref:t},d))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,n=new Array(o);n[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:s,n[1]=l;for(var i=2;i<o;i++)n[i]=r[i];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8478:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=r(7462),s=(r(7294),r(3905));r(8209);const o={id:"application-request-response-objects",title:"Application, Request & Response Objects",sidebar_position:1,description:"Application, Request & Response Objects"},n="Application, Request & Response Objects",l={unversionedId:"Advanced-Routing-Middleware/application-request-response-objects",id:"Advanced-Routing-Middleware/application-request-response-objects",title:"Application, Request & Response Objects",description:"Application, Request & Response Objects",source:"@site/docs/Advanced-Routing-Middleware/application-request-response-objects.md",sourceDirName:"Advanced-Routing-Middleware",slug:"/Advanced-Routing-Middleware/application-request-response-objects",permalink:"/WebProgrammingToolsAndFrameworks/Advanced-Routing-Middleware/application-request-response-objects",draft:!1,editUrl:"https://github.com/patrick-crawford/WebProgrammingToolsAndFrameworks/tree/master/docs/Advanced-Routing-Middleware/application-request-response-objects.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"application-request-response-objects",title:"Application, Request & Response Objects",sidebar_position:1,description:"Application, Request & Response Objects"},sidebar:"courseNotesSidebar",previous:{title:"Example Code",permalink:"/WebProgrammingToolsAndFrameworks/UI-Toolkits/example-code"},next:{title:"Middleware",permalink:"/WebProgrammingToolsAndFrameworks/Advanced-Routing-Middleware/middleware"}},p={},i=[{value:"The Application object",id:"the-application-object",level:2},{value:"app.all()",id:"appall",level:3},{value:"HTTP Verb Methods",id:"http-verb-methods",level:3},{value:"app.locals",id:"applocals",level:3},{value:"app.listen()",id:"applisten",level:3},{value:"app.set()",id:"appset",level:3},{value:"app.use()",id:"appuse",level:3},{value:"The Request object",id:"the-request-object",level:2},{value:"req.body",id:"reqbody",level:3},{value:"req.cookies",id:"reqcookies",level:3},{value:"req.params",id:"reqparams",level:3},{value:"req.query",id:"reqquery",level:3},{value:"req.get()",id:"reqget",level:3},{value:"The Response object",id:"the-response-object",level:2},{value:"res.cookie()",id:"rescookie",level:3},{value:"res.end()",id:"resend",level:3},{value:"res.redirect()",id:"resredirect",level:3},{value:"res.send()",id:"ressend",level:3},{value:"res.status()",id:"resstatus",level:3}],d={toc:i},c="wrapper";function u(e){let{components:t,...r}=e;return(0,s.kt)(c,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"application-request--response-objects"},"Application, Request & Response Objects"),(0,s.kt)("p",null,'Express.js makes it very straightforward to get a web server running on a given port and responding to simple "get" requests (ie: ',(0,s.kt)("inlineCode",{parentName:"p"},"GET / HTTP/1.1"),"):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const express = require('express');\nconst app = express();\n\nconst HTTP_PORT = process.env.PORT || 8080;\n\napp.get('/', (req, res) => {\n  res.send('Hello World');\n});\n\napp.listen(HTTP_PORT, () => console.log(`server listening on: ${HTTP_PORT}`));\n")),(0,s.kt)("p",null,"From the above code, it is clear that there are three important objects that are used to configure the server: ",(0,s.kt)("inlineCode",{parentName:"p"},"app"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"req")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"res"),". Let's discuss these objects in detail and how we can use them to handle more complicated scenarios, such as route / query parameters, cookies and custom errors."),(0,s.kt)("h2",{id:"the-application-object"},"The Application object"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://expressjs.com/en/api.html#app"},'"app"')," object in the example above represents the express main application object. It contains several methods for tasks, such as processing route requests, setting up middleware, and managing html views or view engines."),(0,s.kt)("p",null,'In the above example, we set a route on the host to handle HTTP GET requests to \u201c/\u201d. This means any "GET" requests to localhost:8080/ will be sent to this function. A typical route handler in express (like the one above) is created by invoking a function on the app object using the HTTP method (verb) that matches the type of request and passing it two parameters: a string representing the route, and a callback function to invoke when the route is matched. In this case, we wish to handle GET requests for the default route "/" (typically requests from the browser to load the page initially).'),(0,s.kt)("p",null,"Here are some of the commonly used application properties and methods that we will use throughout these notes."),(0,s.kt)("h3",{id:"appall"},"app.all()"),(0,s.kt)("p",null,"This method is used to register a single callback for a route that matches ",(0,s.kt)("em",{parentName:"p"},"any")," ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods"},"HTTP Method")," IE: GET, PUT, POST, DELETE, etc."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"app.all('/http-testing', (req, res) => {\n  res.send('test complete');\n});\n")),(0,s.kt)("h3",{id:"http-verb-methods"},"HTTP Verb Methods"),(0,s.kt)("p",null,"We can also respond to a request a callback for a route using a ",(0,s.kt)("em",{parentName:"p"},"single")," HTTP Method (ie: ",(0,s.kt)("inlineCode",{parentName:"p"},"app.get()")," from our ",(0,s.kt)("a",{parentName:"p",href:"/WebProgrammingToolsAndFrameworks/Web-Server-Introduction/simple-web-server-using-expressjs#simple-get-routes"},"Simple Web Server using Express.js")," example):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"app.get('/get-test', (req, res) => {\n  res.send('GET Test Complete');\n});\n\napp.put('/put-test', (req, res) => {\n  res.send('PUT Test Complete');\n});\n\napp.post('/post-test', (req, res) => {\n  res.send('POST Test Complete');\n});\n\napp.delete('/delete-test', (req, res) => {\n  res.send('DELETE Test Complete');\n});\n\n// etc.\n")),(0,s.kt)("h3",{id:"applocals"},"app.locals"),(0,s.kt)("p",null,'The "locals" property allows you to attach local variables to the application, which persist throughout the life of the app. You can access local variables in templates rendered within the application (discussed in ',(0,s.kt)("a",{parentName:"p",href:"/WebProgrammingToolsAndFrameworks/Template-Engines/introduction"},'"Template Engines"'),")."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"app.locals.title = 'My App';\n")),(0,s.kt)("h3",{id:"applisten"},"app.listen()"),(0,s.kt)("p",null,"As we have seen, this function is used to start the HTTP server listening for connections on a specific port, ie:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const HTTP_PORT = process.env.PORT || 8080;\n\n// (route handlers / middleware) ...\n\napp.listen(HTTP_PORT, () => {\n  console.log('server listening on: ' + HTTP_PORT);\n});\n")),(0,s.kt)("h3",{id:"appset"},"app.set()"),(0,s.kt)("p",null,'The "set" method assigns a value to a specific "setting". According to the documentation, you may store any value that you want in your own custom "setting", however ',(0,s.kt)("a",{parentName:"p",href:"https://expressjs.com/en/5x/api.html#app.settings.table"},"certain settings"),' can be used to configure the behavior of the server. For example, we will be setting the value of the "view engine" setting when configuring our template engine.'),(0,s.kt)("h3",{id:"appuse"},"app.use()"),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"use"))," method is used to add middleware to your application. Middleware consists of functions (typically placed before the route handlers) that automatically execute either when a specified path is matched or globally before every request. This is very useful when you want to do something with every request like add properties to the request object or check if a user is logged in."),(0,s.kt)("p",null,"This is discussed further in the next section: ",(0,s.kt)("a",{parentName:"p",href:"/WebProgrammingToolsAndFrameworks/Advanced-Routing-Middleware/middleware"},'"Middleware"')),(0,s.kt)("h2",{id:"the-request-object"},"The Request object"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://expressjs.com/en/api.html#req"},'"req"')," object represents the object that contains all the information and metadata for the request sent ",(0,s.kt)("em",{parentName:"p"},"to")," the server. When you see examples of the request object in use, it will typically be referred to as \u2018req\u2019 (short for request object)."),(0,s.kt)("p",null,"Some of the commonly used request properties and methods used throughout these notes are:"),(0,s.kt)("h3",{id:"reqbody"},"req.body"),(0,s.kt)("p",null,'The req.body property contains the data submitted as part of request. It requires that you use a "body parsing" middleware (discussed in: ',(0,s.kt)("a",{parentName:"p",href:"/WebProgrammingToolsAndFrameworks/Advanced-Routing-Middleware/middleware"},'"Middleware"'),") which will attach data (properties) to req.body. If you post data in your request, this is how you access that data."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"app.post('/urlencoded-test', (req, res) => {\n  res.send(req.body);\n});\n")),(0,s.kt)("h3",{id:"reqcookies"},"req.cookies"),(0,s.kt)("p",null,'If we wish to read the value specific "cookie" value, ie:'),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},'"a small piece of data that a server sends to a user\'s web browser. The browser may store the cookie and send it back to the same server with later requests."'),(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"},"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"))),(0,s.kt)("p",null,'we can reference it using the corresponding property on the "req.cookies" object:'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'// Cookie: name=tj\nconsole.log(req.cookies.name); // "tj"\n')),(0,s.kt)("p",null,'However, like "req.body" above, we must use a ("cookie parsing") middleware function to populate "req.cookies" with data from the cookie'),(0,s.kt)("h3",{id:"reqparams"},"req.params"),(0,s.kt)("p",null,'The "params" property is used when we wish to read the values of "Route Parameters" defined in our route handlers:'),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},'"Route parameters are named URL segments used to capture values at specific positions in the URL. The named segments are prefixed with a colon and then the name (E.g., /:your_parameter_name/)."'),(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes#route_parameters"},"https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes#route_parameters"))),(0,s.kt)("p",null,'For example, if we wish to match all GET requests for the route "/employee/',(0,s.kt)("strong",{parentName:"p"},"employeeNum"),'", where ',(0,s.kt)("strong",{parentName:"p"},"employeeNum")," can be ",(0,s.kt)("em",{parentName:"p"},"any"),' value, ie: "123", "abc456", etc, we can use the following code:'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"app.get('/employee/:employeeNum', (req, res) => {\n  res.send(`Employee Number: ${req.params.employeeNum}`);\n});\n")),(0,s.kt)("h3",{id:"reqquery"},"req.query"),(0,s.kt)("p",null,'The "query" property is needed when we wish to read the values of the "query string" in the url:'),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"A query string is a part of a uniform resource locator (URL) that assigns values to specified parameters. A query string commonly includes fields added to a base URL by a Web browser or other client application, for example as part of an HTML document, choosing the appearance of a page, or jumping to positions in multimedia content"),(0,s.kt)("p",{parentName:"blockquote"},"A typical URL containing a query string is as follows: ",(0,s.kt)("inlineCode",{parentName:"p"},"https://example.com/over/there?name=ferret")),(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Query_string"},"https://en.wikipedia.org/wiki/Query_string"))),(0,s.kt)("p",null,'For example, if we wanted to match a GET request for the route "/products" that ',(0,s.kt)("em",{parentName:"p"},"also"),' supports the optional query string value "onSale", ie: "/products?onSale=true", we could use the code:'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"app.get('/products', (req, res) => {\n  let result = 'all Products';\n\n  // NOTE: query parameter values are always strings\n\n  if (req.query.onSale == 'true') {\n    result += ' (on sale)';\n  }\n\n  res.send(result);\n});\n")),(0,s.kt)("p",null,'When designing route handlers that can accept query string values, we do not include them in the "route" (ie: "/products"). Additionally, since the route will match ',(0,s.kt)("em",{parentName:"p"},"without"),' the "onSale" query sting value, it is important to return a value if it\'s missing (ie: "all Products" or an error if the query parameter ',(0,s.kt)("em",{parentName:"p"},"must")," be present)"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"NOTE:"),' Multiple query parameters may also be used, and are separated by an ampersand, "&": ',(0,s.kt)("inlineCode",{parentName:"p"},"https://example.com/path/to/page?name=ferret&color=purple"))),(0,s.kt)("h3",{id:"reqget"},"req.get()"),(0,s.kt)("p",null,"req.get() is necessary for checking the values of specific HTTP headers sent with the request. For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"app.get('/hello', (req, res) => {\n  res.send(`Hello ${req.get('user-agent')}`);\n});\n")),(0,s.kt)("p",null,'Here, when a user requests the "/hello" route, they should see the text "Hello" followed by the content of the ',(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent"},'"user-agent"')," header sent with the request."),(0,s.kt)("h2",{id:"the-response-object"},"The Response object"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://expressjs.com/en/api.html#res"},'"res"')," object represents the object that contains all the information and metadata for a response sent ",(0,s.kt)("em",{parentName:"p"},"from")," the server. When you see examples of the response object in use it will typically be referred to as \u2018res\u2019 (short for response object). The data you send back from the server can be one of several different formats - the most common of which are HTML, JSON, CSS, JS and plain files (.pdf, .txt, .jpg, .png, etc)."),(0,s.kt)("p",null,"Some of the commonly used response properties and methods used throughout these notes are:"),(0,s.kt)("h3",{id:"rescookie"},"res.cookie()"),(0,s.kt)("p",null,'This allows you to send a cookie with the response, specified using a name = value key pair. You can set the value to a string / object using JSON notation and it will be included in the "Set-Cookie" header of the response. For example:'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"app.get('/cookie-test', (req, res) => {\n  res.cookie('message', 'Hello World!');\n  res.send('Cookie Sent!');\n});\n")),(0,s.kt)("h3",{id:"resend"},"res.end()"),(0,s.kt)("p",null,"res.end() is used you want to end a response immediately and send nothing back. For example, we may wish to send a ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204"},'"204 - No Content"'),' status code, which indicates that "a request has succeeded, but that the client doesn\'t need to navigate away from its current page". For example:'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"app.put('/update', (req, res) => {\n  // ... (update logic)\n  res.status(204).end();\n});\n")),(0,s.kt)("h3",{id:"resredirect"},"res.redirect()"),(0,s.kt)("p",null,"The res.redirect() method is used to perform a redirect to another page on your site, go back to the previous page, or redirect to another domain. For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"app.get('/to-google', (req, res) => {\n  res.redirect('https://www.google.ca/');\n});\n")),(0,s.kt)("h3",{id:"ressend"},"res.send()"),(0,s.kt)("p",null,"This is the primary response method to send a response to the client. You can send a String, Object, Array, or even a Buffer object back to the client. The send() method will automatically set the Content-Type header for you based on the type of data sent. For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"app.get('/json-test', (req, res) => {\n  res.send({ message: 'Hello World!' }); // Content-Type: application/json; charset=utf-8\n});\n\napp.get('/plain-text-test', (req, res) => {\n  res.send('Hello World!'); // Content-Type: text/html; charset=utf-8\n});\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"NOTE:"),' When sending a JavaScript object back (as in the example above), the "send()" method will internally convert it to a JSON-formatted string')),(0,s.kt)("h3",{id:"resstatus"},"res.status()"),(0,s.kt)("p",null,"res.status() is used to set a specific status code for the response (as seen above in the ",(0,s.kt)("a",{parentName:"p",href:"/WebProgrammingToolsAndFrameworks/Advanced-Routing-Middleware/application-request-response-objects#resend"},"res.end()")," example). This will be useful when handling client / server errors and setting ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses"},"4xx")," / ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses"},"5xx")," series error codes. More detail is discussed in the following ",(0,s.kt)("a",{parentName:"p",href:"/WebProgrammingToolsAndFrameworks/Advanced-Routing-Middleware/middleware"},'"Middleware"')," section."))}u.isMDXComponent=!0},8209:(e,t,r)=>{r(7294)}}]);