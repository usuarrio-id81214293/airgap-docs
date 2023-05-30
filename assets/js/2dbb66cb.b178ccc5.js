"use strict";(self.webpackChunkairgap_docs=self.webpackChunkairgap_docs||[]).push([[2847,3780],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return s}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=c(n),s=a,f=d["".concat(p,".").concat(s)]||d[s]||m[s]||i;return n?r.createElement(f,l(l({ref:e},u),{},{components:n})):r.createElement(f,l({ref:e},u))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4844:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return m},default:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=n(5608),o=["components"],p={title:"Wallet Compatibility",slug:"/currencies/ethereum/wallet-compatibility"},c=void 0,u={unversionedId:"currencies/ethereum/wallet-compatibility",id:"currencies/ethereum/wallet-compatibility",title:"Wallet Compatibility",description:"| Wallet     | Default Derivation Path | Import AirGap Seed In Wallet | Link                                               |",source:"@site/docs/currencies/ethereum/wallet-compatibility.mdx",sourceDirName:"currencies/ethereum",slug:"/currencies/ethereum/wallet-compatibility",permalink:"/currencies/ethereum/wallet-compatibility",editUrl:"https://github.com/airgap-it/airgap-docs/edit/main/src/docs/currencies/ethereum/wallet-compatibility.mdx",tags:[],version:"current",frontMatter:{title:"Wallet Compatibility",slug:"/currencies/ethereum/wallet-compatibility"},sidebar:"docs",previous:{title:"Introduction",permalink:"/currencies/ethereum/introduction"},next:{title:"Introduction",permalink:"/currencies/tezos/introduction"}},m=[],d={toc:m};function s(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)(l.default,{mdxType:"WalletCompatibilityIntro"}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Wallet"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Derivation Path"),(0,i.kt)("th",{parentName:"tr",align:null},"Import AirGap Seed In Wallet"),(0,i.kt)("th",{parentName:"tr",align:null},"Link"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AirGap"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"m/44'/60'/0'/0/0")),(0,i.kt)("td",{parentName:"tr",align:null},"default"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://airgap.it"},"AirGap"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Ledger"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"m/44'/60'/0'/0/0")),(0,i.kt)("td",{parentName:"tr",align:null},"default"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.ledger.com/"},"Ledger"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MetaMask"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"m/44'/60'/0'/0/0")),(0,i.kt)("td",{parentName:"tr",align:null},"default"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://metamask.io/"},"MetaMask"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BIP39 Tool"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"m/44'/60'/0'/0/0")),(0,i.kt)("td",{parentName:"tr",align:null},"default"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://iancoleman.io/bip39/#english"},"BIP39 Tool"))))))}s.isMDXComponent=!0},5608:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={},p=void 0,c={unversionedId:"template/wallet-compatibility-intro",id:"template/wallet-compatibility-intro",title:"wallet-compatibility-intro",description:"The following list shows wallets that are compatible with the AirGap. You can import your 24 words in the following wallets to get the same accounts that you have in AirGap.",source:"@site/docs/template/wallet-compatibility-intro.md",sourceDirName:"template",slug:"/template/wallet-compatibility-intro",permalink:"/template/wallet-compatibility-intro",editUrl:"https://github.com/airgap-it/airgap-docs/edit/main/src/docs/template/wallet-compatibility-intro.md",tags:[],version:"current",frontMatter:{}},u=[],m={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The following list shows wallets that are compatible with the AirGap. You can import your 24 words in the following wallets to get the same accounts that you have in AirGap."),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We do not recommend entering your 24 words in any app that is not fully air-gapped. Doing so will decrease your overall security and put all your funds at risk!"))))}d.isMDXComponent=!0}}]);