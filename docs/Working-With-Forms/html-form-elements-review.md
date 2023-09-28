---
id: html-form-elements-review
title: HTML Form Elements Review
sidebar_position: 1
description: HTML Form Elements Review
---

# HTML Form Elements Review

Before we begin to implement form submission logic in our server code, let's first do a quick review of the main form elements, including:

## Form

The [form](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) element serves as the primary container for housing your form, including user inputs and the submit button. It has several attributes that control its behavior, with the most common ones being **'enctype'**, **'method'**, and **'action'**.

The enctype is the encoding type. If you are working with forms that have file uploads that accompany the form data, this value should be set to: ` multipart/form-data`, otherwise the default is `application/x-www-form-urlencoded`. The 'method' specifies which HTTP verb to use when making the submission request (ie: "GET: or "POST"). Finally, the 'action' attribute is the URL / route that the form will send the request to once it has been _submitted_.

```html
<form method="post" enctype="application/x-www-form-urlencoded" action="https://httpbin.org/post">
  <!-- ... -->
</form>
```

> **NOTE:** in the above example, "enctype" may be **omitted** since "application/x-www-form-urlencoded" is the default value for "enctype"

## Input

The [input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) element creates a single-line text box by default (ie: the default value for the **'type'** attribute is `text`):

```html
<input type="text" name="fullName" />
```

> **NOTE:** We _must_ ensure that every form control includes a "name" field, which will be used to identify the form value, when submitted.

There are also a multitude of additional _interactive_ [input 'types'](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types) that may be used, such as:

- **color:** Elements of [type="color"](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color) provide a user interface element that lets a user specify a color, either by using a visual color picker interface or by entering the color into a text field in #rrggbb hexadecimal format.

- **date:** Elements of [type="date"](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date) create input fields that let the user enter a date, either with a textbox that validates the input or a special date picker interface.

- **time:** Elements of [type="time"](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time) create input fields designed to let the user easily enter a time (hours and minutes, and optionally seconds).

- **email:** Elements of [type="email"](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email) are used to let the user enter and edit an email address, or, if the multiple attribute is specified, a list of email addresses.

- **number:** Elements of [type="number"](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number) are used to let the user enter a number. They include built-in validation to reject non-numerical entries.

- **range:** Elements of [type="range"](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range) let the user specify a numeric value which must be no less than a given value, and no more than another given value. The precise value, however, is not considered important. This is typically represented using a slider or dial control rather than a text entry box like the number input type.

- **file:** Elements of [type="file"](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file) let the user choose one or more files from their device storage. Once chosen, the files can be uploaded to a server using form submission, or manipulated using JavaScript code and the File API.

## Textarea

The [textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) element is much like an `<input type='text'>` input, except it allows multiple lines of text. Essentially, it is a text box that has space to add a larger quantity of text, instead of just a single line of text. The textarea is useful for capturing user input that would typically be long and detailed or several sentences long.

```html
<textarea name="blogEntry"></textarea>
```

## Select

The [select](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) element serves as a "dropdown list" of [option](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option) elements for users to choose from. Used without any attributes, it behaves exactly like a dropdown list and only permits the user to select 1 (one) "option". With the addition of the ["multiple"](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/multiple) attribute, we can allow the user to select more than one option. We can also specify a ["size"](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/size) attribute, to show more than a single option at a time - this will work for both `<select>` and `<select multiple>` elements. When submitted, the value is the text in the "value" attribute for the selected option. When multiple options are selected, an array of "value" attributes are submitted, ie: `["car", "bus"]`.

```html
<select name="pet">
  <option value="">-- Please choose an option --</option>
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
</select>

<select multiple name="transportation">
  <option value="car">Car</option>
  <option value="motorcycle">Motorcycle</option>
  <option value="bus">Bus</option>
  <option value="jet">Private Jet</option>
</select>
```

## Checkbox

The [checkbox](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox) is actually another "type" of [input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) element. These are rendered as boxes that when clicked, become marked as "checked" and are rendered with a check mark. When submitted, the values are either "on" (for checked), or _undefined_ if left unchecked.

```html
<input type="checkbox" name="active" /> Active
```

## Radio Button

The [radio button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio) is similar to "checkbox" in that it is also a "type" of input. However, radio buttons are used when you wish to present a list of options for the user. When grouped together by using the same "name" attribute, they are "mutually-exclusive" (ie: checking one radio button in the group, will automatically deselect the previously checked radio button). When submitted, the value sent is the text in the "value" attribute for the checked radio button.

```html
<input type="radio" name="fastFood" value="hamburger" /> Hamburger <br />
<input type="radio" name="fastFood" value="pizza" /> Pizza <br />
<input type="radio" name="fastFood" value="sandwich" /> Sandwich <br />
```

## Label

The [label](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) element is used to provide a label for a form control. You can use the label's 'for' attribute to make the label clickable to focus its associated input (identified by a unique "id"). Alternatively, you can wrap the label text and form control inside a parent "label" element. This adds a nice touch of usability to forms and can make it easier to focus on / interact with areas associated with a label.

```html
<label for="fullName">Full Name</label><br />
<input type="text" name="fullName" id="fullName" />

<label><input type="checkbox" name="active" /> Active</label>
```

## Hidden

The [hidden](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/hidden) input type is used to include data that cannot be _seen_ or _modified_ by users when a form is submitted. For example, "the ID of the content that is currently being ordered or edited, or a unique security token".

```html
<input type="hidden" name="productID" value="193774" />
```

## Submit

Every form element should contain a "submit" button that will start the process of submitting the form. This typically includes generating an HTTP request using the method identified in the "method" attribute, and sending it to the destination in the "action" attribute. The encoding of the data in the request is controlled by the "enctype" attribute.

A submit button can be created by either using a [input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) element with [type="submit"](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/submit) or a [button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) with `type="submit"`.

```html
<input type="submit" value="Submit" />
<!-- or -->
<button type="submit">Submit</button>
```
