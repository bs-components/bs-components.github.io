/*! Built with http://stenciljs.com */
bscomponents.loadBundle("bz5xowh8",["exports","./chunk-04c5df2e.js","./chunk-e7e9646c.js","./chunk-5ed99f21.js","./chunk-d8c058c1.js","./chunk-40b3ad27.js","./chunk-6cc71868.js"],function(t,e,i,o,s,n,a){var d=window.bscomponents.h,l=function(){function t(){var t=this;this.showEventName="show.bs.modal",this.shownEventName="shown.bs.modal",this.hideEventName="hide.bs.modal",this.hiddenEventName="hidden.bs.modal",this.showModal=!1,this.handleDataDismissModalClick=function(e){t.modalEl.contains(e.target)||t.hide(),t.elementIsOrInADataDismissForThisModal(e.target)&&t.hide()},this.handleResizeEvent=function(){t.adjustDialog()},this.hideModalBecauseEscapePressed=function(e){27===e.which&&t.hide()},this.handleFocusIn=function(e){document===e.target||t.modalEl.contains(e.target)||t.modalEl.focus()},this.backdropClickDismiss=function(e){e.target===e.currentTarget&&("static"===i._get(t.config,"backdrop","")?t.modalEl.focus():t.hide())}}return t.prototype.componentWillLoad=function(){var t=this;if(this.isShown=e.hasClass(this.modalEl,"show"),this.isTransitioning=!1,this.showModal&&!this.isShown){if(this.getConfig(),!e.hasClass(this.modalEl,"fade"))return void this.show();e.removeClass(this.modalEl,"fade");var i=s.getTransitionDurationFromElement(this.modalEl);this.show(),setTimeout(function(){e.addClass(t.modalEl,"fade")},i)}else if(!this.showModal&&this.isShown){if(this.getConfig(),!e.hasClass(this.modalEl,"fade"))return void this.hide();i=s.getTransitionDurationFromElement(this.modalEl),e.removeClass(this.modalEl,"fade"),this.hide(),setTimeout(function(){e.addClass(t.modalEl,"fade")},i)}},t.prototype.componentDidUnload=function(){this.unbindAllEventListenersUsed()},t.prototype.unbindAllEventListenersUsed=function(){document.removeEventListener("focusin",this.handleFocusIn),this.modalEl.removeEventListener("click",this.backdropClickDismiss),document.removeEventListener("click",this.handleDataDismissModalClick),window.removeEventListener("resize",this.handleResizeEvent),document.removeEventListener("keydown",this.hideModalBecauseEscapePressed)},t.prototype.getScrollbarWidth=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},t.prototype.checkScrollbar=function(){var t=document.body.getBoundingClientRect();this.isBodyOverflowing=t.left+t.right<window.innerWidth,this.scrollbarWidth=this.getScrollbarWidth()},t.prototype.setScrollbar=function(){if(this.isBodyOverflowing){for(var t=Array.prototype.slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),e=Array.prototype.slice.call(document.querySelectorAll(".sticky-top")),i=0,o=t.length;i<o;i+=1){var s=t[i].style.paddingRight,n=window.getComputedStyle(t[i])["padding-right"];t[i].dataset.paddingRight=s,t[i].style.paddingRight=parseFloat(n)+this.scrollbarWidth+"px"}for(i=0,o=e.length;i<o;i+=1){var a=e[i].style.marginRight,d=window.getComputedStyle(e[i])["margin-right"];e[i].dataset.marginRight=a,e[i].style.marginRight=parseFloat(d)-this.scrollbarWidth+"px"}var l=document.body.style.paddingRight,r=window.getComputedStyle(document.body)["padding-right"];document.body.dataset.paddingRight=l,document.body.style.paddingRight=parseFloat(r)+this.scrollbarWidth+"px"}},t.resetScrollbar=function(){for(var t=Array.prototype.slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),e=0,i=t.length;e<i;e+=1){var o=t[e].dataset.paddingRight;delete t[e].dataset.paddingRight,t[e].style.paddingRight=o||""}var s=Array.prototype.slice.call(document.querySelectorAll(".sticky-top"));for(e=0,i=s.length;e<i;e+=1){var n=s[e].dataset.marginRight;void 0!==n&&(s[e].style.marginRight=n,delete s[e].dataset.marginRight)}var a=document.body.dataset.paddingRight;delete document.body.dataset.paddingRight,document.body.style.paddingRight=a||""},t.prototype.adjustDialog=function(){var t=this.modalEl.scrollHeight>document.documentElement.clientHeight;!this.isBodyOverflowing&&t&&(this.modalEl.style.paddingLeft=this.scrollbarWidth+"px"),this.isBodyOverflowing&&!t&&(this.modalEl.style.paddingRight=this.scrollbarWidth+"px")},t.prototype.hide=function(){var t=this;if(!this.isTransitioning&&this.isShown){var i=e.customEvent(this.modalEl,this.hideEventName);if(this.isShown&&!i.defaultPrevented){this.isShown=!1;var o=e.hasClass(this.modalEl,"fade");if(o&&(this.isTransitioning=!0),this.setEscapeEvent(),this.setResizeEvent(),document.removeEventListener("focusin",this.handleFocusIn),e.removeClass(this.modalEl,"show"),document.removeEventListener("click",this.handleDataDismissModalClick),o){var n=s.getTransitionDurationFromElement(this.modalEl);setTimeout(function(){t.hideModal()},n)}else this.hideModal()}}},t.prototype.hideModal=function(){var i=this;this.modalEl.style.display="none",this.modalEl.setAttribute("aria-hidden","true"),this.isTransitioning=!1,this.showBackdrop(function(){e.removeClass(document.body,"modal-open"),i.resetAdjustments(),t.resetScrollbar(),i.relatedTarget&&(i.relatedTarget.focus(),i.relatedTarget=null);var o=s.getTransitionDurationFromElement(i.modalEl);setTimeout(function(){window.requestAnimationFrame(function(){window.requestAnimationFrame(function(){e.customEvent(i.modalEl,i.hiddenEventName)})})},o),i.unbindAllEventListenersUsed()})},t.prototype.resetAdjustments=function(){this.modalEl.style.paddingLeft="",this.modalEl.style.paddingRight=""},t.prototype.show=function(t){var i=this;if(void 0===t&&(t=null),!this.isTransitioning&&!this.isShown){e.hasClass(this.modalEl,"fade")&&(this.isTransitioning=!0);var o=e.customEvent(this.modalEl,this.showEventName,{},t);this.isShown||o.defaultPrevented||(t&&(this.relatedTarget=t),this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.adjustDialog(),e.addClass(document.body,"modal-open"),this.setEscapeEvent(),this.setResizeEvent(),this.setClicksThatCanCloseModalEvent(),this.showBackdrop(function(){return i.showElement()}))}},t.prototype.elementIsOrInADataDismissForThisModal=function(t){for(var e=Array.prototype.slice.call(this.modalEl.querySelectorAll('[data-dismiss="modal"]')),i=0,o=e.length;i<o;i+=1)if(e[i].contains(t))return!0;return!1},t.prototype.setClicksThatCanCloseModalEvent=function(){var t=this;this.isShown?setTimeout(function(){document.addEventListener("click",t.handleDataDismissModalClick)},0):this.isShown||document.removeEventListener("click",this.handleDataDismissModalClick)},t.prototype.setResizeEvent=function(){this.isShown?window.addEventListener("resize",this.handleResizeEvent):window.removeEventListener("resize",this.handleResizeEvent)},t.prototype.setEscapeEvent=function(){this.isShown&&this.config.keyboard?document.addEventListener("keydown",this.hideModalBecauseEscapePressed):this.isShown||document.removeEventListener("keydown",this.hideModalBecauseEscapePressed)},t.prototype.getConfig=function(t){void 0===t&&(t={}),this.config={};var s={};if(o._has(t,"backdrop")){var n=e.toLower(i._get(t,"backdrop","true"));s.backdrop="static"===n?"static":a.getConfigBoolean(n)}else o._has(this.modalEl.dataset,"backdrop")?(n=e.toLower(this.modalEl.dataset.backdrop),s.backdrop="static"===n?"static":a.getConfigBoolean(n)):s.backdrop=!0;o._has(t,"focus")?s.focus=a.getConfigBoolean(i._get(t,"focus",!0)):o._has(this.modalEl.dataset,"focus")?s.focus=a.getConfigBoolean(this.modalEl.dataset.focus):s.focus=!0,o._has(t,"keyboard")?s.keyboard=a.getConfigBoolean(i._get(t,"keyboard",!0)):o._has(this.modalEl.dataset,"keyboard")?s.keyboard=a.getConfigBoolean(this.modalEl.dataset.keyboard):s.keyboard=!0,o._has(t,"show")?s.show=a.getConfigBoolean(i._get(t,"show",!0)):o._has(this.modalEl.dataset,"show")?s.show=a.getConfigBoolean(this.modalEl.dataset.show):s.show=!0,this.config=s},t.prototype.enforceFocus=function(){document.removeEventListener("focusin",this.handleFocusIn),document.addEventListener("focusin",this.handleFocusIn)},t.prototype.showElement=function(){var t=this,i=e.hasClass(this.modalEl,"fade");if(this.modalEl.parentNode&&this.modalEl.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this.modalEl),this.modalEl.style.display="block",this.modalEl.removeAttribute("aria-hidden"),this.modalEl.scrollTop=0,i&&n.reflow(this.modalEl),e.addClass(this.modalEl,"show"),this.config.focus&&this.enforceFocus(),i){var o=s.getTransitionDurationFromElement(this.modalEl);setTimeout(function(){t.config.focus&&t.modalEl.focus(),t.isTransitioning=!1,window.requestAnimationFrame(function(){window.requestAnimationFrame(function(){setTimeout(function(){e.customEvent(t.modalEl,t.shownEventName,{},t.relatedTarget)},0)})})},o)}else window.requestAnimationFrame(function(){window.requestAnimationFrame(function(){setTimeout(function(){e.customEvent(t.modalEl,t.shownEventName,{},t.relatedTarget)},0)})})},t.prototype.showBackdrop=function(t){var i=this;void 0===t&&(t=function(){});var o=e.hasClass(this.modalEl,"fade")?"fade":"";if(this.isShown&&this.config.backdrop){if(this.backdrop=document.createElement("div"),this.backdrop.className="modal-backdrop",o&&this.backdrop.classList.add(o),document.body.appendChild(this.backdrop),this.modalEl.addEventListener("click",this.backdropClickDismiss),o&&n.reflow(this.backdrop),e.addClass(this.backdrop,"show"),!t)return;if(!o)return void t();var a=s.getTransitionDurationFromElement(this.backdrop);setTimeout(function(){t()},a)}else if(!this.isShown&&this.backdrop)if(e.removeClass(this.backdrop,"show"),e.hasClass(this.modalEl,"fade")){var d=s.getTransitionDurationFromElement(this.backdrop);setTimeout(function(){i.removeBackdrop(t)},d)}else this.removeBackdrop(t);else t()},t.prototype.removeBackdrop=function(t){void 0===t&&(t=function(){}),this.backdrop&&(this.backdrop.parentNode.removeChild(this.backdrop),this.backdrop=null),t()},t.prototype.handleActiveWatch=function(t){if(t)return this.getConfig(),void this.show();this.hide()},t.prototype.modal=function(t,i){if(void 0===t&&(t={}),void 0===i&&(i=null),0===e._size(t))return this.modalEl;if("object"==typeof t)return this.getConfig(t),this.config.show&&!this.isShown&&this.show(),!0;if("toggle"===t)return this.getConfig(),this.isShown?this.hide():this.show(i),!0;if("show"===t)return this.getConfig(),this.show(),!0;if("hide"===t)return this.hide(),!0;if("handleUpdate"===t)return this.adjustDialog(),!0;if("string"==typeof t)throw new Error('No method named "'+t+'"');return null},t.prototype.render=function(){return d("slot",null)},Object.defineProperty(t,"is",{get:function(){return"bs-modal"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{backdrop:{state:!0},config:{state:!0},getScrollbarWidth:{method:!0},hiddenEventName:{type:String,attr:"hidden-event-name"},hideEventName:{type:String,attr:"hide-event-name"},isBodyOverflowing:{state:!0},isShown:{state:!0},isTransitioning:{state:!0},modal:{method:!0},modalEl:{elementRef:!0},relatedTarget:{state:!0},scrollbarWidth:{state:!0},showEventName:{type:String,attr:"show-event-name"},showModal:{type:Boolean,attr:"show-modal",mutable:!0,watchCallbacks:["handleActiveWatch"]},shownEventName:{type:String,attr:"shown-event-name"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"bs-modal{display:block}"},enumerable:!0,configurable:!0}),t}();t.BsModal=l,Object.defineProperty(t,"__esModule",{value:!0})});