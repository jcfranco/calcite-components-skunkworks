System.register(["./p-2b33e875.system.js","./p-a7a7301d.system.js"],(function(e){"use strict";var t,r;return{setters:[function(e){t=e.h},function(e){r=e.g}],execute:function(){e("t",i);var n={chevronsLeft:"chevrons-left",chevronsRight:"chevrons-right"};function o(e,t){var r;return e||((r=t.closest("calcite-shell-panel"))===null||r===void 0?void 0:r.position)||"start"}function i(e){var t=e.parent,r=e.expanded;Array.from(t.querySelectorAll("calcite-action")).filter((function(e){return e.slot!=="menu-actions"})).forEach((function(e){return e.textEnabled=r}));t.querySelectorAll("calcite-action-group").forEach((function(e){return e.expanded=r}))}var c=function(e){var t=e.tooltip,r=e.referenceElement,n=e.expanded,o=e.ref;if(t){t.referenceElement=!n&&r}if(o){o(r)}return r};var a=e("C",(function(e){var i=e.expanded,a=e.intlExpand,l=e.intlCollapse,f=e.toggle,s=e.el,u=e.position,v=e.tooltip,d=e.ref;var p=r(s)==="rtl";var h=i?l:a;var x=[n.chevronsLeft,n.chevronsRight];if(p){x.reverse()}var g=o(u,s)==="end";var m=g?x[1]:x[0];var E=g?x[0]:x[1];var y=t("calcite-action",{dir:p?"rtl":"ltr",icon:i?m:E,onClick:f,ref:function(e){return c({tooltip:v,referenceElement:e,expanded:i,ref:d})},text:h,textEnabled:i});return v?t("calcite-tooltip-manager",null,y):y}))}}}));