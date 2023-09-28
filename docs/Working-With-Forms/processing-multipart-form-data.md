---
id: processing-multipart-form-data
title: Processing Multipart Form Data
sidebar_position: 3
description: Processing Multipart Form Data
---

# Processing Multipart Form Data

If an HTML &lt;form&gt; element requires **file uploads** as well as regular form data, then we can no longer use the default "enctype" value `application/x-www-form-urlencoded`. Instead, we must use the aforementioned `multipart/form-data`. For example, consider the following form using input [type="file"](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file) as well as a simple text input:

```html
<form method="post" action="/uploadEntry" enctype="multipart/form-data">
  <label>
    File Description<br />
    <input type="text" name="fileDescription" />
  </label>
  <br /><br />

  <label>
    Avatar Image<br />
    <input type="file" name="avatar" />
  </label>
  <br /><br />

  <button type="submit">Upload Image</button>
</form>
```

In the above code, we have modified the "action" to submit to a new route "/uploadEntry" as well as modified the enctype to use "multipart/form-data".

## Processing the Data with Middleware

Recall, when working with url-encoded data, we had to use ["Middleware"](Advanced-Routing-Middleware/middleware.md) (specifically the built-in middleware: [express.urlencoded()](Advanced-Routing-Middleware/middleware.md#expressurlencoded)) to process the data and deliver it in a format that we can process. This is also the case for "multipart/form-data", however there are no available built-in middleware functions that we can use. Instead, we will use the popular third-party middleware: ["Multer"](https://www.npmjs.com/package/multer)

> Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of [busboy](https://github.com/mscdex/busboy) for maximum efficiency.
>
> **NOTE:** Multer will not process any form which is not multipart (multipart/form-data).

To get started using Multer, we will need to install it:

```bash
npm install multer
```

Next, we must _require_ the module and configure the middleware, ie:

```js
const multer = require('multer');
```

### Default (Simple) configuration

To begin, we will use the default configuration for Multer. All that is required is a "dest" property that defines where the files will go once uploaded. In this case, we will use the folder "uploads/":

```js
const upload = multer({ dest: 'uploads/' });
```

## Writing The Route Handler

With our middleware in place, we can now write our route handler for the route defined in our "action" attribute: "/uploadEntry". When using Multer, we not only have access to the "req.body" property to get the data submitted in the form, but also a "req.file" property to get information about the uploaded file:

```js
app.post('/uploadEntry', upload.single('avatar'), (req, res) => {
  res.send({ body: req.body, file: req.file });
});
```

Notice how we apply the middleware on the specific route, rather than using "app.use()". Additionally, since we're uploading a single image, we invoke the "single" method, passing the "name" attribute for our `<input type="file">` (ie: "avatar").

If we try submitting the form again, we should see a result in the browser with both the form and file upload information (ie: "req.body" & "req.file").

While this does indeed work and the file is uploaded to the correct destination (the "uploads" folder, as specified), we do not have any control over how the file is _named_. Additionally, we lose the file extension associated with the file. To gain more control over the file upload, we will need to perform some additional configuration.

## Additional Configuration (diskStorage)

In order to customize the filename of the upload, we will need to use the ["diskStorage"](http://expressjs.com/en/resources/middleware/multer.html) option when we configure our "upload" middleware. Here, instead of creating "upload" using `multer({ dest: 'uploads/' });`, we will use the following "diskStorage" configuration:

```js
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });
```

Here, we specify the filename to be a current date, using ["Date.now()"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now), ie:

> The number of milliseconds elapsed since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.

We also retain the current extension using [path.extname()](https://nodejs.org/docs/latest/api/path.html#pathextnamepath) from the **"path"** module: `const path = require("path");`

## Ephemeral / Read-Only File Systems

As a final note, it's important to consider that many cloud-based hosting providers either have an "ephemeral" file system (ie: data is not persisted across deploys and restarts) or the file system is read-only. In this case, if we wish to persist file uploads, we could use a library like ["streamifier"](https://www.npmjs.com/package/streamifier) to create a readable stream of the file data, rather than store it. We could then pass the data to a free service like ["Cloudinary"](https://cloudinary.com/) to host the file.

> For more information, see the Cloudinary documentation on [Uploading assets](https://cloudinary.com/documentation/upload_images) / [Upload data stream](https://cloudinary.com/documentation/upload_images#upload_data_stream)
