/*! For license information please see 7.0eebb69306f1d8790eda.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{19:function(e,t,n){"use strict";n.d(t,"o",(function(){return b})),n.d(t,"n",(function(){return v})),n.d(t,"p",(function(){return m})),n.d(t,"r",(function(){return g})),n.d(t,"q",(function(){return y})),n.d(t,"m",(function(){return w})),n.d(t,"k",(function(){return O})),n.d(t,"c",(function(){return j})),n.d(t,"j",(function(){return I})),n.d(t,"i",(function(){return E})),n.d(t,"d",(function(){return x})),n.d(t,"l",(function(){return _})),n.d(t,"g",(function(){return k})),n.d(t,"b",(function(){return S})),n.d(t,"h",(function(){return L})),n.d(t,"e",(function(){return P})),n.d(t,"a",(function(){return T})),n.d(t,"f",(function(){return D})),n.d(t,"s",(function(){return A}));var r=n(6),i=n.n(r),o=(n(17),n(96)),a=n(12);n(45);function c(){c=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function d(e,t,n,r){var o=t&&t.prototype instanceof g?t:g,a=Object.create(o.prototype),c=new T(r||[]);return i(a,"_invoke",{value:k(e,n,c)}),a}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=d;var p="suspendedStart",h="suspendedYield",b="executing",v="completed",m={};function g(){}function y(){}function w(){}var O={};s(O,a,(function(){return this}));var j=Object.getPrototypeOf,I=j&&j(j(D([])));I&&I!==n&&r.call(I,a)&&(O=I);var E=w.prototype=g.prototype=Object.create(O);function x(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function n(i,o,a,c){var u=f(e[i],e,o);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&r.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,a,c)}),(function(e){n("throw",e,a,c)})):t.resolve(s).then((function(e){l.value=e,a(l)}),(function(e){return n("throw",e,a,c)}))}c(u.arg)}var o;i(this,"_invoke",{value:function(e,r){function i(){return new t((function(t,i){n(e,r,t,i)}))}return o=o?o.then(i,i):i()}})}function k(t,n,r){var i=p;return function(o,a){if(i===b)throw Error("Generator is already running");if(i===v){if("throw"===o)throw a;return{value:e,done:!0}}for(r.method=o,r.arg=a;;){var c=r.delegate;if(c){var u=S(c,r);if(u){if(u===m)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===p)throw i=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=b;var l=f(t,n,r);if("normal"===l.type){if(i=r.done?v:h,l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(i=v,r.method="throw",r.arg=l.arg)}}}function S(t,n){var r=n.method,i=t.iterator[r];if(i===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var o=f(i,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function D(t){if(t||""===t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return y.prototype=w,i(E,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:y,configurable:!0}),y.displayName=s(w,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,s(e,l,"GeneratorFunction")),e.prototype=Object.create(E),e},t.awrap=function(e){return{__await:e}},x(_.prototype),s(_.prototype,u,(function(){return this})),t.AsyncIterator=_,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new _(d(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},x(E),s(E,l,"Generator"),s(E,a,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=D,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return c.type="throw",c.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),P(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;P(n)}return i}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:D(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}function u(e,t,n,r,i,o,a){try{var c=e[o](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,i)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){u(o,r,i,a,c,"next",e)}function c(e){u(o,r,i,a,c,"throw",e)}a(void 0)}))}}function s(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=[{label:"High resolution images (png, jpg, gif)"},{label:"Videos (mp4)"},{label:"Animated gifs"},{label:"Only upload media you own the rights to"}],v=[{label:"High resolution images (png, jpg, gif)",requiresPro:!1},{label:"Videos (mp4, 4:3, <60 secs)",requiresPro:!0},{label:"Animated gifs (4:3, 800x600 - 1600x1200)",requiresPro:!1},{label:"Only upload media you own the rights to",requiresPro:!1}],m=["image/jpg","image/jpeg","image/pjpeg","image/png","image/apng","image/x-png","image/gif","image/webp"],g=["video/mp4","video/quicktime","video/webm"],y=g,w=[].concat(m,g),O=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return{dimensions:{maxHeight:16e3,maxWidth:16e3,minHeight:n?50:300,minWidth:n?50:400},maxFileSize:10485760,maxVideoFileSize:arguments.length>2&&void 0!==arguments[2]&&arguments[2]?104857600:20971520,mediaConstraints:p(p({},t&&{animation:{exactDimensions:["400x300","800x600","1600x1200"]}}),{},{video:{aspectRatio:t}}),permittedMimeTypes:[].concat(m,s(e?g:[]))}},j={maxFileSize:104857600},I=function(e){return e?8:1},E=function(e){return e?5:1},x=function(){var e=l(c().mark((function e(){var t,n,r,a,u,l=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]&&l[0],n=l.length>1&&void 0!==l[1]?l[1]:"default",e.prev=2,e.next=5,i.a.get("/client_app/js_config/direct_upload",{params:p({kind:n},t&&{is_job:t})});case 5:if(a=e.sent,u=null==(r=a.data)?void 0:r.data){e.next=9;break}throw new Error("Metadata not found: ".concat(JSON.stringify(a)));case 9:return e.abrupt("return",u);case 12:throw e.prev=12,e.t0=e.catch(2),Object(o.a)("Getting direct upload meta data failed",e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}(),_=function(e){var t=e.uploadComplete,n=e.uploadFailed,r=e.bytesUploaded,i=void 0===r?0:r,o=e.bytesTotal,a=0;return t||n||(a=i/(void 0===o?1:o)*100),a},k=function(e){var t=e.error,n=e.fileName,r=e.context,i=e.isPro,o=e.isVideoIntroductions,c=e.isAvatar,u=e.maxFileSize,l="";switch(t instanceof Error?t.message:t){case"INVALID_MAX_FILES":i?("media"===r&&(l="Whoa, there! That's a lot of files. You can only upload ".concat(I(i)," per shot.")),"downloads"===r&&(l="Whoa, there! That's a lot of files. You can only upload ".concat(E(i)," downloads per shot."))):l='Upgrade to Pro to add more than one image to a shot! <a href="/pro" target="_blank">Go Pro</a>';break;case"INVALID_MAX_VIDEO_FILE_SIZE":l="Your file needs to be under ".concat(Object(a.a)(O(i,!0,o).maxVideoFileSize));break;case"INVALID_MAX_FILE_SIZE":"media"===r&&(l="Your file needs to be under ".concat(Object(a.a)(u||O(i).maxFileSize))),"downloads"===r&&(l="Your file needs to be under ".concat(Object(a.a)(u||j.maxFileSize)));break;case"INVALID_MAX_DIMENSIONS":l="Your file's dimensions should be no more than ".concat(O(i).dimensions.maxWidth,"x").concat(O(i).dimensions.maxHeight,".");break;case"INVALID_MAX_FILE_DURATION":l="Your video duration can't be longer than 60 seconds.";break;case"INVALID_MIN_DIMENSIONS":l="Go big or go home. Your file's dimensions should be at least ".concat(O(i,!0,!1,c).dimensions.minWidth,"x").concat(O(i,!0,!1,c).dimensions.minHeight,".");break;case"INVALID_EXACT_FILE_RATIO":l="Your file is not in a 4:3 aspect ratio.";break;case"INVALID_EXACT_FILE_DIMENSIONS":l="Your animated file must be 400x300, 800x600, or 1600x1200.";break;case"INVALID_FILE_TYPES":l="We don't support this file type";break;case"INVALID_VIDEO_FILE":l='Upgrade to Pro to upload videos. <a href="/pro" target="_blank">Go Pro</a>';break;case"FILE_CORRUPT":l="Your file appears to be corrupted.";break;default:l="Uh oh! Something went wrong with the upload. Please try again."}Dribbble.EventBus.$emit("siteNotifications:add",{message:l,title:n||"Upload error"})},S=function(e){var t=e.error,n=e.fileName,r=e.isPro,i=void 0===r||r,o=t instanceof Error?t.message:t,c={INVALID_MAX_VIDEO_FILE_SIZE:"Your file needs to be under ".concat(Object(a.a)(O(i).maxVideoFileSize)),INVALID_MAX_FILE_SIZE:"Your file needs to be under ".concat(Object(a.a)(O(i).maxFileSize)),INVALID_MAX_DIMENSIONS:"Your file's dimensions should be no more than ".concat(O(i).dimensions.maxWidth,"x").concat(O(i).dimensions.maxHeight,"."),INVALID_MIN_DIMENSIONS:"Go big or go home. Your file's dimensions should be at least ".concat(O(i).dimensions.minWidth,"x").concat(O(i).dimensions.minHeight,"."),INVALID_FILE_TYPES:"We don't support this file type",FILE_CORRUPT:"Your file appears to be corrupted."},u=c[Object.keys(c).find((function(e){return o.includes(e)}))]||"Uh oh! Something went wrong with the upload. Please try again.";Dribbble.EventBus.$emit("siteNotifications:add",{message:u,title:n||"Upload error"})},L=function(e){var t=e.split("/");return t.slice(t.length-2).join("/")},P=function(){var e=l(c().mark((function e(t){var n,r,i,o,u,l,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.file,r=t.generatePreviews,i=Object(a.f)(n),o=n.name?n.name:"image"===i.split("/")[0]?"".concat(i.split("/")[0],".").concat(i.split("/")[1]):"noname",u=Number.isFinite(n.size)?n.size:null,l=Object(a.e)(o).extension||null,u&&l){e.next=7;break}throw new Error("FILE_CORRUPT");case 7:return s={source:n.source||"",id:Object(a.c)(),name:o,extension:Object(a.e)(o).extension||"",type:i,data:n,progress:{bytesUploaded:0,bytesTotal:0,uploadComplete:!1,uploadStarted:!1},size:u,sizeReadable:Object(a.a)(u),remote:n.remote||""},r&&(s=p(p({},s),{keepOriginal:!1,croppedDetails:{},previewCropped:null,preview:null,isSelected:!1})),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(e,t){var n=Object(a.g)(e.type);return new Promise((function(r,i){t.permittedMimeTypes&&(t.permittedMimeTypes.some((function(t){return t===e.type}))||i("video"===n?new Error("INVALID_VIDEO_FILE"):new Error("INVALID_FILE_TYPES")));"video"===n&&void 0!==t.maxVideoFileSize?e.size>t.maxVideoFileSize&&i(new Error("INVALID_MAX_VIDEO_FILE_SIZE")):void 0!==t.maxFileSize&&e.size>t.maxFileSize&&i(new Error("INVALID_MAX_FILE_SIZE")),r()}))},D=function(e,t){return e.map((function(e,n){var r=e.mediaType;"still"===e.mediaType?r="image":"animation"===e.mediaType&&(r="gif");var i={id:e.id,type:r,mediaUrl:e.url||e.preview,thumbnailUrl:e.largestStillUrl||e.previewCropped||e.preview,croppedDetails:e.croppedDetails,keepOriginal:e.keepOriginal,isLocked:t&&0===n};return e.progress&&(i.progress=Math.floor(100*e.progress.bytesUploaded/e.progress.bytesTotal)||0,i.uploadFailed=e.progress.uploadFailed||!1),i}))},A=function(e){return e.split(".").pop().split("?")[0]}},26:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return a}));var r="video",i="image",o="gif",a=[r,i]},359:function(e,t,n){"use strict";n.r(t),n.d(t,"initializeApp",(function(){return y})),n.d(t,"initializeSSRApp",(function(){return w}));var r=n(16),i=n(102),o=n.n(i),a=n(422),c=n(5),u={closeSVG:'\n    <svg class="pswp__icn" aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">\n      <path fill="currentColor" d="M11.53 1.53A.75.75 0 0 0 10.47.47L6 4.94 1.53.47A.75.75 0 1 0 .47 1.53L4.94 6 .47 10.47a.75.75 0 1 0 1.06 1.06L6 7.06l4.47 4.47a.75.75 0 1 0 1.06-1.06L7.06 6l4.47-4.47Z"/>\n    </svg>\n  ',zoomSVG:'\n    <svg class="pswp__icn" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n      <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M13.854 14.9147C12.5764 15.9577 10.9446 16.5833 9.16667 16.5833C5.07056 16.5833 1.75 13.2628 1.75 9.16667C1.75 5.07056 5.07056 1.75 9.16667 1.75C13.2628 1.75 16.5833 5.07056 16.5833 9.16667C16.5833 10.9446 15.9577 12.5764 14.9147 13.854L18.0303 16.9697C18.3232 17.2626 18.3232 17.7374 18.0303 18.0303C17.7374 18.3232 17.2626 18.3232 16.9697 18.0303L13.854 14.9147ZM3.25 9.16667C3.25 5.89898 5.89898 3.25 9.16667 3.25C12.4344 3.25 15.0833 5.89898 15.0833 9.16667C15.0833 10.7631 14.4511 12.2118 13.4234 13.2761C13.396 13.2968 13.3696 13.3197 13.3447 13.3447C13.3197 13.3696 13.2968 13.396 13.2761 13.4234C12.2118 14.4511 10.7631 15.0833 9.16667 15.0833C5.89898 15.0833 3.25 12.4344 3.25 9.16667Z" />\n      <path class="pswp__zoom-icn-bar-v" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M9.16666 5.91666C9.58087 5.91666 9.91666 6.25244 9.91666 6.66666V11.6667C9.91666 12.0809 9.58087 12.4167 9.16666 12.4167C8.75244 12.4167 8.41666 12.0809 8.41666 11.6667V6.66666C8.41666 6.25244 8.75244 5.91666 9.16666 5.91666Z" />\n      <path class="pswp__zoom-icn-bar-h" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M5.91666 9.16666C5.91666 8.75244 6.25244 8.41666 6.66666 8.41666H11.6667C12.0809 8.41666 12.4167 8.75244 12.4167 9.16666C12.4167 9.58087 12.0809 9.91666 11.6667 9.91666H6.66666C6.25244 9.91666 5.91666 9.58087 5.91666 9.16666Z" />\n    </svg>\n  ',downloadSVG:'\n    <svg class="pswp__icn" aria-hidden="true" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M16.625 16.625H2.375M14.25 8.70833L9.5 13.4583M9.5 13.4583L4.75 8.70833M9.5 13.4583V2.375" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n    </svg>\n  '},l=n(46),s=function(e){return e.sort((function(e,t){return e.position-t.position}))};function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h="is-lightbox-open",b={name:"ShotContentBlocksApp",components:{BasicMediaBlockView:function(){return Promise.all([n.e(0),n.e(5),n.e(71)]).then(n.bind(null,875))},ShotBlockView:function(){return Promise.all([n.e(8),n.e(0),n.e(5),n.e(50)]).then(n.bind(null,876))},SlideshowBlockView:function(){return Promise.all([n.e(1),n.e(41),n.e(0),n.e(5),n.e(42)]).then(n.bind(null,877))},LinkBlockBase:function(){return Promise.all([n.e(0),n.e(57)]).then(n.bind(null,523))},FormattedText:function(){return Promise.all([n.e(8),n.e(58)]).then(n.bind(null,809))}},props:{description:{type:String,default:null},contentBlocks:{type:Object,default:function(){return{results:[]}}},isShotOverlay:{type:Boolean,default:!1},isCaseStudy:{type:Boolean,default:!1},shouldHideShotMedia:{type:Boolean,default:!1},overlayElement:{type:String,default:".js-overlay-content"}},data:function(){return{IMAGE_TYPE:c.i,VIDEO_TYPE:c.w,TEXT_TYPE:c.u,SHOT_TYPE:c.p,SLIDESHOW_TYPE:c.q,LINK_TYPE:c.l,contentBlocksArr:Object(c.T)(this.contentBlocks.results),isMounted:!1,lightbox:null}},computed:{sortedContentBlocks:function(){var e=this.contentBlocksArr||[],t=!this.isCaseStudy&&this.shouldHideShotMedia?s(e).slice(1):s(e);return t.filter((function(e){var t,n,r;return[c.i,c.w].includes(e.contentType)?0!==(null==(t=e.content)||null==(n=t.media)?void 0:n.length):e.contentType!==c.l||Object(l.c)(null==(r=e.content)?void 0:r.url)}))}},mounted:function(){var e=this;this.isMounted=!0;var t=o()(this.initLightbox,50);Dribbble.EventBus.$on("lightbox-item:mounted",(function(){t()})),this.isShotOverlay&&(Dribbble.EventBus.$on("shot-overlay:navigate",(function(){e.$destroy()})),Dribbble.EventBus.$on("shot-overlay:hide",(function(){e.$destroy()})))},destroyed:function(){this.destroyLightbox()},methods:{destroyLightbox:function(){this.lightbox&&this.lightbox.destroy(),document.body.classList.remove(h)},initLightbox:function(){this.destroyLightbox(),this.lightbox=new a.a(f(f({gallery:"a[data-photoswipe-image]",secondaryZoomLevel:"fill",doubleTapAction:!1},u),{},{pswpModule:function(){return n.e(64).then(n.bind(null,868))}})),this.lightbox.addFilter("clickedIndex",(function(e){return document.body.classList.contains("is-carousel-dragging")?-1:e})),this.lightbox.addFilter("placeholderSrc",(function(e,t){var n,r,i=(null==(n=t.data)?void 0:n.msrc)||e;if(null==t||null==(r=t.data)||!r.thumbCropped)return i;var o=new URL(i),a=o.searchParams.get("resize");if(!a)return i;var c=a.split("x")[0];return o.searchParams.set("resize","".concat(c,"x")),o.toString()})),this.lightbox.on("beforeOpen",(function(){document.body.classList.add(h)})),this.lightbox.on("closingAnimationEnd",(function(){document.body.classList.remove(h)})),this.lightbox.init()}}},v=b,m=(n(561),n(562),n(0)),g=Object(m.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"shot-page-container",attrs:{id:"ssr-app"}},[e.description?n("div",{staticClass:"content-block-container"},[n("formatted-text",{staticClass:"content-block",attrs:{format:"html",content:e.description}})],1):e._e(),e._v(" "),e.sortedContentBlocks.length?e._l(e.sortedContentBlocks,(function(t){return n("div",{key:t.id,staticClass:"content-block-container",class:{"full-width":t.content.isFullWidth,"shot-only":!e.isCaseStudy},attrs:{"data-test":"content-block-"+t.id}},[[e.IMAGE_TYPE,e.VIDEO_TYPE].includes(t.contentType)?n("basic-media-block-view",{staticClass:"content-block",attrs:{block:t}}):e._e(),e._v(" "),t.contentType===e.TEXT_TYPE?n("formatted-text",{staticClass:"content-block",attrs:{format:"json",content:t.content.text}}):e._e(),e._v(" "),t.contentType===e.SHOT_TYPE?n("shot-block-view",{attrs:{block:t}}):e._e(),e._v(" "),t.contentType===e.SLIDESHOW_TYPE?n("slideshow-block-view",{attrs:{block:t}}):e._e(),e._v(" "),t.contentType===e.LINK_TYPE?n("link-block-base",{attrs:{block:t}}):e._e()],1)})):e._e()],2)}),[],!1,null,"7bc368fc",null).exports,y=function(e){var t=e.description,n=e.contentBlocks,i=e.isCaseStudy,o=e.isShotOverlay,a=e.overlayElement;new r.default({el:"#shot-content-blocks-app",name:"ShotContentBlocksApp",render:function(e){return e(g,{props:{description:t,contentBlocks:n,isCaseStudy:i,isShotOverlay:o,overlayElement:a}})}})},w=function(e){return new r.default({render:function(t){return t(g,{props:e})}})};t.default={initializeApp:y}},415:function(e,t,n){},416:function(e,t,n){},5:function(e,t,n){"use strict";n.d(t,"u",(function(){return E})),n.d(t,"i",(function(){return x})),n.d(t,"w",(function(){return _})),n.d(t,"p",(function(){return k})),n.d(t,"q",(function(){return S})),n.d(t,"l",(function(){return L})),n.d(t,"b",(function(){return T})),n.d(t,"v",(function(){return D})),n.d(t,"j",(function(){return A})),n.d(t,"g",(function(){return C})),n.d(t,"h",(function(){return N})),n.d(t,"a",(function(){return V})),n.d(t,"k",(function(){return F})),n.d(t,"o",(function(){return M})),n.d(t,"d",(function(){return U})),n.d(t,"t",(function(){return B})),n.d(t,"s",(function(){return z})),n.d(t,"r",(function(){return H})),n.d(t,"f",(function(){return G})),n.d(t,"e",(function(){return W})),n.d(t,"n",(function(){return R})),n.d(t,"m",(function(){return X})),n.d(t,"P",(function(){return Z})),n.d(t,"S",(function(){return $})),n.d(t,"E",(function(){return q})),n.d(t,"y",(function(){return J})),n.d(t,"R",(function(){return K})),n.d(t,"N",(function(){return Q})),n.d(t,"x",(function(){return ee})),n.d(t,"O",(function(){return ne})),n.d(t,"z",(function(){return re})),n.d(t,"A",(function(){return ie})),n.d(t,"Q",(function(){return oe})),n.d(t,"B",(function(){return ae})),n.d(t,"H",(function(){return ue})),n.d(t,"I",(function(){return le})),n.d(t,"F",(function(){return se})),n.d(t,"C",(function(){return fe})),n.d(t,"L",(function(){return he})),n.d(t,"D",(function(){return be})),n.d(t,"K",(function(){return ve})),n.d(t,"J",(function(){return me})),n.d(t,"c",(function(){return ge})),n.d(t,"M",(function(){return ye})),n.d(t,"G",(function(){return we})),n.d(t,"T",(function(){return Oe}));var r=n(9),i=n(232),o=n(233),a=n(234),c=n(235),u=n(236),l=n(237),s=n(242),d=n(238),f=n(239),p=n(240),h=n(241),b=n(11),v=n.n(b),m=n(8),g=n(19),y=n(26),w=["mediaType","fileExtension"];function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){I(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function I(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E="text",x="image",_="video",k="shot",S="slideshow",L="link",P=[E,x,_,k,S,L],T="bold",D="underline",A="italic",C="Heading 1",N="Heading 2",V="Body",F="left",M="right",U="center",B="paragraphOnly",Y="headingOnly",z="paragraph",H="heading",G="up",W="down",R="cover",X="contain",Z=[R,X],$=[T,A,D],q=[C,N,V],J=[F,M,U],K=$.map((function(e){return{value:e,iconType:e}})),Q=$.map((function(e){return{value:e,iconType:e,isDisabled:e===T}})),ee=[{value:F,iconType:"leftAlign"},{value:U,iconType:"centerAlign"},{value:M,iconType:"rightAlign"}],te="Live work",ne=[{value:te,label:"View live work"},{value:"Download",label:"Download file"},{value:"Purchase",label:"Purchase"}],re=Object(m.h)({id:Object(m.g)([Object(m.d)(),Object(m.i)()]),contentType:Object(m.f)(P),position:Object(m.d)(),content:Object(m.h)({media:Object(m.b)(Object(m.h)({id:Object(m.i)(),type:Object(m.f)([y.b,y.c]),width:Object(m.d)(),height:Object(m.d)(),fileExtension:Object(m.i)(),shrineCacheId:Object(m.g)([null,void 0,Object(m.i)()])}).loose)}).loose,userUploadsAttributes:Object(m.b)(Object(m.h)({shrineCacheId:Object(m.i)(),fileDetails:Object(m.h)({id:Object(m.g)([Object(m.d)(),Object(m.i)()]),storage:Object(m.i)()}).loose,originalUrl:Object(m.g)([null,void 0,Object(m.i)()]),stillUrl:Object(m.g)([null,void 0,Object(m.i)()]),largeVideoUrl:Object(m.g)([null,void 0,Object(m.i)()]),smallVideoUrl:Object(m.g)([null,void 0,Object(m.i)()]),height:Object(m.g)([null,void 0,Object(m.d)()]),width:Object(m.g)([null,void 0,Object(m.d)()])}).loose)}).loose,ie=Object(m.h)({shouldVideoAutoplay:Object(m.c)(),shouldVideoLoop:Object(m.c)(),alt:Object(m.i)()}).loose.def((function(){return{}})),oe=I(I(I(I(I(I({},E,{category:"Basic",type:E,label:"Text",iconType:"text",secondarySidebarType:E}),x,{category:"Basic",type:x,label:"Image",iconType:"imageLine"}),_,{category:"Basic",type:_,label:"Video",iconType:"videoLine"}),L,{category:"Basic",type:L,label:"Custom Link",iconType:"v2LinkExternal01",featureFlag:"caseStudiesLinkBlock",disabledCallback:function(e){return e.some((function(e){return e.contentType===L}))?"Only one link block is allowed per case study.":null}}),S,{category:"Rich media",type:S,label:"Gallery",iconType:"galleryLine"}),k,{category:"Past work",type:k,label:"Shot",iconType:"singleShotLine",secondarySidebarType:k,featureFlag:"caseStudiesShotBlock"}),ae={alt:"",shouldVideoLoop:!0,shouldVideoAutoplay:!0},ce=function(e){return"animation"===e?x:e},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{content:j(j({},ae),{},{isFullWidth:e})}},le=function(e){switch(e){case x:case _:return ue();case S:return{content:{slides:[],isFullWidth:!1},temp:{currentCarouselIndex:0}};case L:return{content:{url:"",linkType:te}};default:return{content:{}}}},se=function(e){return g.r.includes(e)?_:x},de=function(e,t){return{type:e,content:[{type:"text",text:t}]}},fe=function(e){var t,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=n?"Enter your text here...":"",i=n?"Heading":"";switch(e){case B:t=[de(z,r)];break;case Y:t=[de(H,i)];break;default:t=[de(H,i),de(z,r)]}return function(e){return{type:"doc",content:e}}(t)},pe=function(e){return Object(r.h)(e,[i.a,a.a,o.a,f.a,c.a,u.a,s.a,l.a,d.a,p.a,h.a])},he=function(e){var t=e.s3SourceUrl,n=e.mediaUrl,r=e.mediaType,i=e.paragraph,o=e.heading,a=i?pe(i):fe(B),c=o?pe("<h2>".concat(o,"</h2>")):fe(Y);return{content:j(j({media:[{id:Object(g.h)(t),shrineCacheId:Object(g.h)(t),type:ce(r),fileExtension:Object(g.s)(t)}]},ae),{},{mediaId:Object(g.h)(t),paragraph:a,heading:c,isFullWidth:!1,isMediaVisible:!0,isHeadingVisible:!0,isParagraphVisible:!0}),temp:{media:[{id:Object(g.h)(t),previewUrl:n,uploadProgress:0,uploadFailed:null,uploadCancelToken:null}]},userUploadsAttributes:[{fileDetails:{storage:"cache",id:Object(g.h)(t)},shrineCacheId:Object(g.h)(t)}]}},be=function(e,t,n){return[[{iconType:"lineArrowUp",eventName:"move-up",tooltipDescription:"Move up",isDisabled:1===t||0===e},{iconType:"lineArrowDown",eventName:"move-down",tooltipDescription:"Move down",isDisabled:1===t||e+1===t}],[{iconType:"copy",eventName:"duplicate",tooltipDescription:"Duplicate",isDisabled:!n}],[{iconType:"lineTrash",eventName:"delete",tooltipDescription:"Delete",isDestructive:!0}]]},ve=function(e,t){var n=e.findIndex((function(e){return t===e})),r=n;return n+1<e.length?r++:r=0,e[r]},me=function(e){var t=e.subjectType,n=e.contentType,r=e.content,i=e.userUploadsAttributes,o=e.temp;return{id:Dribbble.uuidv4(),subjectType:t,contentType:n,content:r,userUploadsAttributes:i,temp:j(j({},o),{},{isNew:!0})}},ge={get:function(e){var t,n,r,i,o,a,c=e.block,u=e.mediaId,l=void 0===u?null:u;l=l||(null==(t=c.content)?void 0:t.mediaId);var s=null==c||null==(n=c.content)||null==(r=n.media)?void 0:r.find((function(e){return e.id===l})),d=null==c||null==(i=c.temp)||null==(o=i.media)?void 0:o.find((function(e){return e.id===l})),f=s?null==c||null==(a=c.userUploadsAttributes)?void 0:a.find((function(e){return e.shrineCacheId===s.shrineCacheId})):null;return{media:s,tempMedia:d,userUpload:f}},getInitialData:function(e){var t,n,r,i,o=e.block,a=e.processedFile,c=e.mediaId,u=void 0===c?Dribbble.uuidv4():c;return{media:{id:u,shrineCacheId:null==(t=this.get({block:o,mediaId:u}))||null==(n=t.media)?void 0:n.shrineCacheId,type:ce(a.mediaType),fileExtension:a.extension,width:null==(r=a.dimensions)?void 0:r.width,height:null==(i=a.dimensions)?void 0:i.height},tempMedia:{id:u,previewUrl:a.preview,uploadProgress:0,uploadFailed:null,uploadCancelToken:null},userUpload:null}},url:function(e){var t=e.block,n=e.mediaId,r=void 0===n?null:n,i=e.elementWidth,o=void 0===i?null:i,a=e.isStill,c=void 0!==a&&a,u=this.get({block:t,mediaId:r}),l=u.tempMedia,s=u.userUpload;if(null!=l&&l.previewUrl)return null==l?void 0:l.previewUrl;var d=this.type({block:t,mediaId:r}),f=s||{},p=f.smallVideoUrl,h=f.largeVideoUrl,b=f.originalUrl,v=f.stillUrl;if(d===y.c){if(c)return v||"";if(!o)return h||b;if(o<500&&p)return p;if(o<900&&h)return h}return b},type:function(e){var t=e.block,n=e.mediaId,r=void 0===n?null:n,i=this.get({block:t,mediaId:r}).media;return(null==i?void 0:i.type)||x},fullType:function(e){var t=e.block,n=e.mediaId,r=void 0===n?null:n,i=this.get({block:t,mediaId:r}).media;return"gif"===(null==i?void 0:i.fileExtension)?"animation":this.type({block:t,mediaId:r})},aspect:function(e){var t=e.block,n=e.mediaId,r=void 0===n?null:n,i=this.get({block:t,mediaId:r}).media;return((null==i?void 0:i.width)||16)/((null==i?void 0:i.height)||9)},uploadProgress:function(e){var t=e.block,n=e.mediaId,r=void 0===n?null:n,i=this.get({block:t,mediaId:r}).tempMedia;return(null==i?void 0:i.uploadProgress)||0}},ye=function(e){var t=e.property,n=e.contentPath,r=void 0===n?"":n;return r?"".concat(r,".").concat(t):t},we=function(e){var t=e.block,n=e.property,r=e.contentPath,i=ye({contentPath:void 0===r?"":r,property:n});return v()(null==t?void 0:t.content,i)},Oe=function(e){return e.map((function(e){if(e.content.media)return e;var t=e.userUploadsAttributes,n=e.content,r=n.mediaType,i=n.fileExtension,o=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(n,w);if(!t||!t.length)return e;var a=t[0],c=a.shrineCacheId,u=a.originalUrl,l=a.width,s=a.height,d=j(j(j({},ae),o),{},{mediaId:t[0].shrineCacheId});return d.media=[{id:c,shrineCacheId:c,width:l,height:s,type:r,fileExtension:i||Object(g.s)(u)}],e.content=d,e}))}},561:function(e,t,n){"use strict";n(415)},562:function(e,t,n){"use strict";n(416)},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e,t){var n=e instanceof Error?e.toString():e,r="";return t&&(t instanceof Error||"string"===typeof t)&&(r="\n".concat(t.toString())),new Error("".concat(n).concat(r))}}}]);