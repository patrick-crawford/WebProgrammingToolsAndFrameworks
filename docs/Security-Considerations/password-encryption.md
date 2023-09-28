---
id: password-encryption
title: Password Encryption
sidebar_position: 2
description: Password Encryption
---

# Password Encryption

HTTPS is a significant factor to consider when securing a website online; however, it does not encompass all aspects of security. For example, what if unauthorized users gain access your database? This could result in the theft of personal information such as credit card information or user passwords.

This is where the integration of an encryption library becomes important. One option to solve the above problem is to enable "one-way" encryption, effectively encrypting plain text data in a way that makes it impossible decipher. To verify if the encrypted data corresponds to specific plain text data, the plain text data must be encrypted using the original method and compared.

This is a standard way to store and work with passwords. Encrypt them in the database when a user registers and when they try to login, encrypt them once again and compare the encrypted passwords for a match. This way we are never storing users' plain text passwords in the database and anyone who has access to the database cannot read them.

## Bcrypt

A famous encryption algorithm to achieve "one-way" encryption, is "bcrypt"

> bcrypt is a password-hashing function designed by Niels Provos and David Mazières, based on the Blowfish cipher and presented at USENIX in 1999. Besides incorporating a salt to protect against rainbow table attacks, bcrypt is an adaptive function: over time, the iteration count can be increased to make it slower, so it remains resistant to brute-force search attacks even with increasing computation power.
>
> [https://en.wikipedia.org/wiki/Bcrypt](https://en.wikipedia.org/wiki/Bcrypt)

This sounds like exactly what we need. Fortunately, bcrypt is available on NPM via a module called: ["bcrypt.js"](https://www.npmjs.com/package/bcryptjs).

```bash
npm install bcryptjs
```

```js
const bcrypt = require('bcryptjs');
```

### Encrypting Passwords

If we wish to encrypt a plain text password (ie: "myPassword123"), we can use [bcrypt](https://en.wikipedia.org/wiki/Bcrypt) to generate a ["salt"](<https://en.wikipedia.org/wiki/Salt_(cryptography)>) and ["hash"](https://en.wikipedia.org/wiki/Cryptographic_hash_function) the text:

```js
// Encrypt the plain text: "myPassword123"
bcrypt
  .hash('myPassword123', 10)
  .then((hash) => {
    // Hash the password using a Salt that was generated using 10 rounds
    // TODO: Store the resulting "hash" value in the DB
  })
  .catch((err) => {
    console.log(err); // Show any errors that occurred during the process
  });
```

### Validating Encrypted Passwords

If we wish to compare the "hashed" text with plain text (to see if a user-entered password matches the value in the DB), we use:

```js
// Pull the password "hash" value from the DB and compare it to "myPassword123" (match)
bcrypt.compare('myPassword123', hash).then((result) => {
  // result === true
});

// Pull the password "hash" value from the DB and compare it to "myPasswordABC" (does not match)
bcrypt.compare('myPasswordABC', hash).then((result) => {
  // result === false
});
```
