System.register(["./p-2b33e875.system.js","./p-a7a7301d.system.js","./p-95dfb659.system.js","./p-2c235db8.system.js"],(function(e){"use strict";var t,i,a,r,n,c,l,o,s,d,h,f;return{setters:[function(e){t=e.r;i=e.c;a=e.h;r=e.H;n=e.g},function(e){c=e.f;l=e.n;o=e.a;s=e.g;d=e.C;h=e.l},function(e){f=e.g},function(){}],execute:function(){var p;(function(e){e["Single"]="single";e["Multi"]="multi";e["Children"]="children";e["MultiChildren"]="multi-children";e["Ancestors"]="ancestors"})(p||(p={}));var m="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block;outline:2px solid transparent;outline-offset:2px}";var u=e("calcite_tree",function(){function e(e){t(this,e);this.calciteTreeSelect=i(this,"calciteTreeSelect",7);this.lines=false;this.inputEnabled=false;this.scale="m";this.selectionMode=p.Single}e.prototype.componentWillRender=function(){var e=this.el.parentElement.closest("calcite-tree");this.lines=e?e.lines:this.lines;this.scale=e?e.scale:this.scale;this.inputEnabled=e?e.inputEnabled:this.inputEnabled;this.selectionMode=e?e.selectionMode:this.selectionMode;this.child=!!e};e.prototype.render=function(){return a(r,{"aria-multiselectable":this.selectionMode===p.Multi||this.selectionMode===p.MultiChildren,role:!this.child?"tree":undefined,tabIndex:this.getRootTabIndex()},a("slot",null))};e.prototype.onFocus=function(){if(!this.child){var e=this.el.querySelector("calcite-tree-item[selected]")||this.el.querySelector("calcite-tree-item");c(e)}};e.prototype.onFocusIn=function(e){var t=e.relatedTarget===this.el||!this.el.contains(e.relatedTarget);if(t){this.el.tabIndex=-1}};e.prototype.onFocusOut=function(e){var t=!this.el.contains(e.relatedTarget);if(t){this.el.tabIndex=this.getRootTabIndex()}};e.prototype.onClick=function(e){var t=e.target;var i=l(t.querySelectorAll("calcite-tree-item"));if(!this.child){e.preventDefault();e.stopPropagation()}if(this.selectionMode===p.Ancestors&&!this.child){this.updateAncestorTree(e);return}var a=this.selectionMode!==null&&(!t.hasChildren||t.hasChildren&&(this.selectionMode===p.Children||this.selectionMode===p.MultiChildren));var r=e.detail.modifyCurrentSelection&&(this.selectionMode===p.Multi||this.selectionMode===p.MultiChildren);var n=this.selectionMode===p.MultiChildren||this.selectionMode===p.Children;var c=!r&&((this.selectionMode===p.Single||this.selectionMode===p.Multi)&&i.length<=0||this.selectionMode===p.Children||this.selectionMode===p.MultiChildren);var o=this.selectionMode===p.Children||this.selectionMode===p.MultiChildren;if(!this.child){var s=[];if(a){s.push(t)}if(n){i.forEach((function(e){s.push(e)}))}if(c){var d=l(this.el.querySelectorAll("calcite-tree-item[selected]"));d.forEach((function(e){if(!s.includes(e)){e.selected=false}}))}if(o&&!e.detail.forceToggle){t.expanded=true}if(r){window.getSelection().removeAllRanges()}if(r&&t.selected||n&&e.detail.forceToggle){s.forEach((function(e){e.selected=false}))}else{s.forEach((function(e){e.selected=true}))}}this.calciteTreeSelect.emit({selected:l(this.el.querySelectorAll("calcite-tree-item")).filter((function(e){return e.selected}))})};e.prototype.updateAncestorTree=function(e){var t=e.target;var i=t.querySelectorAll("calcite-tree-item");var a=[];var r=t.parentElement.closest("calcite-tree-item");while(r){a.push(r);r=r.parentElement.closest("calcite-tree-item")}t.selected=!t.selected;t.indeterminate=false;if(i===null||i===void 0?void 0:i.length){i.forEach((function(e){e.selected=t.selected;e.indeterminate=false}))}if(a){a.forEach((function(e){var t=l(e.querySelectorAll("calcite-tree-item"));var i=t.filter((function(e){return e.selected}));if(i.length===0){e.selected=false;e.indeterminate=false;return}var a=i.length<t.length;e.indeterminate=a;e.selected=!a}))}this.calciteTreeSelect.emit({selected:l(this.el.querySelectorAll("calcite-tree-item")).filter((function(e){return e.selected}))})};e.prototype.getRootTabIndex=function(){return!this.child?0:-1};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});return e}());u.style=m;var v={checkboxLabel:"calcite-tree-label",checkbox:"calcite-tree-checkbox",chevron:"calcite-tree-chevron",nodeContainer:"calcite-tree-node",childrenContainer:"calcite-tree-children"};var b='@charset "UTF-8";@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block;color:var(--calcite-tree-text);cursor:pointer;outline:none;max-width:100%;--calcite-tree-text:var(--calcite-ui-text-2);--calcite-tree-text:var(--calcite-ui-text-1);--calcite-tree-text:var(--calcite-ui-text-1);--calcite-tree-chevron:var(--calcite-ui-border-1);--calcite-tree-chevron-hover:var(--calcite-ui-text-3);--calcite-tree-vertical-padding:0.375rem;--calcite-tree-indicator:var(--calcite-ui-border-1);--calcite-tree-indicator-active:var(--calcite-ui-brand);--calcite-tree-indicator-first-start:0.1rem;--calcite-tree-indicator-first-end:auto;--calcite-tree-indicator-distance-start:0.15rem;--calcite-tree-indicator-distance-end:auto;--calcite-tree-icon-edge-distance-start:-0.2rem;--calcite-tree-icon-edge-distance-end:0;--calcite-tree-icon-content-distance-start:0.375rem;--calcite-tree-icon-content-distance-end:0;--calcite-tree-indent-start:1.4rem;--calcite-tree-indent-end:0;--calcite-tree-children-indent-start:0.25rem;--calcite-tree-children-indent-end:0;--calcite-tree-children-padding-start:1rem;--calcite-tree-children-padding-end:0;--calcite-tree-checkbox-padding-start:0;--calcite-tree-checkbox-padding-end:0.5rem;--calcite-tree-line-position-start:0.05rem;--calcite-tree-line-position-end:0;--calcite-tree-parent-line-position-start:-0.95rem;--calcite-tree-parent-line-position-end:0;--calcite-tree-line-width:1px;--calcite-tree-hover-line-width:3px}:host([scale=s]){font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-tree-padding-y:0.25rem}:host([scale=m]){font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-tree-padding-y:0.5rem}:host([scale=l]){font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-tree-padding-y:0.75rem}:host([lines]){--calcite-tree-line:var(--calcite-ui-border-3);--calcite-tree-line-hover:var(--calcite-ui-border-1)}:host([lines]) .calcite-tree-node:before{display:none}:host(:not([lines])) .calcite-tree-node:after{display:none}:host([scale=s]){--calcite-tree-hover-line-width:2px;--calcite-tree-vertical-padding:0.1875rem;--calcite-tree-children-indent-start:0rem;--calcite-tree-children-padding-start:0.8rem;--calcite-tree-line-position-start:0.3rem;--calcite-tree-parent-line-position-start:-0.5rem}:host .calcite--rtl{--calcite-tree-indicator-first-start:0;--calcite-tree-indicator-first-end:0.1rem;--calcite-tree-indicator-distance-start:auto;--calcite-tree-indicator-distance-end:0.15rem;--calcite-tree-icon-edge-distance-start:auto;--calcite-tree-icon-edge-distance-end:-0.2rem;--calcite-tree-icon-content-distance-start:0;--calcite-tree-icon-content-distance-end:0.375rem;--calcite-tree-indent-start:0;--calcite-tree-indent-end:1.4rem;--calcite-tree-children-indent-start:0;--calcite-tree-children-indent-end:0.25rem;--calcite-tree-children-padding-start:0;--calcite-tree-children-padding-end:1rem;--calcite-tree-checkbox-padding-start:0.5rem;--calcite-tree-checkbox-padding-end:0;--calcite-tree-line-position-start:0;--calcite-tree-line-position-end:0.05rem;--calcite-tree-parent-line-position-start:0;--calcite-tree-parent-line-position-end:-0.95rem}:host .calcite--rtl[scale=s]{--calcite-tree-children-indent-end:0rem;--calcite-tree-children-padding-end:0.8rem;--calcite-tree-line-position-end:0.3rem;--calcite-tree-parent-line-position-end:-0.5rem}::slotted(*){color:inherit;text-decoration:none !important;word-wrap:break-word;overflow-wrap:break-word;min-width:0;max-width:100%}::slotted(*):hover{text-decoration:none !important}::slotted(a){width:100%;text-decoration:none}:host{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.calcite-tree-checkbox{line-height:0;padding-left:var(--calcite-tree-checkbox-padding-start);padding-right:var(--calcite-tree-checkbox-padding-end);outline:none}.calcite-tree-label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:none}.calcite-tree-children{z-index:1;margin-left:var(--calcite-tree-children-indent-start);margin-right:var(--calcite-tree-children-indent-end);padding-left:var(--calcite-tree-children-padding-start);padding-right:var(--calcite-tree-children-padding-end);position:relative;-webkit-transform:scaleY(0);transform:scaleY(0);opacity:0;overflow:hidden;-webkit-transition:0.15s cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity 0.15s cubic-bezier(0.215, 0.44, 0.42, 0.88), all 0.15s ease-in-out;transition:0.15s cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity 0.15s cubic-bezier(0.215, 0.44, 0.42, 0.88), all 0.15s ease-in-out;height:0;-webkit-transform-origin:top;transform-origin:top}.calcite-tree-children:after{-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;content:"";height:100%;width:var(--calcite-tree-line-width);background:var(--calcite-tree-line);left:var(--calcite-tree-line-position-start);right:var(--calcite-tree-line-position-end);top:0;position:absolute}:host([expanded])>.calcite-tree-children{-webkit-transform:scaleY(1);transform:scaleY(1);opacity:1;height:auto}:host([has-children]) .calcite-tree-children:hover:after,:host([has-children]) .calcite-tree-children:focus:after{background:var(--calcite-tree-line-hover)}.calcite-tree-node{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:var(--calcite-tree-padding-y) 0;padding-left:var(--calcite-tree-indent-start);padding-right:var(--calcite-tree-indent-end);position:relative}.calcite-tree-node:before{content:"•";position:absolute;left:var(--calcite-tree-indicator-distance-start);right:var(--calcite-tree-indicator-distance-end);opacity:0;color:var(--calcite-tree-indicator);-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out}.calcite-tree-node:after{-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;content:"";height:100%;width:var(--calcite-tree-line-width);background:var(--calcite-tree-line);left:var(--calcite-tree-parent-line-position-start);right:var(--calcite-tree-parent-line-position-end);top:0;position:absolute}:host([depth="1"])>.calcite-tree-node:after{display:none}:host([input-enabled]) .calcite-tree-node:before{display:none}:host([has-children])>.calcite-tree-node{padding-left:0;padding-right:0}:host([has-children])>.calcite-tree-node:before{display:none}:host([depth="1"])>.calcite-tree-node:before,:host([depth="1"])>.calcite-tree-children:before{left:var(--calcite-tree-indicator-first-start);right:var(--calcite-tree-indicator-first-end)}.calcite-tree-node:hover:before,:host([selected]) .calcite-tree-node:hover:before,:host(:focus) .calcite-tree-node:before{opacity:1}.calcite-tree-node:hover:after,:host([selected]) .calcite-tree-node:hover:after,:host(:focus) .calcite-tree-node:after{width:var(--calcite-tree-hover-line-width);background:var(--calcite-tree-line-hover);z-index:2}.calcite-tree-node:hover ::slotted(*),:host([selected]) .calcite-tree-node:hover ::slotted(*),:host(:focus) .calcite-tree-node ::slotted(*){color:var(--calcite-tree-text-hover)}.calcite-tree-node:hover .calcite-tree-chevron,:host([selected]) .calcite-tree-node:hover .calcite-tree-chevron,:host(:focus) .calcite-tree-node .calcite-tree-chevron{fill:var(--calcite-tree-chevron-hover)}.calcite-tree-node:hover .calcite-tree-indicator,:host([selected]) .calcite-tree-node:hover .calcite-tree-indicator,:host(:focus) .calcite-tree-node .calcite-tree-indicator{fill:var(--calcite-tree-indicator-hover)}:host([selected])>.calcite-tree-node,:host([selected])>.calcite-tree-node:hover{color:var(--calcite-tree-text-active);font-weight:500}:host([selected])>.calcite-tree-node:before,:host([selected])>.calcite-tree-node:hover:before{opacity:1;color:var(--calcite-tree-indicator-active)}:host([selected])>.calcite-tree-node:after,:host([selected])>.calcite-tree-node:hover:after{background:var(--calcite-ui-brand);width:var(--calcite-tree-hover-line-width);z-index:2}:host([selected])>.calcite-tree-node ::slotted(*),:host([selected])>.calcite-tree-node:hover ::slotted(*){color:var(--calcite-tree-text-active)}:host([has-children][expanded])>.calcite-tree-node{color:var(--calcite-tree-text-active);font-weight:500}:host([has-children][expanded])>.calcite-tree-node:after{background:var(--calcite-ui-brand)}:host([has-children][expanded])>.calcite-tree-node:before{opacity:1;color:var(--calcite-tree-indicator-active)}:host([has-children][expanded])>.calcite-tree-node ::slotted(*){color:var(--calcite-tree-text-active)}:host([has-children][expanded][selected])>.calcite-tree-node:after{background:var(--calcite-ui-brand);width:var(--calcite-tree-hover-line-width);z-index:2}.calcite-tree-chevron{-webkit-transition:all 150ms ease-in-out;transition:all 150ms ease-in-out;-ms-flex:0 0 auto;flex:0 0 auto;position:relative;-ms-flex-item-align:center;align-self:center;left:var(--calcite-tree-icon-edge-distance-start);right:var(--calcite-tree-icon-edge-distance-end);margin-right:var(--calcite-tree-icon-content-distance-start);margin-left:var(--calcite-tree-icon-content-distance-end);-webkit-transform:rotate(0deg);transform:rotate(0deg);fill:var(--calcite-tree-chevron)}.calcite--rtl .calcite-tree-chevron{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(:hover) .calcite-tree-chevron,:host(:focus) .calcite-tree-chevron{fill:var(--calcite-tree-chevron-hover);stroke:var(--calcite-tree-chevron-hover);stroke-width:0.75}:host([expanded])>.calcite-tree-node>.calcite-tree-chevron{-webkit-transform:rotate(90deg);transform:rotate(90deg);fill:var(--calcite-ui-brand);stroke-width:0.75;stroke:var(--calcite-ui-brand)}';var g=e("calcite_tree_item",function(){function e(e){var a=this;t(this,e);this.calciteTreeItemSelect=i(this,"calciteTreeItemSelect",7);this.selected=false;this.expanded=false;this.parentExpanded=false;this.depth=-1;this.hasChildren=null;this.iconClickHandler=function(e){e.stopPropagation();a.expanded=!a.expanded;if(!a.inputEnabled){a.calciteTreeItemSelect.emit({modifyCurrentSelection:e.shiftKey,forceToggle:true})}};this.childrenClickHandler=function(e){return e.stopPropagation()}}e.prototype.expandedHandler=function(e){var t=o(this.el,"children",{all:true,selector:"calcite-tree-item"});t.forEach((function(t){return t.parentExpanded=e}))};e.prototype.connectedCallback=function(){this.expandedHandler(this.expanded)};e.prototype.componentWillRender=function(){this.hasChildren=!!this.el.querySelector("calcite-tree");this.depth=0;var e=this.el.closest("calcite-tree");if(!e){return}this.selectionMode=e.selectionMode;this.scale=e.scale||"m";this.lines=e.lines;this.inputEnabled=e.inputEnabled;var t;while(e){t=e.parentElement.closest("calcite-tree");if(t===e){break}else{e=t;this.depth=this.depth+1}}};e.prototype.render=function(){var e,t,i;var n=this;var c=s(this.el)==="rtl";var l=this.hasChildren?a("calcite-icon",{class:(e={},e[v.chevron]=true,e[d.rtl]=c,e),"data-test-id":"icon",icon:"chevron-right",onClick:this.iconClickHandler,scale:"s"}):null;var o=this.inputEnabled?a("label",{class:v.checkboxLabel},a("calcite-checkbox",{checked:this.selected,class:v.checkbox,"data-test-id":"checkbox",indeterminate:this.hasChildren&&this.indeterminate,scale:this.scale,tabIndex:-1}),a("slot",null)):null;var h=!(this.parentExpanded||this.depth===1);return a(r,{"aria-expanded":this.hasChildren?this.expanded.toString():undefined,"aria-hidden":h.toString(),"aria-selected":this.selected?"true":this.selectionMode===p.Multi||this.selectionMode===p.MultiChildren?"false":undefined,"calcite-hydrated-hidden":h,role:"treeitem",tabindex:this.parentExpanded||this.depth===1?"0":"-1"},a("div",{class:(t={},t[v.nodeContainer]=true,t[d.rtl]=c,t),ref:function(e){return n.defaultSlotWrapper=e}},l,o?o:a("slot",null)),a("div",{class:(i={},i[v.childrenContainer]=true,i[d.rtl]=c,i),"data-test-id":"calcite-tree-children",onClick:this.childrenClickHandler,ref:function(e){return n.childrenSlotWrapper=e},role:this.hasChildren?"group":undefined},a("slot",{name:"children"})))};e.prototype.onClick=function(e){var t=h(this.el,"a")[0];if(t&&e.composedPath()[0].tagName.toLowerCase()!=="a"){var i=t.target===""?"_self":t.target;window.open(t.href,i)}this.expanded=!this.expanded;this.calciteTreeItemSelect.emit({modifyCurrentSelection:e.shiftKey||this.inputEnabled,forceToggle:false})};e.prototype.keyDownHandler=function(e){var t;switch(f(e.key)){case" ":this.calciteTreeItemSelect.emit({modifyCurrentSelection:e.shiftKey,forceToggle:false});e.preventDefault();e.stopPropagation();break;case"Enter":var i=l(this.el.children).find((function(e){return e.matches("a")}));if(i){i.click();this.selected=true}else{this.calciteTreeItemSelect.emit({modifyCurrentSelection:e.shiftKey,forceToggle:false})}e.preventDefault();e.stopPropagation();break;case"ArrowLeft":if(this.hasChildren&&this.expanded){this.expanded=false;e.preventDefault();e.stopPropagation();break}var a=this.el.parentElement.closest("calcite-tree-item");if(a&&(!this.hasChildren||this.expanded===false)){a.focus();e.preventDefault();e.stopPropagation();break}break;case"ArrowRight":if(this.hasChildren&&this.expanded===false){this.expanded=true;e.preventDefault();e.stopPropagation();break}if(this.hasChildren&&this.expanded){this.el.querySelector("calcite-tree-item").focus();break}break;case"ArrowUp":var r=this.el.previousElementSibling;if(r&&r.matches("calcite-tree-item")){r.focus()}break;case"ArrowDown":var n=this.el.nextElementSibling;if(n&&n.matches("calcite-tree-item")){n.focus()}break;case"Home":t=this.el.closest("calcite-tree:not([child])");var c=t.querySelector("calcite-tree-item");c.focus();break;case"End":t=this.el.closest("calcite-tree:not([child])");var o=t.children[t.children.length-1];var s=l(o.children).find((function(e){return e.matches("calcite-tree")}));while(s){o=s.children[t.children.length-1];s=l(o.children).find((function(e){return e.matches("calcite-tree")}))}o.focus();break}};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{expanded:["expandedHandler"]}},enumerable:false,configurable:true});return e}());g.style=b}}}));