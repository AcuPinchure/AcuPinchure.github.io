(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[267],{4593:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(2265),o=n(4839),i=n(6990),l=n(8024),a=n(5885),s=n(6830),u=n(5635),c=n(2296),d=n(587);function f(e){return(0,d.ZP)("MuiBackdrop",e)}(0,c.Z)("MuiBackdrop",["root","invisible"]);var p=n(7437);let m=e=>{let{classes:t,invisible:n}=e;return(0,i.Z)({root:["root",n&&"invisible"]},f,t)},h=(0,l.ZP)("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",variants:[{props:{invisible:!0},style:{backgroundColor:"transparent"}}]});var v=r.forwardRef(function(e,t){let n=(0,a.i)({props:e,name:"MuiBackdrop"}),{children:r,className:i,component:l="div",invisible:c=!1,open:d,components:f={},componentsProps:v={},slotProps:g={},slots:y={},TransitionComponent:b,transitionDuration:x,...E}=n,Z={...n,component:l,invisible:c},w=m(Z),R={slots:{transition:b,root:f.Root,...y},slotProps:{...v,...g}},[k,T]=(0,s.Z)("root",{elementType:h,externalForwardedProps:R,className:(0,o.Z)(w.root,i),ownerState:Z}),[P,I]=(0,s.Z)("transition",{elementType:u.Z,externalForwardedProps:R,ownerState:Z});return delete I.ownerState,(0,p.jsx)(P,{in:d,timeout:x,...E,...I,children:(0,p.jsx)(k,{"aria-hidden":!0,...T,classes:w,ref:t,children:r})})})},5635:function(e,t,n){"use strict";var r=n(2265),o=n(3822),i=n(2384),l=n(2960),a=n(5931),s=n(909),u=n(7437);let c={entering:{opacity:1},entered:{opacity:1}},d=r.forwardRef(function(e,t){let n=(0,l.Z)(),d={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:f,appear:p=!0,children:m,easing:h,in:v,onEnter:g,onEntered:y,onEntering:b,onExit:x,onExited:E,onExiting:Z,style:w,timeout:R=d,TransitionComponent:k=o.ZP,...T}=e,P=r.useRef(null),I=(0,s.Z)(P,(0,i.Z)(m),t),C=e=>t=>{if(e){let n=P.current;void 0===t?e(n):e(n,t)}},O=C(b),S=C((e,t)=>{(0,a.n)(e);let r=(0,a.C)({style:w,timeout:R,easing:h},{mode:"enter"});e.style.webkitTransition=n.transitions.create("opacity",r),e.style.transition=n.transitions.create("opacity",r),g&&g(e,t)}),N=C(y),M=C(Z),A=C(e=>{let t=(0,a.C)({style:w,timeout:R,easing:h},{mode:"exit"});e.style.webkitTransition=n.transitions.create("opacity",t),e.style.transition=n.transitions.create("opacity",t),x&&x(e)}),L=C(E);return(0,u.jsx)(k,{appear:p,in:v,nodeRef:P,onEnter:S,onEntered:N,onEntering:O,onExit:A,onExited:L,onExiting:M,addEndListener:e=>{f&&f(P.current,e)},timeout:R,...T,children:(e,t)=>r.cloneElement(m,{style:{opacity:0,visibility:"exited"!==e||v?void 0:"hidden",...c[e],...w,...m.props.style},ref:I,...t})})});t.Z=d},2877:function(e,t,n){"use strict";n.d(t,{Z:function(){return Y}});var r=n(2265),o=n(4839),i=n(6990),l=n(7740),a=n(2384),s=n(21),u=n(7437);function c(e){let t=[],n=[];return Array.from(e.querySelectorAll('input,select,textarea,a[href],button,[tabindex],audio[controls],video[controls],[contenteditable]:not([contenteditable="false"])')).forEach((e,r)=>{let o=function(e){let t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?"true"===e.contentEditable||("AUDIO"===e.nodeName||"VIDEO"===e.nodeName||"DETAILS"===e.nodeName)&&null===e.getAttribute("tabindex")?0:e.tabIndex:t}(e);-1===o||e.disabled||"INPUT"===e.tagName&&"hidden"===e.type||function(e){if("INPUT"!==e.tagName||"radio"!==e.type||!e.name)return!1;let t=t=>e.ownerDocument.querySelector('input[type="radio"]'.concat(t)),n=t('[name="'.concat(e.name,'"]:checked'));return n||(n=t('[name="'.concat(e.name,'"]'))),n!==e}(e)||(0===o?t.push(e):n.push({documentOrder:r,tabIndex:o,node:e}))}),n.sort((e,t)=>e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex).map(e=>e.node).concat(t)}function d(){return!0}var f=function(e){let{children:t,disableAutoFocus:n=!1,disableEnforceFocus:o=!1,disableRestoreFocus:i=!1,getTabbable:f=c,isEnabled:p=d,open:m}=e,h=r.useRef(!1),v=r.useRef(null),g=r.useRef(null),y=r.useRef(null),b=r.useRef(null),x=r.useRef(!1),E=r.useRef(null),Z=(0,l.Z)((0,a.Z)(t),E),w=r.useRef(null);r.useEffect(()=>{m&&E.current&&(x.current=!n)},[n,m]),r.useEffect(()=>{if(!m||!E.current)return;let e=(0,s.Z)(E.current);return!E.current.contains(e.activeElement)&&(E.current.hasAttribute("tabIndex")||E.current.setAttribute("tabIndex","-1"),x.current&&E.current.focus()),()=>{i||(y.current&&y.current.focus&&(h.current=!0,y.current.focus()),y.current=null)}},[m]),r.useEffect(()=>{if(!m||!E.current)return;let e=(0,s.Z)(E.current),t=t=>{w.current=t,!o&&p()&&"Tab"===t.key&&e.activeElement===E.current&&t.shiftKey&&(h.current=!0,g.current&&g.current.focus())},n=()=>{let t=E.current;if(null===t)return;if(!e.hasFocus()||!p()||h.current){h.current=!1;return}if(t.contains(e.activeElement)||o&&e.activeElement!==v.current&&e.activeElement!==g.current)return;if(e.activeElement!==b.current)b.current=null;else if(null!==b.current)return;if(!x.current)return;let n=[];if((e.activeElement===v.current||e.activeElement===g.current)&&(n=f(E.current)),n.length>0){var r,i;let e=!!((null===(r=w.current)||void 0===r?void 0:r.shiftKey)&&(null===(i=w.current)||void 0===i?void 0:i.key)==="Tab"),t=n[0],o=n[n.length-1];"string"!=typeof t&&"string"!=typeof o&&(e?o.focus():t.focus())}else t.focus()};e.addEventListener("focusin",n),e.addEventListener("keydown",t,!0);let r=setInterval(()=>{e.activeElement&&"BODY"===e.activeElement.tagName&&n()},50);return()=>{clearInterval(r),e.removeEventListener("focusin",n),e.removeEventListener("keydown",t,!0)}},[n,o,i,p,m,f]);let R=e=>{null===y.current&&(y.current=e.relatedTarget),x.current=!0};return(0,u.jsxs)(r.Fragment,{children:[(0,u.jsx)("div",{tabIndex:m?0:-1,onFocus:R,ref:v,"data-testid":"sentinelStart"}),r.cloneElement(t,{ref:Z,onFocus:e=>{null===y.current&&(y.current=e.relatedTarget),x.current=!0,b.current=e.target;let n=t.props.onFocus;n&&n(e)}}),(0,u.jsx)("div",{tabIndex:m?0:-1,onFocus:R,ref:g,"data-testid":"sentinelEnd"})]})},p=n(4887),m=n(3815),h=n(9969);let v=r.forwardRef(function(e,t){let{children:n,container:o,disablePortal:i=!1}=e,[s,c]=r.useState(null),d=(0,l.Z)((0,a.Z)(n),t);return((0,m.Z)(()=>{!i&&c(("function"==typeof o?o():o)||document.body)},[o,i]),(0,m.Z)(()=>{if(s&&!i)return(0,h.Z)(t,s),()=>{(0,h.Z)(t,null)}},[t,s,i]),i)?r.isValidElement(n)?r.cloneElement(n,{ref:d}):(0,u.jsx)(r.Fragment,{children:n}):(0,u.jsx)(r.Fragment,{children:s?p.createPortal(n,s):s})});var g=n(8024),y=n(339),b=n(5885),x=n(4593),E=n(5590);function Z(...e){return e.reduce((e,t)=>null==t?e:function(...n){e.apply(this,n),t.apply(this,n)},()=>{})}var w=n(2044),R=n(4581),k=n(4086);function T(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function P(e){return parseInt((0,R.Z)(e).getComputedStyle(e).paddingRight,10)||0}function I(e,t,n,r,o){let i=[t,n,...r];[].forEach.call(e.children,e=>{let t=-1===i.indexOf(e),n=!function(e){let t=-1!==["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName),n="INPUT"===e.tagName&&"hidden"===e.getAttribute("type");return t||n}(e);t&&n&&T(e,o)})}function C(e,t){let n=-1;return e.some((e,r)=>!!t(e)&&(n=r,!0)),n}class O{add(e,t){let n=this.modals.indexOf(e);if(-1!==n)return n;n=this.modals.length,this.modals.push(e),e.modalRef&&T(e.modalRef,!1);let r=function(e){let t=[];return[].forEach.call(e.children,e=>{"true"===e.getAttribute("aria-hidden")&&t.push(e)}),t}(t);I(t,e.mount,e.modalRef,r,!0);let o=C(this.containers,e=>e.container===t);return -1!==o?this.containers[o].modals.push(e):this.containers.push({modals:[e],container:t,restore:null,hiddenSiblings:r}),n}mount(e,t){let n=C(this.containers,t=>-1!==t.modals.indexOf(e)),r=this.containers[n];r.restore||(r.restore=function(e,t){let n=[],r=e.container;if(!t.disableScrollLock){let e;if(function(e){let t=(0,s.Z)(e);return t.body===e?(0,R.Z)(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(r)){let e=(0,k.Z)((0,s.Z)(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight="".concat(P(r)+e,"px");let t=(0,s.Z)(r).querySelectorAll(".mui-fixed");[].forEach.call(t,t=>{n.push({value:t.style.paddingRight,property:"padding-right",el:t}),t.style.paddingRight="".concat(P(t)+e,"px")})}if(r.parentNode instanceof DocumentFragment)e=(0,s.Z)(r).body;else{let t=r.parentElement,n=(0,R.Z)(r);e=(null==t?void 0:t.nodeName)==="HTML"&&"scroll"===n.getComputedStyle(t).overflowY?t:r}n.push({value:e.style.overflow,property:"overflow",el:e},{value:e.style.overflowX,property:"overflow-x",el:e},{value:e.style.overflowY,property:"overflow-y",el:e}),e.style.overflow="hidden"}return()=>{n.forEach(e=>{let{value:t,el:n,property:r}=e;t?n.style.setProperty(r,t):n.style.removeProperty(r)})}}(r,t))}remove(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],n=this.modals.indexOf(e);if(-1===n)return n;let r=C(this.containers,t=>-1!==t.modals.indexOf(e)),o=this.containers[r];if(o.modals.splice(o.modals.indexOf(e),1),this.modals.splice(n,1),0===o.modals.length)o.restore&&o.restore(),e.modalRef&&T(e.modalRef,t),I(o.container,e.mount,e.modalRef,o.hiddenSiblings,!1),this.containers.splice(r,1);else{let e=o.modals[o.modals.length-1];e.modalRef&&T(e.modalRef,!1)}return n}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}constructor(){this.modals=[],this.containers=[]}}let S=new O;var N=function(e){let{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:o=!1,manager:i=S,closeAfterTransition:a=!1,onTransitionEnter:u,onTransitionExited:c,children:d,onClose:f,open:p,rootRef:m}=e,h=r.useRef({}),v=r.useRef(null),g=r.useRef(null),y=(0,l.Z)(g,m),[b,x]=r.useState(!p),R=!!d&&d.props.hasOwnProperty("in"),k=!0;("false"===e["aria-hidden"]||!1===e["aria-hidden"])&&(k=!1);let P=()=>(0,s.Z)(v.current),I=()=>(h.current.modalRef=g.current,h.current.mount=v.current,h.current),C=()=>{i.mount(I(),{disableScrollLock:o}),g.current&&(g.current.scrollTop=0)},O=(0,E.Z)(()=>{let e=("function"==typeof t?t():t)||P().body;i.add(I(),e),g.current&&C()}),N=r.useCallback(()=>i.isTopModal(I()),[i]),M=(0,E.Z)(e=>{v.current=e,e&&(p&&N()?C():g.current&&T(g.current,k))}),A=r.useCallback(()=>{i.remove(I(),k)},[k,i]);r.useEffect(()=>()=>{A()},[A]),r.useEffect(()=>{p?O():R&&a||A()},[p,A,R,a,O]);let L=e=>t=>{var r;null===(r=e.onKeyDown)||void 0===r||r.call(e,t),"Escape"===t.key&&229!==t.which&&N()&&!n&&(t.stopPropagation(),f&&f(t,"escapeKeyDown"))},j=e=>t=>{var n;null===(n=e.onClick)||void 0===n||n.call(e,t),t.target===t.currentTarget&&f&&f(t,"backdropClick")};return{getRootProps:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,w.Z)(e);delete n.onTransitionEnter,delete n.onTransitionExited;let r={...n,...t};return{role:"presentation",...r,onKeyDown:L(r),ref:y}},getBackdropProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{"aria-hidden":!0,...e,onClick:j(e),open:p}},getTransitionProps:()=>({onEnter:Z(()=>{x(!1),u&&u()},null==d?void 0:d.props.onEnter),onExited:Z(()=>{x(!0),c&&c(),a&&A()},null==d?void 0:d.props.onExited)}),rootRef:y,portalRef:M,isTopModal:N,exited:b,hasTransition:R}},M=n(2296),A=n(587);function L(e){return(0,A.ZP)("MuiModal",e)}(0,M.Z)("MuiModal",["root","hidden","backdrop"]);var j=n(6830),F=n(909);let _=e=>{let{open:t,exited:n,classes:r}=e;return(0,i.Z)({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},L,r)},B=(0,g.ZP)("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})((0,y.Z)(e=>{let{theme:t}=e;return{position:"fixed",zIndex:(t.vars||t).zIndex.modal,right:0,bottom:0,top:0,left:0,variants:[{props:e=>{let{ownerState:t}=e;return!t.open&&t.exited},style:{visibility:"hidden"}}]}})),D=(0,g.ZP)(x.Z,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1});var Y=r.forwardRef(function(e,t){let n=(0,b.i)({name:"MuiModal",props:e}),{BackdropComponent:i=D,BackdropProps:l,classes:a,className:s,closeAfterTransition:c=!1,children:d,container:p,component:m,components:h={},componentsProps:g={},disableAutoFocus:y=!1,disableEnforceFocus:x=!1,disableEscapeKeyDown:E=!1,disablePortal:Z=!1,disableRestoreFocus:w=!1,disableScrollLock:R=!1,hideBackdrop:k=!1,keepMounted:T=!1,onBackdropClick:P,onClose:I,onTransitionEnter:C,onTransitionExited:O,open:S,slotProps:M={},slots:A={},theme:L,...Y}=n,z={...n,closeAfterTransition:c,disableAutoFocus:y,disableEnforceFocus:x,disableEscapeKeyDown:E,disablePortal:Z,disableRestoreFocus:w,disableScrollLock:R,hideBackdrop:k,keepMounted:T},{getRootProps:K,getBackdropProps:U,getTransitionProps:V,portalRef:W,isTopModal:H,exited:X,hasTransition:q}=N({...z,rootRef:t}),G={...z,exited:X},J=_(G),Q={};if(void 0===d.props.tabIndex&&(Q.tabIndex="-1"),q){let{onEnter:e,onExited:t}=V();Q.onEnter=e,Q.onExited=t}let $={slots:{root:h.Root,backdrop:h.Backdrop,...A},slotProps:{...g,...M}},[ee,et]=(0,j.Z)("root",{elementType:B,externalForwardedProps:$,getSlotProps:K,additionalProps:{ref:t,as:m},ownerState:G,className:(0,o.Z)(s,null==J?void 0:J.root,!G.open&&G.exited&&(null==J?void 0:J.hidden))}),[en,er]=(0,j.Z)("backdrop",{elementType:i,externalForwardedProps:$,additionalProps:l,getSlotProps:e=>U({...e,onClick:t=>{P&&P(t),(null==e?void 0:e.onClick)&&e.onClick(t)}}),className:(0,o.Z)(null==l?void 0:l.className,null==J?void 0:J.backdrop),ownerState:G}),eo=(0,F.Z)(null==l?void 0:l.ref,er.ref);return T||S||q&&!X?(0,u.jsx)(v,{ref:W,container:p,disablePortal:Z,children:(0,u.jsxs)(ee,{...et,...Y,children:[!k&&i?(0,u.jsx)(en,{...er,ref:eo}):null,(0,u.jsx)(f,{disableEnforceFocus:x,disableAutoFocus:y,disableRestoreFocus:w,isEnabled:H,open:S,children:r.cloneElement(d,Q)})]})}):null})},3100:function(e,t,n){"use strict";var r=n(2265),o=n(3822),i=n(2384),l=n(5014),a=n(909),s=n(2960),u=n(5931),c=n(8095),d=n(7437);function f(e,t,n){let r=function(e,t,n){let r;let o=t.getBoundingClientRect(),i=n&&n.getBoundingClientRect(),l=(0,c.Z)(t);if(t.fakeTransform)r=t.fakeTransform;else{let e=l.getComputedStyle(t);r=e.getPropertyValue("-webkit-transform")||e.getPropertyValue("transform")}let a=0,s=0;if(r&&"none"!==r&&"string"==typeof r){let e=r.split("(")[1].split(")")[0].split(",");a=parseInt(e[4],10),s=parseInt(e[5],10)}return"left"===e?i?"translateX(".concat(i.right+a-o.left,"px)"):"translateX(".concat(l.innerWidth+a-o.left,"px)"):"right"===e?i?"translateX(-".concat(o.right-i.left-a,"px)"):"translateX(-".concat(o.left+o.width-a,"px)"):"up"===e?i?"translateY(".concat(i.bottom+s-o.top,"px)"):"translateY(".concat(l.innerHeight+s-o.top,"px)"):i?"translateY(-".concat(o.top-i.top+o.height-s,"px)"):"translateY(-".concat(o.top+o.height-s,"px)")}(e,t,"function"==typeof n?n():n);r&&(t.style.webkitTransform=r,t.style.transform=r)}let p=r.forwardRef(function(e,t){let n=(0,s.Z)(),p={enter:n.transitions.easing.easeOut,exit:n.transitions.easing.sharp},m={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:h,appear:v=!0,children:g,container:y,direction:b="down",easing:x=p,in:E,onEnter:Z,onEntered:w,onEntering:R,onExit:k,onExited:T,onExiting:P,style:I,timeout:C=m,TransitionComponent:O=o.ZP,...S}=e,N=r.useRef(null),M=(0,a.Z)((0,i.Z)(g),N,t),A=e=>t=>{e&&(void 0===t?e(N.current):e(N.current,t))},L=A((e,t)=>{f(b,e,y),(0,u.n)(e),Z&&Z(e,t)}),j=A((e,t)=>{let r=(0,u.C)({timeout:C,style:I,easing:x},{mode:"enter"});e.style.webkitTransition=n.transitions.create("-webkit-transform",{...r}),e.style.transition=n.transitions.create("transform",{...r}),e.style.webkitTransform="none",e.style.transform="none",R&&R(e,t)}),F=A(w),_=A(P),B=A(e=>{let t=(0,u.C)({timeout:C,style:I,easing:x},{mode:"exit"});e.style.webkitTransition=n.transitions.create("-webkit-transform",t),e.style.transition=n.transitions.create("transform",t),f(b,e,y),k&&k(e)}),D=A(e=>{e.style.webkitTransition="",e.style.transition="",T&&T(e)}),Y=r.useCallback(()=>{N.current&&f(b,N.current,y)},[b,y]);return r.useEffect(()=>{if(E||"down"===b||"right"===b)return;let e=(0,l.Z)(()=>{N.current&&f(b,N.current,y)}),t=(0,c.Z)(N.current);return t.addEventListener("resize",e),()=>{e.clear(),t.removeEventListener("resize",e)}},[b,E,y]),r.useEffect(()=>{E||Y()},[E,Y]),(0,d.jsx)(O,{nodeRef:N,onEnter:L,onEntered:F,onEntering:j,onExit:B,onExited:D,onExiting:_,addEndListener:e=>{h&&h(N.current,e)},appear:v,in:E,timeout:C,...S,children:(e,t)=>r.cloneElement(g,{ref:M,style:{visibility:"exited"!==e||E?void 0:"hidden",...I,...g.props.style},...t})})});t.Z=p},5014:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=function(e,t=166){let n;function r(...o){clearTimeout(n),n=setTimeout(()=>{e.apply(this,o)},t)}return r.clear=()=>{clearTimeout(n)},r}},8095:function(e,t,n){"use strict";var r=n(4581);t.Z=r.Z},2384:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(2265);function o(e){return e&&r.isValidElement(e)?e.props.propertyIsEnumerable("ref")?e.props.ref:e.ref:null}},4086:function(e,t,n){"use strict";function r(e){let t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}n.d(t,{Z:function(){return r}})},21:function(e,t,n){"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,{Z:function(){return r}})},4581:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(21);function o(e){return(0,r.Z)(e).defaultView||window}},6425:function(e){e.exports={style:{fontFamily:"'__Lexend_d25a14', '__Lexend_Fallback_d25a14'",fontStyle:"normal"},className:"__className_d25a14"}},3610:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(2265),o=Object.defineProperty,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))a.call(t,n)&&s(e,n,t[n]);return e},c=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))0>t.indexOf(r)&&a.call(e,r)&&(n[r]=e[r]);return n};let d=(0,r.forwardRef)((e,t)=>{let{alt:n,color:o="currentColor",size:i="1em",weight:l="regular",mirrored:a=!1,children:s,weights:d}=e,f=c(e,["alt","color","size","weight","mirrored","children","weights"]);return r.createElement("svg",u({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,fill:o,viewBox:"0 0 256 256",transform:a?"scale(-1, 1)":void 0},f),!!n&&r.createElement("title",null,n),s,d.get(l))});d.displayName="SSRBase";let f=d}}]);