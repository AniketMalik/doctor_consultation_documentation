(self.webpackChunkdoctor_consultation_documentation=self.webpackChunkdoctor_consultation_documentation||[]).push([[330],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return k}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=s(n),k=i,u=c["".concat(l,".").concat(k)]||c[k]||m[k]||o;return n?a.createElement(u,p(p({ref:t},d),{},{components:n})):a.createElement(u,p({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,p=new Array(o);p[0]=c;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,p[1]=r;for(var s=2;s<o;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8147:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return r},toc:function(){return l},default:function(){return d}});var a=n(2122),i=n(9756),o=(n(7294),n(3905)),p={sidebar_position:4,sidebar_label:"Social Login"},r={unversionedId:"mobile-app-setup/social-login",id:"mobile-app-setup/social-login",isDocsHomePage:!1,title:"Social Login Setup",description:"In the section we will setup the social login for Doctor Consultation application. The application supports",source:"@site/docs/mobile-app-setup/social-login.md",sourceDirName:"mobile-app-setup",slug:"/mobile-app-setup/social-login",permalink:"/doctor_consultation_documentation/mobile-app-setup/social-login",version:"current",sidebar_label:"Social Login",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Social Login"},sidebar:"tutorialSidebar",previous:{title:"Release Keys",permalink:"/doctor_consultation_documentation/mobile-app-setup/release-keys"},next:{title:"Push Notifications",permalink:"/doctor_consultation_documentation/mobile-app-setup/push-notifications"}},l=[{value:"Google Login",id:"google-login",children:[{value:"Android Integration",id:"android-integration",children:[]},{value:"iOS Integration",id:"ios-integration",children:[]}]},{value:"Facebook Login",id:"facebook-login",children:[{value:"Android Integration",id:"android-integration-facebook",children:[]},{value:"iOS Integration",id:"ios-integration-facebook",children:[]}]},{value:"Apple Login",id:"apple-login",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Setup",id:"setup",children:[]}]}],s={toc:l};function d(e){var t=e.components,p=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},s,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the section we will setup the social login for Doctor Consultation application. The application supports"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#google-login"},"Google Login")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#facebook-login"},"Facebook Login")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#apple-login"},"Apple Login"))),(0,o.kt)("p",null,"and each of them have their own steps that you need to follow to set them up properly."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"google-login"},"Google Login"),(0,o.kt)("p",null,"In this section we will setup the Google Login feature in the application."),(0,o.kt)("p",null,"Follow the steps below to setup Google Login for your application."),(0,o.kt)("h3",{id:"android-integration"},"Android Integration"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the link ",(0,o.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/projectselector2/apis/credentials/consent?supportedpurview=project"},"Google Cloud Platform API manager"),"."),(0,o.kt)("p",{parentName:"li"},"You do need to enable the OAuth APIs."),(0,o.kt)("p",{parentName:"li"},"This link will take you on the ",(0,o.kt)("strong",{parentName:"p"},"Google Cloud Platform Api - OAuth Consent Screen")," where you will enable a few options to collect user data like email and other public profile information."),(0,o.kt)("p",{parentName:"li"},"In case you have not logged into your Google Account, the link will take you to login screen and will redirect to the desired location once you login.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make sure ",(0,o.kt)("strong",{parentName:"p"},"OAuth Consent Screen")," is selected in the left menu.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select a ",(0,o.kt)("strong",{parentName:"p"},"Project")," if not already selected from the top bar."),(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Firebase Project")," that you have created in ",(0,o.kt)("a",{parentName:"p",href:"firebase#create-project"},"Firebase Setup")," section will appear here. You need to select that project. "),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Google Login Setup",src:n(6174).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once you've selected your project select the option ",(0,o.kt)("strong",{parentName:"p"},"External")," under the section User Type and click on ",(0,o.kt)("strong",{parentName:"p"},"Create")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Google Login Setup",src:n(4195).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the required information under the following sections"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"App Information")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"App name - The name displayed to the users"),(0,o.kt)("li",{parentName:"ul"},"User support email"),(0,o.kt)("li",{parentName:"ul"},"You can also add an app logo here but adding an app logo may be subject to verification from Google's team."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"App Domain")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Application home page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Application privacy policy link")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Application Terms of Service link")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Authorised domains")),(0,o.kt)("p",{parentName:"li"},"Most of the times it is already filled with your Firebase Project Hosting Url")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Developer contact information")))),(0,o.kt)("p",{parentName:"li"},"Now click on ",(0,o.kt)("strong",{parentName:"p"},"Save and Continue")," to move to the next step.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Under ",(0,o.kt)("strong",{parentName:"p"},"Scopes")," click on ",(0,o.kt)("strong",{parentName:"p"},"Add or Remove Scopes")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Google Login Setup",src:n(5050).Z})),(0,o.kt)("p",{parentName:"li"},"From the pop up menu select the following scopes:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"../auth/userinfo.email")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},".../auth/userinfo.profile"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Google Login Setup",src:n(1623).Z})),(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("strong",{parentName:"p"},"Update")," at the bottom of the pop up."),(0,o.kt)("p",{parentName:"li"},"Now click on ",(0,o.kt)("strong",{parentName:"p"},"Save and Continue")," to move to the next step.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For the remaining steps you can add your information or choose to skip them and click on ",(0,o.kt)("strong",{parentName:"p"},"Save and Continue"),". At the last step you can verify your information and click on ",(0,o.kt)("strong",{parentName:"p"},"Back to dashboard")," to check your settings on the dashboard.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now we will add the ",(0,o.kt)("inlineCode",{parentName:"p"},"SHA-1 Fingerprints")," for your debug and release keystore certificates in your Firebase Android App that you created in ",(0,o.kt)("a",{parentName:"p",href:"firebase#create-android-application"},"Firebase Console - Create Android Application")),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Prerequisite")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The following steps assume that you have followed through ",(0,o.kt)("a",{parentName:"p",href:"release-keys"},(0,o.kt)("strong",{parentName:"a"},"Creating Release Keys"))," for your application and have"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"upload_key.keystore")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SHA-1 Fingerprints"))),(0,o.kt)("p",{parentName:"div"},"generated from the previous steps. If you have not generated the above mentioned files and fingerprints please follow them and come back later when you have them at hand."))),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("a",{parentName:"p",href:"https://console.firebase.google.com"},"Firebase Console"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the project that you created in the ",(0,o.kt)("a",{parentName:"p",href:"firebase"},"Firebase Setup"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"Project Settings")," by clicking on the Settings Icon from the top left menu."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Firebase Console Project Settings",src:n(752).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Scroll down to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Your Apps")," section and select your app option under ",(0,o.kt)("inlineCode",{parentName:"p"},"Android Apps")," and click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Fingerprint")," button at the bottom."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Firebase Console Android App Settings",src:n(3880).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add both of your ",(0,o.kt)("inlineCode",{parentName:"p"},"Debug")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Release")," ",(0,o.kt)("inlineCode",{parentName:"p"},"SHA-1 Fingerprints")," that you created from the previous steps."))))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Your Google Login setup for android is now complete.")),(0,o.kt)("h3",{id:"ios-integration"},"iOS Integration"),(0,o.kt)("p",null,"The following section assumes that you have properly followed the ",(0,o.kt)("inlineCode",{parentName:"p"},"Steps 3,4,5")," from ",(0,o.kt)("a",{parentName:"p",href:"firebase#create-ios-application"},"Create iOS Application under Firebase section")),(0,o.kt)("p",null,"If you've done that please follow along. If you have not done that, please perform those steps and then follow the guide stepwise."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"Info.plist")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"GoogleServices-Info.plist")," files in android studio. These files are located in ",(0,o.kt)("inlineCode",{parentName:"p"},"doctor_consultation / ios / Runner")," directory."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Google Login iOS Setup",src:n(4416).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Follow the instructions below"),(0,o.kt)("p",{parentName:"li"},"From your ",(0,o.kt)("inlineCode",{parentName:"p"},"GoogleServices-Info.plist")," file copy the value under key ",(0,o.kt)("inlineCode",{parentName:"p"},"REVERSED_CLIENT_ID"),". It might be on line number ",(0,o.kt)("inlineCode",{parentName:"p"},"8"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Google Login iOS Setup",src:n(95).Z})),(0,o.kt)("p",{parentName:"li"},"In your ",(0,o.kt)("inlineCode",{parentName:"p"},"Info.plist")," file scroll down to the key named ",(0,o.kt)("inlineCode",{parentName:"p"},"CFBundleURLTypes"),". It might be on line number ",(0,o.kt)("inlineCode",{parentName:"p"},"23"),".\nYou need to replace the value marked under ",(0,o.kt)("inlineCode",{parentName:"p"},"CFBundleURLSchemes")," with your ",(0,o.kt)("inlineCode",{parentName:"p"},"REVERSED_CLIENT_ID")," which you copied from the step above."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Google Login iOS Setup",src:n(9667).Z})))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Your iOS Integration for Google Login is complete.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"facebook-login"},"Facebook Login"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("a",{parentName:"p",href:"https://developers.facebook.com/apps/"},"Facebook Developers App Dashboard")),(0,o.kt)("p",{parentName:"li"},"You will need to sign into your facebook account or create a new facebook developer account.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Create App")," from the top right."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select the app type as ",(0,o.kt)("inlineCode",{parentName:"p"},"Consumer")," and click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Continue")," from the bottom"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Facebook Login Android Setup",src:n(1749).Z}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add the ",(0,o.kt)("inlineCode",{parentName:"p"},"display name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"contact email address")," for your app settings and click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Create App")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Facebook Login Android Setup",src:n(325).Z}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"This will create a new app for you and take you to the app dashboard. You can also click on the App entry name to go to the app dashboard."))))),(0,o.kt)("h3",{id:"android-integration-facebook"},"Android Integration"),(0,o.kt)("p",null,"In this section we will setup the Facebook login for Doctor Consultation android application.\nYou will need to follow the steps below to add specific values for your application Facebook login to work."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Products to Your App")," section by clicking on the (+) icon in-front of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Product")," heading from the left menu in your dashboard. If you already have an entry named ",(0,o.kt)("inlineCode",{parentName:"p"},"Facebook Login")," then click on it and select ",(0,o.kt)("inlineCode",{parentName:"p"},"Quickstart"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From Add Products to Your App section select ",(0,o.kt)("inlineCode",{parentName:"p"},"Facebook Login")," and click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Setup"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Facebook Login Android Setup",src:n(9474).Z})),(0,o.kt)("p",{parentName:"li"},"If you do not see the ",(0,o.kt)("inlineCode",{parentName:"p"},"Facebook Login")," option, please check under ",(0,o.kt)("inlineCode",{parentName:"p"},"Product")," heading in the left menu as it might already be added to the app. If you already have an entry named ",(0,o.kt)("inlineCode",{parentName:"p"},"Facebook Login")," then click on it and select ",(0,o.kt)("inlineCode",{parentName:"p"},"Quickstart"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the option ",(0,o.kt)("inlineCode",{parentName:"p"},"Android")," from the option shown."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Facebook Login Android Setup",src:n(6327).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the setup wizard skip ",(0,o.kt)("inlineCode",{parentName:"p"},"Steps 1 and 2")," by clicking on ",(0,o.kt)("inlineCode",{parentName:"p"},"Next"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("inlineCode",{parentName:"p"},"Step 3 - Tell Us about Your Android Project")," you will need to add your android app package name."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Package Name")),(0,o.kt)("p",{parentName:"li"},"  Under the ",(0,o.kt)("inlineCode",{parentName:"p"},"Package Name")," add the ",(0,o.kt)("inlineCode",{parentName:"p"},"Bundle Id")," name you entered while renaming the application in this step: ",(0,o.kt)("a",{parentName:"p",href:"getting-started#rename-the-package"},"Rename the package"),". Alternatively you can find this in your Android Manifest or your app's build.gradle file."),(0,o.kt)("p",{parentName:"li"},"  For example: ",(0,o.kt)("inlineCode",{parentName:"p"},"com.example.android.app"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Default Activity Class Name")),(0,o.kt)("p",{parentName:"li"},"  Add the ",(0,o.kt)("inlineCode",{parentName:"p"},".MainActivity")," at the end of your ",(0,o.kt)("inlineCode",{parentName:"p"},"Package Name")," and enter it into this field."),(0,o.kt)("p",{parentName:"li"},"  For example: ",(0,o.kt)("inlineCode",{parentName:"p"},"com.example.android.app.MainActivity")))),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Facebook Login Android Setup",src:n(3013).Z})),(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Save")," and then on ",(0,o.kt)("inlineCode",{parentName:"p"},"Continue"),". If you are prompted with a message that there was a problem verifying package name on Google Play. Please check the package name and try again. Just click ",(0,o.kt)("inlineCode",{parentName:"p"},"Use this package name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Continue"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("inlineCode",{parentName:"p"},"Step 4 - Add Your Development and Release Key Hashes")," you will add your debug and release key hashes which you created in the previous step ",(0,o.kt)("a",{parentName:"p",href:"release-keys#create-key-hashes"},"Creating Key Hashes"),". Add both your release and debug key hashes here and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Save")," and then ",(0,o.kt)("inlineCode",{parentName:"p"},"Continue"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("inlineCode",{parentName:"p"},"Step 5 - Enable Single Sign On for Your App")," toggle the switch to ",(0,o.kt)("inlineCode",{parentName:"p"},"Yes")," and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Save")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Next"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("inlineCode",{parentName:"p"},"Step 6 - Edit Your Resources and Manifest")," follow the steps below."),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy the following from your Facebook Dashboard setup wizard."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<string name="facebook_app_id">17658553XXXXXX5</string>\n<string name="fb_login_protocol_scheme">fb176XXXXXX376365</string>\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"strings.xml")," in android studio. It is located in ",(0,o.kt)("inlineCode",{parentName:"p"},"doctor_consultation / android / app / src / main / res / values / strings.xml"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Replace the values which are already there with your specific values you just copied above. You might also want to change the app name to your specific Bundle Id value.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Finally ",(0,o.kt)("inlineCode",{parentName:"p"},"Save")," the file by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"command + s")," on MacOS and ",(0,o.kt)("inlineCode",{parentName:"p"},"control + s")," on Windows."))))),(0,o.kt)("p",null,"You can skip all other steps as they are already done for you in the application."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Your Facebook Login for Android is now complete.")),(0,o.kt)("h3",{id:"ios-integration-facebook"},"iOS Integration"),(0,o.kt)("p",null,"If you have followed the Facebook Login setup for android just now the select the iOS option from the setup wizard at the top tabbar and skip steps 1,2,3 from below. If you are setting up the Facebook Login for iOS first then follow through all the steps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Products to Your App")," section by clicking on the (+) icon in-front of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Product")," heading from the left menu in your dashboard. If you already have an entry named ",(0,o.kt)("inlineCode",{parentName:"p"},"Facebook Login")," then click on it and select ",(0,o.kt)("inlineCode",{parentName:"p"},"Quickstart"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From Add Products to Your App section select ",(0,o.kt)("inlineCode",{parentName:"p"},"Facebook Login")," and click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Setup"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Facebook Login Android Setup",src:n(9474).Z})),(0,o.kt)("p",{parentName:"li"},"If you do not see the ",(0,o.kt)("inlineCode",{parentName:"p"},"Facebook Login")," option, please check under ",(0,o.kt)("inlineCode",{parentName:"p"},"Product")," heading in the left menu as it might already be added to the app. If you already have an entry named ",(0,o.kt)("inlineCode",{parentName:"p"},"Facebook Login")," then click on it and select ",(0,o.kt)("inlineCode",{parentName:"p"},"Quickstart"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the option ",(0,o.kt)("inlineCode",{parentName:"p"},"iOS")," from the option shown."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Facebook Login Android Setup",src:n(6327).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the setup wizard skip ",(0,o.kt)("inlineCode",{parentName:"p"},"Steps 1")," by clicking on ",(0,o.kt)("inlineCode",{parentName:"p"},"Next"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("inlineCode",{parentName:"p"},"Step 2 - Add your Bundle Identifier")," you will need to add your Bundle Id."),(0,o.kt)("p",{parentName:"li"},"Under the ",(0,o.kt)("inlineCode",{parentName:"p"},"Bundle ID")," add the ",(0,o.kt)("inlineCode",{parentName:"p"},"Bundle Id")," name you entered while renaming the application for iOS in this step: ",(0,o.kt)("a",{parentName:"p",href:"getting-started#rename-the-package"},"Rename the package"),". Alternatively find your bundle identifier in your Xcode Project's iOS Application Target and paste it into the box below."),(0,o.kt)("p",{parentName:"li"},"For example: ",(0,o.kt)("inlineCode",{parentName:"p"},"com.example.ios.app")),(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Save")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Continue"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("inlineCode",{parentName:"p"},"Step 3 - Enable Single Sign On for Your App")," toggle the switch to ",(0,o.kt)("inlineCode",{parentName:"p"},"Yes")," and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Save")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Next"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("inlineCode",{parentName:"p"},"Step 4 - Configure Your info.plist")," you will need to edit your ",(0,o.kt)("inlineCode",{parentName:"p"},"info.plist")," file."),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"info.plist")," file in android studio. It is located in ",(0,o.kt)("inlineCode",{parentName:"p"},"doctor_consultation / ios / Runner / info.plist"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Scroll down to the key value ",(0,o.kt)("inlineCode",{parentName:"p"},"CFBundleURLSchemes"),". It is already created for you in the file. The estimated line number is ",(0,o.kt)("inlineCode",{parentName:"p"},"34"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Replace the value that starts with ",(0,o.kt)("inlineCode",{parentName:"p"},"fb959564XXXXXXXX4")," (on estimated line number ",(0,o.kt)("inlineCode",{parentName:"p"},"36"),") with your specific value from the Facebook dashboard.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In <string",">"," in the key ",(0,o.kt)("inlineCode",{parentName:"p"},"FacebookAppID"),", replace ","[APP_ID]"," with your App ID. (on estimated line number ",(0,o.kt)("inlineCode",{parentName:"p"},"42"),")")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In <string",">"," in the key ",(0,o.kt)("inlineCode",{parentName:"p"},"FacebookDisplayName"),", replace ","[APP_NAME]"," with the name of your app. (on estimated line number ",(0,o.kt)("inlineCode",{parentName:"p"},"44"),")")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Finally ",(0,o.kt)("inlineCode",{parentName:"p"},"Save")," the file by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"command + s")," on MacOS and ",(0,o.kt)("inlineCode",{parentName:"p"},"control + s")," on Windows."))))),(0,o.kt)("p",null,"You can skip all other steps as they are already done for you in the application."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Your Facebook Login for iOS is now complete.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"apple-login"},"Apple Login"),(0,o.kt)("p",null,"Perform this setup only if you are releasing the application for iOS as Apple Login is not enabled on Android application."),(0,o.kt)("p",null,"Apple sign in different from the above two sign in methods. Please follow the steps mentioned below to set up Apple sign in with the application."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before you can start integrating (or even testing) Sign in with Apple you need a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/programs/"},"paid membership to the Apple Developer Program"),". Sign in with Apple is one of the restricted services which is not available for free with just an Apple ID (",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/programs/whats-included/"},"source"),")."),(0,o.kt)("h3",{id:"setup"},"Setup"),(0,o.kt)("h4",{id:"register-an-app-id"},"Register an App ID"),(0,o.kt)("p",null,"If you don't have one yet, create a new one at ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/account/resources/identi%EF%AC%81ers/list/bundleId"},"https://developer.apple.com/account/resources/identi\ufb01ers/list/bundleId")," following these steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Register an App ID"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the wizard select ",(0,o.kt)("inlineCode",{parentName:"p"},"App IDs"),", click ",(0,o.kt)("inlineCode",{parentName:"p"},"Continue"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"Description")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Bundle ID"),", and select the ",(0,o.kt)("inlineCode",{parentName:"p"},"Sign In with Apple capability"),". Use the same ",(0,o.kt)("inlineCode",{parentName:"p"},"Bundle ID")," as you used while changing the name from here ",(0,o.kt)("a",{parentName:"p",href:"getting-started#rename-the-package"},"Rename the package"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Usually the default setting of ",(0,o.kt)("inlineCode",{parentName:"p"},"Enable as a primary App ID")," should su\ufb03ce here. If you ship multiple apps that should all share the same Apple ID credentials for your users, please consult the Apple documentation on how to best set these up.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Continue"),", and then click ",(0,o.kt)("inlineCode",{parentName:"p"},"Register")," to \ufb01nish the creation of the App ID."))),(0,o.kt)("p",null,"In case you already have an existing App ID that you want to use with Sign in with Apple:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Open that App ID from the list")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Check the ",(0,o.kt)("inlineCode",{parentName:"p"},"Sign in with Apple")," capability")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Save")))),(0,o.kt)("h4",{id:"firebase-authentication-for-apple"},"Firebase Authentication for Apple"),(0,o.kt)("p",null,"After this is done you need to enable the Apple Sign In method provider in your ",(0,o.kt)("inlineCode",{parentName:"p"},"Firebase Authentication module"),". Follow the steps below to do so."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("a",{parentName:"p",href:"https://console.firebase.google.com"},"Firebase Console"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select the project you created.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("inlineCode",{parentName:"p"},"Authentication")," option from the left side menu. Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Get started")," if it prompts you.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("inlineCode",{parentName:"p"},"Sign-in method")," from the top tabbar")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Under the heading ",(0,o.kt)("inlineCode",{parentName:"p"},"Sign in providers")," search for ",(0,o.kt)("inlineCode",{parentName:"p"},"Apple"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Enable")," the option.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To complete setup, add the ",(0,o.kt)("inlineCode",{parentName:"p"},"authorisation callback URL")," to your app configuration in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Apple Developer Console"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Perform any additional steps required if mentioned in the firebase authentication area."))))}d.isMDXComponent=!0},1749:function(e,t,n){"use strict";t.Z=n.p+"assets/images/fbl-android-2-629fb899c7622e9c892ef17906ea7725.png"},325:function(e,t,n){"use strict";t.Z=n.p+"assets/images/fbl-android-3-3a0a815962229111f36145be82d29d35.png"},9474:function(e,t,n){"use strict";t.Z=n.p+"assets/images/fbl-android-4-b24feb987f3500663fcf2f862a316c73.png"},6327:function(e,t,n){"use strict";t.Z=n.p+"assets/images/fbl-android-5-de6f2fdb33abb2bd5027cd0cb27628e8.png"},3013:function(e,t,n){"use strict";t.Z=n.p+"assets/images/fbl-android-6-32bf38afb21a2c551f15d7a15549b252.png"},6174:function(e,t,n){"use strict";t.Z=n.p+"assets/images/gls-android-1-a9720c3a3d78abde34332c41ff0387be.png"},4195:function(e,t,n){"use strict";t.Z=n.p+"assets/images/gls-android-2-f8a9b4014cc345735259488469d180ba.png"},5050:function(e,t,n){"use strict";t.Z=n.p+"assets/images/gls-android-3-3404172396e31c20773b28bd463f8f3c.png"},1623:function(e,t,n){"use strict";t.Z=n.p+"assets/images/gls-android-4-651a475dfa5ddf1f9344f488db4aeb46.png"},752:function(e,t,n){"use strict";t.Z=n.p+"assets/images/gls-android-5-3b09f5a0c9472fafcc1d2823bccec891.png"},3880:function(e,t,n){"use strict";t.Z=n.p+"assets/images/gls-android-6-e29d418e0eefe4d35bd9e2c2b012a90f.png"},4416:function(e,t,n){"use strict";t.Z=n.p+"assets/images/gls-ios-1-f167031a0af7bf08d8526d7dd5bb0b6a.png"},95:function(e,t,n){"use strict";t.Z=n.p+"assets/images/gls-ios-2-16e50130523651e15d6be9318066a240.png"},9667:function(e,t,n){"use strict";t.Z=n.p+"assets/images/gls-ios-3-4aed0c1e44b115490477eeb13caed6c7.png"}}]);