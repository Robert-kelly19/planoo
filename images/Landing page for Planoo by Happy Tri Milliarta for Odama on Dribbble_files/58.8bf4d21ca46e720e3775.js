(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{755:function(t,n,e){},775:function(t,n,e){"use strict";e(755)},809:function(t,n,e){"use strict";e.r(n);var o=e(812),a=e(232),r=e(233),c=e(234),i=e(235),u=e(236),s=e(237),h=e(242),l=e(238),p=e(239),f=e(240),d=e(241),m=e(394),x={name:"FormattedText",props:{content:{type:Object,default:null},format:{type:String,default:"json",validator:function(t){return["json","html"].includes(t)}}},computed:{htmlContent:function(){var t;if("html"===this.format)return this.content;if(!this.content||null==(t=this.content.content)||!t.length)return"<p></p>";var n=this.content,e=this.hydrateContent(this.content.content[0]);return n.content[0]=e,Object(o.a)(n,[a.a,c.a,r.a,p.a,i.a,u.a,h.a,s.a,l.a.configure({types:["heading","paragraph"]}),f.a,d.a,m.a])}},methods:{hydrateContent:function(t){var n=this;return t.content?t.content.length&&(t.content=t.content.map((function(t){return n.hydrateContent(t)}))):t.text||"text"===t.type?""===t.text&&(t.text=" "):t.content=[{text:" ",type:"text"}],t}}},y=(e(775),e(0)),v=Object(y.a)(x,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{domProps:{innerHTML:t._s(t.htmlContent)}})}),[],!1,null,"0ffb479a",null);n.default=v.exports}}]);