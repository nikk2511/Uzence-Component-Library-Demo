import{r as u}from"./index-BwDkhjyp.js";var l={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=u,w=Symbol.for("react.element"),g=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,b=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k={key:!0,ref:!0,__self:!0,__source:!0};function p(r,t,o){var e,n={},s=null,a=null;o!==void 0&&(s=""+o),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(e in t)h.call(t,e)&&!k.hasOwnProperty(e)&&(n[e]=t[e]);if(r&&r.defaultProps)for(e in t=r.defaultProps,t)n[e]===void 0&&(n[e]=t[e]);return{$$typeof:w,type:r,key:s,ref:a,props:n,_owner:b.current}}i.Fragment=g;i.jsx=p;i.jsxs=p;l.exports=i;var A=l.exports;/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var E={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),j=(r,t)=>{const o=u.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:m="",children:f,...d},y)=>u.createElement("svg",{ref:y,...E,width:n,height:n,stroke:e,strokeWidth:a?Number(s)*24/Number(n):s,className:["lucide",`lucide-${L(r)}`,m].join(" "),...d},[...t.map(([_,v])=>u.createElement(_,v)),...Array.isArray(f)?f:[f]]));return o.displayName=`${r}`,o};/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=j("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);function c(r){var t,o,e="";if(typeof r=="string"||typeof r=="number")e+=r;else if(typeof r=="object")if(Array.isArray(r)){var n=r.length;for(t=0;t<n;t++)r[t]&&(o=c(r[t]))&&(e&&(e+=" "),e+=o)}else for(o in r)r[o]&&(e&&(e+=" "),e+=o);return e}function R(){for(var r,t,o=0,e="",n=arguments.length;o<n;o++)(r=arguments[o])&&(t=c(r))&&(e&&(e+=" "),e+=t);return e}function N(...r){return R(r)}export{C as L,N as a,j as c,A as j};
