---
id: secure-http-headers
title: Secure HTTP Headers
sidebar_position: 3
description: Secure HTTP Headers
---

# Secure HTTP Headers

When attempting to secure our websites / apps, we have seen how to implement important features such as ["HTTPS"](Security-Considerations/https-introduction.md) and ["Password Encryption"](Security-Considerations/password-encryption.md). However, there are other attacks such as ["Cross-Site Scripting (XSS)"](https://owasp.org/www-community/attacks/xss/), ["Cross-Site Request Forgery (CSRF)"](https://owasp.org/www-community/attacks/csrf), ["Clickjacking Attacks"](https://owasp.org/www-community/attacks/Clickjacking), and so on that we must also consider. Fortunately, we can set a number of **headers** on our HTTP Responses that can help mitigate these issues, for example:

- **Content Security Policy**: This header can be used to control what resources the user agent is allowed to load for that page. For example, a page that uploads and displays images could allow images from anywhere, but restrict a form action to a specific endpoint. A properly designed Content Security Policy helps protect a page against a cross-site scripting attack.

- **X-Frame-Options**: Tells the browser whether the website can be embedded in a frame or iframe. By setting the X-Frame-Options header to "DENY" or "SAMEORIGIN," we prevent the web application from being embedded in a frame from another domain, effectively mitigating clickjacking attacks.

- **X-Permitted-Cross-Domain-Policies**: This header is used to limit which data external resources, such as PDF documents, can access on the domain. Failure to set the X-Permitted- Cross-Domain-Policies header to “none” value allows other domains to embed the application’s data in their content.

and so on - see [https://owasp.org/www-project-secure-headers](https://owasp.org/www-project-secure-headers/) for more information.

## Introducing Helmet.js

To help us work with these secure headers, we can use an NPM module called ["helmet.js"](https://helmetjs.github.io/). Helmet.js functions as middleware in our Node / Express.js applications that automatically sets or removes certain **response headers** in an effort to enhance security.

To get started using helmet, we must install it from [NPM](https://www.npmjs.com/package/helmet) and **require** it in our server.js code:

```bash
npm install helmet
```

```js
const helmet = require('helmet');
```

Once it is required, we can use the _default configuration_ by simply invoking it an "app.use()" to register it as middleware, ie:

```js
app.use(helmet());
```

If you test an express server (ie: our ["simple web server"](Web-Server-Introduction/simple-web-server-using-expressjs.md)) with this configuration, you should see a similar set of headers have been automatically added to the response:

| Response Header                   | Value                                                                                                                                                                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Content-Security-Policy           | default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests |
| Cross-Origin-Opener-Policy        | same-origin                                                                                                                                                                                                                                                 |
| Cross-Origin-Resource-Policy      | same-origin                                                                                                                                                                                                                                                 |
| Origin-Agent-Cluster              | ?1                                                                                                                                                                                                                                                          |
| Referrer-Policy                   | no-referrer                                                                                                                                                                                                                                                 |
| X-Content-Type-Options            | nosniff                                                                                                                                                                                                                                                     |
| X-Dns-Prefetch-Control            | off                                                                                                                                                                                                                                                         |
| X-Download-Options                | noopen                                                                                                                                                                                                                                                      |
| X-Frame-Options                   | SAMEORIGIN                                                                                                                                                                                                                                                  |
| X-Permitted-Cross-Domain-Policies | none                                                                                                                                                                                                                                                        |
| X-Xss-Protection                  | 0                                                                                                                                                                                                                                                           |

Additionally, the `X-Powered-By` header has also been removed.

For configuration options, see the ["official Helmet.js documentation"](https://helmetjs.github.io/)
