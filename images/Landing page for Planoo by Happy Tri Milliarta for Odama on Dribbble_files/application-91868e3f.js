import"./sl-dialog-show-863b7fe7.js";import{g as ee}from"./request-8716ca80.js";import{I as D}from"./internal-tracking-7bff24d0.js";import{P as te}from"./form-validation-d46caa49.js";import{t as ae,a as re}from"./contact-info-detection-helpers-1b6d600f.js";/* empty css                           */import"./class-map-f44a9b2f.js";import"./chunk.WLV3FVBR-40635dc6.js";import"./drb-dialog-helpers-b6f3e855.js";import"./animation-201fe7f0.js";import"./throttle-252d213d.js";import"./_commonjsHelpers-87174ba5.js";import"./debounce-c4b53cf6.js";import"./axios-8f19e258.js";import"./axios_helper-2919371d.js";var C;C={config:{},run:function(){return this.getController().processElements()},process:function(...e){var t,a,r;for(a=0,r=e.length;a<r;a++)t=e[a],this.getController().processElement(t);return e.length},getController:function(){return this.controller!=null?this.controller:this.controller=new C.Controller}};var F,N,O,f,$,R,P,x,_,p,W,U,H,b,y,g,Y,B,w,V,E,M,Z,S,v,u,J,T,X,G,k,j,z,I,A,c=C;c.config.useFormat24=!1,c.config.i18n={en:{date:{dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],abbrDayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],abbrMonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],yesterday:"yesterday",today:"today",tomorrow:"tomorrow",on:"on {date}",formats:{default:"%b %e, %Y",thisYear:"%b %e"}},time:{am:"am",pm:"pm",singular:"a {time}",singularAn:"an {time}",elapsed:"{time} ago",second:"second",seconds:"seconds",minute:"minute",minutes:"minutes",hour:"hour",hours:"hours",formats:{default:"%l:%M%P",default_24h:"%H:%M"}},datetime:{at:"{date} at {time}",formats:{default:"%B %e, %Y at %l:%M%P %Z",default_24h:"%B %e, %Y at %H:%M %Z"}}}},c.config.locale="en",c.config.defaultLocale="en",c.config.timerInterval=6e4,O=!isNaN(Date.parse("2011-01-01T12:00:00-05:00")),c.parseDate=function(e){return e=e.toString(),O||(e=N(e)),new Date(Date.parse(e))},F=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(Z|[-+]?[\d:]+)$/,N=function(e){var t,a,r,n,s,o,i,d,m,l;if(n=e.match(F))return[t,m,o,a,r,s,d,l]=n,l!=="Z"&&(i=l.replace(":","")),`${m}/${o}/${a} ${r}:${s}:${d} GMT${[i]}`},c.elementMatchesSelector=(f=document.documentElement,$=(R=(P=(x=(_=f.matches)!=null?_:f.matchesSelector)!=null?x:f.webkitMatchesSelector)!=null?P:f.mozMatchesSelector)!=null?R:f.msMatchesSelector,function(e,t){if((e!=null?e.nodeType:void 0)===Node.ELEMENT_NODE)return $.call(e,t)}),{config:p}=c,{i18n:U}=p,c.getI18nValue=function(e="",{locale:t}={locale:p.locale}){var a;return(a=W(U[t],e))!=null?a:t!==p.defaultLocale?c.getI18nValue(e,{locale:p.defaultLocale}):void 0},c.translate=function(e,t={},a){var r,n,s;for(r in s=c.getI18nValue(e,a),t)n=t[r],s=s.replace(`{${r}}`,n);return s},W=function(e,t){var a,r,n,s,o;for(o=e,a=0,n=(s=t.split(".")).length;a<n;a++){if(o[r=s[a]]==null)return null;o=o[r]}return o},{getI18nValue:b,translate:M}=c,E=typeof(typeof Intl<"u"&&Intl!==null?Intl.DateTimeFormat:void 0)=="function",y={"Central European Standard Time":"CET","Central European Summer Time":"CEST","China Standard Time":"CST","Israel Daylight Time":"IDT","Israel Standard Time":"IST","Moscow Standard Time":"MSK","Philippine Standard Time":"PHT","Singapore Standard Time":"SGT","Western Indonesia Time":"WIB"},c.knownEdgeCaseTimeZones=y,c.strftime=V=function(e,t){var a,r,n,s,o,i,d;return r=e.getDay(),a=e.getDate(),o=e.getMonth(),d=e.getFullYear(),n=e.getHours(),s=e.getMinutes(),i=e.getSeconds(),t.replace(/%(-?)([%aAbBcdeHIlmMpPSwyYZ])/g,function(m,l,h){switch(h){case"%":return"%";case"a":return b("date.abbrDayNames")[r];case"A":return b("date.dayNames")[r];case"b":return b("date.abbrMonthNames")[o];case"B":return b("date.monthNames")[o];case"c":return e.toString();case"d":return g(a,l);case"e":return a;case"H":return g(n,l);case"I":return g(V(e,"%l"),l);case"l":return n===0||n===12?12:(n+12)%12;case"m":return g(o+1,l);case"M":return g(s,l);case"p":return M("time."+(n>11?"pm":"am")).toUpperCase();case"P":return M("time."+(n>11?"pm":"am"));case"S":return g(i,l);case"w":return r;case"y":return g(d%100,l);case"Y":return d;case"Z":return Y(e)}})},g=function(e,t){return t==="-"?e:`0${e}`.slice(-2)},Y=function(e){var t,a,r;return(a=H(e))?y[a]:(r=w(e,{allowGMT:!1}))||(r=B(e))?r:(t=w(e,{allowGMT:!0}))?t:""},H=function(e){return Object.keys(y).find(function(t){return E?new Date(e).toLocaleString("en-US",{timeZoneName:"long"}).includes(t):e.toString().includes(t)})},w=function(e,{allowGMT:t}){var a;if(E&&(a=new Date(e).toLocaleString("en-US",{timeZoneName:"short"}).split(" ").pop(),t||!a.includes("GMT")))return a},B=function(e){var t,a,r,n,s;return(t=(a=(s=e.toString()).match(/\(([\w\s]+)\)$/))!=null?a[1]:void 0)?/\s/.test(t)?t.match(/\b(\w)/g).join(""):t:(t=(r=s.match(/(\w{3,4})\s\d{4}$/))!=null?r[1]:void 0)||(t=(n=s.match(/(UTC[\+\-]\d+)/))!=null?n[1]:void 0)?t:void 0},c.CalendarDate=class{static fromDate(e){return new this(e.getFullYear(),e.getMonth()+1,e.getDate())}static today(){return this.fromDate(new Date)}constructor(e,t,a){this.date=new Date(Date.UTC(e,t-1)),this.date.setUTCDate(a),this.year=this.date.getUTCFullYear(),this.month=this.date.getUTCMonth()+1,this.day=this.date.getUTCDate(),this.value=this.date.getTime()}equals(e){return(e!=null?e.value:void 0)===this.value}is(e){return this.equals(e)}isToday(){return this.is(this.constructor.today())}occursOnSameYearAs(e){return this.year===(e!=null?e.year:void 0)}occursThisYear(){return this.occursOnSameYearAs(this.constructor.today())}daysSince(e){if(e)return(this.date-e.date)/864e5}daysPassed(){return this.constructor.today().daysSince(this)}},{strftime:v,translate:u,getI18nValue:S,config:Z}=c,c.RelativeTime=class{constructor(e){this.date=e,this.calendarDate=c.CalendarDate.fromDate(this.date)}toString(){var e,t;return(t=this.toTimeElapsedString())?u("time.elapsed",{time:t}):(e=this.toWeekdayString())?(t=this.toTimeString(),u("datetime.at",{date:e,time:t})):u("date.on",{date:this.toDateString()})}toTimeOrDateString(){return this.calendarDate.isToday()?this.toTimeString():this.toDateString()}toTimeElapsedString(){var e,t,a,r,n;return a=new Date().getTime()-this.date.getTime(),r=Math.round(a/1e3),t=Math.round(r/60),e=Math.round(t/60),a<0?null:r<10?(n=u("time.second"),u("time.singular",{time:n})):r<45?`${r} ${u("time.seconds")}`:r<90?(n=u("time.minute"),u("time.singular",{time:n})):t<45?`${t} ${u("time.minutes")}`:t<90?(n=u("time.hour"),u("time.singularAn",{time:n})):e<24?`${e} ${u("time.hours")}`:""}toWeekdayString(){switch(this.calendarDate.daysPassed()){case 0:return u("date.today");case 1:return u("date.yesterday");case-1:return u("date.tomorrow");case 2:case 3:case 4:case 5:case 6:return v(this.date,"%A");default:return""}}toDateString(){var e;return e=this.calendarDate.occursThisYear()?S("date.formats.thisYear"):S("date.formats.default"),v(this.date,e)}toTimeString(){var e;return e=Z.useFormat24?"default_24h":"default",v(this.date,S(`time.formats.${e}`))}},{elementMatchesSelector:J}=c,c.PageObserver=class{constructor(e,t){this.processMutations=this.processMutations.bind(this),this.processInsertion=this.processInsertion.bind(this),this.selector=e,this.callback=t}start(){if(!this.started)return this.observeWithMutationObserver()||this.observeWithMutationEvent(),this.started=!0}observeWithMutationObserver(){if(typeof MutationObserver<"u"&&MutationObserver!==null)return new MutationObserver(this.processMutations).observe(document.documentElement,{childList:!0,subtree:!0}),!0}observeWithMutationEvent(){return addEventListener("DOMNodeInserted",this.processInsertion,!1),!0}findSignificantElements(e){var t;return t=[],(e!=null?e.nodeType:void 0)===Node.ELEMENT_NODE&&(J(e,this.selector)&&t.push(e),t.push(...e.querySelectorAll(this.selector))),t}processMutations(e){var t,a,r,n,s,o,i,d;for(t=[],a=0,n=e.length;a<n;a++)if((o=e[a]).type==="childList")for(r=0,s=(d=o.addedNodes).length;r<s;r++)i=d[r],t.push(...this.findSignificantElements(i));return this.notify(t)}processInsertion(e){var t;return t=this.findSignificantElements(e.target),this.notify(t)}notify(e){if(e!=null&&e.length)return typeof this.callback=="function"?this.callback(e):void 0}},{parseDate:G,strftime:k,getI18nValue:X,config:T}=c,c.Controller=function(){var e,t,a,r;return e="time[data-local]:not([data-localized])",t=function(n){return n.setAttribute("data-localized","")},a=function(n){return n.setAttribute("data-processed-at",new Date().toISOString())},r=function(n){return new c.RelativeTime(n)},class{constructor(){this.processElements=this.processElements.bind(this),this.pageObserver=new c.PageObserver(e,this.processElements)}start(){if(!this.started)return this.processElements(),this.startTimer(),this.pageObserver.start(),this.started=!0}startTimer(){var n;if(n=T.timerInterval)return this.timer!=null?this.timer:this.timer=setInterval(this.processElements,n)}processElements(n=document.querySelectorAll(e)){var s,o,i;for(o=0,i=n.length;o<i;o++)s=n[o],this.processElement(s);return n.length}processElement(n){var s,o,i,d,m,l;if(s=n.getAttribute("datetime"),i=n.getAttribute("data-local"),o=T.useFormat24&&n.getAttribute("data-format24")||n.getAttribute("data-format"),d=G(s),!isNaN(d))return n.hasAttribute("title")||(l=T.useFormat24?"default_24h":"default",m=k(d,X(`datetime.formats.${l}`)),n.setAttribute("title",m)),a(n),n.textContent=function(){switch(i){case"time":return t(n),k(d,o);case"date":return t(n),r(d).toDateString();case"time-ago":return r(d).toString();case"time-or-date":return r(d).toTimeOrDateString();case"weekday":return r(d).toWeekdayString();case"weekday-or-date":return r(d).toWeekdayString()||r(d).toDateString()}}()}}}.call(window),A=!1,j=function(){return document.attachEvent?document.readyState==="complete":document.readyState!=="loading"},z=function(e){var t;return(t=typeof requestAnimationFrame=="function"?requestAnimationFrame(e):void 0)!=null?t:setTimeout(e,17)},I=function(){return c.getController().start()},c.start=function(){return A?c.run():(A=!0,typeof MutationObserver<"u"&&MutationObserver!==null||j()?I():z(I))},c.processing=function(){return c.getController().started},window.LocalTime===c&&c.start();const ne={open({id:e="",iconHtml:t="",title:a="",messageHtml:r="",variant:n="primary",onlyOnce:s=!1,duration:o}){const i=Object.assign(document.createElement("drb-toast"),{id:e,duration:o,title:a,variant:n,onlyOnce:s,innerHTML:`
        <div slot="icon">${t}</div>
        <div slot="message">${r}</div>
      `});document.body.append(i)}},se=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path
    d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>`,oe={init(){this.bindEvents()},bindEvents(){document.addEventListener("click",e=>{const t=e.target.closest("[data-resume-user-card] [data-bookmark]"),a=e.target.closest("[data-extra-skills-btn]");t&&this.bookmarkUser(t),a&&this.toggleExtraSkills(e),this.handleProfileRedirect(e)})},handleProfileRedirect(e){var n,s;const t=(n=e.target.closest("[data-profile-path]"))==null?void 0:n.getAttribute("data-profile-path"),a=(s=e.target.closest("[data-resume-user-card][data-id]"))==null?void 0:s.getAttribute("data-id"),r=!!e.target.closest("a, input, button, label, drb-tooltip");!t||!a||r||(D.trackSearchProfileClicked(a,e.target),window.open(t,"_blank").focus())},toggleExtraSkills(e){const t=e.target.closest("[data-resume-user-card-footer]"),a=t==null?void 0:t.querySelectorAll(".pill2"),r=e.target.closest("[data-extra-skills-btn]"),n=r==null?void 0:r.querySelector("[data-extra-skills-text-count]"),s=r==null?void 0:r.querySelector("[data-skills-text-hide]");a.forEach(o=>{o.classList.toggle("display-flex")}),n==null||n.classList.toggle("display-none"),s==null||s.classList.toggle("display-none")},async bookmarkUser(e){var l,h,L;if(!(((L=(h=(l=window.Dribbble)==null?void 0:l.JsConfig)==null?void 0:h.user)==null?void 0:L.isLoggedIn)||!1))return this.openDesignerSearchUpsellModal();const a=e.closest("[data-resume-user-card]"),r=a==null?void 0:a.getAttribute("data-username"),n=a==null?void 0:a.getAttribute("data-display-name"),s=a==null?void 0:a.getAttribute("data-saved-search-id");if(!r)return;const o=!e.hasAttribute("data-bookmarked"),i=s?`/client_app/talent/saved_searches/${s}/bookmarks/${r}`:`/client_app/talent/bookmarks/${r}`,m={path:o?"/client_app/talent/bookmarks":i,method:o?"POST":"DELETE",body:JSON.stringify({userId:r})};try{e.classList.add("btn2--loading");const{path:q,method:K,body:Q}=m;if(!(await fetch(q,{method:K,body:Q,headers:{"Content-Type":"application/json","X-CSRF-Token":ee(),"X-Requested-With":"XMLHttpRequest"}})).ok)throw new Error("Something went wrong");e.toggleAttribute("data-bookmarked",o),e.classList.toggle("btn2--icon-expand-animation",o),o&&(ne.open({title:"Designer Saved",messageHtml:`<span>${n||r} was saved to your <a href="/designers?tab=bookmarks">Saved Designers</a></span>`,iconHtml:se,variant:"success",duration:5e3}),D.trackSearchDesignerBookmarked(a.getAttribute("data-id"),a))}catch{Dribbble.EventBus.$emit("siteNotifications:add",{title:"Error updating bookmark",id:"update-bookmark"})}finally{e.classList.remove("btn2--loading")}},openDesignerSearchUpsellModal(){const e=document.querySelector("drb-dialog#designer-search-upsell-modal");e&&e.open()}};oe.init();const ie={bindListeners(){this.bindMessageInputSync(),this.bindFormValidation(),this.bindTrackingListeners(),this.bindContactInfoReset(),this.setupSendAnywayBtn()},bindMessageInputSync(){document.addEventListener("input",e=>{const t=e.target.closest("drb-dialog#message-dialog");if(!t)return;const a=t.querySelectorAll("#message-dialog-message, #message-dialog-details");Array.from(a).includes(e.target)&&a.forEach(r=>{r.value=e.target.value})})},bindFormValidation(){document.addEventListener("drb-dialog-content-updated",e=>{const t=e.target.closest("drb-dialog#message-dialog");t&&t.querySelectorAll("[data-message-dialog-form]").forEach(a=>{a.pristineValidation=te(a)})}),document.addEventListener("submit",e=>{var r;const t=e.target.closest("[data-message-dialog-form]");if(!t)return;e.preventDefault();const a=this.checkForContactInfo(e);if(a){this.handleContactInfoDetected(a);return}!t.hasAttribute("is-submitting")&&((r=t.pristineValidation)!=null&&r.validate())&&this.submitForm(t)})},bindTrackingListeners(){document.addEventListener("drb-dialog-content-updated",e=>{var n;const t=e.target.closest("drb-dialog#message-dialog");if(!t)return;const a=t.querySelector("[data-message-dialog-form]"),r=(n=a==null?void 0:a.querySelector("input[name='engagement[recipient_id]']"))==null?void 0:n.value;r&&D.trackSearchMessageModalDisplayed(r,t)})},bindContactInfoReset(){document.addEventListener("input",e=>{if(!e.target.closest("drb-dialog#message-dialog"))return;const a=this.checkForContactInfo(e);a||this.handleContactInfoDetected(a)})},async submitForm(e){var o;const t="Failed to send message",a=e.querySelector("[data-message-dialog-submit]"),r=e.querySelector("[data-form-error]"),n=i=>{e.toggleAttribute("is-submitting",i),a.disabled=i,a.classList.toggle("btn2--loading",i)},s=i=>{r&&(r.toggleAttribute("hidden",!i),r.innerText=i)};n(!0),s(null);try{const i=await fetch(e.getAttribute("action"),{method:"POST",body:this.getTransformedFormData(e),headers:{"X-Requested-With":"XMLHttpRequest"}}),d=await i.text();if(!i.ok){const h=i.status===422?d:t;throw new Error(h||t)}const m=(o=e.querySelector("[data-recipient-id-input]"))==null?void 0:o.value;m&&D.trackSearchUserMessaged(m);const l=e.closest("drb-dialog");l==null||l.setContent(d)}catch(i){const d=i instanceof Error?i.message:t;s(d),console.error(d,i)}finally{n(!1)}},getTransformedFormData(e){const t=new FormData(e);switch(e.getAttribute("data-message-dialog-form")){case"workRequest":t.set("engagement[budget_cents]",parseInt(t.get("budget_dollars")||0,10)*100),t.delete("budget_dollars");break}return t},setupSendAnywayBtn(){document.addEventListener("click",e=>{const t=e.target.closest("drb-dialog#message-dialog");if(!t||!e.target.closest("[data-contact-info-warning-send-btn]"))return;const r=t.querySelector("[data-message-dialog-form]");this.handleContactInfoDetected(!1),this.submitForm(r)})},getContactInfoRegexes(){const e=document.querySelector('[data-message-dialog-form="workRequest"]'),t=e==null?void 0:e.getAttribute("data-contact-info-regexes");if(t)return JSON.parse(t).map(a=>new RegExp(a,"i"))},checkForContactInfo(e){const t=e.target.closest('[data-message-dialog-form="workRequest"]');if(!t)return;const a=t.querySelector("#message-dialog-details");return this.getContactInfoRegexes().some(s=>s.test(a.value))},handleContactInfoDetected(e){const t=document.querySelector('[data-message-dialog-form="workRequest"]'),a=t==null?void 0:t.querySelector("[data-contact-info-warning]");if(!a)return;const r=t.querySelector("[data-message-dialog-submit]");ae(a,e),re(r,e)}};document.addEventListener("submit",e=>{if(e.target.closest("form[data-on-submit-update-dom]")){const t=e.target,a=document.querySelector(t.dataset.onSubmitUpdateDom);if(a){e.preventDefault();const r=new FormData(t);fetch(t.action,{method:r.get("_method")||t.method,body:r,headers:{"X-Requested-With":"XMLHttpRequest"}}).then(n=>n.text()).then(n=>{a.outerHTML=n}).catch(n=>{var s;return(s=Dribbble==null?void 0:Dribbble.Notify)==null?void 0:s.error(n)})}}});ie.bindListeners();c.start();
//# sourceMappingURL=application-91868e3f.js.map