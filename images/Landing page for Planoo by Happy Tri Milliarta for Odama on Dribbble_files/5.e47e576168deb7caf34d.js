(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{193:function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return r}));var a=i(46),o=function(t){var e=t.mediaUrl,i=t.width,o=t.height,s=void 0===o?"":o;return Object(a.a)(e,{resize:"".concat(i,"x").concat(s)})},s=function(t){var e=t.mediaUrl,i=t.appendHeight,o=void 0!==i&&i;return decodeURIComponent(Object(a.a)(e,{resize:o?"{width}x{height}":"{width}x",vertical:"center"}))},r=function(t){var e=t.mediaUrl,i=t.widths,a=t.aspectRatio;return e?i.map((function(t){var i=Math.round(t/a),s=o({mediaUrl:e,width:t,height:i});return"".concat(s," ").concat(t,"w")})).join(", "):""}},196:function(t,e,i){"use strict";var a={name:"VImg",props:{refId:{type:[Number,String],required:!1,default:""},src:{type:String,default:null},altImageText:{type:String,default:null},srcset:{type:String,default:null},dataSrc:{type:String,default:null},dataSrcset:{type:String,default:null},dataAspectRatio:{type:Number,default:null},isLazyLoaded:{type:Boolean,default:!1},sizes:{type:String,default:null},width:{type:Number,default:null},height:{type:Number,default:null}},mounted:function(){this.isLazyLoaded&&this.$el.classList.add("lazyload")},methods:{emitImageLoad:function(t){this.$emit("image-load",{id:this.refId,el:t.target})}}},o=i(0),s=Object(o.a)(a,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{staticClass:"v-img",attrs:{"data-test":"v-img",src:t.src,alt:t.altImageText,width:t.width,height:t.height,srcset:t.srcset,"data-src":t.isLazyLoaded&&t.dataSrc,"data-srcset":t.isLazyLoaded&&t.dataSrcset,"data-sizes":t.isLazyLoaded?"auto":null,"data-aspectratio":t.isLazyLoaded&&t.dataAspectRatio,sizes:!t.isLazyLoaded&&t.sizes,draggable:!1},on:{load:t.emitImageLoad}})}),[],!1,null,null,null);e.a=s.exports},335:function(t,e,i){"use strict";var a=i(15),o="native",s="custom",r={name:"VVideo",components:{Icon:a.default},props:{refId:{type:[Number,String],required:!1,default:""},src:{type:String,required:!0},playsInline:{type:Boolean,default:!0},isLooped:{type:Boolean,default:!1},shouldPlay:{type:Boolean,default:!1},shouldAutoplay:{type:Boolean,default:!1},videoClass:{type:String,default:""},controlType:{type:String,default:s,validator:function(t){return[s,o].includes(t)}},shouldToggleMuteOnVideoClick:{type:Boolean,default:!1},shouldUseCustomProgressBar:{type:Boolean,default:!1}},data:function(){return{hasAudio:!1,isMuted:!0,videoProgress:0,tooltipOptions:{placement:"bottom",duration:[0,0],arrow:!0,arrowTransform:"scale(0.75)",hideOnClick:!1},CUSTOM_CONTROLS:s}},computed:{shouldUseNativeControls:function(){return this.controlType===o}},watch:{shouldPlay:{handler:function(t){var e=this.$refs.video;t?e.play():e.pause()}}},mounted:function(){this.$refs.video&&(this.videoRef=this.$refs.video)},methods:{toggleMute:function(){this.isMuted=!this.isMuted},updateProgressBar:function(){var t=this.$refs,e=t.video,i=t.progressBar;if(e&&i){var a=e.currentTime/e.duration*100;this.videoProgress=a}},scrubVideo:function(t){var e=this.$refs,i=e.video,a=e.progressBarContainer;if(i&&a){var o=t.offsetX/a.offsetWidth*i.duration;i.currentTime=o}},setHasAudio:function(){var t,e=this.$refs.video;this.hasAudio=(null==e?void 0:e.mozHasAudio)||Boolean(null==e?void 0:e.webkitAudioDecodedByteCount)||Boolean(null==e||null==(t=e.audioTracks)?void 0:t.length)},onLoadedData:function(t){this.$emit("video-load",{id:this.refId,el:t.target})}}},n=(i(532),i(0)),d=Object(n.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v-video",on:{click:function(e){t.shouldToggleMuteOnVideoClick&&t.controlType===t.CUSTOM_CONTROLS&&t.toggleMute()}}},[i("div",{staticClass:"video-progress-container"},[i("video",{ref:"video",class:t.videoClass,attrs:{"data-test":"video-content",preload:"auto",src:t.src,playsinline:t.playsInline,loop:t.isLooped,autoplay:t.shouldAutoplay,controls:t.shouldUseNativeControls,draggable:!1},domProps:{muted:t.isMuted},on:{"~canplay":function(e){return t.setHasAudio.apply(null,arguments)},timeupdate:t.updateProgressBar,loadeddata:t.onLoadedData}}),t._v(" "),t.shouldUseCustomProgressBar&&t.controlType===t.CUSTOM_CONTROLS?i("div",{ref:"progressBarContainer",staticClass:"progress-bar-container",attrs:{"data-test-id":"progress-bar-container"},on:{click:function(e){return e.stopPropagation(),t.scrubVideo.apply(null,arguments)}}},[i("div",{ref:"progressBar",staticClass:"progress-bar",style:{transform:"translateX("+t.videoProgress+"%)"},attrs:{"data-test-id":"progress-bar"}})]):t._e(),t._v(" "),t.controlType===t.CUSTOM_CONTROLS&&t.hasAudio?i("div",{staticClass:"mute-toggle-wrapper",attrs:{"data-test":"mute-toggle-button"},on:{click:function(e){return e.stopPropagation(),t.toggleMute.apply(null,arguments)}}},[t.isMuted?i("div",{directives:[{name:"tippy",rawName:"v-tippy",value:t.tooltipOptions,expression:"tooltipOptions"}],staticClass:"toggle-button",attrs:{"data-test":"unmute-button",title:"Turn audio on"}},[i("icon",{attrs:{"svg-class":"mute-icon",type:"volumeMute"}})],1):i("div",{directives:[{name:"tippy",rawName:"v-tippy",value:t.tooltipOptions,expression:"tooltipOptions"}],staticClass:"toggle-button",attrs:{"data-test":"mute-button",title:"Turn audio off"}},[i("icon",{attrs:{"svg-class":"mute-icon",type:"volumeHigh"}})],1)]):t._e()])])}),[],!1,null,"27edef16",null);e.a=d.exports},336:function(t,e,i){"use strict";var a=i(26),o=i(5),s=i(193),r={name:"Observer",props:{root:{type:Object,default:null},rootMargin:{type:[String,Number],default:"0px"},threshold:{type:[Array,Number],default:0}},data:function(){return{observer:null}},mounted:function(){var t=this,e={root:this.root,rootMargin:this.rootMargin,threshold:this.threshold};this.observer=new IntersectionObserver((function(e){t.$emit("on-change",e[0],t.unobserve)}),e),this.observer.observe(this.$el)},beforeDestroy:function(){this.observer&&(this.unobserve(),this.observer=null)},methods:{unobserve:function(){this.observer.unobserve(this.$el)}}},n=i(0),d=Object(n.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._t("default")],2)}),[],!1,null,null,null).exports,l={name:"MediaSkeletonProvider",props:{isLoaded:{type:Boolean,default:!1},aspectRatio:{type:String,default:"auto"}}},u=(i(541),Object(n.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"img-skeleton-wrapper",class:[t.isLoaded?"loaded":"loading"],style:{aspectRatio:t.aspectRatio}},[[t._t("default")],t._v(" "),i("div",{staticClass:"skeleton-container skeleton-template animate-translate"})],2)}),[],!1,null,"6751b68c",null).exports),c=i(196),p=i(335);function h(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function f(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?h(Object(i),!0).forEach((function(e){m(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):h(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function m(t,e,i){return(e=function(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var a=i.call(t,e||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var v={name:"BlockMediaView",components:{Observer:d,MediaSkeletonProvider:u,VImg:c.a,VVideo:p.a},props:{block:o.z,mediaId:{type:[String,null],default:null},isEditing:{type:Boolean,default:!1},aspectRatio:{type:[Number,null],default:null},objectFit:{type:String,default:o.m,validator:function(t){return o.P.includes(t)}},contentObject:o.A,isStillVideo:{type:Boolean,default:!1},preventLazyLoad:{type:Boolean,default:!1},preventLightbox:{type:Boolean,default:!1}},data:function(){return{MEDIA_IMAGE_TYPE:a.b,MEDIA_VIDEO_TYPE:a.c,MEDIA_GIF_TYPE:a.a,OBJECT_FIT_COVER:o.n,OBJECT_FIT_CONTAIN:o.m,generateResizedMediaUrl:s.a,isMounted:!1,isMediaLoaded:!1,isVisible:!1,observerKey:""}},computed:{nonLazyWidths:function(){var t=this;return[300,400,600,752,1024,1200,1504,2048,2400].filter((function(e){return e<=t.width}))},blockMediaParams:function(){return{block:this.block,mediaId:this.mediaId}},media:function(){var t;return null==(t=o.c.get(this.blockMediaParams))?void 0:t.media},userUpload:function(){var t;return null==(t=o.c.get(this.blockMediaParams))?void 0:t.userUpload},width:function(){var t;return(null==(t=this.media)?void 0:t.width)||320},height:function(){var t;return(null==(t=this.media)?void 0:t.height)||240},containerAspectRatio:function(){return this.aspectRatio||this.mediaAspectRatio},mediaAspectRatio:function(){return o.c.aspect(this.blockMediaParams)},mediaUrl:function(){return o.c.url(this.blockMediaParams)},stillMediaUrl:function(){var t=o.c.url(f(f({},this.blockMediaParams),{},{isStill:!0}))||"";return t.includes("blob:")?"":t},autoFitClass:function(){return this.mediaAspectRatio>this.containerAspectRatio?"auto-height":"auto-width"},mediaContentObject:function(){return Object.keys(this.contentObject).length?this.contentObject:this.block.content},supportsResizing:function(){var t,e;return(null==(t=this.media)?void 0:t.type)===a.b&&(null==(e=this.media)?void 0:e.fileExtension)!==a.a},isMediaLoading:function(){return!!this.media&&!this.isMediaLoaded},isMediaLazy:function(){return!this.isEditing&&!this.preventLazyLoad},videoSrc:function(){if(!this.isMounted)return o.c.url(this.blockMediaParams);var t=this.$el.offsetWidth*(window.devicePixelRatio||1);return o.c.url(f(f({},this.blockMediaParams),{},{elementWidth:t}))},shouldVideoPlay:function(){return!this.isStillVideo&&this.isVisible&&this.mediaContentObject.shouldVideoAutoplay},lightboxImageSrcset:function(){var t=this,e=[this.width,640,850,1024,1600,1905,2400,3810].filter((function(e){return e<=t.width}));return Object(s.c)({mediaUrl:this.mediaUrl,aspectRatio:this.mediaAspectRatio,widths:e})},imageProps:function(){var t,e={refId:null==(t=this.media)?void 0:t.id,class:"content-block border-radius-8",altImageText:this.mediaContentObject.alt,height:this.height,width:this.width},i=this.stillMediaUrl||this.mediaUrl;if(this.isEditing||!this.supportsResizing)return f({src:i,isLazyLoaded:!this.isEditing},e);if(this.preventLazyLoad){var a=this.objectFit===o.n?this.containerAspectRatio:this.mediaAspectRatio;return f({src:Object(s.a)({mediaUrl:i,width:this.width<752?this.width:752}),srcSet:Object(s.c)({mediaUrl:i,aspectRatio:a,widths:this.nonLazyWidths}),sizes:this.block.content.isFullWidth?"(max-width: 767px) 100vw, (max-width: 919px) calc(100vw - 32px), (max-width: 1278px) calc(100vw - 240px), 1024px":"(max-width: 788px) calc(100vw - 32px), 752px",isLazyLoaded:!1},e)}return f({dataSrc:Object(s.b)({mediaUrl:i,appendHeight:!0}),dataAspectRatio:this.objectFit===o.m?this.mediaAspectRatio:this.containerAspectRatio,isLazyLoaded:!0},e)}},mounted:function(){var t,e;this.isMounted=!0,this.observerKey="".concat(null==(t=this.media)?void 0:t.type,"-").concat(Dribbble.uuidv4()),(null==(e=this.media)?void 0:e.type)!==a.b||this.preventLightbox||Dribbble.EventBus.$emit("lightbox-item:mounted")},methods:{updateVisibility:function(t){this.isVisible=t.isIntersecting},setMediaLoaded:function(){this.isMediaLoaded=!0}}},g=(i(542),Object(n.a)(v,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"block-media-wrapper",style:{aspectRatio:t.containerAspectRatio.toString()}},[t.media?i("observer",{key:t.observerKey,class:"block-media "+t.objectFit+" "+t.autoFitClass+" "+(t.isMediaLazy&&"is-lazy"),style:{aspectRatio:(t.objectFit===t.OBJECT_FIT_COVER?t.containerAspectRatio:t.mediaAspectRatio).toString(),"--object-fit":t.objectFit},attrs:{threshold:[.5]},on:{"on-change":t.updateVisibility}},[t.isMediaLoading?i("media-skeleton-provider",{staticClass:"skeleton-wrapper"}):t._e(),t._v(" "),t.media.type===t.MEDIA_IMAGE_TYPE?[t.preventLightbox?i("v-img",t._b({on:{"image-load":t.setMediaLoaded}},"v-img",t.imageProps,!1)):i("a",{attrs:{"data-photoswipe-image":"",href:t.supportsResizing?t.generateResizedMediaUrl({mediaUrl:t.mediaUrl,width:752}):t.mediaUrl,"data-pswp-srcset":t.supportsResizing?t.lightboxImageSrcset:"","data-pswp-width":t.width,"data-pswp-height":t.height,"data-cropped":t.objectFit===t.OBJECT_FIT_COVER,target:"_blank"}},[i("v-img",t._b({on:{"image-load":t.setMediaLoaded}},"v-img",t.imageProps,!1))],1)]:t.media.type===t.MEDIA_VIDEO_TYPE&&t.isStillVideo&&t.stillMediaUrl?[i("v-img",t._b({on:{"image-load":t.setMediaLoaded}},"v-img",t.imageProps,!1))]:t.media.type===t.MEDIA_VIDEO_TYPE?[i("v-video",{staticClass:"video-container",class:{"is-loaded":!t.isMediaLoading},attrs:{src:t.videoSrc,"is-looped":t.mediaContentObject.shouldVideoLoop,"should-play":t.shouldVideoPlay,"should-autoplay":t.shouldVideoPlay,"control-type":"custom","should-use-custom-progress-bar":""},on:{"video-load":t.setMediaLoaded}})]:t._e()],2):t._e()],1)}),[],!1,null,"5e868365",null));e.a=g.exports},390:function(t,e,i){},404:function(t,e,i){},405:function(t,e,i){},532:function(t,e,i){"use strict";i(390)},541:function(t,e,i){"use strict";i(404)},542:function(t,e,i){"use strict";i(405)}}]);