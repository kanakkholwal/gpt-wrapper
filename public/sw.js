if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),o={module:{uri:n},exports:t,require:r};s[n]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404.svg",revision:"86167a16995ecff910461dd93056d9ef"},{url:"/Logo.svg",revision:"b93ca9cc3165c1f62c5d5e2272108dcc"},{url:"/Profile.svg",revision:"1c1921b11e3a434bc24485d85af047d6"},{url:"/_next/static/TEVODefBAF56UuYV30po6/_buildManifest.js",revision:"d8df05e7cd408ca3dbd25fc7b9dca136"},{url:"/_next/static/TEVODefBAF56UuYV30po6/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0b308cfb-d446dbb9206364b3.js",revision:"d446dbb9206364b3"},{url:"/_next/static/chunks/0c428ae2-71b74d9421cb21a3.js",revision:"71b74d9421cb21a3"},{url:"/_next/static/chunks/1bfc9850-4b3f4fcb98e5ad49.js",revision:"4b3f4fcb98e5ad49"},{url:"/_next/static/chunks/252f366e-cc38eedda96a4ac4.js",revision:"cc38eedda96a4ac4"},{url:"/_next/static/chunks/327-1b6fdaa307aed0bf.js",revision:"1b6fdaa307aed0bf"},{url:"/_next/static/chunks/345-1ee5ffa2a3eb696a.js",revision:"1ee5ffa2a3eb696a"},{url:"/_next/static/chunks/507-6f80f72ed9e2c8b8.js",revision:"6f80f72ed9e2c8b8"},{url:"/_next/static/chunks/6728d85a-4d12a1f2fc3faad5.js",revision:"4d12a1f2fc3faad5"},{url:"/_next/static/chunks/726-2d978c47ec07beea.js",revision:"2d978c47ec07beea"},{url:"/_next/static/chunks/78e521c3-24ca2ae6fb806ba9.js",revision:"24ca2ae6fb806ba9"},{url:"/_next/static/chunks/865-38efa6e9514407b9.js",revision:"38efa6e9514407b9"},{url:"/_next/static/chunks/893-420f6aee1b357931.js",revision:"420f6aee1b357931"},{url:"/_next/static/chunks/9b380ffa-8265a47a82380319.js",revision:"8265a47a82380319"},{url:"/_next/static/chunks/ae51ba48-b551da767378a091.js",revision:"b551da767378a091"},{url:"/_next/static/chunks/d64684d8-09cc7a812b363613.js",revision:"09cc7a812b363613"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-3c8ec9304e633da5.js",revision:"3c8ec9304e633da5"},{url:"/_next/static/chunks/pages/404-1d8f868fa42198c9.js",revision:"1d8f868fa42198c9"},{url:"/_next/static/chunks/pages/_app-5c2dabec5b456f20.js",revision:"5c2dabec5b456f20"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/blog-b5a8887ff9d2ec73.js",revision:"b5a8887ff9d2ec73"},{url:"/_next/static/chunks/pages/contact-9fb18131a1f4ee78.js",revision:"9fb18131a1f4ee78"},{url:"/_next/static/chunks/pages/dashboard-30559f26749d8525.js",revision:"30559f26749d8525"},{url:"/_next/static/chunks/pages/index-165144f2808a5954.js",revision:"165144f2808a5954"},{url:"/_next/static/chunks/pages/login-5786ef640f6305d2.js",revision:"5786ef640f6305d2"},{url:"/_next/static/chunks/pages/privacy-86d9c9a59694c694.js",revision:"86d9c9a59694c694"},{url:"/_next/static/chunks/pages/signup-380f0cb34c93ad92.js",revision:"380f0cb34c93ad92"},{url:"/_next/static/chunks/pages/tools-ec1d2e1fffd64dbf.js",revision:"ec1d2e1fffd64dbf"},{url:"/_next/static/chunks/pages/tools/%5BtoolName%5D-ba746b1afa9961f1.js",revision:"ba746b1afa9961f1"},{url:"/_next/static/chunks/pages/tools/category/%5Bcategory%5D-587ebdf7cda38c48.js",revision:"587ebdf7cda38c48"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-f164db4954bac6ec.js",revision:"f164db4954bac6ec"},{url:"/_next/static/css/6dec6ef70b51514f.css",revision:"6dec6ef70b51514f"},{url:"/_next/static/css/7d5c9d8c6cb3b74a.css",revision:"7d5c9d8c6cb3b74a"},{url:"/_next/static/css/c33908bc2a7414d0.css",revision:"c33908bc2a7414d0"},{url:"/_next/static/css/e25a9bb4c587fa9c.css",revision:"e25a9bb4c587fa9c"},{url:"/_next/static/media/login-illustration.dcf25a12.webp",revision:"5010a6a05b741864c9f7a1afde2a9a0d"},{url:"/assets/backgrounds/dashboard.jpg",revision:"b5f593c89f21e0f0305c4c64e662ad30"},{url:"/assets/images/Blog.svg",revision:"2962e4aa54064f2de318bd279f5d695c"},{url:"/assets/images/Thumbs.db",revision:"05e59e39f49acc13786671a1a0948b2d"},{url:"/assets/images/blob.svg",revision:"2962e4aa54064f2de318bd279f5d695c"},{url:"/assets/images/chevron-down.svg",revision:"c66b213d1dfff391c61146727032f068"},{url:"/assets/images/chevron-right.svg",revision:"9c59704b1de34c9fbb54c100b907ac85"},{url:"/assets/images/hero-banner.jpg",revision:"7565f46c11ebf33f284ef55335912f65"},{url:"/assets/images/hero-shape.svg",revision:"73e3c7a16270e8315c817844144daa19"},{url:"/assets/images/icon-1.svg",revision:"a143ec22b4271cbf9cbb6077bbe497ba"},{url:"/assets/images/icon-2.svg",revision:"b5e6a4f26a33fa25400f7b31a4de1dac"},{url:"/assets/images/icon-3.svg",revision:"b74ab4c259dee63785e0b06bb96dc090"},{url:"/assets/images/icon-4.svg",revision:"da3cc5783889d6b8d33c27fc4b4f8bb5"},{url:"/assets/images/icon-5.svg",revision:"74de00003e1326c3acc561f61af18e4b"},{url:"/assets/images/illustration_dashboard.png",revision:"e5e83bd3d3d0c3c5846d159c4369fc60"},{url:"/assets/images/me.png",revision:"ee5eca5034a922cab2537ac3c90fb7e6"},{url:"/assets/images/metaverse-technology.webp",revision:"904062f272f84b84d6f3a5c73d9e3545"},{url:"/assets/images/project-1.png",revision:"5c490b599263d6dc7581cb1d66ed8e20"},{url:"/assets/images/project-2.png",revision:"b34b60cd423b4184fbc4ec7a27577307"},{url:"/assets/images/project-3.png",revision:"5329136f13cfec5602696e65f4f49bd4"},{url:"/assets/images/project-4.png",revision:"8883d5a2f89d04a1b079e352a0904c0f"},{url:"/assets/images/result-site.png",revision:"5d0c1184d5e23993a1ce9c5e7f8f2066"},{url:"/assets/images/result-site.webp",revision:"0ebbb2dbc2aaf58fec096abac64b4093"},{url:"/assets/images/web-design.svg",revision:"eaf9806077d8713a04f94f2bcd4d539e"},{url:"/assets/images/web-tools.svg",revision:"389e07c0126ec5656b554aa73a6e45a4"},{url:"/assets/images/web-ui-component-library.gif",revision:"5c06f148a74f21fa5a522b437389fd41"},{url:"/assets/svg-images/about-us.svg",revision:"fe29fb89e9cd328406231129f2040df3"},{url:"/assets/svg-images/blogging.svg",revision:"5c9dfe9c9922db6b51e5f295c3d972dc"},{url:"/assets/svg-images/firebase.svg",revision:"007bad50400405f896843d18f305d894"},{url:"/assets/svg-images/hero-back-illustration.svg",revision:"7eb920ca0b4ea593a1129dd3ed372b8c"},{url:"/assets/svg-images/hero-top-illustration.svg",revision:"aa0f14cb87e54d157f8fa6dd8b3308f4"},{url:"/assets/svg-images/meta-tag-generator.svg",revision:"6f1b6e4757e46b7bd5af29bcfd382e82"},{url:"/assets/svg-images/projects.svg",revision:"b4160568fe8114e6728227a61221b30c"},{url:"/assets/svg-images/tools.svg",revision:"c61c46145d9ce1dd22abb5da656bf91f"},{url:"/contact.svg",revision:"16e65ef6889eef923811f1ef18b2bd18"},{url:"/favicon.ico",revision:"2e752a0e74c2651b822d5e537377e950"},{url:"/fonts.css",revision:"478c447ceacd389967ec8f0b8223d32c"},{url:"/kkupgrader.svg",revision:"1c1921b11e3a434bc24485d85af047d6"},{url:"/logo192.png",revision:"d91954574ead5a24b8cf81a0b33b14e3"},{url:"/logo512.png",revision:"4aaa45784f8f5acf2cfc522b3693783a"},{url:"/manifest.json",revision:"ec4af12daa21ce164dad4485b481b02b"},{url:"/robots.txt",revision:"cf9e4e8b7d34be1a1d23c231a6113254"},{url:"/sitemap.xml",revision:"bef4c4547d08ceb93313e6245690a95e"},{url:"/textLogo.svg",revision:"a126d22ea02d622d83e7ce9637085c1f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
