if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),d={module:{uri:n},exports:t,require:r};s[n]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404.svg",revision:"86167a16995ecff910461dd93056d9ef"},{url:"/Logo.svg",revision:"59eb6a56a8d02f00a63f7680acbe6727"},{url:"/Profile.svg",revision:"058c21fed3a534ac5437afaa549c4ead"},{url:"/_next/static/chunks/0b308cfb-d446dbb9206364b3.js",revision:"d446dbb9206364b3"},{url:"/_next/static/chunks/0c428ae2-82952fed641b553a.js",revision:"82952fed641b553a"},{url:"/_next/static/chunks/154-fe83b8c36a4fe87d.js",revision:"fe83b8c36a4fe87d"},{url:"/_next/static/chunks/1a48c3c1-ebcf14edddd2597c.js",revision:"ebcf14edddd2597c"},{url:"/_next/static/chunks/1bfc9850-390f91b31fdaf569.js",revision:"390f91b31fdaf569"},{url:"/_next/static/chunks/234-0f923b30185519da.js",revision:"0f923b30185519da"},{url:"/_next/static/chunks/252f366e-fa447140264d6d85.js",revision:"fa447140264d6d85"},{url:"/_next/static/chunks/327-46c91b8f542f1184.js",revision:"46c91b8f542f1184"},{url:"/_next/static/chunks/345-11a171c6c41b9daa.js",revision:"11a171c6c41b9daa"},{url:"/_next/static/chunks/397-6554a2ef92edc74a.js",revision:"6554a2ef92edc74a"},{url:"/_next/static/chunks/3975bccd.bf47cda846fa916e.js",revision:"bf47cda846fa916e"},{url:"/_next/static/chunks/49.03a40797bb888623.js",revision:"03a40797bb888623"},{url:"/_next/static/chunks/605-74a48a343603996f.js",revision:"74a48a343603996f"},{url:"/_next/static/chunks/6728d85a-4d12a1f2fc3faad5.js",revision:"4d12a1f2fc3faad5"},{url:"/_next/static/chunks/692-0e7cbfd83aec0ddc.js",revision:"0e7cbfd83aec0ddc"},{url:"/_next/static/chunks/723.bac5322e50179191.js",revision:"bac5322e50179191"},{url:"/_next/static/chunks/78e521c3-24ca2ae6fb806ba9.js",revision:"24ca2ae6fb806ba9"},{url:"/_next/static/chunks/814c6784-38bd67a3fe6f31d4.js",revision:"38bd67a3fe6f31d4"},{url:"/_next/static/chunks/865-0b42305b9e63b2f1.js",revision:"0b42305b9e63b2f1"},{url:"/_next/static/chunks/893-fc8cf4a9510b013a.js",revision:"fc8cf4a9510b013a"},{url:"/_next/static/chunks/9b380ffa-8265a47a82380319.js",revision:"8265a47a82380319"},{url:"/_next/static/chunks/ae51ba48-24d7b3f0a4fa4af5.js",revision:"24d7b3f0a4fa4af5"},{url:"/_next/static/chunks/d0c16330-a784489d910cdb17.js",revision:"a784489d910cdb17"},{url:"/_next/static/chunks/d64684d8-ec67d021dfbc3cce.js",revision:"ec67d021dfbc3cce"},{url:"/_next/static/chunks/d7eeaac4-a97db4165d8a277c.js",revision:"a97db4165d8a277c"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-f6865429beeeb05f.js",revision:"f6865429beeeb05f"},{url:"/_next/static/chunks/pages/404-6a1ec95d87be67f1.js",revision:"6a1ec95d87be67f1"},{url:"/_next/static/chunks/pages/_app-4b6c4c905f3eb49d.js",revision:"4b6c4c905f3eb49d"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/about-04ecbf267c34032c.js",revision:"04ecbf267c34032c"},{url:"/_next/static/chunks/pages/blog-88dceb3ac2b72ee3.js",revision:"88dceb3ac2b72ee3"},{url:"/_next/static/chunks/pages/contact-a68d307008e46809.js",revision:"a68d307008e46809"},{url:"/_next/static/chunks/pages/dashboard-b83c6536a37ed6fa.js",revision:"b83c6536a37ed6fa"},{url:"/_next/static/chunks/pages/dashboard/admin-0642935783a18407.js",revision:"0642935783a18407"},{url:"/_next/static/chunks/pages/dashboard/admin/users-67690da9a5a07bce.js",revision:"67690da9a5a07bce"},{url:"/_next/static/chunks/pages/dashboard/blog-8b1eac22255cb497.js",revision:"8b1eac22255cb497"},{url:"/_next/static/chunks/pages/dashboard/blog/new-be96eebe7f28c4ca.js",revision:"be96eebe7f28c4ca"},{url:"/_next/static/chunks/pages/dashboard/blog/posts/%5BpostId%5D/edit-2a3e9650e1a7825d.js",revision:"2a3e9650e1a7825d"},{url:"/_next/static/chunks/pages/dashboard/profile-b66ce4e018e7446e.js",revision:"b66ce4e018e7446e"},{url:"/_next/static/chunks/pages/dashboard/settings-8a53b6e96b512a4e.js",revision:"8a53b6e96b512a4e"},{url:"/_next/static/chunks/pages/index-165144f2808a5954.js",revision:"165144f2808a5954"},{url:"/_next/static/chunks/pages/login-e3f6e4ca17fc9019.js",revision:"e3f6e4ca17fc9019"},{url:"/_next/static/chunks/pages/pricing-3877d5902b0a2bbc.js",revision:"3877d5902b0a2bbc"},{url:"/_next/static/chunks/pages/privacy-946adc896295d6d1.js",revision:"946adc896295d6d1"},{url:"/_next/static/chunks/pages/signup-b425f5d6c6a9f338.js",revision:"b425f5d6c6a9f338"},{url:"/_next/static/chunks/pages/tools-5822d0fe1664f6a9.js",revision:"5822d0fe1664f6a9"},{url:"/_next/static/chunks/pages/tools/%5BtoolName%5D-28619284c196fe93.js",revision:"28619284c196fe93"},{url:"/_next/static/chunks/pages/tools/category/%5BcategoryName%5D-c780465589899b84.js",revision:"c780465589899b84"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-6d3be70020ddae27.js",revision:"6d3be70020ddae27"},{url:"/_next/static/css/7d5c9d8c6cb3b74a.css",revision:"7d5c9d8c6cb3b74a"},{url:"/_next/static/css/90390ef1eee22bb4.css",revision:"90390ef1eee22bb4"},{url:"/_next/static/css/e25a9bb4c587fa9c.css",revision:"e25a9bb4c587fa9c"},{url:"/_next/static/css/efc7cc799a7e0655.css",revision:"efc7cc799a7e0655"},{url:"/_next/static/media/login-illustration.dcf25a12.webp",revision:"5010a6a05b741864c9f7a1afde2a9a0d"},{url:"/_next/static/v1Qv4H0kgU30XRXqQqNnV/_buildManifest.js",revision:"94dedd01c5e57853853c0110eafea112"},{url:"/_next/static/v1Qv4H0kgU30XRXqQqNnV/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/assets/backgrounds/dashboard.jpg",revision:"b5f593c89f21e0f0305c4c64e662ad30"},{url:"/assets/images/Blog.svg",revision:"2962e4aa54064f2de318bd279f5d695c"},{url:"/assets/images/Thumbs.db",revision:"05e59e39f49acc13786671a1a0948b2d"},{url:"/assets/images/blob.svg",revision:"2962e4aa54064f2de318bd279f5d695c"},{url:"/assets/images/chevron-down.svg",revision:"36438d1b748c30a0ac25821f6d40f855"},{url:"/assets/images/chevron-right.svg",revision:"2f4e73f0f79c7296dcbe8d8023aa947d"},{url:"/assets/images/hero-banner.jpg",revision:"7565f46c11ebf33f284ef55335912f65"},{url:"/assets/images/hero-shape.svg",revision:"33ac34450e08a4f9f549353c10920771"},{url:"/assets/images/icon-1.svg",revision:"f5455a0df37f59a701c6b548d9920e2e"},{url:"/assets/images/icon-2.svg",revision:"79b0f69f6938b07a9720de9a992f9d34"},{url:"/assets/images/icon-3.svg",revision:"fc6272c040975b6c843bd5cae17b0a24"},{url:"/assets/images/icon-4.svg",revision:"9c6701a29620e554a2d82cb55bf1f01e"},{url:"/assets/images/icon-5.svg",revision:"c4a7504a9fdd722542cf8cc994367ebf"},{url:"/assets/images/illustration_dashboard.png",revision:"e5e83bd3d3d0c3c5846d159c4369fc60"},{url:"/assets/images/me.png",revision:"ee5eca5034a922cab2537ac3c90fb7e6"},{url:"/assets/images/metaverse-technology.webp",revision:"904062f272f84b84d6f3a5c73d9e3545"},{url:"/assets/images/project-1.png",revision:"5c490b599263d6dc7581cb1d66ed8e20"},{url:"/assets/images/project-2.png",revision:"b34b60cd423b4184fbc4ec7a27577307"},{url:"/assets/images/project-3.png",revision:"5329136f13cfec5602696e65f4f49bd4"},{url:"/assets/images/project-4.png",revision:"8883d5a2f89d04a1b079e352a0904c0f"},{url:"/assets/images/result-site.png",revision:"560225fe749e3fadd73cd96332524467"},{url:"/assets/images/result-site.webp",revision:"0ebbb2dbc2aaf58fec096abac64b4093"},{url:"/assets/images/web-design.svg",revision:"0a6b1c666fff8dd071be1a3465d8580e"},{url:"/assets/images/web-tools.svg",revision:"389e07c0126ec5656b554aa73a6e45a4"},{url:"/assets/images/web-ui-component-library.gif",revision:"5b9cac4c11405eeeb9b27e2701076a9b"},{url:"/assets/svg-images/about-us.svg",revision:"25a43f1e61fac642d8159356983a7b1f"},{url:"/assets/svg-images/blogging.svg",revision:"af082c875a8e43af01d0cd8e44ada03e"},{url:"/assets/svg-images/firebase.svg",revision:"007bad50400405f896843d18f305d894"},{url:"/assets/svg-images/hero-back-illustration.svg",revision:"7eb920ca0b4ea593a1129dd3ed372b8c"},{url:"/assets/svg-images/hero-top-illustration.svg",revision:"aa0f14cb87e54d157f8fa6dd8b3308f4"},{url:"/assets/svg-images/meta-tag-generator.svg",revision:"577dadcb0d2f3766001242750a478e7d"},{url:"/assets/svg-images/projects.svg",revision:"23c14a6e5bc501b6beb47972e6372eeb"},{url:"/assets/svg-images/tools.svg",revision:"ad303c15ae24df0b217be4354635ba43"},{url:"/contact.svg",revision:"16e65ef6889eef923811f1ef18b2bd18"},{url:"/favicon.ico",revision:"2e752a0e74c2651b822d5e537377e950"},{url:"/fonts.css",revision:"478c447ceacd389967ec8f0b8223d32c"},{url:"/kkupgrader.svg",revision:"058c21fed3a534ac5437afaa549c4ead"},{url:"/logo192.png",revision:"d1c9dd3b7427b71eb77a537c0167432c"},{url:"/logo512.png",revision:"89d4ba5cd4bfe6799780ebfbbd34ba4b"},{url:"/manifest.json",revision:"ec4af12daa21ce164dad4485b481b02b"},{url:"/nexoNauts.svg",revision:"482dd661db239ff6183b8b1ea4f2075b"},{url:"/robots.txt",revision:"cf9e4e8b7d34be1a1d23c231a6113254"},{url:"/sitemap.xml",revision:"da8bcb4344a13ce6f132041ae18d7ee8"},{url:"/textLogo.svg",revision:"b0a4b38c408cdecf0a2bc740e9c40527"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
