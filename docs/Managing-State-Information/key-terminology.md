---
id: key-terminology
title: Key Terminology
sidebar_position: 1
description: Key Terminology
---

# Key Terminology

When we talk about "State Management" in an Express application, we generally refer to the process of maintaining and managing user data _between_ requests in a "session". For example, this may involve keeping track of whether a user has logged in, or what items are in their shopping cart. Our application needs to know the status (ie: "state") of the client so that it can respond appropriately. Has the user previously been authenticated? What are the product id's of the items in their cart?

To enable this functionality within our applications, we must work with:

1.  Cookies
2.  Sessions
3.  Encryption

We are going to cover Cookies and Sessions below and briefly touch on encryption as it applies to cookies and sessions. In "Security Considerations", we will go into more detail on encryption for other purposes.

## Cookies

Recall from [Advanced Routing & Middleware](Advanced-Routing-Middleware/middleware.md), "cookies" are pieces of data that are passed back and forth from the browser to the server that hold state information about the current audience interacting with your application.

Each time a request is made from the browser or a response is sent from the server, a set of headers is included. Request headers contain the **'Cookie'** header and response headers contain the **'Set-Cookie'** header. These headers are a string of semicolon separated values that can be referenced in server side code using the ‘req’ object. The most common type of data we want to place in the cookie is a "session" value.

Here is an example of what a cookie might look like in the request header when inspecting it in the Chrome dev tools

> **Cookie:** COOKIE_CONSENT_ACCEPTED=true; PS_DEVICEFEATURES=width:1680 height:1050 pixelratio:2 touch:0 geolocation:1 websockets:1 webworkers:1 datepicker:1 dtpicker:1 timepicker:1 dnd:1 sessionstorage:1 localstorage:1 history:1 canvas:1 svg:1 postmessage:1 hc:0 maf:0; AWSELB=25B9EB610A4727BBBAAA553BD60CC37D8297F3411BEB083D3A756E7C927A16B55DE1AF9292A34C533329A16DEEFAB2D1F0A8885F83FB98BB17D96810C5F56F19DD91CE2710; AWSELBCORS=25B9EB610A4727BBBAAA553BD60CC37D8297F3411BEB083D3A756E7C927A16B55DE1AF9292A34C533329A16DEEFAB2D1F0A8885F83FB98BB17D96810C5F56F19DD91CE2710; BbClientCalenderTimeZone=America/Toronto; JSESSIONID=30A73795E59C58AA9DE10E9A55611D84; samlCookie=33323A4F65773352327570346E792F7138547478616F417A38613172304E6A797A517065457A74684F574E746F476C59412B474F4E7963465151695275304D49526E72; BbRouter=expires:1692983209,id:FA96503450967749E204905096629DDA,sessionId:4644480316,signature:b0f5dc80530391a6aaa921cf7e2f29bc18af9e19b62e6f9a34d5287cb910f86c,site:47804be6-4f5a-41e6-9752-f1324b876acb,timeout:10800,user:94048796fad9425cb85b38fe6cc9a794,v:2,xsrf:a2aaa822-9f18-49ef-b62c-911a845d78c5

And here is an example of the ‘Set-Cookie’ header in a response from the server to update it after a request

> **Set-Cookie:** BbRouter=expires:1692983219,id:FA96503450967749E204905096629DDA,sessionId:4644480316,signature:7aa65c9e8d01384c96897743bc1ef4ff919b0342f37c8f8e0525c6566aa411fb,site:47804be6-4f5a-41e6-9752-f1324b876acb,timeout:10800,user:94048796fad9425cb85b38fe6cc9a794,v:2,xsrf:a2aaa822-9f18-49ef-b62c-911a845d78c5; Path=/; Secure; HttpOnly

Notice how the 'Cookie' header contains a session ID and digital signature. It may also contain other elements depending on what the app intends to retain in the 'state' between user requests. In the above case, an 'encrypted session' is utilized (which is why we're unable to read it). This is **extremely** important in a production environment, as we do not want sensitive user information to be compromised if the cookie is accessed by a third party. As a general rule, all sessions that persist between the client and server should be encrypted and transmitted exclusively over HTTPS. We will cover HTTPS encryption in "Security Considerations".

## Sessions

Implementing sessions is fairly straightforward in Express.js. The platform is mature and libraries have been tested with thousands of websites and billions of logins. These libraries are easy to use and integrate into your own projects.

A popular library for implementing client sessions is Mozilla’s ["client sessions"](https://github.com/mozilla/node-client-sessions) Node library. This library focuses on keeping sessions between the client and server on the _client_. This has several advantages over storing and keeping track of them in memory on the server. For example, if the server restarts and you have not yet saved session information in a persistent storage location, it will be lost and all your users will be logged out.

It is also beneficial to keep your sessions on the client (and have them continuously sent with each request), as this enables you to host a website or app with multiple web servers, while ensuring the session remains active regardless of the server used to process the response. If this were not the case, we must ensure each users’ requests are always sent to the same web server to preserve their session. Alternatively, you could attempt to replicate server session information between web servers, however this can be very complex. For these reasons, storing the session on the client makes scaling and session management a lot easier.

## Authentication vs Authorization

Authentication and Authorization mean two entirely different things. It can be easy to confuse them, so let’s discuss them a little bit before we begin to implement sessions and secure routes. This will enable you to be more comfortable explaining and debugging the two different concepts.

Authentication is the answer to “Who are you?”. It involves supplying credentials to identify yourself to the server and establish a session for your user account.

Authorization is the answer to “What do you have access to?”. It involves checking your permissions to resources you have requested and acting accordingly. You may be authenticated with the server and have a user session but you might not be authorized to view a certain resource. (No permissions!)

Here is quick video from MongoDB University that explains it nicely. MongoDB also has the concept of authentication and authorization.

<iframe title="Authentication vs Authorization" width="100%" height="380" src="https://www.youtube.com/embed/awJHaEKVMKI" frameborder="0" allowfullscreen=""></iframe>

## Status codes

There are a number of standard http response status codes that can be used by your application to inform the browser of whether a request was rejected because of an authentication problem or an authorization problem.

- **401 (Unauthorized)**: Authentication error. The resource exists but it requires the user to be authenticated first to view it. It may also require permissions and be checked again after authenticating for proper authorization.

- **403 (Forbidden)**: Authorization error. The resource exists but the user does not have permission to view it.

- **404 (Not Found)**: The resource that was requested was not found on the server. This is commonly used when a url is requested that simply doesn’t exist.
