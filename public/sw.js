if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),f={module:{uri:n},exports:t,require:r};s[n]=Promise.all(c.map((e=>f[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404.svg",revision:"86167a16995ecff910461dd93056d9ef"},{url:"/Logo.svg",revision:"59eb6a56a8d02f00a63f7680acbe6727"},{url:"/Profile.svg",revision:"058c21fed3a534ac5437afaa549c4ead"},{url:"/_next/static/6746jRWIofivo-hBSK-uR/_buildManifest.js",revision:"ea37be5dee528fc1040996ac3a902f42"},{url:"/_next/static/6746jRWIofivo-hBSK-uR/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0b308cfb-d3e2c4eaf831c1ce.js",revision:"d3e2c4eaf831c1ce"},{url:"/_next/static/chunks/0c428ae2-15090d0c3c0f4ba7.js",revision:"15090d0c3c0f4ba7"},{url:"/_next/static/chunks/1a48c3c1-5520d8d0feeeaefb.js",revision:"5520d8d0feeeaefb"},{url:"/_next/static/chunks/1bfc9850-c87d1815ea5af73f.js",revision:"c87d1815ea5af73f"},{url:"/_next/static/chunks/2202-2f1b13aeec28e8cf.js",revision:"2f1b13aeec28e8cf"},{url:"/_next/static/chunks/252f366e-388f2d635cae8a23.js",revision:"388f2d635cae8a23"},{url:"/_next/static/chunks/2535-612384fb7f8bce71.js",revision:"612384fb7f8bce71"},{url:"/_next/static/chunks/2962-512cbff874df3040.js",revision:"512cbff874df3040"},{url:"/_next/static/chunks/4459-783f10a1a4814ae1.js",revision:"783f10a1a4814ae1"},{url:"/_next/static/chunks/5053-66948fc989001496.js",revision:"66948fc989001496"},{url:"/_next/static/chunks/6154-6dd821e59fa447d9.js",revision:"6dd821e59fa447d9"},{url:"/_next/static/chunks/6728d85a-58fe7d10267610f9.js",revision:"58fe7d10267610f9"},{url:"/_next/static/chunks/6865-87ab00acfcc8f770.js",revision:"87ab00acfcc8f770"},{url:"/_next/static/chunks/6883-23a81ed56a880ad2.js",revision:"23a81ed56a880ad2"},{url:"/_next/static/chunks/6893-02e9a2bc0f6119e6.js",revision:"02e9a2bc0f6119e6"},{url:"/_next/static/chunks/6c44d60f.1b8155a4c352db49.js",revision:"1b8155a4c352db49"},{url:"/_next/static/chunks/7229.919006a065ec1e50.js",revision:"919006a065ec1e50"},{url:"/_next/static/chunks/78e521c3-6a529526786056de.js",revision:"6a529526786056de"},{url:"/_next/static/chunks/7f0c75c1-aefd61f28f0dd382.js",revision:"aefd61f28f0dd382"},{url:"/_next/static/chunks/814c6784-6ba0f05e0a192aac.js",revision:"6ba0f05e0a192aac"},{url:"/_next/static/chunks/8209.32a752ba7a5f013a.js",revision:"32a752ba7a5f013a"},{url:"/_next/static/chunks/879.989c7ad3ac5a190e.js",revision:"989c7ad3ac5a190e"},{url:"/_next/static/chunks/8f14cc1c.0b84ba69f8bc1f5d.js",revision:"0b84ba69f8bc1f5d"},{url:"/_next/static/chunks/9319.b2fa34d1fea2739e.js",revision:"b2fa34d1fea2739e"},{url:"/_next/static/chunks/9413-d9009ccba13992f4.js",revision:"d9009ccba13992f4"},{url:"/_next/static/chunks/961-343dfd6954844273.js",revision:"343dfd6954844273"},{url:"/_next/static/chunks/9705-38734bd24b083f8d.js",revision:"38734bd24b083f8d"},{url:"/_next/static/chunks/9734-cf4cb6afccb2f4a1.js",revision:"cf4cb6afccb2f4a1"},{url:"/_next/static/chunks/9818-debd2c4b186d11de.js",revision:"debd2c4b186d11de"},{url:"/_next/static/chunks/98ea7ec2-05da65f412a87baf.js",revision:"05da65f412a87baf"},{url:"/_next/static/chunks/9b380ffa-d2440fdc517822ab.js",revision:"d2440fdc517822ab"},{url:"/_next/static/chunks/ae51ba48-8240e26f23649951.js",revision:"8240e26f23649951"},{url:"/_next/static/chunks/c31f1870-5458f9547206c2e4.js",revision:"5458f9547206c2e4"},{url:"/_next/static/chunks/d0c16330-44686e88761220c5.js",revision:"44686e88761220c5"},{url:"/_next/static/chunks/d64684d8-d27dc9e4f08b28df.js",revision:"d27dc9e4f08b28df"},{url:"/_next/static/chunks/d7eeaac4-79facad90754cdab.js",revision:"79facad90754cdab"},{url:"/_next/static/chunks/framework-3671d8951bf44e4e.js",revision:"3671d8951bf44e4e"},{url:"/_next/static/chunks/main-09a31973e65e2e89.js",revision:"09a31973e65e2e89"},{url:"/_next/static/chunks/pages/404-2f052843aaa037cb.js",revision:"2f052843aaa037cb"},{url:"/_next/static/chunks/pages/_app-be2a72c9ba9cfc50.js",revision:"be2a72c9ba9cfc50"},{url:"/_next/static/chunks/pages/_error-bd1da5a6907513b5.js",revision:"bd1da5a6907513b5"},{url:"/_next/static/chunks/pages/about-7bf85dec34f57df4.js",revision:"7bf85dec34f57df4"},{url:"/_next/static/chunks/pages/ai-directory-43c0f6e50838ef1c.js",revision:"43c0f6e50838ef1c"},{url:"/_next/static/chunks/pages/blog-fd08828fc79360de.js",revision:"fd08828fc79360de"},{url:"/_next/static/chunks/pages/blog/posts/%5Bslug%5D-fff179391c08cf54.js",revision:"fff179391c08cf54"},{url:"/_next/static/chunks/pages/contact-e0afb1cabfd1a204.js",revision:"e0afb1cabfd1a204"},{url:"/_next/static/chunks/pages/dashboard-abb7469390e062d9.js",revision:"abb7469390e062d9"},{url:"/_next/static/chunks/pages/dashboard/admin-e4373240634cf66c.js",revision:"e4373240634cf66c"},{url:"/_next/static/chunks/pages/dashboard/admin/analytics-c014d505901c14f6.js",revision:"c014d505901c14f6"},{url:"/_next/static/chunks/pages/dashboard/admin/blog-2c6458705c0ac0df.js",revision:"2c6458705c0ac0df"},{url:"/_next/static/chunks/pages/dashboard/admin/blog/posts/%5BpostId%5D/edit-9e37faa711547187.js",revision:"9e37faa711547187"},{url:"/_next/static/chunks/pages/dashboard/admin/messages-c111cd7c53c2f37d.js",revision:"c111cd7c53c2f37d"},{url:"/_next/static/chunks/pages/dashboard/admin/notifications-a583f89adb914753.js",revision:"a583f89adb914753"},{url:"/_next/static/chunks/pages/dashboard/admin/users-7108b4aa5e891361.js",revision:"7108b4aa5e891361"},{url:"/_next/static/chunks/pages/dashboard/products-20fe7a5c9dd7e07d.js",revision:"20fe7a5c9dd7e07d"},{url:"/_next/static/chunks/pages/dashboard/profile-3e9ae2008a65ee6d.js",revision:"3e9ae2008a65ee6d"},{url:"/_next/static/chunks/pages/dashboard/settings-0e54a323bdd55a69.js",revision:"0e54a323bdd55a69"},{url:"/_next/static/chunks/pages/index-49b753e33bccbc25.js",revision:"49b753e33bccbc25"},{url:"/_next/static/chunks/pages/login-d925ce568ea36729.js",revision:"d925ce568ea36729"},{url:"/_next/static/chunks/pages/pricing-ca86100a05d89a99.js",revision:"ca86100a05d89a99"},{url:"/_next/static/chunks/pages/privacy-39b36a1873cd8a0b.js",revision:"39b36a1873cd8a0b"},{url:"/_next/static/chunks/pages/signup-3224164cf8852631.js",revision:"3224164cf8852631"},{url:"/_next/static/chunks/pages/tools-3ddbe9cc301dc569.js",revision:"3ddbe9cc301dc569"},{url:"/_next/static/chunks/pages/tools/%5BtoolName%5D-af00548f03fef4e1.js",revision:"af00548f03fef4e1"},{url:"/_next/static/chunks/pages/tools/category/%5BcategoryName%5D-c5177506d3d68381.js",revision:"c5177506d3d68381"},{url:"/_next/static/chunks/pages/verify-user-40590dde20f39490.js",revision:"40590dde20f39490"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-99f3e35f6b794807.js",revision:"99f3e35f6b794807"},{url:"/_next/static/css/7f889713920f386b.css",revision:"7f889713920f386b"},{url:"/_next/static/css/90390ef1eee22bb4.css",revision:"90390ef1eee22bb4"},{url:"/_next/static/css/b2a472e98a710f79.css",revision:"b2a472e98a710f79"},{url:"/_next/static/css/e25a9bb4c587fa9c.css",revision:"e25a9bb4c587fa9c"},{url:"/_next/static/css/ef089fd1d328b258.css",revision:"ef089fd1d328b258"},{url:"/_next/static/css/efb4d62f6b24abe3.css",revision:"efb4d62f6b24abe3"},{url:"/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/_next/static/media/login-illustration.dcf25a12.webp",revision:"5010a6a05b741864c9f7a1afde2a9a0d"},{url:"/ads.txt",revision:"6e7a662ab5a79e645f958de8de993927"},{url:"/assets/backgrounds/dashboard.jpg",revision:"b5f593c89f21e0f0305c4c64e662ad30"},{url:"/assets/images/Blog.svg",revision:"2962e4aa54064f2de318bd279f5d695c"},{url:"/assets/images/Thumbs.db",revision:"05e59e39f49acc13786671a1a0948b2d"},{url:"/assets/images/blob.svg",revision:"2962e4aa54064f2de318bd279f5d695c"},{url:"/assets/images/chevron-down.svg",revision:"36438d1b748c30a0ac25821f6d40f855"},{url:"/assets/images/chevron-right.svg",revision:"2f4e73f0f79c7296dcbe8d8023aa947d"},{url:"/assets/images/hero-banner.jpg",revision:"7565f46c11ebf33f284ef55335912f65"},{url:"/assets/images/hero-shape.svg",revision:"33ac34450e08a4f9f549353c10920771"},{url:"/assets/images/icon-1.svg",revision:"f5455a0df37f59a701c6b548d9920e2e"},{url:"/assets/images/icon-2.svg",revision:"79b0f69f6938b07a9720de9a992f9d34"},{url:"/assets/images/icon-3.svg",revision:"fc6272c040975b6c843bd5cae17b0a24"},{url:"/assets/images/icon-4.svg",revision:"9c6701a29620e554a2d82cb55bf1f01e"},{url:"/assets/images/icon-5.svg",revision:"c4a7504a9fdd722542cf8cc994367ebf"},{url:"/assets/images/illustration_dashboard.png",revision:"e5e83bd3d3d0c3c5846d159c4369fc60"},{url:"/assets/images/me.png",revision:"ee5eca5034a922cab2537ac3c90fb7e6"},{url:"/assets/images/metaverse-technology.webp",revision:"904062f272f84b84d6f3a5c73d9e3545"},{url:"/assets/images/project-1.png",revision:"5c490b599263d6dc7581cb1d66ed8e20"},{url:"/assets/images/project-2.png",revision:"b34b60cd423b4184fbc4ec7a27577307"},{url:"/assets/images/project-3.png",revision:"5329136f13cfec5602696e65f4f49bd4"},{url:"/assets/images/project-4.png",revision:"8883d5a2f89d04a1b079e352a0904c0f"},{url:"/assets/images/result-site.png",revision:"560225fe749e3fadd73cd96332524467"},{url:"/assets/images/result-site.webp",revision:"0ebbb2dbc2aaf58fec096abac64b4093"},{url:"/assets/images/web-design.svg",revision:"0a6b1c666fff8dd071be1a3465d8580e"},{url:"/assets/images/web-tools.svg",revision:"389e07c0126ec5656b554aa73a6e45a4"},{url:"/assets/images/web-ui-component-library.gif",revision:"5b9cac4c11405eeeb9b27e2701076a9b"},{url:"/assets/svg-images/about-us.svg",revision:"25a43f1e61fac642d8159356983a7b1f"},{url:"/assets/svg-images/blogging.svg",revision:"af082c875a8e43af01d0cd8e44ada03e"},{url:"/assets/svg-images/firebase.svg",revision:"007bad50400405f896843d18f305d894"},{url:"/assets/svg-images/hero-back-illustration.svg",revision:"7eb920ca0b4ea593a1129dd3ed372b8c"},{url:"/assets/svg-images/hero-top-illustration.svg",revision:"aa0f14cb87e54d157f8fa6dd8b3308f4"},{url:"/assets/svg-images/meta-tag-generator.svg",revision:"577dadcb0d2f3766001242750a478e7d"},{url:"/assets/svg-images/projects.svg",revision:"23c14a6e5bc501b6beb47972e6372eeb"},{url:"/assets/svg-images/tools.svg",revision:"ad303c15ae24df0b217be4354635ba43"},{url:"/contact.svg",revision:"16e65ef6889eef923811f1ef18b2bd18"},{url:"/favicon.ico",revision:"2e752a0e74c2651b822d5e537377e950"},{url:"/fonts.css",revision:"478c447ceacd389967ec8f0b8223d32c"},{url:"/kkupgrader.svg",revision:"058c21fed3a534ac5437afaa549c4ead"},{url:"/logo192.png",revision:"d1c9dd3b7427b71eb77a537c0167432c"},{url:"/logo512.png",revision:"89d4ba5cd4bfe6799780ebfbbd34ba4b"},{url:"/manifest.json",revision:"ec4af12daa21ce164dad4485b481b02b"},{url:"/nexoNauts.svg",revision:"482dd661db239ff6183b8b1ea4f2075b"},{url:"/robots.txt",revision:"cf9e4e8b7d34be1a1d23c231a6113254"},{url:"/sitemap.xml",revision:"5939a2c8aea74f4079718c52a41ced91"},{url:"/textLogo.svg",revision:"b0a4b38c408cdecf0a2bc740e9c40527"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
