"use strict";var precacheConfig=[["app.667445a3ad49a7335de77cc5ca1ce32e.css","667445a3ad49a7335de77cc5ca1ce32e"],["fonts/MaterialIcons-Regular.012cf6a.woff","012cf6a10129e2275d79d6adac7f3b02"],["fonts/Roboto-Bold.ad140ff.woff","ad140ff02a7091257e2b31619106194e"],["fonts/Roboto-Light.37fbbba.woff","37fbbbad5577a95bdf058307c717c882"],["fonts/Roboto-Medium.303ded6.woff","303ded6436dcf7ea75157e2aeff876ce"],["fonts/Roboto-Regular.081b11e.woff","081b11ebaca8ad30fd092e01451015dc"],["fonts/Roboto-Thin.90d3804.woff","90d3804f0231704c15ccc5861245e8ce"],["fonts/materialdesignicons-webfont.1eccbc4.ttf","1eccbc4c41d49fd81840aef3eaabe862"],["fonts/materialdesignicons-webfont.4b13596.woff2","4b1359677a76d07aa0526d2fddbd77b7"],["fonts/materialdesignicons-webfont.6473d7d.woff","6473d7d5a01bb3f8fccd5bbeaf2be312"],["img/right-graphite@2x.f2e09a9.png","f2e09a9743fdb0c7f4dcbe4242441a5d"],["img/trackit.4dbf2ed.png","4dbf2ed5128b084a0b6f9ce268c02558"],["index.html","5918f0825452d1cda1a9c12528cd2333"],["js/0.f943bdda2b5ed37f4a20.js","e4628e42ec459cc1c9c54b57212fb537"],["js/1.e7b24746a88e5cd002fe.js","049c2b640fc69339d6619ca74edd856e"],["js/2.42437bb5a38a70a935ae.js","034c99cf4dc891097b84b12a0e19b5ae"],["js/3.d88f75c675a39088fa52.js","433291cb13a67083e5ed56a87e53e585"],["js/4.222424f05109a5503d07.js","05d9570c7baf63b695487a4f43334b09"],["js/5.7f8c09dc2980ab9997ae.js","e1d708abc5e4ab1b72994ef3ba2bc2b2"],["js/6.4d6c326f830267cd950e.js","d5989c66eeef19b1d889ebdd0f6e4904"],["js/7.34a0862d8c478953c267.js","93623a77ea01c781a7013d99afbe02a9"],["js/app.js","6cba3c6f0cf104be772d3c91ebc6be5e"],["js/manifest.js","d6d61fbeb76c878289c8120dcb5e5672"],["js/vendor.js","1d528ca2a9ff5c2c6492a3c45ac6ed01"],["statics/GitHub-Mark-Light-32px.png","d56df49a807a9fd06eb1667a84d3810e"],["statics/flespi_logo_black.svg","82f983ec2277961e9878f2bf014b13fc"],["statics/icons/apple-icon-152x152.png","906c193b6d193a65add774107b3923db"],["statics/icons/favicon-16x16.png","c81a3f3a982ad3175edf7a78d797ced3"],["statics/icons/favicon-32x32.png","c2f336f76202bb73019843c7ad316def"],["statics/icons/icon-192x192.png","47fc2bc80d4dc7e7835423c0505302e7"],["statics/icons/icon-512x512.png","9a9bf03959ba3eba0bc007f6c7699a33"],["statics/icons/ms-icon-144x144.png","4ca6116897b45c5c22d8e3d3f21576f5"],["statics/manifest.json","e70b8108d642f3e1eda25442d0a2a629"],["statics/mountain.svg","1e3d1da4cf6d85e6e28cc3aae77e3ead"],["statics/right-graphite@2x.png","f2e09a9743fdb0c7f4dcbe4242441a5d"],["statics/track-it-logo.png","ca2124cb4b54895f85dba5fbf32335f0"],["statics/trackit.png","4dbf2ed5128b084a0b6f9ce268c02558"]],cacheName="sw-precache-v3-track-it-0.1.7-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,!1);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));0,a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});