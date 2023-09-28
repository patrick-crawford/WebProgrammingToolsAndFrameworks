"use strict";(self.webpackChunkipc144=self.webpackChunkipc144||[]).push([[2708],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var r=n.createContext({}),d=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(r.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),u=i,h=p["".concat(r,".").concat(u)]||p[u]||m[u]||s;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,o=new Array(s);o[0]=u;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<s;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3811:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));a(8209);const s={id:"tailwind-css-daisyui",title:"Tailwind CSS & daisyUI",sidebar_position:2,description:"Tailwind CSS & daisyUI"},o="Tailwind CSS & daisyUI",l={unversionedId:"UI-Toolkits/tailwind-css-daisyui",id:"UI-Toolkits/tailwind-css-daisyui",title:"Tailwind CSS & daisyUI",description:"Tailwind CSS & daisyUI",source:"@site/docs/UI-Toolkits/tailwind-css-daisyui.md",sourceDirName:"UI-Toolkits",slug:"/UI-Toolkits/tailwind-css-daisyui",permalink:"/WebProgrammingToolsAndFrameworks/UI-Toolkits/tailwind-css-daisyui",draft:!1,editUrl:"https://github.com/patrick-crawford/WebProgrammingToolsAndFrameworks/tree/master/docs/UI-Toolkits/tailwind-css-daisyui.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"tailwind-css-daisyui",title:"Tailwind CSS & daisyUI",sidebar_position:2,description:"Tailwind CSS & daisyUI"},sidebar:"courseNotesSidebar",previous:{title:"What is a UI Toolkit / Framework?",permalink:"/WebProgrammingToolsAndFrameworks/UI-Toolkits/what-is-a-ui-toolkit-framework"},next:{title:"Example Code",permalink:"/WebProgrammingToolsAndFrameworks/UI-Toolkits/example-code"}},r={},d=[{value:"Setting up Tailwind CSS",id:"setting-up-tailwind-css",level:2},{value:"Configure Tailwind CSS",id:"configure-tailwind-css",level:3},{value:"&quot;Build&quot; main.css",id:"build-maincss",level:3},{value:"Introducing daisyUI",id:"introducing-daisyui",level:2},{value:"Installing",id:"installing",level:3},{value:"Theming",id:"theming",level:3},{value:"Components",id:"components",level:3},{value:"Navbar",id:"navbar",level:4},{value:"Grid System",id:"grid-system",level:4},{value:"Cards",id:"cards",level:4},{value:"Tables",id:"tables",level:4},{value:"Forms",id:"forms",level:4}],c={toc:d},p="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tailwind-css--daisyui"},"Tailwind CSS & daisyUI"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/"},"Tailwind CSS"),' is another popular CSS framework that we may choose to use with our projects. It is defined as a "utility-first CSS framework packed with classes like ',(0,i.kt)("strong",{parentName:"p"},"flex"),", ",(0,i.kt)("strong",{parentName:"p"},"pt-4"),", ",(0,i.kt)("strong",{parentName:"p"},"text-center")," and ",(0,i.kt)("strong",{parentName:"p"},"rotate-90"),' that can be composed to build any design, directly in your markup."'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'"Utility classes help you work within the constraints of a system instead of littering your stylesheets with arbitrary values. They make it easy to be consistent with color choices, spacing, typography, shadows, and everything else that makes up a well-engineered design system."')),(0,i.kt)("p",null,"Essentially, Tailwind CSS provides an ",(0,i.kt)("strong",{parentName:"p"},"extensive")," set of CSS classes that can be used together to create specific designs by adding them to elements in your HTML (Markup), without writing any CSS. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="w-[150px] h-[80px] shadow-2xl bg-white rounded-lg flex justify-center items-center">\n  <p class="text-center">shadow-2xl</p>\n</div>\n')),(0,i.kt)("p",null,"Creates a block that is 150px ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/width#fixed-widths"},"wide")," by 80px ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/height"},"tall")," with a large ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/box-shadow#adding-an-outer-shadow"},"outer shadow"),", a white ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/background-color"},"background color")," and large ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/border-radius#rounded-corners"},"rounded corners"),". It also uses flexbox (",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/flex"},"flex"),") to center the items ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/justify-content#center"},"horizontally")," and ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/align-items#center"},"vertically"),". The inner paragraph is also aligned in the ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/text-align#setting-the-text-alignment"},"center"),"."),(0,i.kt)("p",null,'This is certainly a different approach to the previous CSS frameworks that we have seen. It adds a lot of extra markup to your "view" (".html") files and can be difficult to maintain and read. However, it does add a lot of flexibility and consistency to the user interface design without writing any CSS code yourself.'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"NOTE:")," To reduce repeating ourselves when using Tailwind, We can use the ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/reusing-styles#extracting-classes-with-apply"},'"@apply" directive')," to extract repeated utility patterns to custom CSS classes"),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-css"},".small-card-container {\n  @apply w-[150px] h-[80px] shadow-2xl bg-white rounded-lg flex justify-center items-center;\n}\n"))),(0,i.kt)("p",null,'If we are able to use this alongside some kind of "component library" that also adds expertly designed, pre-built user interface elements (such as Bootstrap\'s "btn"), it would be much quicker (and cleaner) for us to adopt in our projects. Fortunately, Tailwind has the notion of ',(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/plugins"},'"plugins"'),' which allow us to "register new styles for Tailwind" (this is where daisyUI comes in).'),(0,i.kt)("h2",{id:"setting-up-tailwind-css"},"Setting up Tailwind CSS"),(0,i.kt)("p",null,"To begin using Tailwind, we will once again create a ",(0,i.kt)("a",{parentName:"p",href:"/Web-Server-Introduction/simple-web-server-using-expressjs"},"simple web server using Express"),', making sure that there is at least one route and a "public" static folder has been configured.'),(0,i.kt)("p",null,'Once this is complete, run the following command to install the "tailwindcss" command as a "devDependency":'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -D tailwindcss\n")),(0,i.kt)("p",null,'Next, we must "initialize" Tailwind and create a "tailwind.config.js" file by using the command:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx tailwindcss init\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"NOTE:")," The ",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/commands/npx"},'"npx" command')," allows us to run a command from a local or remote npm package.")),(0,i.kt)("p",null,'With Tailwind CSS correctly installed, we must create a primary css file as our starting point to include the "layers" of Tailwind CSS. To do this, crate a "tailwind.css" file within "/public/css" (ie: ',(0,i.kt)("inlineCode",{parentName:"p"},"/public/css/tailwind.css"),") with the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"@tailwind base;\n@tailwind components;\n@tailwind utilities;\n")),(0,i.kt)("h3",{id:"configure-tailwind-css"},"Configure Tailwind CSS"),(0,i.kt)("p",null,'The next step is to let Tailwind know where to find our "view" (".html") files. The reason for this is because Tailwind\'s "build" step (configured below) scans our "view" files and creates a custom CSS file containing ',(0,i.kt)("em",{parentName:"p"},"only")," the required CSS from Tailwind. This can be accomplished by adding ",(0,i.kt)("inlineCode",{parentName:"p"},"./views/*.html"),' to the "content" array within the "tailwind.config.js" file:'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"File: tailwind.config.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  content: [`./views/*.html`], // all .html files\n  // ...\n};\n")),(0,i.kt)("h3",{id:"build-maincss"},'"Build" main.css'),(0,i.kt)("p",null,'For the next step (as we did with "SASS"), we must add a "build" command to the "scripts" section of our package.json file:'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"File: package.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "tw:build": "tailwindcss build ./public/css/tailwind.css -o ./public/css/main.css"\n}\n')),(0,i.kt)("p",null,'To test this out, add the following import statement and HTML to one of your "view" (."html") files:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<link rel="stylesheet" href="/css/main.css" />\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="w-[150px] h-[80px] shadow-2xl bg-white rounded-lg flex justify-center items-center">\n  <p class="text-center">shadow-2xl</p>\n</div>\n')),(0,i.kt)("p",null,'Finally, "build" the "main.css" file by executing the command in the Integrated Terminal:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run tw:build\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Congratulations!"),' You have crated a new main.css file with all of the required Tailwind CSS classes for your view, including "shadow-2xl", "bg-white", etc. Now, every time you decide to update any of your "view" files or "tailwind.css", you can re-run the ',(0,i.kt)("inlineCode",{parentName:"p"},"npm run tw:build")," command to re-generate your optimized main.css file."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"NOTE:")," Tailwind CSS Recommends the Visual Studio Extension ",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"},'"Tailwind CSS IntelliSense"'),", which has features such as:"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Autocomplete:")," Intelligent suggestions for class names, as well as CSS functions and directives"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Linting:")," Highlights errors and potential bugs in both your CSS and your markup"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Hover Preview:")," See the complete CSS for a Tailwind class name by hovering over it"))),(0,i.kt)("h2",{id:"introducing-daisyui"},"Introducing daisyUI"),(0,i.kt)("p",null,"As mentioned above, ",(0,i.kt)("a",{parentName:"p",href:"https://daisyui.com/"},"daisyUI"),' is a "plugin" for Tailwind CSS. It adds UI components while still providing the full flexibility of Tailwind\'s utility classes:'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'"',"[daisyUI is]",' the most popular component library for Tailwind CSS"'),(0,i.kt)("p",{parentName:"blockquote"},'"daisyUI adds component class names to Tailwind CSS so you can make beautiful websites faster than ever".'),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://daisyui.com"},"https://daisyui.com"))),(0,i.kt)("p",null,"This sounds like the perfect compromise - we get beautifully styled UI components while still having the freedom to use the extensive set of Tailwind's utility classes to configure them and design new components."),(0,i.kt)("h3",{id:"installing"},"Installing"),(0,i.kt)("p",null,'To get started using daisyUI, the first thing that we need to do is "install" the required packages using NPM:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @tailwindcss/typography daisyui\n")),(0,i.kt)("p",null,'Once this is complete, the next step is to register them as "plugins" in the "tailwind.config.js" file:'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"File: tailwind.config.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  // ...\n  plugins: [require('@tailwindcss/typography'), require('daisyui')],\n};\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"NOTE:"),' The "@tailwindcss/typography" plugin is ',(0,i.kt)("a",{parentName:"p",href:"https://daisyui.com/docs/layout-and-typography/#-1"},"recommended by daisyUI")," and is ",(0,i.kt)("strong",{parentName:"p"},"required")," if we wish to see text such as headings and paragraphs ",(0,i.kt)("strong",{parentName:"p"},"correctly styled"),". To read more on this, including using the ",(0,i.kt)("strong",{parentName:"p"},'"prose"'),' class ("that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document"), see the following link to the documentation:'),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://daisyui.com/docs/layout-and-typography"},"https://daisyui.com/docs/layout-and-typography"))),(0,i.kt)("p",null,"This should be all that is required to register daisyUI with Tailwind CSS. To verify that it did indeed work, try adding a component from daisyUI to one of your .html files using main.css. The simplest example is a ",(0,i.kt)("a",{parentName:"p",href:"https://daisyui.com/components/button"},"button"),' - we\'ll use the "primary" variation:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<button class="btn btn-primary">Button</button>\n')),(0,i.kt)("p",null,'To test if this worked, all that is needed is to execute another "build" of tailwind, using the previously-configured "tw:build" command:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run tw:build\n")),(0,i.kt)("p",null,'You should now see ".btn" and ".btn-primary" classes added to your main.css, as well as a working purple button in your view!'),(0,i.kt)("h3",{id:"theming"},"Theming"),(0,i.kt)("p",null,'Before we discuss some of the important design patterns and components available from daisyUI, let\'s quickly discuss how we can modify the "theme" that is used when rendering our components:'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'"daisyUI comes with a number of themes, which you can use with no extra effort. Each theme defines a set of colors which will be used on all daisyUI elements"')),(0,i.kt)("p",null,"At it's core the various ",(0,i.kt)("a",{parentName:"p",href:"https://daisyui.com/docs/themes"},'"themes"'),' that daisyUI provides are alternate color schemes and variations on the roundness of corners, thickness and length of shadows, etc. for the provided components. Recall from our "btn-primary" example above: a purple button was rendered on the screen (since this is the default "primary" color). If we were to use one of the built in themes such as "cupcake", the "primary" color would be a dark cyan and the button would have more rounded edges.'),(0,i.kt)("p",null,"To change the theme used by daisyUI, all that is required is that a named theme from the ",(0,i.kt)("a",{parentName:"p",href:"https://daisyui.com/docs/themes/"},"list of themes"),' be listed in a "themes" property for "daisyui" in tailwind.config.js. For example, if we wish to use the aforementioned "cupcake" theme, we could update our tailwind.config.js files as follows:'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"File: tailwind.config.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  // ...\n  daisyui: {\n    themes: ['cupcake'],\n  },\n};\n")),(0,i.kt)("h3",{id:"components"},"Components"),(0,i.kt)("p",null,"At the time of writing, DaisyUI ships with a total of 52 Components. The library is extremely extensive and the ",(0,i.kt)("a",{parentName:"p",href:"https://daisyui.com/docs"},"documentation")," is both very well written and ",(0,i.kt)("em",{parentName:"p"},"searchable"),". If you plan on working with Tailwind CSS, daisyUI is an excellent addition that can greatly speed up your development time and make your apps look professional without having to do any additional design work."),(0,i.kt)("p",null,"The following is a list of a few ",(0,i.kt)("em",{parentName:"p"},"key")," components that are used in most web applications, along with the (.html) code to include them in your views. For additional components and patterns, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://daisyui.com/docs"},"official documentation"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"NOTE:"),' Do not forget to "build" your Tailwind CSS before testing newly added components / HTML to see the results.')),(0,i.kt)("h4",{id:"navbar"},"Navbar"),(0,i.kt)("p",null,"The first component that we will discuss is the ",(0,i.kt)("a",{parentName:"p",href:"https://daisyui.com/components/navbar"},'"Navbar"'),'. The navbar (short for "navigation bar") provides a consistent, user friendly and ',(0,i.kt)("em",{parentName:"p"},"widely recognized")," way to navigate through a web site / app. To begin using daisyUI's implementation, add the following HTML:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="navbar bg-base-100">\n  <div class="flex-1">\n    <a class="btn btn-ghost normal-case text-xl">daisyUI</a>\n  </div>\n\n  <div class="navbar-center flex">\n    <ul class="menu menu-horizontal px-1">\n      <li><a>Link</a></li>\n      <li>\n        <details>\n          <summary>Parent</summary>\n          <ul class="p-2 bg-base-100 right-0">\n            <li><a>Link 1</a></li>\n            <li><a>Link 2</a></li>\n          </ul>\n        </details>\n      </li>\n    </ul>\n  </div>\n</div>\n')),(0,i.kt)("p",null,'This is a very simple navigation bar using boilerplate code from the documentation. It shows a "daisyUI" logo / link on the left hand side and two navigation links (including a "dropdown" menu). To add new items, we simply modify the unordered list. Features such as ',(0,i.kt)("a",{parentName:"p",href:"https://daisyui.com/components/navbar/#navbar-with-search-input-and-dropdown"},'"Search Input"')," and ",(0,i.kt)("a",{parentName:"p",href:"https://daisyui.com/components/navbar/#navbar-with-icon-indicator-and-dropdown"},'"Icons with indicators"')," are also supported."),(0,i.kt)("p",null,'The only issue here is that the menu is not "responsive" (ie: it does not collapse to accommodate smaller devices). To remedy this, we should make the navbar ',(0,i.kt)("em",{parentName:"p"},"only visible")," if the viewport is a certain width or ",(0,i.kt)("em",{parentName:"p"},"larger"),". If the viewport is smaller than the breakpoint (minimum width), then an alternate navbar should be shown, featuring an icon indicating that the user can click to view the menu items."),(0,i.kt)("p",null,"To modify the above boilerplate code to make it responsive, we must first change:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="navbar-center flex"></div>\n')),(0,i.kt)("p",null,"to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="navbar-center hidden sm:flex"></div>\n')),(0,i.kt)("p",null,'Next, add the "responsive" version of the navigation bar ',(0,i.kt)("em",{parentName:"p"},"above"),' the recently-modified "navbar-center" ',"<","div",">","...","<","/div",">",", making sure to include the same links / menu items:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="dropdown">\n  <label tabindex="0" class="btn btn-ghost sm:hidden">\n    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>\n  </label>\n  <ul tabindex="0" class="menu menu-sm dropdown-content right-0 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">\n    <li><a>Link</a></li>\n    <li>\n      <details>\n        <summary>\n          Parent\n        </summary>\n        <ul class="p-2 bg-base-100">\n          <li><a>Link 1</a></li>\n          <li><a>Link 2</a></li>\n        </ul>\n      </details>\n    </li>\n  </ul>\n</div>\n')),(0,i.kt)("p",null,'This should provide a navigation bar that appears normal if the viewport is larger than the "sm" size (640px), and compressed (ie: converted to a drop-down menu with an appropriate icon) when the viewport is smaller.'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"NOTE:")," There is currently an issue where dropdowns do not close when clicking away on some mobile devices (iPhone / IOS) - see: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/saadeghi/daisyui/issues/824"},'"Dropdown not closing when clicking outside on mobile #824"'),". At the time of writing, the fix involves setting a negative ",(0,i.kt)("inlineCode",{parentName:"p"},"tabindex")," on the ",(0,i.kt)("inlineCode",{parentName:"p"},"<body>")," element, ie: ",(0,i.kt)("inlineCode",{parentName:"p"},'<body tabIndex="-1">'),".")),(0,i.kt)("h4",{id:"grid-system"},"Grid System"),(0,i.kt)("p",null,'Another important feature of any design system is it\'s "grid" implementation. A grid system will let us place elements on the page that are spaced consistently and are resized / rearranged to accommodate multiple device sizes (ie: "responsive"). Interestingly, daisyUI does not provide it\'s own grid system, instead relying on Tailwind\'s excellent ',(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/grid-template-columns"},"implementation"),"."),(0,i.kt)("p",null,"To get started using the grid system, we will crate a responsive ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/grid-template-columns#specifying-the-columns-in-a-grid"},"grid")," that consists of 4 columns for the large size, 2 columns for the medium size, and 1 column for the small size."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="container mx-auto">\n  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">\n    <div class="border-2">01</div>\n    <div class="border-2">02</div>\n    <div class="border-2">03</div>\n    <div class="border-2">04</div>\n    <div class="border-2">05</div>\n  </div>\n</div>\n')),(0,i.kt)("p",null,"You will notice that the grid is also placed within a responsive ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/container"},'"container"'),", which ensures that the grid is given a correct width depending on the viewport size."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"NOTE:")," You can specify more that one grid in a container. For example, if you wished to have a large, single column grid above the other items (serving as a title block, etc), you could update the code to use:"),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="container mx-auto">\n  <div class="grid grid-cols-1 mb-4">\n    <div class="border-2">Title</div>\n  </div>\n  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">\n    <div class="border-2">01</div>\n    <div class="border-2">02</div>\n    <div class="border-2">03</div>\n    <div class="border-2">04</div>\n    <div class="border-2">05</div>\n  </div>\n</div>\n'))),(0,i.kt)("h4",{id:"cards"},"Cards"),(0,i.kt)("p",null,'A "Card" is basically a user interface element that serves as a "content container" for a specific item to be presented to the user (ie: a product from a store, or service offered, etc). Cards typically include elements such as an image, title, description, call to action, and often incorporate subheadings or icons.'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'"A card UI design is an entire interface based largely or exclusively on presenting the user content on cards. The logic behind this is to avoid long texts and render content more scannable. Even though users might not be familiar with the concept of a card from a design point of view \u2013 they instantly know how to use UI cards."'),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://www.justinmind.com/ui-design/cards"},"https://www.justinmind.com/ui-design/cards"))),(0,i.kt)("p",null,"Fortunately, daisyUI has a ",(0,i.kt)("a",{parentName:"p",href:"https://daisyui.com/components/card"},"card component")," that is ready to be incorporated into our designs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="card w-96 bg-base-100 shadow-xl">\n  <figure>\n    <img class="w-full" src="https://fakeimg.pl/375x375?text=[+SHOES+]" alt="Shoes" />\n  </figure>\n  <div class="card-body">\n    <h2 class="card-title">Shoes!</h2>\n    <p>If a dog chews shoes whose shoes does he choose?</p>\n    <div class="card-actions justify-end">\n      <button class="btn btn-primary">Buy Now</button>\n    </div>\n  </div>\n</div>\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"NOTE:"),' If you wish to position the card as a "grid" item, the "w-96" class can be removed and the entire "card" can be placed within the grid')),(0,i.kt)("p",null,"For other options, such as ",(0,i.kt)("a",{parentName:"p",href:"https://daisyui.com/components/card/#responsive-card-vertical-on-small-screen-horizontal-on-large-screen"},'"responsive"'),", ",(0,i.kt)("a",{parentName:"p",href:"https://daisyui.com/components/card/#card-glass"},'"glass"'),", ",(0,i.kt)("a",{parentName:"p",href:"https://daisyui.com/components/card/#card-with-custom-color"},'"custom colors"'),", etc. please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://www.justinmind.com/ui-design/cards"},"documentation"),"."),(0,i.kt)("h4",{id:"tables"},"Tables"),(0,i.kt)("p",null,'If your content is more "tabular" (ie: displayed using tables / columns), such as sports scores, results from an experiment, sales reports, etc. then it\'s best placed with a ',(0,i.kt)("a",{parentName:"p",href:"https://daisyui.com/components/table/"},'styled "table" element'),"."),(0,i.kt)("p",null,"To achieve this using daisyUI, the documentation recommends placing your table within a ",(0,i.kt)("inlineCode",{parentName:"p"},"<div>")," element with class ",(0,i.kt)("inlineCode",{parentName:"p"},"overflow-x-auto"),". Additionally, the ",(0,i.kt)("inlineCode",{parentName:"p"},"<table>")," element itself should have the class ",(0,i.kt)("inlineCode",{parentName:"p"},"table"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="overflow-x-auto">\n  <table class="table">\n    \x3c!-- ... --\x3e\n  </table>\n</div>\n')),(0,i.kt)("p",null,"For other options, such as ",(0,i.kt)("a",{parentName:"p",href:"https://daisyui.com/components/table/#zebra"},'"striped rows"'),", ",(0,i.kt)("a",{parentName:"p",href:"https://daisyui.com/components/table/#table-with-visual-elements"},'"visual elements"'),", ",(0,i.kt)("a",{parentName:"p",href:"https://daisyui.com/components/table/#table-xs"},'"compact tables"'),", etc. please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://daisyui.com/components/table"},"documentation"),"."),(0,i.kt)("h4",{id:"forms"},"Forms"),(0,i.kt)("p",null,"Finally, we should discuss how form elements are styled using Tailwind CSS / daisyUI. Generally, form controls are styled using a class that matches their type - for example, to style an ",(0,i.kt)("inlineCode",{parentName:"p"},"<input>"),' element the class "input" would be used. Similarly, to style a ',(0,i.kt)("inlineCode",{parentName:"p"},"<select>"),' element the "select" class would be used. This pattern extends to whether or not we wish to style the control with a border (ie, using the styles "input-bordered" and "select-bordered").'),(0,i.kt)("p",null,"The below HTML snippet captures the major form types: ",(0,i.kt)("a",{parentName:"p",href:"https://daisyui.com/components/input/"},'"input"'),", ",(0,i.kt)("a",{parentName:"p",href:"https://daisyui.com/components/textarea/"},'"textarea"'),", ",(0,i.kt)("a",{parentName:"p",href:"https://daisyui.com/components/select/"},'"select"'),", ",(0,i.kt)("a",{parentName:"p",href:"https://daisyui.com/components/radio/"},'"radio"')," and ",(0,i.kt)("a",{parentName:"p",href:"https://daisyui.com/components/checkbox/"},'"checkbox"')," within a responsive grid that is 3 columns wide."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<form>\n  <div class="container mx-auto">\n    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">\n      <div>\n        <label class="label"><span class="label-text">Name</span></label>\n        <input\n          class="input input-bordered w-full"\n          type="text"\n          id="name"\n          name="name"\n          placeholder="Enter your name"\n        />\n      </div>\n      <div>\n        <label class="label"><span class="label-text">Message</span></label>\n        <textarea\n          class="textarea textarea-bordered w-full"\n          id="message"\n          name="message"\n          placeholder="Enter your message"\n        ></textarea>\n      </div>\n      <div>\n        <label class="label"><span class="label-text">Fast Food</span></label>\n        <select class="select select-bordered w-full">\n          <option disabled selected>Fast Food</option>\n          <option>Pizza</option>\n          <option>Hamburger</option>\n        </select>\n      </div>\n      <div>\n        <label class="label cursor-pointer justify-normal">\n          <input type="radio" name="pets" class="radio" /> <span class="label-text px-2">Dogs</span>\n        </label>\n        <label class="label cursor-pointer justify-normal">\n          <input type="radio" name="pets" class="radio" checked />\n          <span class="label-text px-2">Cats</span>\n        </label>\n      </div>\n      <div>\n        <label class="label cursor-pointer justify-normal">\n          <input type="checkbox" name="active" class="checkbox" />\n          <span class="label-text px-2">Active</span>\n        </label>\n      </div>\n    </div>\n  </div>\n</form>\n')))}m.isMDXComponent=!0},8209:(e,t,a)=>{a(7294)}}]);