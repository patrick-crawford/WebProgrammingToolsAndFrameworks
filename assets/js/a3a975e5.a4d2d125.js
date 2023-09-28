"use strict";(self.webpackChunkipc144=self.webpackChunkipc144||[]).push([[6296],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=s,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:s,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),s=(n(7294),n(3905));n(8209);const r={id:"introduction-to-client-sessions",title:'Introduction to "Client Sessions"',sidebar_position:2,description:'Introduction to "Client Sessions"'},i='Introduction to "Client Sessions"',o={unversionedId:"Managing-State-Information/introduction-to-client-sessions",id:"Managing-State-Information/introduction-to-client-sessions",title:'Introduction to "Client Sessions"',description:'Introduction to "Client Sessions"',source:"@site/docs/Managing-State-Information/introduction-to-client-sessions.md",sourceDirName:"Managing-State-Information",slug:"/Managing-State-Information/introduction-to-client-sessions",permalink:"/WebProgrammingToolsAndFrameworks/Managing-State-Information/introduction-to-client-sessions",draft:!1,editUrl:"https://github.com/patrick-crawford/WebProgrammingToolsAndFrameworks/tree/master/docs/Managing-State-Information/introduction-to-client-sessions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"introduction-to-client-sessions",title:'Introduction to "Client Sessions"',sidebar_position:2,description:'Introduction to "Client Sessions"'},sidebar:"courseNotesSidebar",previous:{title:"Key Terminology",permalink:"/WebProgrammingToolsAndFrameworks/Managing-State-Information/key-terminology"},next:{title:"Example Code",permalink:"/WebProgrammingToolsAndFrameworks/Managing-State-Information/example-code"}},l={},p=[{value:"The &quot;client-sessions&quot; Library",id:"the-client-sessions-library",level:2},{value:"Middleware",id:"middleware",level:3},{value:"Testing",id:"testing",level:3},{value:"Practical Application",id:"practical-application",level:2},{value:"Routes",id:"routes",level:3},{value:"Templates",id:"templates",level:3},{value:"Middleware",id:"middleware-1",level:3},{value:"Route Updates (Logic)",id:"route-updates-logic",level:3}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"introduction-to-client-sessions"},'Introduction to "Client Sessions"'),(0,s.kt)("p",null,'We have established that there are multiple benefits to storing "session" data on the client in an encrypted cookie:'),(0,s.kt)("blockquote",null,(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"The data is always available, regardless of which machine is serving a user"),(0,s.kt)("li",{parentName:"ul"},"There is no state to manage on servers"),(0,s.kt)("li",{parentName:"ul"},"Nothing needs to be replicated between the web servers"),(0,s.kt)("li",{parentName:"ul"},"New web servers can be added instantly")),(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("a",{parentName:"p",href:"https://hacks.mozilla.org/2012/12/using-secure-client-side-sessions-to-build-simple-and-scalable-node-js-applications-a-node-js-holiday-season-part-3/"},'"Using secure client-side sessions to build simple and scalable Node.JS applications" '))),(0,s.kt)("p",null,"Additionally, we have seen that this technology is widely tested and has been made available via the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/mozilla/node-client-sessions"},'"client sessions"')," Node library. In the following sections, we will see how we can implement and test this library in our servers."),(0,s.kt)("h2",{id:"the-client-sessions-library"},'The "client-sessions" Library'),(0,s.kt)("p",null,'The "client-sessions" library is available on ',(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/client-sessions"},"NPM")," and can be included in our project using the familiar steps to install:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install client-sessions\n")),(0,s.kt)("p",null,"and 'require' it in our code"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const clientSessions = require('client-sessions');\n")),(0,s.kt)("h3",{id:"middleware"},"Middleware"),(0,s.kt)("p",null,'Once we have a reference to "clientSessions", we register it as middleware and configure it using the "cookieName", "secret", "duration" and "activeDuration" properties:'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"app.use(\n  clientSessions({\n    cookieName: 'session', // this is the object name that will be added to 'req'\n    secret: 'o6LjQ5EVNC28ZgK64hDELM18ScpFQr', // this should be a long un-guessable string.\n    duration: 2 * 60 * 1000, // duration of the session in milliseconds (2 minutes)\n    activeDuration: 1000 * 60, // the session will be extended by this many ms each request (1 minute)\n  })\n);\n")),(0,s.kt)("h3",{id:"testing"},"Testing"),(0,s.kt)("p",null,"To ensure that clientSessions is working properly, add the following simple routes and start the server:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"app.get('/session-test-add', (req, res) => {\n  req.session.message = req.query.message || ''; // add a \"message\" property to the session\n  res.send(\"session created with using 'message' query parameter\");\n});\n\napp.get('/session-test-read', (req, res) => {\n  res.send(`session message: ${req.session.message}`); // read the \"message\" property from the session\n});\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},'When you navigate to the "/session-test-add" route with a "message" query parameter, ie:'),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"/session-test-add?message=Hello World!\n")),(0,s.kt)("p",{parentName:"li"},"You should see that a ",(0,s.kt)("strong",{parentName:"p"},'"Set Cookie"')," header was sent in the response with a value that should look like the following:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"session=25uFcTuHZzZlSWntEs-Kzg.D96gsJqB0lLKj4DBZsc3KSj4Z4_76pkoCy4uXUqgS1C4uuHbaxMZ6l9dTCWu-ijc.1692988779453.120000.FprcH5eIT-o6Iedv-vP2i0P8HmzCRMXGdm813oveVBc; path=/; expires=Fri, 25 Aug 2023 18:41:40 GMT; httponly\n")),(0,s.kt)("p",{parentName:"li"},"This confirms that our session value was indeed encrypted and sent to the client.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"To test whether or not our server can read it, navigate to the other route:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"/session-test-read\n")),(0,s.kt)("p",{parentName:"li"},'You should see the response text: "session message: Hello World!". Additionally, you should see that a ',(0,s.kt)("strong",{parentName:"p"},'"Cookie"')," header was sent in the request with a value like:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"session=AqnLAnL7dqAr9QqXnpD5Xw.wcCqiCvVSRgllI1mLOAC9yHmjjLygsur7AQaKX50_9vkugEnTKhhz3V4U8V_xgFa.1692989253302.120000.kCRDEuDgPpEuEsuEVF-2vR3vKILSPluM8tyaghTnYCE\n")))),(0,s.kt)("h2",{id:"practical-application"},"Practical Application"),(0,s.kt)("p",null,'We can now confirm that "client sessions" is working correctly - we are able to add values to the session, which are encrypted and sent to the client using a "cookie". As a more practical test of this technology, we will implement a simple app with a "login" view and a protected "dashboard" view that may ',(0,s.kt)("strong",{parentName:"p"},"only")," be accessed once the user has logged in."),(0,s.kt)("p",null,"To begin, create a ",(0,s.kt)("a",{parentName:"p",href:"/Web-Server-Introduction/simple-web-server-using-expressjs"},"simple web server using Express"),", making sure to also install and configure EJS (see: ",(0,s.kt)("a",{parentName:"p",href:"/WebProgrammingToolsAndFrameworks/Template-Engines/ejs-embedded-javaScript-templates"},'"Template Engines" - EJS'),")."),(0,s.kt)("h3",{id:"routes"},"Routes"),(0,s.kt)("p",null,"The server should have three routes:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},'GET "/login"'),' - renders a "login.ejs" file with an empty "message"'),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-js"},"app.get('/login', (req, res) => {\n  res.render('login', { message: '' });\n});\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},'POST "/login"'),' - renders a "/login.ejs" file with an "invalid login" message'),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-js"},"app.post('/login', (req, res) => {\n  res.render('login', { message: 'invalid login' });\n});\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},'GET "/dashboard"'),' - renders a "dashboard.ejs" file with a "user" object from the session'),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-js"},"app.get('/dashboard', (req, res) => {\n  res.render('dashboard', { user: req.session.user });\n});\n")))),(0,s.kt)("h3",{id:"templates"},"Templates"),(0,s.kt)("p",null,'Next, we must create our two EJS template files: "login.ejs" and "dashboard.ejs" in a ',(0,s.kt)("strong",{parentName:"p"},"views")," directory:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"views/login.ejs")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Login</title>\n  </head>\n  <body>\n    <h1>Log In</h1>\n    <hr />\n    <br />\n    <form method="post" action="/login">\n      <input type="text" placeholder="User Name" name="userName" />\n      <input type="password" placeholder="Password" name="password" />\n      <button type="submit">Log In</button>\n    </form>\n    <br />\n    <%= message %>\n  </body>\n</html>\n'))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"views/dashboard.ejs")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Dashboard</title>\n  </head>\n  <body>\n    <h1>Dashboard</h1>\n    <hr />\n    <br />\n    <h3>Hello <%= user.userName %></h3>\n    <p>Welcome to your dashboard</p>\n    <p>Here is the information we have on file for you:</p>\n    <h4>userName: <%= user.userName %></h4>\n    <h4>email: <%= user.email %></h4>\n    <a href="/logout">Logout</a>\n  </body>\n</html>\n')))),(0,s.kt)("h3",{id:"middleware-1"},"Middleware"),(0,s.kt)("p",null,"The next part of our application is the ",(0,s.kt)("strong",{parentName:"p"},"middleware"),". We will require:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The built-in urlencoded middleware:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-js"},"app.use(express.urlencoded({ extended: true }));\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The client-sessions middleware - installed using NPM and included using:",(0,s.kt)("br",null)," ",(0,s.kt)("inlineCode",{parentName:"p"},'const clientSessions = require("client-sessions");')),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-js"},"app.use(\n  clientSessions({\n    cookieName: 'session', // this is the object name that will be added to 'req'\n    secret: 'o6LjQ5EVNC28ZgK64hDELM18ScpFQr', // this should be a long un-guessable string.\n    duration: 2 * 60 * 1000, // duration of the session in milliseconds (2 minutes)\n    activeDuration: 1000 * 60, // the session will be extended by this many ms each request (1 minute)\n  })\n);\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Custom middleware, used to protect a route from unauthorized access:"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-js"},"function ensureLogin(req, res, next) {\n  if (!req.session.user) {\n    res.redirect('/login');\n  } else {\n    next();\n  }\n}\n")))),(0,s.kt)("h3",{id:"route-updates-logic"},"Route Updates (Logic)"),(0,s.kt)("p",null,"The final piece of our application is to add some ",(0,s.kt)("em",{parentName:"p"},"logic"),' to our routes. Specifically, we should add logic to validate the userName / password combination against a predefined (hard-coded) user. If the user is authenticated, a session should be created which gives them access to the "dashboard" route.'),(0,s.kt)("p",null,'To begin, let\'s add our "ensureLogin" middleware function to the "/dashboard" route to prevent unauthorized access:'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"app.get('/dashboard', ensureLogin, (req, res) => {\n  res.render('dashboard', { user: req.session.user });\n});\n")),(0,s.kt)("p",null,'Next, we will update our POST "/login" route to authenticate the "userName" and "password" values from the login form against a mock user. If the credentials match, create a session for the user, otherwise re-render the "login" template with the error message.'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"app.post('/login', (req, res) => {\n  let mockUser = {\n    userName: 'sampleuser',\n    password: 'samplepassword',\n    email: 'sampleuser@example.com',\n  };\n\n  if (req.body.userName == mockUser.userName && req.body.password == mockUser.password) {\n    req.session.user = {\n      userName: mockUser.userName,\n      email: mockUser.email,\n    };\n\n    res.redirect('/dashboard');\n  } else {\n    res.render('login', { message: 'invalid login' });\n  }\n});\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"NOTE:"),' If we also wish to implement "log out" functionality, we could ',(0,s.kt)("strong",{parentName:"p"},"reset")," the session with the following code:"),(0,s.kt)("pre",{parentName:"blockquote"},(0,s.kt)("code",{parentName:"pre",className:"language-js"},"req.session.reset();\n"))))}c.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);