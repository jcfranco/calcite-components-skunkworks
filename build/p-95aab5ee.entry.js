import{r as t,h as i,c as a,g as e}from"./p-a584ff88.js";import{g as s}from"./p-a4e6e35b.js";import{f as n,c as o}from"./p-c47fe2f9.js";import{h as r}from"./p-18a62b5e.js";const c=class{constructor(i){t(this,i),this.checked=!1,this.disabled=!1,this.focused=!1,this.hidden=!1,this.hovered=!1,this.scale="m"}render(){return i("div",{class:"radio"})}};c.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block}:host .radio{border-radius:9999px;cursor:pointer;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input)}:host([hovered]) .radio,:host(:not([checked])[focused]) .radio{-webkit-box-shadow:inset 0 0 0 2px var(--calcite-ui-brand);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}:host([disabled]) .radio{cursor:default;opacity:var(--calcite-ui-opacity-disabled)}:host([hovered][disabled]) .radio{-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input);box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input)}:host([scale=s]){--calcite-radio-size:var(--calcite-font-size--2)}:host([scale=m]){--calcite-radio-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-radio-size:var(--calcite-font-size-0)}.radio{height:var(--calcite-radio-size);max-width:var(--calcite-radio-size);min-width:var(--calcite-radio-size)}:host([scale=s][checked]) .radio,:host([hovered][scale=s][checked][disabled]) .radio{-webkit-box-shadow:inset 0 0 0 4px var(--calcite-ui-brand);box-shadow:inset 0 0 0 4px var(--calcite-ui-brand)}:host([scale=s][focused][checked]) .radio{-webkit-box-shadow:inset 0 0 0 4px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-brand);box-shadow:inset 0 0 0 4px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-brand)}:host([scale=m][checked]) .radio,:host([hovered][scale=m][checked][disabled]) .radio{-webkit-box-shadow:inset 0 0 0 5px var(--calcite-ui-brand);box-shadow:inset 0 0 0 5px var(--calcite-ui-brand)}:host([scale=m][focused][checked]) .radio{-webkit-box-shadow:inset 0 0 0 5px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-brand);box-shadow:inset 0 0 0 5px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-brand)}:host([scale=l][checked]) .radio,:host([hovered][scale=l][checked][disabled]) .radio{-webkit-box-shadow:inset 0 0 0 6px var(--calcite-ui-brand);box-shadow:inset 0 0 0 6px var(--calcite-ui-brand)}:host([scale=l][focused][checked]) .radio{-webkit-box-shadow:inset 0 0 0 6px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-brand);box-shadow:inset 0 0 0 6px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1), 0 0 0 4px var(--calcite-ui-brand)}:host([hidden]){display:none}";const d=class{constructor(i){t(this,i),this.calciteRadioButtonChange=a(this,"calciteRadioButtonChange",7),this.calciteRadioButtonCheckedChange=a(this,"calciteRadioButtonCheckedChange",7),this.calciteRadioButtonFocusedChange=a(this,"calciteRadioButtonFocusedChange",7),this.checked=!1,this.disabled=!1,this.focused=!1,this.hidden=!1,this.hovered=!1,this.required=!1,this.scale="m",this.setInputEl=t=>{this.inputEl=t},this.formResetHandler=()=>{var t;this.checked=this.initialChecked,this.initialChecked&&(null===(t=this.inputEl)||void 0===t||t.setAttribute("checked",""))},this.hideInputEl=()=>{this.inputEl.style.cssText=r},this.onInputBlur=()=>{this.focused=!1,this.calciteRadioButtonFocusedChange.emit()},this.onInputFocus=()=>{this.focused=!0,this.calciteRadioButtonFocusedChange.emit()}}checkedChanged(t){t&&this.uncheckOtherRadioButtonsInGroup(),this.inputEl&&(this.inputEl.checked=t),this.calciteRadioButtonCheckedChange.emit(t)}disabledChanged(t){this.inputEl.disabled=t}focusedChanged(t){this.inputEl&&(t&&!this.el.hasAttribute("hidden")?this.inputEl.focus():this.inputEl.blur())}hiddenChanged(t){this.inputEl.hidden=t}nameChanged(t){if(this.name===t)return;this.inputEl&&(this.inputEl.name=t),this.checkLastRadioButton();const i=this.rootNode.querySelector(`input[name="${this.name}"]:checked`);(null==i?void 0:i.value)||this.uncheckAllRadioButtonsInGroup()}requiredChanged(t){this.inputEl.required=t}async setFocus(){n(this.inputEl)}checkLastRadioButton(){const t=Array.from(this.rootNode.querySelectorAll("calcite-radio-button")).filter((t=>t.name===this.name)).filter((t=>t.checked));if((null==t?void 0:t.length)>1){const i=t[t.length-1];t.filter((t=>t!==i)).forEach((t=>{t.checked=!1,t.emitCheckedChange()}))}}async emitCheckedChange(){this.calciteRadioButtonCheckedChange.emit()}uncheckAllRadioButtonsInGroup(){Array.from(this.rootNode.querySelectorAll("calcite-radio-button")).filter((t=>t.name===this.name)).forEach((t=>{t.checked&&(t.checked=!1,t.focused=!1)}))}uncheckOtherRadioButtonsInGroup(){Array.from(this.rootNode.querySelectorAll("calcite-radio-button")).filter((t=>t.name===this.name&&t.guid!==this.guid)).forEach((t=>{t.checked&&(t.checked=!1,t.focused=!1)}))}check(t){this.el.closest("label")&&t.composedPath().includes(this.el)&&t.preventDefault(),this.disabled||this.hidden||(this.uncheckOtherRadioButtonsInGroup(),this.checked=!0,this.focused=!0,this.calciteRadioButtonChange.emit())}mouseenter(){this.hovered=!0}mouseleave(){this.hovered=!1}connectedCallback(){this.rootNode=this.el.getRootNode(),this.guid=this.el.id||`calcite-radio-button-${s()}`,this.initialChecked=this.checked,this.name&&this.checkLastRadioButton();const t=o(this.el,"form");t&&t.addEventListener("reset",this.formResetHandler)}componentDidLoad(){this.hideInputEl(),this.focused&&this.inputEl.focus()}disconnectedCallback(){const t=o(this.el,"form");t&&t.removeEventListener("reset",this.formResetHandler)}render(){var t;const a=null===(t=this.value)||void 0===t?void 0:t.toString();return i("div",{class:"calcite-radio-button__container"},i("input",{"aria-label":this.label||null,checked:this.checked,disabled:this.disabled,hidden:this.hidden,id:`${this.guid}-input`,name:this.name,onBlur:this.onInputBlur,onFocus:this.onInputFocus,ref:this.setInputEl,required:this.required,type:"radio",value:a}),i("calcite-radio",{checked:this.checked,disabled:this.disabled,focused:this.focused,hidden:this.hidden,hovered:this.hovered,scale:this.scale}))}get el(){return e(this)}static get watchers(){return{checked:["checkedChanged"],disabled:["disabledChanged"],focused:["focusedChanged"],hidden:["hiddenChanged"],name:["nameChanged"],required:["requiredChanged"]}}};d.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}.sc-calcite-radio-button:root{--calcite-animation-timing:300ms}.calcite-animate.sc-calcite-radio-button{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in.sc-calcite-radio-button{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down.sc-calcite-radio-button{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up.sc-calcite-radio-button{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale.sc-calcite-radio-button{-webkit-animation-name:in-scale;animation-name:in-scale}.sc-calcite-radio-button:root{--calcite-popper-transition:150ms ease-in-out}[hidden].sc-calcite-radio-button-h{display:none}.sc-calcite-radio-button-h{cursor:pointer;display:block}.sc-calcite-radio-button-h .calcite-radio-button__container.sc-calcite-radio-button{position:relative}[disabled].sc-calcite-radio-button-h{cursor:pointer}";export{c as calcite_radio,d as calcite_radio_button}