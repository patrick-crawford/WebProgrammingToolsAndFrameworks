---
id: modules-node-package-manager
title: Modules & Node Package Manager
sidebar_position: 2
description: Modules & Node Package Manager
---

# Modules & Node Package Manager

## Modules

Recall way back in the Introduction, the concept of ["Built-In Modules / 'require()'"](/Introduction/hello-world#built-in-modules--require) was discussed:

> "By using the global ['require'](https://nodejs.org/docs/latest/api/esm.html#require) function, we have loaded a code "module" which contains code and logic that we can use in our own solutions."

We used this to gain access to some of the built in logic that ships with Node, including: ['fs'](https://nodejs.org/docs/latest/api/fs.html), ['path'](https://nodejs.org/docs/latest/api/path.html) and ['readline'](https://nodejs.org/docs/latest/api/readline.html).

### Writing Modules

We can also create our own modules that work the same way, by making use of a global [“module”](https://nodejs.org/docs/latest/api/modules.html#the-module-object) object – which isn’t truly “global” in the same sense as “console”, but instead global to each of your modules, which are located in separate .js files. For example, consider the two following files (modEx1.js: the main file that Node will execute, and message.js: the file containing the module):

**file ./modEx1.js**

```js
let message = require('./modules/message');

message.writeMessage('Hello World!');

message.readMessage();
```

**file: ./modules/message.js**

```js
// NOTE: Node.js wraps the contents of this file in a function:
// (function (exports, require, module, __filename, __dirname) { ... });
// so that we have access to the working file/directory names as well
// as creating an isolated scope for the module, so that our
// variables are not global.

let localFunction = () => {
  // a function local to this module
};

let localMessage = '';

module.exports.writeMessage = (msg) => {
  localMessage = msg;
};

module.exports.readMessage = () => {
  console.log(`${localMessage} from ${__filename}`);
};
```

Executing the code in modEx1.js (ie: **node modEx1.js**) should output:

**“Hello World” from …**

where … is the absolute location of the message.js file in your system, for example: **/Users/pat/Desktop/Seneca/modules/message.js**

Notice how our “message” module uses the [exports](https://nodejs.org/docs/latest/api/modules.html#moduleexports) property of the [“module”](https://nodejs.org/docs/latest/api/modules.html#the-module-object) object to store functions and data that we want to be accessible in the object returned from the require(“./modules/message”); function call from modEx1.js. Generally speaking, if you want to add anything to the object returned by “require” for your module, it’s added to the module.exports object from within your module. In this case, we only added two functions (readMessage() and writeMessage()).

Using this methodology, we can safely create reusable code in an isolated way that can easily be added (plugged in) to another .js file.

## NPM – Node Package Manager

The Node Package Manager is a core piece of the module based Node ecosystem. The package manager allows us to install and manage 3rd party modules, available from [https://www.npmjs.com](https://www.npmjs.com) within our own applications.

From the [npm documentation](https://docs.npmjs.com/about-npm):

> npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.
>
> npm consists of three distinct components:
>
> - the website
> - the Command Line Interface (CLI)
> - the registry
>
> Use the [website](https://npmjs.com/) to discover packages, set up profiles, and manage other aspects of your npm experience. For example, you can set up [organizations](https://www.npmjs.com/features) to manage access to public or private packages.
>
> The [CLI](https://docs.npmjs.com/cli/npm) runs from a terminal, and is how most developers interact with npm.
>
> The [registry](https://docs.npmjs.com/misc/registry) is a large public database of JavaScript software and the meta-information surrounding it.

The CLI is installed by default when you install Node. From the command line you can run ‘npm’ with various commands to download and remove packages for use with your Node applications. When you have installed a package from npm you use it in the same way as using your own modules like above, with the require() function.

All npm packages that you install locally for your application will be installed in a node_modules folder in your project folder.

While there are over 60 "npm" [commands available](https://docs.npmjs.com/cli/commands), the ones that we will most commonly use in this course are as follows:

| Command | Description |
|---------|-------------|
| [npm install [Module Name]](https://docs.npmjs.com/cli/v8/commands/npm-install) | install is used to install a package from the npm repository so that you can use it with your application. ie: `let express = require("express");` |
| [npm uninstall [module name]](https://docs.npmjs.com/cli/v8/commands/npm-uninstall) | uninstall does exactly what you would think, it uninstalls a module from the node_modules folder and your application will no longer be able to require() it. |
| [npm init](https://docs.npmjs.com/cli/v8/commands/npm-init) | create a new package.json file for a fresh application. More on this part later. |
| [npm prune](https://docs.npmjs.com/cli/v8/commands/npm-prune) | The prune command will look through your package.json file and remove any npm modules that are installed that are not required for your project. More on this part later. |
| [npm list](https://docs.npmjs.com/cli/v8/commands/npm-ls) | Show a list of all packages installed for use by this application. |

### Globally installing packages

Every so often, you will want to install a package globally. Installing a package globally means you will install it like an application on your computer which you can run from the command line, not use it in your application code. For example, some npm packages are tools that are used as part of your development process on your application:

One example is the [migrate package](https://www.npmjs.com/package/migrate) which allows you to write migration scripts for your application that can migrate your data in your database and keep track of which files have been run.

Another example is [grunt-cli](https://www.npmjs.com/package/grunt-cli) so that you can run grunt commands from the command line to do things like setup tasks for running unit tests or checking for formatting errors in code before pushing up new code to a repository.

A third example is [bower](https://www.npmjs.com/package/bower). Bower is a package manager similar to npm but typically used for client side package management. To install a package globally you just add the -g switch to your npm install command. For example:

```bash
npm install bower -g
```

Globally installed packages do not get installed in your node_modules folder and instead are installed in a folder in your user directory. The folder used for global packages varies for Windows, Mac, and Linux. See the documentation if you need to find globally installed packages on your machine.

### package.json explained

The Node Package Manager is great. It provides an easy way to download reusable packages or publish your own for other developers to use. However, there are a few problems with sharing modules and using other modules, once you want to work on an application with someone else. For example:

- How are you going to make sure everyone working on your project has all the packages the application requires?

- How are you going to make sure everyone has the **same version** of all those packages?

- Finally, how are you going to handle updating a package and making sure everyone else on your project updates as well?

This is where the package.json file comes in.

The package.json file is a listing of all the packages your application requires and also which versions are required. It provides a simple way for newcomers to your project to get started easily and stay up to date when packages get updated.

The [npm documentation for the package.json file](https://docs.npmjs.com/getting-started/using-a-package.json) has all the information you will need as you begin building applications in node.js

Let’s look at how we can generate a package.json file using the npm **init** command from within your project's folder (in this case: "/Users/pat/Desktop/Seneca/"):

```bash
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (seneca)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to /Users/pat/Desktop/Seneca/package.json:

{
  "name": "seneca",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

If you try running this command yourself, you will see that the process is _interactive_, ie: you will be prompted to enter everything from the "package name" to the "license". Any values that you see in brackets "()" are _default_ values and will be accepted if you press "Enter".

Once this process is done, you will see that you have a new file created in your project called **package.json**. In the above case, it will look like this:

```json
{
  "name": "seneca",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

Once generated, you can edit it if you decide to change the name or version (for example). Once you decide to add packages to your app you can simply install the package with **npm install**. This will save the package and version into the package.json file for you so that when others want to work on your app, they will have the package.json file and can use **npm install** to install all the required dependencies with the right version. Think of package.json as a checklist for your application for all of its dependencies.
