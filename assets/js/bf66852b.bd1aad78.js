"use strict";(self.webpackChunkipc144=self.webpackChunkipc144||[]).push([[1031],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3774:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));a(8209);const o={id:"ejs-embedded-javaScript-templates",title:"EJS (Embedded JavaScript Templates)",sidebar_position:2,description:"EJS (Embedded JavaScript Templates)"},i="EJS (Embedded JavaScript Templates)",l={unversionedId:"Template-Engines/ejs-embedded-javaScript-templates",id:"Template-Engines/ejs-embedded-javaScript-templates",title:"EJS (Embedded JavaScript Templates)",description:"EJS (Embedded JavaScript Templates)",source:"@site/docs/Template-Engines/ejs-embedded-javaScript-templates.md",sourceDirName:"Template-Engines",slug:"/Template-Engines/ejs-embedded-javaScript-templates",permalink:"/WebProgrammingToolsAndFrameworks/Template-Engines/ejs-embedded-javaScript-templates",draft:!1,editUrl:"https://github.com/patrick-crawford/WebProgrammingToolsAndFrameworks/tree/master/docs/Template-Engines/ejs-embedded-javaScript-templates.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"ejs-embedded-javaScript-templates",title:"EJS (Embedded JavaScript Templates)",sidebar_position:2,description:"EJS (Embedded JavaScript Templates)"},sidebar:"courseNotesSidebar",previous:{title:"Introduction",permalink:"/WebProgrammingToolsAndFrameworks/Template-Engines/introduction"},next:{title:"Example Code",permalink:"/WebProgrammingToolsAndFrameworks/Template-Engines/example-code"}},s={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"EJS Syntax",id:"ejs-syntax",level:2},{value:"Delimiters (Tags)",id:"delimiters-tags",level:3},{value:"Includes / &quot;Partials&quot;",id:"includes--partials",level:3},{value:"Logic",id:"logic",level:2},{value:"if / else",id:"if--else",level:3},{value:"Iterating over Collections",id:"iterating-over-collections",level:3},{value:"&quot;Nesting&quot; Logic",id:"nesting-logic",level:3},{value:"Layouts",id:"layouts",level:2}],d={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ejs-embedded-javascript-templates"},"EJS (Embedded JavaScript Templates)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://handlebarsjs.com/"},"EJS"),' is described as "a simple templating language that lets you generate HTML markup with plain JavaScript. No religiousness about how to organize things. No reinvention of iteration and control-flow. It\'s just plain JavaScript."'),(0,r.kt)("p",null,"It contains features that will help us generate HTML that renders complex data. For example, consider the problem with our \u201c/viewData\u201d route from the ",(0,r.kt)("a",{parentName:"p",href:"/WebProgrammingToolsAndFrameworks/Template-Engines/introduction"},"introduction"),"; we can leverage the EJS template engine to write a simple (separate) HTML5 document that references the data using special delimiters, ie: ",(0,r.kt)("inlineCode",{parentName:"p"},"<%=")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"%>"),", rather than returning a long, complex string from our route handler."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"To begin, create the following file in your \u201cviews\u201d directory and name it \u201cviewData.ejs\u201d:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <title>View Data</title>\n  </head>\n\n  <body>\n    <table border="1">\n      <tr>\n        <th>Name</th>\n        <th>Age</th>\n        <th>Occupation</th>\n        <th>Company</th>\n      </tr>\n      <tr>\n        <td><%= data.name %></td>\n        <td><%= data.age %></td>\n        <td><%= data.occupation %></td>\n        <td><%= data.company %></td>\n      </tr>\n    </table>\n  </body>\n</html>\n')),(0,r.kt)("p",null,"This is a much cleaner approach. We no longer have to generate the full page as a string within our \u201c/viewData\u201d route and most importantly, all of the ",(0,r.kt)("strong",{parentName:"p"},"view")," logic (HTML) is separate from our ",(0,r.kt)("strong",{parentName:"p"},"control")," logic (routing)."),(0,r.kt)("p",null,"In order to set this up correctly and get express to understand the file above, we need to modify our server code slightly:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The first thing that we need to do is download / install the EJS package using NPM. Open a terminal in Visual Studio Code (ctrl + ","`"," or View -> Integrated Terminal) and make sure that your working directory is somewhere within your project and run the command"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install ejs\n")),(0,r.kt)("p",{parentName:"li"},'This will install the "ejs" package in the same way that we installed the "express" package and update the dependencies in our package.json file:'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"dependencies": {\n  "ejs": ...,\n  "express": ..."\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Next, our server needs to know how to handle HTML files that are formatted using ejs, so near the top of our code (after we define our "app"), add the line:'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"app.set('view engine', 'ejs');\n")),(0,r.kt)("p",{parentName:"li"},'This will tell our server that any file with the ".ejs" extension (instead of ".html") will use the EJS "engine" (template engine).')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'The final step involves updating our "/viewData" route to "render" our EJS file with the data:'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"app.get('/viewData', function (req, res) {\n  let someData = {\n    name: 'John',\n    age: 23,\n    occupation: 'developer',\n    company: 'Scotiabank',\n  };\n\n  res.render('viewData', {\n    data: someData,\n  });\n});\n")))),(0,r.kt)("p",null,"Now, the route no longer returns a string consisting of our HTML + data using res.send(), but instead invokes the ",(0,r.kt)("a",{parentName:"p",href:"http://expressjs.com/en/api.html#res.render"},"render")," method on the ",(0,r.kt)("a",{parentName:"p",href:"http://expressjs.com/en/api.html#res"},"response"),' object (res). We pass the name of our new file without the extension (ie: "viewData" instead of "viewData.ejs"), and a "data" object to hold all of our data (someData).'),(0,r.kt)("h2",{id:"ejs-syntax"},"EJS Syntax"),(0,r.kt)("p",null,"Before we begin to discuss the more advanced features of EJS, we must first become familiar with the syntax. For example, we have seen that ",(0,r.kt)("inlineCode",{parentName:"p"},"<%= ... %>"),' is used to render a specific value within our template. However, we should understand that this delimiter ("tag"), ',(0,r.kt)("em",{parentName:"p"},"also"),' escapes any HTML contained in the value (ie: "',"<","br /",">",'" will be rendered as "',"&","lt;br /","&",'gt;" so that it appears as text, ',(0,r.kt)("em",{parentName:"p"},"instead")," of a new line)."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<%= ... %>")," is not the only delimiter available to us. EJS also provides a number of ",(0,r.kt)("em",{parentName:"p"},"opening")," and ",(0,r.kt)("em",{parentName:"p"},"closing"),' delimiters ("tags") that control how a value is rendered within the template.'),(0,r.kt)("h3",{id:"delimiters-tags"},"Delimiters (Tags)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"<%= ... %>"))," (HTML Escaped)"),(0,r.kt)("p",{parentName:"li"},"As we have seen, this tag outputs the value into the template (HTML escaped). For example: ",(0,r.kt)("inlineCode",{parentName:"p"},"<br />")," will be rendered as: ",(0,r.kt)("inlineCode",{parentName:"p"},"&lt;br /&gt;"),", when using the tag:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<%= someValue %>\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"<%- ... %>"))," (Unescaped)"),(0,r.kt)("p",{parentName:"li"},"This tag works exactly as the above ",(0,r.kt)("inlineCode",{parentName:"p"},"<%=")," tag, except the value is ",(0,r.kt)("em",{parentName:"p"},"not")," HTML escaped.For example: ",(0,r.kt)("inlineCode",{parentName:"p"},"<br />")," will be rendered as: ",(0,r.kt)("inlineCode",{parentName:"p"},"<br />"),", when using the tag:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<%- someValue %>\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"<%# ... %>"))," (Comment)"),(0,r.kt)("p",{parentName:"li"},"This tag is used when we wish add a comment to our templates that will ",(0,r.kt)("strong",{parentName:"p"},"not")," be output in the final HTML, ie:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<%# This is a comment that will not be rendered %>\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"<% ... %>"))," (Scriptlet)"),(0,r.kt)("p",{parentName:"li"},"This is the tag that will enable us to insert ",(0,r.kt)("strong",{parentName:"p"},"logic"),' into our templates (discussed further down). For example, if our "data" object contained an array of colors, ie: ',(0,r.kt)("inlineCode",{parentName:"p"},"['red','green','blue]"),', we could use the following "scriptlet" tags to render the contents using a "forEach" loop:'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ejs"},"<% data.colors.forEach((color) => { %>\n  <%= color %>\n<% }) %>\n")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE:"),' Delimiters that output a value (ie "HTML escaped" / "unescaped") are also capable of executing JavaScript expressions. For example, if "someValue" is a string, we could use the following code:'),(0,r.kt)("p",{parentName:"blockquote"},"<%= someValue.toUpperCase() %>")),(0,r.kt)("h3",{id:"includes--partials"},'Includes / "Partials"'),(0,r.kt)("p",null,'When using EJS, it is also possible to place reusable blocks of our user interface in separate files, such as a common header or an in-page modal window / dialog box. To achieve this, EJS uses an "include" function that may be used in one of the output tags (ie: "HTML escaped" or "unescaped", however since these included .ejs files typically use HTML, the "unescaped" delimiter is more commonly used).'),(0,r.kt)("p",null,'To see how this works in practice, we will create a "partials" folder within the "views" folder (this will help us separate the reusable templates, from the "page" templates)'),(0,r.kt)("p",null,'Next, (within the "partials" folder) create a file called ',(0,r.kt)("strong",{parentName:"p"},'"header.ejs"'),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<h1>EJS Practice - <%= page %></h1>\n<hr />\n<a href="/">Home</a> | <a href="/about">About</a> | <a href="/viewData">View Data</a>\n<hr />\n<br />\n')),(0,r.kt)("p",null,'Notice how our partial template includes a block of reusable HTML as well as an "HTML escaped" tag to render a variable called "page". To render this template ',(0,r.kt)("em",{parentName:"p"},"inside"),' another template, we can use the aforementioned "include" function:'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"File: viewData.ejs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<%- include('partials/header', {page: '/viewData'}) %>\n")),(0,r.kt)("p",null,'Here, we have used the "unescaped" delimiter to ensure that the HTML within the "partial" is correctly rendered. Additionally, the second parameter contains an object that we an pass to our partial (in this case, the value of the "page" variable)'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE:"),' Partial views have access to the data in the template in which they are placed. For example, if the "header" partial (above) was placed in the viewData template, it would have access to the "data" object and could render "data.name", for example')),(0,r.kt)("h2",{id:"logic"},"Logic"),(0,r.kt)("p",null,'Using the "Scriptlet" delimiter (ie: ',(0,r.kt)("inlineCode",{parentName:"p"},"<% ... %>"),"), we can easily insert JavaScript code into our templates. This is one of the key benefits of using EJS:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\"We love JavaScript. It's a totally friendly language. All templating languages grow to be Turing-complete. Just cut out the middle-man, and use JS!"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://ejs.co/"},"https://ejs.co"))),(0,r.kt)("h3",{id:"if--else"},"if / else"),(0,r.kt)("p",null,'To conditionally render portions of our template (HTML), we can use a simple if / else statement. To get this to work correctly, each "line" of JavaScript code should be placed inside a scriptlet delimiter. For example, say we wish to conditionally show our developer "John":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let someData = {\n  name: 'John',\n  age: 23,\n  occupation: 'developer',\n  company: 'Scotiabank',\n  visible: true,\n};\n")),(0,r.kt)("p",null,'Notice, we have added a "visible" property that we can reference before we render "someData" in our view. Using a simple if / else statement, we can easily hide or show rows in the table:'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"File: viewData.ejs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<% if (data.visible) { %>\n  <tr>\n    <td><%= data.name %></td>\n    <td><%= data.age %></td>\n    <td><%= data.occupation %></td>\n    <td><%= data.company %></td>\n  </tr>\n<% } else { %>\n  <tr>\n    <td colspan=\"4\">User: '<%= data.name %>' has hidden their information</td>\n  </tr>\n<% } %>\n")),(0,r.kt)("h3",{id:"iterating-over-collections"},"Iterating over Collections"),(0,r.kt)("p",null,'In addition to conditionally rendering portions of our templates, we may also need to display the content of an array / collection. This may be done using the usual constructs, ie "for", "for...of", "while", "forEach()", etc. For example, if our someData object contained an ',(0,r.kt)("strong",{parentName:"p"},"array")," of objects:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let someData = [\n  {\n    name: 'John',\n    age: 23,\n    occupation: 'developer',\n    company: 'Scotiabank',\n  },\n  {\n    name: 'Sarah',\n    age: 32,\n    occupation: 'manager',\n    company: 'TD',\n  },\n];\n")),(0,r.kt)("p",null,'we could use the "forEach()" method to display each object in our table:'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"File: viewData.ejs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<% data.forEach(user=>{ %>\n  <tr>\n    <td><%= user.name %></td>\n    <td><%= user.age %></td>\n    <td><%= user.occupation %></td>\n    <td><%= user.company %></td>\n  </tr>\n<% }) %>\n")),(0,r.kt)("p",null,'Please note that we are not limited to the forEach() loop when iterating over data. As mentioned above, we could also use another construct, such as the "for...of" loop:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<% for (const user of data){ %>\n  <tr>\n    <td><%= user.name %></td>\n    <td><%= user.age %></td>\n    <td><%= user.occupation %></td>\n    <td><%= user.company %></td>\n  </tr>\n<% } %>\n")),(0,r.kt)("h3",{id:"nesting-logic"},'"Nesting" Logic'),(0,r.kt)("p",null,'The "scriptlet" tag is extremely powerful - it let\'s us inject JavaScript into our views to control how our data is displayed. In the above examples, we have only used single pieces of logic at a time (ie: "if/else", "forEach()", etc), but it is also possible that this logic may be "nested".'),(0,r.kt)("p",null,'For example, maybe each of our "users" in the "someData" array has a "visible" property as well. We would like to render each of the elements in the array, but ',(0,r.kt)("strong",{parentName:"p"},"also")," hide a user if their visible property is set to ",(0,r.kt)("em",{parentName:"p"},"false")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let someData = [\n  {\n    name: 'John',\n    age: 23,\n    occupation: 'developer',\n    company: 'Scotiabank',\n    visibility: false,\n  },\n  {\n    name: 'Sarah',\n    age: 32,\n    occupation: 'manager',\n    company: 'TD',\n    visibility: true,\n  },\n];\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"File: viewData.ejs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<% for (const user of data){ %>\n  <% if(user.visible){ %>\n    <tr>\n      <td><%= user.name %></td>\n      <td><%= user.age %></td>\n      <td><%= user.occupation %></td>\n      <td><%= user.company %></td>\n    </tr>\n  <% }else{ %>\n    <tr>\n      <td colspan=\"4\">User: '<%= user.name %>' has hidden their information</td>\n    </tr>\n  <% } %>\n<% } %>\n")),(0,r.kt)("h2",{id:"layouts"},"Layouts"),(0,r.kt)("p",null,'EJS does not natively support "layouts". Typically, the structure of an application using EJS as its template engine will feature a common "header, "footer", "sidebar", etc with every page, ie:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<body>\n  <%- include('header') %>\n\n  <%# Page Content / Data Here %>\n\n  <%- include('footer') %>\n</body>\n")),(0,r.kt)("p",null,"If you wish to customize the 'header' or 'footer' based on the current page, data can be sent to each of the partials separately. For example, one common task is for a navigation bar within the 'header' to highlight the link for the current page. For example, if the user is currently viewing the \"/about\" route, then \"About\" should be highlighted:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"File: header.ejs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<h1>EJS Practice - <%= page %></h1>\n<hr />\n<a href="/">Home</a> | <a href="/about"><strong>About</strong></a> | <a href="/viewData">View Data</a>\n<hr />\n<br />\n')),(0,r.kt)("p",null,'To achieve this, we can pass the current route to the partial view. Currently, we are passing this value as "page":'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"File: viewData.ejs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<%- include('partials/header', {page: '/viewData'}) %>\n")),(0,r.kt)("p",null,'Therefore, we can leverage the "unescaped" tag to conditionally highlight each of the options using the "ternary" operator, by checking the "href" attribute against the "page" value:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<h1>EJS Practice - <%= page %></h1>\n<hr />\n  <a href=\"/\"><%- (page==\"/\") ? '<strong>Home</strong>' : 'Home' %></a> |\n  <a href=\"/about\"><%- (page==\"/about\") ? '<strong>About</strong>' : 'About' %></a> |\n  <a href=\"/viewData\"><%- (page==\"/viewData\") ? '<strong>View Data</strong>' : 'View Data' %></a>\n<hr />\n<br />\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE:")," If you wish to use EJS with full layout support, consider the NPM package: ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/express-ejs-layouts"},"express-ejs-layouts"))))}m.isMDXComponent=!0},8209:(e,t,a)=>{a(7294)}}]);