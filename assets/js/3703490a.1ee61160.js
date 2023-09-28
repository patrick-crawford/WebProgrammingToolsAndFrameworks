"use strict";(self.webpackChunkipc144=self.webpackChunkipc144||[]).push([[164],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(h,s(s({ref:t},c),{},{components:r})):a.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6766:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));r(8209);const o={id:"secure-http-headers",title:"Secure HTTP Headers",sidebar_position:3,description:"Secure HTTP Headers"},s="Secure HTTP Headers",i={unversionedId:"Security-Considerations/secure-http-headers",id:"Security-Considerations/secure-http-headers",title:"Secure HTTP Headers",description:"Secure HTTP Headers",source:"@site/docs/Security-Considerations/secure-http-headers.md",sourceDirName:"Security-Considerations",slug:"/Security-Considerations/secure-http-headers",permalink:"/WebProgrammingToolsAndFrameworks/Security-Considerations/secure-http-headers",draft:!1,editUrl:"https://github.com/patrick-crawford/WebProgrammingToolsAndFrameworks/tree/master/docs/Security-Considerations/secure-http-headers.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"secure-http-headers",title:"Secure HTTP Headers",sidebar_position:3,description:"Secure HTTP Headers"},sidebar:"courseNotesSidebar",previous:{title:"Password Encryption",permalink:"/WebProgrammingToolsAndFrameworks/Security-Considerations/password-encryption"},next:{title:"Example Code",permalink:"/WebProgrammingToolsAndFrameworks/Security-Considerations/example-code"}},l={},p=[{value:"Introducing Helmet.js",id:"introducing-helmetjs",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"secure-http-headers"},"Secure HTTP Headers"),(0,n.kt)("p",null,"When attempting to secure our websites / apps, we have seen how to implement important features such as ",(0,n.kt)("a",{parentName:"p",href:"/WebProgrammingToolsAndFrameworks/Security-Considerations/https-introduction"},'"HTTPS"')," and ",(0,n.kt)("a",{parentName:"p",href:"/WebProgrammingToolsAndFrameworks/Security-Considerations/password-encryption"},'"Password Encryption"'),". However, there are other attacks such as ",(0,n.kt)("a",{parentName:"p",href:"https://owasp.org/www-community/attacks/xss/"},'"Cross-Site Scripting (XSS)"'),", ",(0,n.kt)("a",{parentName:"p",href:"https://owasp.org/www-community/attacks/csrf"},'"Cross-Site Request Forgery (CSRF)"'),", ",(0,n.kt)("a",{parentName:"p",href:"https://owasp.org/www-community/attacks/Clickjacking"},'"Clickjacking Attacks"'),", and so on that we must also consider. Fortunately, we can set a number of ",(0,n.kt)("strong",{parentName:"p"},"headers")," on our HTTP Responses that can help mitigate these issues, for example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Content Security Policy"),": This header can be used to control what resources the user agent is allowed to load for that page. For example, a page that uploads and displays images could allow images from anywhere, but restrict a form action to a specific endpoint. A properly designed Content Security Policy helps protect a page against a cross-site scripting attack.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"X-Frame-Options"),': Tells the browser whether the website can be embedded in a frame or iframe. By setting the X-Frame-Options header to "DENY" or "SAMEORIGIN," we prevent the web application from being embedded in a frame from another domain, effectively mitigating clickjacking attacks.')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"X-Permitted-Cross-Domain-Policies"),": This header is used to limit which data external resources, such as PDF documents, can access on the domain. Failure to set the X-Permitted- Cross-Domain-Policies header to \u201cnone\u201d value allows other domains to embed the application\u2019s data in their content."))),(0,n.kt)("p",null,"and so on - see ",(0,n.kt)("a",{parentName:"p",href:"https://owasp.org/www-project-secure-headers/"},"https://owasp.org/www-project-secure-headers")," for more information."),(0,n.kt)("h2",{id:"introducing-helmetjs"},"Introducing Helmet.js"),(0,n.kt)("p",null,"To help us work with these secure headers, we can use an NPM module called ",(0,n.kt)("a",{parentName:"p",href:"https://helmetjs.github.io/"},'"helmet.js"'),". Helmet.js functions as middleware in our Node / Express.js applications that automatically sets or removes certain ",(0,n.kt)("strong",{parentName:"p"},"response headers")," in an effort to enhance security."),(0,n.kt)("p",null,"To get started using helmet, we must install it from ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/helmet"},"NPM")," and ",(0,n.kt)("strong",{parentName:"p"},"require")," it in our server.js code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install helmet\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const helmet = require('helmet');\n")),(0,n.kt)("p",null,"Once it is required, we can use the ",(0,n.kt)("em",{parentName:"p"},"default configuration"),' by simply invoking it an "app.use()" to register it as middleware, ie:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"app.use(helmet());\n")),(0,n.kt)("p",null,"If you test an express server (ie: our ",(0,n.kt)("a",{parentName:"p",href:"/WebProgrammingToolsAndFrameworks/Web-Server-Introduction/simple-web-server-using-expressjs"},'"simple web server"'),") with this configuration, you should see a similar set of headers have been automatically added to the response:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Response Header"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Content-Security-Policy"),(0,n.kt)("td",{parentName:"tr",align:null},"default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Cross-Origin-Opener-Policy"),(0,n.kt)("td",{parentName:"tr",align:null},"same-origin")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Cross-Origin-Resource-Policy"),(0,n.kt)("td",{parentName:"tr",align:null},"same-origin")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Origin-Agent-Cluster"),(0,n.kt)("td",{parentName:"tr",align:null},"?1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Referrer-Policy"),(0,n.kt)("td",{parentName:"tr",align:null},"no-referrer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"X-Content-Type-Options"),(0,n.kt)("td",{parentName:"tr",align:null},"nosniff")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"X-Dns-Prefetch-Control"),(0,n.kt)("td",{parentName:"tr",align:null},"off")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"X-Download-Options"),(0,n.kt)("td",{parentName:"tr",align:null},"noopen")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"X-Frame-Options"),(0,n.kt)("td",{parentName:"tr",align:null},"SAMEORIGIN")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"X-Permitted-Cross-Domain-Policies"),(0,n.kt)("td",{parentName:"tr",align:null},"none")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"X-Xss-Protection"),(0,n.kt)("td",{parentName:"tr",align:null},"0")))),(0,n.kt)("p",null,"Additionally, the ",(0,n.kt)("inlineCode",{parentName:"p"},"X-Powered-By")," header has also been removed."),(0,n.kt)("p",null,"For configuration options, see the ",(0,n.kt)("a",{parentName:"p",href:"https://helmetjs.github.io/"},'"official Helmet.js documentation"')))}u.isMDXComponent=!0},8209:(e,t,r)=>{r(7294)}}]);