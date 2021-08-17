import{r as t,c as i,h as e,H as a,g as n}from"./p-a584ff88.js";import{h as o,g as r,d as s}from"./p-c47fe2f9.js";import{g as l}from"./p-cebd4de5.js";import"./p-a4e6e35b.js";const c=class{constructor(e){t(this,e),this.calciteRadioGroupChange=i(this,"calciteRadioGroupChange",7),this.appearance="solid",this.layout="horizontal",this.scale="m",this.width="auto",this.hiddenInput=(()=>{const t=document.createElement("input");return t.type="hidden",this.el.appendChild(t),t})()}handleNameChange(t){this.hiddenInput.name=t}handleSelectedItemChange(t,i){if(t===i)return;const e=this.getItems(),a=Array.from(e).filter((i=>i===t)).pop();a?(this.selectItem(a),this.calciteRadioGroupChange.emit(a.value)):e[0]&&(e[0].tabIndex=0)}connectedCallback(){const t=this.getItems(),i=Array.from(t).filter((t=>t.checked)).pop();i?this.selectItem(i):t[0]&&(t[0].tabIndex=0);const{hiddenInput:e,name:a}=this;a&&(e.name=a),i&&(e.value=i.value)}componentDidLoad(){this.hasLoaded=!0}render(){return e(a,{role:"radiogroup",tabIndex:this.disabled?-1:null},e("slot",null))}handleLabelFocus(t){o(t.detail.labelEl,this.el)&&this.setFocus()}handleClick(t){"calcite-radio-group-item"===t.target.localName&&this.selectItem(t.target)}handleSelected(t){this.hasLoaded&&(t.stopPropagation(),t.preventDefault(),this.selectItem(t.target))}handleKeyDown(t){const i=l(t.key),{el:e,selectedItem:a}=this;if(-1===["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"," "].indexOf(i))return;let n=i;"rtl"===r(e)&&("ArrowRight"===i&&(n="ArrowLeft"),"ArrowLeft"===i&&(n="ArrowRight"));const o=this.getItems();let s=-1;switch(o.forEach(((t,i)=>{t===a&&(s=i)})),n){case"ArrowLeft":case"ArrowUp":t.preventDefault();const i=o.item(s<1?o.length-1:s-1);return void this.selectItem(i);case"ArrowRight":case"ArrowDown":t.preventDefault();const e=-1===s?o.item(1):o.item(s+1)||o.item(0);return void this.selectItem(e);case" ":return t.preventDefault(),void this.selectItem(t.target);default:return}}async setFocus(){var t;null===(t=this.selectedItem||this.getItems()[0])||void 0===t||t.focus()}getItems(){return this.el.querySelectorAll("calcite-radio-group-item")}selectItem(t){if(t===this.selectedItem)return;const i=this.getItems();let e=null;i.forEach((i=>{const a=i.value===t.value;(a&&!i.checked||!a&&i.checked)&&(i.checked=a),i.tabIndex=a?0:-1,a&&(e=i)})),this.selectedItem=e,this.syncWithInputProxy(e),e&&e.focus()}syncWithInputProxy(t){this.hiddenInput.value=t?t.value:""}get el(){return n(this)}static get watchers(){return{name:["handleNameChange"],selectedItem:["handleSelectedItemChange"]}}};c.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;background-color:var(--calcite-ui-foreground-1);width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;outline:1px solid var(--calcite-ui-border-input);outline-offset:-1px}:host([layout=vertical]){-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-item-align:start;align-self:flex-start}:host([width=full]){width:100%;min-width:-moz-fit-content;min-width:-webkit-fit-content;min-width:fit-content}:host([width=full]) ::slotted(calcite-radio-group-item){-ms-flex:1 1 auto;flex:1 1 auto}:host([width=full][layout=vertical]) ::slotted(calcite-radio-group-item){-ms-flex-pack:start;justify-content:flex-start}::slotted(calcite-radio-group-item[checked]),::slotted(calcite-radio-group-item:focus){z-index:0}:host([disabled]){opacity:var(--calcite-ui-opacity-disabled);pointer-events:none}";const m=class{constructor(e){t(this,e),this.calciteRadioGroupItemChange=i(this,"calciteRadioGroupItemChange",7),this.checked=!1,this.iconPosition="start",this.mutationObserver=this.getMutationObserver()}handleCheckedChange(){this.calciteRadioGroupItemChange.emit(),this.syncToExternalInput()}connectedCallback(){const t=this.el.querySelector('input[slot="input"]');t&&(this.value=t.value,this.checked=t.checked,this.mutationObserver.observe(t,{attributes:!0})),this.inputProxy=t}disconnectedCallback(){this.mutationObserver.disconnect()}componentWillLoad(){const t=this.el.querySelector("label");this.useFallback=!t||""===t.textContent}render(){const{checked:t,useFallback:i,value:n}=this,o=r(this.el),l=s(this.el,"scale","m"),c=s(this.el,"appearance","solid"),m=s(this.el,"layout","horizontal"),d=e("calcite-icon",{class:"radio-group-item-icon",dir:o,flipRtl:this.iconFlipRtl,icon:this.icon,scale:"s"});return e(a,{"aria-checked":t.toString(),role:"radio"},e("label",{class:{"label--scale-s":"s"===l,"label--scale-m":"m"===l,"label--scale-l":"l"===l,"label--horizontal":"horizontal"===m,"label--outline":"outline"===c}},this.icon&&"start"===this.iconPosition?d:null,e("slot",null,i?n:""),e("slot",{name:"input"}),this.icon&&"end"===this.iconPosition?d:null))}getMutationObserver(){return new MutationObserver((()=>this.syncFromExternalInput()))}syncFromExternalInput(){this.inputProxy&&(this.value=this.inputProxy.value,this.checked=this.inputProxy.checked)}syncToExternalInput(){this.inputProxy&&(this.inputProxy.value=this.value,this.checked?this.inputProxy.setAttribute("checked",""):this.inputProxy.removeAttribute("checked"))}get el(){return n(this)}static get watchers(){return{checked:["handleCheckedChange"]}}};m.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-item-align:stretch;align-self:stretch;cursor:pointer;font-weight:var(--calcite-font-weight-normal);-webkit-transition:background-color 0.1s ease-in-out, border-color 0.1s ease-in-out;transition:background-color 0.1s ease-in-out, border-color 0.1s ease-in-out}:host label{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;color:var(--calcite-ui-text-3);-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none;-ms-flex-align:center;align-items:center;margin:0.125rem;-webkit-transition:background-color 0.1s ease-in-out, border-color 0.1s ease-in-out;transition:background-color 0.1s ease-in-out, border-color 0.1s ease-in-out}.label--horizontal{-ms-flex-pack:center;justify-content:center}:host{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:-2px;outline-offset:-1px}.label--scale-s{font-size:var(--calcite-font-size--2);line-height:1rem;padding-left:0.5rem;padding-right:0.5rem;padding-top:0.125rem;padding-bottom:0.125rem}.label--scale-m{font-size:var(--calcite-font-size--1);line-height:1rem;padding-left:0.75rem;padding-right:0.75rem;padding-top:0.375rem;padding-bottom:0.375rem}.label--scale-l{font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-left:1rem;padding-right:1rem;padding-top:0.625rem;padding-bottom:0.625rem}:host(:hover) label{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host(:active) label{background-color:var(--calcite-ui-foreground-3)}:host([checked]) label{background-color:var(--calcite-ui-brand);border-color:var(--calcite-ui-brand);cursor:default;color:var(--calcite-ui-background)}:host([checked]) .label--outline{background-color:var(--calcite-ui-foreground-1);border-color:var(--calcite-ui-brand);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);color:var(--calcite-ui-brand)}::slotted(input){display:none}.radio-group-item-icon{display:-ms-inline-flexbox;display:inline-flex;position:relative;margin:0;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;line-height:inherit}:host([icon-position=start]) .label--scale-s .radio-group-item-icon{-webkit-margin-end:0.5rem;margin-inline-end:0.5rem}:host([icon-position=end]) .label--scale-s .radio-group-item-icon{-webkit-margin-end:unset;margin-inline-end:unset;-webkit-margin-start:0.5rem;margin-inline-start:0.5rem}:host([icon-position=start]) .label--scale-m .radio-group-item-icon{-webkit-margin-end:0.75rem;margin-inline-end:0.75rem}:host([icon-position=end]) .label--scale-m .radio-group-item-icon{-webkit-margin-end:unset;margin-inline-end:unset;-webkit-margin-start:0.75rem;margin-inline-start:0.75rem}:host([icon-position=start]) .label--scale-l .radio-group-item-icon{-webkit-margin-end:1rem;margin-inline-end:1rem}:host([icon-position=end]) .label--scale-l .radio-group-item-icon{-webkit-margin-end:unset;margin-inline-end:unset;-webkit-margin-start:1rem;margin-inline-start:1rem}";export{c as calcite_radio_group,m as calcite_radio_group_item}