import{h as e}from"./p-a584ff88.js";import{g as t}from"./p-c47fe2f9.js";function n({parent:e,expanded:t}){Array.from(e.querySelectorAll("calcite-action")).filter((e=>"menu-actions"!==e.slot)).forEach((e=>e.textEnabled=t)),e.querySelectorAll("calcite-action-group").forEach((e=>e.expanded=t))}const o=({expanded:n,intlExpand:o,intlCollapse:r,toggle:l,el:a,position:i,tooltip:c,ref:p})=>{const f="rtl"===t(a),s=n?r:o,d=["chevrons-left","chevrons-right"];f&&d.reverse();const m="end"===function(e,t){var n;return e||(null===(n=t.closest("calcite-shell-panel"))||void 0===n?void 0:n.position)||"start"}(i,a),u=e("calcite-action",{dir:f?"rtl":"ltr",icon:n?m?d[1]:d[0]:m?d[0]:d[1],onClick:l,ref:e=>(({tooltip:e,referenceElement:t,expanded:n,ref:o})=>(e&&(e.referenceElement=!n&&t),o&&o(t),t))({tooltip:c,referenceElement:e,expanded:n,ref:p}),text:s,textEnabled:n});return c?e("calcite-tooltip-manager",null,u):u};export{o as C,n as t}