---
id: tailwind-css-daisyui
title: Tailwind CSS & daisyUI
sidebar_position: 2
description: Tailwind CSS & daisyUI
---

# Tailwind CSS & daisyUI

[Tailwind CSS](https://tailwindcss.com/) is another popular CSS framework that we may choose to use with our projects. It is defined as a "utility-first CSS framework packed with classes like **flex**, **pt-4**, **text-center** and **rotate-90** that can be composed to build any design, directly in your markup."

> "Utility classes help you work within the constraints of a system instead of littering your stylesheets with arbitrary values. They make it easy to be consistent with color choices, spacing, typography, shadows, and everything else that makes up a well-engineered design system."

Essentially, Tailwind CSS provides an **extensive** set of CSS classes that can be used together to create specific designs by adding them to elements in your HTML (Markup), without writing any CSS. For example:

```html
<div class="w-[150px] h-[80px] shadow-2xl bg-white rounded-lg flex justify-center items-center">
  <p class="text-center">shadow-2xl</p>
</div>
```

Creates a block that is 150px [wide](https://tailwindcss.com/docs/width#fixed-widths) by 80px [tall](https://tailwindcss.com/docs/height) with a large [outer shadow](https://tailwindcss.com/docs/box-shadow#adding-an-outer-shadow), a white [background color](https://tailwindcss.com/docs/background-color) and large [rounded corners](https://tailwindcss.com/docs/border-radius#rounded-corners). It also uses flexbox ([flex](https://tailwindcss.com/docs/flex)) to center the items [horizontally](https://tailwindcss.com/docs/justify-content#center) and [vertically](https://tailwindcss.com/docs/align-items#center). The inner paragraph is also aligned in the [center](https://tailwindcss.com/docs/text-align#setting-the-text-alignment).

This is certainly a different approach to the previous CSS frameworks that we have seen. It adds a lot of extra markup to your "view" (".html") files and can be difficult to maintain and read. However, it does add a lot of flexibility and consistency to the user interface design without writing any CSS code yourself.

> **NOTE:** To reduce repeating ourselves when using Tailwind, We can use the ["@apply" directive](https://tailwindcss.com/docs/reusing-styles#extracting-classes-with-apply) to extract repeated utility patterns to custom CSS classes
>
> ```css
> .small-card-container {
>   @apply w-[150px] h-[80px] shadow-2xl bg-white rounded-lg flex justify-center items-center;
> }
> ```

If we are able to use this alongside some kind of "component library" that also adds expertly designed, pre-built user interface elements (such as Bootstrap's "btn"), it would be much quicker (and cleaner) for us to adopt in our projects. Fortunately, Tailwind has the notion of ["plugins"](https://tailwindcss.com/docs/plugins) which allow us to "register new styles for Tailwind" (this is where daisyUI comes in).

## Setting up Tailwind CSS

To begin using Tailwind, we will once again create a [simple web server using Express](/Web-Server-Introduction/simple-web-server-using-expressjs), making sure that there is at least one route and a "public" static folder has been configured.

Once this is complete, run the following command to install the "tailwindcss" command as a "devDependency":

```bash
npm install -D tailwindcss
```

Next, we must "initialize" Tailwind and create a "tailwind.config.js" file by using the command:

```bash
npx tailwindcss init
```

> **NOTE:** The ["npx" command](https://docs.npmjs.com/cli/commands/npx) allows us to run a command from a local or remote npm package.

With Tailwind CSS correctly installed, we must create a primary css file as our starting point to include the "layers" of Tailwind CSS. To do this, crate a "tailwind.css" file within "/public/css" (ie: `/public/css/tailwind.css`) with the following code:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Configure Tailwind CSS

The next step is to let Tailwind know where to find our "view" (".html") files. The reason for this is because Tailwind's "build" step (configured below) scans our "view" files and creates a custom CSS file containing _only_ the required CSS from Tailwind. This can be accomplished by adding `./views/*.html` to the "content" array within the "tailwind.config.js" file:

**File: tailwind.config.js**

```js
module.exports = {
  content: [`./views/*.html`], // all .html files
  // ...
};
```

### "Build" main.css

For the next step (as we did with "SASS"), we must add a "build" command to the "scripts" section of our package.json file:

**File: package.json**

```json
"scripts": {
  "tw:build": "tailwindcss build ./public/css/tailwind.css -o ./public/css/main.css"
}
```

To test this out, add the following import statement and HTML to one of your "view" (."html") files:

```html
<link rel="stylesheet" href="/css/main.css" />
```

```html
<div class="w-[150px] h-[80px] shadow-2xl bg-white rounded-lg flex justify-center items-center">
  <p class="text-center">shadow-2xl</p>
</div>
```

Finally, "build" the "main.css" file by executing the command in the Integrated Terminal:

```bash
npm run tw:build
```

**Congratulations!** You have crated a new main.css file with all of the required Tailwind CSS classes for your view, including "shadow-2xl", "bg-white", etc. Now, every time you decide to update any of your "view" files or "tailwind.css", you can re-run the `npm run tw:build` command to re-generate your optimized main.css file.

> **NOTE:** Tailwind CSS Recommends the Visual Studio Extension ["Tailwind CSS IntelliSense"](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss), which has features such as:
>
> - **Autocomplete:** Intelligent suggestions for class names, as well as CSS functions and directives
> - **Linting:** Highlights errors and potential bugs in both your CSS and your markup
> - **Hover Preview:** See the complete CSS for a Tailwind class name by hovering over it

## Introducing daisyUI

As mentioned above, [daisyUI](https://daisyui.com/) is a "plugin" for Tailwind CSS. It adds UI components while still providing the full flexibility of Tailwind's utility classes:

> "[daisyUI is] the most popular component library for Tailwind CSS"
>
> "daisyUI adds component class names to Tailwind CSS so you can make beautiful websites faster than ever".
>
> [https://daisyui.com](https://daisyui.com)

This sounds like the perfect compromise - we get beautifully styled UI components while still having the freedom to use the extensive set of Tailwind's utility classes to configure them and design new components.

### Installing

To get started using daisyUI, the first thing that we need to do is "install" the required packages using NPM:

```bash
npm i @tailwindcss/typography daisyui
```

Once this is complete, the next step is to register them as "plugins" in the "tailwind.config.js" file:

**File: tailwind.config.js**

```js
module.exports = {
  // ...
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
```

> **NOTE:** The "@tailwindcss/typography" plugin is [recommended by daisyUI](https://daisyui.com/docs/layout-and-typography/#-1) and is **required** if we wish to see text such as headings and paragraphs **correctly styled**. To read more on this, including using the **"prose"** class ("that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document"), see the following link to the documentation:
>
> [https://daisyui.com/docs/layout-and-typography](https://daisyui.com/docs/layout-and-typography)

This should be all that is required to register daisyUI with Tailwind CSS. To verify that it did indeed work, try adding a component from daisyUI to one of your .html files using main.css. The simplest example is a [button](https://daisyui.com/components/button) - we'll use the "primary" variation:

```html
<button class="btn btn-primary">Button</button>
```

To test if this worked, all that is needed is to execute another "build" of tailwind, using the previously-configured "tw:build" command:

```bash
npm run tw:build
```

You should now see ".btn" and ".btn-primary" classes added to your main.css, as well as a working purple button in your view!

### Theming

Before we discuss some of the important design patterns and components available from daisyUI, let's quickly discuss how we can modify the "theme" that is used when rendering our components:

> "daisyUI comes with a number of themes, which you can use with no extra effort. Each theme defines a set of colors which will be used on all daisyUI elements"

At it's core the various ["themes"](https://daisyui.com/docs/themes) that daisyUI provides are alternate color schemes and variations on the roundness of corners, thickness and length of shadows, etc. for the provided components. Recall from our "btn-primary" example above: a purple button was rendered on the screen (since this is the default "primary" color). If we were to use one of the built in themes such as "cupcake", the "primary" color would be a dark cyan and the button would have more rounded edges.

To change the theme used by daisyUI, all that is required is that a named theme from the [list of themes](https://daisyui.com/docs/themes/) be listed in a "themes" property for "daisyui" in tailwind.config.js. For example, if we wish to use the aforementioned "cupcake" theme, we could update our tailwind.config.js files as follows:

**File: tailwind.config.js**

```js
module.exports = {
  // ...
  daisyui: {
    themes: ['cupcake'],
  },
};
```

### Components

At the time of writing, DaisyUI ships with a total of 52 Components. The library is extremely extensive and the [documentation](https://daisyui.com/docs) is both very well written and _searchable_. If you plan on working with Tailwind CSS, daisyUI is an excellent addition that can greatly speed up your development time and make your apps look professional without having to do any additional design work.

The following is a list of a few _key_ components that are used in most web applications, along with the (.html) code to include them in your views. For additional components and patterns, refer to the [official documentation](https://daisyui.com/docs).

> **NOTE:** Do not forget to "build" your Tailwind CSS before testing newly added components / HTML to see the results.

#### Navbar

The first component that we will discuss is the ["Navbar"](https://daisyui.com/components/navbar). The navbar (short for "navigation bar") provides a consistent, user friendly and _widely recognized_ way to navigate through a web site / app. To begin using daisyUI's implementation, add the following HTML:

```html
<div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>

  <div class="navbar-center flex">
    <ul class="menu menu-horizontal px-1">
      <li><a>Link</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul class="p-2 bg-base-100 right-0">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
```

This is a very simple navigation bar using boilerplate code from the documentation. It shows a "daisyUI" logo / link on the left hand side and two navigation links (including a "dropdown" menu). To add new items, we simply modify the unordered list. Features such as ["Search Input"](https://daisyui.com/components/navbar/#navbar-with-search-input-and-dropdown) and ["Icons with indicators"](https://daisyui.com/components/navbar/#navbar-with-icon-indicator-and-dropdown) are also supported.

The only issue here is that the menu is not "responsive" (ie: it does not collapse to accommodate smaller devices). To remedy this, we should make the navbar _only visible_ if the viewport is a certain width or _larger_. If the viewport is smaller than the breakpoint (minimum width), then an alternate navbar should be shown, featuring an icon indicating that the user can click to view the menu items.

To modify the above boilerplate code to make it responsive, we must first change:

```html
<div class="navbar-center flex"></div>
```

to:

```html
<div class="navbar-center hidden sm:flex"></div>
```

Next, add the "responsive" version of the navigation bar _above_ the recently-modified "navbar-center" &lt;div&gt;...&lt;/div&gt;, making sure to include the same links / menu items:

<!-- prettier-ignore-start -->
```html
<div class="dropdown">
  <label tabindex="0" class="btn btn-ghost sm:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
  </label>
  <ul tabindex="0" class="menu menu-sm dropdown-content right-0 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Link</a></li>
    <li>
      <details>
        <summary>
          Parent
        </summary>
        <ul class="p-2 bg-base-100">
          <li><a>Link 1</a></li>
          <li><a>Link 2</a></li>
        </ul>
      </details>
    </li>
  </ul>
</div>
```
<!-- prettier-ignore-end -->

This should provide a navigation bar that appears normal if the viewport is larger than the "sm" size (640px), and compressed (ie: converted to a drop-down menu with an appropriate icon) when the viewport is smaller.

> **NOTE:** There is currently an issue where dropdowns do not close when clicking away on some mobile devices (iPhone / IOS) - see: ["Dropdown not closing when clicking outside on mobile #824"](https://github.com/saadeghi/daisyui/issues/824). At the time of writing, the fix involves setting a negative `tabindex` on the `<body>` element, ie: `<body tabIndex="-1">`.

#### Grid System

Another important feature of any design system is it's "grid" implementation. A grid system will let us place elements on the page that are spaced consistently and are resized / rearranged to accommodate multiple device sizes (ie: "responsive"). Interestingly, daisyUI does not provide it's own grid system, instead relying on Tailwind's excellent [implementation](https://tailwindcss.com/docs/grid-template-columns).

To get started using the grid system, we will crate a responsive [grid](https://tailwindcss.com/docs/grid-template-columns#specifying-the-columns-in-a-grid) that consists of 4 columns for the large size, 2 columns for the medium size, and 1 column for the small size.

```html
<div class="container mx-auto">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <div class="border-2">01</div>
    <div class="border-2">02</div>
    <div class="border-2">03</div>
    <div class="border-2">04</div>
    <div class="border-2">05</div>
  </div>
</div>
```

You will notice that the grid is also placed within a responsive ["container"](https://tailwindcss.com/docs/container), which ensures that the grid is given a correct width depending on the viewport size.

> **NOTE:** You can specify more that one grid in a container. For example, if you wished to have a large, single column grid above the other items (serving as a title block, etc), you could update the code to use:
>
> ```html
> <div class="container mx-auto">
>   <div class="grid grid-cols-1 mb-4">
>     <div class="border-2">Title</div>
>   </div>
>   <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
>     <div class="border-2">01</div>
>     <div class="border-2">02</div>
>     <div class="border-2">03</div>
>     <div class="border-2">04</div>
>     <div class="border-2">05</div>
>   </div>
> </div>
> ```

#### Cards

A "Card" is basically a user interface element that serves as a "content container" for a specific item to be presented to the user (ie: a product from a store, or service offered, etc). Cards typically include elements such as an image, title, description, call to action, and often incorporate subheadings or icons.

> "A card UI design is an entire interface based largely or exclusively on presenting the user content on cards. The logic behind this is to avoid long texts and render content more scannable. Even though users might not be familiar with the concept of a card from a design point of view – they instantly know how to use UI cards."
>
> [https://www.justinmind.com/ui-design/cards](https://www.justinmind.com/ui-design/cards)

Fortunately, daisyUI has a [card component](https://daisyui.com/components/card) that is ready to be incorporated into our designs:

```html
<div class="card w-96 bg-base-100 shadow-xl">
  <figure>
    <img class="w-full" src="https://fakeimg.pl/375x375?text=[+SHOES+]" alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
```

> **NOTE:** If you wish to position the card as a "grid" item, the "w-96" class can be removed and the entire "card" can be placed within the grid

For other options, such as ["responsive"](https://daisyui.com/components/card/#responsive-card-vertical-on-small-screen-horizontal-on-large-screen), ["glass"](https://daisyui.com/components/card/#card-glass), ["custom colors"](https://daisyui.com/components/card/#card-with-custom-color), etc. please refer to the [documentation](https://www.justinmind.com/ui-design/cards).

#### Tables

If your content is more "tabular" (ie: displayed using tables / columns), such as sports scores, results from an experiment, sales reports, etc. then it's best placed with a [styled "table" element](https://daisyui.com/components/table/).

To achieve this using daisyUI, the documentation recommends placing your table within a `<div>` element with class `overflow-x-auto`. Additionally, the `<table>` element itself should have the class `table`:

```html
<div class="overflow-x-auto">
  <table class="table">
    <!-- ... -->
  </table>
</div>
```

For other options, such as ["striped rows"](https://daisyui.com/components/table/#zebra), ["visual elements"](https://daisyui.com/components/table/#table-with-visual-elements), ["compact tables"](https://daisyui.com/components/table/#table-xs), etc. please refer to the [documentation](https://daisyui.com/components/table).

#### Forms

Finally, we should discuss how form elements are styled using Tailwind CSS / daisyUI. Generally, form controls are styled using a class that matches their type - for example, to style an `<input>` element the class "input" would be used. Similarly, to style a `<select>` element the "select" class would be used. This pattern extends to whether or not we wish to style the control with a border (ie, using the styles "input-bordered" and "select-bordered").

The below HTML snippet captures the major form types: ["input"](https://daisyui.com/components/input/), ["textarea"](https://daisyui.com/components/textarea/), ["select"](https://daisyui.com/components/select/), ["radio"](https://daisyui.com/components/radio/) and ["checkbox"](https://daisyui.com/components/checkbox/) within a responsive grid that is 3 columns wide.

```html
<form>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <label class="label"><span class="label-text">Name</span></label>
        <input
          class="input input-bordered w-full"
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label class="label"><span class="label-text">Message</span></label>
        <textarea
          class="textarea textarea-bordered w-full"
          id="message"
          name="message"
          placeholder="Enter your message"
        ></textarea>
      </div>
      <div>
        <label class="label"><span class="label-text">Fast Food</span></label>
        <select class="select select-bordered w-full">
          <option disabled selected>Fast Food</option>
          <option>Pizza</option>
          <option>Hamburger</option>
        </select>
      </div>
      <div>
        <label class="label cursor-pointer justify-normal">
          <input type="radio" name="pets" class="radio" /> <span class="label-text px-2">Dogs</span>
        </label>
        <label class="label cursor-pointer justify-normal">
          <input type="radio" name="pets" class="radio" checked />
          <span class="label-text px-2">Cats</span>
        </label>
      </div>
      <div>
        <label class="label cursor-pointer justify-normal">
          <input type="checkbox" name="active" class="checkbox" />
          <span class="label-text px-2">Active</span>
        </label>
      </div>
    </div>
  </div>
</form>
```
