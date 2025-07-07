---
id: http-protocol-overview
title: HTTP Protocol Overview
sidebar_position: 1
description: HTTP Protocol Overview
---

# HTTP Protocol Overview

The HTTP Protocol itself is an Application layer protocol – that is, it essentially sits “on top” of an underlying network-level protocol such as the Transmission Control Protocol (TCP). HTTP is human-readable and extensible, which makes the protocol extremely easy to extend and to experiment with. New functionality can be introduced simply by establishing an agreement between a client and a server and specifying new “headers” – these will enable the client and server to pass additional information along with the request or the response. The payload content (ie: raw HTML) is sent in the “message body”.

Both HTTP requests and responses share a similar structure and are composed of:

- A start-line that describes the requests to be performed, or its status that is a success or a failure. This start-line is always a single line.
- An optional set of HTTP headers specifying the request, or describing the body included in the message.
- A blank line indicating that all meta-information for the request has been sent.
- An optional body that contains data associated with the request (like the content of an HTML form), or the document associated with a response. The presence of the body and its size is defined by the start-line and the HTTP headers.

![HTTP Message](https://mdn.github.io/shared-assets/images/diagrams/http/messages/http-message-anatomy.svg)  
([https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages))

## HTTP Requests

### Start line

HTTP requests are messages sent by the client to initiate an action on the server. Their start-line contains of three elements:

1.  An HTTP method that describes the action to be performed:

| Method | Description |
|--------|-------------|
| [GET](https://tools.ietf.org/html/rfc7231#section-4.3.1) | The GET method is used to retrieve information from a specified URI (Universal Resource Identifier) and is assumed to be a safe, repeatable operation by browsers, caches and other HTTP aware components. This means that the operation must have no side effects and GET requests can be re-issued without worrying about the consequences. |
| [POST](https://tools.ietf.org/html/rfc7231#section-4.3.3) | The POST method requests that the target resource process the representation enclosed in the request according to the resource’s own specific semantics. For example, POST is used for the following functions (among others): - Providing a block of data, such as the fields entered into an HTML form, to a data-handling process; - Posting a message to a bulletin board, newsgroup, mailing list, blog, or similar group of articles; - Creating a new resource that has yet to be identified by the origin server; - Appending data to a resource’s existing representation(s). |
| [PUT](https://tools.ietf.org/html/rfc7231#section-4.3.4) | The PUT method is used to request that server store the content included in message body at a location specified by the given URL. For example, this might be a file that will be created or replaced. |
| [HEAD](https://tools.ietf.org/html/rfc7231#section-4.3.2) | The HEAD method is identical to GET except that the server MUST NOT send a message body in the response (i.e., the response terminates at the end of the header section). This method can be used for obtaining metadata about the selected representation without transferring the representation data. |
| [DELETE](https://tools.ietf.org/html/rfc7231#section-4.3.5) | The DELETE method requests that the origin server remove the association between the target resource and its current functionality. In effect, this method is similar to the rm command in UNIX: it expresses a deletion operation on the URI mapping of the origin server. |
| [CONNECT](https://tools.ietf.org/html/rfc7231#section-4.3.6) | The CONNECT method requests that the recipient establish a tunnel to the destination origin server identified by the request-target and, if successful, thereafter restrict its behavior to blind forwarding of packets, in both directions, until the tunnel is closed. Tunnels are commonly used to create an end-to-end virtual connection, through one or more proxies, which can then be secured using TLS (Transport Layer Security). |
| [OPTIONS](https://tools.ietf.org/html/rfc7231#section-4.3.7) | The OPTIONS method requests information about the communication options available for the target resource. This method allows a client to determine the options and/or requirements associated with a resource, or the capabilities of a server, without implying a resource action. |
| [TRACE](https://tools.ietf.org/html/rfc7231#section-4.3.8) | The TRACE method requests a remote, application-level loop-back of the request message. This is typically used to echo the contents of an HTTP Request back to the requester which can be used for debugging purposes during development. |

2.  The request target (this can vary between the different HTTP methods) – for example, this can be:

    - An absolute path, optionally followed by a ‘?’ and a query string. This is the most common form, called origin form, and is used with GET, POST, HEAD, and OPTIONS methods, for example:

      - `POST / HTTP 1.1`
      - `GET /background.png HTTP/1.0`
      - `HEAD /test.html?query=alibaba HTTP/1.1`
      - `OPTIONS /anypage.html HTTP/1.0`

    - A complete URL, the absolute form, mostly used with GET when connected to a proxy, for example:
      - `GET http://developer.mozilla.org/en-US/docs/Web/HTTP/Messages HTTP/1.1`
    - The authority component of an URL, that is the domain name and optionally the port (prefixed by a ‘:’), called the authority form. It is only used with CONNECT when setting up an HTTP tunnel, for example:
      - `CONNECT developer.mozilla.org:80 HTTP/1.1`
    - The asterisk form, a simple asterisk (‘*’) used with OPTIONS and representing the server as a whole, for example:
      - `OPTIONS * HTTP/1.1`

3.  The HTTP version, that defines the structure of the rest of the message, and acts as an indicator of the version to use for the response.

### Headers

HTTP headers in a request follow the basic structure of any HTTP header: a case-insensitive string followed by a colon (‘:’) and a value whose structure depends upon the header. The whole header, including the value, consists of one single line, that can be quite long.

There are [numerous request headers available](http://www.iana.org/assignments/message-headers/message-headers.xhtml). In a request, the headers can be divided into two groups:

- **Request headers:** Provide additional context to a request or add extra logic to how it should be treated by a server (e.g., conditional requests).
- **Representation headers:** Sent in a request if the message has a body, and they describe the original form of the message data and any encoding applied. This allows the recipient to understand how to reconstruct the resource as it was before it was transmitted over the network.

![HTTP Request Header](https://mdn.github.io/shared-assets/images/diagrams/http/messages/request-headers.svg)  
([https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages))

### Body

The last part of a request is its body. Not all requests have one: for example, requests fetching resources (like GET or HEAD) usually don’t need any. Similarly, DELETE or OPTIONS also do not require a body.

Other requests send data in the body to the server in order to update it: this is often the case of POST requests (that can have HTML form data).

## HTTP Responses

### Status line

The start line of an HTTP response, called the status line, contains the following information:

1.  The protocol version, usually **HTTP/1.1**
2.  A [status code](http://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml) beginning with 1, 2, 3, 4 or 5 that provides information such as the success or failure of the request:

| Range | Description |
|-------|-------------|
| **[1xx](https://tools.ietf.org/html/rfc7231#section-6.2)** | **Informational:** Request received, continuing process. For example, Microsoft IIS (Internet Information Services) initially replies with [100 (Continue)](https://tools.ietf.org/html/rfc7231#section-6.2.1) when it receives a POST request and then with [200 (OK)](https://tools.ietf.org/html/rfc7231#section-6.3.1) once it has been processed. |
| **[2xx](https://tools.ietf.org/html/rfc7231#section-6.3)** | **Success:** The action was successfully received, understood, and accepted. For example, the [200 (Ok)](https://tools.ietf.org/html/rfc7231#section-6.3.1) status code indicates that the request has succeeded. The meaning of “success” varies depending on the HTTP method, for example:  **GET:** The resource has been fetched and is transmitted in the message body, **HEAD:** The entity headers are in the message body, **POST:** The resource describing the result of the action is transmitted in the message body, and **TRACE:** The message body contains the request message as received by the server |
| **[3xx](https://tools.ietf.org/html/rfc7231#section-6.4)** | **Redirection:** Further action must be taken in order to complete the request. For example, the [302 (Found)](https://tools.ietf.org/html/rfc7231#section-6.4.3) status code indicates that the requested resource has been temporarily moved and the browser should issue a request to the URL supplied in the Location response header. |
| **[4xx](https://tools.ietf.org/html/rfc7231#section-6.5)** | **Client Error:** The request contains bad syntax or cannot be fulfilled. For example, the famous [404 (Not Found)](https://tools.ietf.org/html/rfc7231#section-6.5.4) status code indicates that the server can not find requested resource, or is not willing to disclose that one exists. |
| **[5xx](https://tools.ietf.org/html/rfc7231#section-6.6)** | **Server Error:** The server failed to fulfill an apparently valid request. For example, the [500 (Internal Server Error)](https://tools.ietf.org/html/rfc7231#section-6.6.1) status code indicates that the server encountered an unexpected error / condition that prevented it from fulfilling the request. |

3.  A status text, purely informational, that is a textual short description of the status code. This helps HTTP messages be more human-readable, for example:
    - `HTTP/1.1 404 Not Found`

### Headers

The HTTP header format for responses follow the same basic structure (a case-insensitive string followed by a colon (‘:’) and a value whose structure depends upon the type of the header. The whole header, including the value, stands in one single line)

There are [numerous response headers available](http://www.iana.org/assignments/message-headers/message-headers.xhtml). In a response, the headers can be divided into two groups:

- **Response headers:** Give additional context about the message or add extra logic to how the client should make subsequent requests. For example, headers like Server include information about the server software, while Date includes when the response was generated. There is also information about the resource being returned, such as its content type (Content-Type), or how it should be cached (Cache-Control).
- **Representation headers:** Describe the form of the message data and any encoding applied (if the message has a body). For example, the same resource might be formatted in a particular media type such as XML or JSON, localized to a particular written language or geographical region, and/or compressed or otherwise encoded for transmission. This allows a recipient to understand how to reconstruct the resource as it was before it was transmitted over the network.

![HTTP Response Header](https://mdn.github.io/shared-assets/images/diagrams/http/messages/response-headers.svg)  
([https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages))

### Body

The last part of a response is the body. This is typically a single file of known length (defined by the two headers: [“Content-Type”](https://tools.ietf.org/html/rfc7231#section-3.1.1.5) and [“Content-Length”](https://tools.ietf.org/html/rfc7230#section-3.3.2)) or a single file of unknown length (encoded in chunks with the [“Transfer-Encoding”](https://tools.ietf.org/html/rfc7230#section-3.3.1) header set to “chunked”. However, not all responses have a body, for example: responses with status code like 201 (Created) or 204 (No Content).
