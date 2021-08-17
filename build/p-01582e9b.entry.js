import{r as i,c as e,h as t,g as a}from"./p-a584ff88.js";import{d as n}from"./p-c47fe2f9.js";import"./p-a4e6e35b.js";const l=class{constructor(t){i(this,t),this.calciteInlineEditableEditingCancel=e(this,"calciteInlineEditableEditingCancel",7),this.calciteInlineEditableChangesConfirm=e(this,"calciteInlineEditableChangesConfirm",7),this.calciteInlineEditableEnableEditingChange=e(this,"calciteInlineEditableEnableEditingChange",7),this.disabled=!1,this.editingEnabled=!1,this.loading=!1,this.controls=!1,this.intlEnableEditing="Click to edit",this.intlCancelEditing="Cancel",this.intlConfirmChanges="Save",this.editingCancelTransitionProp="border-top-color",this.transitionEnd=i=>{this.editingEnabled||i.propertyName!==this.editingCancelTransitionProp||this.calciteInlineEditableEditingCancel.emit(i)},this.enableEditing=()=>{this.htmlInput.tabIndex=void 0,this.valuePriorToEditing=this.inputElement.value,this.editingEnabled=!0,this.inputElement.setFocus(),this.calciteInlineEditableEnableEditingChange.emit()},this.disableEditing=()=>{this.htmlInput.tabIndex=-1,this.editingEnabled=!1},this.cancelEditingEnd=()=>{this.enableEditingButton.setFocus(),this.el.removeEventListener("calciteInlineEditableEditingCancel",this.cancelEditingEnd)},this.cancelEditing=()=>{this.inputElement.value=this.valuePriorToEditing,this.el.addEventListener("calciteInlineEditableEditingCancel",this.cancelEditingEnd),this.disableEditing()},this.escapeKeyHandler=async i=>{"Escape"===i.key&&this.cancelEditing()},this.cancelEditingHandler=async i=>{i.preventDefault(),i.stopPropagation(),this.cancelEditing()},this.enableEditingHandler=async i=>{i.preventDefault(),i.stopPropagation(),this.disabled||this.editingEnabled||this.enableEditing()},this.confirmChangesHandler=async i=>{i.preventDefault(),i.stopPropagation(),this.calciteInlineEditableChangesConfirm.emit();try{this.afterConfirm&&(this.loading=!0,await this.afterConfirm(),this.disableEditing())}catch(i){}finally{this.loading=!1}}}disabledWatcher(i){this.inputElement.disabled=i}componentWillLoad(){this.inputElement=this.el.querySelector("calcite-input"),this.inputElement.disabled=this.disabled,this.scale=this.scale||this.inputElement.scale||n(this.el,"scale",void 0)}componentDidLoad(){this.htmlInput=this.inputElement.querySelector("input"),this.editingEnabled||(this.htmlInput.tabIndex=-1)}render(){return t("div",{class:"calcite-inline-editable__wrapper",onClick:this.enableEditingHandler,onKeyDown:this.escapeKeyHandler,onTransitionEnd:this.transitionEnd},t("div",{class:"calcite-inline-editable__input-wrapper"},t("slot",null)),t("div",{class:"calcite-inline-editable__controls-wrapper"},!this.editingEnabled&&t("calcite-button",{appearance:"transparent",class:"calcite-inline-editable__enable-editing-button",color:"neutral",disabled:this.disabled,iconStart:"pencil",label:this.intlEnableEditing,onClick:this.enableEditingHandler,ref:i=>this.enableEditingButton=i,scale:this.scale}),this.shouldShowControls&&[t("div",{class:"calcite-inline-editable__cancel-editing-button-wrapper"},t("calcite-button",{appearance:"transparent",class:"calcite-inline-editable__cancel-editing-button",color:"neutral",disabled:this.disabled,iconStart:"x",label:this.intlCancelEditing,onClick:this.cancelEditingHandler,scale:this.scale})),t("calcite-button",{appearance:"solid",class:"calcite-inline-editable__confirm-changes-button",color:"blue",disabled:this.disabled,iconStart:"check",label:this.intlConfirmChanges,loading:this.loading,onClick:this.confirmChangesHandler,scale:this.scale})]))}blurHandler(){this.controls||this.disableEditing()}handleLabelFocus(i){const e=i.target;"LABEL"!==e.parentElement.tagName&&"CALCITE-LABEL"!==e.parentElement.tagName||e.parentElement.contains(this.el)&&(i.preventDefault(),i.stopPropagation(),this.editingEnabled?this.inputElement.setFocus():this.enableEditingButton.setFocus())}get shouldShowControls(){return this.editingEnabled&&this.controls}get el(){return a(this)}static get watchers(){return{disabled:["disabledWatcher"]}}};l.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}.sc-calcite-inline-editable:root{--calcite-animation-timing:300ms}.calcite-animate.sc-calcite-inline-editable{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in.sc-calcite-inline-editable{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down.sc-calcite-inline-editable{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up.sc-calcite-inline-editable{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale.sc-calcite-inline-editable{-webkit-animation-name:in-scale;animation-name:in-scale}.sc-calcite-inline-editable:root{--calcite-popper-transition:150ms ease-in-out}[hidden].sc-calcite-inline-editable-h{display:none}[scale=s].sc-calcite-inline-editable-h .calcite-inline-editable__controls-wrapper.sc-calcite-inline-editable{height:1.5rem}[scale=m].sc-calcite-inline-editable-h .calcite-inline-editable__controls-wrapper.sc-calcite-inline-editable{height:2rem}[scale=l].sc-calcite-inline-editable-h .calcite-inline-editable__controls-wrapper.sc-calcite-inline-editable{height:2.75rem}.sc-calcite-inline-editable-h:not([editing-enabled]) .calcite-inline-editable__wrapper.sc-calcite-inline-editable:hover{background-color:var(--calcite-ui-foreground-2)}.calcite-inline-editable__wrapper.sc-calcite-inline-editable{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;background-color:var(--calcite-ui-foreground-1);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}.calcite-inline-editable__wrapper.sc-calcite-inline-editable .calcite-inline-editable__input-wrapper.sc-calcite-inline-editable{-ms-flex:1 1 0%;flex:1 1 0%}.calcite-inline-editable__controls-wrapper.sc-calcite-inline-editable{display:-ms-flexbox;display:flex}.calcite-inline-editable__cancel-editing-button-wrapper.sc-calcite-inline-editable{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);border-left-width:0;border-right-width:0}[disabled].sc-calcite-inline-editable-h .calcite-inline-editable__cancel-editing-button-wrapper.sc-calcite-inline-editable{border-color:var(--calcite-ui-border-2)}.sc-calcite-inline-editable-h.sc-calcite-inline-editable-s .calcite-input__element-wrapper textarea,.sc-calcite-inline-editable-h.sc-calcite-inline-editable-s .calcite-input__element-wrapper input{-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}.sc-calcite-inline-editable-h:not([editing-enabled]).sc-calcite-inline-editable-s .calcite-input__element-wrapper{background-color:transparent}.sc-calcite-inline-editable-h:not([editing-enabled]).sc-calcite-inline-editable-s .sc-calcite-input{display:none}.sc-calcite-inline-editable-h:not([editing-enabled]).sc-calcite-inline-editable-s .calcite-input__element-wrapper{display:-ms-flexbox;display:flex;cursor:pointer}.sc-calcite-inline-editable-h:not([editing-enabled]).sc-calcite-inline-editable-s .calcite-input__element-wrapper textarea,.sc-calcite-inline-editable-h:not([editing-enabled]).sc-calcite-inline-editable-s .calcite-input__element-wrapper input{display:-ms-flexbox;display:flex;cursor:pointer;padding-left:0;border-color:transparent}.sc-calcite-inline-editable-h:not([editing-enabled]):hover.sc-calcite-inline-editable-s textarea,.sc-calcite-inline-editable-h:not([editing-enabled]):hover.sc-calcite-inline-editable-s input{background-color:var(--calcite-ui-foreground-2)}.sc-calcite-inline-editable-h[dir=rtl]:not([editing-enabled]).sc-calcite-inline-editable-s .calcite-input__element-wrapper textarea,.sc-calcite-inline-editable-h[dir=rtl]:not([editing-enabled]).sc-calcite-inline-editable-s .calcite-input__element-wrapper input{padding-left:unset;padding-right:0}[dir=rtl] .sc-calcite-inline-editable-h:not([editing-enabled]).sc-calcite-inline-editable-s .calcite-input__element-wrapper textarea,[dir=rtl] .sc-calcite-inline-editable-h:not([editing-enabled]).sc-calcite-inline-editable-s .calcite-input__element-wrapper input{padding-left:unset;padding-right:0}";export{l as calcite_inline_editable}