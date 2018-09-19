/*! Built with http://stenciljs.com */
bscomponents.loadBundle("nw0nkmri",["exports","./chunk-04c5df2e.js","./chunk-d8c058c1.js","./chunk-40b3ad27.js","./chunk-7d640bf3.js","./chunk-6e5b2c23.js","./chunk-d04497e8.js"],function(e,t,a,n,o,s,r){var i=window.bscomponents.h,l=function(){function e(){this.showEventName="show.bs.tab",this.shownEventName="shown.bs.tab",this.hideEventName="hide.bs.tab",this.hiddenEventName="hidden.bs.tab",this.ignoreDataToggles=!1,this.dispatchEventsOnTab=!1,this.showTab=!1}return e.prototype.componentWillLoad=function(){var e=this;this.showTab&&(t.hasClass(this.tabEl,"fade")?(t.removeClass(this.tabEl,"fade"),this.tabEl.addEventListener(this.shownEventName,function(){t.addClass(e.tabEl,"fade")},{once:!0}),this.show()):this.show())},e.prototype.show=function(a){var n,o=this;if(void 0===a&&(a=null),!t.hasClass(this.tabEl,"disabled")&&(n=a||(this.ignoreDataToggles||a?null:this.searchForTriggeringButton()),(this.ignoreDataToggles||!n||!t.hasClass(n,"disabled"))&&(!this.tabEl.parentNode||this.tabEl.parentNode.nodeType!==Node.ELEMENT_NODE||!t.hasClass(this.tabEl,"active")))){var s,r=e.getActiveElements(this.tabEl,this.tabEl.parentNode),i=this.getActiveButtons(n),l=[];if(this.dispatchEventsOnTab||this.ignoreDataToggles||!n){for(var h=0,c=r.length;h<c;h+=1)s=r[h],l.push(t.customEvent(r[h],this.hideEventName,{},this.tabEl));l.push(t.customEvent(this.tabEl,this.showEventName,{},s))}else{for(h=0,c=i.length;h<c;h+=1)s=i[h],l.push(t.customEvent(i[h],this.hideEventName,{},n));l.push(t.customEvent(n,this.showEventName,{},s))}l.some(function(e){return e.defaultPrevented})||(!this.ignoreDataToggles&&n&&e.activate(n,i),e.activate(this.tabEl,r,function(){if(o.dispatchEventsOnTab||o.ignoreDataToggles||!n){for(var e=0,a=r.length;e<a;e+=1)t.customEvent(r[e],o.hiddenEventName,{},o.tabEl);t.customEvent(o.tabEl,o.shownEventName,{},s)}else{for(e=0,a=i.length;e<a;e+=1)t.customEvent(i[e],o.hiddenEventName,{},n);t.customEvent(n,o.shownEventName,{},s)}}))}},e.prototype.searchForTriggeringButton=function(){for(var e=[],t=Array.prototype.slice.call(document.querySelectorAll('[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]')),a=0,n=t.length;a<n;a+=1){var r=s.getTargetSelector(t[a]);r&&o.elementMatches(this.tabEl,r)&&e.push(t[a])}return e.length>1?(console.warn("Unable to find tab toggle because more than one data toggle target matches this tab"),null):1===e.length?e[0]:null},e.prototype.getActiveButtons=function(e){if(this.ignoreDataToggles||!e)return[];var t=o.closest(e,".nav, .list-group");if(t){if("UL"!==t.nodeName)return Array.prototype.slice.call(t.querySelectorAll(".active"));for(var a=[],n=Array.prototype.slice.call(t.children),s=0,r=n.length;s<r;s+=1)if("LI"===n[s].nodeName)for(var i=Array.prototype.slice.call(n[s].querySelectorAll(".active")),l=0,h=i.length;l<h;l+=1)a.push(i[l]);return a}return[]},e.getActiveElements=function(e,a){if("UL"===a.nodeName)return Array.prototype.slice.call(e.parentNode.querySelectorAll("> li > .active"));for(var n=[],o=Array.prototype.slice.call(e.parentNode.children),s=0,r=o.length;s<r;s+=1)t.hasClass(o[s],"active")&&n.push(o[s]);return n},e.activate=function(e,s,r){void 0===r&&(r=function(){});for(var i=s[0],l=i&&t.hasClass(i,"fade"),h=a.getTransitionDurationFromElement(i),c=0,d=s.length;c<d;c+=1){t.removeClass(s[c],"show"),t.removeClass(s[c],"active");for(var u=s[c].parentNode.querySelectorAll(".dropdown-menu .active"),g=0,v=u.length;g<v;g+=1)t.removeClass(u[g],"active");"tab"===i.getAttribute("role")&&i.setAttribute("aria-selected",!1)}if(t.addClass(e,"active"),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),n.reflow(e),t.addClass(e,"show"),e.parentNode&&t.hasClass(e.parentNode,"dropdown-menu")){var b=o.closest(e,".dropdown");if(b)for(var p=Array.prototype.slice.call(b.querySelectorAll(".dropdown-toggle")),f=0,m=p.length;f<m;f+=1)t.addClass(p[f],"active");e.setAttribute("aria-expanded",!0)}l?setTimeout(function(){r()},h):r()},e.prototype.handleShowTabWatch=function(e){e&&this.show()},e.prototype.tab=function(e,a){if(void 0===e&&(e={}),void 0===a&&(a=null),0===t._size(e))return this.tabEl;if("show"===e)return this.show(a),!0;if("string"==typeof e)throw new Error('No method named "'+e+'"');return null},e.prototype.render=function(){return i("slot",null)},Object.defineProperty(e,"is",{get:function(){return"bs-tab"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{dispatchEventsOnTab:{type:Boolean,attr:"dispatch-events-on-tab",mutable:!0},hiddenEventName:{type:String,attr:"hidden-event-name"},hideEventName:{type:String,attr:"hide-event-name"},ignoreDataToggles:{type:Boolean,attr:"ignore-data-toggles",mutable:!0},showEventName:{type:String,attr:"show-event-name"},shownEventName:{type:String,attr:"shown-event-name"},showTab:{type:Boolean,attr:"show-tab",mutable:!0,watchCallbacks:["handleShowTabWatch"]},tab:{method:!0},tabEl:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"bs-tab{display:block}"},enumerable:!0,configurable:!0}),e}();e.BsTab=l,Object.defineProperty(e,"__esModule",{value:!0})});