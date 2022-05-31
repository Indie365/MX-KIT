"use strict";(self.webpackChunk_rnx_kit_docsite=self.webpackChunk_rnx_kit_docsite||[]).push([[947],{5318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4088:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m}});var a=n(5773),r=n(808),l=(n(7378),n(5318)),i=["components"],o={},p="cli",d={unversionedId:"tools/cli",id:"tools/cli",title:"cli",description:"",source:"@site/docs/tools/cli.mdx",sourceDirName:"tools",slug:"/tools/cli",permalink:"/rnx-kit/docs/tools/cli",editUrl:"https://github.com/microsoft/rnx-kit/tree/main/docsite/docs/tools/cli.mdx",tags:[],version:"current",frontMatter:{},sidebar:"toolsSidebar",previous:{title:"bundle-diff",permalink:"/rnx-kit/docs/tools/bundle-diff"},next:{title:"config",permalink:"/rnx-kit/docs/tools/config"}},s={},m=[{value:"Bundle a Kit",id:"bundle-a-kit",level:2},{value:"Example Commands",id:"example-commands",level:3},{value:"Example Configuration",id:"example-configuration",level:3},{value:"Command-Line Overrides",id:"command-line-overrides",level:3},{value:"Start a Bundle Server",id:"start-a-bundle-server",level:2},{value:"Example Commands",id:"example-commands-1",level:3},{value:"Example Configuration",id:"example-configuration-1",level:3},{value:"Command-Line Overrides",id:"command-line-overrides-1",level:3},{value:"Manage Kit Dependencies",id:"manage-kit-dependencies",level:2},{value:"Generate a Third-Party Notice for a Kit",id:"generate-a-third-party-notice-for-a-kit",level:2},{value:"Clean a React Native Project",id:"clean-a-react-native-project",level:2}],u={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"cli"},"cli"),(0,l.kt)("p",null,"Command-line interface for working with ",(0,l.kt)("inlineCode",{parentName:"p"},"kit")," packages in your repo."),(0,l.kt)("h2",{id:"bundle-a-kit"},"Bundle a Kit"),(0,l.kt)("p",null,"Bundle an application using ",(0,l.kt)("a",{parentName:"p",href:"https://facebook.github.io/metro"},"Metro"),". The\nbundling process is controlled by\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rnx-kit/tree/main/packages/config"},"configuration"),"\nand optional command-line overrides."),(0,l.kt)("h3",{id:"example-commands"},"Example Commands"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn react-native rnx-bundle\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn react-native rnx-bundle --platform ios --dev false --minify true\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn react-native rnx-bundle --bundle-prefix test-app --tree-shake true\n")),(0,l.kt)("h3",{id:"example-configuration"},"Example Configuration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "rnx-kit": {\n    "bundle": {\n      "entryPath": "src/index.ts",\n      "distPath": "dist",\n      "assetsPath": "dist",\n      "bundlePrefix": "main",\n      "detectCyclicDependencies": true,\n      "detectDuplicateDependencies": {\n        "ignoredModules": ["react-is"]\n      },\n      "typescriptValidation": true,\n      "treeShake": true,\n      "targets": ["ios", "android", "windows", "macos"],\n      "platforms": {\n        "android": {\n          "assetsPath": "dist/res"\n        },\n        "macos": {\n          "typescriptValidation": false\n        }\n      }\n    }\n  }\n}\n')),(0,l.kt)("h3",{id:"command-line-overrides"},"Command-Line Overrides"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Override"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--id ","[id]"),(0,l.kt)("td",{parentName:"tr",align:null},"Target bundle definition. This is only needed when the kit configuration has multiple bundle definitions.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--platform ","[",(0,l.kt)("inlineCode",{parentName:"td"},"ios")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"android")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"windows")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"win32")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"macos"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Target platform. When not given, all platforms in the kit configuration are bundled.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--entry-path ","[file]"),(0,l.kt)("td",{parentName:"tr",align:null},"Path to the root JavaScript file, either absolute or relative to the kit package.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--dist-path ","[path]"),(0,l.kt)("td",{parentName:"tr",align:null},"Path where the bundle is written, either absolute or relative to the kit package.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--assets-path ","[path]"),(0,l.kt)("td",{parentName:"tr",align:null},"Path where bundle assets like images are written, either absolute or relative to the kit package.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--bundle-prefix ","[prefix]"),(0,l.kt)("td",{parentName:"tr",align:null},"Bundle file prefix. This is followed by the platform and bundle file extension.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--bundle-encoding ","[",(0,l.kt)("inlineCode",{parentName:"td"},"utf8")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"utf16le")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"ascii"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings"},"Character encoding")," to use when writing the bundle file.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--dev ","[boolean]"),(0,l.kt)("td",{parentName:"tr",align:null},"If false, warnings are disabled and the bundle is minified (default: true).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--minify ","[boolean]"),(0,l.kt)("td",{parentName:"tr",align:null},"Controls whether or not the bundle is minified. Disabling minification is useful for test builds.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--tree-shake ","[boolean]"),(0,l.kt)("td",{parentName:"tr",align:null},"Controls whether or not the bundle is tree shaken. Enabling it turns on dead-code elimination, potentially making the bundle smaller.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--max-workers ","[number]"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the maximum number of parallel worker threads to use for transforming files. This defaults to the number of cores available on your machine.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--sourcemap-output ","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"Path where the bundle source map is written, either absolute or relative to the dist-path.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--sourcemap-sources-root ","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"Path to use when relativizing file entries in the bundle source map.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--reset-cache"),(0,l.kt)("td",{parentName:"tr",align:null},"Reset the Metro cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--config ","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"Path to the Metro configuration file.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-h, --help"),(0,l.kt)("td",{parentName:"tr",align:null},"Show usage information.")))),(0,l.kt)("h2",{id:"start-a-bundle-server"},"Start a Bundle Server"),(0,l.kt)("p",null,"Start a bundle server for an application using\n",(0,l.kt)("a",{parentName:"p",href:"https://facebook.github.io/metro"},"Metro"),". The server is controlled by\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rnx-kit/tree/main/packages/config"},"configuration"),"\nand optional command-line overrides."),(0,l.kt)("h3",{id:"example-commands-1"},"Example Commands"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn react-native rnx-start\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn react-native rnx-start --host localhost --port 8812\n")),(0,l.kt)("h3",{id:"example-configuration-1"},"Example Configuration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "rnx-kit": {\n    "server": {\n      "projectRoot": "src",\n      "detectCyclicDependencies": true,\n      "detectDuplicateDependencies": {\n        "ignoredModules": ["react-is"],\n        "throwOnError": false\n      },\n      "typescriptValidation": true,\n      "treeShake": true\n    }\n  }\n}\n')),(0,l.kt)("h3",{id:"command-line-overrides-1"},"Command-Line Overrides"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Override"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--host ","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"Host name or address to bind when listening for incoming server requests. When not given, requests from all addresses are accepted.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--port ","[number]"),(0,l.kt)("td",{parentName:"tr",align:null},"Host port to use when listening for incoming server requests.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--project-root ","[path]"),(0,l.kt)("td",{parentName:"tr",align:null},"Path to the root of your react-native experience project. The bundle server uses this root path to resolve all web requests.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--watch-folders ","[paths]"),(0,l.kt)("td",{parentName:"tr",align:null},"Additional folders which will be added to the file-watch list. Comma-separated. By default, Metro watches all project files, and triggers a bundle-reload when anything changes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--asset-plugins ","[list]"),(0,l.kt)("td",{parentName:"tr",align:null},"Additional asset plugins to be used by the Metro Babel transformer. Comma-separated list containing plugin modules and/or absolute paths to plugin packages.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--source-exts ","[list]"),(0,l.kt)("td",{parentName:"tr",align:null},"Additional source-file extensions to include when generating bundles. Comma-separated list, excluding the leading dot.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--max-workers ","[number]"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the maximum number of parallel worker threads to use for transforming files. This defaults to the number of cores available on your machine.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--custom-log-reporter-path ","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"Path to a JavaScript file which exports a Metro 'TerminalReporter' function. This replaces the default reporter, which writes all messages to the Metro console.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--https"),(0,l.kt)("td",{parentName:"tr",align:null},"Use a secure (https) web server. When not specified, an insecure (http) web server is used.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--key ","[path]"),(0,l.kt)("td",{parentName:"tr",align:null},"Path to a custom SSL private key file to use for secure (https) communication.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--cert ","[path]"),(0,l.kt)("td",{parentName:"tr",align:null},"Path to a custom SSL certificate file to use for secure (https) communication.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--reset-cache"),(0,l.kt)("td",{parentName:"tr",align:null},"Reset the Metro cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--config ","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"Path to the Metro configuration file.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--no-interactive"),(0,l.kt)("td",{parentName:"tr",align:null},"Disables interactive mode.")))),(0,l.kt)("h2",{id:"manage-kit-dependencies"},"Manage Kit Dependencies"),(0,l.kt)("p",null,"Manage your ",(0,l.kt)("inlineCode",{parentName:"p"},"kit")," package's dependencies."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ yarn react-native rnx-dep-check [options] [/path/to/package.json]\n")),(0,l.kt)("p",null,"Refer to\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rnx-kit/tree/main/packages/dep-check"},"@rnx-kit/dep-check"),"\nfor details."),(0,l.kt)("h2",{id:"generate-a-third-party-notice-for-a-kit"},"Generate a Third-Party Notice for a Kit"),(0,l.kt)("p",null,"Generate a 3rd-party notice, which is an aggregation of all the LICENSE files\nfrom your ",(0,l.kt)("inlineCode",{parentName:"p"},"kit")," package's dependencies."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"NOTE: A 3rd-party notice is a ",(0,l.kt)("strong",{parentName:"p"},"legal document"),". You are solely responsble\nfor its content, even if you use ",(0,l.kt)("inlineCode",{parentName:"p"},"@rnx-kit")," to assist you in generating it.\nYou should consult with an attorney to ensure your notice meets all legal\nrequirements.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ yarn react-native rnx-write-third-party-notices [options]\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--source-map-file ","[file]"),(0,l.kt)("td",{parentName:"tr",align:null},"The source map file associated with the ",(0,l.kt)("inlineCode",{parentName:"td"},"kit")," package's entry file. This source map eventually leads to all ",(0,l.kt)("inlineCode",{parentName:"td"},"kit")," dependencies.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--output-file ","[file]"),(0,l.kt)("td",{parentName:"tr",align:null},"The path to use when writing the 3rd-party notice file.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--root-path ","[path]"),(0,l.kt)("td",{parentName:"tr",align:null},"The root of the repo. This is the starting point for finding each module in the source map dependency graph.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--ignore-scopes ","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"Comma-separated list of ",(0,l.kt)("inlineCode",{parentName:"td"},"npm")," scopes to ignore when traversing the source map dependency graph.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--ignore-modules ","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"Comma-separated list of modules to ignore when traversing the source map dependency graph.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--preamble-text ","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"A string to prepend to the start of the 3rd-party notice.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--additional-text ","[path]"),(0,l.kt)("td",{parentName:"tr",align:null},"A string to append to the end of the 3rd-party notice.")))),(0,l.kt)("h2",{id:"clean-a-react-native-project"},"Clean a React Native Project"),(0,l.kt)("p",null,"Cleans your project by removing React Native related caches and modules."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ yarn react-native rnx-clean [options]\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--include ","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"Comma-separated flag of caches to clear e.g npm,yarn . When not specified , only non-platform specific caches are cleared. ","[android,cocoapods,npm,metro,watchman,yarn]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--project-root ","[path]"),(0,l.kt)("td",{parentName:"tr",align:null},"Root path to your React Native project. When not specified, defaults to current working directory")))))}c.isMDXComponent=!0}}]);