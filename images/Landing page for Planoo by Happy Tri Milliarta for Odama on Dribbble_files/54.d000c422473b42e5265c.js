(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{417:function(t,e,r){},425:function(t,e,r){"use strict";r.d(e,"a",(function(){return v}));var n=r(359),o=r(16),i=r(1);o.default.use(i.b);function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p={name:"TestApp",props:{message:{type:String,required:!1,default:"Hello default!"}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(i.f)(["text"]))},s=p,a=(r(563),r(0)),f=Object(a.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"test-app"}},[t._v("\n  "+t._s(t.message)+"\n  "),r("span",[t._v(t._s(t.text))])])}),[],!1,null,"92677162",null).exports,l=function(t,e){var r,n=(r=e,new i.b.Store({state:function(){return r}}));return new o.default({store:n,render:function(e){return e(f,{props:t})}})};const b=(t,e,r)=>({contentBlocksApp:n.initializeSSRApp,test:l}[t](e,r)),v=({state:{componentName:t,props:e,storeState:r}})=>({app:b(t,e,r)})},563:function(t,e,r){"use strict";r(417)},869:function(t,e,r){"use strict";r.r(e),r.d(e,"initClientHydration",(function(){return o}));var n=r(425),o=function(){Object(n.a)({state:window.__INITIAL_STATE__}).app.$mount("#ssr-app")}}}]);