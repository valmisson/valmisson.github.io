if(!self.define){let e,i={};const o=(o,c)=>(o=new URL(o+".js",c).href,i[o]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=i,document.head.appendChild(e)}else e=o,importScripts(o),i()})).then((()=>{let e=i[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(c,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let f={};const n=e=>o(e,a),d={module:{uri:a},exports:f,require:n};i[a]=Promise.all(c.map((e=>d[e]||n(e)))).then((e=>(r(...e),f)))}}define(["./workbox-f683aea5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"android-chrome-192x192.c5b7579b.png",revision:"f5fc42a6f4190ac18d75136404e1ce64"},{url:"android-chrome-512x512.7acd699b.png",revision:"47d2d549bd75771cc456a0e332a316c4"},{url:"apple-touch-icon.ac81b7e5.png",revision:"bce5218182f970772bf6e45b5cea16ab"},{url:"favicon-16x16.8d05918b.png",revision:"296a49e85c0af7e25643b6c1acae209d"},{url:"favicon-32x32.4ae1b60b.png",revision:"a796dddc55e769a239e1a2aa558a9198"},{url:"favicon.479621fa.ico",revision:"fc3d7b35d16ca294ac389c5fdab7ca02"},{url:"icon-flag-en.e2bd7bcf.svg",revision:"fdf6f069626860ade42258481b8828b6"},{url:"icon-flag-pt.0c0ba246.svg",revision:"c69e79327195280ea35d61575d3189a0"},{url:"icon-front-end.3aaded2b.svg",revision:"c9ba524d9f140d97ad1c1a7f4e61bc7d"},{url:"icon-mais-skills.66c0b6b7.svg",revision:"4e75b251292b2251fb5fb54caa213c34"},{url:"icon-ui-design.653389ed.svg",revision:"ee318d6a53056f814f42429b75f2a33b"},{url:"illustration.dcfc4e80.svg",revision:"032e17688955c2348c9c1430245a3930"},{url:"index.html",revision:"0da7bd163689029af0093ffae0d58052"},{url:"roboto-400.962f1284.woff2",revision:"479970ffb74f2117317f9d24d9e317fe"},{url:"roboto-500.b3c683d1.woff2",revision:"020c97dc8e0463259c2f9df929bb0c69"},{url:"roboto-700.41e719aa.woff2",revision:"2735a3a69b509faf3577afd25bdf552e"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
