(self.webpackChunkdoctor_consultation_documentation=self.webpackChunkdoctor_consultation_documentation||[]).push([[503],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(7294),r=n(944),i=n(6010),o="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,p=39;var d=function(e){var t=e.lazy,n=e.block,d=e.defaultValue,m=e.values,c=e.groupId,u=e.className,h=(0,r.Z)(),k=h.tabGroupChoices,f=h.setTabGroupChoices,g=(0,a.useState)(d),N=g[0],y=g[1],X=a.Children.toArray(e.children),v=[];if(null!=c){var w=k[c];null!=w&&w!==N&&m.some((function(e){return e.value===w}))&&y(w)}var b=function(e){var t=e.currentTarget,n=v.indexOf(t),a=m[n].value;y(a),null!=c&&(f(c,a),setTimeout((function(){var e,n,a,r,i,o,s,p;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,s=o.innerHeight,p=o.innerWidth,n>=0&&i<=p&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case p:var a=v.indexOf(e.target)+1;n=v[a]||v[0];break;case s:var r=v.indexOf(e.target)-1;n=v[r]||v[v.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},u)},m.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":N===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:C,onFocus:b,onClick:b},n)}))),t?(0,a.cloneElement)(X.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},X.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},944:function(e,t,n){"use strict";var a=n(7294),r=n(9443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},8358:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=n(1395),l=n(8215),s={sidebar_position:3,sidebar_label:"Release Keys",title:"Release Keys"},p={unversionedId:"mobile-app-setup/release-keys",id:"mobile-app-setup/release-keys",isDocsHomePage:!1,title:"Release Keys",description:"In this guide we will create your release keystore (also know as the upload key), debug and release key hashes and SHA-1 Fingerprint for your Android Application. All android application are required to sign with a release key before publishing it to the Google Play Store. Release and Debug Key Hashes and SHA-1 Fingerprint are required for Google Login and Facebook Login.",source:"@site/docs/mobile-app-setup/release-keys.mdx",sourceDirName:"mobile-app-setup",slug:"/mobile-app-setup/release-keys",permalink:"/doctor_consultation_documentation/mobile-app-setup/release-keys",version:"current",sidebar_label:"Release Keys",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Release Keys",title:"Release Keys"},sidebar:"tutorialSidebar",previous:{title:"Firebase Setup",permalink:"/doctor_consultation_documentation/mobile-app-setup/firebase"},next:{title:"Social Login Setup",permalink:"/doctor_consultation_documentation/mobile-app-setup/social-login"}},d=[{value:"Edit Keystore Config file",id:"edit-keystore-config-file",children:[]},{value:"Configuration",id:"configuration",children:[{value:"Create Release Keystore",id:"create-release-keystore",children:[]},{value:"Create SHA-1 Fingerprints",id:"create-sha-1-fingerprints",children:[]},{value:"Create Key Hashes",id:"create-key-hashes",children:[]}]}],m={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this guide we will create your ",(0,i.kt)("inlineCode",{parentName:"p"},"release keystore")," (also know as the upload key), ",(0,i.kt)("inlineCode",{parentName:"p"},"debug and release key hashes")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"SHA-1 Fingerprint")," for your Android Application. All android application are required to sign with a release key before publishing it to the Google Play Store. ",(0,i.kt)("inlineCode",{parentName:"p"},"Release and Debug Key Hashes")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"SHA-1 Fingerprint")," are required for ",(0,i.kt)("a",{parentName:"p",href:"social-login#google-login"},"Google Login")," and ",(0,i.kt)("a",{parentName:"p",href:"social-login#facebook-login"},"Facebook Login"),"."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"edit-keystore-config-file"},"Edit Keystore Config file"),(0,i.kt)("p",null,"We will edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"keystore-config.conf")," file. This file is located under ",(0,i.kt)("inlineCode",{parentName:"p"},"doctor_consultation --\x3e tools --\x3e configs --\x3e keystore-config.conf")),(0,i.kt)("p",null,"Follow the steps below to edit your information to create a keystore."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the ",(0,i.kt)("inlineCode",{parentName:"p"},"keystore-config.conf")," file in android studio.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Change the following to your specific values"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"FILE_ALIAS")),(0,i.kt)("p",{parentName:"li"},'Please make sure that there are no spaces in between the name. The recommended format to create a name alias is "yourname", "your_name".')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"password"},(0,i.kt)("strong",{parentName:"h4"},"PASSWORD")),(0,i.kt)("p",{parentName:"li"},"You can set any password here that you like."),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You need to ",(0,i.kt)("strong",{parentName:"p"},"remember")," this password as it will be used in the following steps to create "),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SHA-1 Fingerprint")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Key Hashes")))))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Finally ",(0,i.kt)("inlineCode",{parentName:"p"},"Save")," the file by pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"command + s")," on Mac OS and ",(0,i.kt)("inlineCode",{parentName:"p"},"control + s")," on Windows. You can also save the file from the menu option ",(0,i.kt)("inlineCode",{parentName:"p"},"File --\x3e Save All / Save"),"."))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)(o.Z,{defaultValue:"mac/linux",values:[{label:"Mac / Linux",value:"mac/linux"},{label:"Windows",value:"win"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"mac/linux",mdxType:"TabItem"},(0,i.kt)("p",null,"  Open a ",(0,i.kt)("inlineCode",{parentName:"p"},"terminal")," in android studio. If you do not know how to open android studio then follow ",(0,i.kt)("inlineCode",{parentName:"p"},"Steps 4,5")," from ",(0,i.kt)("a",{parentName:"p",href:"getting-started#open-app-in-android-studio"},"Open terminal in Android Studio"),"."),(0,i.kt)("p",null,"  This will open a terminal window in the root of the application folder. All the commands will be performed from the root of the application folder.")),(0,i.kt)(l.Z,{value:"win",mdxType:"TabItem"},(0,i.kt)("p",null,"  The automated scripts in ",(0,i.kt)("inlineCode",{parentName:"p"},"Tools")," directory use ",(0,i.kt)("inlineCode",{parentName:"p"},"bash")," shell to execute. On windows this is not present by default. In this guide we will install the ",(0,i.kt)("inlineCode",{parentName:"p"},"bash")," shell to execute our commands properly."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download ",(0,i.kt)("a",{parentName:"li",href:"https://git-scm.com/downloads"},"Git-Bash Tool")," for Windows."),(0,i.kt)("li",{parentName:"ol"},"Install the software on your machine by following all the steps in the installer."),(0,i.kt)("li",{parentName:"ol"},"After the Git-Bash Tool is installed successfully, ",(0,i.kt)("inlineCode",{parentName:"li"},"Right Click")," on the ",(0,i.kt)("inlineCode",{parentName:"li"},"doctor_consultation")," directory from your download package."),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"Git Bash Here")," option from the context menu."),(0,i.kt)("li",{parentName:"ol"},"It will open a git-bash ",(0,i.kt)("inlineCode",{parentName:"li"},"terminal")," which you will use to run the following commands.")))),(0,i.kt)("h3",{id:"create-release-keystore"},"Create Release Keystore"),(0,i.kt)("p",null,"In the terminal copy the following command and press enter"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"bash tools/create-keystore.sh\n")),(0,i.kt)("p",null,"If there is a keystore already ( which there might be ) you will be asked to delete it. Press ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," to delete it and proceed to create a new one with your updated values."),(0,i.kt)("p",null,"During the setup you will be asked for some more information which will be specific to your organization. Please add them properly."),(0,i.kt)("p",null,"At the end it will ask you to verify your information, type ",(0,i.kt)("inlineCode",{parentName:"p"},"yes")," and hit enter to create the keystore."),(0,i.kt)("p",null,"After the process is completed without any issues or error "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"upload_key.keystore")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key.properties")," ")),(0,i.kt)("p",null,"files will be generated in the directory ",(0,i.kt)("inlineCode",{parentName:"p"},"doctor_consultation --\x3e tools --\x3e certs"),"."),(0,i.kt)("p",null,"These files will automatically be copied to ",(0,i.kt)("inlineCode",{parentName:"p"},"doctor_consultation --\x3e android")," directory for your convenience. You can verify that by comparing the values of ",(0,i.kt)("inlineCode",{parentName:"p"},"key.properties")," file under ",(0,i.kt)("inlineCode",{parentName:"p"},"doctor_consultation --\x3e android")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"doctor_consultation --\x3e tools --\x3e certs")," directories."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Do not change the values of ",(0,i.kt)("strong",{parentName:"p"},"key.properties")," file manually as it might break your app signing process."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The generated"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"upload_key.keystore")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key.properties")," ")),(0,i.kt)("p",{parentName:"div"},"files are your release keystore ( also called as upload key ) and properties file and must be kept ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"private"))," at all times. Do not accidentally push them in open source repositories or lose them. "),(0,i.kt)("p",{parentName:"div"},"When you create a release build apk for your application to upload to Google Play Store, the application will be signed with this upload key."))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In case you encounter any error, try to run through the process once again. If the issue still persists, you can follow this guide to ",(0,i.kt)("a",{parentName:"p",href:"/reference/keystore-manually"},(0,i.kt)("strong",{parentName:"a"},"Create Keystore Manually"))))),(0,i.kt)("h3",{id:"create-sha-1-fingerprints"},"Create SHA-1 Fingerprints"),(0,i.kt)("p",null,"In this section we will create ",(0,i.kt)("inlineCode",{parentName:"p"},"SHA-1 Fingerprints")," for both debug and release mode. The SHA-1 Fingerprint are used in Firebase Console to identify your android application and in ",(0,i.kt)("a",{parentName:"p",href:"social-login#android-integration"},"Google Login - Android Integration"),". Follow the steps below to generate the fingerprints."),(0,i.kt)("h4",{id:"debug"},"Debug"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open the ",(0,i.kt)("inlineCode",{parentName:"li"},"debug-config.conf")," file from ",(0,i.kt)("inlineCode",{parentName:"li"},"doctor_consultation --\x3e tools --\x3e configs")," directory in android studio."),(0,i.kt)("li",{parentName:"ol"},"Edit the ",(0,i.kt)("inlineCode",{parentName:"li"},"DEBUG_KEYSTORE_PATH")," value based on your Operating System from the following")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Mac OS")," and ",(0,i.kt)("strong",{parentName:"p"},"Linux")),(0,i.kt)("p",{parentName:"li"},"The path is usually ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.android/debug.keystore")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Result"',title:'"Result"'},"DEBUG_KEYSTORE_PATH=~/.android/debug.keystore\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Windows")),(0,i.kt)("p",{parentName:"li"},"The path is usually ",(0,i.kt)("inlineCode",{parentName:"p"},'"C:\\Users\\USERNAME\\.android\\debug.keystore"'),". Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"USERNAME")," with your actual PC user name. "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Result"',title:'"Result"'},'DEBUG_KEYSTORE_PATH="C:\\Users\\USERNAME\\.android\\debug.keystore"\n')))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Finally ",(0,i.kt)("inlineCode",{parentName:"p"},"Save")," the file by pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"command + s")," on Mac OS and ",(0,i.kt)("inlineCode",{parentName:"p"},"control + s")," on Windows. You can also save the file from the menu option ",(0,i.kt)("inlineCode",{parentName:"p"},"File --\x3e Save All / Save"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the terminal copy the following command and press enter"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"bash tools/create-debug-fingerprint.sh\n")),(0,i.kt)("p",{parentName:"li"},"The default password the debug.keystore is ",(0,i.kt)("inlineCode",{parentName:"p"},"android"),". Enter this when prompted for a password."),(0,i.kt)("p",{parentName:"li"},"Finally this will print the fingerprints for the debug certificate:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"Certificate fingerprints:\n\nMD5:  E6:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:25\nSHA1: CD:FD:FF:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:60:CC:6C\nSHA256: 9C:F2:85:F2:BF:AF:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:2F:E2:5B:48:21:A1\n")),(0,i.kt)("p",{parentName:"li"},"Copy the ",(0,i.kt)("inlineCode",{parentName:"p"},"SHA-1 Fingerprint")," value and save somewhere for later use."))),(0,i.kt)("h4",{id:"release"},"Release"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the terminal copy the following command and press enter"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"bash tools/create-release-fingerprint.sh\n")),(0,i.kt)("p",{parentName:"li"},"When prompted enter the password that you entered in ",(0,i.kt)("inlineCode",{parentName:"p"},"keystore-config.conf")," file in ",(0,i.kt)("a",{parentName:"p",href:"#password"},"Editing Keystore Config File - Password"),"."),(0,i.kt)("p",{parentName:"li"},"This will print the fingerprints for the release certificate:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"Certificate fingerprints:\n\nMD5:  D6:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:2B\nSHA1: 4D:F3:FG:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:60:CF:FC\nSHA256: 9M:D2:80:E2:AP:LF:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:XX:2F:T2:5B:48:20:A1\n")),(0,i.kt)("p",{parentName:"li"},"Copy the ",(0,i.kt)("inlineCode",{parentName:"p"},"SHA-1 Fingerprint")," value and save somewhere for later use."))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In case you encounter any error, try to run through the process once again. If the issue still persists, you can follow this guide to ",(0,i.kt)("a",{parentName:"p",href:"/reference/sha-fingerprint-manually"},(0,i.kt)("strong",{parentName:"a"},"Create SHA-1 Fingerprints Manually"))))),(0,i.kt)("h3",{id:"create-key-hashes"},"Create Key Hashes"),(0,i.kt)("p",null,"Key hashes are used for ",(0,i.kt)("a",{parentName:"p",href:"social-login#facebook-login"},"Facebook Login")," and are based on your debug and release key certificates. Follow the steps below to create key hashes."),(0,i.kt)("p",null,"In the terminal copy the following command and press enter"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"bash tools/create-key-hash.sh\n")),(0,i.kt)("p",null,"This will try to generate both development and release key hashes for your application."),(0,i.kt)("p",null,"The password for debug certificate is ",(0,i.kt)("inlineCode",{parentName:"p"},"android")," and the password for your release certificate is the password that you entered in ",(0,i.kt)("inlineCode",{parentName:"p"},"keystore-config.conf")," file in ",(0,i.kt)("a",{parentName:"p",href:"#password"},"Editing Keystore Config File - Password"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Result"',title:'"Result"'},"========= Debug Key Hash =========\n\nWhen prompted for a password enter: android\nEnter keystore password:  \nzf3/0qXXXXXXXXXXXXES0DdgzGw=\n  \n  \n========= Release Key Hash =========\n  \nWhen prompted for a password enter the password you set in keystore-config.conf file\nEnter keystore password:\nBGXBgq/KmXXXXXXXXXXXXqOcmvg=\n")),(0,i.kt)("p",null,"From your result copy the hashes which look like ",(0,i.kt)("inlineCode",{parentName:"p"},"zf3/0qXXXXXXXXXXXXES0DdgzGw=")," this and save for later use. These hashes will be used in the android integration of ",(0,i.kt)("a",{parentName:"p",href:"social-login#facebook-login"},"Facebook Login"),"."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"For Window Users")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you encounter an error while generating the key hashes then follow this ",(0,i.kt)("a",{parentName:"p",href:"/reference/key-hash-manually"},(0,i.kt)("strong",{parentName:"a"},"manual guide"))))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In case you encounter any error, try to run through the process once again. If the issue still persists, you can follow this guide to ",(0,i.kt)("a",{parentName:"p",href:"/reference/key-hash-manually"},(0,i.kt)("strong",{parentName:"a"},"Create Key Hashes Manually"))))))}c.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);