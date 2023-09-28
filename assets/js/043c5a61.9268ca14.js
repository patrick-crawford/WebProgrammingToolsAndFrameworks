"use strict";(self.webpackChunkipc144=self.webpackChunkipc144||[]).push([[7366],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(o),h=a,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return o?r.createElement(m,n(n({ref:t},p),{},{components:o})):r.createElement(m,n({ref:t},p))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,n=new Array(i);n[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,n[1]=l;for(var s=2;s<i;s++)n[s]=o[s];return r.createElement.apply(null,n)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},2659:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=o(7462),a=(o(7294),o(3905));o(8209);const i={id:"cyclic-guide",title:"Cyclic Guide",sidebar_position:1,description:"Getting Started with Cyclic"},n="Getting Started with Cyclic",l={unversionedId:"Resources/cyclic-guide",id:"Resources/cyclic-guide",title:"Cyclic Guide",description:"Getting Started with Cyclic",source:"@site/docs/Resources/cyclic-guide.md",sourceDirName:"Resources",slug:"/Resources/cyclic-guide",permalink:"/WebProgrammingToolsAndFrameworks/Resources/cyclic-guide",draft:!1,editUrl:"https://github.com/patrick-crawford/WebProgrammingToolsAndFrameworks/tree/master/docs/Resources/cyclic-guide.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"cyclic-guide",title:"Cyclic Guide",sidebar_position:1,description:"Getting Started with Cyclic"},sidebar:"courseNotesSidebar",previous:{title:"Example Code",permalink:"/WebProgrammingToolsAndFrameworks/Security-Considerations/example-code"}},c={},s=[{value:"Required Software",id:"required-software",level:3},{value:"Pushing your code to Cyclic",id:"pushing-your-code-to-cyclic",level:3},{value:"Create a GitHub Repository",id:"create-a-github-repository",level:4},{value:"Connect the Local Git Repository to GitHub",id:"connect-the-local-git-repository-to-github",level:4},{value:"Connect the GitHub Repository to Cyclic",id:"connect-the-github-repository-to-cyclic",level:4},{value:"Make Changes and Push to GitHub",id:"make-changes-and-push-to-github",level:4},{value:"Alternative (Render)",id:"alternative-render",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started-with-cyclic"},"Getting Started with Cyclic"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Cyclic Logo",src:o(7042).Z,width:"600",height:"315"})),(0,a.kt)("p",null,"The main server environment that we will be using in this course is ",(0,a.kt)("a",{parentName:"p",href:"https://www.cyclic.sh/"},"Cyclic")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"CYCLIC IS SERVERLESS")),(0,a.kt)("p",{parentName:"blockquote"},"There are no servers, no containers, no images, no hours to count. Each app is deployed entirely on serverless cloud infrastructure."),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"No Sleep:")," Even with free tier. Apps do not have to sleep, wake up, spin up or recycle. All front-ends and back-ends are ready on-demand, immediately and at all times.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"No Overload:")," Containers make traffic a constant concern because resources are shared across concurrent requests."),(0,a.kt)("p",{parentName:"li"},"On Cyclic, serverless functions are allocated to each individual request on demand, making it possible for your apps to hyper scale."))),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"HYPER SCALE")),(0,a.kt)("p",{parentName:"blockquote"},"On Cyclic free tier, an individual 1GB RAM compute instance handles each separate http request. For a single request, this is about ~2x cpu/memory compared to popular container platforms. In a 10 concurrent request scenario, this comparison results in ~200x or 100GB RAM available system compute - on free tier!")),(0,a.kt)("p",null,"Essentially, Cyclic manages the hardware infrastructure and deployment tasks for our node.js applications in a remote environment. Apps deployed using Cyclic are built and deployed into AWS where a serverless app is pre-provisioned using ",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/cloudformation/"},"cloudformation"),"."),(0,a.kt)("p",null,"To get started, developers push their code to GitHub and Cyclic does the rest. Additionally, Cyclic provides a range of projects as starters. These can be used to get started quickly or can be used as reference implementations to see how a particular framework can be deployed effectively."),(0,a.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/iK3ael3pQw8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"The best thing - ",(0,a.kt)("strong",{parentName:"p"},"getting started is free!")," - This is where we come in:"),(0,a.kt)("h3",{id:"required-software"},"Required Software"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"By now, you should have ",(0,a.kt)("strong",{parentName:"p"},"Node.js")," (",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.dev/en/download/"},"available here"),") and ",(0,a.kt)("strong",{parentName:"p"},"Visual Studio Code")," (",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"available here"),"). However we will also need git")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To download git, proceed to ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"this download page")," and download git for your operating system.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Proceed to install git with the default settings. Once this is complete, you can verify that it is installed correctly by opening a command prompt / terminal and issuing the command ",(0,a.kt)("strong",{parentName:"p"},"git ","-","-","version"),". This should output something like: git version 2.37.2 ( ... ). If it does not output the installed version of git, then something is wrong and it is not installed correctly.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Lastly, for Cyclic to gain access to our code, we must eventually place it on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/"},"GitHub"),". Therefore, you must also have account on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/"},"GitHub")," before proceeding."))),(0,a.kt)("h3",{id:"pushing-your-code-to-cyclic"},"Pushing your code to Cyclic"),(0,a.kt)("p",null,"Once you have written and tested your server locally and you are ready to publish it, the next steps are to initialize a Git repository at the root of your project folder and push your code to GitHub:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'First, issue the following command from the integrated terminal at the "root" folder of your project: ',(0,a.kt)("strong",{parentName:"p"},"git init")," - this will initialize a local git repository in your helloworld folder.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Next, create a file called ",(0,a.kt)("strong",{parentName:"p"},".gitignore")," containing the text:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"node_modules\n")),(0,a.kt)("p",{parentName:"li"},"This will ensure that the node_modules folder does not get included in your local git repository")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Finally, click the "Source Control" icon in the left bar (it should have a blue dot next to it) and type ',(0,a.kt)("strong",{parentName:"p"},'"initial commit"'),' for the message in the "Message" box. Once this is done, click the checkmark above the message box to commit your changes.'),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"NOTE:"),' If, at this point, you receive the error: "Git: Failed to execute git", try executing the following commands in the integrated terminal:'),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'git config --global user.email "you@example.com"\ngit config --global user.name "Your Name"\n')),(0,a.kt)("p",{parentName:"li"},"Once this is complete, attempt to click the checkmark again to commit your changes."))),(0,a.kt)("h4",{id:"create-a-github-repository"},"Create a GitHub Repository"),(0,a.kt)("p",null,"For Cyclic to gain access to our code, we must place it on GitHub. Therefore, the next step in this process is creating a GitHub repository for your code:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Sign in to your GitHub account.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Find and click a "+" button on the Navigation Bar. Then, choose "New Repository" from the dropdown menu.'),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"New repository button screenshot",src:o(2506).Z,width:"219",height:"195"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Fill in the repository name text field with the name of your project. Also, please make sure that the "Private" option is selected:'),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"New repository page screenshot",src:o(5638).Z,width:"1448",height:"1064"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once you're happy with the settings, hit the ",(0,a.kt)("strong",{parentName:"p"},'"Create repository"')," button."))),(0,a.kt)("h4",{id:"connect-the-local-git-repository-to-github"},"Connect the Local Git Repository to GitHub"),(0,a.kt)("p",null,"Now that our GitHub repository is created, we can proceed to update it with our local copy:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'First, go to your newly-created GitHub repository and click the "copy" button in the "Quick Setup" block:'),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Quick setup page screenshot",src:o(1269).Z,width:"1588",height:"328"})),(0,a.kt)("p",{parentName:"li"},"This will copy the URL of your remote GitHub repository.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Next, go back to your Terminal again and add this remote URL by running the following command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"git remote add origin URL\n")))),(0,a.kt)("p",null,"where ",(0,a.kt)("strong",{parentName:"p"},"URL")," is the remote repository URL that you have copied in the previous step."),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'To confirm that "origin" was added correctly, run the command: ',(0,a.kt)("inlineCode",{parentName:"p"},"git remote -v"),". You should see something like this:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"origin git@github.com:patrick-crawford/helloworld.git (fetch)\norigin git@github.com:patrick-crawford/helloworld.git (push)\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Finally, you can push the code from your local repository to the remote one using the command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"git push origin master\n")),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Important Note:"),' If at this point, you see the error: "src refspec master does not match any" then "master" is not set as your default branch. Execute the command ',(0,a.kt)("inlineCode",{parentName:"p"},"git status"),' to determine which branch you\'re on (it may be "main") and push that instead, ie: ',(0,a.kt)("inlineCode",{parentName:"p"},"git push origin main"),", for example")))),(0,a.kt)("p",null,"You can verify that the code was pushed by going back to your Browser and opening your GitHub repository."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Repo screenshot",src:o(3469).Z,width:"1822",height:"976"})),(0,a.kt)("h4",{id:"connect-the-github-repository-to-cyclic"},"Connect the GitHub Repository to Cyclic"),(0,a.kt)("p",null,"With our code finally online, we can sign into Cyclic and give it access to our code. To proceed:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to ",(0,a.kt)("a",{parentName:"p",href:"https://www.cyclic.sh"},"https://www.cyclic.sh"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click the large ",(0,a.kt)("strong",{parentName:"p"},"Deploy Now"),' button beneath the "Full Stack Apps" header text.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Click the "Continue with GitHub" button to sign in using your GitHub account')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Once you have logged in, click the green "Deploy" button in the "Create a New App" section:'),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Cyclic Create a New App",src:o(4946).Z,width:"1524",height:"432"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'At the top of the page, switch to the "Link Your Own" tab and begin typing the name of the your private GitHub repository hosting your code (in this case "helloworld")'),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Cyclic Link GitHub",src:o(7726).Z,width:"1966",height:"746"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'You will see that the repository is not found (this is because it is \'private\') - proceed to click the "Add a private repo...". This will open a new window to configure GitHub for Cyclic. You can leave "all repositories" selected and click "Approve and install"'),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Cyclic Link GitHub",src:o(5369).Z,width:"1354",height:"808"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Select your newly added repository from the list and click the "Connect" button')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Confirm access to the repository by once again entering your GitHub password")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Your code will now take a moment to build. Once it's complete, you should see some confetti and the text ",(0,a.kt)("strong",{parentName:"p"},'"You\'re Live!"'),' beneath the build log. From here you can an click the "Go to Dashboard" button to see information about your deployed app, including the generated link to view it live!'))),(0,a.kt)("h4",{id:"make-changes-and-push-to-github"},"Make Changes and Push to GitHub"),(0,a.kt)("p",null,"Finally, our code is linked to Cyclic via. GitHub!"),(0,a.kt)("p",null,'You should now be able to make any changes you wish and trigger a redeploy of your server on Cyclic by simply making changes locally, checking in your code using git and "pushing" it to GitHub, using the above instructions.'),(0,a.kt)("p",null,"Good luck and ",(0,a.kt)("strong",{parentName:"p"},"Happy Coding!")),(0,a.kt)("h2",{id:"alternative-render"},"Alternative (Render)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://render.com/"},"Render"),", like Cyclic, has a free tier that is available without a credit card or separate account (you can use GitHub to sign in):"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'"It\u2019s easy to deploy a Web Service on Render. Link your GitHub or GitLab repository and click Create Web Service. Render automatically builds and deploys your service every time you push to your repository. Our platform has native support for Node.js, Python, Ruby, Elixir, Go, and Rust. If these don\u2019t work for you, we can also build and deploy anything with a Dockerfile."'),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://render.com/docs/web-services"},"https://render.com/docs/web-services"),".")),(0,a.kt)("p",null,"Unfortunately, the main drawback of using the free services of Render is that our deployments (web services) are ",(0,a.kt)("strong",{parentName:"p"},"spun down")," after 15 minutes of inactivity. This will cause a ",(0,a.kt)("strong",{parentName:"p"},"significant")," delay in the response of the first request after a period of inactivity while the instance spins up."),(0,a.kt)("p",null,"For more information see ",(0,a.kt)("a",{parentName:"p",href:"https://render.com/docs/free#free-web-services"},'the official documentation on "Free Web Services"'),"."),(0,a.kt)("p",null,"To get started using ",(0,a.kt)("a",{parentName:"p",href:"https://render.com/"},"Render"),", click the ",(0,a.kt)("strong",{parentName:"p"},'"GET STARTED FOR FREE"')," button on their main site. This will take you to a login page where you can use your GitHub account for authentication."),(0,a.kt)("p",null,"Once logged in, click the blue ",(0,a.kt)("strong",{parentName:"p"},'"New +"')," button in the top menu bar and choose ",(0,a.kt)("strong",{parentName:"p"},'"Web Service"'),'. This will take you to a page where you can choose your GitHub repository for deployment. If you do not see your repository in the "Connect a repository" section, Click "Configure account" under the "GitHub" heading in the right sidebar. This will allow us to grant "Render" permission to all of our repositories (essentially performing the same task that was necessary for Cyclic to access our repositories ).'),(0,a.kt)("p",null,'Once this is complete and you can see your repository in the list, click the corresponding "Connect" button. You will then be taken to a screen where you must provide:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A unique name for your web service"),(0,a.kt)("li",{parentName:"ul"},'A "start" command (this will typically be ',(0,a.kt)("strong",{parentName:"li"},'"node server.js"'),', ie: the same "start" command that you will find in your package.json file)')),(0,a.kt)("p",null,'Finally, ensure that the "Free" instance type is checked and click ',(0,a.kt)("strong",{parentName:"p"},'"Create Web Service"')," and wait for your code to build and deploy."))}d.isMDXComponent=!0},4946:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/cyclic-1-7bf006233c5c52170042f6d8a152d2c7.png"},7726:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/cyclic-2-dd2101ba29c5afc9bc20a7ffbc49d9b4.png"},5369:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/cyclic-3-51af02abed4297b46ed204fe3d810d5d.png"},7042:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/cyclic-logo-6128f5852c96c6e04f6c1358c2ed8f55.png"},2506:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/github-1-c2946345263a9ab0e00bc0025d4f7f31.png"},5638:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/github-2-e049acf2dc7610adf8f5215df89403b8.png"},1269:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/github-3-200a92c50690a99520a034295141bf1a.png"},3469:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/github-4-75612b6e33b17db4c9b3f6a0c5e78242.png"},8209:(e,t,o)=>{o(7294)}}]);