if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let o={};const t=s=>i(s,r),u={module:{uri:r},exports:o,require:t};e[r]=Promise.all(l.map((s=>u[s]||t(s)))).then((s=>(n(...s),o)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/auth-e18a8508.js",revision:null},{url:"assets/download-1c8c127c.js",revision:null},{url:"assets/file-e7d52aa1.js",revision:null},{url:"assets/file-eb15fcea.js",revision:null},{url:"assets/firebase-8d1cee96.js",revision:null},{url:"assets/index-4d66bf89.js",revision:null},{url:"assets/index-f39ba9d0.css",revision:null},{url:"assets/react-filepond.esm-8b638032.js",revision:null},{url:"assets/server-38f59ab8.js",revision:null},{url:"assets/upload-16b9c74e.js",revision:null},{url:"assets/upload-c427d3be.css",revision:null},{url:"assets/workbox-window.prod.es5-dc90f814.js",revision:null},{url:"index.html",revision:"890581d88735fbcea342f8d86f0d0d56"},{url:"manifest.webmanifest",revision:"1fcd28625fd422b701d73b003fa553d5"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
