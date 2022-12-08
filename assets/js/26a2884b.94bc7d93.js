(self.webpackChunkdoctor_consultation_documentation=self.webpackChunkdoctor_consultation_documentation||[]).push([[254],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9793:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=n(2122),o=n(9756),i=(n(7294),n(3905)),r={sidebar_position:1,sidebar_label:"Getting Started"},l={unversionedId:"mobile-app-setup/getting-started",id:"mobile-app-setup/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"This guide will get you started with the setup of the application on your local machine.",source:"@site/docs/mobile-app-setup/getting-started.md",sourceDirName:"mobile-app-setup",slug:"/mobile-app-setup/getting-started",permalink:"/doctor_consultation_documentation/mobile-app-setup/getting-started",version:"current",sidebar_label:"Getting Started",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Getting Started"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/doctor_consultation_documentation/"},next:{title:"Firebase Setup",permalink:"/doctor_consultation_documentation/mobile-app-setup/firebase"}},p=[{value:"Install Flutter",id:"install-flutter",children:[{value:"Setup an editor",id:"setup-an-editor",children:[]},{value:"Flutter Doctor",id:"flutter-doctor",children:[]}]},{value:"Modify Doctor Consultation App",id:"modify-doctor-consultation-app",children:[{value:"Open app in Android Studio",id:"open-app-in-android-studio",children:[]},{value:"Get Flutter Packages",id:"get-flutter-packages",children:[]},{value:"Rename the package",id:"rename-the-package",children:[]}]}],s={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide will get you started with the setup of the application on your local machine."),(0,i.kt)("p",null,"Now that you have set up your server, it\u2019s time to set up the mobile application to consume the data from your website. This guide will help you to connect the application with your server."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please make sure that you follow the steps mentioned in this section very carefully. If you miss some steps it may lead to unwanted behavior or errors."))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"install-flutter"},"Install Flutter"),(0,i.kt)("p",null,"Before you can start testing your application, you will need to install ",(0,i.kt)("a",{parentName:"p",href:"https://docs.flutter.dev/development/tools/sdk/releases"},(0,i.kt)("strong",{parentName:"a"},"Flutter"))," on your machine."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please use the flutter version ",(0,i.kt)("strong",{parentName:"p"},"3.3.x")," to build the doctor consultation application."))),(0,i.kt)("p",null,"Setting up an Android Emulator or an iOS Simulator which will run your application on your local machine is part of the flutter installation."),(0,i.kt)("p",null,"After you've installed flutter then please follow the steps from the following link to setup your dev machine:\n",(0,i.kt)("a",{parentName:"p",href:"https://flutter.dev/docs/get-started/install"},"https://flutter.dev/docs/get-started/install")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please make sure that you follow each and every step that is mentioned in the flutter installation guide properly."))),(0,i.kt)("p",null,"Follow the installation steps based on your OS that you are using. You can skip setting up a real device and web setup in the flutter installation steps."),(0,i.kt)("h3",{id:"setup-an-editor"},"Setup an editor"),(0,i.kt)("p",null,"The recommended editor is ",(0,i.kt)("strong",{parentName:"p"},"Android Studio"),".\nFollow the guide from the link to setup an editor: ",(0,i.kt)("a",{parentName:"p",href:"https://flutter.dev/docs/get-started/editor"},"https://flutter.dev/docs/get-started/editor")),(0,i.kt)("h3",{id:"flutter-doctor"},"Flutter Doctor"),(0,i.kt)("p",null,"After you've followed through all the steps from the Flutter installation guide above, you need to check your installation for any issues that might cause some problem. You can do this by following the command below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"flutter doctor\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Expected Result"',title:'"Expected','Result"':!0},"\u276f flutter doctor\nDoctor summary (to see all details, run flutter doctor -v):\n[\u2713] Flutter (Channel stable, 3.3.0, on macOS 12.1 21C52 darwin-x64, locale en-GB)\n[\u2713] Android toolchain - develop for Android devices (Android SDK version 30.0.3)\n[\u2713] Xcode - develop for iOS and macOS (Xcode 13.4.1)\n[\u2713] Chrome - develop for the web\n[\u2713] Android Studio (version 2021.1)\n[\u2713] VS Code (version 1.74.0)\n[\u2713] Connected device (2 available)\n[\u2713] HTTP Host Availability\n\n\u2022 No issues found!\n")),(0,i.kt)("p",null,"Note that the summary above has all tick marks. If you see a cross (X) in-front of an option then follow the steps mentioned below that option to complete your installation. "),(0,i.kt)("p",null,"If you see ",(0,i.kt)("strong",{parentName:"p"},"[!]"," No Connected device (0 available)")," do not worry, you will open an iOS Simulator or an Android Emulator later in the setup process which will resolve this."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Now your development machine is setup. We will follow to the next steps of modifying Doctor Consultation for your unique values.")),(0,i.kt)("h2",{id:"modify-doctor-consultation-app"},"Modify Doctor Consultation App"),(0,i.kt)("p",null,"Once you installed Android Studio on your machine, you can start changing the required files for Doctor Consultation from android studio by following this guide."),(0,i.kt)("h3",{id:"open-app-in-android-studio"},"Open app in Android Studio"),(0,i.kt)("p",null,"To modify the required settings for your Doctor Consultation application, you need to open it in Android Studio. Follow the steps below to open the application in android studio."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open ",(0,i.kt)("strong",{parentName:"p"},"Android Studio")," on your machine.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the Welcome to Android Studio screen, click on ",(0,i.kt)("strong",{parentName:"p"},"Open an existing project")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Android Studio Setup",src:n(1898).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose the ",(0,i.kt)("strong",{parentName:"p"},"doctor_consultation")," directory and open it. It is located at download package --\x3e mobile-application --\x3e doctor_consultation. This will open the application source code in android studio.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open ",(0,i.kt)("strong",{parentName:"p"},"Terminal")," from the top menu bar in View --\x3e Tool Windows --\x3e Terminal. This will open a terminal in android studio. You will see it at the bottom."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Android Studio Setup",src:n(1278).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("strong",{parentName:"p"},"Terminal")," will be open at the bottom in the root folder of the application. You will need to perform all the terminal related actions from this root folder in the terminal."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Android Studio Setup",src:n(1240).Z})))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Now you are ready to make the necessary changes in the application files by following the guide below.")),(0,i.kt)("h3",{id:"get-flutter-packages"},"Get Flutter Packages"),(0,i.kt)("p",null,"In the terminal you opened in the previous step enter the following command and press ",(0,i.kt)("strong",{parentName:"p"},"enter"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"flutter pub get\n")),(0,i.kt)("p",null,"This will get the dependencies for the application."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Make sure that you are connected to the internet while performing this task"))),(0,i.kt)("h3",{id:"rename-the-package"},"Rename the package"),(0,i.kt)("p",null,"All the application published on the App Stores must have a unique ",(0,i.kt)("strong",{parentName:"p"},"Bundle Id")," and ",(0,i.kt)("strong",{parentName:"p"},"App Name"),". In this step you will change the application's display name and bundle Id."),(0,i.kt)("h5",{id:"bundle-id"},"Bundle Id"),(0,i.kt)("p",null,"It is a unique name given to every application which helps app stores to distinguish between different applications. A bundle Id is conventionally in the form of a reverse website url. Rename your app bundle Id only in this manner."),(0,i.kt)("p",null,"For example: ",(0,i.kt)("inlineCode",{parentName:"p"},'"com.aniketmalik.doctor_consultation"'),"."),(0,i.kt)("h5",{id:"app-name"},"App Name"),(0,i.kt)("p",null,"The name displayed on the mobile phone below the app icon. It can be any name like ",(0,i.kt)("inlineCode",{parentName:"p"},'"Doctor Consultation"'),"."),(0,i.kt)("p",null,"You need to change both of these before building and uploading your application to the app stores by following the steps below."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Run the following command")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"flutter pub global activate rename \n")),(0,i.kt)("p",null,"This will install the ",(0,i.kt)("inlineCode",{parentName:"p"},"rename")," package to use on your machine."),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Change for ",(0,i.kt)("strong",{parentName:"li"},"ANDROID"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'flutter pub global run rename --bundleId "com.example.android.app" --appname "App Name" --target android\n')),(0,i.kt)("p",null,"Replace the bundle Id ",(0,i.kt)("inlineCode",{parentName:"p"},"com.example.android.app")," with your own name in the same format. For example: ",(0,i.kt)("inlineCode",{parentName:"p"},"com.aniketmalik.applicationname")),(0,i.kt)("p",null,"Replace the app name ",(0,i.kt)("inlineCode",{parentName:"p"},"App Name")," with your own name in the same format. For example: ",(0,i.kt)("inlineCode",{parentName:"p"},"My Store"),"."),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Change for ",(0,i.kt)("strong",{parentName:"li"},"IOS"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'flutter pub global run rename --bundleId "com.example.ios.app" --appname "App Name" --target ios \n')),(0,i.kt)("p",null,"Replace the bundle Id ",(0,i.kt)("inlineCode",{parentName:"p"},"com.example.ios.app")," with your own name in the same format. For example: ",(0,i.kt)("inlineCode",{parentName:"p"},"com.aniketmalik.applicationname")),(0,i.kt)("p",null,"Replace the app name ",(0,i.kt)("inlineCode",{parentName:"p"},"App Name")," with your own name in the same format. For example: ",(0,i.kt)("inlineCode",{parentName:"p"},"My Store"),"."),(0,i.kt)("p",null,"Please save these package names as they will be used in the application configuration later."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Next we will setup the Firebase project for your application.")))}d.isMDXComponent=!0},1898:function(e,t,n){"use strict";t.Z=n.p+"assets/images/mc-as-1-9fc656b11f835ef863fe35aa44a2b1dd.png"},1278:function(e,t,n){"use strict";t.Z=n.p+"assets/images/mc-as-2-d5eccda107bb0187eb5ec0c0b7fdc7e5.png"},1240:function(e,t,n){"use strict";t.Z=n.p+"assets/images/mc-as-3-56d3bc6a15fd2c969cc1335de98de859.png"}}]);