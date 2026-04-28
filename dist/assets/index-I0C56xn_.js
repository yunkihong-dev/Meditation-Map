function Xf(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var ll=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ul(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xd={exports:{}},Hl={},Jd={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ji=Symbol.for("react.element"),Jf=Symbol.for("react.portal"),e3=Symbol.for("react.fragment"),t3=Symbol.for("react.strict_mode"),n3=Symbol.for("react.profiler"),r3=Symbol.for("react.provider"),i3=Symbol.for("react.context"),o3=Symbol.for("react.forward_ref"),l3=Symbol.for("react.suspense"),s3=Symbol.for("react.memo"),a3=Symbol.for("react.lazy"),dc=Symbol.iterator;function u3(e){return e===null||typeof e!="object"?null:(e=dc&&e[dc]||e["@@iterator"],typeof e=="function"?e:null)}var e0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},t0=Object.assign,n0={};function Kr(e,t,n){this.props=e,this.context=t,this.refs=n0,this.updater=n||e0}Kr.prototype.isReactComponent={};Kr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function r0(){}r0.prototype=Kr.prototype;function Ou(e,t,n){this.props=e,this.context=t,this.refs=n0,this.updater=n||e0}var Du=Ou.prototype=new r0;Du.constructor=Ou;t0(Du,Kr.prototype);Du.isPureReactComponent=!0;var pc=Array.isArray,i0=Object.prototype.hasOwnProperty,Fu={current:null},o0={key:!0,ref:!0,__self:!0,__source:!0};function l0(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)i0.call(t,r)&&!o0.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Ji,type:e,key:o,ref:l,props:i,_owner:Fu.current}}function c3(e,t){return{$$typeof:Ji,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Bu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ji}function d3(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var fc=/\/+/g;function xs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?d3(""+e.key):t.toString(36)}function Oo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ji:case Jf:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+xs(l,0):r,pc(i)?(n="",e!=null&&(n=e.replace(fc,"$&/")+"/"),Oo(i,t,n,"",function(u){return u})):i!=null&&(Bu(i)&&(i=c3(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(fc,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",pc(e))for(var s=0;s<e.length;s++){o=e[s];var a=r+xs(o,s);l+=Oo(o,t,n,a,i)}else if(a=u3(e),typeof a=="function")for(e=a.call(e),s=0;!(o=e.next()).done;)o=o.value,a=r+xs(o,s++),l+=Oo(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ao(e,t,n){if(e==null)return e;var r=[],i=0;return Oo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function p3(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ze={current:null},Do={transition:null},f3={ReactCurrentDispatcher:Ze,ReactCurrentBatchConfig:Do,ReactCurrentOwner:Fu};function s0(){throw Error("act(...) is not supported in production builds of React.")}J.Children={map:ao,forEach:function(e,t,n){ao(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ao(e,function(){t++}),t},toArray:function(e){return ao(e,function(t){return t})||[]},only:function(e){if(!Bu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};J.Component=Kr;J.Fragment=e3;J.Profiler=n3;J.PureComponent=Ou;J.StrictMode=t3;J.Suspense=l3;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f3;J.act=s0;J.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=t0({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Fu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)i0.call(t,a)&&!o0.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Ji,type:e.type,key:i,ref:o,props:r,_owner:l}};J.createContext=function(e){return e={$$typeof:i3,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:r3,_context:e},e.Consumer=e};J.createElement=l0;J.createFactory=function(e){var t=l0.bind(null,e);return t.type=e,t};J.createRef=function(){return{current:null}};J.forwardRef=function(e){return{$$typeof:o3,render:e}};J.isValidElement=Bu;J.lazy=function(e){return{$$typeof:a3,_payload:{_status:-1,_result:e},_init:p3}};J.memo=function(e,t){return{$$typeof:s3,type:e,compare:t===void 0?null:t}};J.startTransition=function(e){var t=Do.transition;Do.transition={};try{e()}finally{Do.transition=t}};J.unstable_act=s0;J.useCallback=function(e,t){return Ze.current.useCallback(e,t)};J.useContext=function(e){return Ze.current.useContext(e)};J.useDebugValue=function(){};J.useDeferredValue=function(e){return Ze.current.useDeferredValue(e)};J.useEffect=function(e,t){return Ze.current.useEffect(e,t)};J.useId=function(){return Ze.current.useId()};J.useImperativeHandle=function(e,t,n){return Ze.current.useImperativeHandle(e,t,n)};J.useInsertionEffect=function(e,t){return Ze.current.useInsertionEffect(e,t)};J.useLayoutEffect=function(e,t){return Ze.current.useLayoutEffect(e,t)};J.useMemo=function(e,t){return Ze.current.useMemo(e,t)};J.useReducer=function(e,t,n){return Ze.current.useReducer(e,t,n)};J.useRef=function(e){return Ze.current.useRef(e)};J.useState=function(e){return Ze.current.useState(e)};J.useSyncExternalStore=function(e,t,n){return Ze.current.useSyncExternalStore(e,t,n)};J.useTransition=function(){return Ze.current.useTransition()};J.version="18.3.1";Jd.exports=J;var $=Jd.exports;const ke=Ul($),h3=Xf({__proto__:null,default:ke},[$]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L3=$,m3=Symbol.for("react.element"),g3=Symbol.for("react.fragment"),x3=Object.prototype.hasOwnProperty,y3=L3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v3={key:!0,ref:!0,__self:!0,__source:!0};function a0(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)x3.call(t,r)&&!v3.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:m3,type:e,key:o,ref:l,props:i,_owner:y3.current}}Hl.Fragment=g3;Hl.jsx=a0;Hl.jsxs=a0;Xd.exports=Hl;var c=Xd.exports,wa={},u0={exports:{}},ht={},c0={exports:{}},d0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,F){var y=T.length;T.push(F);e:for(;0<y;){var Z=y-1>>>1,Y=T[Z];if(0<i(Y,F))T[Z]=F,T[y]=Y,y=Z;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var F=T[0],y=T.pop();if(y!==F){T[0]=y;e:for(var Z=0,Y=T.length,C=Y>>>1;Z<C;){var le=2*(Z+1)-1,te=T[le],re=le+1,Ue=T[re];if(0>i(te,y))re<Y&&0>i(Ue,te)?(T[Z]=Ue,T[re]=y,Z=re):(T[Z]=te,T[le]=y,Z=le);else if(re<Y&&0>i(Ue,y))T[Z]=Ue,T[re]=y,Z=re;else break e}}return F}function i(T,F){var y=T.sortIndex-F.sortIndex;return y!==0?y:T.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],d=1,p=null,h=3,f=!1,v=!1,x=!1,j=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(T){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=T)r(u),F.sortIndex=F.expirationTime,t(a,F);else break;F=n(u)}}function k(T){if(x=!1,m(T),!v)if(n(a)!==null)v=!0,K(E);else{var F=n(u);F!==null&&q(k,F.startTime-T)}}function E(T,F){v=!1,x&&(x=!1,L(P),P=-1),f=!0;var y=h;try{for(m(F),p=n(a);p!==null&&(!(p.expirationTime>F)||T&&!_());){var Z=p.callback;if(typeof Z=="function"){p.callback=null,h=p.priorityLevel;var Y=Z(p.expirationTime<=F);F=e.unstable_now(),typeof Y=="function"?p.callback=Y:p===n(a)&&r(a),m(F)}else r(a);p=n(a)}if(p!==null)var C=!0;else{var le=n(u);le!==null&&q(k,le.startTime-F),C=!1}return C}finally{p=null,h=y,f=!1}}var S=!1,b=null,P=-1,A=5,R=-1;function _(){return!(e.unstable_now()-R<A)}function N(){if(b!==null){var T=e.unstable_now();R=T;var F=!0;try{F=b(!0,T)}finally{F?O():(S=!1,b=null)}}else S=!1}var O;if(typeof g=="function")O=function(){g(N)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,U=V.port2;V.port1.onmessage=N,O=function(){U.postMessage(null)}}else O=function(){j(N,0)};function K(T){b=T,S||(S=!0,O())}function q(T,F){P=j(function(){T(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){v||f||(v=!0,K(E))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(T){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var y=h;h=F;try{return T()}finally{h=y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,F){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var y=h;h=T;try{return F()}finally{h=y}},e.unstable_scheduleCallback=function(T,F,y){var Z=e.unstable_now();switch(typeof y=="object"&&y!==null?(y=y.delay,y=typeof y=="number"&&0<y?Z+y:Z):y=Z,T){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=y+Y,T={id:d++,callback:F,priorityLevel:T,startTime:y,expirationTime:Y,sortIndex:-1},y>Z?(T.sortIndex=y,t(u,T),n(a)===null&&T===n(u)&&(x?(L(P),P=-1):x=!0,q(k,y-Z))):(T.sortIndex=Y,t(a,T),v||f||(v=!0,K(E))),T},e.unstable_shouldYield=_,e.unstable_wrapCallback=function(T){var F=h;return function(){var y=h;h=F;try{return T.apply(this,arguments)}finally{h=y}}}})(d0);c0.exports=d0;var w3=c0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k3=$,ft=w3;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p0=new Set,Ri={};function tr(e,t){Tr(e,t),Tr(e+"Capture",t)}function Tr(e,t){for(Ri[e]=t,e=0;e<t.length;e++)p0.add(t[e])}var en=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ka=Object.prototype.hasOwnProperty,S3=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hc={},Lc={};function C3(e){return ka.call(Lc,e)?!0:ka.call(hc,e)?!1:S3.test(e)?Lc[e]=!0:(hc[e]=!0,!1)}function b3(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function E3(e,t,n,r){if(t===null||typeof t>"u"||b3(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ye(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ne[e]=new Ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ne[t]=new Ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ne[e]=new Ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ne[e]=new Ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ne[e]=new Ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ne[e]=new Ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ne[e]=new Ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ne[e]=new Ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ne[e]=new Ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var Uu=/[\-:]([a-z])/g;function Hu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Uu,Hu);Ne[t]=new Ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Uu,Hu);Ne[t]=new Ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Uu,Hu);Ne[t]=new Ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ne[e]=new Ye(e,1,!1,e.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ne[e]=new Ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vu(e,t,n,r){var i=Ne.hasOwnProperty(t)?Ne[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(E3(t,n,i,r)&&(n=null),r||i===null?C3(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var on=k3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,uo=Symbol.for("react.element"),ur=Symbol.for("react.portal"),cr=Symbol.for("react.fragment"),Wu=Symbol.for("react.strict_mode"),Sa=Symbol.for("react.profiler"),f0=Symbol.for("react.provider"),h0=Symbol.for("react.context"),Ku=Symbol.for("react.forward_ref"),Ca=Symbol.for("react.suspense"),ba=Symbol.for("react.suspense_list"),Zu=Symbol.for("react.memo"),cn=Symbol.for("react.lazy"),L0=Symbol.for("react.offscreen"),mc=Symbol.iterator;function ti(e){return e===null||typeof e!="object"?null:(e=mc&&e[mc]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Object.assign,ys;function fi(e){if(ys===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ys=t&&t[1]||""}return`
`+ys+e}var vs=!1;function ws(e,t){if(!e||vs)return"";vs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var a=`
`+i[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{vs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?fi(e):""}function j3(e){switch(e.tag){case 5:return fi(e.type);case 16:return fi("Lazy");case 13:return fi("Suspense");case 19:return fi("SuspenseList");case 0:case 2:case 15:return e=ws(e.type,!1),e;case 11:return e=ws(e.type.render,!1),e;case 1:return e=ws(e.type,!0),e;default:return""}}function Ea(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case cr:return"Fragment";case ur:return"Portal";case Sa:return"Profiler";case Wu:return"StrictMode";case Ca:return"Suspense";case ba:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case h0:return(e.displayName||"Context")+".Consumer";case f0:return(e._context.displayName||"Context")+".Provider";case Ku:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zu:return t=e.displayName||null,t!==null?t:Ea(e.type)||"Memo";case cn:t=e._payload,e=e._init;try{return Ea(e(t))}catch{}}return null}function $3(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ea(t);case 8:return t===Wu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function jn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function m0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function P3(e){var t=m0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function co(e){e._valueTracker||(e._valueTracker=P3(e))}function g0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=m0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function sl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ja(e,t){var n=t.checked;return ye({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function gc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=jn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function x0(e,t){t=t.checked,t!=null&&Vu(e,"checked",t,!1)}function $a(e,t){x0(e,t);var n=jn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Pa(e,t.type,n):t.hasOwnProperty("defaultValue")&&Pa(e,t.type,jn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Pa(e,t,n){(t!=="number"||sl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var hi=Array.isArray;function Cr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+jn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ia(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return ye({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function yc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(hi(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:jn(n)}}function y0(e,t){var n=jn(t.value),r=jn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function vc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function v0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ra(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?v0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var po,w0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(po=po||document.createElement("div"),po.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=po.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ti(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var xi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},I3=["Webkit","ms","Moz","O"];Object.keys(xi).forEach(function(e){I3.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xi[t]=xi[e]})});function k0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||xi.hasOwnProperty(e)&&xi[e]?(""+t).trim():t+"px"}function S0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=k0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var R3=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ta(e,t){if(t){if(R3[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function za(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _a=null;function Yu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ma=null,br=null,Er=null;function wc(e){if(e=no(e)){if(typeof Ma!="function")throw Error(z(280));var t=e.stateNode;t&&(t=Yl(t),Ma(e.stateNode,e.type,t))}}function C0(e){br?Er?Er.push(e):Er=[e]:br=e}function b0(){if(br){var e=br,t=Er;if(Er=br=null,wc(e),t)for(e=0;e<t.length;e++)wc(t[e])}}function E0(e,t){return e(t)}function j0(){}var ks=!1;function $0(e,t,n){if(ks)return e(t,n);ks=!0;try{return E0(e,t,n)}finally{ks=!1,(br!==null||Er!==null)&&(j0(),b0())}}function zi(e,t){var n=e.stateNode;if(n===null)return null;var r=Yl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var Na=!1;if(en)try{var ni={};Object.defineProperty(ni,"passive",{get:function(){Na=!0}}),window.addEventListener("test",ni,ni),window.removeEventListener("test",ni,ni)}catch{Na=!1}function T3(e,t,n,r,i,o,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var yi=!1,al=null,ul=!1,Aa=null,z3={onError:function(e){yi=!0,al=e}};function _3(e,t,n,r,i,o,l,s,a){yi=!1,al=null,T3.apply(z3,arguments)}function M3(e,t,n,r,i,o,l,s,a){if(_3.apply(this,arguments),yi){if(yi){var u=al;yi=!1,al=null}else throw Error(z(198));ul||(ul=!0,Aa=u)}}function nr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function P0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function kc(e){if(nr(e)!==e)throw Error(z(188))}function N3(e){var t=e.alternate;if(!t){if(t=nr(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return kc(i),e;if(o===r)return kc(i),t;o=o.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function I0(e){return e=N3(e),e!==null?R0(e):null}function R0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=R0(e);if(t!==null)return t;e=e.sibling}return null}var T0=ft.unstable_scheduleCallback,Sc=ft.unstable_cancelCallback,A3=ft.unstable_shouldYield,O3=ft.unstable_requestPaint,we=ft.unstable_now,D3=ft.unstable_getCurrentPriorityLevel,Qu=ft.unstable_ImmediatePriority,z0=ft.unstable_UserBlockingPriority,cl=ft.unstable_NormalPriority,F3=ft.unstable_LowPriority,_0=ft.unstable_IdlePriority,Vl=null,Bt=null;function B3(e){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(Vl,e,void 0,(e.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:V3,U3=Math.log,H3=Math.LN2;function V3(e){return e>>>=0,e===0?32:31-(U3(e)/H3|0)|0}var fo=64,ho=4194304;function Li(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function dl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=Li(s):(o&=l,o!==0&&(r=Li(o)))}else l=n&~i,l!==0?r=Li(l):o!==0&&(r=Li(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Tt(t),i=1<<n,r|=e[n],t&=~i;return r}function W3(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function K3(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Tt(o),s=1<<l,a=i[l];a===-1?(!(s&n)||s&r)&&(i[l]=W3(s,t)):a<=t&&(e.expiredLanes|=s),o&=~s}}function Oa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function M0(){var e=fo;return fo<<=1,!(fo&4194240)&&(fo=64),e}function Ss(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function eo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Tt(t),e[t]=n}function Z3(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Tt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function qu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Tt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var se=0;function N0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var A0,Gu,O0,D0,F0,Da=!1,Lo=[],gn=null,xn=null,yn=null,_i=new Map,Mi=new Map,pn=[],Y3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cc(e,t){switch(e){case"focusin":case"focusout":gn=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":yn=null;break;case"pointerover":case"pointerout":_i.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mi.delete(t.pointerId)}}function ri(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=no(t),t!==null&&Gu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Q3(e,t,n,r,i){switch(t){case"focusin":return gn=ri(gn,e,t,n,r,i),!0;case"dragenter":return xn=ri(xn,e,t,n,r,i),!0;case"mouseover":return yn=ri(yn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return _i.set(o,ri(_i.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Mi.set(o,ri(Mi.get(o)||null,e,t,n,r,i)),!0}return!1}function B0(e){var t=Dn(e.target);if(t!==null){var n=nr(t);if(n!==null){if(t=n.tag,t===13){if(t=P0(n),t!==null){e.blockedOn=t,F0(e.priority,function(){O0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Fa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);_a=r,n.target.dispatchEvent(r),_a=null}else return t=no(n),t!==null&&Gu(t),e.blockedOn=n,!1;t.shift()}return!0}function bc(e,t,n){Fo(e)&&n.delete(t)}function q3(){Da=!1,gn!==null&&Fo(gn)&&(gn=null),xn!==null&&Fo(xn)&&(xn=null),yn!==null&&Fo(yn)&&(yn=null),_i.forEach(bc),Mi.forEach(bc)}function ii(e,t){e.blockedOn===t&&(e.blockedOn=null,Da||(Da=!0,ft.unstable_scheduleCallback(ft.unstable_NormalPriority,q3)))}function Ni(e){function t(i){return ii(i,e)}if(0<Lo.length){ii(Lo[0],e);for(var n=1;n<Lo.length;n++){var r=Lo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(gn!==null&&ii(gn,e),xn!==null&&ii(xn,e),yn!==null&&ii(yn,e),_i.forEach(t),Mi.forEach(t),n=0;n<pn.length;n++)r=pn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<pn.length&&(n=pn[0],n.blockedOn===null);)B0(n),n.blockedOn===null&&pn.shift()}var jr=on.ReactCurrentBatchConfig,pl=!0;function G3(e,t,n,r){var i=se,o=jr.transition;jr.transition=null;try{se=1,Xu(e,t,n,r)}finally{se=i,jr.transition=o}}function X3(e,t,n,r){var i=se,o=jr.transition;jr.transition=null;try{se=4,Xu(e,t,n,r)}finally{se=i,jr.transition=o}}function Xu(e,t,n,r){if(pl){var i=Fa(e,t,n,r);if(i===null)zs(e,t,r,fl,n),Cc(e,r);else if(Q3(i,e,t,n,r))r.stopPropagation();else if(Cc(e,r),t&4&&-1<Y3.indexOf(e)){for(;i!==null;){var o=no(i);if(o!==null&&A0(o),o=Fa(e,t,n,r),o===null&&zs(e,t,r,fl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else zs(e,t,r,null,n)}}var fl=null;function Fa(e,t,n,r){if(fl=null,e=Yu(r),e=Dn(e),e!==null)if(t=nr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=P0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return fl=e,null}function U0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(D3()){case Qu:return 1;case z0:return 4;case cl:case F3:return 16;case _0:return 536870912;default:return 16}default:return 16}}var hn=null,Ju=null,Bo=null;function H0(){if(Bo)return Bo;var e,t=Ju,n=t.length,r,i="value"in hn?hn.value:hn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Bo=i.slice(e,1<r?1-r:void 0)}function Uo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mo(){return!0}function Ec(){return!1}function Lt(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?mo:Ec,this.isPropagationStopped=Ec,this}return ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mo)},persist:function(){},isPersistent:mo}),t}var Zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},e1=Lt(Zr),to=ye({},Zr,{view:0,detail:0}),J3=Lt(to),Cs,bs,oi,Wl=ye({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:t1,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oi&&(oi&&e.type==="mousemove"?(Cs=e.screenX-oi.screenX,bs=e.screenY-oi.screenY):bs=Cs=0,oi=e),Cs)},movementY:function(e){return"movementY"in e?e.movementY:bs}}),jc=Lt(Wl),eh=ye({},Wl,{dataTransfer:0}),th=Lt(eh),nh=ye({},to,{relatedTarget:0}),Es=Lt(nh),rh=ye({},Zr,{animationName:0,elapsedTime:0,pseudoElement:0}),ih=Lt(rh),oh=ye({},Zr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lh=Lt(oh),sh=ye({},Zr,{data:0}),$c=Lt(sh),ah={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ch={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ch[e])?!!t[e]:!1}function t1(){return dh}var ph=ye({},to,{key:function(e){if(e.key){var t=ah[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Uo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?uh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:t1,charCode:function(e){return e.type==="keypress"?Uo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Uo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fh=Lt(ph),hh=ye({},Wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pc=Lt(hh),Lh=ye({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:t1}),mh=Lt(Lh),gh=ye({},Zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),xh=Lt(gh),yh=ye({},Wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vh=Lt(yh),wh=[9,13,27,32],n1=en&&"CompositionEvent"in window,vi=null;en&&"documentMode"in document&&(vi=document.documentMode);var kh=en&&"TextEvent"in window&&!vi,V0=en&&(!n1||vi&&8<vi&&11>=vi),Ic=" ",Rc=!1;function W0(e,t){switch(e){case"keyup":return wh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function K0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dr=!1;function Sh(e,t){switch(e){case"compositionend":return K0(t);case"keypress":return t.which!==32?null:(Rc=!0,Ic);case"textInput":return e=t.data,e===Ic&&Rc?null:e;default:return null}}function Ch(e,t){if(dr)return e==="compositionend"||!n1&&W0(e,t)?(e=H0(),Bo=Ju=hn=null,dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return V0&&t.locale!=="ko"?null:t.data;default:return null}}var bh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bh[e.type]:t==="textarea"}function Z0(e,t,n,r){C0(r),t=hl(t,"onChange"),0<t.length&&(n=new e1("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var wi=null,Ai=null;function Eh(e){i4(e,0)}function Kl(e){var t=hr(e);if(g0(t))return e}function jh(e,t){if(e==="change")return t}var Y0=!1;if(en){var js;if(en){var $s="oninput"in document;if(!$s){var zc=document.createElement("div");zc.setAttribute("oninput","return;"),$s=typeof zc.oninput=="function"}js=$s}else js=!1;Y0=js&&(!document.documentMode||9<document.documentMode)}function _c(){wi&&(wi.detachEvent("onpropertychange",Q0),Ai=wi=null)}function Q0(e){if(e.propertyName==="value"&&Kl(Ai)){var t=[];Z0(t,Ai,e,Yu(e)),$0(Eh,t)}}function $h(e,t,n){e==="focusin"?(_c(),wi=t,Ai=n,wi.attachEvent("onpropertychange",Q0)):e==="focusout"&&_c()}function Ph(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Kl(Ai)}function Ih(e,t){if(e==="click")return Kl(t)}function Rh(e,t){if(e==="input"||e==="change")return Kl(t)}function Th(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mt=typeof Object.is=="function"?Object.is:Th;function Oi(e,t){if(Mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ka.call(t,i)||!Mt(e[i],t[i]))return!1}return!0}function Mc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nc(e,t){var n=Mc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mc(n)}}function q0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?q0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function G0(){for(var e=window,t=sl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=sl(e.document)}return t}function r1(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function zh(e){var t=G0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&q0(n.ownerDocument.documentElement,n)){if(r!==null&&r1(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Nc(n,o);var l=Nc(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _h=en&&"documentMode"in document&&11>=document.documentMode,pr=null,Ba=null,ki=null,Ua=!1;function Ac(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ua||pr==null||pr!==sl(r)||(r=pr,"selectionStart"in r&&r1(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ki&&Oi(ki,r)||(ki=r,r=hl(Ba,"onSelect"),0<r.length&&(t=new e1("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=pr)))}function go(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fr={animationend:go("Animation","AnimationEnd"),animationiteration:go("Animation","AnimationIteration"),animationstart:go("Animation","AnimationStart"),transitionend:go("Transition","TransitionEnd")},Ps={},X0={};en&&(X0=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function Zl(e){if(Ps[e])return Ps[e];if(!fr[e])return e;var t=fr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in X0)return Ps[e]=t[n];return e}var J0=Zl("animationend"),e4=Zl("animationiteration"),t4=Zl("animationstart"),n4=Zl("transitionend"),r4=new Map,Oc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pn(e,t){r4.set(e,t),tr(t,[e])}for(var Is=0;Is<Oc.length;Is++){var Rs=Oc[Is],Mh=Rs.toLowerCase(),Nh=Rs[0].toUpperCase()+Rs.slice(1);Pn(Mh,"on"+Nh)}Pn(J0,"onAnimationEnd");Pn(e4,"onAnimationIteration");Pn(t4,"onAnimationStart");Pn("dblclick","onDoubleClick");Pn("focusin","onFocus");Pn("focusout","onBlur");Pn(n4,"onTransitionEnd");Tr("onMouseEnter",["mouseout","mouseover"]);Tr("onMouseLeave",["mouseout","mouseover"]);Tr("onPointerEnter",["pointerout","pointerover"]);Tr("onPointerLeave",["pointerout","pointerover"]);tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ah=new Set("cancel close invalid load scroll toggle".split(" ").concat(mi));function Dc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,M3(r,t,void 0,e),e.currentTarget=null}function i4(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==o&&i.isPropagationStopped())break e;Dc(i,s,u),o=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==o&&i.isPropagationStopped())break e;Dc(i,s,u),o=a}}}if(ul)throw e=Aa,ul=!1,Aa=null,e}function pe(e,t){var n=t[Za];n===void 0&&(n=t[Za]=new Set);var r=e+"__bubble";n.has(r)||(o4(t,e,2,!1),n.add(r))}function Ts(e,t,n){var r=0;t&&(r|=4),o4(n,e,r,t)}var xo="_reactListening"+Math.random().toString(36).slice(2);function Di(e){if(!e[xo]){e[xo]=!0,p0.forEach(function(n){n!=="selectionchange"&&(Ah.has(n)||Ts(n,!1,e),Ts(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xo]||(t[xo]=!0,Ts("selectionchange",!1,t))}}function o4(e,t,n,r){switch(U0(t)){case 1:var i=G3;break;case 4:i=X3;break;default:i=Xu}n=i.bind(null,t,n,e),i=void 0,!Na||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function zs(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;l=l.return}for(;s!==null;){if(l=Dn(s),l===null)return;if(a=l.tag,a===5||a===6){r=o=l;continue e}s=s.parentNode}}r=r.return}$0(function(){var u=o,d=Yu(n),p=[];e:{var h=r4.get(e);if(h!==void 0){var f=e1,v=e;switch(e){case"keypress":if(Uo(n)===0)break e;case"keydown":case"keyup":f=fh;break;case"focusin":v="focus",f=Es;break;case"focusout":v="blur",f=Es;break;case"beforeblur":case"afterblur":f=Es;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=jc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=th;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=mh;break;case J0:case e4:case t4:f=ih;break;case n4:f=xh;break;case"scroll":f=J3;break;case"wheel":f=vh;break;case"copy":case"cut":case"paste":f=lh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Pc}var x=(t&4)!==0,j=!x&&e==="scroll",L=x?h!==null?h+"Capture":null:h;x=[];for(var g=u,m;g!==null;){m=g;var k=m.stateNode;if(m.tag===5&&k!==null&&(m=k,L!==null&&(k=zi(g,L),k!=null&&x.push(Fi(g,k,m)))),j)break;g=g.return}0<x.length&&(h=new f(h,v,null,n,d),p.push({event:h,listeners:x}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",h&&n!==_a&&(v=n.relatedTarget||n.fromElement)&&(Dn(v)||v[tn]))break e;if((f||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,f?(v=n.relatedTarget||n.toElement,f=u,v=v?Dn(v):null,v!==null&&(j=nr(v),v!==j||v.tag!==5&&v.tag!==6)&&(v=null)):(f=null,v=u),f!==v)){if(x=jc,k="onMouseLeave",L="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(x=Pc,k="onPointerLeave",L="onPointerEnter",g="pointer"),j=f==null?h:hr(f),m=v==null?h:hr(v),h=new x(k,g+"leave",f,n,d),h.target=j,h.relatedTarget=m,k=null,Dn(d)===u&&(x=new x(L,g+"enter",v,n,d),x.target=m,x.relatedTarget=j,k=x),j=k,f&&v)t:{for(x=f,L=v,g=0,m=x;m;m=lr(m))g++;for(m=0,k=L;k;k=lr(k))m++;for(;0<g-m;)x=lr(x),g--;for(;0<m-g;)L=lr(L),m--;for(;g--;){if(x===L||L!==null&&x===L.alternate)break t;x=lr(x),L=lr(L)}x=null}else x=null;f!==null&&Fc(p,h,f,x,!1),v!==null&&j!==null&&Fc(p,j,v,x,!0)}}e:{if(h=u?hr(u):window,f=h.nodeName&&h.nodeName.toLowerCase(),f==="select"||f==="input"&&h.type==="file")var E=jh;else if(Tc(h))if(Y0)E=Rh;else{E=Ph;var S=$h}else(f=h.nodeName)&&f.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=Ih);if(E&&(E=E(e,u))){Z0(p,E,n,d);break e}S&&S(e,h,u),e==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&Pa(h,"number",h.value)}switch(S=u?hr(u):window,e){case"focusin":(Tc(S)||S.contentEditable==="true")&&(pr=S,Ba=u,ki=null);break;case"focusout":ki=Ba=pr=null;break;case"mousedown":Ua=!0;break;case"contextmenu":case"mouseup":case"dragend":Ua=!1,Ac(p,n,d);break;case"selectionchange":if(_h)break;case"keydown":case"keyup":Ac(p,n,d)}var b;if(n1)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else dr?W0(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(V0&&n.locale!=="ko"&&(dr||P!=="onCompositionStart"?P==="onCompositionEnd"&&dr&&(b=H0()):(hn=d,Ju="value"in hn?hn.value:hn.textContent,dr=!0)),S=hl(u,P),0<S.length&&(P=new $c(P,e,null,n,d),p.push({event:P,listeners:S}),b?P.data=b:(b=K0(n),b!==null&&(P.data=b)))),(b=kh?Sh(e,n):Ch(e,n))&&(u=hl(u,"onBeforeInput"),0<u.length&&(d=new $c("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=b))}i4(p,t)})}function Fi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function hl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=zi(e,n),o!=null&&r.unshift(Fi(e,o,i)),o=zi(e,t),o!=null&&r.push(Fi(e,o,i))),e=e.return}return r}function lr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fc(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,i?(a=zi(n,o),a!=null&&l.unshift(Fi(n,a,s))):i||(a=zi(n,o),a!=null&&l.push(Fi(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Oh=/\r\n?/g,Dh=/\u0000|\uFFFD/g;function Bc(e){return(typeof e=="string"?e:""+e).replace(Oh,`
`).replace(Dh,"")}function yo(e,t,n){if(t=Bc(t),Bc(e)!==t&&n)throw Error(z(425))}function Ll(){}var Ha=null,Va=null;function Wa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ka=typeof setTimeout=="function"?setTimeout:void 0,Fh=typeof clearTimeout=="function"?clearTimeout:void 0,Uc=typeof Promise=="function"?Promise:void 0,Bh=typeof queueMicrotask=="function"?queueMicrotask:typeof Uc<"u"?function(e){return Uc.resolve(null).then(e).catch(Uh)}:Ka;function Uh(e){setTimeout(function(){throw e})}function _s(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ni(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ni(t)}function vn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Hc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yr=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Yr,Bi="__reactProps$"+Yr,tn="__reactContainer$"+Yr,Za="__reactEvents$"+Yr,Hh="__reactListeners$"+Yr,Vh="__reactHandles$"+Yr;function Dn(e){var t=e[Dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[tn]||n[Dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hc(e);e!==null;){if(n=e[Dt])return n;e=Hc(e)}return t}e=n,n=e.parentNode}return null}function no(e){return e=e[Dt]||e[tn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function hr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function Yl(e){return e[Bi]||null}var Ya=[],Lr=-1;function In(e){return{current:e}}function he(e){0>Lr||(e.current=Ya[Lr],Ya[Lr]=null,Lr--)}function ce(e,t){Lr++,Ya[Lr]=e.current,e.current=t}var $n={},Fe=In($n),Je=In(!1),Kn=$n;function zr(e,t){var n=e.type.contextTypes;if(!n)return $n;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function et(e){return e=e.childContextTypes,e!=null}function ml(){he(Je),he(Fe)}function Vc(e,t,n){if(Fe.current!==$n)throw Error(z(168));ce(Fe,t),ce(Je,n)}function l4(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(z(108,$3(e)||"Unknown",i));return ye({},n,r)}function gl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$n,Kn=Fe.current,ce(Fe,e),ce(Je,Je.current),!0}function Wc(e,t,n){var r=e.stateNode;if(!r)throw Error(z(169));n?(e=l4(e,t,Kn),r.__reactInternalMemoizedMergedChildContext=e,he(Je),he(Fe),ce(Fe,e)):he(Je),ce(Je,n)}var qt=null,Ql=!1,Ms=!1;function s4(e){qt===null?qt=[e]:qt.push(e)}function Wh(e){Ql=!0,s4(e)}function Rn(){if(!Ms&&qt!==null){Ms=!0;var e=0,t=se;try{var n=qt;for(se=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}qt=null,Ql=!1}catch(i){throw qt!==null&&(qt=qt.slice(e+1)),T0(Qu,Rn),i}finally{se=t,Ms=!1}}return null}var mr=[],gr=0,xl=null,yl=0,gt=[],xt=0,Zn=null,Gt=1,Xt="";function Nn(e,t){mr[gr++]=yl,mr[gr++]=xl,xl=e,yl=t}function a4(e,t,n){gt[xt++]=Gt,gt[xt++]=Xt,gt[xt++]=Zn,Zn=e;var r=Gt;e=Xt;var i=32-Tt(r)-1;r&=~(1<<i),n+=1;var o=32-Tt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Gt=1<<32-Tt(t)+i|n<<i|r,Xt=o+e}else Gt=1<<o|n<<i|r,Xt=e}function i1(e){e.return!==null&&(Nn(e,1),a4(e,1,0))}function o1(e){for(;e===xl;)xl=mr[--gr],mr[gr]=null,yl=mr[--gr],mr[gr]=null;for(;e===Zn;)Zn=gt[--xt],gt[xt]=null,Xt=gt[--xt],gt[xt]=null,Gt=gt[--xt],gt[xt]=null}var pt=null,ct=null,me=!1,Rt=null;function u4(e,t){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Kc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,pt=e,ct=vn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,pt=e,ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zn!==null?{id:Gt,overflow:Xt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,pt=e,ct=null,!0):!1;default:return!1}}function Qa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function qa(e){if(me){var t=ct;if(t){var n=t;if(!Kc(e,t)){if(Qa(e))throw Error(z(418));t=vn(n.nextSibling);var r=pt;t&&Kc(e,t)?u4(r,n):(e.flags=e.flags&-4097|2,me=!1,pt=e)}}else{if(Qa(e))throw Error(z(418));e.flags=e.flags&-4097|2,me=!1,pt=e}}}function Zc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;pt=e}function vo(e){if(e!==pt)return!1;if(!me)return Zc(e),me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Wa(e.type,e.memoizedProps)),t&&(t=ct)){if(Qa(e))throw c4(),Error(z(418));for(;t;)u4(e,t),t=vn(t.nextSibling)}if(Zc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ct=vn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ct=null}}else ct=pt?vn(e.stateNode.nextSibling):null;return!0}function c4(){for(var e=ct;e;)e=vn(e.nextSibling)}function _r(){ct=pt=null,me=!1}function l1(e){Rt===null?Rt=[e]:Rt.push(e)}var Kh=on.ReactCurrentBatchConfig;function li(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function wo(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Yc(e){var t=e._init;return t(e._payload)}function d4(e){function t(L,g){if(e){var m=L.deletions;m===null?(L.deletions=[g],L.flags|=16):m.push(g)}}function n(L,g){if(!e)return null;for(;g!==null;)t(L,g),g=g.sibling;return null}function r(L,g){for(L=new Map;g!==null;)g.key!==null?L.set(g.key,g):L.set(g.index,g),g=g.sibling;return L}function i(L,g){return L=Cn(L,g),L.index=0,L.sibling=null,L}function o(L,g,m){return L.index=m,e?(m=L.alternate,m!==null?(m=m.index,m<g?(L.flags|=2,g):m):(L.flags|=2,g)):(L.flags|=1048576,g)}function l(L){return e&&L.alternate===null&&(L.flags|=2),L}function s(L,g,m,k){return g===null||g.tag!==6?(g=Us(m,L.mode,k),g.return=L,g):(g=i(g,m),g.return=L,g)}function a(L,g,m,k){var E=m.type;return E===cr?d(L,g,m.props.children,k,m.key):g!==null&&(g.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===cn&&Yc(E)===g.type)?(k=i(g,m.props),k.ref=li(L,g,m),k.return=L,k):(k=Qo(m.type,m.key,m.props,null,L.mode,k),k.ref=li(L,g,m),k.return=L,k)}function u(L,g,m,k){return g===null||g.tag!==4||g.stateNode.containerInfo!==m.containerInfo||g.stateNode.implementation!==m.implementation?(g=Hs(m,L.mode,k),g.return=L,g):(g=i(g,m.children||[]),g.return=L,g)}function d(L,g,m,k,E){return g===null||g.tag!==7?(g=Wn(m,L.mode,k,E),g.return=L,g):(g=i(g,m),g.return=L,g)}function p(L,g,m){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Us(""+g,L.mode,m),g.return=L,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case uo:return m=Qo(g.type,g.key,g.props,null,L.mode,m),m.ref=li(L,null,g),m.return=L,m;case ur:return g=Hs(g,L.mode,m),g.return=L,g;case cn:var k=g._init;return p(L,k(g._payload),m)}if(hi(g)||ti(g))return g=Wn(g,L.mode,m,null),g.return=L,g;wo(L,g)}return null}function h(L,g,m,k){var E=g!==null?g.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:s(L,g,""+m,k);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case uo:return m.key===E?a(L,g,m,k):null;case ur:return m.key===E?u(L,g,m,k):null;case cn:return E=m._init,h(L,g,E(m._payload),k)}if(hi(m)||ti(m))return E!==null?null:d(L,g,m,k,null);wo(L,m)}return null}function f(L,g,m,k,E){if(typeof k=="string"&&k!==""||typeof k=="number")return L=L.get(m)||null,s(g,L,""+k,E);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case uo:return L=L.get(k.key===null?m:k.key)||null,a(g,L,k,E);case ur:return L=L.get(k.key===null?m:k.key)||null,u(g,L,k,E);case cn:var S=k._init;return f(L,g,m,S(k._payload),E)}if(hi(k)||ti(k))return L=L.get(m)||null,d(g,L,k,E,null);wo(g,k)}return null}function v(L,g,m,k){for(var E=null,S=null,b=g,P=g=0,A=null;b!==null&&P<m.length;P++){b.index>P?(A=b,b=null):A=b.sibling;var R=h(L,b,m[P],k);if(R===null){b===null&&(b=A);break}e&&b&&R.alternate===null&&t(L,b),g=o(R,g,P),S===null?E=R:S.sibling=R,S=R,b=A}if(P===m.length)return n(L,b),me&&Nn(L,P),E;if(b===null){for(;P<m.length;P++)b=p(L,m[P],k),b!==null&&(g=o(b,g,P),S===null?E=b:S.sibling=b,S=b);return me&&Nn(L,P),E}for(b=r(L,b);P<m.length;P++)A=f(b,L,P,m[P],k),A!==null&&(e&&A.alternate!==null&&b.delete(A.key===null?P:A.key),g=o(A,g,P),S===null?E=A:S.sibling=A,S=A);return e&&b.forEach(function(_){return t(L,_)}),me&&Nn(L,P),E}function x(L,g,m,k){var E=ti(m);if(typeof E!="function")throw Error(z(150));if(m=E.call(m),m==null)throw Error(z(151));for(var S=E=null,b=g,P=g=0,A=null,R=m.next();b!==null&&!R.done;P++,R=m.next()){b.index>P?(A=b,b=null):A=b.sibling;var _=h(L,b,R.value,k);if(_===null){b===null&&(b=A);break}e&&b&&_.alternate===null&&t(L,b),g=o(_,g,P),S===null?E=_:S.sibling=_,S=_,b=A}if(R.done)return n(L,b),me&&Nn(L,P),E;if(b===null){for(;!R.done;P++,R=m.next())R=p(L,R.value,k),R!==null&&(g=o(R,g,P),S===null?E=R:S.sibling=R,S=R);return me&&Nn(L,P),E}for(b=r(L,b);!R.done;P++,R=m.next())R=f(b,L,P,R.value,k),R!==null&&(e&&R.alternate!==null&&b.delete(R.key===null?P:R.key),g=o(R,g,P),S===null?E=R:S.sibling=R,S=R);return e&&b.forEach(function(N){return t(L,N)}),me&&Nn(L,P),E}function j(L,g,m,k){if(typeof m=="object"&&m!==null&&m.type===cr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case uo:e:{for(var E=m.key,S=g;S!==null;){if(S.key===E){if(E=m.type,E===cr){if(S.tag===7){n(L,S.sibling),g=i(S,m.props.children),g.return=L,L=g;break e}}else if(S.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===cn&&Yc(E)===S.type){n(L,S.sibling),g=i(S,m.props),g.ref=li(L,S,m),g.return=L,L=g;break e}n(L,S);break}else t(L,S);S=S.sibling}m.type===cr?(g=Wn(m.props.children,L.mode,k,m.key),g.return=L,L=g):(k=Qo(m.type,m.key,m.props,null,L.mode,k),k.ref=li(L,g,m),k.return=L,L=k)}return l(L);case ur:e:{for(S=m.key;g!==null;){if(g.key===S)if(g.tag===4&&g.stateNode.containerInfo===m.containerInfo&&g.stateNode.implementation===m.implementation){n(L,g.sibling),g=i(g,m.children||[]),g.return=L,L=g;break e}else{n(L,g);break}else t(L,g);g=g.sibling}g=Hs(m,L.mode,k),g.return=L,L=g}return l(L);case cn:return S=m._init,j(L,g,S(m._payload),k)}if(hi(m))return v(L,g,m,k);if(ti(m))return x(L,g,m,k);wo(L,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,g!==null&&g.tag===6?(n(L,g.sibling),g=i(g,m),g.return=L,L=g):(n(L,g),g=Us(m,L.mode,k),g.return=L,L=g),l(L)):n(L,g)}return j}var Mr=d4(!0),p4=d4(!1),vl=In(null),wl=null,xr=null,s1=null;function a1(){s1=xr=wl=null}function u1(e){var t=vl.current;he(vl),e._currentValue=t}function Ga(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $r(e,t){wl=e,s1=xr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Xe=!0),e.firstContext=null)}function kt(e){var t=e._currentValue;if(s1!==e)if(e={context:e,memoizedValue:t,next:null},xr===null){if(wl===null)throw Error(z(308));xr=e,wl.dependencies={lanes:0,firstContext:e}}else xr=xr.next=e;return t}var Fn=null;function c1(e){Fn===null?Fn=[e]:Fn.push(e)}function f4(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,c1(t)):(n.next=i.next,i.next=n),t.interleaved=n,nn(e,r)}function nn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var dn=!1;function d1(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function h4(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function wn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ne&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,nn(e,n)}return i=r.interleaved,i===null?(t.next=t,c1(r)):(t.next=i.next,i.next=t),r.interleaved=t,nn(e,n)}function Ho(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qu(e,n)}}function Qc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function kl(e,t,n,r){var i=e.updateQueue;dn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?o=u:l.next=u,l=a;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==l&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=a))}if(o!==null){var p=i.baseState;l=0,d=u=a=null,s=o;do{var h=s.lane,f=s.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:f,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,x=s;switch(h=t,f=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){p=v.call(f,p,h);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,h=typeof v=="function"?v.call(f,p,h):v,h==null)break e;p=ye({},p,h);break e;case 2:dn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else f={eventTime:f,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=f,a=p):d=d.next=f,l|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(a=p),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Qn|=l,e.lanes=l,e.memoizedState=p}}function qc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var ro={},Ut=In(ro),Ui=In(ro),Hi=In(ro);function Bn(e){if(e===ro)throw Error(z(174));return e}function p1(e,t){switch(ce(Hi,t),ce(Ui,e),ce(Ut,ro),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ra(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ra(t,e)}he(Ut),ce(Ut,t)}function Nr(){he(Ut),he(Ui),he(Hi)}function L4(e){Bn(Hi.current);var t=Bn(Ut.current),n=Ra(t,e.type);t!==n&&(ce(Ui,e),ce(Ut,n))}function f1(e){Ui.current===e&&(he(Ut),he(Ui))}var ge=In(0);function Sl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ns=[];function h1(){for(var e=0;e<Ns.length;e++)Ns[e]._workInProgressVersionPrimary=null;Ns.length=0}var Vo=on.ReactCurrentDispatcher,As=on.ReactCurrentBatchConfig,Yn=0,xe=null,Ee=null,Ie=null,Cl=!1,Si=!1,Vi=0,Zh=0;function Ae(){throw Error(z(321))}function L1(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mt(e[n],t[n]))return!1;return!0}function m1(e,t,n,r,i,o){if(Yn=o,xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vo.current=e===null||e.memoizedState===null?Gh:Xh,e=n(r,i),Si){o=0;do{if(Si=!1,Vi=0,25<=o)throw Error(z(301));o+=1,Ie=Ee=null,t.updateQueue=null,Vo.current=Jh,e=n(r,i)}while(Si)}if(Vo.current=bl,t=Ee!==null&&Ee.next!==null,Yn=0,Ie=Ee=xe=null,Cl=!1,t)throw Error(z(300));return e}function g1(){var e=Vi!==0;return Vi=0,e}function At(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?xe.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function St(){if(Ee===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=Ie===null?xe.memoizedState:Ie.next;if(t!==null)Ie=t,Ee=e;else{if(e===null)throw Error(z(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Ie===null?xe.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function Wi(e,t){return typeof t=="function"?t(e):t}function Os(e){var t=St(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=Ee,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,a=null,u=o;do{var d=u.lane;if((Yn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=p,l=r):a=a.next=p,xe.lanes|=d,Qn|=d}u=u.next}while(u!==null&&u!==o);a===null?l=r:a.next=s,Mt(r,t.memoizedState)||(Xe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,xe.lanes|=o,Qn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ds(e){var t=St(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Mt(o,t.memoizedState)||(Xe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function m4(){}function g4(e,t){var n=xe,r=St(),i=t(),o=!Mt(r.memoizedState,i);if(o&&(r.memoizedState=i,Xe=!0),r=r.queue,x1(v4.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ie!==null&&Ie.memoizedState.tag&1){if(n.flags|=2048,Ki(9,y4.bind(null,n,r,i,t),void 0,null),Te===null)throw Error(z(349));Yn&30||x4(n,t,i)}return i}function x4(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function y4(e,t,n,r){t.value=n,t.getSnapshot=r,w4(t)&&k4(e)}function v4(e,t,n){return n(function(){w4(t)&&k4(e)})}function w4(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mt(e,n)}catch{return!0}}function k4(e){var t=nn(e,1);t!==null&&zt(t,e,1,-1)}function Gc(e){var t=At();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},t.queue=e,e=e.dispatch=qh.bind(null,xe,e),[t.memoizedState,e]}function Ki(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function S4(){return St().memoizedState}function Wo(e,t,n,r){var i=At();xe.flags|=e,i.memoizedState=Ki(1|t,n,void 0,r===void 0?null:r)}function ql(e,t,n,r){var i=St();r=r===void 0?null:r;var o=void 0;if(Ee!==null){var l=Ee.memoizedState;if(o=l.destroy,r!==null&&L1(r,l.deps)){i.memoizedState=Ki(t,n,o,r);return}}xe.flags|=e,i.memoizedState=Ki(1|t,n,o,r)}function Xc(e,t){return Wo(8390656,8,e,t)}function x1(e,t){return ql(2048,8,e,t)}function C4(e,t){return ql(4,2,e,t)}function b4(e,t){return ql(4,4,e,t)}function E4(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function j4(e,t,n){return n=n!=null?n.concat([e]):null,ql(4,4,E4.bind(null,t,e),n)}function y1(){}function $4(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&L1(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function P4(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&L1(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function I4(e,t,n){return Yn&21?(Mt(n,t)||(n=M0(),xe.lanes|=n,Qn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Xe=!0),e.memoizedState=n)}function Yh(e,t){var n=se;se=n!==0&&4>n?n:4,e(!0);var r=As.transition;As.transition={};try{e(!1),t()}finally{se=n,As.transition=r}}function R4(){return St().memoizedState}function Qh(e,t,n){var r=Sn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},T4(e))z4(t,n);else if(n=f4(e,t,n,r),n!==null){var i=Ke();zt(n,e,r,i),_4(n,t,r)}}function qh(e,t,n){var r=Sn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(T4(e))z4(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,Mt(s,l)){var a=t.interleaved;a===null?(i.next=i,c1(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=f4(e,t,i,r),n!==null&&(i=Ke(),zt(n,e,r,i),_4(n,t,r))}}function T4(e){var t=e.alternate;return e===xe||t!==null&&t===xe}function z4(e,t){Si=Cl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _4(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qu(e,n)}}var bl={readContext:kt,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},Gh={readContext:kt,useCallback:function(e,t){return At().memoizedState=[e,t===void 0?null:t],e},useContext:kt,useEffect:Xc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wo(4194308,4,E4.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wo(4,2,e,t)},useMemo:function(e,t){var n=At();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=At();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Qh.bind(null,xe,e),[r.memoizedState,e]},useRef:function(e){var t=At();return e={current:e},t.memoizedState=e},useState:Gc,useDebugValue:y1,useDeferredValue:function(e){return At().memoizedState=e},useTransition:function(){var e=Gc(!1),t=e[0];return e=Yh.bind(null,e[1]),At().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=xe,i=At();if(me){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),Te===null)throw Error(z(349));Yn&30||x4(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Xc(v4.bind(null,r,o,e),[e]),r.flags|=2048,Ki(9,y4.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=At(),t=Te.identifierPrefix;if(me){var n=Xt,r=Gt;n=(r&~(1<<32-Tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Vi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Zh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Xh={readContext:kt,useCallback:$4,useContext:kt,useEffect:x1,useImperativeHandle:j4,useInsertionEffect:C4,useLayoutEffect:b4,useMemo:P4,useReducer:Os,useRef:S4,useState:function(){return Os(Wi)},useDebugValue:y1,useDeferredValue:function(e){var t=St();return I4(t,Ee.memoizedState,e)},useTransition:function(){var e=Os(Wi)[0],t=St().memoizedState;return[e,t]},useMutableSource:m4,useSyncExternalStore:g4,useId:R4,unstable_isNewReconciler:!1},Jh={readContext:kt,useCallback:$4,useContext:kt,useEffect:x1,useImperativeHandle:j4,useInsertionEffect:C4,useLayoutEffect:b4,useMemo:P4,useReducer:Ds,useRef:S4,useState:function(){return Ds(Wi)},useDebugValue:y1,useDeferredValue:function(e){var t=St();return Ee===null?t.memoizedState=e:I4(t,Ee.memoizedState,e)},useTransition:function(){var e=Ds(Wi)[0],t=St().memoizedState;return[e,t]},useMutableSource:m4,useSyncExternalStore:g4,useId:R4,unstable_isNewReconciler:!1};function $t(e,t){if(e&&e.defaultProps){t=ye({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Xa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ye({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Gl={isMounted:function(e){return(e=e._reactInternals)?nr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ke(),i=Sn(e),o=Jt(r,i);o.payload=t,n!=null&&(o.callback=n),t=wn(e,o,i),t!==null&&(zt(t,e,i,r),Ho(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ke(),i=Sn(e),o=Jt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=wn(e,o,i),t!==null&&(zt(t,e,i,r),Ho(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ke(),r=Sn(e),i=Jt(n,r);i.tag=2,t!=null&&(i.callback=t),t=wn(e,i,r),t!==null&&(zt(t,e,r,n),Ho(t,e,r))}};function Jc(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Oi(n,r)||!Oi(i,o):!0}function M4(e,t,n){var r=!1,i=$n,o=t.contextType;return typeof o=="object"&&o!==null?o=kt(o):(i=et(t)?Kn:Fe.current,r=t.contextTypes,o=(r=r!=null)?zr(e,i):$n),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Gl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function e2(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Gl.enqueueReplaceState(t,t.state,null)}function Ja(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},d1(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=kt(o):(o=et(t)?Kn:Fe.current,i.context=zr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Xa(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Gl.enqueueReplaceState(i,i.state,null),kl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ar(e,t){try{var n="",r=t;do n+=j3(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Fs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function eu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var e6=typeof WeakMap=="function"?WeakMap:Map;function N4(e,t,n){n=Jt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){jl||(jl=!0,cu=r),eu(e,t)},n}function A4(e,t,n){n=Jt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){eu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){eu(e,t),typeof r!="function"&&(kn===null?kn=new Set([this]):kn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function t2(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new e6;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=h6.bind(null,e,t,n),t.then(e,e))}function n2(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function r2(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Jt(-1,1),t.tag=2,wn(n,t,1))),n.lanes|=1),e)}var t6=on.ReactCurrentOwner,Xe=!1;function We(e,t,n,r){t.child=e===null?p4(t,null,n,r):Mr(t,e.child,n,r)}function i2(e,t,n,r,i){n=n.render;var o=t.ref;return $r(t,i),r=m1(e,t,n,r,o,i),n=g1(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rn(e,t,i)):(me&&n&&i1(t),t.flags|=1,We(e,t,r,i),t.child)}function o2(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!j1(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,O4(e,t,o,r,i)):(e=Qo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Oi,n(l,r)&&e.ref===t.ref)return rn(e,t,i)}return t.flags|=1,e=Cn(o,r),e.ref=t.ref,e.return=t,t.child=e}function O4(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Oi(o,r)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Xe=!0);else return t.lanes=e.lanes,rn(e,t,i)}return tu(e,t,n,r,i)}function D4(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(vr,ut),ut|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ce(vr,ut),ut|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ce(vr,ut),ut|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ce(vr,ut),ut|=r;return We(e,t,i,n),t.child}function F4(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function tu(e,t,n,r,i){var o=et(n)?Kn:Fe.current;return o=zr(t,o),$r(t,i),n=m1(e,t,n,r,o,i),r=g1(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rn(e,t,i)):(me&&r&&i1(t),t.flags|=1,We(e,t,n,i),t.child)}function l2(e,t,n,r,i){if(et(n)){var o=!0;gl(t)}else o=!1;if($r(t,i),t.stateNode===null)Ko(e,t),M4(t,n,r),Ja(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=kt(u):(u=et(n)?Kn:Fe.current,u=zr(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&e2(t,l,r,u),dn=!1;var h=t.memoizedState;l.state=h,kl(t,r,l,i),a=t.memoizedState,s!==r||h!==a||Je.current||dn?(typeof d=="function"&&(Xa(t,n,d,r),a=t.memoizedState),(s=dn||Jc(t,n,s,r,h,a,u))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,h4(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:$t(t.type,s),l.props=u,p=t.pendingProps,h=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=kt(a):(a=et(n)?Kn:Fe.current,a=zr(t,a));var f=n.getDerivedStateFromProps;(d=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==p||h!==a)&&e2(t,l,r,a),dn=!1,h=t.memoizedState,l.state=h,kl(t,r,l,i);var v=t.memoizedState;s!==p||h!==v||Je.current||dn?(typeof f=="function"&&(Xa(t,n,f,r),v=t.memoizedState),(u=dn||Jc(t,n,u,r,h,v,a)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return nu(e,t,n,r,o,i)}function nu(e,t,n,r,i,o){F4(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Wc(t,n,!1),rn(e,t,o);r=t.stateNode,t6.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Mr(t,e.child,null,o),t.child=Mr(t,null,s,o)):We(e,t,s,o),t.memoizedState=r.state,i&&Wc(t,n,!0),t.child}function B4(e){var t=e.stateNode;t.pendingContext?Vc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vc(e,t.context,!1),p1(e,t.containerInfo)}function s2(e,t,n,r,i){return _r(),l1(i),t.flags|=256,We(e,t,n,r),t.child}var ru={dehydrated:null,treeContext:null,retryLane:0};function iu(e){return{baseLanes:e,cachePool:null,transitions:null}}function U4(e,t,n){var r=t.pendingProps,i=ge.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ce(ge,i&1),e===null)return qa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=es(l,r,0,null),e=Wn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=iu(n),t.memoizedState=ru,e):v1(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return n6(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Cn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Cn(s,o):(o=Wn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?iu(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=ru,r}return o=e.child,e=o.sibling,r=Cn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function v1(e,t){return t=es({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ko(e,t,n,r){return r!==null&&l1(r),Mr(t,e.child,null,n),e=v1(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function n6(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Fs(Error(z(422))),ko(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=es({mode:"visible",children:r.children},i,0,null),o=Wn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Mr(t,e.child,null,l),t.child.memoizedState=iu(l),t.memoizedState=ru,o);if(!(t.mode&1))return ko(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(z(419)),r=Fs(o,r,void 0),ko(e,t,l,r)}if(s=(l&e.childLanes)!==0,Xe||s){if(r=Te,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,nn(e,i),zt(r,e,i,-1))}return E1(),r=Fs(Error(z(421))),ko(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=L6.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ct=vn(i.nextSibling),pt=t,me=!0,Rt=null,e!==null&&(gt[xt++]=Gt,gt[xt++]=Xt,gt[xt++]=Zn,Gt=e.id,Xt=e.overflow,Zn=t),t=v1(t,r.children),t.flags|=4096,t)}function a2(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ga(e.return,t,n)}function Bs(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function H4(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(We(e,t,r.children,n),r=ge.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&a2(e,n,t);else if(e.tag===19)a2(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ce(ge,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Sl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Bs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Sl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Bs(t,!0,n,null,o);break;case"together":Bs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ko(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Qn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=Cn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Cn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function r6(e,t,n){switch(t.tag){case 3:B4(t),_r();break;case 5:L4(t);break;case 1:et(t.type)&&gl(t);break;case 4:p1(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ce(vl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ce(ge,ge.current&1),t.flags|=128,null):n&t.child.childLanes?U4(e,t,n):(ce(ge,ge.current&1),e=rn(e,t,n),e!==null?e.sibling:null);ce(ge,ge.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return H4(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ge,ge.current),r)break;return null;case 22:case 23:return t.lanes=0,D4(e,t,n)}return rn(e,t,n)}var V4,ou,W4,K4;V4=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ou=function(){};W4=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Bn(Ut.current);var o=null;switch(n){case"input":i=ja(e,i),r=ja(e,r),o=[];break;case"select":i=ye({},i,{value:void 0}),r=ye({},r,{value:void 0}),o=[];break;case"textarea":i=Ia(e,i),r=Ia(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ll)}Ta(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ri.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(o||(o=[]),o.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ri.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&pe("scroll",e),o||s===a||(o=[])):(o=o||[]).push(u,a))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};K4=function(e,t,n,r){n!==r&&(t.flags|=4)};function si(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function i6(e,t,n){var r=t.pendingProps;switch(o1(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return et(t.type)&&ml(),Oe(t),null;case 3:return r=t.stateNode,Nr(),he(Je),he(Fe),h1(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Rt!==null&&(fu(Rt),Rt=null))),ou(e,t),Oe(t),null;case 5:f1(t);var i=Bn(Hi.current);if(n=t.type,e!==null&&t.stateNode!=null)W4(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(z(166));return Oe(t),null}if(e=Bn(Ut.current),vo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Dt]=t,r[Bi]=o,e=(t.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(i=0;i<mi.length;i++)pe(mi[i],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":gc(r,o),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},pe("invalid",r);break;case"textarea":yc(r,o),pe("invalid",r)}Ta(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&yo(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&yo(r.textContent,s,e),i=["children",""+s]):Ri.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&pe("scroll",r)}switch(n){case"input":co(r),xc(r,o,!0);break;case"textarea":co(r),vc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ll)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=v0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Dt]=t,e[Bi]=r,V4(e,t,!1,!1),t.stateNode=e;e:{switch(l=za(n,r),n){case"dialog":pe("cancel",e),pe("close",e),i=r;break;case"iframe":case"object":case"embed":pe("load",e),i=r;break;case"video":case"audio":for(i=0;i<mi.length;i++)pe(mi[i],e);i=r;break;case"source":pe("error",e),i=r;break;case"img":case"image":case"link":pe("error",e),pe("load",e),i=r;break;case"details":pe("toggle",e),i=r;break;case"input":gc(e,r),i=ja(e,r),pe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ye({},r,{value:void 0}),pe("invalid",e);break;case"textarea":yc(e,r),i=Ia(e,r),pe("invalid",e);break;default:i=r}Ta(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="style"?S0(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&w0(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ti(e,a):typeof a=="number"&&Ti(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ri.hasOwnProperty(o)?a!=null&&o==="onScroll"&&pe("scroll",e):a!=null&&Vu(e,o,a,l))}switch(n){case"input":co(e),xc(e,r,!1);break;case"textarea":co(e),vc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+jn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Cr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Cr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ll)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Oe(t),null;case 6:if(e&&t.stateNode!=null)K4(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(z(166));if(n=Bn(Hi.current),Bn(Ut.current),vo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Dt]=t,(o=r.nodeValue!==n)&&(e=pt,e!==null))switch(e.tag){case 3:yo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&yo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Dt]=t,t.stateNode=r}return Oe(t),null;case 13:if(he(ge),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&ct!==null&&t.mode&1&&!(t.flags&128))c4(),_r(),t.flags|=98560,o=!1;else if(o=vo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(z(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(z(317));o[Dt]=t}else _r(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Oe(t),o=!1}else Rt!==null&&(fu(Rt),Rt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ge.current&1?$e===0&&($e=3):E1())),t.updateQueue!==null&&(t.flags|=4),Oe(t),null);case 4:return Nr(),ou(e,t),e===null&&Di(t.stateNode.containerInfo),Oe(t),null;case 10:return u1(t.type._context),Oe(t),null;case 17:return et(t.type)&&ml(),Oe(t),null;case 19:if(he(ge),o=t.memoizedState,o===null)return Oe(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)si(o,!1);else{if($e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Sl(e),l!==null){for(t.flags|=128,si(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ce(ge,ge.current&1|2),t.child}e=e.sibling}o.tail!==null&&we()>Or&&(t.flags|=128,r=!0,si(o,!1),t.lanes=4194304)}else{if(!r)if(e=Sl(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),si(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!me)return Oe(t),null}else 2*we()-o.renderingStartTime>Or&&n!==1073741824&&(t.flags|=128,r=!0,si(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=we(),t.sibling=null,n=ge.current,ce(ge,r?n&1|2:n&1),t):(Oe(t),null);case 22:case 23:return b1(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ut&1073741824&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function o6(e,t){switch(o1(t),t.tag){case 1:return et(t.type)&&ml(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nr(),he(Je),he(Fe),h1(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return f1(t),null;case 13:if(he(ge),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));_r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(ge),null;case 4:return Nr(),null;case 10:return u1(t.type._context),null;case 22:case 23:return b1(),null;case 24:return null;default:return null}}var So=!1,De=!1,l6=typeof WeakSet=="function"?WeakSet:Set,B=null;function yr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(e,t,r)}else n.current=null}function lu(e,t,n){try{n()}catch(r){ve(e,t,r)}}var u2=!1;function s6(e,t){if(Ha=pl,e=G0(),r1(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,d=0,p=e,h=null;t:for(;;){for(var f;p!==n||i!==0&&p.nodeType!==3||(s=l+i),p!==o||r!==0&&p.nodeType!==3||(a=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(f=p.firstChild)!==null;)h=p,p=f;for(;;){if(p===e)break t;if(h===n&&++u===i&&(s=l),h===o&&++d===r&&(a=l),(f=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=f}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Va={focusedElem:e,selectionRange:n},pl=!1,B=t;B!==null;)if(t=B,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,B=e;else for(;B!==null;){t=B;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,j=v.memoizedState,L=t.stateNode,g=L.getSnapshotBeforeUpdate(t.elementType===t.type?x:$t(t.type,x),j);L.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(k){ve(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,B=e;break}B=t.return}return v=u2,u2=!1,v}function Ci(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&lu(t,n,o)}i=i.next}while(i!==r)}}function Xl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function su(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Z4(e){var t=e.alternate;t!==null&&(e.alternate=null,Z4(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Dt],delete t[Bi],delete t[Za],delete t[Hh],delete t[Vh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Y4(e){return e.tag===5||e.tag===3||e.tag===4}function c2(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Y4(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function au(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ll));else if(r!==4&&(e=e.child,e!==null))for(au(e,t,n),e=e.sibling;e!==null;)au(e,t,n),e=e.sibling}function uu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(uu(e,t,n),e=e.sibling;e!==null;)uu(e,t,n),e=e.sibling}var _e=null,Pt=!1;function sn(e,t,n){for(n=n.child;n!==null;)Q4(e,t,n),n=n.sibling}function Q4(e,t,n){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(Vl,n)}catch{}switch(n.tag){case 5:De||yr(n,t);case 6:var r=_e,i=Pt;_e=null,sn(e,t,n),_e=r,Pt=i,_e!==null&&(Pt?(e=_e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(Pt?(e=_e,n=n.stateNode,e.nodeType===8?_s(e.parentNode,n):e.nodeType===1&&_s(e,n),Ni(e)):_s(_e,n.stateNode));break;case 4:r=_e,i=Pt,_e=n.stateNode.containerInfo,Pt=!0,sn(e,t,n),_e=r,Pt=i;break;case 0:case 11:case 14:case 15:if(!De&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&lu(n,t,l),i=i.next}while(i!==r)}sn(e,t,n);break;case 1:if(!De&&(yr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ve(n,t,s)}sn(e,t,n);break;case 21:sn(e,t,n);break;case 22:n.mode&1?(De=(r=De)||n.memoizedState!==null,sn(e,t,n),De=r):sn(e,t,n);break;default:sn(e,t,n)}}function d2(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new l6),t.forEach(function(r){var i=m6.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function jt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:_e=s.stateNode,Pt=!1;break e;case 3:_e=s.stateNode.containerInfo,Pt=!0;break e;case 4:_e=s.stateNode.containerInfo,Pt=!0;break e}s=s.return}if(_e===null)throw Error(z(160));Q4(o,l,i),_e=null,Pt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ve(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)q4(t,e),t=t.sibling}function q4(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(jt(t,e),Nt(e),r&4){try{Ci(3,e,e.return),Xl(3,e)}catch(x){ve(e,e.return,x)}try{Ci(5,e,e.return)}catch(x){ve(e,e.return,x)}}break;case 1:jt(t,e),Nt(e),r&512&&n!==null&&yr(n,n.return);break;case 5:if(jt(t,e),Nt(e),r&512&&n!==null&&yr(n,n.return),e.flags&32){var i=e.stateNode;try{Ti(i,"")}catch(x){ve(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&x0(i,o),za(s,l);var u=za(s,o);for(l=0;l<a.length;l+=2){var d=a[l],p=a[l+1];d==="style"?S0(i,p):d==="dangerouslySetInnerHTML"?w0(i,p):d==="children"?Ti(i,p):Vu(i,d,p,u)}switch(s){case"input":$a(i,o);break;case"textarea":y0(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var f=o.value;f!=null?Cr(i,!!o.multiple,f,!1):h!==!!o.multiple&&(o.defaultValue!=null?Cr(i,!!o.multiple,o.defaultValue,!0):Cr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Bi]=o}catch(x){ve(e,e.return,x)}}break;case 6:if(jt(t,e),Nt(e),r&4){if(e.stateNode===null)throw Error(z(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){ve(e,e.return,x)}}break;case 3:if(jt(t,e),Nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ni(t.containerInfo)}catch(x){ve(e,e.return,x)}break;case 4:jt(t,e),Nt(e);break;case 13:jt(t,e),Nt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(S1=we())),r&4&&d2(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(De=(u=De)||d,jt(t,e),De=u):jt(t,e),Nt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(B=e,d=e.child;d!==null;){for(p=B=d;B!==null;){switch(h=B,f=h.child,h.tag){case 0:case 11:case 14:case 15:Ci(4,h,h.return);break;case 1:yr(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){ve(r,n,x)}}break;case 5:yr(h,h.return);break;case 22:if(h.memoizedState!==null){f2(p);continue}}f!==null?(f.return=h,B=f):f2(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=p.stateNode,a=p.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=k0("display",l))}catch(x){ve(e,e.return,x)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(x){ve(e,e.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:jt(t,e),Nt(e),r&4&&d2(e);break;case 21:break;default:jt(t,e),Nt(e)}}function Nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Y4(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ti(i,""),r.flags&=-33);var o=c2(e);uu(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=c2(e);au(e,s,l);break;default:throw Error(z(161))}}catch(a){ve(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function a6(e,t,n){B=e,G4(e)}function G4(e,t,n){for(var r=(e.mode&1)!==0;B!==null;){var i=B,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||So;if(!l){var s=i.alternate,a=s!==null&&s.memoizedState!==null||De;s=So;var u=De;if(So=l,(De=a)&&!u)for(B=i;B!==null;)l=B,a=l.child,l.tag===22&&l.memoizedState!==null?h2(i):a!==null?(a.return=l,B=a):h2(i);for(;o!==null;)B=o,G4(o),o=o.sibling;B=i,So=s,De=u}p2(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,B=o):p2(e)}}function p2(e){for(;B!==null;){var t=B;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:De||Xl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!De)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:$t(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&qc(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}qc(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Ni(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}De||t.flags&512&&su(t)}catch(h){ve(t,t.return,h)}}if(t===e){B=null;break}if(n=t.sibling,n!==null){n.return=t.return,B=n;break}B=t.return}}function f2(e){for(;B!==null;){var t=B;if(t===e){B=null;break}var n=t.sibling;if(n!==null){n.return=t.return,B=n;break}B=t.return}}function h2(e){for(;B!==null;){var t=B;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Xl(4,t)}catch(a){ve(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){ve(t,i,a)}}var o=t.return;try{su(t)}catch(a){ve(t,o,a)}break;case 5:var l=t.return;try{su(t)}catch(a){ve(t,l,a)}}}catch(a){ve(t,t.return,a)}if(t===e){B=null;break}var s=t.sibling;if(s!==null){s.return=t.return,B=s;break}B=t.return}}var u6=Math.ceil,El=on.ReactCurrentDispatcher,w1=on.ReactCurrentOwner,wt=on.ReactCurrentBatchConfig,ne=0,Te=null,be=null,Me=0,ut=0,vr=In(0),$e=0,Zi=null,Qn=0,Jl=0,k1=0,bi=null,Ge=null,S1=0,Or=1/0,Yt=null,jl=!1,cu=null,kn=null,Co=!1,Ln=null,$l=0,Ei=0,du=null,Zo=-1,Yo=0;function Ke(){return ne&6?we():Zo!==-1?Zo:Zo=we()}function Sn(e){return e.mode&1?ne&2&&Me!==0?Me&-Me:Kh.transition!==null?(Yo===0&&(Yo=M0()),Yo):(e=se,e!==0||(e=window.event,e=e===void 0?16:U0(e.type)),e):1}function zt(e,t,n,r){if(50<Ei)throw Ei=0,du=null,Error(z(185));eo(e,n,r),(!(ne&2)||e!==Te)&&(e===Te&&(!(ne&2)&&(Jl|=n),$e===4&&fn(e,Me)),tt(e,r),n===1&&ne===0&&!(t.mode&1)&&(Or=we()+500,Ql&&Rn()))}function tt(e,t){var n=e.callbackNode;K3(e,t);var r=dl(e,e===Te?Me:0);if(r===0)n!==null&&Sc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Sc(n),t===1)e.tag===0?Wh(L2.bind(null,e)):s4(L2.bind(null,e)),Bh(function(){!(ne&6)&&Rn()}),n=null;else{switch(N0(r)){case 1:n=Qu;break;case 4:n=z0;break;case 16:n=cl;break;case 536870912:n=_0;break;default:n=cl}n=op(n,X4.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function X4(e,t){if(Zo=-1,Yo=0,ne&6)throw Error(z(327));var n=e.callbackNode;if(Pr()&&e.callbackNode!==n)return null;var r=dl(e,e===Te?Me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Pl(e,r);else{t=r;var i=ne;ne|=2;var o=ep();(Te!==e||Me!==t)&&(Yt=null,Or=we()+500,Vn(e,t));do try{p6();break}catch(s){J4(e,s)}while(!0);a1(),El.current=o,ne=i,be!==null?t=0:(Te=null,Me=0,t=$e)}if(t!==0){if(t===2&&(i=Oa(e),i!==0&&(r=i,t=pu(e,i))),t===1)throw n=Zi,Vn(e,0),fn(e,r),tt(e,we()),n;if(t===6)fn(e,r);else{if(i=e.current.alternate,!(r&30)&&!c6(i)&&(t=Pl(e,r),t===2&&(o=Oa(e),o!==0&&(r=o,t=pu(e,o))),t===1))throw n=Zi,Vn(e,0),fn(e,r),tt(e,we()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(z(345));case 2:An(e,Ge,Yt);break;case 3:if(fn(e,r),(r&130023424)===r&&(t=S1+500-we(),10<t)){if(dl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ka(An.bind(null,e,Ge,Yt),t);break}An(e,Ge,Yt);break;case 4:if(fn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Tt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*u6(r/1960))-r,10<r){e.timeoutHandle=Ka(An.bind(null,e,Ge,Yt),r);break}An(e,Ge,Yt);break;case 5:An(e,Ge,Yt);break;default:throw Error(z(329))}}}return tt(e,we()),e.callbackNode===n?X4.bind(null,e):null}function pu(e,t){var n=bi;return e.current.memoizedState.isDehydrated&&(Vn(e,t).flags|=256),e=Pl(e,t),e!==2&&(t=Ge,Ge=n,t!==null&&fu(t)),e}function fu(e){Ge===null?Ge=e:Ge.push.apply(Ge,e)}function c6(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Mt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fn(e,t){for(t&=~k1,t&=~Jl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Tt(t),r=1<<n;e[n]=-1,t&=~r}}function L2(e){if(ne&6)throw Error(z(327));Pr();var t=dl(e,0);if(!(t&1))return tt(e,we()),null;var n=Pl(e,t);if(e.tag!==0&&n===2){var r=Oa(e);r!==0&&(t=r,n=pu(e,r))}if(n===1)throw n=Zi,Vn(e,0),fn(e,t),tt(e,we()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,An(e,Ge,Yt),tt(e,we()),null}function C1(e,t){var n=ne;ne|=1;try{return e(t)}finally{ne=n,ne===0&&(Or=we()+500,Ql&&Rn())}}function qn(e){Ln!==null&&Ln.tag===0&&!(ne&6)&&Pr();var t=ne;ne|=1;var n=wt.transition,r=se;try{if(wt.transition=null,se=1,e)return e()}finally{se=r,wt.transition=n,ne=t,!(ne&6)&&Rn()}}function b1(){ut=vr.current,he(vr)}function Vn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Fh(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(o1(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ml();break;case 3:Nr(),he(Je),he(Fe),h1();break;case 5:f1(r);break;case 4:Nr();break;case 13:he(ge);break;case 19:he(ge);break;case 10:u1(r.type._context);break;case 22:case 23:b1()}n=n.return}if(Te=e,be=e=Cn(e.current,null),Me=ut=t,$e=0,Zi=null,k1=Jl=Qn=0,Ge=bi=null,Fn!==null){for(t=0;t<Fn.length;t++)if(n=Fn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Fn=null}return e}function J4(e,t){do{var n=be;try{if(a1(),Vo.current=bl,Cl){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Cl=!1}if(Yn=0,Ie=Ee=xe=null,Si=!1,Vi=0,w1.current=null,n===null||n.return===null){$e=1,Zi=t,be=null;break}e:{var o=e,l=n.return,s=n,a=t;if(t=Me,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=s,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var f=n2(l);if(f!==null){f.flags&=-257,r2(f,l,s,o,t),f.mode&1&&t2(o,u,t),t=f,a=u;var v=t.updateQueue;if(v===null){var x=new Set;x.add(a),t.updateQueue=x}else v.add(a);break e}else{if(!(t&1)){t2(o,u,t),E1();break e}a=Error(z(426))}}else if(me&&s.mode&1){var j=n2(l);if(j!==null){!(j.flags&65536)&&(j.flags|=256),r2(j,l,s,o,t),l1(Ar(a,s));break e}}o=a=Ar(a,s),$e!==4&&($e=2),bi===null?bi=[o]:bi.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var L=N4(o,a,t);Qc(o,L);break e;case 1:s=a;var g=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(kn===null||!kn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=A4(o,s,t);Qc(o,k);break e}}o=o.return}while(o!==null)}np(n)}catch(E){t=E,be===n&&n!==null&&(be=n=n.return);continue}break}while(!0)}function ep(){var e=El.current;return El.current=bl,e===null?bl:e}function E1(){($e===0||$e===3||$e===2)&&($e=4),Te===null||!(Qn&268435455)&&!(Jl&268435455)||fn(Te,Me)}function Pl(e,t){var n=ne;ne|=2;var r=ep();(Te!==e||Me!==t)&&(Yt=null,Vn(e,t));do try{d6();break}catch(i){J4(e,i)}while(!0);if(a1(),ne=n,El.current=r,be!==null)throw Error(z(261));return Te=null,Me=0,$e}function d6(){for(;be!==null;)tp(be)}function p6(){for(;be!==null&&!A3();)tp(be)}function tp(e){var t=ip(e.alternate,e,ut);e.memoizedProps=e.pendingProps,t===null?np(e):be=t,w1.current=null}function np(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=o6(n,t),n!==null){n.flags&=32767,be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$e=6,be=null;return}}else if(n=i6(n,t,ut),n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);$e===0&&($e=5)}function An(e,t,n){var r=se,i=wt.transition;try{wt.transition=null,se=1,f6(e,t,n,r)}finally{wt.transition=i,se=r}return null}function f6(e,t,n,r){do Pr();while(Ln!==null);if(ne&6)throw Error(z(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Z3(e,o),e===Te&&(be=Te=null,Me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Co||(Co=!0,op(cl,function(){return Pr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=wt.transition,wt.transition=null;var l=se;se=1;var s=ne;ne|=4,w1.current=null,s6(e,n),q4(n,e),zh(Va),pl=!!Ha,Va=Ha=null,e.current=n,a6(n),O3(),ne=s,se=l,wt.transition=o}else e.current=n;if(Co&&(Co=!1,Ln=e,$l=i),o=e.pendingLanes,o===0&&(kn=null),B3(n.stateNode),tt(e,we()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(jl)throw jl=!1,e=cu,cu=null,e;return $l&1&&e.tag!==0&&Pr(),o=e.pendingLanes,o&1?e===du?Ei++:(Ei=0,du=e):Ei=0,Rn(),null}function Pr(){if(Ln!==null){var e=N0($l),t=wt.transition,n=se;try{if(wt.transition=null,se=16>e?16:e,Ln===null)var r=!1;else{if(e=Ln,Ln=null,$l=0,ne&6)throw Error(z(331));var i=ne;for(ne|=4,B=e.current;B!==null;){var o=B,l=o.child;if(B.flags&16){var s=o.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(B=u;B!==null;){var d=B;switch(d.tag){case 0:case 11:case 15:Ci(8,d,o)}var p=d.child;if(p!==null)p.return=d,B=p;else for(;B!==null;){d=B;var h=d.sibling,f=d.return;if(Z4(d),d===u){B=null;break}if(h!==null){h.return=f,B=h;break}B=f}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var j=x.sibling;x.sibling=null,x=j}while(x!==null)}}B=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,B=l;else e:for(;B!==null;){if(o=B,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ci(9,o,o.return)}var L=o.sibling;if(L!==null){L.return=o.return,B=L;break e}B=o.return}}var g=e.current;for(B=g;B!==null;){l=B;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,B=m;else e:for(l=g;B!==null;){if(s=B,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Xl(9,s)}}catch(E){ve(s,s.return,E)}if(s===l){B=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,B=k;break e}B=s.return}}if(ne=i,Rn(),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(Vl,e)}catch{}r=!0}return r}finally{se=n,wt.transition=t}}return!1}function m2(e,t,n){t=Ar(n,t),t=N4(e,t,1),e=wn(e,t,1),t=Ke(),e!==null&&(eo(e,1,t),tt(e,t))}function ve(e,t,n){if(e.tag===3)m2(e,e,n);else for(;t!==null;){if(t.tag===3){m2(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kn===null||!kn.has(r))){e=Ar(n,e),e=A4(t,e,1),t=wn(t,e,1),e=Ke(),t!==null&&(eo(t,1,e),tt(t,e));break}}t=t.return}}function h6(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ke(),e.pingedLanes|=e.suspendedLanes&n,Te===e&&(Me&n)===n&&($e===4||$e===3&&(Me&130023424)===Me&&500>we()-S1?Vn(e,0):k1|=n),tt(e,t)}function rp(e,t){t===0&&(e.mode&1?(t=ho,ho<<=1,!(ho&130023424)&&(ho=4194304)):t=1);var n=Ke();e=nn(e,t),e!==null&&(eo(e,t,n),tt(e,n))}function L6(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),rp(e,n)}function m6(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(t),rp(e,n)}var ip;ip=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Je.current)Xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Xe=!1,r6(e,t,n);Xe=!!(e.flags&131072)}else Xe=!1,me&&t.flags&1048576&&a4(t,yl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ko(e,t),e=t.pendingProps;var i=zr(t,Fe.current);$r(t,n),i=m1(null,t,r,e,i,n);var o=g1();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,et(r)?(o=!0,gl(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,d1(t),i.updater=Gl,t.stateNode=i,i._reactInternals=t,Ja(t,r,e,n),t=nu(null,t,r,!0,o,n)):(t.tag=0,me&&o&&i1(t),We(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ko(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=x6(r),e=$t(r,e),i){case 0:t=tu(null,t,r,e,n);break e;case 1:t=l2(null,t,r,e,n);break e;case 11:t=i2(null,t,r,e,n);break e;case 14:t=o2(null,t,r,$t(r.type,e),n);break e}throw Error(z(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:$t(r,i),tu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:$t(r,i),l2(e,t,r,i,n);case 3:e:{if(B4(t),e===null)throw Error(z(387));r=t.pendingProps,o=t.memoizedState,i=o.element,h4(e,t),kl(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ar(Error(z(423)),t),t=s2(e,t,r,n,i);break e}else if(r!==i){i=Ar(Error(z(424)),t),t=s2(e,t,r,n,i);break e}else for(ct=vn(t.stateNode.containerInfo.firstChild),pt=t,me=!0,Rt=null,n=p4(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_r(),r===i){t=rn(e,t,n);break e}We(e,t,r,n)}t=t.child}return t;case 5:return L4(t),e===null&&qa(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Wa(r,i)?l=null:o!==null&&Wa(r,o)&&(t.flags|=32),F4(e,t),We(e,t,l,n),t.child;case 6:return e===null&&qa(t),null;case 13:return U4(e,t,n);case 4:return p1(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Mr(t,null,r,n):We(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:$t(r,i),i2(e,t,r,i,n);case 7:return We(e,t,t.pendingProps,n),t.child;case 8:return We(e,t,t.pendingProps.children,n),t.child;case 12:return We(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,ce(vl,r._currentValue),r._currentValue=l,o!==null)if(Mt(o.value,l)){if(o.children===i.children&&!Je.current){t=rn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=Jt(-1,n&-n),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ga(o.return,n,t),s.lanes|=n;break}a=a.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(z(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Ga(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}We(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,$r(t,n),i=kt(i),r=r(i),t.flags|=1,We(e,t,r,n),t.child;case 14:return r=t.type,i=$t(r,t.pendingProps),i=$t(r.type,i),o2(e,t,r,i,n);case 15:return O4(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:$t(r,i),Ko(e,t),t.tag=1,et(r)?(e=!0,gl(t)):e=!1,$r(t,n),M4(t,r,i),Ja(t,r,i,n),nu(null,t,r,!0,e,n);case 19:return H4(e,t,n);case 22:return D4(e,t,n)}throw Error(z(156,t.tag))};function op(e,t){return T0(e,t)}function g6(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,r){return new g6(e,t,n,r)}function j1(e){return e=e.prototype,!(!e||!e.isReactComponent)}function x6(e){if(typeof e=="function")return j1(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ku)return 11;if(e===Zu)return 14}return 2}function Cn(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Qo(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")j1(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case cr:return Wn(n.children,i,o,t);case Wu:l=8,i|=8;break;case Sa:return e=vt(12,n,t,i|2),e.elementType=Sa,e.lanes=o,e;case Ca:return e=vt(13,n,t,i),e.elementType=Ca,e.lanes=o,e;case ba:return e=vt(19,n,t,i),e.elementType=ba,e.lanes=o,e;case L0:return es(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case f0:l=10;break e;case h0:l=9;break e;case Ku:l=11;break e;case Zu:l=14;break e;case cn:l=16,r=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=vt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Wn(e,t,n,r){return e=vt(7,e,r,t),e.lanes=n,e}function es(e,t,n,r){return e=vt(22,e,r,t),e.elementType=L0,e.lanes=n,e.stateNode={isHidden:!1},e}function Us(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function Hs(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function y6(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ss(0),this.expirationTimes=Ss(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ss(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $1(e,t,n,r,i,o,l,s,a){return e=new y6(e,t,n,s,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=vt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},d1(o),e}function v6(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ur,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function lp(e){if(!e)return $n;e=e._reactInternals;e:{if(nr(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(et(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(et(n))return l4(e,n,t)}return t}function sp(e,t,n,r,i,o,l,s,a){return e=$1(n,r,!0,e,i,o,l,s,a),e.context=lp(null),n=e.current,r=Ke(),i=Sn(n),o=Jt(r,i),o.callback=t??null,wn(n,o,i),e.current.lanes=i,eo(e,i,r),tt(e,r),e}function ts(e,t,n,r){var i=t.current,o=Ke(),l=Sn(i);return n=lp(n),t.context===null?t.context=n:t.pendingContext=n,t=Jt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=wn(i,t,l),e!==null&&(zt(e,i,l,o),Ho(e,i,l)),l}function Il(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function g2(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function P1(e,t){g2(e,t),(e=e.alternate)&&g2(e,t)}function w6(){return null}var ap=typeof reportError=="function"?reportError:function(e){console.error(e)};function I1(e){this._internalRoot=e}ns.prototype.render=I1.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));ts(e,t,null,null)};ns.prototype.unmount=I1.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qn(function(){ts(null,e,null,null)}),t[tn]=null}};function ns(e){this._internalRoot=e}ns.prototype.unstable_scheduleHydration=function(e){if(e){var t=D0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<pn.length&&t!==0&&t<pn[n].priority;n++);pn.splice(n,0,e),n===0&&B0(e)}};function R1(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function rs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function x2(){}function k6(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Il(l);o.call(u)}}var l=sp(t,r,e,0,null,!1,!1,"",x2);return e._reactRootContainer=l,e[tn]=l.current,Di(e.nodeType===8?e.parentNode:e),qn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=Il(a);s.call(u)}}var a=$1(e,0,!1,null,null,!1,!1,"",x2);return e._reactRootContainer=a,e[tn]=a.current,Di(e.nodeType===8?e.parentNode:e),qn(function(){ts(t,a,n,r)}),a}function is(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var a=Il(l);s.call(a)}}ts(t,l,e,i)}else l=k6(n,t,e,i,r);return Il(l)}A0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Li(t.pendingLanes);n!==0&&(qu(t,n|1),tt(t,we()),!(ne&6)&&(Or=we()+500,Rn()))}break;case 13:qn(function(){var r=nn(e,1);if(r!==null){var i=Ke();zt(r,e,1,i)}}),P1(e,1)}};Gu=function(e){if(e.tag===13){var t=nn(e,134217728);if(t!==null){var n=Ke();zt(t,e,134217728,n)}P1(e,134217728)}};O0=function(e){if(e.tag===13){var t=Sn(e),n=nn(e,t);if(n!==null){var r=Ke();zt(n,e,t,r)}P1(e,t)}};D0=function(){return se};F0=function(e,t){var n=se;try{return se=e,t()}finally{se=n}};Ma=function(e,t,n){switch(t){case"input":if($a(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Yl(r);if(!i)throw Error(z(90));g0(r),$a(r,i)}}}break;case"textarea":y0(e,n);break;case"select":t=n.value,t!=null&&Cr(e,!!n.multiple,t,!1)}};E0=C1;j0=qn;var S6={usingClientEntryPoint:!1,Events:[no,hr,Yl,C0,b0,C1]},ai={findFiberByHostInstance:Dn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},C6={bundleType:ai.bundleType,version:ai.version,rendererPackageName:ai.rendererPackageName,rendererConfig:ai.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:on.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=I0(e),e===null?null:e.stateNode},findFiberByHostInstance:ai.findFiberByHostInstance||w6,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bo.isDisabled&&bo.supportsFiber)try{Vl=bo.inject(C6),Bt=bo}catch{}}ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S6;ht.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!R1(t))throw Error(z(200));return v6(e,t,null,n)};ht.createRoot=function(e,t){if(!R1(e))throw Error(z(299));var n=!1,r="",i=ap;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=$1(e,1,!1,null,null,n,!1,r,i),e[tn]=t.current,Di(e.nodeType===8?e.parentNode:e),new I1(t)};ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=I0(t),e=e===null?null:e.stateNode,e};ht.flushSync=function(e){return qn(e)};ht.hydrate=function(e,t,n){if(!rs(t))throw Error(z(200));return is(null,e,t,!0,n)};ht.hydrateRoot=function(e,t,n){if(!R1(e))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=ap;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=sp(t,null,e,1,n??null,i,!1,o,l),e[tn]=t.current,Di(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ns(t)};ht.render=function(e,t,n){if(!rs(t))throw Error(z(200));return is(null,e,t,!1,n)};ht.unmountComponentAtNode=function(e){if(!rs(e))throw Error(z(40));return e._reactRootContainer?(qn(function(){is(null,null,e,!1,function(){e._reactRootContainer=null,e[tn]=null})}),!0):!1};ht.unstable_batchedUpdates=C1;ht.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!rs(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return is(e,t,n,!1,r)};ht.version="18.3.1-next-f1338f8080-20240426";function up(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(up)}catch(e){console.error(e)}}up(),u0.exports=ht;var b6=u0.exports,y2=b6;wa.createRoot=y2.createRoot,wa.hydrateRoot=y2.hydrateRoot;var Re=function(){return Re=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Re.apply(this,arguments)};function Dr(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var fe="-ms-",ji="-moz-",ie="-webkit-",cp="comm",os="rule",T1="decl",E6="@import",j6="@namespace",dp="@keyframes",$6="@layer",pp=Math.abs,z1=String.fromCharCode,hu=Object.assign;function P6(e,t){return je(e,0)^45?(((t<<2^je(e,0))<<2^je(e,1))<<2^je(e,2))<<2^je(e,3):0}function fp(e){return e.trim()}function Qt(e,t){return(e=t.exec(e))?e[0]:e}function X(e,t,n){return e.replace(t,n)}function qo(e,t,n){return e.indexOf(t,n)}function je(e,t){return e.charCodeAt(t)|0}function Gn(e,t,n){return e.slice(t,n)}function It(e){return e.length}function hp(e){return e.length}function gi(e,t){return t.push(e),e}function I6(e,t){return e.map(t).join("")}function v2(e,t){return e.filter(function(n){return!Qt(n,t)})}var ls=1,Fr=1,Lp=0,Ct=0,Ce=0,Qr="";function ss(e,t,n,r,i,o,l,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:ls,column:Fr,length:l,return:"",siblings:s}}function un(e,t){return hu(ss("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function sr(e){for(;e.root;)e=un(e.root,{children:[e]});gi(e,e.siblings)}function R6(){return Ce}function T6(){return Ce=Ct>0?je(Qr,--Ct):0,Fr--,Ce===10&&(Fr=1,ls--),Ce}function _t(){return Ce=Ct<Lp?je(Qr,Ct++):0,Fr++,Ce===10&&(Fr=1,ls++),Ce}function mn(){return je(Qr,Ct)}function Go(){return Ct}function as(e,t){return Gn(Qr,e,t)}function Yi(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function z6(e){return ls=Fr=1,Lp=It(Qr=e),Ct=0,[]}function _6(e){return Qr="",e}function Vs(e){return fp(as(Ct-1,Lu(e===91?e+2:e===40?e+1:e)))}function M6(e){for(;(Ce=mn())&&Ce<33;)_t();return Yi(e)>2||Yi(Ce)>3?"":" "}function N6(e,t){for(;--t&&_t()&&!(Ce<48||Ce>102||Ce>57&&Ce<65||Ce>70&&Ce<97););return as(e,Go()+(t<6&&mn()==32&&_t()==32))}function Lu(e){for(;_t();)switch(Ce){case e:return Ct;case 34:case 39:e!==34&&e!==39&&Lu(Ce);break;case 40:e===41&&Lu(e);break;case 92:_t();break}return Ct}function A6(e,t){for(;_t()&&e+Ce!==57;)if(e+Ce===84&&mn()===47)break;return"/*"+as(t,Ct-1)+"*"+z1(e===47?e:_t())}function O6(e){for(;!Yi(mn());)_t();return as(e,Ct)}function D6(e){return _6(Xo("",null,null,null,[""],e=z6(e),0,[0],e))}function Xo(e,t,n,r,i,o,l,s,a){for(var u=0,d=0,p=l,h=0,f=0,v=0,x=1,j=1,L=1,g=0,m="",k=i,E=o,S=r,b=m;j;)switch(v=g,g=_t()){case 40:if(v!=108&&je(b,p-1)==58){qo(b+=X(Vs(g),"&","&\f"),"&\f",pp(u?s[u-1]:0))!=-1&&(L=-1);break}case 34:case 39:case 91:b+=Vs(g);break;case 9:case 10:case 13:case 32:b+=M6(v);break;case 92:b+=N6(Go()-1,7);continue;case 47:switch(mn()){case 42:case 47:gi(F6(A6(_t(),Go()),t,n,a),a),(Yi(v||1)==5||Yi(mn()||1)==5)&&It(b)&&Gn(b,-1,void 0)!==" "&&(b+=" ");break;default:b+="/"}break;case 123*x:s[u++]=It(b)*L;case 125*x:case 59:case 0:switch(g){case 0:case 125:j=0;case 59+d:L==-1&&(b=X(b,/\f/g,"")),f>0&&(It(b)-p||x===0&&v===47)&&gi(f>32?k2(b+";",r,n,p-1,a):k2(X(b," ","")+";",r,n,p-2,a),a);break;case 59:b+=";";default:if(gi(S=w2(b,t,n,u,d,i,s,m,k=[],E=[],p,o),o),g===123)if(d===0)Xo(b,t,S,S,k,o,p,s,E);else{switch(h){case 99:if(je(b,3)===110)break;case 108:if(je(b,2)===97)break;default:d=0;case 100:case 109:case 115:}d?Xo(e,S,S,r&&gi(w2(e,S,S,0,0,i,s,m,i,k=[],p,E),E),i,E,p,s,r?k:E):Xo(b,S,S,S,[""],E,0,s,E)}}u=d=f=0,x=L=1,m=b="",p=l;break;case 58:p=1+It(b),f=v;default:if(x<1){if(g==123)--x;else if(g==125&&x++==0&&T6()==125)continue}switch(b+=z1(g),g*x){case 38:L=d>0?1:(b+="\f",-1);break;case 44:s[u++]=(It(b)-1)*L,L=1;break;case 64:mn()===45&&(b+=Vs(_t())),h=mn(),d=p=It(m=b+=O6(Go())),g++;break;case 45:v===45&&It(b)==2&&(x=0)}}return o}function w2(e,t,n,r,i,o,l,s,a,u,d,p){for(var h=i-1,f=i===0?o:[""],v=hp(f),x=0,j=0,L=0;x<r;++x)for(var g=0,m=Gn(e,h+1,h=pp(j=l[x])),k=e;g<v;++g)(k=fp(j>0?f[g]+" "+m:X(m,/&\f/g,f[g])))&&(a[L++]=k);return ss(e,t,n,i===0?os:s,a,u,d,p)}function F6(e,t,n,r){return ss(e,t,n,cp,z1(R6()),Gn(e,2,-2),0,r)}function k2(e,t,n,r,i){return ss(e,t,n,T1,Gn(e,0,r),Gn(e,r+1,-1),r,i)}function mp(e,t,n){switch(P6(e,t)){case 5103:return ie+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ie+e+e;case 4855:return ie+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return ji+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ie+e+ji+e+fe+e+e;case 5936:switch(je(e,t+11)){case 114:return ie+e+fe+X(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ie+e+fe+X(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ie+e+fe+X(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ie+e+fe+e+e;case 6165:return ie+e+fe+"flex-"+e+e;case 5187:return ie+e+X(e,/(\w+).+(:[^]+)/,ie+"box-$1$2"+fe+"flex-$1$2")+e;case 5443:return ie+e+fe+"flex-item-"+X(e,/flex-|-self/g,"")+(Qt(e,/flex-|baseline/)?"":fe+"grid-row-"+X(e,/flex-|-self/g,""))+e;case 4675:return ie+e+fe+"flex-line-pack"+X(e,/align-content|flex-|-self/g,"")+e;case 5548:return ie+e+fe+X(e,"shrink","negative")+e;case 5292:return ie+e+fe+X(e,"basis","preferred-size")+e;case 6060:return ie+"box-"+X(e,"-grow","")+ie+e+fe+X(e,"grow","positive")+e;case 4554:return ie+X(e,/([^-])(transform)/g,"$1"+ie+"$2")+e;case 6187:return X(X(X(e,/(zoom-|grab)/,ie+"$1"),/(image-set)/,ie+"$1"),e,"")+e;case 5495:case 3959:return X(e,/(image-set\([^]*)/,ie+"$1$`$1");case 4968:return X(X(e,/(.+:)(flex-)?(.*)/,ie+"box-pack:$3"+fe+"flex-pack:$3"),/space-between/,"justify")+ie+e+e;case 4200:if(!Qt(e,/flex-|baseline/))return fe+"grid-column-align"+Gn(e,t)+e;break;case 2592:case 3360:return fe+X(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Qt(r.props,/grid-\w+-end/)})?~qo(e+(n=n[t].value),"span",0)?e:fe+X(e,"-start","")+e+fe+"grid-row-span:"+(~qo(n,"span",0)?Qt(n,/\d+/):+Qt(n,/\d+/)-+Qt(e,/\d+/))+";":fe+X(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Qt(r.props,/grid-\w+-start/)})?e:fe+X(X(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return X(e,/(.+)-inline(.+)/,ie+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(It(e)-1-t>6)switch(je(e,t+1)){case 109:if(je(e,t+4)!==45)break;case 102:return X(e,/(.+:)(.+)-([^]+)/,"$1"+ie+"$2-$3$1"+ji+(je(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~qo(e,"stretch",0)?mp(X(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return X(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,s,a,u){return fe+i+":"+o+u+(l?fe+i+"-span:"+(s?a:+a-+o)+u:"")+e});case 4949:if(je(e,t+6)===121)return X(e,":",":"+ie)+e;break;case 6444:switch(je(e,je(e,14)===45?18:11)){case 120:return X(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ie+(je(e,14)===45?"inline-":"")+"box$3$1"+ie+"$2$3$1"+fe+"$2box$3")+e;case 100:return X(e,":",":"+fe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return X(e,"scroll-","scroll-snap-")+e}return e}function Rl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function B6(e,t,n,r){switch(e.type){case $6:if(e.children.length)break;case E6:case j6:case T1:return e.return=e.return||e.value;case cp:return"";case dp:return e.return=e.value+"{"+Rl(e.children,r)+"}";case os:if(!It(e.value=e.props.join(",")))return""}return It(n=Rl(e.children,r))?e.return=e.value+"{"+n+"}":""}function U6(e){var t=hp(e);return function(n,r,i,o){for(var l="",s=0;s<t;s++)l+=e[s](n,r,i,o)||"";return l}}function H6(e){return function(t){t.root||(t=t.return)&&e(t)}}function V6(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case T1:e.return=mp(e.value,e.length,n);return;case dp:return Rl([un(e,{value:X(e.value,"@","@"+ie)})],r);case os:if(e.length)return I6(n=e.props,function(i){switch(Qt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":sr(un(e,{props:[X(i,/:(read-\w+)/,":"+ji+"$1")]})),sr(un(e,{props:[i]})),hu(e,{props:v2(n,r)});break;case"::placeholder":sr(un(e,{props:[X(i,/:(plac\w+)/,":"+ie+"input-$1")]})),sr(un(e,{props:[X(i,/:(plac\w+)/,":"+ji+"$1")]})),sr(un(e,{props:[X(i,/:(plac\w+)/,fe+"input-$1")]})),sr(un(e,{props:[i]})),hu(e,{props:v2(n,r)});break}return""})}}var W6={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},at={},Br=typeof process<"u"&&at!==void 0&&(at.REACT_APP_SC_ATTR||at.SC_ATTR)||"data-styled",gp="active",xp="data-styled-version",us="6.3.8",_1=`/*!sc*/
`,Tl=typeof window<"u"&&typeof document<"u",Ht=ke.createContext===void 0,K6=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&at!==void 0&&at.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&at.REACT_APP_SC_DISABLE_SPEEDY!==""?at.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&at.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&at!==void 0&&at.SC_DISABLE_SPEEDY!==void 0&&at.SC_DISABLE_SPEEDY!==""&&at.SC_DISABLE_SPEEDY!=="false"&&at.SC_DISABLE_SPEEDY),Z6={},cs=Object.freeze([]),Ur=Object.freeze({});function yp(e,t,n){return n===void 0&&(n=Ur),e.theme!==n.theme&&e.theme||t||n.theme}var vp=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Y6=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Q6=/(^-|-$)/g;function S2(e){return e.replace(Y6,"-").replace(Q6,"")}var q6=/(a)(d)/gi,C2=function(e){return String.fromCharCode(e+(e>25?39:97))};function mu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=C2(t%52)+n;return(C2(t%52)+n).replace(q6,"$1-$2")}var Ws,wr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},wp=function(e){return wr(5381,e)};function M1(e){return mu(wp(e)>>>0)}function G6(e){return e.displayName||e.name||"Component"}function Ks(e){return typeof e=="string"&&!0}var kp=typeof Symbol=="function"&&Symbol.for,Sp=kp?Symbol.for("react.memo"):60115,X6=kp?Symbol.for("react.forward_ref"):60112,J6={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},e5={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Cp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},t5=((Ws={})[X6]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ws[Sp]=Cp,Ws);function b2(e){return("type"in(t=e)&&t.type.$$typeof)===Sp?Cp:"$$typeof"in e?t5[e.$$typeof]:J6;var t}var n5=Object.defineProperty,r5=Object.getOwnPropertyNames,E2=Object.getOwnPropertySymbols,i5=Object.getOwnPropertyDescriptor,o5=Object.getPrototypeOf,j2=Object.prototype;function bp(e,t,n){if(typeof t!="string"){if(j2){var r=o5(t);r&&r!==j2&&bp(e,r,n)}var i=r5(t);E2&&(i=i.concat(E2(t)));for(var o=b2(e),l=b2(t),s=0;s<i.length;++s){var a=i[s];if(!(a in e5||n&&n[a]||l&&a in l||o&&a in o)){var u=i5(t,a);try{n5(e,a,u)}catch{}}}}return e}function Xn(e){return typeof e=="function"}function N1(e){return typeof e=="object"&&"styledComponentId"in e}function Un(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function zl(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Qi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function gu(e,t,n){if(n===void 0&&(n=!1),!n&&!Qi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=gu(e[r],t[r]);else if(Qi(t))for(var r in t)e[r]=gu(e[r],t[r]);return e}function A1(e,t){Object.defineProperty(e,"toString",{value:t})}function Jn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var l5=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Jn(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),a=(l=0,n.length);l<a;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(_1);return n},e}(),Jo=new Map,_l=new Map,el=1,kr=function(e){if(Jo.has(e))return Jo.get(e);for(;_l.has(el);)el++;var t=el++;return Jo.set(e,t),_l.set(t,e),t},s5=function(e,t){el=t+1,Jo.set(e,t),_l.set(t,e)},a5="style[".concat(Br,"][").concat(xp,'="').concat(us,'"]'),u5=new RegExp("^".concat(Br,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),c5=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},d5=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(_1),i=[],o=0,l=r.length;o<l;o++){var s=r[o].trim();if(s){var a=s.match(u5);if(a){var u=0|parseInt(a[1],10),d=a[2];u!==0&&(s5(d,u),c5(e,d,a[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}},$2=function(e){for(var t=document.querySelectorAll(a5),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Br)!==gp&&(d5(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function p5(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ep=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var a=Array.from(s.querySelectorAll("style[".concat(Br,"]")));return a[a.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Br,gp),r.setAttribute(xp,us);var l=p5();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},f5=function(){function e(t){this.element=Ep(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw Jn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),h5=function(){function e(t){this.element=Ep(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),L5=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),P2=Tl,m5={isServer:!Tl,useCSSOMInjection:!K6},Ml=function(){function e(t,n,r){t===void 0&&(t=Ur),n===void 0&&(n={});var i=this;this.options=Re(Re({},m5),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Tl&&P2&&(P2=!1,$2(this)),A1(this,function(){return function(o){for(var l=o.getTag(),s=l.length,a="",u=function(p){var h=function(L){return _l.get(L)}(p);if(h===void 0)return"continue";var f=o.names.get(h),v=l.getGroup(p);if(f===void 0||!f.size||v.length===0)return"continue";var x="".concat(Br,".g").concat(p,'[id="').concat(h,'"]'),j="";f!==void 0&&f.forEach(function(L){L.length>0&&(j+="".concat(L,","))}),a+="".concat(v).concat(x,'{content:"').concat(j,'"}').concat(_1)},d=0;d<s;d++)u(d);return a}(i)})}return e.registerId=function(t){return kr(t)},e.prototype.rehydrate=function(){!this.server&&Tl&&$2(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Re(Re({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new L5(i):r?new f5(i):new h5(i)}(this.options),new l5(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(kr(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(kr(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(kr(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),g5=/&/g,Sr=47;function I2(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var l=e.charCodeAt(o);if(r!==0||i||l!==Sr||e.charCodeAt(o+1)!==42)if(i)l===42&&e.charCodeAt(o+1)===Sr&&(i=!1,o++);else if(l!==34&&l!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(l===123)n++;else if(l===125&&--n<0)return!0}}else r===0?r=l:r===l&&(r=0);else i=!0,o++}return n!==0||r!==0}function jp(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=jp(n.children,t)),n})}function x5(e){var t,n,r,i=Ur,o=i.options,l=o===void 0?Ur:o,s=i.plugins,a=s===void 0?cs:s,u=function(h,f,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):h},d=a.slice();d.push(function(h){h.type===os&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(g5,n).replace(r,u))}),l.prefix&&d.push(V6),d.push(B6);var p=function(h,f,v,x){f===void 0&&(f=""),v===void 0&&(v=""),x===void 0&&(x="&"),t=x,n=f,r=new RegExp("\\".concat(n,"\\b"),"g");var j=function(m){if(!I2(m))return m;for(var k=m.length,E="",S=0,b=0,P=0,A=!1,R=0;R<k;R++){var _=m.charCodeAt(R);if(P!==0||A||_!==Sr||m.charCodeAt(R+1)!==42)if(A)_===42&&m.charCodeAt(R+1)===Sr&&(A=!1,R++);else if(_!==34&&_!==39||R!==0&&m.charCodeAt(R-1)===92){if(P===0)if(_===123)b++;else if(_===125){if(--b<0){for(var N=R+1;N<k;){var O=m.charCodeAt(N);if(O===59||O===10)break;N++}N<k&&m.charCodeAt(N)===59&&N++,b=0,R=N-1,S=N;continue}b===0&&(E+=m.substring(S,R+1),S=R+1)}else _===59&&b===0&&(E+=m.substring(S,R+1),S=R+1)}else P===0?P=_:P===_&&(P=0);else A=!0,R++}if(S<k){var V=m.substring(S);I2(V)||(E+=V)}return E}(function(m){if(m.indexOf("//")===-1)return m;for(var k=m.length,E=[],S=0,b=0,P=0,A=0;b<k;){var R=m.charCodeAt(b);if(R!==34&&R!==39||b!==0&&m.charCodeAt(b-1)===92)if(P===0)if(R===40&&b>=3&&(32|m.charCodeAt(b-1))==108&&(32|m.charCodeAt(b-2))==114&&(32|m.charCodeAt(b-3))==117)A=1,b++;else if(A>0)R===41?A--:R===40&&A++,b++;else if(R===Sr&&b+1<k&&m.charCodeAt(b+1)===Sr){for(b>S&&E.push(m.substring(S,b));b<k&&m.charCodeAt(b)!==10;)b++;S=b}else b++;else b++;else P===0?P=R:P===R&&(P=0),b++}return S===0?m:(S<k&&E.push(m.substring(S)),E.join(""))}(h)),L=D6(v||f?"".concat(v," ").concat(f," { ").concat(j," }"):j);l.namespace&&(L=jp(L,l.namespace));var g=[];return Rl(L,U6(d.concat(H6(function(m){return g.push(m)})))),g};return p.hash=a.length?a.reduce(function(h,f){return f.name||Jn(15),wr(h,f.name)},5381).toString():"",p}var y5=new Ml,xu=x5(),yu={shouldForwardProp:void 0,styleSheet:y5,stylis:xu},$p=Ht?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(yu)}}:ke.createContext(yu);$p.Consumer;Ht||ke.createContext(void 0);function vu(){return Ht?yu:ke.useContext($p)}var Pp=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=xu);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,A1(this,function(){throw Jn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=xu),this.name+t.hash},e}();function v5(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in W6||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var w5=function(e){return e>="A"&&e<="Z"};function R2(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;w5(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Ip=function(e){return e==null||e===!1||e===""},Rp=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!Ip(r)&&(Array.isArray(r)&&r.isCss||Xn(r)?t.push("".concat(R2(n),":"),r,";"):Qi(r)?t.push.apply(t,Dr(Dr(["".concat(n," {")],Rp(r),!1),["}"],!1)):t.push("".concat(R2(n),": ").concat(v5(n,r),";")))}return t};function bn(e,t,n,r){if(Ip(e))return[];if(N1(e))return[".".concat(e.styledComponentId)];if(Xn(e)){if(!Xn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return bn(i,t,n,r)}var o;return e instanceof Pp?n?(e.inject(n,r),[e.getName(r)]):[e]:Qi(e)?Rp(e):Array.isArray(e)?Array.prototype.concat.apply(cs,e.map(function(l){return bn(l,t,n,r)})):[e.toString()]}function Tp(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Xn(n)&&!N1(n))return!1}return!0}var k5=wp(us),S5=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Tp(t),this.componentId=n,this.baseHash=wr(k5,n),this.baseStyle=r,Ml.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Un(i,this.staticRulesId);else{var o=zl(bn(this.rules,t,n,r)),l=mu(wr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}i=Un(i,l),this.staticRulesId=l}else{for(var a=wr(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var p=this.rules[d];if(typeof p=="string")u+=p;else if(p){var h=zl(bn(p,t,n,r));a=wr(a,h+d),u+=h}}if(u){var f=mu(a>>>0);if(!n.hasNameForId(this.componentId,f)){var v=r(u,".".concat(f),void 0,this.componentId);n.insertRules(this.componentId,f,v)}i=Un(i,f)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(kr(this.componentId)):""}},e}(),qi=Ht?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(void 0)}}:ke.createContext(void 0);qi.Consumer;function C5(e){if(Ht)return e.children;var t=ke.useContext(qi),n=ke.useMemo(function(){return function(r,i){if(!r)throw Jn(14);if(Xn(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw Jn(8);return i?Re(Re({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?ke.createElement(qi.Provider,{value:n},e.children):null}var Zs={};function b5(e,t,n){var r=N1(e),i=e,o=!Ks(e),l=t.attrs,s=l===void 0?cs:l,a=t.componentId,u=a===void 0?function(k,E){var S=typeof k!="string"?"sc":S2(k);Zs[S]=(Zs[S]||0)+1;var b="".concat(S,"-").concat(M1(us+S+Zs[S]));return E?"".concat(E,"-").concat(b):b}(t.displayName,t.parentComponentId):a,d=t.displayName,p=d===void 0?function(k){return Ks(k)?"styled.".concat(k):"Styled(".concat(G6(k),")")}(e):d,h=t.displayName&&t.componentId?"".concat(S2(t.displayName),"-").concat(t.componentId):t.componentId||u,f=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var j=t.shouldForwardProp;v=function(k,E){return x(k,E)&&j(k,E)}}else v=x}var L=new S5(n,h,r?i.componentStyle:void 0);function g(k,E){return function(S,b,P){var A=S.attrs,R=S.componentStyle,_=S.defaultProps,N=S.foldedComponentIds,O=S.styledComponentId,V=S.target,U=Ht?void 0:ke.useContext(qi),K=vu(),q=S.shouldForwardProp||K.shouldForwardProp,T=yp(b,U,_)||Ur,F=function(He,Ve,it){for(var ot,H=Re(Re({},Ve),{className:void 0,theme:it}),Pe=0;Pe<He.length;Pe+=1){var Wt=Xn(ot=He[Pe])?ot(H):ot;for(var bt in Wt)bt==="className"?H.className=Un(H.className,Wt[bt]):bt==="style"?H.style=Re(Re({},H.style),Wt[bt]):H[bt]=Wt[bt]}return"className"in Ve&&typeof Ve.className=="string"&&(H.className=Un(H.className,Ve.className)),H}(A,b,T),y=F.as||V,Z={};for(var Y in F)F[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"&&F.theme===T||(Y==="forwardedAs"?Z.as=F.forwardedAs:q&&!q(Y,y)||(Z[Y]=F[Y]));var C=function(He,Ve){var it=vu(),ot=He.generateAndInjectStyles(Ve,it.styleSheet,it.stylis);return ot}(R,F),le=C.className,te=C.css,re=Un(N,O);le&&(re+=" "+le),F.className&&(re+=" "+F.className),Z[Ks(y)&&!vp.has(y)?"class":"className"]=re,P&&(Z.ref=P);var Ue=$.createElement(y,Z);return Ht&&te?ke.createElement(ke.Fragment,null,ke.createElement("style",{precedence:"styled-components",href:"sc-".concat(O,"-").concat(le),children:te}),Ue):Ue}(m,k,E)}g.displayName=p;var m=ke.forwardRef(g);return m.attrs=f,m.componentStyle=L,m.displayName=p,m.shouldForwardProp=v,m.foldedComponentIds=r?Un(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=h,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=r?function(E){for(var S=[],b=1;b<arguments.length;b++)S[b-1]=arguments[b];for(var P=0,A=S;P<A.length;P++)gu(E,A[P],!0);return E}({},i.defaultProps,k):k}}),A1(m,function(){return".".concat(m.styledComponentId)}),o&&bp(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function T2(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var z2=function(e){return Object.assign(e,{isCss:!0})};function qe(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Xn(e)||Qi(e))return z2(bn(T2(cs,Dr([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?bn(r):z2(bn(T2(r,t)))}function wu(e,t,n){if(n===void 0&&(n=Ur),!t)throw Jn(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,qe.apply(void 0,Dr([i],o,!1)))};return r.attrs=function(i){return wu(e,t,Re(Re({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return wu(e,t,Re(Re({},n),i))},r}var zp=function(e){return wu(b5,e)},w=zp;vp.forEach(function(e){w[e]=zp(e)});var E5=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Tp(t),Ml.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(zl(bn(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Ml.registerId(this.componentId+t);var o=this.componentId+t;this.isStatic?r.hasNameForId(o,o)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function j5(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=qe.apply(void 0,Dr([e],t,!1)),i="sc-global-".concat(M1(JSON.stringify(r))),o=new E5(r,i),l=new WeakMap,s=function(a){var u=vu(),d=Ht?void 0:ke.useContext(qi),p=l.get(u.styleSheet);if(p===void 0&&(p=u.styleSheet.allocateGSInstance(i),l.set(u.styleSheet,p)),(typeof window>"u"||!u.styleSheet.server)&&function(j,L,g,m,k){if(o.isStatic)o.renderStyles(j,Z6,g,k);else{var E=Re(Re({},L),{theme:yp(L,m,s.defaultProps)});o.renderStyles(j,E,g,k)}}(p,a,u.styleSheet,d,u.stylis),!Ht){var h=ke.useRef(!0);ke.useLayoutEffect(function(){return h.current=!1,function(){h.current=!0,queueMicrotask(function(){h.current&&(o.removeStyles(p,u.styleSheet),typeof document<"u"&&document.querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(j){return j.remove()}))})}},[p,u.styleSheet])}if(Ht){var f=i+p,v=typeof window>"u"?u.styleSheet.getTag().getGroup(kr(f)):"";if(v){var x="".concat(i,"-").concat(p);return ke.createElement("style",{key:x,"data-styled-global":i,precedence:"styled-components",href:x,children:v})}}return null};return ke.memo(s)}function mt(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=zl(qe.apply(void 0,Dr([e],t,!1))),i=M1(r);return new Pp(i,r)}/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gi(){return Gi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gi.apply(this,arguments)}var Hn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Hn||(Hn={}));const _2="popstate";function $5(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:s}=r.location;return ku("",{pathname:o,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Nl(i)}return I5(t,n,null,e)}function ze(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function O1(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function P5(){return Math.random().toString(36).substr(2,8)}function M2(e,t){return{usr:e.state,key:e.key,idx:t}}function ku(e,t,n,r){return n===void 0&&(n=null),Gi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?io(t):t,{state:n,key:t&&t.key||r||P5()})}function Nl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function io(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function I5(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,s=Hn.Pop,a=null,u=d();u==null&&(u=0,l.replaceState(Gi({},l.state,{idx:u}),""));function d(){return(l.state||{idx:null}).idx}function p(){s=Hn.Pop;let j=d(),L=j==null?null:j-u;u=j,a&&a({action:s,location:x.location,delta:L})}function h(j,L){s=Hn.Push;let g=ku(x.location,j,L);u=d()+1;let m=M2(g,u),k=x.createHref(g);try{l.pushState(m,"",k)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(k)}o&&a&&a({action:s,location:x.location,delta:1})}function f(j,L){s=Hn.Replace;let g=ku(x.location,j,L);u=d();let m=M2(g,u),k=x.createHref(g);l.replaceState(m,"",k),o&&a&&a({action:s,location:x.location,delta:0})}function v(j){let L=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof j=="string"?j:Nl(j);return g=g.replace(/ $/,"%20"),ze(L,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,L)}let x={get action(){return s},get location(){return e(i,l)},listen(j){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(_2,p),a=j,()=>{i.removeEventListener(_2,p),a=null}},createHref(j){return t(i,j)},createURL:v,encodeLocation(j){let L=v(j);return{pathname:L.pathname,search:L.search,hash:L.hash}},push:h,replace:f,go(j){return l.go(j)}};return x}var N2;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(N2||(N2={}));function R5(e,t,n){return n===void 0&&(n="/"),T5(e,t,n)}function T5(e,t,n,r){let i=typeof t=="string"?io(t):t,o=Hr(i.pathname||"/",n);if(o==null)return null;let l=_p(e);z5(l);let s=null;for(let a=0;s==null&&a<l.length;++a){let u=V5(o);s=U5(l[a],u)}return s}function _p(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,s)=>{let a={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};a.relativePath.startsWith("/")&&(ze(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=En([r,a.relativePath]),d=n.concat(a);o.children&&o.children.length>0&&(ze(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),_p(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:F5(u,o.index),routesMeta:d})};return e.forEach((o,l)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,l);else for(let a of Mp(o.path))i(o,l,a)}),t}function Mp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=Mp(r.join("/")),s=[];return s.push(...l.map(a=>a===""?o:[o,a].join("/"))),i&&s.push(...l),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function z5(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:B5(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const _5=/^:[\w-]+$/,M5=3,N5=2,A5=1,O5=10,D5=-2,A2=e=>e==="*";function F5(e,t){let n=e.split("/"),r=n.length;return n.some(A2)&&(r+=D5),t&&(r+=N5),n.filter(i=>!A2(i)).reduce((i,o)=>i+(_5.test(o)?M5:o===""?A5:O5),r)}function B5(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function U5(e,t,n){let{routesMeta:r}=e,i={},o="/",l=[];for(let s=0;s<r.length;++s){let a=r[s],u=s===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",p=Su({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},d),h=a.route;if(!p)return null;Object.assign(i,p.params),l.push({params:i,pathname:En([o,p.pathname]),pathnameBase:Q5(En([o,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(o=En([o,p.pathnameBase]))}return l}function Su(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=H5(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:h,isOptional:f}=d;if(h==="*"){let x=s[p]||"";l=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const v=s[p];return f&&!v?u[h]=void 0:u[h]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:l,pattern:e}}function H5(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),O1(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function V5(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return O1(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Hr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const W5=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,K5=e=>W5.test(e);function Z5(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?io(e):e,o;if(n)if(K5(n))o=n;else{if(n.includes("//")){let l=n;n=n.replace(/\/\/+/g,"/"),O1(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?o=O2(n.substring(1),"/"):o=O2(n,t)}else o=t;return{pathname:o,search:q5(r),hash:G5(i)}}function O2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ys(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Y5(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Np(e,t){let n=Y5(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ap(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=io(e):(i=Gi({},e),ze(!i.pathname||!i.pathname.includes("?"),Ys("?","pathname","search",i)),ze(!i.pathname||!i.pathname.includes("#"),Ys("#","pathname","hash",i)),ze(!i.search||!i.search.includes("#"),Ys("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,s;if(l==null)s=n;else{let p=t.length-1;if(!r&&l.startsWith("..")){let h=l.split("/");for(;h[0]==="..";)h.shift(),p-=1;i.pathname=h.join("/")}s=p>=0?t[p]:"/"}let a=Z5(i,s),u=l&&l!=="/"&&l.endsWith("/"),d=(o||l===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||d)&&(a.pathname+="/"),a}const En=e=>e.join("/").replace(/\/\/+/g,"/"),Q5=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),q5=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,G5=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function X5(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Op=["post","put","patch","delete"];new Set(Op);const J5=["get",...Op];new Set(J5);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Al(){return Al=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Al.apply(this,arguments)}const ds=$.createContext(null),Dp=$.createContext(null),Tn=$.createContext(null),D1=$.createContext(null),ln=$.createContext({outlet:null,matches:[],isDataRoute:!1}),Fp=$.createContext(null);function e7(e,t){let{relative:n}=t===void 0?{}:t;oo()||ze(!1);let{basename:r,navigator:i}=$.useContext(Tn),{hash:o,pathname:l,search:s}=ps(e,{relative:n}),a=l;return r!=="/"&&(a=l==="/"?r:En([r,l])),i.createHref({pathname:a,search:s,hash:o})}function oo(){return $.useContext(D1)!=null}function rr(){return oo()||ze(!1),$.useContext(D1).location}function Bp(e){$.useContext(Tn).static||$.useLayoutEffect(e)}function zn(){let{isDataRoute:e}=$.useContext(ln);return e?L7():t7()}function t7(){oo()||ze(!1);let e=$.useContext(ds),{basename:t,future:n,navigator:r}=$.useContext(Tn),{matches:i}=$.useContext(ln),{pathname:o}=rr(),l=JSON.stringify(Np(i,n.v7_relativeSplatPath)),s=$.useRef(!1);return Bp(()=>{s.current=!0}),$.useCallback(function(u,d){if(d===void 0&&(d={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let p=Ap(u,JSON.parse(l),o,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:En([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,l,o,e])}const n7=$.createContext(null);function r7(e){let t=$.useContext(ln).outlet;return t&&$.createElement(n7.Provider,{value:e},t)}function Up(){let{matches:e}=$.useContext(ln),t=e[e.length-1];return t?t.params:{}}function ps(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=$.useContext(Tn),{matches:i}=$.useContext(ln),{pathname:o}=rr(),l=JSON.stringify(Np(i,r.v7_relativeSplatPath));return $.useMemo(()=>Ap(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function i7(e,t){return o7(e)}function o7(e,t,n,r){oo()||ze(!1);let{navigator:i}=$.useContext(Tn),{matches:o}=$.useContext(ln),l=o[o.length-1],s=l?l.params:{};l&&l.pathname;let a=l?l.pathnameBase:"/";l&&l.route;let u=rr(),d;d=u;let p=d.pathname||"/",h=p;if(a!=="/"){let x=a.replace(/^\//,"").split("/");h="/"+p.replace(/^\//,"").split("/").slice(x.length).join("/")}let f=R5(e,{pathname:h});return c7(f&&f.map(x=>Object.assign({},x,{params:Object.assign({},s,x.params),pathname:En([a,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?a:En([a,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),o,n,r)}function l7(){let e=h7(),t=X5(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return $.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},t),n?$.createElement("pre",{style:i},n):null,null)}const s7=$.createElement(l7,null);class a7 extends $.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?$.createElement(ln.Provider,{value:this.props.routeContext},$.createElement(Fp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function u7(e){let{routeContext:t,match:n,children:r}=e,i=$.useContext(ds);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),$.createElement(ln.Provider,{value:t},r)}function c7(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let d=l.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);d>=0||ze(!1),l=l.slice(0,Math.min(l.length,d+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<l.length;d++){let p=l[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:h,errors:f}=n,v=p.route.loader&&h[p.route.id]===void 0&&(!f||f[p.route.id]===void 0);if(p.route.lazy||v){a=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((d,p,h)=>{let f,v=!1,x=null,j=null;n&&(f=s&&p.route.id?s[p.route.id]:void 0,x=p.route.errorElement||s7,a&&(u<0&&h===0?(m7("route-fallback"),v=!0,j=null):u===h&&(v=!0,j=p.route.hydrateFallbackElement||null)));let L=t.concat(l.slice(0,h+1)),g=()=>{let m;return f?m=x:v?m=j:p.route.Component?m=$.createElement(p.route.Component,null):p.route.element?m=p.route.element:m=d,$.createElement(u7,{match:p,routeContext:{outlet:d,matches:L,isDataRoute:n!=null},children:m})};return n&&(p.route.ErrorBoundary||p.route.errorElement||h===0)?$.createElement(a7,{location:n.location,revalidation:n.revalidation,component:x,error:f,children:g(),routeContext:{outlet:null,matches:L,isDataRoute:!0}}):g()},null)}var Hp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Hp||{}),Vp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Vp||{});function d7(e){let t=$.useContext(ds);return t||ze(!1),t}function p7(e){let t=$.useContext(Dp);return t||ze(!1),t}function f7(e){let t=$.useContext(ln);return t||ze(!1),t}function Wp(e){let t=f7(),n=t.matches[t.matches.length-1];return n.route.id||ze(!1),n.route.id}function h7(){var e;let t=$.useContext(Fp),n=p7(Vp.UseRouteError),r=Wp();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function L7(){let{router:e}=d7(Hp.UseNavigateStable),t=Wp(),n=$.useRef(!1);return Bp(()=>{n.current=!0}),$.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Al({fromRouteId:t},o)))},[e,t])}const D2={};function m7(e,t,n){D2[e]||(D2[e]=!0)}function g7(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function x7(e){return r7(e.context)}function y7(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Hn.Pop,navigator:o,static:l=!1,future:s}=e;oo()&&ze(!1);let a=t.replace(/^\/*/,"/"),u=$.useMemo(()=>({basename:a,navigator:o,static:l,future:Al({v7_relativeSplatPath:!1},s)}),[a,s,o,l]);typeof r=="string"&&(r=io(r));let{pathname:d="/",search:p="",hash:h="",state:f=null,key:v="default"}=r,x=$.useMemo(()=>{let j=Hr(d,a);return j==null?null:{location:{pathname:j,search:p,hash:h,state:f,key:v},navigationType:i}},[a,d,p,h,f,v,i]);return x==null?null:$.createElement(Tn.Provider,{value:u},$.createElement(D1.Provider,{children:n,value:x}))}new Promise(()=>{});/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ol(){return Ol=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ol.apply(this,arguments)}function Kp(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function v7(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function w7(e,t){return e.button===0&&(!t||t==="_self")&&!v7(e)}const k7=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],S7=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],C7="6";try{window.__reactRouterVersion=C7}catch{}const b7=$.createContext({isTransitioning:!1}),E7="startTransition",F2=h3[E7];function j7(e){let{basename:t,children:n,future:r,window:i}=e,o=$.useRef();o.current==null&&(o.current=$5({window:i,v5Compat:!0}));let l=o.current,[s,a]=$.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},d=$.useCallback(p=>{u&&F2?F2(()=>a(p)):a(p)},[a,u]);return $.useLayoutEffect(()=>l.listen(d),[l,d]),$.useEffect(()=>g7(r),[r]),$.createElement(y7,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}const $7=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",P7=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qr=$.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:s,target:a,to:u,preventScrollReset:d,viewTransition:p}=t,h=Kp(t,k7),{basename:f}=$.useContext(Tn),v,x=!1;if(typeof u=="string"&&P7.test(u)&&(v=u,$7))try{let m=new URL(window.location.href),k=u.startsWith("//")?new URL(m.protocol+u):new URL(u),E=Hr(k.pathname,f);k.origin===m.origin&&E!=null?u=E+k.search+k.hash:x=!0}catch{}let j=e7(u,{relative:i}),L=T7(u,{replace:l,state:s,target:a,preventScrollReset:d,relative:i,viewTransition:p});function g(m){r&&r(m),m.defaultPrevented||L(m)}return $.createElement("a",Ol({},h,{href:v||j,onClick:x||o?r:g,ref:n,target:a}))}),I7=$.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:l=!1,style:s,to:a,viewTransition:u,children:d}=t,p=Kp(t,S7),h=ps(a,{relative:p.relative}),f=rr(),v=$.useContext(Dp),{navigator:x,basename:j}=$.useContext(Tn),L=v!=null&&z7(h)&&u===!0,g=x.encodeLocation?x.encodeLocation(h).pathname:h.pathname,m=f.pathname,k=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(m=m.toLowerCase(),k=k?k.toLowerCase():null,g=g.toLowerCase()),k&&j&&(k=Hr(k,j)||k);const E=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let S=m===g||!l&&m.startsWith(g)&&m.charAt(E)==="/",b=k!=null&&(k===g||!l&&k.startsWith(g)&&k.charAt(g.length)==="/"),P={isActive:S,isPending:b,isTransitioning:L},A=S?r:void 0,R;typeof o=="function"?R=o(P):R=[o,S?"active":null,b?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let _=typeof s=="function"?s(P):s;return $.createElement(qr,Ol({},p,{"aria-current":A,className:R,ref:n,style:_,to:a,viewTransition:u}),typeof d=="function"?d(P):d)});var Cu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Cu||(Cu={}));var B2;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(B2||(B2={}));function R7(e){let t=$.useContext(ds);return t||ze(!1),t}function T7(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,viewTransition:s}=t===void 0?{}:t,a=zn(),u=rr(),d=ps(e,{relative:l});return $.useCallback(p=>{if(w7(p,n)){p.preventDefault();let h=r!==void 0?r:Nl(u)===Nl(d);a(e,{replace:h,state:i,preventScrollReset:o,relative:l,viewTransition:s})}},[u,a,d,r,i,n,e,o,l,s])}function z7(e,t){t===void 0&&(t={});let n=$.useContext(b7);n==null&&ze(!1);let{basename:r}=R7(Cu.useViewTransitionState),i=ps(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=Hr(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=Hr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Su(i.pathname,l)!=null||Su(i.pathname,o)!=null}const bu="/assets/logo-CsQHSiKo.png",_7=w.header`
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
`,M7=w(qr)`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: 2px;
    border-radius: ${({theme:e})=>e.radii.md};
  }
`,N7=w.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
`,A7=w.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`,O7=w.h1`
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.colors.primary600};
  margin: 0;
  line-height: 1.3;
`,D7=w.p`
  font-size: 0.8rem;
  color: ${({theme:e})=>e.colors.primary400};
  margin: 2px 0 0;
`,F7=w.div`
  width: 48px;
  flex-shrink: 0;
`,B7=()=>c.jsxs(_7,{children:[c.jsx(M7,{to:"/",children:c.jsx(N7,{src:bu,alt:"명상 지도 로고"})}),c.jsxs(A7,{children:[c.jsx(O7,{children:"명상 지도"}),c.jsx(D7,{children:"국내 명상지를 찾아보세요"})]}),c.jsx(F7,{})]}),U7=w.nav`
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
`,Qs=w(I7)`
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
`,H7=w(qr)`
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
`,V7=()=>c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),c.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),W7=()=>c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),c.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"}),c.jsx("line",{x1:"8",y1:"6",x2:"16",y2:"6"}),c.jsx("line",{x1:"8",y1:"10",x2:"16",y2:"10"})]}),K7=()=>c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),Z7=()=>c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),c.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),Y7=()=>{const{pathname:e}=rr(),t=e.startsWith("/meditation/map")||e.startsWith("/meditation/region")||e.startsWith("/blog");return c.jsxs(U7,{role:"navigation","aria-label":"하단 메뉴",children:[c.jsxs(Qs,{to:"/",end:!0,children:[c.jsx(V7,{}),c.jsx("span",{children:"홈"})]}),c.jsxs(H7,{to:"/meditation/map",$active:t,children:[c.jsx(W7,{}),c.jsx("span",{children:"지도"})]}),c.jsxs(Qs,{to:"/favorites",children:[c.jsx(K7,{}),c.jsx("span",{children:"찜"})]}),c.jsxs(Qs,{to:"/profile",children:[c.jsx(Z7,{}),c.jsx("span",{children:"마이"})]})]})},Q7=w.div`
  min-height: 100vh;
  background: ${({theme:e})=>e.colors.warmCream};
`,q7=w.main`
  padding: 0 20px calc(56px + env(safe-area-inset-bottom, 0px) + 24px);
  background: ${({theme:e})=>e.colors.warmCream};

  @media (max-width: 768px) {
    padding: 0 12px calc(56px + env(safe-area-inset-bottom, 0px) + 24px);
  }
`,G7=()=>{const{pathname:e}=rr(),t=e==="/"||e==="/meditation";return c.jsxs(Q7,{children:[t&&c.jsx(B7,{}),c.jsx(q7,{children:c.jsx(x7,{})}),c.jsx(Y7,{})]})},X7=w.div`
  background: ${({theme:e})=>e.colors.white};
  padding: 20px;
  border-radius: ${({theme:e})=>e.radii.lg};
  box-shadow: ${({theme:e})=>e.shadow.soft};
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid ${({theme:e})=>e.colors.primary100};
`,qs=w.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Gs=w.span`
  font-size: 1.1rem;
  font-weight: 600;
`,J7=w.select`
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid ${({theme:e})=>e.colors.border200};
  font-size: 1.1rem;
`,U2=w.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,H2=w.button`
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
`,e8=w.button`
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
`,Dl=({filters:e,availableTags:t,onChangeCategory:n,onToggleTag:r,onChangeSortBy:i,onReset:o})=>{const l=[{label:"전체",value:"all"},{label:"템플스테이",value:"템플스테이"},{label:"명상센터",value:"명상센터"},{label:"프리랜서(공간없음)",value:"프리랜서(공간없음)"},{label:"요가센터",value:"요가센터"},{label:"기타",value:"기타"}];return c.jsxs(X7,{children:[c.jsxs(qs,{children:[c.jsx(Gs,{children:"카테고리"}),c.jsx(U2,{children:l.map(s=>c.jsx(H2,{type:"button",$active:e.category===s.value,onClick:()=>n(s.value),children:s.label},s.value))})]}),c.jsxs(qs,{children:[c.jsx(Gs,{children:"해시태그"}),c.jsx(U2,{children:t.map(s=>c.jsxs(H2,{type:"button",$active:e.tags.includes(s),onClick:()=>r(s),children:["#",s]},s))})]}),c.jsxs(qs,{children:[c.jsx(Gs,{children:"정렬"}),c.jsxs(J7,{value:e.sortBy,onChange:s=>i(s.target.value),children:[c.jsx("option",{value:"recommend",children:"추천순"}),c.jsx("option",{value:"name",children:"이름순"})]})]}),c.jsx(e8,{type:"button",onClick:o,children:"필터 초기화"})]})},t8=[{id:"KR-11",name:"서울",slug:"seoul"},{id:"KR-26",name:"부산",slug:"busan"},{id:"KR-27",name:"대구",slug:"daegu"},{id:"KR-28",name:"인천",slug:"incheon"},{id:"KR-29",name:"광주",slug:"gwangju"},{id:"KR-30",name:"대전",slug:"daejeon"},{id:"KR-31",name:"울산",slug:"ulsan"},{id:"KR-41",name:"경기",slug:"gyeonggi"},{id:"KR-42",name:"강원",slug:"gangwon"},{id:"KR-43",name:"충북",slug:"chungbuk"},{id:"KR-44",name:"충남",slug:"chungnam"},{id:"KR-45",name:"전북",slug:"jeonbuk"},{id:"KR-46",name:"전남",slug:"jeonnam"},{id:"KR-47",name:"경북",slug:"gyeongbuk"},{id:"KR-48",name:"경남",slug:"gyeongnam"},{id:"KR-49",name:"제주",slug:"jeju"},{id:"KR-50",name:"세종",slug:"sejong"}],n8=[{id:"1",regionId:"KR-11",name:"한강 새벽 명상 라운지",shortDescription:"한강 물결 소리와 함께하는 60분 호흡 명상.",description:"새벽의 고요함 속에서 호흡을 따라가며 몸과 마음을 정리하는 프로그램입니다. 초보자도 참여할 수 있도록 안내자가 동행합니다.",address:"서울 영등포구 여의동로 330",thumbnailUrl:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=60",hashtags:["도심","새벽","호흡"],themes:["강변","마음챙김"],hasTempleStay:!1,duration:"1시간",organization:{name:"한강 마음연구소"},externalLink:"https://example.com/hanriver",detailSections:[{title:"프로그램",body:`1. **호흡 안내** - 15분
2. 바디 스캔
3. 마무리 저널링`},{title:"일정",body:`- **매일 05:30** 개강
- 소요 **1시간**
- 운영: 한강 마음연구소`},{title:"준비물",body:`- 따뜻한 외투
- 개인 담요
- **편한 복장** 권장`}]},{id:"2",regionId:"KR-11",name:"남산 숲길 호흡 스튜디오",shortDescription:"도심 속 숲길을 따라 걷는 90분 이동 명상.",description:"남산 둘레길에서 걷기 명상과 호흡 명상을 결합한 프로그램으로, 스트레스 해소에 집중합니다.",address:"서울 중구 남산공원길 105",thumbnailUrl:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60",hashtags:["숲","걷기","호흡"],themes:["자연","마음챙김"],hasTempleStay:!1,duration:"1시간 30분",organization:{name:"남산 리추얼"},externalLink:"https://example.com/namsan",detailSections:[{title:"프로그램",body:`- **숲길 걷기 명상** (40분)
- 호흡 리듬 정렬
- 마무리 스트레칭`},{title:"일정",body:`- **오전 09:00** / **오후 14:00**
- 소요 **1시간 30분**
- 운영: 남산 리추얼`},{title:"유의사항",body:`- **편한 운동화** 필수 착용
- 야외 진행 시 우의 준비 권장`}]},{id:"3",regionId:"KR-11",name:"북촌 고요한 다실",shortDescription:"차 명상과 함께하는 45분 정좌 명상.",description:"전통 다실에서 차를 음미하며 집중력을 높이는 명상 프로그램입니다.",address:"서울 종로구 북촌로 12길 28",thumbnailUrl:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=60",hashtags:["전통","차명상","정좌"],themes:["실내","고요"],hasTempleStay:!1,duration:"45분",organization:{name:"북촌 다도원"},externalLink:"https://example.com/bukchon",detailSections:[{title:"프로그램",body:`1. **차 준비** - 차 탕 준비 및 분배
2. 향 관찰 (5분)
3. 정좌 명상 (30분)`},{title:"일정",body:`- **주중 11:00, 15:00**
- 소요 **45분**
- 예약제 운영`},{title:"추천 대상",body:`- 조용한 **집중**이 필요한 분
- 차 문화에 관심 있는 분`}]},{id:"4",regionId:"KR-11",name:"성수 리버사이드 요가덱",shortDescription:"한강 전망의 스트레칭 명상 클래스.",description:"요가와 명상 호흡을 결합해 몸의 긴장을 풀어주는 프로그램입니다.",address:"서울 성동구 뚝섬로 273",thumbnailUrl:"https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=60",hashtags:["요가","강변","스트레칭"],themes:["도심","움직임"],hasTempleStay:!1,duration:"1시간",organization:{name:"리버 요가랩"},externalLink:"https://example.com/river",detailSections:[{title:"프로그램",body:`- **요가 플로우** (25분)
- 호흡 명상 (20분)
- 릴랙스 쿨다운`},{title:"난이도",body:"**초급** - 누구나 참여 가능"}]},{id:"5",regionId:"KR-11",name:"홍대 사운드 테라피 룸",shortDescription:"싱잉볼과 함께하는 30분 사운드 명상.",description:"사운드 테라피 도구를 활용해 마음의 파동을 안정시키는 프로그램입니다.",address:"서울 마포구 와우산로 21길 36",thumbnailUrl:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=60",hashtags:["사운드","실내","힐링"],themes:["실내","마음챙김"],hasTempleStay:!1,duration:"30분",organization:{name:"사운드클라우드 룸"},externalLink:"https://example.com/sound",detailSections:[{title:"프로그램",body:`1. **싱잉볼 세션** (15분)
2. 호흡 명상 (15분)`},{title:"추천 대상",body:`- **30분** 짧게 집중을 원하는 분
- 바쁜 일상의 쉼이 필요한 분`}]},{id:"6",regionId:"KR-11",name:"여의도 마음챙김 센터",shortDescription:"업무 후 60분 마음챙김 프로그램.",description:"직장인을 위한 저녁 명상 클래스입니다. 감정 정리와 집중 회복에 초점을 둡니다.",address:"서울 영등포구 국제금융로 10",thumbnailUrl:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60",hashtags:["도심","퇴근","집중"],themes:["실내","마음챙김"],hasTempleStay:!1,duration:"1시간",organization:{name:"마인드 오피스"},externalLink:"https://example.com/mindoffice",detailSections:[{title:"프로그램",body:`- **호흡 집중** (20분)
- 감정 라벨링 연습
- 감사 기록`},{title:"구성",body:`- 인원 **12명** 소규모
- 1:1 피드백 가능`}]},{id:"7",regionId:"KR-11",name:"삼청동 차명상 아틀리에",shortDescription:"차 향과 함께하는 저녁 명상.",description:"차 향을 따라 집중을 높이고, 짧은 명상과 대화를 포함하는 프로그램입니다.",address:"서울 종로구 삼청로 98",thumbnailUrl:"https://images.unsplash.com/photo-1470019693664-1d202d2c0907?auto=format&fit=crop&w=900&q=60",hashtags:["차명상","전통","저녁"],themes:["실내","고요"],hasTempleStay:!1,duration:"50분",organization:{name:"삼청 아틀리에"},externalLink:"https://example.com/samcheong",detailSections:[{title:"프로그램",body:`- **차 명상** (20분)
- 호흡 리듬 맞추기
- 마무리 기록`},{title:"특징",body:`- **차 전문가** 직접 진행
- 프리미엄 차 제공`}]},{id:"8",regionId:"KR-11",name:"잠실 루프탑 선셋 명상",shortDescription:"해질녘 루프탑에서 진행되는 40분 명상.",description:"도심 스카이라인을 보며 일몰 시간에 맞춰 진행되는 명상 프로그램입니다.",address:"서울 송파구 올림픽로 300",thumbnailUrl:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60",hashtags:["루프탑","선셋","도심"],themes:["도심","마음챙김"],hasTempleStay:!1,duration:"40분",organization:{name:"선셋 루프"},externalLink:"https://example.com/sunset",detailSections:[{title:"프로그램",body:`1. **일몰 호흡** - 일몰 시각 맞춤
2. 집중 명상 (25분)`},{title:"추천",body:`- **퇴근 후** 짧은 휴식
- 도심에서 자연 느끼기`}]},{id:"9",regionId:"KR-11",name:"강남 호흡 리트릿 스튜디오",shortDescription:"집중 호흡과 자세 교정 클래스.",description:"호흡 패턴 교정을 통해 긴장을 완화하는 실내 명상 프로그램입니다.",address:"서울 강남구 테헤란로 152",thumbnailUrl:"https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=60",hashtags:["호흡","실내","리트릿"],themes:["실내","집중"],hasTempleStay:!1,duration:"1시간",organization:{name:"브레스 스튜디오"},externalLink:"https://example.com/breath",detailSections:[{title:"프로그램",body:`- **호흡 패턴** 체크 (15분)
- 집중 명상 (40분)`},{title:"특징",body:`- **1:1 상담** 포함
- 호흡 교정 맞춤 프로그램`}]},{id:"10",regionId:"KR-11",name:"은평 한옥 명상마당",shortDescription:"한옥 마당에서 진행되는 70분 명상.",description:"한옥의 고즈넉한 분위기에서 몸과 마음을 천천히 풀어가는 프로그램입니다.",address:"서울 은평구 진관길 73",thumbnailUrl:"https://images.unsplash.com/photo-1470019693664-1d202d2c0907?auto=format&fit=crop&w=900&q=60",hashtags:["한옥","고요","전통"],themes:["전통","고요"],hasTempleStay:!1,duration:"70분",organization:{name:"진관 명상마당"},externalLink:"https://example.com/jingwan",detailSections:[{title:"프로그램",body:`- **호흡 정렬** (20분)
- 마음챙김 명상
- 차 한잔으로 마무리`},{title:"준비물",body:`- **따뜻한 양말** (마루 착석 시)
- 편한 한복 또는 와이드 팬츠`}]},{id:"11",regionId:"KR-11",name:"서촌 움직임 명상홀",shortDescription:"느린 움직임으로 진행되는 50분 명상.",description:"몸의 감각을 깨우는 움직임 명상 프로그램으로 초보자도 쉽게 참여할 수 있습니다.",address:"서울 종로구 자하문로 9길 24",thumbnailUrl:"https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=60",hashtags:["움직임","감각","실내"],themes:["움직임","마음챙김"],hasTempleStay:!1,duration:"50분",organization:{name:"모션 마인드"},externalLink:"https://example.com/motion",detailSections:[{title:"프로그램",body:`- **느린 움직임** 워밍업
- 호흡 동기화 움직임
- 마무리 스트레칭`},{title:"난이도",body:"**초급** - 운동 경험 없어도 OK"}]},{id:"12",regionId:"KR-11",name:"동대문 심야 명상살롱",shortDescription:"밤 10시에 시작하는 40분 집중 명상.",description:"하루를 마무리하며 마음을 정리하는 심야 명상 프로그램입니다.",address:"서울 중구 장충단로 275",thumbnailUrl:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=60",hashtags:["심야","도심","집중"],themes:["실내","집중"],hasTempleStay:!1,duration:"40분",organization:{name:"나이트 마인드"},externalLink:"https://example.com/night",detailSections:[{title:"프로그램",body:`- **심야 호흡** 명상 (25분)
- 감정 정리 및 마무리`},{title:"특징",body:`- **야간 예약제** 운영 (22:00~)
- 조용한 분위기`}]},{id:"13",regionId:"KR-26",name:"해운대 바다 명상 라운지",shortDescription:"파도 소리와 함께하는 해변 명상.",description:"해운대 해변에서 진행되는 일출 명상 프로그램입니다.",address:"부산 해운대구 해운대해변로 264",thumbnailUrl:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=60",hashtags:["해변","일출","호흡"],themes:["바다","자연"],hasTempleStay:!1,duration:"1시간",organization:{name:"부산 해변명상"},externalLink:"https://example.com/busan",detailSections:[{title:"프로그램",body:`- **일출 명상** (30분)
- 파도 소리와 호흡
- 마무리 스트레칭`},{title:"준비물",body:`- **돗자리** (모래 위 착석)
- 따뜻한 겉옷
- 선크림 권장`}]},{id:"14",regionId:"KR-27",name:"팔공산 고요 수련원",shortDescription:"산사 분위기 속 집중 명상.",description:"팔공산 자락의 숲에서 정좌와 걷기 명상을 함께 진행합니다.",address:"대구 동구 팔공산로 185길 89",thumbnailUrl:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60",hashtags:["산","걷기","고요"],themes:["산림","자연"],hasTempleStay:!0,duration:"반나절",organization:{name:"팔공산 수련원"},externalLink:"https://example.com/palgong",detailSections:[{title:"프로그램",body:`1. **정좌 명상** (40분)
2. 걷기 명상 (산책로)
3. 명상 노트 정리`},{title:"특징",body:`- **템플스테이** 옵션 제공
- 산사 식사 체험 가능`}]},{id:"15",regionId:"KR-28",name:"영종도 바람 명상센터",shortDescription:"바람과 함께하는 해안 명상.",description:"영종도 해안 산책로에서 진행되는 바람 명상 프로그램입니다.",address:"인천 중구 운서동 2850",thumbnailUrl:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=60",hashtags:["바람","해안","산책"],themes:["바다","자연"],hasTempleStay:!1,duration:"1시간",organization:{name:"영종 힐링센터"},externalLink:"https://example.com/yeongjong",detailSections:[{title:"프로그램",body:`- **해안 산책** (30분)
- 바람 명상 호흡
- 마음 정리`},{title:"준비물",body:`- **편한 운동화** 필수
- 겉옷 (해안 바람)
- 모자/선크림`}]},{id:"16",regionId:"KR-29",name:"무등산 정적 리트릿",shortDescription:"산림 속 2시간 명상 리트릿.",description:"무등산 자락에서 진행되는 호흡 명상과 걷기 명상을 포함합니다.",address:"광주 북구 무등로 1550",thumbnailUrl:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60",hashtags:["산림","리트릿","호흡"],themes:["자연","산림"],hasTempleStay:!1,duration:"2시간",organization:{name:"무등 힐링캠프"},externalLink:"https://example.com/mudeung",detailSections:[{title:"프로그램",body:`- **숲 호흡** (40분)
- 걷기 명상 (숲길)
- 휴식 타임`},{title:"추천",body:`- **자연 속** 재충전이 필요한 분
- 2시간 여유 있는 분`}]},{id:"17",regionId:"KR-30",name:"대청호 수변 명상관",shortDescription:"호숫가에서 진행되는 저녁 명상.",description:"대청호 수변길을 따라 진행되는 집중 명상 프로그램입니다.",address:"대전 동구 회남로 123",thumbnailUrl:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=60",hashtags:["호수","저녁","고요"],themes:["물","자연"],hasTempleStay:!1,duration:"1시간",organization:{name:"대청 수련관"},externalLink:"https://example.com/daecheong",detailSections:[{title:"프로그램",body:`- **호숫가 호흡** (30분)
- 마음챙김 명상
- 저녁 노을 감상`},{title:"구성",body:`- **1:1 상담** 가능
- 소규모 그룹 (8명)`}]},{id:"18",regionId:"KR-31",name:"대왕암 해송 명상길",shortDescription:"해송 숲길 걷기 명상.",description:"울산 동구 해송 숲길에서 진행되는 걷기 명상 프로그램입니다.",address:"울산 동구 등대길 95",thumbnailUrl:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60",hashtags:["해송","걷기","바다"],themes:["바다","숲"],hasTempleStay:!1,duration:"1시간 20분",organization:{name:"해송 명상길"},externalLink:"https://example.com/ulsan",detailSections:[{title:"프로그램",body:`- **걷기 명상** (40분)
- 파도 호흡
- 해송 숲 감상`},{title:"추천",body:`- **자연 소리** 명상을 원하는 분
- 해송 풍경 좋아하는 분`}]},{id:"19",regionId:"KR-41",name:"양평 강변 선명상",shortDescription:"강변 야외 명상과 차 한잔.",description:"남한강변에서 진행되는 야외 명상 프로그램입니다.",address:"경기 양평군 양평읍 강변로 51",thumbnailUrl:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=60",hashtags:["강변","자연","야외"],themes:["물","자연"],hasTempleStay:!1,duration:"1시간",organization:{name:"양평 마음쉼터"},externalLink:"https://example.com/yangpyeong",detailSections:[{title:"프로그램",body:`- **강변 명상** (40분)
- 차 한잔 명상
- 자유 시간`},{title:"준비물",body:`- **돗자리** (야외 착석)
- 편한 복장
- 개인 물통`}]},{id:"20",regionId:"KR-41",name:"가평 숲속 차명상",shortDescription:"침엽수 숲 속 차 명상 프로그램.",description:"가평 숲속에서 차향과 함께 호흡 명상을 진행합니다.",address:"경기 가평군 상면 수목원로 190",thumbnailUrl:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60",hashtags:["숲","차명상","휴식"],themes:["숲","고요"],hasTempleStay:!1,duration:"1시간",organization:{name:"가평 힐링하우스"},externalLink:"https://example.com/gapyeong",detailSections:[{title:"프로그램",body:`- **차 명상** (25분)
- 숲 호흡 산책
- 마무리 차 time`},{title:"추천",body:`- **자연 속** 휴식을 원하는 분
- 침엽수 향 좋아하는 분`}]},{id:"21",regionId:"KR-41",name:"수원 정원 명상랩",shortDescription:"정원 산책과 짧은 정좌 명상.",description:"수원 정원에서 산책과 정좌 명상을 조합한 프로그램입니다.",address:"경기 수원시 권선구 세류로 215",thumbnailUrl:"https://images.unsplash.com/photo-1470019693664-1d202d2c0907?auto=format&fit=crop&w=900&q=60",hashtags:["정원","산책","도심"],themes:["도심","자연"],hasTempleStay:!1,duration:"50분",organization:{name:"수원 가든랩"},externalLink:"https://example.com/suwon",detailSections:[{title:"프로그램",body:`- **정원 산책** (25분)
- 정좌 명상 (20분)
- 정원 감상`},{title:"특징",body:`- **가족** 참여 가능
- 아이 동반 시 사전 문의`}]},{id:"22",regionId:"KR-42",name:"속초 해변 호흡캠프",shortDescription:"동해 바람과 함께하는 아침 호흡 명상.",description:"속초 해변에서 진행되는 일출 호흡 명상 프로그램입니다.",address:"강원 속초시 해오름로 186",thumbnailUrl:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=60",hashtags:["동해","일출","호흡"],themes:["바다","자연"],hasTempleStay:!1,duration:"1시간",organization:{name:"동해 명상캠프"},externalLink:"https://example.com/sokcho",detailSections:[{title:"프로그램",body:`- **일출 명상** (35분)
- 바다 호흡
- 아침 햇살 명상`},{title:"추천",body:`- **동해 여행자**
- 일출을 함께 맞고 싶은 분`}]},{id:"23",regionId:"KR-42",name:"평창 산림 명상센터",shortDescription:"자작나무 숲에서 진행하는 고요 명상.",description:"평창 산림에서 진행되는 고요한 정좌 명상 프로그램입니다.",address:"강원 평창군 봉평면 태기로 111",thumbnailUrl:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60",hashtags:["산림","고요","힐링"],themes:["숲","고요"],hasTempleStay:!0,duration:"반나절",organization:{name:"평창 마음숲"},externalLink:"https://example.com/pyeongchang",detailSections:[{title:"프로그램",body:`- **숲 정좌** (40분)
- 걷기 명상 (자작나무 숲)
- 명상 노트`},{title:"특징",body:`- **템플스테이** 선택 가능
- 반나절/1박 프로그램`}]},{id:"24",regionId:"KR-43",name:"제천 산사 힐링센터",shortDescription:"산사에서 진행되는 집중 명상.",description:"산사 분위기에서 마음을 정리하는 반나절 프로그램입니다.",address:"충북 제천시 청풍면 산사길 32",thumbnailUrl:"https://images.unsplash.com/photo-1470019693664-1d202d2c0907?auto=format&fit=crop&w=900&q=60",hashtags:["산사","템플스테이","고요"],themes:["전통","산림"],hasTempleStay:!0,duration:"반나절",organization:{name:"제천 힐링센터"},externalLink:"https://example.com/jecheon",detailSections:[{title:"프로그램",body:`- **정좌 명상** (50분)
- 산사 산책
- 차 공양 체험`},{title:"특징",body:`- **숙박형** 옵션
- 산사 식사 포함 가능`}]},{id:"25",regionId:"KR-44",name:"부여 연꽃 명상정원",shortDescription:"연꽃 정원에서 진행하는 명상.",description:"부여 연꽃 정원에서 진행되는 고요한 명상 프로그램입니다.",address:"충남 부여군 부여읍 연꽃로 96",thumbnailUrl:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60",hashtags:["정원","연꽃","고요"],themes:["자연","고요"],hasTempleStay:!1,duration:"50분",organization:{name:"부여 명상정원"},externalLink:"https://example.com/buyeo",detailSections:[{title:"프로그램",body:`- **정원 산책** (25분)
- 연꽃 감상 정좌 명상
- 고요한 마무리`},{title:"추천",body:`- **여유로운** 휴식을 원하는 분
- 연꽃 시즌(7~8월) 추천`}]},{id:"26",regionId:"KR-45",name:"전주 한옥 마루명상",shortDescription:"한옥 마루에서 진행되는 명상.",description:"전주 한옥마을에서 진행되는 전통 명상 프로그램입니다.",address:"전북 전주시 완산구 기린대로 99",thumbnailUrl:"https://images.unsplash.com/photo-1470019693664-1d202d2c0907?auto=format&fit=crop&w=900&q=60",hashtags:["한옥","전통","고요"],themes:["전통","고요"],hasTempleStay:!1,duration:"1시간",organization:{name:"전주 한옥명상"},externalLink:"https://example.com/jeonju",detailSections:[{title:"프로그램",body:`- **차 명상** (30분)
- 정좌 명상 (한옥 마루)
- 전통 다도 체험`},{title:"특징",body:`- **전통 문화** 체험 포함
- 한옥마을 산책`}]},{id:"27",regionId:"KR-46",name:"담양 대나무 숨길",shortDescription:"대나무 숲길 걷기 명상.",description:"담양 대나무 숲에서 진행되는 걷기 명상 프로그램입니다.",address:"전남 담양군 담양읍 죽향대로 111",thumbnailUrl:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60",hashtags:["대나무","걷기","힐링"],themes:["숲","자연"],hasTempleStay:!1,duration:"1시간",organization:{name:"담양 숨길"},externalLink:"https://example.com/damyang",detailSections:[{title:"프로그램",body:`- **대나무 숲** 걷기 명상
- 숲속 호흡
- 사진 촬영 포인트`},{title:"추천",body:`- **가볍게** 걷고 싶은 분
- 대나무 풍경 좋아하는 분`}]},{id:"28",regionId:"KR-47",name:"경주 고도 명상당",shortDescription:"고도 경주의 고요함을 느끼는 명상.",description:"경주의 문화 유적 근처에서 진행되는 정좌 명상 프로그램입니다.",address:"경북 경주시 계림로 94",thumbnailUrl:"https://images.unsplash.com/photo-1470019693664-1d202d2c0907?auto=format&fit=crop&w=900&q=60",hashtags:["문화","고요","전통"],themes:["전통","고요"],hasTempleStay:!1,duration:"1시간",organization:{name:"경주 명상당"},externalLink:"https://example.com/gyeongju",detailSections:[{title:"프로그램",body:`- **정좌 명상** (30분)
- 고도 경주 산책
- 역사와 명상`},{title:"특징",body:`- **문화 탐방** 포함
- 경주 월정교 등 인근`}]},{id:"29",regionId:"KR-48",name:"거제 바람과 바다 명상터",shortDescription:"남해 바람을 느끼는 해안 명상.",description:"거제 해안에서 진행되는 야외 호흡 명상 프로그램입니다.",address:"경남 거제시 일운면 해안로 220",thumbnailUrl:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=60",hashtags:["남해","바다","호흡"],themes:["바다","자연"],hasTempleStay:!1,duration:"1시간",organization:{name:"거제 바다명상"},externalLink:"https://example.com/geoje",detailSections:[{title:"프로그램",body:`- **바다 호흡** (40분)
- 마음챙김 명상
- 남해 바람 감상`},{title:"추천",body:`- **해안 여행자**
- 거제도 일정에 맞추기 좋은`}]},{id:"30",regionId:"KR-49",name:"제주 오름 선명상",shortDescription:"오름 위에서 진행되는 일출 명상.",description:"제주 오름에서 맞이하는 일출과 함께 호흡 명상을 진행합니다.",address:"제주 제주시 구좌읍 오름길 33",thumbnailUrl:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60",hashtags:["오름","일출","자연"],themes:["산","자연"],hasTempleStay:!1,duration:"1시간 30분",organization:{name:"제주 오름센터"},externalLink:"https://example.com/jejuoreum",detailSections:[{title:"프로그램",body:`- **오름 등반** (산책 수준)
- 일출 명상 (정상)
- 제주 새벽 풍경`},{title:"준비물",body:`- **운동화** (등산화 X)
- 물
- 겉옷 (새벽 쌀쌀함)`}]},{id:"31",regionId:"KR-49",name:"서귀포 해안 치유스테이",shortDescription:"해안 산책과 쉼 명상.",description:"서귀포 해안길에서 진행되는 치유 명상 프로그램입니다.",address:"제주 서귀포시 해안로 120",thumbnailUrl:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=60",hashtags:["해안","치유","휴식"],themes:["바다","자연"],hasTempleStay:!1,duration:"2시간",organization:{name:"서귀포 치유스테이"},externalLink:"https://example.com/seogwipo",detailSections:[{title:"프로그램",body:`- **해안 산책** (60분)
- 호흡 명상
- 서귀포 해안 풍경`},{title:"특징",body:`- **소규모** 운영 (6명)
- 맞춤형 진행`}]},{id:"32",regionId:"KR-50",name:"세종 호수공원 명상데크",shortDescription:"호수 전망의 야외 명상.",description:"세종 호수공원에서 진행되는 야외 명상 프로그램입니다.",address:"세종 호수공원길 45",thumbnailUrl:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=60",hashtags:["호수","야외","고요"],themes:["물","자연"],hasTempleStay:!1,duration:"50분",organization:{name:"세종 마음쉼터"},externalLink:"https://example.com/sejong",detailSections:[{title:"프로그램",body:`- **호수 명상** (30분)
- 호흡 안내
- 호수공원 전망`},{title:"추천",body:`- **야외 명상**을 원하는 분
- 세종 지역 거주자`}]}],r8=[{id:"KR-11",minLat:37.41,maxLat:37.7,minLng:126.75,maxLng:127.2},{id:"KR-50",minLat:36.4,maxLat:36.62,minLng:127.18,maxLng:127.32},{id:"KR-30",minLat:36.2,maxLat:36.55,minLng:127.2,maxLng:127.55},{id:"KR-27",minLat:35.7,maxLat:36.04,minLng:128.2,maxLng:128.78},{id:"KR-26",minLat:34.88,maxLat:35.32,minLng:128.8,maxLng:129.3},{id:"KR-31",minLat:35.38,maxLat:35.78,minLng:128.9,maxLng:129.5},{id:"KR-29",minLat:35,maxLat:35.3,minLng:126.5,maxLng:127},{id:"KR-28",minLat:37.2,maxLat:37.7,minLng:126.2,maxLng:126.9},{id:"KR-49",minLat:33,maxLat:33.6,minLng:126,maxLng:127},{id:"KR-41",minLat:36.9,maxLat:38,minLng:126.5,maxLng:127.5},{id:"KR-42",minLat:37,maxLat:38.5,minLng:127,maxLng:131},{id:"KR-43",minLat:36,maxLat:37.1,minLng:127,maxLng:128.4},{id:"KR-44",minLat:35.7,maxLat:36.6,minLng:125.5,maxLng:127.1},{id:"KR-45",minLat:35,maxLat:36,minLng:126.4,maxLng:128},{id:"KR-46",minLat:33,maxLat:35.2,minLng:125,maxLng:128},{id:"KR-47",minLat:35.5,maxLat:38,minLng:127,maxLng:130},{id:"KR-48",minLat:34.4,maxLat:35.5,minLng:127.4,maxLng:130}],i8=(e,t)=>{if(!Number.isFinite(e)||!Number.isFinite(t)||e<32.5||e>38.8||t<123||t>132)return null;for(const n of r8)if(e>=n.minLat&&e<=n.maxLat&&t>=n.minLng&&t<=n.maxLng)return n.id;return null},Zp=t8,Vr=n8,Yp=()=>Zp,o8={id:"all",name:"전체",slug:"all"},er=e=>e==="all"?o8:Zp.find(t=>t.id===e),l8=()=>Vr,Qp=e=>e==="all"?[...Vr]:Vr.filter(t=>t.regionId===e),s8=(e=8)=>Vr.slice(0,e),qp=e=>Vr.find(t=>t.id===e),Gp=()=>{const e=new Set;return Vr.forEach(t=>{t.hashtags.forEach(n=>e.add(n))}),Array.from(e).filter(t=>t!=="템플스테이").sort()},a8=e=>e.hasTempleStay?"템플스테이":e.hashtags.includes("요가")||e.name.includes("요가")?"요가센터":"명상센터",Xp=(e,t)=>e.filter(n=>{if(t.category&&t.category!=="all"&&a8(n)!==t.category||t.tags.length>0&&!t.tags.some(i=>[...n.hashtags,...n.themes].includes(i)))return!1;if(t.keyword.trim().length>0){const r=t.keyword.trim().toLowerCase().split(/\s+/).filter(l=>l.length>0),i=`${n.name} ${n.shortDescription} ${n.address}`.toLowerCase();if(!r.every(l=>i.includes(l)))return!1}return!0}),Jp=(e,t)=>t==="name"?[...e].sort((n,r)=>n.name.localeCompare(r.name,"ko")):e,u8={},V2=e=>{let t;const n=new Set,r=(d,p)=>{const h=typeof d=="function"?d(t):d;if(!Object.is(h,t)){const f=t;t=p??(typeof h!="object"||h===null)?h:Object.assign({},t,h),n.forEach(v=>v(t,f))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>u,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(u8?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,i,a);return a},c8=e=>e?V2(e):V2;var ef={exports:{}},tf={},nf={exports:{}},rf={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wr=$;function d8(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var p8=typeof Object.is=="function"?Object.is:d8,f8=Wr.useState,h8=Wr.useEffect,L8=Wr.useLayoutEffect,m8=Wr.useDebugValue;function g8(e,t){var n=t(),r=f8({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return L8(function(){i.value=n,i.getSnapshot=t,Xs(i)&&o({inst:i})},[e,n,t]),h8(function(){return Xs(i)&&o({inst:i}),e(function(){Xs(i)&&o({inst:i})})},[e]),m8(n),n}function Xs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!p8(e,n)}catch{return!0}}function x8(e,t){return t()}var y8=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?x8:g8;rf.useSyncExternalStore=Wr.useSyncExternalStore!==void 0?Wr.useSyncExternalStore:y8;nf.exports=rf;var v8=nf.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fs=$,w8=v8;function k8(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var S8=typeof Object.is=="function"?Object.is:k8,C8=w8.useSyncExternalStore,b8=fs.useRef,E8=fs.useEffect,j8=fs.useMemo,$8=fs.useDebugValue;tf.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=b8(null);if(o.current===null){var l={hasValue:!1,value:null};o.current=l}else l=o.current;o=j8(function(){function a(f){if(!u){if(u=!0,d=f,f=r(f),i!==void 0&&l.hasValue){var v=l.value;if(i(v,f))return p=v}return p=f}if(v=p,S8(d,f))return v;var x=r(f);return i!==void 0&&i(v,x)?(d=f,v):(d=f,p=x)}var u=!1,d,p,h=n===void 0?null:n;return[function(){return a(t())},h===null?void 0:function(){return a(h())}]},[t,n,r,i]);var s=C8(e,o[0],o[1]);return E8(function(){l.hasValue=!0,l.value=s},[s]),$8(s),s};ef.exports=tf;var P8=ef.exports;const I8=Ul(P8),of={},{useDebugValue:R8}=ke,{useSyncExternalStoreWithSelector:T8}=I8;let W2=!1;const z8=e=>e;function _8(e,t=z8,n){(of?"production":void 0)!=="production"&&n&&!W2&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),W2=!0);const r=T8(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return R8(r),r}const K2=e=>{(of?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?c8(e):e,n=(r,i)=>_8(t,r,i);return Object.assign(n,t),n},lf=e=>e?K2(e):K2,sf="meditation-favorites",M8=()=>{if(typeof window>"u")return[];try{const e=localStorage.getItem(sf);if(!e)return[];const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}},N8=e=>{if(!(typeof window>"u"))try{localStorage.setItem(sf,JSON.stringify(e))}catch{}},af=lf((e,t)=>({favorites:M8(),toggleFavorite:n=>{e(r=>{const o=r.favorites.includes(n)?r.favorites.filter(l=>l!==n):[...r.favorites,n];return N8(o),{favorites:o}})},isFavorite:n=>t().favorites.includes(n)})),A8=w.button`
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
`,O8=w.span`
  position: relative;
  display: inline-flex;
  width: 19px;
  height: 19px;
`,D8=w.svg`
  position: absolute;
  inset: 0;
  width: 19px;
  height: 19px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  overflow: visible;
`,F8=w.svg`
  position: absolute;
  inset: 0;
  width: 19px;
  height: 19px;
  fill: currentColor;
  stroke: none;
  pointer-events: none;
  opacity: ${({$active:e})=>e?1:0};
  transition: opacity 0.35s ease;
`,Z2="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",F1=({placeId:e})=>{const{isFavorite:t,toggleFavorite:n}=af(),r=t(e),i=o=>{o.preventDefault(),o.stopPropagation(),n(e)};return c.jsx(A8,{type:"button",$active:r,onClick:i,"aria-label":r?"찜 해제":"찜하기",children:c.jsxs(O8,{children:[c.jsx(D8,{viewBox:"0 0 24 24",children:c.jsx("path",{d:Z2})}),c.jsx(F8,{viewBox:"0 0 24 24",$active:r,children:c.jsx("path",{d:Z2})})]})})},B8=w.div`
  flex-shrink: 0;
  width: 200px;
  position: relative;
`,U8=w(qr)`
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
`,H8=w.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  z-index: 2;
`,V8=w.div`
  width: 100%;
  height: 120px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,W8=w.div`
  padding: 12px;
`,K8=w.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 6px;
  color: ${({theme:e})=>e.colors.text900};
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Z8=w.span`
  font-size: 0.85rem;
  color: ${({theme:e})=>e.colors.text700};
`,Y8=w.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 6px;
`,Q8=w.span`
  display: inline-block;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.primary600};
  background: ${({theme:e})=>e.colors.primary50};
  padding: 2px 8px;
  border-radius: ${({theme:e})=>e.radii.pill};
`,q8=({place:e})=>{const t=er(e.regionId);return c.jsxs(B8,{children:[c.jsx(H8,{children:c.jsx(F1,{placeId:e.id})}),c.jsxs(U8,{to:`/meditation/place/${e.id}`,children:[c.jsx(V8,{children:c.jsx("img",{src:e.thumbnailUrl,alt:`${e.name} 썸네일`})}),c.jsxs(W8,{children:[c.jsx(K8,{children:e.name}),c.jsx(Z8,{children:(t==null?void 0:t.name)??e.regionId}),e.hashtags&&e.hashtags.length>0&&c.jsx(Y8,{children:e.hashtags.slice(0,2).map(n=>c.jsx(Q8,{children:n},n))})]})]})]})},G8=w.article`
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
`,X8=w(qr)`
  display: block;
  text-decoration: none;
  color: inherit;

  @media (min-width: 961px) {
    display: flex;
  }
`,J8=w.div`
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
`,e9=w.div`
  padding: 16px 18px;

  @media (min-width: 961px) {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
  }
`,t9=w.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 10px;
  color: ${({theme:e})=>e.colors.text900};
`,n9=w.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 12px;
  margin-bottom: 10px;
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.text700};
`,r9=w.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,i9=w.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
  font-size: 0.85rem;

  span {
    border: 1px solid ${({theme:e})=>e.colors.primary200};
    background: ${({theme:e})=>e.colors.primary50};
    color: ${({theme:e})=>e.colors.primary700};
    padding: 4px 10px;
    border-radius: ${({theme:e})=>e.radii.pill};
  }
`,o9=w.div`
  position: relative;
`,l9=w.div`
  position: absolute;
  bottom: 100%;
  right: 0;
  margin-bottom: 6px;
`,s9=w.button`
  width: 100%;
  padding: 12px 20px;
  background: ${({theme:e})=>e.colors.primary600};
  color: #fff;
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.colors.primary700};
  }
`,B1=({place:e})=>{const t=zn(),n=er(e.regionId),r=i=>{i.preventDefault(),i.stopPropagation(),t(`/meditation/place/${e.id}`)};return c.jsx(G8,{children:c.jsxs(X8,{to:`/meditation/place/${e.id}`,children:[c.jsx(J8,{children:c.jsx("img",{src:e.thumbnailUrl,alt:`${e.name} 썸네일`})}),c.jsxs(e9,{children:[c.jsx(t9,{children:e.name}),c.jsx(n9,{children:c.jsxs(r9,{children:[c.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),c.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),(n==null?void 0:n.name)??e.regionId]})}),c.jsx(i9,{children:e.hashtags.slice(0,4).map(i=>c.jsx("span",{children:i},i))}),c.jsxs(o9,{children:[c.jsx(l9,{children:c.jsx(F1,{placeId:e.id})}),c.jsx(s9,{type:"button",onClick:r,children:"예약하기"})]})]})]})})},a9=`<svg width="386" height="630" viewBox="0 0 386 630" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`,u9=w.div`
  cursor: pointer;
  overflow: hidden;
  ${({$maxMapHeight:e})=>e?qe`
          max-height: ${e};
        `:void 0}

  svg {
    width: 100%;
    height: auto;
    max-width: 100%;
    display: block;
    margin: 0 auto;
    pointer-events: none;
    ${({$maxMapHeight:e})=>e?qe`
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
`,U1=({activeRegionId:e,onSelectRegion:t,maxMapHeight:n})=>{const r=$.useRef(null),i=$.useRef(null);$.useEffect(()=>{const l=r.current;if(!l)return;const s=()=>Array.from(l.querySelectorAll("svg path.land")).filter(x=>x.getAttribute("id")),a=x=>{const j=(x==null?void 0:x.getAttribute("id"))??null;j!==i.current&&(i.current=j,s().forEach(L=>{L.getAttribute("id")===j?L.classList.add("is-hovered"):L.classList.remove("is-hovered")}))},u=(x,j)=>{var b;const L=document.elementFromPoint(x,j);if((b=L==null?void 0:L.matches)!=null&&b.call(L,"path.land"))return L;const g=l.querySelector("svg");if(!g)return null;const m=g.getScreenCTM();if(!m)return null;const k=g.createSVGPoint();k.x=x,k.y=j;const E=k.matrixTransform(m.inverse()),S=s();for(let P=S.length-1;P>=0;P--)if(S[P].isPointInFill(E))return S[P];return null},d=x=>{const j=u(x.clientX,x.clientY);a(j)},p=()=>{a(null)},h=x=>{const j=u(x.clientX,x.clientY);if(j){const L=j.getAttribute("id");L&&t(L,x)}};let f=!1;const v=()=>{if(f)return;if(s().length===0){requestAnimationFrame(v);return}l.addEventListener("pointermove",d),l.addEventListener("pointerleave",p),l.addEventListener("click",h)};return v(),()=>{f=!0,l.removeEventListener("pointermove",d),l.removeEventListener("pointerleave",p),l.removeEventListener("click",h)}},[t]);const o=e==="KR-47"?"KR-48":e;return $.useEffect(()=>{const l=r.current;if(!l)return;l.querySelectorAll("svg path.land").forEach(a=>{a.getAttribute("id")===o?a.classList.add("is-active"):a.classList.remove("is-active")})},[o]),c.jsx(u9,{ref:r,$maxMapHeight:n,role:"img","aria-label":"대한민국 행정구역 지도",dangerouslySetInnerHTML:{__html:a9}})},Y2={tags:[],keyword:"",sortBy:"recommend",category:"all"},H1=lf(e=>({selectedRegionId:void 0,filters:Y2,page:1,pageSize:10,isFilterOpen:!1,setRegion:t=>e({selectedRegionId:t,page:1}),setPage:t=>e({page:t}),setPageSize:t=>e({pageSize:t,page:1}),setKeyword:t=>e(n=>({filters:{...n.filters,keyword:t},page:1})),toggleTag:t=>e(n=>{const i=n.filters.tags.includes(t)?n.filters.tags.filter(o=>o!==t):[...n.filters.tags,t];return{filters:{...n.filters,tags:i},page:1}}),clearTags:()=>e(t=>({filters:{...t.filters,tags:[]},page:1})),setSortBy:t=>e(n=>({filters:{...n.filters,sortBy:t},page:1})),setCategory:t=>e(n=>({filters:{...n.filters,category:t},page:1})),resetFilters:()=>e({filters:Y2,page:1}),setFilterOpen:t=>e({isFilterOpen:t})})),uf=mt`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`,c9=w.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 12px 24px;
  color: ${({theme:e})=>e.colors.text900};
  background: ${({theme:e})=>e.colors.warmCream};

  @media (max-width: 960px) {
    padding: 14px 10px 24px;
  }
`,d9=w.form`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 auto 20px;
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.primary200};
  padding: 12px 44px 12px 16px;
  border-radius: ${({theme:e})=>e.radii.pill};
  width: 75%;
  max-width: 420px;
  box-shadow: 0 2px 8px rgba(75, 0, 130, 0.06);
  transition: width 0.35s ease, max-width 0.35s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:focus-within {
    width: 100%;
    max-width: 100%;
    border-color: ${({theme:e})=>e.colors.primary400};
    box-shadow: 0 4px 16px rgba(75, 0, 130, 0.12);
  }
`,p9=w.span`
  color: ${({theme:e})=>e.colors.primary600};
  display: grid;
  place-items: center;

  svg {
    width: 18px;
    height: 18px;
  }
`,f9=w.input`
  flex: 1;
  min-width: 0;
  border: none;
  background: transparent;
  font-size: 1.1rem;
  outline: none;
  color: ${({theme:e})=>e.colors.text900};

  &::placeholder {
    color: ${({theme:e})=>e.colors.text700};
    opacity: 0.8;
  }
`,h9=w.button`
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
`,L9=w.div`
  animation: ${uf} 0.35s ease both;
`,m9=w.div`
  display: block;

  @media (min-width: 961px) {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 28px;
    align-items: start;
  }
`,g9=w.section`
  padding: 12px;
  border-radius: ${({theme:e})=>e.radii.lg};
  margin-bottom: 20px;

  @media (min-width: 961px) {
    max-width: 500px;
    width: 100%;
  }
`,x9=w.section`
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
`,y9=w.section`
  margin-top: 28px;
  background: ${({theme:e})=>e.colors.warmCream};
`,v9=w.h2`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
  margin: 0 0 16px;
`,w9=w.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 12px;
  -webkit-overflow-scrolling: touch;
`,k9=w.div`
  @media (min-width: 961px) {
    position: sticky;
    top: 92px;
  }
`,S9=w.button`
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
`,C9=w.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-areas:
    "filter content";
  gap: 28px;
  animation: ${uf} 0.35s ease both;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-areas: "content";
  }
`,b9=w.aside`
  grid-area: filter;

  @media (max-width: 960px) {
    display: none;
  }
`,E9=w.div`
  grid-area: content;
`,j9=w.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,$9=w.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,P9=w.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text700};
`,I9=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,R9=w.p`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.text700};
  margin: 0;
`,T9=w.button`
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
`,z9=w.div`
  position: fixed;
  inset: 0;
  z-index: 70;
`,_9=mt`from { opacity: 0; } to { opacity: 1; }`,M9=mt`from { transform: translateX(100%); } to { transform: translateX(0); }`,N9=w.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  animation: ${_9} 0.2s ease;
`,A9=w.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: min(90vw, 360px);
  background: ${({theme:e})=>e.colors.white};
  padding: 20px;
  overflow-y: auto;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);
  animation: ${M9} 0.25s ease;
`,O9=w.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,D9=w.button`
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
`,F9=w.div`
  height: 1px;
`,Q2=()=>{const e=zn(),{selectedRegionId:t,filters:n,page:r,pageSize:i,setPage:o,setRegion:l,setKeyword:s,toggleTag:a,setSortBy:u,setCategory:d,resetFilters:p,isFilterOpen:h,setFilterOpen:f}=H1(),v=$.useRef(null),[x,j]=$.useState(""),L=Yp(),g=[{id:"all",name:"전체"},...L],m=s8(8),k=$.useMemo(()=>Gp(),[]),E=$.useMemo(()=>l8(),[]),S=$.useMemo(()=>Xp(E,n),[E,n]),b=$.useMemo(()=>Jp(S,n.sortBy),[S,n.sortBy]),P=$.useMemo(()=>b.slice(0,r*i),[b,r,i]),A=P.length<b.length,R=n.keyword.trim().length>0;$.useEffect(()=>{l("all")},[l]),$.useEffect(()=>{const O=["템플스테이","숲 명상","바다 명상","한옥 명상","호흡 수련","걷기 명상"];let V=0,U=0,K=!1,q;const T=F=>{q=window.setTimeout(()=>{const y=O[V%O.length];if(K?U-=1:U+=1,j(y.slice(0,Math.max(U,0))),!K&&U>=y.length){K=!0,T(700);return}if(K&&U<=0){K=!1,V+=1,T(300);return}T(K?120:240)},F)};return T(240),()=>window.clearTimeout(q)},[]),$.useEffect(()=>{o(1)},[n.keyword,n.sortBy,n.tags,n.category,o]),$.useEffect(()=>{const O=v.current;if(!O||!A||!R)return;const V=new IntersectionObserver(U=>{var K;(K=U[0])!=null&&K.isIntersecting&&o(r+1)},{rootMargin:"200px"});return V.observe(O),()=>V.disconnect()},[A,r,o,R]);const _=O=>{l(O),e("/meditation/map")},N=O=>{O.preventDefault()};return c.jsxs(c9,{children:[c.jsxs(d9,{onSubmit:N,children:[c.jsx(p9,{children:c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("circle",{cx:"11",cy:"11",r:"7"}),c.jsx("line",{x1:"16.65",y1:"16.65",x2:"21",y2:"21"})]})}),c.jsx(f9,{type:"text",placeholder:x||"명상센터 검색",value:n.keyword,onChange:O=>s(O.target.value)}),n.keyword&&c.jsx(h9,{type:"button",onClick:()=>s(""),"aria-label":"검색어 삭제",children:c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"18",height:"18",children:c.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),R?c.jsxs(C9,{children:[c.jsx(b9,{children:c.jsx(Dl,{filters:n,availableTags:k,onChangeCategory:d,onToggleTag:a,onChangeSortBy:u,onReset:p})}),c.jsx(E9,{children:c.jsxs(j9,{children:[c.jsxs(I9,{children:[c.jsxs(R9,{children:["총 ",b.length,"곳의 명상센터"]}),c.jsx(T9,{type:"button",onClick:()=>f(!0),"aria-label":"필터",children:c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})})})]}),c.jsxs($9,{children:[P.length===0&&c.jsx(P9,{children:"조건에 맞는 명상센터가 없어요."}),P.map(O=>c.jsx(B1,{place:O},O.id))]}),A&&c.jsx(F9,{ref:v})]})})]}):c.jsx(L9,{children:c.jsxs(m9,{children:[c.jsx(g9,{children:c.jsx(U1,{activeRegionId:t,onSelectRegion:_})}),c.jsxs(k9,{children:[c.jsx(x9,{children:g.map(O=>c.jsx(S9,{type:"button",$active:t===O.id,onClick:()=>_(O.id),children:O.name},O.id))}),c.jsxs(y9,{children:[c.jsx(v9,{children:"인기 명상지"}),c.jsx(w9,{children:m.map(O=>c.jsx(q8,{place:O},O.id))})]})]})]})}),R&&h&&c.jsxs(z9,{children:[c.jsx(N9,{onClick:()=>f(!1)}),c.jsxs(A9,{children:[c.jsxs(O9,{children:[c.jsx("h3",{style:{margin:0,fontSize:"1.2rem"},children:"필터"}),c.jsx(D9,{type:"button",onClick:()=>f(!1),children:c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),c.jsx(Dl,{filters:n,availableTags:k,onChangeCategory:d,onToggleTag:a,onChangeSortBy:u,onReset:p})]})]})]})},B9=w.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 16px 24px;
  color: ${({theme:e})=>e.colors.text900};
`,U9=w.header`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`,H9=w.button`
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
`,V9=w.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: ${({theme:e})=>e.colors.text900};
`,W9=w.section`
  position: relative;
  padding: 12px;
  border-radius: ${({theme:e})=>e.radii.lg};
  margin-bottom: 20px;
  min-height: 280px;
  overflow: visible;

  svg {
    max-height: 360px;
  }
`,K9=w.div`
  position: absolute;
  inset: 0;
  z-index: 5;
  cursor: pointer;
  border-radius: ${({theme:e})=>e.radii.lg};
`,Z9=mt`
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,Y9=w.div`
  position: absolute;
  left: ${({$x:e})=>e}px;
  top: ${({$y:e})=>e}px;
  transform: translate(-50%, -100%);
  z-index: 10;
  filter: drop-shadow(0 6px 20px rgba(75, 0, 130, 0.12));
  animation: ${Z9} 0.2s ease;
`,Q9=w.div`
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
`,q9=w.button`
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
`,G9=w.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.primary700};
  margin: 0 0 4px;
  padding-right: 28px;
`,X9=w.p`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.text700};
  margin: 0 0 12px;
`,J9=w.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;

  img {
    width: 48px;
    height: 48px;
    object-fit: cover;
    border-radius: 8px;
  }
`,eL=w.button`
  width: 100%;
  padding: 10px 16px;
  background: ${({theme:e})=>e.colors.primary600};
  color: #fff;
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.colors.primary700};
  }
`,tL=w.section`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`,nL=w.button`
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
`,rL=()=>{const e=zn(),t=$.useRef(null),n=[{id:"all",name:"전체"},...Yp().map(L=>({id:L.id,name:L.name}))],r=$.useRef(null),i=$.useRef(null),{selectedRegionId:o,setRegion:l}=H1(),[s,a]=$.useState(null),[u,d]=$.useState({x:0,y:0});$.useEffect(()=>{const L=g=>{var b,P,A;if(!s)return;const m=g.target,k=(b=r.current)==null?void 0:b.contains(m),E=(P=t.current)==null?void 0:P.contains(m),S=(A=i.current)==null?void 0:A.contains(m);!k&&!E&&!S&&a(null)};return document.addEventListener("click",L),()=>document.removeEventListener("click",L)},[s]);const p=$.useCallback(L=>{const g=t.current;if(!g)return null;if(L==="all"){const O=g.getBoundingClientRect();return{x:O.width/2,y:O.height/2-40}}const m=g.querySelector(`path.land[id="${L}"]`);if(!m)return null;const k=m.closest("svg");if(!k)return null;const E=m.getBBox();let S=E.x+E.width/2,b=E.y+E.height/2;L==="KR-42"&&(b=E.y+E.height*.65);const P=k.createSVGPoint();P.x=S,P.y=b;const A=k.getScreenCTM();if(!A)return null;const R=P.matrixTransform(A),_=g.getBoundingClientRect(),N=L==="KR-42"?5:L==="KR-11"?0:L==="KR-41"?-15:15;return{x:R.x-_.left,y:R.y-_.top-N}},[]);$.useEffect(()=>{const L=o??"all";a(L);const g=t.current;g?requestAnimationFrame(()=>{const m=p(L);d(m??{x:g.getBoundingClientRect().width/2,y:g.getBoundingClientRect().height/2-40})}):d({x:200,y:120})},[o,p]);const h=L=>{a(L),requestAnimationFrame(()=>{const g=p(L);d(g??{x:200,y:120})})},f=()=>{s&&(l(s),e(`/meditation/region/${s}`))},v=s?er(s):null,x=s?Qp(s):[],j=x.slice(0,3).map(L=>L.thumbnailUrl);return c.jsxs(B9,{children:[c.jsxs(U9,{children:[c.jsx(H9,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),c.jsx(V9,{children:"지역 선택"})]}),c.jsxs(W9,{ref:t,children:[c.jsx(U1,{activeRegionId:s??void 0,onSelectRegion:h}),v&&c.jsxs(c.Fragment,{children:[c.jsx(K9,{onClick:()=>a(null),"aria-label":"모달 닫기"}),c.jsx(Y9,{ref:r,$x:u.x,$y:u.y,children:c.jsxs(Q9,{children:[c.jsx(q9,{type:"button",onClick:()=>a(null),"aria-label":"닫기",children:c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"18",height:"18",children:c.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})}),c.jsx(G9,{children:v.name}),c.jsxs(X9,{children:[x.length,"곳 명상센터"]}),j.length>0&&c.jsx(J9,{children:j.map((L,g)=>c.jsx("img",{src:L,alt:""},g))}),c.jsx(eL,{type:"button",onClick:f,children:"선택하기"})]})})]})]}),c.jsx(tL,{ref:i,children:n.map(L=>c.jsx(nL,{type:"button",$active:s===L.id,onClick:()=>{a(L.id),requestAnimationFrame(()=>{const g=p(L.id);d(g??{x:200,y:120})})},children:L.name},L.id))})]})},q2=w.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 20px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};

  @media (max-width: 960px) {
    padding: 20px 14px calc(48px + env(safe-area-inset-bottom, 0px));
  }
`,iL=w.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
`,oL=w.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,lL=w.button`
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
`,sL=w.button`
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
`,aL=w.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-areas: "filter content";
  gap: 28px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-areas: "content";
  }
`,uL=w.main`
  grid-area: content;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,cL=w.aside`
  grid-area: filter;

  @media (max-width: 960px) {
    display: none;
  }
`,dL=w.button`
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
`,pL=w.div`
  position: fixed;
  inset: 0;
  z-index: 70;
`,fL=mt`from { opacity: 0; } to { opacity: 1; }`,hL=mt`from { transform: translateX(100%); } to { transform: translateX(0); }`,LL=w.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  animation: ${fL} 0.2s ease;
`,mL=w.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: min(90vw, 360px);
  background: ${({theme:e})=>e.colors.white};
  padding: 20px;
  overflow-y: auto;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);
  animation: ${hL} 0.25s ease;
`,gL=w.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,xL=w.button`
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
`,yL=w.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,G2=w.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text700};
`,vL=w.div`
  height: 1px;
`,wL=()=>{const e=zn(),{regionId:t}=Up(),{filters:n,page:r,pageSize:i,setPage:o,setRegion:l,toggleTag:s,setSortBy:a,setCategory:u,resetFilters:d,isFilterOpen:p,setFilterOpen:h}=H1(),f=$.useRef(null);$.useEffect(()=>{t&&(l(t),o(1))},[t,l,o]);const v=t?er(t):void 0,x=$.useMemo(()=>Gp(),[]),j=$.useMemo(()=>t?Qp(t):[],[t]),L=$.useMemo(()=>Xp(j,n),[j,n]),g=$.useMemo(()=>Jp(L,n.sortBy),[L,n.sortBy]),m=$.useMemo(()=>g.slice(0,r*i),[g,r,i]),k=m.length<g.length;return $.useEffect(()=>{o(1)},[n.keyword,n.sortBy,n.tags,n.category,o]),$.useEffect(()=>{const E=f.current;if(!E||!k)return;const S=new IntersectionObserver(b=>{var P;(P=b[0])!=null&&P.isIntersecting&&o(r+1)},{rootMargin:"200px"});return S.observe(E),()=>S.disconnect()},[k,r,o]),!t||!v?c.jsxs(q2,{children:[c.jsx(G2,{children:"해당 지역 정보를 찾지 못했어요."}),c.jsx(sL,{type:"button",onClick:()=>e("/meditation"),children:"메인으로 돌아가기"})]}):c.jsxs(q2,{children:[c.jsxs(iL,{children:[c.jsxs(oL,{children:[c.jsx(lL,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),c.jsx("h2",{style:{margin:0,fontSize:"1.25rem",fontWeight:600},children:"명상지 리스트"})]}),c.jsx(dL,{type:"button",onClick:()=>h(!0),"aria-label":"필터",children:c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})})})]}),c.jsxs(aL,{children:[c.jsx(cL,{children:c.jsx(Dl,{filters:n,availableTags:x,onChangeCategory:u,onToggleTag:s,onChangeSortBy:a,onReset:d})}),c.jsxs(uL,{children:[c.jsxs(yL,{children:[m.length===0&&c.jsx(G2,{children:"조건에 맞는 명상센터가 없어요."}),m.map(E=>c.jsx(B1,{place:E},E.id))]}),k&&c.jsx(vL,{ref:f})]})]}),p&&c.jsxs(pL,{children:[c.jsx(LL,{onClick:()=>h(!1)}),c.jsxs(mL,{children:[c.jsxs(gL,{children:[c.jsx("h3",{style:{margin:0,fontSize:"1.2rem"},children:"필터"}),c.jsx(xL,{type:"button",onClick:()=>h(!1),children:c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),c.jsx(Dl,{filters:n,availableTags:x,onChangeCategory:u,onToggleTag:s,onChangeSortBy:a,onReset:d})]})]})]})};function kL(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const SL=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,CL=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,bL={};function X2(e,t){return(bL.jsx?CL:SL).test(e)}const EL=/[ \t\n\f\r]/g;function jL(e){return typeof e=="object"?e.type==="text"?J2(e.value):!1:J2(e)}function J2(e){return e.replace(EL,"")===""}class lo{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}lo.prototype.normal={};lo.prototype.property={};lo.prototype.space=void 0;function cf(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new lo(n,r,t)}function Eu(e){return e.toLowerCase()}class rt{constructor(t,n){this.attribute=n,this.property=t}}rt.prototype.attribute="";rt.prototype.booleanish=!1;rt.prototype.boolean=!1;rt.prototype.commaOrSpaceSeparated=!1;rt.prototype.commaSeparated=!1;rt.prototype.defined=!1;rt.prototype.mustUseProperty=!1;rt.prototype.number=!1;rt.prototype.overloadedBoolean=!1;rt.prototype.property="";rt.prototype.spaceSeparated=!1;rt.prototype.space=void 0;let $L=0;const G=ir(),Se=ir(),ju=ir(),M=ir(),ue=ir(),Ir=ir(),st=ir();function ir(){return 2**++$L}const $u=Object.freeze(Object.defineProperty({__proto__:null,boolean:G,booleanish:Se,commaOrSpaceSeparated:st,commaSeparated:Ir,number:M,overloadedBoolean:ju,spaceSeparated:ue},Symbol.toStringTag,{value:"Module"})),Js=Object.keys($u);class V1 extends rt{constructor(t,n,r,i){let o=-1;if(super(t,n),ed(this,"space",i),typeof r=="number")for(;++o<Js.length;){const l=Js[o];ed(this,Js[o],(r&$u[l])===$u[l])}}}V1.prototype.defined=!0;function ed(e,t,n){n&&(e[t]=n)}function Gr(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const o=new V1(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[Eu(r)]=r,n[Eu(o.attribute)]=r}return new lo(t,n,e.space)}const df=Gr({properties:{ariaActiveDescendant:null,ariaAtomic:Se,ariaAutoComplete:null,ariaBusy:Se,ariaChecked:Se,ariaColCount:M,ariaColIndex:M,ariaColSpan:M,ariaControls:ue,ariaCurrent:null,ariaDescribedBy:ue,ariaDetails:null,ariaDisabled:Se,ariaDropEffect:ue,ariaErrorMessage:null,ariaExpanded:Se,ariaFlowTo:ue,ariaGrabbed:Se,ariaHasPopup:null,ariaHidden:Se,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ue,ariaLevel:M,ariaLive:null,ariaModal:Se,ariaMultiLine:Se,ariaMultiSelectable:Se,ariaOrientation:null,ariaOwns:ue,ariaPlaceholder:null,ariaPosInSet:M,ariaPressed:Se,ariaReadOnly:Se,ariaRelevant:null,ariaRequired:Se,ariaRoleDescription:ue,ariaRowCount:M,ariaRowIndex:M,ariaRowSpan:M,ariaSelected:Se,ariaSetSize:M,ariaSort:null,ariaValueMax:M,ariaValueMin:M,ariaValueNow:M,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function pf(e,t){return t in e?e[t]:t}function ff(e,t){return pf(e,t.toLowerCase())}const PL=Gr({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Ir,acceptCharset:ue,accessKey:ue,action:null,allow:null,allowFullScreen:G,allowPaymentRequest:G,allowUserMedia:G,alt:null,as:null,async:G,autoCapitalize:null,autoComplete:ue,autoFocus:G,autoPlay:G,blocking:ue,capture:null,charSet:null,checked:G,cite:null,className:ue,cols:M,colSpan:null,content:null,contentEditable:Se,controls:G,controlsList:ue,coords:M|Ir,crossOrigin:null,data:null,dateTime:null,decoding:null,default:G,defer:G,dir:null,dirName:null,disabled:G,download:ju,draggable:Se,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:G,formTarget:null,headers:ue,height:M,hidden:ju,high:M,href:null,hrefLang:null,htmlFor:ue,httpEquiv:ue,id:null,imageSizes:null,imageSrcSet:null,inert:G,inputMode:null,integrity:null,is:null,isMap:G,itemId:null,itemProp:ue,itemRef:ue,itemScope:G,itemType:ue,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:G,low:M,manifest:null,max:null,maxLength:M,media:null,method:null,min:null,minLength:M,multiple:G,muted:G,name:null,nonce:null,noModule:G,noValidate:G,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:G,optimum:M,pattern:null,ping:ue,placeholder:null,playsInline:G,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:G,referrerPolicy:null,rel:ue,required:G,reversed:G,rows:M,rowSpan:M,sandbox:ue,scope:null,scoped:G,seamless:G,selected:G,shadowRootClonable:G,shadowRootDelegatesFocus:G,shadowRootMode:null,shape:null,size:M,sizes:null,slot:null,span:M,spellCheck:Se,src:null,srcDoc:null,srcLang:null,srcSet:null,start:M,step:null,style:null,tabIndex:M,target:null,title:null,translate:null,type:null,typeMustMatch:G,useMap:null,value:Se,width:M,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ue,axis:null,background:null,bgColor:null,border:M,borderColor:null,bottomMargin:M,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:G,declare:G,event:null,face:null,frame:null,frameBorder:null,hSpace:M,leftMargin:M,link:null,longDesc:null,lowSrc:null,marginHeight:M,marginWidth:M,noResize:G,noHref:G,noShade:G,noWrap:G,object:null,profile:null,prompt:null,rev:null,rightMargin:M,rules:null,scheme:null,scrolling:Se,standby:null,summary:null,text:null,topMargin:M,valueType:null,version:null,vAlign:null,vLink:null,vSpace:M,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:G,disableRemotePlayback:G,prefix:null,property:null,results:M,security:null,unselectable:null},space:"html",transform:ff}),IL=Gr({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:st,accentHeight:M,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:M,amplitude:M,arabicForm:null,ascent:M,attributeName:null,attributeType:null,azimuth:M,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:M,by:null,calcMode:null,capHeight:M,className:ue,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:M,diffuseConstant:M,direction:null,display:null,dur:null,divisor:M,dominantBaseline:null,download:G,dx:null,dy:null,edgeMode:null,editable:null,elevation:M,enableBackground:null,end:null,event:null,exponent:M,externalResourcesRequired:null,fill:null,fillOpacity:M,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Ir,g2:Ir,glyphName:Ir,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:M,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:M,horizOriginX:M,horizOriginY:M,id:null,ideographic:M,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:M,k:M,k1:M,k2:M,k3:M,k4:M,kernelMatrix:st,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:M,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:M,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:M,overlineThickness:M,paintOrder:null,panose1:null,path:null,pathLength:M,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ue,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:M,pointsAtY:M,pointsAtZ:M,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:st,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:st,rev:st,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:st,requiredFeatures:st,requiredFonts:st,requiredFormats:st,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:M,specularExponent:M,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:M,strikethroughThickness:M,string:null,stroke:null,strokeDashArray:st,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:M,strokeOpacity:M,strokeWidth:null,style:null,surfaceScale:M,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:st,tabIndex:M,tableValues:null,target:null,targetX:M,targetY:M,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:st,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:M,underlineThickness:M,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:M,values:null,vAlphabetic:M,vMathematical:M,vectorEffect:null,vHanging:M,vIdeographic:M,version:null,vertAdvY:M,vertOriginX:M,vertOriginY:M,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:M,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:pf}),hf=Gr({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),Lf=Gr({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:ff}),mf=Gr({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),RL={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},TL=/[A-Z]/g,td=/-[a-z]/g,zL=/^data[-\w.:]+$/i;function _L(e,t){const n=Eu(t);let r=t,i=rt;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&zL.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(td,NL);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!td.test(o)){let l=o.replace(TL,ML);l.charAt(0)!=="-"&&(l="-"+l),t="data"+l}}i=V1}return new i(r,t)}function ML(e){return"-"+e.toLowerCase()}function NL(e){return e.charAt(1).toUpperCase()}const AL=cf([df,PL,hf,Lf,mf],"html"),W1=cf([df,IL,hf,Lf,mf],"svg");function OL(e){return e.join(" ").trim()}var K1={},nd=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,DL=/\n/g,FL=/^\s*/,BL=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,UL=/^:\s*/,HL=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,VL=/^[;\s]*/,WL=/^\s+|\s+$/g,KL=`
`,rd="/",id="*",On="",ZL="comment",YL="declaration";function QL(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(v){var x=v.match(DL);x&&(n+=x.length);var j=v.lastIndexOf(KL);r=~j?v.length-j:r+v.length}function o(){var v={line:n,column:r};return function(x){return x.position=new l(v),u(),x}}function l(v){this.start=v,this.end={line:n,column:r},this.source=t.source}l.prototype.content=e;function s(v){var x=new Error(t.source+":"+n+":"+r+": "+v);if(x.reason=v,x.filename=t.source,x.line=n,x.column=r,x.source=e,!t.silent)throw x}function a(v){var x=v.exec(e);if(x){var j=x[0];return i(j),e=e.slice(j.length),x}}function u(){a(FL)}function d(v){var x;for(v=v||[];x=p();)x!==!1&&v.push(x);return v}function p(){var v=o();if(!(rd!=e.charAt(0)||id!=e.charAt(1))){for(var x=2;On!=e.charAt(x)&&(id!=e.charAt(x)||rd!=e.charAt(x+1));)++x;if(x+=2,On===e.charAt(x-1))return s("End of comment missing");var j=e.slice(2,x-2);return r+=2,i(j),e=e.slice(x),r+=2,v({type:ZL,comment:j})}}function h(){var v=o(),x=a(BL);if(x){if(p(),!a(UL))return s("property missing ':'");var j=a(HL),L=v({type:YL,property:od(x[0].replace(nd,On)),value:j?od(j[0].replace(nd,On)):On});return a(VL),L}}function f(){var v=[];d(v);for(var x;x=h();)x!==!1&&(v.push(x),d(v));return v}return u(),f()}function od(e){return e?e.replace(WL,On):On}var qL=QL,GL=ll&&ll.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(K1,"__esModule",{value:!0});K1.default=JL;const XL=GL(qL);function JL(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,XL.default)(e),i=typeof t=="function";return r.forEach(o=>{if(o.type!=="declaration")return;const{property:l,value:s}=o;i?t(l,s,o):s&&(n=n||{},n[l]=s)}),n}var hs={};Object.defineProperty(hs,"__esModule",{value:!0});hs.camelCase=void 0;var em=/^--[a-zA-Z0-9_-]+$/,tm=/-([a-z])/g,nm=/^[^-]+$/,rm=/^-(webkit|moz|ms|o|khtml)-/,im=/^-(ms)-/,om=function(e){return!e||nm.test(e)||em.test(e)},lm=function(e,t){return t.toUpperCase()},ld=function(e,t){return"".concat(t,"-")},sm=function(e,t){return t===void 0&&(t={}),om(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(im,ld):e=e.replace(rm,ld),e.replace(tm,lm))};hs.camelCase=sm;var am=ll&&ll.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},um=am(K1),cm=hs;function Pu(e,t){var n={};return!e||typeof e!="string"||(0,um.default)(e,function(r,i){r&&i&&(n[(0,cm.camelCase)(r,t)]=i)}),n}Pu.default=Pu;var dm=Pu;const pm=Ul(dm),gf=xf("end"),Z1=xf("start");function xf(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function fm(e){const t=Z1(e),n=gf(e);if(t&&n)return{start:t,end:n}}function $i(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?sd(e.position):"start"in e||"end"in e?sd(e):"line"in e||"column"in e?Iu(e):""}function Iu(e){return ad(e&&e.line)+":"+ad(e&&e.column)}function sd(e){return Iu(e&&e.start)+"-"+Iu(e&&e.end)}function ad(e){return e&&typeof e=="number"?e:1}class Be extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},l=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(l=!0,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const a=r.indexOf(":");a===-1?o.ruleId=r:(o.source=r.slice(0,a),o.ruleId=r.slice(a+1))}if(!o.place&&o.ancestors&&o.ancestors){const a=o.ancestors[o.ancestors.length-1];a&&(o.place=a.position)}const s=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=s?s.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=s?s.line:void 0,this.name=$i(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=l&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Be.prototype.file="";Be.prototype.name="";Be.prototype.reason="";Be.prototype.message="";Be.prototype.stack="";Be.prototype.column=void 0;Be.prototype.line=void 0;Be.prototype.ancestors=void 0;Be.prototype.cause=void 0;Be.prototype.fatal=void 0;Be.prototype.place=void 0;Be.prototype.ruleId=void 0;Be.prototype.source=void 0;const Y1={}.hasOwnProperty,hm=new Map,Lm=/[A-Z]/g,mm=new Set(["table","tbody","thead","tfoot","tr"]),gm=new Set(["td","th"]),yf="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function xm(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=Em(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=bm(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?W1:AL,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=vf(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function vf(e,t,n){if(t.type==="element")return ym(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return vm(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return km(e,t,n);if(t.type==="mdxjsEsm")return wm(e,t);if(t.type==="root")return Sm(e,t,n);if(t.type==="text")return Cm(e,t)}function ym(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=W1,e.schema=i),e.ancestors.push(t);const o=kf(e,t.tagName,!1),l=jm(e,t);let s=q1(e,t);return mm.has(t.tagName)&&(s=s.filter(function(a){return typeof a=="string"?!jL(a):!0})),wf(e,l,o,t),Q1(l,s),e.ancestors.pop(),e.schema=r,e.create(t,o,l,n)}function vm(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Xi(e,t.position)}function wm(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Xi(e,t.position)}function km(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=W1,e.schema=i),e.ancestors.push(t);const o=t.name===null?e.Fragment:kf(e,t.name,!0),l=$m(e,t),s=q1(e,t);return wf(e,l,o,t),Q1(l,s),e.ancestors.pop(),e.schema=r,e.create(t,o,l,n)}function Sm(e,t,n){const r={};return Q1(r,q1(e,t)),e.create(t,e.Fragment,r,n)}function Cm(e,t){return t.value}function wf(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Q1(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function bm(e,t,n){return r;function r(i,o,l,s){const u=Array.isArray(l.children)?n:t;return s?u(o,l,s):u(o,l)}}function Em(e,t){return n;function n(r,i,o,l){const s=Array.isArray(o.children),a=Z1(r);return t(i,o,l,s,{columnNumber:a?a.column-1:void 0,fileName:e,lineNumber:a?a.line:void 0},void 0)}}function jm(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&Y1.call(t.properties,i)){const o=Pm(e,i,t.properties[i]);if(o){const[l,s]=o;e.tableCellAlignToStyle&&l==="align"&&typeof s=="string"&&gm.has(t.tagName)?r=s:n[l]=s}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function $m(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const l=o.expression;l.type;const s=l.properties[0];s.type,Object.assign(n,e.evaluater.evaluateExpression(s.argument))}else Xi(e,t.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const s=r.value.data.estree.body[0];s.type,o=e.evaluater.evaluateExpression(s.expression)}else Xi(e,t.position);else o=r.value===null?!0:r.value;n[i]=o}return n}function q1(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:hm;for(;++r<t.children.length;){const o=t.children[r];let l;if(e.passKeys){const a=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(a){const u=i.get(a)||0;l=a+"-"+u,i.set(a,u+1)}}const s=vf(e,o,l);s!==void 0&&n.push(s)}return n}function Pm(e,t,n){const r=_L(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?kL(n):OL(n)),r.property==="style"){let i=typeof n=="object"?n:Im(e,String(n));return e.stylePropertyNameCase==="css"&&(i=Rm(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?RL[r.property]||r.property:r.attribute,n]}}function Im(e,t){try{return pm(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new Be("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=yf+"#cannot-parse-style-attribute",i}}function kf(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let o=-1,l;for(;++o<i.length;){const s=X2(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};l=l?{type:"MemberExpression",object:l,property:s,computed:!!(o&&s.type==="Literal"),optional:!1}:s}r=l}else r=X2(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return Y1.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Xi(e)}function Xi(e,t){const n=new Be("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=yf+"#cannot-handle-mdx-estrees-without-createevaluater",n}function Rm(e){const t={};let n;for(n in e)Y1.call(e,n)&&(t[Tm(n)]=e[n]);return t}function Tm(e){let t=e.replace(Lm,zm);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function zm(e){return"-"+e.toLowerCase()}const ea={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},_m={};function Mm(e,t){const n=_m,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Sf(e,r,i)}function Sf(e,t,n){if(Nm(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return ud(e.children,t,n)}return Array.isArray(e)?ud(e,t,n):""}function ud(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=Sf(e[i],t,n);return r.join("")}function Nm(e){return!!(e&&typeof e=="object")}const cd=document.createElement("i");function G1(e){const t="&"+e+";";cd.innerHTML=t;const n=cd.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function Vt(e,t,n,r){const i=e.length;let o=0,l;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)l=Array.from(r),l.unshift(t,n),e.splice(...l);else for(n&&e.splice(t,n);o<r.length;)l=r.slice(o,o+1e4),l.unshift(t,0),e.splice(...l),o+=1e4,t+=1e4}function yt(e,t){return e.length>0?(Vt(e,e.length,0,t),e):t}const dd={}.hasOwnProperty;function Am(e){const t={};let n=-1;for(;++n<e.length;)Om(t,e[n]);return t}function Om(e,t){let n;for(n in t){const i=(dd.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let l;if(o)for(l in o){dd.call(i,l)||(i[l]=[]);const s=o[l];Dm(i[l],Array.isArray(s)?s:s?[s]:[])}}}function Dm(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Vt(e,0,0,r)}function Cf(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Rr(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Ft=_n(/[A-Za-z]/),dt=_n(/[\dA-Za-z]/),Fm=_n(/[#-'*+\--9=?A-Z^-~]/);function Ru(e){return e!==null&&(e<32||e===127)}const Tu=_n(/\d/),Bm=_n(/[\dA-Fa-f]/),Um=_n(/[!-/:-@[-`{-~]/);function W(e){return e!==null&&e<-2}function nt(e){return e!==null&&(e<0||e===32)}function oe(e){return e===-2||e===-1||e===32}const Hm=_n(new RegExp("\\p{P}|\\p{S}","u")),Vm=_n(/\s/);function _n(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Xr(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let l="";if(o===37&&dt(e.charCodeAt(n+1))&&dt(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(l=String.fromCharCode(o));else if(o>55295&&o<57344){const s=e.charCodeAt(n+1);o<56320&&s>56319&&s<57344?(l=String.fromCharCode(o,s),i=1):l="�"}else l=String.fromCharCode(o);l&&(t.push(e.slice(r,n),encodeURIComponent(l)),r=n+i+1,l=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function de(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return l;function l(a){return oe(a)?(e.enter(n),s(a)):t(a)}function s(a){return oe(a)&&o++<i?(e.consume(a),s):(e.exit(n),t(a))}}const Wm={tokenize:Km};function Km(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),de(e,t,"linePrefix")}function i(s){return e.enter("paragraph"),o(s)}function o(s){const a=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=a),n=a,l(s)}function l(s){if(s===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(s);return}return W(s)?(e.consume(s),e.exit("chunkText"),o):(e.consume(s),l)}}const Zm={tokenize:Ym},pd={tokenize:Qm};function Ym(e){const t=this,n=[];let r=0,i,o,l;return s;function s(m){if(r<n.length){const k=n[r];return t.containerState=k[1],e.attempt(k[0].continuation,a,u)(m)}return u(m)}function a(m){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&g();const k=t.events.length;let E=k,S;for(;E--;)if(t.events[E][0]==="exit"&&t.events[E][1].type==="chunkFlow"){S=t.events[E][1].end;break}L(r);let b=k;for(;b<t.events.length;)t.events[b][1].end={...S},b++;return Vt(t.events,E+1,0,t.events.slice(k)),t.events.length=b,u(m)}return s(m)}function u(m){if(r===n.length){if(!i)return h(m);if(i.currentConstruct&&i.currentConstruct.concrete)return v(m);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(pd,d,p)(m)}function d(m){return i&&g(),L(r),h(m)}function p(m){return t.parser.lazy[t.now().line]=r!==n.length,l=t.now().offset,v(m)}function h(m){return t.containerState={},e.attempt(pd,f,v)(m)}function f(m){return r++,n.push([t.currentConstruct,t.containerState]),h(m)}function v(m){if(m===null){i&&g(),L(0),e.consume(m);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),x(m)}function x(m){if(m===null){j(e.exit("chunkFlow"),!0),L(0),e.consume(m);return}return W(m)?(e.consume(m),j(e.exit("chunkFlow")),r=0,t.interrupt=void 0,s):(e.consume(m),x)}function j(m,k){const E=t.sliceStream(m);if(k&&E.push(null),m.previous=o,o&&(o.next=m),o=m,i.defineSkip(m.start),i.write(E),t.parser.lazy[m.start.line]){let S=i.events.length;for(;S--;)if(i.events[S][1].start.offset<l&&(!i.events[S][1].end||i.events[S][1].end.offset>l))return;const b=t.events.length;let P=b,A,R;for(;P--;)if(t.events[P][0]==="exit"&&t.events[P][1].type==="chunkFlow"){if(A){R=t.events[P][1].end;break}A=!0}for(L(r),S=b;S<t.events.length;)t.events[S][1].end={...R},S++;Vt(t.events,P+1,0,t.events.slice(b)),t.events.length=S}}function L(m){let k=n.length;for(;k-- >m;){const E=n[k];t.containerState=E[1],E[0].exit.call(t,e)}n.length=m}function g(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function Qm(e,t,n){return de(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function fd(e){if(e===null||nt(e)||Vm(e))return 1;if(Hm(e))return 2}function X1(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const zu={name:"attention",resolveAll:qm,tokenize:Gm};function qm(e,t){let n=-1,r,i,o,l,s,a,u,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;a=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const p={...e[r][1].end},h={...e[n][1].start};hd(p,-a),hd(h,a),l={type:a>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},s={type:a>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:h},o={type:a>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:a>1?"strong":"emphasis",start:{...l.start},end:{...s.end}},e[r][1].end={...l.start},e[n][1].start={...s.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=yt(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=yt(u,[["enter",i,t],["enter",l,t],["exit",l,t],["enter",o,t]]),u=yt(u,X1(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=yt(u,[["exit",o,t],["enter",s,t],["exit",s,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,u=yt(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,Vt(e,r-1,n-r+3,u),n=r+u.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function Gm(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=fd(r);let o;return l;function l(a){return o=a,e.enter("attentionSequence"),s(a)}function s(a){if(a===o)return e.consume(a),s;const u=e.exit("attentionSequence"),d=fd(a),p=!d||d===2&&i||n.includes(a),h=!i||i===2&&d||n.includes(r);return u._open=!!(o===42?p:p&&(i||!h)),u._close=!!(o===42?h:h&&(d||!p)),t(a)}}function hd(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const Xm={name:"autolink",tokenize:Jm};function Jm(e,t,n){let r=0;return i;function i(f){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(f){return Ft(f)?(e.consume(f),l):f===64?n(f):u(f)}function l(f){return f===43||f===45||f===46||dt(f)?(r=1,s(f)):u(f)}function s(f){return f===58?(e.consume(f),r=0,a):(f===43||f===45||f===46||dt(f))&&r++<32?(e.consume(f),s):(r=0,u(f))}function a(f){return f===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.exit("autolink"),t):f===null||f===32||f===60||Ru(f)?n(f):(e.consume(f),a)}function u(f){return f===64?(e.consume(f),d):Fm(f)?(e.consume(f),u):n(f)}function d(f){return dt(f)?p(f):n(f)}function p(f){return f===46?(e.consume(f),r=0,d):f===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.exit("autolink"),t):h(f)}function h(f){if((f===45||dt(f))&&r++<63){const v=f===45?h:p;return e.consume(f),v}return n(f)}}const Ls={partial:!0,tokenize:eg};function eg(e,t,n){return r;function r(o){return oe(o)?de(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||W(o)?t(o):n(o)}}const bf={continuation:{tokenize:ng},exit:rg,name:"blockQuote",tokenize:tg};function tg(e,t,n){const r=this;return i;function i(l){if(l===62){const s=r.containerState;return s.open||(e.enter("blockQuote",{_container:!0}),s.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(l),e.exit("blockQuoteMarker"),o}return n(l)}function o(l){return oe(l)?(e.enter("blockQuotePrefixWhitespace"),e.consume(l),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(l))}}function ng(e,t,n){const r=this;return i;function i(l){return oe(l)?de(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l):o(l)}function o(l){return e.attempt(bf,t,n)(l)}}function rg(e){e.exit("blockQuote")}const Ef={name:"characterEscape",tokenize:ig};function ig(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return Um(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const jf={name:"characterReference",tokenize:og};function og(e,t,n){const r=this;let i=0,o,l;return s;function s(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),a}function a(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),o=31,l=dt,d(p))}function u(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,l=Bm,d):(e.enter("characterReferenceValue"),o=7,l=Tu,d(p))}function d(p){if(p===59&&i){const h=e.exit("characterReferenceValue");return l===dt&&!G1(r.sliceSerialize(h))?n(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return l(p)&&i++<o?(e.consume(p),d):n(p)}}const Ld={partial:!0,tokenize:sg},md={concrete:!0,name:"codeFenced",tokenize:lg};function lg(e,t,n){const r=this,i={partial:!0,tokenize:E};let o=0,l=0,s;return a;function a(S){return u(S)}function u(S){const b=r.events[r.events.length-1];return o=b&&b[1].type==="linePrefix"?b[2].sliceSerialize(b[1],!0).length:0,s=S,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(S)}function d(S){return S===s?(l++,e.consume(S),d):l<3?n(S):(e.exit("codeFencedFenceSequence"),oe(S)?de(e,p,"whitespace")(S):p(S))}function p(S){return S===null||W(S)?(e.exit("codeFencedFence"),r.interrupt?t(S):e.check(Ld,x,k)(S)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),h(S))}function h(S){return S===null||W(S)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(S)):oe(S)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),de(e,f,"whitespace")(S)):S===96&&S===s?n(S):(e.consume(S),h)}function f(S){return S===null||W(S)?p(S):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),v(S))}function v(S){return S===null||W(S)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(S)):S===96&&S===s?n(S):(e.consume(S),v)}function x(S){return e.attempt(i,k,j)(S)}function j(S){return e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),L}function L(S){return o>0&&oe(S)?de(e,g,"linePrefix",o+1)(S):g(S)}function g(S){return S===null||W(S)?e.check(Ld,x,k)(S):(e.enter("codeFlowValue"),m(S))}function m(S){return S===null||W(S)?(e.exit("codeFlowValue"),g(S)):(e.consume(S),m)}function k(S){return e.exit("codeFenced"),t(S)}function E(S,b,P){let A=0;return R;function R(U){return S.enter("lineEnding"),S.consume(U),S.exit("lineEnding"),_}function _(U){return S.enter("codeFencedFence"),oe(U)?de(S,N,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(U):N(U)}function N(U){return U===s?(S.enter("codeFencedFenceSequence"),O(U)):P(U)}function O(U){return U===s?(A++,S.consume(U),O):A>=l?(S.exit("codeFencedFenceSequence"),oe(U)?de(S,V,"whitespace")(U):V(U)):P(U)}function V(U){return U===null||W(U)?(S.exit("codeFencedFence"),b(U)):P(U)}}}function sg(e,t,n){const r=this;return i;function i(l){return l===null?n(l):(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),o)}function o(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}const ta={name:"codeIndented",tokenize:ug},ag={partial:!0,tokenize:cg};function ug(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),de(e,o,"linePrefix",5)(u)}function o(u){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?l(u):n(u)}function l(u){return u===null?a(u):W(u)?e.attempt(ag,l,a)(u):(e.enter("codeFlowValue"),s(u))}function s(u){return u===null||W(u)?(e.exit("codeFlowValue"),l(u)):(e.consume(u),s)}function a(u){return e.exit("codeIndented"),t(u)}}function cg(e,t,n){const r=this;return i;function i(l){return r.parser.lazy[r.now().line]?n(l):W(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),i):de(e,o,"linePrefix",5)(l)}function o(l){const s=r.events[r.events.length-1];return s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?t(l):W(l)?i(l):n(l)}}const dg={name:"codeText",previous:fg,resolve:pg,tokenize:hg};function pg(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function fg(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function hg(e,t,n){let r=0,i,o;return l;function l(p){return e.enter("codeText"),e.enter("codeTextSequence"),s(p)}function s(p){return p===96?(e.consume(p),r++,s):(e.exit("codeTextSequence"),a(p))}function a(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),a):p===96?(o=e.enter("codeTextSequence"),i=0,d(p)):W(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),a):(e.enter("codeTextData"),u(p))}function u(p){return p===null||p===32||p===96||W(p)?(e.exit("codeTextData"),a(p)):(e.consume(p),u)}function d(p){return p===96?(e.consume(p),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(o.type="codeTextData",u(p))}}class Lg{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&ui(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),ui(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),ui(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);ui(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);ui(this.left,n.reverse())}}}function ui(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function $f(e){const t={};let n=-1,r,i,o,l,s,a,u;const d=new Lg(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(a=r[1]._tokenizer.events,o=0,o<a.length&&a[o][1].type==="lineEndingBlank"&&(o+=2),o<a.length&&a[o][1].type==="content"))for(;++o<a.length&&a[o][1].type!=="content";)a[o][1].type==="chunkText"&&(a[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,mg(d,n)),n=t[n],u=!0);else if(r[1]._container){for(o=n,i=void 0;o--;)if(l=d.get(o),l[1].type==="lineEnding"||l[1].type==="lineEndingBlank")l[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),l[1].type="lineEnding",i=o);else if(!(l[1].type==="linePrefix"||l[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},s=d.slice(i,n),s.unshift(r),d.splice(i,n-i+1,s))}}return Vt(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function mg(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const o=[];let l=n._tokenizer;l||(l=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(l._contentTypeTextTrailing=!0));const s=l.events,a=[],u={};let d,p,h=-1,f=n,v=0,x=0;const j=[x];for(;f;){for(;e.get(++i)[1]!==f;);o.push(i),f._tokenizer||(d=r.sliceStream(f),f.next||d.push(null),p&&l.defineSkip(f.start),f._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(d),f._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),p=f,f=f.next}for(f=n;++h<s.length;)s[h][0]==="exit"&&s[h-1][0]==="enter"&&s[h][1].type===s[h-1][1].type&&s[h][1].start.line!==s[h][1].end.line&&(x=h+1,j.push(x),f._tokenizer=void 0,f.previous=void 0,f=f.next);for(l.events=[],f?(f._tokenizer=void 0,f.previous=void 0):j.pop(),h=j.length;h--;){const L=s.slice(j[h],j[h+1]),g=o.pop();a.push([g,g+L.length-1]),e.splice(g,2,L)}for(a.reverse(),h=-1;++h<a.length;)u[v+a[h][0]]=v+a[h][1],v+=a[h][1]-a[h][0]-1;return u}const gg={resolve:yg,tokenize:vg},xg={partial:!0,tokenize:wg};function yg(e){return $f(e),e}function vg(e,t){let n;return r;function r(s){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(s)}function i(s){return s===null?o(s):W(s)?e.check(xg,l,o)(s):(e.consume(s),i)}function o(s){return e.exit("chunkContent"),e.exit("content"),t(s)}function l(s){return e.consume(s),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function wg(e,t,n){const r=this;return i;function i(l){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),de(e,o,"linePrefix")}function o(l){if(l===null||W(l))return n(l);const s=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?t(l):e.interrupt(r.parser.constructs.flow,n,t)(l)}}function Pf(e,t,n,r,i,o,l,s,a){const u=a||Number.POSITIVE_INFINITY;let d=0;return p;function p(L){return L===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(L),e.exit(o),h):L===null||L===32||L===41||Ru(L)?n(L):(e.enter(r),e.enter(l),e.enter(s),e.enter("chunkString",{contentType:"string"}),x(L))}function h(L){return L===62?(e.enter(o),e.consume(L),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(s),e.enter("chunkString",{contentType:"string"}),f(L))}function f(L){return L===62?(e.exit("chunkString"),e.exit(s),h(L)):L===null||L===60||W(L)?n(L):(e.consume(L),L===92?v:f)}function v(L){return L===60||L===62||L===92?(e.consume(L),f):f(L)}function x(L){return!d&&(L===null||L===41||nt(L))?(e.exit("chunkString"),e.exit(s),e.exit(l),e.exit(r),t(L)):d<u&&L===40?(e.consume(L),d++,x):L===41?(e.consume(L),d--,x):L===null||L===32||L===40||Ru(L)?n(L):(e.consume(L),L===92?j:x)}function j(L){return L===40||L===41||L===92?(e.consume(L),x):x(L)}}function If(e,t,n,r,i,o){const l=this;let s=0,a;return u;function u(f){return e.enter(r),e.enter(i),e.consume(f),e.exit(i),e.enter(o),d}function d(f){return s>999||f===null||f===91||f===93&&!a||f===94&&!s&&"_hiddenFootnoteSupport"in l.parser.constructs?n(f):f===93?(e.exit(o),e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):W(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),p(f))}function p(f){return f===null||f===91||f===93||W(f)||s++>999?(e.exit("chunkString"),d(f)):(e.consume(f),a||(a=!oe(f)),f===92?h:p)}function h(f){return f===91||f===92||f===93?(e.consume(f),s++,p):p(f)}}function Rf(e,t,n,r,i,o){let l;return s;function s(h){return h===34||h===39||h===40?(e.enter(r),e.enter(i),e.consume(h),e.exit(i),l=h===40?41:h,a):n(h)}function a(h){return h===l?(e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):(e.enter(o),u(h))}function u(h){return h===l?(e.exit(o),a(l)):h===null?n(h):W(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),de(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(h))}function d(h){return h===l||h===null||W(h)?(e.exit("chunkString"),u(h)):(e.consume(h),h===92?p:d)}function p(h){return h===l||h===92?(e.consume(h),d):d(h)}}function Pi(e,t){let n;return r;function r(i){return W(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):oe(i)?de(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const kg={name:"definition",tokenize:Cg},Sg={partial:!0,tokenize:bg};function Cg(e,t,n){const r=this;let i;return o;function o(f){return e.enter("definition"),l(f)}function l(f){return If.call(r,e,s,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(f)}function s(f){return i=Rr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),f===58?(e.enter("definitionMarker"),e.consume(f),e.exit("definitionMarker"),a):n(f)}function a(f){return nt(f)?Pi(e,u)(f):u(f)}function u(f){return Pf(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(f)}function d(f){return e.attempt(Sg,p,p)(f)}function p(f){return oe(f)?de(e,h,"whitespace")(f):h(f)}function h(f){return f===null||W(f)?(e.exit("definition"),r.parser.defined.push(i),t(f)):n(f)}}function bg(e,t,n){return r;function r(s){return nt(s)?Pi(e,i)(s):n(s)}function i(s){return Rf(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(s)}function o(s){return oe(s)?de(e,l,"whitespace")(s):l(s)}function l(s){return s===null||W(s)?t(s):n(s)}}const Eg={name:"hardBreakEscape",tokenize:jg};function jg(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return W(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const $g={name:"headingAtx",resolve:Pg,tokenize:Ig};function Pg(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Vt(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function Ig(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),o(d)}function o(d){return e.enter("atxHeadingSequence"),l(d)}function l(d){return d===35&&r++<6?(e.consume(d),l):d===null||nt(d)?(e.exit("atxHeadingSequence"),s(d)):n(d)}function s(d){return d===35?(e.enter("atxHeadingSequence"),a(d)):d===null||W(d)?(e.exit("atxHeading"),t(d)):oe(d)?de(e,s,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function a(d){return d===35?(e.consume(d),a):(e.exit("atxHeadingSequence"),s(d))}function u(d){return d===null||d===35||nt(d)?(e.exit("atxHeadingText"),s(d)):(e.consume(d),u)}}const Rg=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],gd=["pre","script","style","textarea"],Tg={concrete:!0,name:"htmlFlow",resolveTo:Mg,tokenize:Ng},zg={partial:!0,tokenize:Og},_g={partial:!0,tokenize:Ag};function Mg(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Ng(e,t,n){const r=this;let i,o,l,s,a;return u;function u(C){return d(C)}function d(C){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(C),p}function p(C){return C===33?(e.consume(C),h):C===47?(e.consume(C),o=!0,x):C===63?(e.consume(C),i=3,r.interrupt?t:y):Ft(C)?(e.consume(C),l=String.fromCharCode(C),j):n(C)}function h(C){return C===45?(e.consume(C),i=2,f):C===91?(e.consume(C),i=5,s=0,v):Ft(C)?(e.consume(C),i=4,r.interrupt?t:y):n(C)}function f(C){return C===45?(e.consume(C),r.interrupt?t:y):n(C)}function v(C){const le="CDATA[";return C===le.charCodeAt(s++)?(e.consume(C),s===le.length?r.interrupt?t:N:v):n(C)}function x(C){return Ft(C)?(e.consume(C),l=String.fromCharCode(C),j):n(C)}function j(C){if(C===null||C===47||C===62||nt(C)){const le=C===47,te=l.toLowerCase();return!le&&!o&&gd.includes(te)?(i=1,r.interrupt?t(C):N(C)):Rg.includes(l.toLowerCase())?(i=6,le?(e.consume(C),L):r.interrupt?t(C):N(C)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(C):o?g(C):m(C))}return C===45||dt(C)?(e.consume(C),l+=String.fromCharCode(C),j):n(C)}function L(C){return C===62?(e.consume(C),r.interrupt?t:N):n(C)}function g(C){return oe(C)?(e.consume(C),g):R(C)}function m(C){return C===47?(e.consume(C),R):C===58||C===95||Ft(C)?(e.consume(C),k):oe(C)?(e.consume(C),m):R(C)}function k(C){return C===45||C===46||C===58||C===95||dt(C)?(e.consume(C),k):E(C)}function E(C){return C===61?(e.consume(C),S):oe(C)?(e.consume(C),E):m(C)}function S(C){return C===null||C===60||C===61||C===62||C===96?n(C):C===34||C===39?(e.consume(C),a=C,b):oe(C)?(e.consume(C),S):P(C)}function b(C){return C===a?(e.consume(C),a=null,A):C===null||W(C)?n(C):(e.consume(C),b)}function P(C){return C===null||C===34||C===39||C===47||C===60||C===61||C===62||C===96||nt(C)?E(C):(e.consume(C),P)}function A(C){return C===47||C===62||oe(C)?m(C):n(C)}function R(C){return C===62?(e.consume(C),_):n(C)}function _(C){return C===null||W(C)?N(C):oe(C)?(e.consume(C),_):n(C)}function N(C){return C===45&&i===2?(e.consume(C),K):C===60&&i===1?(e.consume(C),q):C===62&&i===4?(e.consume(C),Z):C===63&&i===3?(e.consume(C),y):C===93&&i===5?(e.consume(C),F):W(C)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(zg,Y,O)(C)):C===null||W(C)?(e.exit("htmlFlowData"),O(C)):(e.consume(C),N)}function O(C){return e.check(_g,V,Y)(C)}function V(C){return e.enter("lineEnding"),e.consume(C),e.exit("lineEnding"),U}function U(C){return C===null||W(C)?O(C):(e.enter("htmlFlowData"),N(C))}function K(C){return C===45?(e.consume(C),y):N(C)}function q(C){return C===47?(e.consume(C),l="",T):N(C)}function T(C){if(C===62){const le=l.toLowerCase();return gd.includes(le)?(e.consume(C),Z):N(C)}return Ft(C)&&l.length<8?(e.consume(C),l+=String.fromCharCode(C),T):N(C)}function F(C){return C===93?(e.consume(C),y):N(C)}function y(C){return C===62?(e.consume(C),Z):C===45&&i===2?(e.consume(C),y):N(C)}function Z(C){return C===null||W(C)?(e.exit("htmlFlowData"),Y(C)):(e.consume(C),Z)}function Y(C){return e.exit("htmlFlow"),t(C)}}function Ag(e,t,n){const r=this;return i;function i(l){return W(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),o):n(l)}function o(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}function Og(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Ls,t,n)}}const Dg={name:"htmlText",tokenize:Fg};function Fg(e,t,n){const r=this;let i,o,l;return s;function s(y){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(y),a}function a(y){return y===33?(e.consume(y),u):y===47?(e.consume(y),E):y===63?(e.consume(y),m):Ft(y)?(e.consume(y),P):n(y)}function u(y){return y===45?(e.consume(y),d):y===91?(e.consume(y),o=0,v):Ft(y)?(e.consume(y),g):n(y)}function d(y){return y===45?(e.consume(y),f):n(y)}function p(y){return y===null?n(y):y===45?(e.consume(y),h):W(y)?(l=p,q(y)):(e.consume(y),p)}function h(y){return y===45?(e.consume(y),f):p(y)}function f(y){return y===62?K(y):y===45?h(y):p(y)}function v(y){const Z="CDATA[";return y===Z.charCodeAt(o++)?(e.consume(y),o===Z.length?x:v):n(y)}function x(y){return y===null?n(y):y===93?(e.consume(y),j):W(y)?(l=x,q(y)):(e.consume(y),x)}function j(y){return y===93?(e.consume(y),L):x(y)}function L(y){return y===62?K(y):y===93?(e.consume(y),L):x(y)}function g(y){return y===null||y===62?K(y):W(y)?(l=g,q(y)):(e.consume(y),g)}function m(y){return y===null?n(y):y===63?(e.consume(y),k):W(y)?(l=m,q(y)):(e.consume(y),m)}function k(y){return y===62?K(y):m(y)}function E(y){return Ft(y)?(e.consume(y),S):n(y)}function S(y){return y===45||dt(y)?(e.consume(y),S):b(y)}function b(y){return W(y)?(l=b,q(y)):oe(y)?(e.consume(y),b):K(y)}function P(y){return y===45||dt(y)?(e.consume(y),P):y===47||y===62||nt(y)?A(y):n(y)}function A(y){return y===47?(e.consume(y),K):y===58||y===95||Ft(y)?(e.consume(y),R):W(y)?(l=A,q(y)):oe(y)?(e.consume(y),A):K(y)}function R(y){return y===45||y===46||y===58||y===95||dt(y)?(e.consume(y),R):_(y)}function _(y){return y===61?(e.consume(y),N):W(y)?(l=_,q(y)):oe(y)?(e.consume(y),_):A(y)}function N(y){return y===null||y===60||y===61||y===62||y===96?n(y):y===34||y===39?(e.consume(y),i=y,O):W(y)?(l=N,q(y)):oe(y)?(e.consume(y),N):(e.consume(y),V)}function O(y){return y===i?(e.consume(y),i=void 0,U):y===null?n(y):W(y)?(l=O,q(y)):(e.consume(y),O)}function V(y){return y===null||y===34||y===39||y===60||y===61||y===96?n(y):y===47||y===62||nt(y)?A(y):(e.consume(y),V)}function U(y){return y===47||y===62||nt(y)?A(y):n(y)}function K(y){return y===62?(e.consume(y),e.exit("htmlTextData"),e.exit("htmlText"),t):n(y)}function q(y){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(y),e.exit("lineEnding"),T}function T(y){return oe(y)?de(e,F,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(y):F(y)}function F(y){return e.enter("htmlTextData"),l(y)}}const J1={name:"labelEnd",resolveAll:Vg,resolveTo:Wg,tokenize:Kg},Bg={tokenize:Zg},Ug={tokenize:Yg},Hg={tokenize:Qg};function Vg(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&Vt(e,0,e.length,n),e}function Wg(e,t){let n=e.length,r=0,i,o,l,s;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(l){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(l=n);const a={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[o][1].start},end:{...e[l][1].end}},d={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[l-2][1].start}};return s=[["enter",a,t],["enter",u,t]],s=yt(s,e.slice(o+1,o+r+3)),s=yt(s,[["enter",d,t]]),s=yt(s,X1(t.parser.constructs.insideSpan.null,e.slice(o+r+4,l-3),t)),s=yt(s,[["exit",d,t],e[l-2],e[l-1],["exit",u,t]]),s=yt(s,e.slice(l+1)),s=yt(s,[["exit",a,t]]),Vt(e,o,e.length,s),e}function Kg(e,t,n){const r=this;let i=r.events.length,o,l;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return s;function s(h){return o?o._inactive?p(h):(l=r.parser.defined.includes(Rr(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(h),e.exit("labelMarker"),e.exit("labelEnd"),a):n(h)}function a(h){return h===40?e.attempt(Bg,d,l?d:p)(h):h===91?e.attempt(Ug,d,l?u:p)(h):l?d(h):p(h)}function u(h){return e.attempt(Hg,d,p)(h)}function d(h){return t(h)}function p(h){return o._balanced=!0,n(h)}}function Zg(e,t,n){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),i}function i(p){return nt(p)?Pi(e,o)(p):o(p)}function o(p){return p===41?d(p):Pf(e,l,s,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function l(p){return nt(p)?Pi(e,a)(p):d(p)}function s(p){return n(p)}function a(p){return p===34||p===39||p===40?Rf(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):d(p)}function u(p){return nt(p)?Pi(e,d)(p):d(p)}function d(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),t):n(p)}}function Yg(e,t,n){const r=this;return i;function i(s){return If.call(r,e,o,l,"reference","referenceMarker","referenceString")(s)}function o(s){return r.parser.defined.includes(Rr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(s):n(s)}function l(s){return n(s)}}function Qg(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const qg={name:"labelStartImage",resolveAll:J1.resolveAll,tokenize:Gg};function Gg(e,t,n){const r=this;return i;function i(s){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(s),e.exit("labelImageMarker"),o}function o(s){return s===91?(e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelImage"),l):n(s)}function l(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(s):t(s)}}const Xg={name:"labelStartLink",resolveAll:J1.resolveAll,tokenize:Jg};function Jg(e,t,n){const r=this;return i;function i(l){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelLink"),o}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const na={name:"lineEnding",tokenize:ex};function ex(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),de(e,t,"linePrefix")}}const tl={name:"thematicBreak",tokenize:tx};function tx(e,t,n){let r=0,i;return o;function o(u){return e.enter("thematicBreak"),l(u)}function l(u){return i=u,s(u)}function s(u){return u===i?(e.enter("thematicBreakSequence"),a(u)):r>=3&&(u===null||W(u))?(e.exit("thematicBreak"),t(u)):n(u)}function a(u){return u===i?(e.consume(u),r++,a):(e.exit("thematicBreakSequence"),oe(u)?de(e,s,"whitespace")(u):s(u))}}const Qe={continuation:{tokenize:ox},exit:sx,name:"list",tokenize:ix},nx={partial:!0,tokenize:ax},rx={partial:!0,tokenize:lx};function ix(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,l=0;return s;function s(f){const v=r.containerState.type||(f===42||f===43||f===45?"listUnordered":"listOrdered");if(v==="listUnordered"?!r.containerState.marker||f===r.containerState.marker:Tu(f)){if(r.containerState.type||(r.containerState.type=v,e.enter(v,{_container:!0})),v==="listUnordered")return e.enter("listItemPrefix"),f===42||f===45?e.check(tl,n,u)(f):u(f);if(!r.interrupt||f===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),a(f)}return n(f)}function a(f){return Tu(f)&&++l<10?(e.consume(f),a):(!r.interrupt||l<2)&&(r.containerState.marker?f===r.containerState.marker:f===41||f===46)?(e.exit("listItemValue"),u(f)):n(f)}function u(f){return e.enter("listItemMarker"),e.consume(f),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||f,e.check(Ls,r.interrupt?n:d,e.attempt(nx,h,p))}function d(f){return r.containerState.initialBlankLine=!0,o++,h(f)}function p(f){return oe(f)?(e.enter("listItemPrefixWhitespace"),e.consume(f),e.exit("listItemPrefixWhitespace"),h):n(f)}function h(f){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(f)}}function ox(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Ls,i,o);function i(s){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,de(e,t,"listItemIndent",r.containerState.size+1)(s)}function o(s){return r.containerState.furtherBlankLines||!oe(s)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,l(s)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(rx,t,l)(s))}function l(s){return r.containerState._closeFlow=!0,r.interrupt=void 0,de(e,e.attempt(Qe,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s)}}function lx(e,t,n){const r=this;return de(e,i,"listItemIndent",r.containerState.size+1);function i(o){const l=r.events[r.events.length-1];return l&&l[1].type==="listItemIndent"&&l[2].sliceSerialize(l[1],!0).length===r.containerState.size?t(o):n(o)}}function sx(e){e.exit(this.containerState.type)}function ax(e,t,n){const r=this;return de(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const l=r.events[r.events.length-1];return!oe(o)&&l&&l[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const xd={name:"setextUnderline",resolveTo:ux,tokenize:cx};function ux(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const l={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",l,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=l,e.push(["exit",l,t]),e}function cx(e,t,n){const r=this;let i;return o;function o(u){let d=r.events.length,p;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){p=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),i=u,l(u)):n(u)}function l(u){return e.enter("setextHeadingLineSequence"),s(u)}function s(u){return u===i?(e.consume(u),s):(e.exit("setextHeadingLineSequence"),oe(u)?de(e,a,"lineSuffix")(u):a(u))}function a(u){return u===null||W(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const dx={tokenize:px};function px(e){const t=this,n=e.attempt(Ls,r,e.attempt(this.parser.constructs.flowInitial,i,de(e,e.attempt(this.parser.constructs.flow,i,e.attempt(gg,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const fx={resolveAll:zf()},hx=Tf("string"),Lx=Tf("text");function Tf(e){return{resolveAll:zf(e==="text"?mx:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,l,s);return l;function l(d){return u(d)?o(d):s(d)}function s(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),a}function a(d){return u(d)?(n.exit("data"),o(d)):(n.consume(d),a)}function u(d){if(d===null)return!0;const p=i[d];let h=-1;if(p)for(;++h<p.length;){const f=p[h];if(!f.previous||f.previous.call(r,r.previous))return!0}return!1}}}function zf(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function mx(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,l=-1,s=0,a;for(;o--;){const u=i[o];if(typeof u=="string"){for(l=u.length;u.charCodeAt(l-1)===32;)s++,l--;if(l)break;l=-1}else if(u===-2)a=!0,s++;else if(u!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(s=0),s){const u={type:n===e.length||a||s<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?l:r.start._bufferIndex+l,_index:r.start._index+o,line:r.end.line,column:r.end.column-s,offset:r.end.offset-s},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const gx={42:Qe,43:Qe,45:Qe,48:Qe,49:Qe,50:Qe,51:Qe,52:Qe,53:Qe,54:Qe,55:Qe,56:Qe,57:Qe,62:bf},xx={91:kg},yx={[-2]:ta,[-1]:ta,32:ta},vx={35:$g,42:tl,45:[xd,tl],60:Tg,61:xd,95:tl,96:md,126:md},wx={38:jf,92:Ef},kx={[-5]:na,[-4]:na,[-3]:na,33:qg,38:jf,42:zu,60:[Xm,Dg],91:Xg,92:[Eg,Ef],93:J1,95:zu,96:dg},Sx={null:[zu,fx]},Cx={null:[42,95]},bx={null:[]},Ex=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Cx,contentInitial:xx,disable:bx,document:gx,flow:vx,flowInitial:yx,insideSpan:Sx,string:wx,text:kx},Symbol.toStringTag,{value:"Module"}));function jx(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},o=[];let l=[],s=[];const a={attempt:b(E),check:b(S),consume:g,enter:m,exit:k,interrupt:b(S,{interrupt:!0})},u={code:null,containerState:{},defineSkip:x,events:[],now:v,parser:e,previous:null,sliceSerialize:h,sliceStream:f,write:p};let d=t.tokenize.call(u,a);return t.resolveAll&&o.push(t),u;function p(_){return l=yt(l,_),j(),l[l.length-1]!==null?[]:(P(t,0),u.events=X1(o,u.events,u),u.events)}function h(_,N){return Px(f(_),N)}function f(_){return $x(l,_)}function v(){const{_bufferIndex:_,_index:N,line:O,column:V,offset:U}=r;return{_bufferIndex:_,_index:N,line:O,column:V,offset:U}}function x(_){i[_.line]=_.column,R()}function j(){let _;for(;r._index<l.length;){const N=l[r._index];if(typeof N=="string")for(_=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===_&&r._bufferIndex<N.length;)L(N.charCodeAt(r._bufferIndex));else L(N)}}function L(_){d=d(_)}function g(_){W(_)?(r.line++,r.column=1,r.offset+=_===-3?2:1,R()):_!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===l[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=_}function m(_,N){const O=N||{};return O.type=_,O.start=v(),u.events.push(["enter",O,u]),s.push(O),O}function k(_){const N=s.pop();return N.end=v(),u.events.push(["exit",N,u]),N}function E(_,N){P(_,N.from)}function S(_,N){N.restore()}function b(_,N){return O;function O(V,U,K){let q,T,F,y;return Array.isArray(V)?Y(V):"tokenize"in V?Y([V]):Z(V);function Z(re){return Ue;function Ue(He){const Ve=He!==null&&re[He],it=He!==null&&re.null,ot=[...Array.isArray(Ve)?Ve:Ve?[Ve]:[],...Array.isArray(it)?it:it?[it]:[]];return Y(ot)(He)}}function Y(re){return q=re,T=0,re.length===0?K:C(re[T])}function C(re){return Ue;function Ue(He){return y=A(),F=re,re.partial||(u.currentConstruct=re),re.name&&u.parser.constructs.disable.null.includes(re.name)?te():re.tokenize.call(N?Object.assign(Object.create(u),N):u,a,le,te)(He)}}function le(re){return _(F,y),U}function te(re){return y.restore(),++T<q.length?C(q[T]):K}}}function P(_,N){_.resolveAll&&!o.includes(_)&&o.push(_),_.resolve&&Vt(u.events,N,u.events.length-N,_.resolve(u.events.slice(N),u)),_.resolveTo&&(u.events=_.resolveTo(u.events,u))}function A(){const _=v(),N=u.previous,O=u.currentConstruct,V=u.events.length,U=Array.from(s);return{from:V,restore:K};function K(){r=_,u.previous=N,u.currentConstruct=O,u.events.length=V,s=U,R()}}function R(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function $x(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let l;if(n===i)l=[e[n].slice(r,o)];else{if(l=e.slice(n,i),r>-1){const s=l[0];typeof s=="string"?l[0]=s.slice(r):l.shift()}o>0&&l.push(e[i].slice(0,o))}return l}function Px(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let l;if(typeof o=="string")l=o;else switch(o){case-5:{l="\r";break}case-4:{l=`
`;break}case-3:{l=`\r
`;break}case-2:{l=t?" ":"	";break}case-1:{if(!t&&i)continue;l=" ";break}default:l=String.fromCharCode(o)}i=o===-2,r.push(l)}return r.join("")}function Ix(e){const r={constructs:Am([Ex,...(e||{}).extensions||[]]),content:i(Wm),defined:[],document:i(Zm),flow:i(dx),lazy:{},string:i(hx),text:i(Lx)};return r;function i(o){return l;function l(s){return jx(r,o,s)}}}function Rx(e){for(;!$f(e););return e}const yd=/[\0\t\n\r]/g;function Tx(){let e=1,t="",n=!0,r;return i;function i(o,l,s){const a=[];let u,d,p,h,f;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(l||void 0).decode(o)),p=0,t="",n&&(o.charCodeAt(0)===65279&&p++,n=void 0);p<o.length;){if(yd.lastIndex=p,u=yd.exec(o),h=u&&u.index!==void 0?u.index:o.length,f=o.charCodeAt(h),!u){t=o.slice(p);break}if(f===10&&p===h&&r)a.push(-3),r=void 0;else switch(r&&(a.push(-5),r=void 0),p<h&&(a.push(o.slice(p,h)),e+=h-p),f){case 0:{a.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,a.push(-2);e++<d;)a.push(-1);break}case 10:{a.push(-4),e=1;break}default:r=!0,e=1}p=h+1}return s&&(r&&a.push(-5),t&&a.push(t),a.push(null)),a}}const zx=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function _x(e){return e.replace(zx,Mx)}function Mx(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return Cf(n.slice(o?2:1),o?16:10)}return G1(n)||e}const _f={}.hasOwnProperty;function Nx(e,t,n){return t&&typeof t=="object"&&(n=t,t=void 0),Ax(n)(Rx(Ix(n).document().write(Tx()(e,t,!0))))}function Ax(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(uc),autolinkProtocol:A,autolinkEmail:A,atxHeading:o(bt),blockQuote:o(it),characterEscape:A,characterReference:A,codeFenced:o(ot),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:o(ot,l),codeText:o(H,l),codeTextData:A,data:A,codeFlowValue:A,definition:o(Pe),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:o(Wt),hardBreakEscape:o(sc),hardBreakTrailing:o(sc),htmlFlow:o(ac,l),htmlFlowData:A,htmlText:o(ac,l),htmlTextData:A,image:o(Kf),label:l,link:o(uc),listItem:o(Zf),listItemValue:h,listOrdered:o(cc,p),listUnordered:o(cc),paragraph:o(Yf),reference:C,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:o(bt),strong:o(Qf),thematicBreak:o(Gf)},exit:{atxHeading:a(),atxHeadingSequence:E,autolink:a(),autolinkEmail:Ve,autolinkProtocol:He,blockQuote:a(),characterEscapeValue:R,characterReferenceMarkerHexadecimal:te,characterReferenceMarkerNumeric:te,characterReferenceValue:re,characterReference:Ue,codeFenced:a(j),codeFencedFence:x,codeFencedFenceInfo:f,codeFencedFenceMeta:v,codeFlowValue:R,codeIndented:a(L),codeText:a(U),codeTextData:R,data:R,definition:a(),definitionDestinationString:k,definitionLabelString:g,definitionTitleString:m,emphasis:a(),hardBreakEscape:a(N),hardBreakTrailing:a(N),htmlFlow:a(O),htmlFlowData:R,htmlText:a(V),htmlTextData:R,image:a(q),label:F,labelText:T,lineEnding:_,link:a(K),listItem:a(),listOrdered:a(),listUnordered:a(),paragraph:a(),referenceString:le,resourceDestinationString:y,resourceTitleString:Z,resource:Y,setextHeading:a(P),setextHeadingLineSequence:b,setextHeadingText:S,strong:a(),thematicBreak:a()}};Mf(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(I){let D={type:"root",children:[]};const Q={stack:[D],tokenStack:[],config:t,enter:s,exit:u,buffer:l,resume:d,data:n},ee=[];let ae=-1;for(;++ae<I.length;)if(I[ae][1].type==="listOrdered"||I[ae][1].type==="listUnordered")if(I[ae][0]==="enter")ee.push(ae);else{const Et=ee.pop();ae=i(I,Et,ae)}for(ae=-1;++ae<I.length;){const Et=t[I[ae][0]];_f.call(Et,I[ae][1].type)&&Et[I[ae][1].type].call(Object.assign({sliceSerialize:I[ae][2].sliceSerialize},Q),I[ae][1])}if(Q.tokenStack.length>0){const Et=Q.tokenStack[Q.tokenStack.length-1];(Et[1]||vd).call(Q,void 0,Et[0])}for(D.position={start:an(I.length>0?I[0][1].start:{line:1,column:1,offset:0}),end:an(I.length>0?I[I.length-2][1].end:{line:1,column:1,offset:0})},ae=-1;++ae<t.transforms.length;)D=t.transforms[ae](D)||D;return D}function i(I,D,Q){let ee=D-1,ae=-1,Et=!1,Mn,Kt,Jr,ei;for(;++ee<=Q;){const lt=I[ee];switch(lt[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{lt[0]==="enter"?ae++:ae--,ei=void 0;break}case"lineEndingBlank":{lt[0]==="enter"&&(Mn&&!ei&&!ae&&!Jr&&(Jr=ee),ei=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:ei=void 0}if(!ae&&lt[0]==="enter"&&lt[1].type==="listItemPrefix"||ae===-1&&lt[0]==="exit"&&(lt[1].type==="listUnordered"||lt[1].type==="listOrdered")){if(Mn){let or=ee;for(Kt=void 0;or--;){const Zt=I[or];if(Zt[1].type==="lineEnding"||Zt[1].type==="lineEndingBlank"){if(Zt[0]==="exit")continue;Kt&&(I[Kt][1].type="lineEndingBlank",Et=!0),Zt[1].type="lineEnding",Kt=or}else if(!(Zt[1].type==="linePrefix"||Zt[1].type==="blockQuotePrefix"||Zt[1].type==="blockQuotePrefixWhitespace"||Zt[1].type==="blockQuoteMarker"||Zt[1].type==="listItemIndent"))break}Jr&&(!Kt||Jr<Kt)&&(Mn._spread=!0),Mn.end=Object.assign({},Kt?I[Kt][1].start:lt[1].end),I.splice(Kt||ee,0,["exit",Mn,lt[2]]),ee++,Q++}if(lt[1].type==="listItemPrefix"){const or={type:"listItem",_spread:!1,start:Object.assign({},lt[1].start),end:void 0};Mn=or,I.splice(ee,0,["enter",or,lt[2]]),ee++,Q++,Jr=void 0,ei=!0}}}return I[D][1]._spread=Et,Q}function o(I,D){return Q;function Q(ee){s.call(this,I(ee),ee),D&&D.call(this,ee)}}function l(){this.stack.push({type:"fragment",children:[]})}function s(I,D,Q){this.stack[this.stack.length-1].children.push(I),this.stack.push(I),this.tokenStack.push([D,Q||void 0]),I.position={start:an(D.start),end:void 0}}function a(I){return D;function D(Q){I&&I.call(this,Q),u.call(this,Q)}}function u(I,D){const Q=this.stack.pop(),ee=this.tokenStack.pop();if(ee)ee[0].type!==I.type&&(D?D.call(this,I,ee[0]):(ee[1]||vd).call(this,I,ee[0]));else throw new Error("Cannot close `"+I.type+"` ("+$i({start:I.start,end:I.end})+"): it’s not open");Q.position.end=an(I.end)}function d(){return Mm(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function h(I){if(this.data.expectingFirstListItemValue){const D=this.stack[this.stack.length-2];D.start=Number.parseInt(this.sliceSerialize(I),10),this.data.expectingFirstListItemValue=void 0}}function f(){const I=this.resume(),D=this.stack[this.stack.length-1];D.lang=I}function v(){const I=this.resume(),D=this.stack[this.stack.length-1];D.meta=I}function x(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function j(){const I=this.resume(),D=this.stack[this.stack.length-1];D.value=I.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function L(){const I=this.resume(),D=this.stack[this.stack.length-1];D.value=I.replace(/(\r?\n|\r)$/g,"")}function g(I){const D=this.resume(),Q=this.stack[this.stack.length-1];Q.label=D,Q.identifier=Rr(this.sliceSerialize(I)).toLowerCase()}function m(){const I=this.resume(),D=this.stack[this.stack.length-1];D.title=I}function k(){const I=this.resume(),D=this.stack[this.stack.length-1];D.url=I}function E(I){const D=this.stack[this.stack.length-1];if(!D.depth){const Q=this.sliceSerialize(I).length;D.depth=Q}}function S(){this.data.setextHeadingSlurpLineEnding=!0}function b(I){const D=this.stack[this.stack.length-1];D.depth=this.sliceSerialize(I).codePointAt(0)===61?1:2}function P(){this.data.setextHeadingSlurpLineEnding=void 0}function A(I){const Q=this.stack[this.stack.length-1].children;let ee=Q[Q.length-1];(!ee||ee.type!=="text")&&(ee=qf(),ee.position={start:an(I.start),end:void 0},Q.push(ee)),this.stack.push(ee)}function R(I){const D=this.stack.pop();D.value+=this.sliceSerialize(I),D.position.end=an(I.end)}function _(I){const D=this.stack[this.stack.length-1];if(this.data.atHardBreak){const Q=D.children[D.children.length-1];Q.position.end=an(I.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(D.type)&&(A.call(this,I),R.call(this,I))}function N(){this.data.atHardBreak=!0}function O(){const I=this.resume(),D=this.stack[this.stack.length-1];D.value=I}function V(){const I=this.resume(),D=this.stack[this.stack.length-1];D.value=I}function U(){const I=this.resume(),D=this.stack[this.stack.length-1];D.value=I}function K(){const I=this.stack[this.stack.length-1];if(this.data.inReference){const D=this.data.referenceType||"shortcut";I.type+="Reference",I.referenceType=D,delete I.url,delete I.title}else delete I.identifier,delete I.label;this.data.referenceType=void 0}function q(){const I=this.stack[this.stack.length-1];if(this.data.inReference){const D=this.data.referenceType||"shortcut";I.type+="Reference",I.referenceType=D,delete I.url,delete I.title}else delete I.identifier,delete I.label;this.data.referenceType=void 0}function T(I){const D=this.sliceSerialize(I),Q=this.stack[this.stack.length-2];Q.label=_x(D),Q.identifier=Rr(D).toLowerCase()}function F(){const I=this.stack[this.stack.length-1],D=this.resume(),Q=this.stack[this.stack.length-1];if(this.data.inReference=!0,Q.type==="link"){const ee=I.children;Q.children=ee}else Q.alt=D}function y(){const I=this.resume(),D=this.stack[this.stack.length-1];D.url=I}function Z(){const I=this.resume(),D=this.stack[this.stack.length-1];D.title=I}function Y(){this.data.inReference=void 0}function C(){this.data.referenceType="collapsed"}function le(I){const D=this.resume(),Q=this.stack[this.stack.length-1];Q.label=D,Q.identifier=Rr(this.sliceSerialize(I)).toLowerCase(),this.data.referenceType="full"}function te(I){this.data.characterReferenceType=I.type}function re(I){const D=this.sliceSerialize(I),Q=this.data.characterReferenceType;let ee;Q?(ee=Cf(D,Q==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):ee=G1(D);const ae=this.stack[this.stack.length-1];ae.value+=ee}function Ue(I){const D=this.stack.pop();D.position.end=an(I.end)}function He(I){R.call(this,I);const D=this.stack[this.stack.length-1];D.url=this.sliceSerialize(I)}function Ve(I){R.call(this,I);const D=this.stack[this.stack.length-1];D.url="mailto:"+this.sliceSerialize(I)}function it(){return{type:"blockquote",children:[]}}function ot(){return{type:"code",lang:null,meta:null,value:""}}function H(){return{type:"inlineCode",value:""}}function Pe(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Wt(){return{type:"emphasis",children:[]}}function bt(){return{type:"heading",depth:0,children:[]}}function sc(){return{type:"break"}}function ac(){return{type:"html",value:""}}function Kf(){return{type:"image",title:null,url:"",alt:null}}function uc(){return{type:"link",title:null,url:"",children:[]}}function cc(I){return{type:"list",ordered:I.type==="listOrdered",start:null,spread:I._spread,children:[]}}function Zf(I){return{type:"listItem",spread:I._spread,checked:null,children:[]}}function Yf(){return{type:"paragraph",children:[]}}function Qf(){return{type:"strong",children:[]}}function qf(){return{type:"text",value:""}}function Gf(){return{type:"thematicBreak"}}}function an(e){return{line:e.line,column:e.column,offset:e.offset}}function Mf(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?Mf(e,r):Ox(e,r)}}function Ox(e,t){let n;for(n in t)if(_f.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function vd(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+$i({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+$i({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+$i({start:t.start,end:t.end})+") is still open")}function Dx(e){const t=this;t.parser=n;function n(r){return Nx(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function Fx(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function Bx(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function Ux(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function Hx(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Vx(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Wx(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Xr(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let l,s=e.footnoteCounts.get(r);s===void 0?(s=0,e.footnoteOrder.push(r),l=e.footnoteOrder.length):l=o+1,s+=1,e.footnoteCounts.set(r,s);const a={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(s>1?"-"+s:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(l)}]};e.patch(t,a);const u={type:"element",tagName:"sup",properties:{},children:[a]};return e.patch(t,u),e.applyData(t,u)}function Kx(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Zx(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Nf(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const l=i[i.length-1];return l&&l.type==="text"?l.value+=r:i.push({type:"text",value:r}),i}function Yx(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Nf(e,t);const i={src:Xr(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function Qx(e,t){const n={src:Xr(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function qx(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function Gx(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Nf(e,t);const i={href:Xr(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function Xx(e,t){const n={href:Xr(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Jx(e,t,n){const r=e.all(t),i=n?ey(n):Af(t),o={},l=[];if(typeof t.checked=="boolean"){const d=r[0];let p;d&&d.type==="element"&&d.tagName==="p"?p=d:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let s=-1;for(;++s<r.length;){const d=r[s];(i||s!==0||d.type!=="element"||d.tagName!=="p")&&l.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?l.push(...d.children):l.push(d)}const a=r[r.length-1];a&&(i||a.type!=="element"||a.tagName!=="p")&&l.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:o,children:l};return e.patch(t,u),e.applyData(t,u)}function ey(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Af(n[r])}return t}function Af(e){const t=e.spread;return t??e.children.length>1}function ty(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const l=r[i];if(l.type==="element"&&l.tagName==="li"&&l.properties&&Array.isArray(l.properties.className)&&l.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function ny(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function ry(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function iy(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function oy(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const l={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],l),i.push(l)}if(n.length>0){const l={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},s=Z1(t.children[1]),a=gf(t.children[t.children.length-1]);s&&a&&(l.position={start:s,end:a}),i.push(l)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function ly(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",l=n&&n.type==="table"?n.align:void 0,s=l?l.length:t.children.length;let a=-1;const u=[];for(;++a<s;){const p=t.children[a],h={},f=l?l[a]:void 0;f&&(h.align=f);let v={type:"element",tagName:o,properties:h,children:[]};p&&(v.children=e.all(p),e.patch(p,v),v=e.applyData(p,v)),u.push(v)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function sy(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const wd=9,kd=32;function ay(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(Sd(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(Sd(t.slice(i),i>0,!1)),o.join("")}function Sd(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===wd||o===kd;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===wd||o===kd;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function uy(e,t){const n={type:"text",value:ay(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function cy(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const dy={blockquote:Fx,break:Bx,code:Ux,delete:Hx,emphasis:Vx,footnoteReference:Wx,heading:Kx,html:Zx,imageReference:Yx,image:Qx,inlineCode:qx,linkReference:Gx,link:Xx,listItem:Jx,list:ty,paragraph:ny,root:ry,strong:iy,table:oy,tableCell:sy,tableRow:ly,text:uy,thematicBreak:cy,toml:Eo,yaml:Eo,definition:Eo,footnoteDefinition:Eo};function Eo(){}const Of=-1,ms=0,Ii=1,Fl=2,ec=3,tc=4,nc=5,rc=6,Df=7,Ff=8,Cd=typeof self=="object"?self:globalThis,py=(e,t)=>{const n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,l]=t[i];switch(o){case ms:case Of:return n(l,i);case Ii:{const s=n([],i);for(const a of l)s.push(r(a));return s}case Fl:{const s=n({},i);for(const[a,u]of l)s[r(a)]=r(u);return s}case ec:return n(new Date(l),i);case tc:{const{source:s,flags:a}=l;return n(new RegExp(s,a),i)}case nc:{const s=n(new Map,i);for(const[a,u]of l)s.set(r(a),r(u));return s}case rc:{const s=n(new Set,i);for(const a of l)s.add(r(a));return s}case Df:{const{name:s,message:a}=l;return n(new Cd[s](a),i)}case Ff:return n(BigInt(l),i);case"BigInt":return n(Object(BigInt(l)),i);case"ArrayBuffer":return n(new Uint8Array(l).buffer,l);case"DataView":{const{buffer:s}=new Uint8Array(l);return n(new DataView(s),l)}}return n(new Cd[o](l),i)};return r},bd=e=>py(new Map,e)(0),ar="",{toString:fy}={},{keys:hy}=Object,ci=e=>{const t=typeof e;if(t!=="object"||!e)return[ms,t];const n=fy.call(e).slice(8,-1);switch(n){case"Array":return[Ii,ar];case"Object":return[Fl,ar];case"Date":return[ec,ar];case"RegExp":return[tc,ar];case"Map":return[nc,ar];case"Set":return[rc,ar];case"DataView":return[Ii,n]}return n.includes("Array")?[Ii,n]:n.includes("Error")?[Df,n]:[Fl,n]},jo=([e,t])=>e===ms&&(t==="function"||t==="symbol"),Ly=(e,t,n,r)=>{const i=(l,s)=>{const a=r.push(l)-1;return n.set(s,a),a},o=l=>{if(n.has(l))return n.get(l);let[s,a]=ci(l);switch(s){case ms:{let d=l;switch(a){case"bigint":s=Ff,d=l.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+a);d=null;break;case"undefined":return i([Of],l)}return i([s,d],l)}case Ii:{if(a){let h=l;return a==="DataView"?h=new Uint8Array(l.buffer):a==="ArrayBuffer"&&(h=new Uint8Array(l)),i([a,[...h]],l)}const d=[],p=i([s,d],l);for(const h of l)d.push(o(h));return p}case Fl:{if(a)switch(a){case"BigInt":return i([a,l.toString()],l);case"Boolean":case"Number":case"String":return i([a,l.valueOf()],l)}if(t&&"toJSON"in l)return o(l.toJSON());const d=[],p=i([s,d],l);for(const h of hy(l))(e||!jo(ci(l[h])))&&d.push([o(h),o(l[h])]);return p}case ec:return i([s,l.toISOString()],l);case tc:{const{source:d,flags:p}=l;return i([s,{source:d,flags:p}],l)}case nc:{const d=[],p=i([s,d],l);for(const[h,f]of l)(e||!(jo(ci(h))||jo(ci(f))))&&d.push([o(h),o(f)]);return p}case rc:{const d=[],p=i([s,d],l);for(const h of l)(e||!jo(ci(h)))&&d.push(o(h));return p}}const{message:u}=l;return i([s,{name:a,message:u}],l)};return o},Ed=(e,{json:t,lossy:n}={})=>{const r=[];return Ly(!(t||n),!!t,new Map,r)(e),r},Bl=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?bd(Ed(e,t)):structuredClone(e):(e,t)=>bd(Ed(e,t));function my(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function gy(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function xy(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||my,r=e.options.footnoteBackLabel||gy,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",l=e.options.footnoteLabelProperties||{className:["sr-only"]},s=[];let a=-1;for(;++a<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[a]);if(!u)continue;const d=e.all(u),p=String(u.identifier).toUpperCase(),h=Xr(p.toLowerCase());let f=0;const v=[],x=e.footnoteCounts.get(p);for(;x!==void 0&&++f<=x;){v.length>0&&v.push({type:"text",value:" "});let g=typeof n=="string"?n:n(a,f);typeof g=="string"&&(g={type:"text",value:g}),v.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+h+(f>1?"-"+f:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(a,f),className:["data-footnote-backref"]},children:Array.isArray(g)?g:[g]})}const j=d[d.length-1];if(j&&j.type==="element"&&j.tagName==="p"){const g=j.children[j.children.length-1];g&&g.type==="text"?g.value+=" ":j.children.push({type:"text",value:" "}),j.children.push(...v)}else d.push(...v);const L={type:"element",tagName:"li",properties:{id:t+"fn-"+h},children:e.wrap(d,!0)};e.patch(u,L),s.push(L)}if(s.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...Bl(l),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(s,!0)},{type:"text",value:`
`}]}}const Bf=function(e){if(e==null)return ky;if(typeof e=="function")return gs(e);if(typeof e=="object")return Array.isArray(e)?yy(e):vy(e);if(typeof e=="string")return wy(e);throw new Error("Expected function, string, or object as test")};function yy(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Bf(e[n]);return gs(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return!0;return!1}}function vy(e){const t=e;return gs(n);function n(r){const i=r;let o;for(o in e)if(i[o]!==t[o])return!1;return!0}}function wy(e){return gs(t);function t(n){return n&&n.type===e}}function gs(e){return t;function t(n,r,i){return!!(Sy(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function ky(){return!0}function Sy(e){return e!==null&&typeof e=="object"&&"type"in e}const Uf=[],Cy=!0,jd=!1,by="skip";function Ey(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const o=Bf(i),l=r?-1:1;s(e,void 0,[])();function s(a,u,d){const p=a&&typeof a=="object"?a:{};if(typeof p.type=="string"){const f=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(h,"name",{value:"node ("+(a.type+(f?"<"+f+">":""))+")"})}return h;function h(){let f=Uf,v,x,j;if((!t||o(a,u,d[d.length-1]||void 0))&&(f=jy(n(a,d)),f[0]===jd))return f;if("children"in a&&a.children){const L=a;if(L.children&&f[0]!==by)for(x=(r?L.children.length:-1)+l,j=d.concat(L);x>-1&&x<L.children.length;){const g=L.children[x];if(v=s(g,x,j)(),v[0]===jd)return v;x=typeof v[1]=="number"?v[1]:x+l}}return f}}}function jy(e){return Array.isArray(e)?e:typeof e=="number"?[Cy,e]:e==null?Uf:[e]}function Hf(e,t,n,r){let i,o,l;typeof t=="function"&&typeof n!="function"?(o=void 0,l=t,i=n):(o=t,l=n,i=r),Ey(e,o,s,i);function s(a,u){const d=u[u.length-1],p=d?d.children.indexOf(a):void 0;return l(a,p,d)}}const _u={}.hasOwnProperty,$y={};function Py(e,t){const n=t||$y,r=new Map,i=new Map,o=new Map,l={...dy,...n.handlers},s={all:u,applyData:Ry,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:l,one:a,options:n,patch:Iy,wrap:zy};return Hf(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const p=d.type==="definition"?r:i,h=String(d.identifier).toUpperCase();p.has(h)||p.set(h,d)}}),s;function a(d,p){const h=d.type,f=s.handlers[h];if(_u.call(s.handlers,h)&&f)return f(s,d,p);if(s.options.passThrough&&s.options.passThrough.includes(h)){if("children"in d){const{children:x,...j}=d,L=Bl(j);return L.children=s.all(d),L}return Bl(d)}return(s.options.unknownHandler||Ty)(s,d,p)}function u(d){const p=[];if("children"in d){const h=d.children;let f=-1;for(;++f<h.length;){const v=s.one(h[f],d);if(v){if(f&&h[f-1].type==="break"&&(!Array.isArray(v)&&v.type==="text"&&(v.value=$d(v.value)),!Array.isArray(v)&&v.type==="element")){const x=v.children[0];x&&x.type==="text"&&(x.value=$d(x.value))}Array.isArray(v)?p.push(...v):p.push(v)}}}return p}}function Iy(e,t){e.position&&(t.position=fm(e))}function Ry(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const l="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:l}}n.type==="element"&&o&&Object.assign(n.properties,Bl(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function Ty(e,t){const n=t.data||{},r="value"in t&&!(_u.call(n,"hProperties")||_u.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function zy(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function $d(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Pd(e,t){const n=Py(e,t),r=n.one(e,void 0),i=xy(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function _y(e,t){return e&&"run"in e?async function(n,r){const i=Pd(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Pd(n,{file:r,...e||t})}}function Id(e){if(e)throw e}var nl=Object.prototype.hasOwnProperty,Vf=Object.prototype.toString,Rd=Object.defineProperty,Td=Object.getOwnPropertyDescriptor,zd=function(t){return typeof Array.isArray=="function"?Array.isArray(t):Vf.call(t)==="[object Array]"},_d=function(t){if(!t||Vf.call(t)!=="[object Object]")return!1;var n=nl.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&nl.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||nl.call(t,i)},Md=function(t,n){Rd&&n.name==="__proto__"?Rd(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Nd=function(t,n){if(n==="__proto__")if(nl.call(t,n)){if(Td)return Td(t,n).value}else return;return t[n]},My=function e(){var t,n,r,i,o,l,s=arguments[0],a=1,u=arguments.length,d=!1;for(typeof s=="boolean"&&(d=s,s=arguments[1]||{},a=2),(s==null||typeof s!="object"&&typeof s!="function")&&(s={});a<u;++a)if(t=arguments[a],t!=null)for(n in t)r=Nd(s,n),i=Nd(t,n),s!==i&&(d&&i&&(_d(i)||(o=zd(i)))?(o?(o=!1,l=r&&zd(r)?r:[]):l=r&&_d(r)?r:{},Md(s,{name:n,newValue:e(d,l,i)})):typeof i<"u"&&Md(s,{name:n,newValue:i}));return s};const ra=Ul(My);function Mu(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Ny(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const l=i.pop();if(typeof l!="function")throw new TypeError("Expected function as last argument, not "+l);s(null,...i);function s(a,...u){const d=e[++o];let p=-1;if(a){l(a);return}for(;++p<i.length;)(u[p]===null||u[p]===void 0)&&(u[p]=i[p]);i=u,d?Ay(d,s)(...u):l(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function Ay(e,t){let n;return r;function r(...l){const s=e.length>l.length;let a;s&&l.push(i);try{a=e.apply(this,l)}catch(u){const d=u;if(s&&n)throw d;return i(d)}s||(a&&a.then&&typeof a.then=="function"?a.then(o,i):a instanceof Error?i(a):o(a))}function i(l,...s){n||(n=!0,t(l,...s))}function o(l){i(null,l)}}const Ot={basename:Oy,dirname:Dy,extname:Fy,join:By,sep:"/"};function Oy(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');so(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let l=-1,s=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else l<0&&(o=!0,l=i+1),s>-1&&(e.codePointAt(i)===t.codePointAt(s--)?s<0&&(r=i):(s=-1,r=l));return n===r?r=l:r<0&&(r=e.length),e.slice(n,r)}function Dy(e){if(so(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function Fy(e){so(e);let t=e.length,n=-1,r=0,i=-1,o=0,l;for(;t--;){const s=e.codePointAt(t);if(s===47){if(l){r=t+1;break}continue}n<0&&(l=!0,n=t+1),s===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function By(...e){let t=-1,n;for(;++t<e.length;)so(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":Uy(n)}function Uy(e){so(e);const t=e.codePointAt(0)===47;let n=Hy(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function Hy(e,t){let n="",r=0,i=-1,o=0,l=-1,s,a;for(;++l<=e.length;){if(l<e.length)s=e.codePointAt(l);else{if(s===47)break;s=47}if(s===47){if(!(i===l-1||o===1))if(i!==l-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(a=n.lastIndexOf("/"),a!==n.length-1){a<0?(n="",r=0):(n=n.slice(0,a),r=n.length-1-n.lastIndexOf("/")),i=l,o=0;continue}}else if(n.length>0){n="",r=0,i=l,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,l):n=e.slice(i+1,l),r=l-i-1;i=l,o=0}else s===46&&o>-1?o++:o=-1}return n}function so(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const Vy={cwd:Wy};function Wy(){return"/"}function Nu(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function Ky(e){if(typeof e=="string")e=new URL(e);else if(!Nu(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return Zy(e)}function Zy(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const ia=["history","path","basename","stem","extname","dirname"];class Wf{constructor(t){let n;t?Nu(t)?n={path:t}:typeof t=="string"||Yy(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":Vy.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<ia.length;){const o=ia[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)ia.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?Ot.basename(this.path):void 0}set basename(t){la(t,"basename"),oa(t,"basename"),this.path=Ot.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?Ot.dirname(this.path):void 0}set dirname(t){Ad(this.basename,"dirname"),this.path=Ot.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?Ot.extname(this.path):void 0}set extname(t){if(oa(t,"extname"),Ad(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Ot.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Nu(t)&&(t=Ky(t)),la(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?Ot.basename(this.path,this.extname):void 0}set stem(t){la(t,"stem"),oa(t,"stem"),this.path=Ot.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new Be(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function oa(e,t){if(e&&e.includes(Ot.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Ot.sep+"`")}function la(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Ad(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function Yy(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Qy=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},qy={}.hasOwnProperty;class ic extends Qy{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Ny()}copy(){const t=new ic;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(ra(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(ua("data",this.frozen),this.namespace[t]=n,this):qy.call(this.namespace,t)&&this.namespace[t]||void 0:t?(ua("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=$o(t),r=this.parser||this.Parser;return sa("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),sa("process",this.parser||this.Parser),aa("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,l){const s=$o(t),a=r.parse(s);r.run(a,s,function(d,p,h){if(d||!p||!h)return u(d);const f=p,v=r.stringify(f,h);Jy(v)?h.value=v:h.result=v,u(d,h)});function u(d,p){d||!p?l(d):o?o(p):n(void 0,p)}}}processSync(t){let n=!1,r;return this.freeze(),sa("processSync",this.parser||this.Parser),aa("processSync",this.compiler||this.Compiler),this.process(t,i),Dd("processSync","process",n),r;function i(o,l){n=!0,Id(o),r=l}}run(t,n,r){Od(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(l,s){const a=$o(n);i.run(t,a,u);function u(d,p,h){const f=p||t;d?s(d):l?l(f):r(void 0,f,h)}}}runSync(t,n){let r=!1,i;return this.run(t,n,o),Dd("runSync","run",r),i;function o(l,s){Id(l),i=s,r=!0}}stringify(t,n){this.freeze();const r=$o(n),i=this.compiler||this.Compiler;return aa("stringify",i),Od(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(ua("use",this.frozen),t!=null)if(typeof t=="function")a(t,n);else if(typeof t=="object")Array.isArray(t)?s(t):l(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(u){if(typeof u=="function")a(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...p]=u;a(d,p)}else l(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function l(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");s(u.plugins),u.settings&&(i.settings=ra(!0,i.settings,u.settings))}function s(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const p=u[d];o(p)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function a(u,d){let p=-1,h=-1;for(;++p<r.length;)if(r[p][0]===u){h=p;break}if(h===-1)r.push([u,...d]);else if(d.length>0){let[f,...v]=d;const x=r[h][1];Mu(x)&&Mu(f)&&(f=ra(!0,x,f)),r[h]=[u,f,...v]}}}}const Gy=new ic().freeze();function sa(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function aa(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function ua(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Od(e){if(!Mu(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Dd(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function $o(e){return Xy(e)?e:new Wf(e)}function Xy(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function Jy(e){return typeof e=="string"||ev(e)}function ev(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const tv="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Fd=[],Bd={allowDangerousHtml:!0},nv=/^(https?|ircs?|mailto|xmpp)$/i,rv=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Po(e){const t=iv(e),n=ov(e);return lv(t.runSync(t.parse(n),n),e)}function iv(e){const t=e.rehypePlugins||Fd,n=e.remarkPlugins||Fd,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Bd}:Bd;return Gy().use(Dx).use(n).use(_y,r).use(t)}function ov(e){const t=e.children||"",n=new Wf;return typeof t=="string"&&(n.value=t),n}function lv(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,o=t.disallowedElements,l=t.skipHtml,s=t.unwrapDisallowed,a=t.urlTransform||sv;for(const d of rv)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+tv+d.id,void 0);return Hf(e,u),xm(e,{Fragment:c.Fragment,components:i,ignoreInvalidStyle:!0,jsx:c.jsx,jsxs:c.jsxs,passKeys:!0,passNode:!0});function u(d,p,h){if(d.type==="raw"&&h&&typeof p=="number")return l?h.children.splice(p,1):h.children[p]={type:"text",value:d.value},p;if(d.type==="element"){let f;for(f in ea)if(Object.hasOwn(ea,f)&&Object.hasOwn(d.properties,f)){const v=d.properties[f],x=ea[f];(x===null||x.includes(d.tagName))&&(d.properties[f]=a(String(v||""),f,d))}}if(d.type==="element"){let f=n?!n.includes(d.tagName):o?o.includes(d.tagName):!1;if(!f&&r&&typeof p=="number"&&(f=!r(d,p,h)),f&&h&&typeof p=="number")return s&&d.children?h.children.splice(p,1,...d.children):h.children.splice(p,1),p}}}function sv(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||nv.test(e.slice(0,t))?e:""}const Ud=w.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0 calc(80px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};

  @media (max-width: 960px) {
    padding: 0 0 calc(72px + env(safe-area-inset-bottom, 0px));
  }
`,Hd=w.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  padding-top: calc(16px + env(safe-area-inset-top, 0px));
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.95);
  z-index: 10;
`,Vd=w.button`
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
`,Wd=w.h1`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
`,av=w.div`
  width: 100%;
  height: 280px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,uv=w.div`
  padding: 24px 20px;
`,cv=w.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
`,dv=w.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  color: ${({theme:e})=>e.colors.text900};
  flex: 1;
  min-width: 0;
`,pv=w.div`
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
`,fv=w.p`
  font-size: 1.05rem;
  line-height: 1.6;
  color: ${({theme:e})=>e.colors.text700};
  margin: 0 0 24px;
`,hv=w.div``,Io=w.div`
  border-bottom: 1px solid ${({theme:e})=>e.colors.border200};

  &:last-child {
    border-bottom: none;
  }
`,Ro=w.button`
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
`,To=w.div`
  display: grid;
  grid-template-rows: ${({$open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.3s ease;
  overflow: hidden;
`,zo=w.div`
  overflow: hidden;
`,_o=w.div`
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
`,Lv=w.section`
  margin-top: 28px;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 16px;
    font-weight: 600;
  }
`,mv=w.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`,gv=w.div`
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
`,xv=w.a`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: block;
  padding: 16px 20px;
  padding-bottom: calc(16px + env(safe-area-inset-bottom, 0px));
  background: ${({theme:e})=>e.colors.primary600};
  color: #fff;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s ease;
  z-index: 20;

  &:hover {
    background: ${({theme:e})=>e.colors.primary700};
    color: #fff;
  }
`,yv=w.section`
  margin-top: 32px;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 12px;
  }
`,vv=w.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  flex-wrap: wrap;
`,wv=w.button`
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
`,kv=w.span`
  flex: 1;
  min-width: 0;
`,Sv=w.a`
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
`,Cv=w.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  pointer-events: none;
`,bv=w.div`
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
`,Ev=w.div`
  width: 100%;
  min-height: 240px;
  height: 240px;
  border-radius: ${({theme:e})=>e.radii.lg};
  background: ${({theme:e})=>e.colors.bg100};
  overflow: hidden;
  position: relative;
`,jv=w.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  text-align: center;
  background: linear-gradient(180deg, ${({theme:e})=>e.colors.primary50} 0%, ${({theme:e})=>e.colors.warmCream} 100%);
`,$v=w.div`
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
`,Pv=w.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.primary400};
  margin: 0 0 24px;
  line-height: 1.6;
`,Iv=w.button`
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
`,Rv={wifi:"Wi-Fi",parking:"Parking",tea:"Tea"},Tv=["wifi","parking","tea"],zv=()=>{var v;const e=zn(),{placeId:t}=Up(),n=t?qp(t):void 0;n&&er(n.regionId);const r=$.useRef(null),i=(n==null?void 0:n.facilities)??Tv,o=n==null?void 0:n.detailSections.find(x=>x.title.toLowerCase().includes("프로그램")),l=n==null?void 0:n.detailSections.find(x=>x.title.toLowerCase().includes("일정")),s=n==null?void 0:n.detailSections.find(x=>x.title.toLowerCase().includes("유의사항")),a=n==null?void 0:n.detailSections.find(x=>x.title.toLowerCase().includes("준비물")),[u,d]=$.useState(null),[p,h]=$.useState(!1),f=()=>{n&&navigator.clipboard.writeText(n.address).then(()=>{h(!0),setTimeout(()=>h(!1),2e3)})};return $.useEffect(()=>{if(!n)return;const x="z2xjrdi0i5",j=()=>{var _,N;const E=document.getElementById("naver-map");if(!E||!((N=(_=window.naver)==null?void 0:_.maps)!=null&&N.Service))return!1;const S=window.naver,b=new S.maps.LatLng(37.5665,126.978),P=new S.maps.Map(E,{center:b,zoom:17,mapTypeControl:!0}),A=(O,V)=>{const U=new S.maps.LatLng(O,V);P.setCenter(U),new S.maps.Marker({position:U,map:P})},R=(O,V)=>Number.isFinite(O)&&Number.isFinite(V);return S.maps.Service.geocode({address:n.address},(O,V)=>{var Z,Y,C,le;if(O==="ERROR"){console.warn(`[지도] 주소 변환 실패 - "${n.name}" (${n.address}): status=${O}`),A(37.5665,126.978);return}const U=V,K=te=>typeof te=="number"?te:parseFloat(String(te??""));let q=null,T=null;const F=((Z=U==null?void 0:U.result)==null?void 0:Z.items)??[],y=F.find(te=>te.isRoadAddress)??F[0];if(y!=null&&y.point&&(q=K(y.point.y),T=K(y.point.x)),(q==null||T==null||!R(q,T))&&F.length>0){const te=F[0];te!=null&&te.point&&(q=K(te.point.y),T=K(te.point.x))}if(q==null||T==null||!R(q,T)){const te=((C=(Y=U==null?void 0:U.v2)==null?void 0:Y.addresses)==null?void 0:C[0])??((le=U==null?void 0:U.addresses)==null?void 0:le[0]);te&&(q=K(te.y),T=K(te.x))}q!=null&&T!=null&&R(q,T)?A(q,T):A(37.5665,126.978)}),!0},L=()=>{var E;return(E=window.naver)!=null&&E.maps&&window.naver.maps.Service?(j(),!0):!1};if(L())return;if(document.querySelector('script[src*="oapi.map.naver.com"]')){const E=setInterval(()=>{L()&&clearInterval(E)},100),S=setTimeout(()=>clearInterval(E),1e4);return()=>{clearInterval(E),clearTimeout(S)}}const m="onNaverMapsReady";window[m]=()=>{if(L())return;const E=setInterval(()=>{L()&&clearInterval(E)},100)};const k=document.createElement("script");return k.type="text/javascript",k.src=`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${x}&submodules=geocoder&callback=${m}`,k.async=!0,document.head.appendChild(k),()=>{delete window[m]}},[n]),n?c.jsxs(Ud,{children:[p&&c.jsx(Cv,{children:c.jsx(bv,{children:"주소를 복사했습니다"})}),c.jsxs(Hd,{children:[c.jsx(Vd,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),c.jsx(Wd,{children:"상세 페이지"})]}),c.jsx(av,{children:c.jsx("img",{src:n.thumbnailUrl,alt:`${n.name} 대표 이미지`})}),c.jsxs(uv,{children:[c.jsxs(cv,{children:[c.jsx(dv,{children:n.name}),c.jsx(F1,{placeId:n.id})]}),c.jsxs(pv,{children:[c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),c.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),n.address]}),c.jsx(fv,{children:n.shortDescription}),c.jsxs(hv,{children:[o&&c.jsxs(Io,{children:[c.jsxs(Ro,{type:"button",$open:u==="program",onClick:()=>d(u==="program"?null:"program"),children:[c.jsx("span",{children:"프로그램"}),c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M9 18l6-6-6-6"})})]}),c.jsx(To,{$open:u==="program",children:c.jsx(zo,{children:c.jsx(_o,{children:c.jsx(Po,{children:o.body})})})})]}),c.jsxs(Io,{children:[c.jsxs(Ro,{type:"button",$open:u==="schedule",onClick:()=>d(u==="schedule"?null:"schedule"),children:[c.jsx("span",{children:"일정"}),c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M9 18l6-6-6-6"})})]}),c.jsx(To,{$open:u==="schedule",children:c.jsx(zo,{children:c.jsx(_o,{children:l!=null&&l.body?c.jsx(Po,{children:l.body}):c.jsxs(c.Fragment,{children:["소요 시간: ",n.duration,((v=n.organization)==null?void 0:v.name)&&c.jsxs("p",{style:{marginTop:8,marginBottom:0},children:["운영: ",n.organization.name]})]})})})})]}),c.jsxs(Io,{children:[c.jsxs(Ro,{type:"button",$open:u==="prep",onClick:()=>d(u==="prep"?null:"prep"),children:[c.jsx("span",{children:"준비물"}),c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M9 18l6-6-6-6"})})]}),c.jsx(To,{$open:u==="prep",children:c.jsx(zo,{children:c.jsx(_o,{children:a!=null&&a.body?c.jsx(Po,{children:a.body}):"등록된 준비물이 없습니다."})})})]}),c.jsxs(Io,{children:[c.jsxs(Ro,{type:"button",$open:u==="notice",onClick:()=>d(u==="notice"?null:"notice"),children:[c.jsx("span",{children:"유의사항"}),c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M9 18l6-6-6-6"})})]}),c.jsx(To,{$open:u==="notice",children:c.jsx(zo,{children:c.jsx(_o,{children:s!=null&&s.body?c.jsx(Po,{children:s.body}):"등록된 유의사항이 없습니다."})})})]})]}),c.jsxs(Lv,{children:[c.jsx("h3",{children:"시설 정보"}),c.jsx(mv,{children:i.map(x=>c.jsxs(gv,{children:[x==="wifi"&&c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("path",{d:"M5 12.55a11 11 0 0 1 14.08 0"}),c.jsx("path",{d:"M1.42 9a16 16 0 0 1 21.16 0"}),c.jsx("path",{d:"M8.53 16.11a6 6 0 0 1 6.95 0"}),c.jsx("line",{x1:"12",y1:"20",x2:"12.01",y2:"20"})]}),x==="parking"&&c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),c.jsx("path",{d:"M3 9h18M9 21V9"})]}),x==="tea"&&c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("path",{d:"M18 8h1a4 4 0 0 1 0 8h-1"}),c.jsx("path",{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"}),c.jsx("line",{x1:"6",y1:"1",x2:"6",y2:"4"}),c.jsx("line",{x1:"10",y1:"1",x2:"10",y2:"4"}),c.jsx("line",{x1:"14",y1:"1",x2:"14",y2:"4"})]}),c.jsx("span",{children:Rv[x]??x})]},x))})]}),c.jsxs(yv,{children:[c.jsx("h3",{children:"위치"}),c.jsxs(vv,{children:[c.jsxs(wv,{type:"button",onClick:f,title:"클릭하여 주소 복사",children:[c.jsx(kv,{children:n.address}),c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),c.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})]}),c.jsxs(Sv,{href:`https://map.naver.com/v5/search/${encodeURIComponent(n.address)}`,target:"_blank",rel:"noreferrer noopener",children:[c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),c.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"안내"]})]}),c.jsx(Ev,{id:"naver-map",ref:r})]})]}),c.jsx(xv,{href:n.externalLink,target:"_blank",rel:"noreferrer",children:"예약하기"})]}):c.jsxs(Ud,{children:[c.jsxs(Hd,{children:[c.jsx(Vd,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:c.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),c.jsx(Wd,{children:"상세 페이지"})]}),c.jsxs(jv,{children:[c.jsx($v,{children:"404"}),c.jsxs(Pv,{children:["해당 명상센터를 찾지 못했어요.",c.jsx("br",{}),"URL을 확인하거나 메인에서 다시 탐색해주세요."]}),c.jsxs(Iv,{type:"button",onClick:()=>e("/meditation"),children:[c.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),c.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),"메인으로 돌아가기"]})]})]})},ca=[{id:"notice-1",category:"공지사항",title:"[중요] 서버 점검 및 재발방지 안내",date:"2026-01-18",summary:"서비스 안정화를 위한 점검이 예정되어 있습니다.",details:{paragraphs:["안녕하세요, 전국 힐링명상지도입니다.","보다 안정적인 서비스를 제공하기 위해 정기 점검을 진행합니다.","점검 시간에는 일부 서비스 이용이 제한될 수 있으니 양해 부탁드립니다."],bullets:["점검 일시: 2026년 1월 25일(일) 02:00 ~ 05:00","점검 내용: 서버 안정화 및 보안 업데이트","영향 범위: 검색/상세 페이지 접속 지연"],footer:"전국 힐링명상지도 드림"}},{id:"notice-2",category:"공지사항",title:"제주 · 강원 신규 명상센터 추가",date:"2026-01-10",summary:"신규 지역 명상센터가 업데이트되었습니다.",details:{paragraphs:["제주, 강원 지역의 새로운 명상센터가 추가되었습니다.","지역별 지도에서 확인하거나 명상센터 검색을 이용해보세요."],bullets:["제주 지역 신규 명상센터 6곳 추가","강원 지역 신규 명상센터 4곳 추가"],footer:"전국 힐링명상지도 드림"}},{id:"notice-3",category:"공지사항",title:"검색 경험 개선 업데이트",date:"2025-12-28",summary:"검색 정확도와 속도가 개선되었습니다.",details:{paragraphs:["검색 필터링 로직을 개선해 더 정확한 결과를 제공합니다.","추천 태그 기반 검색도 함께 적용됩니다."],bullets:["키워드 매칭 정확도 향상","검색 응답 속도 개선"],footer:"전국 힐링명상지도 드림"}},{id:"notice-4",category:"공지사항",title:"연말 운영시간 안내",date:"2025-12-20",summary:"연말 연휴 고객센터 운영시간을 안내드립니다.",details:{paragraphs:["연말 연휴 기간 고객센터 운영시간이 조정됩니다.","문의 사항은 1:1 문의를 이용해주세요."],bullets:["12/31: 09:00~14:00","01/01: 휴무"],footer:"전국 힐링명상지도 드림"}},{id:"notice-5",category:"공지사항",title:"프로필 즐겨찾기 기능 오픈",date:"2025-12-05",summary:"즐겨찾기 기능이 새롭게 추가되었습니다.",details:{paragraphs:["자주 찾는 명상센터를 저장해 빠르게 접근할 수 있어요.","상세 페이지의 ‘즐겨찾기’ 버튼을 눌러보세요."],bullets:["명상센터 즐겨찾기 추가","내 즐겨찾기 목록 제공"],footer:"전국 힐링명상지도 드림"}},{id:"notice-6",category:"공지사항",title:"지도 렌더링 성능 개선",date:"2025-11-23",summary:"지도 로딩 속도가 향상되었습니다.",details:{paragraphs:["지도 렌더링 최적화를 통해 로딩 시간이 감소했습니다.","모바일 환경에서도 부드럽게 동작합니다."],bullets:["지도 로딩 20% 개선","모바일 스크롤 최적화"],footer:"전국 힐링명상지도 드림"}},{id:"notice-7",category:"공지사항",title:"태그 필터 업데이트 안내",date:"2025-11-12",summary:"태그 필터가 더 세분화되었습니다.",details:{paragraphs:["태그 필터가 세분화되어 더 정확한 탐색이 가능합니다.","‘명상 유형’ 태그가 새로 추가되었습니다."],bullets:["명상 유형 태그 추가","인기 태그 자동 추천"],footer:"전국 힐링명상지도 드림"}},{id:"notice-8",category:"공지사항",title:"개인정보 처리방침 개정",date:"2025-10-30",summary:"개인정보 처리방침이 개정됩니다.",details:{paragraphs:["관련 법령 변경에 따라 개인정보 처리방침을 개정합니다.","자세한 내용은 서비스 소개 페이지에서 확인해주세요."],bullets:["개정 시행일: 2025-11-05","주요 변경사항: 데이터 보관 정책"],footer:"전국 힐링명상지도 드림"}},{id:"notice-9",category:"공지사항",title:"명상센터 데이터 정비 안내",date:"2025-10-15",summary:"일부 명상센터 정보가 업데이트됩니다.",details:{paragraphs:["보다 정확한 정보를 위해 명상센터 데이터를 정비합니다.","기간 중 일부 정보가 일시적으로 변경될 수 있습니다."],bullets:["정비 기간: 2025-10-16 ~ 2025-10-20","대상: 지역/태그/운영 정보"],footer:"전국 힐링명상지도 드림"}}],_v=w.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 24px 20px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};

  @media (max-width: 960px) {
    padding: 20px 14px calc(48px + env(safe-area-inset-bottom, 0px));
  }
`,Mv=w.h1`
  font-size: 2.4rem;
  margin-bottom: 12px;
`,Nv=w.p`
  font-size: 1.2rem;
  color: ${({theme:e})=>e.colors.text700};
`,Av=w.form`
  margin: 24px 0;
  border: 1px solid ${({theme:e})=>e.colors.primary300};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 16px;
  display: grid;
  gap: 8px;
`,Ov=w.label`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text700};
`,Dv=w.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
`,Fv=w.input`
  border: 1px solid ${({theme:e})=>e.colors.border200};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: 10px 12px;
  font-size: 1.1rem;
`,Bv=w.button`
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
`,Uv=w.div`
  display: grid;
  gap: 12px;
`,Hv=w.button`
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
`,Vv=w.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: center;
`,Wv=w.span`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.primary700};
  font-weight: 600;
`,Kv=w.span`
  font-size: 1.2rem;
  font-weight: 600;
`,Zv=w.span`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.text700};
`,Yv=w.div`
  border-top: 1px solid ${({theme:e})=>e.colors.border200};
  padding-top: 12px;
  display: grid;
  gap: 8px;
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.6;
`,Qv=w.ul`
  padding-left: 18px;
  display: grid;
  gap: 6px;
`,qv=w.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 8px;
`,Gv=w.button`
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
`,Xv=w.div`
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
`,Jv=w.div`
  margin-top: 20px;
  display: flex;
  gap: 8px;
  justify-content: center;
`,ew=w.button`
  border: 1px solid ${({theme:e})=>e.colors.border200};
  background: ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.white};
  color: ${({$active:e})=>e?"#fff":"inherit"};
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
`,tw=()=>{var m;const[e,t]=$.useState(""),[n,r]=$.useState(((m=ca[0])==null?void 0:m.id)??null),[i,o]=$.useState(1),[l,s]=$.useState(null),[a,u]=$.useState("ko-KR"),[d,p]=$.useState(!1),h=6,f=$.useCallback((k,E)=>{if(!("speechSynthesis"in window)){alert("이 브라우저는 음성 읽기를 지원하지 않습니다.");return}window.speechSynthesis.cancel();const S=window.speechSynthesis.getVoices(),b=a.split("-")[0],P=S.filter(O=>O.lang.startsWith(b)),A=P.filter(O=>O.localService),R=P.filter(O=>!O.localService),_=d&&R.length?R[0]:A[0]??P[0],N=new SpeechSynthesisUtterance(k);N.lang=a,N.rate=.95,_&&(N.voice=_),N.onstart=()=>s(E),N.onend=()=>s(null),N.onerror=O=>{s(null),console.warn("TTS error:",O)},window.speechSynthesis.speak(N)},[a,d]);$.useEffect(()=>{if(!("speechSynthesis"in window))return;const k=()=>window.speechSynthesis.getVoices();return window.speechSynthesis.onvoiceschanged=k,k(),()=>{window.speechSynthesis.onvoiceschanged=null}},[]);const v=$.useMemo(()=>{const k=e.trim().toLowerCase();return k?ca.filter(E=>[E.title,E.summary,...E.details.paragraphs,...E.details.bullets??[]].join(" ").toLowerCase().includes(k)):ca},[e]),x=Math.max(1,Math.ceil(v.length/h)),j=Math.min(i,x),L=v.slice((j-1)*h,j*h),g=k=>{k.preventDefault(),o(1)};return c.jsxs(_v,{children:[c.jsx(Mv,{children:"공지사항"}),c.jsx(Nv,{children:"전국 힐링명상지도에서 전하는 소식을 확인하세요."}),c.jsxs(Av,{onSubmit:g,children:[c.jsx(Ov,{htmlFor:"notice-search",children:"공지사항 검색"}),c.jsxs(Dv,{children:[c.jsx(Fv,{id:"notice-search",type:"text",placeholder:"검색어를 입력해주세요.",value:e,onChange:k=>t(k.target.value)}),c.jsx(Bv,{type:"submit",children:"검색"})]})]}),c.jsx(Uv,{children:L.map(k=>{var S;const E=n===k.id;return c.jsxs(Hv,{type:"button",$active:E,onClick:()=>r(E?null:k.id),children:[c.jsxs(Vv,{children:[c.jsx(Wv,{children:k.category}),c.jsx(Kv,{children:k.title}),c.jsx(Zv,{children:k.date})]}),E&&c.jsxs(Yv,{children:[c.jsxs(qv,{children:[c.jsx(Gv,{type:"button",onClick:b=>{if(b.stopPropagation(),l===k.id){window.speechSynthesis.cancel();return}const P=[k.title,k.summary,...k.details.paragraphs,...k.details.bullets??[],k.details.footer].filter(Boolean).join(". ");f(P,k.id)},children:l===k.id?c.jsx(c.Fragment,{children:"멈추기"}):c.jsxs(c.Fragment,{children:[c.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[c.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),c.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"})]}),"음성으로 들으기"]})}),c.jsxs(Xv,{children:[c.jsx("button",{type:"button",className:a==="ko-KR"?"active":"",onClick:b=>{b.stopPropagation(),u("ko-KR")},children:"한국어"}),c.jsx("button",{type:"button",className:a==="en-US"?"active":"",onClick:b=>{b.stopPropagation(),u("en-US")},children:"English"}),c.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,fontSize:"0.85rem",cursor:"pointer"},children:[c.jsx("input",{type:"checkbox",checked:d,onChange:b=>{b.stopPropagation(),p(b.target.checked)}}),"고품질(온라인)"]})]})]}),c.jsx("p",{children:k.summary}),k.details.paragraphs.map(b=>c.jsx("p",{children:b},b)),((S=k.details.bullets)==null?void 0:S.length)>0&&c.jsx(Qv,{children:k.details.bullets.map(b=>c.jsx("li",{children:b},b))}),c.jsx("p",{children:k.details.footer})]})]},k.id)})}),c.jsx(Jv,{children:Array.from({length:x},(k,E)=>c.jsx(ew,{type:"button",$active:j===E+1,onClick:()=>o(E+1),children:E+1},`page-${E+1}`))})]})},nw=w.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 24px 20px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};

  @media (max-width: 960px) {
    padding: 20px 14px calc(48px + env(safe-area-inset-bottom, 0px));
  }
`,rw=w.h1`
  font-size: 2.4rem;
  margin-bottom: 12px;
`,iw=w.p`
  font-size: 1.2rem;
  color: ${({theme:e})=>e.colors.text700};
`,ow=w.div`
  margin-top: 24px;
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 20px;
  box-shadow: ${({theme:e})=>e.shadow.soft};
`,lw=()=>c.jsxs(nw,{children:[c.jsx(rw,{children:"1:1 문의"}),c.jsx(iw,{children:"궁금한 점을 남겨주시면 빠르게 답변드릴게요."}),c.jsxs(ow,{children:[c.jsx("p",{children:"이메일: support@healingmeditation.kr"}),c.jsx("p",{children:"운영시간: 평일 09:00 - 18:00"})]})]}),sw=w.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 20px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};

  @media (max-width: 960px) {
    padding: 20px 14px calc(48px + env(safe-area-inset-bottom, 0px));
  }
`,aw=w.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 24px;
  color: ${({theme:e})=>e.colors.text900};
`,uw=w.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,cw=w.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text700};
  padding: 48px 24px;
  text-align: center;
  margin: 0;
`,dw=()=>{const{favorites:e}=af(),t=e.map(n=>qp(n)).filter(n=>n!=null);return c.jsxs(sw,{children:[c.jsx(aw,{children:"찜 목록"}),t.length===0?c.jsx(cw,{children:"찜한 명상 장소가 없어요. 리스트에서 하트를 눌러 찜해보세요."}):c.jsx(uw,{children:t.map(n=>c.jsx("li",{children:c.jsx(B1,{place:n})},n.id))})]})},pw="/assets/kakao-BwFsiG1v.png",fw="/assets/naver-8e52KbwB.png",hw="/assets/google-3Iqg8dcD.png",Lw="/assets/left-arrow-D7869Zjw.png",Le={h1:qe`
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 1.22;
    letter-spacing: -0.02em;
  `,h2:qe`
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 1.26;
    letter-spacing: -0.02em;
  `,h3:qe`
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.02em;
  `,title:qe`
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: -0.02em;
  `,body1:qe`
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.45;
  `,body2:qe`
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.45;
  `,caption:qe`
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.4;
  `,buttonLg:qe`
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.2;
  `,buttonMd:qe`
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.2;
  `},mw=mt`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,oc=mt`
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,gw=mt`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,xw=mt`
  from {
    opacity: 0;
    transform: scale(0.96) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`,lc=mt`
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,yw=mt`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Kd=w.div`
  margin-top: 8px;
  animation: ${yw} 0.42s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,vw=w.section`
  /* Layout Content 하단: 56px(바) + 24px + safe-area — 한 화면에 고정, body 스크롤 방지 */
  --page-outset-bottom: calc(80px + env(safe-area-inset-bottom, 0px));
  box-sizing: border-box;
  height: calc(100vh - var(--page-outset-bottom));
  max-height: calc(100vh - var(--page-outset-bottom));
  height: calc(100dvh - var(--page-outset-bottom));
  max-height: calc(100dvh - var(--page-outset-bottom));
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background: ${({theme:e})=>e.colors.warmCream};
  color: ${({theme:e})=>e.colors.text900};
  padding-top: calc(16px + env(safe-area-inset-top, 0px));
`,ww=w.div`
  position: relative;
  width: min(100%, 420px);
  padding: 6px 18px 16px;
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,di=w.div`
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${mw} 0.35s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,pi=w.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
`,Mo=w.div`
  flex-shrink: 0;
  margin-top: auto;
  padding-top: 12px;
  width: 100%;
`,kw=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
  gap: 12px;
  flex-shrink: 0;
`,Sw=w.button`
  border: none;
  background: transparent;
  color: ${({theme:e})=>e.colors.text900};
  ${Le.body2};
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
`,Cw=w.img`
  width: 18px;
  height: 18px;
  object-fit: contain;
`,bw=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  flex-shrink: 0;
`,Ew=w.img`
  width: 74px;
  height: 74px;
  object-fit: contain;
`,jw=w.h1`
  margin: 12px 0 0;
  ${Le.title};
  color: ${({theme:e})=>e.colors.primary300};
`,rl=w.h2`
  margin: 14px 0 0;
  text-align: center;
  ${Le.h3};
`,da=w.p`
  margin: 8px 0 0;
  text-align: center;
  ${Le.body2};
  color: ${({theme:e})=>e.colors.text700};
`,$w=mt`
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
`,Pw=w.div`
  position: fixed;
  top: calc(env(safe-area-inset-top, 0px) + 10px);
  left: 50%;
  z-index: 130;
  pointer-events: none;
  animation: ${$w} 2.2s ease both;
`,Iw=w.div`
  padding: 12px 18px;
  border-radius: ${({theme:e})=>e.radii.pill};
  border: 1px solid #96d6a3;
  background: #e8f8ec;
  color: #1f6a2b;
  ${Le.body2};
  box-shadow: 0 8px 22px rgba(27, 94, 32, 0.16);
`,pa=w.div`
  margin-top: clamp(24px, 6vh, 48px);
  display: flex;
  flex-direction: column;
  gap: 14px;
`,Rw=w.p`
  margin: 8px 0 0;
  text-align: center;
  ${Le.body2};
  color: ${({theme:e})=>e.colors.text700};
`,Au=w.p`
  margin: 6px 4px 0;
  ${Le.caption};
  color: #d93025;
  animation: ${oc} 0.24s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Tw=w.p`
  margin: 6px 4px 0;
  ${Le.caption};
  color: #188038;
  animation: ${oc} 0.24s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Zd=w.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  animation: ${lc} 0.42s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: ${({$index:e})=>e*.07}s;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,zw=w(rl)`
  animation: ${lc} 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,_w=w(Rw)`
  margin-top: 0;
  animation: ${lc} 0.42s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Yd=w(Au)`
  animation: ${oc} 0.3s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,fa=w.div`
  position: relative;
  width: 100%;
`,ha=w.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  color: ${({theme:e})=>e.colors.text700};
  ${Le.caption};
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

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: 2px;
  }
`,Mw=w.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
`,Nw=w.button`
  border: 1px solid
    ${({theme:e,$highlight:t})=>t?e.colors.primary600:e.colors.primary200};
  background: ${({theme:e,$highlight:t})=>t?e.colors.primary600:e.colors.white};
  color: ${({theme:e,$highlight:t})=>t?e.colors.white:e.colors.text700};
  border-radius: ${({theme:e})=>e.radii.pill};
  padding: 12px 14px;
  ${Le.buttonMd};
  cursor: pointer;
  opacity: 1;
  box-shadow: ${({$highlight:e})=>e?"0 6px 14px rgba(75, 0, 130, 0.22)":"none"};
  transition: border-color 0.22s ease, background 0.22s ease, color 0.22s ease, box-shadow 0.22s ease;
`,Aw=w.p`
  margin: 8px 2px 0;
  text-align: right;
  ${Le.caption};
  color: ${({theme:e})=>e.colors.text700};
`,il=w.button`
  width: 100%;
  border: none;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary300};
  color: ${({theme:e})=>e.colors.white};
  padding: 16px 20px;
  ${Le.buttonMd};
  box-shadow: 0 10px 18px rgba(75, 0, 130, 0.2);
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({$disabled:e})=>e?.55:1};
  margin-top: 0;
  flex-shrink: 0;
  transition: opacity 0.25s ease, box-shadow 0.2s ease, transform 0.2s ease;

  &:not(:disabled):active {
    transform: scale(0.99);
  }
`,Ow=w.div`
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`,Dw=w.button`
  border: 1px solid ${({theme:e})=>e.colors.primary300};
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.primary300};
  ${Le.buttonMd};
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
`,Fw=w.p`
  margin: 0;
  text-align: center;
  ${Le.caption};
  color: ${({theme:e,$error:t})=>t?"#d93025":e.colors.text700};
  max-width: 320px;
  line-height: 1.45;
`,Bw=w.div`
  margin-top: 18px;
`,Uw=w.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.28);
  display: grid;
  place-items: center;
  z-index: 120;
  animation: ${gw} 0.22s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Hw=w.div`
  width: min(88vw, 320px);
  background: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 22px 18px 16px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.16);
  animation: ${xw} 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Vw=w.p`
  text-align: center;
  ${Le.body1};
  color: ${({theme:e})=>e.colors.text900};
`,Ww=w.div`
  margin-top: 18px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`,Qd=w.button`
  border: 1px solid
    ${({theme:e,$primary:t})=>t?e.colors.primary300:e.colors.primary200};
  background: ${({theme:e,$primary:t})=>t?e.colors.primary300:e.colors.white};
  color: ${({theme:e,$primary:t})=>t?e.colors.white:e.colors.text900};
  border-radius: ${({theme:e})=>e.radii.pill};
  padding: 10px 14px;
  ${Le.buttonMd};
  cursor: pointer;
`,Kw=w.div`
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
  ${Le.h2};
  background:
    linear-gradient(to top, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.06)),
    radial-gradient(circle at 20% 20%, #a8d97a, #5f8f49 38%, #304f2d);
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.16);
`,Zw=w.button`
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
  box-shadow: 0 8px 16px rgba(75, 0, 130, 0.12);
`,Yw=w(il)`
  flex-shrink: 0;
`,Qw=w.button`
  border: 1px solid ${({theme:e})=>e.colors.primary200};
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.primary300};
  ${Le.buttonMd};
  border-radius: ${({theme:e})=>e.radii.pill};
  padding: 8px 14px;
  cursor: pointer;
  flex-shrink: 0;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.colors.primary50};
    border-color: ${({theme:e})=>e.colors.primary300};
  }
`,qw=w.span`
  display: block;
  text-align: right;
  width: 100%;
  margin: 0 0 4px;
  ${Le.caption};
  color: ${({theme:e})=>e.colors.text700};
`,Gw=w.div`
  margin: 36px auto 0;
  display: flex;
  justify-content: center;
`,Xw=w.img`
  width: 108px;
  height: 108px;
  object-fit: contain;
`,Jw=w.h2`
  margin: 10px 0 0;
  text-align: center;
  ${Le.h1};
  color: ${({theme:e})=>e.colors.primary300};
`,ek=w.p`
  margin: 8px 0 0;
  text-align: center;
  ${Le.body2};
  color: ${({theme:e})=>e.colors.text700};
`,tk=w.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,ol=w.input`
  width: 100%;
  border: 1px solid ${({theme:e,$error:t})=>t?"#d93025":e.colors.primary200};
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.text900};
  ${Le.body2};
  padding: 14px 24px;
  box-shadow: 0 10px 24px rgba(75, 0, 130, 0.08);
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

  &::placeholder {
    color: ${({theme:e})=>e.colors.text700};
  }

  &:focus {
    outline: none;
    border-color: ${({theme:e,$error:t})=>t?"#d93025":e.colors.primary400};
    box-shadow: ${({$error:e})=>e?"0 10px 24px rgba(217, 48, 37, 0.18)":"0 10px 24px rgba(75, 0, 130, 0.14)"};
    transform: translateY(-1px);
  }
`,La=w(ol)`
  padding: 14px 56px 14px 24px;
  transition:
    border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.22s ease;
`,nk=w.button`
  margin-top: 0;
  width: 100%;
  border: none;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary300};
  color: ${({theme:e})=>e.colors.white};
  padding: 16px 20px;
  ${Le.buttonMd};
  box-shadow: 0 10px 18px rgba(75, 0, 130, 0.2);
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 22px rgba(75, 0, 130, 0.28);
  }
`,rk=w.div`
  margin: 22px 0 18px;
  display: flex;
  align-items: center;
  gap: 14px;
  color: ${({theme:e})=>e.colors.text700};
  ${Le.caption};

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: ${({theme:e})=>e.colors.primary200};
  }
`,ik=w.div`
  display: flex;
  justify-content: center;
  gap: 22px;
`,ma=w.button`
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
`,ga=w.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
`,ok=w.div`
  margin: 28px 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 6px;
  text-align: center;
  ${Le.body2};
  color: ${({theme:e})=>e.colors.text900};
`,lk=w.button`
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

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: 2px;
    border-radius: 4px;
  }
`,sk=e=>!(e.length<8||!/[a-zA-Z]/.test(e)||!/[0-9]/.test(e)),ak=()=>{var ot;const e=zn(),[t,n]=$.useState("login"),[r,i]=$.useState(""),[o,l]=$.useState(""),[s,a]=$.useState(""),[u,d]=$.useState(""),[p,h]=$.useState(!1),[f,v]=$.useState(!1),[x,j]=$.useState(!1),[L,g]=$.useState("KR-11"),[m,k]=$.useState(!1),[E,S]=$.useState(!1),[b,P]=$.useState(300),[A,R]=$.useState(!1),[_,N]=$.useState(!1),[O,V]=$.useState(null),[U,K]=$.useState(!1),q=((ot=er(L))==null?void 0:ot.name)??"서울",T=$.useMemo(()=>r.trim(),[r]),F=$.useMemo(()=>!T||T==="1111"||T==="1112"?!1:!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(T),[T]),y=$.useMemo(()=>T==="1111",[T]),Z=$.useMemo(()=>T==="1112",[T]),Y=F||Z,C=$.useMemo(()=>o.trim()==="1111",[o]),le=$.useMemo(()=>{const H=s;return H?H.length<8?"8자 이상이어야 합니다":/[a-zA-Z]/.test(H)?/[0-9]/.test(H)?null:"숫자가 포함되어야 합니다":"영문이 포함되어야 합니다":null},[s]),te=$.useMemo(()=>u.length>0&&s!==u,[s,u]),re=$.useMemo(()=>sk(s)&&s===u,[s,u]),Ue=b<=0,He=$.useMemo(()=>{const H=Math.floor(b/60),Pe=b%60;return`${H}:${String(Pe).padStart(2,"0")}`},[b]);$.useEffect(()=>{if(t!=="signup-account"||!E)return;const H=window.setInterval(()=>{P(Pe=>Pe>0?Pe-1:0)},1e3);return()=>window.clearInterval(H)},[t,E]),$.useEffect(()=>{if(t!=="signup-account"||!E||!C)return;const H=window.setTimeout(()=>{var Pe;(Pe=document.getElementById("signup-password-anchor"))==null||Pe.scrollIntoView({behavior:"smooth",block:"nearest"})},80);return()=>window.clearTimeout(H)},[t,E,C]),$.useEffect(()=>{if(!A)return;const H=window.setTimeout(()=>{R(!1)},2200);return()=>window.clearTimeout(H)},[A]),$.useEffect(()=>{t==="login"&&j(!1)},[t]),$.useEffect(()=>{t!=="signup-region"&&(V(null),K(!1),N(!1))},[t]);const Ve=()=>{if(V(null),K(!1),!navigator.geolocation){K(!0),V("이 환경에서는 위치 정보를 쓸 수 없어요. 지도에서 골라주세요.");return}N(!0),navigator.geolocation.getCurrentPosition(H=>{var Wt;N(!1);const Pe=i8(H.coords.latitude,H.coords.longitude);if(Pe){g(Pe),k(!0),K(!1);const bt=((Wt=er(Pe))==null?void 0:Wt.name)??Pe;V(`${bt} 지역으로 맞췄어요. 맞는지 확인해 주세요.`)}else K(!0),V("위치로 시·도를 찾지 못했어요. 지도에서 선택해 주세요.")},H=>{N(!1),K(!0),H.code===1?V("위치 권한이 필요해요. 허용하시거나 지도에서 골라주세요."):H.code===2?V("위치를 가져올 수 없어요. 지도에서 선택해 주세요."):V("위치 확인에 실패했어요. 지도에서 선택해 주세요.")},{enableHighAccuracy:!1,maximumAge:3e5,timeout:12e3})},it=()=>{if(t==="login"){e(-1);return}t==="signup-account"&&(S(!1),n("login")),t==="signup-region"&&n("signup-account"),t==="signup-interest"&&n("signup-region")};return c.jsx(vw,{children:c.jsxs(ww,{children:[t!=="signup-complete"&&c.jsxs(kw,{children:[c.jsxs(Sw,{type:"button",onClick:it,"aria-label":"뒤로가기",children:[c.jsx(Cw,{src:Lw,alt:"","aria-hidden":"true"}),"뒤로가기"]}),t==="signup-interest"&&c.jsx(Qw,{type:"button",onClick:()=>n("signup-complete"),children:"건너뛰기"})]}),t==="login"&&c.jsxs(di,{children:[c.jsxs(pi,{children:[c.jsxs(bw,{children:[c.jsx(Ew,{src:bu,alt:"명상 지도 로고"}),c.jsx(jw,{children:"명상 지도"})]}),c.jsxs(tk,{children:[c.jsx(ol,{type:"email",placeholder:"이메일","aria-label":"이메일"}),c.jsxs(fa,{children:[c.jsx(La,{type:x?"text":"password",placeholder:"비밀번호","aria-label":"비밀번호",autoComplete:"current-password"}),c.jsx(ha,{type:"button","aria-pressed":x,"aria-label":x?"비밀번호 숨기기":"비밀번호 보기",onClick:()=>j(H=>!H),children:x?"숨기기":"보기"})]})]}),c.jsx(rk,{children:"또는"}),c.jsxs(ik,{children:[c.jsx(ma,{type:"button",$bg:"transparent","aria-label":"카카오로 로그인",children:c.jsx(ga,{src:pw,alt:"카카오 로그인"})}),c.jsx(ma,{type:"button",$bg:"transparent",$color:"#fff","aria-label":"네이버로 로그인",children:c.jsx(ga,{src:fw,alt:"네이버 로그인"})}),c.jsx(ma,{type:"button",$bg:"transparent","aria-label":"구글로 로그인",children:c.jsx(ga,{src:hw,alt:"구글 로그인"})})]}),c.jsxs(ok,{children:[c.jsx("span",{children:"계정이 없으신가요?"}),c.jsx(lk,{type:"button",onClick:()=>{i(""),l(""),a(""),d(""),h(!1),v(!1),S(!1),P(300),g("KR-11"),n("signup-account")},children:"회원가입"})]})]}),c.jsx(Mo,{children:c.jsx(nk,{type:"button",children:"로그인하기"})})]}),t==="signup-account"&&c.jsxs(di,{children:[c.jsxs(pi,{children:[c.jsx(rl,{children:"회원가입"}),c.jsxs(pa,{children:[c.jsx(ol,{type:"text",placeholder:"이메일",value:r,$error:Y,onChange:H=>i(H.target.value),autoComplete:"email"}),F&&c.jsx(Au,{children:"이메일 형식이 아닙니다"}),!F&&Z&&c.jsx(Au,{children:"이미 존재하는 이메일입니다"}),!Y&&y&&c.jsx(Tw,{children:"사용가능한 이메일입니다"})]}),E&&c.jsxs(Kd,{id:"signup-code-anchor",children:[c.jsx(da,{children:"이메일로 발송된 인증번호를 입력해주세요"}),c.jsxs(pa,{children:[c.jsxs(Mw,{children:[c.jsx(ol,{type:"text",placeholder:"인증번호",value:o,onChange:H=>l(H.target.value),autoComplete:"one-time-code"}),c.jsx(Nw,{type:"button",$highlight:Ue,onClick:()=>{l(""),P(300),R(!0)},children:"다시받기"})]}),c.jsxs(Aw,{children:["남은 시간 ",He]})]})]}),E&&C&&c.jsxs(Kd,{id:"signup-password-anchor",children:[c.jsx(zw,{children:"비밀번호 설정"}),c.jsxs(pa,{children:[c.jsxs(Zd,{$index:0,children:[c.jsxs(fa,{children:[c.jsx(La,{type:p?"text":"password",placeholder:"비밀번호",value:s,$error:!!le,onChange:H=>a(H.target.value),autoComplete:"new-password"}),c.jsx(ha,{type:"button","aria-pressed":p,"aria-label":p?"비밀번호 숨기기":"비밀번호 보기",onClick:()=>h(H=>!H),children:p?"숨기기":"보기"})]}),le&&c.jsx(Yd,{children:le})]}),c.jsxs(Zd,{$index:1,children:[c.jsxs(fa,{children:[c.jsx(La,{type:f?"text":"password",placeholder:"비밀번호 확인",value:u,$error:te,onChange:H=>d(H.target.value),autoComplete:"new-password"}),c.jsx(ha,{type:"button","aria-pressed":f,"aria-label":f?"비밀번호 확인 숨기기":"비밀번호 확인 보기",onClick:()=>v(H=>!H),children:f?"숨기기":"보기"})]}),te&&c.jsx(Yd,{children:"비밀번호가 일치하지 않습니다"})]}),c.jsx(_w,{children:"8자 이상, 영문+숫자 포함"})]})]})]}),c.jsx(Mo,{children:E?c.jsx(il,{type:"button",$disabled:!re,disabled:!re,onClick:()=>n("signup-region"),children:"다음"}):c.jsx(il,{type:"button",$disabled:!y,disabled:!y,onClick:()=>{S(!0),P(300),R(!0),window.setTimeout(()=>{var H;(H=document.getElementById("signup-code-anchor"))==null||H.scrollIntoView({behavior:"smooth",block:"nearest"})},120)},children:"인증번호 받기"})})]}),A&&c.jsx(Pw,{role:"status","aria-live":"polite",children:c.jsx(Iw,{children:"인증번호를 보냈어요!"})}),t==="signup-region"&&c.jsx(di,{children:c.jsxs(pi,{children:[c.jsx(rl,{children:"활동 지역을 설정해주세요"}),c.jsx(da,{children:"주로 명상하는 지역을 선택해주세요"}),c.jsxs(Ow,{children:[c.jsx(Dw,{type:"button",disabled:_,"aria-busy":_,onClick:Ve,children:_?"위치 확인 중…":"현재 위치로 지역 맞추기"}),O&&c.jsx(Fw,{$error:U,children:O})]}),c.jsx(Bw,{children:c.jsx(U1,{maxMapHeight:"clamp(220px, calc(100dvh - 260px), 480px)",activeRegionId:L,onSelectRegion:H=>{g(H),k(!0)}})})]})}),t==="signup-interest"&&c.jsxs(di,{children:[c.jsxs(pi,{children:[c.jsx(qw,{children:"1/10"}),c.jsx(rl,{children:"관심사를 선택해주세요"}),c.jsx(da,{children:"좌우로 넘기며 관심있는 주제를 선택하세요"}),c.jsx(Kw,{children:"숲"}),c.jsx(Zw,{type:"button","aria-label":"관심사 좋아요",children:"♡"})]}),c.jsx(Mo,{children:c.jsx(Yw,{type:"button",onClick:()=>n("signup-complete"),children:"다음"})})]}),t==="signup-complete"&&c.jsxs(di,{children:[c.jsxs(pi,{children:[c.jsx(Gw,{children:c.jsx(Xw,{src:bu,alt:"명상 지도 로고"})}),c.jsx(Jw,{children:"가입 완료!"}),c.jsx(ek,{children:"평온한 명상 여행을 시작하세요"})]}),c.jsx(Mo,{children:c.jsx(il,{type:"button",onClick:()=>{n("login")},children:"시작하기"})})]}),t==="signup-region"&&m&&c.jsx(Uw,{role:"dialog","aria-modal":"true","aria-label":"지역 확인",children:c.jsxs(Hw,{children:[c.jsxs(Vw,{children:[q," 지역이 맞습니까?"]}),c.jsxs(Ww,{children:[c.jsx(Qd,{type:"button",onClick:()=>k(!1),children:"아니오"}),c.jsx(Qd,{type:"button",$primary:!0,onClick:()=>{k(!1),n("signup-interest")},children:"네"})]})]})})]})})},uk=w.div`
  color: ${({theme:e})=>e.colors.text900};
`,qd=w.section`
  padding: 48px 20px;

  @media (max-width: 960px) {
    padding: 36px 14px;
  }
`,Gd=w.div`
  max-width: 1100px;
  margin: 0 auto;
`,ck=w.section`
  padding: 64px 20px calc(56px + env(safe-area-inset-bottom, 0px));
  background: linear-gradient(180deg, #ffffff 0%, ${({theme:e})=>e.colors.primary50} 100%);

  @media (max-width: 960px) {
    padding: 48px 14px calc(40px + env(safe-area-inset-bottom, 0px));
  }
`,dk=w.div`
  max-width: 1100px;
  margin: 0 auto;
  background: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 36px;
  box-shadow: ${({theme:e})=>e.shadow.soft};
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  display: grid;
  gap: 16px;
`,pk=w.h1`
  font-size: 3rem;
  line-height: 1.3;
`,fk=w.p`
  font-size: 1.3rem;
  color: ${({theme:e})=>e.colors.text700};
`,hk=w(qr)`
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
`,Lk=w.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`,xa=w.div`
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 18px;
  box-shadow: ${({theme:e})=>e.shadow.soft};
`,ya=w.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text700};
`,va=w.p`
  font-size: 2.2rem;
  font-weight: 700;
  margin-top: 8px;
`,mk=w.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`,No=w.div`
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 24px;
  box-shadow: ${({theme:e})=>e.shadow.soft};
  display: grid;
  gap: 10px;
`,Ao=w.div`
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
`,gk=w.section`
  padding: 48px 20px;
  background: ${({theme:e})=>e.colors.primary600};
  color: #fff;
`,xk=w.div`
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
`,yk=w.button`
  border: none;
  background: #fff;
  color: ${({theme:e})=>e.colors.primary700};
  padding: 10px 18px;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  font-size: 1.1rem;
`,vk=()=>c.jsxs(uk,{children:[c.jsx(ck,{children:c.jsxs(dk,{children:[c.jsx(pk,{children:"누구나 원하는 곳에서, 더 깊은 힐링 명상"}),c.jsx(fk,{children:"전국 힐링명상지도는 지역별 명상센터를 쉽고 빠르게 찾을 수 있는 플랫폼입니다."}),c.jsx(hk,{to:"/",children:"명상센터 찾아보기"})]})}),c.jsx(qd,{children:c.jsx(Gd,{children:c.jsxs(Lk,{children:[c.jsxs(xa,{children:[c.jsx(ya,{children:"누적 명상센터"}),c.jsx(va,{children:"1,200+"})]}),c.jsxs(xa,{children:[c.jsx(ya,{children:"지역 커버리지"}),c.jsx(va,{children:"전국 17개"})]}),c.jsxs(xa,{children:[c.jsx(ya,{children:"누적 검색 수"}),c.jsx(va,{children:"210만+"})]})]})})}),c.jsx(qd,{children:c.jsx(Gd,{children:c.jsxs(mk,{children:[c.jsxs(No,{children:[c.jsx(Ao,{children:c.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[c.jsx("path",{d:"M3 11l9-7 9 7"}),c.jsx("path",{d:"M5 10v10h14V10"})]})}),c.jsx("h3",{children:"지도 기반 탐색"}),c.jsx("p",{children:"대한민국 지도로 지역을 선택하고, 명상센터를 한눈에 찾아보세요."})]}),c.jsxs(No,{children:[c.jsx(Ao,{children:c.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:c.jsx("path",{d:"M4 6h16M4 12h10M4 18h6"})})}),c.jsx("h3",{children:"맞춤형 필터"}),c.jsx("p",{children:"해시태그와 정렬 기준으로 내게 맞는 명상센터를 빠르게 추천해요."})]}),c.jsxs(No,{children:[c.jsx(Ao,{children:c.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[c.jsx("circle",{cx:"12",cy:"8",r:"3"}),c.jsx("path",{d:"M6 20c1.5-3 4-5 6-5s4.5 2 6 5"})]})}),c.jsx("h3",{children:"상세 정보 제공"}),c.jsx("p",{children:"주소, 프로그램, 운영 단체 정보까지 한 페이지에서 확인하세요."})]}),c.jsxs(No,{children:[c.jsx(Ao,{children:c.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[c.jsx("circle",{cx:"10",cy:"10",r:"6"}),c.jsx("line",{x1:"14.5",y1:"14.5",x2:"21",y2:"21"})]})}),c.jsx("h3",{children:"검색 경험"}),c.jsx("p",{children:"검색어 입력만으로 관련 명상센터를 부드럽게 이어 보여드립니다."})]})]})})}),c.jsx(gk,{children:c.jsxs(xk,{children:[c.jsxs("div",{children:[c.jsx("h2",{children:"명상센터 운영자라면 함께해요"}),c.jsx("p",{children:"전국 힐링명상지도와 함께 더 많은 사람에게 명상 경험을 전달하세요."})]}),c.jsx(yk,{type:"button",children:"등록 문의하기"})]})})]}),wk=w.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
  background: linear-gradient(180deg, ${({theme:e})=>e.colors.primary50} 0%, ${({theme:e})=>e.colors.warmCream} 100%);
`,kk=w.div`
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
`,Sk=w.p`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.primary700};
  margin: 0 0 8px;
`,Ck=w.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.primary400};
  margin: 0 0 32px;
  text-align: center;
  line-height: 1.5;
`,bk=w.button`
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
`,Ek=()=>{const e=zn();return c.jsxs(wk,{children:[c.jsx(kk,{children:"404"}),c.jsx(Sk,{children:"Oops!"}),c.jsx(Ck,{children:"페이지를 찾을 수 없습니다."}),c.jsx(bk,{type:"button",onClick:()=>e("/"),children:"홈으로"})]})},jk=[{path:"/",element:c.jsx(G7,{}),children:[{index:!0,element:c.jsx(Q2,{})},{path:"meditation",element:c.jsx(Q2,{})},{path:"meditation/map",element:c.jsx(rL,{})},{path:"meditation/region/:regionId",element:c.jsx(wL,{})},{path:"meditation/place/:placeId",element:c.jsx(zv,{})},{path:"favorites",element:c.jsx(dw,{})},{path:"profile",element:c.jsx(ak,{})},{path:"notice",element:c.jsx(tw,{})},{path:"inquiry",element:c.jsx(lw,{})},{path:"service-info",element:c.jsx(vk,{})},{path:"*",element:c.jsx(Ek,{})}]}],$k=()=>i7(jk),Pk=()=>c.jsx(j7,{children:c.jsx($k,{})}),Ik=w.div`
  min-height: 100vh;
`,Rk=()=>c.jsx(Ik,{children:c.jsx(Pk,{})}),Tk=j5`
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
`,zk={colors:{primary50:"#f3eef8",primary100:"#e6dcf0",primary200:"#c9b8e0",primary300:"#a88bca",primary400:"#7a5aab",primary500:"#5c3d8f",primary600:"#4B0082",primary700:"#3d0069",primary800:"#2f0051",primary900:"#22003a",white:"#FFFFFF",warmCream:"#FFFAF8",buddingPeach:"#F5D8D0",charcoal:"#3D3D3D",warmGray:"#6B6B6B",text900:"#3D3D3D",text700:"#6B6B6B",border200:"#9B8A99",mutedMauve:"#9B8A99",dustyGold:"#C9A962",dustyRose:"#C9A090",bg50:"#FFFAF8",bg100:"#F5D8D0"},shadow:{soft:"0 12px 30px rgba(75, 0, 130, 0.1)"},radii:{pill:"999px",md:"12px",lg:"16px"}};wa.createRoot(document.getElementById("root")).render(c.jsx(ke.StrictMode,{children:c.jsxs(C5,{theme:zk,children:[c.jsx(Tk,{}),c.jsx(Rk,{})]})}));
