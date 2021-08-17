import{a as t,r as a,h as i,H as n,g as e}from"./p-a584ff88.js";import{g as s}from"./p-c47fe2f9.js";import"./p-a4e6e35b.js";const r={},o={},l={s:16,m:24,l:32};const c=class{constructor(t){a(this,t),this.icon=null,this.flipRtl=!1,this.scale="m",this.visible=!1}connectedCallback(){this.waitUntilVisible((()=>{this.visible=!0,this.loadIconPathData()}))}disconnectedCallback(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null)}async componentWillLoad(){this.loadIconPathData()}render(){const{el:t,flipRtl:a,pathData:e,scale:r,textLabel:o}=this,c=s(t),m=l[r],h=!!o,p=[].concat(e||"");return i(n,{"aria-hidden":(!h).toString(),"aria-label":h?o:null,role:h?"img":null},i("svg",{class:{"flip-rtl":"rtl"===c&&a,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${m} ${m}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},p.map((t=>i("path","string"==typeof t?{d:t}:{d:t.d,opacity:"opacity"in t?t.opacity:1})))))}async loadIconPathData(){const{icon:a,scale:i,visible:n}=this;a&&n&&(this.pathData=await async function({icon:a,scale:i}){const n=l[i],e=function(t){const a=!isNaN(Number(t.charAt(0))),i=t.split("-");return 1===i.length?a?`i${t}`:t:i.map(((t,i)=>0===i?a?`i${t.toUpperCase()}`:t:t.charAt(0).toUpperCase()+t.slice(1))).join("")}(a),s="F"===e.charAt(e.length-1),c=`${s?e.substring(0,e.length-1):e}${n}${s?"F":""}`;if(r[c])return r[c];o[c]||(o[c]=fetch(t(`./assets/calcite-icon/${c}.json`)).then((t=>t.json())).catch((()=>(console.error(`"${c}" is not a valid calcite-ui-icon name`),""))));const m=await o[c];return r[c]=m,m}({icon:a,scale:i}))}waitUntilVisible(t){"undefined"!=typeof window&&window.IntersectionObserver?(this.intersectionObserver=new IntersectionObserver((a=>{a.forEach((a=>{a.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,t())}))}),{rootMargin:"50px"}),this.intersectionObserver.observe(this.el)):t()}static get assetsDirs(){return["assets"]}get el(){return e(this)}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}};c.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex}:host([scale=s]){width:1rem;height:1rem;min-width:1rem;min-height:1rem}:host([scale=m]){width:1.5rem;height:1.5rem;min-width:1.5rem;min-height:1.5rem}:host([scale=l]){width:2rem;height:2rem;min-width:2rem;min-height:2rem}.flip-rtl{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.svg{display:block}";export{c as calcite_icon}