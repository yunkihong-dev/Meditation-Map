function k5(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Dl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Sa(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var K4={exports:{}},Ca={},Y4={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ls=Symbol.for("react.element"),j5=Symbol.for("react.portal"),S5=Symbol.for("react.fragment"),C5=Symbol.for("react.strict_mode"),$5=Symbol.for("react.profiler"),E5=Symbol.for("react.provider"),P5=Symbol.for("react.context"),I5=Symbol.for("react.forward_ref"),T5=Symbol.for("react.suspense"),R5=Symbol.for("react.memo"),M5=Symbol.for("react.lazy"),w0=Symbol.iterator;function z5(e){return e===null||typeof e!="object"?null:(e=w0&&e[w0]||e["@@iterator"],typeof e=="function"?e:null)}var G4={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z4=Object.assign,q4={};function Zi(e,t,n){this.props=e,this.context=t,this.refs=q4,this.updater=n||G4}Zi.prototype.isReactComponent={};Zi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Q4(){}Q4.prototype=Zi.prototype;function R1(e,t,n){this.props=e,this.context=t,this.refs=q4,this.updater=n||G4}var M1=R1.prototype=new Q4;M1.constructor=R1;Z4(M1,Zi.prototype);M1.isPureReactComponent=!0;var b0=Array.isArray,X4=Object.prototype.hasOwnProperty,z1={current:null},J4={key:!0,ref:!0,__self:!0,__source:!0};function eg(e,t,n){var r,i={},s=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(s=""+t.key),t)X4.call(t,r)&&!J4.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ls,type:e,key:s,ref:l,props:i,_owner:z1.current}}function A5(e,t){return{$$typeof:Ls,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function A1(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ls}function _5(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var k0=/\/+/g;function pc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?_5(""+e.key):t.toString(36)}function ml(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ls:case j5:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+pc(l,0):r,b0(i)?(n="",e!=null&&(n=e.replace(k0,"$&/")+"/"),ml(i,t,n,"",function(u){return u})):i!=null&&(A1(i)&&(i=A5(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(k0,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",b0(e))for(var a=0;a<e.length;a++){s=e[a];var c=r+pc(s,a);l+=ml(s,t,n,c,i)}else if(c=z5(e),typeof c=="function")for(e=c.call(e),a=0;!(s=e.next()).done;)s=s.value,c=r+pc(s,a++),l+=ml(s,t,n,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Is(e,t,n){if(e==null)return e;var r=[],i=0;return ml(e,r,"","",function(s){return t.call(n,s,i++)}),r}function N5(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var jt={current:null},xl={transition:null},O5={ReactCurrentDispatcher:jt,ReactCurrentBatchConfig:xl,ReactCurrentOwner:z1};function tg(){throw Error("act(...) is not supported in production builds of React.")}ue.Children={map:Is,forEach:function(e,t,n){Is(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Is(e,function(){t++}),t},toArray:function(e){return Is(e,function(t){return t})||[]},only:function(e){if(!A1(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ue.Component=Zi;ue.Fragment=S5;ue.Profiler=$5;ue.PureComponent=R1;ue.StrictMode=C5;ue.Suspense=T5;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O5;ue.act=tg;ue.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Z4({},e.props),i=e.key,s=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,l=z1.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)X4.call(t,c)&&!J4.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ls,type:e.type,key:i,ref:s,props:r,_owner:l}};ue.createContext=function(e){return e={$$typeof:P5,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:E5,_context:e},e.Consumer=e};ue.createElement=eg;ue.createFactory=function(e){var t=eg.bind(null,e);return t.type=e,t};ue.createRef=function(){return{current:null}};ue.forwardRef=function(e){return{$$typeof:I5,render:e}};ue.isValidElement=A1;ue.lazy=function(e){return{$$typeof:M5,_payload:{_status:-1,_result:e},_init:N5}};ue.memo=function(e,t){return{$$typeof:R5,type:e,compare:t===void 0?null:t}};ue.startTransition=function(e){var t=xl.transition;xl.transition={};try{e()}finally{xl.transition=t}};ue.unstable_act=tg;ue.useCallback=function(e,t){return jt.current.useCallback(e,t)};ue.useContext=function(e){return jt.current.useContext(e)};ue.useDebugValue=function(){};ue.useDeferredValue=function(e){return jt.current.useDeferredValue(e)};ue.useEffect=function(e,t){return jt.current.useEffect(e,t)};ue.useId=function(){return jt.current.useId()};ue.useImperativeHandle=function(e,t,n){return jt.current.useImperativeHandle(e,t,n)};ue.useInsertionEffect=function(e,t){return jt.current.useInsertionEffect(e,t)};ue.useLayoutEffect=function(e,t){return jt.current.useLayoutEffect(e,t)};ue.useMemo=function(e,t){return jt.current.useMemo(e,t)};ue.useReducer=function(e,t,n){return jt.current.useReducer(e,t,n)};ue.useRef=function(e){return jt.current.useRef(e)};ue.useState=function(e){return jt.current.useState(e)};ue.useSyncExternalStore=function(e,t,n){return jt.current.useSyncExternalStore(e,t,n)};ue.useTransition=function(){return jt.current.useTransition()};ue.version="18.3.1";Y4.exports=ue;var y=Y4.exports;const Ye=Sa(y),D5=k5({__proto__:null,default:Ye},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B5=y,F5=Symbol.for("react.element"),H5=Symbol.for("react.fragment"),U5=Object.prototype.hasOwnProperty,V5=B5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W5={key:!0,ref:!0,__self:!0,__source:!0};function ng(e,t,n){var r,i={},s=null,l=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)U5.call(t,r)&&!W5.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:F5,type:e,key:s,ref:l,props:i,_owner:V5.current}}Ca.Fragment=H5;Ca.jsx=ng;Ca.jsxs=ng;K4.exports=Ca;var o=K4.exports,sd={},rg={exports:{}},Ut={},ig={exports:{}},og={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,O){var j=A.length;A.push(O);e:for(;0<j;){var Z=j-1>>>1,Q=A[Z];if(0<i(Q,O))A[Z]=O,A[j]=Q,j=Z;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var O=A[0],j=A.pop();if(j!==O){A[0]=j;e:for(var Z=0,Q=A.length,P=Q>>>1;Z<P;){var G=2*(Z+1)-1,te=A[G],J=G+1,Y=A[J];if(0>i(te,j))J<Q&&0>i(Y,te)?(A[Z]=Y,A[J]=j,Z=J):(A[Z]=te,A[G]=j,Z=G);else if(J<Q&&0>i(Y,j))A[Z]=Y,A[J]=j,Z=J;else break e}}return O}function i(A,O){var j=A.sortIndex-O.sortIndex;return j!==0?j:A.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var c=[],u=[],p=1,f=null,h=3,g=!1,w=!1,v=!1,C=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(A){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=A)r(u),O.sortIndex=O.expirationTime,t(c,O);else break;O=n(u)}}function b(A){if(v=!1,L(A),!w)if(n(c)!==null)w=!0,_($);else{var O=n(u);O!==null&&z(b,O.startTime-A)}}function $(A,O){w=!1,v&&(v=!1,x(M),M=-1),g=!0;var j=h;try{for(L(O),f=n(c);f!==null&&(!(f.expirationTime>O)||A&&!T());){var Z=f.callback;if(typeof Z=="function"){f.callback=null,h=f.priorityLevel;var Q=Z(f.expirationTime<=O);O=e.unstable_now(),typeof Q=="function"?f.callback=Q:f===n(c)&&r(c),L(O)}else r(c);f=n(c)}if(f!==null)var P=!0;else{var G=n(u);G!==null&&z(b,G.startTime-O),P=!1}return P}finally{f=null,h=j,g=!1}}var k=!1,S=null,M=-1,R=5,I=-1;function T(){return!(e.unstable_now()-I<R)}function E(){if(S!==null){var A=e.unstable_now();I=A;var O=!0;try{O=S(!0,A)}finally{O?N():(k=!1,S=null)}}else k=!1}var N;if(typeof m=="function")N=function(){m(E)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,H=D.port2;D.port1.onmessage=E,N=function(){H.postMessage(null)}}else N=function(){C(E,0)};function _(A){S=A,k||(k=!0,N())}function z(A,O){M=C(function(){A(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,_($))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(A){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var j=h;h=O;try{return A()}finally{h=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,O){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var j=h;h=A;try{return O()}finally{h=j}},e.unstable_scheduleCallback=function(A,O,j){var Z=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Z+j:Z):j=Z,A){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=j+Q,A={id:p++,callback:O,priorityLevel:A,startTime:j,expirationTime:Q,sortIndex:-1},j>Z?(A.sortIndex=j,t(u,A),n(c)===null&&A===n(u)&&(v?(x(M),M=-1):v=!0,z(b,j-Z))):(A.sortIndex=Q,t(c,A),w||g||(w=!0,_($))),A},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(A){var O=h;return function(){var j=h;h=O;try{return A.apply(this,arguments)}finally{h=j}}}})(og);ig.exports=og;var K5=ig.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y5=y,Ht=K5;function V(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sg=new Set,Zo={};function qr(e,t){Ai(e,t),Ai(e+"Capture",t)}function Ai(e,t){for(Zo[e]=t,e=0;e<t.length;e++)sg.add(t[e])}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ld=Object.prototype.hasOwnProperty,G5=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,j0={},S0={};function Z5(e){return ld.call(S0,e)?!0:ld.call(j0,e)?!1:G5.test(e)?S0[e]=!0:(j0[e]=!0,!1)}function q5(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Q5(e,t,n,r){if(t===null||typeof t>"u"||q5(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function St(e,t,n,r,i,s,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=l}var dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){dt[e]=new St(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];dt[t]=new St(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){dt[e]=new St(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){dt[e]=new St(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){dt[e]=new St(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){dt[e]=new St(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){dt[e]=new St(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){dt[e]=new St(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){dt[e]=new St(e,5,!1,e.toLowerCase(),null,!1,!1)});var _1=/[\-:]([a-z])/g;function N1(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_1,N1);dt[t]=new St(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_1,N1);dt[t]=new St(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_1,N1);dt[t]=new St(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){dt[e]=new St(e,1,!1,e.toLowerCase(),null,!1,!1)});dt.xlinkHref=new St("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){dt[e]=new St(e,1,!1,e.toLowerCase(),null,!0,!0)});function O1(e,t,n,r){var i=dt.hasOwnProperty(t)?dt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Q5(t,n,i,r)&&(n=null),r||i===null?Z5(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Kn=Y5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ts=Symbol.for("react.element"),di=Symbol.for("react.portal"),pi=Symbol.for("react.fragment"),D1=Symbol.for("react.strict_mode"),ad=Symbol.for("react.profiler"),lg=Symbol.for("react.provider"),ag=Symbol.for("react.context"),B1=Symbol.for("react.forward_ref"),cd=Symbol.for("react.suspense"),ud=Symbol.for("react.suspense_list"),F1=Symbol.for("react.memo"),Jn=Symbol.for("react.lazy"),cg=Symbol.for("react.offscreen"),C0=Symbol.iterator;function lo(e){return e===null||typeof e!="object"?null:(e=C0&&e[C0]||e["@@iterator"],typeof e=="function"?e:null)}var Ue=Object.assign,fc;function Co(e){if(fc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);fc=t&&t[1]||""}return`
`+fc+e}var hc=!1;function gc(e,t){if(!e||hc)return"";hc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),l=i.length-1,a=s.length-1;1<=l&&0<=a&&i[l]!==s[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==s[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==s[a]){var c=`
`+i[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=a);break}}}finally{hc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Co(e):""}function X5(e){switch(e.tag){case 5:return Co(e.type);case 16:return Co("Lazy");case 13:return Co("Suspense");case 19:return Co("SuspenseList");case 0:case 2:case 15:return e=gc(e.type,!1),e;case 11:return e=gc(e.type.render,!1),e;case 1:return e=gc(e.type,!0),e;default:return""}}function dd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pi:return"Fragment";case di:return"Portal";case ad:return"Profiler";case D1:return"StrictMode";case cd:return"Suspense";case ud:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ag:return(e.displayName||"Context")+".Consumer";case lg:return(e._context.displayName||"Context")+".Provider";case B1:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F1:return t=e.displayName||null,t!==null?t:dd(e.type)||"Memo";case Jn:t=e._payload,e=e._init;try{return dd(e(t))}catch{}}return null}function J5(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dd(t);case 8:return t===D1?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ug(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function e6(e){var t=ug(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,s.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Rs(e){e._valueTracker||(e._valueTracker=e6(e))}function dg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ug(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Bl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pd(e,t){var n=t.checked;return Ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $0(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function pg(e,t){t=t.checked,t!=null&&O1(e,"checked",t,!1)}function fd(e,t){pg(e,t);var n=mr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hd(e,t.type,n):t.hasOwnProperty("defaultValue")&&hd(e,t.type,mr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function E0(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function hd(e,t,n){(t!=="number"||Bl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var $o=Array.isArray;function Ci(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function gd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(V(91));return Ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function P0(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(V(92));if($o(n)){if(1<n.length)throw Error(V(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mr(n)}}function fg(e,t){var n=mr(t.value),r=mr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function I0(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function hg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function md(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?hg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ms,gg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ms=Ms||document.createElement("div"),Ms.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ms.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},t6=["Webkit","ms","Moz","O"];Object.keys(Mo).forEach(function(e){t6.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mo[t]=Mo[e]})});function mg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mo.hasOwnProperty(e)&&Mo[e]?(""+t).trim():t+"px"}function xg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=mg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var n6=Ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xd(e,t){if(t){if(n6[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(V(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(V(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(V(61))}if(t.style!=null&&typeof t.style!="object")throw Error(V(62))}}function Ld(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yd=null;function H1(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vd=null,$i=null,Ei=null;function T0(e){if(e=ws(e)){if(typeof vd!="function")throw Error(V(280));var t=e.stateNode;t&&(t=Ta(t),vd(e.stateNode,e.type,t))}}function Lg(e){$i?Ei?Ei.push(e):Ei=[e]:$i=e}function yg(){if($i){var e=$i,t=Ei;if(Ei=$i=null,T0(e),t)for(e=0;e<t.length;e++)T0(t[e])}}function vg(e,t){return e(t)}function wg(){}var mc=!1;function bg(e,t,n){if(mc)return e(t,n);mc=!0;try{return vg(e,t,n)}finally{mc=!1,($i!==null||Ei!==null)&&(wg(),yg())}}function Qo(e,t){var n=e.stateNode;if(n===null)return null;var r=Ta(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(V(231,t,typeof n));return n}var wd=!1;if(Fn)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){wd=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{wd=!1}function r6(e,t,n,r,i,s,l,a,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var zo=!1,Fl=null,Hl=!1,bd=null,i6={onError:function(e){zo=!0,Fl=e}};function o6(e,t,n,r,i,s,l,a,c){zo=!1,Fl=null,r6.apply(i6,arguments)}function s6(e,t,n,r,i,s,l,a,c){if(o6.apply(this,arguments),zo){if(zo){var u=Fl;zo=!1,Fl=null}else throw Error(V(198));Hl||(Hl=!0,bd=u)}}function Qr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function kg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function R0(e){if(Qr(e)!==e)throw Error(V(188))}function l6(e){var t=e.alternate;if(!t){if(t=Qr(e),t===null)throw Error(V(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return R0(i),e;if(s===r)return R0(i),t;s=s.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=s;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=s;break}if(a===r){l=!0,r=i,n=s;break}a=a.sibling}if(!l){for(a=s.child;a;){if(a===n){l=!0,n=s,r=i;break}if(a===r){l=!0,r=s,n=i;break}a=a.sibling}if(!l)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?e:t}function jg(e){return e=l6(e),e!==null?Sg(e):null}function Sg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Sg(e);if(t!==null)return t;e=e.sibling}return null}var Cg=Ht.unstable_scheduleCallback,M0=Ht.unstable_cancelCallback,a6=Ht.unstable_shouldYield,c6=Ht.unstable_requestPaint,Ke=Ht.unstable_now,u6=Ht.unstable_getCurrentPriorityLevel,U1=Ht.unstable_ImmediatePriority,$g=Ht.unstable_UserBlockingPriority,Ul=Ht.unstable_NormalPriority,d6=Ht.unstable_LowPriority,Eg=Ht.unstable_IdlePriority,$a=null,$n=null;function p6(e){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot($a,e,void 0,(e.current.flags&128)===128)}catch{}}var hn=Math.clz32?Math.clz32:g6,f6=Math.log,h6=Math.LN2;function g6(e){return e>>>=0,e===0?32:31-(f6(e)/h6|0)|0}var zs=64,As=4194304;function Eo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=Eo(a):(s&=l,s!==0&&(r=Eo(s)))}else l=n&~i,l!==0?r=Eo(l):s!==0&&(r=Eo(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-hn(t),i=1<<n,r|=e[n],t&=~i;return r}function m6(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function x6(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-hn(s),a=1<<l,c=i[l];c===-1?(!(a&n)||a&r)&&(i[l]=m6(a,t)):c<=t&&(e.expiredLanes|=a),s&=~a}}function kd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pg(){var e=zs;return zs<<=1,!(zs&4194240)&&(zs=64),e}function xc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ys(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-hn(t),e[t]=n}function L6(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-hn(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function V1(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-hn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var be=0;function Ig(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Tg,W1,Rg,Mg,zg,jd=!1,_s=[],sr=null,lr=null,ar=null,Xo=new Map,Jo=new Map,tr=[],y6="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function z0(e,t){switch(e){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":Xo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jo.delete(t.pointerId)}}function co(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=ws(t),t!==null&&W1(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function v6(e,t,n,r,i){switch(t){case"focusin":return sr=co(sr,e,t,n,r,i),!0;case"dragenter":return lr=co(lr,e,t,n,r,i),!0;case"mouseover":return ar=co(ar,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Xo.set(s,co(Xo.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Jo.set(s,co(Jo.get(s)||null,e,t,n,r,i)),!0}return!1}function Ag(e){var t=Tr(e.target);if(t!==null){var n=Qr(t);if(n!==null){if(t=n.tag,t===13){if(t=kg(n),t!==null){e.blockedOn=t,zg(e.priority,function(){Rg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ll(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Sd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);yd=r,n.target.dispatchEvent(r),yd=null}else return t=ws(n),t!==null&&W1(t),e.blockedOn=n,!1;t.shift()}return!0}function A0(e,t,n){Ll(e)&&n.delete(t)}function w6(){jd=!1,sr!==null&&Ll(sr)&&(sr=null),lr!==null&&Ll(lr)&&(lr=null),ar!==null&&Ll(ar)&&(ar=null),Xo.forEach(A0),Jo.forEach(A0)}function uo(e,t){e.blockedOn===t&&(e.blockedOn=null,jd||(jd=!0,Ht.unstable_scheduleCallback(Ht.unstable_NormalPriority,w6)))}function es(e){function t(i){return uo(i,e)}if(0<_s.length){uo(_s[0],e);for(var n=1;n<_s.length;n++){var r=_s[n];r.blockedOn===e&&(r.blockedOn=null)}}for(sr!==null&&uo(sr,e),lr!==null&&uo(lr,e),ar!==null&&uo(ar,e),Xo.forEach(t),Jo.forEach(t),n=0;n<tr.length;n++)r=tr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tr.length&&(n=tr[0],n.blockedOn===null);)Ag(n),n.blockedOn===null&&tr.shift()}var Pi=Kn.ReactCurrentBatchConfig,Wl=!0;function b6(e,t,n,r){var i=be,s=Pi.transition;Pi.transition=null;try{be=1,K1(e,t,n,r)}finally{be=i,Pi.transition=s}}function k6(e,t,n,r){var i=be,s=Pi.transition;Pi.transition=null;try{be=4,K1(e,t,n,r)}finally{be=i,Pi.transition=s}}function K1(e,t,n,r){if(Wl){var i=Sd(e,t,n,r);if(i===null)$c(e,t,r,Kl,n),z0(e,r);else if(v6(i,e,t,n,r))r.stopPropagation();else if(z0(e,r),t&4&&-1<y6.indexOf(e)){for(;i!==null;){var s=ws(i);if(s!==null&&Tg(s),s=Sd(e,t,n,r),s===null&&$c(e,t,r,Kl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else $c(e,t,r,null,n)}}var Kl=null;function Sd(e,t,n,r){if(Kl=null,e=H1(r),e=Tr(e),e!==null)if(t=Qr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=kg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Kl=e,null}function _g(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(u6()){case U1:return 1;case $g:return 4;case Ul:case d6:return 16;case Eg:return 536870912;default:return 16}default:return 16}}var rr=null,Y1=null,yl=null;function Ng(){if(yl)return yl;var e,t=Y1,n=t.length,r,i="value"in rr?rr.value:rr.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[s-r];r++);return yl=i.slice(e,1<r?1-r:void 0)}function vl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ns(){return!0}function _0(){return!1}function Vt(e){function t(n,r,i,s,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ns:_0,this.isPropagationStopped=_0,this}return Ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ns)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ns)},persist:function(){},isPersistent:Ns}),t}var qi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},G1=Vt(qi),vs=Ue({},qi,{view:0,detail:0}),j6=Vt(vs),Lc,yc,po,Ea=Ue({},vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Z1,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==po&&(po&&e.type==="mousemove"?(Lc=e.screenX-po.screenX,yc=e.screenY-po.screenY):yc=Lc=0,po=e),Lc)},movementY:function(e){return"movementY"in e?e.movementY:yc}}),N0=Vt(Ea),S6=Ue({},Ea,{dataTransfer:0}),C6=Vt(S6),$6=Ue({},vs,{relatedTarget:0}),vc=Vt($6),E6=Ue({},qi,{animationName:0,elapsedTime:0,pseudoElement:0}),P6=Vt(E6),I6=Ue({},qi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),T6=Vt(I6),R6=Ue({},qi,{data:0}),O0=Vt(R6),M6={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z6={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},A6={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _6(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=A6[e])?!!t[e]:!1}function Z1(){return _6}var N6=Ue({},vs,{key:function(e){if(e.key){var t=M6[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?z6[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Z1,charCode:function(e){return e.type==="keypress"?vl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),O6=Vt(N6),D6=Ue({},Ea,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),D0=Vt(D6),B6=Ue({},vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Z1}),F6=Vt(B6),H6=Ue({},qi,{propertyName:0,elapsedTime:0,pseudoElement:0}),U6=Vt(H6),V6=Ue({},Ea,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),W6=Vt(V6),K6=[9,13,27,32],q1=Fn&&"CompositionEvent"in window,Ao=null;Fn&&"documentMode"in document&&(Ao=document.documentMode);var Y6=Fn&&"TextEvent"in window&&!Ao,Og=Fn&&(!q1||Ao&&8<Ao&&11>=Ao),B0=" ",F0=!1;function Dg(e,t){switch(e){case"keyup":return K6.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fi=!1;function G6(e,t){switch(e){case"compositionend":return Bg(t);case"keypress":return t.which!==32?null:(F0=!0,B0);case"textInput":return e=t.data,e===B0&&F0?null:e;default:return null}}function Z6(e,t){if(fi)return e==="compositionend"||!q1&&Dg(e,t)?(e=Ng(),yl=Y1=rr=null,fi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Og&&t.locale!=="ko"?null:t.data;default:return null}}var q6={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function H0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!q6[e.type]:t==="textarea"}function Fg(e,t,n,r){Lg(r),t=Yl(t,"onChange"),0<t.length&&(n=new G1("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _o=null,ts=null;function Q6(e){Xg(e,0)}function Pa(e){var t=mi(e);if(dg(t))return e}function X6(e,t){if(e==="change")return t}var Hg=!1;if(Fn){var wc;if(Fn){var bc="oninput"in document;if(!bc){var U0=document.createElement("div");U0.setAttribute("oninput","return;"),bc=typeof U0.oninput=="function"}wc=bc}else wc=!1;Hg=wc&&(!document.documentMode||9<document.documentMode)}function V0(){_o&&(_o.detachEvent("onpropertychange",Ug),ts=_o=null)}function Ug(e){if(e.propertyName==="value"&&Pa(ts)){var t=[];Fg(t,ts,e,H1(e)),bg(Q6,t)}}function J6(e,t,n){e==="focusin"?(V0(),_o=t,ts=n,_o.attachEvent("onpropertychange",Ug)):e==="focusout"&&V0()}function e7(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pa(ts)}function t7(e,t){if(e==="click")return Pa(t)}function n7(e,t){if(e==="input"||e==="change")return Pa(t)}function r7(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ln=typeof Object.is=="function"?Object.is:r7;function ns(e,t){if(Ln(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ld.call(t,i)||!Ln(e[i],t[i]))return!1}return!0}function W0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function K0(e,t){var n=W0(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=W0(n)}}function Vg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wg(){for(var e=window,t=Bl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bl(e.document)}return t}function Q1(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function i7(e){var t=Wg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vg(n.ownerDocument.documentElement,n)){if(r!==null&&Q1(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=K0(n,s);var l=K0(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var o7=Fn&&"documentMode"in document&&11>=document.documentMode,hi=null,Cd=null,No=null,$d=!1;function Y0(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$d||hi==null||hi!==Bl(r)||(r=hi,"selectionStart"in r&&Q1(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),No&&ns(No,r)||(No=r,r=Yl(Cd,"onSelect"),0<r.length&&(t=new G1("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=hi)))}function Os(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gi={animationend:Os("Animation","AnimationEnd"),animationiteration:Os("Animation","AnimationIteration"),animationstart:Os("Animation","AnimationStart"),transitionend:Os("Transition","TransitionEnd")},kc={},Kg={};Fn&&(Kg=document.createElement("div").style,"AnimationEvent"in window||(delete gi.animationend.animation,delete gi.animationiteration.animation,delete gi.animationstart.animation),"TransitionEvent"in window||delete gi.transitionend.transition);function Ia(e){if(kc[e])return kc[e];if(!gi[e])return e;var t=gi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kg)return kc[e]=t[n];return e}var Yg=Ia("animationend"),Gg=Ia("animationiteration"),Zg=Ia("animationstart"),qg=Ia("transitionend"),Qg=new Map,G0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(e,t){Qg.set(e,t),qr(t,[e])}for(var jc=0;jc<G0.length;jc++){var Sc=G0[jc],s7=Sc.toLowerCase(),l7=Sc[0].toUpperCase()+Sc.slice(1);Lr(s7,"on"+l7)}Lr(Yg,"onAnimationEnd");Lr(Gg,"onAnimationIteration");Lr(Zg,"onAnimationStart");Lr("dblclick","onDoubleClick");Lr("focusin","onFocus");Lr("focusout","onBlur");Lr(qg,"onTransitionEnd");Ai("onMouseEnter",["mouseout","mouseover"]);Ai("onMouseLeave",["mouseout","mouseover"]);Ai("onPointerEnter",["pointerout","pointerover"]);Ai("onPointerLeave",["pointerout","pointerover"]);qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a7=new Set("cancel close invalid load scroll toggle".split(" ").concat(Po));function Z0(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,s6(r,t,void 0,e),e.currentTarget=null}function Xg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==s&&i.isPropagationStopped())break e;Z0(i,a,u),s=c}else for(l=0;l<r.length;l++){if(a=r[l],c=a.instance,u=a.currentTarget,a=a.listener,c!==s&&i.isPropagationStopped())break e;Z0(i,a,u),s=c}}}if(Hl)throw e=bd,Hl=!1,bd=null,e}function Re(e,t){var n=t[Rd];n===void 0&&(n=t[Rd]=new Set);var r=e+"__bubble";n.has(r)||(Jg(t,e,2,!1),n.add(r))}function Cc(e,t,n){var r=0;t&&(r|=4),Jg(n,e,r,t)}var Ds="_reactListening"+Math.random().toString(36).slice(2);function rs(e){if(!e[Ds]){e[Ds]=!0,sg.forEach(function(n){n!=="selectionchange"&&(a7.has(n)||Cc(n,!1,e),Cc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ds]||(t[Ds]=!0,Cc("selectionchange",!1,t))}}function Jg(e,t,n,r){switch(_g(t)){case 1:var i=b6;break;case 4:i=k6;break;default:i=K1}n=i.bind(null,t,n,e),i=void 0,!wd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function $c(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Tr(a),l===null)return;if(c=l.tag,c===5||c===6){r=s=l;continue e}a=a.parentNode}}r=r.return}bg(function(){var u=s,p=H1(n),f=[];e:{var h=Qg.get(e);if(h!==void 0){var g=G1,w=e;switch(e){case"keypress":if(vl(n)===0)break e;case"keydown":case"keyup":g=O6;break;case"focusin":w="focus",g=vc;break;case"focusout":w="blur",g=vc;break;case"beforeblur":case"afterblur":g=vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=N0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=C6;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=F6;break;case Yg:case Gg:case Zg:g=P6;break;case qg:g=U6;break;case"scroll":g=j6;break;case"wheel":g=W6;break;case"copy":case"cut":case"paste":g=T6;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=D0}var v=(t&4)!==0,C=!v&&e==="scroll",x=v?h!==null?h+"Capture":null:h;v=[];for(var m=u,L;m!==null;){L=m;var b=L.stateNode;if(L.tag===5&&b!==null&&(L=b,x!==null&&(b=Qo(m,x),b!=null&&v.push(is(m,b,L)))),C)break;m=m.return}0<v.length&&(h=new g(h,w,null,n,p),f.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==yd&&(w=n.relatedTarget||n.fromElement)&&(Tr(w)||w[Hn]))break e;if((g||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=u,w=w?Tr(w):null,w!==null&&(C=Qr(w),w!==C||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=u),g!==w)){if(v=N0,b="onMouseLeave",x="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(v=D0,b="onPointerLeave",x="onPointerEnter",m="pointer"),C=g==null?h:mi(g),L=w==null?h:mi(w),h=new v(b,m+"leave",g,n,p),h.target=C,h.relatedTarget=L,b=null,Tr(p)===u&&(v=new v(x,m+"enter",w,n,p),v.target=L,v.relatedTarget=C,b=v),C=b,g&&w)t:{for(v=g,x=w,m=0,L=v;L;L=ni(L))m++;for(L=0,b=x;b;b=ni(b))L++;for(;0<m-L;)v=ni(v),m--;for(;0<L-m;)x=ni(x),L--;for(;m--;){if(v===x||x!==null&&v===x.alternate)break t;v=ni(v),x=ni(x)}v=null}else v=null;g!==null&&q0(f,h,g,v,!1),w!==null&&C!==null&&q0(f,C,w,v,!0)}}e:{if(h=u?mi(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var $=X6;else if(H0(h))if(Hg)$=n7;else{$=e7;var k=J6}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&($=t7);if($&&($=$(e,u))){Fg(f,$,n,p);break e}k&&k(e,h,u),e==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&hd(h,"number",h.value)}switch(k=u?mi(u):window,e){case"focusin":(H0(k)||k.contentEditable==="true")&&(hi=k,Cd=u,No=null);break;case"focusout":No=Cd=hi=null;break;case"mousedown":$d=!0;break;case"contextmenu":case"mouseup":case"dragend":$d=!1,Y0(f,n,p);break;case"selectionchange":if(o7)break;case"keydown":case"keyup":Y0(f,n,p)}var S;if(q1)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else fi?Dg(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(Og&&n.locale!=="ko"&&(fi||M!=="onCompositionStart"?M==="onCompositionEnd"&&fi&&(S=Ng()):(rr=p,Y1="value"in rr?rr.value:rr.textContent,fi=!0)),k=Yl(u,M),0<k.length&&(M=new O0(M,e,null,n,p),f.push({event:M,listeners:k}),S?M.data=S:(S=Bg(n),S!==null&&(M.data=S)))),(S=Y6?G6(e,n):Z6(e,n))&&(u=Yl(u,"onBeforeInput"),0<u.length&&(p=new O0("onBeforeInput","beforeinput",null,n,p),f.push({event:p,listeners:u}),p.data=S))}Xg(f,t)})}function is(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Qo(e,n),s!=null&&r.unshift(is(e,s,i)),s=Qo(e,t),s!=null&&r.push(is(e,s,i))),e=e.return}return r}function ni(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function q0(e,t,n,r,i){for(var s=t._reactName,l=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,i?(c=Qo(n,s),c!=null&&l.unshift(is(n,c,a))):i||(c=Qo(n,s),c!=null&&l.push(is(n,c,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var c7=/\r\n?/g,u7=/\u0000|\uFFFD/g;function Q0(e){return(typeof e=="string"?e:""+e).replace(c7,`
`).replace(u7,"")}function Bs(e,t,n){if(t=Q0(t),Q0(e)!==t&&n)throw Error(V(425))}function Gl(){}var Ed=null,Pd=null;function Id(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Td=typeof setTimeout=="function"?setTimeout:void 0,d7=typeof clearTimeout=="function"?clearTimeout:void 0,X0=typeof Promise=="function"?Promise:void 0,p7=typeof queueMicrotask=="function"?queueMicrotask:typeof X0<"u"?function(e){return X0.resolve(null).then(e).catch(f7)}:Td;function f7(e){setTimeout(function(){throw e})}function Ec(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),es(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);es(t)}function cr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function J0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Qi=Math.random().toString(36).slice(2),Sn="__reactFiber$"+Qi,os="__reactProps$"+Qi,Hn="__reactContainer$"+Qi,Rd="__reactEvents$"+Qi,h7="__reactListeners$"+Qi,g7="__reactHandles$"+Qi;function Tr(e){var t=e[Sn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Hn]||n[Sn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=J0(e);e!==null;){if(n=e[Sn])return n;e=J0(e)}return t}e=n,n=e.parentNode}return null}function ws(e){return e=e[Sn]||e[Hn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(V(33))}function Ta(e){return e[os]||null}var Md=[],xi=-1;function yr(e){return{current:e}}function Ae(e){0>xi||(e.current=Md[xi],Md[xi]=null,xi--)}function Ee(e,t){xi++,Md[xi]=e.current,e.current=t}var xr={},Lt=yr(xr),It=yr(!1),Br=xr;function _i(e,t){var n=e.type.contextTypes;if(!n)return xr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Tt(e){return e=e.childContextTypes,e!=null}function Zl(){Ae(It),Ae(Lt)}function ef(e,t,n){if(Lt.current!==xr)throw Error(V(168));Ee(Lt,t),Ee(It,n)}function em(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(V(108,J5(e)||"Unknown",i));return Ue({},n,r)}function ql(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xr,Br=Lt.current,Ee(Lt,e),Ee(It,It.current),!0}function tf(e,t,n){var r=e.stateNode;if(!r)throw Error(V(169));n?(e=em(e,t,Br),r.__reactInternalMemoizedMergedChildContext=e,Ae(It),Ae(Lt),Ee(Lt,e)):Ae(It),Ee(It,n)}var _n=null,Ra=!1,Pc=!1;function tm(e){_n===null?_n=[e]:_n.push(e)}function m7(e){Ra=!0,tm(e)}function vr(){if(!Pc&&_n!==null){Pc=!0;var e=0,t=be;try{var n=_n;for(be=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_n=null,Ra=!1}catch(i){throw _n!==null&&(_n=_n.slice(e+1)),Cg(U1,vr),i}finally{be=t,Pc=!1}}return null}var Li=[],yi=0,Ql=null,Xl=0,Zt=[],qt=0,Fr=null,Nn=1,On="";function $r(e,t){Li[yi++]=Xl,Li[yi++]=Ql,Ql=e,Xl=t}function nm(e,t,n){Zt[qt++]=Nn,Zt[qt++]=On,Zt[qt++]=Fr,Fr=e;var r=Nn;e=On;var i=32-hn(r)-1;r&=~(1<<i),n+=1;var s=32-hn(t)+i;if(30<s){var l=i-i%5;s=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Nn=1<<32-hn(t)+i|n<<i|r,On=s+e}else Nn=1<<s|n<<i|r,On=e}function X1(e){e.return!==null&&($r(e,1),nm(e,1,0))}function J1(e){for(;e===Ql;)Ql=Li[--yi],Li[yi]=null,Xl=Li[--yi],Li[yi]=null;for(;e===Fr;)Fr=Zt[--qt],Zt[qt]=null,On=Zt[--qt],Zt[qt]=null,Nn=Zt[--qt],Zt[qt]=null}var Ft=null,Dt=null,Ne=!1,fn=null;function rm(e,t){var n=Jt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function nf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ft=e,Dt=cr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ft=e,Dt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Fr!==null?{id:Nn,overflow:On}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Jt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ft=e,Dt=null,!0):!1;default:return!1}}function zd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ad(e){if(Ne){var t=Dt;if(t){var n=t;if(!nf(e,t)){if(zd(e))throw Error(V(418));t=cr(n.nextSibling);var r=Ft;t&&nf(e,t)?rm(r,n):(e.flags=e.flags&-4097|2,Ne=!1,Ft=e)}}else{if(zd(e))throw Error(V(418));e.flags=e.flags&-4097|2,Ne=!1,Ft=e}}}function rf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ft=e}function Fs(e){if(e!==Ft)return!1;if(!Ne)return rf(e),Ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Id(e.type,e.memoizedProps)),t&&(t=Dt)){if(zd(e))throw im(),Error(V(418));for(;t;)rm(e,t),t=cr(t.nextSibling)}if(rf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(V(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Dt=cr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Dt=null}}else Dt=Ft?cr(e.stateNode.nextSibling):null;return!0}function im(){for(var e=Dt;e;)e=cr(e.nextSibling)}function Ni(){Dt=Ft=null,Ne=!1}function ep(e){fn===null?fn=[e]:fn.push(e)}var x7=Kn.ReactCurrentBatchConfig;function fo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(l){var a=i.refs;l===null?delete a[s]:a[s]=l},t._stringRef=s,t)}if(typeof e!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,e))}return e}function Hs(e,t){throw e=Object.prototype.toString.call(t),Error(V(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function of(e){var t=e._init;return t(e._payload)}function om(e){function t(x,m){if(e){var L=x.deletions;L===null?(x.deletions=[m],x.flags|=16):L.push(m)}}function n(x,m){if(!e)return null;for(;m!==null;)t(x,m),m=m.sibling;return null}function r(x,m){for(x=new Map;m!==null;)m.key!==null?x.set(m.key,m):x.set(m.index,m),m=m.sibling;return x}function i(x,m){return x=fr(x,m),x.index=0,x.sibling=null,x}function s(x,m,L){return x.index=L,e?(L=x.alternate,L!==null?(L=L.index,L<m?(x.flags|=2,m):L):(x.flags|=2,m)):(x.flags|=1048576,m)}function l(x){return e&&x.alternate===null&&(x.flags|=2),x}function a(x,m,L,b){return m===null||m.tag!==6?(m=_c(L,x.mode,b),m.return=x,m):(m=i(m,L),m.return=x,m)}function c(x,m,L,b){var $=L.type;return $===pi?p(x,m,L.props.children,b,L.key):m!==null&&(m.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Jn&&of($)===m.type)?(b=i(m,L.props),b.ref=fo(x,m,L),b.return=x,b):(b=$l(L.type,L.key,L.props,null,x.mode,b),b.ref=fo(x,m,L),b.return=x,b)}function u(x,m,L,b){return m===null||m.tag!==4||m.stateNode.containerInfo!==L.containerInfo||m.stateNode.implementation!==L.implementation?(m=Nc(L,x.mode,b),m.return=x,m):(m=i(m,L.children||[]),m.return=x,m)}function p(x,m,L,b,$){return m===null||m.tag!==7?(m=Nr(L,x.mode,b,$),m.return=x,m):(m=i(m,L),m.return=x,m)}function f(x,m,L){if(typeof m=="string"&&m!==""||typeof m=="number")return m=_c(""+m,x.mode,L),m.return=x,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ts:return L=$l(m.type,m.key,m.props,null,x.mode,L),L.ref=fo(x,null,m),L.return=x,L;case di:return m=Nc(m,x.mode,L),m.return=x,m;case Jn:var b=m._init;return f(x,b(m._payload),L)}if($o(m)||lo(m))return m=Nr(m,x.mode,L,null),m.return=x,m;Hs(x,m)}return null}function h(x,m,L,b){var $=m!==null?m.key:null;if(typeof L=="string"&&L!==""||typeof L=="number")return $!==null?null:a(x,m,""+L,b);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Ts:return L.key===$?c(x,m,L,b):null;case di:return L.key===$?u(x,m,L,b):null;case Jn:return $=L._init,h(x,m,$(L._payload),b)}if($o(L)||lo(L))return $!==null?null:p(x,m,L,b,null);Hs(x,L)}return null}function g(x,m,L,b,$){if(typeof b=="string"&&b!==""||typeof b=="number")return x=x.get(L)||null,a(m,x,""+b,$);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ts:return x=x.get(b.key===null?L:b.key)||null,c(m,x,b,$);case di:return x=x.get(b.key===null?L:b.key)||null,u(m,x,b,$);case Jn:var k=b._init;return g(x,m,L,k(b._payload),$)}if($o(b)||lo(b))return x=x.get(L)||null,p(m,x,b,$,null);Hs(m,b)}return null}function w(x,m,L,b){for(var $=null,k=null,S=m,M=m=0,R=null;S!==null&&M<L.length;M++){S.index>M?(R=S,S=null):R=S.sibling;var I=h(x,S,L[M],b);if(I===null){S===null&&(S=R);break}e&&S&&I.alternate===null&&t(x,S),m=s(I,m,M),k===null?$=I:k.sibling=I,k=I,S=R}if(M===L.length)return n(x,S),Ne&&$r(x,M),$;if(S===null){for(;M<L.length;M++)S=f(x,L[M],b),S!==null&&(m=s(S,m,M),k===null?$=S:k.sibling=S,k=S);return Ne&&$r(x,M),$}for(S=r(x,S);M<L.length;M++)R=g(S,x,M,L[M],b),R!==null&&(e&&R.alternate!==null&&S.delete(R.key===null?M:R.key),m=s(R,m,M),k===null?$=R:k.sibling=R,k=R);return e&&S.forEach(function(T){return t(x,T)}),Ne&&$r(x,M),$}function v(x,m,L,b){var $=lo(L);if(typeof $!="function")throw Error(V(150));if(L=$.call(L),L==null)throw Error(V(151));for(var k=$=null,S=m,M=m=0,R=null,I=L.next();S!==null&&!I.done;M++,I=L.next()){S.index>M?(R=S,S=null):R=S.sibling;var T=h(x,S,I.value,b);if(T===null){S===null&&(S=R);break}e&&S&&T.alternate===null&&t(x,S),m=s(T,m,M),k===null?$=T:k.sibling=T,k=T,S=R}if(I.done)return n(x,S),Ne&&$r(x,M),$;if(S===null){for(;!I.done;M++,I=L.next())I=f(x,I.value,b),I!==null&&(m=s(I,m,M),k===null?$=I:k.sibling=I,k=I);return Ne&&$r(x,M),$}for(S=r(x,S);!I.done;M++,I=L.next())I=g(S,x,M,I.value,b),I!==null&&(e&&I.alternate!==null&&S.delete(I.key===null?M:I.key),m=s(I,m,M),k===null?$=I:k.sibling=I,k=I);return e&&S.forEach(function(E){return t(x,E)}),Ne&&$r(x,M),$}function C(x,m,L,b){if(typeof L=="object"&&L!==null&&L.type===pi&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case Ts:e:{for(var $=L.key,k=m;k!==null;){if(k.key===$){if($=L.type,$===pi){if(k.tag===7){n(x,k.sibling),m=i(k,L.props.children),m.return=x,x=m;break e}}else if(k.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Jn&&of($)===k.type){n(x,k.sibling),m=i(k,L.props),m.ref=fo(x,k,L),m.return=x,x=m;break e}n(x,k);break}else t(x,k);k=k.sibling}L.type===pi?(m=Nr(L.props.children,x.mode,b,L.key),m.return=x,x=m):(b=$l(L.type,L.key,L.props,null,x.mode,b),b.ref=fo(x,m,L),b.return=x,x=b)}return l(x);case di:e:{for(k=L.key;m!==null;){if(m.key===k)if(m.tag===4&&m.stateNode.containerInfo===L.containerInfo&&m.stateNode.implementation===L.implementation){n(x,m.sibling),m=i(m,L.children||[]),m.return=x,x=m;break e}else{n(x,m);break}else t(x,m);m=m.sibling}m=Nc(L,x.mode,b),m.return=x,x=m}return l(x);case Jn:return k=L._init,C(x,m,k(L._payload),b)}if($o(L))return w(x,m,L,b);if(lo(L))return v(x,m,L,b);Hs(x,L)}return typeof L=="string"&&L!==""||typeof L=="number"?(L=""+L,m!==null&&m.tag===6?(n(x,m.sibling),m=i(m,L),m.return=x,x=m):(n(x,m),m=_c(L,x.mode,b),m.return=x,x=m),l(x)):n(x,m)}return C}var Oi=om(!0),sm=om(!1),Jl=yr(null),ea=null,vi=null,tp=null;function np(){tp=vi=ea=null}function rp(e){var t=Jl.current;Ae(Jl),e._currentValue=t}function _d(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ii(e,t){ea=e,tp=vi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Pt=!0),e.firstContext=null)}function nn(e){var t=e._currentValue;if(tp!==e)if(e={context:e,memoizedValue:t,next:null},vi===null){if(ea===null)throw Error(V(308));vi=e,ea.dependencies={lanes:0,firstContext:e}}else vi=vi.next=e;return t}var Rr=null;function ip(e){Rr===null?Rr=[e]:Rr.push(e)}function lm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ip(t)):(n.next=i.next,i.next=n),t.interleaved=n,Un(e,r)}function Un(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var er=!1;function op(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function am(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ur(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ge&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Un(e,n)}return i=r.interleaved,i===null?(t.next=t,ip(r)):(t.next=i.next,i.next=t),r.interleaved=t,Un(e,n)}function wl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,V1(e,n)}}function sf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ta(e,t,n,r){var i=e.updateQueue;er=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var c=a,u=c.next;c.next=null,l===null?s=u:l.next=u,l=c;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==l&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=c))}if(s!==null){var f=i.baseState;l=0,p=u=c=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){p!==null&&(p=p.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,v=a;switch(h=t,g=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){f=w.call(g,f,h);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,h=typeof w=="function"?w.call(g,f,h):w,h==null)break e;f=Ue({},f,h);break e;case 2:er=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=g,c=f):p=p.next=g,l|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(p===null&&(c=f),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Ur|=l,e.lanes=l,e.memoizedState=f}}function lf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var bs={},En=yr(bs),ss=yr(bs),ls=yr(bs);function Mr(e){if(e===bs)throw Error(V(174));return e}function sp(e,t){switch(Ee(ls,t),Ee(ss,e),Ee(En,bs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:md(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=md(t,e)}Ae(En),Ee(En,t)}function Di(){Ae(En),Ae(ss),Ae(ls)}function cm(e){Mr(ls.current);var t=Mr(En.current),n=md(t,e.type);t!==n&&(Ee(ss,e),Ee(En,n))}function lp(e){ss.current===e&&(Ae(En),Ae(ss))}var Fe=yr(0);function na(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ic=[];function ap(){for(var e=0;e<Ic.length;e++)Ic[e]._workInProgressVersionPrimary=null;Ic.length=0}var bl=Kn.ReactCurrentDispatcher,Tc=Kn.ReactCurrentBatchConfig,Hr=0,He=null,Je=null,ot=null,ra=!1,Oo=!1,as=0,L7=0;function gt(){throw Error(V(321))}function cp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ln(e[n],t[n]))return!1;return!0}function up(e,t,n,r,i,s){if(Hr=s,He=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,bl.current=e===null||e.memoizedState===null?b7:k7,e=n(r,i),Oo){s=0;do{if(Oo=!1,as=0,25<=s)throw Error(V(301));s+=1,ot=Je=null,t.updateQueue=null,bl.current=j7,e=n(r,i)}while(Oo)}if(bl.current=ia,t=Je!==null&&Je.next!==null,Hr=0,ot=Je=He=null,ra=!1,t)throw Error(V(300));return e}function dp(){var e=as!==0;return as=0,e}function kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ot===null?He.memoizedState=ot=e:ot=ot.next=e,ot}function rn(){if(Je===null){var e=He.alternate;e=e!==null?e.memoizedState:null}else e=Je.next;var t=ot===null?He.memoizedState:ot.next;if(t!==null)ot=t,Je=e;else{if(e===null)throw Error(V(310));Je=e,e={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},ot===null?He.memoizedState=ot=e:ot=ot.next=e}return ot}function cs(e,t){return typeof t=="function"?t(e):t}function Rc(e){var t=rn(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=Je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=l=null,c=null,u=s;do{var p=u.lane;if((Hr&p)===p)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=f,l=r):c=c.next=f,He.lanes|=p,Ur|=p}u=u.next}while(u!==null&&u!==s);c===null?l=r:c.next=a,Ln(r,t.memoizedState)||(Pt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,He.lanes|=s,Ur|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Mc(e){var t=rn(),n=t.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do s=e(s,l.action),l=l.next;while(l!==i);Ln(s,t.memoizedState)||(Pt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function um(){}function dm(e,t){var n=He,r=rn(),i=t(),s=!Ln(r.memoizedState,i);if(s&&(r.memoizedState=i,Pt=!0),r=r.queue,pp(hm.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||ot!==null&&ot.memoizedState.tag&1){if(n.flags|=2048,us(9,fm.bind(null,n,r,i,t),void 0,null),lt===null)throw Error(V(349));Hr&30||pm(n,t,i)}return i}function pm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=He.updateQueue,t===null?(t={lastEffect:null,stores:null},He.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function fm(e,t,n,r){t.value=n,t.getSnapshot=r,gm(t)&&mm(e)}function hm(e,t,n){return n(function(){gm(t)&&mm(e)})}function gm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ln(e,n)}catch{return!0}}function mm(e){var t=Un(e,1);t!==null&&gn(t,e,1,-1)}function af(e){var t=kn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cs,lastRenderedState:e},t.queue=e,e=e.dispatch=w7.bind(null,He,e),[t.memoizedState,e]}function us(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=He.updateQueue,t===null?(t={lastEffect:null,stores:null},He.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function xm(){return rn().memoizedState}function kl(e,t,n,r){var i=kn();He.flags|=e,i.memoizedState=us(1|t,n,void 0,r===void 0?null:r)}function Ma(e,t,n,r){var i=rn();r=r===void 0?null:r;var s=void 0;if(Je!==null){var l=Je.memoizedState;if(s=l.destroy,r!==null&&cp(r,l.deps)){i.memoizedState=us(t,n,s,r);return}}He.flags|=e,i.memoizedState=us(1|t,n,s,r)}function cf(e,t){return kl(8390656,8,e,t)}function pp(e,t){return Ma(2048,8,e,t)}function Lm(e,t){return Ma(4,2,e,t)}function ym(e,t){return Ma(4,4,e,t)}function vm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wm(e,t,n){return n=n!=null?n.concat([e]):null,Ma(4,4,vm.bind(null,t,e),n)}function fp(){}function bm(e,t){var n=rn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cp(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function km(e,t){var n=rn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cp(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function jm(e,t,n){return Hr&21?(Ln(n,t)||(n=Pg(),He.lanes|=n,Ur|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Pt=!0),e.memoizedState=n)}function y7(e,t){var n=be;be=n!==0&&4>n?n:4,e(!0);var r=Tc.transition;Tc.transition={};try{e(!1),t()}finally{be=n,Tc.transition=r}}function Sm(){return rn().memoizedState}function v7(e,t,n){var r=pr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cm(e))$m(t,n);else if(n=lm(e,t,n,r),n!==null){var i=kt();gn(n,e,r,i),Em(n,t,r)}}function w7(e,t,n){var r=pr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cm(e))$m(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var l=t.lastRenderedState,a=s(l,n);if(i.hasEagerState=!0,i.eagerState=a,Ln(a,l)){var c=t.interleaved;c===null?(i.next=i,ip(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=lm(e,t,i,r),n!==null&&(i=kt(),gn(n,e,r,i),Em(n,t,r))}}function Cm(e){var t=e.alternate;return e===He||t!==null&&t===He}function $m(e,t){Oo=ra=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Em(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,V1(e,n)}}var ia={readContext:nn,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useInsertionEffect:gt,useLayoutEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useMutableSource:gt,useSyncExternalStore:gt,useId:gt,unstable_isNewReconciler:!1},b7={readContext:nn,useCallback:function(e,t){return kn().memoizedState=[e,t===void 0?null:t],e},useContext:nn,useEffect:cf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,kl(4194308,4,vm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return kl(4194308,4,e,t)},useInsertionEffect:function(e,t){return kl(4,2,e,t)},useMemo:function(e,t){var n=kn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=kn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=v7.bind(null,He,e),[r.memoizedState,e]},useRef:function(e){var t=kn();return e={current:e},t.memoizedState=e},useState:af,useDebugValue:fp,useDeferredValue:function(e){return kn().memoizedState=e},useTransition:function(){var e=af(!1),t=e[0];return e=y7.bind(null,e[1]),kn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=He,i=kn();if(Ne){if(n===void 0)throw Error(V(407));n=n()}else{if(n=t(),lt===null)throw Error(V(349));Hr&30||pm(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,cf(hm.bind(null,r,s,e),[e]),r.flags|=2048,us(9,fm.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=kn(),t=lt.identifierPrefix;if(Ne){var n=On,r=Nn;n=(r&~(1<<32-hn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=as++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=L7++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},k7={readContext:nn,useCallback:bm,useContext:nn,useEffect:pp,useImperativeHandle:wm,useInsertionEffect:Lm,useLayoutEffect:ym,useMemo:km,useReducer:Rc,useRef:xm,useState:function(){return Rc(cs)},useDebugValue:fp,useDeferredValue:function(e){var t=rn();return jm(t,Je.memoizedState,e)},useTransition:function(){var e=Rc(cs)[0],t=rn().memoizedState;return[e,t]},useMutableSource:um,useSyncExternalStore:dm,useId:Sm,unstable_isNewReconciler:!1},j7={readContext:nn,useCallback:bm,useContext:nn,useEffect:pp,useImperativeHandle:wm,useInsertionEffect:Lm,useLayoutEffect:ym,useMemo:km,useReducer:Mc,useRef:xm,useState:function(){return Mc(cs)},useDebugValue:fp,useDeferredValue:function(e){var t=rn();return Je===null?t.memoizedState=e:jm(t,Je.memoizedState,e)},useTransition:function(){var e=Mc(cs)[0],t=rn().memoizedState;return[e,t]},useMutableSource:um,useSyncExternalStore:dm,useId:Sm,unstable_isNewReconciler:!1};function un(e,t){if(e&&e.defaultProps){t=Ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Nd(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var za={isMounted:function(e){return(e=e._reactInternals)?Qr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=kt(),i=pr(e),s=Bn(r,i);s.payload=t,n!=null&&(s.callback=n),t=ur(e,s,i),t!==null&&(gn(t,e,i,r),wl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=kt(),i=pr(e),s=Bn(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=ur(e,s,i),t!==null&&(gn(t,e,i,r),wl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=kt(),r=pr(e),i=Bn(n,r);i.tag=2,t!=null&&(i.callback=t),t=ur(e,i,r),t!==null&&(gn(t,e,r,n),wl(t,e,r))}};function uf(e,t,n,r,i,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,l):t.prototype&&t.prototype.isPureReactComponent?!ns(n,r)||!ns(i,s):!0}function Pm(e,t,n){var r=!1,i=xr,s=t.contextType;return typeof s=="object"&&s!==null?s=nn(s):(i=Tt(t)?Br:Lt.current,r=t.contextTypes,s=(r=r!=null)?_i(e,i):xr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=za,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function df(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&za.enqueueReplaceState(t,t.state,null)}function Od(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},op(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=nn(s):(s=Tt(t)?Br:Lt.current,i.context=_i(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Nd(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&za.enqueueReplaceState(i,i.state,null),ta(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Bi(e,t){try{var n="",r=t;do n+=X5(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function zc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Dd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var S7=typeof WeakMap=="function"?WeakMap:Map;function Im(e,t,n){n=Bn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){sa||(sa=!0,Zd=r),Dd(e,t)},n}function Tm(e,t,n){n=Bn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Dd(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Dd(e,t),typeof r!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function pf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new S7;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=D7.bind(null,e,t,n),t.then(e,e))}function ff(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function hf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bn(-1,1),t.tag=2,ur(n,t,1))),n.lanes|=1),e)}var C7=Kn.ReactCurrentOwner,Pt=!1;function bt(e,t,n,r){t.child=e===null?sm(t,null,n,r):Oi(t,e.child,n,r)}function gf(e,t,n,r,i){n=n.render;var s=t.ref;return Ii(t,i),r=up(e,t,n,r,s,i),n=dp(),e!==null&&!Pt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Vn(e,t,i)):(Ne&&n&&X1(t),t.flags|=1,bt(e,t,r,i),t.child)}function mf(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!wp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Rm(e,t,s,r,i)):(e=$l(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:ns,n(l,r)&&e.ref===t.ref)return Vn(e,t,i)}return t.flags|=1,e=fr(s,r),e.ref=t.ref,e.return=t,t.child=e}function Rm(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(ns(s,r)&&e.ref===t.ref)if(Pt=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Pt=!0);else return t.lanes=e.lanes,Vn(e,t,i)}return Bd(e,t,n,r,i)}function Mm(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(bi,Ot),Ot|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ee(bi,Ot),Ot|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ee(bi,Ot),Ot|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Ee(bi,Ot),Ot|=r;return bt(e,t,i,n),t.child}function zm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Bd(e,t,n,r,i){var s=Tt(n)?Br:Lt.current;return s=_i(t,s),Ii(t,i),n=up(e,t,n,r,s,i),r=dp(),e!==null&&!Pt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Vn(e,t,i)):(Ne&&r&&X1(t),t.flags|=1,bt(e,t,n,i),t.child)}function xf(e,t,n,r,i){if(Tt(n)){var s=!0;ql(t)}else s=!1;if(Ii(t,i),t.stateNode===null)jl(e,t),Pm(t,n,r),Od(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var c=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=nn(u):(u=Tt(n)?Br:Lt.current,u=_i(t,u));var p=n.getDerivedStateFromProps,f=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||c!==u)&&df(t,l,r,u),er=!1;var h=t.memoizedState;l.state=h,ta(t,r,l,i),c=t.memoizedState,a!==r||h!==c||It.current||er?(typeof p=="function"&&(Nd(t,n,p,r),c=t.memoizedState),(a=er||uf(t,n,a,r,h,c,u))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,am(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:un(t.type,a),l.props=u,f=t.pendingProps,h=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=nn(c):(c=Tt(n)?Br:Lt.current,c=_i(t,c));var g=n.getDerivedStateFromProps;(p=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==f||h!==c)&&df(t,l,r,c),er=!1,h=t.memoizedState,l.state=h,ta(t,r,l,i);var w=t.memoizedState;a!==f||h!==w||It.current||er?(typeof g=="function"&&(Nd(t,n,g,r),w=t.memoizedState),(u=er||uf(t,n,u,r,h,w,c)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=c,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Fd(e,t,n,r,s,i)}function Fd(e,t,n,r,i,s){zm(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&tf(t,n,!1),Vn(e,t,s);r=t.stateNode,C7.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Oi(t,e.child,null,s),t.child=Oi(t,null,a,s)):bt(e,t,a,s),t.memoizedState=r.state,i&&tf(t,n,!0),t.child}function Am(e){var t=e.stateNode;t.pendingContext?ef(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ef(e,t.context,!1),sp(e,t.containerInfo)}function Lf(e,t,n,r,i){return Ni(),ep(i),t.flags|=256,bt(e,t,n,r),t.child}var Hd={dehydrated:null,treeContext:null,retryLane:0};function Ud(e){return{baseLanes:e,cachePool:null,transitions:null}}function _m(e,t,n){var r=t.pendingProps,i=Fe.current,s=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ee(Fe,i&1),e===null)return Ad(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,s?(r=t.mode,s=t.child,l={mode:"hidden",children:l},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=Na(l,r,0,null),e=Nr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ud(n),t.memoizedState=Hd,e):hp(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return $7(e,t,l,r,a,i,n);if(s){s=r.fallback,l=t.mode,i=e.child,a=i.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=fr(i,c),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=fr(a,s):(s=Nr(s,l,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,l=e.child.memoizedState,l=l===null?Ud(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=Hd,r}return s=e.child,e=s.sibling,r=fr(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function hp(e,t){return t=Na({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Us(e,t,n,r){return r!==null&&ep(r),Oi(t,e.child,null,n),e=hp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $7(e,t,n,r,i,s,l){if(n)return t.flags&256?(t.flags&=-257,r=zc(Error(V(422))),Us(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Na({mode:"visible",children:r.children},i,0,null),s=Nr(s,i,l,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Oi(t,e.child,null,l),t.child.memoizedState=Ud(l),t.memoizedState=Hd,s);if(!(t.mode&1))return Us(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(V(419)),r=zc(s,r,void 0),Us(e,t,l,r)}if(a=(l&e.childLanes)!==0,Pt||a){if(r=lt,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Un(e,i),gn(r,e,i,-1))}return vp(),r=zc(Error(V(421))),Us(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=B7.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Dt=cr(i.nextSibling),Ft=t,Ne=!0,fn=null,e!==null&&(Zt[qt++]=Nn,Zt[qt++]=On,Zt[qt++]=Fr,Nn=e.id,On=e.overflow,Fr=t),t=hp(t,r.children),t.flags|=4096,t)}function yf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),_d(e.return,t,n)}function Ac(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Nm(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(bt(e,t,r.children,n),r=Fe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yf(e,n,t);else if(e.tag===19)yf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ee(Fe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&na(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ac(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&na(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ac(t,!0,n,null,s);break;case"together":Ac(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function jl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ur|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(V(153));if(t.child!==null){for(e=t.child,n=fr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function E7(e,t,n){switch(t.tag){case 3:Am(t),Ni();break;case 5:cm(t);break;case 1:Tt(t.type)&&ql(t);break;case 4:sp(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ee(Jl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ee(Fe,Fe.current&1),t.flags|=128,null):n&t.child.childLanes?_m(e,t,n):(Ee(Fe,Fe.current&1),e=Vn(e,t,n),e!==null?e.sibling:null);Ee(Fe,Fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Nm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ee(Fe,Fe.current),r)break;return null;case 22:case 23:return t.lanes=0,Mm(e,t,n)}return Vn(e,t,n)}var Om,Vd,Dm,Bm;Om=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vd=function(){};Dm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Mr(En.current);var s=null;switch(n){case"input":i=pd(e,i),r=pd(e,r),s=[];break;case"select":i=Ue({},i,{value:void 0}),r=Ue({},r,{value:void 0}),s=[];break;case"textarea":i=gd(e,i),r=gd(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Gl)}xd(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Zo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&a[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Zo.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Re("scroll",e),s||a===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Bm=function(e,t,n,r){n!==r&&(t.flags|=4)};function ho(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function mt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function P7(e,t,n){var r=t.pendingProps;switch(J1(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(t),null;case 1:return Tt(t.type)&&Zl(),mt(t),null;case 3:return r=t.stateNode,Di(),Ae(It),Ae(Lt),ap(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Fs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,fn!==null&&(Xd(fn),fn=null))),Vd(e,t),mt(t),null;case 5:lp(t);var i=Mr(ls.current);if(n=t.type,e!==null&&t.stateNode!=null)Dm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(V(166));return mt(t),null}if(e=Mr(En.current),Fs(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Sn]=t,r[os]=s,e=(t.mode&1)!==0,n){case"dialog":Re("cancel",r),Re("close",r);break;case"iframe":case"object":case"embed":Re("load",r);break;case"video":case"audio":for(i=0;i<Po.length;i++)Re(Po[i],r);break;case"source":Re("error",r);break;case"img":case"image":case"link":Re("error",r),Re("load",r);break;case"details":Re("toggle",r);break;case"input":$0(r,s),Re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Re("invalid",r);break;case"textarea":P0(r,s),Re("invalid",r)}xd(n,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Bs(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Bs(r.textContent,a,e),i=["children",""+a]):Zo.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Re("scroll",r)}switch(n){case"input":Rs(r),E0(r,s,!0);break;case"textarea":Rs(r),I0(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Gl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Sn]=t,e[os]=r,Om(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ld(n,r),n){case"dialog":Re("cancel",e),Re("close",e),i=r;break;case"iframe":case"object":case"embed":Re("load",e),i=r;break;case"video":case"audio":for(i=0;i<Po.length;i++)Re(Po[i],e);i=r;break;case"source":Re("error",e),i=r;break;case"img":case"image":case"link":Re("error",e),Re("load",e),i=r;break;case"details":Re("toggle",e),i=r;break;case"input":$0(e,r),i=pd(e,r),Re("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ue({},r,{value:void 0}),Re("invalid",e);break;case"textarea":P0(e,r),i=gd(e,r),Re("invalid",e);break;default:i=r}xd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var c=a[s];s==="style"?xg(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&gg(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&qo(e,c):typeof c=="number"&&qo(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Zo.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Re("scroll",e):c!=null&&O1(e,s,c,l))}switch(n){case"input":Rs(e),E0(e,r,!1);break;case"textarea":Rs(e),I0(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mr(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Ci(e,!!r.multiple,s,!1):r.defaultValue!=null&&Ci(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Gl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return mt(t),null;case 6:if(e&&t.stateNode!=null)Bm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(V(166));if(n=Mr(ls.current),Mr(En.current),Fs(t)){if(r=t.stateNode,n=t.memoizedProps,r[Sn]=t,(s=r.nodeValue!==n)&&(e=Ft,e!==null))switch(e.tag){case 3:Bs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Bs(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Sn]=t,t.stateNode=r}return mt(t),null;case 13:if(Ae(Fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ne&&Dt!==null&&t.mode&1&&!(t.flags&128))im(),Ni(),t.flags|=98560,s=!1;else if(s=Fs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(V(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(V(317));s[Sn]=t}else Ni(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;mt(t),s=!1}else fn!==null&&(Xd(fn),fn=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Fe.current&1?nt===0&&(nt=3):vp())),t.updateQueue!==null&&(t.flags|=4),mt(t),null);case 4:return Di(),Vd(e,t),e===null&&rs(t.stateNode.containerInfo),mt(t),null;case 10:return rp(t.type._context),mt(t),null;case 17:return Tt(t.type)&&Zl(),mt(t),null;case 19:if(Ae(Fe),s=t.memoizedState,s===null)return mt(t),null;if(r=(t.flags&128)!==0,l=s.rendering,l===null)if(r)ho(s,!1);else{if(nt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=na(e),l!==null){for(t.flags|=128,ho(s,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ee(Fe,Fe.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ke()>Fi&&(t.flags|=128,r=!0,ho(s,!1),t.lanes=4194304)}else{if(!r)if(e=na(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ho(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!Ne)return mt(t),null}else 2*Ke()-s.renderingStartTime>Fi&&n!==1073741824&&(t.flags|=128,r=!0,ho(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(n=s.last,n!==null?n.sibling=l:t.child=l,s.last=l)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ke(),t.sibling=null,n=Fe.current,Ee(Fe,r?n&1|2:n&1),t):(mt(t),null);case 22:case 23:return yp(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ot&1073741824&&(mt(t),t.subtreeFlags&6&&(t.flags|=8192)):mt(t),null;case 24:return null;case 25:return null}throw Error(V(156,t.tag))}function I7(e,t){switch(J1(t),t.tag){case 1:return Tt(t.type)&&Zl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Di(),Ae(It),Ae(Lt),ap(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return lp(t),null;case 13:if(Ae(Fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(V(340));Ni()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ae(Fe),null;case 4:return Di(),null;case 10:return rp(t.type._context),null;case 22:case 23:return yp(),null;case 24:return null;default:return null}}var Vs=!1,xt=!1,T7=typeof WeakSet=="function"?WeakSet:Set,q=null;function wi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){We(e,t,r)}else n.current=null}function Wd(e,t,n){try{n()}catch(r){We(e,t,r)}}var vf=!1;function R7(e,t){if(Ed=Wl,e=Wg(),Q1(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var l=0,a=-1,c=-1,u=0,p=0,f=e,h=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=l+i),f!==s||r!==0&&f.nodeType!==3||(c=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===e)break t;if(h===n&&++u===i&&(a=l),h===s&&++p===r&&(c=l),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pd={focusedElem:e,selectionRange:n},Wl=!1,q=t;q!==null;)if(t=q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,q=e;else for(;q!==null;){t=q;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,C=w.memoizedState,x=t.stateNode,m=x.getSnapshotBeforeUpdate(t.elementType===t.type?v:un(t.type,v),C);x.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var L=t.stateNode.containerInfo;L.nodeType===1?L.textContent="":L.nodeType===9&&L.documentElement&&L.removeChild(L.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(b){We(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,q=e;break}q=t.return}return w=vf,vf=!1,w}function Do(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Wd(t,n,s)}i=i.next}while(i!==r)}}function Aa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Kd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Fm(e){var t=e.alternate;t!==null&&(e.alternate=null,Fm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Sn],delete t[os],delete t[Rd],delete t[h7],delete t[g7])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hm(e){return e.tag===5||e.tag===3||e.tag===4}function wf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gl));else if(r!==4&&(e=e.child,e!==null))for(Yd(e,t,n),e=e.sibling;e!==null;)Yd(e,t,n),e=e.sibling}function Gd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Gd(e,t,n),e=e.sibling;e!==null;)Gd(e,t,n),e=e.sibling}var at=null,dn=!1;function Zn(e,t,n){for(n=n.child;n!==null;)Um(e,t,n),n=n.sibling}function Um(e,t,n){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount($a,n)}catch{}switch(n.tag){case 5:xt||wi(n,t);case 6:var r=at,i=dn;at=null,Zn(e,t,n),at=r,dn=i,at!==null&&(dn?(e=at,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):at.removeChild(n.stateNode));break;case 18:at!==null&&(dn?(e=at,n=n.stateNode,e.nodeType===8?Ec(e.parentNode,n):e.nodeType===1&&Ec(e,n),es(e)):Ec(at,n.stateNode));break;case 4:r=at,i=dn,at=n.stateNode.containerInfo,dn=!0,Zn(e,t,n),at=r,dn=i;break;case 0:case 11:case 14:case 15:if(!xt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&Wd(n,t,l),i=i.next}while(i!==r)}Zn(e,t,n);break;case 1:if(!xt&&(wi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){We(n,t,a)}Zn(e,t,n);break;case 21:Zn(e,t,n);break;case 22:n.mode&1?(xt=(r=xt)||n.memoizedState!==null,Zn(e,t,n),xt=r):Zn(e,t,n);break;default:Zn(e,t,n)}}function bf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new T7),t.forEach(function(r){var i=F7.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function cn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:at=a.stateNode,dn=!1;break e;case 3:at=a.stateNode.containerInfo,dn=!0;break e;case 4:at=a.stateNode.containerInfo,dn=!0;break e}a=a.return}if(at===null)throw Error(V(160));Um(s,l,i),at=null,dn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){We(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Vm(t,e),t=t.sibling}function Vm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(cn(t,e),yn(e),r&4){try{Do(3,e,e.return),Aa(3,e)}catch(v){We(e,e.return,v)}try{Do(5,e,e.return)}catch(v){We(e,e.return,v)}}break;case 1:cn(t,e),yn(e),r&512&&n!==null&&wi(n,n.return);break;case 5:if(cn(t,e),yn(e),r&512&&n!==null&&wi(n,n.return),e.flags&32){var i=e.stateNode;try{qo(i,"")}catch(v){We(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,l=n!==null?n.memoizedProps:s,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&pg(i,s),Ld(a,l);var u=Ld(a,s);for(l=0;l<c.length;l+=2){var p=c[l],f=c[l+1];p==="style"?xg(i,f):p==="dangerouslySetInnerHTML"?gg(i,f):p==="children"?qo(i,f):O1(i,p,f,u)}switch(a){case"input":fd(i,s);break;case"textarea":fg(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Ci(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ci(i,!!s.multiple,s.defaultValue,!0):Ci(i,!!s.multiple,s.multiple?[]:"",!1))}i[os]=s}catch(v){We(e,e.return,v)}}break;case 6:if(cn(t,e),yn(e),r&4){if(e.stateNode===null)throw Error(V(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(v){We(e,e.return,v)}}break;case 3:if(cn(t,e),yn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{es(t.containerInfo)}catch(v){We(e,e.return,v)}break;case 4:cn(t,e),yn(e);break;case 13:cn(t,e),yn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(xp=Ke())),r&4&&bf(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(xt=(u=xt)||p,cn(t,e),xt=u):cn(t,e),yn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(q=e,p=e.child;p!==null;){for(f=q=p;q!==null;){switch(h=q,g=h.child,h.tag){case 0:case 11:case 14:case 15:Do(4,h,h.return);break;case 1:wi(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){We(r,n,v)}}break;case 5:wi(h,h.return);break;case 22:if(h.memoizedState!==null){jf(f);continue}}g!==null?(g.return=h,q=g):jf(f)}p=p.sibling}e:for(p=null,f=e;;){if(f.tag===5){if(p===null){p=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,c=f.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=mg("display",l))}catch(v){We(e,e.return,v)}}}else if(f.tag===6){if(p===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){We(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;p===f&&(p=null),f=f.return}p===f&&(p=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:cn(t,e),yn(e),r&4&&bf(e);break;case 21:break;default:cn(t,e),yn(e)}}function yn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Hm(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(qo(i,""),r.flags&=-33);var s=wf(e);Gd(e,s,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=wf(e);Yd(e,a,l);break;default:throw Error(V(161))}}catch(c){We(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function M7(e,t,n){q=e,Wm(e)}function Wm(e,t,n){for(var r=(e.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Vs;if(!l){var a=i.alternate,c=a!==null&&a.memoizedState!==null||xt;a=Vs;var u=xt;if(Vs=l,(xt=c)&&!u)for(q=i;q!==null;)l=q,c=l.child,l.tag===22&&l.memoizedState!==null?Sf(i):c!==null?(c.return=l,q=c):Sf(i);for(;s!==null;)q=s,Wm(s),s=s.sibling;q=i,Vs=a,xt=u}kf(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):kf(e)}}function kf(e){for(;q!==null;){var t=q;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xt||Aa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!xt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:un(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&lf(t,s,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}lf(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var f=p.dehydrated;f!==null&&es(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}xt||t.flags&512&&Kd(t)}catch(h){We(t,t.return,h)}}if(t===e){q=null;break}if(n=t.sibling,n!==null){n.return=t.return,q=n;break}q=t.return}}function jf(e){for(;q!==null;){var t=q;if(t===e){q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,q=n;break}q=t.return}}function Sf(e){for(;q!==null;){var t=q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Aa(4,t)}catch(c){We(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){We(t,i,c)}}var s=t.return;try{Kd(t)}catch(c){We(t,s,c)}break;case 5:var l=t.return;try{Kd(t)}catch(c){We(t,l,c)}}}catch(c){We(t,t.return,c)}if(t===e){q=null;break}var a=t.sibling;if(a!==null){a.return=t.return,q=a;break}q=t.return}}var z7=Math.ceil,oa=Kn.ReactCurrentDispatcher,gp=Kn.ReactCurrentOwner,tn=Kn.ReactCurrentBatchConfig,ge=0,lt=null,Xe=null,ut=0,Ot=0,bi=yr(0),nt=0,ds=null,Ur=0,_a=0,mp=0,Bo=null,Et=null,xp=0,Fi=1/0,zn=null,sa=!1,Zd=null,dr=null,Ws=!1,ir=null,la=0,Fo=0,qd=null,Sl=-1,Cl=0;function kt(){return ge&6?Ke():Sl!==-1?Sl:Sl=Ke()}function pr(e){return e.mode&1?ge&2&&ut!==0?ut&-ut:x7.transition!==null?(Cl===0&&(Cl=Pg()),Cl):(e=be,e!==0||(e=window.event,e=e===void 0?16:_g(e.type)),e):1}function gn(e,t,n,r){if(50<Fo)throw Fo=0,qd=null,Error(V(185));ys(e,n,r),(!(ge&2)||e!==lt)&&(e===lt&&(!(ge&2)&&(_a|=n),nt===4&&nr(e,ut)),Rt(e,r),n===1&&ge===0&&!(t.mode&1)&&(Fi=Ke()+500,Ra&&vr()))}function Rt(e,t){var n=e.callbackNode;x6(e,t);var r=Vl(e,e===lt?ut:0);if(r===0)n!==null&&M0(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&M0(n),t===1)e.tag===0?m7(Cf.bind(null,e)):tm(Cf.bind(null,e)),p7(function(){!(ge&6)&&vr()}),n=null;else{switch(Ig(r)){case 1:n=U1;break;case 4:n=$g;break;case 16:n=Ul;break;case 536870912:n=Eg;break;default:n=Ul}n=Jm(n,Km.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Km(e,t){if(Sl=-1,Cl=0,ge&6)throw Error(V(327));var n=e.callbackNode;if(Ti()&&e.callbackNode!==n)return null;var r=Vl(e,e===lt?ut:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=aa(e,r);else{t=r;var i=ge;ge|=2;var s=Gm();(lt!==e||ut!==t)&&(zn=null,Fi=Ke()+500,_r(e,t));do try{N7();break}catch(a){Ym(e,a)}while(!0);np(),oa.current=s,ge=i,Xe!==null?t=0:(lt=null,ut=0,t=nt)}if(t!==0){if(t===2&&(i=kd(e),i!==0&&(r=i,t=Qd(e,i))),t===1)throw n=ds,_r(e,0),nr(e,r),Rt(e,Ke()),n;if(t===6)nr(e,r);else{if(i=e.current.alternate,!(r&30)&&!A7(i)&&(t=aa(e,r),t===2&&(s=kd(e),s!==0&&(r=s,t=Qd(e,s))),t===1))throw n=ds,_r(e,0),nr(e,r),Rt(e,Ke()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(V(345));case 2:Er(e,Et,zn);break;case 3:if(nr(e,r),(r&130023424)===r&&(t=xp+500-Ke(),10<t)){if(Vl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){kt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Td(Er.bind(null,e,Et,zn),t);break}Er(e,Et,zn);break;case 4:if(nr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-hn(r);s=1<<l,l=t[l],l>i&&(i=l),r&=~s}if(r=i,r=Ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*z7(r/1960))-r,10<r){e.timeoutHandle=Td(Er.bind(null,e,Et,zn),r);break}Er(e,Et,zn);break;case 5:Er(e,Et,zn);break;default:throw Error(V(329))}}}return Rt(e,Ke()),e.callbackNode===n?Km.bind(null,e):null}function Qd(e,t){var n=Bo;return e.current.memoizedState.isDehydrated&&(_r(e,t).flags|=256),e=aa(e,t),e!==2&&(t=Et,Et=n,t!==null&&Xd(t)),e}function Xd(e){Et===null?Et=e:Et.push.apply(Et,e)}function A7(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ln(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nr(e,t){for(t&=~mp,t&=~_a,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-hn(t),r=1<<n;e[n]=-1,t&=~r}}function Cf(e){if(ge&6)throw Error(V(327));Ti();var t=Vl(e,0);if(!(t&1))return Rt(e,Ke()),null;var n=aa(e,t);if(e.tag!==0&&n===2){var r=kd(e);r!==0&&(t=r,n=Qd(e,r))}if(n===1)throw n=ds,_r(e,0),nr(e,t),Rt(e,Ke()),n;if(n===6)throw Error(V(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Er(e,Et,zn),Rt(e,Ke()),null}function Lp(e,t){var n=ge;ge|=1;try{return e(t)}finally{ge=n,ge===0&&(Fi=Ke()+500,Ra&&vr())}}function Vr(e){ir!==null&&ir.tag===0&&!(ge&6)&&Ti();var t=ge;ge|=1;var n=tn.transition,r=be;try{if(tn.transition=null,be=1,e)return e()}finally{be=r,tn.transition=n,ge=t,!(ge&6)&&vr()}}function yp(){Ot=bi.current,Ae(bi)}function _r(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,d7(n)),Xe!==null)for(n=Xe.return;n!==null;){var r=n;switch(J1(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zl();break;case 3:Di(),Ae(It),Ae(Lt),ap();break;case 5:lp(r);break;case 4:Di();break;case 13:Ae(Fe);break;case 19:Ae(Fe);break;case 10:rp(r.type._context);break;case 22:case 23:yp()}n=n.return}if(lt=e,Xe=e=fr(e.current,null),ut=Ot=t,nt=0,ds=null,mp=_a=Ur=0,Et=Bo=null,Rr!==null){for(t=0;t<Rr.length;t++)if(n=Rr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var l=s.next;s.next=i,r.next=l}n.pending=r}Rr=null}return e}function Ym(e,t){do{var n=Xe;try{if(np(),bl.current=ia,ra){for(var r=He.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ra=!1}if(Hr=0,ot=Je=He=null,Oo=!1,as=0,gp.current=null,n===null||n.return===null){nt=1,ds=t,Xe=null;break}e:{var s=e,l=n.return,a=n,c=t;if(t=ut,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,p=a,f=p.tag;if(!(p.mode&1)&&(f===0||f===11||f===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var g=ff(l);if(g!==null){g.flags&=-257,hf(g,l,a,s,t),g.mode&1&&pf(s,u,t),t=g,c=u;var w=t.updateQueue;if(w===null){var v=new Set;v.add(c),t.updateQueue=v}else w.add(c);break e}else{if(!(t&1)){pf(s,u,t),vp();break e}c=Error(V(426))}}else if(Ne&&a.mode&1){var C=ff(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),hf(C,l,a,s,t),ep(Bi(c,a));break e}}s=c=Bi(c,a),nt!==4&&(nt=2),Bo===null?Bo=[s]:Bo.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var x=Im(s,c,t);sf(s,x);break e;case 1:a=c;var m=s.type,L=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||L!==null&&typeof L.componentDidCatch=="function"&&(dr===null||!dr.has(L)))){s.flags|=65536,t&=-t,s.lanes|=t;var b=Tm(s,a,t);sf(s,b);break e}}s=s.return}while(s!==null)}qm(n)}catch($){t=$,Xe===n&&n!==null&&(Xe=n=n.return);continue}break}while(!0)}function Gm(){var e=oa.current;return oa.current=ia,e===null?ia:e}function vp(){(nt===0||nt===3||nt===2)&&(nt=4),lt===null||!(Ur&268435455)&&!(_a&268435455)||nr(lt,ut)}function aa(e,t){var n=ge;ge|=2;var r=Gm();(lt!==e||ut!==t)&&(zn=null,_r(e,t));do try{_7();break}catch(i){Ym(e,i)}while(!0);if(np(),ge=n,oa.current=r,Xe!==null)throw Error(V(261));return lt=null,ut=0,nt}function _7(){for(;Xe!==null;)Zm(Xe)}function N7(){for(;Xe!==null&&!a6();)Zm(Xe)}function Zm(e){var t=Xm(e.alternate,e,Ot);e.memoizedProps=e.pendingProps,t===null?qm(e):Xe=t,gp.current=null}function qm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=I7(n,t),n!==null){n.flags&=32767,Xe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{nt=6,Xe=null;return}}else if(n=P7(n,t,Ot),n!==null){Xe=n;return}if(t=t.sibling,t!==null){Xe=t;return}Xe=t=e}while(t!==null);nt===0&&(nt=5)}function Er(e,t,n){var r=be,i=tn.transition;try{tn.transition=null,be=1,O7(e,t,n,r)}finally{tn.transition=i,be=r}return null}function O7(e,t,n,r){do Ti();while(ir!==null);if(ge&6)throw Error(V(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(V(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(L6(e,s),e===lt&&(Xe=lt=null,ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ws||(Ws=!0,Jm(Ul,function(){return Ti(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=tn.transition,tn.transition=null;var l=be;be=1;var a=ge;ge|=4,gp.current=null,R7(e,n),Vm(n,e),i7(Pd),Wl=!!Ed,Pd=Ed=null,e.current=n,M7(n),c6(),ge=a,be=l,tn.transition=s}else e.current=n;if(Ws&&(Ws=!1,ir=e,la=i),s=e.pendingLanes,s===0&&(dr=null),p6(n.stateNode),Rt(e,Ke()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(sa)throw sa=!1,e=Zd,Zd=null,e;return la&1&&e.tag!==0&&Ti(),s=e.pendingLanes,s&1?e===qd?Fo++:(Fo=0,qd=e):Fo=0,vr(),null}function Ti(){if(ir!==null){var e=Ig(la),t=tn.transition,n=be;try{if(tn.transition=null,be=16>e?16:e,ir===null)var r=!1;else{if(e=ir,ir=null,la=0,ge&6)throw Error(V(331));var i=ge;for(ge|=4,q=e.current;q!==null;){var s=q,l=s.child;if(q.flags&16){var a=s.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(q=u;q!==null;){var p=q;switch(p.tag){case 0:case 11:case 15:Do(8,p,s)}var f=p.child;if(f!==null)f.return=p,q=f;else for(;q!==null;){p=q;var h=p.sibling,g=p.return;if(Fm(p),p===u){q=null;break}if(h!==null){h.return=g,q=h;break}q=g}}}var w=s.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var C=v.sibling;v.sibling=null,v=C}while(v!==null)}}q=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,q=l;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Do(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,q=x;break e}q=s.return}}var m=e.current;for(q=m;q!==null;){l=q;var L=l.child;if(l.subtreeFlags&2064&&L!==null)L.return=l,q=L;else e:for(l=m;q!==null;){if(a=q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Aa(9,a)}}catch($){We(a,a.return,$)}if(a===l){q=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,q=b;break e}q=a.return}}if(ge=i,vr(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot($a,e)}catch{}r=!0}return r}finally{be=n,tn.transition=t}}return!1}function $f(e,t,n){t=Bi(n,t),t=Im(e,t,1),e=ur(e,t,1),t=kt(),e!==null&&(ys(e,1,t),Rt(e,t))}function We(e,t,n){if(e.tag===3)$f(e,e,n);else for(;t!==null;){if(t.tag===3){$f(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dr===null||!dr.has(r))){e=Bi(n,e),e=Tm(t,e,1),t=ur(t,e,1),e=kt(),t!==null&&(ys(t,1,e),Rt(t,e));break}}t=t.return}}function D7(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=kt(),e.pingedLanes|=e.suspendedLanes&n,lt===e&&(ut&n)===n&&(nt===4||nt===3&&(ut&130023424)===ut&&500>Ke()-xp?_r(e,0):mp|=n),Rt(e,t)}function Qm(e,t){t===0&&(e.mode&1?(t=As,As<<=1,!(As&130023424)&&(As=4194304)):t=1);var n=kt();e=Un(e,t),e!==null&&(ys(e,t,n),Rt(e,n))}function B7(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Qm(e,n)}function F7(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(t),Qm(e,n)}var Xm;Xm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||It.current)Pt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Pt=!1,E7(e,t,n);Pt=!!(e.flags&131072)}else Pt=!1,Ne&&t.flags&1048576&&nm(t,Xl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;jl(e,t),e=t.pendingProps;var i=_i(t,Lt.current);Ii(t,n),i=up(null,t,r,e,i,n);var s=dp();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Tt(r)?(s=!0,ql(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,op(t),i.updater=za,t.stateNode=i,i._reactInternals=t,Od(t,r,e,n),t=Fd(null,t,r,!0,s,n)):(t.tag=0,Ne&&s&&X1(t),bt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(jl(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=U7(r),e=un(r,e),i){case 0:t=Bd(null,t,r,e,n);break e;case 1:t=xf(null,t,r,e,n);break e;case 11:t=gf(null,t,r,e,n);break e;case 14:t=mf(null,t,r,un(r.type,e),n);break e}throw Error(V(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:un(r,i),Bd(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:un(r,i),xf(e,t,r,i,n);case 3:e:{if(Am(t),e===null)throw Error(V(387));r=t.pendingProps,s=t.memoizedState,i=s.element,am(e,t),ta(t,r,null,n);var l=t.memoizedState;if(r=l.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Bi(Error(V(423)),t),t=Lf(e,t,r,n,i);break e}else if(r!==i){i=Bi(Error(V(424)),t),t=Lf(e,t,r,n,i);break e}else for(Dt=cr(t.stateNode.containerInfo.firstChild),Ft=t,Ne=!0,fn=null,n=sm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ni(),r===i){t=Vn(e,t,n);break e}bt(e,t,r,n)}t=t.child}return t;case 5:return cm(t),e===null&&Ad(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,Id(r,i)?l=null:s!==null&&Id(r,s)&&(t.flags|=32),zm(e,t),bt(e,t,l,n),t.child;case 6:return e===null&&Ad(t),null;case 13:return _m(e,t,n);case 4:return sp(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Oi(t,null,r,n):bt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:un(r,i),gf(e,t,r,i,n);case 7:return bt(e,t,t.pendingProps,n),t.child;case 8:return bt(e,t,t.pendingProps.children,n),t.child;case 12:return bt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,l=i.value,Ee(Jl,r._currentValue),r._currentValue=l,s!==null)if(Ln(s.value,l)){if(s.children===i.children&&!It.current){t=Vn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){l=s.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Bn(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?c.next=c:(c.next=p.next,p.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),_d(s.return,n,t),a.lanes|=n;break}c=c.next}}else if(s.tag===10)l=s.type===t.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(V(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),_d(l,n,t),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===t){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}bt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ii(t,n),i=nn(i),r=r(i),t.flags|=1,bt(e,t,r,n),t.child;case 14:return r=t.type,i=un(r,t.pendingProps),i=un(r.type,i),mf(e,t,r,i,n);case 15:return Rm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:un(r,i),jl(e,t),t.tag=1,Tt(r)?(e=!0,ql(t)):e=!1,Ii(t,n),Pm(t,r,i),Od(t,r,i,n),Fd(null,t,r,!0,e,n);case 19:return Nm(e,t,n);case 22:return Mm(e,t,n)}throw Error(V(156,t.tag))};function Jm(e,t){return Cg(e,t)}function H7(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(e,t,n,r){return new H7(e,t,n,r)}function wp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function U7(e){if(typeof e=="function")return wp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===B1)return 11;if(e===F1)return 14}return 2}function fr(e,t){var n=e.alternate;return n===null?(n=Jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $l(e,t,n,r,i,s){var l=2;if(r=e,typeof e=="function")wp(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case pi:return Nr(n.children,i,s,t);case D1:l=8,i|=8;break;case ad:return e=Jt(12,n,t,i|2),e.elementType=ad,e.lanes=s,e;case cd:return e=Jt(13,n,t,i),e.elementType=cd,e.lanes=s,e;case ud:return e=Jt(19,n,t,i),e.elementType=ud,e.lanes=s,e;case cg:return Na(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case lg:l=10;break e;case ag:l=9;break e;case B1:l=11;break e;case F1:l=14;break e;case Jn:l=16,r=null;break e}throw Error(V(130,e==null?e:typeof e,""))}return t=Jt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Nr(e,t,n,r){return e=Jt(7,e,r,t),e.lanes=n,e}function Na(e,t,n,r){return e=Jt(22,e,r,t),e.elementType=cg,e.lanes=n,e.stateNode={isHidden:!1},e}function _c(e,t,n){return e=Jt(6,e,null,t),e.lanes=n,e}function Nc(e,t,n){return t=Jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function V7(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xc(0),this.expirationTimes=xc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function bp(e,t,n,r,i,s,l,a,c){return e=new V7(e,t,n,a,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Jt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},op(s),e}function W7(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:di,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function e3(e){if(!e)return xr;e=e._reactInternals;e:{if(Qr(e)!==e||e.tag!==1)throw Error(V(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(V(171))}if(e.tag===1){var n=e.type;if(Tt(n))return em(e,n,t)}return t}function t3(e,t,n,r,i,s,l,a,c){return e=bp(n,r,!0,e,i,s,l,a,c),e.context=e3(null),n=e.current,r=kt(),i=pr(n),s=Bn(r,i),s.callback=t??null,ur(n,s,i),e.current.lanes=i,ys(e,i,r),Rt(e,r),e}function Oa(e,t,n,r){var i=t.current,s=kt(),l=pr(i);return n=e3(n),t.context===null?t.context=n:t.pendingContext=n,t=Bn(s,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ur(i,t,l),e!==null&&(gn(e,i,l,s),wl(e,i,l)),l}function ca(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ef(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function kp(e,t){Ef(e,t),(e=e.alternate)&&Ef(e,t)}function K7(){return null}var n3=typeof reportError=="function"?reportError:function(e){console.error(e)};function jp(e){this._internalRoot=e}Da.prototype.render=jp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(V(409));Oa(e,t,null,null)};Da.prototype.unmount=jp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vr(function(){Oa(null,e,null,null)}),t[Hn]=null}};function Da(e){this._internalRoot=e}Da.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tr.length&&t!==0&&t<tr[n].priority;n++);tr.splice(n,0,e),n===0&&Ag(e)}};function Sp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ba(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pf(){}function Y7(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ca(l);s.call(u)}}var l=t3(t,r,e,0,null,!1,!1,"",Pf);return e._reactRootContainer=l,e[Hn]=l.current,rs(e.nodeType===8?e.parentNode:e),Vr(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ca(c);a.call(u)}}var c=bp(e,0,!1,null,null,!1,!1,"",Pf);return e._reactRootContainer=c,e[Hn]=c.current,rs(e.nodeType===8?e.parentNode:e),Vr(function(){Oa(t,c,n,r)}),c}function Fa(e,t,n,r,i){var s=n._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var a=i;i=function(){var c=ca(l);a.call(c)}}Oa(t,l,e,i)}else l=Y7(n,t,e,i,r);return ca(l)}Tg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Eo(t.pendingLanes);n!==0&&(V1(t,n|1),Rt(t,Ke()),!(ge&6)&&(Fi=Ke()+500,vr()))}break;case 13:Vr(function(){var r=Un(e,1);if(r!==null){var i=kt();gn(r,e,1,i)}}),kp(e,1)}};W1=function(e){if(e.tag===13){var t=Un(e,134217728);if(t!==null){var n=kt();gn(t,e,134217728,n)}kp(e,134217728)}};Rg=function(e){if(e.tag===13){var t=pr(e),n=Un(e,t);if(n!==null){var r=kt();gn(n,e,t,r)}kp(e,t)}};Mg=function(){return be};zg=function(e,t){var n=be;try{return be=e,t()}finally{be=n}};vd=function(e,t,n){switch(t){case"input":if(fd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ta(r);if(!i)throw Error(V(90));dg(r),fd(r,i)}}}break;case"textarea":fg(e,n);break;case"select":t=n.value,t!=null&&Ci(e,!!n.multiple,t,!1)}};vg=Lp;wg=Vr;var G7={usingClientEntryPoint:!1,Events:[ws,mi,Ta,Lg,yg,Lp]},go={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Z7={bundleType:go.bundleType,version:go.version,rendererPackageName:go.rendererPackageName,rendererConfig:go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=jg(e),e===null?null:e.stateNode},findFiberByHostInstance:go.findFiberByHostInstance||K7,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ks=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ks.isDisabled&&Ks.supportsFiber)try{$a=Ks.inject(Z7),$n=Ks}catch{}}Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G7;Ut.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sp(t))throw Error(V(200));return W7(e,t,null,n)};Ut.createRoot=function(e,t){if(!Sp(e))throw Error(V(299));var n=!1,r="",i=n3;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=bp(e,1,!1,null,null,n,!1,r,i),e[Hn]=t.current,rs(e.nodeType===8?e.parentNode:e),new jp(t)};Ut.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(V(188)):(e=Object.keys(e).join(","),Error(V(268,e)));return e=jg(t),e=e===null?null:e.stateNode,e};Ut.flushSync=function(e){return Vr(e)};Ut.hydrate=function(e,t,n){if(!Ba(t))throw Error(V(200));return Fa(null,e,t,!0,n)};Ut.hydrateRoot=function(e,t,n){if(!Sp(e))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",l=n3;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=t3(t,null,e,1,n??null,i,!1,s,l),e[Hn]=t.current,rs(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Da(t)};Ut.render=function(e,t,n){if(!Ba(t))throw Error(V(200));return Fa(null,e,t,!1,n)};Ut.unmountComponentAtNode=function(e){if(!Ba(e))throw Error(V(40));return e._reactRootContainer?(Vr(function(){Fa(null,null,e,!1,function(){e._reactRootContainer=null,e[Hn]=null})}),!0):!1};Ut.unstable_batchedUpdates=Lp;Ut.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ba(n))throw Error(V(200));if(e==null||e._reactInternals===void 0)throw Error(V(38));return Fa(e,t,n,!1,r)};Ut.version="18.3.1-next-f1338f8080-20240426";function r3(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r3)}catch(e){console.error(e)}}r3(),rg.exports=Ut;var i3=rg.exports,If=i3;sd.createRoot=If.createRoot,sd.hydrateRoot=If.hydrateRoot;var st=function(){return st=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},st.apply(this,arguments)};function Hi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var Me="-ms-",Ho="-moz-",Le="-webkit-",o3="comm",Ha="rule",Cp="decl",q7="@import",Q7="@namespace",s3="@keyframes",X7="@layer",l3=Math.abs,$p=String.fromCharCode,Jd=Object.assign;function J7(e,t){return et(e,0)^45?(((t<<2^et(e,0))<<2^et(e,1))<<2^et(e,2))<<2^et(e,3):0}function a3(e){return e.trim()}function An(e,t){return(e=t.exec(e))?e[0]:e}function le(e,t,n){return e.replace(t,n)}function El(e,t,n){return e.indexOf(t,n)}function et(e,t){return e.charCodeAt(t)|0}function Wr(e,t,n){return e.slice(t,n)}function pn(e){return e.length}function c3(e){return e.length}function Io(e,t){return t.push(e),e}function e8(e,t){return e.map(t).join("")}function Tf(e,t){return e.filter(function(n){return!An(n,t)})}var Ua=1,Ui=1,u3=0,on=0,Qe=0,Xi="";function Va(e,t,n,r,i,s,l,a){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Ua,column:Ui,length:l,return:"",siblings:a}}function Xn(e,t){return Jd(Va("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ri(e){for(;e.root;)e=Xn(e.root,{children:[e]});Io(e,e.siblings)}function t8(){return Qe}function n8(){return Qe=on>0?et(Xi,--on):0,Ui--,Qe===10&&(Ui=1,Ua--),Qe}function mn(){return Qe=on<u3?et(Xi,on++):0,Ui++,Qe===10&&(Ui=1,Ua++),Qe}function or(){return et(Xi,on)}function Pl(){return on}function Wa(e,t){return Wr(Xi,e,t)}function ps(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function r8(e){return Ua=Ui=1,u3=pn(Xi=e),on=0,[]}function i8(e){return Xi="",e}function Oc(e){return a3(Wa(on-1,e1(e===91?e+2:e===40?e+1:e)))}function o8(e){for(;(Qe=or())&&Qe<33;)mn();return ps(e)>2||ps(Qe)>3?"":" "}function s8(e,t){for(;--t&&mn()&&!(Qe<48||Qe>102||Qe>57&&Qe<65||Qe>70&&Qe<97););return Wa(e,Pl()+(t<6&&or()==32&&mn()==32))}function e1(e){for(;mn();)switch(Qe){case e:return on;case 34:case 39:e!==34&&e!==39&&e1(Qe);break;case 40:e===41&&e1(e);break;case 92:mn();break}return on}function l8(e,t){for(;mn()&&e+Qe!==57;)if(e+Qe===84&&or()===47)break;return"/*"+Wa(t,on-1)+"*"+$p(e===47?e:mn())}function a8(e){for(;!ps(or());)mn();return Wa(e,on)}function c8(e){return i8(Il("",null,null,null,[""],e=r8(e),0,[0],e))}function Il(e,t,n,r,i,s,l,a,c){for(var u=0,p=0,f=l,h=0,g=0,w=0,v=1,C=1,x=1,m=0,L="",b=i,$=s,k=r,S=L;C;)switch(w=m,m=mn()){case 40:if(w!=108&&et(S,f-1)==58){El(S+=le(Oc(m),"&","&\f"),"&\f",l3(u?a[u-1]:0))!=-1&&(x=-1);break}case 34:case 39:case 91:S+=Oc(m);break;case 9:case 10:case 13:case 32:S+=o8(w);break;case 92:S+=s8(Pl()-1,7);continue;case 47:switch(or()){case 42:case 47:Io(u8(l8(mn(),Pl()),t,n,c),c),(ps(w||1)==5||ps(or()||1)==5)&&pn(S)&&Wr(S,-1,void 0)!==" "&&(S+=" ");break;default:S+="/"}break;case 123*v:a[u++]=pn(S)*x;case 125*v:case 59:case 0:switch(m){case 0:case 125:C=0;case 59+p:x==-1&&(S=le(S,/\f/g,"")),g>0&&(pn(S)-f||v===0&&w===47)&&Io(g>32?Mf(S+";",r,n,f-1,c):Mf(le(S," ","")+";",r,n,f-2,c),c);break;case 59:S+=";";default:if(Io(k=Rf(S,t,n,u,p,i,a,L,b=[],$=[],f,s),s),m===123)if(p===0)Il(S,t,k,k,b,s,f,a,$);else{switch(h){case 99:if(et(S,3)===110)break;case 108:if(et(S,2)===97)break;default:p=0;case 100:case 109:case 115:}p?Il(e,k,k,r&&Io(Rf(e,k,k,0,0,i,a,L,i,b=[],f,$),$),i,$,f,a,r?b:$):Il(S,k,k,k,[""],$,0,a,$)}}u=p=g=0,v=x=1,L=S="",f=l;break;case 58:f=1+pn(S),g=w;default:if(v<1){if(m==123)--v;else if(m==125&&v++==0&&n8()==125)continue}switch(S+=$p(m),m*v){case 38:x=p>0?1:(S+="\f",-1);break;case 44:a[u++]=(pn(S)-1)*x,x=1;break;case 64:or()===45&&(S+=Oc(mn())),h=or(),p=f=pn(L=S+=a8(Pl())),m++;break;case 45:w===45&&pn(S)==2&&(v=0)}}return s}function Rf(e,t,n,r,i,s,l,a,c,u,p,f){for(var h=i-1,g=i===0?s:[""],w=c3(g),v=0,C=0,x=0;v<r;++v)for(var m=0,L=Wr(e,h+1,h=l3(C=l[v])),b=e;m<w;++m)(b=a3(C>0?g[m]+" "+L:le(L,/&\f/g,g[m])))&&(c[x++]=b);return Va(e,t,n,i===0?Ha:a,c,u,p,f)}function u8(e,t,n,r){return Va(e,t,n,o3,$p(t8()),Wr(e,2,-2),0,r)}function Mf(e,t,n,r,i){return Va(e,t,n,Cp,Wr(e,0,r),Wr(e,r+1,-1),r,i)}function d3(e,t,n){switch(J7(e,t)){case 5103:return Le+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Le+e+e;case 4855:return Le+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Ho+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Le+e+Ho+e+Me+e+e;case 5936:switch(et(e,t+11)){case 114:return Le+e+Me+le(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Le+e+Me+le(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Le+e+Me+le(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Le+e+Me+e+e;case 6165:return Le+e+Me+"flex-"+e+e;case 5187:return Le+e+le(e,/(\w+).+(:[^]+)/,Le+"box-$1$2"+Me+"flex-$1$2")+e;case 5443:return Le+e+Me+"flex-item-"+le(e,/flex-|-self/g,"")+(An(e,/flex-|baseline/)?"":Me+"grid-row-"+le(e,/flex-|-self/g,""))+e;case 4675:return Le+e+Me+"flex-line-pack"+le(e,/align-content|flex-|-self/g,"")+e;case 5548:return Le+e+Me+le(e,"shrink","negative")+e;case 5292:return Le+e+Me+le(e,"basis","preferred-size")+e;case 6060:return Le+"box-"+le(e,"-grow","")+Le+e+Me+le(e,"grow","positive")+e;case 4554:return Le+le(e,/([^-])(transform)/g,"$1"+Le+"$2")+e;case 6187:return le(le(le(e,/(zoom-|grab)/,Le+"$1"),/(image-set)/,Le+"$1"),e,"")+e;case 5495:case 3959:return le(e,/(image-set\([^]*)/,Le+"$1$`$1");case 4968:return le(le(e,/(.+:)(flex-)?(.*)/,Le+"box-pack:$3"+Me+"flex-pack:$3"),/space-between/,"justify")+Le+e+e;case 4200:if(!An(e,/flex-|baseline/))return Me+"grid-column-align"+Wr(e,t)+e;break;case 2592:case 3360:return Me+le(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,An(r.props,/grid-\w+-end/)})?~El(e+(n=n[t].value),"span",0)?e:Me+le(e,"-start","")+e+Me+"grid-row-span:"+(~El(n,"span",0)?An(n,/\d+/):+An(n,/\d+/)-+An(e,/\d+/))+";":Me+le(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return An(r.props,/grid-\w+-start/)})?e:Me+le(le(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return le(e,/(.+)-inline(.+)/,Le+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pn(e)-1-t>6)switch(et(e,t+1)){case 109:if(et(e,t+4)!==45)break;case 102:return le(e,/(.+:)(.+)-([^]+)/,"$1"+Le+"$2-$3$1"+Ho+(et(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~El(e,"stretch",0)?d3(le(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return le(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,l,a,c,u){return Me+i+":"+s+u+(l?Me+i+"-span:"+(a?c:+c-+s)+u:"")+e});case 4949:if(et(e,t+6)===121)return le(e,":",":"+Le)+e;break;case 6444:switch(et(e,et(e,14)===45?18:11)){case 120:return le(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Le+(et(e,14)===45?"inline-":"")+"box$3$1"+Le+"$2$3$1"+Me+"$2box$3")+e;case 100:return le(e,":",":"+Me)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return le(e,"scroll-","scroll-snap-")+e}return e}function ua(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function d8(e,t,n,r){switch(e.type){case X7:if(e.children.length)break;case q7:case Q7:case Cp:return e.return=e.return||e.value;case o3:return"";case s3:return e.return=e.value+"{"+ua(e.children,r)+"}";case Ha:if(!pn(e.value=e.props.join(",")))return""}return pn(n=ua(e.children,r))?e.return=e.value+"{"+n+"}":""}function p8(e){var t=c3(e);return function(n,r,i,s){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,s)||"";return l}}function f8(e){return function(t){t.root||(t=t.return)&&e(t)}}function h8(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Cp:e.return=d3(e.value,e.length,n);return;case s3:return ua([Xn(e,{value:le(e.value,"@","@"+Le)})],r);case Ha:if(e.length)return e8(n=e.props,function(i){switch(An(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ri(Xn(e,{props:[le(i,/:(read-\w+)/,":"+Ho+"$1")]})),ri(Xn(e,{props:[i]})),Jd(e,{props:Tf(n,r)});break;case"::placeholder":ri(Xn(e,{props:[le(i,/:(plac\w+)/,":"+Le+"input-$1")]})),ri(Xn(e,{props:[le(i,/:(plac\w+)/,":"+Ho+"$1")]})),ri(Xn(e,{props:[le(i,/:(plac\w+)/,Me+"input-$1")]})),ri(Xn(e,{props:[i]})),Jd(e,{props:Tf(n,r)});break}return""})}}var g8={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Nt={},Vi=typeof process<"u"&&Nt!==void 0&&(Nt.REACT_APP_SC_ATTR||Nt.SC_ATTR)||"data-styled",p3="active",f3="data-styled-version",Ka="6.3.8",Ep=`/*!sc*/
`,da=typeof window<"u"&&typeof document<"u",Pn=Ye.createContext===void 0,m8=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Nt!==void 0&&Nt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Nt.REACT_APP_SC_DISABLE_SPEEDY!==""?Nt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Nt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Nt!==void 0&&Nt.SC_DISABLE_SPEEDY!==void 0&&Nt.SC_DISABLE_SPEEDY!==""&&Nt.SC_DISABLE_SPEEDY!=="false"&&Nt.SC_DISABLE_SPEEDY),x8={},Ya=Object.freeze([]),Wi=Object.freeze({});function h3(e,t,n){return n===void 0&&(n=Wi),e.theme!==n.theme&&e.theme||t||n.theme}var g3=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),L8=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,y8=/(^-|-$)/g;function zf(e){return e.replace(L8,"-").replace(y8,"")}var v8=/(a)(d)/gi,Af=function(e){return String.fromCharCode(e+(e>25?39:97))};function t1(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Af(t%52)+n;return(Af(t%52)+n).replace(v8,"$1-$2")}var Dc,ki=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},m3=function(e){return ki(5381,e)};function Pp(e){return t1(m3(e)>>>0)}function w8(e){return e.displayName||e.name||"Component"}function Bc(e){return typeof e=="string"&&!0}var x3=typeof Symbol=="function"&&Symbol.for,L3=x3?Symbol.for("react.memo"):60115,b8=x3?Symbol.for("react.forward_ref"):60112,k8={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},j8={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},y3={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},S8=((Dc={})[b8]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Dc[L3]=y3,Dc);function _f(e){return("type"in(t=e)&&t.type.$$typeof)===L3?y3:"$$typeof"in e?S8[e.$$typeof]:k8;var t}var C8=Object.defineProperty,$8=Object.getOwnPropertyNames,Nf=Object.getOwnPropertySymbols,E8=Object.getOwnPropertyDescriptor,P8=Object.getPrototypeOf,Of=Object.prototype;function v3(e,t,n){if(typeof t!="string"){if(Of){var r=P8(t);r&&r!==Of&&v3(e,r,n)}var i=$8(t);Nf&&(i=i.concat(Nf(t)));for(var s=_f(e),l=_f(t),a=0;a<i.length;++a){var c=i[a];if(!(c in j8||n&&n[c]||l&&c in l||s&&c in s)){var u=E8(t,c);try{C8(e,c,u)}catch{}}}}return e}function Kr(e){return typeof e=="function"}function Ip(e){return typeof e=="object"&&"styledComponentId"in e}function zr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function pa(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function fs(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function n1(e,t,n){if(n===void 0&&(n=!1),!n&&!fs(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=n1(e[r],t[r]);else if(fs(t))for(var r in t)e[r]=n1(e[r],t[r]);return e}function Tp(e,t){Object.defineProperty(e,"toString",{value:t})}function Yr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var I8=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw Yr(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var l=i;l<s;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),c=(l=0,n.length);l<c;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,l=i;l<s;l++)n+="".concat(this.tag.getRule(l)).concat(Ep);return n},e}(),Tl=new Map,fa=new Map,Rl=1,ji=function(e){if(Tl.has(e))return Tl.get(e);for(;fa.has(Rl);)Rl++;var t=Rl++;return Tl.set(e,t),fa.set(t,e),t},T8=function(e,t){Rl=t+1,Tl.set(e,t),fa.set(t,e)},R8="style[".concat(Vi,"][").concat(f3,'="').concat(Ka,'"]'),M8=new RegExp("^".concat(Vi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),z8=function(e,t,n){for(var r,i=n.split(","),s=0,l=i.length;s<l;s++)(r=i[s])&&e.registerName(t,r)},A8=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Ep),i=[],s=0,l=r.length;s<l;s++){var a=r[s].trim();if(a){var c=a.match(M8);if(c){var u=0|parseInt(c[1],10),p=c[2];u!==0&&(T8(p,u),z8(e,p,c[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}},Df=function(e){for(var t=document.querySelectorAll(R8),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Vi)!==p3&&(A8(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function _8(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var w3=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var c=Array.from(a.querySelectorAll("style[".concat(Vi,"]")));return c[c.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Vi,p3),r.setAttribute(f3,Ka);var l=_8();return l&&r.setAttribute("nonce",l),n.insertBefore(r,s),r},N8=function(){function e(t){this.element=w3(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var l=r[i];if(l.ownerNode===n)return l}throw Yr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),O8=function(){function e(t){this.element=w3(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),D8=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Bf=da,B8={isServer:!da,useCSSOMInjection:!m8},ha=function(){function e(t,n,r){t===void 0&&(t=Wi),n===void 0&&(n={});var i=this;this.options=st(st({},B8),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&da&&Bf&&(Bf=!1,Df(this)),Tp(this,function(){return function(s){for(var l=s.getTag(),a=l.length,c="",u=function(f){var h=function(x){return fa.get(x)}(f);if(h===void 0)return"continue";var g=s.names.get(h),w=l.getGroup(f);if(g===void 0||!g.size||w.length===0)return"continue";var v="".concat(Vi,".g").concat(f,'[id="').concat(h,'"]'),C="";g!==void 0&&g.forEach(function(x){x.length>0&&(C+="".concat(x,","))}),c+="".concat(w).concat(v,'{content:"').concat(C,'"}').concat(Ep)},p=0;p<a;p++)u(p);return c}(i)})}return e.registerId=function(t){return ji(t)},e.prototype.rehydrate=function(){!this.server&&da&&Df(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(st(st({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new D8(i):r?new N8(i):new O8(i)}(this.options),new I8(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ji(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ji(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ji(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),F8=/&/g,Si=47;function Ff(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,s=0;s<t;s++){var l=e.charCodeAt(s);if(r!==0||i||l!==Si||e.charCodeAt(s+1)!==42)if(i)l===42&&e.charCodeAt(s+1)===Si&&(i=!1,s++);else if(l!==34&&l!==39||s!==0&&e.charCodeAt(s-1)===92){if(r===0){if(l===123)n++;else if(l===125&&--n<0)return!0}}else r===0?r=l:r===l&&(r=0);else i=!0,s++}return n!==0||r!==0}function b3(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=b3(n.children,t)),n})}function H8(e){var t,n,r,i=Wi,s=i.options,l=s===void 0?Wi:s,a=i.plugins,c=a===void 0?Ya:a,u=function(h,g,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):h},p=c.slice();p.push(function(h){h.type===Ha&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(F8,n).replace(r,u))}),l.prefix&&p.push(h8),p.push(d8);var f=function(h,g,w,v){g===void 0&&(g=""),w===void 0&&(w=""),v===void 0&&(v="&"),t=v,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var C=function(L){if(!Ff(L))return L;for(var b=L.length,$="",k=0,S=0,M=0,R=!1,I=0;I<b;I++){var T=L.charCodeAt(I);if(M!==0||R||T!==Si||L.charCodeAt(I+1)!==42)if(R)T===42&&L.charCodeAt(I+1)===Si&&(R=!1,I++);else if(T!==34&&T!==39||I!==0&&L.charCodeAt(I-1)===92){if(M===0)if(T===123)S++;else if(T===125){if(--S<0){for(var E=I+1;E<b;){var N=L.charCodeAt(E);if(N===59||N===10)break;E++}E<b&&L.charCodeAt(E)===59&&E++,S=0,I=E-1,k=E;continue}S===0&&($+=L.substring(k,I+1),k=I+1)}else T===59&&S===0&&($+=L.substring(k,I+1),k=I+1)}else M===0?M=T:M===T&&(M=0);else R=!0,I++}if(k<b){var D=L.substring(k);Ff(D)||($+=D)}return $}(function(L){if(L.indexOf("//")===-1)return L;for(var b=L.length,$=[],k=0,S=0,M=0,R=0;S<b;){var I=L.charCodeAt(S);if(I!==34&&I!==39||S!==0&&L.charCodeAt(S-1)===92)if(M===0)if(I===40&&S>=3&&(32|L.charCodeAt(S-1))==108&&(32|L.charCodeAt(S-2))==114&&(32|L.charCodeAt(S-3))==117)R=1,S++;else if(R>0)I===41?R--:I===40&&R++,S++;else if(I===Si&&S+1<b&&L.charCodeAt(S+1)===Si){for(S>k&&$.push(L.substring(k,S));S<b&&L.charCodeAt(S)!==10;)S++;k=S}else S++;else S++;else M===0?M=I:M===I&&(M=0),S++}return k===0?L:(k<b&&$.push(L.substring(k)),$.join(""))}(h)),x=c8(w||g?"".concat(w," ").concat(g," { ").concat(C," }"):C);l.namespace&&(x=b3(x,l.namespace));var m=[];return ua(x,p8(p.concat(f8(function(L){return m.push(L)})))),m};return f.hash=c.length?c.reduce(function(h,g){return g.name||Yr(15),ki(h,g.name)},5381).toString():"",f}var U8=new ha,r1=H8(),i1={shouldForwardProp:void 0,styleSheet:U8,stylis:r1},k3=Pn?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(i1)}}:Ye.createContext(i1);k3.Consumer;Pn||Ye.createContext(void 0);function o1(){return Pn?i1:Ye.useContext(k3)}var j3=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=r1);var l=r.name+s.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,s(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Tp(this,function(){throw Yr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=r1),this.name+t.hash},e}();function V8(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in g8||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var W8=function(e){return e>="A"&&e<="Z"};function Hf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;W8(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var S3=function(e){return e==null||e===!1||e===""},C3=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!S3(r)&&(Array.isArray(r)&&r.isCss||Kr(r)?t.push("".concat(Hf(n),":"),r,";"):fs(r)?t.push.apply(t,Hi(Hi(["".concat(n," {")],C3(r),!1),["}"],!1)):t.push("".concat(Hf(n),": ").concat(V8(n,r),";")))}return t};function hr(e,t,n,r){if(S3(e))return[];if(Ip(e))return[".".concat(e.styledComponentId)];if(Kr(e)){if(!Kr(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return hr(i,t,n,r)}var s;return e instanceof j3?n?(e.inject(n,r),[e.getName(r)]):[e]:fs(e)?C3(e):Array.isArray(e)?Array.prototype.concat.apply(Ya,e.map(function(l){return hr(l,t,n,r)})):[e.toString()]}function $3(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Kr(n)&&!Ip(n))return!1}return!0}var K8=m3(Ka),Y8=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&$3(t),this.componentId=n,this.baseHash=ki(K8,n),this.baseStyle=r,ha.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=zr(i,this.staticRulesId);else{var s=pa(hr(this.rules,t,n,r)),l=t1(ki(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(s,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}i=zr(i,l),this.staticRulesId=l}else{for(var c=ki(this.baseHash,r.hash),u="",p=0;p<this.rules.length;p++){var f=this.rules[p];if(typeof f=="string")u+=f;else if(f){var h=pa(hr(f,t,n,r));c=ki(c,h+p),u+=h}}if(u){var g=t1(c>>>0);if(!n.hasNameForId(this.componentId,g)){var w=r(u,".".concat(g),void 0,this.componentId);n.insertRules(this.componentId,g,w)}i=zr(i,g)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(ji(this.componentId)):""}},e}(),hs=Pn?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(void 0)}}:Ye.createContext(void 0);hs.Consumer;function G8(e){if(Pn)return e.children;var t=Ye.useContext(hs),n=Ye.useMemo(function(){return function(r,i){if(!r)throw Yr(14);if(Kr(r)){var s=r(i);return s}if(Array.isArray(r)||typeof r!="object")throw Yr(8);return i?st(st({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?Ye.createElement(hs.Provider,{value:n},e.children):null}var Fc={};function Z8(e,t,n){var r=Ip(e),i=e,s=!Bc(e),l=t.attrs,a=l===void 0?Ya:l,c=t.componentId,u=c===void 0?function(b,$){var k=typeof b!="string"?"sc":zf(b);Fc[k]=(Fc[k]||0)+1;var S="".concat(k,"-").concat(Pp(Ka+k+Fc[k]));return $?"".concat($,"-").concat(S):S}(t.displayName,t.parentComponentId):c,p=t.displayName,f=p===void 0?function(b){return Bc(b)?"styled.".concat(b):"Styled(".concat(w8(b),")")}(e):p,h=t.displayName&&t.componentId?"".concat(zf(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,w=t.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var C=t.shouldForwardProp;w=function(b,$){return v(b,$)&&C(b,$)}}else w=v}var x=new Y8(n,h,r?i.componentStyle:void 0);function m(b,$){return function(k,S,M){var R=k.attrs,I=k.componentStyle,T=k.defaultProps,E=k.foldedComponentIds,N=k.styledComponentId,D=k.target,H=Pn?void 0:Ye.useContext(hs),_=o1(),z=k.shouldForwardProp||_.shouldForwardProp,A=h3(S,H,T)||Wi,O=function(ee,ae,ve){for(var fe,me=st(st({},ae),{className:void 0,theme:ve}),ke=0;ke<ee.length;ke+=1){var Ie=Kr(fe=ee[ke])?fe(me):fe;for(var De in Ie)De==="className"?me.className=zr(me.className,Ie[De]):De==="style"?me.style=st(st({},me.style),Ie[De]):me[De]=Ie[De]}return"className"in ae&&typeof ae.className=="string"&&(me.className=zr(me.className,ae.className)),me}(R,S,A),j=O.as||D,Z={};for(var Q in O)O[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"&&O.theme===A||(Q==="forwardedAs"?Z.as=O.forwardedAs:z&&!z(Q,j)||(Z[Q]=O[Q]));var P=function(ee,ae){var ve=o1(),fe=ee.generateAndInjectStyles(ae,ve.styleSheet,ve.stylis);return fe}(I,O),G=P.className,te=P.css,J=zr(E,N);G&&(J+=" "+G),O.className&&(J+=" "+O.className),Z[Bc(j)&&!g3.has(j)?"class":"className"]=J,M&&(Z.ref=M);var Y=y.createElement(j,Z);return Pn&&te?Ye.createElement(Ye.Fragment,null,Ye.createElement("style",{precedence:"styled-components",href:"sc-".concat(N,"-").concat(G),children:te}),Y):Y}(L,b,$)}m.displayName=f;var L=Ye.forwardRef(m);return L.attrs=g,L.componentStyle=x,L.displayName=f,L.shouldForwardProp=w,L.foldedComponentIds=r?zr(i.foldedComponentIds,i.styledComponentId):"",L.styledComponentId=h,L.target=r?i.target:e,Object.defineProperty(L,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=r?function($){for(var k=[],S=1;S<arguments.length;S++)k[S-1]=arguments[S];for(var M=0,R=k;M<R.length;M++)n1($,R[M],!0);return $}({},i.defaultProps,b):b}}),Tp(L,function(){return".".concat(L.styledComponentId)}),s&&v3(L,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),L}function Uf(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Vf=function(e){return Object.assign(e,{isCss:!0})};function _e(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Kr(e)||fs(e))return Vf(hr(Uf(Ya,Hi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?hr(r):Vf(hr(Uf(r,t)))}function s1(e,t,n){if(n===void 0&&(n=Wi),!t)throw Yr(1,t);var r=function(i){for(var s=[],l=1;l<arguments.length;l++)s[l-1]=arguments[l];return e(t,n,_e.apply(void 0,Hi([i],s,!1)))};return r.attrs=function(i){return s1(e,t,st(st({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return s1(e,t,st(st({},n),i))},r}var E3=function(e){return s1(Z8,e)},d=E3;g3.forEach(function(e){d[e]=E3(e)});var q8=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=$3(t),ha.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var s=i(pa(hr(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,s)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&ha.registerId(this.componentId+t);var s=this.componentId+t;this.isStatic?r.hasNameForId(s,s)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function Q8(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=_e.apply(void 0,Hi([e],t,!1)),i="sc-global-".concat(Pp(JSON.stringify(r))),s=new q8(r,i),l=new WeakMap,a=function(c){var u=o1(),p=Pn?void 0:Ye.useContext(hs),f=l.get(u.styleSheet);if(f===void 0&&(f=u.styleSheet.allocateGSInstance(i),l.set(u.styleSheet,f)),(typeof window>"u"||!u.styleSheet.server)&&function(C,x,m,L,b){if(s.isStatic)s.renderStyles(C,x8,m,b);else{var $=st(st({},x),{theme:h3(x,L,a.defaultProps)});s.renderStyles(C,$,m,b)}}(f,c,u.styleSheet,p,u.stylis),!Pn){var h=Ye.useRef(!0);Ye.useLayoutEffect(function(){return h.current=!1,function(){h.current=!0,queueMicrotask(function(){h.current&&(s.removeStyles(f,u.styleSheet),typeof document<"u"&&document.querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(C){return C.remove()}))})}},[f,u.styleSheet])}if(Pn){var g=i+f,w=typeof window>"u"?u.styleSheet.getTag().getGroup(ji(g)):"";if(w){var v="".concat(i,"-").concat(f);return Ye.createElement("style",{key:v,"data-styled-global":i,precedence:"styled-components",href:v,children:w})}}return null};return Ye.memo(a)}function Oe(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=pa(_e.apply(void 0,Hi([e],t,!1))),i=Pp(r);return new j3(i,r)}const X8={},Wf=e=>{let t;const n=new Set,r=(p,f)=>{const h=typeof p=="function"?p(t):p;if(!Object.is(h,t)){const g=t;t=f??(typeof h!="object"||h===null)?h:Object.assign({},t,h),n.forEach(w=>w(t,g))}},i=()=>t,c={setState:r,getState:i,getInitialState:()=>u,subscribe:p=>(n.add(p),()=>n.delete(p)),destroy:()=>{(X8?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,i,c);return c},J8=e=>e?Wf(e):Wf;var P3={exports:{}},I3={},T3={exports:{}},R3={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ki=y;function eL(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tL=typeof Object.is=="function"?Object.is:eL,nL=Ki.useState,rL=Ki.useEffect,iL=Ki.useLayoutEffect,oL=Ki.useDebugValue;function sL(e,t){var n=t(),r=nL({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return iL(function(){i.value=n,i.getSnapshot=t,Hc(i)&&s({inst:i})},[e,n,t]),rL(function(){return Hc(i)&&s({inst:i}),e(function(){Hc(i)&&s({inst:i})})},[e]),oL(n),n}function Hc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tL(e,n)}catch{return!0}}function lL(e,t){return t()}var aL=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?lL:sL;R3.useSyncExternalStore=Ki.useSyncExternalStore!==void 0?Ki.useSyncExternalStore:aL;T3.exports=R3;var cL=T3.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ga=y,uL=cL;function dL(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pL=typeof Object.is=="function"?Object.is:dL,fL=uL.useSyncExternalStore,hL=Ga.useRef,gL=Ga.useEffect,mL=Ga.useMemo,xL=Ga.useDebugValue;I3.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=hL(null);if(s.current===null){var l={hasValue:!1,value:null};s.current=l}else l=s.current;s=mL(function(){function c(g){if(!u){if(u=!0,p=g,g=r(g),i!==void 0&&l.hasValue){var w=l.value;if(i(w,g))return f=w}return f=g}if(w=f,pL(p,g))return w;var v=r(g);return i!==void 0&&i(w,v)?(p=g,w):(p=g,f=v)}var u=!1,p,f,h=n===void 0?null:n;return[function(){return c(t())},h===null?void 0:function(){return c(h())}]},[t,n,r,i]);var a=fL(e,s[0],s[1]);return gL(function(){l.hasValue=!0,l.value=a},[a]),xL(a),a};P3.exports=I3;var LL=P3.exports;const yL=Sa(LL),M3={},{useDebugValue:vL}=Ye,{useSyncExternalStoreWithSelector:wL}=yL;let Kf=!1;const bL=e=>e;function kL(e,t=bL,n){(M3?"production":void 0)!=="production"&&n&&!Kf&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Kf=!0);const r=wL(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return vL(r),r}const Yf=e=>{(M3?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?J8(e):e,n=(r,i)=>kL(t,r,i);return Object.assign(n,t),n},Ji=e=>e?Yf(e):Yf;function $e(){const e="http://localhost";if(String(e).trim()!=="")return String(e).replace(/\/$/,"")}function Rp(){const e=$e();if(!e)throw new Error("VITE_API_BASE_URL이 필요합니다. .env에 백엔드 주소를 설정하세요.");return e}let Uc=class extends Error{constructor(t,n){super(t),this.status=n,this.name="HttpError"}};class jL{constructor(t){this.baseUrl=t}url(t){return`${this.baseUrl}${t.startsWith("/")?t:`/${t}`}`}async findAll(){const t=await fetch(this.url("/experts"));if(!t.ok)throw new Uc("GET /experts 실패",t.status);return t.json()}async findById(t){const n=await fetch(this.url(`/experts/${encodeURIComponent(t)}`));if(n.status===404)return null;if(!n.ok)throw new Uc("GET /experts/:id 실패",n.status);return n.json()}async findByRegionId(t){const n=t==="all"?"":`?regionId=${encodeURIComponent(t)}`,r=await fetch(this.url(`/experts${n}`));if(!r.ok)throw new Uc("GET /experts?regionId 실패",r.status);return r.json()}}let Vc=null;function z3(){return Vc||(Vc=new jL(Rp())),Vc}const SL=()=>z3().findAll(),A3=e=>z3().findById(e);function gs(){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Seoul"}).format(new Date)}function Ml(e){return!!(e&&/^\d{4}-\d{2}-\d{2}$/.test(e))}function l1(e,t=gs()){var s,l;const n=e.kind??"program",r=(s=e.startDate)==null?void 0:s.trim(),i=(l=e.endDate)==null?void 0:l.trim();return n==="event"?Ml(r)&&Ml(i)?t>i?"past":"ongoing":e.status==="past"?"past":"ongoing":Ml(i)&&t>i?"past":"ongoing"}function CL(e){return(e??[]).map(t=>({...t,status:l1(t)}))}function Za(e){var t;return(t=e.programs)!=null&&t.length?{...e,programs:CL(e.programs)}:e}function $L(e,t=gs()){var r;if(e.status==="past")return"완료";const n=(r=e.startDate)==null?void 0:r.trim();return Ml(n)&&t<n?"예정":"진행 중"}function EL(e,t){const n=e==null?void 0:e.trim(),r=t==null?void 0:t.trim();return n&&r?n===r?n:`${n} ~ ${r}`:n?`${n} ~`:r?`~ ${r}`:null}function PL(e=gs()){const t=new Date(`${e}T12:00:00+09:00`),n=new Date(t);n.setDate(n.getDate()+6);const r=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Seoul"}).format(n);return{startDate:e,endDate:r}}function _3(e){return Za(e)}function Gf(e){return e.map(_3)}let Wc=class extends Error{constructor(t,n){super(t),this.status=n,this.name="HttpError"}};class IL{constructor(t){this.baseUrl=t}url(t){return`${this.baseUrl}${t.startsWith("/")?t:`/${t}`}`}async findAll(){const t=await fetch(this.url("/places"));if(!t.ok)throw new Wc("GET /places 실패",t.status);return Gf(await t.json())}async findById(t){const n=await fetch(this.url(`/places/${encodeURIComponent(t)}`));if(n.status===404)return null;if(!n.ok)throw new Wc("GET /places/:id 실패",n.status);return _3(await n.json())}async findByRegionId(t){const n=t==="all"?"":`?regionId=${encodeURIComponent(t)}`,r=await fetch(this.url(`/places${n}`));if(!r.ok)throw new Wc("GET /places?regionId 실패",r.status);return Gf(await r.json())}}let Kc=null;function N3(){return Kc||(Kc=new IL(Rp())),Kc}const TL=()=>N3().findAll(),O3=e=>N3().findById(e);class RL extends Error{constructor(t,n){super(t),this.status=n,this.name="HttpError"}}class ML{constructor(t){this.baseUrl=t}url(t){return`${this.baseUrl}${t.startsWith("/")?t:`/${t}`}`}async findAll(){const t=await fetch(this.url("/regions"));if(!t.ok)throw new RL("GET /regions 실패",t.status);return t.json()}}let Yc=null;function zL(){return Yc||(Yc=new ML(Rp())),Yc}const AL=()=>zL().findAll();async function Gc(e,t){try{return{ok:!0,value:await e()}}catch{return{ok:!1}}}const en=Ji(e=>({places:[],regions:[],experts:[],catalogReady:!1,catalogError:null,clearCatalogError:()=>e({catalogError:null}),hydrate:async()=>{if(!$e()){e({places:[],regions:[],experts:[],catalogReady:!0,catalogError:null});return}e({catalogReady:!1,catalogError:null});const[t,n,r]=await Promise.all([Gc(()=>TL()),Gc(()=>AL()),Gc(()=>SL())]),i=!t.ok||!n.ok||!r.ok;e({places:t.ok?t.value:[],regions:n.ok?n.value:[],experts:r.ok?r.value:[],catalogReady:!0,catalogError:i?"서버에서 정보를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.":null})}})),_L=d.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 16px;
  padding-top: calc(12px + env(safe-area-inset-top, 0px));
  background: ${({theme:e})=>e.colors.primary50};
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary200};
  color: ${({theme:e})=>e.colors.text900};
`,NL=d.p`
  margin: 0;
  flex: 1;
  min-width: 0;
  font-size: 0.92rem;
  line-height: 1.45;
`,OL=d.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,DL=d.button`
  padding: 6px 12px;
  font-size: 0.88rem;
  font-weight: 600;
  border-radius: ${({theme:e})=>e.radii.md};
  border: none;
  cursor: pointer;
  font-family: inherit;
  background: ${({theme:e})=>e.colors.primary600};
  color: #fff;

  &:hover {
    filter: brightness(1.05);
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary400};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`,BL=d.button`
  width: 36px;
  height: 36px;
  padding: 0;
  display: grid;
  place-items: center;
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  background: transparent;
  color: ${({theme:e})=>e.colors.text700};
  cursor: pointer;
  font-size: 1.35rem;
  line-height: 1;

  &:hover {
    background: rgba(0, 0, 0, 0.06);
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary400};
    outline-offset: 2px;
  }
`,FL=()=>{const e=en(i=>i.catalogError),t=en(i=>i.catalogReady),n=en(i=>i.clearCatalogError),r=en(i=>i.hydrate);return e?o.jsxs(_L,{role:"alert","aria-live":"assertive",children:[o.jsx(NL,{children:e}),o.jsxs(OL,{children:[o.jsx(DL,{type:"button",disabled:!t,onClick:()=>void r(),children:"다시 시도"}),o.jsx(BL,{type:"button",onClick:n,"aria-label":"오류 안내 닫기",children:"×"})]})]}):null};let HL=0;const Uo=Ji((e,t)=>({toasts:[],show:(n,r="info",i=3200)=>{if(!n)return;const s=++HL;e(l=>({toasts:[...l.toasts,{id:s,message:n,variant:r}]})),i>0&&setTimeout(()=>t().dismiss(s),i)},dismiss:n=>e(r=>({toasts:r.toasts.filter(i=>i.id!==n)}))})),ct={error:e=>Uo.getState().show(e,"error"),success:e=>Uo.getState().show(e,"success"),info:e=>Uo.getState().show(e,"info")},UL=Oe`
  from { opacity: 0; transform: translateY(-12px); }
  to { opacity: 1; transform: translateY(0); }
`,VL=d.div`
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: min(92vw, 380px);
  pointer-events: none;
`;function a1(e){return e==="error"?{bg:"rgba(127, 29, 29, 0.96)",border:"#b91c1c",icon:"⚠️"}:e==="success"?{bg:"rgba(6, 78, 59, 0.96)",border:"#059669",icon:"✓"}:{bg:"rgba(24, 24, 27, 0.96)",border:"#3f3f46",icon:"ℹ️"}}const WL=d.div`
  pointer-events: auto;
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 12px 14px;
  border-radius: 12px;
  font-size: 14px;
  line-height: 1.4;
  color: #fff;
  background: ${({$variant:e})=>a1(e).bg};
  border: 1px solid ${({$variant:e})=>a1(e).border};
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(8px);
  animation: ${UL} 0.22s ease;
  cursor: pointer;

  .toast-icon {
    flex-shrink: 0;
    font-size: 14px;
  }
  .toast-msg {
    flex: 1;
    word-break: break-word;
  }
`;function KL(){const e=Uo(n=>n.toasts),t=Uo(n=>n.dismiss);return e.length===0?null:o.jsx(VL,{"aria-live":"polite",children:e.map(n=>o.jsxs(WL,{$variant:n.variant,role:"alert",onClick:()=>t(n.id),children:[o.jsx("span",{className:"toast-icon",children:a1(n.variant).icon}),o.jsx("span",{className:"toast-msg",children:n.message})]},n.id))})}/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ms(){return ms=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ms.apply(this,arguments)}var Ar;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ar||(Ar={}));const Zf="popstate";function YL(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:l,hash:a}=r.location;return c1("",{pathname:s,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ga(i)}return ZL(t,n,null,e)}function rt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Mp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function GL(){return Math.random().toString(36).substr(2,8)}function qf(e,t){return{usr:e.state,key:e.key,idx:t}}function c1(e,t,n,r){return n===void 0&&(n=null),ms({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ks(t):t,{state:n,key:t&&t.key||r||GL()})}function ga(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ks(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ZL(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,l=i.history,a=Ar.Pop,c=null,u=p();u==null&&(u=0,l.replaceState(ms({},l.state,{idx:u}),""));function p(){return(l.state||{idx:null}).idx}function f(){a=Ar.Pop;let C=p(),x=C==null?null:C-u;u=C,c&&c({action:a,location:v.location,delta:x})}function h(C,x){a=Ar.Push;let m=c1(v.location,C,x);u=p()+1;let L=qf(m,u),b=v.createHref(m);try{l.pushState(L,"",b)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;i.location.assign(b)}s&&c&&c({action:a,location:v.location,delta:1})}function g(C,x){a=Ar.Replace;let m=c1(v.location,C,x);u=p();let L=qf(m,u),b=v.createHref(m);l.replaceState(L,"",b),s&&c&&c({action:a,location:v.location,delta:0})}function w(C){let x=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof C=="string"?C:ga(C);return m=m.replace(/ $/,"%20"),rt(x,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,x)}let v={get action(){return a},get location(){return e(i,l)},listen(C){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Zf,f),c=C,()=>{i.removeEventListener(Zf,f),c=null}},createHref(C){return t(i,C)},createURL:w,encodeLocation(C){let x=w(C);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:h,replace:g,go(C){return l.go(C)}};return v}var Qf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Qf||(Qf={}));function qL(e,t,n){return n===void 0&&(n="/"),QL(e,t,n)}function QL(e,t,n,r){let i=typeof t=="string"?ks(t):t,s=Yi(i.pathname||"/",n);if(s==null)return null;let l=D3(e);XL(l);let a=null;for(let c=0;a==null&&c<l.length;++c){let u=c9(s);a=l9(l[c],u)}return a}function D3(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,l,a)=>{let c={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:l,route:s};c.relativePath.startsWith("/")&&(rt(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=gr([r,c.relativePath]),p=n.concat(c);s.children&&s.children.length>0&&(rt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),D3(s.children,t,p,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:o9(u,s.index),routesMeta:p})};return e.forEach((s,l)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,l);else for(let c of B3(s.path))i(s,l,c)}),t}function B3(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let l=B3(r.join("/")),a=[];return a.push(...l.map(c=>c===""?s:[s,c].join("/"))),i&&a.push(...l),a.map(c=>e.startsWith("/")&&c===""?"/":c)}function XL(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:s9(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const JL=/^:[\w-]+$/,e9=3,t9=2,n9=1,r9=10,i9=-2,Xf=e=>e==="*";function o9(e,t){let n=e.split("/"),r=n.length;return n.some(Xf)&&(r+=i9),t&&(r+=t9),n.filter(i=>!Xf(i)).reduce((i,s)=>i+(JL.test(s)?e9:s===""?n9:r9),r)}function s9(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function l9(e,t,n){let{routesMeta:r}=e,i={},s="/",l=[];for(let a=0;a<r.length;++a){let c=r[a],u=a===r.length-1,p=s==="/"?t:t.slice(s.length)||"/",f=u1({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},p),h=c.route;if(!f)return null;Object.assign(i,f.params),l.push({params:i,pathname:gr([s,f.pathname]),pathnameBase:h9(gr([s,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(s=gr([s,f.pathnameBase]))}return l}function u1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=a9(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],l=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,p,f)=>{let{paramName:h,isOptional:g}=p;if(h==="*"){let v=a[f]||"";l=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const w=a[f];return g&&!w?u[h]=void 0:u[h]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:l,pattern:e}}function a9(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Mp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function c9(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Mp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Yi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const u9=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,d9=e=>u9.test(e);function p9(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ks(e):e,s;if(n)if(d9(n))s=n;else{if(n.includes("//")){let l=n;n=n.replace(/\/\/+/g,"/"),Mp(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?s=Jf(n.substring(1),"/"):s=Jf(n,t)}else s=t;return{pathname:s,search:g9(r),hash:m9(i)}}function Jf(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Zc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function f9(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function zp(e,t){let n=f9(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ap(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ks(e):(i=ms({},e),rt(!i.pathname||!i.pathname.includes("?"),Zc("?","pathname","search",i)),rt(!i.pathname||!i.pathname.includes("#"),Zc("#","pathname","hash",i)),rt(!i.search||!i.search.includes("#"),Zc("#","search","hash",i)));let s=e===""||i.pathname==="",l=s?"/":i.pathname,a;if(l==null)a=n;else{let f=t.length-1;if(!r&&l.startsWith("..")){let h=l.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}a=f>=0?t[f]:"/"}let c=p9(i,a),u=l&&l!=="/"&&l.endsWith("/"),p=(s||l===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||p)&&(c.pathname+="/"),c}const gr=e=>e.join("/").replace(/\/\/+/g,"/"),h9=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),g9=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,m9=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function x9(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const F3=["post","put","patch","delete"];new Set(F3);const L9=["get",...F3];new Set(L9);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ma(){return ma=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ma.apply(this,arguments)}const qa=y.createContext(null),H3=y.createContext(null),Yn=y.createContext(null),_p=y.createContext(null),Tn=y.createContext({outlet:null,matches:[],isDataRoute:!1}),U3=y.createContext(null);function y9(e,t){let{relative:n}=t===void 0?{}:t;eo()||rt(!1);let{basename:r,navigator:i}=y.useContext(Yn),{hash:s,pathname:l,search:a}=Qa(e,{relative:n}),c=l;return r!=="/"&&(c=l==="/"?r:gr([r,l])),i.createHref({pathname:c,search:a,hash:s})}function eo(){return y.useContext(_p)!=null}function Gn(){return eo()||rt(!1),y.useContext(_p).location}function V3(e){y.useContext(Yn).static||y.useLayoutEffect(e)}function yt(){let{isDataRoute:e}=y.useContext(Tn);return e?z9():v9()}function v9(){eo()||rt(!1);let e=y.useContext(qa),{basename:t,future:n,navigator:r}=y.useContext(Yn),{matches:i}=y.useContext(Tn),{pathname:s}=Gn(),l=JSON.stringify(zp(i,n.v7_relativeSplatPath)),a=y.useRef(!1);return V3(()=>{a.current=!0}),y.useCallback(function(u,p){if(p===void 0&&(p={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=Ap(u,JSON.parse(l),s,p.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:gr([t,f.pathname])),(p.replace?r.replace:r.push)(f,p.state,p)},[t,r,l,s,e])}const w9=y.createContext(null);function b9(e){let t=y.useContext(Tn).outlet;return t&&y.createElement(w9.Provider,{value:e},t)}function js(){let{matches:e}=y.useContext(Tn),t=e[e.length-1];return t?t.params:{}}function Qa(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=y.useContext(Yn),{matches:i}=y.useContext(Tn),{pathname:s}=Gn(),l=JSON.stringify(zp(i,r.v7_relativeSplatPath));return y.useMemo(()=>Ap(e,JSON.parse(l),s,n==="path"),[e,l,s,n])}function k9(e,t){return j9(e)}function j9(e,t,n,r){eo()||rt(!1);let{navigator:i}=y.useContext(Yn),{matches:s}=y.useContext(Tn),l=s[s.length-1],a=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let u=Gn(),p;p=u;let f=p.pathname||"/",h=f;if(c!=="/"){let v=c.replace(/^\//,"").split("/");h="/"+f.replace(/^\//,"").split("/").slice(v.length).join("/")}let g=qL(e,{pathname:h});return P9(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:gr([c,i.encodeLocation?i.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?c:gr([c,i.encodeLocation?i.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),s,n,r)}function S9(){let e=M9(),t=x9(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),n?y.createElement("pre",{style:i},n):null,null)}const C9=y.createElement(S9,null);class $9 extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?y.createElement(Tn.Provider,{value:this.props.routeContext},y.createElement(U3.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function E9(e){let{routeContext:t,match:n,children:r}=e,i=y.useContext(qa);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(Tn.Provider,{value:t},r)}function P9(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let p=l.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);p>=0||rt(!1),l=l.slice(0,Math.min(l.length,p+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<l.length;p++){let f=l[p];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=p),f.route.id){let{loaderData:h,errors:g}=n,w=f.route.loader&&h[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||w){c=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((p,f,h)=>{let g,w=!1,v=null,C=null;n&&(g=a&&f.route.id?a[f.route.id]:void 0,v=f.route.errorElement||C9,c&&(u<0&&h===0?(A9("route-fallback"),w=!0,C=null):u===h&&(w=!0,C=f.route.hydrateFallbackElement||null)));let x=t.concat(l.slice(0,h+1)),m=()=>{let L;return g?L=v:w?L=C:f.route.Component?L=y.createElement(f.route.Component,null):f.route.element?L=f.route.element:L=p,y.createElement(E9,{match:f,routeContext:{outlet:p,matches:x,isDataRoute:n!=null},children:L})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?y.createElement($9,{location:n.location,revalidation:n.revalidation,component:v,error:g,children:m(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):m()},null)}var W3=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(W3||{}),K3=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(K3||{});function I9(e){let t=y.useContext(qa);return t||rt(!1),t}function T9(e){let t=y.useContext(H3);return t||rt(!1),t}function R9(e){let t=y.useContext(Tn);return t||rt(!1),t}function Y3(e){let t=R9(),n=t.matches[t.matches.length-1];return n.route.id||rt(!1),n.route.id}function M9(){var e;let t=y.useContext(U3),n=T9(K3.UseRouteError),r=Y3();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function z9(){let{router:e}=I9(W3.UseNavigateStable),t=Y3(),n=y.useRef(!1);return V3(()=>{n.current=!0}),y.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ma({fromRouteId:t},s)))},[e,t])}const eh={};function A9(e,t,n){eh[e]||(eh[e]=!0)}function _9(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function N9(e){let{to:t,replace:n,state:r,relative:i}=e;eo()||rt(!1);let{future:s,static:l}=y.useContext(Yn),{matches:a}=y.useContext(Tn),{pathname:c}=Gn(),u=yt(),p=Ap(t,zp(a,s.v7_relativeSplatPath),c,i==="path"),f=JSON.stringify(p);return y.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:i}),[u,f,i,n,r]),null}function Np(e){return b9(e.context)}function O9(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ar.Pop,navigator:s,static:l=!1,future:a}=e;eo()&&rt(!1);let c=t.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:c,navigator:s,static:l,future:ma({v7_relativeSplatPath:!1},a)}),[c,a,s,l]);typeof r=="string"&&(r=ks(r));let{pathname:p="/",search:f="",hash:h="",state:g=null,key:w="default"}=r,v=y.useMemo(()=>{let C=Yi(p,c);return C==null?null:{location:{pathname:C,search:f,hash:h,state:g,key:w},navigationType:i}},[c,p,f,h,g,w,i]);return v==null?null:y.createElement(Yn.Provider,{value:u},y.createElement(_p.Provider,{children:n,value:v}))}new Promise(()=>{});/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xa(){return xa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xa.apply(this,arguments)}function G3(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function D9(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function B9(e,t){return e.button===0&&(!t||t==="_self")&&!D9(e)}function d1(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function F9(e,t){let n=d1(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(s=>{n.append(i,s)})}),n}const H9=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],U9=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],V9="6";try{window.__reactRouterVersion=V9}catch{}const W9=y.createContext({isTransitioning:!1}),K9="startTransition",th=D5[K9];function Y9(e){let{basename:t,children:n,future:r,window:i}=e,s=y.useRef();s.current==null&&(s.current=YL({window:i,v5Compat:!0}));let l=s.current,[a,c]=y.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},p=y.useCallback(f=>{u&&th?th(()=>c(f)):c(f)},[c,u]);return y.useLayoutEffect(()=>l.listen(p),[l,p]),y.useEffect(()=>_9(r),[r]),y.createElement(O9,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}const G9=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Z9=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,to=y.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:l,state:a,target:c,to:u,preventScrollReset:p,viewTransition:f}=t,h=G3(t,H9),{basename:g}=y.useContext(Yn),w,v=!1;if(typeof u=="string"&&Z9.test(u)&&(w=u,G9))try{let L=new URL(window.location.href),b=u.startsWith("//")?new URL(L.protocol+u):new URL(u),$=Yi(b.pathname,g);b.origin===L.origin&&$!=null?u=$+b.search+b.hash:v=!0}catch{}let C=y9(u,{relative:i}),x=Q9(u,{replace:l,state:a,target:c,preventScrollReset:p,relative:i,viewTransition:f});function m(L){r&&r(L),L.defaultPrevented||x(L)}return y.createElement("a",xa({},h,{href:w||C,onClick:v||s?r:m,ref:n,target:c}))}),Z3=y.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:l=!1,style:a,to:c,viewTransition:u,children:p}=t,f=G3(t,U9),h=Qa(c,{relative:f.relative}),g=Gn(),w=y.useContext(H3),{navigator:v,basename:C}=y.useContext(Yn),x=w!=null&&X9(h)&&u===!0,m=v.encodeLocation?v.encodeLocation(h).pathname:h.pathname,L=g.pathname,b=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;i||(L=L.toLowerCase(),b=b?b.toLowerCase():null,m=m.toLowerCase()),b&&C&&(b=Yi(b,C)||b);const $=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let k=L===m||!l&&L.startsWith(m)&&L.charAt($)==="/",S=b!=null&&(b===m||!l&&b.startsWith(m)&&b.charAt(m.length)==="/"),M={isActive:k,isPending:S,isTransitioning:x},R=k?r:void 0,I;typeof s=="function"?I=s(M):I=[s,k?"active":null,S?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let T=typeof a=="function"?a(M):a;return y.createElement(to,xa({},f,{"aria-current":R,className:I,ref:n,style:T,to:c,viewTransition:u}),typeof p=="function"?p(M):p)});var p1;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(p1||(p1={}));var nh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(nh||(nh={}));function q9(e){let t=y.useContext(qa);return t||rt(!1),t}function Q9(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:l,viewTransition:a}=t===void 0?{}:t,c=yt(),u=Gn(),p=Qa(e,{relative:l});return y.useCallback(f=>{if(B9(f,n)){f.preventDefault();let h=r!==void 0?r:ga(u)===ga(p);c(e,{replace:h,state:i,preventScrollReset:s,relative:l,viewTransition:a})}},[u,c,p,r,i,n,e,s,l,a])}function q3(e){let t=y.useRef(d1(e)),n=y.useRef(!1),r=Gn(),i=y.useMemo(()=>F9(r.search,n.current?null:t.current),[r.search]),s=yt(),l=y.useCallback((a,c)=>{const u=d1(typeof a=="function"?a(i):a);n.current=!0,s("?"+u,c)},[s,i]);return[i,l]}function X9(e,t){t===void 0&&(t={});let n=y.useContext(W9);n==null&&rt(!1);let{basename:r}=q9(p1.useViewTransitionState),i=Qa(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=Yi(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=Yi(n.nextLocation.pathname,r)||n.nextLocation.pathname;return u1(i.pathname,l)!=null||u1(i.pathname,s)!=null}const zl="/assets/logo-CsQHSiKo.png",J9=d.header`
  position: relative;
  padding-top: calc(16px + env(safe-area-inset-top, 0px));
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
  background: ${({theme:e})=>e.colors.warmCream};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding-left: 12px;
    padding-right: 12px;
  }
`,ey=d(to)`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: 2px;
    border-radius: ${({theme:e})=>e.radii.md};
  }
`,ty=d.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
`,ny=d.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`,ry=d.h1`
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.colors.primary600};
  margin: 0;
  line-height: 1.3;
`,iy=d.p`
  font-size: 0.8rem;
  color: ${({theme:e})=>e.colors.primary400};
  margin: 2px 0 0;
`,oy=d.div`
  width: 48px;
  flex-shrink: 0;
`,sy=()=>o.jsxs(J9,{children:[o.jsx(ey,{to:"/",children:o.jsx(ty,{src:zl,alt:"명상 지도 로고"})}),o.jsxs(ny,{children:[o.jsx(ry,{children:"명상 지도"}),o.jsx(iy,{children:"국내 명상지를 찾아보세요"})]}),o.jsx(oy,{})]}),ly=d.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: calc(56px + env(safe-area-inset-bottom, 0px));
  padding-bottom: env(safe-area-inset-bottom, 0px);
  background: ${({theme:e})=>e.colors.warmCream};
  border-top: 1px solid ${({theme:e})=>e.colors.primary200};
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 100;
`,qc=d(Z3)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  text-decoration: none;
  color: ${({theme:e})=>e.colors.text700};
  font-size: 0.75rem;
  transition: color 0.2s ease;

  &.active {
    color: ${({theme:e})=>e.colors.primary600};
    font-weight: 600;
  }

  &.active svg {
    stroke: ${({theme:e})=>e.colors.primary600};
  }

  svg {
    width: 24px;
    height: 24px;
  }
`,ay=d(to)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  text-decoration: none;
  color: ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.text700};
  font-size: 0.75rem;
  font-weight: ${({$active:e})=>e?600:400};
  transition: color 0.2s ease;

  svg {
    width: 24px;
    height: 24px;
    stroke: ${({theme:e,$active:t})=>t?e.colors.primary600:"currentColor"};
  }
`,cy=()=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),o.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),uy=()=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),o.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"}),o.jsx("line",{x1:"8",y1:"6",x2:"16",y2:"6"}),o.jsx("line",{x1:"8",y1:"10",x2:"16",y2:"10"})]}),dy=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),py=()=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),o.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),fy=()=>{const{pathname:e}=Gn(),t=e.startsWith("/meditation/map")||e.startsWith("/meditation/region")||e.startsWith("/blog");return o.jsxs(ly,{role:"navigation","aria-label":"하단 메뉴",children:[o.jsxs(qc,{to:"/",end:!0,children:[o.jsx(cy,{}),o.jsx("span",{children:"홈"})]}),o.jsxs(ay,{to:"/meditation/map",$active:t,children:[o.jsx(uy,{}),o.jsx("span",{children:"지도"})]}),o.jsxs(qc,{to:"/favorites",children:[o.jsx(dy,{}),o.jsx("span",{children:"찜"})]}),o.jsxs(qc,{to:"/profile",children:[o.jsx(py,{}),o.jsx("span",{children:"마이"})]})]})},hy=d.div`
  min-height: 100vh;
  background: ${({theme:e})=>e.colors.warmCream};
`,gy=d.main`
  padding: 0 20px calc(56px + env(safe-area-inset-bottom, 0px) + 24px);
  background: ${({theme:e})=>e.colors.warmCream};

  @media (max-width: 768px) {
    padding: 0 12px calc(56px + env(safe-area-inset-bottom, 0px) + 24px);
  }
`,my=()=>{const{pathname:e}=Gn(),t=e==="/"||e==="/meditation";return o.jsxs(hy,{children:[t&&o.jsx(sy,{}),o.jsx(gy,{children:o.jsx(Np,{})}),o.jsx(fy,{})]})},xy=d.div`
  background: ${({theme:e})=>e.colors.white};
  padding: 20px;
  border-radius: ${({theme:e})=>e.radii.lg};
  box-shadow: ${({theme:e})=>e.shadow.soft};
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid ${({theme:e})=>e.colors.primary100};
`,Ys=d.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Gs=d.span`
  font-size: 1.1rem;
  font-weight: 600;
`,Ly=d.select`
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid ${({theme:e})=>e.colors.border200};
  font-size: 1.1rem;
`,rh=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,ih=d.button`
  border-radius: ${({theme:e})=>e.radii.pill};
  border: 1px solid
    ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.border200};
  padding: 6px 12px;
  font-size: 1rem;
  background: ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.white};
  color: ${({$active:e})=>e?"#fff":"inherit"};
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: 2px;
  }
`,yy=d.button`
  margin-top: 8px;
  border: none;
  background: ${({theme:e})=>e.colors.bg100};
  padding: 10px 12px;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: 2px;
  }
`,vy=d.input`
  width: 100%;
  padding: 11px 14px;
  border-radius: 10px;
  border: 1px solid ${({theme:e})=>e.colors.border200};
  font-size: 1rem;
  outline: none;
  color: ${({theme:e})=>e.colors.text900};

  &:focus {
    border-color: ${({theme:e})=>e.colors.primary400};
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.primary100};
  }

  &::placeholder {
    color: ${({theme:e})=>e.colors.text700};
    opacity: 0.85;
  }
`,wy=d.span`
  font-size: 0.88rem;
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.4;
`,La=({filters:e,availableTags:t,onChangeKeyword:n,onChangeCategory:r,onToggleTag:i,onChangeSortBy:s,onReset:l})=>{const a=[{label:"전체",value:"all"},{label:"템플스테이",value:"템플스테이"},{label:"명상센터",value:"명상센터"},{label:"프리랜서(공간없음)",value:"프리랜서(공간없음)"},{label:"힐링명상",value:"힐링명상"},{label:"기타",value:"기타"}];return o.jsxs(xy,{children:[o.jsxs(Ys,{children:[o.jsx(Gs,{children:"검색"}),o.jsx(vy,{type:"search",enterKeyHint:"search",autoComplete:"off",placeholder:"이름, 주소, 기관명, 태그, 소개글…",value:e.keyword,onChange:c=>n(c.target.value),"aria-label":"검색어"}),o.jsx(wy,{children:"띄어쓰기로 여러 단어를 넣으면 모두 포함되는 장소만 보여요."})]}),o.jsxs(Ys,{children:[o.jsx(Gs,{children:"카테고리"}),o.jsx(rh,{children:a.map(c=>o.jsx(ih,{type:"button",$active:e.category===c.value,onClick:()=>r(c.value),children:c.label},c.value))})]}),o.jsxs(Ys,{children:[o.jsx(Gs,{children:"해시태그"}),o.jsx(rh,{children:t.map(c=>o.jsxs(ih,{type:"button",$active:e.tags.includes(c),onClick:()=>i(c),children:["#",c]},c))})]}),o.jsxs(Ys,{children:[o.jsx(Gs,{children:"정렬"}),o.jsxs(Ly,{value:e.sortBy,onChange:c=>s(c.target.value),children:[o.jsx("option",{value:"recommend",children:"추천순"}),o.jsx("option",{value:"name",children:"이름순"})]})]}),o.jsx(yy,{type:"button",onClick:l,children:"필터 초기화"})]})},by=d.form`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.primary200};
  padding: 12px 44px 12px 16px;
  border-radius: ${({theme:e})=>e.radii.pill};
  box-shadow: 0 2px 8px rgba(75, 0, 130, 0.06);
  transition: width 0.35s ease, max-width 0.35s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  ${({$layout:e})=>e==="main"?_e`
          width: 75%;
          max-width: 420px;
          margin-bottom: 20px;

          &:focus-within {
            width: 100%;
            max-width: 100%;
            border-color: ${({theme:t})=>t.colors.primary400};
            box-shadow: 0 4px 16px rgba(75, 0, 130, 0.12);
          }
        `:_e`
          width: 100%;
          max-width: 100%;
          margin-bottom: 16px;

          &:focus-within {
            border-color: ${({theme:t})=>t.colors.primary400};
            box-shadow: 0 4px 16px rgba(75, 0, 130, 0.1);
          }
        `}
`,ky=d.span`
  color: ${({theme:e})=>e.colors.primary600};
  display: grid;
  place-items: center;
  flex-shrink: 0;

  svg {
    width: 18px;
    height: 18px;
  }
`,jy=d.input`
  flex: 1;
  min-width: 0;
  border: none;
  background: transparent;
  font-size: 1.05rem;
  outline: none;
  color: ${({theme:e})=>e.colors.text900};

  /* type="search" 시 WebKit 기본 X — 커스텀 ClearButton 과 중복 제거 */
  &::-webkit-search-cancel-button,
  &::-webkit-search-decoration {
    -webkit-appearance: none;
    appearance: none;
  }
  &::-ms-clear {
    display: none;
  }

  &::placeholder {
    color: ${({theme:e})=>e.colors.text700};
    opacity: 0.85;
  }
`,Sy=d.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 28px;
  height: 28px;
  padding: 0;
  border: none;
  background: transparent;
  color: ${({theme:e})=>e.colors.text700};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({theme:e})=>e.radii.pill};

  &:hover {
    background: ${({theme:e})=>e.colors.primary50};
    color: ${({theme:e})=>e.colors.text900};
  }
`,Al=({value:e,onChange:t,placeholder:n,layout:r="region",id:i,"aria-label":s})=>{const l=a=>{a.preventDefault()};return o.jsxs(by,{$layout:r,onSubmit:l,children:[o.jsx(ky,{"aria-hidden":!0,children:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("circle",{cx:"11",cy:"11",r:"7"}),o.jsx("line",{x1:"16.65",y1:"16.65",x2:"21",y2:"21"})]})}),o.jsx(jy,{id:i,type:"search",enterKeyHint:"search",autoComplete:"off",placeholder:n,value:e,onChange:a=>t(a.target.value),"aria-label":s??"검색어"}),e?o.jsx(Sy,{type:"button",onClick:()=>t(""),"aria-label":"검색어 삭제",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"18",height:"18",children:o.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})}):null]})},Cy=480,$y=360,Ey=128;function Op(e,t){try{const n=new URL(e);return n.hostname.includes("images.unsplash.com")?(n.searchParams.set("w",String(t)),n.searchParams.set("q","70"),n.searchParams.has("auto")||n.searchParams.set("auto","format"),n.searchParams.has("fit")||n.searchParams.set("fit","crop"),n.toString()):e}catch{return e}}function Q3(e){if(e==null||!String(e).trim())return"";const t=String(e).trim();return Op(t,Cy)}function Py(e){if(e==null||!String(e).trim())return"";const t=String(e).trim();return Op(t,$y)}function Iy(e){if(e==null||!String(e).trim())return"";const t=String(e).trim();return Op(t,Ey)}const ya=[{id:"KR-11",minLat:37.41,maxLat:37.7,minLng:126.75,maxLng:127.2},{id:"KR-50",minLat:36.4,maxLat:36.62,minLng:127.18,maxLng:127.32},{id:"KR-30",minLat:36.2,maxLat:36.55,minLng:127.2,maxLng:127.55},{id:"KR-27",minLat:35.7,maxLat:36.04,minLng:128.2,maxLng:128.78},{id:"KR-26",minLat:34.88,maxLat:35.32,minLng:128.8,maxLng:129.3},{id:"KR-31",minLat:35.38,maxLat:35.78,minLng:128.9,maxLng:129.5},{id:"KR-29",minLat:35,maxLat:35.3,minLng:126.5,maxLng:127},{id:"KR-28",minLat:37.2,maxLat:37.7,minLng:126.2,maxLng:126.9},{id:"KR-49",minLat:33,maxLat:33.6,minLng:126,maxLng:127},{id:"KR-41",minLat:36.9,maxLat:38,minLng:126.5,maxLng:127.5},{id:"KR-42",minLat:37,maxLat:38.5,minLng:127,maxLng:131},{id:"KR-43",minLat:36,maxLat:37.1,minLng:127,maxLng:128.4},{id:"KR-44",minLat:35.7,maxLat:36.6,minLng:125.5,maxLng:127.1},{id:"KR-45",minLat:35,maxLat:36,minLng:126.4,maxLng:128},{id:"KR-46",minLat:33,maxLat:35.2,minLng:125,maxLng:128},{id:"KR-47",minLat:35.5,maxLat:38,minLng:127,maxLng:130},{id:"KR-48",minLat:34.4,maxLat:35.5,minLng:127.4,maxLng:130}],Ty=(e,t)=>{if(!Number.isFinite(e)||!Number.isFinite(t)||e<32.5||e>38.8||t<123||t>132)return null;for(const n of ya)if(e>=n.minLat&&e<=n.maxLat&&t>=n.minLng&&t<=n.maxLng)return n.id;return null},Ry={id:"all",name:"전체",slug:"all"},Wn=e=>e==="all"?Ry:en.getState().regions.find(t=>t.id===e),My=(e,t=8)=>[...e].sort((n,r)=>{const i=(r.viewCount??0)-(n.viewCount??0);return i!==0?i:String(n.id).localeCompare(String(r.id))}).slice(0,t),X3=e=>{const t=new Set;return e.forEach(n=>{n.hashtags.forEach(r=>t.add(r))}),Array.from(t).filter(n=>n!=="템플스테이").sort()},zy=e=>e.hashtags.some(t=>/프리랜서|코칭|개인지도|1:1/.test(t))?"프리랜서(공간없음)":e.hasTempleStay?"템플스테이":e.hashtags.includes("요가")||e.name.includes("요가")?"요가센터":"명상센터",va=(e,t)=>e.filter(n=>{var r;if(t.category&&t.category!=="all"){const i=zy(n);if(t.category==="힐링명상"){if(i==="요가센터")return!1}else if(i!==t.category)return!1}if(t.tags.length>0&&!t.tags.some(s=>[...n.hashtags,...n.themes].includes(s)))return!1;if(t.keyword.trim().length>0){const i=t.keyword.trim().toLowerCase().split(/\s+/).filter(u=>u.length>0),s=(n.detailSections??[]).map(u=>`${u.title} ${u.body}`).join(" "),l=(n.programs??[]).map(u=>u.title).join(" "),a=[n.name,n.shortDescription,n.description,n.address,(r=n.organization)==null?void 0:r.name,n.duration,n.admissionFee,n.venueKind,l,...n.hashtags,...n.themes,s].filter(Boolean).join(" ").toLowerCase();if(!i.every(u=>a.includes(u)))return!1}return!0}),J3=(e,t)=>t==="name"?[...e].sort((n,r)=>n.name.localeCompare(r.name,"ko")):e,Ay=["meditation-access-token","meditation-user-email","meditation-user-role"];function oh(){if(!(typeof window>"u"))for(const e of Ay)localStorage.removeItem(e),document.cookie=`${e}=; path=/; max-age=0; SameSite=Lax`}const _y=new Set(["ADMIN","DEV","EMPLOYEE"]),sh="__http_only_cookie_session__",Xt=Ji((e,t)=>({accessToken:null,email:null,role:null,authReady:!1,bootstrapAuth:async()=>{oh();const n=$e();if(!n){e({accessToken:null,email:null,role:null,authReady:!0});return}try{const r=await fetch(`${n}/me`,{credentials:"include"});if(r.ok){const i=await r.json(),s=i.email??i.username??"",l=i.role??"MEMBER";e({accessToken:sh,email:s||null,role:l,authReady:!0});return}}catch{}e({accessToken:null,email:null,role:null,authReady:!0})},setSession:async()=>{e({accessToken:sh,email:null,role:null,authReady:!1}),await t().bootstrapAuth()},logout:async()=>{const n=$e();if(n)try{await fetch(`${n}/auth/logout`,{method:"POST",credentials:"include"})}catch{}oh(),e({accessToken:null,email:null,role:null,authReady:!0})},isStaff:()=>_y.has(t().role??""),isAuthenticated:()=>!!t().accessToken,authHeader:()=>{}}));async function he(e,t={}){const n=$e();if(!n)throw new Error("VITE_API_BASE_URL 미설정");const r=new Headers(t.headers);t.body&&!r.has("Content-Type")&&!(t.body instanceof FormData)&&r.set("Content-Type","application/json");const i=e.startsWith("/")?`${n}${e}`:`${n}/${e}`;return fetch(i,{...t,headers:r,credentials:"include"})}const ex="meditation-favorites",Ny=()=>{if(typeof window>"u")return[];try{const e=localStorage.getItem(ex);if(!e)return[];const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}},Zs=e=>{if(!(typeof window>"u"))try{localStorage.setItem(ex,JSON.stringify(e))}catch{}},Or=Ji((e,t)=>({favorites:Ny(),replaceAll:n=>{const r=[...new Set(n)];Zs(r),e({favorites:r})},pullFromServer:async()=>{if(!(!$e()||!Xt.getState().isAuthenticated()))try{const n=await he("/me/favorites");if(!n.ok)return;const r=await n.json(),i=Array.isArray(r.placeIds)?r.placeIds:[];Zs(i),e({favorites:i})}catch{}},pushToServer:async n=>{if(!(!$e()||!Xt.getState().isAuthenticated()))try{const r=await he("/me/favorites",{method:"PUT",body:JSON.stringify({placeIds:n})});if(!r.ok)return;const i=await r.json(),s=Array.isArray(i.placeIds)?i.placeIds:n;Zs(s),e({favorites:s})}catch{}},toggleFavorite:n=>{const r=t(),s=r.favorites.includes(n)?r.favorites.filter(l=>l!==n):[...r.favorites,n];Zs(s),e({favorites:s}),$e()&&Xt.getState().isAuthenticated()&&t().pushToServer(s)},isFavorite:n=>t().favorites.includes(n)})),Oy=d.button`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${({theme:e,$active:t})=>t?"#e11d48":e.colors.text900};
  transition: color 0.35s ease;

  &:hover {
    color: #e11d48;
    background: transparent;
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: 2px;
  }
`,Dy=d.span`
  position: relative;
  display: inline-flex;
  width: 19px;
  height: 19px;
`,By=d.svg`
  position: absolute;
  inset: 0;
  width: 19px;
  height: 19px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  overflow: visible;
`,Fy=d.svg`
  position: absolute;
  inset: 0;
  width: 19px;
  height: 19px;
  fill: currentColor;
  stroke: none;
  pointer-events: none;
  opacity: ${({$active:e})=>e?1:0};
  transition: opacity 0.35s ease;
`,lh="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",Xa=({placeId:e})=>{const{isFavorite:t,toggleFavorite:n}=Or(),r=t(e),i=s=>{s.preventDefault(),s.stopPropagation(),n(e)};return o.jsx(Oy,{type:"button",$active:r,onClick:i,"aria-label":r?"찜 해제":"찜하기",children:o.jsxs(Dy,{children:[o.jsx(By,{viewBox:"0 0 24 24",children:o.jsx("path",{d:lh})}),o.jsx(Fy,{viewBox:"0 0 24 24",$active:r,children:o.jsx("path",{d:lh})})]})})},Hy=d.div`
  flex-shrink: 0;
  width: 200px;
  position: relative;
`,Uy=d(to)`
  display: block;
  width: 100%;
  background: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.radii.lg};
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  box-shadow: ${({theme:e})=>e.shadow.soft};
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(75, 0, 130, 0.16);
  }
`,Vy=d.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  z-index: 2;
`,Wy=d.div`
  width: 100%;
  height: 120px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Ky=d.div`
  padding: 12px;
`,Yy=d.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 6px;
  color: ${({theme:e})=>e.colors.text900};
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Gy=d.span`
  font-size: 0.85rem;
  color: ${({theme:e})=>e.colors.text700};
`,Zy=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 6px;
`,qy=d.span`
  display: inline-block;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.primary600};
  background: ${({theme:e})=>e.colors.primary50};
  padding: 2px 8px;
  border-radius: ${({theme:e})=>e.radii.pill};
`,Qy=({place:e})=>{const t=Wn(e.regionId);return o.jsxs(Hy,{children:[o.jsx(Vy,{children:o.jsx(Xa,{placeId:e.id})}),o.jsxs(Uy,{to:`/meditation/place/${e.id}`,children:[o.jsx(Wy,{children:o.jsx("img",{src:Q3(e.thumbnailUrl),alt:`${e.name} 썸네일`,loading:"lazy",decoding:"async",sizes:"200px"})}),o.jsxs(Ky,{children:[o.jsx(Yy,{children:e.name}),o.jsx(Gy,{children:(t==null?void 0:t.name)??e.regionId}),e.hashtags&&e.hashtags.length>0&&o.jsx(Zy,{children:e.hashtags.slice(0,2).map(n=>o.jsx(qy,{children:n},n))})]})]})]})},Xy=d.article`
  background: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.radii.lg};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadow.soft};
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 36px rgba(75, 0, 130, 0.15);
  }
`,Jy=d(to)`
  display: block;
  text-decoration: none;
  color: inherit;

  @media (min-width: 961px) {
    display: flex;
  }
`,ev=d.div`
  width: 100%;
  height: 180px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 961px) {
    flex-shrink: 0;
    width: 220px;
    height: 160px;
  }
`,tv=d.div`
  padding: 16px 18px;

  @media (min-width: 961px) {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
  }
`,nv=d.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 10px;
  color: ${({theme:e})=>e.colors.text900};
`,rv=d.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 12px;
  margin-bottom: 10px;
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.text700};
`,iv=d.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,ov=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  flex: 1;
  min-width: 0;
  font-size: 0.85rem;

  span {
    border: 1px solid ${({theme:e})=>e.colors.primary200};
    background: ${({theme:e})=>e.colors.primary50};
    color: ${({theme:e})=>e.colors.primary700};
    padding: 4px 10px;
    border-radius: ${({theme:e})=>e.radii.pill};
  }
`,sv=d.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,lv=d.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,Vo=({place:e})=>{const t=Wn(e.regionId);return o.jsx(Xy,{children:o.jsxs(Jy,{to:`/meditation/place/${e.id}`,children:[o.jsx(ev,{children:o.jsx("img",{src:Q3(e.thumbnailUrl),alt:`${e.name} 썸네일`,loading:"lazy",decoding:"async",sizes:"(min-width: 961px) 220px, 100vw"})}),o.jsxs(tv,{children:[o.jsx(nv,{children:e.name}),o.jsx(rv,{children:o.jsxs(iv,{children:[o.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),(t==null?void 0:t.name)??e.regionId]})}),o.jsxs(sv,{children:[o.jsx(ov,{children:e.hashtags.slice(0,4).map(n=>o.jsx("span",{children:n},n))}),o.jsx(lv,{children:o.jsx(Xa,{placeId:e.id})})]})]})]})})},av=`<svg width="386" height="630" viewBox="0 0 386 630" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="KR-11" class="land" d="M133.184 127.727L136.984 131.544L137.744 136.937L138.871 137.365L141.281 136.115L144.374 141.934L146.181 141.211L149.772 141.605L153.939 139.303L157.004 139.008L157.686 141.934L161.329 139.862L164.315 139.6L165.994 138.023L165.967 136.872L167.225 136.576L168.509 134.866L167.33 133.78L167.723 131.281L170.918 129.142L169.478 125.587L164.683 127.76L163.136 127.332L164.551 121.998L162.481 117.288L162.375 112.772L160.281 111.487L155.328 111.289L153.152 112.806L151.527 115.575L151.45 118.573L150.348 119.364L145.212 119.759L143.588 124.271L139.971 125.883L134.913 122.69L132.739 126.147L133.184 127.727Z" fill="#CCCCCC" stroke="white" stroke-width="0.5"/>
<path id="KR-26" class="land" d="M361.096 381.752L361.14 382.514H365.106L366.443 383.852L367.446 385.523L367.279 387.029L365.778 388.117L364.939 393.135L363.079 394.125L364.679 394.317L364.992 395.946L363.577 398.979L362.606 398.468L362.003 399.873L362.79 401.246L362.239 402.97L359.907 403.641L359.331 405.843L358.203 406.546L356.553 405.939L355.268 406.864L353.618 405.78L353.722 406.578L352.098 406.801L351.495 408.875L352.517 409.033L353.04 410.533L352.909 413.148L351.731 412.51L349.818 412.829L349.502 412.445L347.564 412.19L347.774 410.213L347.066 409.766L345.284 411.074L343.581 413.753L343.371 415.538L342.559 415.635L343.239 417.069L342.533 418.215L341.432 414.646L340.358 414.836L341.274 418.692L340.332 419.108L340.174 417.641L339.206 417.29L339.414 418.947L338.26 418.819L338.944 419.743L337.765 420.572L337.869 418.819L337.137 418.437L336.324 415.123L336.875 412.094L334.805 414.517L334.727 411.648L332.76 415.251H331.111L332.132 410.724L331.082 410.342L330.113 415.251L325.684 414.741L324.191 413.115L321.256 415.284L320.496 414.39L322.329 412.861L321.071 413.051L321.385 410.732L328.3 408.123L328.729 403.124L331.016 402.837L334.873 400.409L339.016 400.266L343.07 395.333L347.013 392.857L348.846 393.173L352.446 386.548L357.304 385.977L357.876 384.119L360.819 381.414L361.096 381.752ZM346.621 412.573L348.481 414.168L348.193 415.794L350.132 417.42L349.633 418.503H348.742L348.271 417.323L347.642 417.58L347.065 416.304L343.947 414.009L346.621 412.573Z" fill="#CCCCCC" stroke="white" stroke-width="0.5"/>
<path id="KR-27" class="land" d="M297.086 350.447L295.773 354.706L294.427 355.622L292.012 354.732L290.492 355.107L287.008 357.599L284.6 357.658L283.867 354.237L279.819 349.254L280.13 346.452L283.556 348.32H285.735L286.358 345.829L283.245 342.403L284.49 339.289L285.735 336.487L291.03 335.553L290.718 333.684L287.916 331.503L283.245 331.193L284.801 325.276L286.981 322.162L291.03 320.292L291.652 325.899H294.144L297.569 317.801L303.486 316.556L306.289 313.442L309.715 312.507L312.828 312.819L316.564 315.933L317.188 323.407L319.057 327.455L318.122 329.636L314.697 330.88L313.141 334.306V337.42L310.649 337.732V339.601L311.895 341.158V345.206L308.469 346.452L306.912 348.32L304.109 348.008L303.486 345.206H300.372L298.192 346.452L296.635 348.943L297.086 350.447Z" fill="#CCCCCC" stroke="white" stroke-width="0.5"/>
<path id="KR-28" class="land" d="M113.164 124.194L117.301 121.484L119.41 118.646L121.482 118.838L128.922 124.859L132.739 126.148L133.183 127.729L129.646 132.265L129.776 136.282L133.078 139.175L132.633 142.954L130.85 145.275L128.855 144.684L129.327 142.877L128.646 142.351L128.253 144.027L127.65 141.694L128.096 144.684L126.131 146.95L122.567 146.458L118.899 151.086L114.313 151.218L113.972 152.301L112.976 152.269L113.815 152.005L114.338 150.167L118.898 150.988L122.488 146.49L118.452 143.336L117.509 139.065L117.011 141.366L115.544 141.267L115.728 138.671L114.915 139.953L113.71 139.46L114.915 134.825L117.903 133.641L119.134 134.036L118.216 132.359L115.805 133.477L115.858 132.161L114.836 131.076L115.805 131.175L115.648 129.925L114.417 128.674L115.098 128.378L115.151 126.963L112.373 128.608L111.377 128.444L111.272 128.378L115.177 126.765L113.164 124.194ZM87.217 125.807L89.05 127.058L89.916 126.794L91.331 128.802L94.291 128.374L94.03 129.822L91.986 129.395L90.126 130.02L89.732 129.46L88.711 130.415L89.078 128.31L87.217 125.807ZM106.819 128.967L107.552 130.152L111.116 131.139L112.504 132.454L112.924 134.296L110.671 135.71L108.679 135.052L99.821 142.414L96.965 142.973L97.305 141.002L96.362 140.345L95.131 141.166L96.022 140.246L95.551 139.523L93.953 140.772L92.328 139.95L93.192 139.325L91.647 137.549L91.882 136.169L93.533 136.136L97.464 133.342L103.019 133.079L104.356 132.125L105.037 129.427L106.819 128.967ZM96.991 143.598L99.77 146.489L98.93 148.623L97.359 149.05L96.415 148.131L96.52 146.194L95.34 145.898L96.231 143.467L96.991 143.598Z" fill="#CCCCCC" stroke="white" stroke-width="0.5"/>
<path id="KR-29" class="land" d="M148.75 396.838L146.924 395.97L144.491 395.883L140.059 397.882L138.06 399.967L136.582 400.054L133.019 397.967L132.411 395.795L130.238 395.708L128.151 401.01L125.805 400.923L124.067 403.009L122.937 407.789L123.372 411.875L130.585 412.916L134.323 419.001H138.06L141.449 417.002H145.273L146.751 415.959L149.879 416.568L153.269 414.221L154.66 412.397L156.398 406.312V404.921L154.312 403.965L151.705 403.705L150.687 399.173L148.75 396.838Z" fill="#CCCCCC" stroke="white" stroke-width="0.5"/>
<path id="KR-30" class="land" d="M190.754 255.207L191.998 260.495L192.306 260.665L193.768 258.306L194.377 257.659L195.76 257.839L195.438 259.143L195.37 259.78L198.228 257.388L200.72 259.878L200.958 262.497L203.381 263.651L203.064 265.274L205.08 267.664L202.276 269.533L201.342 275.138L200.096 281.366L201.262 285.105L197.917 287.283L195.737 290.085L192 287.906L189.82 284.169L189.197 280.743H187.64L187.329 288.839L186.395 291.02H185.149L184.215 287.906L181.723 286.971L180.167 284.791L179.854 281.366L177.675 279.497L177.363 275.45L179.543 272.957L179.232 264.238L186.083 262.058L187.037 255.941L190.754 255.207Z" fill="#CCCCCC" stroke="white" stroke-width="0.5"/>
<path id="KR-31" class="land" d="M360.297 346.026L362.095 347.493L365.073 348.387L365.31 349.211L364.885 352.048L365.901 353.154L367.873 353.803L373.229 351.416L381.349 353.558L384.239 353.967L384.934 355.416L384.906 356.795L383.78 357.566L384.305 360.708L383.65 363.114L382.522 363.626L383.282 363.722L383.099 365.292L381.893 365.806L382.89 366.542L381.631 367.151L383.124 367.856L382.103 369.041L381.107 368.625L379.299 369.908L379.456 367.441L378.304 366.542L377.674 363.594L375.735 361.477L374.241 360.997L376.547 363.337L376.469 364.459L377.438 364.715L377.779 366.158L375.421 366.287L375.943 366.992L376.913 366.734L377.806 368.305L375.211 371.54L372.983 369.843L373.743 372.853L374.896 372.789L374.397 373.783L375.761 373.045V374.647L374.189 375.863L375.316 377.592L373.506 380.504L375.289 382.998L373.796 383.864L372.616 383.383L370.6 386.453L369.524 386.517L369.261 387.7L367.277 387.029L367.446 385.522L366.442 383.852L365.105 382.514H361.14L361.096 381.752L359.555 379.872L356.474 379.663L350.824 373.806L347.571 370.458L345.175 370.25H342.437L340.209 369.204L339.868 364.388L342.094 362.503L343.292 361.456V359.991L341.826 357.569L345.74 354.487L347.396 354.313L348.723 353.58L347.372 351.105L347.744 349.551L354.997 345.959L360.297 346.026Z" fill="#CCCCCC" stroke="white" stroke-width="0.5"/>
<path id="KR-41" class="land" d="M79.042 102.799L77.233 100.719L78.754 99.0677L78.963 96.7897L80.534 95.3037H83.181L86.221 97.0537L88.606 96.3937L89.681 97.5817L87.978 100.356L86.012 101.544L83.392 101.214L81.164 101.808L80.116 103.227L79.042 102.799ZM88.711 161.647L85.278 159.876L84.203 161.122L88.187 163.22L90.257 162.696L90.991 161.484L89.628 160.96L88.711 161.647ZM82.054 114.805L78.936 114.706L82.658 118.561L82.998 118L81.871 117.177L82.054 114.805ZM70.184 162.303L69.267 162.926L68.507 160.073L67.407 159.909L65.886 165.908L67.143 165.712L67.327 164.925L67.721 166.203L68.874 165.842L68.717 167.284L72.098 166.76L73.697 164.893L70.421 162.861L70.184 162.303ZM74.927 112.135L73.879 111.772L72.647 112.663L73.826 113.389L74.979 112.894L75.844 114.377L77.704 114.707L77.993 113.256L76.552 110.75L74.927 112.135ZM153.915 45.2727L149.025 51.0757H146.222L141.551 49.2067L139.059 50.7637L133.454 55.4347L130.028 60.4177L131.897 61.3517L133.765 65.0887L140.061 65.3777L143.419 67.2687L144.042 70.3827L142.797 71.3167L142.485 73.1857L137.503 72.5627L137.191 76.2997L135.633 77.2347L135.945 79.7257L137.813 80.6597L137.502 87.1997L135.321 88.4457L132.207 84.7087L133.453 80.3487L131.498 77.8847L129.1 77.9567L128.782 80.6607L126.913 82.5297L123.445 79.1947L122.705 79.3017L123.6 84.1937L123.115 86.0587L127.846 87.8227L131.272 92.8057L124.732 94.6737H121.902L120.943 99.2107L117.945 99.3857L114.878 101.845L111.322 101.317L109.304 99.7127L108.702 100.884L106.947 101.676L108.047 103.426L107.182 107.649L108.257 109.431L107.759 112.53L108.912 113.057L108.152 114.771L110.799 121.097L113.161 124.193L117.298 121.483L119.407 118.645L121.479 118.837L128.919 124.858L132.735 126.148L134.909 122.691L139.967 125.884L143.585 124.272L145.209 119.76L150.345 119.365L151.448 118.574L151.525 115.575L153.15 112.806L155.325 111.289L160.278 111.486L162.373 112.772L162.479 117.288L164.549 121.998L163.134 127.332L164.68 127.76L169.475 125.587L170.916 129.142L167.72 131.281L167.327 133.78L168.506 134.866L167.222 136.576L165.964 136.873L165.991 138.023L164.313 139.6L161.326 139.863L157.683 141.934L157.002 139.009L153.937 139.304L149.77 141.606L146.178 141.212L144.371 141.935L141.278 136.117L138.868 137.367L137.742 136.939L136.982 131.545L133.182 127.729L129.645 132.265L129.775 136.281L133.077 139.174L132.632 142.953L130.849 145.274L132.078 145.865L128.121 145.11L127.23 146.161L128.043 146.785L127.65 148.296L122.959 150.922L123.248 152.432L115.779 154.992L112.845 157.223L111.927 156.96L112.399 157.944L111.115 159.321L108.232 157.944L111.115 161.977L110.773 164.042L108.965 165.156L110.407 166.63H109.201L109.489 167.482L108.415 168.563L110.065 167.875L111.087 169.447L112.921 166.073L115.935 167.613L116.721 164.303L116.983 165.942L118.975 167.187L118.451 168.891L119.027 169.513L119.814 167.187L119.473 165.549L116.852 164.205L116.223 161.517L114.022 161.124L111.899 159.124L112.921 157.32L116.118 155.09L122.591 152.859L131.946 157.386L135.038 156.993L137.789 160.272L139.047 159.846L138.051 161.617L136.478 159.617L134.565 159.125L134.722 158.207L133.831 158.535L133.491 159.322L134.434 160.601L132.521 160.502L133.254 162.24L132.337 163.093L132.992 163.289L130.764 166.631L129.454 165.747L130.03 165.059L129.427 162.044L126.781 162.896L126.44 161.814L122.876 161.06L122.143 162.895L120.439 163.256L120.832 164.993L121.75 165.583L120.807 167.32L121.776 168.86L120.361 168.893L119.208 170.367L120.387 172.954L119.314 173.904L120.808 173.281L123.245 173.772L121.017 175.9L122.301 176.718L122.118 178.485L122.956 179.271L123.35 177.667L126.704 175.769L128.774 172.364L131.316 172.593L132.705 170.464L133.648 172.855L131.499 174.165L136.164 174.231L134.093 174.819L135.011 175.835L134.198 175.475L132.836 176.785L131.787 176.064L129.77 177.995L129.822 185.06L128.25 187.806L128.617 188.591L132.914 188.918L133.202 191.009L131.866 191.434L131.918 192.25L135.822 193.067L137.447 197.214L139.359 197.998L139.805 199.859L141.744 199.533L143.159 200.447L144.023 204.997L147.474 202.924L155.01 204.682L159.939 202.913L162.942 200.848L165.521 200.764L168.504 202.187L171.785 205.563L176.87 206.26L179.629 206.029L183.402 204.33L185.103 203.095L187.309 203.231L189.101 201.486L189.266 199.382L188.964 198.299L194.042 195.296L194.841 192.673L197.175 190.108L197.976 191.296L199.456 191.274L199.184 193.339L200.779 190.121L205.073 190.901L209.121 187.164L211.612 186.853L212.235 179.068H213.792L215.349 180.937H217.218L219.875 174.303L222.518 173.721L223.135 166.3L222.512 162.874L224.07 161.629L223.758 154.155L227.184 146.058L227.496 142.01L225.547 141.301L224.762 138.925L227.893 134.901L229.953 134.2L230.745 132.021L229.097 129.126L220.146 127.763L215.847 124.076L213.163 123.752L209.058 121.278L205.426 122.676L202.792 119.838L204.537 116.332L204.847 111.953L201.264 112.854L201.384 110.834L204.077 107.762L202.759 104.264L203.583 102.307L202.736 99.3647L203.325 97.8427L205.582 97.0927L207.377 95.0317L210.681 93.9607L211.679 90.0017L210.863 85.9757L209.422 84.3897L205.226 82.9727L205.143 80.2757L204.264 79.6737L201.052 80.0157L197.964 78.4907L196.41 75.4737L196.008 67.9727L194.587 66.0037L192.633 67.0467L190.545 65.4997L189.062 65.6947L184.964 67.6237L180.505 64.0457L180.987 58.7337L182.078 57.8157L180.111 56.9387L176.457 60.6747L174.026 60.8367L172.386 60.0077L171.992 56.8237L171 57.1337L170.821 56.0597L171.444 54.1917L169.886 52.9457L168.952 47.6517H164.281V45.7837L165.526 44.8487L160.797 40.4407L159.472 41.0187L153.915 45.2727ZM92.721 109.926L90.231 109.563L88.134 107.914L88.108 105.605L89.13 103.526L88.213 102.965L84.989 104.284L84.91 107.683L83.39 108.244L87.976 111.41L89 112.86L88.737 114.937L89.812 115.991L93.376 113.255L93.769 111.211L92.721 109.926ZM108.26 113.586L106.793 112.234L107.579 109.068L106.426 107.353L107.659 103.624L106.295 101.941L105.955 99.6627L101.448 96.7237L99.299 93.9497L95.368 94.6767L94.53 96.6917L91.045 98.5737L91.569 108.639L94.556 109.431L96.522 114.014L95.657 116.387L92.487 116.98L93.64 119.055L93.063 119.846L96.338 121.79L101.684 122.152L101.711 121.131L102.602 121.56L103.179 120.638L106.323 121.56L107.135 119.913L108.499 119.517L107.319 114.805L108.26 113.586ZM102.73 157.975L100.792 158.401L100.608 159.68L99.063 159.549L98.355 161.058L99.168 163.025L98.828 164.893L100.714 164.86L100.767 165.777L101.396 165.712L102.732 164.597L102.471 163.745L103.99 163.647L102.837 162.336L104.095 162.303L103.886 161.549L104.881 162.271L105.563 160.304L104.252 158.599L102.73 157.975Z" fill="#CCCCCC" stroke="white" stroke-width="0.5"/>
<path id="KR-42" class="land" d="M280.637 0.374725L282.052 3.18073L284.201 5.91772L284.776 5.75072L285.563 7.48572L285.014 8.75372L286.769 11.0887L286.192 12.3907L287.345 13.3917L287.188 14.8577L290.883 19.7247L289.756 20.2247L289.705 21.9237L295.207 29.5167L294.578 29.9487L294.84 31.6127L296.438 33.8427L296.412 35.3067L298.719 37.3017L299.556 42.9197L303.541 48.1027L302.727 49.2317L304.746 51.9547L303.829 52.9507L304.746 56.9997L310.326 63.5667L311.035 66.5827L315.069 70.8907L316.17 70.9897L315.672 72.8777L319.42 79.0367L321.099 80.2267L321.019 81.2867L325.107 85.0237L325.028 87.5047L329.404 92.5287L329.64 93.9817L346.568 112.432L345.363 117.079L347.748 120.308L352.229 123.997L352.596 125.807L351.653 127.749L353.592 132.914L358.753 138.208L359.854 143.236L364.678 146.98L366.38 153.841L368.213 155.449L369.235 155.351L369.708 157.876L371.359 157.942L372.171 159.024L371.909 160.828L374.713 164.237L373.245 165.351L373.953 167.121L373.113 169.512L373.664 172.1L376.391 176.028L376.074 177.206L376.889 178.041L372.619 178.755L370.752 180.935L368.26 181.87L365.457 184.361L363.9 186.54V187.786L365.457 190.589L358.936 190.75L356.282 188.483L353.337 187.454L350.731 187.057L348.188 189.567L340.774 186.957L337.435 187.672L336.757 186.351L335.038 185.669L332.136 189.966L331.202 191.211H327.154L320.925 186.852L318.911 187.036L318.369 191.743L317.258 192.859L314.196 191.488L312.282 191.743L308.039 189.411L305.665 187.277L302.18 187.487L298.23 186.213L294.651 183.305L292.646 183.215L288.42 184.216L286.538 184.684L285.722 183.289L283.929 181.647L284.034 179.031L283.071 178.223L281.617 178.549L278.339 178.409L277.151 179.662L275.188 180.319L274.496 180.788L272.186 179.023L271.526 177.33L274.784 175.309L277.132 172.586L277.238 171.223L275.685 170.696L274.323 171.527L273.273 171.791L271.565 171.561L270.094 169.83L267.974 169.397L265.995 167.891L263.544 168.478L261.758 170.922L258.113 170.014L254.445 173.088L249.378 173.946L249.106 170.105L247.332 166.805L243.074 166.364L241.579 167.306L238.742 169.987L239.735 174.667L239.314 176.465L236.167 178.563L233.844 177.412L230.815 177.506L229.37 179.378L227.19 180.312L223.141 177.198L222.524 173.72L223.141 166.298L222.518 162.872L224.076 161.627L223.764 154.154L227.19 146.057L227.501 142.009L225.552 141.299L224.768 138.923L227.898 134.899L229.958 134.198L230.751 132.019L229.103 129.124L220.152 127.761L215.853 124.074L213.169 123.75L209.064 121.276L205.432 122.674L202.798 119.836L204.542 116.33L204.853 111.951L201.27 112.852L201.39 110.832L204.083 107.76L202.764 104.262L203.588 102.306L202.741 99.3627L203.33 97.8407L205.587 97.0917L207.382 95.0307L210.687 93.9597L211.685 89.9997L210.869 85.9747L209.427 84.3877L205.231 82.9707L205.148 80.2737L204.269 79.6717L201.056 80.0137L197.968 78.4887L196.414 75.4717L196.012 67.9707L194.591 66.0017L192.637 67.0447L190.548 65.4977L189.065 65.6927L184.967 67.6217L180.507 64.0437L180.99 58.7327L182.081 57.8137L180.113 56.9367L176.459 60.6727L174.028 60.8347L172.388 60.0057L171.995 56.8227L171.003 57.1317L170.824 56.0577L171.447 54.1897L169.889 52.9437L168.956 47.6497H164.285V45.7817L165.53 44.8467L160.801 40.4377L164.835 37.1927L168.194 37.5727L174.872 34.5187L178.281 35.0417L179.879 36.2327L183.065 36.1177L184.201 35.1767L190.203 34.0557L199.417 38.0447L207.639 33.8187L210.237 35.2517L214.016 34.8437L216.674 35.5127L218.627 34.2007L224.404 34.4907L226.939 33.0977L230.596 37.6887L234.517 36.5817L236.625 34.3467L242.905 36.1837L244.682 35.7477L251.117 37.1847L254.076 36.7257L257.05 34.2917L260.383 34.0177L267.162 28.6157L268.449 26.5087L273.969 21.6757L276.128 17.0817L276.941 12.4987L276.415 3.43472L280.637 0.374725Z" fill="#CCCCCC" stroke="white" stroke-width="0.5"/>
<path id="KR-43" class="land" d="M213.488 306.601L211.308 300.363L209.127 298.494L208.816 295.692L210.062 292.888L209.75 289.774L207.882 286.661L205.088 286.926L201.262 285.105L200.096 281.367L201.342 275.138L202.276 269.533L205.08 267.664L203.064 265.274L203.381 263.651L200.958 262.497L200.72 259.878L198.228 257.388L195.37 259.78L195.438 259.143L195.76 257.839L194.377 257.659L193.768 258.306L192.306 260.665L191.998 260.495L190.754 255.207L187.037 255.941L186.421 255.081L185.315 255.262L184.738 256.043L186.6 249.958L185.521 248.817L186.44 245.542L183.108 245.346L182.657 243.997V241.194L179.854 237.768L182.035 237.145L182.346 234.342L180.789 232.163L185.772 224.378L189.509 224.689L191.066 222.82L189.82 219.083L186.706 216.904H183.832L182.754 216.426L182.915 214.435L182.326 213.949L180.846 213.242L180.616 210.588L177.784 208.673L176.876 206.258L179.636 206.027L183.409 204.328L185.109 203.093L187.315 203.229L189.107 201.484L189.272 199.38L188.97 198.297L194.048 195.294L194.847 192.671L197.181 190.106L197.981 191.294L199.462 191.273L199.19 193.338L200.785 190.12L205.08 190.901L209.127 187.164L211.619 186.852L212.242 179.067H213.799L215.356 180.935H217.225L219.881 174.302L222.524 173.72L223.141 177.198L227.19 180.312L229.37 179.378L230.814 177.506L233.844 177.412L236.167 178.563L239.314 176.465L239.735 174.667L238.742 169.987L241.579 167.306L243.074 166.364L247.332 166.805L249.106 170.105L249.378 173.946L254.445 173.088L258.113 170.014L261.758 170.923L263.544 168.479L265.995 167.891L267.974 169.397L270.094 169.83L271.565 171.561L273.273 171.791L274.323 171.527L275.685 170.696L277.238 171.223L277.132 172.586L274.784 175.309L271.526 177.33L272.186 179.023L274.496 180.788L275.188 180.319L277.151 179.662L278.339 178.409L281.617 178.549L283.071 178.224L284.034 179.031L283.929 181.647L285.722 183.289L286.537 184.685L288.42 184.216L292.646 183.215L294.651 183.305L298.23 186.213L302.18 187.487L305.665 187.277L308.039 189.411L305.839 191.565L303.698 191.319L301.426 193.927L300.81 194.207L297.526 197.45L294.729 198.257L293.945 199.498L290.405 202.24L287.254 207.897L286.422 209.459L286.37 210.79L287.682 211.399L288.475 214.307L285.637 218.196L281.65 218.975L280.726 220.003L278.291 219.952L276.102 220.132L273.615 215.218L270.383 213.374L269.204 211.406L267.539 214.447L266.41 214.79L265.965 218.017L265.6 218.583L259.908 216.847L259.488 216.219L258.426 215.843L257.816 216.467L255.287 219.552L253.911 219.742L252.276 217.997L251.77 218.302L248.91 224.977L252.297 230.213L247.706 229.305L246.528 228.641L245.323 229.226L242.015 227.598L239.146 231.323L234.903 232.743L233.223 235.114L233.705 237.331L230.477 240.663L228.723 242.212L227.163 242.564L226.175 244.468L226.902 245.564L232.257 246.693L233.473 247.911L233.331 248.839L234.294 250.805L236.297 252.164L235.876 253.867L233.864 254.758L233.057 262.369L233.652 264.839L232.372 266.851L233.685 270.098L234.179 270.405L233.18 272.962L230.524 275.265L230.455 279.542L232.604 281.318L236.012 278.762L236.475 280.204L238.969 281.68L240.816 283.249L241.988 283.645L243.972 282.81L246.2 282.023L248.216 282.718L248.835 283.786L248.986 286.949L250.243 288.818L249.649 290.096L246.534 288.689L244.131 290.112L242.951 291.85L244.125 294.803L243.715 298.369L241.963 299.829L240.926 304.458L239.089 307.051L236.22 306.955L235.139 308.026L232.404 310.589L229.514 308.311L224.534 310.707L224.176 311.609L221.578 311.613L221.424 310.697L219.724 309.656L215.634 308.244L214.583 305.977L213.488 306.601Z" fill="#CCCCCC" stroke="white" stroke-width="0.5"/>
<path id="KR-44" class="land" d="M92.065 269.214L93.008 269.927L92.222 270.025L92.117 270.931L90.807 270.315L90.335 270.996L90.1 269.603L91.173 268.858L91.199 267.53H91.855L92.065 269.214ZM95.523 260.789H96.729L96.887 261.956L98.354 262.442L97.777 261.081L99.062 260.076L98.799 257.935L96.441 256.183L97.436 254.755L96.572 253.328L96.729 251.511L95.629 251.835L95.969 249.823L93.742 248.59L94.554 247.713L93.533 246.35L93.429 243.102L91.961 242.419L93.481 241.444L93.534 240.307L92.564 237.706L91.227 237.089L87.507 240.859L89.158 244.238L88.843 249.433L89.734 251.478L88.659 254.366L90.022 253.977L89.394 257.318L91.832 257.707L91.281 259.589L93.01 261.112L93.979 260.01L95.893 260.042L95.523 260.789ZM100.503 186.888L100.004 184.796L97.646 184.403L97.698 187.183L100.503 186.888ZM99.481 265.261L98.853 264.127L97.831 264.029L96.888 264.483L97.412 265.909L94.896 264.515L94.188 266.135L96.048 265.973L101.316 267.723L101.473 266.784L98.748 266.039L99.481 265.261ZM211.308 300.363L209.128 298.494L208.816 295.692L210.062 292.888L209.75 289.774L207.881 286.661L205.088 286.927L201.261 285.106L197.915 287.284L195.736 290.087L192 287.906L189.82 284.17L189.197 280.743H187.64L187.328 288.84L186.394 291.021H185.148L184.214 287.907L181.722 286.972L180.165 284.792L179.853 281.366L177.673 279.498L177.361 275.45L175.658 273.398L173.909 272.052L172.698 268.958L172.832 264.922L172.563 262.097L171.218 258.196L168.527 256.716L166.644 254.16L166.509 252.141L167.586 249.72V246.625L167.451 243.127L167.182 239.764L167.854 237.343L167.585 234.248L167.046 232.23L165.97 230.212L166.373 228.463L169.064 227.386L171.62 228.193L173.1 229.807L175.791 231.422L178.347 232.364L180.785 232.161L185.767 224.376L189.504 224.688L191.061 222.819L189.816 219.082L186.702 216.902H183.827L182.749 216.424L182.91 214.433L182.321 213.946L180.841 213.239L180.612 210.585L177.779 208.67L176.871 206.255L171.786 205.558L168.505 202.182L165.522 200.759L162.943 200.843L159.94 202.908L155.011 204.677L147.475 202.919L144.024 204.992L139.543 206.055L135.98 205.403L134.486 200.41L133.36 200.019L131.683 196.133L131.761 194.761L124.266 192.736L123.899 191.951L117.557 191.722L110.769 187.671L108.568 187.311L107.022 185.055L105.004 184.336L104.113 184.99L103.405 186.363L103.93 186.919L101.335 189.338L102.331 191.233L101.073 191.886L98.4 190.546L94.444 190.154L92.347 191.199L91.534 190.676L89.569 192.343L88.861 191.983L89.176 193.813L92.321 194.532L93.133 194.041L93.579 195.282L94.575 195.446L92.924 196.785L92.217 195.675H89.753L89.544 196.752L90.986 196.589L91.168 197.732L92.086 197.895L91.902 199.233L92.845 198.319L94.025 198.581L94.89 200.409L96.567 199.071L97.484 199.496L97.51 200.997L96.2 201.617L96.54 202.76L98.689 203.576L95.387 204.555L95.544 206.088L93.605 205.828L92.374 206.545L92.977 208.763L91.536 210.002L92.427 211.861L90.357 210.035L90.776 208.339L89.178 208.045L88.052 210.719L89.021 211.469L88.732 212.642L89.597 213.784L88.47 213.23L87.606 214.11L86.846 213.686L86.82 214.727L85.877 214.664L85.484 215.772L84.515 213.426L84.75 212.676L87.79 211.763L87.947 211.079L85.85 210.623L85.929 209.449L87.579 205.796L89.335 204.85H88.365L88.182 203.251L86.531 201.782V198.551L87.475 197.245L86.479 197.344L85.667 196.299L86.688 196.038L86.871 194.471L84.539 196.267L85.586 201.392L84.748 202.698L85.115 203.775L81.42 202.698L81.865 202.012L80.397 202.11L78.04 204.003L77.123 203.22L76.625 205.471L74.763 205.34L76.1 206.548L75.208 207.233L75.89 208.929L76.886 208.864L74.815 211.603L76.23 213.168L75.13 213.266L76.755 217.6L74.842 213.917L74.16 214.438L74.213 210.722L73.191 210.658L73.112 209.581L72.64 210.331L72.012 210.038L72.588 211.081L71.671 211.114L72.955 212.32L72.772 213.494L71.461 214.504L72.195 215.155L71.776 216.719L70.727 217.566L70.308 217.045L70.334 218.316L68.525 218.674L69.731 221.475H70.596L69.233 226.391L72.325 223.721L71.172 220.042L72.719 220.888L76.257 220.628L75.235 221.963L77.148 223.037L78.38 222.452L77.122 224.795L78.17 224.144L79.061 224.795L77.515 226.716L73.952 225.186L72.117 226.651L72.668 229.938L76.573 230.328L77.646 228.018L79.953 227.791L80.581 226.978L80.267 225.155L82.364 225.253L84.224 223.722L84.618 224.471L83.806 224.764L83.726 226.978L82.6 228.345L82.915 230.493L85.09 230.785L86.163 233.095L86.294 236.249L85.246 236.997L84.695 239.922L85.717 241.645L92.373 235.892L96.671 237.127L101.676 240.67L102.41 243.691L101.756 245.38L104.113 248.271L105.607 247.003L109.747 249.99L105.555 247.75L103.536 249.861L103.301 253.268L103.851 256.058L105.083 257.355L104.82 258.555L107.44 257.226L107.755 255.83L108.542 255.766L111.058 252.489L113.495 253.496L115.723 252.717L114.726 253.949L112.027 253.496L111.346 256.253L109.852 256.156L108.332 257.647H107.075L104.689 259.301L103.772 261.214L103.354 264.423L105.136 264.455L109.853 267.727L113.103 268.408L110.508 268.18L106.446 270.998L105.162 271.096L109.722 277.991L107.993 281.129L108.884 285.625L107.39 287.241L107.574 289.471L106.815 290.441L104.456 290.214L104.429 292.96L105.504 293.929L105.793 291.538L106.972 291.215L109.593 292.153L110.51 293.995L111.899 292.605L114.441 294.802L115.777 297.74L116.59 297.029L117.638 297.514L117.612 298.35L118.791 298.03L116.354 299.968L117.403 299.775L117.691 302.583L118.739 302.487L120.993 305.067L120.233 305.551L120.285 307.679L121.018 308.422L122.145 307.809L126.416 308.873L127.806 306.712L128.488 307.039L129.792 306.482L131.271 307.838L142.793 302.855L142.796 294.429L147.476 291.754L151.153 292.423L154.91 294.688L156.174 294.309L158.364 296.316L158.676 300.053L161.106 300.244L161.638 302.261L164.184 302.444L169.847 300.344L172.69 302.233L177.984 301.921L177.36 299.43L181.72 299.742L184.135 297.73L185.267 299.354L188.225 304.447L190.44 311.575L195.349 310.018L196.045 315L202.585 314.688L203.519 312.82L203.676 310.619L204.702 310.437L206.586 309.438L210.681 311.886L213.484 309.082V306.602L211.308 300.363Z" fill="#CCCCCC" stroke="white" stroke-width="0.5"/>
<path id="KR-45" class="land" d="M128.491 307.037L129.795 306.48L131.274 307.836L142.797 302.853L142.8 294.427L147.479 291.752L151.157 292.421L154.914 294.686L156.177 294.307L158.367 296.314L158.679 300.051L161.109 300.243L161.641 302.259L164.187 302.442L169.85 300.342L172.693 302.231L177.987 301.919L177.363 299.428L181.723 299.74L184.137 297.728L185.27 299.352L188.228 304.445L190.443 311.573L195.352 310.016L196.048 314.998L202.588 314.687L203.522 312.819L203.679 310.618L204.706 310.436L206.589 309.437L210.685 311.885L213.488 309.081V306.601L214.583 305.977L215.634 308.244L219.724 309.656L221.424 310.697L221.578 311.613L224.176 311.609L224.534 310.707L229.514 308.311L232.404 310.588L235.139 308.026L239.846 316.982L238.561 321.985L236.24 323.496L234.198 328.108L231.099 329.989L229.64 329.997L227.817 331.145L225.806 330.706L225.157 331.178L223.502 335.247L218.573 339.974L217.792 344.787L217.638 346.699L216.747 347.495L211.536 361.875L211.706 364.187L214.473 365.557L214.895 368.458L216.162 370.725L215.478 374.059L216.167 375.983L217.796 376.41L217.341 380.41L213.646 383.969L212.492 387.111L213.041 389.973L210.829 392.273L210.6 392.477L204.236 388.024L199.702 385.949L197.709 386.058L195.958 387.04L193.013 390.827L191.266 391.289L188.078 390.926L185.7 391.623L179.559 391.642L178.434 390.988L176.997 389.618L175.07 390.737L171.921 389.385L170.624 390.218L169.661 391.117L166.634 392.202L164.539 391.664L161.953 389.693L162.371 386.088L161.363 383.217L159.288 382.549L160.348 380.243L159.892 375.837L158.544 374.8L156.034 374.723L155.054 376.506L154.057 377.147L153.388 380.244L152.366 380.937L150.398 380.369L146.848 374.713L142.813 371.73L139.795 371.123L138.229 372.986L137.147 372.771L135.623 372.416L133.361 373.395L132.568 375.38L132.132 379.146L130.531 380.773L130.792 381.542L130.168 384.507L127.761 385.725L124.627 386.687L123.1 388.18L121.029 388.887L120.066 388.461L117.972 388.574L116.524 390.114L112.182 390.345L111.807 388.648H110.098L108.852 384.6L106.984 382.42L106.05 376.815L104.181 375.257L102.313 374.635L98.486 374.134L103.595 364.33L104.958 365.613L105.193 364.042L106.976 362.888L109.177 363.818L111.405 361.734L113.947 362.055L114.182 363.305L115.702 359.747L116.253 359.906L116.2 358.687L117.641 358.271L119.239 358.752L121.703 361.798L121.388 358.528L120.419 357.95L121.572 356.891L120.183 356.923L118.139 355.223L117.851 356.089L116.383 355.866L115.597 356.795L114.365 355.833L113.947 356.603L109.046 356.571L107.893 357.662L106.976 357.597L106.635 356.603L106.059 357.662L104.355 356.923L103.254 354.903L102.023 355.48L101.289 353.843L102.338 351.951L101.08 350.923L105.377 348.483L108.706 344.917L110.54 343.729L111.693 344.339L114.182 342.219L117.248 337.977L116.54 333.669L117.589 332.06L119.449 332.993L124.062 332.285L128.543 333.476L130.639 335.211L131.975 338.235L132.657 337.591L131.426 337.237L132.028 334.955L131.346 332.06L122.594 327.073L124.035 325.591L127.232 324.369L132.526 324.594L133.442 323.468L133.521 321.374L136.431 319.957L132.264 320.086L130.613 321.729L127.809 321.439L125.661 322.211L122.411 321.213L121.048 322.437L115.885 322.147L116.069 315.608L111.535 315.124L111.509 314.029L109.623 312.546L110.356 311.644L115.256 311.289L116.409 312.289L117.117 311.451L122.829 310.644L124.48 309.418L127.363 310.547L129.066 308.677L129.381 307.355L128.491 307.037Z" fill="#CCCCCC" stroke="white" stroke-width="0.5"/>
<path id="KR-46" class="land" d="M66.489 505.884L66.856 507.083L65.022 505.915L64.34 507.114L64.13 505.505L63.109 505.568L63.135 507.145L62.663 506.041L60.2 505.851L60.384 504.746L59.44 504.968L61.144 503.389L60.908 503.075L61.746 502L63.03 503.674L66.358 502.79L66.489 505.884ZM93.218 481.797L94.109 481.132L93.637 479.992L91.226 478.281L90.545 476.509L89.628 476.826L90.257 475.717L87.82 476.509L86.483 474.988L87.244 474.323L86.511 473.245L80.745 471.44L80.614 473.912L81.61 474.45L80.117 477.364L79.279 476.698L79.2 477.902L77.968 478.314L79.069 479.517L77.182 479.674L76.815 480.718L77.549 481.542L76.421 482.08L75.924 479.802L74.194 483.156L68.953 486.036L69.896 487.743L69.24 487.176L68.114 487.619L66.385 490.717L69.084 495.271L71.417 494.481L71.706 495.271L70.684 495.712L71.077 496.314L70.134 497.545H71.784L71.653 496.818L72.414 496.596L73.331 498.208L75.584 498.271L78.231 497.292L77.576 496.027L78.807 496.564L79.725 495.679L80.327 496.343L81.219 495.142L82.843 495.269L82.974 493.15L84.468 493.941L86.04 493.119L85.227 492.139L86.118 491.76L86.93 492.456L86.563 491.254L87.716 492.108L87.48 490.305L88.869 492.045L88.503 492.772L89.734 492.803L89.708 491.127L92.512 487.965L91.804 486.32L93.115 484.643L91.909 484.294L91.935 483.44L93.43 483.029L94.006 483.883L93.954 482.27L93.218 481.797ZM51.552 454.95L52.6 454.792L51.342 452.887L51.395 451.426L56.426 450.76L56.767 449.426L57.92 449.267L57.657 446.439L55.64 446.757L54.671 448.663L53.439 448.409L53.648 449.044L52.442 449.774L48.459 449.17L48.879 450.377L48.066 450.759L47.935 450.218L47.542 450.981L48.119 451.679L47.385 454.95L50.242 456.759L52.365 456.156L51.552 454.95ZM130.875 502.757L128.805 502.031L126.996 498.272L127.075 495.459L126 494.258L122.619 492.426L118.557 494.386L118.505 499.503L119.212 500.168L118.714 501.052L120.68 501.463L123.51 505.063L125.056 504.463L127.546 505.726L127.362 503.643L128.542 505.126L131.319 505.631L129.93 503.769L130.875 502.757ZM55.378 456.664L54.408 454.282L54.251 456.092L53.02 456.029L52.915 458.028L51.945 457.457L52.207 456.854L50.111 457.298L49.901 460.248L50.504 461.898L51.63 461.105L51.579 462.214L52.417 462.722L53.701 461.706L53.596 463.261L54.565 463.578L56.06 462.912L56.086 461.833L57.579 460.818L57.737 459.771L58.811 460.057L59.283 458.851L55.378 456.664ZM122.62 517.653L119.266 515.507L118.612 517.053L117.72 516.958L119.528 519.008L117.458 521.119L117.405 522.727L118.113 524.366L119.476 523.578L119.345 525.185L120.341 525.657L121.231 524.618L121.1 522.003L122.202 522.381L122.464 521.31L121.153 521.277L120.079 518.631L122.071 518.378L122.62 517.653ZM115.361 512.795L112.61 512.259L112.086 512.984L111.614 511.596L110.199 511.659L111.43 513.331L110.539 513.426L110.276 514.183H111.246L110.12 514.846L110.513 516.107L109.596 516.517L111.195 516.927L111.142 518.094L113.71 518.63L112.374 517.085L114.365 516.58L114.261 517.494L116.147 517.463L114.915 515.54H116.724L116.121 513.804L115.361 512.795ZM112.897 518.945L112.295 519.955L111.797 518.851L110.408 519.135L108.862 517.527L105.587 520.018L105.508 522.477L106.347 524.43L107.736 524.493L112.4 521.814L112.636 520.269L113.763 519.669L114.915 521.688L114.968 520.017L116.199 521.404L116.67 519.545L115.569 519.892L112.897 518.945ZM59.807 474.102L60.776 473.976L61.327 472.677L61.93 473.658L63.738 473.152L64.105 471.979L63.686 470.869L62.978 471.504L63.214 469.507L61.774 469.951L60.936 468.682L61.722 466.558L60.674 466.812L60.831 466.019L58.971 466.464L59.573 467.891L59.049 470.426L59.862 469.982L60.464 470.553L59.809 471.155V474.102H59.807ZM83.522 438.843L82.762 440.656L79.958 439.765L79.486 441.577L82.788 442.594L84.36 440.719L87.505 441.069L87.872 441.927L89.156 441.356L90.544 443.263L88.841 444.342L89.286 445.01L91.042 445.55L91.225 444.597L92.72 444.374L92.771 440.686L91.697 441.132L91.723 439.861L88.604 440.178L87.635 439.352L88.657 438.874L87.582 438.143L88.735 437.953L88.788 436.713L91.199 436.872L91.173 435.886L89.732 434.645L87.478 434.836L86.167 433.181L84.596 434.231L86.666 437.19L85.643 437.827L84.465 437.222L84.256 438.845L84.964 439.48L83.863 439.863L83.522 438.843ZM70 455.552L71.415 455.425L72.044 458.441L74.821 457.87L75.11 456.093L73.302 452.029L71.52 452.697L69.816 450.474L68.087 451.013L66.278 450.091L65.938 451.299L65.282 451.331L65.728 452.76L64.863 454.887L66.907 453.681L67.011 454.697L67.667 454.411L67.299 456.285L68.478 456.126L69.16 456.887L70 455.552ZM75.425 465.671L75.74 464.15L72.7 461.803L71.73 462.12L71.101 463.674L70.315 463.103L70 464.056L68.821 464.15L69.083 465.166L70.079 464.532L70.655 465.26L69.608 466.878L70.316 468.494L72.359 467.924L72.831 466.973L74.508 467.542L75.137 466.497L76.657 466.339L76.945 465.133L75.425 465.671ZM73.774 415.826L73.905 416.527L74.874 416.24L74.325 417.005L76.211 417.388L76.631 416.782L77.469 417.834L79.25 417.676L80.22 418.281L79.8 419.937L80.717 420.127L81.582 421.721L82.997 421.848L83.966 419.937L82.814 419.204L82.42 416.782L81.005 415.794L81.503 413.054L80.979 412.415L79.59 413.309L79.196 412.256L77.231 412.607L76.235 411.364L75.188 411.588L72.907 412.959L73.667 414.745L73.774 415.826ZM65.073 441.323L63.501 441.609L66.541 445.455L66.909 447.52L69.11 447.169L69.608 445.771L68.691 444.12L69.477 442.975L70.603 443.484L72.202 442.245L70.472 441.133L70.446 440.338L72.281 440.401L72.883 439.606L71.494 437.793L71.023 438.557L68.822 437.666L68.245 438.047L68.402 439.828L69.293 440.558L68.795 441.48L65.703 440.368L65.073 441.323ZM73.145 424.428L73.774 422.548L70 421.179L67.223 424.141L73.145 424.428ZM55.85 439.829L61.038 440.369L62.086 442.214L61.903 440.432L62.663 440.211L62.873 440.973L64.313 440.528L63.973 439.734L65.939 439.83L65.335 438.399L67.248 437.477L65.807 435.982L67.326 434.583L65.911 434.359L66.619 433.151L65.388 433.437L65.493 432.132L63.396 431.272L63.79 433.437L63.213 434.391L62.191 434.582L61.773 433.469L61.117 434.677L59.308 434.327L57.107 438.524L54.985 438.557L56.373 439.447L55.85 439.829ZM63.475 416.876L63.658 416.526L65.231 416.27V417.864L67.588 418.82L67.615 417.258L69.136 417.354L68.323 415.825L69.554 415.601L67.772 413.848L68.087 412.35L69.266 412.318L69.581 409.223L73.407 407.565L68.769 407.789L68.664 408.874L65.86 411.84L62.663 412.413L61.981 414.678L63.553 415.602L63.239 416.462L61.562 416.208L62.611 417.259L63.475 416.876ZM5.327 460.439L3.99 459.71L5.274 458.662L2.182 459.233L2.235 460.47L0.163999 463.388L1.239 464.403L0.00799942 465.006L0.950999 466.654L2.523 467.224L2.444 465.543L4.069 464.847L3.519 463.261L5.406 462.785L5.642 460.723L7.502 460.088L6.481 459.041L5.327 460.439ZM143.583 517.337L144.082 516.139L143.296 515.255L144.004 514.057L142.116 513.521L140.256 514.373L140.073 515.194L138.894 515.507L138.92 518.031L137.925 518.377L139.078 518.913L138.082 519.796L138.79 521.182L139.969 519.417L141.07 521.276L142.852 520.583L143.638 521.182L144.66 520.269L144.791 516.991L143.583 517.337ZM226.418 437.284L226.287 433.849L224.583 432.163L221.884 432.099L222.146 430.38L221.36 429.745L218.792 432.321L218.845 434.326L224.19 435.535L224.688 436.234L224.4 433.531L225.343 433.179L226.285 437.09L226.418 437.284ZM226.864 471.79L228.41 471.186L228.567 470.332L226.707 469.095L227.022 466.941L227.86 466.592L227.677 463.705L228.411 462.976L227.389 463.102L227.938 462.373L226.392 461.992L225.607 460.755L225.895 458.883L224.611 459.233L223.955 458.155L224.532 457.393L225.371 458.059L225.528 458.344L226.839 458.661L226.603 456.663L222.095 454.726L222.777 456.979L223.904 457.138L223.72 459.676L225.161 460.373L223.379 460.69L222.881 462.149L220.601 463.64L220.025 465.067L220.68 466.017L219.343 467.538L221.885 468.712L223.038 470.866L224.479 470.772L226.864 471.79ZM218.426 455.901L216.329 454.632L216.67 453.964L214.914 452.886L214.966 452.156L214.363 452.315L214.546 453.331L212.293 456.378L213.001 457.819L211.455 457.267V456.441L211.036 457.744H210.303L211.614 459.013L211.194 460.028L212.583 460.377L211.037 461.044L212.348 463.264L211.693 463.772L213.003 464.279L211.798 465.737L212.82 465.769L213.239 466.911L211.247 466.625L210.278 465.009L207.867 464.027L206.661 464.407L207.107 466.562L204.329 462.472L205.508 461.298L204.407 460.949L204.46 459.362L206.818 458.474L205.535 458.411V457.586L204.513 458.539L204.879 457.015L204.067 457.111L205.535 455.841L205.299 454.92L205.928 455.396L206.976 454.826L207.317 453.398L209.23 453.46L207.422 452.858L208.051 452.031L207.369 450.698L206.374 451.778L206.348 450.19L205.063 449.809L206.426 449.079L205.063 447.649L204.932 446.346L201.814 446.123L201.998 444.503L203.597 442.342L201.946 442.087L201.16 438.081L198.618 438.781L198.803 441.833L198.199 442.596L196.418 442.057L194.085 442.978L193.614 441.611L193.194 442.978L189.841 444.312L188.556 442.978L186.224 442.882L188.451 444.059L189.369 445.52L192.723 445.552L189.631 447.554L188.844 449.555L186.905 449.459L190.338 450.697L189.945 451.936L187.56 453.808L189.106 457.204L192.382 459.489L193.194 460.821L192.749 461.519L194.583 461.55L194.348 462.914L195.553 462.09L195.5 462.914L196.444 463.009L195.972 461.931L197.439 461.804L197.046 463.802L198.591 464.31L198.566 465.198L197.387 464.533L197.046 465.356L196.129 464.405L195.658 464.848L196.496 465.768L199.274 466.371L200.087 470.618L198.383 472.044L198.331 473.026L195.894 472.234L195.5 470.966L194.269 472.646L193.273 471.346L191.807 471.98L190.889 471.061L186.932 471.632L186.984 472.296L189.342 472.107L189.578 473.058L190.888 472.265L190.495 473.628L188.294 474.008L188.111 475.085L190.076 474.515L192.329 474.894L191.7 475.464L193.062 475.149L193.508 477.428L192.25 477.871L192.878 480.056L190.808 479.169L190.468 480.848L189.053 480.246L188.004 480.973L189.131 482.399L188.895 483.317L188.003 482.841L187.165 483.632L185.828 482.335L185.357 483.948L184.728 483.285L183.077 484.107L184.204 485.12L182.527 485.309L184.204 486.258L184.466 487.27L183.34 488.093L181.138 487.239L181.165 486.606L182.265 486.636L181.557 485.657L180.377 485.625L180.718 484.771L177.678 483.537L179.093 481.606L176.341 478.98L175.372 479.011L175.346 479.739L174.167 479.359L174.376 478.568L171.991 476.478L172.071 479.074L169.554 477.365L168.716 479.105L168.218 478.441L165.283 478.79L163.816 477.998L163.894 476.763L162.951 476.13L163.423 474.197L166.044 471.79L166.384 469.92L167.327 470.997L168.559 470.617L168.611 467.035L171.153 464.5L173.826 463.833L174.245 461.359L175.346 460.281L174.952 458.631L177.179 456.664L177.861 457.203L178.83 456.41L179.328 459.171L178.595 461.581L179.355 462.375L182.028 462.629L183.731 457.712L184.857 457.362L183.705 456.823L183.076 452.664L181.033 452.918L179.906 455.108L177.94 453.871L177.18 455.013L175.451 451.711L173.905 452.061L169.659 459.298L165.807 459.426L164.497 458.219L161.562 461.867L158.627 462.946L156.844 465.894L154.093 467.162L151.814 467.352L151.787 468.304L153.177 469.063L152.155 469.507L151.5 472.074L150.425 473.024L151.368 473.721L152.993 473.404L152.862 474.892L151.264 474.417L151.289 476.888L149.743 476.508L148.59 477.806L150.241 479.833L149.297 480.339L148.93 481.891L150.424 483.979L148.38 484.802L146.991 483.219L146.415 484.042L147.385 486.352L146.545 487.396L144.895 486.606L140.177 486.416L141.698 488.883L141.541 490.337L140.336 488.535L137.741 486.954L135.199 487.301L133.915 486.384L134.204 484.991L132.161 484.928L133.182 483.695L132.239 479.865L133.288 475.938L132.632 475.431L133.051 473.721L132.187 472.707L132.422 471.534L131.4 470.615L132.238 465.449L130.692 468.176L130.089 477.584L130.639 478.218L129.591 478.883L130.273 481.51L127.731 483.061L128.517 484.612L126.316 487.902L123.958 488.187L121.625 489.61L121.546 490.559L120.734 489.736L119.371 490.212L118.847 491.697L117.878 491.444L117.328 492.488L116.777 491.919L116.175 492.709L116.672 493.277L115.73 494.447L116.568 495.175L116.515 497.514L114.812 498.587L115.415 499.094L114.628 500.105L115.152 502.473L110.881 501.621L109.387 503.83L107.946 504.084L107.605 505.094L106.74 504.779L107.002 502.569L106.347 502.032L107.736 500.357L107.133 497.294L105.692 496.661L102.521 498.683L101.918 497.608L102.232 496.945L103.149 497.799L102.939 496.788L103.909 496.882L102.651 494.67L105.036 494.259L103.961 491.824L105.638 492.741L106.713 491.097L106.005 488.283L104.879 489.2L103.595 488.916V489.896L100.973 487.46L101.812 486.606L102.179 486.352L102.337 484.706L101.708 484.959L100.973 484.01L101.97 483.283L101.053 481.225L102.389 480.402L101.603 479.041L99.69 478.883L101.892 477.204L101.578 476.381L99.535 477.015L99.508 475.431L97.228 474.64L97.437 475.843L95.943 476.096L95.969 477.047L94.528 477.742L93.742 476.951L94.659 474.607L92.457 474.512L89.602 473.086L87.61 473.782L86.667 472.642L87.532 471.628L84.361 470.454L84.466 467.507L85.697 466.492L85.278 465.923L84.832 466.556L83.653 466.271L82.473 465.129L82.028 460.943L82.788 460.245L82.631 457.802L83.207 458.247L83.889 457.137L84.936 451.994L86.247 451.454L87.295 452.438L86.98 453.167L88.239 453.04L89.234 456.279L90.991 457.675L89.444 458.976L89.602 461.735L88.894 462.719L91.435 464.146L91.331 467.031L92.641 467.665L92.903 469.504L93.925 468.015L100.66 472.072L100.477 471.184L103.359 469.727L103.804 468.585L102.939 468.046L100.922 469.028L100.476 466.143L99.296 467.317L98.484 464.876L97.435 465.129L97.933 463.291L97.199 463.227L97.252 462.403L96.388 462.435L96.074 463.67L94.685 464.59L93.61 463.64L95.256 461.672L94.554 459.262L95.681 460.183L96.153 459.77L95.419 457.994L94.371 457.803L95.419 456.852L97.227 460.342L98.878 458.439L99.376 459.042L99.926 458.09L101.053 458.756L98.485 462.341L99.611 463.61L100.581 463.229L100.555 464.118L102.179 465.323L106.111 465.83L107.683 467.193L108.68 465.861L107.369 465.481L107.5 464.085L109.702 464.308L110.015 465.196L113.265 466.591L116.802 466.433L113.999 465.577L110.985 463.357L111.22 460.693L108.836 460.566L107.657 457.647L104.984 454.473L102.52 454.219L101.08 455.33L100.346 453.68L98.642 454.219L97.069 453.14L94.659 454.981L92.326 454.124L93.951 452.568L93.742 451.012L94.895 450.568L94.816 449.234L92.825 449.362L92.117 447.195L95.104 442.943L96.912 442.244L95.313 439.352L95.942 438.047L94.658 437.697L94.946 435.725H95.784L96.229 434.453L94.762 432.576L95.418 431.844L94.632 430.635L95.156 428.407L94.003 427.642L93.085 424.396L92.771 427.165L91.906 427.865L91.985 428.63L93.4 429.235L92.509 430.667L93.269 431.177L92.561 432.035L92.954 432.958L90.464 434.008L89.102 433.849L88.866 432.227L86.954 432.481L86.771 431.749L88.264 430.699L85.828 428.184L87.452 425.637L87.164 427.038L88.107 426.37L88.919 428.058L90.806 427.102L91.749 425.064L89.889 424.65L94.789 421.497L94.711 420.001L93.819 418.885L91.198 419.713L90.936 417.675L89.285 417.26L90.543 416.303L89.39 414.136L88.054 414.105L87.923 414.837L86.56 413.881L87.766 416.112L86.403 417.164L87.661 418.057L86.377 419.267L84.909 417.197L82.839 418.185L82.236 415.189L81.215 414.519L81.634 413.244L83.285 413.116L81.083 410.692L81.896 408.779L82.656 409.089L82.393 407.791L83.861 406.897L84.569 408.811L85.617 407.982L86.979 408.396L87.058 409.64L88.343 409.576L89.26 407.95L88.657 407.183H89.627L90.702 405.907L90.754 408.461L90.072 410.789L89.312 411.012L89.182 413.468L90.387 413.692L91.278 412.671L90.57 415.317L91.801 415.732L92.535 415.158L92.744 417.102L94.972 414.36L94.317 416.625L95.444 415.445L96.441 416.974L94.894 419.237L95.864 419.205L95.968 421.055L98.195 420.991L97.619 419.238L99.716 417.836L101.157 415.541L99.087 414.586L101.183 413.916L101.838 412.736L97.775 412.003L94.159 406.197L91.984 404.953L92.273 403.613L91.277 403.134L92.901 402.591L93.583 400.037L89.495 400.898L87.923 400.1L87.661 398.376L86.298 397.258L87.399 395.181L88.734 398.024L90.098 396.651L89.547 395.661L91.146 393.489L90.858 392.785L89.102 392.817L89.836 391.507L92.954 391.539L93.688 386.264L95.444 381.819L100.134 383.386L96.676 381.018L95.916 378.619L96.361 376.282L97.829 374.873L102.311 374.639L104.179 375.261L106.048 376.818L106.983 382.424L108.851 384.604L110.097 388.652H111.805L112.18 390.349L116.522 390.118L117.97 388.578L120.064 388.466L121.028 388.893L123.098 388.185L124.625 386.692L127.759 385.73L130.167 384.512L130.79 381.547L130.53 380.777L132.131 379.15L132.568 375.384L133.36 373.399L135.622 372.42L137.146 372.774L138.228 372.989L139.793 371.127L142.811 371.732L146.846 374.716L150.396 380.371L152.364 380.938L153.385 380.246L154.054 377.149L155.051 376.508L156.031 374.725L158.541 374.801L159.889 375.839L160.345 380.244L159.285 382.551L161.361 383.219L162.369 386.09L161.95 389.694L164.536 391.666L166.631 392.203L169.658 391.118L170.62 390.22L171.918 389.386L175.066 390.739L176.993 389.62L178.43 390.99L179.555 391.644L185.696 391.625L188.074 390.928L191.262 391.29L193.009 390.828L195.954 387.041L197.706 386.06L199.698 385.951L204.232 388.026L210.596 392.479L209.797 394.734L212.451 397.715L213.356 406.915L219.909 413.361L220.102 416.257L221.193 417.3L224.748 421.092L226.489 422.418L228.721 430.636L225.942 430.542L224.58 427.58L221.619 429.236L221.566 426.339L220.151 424.301L221.278 429.49L219.496 431.591L217.478 432.355L217.767 433.787L214.57 435.313L213.627 436.681L212.683 435.472L213.129 434.9L211.059 435.122L209.538 432.864L209.696 430.414L208.988 429.746L208.857 432.736L206.891 433.277L209.329 435.154L208.83 435.95L208.437 436.139L206.524 436.936L207.965 437.477L209.537 441.228L212.42 441.895L211.477 443.199L212.63 444.63L212.656 443.517L214.962 444.311L217.504 442.532L218.421 441.007L218.526 440.721L221.696 439.767L220.752 440.626L222.508 441.325L222.378 440.561L224.684 439.735L226.021 441.07L225.182 441.261L224.893 447.14L224.002 447.076L222.665 449.681L223.635 454.221H221.643L221.381 455.332L218.426 455.901ZM151.705 403.705L150.687 399.174L148.75 396.839L146.924 395.971L144.491 395.884L140.058 397.883L138.059 399.968L136.581 400.055L133.018 397.968L132.41 395.796L130.237 395.709L128.151 401.011L125.805 400.924L124.067 403.01L122.937 407.79L123.372 411.876L130.585 412.917L134.323 419.002H138.06L141.45 417.003H145.274L146.752 415.96L149.88 416.568L153.27 414.221L154.661 412.397L156.399 406.312V404.921L154.313 403.965L151.705 403.705ZM201.471 486.669L200.055 484.391L200.004 485.531L199.321 485.12L198.876 486.132L197.959 486.101L198.614 485.279L196.937 485.436L195.181 484.266L195.574 486.828L194.762 487.304L196.963 486.797L197.959 487.399L197.75 488.032L195.89 487.81L197.096 489.076H198.772L198.222 490.815L198.721 491.511L201.42 489.802L202.415 490.277L203.176 489.329L203.071 487.272L201.471 486.669ZM224.714 480.246L226.103 479.739L224.269 477.491L223.719 475.338L222.015 475.369L219.473 477.111L218.058 476.985L220.232 478.758L221.491 478.346L220.757 479.518L222.251 480.214L221.648 481.1L223.482 480.911L223.457 481.544L225.107 481.829L224.242 482.399L226.941 482.904L227.701 481.734L224.714 480.246ZM220.994 436.648L220.051 435.821L218.295 436.49L217.613 437.667L218.557 438.398L218.085 438.843L220.338 439.415L221.256 437.508L222.828 437.125L222.487 436.554L220.994 436.648ZM131.53 494.86L130.22 497.451L131.608 498.273L131.635 496.377L132.709 494.923L135.251 494.827L135.802 492.867L138.108 494.1L139.654 494.004L139.732 493.183H139.024L138.867 491.824L138.055 491.951L138.264 490.717L137.164 491.54L135.749 490.528L137.531 490.432L137.819 489.453L136.693 489.168L136.613 487.776L132.368 489.009L130.14 491.571L130.481 492.931L128.777 495.174L131.53 494.86ZM196.597 482.936L198.038 483.253L198.431 482.556L199.008 483.253L200.134 482.429L198.745 480.468L195.862 480.245L196.019 479.454L197.225 479.834L195.705 478.061L197.539 477.269L197.068 476.351L195.547 476.192L193.32 479.074L195.364 480.119L194.946 480.657L195.601 481.1L193.924 482.144L194.867 483.696L195.889 483.854L196.597 482.936ZM228.043 486.795L228.357 485.784L227.283 486.352L227.571 487.239L226.418 489.453L227.911 489.199L226.444 490.844L226.706 491.382L227.571 490.907L227.676 491.728L228.383 491.76L229.353 486.733L228.645 487.207L228.043 486.795ZM149.455 499.726L148.302 501.084L148.564 503.199L149.114 502.82L149.926 504.084L153.936 501.494L153.806 500.578L152.233 499.725L149.455 499.726ZM139.785 502.6L139.732 501.653L140.256 503.105L141.331 503.075L141.095 500.737L142.589 500.579L142.693 499.063L141.016 499.978L140.308 498.526L138.867 498.935L138.736 498.273L138.055 499.125L136.561 497.515L135.198 498.811L135.329 499.852L134.098 500.358L132.499 498.936L131.111 500.201L128.936 500.075L131.661 501.054L132.867 502.444L134.308 501.054L136.169 501.181L137.374 504.307L138.685 503.107L139.785 502.6ZM160.434 497.609L159.543 497.134L156.634 498.399L156.687 496.439L155.141 494.986L154.931 495.871H153.306L153.935 496.503L153.044 496.566V497.704L150.921 497.389L153.044 498.621L153.752 497.892L155.088 498.746L155.428 499.536L154.013 499.85L155.166 500.514L157.21 499.567L157.34 500.294L155.768 501.399L156.187 503.23L157.838 500.452L159.856 499.946L158.153 499.662L158.703 498.778L162.005 499.914L160.118 498.178L160.434 497.609ZM144.161 493.785L143.558 492.458L142.903 493.058L142.431 492.363L142.274 493.28L141.278 492.015L140.517 492.805L140.466 491.921L139.601 491.51L139.287 492.141L140.23 493.501L139.444 495.871L140.125 496.439L141.461 495.839L141.776 497.45L143.558 498.145L145.183 497.356L145.576 496.186L147.385 496.533L146.729 494.574L147.751 492.457L147.201 491.35L145.969 493.848L144.161 493.785ZM175.266 510.018L175.24 511.186L174.323 511.281L173.615 514.057L175.083 513.395L176.76 514.248L175.947 513.048L177.048 512.765L176.708 509.703L175.266 510.018ZM172.672 481.922L171.283 482.778L169.265 482.492L165.78 484.517L164.444 483.883L164.025 482.459L163.238 482.522L163.081 484.136L161.089 484.801L162.347 486.54L161.691 487.933L163.316 487.3L163.237 488.375L165.752 490.494L166.329 489.261L167.797 489.546L168.006 488.786L172.041 489.418L174.505 484.136L172.672 481.922ZM154.485 486.48L155.586 487.144L155.927 490.338L156.739 491.128L157.342 490.813L157.08 489.548L158.128 489.8L158.259 492.583L159.438 489.453L158.52 486.922L157.551 486.1L157.158 486.859L156.556 485.91L154.485 486.48Z" fill="#CCCCCC" stroke="white" stroke-width="0.5"/>
<path id="KR-48" class="land" d="M239.867 325.282L241.956 325.665L242.662 326.029L242.97 328.633L243.913 329.196L247.825 329.739L249.557 331.499L256.538 332.018L258.026 332.768L260.057 334.252L260.836 337.121L261.495 337.615L263.556 338.602L263.984 340.362L266.5 341.852L267.44 343.639L265.383 349.808L265.116 351.464L266 353.096L269.795 354.584L273.225 353.97L276.176 352.883L280.658 354.237L282.893 356.414L284.6 357.658L287.008 357.6L290.492 355.107L292.012 354.732L294.427 355.623L295.773 354.707L297.086 350.447L298.358 350.242L299.048 351.519L298.581 354.563L300.262 358.223L304.699 361.691L310.567 360.587L317.994 363.327L319.912 363.9L325.413 360.075L326.424 360.372L331.378 356.23L333.478 356.272L336.403 357.142L340.1 358.71L341.058 358.357L341.827 357.567L343.293 359.989V361.455L342.095 362.502L339.868 364.387L340.21 369.202L342.437 370.249H345.176L347.572 370.457L350.825 373.805L356.474 379.661L359.555 379.87L360.82 381.414L357.877 384.119L357.305 385.977L352.447 386.548L348.847 393.173L347.014 392.857L343.071 395.333L339.017 400.266L334.874 400.409L331.017 402.837L328.73 403.124L328.301 408.123L321.386 410.732L319.579 412.955L318.608 412.222L318.765 413.466L316.513 412.797L315.385 413.849L315.018 413.116L314.152 413.307L314.101 412.382L312.869 412.351L312.267 413.18L311.559 412.446L313.053 410.246L312.449 408.428L311.585 408.141L311.794 407.152L310.118 407.951L310.641 409.705L309.461 410.662L309.12 409.13L307.339 408.398L307.627 407.058L305.792 407.376L305.373 409.099L304.745 408.27L303.905 408.526L304.665 407.441L304.194 405.558L302.673 404.473L302.463 401.248L306.394 398.886L302.201 400.228L300 402.813L301.39 404.409L301.102 405.717L302.227 405.846L303.171 407.952L300.996 408.494L300.866 409.195L303.38 409.131L303.433 412.513L305.871 414.457L303.617 415.095L304.403 416.051L305.767 415.733L306.632 416.433L300.708 418.187L302.125 417.041L301.705 416.816L299.74 416.626L300.316 417.996L299.111 418.155L297.827 416.339L300.054 416.181L299.74 414.969L301.6 413.853L297.827 412.706L298.43 411.972L297.565 411.941L297.486 410.505L296.463 412.323L294.918 412.96L292.403 411.781L292.507 412.609L291.485 413.024L289.206 412.131L288.996 413.184L291.957 415.288L290.883 414.903L290.465 415.861L288.367 416.051L287.057 417.995H285.904L285.562 417.102L282.838 419.014L282.078 418.601L282.786 420.193L281.555 420.672L280.584 423.092L283.311 422.01L283.416 420.257L284.909 419.365L288.971 418.345L288.787 416.337L289.575 416.146L289.968 416.974L290.937 415.54L292.196 416.847L292.144 418.058L291.882 418.951L290.099 418.887L292.116 419.557L292.09 420.958L294.056 422.456L293.138 423.697L292.3 423.156L291.697 425.098L290.413 424.589L290.361 425.608L285.172 424.812L285.198 426.246L287.138 425.831L288.343 426.214L288.579 427.265L286.639 429.206L287.215 429.46L286.797 431.148L287.793 432.039L286.116 434.553L286.903 435.316L286.299 436.08L286.482 438.847L288.842 435.604L288.238 434.141L289.47 434.045L290.571 436.559L291.541 436.813L290.781 439.101L289.732 437.767V439.706L288.868 439.578L289.366 441.836L285.435 443.202L288.186 443.837L288.422 444.76L288.395 446.824L287.401 446.983L288.213 447.841L286.326 448.126L287.846 449.333L286.693 451.556L284.204 451.175L284.125 449.492L283.313 449.873L283.6 448.697L282.761 447.49L282.133 448.444L281.006 447.68L282.499 446.727L282.447 445.457L279.461 444.249L278.412 445.202L277.836 444.154L278.753 443.741L278.517 442.311L279.172 443.422L280.117 442.246L281.19 443.676L281.819 443.136L283.051 445.647L282.866 443.899L283.862 444.217L284.805 443.454L283.706 443.772L282.92 443.199L283.338 442.341L282.028 442.436L281.66 441.293L283.389 439.925L286.299 440.052L285.958 439.448H283.153L282.603 437.094L282.315 437.794L281.529 437.38L281.817 439.257L280.245 438.939L279.773 437.253L279.563 438.812L278.908 437.794L277.624 438.493L277.598 437.253L276.524 438.048L274.742 435.345L276.131 434.645L280.192 434.773L278.804 430.16L277.783 430.35L277.991 429.269L276.681 428.631L276.969 430.636L274.95 431.528L275.423 433.596L274.008 434.614L273.301 433.882L273.327 435.282L271.781 434.359L271.806 431.146L270.155 430.891L269.842 430.732L268.217 431.05L267.639 430.446L267.221 431.272L265.203 431.463L265.99 432.735L265.806 436.426L263.919 436.267L263.264 434.868L263.056 436.076H262.322L261.641 434.868L260.041 435.44L259.177 437L258.182 435.153L257.133 435.409L256.4 434.39L258.078 433.085L253.833 433.022L250.399 431.082L249.456 429.045L251.632 426.722L250.294 424.651L251.316 422.327L250.897 421.531L250.163 422.168L250.006 421.658L251.29 416.21L252.443 415.222L251.814 414.902L249.795 416.432L248.616 421.085L247.201 420.353L248.379 419.714L248.143 419.014L247.411 419.874L245.366 418.95L244.475 420.288L246.389 419.937L247.384 422.741L248.511 422.996L247.462 426.34L246.493 424.748L245.025 426.85L243.898 424.684L241.724 426.149L242.221 427.008L240.728 426.467L241.095 425.64L240.23 425.226L240.99 425.002L241.069 423.761L239.523 422.327L238.92 426.148H238L238.394 427.39L237.397 427.517L237.083 428.854L235.25 430.192L232.315 430.382L232.079 428.854L231.502 429.237L230.951 428.377L230.533 430.478L228.815 430.224L228.726 430.637L226.494 422.419L224.753 421.093L221.198 417.301L220.107 416.258L219.913 413.362L213.361 406.916L212.456 397.716L209.802 394.735L210.601 392.48L210.83 392.276L213.041 389.976L212.492 387.114L213.647 383.973L217.342 380.412L217.797 376.412L216.168 375.985L215.479 374.061L216.164 370.727L214.896 368.46L214.474 365.559L211.707 364.189L211.537 361.877L216.748 347.496L217.639 346.7L217.794 344.788L218.574 339.975L223.503 335.247L225.158 331.179L225.807 330.707L227.819 331.145L229.642 329.998L231.1 329.989L234.199 328.108L236.242 323.496L238.562 321.985L238.69 323.919L239.867 325.282ZM325.027 416.559L325.526 417.993L326.547 417.707L327.019 419.459L325.394 422.868L326.049 423.663L324.739 425.51L325.001 424.907L323.899 423.95L324.713 422.74L322.668 421.848L323.61 421.052L321.828 418.056L325.027 416.559ZM311.925 420.701L312.633 420.064L313.944 420.574L314.836 422.04L313.971 423.695L312.923 423.599L313.421 424.65L312.058 424.714L312.844 425.224L312.45 427.453L314.388 428.376L315.359 431.304L314.495 431.21L315.045 434.137L313.786 434.359L314.415 435.663L312.424 436.809L312.371 437.858L313.813 438.144L313.708 439.035L315.567 436.809L316.538 437.38L316.434 438.112L316.88 439.352L316.224 440.05L315.019 439.765L316.171 442.15L315.045 442.434L314.469 441.45L312.869 442.499L313.524 443.93L314.388 442.912L315.122 443.453L314.519 444.533L316.537 448.663L313.653 447.806L314.205 447.012L313.446 445.646L312.292 447.552L311.611 447.361L311.82 446.123L309.751 445.678L309.515 447.966L310.223 448.823L308.782 450.093L307.602 449.649L306.869 451.427L308.256 453.809L310.955 453.999L310.484 455.395L308.545 454.062L306.055 455.078L305.873 454.38L305.401 455.142L307.052 456.57L306.894 457.491L305.688 457.015L304.195 458.474L302.387 457.554L301.103 458.315L301.889 456.031L303.959 455.048L301.129 453.936L301.337 451.493L303.381 451.334L302.518 450.571L303.015 449.714L300.893 449.651L299.661 451.048L298.823 449.969L300.238 448.572L299.242 448.413L297.852 449.97L298.089 448.922L297.434 448.54L301.81 447.364L301.836 445.077L302.807 443.457L302.099 443.647L301.104 442.121L302.152 442.438L302.178 441.74L300.737 440.914L299.924 443.393L296.623 443.361L296.518 444.728L295.758 444.474L296.125 445.395L294.867 446.126L293.924 444.441L294.605 443.584L292.142 442.503L291.251 438.783L293.137 435.635L293.95 435.572L293.557 434.872L294.369 435.222L293.897 434.427L295.338 434.617L296.255 433.058L300.107 435.858L301.024 435.699L300.475 434.776L301.915 434.012L305.637 436.619L305.06 433.789L304.065 434.076L304.327 433.025L301.916 430.766L303.803 427.678L303.776 429.047L306.372 428.697L306.344 428.06L307.969 429.11L307.813 427.455L308.886 426.341L308.336 425.609L309.384 425.354L308.886 424.558L309.961 424.431L310.224 424.144L310.956 423.412L309.646 423.539L310.406 420.546L311.298 420.418L311.925 420.701ZM307.941 421.72L308.414 422.963L307.601 426.561L305.872 426.943L305.373 426.244L304.221 427.326L304.429 425.926L305.792 425.097L304.901 424.332L306.473 424.301L306.238 423.187L307.941 421.72ZM236.638 430.349L238.84 431.621L239.023 430.826L239.652 431.112V436.679L237.425 437.507L237.084 439L238.709 441.671L238.132 442.593L241.303 444.024L241.46 446.153L243.164 446.407L242.823 445.549L245.758 443.484L249.48 443.198L250.947 444.596L252.362 444.692L252.834 447.011L251.655 447.074L252.126 448.027L251.365 449.234L252.23 452.758L249.899 455.775L252.388 457.551L248.51 458.375L249.164 456.439L248.222 455.836L247.435 456.122L247.513 457.201L245.993 457.011L245.653 456.186L245.18 457.614L242.612 457.551L241.38 453.267L242.01 449.742L237.659 451.076L238.367 454.76L236.244 456.092L233.256 455.457L233.675 454.728L232.601 454.316L232.785 453.109L231.291 453.013L231.659 450.886L232.732 450.631L231.029 447.677L231.264 446.247L229.089 443.355L228.513 440.526L229.561 438.556L230.531 438.492L230.609 436.362L231.789 434.963L232.182 435.567L233.832 435.343L232.862 434.072L232.967 432.512L234.042 432.13L234.461 430.889L236.638 430.349ZM249.557 433.119L247.644 439.478L248.928 439.765L248.797 437.698L250.109 435.949L251.103 436.076L251.313 437.667L251.917 437.412L252.991 438.717L252.86 440.115L251.76 441.164L252.518 440.847L252.388 442.023H253.83L254.904 443.961L253.541 443.104L252.808 443.708L251.838 442.755L251.052 443.072L248.772 441.547L248.458 442.755L247.069 443.072L243.793 442.182L243.243 438.971L244.553 438.144L246.545 434.391L249.557 433.119ZM265.596 440.242L268.66 442.022L266.172 442.245L264.153 444.279L264.021 442.975L262.738 442.658L262.45 441.323L265.596 440.242ZM269.053 442.434L271.805 445.294L271.255 446.089L269.238 445.899L269.5 447.773L265.49 445.073L265.647 444.279L266.852 444.661L266.197 444.057L267.062 442.818L269.053 442.434ZM292.403 445.105L291.799 445.803H292.691L293.24 449.235L294.447 448.981L294.997 449.806L294.682 450.981L292.797 452.092L290.805 451.648L291.381 450.505L290.044 448.726L290.281 446.439L290.753 448.217L291.513 447.837L291.355 446.788L290.647 445.93L290.935 445.105H292.403ZM269.841 463.96L272.697 465.514L271.701 466.211L272.645 467.162L273.588 465.514L274.923 465.483L274.007 467.765L271.517 466.91L269.762 467.829L269.604 468.748L268.713 468.589L268.451 468.019L269.578 467.323L268.791 466.752L269.053 465.991L268.189 466.498L267.743 465.769L268.845 465.389L268.163 464.406L269.841 463.96Z" fill="#CCCCCC" stroke="white" stroke-width="0.5"/>
<path id="KR-49" class="land" d="M148.17 591.747L148.851 592.528L148.406 593.124L149.848 593.029L149.166 595.938L147.096 595.438L146.651 593.999L148.17 591.747ZM143.558 606.847L140.413 609.126L139.941 611.152L137.478 613.623L137.635 615.059L136.325 616.527L131.267 616.433L128.149 619.678L119.161 620.8L116.41 623.733L114.602 624.419L113.606 623.515L111.903 623.452L111.379 624.731L109.911 623.858L107.762 624.045L102.469 625.697L100.634 623.858L98.302 624.481L96.441 623.482L93.139 624.98L88.92 623.858L85.828 625.884L85.854 628.845L84.466 628.347L83.522 628.97L82.631 628.378L82.867 627.256L82.028 627.225L79.906 624.356L75.031 621.518L73.197 618.524L73.773 615.216L73.197 613.404L74.979 611.936L75.005 610.532L77.757 608.752L78.936 606.94L80.142 607.128L82.317 604.628L82.762 601.815L86.956 600.127L87.401 598.157L92.772 597.125L94.423 595.78L95.603 596.53L103.491 593.466L104.565 592.245L106.584 592.841L108.994 591.87L113.292 591.776L114.078 590.618L117.772 590.368L118.874 588.365L120.761 589.868L121.861 588.74L126.5 587.833L129.67 588.208L129.906 587.27L133.234 588.397L135.986 587.896L137.296 590.901L139.051 591.839L140.047 591.214L143.297 592.245L142.878 593.558H143.9L144.241 594.497L143.087 596.655L144.896 598.093L146.232 597.593L147.306 599.281L146.834 599.844L145.838 599.189L145.026 600.408L144.921 601.439L146.415 602.533L145.681 603.409L144.45 602.096L143.558 606.847Z" fill="#CCCCCC" stroke="white" stroke-width="0.5"/>
<path id="KR-50" class="land" d="M175.795 231.423L173.104 229.809L171.625 228.194L169.069 227.387L166.378 228.464L165.975 230.213L167.05 232.23L167.589 234.248L167.858 237.343L167.186 239.764L167.454 243.127L167.589 246.625V249.72L166.512 252.141L166.647 254.16L168.53 256.715L171.221 258.196L172.566 262.097L172.835 264.922L172.701 268.958L173.912 272.052L175.661 273.398L177.363 275.45L179.543 272.957L179.232 264.238L186.083 262.058L187.037 255.941L186.421 255.081L185.315 255.262L184.738 256.043L186.6 249.957L185.522 248.817L186.44 245.542L183.107 245.346L182.657 243.997V241.194L179.854 237.768L182.035 237.145L182.346 234.342L180.789 232.163L178.351 232.365L175.795 231.423Z" fill="#CCCCCC" stroke="white" stroke-width="0.5"/>
</svg>
`,cv=d.div`
  cursor: pointer;
  overflow: hidden;
  ${({$maxMapHeight:e})=>e?_e`
          max-height: ${e};
        `:void 0}

  svg {
    width: 100%;
    height: auto;
    max-width: 100%;
    display: block;
    margin: 0 auto;
    pointer-events: none;
    ${({$maxMapHeight:e})=>e?_e`
            max-height: ${e};
          `:void 0}
  }

  path.land {
    pointer-events: auto;
    fill: ${({theme:e})=>e.colors.buddingPeach};
    stroke: ${({theme:e})=>e.colors.dustyRose};
    stroke-width: 1;
    cursor: pointer;
    transition: fill 0.25s ease;
  }

  path.land.is-hovered {
    fill: ${({theme:e})=>e.colors.primary600} !important;
  }

  path.land.is-active {
    fill: ${({theme:e})=>e.colors.primary600} !important;
  }

  path.land[id="KR-11"]:not(.is-active):not(.is-hovered),
  path.land[id="KR-41"]:not(.is-active):not(.is-hovered),
  path.land[id="KR-42"]:not(.is-active):not(.is-hovered) {
    fill: #f8e0d8;
  }
`,Ss=({activeRegionId:e,activeRegionIds:t,onSelectRegion:n,maxMapHeight:r})=>{const i=y.useRef(null),s=y.useRef(null);y.useEffect(()=>{const a=i.current;if(!a)return;const c=()=>Array.from(a.querySelectorAll("svg path.land")).filter(C=>C.getAttribute("id")),u=C=>{const x=(C==null?void 0:C.getAttribute("id"))??null;x!==s.current&&(s.current=x,c().forEach(m=>{m.getAttribute("id")===x?m.classList.add("is-hovered"):m.classList.remove("is-hovered")}))},p=(C,x)=>{var M;const m=document.elementFromPoint(C,x);if((M=m==null?void 0:m.matches)!=null&&M.call(m,"path.land"))return m;const L=a.querySelector("svg");if(!L)return null;const b=L.getScreenCTM();if(!b)return null;const $=L.createSVGPoint();$.x=C,$.y=x;const k=$.matrixTransform(b.inverse()),S=c();for(let R=S.length-1;R>=0;R--)if(S[R].isPointInFill(k))return S[R];return null},f=C=>{const x=p(C.clientX,C.clientY);u(x)},h=()=>{u(null)},g=C=>{const x=p(C.clientX,C.clientY);if(x){const m=x.getAttribute("id");m&&n(m,C)}};let w=!1;const v=()=>{if(w)return;if(c().length===0){requestAnimationFrame(v);return}a.addEventListener("pointermove",f),a.addEventListener("pointerleave",h),a.addEventListener("click",g)};return v(),()=>{w=!0,a.removeEventListener("pointermove",f),a.removeEventListener("pointerleave",h),a.removeEventListener("click",g)}},[n]);const l=(t??(e?[e]:[])).map(a=>a==="KR-47"?"KR-48":a);return y.useEffect(()=>{const a=i.current;if(!a)return;a.querySelectorAll("svg path.land").forEach(u=>{const p=u.getAttribute("id");p&&l.includes(p)?u.classList.add("is-active"):u.classList.remove("is-active")})},[l.join("|")]),o.jsx(cv,{ref:i,$maxMapHeight:r,role:"img","aria-label":"대한민국 행정구역 지도",dangerouslySetInnerHTML:{__html:av}})},ah={tags:[],keyword:"",sortBy:"recommend",category:"all"},Dp=Ji(e=>({selectedRegionId:void 0,filters:ah,page:1,pageSize:10,isFilterOpen:!1,setRegion:t=>e({selectedRegionId:t,page:1}),setPage:t=>e({page:t}),setPageSize:t=>e({pageSize:t,page:1}),setKeyword:t=>e(n=>({filters:{...n.filters,keyword:t},page:1})),toggleTag:t=>e(n=>{const i=n.filters.tags.includes(t)?n.filters.tags.filter(s=>s!==t):[...n.filters.tags,t];return{filters:{...n.filters,tags:i},page:1}}),clearTags:()=>e(t=>({filters:{...t.filters,tags:[]},page:1})),setSortBy:t=>e(n=>({filters:{...n.filters,sortBy:t},page:1})),setCategory:t=>e(n=>({filters:{...n.filters,category:t},page:1})),resetFilters:()=>e({filters:ah,page:1}),setFilterOpen:t=>e({isFilterOpen:t})})),tx=Oe`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`,uv=d.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 12px 24px;
  color: ${({theme:e})=>e.colors.text900};
  background: ${({theme:e})=>e.colors.warmCream};

  @media (max-width: 960px) {
    padding: 14px 10px 24px;
  }
`,dv=d.div`
  animation: ${tx} 0.35s ease both;
`,pv=d.div`
  display: block;

  @media (min-width: 961px) {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 28px;
    align-items: start;
  }
`,fv=d.section`
  padding: 12px;
  border-radius: ${({theme:e})=>e.radii.lg};
  margin-bottom: 20px;

  @media (min-width: 961px) {
    max-width: 500px;
    width: 100%;
  }
`,hv=d.section`
  display: flex;
  gap: 10px;
  margin-bottom: 28px;
  overflow-x: auto;
  padding-bottom: 12px;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.colors.warmCream};
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.primary200};
    border-radius: 3px;
  }
`,gv=d.section`
  margin-top: 28px;
  background: ${({theme:e})=>e.colors.warmCream};
`,mv=d.h2`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
  margin: 0 0 16px;
`,xv=d.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 12px;
  -webkit-overflow-scrolling: touch;
`,Lv=d.div`
  @media (min-width: 961px) {
    position: sticky;
    top: 92px;
  }
`,yv=d.button`
  flex-shrink: 0;
  padding: 10px 20px;
  border-radius: 999px;
  border: 1px solid
    ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.primary300};
  background: ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.white};
  color: ${({$active:e})=>e?"#fff":"inherit"};
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: 2px;
  }

  &:hover:not(:disabled) {
    border-color: ${({theme:e})=>e.colors.primary400};
    background: ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.primary50};
  }
`,vv=d.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-areas:
    "filter content";
  gap: 28px;
  animation: ${tx} 0.35s ease both;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-areas: "content";
  }
`,wv=d.aside`
  grid-area: filter;

  @media (max-width: 960px) {
    display: none;
  }
`,bv=d.div`
  grid-area: content;
`,kv=d.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,jv=d.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,ch=d.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text700};
`,Sv=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,Cv=d.p`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.text700};
  margin: 0;
`,$v=d.button`
  display: none;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: ${({theme:e})=>e.radii.pill};

  @media (max-width: 960px) {
    display: flex;
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: 2px;
  }

  svg {
    width: 22px;
    height: 22px;
    stroke: ${({theme:e})=>e.colors.text900};
  }
`,Ev=d.div`
  position: fixed;
  inset: 0;
  z-index: 70;
`,Pv=Oe`from { opacity: 0; } to { opacity: 1; }`,Iv=Oe`from { transform: translateX(100%); } to { transform: translateX(0); }`,Tv=d.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  animation: ${Pv} 0.2s ease;
`,Rv=d.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: min(90vw, 360px);
  background: ${({theme:e})=>e.colors.white};
  padding: 20px;
  overflow-y: auto;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);
  animation: ${Iv} 0.25s ease;
`,Mv=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,zv=d.button`
  width: 36px;
  height: 36px;
  border: none;
  background: ${({theme:e})=>e.colors.bg100};
  border-radius: ${({theme:e})=>e.radii.pill};
  cursor: pointer;
  display: grid;
  place-items: center;

  svg {
    width: 18px;
    height: 18px;
    stroke: ${({theme:e})=>e.colors.text900};
  }
`,Av=d.div`
  height: 1px;
`,uh=()=>{const e=yt(),{selectedRegionId:t,filters:n,page:r,pageSize:i,setPage:s,setRegion:l,setKeyword:a,toggleTag:c,setSortBy:u,setCategory:p,resetFilters:f,isFilterOpen:h,setFilterOpen:g}=Dp(),w=y.useRef(null),[v,C]=y.useState(""),x=en(E=>E.places),m=en(E=>E.regions),L=[{id:"all",name:"전체"},...m],b=y.useMemo(()=>My(x,8),[x]),$=y.useMemo(()=>X3(x),[x]),k=y.useMemo(()=>va(x,n),[x,n]),S=y.useMemo(()=>J3(k,n.sortBy),[k,n.sortBy]),M=y.useMemo(()=>S.slice(0,r*i),[S,r,i]),R=M.length<S.length,I=n.keyword.trim().length>0;y.useEffect(()=>{l("all")},[l]),y.useEffect(()=>{const E=["템플스테이","숲 명상","바다 명상","한옥 명상","호흡 수련","걷기 명상"];let N=0,D=0,H=!1,_;const z=A=>{_=window.setTimeout(()=>{const O=E[N%E.length];if(H?D-=1:D+=1,C(O.slice(0,Math.max(D,0))),!H&&D>=O.length){H=!0,z(700);return}if(H&&D<=0){H=!1,N+=1,z(300);return}z(H?120:240)},A)};return z(240),()=>window.clearTimeout(_)},[]),y.useEffect(()=>{s(1)},[n.keyword,n.sortBy,n.tags,n.category,s]),y.useEffect(()=>{const E=w.current;if(!E||!R||!I)return;const N=new IntersectionObserver(D=>{var H;(H=D[0])!=null&&H.isIntersecting&&s(r+1)},{rootMargin:"200px"});return N.observe(E),()=>N.disconnect()},[R,r,s,I]);const T=E=>{l(E),e("/meditation/map")};return o.jsxs(uv,{children:[o.jsx(Al,{layout:"main",value:n.keyword,onChange:a,placeholder:v||"명상센터 검색"}),I?o.jsxs(vv,{children:[o.jsx(wv,{children:o.jsx(La,{filters:n,availableTags:$,onChangeKeyword:a,onChangeCategory:p,onToggleTag:c,onChangeSortBy:u,onReset:f})}),o.jsx(bv,{children:o.jsxs(kv,{children:[o.jsxs(Sv,{children:[o.jsxs(Cv,{children:["총 ",S.length,"곳의 명상센터"]}),o.jsx($v,{type:"button",onClick:()=>g(!0),"aria-label":"필터",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})})})]}),o.jsxs(jv,{children:[M.length===0&&o.jsx(ch,{children:x.length===0?"등록된 공간이 없습니다.":"조건에 맞는 명상센터가 없어요."}),M.map(E=>o.jsx(Vo,{place:E},E.id))]}),R&&o.jsx(Av,{ref:w})]})})]}):o.jsx(dv,{children:o.jsxs(pv,{children:[o.jsx(fv,{children:o.jsx(Ss,{activeRegionId:t,onSelectRegion:T})}),o.jsxs(Lv,{children:[o.jsx(hv,{children:L.map(E=>o.jsx(yv,{type:"button",$active:t===E.id,onClick:()=>T(E.id),children:E.name},E.id))}),o.jsxs(gv,{children:[o.jsx(mv,{children:"인기 명상지"}),x.length===0?o.jsx(ch,{style:{marginTop:12,textAlign:"center",padding:"24px 8px"},children:"등록된 공간이 없습니다."}):o.jsx(xv,{children:b.map(E=>o.jsx(Qy,{place:E},E.id))})]})]})]})}),I&&h&&o.jsxs(Ev,{children:[o.jsx(Tv,{onClick:()=>g(!1)}),o.jsxs(Rv,{children:[o.jsxs(Mv,{children:[o.jsx("h3",{style:{margin:0,fontSize:"1.2rem"},children:"필터"}),o.jsx(zv,{type:"button",onClick:()=>g(!1),children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),o.jsx(La,{filters:n,availableTags:$,onChangeKeyword:a,onChangeCategory:p,onToggleTag:c,onChangeSortBy:u,onReset:f})]})]})]})},_v=d.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 16px 24px;
  color: ${({theme:e})=>e.colors.text900};
`,Nv=d.header`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`,Ov=d.button`
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  display: grid;
  place-items: center;
  cursor: pointer;
  border-radius: ${({theme:e})=>e.radii.pill};

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: 2px;
  }

  svg {
    width: 24px;
    height: 24px;
    stroke: ${({theme:e})=>e.colors.text900};
  }
`,Dv=d.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: ${({theme:e})=>e.colors.text900};
`,Bv=d.section`
  position: relative;
  padding: 12px;
  border-radius: ${({theme:e})=>e.radii.lg};
  margin-bottom: 20px;
  min-height: 280px;
  overflow: visible;

  svg {
    max-height: 360px;
  }
`,Fv=d.div`
  position: absolute;
  inset: 0;
  z-index: 5;
  cursor: pointer;
  border-radius: ${({theme:e})=>e.radii.lg};
`,Hv=Oe`
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,Uv=d.div`
  position: absolute;
  left: ${({$x:e})=>e}px;
  top: ${({$y:e})=>e}px;
  transform: translate(-50%, -100%);
  z-index: 10;
  filter: drop-shadow(0 6px 20px rgba(75, 0, 130, 0.12));
  animation: ${Hv} 0.2s ease;
`,Vv=d.div`
  position: relative;
  background: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.radii.lg};
  border: 1px solid ${({theme:e})=>e.colors.primary200};
  padding: 16px;
  min-width: 220px;
  max-width: 280px;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -11px;
    transform: translateX(-50%);
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-top: 11px solid ${({theme:e})=>e.colors.primary200};
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%);
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 10px solid ${({theme:e})=>e.colors.white};
  }
`,Wv=d.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 28px;
  height: 28px;
  padding: 0;
  border: none;
  background: transparent;
  color: ${({theme:e})=>e.colors.text700};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({theme:e})=>e.radii.pill};

  &:hover {
    background: ${({theme:e})=>e.colors.primary50};
    color: ${({theme:e})=>e.colors.text900};
  }
`,Kv=d.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.primary700};
  margin: 0 0 4px;
  padding-right: 28px;
`,Yv=d.p`
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.text700};
  margin: 0 0 12px;
  line-height: 1.45;
`,Gv=d.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Zv=d.button`
  width: 100%;
  padding: 12px 14px;
  text-align: left;
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.text900};
  border: 1px solid ${({theme:e})=>e.colors.primary200};
  border-radius: ${({theme:e})=>e.radii.md};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.colors.primary50};
    border-color: ${({theme:e})=>e.colors.primary400};
  }
`,qv=d.section`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`,Qv=d.button`
  padding: 10px 20px;
  border-radius: 999px;
  border: 1px solid
    ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.border200};
  background: ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.white};
  color: ${({$active:e})=>e?"#fff":"inherit"};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({theme:e})=>e.colors.primary400};
    background: ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.primary50};
  }
`,Xv=[{label:"명상지",kind:"place"},{label:"명상센터",kind:"center"},{label:"명상 전문가",kind:"expert"}],Jv=()=>{const e=yt(),t=y.useRef(null),n=en(x=>x.regions),r=y.useMemo(()=>[{id:"all",name:"전체"},...n.map(x=>({id:x.id,name:x.name}))],[n]),i=y.useRef(null),s=y.useRef(null),{selectedRegionId:l,setRegion:a,setCategory:c}=Dp(),[u,p]=y.useState(null),[f,h]=y.useState({x:0,y:0});y.useEffect(()=>{const x=m=>{var S,M,R;if(!u)return;const L=m.target,b=(S=i.current)==null?void 0:S.contains(L),$=(M=t.current)==null?void 0:M.contains(L),k=(R=s.current)==null?void 0:R.contains(L);!b&&!$&&!k&&p(null)};return document.addEventListener("click",x),()=>document.removeEventListener("click",x)},[u]);const g=y.useCallback(x=>{const m=t.current;if(!m)return null;if(x==="all"){const N=m.getBoundingClientRect();return{x:N.width/2,y:N.height/2-40}}const L=m.querySelector(`path.land[id="${x}"]`);if(!L)return null;const b=L.closest("svg");if(!b)return null;const $=L.getBBox();let k=$.x+$.width/2,S=$.y+$.height/2;x==="KR-42"&&(S=$.y+$.height*.65);const M=b.createSVGPoint();M.x=k,M.y=S;const R=b.getScreenCTM();if(!R)return null;const I=M.matrixTransform(R),T=m.getBoundingClientRect(),E=x==="KR-42"?5:x==="KR-11"?0:x==="KR-41"?-15:15;return{x:I.x-T.left,y:I.y-T.top-E}},[]);y.useEffect(()=>{const x=l??"all";p(x);const m=t.current;m?requestAnimationFrame(()=>{const L=g(x);h(L??{x:m.getBoundingClientRect().width/2,y:m.getBoundingClientRect().height/2-40})}):h({x:200,y:120})},[l,g]);const w=x=>{p(x),requestAnimationFrame(()=>{const m=g(x);h(m??{x:200,y:120})})},v=x=>{if(u){if(a(u),x==="expert"){e(`/meditation/region/${u}/experts`);return}c(x==="place"?"템플스테이":"명상센터"),e(`/meditation/region/${u}`)}},C=u?Wn(u):null;return o.jsxs(_v,{children:[o.jsxs(Nv,{children:[o.jsx(Ov,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(Dv,{children:"지역 선택"})]}),o.jsxs(Bv,{ref:t,children:[o.jsx(Ss,{activeRegionId:u??void 0,onSelectRegion:w}),C&&o.jsxs(o.Fragment,{children:[o.jsx(Fv,{onClick:()=>p(null),"aria-label":"모달 닫기"}),o.jsx(Uv,{ref:i,$x:f.x,$y:f.y,children:o.jsxs(Vv,{children:[o.jsx(Wv,{type:"button",onClick:()=>p(null),"aria-label":"닫기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"18",height:"18",children:o.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})}),o.jsx(Kv,{children:C.name}),o.jsx(Yv,{children:"찾으시는 유형을 선택해 주세요"}),o.jsx(Gv,{children:Xv.map(({label:x,kind:m})=>o.jsx(Zv,{type:"button",onClick:()=>v(m),children:x},m))})]})})]})]}),o.jsx(qv,{ref:s,children:r.map(x=>o.jsx(Qv,{type:"button",$active:u===x.id,onClick:()=>{p(x.id),requestAnimationFrame(()=>{const m=g(x.id);h(m??{x:200,y:120})})},children:x.name},x.id))})]})};function ew(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const tw=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,nw=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,rw={};function dh(e,t){return(rw.jsx?nw:tw).test(e)}const iw=/[ \t\n\f\r]/g;function ow(e){return typeof e=="object"?e.type==="text"?ph(e.value):!1:ph(e)}function ph(e){return e.replace(iw,"")===""}class Cs{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}Cs.prototype.normal={};Cs.prototype.property={};Cs.prototype.space=void 0;function nx(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new Cs(n,r,t)}function f1(e){return e.toLowerCase()}class zt{constructor(t,n){this.attribute=n,this.property=t}}zt.prototype.attribute="";zt.prototype.booleanish=!1;zt.prototype.boolean=!1;zt.prototype.commaOrSpaceSeparated=!1;zt.prototype.commaSeparated=!1;zt.prototype.defined=!1;zt.prototype.mustUseProperty=!1;zt.prototype.number=!1;zt.prototype.overloadedBoolean=!1;zt.prototype.property="";zt.prototype.spaceSeparated=!1;zt.prototype.space=void 0;let sw=0;const se=Xr(),qe=Xr(),h1=Xr(),W=Xr(),Ce=Xr(),Ri=Xr(),_t=Xr();function Xr(){return 2**++sw}const g1=Object.freeze(Object.defineProperty({__proto__:null,boolean:se,booleanish:qe,commaOrSpaceSeparated:_t,commaSeparated:Ri,number:W,overloadedBoolean:h1,spaceSeparated:Ce},Symbol.toStringTag,{value:"Module"})),Qc=Object.keys(g1);class Bp extends zt{constructor(t,n,r,i){let s=-1;if(super(t,n),fh(this,"space",i),typeof r=="number")for(;++s<Qc.length;){const l=Qc[s];fh(this,Qc[s],(r&g1[l])===g1[l])}}}Bp.prototype.defined=!0;function fh(e,t,n){n&&(e[t]=n)}function no(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const s=new Bp(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(s.mustUseProperty=!0),t[r]=s,n[f1(r)]=r,n[f1(s.attribute)]=r}return new Cs(t,n,e.space)}const rx=no({properties:{ariaActiveDescendant:null,ariaAtomic:qe,ariaAutoComplete:null,ariaBusy:qe,ariaChecked:qe,ariaColCount:W,ariaColIndex:W,ariaColSpan:W,ariaControls:Ce,ariaCurrent:null,ariaDescribedBy:Ce,ariaDetails:null,ariaDisabled:qe,ariaDropEffect:Ce,ariaErrorMessage:null,ariaExpanded:qe,ariaFlowTo:Ce,ariaGrabbed:qe,ariaHasPopup:null,ariaHidden:qe,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Ce,ariaLevel:W,ariaLive:null,ariaModal:qe,ariaMultiLine:qe,ariaMultiSelectable:qe,ariaOrientation:null,ariaOwns:Ce,ariaPlaceholder:null,ariaPosInSet:W,ariaPressed:qe,ariaReadOnly:qe,ariaRelevant:null,ariaRequired:qe,ariaRoleDescription:Ce,ariaRowCount:W,ariaRowIndex:W,ariaRowSpan:W,ariaSelected:qe,ariaSetSize:W,ariaSort:null,ariaValueMax:W,ariaValueMin:W,ariaValueNow:W,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function ix(e,t){return t in e?e[t]:t}function ox(e,t){return ix(e,t.toLowerCase())}const lw=no({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Ri,acceptCharset:Ce,accessKey:Ce,action:null,allow:null,allowFullScreen:se,allowPaymentRequest:se,allowUserMedia:se,alt:null,as:null,async:se,autoCapitalize:null,autoComplete:Ce,autoFocus:se,autoPlay:se,blocking:Ce,capture:null,charSet:null,checked:se,cite:null,className:Ce,cols:W,colSpan:null,content:null,contentEditable:qe,controls:se,controlsList:Ce,coords:W|Ri,crossOrigin:null,data:null,dateTime:null,decoding:null,default:se,defer:se,dir:null,dirName:null,disabled:se,download:h1,draggable:qe,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:se,formTarget:null,headers:Ce,height:W,hidden:h1,high:W,href:null,hrefLang:null,htmlFor:Ce,httpEquiv:Ce,id:null,imageSizes:null,imageSrcSet:null,inert:se,inputMode:null,integrity:null,is:null,isMap:se,itemId:null,itemProp:Ce,itemRef:Ce,itemScope:se,itemType:Ce,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:se,low:W,manifest:null,max:null,maxLength:W,media:null,method:null,min:null,minLength:W,multiple:se,muted:se,name:null,nonce:null,noModule:se,noValidate:se,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:se,optimum:W,pattern:null,ping:Ce,placeholder:null,playsInline:se,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:se,referrerPolicy:null,rel:Ce,required:se,reversed:se,rows:W,rowSpan:W,sandbox:Ce,scope:null,scoped:se,seamless:se,selected:se,shadowRootClonable:se,shadowRootDelegatesFocus:se,shadowRootMode:null,shape:null,size:W,sizes:null,slot:null,span:W,spellCheck:qe,src:null,srcDoc:null,srcLang:null,srcSet:null,start:W,step:null,style:null,tabIndex:W,target:null,title:null,translate:null,type:null,typeMustMatch:se,useMap:null,value:qe,width:W,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Ce,axis:null,background:null,bgColor:null,border:W,borderColor:null,bottomMargin:W,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:se,declare:se,event:null,face:null,frame:null,frameBorder:null,hSpace:W,leftMargin:W,link:null,longDesc:null,lowSrc:null,marginHeight:W,marginWidth:W,noResize:se,noHref:se,noShade:se,noWrap:se,object:null,profile:null,prompt:null,rev:null,rightMargin:W,rules:null,scheme:null,scrolling:qe,standby:null,summary:null,text:null,topMargin:W,valueType:null,version:null,vAlign:null,vLink:null,vSpace:W,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:se,disableRemotePlayback:se,prefix:null,property:null,results:W,security:null,unselectable:null},space:"html",transform:ox}),aw=no({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:_t,accentHeight:W,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:W,amplitude:W,arabicForm:null,ascent:W,attributeName:null,attributeType:null,azimuth:W,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:W,by:null,calcMode:null,capHeight:W,className:Ce,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:W,diffuseConstant:W,direction:null,display:null,dur:null,divisor:W,dominantBaseline:null,download:se,dx:null,dy:null,edgeMode:null,editable:null,elevation:W,enableBackground:null,end:null,event:null,exponent:W,externalResourcesRequired:null,fill:null,fillOpacity:W,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Ri,g2:Ri,glyphName:Ri,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:W,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:W,horizOriginX:W,horizOriginY:W,id:null,ideographic:W,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:W,k:W,k1:W,k2:W,k3:W,k4:W,kernelMatrix:_t,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:W,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:W,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:W,overlineThickness:W,paintOrder:null,panose1:null,path:null,pathLength:W,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Ce,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:W,pointsAtY:W,pointsAtZ:W,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:_t,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:_t,rev:_t,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:_t,requiredFeatures:_t,requiredFonts:_t,requiredFormats:_t,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:W,specularExponent:W,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:W,strikethroughThickness:W,string:null,stroke:null,strokeDashArray:_t,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:W,strokeOpacity:W,strokeWidth:null,style:null,surfaceScale:W,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:_t,tabIndex:W,tableValues:null,target:null,targetX:W,targetY:W,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:_t,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:W,underlineThickness:W,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:W,values:null,vAlphabetic:W,vMathematical:W,vectorEffect:null,vHanging:W,vIdeographic:W,version:null,vertAdvY:W,vertOriginX:W,vertOriginY:W,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:W,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:ix}),sx=no({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),lx=no({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:ox}),ax=no({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),cw={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},uw=/[A-Z]/g,hh=/-[a-z]/g,dw=/^data[-\w.:]+$/i;function pw(e,t){const n=f1(t);let r=t,i=zt;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&dw.test(t)){if(t.charAt(4)==="-"){const s=t.slice(5).replace(hh,hw);r="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=t.slice(4);if(!hh.test(s)){let l=s.replace(uw,fw);l.charAt(0)!=="-"&&(l="-"+l),t="data"+l}}i=Bp}return new i(r,t)}function fw(e){return"-"+e.toLowerCase()}function hw(e){return e.charAt(1).toUpperCase()}const gw=nx([rx,lw,sx,lx,ax],"html"),Fp=nx([rx,aw,sx,lx,ax],"svg");function mw(e){return e.join(" ").trim()}var Hp={},gh=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,xw=/\n/g,Lw=/^\s*/,yw=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,vw=/^:\s*/,ww=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,bw=/^[;\s]*/,kw=/^\s+|\s+$/g,jw=`
`,mh="/",xh="*",Ir="",Sw="comment",Cw="declaration";function $w(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(w){var v=w.match(xw);v&&(n+=v.length);var C=w.lastIndexOf(jw);r=~C?w.length-C:r+w.length}function s(){var w={line:n,column:r};return function(v){return v.position=new l(w),u(),v}}function l(w){this.start=w,this.end={line:n,column:r},this.source=t.source}l.prototype.content=e;function a(w){var v=new Error(t.source+":"+n+":"+r+": "+w);if(v.reason=w,v.filename=t.source,v.line=n,v.column=r,v.source=e,!t.silent)throw v}function c(w){var v=w.exec(e);if(v){var C=v[0];return i(C),e=e.slice(C.length),v}}function u(){c(Lw)}function p(w){var v;for(w=w||[];v=f();)v!==!1&&w.push(v);return w}function f(){var w=s();if(!(mh!=e.charAt(0)||xh!=e.charAt(1))){for(var v=2;Ir!=e.charAt(v)&&(xh!=e.charAt(v)||mh!=e.charAt(v+1));)++v;if(v+=2,Ir===e.charAt(v-1))return a("End of comment missing");var C=e.slice(2,v-2);return r+=2,i(C),e=e.slice(v),r+=2,w({type:Sw,comment:C})}}function h(){var w=s(),v=c(yw);if(v){if(f(),!c(vw))return a("property missing ':'");var C=c(ww),x=w({type:Cw,property:Lh(v[0].replace(gh,Ir)),value:C?Lh(C[0].replace(gh,Ir)):Ir});return c(bw),x}}function g(){var w=[];p(w);for(var v;v=h();)v!==!1&&(w.push(v),p(w));return w}return u(),g()}function Lh(e){return e?e.replace(kw,Ir):Ir}var Ew=$w,Pw=Dl&&Dl.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Hp,"__esModule",{value:!0});Hp.default=Tw;const Iw=Pw(Ew);function Tw(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,Iw.default)(e),i=typeof t=="function";return r.forEach(s=>{if(s.type!=="declaration")return;const{property:l,value:a}=s;i?t(l,a,s):a&&(n=n||{},n[l]=a)}),n}var Ja={};Object.defineProperty(Ja,"__esModule",{value:!0});Ja.camelCase=void 0;var Rw=/^--[a-zA-Z0-9_-]+$/,Mw=/-([a-z])/g,zw=/^[^-]+$/,Aw=/^-(webkit|moz|ms|o|khtml)-/,_w=/^-(ms)-/,Nw=function(e){return!e||zw.test(e)||Rw.test(e)},Ow=function(e,t){return t.toUpperCase()},yh=function(e,t){return"".concat(t,"-")},Dw=function(e,t){return t===void 0&&(t={}),Nw(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(_w,yh):e=e.replace(Aw,yh),e.replace(Mw,Ow))};Ja.camelCase=Dw;var Bw=Dl&&Dl.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},Fw=Bw(Hp),Hw=Ja;function m1(e,t){var n={};return!e||typeof e!="string"||(0,Fw.default)(e,function(r,i){r&&i&&(n[(0,Hw.camelCase)(r,t)]=i)}),n}m1.default=m1;var Uw=m1;const Vw=Sa(Uw),cx=ux("end"),Up=ux("start");function ux(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Ww(e){const t=Up(e),n=cx(e);if(t&&n)return{start:t,end:n}}function Wo(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?vh(e.position):"start"in e||"end"in e?vh(e):"line"in e||"column"in e?x1(e):""}function x1(e){return wh(e&&e.line)+":"+wh(e&&e.column)}function vh(e){return x1(e&&e.start)+"-"+x1(e&&e.end)}function wh(e){return e&&typeof e=="number"?e:1}class vt extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",s={},l=!1;if(n&&("line"in n&&"column"in n?s={place:n}:"start"in n&&"end"in n?s={place:n}:"type"in n?s={ancestors:[n],place:n.position}:s={...n}),typeof t=="string"?i=t:!s.cause&&t&&(l=!0,i=t.message,s.cause=t),!s.ruleId&&!s.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?s.ruleId=r:(s.source=r.slice(0,c),s.ruleId=r.slice(c+1))}if(!s.place&&s.ancestors&&s.ancestors){const c=s.ancestors[s.ancestors.length-1];c&&(s.place=c.position)}const a=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=a?a.line:void 0,this.name=Wo(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=l&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}vt.prototype.file="";vt.prototype.name="";vt.prototype.reason="";vt.prototype.message="";vt.prototype.stack="";vt.prototype.column=void 0;vt.prototype.line=void 0;vt.prototype.ancestors=void 0;vt.prototype.cause=void 0;vt.prototype.fatal=void 0;vt.prototype.place=void 0;vt.prototype.ruleId=void 0;vt.prototype.source=void 0;const Vp={}.hasOwnProperty,Kw=new Map,Yw=/[A-Z]/g,Gw=new Set(["table","tbody","thead","tfoot","tr"]),Zw=new Set(["td","th"]),dx="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function qw(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=ib(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=rb(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Fp:gw,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},s=px(i,e,void 0);return s&&typeof s!="string"?s:i.create(e,i.Fragment,{children:s||void 0},void 0)}function px(e,t,n){if(t.type==="element")return Qw(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return Xw(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return eb(e,t,n);if(t.type==="mdxjsEsm")return Jw(e,t);if(t.type==="root")return tb(e,t,n);if(t.type==="text")return nb(e,t)}function Qw(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Fp,e.schema=i),e.ancestors.push(t);const s=hx(e,t.tagName,!1),l=ob(e,t);let a=Kp(e,t);return Gw.has(t.tagName)&&(a=a.filter(function(c){return typeof c=="string"?!ow(c):!0})),fx(e,l,s,t),Wp(l,a),e.ancestors.pop(),e.schema=r,e.create(t,s,l,n)}function Xw(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}xs(e,t.position)}function Jw(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);xs(e,t.position)}function eb(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=Fp,e.schema=i),e.ancestors.push(t);const s=t.name===null?e.Fragment:hx(e,t.name,!0),l=sb(e,t),a=Kp(e,t);return fx(e,l,s,t),Wp(l,a),e.ancestors.pop(),e.schema=r,e.create(t,s,l,n)}function tb(e,t,n){const r={};return Wp(r,Kp(e,t)),e.create(t,e.Fragment,r,n)}function nb(e,t){return t.value}function fx(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Wp(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function rb(e,t,n){return r;function r(i,s,l,a){const u=Array.isArray(l.children)?n:t;return a?u(s,l,a):u(s,l)}}function ib(e,t){return n;function n(r,i,s,l){const a=Array.isArray(s.children),c=Up(r);return t(i,s,l,a,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function ob(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&Vp.call(t.properties,i)){const s=lb(e,i,t.properties[i]);if(s){const[l,a]=s;e.tableCellAlignToStyle&&l==="align"&&typeof a=="string"&&Zw.has(t.tagName)?r=a:n[l]=a}}if(r){const s=n.style||(n.style={});s[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function sb(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const s=r.data.estree.body[0];s.type;const l=s.expression;l.type;const a=l.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else xs(e,t.position);else{const i=r.name;let s;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const a=r.value.data.estree.body[0];a.type,s=e.evaluater.evaluateExpression(a.expression)}else xs(e,t.position);else s=r.value===null?!0:r.value;n[i]=s}return n}function Kp(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:Kw;for(;++r<t.children.length;){const s=t.children[r];let l;if(e.passKeys){const c=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(c){const u=i.get(c)||0;l=c+"-"+u,i.set(c,u+1)}}const a=px(e,s,l);a!==void 0&&n.push(a)}return n}function lb(e,t,n){const r=pw(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?ew(n):mw(n)),r.property==="style"){let i=typeof n=="object"?n:ab(e,String(n));return e.stylePropertyNameCase==="css"&&(i=cb(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?cw[r.property]||r.property:r.attribute,n]}}function ab(e,t){try{return Vw(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new vt("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=dx+"#cannot-parse-style-attribute",i}}function hx(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let s=-1,l;for(;++s<i.length;){const a=dh(i[s])?{type:"Identifier",name:i[s]}:{type:"Literal",value:i[s]};l=l?{type:"MemberExpression",object:l,property:a,computed:!!(s&&a.type==="Literal"),optional:!1}:a}r=l}else r=dh(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return Vp.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);xs(e)}function xs(e,t){const n=new vt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=dx+"#cannot-handle-mdx-estrees-without-createevaluater",n}function cb(e){const t={};let n;for(n in e)Vp.call(e,n)&&(t[ub(n)]=e[n]);return t}function ub(e){let t=e.replace(Yw,db);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function db(e){return"-"+e.toLowerCase()}const Xc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},pb={};function fb(e,t){const n=pb,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return gx(e,r,i)}function gx(e,t,n){if(hb(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return bh(e.children,t,n)}return Array.isArray(e)?bh(e,t,n):""}function bh(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=gx(e[i],t,n);return r.join("")}function hb(e){return!!(e&&typeof e=="object")}const kh=document.createElement("i");function Yp(e){const t="&"+e+";";kh.innerHTML=t;const n=kh.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function In(e,t,n,r){const i=e.length;let s=0,l;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)l=Array.from(r),l.unshift(t,n),e.splice(...l);else for(n&&e.splice(t,n);s<r.length;)l=r.slice(s,s+1e4),l.unshift(t,0),e.splice(...l),s+=1e4,t+=1e4}function Qt(e,t){return e.length>0?(In(e,e.length,0,t),e):t}const jh={}.hasOwnProperty;function gb(e){const t={};let n=-1;for(;++n<e.length;)mb(t,e[n]);return t}function mb(e,t){let n;for(n in t){const i=(jh.call(e,n)?e[n]:void 0)||(e[n]={}),s=t[n];let l;if(s)for(l in s){jh.call(i,l)||(i[l]=[]);const a=s[l];xb(i[l],Array.isArray(a)?a:a?[a]:[])}}}function xb(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);In(e,0,0,r)}function mx(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Mi(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Cn=wr(/[A-Za-z]/),Bt=wr(/[\dA-Za-z]/),Lb=wr(/[#-'*+\--9=?A-Z^-~]/);function L1(e){return e!==null&&(e<32||e===127)}const y1=wr(/\d/),yb=wr(/[\dA-Fa-f]/),vb=wr(/[!-/:-@[-`{-~]/);function ie(e){return e!==null&&e<-2}function Mt(e){return e!==null&&(e<0||e===32)}function ye(e){return e===-2||e===-1||e===32}const wb=wr(new RegExp("\\p{P}|\\p{S}","u")),bb=wr(/\s/);function wr(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function ro(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const s=e.charCodeAt(n);let l="";if(s===37&&Bt(e.charCodeAt(n+1))&&Bt(e.charCodeAt(n+2)))i=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(l=String.fromCharCode(s));else if(s>55295&&s<57344){const a=e.charCodeAt(n+1);s<56320&&a>56319&&a<57344?(l=String.fromCharCode(s,a),i=1):l="�"}else l=String.fromCharCode(s);l&&(t.push(e.slice(r,n),encodeURIComponent(l)),r=n+i+1,l=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function Pe(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let s=0;return l;function l(c){return ye(c)?(e.enter(n),a(c)):t(c)}function a(c){return ye(c)&&s++<i?(e.consume(c),a):(e.exit(n),t(c))}}const kb={tokenize:jb};function jb(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),Pe(e,t,"linePrefix")}function i(a){return e.enter("paragraph"),s(a)}function s(a){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,l(a)}function l(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return ie(a)?(e.consume(a),e.exit("chunkText"),s):(e.consume(a),l)}}const Sb={tokenize:Cb},Sh={tokenize:$b};function Cb(e){const t=this,n=[];let r=0,i,s,l;return a;function a(L){if(r<n.length){const b=n[r];return t.containerState=b[1],e.attempt(b[0].continuation,c,u)(L)}return u(L)}function c(L){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&m();const b=t.events.length;let $=b,k;for(;$--;)if(t.events[$][0]==="exit"&&t.events[$][1].type==="chunkFlow"){k=t.events[$][1].end;break}x(r);let S=b;for(;S<t.events.length;)t.events[S][1].end={...k},S++;return In(t.events,$+1,0,t.events.slice(b)),t.events.length=S,u(L)}return a(L)}function u(L){if(r===n.length){if(!i)return h(L);if(i.currentConstruct&&i.currentConstruct.concrete)return w(L);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Sh,p,f)(L)}function p(L){return i&&m(),x(r),h(L)}function f(L){return t.parser.lazy[t.now().line]=r!==n.length,l=t.now().offset,w(L)}function h(L){return t.containerState={},e.attempt(Sh,g,w)(L)}function g(L){return r++,n.push([t.currentConstruct,t.containerState]),h(L)}function w(L){if(L===null){i&&m(),x(0),e.consume(L);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:s}),v(L)}function v(L){if(L===null){C(e.exit("chunkFlow"),!0),x(0),e.consume(L);return}return ie(L)?(e.consume(L),C(e.exit("chunkFlow")),r=0,t.interrupt=void 0,a):(e.consume(L),v)}function C(L,b){const $=t.sliceStream(L);if(b&&$.push(null),L.previous=s,s&&(s.next=L),s=L,i.defineSkip(L.start),i.write($),t.parser.lazy[L.start.line]){let k=i.events.length;for(;k--;)if(i.events[k][1].start.offset<l&&(!i.events[k][1].end||i.events[k][1].end.offset>l))return;const S=t.events.length;let M=S,R,I;for(;M--;)if(t.events[M][0]==="exit"&&t.events[M][1].type==="chunkFlow"){if(R){I=t.events[M][1].end;break}R=!0}for(x(r),k=S;k<t.events.length;)t.events[k][1].end={...I},k++;In(t.events,M+1,0,t.events.slice(S)),t.events.length=k}}function x(L){let b=n.length;for(;b-- >L;){const $=n[b];t.containerState=$[1],$[0].exit.call(t,e)}n.length=L}function m(){i.write([null]),s=void 0,i=void 0,t.containerState._closeFlow=void 0}}function $b(e,t,n){return Pe(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Ch(e){if(e===null||Mt(e)||bb(e))return 1;if(wb(e))return 2}function Gp(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const s=e[i].resolveAll;s&&!r.includes(s)&&(t=s(t,n),r.push(s))}return t}const v1={name:"attention",resolveAll:Eb,tokenize:Pb};function Eb(e,t){let n=-1,r,i,s,l,a,c,u,p;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const f={...e[r][1].end},h={...e[n][1].start};$h(f,-c),$h(h,c),l={type:c>1?"strongSequence":"emphasisSequence",start:f,end:{...e[r][1].end}},a={type:c>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:h},s={type:c>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?"strong":"emphasis",start:{...l.start},end:{...a.end}},e[r][1].end={...l.start},e[n][1].start={...a.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=Qt(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=Qt(u,[["enter",i,t],["enter",l,t],["exit",l,t],["enter",s,t]]),u=Qt(u,Gp(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=Qt(u,[["exit",s,t],["enter",a,t],["exit",a,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(p=2,u=Qt(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):p=0,In(e,r-1,n-r+3,u),n=r+u.length-p-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function Pb(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Ch(r);let s;return l;function l(c){return s=c,e.enter("attentionSequence"),a(c)}function a(c){if(c===s)return e.consume(c),a;const u=e.exit("attentionSequence"),p=Ch(c),f=!p||p===2&&i||n.includes(c),h=!i||i===2&&p||n.includes(r);return u._open=!!(s===42?f:f&&(i||!h)),u._close=!!(s===42?h:h&&(p||!f)),t(c)}}function $h(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const Ib={name:"autolink",tokenize:Tb};function Tb(e,t,n){let r=0;return i;function i(g){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(g),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),s}function s(g){return Cn(g)?(e.consume(g),l):g===64?n(g):u(g)}function l(g){return g===43||g===45||g===46||Bt(g)?(r=1,a(g)):u(g)}function a(g){return g===58?(e.consume(g),r=0,c):(g===43||g===45||g===46||Bt(g))&&r++<32?(e.consume(g),a):(r=0,u(g))}function c(g){return g===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(g),e.exit("autolinkMarker"),e.exit("autolink"),t):g===null||g===32||g===60||L1(g)?n(g):(e.consume(g),c)}function u(g){return g===64?(e.consume(g),p):Lb(g)?(e.consume(g),u):n(g)}function p(g){return Bt(g)?f(g):n(g)}function f(g){return g===46?(e.consume(g),r=0,p):g===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(g),e.exit("autolinkMarker"),e.exit("autolink"),t):h(g)}function h(g){if((g===45||Bt(g))&&r++<63){const w=g===45?h:f;return e.consume(g),w}return n(g)}}const ec={partial:!0,tokenize:Rb};function Rb(e,t,n){return r;function r(s){return ye(s)?Pe(e,i,"linePrefix")(s):i(s)}function i(s){return s===null||ie(s)?t(s):n(s)}}const xx={continuation:{tokenize:zb},exit:Ab,name:"blockQuote",tokenize:Mb};function Mb(e,t,n){const r=this;return i;function i(l){if(l===62){const a=r.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(l),e.exit("blockQuoteMarker"),s}return n(l)}function s(l){return ye(l)?(e.enter("blockQuotePrefixWhitespace"),e.consume(l),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(l))}}function zb(e,t,n){const r=this;return i;function i(l){return ye(l)?Pe(e,s,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l):s(l)}function s(l){return e.attempt(xx,t,n)(l)}}function Ab(e){e.exit("blockQuote")}const Lx={name:"characterEscape",tokenize:_b};function _b(e,t,n){return r;function r(s){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(s),e.exit("escapeMarker"),i}function i(s){return vb(s)?(e.enter("characterEscapeValue"),e.consume(s),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(s)}}const yx={name:"characterReference",tokenize:Nb};function Nb(e,t,n){const r=this;let i=0,s,l;return a;function a(f){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),c}function c(f){return f===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(f),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),s=31,l=Bt,p(f))}function u(f){return f===88||f===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(f),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),s=6,l=yb,p):(e.enter("characterReferenceValue"),s=7,l=y1,p(f))}function p(f){if(f===59&&i){const h=e.exit("characterReferenceValue");return l===Bt&&!Yp(r.sliceSerialize(h))?n(f):(e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return l(f)&&i++<s?(e.consume(f),p):n(f)}}const Eh={partial:!0,tokenize:Db},Ph={concrete:!0,name:"codeFenced",tokenize:Ob};function Ob(e,t,n){const r=this,i={partial:!0,tokenize:$};let s=0,l=0,a;return c;function c(k){return u(k)}function u(k){const S=r.events[r.events.length-1];return s=S&&S[1].type==="linePrefix"?S[2].sliceSerialize(S[1],!0).length:0,a=k,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),p(k)}function p(k){return k===a?(l++,e.consume(k),p):l<3?n(k):(e.exit("codeFencedFenceSequence"),ye(k)?Pe(e,f,"whitespace")(k):f(k))}function f(k){return k===null||ie(k)?(e.exit("codeFencedFence"),r.interrupt?t(k):e.check(Eh,v,b)(k)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),h(k))}function h(k){return k===null||ie(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),f(k)):ye(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Pe(e,g,"whitespace")(k)):k===96&&k===a?n(k):(e.consume(k),h)}function g(k){return k===null||ie(k)?f(k):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),w(k))}function w(k){return k===null||ie(k)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),f(k)):k===96&&k===a?n(k):(e.consume(k),w)}function v(k){return e.attempt(i,b,C)(k)}function C(k){return e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),x}function x(k){return s>0&&ye(k)?Pe(e,m,"linePrefix",s+1)(k):m(k)}function m(k){return k===null||ie(k)?e.check(Eh,v,b)(k):(e.enter("codeFlowValue"),L(k))}function L(k){return k===null||ie(k)?(e.exit("codeFlowValue"),m(k)):(e.consume(k),L)}function b(k){return e.exit("codeFenced"),t(k)}function $(k,S,M){let R=0;return I;function I(H){return k.enter("lineEnding"),k.consume(H),k.exit("lineEnding"),T}function T(H){return k.enter("codeFencedFence"),ye(H)?Pe(k,E,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(H):E(H)}function E(H){return H===a?(k.enter("codeFencedFenceSequence"),N(H)):M(H)}function N(H){return H===a?(R++,k.consume(H),N):R>=l?(k.exit("codeFencedFenceSequence"),ye(H)?Pe(k,D,"whitespace")(H):D(H)):M(H)}function D(H){return H===null||ie(H)?(k.exit("codeFencedFence"),S(H)):M(H)}}}function Db(e,t,n){const r=this;return i;function i(l){return l===null?n(l):(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),s)}function s(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}const Jc={name:"codeIndented",tokenize:Fb},Bb={partial:!0,tokenize:Hb};function Fb(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),Pe(e,s,"linePrefix",5)(u)}function s(u){const p=r.events[r.events.length-1];return p&&p[1].type==="linePrefix"&&p[2].sliceSerialize(p[1],!0).length>=4?l(u):n(u)}function l(u){return u===null?c(u):ie(u)?e.attempt(Bb,l,c)(u):(e.enter("codeFlowValue"),a(u))}function a(u){return u===null||ie(u)?(e.exit("codeFlowValue"),l(u)):(e.consume(u),a)}function c(u){return e.exit("codeIndented"),t(u)}}function Hb(e,t,n){const r=this;return i;function i(l){return r.parser.lazy[r.now().line]?n(l):ie(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),i):Pe(e,s,"linePrefix",5)(l)}function s(l){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(l):ie(l)?i(l):n(l)}}const Ub={name:"codeText",previous:Wb,resolve:Vb,tokenize:Kb};function Vb(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Wb(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Kb(e,t,n){let r=0,i,s;return l;function l(f){return e.enter("codeText"),e.enter("codeTextSequence"),a(f)}function a(f){return f===96?(e.consume(f),r++,a):(e.exit("codeTextSequence"),c(f))}function c(f){return f===null?n(f):f===32?(e.enter("space"),e.consume(f),e.exit("space"),c):f===96?(s=e.enter("codeTextSequence"),i=0,p(f)):ie(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),c):(e.enter("codeTextData"),u(f))}function u(f){return f===null||f===32||f===96||ie(f)?(e.exit("codeTextData"),c(f)):(e.consume(f),u)}function p(f){return f===96?(e.consume(f),i++,p):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(f)):(s.type="codeTextData",u(f))}}class Yb{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const s=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&mo(this.left,r),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),mo(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),mo(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);mo(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);mo(this.left,n.reverse())}}}function mo(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function vx(e){const t={};let n=-1,r,i,s,l,a,c,u;const p=new Yb(e);for(;++n<p.length;){for(;n in t;)n=t[n];if(r=p.get(n),n&&r[1].type==="chunkFlow"&&p.get(n-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,s=0,s<c.length&&c[s][1].type==="lineEndingBlank"&&(s+=2),s<c.length&&c[s][1].type==="content"))for(;++s<c.length&&c[s][1].type!=="content";)c[s][1].type==="chunkText"&&(c[s][1]._isInFirstContentOfListItem=!0,s++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,Gb(p,n)),n=t[n],u=!0);else if(r[1]._container){for(s=n,i=void 0;s--;)if(l=p.get(s),l[1].type==="lineEnding"||l[1].type==="lineEndingBlank")l[0]==="enter"&&(i&&(p.get(i)[1].type="lineEndingBlank"),l[1].type="lineEnding",i=s);else if(!(l[1].type==="linePrefix"||l[1].type==="listItemIndent"))break;i&&(r[1].end={...p.get(i)[1].start},a=p.slice(i,n),a.unshift(r),p.splice(i,n-i+1,a))}}return In(e,0,Number.POSITIVE_INFINITY,p.slice(0)),!u}function Gb(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const s=[];let l=n._tokenizer;l||(l=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(l._contentTypeTextTrailing=!0));const a=l.events,c=[],u={};let p,f,h=-1,g=n,w=0,v=0;const C=[v];for(;g;){for(;e.get(++i)[1]!==g;);s.push(i),g._tokenizer||(p=r.sliceStream(g),g.next||p.push(null),f&&l.defineSkip(g.start),g._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(p),g._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),f=g,g=g.next}for(g=n;++h<a.length;)a[h][0]==="exit"&&a[h-1][0]==="enter"&&a[h][1].type===a[h-1][1].type&&a[h][1].start.line!==a[h][1].end.line&&(v=h+1,C.push(v),g._tokenizer=void 0,g.previous=void 0,g=g.next);for(l.events=[],g?(g._tokenizer=void 0,g.previous=void 0):C.pop(),h=C.length;h--;){const x=a.slice(C[h],C[h+1]),m=s.pop();c.push([m,m+x.length-1]),e.splice(m,2,x)}for(c.reverse(),h=-1;++h<c.length;)u[w+c[h][0]]=w+c[h][1],w+=c[h][1]-c[h][0]-1;return u}const Zb={resolve:Qb,tokenize:Xb},qb={partial:!0,tokenize:Jb};function Qb(e){return vx(e),e}function Xb(e,t){let n;return r;function r(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?s(a):ie(a)?e.check(qb,l,s)(a):(e.consume(a),i)}function s(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function l(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function Jb(e,t,n){const r=this;return i;function i(l){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),Pe(e,s,"linePrefix")}function s(l){if(l===null||ie(l))return n(l);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(l):e.interrupt(r.parser.constructs.flow,n,t)(l)}}function wx(e,t,n,r,i,s,l,a,c){const u=c||Number.POSITIVE_INFINITY;let p=0;return f;function f(x){return x===60?(e.enter(r),e.enter(i),e.enter(s),e.consume(x),e.exit(s),h):x===null||x===32||x===41||L1(x)?n(x):(e.enter(r),e.enter(l),e.enter(a),e.enter("chunkString",{contentType:"string"}),v(x))}function h(x){return x===62?(e.enter(s),e.consume(x),e.exit(s),e.exit(i),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),g(x))}function g(x){return x===62?(e.exit("chunkString"),e.exit(a),h(x)):x===null||x===60||ie(x)?n(x):(e.consume(x),x===92?w:g)}function w(x){return x===60||x===62||x===92?(e.consume(x),g):g(x)}function v(x){return!p&&(x===null||x===41||Mt(x))?(e.exit("chunkString"),e.exit(a),e.exit(l),e.exit(r),t(x)):p<u&&x===40?(e.consume(x),p++,v):x===41?(e.consume(x),p--,v):x===null||x===32||x===40||L1(x)?n(x):(e.consume(x),x===92?C:v)}function C(x){return x===40||x===41||x===92?(e.consume(x),v):v(x)}}function bx(e,t,n,r,i,s){const l=this;let a=0,c;return u;function u(g){return e.enter(r),e.enter(i),e.consume(g),e.exit(i),e.enter(s),p}function p(g){return a>999||g===null||g===91||g===93&&!c||g===94&&!a&&"_hiddenFootnoteSupport"in l.parser.constructs?n(g):g===93?(e.exit(s),e.enter(i),e.consume(g),e.exit(i),e.exit(r),t):ie(g)?(e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),p):(e.enter("chunkString",{contentType:"string"}),f(g))}function f(g){return g===null||g===91||g===93||ie(g)||a++>999?(e.exit("chunkString"),p(g)):(e.consume(g),c||(c=!ye(g)),g===92?h:f)}function h(g){return g===91||g===92||g===93?(e.consume(g),a++,f):f(g)}}function kx(e,t,n,r,i,s){let l;return a;function a(h){return h===34||h===39||h===40?(e.enter(r),e.enter(i),e.consume(h),e.exit(i),l=h===40?41:h,c):n(h)}function c(h){return h===l?(e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):(e.enter(s),u(h))}function u(h){return h===l?(e.exit(s),c(l)):h===null?n(h):ie(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),Pe(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),p(h))}function p(h){return h===l||h===null||ie(h)?(e.exit("chunkString"),u(h)):(e.consume(h),h===92?f:p)}function f(h){return h===l||h===92?(e.consume(h),p):p(h)}}function Ko(e,t){let n;return r;function r(i){return ie(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):ye(i)?Pe(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const ek={name:"definition",tokenize:nk},tk={partial:!0,tokenize:rk};function nk(e,t,n){const r=this;let i;return s;function s(g){return e.enter("definition"),l(g)}function l(g){return bx.call(r,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(g)}function a(g){return i=Mi(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),g===58?(e.enter("definitionMarker"),e.consume(g),e.exit("definitionMarker"),c):n(g)}function c(g){return Mt(g)?Ko(e,u)(g):u(g)}function u(g){return wx(e,p,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(g)}function p(g){return e.attempt(tk,f,f)(g)}function f(g){return ye(g)?Pe(e,h,"whitespace")(g):h(g)}function h(g){return g===null||ie(g)?(e.exit("definition"),r.parser.defined.push(i),t(g)):n(g)}}function rk(e,t,n){return r;function r(a){return Mt(a)?Ko(e,i)(a):n(a)}function i(a){return kx(e,s,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function s(a){return ye(a)?Pe(e,l,"whitespace")(a):l(a)}function l(a){return a===null||ie(a)?t(a):n(a)}}const ik={name:"hardBreakEscape",tokenize:ok};function ok(e,t,n){return r;function r(s){return e.enter("hardBreakEscape"),e.consume(s),i}function i(s){return ie(s)?(e.exit("hardBreakEscape"),t(s)):n(s)}}const sk={name:"headingAtx",resolve:lk,tokenize:ak};function lk(e,t){let n=e.length-2,r=3,i,s;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},s={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},In(e,r,n-r+1,[["enter",i,t],["enter",s,t],["exit",s,t],["exit",i,t]])),e}function ak(e,t,n){let r=0;return i;function i(p){return e.enter("atxHeading"),s(p)}function s(p){return e.enter("atxHeadingSequence"),l(p)}function l(p){return p===35&&r++<6?(e.consume(p),l):p===null||Mt(p)?(e.exit("atxHeadingSequence"),a(p)):n(p)}function a(p){return p===35?(e.enter("atxHeadingSequence"),c(p)):p===null||ie(p)?(e.exit("atxHeading"),t(p)):ye(p)?Pe(e,a,"whitespace")(p):(e.enter("atxHeadingText"),u(p))}function c(p){return p===35?(e.consume(p),c):(e.exit("atxHeadingSequence"),a(p))}function u(p){return p===null||p===35||Mt(p)?(e.exit("atxHeadingText"),a(p)):(e.consume(p),u)}}const ck=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Ih=["pre","script","style","textarea"],uk={concrete:!0,name:"htmlFlow",resolveTo:fk,tokenize:hk},dk={partial:!0,tokenize:mk},pk={partial:!0,tokenize:gk};function fk(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function hk(e,t,n){const r=this;let i,s,l,a,c;return u;function u(P){return p(P)}function p(P){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(P),f}function f(P){return P===33?(e.consume(P),h):P===47?(e.consume(P),s=!0,v):P===63?(e.consume(P),i=3,r.interrupt?t:j):Cn(P)?(e.consume(P),l=String.fromCharCode(P),C):n(P)}function h(P){return P===45?(e.consume(P),i=2,g):P===91?(e.consume(P),i=5,a=0,w):Cn(P)?(e.consume(P),i=4,r.interrupt?t:j):n(P)}function g(P){return P===45?(e.consume(P),r.interrupt?t:j):n(P)}function w(P){const G="CDATA[";return P===G.charCodeAt(a++)?(e.consume(P),a===G.length?r.interrupt?t:E:w):n(P)}function v(P){return Cn(P)?(e.consume(P),l=String.fromCharCode(P),C):n(P)}function C(P){if(P===null||P===47||P===62||Mt(P)){const G=P===47,te=l.toLowerCase();return!G&&!s&&Ih.includes(te)?(i=1,r.interrupt?t(P):E(P)):ck.includes(l.toLowerCase())?(i=6,G?(e.consume(P),x):r.interrupt?t(P):E(P)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(P):s?m(P):L(P))}return P===45||Bt(P)?(e.consume(P),l+=String.fromCharCode(P),C):n(P)}function x(P){return P===62?(e.consume(P),r.interrupt?t:E):n(P)}function m(P){return ye(P)?(e.consume(P),m):I(P)}function L(P){return P===47?(e.consume(P),I):P===58||P===95||Cn(P)?(e.consume(P),b):ye(P)?(e.consume(P),L):I(P)}function b(P){return P===45||P===46||P===58||P===95||Bt(P)?(e.consume(P),b):$(P)}function $(P){return P===61?(e.consume(P),k):ye(P)?(e.consume(P),$):L(P)}function k(P){return P===null||P===60||P===61||P===62||P===96?n(P):P===34||P===39?(e.consume(P),c=P,S):ye(P)?(e.consume(P),k):M(P)}function S(P){return P===c?(e.consume(P),c=null,R):P===null||ie(P)?n(P):(e.consume(P),S)}function M(P){return P===null||P===34||P===39||P===47||P===60||P===61||P===62||P===96||Mt(P)?$(P):(e.consume(P),M)}function R(P){return P===47||P===62||ye(P)?L(P):n(P)}function I(P){return P===62?(e.consume(P),T):n(P)}function T(P){return P===null||ie(P)?E(P):ye(P)?(e.consume(P),T):n(P)}function E(P){return P===45&&i===2?(e.consume(P),_):P===60&&i===1?(e.consume(P),z):P===62&&i===4?(e.consume(P),Z):P===63&&i===3?(e.consume(P),j):P===93&&i===5?(e.consume(P),O):ie(P)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(dk,Q,N)(P)):P===null||ie(P)?(e.exit("htmlFlowData"),N(P)):(e.consume(P),E)}function N(P){return e.check(pk,D,Q)(P)}function D(P){return e.enter("lineEnding"),e.consume(P),e.exit("lineEnding"),H}function H(P){return P===null||ie(P)?N(P):(e.enter("htmlFlowData"),E(P))}function _(P){return P===45?(e.consume(P),j):E(P)}function z(P){return P===47?(e.consume(P),l="",A):E(P)}function A(P){if(P===62){const G=l.toLowerCase();return Ih.includes(G)?(e.consume(P),Z):E(P)}return Cn(P)&&l.length<8?(e.consume(P),l+=String.fromCharCode(P),A):E(P)}function O(P){return P===93?(e.consume(P),j):E(P)}function j(P){return P===62?(e.consume(P),Z):P===45&&i===2?(e.consume(P),j):E(P)}function Z(P){return P===null||ie(P)?(e.exit("htmlFlowData"),Q(P)):(e.consume(P),Z)}function Q(P){return e.exit("htmlFlow"),t(P)}}function gk(e,t,n){const r=this;return i;function i(l){return ie(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),s):n(l)}function s(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}function mk(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(ec,t,n)}}const xk={name:"htmlText",tokenize:Lk};function Lk(e,t,n){const r=this;let i,s,l;return a;function a(j){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(j),c}function c(j){return j===33?(e.consume(j),u):j===47?(e.consume(j),$):j===63?(e.consume(j),L):Cn(j)?(e.consume(j),M):n(j)}function u(j){return j===45?(e.consume(j),p):j===91?(e.consume(j),s=0,w):Cn(j)?(e.consume(j),m):n(j)}function p(j){return j===45?(e.consume(j),g):n(j)}function f(j){return j===null?n(j):j===45?(e.consume(j),h):ie(j)?(l=f,z(j)):(e.consume(j),f)}function h(j){return j===45?(e.consume(j),g):f(j)}function g(j){return j===62?_(j):j===45?h(j):f(j)}function w(j){const Z="CDATA[";return j===Z.charCodeAt(s++)?(e.consume(j),s===Z.length?v:w):n(j)}function v(j){return j===null?n(j):j===93?(e.consume(j),C):ie(j)?(l=v,z(j)):(e.consume(j),v)}function C(j){return j===93?(e.consume(j),x):v(j)}function x(j){return j===62?_(j):j===93?(e.consume(j),x):v(j)}function m(j){return j===null||j===62?_(j):ie(j)?(l=m,z(j)):(e.consume(j),m)}function L(j){return j===null?n(j):j===63?(e.consume(j),b):ie(j)?(l=L,z(j)):(e.consume(j),L)}function b(j){return j===62?_(j):L(j)}function $(j){return Cn(j)?(e.consume(j),k):n(j)}function k(j){return j===45||Bt(j)?(e.consume(j),k):S(j)}function S(j){return ie(j)?(l=S,z(j)):ye(j)?(e.consume(j),S):_(j)}function M(j){return j===45||Bt(j)?(e.consume(j),M):j===47||j===62||Mt(j)?R(j):n(j)}function R(j){return j===47?(e.consume(j),_):j===58||j===95||Cn(j)?(e.consume(j),I):ie(j)?(l=R,z(j)):ye(j)?(e.consume(j),R):_(j)}function I(j){return j===45||j===46||j===58||j===95||Bt(j)?(e.consume(j),I):T(j)}function T(j){return j===61?(e.consume(j),E):ie(j)?(l=T,z(j)):ye(j)?(e.consume(j),T):R(j)}function E(j){return j===null||j===60||j===61||j===62||j===96?n(j):j===34||j===39?(e.consume(j),i=j,N):ie(j)?(l=E,z(j)):ye(j)?(e.consume(j),E):(e.consume(j),D)}function N(j){return j===i?(e.consume(j),i=void 0,H):j===null?n(j):ie(j)?(l=N,z(j)):(e.consume(j),N)}function D(j){return j===null||j===34||j===39||j===60||j===61||j===96?n(j):j===47||j===62||Mt(j)?R(j):(e.consume(j),D)}function H(j){return j===47||j===62||Mt(j)?R(j):n(j)}function _(j){return j===62?(e.consume(j),e.exit("htmlTextData"),e.exit("htmlText"),t):n(j)}function z(j){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(j),e.exit("lineEnding"),A}function A(j){return ye(j)?Pe(e,O,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(j):O(j)}function O(j){return e.enter("htmlTextData"),l(j)}}const Zp={name:"labelEnd",resolveAll:bk,resolveTo:kk,tokenize:jk},yk={tokenize:Sk},vk={tokenize:Ck},wk={tokenize:$k};function bk(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&In(e,0,e.length,n),e}function kk(e,t){let n=e.length,r=0,i,s,l,a;for(;n--;)if(i=e[n][1],s){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(l){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(s=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(l=n);const c={type:e[s][1].type==="labelLink"?"link":"image",start:{...e[s][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[s][1].start},end:{...e[l][1].end}},p={type:"labelText",start:{...e[s+r+2][1].end},end:{...e[l-2][1].start}};return a=[["enter",c,t],["enter",u,t]],a=Qt(a,e.slice(s+1,s+r+3)),a=Qt(a,[["enter",p,t]]),a=Qt(a,Gp(t.parser.constructs.insideSpan.null,e.slice(s+r+4,l-3),t)),a=Qt(a,[["exit",p,t],e[l-2],e[l-1],["exit",u,t]]),a=Qt(a,e.slice(l+1)),a=Qt(a,[["exit",c,t]]),In(e,s,e.length,a),e}function jk(e,t,n){const r=this;let i=r.events.length,s,l;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){s=r.events[i][1];break}return a;function a(h){return s?s._inactive?f(h):(l=r.parser.defined.includes(Mi(r.sliceSerialize({start:s.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(h),e.exit("labelMarker"),e.exit("labelEnd"),c):n(h)}function c(h){return h===40?e.attempt(yk,p,l?p:f)(h):h===91?e.attempt(vk,p,l?u:f)(h):l?p(h):f(h)}function u(h){return e.attempt(wk,p,f)(h)}function p(h){return t(h)}function f(h){return s._balanced=!0,n(h)}}function Sk(e,t,n){return r;function r(f){return e.enter("resource"),e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),i}function i(f){return Mt(f)?Ko(e,s)(f):s(f)}function s(f){return f===41?p(f):wx(e,l,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(f)}function l(f){return Mt(f)?Ko(e,c)(f):p(f)}function a(f){return n(f)}function c(f){return f===34||f===39||f===40?kx(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(f):p(f)}function u(f){return Mt(f)?Ko(e,p)(f):p(f)}function p(f){return f===41?(e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),e.exit("resource"),t):n(f)}}function Ck(e,t,n){const r=this;return i;function i(a){return bx.call(r,e,s,l,"reference","referenceMarker","referenceString")(a)}function s(a){return r.parser.defined.includes(Mi(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function l(a){return n(a)}}function $k(e,t,n){return r;function r(s){return e.enter("reference"),e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),i}function i(s){return s===93?(e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),e.exit("reference"),t):n(s)}}const Ek={name:"labelStartImage",resolveAll:Zp.resolveAll,tokenize:Pk};function Pk(e,t,n){const r=this;return i;function i(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),s}function s(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),l):n(a)}function l(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const Ik={name:"labelStartLink",resolveAll:Zp.resolveAll,tokenize:Tk};function Tk(e,t,n){const r=this;return i;function i(l){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelLink"),s}function s(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const eu={name:"lineEnding",tokenize:Rk};function Rk(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),Pe(e,t,"linePrefix")}}const _l={name:"thematicBreak",tokenize:Mk};function Mk(e,t,n){let r=0,i;return s;function s(u){return e.enter("thematicBreak"),l(u)}function l(u){return i=u,a(u)}function a(u){return u===i?(e.enter("thematicBreakSequence"),c(u)):r>=3&&(u===null||ie(u))?(e.exit("thematicBreak"),t(u)):n(u)}function c(u){return u===i?(e.consume(u),r++,c):(e.exit("thematicBreakSequence"),ye(u)?Pe(e,a,"whitespace")(u):a(u))}}const $t={continuation:{tokenize:Nk},exit:Dk,name:"list",tokenize:_k},zk={partial:!0,tokenize:Bk},Ak={partial:!0,tokenize:Ok};function _k(e,t,n){const r=this,i=r.events[r.events.length-1];let s=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,l=0;return a;function a(g){const w=r.containerState.type||(g===42||g===43||g===45?"listUnordered":"listOrdered");if(w==="listUnordered"?!r.containerState.marker||g===r.containerState.marker:y1(g)){if(r.containerState.type||(r.containerState.type=w,e.enter(w,{_container:!0})),w==="listUnordered")return e.enter("listItemPrefix"),g===42||g===45?e.check(_l,n,u)(g):u(g);if(!r.interrupt||g===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(g)}return n(g)}function c(g){return y1(g)&&++l<10?(e.consume(g),c):(!r.interrupt||l<2)&&(r.containerState.marker?g===r.containerState.marker:g===41||g===46)?(e.exit("listItemValue"),u(g)):n(g)}function u(g){return e.enter("listItemMarker"),e.consume(g),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||g,e.check(ec,r.interrupt?n:p,e.attempt(zk,h,f))}function p(g){return r.containerState.initialBlankLine=!0,s++,h(g)}function f(g){return ye(g)?(e.enter("listItemPrefixWhitespace"),e.consume(g),e.exit("listItemPrefixWhitespace"),h):n(g)}function h(g){return r.containerState.size=s+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(g)}}function Nk(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(ec,i,s);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Pe(e,t,"listItemIndent",r.containerState.size+1)(a)}function s(a){return r.containerState.furtherBlankLines||!ye(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,l(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Ak,t,l)(a))}function l(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,Pe(e,e.attempt($t,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function Ok(e,t,n){const r=this;return Pe(e,i,"listItemIndent",r.containerState.size+1);function i(s){const l=r.events[r.events.length-1];return l&&l[1].type==="listItemIndent"&&l[2].sliceSerialize(l[1],!0).length===r.containerState.size?t(s):n(s)}}function Dk(e){e.exit(this.containerState.type)}function Bk(e,t,n){const r=this;return Pe(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(s){const l=r.events[r.events.length-1];return!ye(s)&&l&&l[1].type==="listItemPrefixWhitespace"?t(s):n(s)}}const Th={name:"setextUnderline",resolveTo:Fk,tokenize:Hk};function Fk(e,t){let n=e.length,r,i,s;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!s&&e[n][1].type==="definition"&&(s=n);const l={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",s?(e.splice(i,0,["enter",l,t]),e.splice(s+1,0,["exit",e[r][1],t]),e[r][1].end={...e[s][1].end}):e[r][1]=l,e.push(["exit",l,t]),e}function Hk(e,t,n){const r=this;let i;return s;function s(u){let p=r.events.length,f;for(;p--;)if(r.events[p][1].type!=="lineEnding"&&r.events[p][1].type!=="linePrefix"&&r.events[p][1].type!=="content"){f=r.events[p][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||f)?(e.enter("setextHeadingLine"),i=u,l(u)):n(u)}function l(u){return e.enter("setextHeadingLineSequence"),a(u)}function a(u){return u===i?(e.consume(u),a):(e.exit("setextHeadingLineSequence"),ye(u)?Pe(e,c,"lineSuffix")(u):c(u))}function c(u){return u===null||ie(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const Uk={tokenize:Vk};function Vk(e){const t=this,n=e.attempt(ec,r,e.attempt(this.parser.constructs.flowInitial,i,Pe(e,e.attempt(this.parser.constructs.flow,i,e.attempt(Zb,i)),"linePrefix")));return n;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEndingBlank"),e.consume(s),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const Wk={resolveAll:Sx()},Kk=jx("string"),Yk=jx("text");function jx(e){return{resolveAll:Sx(e==="text"?Gk:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],s=n.attempt(i,l,a);return l;function l(p){return u(p)?s(p):a(p)}function a(p){if(p===null){n.consume(p);return}return n.enter("data"),n.consume(p),c}function c(p){return u(p)?(n.exit("data"),s(p)):(n.consume(p),c)}function u(p){if(p===null)return!0;const f=i[p];let h=-1;if(f)for(;++h<f.length;){const g=f[h];if(!g.previous||g.previous.call(r,r.previous))return!0}return!1}}}function Sx(e){return t;function t(n,r){let i=-1,s;for(;++i<=n.length;)s===void 0?n[i]&&n[i][1].type==="data"&&(s=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==s+2&&(n[s][1].end=n[i-1][1].end,n.splice(s+2,i-s-2),i=s+2),s=void 0);return e?e(n,r):n}}function Gk(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let s=i.length,l=-1,a=0,c;for(;s--;){const u=i[s];if(typeof u=="string"){for(l=u.length;u.charCodeAt(l-1)===32;)a++,l--;if(l)break;l=-1}else if(u===-2)c=!0,a++;else if(u!==-1){s++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(a=0),a){const u={type:n===e.length||c||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:s?l:r.start._bufferIndex+l,_index:r.start._index+s,line:r.end.line,column:r.end.column-a,offset:r.end.offset-a},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const Zk={42:$t,43:$t,45:$t,48:$t,49:$t,50:$t,51:$t,52:$t,53:$t,54:$t,55:$t,56:$t,57:$t,62:xx},qk={91:ek},Qk={[-2]:Jc,[-1]:Jc,32:Jc},Xk={35:sk,42:_l,45:[Th,_l],60:uk,61:Th,95:_l,96:Ph,126:Ph},Jk={38:yx,92:Lx},ej={[-5]:eu,[-4]:eu,[-3]:eu,33:Ek,38:yx,42:v1,60:[Ib,xk],91:Ik,92:[ik,Lx],93:Zp,95:v1,96:Ub},tj={null:[v1,Wk]},nj={null:[42,95]},rj={null:[]},ij=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:nj,contentInitial:qk,disable:rj,document:Zk,flow:Xk,flowInitial:Qk,insideSpan:tj,string:Jk,text:ej},Symbol.toStringTag,{value:"Module"}));function oj(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},s=[];let l=[],a=[];const c={attempt:S($),check:S(k),consume:m,enter:L,exit:b,interrupt:S(k,{interrupt:!0})},u={code:null,containerState:{},defineSkip:v,events:[],now:w,parser:e,previous:null,sliceSerialize:h,sliceStream:g,write:f};let p=t.tokenize.call(u,c);return t.resolveAll&&s.push(t),u;function f(T){return l=Qt(l,T),C(),l[l.length-1]!==null?[]:(M(t,0),u.events=Gp(s,u.events,u),u.events)}function h(T,E){return lj(g(T),E)}function g(T){return sj(l,T)}function w(){const{_bufferIndex:T,_index:E,line:N,column:D,offset:H}=r;return{_bufferIndex:T,_index:E,line:N,column:D,offset:H}}function v(T){i[T.line]=T.column,I()}function C(){let T;for(;r._index<l.length;){const E=l[r._index];if(typeof E=="string")for(T=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===T&&r._bufferIndex<E.length;)x(E.charCodeAt(r._bufferIndex));else x(E)}}function x(T){p=p(T)}function m(T){ie(T)?(r.line++,r.column=1,r.offset+=T===-3?2:1,I()):T!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===l[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=T}function L(T,E){const N=E||{};return N.type=T,N.start=w(),u.events.push(["enter",N,u]),a.push(N),N}function b(T){const E=a.pop();return E.end=w(),u.events.push(["exit",E,u]),E}function $(T,E){M(T,E.from)}function k(T,E){E.restore()}function S(T,E){return N;function N(D,H,_){let z,A,O,j;return Array.isArray(D)?Q(D):"tokenize"in D?Q([D]):Z(D);function Z(J){return Y;function Y(ee){const ae=ee!==null&&J[ee],ve=ee!==null&&J.null,fe=[...Array.isArray(ae)?ae:ae?[ae]:[],...Array.isArray(ve)?ve:ve?[ve]:[]];return Q(fe)(ee)}}function Q(J){return z=J,A=0,J.length===0?_:P(J[A])}function P(J){return Y;function Y(ee){return j=R(),O=J,J.partial||(u.currentConstruct=J),J.name&&u.parser.constructs.disable.null.includes(J.name)?te():J.tokenize.call(E?Object.assign(Object.create(u),E):u,c,G,te)(ee)}}function G(J){return T(O,j),H}function te(J){return j.restore(),++A<z.length?P(z[A]):_}}}function M(T,E){T.resolveAll&&!s.includes(T)&&s.push(T),T.resolve&&In(u.events,E,u.events.length-E,T.resolve(u.events.slice(E),u)),T.resolveTo&&(u.events=T.resolveTo(u.events,u))}function R(){const T=w(),E=u.previous,N=u.currentConstruct,D=u.events.length,H=Array.from(a);return{from:D,restore:_};function _(){r=T,u.previous=E,u.currentConstruct=N,u.events.length=D,a=H,I()}}function I(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function sj(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,s=t.end._bufferIndex;let l;if(n===i)l=[e[n].slice(r,s)];else{if(l=e.slice(n,i),r>-1){const a=l[0];typeof a=="string"?l[0]=a.slice(r):l.shift()}s>0&&l.push(e[i].slice(0,s))}return l}function lj(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const s=e[n];let l;if(typeof s=="string")l=s;else switch(s){case-5:{l="\r";break}case-4:{l=`
`;break}case-3:{l=`\r
`;break}case-2:{l=t?" ":"	";break}case-1:{if(!t&&i)continue;l=" ";break}default:l=String.fromCharCode(s)}i=s===-2,r.push(l)}return r.join("")}function aj(e){const r={constructs:gb([ij,...(e||{}).extensions||[]]),content:i(kb),defined:[],document:i(Sb),flow:i(Uk),lazy:{},string:i(Kk),text:i(Yk)};return r;function i(s){return l;function l(a){return oj(r,s,a)}}}function cj(e){for(;!vx(e););return e}const Rh=/[\0\t\n\r]/g;function uj(){let e=1,t="",n=!0,r;return i;function i(s,l,a){const c=[];let u,p,f,h,g;for(s=t+(typeof s=="string"?s.toString():new TextDecoder(l||void 0).decode(s)),f=0,t="",n&&(s.charCodeAt(0)===65279&&f++,n=void 0);f<s.length;){if(Rh.lastIndex=f,u=Rh.exec(s),h=u&&u.index!==void 0?u.index:s.length,g=s.charCodeAt(h),!u){t=s.slice(f);break}if(g===10&&f===h&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),f<h&&(c.push(s.slice(f,h)),e+=h-f),g){case 0:{c.push(65533),e++;break}case 9:{for(p=Math.ceil(e/4)*4,c.push(-2);e++<p;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}f=h+1}return a&&(r&&c.push(-5),t&&c.push(t),c.push(null)),c}}const dj=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function pj(e){return e.replace(dj,fj)}function fj(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),s=i===120||i===88;return mx(n.slice(s?2:1),s?16:10)}return Yp(n)||e}const Cx={}.hasOwnProperty;function hj(e,t,n){return t&&typeof t=="object"&&(n=t,t=void 0),gj(n)(cj(aj(n).document().write(uj()(e,t,!0))))}function gj(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:s(X),autolinkProtocol:R,autolinkEmail:R,atxHeading:s(De),blockQuote:s(ve),characterEscape:R,characterReference:R,codeFenced:s(fe),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:s(fe,l),codeText:s(me,l),codeTextData:R,data:R,codeFlowValue:R,definition:s(ke),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:s(Ie),hardBreakEscape:s(Ze),hardBreakTrailing:s(Ze),htmlFlow:s(Te,l),htmlFlowData:R,htmlText:s(Te,l),htmlTextData:R,image:s(Wt),label:l,link:s(X),listItem:s(Se),listItemValue:h,listOrdered:s(je,f),listUnordered:s(je),paragraph:s(wt),reference:P,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:s(De),strong:s(sn),thematicBreak:s(Jr)},exit:{atxHeading:c(),atxHeadingSequence:$,autolink:c(),autolinkEmail:ae,autolinkProtocol:ee,blockQuote:c(),characterEscapeValue:I,characterReferenceMarkerHexadecimal:te,characterReferenceMarkerNumeric:te,characterReferenceValue:J,characterReference:Y,codeFenced:c(C),codeFencedFence:v,codeFencedFenceInfo:g,codeFencedFenceMeta:w,codeFlowValue:I,codeIndented:c(x),codeText:c(H),codeTextData:I,data:I,definition:c(),definitionDestinationString:b,definitionLabelString:m,definitionTitleString:L,emphasis:c(),hardBreakEscape:c(E),hardBreakTrailing:c(E),htmlFlow:c(N),htmlFlowData:I,htmlText:c(D),htmlTextData:I,image:c(z),label:O,labelText:A,lineEnding:T,link:c(_),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:G,resourceDestinationString:j,resourceTitleString:Z,resource:Q,setextHeading:c(M),setextHeadingLineSequence:S,setextHeadingText:k,strong:c(),thematicBreak:c()}};$x(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(B){let U={type:"root",children:[]};const ne={stack:[U],tokenStack:[],config:t,enter:a,exit:u,buffer:l,resume:p,data:n},ce=[];let we=-1;for(;++we<B.length;)if(B[we][1].type==="listOrdered"||B[we][1].type==="listUnordered")if(B[we][0]==="enter")ce.push(we);else{const Ct=ce.pop();we=i(B,Ct,we)}for(we=-1;++we<B.length;){const Ct=t[B[we][0]];Cx.call(Ct,B[we][1].type)&&Ct[B[we][1].type].call(Object.assign({sliceSerialize:B[we][2].sliceSerialize},ne),B[we][1])}if(ne.tokenStack.length>0){const Ct=ne.tokenStack[ne.tokenStack.length-1];(Ct[1]||Mh).call(ne,void 0,Ct[0])}for(U.position={start:qn(B.length>0?B[0][1].start:{line:1,column:1,offset:0}),end:qn(B.length>0?B[B.length-2][1].end:{line:1,column:1,offset:0})},we=-1;++we<t.transforms.length;)U=t.transforms[we](U)||U;return U}function i(B,U,ne){let ce=U-1,we=-1,Ct=!1,Kt,oe,ln,br;for(;++ce<=ne;){const pt=B[ce];switch(pt[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{pt[0]==="enter"?we++:we--,br=void 0;break}case"lineEndingBlank":{pt[0]==="enter"&&(Kt&&!br&&!we&&!ln&&(ln=ce),br=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:br=void 0}if(!we&&pt[0]==="enter"&&pt[1].type==="listItemPrefix"||we===-1&&pt[0]==="exit"&&(pt[1].type==="listUnordered"||pt[1].type==="listOrdered")){if(Kt){let Rn=ce;for(oe=void 0;Rn--;){const Yt=B[Rn];if(Yt[1].type==="lineEnding"||Yt[1].type==="lineEndingBlank"){if(Yt[0]==="exit")continue;oe&&(B[oe][1].type="lineEndingBlank",Ct=!0),Yt[1].type="lineEnding",oe=Rn}else if(!(Yt[1].type==="linePrefix"||Yt[1].type==="blockQuotePrefix"||Yt[1].type==="blockQuotePrefixWhitespace"||Yt[1].type==="blockQuoteMarker"||Yt[1].type==="listItemIndent"))break}ln&&(!oe||ln<oe)&&(Kt._spread=!0),Kt.end=Object.assign({},oe?B[oe][1].start:pt[1].end),B.splice(oe||ce,0,["exit",Kt,pt[2]]),ce++,ne++}if(pt[1].type==="listItemPrefix"){const Rn={type:"listItem",_spread:!1,start:Object.assign({},pt[1].start),end:void 0};Kt=Rn,B.splice(ce,0,["enter",Rn,pt[2]]),ce++,ne++,ln=void 0,br=!0}}}return B[U][1]._spread=Ct,ne}function s(B,U){return ne;function ne(ce){a.call(this,B(ce),ce),U&&U.call(this,ce)}}function l(){this.stack.push({type:"fragment",children:[]})}function a(B,U,ne){this.stack[this.stack.length-1].children.push(B),this.stack.push(B),this.tokenStack.push([U,ne||void 0]),B.position={start:qn(U.start),end:void 0}}function c(B){return U;function U(ne){B&&B.call(this,ne),u.call(this,ne)}}function u(B,U){const ne=this.stack.pop(),ce=this.tokenStack.pop();if(ce)ce[0].type!==B.type&&(U?U.call(this,B,ce[0]):(ce[1]||Mh).call(this,B,ce[0]));else throw new Error("Cannot close `"+B.type+"` ("+Wo({start:B.start,end:B.end})+"): it’s not open");ne.position.end=qn(B.end)}function p(){return fb(this.stack.pop())}function f(){this.data.expectingFirstListItemValue=!0}function h(B){if(this.data.expectingFirstListItemValue){const U=this.stack[this.stack.length-2];U.start=Number.parseInt(this.sliceSerialize(B),10),this.data.expectingFirstListItemValue=void 0}}function g(){const B=this.resume(),U=this.stack[this.stack.length-1];U.lang=B}function w(){const B=this.resume(),U=this.stack[this.stack.length-1];U.meta=B}function v(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function C(){const B=this.resume(),U=this.stack[this.stack.length-1];U.value=B.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function x(){const B=this.resume(),U=this.stack[this.stack.length-1];U.value=B.replace(/(\r?\n|\r)$/g,"")}function m(B){const U=this.resume(),ne=this.stack[this.stack.length-1];ne.label=U,ne.identifier=Mi(this.sliceSerialize(B)).toLowerCase()}function L(){const B=this.resume(),U=this.stack[this.stack.length-1];U.title=B}function b(){const B=this.resume(),U=this.stack[this.stack.length-1];U.url=B}function $(B){const U=this.stack[this.stack.length-1];if(!U.depth){const ne=this.sliceSerialize(B).length;U.depth=ne}}function k(){this.data.setextHeadingSlurpLineEnding=!0}function S(B){const U=this.stack[this.stack.length-1];U.depth=this.sliceSerialize(B).codePointAt(0)===61?1:2}function M(){this.data.setextHeadingSlurpLineEnding=void 0}function R(B){const ne=this.stack[this.stack.length-1].children;let ce=ne[ne.length-1];(!ce||ce.type!=="text")&&(ce=Ve(),ce.position={start:qn(B.start),end:void 0},ne.push(ce)),this.stack.push(ce)}function I(B){const U=this.stack.pop();U.value+=this.sliceSerialize(B),U.position.end=qn(B.end)}function T(B){const U=this.stack[this.stack.length-1];if(this.data.atHardBreak){const ne=U.children[U.children.length-1];ne.position.end=qn(B.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(U.type)&&(R.call(this,B),I.call(this,B))}function E(){this.data.atHardBreak=!0}function N(){const B=this.resume(),U=this.stack[this.stack.length-1];U.value=B}function D(){const B=this.resume(),U=this.stack[this.stack.length-1];U.value=B}function H(){const B=this.resume(),U=this.stack[this.stack.length-1];U.value=B}function _(){const B=this.stack[this.stack.length-1];if(this.data.inReference){const U=this.data.referenceType||"shortcut";B.type+="Reference",B.referenceType=U,delete B.url,delete B.title}else delete B.identifier,delete B.label;this.data.referenceType=void 0}function z(){const B=this.stack[this.stack.length-1];if(this.data.inReference){const U=this.data.referenceType||"shortcut";B.type+="Reference",B.referenceType=U,delete B.url,delete B.title}else delete B.identifier,delete B.label;this.data.referenceType=void 0}function A(B){const U=this.sliceSerialize(B),ne=this.stack[this.stack.length-2];ne.label=pj(U),ne.identifier=Mi(U).toLowerCase()}function O(){const B=this.stack[this.stack.length-1],U=this.resume(),ne=this.stack[this.stack.length-1];if(this.data.inReference=!0,ne.type==="link"){const ce=B.children;ne.children=ce}else ne.alt=U}function j(){const B=this.resume(),U=this.stack[this.stack.length-1];U.url=B}function Z(){const B=this.resume(),U=this.stack[this.stack.length-1];U.title=B}function Q(){this.data.inReference=void 0}function P(){this.data.referenceType="collapsed"}function G(B){const U=this.resume(),ne=this.stack[this.stack.length-1];ne.label=U,ne.identifier=Mi(this.sliceSerialize(B)).toLowerCase(),this.data.referenceType="full"}function te(B){this.data.characterReferenceType=B.type}function J(B){const U=this.sliceSerialize(B),ne=this.data.characterReferenceType;let ce;ne?(ce=mx(U,ne==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):ce=Yp(U);const we=this.stack[this.stack.length-1];we.value+=ce}function Y(B){const U=this.stack.pop();U.position.end=qn(B.end)}function ee(B){I.call(this,B);const U=this.stack[this.stack.length-1];U.url=this.sliceSerialize(B)}function ae(B){I.call(this,B);const U=this.stack[this.stack.length-1];U.url="mailto:"+this.sliceSerialize(B)}function ve(){return{type:"blockquote",children:[]}}function fe(){return{type:"code",lang:null,meta:null,value:""}}function me(){return{type:"inlineCode",value:""}}function ke(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Ie(){return{type:"emphasis",children:[]}}function De(){return{type:"heading",depth:0,children:[]}}function Ze(){return{type:"break"}}function Te(){return{type:"html",value:""}}function Wt(){return{type:"image",title:null,url:"",alt:null}}function X(){return{type:"link",title:null,url:"",children:[]}}function je(B){return{type:"list",ordered:B.type==="listOrdered",start:null,spread:B._spread,children:[]}}function Se(B){return{type:"listItem",spread:B._spread,checked:null,children:[]}}function wt(){return{type:"paragraph",children:[]}}function sn(){return{type:"strong",children:[]}}function Ve(){return{type:"text",value:""}}function Jr(){return{type:"thematicBreak"}}}function qn(e){return{line:e.line,column:e.column,offset:e.offset}}function $x(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?$x(e,r):mj(e,r)}}function mj(e,t){let n;for(n in t)if(Cx.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function Mh(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Wo({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Wo({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Wo({start:t.start,end:t.end})+") is still open")}function xj(e){const t=this;t.parser=n;function n(r){return hj(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function Lj(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function yj(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function vj(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let s={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(s.data={meta:t.meta}),e.patch(t,s),s=e.applyData(t,s),s={type:"element",tagName:"pre",properties:{},children:[s]},e.patch(t,s),s}function wj(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function bj(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function kj(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=ro(r.toLowerCase()),s=e.footnoteOrder.indexOf(r);let l,a=e.footnoteCounts.get(r);a===void 0?(a=0,e.footnoteOrder.push(r),l=e.footnoteOrder.length):l=s+1,a+=1,e.footnoteCounts.set(r,a);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(l)}]};e.patch(t,c);const u={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,u),e.applyData(t,u)}function jj(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Sj(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Ex(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),s=i[0];s&&s.type==="text"?s.value="["+s.value:i.unshift({type:"text",value:"["});const l=i[i.length-1];return l&&l.type==="text"?l.value+=r:i.push({type:"text",value:r}),i}function Cj(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Ex(e,t);const i={src:ro(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,s),e.applyData(t,s)}function $j(e,t){const n={src:ro(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function Ej(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function Pj(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Ex(e,t);const i={href:ro(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,s),e.applyData(t,s)}function Ij(e,t){const n={href:ro(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Tj(e,t,n){const r=e.all(t),i=n?Rj(n):Px(t),s={},l=[];if(typeof t.checked=="boolean"){const p=r[0];let f;p&&p.type==="element"&&p.tagName==="p"?f=p:(f={type:"element",tagName:"p",properties:{},children:[]},r.unshift(f)),f.children.length>0&&f.children.unshift({type:"text",value:" "}),f.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const p=r[a];(i||a!==0||p.type!=="element"||p.tagName!=="p")&&l.push({type:"text",value:`
`}),p.type==="element"&&p.tagName==="p"&&!i?l.push(...p.children):l.push(p)}const c=r[r.length-1];c&&(i||c.type!=="element"||c.tagName!=="p")&&l.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:s,children:l};return e.patch(t,u),e.applyData(t,u)}function Rj(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Px(n[r])}return t}function Px(e){const t=e.spread;return t??e.children.length>1}function Mj(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const l=r[i];if(l.type==="element"&&l.tagName==="li"&&l.properties&&Array.isArray(l.properties.className)&&l.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const s={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,s),e.applyData(t,s)}function zj(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Aj(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function _j(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Nj(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const l={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],l),i.push(l)}if(n.length>0){const l={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=Up(t.children[1]),c=cx(t.children[t.children.length-1]);a&&c&&(l.position={start:a,end:c}),i.push(l)}const s={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,s),e.applyData(t,s)}function Oj(e,t,n){const r=n?n.children:void 0,s=(r?r.indexOf(t):1)===0?"th":"td",l=n&&n.type==="table"?n.align:void 0,a=l?l.length:t.children.length;let c=-1;const u=[];for(;++c<a;){const f=t.children[c],h={},g=l?l[c]:void 0;g&&(h.align=g);let w={type:"element",tagName:s,properties:h,children:[]};f&&(w.children=e.all(f),e.patch(f,w),w=e.applyData(f,w)),u.push(w)}const p={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,p),e.applyData(t,p)}function Dj(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const zh=9,Ah=32;function Bj(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const s=[];for(;r;)s.push(_h(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return s.push(_h(t.slice(i),i>0,!1)),s.join("")}function _h(e,t,n){let r=0,i=e.length;if(t){let s=e.codePointAt(r);for(;s===zh||s===Ah;)r++,s=e.codePointAt(r)}if(n){let s=e.codePointAt(i-1);for(;s===zh||s===Ah;)i--,s=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function Fj(e,t){const n={type:"text",value:Bj(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function Hj(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const Uj={blockquote:Lj,break:yj,code:vj,delete:wj,emphasis:bj,footnoteReference:kj,heading:jj,html:Sj,imageReference:Cj,image:$j,inlineCode:Ej,linkReference:Pj,link:Ij,listItem:Tj,list:Mj,paragraph:zj,root:Aj,strong:_j,table:Nj,tableCell:Dj,tableRow:Oj,text:Fj,thematicBreak:Hj,toml:qs,yaml:qs,definition:qs,footnoteDefinition:qs};function qs(){}const Ix=-1,tc=0,Yo=1,wa=2,qp=3,Qp=4,Xp=5,Jp=6,Tx=7,Rx=8,Nh=typeof self=="object"?self:globalThis,Vj=(e,t)=>{const n=(i,s)=>(e.set(s,i),i),r=i=>{if(e.has(i))return e.get(i);const[s,l]=t[i];switch(s){case tc:case Ix:return n(l,i);case Yo:{const a=n([],i);for(const c of l)a.push(r(c));return a}case wa:{const a=n({},i);for(const[c,u]of l)a[r(c)]=r(u);return a}case qp:return n(new Date(l),i);case Qp:{const{source:a,flags:c}=l;return n(new RegExp(a,c),i)}case Xp:{const a=n(new Map,i);for(const[c,u]of l)a.set(r(c),r(u));return a}case Jp:{const a=n(new Set,i);for(const c of l)a.add(r(c));return a}case Tx:{const{name:a,message:c}=l;return n(new Nh[a](c),i)}case Rx:return n(BigInt(l),i);case"BigInt":return n(Object(BigInt(l)),i);case"ArrayBuffer":return n(new Uint8Array(l).buffer,l);case"DataView":{const{buffer:a}=new Uint8Array(l);return n(new DataView(a),l)}}return n(new Nh[s](l),i)};return r},Oh=e=>Vj(new Map,e)(0),ii="",{toString:Wj}={},{keys:Kj}=Object,xo=e=>{const t=typeof e;if(t!=="object"||!e)return[tc,t];const n=Wj.call(e).slice(8,-1);switch(n){case"Array":return[Yo,ii];case"Object":return[wa,ii];case"Date":return[qp,ii];case"RegExp":return[Qp,ii];case"Map":return[Xp,ii];case"Set":return[Jp,ii];case"DataView":return[Yo,n]}return n.includes("Array")?[Yo,n]:n.includes("Error")?[Tx,n]:[wa,n]},Qs=([e,t])=>e===tc&&(t==="function"||t==="symbol"),Yj=(e,t,n,r)=>{const i=(l,a)=>{const c=r.push(l)-1;return n.set(a,c),c},s=l=>{if(n.has(l))return n.get(l);let[a,c]=xo(l);switch(a){case tc:{let p=l;switch(c){case"bigint":a=Rx,p=l.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);p=null;break;case"undefined":return i([Ix],l)}return i([a,p],l)}case Yo:{if(c){let h=l;return c==="DataView"?h=new Uint8Array(l.buffer):c==="ArrayBuffer"&&(h=new Uint8Array(l)),i([c,[...h]],l)}const p=[],f=i([a,p],l);for(const h of l)p.push(s(h));return f}case wa:{if(c)switch(c){case"BigInt":return i([c,l.toString()],l);case"Boolean":case"Number":case"String":return i([c,l.valueOf()],l)}if(t&&"toJSON"in l)return s(l.toJSON());const p=[],f=i([a,p],l);for(const h of Kj(l))(e||!Qs(xo(l[h])))&&p.push([s(h),s(l[h])]);return f}case qp:return i([a,l.toISOString()],l);case Qp:{const{source:p,flags:f}=l;return i([a,{source:p,flags:f}],l)}case Xp:{const p=[],f=i([a,p],l);for(const[h,g]of l)(e||!(Qs(xo(h))||Qs(xo(g))))&&p.push([s(h),s(g)]);return f}case Jp:{const p=[],f=i([a,p],l);for(const h of l)(e||!Qs(xo(h)))&&p.push(s(h));return f}}const{message:u}=l;return i([a,{name:c,message:u}],l)};return s},Dh=(e,{json:t,lossy:n}={})=>{const r=[];return Yj(!(t||n),!!t,new Map,r)(e),r},ba=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Oh(Dh(e,t)):structuredClone(e):(e,t)=>Oh(Dh(e,t));function Gj(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function Zj(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function qj(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||Gj,r=e.options.footnoteBackLabel||Zj,i=e.options.footnoteLabel||"Footnotes",s=e.options.footnoteLabelTagName||"h2",l=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let c=-1;for(;++c<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[c]);if(!u)continue;const p=e.all(u),f=String(u.identifier).toUpperCase(),h=ro(f.toLowerCase());let g=0;const w=[],v=e.footnoteCounts.get(f);for(;v!==void 0&&++g<=v;){w.length>0&&w.push({type:"text",value:" "});let m=typeof n=="string"?n:n(c,g);typeof m=="string"&&(m={type:"text",value:m}),w.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+h+(g>1?"-"+g:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,g),className:["data-footnote-backref"]},children:Array.isArray(m)?m:[m]})}const C=p[p.length-1];if(C&&C.type==="element"&&C.tagName==="p"){const m=C.children[C.children.length-1];m&&m.type==="text"?m.value+=" ":C.children.push({type:"text",value:" "}),C.children.push(...w)}else p.push(...w);const x={type:"element",tagName:"li",properties:{id:t+"fn-"+h},children:e.wrap(p,!0)};e.patch(u,x),a.push(x)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...ba(l),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const Mx=function(e){if(e==null)return eS;if(typeof e=="function")return nc(e);if(typeof e=="object")return Array.isArray(e)?Qj(e):Xj(e);if(typeof e=="string")return Jj(e);throw new Error("Expected function, string, or object as test")};function Qj(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Mx(e[n]);return nc(r);function r(...i){let s=-1;for(;++s<t.length;)if(t[s].apply(this,i))return!0;return!1}}function Xj(e){const t=e;return nc(n);function n(r){const i=r;let s;for(s in e)if(i[s]!==t[s])return!1;return!0}}function Jj(e){return nc(t);function t(n){return n&&n.type===e}}function nc(e){return t;function t(n,r,i){return!!(tS(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function eS(){return!0}function tS(e){return e!==null&&typeof e=="object"&&"type"in e}const zx=[],nS=!0,Bh=!1,rS="skip";function iS(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const s=Mx(i),l=r?-1:1;a(e,void 0,[])();function a(c,u,p){const f=c&&typeof c=="object"?c:{};if(typeof f.type=="string"){const g=typeof f.tagName=="string"?f.tagName:typeof f.name=="string"?f.name:void 0;Object.defineProperty(h,"name",{value:"node ("+(c.type+(g?"<"+g+">":""))+")"})}return h;function h(){let g=zx,w,v,C;if((!t||s(c,u,p[p.length-1]||void 0))&&(g=oS(n(c,p)),g[0]===Bh))return g;if("children"in c&&c.children){const x=c;if(x.children&&g[0]!==rS)for(v=(r?x.children.length:-1)+l,C=p.concat(x);v>-1&&v<x.children.length;){const m=x.children[v];if(w=a(m,v,C)(),w[0]===Bh)return w;v=typeof w[1]=="number"?w[1]:v+l}}return g}}}function oS(e){return Array.isArray(e)?e:typeof e=="number"?[nS,e]:e==null?zx:[e]}function Ax(e,t,n,r){let i,s,l;typeof t=="function"&&typeof n!="function"?(s=void 0,l=t,i=n):(s=t,l=n,i=r),iS(e,s,a,i);function a(c,u){const p=u[u.length-1],f=p?p.children.indexOf(c):void 0;return l(c,f,p)}}const w1={}.hasOwnProperty,sS={};function lS(e,t){const n=t||sS,r=new Map,i=new Map,s=new Map,l={...Uj,...n.handlers},a={all:u,applyData:cS,definitionById:r,footnoteById:i,footnoteCounts:s,footnoteOrder:[],handlers:l,one:c,options:n,patch:aS,wrap:dS};return Ax(e,function(p){if(p.type==="definition"||p.type==="footnoteDefinition"){const f=p.type==="definition"?r:i,h=String(p.identifier).toUpperCase();f.has(h)||f.set(h,p)}}),a;function c(p,f){const h=p.type,g=a.handlers[h];if(w1.call(a.handlers,h)&&g)return g(a,p,f);if(a.options.passThrough&&a.options.passThrough.includes(h)){if("children"in p){const{children:v,...C}=p,x=ba(C);return x.children=a.all(p),x}return ba(p)}return(a.options.unknownHandler||uS)(a,p,f)}function u(p){const f=[];if("children"in p){const h=p.children;let g=-1;for(;++g<h.length;){const w=a.one(h[g],p);if(w){if(g&&h[g-1].type==="break"&&(!Array.isArray(w)&&w.type==="text"&&(w.value=Fh(w.value)),!Array.isArray(w)&&w.type==="element")){const v=w.children[0];v&&v.type==="text"&&(v.value=Fh(v.value))}Array.isArray(w)?f.push(...w):f.push(w)}}}return f}}function aS(e,t){e.position&&(t.position=Ww(e))}function cS(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,s=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const l="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:l}}n.type==="element"&&s&&Object.assign(n.properties,ba(s)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function uS(e,t){const n=t.data||{},r="value"in t&&!(w1.call(n,"hProperties")||w1.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function dS(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Fh(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Hh(e,t){const n=lS(e,t),r=n.one(e,void 0),i=qj(n),s=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&s.children.push({type:"text",value:`
`},i),s}function pS(e,t){return e&&"run"in e?async function(n,r){const i=Hh(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Hh(n,{file:r,...e||t})}}function Uh(e){if(e)throw e}var Nl=Object.prototype.hasOwnProperty,_x=Object.prototype.toString,Vh=Object.defineProperty,Wh=Object.getOwnPropertyDescriptor,Kh=function(t){return typeof Array.isArray=="function"?Array.isArray(t):_x.call(t)==="[object Array]"},Yh=function(t){if(!t||_x.call(t)!=="[object Object]")return!1;var n=Nl.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&Nl.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||Nl.call(t,i)},Gh=function(t,n){Vh&&n.name==="__proto__"?Vh(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Zh=function(t,n){if(n==="__proto__")if(Nl.call(t,n)){if(Wh)return Wh(t,n).value}else return;return t[n]},fS=function e(){var t,n,r,i,s,l,a=arguments[0],c=1,u=arguments.length,p=!1;for(typeof a=="boolean"&&(p=a,a=arguments[1]||{},c=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});c<u;++c)if(t=arguments[c],t!=null)for(n in t)r=Zh(a,n),i=Zh(t,n),a!==i&&(p&&i&&(Yh(i)||(s=Kh(i)))?(s?(s=!1,l=r&&Kh(r)?r:[]):l=r&&Yh(r)?r:{},Gh(a,{name:n,newValue:e(p,l,i)})):typeof i<"u"&&Gh(a,{name:n,newValue:i}));return a};const tu=Sa(fS);function b1(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function hS(){const e=[],t={run:n,use:r};return t;function n(...i){let s=-1;const l=i.pop();if(typeof l!="function")throw new TypeError("Expected function as last argument, not "+l);a(null,...i);function a(c,...u){const p=e[++s];let f=-1;if(c){l(c);return}for(;++f<i.length;)(u[f]===null||u[f]===void 0)&&(u[f]=i[f]);i=u,p?gS(p,a)(...u):l(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function gS(e,t){let n;return r;function r(...l){const a=e.length>l.length;let c;a&&l.push(i);try{c=e.apply(this,l)}catch(u){const p=u;if(a&&n)throw p;return i(p)}a||(c&&c.then&&typeof c.then=="function"?c.then(s,i):c instanceof Error?i(c):s(c))}function i(l,...a){n||(n=!0,t(l,...a))}function s(l){i(null,l)}}const jn={basename:mS,dirname:xS,extname:LS,join:yS,sep:"/"};function mS(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');$s(e);let n=0,r=-1,i=e.length,s;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else r<0&&(s=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let l=-1,a=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else l<0&&(s=!0,l=i+1),a>-1&&(e.codePointAt(i)===t.codePointAt(a--)?a<0&&(r=i):(a=-1,r=l));return n===r?r=l:r<0&&(r=e.length),e.slice(n,r)}function xS(e){if($s(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function LS(e){$s(e);let t=e.length,n=-1,r=0,i=-1,s=0,l;for(;t--;){const a=e.codePointAt(t);if(a===47){if(l){r=t+1;break}continue}n<0&&(l=!0,n=t+1),a===46?i<0?i=t:s!==1&&(s=1):i>-1&&(s=-1)}return i<0||n<0||s===0||s===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function yS(...e){let t=-1,n;for(;++t<e.length;)$s(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":vS(n)}function vS(e){$s(e);const t=e.codePointAt(0)===47;let n=wS(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function wS(e,t){let n="",r=0,i=-1,s=0,l=-1,a,c;for(;++l<=e.length;){if(l<e.length)a=e.codePointAt(l);else{if(a===47)break;a=47}if(a===47){if(!(i===l-1||s===1))if(i!==l-1&&s===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),i=l,s=0;continue}}else if(n.length>0){n="",r=0,i=l,s=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,l):n=e.slice(i+1,l),r=l-i-1;i=l,s=0}else a===46&&s>-1?s++:s=-1}return n}function $s(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const bS={cwd:kS};function kS(){return"/"}function k1(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function jS(e){if(typeof e=="string")e=new URL(e);else if(!k1(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return SS(e)}function SS(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const nu=["history","path","basename","stem","extname","dirname"];class Nx{constructor(t){let n;t?k1(t)?n={path:t}:typeof t=="string"||CS(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":bS.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<nu.length;){const s=nu[r];s in n&&n[s]!==void 0&&n[s]!==null&&(this[s]=s==="history"?[...n[s]]:n[s])}let i;for(i in n)nu.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?jn.basename(this.path):void 0}set basename(t){iu(t,"basename"),ru(t,"basename"),this.path=jn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?jn.dirname(this.path):void 0}set dirname(t){qh(this.basename,"dirname"),this.path=jn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?jn.extname(this.path):void 0}set extname(t){if(ru(t,"extname"),qh(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=jn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){k1(t)&&(t=jS(t)),iu(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?jn.basename(this.path,this.extname):void 0}set stem(t){iu(t,"stem"),ru(t,"stem"),this.path=jn.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new vt(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function ru(e,t){if(e&&e.includes(jn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+jn.sep+"`")}function iu(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function qh(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function CS(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const $S=function(e){const r=this.constructor.prototype,i=r[e],s=function(){return i.apply(s,arguments)};return Object.setPrototypeOf(s,r),s},ES={}.hasOwnProperty;class e0 extends $S{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=hS()}copy(){const t=new e0;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(tu(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(lu("data",this.frozen),this.namespace[t]=n,this):ES.call(this.namespace,t)&&this.namespace[t]||void 0:t?(lu("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Xs(t),r=this.parser||this.Parser;return ou("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),ou("process",this.parser||this.Parser),su("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(s,l){const a=Xs(t),c=r.parse(a);r.run(c,a,function(p,f,h){if(p||!f||!h)return u(p);const g=f,w=r.stringify(g,h);TS(w)?h.value=w:h.result=w,u(p,h)});function u(p,f){p||!f?l(p):s?s(f):n(void 0,f)}}}processSync(t){let n=!1,r;return this.freeze(),ou("processSync",this.parser||this.Parser),su("processSync",this.compiler||this.Compiler),this.process(t,i),Xh("processSync","process",n),r;function i(s,l){n=!0,Uh(s),r=l}}run(t,n,r){Qh(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?s(void 0,r):new Promise(s);function s(l,a){const c=Xs(n);i.run(t,c,u);function u(p,f,h){const g=f||t;p?a(p):l?l(g):r(void 0,g,h)}}}runSync(t,n){let r=!1,i;return this.run(t,n,s),Xh("runSync","run",r),i;function s(l,a){Uh(l),i=a,r=!0}}stringify(t,n){this.freeze();const r=Xs(n),i=this.compiler||this.Compiler;return su("stringify",i),Qh(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(lu("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?a(t):l(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function s(u){if(typeof u=="function")c(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[p,...f]=u;c(p,f)}else l(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function l(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(u.plugins),u.settings&&(i.settings=tu(!0,i.settings,u.settings))}function a(u){let p=-1;if(u!=null)if(Array.isArray(u))for(;++p<u.length;){const f=u[p];s(f)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function c(u,p){let f=-1,h=-1;for(;++f<r.length;)if(r[f][0]===u){h=f;break}if(h===-1)r.push([u,...p]);else if(p.length>0){let[g,...w]=p;const v=r[h][1];b1(v)&&b1(g)&&(g=tu(!0,v,g)),r[h]=[u,g,...w]}}}}const PS=new e0().freeze();function ou(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function su(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function lu(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Qh(e){if(!b1(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Xh(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Xs(e){return IS(e)?e:new Nx(e)}function IS(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function TS(e){return typeof e=="string"||RS(e)}function RS(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const MS="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Jh=[],e2={allowDangerousHtml:!0},zS=/^(https?|ircs?|mailto|xmpp)$/i,AS=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Gi(e){const t=_S(e),n=NS(e);return OS(t.runSync(t.parse(n),n),e)}function _S(e){const t=e.rehypePlugins||Jh,n=e.remarkPlugins||Jh,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...e2}:e2;return PS().use(xj).use(n).use(pS,r).use(t)}function NS(e){const t=e.children||"",n=new Nx;return typeof t=="string"&&(n.value=t),n}function OS(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,s=t.disallowedElements,l=t.skipHtml,a=t.unwrapDisallowed,c=t.urlTransform||DS;for(const p of AS)Object.hasOwn(t,p.from)&&(""+p.from+(p.to?"use `"+p.to+"` instead":"remove it")+MS+p.id,void 0);return Ax(e,u),qw(e,{Fragment:o.Fragment,components:i,ignoreInvalidStyle:!0,jsx:o.jsx,jsxs:o.jsxs,passKeys:!0,passNode:!0});function u(p,f,h){if(p.type==="raw"&&h&&typeof f=="number")return l?h.children.splice(f,1):h.children[f]={type:"text",value:p.value},f;if(p.type==="element"){let g;for(g in Xc)if(Object.hasOwn(Xc,g)&&Object.hasOwn(p.properties,g)){const w=p.properties[g],v=Xc[g];(v===null||v.includes(p.tagName))&&(p.properties[g]=c(String(w||""),g,p))}}if(p.type==="element"){let g=n?!n.includes(p.tagName):s?s.includes(p.tagName):!1;if(!g&&r&&typeof f=="number"&&(g=!r(p,f,h)),g&&h&&typeof f=="number")return a&&p.children?h.children.splice(f,1,...p.children):h.children.splice(f,1),f}}}function DS(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||zS.test(e.slice(0,t))?e:""}const j1=d.div`
  p {
    margin: 0 0 0.5em;
    &:last-child {
      margin-bottom: 0;
    }
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    position: relative;
    padding-left: 0.95em;
    margin-bottom: 0.35em;

    &:last-child {
      margin-bottom: 0;
    }

    &::before {
      position: absolute;
      left: 0;
      top: 0;
      content: "•";
    }
  }

  ol {
    counter-reset: md-ol;

    li {
      counter-increment: md-ol;

      &::before {
        content: counter(md-ol) ".";
        font-size: 0.92em;
      }
    }
  }

  blockquote {
    margin: 0 0 0.5em;
    padding-left: 0.75em;
    border-left: 3px solid rgba(75, 0, 130, 0.25);
    color: inherit;
    opacity: 0.9;
  }

  hr {
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    margin: 0.75em 0;
  }

  h1,
  h2,
  h3 {
    margin: 0 0 0.4em;
    font-weight: 700;
    line-height: 1.35;
  }

  h1 {
    font-size: 1.15em;
  }

  h2 {
    font-size: 1.05em;
  }

  h3 {
    font-size: 1em;
  }

  strong {
    font-weight: 600;
  }
`;function io({markdown:e,fallback:t=null}){const n=e==null?void 0:e.trim();return n?o.jsx(j1,{children:o.jsx(Gi,{children:n})}):o.jsx(o.Fragment,{children:t})}const BS=Oe`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,FS=Oe`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,HS=d.button`
  position: fixed;
  inset: 0;
  z-index: 113;
  border: none;
  margin: 0;
  padding: 0;
  background: rgba(0, 0, 0, 0.28);
  cursor: default;
  -webkit-tap-highlight-color: transparent;
  animation: ${FS} 0.52s cubic-bezier(0.25, 0.85, 0.3, 1) forwards;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: -4px;
  }
`,US=d.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 115;
  padding: 0 12px;
  /* 하단 탭(56px) 바로 위 */
  padding-bottom: calc(8px + 56px + env(safe-area-inset-bottom, 0px));
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 961px) {
    padding-bottom: calc(16px + env(safe-area-inset-bottom, 0px));
  }
`,VS=d.div`
  pointer-events: auto;
  display: flex;
  gap: 14px;
  width: 100%;
  max-width: 440px;
  padding: 14px;
  cursor: pointer;
  text-align: left;
  background: ${({theme:e})=>e.colors.white};
  border-radius: 18px;
  box-shadow: 0 -4px 28px rgba(0, 0, 0, 0.12), 0 8px 32px rgba(75, 0, 130, 0.1);
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  animation: ${BS} 0.42s cubic-bezier(0.25, 0.8, 0.25, 1) both;
  -webkit-tap-highlight-color: transparent;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary400};
    outline-offset: 2px;
  }
`,WS=d.div`
  flex-shrink: 0;
  width: 92px;
  height: 92px;
  border-radius: ${({theme:e})=>e.radii.md};
  overflow: hidden;
  background: ${({theme:e})=>e.colors.bg100};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`,KS=d.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
  padding-right: 36px;
`,YS=d.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
`,GS=d.span`
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
  line-height: 1.35;
`,ZS=d.div`
  position: absolute;
  top: -2px;
  right: -4px;
  display: flex;
  align-items: center;
  justify-content: center;
`,qS=d.div`
  font-size: 0.88rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text700};

  .star {
    color: #e8b923;
    margin-right: 4px;
  }
`,QS=d.div`
  font-size: 0.86rem;
  color: ${({theme:e})=>e.colors.text700};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,XS=d.div`
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.45;
  color: ${({theme:e})=>e.colors.text700};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,JS=d.span`
  margin-top: auto;
  padding-top: 6px;
  font-size: 0.82rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.primary600};
`,eC=({place:e,onClose:t,onOpenDetail:n})=>{const r=Wn(e.regionId),i=e.venueKind??"명상지",s=[r==null?void 0:r.name,e.hashtags[0]??i].filter(Boolean).join(" · "),l=e.rating!=null||e.reviewCount!=null&&e.reviewCount>0,a=y.useCallback(()=>{n()},[n]),c=p=>{p.stopPropagation()},u=p=>{(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),a())};return o.jsxs(o.Fragment,{children:[o.jsx(HS,{type:"button",onClick:t,"aria-label":"닫기"}),o.jsx(US,{children:o.jsxs(VS,{role:"button",tabIndex:0,onClick:a,onKeyDown:u,"aria-label":`${e.name} 상세 페이지로 이동`,children:[o.jsx(WS,{children:o.jsx("img",{src:Py(e.thumbnailUrl),alt:"",draggable:!1,loading:"lazy",decoding:"async",sizes:"min(100vw - 32px, 400px)"})}),o.jsxs(KS,{children:[o.jsx(YS,{children:o.jsx(GS,{children:e.name})}),o.jsx(ZS,{onClick:c,onPointerDown:c,children:o.jsx(Xa,{placeId:e.id})}),l&&o.jsxs(qS,{children:[e.rating!=null&&o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"star","aria-hidden":!0,children:"★"}),e.rating.toFixed(1)]}),e.reviewCount!=null&&o.jsxs("span",{children:[e.rating!=null?" · ":"","후기 ",e.reviewCount]})]}),o.jsx(QS,{children:s}),o.jsx(XS,{children:o.jsx(io,{markdown:e.shortDescription})}),o.jsx(JS,{children:"탭하여 상세 보기 →"})]})]})})]})},tC={minLat:36.45,maxLat:37.65,minLng:126.75,maxLng:127.15};function nC(e){let t=2166136261;for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619);const n=(t>>>0)%10001/1e4,r=(Math.imul(t,7919)>>>0)%10001/1e4;return[n,r]}function au(e){if(Number.isFinite(e.lat)&&Number.isFinite(e.lng))return{lat:e.lat,lng:e.lng};const t=ya.find(a=>a.id===e.regionId)??tC,[n,r]=nC(`${e.id}\0${e.address}`),i=.1,s=t.minLat+(t.maxLat-t.minLat)*(i+(1-2*i)*n),l=t.minLng+(t.maxLng-t.minLng)*(i+(1-2*i)*r);return{lat:s,lng:l}}function To(){var e,t;return!!((t=(e=window.naver)==null?void 0:e.maps)!=null&&t.Map)}function Ro(){var t,n;const e=(n=(t=window.naver)==null?void 0:t.maps)==null?void 0:n.Service;return typeof(e==null?void 0:e.geocode)=="function"}function Ox(){return document.querySelector('script[src*="oapi.map.naver.com"]')}function S1(e){return e.src.includes("geocoder")}async function t2(e,t,n=25e3){e()||await new Promise((r,i)=>{const s=Date.now(),l=window.setInterval(()=>{e()?(window.clearInterval(l),r()):Date.now()-s>n&&(window.clearInterval(l),i(new Error(`${t} 로드 시간 초과`)))},50)})}async function rC(e){await new Promise((t,n)=>{const r=`__naverMapsCb_${Date.now()}`;window[r]=()=>{t(),delete window[r]};const i=document.createElement("script");i.async=!0,i.onerror=()=>{delete window[r],n(new Error("Naver Maps 스크립트 로드 실패"))},i.src=`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${encodeURIComponent(e)}&submodules=geocoder&callback=${r}`,document.head.appendChild(i)})}function iC(){const e=Ox();return!e||S1(e)||!To()?!1:!Ro()}async function Dx(e){const t=e==null?void 0:e.trim();if(!t)return!1;if(To()&&Ro())return!0;if(iC())throw new Error("지도 API가 geocoder 없이 로드되었습니다. 페이지를 새로고침한 뒤 다시 검색해 주세요.");const n=Ox();if(n&&S1(n))try{return await t2(()=>To()&&Ro(),"Naver Maps(geocoder)"),To()&&Ro()}catch{return!1}n&&!S1(n)&&n.remove(),await rC(t);try{return await t2(()=>To()&&Ro(),"Naver Maps(geocoder)"),!0}catch{return!1}}async function oC(e){try{return await Dx(e)}catch{return!1}}async function C1(e){return Dx(e)}const sC=d.div`
  position: relative;
  width: 100%;
  flex: 1;
  min-height: ${({$fillViewport:e})=>e?"0":"min(62dvh, 520px)"};
  border-radius: ${({$fillViewport:e,theme:t})=>e?"0":t.radii.lg};
  overflow: hidden;
  background: ${({theme:e})=>e.colors.bg100};
`,lC=d.button`
  ${({$floating:e,$rightInsetPx:t=0})=>e?_e`
          position: fixed;
          z-index: 108;
          right: calc(14px + ${t}px);
          bottom: calc(64px + env(safe-area-inset-bottom, 0px));
        `:_e`
          position: absolute;
          z-index: 5;
          right: 14px;
          bottom: 20px;
        `}
  width: 46px;
  height: 46px;
  padding: 0;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: grid;
  place-items: center;
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.primary600};
  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.14);
  -webkit-tap-highlight-color: transparent;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    filter: brightness(1.03);
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,aC=d.div`
  width: 100%;
  height: 100%;
  min-height: ${({$fillViewport:e})=>e?"100%":"min(62dvh, 520px)"};
`;function cC(e){return e<=9?100:e<=11?72:e<=13?48:0}function uC(e,t){const n=new Set(e.map((i,s)=>s)),r=[];for(;n.size>0;){const i=n.values().next().value,s=new Set([i]);n.delete(i);let l=!0;for(;l;){l=!1;for(const a of[...n]){const c=e[a];let u=!1;for(const p of s){const f=e[p],h=c.x-f.x,g=c.y-f.y;if(h*h+g*g<=t*t){u=!0;break}}u&&(s.add(a),n.delete(a),l=!0)}}r.push([...s])}return r}function dC(e){const t=e;return typeof t.lat=="function"&&typeof t.lng=="function"?{lat:t.lat(),lng:t.lng()}:{lat:37.5665,lng:126.978}}function pC(e){const t=e.replace(/[^a-zA-Z0-9_-]/g,"_");return t.length>0?t.slice(0,48):"x"}function fC(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const Bx=88,Fx=34,Hx=13,hC=7,gC=Bx,Ux=Fx+Hx,mC=Bx/2,xC=Ux,LC="#a78bfa",yC="#8b5cf6",vC="#a78bfa";function wC(e,t){const n=fC(t);return`<div style="width:${gC}px;height:${Ux}px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;filter:drop-shadow(0 2px 3px rgba(0,0,0,.24));pointer-events:auto" aria-hidden="true">
<div style="width:100%;height:${Fx}px;box-sizing:border-box;background:${LC};border-radius:6px;padding:3px 4px;display:flex;align-items:center;justify-content:center">
<span style="display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;box-sizing:border-box;margin:0;color:#fff;font-size:10px;font-weight:800;line-height:1.2;text-align:center;word-break:keep-all;font-family:system-ui,-apple-system,'Segoe UI',sans-serif;letter-spacing:-0.02em;text-shadow:0 1px 2px rgba(0,0,0,.45)">${n}</span>
</div>
<div style="width:${hC}px;height:${Hx}px;box-sizing:border-box;background:${yC};border-radius:0 0 3px 3px;flex-shrink:0"></div>
</div>`}function bC(e,t){const n=`clf_${pC(t)}`,r=e>99?"99+":String(e),i=e>99?10:e>9?11:13;return`<div style="width:38px;height:38px;pointer-events:auto" aria-hidden="true">
<svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
<defs>
<filter id="${n}" x="-40%" y="-40%" width="180%" height="180%">
<feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#2f0051" flood-opacity="0.42"/>
</filter>
</defs>
<circle cx="19" cy="19" r="15" fill="${vC}" filter="url(#${n})"/>
<text x="19" y="19" text-anchor="middle" dominant-baseline="central" fill="#fff" font-size="${i}" font-weight="800" font-family="system-ui,-apple-system,'Segoe UI',sans-serif">${r}</text>
</svg>
</div>`}const n2=({places:e,onSelectPlace:t,fillViewport:n=!1,sidePanelInsetPx:r=0})=>{const i=y.useRef(null),s=y.useRef(null),l=y.useRef([]),a=y.useRef(null),c=y.useRef(null),[u,p]=y.useState(!1),[f,h]=y.useState(!1),g=y.useRef(e),w=y.useRef(t);g.current=e,w.current=t;const v=y.useCallback(()=>{const b=s.current;if(!b||typeof navigator>"u"||!navigator.geolocation)return;const $=window.naver,k=$==null?void 0:$.maps;if(!k)return;const S=k.LatLng,M=b.panTo,R=b.setZoom,I=(T,E)=>{M==null||M.call(b,new S(T,E)),R==null||R.call(b,16)};if(c.current){I(c.current.lat,c.current.lng);return}h(!0),navigator.geolocation.getCurrentPosition(T=>{h(!1),I(T.coords.latitude,T.coords.longitude)},()=>h(!1),{enableHighAccuracy:!0,timeout:15e3,maximumAge:6e4})},[]),C=()=>{l.current.forEach(b=>b.setMap(null)),l.current=[]},x=b=>{const $=window.naver,k=$==null?void 0:$.maps;if(!b||!k)return;const S=k.Marker,M=k.LatLng,R=k.Point,I=k.Event,T=b.getProjection,E=b.getZoom,N=b.setZoom,D=b.panTo;if(!T||!E||!N||!D)return;const H=g.current;if(H.length===0){C();return}const _=T.call(b);if(!_||typeof _.fromCoordToOffset!="function")return;const z=H.map(P=>{const{lat:G,lng:te}=au(P);return{place:P,latlng:new M(G,te)}});let A;try{A=z.map(P=>{const G=_.fromCoordToOffset(P.latlng);return{x:G.x,y:G.y}})}catch{return}const O=E.call(b)??11,j=cC(O),Q=A.some(P=>!Number.isFinite(P.x)||!Number.isFinite(P.y))?z.map((P,G)=>[G]):uC(A,j);C();for(const[P,G]of Q.entries()){const te=G.map(fe=>z[fe]);if(te.length===1){const{place:fe,latlng:me}=te[0],ke=new S({position:me,map:b,title:fe.name,icon:{content:wC(fe.id,fe.name),anchor:new R(mC,xC)}});I.addListener(ke,"click",()=>w.current(fe.id)),l.current.push(ke);continue}let J=0,Y=0;for(const fe of te){const{lat:me,lng:ke}=dC(fe.latlng);J+=me,Y+=ke}const ee=te.length,ae=new M(J/ee,Y/ee),ve=new S({position:ae,map:b,icon:{content:bC(ee,`g${P}_${ee}`),anchor:new R(26,26)}});I.addListener(ve,"click",()=>{const fe=E.call(b)??11;N.call(b,Math.min(fe+2,19)),D.call(b,ae)}),l.current.push(ve)}};y.useEffect(()=>{const b=i.current;if(!b)return;let $=!1;return(async()=>{if(!await oC("233s0l2jzo")||$||!i.current)return;const M=window.naver.maps,R=M.Map,I=M.LatLng,T=M.LatLngBounds,E=M.Event,N=new R(b,{center:new I(37.5665,126.978),zoom:11,scrollWheel:!0,scaleControl:!1,mapDataControl:!1,zoomControl:!1});if($)return;s.current=N,p(!0);const D=()=>{x(N)};E.addListener(N,"idle",D),D();const H=g.current;if(H.length>0){const _=new T;for(const A of H){const{lat:O,lng:j}=au(A);_.extend(new I(O,j))}const z=N.fitBounds;z==null||z.call(N,_,{top:52,right:20,bottom:100,left:20})}})(),()=>{var k;$=!0,C(),c.current=null,(k=a.current)==null||k.setMap(null),a.current=null,s.current=null,p(!1),i.current&&(i.current.innerHTML="")}},[]),y.useEffect(()=>{g.current=e;const b=s.current;if(!b||(x(b),e.length===0))return;const $=window.naver,k=$==null?void 0:$.maps,S=k==null?void 0:k.LatLng,M=k==null?void 0:k.LatLngBounds;if(!S||!M)return;const R=new M;for(const T of e){const{lat:E,lng:N}=au(T);R.extend(new S(E,N))}const I=b.fitBounds;I==null||I.call(b,R,{top:52,right:20,bottom:100,left:20})},[e]),y.useEffect(()=>{if(!u||typeof navigator>"u"||!navigator.geolocation)return;const b='<div style="width:16px;height:16px;background:#4B0082;border:3px solid #fff;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,.28)" aria-hidden="true"></div>',$=(S,M)=>{c.current={lat:S,lng:M};const R=s.current;if(!R)return;const I=window.naver,T=I==null?void 0:I.maps;if(!T)return;const E=T.LatLng,N=T.Marker,D=T.Point,H=new E(S,M),_=a.current;if(_&&typeof _.setPosition=="function"){_.setPosition(H);return}_==null||_.setMap(null),a.current=new N({position:H,map:R,zIndex:1e3,title:"내 위치",icon:{content:b,anchor:new D(8,8)}})},k=navigator.geolocation.watchPosition(S=>$(S.coords.latitude,S.coords.longitude),()=>{},{enableHighAccuracy:!0,maximumAge:15e3,timeout:3e4});return()=>{navigator.geolocation.clearWatch(k)}},[u]);const m=typeof navigator<"u"&&!!navigator.geolocation,L=o.jsx(lC,{$floating:n,$rightInsetPx:n?r:0,type:"button","aria-label":"현재 위치로 이동",title:"현재 위치로 이동",disabled:!u||f||!m,onClick:v,children:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":!0,children:[o.jsx("circle",{cx:"12",cy:"12",r:"7"}),o.jsx("circle",{cx:"12",cy:"12",r:"1.5",fill:"currentColor",stroke:"none"}),o.jsx("path",{d:"M12 2v2M12 20v2M2 12h2M20 12h2"})]})});return o.jsxs(sC,{$fillViewport:n,children:[o.jsx(aC,{ref:i,$fillViewport:n,role:"application","aria-label":"명상지 지도"}),n?i3.createPortal(L,document.body):L]})},r2=96,i2=960,$1=400;function kC(){const[e,t]=y.useState(()=>typeof window<"u"&&window.matchMedia(`(max-width: ${i2}px)`).matches);return y.useEffect(()=>{const n=window.matchMedia(`(max-width: ${i2}px)`),r=()=>t(n.matches);return n.addEventListener("change",r),()=>n.removeEventListener("change",r)},[]),e}const o2=d.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 20px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};

  @media (max-width: 960px) {
    padding: 20px 14px calc(48px + env(safe-area-inset-bottom, 0px));
  }
`,jC=d.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
`,SC=d.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,CC=d.button`
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  display: grid;
  place-items: center;
  cursor: pointer;
  border-radius: ${({theme:e})=>e.radii.pill};

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: 2px;
  }

  svg {
    width: 24px;
    height: 24px;
    stroke: ${({theme:e})=>e.colors.text900};
  }
`,$C=d.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: ${({theme:e})=>e.radii.md};
  background: ${({theme:e})=>e.colors.primary600};
  color: #fff;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(103, 59, 183, 0.35);
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: 2px;
  }
`,EC=d.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-areas: "filter content";
  gap: 28px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-areas: "content";
  }
`,PC=d.main`
  grid-area: content;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,IC=d.aside`
  grid-area: filter;

  @media (max-width: 960px) {
    display: none;
  }
`,TC=d.button`
  display: none;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: ${({theme:e})=>e.radii.pill};

  @media (max-width: 960px) {
    display: flex;
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: 2px;
  }

  svg {
    width: 22px;
    height: 22px;
    stroke: ${({theme:e})=>e.colors.text900};
  }
`,RC=d.div`
  position: fixed;
  inset: 0;
  z-index: 125;
`,MC=Oe`from { opacity: 0; } to { opacity: 1; }`,zC=Oe`from { transform: translateX(100%); } to { transform: translateX(0); }`,AC=d.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  animation: ${MC} 0.2s ease;
`,_C=d.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: min(90vw, 360px);
  background: ${({theme:e})=>e.colors.white};
  padding: 20px;
  overflow-y: auto;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);
  animation: ${zC} 0.25s ease;
`,NC=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,OC=d.button`
  width: 36px;
  height: 36px;
  border: none;
  background: ${({theme:e})=>e.colors.bg100};
  border-radius: ${({theme:e})=>e.radii.pill};
  cursor: pointer;
  display: grid;
  place-items: center;

  svg {
    width: 18px;
    height: 18px;
    stroke: ${({theme:e})=>e.colors.text900};
  }
`,cu=d.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Js=d.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text700};
`,DC=d.div`
  position: fixed;
  z-index: 40;
  top: 0;
  left: 0;
  right: 0;
  bottom: calc(56px + env(safe-area-inset-bottom, 0px));
  background: ${({theme:e})=>e.colors.bg100};
`,s2=d.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  min-height: 0;
`,l2=d.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: calc(6px + env(safe-area-inset-top, 0px)) 12px 20px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.97) 0%,
    rgba(255, 255, 255, 0.72) 42%,
    rgba(255, 255, 255, 0) 100%
  );
  pointer-events: none;

  & button {
    pointer-events: auto;
  }
`,a2=d.div`
  display: grid;
  grid-template-columns: 44px 1fr 44px;
  align-items: center;
  gap: 8px;
  max-width: 1200px;
  margin: 0 auto;
`,el=d.button`
  width: 44px;
  height: 44px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.1);
  display: grid;
  place-items: center;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.text900};
  -webkit-tap-highlight-color: transparent;

  svg {
    width: 22px;
    height: 22px;
    stroke: currentColor;
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: 2px;
  }
`,c2=d.span`
  text-align: center;
  font-weight: 700;
  font-size: 1.05rem;
  color: ${({theme:e})=>e.colors.text900};
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,u2=d.div`
  position: fixed;
  left: 50%;
  bottom: calc(64px + env(safe-area-inset-bottom, 0px));
  transform: translateX(-50%);
  z-index: 110;
  display: flex;
  justify-content: center;
`,BC=d.button`
  padding: 12px 28px;
  border: none;
  margin: 0;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  -webkit-tap-highlight-color: transparent;
  background: ${({theme:e})=>e.colors.primary600};
  color: #fff;
  box-shadow: 0 4px 22px rgba(75, 0, 130, 0.35);

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: 3px;
  }

  &:hover {
    filter: brightness(1.06);
  }
`,FC=d.button`
  padding: 12px 28px;
  border: none;
  margin: 0;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  -webkit-tap-highlight-color: transparent;
  background: ${({theme:e})=>e.colors.dustyGold};
  color: ${({theme:e})=>e.colors.primary900};
  box-shadow: 0 4px 22px rgba(0, 0, 0, 0.14);

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary500};
    outline-offset: 3px;
  }

  &:hover {
    filter: brightness(1.05);
  }
`,HC=d.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: calc(56px + env(safe-area-inset-bottom, 0px));
  height: calc(100dvh - 56px - env(safe-area-inset-bottom, 0px));
  z-index: 95;
  transform: translateY(${({$ty:e})=>e}px);
  ${({$dragging:e})=>e?_e`
          transition: none;
        `:_e`
          transition: transform 0.48s cubic-bezier(0.25, 0.85, 0.3, 1);
        `}
  display: flex;
  flex-direction: column;
  background: ${({theme:e})=>e.colors.white};
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -10px 36px rgba(0, 0, 0, 0.14);
  overflow: hidden;
  touch-action: pan-y;
`,UC=d.div`
  flex-shrink: 0;
  padding: 10px 0 8px;
  touch-action: none;
  cursor: grab;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({theme:e})=>e.colors.white};

  &:active {
    cursor: grabbing;
  }

  &::before {
    content: "";
    width: 42px;
    height: 5px;
    border-radius: 4px;
    background: ${({theme:e})=>e.colors.primary200};
  }
`,VC=d.div`
  flex-shrink: 0;
  padding: 0 12px 8px;
`,WC=d.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 0 12px calc(12px + env(safe-area-inset-bottom, 0px));
  -webkit-overflow-scrolling: touch;
`,d2=d.p`
  margin: 0 0 12px;
  font-size: 0.92rem;
  color: ${({theme:e})=>e.colors.text700};
`,KC=d.div`
  position: fixed;
  z-index: 40;
  top: 0;
  left: 0;
  right: 0;
  bottom: calc(56px + env(safe-area-inset-bottom, 0px));
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background: ${({theme:e})=>e.colors.bg100};
`,YC=d.div`
  position: relative;
  flex: 1;
  min-width: 0;
  min-height: 0;
`,GC=d.aside`
  width: min(${$1}px, 42vw);
  max-width: ${$1}px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  background: ${({theme:e})=>e.colors.white};
  border-left: 1px solid ${({theme:e})=>e.colors.primary100};
  box-shadow: -6px 0 20px rgba(0, 0, 0, 0.06);
  z-index: 2;
  min-height: 0;
`,ZC=d.div`
  flex-shrink: 0;
  padding: 12px 12px 8px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary100};
`,qC=d.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 12px 12px calc(12px + env(safe-area-inset-bottom, 0px));
  -webkit-overflow-scrolling: touch;
`,uu=d.div`
  height: 1px;
`,QC=()=>{const e=yt(),{regionId:t}=js(),n=kC(),{filters:r,page:i,pageSize:s,setPage:l,setRegion:a,setKeyword:c,toggleTag:u,setSortBy:p,setCategory:f,resetFilters:h,isFilterOpen:g,setFilterOpen:w}=Dp(),[v,C]=y.useState("list"),[x,m]=y.useState(null),L=y.useRef(null),b=y.useRef(null),$=y.useRef(null),k=y.useRef(null),S=y.useRef({active:!1,startY:0,startTy:0}),[M,R]=y.useState(0),[I,T]=y.useState(400),[E,N]=y.useState(200),[D,H]=y.useState(!1),[_,z]=y.useState(!1),A=y.useCallback(()=>{const X=k.current;if(!X)return;const je=X.offsetHeight,Se=Math.max(0,je-r2);T(Se),N(Math.round(Se*.4)),R(wt=>Math.max(0,Math.min(Se,wt)))},[]);y.useLayoutEffect(()=>{if(!n||!t)return;const X=requestAnimationFrame(()=>{A();const je=k.current;if(je){const Se=Math.max(0,je.offsetHeight-r2);R(Se)}z(!0)});return()=>cancelAnimationFrame(X)},[n,t,A]),y.useEffect(()=>{var je;if(!n)return;const X=()=>A();return window.addEventListener("resize",X),(je=window.visualViewport)==null||je.addEventListener("resize",X),()=>{var Se;window.removeEventListener("resize",X),(Se=window.visualViewport)==null||Se.removeEventListener("resize",X)}},[n,A]),y.useEffect(()=>{t&&(a(t),l(1))},[t,a,l]);const O=en(X=>X.places),j=t?Wn(t):void 0,Z=y.useMemo(()=>X3(O),[O]),Q=y.useMemo(()=>t?t==="all"?[...O]:O.filter(X=>X.regionId===t):[],[t,O]),P=y.useMemo(()=>va(Q,r),[Q,r]),G=y.useMemo(()=>J3(P,r.sortBy),[P,r.sortBy]),te=y.useMemo(()=>G.slice(0,i*s),[G,i,s]),J=te.length<G.length,Y=n||v==="map",ee=x&&Y?O.find(X=>X.id===x):void 0;y.useEffect(()=>{Y||m(null)},[Y]),y.useEffect(()=>{m(null)},[r.keyword,r.sortBy,r.tags,r.category]),y.useEffect(()=>{l(1)},[r.keyword,r.sortBy,r.tags,r.category,l]),y.useEffect(()=>{const X=n?b.current:v==="map"?$.current:null,je=L.current;if(!je||!J)return;const Se=new IntersectionObserver(wt=>{var sn;(sn=wt[0])!=null&&sn.isIntersecting&&l(i+1)},{root:X??void 0,rootMargin:"200px"});return Se.observe(je),()=>Se.disconnect()},[J,n,v,i,l]);const ae=y.useCallback(X=>{const je=X,Se=Math.abs(X-E),wt=Math.abs(X-I);return je<=Se&&je<=wt?0:Se<=wt?E:I},[E,I]),ve=y.useCallback(X=>{X.currentTarget.setPointerCapture(X.pointerId),S.current={active:!0,startY:X.clientY,startTy:M},H(!0)},[M]),fe=y.useCallback(X=>{if(!S.current.active)return;const je=X.clientY-S.current.startY;let Se=S.current.startTy+je;Se=Math.max(0,Math.min(I,Se)),R(Se)},[I]),me=y.useCallback(X=>{if(S.current.active){S.current.active=!1;try{X.currentTarget.releasePointerCapture(X.pointerId)}catch{}H(!1),R(je=>ae(je))}},[ae]);if(!t||!j)return o.jsxs(o2,{children:[o.jsx(Js,{children:"해당 지역 정보를 찾지 못했어요."}),o.jsx($C,{type:"button",onClick:()=>e("/meditation"),children:"메인으로 돌아가기"})]});const ke=()=>{n?R(0):C("list")},Ie=()=>{n?R(I):C("map")},De=n?_?I>0&&M>=I*.5:!0:v==="map",Ze=g&&o.jsxs(RC,{children:[o.jsx(AC,{onClick:()=>w(!1)}),o.jsxs(_C,{children:[o.jsxs(NC,{children:[o.jsx("h3",{style:{margin:0,fontSize:"1.2rem"},children:"필터"}),o.jsx(OC,{type:"button",onClick:()=>w(!1),children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),o.jsx(La,{filters:r,availableTags:Z,onChangeKeyword:c,onChangeCategory:f,onToggleTag:u,onChangeSortBy:p,onReset:h})]})]}),Te=Y&&ee?o.jsx(eC,{place:ee,onClose:()=>m(null),onOpenDetail:()=>{e(`/meditation/place/${ee.id}`),m(null)}}):null,Wt=De?o.jsx(u2,{children:o.jsx(BC,{type:"button",onClick:ke,"aria-label":"목록으로 보기",children:"목록"})}):o.jsx(u2,{children:o.jsx(FC,{type:"button",onClick:Ie,"aria-label":"지도로 보기",children:"지도"})});return n?o.jsxs(o.Fragment,{children:[o.jsxs(DC,{children:[o.jsx(s2,{children:o.jsx(n2,{fillViewport:!0,places:G,onSelectPlace:m})}),o.jsx(l2,{children:o.jsxs(a2,{children:[o.jsx(el,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(c2,{children:j.name}),o.jsx(el,{type:"button",onClick:()=>w(!0),"aria-label":"필터",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})})})]})})]}),o.jsxs(HC,{ref:k,$ty:_?M:I,$dragging:D,style:{visibility:_?"visible":"hidden"},"aria-label":"명상지 목록 패널",children:[o.jsx(UC,{onPointerDown:ve,onPointerMove:fe,onPointerUp:me,onPointerCancel:me,"aria-hidden":!0}),o.jsx(VC,{children:o.jsx(Al,{layout:"region",value:r.keyword,onChange:c,placeholder:"장소, 이름, 주소, 기관명, 태그로 검색"})}),o.jsxs(WC,{ref:b,children:[o.jsxs(d2,{children:["총 ",G.length,"곳"]}),o.jsxs(cu,{children:[te.length===0&&o.jsx(Js,{children:Q.length===0?"등록된 공간이 없습니다.":"조건에 맞는 명상센터가 없어요."}),te.map(X=>o.jsx(Vo,{place:X},X.id))]}),J&&o.jsx(uu,{ref:L})]})]}),Te,Wt,Ze]}):v==="map"?o.jsxs(o.Fragment,{children:[o.jsxs(KC,{children:[o.jsxs(YC,{children:[o.jsx(s2,{children:o.jsx(n2,{fillViewport:!0,sidePanelInsetPx:$1,places:G,onSelectPlace:m})}),o.jsx(l2,{children:o.jsxs(a2,{children:[o.jsx(el,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(c2,{children:j.name}),o.jsx(el,{type:"button",onClick:()=>w(!0),"aria-label":"필터",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})})})]})})]}),o.jsxs(GC,{"aria-label":"명상지 목록",children:[o.jsx(ZC,{children:o.jsx(Al,{layout:"region",value:r.keyword,onChange:c,placeholder:"장소, 이름, 주소, 기관명, 태그로 검색"})}),o.jsxs(qC,{ref:$,children:[o.jsxs(d2,{children:["총 ",G.length,"곳"]}),o.jsxs(cu,{children:[te.length===0&&o.jsx(Js,{children:Q.length===0?"등록된 공간이 없습니다.":"조건에 맞는 명상센터가 없어요."}),te.map(X=>o.jsx(Vo,{place:X},X.id))]}),J&&o.jsx(uu,{ref:L})]})]})]}),Te,Wt,Ze]}):o.jsxs(o.Fragment,{children:[o.jsxs(o2,{children:[o.jsxs(jC,{children:[o.jsxs(SC,{children:[o.jsx(CC,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx("h2",{style:{margin:0,fontSize:"1.25rem",fontWeight:600},children:"명상지 리스트"})]}),o.jsx(TC,{type:"button",onClick:()=>w(!0),"aria-label":"필터",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})})})]}),o.jsx(Al,{layout:"region",value:r.keyword,onChange:c,placeholder:"장소, 이름, 주소, 기관명, 태그로 검색"}),o.jsxs(EC,{children:[o.jsx(IC,{children:o.jsx(La,{filters:r,availableTags:Z,onChangeKeyword:c,onChangeCategory:f,onToggleTag:u,onChangeSortBy:p,onReset:h})}),o.jsxs(PC,{children:[o.jsxs(cu,{children:[te.length===0&&o.jsx(Js,{children:Q.length===0?"등록된 공간이 없습니다.":"조건에 맞는 명상센터가 없어요."}),te.map(X=>o.jsx(Vo,{place:X},X.id))]}),J&&o.jsx(uu,{ref:L})]})]})]}),Wt,Ze]})},p2=d.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 24px 16px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};
`,XC=d.header`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`,JC=d.button`
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  display: grid;
  place-items: center;
  cursor: pointer;
  border-radius: ${({theme:e})=>e.radii.pill};

  svg {
    width: 24px;
    stroke: ${({theme:e})=>e.colors.text900};
  }
`,e$=d.div`
  flex: 1;
  min-width: 0;
`,t$=d.h1`
  margin: 0;
  font-size: 1.35rem;
  font-weight: 700;
`,n$=d.p`
  margin: 4px 0 0;
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.text700};
`,r$=d.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,i$=d.button`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  width: 100%;
  padding: 14px 16px;
  text-align: left;
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  border-radius: ${({theme:e})=>e.radii.lg};
  background: ${({theme:e})=>e.colors.white};
  cursor: pointer;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: ${({theme:e})=>e.colors.primary300};
    box-shadow: 0 4px 16px rgba(75, 0, 130, 0.08);
  }
`,o$=d.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`,s$=d.div`
  flex: 1;
  min-width: 0;
`,l$=d.h2`
  margin: 0 0 6px;
  font-size: 1.1rem;
  font-weight: 700;
`,a$=d.p`
  margin: 0;
  font-size: 0.92rem;
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.45;
`,f2=d.p`
  text-align: center;
  color: ${({theme:e})=>e.colors.text700};
  padding: 40px 16px;
`,c$=()=>{const e=yt(),{regionId:t}=js(),n=t?Wn(t):void 0,r=en(s=>s.experts),i=y.useMemo(()=>t?t==="all"?[...r]:r.filter(s=>s.regionIds.includes(t)):[],[t,r]);return!t||!n?o.jsx(p2,{children:o.jsx(f2,{children:"지역 정보를 찾을 수 없어요."})}):o.jsxs(p2,{children:[o.jsxs(XC,{children:[o.jsx(JC,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsxs(e$,{children:[o.jsxs(t$,{children:[n.name," 명상 전문가"]}),o.jsx(n$,{children:"프로필 · 전문 분야를 확인하고 상세로 이동하세요"})]})]}),o.jsxs(r$,{children:[i.length===0&&o.jsx(f2,{children:"이 지역에 등록된 명상 전문가가 아직 없어요."}),i.map(s=>o.jsxs(i$,{type:"button",onClick:()=>e(`/meditation/expert/${s.id}`),children:[o.jsx(o$,{src:Iy(s.avatarUrl),alt:"",loading:"lazy",decoding:"async",sizes:"64px"}),o.jsxs(s$,{children:[o.jsx(l$,{children:s.name}),o.jsx(a$,{children:s.specialties.join(" · ")})]})]},s.id))]})]})},u$="★",d$="☆";function ka(e,t=5){const n=Math.round(Number(e)),r=Math.max(0,Math.min(t,Number.isFinite(n)?n:0));return u$.repeat(r)+d$.repeat(t-r)}const p$=5,f$=Oe`
  from { opacity: 0; }
  to { opacity: 1; }
`,h$=Oe`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`,g$=d.div`
  position: fixed;
  inset: 0;
  z-index: 400;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  animation: ${f$} 0.2s ease both;

  @media (min-width: 600px) {
    justify-content: center;
    align-items: center;
    padding: 24px;
  }
`,m$=d.div`
  background: ${({theme:e})=>e.colors.white};
  border-radius: 20px 20px 0 0;
  max-height: min(92dvh, 720px);
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${h$} 0.32s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (min-width: 600px) {
    border-radius: ${({theme:e})=>e.radii.lg};
    max-width: 440px;
    max-height: min(85dvh, 640px);
  }
`,x$=d.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 16px;
  padding-top: calc(12px + env(safe-area-inset-top, 0px));
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary100};
`,L$=d.div`
  min-width: 0;
`,y$=d.span`
  display: block;
  font-size: 1rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
`,v$=d.span`
  display: block;
  margin-top: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text700};
`,w$=d.button`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border: none;
  background: ${({theme:e})=>e.colors.bg100};
  border-radius: ${({theme:e})=>e.radii.pill};
  cursor: pointer;
  display: grid;
  place-items: center;
  color: ${({theme:e})=>e.colors.text900};
`,b$=d.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 18px 16px calc(24px + env(safe-area-inset-bottom, 0px));
`,k$=d.article`
  padding-bottom: 18px;
  margin-bottom: 18px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary100};

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`,j$=d.p`
  margin: 0 0 10px;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text900};
`,S$=d.div`
  margin: 0;
  font-size: 1rem;
  line-height: 1.65;
  color: ${({theme:e})=>e.colors.text700};
  white-space: pre-wrap;
  word-break: break-word;
`,C$=d.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 16px calc(12px + env(safe-area-inset-bottom, 0px));
  border-top: 1px solid ${({theme:e})=>e.colors.primary100};
  background: ${({theme:e})=>e.colors.white};
`,h2=d.button`
  min-width: 72px;
  padding: 8px 12px;
  border-radius: ${({theme:e})=>e.radii.md};
  border: 1px solid ${({theme:e})=>e.colors.primary300};
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.primary700};
  font-size: 0.88rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({theme:e})=>e.colors.primary50};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: 2px;
  }
`,$$=d.span`
  font-size: 0.88rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text700};
  min-width: 4.5em;
  text-align: center;
`,Vx=({open:e,onClose:t,heading:n="후기",reviews:r,pageSize:i})=>{const s=i??p$,[l,a]=y.useState(1);y.useEffect(()=>{if(!e){a(1);return}a(1)},[e,r]),y.useEffect(()=>{if(!e)return;const w=v=>{v.key==="Escape"&&(v.stopPropagation(),t())};return window.addEventListener("keydown",w,!0),()=>window.removeEventListener("keydown",w,!0)},[e,t]),y.useEffect(()=>{if(!e)return;const w=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=w}},[e]);const c=y.useCallback(w=>{w.target===w.currentTarget&&t()},[t]),u=r.length,p=u===0?0:Math.ceil(u/s),f=p===0?1:Math.min(l,p),h=y.useMemo(()=>{if(u===0)return[];const w=(f-1)*s;return r.slice(w,w+s)},[r,u,f,s]);if(y.useEffect(()=>{p>0&&l>p&&a(p)},[l,p]),!e)return null;const g=u===0?"등록된 후기가 없어요.":p>1?`총 ${u}건 · ${s}건씩 보기`:`총 ${u}건`;return o.jsx(g$,{role:"presentation",onClick:c,children:o.jsxs(m$,{role:"dialog","aria-modal":"true","aria-labelledby":"reviews-list-sheet-title",onClick:w=>w.stopPropagation(),children:[o.jsxs(x$,{children:[o.jsxs(L$,{children:[o.jsx(y$,{id:"reviews-list-sheet-title",children:n}),o.jsx(v$,{children:g})]}),o.jsx(w$,{type:"button",onClick:t,"aria-label":"닫기",children:o.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),o.jsx(b$,{children:u===0?null:h.map((w,v)=>{const C=w.rating!=null?` · ${ka(w.rating)}`:"",x=(f-1)*s+v;return o.jsxs(k$,{children:[o.jsxs(j$,{children:[w.author,C]}),o.jsx(S$,{children:w.body})]},`${w.author}-${x}`)})}),u>0&&p>1&&o.jsxs(C$,{children:[o.jsx(h2,{type:"button",onClick:()=>a(w=>Math.max(1,w-1)),disabled:f<=1,children:"이전"}),o.jsxs($$,{children:[f," / ",p]}),o.jsx(h2,{type:"button",onClick:()=>a(w=>Math.min(p,w+1)),disabled:f>=p,children:"다음"})]})]})})},E$=[{id:"KR-11",name:"서울",slug:"seoul"},{id:"KR-26",name:"부산",slug:"busan"},{id:"KR-27",name:"대구",slug:"daegu"},{id:"KR-28",name:"인천",slug:"incheon"},{id:"KR-29",name:"광주",slug:"gwangju"},{id:"KR-30",name:"대전",slug:"daejeon"},{id:"KR-31",name:"울산",slug:"ulsan"},{id:"KR-41",name:"경기",slug:"gyeonggi"},{id:"KR-42",name:"강원",slug:"gangwon"},{id:"KR-43",name:"충북",slug:"chungbuk"},{id:"KR-44",name:"충남",slug:"chungnam"},{id:"KR-45",name:"전북",slug:"jeonbuk"},{id:"KR-46",name:"전남",slug:"jeonnam"},{id:"KR-47",name:"경북",slug:"gyeongbuk"},{id:"KR-48",name:"경남",slug:"gyeongnam"},{id:"KR-49",name:"제주",slug:"jeju"},{id:"KR-50",name:"세종",slug:"sejong"}],Gr=[...E$].sort((e,t)=>e.name.localeCompare(t.name,"ko"));function oo(e){var t;return((t=Gr.find(n=>n.id===e))==null?void 0:t.name)??e}function P$(){var e,t;return((e=Gr.find(n=>n.id==="KR-11"))==null?void 0:e.id)??((t=Gr[0])==null?void 0:t.id)??"KR-11"}function I$(e,t){const n=t.trim();if(!n)return;const r=e.programs.find(c=>{var u;return(u=c.linksClassTypes)==null?void 0:u.includes(n)});if(r)return r;const s=n.replace(/\([^)]*\)/g," ").replace(/[·]/g," ").split(/\s+/).map(c=>c.replace(/[()]/g,"").trim()).filter(c=>c.length>=2),l=c=>`${c.title} ${c.description}`.toLowerCase(),a=e.programs.find(c=>{const u=l(c);return u.includes(n.toLowerCase())?!0:s.some(p=>u.includes(p.toLowerCase()))});return a||(e.programs.find(c=>c.status==="ongoing")??e.programs[0])}const du=d.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 0 calc(120px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};
  position: relative;
  z-index: 1;
`,pu=d.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  padding-top: calc(16px + env(safe-area-inset-top, 0px));
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.95);
  z-index: 5;
`,fu=d.button`
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  display: grid;
  place-items: center;
  cursor: pointer;
  border-radius: ${({theme:e})=>e.radii.pill};

  svg {
    width: 24px;
    stroke: ${({theme:e})=>e.colors.text900};
  }
`,hu=d.h1`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
`,T$=d.div`
  padding: 8px 20px 20px;
  text-align: center;
`,R$=d.img`
  width: 112px;
  height: 112px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${({theme:e})=>e.colors.primary200};
`,M$=d.h2`
  margin: 16px 0 8px;
  font-size: 1.6rem;
  font-weight: 700;
`,g2=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
`,z$=d.span`
  font-size: 0.85rem;
  padding: 4px 10px;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary50};
  color: ${({theme:e})=>e.colors.primary700};
`,A$=d.button`
  font-size: 0.85rem;
  padding: 4px 10px;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary50};
  color: ${({theme:e})=>e.colors.primary700};
  border: 1px solid transparent;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
    border-color: ${({theme:e})=>e.colors.primary200};
  }

  &:disabled {
    opacity: 0.55;
    cursor: default;
  }

  &:disabled:hover {
    background: ${({theme:e})=>e.colors.primary50};
    border-color: transparent;
  }
`,vn=d.section`
  padding: 0 20px 24px;
`,Qn=d.h3`
  margin: 0 0 10px;
  font-size: 1.15rem;
  font-weight: 700;
`,jr=d.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.65;
  color: ${({theme:e})=>e.colors.text700};
`,m2=d.ul`
  margin: 0;
  padding-left: 1.2em;
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.6;

  li {
    margin-bottom: 6px;
  }
`,x2=d.button`
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: 14px;
  text-align: left;
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  border-radius: ${({theme:e})=>e.radii.lg};
  overflow: hidden;
  background: ${({theme:e})=>e.colors.white};
  cursor: pointer;
  font: inherit;
  color: inherit;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: ${({theme:e})=>e.colors.primary300};
    box-shadow: 0 4px 14px rgba(75, 0, 130, 0.08);
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: 2px;
  }
`,L2=d.span`
  display: block;
  margin: 0 0 6px;
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
`,y2=d.span`
  display: block;
  font-size: 1rem;
  line-height: 1.65;
  color: ${({theme:e})=>e.colors.text700};
`,v2=d.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  display: block;
  pointer-events: none;
  user-select: none;
`,w2=d.div`
  padding: 14px 16px;
`,b2=d.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 6px;
  margin-bottom: 8px;
  background: ${({theme:e,$past:t})=>t?e.colors.bg100:e.colors.primary100};
  color: ${({theme:e,$past:t})=>t?e.colors.text700:e.colors.primary700};
`,_$=d.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
  padding: 8px 14px;
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  background: ${({theme:e})=>e.colors.primary600};
  color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
`,N$=d.div`
  padding: 14px 16px;
  border-radius: ${({theme:e})=>e.radii.md};
  background: ${({theme:e})=>e.colors.warmCream};
  margin-bottom: 10px;
`,O$=d.p`
  margin: 0 0 6px;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text900};
`,D$=d.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.55;
  color: ${({theme:e})=>e.colors.text700};
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,B$=d.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 4px;
  padding: 12px 14px;
  border: 1px solid ${({theme:e})=>e.colors.primary300};
  border-radius: ${({theme:e})=>e.radii.md};
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.primary700};
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  -webkit-tap-highlight-color: transparent;
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.colors.primary50};
    border-color: ${({theme:e})=>e.colors.primary600};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: 2px;
  }
`,F$=d.p`
  margin: 0;
  color: ${({theme:e})=>e.colors.text700};
  font-size: 0.95rem;
`,H$=()=>{const e=yt(),{expertId:t}=js(),[n,r]=y.useState(),[i,s]=y.useState(),[l,a]=y.useState(!0),[c,u]=y.useState(!1);if(y.useEffect(()=>{if(!t){r(void 0),s(void 0),a(!1);return}let h=!1;return a(!0),(async()=>{const g=await A3(t);if(!h){if(!g){r(void 0),s(void 0),a(!1);return}if(r(g),g.centerPlaceId){const w=await O3(g.centerPlaceId);h||s(w??void 0)}else s(void 0);a(!1)}})(),()=>{h=!0}},[t]),l)return o.jsxs(du,{children:[o.jsxs(pu,{children:[o.jsx(fu,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(hu,{children:"전문가"})]}),o.jsx(vn,{children:o.jsx(jr,{children:"불러오는 중…"})})]});if(!n)return o.jsxs(du,{children:[o.jsxs(pu,{children:[o.jsx(fu,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(hu,{children:"전문가"})]}),o.jsx(vn,{children:o.jsx(jr,{children:"프로필을 찾을 수 없어요."})})]});const p=n.programs.filter(h=>h.status==="ongoing"),f=n.programs.filter(h=>h.status==="past");return o.jsxs(du,{children:[o.jsxs(pu,{children:[o.jsx(fu,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(hu,{children:"명상 전문가"})]}),o.jsxs(T$,{children:[o.jsx(R$,{src:n.avatarUrl,alt:""}),o.jsx(M$,{children:n.name}),o.jsx(g2,{children:n.specialties.map(h=>o.jsx(z$,{children:h},h))})]}),o.jsxs(vn,{children:[o.jsx(Qn,{children:"자기소개"}),o.jsx(jr,{as:"div",children:o.jsx(io,{markdown:n.intro})})]}),o.jsxs(vn,{children:[o.jsx(Qn,{children:"학위·이수"}),o.jsx(m2,{children:[...n.degrees,...n.certificates].map(h=>o.jsx("li",{children:h},h))})]}),o.jsxs(vn,{children:[o.jsx(Qn,{children:"경력"}),o.jsx(m2,{children:n.careers.map(h=>o.jsx("li",{children:h},h))})]}),o.jsxs(vn,{children:[o.jsx(Qn,{children:"클래스·분야"}),o.jsx(g2,{style:{justifyContent:"flex-start"},children:n.classTypes.map(h=>{const g=I$(n,h);return o.jsx(A$,{type:"button",disabled:!g,title:g?`${g.title} 상세 보기`:"등록된 클래스가 없어요",onClick:()=>{g&&e(`/meditation/expert/${n.id}/class/${g.id}`)},children:h},h)})})]}),o.jsxs(vn,{children:[o.jsx(Qn,{children:"센터·활동 지역"}),n.hasCenter&&n.centerSummary&&o.jsx(jr,{style:{marginBottom:8},children:n.centerSummary}),n.hasCenter&&n.centerAddress&&o.jsx(jr,{style:{marginBottom:8},children:n.centerAddress}),n.hasCenter&&n.centerPlaceId&&i&&o.jsxs(_$,{type:"button",onClick:()=>e(`/meditation/place/${n.centerPlaceId}`),children:["연결된 명상지 보기 — ",i.name]}),!n.hasCenter&&n.activityAreas&&n.activityAreas.length>0&&o.jsxs(jr,{children:["주 활동 반경: ",n.activityAreas.map(oo).join(", ")]})]}),o.jsxs(vn,{children:[o.jsx(Qn,{children:"진행 중인 클래스"}),p.length===0&&o.jsx(jr,{children:"현재 모집 중인 공개 일정이 없어요."}),p.map(h=>o.jsxs(x2,{type:"button","aria-label":`${h.title} 클래스 상세`,onClick:()=>e(`/meditation/expert/${n.id}/class/${h.id}`),children:[h.imageUrl&&o.jsx(v2,{src:h.imageUrl,alt:"",draggable:!1}),o.jsxs(w2,{children:[o.jsx(b2,{children:"진행 중"}),o.jsx(L2,{children:h.title}),o.jsx(y2,{children:h.description})]})]},h.id))]}),f.length>0&&o.jsxs(vn,{children:[o.jsx(Qn,{children:"이전 프로그램"}),f.map(h=>o.jsxs(x2,{type:"button","aria-label":`${h.title} 클래스 상세`,onClick:()=>e(`/meditation/expert/${n.id}/class/${h.id}`),children:[h.imageUrl&&o.jsx(v2,{src:h.imageUrl,alt:"",draggable:!1}),o.jsxs(w2,{children:[o.jsx(b2,{$past:!0,children:"종료"}),o.jsx(L2,{children:h.title}),o.jsx(y2,{children:h.description})]})]},h.id))]}),n.reviews.length>0&&o.jsxs(vn,{children:[o.jsx(Qn,{children:"후기"}),n.reviews.slice(0,2).map((h,g)=>o.jsxs(N$,{children:[o.jsxs(O$,{children:[h.author,h.rating!=null?` · ${ka(h.rating)}`:""]}),o.jsx(D$,{children:h.body})]},`${h.author}-${g}`)),n.reviews.length>2&&o.jsxs(F$,{style:{marginBottom:10},children:["외 ",n.reviews.length-2,"건의 후기가 더 있어요."]}),o.jsxs(B$,{type:"button",onClick:()=>u(!0),children:["전체 후기 보기 · ",n.reviews.length,"건"]})]}),o.jsx(Vx,{open:c,onClose:()=>u(!1),heading:"후기",reviews:n.reviews})]})},gu=d.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 0 calc(48px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};
`,mu=d.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  padding-top: calc(16px + env(safe-area-inset-top, 0px));
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.96);
  z-index: 5;
`,xu=d.button`
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  display: grid;
  place-items: center;
  cursor: pointer;
  border-radius: ${({theme:e})=>e.radii.pill};

  svg {
    width: 24px;
    stroke: ${({theme:e})=>e.colors.text900};
  }
`,Lu=d.h1`
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0;
  flex: 1;
  min-width: 0;
`,U$=d.div`
  width: 100%;
`,V$=d.img`
  width: 100%;
  max-height: 240px;
  object-fit: cover;
  display: block;
  background: ${({theme:e})=>e.colors.bg100};
`,W$=d.div`
  padding: 20px 20px 28px;
`,K$=d.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 8px;
  margin-bottom: 12px;
  background: ${({theme:e,$past:t})=>t?e.colors.bg100:e.colors.primary100};
  color: ${({theme:e,$past:t})=>t?e.colors.text700:e.colors.primary700};
`,Y$=d.h2`
  margin: 0 0 14px;
  font-size: 1.45rem;
  font-weight: 700;
  line-height: 1.3;
`,G$=d.p`
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.65;
  color: ${({theme:e})=>e.colors.text700};
`,Z$=d.button`
  margin-top: 24px;
  padding: 0;
  border: none;
  background: none;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.primary600};
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;
`,k2=d.p`
  padding: 32px 20px;
  color: ${({theme:e})=>e.colors.text700};
`,q$=()=>{const e=yt(),{expertId:t,programId:n}=js(),[r,i]=y.useState(),[s,l]=y.useState(!0);y.useEffect(()=>{if(!t){i(void 0),l(!1);return}let c=!1;return l(!0),A3(t).then(u=>{c||(i(u??void 0),l(!1))}),()=>{c=!0}},[t]);const a=r==null?void 0:r.programs.find(c=>c.id===n);return s?o.jsxs(gu,{children:[o.jsxs(mu,{children:[o.jsx(xu,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(Lu,{children:"클래스"})]}),o.jsx(k2,{children:"불러오는 중…"})]}):!r||!a?o.jsxs(gu,{children:[o.jsxs(mu,{children:[o.jsx(xu,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(Lu,{children:"클래스"})]}),o.jsx(k2,{children:"클래스 정보를 찾을 수 없어요."})]}):o.jsxs(gu,{children:[o.jsxs(mu,{children:[o.jsx(xu,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(Lu,{children:"클래스 상세"})]}),a.imageUrl?o.jsx(U$,{children:o.jsx(V$,{src:a.imageUrl,alt:""})}):o.jsx("div",{style:{height:8}}),o.jsxs(W$,{children:[o.jsx(K$,{$past:a.status==="past",children:a.status==="ongoing"?"진행 중":"종료된 프로그램"}),o.jsx(Y$,{children:a.title}),o.jsx(G$,{children:a.description}),o.jsxs(Z$,{type:"button",onClick:()=>e(`/meditation/expert/${r.id}`),children:["← ",r.name," 프로필로 돌아가기"]})]})]})},Wx=Oe`
  from { opacity: 0; }
  to { opacity: 1; }
`,Q$=Oe`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`,X$=d.div`
  position: fixed;
  inset: 0;
  z-index: 300;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  animation: ${Wx} 0.2s ease both;

  @media (min-width: 600px) {
    justify-content: center;
    align-items: center;
    padding: 24px;
  }
`,J$=d.div`
  background: ${({theme:e})=>e.colors.white};
  border-radius: 20px 20px 0 0;
  max-height: min(94dvh, 920px);
  height: min(94dvh, 920px);
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${Q$} 0.32s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (min-width: 600px) {
    border-radius: ${({theme:e})=>e.radii.lg};
    max-width: 440px;
    height: min(88dvh, 780px);
  }
`,eE=d.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  padding-top: calc(12px + env(safe-area-inset-top, 0px));
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary100};
`,tE=d.span`
  font-size: 1rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
`,nE=d.button`
  width: 40px;
  height: 40px;
  border: none;
  background: ${({theme:e})=>e.colors.bg100};
  border-radius: ${({theme:e})=>e.radii.pill};
  cursor: pointer;
  display: grid;
  place-items: center;
  color: ${({theme:e})=>e.colors.text900};
`,rE=d.div`
  flex-shrink: 0;
  position: relative;
  height: 42vmin;
  min-height: 200px;
  max-height: 280px;
  background: ${({theme:e})=>e.colors.bg100};
`,iE=d.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  touch-action: pan-y pinch-zoom;
`,oE=d.div`
  display: flex;
  height: 100%;
  will-change: transform;
`,sE=d.div`
  flex-shrink: 0;
  height: 100%;
`,lE=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none;
  user-select: none;
`,j2=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  user-select: none;
`,S2=d.button`
  width: 100%;
  height: 100%;
  display: block;
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  font: inherit;
  text-align: inherit;
  cursor: ${({$clickable:e})=>e?"zoom-in":"default"};
  -webkit-tap-highlight-color: transparent;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: -2px;
  }
`,aE=d.div`
  position: fixed;
  inset: 0;
  z-index: 400;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  flex-direction: column;
  animation: ${Wx} 0.2s ease both;
`,cE=d.div`
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 12px;
  padding-top: calc(8px + env(safe-area-inset-top, 0px));
`,uE=d.button`
  width: 44px;
  height: 44px;
  border: none;
  background: rgba(255, 255, 255, 0.14);
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  display: grid;
  place-items: center;
  -webkit-tap-highlight-color: transparent;

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }
`,dE=d.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10px 28px;
  padding-bottom: calc(28px + env(safe-area-inset-bottom, 0px));
`,C2=d.div`
  height: 100%;
  width: 100%;
  will-change: transform;
  transition: ${({$snap:e})=>e?"transform 0.28s cubic-bezier(0.22, 1, 0.36, 1)":"none"};
`,$2=d.div`
  position: relative;
  width: 100%;
  max-width: min(96vw, 720px);
  height: min(85dvh, 900px);
  max-height: min(85dvh, 900px);
  overflow: hidden;
  touch-action: none;
  background: transparent;
  border-radius: ${({theme:e})=>e.radii.md};
`,pE=d.div`
  display: flex;
  height: 100%;
  will-change: transform;
`,fE=d.div`
  flex-shrink: 0;
  height: 100%;
`,hE=d.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  background: transparent;
  display: block;
  pointer-events: none;
  user-select: none;
`,E2=d.img`
  width: 100%;
  height: 100%;
  max-height: min(85dvh, 900px);
  object-fit: contain;
  object-position: center;
  background: transparent;
  display: block;
  user-select: none;
`,gE=d.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  gap: 6px;
  pointer-events: none;

  & > * {
    pointer-events: auto;
  }
`,mE=d.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-top: 14px;
  width: 100%;
  pointer-events: none;

  & > * {
    pointer-events: auto;
  }
`,Kx=d.button`
  width: 7px;
  height: 7px;
  padding: 0;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background: ${({$active:e})=>e?"#fff":"rgba(255,255,255,0.45)"};
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
  -webkit-tap-highlight-color: transparent;

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }
`,xE=d.div`
  flex-shrink: 0;
  display: flex;
  gap: 8px;
  padding: 12px 16px;
  background: ${({theme:e})=>e.colors.warmCream};
`,P2=d.button`
  flex: 1;
  padding: 10px 12px;
  border-radius: ${({theme:e})=>e.radii.pill};
  border: 1px solid
    ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.primary200};
  background: ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.white};
  color: ${({$active:e})=>e?"#fff":"inherit"};
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
`,LE=d.div`
  flex-shrink: 0;
  display: flex;
  gap: 10px;
  padding: 12px 16px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary100};

  &::-webkit-scrollbar {
    height: 0;
  }
`,yE=d.button`
  flex-shrink: 0;
  width: 88px;
  height: 88px;
  padding: 0;
  border: 3px solid
    ${({theme:e,$active:t})=>t?e.colors.primary600:"transparent"};
  border-radius: ${({theme:e})=>e.radii.md};
  overflow: hidden;
  cursor: pointer;
  background: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`,vE=d.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 18px 16px 28px;
`,wE=d.h3`
  margin: 0 0 12px;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.25;
`,bE=d.div`
  font-size: 1rem;
  line-height: 1.65;
  color: ${({theme:e})=>e.colors.text700};
  margin-bottom: 22px;

  p {
    margin: 0 0 0.75em;
  }
  p:last-child {
    margin-bottom: 0;
  }
  ul,
  ol {
    margin: 0 0 0.75em;
    padding-left: 1.2em;
  }
  strong {
    font-weight: 600;
  }
`,kE=d.section`
  margin-top: 8px;
`,I2=d.h4`
  margin: 0 0 12px;
  font-size: 1rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
`,T2=d.div`
  padding: 14px;
  border-radius: ${({theme:e})=>e.radii.md};
  background: ${({theme:e})=>e.colors.warmCream};
  margin-bottom: 10px;
`,R2=d.p`
  margin: 0 0 6px;
  font-size: 0.88rem;
  font-weight: 600;
`,M2=d.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.55;
  color: ${({theme:e})=>e.colors.text700};
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,z2=d.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 4px;
  padding: 12px 14px;
  border: 1px solid ${({theme:e})=>e.colors.primary300};
  border-radius: ${({theme:e})=>e.radii.md};
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.primary700};
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  -webkit-tap-highlight-color: transparent;
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.colors.primary50};
    border-color: ${({theme:e})=>e.colors.primary600};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: 2px;
  }
`,jE=d.section`
  margin-top: 28px;
  padding-top: 22px;
  border-top: 1px solid ${({theme:e})=>e.colors.primary100};
`,SE=d.h4`
  margin: 0 0 14px;
  font-size: 1.05rem;
  font-weight: 700;
`,CE=d.article`
  margin-bottom: 20px;
`,$E=d.div`
  display: flex;
  gap: 14px;
  align-items: flex-start;
  margin-bottom: 10px;
`,EE=d.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`,PE=d.div`
  font-weight: 700;
  font-size: 1.05rem;
  margin-bottom: 6px;
`,IE=d.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.55;
  color: ${({theme:e})=>e.colors.text700};
`,yu=d.p`
  margin: 0;
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.text700};
`;function t0(e,t){const n=e.join("\0"),[r,i]=y.useState(1),[s,l]=y.useState(!1),[a,c]=y.useState(0),[u,p]=y.useState(0),f=y.useRef(null),h=y.useRef(null),g=y.useRef(1),w=y.useRef(null),v=y.useRef(0),C=y.useRef(0),x=y.useRef(null),m=y.useCallback(()=>{w.current=null,v.current=0,C.current=0,p(0)},[]);y.useEffect(()=>{if(x.current===null){x.current=n;return}x.current!==n&&(x.current=n,i(1),l(!1),c(0),m())},[n,m]),y.useLayoutEffect(()=>{if(!t||e.length<=1){c(0);return}const D=f.current;if(!D)return;const H=()=>{const z=D.getBoundingClientRect().width;z>0&&c(z)};H();const _=new ResizeObserver(H);return _.observe(D),()=>_.disconnect()},[t,e.length,n]);const L=y.useMemo(()=>{const D=e.length;return D<=1?e:[e[D-1],...e,e[0]]},[e]),b=L.length,$=y.useMemo(()=>{const D=e.length;return D<=1?0:r===0?D-1:r===D+1?0:r-1},[e.length,r]),k=y.useCallback(D=>{e.length<=1||(w.current=D.touches[0].clientX,v.current=0,C.current=0,p(0))},[e.length]),S=y.useCallback(D=>{var Z;if(w.current==null||e.length<=1)return;const H=((Z=f.current)==null?void 0:Z.offsetWidth)??320,_=e.length;let z=D.touches[0].clientX-w.current;const A=H*.45;z=Math.max(-A,Math.min(A,z)),C.current=z;const O=g.current;let j=z;O===1&&z>0&&(j=0),O===_&&z<0&&(j=0),v.current=j,p(j)},[e.length]),M=y.useCallback(()=>{var A;if(w.current==null||e.length<=1){m();return}const D=((A=f.current)==null?void 0:A.offsetWidth)??320,H=Math.min(48,D*.14),_=C.current,z=e.length;i(O=>_>H?O===0?z-1:O===1?0:O-1:_<-H?O===z+1?2:O===z?z+1:O+1:O),m()},[e.length,m]),R=y.useCallback(D=>{if(!D.propertyName.toLowerCase().includes("transform")||D.target!==D.currentTarget)return;const H=e.length;if(H<=1)return;const _=g.current;_===H+1?(l(!0),i(1)):_===0&&(l(!0),i(H))},[e.length]);y.useLayoutEffect(()=>{if(!s)return;const D=h.current;D&&D.offsetWidth;let H=null;const _=requestAnimationFrame(()=>{H=requestAnimationFrame(()=>{l(!1)})});return()=>{cancelAnimationFrame(_),H!=null&&cancelAnimationFrame(H)}},[r,s]),y.useEffect(()=>{m()},[n,m]),g.current=r;const I=e.length>1&&a>0,T=I?b*a:void 0,E=I?-(r*a)+u:0,N=y.useCallback(D=>{l(!1),i(D),m()},[m]);return{loopIndex:r,setLoopIndex:i,activeDot:$,loopUrls:L,slideCount:b,usePx:I,trackWidthPx:T,translatePx:E,transOff:s,dragPx:u,viewportRef:f,trackRef:h,onTouchStart:k,onTouchMove:S,onTouchEnd:M,onTouchCancel:m,onTransitionEnd:R,vpWidth:a,syncToLoopIndex:N}}const tl=14,TE=115,RE=360;function A2(e){const t=Math.sign(e),n=Math.abs(e);return t*Math.min(n*.88,RE)}function Yx({urls:e,initialLoopIndex:t,onClose:n,lockBodyScroll:r=!0}){const i=e.length>1,s=t0(e,i),{syncToLoopIndex:l,viewportRef:a,trackRef:c,onTouchStart:u,onTouchMove:p,onTouchEnd:f,onTouchCancel:h,onTransitionEnd:g,usePx:w,trackWidthPx:v,translatePx:C,transOff:x,dragPx:m,loopUrls:L,vpWidth:b,setLoopIndex:$,activeDot:k}=s,[S,M]=y.useState(0),[R,I]=y.useState(!1),T=y.useRef(0),E=y.useRef(null),N=y.useRef("n"),D=y.useRef(null),H=y.useRef(!1),_=y.useCallback(Y=>{var ee;if((ee=D.current)==null||ee.call(D),D.current=null,a.current=Y,Y){const ae=ve=>{N.current==="v"&&ve.preventDefault()};Y.addEventListener("touchmove",ae,{passive:!1}),D.current=()=>Y.removeEventListener("touchmove",ae)}},[a]);y.useEffect(()=>{if(!r)return;const Y=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=Y}},[r]),y.useLayoutEffect(()=>{e.length<=1||l(t)},[e.length,t,l]),y.useEffect(()=>{T.current=0,M(0),N.current="n",E.current=null,H.current=!1},[e.join("\0")]),y.useEffect(()=>{const Y=ee=>{ee.key==="Escape"&&n()};return window.addEventListener("keydown",Y),()=>window.removeEventListener("keydown",Y)},[n]),y.useEffect(()=>()=>{var Y;(Y=D.current)==null||Y.call(D),D.current=null},[]);const z=y.useCallback(Y=>{Y.target===Y.currentTarget&&n()},[n]),A=y.useCallback(()=>{if(Math.abs(T.current)>=TE){T.current=0,M(0),n();return}I(!0),T.current=0,M(0),window.setTimeout(()=>I(!1),320)},[n]),O=y.useCallback(Y=>{Y.touches.length===1&&(I(!1),E.current={x:Y.touches[0].clientX,y:Y.touches[0].clientY},N.current="n")},[]),j=y.useCallback(Y=>{if(!E.current||Y.touches.length!==1)return;const ee=Y.touches[0].clientX,ae=Y.touches[0].clientY,ve=ee-E.current.x,fe=ae-E.current.y;if(N.current==="n"){if(Math.abs(ve)<tl&&Math.abs(fe)<tl)return;Math.abs(fe)>=Math.abs(ve)?N.current="v":(N.current="h",e.length>1&&u(Y))}if(N.current==="v"){const me=A2(fe);T.current=me,M(me);return}N.current==="h"&&e.length>1&&p(Y)},[e.length,p,u]),Z=y.useCallback(()=>{N.current==="v"?A():N.current==="h"&&e.length>1&&f(),E.current=null,N.current="n"},[A,f,e.length]),Q=y.useCallback(()=>{N.current==="v"?A():N.current==="h"&&e.length>1&&h(),E.current=null,N.current="n"},[A,h,e.length]),P=y.useCallback(Y=>{Y.button===0&&(H.current=!0,I(!1),E.current={x:Y.clientX,y:Y.clientY},N.current="n")},[]),G=y.useCallback(Y=>{if(!H.current||!E.current)return;const ee=Y.clientX-E.current.x,ae=Y.clientY-E.current.y;if(N.current==="n"){if(Math.abs(ee)<tl&&Math.abs(ae)<tl)return;if(Math.abs(ae)>=Math.abs(ee))N.current="v";else{N.current="h",H.current=!1,E.current=null;return}}if(N.current==="v"){const ve=A2(ae);T.current=ve,M(ve)}},[]),te=y.useCallback(()=>{H.current&&(H.current=!1,N.current==="v"&&A(),E.current=null,N.current="n")},[A]);if(e.length===0)return null;const J={ref:_,onTouchStart:O,onTouchMove:j,onTouchEnd:Z,onTouchCancel:Q,onMouseDown:P,onMouseMove:G,onMouseUp:te,onMouseLeave:te};return o.jsxs(aE,{role:"dialog","aria-modal":"true","aria-label":"프로그램 사진 크게 보기",onClick:z,children:[o.jsx(cE,{onClick:Y=>Y.stopPropagation(),children:o.jsx(uE,{type:"button",onClick:n,"aria-label":"닫기",children:o.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})}),o.jsx(dE,{onClick:Y=>Y.stopPropagation(),children:e.length<=1?o.jsx($2,{...J,children:o.jsx(C2,{$snap:R,style:{transform:`translate3d(0, ${S}px, 0)`},children:o.jsx(E2,{src:e[0],alt:"",draggable:!1})})}):o.jsxs(o.Fragment,{children:[o.jsx($2,{...J,children:o.jsx(C2,{$snap:R,style:{transform:`translate3d(0, ${S}px, 0)`},children:w?o.jsx(pE,{ref:c,onTransitionEnd:g,style:{width:v,height:"100%",transform:`translate3d(${C}px, 0, 0)`,transition:m!==0||x?"none":"transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)"},children:L.map((Y,ee)=>o.jsx(fE,{style:{width:b,flexShrink:0},children:o.jsx(hE,{src:Y,alt:"",draggable:!1})},`viewer-loop-${ee}`))}):o.jsx(E2,{src:e[0],alt:"",draggable:!1})})}),o.jsx(mE,{children:e.map((Y,ee)=>o.jsx(Kx,{type:"button","aria-label":`${ee+1}번째 사진으로 이동`,"aria-current":ee===k?"true":void 0,$active:ee===k,onClick:()=>$(ee+1)},ee))})]})})]})}const ME=({place:e,open:t,onClose:n,initialProgramId:r})=>{var I,T;const i=Za(e).programs??[],s=y.useMemo(()=>i.filter(E=>E.status==="ongoing"),[i]),l=y.useMemo(()=>i.filter(E=>E.status==="past"),[i]),[a,c]=y.useState("ongoing"),[u,p]=y.useState(null),[f,h]=y.useState(!1),[g,w]=y.useState(null),v=a==="ongoing"?s:l;y.useEffect(()=>{var D,H;if(!t)return;const E=(D=s[0])==null?void 0:D.id,N=(H=l[0])==null?void 0:H.id;if(r&&i.some(_=>_.id===r)){const _=i.find(z=>z.id===r);c(_.status==="ongoing"?"ongoing":"past"),p(r)}else E?(c("ongoing"),p(E)):N?(c("past"),p(N)):p(null)},[t,r,s,l,i]);const C=i.find(E=>E.id===u)??null,x=y.useMemo(()=>{var D;if(!C)return[];const E=(D=C.imageUrls)!=null&&D.length?C.imageUrls:[],N=[C.imageUrl,...E.filter(H=>H!==C.imageUrl)];return Array.from(new Set(N))},[C]),m=t&&!!C&&x.length>1,L=t0(x,m);y.useEffect(()=>{t&&L.syncToLoopIndex(1)},[t,L.syncToLoopIndex]),y.useEffect(()=>{w(null)},[u]),y.useEffect(()=>{t||h(!1)},[t]),y.useEffect(()=>{if(!t)return;const E=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=E}},[t]),y.useEffect(()=>{t||w(null)},[t]),y.useEffect(()=>{if(!t)return;const E=N=>{if(N.key==="Escape"){if(f){N.preventDefault(),h(!1);return}n()}};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[t,n,f]);const b=y.useCallback(E=>{E.target===E.currentTarget&&n()},[n]),$=e.venueKind==="명상센터"&&(((I=e.instructors)==null?void 0:I.length)??0)>0,k=s.length>0&&l.length>0,S=$&&(((T=e.instructors)==null?void 0:T.some(E=>E.reviews.length>0))??!1),M=y.useCallback(()=>{x.length!==0&&h(!0)},[x.length]);if(!t||i.length===0)return null;const R=e.venueKind==="명상센터"?"명상센터":"명상지";return o.jsxs(o.Fragment,{children:[o.jsx(X$,{role:"presentation",onClick:b,children:o.jsxs(J$,{role:"dialog","aria-modal":"true","aria-labelledby":"place-programs-modal-title",onClick:E=>E.stopPropagation(),children:[o.jsxs(eE,{children:[o.jsxs(tE,{id:"place-programs-modal-title",children:["프로그램 · 행사 · 후기 ",o.jsxs("span",{style:{opacity:.75},children:["(",R,")"]})]}),o.jsx(nE,{type:"button",onClick:n,"aria-label":"닫기",children:o.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),C&&o.jsxs(o.Fragment,{children:[o.jsx(rE,{children:x.length<=1?o.jsx(S2,{type:"button",$clickable:x.length>0,onClick:M,"aria-label":"사진 크게 보기",children:o.jsx(j2,{src:x[0]??C.imageUrl,alt:"",draggable:!1})}):o.jsxs(o.Fragment,{children:[o.jsx(S2,{type:"button",$clickable:!0,onClick:M,"aria-label":"사진 크게 보기",children:o.jsx(iE,{ref:L.viewportRef,onTouchStart:L.onTouchStart,onTouchMove:L.onTouchMove,onTouchEnd:L.onTouchEnd,onTouchCancel:L.onTouchCancel,children:L.usePx?o.jsx(oE,{ref:L.trackRef,onTransitionEnd:L.onTransitionEnd,style:{width:L.trackWidthPx,transform:`translate3d(${L.translatePx}px, 0, 0)`,transition:L.dragPx!==0||L.transOff?"none":"transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)"},children:L.loopUrls.map((E,N)=>o.jsx(sE,{style:{width:L.vpWidth,flexShrink:0},children:o.jsx(lE,{src:E,alt:"",draggable:!1})},`hero-loop-${N}`))}):o.jsx(j2,{src:x[0],alt:"",draggable:!1})})}),o.jsx(gE,{children:x.map((E,N)=>o.jsx(Kx,{type:"button","aria-label":`${N+1}번째 사진으로 이동`,"aria-current":N===L.activeDot?"true":void 0,$active:N===L.activeDot,onClick:()=>L.setLoopIndex(N+1)},N))})]})}),k?o.jsxs(xE,{children:[o.jsxs(P2,{type:"button",$active:a==="ongoing",onClick:()=>{var N;c("ongoing");const E=(N=s[0])==null?void 0:N.id;p(E??null)},disabled:s.length===0,style:{opacity:s.length===0?.45:1},children:["진행 중 ",s.length>0?`(${s.length})`:""]}),o.jsxs(P2,{type:"button",$active:a==="past",onClick:()=>{var N;c("past");const E=(N=l[0])==null?void 0:N.id;p(E??null)},disabled:l.length===0,style:{opacity:l.length===0?.45:1},children:["지난 프로그램 ",l.length>0?`(${l.length})`:""]})]}):null,o.jsxs(LE,{children:[v.length===0&&o.jsx(yu,{children:"이 구간에 등록된 프로그램이 없어요."}),v.map(E=>o.jsx(yE,{type:"button",$active:E.id===u,onClick:()=>p(E.id),"aria-label":E.title,children:o.jsx("img",{src:E.imageUrl,alt:"",draggable:!1})},E.id))]}),o.jsxs(vE,{children:[o.jsxs(wE,{children:[C.kind==="event"?"행사 · ":C.kind==="program"?"프로그램 · ":"",C.title]}),o.jsx(bE,{children:o.jsx(Gi,{children:C.bodyFromVenue})}),C.reviews.length>0&&o.jsxs(kE,{children:[o.jsx(I2,{children:"프로그램 후기"}),C.reviews.slice(0,2).map((E,N)=>o.jsxs(T2,{children:[o.jsxs(R2,{children:[E.author,E.rating!=null?` · ${ka(E.rating)}`:""]}),o.jsx(M2,{children:E.body})]},`${E.author}-${N}`)),C.reviews.length>2&&o.jsxs(yu,{style:{marginBottom:10,fontSize:"0.88rem"},children:["외 ",C.reviews.length-2,"건의 후기가 더 있어요."]}),o.jsxs(z2,{type:"button",onClick:()=>w({heading:"프로그램 후기",reviews:C.reviews}),children:["전체 후기 보기 · ",C.reviews.length,"건"]})]}),$&&o.jsxs(jE,{children:[o.jsx(SE,{children:S?"강사 소개 · 강사 후기":"강사 소개"}),e.instructors.map(E=>o.jsxs(CE,{children:[o.jsxs($E,{children:[o.jsx(EE,{src:E.photoUrl,alt:""}),o.jsxs("div",{children:[o.jsx(PE,{children:E.name}),o.jsx(IE,{children:E.intro})]})]}),E.reviews.length>0&&o.jsxs(o.Fragment,{children:[o.jsx(I2,{style:{fontSize:"0.95rem",marginBottom:8},children:"강사 후기"}),E.reviews.slice(0,2).map((N,D)=>o.jsxs(T2,{children:[o.jsxs(R2,{children:[N.author,N.rating!=null?` · ${ka(N.rating)}`:""]}),o.jsx(M2,{children:N.body})]},`${E.id}-ir-${D}`)),E.reviews.length>2&&o.jsxs(yu,{style:{marginBottom:10,fontSize:"0.88rem"},children:["외 ",E.reviews.length-2,"건의 후기가 더 있어요."]}),o.jsxs(z2,{type:"button",onClick:()=>w({heading:`강사 후기 · ${E.name}`,reviews:E.reviews}),children:["강사 후기 전체 보기 · ",E.reviews.length,"건"]})]})]},E.id))]})]})]})]})}),o.jsx(Vx,{open:g!=null,onClose:()=>w(null),heading:g==null?void 0:g.heading,reviews:(g==null?void 0:g.reviews)??[]}),f&&C&&x.length>0&&o.jsx(Yx,{urls:x,initialLoopIndex:L.loopIndex,onClose:()=>h(!1),lockBodyScroll:!1})]})};function n0(e){var i;const t=[],n=new Set,r=s=>{const l=s==null?void 0:s.trim();!l||n.has(l)||(n.add(l),t.push(l))};if((i=e.photos)!=null&&i.length)for(const s of e.photos)r(s);else r(e.thumbnailUrl);for(const s of e.programs??[])if(s.status==="ongoing"){r(s.imageUrl);for(const l of s.imageUrls??[])r(l)}return t}function zE(e){return n0(e)[0]??e.thumbnailUrl??""}const vu=d.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0 calc(28px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};
`,wu=d.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  padding-top: calc(16px + env(safe-area-inset-top, 0px));
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.95);
  z-index: 10;
`,bu=d.button`
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  color: ${({theme:e})=>e.colors.text900};
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: ${({theme:e})=>e.radii.pill};

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: 2px;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`,ku=d.h1`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
`,AE=d.button`
  display: block;
  width: 100%;
  height: 280px;
  padding: 0;
  border: none;
  background: ${({theme:e})=>e.colors.bg100};
  overflow: hidden;
  cursor: zoom-in;
  -webkit-tap-highlight-color: transparent;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: -2px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    pointer-events: none;
  }
`,_E=d.div`
  position: relative;
  width: 100%;
  height: 280px;
  background: ${({theme:e})=>e.colors.bg100};
`,NE=d.button`
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  font: inherit;
  cursor: zoom-in;
  -webkit-tap-highlight-color: transparent;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: -2px;
  }
`,OE=d.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  touch-action: pan-y pinch-zoom;
`,DE=d.div`
  display: flex;
  height: 100%;
  will-change: transform;
`,BE=d.div`
  flex-shrink: 0;
  height: 100%;
`,_2=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none;
  user-select: none;
`,FE=d.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  gap: 6px;
  pointer-events: none;

  & > * {
    pointer-events: auto;
  }
`,HE=d.button`
  width: 7px;
  height: 7px;
  padding: 0;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background: ${({$active:e})=>e?"#fff":"rgba(255,255,255,0.45)"};
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
  -webkit-tap-highlight-color: transparent;

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }
`,UE=d.div`
  padding: 24px 20px;
`,VE=d.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
`,WE=d.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  color: ${({theme:e})=>e.colors.text900};
  flex: 1;
  min-width: 0;
`,KE=d.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.text700};
  margin-bottom: 8px;

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
`,YE=d.div`
  font-size: 1.05rem;
  line-height: 1.6;
  color: ${({theme:e})=>e.colors.text700};
  margin: 0 0 24px;
`,GE=d.section`
  margin: 0 0 28px;
`,ZE=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 12px;
`,qE=d.h3`
  margin: 0;
  font-size: 1.15rem;
  font-weight: 700;
`,QE=d.div`
  min-width: 0;
`,XE=d.p`
  margin: 6px 0 0;
  font-size: 0.88rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text700};
`,JE=d.button`
  width: 100%;
  padding: 14px 18px;
  border: 1px solid ${({theme:e})=>e.colors.border200};
  border-radius: ${({theme:e})=>e.radii.md};
  background: ${({theme:e})=>e.colors.bg100};
  color: ${({theme:e})=>e.colors.text900};
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  text-align: center;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: 2px;
  }
`,eP=d.span`
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary100};
  color: ${({theme:e})=>e.colors.primary700};
`,tP=d.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 4px 0 12px;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    height: 4px;
  }
`,nP=d.button`
  flex-shrink: 0;
  width: 120px;
  padding: 0;
  border: none;
  border-radius: ${({theme:e})=>e.radii.lg};
  overflow: hidden;
  cursor: pointer;
  scroll-snap-align: start;
  background: ${({theme:e})=>e.colors.bg100};
  box-shadow: 0 2px 12px rgba(75, 0, 130, 0.08);

  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    display: block;
  }
`,rP=d.span`
  display: block;
  padding: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  text-align: left;
  line-height: 1.35;
  color: ${({theme:e})=>e.colors.text900};
  background: ${({theme:e})=>e.colors.white};
`,iP=d.div``,N2=d.div`
  border-bottom: 1px solid ${({theme:e})=>e.colors.border200};

  &:last-child {
    border-bottom: none;
  }
`,O2=d.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({theme:e,$open:t})=>t?e.colors.primary600:e.colors.text900};
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;

  &:hover {
    color: ${({theme:e})=>e.colors.primary600};
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${({theme:e})=>e.colors.text700};
    transform: ${({$open:e})=>e?"rotate(90deg)":"none"};
    transition: transform 0.2s ease;
  }
`,D2=d.div`
  display: grid;
  grid-template-rows: ${({$open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.3s ease;
  overflow: hidden;
`,B2=d.div`
  overflow: hidden;
`,F2=d.div`
  padding: 0 0 16px;
  font-size: 1rem;
  line-height: 1.6;
  color: ${({theme:e})=>e.colors.text700};

  p {
    margin: 0 0 0.75em;
    &:last-child {
      margin-bottom: 0;
    }
  }
  ul, ol {
    margin: 0 0 0.75em;
    padding-left: 1.25em;
  }
  li {
    margin-bottom: 0.25em;
  }
  strong {
    font-weight: 600;
  }
  h1, h2, h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 1em 0 0.5em;
  }
  h1:first-child, h2:first-child, h3:first-child {
    margin-top: 0;
  }
`,oP=d.section`
  margin-top: 28px;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 16px;
    font-weight: 600;
  }
`,sP=d.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`,lP=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.text700};

  svg {
    width: 28px;
    height: 28px;
    color: ${({theme:e})=>e.colors.primary600};
  }
`,aP=d.section`
  margin-top: 32px;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 12px;
  }
`,cP=d.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  flex-wrap: wrap;
`,uP=d.button`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.text700};
  background: rgba(0, 0, 0, 0.04);
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  text-align: left;
  transition: color 0.2s, background 0.2s;

  &:hover {
    color: ${({theme:e})=>e.colors.primary600};
    background: rgba(0, 0, 0, 0.06);
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: 2px;
    border-radius: 4px;
  }

  svg {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    opacity: 0.6;
  }

  &:hover svg {
    opacity: 1;
  }
`,dP=d.span`
  flex: 1;
  min-width: 0;
`,pP=d.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  background: ${({theme:e})=>e.colors.primary600};
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s ease, transform 0.1s ease;

  &:hover {
    background: ${({theme:e})=>e.colors.primary700};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: 2px;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`,fP=d.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  pointer-events: none;
`,hP=d.div`
  padding: 16px 24px;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  border-radius: ${({theme:e})=>e.radii.lg};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  animation: fadeInOut 2s ease forwards;

  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
    15% {
      opacity: 1;
      transform: scale(1);
    }
    85% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: scale(0.95);
    }
  }
`,gP=d.div`
  width: 100%;
  min-height: 240px;
  height: 240px;
  border-radius: ${({theme:e})=>e.radii.lg};
  background: ${({theme:e})=>e.colors.bg100};
  overflow: hidden;
  position: relative;
`,H2=d.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  text-align: center;
  background: linear-gradient(180deg, ${({theme:e})=>e.colors.primary50} 0%, ${({theme:e})=>e.colors.warmCream} 100%);
`,mP=d.div`
  font-size: clamp(4rem, 15vw, 8rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.02em;
  background: linear-gradient(180deg, ${({theme:e})=>e.colors.primary300} 0%, ${({theme:e})=>e.colors.primary500} 40%, ${({theme:e})=>e.colors.primary600} 70%, ${({theme:e})=>e.colors.primary800} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 2px 2px rgba(75, 0, 130, 0.25))
          drop-shadow(0 4px 4px rgba(75, 0, 130, 0.15))
          drop-shadow(0 8px 16px rgba(0, 0, 0, 0.1));
  transform: perspective(200px) rotateX(5deg);
  margin-bottom: 12px;
`,U2=d.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.primary400};
  margin: 0 0 24px;
  line-height: 1.6;
`,xP=d.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 24px;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background: ${({theme:e})=>e.colors.primary600};
  border: none;
  border-radius: ${({theme:e})=>e.radii.pill};
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease;

  &:hover {
    background: ${({theme:e})=>e.colors.primary700};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: 2px;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,LP={wifi:"Wi-Fi",parking:"Parking",tea:"Tea"},yP=()=>{var _,z;const e=yt(),{placeId:t}=js(),[n,r]=y.useState(),[i,s]=y.useState(!0),[l,a]=y.useState(null);y.useEffect(()=>{if(!t){r(void 0),s(!1),a(null);return}let A=!1;return s(!0),a(null),O3(t).then(O=>{A||(O?(r(O),a(null)):(r(void 0),a("not_found")),s(!1))}).catch(()=>{A||(r(void 0),a("network"),s(!1))}),()=>{A=!0}},[t]),n&&Wn(n.regionId);const c=y.useRef(null),u=(n==null?void 0:n.facilities)??[],p=(_=n==null?void 0:n.detailSections)==null?void 0:_.find(A=>A.title.toLowerCase().includes("유의사항")),[f,h]=y.useState(null),[g,w]=y.useState(!1),[v,C]=y.useState(!1),[x,m]=y.useState(),[L,b]=y.useState(null),$=y.useMemo(()=>n?n0(n):[],[n]),k=!!n&&$.length>1,S=t0($,k),M=()=>{n&&navigator.clipboard.writeText(n.address).then(()=>{w(!0),setTimeout(()=>w(!1),2e3)})};if(y.useEffect(()=>{if(!n)return;const A="233s0l2jzo",O=()=>{var ve,fe;const G=document.getElementById("naver-map");if(!G||!((fe=(ve=window.naver)==null?void 0:ve.maps)!=null&&fe.Service))return!1;const te=window.naver,J=new te.maps.LatLng(37.5665,126.978),Y=new te.maps.Map(G,{center:J,zoom:17,scrollWheel:!0,mapTypeControl:!0}),ee=(me,ke)=>{const Ie=new te.maps.LatLng(me,ke);Y.setCenter(Ie),new te.maps.Marker({position:Ie,map:Y})},ae=(me,ke)=>Number.isFinite(me)&&Number.isFinite(ke);return ae(n.lat??NaN,n.lng??NaN)?(ee(n.lat,n.lng),!0):(te.maps.Service.geocode({query:n.address},(me,ke)=>{var je,Se,wt,sn;if(me==="ERROR"){console.warn(`[지도] 주소 변환 실패 - "${n.name}" (${n.address}): status=${me}`),ee(37.5665,126.978);return}const Ie=ke,De=Ve=>typeof Ve=="number"?Ve:parseFloat(String(Ve??""));let Ze=null,Te=null;const Wt=((je=Ie==null?void 0:Ie.result)==null?void 0:je.items)??[],X=Wt.find(Ve=>Ve.isRoadAddress)??Wt[0];if(X!=null&&X.point&&(Ze=De(X.point.y),Te=De(X.point.x)),(Ze==null||Te==null||!ae(Ze,Te))&&Wt.length>0){const Ve=Wt[0];Ve!=null&&Ve.point&&(Ze=De(Ve.point.y),Te=De(Ve.point.x))}if(Ze==null||Te==null||!ae(Ze,Te)){const Ve=((wt=(Se=Ie==null?void 0:Ie.v2)==null?void 0:Se.addresses)==null?void 0:wt[0])??((sn=Ie==null?void 0:Ie.addresses)==null?void 0:sn[0]);Ve&&(Ze=De(Ve.y),Te=De(Ve.x))}Ze!=null&&Te!=null&&ae(Ze,Te)?ee(Ze,Te):ee(37.5665,126.978)}),!0)},j=()=>{var G;return(G=window.naver)!=null&&G.maps&&window.naver.maps.Service?(O(),!0):!1};if(j())return;if(document.querySelector('script[src*="oapi.map.naver.com"]')){const G=setInterval(()=>{j()&&clearInterval(G)},100),te=setTimeout(()=>clearInterval(G),1e4);return()=>{clearInterval(G),clearTimeout(te)}}const Q="onNaverMapsReady";window[Q]=()=>{if(j())return;const G=setInterval(()=>{j()&&clearInterval(G)},100)};const P=document.createElement("script");return P.type="text/javascript",P.src=`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${A}&submodules=geocoder&callback=${Q}`,P.async=!0,document.head.appendChild(P),()=>{delete window[Q]}},[n]),y.useEffect(()=>{n&&S.syncToLoopIndex(1)},[n==null?void 0:n.id,S.syncToLoopIndex]),i)return o.jsxs(vu,{children:[o.jsxs(wu,{children:[o.jsx(bu,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(ku,{children:"상세 페이지"})]}),o.jsx(H2,{children:o.jsx(U2,{children:"불러오는 중…"})})]});if(!n)return o.jsxs(vu,{children:[o.jsxs(wu,{children:[o.jsx(bu,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(ku,{children:"상세 페이지"})]}),o.jsxs(H2,{children:[o.jsx(mP,{children:"404"}),o.jsxs(U2,{children:[l==="not_found"?"해당 명상센터를 찾지 못했어요.":"장소 정보를 불러올 수 없어요.",o.jsx("br",{}),"메인에서 다시 찾아 주세요."]}),o.jsxs(xP,{type:"button",onClick:()=>e("/meditation"),children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),o.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),"메인으로 돌아가기"]})]})]});const R=n.programs??[],I=R.filter(A=>A.status==="ongoing"),T=R.filter(A=>A.status==="past"),E=R.length>0,N=n.venueKind==="명상센터"?"명상센터":"명상지",D=[];I.length>0&&D.push(`진행 중 ${I.length}`),T.length>0&&D.push(`지난 ${T.length}`);const H=D.join(" · ");return o.jsxs(vu,{children:[g&&o.jsx(fP,{children:o.jsx(hP,{children:"주소를 복사했습니다"})}),o.jsxs(wu,{children:[o.jsx(bu,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(ku,{children:"상세 페이지"})]}),$.length<=1?o.jsx(AE,{type:"button",onClick:()=>b({urls:$.length===1?$:[n.thumbnailUrl],initialLoopIndex:1}),"aria-label":`${n.name} 대표 사진 크게 보기`,children:o.jsx("img",{src:$[0]??n.thumbnailUrl,alt:`${n.name} 대표 이미지`})}):o.jsxs(_E,{children:[o.jsx(NE,{type:"button",onClick:()=>b({urls:$,initialLoopIndex:S.loopIndex}),"aria-label":`${n.name} 사진 크게 보기`,children:o.jsx(OE,{ref:S.viewportRef,onTouchStart:S.onTouchStart,onTouchMove:S.onTouchMove,onTouchEnd:S.onTouchEnd,onTouchCancel:S.onTouchCancel,children:S.usePx?o.jsx(DE,{ref:S.trackRef,onTransitionEnd:S.onTransitionEnd,style:{width:S.trackWidthPx,transform:`translate3d(${S.translatePx}px, 0, 0)`,transition:S.dragPx!==0||S.transOff?"none":"transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)"},children:S.loopUrls.map((A,O)=>o.jsx(BE,{style:{width:S.vpWidth,flexShrink:0},children:o.jsx(_2,{src:A,alt:"",draggable:!1})},`detail-hero-${O}`))}):o.jsx(_2,{src:$[0],alt:"",draggable:!1})})}),o.jsx(FE,{children:$.map((A,O)=>o.jsx(HE,{type:"button","aria-label":`${O+1}번째 사진으로 이동`,"aria-current":O===S.activeDot?"true":void 0,$active:O===S.activeDot,onClick:()=>S.setLoopIndex(O+1)},O))})]}),o.jsxs(UE,{children:[o.jsxs(VE,{children:[o.jsx(WE,{children:n.name}),o.jsx(Xa,{placeId:n.id})]}),o.jsxs(KE,{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),n.address]}),o.jsx(YE,{children:o.jsx(io,{markdown:n.shortDescription})}),E&&o.jsxs(GE,{children:[o.jsxs(ZE,{children:[o.jsxs(QE,{children:[o.jsx(qE,{children:"프로그램 · 후기"}),H?o.jsx(XE,{children:H}):null]}),o.jsx(eP,{children:N})]}),I.length>0?o.jsx(tP,{"aria-label":"진행 중인 프로그램 사진",children:I.map(A=>o.jsxs(nP,{type:"button",onClick:()=>{m(A.id),C(!0)},children:[o.jsx("img",{src:A.imageUrl,alt:"",draggable:!1}),o.jsx(rP,{children:A.title})]},A.id))}):o.jsxs(JE,{type:"button",onClick:()=>{m(void 0),C(!0)},children:["지난 프로그램·후기 보기 (",T.length,")"]})]}),o.jsxs(iP,{children:[o.jsxs(N2,{children:[o.jsxs(O2,{type:"button",$open:f==="fee",onClick:()=>h(f==="fee"?null:"fee"),children:[o.jsx("span",{children:"입장료·이용 요금"}),o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M9 18l6-6-6-6"})})]}),o.jsx(D2,{$open:f==="fee",children:o.jsx(B2,{children:o.jsx(F2,{children:(z=n.admissionFee)!=null&&z.trim()?o.jsx(Gi,{children:n.admissionFee}):"현장·예약 시 안내"})})})]}),o.jsxs(N2,{children:[o.jsxs(O2,{type:"button",$open:f==="notice",onClick:()=>h(f==="notice"?null:"notice"),children:[o.jsx("span",{children:"유의사항"}),o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M9 18l6-6-6-6"})})]}),o.jsx(D2,{$open:f==="notice",children:o.jsx(B2,{children:o.jsx(F2,{children:p!=null&&p.body?o.jsx(Gi,{children:p.body}):"등록된 유의사항이 없습니다."})})})]})]}),u.length>0&&o.jsxs(oP,{children:[o.jsx("h3",{children:"시설 정보"}),o.jsx(sP,{children:u.map(A=>o.jsxs(lP,{children:[A==="wifi"&&o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M5 12.55a11 11 0 0 1 14.08 0"}),o.jsx("path",{d:"M1.42 9a16 16 0 0 1 21.16 0"}),o.jsx("path",{d:"M8.53 16.11a6 6 0 0 1 6.95 0"}),o.jsx("line",{x1:"12",y1:"20",x2:"12.01",y2:"20"})]}),A==="parking"&&o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),o.jsx("path",{d:"M3 9h18M9 21V9"})]}),A==="tea"&&o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M18 8h1a4 4 0 0 1 0 8h-1"}),o.jsx("path",{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"}),o.jsx("line",{x1:"6",y1:"1",x2:"6",y2:"4"}),o.jsx("line",{x1:"10",y1:"1",x2:"10",y2:"4"}),o.jsx("line",{x1:"14",y1:"1",x2:"14",y2:"4"})]}),!["wifi","parking","tea"].includes(A)&&o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("circle",{cx:"12",cy:"12",r:"10"}),o.jsx("path",{d:"M12 8v4M12 16h.01"})]}),o.jsx("span",{children:LP[A]??A})]},A))})]}),o.jsxs(aP,{children:[o.jsx("h3",{children:"위치"}),o.jsxs(cP,{children:[o.jsxs(uP,{type:"button",onClick:M,title:"클릭하여 주소 복사",children:[o.jsx(dP,{children:n.address}),o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),o.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})]}),o.jsxs(pP,{href:`https://map.naver.com/v5/search/${encodeURIComponent(n.address)}`,target:"_blank",rel:"noreferrer noopener",children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"안내"]})]}),o.jsx(gP,{id:"naver-map",ref:c})]})]}),E&&o.jsx(ME,{place:n,open:v,onClose:()=>C(!1),initialProgramId:x}),L&&o.jsx(Yx,{urls:L.urls,initialLoopIndex:L.initialLoopIndex,onClose:()=>b(null)})]})},vP=d.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 24px 20px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};

  @media (max-width: 960px) {
    padding: 20px 14px calc(48px + env(safe-area-inset-bottom, 0px));
  }
`,wP=d.h1`
  font-size: 2.4rem;
  margin-bottom: 12px;
`,bP=d.p`
  font-size: 1.2rem;
  color: ${({theme:e})=>e.colors.text700};
`,kP=d.form`
  margin: 24px 0;
  border: 1px solid ${({theme:e})=>e.colors.primary300};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 16px;
  display: grid;
  gap: 8px;
`,jP=d.label`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text700};
`,SP=d.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
`,CP=d.input`
  border: 1px solid ${({theme:e})=>e.colors.border200};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: 10px 12px;
  font-size: 1.1rem;
`,$P=d.button`
  border: none;
  background: ${({theme:e})=>e.colors.primary600};
  color: #fff;
  border-radius: ${({theme:e})=>e.radii.md};
  padding: 0 18px;
  font-size: 1.1rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
`,EP=d.div`
  display: grid;
  gap: 12px;
`,PP=d.button`
  width: 100%;
  text-align: left;
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 16px;
  display: grid;
  gap: 10px;
  cursor: pointer;
  box-shadow: ${({theme:e,$active:t})=>t?e.shadow.soft:"none"};
`,IP=d.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: center;
`,TP=d.span`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.primary700};
  font-weight: 600;
`,RP=d.span`
  font-size: 1.2rem;
  font-weight: 600;
`,MP=d.span`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.text700};
`,zP=d.div`
  border-top: 1px solid ${({theme:e})=>e.colors.border200};
  padding-top: 12px;
  display: grid;
  gap: 8px;
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.6;
`,AP=d.ul`
  padding-left: 18px;
  display: grid;
  gap: 6px;
`,_P=d.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 8px;
`,NP=d.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border: 1px solid ${({theme:e})=>e.colors.primary300};
  background: ${({theme:e})=>e.colors.primary50};
  color: ${({theme:e})=>e.colors.primary700};
  border-radius: ${({theme:e})=>e.radii.md};
  font-size: 0.95rem;
  cursor: pointer;

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }
`,OP=d.div`
  display: flex;
  gap: 4px;

  button {
    padding: 6px 10px;
    border: 1px solid ${({theme:e})=>e.colors.border200};
    background: ${({theme:e})=>e.colors.white};
    border-radius: 6px;
    font-size: 0.85rem;
    cursor: pointer;

    &.active {
      background: ${({theme:e})=>e.colors.primary100};
      border-color: ${({theme:e})=>e.colors.primary300};
      color: ${({theme:e})=>e.colors.primary700};
    }
  }
`,V2=d.p`
  margin: 24px 0;
  color: ${({theme:e})=>e.colors.text700};
  text-align: center;
`,DP=d.div`
  margin-top: 20px;
  display: flex;
  gap: 8px;
  justify-content: center;
`,BP=d.button`
  border: 1px solid ${({theme:e})=>e.colors.border200};
  background: ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.white};
  color: ${({$active:e})=>e?"#fff":"inherit"};
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
`,FP=()=>{const[e,t]=y.useState([]),[n,r]=y.useState(""),[i,s]=y.useState(null),[l,a]=y.useState(1),[c,u]=y.useState(null),[p,f]=y.useState("ko-KR"),[h,g]=y.useState(!1),[w,v]=y.useState(!0),C=6;y.useEffect(()=>{const R=$e();if(!R){t([]),v(!1);return}v(!0),fetch(`${R}/notices`).then(I=>I.ok?I.json():Promise.reject()).then(I=>{if(!Array.isArray(I)){t([]);return}t(I),s(null)}).catch(()=>{t([])}).finally(()=>v(!1))},[]);const x=y.useCallback((R,I)=>{if(!("speechSynthesis"in window)){alert("이 브라우저는 음성 읽기를 지원하지 않습니다.");return}window.speechSynthesis.cancel();const T=window.speechSynthesis.getVoices(),E=p.split("-")[0],N=T.filter(A=>A.lang.startsWith(E)),D=N.filter(A=>A.localService),H=N.filter(A=>!A.localService),_=h&&H.length?H[0]:D[0]??N[0],z=new SpeechSynthesisUtterance(R);z.lang=p,z.rate=.95,_&&(z.voice=_),z.onstart=()=>u(I),z.onend=()=>u(null),z.onerror=A=>{u(null),console.warn("TTS error:",A)},window.speechSynthesis.speak(z)},[p,h]);y.useEffect(()=>{if(!("speechSynthesis"in window))return;const R=()=>window.speechSynthesis.getVoices();return window.speechSynthesis.onvoiceschanged=R,R(),()=>{window.speechSynthesis.onvoiceschanged=null}},[]);const m=y.useMemo(()=>{const R=n.trim().toLowerCase();return R?e.filter(I=>{const T=I.details?[...I.details.paragraphs,...I.details.bullets??[]]:[];return[I.title,I.summary,...T].join(" ").toLowerCase().includes(R)}):e},[n,e]),L=Math.max(1,Math.ceil(m.length/C)),b=Math.min(l,L),$=m.slice((b-1)*C,b*C),k=y.useCallback(async R=>{if(R.details!==void 0||R.detailLoading)return;const I=$e();if(I){t(T=>T.map(E=>E.id===R.id?{...E,detailLoading:!0}:E));try{const T=await fetch(`${I}/notices/${encodeURIComponent(R.id)}`);if(!T.ok)throw new Error("detail");const E=await T.json();t(N=>N.map(D=>D.id===R.id?{...D,details:E.details,detailLoading:!1}:D))}catch{t(T=>T.map(E=>E.id===R.id?{...E,detailLoading:!1}:E))}}},[]),S=y.useCallback(R=>{if(i===R.id){s(null);return}s(R.id),k(R)},[i,k]),M=R=>{R.preventDefault(),a(1)};return o.jsxs(vP,{children:[o.jsx(wP,{children:"공지사항"}),o.jsx(bP,{children:"전국 힐링명상지도에서 전하는 소식을 확인하세요."}),w&&o.jsx(V2,{children:"불러오는 중…"}),!w&&e.length===0&&o.jsx(V2,{children:"등록된 공지가 없습니다."}),!w&&e.length>0&&o.jsxs(o.Fragment,{children:[o.jsxs(kP,{onSubmit:M,children:[o.jsx(jP,{htmlFor:"notice-search",children:"공지사항 검색"}),o.jsxs(SP,{children:[o.jsx(CP,{id:"notice-search",type:"text",placeholder:"검색어를 입력해주세요.",value:n,onChange:R=>r(R.target.value)}),o.jsx($P,{type:"submit",children:"검색"})]})]}),o.jsx(EP,{children:$.map(R=>{const I=i===R.id;return o.jsxs(PP,{type:"button",$active:I,onClick:()=>S(R),children:[o.jsxs(IP,{children:[o.jsx(TP,{children:R.category}),o.jsx(RP,{children:R.title}),o.jsx(MP,{children:R.date})]}),I&&o.jsxs(zP,{children:[o.jsxs(_P,{children:[o.jsx(NP,{type:"button",onClick:T=>{if(T.stopPropagation(),c===R.id){window.speechSynthesis.cancel();return}const E=R.details,N=[R.title,R.summary,...(E==null?void 0:E.paragraphs)??[],...(E==null?void 0:E.bullets)??[],E==null?void 0:E.footer].filter(Boolean).join(". ");x(N,R.id)},children:c===R.id?o.jsx(o.Fragment,{children:"멈추기"}):o.jsxs(o.Fragment,{children:[o.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),o.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"})]}),"음성으로 들으기"]})}),o.jsxs(OP,{children:[o.jsx("button",{type:"button",className:p==="ko-KR"?"active":"",onClick:T=>{T.stopPropagation(),f("ko-KR")},children:"한국어"}),o.jsx("button",{type:"button",className:p==="en-US"?"active":"",onClick:T=>{T.stopPropagation(),f("en-US")},children:"English"}),o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,fontSize:"0.85rem",cursor:"pointer"},children:[o.jsx("input",{type:"checkbox",checked:h,onChange:T=>{T.stopPropagation(),g(T.target.checked)}}),"고품질(온라인)"]})]})]}),o.jsx("p",{children:R.summary}),R.detailLoading&&o.jsx("p",{children:"본문을 불러오는 중…"}),!R.detailLoading&&R.details&&o.jsxs(o.Fragment,{children:[R.details.paragraphs.map(T=>o.jsx("p",{children:T},T)),R.details.bullets&&R.details.bullets.length>0&&o.jsx(AP,{children:R.details.bullets.map(T=>o.jsx("li",{children:T},T))}),R.details.footer&&o.jsx("p",{children:R.details.footer})]})]})]},R.id)})}),o.jsx(DP,{children:Array.from({length:L},(R,I)=>o.jsx(BP,{type:"button",$active:b===I+1,onClick:()=>a(I+1),children:I+1},`page-${I+1}`))})]})]})},HP=d.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 24px 20px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};

  @media (max-width: 960px) {
    padding: 20px 14px calc(48px + env(safe-area-inset-bottom, 0px));
  }
`,UP=d.h1`
  font-size: 2.4rem;
  margin-bottom: 12px;
`,VP=d.p`
  font-size: 1.2rem;
  color: ${({theme:e})=>e.colors.text700};
`,WP=d.div`
  margin-top: 24px;
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 20px;
  box-shadow: ${({theme:e})=>e.shadow.soft};
`,KP=d.form`
  display: grid;
  gap: 16px;
  margin-top: 20px;
`,ju=d.label`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text700};
`,W2=d.input`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${({theme:e})=>e.colors.border200};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: 10px 12px;
  font-size: 1rem;
`,YP=d.textarea`
  width: 100%;
  min-height: 160px;
  box-sizing: border-box;
  border: 1px solid ${({theme:e})=>e.colors.border200};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: 10px 12px;
  font-size: 1rem;
  resize: vertical;
`,GP=d.button`
  border: none;
  background: ${({theme:e})=>e.colors.primary600};
  color: #fff;
  border-radius: ${({theme:e})=>e.radii.md};
  padding: 12px 20px;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`,K2=d.p`
  margin: 0;
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.text700};
`,ZP=d.p`
  margin: 12px 0 0;
  font-size: 0.95rem;
  color: ${({theme:e,$variant:t})=>t==="error"?"#b91c1c":e.colors.primary700};
`,qP=()=>{const e=Xt(h=>h.email),[t,n]=y.useState(e??""),[r,i]=y.useState(""),[s,l]=y.useState(""),[a,c]=y.useState(!1),[u,p]=y.useState(null),f=async h=>{if(h.preventDefault(),p(null),!$e()){p({text:"지금은 전송할 수 없어요. 잠시 후 다시 시도해 주세요.",ok:!1});return}if(!t.trim()||!r.trim()||!s.trim()){p({text:"이메일, 제목, 내용을 모두 입력해 주세요.",ok:!1});return}c(!0);try{if(!(await he("/inquiries",{method:"POST",body:JSON.stringify({email:t.trim(),subject:r.trim(),body:s.trim()})})).ok){p({text:"전송에 실패했습니다.",ok:!1});return}i(""),l(""),p({text:"문의가 접수되었습니다. 빠르게 답변드릴게요.",ok:!0})}catch{p({text:"전송에 실패했습니다. 잠시 후 다시 시도해 주세요.",ok:!1})}finally{c(!1)}};return o.jsxs(HP,{children:[o.jsx(UP,{children:"1:1 문의"}),o.jsx(VP,{children:"궁금한 점을 남겨주시면 빠르게 답변드릴게요."}),o.jsxs(WP,{children:[o.jsx(K2,{children:"이메일: support@healingmeditation.kr"}),o.jsx(K2,{children:"운영시간: 평일 09:00 - 18:00"}),o.jsxs(KP,{onSubmit:h=>void f(h),children:[o.jsxs("div",{children:[o.jsx(ju,{htmlFor:"inquiry-email",children:"회신 받을 이메일"}),o.jsx(W2,{id:"inquiry-email",type:"email",value:t,onChange:h=>n(h.target.value),autoComplete:"email",placeholder:"you@example.com"})]}),o.jsxs("div",{children:[o.jsx(ju,{htmlFor:"inquiry-subject",children:"제목"}),o.jsx(W2,{id:"inquiry-subject",type:"text",value:r,onChange:h=>i(h.target.value),placeholder:"문의 제목"})]}),o.jsxs("div",{children:[o.jsx(ju,{htmlFor:"inquiry-body",children:"내용"}),o.jsx(YP,{id:"inquiry-body",value:s,onChange:h=>l(h.target.value),placeholder:"문의 내용을 자유롭게 적어 주세요."})]}),o.jsx(GP,{type:"submit",disabled:a,children:a?"전송 중…":"문의 보내기"}),u&&o.jsx(ZP,{$variant:u.ok?"ok":"error",role:"status",children:u.text})]})]})]})},K={h1:_e`
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 1.22;
    letter-spacing: -0.02em;
  `,h2:_e`
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 1.26;
    letter-spacing: -0.02em;
  `,h3:_e`
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.02em;
  `,title:_e`
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: -0.02em;
  `,body1:_e`
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.45;
  `,body2:_e`
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.45;
  `,caption:_e`
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.4;
  `,buttonLg:_e`
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.2;
  `,buttonMd:_e`
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.2;
  `},Y2=[{label:"전체",value:"all"},{label:"템플스테이",value:"템플스테이"},{label:"명상센터",value:"명상센터"},{label:"프리랜서",value:"프리랜서(공간없음)"},{label:"힐링명상",value:"힐링명상"},{label:"기타",value:"기타"}],QP=d.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 20px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};

  @media (max-width: 960px) {
    padding: 20px 14px calc(48px + env(safe-area-inset-bottom, 0px));
  }
`,XP=d.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 24px;
  color: ${({theme:e})=>e.colors.text900};
`,JP=d.div`
  display: flex;
  gap: 8px;
  margin: -8px 0 22px;
  padding: 4px 0;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`,eI=d.button`
  flex: 0 0 auto;
  padding: 9px 12px;
  border: 1px solid
    ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.primary200};
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.white};
  color: ${({theme:e,$active:t})=>t?e.colors.white:e.colors.text700};
  ${K.caption};
  cursor: pointer;
`,tI=d.span`
  margin-left: 4px;
  opacity: 0.72;
`,nI=d.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,rI=d.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text700};
  padding: 48px 24px;
  text-align: center;
  margin: 0;
`,iI=()=>{const[e,t]=y.useState("all"),{favorites:n}=Or(),r=en(a=>a.places),i=y.useMemo(()=>n.map(a=>r.find(c=>c.id===a)).filter(a=>a!=null),[n,r]),s=y.useMemo(()=>va(i,{category:e,keyword:"",tags:[]}),[e,i]),l=y.useMemo(()=>new Map(Y2.map(({value:a})=>[a,a==="all"?i.length:va(i,{category:a,keyword:"",tags:[]}).length])),[i]);return o.jsxs(QP,{children:[o.jsx(XP,{children:"찜 목록"}),o.jsx(JP,{"aria-label":"찜 목록 카테고리",children:Y2.map(a=>o.jsxs(eI,{type:"button",$active:e===a.value,onClick:()=>t(a.value),children:[a.label,o.jsx(tI,{children:l.get(a.value)??0})]},a.value))}),s.length===0?o.jsx(rI,{children:i.length===0?"찜한 명상아이템이 없어요. 리스트에서 하트를 눌러 찜해보세요.":"이 카테고리에 찜한 장소가 아직 없어요."}):o.jsx(nI,{children:s.map(a=>o.jsx("li",{children:o.jsx(Vo,{place:a})},a.id))})]})},G2="/assets/kakao-BwFsiG1v.png",Z2="/assets/naver-8e52KbwB.png",q2="/assets/google-3Iqg8dcD.png",oI="/assets/left-arrow-D7869Zjw.png";async function r0(e){var t;if(!e.ok){let n="요청을 처리하지 못했어요.";try{const r=await e.json();(t=r.message)!=null&&t.trim()&&(n=r.message)}catch{}throw new Error(n)}return await e.json()}async function sI(e){return r0(await he("/me/profile",{method:"PUT",body:JSON.stringify(e)}))}async function lI(){return r0(await he("/me"))}async function aI(){const e=await he("/me/expert-profile");if(e.status===204)return null;if(!e.ok)throw new Error("전문가 정보를 불러오지 못했어요.");const t=await e.json();return t?{name:String(t.name??""),intro:String(t.intro??""),degrees:Array.isArray(t.degrees)?t.degrees.map(String):[],certificates:Array.isArray(t.certificates)?t.certificates.map(String):[],careers:Array.isArray(t.careers)?t.careers.map(String):[],classTypes:Array.isArray(t.classTypes)?t.classTypes.map(String):[],regionIds:Array.isArray(t.regionIds)?t.regionIds.map(String):[],hasCenter:!!t.hasCenter,centerName:String(t.centerSummary??""),centerAddress:String(t.centerAddress??"")}:null}async function cI(e){return r0(await he("/me/expert-profile",{method:"PUT",body:JSON.stringify({...e,businessOpeningDate:e.businessOpeningDate||null})}))}const uI=["힐링명상","템플스테이","행사","마음챙김","숲 명상","아트명상","호흡","숙박 프로그램"],dI=d.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  display: grid;
  place-items: end center;
  background: rgba(29, 16, 38, 0.46);
`,pI=d.section`
  width: min(100%, 620px);
  max-height: 88dvh;
  overflow-y: auto;
  padding: 20px 20px calc(24px + env(safe-area-inset-bottom, 0px));
  border-radius: 26px 26px 0 0;
  background: ${({theme:e})=>e.colors.white};
`,fI=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
`,hI=d.h2`
  margin: 0;
  ${K.title};
`,gI=d.button`
  border: 0;
  background: transparent;
  ${K.body1};
  cursor: pointer;
`,Su=d.div`
  display: block;
  margin-top: 20px;
`,Cu=d.span`
  display: block;
  margin-bottom: 8px;
  ${K.body2};
  font-weight: 700;
`,mI=d.input`
  width: 100%;
  box-sizing: border-box;
  padding: 13px 14px;
  border: 1px solid ${({theme:e})=>e.colors.primary200};
  border-radius: 12px;
  ${K.body2};
`,Q2=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,xI=d.div`
  padding: 12px;
  border-radius: 18px;
  background: ${({theme:e})=>e.colors.primary50};
`,LI=d.p`
  margin: 10px 0;
  color: ${({theme:e})=>e.colors.text700};
  ${K.caption};
`,X2=d.button`
  padding: 8px 11px;
  border: 1px solid
    ${({theme:e,$selected:t})=>t?e.colors.primary600:e.colors.primary200};
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e,$selected:t})=>t?e.colors.primary600:e.colors.white};
  color: ${({theme:e,$selected:t})=>t?e.colors.white:e.colors.text700};
  ${K.caption};
  cursor: pointer;
`,yI=d.button`
  width: 100%;
  margin-top: 28px;
  padding: 15px;
  border: 0;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary600};
  color: white;
  ${K.buttonMd};
  cursor: pointer;
`,vI=d.p`
  margin: 12px 0 0;
  color: #c5221f;
  ${K.caption};
`;function wI({open:e,profile:t,onClose:n,onSaved:r}){const[i,s]=y.useState(""),[l,a]=y.useState([]),[c,u]=y.useState([]),[p,f]=y.useState(!1),[h,g]=y.useState(null);if(y.useEffect(()=>{e&&(s(t.displayName||t.username.split("@")[0]||""),a(t.regionIds??[]),u(t.interests??[]),g(null))},[e,t]),!e)return null;const w=(v,C,x)=>{x(C.includes(v)?C.filter(m=>m!==v):[...C,v])};return o.jsx(dI,{onMouseDown:n,children:o.jsxs(pI,{role:"dialog","aria-modal":"true",onMouseDown:v=>v.stopPropagation(),children:[o.jsxs(fI,{children:[o.jsx(hI,{children:"프로필 수정"}),o.jsx(gI,{type:"button",onClick:n,"aria-label":"닫기",children:"×"})]}),o.jsxs(Su,{children:[o.jsx(Cu,{children:"이름"}),o.jsx(mI,{value:i,maxLength:80,onChange:v=>s(v.target.value),placeholder:"화면에 표시할 이름"})]}),o.jsxs(Su,{children:[o.jsx(Cu,{children:"주 활동 지역"}),o.jsx(xI,{children:o.jsx(Ss,{activeRegionIds:l,maxMapHeight:"min(42dvh, 420px)",onSelectRegion:v=>w(v,l,a)})}),o.jsx(LI,{children:"지도에서 활동 지역을 선택해 주세요. 선택된 지역을 다시 누르면 해제됩니다."}),o.jsx(Q2,{children:Gr.filter(v=>l.includes(v.id)).map(v=>o.jsxs(X2,{type:"button",$selected:!0,onClick:()=>w(v.id,l,a),children:[v.name," ×"]},v.id))})]}),o.jsxs(Su,{children:[o.jsx(Cu,{children:"관심사"}),o.jsx(Q2,{children:uI.map(v=>o.jsx(X2,{type:"button",$selected:c.includes(v),onClick:()=>w(v,c,u),children:v},v))})]}),h&&o.jsx(vI,{children:h}),o.jsx(yI,{type:"button",disabled:p||!i.trim(),onClick:()=>{f(!0),g(null),sI({displayName:i.trim(),regionIds:l,interests:c}).then(v=>{r(v),n()}).catch(v=>g(v instanceof Error?v.message:"저장하지 못했어요.")).finally(()=>f(!1))},children:p?"저장 중…":"저장하기"})]})})}const bI=Oe`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,i0=Oe`
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,kI=Oe`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,jI=Oe`
  from {
    opacity: 0;
    transform: scale(0.96) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`,Gx=Oe`
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,SI=Oe`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,$u=d.div`
  margin-top: 0;
  animation: ${SI} 0.42s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,CI=d.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,$I=d.p`
  margin: 0;
  padding: 0 4px;
  text-align: left;
  ${K.caption};
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.45;
`,EI=d.section`
  /* Layout Content 하단: 56px(바) + 24px + safe-area — 한 화면에 고정, body 스크롤 방지 */
  --page-outset-bottom: calc(80px + env(safe-area-inset-bottom, 0px));
  box-sizing: border-box;
  position: relative;
  height: ${({$dashboard:e})=>e?"auto":"calc(100vh - var(--page-outset-bottom))"};
  max-height: ${({$dashboard:e})=>e?"none":"calc(100vh - var(--page-outset-bottom))"};
  min-height: ${({$dashboard:e})=>e?"calc(100dvh - var(--page-outset-bottom))":"0"};
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: ${({$dashboard:e})=>e?"visible":"hidden"};
  background: ${({theme:e})=>e.colors.warmCream};
  color: ${({theme:e})=>e.colors.text900};
  padding-top: ${({$dashboard:e})=>e?"calc(20px + env(safe-area-inset-top, 0px))":"calc(12px + env(safe-area-inset-top, 0px))"};
`,PI=d.div`
  align-self: stretch;
  flex-shrink: 0;
  width: 100%;
  height: 4px;
  margin: 0 0 12px;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary100};
  overflow: hidden;
`,II=d.div`
  height: 100%;
  width: ${({$pct:e})=>`${Math.min(100,Math.max(0,e))}%`};
  border-radius: inherit;
  background: linear-gradient(
    90deg,
    ${({theme:e})=>e.colors.primary600} 0%,
    ${({theme:e})=>e.colors.primary400} 100%
  );
  transition: width 0.38s cubic-bezier(0.22, 1, 0.36, 1);

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,TI=d.div`
  position: relative;
  width: min(100%, 420px);
  padding: 6px 18px 16px;
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,oi=d.div`
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${bI} 0.35s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Lo=d.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
`,yo=d.div`
  flex-shrink: 0;
  margin-top: auto;
  padding-top: 12px;
  width: 100%;
`,RI=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
  gap: 12px;
  flex-shrink: 0;
`,MI=d.button`
  border: none;
  background: transparent;
  color: ${({theme:e})=>e.colors.text900};
  ${K.body2};
  padding: 10px 6px;
  margin: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  transition: color 0.2s ease, opacity 0.2s ease;

  &:hover {
    color: ${({theme:e})=>e.colors.primary600};
  }
`,zI=d.img`
  width: 18px;
  height: 18px;
  object-fit: contain;
`,AI=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  flex-shrink: 0;
`,_I=d.img`
  width: 74px;
  height: 74px;
  object-fit: contain;
`,J2=d.p`
  margin: 10px 0 0;
  padding: 0 12px;
  text-align: center;
  ${K.body1};
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text900};
  line-height: 1.45;
  max-width: 320px;
`,NI=d.h1`
  margin: 8px 0 0;
  ${K.title};
  color: ${({theme:e})=>e.colors.primary300};
`,Eu=d.h2`
  margin: 14px 0 0;
  text-align: center;
  ${K.h3};
`,e4=d.p`
  margin: 8px 0 0;
  text-align: center;
  ${K.body2};
  color: ${({theme:e})=>e.colors.text700};
`,OI=Oe`
  0% {
    opacity: 0;
    transform: translate(-50%, -14px);
  }
  14% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
  82% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -14px);
  }
`,Pu=d.div`
  position: fixed;
  top: calc(env(safe-area-inset-top, 0px) + 10px);
  left: 50%;
  z-index: 130;
  pointer-events: none;
  animation: ${OI} 2.2s ease both;
`,Iu=d.div`
  padding: 12px 18px;
  border-radius: ${({theme:e})=>e.radii.pill};
  border: 1px solid
    ${({$variant:e})=>e==="error"?"#f0b8b8":"#96d6a3"};
  background: ${({$variant:e})=>e==="error"?"#fce8e6":"#e8f8ec"};
  color: ${({$variant:e})=>e==="error"?"#c5221f":"#1f6a2b"};
  ${K.body2};
`,t4=d.div`
  margin-top: clamp(24px, 6vh, 48px);
  display: flex;
  flex-direction: column;
  gap: 14px;
`,DI=d.p`
  margin: 8px 0 0;
  text-align: center;
  ${K.body2};
  color: ${({theme:e})=>e.colors.text700};
`,Pr=d.p`
  margin: 6px 4px 0;
  ${K.caption};
  color: #d93025;
  animation: ${i0} 0.24s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,BI=d.p`
  margin: 6px 4px 0;
  ${K.caption};
  color: #188038;
  animation: ${i0} 0.24s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,FI=d.p`
  margin: 6px 4px 0;
  ${K.caption};
  color: ${({theme:e})=>e.colors.text700};
`,n4=d.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  animation: ${Gx} 0.42s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: ${({$index:e})=>e*.07}s;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,HI=d(DI)`
  margin-top: 0;
  text-align: left;
  padding: 0 2px;
  animation: ${Gx} 0.42s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,UI=d.div`
  margin-top: 4px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,VI=d.button`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid ${({theme:e})=>e.colors.primary200};
  background: ${({theme:e})=>e.colors.primary50};
  padding: 0;
  margin: 0;
  cursor: pointer;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  transition:
    transform 0.18s ease,
    border-color 0.18s ease,
    box-shadow 0.18s ease;

  &:hover:not(:disabled) {
    transform: scale(1.03);
    border-color: ${({theme:e})=>e.colors.primary300};
    box-shadow: 0 4px 14px rgba(75, 0, 130, 0.08);
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.55;
    cursor: wait;
    transform: none;
    box-shadow: none;
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary400};
    outline-offset: 3px;
  }
`,WI=d.span`
  ${K.h2};
  font-weight: 300;
  line-height: 1;
  color: ${({theme:e})=>e.colors.text700};
  opacity: 0.55;
  user-select: none;
`,KI=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,YI=d.input`
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
`,r4=d(Pr)`
  animation: ${i0} 0.3s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Tu=d.div`
  position: relative;
  width: 100%;
`,Ru=d.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  color: ${({theme:e})=>e.colors.text700};
  ${K.caption};
  font-weight: 600;
  cursor: pointer;
  padding: 8px 10px;
  border-radius: ${({theme:e})=>e.radii.pill};
  z-index: 1;
  transition: color 0.2s ease, background 0.2s ease;

  &:hover {
    color: ${({theme:e})=>e.colors.primary600};
    background: ${({theme:e})=>e.colors.primary50};
  }
`,GI=d.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
`,ZI=d.button`
  border: 1px solid
    ${({theme:e,$highlight:t})=>t?e.colors.primary600:e.colors.primary200};
  background: ${({theme:e,$highlight:t})=>t?e.colors.primary600:e.colors.white};
  color: ${({theme:e,$highlight:t})=>t?e.colors.white:e.colors.text700};
  border-radius: ${({theme:e})=>e.radii.pill};
  padding: 12px 14px;
  ${K.buttonMd};
  cursor: pointer;
  opacity: 1;
  transition: border-color 0.22s ease, background 0.22s ease, color 0.22s ease;

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`,ui=d.button`
  width: 100%;
  border: none;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary300};
  color: ${({theme:e})=>e.colors.white};
  padding: 16px 20px;
  ${K.buttonMd};
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({$disabled:e})=>e?.55:1};
  margin-top: 0;
  flex-shrink: 0;
  transition: opacity 0.25s ease, transform 0.2s ease;

  &:not(:disabled):active {
    transform: scale(0.99);
  }
`,qI=d.div`
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`,QI=d.button`
  border: 1px solid ${({theme:e})=>e.colors.primary300};
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.primary300};
  ${K.buttonMd};
  border-radius: ${({theme:e})=>e.radii.pill};
  padding: 10px 18px;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, opacity 0.2s ease;

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.colors.primary50};
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`,XI=d.p`
  margin: 0;
  text-align: center;
  ${K.caption};
  color: ${({theme:e,$error:t})=>t?"#d93025":e.colors.text700};
  max-width: 320px;
  line-height: 1.45;
`,JI=d.div`
  margin-top: 18px;
`,Zx=d.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.28);
  display: grid;
  place-items: center;
  z-index: 120;
  animation: ${kI} 0.22s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,eT=d(Zx)`
  z-index: 125;
`,qx=d.div`
  width: min(88vw, 320px);
  background: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 22px 18px 16px;
  animation: ${jI} 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,i4=d.p`
  text-align: center;
  ${K.body1};
  color: ${({theme:e})=>e.colors.text900};
`,tT=d.div`
  margin-top: 18px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`,E1=d.button`
  border: 1px solid
    ${({theme:e,$primary:t})=>t?e.colors.primary300:e.colors.primary200};
  background: ${({theme:e,$primary:t})=>t?e.colors.primary300:e.colors.white};
  color: ${({theme:e,$primary:t})=>t?e.colors.white:e.colors.text900};
  border-radius: ${({theme:e})=>e.radii.pill};
  padding: 10px 14px;
  ${K.buttonMd};
  cursor: pointer;
`,nT=d(E1).attrs({type:"button",$primary:!0})`
  width: 100%;
  margin-top: 14px;
`,rT=d.div`
  margin: 16px auto 0;
  width: min(100%, 200px);
  max-height: min(36dvh, 240px);
  aspect-ratio: 3 / 4;
  border-radius: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 20px;
  color: #fff;
  ${K.h2};
  background:
    linear-gradient(to top, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.06)),
    radial-gradient(circle at 20% 20%, #a8d97a, #5f8f49 38%, #304f2d);
`,iT=d.button`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 1px solid ${({theme:e})=>e.colors.primary200};
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.primary300};
  margin: 16px auto 0;
  font-size: 2rem;
  display: grid;
  place-items: center;
`,oT=d(ui)`
  flex-shrink: 0;
`,sT=d.button`
  border: 1px solid ${({theme:e})=>e.colors.primary200};
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.primary300};
  ${K.buttonMd};
  border-radius: ${({theme:e})=>e.radii.pill};
  padding: 8px 14px;
  cursor: pointer;
  flex-shrink: 0;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.colors.primary50};
    border-color: ${({theme:e})=>e.colors.primary300};
  }
`,lT=d.span`
  display: block;
  text-align: right;
  width: 100%;
  margin: 0 0 4px;
  ${K.caption};
  color: ${({theme:e})=>e.colors.text700};
`,aT=d.div`
  margin: 36px auto 0;
  display: flex;
  justify-content: center;
`,cT=d.img`
  width: 108px;
  height: 108px;
  object-fit: contain;
`,uT=d.h2`
  margin: 10px 0 0;
  text-align: center;
  ${K.h1};
  color: ${({theme:e})=>e.colors.primary300};
`,dT=d.p`
  margin: 8px 0 0;
  text-align: center;
  ${K.body2};
  color: ${({theme:e})=>e.colors.text700};
`,pT=d.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,Go=d.input`
  width: 100%;
  border: 1px solid ${({theme:e,$error:t})=>t?"#d93025":e.colors.primary200};
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.text900};
  ${K.body2};
  padding: 14px 24px;
  transition: border-color 0.2s ease, transform 0.2s ease;

  &::placeholder {
    color: ${({theme:e})=>e.colors.text700};
  }

  &:focus {
    outline: none;
    border-color: ${({theme:e,$error:t})=>t?"#d93025":e.colors.primary400};
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 1;
    cursor: not-allowed;
    background: ${({theme:e})=>e.colors.primary50};
    color: ${({theme:e})=>e.colors.text700};
    transform: none;
  }

  &:disabled:focus {
    border-color: ${({theme:e,$error:t})=>t?"#d93025":e.colors.primary200};
    transform: none;
  }
`,Mu=d(Go)`
  padding: 14px 56px 14px 24px;
  transition:
    border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.22s ease;
`,fT=d.div`
  position: relative;
  width: 100%;
  min-width: 0;
`,hT=d(Go)`
  padding: 14px 58px 14px 24px;
`,gT=d.span`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  ${K.caption};
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: ${({theme:e})=>e.colors.text700};
`,mT=d.button`
  margin-top: 0;
  width: 100%;
  border: none;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary300};
  color: ${({theme:e})=>e.colors.white};
  padding: 16px 20px;
  ${K.buttonMd};
  cursor: pointer;
  transition: transform 0.15s ease;

  &:hover {
    transform: translateY(-1px);
  }
`,xT=d.div`
  margin: 22px 0 18px;
  display: flex;
  align-items: center;
  gap: 14px;
  color: ${({theme:e})=>e.colors.text700};
  ${K.caption};

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: ${({theme:e})=>e.colors.primary200};
  }
`,LT=d.div`
  display: flex;
  justify-content: center;
  gap: 22px;
`,zu=d.button`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: ${({$bg:e})=>e};
  color: ${({$color:e="#111"})=>e};
  font-size: 1.7rem;
  font-weight: 700;
  cursor: pointer;
  display: grid;
  place-items: center;
  padding: 0;
`,Au=d.a`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: ${({$bg:e})=>e};
  color: ${({$color:e="#111"})=>e};
  font-size: 1.7rem;
  font-weight: 700;
  cursor: pointer;
  display: grid;
  place-items: center;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
`,si=d.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
`,yT=d.div`
  margin: 28px 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 6px;
  text-align: center;
  ${K.body2};
  color: ${({theme:e})=>e.colors.text900};
`,vT=d.button`
  border: none;
  margin: 0;
  padding: 0;
  background: none;
  font: inherit;
  line-height: inherit;
  color: ${({theme:e})=>e.colors.primary300};
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  display: inline;

  &:hover {
    color: ${({theme:e})=>e.colors.primary400};
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`,wT=d.div`
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
`,bT=d.div`
  flex: 1 1 auto;
  min-height: min(200px, 28dvh);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,kT=d.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  padding-bottom: 4px;
`,jT=d.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0;
`,ST=d.img`
  width: 72px;
  height: 72px;
  object-fit: contain;
`,CT=d.p`
  margin: 0;
  text-align: center;
  ${K.body2};
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.45;
  max-width: 300px;
`,$T=d.div`
  margin-top: 22px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
`,_u=d.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 52px;
  padding: 10px 0;
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary200};
`,Nu=d.label`
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;
`,Ou=d.input`
  width: 20px;
  height: 20px;
  margin: 2px 0 0;
  flex-shrink: 0;
  accent-color: ${({theme:e})=>e.colors.primary300};
  cursor: pointer;
`,Du=d.span`
  ${K.body2};
  color: ${({theme:e})=>e.colors.text900};
  line-height: 1.4;
`,Bu=d.span`
  display: inline-block;
  margin-right: 6px;
  ${K.caption};
  font-weight: 700;
  color: ${({theme:e,$optional:t})=>t?e.colors.text700:e.colors.primary600};
`,Fu=d.button`
  flex-shrink: 0;
  margin: 0;
  padding: 8px 4px 8px 10px;
  border: none;
  background: none;
  ${K.caption};
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text700};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 2px;
  white-space: nowrap;

  &:hover {
    color: ${({theme:e})=>e.colors.primary600};
  }
`,ET=d.div`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: stretch;
`,PT=d.button`
  flex: 2;
  min-width: 0;
  border: 1px solid ${({theme:e})=>e.colors.primary300};
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.primary300};
  padding: 12px 8px;
  ${K.caption};
  font-weight: 600;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({$disabled:e})=>e?.55:1};
  flex-shrink: 0;
  transition: opacity 0.22s ease, background 0.2s ease, transform 0.2s ease;

  &:not(:disabled):hover {
    background: ${({theme:e})=>e.colors.primary50};
  }

  &:not(:disabled):active {
    transform: scale(0.99);
  }
`,IT=d.button`
  flex: 8;
  min-width: 0;
  border: none;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary300};
  color: ${({theme:e})=>e.colors.white};
  padding: 16px 20px;
  ${K.buttonMd};
  cursor: pointer;
  transition: opacity 0.22s ease, transform 0.2s ease;

  &:active {
    transform: scale(0.99);
  }
`,TT=d(qx)`
  width: min(92vw, 360px);
  max-height: min(72dvh, 520px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 18px 16px 14px;
`,RT=d.div`
  margin-top: 12px;
  overflow-y: auto;
  flex: 1 1 auto;
  min-height: 0;
  ${K.body2};
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.55;
  white-space: pre-line;
`,MT=d.div`
  width: min(100%, 680px);
  padding: 0 2px 32px;
`,zT=d.h1`
  margin: 0 0 20px;
  text-align: center;
  ${K.title};
`,AT=d.section`
  position: relative;
  overflow: hidden;
  padding: 26px 22px 22px;
  border: 1px solid rgba(75, 0, 130, 0.08);
  border-radius: 28px;
  background:
    radial-gradient(circle at 100% 0%, rgba(245, 216, 208, 0.9), transparent 38%),
    linear-gradient(145deg, #ffffff 0%, #faf5ff 100%);
  box-shadow: 0 16px 40px rgba(75, 0, 130, 0.09);
`,_T=d.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 18px;
`,NT=d.button`
  position: relative;
  flex: 0 0 auto;
  width: 88px;
  height: 88px;
  padding: 0;
  border: 4px solid ${({theme:e})=>e.colors.white};
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.primary100};
  box-shadow: 0 8px 24px rgba(75, 0, 130, 0.18);
  cursor: pointer;
  overflow: visible;
`,OT=d.img`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
  object-fit: cover;
`,DT=d.span`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: linear-gradient(145deg, #d8c5e9, #a88bca);
  color: ${({theme:e})=>e.colors.white};
  font-size: 1.65rem;
  font-weight: 800;
`,BT=d.span`
  position: absolute;
  right: -2px;
  bottom: -2px;
  width: 29px;
  height: 29px;
  display: grid;
  place-items: center;
  border: 3px solid ${({theme:e})=>e.colors.white};
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.primary600};
  color: white;
  font-size: 0.82rem;
`,FT=d.div`
  min-width: 0;
  flex: 1;
`,HT=d.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`,UT=d.h2`
  margin: 0;
  ${K.title};
`,VT=d.span`
  padding: 5px 9px;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary100};
  color: ${({theme:e})=>e.colors.primary600};
  ${K.caption};
  font-weight: 800;
`,WT=d.p`
  margin: 6px 0 0;
  color: ${({theme:e})=>e.colors.text700};
  ${K.body2};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,KT=d.p`
  margin: 8px 0 0;
  color: ${({theme:e})=>e.colors.primary500};
  ${K.caption};
  font-weight: 700;
`,YT=d.button`
  margin-top: 10px;
  padding: 8px 12px;
  border: 1px solid ${({theme:e})=>e.colors.primary200};
  border-radius: ${({theme:e})=>e.radii.pill};
  background: rgba(255, 255, 255, 0.76);
  color: ${({theme:e})=>e.colors.primary600};
  ${K.caption};
  font-weight: 700;
  cursor: pointer;
`,GT=d.input`
  display: none;
`,ZT=d.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 24px;
  padding: 17px 8px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(10px);
`,Hu=d.div`
  text-align: center;

  & + & {
    border-left: 1px solid rgba(75, 0, 130, 0.1);
  }
`,Uu=d.strong`
  display: block;
  color: ${({theme:e})=>e.colors.primary600};
  ${K.body1};
  font-weight: 700;
`,Vu=d.span`
  display: block;
  margin-top: 4px;
  color: ${({theme:e})=>e.colors.text700};
  ${K.caption};
`,qT=d.button`
  width: 100%;
  margin-top: 14px;
  padding: 19px 20px;
  display: flex;
  align-items: center;
  gap: 14px;
  border: 0;
  border-radius: 22px;
  background: linear-gradient(120deg, #4b0082, #7a5aab);
  color: white;
  text-align: left;
  cursor: pointer;
  box-shadow: 0 12px 24px rgba(75, 0, 130, 0.16);
`,QT=d.span`
  width: 44px;
  height: 44px;
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.16);
  font-size: 1.35rem;
`,XT=d.span`
  flex: 1;

  strong,
  small {
    display: block;
  }

  strong {
    ${K.body2};
    font-weight: 700;
  }

  small {
    margin-top: 5px;
    color: rgba(255, 255, 255, 0.75);
    ${K.caption};
  }
`,Wu=d.section`
  margin-top: 26px;
`,Ku=d.h3`
  margin: 0 4px 11px;
  ${K.body1};
  font-weight: 700;
`,JT=d.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
`,o4=d.button`
  min-height: 112px;
  padding: 17px;
  border: 1px solid rgba(75, 0, 130, 0.08);
  border-radius: 20px;
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.text900};
  text-align: left;
  cursor: pointer;
  box-shadow: 0 7px 22px rgba(61, 61, 61, 0.05);
  transition: transform 0.18s ease, box-shadow 0.18s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 26px rgba(75, 0, 130, 0.1);
  }
`,s4=d.span`
  display: block;
  font-size: 1.35rem;
`,l4=d.strong`
  display: block;
  margin-top: 12px;
  ${K.body2};
  font-weight: 700;
`,a4=d.span`
  display: block;
  margin-top: 4px;
  color: ${({theme:e})=>e.colors.text700};
  ${K.caption};
`,c4=d.div`
  overflow: hidden;
  border: 1px solid rgba(75, 0, 130, 0.08);
  border-radius: 22px;
  background: ${({theme:e})=>e.colors.white};
  box-shadow: 0 7px 22px rgba(61, 61, 61, 0.04);
`,vo=d.button`
  width: 100%;
  min-height: 58px;
  padding: 0 18px;
  display: flex;
  align-items: center;
  gap: 13px;
  border: 0;
  border-bottom: 1px solid rgba(75, 0, 130, 0.07);
  background: transparent;
  color: ${({theme:e})=>e.colors.text900};
  text-align: left;
  cursor: pointer;

  &:last-child {
    border-bottom: 0;
  }
`,wo=d.span`
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: ${({theme:e})=>e.colors.primary50};
`,bo=d.span`
  flex: 1;
  ${K.body2};
  font-weight: 600;
`,li=d.span`
  color: ${({theme:e})=>e.colors.mutedMauve};
  font-size: 1.25rem;
`,eR=d.p`
  margin: 12px 4px 0;
  color: ${({$error:e,theme:t})=>e?"#c5221f":t.colors.primary600};
  ${K.caption};
  text-align: center;
`,tR=d.button`
  display: block;
  margin: 26px auto 0;
  padding: 10px 18px;
  border: 0;
  background: transparent;
  color: ${({theme:e})=>e.colors.text700};
  ${K.caption};
  text-decoration: underline;
  text-underline-offset: 4px;
  cursor: pointer;
`,u4={service:{title:"서비스 이용약관",body:`제1조 (목적)
본 약관은 명상 지도 서비스의 이용 조건 및 절차, 회사와 회원 간 권리·의무를 규정합니다.

제2조 (정의)
“서비스”란 회사가 제공하는 명상 지도 및 관련 기능을 말합니다.

제3조 (약관의 게시)
회사는 앱 내 설정 화면에 본 약관을 게시합니다.

※ 실제 서비스 오픈 전 법무 검토 후 최종 약관 전문을 연결해 주세요.`},privacy:{title:"개인정보 수집 및 이용",body:`1. 수집 항목
이메일, 비밀번호(암호화), 서비스 이용 기록 등

2. 이용 목적
회원 관리, 서비스 제공 및 개선, 고객 문의 대응

3. 보유 기간
회원 탈퇴 후 지체 없이 파기(관련 법령에 따른 예외는 해당 기간 동안 보관)

※ 최종 내용은 개인정보처리방침 전문을 통해 안내합니다.`},marketing:{title:"마케팅 정보 수신",body:`이벤트·혜택·신규 기능 등의 안내를 이메일 등으로 받아보실 수 있습니다.

본 항목은 선택 사항이며, 동의하지 않아도 서비스 가입 및 이용에 제한이 없습니다.

수신 방법·빈도·철회 절차 등은 추후 설정에서 변경하실 수 있습니다.`}},d4=e=>!(e.length<8||!/[a-zA-Z]/.test(e)||!/[0-9]/.test(e)),p4=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,f4=/^[^\s@]+@[^\s@]+\./,Yu=/^01[0-9]\d{7,8}$/,ai="meditation-oauth-signup-ticket",nR=()=>{var v0;const e=yt(),[t,n]=q3(),r=y.useRef(!1),[i,s]=y.useState("login"),[l,a]=y.useState(""),[c,u]=y.useState(!1),[p,f]=y.useState({status:"idle",email:null}),[h,g]=y.useState(""),[w,v]=y.useState(""),[C,x]=y.useState(""),[m,L]=y.useState(""),[b,$]=y.useState(!1),[k,S]=y.useState(!1),[M,R]=y.useState(!1),[I,T]=y.useState("KR-11"),[E,N]=y.useState(!1),[D,H]=y.useState(!1),[_,z]=y.useState(!1),[A,O]=y.useState(null),[j,Z]=y.useState(null),[Q,P]=y.useState(300),[G,te]=y.useState(!1),[J,Y]=y.useState(!1),[ee,ae]=y.useState(!1),[ve,fe]=y.useState(!1),[me,ke]=y.useState(null),[Ie,De]=y.useState(!1),[Ze,Te]=y.useState(null),[Wt,X]=y.useState(!1),[je,Se]=y.useState(""),[wt,sn]=y.useState(""),[Ve,Jr]=y.useState(!1),[B,U]=y.useState(null),ne=Xt(F=>F.accessToken),ce=Xt(F=>F.email),we=Xt(F=>F.logout),Ct=Or(F=>F.favorites.length),Kt=y.useRef(null),[oe,ln]=y.useState(null),[br,pt]=y.useState(!1),[Rn,Yt]=y.useState(!1),[s5,l0]=y.useState(!1),[rc,kr]=y.useState(null),l5=((v0=Wn(I))==null?void 0:v0.name)??"서울",ei=y.useMemo(()=>$e()??"",[]),a0=y.useRef(null),[c0,u0]=y.useState(null),[ic,oc]=y.useState(null),Es=()=>{u0(null),oc(F=>(F!=null&&F.startsWith("blob:")&&URL.revokeObjectURL(F),null))},a5=F=>{if(!F.type.startsWith("image/")){U("이미지 파일만 선택할 수 있어요.");return}const re=5*1024*1024;if(F.size>re){U("사진은 5MB 이하로 선택해 주세요.");return}U(null),u0(F);const xe=URL.createObjectURL(F);oc(Be=>(Be!=null&&Be.startsWith("blob:")&&URL.revokeObjectURL(Be),xe))},ft=y.useMemo(()=>l.trim(),[l]),ti=y.useMemo(()=>ft?!p4.test(ft):!1,[ft]),sc=y.useMemo(()=>ft.length>0&&p4.test(ft),[ft]),d0=!!$e()&&ft.length>0&&f4.test(ft),ht=p.email===ft?p:null,so=!!ht&&ht.status==="unavailable",p0=y.useMemo(()=>sc?$e()?(ht==null?void 0:ht.status)==="available"&&ht.email===ft:!0:!1,[sc,ft,ht]),c5=ti||so,Mn=y.useMemo(()=>h.replace(/[^\d]/g,""),[h]),u5=y.useMemo(()=>Mn?!Yu.test(Mn):!1,[Mn]),f0=y.useMemo(()=>Mn.length>0&&Yu.test(Mn),[Mn]),h0=u5,lc=y.useMemo(()=>/^\d{6}$/.test(w.trim()),[w]),g0=async()=>{if(!$e()||!Yu.test(Mn))return!1;try{return(await he("/auth/phone/signup/send-otp",{method:"POST",body:JSON.stringify({phone:Mn})})).ok}catch{return!1}},d5=async()=>{if(!$e()){U("지금은 이용할 수 없어요. 잠시 후 다시 시도해 주세요.");return}U(null),O(null),z(!1),Z(null),v(""),H(!0),P(300),te(!0),window.setTimeout(()=>{var re;(re=document.getElementById("signup-code-anchor"))==null||re.scrollIntoView({behavior:"smooth",block:"nearest"})},120),await g0()||U("인증 문자를 보내지 못했어요. 잠시 후 다시 시도해 주세요.")},p5=async()=>{v(""),z(!1),O(null),Z(null),P(300),te(!0),await g0()||U("인증 문자를 다시 보내지 못했어요. 잠시 후 다시 시도해 주세요.")},f5=async()=>{if(lc){if(!$e()){U("지금은 이용할 수 없어요. 잠시 후 다시 시도해 주세요.");return}U(null);try{const F=await he("/auth/phone/signup/verify-otp",{method:"POST",body:JSON.stringify({phone:Mn,code:w.trim()})});if(!F.ok){Z("error");return}const xe=(await F.json()).phoneVerificationToken;if(!xe){Z("error");return}O(xe),z(!0),Z("success")}catch{Z("error")}}},ac=y.useMemo(()=>{const F=C;return F?F.length<8?"8자 이상이어야 합니다":/[a-zA-Z]/.test(F)?/[0-9]/.test(F)?null:"숫자가 포함되어야 합니다":"영문이 포함되어야 합니다":null},[C]),m0=y.useMemo(()=>m.length>0&&C!==m,[C,m]),x0=y.useMemo(()=>d4(C)&&C===m,[C,m]),h5=Q<=0,L0=y.useMemo(()=>{const F=Math.floor(Q/60),re=Q%60;return`${F}:${String(re).padStart(2,"0")}`},[Q]),cc=y.useMemo(()=>J&&ee,[J,ee]),Ps=y.useMemo(()=>{switch(i){case"signup-terms":return 20;case"signup-account":return 40;case"signup-region":return 60;case"signup-interest":return 80;case"signup-complete":return 100;default:return null}},[i]);y.useEffect(()=>{var Gt,At;if(r.current||t.get("signupOAuth")!=="1")return;const F=(Gt=t.get("oauthSignupTicket"))==null?void 0:Gt.trim();if(!F)return;r.current=!0;const re=t.get("email")??"",xe=((At=t.get("picture"))==null?void 0:At.trim())??"";s("signup-account"),re&&a(re),u(!0),xe.startsWith("https://")&&oc(an=>(an!=null&&an.startsWith("blob:")&&URL.revokeObjectURL(an),xe));try{sessionStorage.setItem(ai,F)}catch{}const Be=new URLSearchParams(t);Be.delete("signupOAuth"),Be.delete("oauthSignupTicket"),Be.delete("email"),Be.delete("picture"),n(Be,{replace:!0})},[t,n]),y.useEffect(()=>{if(i!=="signup-account"||c)return;if(!ft.length||!f4.test(ft)){f({status:"idle",email:null});return}if(!$e()){f({status:"idle",email:null});return}const re=ft,xe=new AbortController,Gt=window.setTimeout(()=>{f({status:"loading",email:re}),(async()=>{try{const At=await he(`/auth/email/availability?email=${encodeURIComponent(re)}`,{signal:xe.signal});if(!At.ok){f({status:"error",email:re});return}const b5=!!(await At.json()).available;f({status:b5?"available":"unavailable",email:re})}catch(At){if(At.name==="AbortError"||!$e())return;f({status:"error",email:re})}})()},320);return()=>{window.clearTimeout(Gt),xe.abort()}},[ft,i,c]),y.useEffect(()=>{if(i!=="signup-account"||!D)return;const F=window.setInterval(()=>{P(re=>re>0?re-1:0)},1e3);return()=>window.clearInterval(F)},[i,D]),y.useEffect(()=>{if(i!=="signup-account"||!D||!_)return;const F=window.setTimeout(()=>{var re;(re=document.getElementById("signup-password-anchor"))==null||re.scrollIntoView({behavior:"smooth",block:"nearest"})},80);return()=>window.clearTimeout(F)},[i,D,_]),y.useEffect(()=>{if(i!=="signup-account"||!c)return;const F=window.setTimeout(()=>{var re;(re=document.getElementById("signup-phone-anchor"))==null||re.scrollIntoView({behavior:"smooth",block:"nearest"})},100);return()=>window.clearTimeout(F)},[i,c]),y.useEffect(()=>{if(!j)return;const F=window.setTimeout(()=>{Z(null)},2200);return()=>window.clearTimeout(F)},[j]),y.useEffect(()=>{if(!G)return;const F=window.setTimeout(()=>{te(!1)},2200);return()=>window.clearTimeout(F)},[G]),y.useEffect(()=>{i==="login"&&R(!1)},[i]),y.useEffect(()=>{i!=="signup-region"&&(Te(null),X(!1),De(!1))},[i]);const g5=()=>{if(Te(null),X(!1),!navigator.geolocation){X(!0),Te("이 환경에서는 위치 정보를 쓸 수 없어요. 지도에서 골라주세요.");return}De(!0),navigator.geolocation.getCurrentPosition(F=>{var xe;De(!1);const re=Ty(F.coords.latitude,F.coords.longitude);if(re){T(re),N(!0),X(!1);const Be=((xe=Wn(re))==null?void 0:xe.name)??re;Te(`${Be} 지역으로 맞췄어요. 맞는지 확인해 주세요.`)}else X(!0),Te("위치로 시·도를 찾지 못했어요. 지도에서 선택해 주세요.")},F=>{De(!1),X(!0),F.code===1?Te("위치 권한이 필요해요. 허용하시거나 지도에서 골라주세요."):F.code===2?Te("위치를 가져올 수 없어요. 지도에서 선택해 주세요."):Te("위치 확인에 실패했어요. 지도에서 선택해 주세요.")},{enableHighAccuracy:!1,maximumAge:3e5,timeout:12e3})},m5=()=>{if(i==="login"){e(-1);return}if(i==="signup-terms"){ke(null),s("login");return}if(i==="signup-account"){let F=null;try{F=sessionStorage.getItem(ai)}catch{F=null}if(F){try{sessionStorage.removeItem(ai)}catch{}u(!1),f({status:"idle",email:null}),Es(),O(null),H(!1),z(!1),Z(null),g(""),v(""),x(""),L(""),$(!1),S(!1),s("login");return}u(!1),f({status:"idle",email:null}),Es(),O(null),H(!1),z(!1),Z(null),g(""),v(""),x(""),L(""),$(!1),S(!1),s("signup-terms");return}if(i==="signup-region"){s("signup-account");return}i==="signup-interest"&&s("signup-region")},x5=async()=>{if(U(null),!$e()){ct.error("지금은 이용할 수 없어요. 잠시 후 다시 시도해 주세요.");return}const F=je.trim();if(!F||!wt){ct.error("이메일과 비밀번호를 입력해 주세요.");return}Jr(!0);try{const re=await he("/auth/login",{method:"POST",body:JSON.stringify({email:F,password:wt})});if(!re.ok){let xe="";try{xe=(await re.json()).error??""}catch{}ct.error(xe==="INVALID_CREDENTIALS"?"이메일 또는 비밀번호를 확인해 주세요.":"로그인에 실패했습니다.");return}await Xt.getState().setSession(),await Or.getState().pullFromServer(),sn("")}catch{ct.error("잠시 후 다시 시도해 주세요.")}finally{Jr(!1)}},L5=async()=>{if(U(null),!$e()){U("지금은 이용할 수 없어요. 잠시 후 다시 시도해 주세요.");return}if(!d4(C)||C!==m){U("비밀번호를 다시 확인해 주세요.");return}let F=null;try{F=sessionStorage.getItem(ai)}catch{F=null}if(!F&&(!A||A.trim()==="")){U("휴대폰 인증을 완료해 주세요.");return}const re=$e();Jr(!0);try{const xe=new FormData;xe.append("email",ft),xe.append("password",C),F?xe.append("oauthSignupToken",F):xe.append("phoneVerificationToken",A.trim()),c0&&xe.append("profileImage",c0);const Be=F?`${re}/auth/register/oauth`:`${re}/auth/register`,Gt=await fetch(Be,{method:"POST",body:xe,credentials:"include"});if(Gt.status===409){U("이미 가입된 이메일입니다.");return}if(!Gt.ok){try{const At=await Gt.json(),an=At.code??At.error??"";if(Gt.status===400&&an==="INVALID_OAUTH_SIGNUP_TOKEN"){U("소셜 가입 세션이 만료되었습니다. 소셜 로그인을 다시 진행해 주세요.");try{sessionStorage.removeItem(ai)}catch{}return}if(Gt.status===400&&an==="INVALID_PROFILE_IMAGE_OBJECT_KEY"){U("프로필 사진 정보가 올바르지 않아요. 사진을 다시 선택해 주세요.");return}}catch{}U("회원가입에 실패했습니다.");return}try{sessionStorage.removeItem(ai)}catch{}await Xt.getState().setSession(),await Or.getState().pullFromServer(),Es(),s("login")}catch{U("잠시 후 다시 시도해 주세요.")}finally{Jr(!1)}};y.useEffect(()=>{if(!ne||i!=="login"||!$e()){ln(null);return}let F=!0;return pt(!0),kr(null),he("/me").then(async re=>{if(!re.ok)throw new Error("profile");const xe=await re.json();F&&ln(xe)}).catch(()=>{F&&kr({text:"프로필 정보를 불러오지 못했어요.",error:!0})}).finally(()=>{F&&pt(!1)}),()=>{F=!1}},[ne,i]);const y5=async F=>{var xe;if(!F)return;if(!F.type.startsWith("image/")){kr({text:"이미지 파일만 선택할 수 있어요.",error:!0});return}if(F.size>5*1024*1024){kr({text:"사진은 5MB 이하로 선택해 주세요.",error:!0});return}const re=new FormData;re.append("file",F),Yt(!0),kr(null);try{const Be=await he("/me/profile-image",{method:"POST",body:re});if(!Be.ok){let At="사진을 바꾸지 못했어요. 잠시 후 다시 시도해 주세요.";try{const an=await Be.json();(xe=an.message)!=null&&xe.trim()&&(At=an.message)}catch{}throw new Error(At)}const Gt=await Be.json();ln(Gt),kr({text:"프로필 사진을 바꿨어요."})}catch(Be){kr({text:Be instanceof Error?Be.message:"사진을 바꾸지 못했어요. 잠시 후 다시 시도해 주세요.",error:!0})}finally{Yt(!1),Kt.current&&(Kt.current.value="")}},y0=(oe==null?void 0:oe.email)??ce??"",uc=(oe==null?void 0:oe.displayName)||(oe==null?void 0:oe.username)||y0||"명상가",dc=uc.includes("@")?uc.split("@")[0]:uc,v5=(dc.trim()[0]??"명").toUpperCase(),w5=oe!=null&&oe.createdAt?new Date(oe.createdAt).getFullYear():new Date().getFullYear();return o.jsxs(EI,{$dashboard:!!ne&&i==="login",children:[Ps!==null&&o.jsx(PI,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Ps,"aria-label":`회원가입 진행 ${Ps}%`,children:o.jsx(II,{$pct:Ps})}),ne&&i==="login"?o.jsxs(MT,{children:[o.jsx(zT,{children:"마이 페이지"}),o.jsxs(AT,{children:[o.jsxs(_T,{children:[o.jsxs(NT,{type:"button","aria-label":"프로필 사진 바꾸기",disabled:Rn,onClick:()=>{var F;return(F=Kt.current)==null?void 0:F.click()},children:[oe!=null&&oe.profileImageUrl?o.jsx(OT,{src:oe.profileImageUrl,alt:`${dc} 프로필`}):o.jsx(DT,{"aria-hidden":"true",children:v5}),o.jsx(BT,{"aria-hidden":"true",children:Rn?"…":"✦"})]}),o.jsx(GT,{ref:Kt,type:"file",accept:"image/*",onChange:F=>{var re;return void y5((re=F.target.files)==null?void 0:re[0])}}),o.jsxs(FT,{children:[o.jsxs(HT,{children:[o.jsxs(UT,{children:[dc,"님"]}),o.jsx(VT,{children:(oe==null?void 0:oe.role)==="MEMBER"?"MEMBER":(oe==null?void 0:oe.role)??"MEMBER"})]}),o.jsx(WT,{children:y0}),o.jsx(KT,{children:br?"프로필을 불러오는 중…":"사진을 눌러 프로필을 꾸며보세요"}),o.jsx(YT,{type:"button",onClick:()=>l0(!0),children:"프로필 수정"})]})]}),o.jsxs(ZT,{children:[o.jsxs(Hu,{children:[o.jsx(Uu,{children:Ct}),o.jsx(Vu,{children:"저장한 장소"})]}),o.jsxs(Hu,{children:[o.jsx(Uu,{children:w5}),o.jsx(Vu,{children:"함께한 해"})]}),o.jsxs(Hu,{children:[o.jsx(Uu,{children:"맑음"}),o.jsx(Vu,{children:"오늘의 마음"})]})]})]}),rc&&o.jsx(eR,{$error:rc.error,children:rc.text}),o.jsxs(qT,{type:"button",onClick:()=>e("/meditation/map"),children:[o.jsx(QT,{"aria-hidden":"true",children:"◌"}),o.jsxs(XT,{children:[o.jsx("strong",{children:"오늘, 잠시 쉬어갈 곳을 찾아볼까요?"}),o.jsx("small",{children:"내 주변 명상 공간을 지도에서 둘러보세요"})]}),o.jsx(li,{"aria-hidden":"true",children:"›"})]}),o.jsxs(Wu,{children:[o.jsx(Ku,{children:"나의 명상"}),o.jsxs(JT,{children:[o.jsxs(o4,{type:"button",onClick:()=>e("/favorites"),children:[o.jsx(s4,{"aria-hidden":"true",children:"♡"}),o.jsx(l4,{children:"저장한 장소"}),o.jsxs(a4,{children:[Ct,"곳의 쉼터를 모았어요"]})]}),o.jsxs(o4,{type:"button",onClick:()=>e("/meditation"),children:[o.jsx(s4,{"aria-hidden":"true",children:"⌁"}),o.jsx(l4,{children:"명상 둘러보기"}),o.jsx(a4,{children:"새로운 프로그램을 만나보세요"})]})]})]}),o.jsxs(Wu,{children:[o.jsx(Ku,{children:"전문가 활동"}),o.jsxs(c4,{children:[o.jsxs(vo,{type:"button",onClick:()=>e("/profile/expert"),children:[o.jsx(wo,{"aria-hidden":"true",children:"✦"}),o.jsx(bo,{children:oe!=null&&oe.expertProfileId?"전문가 프로필 수정":"명상 전문가로 전환"}),o.jsx(li,{"aria-hidden":"true",children:"›"})]}),(oe==null?void 0:oe.expertProfileId)&&o.jsxs(vo,{type:"button",onClick:()=>e(`/meditation/expert/${oe.expertProfileId}`),children:[o.jsx(wo,{"aria-hidden":"true",children:"◎"}),o.jsx(bo,{children:"내 전문가 페이지 보기"}),o.jsx(li,{"aria-hidden":"true",children:"›"})]})]})]}),o.jsxs(Wu,{children:[o.jsx(Ku,{children:"서비스"}),o.jsxs(c4,{children:[o.jsxs(vo,{type:"button",onClick:()=>e("/notice"),children:[o.jsx(wo,{"aria-hidden":"true",children:"♢"}),o.jsx(bo,{children:"공지사항"}),o.jsx(li,{"aria-hidden":"true",children:"›"})]}),o.jsxs(vo,{type:"button",onClick:()=>e("/inquiry"),children:[o.jsx(wo,{"aria-hidden":"true",children:"?"}),o.jsx(bo,{children:"문의하기"}),o.jsx(li,{"aria-hidden":"true",children:"›"})]}),o.jsxs(vo,{type:"button",onClick:()=>e("/service-info"),children:[o.jsx(wo,{"aria-hidden":"true",children:"i"}),o.jsx(bo,{children:"서비스 안내"}),o.jsx(li,{"aria-hidden":"true",children:"›"})]})]})]}),o.jsx(tR,{type:"button",onClick:()=>{we(),ln(null),Se(""),sn("")},children:"로그아웃"}),oe&&o.jsx(o.Fragment,{children:o.jsx(wI,{open:s5,profile:oe,onClose:()=>l0(!1),onSaved:ln})})]}):o.jsxs(TI,{children:[i!=="signup-complete"&&o.jsxs(RI,{children:[o.jsxs(MI,{type:"button",onClick:m5,"aria-label":"뒤로가기",children:[o.jsx(zI,{src:oI,alt:"","aria-hidden":"true"}),"뒤로가기"]}),i==="signup-interest"&&o.jsx(sT,{type:"button",onClick:()=>s("signup-complete"),children:"건너뛰기"})]}),i==="login"&&o.jsxs(oi,{children:[o.jsxs(Lo,{children:[o.jsxs(AI,{children:[o.jsx(_I,{src:zl,alt:"명상 지도 로고"}),o.jsx(J2,{children:"명상 지도에 오신 것을 환영합니다!"}),o.jsx(NI,{children:"명상 지도"})]}),o.jsxs(pT,{children:[o.jsx(Go,{type:"email",placeholder:"이메일","aria-label":"이메일",value:je,onChange:F=>Se(F.target.value),autoComplete:"email"}),o.jsxs(Tu,{children:[o.jsx(Mu,{type:M?"text":"password",placeholder:"비밀번호","aria-label":"비밀번호",autoComplete:"current-password",value:wt,onChange:F=>sn(F.target.value)}),o.jsx(Ru,{type:"button","aria-pressed":M,"aria-label":M?"비밀번호 숨기기":"비밀번호 보기",onClick:()=>R(F=>!F),children:M?"숨기기":"보기"})]})]}),o.jsx(xT,{children:"또는"}),o.jsxs(LT,{children:[ei?o.jsx(Au,{href:`${ei}/oauth2/authorization/kakao`,$bg:"transparent","aria-label":"카카오로 로그인",children:o.jsx(si,{src:G2,alt:""})}):o.jsx(zu,{type:"button",$bg:"transparent",disabled:!0,"aria-label":"카카오로 로그인 (API 주소 필요)",children:o.jsx(si,{src:G2,alt:""})}),ei?o.jsx(Au,{href:`${ei}/oauth2/authorization/naver`,$bg:"transparent","aria-label":"네이버로 로그인",children:o.jsx(si,{src:Z2,alt:""})}):o.jsx(zu,{type:"button",$bg:"transparent",disabled:!0,"aria-label":"네이버로 로그인 (API 주소 필요)",children:o.jsx(si,{src:Z2,alt:""})}),ei?o.jsx(Au,{href:`${ei}/oauth2/authorization/google`,$bg:"transparent","aria-label":"구글로 로그인",children:o.jsx(si,{src:q2,alt:""})}):o.jsx(zu,{type:"button",$bg:"transparent",disabled:!0,"aria-label":"구글로 로그인 (API 주소 필요)",children:o.jsx(si,{src:q2,alt:""})})]}),o.jsxs(yT,{children:[o.jsx("span",{children:"계정이 없으신가요?"}),o.jsx(vT,{type:"button",onClick:()=>{a(""),u(!1),f({status:"idle",email:null}),Es(),O(null),g(""),v(""),x(""),L(""),$(!1),S(!1),H(!1),z(!1),Z(null),P(300),T("KR-11"),Y(!1),ae(!1),fe(!1),ke(null),U(null),s("signup-terms")},children:"회원가입"})]}),B&&i==="login"&&o.jsx(Pr,{style:{marginTop:12},children:B})]}),o.jsx(yo,{children:o.jsx(mT,{type:"button",disabled:Ve,onClick:()=>void x5(),children:Ve?"처리 중…":"로그인하기"})})]}),i==="signup-terms"&&o.jsxs(oi,{children:[o.jsxs(wT,{children:[o.jsx(bT,{children:o.jsxs(jT,{children:[o.jsx(ST,{src:zl,alt:"명상 지도 로고"}),o.jsx(J2,{children:"명상 지도에 오신 것을 환영합니다!"})]})}),o.jsxs(kT,{children:[o.jsx(CT,{children:"서비스 이용을 위해 아래 약관에 동의해 주세요."}),o.jsxs($T,{children:[o.jsxs(_u,{children:[o.jsxs(Nu,{htmlFor:"signup-terms-service",children:[o.jsx(Ou,{id:"signup-terms-service",type:"checkbox",checked:J,onChange:F=>Y(F.target.checked)}),o.jsxs(Du,{children:[o.jsx(Bu,{children:"[필수]"}),"서비스 이용약관에 동의합니다"]})]}),o.jsx(Fu,{type:"button",onClick:F=>{F.stopPropagation(),ke("service")},children:"자세히 ›"})]}),o.jsxs(_u,{children:[o.jsxs(Nu,{htmlFor:"signup-terms-privacy",children:[o.jsx(Ou,{id:"signup-terms-privacy",type:"checkbox",checked:ee,onChange:F=>ae(F.target.checked)}),o.jsxs(Du,{children:[o.jsx(Bu,{children:"[필수]"}),"개인정보 수집 및 이용에 동의합니다"]})]}),o.jsx(Fu,{type:"button",onClick:F=>{F.stopPropagation(),ke("privacy")},children:"자세히 ›"})]}),o.jsxs(_u,{children:[o.jsxs(Nu,{htmlFor:"signup-terms-marketing",children:[o.jsx(Ou,{id:"signup-terms-marketing",type:"checkbox",checked:ve,onChange:F=>fe(F.target.checked)}),o.jsxs(Du,{children:[o.jsx(Bu,{$optional:!0,children:"[선택]"}),"마케팅 정보 수신에 동의합니다"]})]}),o.jsx(Fu,{type:"button",onClick:F=>{F.stopPropagation(),ke("marketing")},children:"자세히 ›"})]})]})]})]}),o.jsx(yo,{children:o.jsxs(ET,{children:[o.jsx(PT,{type:"button",$disabled:!cc,disabled:!cc,"aria-label":"필수 약관에 동의하고 다음 단계로",onClick:()=>{cc&&s("signup-account")},children:"동의"}),o.jsx(IT,{type:"button",onClick:()=>{Y(!0),ae(!0),fe(!0),s("signup-account")},children:"전체 동의"})]})})]}),i==="signup-account"&&o.jsxs(oi,{children:[o.jsxs(Lo,{children:[o.jsx(Eu,{children:"회원가입"}),o.jsxs(t4,{children:[o.jsx(Go,{type:"email",placeholder:"이메일",value:l,$error:c5,onChange:F=>a(F.target.value),autoComplete:"email",disabled:c}),ti&&o.jsx(Pr,{children:"이메일 형식이 아닙니다"}),!ti&&so&&o.jsx(Pr,{children:"이미 가입된 이메일이에요"}),!ti&&d0&&!so&&(ht==null?void 0:ht.status)==="error"&&o.jsx(Pr,{children:"가능 여부를 확인하지 못했어요. 잠시 후 다시 확인해 보세요."}),!ti&&!so&&d0&&(ht==null?void 0:ht.status)==="loading"&&!c&&o.jsx(FI,{children:"사용 가능 여부 확인 중이에요…"}),!ti&&!so&&!c&&(!$e()&&sc||(ht==null?void 0:ht.status)==="available")&&o.jsx(BI,{children:"사용가능한 이메일입니다"}),c&&o.jsxs($u,{id:"signup-phone-anchor",children:[o.jsx(Go,{type:"tel",inputMode:"numeric",placeholder:"휴대폰 번호 (- 없이)",value:h,$error:h0,onChange:F=>g(F.target.value.replace(/\D/g,"")),autoComplete:"tel",disabled:_}),h0&&o.jsx(Pr,{children:"올바른 휴대폰 번호를 입력해 주세요"})]})]}),D&&o.jsx($u,{id:"signup-code-anchor",children:o.jsxs(CI,{children:[o.jsxs(GI,{children:[o.jsxs(fT,{children:[o.jsx(hT,{type:"text",inputMode:"numeric",placeholder:"인증번호",value:w,onChange:F=>v(F.target.value.replace(/\D/g,"").slice(0,6)),autoComplete:"one-time-code","aria-describedby":_?void 0:"signup-code-hint",disabled:_}),o.jsx(gT,{title:`남은 시간 ${L0}`,children:L0})]}),o.jsx(ZI,{type:"button",$highlight:h5,disabled:_,onClick:()=>void p5(),children:"다시받기"})]}),!_&&o.jsx($I,{id:"signup-code-hint",children:"휴대폰으로 발송된 6자리 인증번호를 입력해 주세요"})]})}),D&&_&&o.jsx($u,{id:"signup-password-anchor",children:o.jsxs(t4,{children:[o.jsxs(UI,{children:[o.jsx(VI,{type:"button","aria-label":ic?"프로필 사진 바꾸기":"프로필 사진 선택",onClick:()=>{var F;return(F=a0.current)==null?void 0:F.click()},children:ic?o.jsx(KI,{src:ic,alt:""}):o.jsx(WI,{"aria-hidden":!0,children:"+"})}),o.jsx(YI,{ref:a0,type:"file",accept:"image/*",onChange:F=>{var xe;const re=(xe=F.target.files)==null?void 0:xe[0];F.target.value="",re&&a5(re)}})]}),o.jsxs(n4,{$index:0,children:[o.jsxs(Tu,{children:[o.jsx(Mu,{type:b?"text":"password",placeholder:"비밀번호",value:C,$error:!!ac,onChange:F=>x(F.target.value),autoComplete:"new-password"}),o.jsx(Ru,{type:"button","aria-pressed":b,"aria-label":b?"비밀번호 숨기기":"비밀번호 보기",onClick:()=>$(F=>!F),children:b?"숨기기":"보기"})]}),ac&&o.jsx(r4,{children:ac})]}),o.jsxs(n4,{$index:1,children:[o.jsxs(Tu,{children:[o.jsx(Mu,{type:k?"text":"password",placeholder:"비밀번호 확인",value:m,$error:m0,onChange:F=>L(F.target.value),autoComplete:"new-password"}),o.jsx(Ru,{type:"button","aria-pressed":k,"aria-label":k?"비밀번호 확인 숨기기":"비밀번호 확인 보기",onClick:()=>S(F=>!F),children:k?"숨기기":"보기"})]}),m0&&o.jsx(r4,{children:"비밀번호가 일치하지 않습니다"})]}),o.jsx(HI,{children:"8자 이상, 영문+숫자 포함"})]})})]}),o.jsxs(yo,{children:[!c&&o.jsx(ui,{type:"button",$disabled:!p0,disabled:!p0,onClick:()=>u(!0),children:"다음"}),c&&!D&&o.jsx(ui,{type:"button",$disabled:!f0,disabled:!f0,onClick:()=>void d5(),children:"인증번호 받기"}),D&&!_&&o.jsx(ui,{type:"button",$disabled:!lc,disabled:!lc,onClick:()=>void f5(),children:"인증"}),D&&_&&o.jsx(ui,{type:"button",$disabled:!x0,disabled:!x0,onClick:()=>s("signup-region"),children:"다음"})]})]}),G&&o.jsx(Pu,{role:"status","aria-live":"polite",children:o.jsx(Iu,{children:"인증번호를 보냈어요!"})}),j==="success"&&o.jsx(Pu,{role:"status","aria-live":"polite",children:o.jsx(Iu,{children:"인증되었습니다"})}),j==="error"&&o.jsx(Pu,{role:"alert","aria-live":"assertive",children:o.jsx(Iu,{$variant:"error",children:"인증번호가 틀렸습니다"})}),i==="signup-region"&&o.jsx(oi,{children:o.jsxs(Lo,{children:[o.jsx(Eu,{children:"활동 지역을 설정해주세요"}),o.jsx(e4,{children:"주로 명상하는 지역을 선택해주세요"}),o.jsxs(qI,{children:[o.jsx(QI,{type:"button",disabled:Ie,"aria-busy":Ie,onClick:g5,children:Ie?"위치 확인 중…":"현재 위치로 지역 맞추기"}),Ze&&o.jsx(XI,{$error:Wt,children:Ze})]}),o.jsx(JI,{children:o.jsx(Ss,{maxMapHeight:"clamp(220px, calc(100dvh - 260px), 480px)",activeRegionId:I,onSelectRegion:F=>{T(F),N(!0)}})})]})}),i==="signup-interest"&&o.jsxs(oi,{children:[o.jsxs(Lo,{children:[o.jsx(lT,{children:"1/10"}),o.jsx(Eu,{children:"관심사를 선택해주세요"}),o.jsx(e4,{children:"좌우로 넘기며 관심있는 주제를 선택하세요"}),B&&o.jsx(Pr,{children:B}),o.jsx(rT,{children:"숲"}),o.jsx(iT,{type:"button","aria-label":"관심사 좋아요",children:"♡"})]}),o.jsx(yo,{children:o.jsx(oT,{type:"button",disabled:Ve,onClick:()=>void L5(),children:Ve?"가입 중…":"다음"})})]}),i==="signup-complete"&&o.jsxs(oi,{children:[o.jsxs(Lo,{children:[o.jsx(aT,{children:o.jsx(cT,{src:zl,alt:"명상 지도 로고"})}),o.jsx(uT,{children:"가입 완료!"}),o.jsx(dT,{children:"평온한 명상 여행을 시작하세요"})]}),o.jsx(yo,{children:o.jsx(ui,{type:"button",onClick:()=>{s("login")},children:"시작하기"})})]}),i==="signup-region"&&E&&o.jsx(Zx,{role:"dialog","aria-modal":"true","aria-label":"지역 확인",children:o.jsxs(qx,{children:[o.jsxs(i4,{children:[l5," 지역이 맞습니까?"]}),o.jsxs(tT,{children:[o.jsx(E1,{type:"button",onClick:()=>N(!1),children:"아니오"}),o.jsx(E1,{type:"button",$primary:!0,onClick:()=>{N(!1),s("signup-interest")},children:"네"})]})]})}),me!==null&&o.jsx(eT,{role:"dialog","aria-modal":"true","aria-labelledby":"terms-detail-title",onClick:()=>ke(null),children:o.jsxs(TT,{onClick:F=>F.stopPropagation(),children:[o.jsx(i4,{id:"terms-detail-title",children:u4[me].title}),o.jsx(RT,{children:u4[me].body}),o.jsx(nT,{onClick:()=>ke(null),children:"확인"})]})})]})]})},Qx={paragraph:"",h1:"# ",h2:"## ",h3:"### ",bullet:"- ",quote:"> "};let P1=1;function rR(e){const t=[["h3",/^###\s?/],["h2",/^##\s?/],["h1",/^#\s?/],["bullet",/^-\s?/],["quote",/^>\s?/]];for(const[n,r]of t)if(r.test(e))return{id:P1++,type:n,text:e.replace(r,"")};return{id:P1++,type:"paragraph",text:e}}function iR(e){const t=e.split(`
`);return(t.length?t:[""]).map(rR)}function oR(e){return e.map(t=>`${Qx[t.type]}${t.text}`).join(`
`)}const sR=d.div`
  min-height: 320px;
  padding: 16px 18px;
  border: 1px solid ${({theme:e})=>e.colors.primary200};
  border-radius: 14px;
  background: ${({theme:e})=>e.colors.white};
  cursor: text;
`,lR=d.div`
  position: relative;
  min-height: 1.8em;
  margin: ${({$type:e})=>e==="h1"?"12px 0 6px":e==="h2"?"10px 0 5px":"2px 0"};
  padding-left: ${({$type:e})=>e==="bullet"?"18px":e==="quote"?"14px":"0"};
  border-left: ${({$type:e})=>e==="quote"?"3px solid rgba(75, 0, 130, 0.25)":"0"};

  ${({$type:e})=>e==="bullet"&&_e`
      &::before {
        content: "•";
        position: absolute;
        left: 3px;
        top: 0.25em;
        color: ${({theme:t})=>t.colors.primary600};
      }
    `}
`,aR=d.textarea`
  display: block;
  width: 100%;
  min-height: 1.65em;
  padding: 0;
  border: 0;
  outline: 0;
  resize: none;
  overflow: hidden;
  background: transparent;
  color: ${({theme:e})=>e.colors.text900};
  font-family: inherit;
  line-height: 1.65;

  ${({$type:e})=>e==="h1"?_e`font-size: 1.45rem; font-weight: 800;`:e==="h2"?_e`font-size: 1.2rem; font-weight: 750;`:e==="h3"?_e`font-size: 1.05rem; font-weight: 700;`:K.body2}

  &::placeholder {
    color: ${({theme:e})=>e.colors.mutedMauve};
  }
`,cR=d.div`
  min-height: 1.65em;
  ${K.body2};
  line-height: 1.65;
`,uR=d.div`
  margin-top: 10px;
  color: ${({theme:e})=>e.colors.text700};
  ${K.caption};
`;function dR({value:e,onChange:t,placeholder:n="내용을 입력하세요. `/` 대신 #, -, > 뒤에 공백을 입력하면 블록이 바뀝니다."}){const[r,i]=y.useState(()=>iR(e)),[s,l]=y.useState(()=>{var p;return((p=r[0])==null?void 0:p.id)??null}),a=y.useRef(null),c=y.useMemo(()=>oR(r),[r]);y.useEffect(()=>{c!==e&&t(c)},[c,t,e]),y.useEffect(()=>{if(a.current==null)return;const p=a.current;a.current=null,requestAnimationFrame(()=>{const f=document.querySelector(`[data-md-block="${p}"]`);f==null||f.focus()})},[r]);const u=(p,f)=>{i(h=>h.map(g=>{if(g.id!==p)return g;if(g.type==="paragraph"){const v=[["### ","h3"],["## ","h2"],["# ","h1"],["- ","bullet"],["> ","quote"]].find(([C])=>f===C);if(v)return{...g,type:v[1],text:""}}return{...g,text:f}}))};return o.jsxs(o.Fragment,{children:[o.jsx(sR,{onClick:p=>{p.target===p.currentTarget&&r.length&&l(r[r.length-1].id)},children:r.map((p,f)=>{const h=s===p.id;return o.jsx(lR,{$type:p.type,children:h?o.jsx(aR,{"data-md-block":p.id,autoFocus:!0,rows:1,$type:p.type,value:p.text,placeholder:f===0?n:"",onFocus:g=>{l(p.id),g.currentTarget.style.height="auto",g.currentTarget.style.height=`${g.currentTarget.scrollHeight}px`},onChange:g=>{u(p.id,g.target.value),g.currentTarget.style.height="auto",g.currentTarget.style.height=`${g.currentTarget.scrollHeight}px`},onKeyDown:g=>{if(g.key==="Enter"&&!g.shiftKey){g.preventDefault();const w=P1++;i(v=>{const C=v.findIndex(m=>m.id===p.id),x=[...v];return x.splice(C+1,0,{id:w,type:"paragraph",text:""}),x}),l(w),a.current=w}else if(g.key==="Backspace"&&p.text===""&&p.type!=="paragraph")g.preventDefault(),i(w=>w.map(v=>v.id===p.id?{...v,type:"paragraph"}:v));else if(g.key==="Backspace"&&p.text===""&&r.length>1){g.preventDefault();const w=r[f-1];i(v=>v.filter(C=>C.id!==p.id)),w&&(l(w.id),a.current=w.id)}},onBlur:()=>{window.setTimeout(()=>{const g=document.activeElement;g instanceof HTMLTextAreaElement&&g.dataset.mdBlock||l(null)},0)}}):o.jsx(cR,{onClick:()=>l(p.id),children:o.jsx(io,{markdown:`${Qx[p.type]}${p.text}`,fallback:" "})})},p.id)})}),o.jsx(uR,{children:"`# ` 제목 · `## ` 작은 제목 · `- ` 목록 · `> ` 인용 · Shift+Enter 줄바꿈"})]})}const pR=["마음챙김","아트명상","숲 명상","호흡명상","걷기명상","소리명상"],h4=d.div`
  max-width: 980px;
  margin: 0 auto;
  padding: calc(18px + env(safe-area-inset-top, 0px)) 0 48px;
  color: ${({theme:e})=>e.colors.text900};
`,fR=d.header`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
`,hR=d.button`
  width: 38px;
  height: 38px;
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.text900};
  ${K.body1};
  cursor: pointer;
`,gR=d.h1`
  margin: 0;
  ${K.title};
`,mR=d.p`
  margin: 0 0 24px 50px;
  color: ${({theme:e})=>e.colors.text700};
  ${K.body2};

  @media (max-width: 640px) {
    margin-left: 0;
  }
`,nl=d.section`
  margin-top: 16px;
  padding: 22px;
  border: 1px solid rgba(75, 0, 130, 0.09);
  border-radius: 22px;
  background: ${({theme:e})=>e.colors.white};
  box-shadow: 0 8px 24px rgba(75, 0, 130, 0.05);

  @media (max-width: 640px) {
    padding: 18px 15px;
  }
`,rl=d.h2`
  margin: 0 0 6px;
  ${K.body1};
  font-weight: 700;
`,il=d.p`
  margin: 0 0 18px;
  color: ${({theme:e})=>e.colors.text700};
  ${K.caption};
`,wn=d.div`
  margin-top: 18px;
`,bn=d.label`
  display: block;
  margin-bottom: 8px;
  ${K.body2};
  font-weight: 700;
`,xR=d.p`
  margin: -4px 0 8px;
  color: ${({theme:e})=>e.colors.text700};
  ${K.caption};
`,ko=d.input`
  width: 100%;
  box-sizing: border-box;
  padding: 13px 14px;
  border: 1px solid ${({theme:e})=>e.colors.primary200};
  border-radius: 12px;
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.text900};
  ${K.body2};
`,Gu=d.textarea`
  width: 100%;
  min-height: 118px;
  box-sizing: border-box;
  resize: vertical;
  padding: 13px 14px;
  border: 1px solid ${({theme:e})=>e.colors.primary200};
  border-radius: 12px;
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.text900};
  font-family: inherit;
  ${K.body2};
`,g4=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,m4=d.button`
  padding: 8px 11px;
  border: 1px solid
    ${({theme:e,$selected:t})=>t?e.colors.primary600:e.colors.primary200};
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e,$selected:t})=>t?e.colors.primary600:e.colors.white};
  color: ${({theme:e,$selected:t})=>t?e.colors.white:e.colors.text700};
  ${K.caption};
  cursor: pointer;
`,LR=d.div`
  display: grid;
  grid-template-columns: minmax(260px, 0.9fr) minmax(240px, 1.1fr);
  gap: 20px;
  align-items: center;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`,yR=d.div`
  padding: 12px;
  border-radius: 18px;
  background: ${({theme:e})=>e.colors.primary50};
`,vR=d.div`
  color: ${({theme:e})=>e.colors.text700};
  ${K.body2};
`,wR=d.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`,x4=d.button`
  padding: 14px;
  border: 1px solid
    ${({theme:e,$selected:t})=>t?e.colors.primary600:e.colors.primary200};
  border-radius: 13px;
  background: ${({theme:e,$selected:t})=>t?e.colors.primary50:e.colors.white};
  color: ${({theme:e})=>e.colors.text900};
  ${K.body2};
  cursor: pointer;
`,bR=d.div`
  position: sticky;
  bottom: calc(56px + env(safe-area-inset-bottom, 0px));
  z-index: 5;
  margin-top: 20px;
  padding: 12px;
  border-radius: 18px;
  background: rgba(255, 250, 248, 0.94);
  backdrop-filter: blur(12px);
`,kR=d.button`
  width: 100%;
  padding: 15px;
  border: 0;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary600};
  color: white;
  ${K.buttonMd};
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,jR=d.p`
  margin: 10px 0 0;
  color: ${({theme:e,$error:t})=>t?"#c5221f":e.colors.primary600};
  text-align: center;
  ${K.caption};
`,SR=d.p`
  padding: 80px 20px;
  text-align: center;
  color: ${({theme:e})=>e.colors.text700};
  ${K.body2};
`,CR=e=>({name:e.displayName||e.username.split("@")[0]||"",intro:"",degrees:[],certificates:[],careers:[],classTypes:[],regionIds:e.regionIds??[],hasCenter:!1,centerName:"",centerAddress:"",businessRegistrationNumber:"",businessOpeningDate:""}),Zu=e=>e.split(`
`).map(t=>t.trim()).filter(Boolean);function $R(){const e=yt(),t=Xt(v=>v.accessToken),[n,r]=y.useState(null),[i,s]=y.useState(null),[l,a]=y.useState(!0),[c,u]=y.useState(!1),[p,f]=y.useState(null);y.useEffect(()=>{if(!t){e("/profile",{replace:!0});return}Promise.all([lI(),aI()]).then(([v,C])=>{r(v),s({...CR(v),...C??{}})}).catch(v=>f({text:v instanceof Error?v.message:"정보를 불러오지 못했어요.",error:!0})).finally(()=>a(!1))},[t,e]);const h=y.useMemo(()=>(i==null?void 0:i.regionIds.map(oo))??[],[i==null?void 0:i.regionIds]);if(l||!i||!n)return o.jsx(h4,{children:o.jsx(SR,{children:(p==null?void 0:p.text)??"전문가 정보를 불러오는 중…"})});const g=(v,C)=>{const x=i[v];s({...i,[v]:x.includes(C)?x.filter(m=>m!==C):[...x,C]})},w=i.name.trim().length>0&&i.intro.trim().length>0&&i.regionIds.length>0;return o.jsxs(h4,{children:[o.jsxs(fR,{children:[o.jsx(hR,{type:"button",onClick:()=>e("/profile"),"aria-label":"마이페이지로 돌아가기",children:"‹"}),o.jsx(gR,{children:n.expertProfileId?"전문가 프로필 수정":"명상 전문가로 전환"})]}),o.jsx(mR,{children:"작성한 내용은 명상 전문가 목록과 상세 페이지에 공개됩니다."}),o.jsxs(nl,{children:[o.jsx(rl,{children:"기본 정보"}),o.jsx(il,{children:"전문가 페이지에 표시될 활동명과 소개를 작성해 주세요."}),o.jsxs(wn,{children:[o.jsx(bn,{htmlFor:"expert-name",children:"활동명"}),o.jsx(ko,{id:"expert-name",value:i.name,maxLength:80,onChange:v=>s({...i,name:v.target.value})})]}),o.jsxs(wn,{children:[o.jsx(bn,{htmlFor:"expert-intro",children:"자기소개"}),o.jsx(xR,{children:"노션처럼 문법을 입력하면 해당 줄의 모양이 바로 바뀝니다."}),o.jsx(dR,{value:i.intro,onChange:v=>s(C=>C&&{...C,intro:v}),placeholder:"명상을 시작하게 된 계기와 수업 철학을 소개해 주세요."})]})]}),o.jsxs(nl,{children:[o.jsx(rl,{children:"이력과 전문 분야"}),o.jsx(il,{children:"각 항목은 한 줄에 하나씩 입력해 주세요."}),o.jsxs(wn,{children:[o.jsx(bn,{htmlFor:"expert-degrees",children:"학위"}),o.jsx(Gu,{id:"expert-degrees",value:i.degrees.join(`
`),onChange:v=>s({...i,degrees:Zu(v.target.value)}),placeholder:`○○대학교 상담심리학 석사
△△대학교 명상학 전공`})]}),o.jsxs(wn,{children:[o.jsx(bn,{htmlFor:"expert-certificates",children:"자격증·이수 교육과정"}),o.jsx(Gu,{id:"expert-certificates",value:i.certificates.join(`
`),onChange:v=>s({...i,certificates:Zu(v.target.value)})})]}),o.jsxs(wn,{children:[o.jsx(bn,{htmlFor:"expert-careers",children:"경력"}),o.jsx(Gu,{id:"expert-careers",value:i.careers.join(`
`),onChange:v=>s({...i,careers:Zu(v.target.value)})})]}),o.jsxs(wn,{children:[o.jsx(bn,{children:"클래스 종류"}),o.jsx(g4,{children:pR.map(v=>o.jsx(m4,{type:"button",$selected:i.classTypes.includes(v),onClick:()=>g("classTypes",v),children:v},v))})]})]}),o.jsxs(nl,{children:[o.jsx(rl,{children:"주 활동 지역"}),o.jsx(il,{children:"지도에서 활동 가능한 지역을 여러 곳 선택할 수 있습니다."}),o.jsxs(LR,{children:[o.jsx(yR,{children:o.jsx(Ss,{activeRegionIds:i.regionIds,maxMapHeight:"460px",onSelectRegion:v=>g("regionIds",v)})}),o.jsxs(vR,{children:[o.jsxs("strong",{children:[h.length,"개 지역 선택됨"]}),o.jsx("p",{children:"선택된 지역을 다시 누르면 해제됩니다."}),o.jsx(g4,{children:Gr.filter(v=>i.regionIds.includes(v.id)).map(v=>o.jsxs(m4,{type:"button",$selected:!0,onClick:()=>g("regionIds",v.id),children:[v.name," ×"]},v.id))})]})]})]}),o.jsxs(nl,{children:[o.jsx(rl,{children:"센터 정보"}),o.jsx(il,{children:"본인 소유 센터가 있다면 인증 정보를 함께 입력해 주세요."}),o.jsxs(wR,{children:[o.jsx(x4,{type:"button",$selected:!i.hasCenter,onClick:()=>s({...i,hasCenter:!1}),children:"센터 없음"}),o.jsx(x4,{type:"button",$selected:i.hasCenter,onClick:()=>s({...i,hasCenter:!0}),children:"센터 있음"})]}),i.hasCenter&&o.jsxs(o.Fragment,{children:[o.jsxs(wn,{children:[o.jsx(bn,{htmlFor:"center-name",children:"센터명"}),o.jsx(ko,{id:"center-name",value:i.centerName,onChange:v=>s({...i,centerName:v.target.value})})]}),o.jsxs(wn,{children:[o.jsx(bn,{htmlFor:"center-address",children:"센터 위치"}),o.jsx(ko,{id:"center-address",value:i.centerAddress,onChange:v=>s({...i,centerAddress:v.target.value})})]}),o.jsxs(wn,{children:[o.jsx(bn,{htmlFor:"business-number",children:"사업자등록번호"}),o.jsx(ko,{id:"business-number",inputMode:"numeric",value:i.businessRegistrationNumber,onChange:v=>s({...i,businessRegistrationNumber:v.target.value.replace(/[^\d-]/g,"")})})]}),o.jsxs(wn,{children:[o.jsx(bn,{htmlFor:"opening-date",children:"개업일자"}),o.jsx(ko,{id:"opening-date",type:"date",value:i.businessOpeningDate,onChange:v=>s({...i,businessOpeningDate:v.target.value})})]})]})]}),o.jsxs(bR,{children:[o.jsx(kR,{type:"button",disabled:c||!w,onClick:()=>{u(!0),f(null),cI(i).then(v=>{r(v),f({text:"전문가 프로필을 저장했어요."}),window.setTimeout(()=>e("/profile"),700)}).catch(v=>f({text:v instanceof Error?v.message:"저장하지 못했어요.",error:!0})).finally(()=>u(!1))},children:c?"저장 중…":n.expertProfileId?"전문가 정보 저장":"명상 전문가로 전환"}),p&&o.jsx(jR,{$error:p.error,children:p.text})]})]})}const ER=d.div`
  min-height: 40vh;
  display: grid;
  place-items: center;
  padding: 2rem;
  ${K.body1};
  color: ${({theme:e})=>e.colors.text700};
`,PR=()=>{const[e]=q3(),t=yt();return y.useEffect(()=>{if(e.get("error")){t("/profile",{replace:!0});return}const r=e.get("oauthSignupTicket");if(r){const i=e.get("email")??"",s=new URLSearchParams({signupOAuth:"1",oauthSignupTicket:r,email:i}),l=e.get("picture");l&&s.set("picture",l),t(`/profile?${s.toString()}`,{replace:!0});return}Xt.getState().bootstrapAuth().then(()=>Or.getState().pullFromServer()).finally(()=>t("/profile",{replace:!0}))},[t,e]),o.jsx(ER,{children:"로그인 처리 중…"})},IR=d.div`
  color: ${({theme:e})=>e.colors.text900};
`,L4=d.section`
  padding: 48px 20px;

  @media (max-width: 960px) {
    padding: 36px 14px;
  }
`,y4=d.div`
  max-width: 1100px;
  margin: 0 auto;
`,TR=d.section`
  padding: 64px 20px calc(56px + env(safe-area-inset-bottom, 0px));
  background: linear-gradient(180deg, #ffffff 0%, ${({theme:e})=>e.colors.primary50} 100%);

  @media (max-width: 960px) {
    padding: 48px 14px calc(40px + env(safe-area-inset-bottom, 0px));
  }
`,RR=d.div`
  max-width: 1100px;
  margin: 0 auto;
  background: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 36px;
  box-shadow: ${({theme:e})=>e.shadow.soft};
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  display: grid;
  gap: 16px;
`,MR=d.h1`
  font-size: 3rem;
  line-height: 1.3;
`,zR=d.p`
  font-size: 1.3rem;
  color: ${({theme:e})=>e.colors.text700};
`,AR=d(to)`
  justify-self: start;
  border: none;
  background: ${({theme:e})=>e.colors.primary600};
  color: #fff;
  padding: 10px 16px;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  font-size: 1.1rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 26px rgba(103, 59, 183, 0.3);
  }
`,_R=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`,qu=d.div`
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 18px;
  box-shadow: ${({theme:e})=>e.shadow.soft};
`,Qu=d.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text700};
`,Xu=d.p`
  font-size: 2.2rem;
  font-weight: 700;
  margin-top: 8px;
`,NR=d.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`,ol=d.div`
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 24px;
  box-shadow: ${({theme:e})=>e.shadow.soft};
  display: grid;
  gap: 10px;
`,sl=d.div`
  width: 44px;
  height: 44px;
  border-radius: 16px;
  background: ${({theme:e})=>e.colors.primary100};
  display: grid;
  place-items: center;

  svg {
    width: 22px;
    height: 22px;
    stroke: ${({theme:e})=>e.colors.primary700};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }
`,OR=d.section`
  padding: 48px 20px;
  background: ${({theme:e})=>e.colors.primary600};
  color: #fff;
`,DR=d.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,BR=d.button`
  border: none;
  background: #fff;
  color: ${({theme:e})=>e.colors.primary700};
  padding: 10px 18px;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  font-size: 1.1rem;
`,FR=()=>o.jsxs(IR,{children:[o.jsx(TR,{children:o.jsxs(RR,{children:[o.jsx(MR,{children:"누구나 원하는 곳에서, 더 깊은 힐링 명상"}),o.jsx(zR,{children:"전국 힐링명상지도는 지역별 명상센터를 쉽고 빠르게 찾을 수 있는 플랫폼입니다."}),o.jsx(AR,{to:"/",children:"명상센터 찾아보기"})]})}),o.jsx(L4,{children:o.jsx(y4,{children:o.jsxs(_R,{children:[o.jsxs(qu,{children:[o.jsx(Qu,{children:"누적 명상센터"}),o.jsx(Xu,{children:"1,200+"})]}),o.jsxs(qu,{children:[o.jsx(Qu,{children:"지역 커버리지"}),o.jsx(Xu,{children:"전국 17개"})]}),o.jsxs(qu,{children:[o.jsx(Qu,{children:"누적 검색 수"}),o.jsx(Xu,{children:"210만+"})]})]})})}),o.jsx(L4,{children:o.jsx(y4,{children:o.jsxs(NR,{children:[o.jsxs(ol,{children:[o.jsx(sl,{children:o.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[o.jsx("path",{d:"M3 11l9-7 9 7"}),o.jsx("path",{d:"M5 10v10h14V10"})]})}),o.jsx("h3",{children:"지도 기반 탐색"}),o.jsx("p",{children:"대한민국 지도로 지역을 선택하고, 명상센터를 한눈에 찾아보세요."})]}),o.jsxs(ol,{children:[o.jsx(sl,{children:o.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:o.jsx("path",{d:"M4 6h16M4 12h10M4 18h6"})})}),o.jsx("h3",{children:"맞춤형 필터"}),o.jsx("p",{children:"해시태그와 정렬 기준으로 내게 맞는 명상센터를 빠르게 추천해요."})]}),o.jsxs(ol,{children:[o.jsx(sl,{children:o.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[o.jsx("circle",{cx:"12",cy:"8",r:"3"}),o.jsx("path",{d:"M6 20c1.5-3 4-5 6-5s4.5 2 6 5"})]})}),o.jsx("h3",{children:"상세 정보 제공"}),o.jsx("p",{children:"주소, 프로그램, 운영 단체 정보까지 한 페이지에서 확인하세요."})]}),o.jsxs(ol,{children:[o.jsx(sl,{children:o.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[o.jsx("circle",{cx:"10",cy:"10",r:"6"}),o.jsx("line",{x1:"14.5",y1:"14.5",x2:"21",y2:"21"})]})}),o.jsx("h3",{children:"검색 경험"}),o.jsx("p",{children:"검색어 입력만으로 관련 명상센터를 부드럽게 이어 보여드립니다."})]})]})})}),o.jsx(OR,{children:o.jsxs(DR,{children:[o.jsxs("div",{children:[o.jsx("h2",{children:"명상센터 운영자라면 함께해요"}),o.jsx("p",{children:"전국 힐링명상지도와 함께 더 많은 사람에게 명상 경험을 전달하세요."})]}),o.jsx(BR,{type:"button",children:"등록 문의하기"})]})})]}),HR=d.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
  background: linear-gradient(180deg, ${({theme:e})=>e.colors.primary50} 0%, ${({theme:e})=>e.colors.warmCream} 100%);
`,UR=d.div`
  font-size: clamp(5rem, 18vw, 10rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.02em;
  background: linear-gradient(180deg, ${({theme:e})=>e.colors.primary300} 0%, ${({theme:e})=>e.colors.primary500} 40%, ${({theme:e})=>e.colors.primary600} 70%, ${({theme:e})=>e.colors.primary800} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 2px 2px rgba(75, 0, 130, 0.25))
          drop-shadow(0 4px 4px rgba(75, 0, 130, 0.15))
          drop-shadow(0 8px 16px rgba(0, 0, 0, 0.1));
  transform: perspective(200px) rotateX(5deg);
  margin-bottom: 16px;
`,VR=d.p`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.primary700};
  margin: 0 0 8px;
`,WR=d.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.primary400};
  margin: 0 0 32px;
  text-align: center;
  line-height: 1.5;
`,KR=d.button`
  padding: 14px 28px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  background: ${({theme:e})=>e.colors.primary600};
  border: none;
  border-radius: ${({theme:e})=>e.radii.pill};
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease;

  &:hover {
    background: ${({theme:e})=>e.colors.primary700};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: 2px;
  }
`,YR=()=>{const e=yt();return o.jsxs(HR,{children:[o.jsx(UR,{children:"404"}),o.jsx(VR,{children:"Oops!"}),o.jsx(WR,{children:"페이지를 찾을 수 없습니다."}),o.jsx(KR,{type:"button",onClick:()=>e("/"),children:"홈으로"})]})};function Xx(e,t){if(e){try{const n=JSON.parse(e);if(n!=null&&n.message)return n.message;if(n!=null&&n.code)return n.code}catch{}return e}return`HTTP ${t}`}async function it(e){if(!e.ok)throw new Error(Xx(await e.text(),e.status));if(e.status!==204)return e.json()}async function GR(e,t){const n=await he("/admin/auth/login",{method:"POST",body:JSON.stringify({loginId:e,password:t})});if(!n.ok)throw new Error(Xx(await n.text(),n.status))}async function ZR(){return it(await he("/admin/metrics/traffic"))}async function qR(e,t){const n=new URLSearchParams({granularity:e,limit:String(t)});return it(await he(`/admin/metrics/http-traffic?${n.toString()}`))}async function QR(e,t){const n=new URLSearchParams({granularity:e,limit:String(t)});return it(await he(`/admin/metrics/member-traffic?${n.toString()}`))}async function XR(e,t,n=12){const r=new URLSearchParams({granularity:e,limit:String(t),top:String(n)});return it(await he(`/admin/metrics/api-traffic?${r.toString()}`))}async function JR(){return it(await he("/admin/places"))}function eM(e){const{id:t,...n}=e;return n}async function tM(e,t,n){const r={regionId:t,data:eM(n)};return it(e?await he(`/admin/places/${encodeURIComponent(e)}`,{method:"PUT",body:JSON.stringify(r)}):await he("/admin/places",{method:"POST",body:JSON.stringify(r)}))}async function nM(e){await it(await he(`/admin/places/${encodeURIComponent(e)}`,{method:"DELETE"}))}async function rM(){return it(await he("/admin/experts"))}async function iM(e,t){const n={data:Jx(t)};return it(e?await he(`/admin/experts/${encodeURIComponent(e)}`,{method:"PUT",body:JSON.stringify(n)}):await he("/admin/experts",{method:"POST",body:JSON.stringify(n)}))}function Jx(e){const{id:t,...n}=e;return n}async function oM(e){const t=new URLSearchParams({loginId:e});return(await it(await he(`/admin/experts/login-id-availability?${t.toString()}`))).available}async function sM(e){const t={loginId:e.loginId,email:e.email,password:e.password,data:Jx(e.data)};return it(await he("/admin/experts/accounts",{method:"POST",body:JSON.stringify(t)}))}async function lM(e){await it(await he(`/admin/experts/${encodeURIComponent(e)}`,{method:"DELETE"}))}async function aM(){return it(await he("/admin/notices"))}async function cM(e,t){const n={payload:uM(t)};return it(e?await he(`/admin/notices/${encodeURIComponent(e)}`,{method:"PUT",body:JSON.stringify(n)}):await he("/admin/notices",{method:"POST",body:JSON.stringify(n)}))}function uM(e){const{id:t,...n}=e;return n}async function dM(e){await it(await he(`/admin/notices/${encodeURIComponent(e)}`,{method:"DELETE"}))}async function e5(e){const t=new FormData;t.append("file",e);const n=await he("/storage/objects",{method:"POST",body:t});return(await it(n)).url}function pM(e){return{id:"",regionId:e,name:"",shortDescription:"",description:"",address:"",thumbnailUrl:"",photos:[],hashtags:[],themes:[],hasTempleStay:!1,duration:"",admissionFee:"",venueKind:"명상지",organization:{name:""},externalLink:"",detailSections:[],facilities:[],programs:[],instructors:[]}}function fM(e){const t=e.reduce((n,r)=>{const i=Number.parseInt(r.id,10);return Number.isFinite(i)?Math.max(n,i):n},0);return String(t+1)}function ll(){return{id:"",name:"",avatarUrl:"",specialties:[],regionIds:[],intro:"",degrees:[],certificates:[],careers:[],classTypes:[],hasCenter:!1,programs:[],reviews:[]}}const hM=new Set(["ADMIN","DEV","EMPLOYEE"]),zi=Ji(e=>({username:null,role:null,ready:!1,authenticated:!1,bootstrap:async()=>{const t=$e();if(!t){e({username:null,role:null,ready:!0,authenticated:!1});return}try{const n=await fetch(`${t}/admin/auth/me`,{credentials:"include"});if(n.ok){const r=await n.json(),i=r.role??"";if(r.username&&hM.has(i)){e({username:r.username,role:i,ready:!0,authenticated:!0});return}}}catch{}e({username:null,role:null,ready:!0,authenticated:!1})},logout:async()=>{const t=$e();if(t)try{await fetch(`${t}/admin/auth/logout`,{method:"POST",credentials:"include"})}catch{}e({username:null,role:null,ready:!0,authenticated:!1})}})),Ge={colors:{primary50:"#f3eef8",primary100:"#e6dcf0",primary200:"#c9b8e0",primary300:"#a88bca",primary400:"#7a5aab",primary500:"#5c3d8f",primary600:"#4B0082",primary700:"#3d0069",primary800:"#2f0051",primary900:"#22003a",white:"#FFFFFF",warmCream:"#FFFAF8",buddingPeach:"#F5D8D0",charcoal:"#3D3D3D",warmGray:"#6B6B6B",text900:"#3D3D3D",text700:"#6B6B6B",border200:"#9B8A99",mutedMauve:"#9B8A99",dustyGold:"#C9A962",dustyRose:"#C9A090",bg50:"#FFFAF8",bg100:"#F5D8D0"},shadow:{soft:"0 12px 30px rgba(75, 0, 130, 0.1)"},radii:{pill:"999px",md:"12px",lg:"16px"}},gM=d.div`
  display: flex;
  min-height: 100vh;
  background: #0f0f12;
  color: #f4f4f5;
`,mM=d.aside`
  width: ${({$open:e})=>e?"240px":"0"};
  overflow: hidden;
  transition: width 0.2s ease;
  background: #18181b;
  border-right: 1px solid #27272a;
  flex-shrink: 0;
`,xM=d.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`,LM=d.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  border-bottom: 1px solid #27272a;
  background: #111114;
`,yM=d.main`
  flex: 1;
  padding: 20px;
  overflow: auto;
`,vM=d.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 10px 14px;
  border: none;
  background: ${({$active:e})=>e?"rgba(75, 0, 130, 0.32)":"transparent"};
  color: ${({$active:e})=>e?"#fff":"#a1a1aa"};
  font-size: 14px;
  font-weight: ${({$active:e})=>e?600:400};
  cursor: pointer;
  border-left: 3px solid ${({$active:e})=>e?Ge.colors.primary500:"transparent"};
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
  }
`,xn=d.div`
  background: linear-gradient(180deg, #1b1b1f 0%, #161619 100%);
  border: 1px solid #2a2a30;
  border-radius: ${Ge.radii.lg};
  padding: 16px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02), 0 8px 24px rgba(0, 0, 0, 0.22);
`;d.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 12px;
`;d.div`
  background: #111114;
  border: 1px solid #27272a;
  border-radius: ${Ge.radii.md};
  padding: 14px;
  transition: border-color 0.15s ease, transform 0.15s ease;

  &:hover {
    border-color: #3f3f46;
    transform: translateY(-1px);
  }

  strong {
    display: block;
    font-size: 22px;
    margin-top: 4px;
    color: #fafafa;
    font-variant-numeric: tabular-nums;
  }

  span {
    font-size: 12px;
    color: #a1a1aa;
  }
`;const o0=d.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th,
  td {
    padding: 10px 12px;
    border-bottom: 1px solid #27272a;
    text-align: left;
  }

  th {
    color: #8b8b93;
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  tbody tr {
    cursor: pointer;
    transition: background 0.12s ease;
  }

  tr:hover td {
    background: rgba(255, 255, 255, 0.04);
  }
`,ze=d.button`
  padding: 8px 14px;
  border-radius: ${Ge.radii.md};
  border: 1px solid
    ${({$variant:e})=>e==="danger"?"#7f1d1d":e==="primary"?Ge.colors.primary600:"#3f3f46"};
  background: ${({$variant:e})=>e==="danger"?"#991b1b":e==="primary"?Ge.colors.primary600:"transparent"};
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: filter 0.15s ease, transform 0.06s ease, background 0.15s ease, border-color 0.15s ease;

  &:hover:not(:disabled) {
    filter: brightness(1.12);
    background: ${({$variant:e})=>e==="ghost"?"rgba(255, 255, 255, 0.05)":void 0};
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,tt=d.input`
  width: 100%;
  padding: 8px 10px;
  border-radius: ${Ge.radii.md};
  border: 1px solid #3f3f46;
  background: #09090b;
  color: #fff;
  font-size: 14px;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &::placeholder {
    color: #52525b;
  }

  &:focus {
    outline: none;
    border-color: ${Ge.colors.primary500};
    box-shadow: 0 0 0 3px rgba(75, 0, 130, 0.25);
  }
`,Dn=d.textarea`
  width: 100%;
  min-height: 280px;
  padding: 10px;
  border-radius: ${Ge.radii.md};
  border: 1px solid #3f3f46;
  background: #09090b;
  color: #e4e4e7;
  font-family: ui-monospace, monospace;
  font-size: 12px;
  line-height: 1.5;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:focus {
    outline: none;
    border-color: ${Ge.colors.primary500};
    box-shadow: 0 0 0 3px rgba(75, 0, 130, 0.25);
  }
`,de=d.label`
  display: block;
  font-size: 12px;
  color: #a1a1aa;
  margin-bottom: 4px;
`,pe=d.div`
  margin-bottom: 12px;
`,Zr=d.p`
  color: #f87171;
  font-size: 13px;
  margin: 8px 0;
`;d.iframe`
  width: 100%;
  height: min(70vh, 720px);
  border: 0;
  border-radius: ${Ge.radii.lg};
  background: #000;
`;const wM=d.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #0f0f12;
  padding: 24px;
`,bM=d.h1`
  margin: 0 0 8px;
  font-size: 22px;
  color: #fff;
`;function kM(){const e=yt(),t=zi(u=>u.bootstrap),[n,r]=y.useState(""),[i,s]=y.useState(""),[l,a]=y.useState(!1),c=async u=>{u.preventDefault(),a(!0);try{if(await GR(n.trim(),i),await t(),!zi.getState().authenticated){ct.error("스태프(ADMIN/DEV/EMPLOYEE) 계정만 접근할 수 있습니다.");return}e("/admin",{replace:!0})}catch(p){ct.error(p instanceof Error?p.message:"로그인에 실패했습니다.")}finally{a(!1)}};return o.jsx(wM,{children:o.jsxs(xn,{style:{width:"100%",maxWidth:400},children:[o.jsx(bM,{children:"Admin 로그인"}),o.jsxs("form",{onSubmit:c,children:[o.jsxs(pe,{children:[o.jsx(de,{children:"아이디"}),o.jsx(tt,{value:n,onChange:u=>r(u.target.value),autoComplete:"username",required:!0})]}),o.jsxs(pe,{children:[o.jsx(de,{children:"비밀번호"}),o.jsx(tt,{value:i,onChange:u=>s(u.target.value),type:"password",autoComplete:"current-password",required:!0})]}),o.jsx(ze,{$variant:"primary",type:"submit",disabled:l,style:{width:"100%",marginTop:8},children:l?"로그인 중…":"로그인"})]})]})})}const jM=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({$compact:e})=>e?"8px":"12px"};
`,SM=d(xn)`
  width: 100%;
  padding: ${({$compact:e})=>e?"12px":"14px 12px"};
`,CM=d.h3`
  margin: 0;
  font-size: ${({$compact:e})=>e?"13px":"15px"};
  font-weight: 600;
  word-break: break-all;
`,$M=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: ${({$compact:e})=>e?"8px":"12px"};
`,Ju=d.div`
  display: inline-flex;
  align-items: baseline;
  gap: 4px;
  padding: ${({$compact:e})=>e?"4px 9px":"5px 11px"};
  border-radius: ${Ge.radii.pill};
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-size: ${({$compact:e})=>e?"11px":"12px"};
  color: #a1a1aa;

  strong {
    color: #fafafa;
    font-size: ${({$compact:e})=>e?"12px":"13px"};
    font-variant-numeric: tabular-nums;
  }
`,EM=d.div`
  width: 100%;
  min-width: 0;
`,PM=d.svg`
  display: block;
  width: 100%;
  overflow: visible;
  touch-action: none;
`,IM=Oe`
  from { stroke-dashoffset: 1; }
  to { stroke-dashoffset: 0; }
`,TM=Oe`
  from { opacity: 0; }
  to { opacity: 1; }
`,RM=d.path`
  stroke-dasharray: 1;
  stroke-dashoffset: 0;
  animation: ${IM} 0.7s ease forwards;
`,MM=d.path`
  animation: ${TM} 0.7s ease forwards;
`,zM=d.div`
  position: absolute;
  pointer-events: none;
  padding: 7px 11px;
  border-radius: 10px;
  background: rgba(9, 9, 11, 0.92);
  border: 1px solid #3f3f46;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(6px);
  color: #fff;
  white-space: nowrap;
  transform: translate(-50%, calc(-100% - 12px));
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 2px;
  transition: left 0.08s ease, top 0.08s ease;

  .tip-label {
    font-size: 11px;
    color: #a1a1aa;
  }
  .tip-value {
    font-size: 14px;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
  }
`,v4=d.p`
  margin: 0;
  padding: ${({$compact:e})=>e?"20px 0":"32px 0"};
  text-align: center;
  color: #71717a;
  font-size: ${({$compact:e})=>e?"12px":"13px"};
`,AM={top:28,right:8,bottom:36,left:36},_M={top:24,right:6,bottom:32,left:32};function NM(e){if(e<=0)return 4;const t=10**Math.floor(Math.log10(e)),n=e/t;return(n<=1?1:n<=2?2:n<=5?5:10)*t}function OM(e){const t=e.match(/^(\d{4})/);return t?Number(t[1]):new Date().getFullYear()}function DM(e,t){if(t==="month"){const r=e.split("-");return r.length>=2?`${Number(r[1])}월`:e}const n=e.split("-");return n.length>=3?`${Number(n[1])}/${Number(n[2])}`:e}function BM(e){return e==="teal"?{stroke:"#2dd4bf",dot:"#5eead4"}:e==="gold"?{stroke:"#fbbf24",dot:"#fde68a"}:{stroke:Ge.colors.primary300,dot:Ge.colors.primary200}}function FM(e,t,n){const r=[];for(let l=1;l<e.length;l++)e[l].year!==e[l-1].year&&r.push({x:(e[l-1].x+e[l].x)/2,yearBefore:e[l-1].year,yearAfter:e[l].year});const i=[];for(const l of e)i[i.length-1]!==l.year&&i.push(l.year);return{yearBands:i.map((l,a)=>({year:l,xStart:a===0?t:r[a-1].x,xEnd:a===i.length-1?n:r[a].x})),dividers:r}}function al({title:e,series:t,loading:n,error:r,compact:i=!1,accent:s="purple",unit:l="회",emptyMessage:a="아직 표시할 데이터가 없습니다.",hideSummary:c=!1}){const u=y.useRef(null),[p,f]=y.useState(960),[h,g]=y.useState(null),w=y.useId().replace(/:/g,""),v=i?168:260,C=i?_M:AM,x=BM(s);y.useEffect(()=>{const k=u.current;if(!k)return;const S=()=>{const R=k.getBoundingClientRect().width;R>0&&f(R)};S();const M=new ResizeObserver(S);return M.observe(k),window.addEventListener("resize",S),()=>{M.disconnect(),window.removeEventListener("resize",S)}},[t,n]);const m=y.useMemo(()=>{const k=(t==null?void 0:t.points)??[],S=(t==null?void 0:t.granularity)??"day",M=Math.max(120,p-C.left-C.right),R=v-C.top-C.bottom,I=(t==null?void 0:t.peak)??0,T=NM(I),E=k.length,N=k.map((G,te)=>{const J=E<=1?C.left+M/2:C.left+te/(E-1)*M,Y=T>0?G.count/T:0,ee=C.top+R-Y*R;return{key:G.key,label:G.label,count:G.count,x:J,y:ee,year:OM(G.key)}}),D=N.length>0?N.map((G,te)=>`${te===0?"M":"L"} ${G.x.toFixed(2)} ${G.y.toFixed(2)}`).join(" "):"",H=C.top+R,_=C.left,z=p-C.right,A=N.length>0?`${D} L ${N[N.length-1].x.toFixed(2)} ${H} L ${N[0].x.toFixed(2)} ${H} Z`:"",{yearBands:O,dividers:j}=FM(N,_,z),Z=4,Q=Array.from({length:Z+1},(G,te)=>{const J=Math.round(T*te/Z),Y=C.top+R-(T>0?J/T*R:0);return{value:J,y:Y}}),P=E<=12?1:E<=24?2:E<=60?5:7;return{plotted:N,linePath:D,areaPath:A,yearBands:O,dividers:j,yTicks:Q,yMax:T,plotH:R,baseY:H,granularity:S,labelEvery:P}},[v,C,t,p]),L=h?m.plotted.find(k=>k.key===h)??null:null,b=k=>{var T;const S=(T=u.current)==null?void 0:T.getBoundingClientRect();if(!S||m.plotted.length===0)return;const M=k.clientX-S.left;let R=m.plotted[0],I=1/0;for(const E of m.plotted){const N=Math.abs(E.x-M);N<I&&(I=N,R=E)}R.key!==h&&g(R.key)},$=`${m.granularity}-${m.plotted.length}-${(t==null?void 0:t.total)??0}`;return o.jsxs(SM,{$compact:i,children:[o.jsx(jM,{$compact:i,children:o.jsx(CM,{$compact:i,children:e})}),r&&o.jsx(Zr,{children:r}),t&&!c&&o.jsxs($M,{$compact:i,children:[o.jsxs(Ju,{$compact:i,children:["합계",o.jsx("strong",{children:t.total.toLocaleString()})]}),o.jsxs(Ju,{$compact:i,children:["평균",o.jsx("strong",{children:t.average.toLocaleString()})]}),o.jsxs(Ju,{$compact:i,children:["최대",o.jsx("strong",{children:t.peak.toLocaleString()})]})]}),n&&!t?o.jsx(v4,{$compact:i,children:"그래프 데이터를 불러오는 중…"}):m.plotted.length===0?o.jsx(v4,{$compact:i,children:a}):o.jsxs(EM,{ref:u,style:{position:"relative",height:v},children:[o.jsxs(PM,{viewBox:`0 0 ${p} ${v}`,style:{height:v},role:"img","aria-label":e,onMouseMove:b,onMouseLeave:()=>g(null),children:[o.jsx("defs",{children:o.jsxs("linearGradient",{id:`area-${w}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[o.jsx("stop",{offset:"0%",stopColor:x.stroke,stopOpacity:.38}),o.jsx("stop",{offset:"70%",stopColor:x.stroke,stopOpacity:.06}),o.jsx("stop",{offset:"100%",stopColor:x.stroke,stopOpacity:0})]})}),m.yTicks.map(k=>o.jsxs("g",{children:[o.jsx("line",{x1:C.left,x2:p-C.right,y1:k.y,y2:k.y,stroke:"rgba(255,255,255,0.06)",strokeDasharray:"4 4"}),o.jsx("text",{x:C.left-10,y:k.y+4,textAnchor:"end",fill:"#71717a",fontSize:i?9:10,children:k.value.toLocaleString()})]},k.value)),o.jsx("line",{x1:C.left,x2:p-C.right,y1:m.baseY,y2:m.baseY,stroke:"rgba(255,255,255,0.2)",strokeWidth:1}),m.yearBands.map(k=>{const S=(k.xStart+k.xEnd)/2;return o.jsxs("g",{children:[o.jsx("rect",{x:k.xStart,y:C.top-28,width:Math.max(k.xEnd-k.xStart,1),height:20,fill:"rgba(75, 0, 130, 0.08)",rx:4}),o.jsxs("text",{x:S,y:C.top-14,textAnchor:"middle",fill:"#d4d4d8",fontSize:i?11:12,fontWeight:"600",children:[k.year,"년"]})]},k.year)}),m.dividers.map(k=>o.jsx("line",{x1:k.x,x2:k.x,y1:C.top-8,y2:m.baseY,stroke:"rgba(255,255,255,0.14)",strokeWidth:1},`${k.yearBefore}-${k.yearAfter}`)),L&&o.jsx("line",{x1:L.x,x2:L.x,y1:C.top,y2:m.baseY,stroke:x.stroke,strokeOpacity:.35,strokeWidth:1,strokeDasharray:"3 3"}),m.areaPath&&o.jsx(MM,{d:m.areaPath,fill:`url(#area-${w})`,stroke:"none"},`area-${$}`),m.linePath&&o.jsx(RM,{d:m.linePath,pathLength:1,fill:"none",stroke:x.stroke,strokeWidth:i?2:2.5,strokeLinejoin:"round",strokeLinecap:"round"},`line-${$}`),m.plotted.map((k,S)=>S%m.labelEvery===0||S===m.plotted.length-1?o.jsx("text",{x:k.x,y:m.baseY+(i?16:18),textAnchor:"middle",fill:"#a1a1aa",fontSize:i?9:10,children:DM(k.key,m.granularity)},`lbl-${k.key}`):null),L&&o.jsxs("g",{style:{pointerEvents:"none"},children:[o.jsx("circle",{cx:L.x,cy:L.y,r:i?8:10,fill:x.stroke,opacity:.18}),o.jsx("circle",{cx:L.x,cy:L.y,r:i?4.5:5.5,fill:x.dot,stroke:"#0f0f12",strokeWidth:2})]})]}),L&&o.jsxs(zM,{style:{left:L.x,top:L.y},children:[o.jsx("span",{className:"tip-label",children:L.label}),o.jsxs("span",{className:"tip-value",children:[L.count.toLocaleString(),l]})]})]})]})}const HM=[{value:7,label:"최근 7일"},{value:14,label:"최근 14일"},{value:30,label:"최근 30일"},{value:60,label:"최근 60일"},{value:90,label:"최근 90일"}],UM=[{value:6,label:"최근 6개월"},{value:12,label:"최근 12개월"},{value:24,label:"최근 24개월"}];d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
`;const ed=d.select`
  padding: 6px 10px;
  border-radius: ${Ge.radii.md};
  border: 1px solid #3f3f46;
  background: #09090b;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    border-color: #52525b;
  }

  &:focus {
    outline: none;
    border-color: ${Ge.colors.primary500};
    box-shadow: 0 0 0 3px rgba(75, 0, 130, 0.22);
  }
`,VM=d.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
`,WM=d.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
`,KM=d.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
`,w4=d.h3`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #e4e4e7;

  &::before {
    content: "";
    width: 3px;
    height: 14px;
    border-radius: 2px;
    background: ${Ge.colors.primary500};
  }
`,b4=d.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 10px;
`,k4=d.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  & + & {
    margin-top: 20px;
  }
`,YM=d.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,GM=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(132px, 1fr));
  gap: 8px;
  margin-bottom: 20px;
`,ci=d.div`
  background: linear-gradient(180deg, #141417 0%, #111114 100%);
  border: 1px solid #27272a;
  border-radius: ${Ge.radii.md};
  padding: 12px 14px;
  transition: border-color 0.15s ease, transform 0.15s ease;

  &:hover {
    border-color: #3f3f46;
    transform: translateY(-1px);
  }

  strong {
    display: block;
    font-size: 20px;
    margin-top: 3px;
    line-height: 1.15;
    color: #fafafa;
    font-variant-numeric: tabular-nums;
  }

  span {
    font-size: 11px;
    color: #8b8b93;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }
`;function ZM(){const[e,t]=y.useState(null),[n,r]=y.useState(null),[i,s]=y.useState(null),[l,a]=y.useState(null),[c,u]=y.useState(""),[p,f]=y.useState("day"),[h,g]=y.useState(30),[w,v]=y.useState(null),[C,x]=y.useState(null),[m,L]=y.useState(!1),b=void 0,$=p==="day"?HM:UM,k=y.useCallback(async()=>{v(null);try{t(await ZR())}catch(T){v(T instanceof Error?T.message:"지표를 불러오지 못했습니다.")}},[]),S=y.useCallback(async()=>{L(!0),x(null);try{const[T,E,N]=await Promise.all([qR(p,h),QR(p,h),XR(p,h)]);r(T),s(E),a(N)}catch(T){x(T instanceof Error?T.message:"그래프 데이터를 불러오지 못했습니다.")}finally{L(!1)}},[p,h]),M=y.useCallback(async()=>{await Promise.all([k(),S()])},[S,k]);y.useEffect(()=>{S()},[S]),y.useEffect(()=>{k();const T=setInterval(k,3e4);return()=>clearInterval(T)},[k]),y.useEffect(()=>{const T=(l==null?void 0:l.endpoints)??[];if(T.length===0){u("");return}u(E=>T.some(N=>N.uri===E)?E:T[0].uri)},[l]);const R=y.useMemo(()=>(l==null?void 0:l.endpoints.find(T=>T.uri===c))??null,[l,c]),I=T=>{f(T),g(T==="day"?30:12)};return o.jsxs("div",{children:[o.jsxs(VM,{children:[o.jsx(KM,{children:"트래픽·운영 현황"}),o.jsxs(WM,{children:[o.jsxs(ed,{value:p,onChange:T=>I(T.target.value),"aria-label":"집계 단위",children:[o.jsx("option",{value:"day",children:"일별"}),o.jsx("option",{value:"month",children:"월별"})]}),o.jsx(ed,{value:h,onChange:T=>g(Number(T.target.value)),"aria-label":"조회 기간",children:$.map(T=>o.jsx("option",{value:T.value,children:T.label},T.value))}),o.jsx(ze,{$variant:"ghost",type:"button",onClick:M,children:"새로고침"})]})]}),w&&o.jsx(Zr,{children:w}),C&&o.jsx(Zr,{children:C}),e&&o.jsxs(GM,{children:[o.jsxs(ci,{children:[o.jsx("span",{children:"누적 HTTP"}),o.jsx("strong",{children:e.totalHttpRequests.toLocaleString()})]}),o.jsxs(ci,{children:[o.jsx("span",{children:"회원"}),o.jsx("strong",{children:e.membersCount.toLocaleString()})]}),o.jsxs(ci,{children:[o.jsx("span",{children:"명상지·센터"}),o.jsx("strong",{children:e.placesCount.toLocaleString()})]}),o.jsxs(ci,{children:[o.jsx("span",{children:"전문가"}),o.jsx("strong",{children:e.expertsCount.toLocaleString()})]}),o.jsxs(ci,{children:[o.jsx("span",{children:"지역"}),o.jsx("strong",{children:e.regionsCount.toLocaleString()})]}),o.jsxs(ci,{children:[o.jsx("span",{children:"공지"}),o.jsx("strong",{children:e.noticesCount.toLocaleString()})]})]}),o.jsxs(k4,{children:[o.jsx(b4,{children:o.jsx(w4,{children:"주요 추이"})}),o.jsxs(YM,{children:[o.jsx(al,{title:"HTTP 요청 추이",series:n,loading:m,unit:"회",compact:!0,emptyMessage:"아직 기록된 HTTP 요청이 없습니다."}),o.jsx(al,{title:`회원 수 추이 (현재 ${(i==null?void 0:i.currentTotal.toLocaleString())??"-"}명)`,series:(i==null?void 0:i.cumulativeSeries)??null,loading:m,accent:"teal",unit:"명",compact:!0,emptyMessage:"아직 가입한 회원이 없습니다."}),o.jsx(al,{title:"신규 가입 추이",series:(i==null?void 0:i.signupSeries)??null,loading:m,accent:"gold",unit:"명",compact:!0,emptyMessage:"선택한 기간에 신규 가입이 없습니다."})]})]}),o.jsxs(k4,{children:[o.jsxs(b4,{children:[o.jsx(w4,{children:"API별 호출량"}),l&&l.endpoints.length>0?o.jsx(ed,{value:c,onChange:T=>u(T.target.value),"aria-label":"API 선택",children:l.endpoints.map(T=>o.jsx("option",{value:T.uri,children:T.uri},T.uri))}):null]}),m&&!l?o.jsx(xn,{children:o.jsx("p",{style:{margin:0,color:"#71717a",textAlign:"center",padding:"20px 0",fontSize:13},children:"API 그래프를 불러오는 중…"})}):R?o.jsx(al,{title:R.uri,series:R.series,compact:!0,emptyMessage:"호출 기록 없음"}):o.jsx(xn,{children:o.jsx("p",{style:{margin:0,color:"#71717a",textAlign:"center",padding:"20px 0",fontSize:13},children:"API 호출 기록이 쌓이면 URI별 그래프가 표시됩니다."})})]}),b]})}function qM({label:e,value:t,onChange:n}){const r=y.useRef(null),[i,s]=y.useState(!1),[l,a]=y.useState(null),c=async u=>{s(!0),a(null);try{n(await e5(u))}catch(p){a(p instanceof Error?p.message:"업로드 실패 (MinIO 활성화·로그인 확인)")}finally{s(!1)}};return o.jsxs(pe,{children:[e?o.jsx(de,{children:e}):null,o.jsxs("div",{style:{display:"flex",gap:8,alignItems:"stretch"},children:[o.jsx(tt,{value:t,onChange:u=>n(u.target.value),placeholder:"이미지 URL 또는 업로드"}),o.jsx(ze,{type:"button",disabled:i,onClick:()=>{var u;return(u=r.current)==null?void 0:u.click()},children:i?"…":"업로드"})]}),o.jsx("input",{ref:r,type:"file",accept:"image/*",hidden:!0,onChange:u=>{var f;const p=(f=u.target.files)==null?void 0:f[0];p&&c(p),u.target.value=""}}),t?o.jsx("img",{src:t,alt:"",style:{marginTop:8,maxHeight:96,maxWidth:"100%",borderRadius:8,objectFit:"cover"}}):null,l?o.jsx("p",{style:{margin:"6px 0 0",color:"#f87171",fontSize:12},children:l}):null]})}function t5(e,t){const n=e.trim(),r=(t??[]).map(i=>i.trim()).filter(i=>i&&i!==n);return n?[n,...r]:r}function QM(e){const t=e.map(n=>n.trim()).filter(Boolean);return{imageUrl:t[0]??"",imageUrls:t.slice(1)}}const XM=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,JM=d.div`
  position: relative;
  width: 88px;
  height: 88px;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
  border: 2px solid
    ${({$dragOver:e,$dragging:t})=>e?"#a78bfa":t?"#52525b":"transparent"};
  opacity: ${({$dragging:e})=>e?.55:1};
  cursor: grab;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    pointer-events: none;
  }
`,ez=d.span`
  position: absolute;
  left: 6px;
  bottom: 6px;
  padding: 2px 6px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.65);
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  pointer-events: none;
`,tz=d.button`
  position: absolute;
  top: 4px;
  right: 4px;
  width: 22px;
  height: 22px;
  border: none;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  display: grid;
  place-items: center;

  &:hover {
    background: rgba(127, 29, 29, 0.9);
  }
`,nz=d.button`
  width: 88px;
  height: 88px;
  border-radius: 10px;
  border: 2px dashed #52525b;
  background: #111114;
  color: #a1a1aa;
  font-size: 28px;
  cursor: pointer;
  flex-shrink: 0;
  display: grid;
  place-items: center;

  &:hover:not(:disabled) {
    border-color: #7c3aed;
    color: #c4b5fd;
    background: rgba(124, 58, 237, 0.08);
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`,rz=d.p`
  margin: 8px 0 0;
  font-size: 12px;
  color: #71717a;
  line-height: 1.45;
`,iz=d.p`
  margin: 6px 0 0;
  color: #f87171;
  font-size: 12px;
`;function oz(e,t,n){if(t===n||t<0||n<0||t>=e.length||n>=e.length)return e;const r=[...e],[i]=r.splice(t,1);return r.splice(n,0,i),r}function j4({label:e="사진",photos:t,onChange:n,maxPhotos:r=10,hint:i="첫 번째 사진이 대표·목록 썸네일입니다. 드래그로 순서를 바꿀 수 있습니다."}){const s=y.useRef(null),[l,a]=y.useState(!1),[c,u]=y.useState(null),[p,f]=y.useState(null),[h,g]=y.useState(null),w=m=>n(m.slice(0,r)),v=async m=>{if(!(m!=null&&m.length))return;const L=r-t.length;if(L<=0){u(`사진은 최대 ${r}장까지 등록할 수 있습니다.`);return}a(!0),u(null);try{const b=[...t];for(const $ of Array.from(m).slice(0,L)){const k=await e5($);b.includes(k)||b.push(k)}w(b)}catch(b){u(b instanceof Error?b.message:"업로드 실패 (MinIO·로그인 확인)")}finally{a(!1)}},C=m=>{p!==null&&(w(oz(t,p,m)),f(null),g(null))},x=t.length<r;return o.jsxs(pe,{children:[o.jsx(de,{children:e}),o.jsxs(XM,{children:[t.map((m,L)=>o.jsxs(JM,{draggable:!0,$dragging:p===L,$dragOver:h===L,onDragStart:()=>f(L),onDragEnd:()=>{f(null),g(null)},onDragOver:b=>{b.preventDefault(),g(L)},onDragLeave:()=>g(b=>b===L?null:b),onDrop:b=>{b.preventDefault(),C(L)},children:[o.jsx("img",{src:m,alt:""}),L===0?o.jsx(ez,{children:"대표"}):null,o.jsx(tz,{type:"button","aria-label":"사진 삭제",onClick:()=>w(t.filter((b,$)=>$!==L)),children:"×"})]},`${m}-${L}`)),x?o.jsx(nz,{type:"button",disabled:l,onClick:()=>{var m;return(m=s.current)==null?void 0:m.click()},"aria-label":"사진 추가",children:l?"…":"+"}):null]}),o.jsx("input",{ref:s,type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:m=>void v(m.target.files).finally(()=>{m.target.value=""})}),o.jsx(rz,{children:i}),c?o.jsx(iz,{children:c}):null]})}const sz={width:"100%",padding:8,borderRadius:8,background:"#09090b",color:"#fff",border:"1px solid #3f3f46"};function lz({label:e="지역",value:t,onChange:n}){return o.jsxs(pe,{children:[o.jsx(de,{children:e}),o.jsx("select",{value:t,onChange:r=>n(r.target.value),style:sz,children:Gr.map(r=>o.jsx("option",{value:r.id,children:r.name},r.id))})]})}const I1=[{id:"KR-11",names:["서울특별시","서울"]},{id:"KR-26",names:["부산광역시","부산"]},{id:"KR-27",names:["대구광역시","대구"]},{id:"KR-28",names:["인천광역시","인천"]},{id:"KR-29",names:["광주광역시","광주"]},{id:"KR-30",names:["대전광역시","대전"]},{id:"KR-31",names:["울산광역시","울산"]},{id:"KR-50",names:["세종특별자치시","세종"]},{id:"KR-41",names:["경기도","경기"]},{id:"KR-42",names:["강원특별자치도","강원도","강원"]},{id:"KR-43",names:["충청북도","충북"]},{id:"KR-44",names:["충청남도","충남"]},{id:"KR-45",names:["전북특별자치도","전라북도","전북"]},{id:"KR-46",names:["전라남도","전남"]},{id:"KR-47",names:["경상북도","경북"]},{id:"KR-48",names:["경상남도","경남"]},{id:"KR-49",names:["제주특별자치도","제주도","제주"]}];function S4(e){return typeof e=="number"?e:parseFloat(String(e??""))}function C4(e){var i,s;const t=S4(((i=e.point)==null?void 0:i.y)??e.y),n=S4(((s=e.point)==null?void 0:s.x)??e.x);if(!Number.isFinite(t)||!Number.isFinite(n))return null;const r=(e.roadAddress||e.jibunAddress||e.address||"").trim();return r?{address:r,lat:t,lng:n,precision:"exact"}:null}function s0(){var e,t;return(t=(e=window.naver)==null?void 0:e.maps)==null?void 0:t.Service}function n5(e){var n,r;if(e==="OK"||e===0)return!0;const t=(r=(n=s0())==null?void 0:n.Status)==null?void 0:r.OK;return t!=null&&e===t}function az(e){var n;const t=(n=s0())==null?void 0:n.Status;if(t){for(const[r,i]of Object.entries(t))if(i===e&&r!=="OK")return r}return String(e)}function cz(e){var a,c;const t=e,n=[],r=new Set,i=u=>{!u||r.has(u.address)||(r.add(u.address),n.push(u))},s=((a=t.v2)==null?void 0:a.addresses)??[];for(const u of s)i(C4(u));const l=((c=t.result)==null?void 0:c.items)??t.addresses??[];for(const u of l)i(C4(u));return n}function uz(e){const t=s0(),n=t==null?void 0:t.geocode;return n?new Promise((r,i)=>{try{n.call(t,{query:e},(s,l)=>{r({status:s,results:n5(s)?cz(l):[]})})}catch(s){i(s instanceof Error?s:new Error("주소 검색 호출 실패"))}}):Promise.reject(new Error("지도 API(geocoder)가 로드되지 않았습니다."))}function $4(e){return e.replace(/\s+/g,"")}function r5(e){const t=$4(e);for(const n of I1)for(const r of[...n.names].sort((i,s)=>s.length-i.length))if(t.includes($4(r)))return n.id;return null}function dz(e,t){const n=ya.find(r=>r.id===t)??ya[0];return{address:e.trim(),lat:(n.minLat+n.maxLat)/2,lng:(n.minLng+n.maxLng)/2,approximate:!0,precision:"region"}}function pz(e){var u,p;const t=new Set,n=[],r=f=>{const h=f.trim().replace(/\s+/g," ");h.length>=2&&!t.has(h)&&(t.add(h),n.push(h))},i=e.trim().replace(/\s+/g," ");r(i);const s=(u=i.split(/[,，]/)[0])==null?void 0:u.trim();s&&s!==i&&r(s);const l=i.split(/\s+/).filter(Boolean);for(let f=l.length-1;f>=1;f--)r(l.slice(0,f).join(" "));const a=l[l.length-1];if(a&&a.length>=2&&!/[시군구읍면동로]$/.test(a)){const f=l.slice(0,-1).join(" ");r(`${f} ${a}시`.trim()),r(`${f} ${a}군`.trim()),r(`${f} ${a}구`.trim()),r(`${a}시`),r(`${a}군`),r(`${a}구`)}for(const f of I1)for(const h of f.names)i.includes(h)&&r(h);const c=r5(i);if(c){const f=(p=I1.find(h=>h.id===c))==null?void 0:p.names[0];f&&r(f),r(oo(c))}return n}function fz(e,t,n){return e.map(r=>({...r,approximate:t||r.approximate,precision:t?n:r.precision??"exact"}))}function i5(e){return e.precision==="region"?11:e.approximate||e.precision==="area"?14:17}async function T1(e){const t=e.trim();if(!t)return[];const n=pz(t);let r="OK";for(let s=0;s<n.length;s++){const l=n[s],{status:a,results:c}=await uz(l);if(r=a,c.length>0)return fz(c,s>0,s>0?"area":"exact")}const i=r5(t);if(i)return[dz(t,i)];if(!n5(r))throw new Error(`주소 검색 실패 (${az(r)})`);return[]}const hz=d.div`
  display: flex;
  align-items: stretch;
  gap: 8px;
`,gz=d.div`
  flex: 1;
  min-width: 0;

  input {
    width: 100%;
    height: 100%;
  }
`,mz=d.button`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  padding: 0;
  border-radius: 8px;
  border: 1px solid #52525b;
  background: #27272a;
  color: #f4f4f5;
  cursor: pointer;
  display: grid;
  place-items: center;

  svg {
    width: 18px;
    height: 18px;
    display: block;
  }

  .spin {
    animation: address-search-spin 0.8s linear infinite;
  }

  @keyframes address-search-spin {
    to {
      transform: rotate(360deg);
    }
  }

  &:hover:not(:disabled) {
    background: #3f3f46;
    border-color: #71717a;
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;function xz(){return o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("circle",{cx:"11",cy:"11",r:"7"}),o.jsx("line",{x1:"16.5",y1:"16.5",x2:"21",y2:"21"})]})}function Lz(){return o.jsx("svg",{className:"spin",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:o.jsx("path",{d:"M12 3a9 9 0 1 1-6.36 15.36",strokeLinecap:"round"})})}const yz=d.ul`
  list-style: none;
  margin: 8px 0 0;
  padding: 0;
  border: 1px solid #3f3f46;
  border-radius: 8px;
  overflow: hidden;
  max-height: 160px;
  overflow-y: auto;
`,vz=d.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 10px 12px;
  border: none;
  border-bottom: 1px solid #27272a;
  background: ${({$active:e})=>e?"rgba(75, 0, 130, 0.25)":"#111114"};
  color: #f4f4f5;
  font-size: 13px;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.06);
  }
`,wz=d.div`
  margin-top: 12px;
  width: 100%;
  height: 220px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #3f3f46;
  background: #27272a;
`,bz=d.p`
  margin: 12px 0 0;
  font-size: 12px;
  color: #71717a;
  line-height: 1.45;
`,kz=d.p`
  margin: 8px 0 0;
  font-size: 12px;
  color: #86efac;
`,jz=d.p`
  margin: 8px 0 0;
  font-size: 12px;
  color: #fcd34d;
  line-height: 1.45;
`,E4=d.p`
  margin: 6px 0 0;
  font-size: 12px;
  color: #71717a;
  line-height: 1.45;
`;async function jo(){await new Promise(e=>{requestAnimationFrame(()=>requestAnimationFrame(()=>e()))})}function Sz({value:e,lat:t,lng:n,onChange:r,onCoordsChange:i}){const s=y.useRef(null),l=y.useRef(null),a=y.useRef(null),c=y.useRef(i);c.current=i;const u=y.useRef(!1),[p,f]=y.useState(e),[h,g]=y.useState([]),[w,v]=y.useState(null),[C,x]=y.useState(!1),[m,L]=y.useState(null),[b,$]=y.useState(!1),k="233s0l2jzo".trim();y.useEffect(()=>{f(e),e.trim()||(v(null),$(!1),g([]))},[e]);const S=y.useCallback((I,T,E)=>{var A,O,j;const D=window.naver.maps,H=s.current;if(!(D!=null&&D.Map)||!D.LatLng||!D.Marker||!H)return;const _=new D.LatLng(I,T);l.current?l.current.setCenter(_):l.current=new D.Map(H,{center:_,zoom:E,scrollWheel:!0,pinchZoom:!0,zoomControl:!0,mapTypeControl:!1,draggable:!0}),a.current&&a.current.setMap(null);const z=new D.Marker({position:_,map:l.current,draggable:!0});a.current=z,(O=(A=D.Event)==null?void 0:A.addListener)==null||O.call(A,z,"dragend",()=>{var G;const Z=z.getPosition(),Q=Z.lat(),P=Z.lng();u.current=!0,$(!0),(G=c.current)==null||G.call(c,Q,P)}),(j=D.Event)==null||j.trigger(l.current,"resize")},[]),M=y.useCallback((I,T)=>{var E;u.current=!1,S(I.lat,I.lng,i5(I)),v(I),$(!I.approximate),(E=c.current)==null||E.call(c,I.lat,I.lng),(T==null?void 0:T.syncAddress)!==!1&&!I.approximate&&r(I.address)},[r,S]),R=y.useCallback(async I=>{const T=(I??p).trim();if(!T){L("검색할 주소를 입력하세요.");return}L(null),x(!0),$(!1);try{if(!k){L(".env에 VITE_NAVER_MAP_CLIENT_ID를 설정하면 지도에서 주소를 확인할 수 있습니다."),r(T);return}await C1(k),await jo();const E=await T1(T);if(g(E),E.length===0){L("위치를 찾지 못했습니다. 시·군·구 이름이나 더 구체적인 주소로 다시 검색해 보세요.");return}await jo(),M(E[0],{syncAddress:!E[0].approximate})}catch(E){L(E instanceof Error?E.message:"주소 검색 실패")}finally{x(!1)}},[k,r,p,M]);return y.useEffect(()=>{let I=!1;const T=Number.isFinite(t)&&Number.isFinite(n);return(async()=>{if(k)try{if(await C1(k),I)return;if(await jo(),T){S(t,n,16),$(!0);return}if(!e.trim())return;const E=await T1(e);if(I||E.length===0)return;const N=E.find(D=>D.address===e)??E[0];await jo(),I||M(N,{syncAddress:!1})}catch{}})(),()=>{I=!0}},[]),o.jsxs(pe,{children:[o.jsx(de,{children:"주소 (검색 후 지도에서 확인)"}),o.jsxs(hz,{children:[o.jsx(gz,{children:o.jsx(tt,{value:p,onChange:I=>{f(I.target.value),$(!1)},onKeyDown:I=>{I.key==="Enter"&&(I.preventDefault(),R())},placeholder:"예: 서울특별시 종로구 ..."})}),o.jsx(mz,{type:"button",onClick:()=>void R(),disabled:C,"aria-label":C?"주소 검색 중":"주소 검색",title:C?"검색 중…":"검색",children:C?o.jsx(Lz,{}):o.jsx(xz,{})})]}),o.jsxs(E4,{children:["정확한 도로명·지번이 없어도 「강릉」, 「제주」, 「종로구」처럼 지역명만으로 대략적인 위치를 표시합니다. 검색 후 ",o.jsx("strong",{children:"핀을 드래그"}),"해 정확한 위치로 옮길 수 있습니다."]}),m&&o.jsx(Zr,{children:m}),h.length>1&&o.jsx(yz,{children:h.map(I=>o.jsx("li",{children:o.jsx(vz,{type:"button",$active:(w==null?void 0:w.address)===I.address,onClick:()=>void jo().then(()=>M(I)),children:I.address})},`${I.address}-${I.lat}`))}),k?o.jsxs(o.Fragment,{children:[o.jsx(wz,{ref:s,"aria-label":"주소 확인 지도"}),!w&&o.jsx(bz,{children:"검색하면 지도에서 위치를 확인할 수 있습니다."})]}):o.jsx(E4,{children:".env에 VITE_NAVER_MAP_CLIENT_ID를 설정하면 지도 미리보기가 표시됩니다."}),b&&w&&o.jsxs(kz,{children:["✓ 지도에서 확인됨 — ",w.address]}),!b&&(w==null?void 0:w.approximate)&&o.jsxs(jz,{children:["◎ 대략적인 위치 — ",w.precision==="region"?"시·도":"지역"," 단위로 표시됩니다.",w.address!==p.trim()&&w.precision!=="region"?` (${w.address})`:""]})]})}const P4=[{id:"text",label:"텍스트",group:"기본 블록",prefix:""},{id:"h1",label:"제목1",group:"기본 블록",prefix:"# ",hint:"#"},{id:"h2",label:"제목2",group:"기본 블록",prefix:"## ",hint:"##"},{id:"h3",label:"제목3",group:"기본 블록",prefix:"### ",hint:"###"},{id:"ul",label:"글머리 기호",group:"기본 블록",prefix:"- ",hint:"-"},{id:"ol",label:"번호 목록",group:"기본 블록",prefix:"1. ",hint:"1."},{id:"quote",label:"인용",group:"기본 블록",prefix:"> ",hint:">"},{id:"hr",label:"구분선",group:"기본 블록",prefix:`---
`,hint:"---"}],Cz=d.div`
  position: relative;
`,$z=d(Dn)`
  min-height: ${({$minHeight:e})=>e}px;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.55;
  resize: vertical;
`,Ez=d.div`
  position: absolute;
  left: 8px;
  right: 8px;
  bottom: 8px;
  max-height: 240px;
  overflow-y: auto;
  border-radius: 10px;
  border: 1px solid #3f3f46;
  background: #fafafa;
  color: #18181b;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
  z-index: 20;
  scrollbar-width: thin;
`,Pz=d.div`
  padding: 10px 12px;
  border-bottom: 1px solid #e4e4e7;
  font-size: 13px;
  color: #71717a;
  display: flex;
  align-items: center;
  gap: 6px;

  span {
    color: #18181b;
    font-weight: 500;
  }
`,Iz=d.div`
  padding: 8px 12px 4px;
  font-size: 11px;
  font-weight: 600;
  color: #71717a;
`,Tz=d.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 12px;
  border: none;
  background: ${({$active:e})=>e?"#f4f4f5":"transparent"};
  color: #18181b;
  font-size: 14px;
  text-align: left;
  cursor: pointer;

  &:hover {
    background: #f4f4f5;
  }

  kbd {
    font-size: 12px;
    color: #a1a1aa;
    font-family: inherit;
  }
`,Rz=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  border-top: 1px solid #e4e4e7;
  font-size: 12px;
  color: #71717a;

  kbd {
    font-size: 11px;
    padding: 1px 5px;
    border-radius: 4px;
    border: 1px solid #d4d4d8;
    background: #fff;
  }
`,Mz=d.p`
  margin: 6px 0 0;
  font-size: 12px;
  color: #71717a;
`;function o5(e,t){return e.lastIndexOf(`
`,t-1)+1}function zz(e,t){const n=o5(e,t),r=e.slice(n,t),i=r.lastIndexOf("/");if(i<0||r.slice(0,i).trim()!=="")return null;const l=r.slice(i+1);return l.includes(" ")||l.includes(`
`)?null:{slashStart:n+i,query:l,selected:0}}function Az(e,t,n,r){const i=o5(e,t);return{next:e.slice(0,i)+r+e.slice(n),nextCursor:i+r.length}}function Ol({label:e,value:t,onChange:n,placeholder:r,minHeight:i=100,hint:s="/ 를 입력하면 마크다운 블록을 선택할 수 있습니다."}){const l=y.useRef(null),[a,c]=y.useState(null),u=y.useMemo(()=>{if(!a)return[];const x=a.query.trim().toLowerCase();return x?P4.filter(m=>{var L;return m.label.toLowerCase().includes(x)||m.id.includes(x)||(((L=m.hint)==null?void 0:L.toLowerCase().includes(x))??!1)}):P4},[a]),p=y.useCallback(()=>c(null),[]),f=y.useCallback(x=>{const m=l.current;if(!a||!m)return;const L=m.selectionStart??t.length,{next:b,nextCursor:$}=Az(t,a.slashStart,L,x.prefix);n(b),p(),requestAnimationFrame(()=>{m.focus(),m.setSelectionRange($,$)})},[p,a,n,t]),h=y.useCallback((x,m)=>{const L=zz(x,m);if(!L){c(null);return}c(b=>{const $=b&&b.slashStart===L.slashStart?b.selected:0;return{...L,selected:$}})},[]);y.useEffect(()=>{if(a){if(u.length===0){c(null);return}a.selected>=u.length&&c({...a,selected:u.length-1})}},[u.length,a]);const g=x=>{const m=x.target.value,L=x.target.selectionStart??m.length;n(m),h(m,L)},w=x=>{if(!(!a||u.length===0)){if(x.key==="ArrowDown"){x.preventDefault(),c(m=>m&&{...m,selected:Math.min(m.selected+1,u.length-1)});return}if(x.key==="ArrowUp"){x.preventDefault(),c(m=>m&&{...m,selected:Math.max(m.selected-1,0)});return}if(x.key==="Enter"&&!x.shiftKey){x.preventDefault(),f(u[a.selected]);return}x.key==="Escape"&&(x.preventDefault(),p())}},v=()=>{const x=l.current;x&&h(t,x.selectionStart??t.length)};let C="";return o.jsxs(pe,{children:[o.jsx(de,{children:e}),o.jsxs(Cz,{children:[o.jsx($z,{ref:l,$minHeight:i,value:t,onChange:g,onKeyDown:w,onClick:v,onBlur:()=>window.setTimeout(p,120),placeholder:r,spellCheck:!1}),a&&u.length>0&&o.jsxs(Ez,{onMouseDown:x=>x.preventDefault(),children:[o.jsxs(Pz,{children:["/",o.jsx("span",{children:a.query||"검색어를 입력하세요"})]}),u.map((x,m)=>{const L=x.group!==C;return C=x.group,o.jsxs("div",{children:[L?o.jsx(Iz,{children:x.group}):null,o.jsxs(Tz,{type:"button",$active:a.selected===m,onMouseEnter:()=>c(b=>b&&{...b,selected:m}),onClick:()=>f(x),children:[o.jsx("span",{children:x.label}),x.hint?o.jsx("kbd",{children:x.hint}):null]})]},x.id)}),o.jsxs(Rz,{children:[o.jsx("span",{children:"메뉴 닫기"}),o.jsx("kbd",{children:"esc"})]})]})]}),o.jsx(Mz,{children:s})]})}const _z=d.div`
  width: 100%;
  height: 180px;
  border-radius: ${({theme:e})=>e.radii.lg};
  overflow: hidden;
  background: ${({theme:e})=>e.colors.bg100};
  border: 1px solid ${({theme:e})=>e.colors.border200};
`,I4=d.div`
  min-height: 140px;
  border-radius: ${({theme:e})=>e.radii.lg};
  background: ${({theme:e})=>e.colors.bg100};
  border: 1px solid ${({theme:e})=>e.colors.border200};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
  text-align: center;
  font-size: 0.85rem;
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.45;

  svg {
    width: 28px;
    height: 28px;
    color: ${({theme:e})=>e.colors.primary600};
    opacity: 0.7;
  }
`,cl=d.p`
  margin: 8px 0 0;
  font-size: 0.8rem;
  color: ${({theme:e})=>e.colors.text700};
`;async function Nz(){await new Promise(e=>{requestAnimationFrame(()=>requestAnimationFrame(()=>e()))})}function Oz({address:e,lat:t,lng:n}){const r=y.useRef(null),i=y.useRef(null),s=y.useRef(null),[l,a]=y.useState("idle"),[c,u]=y.useState(!1),p="233s0l2jzo".trim(),f=e.trim(),h=Number.isFinite(t)&&Number.isFinite(n);return y.useEffect(()=>{if(!f&&!h){a("idle"),u(!1),i.current=null,s.current=null;return}if(!p){a("no-key");return}let g=!1;const w=window.setTimeout(()=>{(async()=>{var v;a("loading");try{if(await C1(p),g)return;await Nz();let C,x,m,L;if(h)C=t,x=n,m=16,L=!1;else{const S=await T1(f);if(g)return;const M=S.find(R=>R.address===f)??S[0];if(!M){a("error"),u(!1);return}C=M.lat,x=M.lng,m=i5(M),L=!!M.approximate}const b=r.current;if(!b||g)return;const $=window.naver,k=new $.maps.LatLng(C,x);if(!i.current)i.current=new $.maps.Map(b,{center:k,zoom:m,scrollWheel:!1,mapTypeControl:!1,zoomControl:!1,scaleControl:!1});else{const S=i.current;S.setCenter(k),S.setZoom(m)}s.current&&s.current.setMap(null),s.current=new $.maps.Marker({position:k,map:i.current}),(v=$.maps.Event)==null||v.trigger(i.current,"resize"),g||(u(L),a("ready"))}catch{g||(u(!1),a("error"))}})()},350);return()=>{g=!0,window.clearTimeout(w)}},[p,f,h,t,n]),!f&&!h?o.jsxs(I4,{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"주소를 입력하면 지도가 표시됩니다"]}):l==="no-key"?o.jsxs(I4,{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),f,o.jsx(cl,{children:"VITE_NAVER_MAP_CLIENT_ID 설정 시 지도 미리보기가 표시됩니다."})]}):o.jsxs(o.Fragment,{children:[o.jsx(_z,{ref:r,"aria-label":"위치 미리보기 지도"}),l==="loading"&&o.jsx(cl,{children:"지도 불러오는 중…"}),l==="ready"&&c&&o.jsx(cl,{children:"대략적인 위치입니다. 정확한 주소 검색을 권장합니다."}),l==="error"&&o.jsx(cl,{children:"지도를 표시하지 못했습니다. 시·군·구 이름으로 다시 입력해 보세요."})]})}const Dz=.6,Bz=2.4,Fz=d.div`
  position: sticky;
  top: 16px;
`,Hz=d.div`
  background: linear-gradient(180deg, #1b1b1f 0%, #161619 100%);
  border: 1px solid #2a2a30;
  border-radius: 16px;
  padding: 14px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02), 0 8px 24px rgba(0, 0, 0, 0.22);
`,Uz=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 12px;
`,Vz=d.h3`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #e4e4e7;

  &::before {
    content: "";
    width: 3px;
    height: 14px;
    border-radius: 2px;
    background: ${Ge.colors.primary500};
  }
`,Wz=d.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #a1a1aa;
  font-variant-numeric: tabular-nums;
`,Kz=d.button`
  padding: 3px 8px;
  border-radius: 7px;
  font-size: 11px;
  cursor: pointer;
  border: 1px solid #3f3f46;
  background: transparent;
  color: #a1a1aa;

  &:hover {
    color: #fff;
    border-color: #52525b;
  }
`,Yz=d.div`
  position: relative;
  width: max-content;
`,Gz=d.div`
  position: absolute;
  left: -4px;
  bottom: -4px;
  width: 26px;
  height: 26px;
  border-radius: 7px;
  background: ${Ge.colors.primary600};
  border: 2px solid #0f0f12;
  cursor: nesw-resize;
  display: grid;
  place-items: center;
  color: #fff;
  font-size: 13px;
  touch-action: none;
  z-index: 3;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
`;function ja({title:e="미리보기",controls:t,children:n}){const[r,i]=y.useState(1),s=y.useRef(null),l=u=>{var p,f;u.preventDefault(),(f=(p=u.target).setPointerCapture)==null||f.call(p,u.pointerId),s.current={x:u.clientX,y:u.clientY,zoom:r}},a=u=>{if(!s.current)return;const p=(s.current.x-u.clientX+(u.clientY-s.current.y))/2,f=Math.min(Bz,Math.max(Dz,s.current.zoom+p*.004));i(f)},c=u=>{var p,f;s.current=null,(f=(p=u.target).releasePointerCapture)==null||f.call(p,u.pointerId)};return o.jsx(Fz,{children:o.jsxs(Hz,{children:[o.jsxs(Uz,{children:[o.jsx(Vz,{children:e}),o.jsxs(Wz,{children:[Math.round(r*100),"%",o.jsx(Kz,{type:"button",onClick:()=>i(1),children:"초기화"})]})]}),t,o.jsxs(Yz,{children:[o.jsx("div",{style:{zoom:r},children:n}),o.jsx(Gz,{role:"slider","aria-label":"미리보기 크기 조절",onPointerDown:l,onPointerMove:a,onPointerUp:c,children:"⤢"})]})]})})}const Zz=d.div`
  display: flex;
  gap: 6px;
  margin-bottom: 12px;
`,T4=d.button`
  flex: 1;
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid ${({$active:e})=>e?"#7c3aed":"#3f3f46"};
  background: ${({$active:e})=>e?"rgba(124, 58, 237, 0.25)":"#18181b"};
  color: ${({$active:e})=>e?"#fff":"#a1a1aa"};
  font-size: 12px;
  cursor: pointer;
`,R4=d.div`
  width: 360px;
  border-radius: 24px;
  border: 6px solid #3f3f46;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
  max-height: min(78vh, 760px);
  overflow-y: auto;
  scrollbar-width: thin;
`,qz=d.div`
  width: 360px;
  display: flex;
  justify-content: center;
  padding: 8px 0 4px;
  background: linear-gradient(180deg, ${({theme:e})=>e.colors.primary50} 0%, ${({theme:e})=>e.colors.warmCream} 100%);
  border-radius: 16px;
  border: 1px solid #27272a;
`,Qz=d.div`
  width: 200px;
  background: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.radii.lg};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadow.soft};
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  position: relative;
`,Xz=d.div`
  width: 100%;
  height: 120px;
  background: ${({theme:e})=>e.colors.bg100};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`,Jz=d.div`
  padding: 12px;
`,eA=d.h4`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 6px;
  color: ${({theme:e})=>e.colors.text900};
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,tA=d.span`
  font-size: 0.85rem;
  color: ${({theme:e})=>e.colors.text700};
`,nA=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 6px;
`,rA=d.span`
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.primary600};
  background: ${({theme:e})=>e.colors.primary50};
  padding: 2px 8px;
  border-radius: ${({theme:e})=>e.radii.pill};
`,iA=d.div`
  color: ${({theme:e})=>e.colors.text900};
  background: #fff;
`,oA=d.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary100};
  position: sticky;
  top: 0;
  z-index: 2;
`,sA=d.h1`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
`,lA=d.div`
  position: relative;
  width: 100%;
  height: 220px;
  background: ${({theme:e})=>e.colors.bg100};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`,aA=d.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 6px;
`,cA=d.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({$active:e})=>e?"#fff":"rgba(255,255,255,0.45)"};
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15);
`,td=d.div`
  height: 220px;
  display: grid;
  place-items: center;
  color: ${({theme:e})=>e.colors.text700};
  font-size: 0.9rem;
  background: ${({theme:e})=>e.colors.bg100};
`,uA=d.div`
  padding: 20px 16px 28px;
`,dA=d.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;
`,pA=d.h2`
  margin: 0;
  font-size: 1.55rem;
  font-weight: 700;
  line-height: 1.25;
  flex: 1;
`,fA=d.span`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.primary50};
  color: ${({theme:e})=>e.colors.primary600};

  svg {
    width: 20px;
    height: 20px;
  }
`,hA=d.div`
  display: flex;
  align-items: flex-start;
  gap: 6px;
  font-size: 0.92rem;
  color: ${({theme:e})=>e.colors.text700};
  margin-bottom: 10px;

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    margin-top: 2px;
  }
`,gA=d.div`
  margin: 0 0 20px;
  font-size: 0.98rem;
  line-height: 1.55;
  color: ${({theme:e})=>e.colors.text700};
`,mA=d.section`
  margin-bottom: 22px;
`,xA=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 10px;
`,LA=d.h3`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
`,yA=d.span`
  font-size: 0.72rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary100};
  color: ${({theme:e})=>e.colors.primary700};
`,vA=d.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 4px;
`,wA=d.div`
  flex-shrink: 0;
  width: 108px;
  border-radius: ${({theme:e})=>e.radii.lg};
  overflow: hidden;
  background: ${({theme:e})=>e.colors.bg100};
  box-shadow: 0 2px 10px rgba(75, 0, 130, 0.08);

  img {
    width: 108px;
    height: 108px;
    object-fit: cover;
    display: block;
  }

  span {
    display: block;
    padding: 6px 8px;
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1.3;
    background: #fff;
  }
`,nd=d.div`
  border-bottom: 1px solid ${({theme:e})=>e.colors.border200};
  padding: 12px 0;
  color: ${({theme:e})=>e.colors.text900};
`,rd=d.div`
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.4;
`,ul=d.div`
  margin-top: 8px;
  font-size: 0.88rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.text700};
`,bA=d.div`
  margin-top: 22px;

  h3 {
    margin: 0 0 10px;
    font-size: 1.05rem;
    font-weight: 600;
  }
`,kA=d.p`
  margin: 0 0 10px;
  font-size: 0.88rem;
  line-height: 1.45;
  color: ${({theme:e})=>e.colors.text700};
`,jA={wifi:"Wi-Fi",parking:"Parking",tea:"Tea"};function SA({place:e}){var v,C,x;const[t,n]=y.useState("detail"),[r,i]=y.useState(0),s=y.useMemo(()=>{var b;if(!e)return null;const m=e.photos??[],L=((b=e.thumbnailUrl)==null?void 0:b.trim())||m[0]||"";return Za({...e,photos:m,thumbnailUrl:L,id:e.id||"preview"})},[e]),l=y.useMemo(()=>s?n0(s):[],[s]);if(!s)return o.jsx(ja,{children:o.jsx(R4,{children:o.jsx("div",{style:{padding:"40px 16px",textAlign:"center",color:"#71717a",fontSize:13},children:"편집 중인 명상지가 없습니다."})})});const a=(s.programs??[]).filter(m=>m.status==="ongoing"),c=(s.programs??[]).filter(m=>m.status==="past"),u=s.venueKind==="명상센터"?"명상센터":"명상지",p=(v=s.detailSections)==null?void 0:v.find(m=>m.title.toLowerCase().includes("유의사항")),f=s.facilities??[],h=zE(s),g=oo(s.regionId),w=l.length>0?r%l.length:0;return o.jsx(ja,{controls:o.jsxs(Zz,{children:[o.jsx(T4,{type:"button",$active:t==="detail",onClick:()=>n("detail"),children:"상세 페이지"}),o.jsx(T4,{type:"button",$active:t==="list",onClick:()=>n("list"),children:"목록 카드"})]}),children:t==="list"?o.jsx(qz,{children:o.jsxs(Qz,{children:[o.jsx(Xz,{children:h?o.jsx("img",{src:h,alt:""}):o.jsx(td,{style:{height:120},children:"사진 없음"})}),o.jsxs(Jz,{children:[o.jsx(eA,{children:s.name||"이름 미입력"}),o.jsx(tA,{children:g}),((C=s.hashtags)==null?void 0:C.length)>0&&o.jsx(nA,{children:s.hashtags.slice(0,2).map(m=>o.jsx(rA,{children:m},m))})]})]})}):o.jsx(R4,{children:o.jsxs(iA,{children:[o.jsxs(oA,{children:[o.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),o.jsx(sA,{children:"상세 페이지"})]}),l.length>0?o.jsxs(lA,{children:[o.jsx("img",{src:l[w],alt:""}),l.length>1&&o.jsx(aA,{children:l.map((m,L)=>o.jsx("button",{type:"button","aria-label":`${L+1}번째 사진`,onClick:()=>i(L),style:{padding:0,border:"none",background:"none",cursor:"pointer"},children:o.jsx(cA,{$active:L===w})},L))})]}):o.jsx(td,{children:"대표 사진을 추가하세요"}),o.jsxs(uA,{children:[o.jsxs(dA,{children:[o.jsx(pA,{children:s.name||"이름 미입력"}),o.jsx(fA,{"aria-hidden":!0,children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})})]}),o.jsxs(hA,{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),s.address||"주소 미입력"]}),o.jsx(gA,{children:o.jsx(io,{markdown:s.shortDescription,fallback:"한 줄 소개를 입력하세요."})}),(s.programs??[]).length>0&&o.jsxs(mA,{children:[o.jsxs(xA,{children:[o.jsx(LA,{children:"프로그램 · 후기"}),o.jsx(yA,{children:u})]}),a.length>0?o.jsx(vA,{children:a.map(m=>{const L=t5(m.imageUrl,m.imageUrls)[0];return o.jsxs(wA,{children:[L?o.jsx("img",{src:L,alt:""}):o.jsx(td,{style:{height:108},children:"사진"}),o.jsx("span",{children:m.title||"(제목 없음)"})]},m.id)})}):o.jsxs(ul,{children:["지난 프로그램·후기 (",c.length,")"]})]}),o.jsxs(nd,{children:[o.jsx(rd,{children:"입장료·이용 요금"}),o.jsx(ul,{children:(x=s.admissionFee)!=null&&x.trim()?o.jsx(j1,{children:o.jsx(Gi,{children:s.admissionFee})}):"현장·예약 시 안내"})]}),o.jsxs(nd,{children:[o.jsx(rd,{children:"유의사항"}),o.jsx(ul,{children:p!=null&&p.body?o.jsx(j1,{children:o.jsx(Gi,{children:p.body})}):"등록된 유의사항이 없습니다."})]}),f.length>0&&o.jsxs(nd,{children:[o.jsx(rd,{children:"시설 정보"}),o.jsx(ul,{children:f.map(m=>jA[m]??m).join(" · ")})]}),o.jsxs(bA,{children:[o.jsx("h3",{children:"위치"}),s.address?o.jsx(kA,{children:s.address}):null,o.jsx(Oz,{address:s.address,lat:s.lat,lng:s.lng})]})]})]})})})}const CA=Oe`
  from { opacity: 0; }
  to { opacity: 1; }
`,$A=Oe`
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,EA=d.div`
  position: fixed;
  inset: 0;
  z-index: 500;
  background: rgba(0, 0, 0, 0.62);
  display: grid;
  place-items: center;
  padding: 20px;
  animation: ${CA} 0.18s ease both;
`,PA=d.div`
  width: min(100%, 360px);
  border-radius: 14px;
  border: 1px solid #3f3f46;
  background: #18181b;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.45);
  animation: ${$A} 0.22s cubic-bezier(0.22, 1, 0.36, 1) both;
  overflow: hidden;
`,IA=d.div`
  padding: 22px 22px 18px;
`,TA=d.h3`
  margin: 0 0 10px;
  font-size: 16px;
  font-weight: 600;
  color: #f4f4f5;
`,RA=d.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.55;
  color: #a1a1aa;
`,MA=d.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 14px 18px 18px;
  border-top: 1px solid #27272a;
  background: #111114;
`;function Dr({open:e,title:t,message:n,confirmLabel:r="확인",cancelLabel:i="취소",onConfirm:s,onCancel:l}){const a=y.useCallback(c=>{c.target===c.currentTarget&&l()},[l]);return y.useEffect(()=>{if(!e)return;const c=u=>{u.key==="Escape"&&l()};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[e,l]),e?o.jsx(EA,{role:"presentation",onClick:a,children:o.jsxs(PA,{role:"dialog","aria-modal":"true","aria-labelledby":"admin-confirm-title",children:[o.jsxs(IA,{children:[o.jsx(TA,{id:"admin-confirm-title",children:t}),o.jsx(RA,{children:n})]}),o.jsxs(MA,{children:[o.jsx(ze,{$variant:"ghost",type:"button",onClick:l,children:i}),o.jsx(ze,{$variant:"primary",type:"button",onClick:s,children:r})]})]})}):null}const zA=d.div`
  display: inline-block;
  max-width: 100%;
`,AA=d.div`
  width: 252px;
  max-width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #3f3f46;
  background: #09090b;
`,_A=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`,NA=d.div`
  font-size: 13px;
  font-weight: 600;
  color: #f4f4f5;
`,M4=d.button`
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 6px;
  background: #27272a;
  color: #e4e4e7;
  cursor: pointer;
  display: grid;
  place-items: center;
  font-size: 16px;
  line-height: 1;

  &:hover {
    background: #3f3f46;
  }
`,OA=d.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  margin-bottom: 4px;
`,DA=d.span`
  text-align: center;
  font-size: 10px;
  font-weight: 600;
  color: #71717a;
  padding: 2px 0;
`,BA=d.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
`,FA=d.button`
  height: 30px;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  color: ${({$muted:e})=>e?"#52525b":"#f4f4f5"};
  background: ${({$inRange:e,$rangeStart:t,$rangeEnd:n})=>t||n?"#7c3aed":e?"rgba(124, 58, 237, 0.22)":"transparent"};
  box-shadow: ${({$today:e})=>e?"inset 0 0 0 1px #a78bfa":"none"};
  font-weight: ${({$rangeStart:e,$rangeEnd:t})=>e||t?700:500};

  &:hover:not(:disabled) {
    background: ${({$rangeStart:e,$rangeEnd:t,$inRange:n})=>e||t?"#6d28d9":n?"rgba(124, 58, 237, 0.32)":"#27272a"};
  }

  &:disabled {
    cursor: default;
    opacity: 0.35;
  }
`,HA=d.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-size: 12px;
  color: #a1a1aa;
`,UA=d.button`
  border: none;
  background: none;
  color: #71717a;
  font-size: 12px;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: #e4e4e7;
  }
`,VA=d.p`
  margin: 6px 0 0;
  font-size: 12px;
  color: #71717a;
  line-height: 1.45;
`,WA=["일","월","화","수","목","금","토"];function z4(e){const[t,n,r]=e.split("-").map(Number);return new Date(t,n-1,r)}function id(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}function od(e,t){return e.localeCompare(t)}function KA(e,t){return`${e}-${String(t+1).padStart(2,"0")}`}function YA({startDate:e,endDate:t,onChange:n,allowClear:r=!0,hint:i}){const s=e?z4(e):new Date(`${gs()}T12:00:00+09:00`),[l,a]=y.useState(s.getFullYear()),[c,u]=y.useState(s.getMonth()),[p,f]=y.useState(null),h=gs(),g=EL(e,t),w=y.useMemo(()=>{const L=new Date(l,c,1).getDay(),b=new Date(l,c+1,0).getDate(),$=new Date(l,c,0).getDate(),k=[];for(let S=L-1;S>=0;S-=1){const M=$-S,R=new Date(l,c-1,M);k.push({iso:id(R),day:M,inMonth:!1})}for(let S=1;S<=b;S+=1){const M=new Date(l,c,S);k.push({iso:id(M),day:S,inMonth:!0})}for(;k.length%7!==0;){const S=k.length-(L+b)+1,M=new Date(l,c+1,S);k.push({iso:id(M),day:S,inMonth:!1})}return k},[c,l]),v=L=>{const b=new Date(l,c+L,1);a(b.getFullYear()),u(b.getMonth())},C=(L,b)=>{if(!b||L===b){n({startDate:L,endDate:L});return}od(L,b)<=0?n({startDate:L,endDate:b}):n({startDate:b,endDate:L})},x=(L,b)=>{if(!b){const $=z4(L);a($.getFullYear()),u($.getMonth())}if(!p){f(L),n({startDate:L,endDate:L});return}C(p,L),f(null)},m=L=>{if(!e)return!1;const b=t??e;return od(e,L)<=0&&od(L,b)<=0};return o.jsxs(zA,{children:[o.jsxs(AA,{children:[o.jsxs(_A,{children:[o.jsx(M4,{type:"button","aria-label":"이전 달",onClick:()=>v(-1),children:"‹"}),o.jsxs(NA,{children:[l,"년 ",c+1,"월"]}),o.jsx(M4,{type:"button","aria-label":"다음 달",onClick:()=>v(1),children:"›"})]}),o.jsx(OA,{children:WA.map(L=>o.jsx(DA,{children:L},L))}),o.jsx(BA,{children:w.map(({iso:L,day:b,inMonth:$})=>{const k=t??e,S=e===L,M=k===L&&e!==k,R=m(L);return o.jsx(FA,{type:"button",$muted:!$,$inRange:R&&!S&&!M,$rangeStart:S,$rangeEnd:M,$today:L===h,onClick:()=>x(L,$),children:b},`${KA(l,c)}-${L}`)})}),o.jsxs(HA,{children:[o.jsx("span",{children:g??"날짜를 선택하세요"}),r&&(e||t)?o.jsx(UA,{type:"button",onClick:()=>{f(null),n({startDate:void 0,endDate:void 0})},children:"초기화"}):null]})]}),i?o.jsx(VA,{children:i}):null]})}const GA="유의사항";function ZA(e){var t;return((t=e==null?void 0:e.find(n=>n.title.includes("유의사항")))==null?void 0:t.body)??""}function qA(e,t){const n=[...e??[]],r=n.findIndex(s=>s.title.includes("유의사항")),i={title:GA,body:t};return r>=0?n[r]=i:n.push(i),n}function QA(e){return(e??[]).join(", ")}function XA(e){return e.split(/[,，]/).map(t=>t.trim()).filter(Boolean)}function dl(e){var r;const t=e.photos??[],n=((r=e.thumbnailUrl)==null?void 0:r.trim())||t[0]||"";return Za({...e,photos:t,thumbnailUrl:n})}function JA(){const[e,t]=y.useState([]),[n,r]=y.useState(null),[i,s]=y.useState(!1),[l,a]=y.useState(null),[c,u]=y.useState("basic"),[p,f]=y.useState(null),[h,g]=y.useState(!1),[w,v]=y.useState(!1),[C,x]=y.useState(!1),[m,L]=y.useState(null),b=y.useCallback(async()=>{f(null);try{const z=await JR();t(z)}catch(z){f(z instanceof Error?z.message:"목록 로드 실패")}},[]);y.useEffect(()=>{b()},[b]);const $=y.useMemo(()=>e.find(z=>z.id===n)??null,[e,n]),k=y.useMemo(()=>m?e.find(z=>z.id===m)??null:null,[e,m]);y.useEffect(()=>{if($&&!i){const z=dl(structuredClone($.data));a(z)}},[$,i]);const S=()=>{const z=pM(P$());r(null),s(!0),a(z),u("basic")},M=()=>{if(l!==null){v(!0);return}S()},R=async()=>{if(l){g(!0),f(null);try{const z=dl(l),A=await tM(i?null:n,z.regionId,z);await b(),r(A.id),s(!1),a(dl(A.data)),u("basic")}catch(z){f(z instanceof Error?z.message:"저장 실패")}finally{g(!1)}}},I=async()=>{if(!m)return;const z=m;L(null),f(null);try{await nM(z),n===z&&(r(null),a(null),s(!1)),await b()}catch(A){f(A instanceof Error?A.message:"삭제 실패")}},T=(z,A)=>{if(!l)return;const O=[...l.programs??[]],j={...O[z],...A};O[z]={...j,status:l1(j)},a({...l,programs:O})},E=z=>{if(!l)return;const A=[...l.programs??[]],O=z==="event"?PL():{},j={id:fM(A),kind:z,title:z==="event"?"새 행사":"새 프로그램",status:"ongoing",imageUrl:"",imageUrls:[],bodyFromVenue:"",reviews:[],...O};A.push({...j,status:l1(j)}),a({...l,programs:A}),u("programs")},N=z=>{if(!l)return;const A=(l.programs??[]).filter((O,j)=>j!==z);a({...l,programs:A})},D=z=>{l&&a({...l,photos:z,thumbnailUrl:z[0]??l.thumbnailUrl})},H=y.useMemo(()=>l?dl(l):null,[l]),_={basic:"기본",programs:"행사·프로그램"};return o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(260px, 1fr) minmax(340px, 1.15fr) max-content",gap:16,alignItems:"start"},children:[o.jsxs(xn,{children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:12},children:[o.jsx("h2",{style:{margin:0,fontSize:18},children:"명상지·센터"}),o.jsx(ze,{$variant:"primary",type:"button",onClick:M,children:"+ 등록"})]}),p&&o.jsx(Zr,{children:p}),o.jsxs(o0,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"이름"}),o.jsx("th",{children:"지역"}),o.jsx("th",{children:"구분"}),o.jsx("th",{children:"행사·프로그램"}),o.jsx("th",{})]})}),o.jsx("tbody",{children:e.map(z=>o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("button",{type:"button",style:{background:"none",border:"none",color:"#fff",cursor:"pointer",padding:0},onClick:()=>{r(z.id),s(!1)},children:z.name||z.id})}),o.jsx("td",{children:oo(z.regionId)}),o.jsx("td",{children:z.data.venueKind??"명상지"}),o.jsx("td",{children:(z.data.programs??[]).length}),o.jsx("td",{children:o.jsxs("div",{style:{display:"flex",gap:6,justifyContent:"flex-end",flexWrap:"wrap"},children:[o.jsx(ze,{type:"button",onClick:()=>{r(z.id),s(!1),u("basic")},children:"수정"}),o.jsx(ze,{type:"button",onClick:()=>{r(z.id),s(!1),u("programs")},children:"행사·프로그램"}),o.jsx(ze,{$variant:"danger",type:"button",onClick:()=>L(z.id),children:"삭제"})]})})]},z.id))})]})]}),o.jsx(xn,{children:l?o.jsxs(o.Fragment,{children:[!i&&n?o.jsxs("p",{style:{margin:"0 0 12px",color:"#71717a",fontSize:13},children:["번호: ",n]}):o.jsx("p",{style:{margin:"0 0 12px",color:"#71717a",fontSize:13},children:"저장 시 번호가 자동 부여됩니다."}),o.jsxs("div",{style:{display:"flex",gap:8,marginBottom:12,flexWrap:"wrap"},children:[["basic","programs"].map(z=>o.jsx(ze,{$variant:c===z?"primary":"ghost",type:"button",onClick:()=>u(z),children:_[z]},z)),o.jsx(ze,{$variant:"primary",type:"button",onClick:()=>x(!0),disabled:h,style:{marginLeft:"auto"},children:h?"저장 중…":"저장"})]}),c==="basic"&&o.jsxs(o.Fragment,{children:[o.jsx(j4,{photos:l.photos??[],onChange:D,maxPhotos:10}),o.jsx(lz,{value:l.regionId,onChange:z=>a({...l,regionId:z})}),o.jsxs(pe,{children:[o.jsx(de,{children:"구분"}),o.jsxs("select",{value:l.venueKind??"명상지",onChange:z=>a({...l,venueKind:z.target.value}),style:{width:"100%",padding:8,borderRadius:8,background:"#09090b",color:"#fff",border:"1px solid #3f3f46"},children:[o.jsx("option",{value:"명상지",children:"명상지"}),o.jsx("option",{value:"명상센터",children:"명상센터"})]})]}),o.jsxs(pe,{children:[o.jsx(de,{children:"이름"}),o.jsx(tt,{value:l.name,onChange:z=>a({...l,name:z.target.value})})]}),o.jsx(Ol,{label:"한 줄 소개 (마크다운)",value:l.shortDescription,onChange:z=>a({...l,shortDescription:z}),placeholder:"명상지를 한 줄로 소개해 주세요",minHeight:72}),o.jsx(Sz,{value:l.address,lat:l.lat,lng:l.lng,onChange:z=>a({...l,address:z}),onCoordsChange:(z,A)=>a(O=>O&&{...O,lat:z,lng:A})},i?"new":n??"edit"),o.jsx(Ol,{label:"입장료·이용 요금 (마크다운)",value:l.admissionFee??"",onChange:z=>a({...l,admissionFee:z}),placeholder:"예: 무료 / 성인 5,000원 / 프로그램별 상이",minHeight:88}),o.jsx(Ol,{label:"유의사항 (마크다운)",value:ZA(l.detailSections),onChange:z=>a({...l,detailSections:qA(l.detailSections,z)}),placeholder:`- 조용히 이용해 주세요
- 사전 예약 필수`,minHeight:100}),o.jsxs(pe,{children:[o.jsx(de,{children:"시설 정보"}),o.jsx(tt,{value:QA(l.facilities),onChange:z=>a({...l,facilities:XA(z.target.value)}),placeholder:"Wi-Fi, 주차, 다과·차 (쉼표로 구분)"}),o.jsx("p",{style:{margin:"6px 0 0",fontSize:12,color:"#71717a"},children:"원하는 시설명을 쉼표로 구분해 직접 입력하세요."})]})]}),c==="programs"&&o.jsxs(o.Fragment,{children:[o.jsx("p",{style:{margin:"0 0 12px",color:"#a1a1aa",fontSize:13},children:"행사·프로그램은 이 장소에만 속합니다. 다른 명상지·센터와 공유되지 않습니다."}),o.jsxs("div",{style:{display:"flex",gap:8,marginBottom:12},children:[o.jsx(ze,{$variant:"ghost",type:"button",onClick:()=>E("event"),children:"+ 행사"}),o.jsx(ze,{$variant:"ghost",type:"button",onClick:()=>E("program"),children:"+ 프로그램"})]}),(l.programs??[]).map((z,A)=>o.jsxs(xn,{style:{marginBottom:12,background:"#111114"},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8,gap:8},children:[o.jsxs("strong",{style:{fontSize:14},children:[z.kind==="event"?"행사":"프로그램"," · ",z.title||"(제목 없음)"]}),o.jsx("span",{style:{fontSize:12,padding:"2px 8px",borderRadius:999,background:z.status==="past"?"#27272a":"rgba(124, 58, 237, 0.25)",color:z.status==="past"?"#a1a1aa":"#e9d5ff",flexShrink:0},children:$L(z)}),o.jsx(ze,{$variant:"danger",type:"button",onClick:()=>N(A),children:"삭제"})]}),o.jsxs(pe,{children:[o.jsx(de,{children:"구분"}),o.jsxs("select",{value:z.kind??"program",onChange:O=>T(A,{kind:O.target.value}),style:{width:"100%",padding:8,borderRadius:8,background:"#09090b",color:"#fff",border:"1px solid #3f3f46"},children:[o.jsx("option",{value:"event",children:"행사"}),o.jsx("option",{value:"program",children:"프로그램"})]})]}),o.jsxs(pe,{children:[o.jsx(de,{children:"제목"}),o.jsx(tt,{value:z.title,onChange:O=>T(A,{title:O.target.value})})]}),o.jsxs(pe,{children:[o.jsx(de,{children:z.kind==="event"?"행사 기간":"기간 (선택)"}),o.jsx(YA,{startDate:z.startDate,endDate:z.endDate,onChange:O=>T(A,O),allowClear:z.kind!=="event",hint:z.kind==="event"?"시작일 → 종료일 순으로 두 번 클릭하세요. 종료일이 지나면 자동으로 완료됩니다.":"기간을 넣으면 종료일 이후 자동으로 완료 처리됩니다."})]}),o.jsx(j4,{label:"사진",photos:t5(z.imageUrl,z.imageUrls),onChange:O=>T(A,QM(O)),maxPhotos:10,hint:"첫 사진이 대표입니다."}),o.jsxs(pe,{children:[o.jsx(de,{children:"소개 (마크다운)"}),o.jsx(Dn,{style:{minHeight:120},value:z.bodyFromVenue,onChange:O=>T(A,{bodyFromVenue:O.target.value})})]})]},z.id)),(l.programs??[]).length===0?o.jsx("p",{style:{color:"#71717a",fontSize:13},children:"등록된 행사·프로그램이 없습니다."}):null]})]}):o.jsx("p",{style:{color:"#a1a1aa"},children:"왼쪽에서 항목을 선택하거나 새로 등록하세요."})}),o.jsx(SA,{place:H}),o.jsx(Dr,{open:w,title:"새로 등록",message:"이전에 작성 중인 내용이 사라집니다. 새로 등록하시겠습니까?",cancelLabel:"계속 작성",confirmLabel:"새로 등록",onCancel:()=>v(!1),onConfirm:()=>{v(!1),S()}}),o.jsx(Dr,{open:C,title:"저장",message:i?"등록하시겠습니까?":"저장하시겠습니까?",cancelLabel:"취소",confirmLabel:"저장",onCancel:()=>x(!1),onConfirm:()=>{x(!1),R()}}),o.jsx(Dr,{open:m!==null,title:"삭제",message:k?`「${k.name||k.id}」을(를) 삭제할까요? 삭제 후에는 되돌릴 수 없습니다.`:"삭제할까요? 삭제 후에는 되돌릴 수 없습니다.",cancelLabel:"취소",confirmLabel:"삭제",onCancel:()=>L(null),onConfirm:()=>void I()})]})}const A4=d.div`
  border: 6px solid #3f3f46;
  border-radius: 24px;
  overflow: hidden;
  width: 360px;
  max-height: min(76vh, 820px);
  overflow-y: auto;
  background: ${({theme:e})=>e.colors.white};
`,e_=d.div`
  margin: 0 auto;
  padding: 0 0 24px;
  color: ${({theme:e})=>e.colors.text900};
`,t_=d.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.95);
  z-index: 2;
  font-size: 1rem;
  font-weight: 600;
`,n_=d.div`
  padding: 8px 20px 20px;
  text-align: center;
`,r_=d.img`
  width: 112px;
  height: 112px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${({theme:e})=>e.colors.primary200};
`,i_=d.div`
  width: 112px;
  height: 112px;
  border-radius: 50%;
  margin: 0 auto;
  display: grid;
  place-items: center;
  background: ${({theme:e})=>e.colors.primary50};
  border: 3px solid ${({theme:e})=>e.colors.primary200};
  color: ${({theme:e})=>e.colors.primary700};
  font-size: 0.85rem;
`,o_=d.h2`
  margin: 16px 0 8px;
  font-size: 1.6rem;
  font-weight: 700;
`,_4=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
`,N4=d.span`
  font-size: 0.85rem;
  padding: 4px 10px;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary50};
  color: ${({theme:e})=>e.colors.primary700};
`,Sr=d.section`
  padding: 0 20px 24px;
`,Cr=d.h3`
  margin: 0 0 10px;
  font-size: 1.15rem;
  font-weight: 700;
`,So=d.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.65;
  color: ${({theme:e})=>e.colors.text700};
`,O4=d.ul`
  margin: 0;
  padding-left: 1.2em;
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.6;

  li {
    margin-bottom: 6px;
  }
`,D4=d.div`
  margin-bottom: 14px;
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  border-radius: ${({theme:e})=>e.radii.lg};
  overflow: hidden;
  background: ${({theme:e})=>e.colors.white};
`,B4=d.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  display: block;
`,F4=d.div`
  padding: 14px 16px;
`,H4=d.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 6px;
  margin-bottom: 8px;
  background: ${({theme:e,$past:t})=>t?e.colors.bg100:e.colors.primary100};
  color: ${({theme:e,$past:t})=>t?e.colors.text700:e.colors.primary700};
`,U4=d.span`
  display: block;
  margin: 0 0 6px;
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
`,V4=d.span`
  display: block;
  font-size: 1rem;
  line-height: 1.65;
  color: ${({theme:e})=>e.colors.text700};
`,s_=d.p`
  margin: 0;
  padding: 24px 0;
  text-align: center;
  color: #52525b;
  font-size: 13px;
`;function l_({expert:e}){if(!e)return o.jsx(ja,{children:o.jsx(A4,{children:o.jsx(s_,{children:"전문가를 선택하거나 새로 입력하면 실제 화면처럼 미리보기가 표시됩니다."})})});const t=(e.programs??[]).filter(i=>i.status==="ongoing"),n=(e.programs??[]).filter(i=>i.status==="past"),r=[...e.degrees??[],...e.certificates??[]];return o.jsx(ja,{children:o.jsx(A4,{children:o.jsxs(e_,{children:[o.jsx(t_,{children:"‹ 명상 전문가"}),o.jsxs(n_,{children:[e.avatarUrl?o.jsx(r_,{src:e.avatarUrl,alt:""}):o.jsx(i_,{children:"사진"}),o.jsx(o_,{children:e.name||"활동명"}),o.jsx(_4,{children:(e.specialties??[]).map(i=>o.jsx(N4,{children:i},i))})]}),o.jsxs(Sr,{children:[o.jsx(Cr,{children:"자기소개"}),o.jsx(So,{as:"div",children:o.jsx(io,{markdown:e.intro,fallback:o.jsx("span",{style:{color:"#9ca3af"},children:"소개를 입력하세요."})})})]}),o.jsxs(Sr,{children:[o.jsx(Cr,{children:"학위·이수"}),o.jsx(O4,{children:r.map(i=>o.jsx("li",{children:i},i))})]}),o.jsxs(Sr,{children:[o.jsx(Cr,{children:"경력"}),o.jsx(O4,{children:(e.careers??[]).map(i=>o.jsx("li",{children:i},i))})]}),o.jsxs(Sr,{children:[o.jsx(Cr,{children:"클래스·분야"}),o.jsx(_4,{style:{justifyContent:"flex-start"},children:(e.classTypes??[]).map(i=>o.jsx(N4,{children:i},i))})]}),o.jsxs(Sr,{children:[o.jsx(Cr,{children:"센터·활동 지역"}),e.hasCenter?o.jsxs(o.Fragment,{children:[e.centerSummary&&o.jsx(So,{style:{marginBottom:8},children:e.centerSummary}),e.centerAddress&&o.jsx(So,{children:e.centerAddress})]}):o.jsxs(So,{children:["주 활동 지역:"," ",(e.regionIds??[]).map(oo).filter(Boolean).join(", ")||"—"]})]}),o.jsxs(Sr,{children:[o.jsx(Cr,{children:"진행 중인 클래스"}),t.length===0&&o.jsx(So,{children:"현재 모집 중인 공개 일정이 없어요."}),t.map(i=>o.jsxs(D4,{children:[i.imageUrl&&o.jsx(B4,{src:i.imageUrl,alt:""}),o.jsxs(F4,{children:[o.jsx(H4,{children:"진행 중"}),o.jsx(U4,{children:i.title}),o.jsx(V4,{children:i.description})]})]},i.id))]}),n.length>0&&o.jsxs(Sr,{children:[o.jsx(Cr,{children:"이전 프로그램"}),n.map(i=>o.jsxs(D4,{children:[i.imageUrl&&o.jsx(B4,{src:i.imageUrl,alt:""}),o.jsxs(F4,{children:[o.jsx(H4,{$past:!0,children:"종료"}),o.jsx(U4,{children:i.title}),o.jsx(V4,{children:i.description})]})]},i.id))]})]})})})}const a_=/^[A-Za-z0-9._-]{4,64}$/,c_=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,u_=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,d_=["마음챙김","아트명상","숲 명상","호흡명상","걷기명상","소리명상"],pl=e=>e.split(`
`).map(t=>t.trim()).filter(Boolean),fl=()=>({loginId:"",email:"",password:""}),hl=e=>({padding:"6px 12px",borderRadius:999,fontSize:13,cursor:"pointer",border:`1px solid ${e?"#7c5cbf":"#3f3f46"}`,background:e?"rgba(124, 92, 191, 0.28)":"transparent",color:e?"#fff":"#a1a1aa",transition:"all 0.12s ease"}),gl={minHeight:84,fontFamily:"inherit",fontSize:14};function p_(){const[e,t]=y.useState([]),[n,r]=y.useState(null),[i,s]=y.useState(!1),[l,a]=y.useState(null),[c,u]=y.useState(fl()),[p,f]=y.useState("idle"),[h,g]=y.useState(null),[w,v]=y.useState(!1),[C,x]=y.useState(null),m=y.useCallback(async()=>{try{t(await rM())}catch(_){g(_ instanceof Error?_.message:"로드 실패")}},[]);y.useEffect(()=>{m()},[m]);const L=_=>{r(_.id),s(!1),a({...ll(),...structuredClone(_.data)}),u(fl()),f("idle")},b=()=>{r(null),s(!0),a(ll()),u(fl()),f("idle")},$=_=>a(z=>z&&{...z,..._}),k=(_,z)=>a(A=>{if(!A)return A;const O=A[_];return{...A,[_]:O.includes(z)?O.filter(j=>j!==z):[...O,z]}}),S=a_.test(c.loginId),M=c_.test(c.password),R=u_.test(c.email.trim()),I=async()=>{if(!S){ct.error("아이디는 영문·숫자와 . _ - 만, 4~64자로 입력하세요.");return}f("checking");try{const _=await oM(c.loginId.trim());f(_?"available":"taken"),_||ct.error("이미 사용 중인 아이디입니다.")}catch(_){f("idle"),ct.error(_ instanceof Error?_.message:"중복 확인 실패")}},T=_=>{u(z=>({...z,loginId:_})),f("idle")},E=()=>{var _;if(i){if(p!=="available")return ct.error("아이디 중복확인을 해주세요.");if(!R)return ct.error("이메일 형식을 확인하세요.");if(!M)return ct.error("비밀번호는 8자 이상이며 영문·숫자·특수문자를 모두 포함해야 합니다.")}if(!((_=l==null?void 0:l.name)!=null&&_.trim()))return ct.error("활동명을 입력하세요.");v(!0)},N=async()=>{if(l){g(null);try{if(i){const _=await sM({loginId:c.loginId.trim(),email:c.email.trim(),password:c.password,data:l});await m(),r(_.id),s(!1),a({...ll(),..._.data}),u(fl()),f("idle"),ct.success("전문가 계정이 생성되었습니다.")}else{const _=await iM(n,l);await m(),r(_.id),a({...ll(),..._.data}),ct.success("저장되었습니다.")}}catch(_){ct.error(_ instanceof Error?_.message:"저장 실패")}}},D=async()=>{if(!C)return;const _=C;x(null);try{await lM(_),n===_&&(r(null),s(!1),a(null)),await m()}catch(z){ct.error(z instanceof Error?z.message:"삭제 실패")}},H=C?e.find(_=>_.id===C):null;return o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(200px, 0.7fr) minmax(360px, 1.3fr) max-content",gap:16,alignItems:"start"},children:[o.jsxs(xn,{children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:12},children:[o.jsx("h2",{style:{margin:0},children:"전문가"}),o.jsx(ze,{$variant:"primary",type:"button",onClick:b,children:"+ 등록"})]}),h&&o.jsx(Zr,{children:h}),o.jsxs(o0,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"이름"}),o.jsx("th",{})]})}),o.jsx("tbody",{children:e.map(_=>o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("button",{type:"button",style:{background:"none",border:"none",color:"#fff",cursor:"pointer"},onClick:()=>L(_),children:_.name||`전문가 ${_.id}`})}),o.jsx("td",{children:o.jsxs("div",{style:{display:"flex",gap:6,justifyContent:"flex-end"},children:[o.jsx(ze,{type:"button",onClick:()=>L(_),children:"수정"}),o.jsx(ze,{$variant:"danger",type:"button",onClick:()=>x(_.id),children:"삭제"})]})})]},_.id))})]})]}),o.jsx(xn,{children:l?o.jsxs(o.Fragment,{children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[o.jsx("p",{style:{margin:0,color:"#71717a",fontSize:13},children:!i&&n?`번호: ${n}`:"전문가 계정을 새로 만듭니다."}),o.jsx(ze,{$variant:"primary",type:"button",onClick:E,children:i?"계정 생성":"저장"})]}),i&&o.jsxs("div",{style:{border:"1px solid #27272a",borderRadius:12,padding:14,marginBottom:16,background:"#141417"},children:[o.jsx("h3",{style:{margin:"0 0 10px",fontSize:14,color:"#e4e4e7"},children:"로그인 계정"}),o.jsxs(pe,{children:[o.jsx(de,{children:"아이디"}),o.jsxs("div",{style:{display:"flex",gap:8,alignItems:"stretch"},children:[o.jsx(tt,{value:c.loginId,onChange:_=>T(_.target.value),placeholder:"영문·숫자 . _ - (4~64자)",autoComplete:"off"}),o.jsx(ze,{type:"button",onClick:I,disabled:p==="checking"||!S,style:{whiteSpace:"nowrap"},children:p==="checking"?"확인 중…":"중복확인"})]}),p==="available"&&o.jsx("p",{style:{margin:"6px 0 0",fontSize:12,color:"#34d399"},children:"사용 가능한 아이디입니다."}),p==="taken"&&o.jsx("p",{style:{margin:"6px 0 0",fontSize:12,color:"#f87171"},children:"이미 사용 중인 아이디입니다."})]}),o.jsxs(pe,{children:[o.jsx(de,{children:"이메일"}),o.jsx(tt,{type:"email",value:c.email,onChange:_=>u(z=>({...z,email:_.target.value})),placeholder:"expert@example.com",autoComplete:"off"})]}),o.jsxs(pe,{children:[o.jsx(de,{children:"비밀번호"}),o.jsx(tt,{type:"password",value:c.password,onChange:_=>u(z=>({...z,password:_.target.value})),placeholder:"8자 이상 · 영문·숫자·특수문자 포함",autoComplete:"new-password"}),o.jsx("p",{style:{margin:"6px 0 0",fontSize:12,color:c.password?M?"#34d399":"#f87171":"#a1a1aa"},children:"8자 이상, 영문·숫자·특수문자를 모두 포함"})]})]}),o.jsx(qM,{label:"프로필 사진",value:l.avatarUrl,onChange:_=>$({avatarUrl:_})}),o.jsxs(pe,{children:[o.jsx(de,{children:"활동명"}),o.jsx(tt,{value:l.name,maxLength:80,onChange:_=>$({name:_.target.value})})]}),o.jsx(Ol,{label:"자기소개 (마크다운)",value:l.intro,onChange:_=>$({intro:_}),placeholder:"명상을 시작하게 된 계기와 수업 철학을 소개해 주세요.",minHeight:120}),o.jsxs(pe,{children:[o.jsx(de,{children:"전문 분야 (한 줄에 하나)"}),o.jsx(Dn,{style:gl,value:(l.specialties??[]).join(`
`),onChange:_=>$({specialties:pl(_.target.value)}),placeholder:`마음챙김 명상
스트레스 완화`})]}),o.jsxs(pe,{children:[o.jsx(de,{children:"학위 (한 줄에 하나)"}),o.jsx(Dn,{style:gl,value:(l.degrees??[]).join(`
`),onChange:_=>$({degrees:pl(_.target.value)}),placeholder:"○○대학교 상담심리학 석사"})]}),o.jsxs(pe,{children:[o.jsx(de,{children:"자격증·이수 교육과정 (한 줄에 하나)"}),o.jsx(Dn,{style:gl,value:(l.certificates??[]).join(`
`),onChange:_=>$({certificates:pl(_.target.value)})})]}),o.jsxs(pe,{children:[o.jsx(de,{children:"경력 (한 줄에 하나)"}),o.jsx(Dn,{style:gl,value:(l.careers??[]).join(`
`),onChange:_=>$({careers:pl(_.target.value)})})]}),o.jsxs(pe,{children:[o.jsx(de,{children:"클래스 종류"}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:d_.map(_=>o.jsx("button",{type:"button",style:hl(l.classTypes.includes(_)),onClick:()=>k("classTypes",_),children:_},_))})]}),o.jsxs(pe,{children:[o.jsxs(de,{children:["활동 지역 (",l.regionIds.length,"개 선택)"]}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:Gr.map(_=>o.jsx("button",{type:"button",style:hl(l.regionIds.includes(_.id)),onClick:()=>k("regionIds",_.id),children:_.name},_.id))})]}),o.jsxs(pe,{children:[o.jsx(de,{children:"센터 여부"}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[o.jsx("button",{type:"button",style:hl(!l.hasCenter),onClick:()=>$({hasCenter:!1}),children:"센터 없음"}),o.jsx("button",{type:"button",style:hl(l.hasCenter),onClick:()=>$({hasCenter:!0}),children:"센터 있음"})]})]}),l.hasCenter&&o.jsxs(o.Fragment,{children:[o.jsxs(pe,{children:[o.jsx(de,{children:"센터명"}),o.jsx(tt,{value:l.centerSummary??"",onChange:_=>$({centerSummary:_.target.value})})]}),o.jsxs(pe,{children:[o.jsx(de,{children:"센터 위치"}),o.jsx(tt,{value:l.centerAddress??"",onChange:_=>$({centerAddress:_.target.value})})]}),o.jsxs(pe,{children:[o.jsx(de,{children:"사업자등록번호"}),o.jsx(tt,{inputMode:"numeric",value:l.businessRegistrationNumber??"",onChange:_=>$({businessRegistrationNumber:_.target.value.replace(/[^\d-]/g,"")})})]}),o.jsxs(pe,{children:[o.jsx(de,{children:"개업일자"}),o.jsx(tt,{type:"date",value:l.businessOpeningDate??"",onChange:_=>$({businessOpeningDate:_.target.value})})]})]})]}):o.jsx("p",{style:{color:"#a1a1aa"},children:"항목을 선택하거나 새로 등록하세요."})}),o.jsx(l_,{expert:l}),o.jsx(Dr,{open:w,title:i?"계정 생성":"저장",message:i?"전문가 계정을 생성하시겠습니까?":"저장하시겠습니까?",cancelLabel:"취소",confirmLabel:i?"생성":"저장",onCancel:()=>v(!1),onConfirm:()=>{v(!1),N()}}),o.jsx(Dr,{open:C!==null,title:"삭제",message:H?`「${H.name||H.id}」을(를) 삭제할까요?`:"삭제할까요?",cancelLabel:"취소",confirmLabel:"삭제",onCancel:()=>x(null),onConfirm:()=>void D()})]})}function f_(){return{category:"공지",title:"",date:new Date().toISOString().slice(0,10),summary:"",body:"",bullets:"",footer:""}}function W4(e){const t=e.details;return{category:String(e.category??"공지"),title:String(e.title??""),date:String(e.date??""),summary:String(e.summary??""),body:((t==null?void 0:t.paragraphs)??[]).join(`

`),bullets:((t==null?void 0:t.bullets)??[]).join(`
`),footer:String((t==null?void 0:t.footer)??"")}}function h_(e){const t=e.body.split(/\n{2,}/).map(i=>i.trim()).filter(Boolean),n=e.bullets.split(`
`).map(i=>i.trim()).filter(Boolean),r={paragraphs:t.length>0?t:[e.summary.trim()||e.title.trim()||"내용"]};return n.length>0&&(r.bullets=n),e.footer.trim()&&(r.footer=e.footer.trim()),{category:e.category.trim()||"공지",title:e.title.trim(),date:e.date.trim(),summary:e.summary.trim(),details:r}}function g_(){const[e,t]=y.useState([]),[n,r]=y.useState(null),[i,s]=y.useState(!1),[l,a]=y.useState(null),[c,u]=y.useState(null),[p,f]=y.useState(!1),[h,g]=y.useState(null),w=y.useCallback(async()=>{try{t(await aM())}catch(b){u(b instanceof Error?b.message:"로드 실패")}},[]);y.useEffect(()=>{w()},[w]);const v=()=>{r(null),s(!0),a(f_())},C=b=>{r(b.id),s(!1),a(W4(b.payload))},x=async()=>{if(l){u(null);try{const b=await cM(i?null:n,h_(l));await w(),r(b.id),s(!1),a(W4(b.payload))}catch(b){u(b instanceof Error?b.message:"저장 실패")}}},m=async()=>{if(!h)return;const b=h;g(null);try{await dM(b),n===b&&(r(null),s(!1),a(null)),await w()}catch($){u($ instanceof Error?$.message:"삭제 실패")}},L=h?e.find(b=>b.id===h):null;return o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1.2fr",gap:16},children:[o.jsxs(xn,{children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:12},children:[o.jsx("h2",{style:{margin:0},children:"공지"}),o.jsx(ze,{$variant:"primary",type:"button",onClick:v,children:"+ 등록"})]}),c&&o.jsx(Zr,{children:c}),o.jsxs(o0,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"제목"}),o.jsx("th",{})]})}),o.jsx("tbody",{children:e.map(b=>o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("button",{type:"button",style:{background:"none",border:"none",color:"#fff",cursor:"pointer"},onClick:()=>C(b),children:b.title||b.payload.title||""||`공지 ${b.id}`})}),o.jsx("td",{children:o.jsx(ze,{$variant:"danger",type:"button",onClick:()=>g(b.id),children:"삭제"})})]},b.id))})]})]}),o.jsx(xn,{children:l?o.jsxs(o.Fragment,{children:[!i&&n?o.jsxs("p",{style:{margin:"0 0 12px",color:"#71717a",fontSize:13},children:["번호: ",n]}):o.jsx("p",{style:{margin:"0 0 12px",color:"#71717a",fontSize:13},children:"저장 시 번호가 자동 부여됩니다."}),o.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:12},children:o.jsx(ze,{$variant:"primary",type:"button",onClick:()=>f(!0),children:"저장"})}),o.jsxs(pe,{children:[o.jsx(de,{children:"분류"}),o.jsx(tt,{value:l.category,onChange:b=>a({...l,category:b.target.value}),placeholder:"예: 공지, 업데이트"})]}),o.jsxs(pe,{children:[o.jsx(de,{children:"제목"}),o.jsx(tt,{value:l.title,onChange:b=>a({...l,title:b.target.value})})]}),o.jsxs(pe,{children:[o.jsx(de,{children:"날짜"}),o.jsx(tt,{type:"date",value:l.date,onChange:b=>a({...l,date:b.target.value})})]}),o.jsxs(pe,{children:[o.jsx(de,{children:"목록 요약"}),o.jsx(Dn,{style:{minHeight:72,fontFamily:"inherit",fontSize:14},value:l.summary,onChange:b=>a({...l,summary:b.target.value}),placeholder:"공지 목록에 보이는 한두 줄 요약"})]}),o.jsxs(pe,{children:[o.jsx(de,{children:"본문"}),o.jsx(Dn,{style:{minHeight:160,fontFamily:"inherit",fontSize:14},value:l.body,onChange:b=>a({...l,body:b.target.value}),placeholder:"문단마다 빈 줄로 구분"})]}),o.jsxs(pe,{children:[o.jsx(de,{children:"목록 (선택)"}),o.jsx(Dn,{style:{minHeight:88,fontFamily:"inherit",fontSize:14},value:l.bullets,onChange:b=>a({...l,bullets:b.target.value}),placeholder:"한 줄에 한 항목"})]}),o.jsxs(pe,{children:[o.jsx(de,{children:"하단 문구 (선택)"}),o.jsx(tt,{value:l.footer,onChange:b=>a({...l,footer:b.target.value})})]})]}):o.jsx("p",{style:{color:"#a1a1aa"},children:"공지를 선택하거나 새로 등록하세요."})}),o.jsx(Dr,{open:p,title:"저장",message:i?"등록하시겠습니까?":"저장하시겠습니까?",cancelLabel:"취소",confirmLabel:"저장",onCancel:()=>f(!1),onConfirm:()=>{f(!1),x()}}),o.jsx(Dr,{open:h!==null,title:"삭제",message:L?`「${L.title||L.payload.title||L.id}」을(를) 삭제할까요?`:"삭제할까요?",cancelLabel:"취소",confirmLabel:"삭제",onCancel:()=>g(null),onConfirm:()=>void m()})]})}const m_=[{to:"/admin",label:"트래픽 현황",end:!0},{to:"/admin/places",label:"명상지·센터"},{to:"/admin/experts",label:"전문가"},{to:"/admin/notices",label:"공지"}];function x_(){const[e,t]=y.useState(!0),n=yt(),r=zi(i=>i.logout);return o.jsxs(gM,{children:[o.jsxs(mM,{$open:e,children:[o.jsx("div",{style:{padding:"16px",fontWeight:700,fontSize:15},children:"명상맵 Admin"}),o.jsx("nav",{children:m_.map(i=>o.jsx(Z3,{to:i.to,end:i.end,style:{textDecoration:"none"},children:({isActive:s})=>o.jsx(vM,{as:"span",$active:s,children:i.label})},i.to))})]}),o.jsxs(xM,{children:[o.jsxs(LM,{children:[o.jsx(ze,{$variant:"ghost",type:"button",onClick:()=>t(i=>!i),children:"메뉴"}),o.jsxs("div",{style:{display:"flex",gap:8},children:[o.jsx(ze,{$variant:"ghost",type:"button",onClick:()=>n("/"),children:"앱으로"}),o.jsx(ze,{$variant:"ghost",type:"button",onClick:()=>{r().then(()=>n("/admin/login"))},children:"로그아웃"})]})]}),o.jsx(yM,{children:o.jsx(Np,{})})]})]})}function L_(){const e=zi(r=>r.bootstrap),t=zi(r=>r.ready),n=zi(r=>r.authenticated);return y.useEffect(()=>{e()},[e]),t?n?o.jsx(Np,{}):o.jsx(N9,{to:"/admin/login",replace:!0}):null}const y_=[{path:"/admin/login",element:o.jsx(kM,{})},{path:"/admin",element:o.jsx(L_,{}),children:[{element:o.jsx(x_,{}),children:[{index:!0,element:o.jsx(ZM,{})},{path:"places",element:o.jsx(JA,{})},{path:"experts",element:o.jsx(p_,{})},{path:"notices",element:o.jsx(g_,{})}]}]},{path:"/",element:o.jsx(my,{}),children:[{index:!0,element:o.jsx(uh,{})},{path:"meditation",element:o.jsx(uh,{})},{path:"meditation/map",element:o.jsx(Jv,{})},{path:"meditation/expert/:expertId/class/:programId",element:o.jsx(q$,{})},{path:"meditation/expert/:expertId",element:o.jsx(H$,{})},{path:"meditation/region/:regionId/experts",element:o.jsx(c$,{})},{path:"meditation/region/:regionId",element:o.jsx(QC,{})},{path:"meditation/place/:placeId",element:o.jsx(yP,{})},{path:"favorites",element:o.jsx(iI,{})},{path:"profile",element:o.jsx(nR,{})},{path:"profile/expert",element:o.jsx($R,{})},{path:"auth/oauth",element:o.jsx(PR,{})},{path:"notice",element:o.jsx(FP,{})},{path:"inquiry",element:o.jsx(qP,{})},{path:"service-info",element:o.jsx(FR,{})},{path:"*",element:o.jsx(YR,{})}]}],v_=()=>k9(y_),w_=()=>o.jsx(Y9,{children:o.jsx(v_,{})}),b_=d.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,k_=()=>(y.useEffect(()=>{Xt.getState().bootstrapAuth(),en.getState().hydrate().then(()=>Or.getState().pullFromServer())},[]),o.jsxs(b_,{children:[o.jsx(FL,{}),o.jsx(KL,{}),o.jsx(w_,{})]})),j_=Q8`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Noto Sans KR", sans-serif;
  }

  html {
    font-size: 10px;
    height: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    overscroll-behavior: none;
  }

  body {
    min-height: 100%;
    min-height: 100dvh;
    background: ${({theme:e})=>e.colors.warmCream};
    color: ${({theme:e})=>e.colors.charcoal};
    overflow-x: hidden;
    overscroll-behavior: none;
    -webkit-overflow-scrolling: touch;
    touch-action: manipulation;
  }

  #root {
    min-height: 100%;
    min-height: 100dvh;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font: inherit;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  input[type="checkbox"]:focus,
  input[type="checkbox"]:focus-visible {
    outline: none;
  }

  svg {
    display: block;
  }

  ::selection {
    background: ${({theme:e})=>e.colors.primary100};
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;sd.createRoot(document.getElementById("root")).render(o.jsx(Ye.StrictMode,{children:o.jsxs(G8,{theme:Ge,children:[o.jsx(j_,{}),o.jsx(k_,{})]})}));
