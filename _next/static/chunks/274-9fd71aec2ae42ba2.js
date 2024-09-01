"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[274],{4593:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(2265),o=n(4839),i=n(6990),l=n(8024),a=n(5885),s=n(6830),u=n(5635),c=n(2296),d=n(587);function f(e){return(0,d.ZP)("MuiBackdrop",e)}(0,c.Z)("MuiBackdrop",["root","invisible"]);var v=n(7437);let p=e=>{let{classes:t,invisible:n}=e;return(0,i.Z)({root:["root",n&&"invisible"]},f,t)},m=(0,l.ZP)("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",variants:[{props:{invisible:!0},style:{backgroundColor:"transparent"}}]});var h=r.forwardRef(function(e,t){let n=(0,a.i)({props:e,name:"MuiBackdrop"}),{children:r,className:i,component:l="div",invisible:c=!1,open:d,components:f={},componentsProps:h={},slotProps:y={},slots:g={},TransitionComponent:b,transitionDuration:Z,...x}=n,E={...n,component:l,invisible:c},R=p(E),w={slots:{transition:b,root:f.Root,...g},slotProps:{...h,...y}},[S,k]=(0,s.Z)("root",{elementType:m,externalForwardedProps:w,className:(0,o.Z)(R.root,i),ownerState:E}),[P,I]=(0,s.Z)("transition",{elementType:u.Z,externalForwardedProps:w,ownerState:E});return delete I.ownerState,(0,v.jsx)(P,{in:d,timeout:Z,...x,...I,children:(0,v.jsx)(S,{"aria-hidden":!0,...k,classes:R,ref:t,children:r})})})},5635:function(e,t,n){var r=n(2265),o=n(3822),i=n(2384),l=n(2960),a=n(5931),s=n(909),u=n(7437);let c={entering:{opacity:1},entered:{opacity:1}},d=r.forwardRef(function(e,t){let n=(0,l.Z)(),d={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:f,appear:v=!0,children:p,easing:m,in:h,onEnter:y,onEntered:g,onEntering:b,onExit:Z,onExited:x,onExiting:E,style:R,timeout:w=d,TransitionComponent:S=o.ZP,...k}=e,P=r.useRef(null),I=(0,s.Z)(P,(0,i.Z)(p),t),N=e=>t=>{if(e){let n=P.current;void 0===t?e(n):e(n,t)}},T=N(b),O=N((e,t)=>{(0,a.n)(e);let r=(0,a.C)({style:R,timeout:w,easing:m},{mode:"enter"});e.style.webkitTransition=n.transitions.create("opacity",r),e.style.transition=n.transitions.create("opacity",r),y&&y(e,t)}),M=N(g),C=N(E),j=N(e=>{let t=(0,a.C)({style:R,timeout:w,easing:m},{mode:"exit"});e.style.webkitTransition=n.transitions.create("opacity",t),e.style.transition=n.transitions.create("opacity",t),Z&&Z(e)}),A=N(x);return(0,u.jsx)(S,{appear:v,in:h,nodeRef:P,onEnter:O,onEntered:M,onEntering:T,onExit:j,onExited:A,onExiting:C,addEndListener:e=>{f&&f(P.current,e)},timeout:w,...k,children:(e,t)=>r.cloneElement(p,{style:{opacity:0,visibility:"exited"!==e||h?void 0:"hidden",...c[e],...R,...p.props.style},ref:I,...t})})});t.Z=d},2877:function(e,t,n){n.d(t,{Z:function(){return q}});var r=n(2265),o=n(4839),i=n(6990),l=n(7740),a=n(2384),s=n(21),u=n(7437);function c(e){let t=[],n=[];return Array.from(e.querySelectorAll('input,select,textarea,a[href],button,[tabindex],audio[controls],video[controls],[contenteditable]:not([contenteditable="false"])')).forEach((e,r)=>{let o=function(e){let t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?"true"===e.contentEditable||("AUDIO"===e.nodeName||"VIDEO"===e.nodeName||"DETAILS"===e.nodeName)&&null===e.getAttribute("tabindex")?0:e.tabIndex:t}(e);-1===o||e.disabled||"INPUT"===e.tagName&&"hidden"===e.type||function(e){if("INPUT"!==e.tagName||"radio"!==e.type||!e.name)return!1;let t=t=>e.ownerDocument.querySelector('input[type="radio"]'.concat(t)),n=t('[name="'.concat(e.name,'"]:checked'));return n||(n=t('[name="'.concat(e.name,'"]'))),n!==e}(e)||(0===o?t.push(e):n.push({documentOrder:r,tabIndex:o,node:e}))}),n.sort((e,t)=>e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex).map(e=>e.node).concat(t)}function d(){return!0}var f=function(e){let{children:t,disableAutoFocus:n=!1,disableEnforceFocus:o=!1,disableRestoreFocus:i=!1,getTabbable:f=c,isEnabled:v=d,open:p}=e,m=r.useRef(!1),h=r.useRef(null),y=r.useRef(null),g=r.useRef(null),b=r.useRef(null),Z=r.useRef(!1),x=r.useRef(null),E=(0,l.Z)((0,a.Z)(t),x),R=r.useRef(null);r.useEffect(()=>{p&&x.current&&(Z.current=!n)},[n,p]),r.useEffect(()=>{if(!p||!x.current)return;let e=(0,s.Z)(x.current);return!x.current.contains(e.activeElement)&&(x.current.hasAttribute("tabIndex")||x.current.setAttribute("tabIndex","-1"),Z.current&&x.current.focus()),()=>{i||(g.current&&g.current.focus&&(m.current=!0,g.current.focus()),g.current=null)}},[p]),r.useEffect(()=>{if(!p||!x.current)return;let e=(0,s.Z)(x.current),t=t=>{R.current=t,!o&&v()&&"Tab"===t.key&&e.activeElement===x.current&&t.shiftKey&&(m.current=!0,y.current&&y.current.focus())},n=()=>{let t=x.current;if(null===t)return;if(!e.hasFocus()||!v()||m.current){m.current=!1;return}if(t.contains(e.activeElement)||o&&e.activeElement!==h.current&&e.activeElement!==y.current)return;if(e.activeElement!==b.current)b.current=null;else if(null!==b.current)return;if(!Z.current)return;let n=[];if((e.activeElement===h.current||e.activeElement===y.current)&&(n=f(x.current)),n.length>0){var r,i;let e=!!((null===(r=R.current)||void 0===r?void 0:r.shiftKey)&&(null===(i=R.current)||void 0===i?void 0:i.key)==="Tab"),t=n[0],o=n[n.length-1];"string"!=typeof t&&"string"!=typeof o&&(e?o.focus():t.focus())}else t.focus()};e.addEventListener("focusin",n),e.addEventListener("keydown",t,!0);let r=setInterval(()=>{e.activeElement&&"BODY"===e.activeElement.tagName&&n()},50);return()=>{clearInterval(r),e.removeEventListener("focusin",n),e.removeEventListener("keydown",t,!0)}},[n,o,i,v,p,f]);let w=e=>{null===g.current&&(g.current=e.relatedTarget),Z.current=!0};return(0,u.jsxs)(r.Fragment,{children:[(0,u.jsx)("div",{tabIndex:p?0:-1,onFocus:w,ref:h,"data-testid":"sentinelStart"}),r.cloneElement(t,{ref:E,onFocus:e=>{null===g.current&&(g.current=e.relatedTarget),Z.current=!0,b.current=e.target;let n=t.props.onFocus;n&&n(e)}}),(0,u.jsx)("div",{tabIndex:p?0:-1,onFocus:w,ref:y,"data-testid":"sentinelEnd"})]})},v=n(4887),p=n(3815),m=n(9969);let h=r.forwardRef(function(e,t){let{children:n,container:o,disablePortal:i=!1}=e,[s,c]=r.useState(null),d=(0,l.Z)((0,a.Z)(n),t);return((0,p.Z)(()=>{!i&&c(("function"==typeof o?o():o)||document.body)},[o,i]),(0,p.Z)(()=>{if(s&&!i)return(0,m.Z)(t,s),()=>{(0,m.Z)(t,null)}},[t,s,i]),i)?r.isValidElement(n)?r.cloneElement(n,{ref:d}):(0,u.jsx)(r.Fragment,{children:n}):(0,u.jsx)(r.Fragment,{children:s?v.createPortal(n,s):s})});var y=n(8024),g=n(339),b=n(5885),Z=n(4593),x=n(5590);function E(...e){return e.reduce((e,t)=>null==t?e:function(...n){e.apply(this,n),t.apply(this,n)},()=>{})}var R=n(2044),w=n(4581),S=n(4086);function k(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function P(e){return parseInt((0,w.Z)(e).getComputedStyle(e).paddingRight,10)||0}function I(e,t,n,r,o){let i=[t,n,...r];[].forEach.call(e.children,e=>{let t=-1===i.indexOf(e),n=!function(e){let t=-1!==["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName),n="INPUT"===e.tagName&&"hidden"===e.getAttribute("type");return t||n}(e);t&&n&&k(e,o)})}function N(e,t){let n=-1;return e.some((e,r)=>!!t(e)&&(n=r,!0)),n}class T{add(e,t){let n=this.modals.indexOf(e);if(-1!==n)return n;n=this.modals.length,this.modals.push(e),e.modalRef&&k(e.modalRef,!1);let r=function(e){let t=[];return[].forEach.call(e.children,e=>{"true"===e.getAttribute("aria-hidden")&&t.push(e)}),t}(t);I(t,e.mount,e.modalRef,r,!0);let o=N(this.containers,e=>e.container===t);return -1!==o?this.containers[o].modals.push(e):this.containers.push({modals:[e],container:t,restore:null,hiddenSiblings:r}),n}mount(e,t){let n=N(this.containers,t=>-1!==t.modals.indexOf(e)),r=this.containers[n];r.restore||(r.restore=function(e,t){let n=[],r=e.container;if(!t.disableScrollLock){let e;if(function(e){let t=(0,s.Z)(e);return t.body===e?(0,w.Z)(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(r)){let e=(0,S.Z)((0,s.Z)(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight="".concat(P(r)+e,"px");let t=(0,s.Z)(r).querySelectorAll(".mui-fixed");[].forEach.call(t,t=>{n.push({value:t.style.paddingRight,property:"padding-right",el:t}),t.style.paddingRight="".concat(P(t)+e,"px")})}if(r.parentNode instanceof DocumentFragment)e=(0,s.Z)(r).body;else{let t=r.parentElement,n=(0,w.Z)(r);e=(null==t?void 0:t.nodeName)==="HTML"&&"scroll"===n.getComputedStyle(t).overflowY?t:r}n.push({value:e.style.overflow,property:"overflow",el:e},{value:e.style.overflowX,property:"overflow-x",el:e},{value:e.style.overflowY,property:"overflow-y",el:e}),e.style.overflow="hidden"}return()=>{n.forEach(e=>{let{value:t,el:n,property:r}=e;t?n.style.setProperty(r,t):n.style.removeProperty(r)})}}(r,t))}remove(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],n=this.modals.indexOf(e);if(-1===n)return n;let r=N(this.containers,t=>-1!==t.modals.indexOf(e)),o=this.containers[r];if(o.modals.splice(o.modals.indexOf(e),1),this.modals.splice(n,1),0===o.modals.length)o.restore&&o.restore(),e.modalRef&&k(e.modalRef,t),I(o.container,e.mount,e.modalRef,o.hiddenSiblings,!1),this.containers.splice(r,1);else{let e=o.modals[o.modals.length-1];e.modalRef&&k(e.modalRef,!1)}return n}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}constructor(){this.modals=[],this.containers=[]}}let O=new T;var M=function(e){let{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:o=!1,manager:i=O,closeAfterTransition:a=!1,onTransitionEnter:u,onTransitionExited:c,children:d,onClose:f,open:v,rootRef:p}=e,m=r.useRef({}),h=r.useRef(null),y=r.useRef(null),g=(0,l.Z)(y,p),[b,Z]=r.useState(!v),w=!!d&&d.props.hasOwnProperty("in"),S=!0;("false"===e["aria-hidden"]||!1===e["aria-hidden"])&&(S=!1);let P=()=>(0,s.Z)(h.current),I=()=>(m.current.modalRef=y.current,m.current.mount=h.current,m.current),N=()=>{i.mount(I(),{disableScrollLock:o}),y.current&&(y.current.scrollTop=0)},T=(0,x.Z)(()=>{let e=("function"==typeof t?t():t)||P().body;i.add(I(),e),y.current&&N()}),M=r.useCallback(()=>i.isTopModal(I()),[i]),C=(0,x.Z)(e=>{h.current=e,e&&(v&&M()?N():y.current&&k(y.current,S))}),j=r.useCallback(()=>{i.remove(I(),S)},[S,i]);r.useEffect(()=>()=>{j()},[j]),r.useEffect(()=>{v?T():w&&a||j()},[v,j,w,a,T]);let A=e=>t=>{var r;null===(r=e.onKeyDown)||void 0===r||r.call(e,t),"Escape"===t.key&&229!==t.which&&M()&&!n&&(t.stopPropagation(),f&&f(t,"escapeKeyDown"))},z=e=>t=>{var n;null===(n=e.onClick)||void 0===n||n.call(e,t),t.target===t.currentTarget&&f&&f(t,"backdropClick")};return{getRootProps:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,R.Z)(e);delete n.onTransitionEnter,delete n.onTransitionExited;let r={...n,...t};return{role:"presentation",...r,onKeyDown:A(r),ref:g}},getBackdropProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{"aria-hidden":!0,...e,onClick:z(e),open:v}},getTransitionProps:()=>({onEnter:E(()=>{Z(!1),u&&u()},null==d?void 0:d.props.onEnter),onExited:E(()=>{Z(!0),c&&c(),a&&j()},null==d?void 0:d.props.onExited)}),rootRef:g,portalRef:C,isTopModal:M,exited:b,hasTransition:w}},C=n(2296),j=n(587);function A(e){return(0,j.ZP)("MuiModal",e)}(0,C.Z)("MuiModal",["root","hidden","backdrop"]);var z=n(6830),F=n(909);let L=e=>{let{open:t,exited:n,classes:r}=e;return(0,i.Z)({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},A,r)},B=(0,y.ZP)("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})((0,g.Z)(e=>{let{theme:t}=e;return{position:"fixed",zIndex:(t.vars||t).zIndex.modal,right:0,bottom:0,top:0,left:0,variants:[{props:e=>{let{ownerState:t}=e;return!t.open&&t.exited},style:{visibility:"hidden"}}]}})),D=(0,y.ZP)(Z.Z,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1});var q=r.forwardRef(function(e,t){let n=(0,b.i)({name:"MuiModal",props:e}),{BackdropComponent:i=D,BackdropProps:l,classes:a,className:s,closeAfterTransition:c=!1,children:d,container:v,component:p,components:m={},componentsProps:y={},disableAutoFocus:g=!1,disableEnforceFocus:Z=!1,disableEscapeKeyDown:x=!1,disablePortal:E=!1,disableRestoreFocus:R=!1,disableScrollLock:w=!1,hideBackdrop:S=!1,keepMounted:k=!1,onBackdropClick:P,onClose:I,onTransitionEnter:N,onTransitionExited:T,open:O,slotProps:C={},slots:j={},theme:A,...q}=n,K={...n,closeAfterTransition:c,disableAutoFocus:g,disableEnforceFocus:Z,disableEscapeKeyDown:x,disablePortal:E,disableRestoreFocus:R,disableScrollLock:w,hideBackdrop:S,keepMounted:k},{getRootProps:U,getBackdropProps:V,getTransitionProps:W,portalRef:H,isTopModal:Y,exited:_,hasTransition:G}=M({...K,rootRef:t}),X={...K,exited:_},J=L(X),Q={};if(void 0===d.props.tabIndex&&(Q.tabIndex="-1"),G){let{onEnter:e,onExited:t}=W();Q.onEnter=e,Q.onExited=t}let $={slots:{root:m.Root,backdrop:m.Backdrop,...j},slotProps:{...y,...C}},[ee,et]=(0,z.Z)("root",{elementType:B,externalForwardedProps:$,getSlotProps:U,additionalProps:{ref:t,as:p},ownerState:X,className:(0,o.Z)(s,null==J?void 0:J.root,!X.open&&X.exited&&(null==J?void 0:J.hidden))}),[en,er]=(0,z.Z)("backdrop",{elementType:i,externalForwardedProps:$,additionalProps:l,getSlotProps:e=>V({...e,onClick:t=>{P&&P(t),(null==e?void 0:e.onClick)&&e.onClick(t)}}),className:(0,o.Z)(null==l?void 0:l.className,null==J?void 0:J.backdrop),ownerState:X}),eo=(0,F.Z)(null==l?void 0:l.ref,er.ref);return k||O||G&&!_?(0,u.jsx)(h,{ref:H,container:v,disablePortal:E,children:(0,u.jsxs)(ee,{...et,...q,children:[!S&&i?(0,u.jsx)(en,{...er,ref:eo}):null,(0,u.jsx)(f,{disableEnforceFocus:Z,disableAutoFocus:g,disableRestoreFocus:R,isEnabled:Y,open:O,children:r.cloneElement(d,Q)})]})}):null})},8027:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(2265),o=n(4839),i=n(6990),l=n(6031),a=n(8024),s=n(2960),u=n(339),c=n(5885),d=n(1931),f=n(2296),v=n(587);function p(e){return(0,v.ZP)("MuiPaper",e)}(0,f.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var m=n(7437);let h=e=>{let{square:t,elevation:n,variant:r,classes:o}=e;return(0,i.Z)({root:["root",r,!t&&"rounded","elevation"===r&&"elevation".concat(n)]},p,o)},y=(0,a.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t["elevation".concat(n.elevation)]]}})((0,u.Z)(e=>{let{theme:t}=e;return{backgroundColor:(t.vars||t).palette.background.paper,color:(t.vars||t).palette.text.primary,transition:t.transitions.create("box-shadow"),variants:[{props:e=>{let{ownerState:t}=e;return!t.square},style:{borderRadius:t.shape.borderRadius}},{props:{variant:"outlined"},style:{border:"1px solid ".concat((t.vars||t).palette.divider)}},{props:{variant:"elevation"},style:{boxShadow:"var(--Paper-shadow)",backgroundImage:"var(--Paper-overlay)"}}]}}));var g=r.forwardRef(function(e,t){var n;let r=(0,c.i)({props:e,name:"MuiPaper"}),i=(0,s.Z)(),{className:a,component:u="div",elevation:f=1,square:v=!1,variant:p="elevation",...g}=r,b={...r,component:u,elevation:f,square:v,variant:p},Z=h(b);return(0,m.jsx)(y,{as:u,ownerState:b,className:(0,o.Z)(Z.root,a),ref:t,...g,style:{..."elevation"===p&&{"--Paper-shadow":(i.vars||i).shadows[f],...i.vars&&{"--Paper-overlay":null===(n=i.vars.overlays)||void 0===n?void 0:n[f]},...!i.vars&&"dark"===i.palette.mode&&{"--Paper-overlay":"linear-gradient(".concat((0,l.Fq)("#fff",(0,d.Z)(f)),", ").concat((0,l.Fq)("#fff",(0,d.Z)(f)),")")}},...g.style}})})},320:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(2265),o=n(4839),i=n(6990),l=n(2272),a=n(8024),s=n(339),u=n(5885),c=n(2296),d=n(587);function f(e){return(0,d.ZP)("MuiSvgIcon",e)}(0,c.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var v=n(7437);let p=e=>{let{color:t,fontSize:n,classes:r}=e,o={root:["root","inherit"!==t&&"color".concat((0,l.Z)(t)),"fontSize".concat((0,l.Z)(n))]};return(0,i.Z)(o,f,r)},m=(0,a.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,"inherit"!==n.color&&t["color".concat((0,l.Z)(n.color))],t["fontSize".concat((0,l.Z)(n.fontSize))]]}})((0,s.Z)(e=>{var t,n,r,o,i,l,a,s,u,c,d,f,v,p,m,h,y,g;let{theme:b}=e;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:null===(o=b.transitions)||void 0===o?void 0:null===(r=o.create)||void 0===r?void 0:r.call(o,"fill",{duration:null===(n=(null!==(m=b.vars)&&void 0!==m?m:b).transitions)||void 0===n?void 0:null===(t=n.duration)||void 0===t?void 0:t.shorter}),variants:[{props:e=>!e.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:(null===(l=b.typography)||void 0===l?void 0:null===(i=l.pxToRem)||void 0===i?void 0:i.call(l,20))||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:(null===(s=b.typography)||void 0===s?void 0:null===(a=s.pxToRem)||void 0===a?void 0:a.call(s,24))||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:(null===(c=b.typography)||void 0===c?void 0:null===(u=c.pxToRem)||void 0===u?void 0:u.call(c,35))||"2.1875rem"}},...Object.entries((null!==(h=b.vars)&&void 0!==h?h:b).palette).filter(e=>{let[,t]=e;return t&&t.main}).map(e=>{var t,n,r;let[o]=e;return{props:{color:o},style:{color:null===(n=(null!==(r=b.vars)&&void 0!==r?r:b).palette)||void 0===n?void 0:null===(t=n[o])||void 0===t?void 0:t.main}}}),{props:{color:"action"},style:{color:null===(f=(null!==(y=b.vars)&&void 0!==y?y:b).palette)||void 0===f?void 0:null===(d=f.action)||void 0===d?void 0:d.active}},{props:{color:"disabled"},style:{color:null===(p=(null!==(g=b.vars)&&void 0!==g?g:b).palette)||void 0===p?void 0:null===(v=p.action)||void 0===v?void 0:v.disabled}},{props:{color:"inherit"},style:{color:void 0}}]}})),h=r.forwardRef(function(e,t){let n=(0,u.i)({props:e,name:"MuiSvgIcon"}),{children:i,className:l,color:a="inherit",component:s="svg",fontSize:c="medium",htmlColor:d,inheritViewBox:f=!1,titleAccess:h,viewBox:y="0 0 24 24",...g}=n,b=r.isValidElement(i)&&"svg"===i.type,Z={...n,color:a,component:s,fontSize:c,instanceFontSize:e.fontSize,inheritViewBox:f,viewBox:y,hasSvgAsChild:b},x={};f||(x.viewBox=y);let E=p(Z);return(0,v.jsxs)(m,{as:s,className:(0,o.Z)(E.root,l),focusable:"false",color:d,"aria-hidden":!h||void 0,role:h?"img":void 0,ref:t,...x,...g,...b&&i.props,ownerState:Z,children:[b?i.props.children:i,h?(0,v.jsx)("title",{children:h}):null]})});h&&(h.muiName="SvgIcon");var y=h},6830:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7740),o=n(7754),i=n(8507),l=n(7664);function a(e,t){let{className:n,elementType:a,ownerState:s,externalForwardedProps:u,getSlotOwnerState:c,internalForwardedProps:d,...f}=t,{component:v,slots:p={[e]:void 0},slotProps:m={[e]:void 0},...h}=u,y=p[e]||a,g=(0,i.Z)(m[e],s),{props:{component:b,...Z},internalRef:x}=(0,l.Z)({className:n,...f,externalForwardedProps:"root"===e?h:void 0,externalSlotProps:g}),E=(0,r.Z)(x,null==g?void 0:g.ref,t.ref),R=c?c(Z):{},w={...s,...R},S="root"===e?b||v:b,k=(0,o.Z)(y,{..."root"===e&&!v&&!p[e]&&d,..."root"!==e&&!p[e]&&d,...Z,...S&&{as:S},ref:E},w);return Object.keys(R).forEach(e=>{delete k[e]}),[y,k]}},7754:function(e,t,n){n.d(t,{Z:function(){return r}});var r=function(e,t,n){return void 0===e||"string"==typeof e?t:{...t,ownerState:{...t.ownerState,...n}}}},2044:function(e,t){t.Z=function(e,t=[]){if(void 0===e)return{};let n={};return Object.keys(e).filter(n=>n.match(/^on[A-Z]/)&&"function"==typeof e[n]&&!t.includes(n)).forEach(t=>{n[t]=e[t]}),n}},2384:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(2265);function o(e){return e&&r.isValidElement(e)?e.props.propertyIsEnumerable("ref")?e.props.ref:e.ref:null}},4086:function(e,t,n){n.d(t,{Z:function(){return r}});function r(e){let t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}},7664:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(4839),o=n(2044),i=function(e){if(void 0===e)return{};let t={};return Object.keys(e).filter(t=>!(t.match(/^on[A-Z]/)&&"function"==typeof e[t])).forEach(n=>{t[n]=e[n]}),t},l=function(e){let{getSlotProps:t,additionalProps:n,externalSlotProps:l,externalForwardedProps:a,className:s}=e;if(!t){let e=(0,r.Z)(n?.className,s,a?.className,l?.className),t={...n?.style,...a?.style,...l?.style},o={...n,...a,...l};return e.length>0&&(o.className=e),Object.keys(t).length>0&&(o.style=t),{props:o,internalRef:void 0}}let u=(0,o.Z)({...a,...l}),c=i(l),d=i(a),f=t(u),v=(0,r.Z)(f?.className,n?.className,s,a?.className,l?.className),p={...f?.style,...n?.style,...a?.style,...l?.style},m={...f,...n,...d,...c};return v.length>0&&(m.className=v),Object.keys(p).length>0&&(m.style=p),{props:m,internalRef:f.ref}}},21:function(e,t,n){n.d(t,{Z:function(){return r}});function r(e){return e&&e.ownerDocument||document}},4581:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(21);function o(e){return(0,r.Z)(e).defaultView||window}},8507:function(e,t){t.Z=function(e,t,n){return"function"==typeof e?e(t,n):e}},3610:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(2265),o=Object.defineProperty,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))a.call(t,n)&&s(e,n,t[n]);return e},c=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))0>t.indexOf(r)&&a.call(e,r)&&(n[r]=e[r]);return n};let d=(0,r.forwardRef)((e,t)=>{let{alt:n,color:o="currentColor",size:i="1em",weight:l="regular",mirrored:a=!1,children:s,weights:d}=e,f=c(e,["alt","color","size","weight","mirrored","children","weights"]);return r.createElement("svg",u({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,fill:o,viewBox:"0 0 256 256",transform:a?"scale(-1, 1)":void 0},f),!!n&&r.createElement("title",null,n),s,d.get(l))});d.displayName="SSRBase";let f=d}}]);