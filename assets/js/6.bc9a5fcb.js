(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{166:function(t,e,n){"use strict";n.r(e);var o={name:"toggle-button-checkbox",data:function(){return{buttonActive:!0,buttonCheckboxChecked:!0}},methods:{handleButtonActive:function(){this.buttonActive=!0,this.buttonCheckboxChecked=!0},handleButtonInactive:function(){this.buttonActive=!1,this.buttonCheckboxChecked=!1},handleToggleButton:function(){this.buttonActive=!this.buttonActive}}},c=n(0),i=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"btn-group-toggle",attrs:{"data-toggle":"buttons"}},[n("bs-button",{staticClass:"btn btn-secondary active",attrs:{role:"button",active:this.buttonActive,"active-event-name":"button-active","inactive-event-name":"button-inactive"},on:{"button-active":t.handleButtonActive,"button-inactive":t.handleButtonInactive}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.buttonCheckboxChecked,expression:"buttonCheckboxChecked"}],attrs:{id:"chkbtn",type:"checkbox",checked:"",autocomplete:"off"},domProps:{checked:Array.isArray(t.buttonCheckboxChecked)?t._i(t.buttonCheckboxChecked,null)>-1:t.buttonCheckboxChecked},on:{change:function(e){var n=t.buttonCheckboxChecked,o=e.target,c=!!o.checked;if(Array.isArray(n)){var i=t._i(n,null);o.checked?i<0&&(t.buttonCheckboxChecked=n.concat([null])):i>-1&&(t.buttonCheckboxChecked=n.slice(0,i).concat(n.slice(i+1)))}else t.buttonCheckboxChecked=c}}}),t._v(" Check box button\n    ")])],1),t._v(" "),n("a",{staticClass:"btn btn-link",attrs:{href:"#",role:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.handleToggleButton(e)}}},[t._v("\n    Click here to manually toggle checkbox button "),this.buttonActive?n("span",[t._v("Inactive")]):n("span",[t._v("Active")])]),t._v(" "),n("p",[t._v("input checkbox is: "),this.buttonCheckboxChecked?n("span",[t._v("Checked")]):n("span",[t._v("Not Checked")])])])},[],!1,null,null,null);i.options.__file="toggle-button-checkbox.vue";e.default=i.exports}}]);