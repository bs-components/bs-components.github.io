/*! Built with http://stenciljs.com */
const{h:t}=window.bscomponents;import{p as e,s,t as o,r,q as i}from"./chunk-89dac778.js";import{c as l}from"./chunk-93432030.js";import{c as n,d as c}from"./chunk-64cf3b78.js";import{a}from"./chunk-55988a92.js";import{a as h}from"./chunk-ddbf79d9.js";import{a as f,b as g}from"./chunk-5028a50e.js";import{a as u}from"./chunk-e1923c80.js";import"./chunk-5260d582.js";class d{constructor(){this.activateEventName="activate.bs.scrollspy",this.useBodyForScrollElement=!1,this.verboseLogging=!1,this.defaults={offset:10,method:"auto",target:""},this.handleScrollElement=(()=>this.process())}componentWillLoad(){this.scrollElement=!0===this.useBodyForScrollElement?window:this.scrollspyEl,this.config=this.getConfig(),this.selector=`${this.config.target} .nav-link,${this.config.target} .list-group-item,${this.config.target} .dropdown-item`,this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.scrollElement.addEventListener("scroll",this.handleScrollElement),this.refresh(),this.process()}componentDidUnload(){this.scrollElement&&this.scrollElement.removeEventListener("scroll",this.handleScrollElement),this.scrollElement=null,this.config=null,this.selector=null,this.offsets=null,this.targets=null,this.activeTarget=null,this.scrollHeight=null}getConfig(t={}){const e={};if(l(t,"target")?e.target=t.target:l(this.scrollspyEl.dataset,"target")?e.target=this.scrollspyEl.dataset.target:e.target=this.defaults.target,a(e.target)){let t=e.target.getAttribute("id");t||(t=h("scrollspy"),e.target.setAttribute("id",t)),e.target=`#${t}`}return l(t,"offset")?e.offset=n(t.offset):l(this.scrollspyEl.dataset,"offset")?e.offset=n(this.scrollspyEl.dataset.offset):e.offset=this.defaults.offset,c(e.offset)&&(e.offset=this.defaults.offset),l(t,"method")?e.method=n(t.method):l(this.scrollspyEl.dataset,"method")?e.method=this.scrollspyEl.dataset.method:e.method=this.defaults.method,e}getOffsetTop(t){let e=0,s=t;if(s.offsetParent)do{e+=s.offsetTop,s=s.offsetParent}while(s);else e=s.offsetTop;return(e-=this.config.offset)>=0?e:0}refresh(){if(!this.config.target||0===e(this.config.target))return;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();const t=this.getOffsetTop(this.scrollElement),s=document.querySelector(this.config.target);s?Array.prototype.slice.call(s.querySelectorAll(this.selector)).map(e=>{let s;const o=u(e);if(o&&(s=document.querySelector(o)),s){const e=s.getBoundingClientRect();if(e.width||e.height)return[this.getOffsetTop(s)-t,o]}return null}).filter(t=>t).sort((t,e)=>t[0]-e[0]).forEach(t=>{this.offsets.push(t[0]),this.targets.push(t[1])}):console.warn(`unable to locate target selector "${this.config.target}"`)}getScrollTop(){return this.scrollElement===window?this.scrollElement.pageYOffset:this.scrollElement.scrollTop}getScrollHeight(){return this.scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}getOffsetHeight(){return this.scrollElement===window?window.innerHeight:this.scrollElement.getBoundingClientRect().height}isActiveTarget(t,e){return this.activeTarget!==this.targets[t]&&!(e<this.offsets[t])&&(void 0===this.offsets[t+1]?(this.verboseLogging&&console.log(`at end of list activating "${this.targets[t]}"`),!0):e<this.offsets[t+1]&&(this.verboseLogging&&console.log(`scrollTop of ${e} in range of ${this.offsets[t]} - ${this.offsets[t+1]} activating "${this.targets[t]}"`),!0))}process(){if(!this.config.target||0===e(this.config.target))return;const t=this.getScrollTop()+this.config.offset;this.verboseLogging&&console.log("scrollTop + offset = ",t);const s=this.getScrollHeight(),o=this.config.offset+s-this.getOffsetHeight(),r=document.querySelector(this.config.target);if(r)if(this.scrollHeight!==s&&this.refresh(),t>=o){const t=this.targets[this.targets.length-1];this.activeTarget!==t&&this.activate(t)}else{if(this.activeTarget&&t<this.offsets[0]&&this.offsets[0]>0)return this.activeTarget=null,void this.clear(r);console.log("this.offsets: ",this.offsets),console.log("this.targets: ",this.targets);for(let s=e(this.offsets)-1;s>=0;s-=1)this.isActiveTarget(s,t)&&this.activate(this.targets[s])}}clear(t){const e=Array.prototype.slice.call(t.querySelectorAll(this.selector));for(let t=0;t<e.length;t+=1)o(e[t],"active")&&r(e[t],"active")}static getLinkArr(t,e){const s=document.querySelector(t);if(!s)return[];const o=[],r=Array.prototype.slice.call(e.querySelectorAll(".nav-link, .list-group-item, .dropdown-item"));for(let t=0;t<r.length;t+=1){const e=u(r[t]);e&&g(s,e)&&o.push(r[t])}return o}static getParentArrBySelector(t,e){const s=[];let o,r=t.parentElement||t.parentNode;do{(o=f(r,e))&&(s.push(o),r=o.parentElement||o.parentNode)}while(o);return s}activate(t){if(!this.config.target||0===e(this.config.target))return;let r;this.activeTarget=t;const l=document.querySelector(this.config.target);this.clear(l);const n=d.getLinkArr(t,l);for(let t=0;t<n.length;t+=1)if(o(n[t],"dropdown-item")){const e=f(n[t],".dropdown");if(e&&l.contains(e)){const t=e.querySelector(".dropdown-toggle");t&&s(t,"active")}s(n[t],"active"),r=n[t]}else{s(n[t],"active"),r=n[t];const e=".nav, .list-group";let o=n[t];do{o=o.parentElement||o.parentNode;const t=(o=f(o,e))?o.previousElementSibling:null;if(o&&t&&(g(t,".nav-link, .list-group-item")&&s(o.previousElementSibling,"active"),g(t,".nav-item"))){const e=Array.prototype.slice.call(t.children);for(let t=0;t<e.length;t+=1)g(e[t],".nav-link")&&s(e[t],"active")}}while(o&&l.contains(o))}i(this.scrollElement,this.activateEventName,{target:t},r)}scrollspy(t={}){if(0===e(t))return this.scrollspyEl;if("refresh"===t)return this.refresh(),!0;if("getActiveTarget"===t)return this.activeTarget;if("object"==typeof t)return this.config=this.getConfig(t),this.refresh(),this.process(),!0;if("string"==typeof t)throw new Error(`No method named "${t}"`);return null}render(){return t("slot",null)}static get is(){return"bs-scrollspy"}static get properties(){return{activateEventName:{type:String,attr:"activate-event-name"},activeTarget:{state:!0},config:{state:!0},defaults:{type:"Any",attr:"defaults"},offsets:{state:!0},scrollElement:{state:!0},scrollHeight:{state:!0},scrollspy:{method:!0},scrollspyEl:{elementRef:!0},selector:{state:!0},targets:{state:!0},useBodyForScrollElement:{type:Boolean,attr:"use-body-for-scroll-element"},verboseLogging:{type:Boolean,attr:"verbose-logging"}}}static get style(){return"bs-scrollspy{display:block}"}}export{d as BsScrollspy};