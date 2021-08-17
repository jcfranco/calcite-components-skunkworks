import{r as t,c as e,h as i,H as a,g as n}from"./p-a584ff88.js";import{a as o,g as r,C as s}from"./p-c47fe2f9.js";import{C as l}from"./p-55be35e6.js";import"./p-a4e6e35b.js";const c={opened:"chevron-up",closed:"chevron-down",valid:"check-circle",invalid:"exclamation-mark-triangle"},m=class{constructor(i){t(this,i),this.calciteBlockToggle=e(this,"calciteBlockToggle",7),this.collapsible=!1,this.disabled=!1,this.dragHandle=!1,this.intlLoading="Loading",this.intlOptions="Options",this.loading=!1,this.open=!1,this.onHeaderClick=()=>{this.open=!this.open,this.calciteBlockToggle.emit()}}renderScrim(){const{disabled:t,loading:e}=this,a=i("slot",null);return[e||t?i("calcite-scrim",{loading:e}):null,a]}renderIcon(){var t;const{el:e,status:a}=this,n=null!==(t=c[a])&&void 0!==t&&t,r=o(e,"icon")||n,s=n?i("calcite-icon",{class:{"status-icon":!0,valid:"valid"==a,invalid:"invalid"==a},icon:n,scale:"m"}):i("slot",{name:"icon"});return r?i("div",{class:"icon"},s):null}render(){const{collapsible:t,disabled:e,el:n,heading:m,intlCollapse:d,intlExpand:g,loading:p,open:f,summary:h,intlLoading:u,headingLevel:b}=this,w=f?d||"Collapse":g||"Expand",x=i("header",{class:"header"},this.renderIcon(),i("div",{class:"title"},i(l,{class:"heading",level:b||4},m),h?i("div",{class:"summary"},h):null)),k=!!o(n,"control"),y=!!o(n,"header-menu-actions"),v=f?c.opened:c.closed,D=i("div",{class:"header-container"},this.dragHandle?i("calcite-handle",null):null,t?i("button",{"aria-expanded":t?f.toString():null,"aria-label":w,class:"toggle",onClick:this.onHeaderClick,title:w},x,k||y?null:i("calcite-icon",{"aria-hidden":"true",class:"toggle-icon",icon:v,scale:"s"})):x,p?i("calcite-loader",{inline:!0,"is-active":!0,label:u}):k?i("div",{class:"control-container"},i("slot",{name:"control"})):null,y?i("calcite-action-menu",{label:this.intlOptions||"Options"},i("slot",{name:"header-menu-actions"})):null),z="rtl"===r(n);return i(a,{tabIndex:e?-1:null},i("article",{"aria-busy":p.toString(),class:{article:!0,[s.rtl]:z}},D,i("div",{class:"content",hidden:!f},this.renderScrim())))}get el(){return n(this)}};m.style='@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;-ms-flex-direction:column;flex-direction:column;padding:0;-webkit-transition-property:margin;transition-property:margin;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.215, 0.440, 0.420, 0.880);transition-timing-function:cubic-bezier(0.215, 0.440, 0.420, 0.880);border-width:0;border-bottom-width:1px;border-color:var(--calcite-ui-border-3);border-style:solid;-ms-flex-preferred-size:auto;flex-basis:auto}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;color:var(--calcite-ui-text-2);fill:var(--calcite-ui-text-2)}.heading{padding:0;margin:0;font-weight:var(--calcite-font-weight-medium);line-height:1.5}.header .heading{-ms-flex:1 0 auto;flex:1 0 auto;padding:var(--calcite-spacing-half) var(--calcite-spacing-half)}h1.heading{font-size:var(--calcite-font-size-2)}h2.heading{font-size:var(--calcite-font-size-1)}h3.heading{font-size:var(--calcite-font-size-0)}h4.heading,h5.heading{font-size:var(--calcite-font-size--1)}.header{-ms-flex-pack:start;justify-content:flex-start;padding:0}.header,.toggle{grid-area:header}.header-container{display:grid;-ms-flex-align:stretch;align-items:stretch;grid-template:auto/auto 1fr auto auto;grid-template-areas:"handle header control menu";grid-column:header-start/menu-end;grid-row:1/2}.header-container>.header{padding-top:0.75rem;padding-bottom:0.75rem;padding-left:0;padding-right:0}.toggle{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:justify;justify-content:space-between;font-family:inherit;-ms-flex-align:center;align-items:center;margin:0;padding-top:0.75rem;padding-bottom:0.75rem;padding-left:0;padding-right:0;border-style:none;cursor:pointer;text-align:left;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;background-color:transparent}.toggle:hover{background-color:var(--calcite-ui-foreground-2)}.toggle:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}calcite-loader[inline]{grid-area:control;align-self:center}calcite-handle{grid-area:handle}.title{margin:0;padding-left:1rem;padding-right:1rem;padding-top:0;padding-bottom:0}.header .title .heading{padding:0;font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2);font-weight:var(--calcite-font-weight-medium);word-wrap:break-word;word-break:break-word;line-height:1.25;-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.summary{padding:0;font-size:var(--calcite-font-size--2);color:var(--calcite-ui-text-3);word-wrap:break-word;word-break:break-word}.icon{margin-left:0.75rem}.status-icon.valid{color:var(--calcite-ui-success)}.status-icon.invalid{color:var(--calcite-ui-danger)}.toggle-icon{margin-right:1rem;-ms-flex-item-align:center;align-self:center;color:var(--calcite-ui-text-3);-webkit-transition-property:color;transition-property:color;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.toggle:hover .toggle-icon{color:var(--calcite-ui-text-1)}.content{padding-left:0.75rem;padding-right:0.75rem;padding-top:0.5rem;padding-bottom:0.5rem;position:relative;-webkit-animation:in var(--calcite-animation-timing) ease-in-out;animation:in var(--calcite-animation-timing) ease-in-out}.control-container{display:-ms-flexbox;display:flex;margin:0;grid-area:control}calcite-action-menu{grid-area:menu}.calcite--rtl .toggle-icon{margin-right:0;margin-left:1rem}.calcite--rtl .icon{margin-left:0;margin-right:0.75rem}:host([open]){margin-top:0.5rem;margin-bottom:0.5rem}:host([open]) .header .title .heading{color:var(--calcite-ui-text-1)}:host([disabled]){pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;user-select:none}:host([disabled]) .header-container{opacity:0.5}:host([drag-handle]) .calcite--rtl .title{padding-left:0;padding-right:0.25rem}';const d={menuOpen:"chevron-down",menuClosedLeft:"chevron-left",menuClosedRight:"chevron-right",valid:"check-circle",invalid:"exclamation-mark-triangle"},g=class{constructor(i){t(this,i),this.calciteBlockSectionToggle=e(this,"calciteBlockSectionToggle",7),this.open=!1,this.toggleDisplay="button",this.toggleSection=()=>{this.open=!this.open,this.calciteBlockSectionToggle.emit()}}handleHeaderLabelKeyDown(t){" "!==t.key&&"Enter"!==t.key||(t.preventDefault(),t.stopPropagation(),this.click())}renderStatusIcon(){var t;const{status:e}=this,a=null!==(t=d[e])&&void 0!==t&&t;return a?i("calcite-icon",{class:{"status-icon":!0,valid:"valid"==e,invalid:"invalid"==e},icon:a,scale:"s"}):null}render(){const{el:t,intlCollapse:e,intlExpand:a,open:n,text:o,toggleDisplay:l}=this,c=r(t),m=n?d.menuOpen:"rtl"===c?d.menuClosedLeft:d.menuClosedRight,g=n?e||"Collapse":a||"Expand",p="switch"===l?i("label",{"aria-label":g,class:{toggle:!0,"toggle--switch":!0},onKeyDown:this.handleHeaderLabelKeyDown,tabIndex:0,title:g},i("div",{class:"toggle--switch__content"},i("span",{class:"toggle--switch__text"},o)),i("calcite-switch",{onCalciteSwitchChange:this.toggleSection,scale:"s",switched:n,tabIndex:-1}),this.renderStatusIcon()):i("button",{"aria-label":g,class:{"section-header":!0,toggle:!0},name:g,onClick:this.toggleSection,onKeyDown:this.handleHeaderLabelKeyDown},i("calcite-icon",{icon:m,scale:"s"}),i("span",{class:"section-header__text"},o),this.renderStatusIcon());return i("section",{"aria-expanded":n.toString(),class:{[s.rtl]:"rtl"===c}},p,i("div",{class:"content",hidden:!n},i("slot",null)))}get el(){return n(this)}};g.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1);display:block}:host([open]){border-style:solid;border-width:0;border-bottom-color:var(--calcite-ui-border-3);border-bottom-width:1px}:host(:last-child){border-bottom-width:0}.toggle{background-color:transparent;border-width:0;color:var(--calcite-ui-text-2);font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-normal);width:100%}.toggle--switch,.section-header{-ms-flex-align:center;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;margin-left:0;margin-right:0;margin-top:0.25rem;margin-bottom:0.25rem;padding-left:0;padding-right:0.25rem;padding-top:0.5rem;padding-bottom:0.5rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:var(--calcite-font-size--1);outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.toggle--switch:focus,.section-header:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.toggle--switch:hover,.section-header:hover{color:var(--calcite-ui-text-1)}.section-header .status-icon{-ms-flex-item-align:end;align-self:flex-end}.section-header__text{-ms-flex:1 1 auto;flex:1 1 auto;margin-left:0.75rem;margin-right:0.75rem;margin-top:0;margin-bottom:0;text-align:initial}.toggle--switch calcite-switch{pointer-events:none;margin-left:0.25rem;margin-right:0.25rem}.toggle--switch .status-icon{margin-left:0.25rem;margin-right:0.25rem}.toggle--switch__content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex:1 1 auto;flex:1 1 auto}.status-icon.valid{color:var(--calcite-ui-success)}.status-icon.invalid{color:var(--calcite-ui-danger)}.calcite--rtl .toggle--switch{padding-right:0;padding-left:0.5rem}.calcite--rtl .toggle--switch calcite-switch{margin-left:0;margin-right:0.5rem}.calcite--rtl .section-header{padding-right:0;padding-left:0.25rem}";export{m as calcite_block,g as calcite_block_section}