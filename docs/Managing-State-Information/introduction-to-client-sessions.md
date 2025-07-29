---
id: introduction-to-client-sessions
title: Introduction to "Client Sessions"
sidebar_position: 2
description: Introduction to "Client Sessions"
---

# Introduction to "Client Sessions"

We have established that there are multiple benefits to storing "session" data on the client in an encrypted cookie:

> - The data is always available, regardless of which machine is serving a user
> - There is no state to manage on servers
> - Nothing needs to be replicated between the web servers
> - New web servers can be added instantly
>
> ["Using secure client-side sessions to build simple and scalable Node.JS applications" ](https://hacks.mozilla.org/2012/12/using-secure-client-side-sessions-to-build-simple-and-scalable-node-js-applications-a-node-js-holiday-season-part-3/)

Additionally, we have seen that this technology is widely tested and has been made available via the ["client sessions"](https://github.com/mozilla/node-client-sessions) Node library. In the following sections, we will see how we can implement and test this library in our servers.

## The "client-sessions" Library

The "client-sessions" library is available on [NPM](https://www.npmjs.com/package/client-sessions) and can be included in our project using the familiar steps to install:

```bash
npm install client-sessions
```

and 'require' it in our code

```js
const clientSessions = require('client-sessions');
```

### Middleware

Once we have a reference to "clientSessions", we register it as middleware and configure it using the "cookieName", "secret", "duration" and "activeDuration" properties:

```javascript
app.use(
  clientSessions({
    cookieName: 'session', // this is the object name that will be added to 'req'
    secret: 'o6LjQ5EVNC28ZgK64hDELM18ScpFQr', // this should be a long un-guessable string.
    duration: 2 * 60 * 1000, // duration of the session in milliseconds (2 minutes)
    activeDuration: 1000 * 60, // the session will be extended by this many ms each request (1 minute)
  })
);
```

### Testing

To ensure that clientSessions is working properly, add the following simple routes and start the server:

```js
app.get('/session-test-add', (req, res) => {
  req.session.message = req.query.message || ''; // add a "message" property to the session
  res.send("session created with using 'message' query parameter");
});

app.get('/session-test-read', (req, res) => {
  res.send(`session message: ${req.session.message}`); // read the "message" property from the session
});
```

- When you navigate to the "/session-test-add" route with a "message" query parameter, ie:

  ```
  /session-test-add?message=Hello World!
  ```

  You should see that a **"Set Cookie"** header was sent in the response with a value that should look like the following:

  ```
  session=25uFcTuHZzZlSWntEs-Kzg.D96gsJqB0lLKj4DBZsc3KSj4Z4_76pkoCy4uXUqgS1C4uuHbaxMZ6l9dTCWu-ijc.1692988779453.120000.FprcH5eIT-o6Iedv-vP2i0P8HmzCRMXGdm813oveVBc; path=/; expires=Fri, 25 Aug 2023 18:41:40 GMT; httponly
  ```

  This confirms that our session value was indeed encrypted and sent to the client.

- To test whether or not our server can read it, navigate to the other route:

  ```
  /session-test-read
  ```

  You should see the response text: "session message: Hello World!". Additionally, you should see that a **"Cookie"** header was sent in the request with a value like:

  ```
  session=AqnLAnL7dqAr9QqXnpD5Xw.wcCqiCvVSRgllI1mLOAC9yHmjjLygsur7AQaKX50_9vkugEnTKhhz3V4U8V_xgFa.1692989253302.120000.kCRDEuDgPpEuEsuEVF-2vR3vKILSPluM8tyaghTnYCE
  ```

## Practical Application

We can now confirm that "client sessions" is working correctly - we are able to add values to the session, which are encrypted and sent to the client using a "cookie". As a more practical test of this technology, we will implement a simple app with a "login" view and a protected "dashboard" view that may **only** be accessed once the user has logged in.

To begin, create a [simple web server using Express](/Web-Server-Introduction/simple-web-server-using-expressjs), making sure to also install and configure EJS (see: ["Template Engines" - EJS](Template-Engines/ejs-embedded-javaScript-templates.md)).

### Routes

The server should have three routes:

- **GET "/login"** - renders a "login.ejs" file with an empty "message"

  ```js
  app.get('/login', (req, res) => {
    res.render('login', { message: '' });
  });
  ```

- **POST "/login"** - renders a "/login.ejs" file with an "invalid login" message

  ```js
  app.post('/login', (req, res) => {
    res.render('login', { message: 'invalid login' });
  });
  ```

- **GET "/dashboard"** - renders a "dashboard.ejs" file with a "user" object from the session

  ```js
  app.get('/dashboard', (req, res) => {
    res.render('dashboard', { user: req.session.user });
  });
  ```

### Templates

Next, we must create our two EJS template files: "login.ejs" and "dashboard.ejs" in a **views** directory:

- **views/login.ejs**

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Login</title>
    </head>
    <body>
      <h1>Log In</h1>
      <hr />
      <br />
      <form method="post" action="/login">
        <input type="text" placeholder="User Name" name="userName" />
        <input type="password" placeholder="Password" name="password" />
        <button type="submit">Log In</button>
      </form>
      <br />
      <%= message %>
    </body>
  </html>
  ```

- **views/dashboard.ejs**

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Dashboard</title>
    </head>
    <body>
      <h1>Dashboard</h1>
      <hr />
      <br />
      <h3>Hello <%= user.userName %></h3>
      <p>Welcome to your dashboard</p>
      <p>Here is the information we have on file for you:</p>
      <h4>userName: <%= user.userName %></h4>
      <h4>email: <%= user.email %></h4>
      <a href="/logout">Logout</a>
    </body>
  </html>
  ```

### Middleware

The next part of our application is the **middleware**. We will require:

- The built-in urlencoded middleware:

  ```js
  app.use(express.urlencoded({ extended: true }));
  ```

- The client-sessions middleware - installed using NPM and included using:<br /> `const clientSessions = require("client-sessions");`

  ```js
  app.use(
    clientSessions({
      cookieName: 'session', // this is the object name that will be added to 'req'
      secret: 'o6LjQ5EVNC28ZgK64hDELM18ScpFQr', // this should be a long un-guessable string.
      duration: 2 * 60 * 1000, // duration of the session in milliseconds (2 minutes)
      activeDuration: 1000 * 60, // the session will be extended by this many ms each request (1 minute)
    })
  );
  ```

- Custom middleware, used to protect a route from unauthorized access:

  ```js
  function ensureLogin(req, res, next) {
    if (!req.session.user) {
      res.redirect('/login');
    } else {
      next();
    }
  }
  ```

### Route Updates (Logic)

The final piece of our application is to add some _logic_ to our routes. Specifically, we should add logic to validate the userName / password combination against a predefined (hard-coded) user. If the user is authenticated, a session should be created which gives them access to the "dashboard" route.

To begin, let's add our "ensureLogin" middleware function to the "/dashboard" route to prevent unauthorized access:

```js
app.get('/dashboard', ensureLogin, (req, res) => {
  res.render('dashboard', { user: req.session.user });
});
```

Next, we will update our POST "/login" route to authenticate the "userName" and "password" values from the login form against a mock user. If the credentials match, create a session for the user, otherwise re-render the "login" template with the error message.

```js
app.post('/login', (req, res) => {
  let mockUser = {
    userName: 'sampleuser',
    password: 'samplepassword',
    email: 'sampleuser@example.com',
  };

  if (req.body.userName == mockUser.userName && req.body.password == mockUser.password) {
    req.session.user = {
      userName: mockUser.userName,
      email: mockUser.email,
    };

    res.redirect('/dashboard');
  } else {
    res.render('login', { message: 'invalid login' });
  }
});
```
:::info
If we also wish to implement "log out" functionality, we could **reset** the session with the following code:

 ```js
 req.session.reset();
 ```
:::