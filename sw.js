if(!self.define){let e,i={};const c=(c,a)=>(c=new URL(c+".js",a).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,n)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const o=e=>c(e,d),f={module:{uri:d},exports:r,require:o};i[d]=Promise.all(a.map((e=>f[e]||o(e)))).then((e=>(n(...e),r)))}}define(["./workbox-915e8d08"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"android-chrome-192x192.8248f0e5.png",revision:"1d6bb625f16cb451747e386cd434a932"},{url:"android-chrome-192x192.fca5e1c0.png",revision:"f5fc42a6f4190ac18d75136404e1ce64"},{url:"android-chrome-512x512.7acd699b.png",revision:"47d2d549bd75771cc456a0e332a316c4"},{url:"android-chrome-512x512.bdc02fad.png",revision:"47d2d549bd75771cc456a0e332a316c4"},{url:"apple-touch-icon.156e8d32.png",revision:"bce5218182f970772bf6e45b5cea16ab"},{url:"apple-touch-icon.28e278ec.png",revision:"e6fc91a59d8196293c77db90a605a3c5"},{url:"favicon-16x16.785aae0d.png",revision:"296a49e85c0af7e25643b6c1acae209d"},{url:"favicon-16x16.8d05918b.png",revision:"296a49e85c0af7e25643b6c1acae209d"},{url:"favicon-32x32.4ae1b60b.png",revision:"a796dddc55e769a239e1a2aa558a9198"},{url:"favicon-32x32.bebbae9b.png",revision:"a796dddc55e769a239e1a2aa558a9198"},{url:"favicon.479621fa.ico",revision:"fc3d7b35d16ca294ac389c5fdab7ca02"},{url:"favicon.824cf0c5.ico",revision:"fc3d7b35d16ca294ac389c5fdab7ca02"},{url:"icon-front-end.5c18f519.svg",revision:"3f8745d8e64591374a08b19b501c7204"},{url:"icon-front-end.e3ee07c7.svg",revision:"78dcf5ae3d72f436dd627b2959cbfe23"},{url:"icon-mais-skills.9ed2bbd0.svg",revision:"74ab23d30873a71ee4689961049fb927"},{url:"icon-mais-skills.f2ea4154.svg",revision:"4a95a7af5529de892f565f9d892c13e7"},{url:"icon-ui-design.7a22bd24.svg",revision:"c410afa5be32e38ab5b7145efa64fe34"},{url:"icon-ui-design.d5b88bc6.svg",revision:"9fb683a9fc75d369ce33c9973eefcdbc"},{url:"illustration.895ab1da.svg",revision:"47f0f5ffe6926e63c7131e2ce848e645"},{url:"illustration.a2ce8527.svg",revision:"fa076987e2240107b09b63dd7ff407ed"},{url:"index.html",revision:"11aeac5d94b31db2108a5169dd2c91f3"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
