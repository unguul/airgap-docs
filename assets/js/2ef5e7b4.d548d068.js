"use strict";(self.webpackChunkairgap_docs=self.webpackChunkairgap_docs||[]).push([[6240],{3905:function(t,e,r){r.d(e,{Zo:function(){return l},kt:function(){return m}});var i=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,i,n=function(t,e){if(null==t)return{};var r,i,n={},a=Object.keys(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=i.createContext({}),p=function(t){var e=i.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},l=function(t){var e=p(t.components);return i.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,s=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),d=p(r),m=n,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?i.createElement(h,o(o({ref:e},l),{},{components:r})):i.createElement(h,o({ref:e},l))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:n,o[1]=c;for(var p=2;p<a;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5326:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var i=r(7462),n=r(3366),a=(r(7294),r(3905)),o=["components"],c={title:"Bitcoin Introduction",slug:"/currencies/bitcoin/introduction",sidebar_label:"Introduction"},s=void 0,p={unversionedId:"currencies/bitcoin/introduction",id:"currencies/bitcoin/introduction",title:"Bitcoin Introduction",description:"What is Bitcoin?",source:"@site/docs/currencies/bitcoin/introduction.mdx",sourceDirName:"currencies/bitcoin",slug:"/currencies/bitcoin/introduction",permalink:"/currencies/bitcoin/introduction",editUrl:"https://github.com/airgap-it/airgap-docs/edit/main/src/docs/currencies/bitcoin/introduction.mdx",tags:[],version:"current",frontMatter:{title:"Bitcoin Introduction",slug:"/currencies/bitcoin/introduction",sidebar_label:"Introduction"},sidebar:"docs",previous:{title:"Device",permalink:"/airgap-knox/device"},next:{title:"Wallet Compatibility",permalink:"/currencies/bitcoin/wallet-compatibility"}},l=[{value:"What is Bitcoin?",id:"what-is-bitcoin",children:[{value:"AirGap Bitcoin Wallet",id:"airgap-bitcoin-wallet",children:[],level:3},{value:"AirGap Supported Bitcoin Address Types",id:"airgap-supported-bitcoin-address-types",children:[{value:"SegWit address format",id:"segwit-address-format",children:[],level:4},{value:"Legacy address format",id:"legacy-address-format",children:[],level:4},{value:"Taproot - Coming soon",id:"taproot---coming-soon",children:[],level:4}],level:3},{value:"How to set up a BTC account in AirGap",id:"how-to-set-up-a-btc-account-in-airgap",children:[],level:3},{value:"FAQ",id:"faq",children:[],level:3}],level:2}],u={toc:l};function d(t){var e=t.components,r=(0,n.Z)(t,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-bitcoin"},"What is Bitcoin?"),(0,a.kt)("p",null,"Bitcoin was the first decentralized digital currency based on blockchain technology. It was created in 2008 by a mysterious and anonymous developer known as Satoshi Nakamoto, who released the white paper in a cryptography mailing list and later open-sourced the software that implements the protocol."),(0,a.kt)("h3",{id:"airgap-bitcoin-wallet"},"AirGap Bitcoin Wallet"),(0,a.kt)("p",null,"AirGap Bitcoin (BTC) Wallet is a convenient way to store and transfer BTC while storing your private key offline."),(0,a.kt)("h3",{id:"airgap-supported-bitcoin-address-types"},"AirGap Supported Bitcoin Address Types"),(0,a.kt)("h4",{id:"segwit-address-format"},"SegWit address format"),(0,a.kt)("p",null,'The Segwit address format is an improvement over the legacy address format. SegWit comes with cheaper fees. SegWit addresses start with "bc1q", for example ',(0,a.kt)("inlineCode",{parentName:"p"},"bc1q60vkdsn37kk9xgm5vw0jasrxw8lsrx68rqwr2g"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://medium.com/airgap-it/understanding-segwit-666abec4e774"},"How to setup SegWit in AirGap")),(0,a.kt)("h4",{id:"legacy-address-format"},"Legacy address format"),(0,a.kt)("p",null,'The original Bitcoin format. This format has higher transaction fees than other formats. Legacy addresses start with "1", for example ',(0,a.kt)("inlineCode",{parentName:"p"},"13jw7krcy7rzvfeNmQaEyMCueSKnqZm1Z7"),"."),(0,a.kt)("h4",{id:"taproot---coming-soon"},"Taproot - ","[Coming soon]"),(0,a.kt)("p",null,"This format comes with the latest bitcoin update, it is a soft fork that improves Bitcoin's scripts to increase privacy, efficiency, and the network's ability to process smart contracts. Taproot addresses start with \"bc1p\", for example ",(0,a.kt)("inlineCode",{parentName:"p"},"bc1p60vkdsn37kk9xgm5vw0jasrxw8lsrx68rqwr2g"),"."),(0,a.kt)("h3",{id:"how-to-set-up-a-btc-account-in-airgap"},"How to set up a BTC account in AirGap"),(0,a.kt)("p",null,"This guide uses XTZ as an example, but the same steps can set up Bitcoin in AirGap. ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/airgap-it/airgap-the-step-by-step-guide-c4c3d3fe9a05"},"Step by step guide on how to set up all available protocols in AirGap")),(0,a.kt)("h3",{id:"faq"},"FAQ"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://support.airgap.it/currencies/bitcoin/wallet-compatibility"},"Which other wallets is AirGap bitcoin wallet compatible with?")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://support.airgap.it/FAQ#can-i-import-the-btc-account-created-in-the-airgap-vault-into-other-wallets-using-the-private-key"},"Can I import the BTC account created in the AirGap Vault into other wallets using the private key?")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://support.airgap.it/FAQ#does-airgap-allow-freezing-of-utxos"},"Does AirGap allow freezing of UTXOs?")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://support.airgap.it/troubleshooting/currencies/bitcoin/transaction-stuck"},"My bitcoin transaction is stuck")))}d.isMDXComponent=!0}}]);