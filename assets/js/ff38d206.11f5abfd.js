"use strict";(self.webpackChunkipc144=self.webpackChunkipc144||[]).push([[6005],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),h=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=h(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=h(r),c=a,m=u["".concat(i,".").concat(c)]||u[c]||p[c]||o;return r?n.createElement(m,s(s({ref:t},d),{},{components:r})):n.createElement(m,s({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var h=2;h<o;h++)s[h]=r[h];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1653:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var n=r(7462),a=(r(7294),r(3905));r(8209);const o={id:"http-protocol-overview",title:"HTTP Protocol Overview",sidebar_position:1,description:"HTTP Protocol Overview"},s="HTTP Protocol Overview",l={unversionedId:"Web-Server-Introduction/http-protocol-overview",id:"Web-Server-Introduction/http-protocol-overview",title:"HTTP Protocol Overview",description:"HTTP Protocol Overview",source:"@site/docs/Web-Server-Introduction/http-protocol-overview.md",sourceDirName:"Web-Server-Introduction",slug:"/Web-Server-Introduction/http-protocol-overview",permalink:"/WebProgrammingToolsAndFrameworks/Web-Server-Introduction/http-protocol-overview",draft:!1,editUrl:"https://github.com/patrick-crawford/WebProgrammingToolsAndFrameworks/tree/master/docs/Web-Server-Introduction/http-protocol-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"http-protocol-overview",title:"HTTP Protocol Overview",sidebar_position:1,description:"HTTP Protocol Overview"},sidebar:"courseNotesSidebar",previous:{title:"Example Code",permalink:"/WebProgrammingToolsAndFrameworks/Handling-Asynchronous-Code/example-code"},next:{title:"Modules & Node Package Manager",permalink:"/WebProgrammingToolsAndFrameworks/Web-Server-Introduction/modules-node-package-manager"}},i={},h=[{value:"HTTP Requests",id:"http-requests",level:2},{value:"Start line",id:"start-line",level:3},{value:"Headers",id:"headers",level:3},{value:"Body",id:"body",level:3},{value:"HTTP Responses",id:"http-responses",level:2},{value:"Status line",id:"status-line",level:3},{value:"Headers",id:"headers-1",level:3},{value:"Body",id:"body-1",level:3}],d={toc:h},u="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"http-protocol-overview"},"HTTP Protocol Overview"),(0,a.kt)("p",null,"The HTTP Protocol itself is an Application layer protocol \u2013 that is, it essentially sits \u201con top\u201d of an underlying network-level protocol such as the Transmission Control Protocol (TCP). HTTP is human-readable and extensible, which makes the protocol extremely easy to extend and to experiment with. New functionality can be introduced simply by establishing an agreement between a client and a server and specifying new \u201cheaders\u201d \u2013 these will enable the client and server to pass additional information along with the request or the response. The payload content (ie: raw HTML) is sent in the \u201cmessage body\u201d."),(0,a.kt)("p",null,"Both HTTP requests and responses share a similar structure and are composed of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A start-line that describes the requests to be performed, or its status that is a success or a failure. This start-line is always a single line."),(0,a.kt)("li",{parentName:"ul"},"An optional set of HTTP headers specifying the request, or describing the body included in the message."),(0,a.kt)("li",{parentName:"ul"},"A blank line indicating that all meta-information for the request has been sent."),(0,a.kt)("li",{parentName:"ul"},"An optional body that contains data associated with the request (like the content of an HTML form), or the document associated with a response. The presence of the body and its size is defined by the start-line and the HTTP headers.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"HTTP Message",src:r(1729).Z,width:"835",height:"248"}),(0,a.kt)("br",{parentName:"p"}),"\n","(",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages"},"https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages"),")"),(0,a.kt)("h2",{id:"http-requests"},"HTTP Requests"),(0,a.kt)("h3",{id:"start-line"},"Start line"),(0,a.kt)("p",null,"HTTP requests are messages sent by the client to initiate an action on the server. Their start-line contains of three elements:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"An HTTP method that describes the action to be performed:"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Method"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://tools.ietf.org/html/rfc7231#section-4.3.1",target:"_blank"},"GET")),(0,a.kt)("td",null,"The GET method is used to retrieve information from a specified URI (Universal Resource Identifier) and is assumed to be a safe, repeatable operation by browsers, caches and other HTTP aware components. This means that the operation must have no side effects and GET requests can be re-issued without worrying about the consequences.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://tools.ietf.org/html/rfc7231#section-4.3.3",target:"_blank"},"POST")),(0,a.kt)("td",null,"The POST method requests that the target resource process the representation enclosed in the request according to the resource\u2019s own specific semantics. For example, POST is used for the following functions (among others):",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Providing a block of data, such as the fields entered into an HTML form, to a data-handling process"),(0,a.kt)("li",{parentName:"ul"},"Posting a message to a bulletin board, newsgroup, mailing list, blog, or similar group of articles"),(0,a.kt)("li",{parentName:"ul"},"Creating a new resource that has yet to be identified by the origin server."),(0,a.kt)("li",{parentName:"ul"},"Appending data to a resource\u2019s existing representation(s).")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://tools.ietf.org/html/rfc7231#section-4.3.4",target:"_blank"},"PUT")),(0,a.kt)("td",null,"The PUT method is used to request that server store the content included in message body at a location specified by the given URL. For example, this might be a file that will be created or replaced.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://tools.ietf.org/html/rfc7231#section-4.3.2",target:"_blank"},"HEAD")),(0,a.kt)("td",null,"The HEAD method is identical to GET except that the server MUST NOT send a message body in the response (i.e., the response terminates at the end of the header section). This method can be used for obtaining metadata about the selected representation without transferring the representation data")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://tools.ietf.org/html/rfc7231#section-4.3.5",target:"_blank"},"DELETE")),(0,a.kt)("td",null,"The DELETE method requests that the origin server remove the association between the target resource and its current functionality. In effect, this method is similar to the rm command in UNIX: it expresses a deletion operation on the URI mapping of the origin server.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://tools.ietf.org/html/rfc7231#section-4.3.6",target:"_blank"},"CONNECT")),(0,a.kt)("td",null,"The CONNECT method requests that the recipient establish a tunnel to the destination origin server identified by the request-target and, if successful, thereafter restrict its behavior to blind forwarding of packets, in both directions, until the tunnel is closed. Tunnels are commonly used to create an end-to-end virtual connection, through one or more proxies, which can then be secured using TLS (Transport Layer Security).")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://tools.ietf.org/html/rfc7231#section-4.3.7",target:"_blank"},"OPTIONS")),(0,a.kt)("td",null,"The OPTIONS method requests information about the communication options available for the target resource. This method allows a client to determine the options and/or requirements associated with a resource, or the capabilities of a server, without implying a resource action.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://tools.ietf.org/html/rfc7231#section-4.3.8",target:"_blank"},"TRACE")),(0,a.kt)("td",null,"The TRACE method requests a remote, application-level loop-back of the request message. This is typically used to echo the contents of an HTTP Request back to the requester which can be used for debugging purposes during development."))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The request target (this can vary between the different HTTP methods) \u2013 for example, this can be:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"An absolute path, optionally followed by a \u2018?\u2019 and a query string. This is the most common form, called origin form, and is used with GET, POST, HEAD, and OPTIONS methods, for example:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"POST / HTTP 1.1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GET /background.png HTTP/1.0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HEAD /test.html?query=alibaba HTTP/1.1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"OPTIONS /anypage.html HTTP/1.0")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A complete URL, the absolute form, mostly used with GET when connected to a proxy, for example:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GET http://developer.mozilla.org/en-US/docs/Web/HTTP/Messages HTTP/1.1")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The authority component of an URL, that is the domain name and optionally the port (prefixed by a \u2018:\u2019), called the authority form. It is only used with CONNECT when setting up an HTTP tunnel, for example:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CONNECT developer.mozilla.org:80 HTTP/1.1")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The asterisk form, a simple asterisk (\u2018","*","\u2019) used with OPTIONS and representing the server as a whole, for example:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"OPTIONS * HTTP/1.1")))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The HTTP version, that defines the structure of the rest of the message, and acts as an indicator of the version to use for the response."))),(0,a.kt)("h3",{id:"headers"},"Headers"),(0,a.kt)("p",null,"HTTP headers in a request follow the basic structure of any HTTP header: a case-insensitive string followed by a colon (\u2018:\u2019) and a value whose structure depends upon the header. The whole header, including the value, consists of one single line, that can be quite long."),(0,a.kt)("p",null,"There are ",(0,a.kt)("a",{parentName:"p",href:"http://www.iana.org/assignments/message-headers/message-headers.xhtml"},"numerous request headers available"),". In a request, the headers can be divided in several groups:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Request headers:")," modify the request by specifying it further, giving context, and/or by conditionally restricting it."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"General headers:")," apply to the message as a whole."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Entity headers:")," apply to the body of the request (Note: there is no such header transmitted when there is no body in the request).")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"HTTP Request Header",src:r(3820).Z,width:"650",height:"209"}),(0,a.kt)("br",{parentName:"p"}),"\n","(",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages"},"https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages"),")"),(0,a.kt)("h3",{id:"body"},"Body"),(0,a.kt)("p",null,"The last part of a request is its body. Not all requests have one: for example, requests fetching resources (like GET or HEAD) usually don\u2019t need any. Similarly, DELETE or OPTIONS also do not require a body."),(0,a.kt)("p",null,"Other requests send data in the body to the server in order to update it: this is often the case of POST requests (that can have HTML form data)."),(0,a.kt)("h2",{id:"http-responses"},"HTTP Responses"),(0,a.kt)("h3",{id:"status-line"},"Status line"),(0,a.kt)("p",null,"The start line of an HTTP response, called the status line, contains the following information:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The protocol version, usually ",(0,a.kt)("strong",{parentName:"p"},"HTTP/1.1"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"A ",(0,a.kt)("a",{parentName:"p",href:"http://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml"},"status code")," beginning with 1, 2, 3, 4 or 5 that provides information such as the success or failure of the request:"),(0,a.kt)("div",null,(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Range"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("strong",null,(0,a.kt)("a",{href:"https://tools.ietf.org/html/rfc7231#section-6.2",target:"_blank"},"1xx"))),(0,a.kt)("td",null,(0,a.kt)("strong",null,"Informational:")," Request received, continuing process.  ",(0,a.kt)("p",null),(0,a.kt)("p",null,"For example, Microsoft IIS (Internet Information Services) initially replies with ",(0,a.kt)("a",{href:"https://tools.ietf.org/html/rfc7231#section-6.2.1",target:"_blank"},"100 (Continue)")," when it receives a POST request and then with ",(0,a.kt)("a",{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",target:"_blank"},"200 (OK)")," once it has been processed."))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("strong",null,(0,a.kt)("a",{href:"https://tools.ietf.org/html/rfc7231#section-6.3",target:"_blank"},"2xx"))),(0,a.kt)("td",null,(0,a.kt)("strong",null,"Success:")," The action was successfully received, understood, and accepted.",(0,a.kt)("p",null),(0,a.kt)("p",null,"For example, the ",(0,a.kt)("a",{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",target:"_blank"},"200 (Ok)")," status code indicates that the request has succeeded. The meaning of \u201csuccess\u201d varies depending on the HTTP method:"),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("strong",null,"GET:")," The resource has been fetched and is transmitted in the message body."),(0,a.kt)("li",null,(0,a.kt)("strong",null,"HEAD:")," The entity headers are in the message body."),(0,a.kt)("li",null,(0,a.kt)("strong",null,"POST:")," The resource describing the result of the action is transmitted in the message body."),(0,a.kt)("li",null,(0,a.kt)("strong",null,"TRACE:")," The message body contains the request message as received by the server")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("strong",null,(0,a.kt)("a",{href:"https://tools.ietf.org/html/rfc7231#section-6.4",target:"_blank"},"3xx"))),(0,a.kt)("td",null,(0,a.kt)("strong",null,"Redirection:")," Further action must be taken in order to complete the request.",(0,a.kt)("p",null),(0,a.kt)("p",null,"For example, The ",(0,a.kt)("a",{href:"https://tools.ietf.org/html/rfc7231#section-6.4.3",target:"_blank"},"302 (Found)")," status code indicates that the requested resource has been temporarily moved and the browser should issue a request to the URL supplied in the Location response header."))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("strong",null,(0,a.kt)("a",{href:"https://tools.ietf.org/html/rfc7231#section-6.5",target:"_blank"},"4xx"))),(0,a.kt)("td",null,(0,a.kt)("strong",null,"Client Error:")," The request contains bad syntax or cannot be fulfilled.",(0,a.kt)("p",null),(0,a.kt)("p",null,"For example, the famous ",(0,a.kt)("a",{href:"https://tools.ietf.org/html/rfc7231#section-6.5.4",target:"_blank"},"404 (Not Found)")," status code indicates that the server can not find requested resource, or is not willing to disclose that one exists."))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("strong",null,(0,a.kt)("a",{href:"https://tools.ietf.org/html/rfc7231#section-6.6",target:"_blank"},"5xx"))),(0,a.kt)("td",null,(0,a.kt)("strong",null,"Server Error:")," The server failed to fulfill an apparently valid request.",(0,a.kt)("p",null),(0,a.kt)("p",null,"For example, the ",(0,a.kt)("a",{href:"https://tools.ietf.org/html/rfc7231#section-6.6.1",target:"_blank"},"500 (Internal Server Error)")," status code indicates that the server encountered an unexpected error / condition that prevented it from fulfilling the request./td>",(0,a.kt)("br",null)))))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"A status text, purely informational, that is a textual short description of the status code. This helps HTTP messages be more human-readable, for example:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HTTP/1.1 404 Not Found"))))),(0,a.kt)("h3",{id:"headers-1"},"Headers"),(0,a.kt)("p",null,"The HTTP header format for responses follow the same basic structure (a case-insensitive string followed by a colon (\u2018:\u2019) and a value whose structure depends upon the type of the header. The whole header, including the value, stands in one single line)"),(0,a.kt)("p",null,"There are ",(0,a.kt)("a",{parentName:"p",href:"http://www.iana.org/assignments/message-headers/message-headers.xhtml"},"numerous response headers available"),". In a response, the headers can be divided in several groups:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"General headers:")," apply to the message as a whole."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Entity headers:")," apply to the body of the response (Note: there is no such header transmitted when there is no body in the response)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Response headers"),": give additional information about the server that don\u2019t fit in the status line.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"HTTP Response Header",src:r(153).Z,width:"604",height:"258"}),(0,a.kt)("br",{parentName:"p"}),"\n","(",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages"},"https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages"),")"),(0,a.kt)("h3",{id:"body-1"},"Body"),(0,a.kt)("p",null,"The last part of a response is the body. This is typically a single file of known length (defined by the two headers: ",(0,a.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7231#section-3.1.1.5"},"\u201cContent-Type\u201d")," and ",(0,a.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7230#section-3.3.2"},"\u201cContent-Length\u201d"),") or a single file of unknown length (encoded in chunks with the ",(0,a.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7230#section-3.3.1"},"\u201cTransfer-Encoding\u201d")," header set to \u201cchunked\u201d. However, not all responses have a body, for example: responses with status code like 201 (Created) or 204 (No Content)."))}p.isMDXComponent=!0},1729:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/HTTPMsgStructure-6649c430af9c1c5a496181a05c345c1e.jpg"},3820:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/HTTPRequestsHeader-5df8ed37c88ae0b0a992dae047aa56fa.jpg"},153:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/HTTP_Response_headers-7a8843897a8fe1d98ef4081fa4690eb3.jpg"},8209:(e,t,r)=>{r(7294)}}]);