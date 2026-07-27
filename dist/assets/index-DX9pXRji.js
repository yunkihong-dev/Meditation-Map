function Y5(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Wl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ma(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var dg={exports:{}},Aa={},pg={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Es=Symbol.for("react.element"),G5=Symbol.for("react.portal"),Z5=Symbol.for("react.fragment"),q5=Symbol.for("react.strict_mode"),Q5=Symbol.for("react.profiler"),X5=Symbol.for("react.provider"),J5=Symbol.for("react.context"),e6=Symbol.for("react.forward_ref"),t6=Symbol.for("react.suspense"),n6=Symbol.for("react.memo"),r6=Symbol.for("react.lazy"),B0=Symbol.iterator;function i6(e){return e===null||typeof e!="object"?null:(e=B0&&e[B0]||e["@@iterator"],typeof e=="function"?e:null)}var fg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hg=Object.assign,gg={};function Qi(e,t,n){this.props=e,this.context=t,this.refs=gg,this.updater=n||fg}Qi.prototype.isReactComponent={};Qi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Qi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function mg(){}mg.prototype=Qi.prototype;function Y1(e,t,n){this.props=e,this.context=t,this.refs=gg,this.updater=n||fg}var G1=Y1.prototype=new mg;G1.constructor=Y1;hg(G1,Qi.prototype);G1.isPureReactComponent=!0;var F0=Array.isArray,xg=Object.prototype.hasOwnProperty,Z1={current:null},Lg={key:!0,ref:!0,__self:!0,__source:!0};function yg(e,t,n){var r,i={},s=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(s=""+t.key),t)xg.call(t,r)&&!Lg.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var c=Array(a),d=0;d<a;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Es,type:e,key:s,ref:l,props:i,_owner:Z1.current}}function o6(e,t){return{$$typeof:Es,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function q1(e){return typeof e=="object"&&e!==null&&e.$$typeof===Es}function s6(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var H0=/\/+/g;function wc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?s6(""+e.key):t.toString(36)}function kl(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Es:case G5:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+wc(l,0):r,F0(i)?(n="",e!=null&&(n=e.replace(H0,"$&/")+"/"),kl(i,t,n,"",function(d){return d})):i!=null&&(q1(i)&&(i=o6(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(H0,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",F0(e))for(var a=0;a<e.length;a++){s=e[a];var c=r+wc(s,a);l+=kl(s,t,n,c,i)}else if(c=i6(e),typeof c=="function")for(e=c.call(e),a=0;!(s=e.next()).done;)s=s.value,c=r+wc(s,a++),l+=kl(s,t,n,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Bs(e,t,n){if(e==null)return e;var r=[],i=0;return kl(e,r,"","",function(s){return t.call(n,s,i++)}),r}function l6(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var St={current:null},jl={transition:null},a6={ReactCurrentDispatcher:St,ReactCurrentBatchConfig:jl,ReactCurrentOwner:Z1};function vg(){throw Error("act(...) is not supported in production builds of React.")}pe.Children={map:Bs,forEach:function(e,t,n){Bs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Bs(e,function(){t++}),t},toArray:function(e){return Bs(e,function(t){return t})||[]},only:function(e){if(!q1(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};pe.Component=Qi;pe.Fragment=Z5;pe.Profiler=Q5;pe.PureComponent=Y1;pe.StrictMode=q5;pe.Suspense=t6;pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a6;pe.act=vg;pe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=hg({},e.props),i=e.key,s=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,l=Z1.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)xg.call(t,c)&&!Lg.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var d=0;d<c;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:Es,type:e.type,key:i,ref:s,props:r,_owner:l}};pe.createContext=function(e){return e={$$typeof:J5,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:X5,_context:e},e.Consumer=e};pe.createElement=yg;pe.createFactory=function(e){var t=yg.bind(null,e);return t.type=e,t};pe.createRef=function(){return{current:null}};pe.forwardRef=function(e){return{$$typeof:e6,render:e}};pe.isValidElement=q1;pe.lazy=function(e){return{$$typeof:r6,_payload:{_status:-1,_result:e},_init:l6}};pe.memo=function(e,t){return{$$typeof:n6,type:e,compare:t===void 0?null:t}};pe.startTransition=function(e){var t=jl.transition;jl.transition={};try{e()}finally{jl.transition=t}};pe.unstable_act=vg;pe.useCallback=function(e,t){return St.current.useCallback(e,t)};pe.useContext=function(e){return St.current.useContext(e)};pe.useDebugValue=function(){};pe.useDeferredValue=function(e){return St.current.useDeferredValue(e)};pe.useEffect=function(e,t){return St.current.useEffect(e,t)};pe.useId=function(){return St.current.useId()};pe.useImperativeHandle=function(e,t,n){return St.current.useImperativeHandle(e,t,n)};pe.useInsertionEffect=function(e,t){return St.current.useInsertionEffect(e,t)};pe.useLayoutEffect=function(e,t){return St.current.useLayoutEffect(e,t)};pe.useMemo=function(e,t){return St.current.useMemo(e,t)};pe.useReducer=function(e,t,n){return St.current.useReducer(e,t,n)};pe.useRef=function(e){return St.current.useRef(e)};pe.useState=function(e){return St.current.useState(e)};pe.useSyncExternalStore=function(e,t,n){return St.current.useSyncExternalStore(e,t,n)};pe.useTransition=function(){return St.current.useTransition()};pe.version="18.3.1";pg.exports=pe;var m=pg.exports;const Ge=Ma(m),c6=Y5({__proto__:null,default:Ge},[m]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u6=m,d6=Symbol.for("react.element"),p6=Symbol.for("react.fragment"),f6=Object.prototype.hasOwnProperty,h6=u6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g6={key:!0,ref:!0,__self:!0,__source:!0};function wg(e,t,n){var r,i={},s=null,l=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)f6.call(t,r)&&!g6.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:d6,type:e,key:s,ref:l,props:i,_owner:h6.current}}Aa.Fragment=p6;Aa.jsx=wg;Aa.jsxs=wg;dg.exports=Aa;var o=dg.exports,wd={},bg={exports:{}},Vt={},kg={exports:{}},jg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,O){var C=M.length;M.push(O);e:for(;0<C;){var Q=C-1>>>1,X=M[Q];if(0<i(X,O))M[Q]=O,M[C]=X,C=Q;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var O=M[0],C=M.pop();if(C!==O){M[0]=C;e:for(var Q=0,X=M.length,b=X>>>1;Q<b;){var H=2*(Q+1)-1,_=M[H],Z=H+1,V=M[Z];if(0>i(_,C))Z<X&&0>i(V,_)?(M[Q]=V,M[Z]=C,Q=Z):(M[Q]=_,M[H]=C,Q=H);else if(Z<X&&0>i(V,C))M[Q]=V,M[Z]=C,Q=Z;else break e}}return O}function i(M,O){var C=M.sortIndex-O.sortIndex;return C!==0?C:M.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var c=[],d=[],p=1,f=null,h=3,g=!1,w=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(M){for(var O=n(d);O!==null;){if(O.callback===null)r(d);else if(O.startTime<=M)r(d),O.sortIndex=O.expirationTime,t(c,O);else break;O=n(d)}}function $(M){if(v=!1,y(M),!w)if(n(c)!==null)w=!0,G(I);else{var O=n(d);O!==null&&q($,O.startTime-M)}}function I(M,O){w=!1,v&&(v=!1,x(z),z=-1),g=!0;var C=h;try{for(y(O),f=n(c);f!==null&&(!(f.expirationTime>O)||M&&!P());){var Q=f.callback;if(typeof Q=="function"){f.callback=null,h=f.priorityLevel;var X=Q(f.expirationTime<=O);O=e.unstable_now(),typeof X=="function"?f.callback=X:f===n(c)&&r(c),y(O)}else r(c);f=n(c)}if(f!==null)var b=!0;else{var H=n(d);H!==null&&q($,H.startTime-O),b=!1}return b}finally{f=null,h=C,g=!1}}var k=!1,j=null,z=-1,R=5,T=-1;function P(){return!(e.unstable_now()-T<R)}function E(){if(j!==null){var M=e.unstable_now();T=M;var O=!0;try{O=j(!0,M)}finally{O?A():(k=!1,j=null)}}else k=!1}var A;if(typeof L=="function")A=function(){L(E)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,F=N.port2;N.port1.onmessage=E,A=function(){F.postMessage(null)}}else A=function(){S(E,0)};function G(M){j=M,k||(k=!0,A())}function q(M,O){z=S(function(){M(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,G(I))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(M){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var C=h;h=O;try{return M()}finally{h=C}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,O){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var C=h;h=M;try{return O()}finally{h=C}},e.unstable_scheduleCallback=function(M,O,C){var Q=e.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?Q+C:Q):C=Q,M){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=C+X,M={id:p++,callback:O,priorityLevel:M,startTime:C,expirationTime:X,sortIndex:-1},C>Q?(M.sortIndex=C,t(d,M),n(c)===null&&M===n(d)&&(v?(x(z),z=-1):v=!0,q($,C-Q))):(M.sortIndex=X,t(c,M),w||g||(w=!0,G(I))),M},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(M){var O=h;return function(){var C=h;h=O;try{return M.apply(this,arguments)}finally{h=C}}}})(jg);kg.exports=jg;var m6=kg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x6=m,Ut=m6;function K(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sg=new Set,is={};function qr(e,t){_i(e,t),_i(e+"Capture",t)}function _i(e,t){for(is[e]=t,e=0;e<t.length;e++)Sg.add(t[e])}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bd=Object.prototype.hasOwnProperty,L6=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,U0={},V0={};function y6(e){return bd.call(V0,e)?!0:bd.call(U0,e)?!1:L6.test(e)?V0[e]=!0:(U0[e]=!0,!1)}function v6(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function w6(e,t,n,r){if(t===null||typeof t>"u"||v6(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $t(e,t,n,r,i,s,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=l}var pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pt[e]=new $t(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pt[t]=new $t(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pt[e]=new $t(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pt[e]=new $t(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pt[e]=new $t(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pt[e]=new $t(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pt[e]=new $t(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pt[e]=new $t(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pt[e]=new $t(e,5,!1,e.toLowerCase(),null,!1,!1)});var Q1=/[\-:]([a-z])/g;function X1(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Q1,X1);pt[t]=new $t(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Q1,X1);pt[t]=new $t(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Q1,X1);pt[t]=new $t(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pt[e]=new $t(e,1,!1,e.toLowerCase(),null,!1,!1)});pt.xlinkHref=new $t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pt[e]=new $t(e,1,!1,e.toLowerCase(),null,!0,!0)});function J1(e,t,n,r){var i=pt.hasOwnProperty(t)?pt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(w6(t,n,i,r)&&(n=null),r||i===null?y6(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Kn=x6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fs=Symbol.for("react.element"),pi=Symbol.for("react.portal"),fi=Symbol.for("react.fragment"),ep=Symbol.for("react.strict_mode"),kd=Symbol.for("react.profiler"),$g=Symbol.for("react.provider"),Cg=Symbol.for("react.context"),tp=Symbol.for("react.forward_ref"),jd=Symbol.for("react.suspense"),Sd=Symbol.for("react.suspense_list"),np=Symbol.for("react.memo"),Jn=Symbol.for("react.lazy"),Eg=Symbol.for("react.offscreen"),W0=Symbol.iterator;function co(e){return e===null||typeof e!="object"?null:(e=W0&&e[W0]||e["@@iterator"],typeof e=="function"?e:null)}var Ue=Object.assign,bc;function Mo(e){if(bc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bc=t&&t[1]||""}return`
`+bc+e}var kc=!1;function jc(e,t){if(!e||kc)return"";kc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),l=i.length-1,a=s.length-1;1<=l&&0<=a&&i[l]!==s[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==s[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==s[a]){var c=`
`+i[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=a);break}}}finally{kc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mo(e):""}function b6(e){switch(e.tag){case 5:return Mo(e.type);case 16:return Mo("Lazy");case 13:return Mo("Suspense");case 19:return Mo("SuspenseList");case 0:case 2:case 15:return e=jc(e.type,!1),e;case 11:return e=jc(e.type.render,!1),e;case 1:return e=jc(e.type,!0),e;default:return""}}function $d(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fi:return"Fragment";case pi:return"Portal";case kd:return"Profiler";case ep:return"StrictMode";case jd:return"Suspense";case Sd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Cg:return(e.displayName||"Context")+".Consumer";case $g:return(e._context.displayName||"Context")+".Provider";case tp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case np:return t=e.displayName||null,t!==null?t:$d(e.type)||"Memo";case Jn:t=e._payload,e=e._init;try{return $d(e(t))}catch{}}return null}function k6(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $d(t);case 8:return t===ep?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function j6(e){var t=Pg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,s.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Hs(e){e._valueTracker||(e._valueTracker=j6(e))}function Ig(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Pg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Kl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Cd(e,t){var n=t.checked;return Ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function K0(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=xr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Tg(e,t){t=t.checked,t!=null&&J1(e,"checked",t,!1)}function Ed(e,t){Tg(e,t);var n=xr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Pd(e,t.type,n):t.hasOwnProperty("defaultValue")&&Pd(e,t.type,xr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Y0(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Pd(e,t,n){(t!=="number"||Kl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ao=Array.isArray;function Ci(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+xr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Id(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(K(91));return Ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function G0(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(K(92));if(Ao(n)){if(1<n.length)throw Error(K(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:xr(n)}}function Rg(e,t){var n=xr(t.value),r=xr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Z0(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function zg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Td(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?zg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Us,Mg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Us=Us||document.createElement("div"),Us.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Us.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function os(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},S6=["Webkit","ms","Moz","O"];Object.keys(Fo).forEach(function(e){S6.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fo[t]=Fo[e]})});function Ag(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fo.hasOwnProperty(e)&&Fo[e]?(""+t).trim():t+"px"}function _g(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ag(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var $6=Ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rd(e,t){if(t){if($6[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(K(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(K(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(K(61))}if(t.style!=null&&typeof t.style!="object")throw Error(K(62))}}function zd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Md=null;function rp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ad=null,Ei=null,Pi=null;function q0(e){if(e=Ts(e)){if(typeof Ad!="function")throw Error(K(280));var t=e.stateNode;t&&(t=Ba(t),Ad(e.stateNode,e.type,t))}}function Ng(e){Ei?Pi?Pi.push(e):Pi=[e]:Ei=e}function Dg(){if(Ei){var e=Ei,t=Pi;if(Pi=Ei=null,q0(e),t)for(e=0;e<t.length;e++)q0(t[e])}}function Og(e,t){return e(t)}function Bg(){}var Sc=!1;function Fg(e,t,n){if(Sc)return e(t,n);Sc=!0;try{return Og(e,t,n)}finally{Sc=!1,(Ei!==null||Pi!==null)&&(Bg(),Dg())}}function ss(e,t){var n=e.stateNode;if(n===null)return null;var r=Ba(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(K(231,t,typeof n));return n}var _d=!1;if(Fn)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){_d=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{_d=!1}function C6(e,t,n,r,i,s,l,a,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(p){this.onError(p)}}var Ho=!1,Yl=null,Gl=!1,Nd=null,E6={onError:function(e){Ho=!0,Yl=e}};function P6(e,t,n,r,i,s,l,a,c){Ho=!1,Yl=null,C6.apply(E6,arguments)}function I6(e,t,n,r,i,s,l,a,c){if(P6.apply(this,arguments),Ho){if(Ho){var d=Yl;Ho=!1,Yl=null}else throw Error(K(198));Gl||(Gl=!0,Nd=d)}}function Qr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Hg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Q0(e){if(Qr(e)!==e)throw Error(K(188))}function T6(e){var t=e.alternate;if(!t){if(t=Qr(e),t===null)throw Error(K(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Q0(i),e;if(s===r)return Q0(i),t;s=s.sibling}throw Error(K(188))}if(n.return!==r.return)n=i,r=s;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=s;break}if(a===r){l=!0,r=i,n=s;break}a=a.sibling}if(!l){for(a=s.child;a;){if(a===n){l=!0,n=s,r=i;break}if(a===r){l=!0,r=s,n=i;break}a=a.sibling}if(!l)throw Error(K(189))}}if(n.alternate!==r)throw Error(K(190))}if(n.tag!==3)throw Error(K(188));return n.stateNode.current===n?e:t}function Ug(e){return e=T6(e),e!==null?Vg(e):null}function Vg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Vg(e);if(t!==null)return t;e=e.sibling}return null}var Wg=Ut.unstable_scheduleCallback,X0=Ut.unstable_cancelCallback,R6=Ut.unstable_shouldYield,z6=Ut.unstable_requestPaint,Ye=Ut.unstable_now,M6=Ut.unstable_getCurrentPriorityLevel,ip=Ut.unstable_ImmediatePriority,Kg=Ut.unstable_UserBlockingPriority,Zl=Ut.unstable_NormalPriority,A6=Ut.unstable_LowPriority,Yg=Ut.unstable_IdlePriority,_a=null,Cn=null;function _6(e){if(Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot(_a,e,void 0,(e.current.flags&128)===128)}catch{}}var hn=Math.clz32?Math.clz32:O6,N6=Math.log,D6=Math.LN2;function O6(e){return e>>>=0,e===0?32:31-(N6(e)/D6|0)|0}var Vs=64,Ws=4194304;function _o(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ql(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=_o(a):(s&=l,s!==0&&(r=_o(s)))}else l=n&~i,l!==0?r=_o(l):s!==0&&(r=_o(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-hn(t),i=1<<n,r|=e[n],t&=~i;return r}function B6(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function F6(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-hn(s),a=1<<l,c=i[l];c===-1?(!(a&n)||a&r)&&(i[l]=B6(a,t)):c<=t&&(e.expiredLanes|=a),s&=~a}}function Dd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Gg(){var e=Vs;return Vs<<=1,!(Vs&4194240)&&(Vs=64),e}function $c(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ps(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-hn(t),e[t]=n}function H6(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-hn(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function op(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-hn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var je=0;function Zg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var qg,sp,Qg,Xg,Jg,Od=!1,Ks=[],sr=null,lr=null,ar=null,ls=new Map,as=new Map,tr=[],U6="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function J0(e,t){switch(e){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":ls.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":as.delete(t.pointerId)}}function po(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Ts(t),t!==null&&sp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function V6(e,t,n,r,i){switch(t){case"focusin":return sr=po(sr,e,t,n,r,i),!0;case"dragenter":return lr=po(lr,e,t,n,r,i),!0;case"mouseover":return ar=po(ar,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return ls.set(s,po(ls.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,as.set(s,po(as.get(s)||null,e,t,n,r,i)),!0}return!1}function em(e){var t=Rr(e.target);if(t!==null){var n=Qr(t);if(n!==null){if(t=n.tag,t===13){if(t=Hg(n),t!==null){e.blockedOn=t,Jg(e.priority,function(){Qg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Bd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Md=r,n.target.dispatchEvent(r),Md=null}else return t=Ts(n),t!==null&&sp(t),e.blockedOn=n,!1;t.shift()}return!0}function ef(e,t,n){Sl(e)&&n.delete(t)}function W6(){Od=!1,sr!==null&&Sl(sr)&&(sr=null),lr!==null&&Sl(lr)&&(lr=null),ar!==null&&Sl(ar)&&(ar=null),ls.forEach(ef),as.forEach(ef)}function fo(e,t){e.blockedOn===t&&(e.blockedOn=null,Od||(Od=!0,Ut.unstable_scheduleCallback(Ut.unstable_NormalPriority,W6)))}function cs(e){function t(i){return fo(i,e)}if(0<Ks.length){fo(Ks[0],e);for(var n=1;n<Ks.length;n++){var r=Ks[n];r.blockedOn===e&&(r.blockedOn=null)}}for(sr!==null&&fo(sr,e),lr!==null&&fo(lr,e),ar!==null&&fo(ar,e),ls.forEach(t),as.forEach(t),n=0;n<tr.length;n++)r=tr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tr.length&&(n=tr[0],n.blockedOn===null);)em(n),n.blockedOn===null&&tr.shift()}var Ii=Kn.ReactCurrentBatchConfig,Ql=!0;function K6(e,t,n,r){var i=je,s=Ii.transition;Ii.transition=null;try{je=1,lp(e,t,n,r)}finally{je=i,Ii.transition=s}}function Y6(e,t,n,r){var i=je,s=Ii.transition;Ii.transition=null;try{je=4,lp(e,t,n,r)}finally{je=i,Ii.transition=s}}function lp(e,t,n,r){if(Ql){var i=Bd(e,t,n,r);if(i===null)_c(e,t,r,Xl,n),J0(e,r);else if(V6(i,e,t,n,r))r.stopPropagation();else if(J0(e,r),t&4&&-1<U6.indexOf(e)){for(;i!==null;){var s=Ts(i);if(s!==null&&qg(s),s=Bd(e,t,n,r),s===null&&_c(e,t,r,Xl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else _c(e,t,r,null,n)}}var Xl=null;function Bd(e,t,n,r){if(Xl=null,e=rp(r),e=Rr(e),e!==null)if(t=Qr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Hg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xl=e,null}function tm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(M6()){case ip:return 1;case Kg:return 4;case Zl:case A6:return 16;case Yg:return 536870912;default:return 16}default:return 16}}var rr=null,ap=null,$l=null;function nm(){if($l)return $l;var e,t=ap,n=t.length,r,i="value"in rr?rr.value:rr.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[s-r];r++);return $l=i.slice(e,1<r?1-r:void 0)}function Cl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ys(){return!0}function tf(){return!1}function Wt(e){function t(n,r,i,s,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ys:tf,this.isPropagationStopped=tf,this}return Ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ys)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ys)},persist:function(){},isPersistent:Ys}),t}var Xi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cp=Wt(Xi),Is=Ue({},Xi,{view:0,detail:0}),G6=Wt(Is),Cc,Ec,ho,Na=Ue({},Is,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:up,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ho&&(ho&&e.type==="mousemove"?(Cc=e.screenX-ho.screenX,Ec=e.screenY-ho.screenY):Ec=Cc=0,ho=e),Cc)},movementY:function(e){return"movementY"in e?e.movementY:Ec}}),nf=Wt(Na),Z6=Ue({},Na,{dataTransfer:0}),q6=Wt(Z6),Q6=Ue({},Is,{relatedTarget:0}),Pc=Wt(Q6),X6=Ue({},Xi,{animationName:0,elapsedTime:0,pseudoElement:0}),J6=Wt(X6),e7=Ue({},Xi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),t7=Wt(e7),n7=Ue({},Xi,{data:0}),rf=Wt(n7),r7={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i7={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},o7={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function s7(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=o7[e])?!!t[e]:!1}function up(){return s7}var l7=Ue({},Is,{key:function(e){if(e.key){var t=r7[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Cl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?i7[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:up,charCode:function(e){return e.type==="keypress"?Cl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),a7=Wt(l7),c7=Ue({},Na,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),of=Wt(c7),u7=Ue({},Is,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:up}),d7=Wt(u7),p7=Ue({},Xi,{propertyName:0,elapsedTime:0,pseudoElement:0}),f7=Wt(p7),h7=Ue({},Na,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),g7=Wt(h7),m7=[9,13,27,32],dp=Fn&&"CompositionEvent"in window,Uo=null;Fn&&"documentMode"in document&&(Uo=document.documentMode);var x7=Fn&&"TextEvent"in window&&!Uo,rm=Fn&&(!dp||Uo&&8<Uo&&11>=Uo),sf=" ",lf=!1;function im(e,t){switch(e){case"keyup":return m7.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function om(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hi=!1;function L7(e,t){switch(e){case"compositionend":return om(t);case"keypress":return t.which!==32?null:(lf=!0,sf);case"textInput":return e=t.data,e===sf&&lf?null:e;default:return null}}function y7(e,t){if(hi)return e==="compositionend"||!dp&&im(e,t)?(e=nm(),$l=ap=rr=null,hi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return rm&&t.locale!=="ko"?null:t.data;default:return null}}var v7={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function af(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!v7[e.type]:t==="textarea"}function sm(e,t,n,r){Ng(r),t=Jl(t,"onChange"),0<t.length&&(n=new cp("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vo=null,us=null;function w7(e){xm(e,0)}function Da(e){var t=xi(e);if(Ig(t))return e}function b7(e,t){if(e==="change")return t}var lm=!1;if(Fn){var Ic;if(Fn){var Tc="oninput"in document;if(!Tc){var cf=document.createElement("div");cf.setAttribute("oninput","return;"),Tc=typeof cf.oninput=="function"}Ic=Tc}else Ic=!1;lm=Ic&&(!document.documentMode||9<document.documentMode)}function uf(){Vo&&(Vo.detachEvent("onpropertychange",am),us=Vo=null)}function am(e){if(e.propertyName==="value"&&Da(us)){var t=[];sm(t,us,e,rp(e)),Fg(w7,t)}}function k7(e,t,n){e==="focusin"?(uf(),Vo=t,us=n,Vo.attachEvent("onpropertychange",am)):e==="focusout"&&uf()}function j7(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Da(us)}function S7(e,t){if(e==="click")return Da(t)}function $7(e,t){if(e==="input"||e==="change")return Da(t)}function C7(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ln=typeof Object.is=="function"?Object.is:C7;function ds(e,t){if(Ln(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bd.call(t,i)||!Ln(e[i],t[i]))return!1}return!0}function df(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pf(e,t){var n=df(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=df(n)}}function cm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?cm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function um(){for(var e=window,t=Kl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kl(e.document)}return t}function pp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function E7(e){var t=um(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&cm(n.ownerDocument.documentElement,n)){if(r!==null&&pp(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=pf(n,s);var l=pf(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var P7=Fn&&"documentMode"in document&&11>=document.documentMode,gi=null,Fd=null,Wo=null,Hd=!1;function ff(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hd||gi==null||gi!==Kl(r)||(r=gi,"selectionStart"in r&&pp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wo&&ds(Wo,r)||(Wo=r,r=Jl(Fd,"onSelect"),0<r.length&&(t=new cp("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gi)))}function Gs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mi={animationend:Gs("Animation","AnimationEnd"),animationiteration:Gs("Animation","AnimationIteration"),animationstart:Gs("Animation","AnimationStart"),transitionend:Gs("Transition","TransitionEnd")},Rc={},dm={};Fn&&(dm=document.createElement("div").style,"AnimationEvent"in window||(delete mi.animationend.animation,delete mi.animationiteration.animation,delete mi.animationstart.animation),"TransitionEvent"in window||delete mi.transitionend.transition);function Oa(e){if(Rc[e])return Rc[e];if(!mi[e])return e;var t=mi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in dm)return Rc[e]=t[n];return e}var pm=Oa("animationend"),fm=Oa("animationiteration"),hm=Oa("animationstart"),gm=Oa("transitionend"),mm=new Map,hf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(e,t){mm.set(e,t),qr(t,[e])}for(var zc=0;zc<hf.length;zc++){var Mc=hf[zc],I7=Mc.toLowerCase(),T7=Mc[0].toUpperCase()+Mc.slice(1);yr(I7,"on"+T7)}yr(pm,"onAnimationEnd");yr(fm,"onAnimationIteration");yr(hm,"onAnimationStart");yr("dblclick","onDoubleClick");yr("focusin","onFocus");yr("focusout","onBlur");yr(gm,"onTransitionEnd");_i("onMouseEnter",["mouseout","mouseover"]);_i("onMouseLeave",["mouseout","mouseover"]);_i("onPointerEnter",["pointerout","pointerover"]);_i("onPointerLeave",["pointerout","pointerover"]);qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R7=new Set("cancel close invalid load scroll toggle".split(" ").concat(No));function gf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,I6(r,t,void 0,e),e.currentTarget=null}function xm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],c=a.instance,d=a.currentTarget;if(a=a.listener,c!==s&&i.isPropagationStopped())break e;gf(i,a,d),s=c}else for(l=0;l<r.length;l++){if(a=r[l],c=a.instance,d=a.currentTarget,a=a.listener,c!==s&&i.isPropagationStopped())break e;gf(i,a,d),s=c}}}if(Gl)throw e=Nd,Gl=!1,Nd=null,e}function Me(e,t){var n=t[Yd];n===void 0&&(n=t[Yd]=new Set);var r=e+"__bubble";n.has(r)||(Lm(t,e,2,!1),n.add(r))}function Ac(e,t,n){var r=0;t&&(r|=4),Lm(n,e,r,t)}var Zs="_reactListening"+Math.random().toString(36).slice(2);function ps(e){if(!e[Zs]){e[Zs]=!0,Sg.forEach(function(n){n!=="selectionchange"&&(R7.has(n)||Ac(n,!1,e),Ac(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zs]||(t[Zs]=!0,Ac("selectionchange",!1,t))}}function Lm(e,t,n,r){switch(tm(t)){case 1:var i=K6;break;case 4:i=Y6;break;default:i=lp}n=i.bind(null,t,n,e),i=void 0,!_d||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function _c(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Rr(a),l===null)return;if(c=l.tag,c===5||c===6){r=s=l;continue e}a=a.parentNode}}r=r.return}Fg(function(){var d=s,p=rp(n),f=[];e:{var h=mm.get(e);if(h!==void 0){var g=cp,w=e;switch(e){case"keypress":if(Cl(n)===0)break e;case"keydown":case"keyup":g=a7;break;case"focusin":w="focus",g=Pc;break;case"focusout":w="blur",g=Pc;break;case"beforeblur":case"afterblur":g=Pc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=nf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=q6;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=d7;break;case pm:case fm:case hm:g=J6;break;case gm:g=f7;break;case"scroll":g=G6;break;case"wheel":g=g7;break;case"copy":case"cut":case"paste":g=t7;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=of}var v=(t&4)!==0,S=!v&&e==="scroll",x=v?h!==null?h+"Capture":null:h;v=[];for(var L=d,y;L!==null;){y=L;var $=y.stateNode;if(y.tag===5&&$!==null&&(y=$,x!==null&&($=ss(L,x),$!=null&&v.push(fs(L,$,y)))),S)break;L=L.return}0<v.length&&(h=new g(h,w,null,n,p),f.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==Md&&(w=n.relatedTarget||n.fromElement)&&(Rr(w)||w[Hn]))break e;if((g||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=d,w=w?Rr(w):null,w!==null&&(S=Qr(w),w!==S||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=d),g!==w)){if(v=nf,$="onMouseLeave",x="onMouseEnter",L="mouse",(e==="pointerout"||e==="pointerover")&&(v=of,$="onPointerLeave",x="onPointerEnter",L="pointer"),S=g==null?h:xi(g),y=w==null?h:xi(w),h=new v($,L+"leave",g,n,p),h.target=S,h.relatedTarget=y,$=null,Rr(p)===d&&(v=new v(x,L+"enter",w,n,p),v.target=y,v.relatedTarget=S,$=v),S=$,g&&w)t:{for(v=g,x=w,L=0,y=v;y;y=ni(y))L++;for(y=0,$=x;$;$=ni($))y++;for(;0<L-y;)v=ni(v),L--;for(;0<y-L;)x=ni(x),y--;for(;L--;){if(v===x||x!==null&&v===x.alternate)break t;v=ni(v),x=ni(x)}v=null}else v=null;g!==null&&mf(f,h,g,v,!1),w!==null&&S!==null&&mf(f,S,w,v,!0)}}e:{if(h=d?xi(d):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var I=b7;else if(af(h))if(lm)I=$7;else{I=j7;var k=k7}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(I=S7);if(I&&(I=I(e,d))){sm(f,I,n,p);break e}k&&k(e,h,d),e==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&Pd(h,"number",h.value)}switch(k=d?xi(d):window,e){case"focusin":(af(k)||k.contentEditable==="true")&&(gi=k,Fd=d,Wo=null);break;case"focusout":Wo=Fd=gi=null;break;case"mousedown":Hd=!0;break;case"contextmenu":case"mouseup":case"dragend":Hd=!1,ff(f,n,p);break;case"selectionchange":if(P7)break;case"keydown":case"keyup":ff(f,n,p)}var j;if(dp)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else hi?im(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(rm&&n.locale!=="ko"&&(hi||z!=="onCompositionStart"?z==="onCompositionEnd"&&hi&&(j=nm()):(rr=p,ap="value"in rr?rr.value:rr.textContent,hi=!0)),k=Jl(d,z),0<k.length&&(z=new rf(z,e,null,n,p),f.push({event:z,listeners:k}),j?z.data=j:(j=om(n),j!==null&&(z.data=j)))),(j=x7?L7(e,n):y7(e,n))&&(d=Jl(d,"onBeforeInput"),0<d.length&&(p=new rf("onBeforeInput","beforeinput",null,n,p),f.push({event:p,listeners:d}),p.data=j))}xm(f,t)})}function fs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ss(e,n),s!=null&&r.unshift(fs(e,s,i)),s=ss(e,t),s!=null&&r.push(fs(e,s,i))),e=e.return}return r}function ni(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function mf(e,t,n,r,i){for(var s=t._reactName,l=[];n!==null&&n!==r;){var a=n,c=a.alternate,d=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&d!==null&&(a=d,i?(c=ss(n,s),c!=null&&l.unshift(fs(n,c,a))):i||(c=ss(n,s),c!=null&&l.push(fs(n,c,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var z7=/\r\n?/g,M7=/\u0000|\uFFFD/g;function xf(e){return(typeof e=="string"?e:""+e).replace(z7,`
`).replace(M7,"")}function qs(e,t,n){if(t=xf(t),xf(e)!==t&&n)throw Error(K(425))}function ea(){}var Ud=null,Vd=null;function Wd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kd=typeof setTimeout=="function"?setTimeout:void 0,A7=typeof clearTimeout=="function"?clearTimeout:void 0,Lf=typeof Promise=="function"?Promise:void 0,_7=typeof queueMicrotask=="function"?queueMicrotask:typeof Lf<"u"?function(e){return Lf.resolve(null).then(e).catch(N7)}:Kd;function N7(e){setTimeout(function(){throw e})}function Nc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),cs(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);cs(t)}function cr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function yf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ji=Math.random().toString(36).slice(2),Sn="__reactFiber$"+Ji,hs="__reactProps$"+Ji,Hn="__reactContainer$"+Ji,Yd="__reactEvents$"+Ji,D7="__reactListeners$"+Ji,O7="__reactHandles$"+Ji;function Rr(e){var t=e[Sn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Hn]||n[Sn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=yf(e);e!==null;){if(n=e[Sn])return n;e=yf(e)}return t}e=n,n=e.parentNode}return null}function Ts(e){return e=e[Sn]||e[Hn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(K(33))}function Ba(e){return e[hs]||null}var Gd=[],Li=-1;function vr(e){return{current:e}}function _e(e){0>Li||(e.current=Gd[Li],Gd[Li]=null,Li--)}function Ie(e,t){Li++,Gd[Li]=e.current,e.current=t}var Lr={},vt=vr(Lr),Tt=vr(!1),Br=Lr;function Ni(e,t){var n=e.type.contextTypes;if(!n)return Lr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Rt(e){return e=e.childContextTypes,e!=null}function ta(){_e(Tt),_e(vt)}function vf(e,t,n){if(vt.current!==Lr)throw Error(K(168));Ie(vt,t),Ie(Tt,n)}function ym(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(K(108,k6(e)||"Unknown",i));return Ue({},n,r)}function na(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Lr,Br=vt.current,Ie(vt,e),Ie(Tt,Tt.current),!0}function wf(e,t,n){var r=e.stateNode;if(!r)throw Error(K(169));n?(e=ym(e,t,Br),r.__reactInternalMemoizedMergedChildContext=e,_e(Tt),_e(vt),Ie(vt,e)):_e(Tt),Ie(Tt,n)}var _n=null,Fa=!1,Dc=!1;function vm(e){_n===null?_n=[e]:_n.push(e)}function B7(e){Fa=!0,vm(e)}function wr(){if(!Dc&&_n!==null){Dc=!0;var e=0,t=je;try{var n=_n;for(je=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_n=null,Fa=!1}catch(i){throw _n!==null&&(_n=_n.slice(e+1)),Wg(ip,wr),i}finally{je=t,Dc=!1}}return null}var yi=[],vi=0,ra=null,ia=0,qt=[],Qt=0,Fr=null,Nn=1,Dn="";function Er(e,t){yi[vi++]=ia,yi[vi++]=ra,ra=e,ia=t}function wm(e,t,n){qt[Qt++]=Nn,qt[Qt++]=Dn,qt[Qt++]=Fr,Fr=e;var r=Nn;e=Dn;var i=32-hn(r)-1;r&=~(1<<i),n+=1;var s=32-hn(t)+i;if(30<s){var l=i-i%5;s=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Nn=1<<32-hn(t)+i|n<<i|r,Dn=s+e}else Nn=1<<s|n<<i|r,Dn=e}function fp(e){e.return!==null&&(Er(e,1),wm(e,1,0))}function hp(e){for(;e===ra;)ra=yi[--vi],yi[vi]=null,ia=yi[--vi],yi[vi]=null;for(;e===Fr;)Fr=qt[--Qt],qt[Qt]=null,Dn=qt[--Qt],qt[Qt]=null,Nn=qt[--Qt],qt[Qt]=null}var Ht=null,Bt=null,De=!1,fn=null;function bm(e,t){var n=Jt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function bf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ht=e,Bt=cr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ht=e,Bt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Fr!==null?{id:Nn,overflow:Dn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Jt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ht=e,Bt=null,!0):!1;default:return!1}}function Zd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function qd(e){if(De){var t=Bt;if(t){var n=t;if(!bf(e,t)){if(Zd(e))throw Error(K(418));t=cr(n.nextSibling);var r=Ht;t&&bf(e,t)?bm(r,n):(e.flags=e.flags&-4097|2,De=!1,Ht=e)}}else{if(Zd(e))throw Error(K(418));e.flags=e.flags&-4097|2,De=!1,Ht=e}}}function kf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ht=e}function Qs(e){if(e!==Ht)return!1;if(!De)return kf(e),De=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Wd(e.type,e.memoizedProps)),t&&(t=Bt)){if(Zd(e))throw km(),Error(K(418));for(;t;)bm(e,t),t=cr(t.nextSibling)}if(kf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(K(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Bt=cr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Bt=null}}else Bt=Ht?cr(e.stateNode.nextSibling):null;return!0}function km(){for(var e=Bt;e;)e=cr(e.nextSibling)}function Di(){Bt=Ht=null,De=!1}function gp(e){fn===null?fn=[e]:fn.push(e)}var F7=Kn.ReactCurrentBatchConfig;function go(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(K(309));var r=n.stateNode}if(!r)throw Error(K(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(l){var a=i.refs;l===null?delete a[s]:a[s]=l},t._stringRef=s,t)}if(typeof e!="string")throw Error(K(284));if(!n._owner)throw Error(K(290,e))}return e}function Xs(e,t){throw e=Object.prototype.toString.call(t),Error(K(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function jf(e){var t=e._init;return t(e._payload)}function jm(e){function t(x,L){if(e){var y=x.deletions;y===null?(x.deletions=[L],x.flags|=16):y.push(L)}}function n(x,L){if(!e)return null;for(;L!==null;)t(x,L),L=L.sibling;return null}function r(x,L){for(x=new Map;L!==null;)L.key!==null?x.set(L.key,L):x.set(L.index,L),L=L.sibling;return x}function i(x,L){return x=fr(x,L),x.index=0,x.sibling=null,x}function s(x,L,y){return x.index=y,e?(y=x.alternate,y!==null?(y=y.index,y<L?(x.flags|=2,L):y):(x.flags|=2,L)):(x.flags|=1048576,L)}function l(x){return e&&x.alternate===null&&(x.flags|=2),x}function a(x,L,y,$){return L===null||L.tag!==6?(L=Wc(y,x.mode,$),L.return=x,L):(L=i(L,y),L.return=x,L)}function c(x,L,y,$){var I=y.type;return I===fi?p(x,L,y.props.children,$,y.key):L!==null&&(L.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Jn&&jf(I)===L.type)?($=i(L,y.props),$.ref=go(x,L,y),$.return=x,$):($=Ml(y.type,y.key,y.props,null,x.mode,$),$.ref=go(x,L,y),$.return=x,$)}function d(x,L,y,$){return L===null||L.tag!==4||L.stateNode.containerInfo!==y.containerInfo||L.stateNode.implementation!==y.implementation?(L=Kc(y,x.mode,$),L.return=x,L):(L=i(L,y.children||[]),L.return=x,L)}function p(x,L,y,$,I){return L===null||L.tag!==7?(L=Dr(y,x.mode,$,I),L.return=x,L):(L=i(L,y),L.return=x,L)}function f(x,L,y){if(typeof L=="string"&&L!==""||typeof L=="number")return L=Wc(""+L,x.mode,y),L.return=x,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Fs:return y=Ml(L.type,L.key,L.props,null,x.mode,y),y.ref=go(x,null,L),y.return=x,y;case pi:return L=Kc(L,x.mode,y),L.return=x,L;case Jn:var $=L._init;return f(x,$(L._payload),y)}if(Ao(L)||co(L))return L=Dr(L,x.mode,y,null),L.return=x,L;Xs(x,L)}return null}function h(x,L,y,$){var I=L!==null?L.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return I!==null?null:a(x,L,""+y,$);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Fs:return y.key===I?c(x,L,y,$):null;case pi:return y.key===I?d(x,L,y,$):null;case Jn:return I=y._init,h(x,L,I(y._payload),$)}if(Ao(y)||co(y))return I!==null?null:p(x,L,y,$,null);Xs(x,y)}return null}function g(x,L,y,$,I){if(typeof $=="string"&&$!==""||typeof $=="number")return x=x.get(y)||null,a(L,x,""+$,I);if(typeof $=="object"&&$!==null){switch($.$$typeof){case Fs:return x=x.get($.key===null?y:$.key)||null,c(L,x,$,I);case pi:return x=x.get($.key===null?y:$.key)||null,d(L,x,$,I);case Jn:var k=$._init;return g(x,L,y,k($._payload),I)}if(Ao($)||co($))return x=x.get(y)||null,p(L,x,$,I,null);Xs(L,$)}return null}function w(x,L,y,$){for(var I=null,k=null,j=L,z=L=0,R=null;j!==null&&z<y.length;z++){j.index>z?(R=j,j=null):R=j.sibling;var T=h(x,j,y[z],$);if(T===null){j===null&&(j=R);break}e&&j&&T.alternate===null&&t(x,j),L=s(T,L,z),k===null?I=T:k.sibling=T,k=T,j=R}if(z===y.length)return n(x,j),De&&Er(x,z),I;if(j===null){for(;z<y.length;z++)j=f(x,y[z],$),j!==null&&(L=s(j,L,z),k===null?I=j:k.sibling=j,k=j);return De&&Er(x,z),I}for(j=r(x,j);z<y.length;z++)R=g(j,x,z,y[z],$),R!==null&&(e&&R.alternate!==null&&j.delete(R.key===null?z:R.key),L=s(R,L,z),k===null?I=R:k.sibling=R,k=R);return e&&j.forEach(function(P){return t(x,P)}),De&&Er(x,z),I}function v(x,L,y,$){var I=co(y);if(typeof I!="function")throw Error(K(150));if(y=I.call(y),y==null)throw Error(K(151));for(var k=I=null,j=L,z=L=0,R=null,T=y.next();j!==null&&!T.done;z++,T=y.next()){j.index>z?(R=j,j=null):R=j.sibling;var P=h(x,j,T.value,$);if(P===null){j===null&&(j=R);break}e&&j&&P.alternate===null&&t(x,j),L=s(P,L,z),k===null?I=P:k.sibling=P,k=P,j=R}if(T.done)return n(x,j),De&&Er(x,z),I;if(j===null){for(;!T.done;z++,T=y.next())T=f(x,T.value,$),T!==null&&(L=s(T,L,z),k===null?I=T:k.sibling=T,k=T);return De&&Er(x,z),I}for(j=r(x,j);!T.done;z++,T=y.next())T=g(j,x,z,T.value,$),T!==null&&(e&&T.alternate!==null&&j.delete(T.key===null?z:T.key),L=s(T,L,z),k===null?I=T:k.sibling=T,k=T);return e&&j.forEach(function(E){return t(x,E)}),De&&Er(x,z),I}function S(x,L,y,$){if(typeof y=="object"&&y!==null&&y.type===fi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Fs:e:{for(var I=y.key,k=L;k!==null;){if(k.key===I){if(I=y.type,I===fi){if(k.tag===7){n(x,k.sibling),L=i(k,y.props.children),L.return=x,x=L;break e}}else if(k.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Jn&&jf(I)===k.type){n(x,k.sibling),L=i(k,y.props),L.ref=go(x,k,y),L.return=x,x=L;break e}n(x,k);break}else t(x,k);k=k.sibling}y.type===fi?(L=Dr(y.props.children,x.mode,$,y.key),L.return=x,x=L):($=Ml(y.type,y.key,y.props,null,x.mode,$),$.ref=go(x,L,y),$.return=x,x=$)}return l(x);case pi:e:{for(k=y.key;L!==null;){if(L.key===k)if(L.tag===4&&L.stateNode.containerInfo===y.containerInfo&&L.stateNode.implementation===y.implementation){n(x,L.sibling),L=i(L,y.children||[]),L.return=x,x=L;break e}else{n(x,L);break}else t(x,L);L=L.sibling}L=Kc(y,x.mode,$),L.return=x,x=L}return l(x);case Jn:return k=y._init,S(x,L,k(y._payload),$)}if(Ao(y))return w(x,L,y,$);if(co(y))return v(x,L,y,$);Xs(x,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,L!==null&&L.tag===6?(n(x,L.sibling),L=i(L,y),L.return=x,x=L):(n(x,L),L=Wc(y,x.mode,$),L.return=x,x=L),l(x)):n(x,L)}return S}var Oi=jm(!0),Sm=jm(!1),oa=vr(null),sa=null,wi=null,mp=null;function xp(){mp=wi=sa=null}function Lp(e){var t=oa.current;_e(oa),e._currentValue=t}function Qd(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ti(e,t){sa=e,mp=wi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(It=!0),e.firstContext=null)}function nn(e){var t=e._currentValue;if(mp!==e)if(e={context:e,memoizedValue:t,next:null},wi===null){if(sa===null)throw Error(K(308));wi=e,sa.dependencies={lanes:0,firstContext:e}}else wi=wi.next=e;return t}var zr=null;function yp(e){zr===null?zr=[e]:zr.push(e)}function $m(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,yp(t)):(n.next=i.next,i.next=n),t.interleaved=n,Un(e,r)}function Un(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var er=!1;function vp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ur(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,me&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Un(e,n)}return i=r.interleaved,i===null?(t.next=t,yp(r)):(t.next=i.next,i.next=t),r.interleaved=t,Un(e,n)}function El(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,op(e,n)}}function Sf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function la(e,t,n,r){var i=e.updateQueue;er=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var c=a,d=c.next;c.next=null,l===null?s=d:l.next=d,l=c;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==l&&(a===null?p.firstBaseUpdate=d:a.next=d,p.lastBaseUpdate=c))}if(s!==null){var f=i.baseState;l=0,p=d=c=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){p!==null&&(p=p.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,v=a;switch(h=t,g=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){f=w.call(g,f,h);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,h=typeof w=="function"?w.call(g,f,h):w,h==null)break e;f=Ue({},f,h);break e;case 2:er=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(d=p=g,c=f):p=p.next=g,l|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(p===null&&(c=f),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Ur|=l,e.lanes=l,e.memoizedState=f}}function $f(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(K(191,i));i.call(r)}}}var Rs={},En=vr(Rs),gs=vr(Rs),ms=vr(Rs);function Mr(e){if(e===Rs)throw Error(K(174));return e}function wp(e,t){switch(Ie(ms,t),Ie(gs,e),Ie(En,Rs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Td(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Td(t,e)}_e(En),Ie(En,t)}function Bi(){_e(En),_e(gs),_e(ms)}function Em(e){Mr(ms.current);var t=Mr(En.current),n=Td(t,e.type);t!==n&&(Ie(gs,e),Ie(En,n))}function bp(e){gs.current===e&&(_e(En),_e(gs))}var Fe=vr(0);function aa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Oc=[];function kp(){for(var e=0;e<Oc.length;e++)Oc[e]._workInProgressVersionPrimary=null;Oc.length=0}var Pl=Kn.ReactCurrentDispatcher,Bc=Kn.ReactCurrentBatchConfig,Hr=0,He=null,et=null,st=null,ca=!1,Ko=!1,xs=0,H7=0;function xt(){throw Error(K(321))}function jp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ln(e[n],t[n]))return!1;return!0}function Sp(e,t,n,r,i,s){if(Hr=s,He=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pl.current=e===null||e.memoizedState===null?K7:Y7,e=n(r,i),Ko){s=0;do{if(Ko=!1,xs=0,25<=s)throw Error(K(301));s+=1,st=et=null,t.updateQueue=null,Pl.current=G7,e=n(r,i)}while(Ko)}if(Pl.current=ua,t=et!==null&&et.next!==null,Hr=0,st=et=He=null,ca=!1,t)throw Error(K(300));return e}function $p(){var e=xs!==0;return xs=0,e}function kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?He.memoizedState=st=e:st=st.next=e,st}function rn(){if(et===null){var e=He.alternate;e=e!==null?e.memoizedState:null}else e=et.next;var t=st===null?He.memoizedState:st.next;if(t!==null)st=t,et=e;else{if(e===null)throw Error(K(310));et=e,e={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},st===null?He.memoizedState=st=e:st=st.next=e}return st}function Ls(e,t){return typeof t=="function"?t(e):t}function Fc(e){var t=rn(),n=t.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=e;var r=et,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=l=null,c=null,d=s;do{var p=d.lane;if((Hr&p)===p)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var f={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(a=c=f,l=r):c=c.next=f,He.lanes|=p,Ur|=p}d=d.next}while(d!==null&&d!==s);c===null?l=r:c.next=a,Ln(r,t.memoizedState)||(It=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,He.lanes|=s,Ur|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hc(e){var t=rn(),n=t.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do s=e(s,l.action),l=l.next;while(l!==i);Ln(s,t.memoizedState)||(It=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Pm(){}function Im(e,t){var n=He,r=rn(),i=t(),s=!Ln(r.memoizedState,i);if(s&&(r.memoizedState=i,It=!0),r=r.queue,Cp(zm.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||st!==null&&st.memoizedState.tag&1){if(n.flags|=2048,ys(9,Rm.bind(null,n,r,i,t),void 0,null),at===null)throw Error(K(349));Hr&30||Tm(n,t,i)}return i}function Tm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=He.updateQueue,t===null?(t={lastEffect:null,stores:null},He.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Rm(e,t,n,r){t.value=n,t.getSnapshot=r,Mm(t)&&Am(e)}function zm(e,t,n){return n(function(){Mm(t)&&Am(e)})}function Mm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ln(e,n)}catch{return!0}}function Am(e){var t=Un(e,1);t!==null&&gn(t,e,1,-1)}function Cf(e){var t=kn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ls,lastRenderedState:e},t.queue=e,e=e.dispatch=W7.bind(null,He,e),[t.memoizedState,e]}function ys(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=He.updateQueue,t===null?(t={lastEffect:null,stores:null},He.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function _m(){return rn().memoizedState}function Il(e,t,n,r){var i=kn();He.flags|=e,i.memoizedState=ys(1|t,n,void 0,r===void 0?null:r)}function Ha(e,t,n,r){var i=rn();r=r===void 0?null:r;var s=void 0;if(et!==null){var l=et.memoizedState;if(s=l.destroy,r!==null&&jp(r,l.deps)){i.memoizedState=ys(t,n,s,r);return}}He.flags|=e,i.memoizedState=ys(1|t,n,s,r)}function Ef(e,t){return Il(8390656,8,e,t)}function Cp(e,t){return Ha(2048,8,e,t)}function Nm(e,t){return Ha(4,2,e,t)}function Dm(e,t){return Ha(4,4,e,t)}function Om(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bm(e,t,n){return n=n!=null?n.concat([e]):null,Ha(4,4,Om.bind(null,t,e),n)}function Ep(){}function Fm(e,t){var n=rn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jp(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Hm(e,t){var n=rn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jp(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Um(e,t,n){return Hr&21?(Ln(n,t)||(n=Gg(),He.lanes|=n,Ur|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,It=!0),e.memoizedState=n)}function U7(e,t){var n=je;je=n!==0&&4>n?n:4,e(!0);var r=Bc.transition;Bc.transition={};try{e(!1),t()}finally{je=n,Bc.transition=r}}function Vm(){return rn().memoizedState}function V7(e,t,n){var r=pr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Wm(e))Km(t,n);else if(n=$m(e,t,n,r),n!==null){var i=jt();gn(n,e,r,i),Ym(n,t,r)}}function W7(e,t,n){var r=pr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wm(e))Km(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var l=t.lastRenderedState,a=s(l,n);if(i.hasEagerState=!0,i.eagerState=a,Ln(a,l)){var c=t.interleaved;c===null?(i.next=i,yp(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=$m(e,t,i,r),n!==null&&(i=jt(),gn(n,e,r,i),Ym(n,t,r))}}function Wm(e){var t=e.alternate;return e===He||t!==null&&t===He}function Km(e,t){Ko=ca=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ym(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,op(e,n)}}var ua={readContext:nn,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},K7={readContext:nn,useCallback:function(e,t){return kn().memoizedState=[e,t===void 0?null:t],e},useContext:nn,useEffect:Ef,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Il(4194308,4,Om.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Il(4194308,4,e,t)},useInsertionEffect:function(e,t){return Il(4,2,e,t)},useMemo:function(e,t){var n=kn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=kn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=V7.bind(null,He,e),[r.memoizedState,e]},useRef:function(e){var t=kn();return e={current:e},t.memoizedState=e},useState:Cf,useDebugValue:Ep,useDeferredValue:function(e){return kn().memoizedState=e},useTransition:function(){var e=Cf(!1),t=e[0];return e=U7.bind(null,e[1]),kn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=He,i=kn();if(De){if(n===void 0)throw Error(K(407));n=n()}else{if(n=t(),at===null)throw Error(K(349));Hr&30||Tm(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Ef(zm.bind(null,r,s,e),[e]),r.flags|=2048,ys(9,Rm.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=kn(),t=at.identifierPrefix;if(De){var n=Dn,r=Nn;n=(r&~(1<<32-hn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=xs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=H7++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Y7={readContext:nn,useCallback:Fm,useContext:nn,useEffect:Cp,useImperativeHandle:Bm,useInsertionEffect:Nm,useLayoutEffect:Dm,useMemo:Hm,useReducer:Fc,useRef:_m,useState:function(){return Fc(Ls)},useDebugValue:Ep,useDeferredValue:function(e){var t=rn();return Um(t,et.memoizedState,e)},useTransition:function(){var e=Fc(Ls)[0],t=rn().memoizedState;return[e,t]},useMutableSource:Pm,useSyncExternalStore:Im,useId:Vm,unstable_isNewReconciler:!1},G7={readContext:nn,useCallback:Fm,useContext:nn,useEffect:Cp,useImperativeHandle:Bm,useInsertionEffect:Nm,useLayoutEffect:Dm,useMemo:Hm,useReducer:Hc,useRef:_m,useState:function(){return Hc(Ls)},useDebugValue:Ep,useDeferredValue:function(e){var t=rn();return et===null?t.memoizedState=e:Um(t,et.memoizedState,e)},useTransition:function(){var e=Hc(Ls)[0],t=rn().memoizedState;return[e,t]},useMutableSource:Pm,useSyncExternalStore:Im,useId:Vm,unstable_isNewReconciler:!1};function un(e,t){if(e&&e.defaultProps){t=Ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Xd(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ua={isMounted:function(e){return(e=e._reactInternals)?Qr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=jt(),i=pr(e),s=Bn(r,i);s.payload=t,n!=null&&(s.callback=n),t=ur(e,s,i),t!==null&&(gn(t,e,i,r),El(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=jt(),i=pr(e),s=Bn(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=ur(e,s,i),t!==null&&(gn(t,e,i,r),El(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jt(),r=pr(e),i=Bn(n,r);i.tag=2,t!=null&&(i.callback=t),t=ur(e,i,r),t!==null&&(gn(t,e,r,n),El(t,e,r))}};function Pf(e,t,n,r,i,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,l):t.prototype&&t.prototype.isPureReactComponent?!ds(n,r)||!ds(i,s):!0}function Gm(e,t,n){var r=!1,i=Lr,s=t.contextType;return typeof s=="object"&&s!==null?s=nn(s):(i=Rt(t)?Br:vt.current,r=t.contextTypes,s=(r=r!=null)?Ni(e,i):Lr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ua,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function If(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ua.enqueueReplaceState(t,t.state,null)}function Jd(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},vp(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=nn(s):(s=Rt(t)?Br:vt.current,i.context=Ni(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Xd(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ua.enqueueReplaceState(i,i.state,null),la(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Fi(e,t){try{var n="",r=t;do n+=b6(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Uc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function e1(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Z7=typeof WeakMap=="function"?WeakMap:Map;function Zm(e,t,n){n=Bn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){pa||(pa=!0,u1=r),e1(e,t)},n}function qm(e,t,n){n=Bn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){e1(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){e1(e,t),typeof r!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Tf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Z7;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=c8.bind(null,e,t,n),t.then(e,e))}function Rf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bn(-1,1),t.tag=2,ur(n,t,1))),n.lanes|=1),e)}var q7=Kn.ReactCurrentOwner,It=!1;function kt(e,t,n,r){t.child=e===null?Sm(t,null,n,r):Oi(t,e.child,n,r)}function Mf(e,t,n,r,i){n=n.render;var s=t.ref;return Ti(t,i),r=Sp(e,t,n,r,s,i),n=$p(),e!==null&&!It?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Vn(e,t,i)):(De&&n&&fp(t),t.flags|=1,kt(e,t,r,i),t.child)}function Af(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!_p(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Qm(e,t,s,r,i)):(e=Ml(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:ds,n(l,r)&&e.ref===t.ref)return Vn(e,t,i)}return t.flags|=1,e=fr(s,r),e.ref=t.ref,e.return=t,t.child=e}function Qm(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(ds(s,r)&&e.ref===t.ref)if(It=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(It=!0);else return t.lanes=e.lanes,Vn(e,t,i)}return t1(e,t,n,r,i)}function Xm(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(ki,Ot),Ot|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ie(ki,Ot),Ot|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ie(ki,Ot),Ot|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Ie(ki,Ot),Ot|=r;return kt(e,t,i,n),t.child}function Jm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function t1(e,t,n,r,i){var s=Rt(n)?Br:vt.current;return s=Ni(t,s),Ti(t,i),n=Sp(e,t,n,r,s,i),r=$p(),e!==null&&!It?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Vn(e,t,i)):(De&&r&&fp(t),t.flags|=1,kt(e,t,n,i),t.child)}function _f(e,t,n,r,i){if(Rt(n)){var s=!0;na(t)}else s=!1;if(Ti(t,i),t.stateNode===null)Tl(e,t),Gm(t,n,r),Jd(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var c=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=nn(d):(d=Rt(n)?Br:vt.current,d=Ni(t,d));var p=n.getDerivedStateFromProps,f=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||c!==d)&&If(t,l,r,d),er=!1;var h=t.memoizedState;l.state=h,la(t,r,l,i),c=t.memoizedState,a!==r||h!==c||Tt.current||er?(typeof p=="function"&&(Xd(t,n,p,r),c=t.memoizedState),(a=er||Pf(t,n,a,r,h,c,d))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=d,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Cm(e,t),a=t.memoizedProps,d=t.type===t.elementType?a:un(t.type,a),l.props=d,f=t.pendingProps,h=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=nn(c):(c=Rt(n)?Br:vt.current,c=Ni(t,c));var g=n.getDerivedStateFromProps;(p=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==f||h!==c)&&If(t,l,r,c),er=!1,h=t.memoizedState,l.state=h,la(t,r,l,i);var w=t.memoizedState;a!==f||h!==w||Tt.current||er?(typeof g=="function"&&(Xd(t,n,g,r),w=t.memoizedState),(d=er||Pf(t,n,d,r,h,w,c)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=c,r=d):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return n1(e,t,n,r,s,i)}function n1(e,t,n,r,i,s){Jm(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&wf(t,n,!1),Vn(e,t,s);r=t.stateNode,q7.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Oi(t,e.child,null,s),t.child=Oi(t,null,a,s)):kt(e,t,a,s),t.memoizedState=r.state,i&&wf(t,n,!0),t.child}function ex(e){var t=e.stateNode;t.pendingContext?vf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&vf(e,t.context,!1),wp(e,t.containerInfo)}function Nf(e,t,n,r,i){return Di(),gp(i),t.flags|=256,kt(e,t,n,r),t.child}var r1={dehydrated:null,treeContext:null,retryLane:0};function i1(e){return{baseLanes:e,cachePool:null,transitions:null}}function tx(e,t,n){var r=t.pendingProps,i=Fe.current,s=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ie(Fe,i&1),e===null)return qd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,s?(r=t.mode,s=t.child,l={mode:"hidden",children:l},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=Ka(l,r,0,null),e=Dr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=i1(n),t.memoizedState=r1,e):Pp(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Q7(e,t,l,r,a,i,n);if(s){s=r.fallback,l=t.mode,i=e.child,a=i.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=fr(i,c),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=fr(a,s):(s=Dr(s,l,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,l=e.child.memoizedState,l=l===null?i1(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=r1,r}return s=e.child,e=s.sibling,r=fr(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Pp(e,t){return t=Ka({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Js(e,t,n,r){return r!==null&&gp(r),Oi(t,e.child,null,n),e=Pp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Q7(e,t,n,r,i,s,l){if(n)return t.flags&256?(t.flags&=-257,r=Uc(Error(K(422))),Js(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Ka({mode:"visible",children:r.children},i,0,null),s=Dr(s,i,l,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Oi(t,e.child,null,l),t.child.memoizedState=i1(l),t.memoizedState=r1,s);if(!(t.mode&1))return Js(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(K(419)),r=Uc(s,r,void 0),Js(e,t,l,r)}if(a=(l&e.childLanes)!==0,It||a){if(r=at,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Un(e,i),gn(r,e,i,-1))}return Ap(),r=Uc(Error(K(421))),Js(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=u8.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Bt=cr(i.nextSibling),Ht=t,De=!0,fn=null,e!==null&&(qt[Qt++]=Nn,qt[Qt++]=Dn,qt[Qt++]=Fr,Nn=e.id,Dn=e.overflow,Fr=t),t=Pp(t,r.children),t.flags|=4096,t)}function Df(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qd(e.return,t,n)}function Vc(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function nx(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(kt(e,t,r.children,n),r=Fe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Df(e,n,t);else if(e.tag===19)Df(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ie(Fe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&aa(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Vc(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&aa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Vc(t,!0,n,null,s);break;case"together":Vc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Tl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ur|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(K(153));if(t.child!==null){for(e=t.child,n=fr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function X7(e,t,n){switch(t.tag){case 3:ex(t),Di();break;case 5:Em(t);break;case 1:Rt(t.type)&&na(t);break;case 4:wp(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ie(oa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ie(Fe,Fe.current&1),t.flags|=128,null):n&t.child.childLanes?tx(e,t,n):(Ie(Fe,Fe.current&1),e=Vn(e,t,n),e!==null?e.sibling:null);Ie(Fe,Fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return nx(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(Fe,Fe.current),r)break;return null;case 22:case 23:return t.lanes=0,Xm(e,t,n)}return Vn(e,t,n)}var rx,o1,ix,ox;rx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};o1=function(){};ix=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Mr(En.current);var s=null;switch(n){case"input":i=Cd(e,i),r=Cd(e,r),s=[];break;case"select":i=Ue({},i,{value:void 0}),r=Ue({},r,{value:void 0}),s=[];break;case"textarea":i=Id(e,i),r=Id(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ea)}Rd(n,r);var l;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var a=i[d];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(is.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var c=r[d];if(a=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&c!==a&&(c!=null||a!=null))if(d==="style")if(a){for(l in a)!a.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&a[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(s||(s=[]),s.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(is.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&Me("scroll",e),s||a===c||(s=[])):(s=s||[]).push(d,c))}n&&(s=s||[]).push("style",n);var d=s;(t.updateQueue=d)&&(t.flags|=4)}};ox=function(e,t,n,r){n!==r&&(t.flags|=4)};function mo(e,t){if(!De)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Lt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function J7(e,t,n){var r=t.pendingProps;switch(hp(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(t),null;case 1:return Rt(t.type)&&ta(),Lt(t),null;case 3:return r=t.stateNode,Bi(),_e(Tt),_e(vt),kp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Qs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,fn!==null&&(f1(fn),fn=null))),o1(e,t),Lt(t),null;case 5:bp(t);var i=Mr(ms.current);if(n=t.type,e!==null&&t.stateNode!=null)ix(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(K(166));return Lt(t),null}if(e=Mr(En.current),Qs(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Sn]=t,r[hs]=s,e=(t.mode&1)!==0,n){case"dialog":Me("cancel",r),Me("close",r);break;case"iframe":case"object":case"embed":Me("load",r);break;case"video":case"audio":for(i=0;i<No.length;i++)Me(No[i],r);break;case"source":Me("error",r);break;case"img":case"image":case"link":Me("error",r),Me("load",r);break;case"details":Me("toggle",r);break;case"input":K0(r,s),Me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Me("invalid",r);break;case"textarea":G0(r,s),Me("invalid",r)}Rd(n,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&qs(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&qs(r.textContent,a,e),i=["children",""+a]):is.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Me("scroll",r)}switch(n){case"input":Hs(r),Y0(r,s,!0);break;case"textarea":Hs(r),Z0(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ea)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Sn]=t,e[hs]=r,rx(e,t,!1,!1),t.stateNode=e;e:{switch(l=zd(n,r),n){case"dialog":Me("cancel",e),Me("close",e),i=r;break;case"iframe":case"object":case"embed":Me("load",e),i=r;break;case"video":case"audio":for(i=0;i<No.length;i++)Me(No[i],e);i=r;break;case"source":Me("error",e),i=r;break;case"img":case"image":case"link":Me("error",e),Me("load",e),i=r;break;case"details":Me("toggle",e),i=r;break;case"input":K0(e,r),i=Cd(e,r),Me("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ue({},r,{value:void 0}),Me("invalid",e);break;case"textarea":G0(e,r),i=Id(e,r),Me("invalid",e);break;default:i=r}Rd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var c=a[s];s==="style"?_g(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Mg(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&os(e,c):typeof c=="number"&&os(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(is.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Me("scroll",e):c!=null&&J1(e,s,c,l))}switch(n){case"input":Hs(e),Y0(e,r,!1);break;case"textarea":Hs(e),Z0(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xr(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Ci(e,!!r.multiple,s,!1):r.defaultValue!=null&&Ci(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ea)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Lt(t),null;case 6:if(e&&t.stateNode!=null)ox(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(K(166));if(n=Mr(ms.current),Mr(En.current),Qs(t)){if(r=t.stateNode,n=t.memoizedProps,r[Sn]=t,(s=r.nodeValue!==n)&&(e=Ht,e!==null))switch(e.tag){case 3:qs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&qs(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Sn]=t,t.stateNode=r}return Lt(t),null;case 13:if(_e(Fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(De&&Bt!==null&&t.mode&1&&!(t.flags&128))km(),Di(),t.flags|=98560,s=!1;else if(s=Qs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(K(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(K(317));s[Sn]=t}else Di(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Lt(t),s=!1}else fn!==null&&(f1(fn),fn=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Fe.current&1?rt===0&&(rt=3):Ap())),t.updateQueue!==null&&(t.flags|=4),Lt(t),null);case 4:return Bi(),o1(e,t),e===null&&ps(t.stateNode.containerInfo),Lt(t),null;case 10:return Lp(t.type._context),Lt(t),null;case 17:return Rt(t.type)&&ta(),Lt(t),null;case 19:if(_e(Fe),s=t.memoizedState,s===null)return Lt(t),null;if(r=(t.flags&128)!==0,l=s.rendering,l===null)if(r)mo(s,!1);else{if(rt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=aa(e),l!==null){for(t.flags|=128,mo(s,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ie(Fe,Fe.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ye()>Hi&&(t.flags|=128,r=!0,mo(s,!1),t.lanes=4194304)}else{if(!r)if(e=aa(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!De)return Lt(t),null}else 2*Ye()-s.renderingStartTime>Hi&&n!==1073741824&&(t.flags|=128,r=!0,mo(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(n=s.last,n!==null?n.sibling=l:t.child=l,s.last=l)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ye(),t.sibling=null,n=Fe.current,Ie(Fe,r?n&1|2:n&1),t):(Lt(t),null);case 22:case 23:return Mp(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ot&1073741824&&(Lt(t),t.subtreeFlags&6&&(t.flags|=8192)):Lt(t),null;case 24:return null;case 25:return null}throw Error(K(156,t.tag))}function e8(e,t){switch(hp(t),t.tag){case 1:return Rt(t.type)&&ta(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bi(),_e(Tt),_e(vt),kp(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return bp(t),null;case 13:if(_e(Fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(K(340));Di()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return _e(Fe),null;case 4:return Bi(),null;case 10:return Lp(t.type._context),null;case 22:case 23:return Mp(),null;case 24:return null;default:return null}}var el=!1,yt=!1,t8=typeof WeakSet=="function"?WeakSet:Set,J=null;function bi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){We(e,t,r)}else n.current=null}function s1(e,t,n){try{n()}catch(r){We(e,t,r)}}var Of=!1;function n8(e,t){if(Ud=Ql,e=um(),pp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var l=0,a=-1,c=-1,d=0,p=0,f=e,h=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=l+i),f!==s||r!==0&&f.nodeType!==3||(c=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===e)break t;if(h===n&&++d===i&&(a=l),h===s&&++p===r&&(c=l),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vd={focusedElem:e,selectionRange:n},Ql=!1,J=t;J!==null;)if(t=J,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,J=e;else for(;J!==null;){t=J;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,S=w.memoizedState,x=t.stateNode,L=x.getSnapshotBeforeUpdate(t.elementType===t.type?v:un(t.type,v),S);x.__reactInternalSnapshotBeforeUpdate=L}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(K(163))}}catch($){We(t,t.return,$)}if(e=t.sibling,e!==null){e.return=t.return,J=e;break}J=t.return}return w=Of,Of=!1,w}function Yo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&s1(t,n,s)}i=i.next}while(i!==r)}}function Va(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function l1(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function sx(e){var t=e.alternate;t!==null&&(e.alternate=null,sx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Sn],delete t[hs],delete t[Yd],delete t[D7],delete t[O7])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lx(e){return e.tag===5||e.tag===3||e.tag===4}function Bf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function a1(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ea));else if(r!==4&&(e=e.child,e!==null))for(a1(e,t,n),e=e.sibling;e!==null;)a1(e,t,n),e=e.sibling}function c1(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(c1(e,t,n),e=e.sibling;e!==null;)c1(e,t,n),e=e.sibling}var ct=null,dn=!1;function Zn(e,t,n){for(n=n.child;n!==null;)ax(e,t,n),n=n.sibling}function ax(e,t,n){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount(_a,n)}catch{}switch(n.tag){case 5:yt||bi(n,t);case 6:var r=ct,i=dn;ct=null,Zn(e,t,n),ct=r,dn=i,ct!==null&&(dn?(e=ct,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ct.removeChild(n.stateNode));break;case 18:ct!==null&&(dn?(e=ct,n=n.stateNode,e.nodeType===8?Nc(e.parentNode,n):e.nodeType===1&&Nc(e,n),cs(e)):Nc(ct,n.stateNode));break;case 4:r=ct,i=dn,ct=n.stateNode.containerInfo,dn=!0,Zn(e,t,n),ct=r,dn=i;break;case 0:case 11:case 14:case 15:if(!yt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&s1(n,t,l),i=i.next}while(i!==r)}Zn(e,t,n);break;case 1:if(!yt&&(bi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){We(n,t,a)}Zn(e,t,n);break;case 21:Zn(e,t,n);break;case 22:n.mode&1?(yt=(r=yt)||n.memoizedState!==null,Zn(e,t,n),yt=r):Zn(e,t,n);break;default:Zn(e,t,n)}}function Ff(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new t8),t.forEach(function(r){var i=d8.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function cn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ct=a.stateNode,dn=!1;break e;case 3:ct=a.stateNode.containerInfo,dn=!0;break e;case 4:ct=a.stateNode.containerInfo,dn=!0;break e}a=a.return}if(ct===null)throw Error(K(160));ax(s,l,i),ct=null,dn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){We(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)cx(t,e),t=t.sibling}function cx(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(cn(t,e),yn(e),r&4){try{Yo(3,e,e.return),Va(3,e)}catch(v){We(e,e.return,v)}try{Yo(5,e,e.return)}catch(v){We(e,e.return,v)}}break;case 1:cn(t,e),yn(e),r&512&&n!==null&&bi(n,n.return);break;case 5:if(cn(t,e),yn(e),r&512&&n!==null&&bi(n,n.return),e.flags&32){var i=e.stateNode;try{os(i,"")}catch(v){We(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,l=n!==null?n.memoizedProps:s,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Tg(i,s),zd(a,l);var d=zd(a,s);for(l=0;l<c.length;l+=2){var p=c[l],f=c[l+1];p==="style"?_g(i,f):p==="dangerouslySetInnerHTML"?Mg(i,f):p==="children"?os(i,f):J1(i,p,f,d)}switch(a){case"input":Ed(i,s);break;case"textarea":Rg(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Ci(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ci(i,!!s.multiple,s.defaultValue,!0):Ci(i,!!s.multiple,s.multiple?[]:"",!1))}i[hs]=s}catch(v){We(e,e.return,v)}}break;case 6:if(cn(t,e),yn(e),r&4){if(e.stateNode===null)throw Error(K(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(v){We(e,e.return,v)}}break;case 3:if(cn(t,e),yn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{cs(t.containerInfo)}catch(v){We(e,e.return,v)}break;case 4:cn(t,e),yn(e);break;case 13:cn(t,e),yn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Rp=Ye())),r&4&&Ff(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(yt=(d=yt)||p,cn(t,e),yt=d):cn(t,e),yn(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&e.mode&1)for(J=e,p=e.child;p!==null;){for(f=J=p;J!==null;){switch(h=J,g=h.child,h.tag){case 0:case 11:case 14:case 15:Yo(4,h,h.return);break;case 1:bi(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){We(r,n,v)}}break;case 5:bi(h,h.return);break;case 22:if(h.memoizedState!==null){Uf(f);continue}}g!==null?(g.return=h,J=g):Uf(f)}p=p.sibling}e:for(p=null,f=e;;){if(f.tag===5){if(p===null){p=f;try{i=f.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,c=f.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=Ag("display",l))}catch(v){We(e,e.return,v)}}}else if(f.tag===6){if(p===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(v){We(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;p===f&&(p=null),f=f.return}p===f&&(p=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:cn(t,e),yn(e),r&4&&Ff(e);break;case 21:break;default:cn(t,e),yn(e)}}function yn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(lx(n)){var r=n;break e}n=n.return}throw Error(K(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(os(i,""),r.flags&=-33);var s=Bf(e);c1(e,s,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Bf(e);a1(e,a,l);break;default:throw Error(K(161))}}catch(c){We(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function r8(e,t,n){J=e,ux(e)}function ux(e,t,n){for(var r=(e.mode&1)!==0;J!==null;){var i=J,s=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||el;if(!l){var a=i.alternate,c=a!==null&&a.memoizedState!==null||yt;a=el;var d=yt;if(el=l,(yt=c)&&!d)for(J=i;J!==null;)l=J,c=l.child,l.tag===22&&l.memoizedState!==null?Vf(i):c!==null?(c.return=l,J=c):Vf(i);for(;s!==null;)J=s,ux(s),s=s.sibling;J=i,el=a,yt=d}Hf(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,J=s):Hf(e)}}function Hf(e){for(;J!==null;){var t=J;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:yt||Va(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!yt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:un(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&$f(t,s,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}$f(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var f=p.dehydrated;f!==null&&cs(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(K(163))}yt||t.flags&512&&l1(t)}catch(h){We(t,t.return,h)}}if(t===e){J=null;break}if(n=t.sibling,n!==null){n.return=t.return,J=n;break}J=t.return}}function Uf(e){for(;J!==null;){var t=J;if(t===e){J=null;break}var n=t.sibling;if(n!==null){n.return=t.return,J=n;break}J=t.return}}function Vf(e){for(;J!==null;){var t=J;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Va(4,t)}catch(c){We(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){We(t,i,c)}}var s=t.return;try{l1(t)}catch(c){We(t,s,c)}break;case 5:var l=t.return;try{l1(t)}catch(c){We(t,l,c)}}}catch(c){We(t,t.return,c)}if(t===e){J=null;break}var a=t.sibling;if(a!==null){a.return=t.return,J=a;break}J=t.return}}var i8=Math.ceil,da=Kn.ReactCurrentDispatcher,Ip=Kn.ReactCurrentOwner,tn=Kn.ReactCurrentBatchConfig,me=0,at=null,Je=null,dt=0,Ot=0,ki=vr(0),rt=0,vs=null,Ur=0,Wa=0,Tp=0,Go=null,Pt=null,Rp=0,Hi=1/0,Mn=null,pa=!1,u1=null,dr=null,tl=!1,ir=null,fa=0,Zo=0,d1=null,Rl=-1,zl=0;function jt(){return me&6?Ye():Rl!==-1?Rl:Rl=Ye()}function pr(e){return e.mode&1?me&2&&dt!==0?dt&-dt:F7.transition!==null?(zl===0&&(zl=Gg()),zl):(e=je,e!==0||(e=window.event,e=e===void 0?16:tm(e.type)),e):1}function gn(e,t,n,r){if(50<Zo)throw Zo=0,d1=null,Error(K(185));Ps(e,n,r),(!(me&2)||e!==at)&&(e===at&&(!(me&2)&&(Wa|=n),rt===4&&nr(e,dt)),zt(e,r),n===1&&me===0&&!(t.mode&1)&&(Hi=Ye()+500,Fa&&wr()))}function zt(e,t){var n=e.callbackNode;F6(e,t);var r=ql(e,e===at?dt:0);if(r===0)n!==null&&X0(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&X0(n),t===1)e.tag===0?B7(Wf.bind(null,e)):vm(Wf.bind(null,e)),_7(function(){!(me&6)&&wr()}),n=null;else{switch(Zg(r)){case 1:n=ip;break;case 4:n=Kg;break;case 16:n=Zl;break;case 536870912:n=Yg;break;default:n=Zl}n=Lx(n,dx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function dx(e,t){if(Rl=-1,zl=0,me&6)throw Error(K(327));var n=e.callbackNode;if(Ri()&&e.callbackNode!==n)return null;var r=ql(e,e===at?dt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ha(e,r);else{t=r;var i=me;me|=2;var s=fx();(at!==e||dt!==t)&&(Mn=null,Hi=Ye()+500,Nr(e,t));do try{l8();break}catch(a){px(e,a)}while(!0);xp(),da.current=s,me=i,Je!==null?t=0:(at=null,dt=0,t=rt)}if(t!==0){if(t===2&&(i=Dd(e),i!==0&&(r=i,t=p1(e,i))),t===1)throw n=vs,Nr(e,0),nr(e,r),zt(e,Ye()),n;if(t===6)nr(e,r);else{if(i=e.current.alternate,!(r&30)&&!o8(i)&&(t=ha(e,r),t===2&&(s=Dd(e),s!==0&&(r=s,t=p1(e,s))),t===1))throw n=vs,Nr(e,0),nr(e,r),zt(e,Ye()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(K(345));case 2:Pr(e,Pt,Mn);break;case 3:if(nr(e,r),(r&130023424)===r&&(t=Rp+500-Ye(),10<t)){if(ql(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){jt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Kd(Pr.bind(null,e,Pt,Mn),t);break}Pr(e,Pt,Mn);break;case 4:if(nr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-hn(r);s=1<<l,l=t[l],l>i&&(i=l),r&=~s}if(r=i,r=Ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*i8(r/1960))-r,10<r){e.timeoutHandle=Kd(Pr.bind(null,e,Pt,Mn),r);break}Pr(e,Pt,Mn);break;case 5:Pr(e,Pt,Mn);break;default:throw Error(K(329))}}}return zt(e,Ye()),e.callbackNode===n?dx.bind(null,e):null}function p1(e,t){var n=Go;return e.current.memoizedState.isDehydrated&&(Nr(e,t).flags|=256),e=ha(e,t),e!==2&&(t=Pt,Pt=n,t!==null&&f1(t)),e}function f1(e){Pt===null?Pt=e:Pt.push.apply(Pt,e)}function o8(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ln(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nr(e,t){for(t&=~Tp,t&=~Wa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-hn(t),r=1<<n;e[n]=-1,t&=~r}}function Wf(e){if(me&6)throw Error(K(327));Ri();var t=ql(e,0);if(!(t&1))return zt(e,Ye()),null;var n=ha(e,t);if(e.tag!==0&&n===2){var r=Dd(e);r!==0&&(t=r,n=p1(e,r))}if(n===1)throw n=vs,Nr(e,0),nr(e,t),zt(e,Ye()),n;if(n===6)throw Error(K(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pr(e,Pt,Mn),zt(e,Ye()),null}function zp(e,t){var n=me;me|=1;try{return e(t)}finally{me=n,me===0&&(Hi=Ye()+500,Fa&&wr())}}function Vr(e){ir!==null&&ir.tag===0&&!(me&6)&&Ri();var t=me;me|=1;var n=tn.transition,r=je;try{if(tn.transition=null,je=1,e)return e()}finally{je=r,tn.transition=n,me=t,!(me&6)&&wr()}}function Mp(){Ot=ki.current,_e(ki)}function Nr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,A7(n)),Je!==null)for(n=Je.return;n!==null;){var r=n;switch(hp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ta();break;case 3:Bi(),_e(Tt),_e(vt),kp();break;case 5:bp(r);break;case 4:Bi();break;case 13:_e(Fe);break;case 19:_e(Fe);break;case 10:Lp(r.type._context);break;case 22:case 23:Mp()}n=n.return}if(at=e,Je=e=fr(e.current,null),dt=Ot=t,rt=0,vs=null,Tp=Wa=Ur=0,Pt=Go=null,zr!==null){for(t=0;t<zr.length;t++)if(n=zr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var l=s.next;s.next=i,r.next=l}n.pending=r}zr=null}return e}function px(e,t){do{var n=Je;try{if(xp(),Pl.current=ua,ca){for(var r=He.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ca=!1}if(Hr=0,st=et=He=null,Ko=!1,xs=0,Ip.current=null,n===null||n.return===null){rt=1,vs=t,Je=null;break}e:{var s=e,l=n.return,a=n,c=t;if(t=dt,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,p=a,f=p.tag;if(!(p.mode&1)&&(f===0||f===11||f===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var g=Rf(l);if(g!==null){g.flags&=-257,zf(g,l,a,s,t),g.mode&1&&Tf(s,d,t),t=g,c=d;var w=t.updateQueue;if(w===null){var v=new Set;v.add(c),t.updateQueue=v}else w.add(c);break e}else{if(!(t&1)){Tf(s,d,t),Ap();break e}c=Error(K(426))}}else if(De&&a.mode&1){var S=Rf(l);if(S!==null){!(S.flags&65536)&&(S.flags|=256),zf(S,l,a,s,t),gp(Fi(c,a));break e}}s=c=Fi(c,a),rt!==4&&(rt=2),Go===null?Go=[s]:Go.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var x=Zm(s,c,t);Sf(s,x);break e;case 1:a=c;var L=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof L.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(dr===null||!dr.has(y)))){s.flags|=65536,t&=-t,s.lanes|=t;var $=qm(s,a,t);Sf(s,$);break e}}s=s.return}while(s!==null)}gx(n)}catch(I){t=I,Je===n&&n!==null&&(Je=n=n.return);continue}break}while(!0)}function fx(){var e=da.current;return da.current=ua,e===null?ua:e}function Ap(){(rt===0||rt===3||rt===2)&&(rt=4),at===null||!(Ur&268435455)&&!(Wa&268435455)||nr(at,dt)}function ha(e,t){var n=me;me|=2;var r=fx();(at!==e||dt!==t)&&(Mn=null,Nr(e,t));do try{s8();break}catch(i){px(e,i)}while(!0);if(xp(),me=n,da.current=r,Je!==null)throw Error(K(261));return at=null,dt=0,rt}function s8(){for(;Je!==null;)hx(Je)}function l8(){for(;Je!==null&&!R6();)hx(Je)}function hx(e){var t=xx(e.alternate,e,Ot);e.memoizedProps=e.pendingProps,t===null?gx(e):Je=t,Ip.current=null}function gx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=e8(n,t),n!==null){n.flags&=32767,Je=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{rt=6,Je=null;return}}else if(n=J7(n,t,Ot),n!==null){Je=n;return}if(t=t.sibling,t!==null){Je=t;return}Je=t=e}while(t!==null);rt===0&&(rt=5)}function Pr(e,t,n){var r=je,i=tn.transition;try{tn.transition=null,je=1,a8(e,t,n,r)}finally{tn.transition=i,je=r}return null}function a8(e,t,n,r){do Ri();while(ir!==null);if(me&6)throw Error(K(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(K(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(H6(e,s),e===at&&(Je=at=null,dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||tl||(tl=!0,Lx(Zl,function(){return Ri(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=tn.transition,tn.transition=null;var l=je;je=1;var a=me;me|=4,Ip.current=null,n8(e,n),cx(n,e),E7(Vd),Ql=!!Ud,Vd=Ud=null,e.current=n,r8(n),z6(),me=a,je=l,tn.transition=s}else e.current=n;if(tl&&(tl=!1,ir=e,fa=i),s=e.pendingLanes,s===0&&(dr=null),_6(n.stateNode),zt(e,Ye()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(pa)throw pa=!1,e=u1,u1=null,e;return fa&1&&e.tag!==0&&Ri(),s=e.pendingLanes,s&1?e===d1?Zo++:(Zo=0,d1=e):Zo=0,wr(),null}function Ri(){if(ir!==null){var e=Zg(fa),t=tn.transition,n=je;try{if(tn.transition=null,je=16>e?16:e,ir===null)var r=!1;else{if(e=ir,ir=null,fa=0,me&6)throw Error(K(331));var i=me;for(me|=4,J=e.current;J!==null;){var s=J,l=s.child;if(J.flags&16){var a=s.deletions;if(a!==null){for(var c=0;c<a.length;c++){var d=a[c];for(J=d;J!==null;){var p=J;switch(p.tag){case 0:case 11:case 15:Yo(8,p,s)}var f=p.child;if(f!==null)f.return=p,J=f;else for(;J!==null;){p=J;var h=p.sibling,g=p.return;if(sx(p),p===d){J=null;break}if(h!==null){h.return=g,J=h;break}J=g}}}var w=s.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}J=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,J=l;else e:for(;J!==null;){if(s=J,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Yo(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,J=x;break e}J=s.return}}var L=e.current;for(J=L;J!==null;){l=J;var y=l.child;if(l.subtreeFlags&2064&&y!==null)y.return=l,J=y;else e:for(l=L;J!==null;){if(a=J,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Va(9,a)}}catch(I){We(a,a.return,I)}if(a===l){J=null;break e}var $=a.sibling;if($!==null){$.return=a.return,J=$;break e}J=a.return}}if(me=i,wr(),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot(_a,e)}catch{}r=!0}return r}finally{je=n,tn.transition=t}}return!1}function Kf(e,t,n){t=Fi(n,t),t=Zm(e,t,1),e=ur(e,t,1),t=jt(),e!==null&&(Ps(e,1,t),zt(e,t))}function We(e,t,n){if(e.tag===3)Kf(e,e,n);else for(;t!==null;){if(t.tag===3){Kf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dr===null||!dr.has(r))){e=Fi(n,e),e=qm(t,e,1),t=ur(t,e,1),e=jt(),t!==null&&(Ps(t,1,e),zt(t,e));break}}t=t.return}}function c8(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=jt(),e.pingedLanes|=e.suspendedLanes&n,at===e&&(dt&n)===n&&(rt===4||rt===3&&(dt&130023424)===dt&&500>Ye()-Rp?Nr(e,0):Tp|=n),zt(e,t)}function mx(e,t){t===0&&(e.mode&1?(t=Ws,Ws<<=1,!(Ws&130023424)&&(Ws=4194304)):t=1);var n=jt();e=Un(e,t),e!==null&&(Ps(e,t,n),zt(e,n))}function u8(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),mx(e,n)}function d8(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(K(314))}r!==null&&r.delete(t),mx(e,n)}var xx;xx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Tt.current)It=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return It=!1,X7(e,t,n);It=!!(e.flags&131072)}else It=!1,De&&t.flags&1048576&&wm(t,ia,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Tl(e,t),e=t.pendingProps;var i=Ni(t,vt.current);Ti(t,n),i=Sp(null,t,r,e,i,n);var s=$p();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Rt(r)?(s=!0,na(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vp(t),i.updater=Ua,t.stateNode=i,i._reactInternals=t,Jd(t,r,e,n),t=n1(null,t,r,!0,s,n)):(t.tag=0,De&&s&&fp(t),kt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Tl(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=f8(r),e=un(r,e),i){case 0:t=t1(null,t,r,e,n);break e;case 1:t=_f(null,t,r,e,n);break e;case 11:t=Mf(null,t,r,e,n);break e;case 14:t=Af(null,t,r,un(r.type,e),n);break e}throw Error(K(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:un(r,i),t1(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:un(r,i),_f(e,t,r,i,n);case 3:e:{if(ex(t),e===null)throw Error(K(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Cm(e,t),la(t,r,null,n);var l=t.memoizedState;if(r=l.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Fi(Error(K(423)),t),t=Nf(e,t,r,n,i);break e}else if(r!==i){i=Fi(Error(K(424)),t),t=Nf(e,t,r,n,i);break e}else for(Bt=cr(t.stateNode.containerInfo.firstChild),Ht=t,De=!0,fn=null,n=Sm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Di(),r===i){t=Vn(e,t,n);break e}kt(e,t,r,n)}t=t.child}return t;case 5:return Em(t),e===null&&qd(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,Wd(r,i)?l=null:s!==null&&Wd(r,s)&&(t.flags|=32),Jm(e,t),kt(e,t,l,n),t.child;case 6:return e===null&&qd(t),null;case 13:return tx(e,t,n);case 4:return wp(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Oi(t,null,r,n):kt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:un(r,i),Mf(e,t,r,i,n);case 7:return kt(e,t,t.pendingProps,n),t.child;case 8:return kt(e,t,t.pendingProps.children,n),t.child;case 12:return kt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,l=i.value,Ie(oa,r._currentValue),r._currentValue=l,s!==null)if(Ln(s.value,l)){if(s.children===i.children&&!Tt.current){t=Vn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){l=s.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Bn(-1,n&-n),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?c.next=c:(c.next=p.next,p.next=c),d.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Qd(s.return,n,t),a.lanes|=n;break}c=c.next}}else if(s.tag===10)l=s.type===t.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(K(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Qd(l,n,t),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===t){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}kt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ti(t,n),i=nn(i),r=r(i),t.flags|=1,kt(e,t,r,n),t.child;case 14:return r=t.type,i=un(r,t.pendingProps),i=un(r.type,i),Af(e,t,r,i,n);case 15:return Qm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:un(r,i),Tl(e,t),t.tag=1,Rt(r)?(e=!0,na(t)):e=!1,Ti(t,n),Gm(t,r,i),Jd(t,r,i,n),n1(null,t,r,!0,e,n);case 19:return nx(e,t,n);case 22:return Xm(e,t,n)}throw Error(K(156,t.tag))};function Lx(e,t){return Wg(e,t)}function p8(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(e,t,n,r){return new p8(e,t,n,r)}function _p(e){return e=e.prototype,!(!e||!e.isReactComponent)}function f8(e){if(typeof e=="function")return _p(e)?1:0;if(e!=null){if(e=e.$$typeof,e===tp)return 11;if(e===np)return 14}return 2}function fr(e,t){var n=e.alternate;return n===null?(n=Jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ml(e,t,n,r,i,s){var l=2;if(r=e,typeof e=="function")_p(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case fi:return Dr(n.children,i,s,t);case ep:l=8,i|=8;break;case kd:return e=Jt(12,n,t,i|2),e.elementType=kd,e.lanes=s,e;case jd:return e=Jt(13,n,t,i),e.elementType=jd,e.lanes=s,e;case Sd:return e=Jt(19,n,t,i),e.elementType=Sd,e.lanes=s,e;case Eg:return Ka(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $g:l=10;break e;case Cg:l=9;break e;case tp:l=11;break e;case np:l=14;break e;case Jn:l=16,r=null;break e}throw Error(K(130,e==null?e:typeof e,""))}return t=Jt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Dr(e,t,n,r){return e=Jt(7,e,r,t),e.lanes=n,e}function Ka(e,t,n,r){return e=Jt(22,e,r,t),e.elementType=Eg,e.lanes=n,e.stateNode={isHidden:!1},e}function Wc(e,t,n){return e=Jt(6,e,null,t),e.lanes=n,e}function Kc(e,t,n){return t=Jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function h8(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$c(0),this.expirationTimes=$c(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$c(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Np(e,t,n,r,i,s,l,a,c){return e=new h8(e,t,n,a,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Jt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vp(s),e}function g8(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function yx(e){if(!e)return Lr;e=e._reactInternals;e:{if(Qr(e)!==e||e.tag!==1)throw Error(K(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(K(171))}if(e.tag===1){var n=e.type;if(Rt(n))return ym(e,n,t)}return t}function vx(e,t,n,r,i,s,l,a,c){return e=Np(n,r,!0,e,i,s,l,a,c),e.context=yx(null),n=e.current,r=jt(),i=pr(n),s=Bn(r,i),s.callback=t??null,ur(n,s,i),e.current.lanes=i,Ps(e,i,r),zt(e,r),e}function Ya(e,t,n,r){var i=t.current,s=jt(),l=pr(i);return n=yx(n),t.context===null?t.context=n:t.pendingContext=n,t=Bn(s,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ur(i,t,l),e!==null&&(gn(e,i,l,s),El(e,i,l)),l}function ga(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Yf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Dp(e,t){Yf(e,t),(e=e.alternate)&&Yf(e,t)}function m8(){return null}var wx=typeof reportError=="function"?reportError:function(e){console.error(e)};function Op(e){this._internalRoot=e}Ga.prototype.render=Op.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(K(409));Ya(e,t,null,null)};Ga.prototype.unmount=Op.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vr(function(){Ya(null,e,null,null)}),t[Hn]=null}};function Ga(e){this._internalRoot=e}Ga.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tr.length&&t!==0&&t<tr[n].priority;n++);tr.splice(n,0,e),n===0&&em(e)}};function Bp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Za(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gf(){}function x8(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=ga(l);s.call(d)}}var l=vx(t,r,e,0,null,!1,!1,"",Gf);return e._reactRootContainer=l,e[Hn]=l.current,ps(e.nodeType===8?e.parentNode:e),Vr(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var d=ga(c);a.call(d)}}var c=Np(e,0,!1,null,null,!1,!1,"",Gf);return e._reactRootContainer=c,e[Hn]=c.current,ps(e.nodeType===8?e.parentNode:e),Vr(function(){Ya(t,c,n,r)}),c}function qa(e,t,n,r,i){var s=n._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var a=i;i=function(){var c=ga(l);a.call(c)}}Ya(t,l,e,i)}else l=x8(n,t,e,i,r);return ga(l)}qg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_o(t.pendingLanes);n!==0&&(op(t,n|1),zt(t,Ye()),!(me&6)&&(Hi=Ye()+500,wr()))}break;case 13:Vr(function(){var r=Un(e,1);if(r!==null){var i=jt();gn(r,e,1,i)}}),Dp(e,1)}};sp=function(e){if(e.tag===13){var t=Un(e,134217728);if(t!==null){var n=jt();gn(t,e,134217728,n)}Dp(e,134217728)}};Qg=function(e){if(e.tag===13){var t=pr(e),n=Un(e,t);if(n!==null){var r=jt();gn(n,e,t,r)}Dp(e,t)}};Xg=function(){return je};Jg=function(e,t){var n=je;try{return je=e,t()}finally{je=n}};Ad=function(e,t,n){switch(t){case"input":if(Ed(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ba(r);if(!i)throw Error(K(90));Ig(r),Ed(r,i)}}}break;case"textarea":Rg(e,n);break;case"select":t=n.value,t!=null&&Ci(e,!!n.multiple,t,!1)}};Og=zp;Bg=Vr;var L8={usingClientEntryPoint:!1,Events:[Ts,xi,Ba,Ng,Dg,zp]},xo={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},y8={bundleType:xo.bundleType,version:xo.version,rendererPackageName:xo.rendererPackageName,rendererConfig:xo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ug(e),e===null?null:e.stateNode},findFiberByHostInstance:xo.findFiberByHostInstance||m8,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{_a=nl.inject(y8),Cn=nl}catch{}}Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L8;Vt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bp(t))throw Error(K(200));return g8(e,t,null,n)};Vt.createRoot=function(e,t){if(!Bp(e))throw Error(K(299));var n=!1,r="",i=wx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Np(e,1,!1,null,null,n,!1,r,i),e[Hn]=t.current,ps(e.nodeType===8?e.parentNode:e),new Op(t)};Vt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(K(188)):(e=Object.keys(e).join(","),Error(K(268,e)));return e=Ug(t),e=e===null?null:e.stateNode,e};Vt.flushSync=function(e){return Vr(e)};Vt.hydrate=function(e,t,n){if(!Za(t))throw Error(K(200));return qa(null,e,t,!0,n)};Vt.hydrateRoot=function(e,t,n){if(!Bp(e))throw Error(K(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",l=wx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=vx(t,null,e,1,n??null,i,!1,s,l),e[Hn]=t.current,ps(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ga(t)};Vt.render=function(e,t,n){if(!Za(t))throw Error(K(200));return qa(null,e,t,!1,n)};Vt.unmountComponentAtNode=function(e){if(!Za(e))throw Error(K(40));return e._reactRootContainer?(Vr(function(){qa(null,null,e,!1,function(){e._reactRootContainer=null,e[Hn]=null})}),!0):!1};Vt.unstable_batchedUpdates=zp;Vt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Za(n))throw Error(K(200));if(e==null||e._reactInternals===void 0)throw Error(K(38));return qa(e,t,n,!1,r)};Vt.version="18.3.1-next-f1338f8080-20240426";function bx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bx)}catch(e){console.error(e)}}bx(),bg.exports=Vt;var kx=bg.exports,Zf=kx;wd.createRoot=Zf.createRoot,wd.hydrateRoot=Zf.hydrateRoot;var lt=function(){return lt=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},lt.apply(this,arguments)};function Ui(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var Ae="-ms-",qo="-moz-",ye="-webkit-",jx="comm",Qa="rule",Fp="decl",v8="@import",w8="@namespace",Sx="@keyframes",b8="@layer",$x=Math.abs,Hp=String.fromCharCode,h1=Object.assign;function k8(e,t){return tt(e,0)^45?(((t<<2^tt(e,0))<<2^tt(e,1))<<2^tt(e,2))<<2^tt(e,3):0}function Cx(e){return e.trim()}function An(e,t){return(e=t.exec(e))?e[0]:e}function le(e,t,n){return e.replace(t,n)}function Al(e,t,n){return e.indexOf(t,n)}function tt(e,t){return e.charCodeAt(t)|0}function Wr(e,t,n){return e.slice(t,n)}function pn(e){return e.length}function Ex(e){return e.length}function Do(e,t){return t.push(e),e}function j8(e,t){return e.map(t).join("")}function qf(e,t){return e.filter(function(n){return!An(n,t)})}var Xa=1,Vi=1,Px=0,on=0,Xe=0,eo="";function Ja(e,t,n,r,i,s,l,a){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Xa,column:Vi,length:l,return:"",siblings:a}}function Xn(e,t){return h1(Ja("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ri(e){for(;e.root;)e=Xn(e.root,{children:[e]});Do(e,e.siblings)}function S8(){return Xe}function $8(){return Xe=on>0?tt(eo,--on):0,Vi--,Xe===10&&(Vi=1,Xa--),Xe}function mn(){return Xe=on<Px?tt(eo,on++):0,Vi++,Xe===10&&(Vi=1,Xa++),Xe}function or(){return tt(eo,on)}function _l(){return on}function ec(e,t){return Wr(eo,e,t)}function ws(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function C8(e){return Xa=Vi=1,Px=pn(eo=e),on=0,[]}function E8(e){return eo="",e}function Yc(e){return Cx(ec(on-1,g1(e===91?e+2:e===40?e+1:e)))}function P8(e){for(;(Xe=or())&&Xe<33;)mn();return ws(e)>2||ws(Xe)>3?"":" "}function I8(e,t){for(;--t&&mn()&&!(Xe<48||Xe>102||Xe>57&&Xe<65||Xe>70&&Xe<97););return ec(e,_l()+(t<6&&or()==32&&mn()==32))}function g1(e){for(;mn();)switch(Xe){case e:return on;case 34:case 39:e!==34&&e!==39&&g1(Xe);break;case 40:e===41&&g1(e);break;case 92:mn();break}return on}function T8(e,t){for(;mn()&&e+Xe!==57;)if(e+Xe===84&&or()===47)break;return"/*"+ec(t,on-1)+"*"+Hp(e===47?e:mn())}function R8(e){for(;!ws(or());)mn();return ec(e,on)}function z8(e){return E8(Nl("",null,null,null,[""],e=C8(e),0,[0],e))}function Nl(e,t,n,r,i,s,l,a,c){for(var d=0,p=0,f=l,h=0,g=0,w=0,v=1,S=1,x=1,L=0,y="",$=i,I=s,k=r,j=y;S;)switch(w=L,L=mn()){case 40:if(w!=108&&tt(j,f-1)==58){Al(j+=le(Yc(L),"&","&\f"),"&\f",$x(d?a[d-1]:0))!=-1&&(x=-1);break}case 34:case 39:case 91:j+=Yc(L);break;case 9:case 10:case 13:case 32:j+=P8(w);break;case 92:j+=I8(_l()-1,7);continue;case 47:switch(or()){case 42:case 47:Do(M8(T8(mn(),_l()),t,n,c),c),(ws(w||1)==5||ws(or()||1)==5)&&pn(j)&&Wr(j,-1,void 0)!==" "&&(j+=" ");break;default:j+="/"}break;case 123*v:a[d++]=pn(j)*x;case 125*v:case 59:case 0:switch(L){case 0:case 125:S=0;case 59+p:x==-1&&(j=le(j,/\f/g,"")),g>0&&(pn(j)-f||v===0&&w===47)&&Do(g>32?Xf(j+";",r,n,f-1,c):Xf(le(j," ","")+";",r,n,f-2,c),c);break;case 59:j+=";";default:if(Do(k=Qf(j,t,n,d,p,i,a,y,$=[],I=[],f,s),s),L===123)if(p===0)Nl(j,t,k,k,$,s,f,a,I);else{switch(h){case 99:if(tt(j,3)===110)break;case 108:if(tt(j,2)===97)break;default:p=0;case 100:case 109:case 115:}p?Nl(e,k,k,r&&Do(Qf(e,k,k,0,0,i,a,y,i,$=[],f,I),I),i,I,f,a,r?$:I):Nl(j,k,k,k,[""],I,0,a,I)}}d=p=g=0,v=x=1,y=j="",f=l;break;case 58:f=1+pn(j),g=w;default:if(v<1){if(L==123)--v;else if(L==125&&v++==0&&$8()==125)continue}switch(j+=Hp(L),L*v){case 38:x=p>0?1:(j+="\f",-1);break;case 44:a[d++]=(pn(j)-1)*x,x=1;break;case 64:or()===45&&(j+=Yc(mn())),h=or(),p=f=pn(y=j+=R8(_l())),L++;break;case 45:w===45&&pn(j)==2&&(v=0)}}return s}function Qf(e,t,n,r,i,s,l,a,c,d,p,f){for(var h=i-1,g=i===0?s:[""],w=Ex(g),v=0,S=0,x=0;v<r;++v)for(var L=0,y=Wr(e,h+1,h=$x(S=l[v])),$=e;L<w;++L)($=Cx(S>0?g[L]+" "+y:le(y,/&\f/g,g[L])))&&(c[x++]=$);return Ja(e,t,n,i===0?Qa:a,c,d,p,f)}function M8(e,t,n,r){return Ja(e,t,n,jx,Hp(S8()),Wr(e,2,-2),0,r)}function Xf(e,t,n,r,i){return Ja(e,t,n,Fp,Wr(e,0,r),Wr(e,r+1,-1),r,i)}function Ix(e,t,n){switch(k8(e,t)){case 5103:return ye+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ye+e+e;case 4855:return ye+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return qo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ye+e+qo+e+Ae+e+e;case 5936:switch(tt(e,t+11)){case 114:return ye+e+Ae+le(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ye+e+Ae+le(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ye+e+Ae+le(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ye+e+Ae+e+e;case 6165:return ye+e+Ae+"flex-"+e+e;case 5187:return ye+e+le(e,/(\w+).+(:[^]+)/,ye+"box-$1$2"+Ae+"flex-$1$2")+e;case 5443:return ye+e+Ae+"flex-item-"+le(e,/flex-|-self/g,"")+(An(e,/flex-|baseline/)?"":Ae+"grid-row-"+le(e,/flex-|-self/g,""))+e;case 4675:return ye+e+Ae+"flex-line-pack"+le(e,/align-content|flex-|-self/g,"")+e;case 5548:return ye+e+Ae+le(e,"shrink","negative")+e;case 5292:return ye+e+Ae+le(e,"basis","preferred-size")+e;case 6060:return ye+"box-"+le(e,"-grow","")+ye+e+Ae+le(e,"grow","positive")+e;case 4554:return ye+le(e,/([^-])(transform)/g,"$1"+ye+"$2")+e;case 6187:return le(le(le(e,/(zoom-|grab)/,ye+"$1"),/(image-set)/,ye+"$1"),e,"")+e;case 5495:case 3959:return le(e,/(image-set\([^]*)/,ye+"$1$`$1");case 4968:return le(le(e,/(.+:)(flex-)?(.*)/,ye+"box-pack:$3"+Ae+"flex-pack:$3"),/space-between/,"justify")+ye+e+e;case 4200:if(!An(e,/flex-|baseline/))return Ae+"grid-column-align"+Wr(e,t)+e;break;case 2592:case 3360:return Ae+le(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,An(r.props,/grid-\w+-end/)})?~Al(e+(n=n[t].value),"span",0)?e:Ae+le(e,"-start","")+e+Ae+"grid-row-span:"+(~Al(n,"span",0)?An(n,/\d+/):+An(n,/\d+/)-+An(e,/\d+/))+";":Ae+le(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return An(r.props,/grid-\w+-start/)})?e:Ae+le(le(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return le(e,/(.+)-inline(.+)/,ye+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pn(e)-1-t>6)switch(tt(e,t+1)){case 109:if(tt(e,t+4)!==45)break;case 102:return le(e,/(.+:)(.+)-([^]+)/,"$1"+ye+"$2-$3$1"+qo+(tt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Al(e,"stretch",0)?Ix(le(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return le(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,l,a,c,d){return Ae+i+":"+s+d+(l?Ae+i+"-span:"+(a?c:+c-+s)+d:"")+e});case 4949:if(tt(e,t+6)===121)return le(e,":",":"+ye)+e;break;case 6444:switch(tt(e,tt(e,14)===45?18:11)){case 120:return le(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ye+(tt(e,14)===45?"inline-":"")+"box$3$1"+ye+"$2$3$1"+Ae+"$2box$3")+e;case 100:return le(e,":",":"+Ae)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return le(e,"scroll-","scroll-snap-")+e}return e}function ma(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function A8(e,t,n,r){switch(e.type){case b8:if(e.children.length)break;case v8:case w8:case Fp:return e.return=e.return||e.value;case jx:return"";case Sx:return e.return=e.value+"{"+ma(e.children,r)+"}";case Qa:if(!pn(e.value=e.props.join(",")))return""}return pn(n=ma(e.children,r))?e.return=e.value+"{"+n+"}":""}function _8(e){var t=Ex(e);return function(n,r,i,s){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,s)||"";return l}}function N8(e){return function(t){t.root||(t=t.return)&&e(t)}}function D8(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Fp:e.return=Ix(e.value,e.length,n);return;case Sx:return ma([Xn(e,{value:le(e.value,"@","@"+ye)})],r);case Qa:if(e.length)return j8(n=e.props,function(i){switch(An(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ri(Xn(e,{props:[le(i,/:(read-\w+)/,":"+qo+"$1")]})),ri(Xn(e,{props:[i]})),h1(e,{props:qf(n,r)});break;case"::placeholder":ri(Xn(e,{props:[le(i,/:(plac\w+)/,":"+ye+"input-$1")]})),ri(Xn(e,{props:[le(i,/:(plac\w+)/,":"+qo+"$1")]})),ri(Xn(e,{props:[le(i,/:(plac\w+)/,Ae+"input-$1")]})),ri(Xn(e,{props:[i]})),h1(e,{props:qf(n,r)});break}return""})}}var O8={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Dt={},Wi=typeof process<"u"&&Dt!==void 0&&(Dt.REACT_APP_SC_ATTR||Dt.SC_ATTR)||"data-styled",Tx="active",Rx="data-styled-version",tc="6.3.8",Up=`/*!sc*/
`,xa=typeof window<"u"&&typeof document<"u",Pn=Ge.createContext===void 0,B8=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Dt!==void 0&&Dt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Dt.REACT_APP_SC_DISABLE_SPEEDY!==""?Dt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Dt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Dt!==void 0&&Dt.SC_DISABLE_SPEEDY!==void 0&&Dt.SC_DISABLE_SPEEDY!==""&&Dt.SC_DISABLE_SPEEDY!=="false"&&Dt.SC_DISABLE_SPEEDY),F8={},nc=Object.freeze([]),Ki=Object.freeze({});function zx(e,t,n){return n===void 0&&(n=Ki),e.theme!==n.theme&&e.theme||t||n.theme}var Mx=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),H8=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,U8=/(^-|-$)/g;function Jf(e){return e.replace(H8,"-").replace(U8,"")}var V8=/(a)(d)/gi,eh=function(e){return String.fromCharCode(e+(e>25?39:97))};function m1(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=eh(t%52)+n;return(eh(t%52)+n).replace(V8,"$1-$2")}var Gc,ji=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ax=function(e){return ji(5381,e)};function Vp(e){return m1(Ax(e)>>>0)}function W8(e){return e.displayName||e.name||"Component"}function Zc(e){return typeof e=="string"&&!0}var _x=typeof Symbol=="function"&&Symbol.for,Nx=_x?Symbol.for("react.memo"):60115,K8=_x?Symbol.for("react.forward_ref"):60112,Y8={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},G8={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Dx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Z8=((Gc={})[K8]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Gc[Nx]=Dx,Gc);function th(e){return("type"in(t=e)&&t.type.$$typeof)===Nx?Dx:"$$typeof"in e?Z8[e.$$typeof]:Y8;var t}var q8=Object.defineProperty,Q8=Object.getOwnPropertyNames,nh=Object.getOwnPropertySymbols,X8=Object.getOwnPropertyDescriptor,J8=Object.getPrototypeOf,rh=Object.prototype;function Ox(e,t,n){if(typeof t!="string"){if(rh){var r=J8(t);r&&r!==rh&&Ox(e,r,n)}var i=Q8(t);nh&&(i=i.concat(nh(t)));for(var s=th(e),l=th(t),a=0;a<i.length;++a){var c=i[a];if(!(c in G8||n&&n[c]||l&&c in l||s&&c in s)){var d=X8(t,c);try{q8(e,c,d)}catch{}}}}return e}function Kr(e){return typeof e=="function"}function Wp(e){return typeof e=="object"&&"styledComponentId"in e}function Ar(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function La(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function bs(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function x1(e,t,n){if(n===void 0&&(n=!1),!n&&!bs(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=x1(e[r],t[r]);else if(bs(t))for(var r in t)e[r]=x1(e[r],t[r]);return e}function Kp(e,t){Object.defineProperty(e,"toString",{value:t})}function Yr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var eL=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw Yr(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var l=i;l<s;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),c=(l=0,n.length);l<c;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,l=i;l<s;l++)n+="".concat(this.tag.getRule(l)).concat(Up);return n},e}(),Dl=new Map,ya=new Map,Ol=1,Si=function(e){if(Dl.has(e))return Dl.get(e);for(;ya.has(Ol);)Ol++;var t=Ol++;return Dl.set(e,t),ya.set(t,e),t},tL=function(e,t){Ol=t+1,Dl.set(e,t),ya.set(t,e)},nL="style[".concat(Wi,"][").concat(Rx,'="').concat(tc,'"]'),rL=new RegExp("^".concat(Wi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),iL=function(e,t,n){for(var r,i=n.split(","),s=0,l=i.length;s<l;s++)(r=i[s])&&e.registerName(t,r)},oL=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Up),i=[],s=0,l=r.length;s<l;s++){var a=r[s].trim();if(a){var c=a.match(rL);if(c){var d=0|parseInt(c[1],10),p=c[2];d!==0&&(tL(p,d),iL(e,p,c[3]),e.getTag().insertRules(d,i)),i.length=0}else i.push(a)}}},ih=function(e){for(var t=document.querySelectorAll(nL),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Wi)!==Tx&&(oL(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function sL(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Bx=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var c=Array.from(a.querySelectorAll("style[".concat(Wi,"]")));return c[c.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Wi,Tx),r.setAttribute(Rx,tc);var l=sL();return l&&r.setAttribute("nonce",l),n.insertBefore(r,s),r},lL=function(){function e(t){this.element=Bx(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var l=r[i];if(l.ownerNode===n)return l}throw Yr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),aL=function(){function e(t){this.element=Bx(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),cL=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),oh=xa,uL={isServer:!xa,useCSSOMInjection:!B8},va=function(){function e(t,n,r){t===void 0&&(t=Ki),n===void 0&&(n={});var i=this;this.options=lt(lt({},uL),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&xa&&oh&&(oh=!1,ih(this)),Kp(this,function(){return function(s){for(var l=s.getTag(),a=l.length,c="",d=function(f){var h=function(x){return ya.get(x)}(f);if(h===void 0)return"continue";var g=s.names.get(h),w=l.getGroup(f);if(g===void 0||!g.size||w.length===0)return"continue";var v="".concat(Wi,".g").concat(f,'[id="').concat(h,'"]'),S="";g!==void 0&&g.forEach(function(x){x.length>0&&(S+="".concat(x,","))}),c+="".concat(w).concat(v,'{content:"').concat(S,'"}').concat(Up)},p=0;p<a;p++)d(p);return c}(i)})}return e.registerId=function(t){return Si(t)},e.prototype.rehydrate=function(){!this.server&&xa&&ih(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(lt(lt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new cL(i):r?new lL(i):new aL(i)}(this.options),new eL(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Si(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Si(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Si(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),dL=/&/g,$i=47;function sh(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,s=0;s<t;s++){var l=e.charCodeAt(s);if(r!==0||i||l!==$i||e.charCodeAt(s+1)!==42)if(i)l===42&&e.charCodeAt(s+1)===$i&&(i=!1,s++);else if(l!==34&&l!==39||s!==0&&e.charCodeAt(s-1)===92){if(r===0){if(l===123)n++;else if(l===125&&--n<0)return!0}}else r===0?r=l:r===l&&(r=0);else i=!0,s++}return n!==0||r!==0}function Fx(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Fx(n.children,t)),n})}function pL(e){var t,n,r,i=Ki,s=i.options,l=s===void 0?Ki:s,a=i.plugins,c=a===void 0?nc:a,d=function(h,g,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):h},p=c.slice();p.push(function(h){h.type===Qa&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(dL,n).replace(r,d))}),l.prefix&&p.push(D8),p.push(A8);var f=function(h,g,w,v){g===void 0&&(g=""),w===void 0&&(w=""),v===void 0&&(v="&"),t=v,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var S=function(y){if(!sh(y))return y;for(var $=y.length,I="",k=0,j=0,z=0,R=!1,T=0;T<$;T++){var P=y.charCodeAt(T);if(z!==0||R||P!==$i||y.charCodeAt(T+1)!==42)if(R)P===42&&y.charCodeAt(T+1)===$i&&(R=!1,T++);else if(P!==34&&P!==39||T!==0&&y.charCodeAt(T-1)===92){if(z===0)if(P===123)j++;else if(P===125){if(--j<0){for(var E=T+1;E<$;){var A=y.charCodeAt(E);if(A===59||A===10)break;E++}E<$&&y.charCodeAt(E)===59&&E++,j=0,T=E-1,k=E;continue}j===0&&(I+=y.substring(k,T+1),k=T+1)}else P===59&&j===0&&(I+=y.substring(k,T+1),k=T+1)}else z===0?z=P:z===P&&(z=0);else R=!0,T++}if(k<$){var N=y.substring(k);sh(N)||(I+=N)}return I}(function(y){if(y.indexOf("//")===-1)return y;for(var $=y.length,I=[],k=0,j=0,z=0,R=0;j<$;){var T=y.charCodeAt(j);if(T!==34&&T!==39||j!==0&&y.charCodeAt(j-1)===92)if(z===0)if(T===40&&j>=3&&(32|y.charCodeAt(j-1))==108&&(32|y.charCodeAt(j-2))==114&&(32|y.charCodeAt(j-3))==117)R=1,j++;else if(R>0)T===41?R--:T===40&&R++,j++;else if(T===$i&&j+1<$&&y.charCodeAt(j+1)===$i){for(j>k&&I.push(y.substring(k,j));j<$&&y.charCodeAt(j)!==10;)j++;k=j}else j++;else j++;else z===0?z=T:z===T&&(z=0),j++}return k===0?y:(k<$&&I.push(y.substring(k)),I.join(""))}(h)),x=z8(w||g?"".concat(w," ").concat(g," { ").concat(S," }"):S);l.namespace&&(x=Fx(x,l.namespace));var L=[];return ma(x,_8(p.concat(N8(function(y){return L.push(y)})))),L};return f.hash=c.length?c.reduce(function(h,g){return g.name||Yr(15),ji(h,g.name)},5381).toString():"",f}var fL=new va,L1=pL(),y1={shouldForwardProp:void 0,styleSheet:fL,stylis:L1},Hx=Pn?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(y1)}}:Ge.createContext(y1);Hx.Consumer;Pn||Ge.createContext(void 0);function v1(){return Pn?y1:Ge.useContext(Hx)}var Ux=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=L1);var l=r.name+s.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,s(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Kp(this,function(){throw Yr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=L1),this.name+t.hash},e}();function hL(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in O8||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var gL=function(e){return e>="A"&&e<="Z"};function lh(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;gL(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Vx=function(e){return e==null||e===!1||e===""},Wx=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!Vx(r)&&(Array.isArray(r)&&r.isCss||Kr(r)?t.push("".concat(lh(n),":"),r,";"):bs(r)?t.push.apply(t,Ui(Ui(["".concat(n," {")],Wx(r),!1),["}"],!1)):t.push("".concat(lh(n),": ").concat(hL(n,r),";")))}return t};function hr(e,t,n,r){if(Vx(e))return[];if(Wp(e))return[".".concat(e.styledComponentId)];if(Kr(e)){if(!Kr(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return hr(i,t,n,r)}var s;return e instanceof Ux?n?(e.inject(n,r),[e.getName(r)]):[e]:bs(e)?Wx(e):Array.isArray(e)?Array.prototype.concat.apply(nc,e.map(function(l){return hr(l,t,n,r)})):[e.toString()]}function Kx(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Kr(n)&&!Wp(n))return!1}return!0}var mL=Ax(tc),xL=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Kx(t),this.componentId=n,this.baseHash=ji(mL,n),this.baseStyle=r,va.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Ar(i,this.staticRulesId);else{var s=La(hr(this.rules,t,n,r)),l=m1(ji(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(s,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}i=Ar(i,l),this.staticRulesId=l}else{for(var c=ji(this.baseHash,r.hash),d="",p=0;p<this.rules.length;p++){var f=this.rules[p];if(typeof f=="string")d+=f;else if(f){var h=La(hr(f,t,n,r));c=ji(c,h+p),d+=h}}if(d){var g=m1(c>>>0);if(!n.hasNameForId(this.componentId,g)){var w=r(d,".".concat(g),void 0,this.componentId);n.insertRules(this.componentId,g,w)}i=Ar(i,g)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(Si(this.componentId)):""}},e}(),ks=Pn?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(void 0)}}:Ge.createContext(void 0);ks.Consumer;function LL(e){if(Pn)return e.children;var t=Ge.useContext(ks),n=Ge.useMemo(function(){return function(r,i){if(!r)throw Yr(14);if(Kr(r)){var s=r(i);return s}if(Array.isArray(r)||typeof r!="object")throw Yr(8);return i?lt(lt({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?Ge.createElement(ks.Provider,{value:n},e.children):null}var qc={};function yL(e,t,n){var r=Wp(e),i=e,s=!Zc(e),l=t.attrs,a=l===void 0?nc:l,c=t.componentId,d=c===void 0?function($,I){var k=typeof $!="string"?"sc":Jf($);qc[k]=(qc[k]||0)+1;var j="".concat(k,"-").concat(Vp(tc+k+qc[k]));return I?"".concat(I,"-").concat(j):j}(t.displayName,t.parentComponentId):c,p=t.displayName,f=p===void 0?function($){return Zc($)?"styled.".concat($):"Styled(".concat(W8($),")")}(e):p,h=t.displayName&&t.componentId?"".concat(Jf(t.displayName),"-").concat(t.componentId):t.componentId||d,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,w=t.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;w=function($,I){return v($,I)&&S($,I)}}else w=v}var x=new xL(n,h,r?i.componentStyle:void 0);function L($,I){return function(k,j,z){var R=k.attrs,T=k.componentStyle,P=k.defaultProps,E=k.foldedComponentIds,A=k.styledComponentId,N=k.target,F=Pn?void 0:Ge.useContext(ks),G=v1(),q=k.shouldForwardProp||G.shouldForwardProp,M=zx(j,F,P)||Ki,O=function(ee,ue,be){for(var fe,xe=lt(lt({},ue),{className:void 0,theme:be}),$e=0;$e<ee.length;$e+=1){var Re=Kr(fe=ee[$e])?fe(xe):fe;for(var Oe in Re)Oe==="className"?xe.className=Ar(xe.className,Re[Oe]):Oe==="style"?xe.style=lt(lt({},xe.style),Re[Oe]):xe[Oe]=Re[Oe]}return"className"in ue&&typeof ue.className=="string"&&(xe.className=Ar(xe.className,ue.className)),xe}(R,j,M),C=O.as||N,Q={};for(var X in O)O[X]===void 0||X[0]==="$"||X==="as"||X==="theme"&&O.theme===M||(X==="forwardedAs"?Q.as=O.forwardedAs:q&&!q(X,C)||(Q[X]=O[X]));var b=function(ee,ue){var be=v1(),fe=ee.generateAndInjectStyles(ue,be.styleSheet,be.stylis);return fe}(T,O),H=b.className,_=b.css,Z=Ar(E,A);H&&(Z+=" "+H),O.className&&(Z+=" "+O.className),Q[Zc(C)&&!Mx.has(C)?"class":"className"]=Z,z&&(Q.ref=z);var V=m.createElement(C,Q);return Pn&&_?Ge.createElement(Ge.Fragment,null,Ge.createElement("style",{precedence:"styled-components",href:"sc-".concat(A,"-").concat(H),children:_}),V):V}(y,$,I)}L.displayName=f;var y=Ge.forwardRef(L);return y.attrs=g,y.componentStyle=x,y.displayName=f,y.shouldForwardProp=w,y.foldedComponentIds=r?Ar(i.foldedComponentIds,i.styledComponentId):"",y.styledComponentId=h,y.target=r?i.target:e,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function($){this._foldedDefaultProps=r?function(I){for(var k=[],j=1;j<arguments.length;j++)k[j-1]=arguments[j];for(var z=0,R=k;z<R.length;z++)x1(I,R[z],!0);return I}({},i.defaultProps,$):$}}),Kp(y,function(){return".".concat(y.styledComponentId)}),s&&Ox(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function ah(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var ch=function(e){return Object.assign(e,{isCss:!0})};function Ne(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Kr(e)||bs(e))return ch(hr(ah(nc,Ui([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?hr(r):ch(hr(ah(r,t)))}function w1(e,t,n){if(n===void 0&&(n=Ki),!t)throw Yr(1,t);var r=function(i){for(var s=[],l=1;l<arguments.length;l++)s[l-1]=arguments[l];return e(t,n,Ne.apply(void 0,Ui([i],s,!1)))};return r.attrs=function(i){return w1(e,t,lt(lt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return w1(e,t,lt(lt({},n),i))},r}var Yx=function(e){return w1(yL,e)},u=Yx;Mx.forEach(function(e){u[e]=Yx(e)});var vL=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Kx(t),va.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var s=i(La(hr(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,s)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&va.registerId(this.componentId+t);var s=this.componentId+t;this.isStatic?r.hasNameForId(s,s)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function wL(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ne.apply(void 0,Ui([e],t,!1)),i="sc-global-".concat(Vp(JSON.stringify(r))),s=new vL(r,i),l=new WeakMap,a=function(c){var d=v1(),p=Pn?void 0:Ge.useContext(ks),f=l.get(d.styleSheet);if(f===void 0&&(f=d.styleSheet.allocateGSInstance(i),l.set(d.styleSheet,f)),(typeof window>"u"||!d.styleSheet.server)&&function(S,x,L,y,$){if(s.isStatic)s.renderStyles(S,F8,L,$);else{var I=lt(lt({},x),{theme:zx(x,y,a.defaultProps)});s.renderStyles(S,I,L,$)}}(f,c,d.styleSheet,p,d.stylis),!Pn){var h=Ge.useRef(!0);Ge.useLayoutEffect(function(){return h.current=!1,function(){h.current=!0,queueMicrotask(function(){h.current&&(s.removeStyles(f,d.styleSheet),typeof document<"u"&&document.querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(S){return S.remove()}))})}},[f,d.styleSheet])}if(Pn){var g=i+f,w=typeof window>"u"?d.styleSheet.getTag().getGroup(Si(g)):"";if(w){var v="".concat(i,"-").concat(f);return Ge.createElement("style",{key:v,"data-styled-global":i,precedence:"styled-components",href:v,children:w})}}return null};return Ge.memo(a)}function we(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=La(Ne.apply(void 0,Ui([e],t,!1))),i=Vp(r);return new Ux(i,r)}const bL={},uh=e=>{let t;const n=new Set,r=(p,f)=>{const h=typeof p=="function"?p(t):p;if(!Object.is(h,t)){const g=t;t=f??(typeof h!="object"||h===null)?h:Object.assign({},t,h),n.forEach(w=>w(t,g))}},i=()=>t,c={setState:r,getState:i,getInitialState:()=>d,subscribe:p=>(n.add(p),()=>n.delete(p)),destroy:()=>{(bL?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},d=t=e(r,i,c);return c},kL=e=>e?uh(e):uh;var Gx={exports:{}},Zx={},qx={exports:{}},Qx={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yi=m;function jL(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var SL=typeof Object.is=="function"?Object.is:jL,$L=Yi.useState,CL=Yi.useEffect,EL=Yi.useLayoutEffect,PL=Yi.useDebugValue;function IL(e,t){var n=t(),r=$L({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return EL(function(){i.value=n,i.getSnapshot=t,Qc(i)&&s({inst:i})},[e,n,t]),CL(function(){return Qc(i)&&s({inst:i}),e(function(){Qc(i)&&s({inst:i})})},[e]),PL(n),n}function Qc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!SL(e,n)}catch{return!0}}function TL(e,t){return t()}var RL=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?TL:IL;Qx.useSyncExternalStore=Yi.useSyncExternalStore!==void 0?Yi.useSyncExternalStore:RL;qx.exports=Qx;var zL=qx.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rc=m,ML=zL;function AL(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _L=typeof Object.is=="function"?Object.is:AL,NL=ML.useSyncExternalStore,DL=rc.useRef,OL=rc.useEffect,BL=rc.useMemo,FL=rc.useDebugValue;Zx.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=DL(null);if(s.current===null){var l={hasValue:!1,value:null};s.current=l}else l=s.current;s=BL(function(){function c(g){if(!d){if(d=!0,p=g,g=r(g),i!==void 0&&l.hasValue){var w=l.value;if(i(w,g))return f=w}return f=g}if(w=f,_L(p,g))return w;var v=r(g);return i!==void 0&&i(w,v)?(p=g,w):(p=g,f=v)}var d=!1,p,f,h=n===void 0?null:n;return[function(){return c(t())},h===null?void 0:function(){return c(h())}]},[t,n,r,i]);var a=NL(e,s[0],s[1]);return OL(function(){l.hasValue=!0,l.value=a},[a]),FL(a),a};Gx.exports=Zx;var HL=Gx.exports;const UL=Ma(HL),Xx={},{useDebugValue:VL}=Ge,{useSyncExternalStoreWithSelector:WL}=UL;let dh=!1;const KL=e=>e;function YL(e,t=KL,n){(Xx?"production":void 0)!=="production"&&n&&!dh&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),dh=!0);const r=WL(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return VL(r),r}const ph=e=>{(Xx?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?kL(e):e,n=(r,i)=>YL(t,r,i);return Object.assign(n,t),n},to=e=>e?ph(e):ph;function Se(){const e="http://localhost";if(String(e).trim()!=="")return String(e).replace(/\/$/,"")}function Yp(){const e=Se();if(!e)throw new Error("VITE_API_BASE_URL이 필요합니다. .env에 백엔드 주소를 설정하세요.");return e}const fh=e=>e.filter(t=>!t.hidden);let Xc=class extends Error{constructor(t,n){super(t),this.status=n,this.name="HttpError"}};class GL{constructor(t){this.baseUrl=t}url(t){return`${this.baseUrl}${t.startsWith("/")?t:`/${t}`}`}async findAll(){const t=await fetch(this.url("/experts"));if(!t.ok)throw new Xc("GET /experts 실패",t.status);return fh(await t.json())}async findById(t){const n=await fetch(this.url(`/experts/${encodeURIComponent(t)}`));if(n.status===404)return null;if(!n.ok)throw new Xc("GET /experts/:id 실패",n.status);const r=await n.json();return r.hidden?null:r}async findByRegionId(t){const n=t==="all"?"":`?regionId=${encodeURIComponent(t)}`,r=await fetch(this.url(`/experts${n}`));if(!r.ok)throw new Xc("GET /experts?regionId 실패",r.status);return fh(await r.json())}}let Jc=null;function Jx(){return Jc||(Jc=new GL(Yp())),Jc}const ZL=()=>Jx().findAll(),e3=e=>Jx().findById(e);function js(){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Seoul"}).format(new Date)}function Bl(e){return!!(e&&/^\d{4}-\d{2}-\d{2}$/.test(e))}function b1(e,t=js()){var s,l;const n=e.kind??"program",r=(s=e.startDate)==null?void 0:s.trim(),i=(l=e.endDate)==null?void 0:l.trim();return n==="event"?Bl(r)&&Bl(i)?t>i?"past":"ongoing":e.status==="past"?"past":"ongoing":Bl(i)&&t>i?"past":"ongoing"}function qL(e){return(e??[]).map(t=>({...t,status:b1(t)}))}function ic(e){var t;return(t=e.programs)!=null&&t.length?{...e,programs:qL(e.programs)}:e}function QL(e,t=js()){var r;if(e.status==="past")return"완료";const n=(r=e.startDate)==null?void 0:r.trim();return Bl(n)&&t<n?"예정":"진행 중"}function XL(e,t){const n=e==null?void 0:e.trim(),r=t==null?void 0:t.trim();return n&&r?n===r?n:`${n} ~ ${r}`:n?`${n} ~`:r?`~ ${r}`:null}function JL(e=js()){const t=new Date(`${e}T12:00:00+09:00`),n=new Date(t);n.setDate(n.getDate()+6);const r=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Seoul"}).format(n);return{startDate:e,endDate:r}}function t3(e){const t=(e.programs??[]).filter(n=>!n.hidden);return ic({...e,programs:t})}function hh(e){return e.filter(t=>!t.hidden).map(t3)}let eu=class extends Error{constructor(t,n){super(t),this.status=n,this.name="HttpError"}};class e9{constructor(t){this.baseUrl=t}url(t){return`${this.baseUrl}${t.startsWith("/")?t:`/${t}`}`}async findAll(){const t=await fetch(this.url("/places"));if(!t.ok)throw new eu("GET /places 실패",t.status);return hh(await t.json())}async findById(t){const n=await fetch(this.url(`/places/${encodeURIComponent(t)}`));if(n.status===404)return null;if(!n.ok)throw new eu("GET /places/:id 실패",n.status);const r=await n.json();return r.hidden?null:t3(r)}async findByRegionId(t){const n=t==="all"?"":`?regionId=${encodeURIComponent(t)}`,r=await fetch(this.url(`/places${n}`));if(!r.ok)throw new eu("GET /places?regionId 실패",r.status);return hh(await r.json())}}let tu=null;function n3(){return tu||(tu=new e9(Yp())),tu}const t9=()=>n3().findAll(),r3=e=>n3().findById(e);class n9 extends Error{constructor(t,n){super(t),this.status=n,this.name="HttpError"}}class r9{constructor(t){this.baseUrl=t}url(t){return`${this.baseUrl}${t.startsWith("/")?t:`/${t}`}`}async findAll(){const t=await fetch(this.url("/regions"));if(!t.ok)throw new n9("GET /regions 실패",t.status);return t.json()}}let nu=null;function i9(){return nu||(nu=new r9(Yp())),nu}const o9=()=>i9().findAll();async function ru(e,t){try{return{ok:!0,value:await e()}}catch{return{ok:!1}}}const en=to(e=>({places:[],regions:[],experts:[],catalogReady:!1,catalogError:null,clearCatalogError:()=>e({catalogError:null}),hydrate:async()=>{if(!Se()){e({places:[],regions:[],experts:[],catalogReady:!0,catalogError:null});return}e({catalogReady:!1,catalogError:null});const[t,n,r]=await Promise.all([ru(()=>t9()),ru(()=>o9()),ru(()=>ZL())]),i=!t.ok||!n.ok||!r.ok;e({places:t.ok?t.value:[],regions:n.ok?n.value:[],experts:r.ok?r.value:[],catalogReady:!0,catalogError:i?"서버에서 정보를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.":null})}})),s9=u.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 16px;
  padding-top: calc(12px + env(safe-area-inset-top, 0px));
  background: ${({theme:e})=>e.colors.primary50};
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary200};
  color: ${({theme:e})=>e.colors.text900};
`,l9=u.p`
  margin: 0;
  flex: 1;
  min-width: 0;
  font-size: 0.92rem;
  line-height: 1.45;
`,a9=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,c9=u.button`
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
`,u9=u.button`
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
`,d9=()=>{const e=en(i=>i.catalogError),t=en(i=>i.catalogReady),n=en(i=>i.clearCatalogError),r=en(i=>i.hydrate);return e?o.jsxs(s9,{role:"alert","aria-live":"assertive",children:[o.jsx(l9,{children:e}),o.jsxs(a9,{children:[o.jsx(c9,{type:"button",disabled:!t,onClick:()=>void r(),children:"다시 시도"}),o.jsx(u9,{type:"button",onClick:n,"aria-label":"오류 안내 닫기",children:"×"})]})]}):null};let p9=0;const Qo=to((e,t)=>({toasts:[],show:(n,r="info",i=3200)=>{if(!n)return;const s=++p9;e(l=>({toasts:[...l.toasts,{id:s,message:n,variant:r}]})),i>0&&setTimeout(()=>t().dismiss(s),i)},dismiss:n=>e(r=>({toasts:r.toasts.filter(i=>i.id!==n)}))})),Ke={error:e=>Qo.getState().show(e,"error"),success:e=>Qo.getState().show(e,"success"),info:e=>Qo.getState().show(e,"info")},f9=we`
  from { opacity: 0; transform: translateY(-12px); }
  to { opacity: 1; transform: translateY(0); }
`,h9=u.div`
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
`;function k1(e){return e==="error"?{bg:"rgba(127, 29, 29, 0.96)",border:"#b91c1c",icon:"⚠️"}:e==="success"?{bg:"rgba(6, 78, 59, 0.96)",border:"#059669",icon:"✓"}:{bg:"rgba(24, 24, 27, 0.96)",border:"#3f3f46",icon:"ℹ️"}}const g9=u.div`
  pointer-events: auto;
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 12px 14px;
  border-radius: 12px;
  font-size: 14px;
  line-height: 1.4;
  color: #fff;
  background: ${({$variant:e})=>k1(e).bg};
  border: 1px solid ${({$variant:e})=>k1(e).border};
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(8px);
  animation: ${f9} 0.22s ease;
  cursor: pointer;

  .toast-icon {
    flex-shrink: 0;
    font-size: 14px;
  }
  .toast-msg {
    flex: 1;
    word-break: break-word;
  }
`;function m9(){const e=Qo(n=>n.toasts),t=Qo(n=>n.dismiss);return e.length===0?null:o.jsx(h9,{"aria-live":"polite",children:e.map(n=>o.jsxs(g9,{$variant:n.variant,role:"alert",onClick:()=>t(n.id),children:[o.jsx("span",{className:"toast-icon",children:k1(n.variant).icon}),o.jsx("span",{className:"toast-msg",children:n.message})]},n.id))})}/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ss(){return Ss=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ss.apply(this,arguments)}var _r;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(_r||(_r={}));const gh="popstate";function x9(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:l,hash:a}=r.location;return j1("",{pathname:s,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:wa(i)}return y9(t,n,null,e)}function it(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Gp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function L9(){return Math.random().toString(36).substr(2,8)}function mh(e,t){return{usr:e.state,key:e.key,idx:t}}function j1(e,t,n,r){return n===void 0&&(n=null),Ss({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?zs(t):t,{state:n,key:t&&t.key||r||L9()})}function wa(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function zs(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function y9(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,l=i.history,a=_r.Pop,c=null,d=p();d==null&&(d=0,l.replaceState(Ss({},l.state,{idx:d}),""));function p(){return(l.state||{idx:null}).idx}function f(){a=_r.Pop;let S=p(),x=S==null?null:S-d;d=S,c&&c({action:a,location:v.location,delta:x})}function h(S,x){a=_r.Push;let L=j1(v.location,S,x);d=p()+1;let y=mh(L,d),$=v.createHref(L);try{l.pushState(y,"",$)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign($)}s&&c&&c({action:a,location:v.location,delta:1})}function g(S,x){a=_r.Replace;let L=j1(v.location,S,x);d=p();let y=mh(L,d),$=v.createHref(L);l.replaceState(y,"",$),s&&c&&c({action:a,location:v.location,delta:0})}function w(S){let x=i.location.origin!=="null"?i.location.origin:i.location.href,L=typeof S=="string"?S:wa(S);return L=L.replace(/ $/,"%20"),it(x,"No window.location.(origin|href) available to create URL for href: "+L),new URL(L,x)}let v={get action(){return a},get location(){return e(i,l)},listen(S){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(gh,f),c=S,()=>{i.removeEventListener(gh,f),c=null}},createHref(S){return t(i,S)},createURL:w,encodeLocation(S){let x=w(S);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:h,replace:g,go(S){return l.go(S)}};return v}var xh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(xh||(xh={}));function v9(e,t,n){return n===void 0&&(n="/"),w9(e,t,n)}function w9(e,t,n,r){let i=typeof t=="string"?zs(t):t,s=Gi(i.pathname||"/",n);if(s==null)return null;let l=i3(e);b9(l);let a=null;for(let c=0;a==null&&c<l.length;++c){let d=z9(s);a=T9(l[c],d)}return a}function i3(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,l,a)=>{let c={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:l,route:s};c.relativePath.startsWith("/")&&(it(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let d=gr([r,c.relativePath]),p=n.concat(c);s.children&&s.children.length>0&&(it(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),i3(s.children,t,p,d)),!(s.path==null&&!s.index)&&t.push({path:d,score:P9(d,s.index),routesMeta:p})};return e.forEach((s,l)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,l);else for(let c of o3(s.path))i(s,l,c)}),t}function o3(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let l=o3(r.join("/")),a=[];return a.push(...l.map(c=>c===""?s:[s,c].join("/"))),i&&a.push(...l),a.map(c=>e.startsWith("/")&&c===""?"/":c)}function b9(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:I9(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const k9=/^:[\w-]+$/,j9=3,S9=2,$9=1,C9=10,E9=-2,Lh=e=>e==="*";function P9(e,t){let n=e.split("/"),r=n.length;return n.some(Lh)&&(r+=E9),t&&(r+=S9),n.filter(i=>!Lh(i)).reduce((i,s)=>i+(k9.test(s)?j9:s===""?$9:C9),r)}function I9(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function T9(e,t,n){let{routesMeta:r}=e,i={},s="/",l=[];for(let a=0;a<r.length;++a){let c=r[a],d=a===r.length-1,p=s==="/"?t:t.slice(s.length)||"/",f=S1({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},p),h=c.route;if(!f)return null;Object.assign(i,f.params),l.push({params:i,pathname:gr([s,f.pathname]),pathnameBase:D9(gr([s,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(s=gr([s,f.pathnameBase]))}return l}function S1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=R9(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],l=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((d,p,f)=>{let{paramName:h,isOptional:g}=p;if(h==="*"){let v=a[f]||"";l=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const w=a[f];return g&&!w?d[h]=void 0:d[h]=(w||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:l,pattern:e}}function R9(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Gp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function z9(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Gp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Gi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const M9=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,A9=e=>M9.test(e);function _9(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?zs(e):e,s;if(n)if(A9(n))s=n;else{if(n.includes("//")){let l=n;n=n.replace(/\/\/+/g,"/"),Gp(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?s=yh(n.substring(1),"/"):s=yh(n,t)}else s=t;return{pathname:s,search:O9(r),hash:B9(i)}}function yh(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function iu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function N9(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Zp(e,t){let n=N9(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function qp(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=zs(e):(i=Ss({},e),it(!i.pathname||!i.pathname.includes("?"),iu("?","pathname","search",i)),it(!i.pathname||!i.pathname.includes("#"),iu("#","pathname","hash",i)),it(!i.search||!i.search.includes("#"),iu("#","search","hash",i)));let s=e===""||i.pathname==="",l=s?"/":i.pathname,a;if(l==null)a=n;else{let f=t.length-1;if(!r&&l.startsWith("..")){let h=l.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}a=f>=0?t[f]:"/"}let c=_9(i,a),d=l&&l!=="/"&&l.endsWith("/"),p=(s||l===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||p)&&(c.pathname+="/"),c}const gr=e=>e.join("/").replace(/\/\/+/g,"/"),D9=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),O9=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,B9=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function F9(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const s3=["post","put","patch","delete"];new Set(s3);const H9=["get",...s3];new Set(H9);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ba(){return ba=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ba.apply(this,arguments)}const oc=m.createContext(null),l3=m.createContext(null),Yn=m.createContext(null),Qp=m.createContext(null),Tn=m.createContext({outlet:null,matches:[],isDataRoute:!1}),a3=m.createContext(null);function U9(e,t){let{relative:n}=t===void 0?{}:t;no()||it(!1);let{basename:r,navigator:i}=m.useContext(Yn),{hash:s,pathname:l,search:a}=sc(e,{relative:n}),c=l;return r!=="/"&&(c=l==="/"?r:gr([r,l])),i.createHref({pathname:c,search:a,hash:s})}function no(){return m.useContext(Qp)!=null}function Gn(){return no()||it(!1),m.useContext(Qp).location}function c3(e){m.useContext(Yn).static||m.useLayoutEffect(e)}function ft(){let{isDataRoute:e}=m.useContext(Tn);return e?iy():V9()}function V9(){no()||it(!1);let e=m.useContext(oc),{basename:t,future:n,navigator:r}=m.useContext(Yn),{matches:i}=m.useContext(Tn),{pathname:s}=Gn(),l=JSON.stringify(Zp(i,n.v7_relativeSplatPath)),a=m.useRef(!1);return c3(()=>{a.current=!0}),m.useCallback(function(d,p){if(p===void 0&&(p={}),!a.current)return;if(typeof d=="number"){r.go(d);return}let f=qp(d,JSON.parse(l),s,p.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:gr([t,f.pathname])),(p.replace?r.replace:r.push)(f,p.state,p)},[t,r,l,s,e])}const W9=m.createContext(null);function K9(e){let t=m.useContext(Tn).outlet;return t&&m.createElement(W9.Provider,{value:e},t)}function Ms(){let{matches:e}=m.useContext(Tn),t=e[e.length-1];return t?t.params:{}}function sc(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=m.useContext(Yn),{matches:i}=m.useContext(Tn),{pathname:s}=Gn(),l=JSON.stringify(Zp(i,r.v7_relativeSplatPath));return m.useMemo(()=>qp(e,JSON.parse(l),s,n==="path"),[e,l,s,n])}function Y9(e,t){return G9(e)}function G9(e,t,n,r){no()||it(!1);let{navigator:i}=m.useContext(Yn),{matches:s}=m.useContext(Tn),l=s[s.length-1],a=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let d=Gn(),p;p=d;let f=p.pathname||"/",h=f;if(c!=="/"){let v=c.replace(/^\//,"").split("/");h="/"+f.replace(/^\//,"").split("/").slice(v.length).join("/")}let g=v9(e,{pathname:h});return J9(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:gr([c,i.encodeLocation?i.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?c:gr([c,i.encodeLocation?i.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),s,n,r)}function Z9(){let e=ry(),t=F9(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},t),n?m.createElement("pre",{style:i},n):null,null)}const q9=m.createElement(Z9,null);class Q9 extends m.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?m.createElement(Tn.Provider,{value:this.props.routeContext},m.createElement(a3.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function X9(e){let{routeContext:t,match:n,children:r}=e,i=m.useContext(oc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),m.createElement(Tn.Provider,{value:t},r)}function J9(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let p=l.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);p>=0||it(!1),l=l.slice(0,Math.min(l.length,p+1))}let c=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<l.length;p++){let f=l[p];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(d=p),f.route.id){let{loaderData:h,errors:g}=n,w=f.route.loader&&h[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||w){c=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((p,f,h)=>{let g,w=!1,v=null,S=null;n&&(g=a&&f.route.id?a[f.route.id]:void 0,v=f.route.errorElement||q9,c&&(d<0&&h===0?(oy("route-fallback"),w=!0,S=null):d===h&&(w=!0,S=f.route.hydrateFallbackElement||null)));let x=t.concat(l.slice(0,h+1)),L=()=>{let y;return g?y=v:w?y=S:f.route.Component?y=m.createElement(f.route.Component,null):f.route.element?y=f.route.element:y=p,m.createElement(X9,{match:f,routeContext:{outlet:p,matches:x,isDataRoute:n!=null},children:y})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?m.createElement(Q9,{location:n.location,revalidation:n.revalidation,component:v,error:g,children:L(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):L()},null)}var u3=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(u3||{}),d3=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(d3||{});function ey(e){let t=m.useContext(oc);return t||it(!1),t}function ty(e){let t=m.useContext(l3);return t||it(!1),t}function ny(e){let t=m.useContext(Tn);return t||it(!1),t}function p3(e){let t=ny(),n=t.matches[t.matches.length-1];return n.route.id||it(!1),n.route.id}function ry(){var e;let t=m.useContext(a3),n=ty(d3.UseRouteError),r=p3();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function iy(){let{router:e}=ey(u3.UseNavigateStable),t=p3(),n=m.useRef(!1);return c3(()=>{n.current=!0}),m.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ba({fromRouteId:t},s)))},[e,t])}const vh={};function oy(e,t,n){vh[e]||(vh[e]=!0)}function sy(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Xp(e){let{to:t,replace:n,state:r,relative:i}=e;no()||it(!1);let{future:s,static:l}=m.useContext(Yn),{matches:a}=m.useContext(Tn),{pathname:c}=Gn(),d=ft(),p=qp(t,Zp(a,s.v7_relativeSplatPath),c,i==="path"),f=JSON.stringify(p);return m.useEffect(()=>d(JSON.parse(f),{replace:n,state:r,relative:i}),[d,f,i,n,r]),null}function Jp(e){return K9(e.context)}function ly(e){let{basename:t="/",children:n=null,location:r,navigationType:i=_r.Pop,navigator:s,static:l=!1,future:a}=e;no()&&it(!1);let c=t.replace(/^\/*/,"/"),d=m.useMemo(()=>({basename:c,navigator:s,static:l,future:ba({v7_relativeSplatPath:!1},a)}),[c,a,s,l]);typeof r=="string"&&(r=zs(r));let{pathname:p="/",search:f="",hash:h="",state:g=null,key:w="default"}=r,v=m.useMemo(()=>{let S=Gi(p,c);return S==null?null:{location:{pathname:S,search:f,hash:h,state:g,key:w},navigationType:i}},[c,p,f,h,g,w,i]);return v==null?null:m.createElement(Yn.Provider,{value:d},m.createElement(Qp.Provider,{children:n,value:v}))}new Promise(()=>{});/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ka(){return ka=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ka.apply(this,arguments)}function f3(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function ay(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function cy(e,t){return e.button===0&&(!t||t==="_self")&&!ay(e)}function $1(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function uy(e,t){let n=$1(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(s=>{n.append(i,s)})}),n}const dy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],py=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],fy="6";try{window.__reactRouterVersion=fy}catch{}const hy=m.createContext({isTransitioning:!1}),gy="startTransition",wh=c6[gy];function my(e){let{basename:t,children:n,future:r,window:i}=e,s=m.useRef();s.current==null&&(s.current=x9({window:i,v5Compat:!0}));let l=s.current,[a,c]=m.useState({action:l.action,location:l.location}),{v7_startTransition:d}=r||{},p=m.useCallback(f=>{d&&wh?wh(()=>c(f)):c(f)},[c,d]);return m.useLayoutEffect(()=>l.listen(p),[l,p]),m.useEffect(()=>sy(r),[r]),m.createElement(ly,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}const xy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ly=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ro=m.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:l,state:a,target:c,to:d,preventScrollReset:p,viewTransition:f}=t,h=f3(t,dy),{basename:g}=m.useContext(Yn),w,v=!1;if(typeof d=="string"&&Ly.test(d)&&(w=d,xy))try{let y=new URL(window.location.href),$=d.startsWith("//")?new URL(y.protocol+d):new URL(d),I=Gi($.pathname,g);$.origin===y.origin&&I!=null?d=I+$.search+$.hash:v=!0}catch{}let S=U9(d,{relative:i}),x=vy(d,{replace:l,state:a,target:c,preventScrollReset:p,relative:i,viewTransition:f});function L(y){r&&r(y),y.defaultPrevented||x(y)}return m.createElement("a",ka({},h,{href:w||S,onClick:v||s?r:L,ref:n,target:c}))}),h3=m.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:l=!1,style:a,to:c,viewTransition:d,children:p}=t,f=f3(t,py),h=sc(c,{relative:f.relative}),g=Gn(),w=m.useContext(l3),{navigator:v,basename:S}=m.useContext(Yn),x=w!=null&&wy(h)&&d===!0,L=v.encodeLocation?v.encodeLocation(h).pathname:h.pathname,y=g.pathname,$=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;i||(y=y.toLowerCase(),$=$?$.toLowerCase():null,L=L.toLowerCase()),$&&S&&($=Gi($,S)||$);const I=L!=="/"&&L.endsWith("/")?L.length-1:L.length;let k=y===L||!l&&y.startsWith(L)&&y.charAt(I)==="/",j=$!=null&&($===L||!l&&$.startsWith(L)&&$.charAt(L.length)==="/"),z={isActive:k,isPending:j,isTransitioning:x},R=k?r:void 0,T;typeof s=="function"?T=s(z):T=[s,k?"active":null,j?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let P=typeof a=="function"?a(z):a;return m.createElement(ro,ka({},f,{"aria-current":R,className:T,ref:n,style:P,to:c,viewTransition:d}),typeof p=="function"?p(z):p)});var C1;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(C1||(C1={}));var bh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(bh||(bh={}));function yy(e){let t=m.useContext(oc);return t||it(!1),t}function vy(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:l,viewTransition:a}=t===void 0?{}:t,c=ft(),d=Gn(),p=sc(e,{relative:l});return m.useCallback(f=>{if(cy(f,n)){f.preventDefault();let h=r!==void 0?r:wa(d)===wa(p);c(e,{replace:h,state:i,preventScrollReset:s,relative:l,viewTransition:a})}},[d,c,p,r,i,n,e,s,l,a])}function g3(e){let t=m.useRef($1(e)),n=m.useRef(!1),r=Gn(),i=m.useMemo(()=>uy(r.search,n.current?null:t.current),[r.search]),s=ft(),l=m.useCallback((a,c)=>{const d=$1(typeof a=="function"?a(i):a);n.current=!0,s("?"+d,c)},[s,i]);return[i,l]}function wy(e,t){t===void 0&&(t={});let n=m.useContext(hy);n==null&&it(!1);let{basename:r}=yy(C1.useViewTransitionState),i=sc(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=Gi(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=Gi(n.nextLocation.pathname,r)||n.nextLocation.pathname;return S1(i.pathname,l)!=null||S1(i.pathname,s)!=null}const Xo="/assets/logo-CsQHSiKo.png",by=u.header`
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
`,ky=u(ro)`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: 2px;
    border-radius: ${({theme:e})=>e.radii.md};
  }
`,jy=u.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
`,Sy=u.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`,$y=u.h1`
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.colors.primary600};
  margin: 0;
  line-height: 1.3;
`,Cy=u.p`
  font-size: 0.8rem;
  color: ${({theme:e})=>e.colors.primary400};
  margin: 2px 0 0;
`,Ey=u.div`
  width: 48px;
  flex-shrink: 0;
`,Py=()=>o.jsxs(by,{children:[o.jsx(ky,{to:"/",children:o.jsx(jy,{src:Xo,alt:"명상 웰니스 지도 로고"})}),o.jsxs(Sy,{children:[o.jsx($y,{children:"명상 웰니스 지도"}),o.jsx(Cy,{children:"국내 명상지를 찾아보세요"})]}),o.jsx(Ey,{})]}),Iy=u.nav`
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
`,ou=u(h3)`
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
`,Ty=u(ro)`
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
`,Ry=()=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),o.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),zy=()=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),o.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"}),o.jsx("line",{x1:"8",y1:"6",x2:"16",y2:"6"}),o.jsx("line",{x1:"8",y1:"10",x2:"16",y2:"10"})]}),My=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),Ay=()=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),o.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),_y=()=>{const{pathname:e}=Gn(),t=e.startsWith("/meditation/map")||e.startsWith("/meditation/region")||e.startsWith("/blog");return o.jsxs(Iy,{role:"navigation","aria-label":"하단 메뉴",children:[o.jsxs(ou,{to:"/",end:!0,children:[o.jsx(Ry,{}),o.jsx("span",{children:"홈"})]}),o.jsxs(Ty,{to:"/meditation/map",$active:t,children:[o.jsx(zy,{}),o.jsx("span",{children:"지도"})]}),o.jsxs(ou,{to:"/favorites",children:[o.jsx(My,{}),o.jsx("span",{children:"찜"})]}),o.jsxs(ou,{to:"/profile",children:[o.jsx(Ay,{}),o.jsx("span",{children:"마이"})]})]})},Ny=u.div`
  min-height: 100vh;
  background: ${({theme:e})=>e.colors.warmCream};
`,Dy=u.main`
  padding: 0 20px calc(56px + env(safe-area-inset-bottom, 0px) + 24px);
  background: ${({theme:e})=>e.colors.warmCream};

  @media (max-width: 768px) {
    padding: 0 12px calc(56px + env(safe-area-inset-bottom, 0px) + 24px);
  }
`,Oy=()=>{const{pathname:e}=Gn(),t=e==="/"||e==="/meditation";return o.jsxs(Ny,{children:[t&&o.jsx(Py,{}),o.jsx(Dy,{children:o.jsx(Jp,{})}),o.jsx(_y,{})]})},By=u.div`
  background: ${({theme:e})=>e.colors.white};
  padding: 20px;
  border-radius: ${({theme:e})=>e.radii.lg};
  box-shadow: ${({theme:e})=>e.shadow.soft};
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid ${({theme:e})=>e.colors.primary100};
`,rl=u.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,il=u.span`
  font-size: 1.1rem;
  font-weight: 600;
`,Fy=u.select`
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid ${({theme:e})=>e.colors.border200};
  font-size: 1.1rem;
`,kh=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,jh=u.button`
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
`,Hy=u.button`
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
`,Uy=u.input`
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
`,Vy=u.span`
  font-size: 0.88rem;
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.4;
`,ja=({filters:e,availableTags:t,onChangeKeyword:n,onChangeCategory:r,onToggleTag:i,onChangeSortBy:s,onReset:l})=>{const a=[{label:"전체",value:"all"},{label:"템플스테이",value:"템플스테이"},{label:"명상센터",value:"명상센터"},{label:"프리랜서(공간없음)",value:"프리랜서(공간없음)"},{label:"힐링명상",value:"힐링명상"},{label:"기타",value:"기타"}];return o.jsxs(By,{children:[o.jsxs(rl,{children:[o.jsx(il,{children:"검색"}),o.jsx(Uy,{type:"search",enterKeyHint:"search",autoComplete:"off",placeholder:"이름, 주소, 기관명, 태그, 소개글…",value:e.keyword,onChange:c=>n(c.target.value),"aria-label":"검색어"}),o.jsx(Vy,{children:"띄어쓰기로 여러 단어를 넣으면 모두 포함되는 장소만 보여요."})]}),o.jsxs(rl,{children:[o.jsx(il,{children:"카테고리"}),o.jsx(kh,{children:a.map(c=>o.jsx(jh,{type:"button",$active:e.category===c.value,onClick:()=>r(c.value),children:c.label},c.value))})]}),o.jsxs(rl,{children:[o.jsx(il,{children:"해시태그"}),o.jsx(kh,{children:t.map(c=>o.jsxs(jh,{type:"button",$active:e.tags.includes(c),onClick:()=>i(c),children:["#",c]},c))})]}),o.jsxs(rl,{children:[o.jsx(il,{children:"정렬"}),o.jsxs(Fy,{value:e.sortBy,onChange:c=>s(c.target.value),children:[o.jsx("option",{value:"recommend",children:"추천순"}),o.jsx("option",{value:"name",children:"이름순"})]})]}),o.jsx(Hy,{type:"button",onClick:l,children:"필터 초기화"})]})},Wy=u.form`
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

  ${({$layout:e})=>e==="main"?Ne`
          width: 75%;
          max-width: 420px;
          margin-bottom: 20px;

          &:focus-within {
            width: 100%;
            max-width: 100%;
            border-color: ${({theme:t})=>t.colors.primary400};
            box-shadow: 0 4px 16px rgba(75, 0, 130, 0.12);
          }
        `:Ne`
          width: 100%;
          max-width: 100%;
          margin-bottom: 16px;

          &:focus-within {
            border-color: ${({theme:t})=>t.colors.primary400};
            box-shadow: 0 4px 16px rgba(75, 0, 130, 0.1);
          }
        `}
`,Ky=u.span`
  color: ${({theme:e})=>e.colors.primary600};
  display: grid;
  place-items: center;
  flex-shrink: 0;

  svg {
    width: 18px;
    height: 18px;
  }
`,Yy=u.input`
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
`,Gy=u.button`
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
`,Fl=({value:e,onChange:t,placeholder:n,layout:r="region",id:i,"aria-label":s})=>{const l=a=>{a.preventDefault()};return o.jsxs(Wy,{$layout:r,onSubmit:l,children:[o.jsx(Ky,{"aria-hidden":!0,children:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("circle",{cx:"11",cy:"11",r:"7"}),o.jsx("line",{x1:"16.65",y1:"16.65",x2:"21",y2:"21"})]})}),o.jsx(Yy,{id:i,type:"search",enterKeyHint:"search",autoComplete:"off",placeholder:n,value:e,onChange:a=>t(a.target.value),"aria-label":s??"검색어"}),e?o.jsx(Gy,{type:"button",onClick:()=>t(""),"aria-label":"검색어 삭제",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"18",height:"18",children:o.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})}):null]})},Zy=480,qy=360,Qy=128;function e0(e,t){try{const n=new URL(e);return n.hostname.includes("images.unsplash.com")?(n.searchParams.set("w",String(t)),n.searchParams.set("q","70"),n.searchParams.has("auto")||n.searchParams.set("auto","format"),n.searchParams.has("fit")||n.searchParams.set("fit","crop"),n.toString()):e}catch{return e}}function m3(e){if(e==null||!String(e).trim())return"";const t=String(e).trim();return e0(t,Zy)}function Xy(e){if(e==null||!String(e).trim())return"";const t=String(e).trim();return e0(t,qy)}function Jy(e){if(e==null||!String(e).trim())return"";const t=String(e).trim();return e0(t,Qy)}const Sa=[{id:"KR-11",minLat:37.41,maxLat:37.7,minLng:126.75,maxLng:127.2},{id:"KR-50",minLat:36.4,maxLat:36.62,minLng:127.18,maxLng:127.32},{id:"KR-30",minLat:36.2,maxLat:36.55,minLng:127.2,maxLng:127.55},{id:"KR-27",minLat:35.7,maxLat:36.04,minLng:128.2,maxLng:128.78},{id:"KR-26",minLat:34.88,maxLat:35.32,minLng:128.8,maxLng:129.3},{id:"KR-31",minLat:35.38,maxLat:35.78,minLng:128.9,maxLng:129.5},{id:"KR-29",minLat:35,maxLat:35.3,minLng:126.5,maxLng:127},{id:"KR-28",minLat:37.2,maxLat:37.7,minLng:126.2,maxLng:126.9},{id:"KR-49",minLat:33,maxLat:33.6,minLng:126,maxLng:127},{id:"KR-41",minLat:36.9,maxLat:38,minLng:126.5,maxLng:127.5},{id:"KR-42",minLat:37,maxLat:38.5,minLng:127,maxLng:131},{id:"KR-43",minLat:36,maxLat:37.1,minLng:127,maxLng:128.4},{id:"KR-44",minLat:35.7,maxLat:36.6,minLng:125.5,maxLng:127.1},{id:"KR-45",minLat:35,maxLat:36,minLng:126.4,maxLng:128},{id:"KR-46",minLat:33,maxLat:35.2,minLng:125,maxLng:128},{id:"KR-47",minLat:35.5,maxLat:38,minLng:127,maxLng:130},{id:"KR-48",minLat:34.4,maxLat:35.5,minLng:127.4,maxLng:130}],ev=(e,t)=>{if(!Number.isFinite(e)||!Number.isFinite(t)||e<32.5||e>38.8||t<123||t>132)return null;for(const n of Sa)if(e>=n.minLat&&e<=n.maxLat&&t>=n.minLng&&t<=n.maxLng)return n.id;return null},tv={id:"all",name:"전체",slug:"all"},Wn=e=>e==="all"?tv:en.getState().regions.find(t=>t.id===e),nv=(e,t=8)=>[...e].sort((n,r)=>{const i=(r.viewCount??0)-(n.viewCount??0);return i!==0?i:String(n.id).localeCompare(String(r.id))}).slice(0,t),x3=e=>{const t=new Set;return e.forEach(n=>{n.hashtags.forEach(r=>t.add(r))}),Array.from(t).filter(n=>n!=="템플스테이").sort()},rv=e=>e.hashtags.some(t=>/프리랜서|코칭|개인지도|1:1/.test(t))?"프리랜서(공간없음)":e.hasTempleStay?"템플스테이":e.hashtags.includes("요가")||e.name.includes("요가")?"요가센터":"명상센터",$a=(e,t)=>e.filter(n=>{var r;if(t.category&&t.category!=="all"){const i=rv(n);if(t.category==="힐링명상"){if(i==="요가센터")return!1}else if(i!==t.category)return!1}if(t.tags.length>0&&!t.tags.some(s=>[...n.hashtags,...n.themes].includes(s)))return!1;if(t.keyword.trim().length>0){const i=t.keyword.trim().toLowerCase().split(/\s+/).filter(d=>d.length>0),s=(n.detailSections??[]).map(d=>`${d.title} ${d.body}`).join(" "),l=(n.programs??[]).map(d=>d.title).join(" "),a=[n.name,n.shortDescription,n.description,n.address,(r=n.organization)==null?void 0:r.name,n.duration,n.admissionFee,n.venueKind,l,...n.hashtags,...n.themes,s].filter(Boolean).join(" ").toLowerCase();if(!i.every(d=>a.includes(d)))return!1}return!0}),L3=(e,t)=>t==="name"?[...e].sort((n,r)=>n.name.localeCompare(r.name,"ko")):e,iv=["meditation-access-token","meditation-user-email","meditation-user-role"];function Sh(){if(!(typeof window>"u"))for(const e of iv)localStorage.removeItem(e),document.cookie=`${e}=; path=/; max-age=0; SameSite=Lax`}const ov=new Set(["ADMIN","DEV","EMPLOYEE"]),$h="__http_only_cookie_session__",ut=to((e,t)=>({accessToken:null,email:null,role:null,authReady:!1,bootstrapAuth:async()=>{Sh();const n=Se();if(!n){e({accessToken:null,email:null,role:null,authReady:!0});return}try{const r=await fetch(`${n}/me`,{credentials:"include"});if(r.ok){const i=await r.json(),s=i.email??i.username??"",l=i.role??"MEMBER";e({accessToken:$h,email:s||null,role:l,authReady:!0});return}}catch{}e({accessToken:null,email:null,role:null,authReady:!0})},setSession:async()=>{e({accessToken:$h,email:null,role:null,authReady:!1}),await t().bootstrapAuth()},logout:async()=>{const n=Se();if(n)try{await fetch(`${n}/auth/logout`,{method:"POST",credentials:"include"})}catch{}Sh(),e({accessToken:null,email:null,role:null,authReady:!0})},isStaff:()=>ov.has(t().role??""),isAuthenticated:()=>!!t().accessToken,authHeader:()=>{}}));async function he(e,t={}){const n=Se();if(!n)throw new Error("VITE_API_BASE_URL 미설정");const r=new Headers(t.headers);t.body&&!r.has("Content-Type")&&!(t.body instanceof FormData)&&r.set("Content-Type","application/json");const i=e.startsWith("/")?`${n}${e}`:`${n}/${e}`;return fetch(i,{...t,headers:r,credentials:"include"})}const y3="meditation-favorites",sv=()=>{if(typeof window>"u")return[];try{const e=localStorage.getItem(y3);if(!e)return[];const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}},ol=e=>{if(!(typeof window>"u"))try{localStorage.setItem(y3,JSON.stringify(e))}catch{}},mr=to((e,t)=>({favorites:sv(),replaceAll:n=>{const r=[...new Set(n)];ol(r),e({favorites:r})},pullFromServer:async()=>{if(!(!Se()||!ut.getState().isAuthenticated()))try{const n=await he("/me/favorites");if(!n.ok)return;const r=await n.json(),i=Array.isArray(r.placeIds)?r.placeIds:[];ol(i),e({favorites:i})}catch{}},pushToServer:async n=>{if(!(!Se()||!ut.getState().isAuthenticated()))try{const r=await he("/me/favorites",{method:"PUT",body:JSON.stringify({placeIds:n})});if(!r.ok)return;const i=await r.json(),s=Array.isArray(i.placeIds)?i.placeIds:n;ol(s),e({favorites:s})}catch{}},toggleFavorite:n=>{const r=t(),s=r.favorites.includes(n)?r.favorites.filter(l=>l!==n):[...r.favorites,n];ol(s),e({favorites:s}),Se()&&ut.getState().isAuthenticated()&&t().pushToServer(s)},isFavorite:n=>t().favorites.includes(n)})),lv=u.button`
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
`,av=u.span`
  position: relative;
  display: inline-flex;
  width: 19px;
  height: 19px;
`,cv=u.svg`
  position: absolute;
  inset: 0;
  width: 19px;
  height: 19px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  overflow: visible;
`,uv=u.svg`
  position: absolute;
  inset: 0;
  width: 19px;
  height: 19px;
  fill: currentColor;
  stroke: none;
  pointer-events: none;
  opacity: ${({$active:e})=>e?1:0};
  transition: opacity 0.35s ease;
`,Ch="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",lc=({placeId:e})=>{const{isFavorite:t,toggleFavorite:n}=mr(),r=t(e),i=s=>{s.preventDefault(),s.stopPropagation(),n(e)};return o.jsx(lv,{type:"button",$active:r,onClick:i,"aria-label":r?"찜 해제":"찜하기",children:o.jsxs(av,{children:[o.jsx(cv,{viewBox:"0 0 24 24",children:o.jsx("path",{d:Ch})}),o.jsx(uv,{viewBox:"0 0 24 24",$active:r,children:o.jsx("path",{d:Ch})})]})})},dv=u.div`
  flex-shrink: 0;
  width: 200px;
  position: relative;
`,pv=u(ro)`
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
`,fv=u.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  z-index: 2;
`,hv=u.div`
  width: 100%;
  height: 120px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,gv=u.div`
  padding: 12px;
`,mv=u.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 6px;
  color: ${({theme:e})=>e.colors.text900};
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,xv=u.span`
  font-size: 0.85rem;
  color: ${({theme:e})=>e.colors.text700};
`,Lv=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 6px;
`,yv=u.span`
  display: inline-block;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.primary600};
  background: ${({theme:e})=>e.colors.primary50};
  padding: 2px 8px;
  border-radius: ${({theme:e})=>e.radii.pill};
`,vv=({place:e})=>{const t=Wn(e.regionId);return o.jsxs(dv,{children:[o.jsx(fv,{children:o.jsx(lc,{placeId:e.id})}),o.jsxs(pv,{to:`/meditation/place/${e.id}`,children:[o.jsx(hv,{children:o.jsx("img",{src:m3(e.thumbnailUrl),alt:`${e.name} 썸네일`,loading:"lazy",decoding:"async",sizes:"200px"})}),o.jsxs(gv,{children:[o.jsx(mv,{children:e.name}),o.jsx(xv,{children:(t==null?void 0:t.name)??e.regionId}),e.hashtags&&e.hashtags.length>0&&o.jsx(Lv,{children:e.hashtags.slice(0,2).map(n=>o.jsx(yv,{children:n},n))})]})]})]})},wv=u.article`
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
`,bv=u(ro)`
  display: block;
  text-decoration: none;
  color: inherit;

  @media (min-width: 961px) {
    display: flex;
  }
`,kv=u.div`
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
`,jv=u.div`
  padding: 16px 18px;

  @media (min-width: 961px) {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
  }
`,Sv=u.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 10px;
  color: ${({theme:e})=>e.colors.text900};
`,$v=u.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 12px;
  margin-bottom: 10px;
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.text700};
`,Cv=u.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,Ev=u.div`
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
`,Pv=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Iv=u.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,Jo=({place:e})=>{const t=Wn(e.regionId);return o.jsx(wv,{children:o.jsxs(bv,{to:`/meditation/place/${e.id}`,children:[o.jsx(kv,{children:o.jsx("img",{src:m3(e.thumbnailUrl),alt:`${e.name} 썸네일`,loading:"lazy",decoding:"async",sizes:"(min-width: 961px) 220px, 100vw"})}),o.jsxs(jv,{children:[o.jsx(Sv,{children:e.name}),o.jsx($v,{children:o.jsxs(Cv,{children:[o.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),(t==null?void 0:t.name)??e.regionId]})}),o.jsxs(Pv,{children:[o.jsx(Ev,{children:e.hashtags.slice(0,4).map(n=>o.jsx("span",{children:n},n))}),o.jsx(Iv,{children:o.jsx(lc,{placeId:e.id})})]})]})]})})},Tv=`<svg width="386" height="630" viewBox="0 0 386 630" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`,Rv=u.div`
  cursor: pointer;
  overflow: hidden;
  ${({$maxMapHeight:e})=>e?Ne`
          max-height: ${e};
        `:void 0}

  svg {
    width: 100%;
    height: auto;
    max-width: 100%;
    display: block;
    margin: 0 auto;
    pointer-events: none;
    ${({$maxMapHeight:e})=>e?Ne`
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
`,As=({activeRegionId:e,activeRegionIds:t,onSelectRegion:n,maxMapHeight:r})=>{const i=m.useRef(null),s=m.useRef(null);m.useEffect(()=>{const a=i.current;if(!a)return;const c=()=>Array.from(a.querySelectorAll("svg path.land")).filter(S=>S.getAttribute("id")),d=S=>{const x=(S==null?void 0:S.getAttribute("id"))??null;x!==s.current&&(s.current=x,c().forEach(L=>{L.getAttribute("id")===x?L.classList.add("is-hovered"):L.classList.remove("is-hovered")}))},p=(S,x)=>{var z;const L=document.elementFromPoint(S,x);if((z=L==null?void 0:L.matches)!=null&&z.call(L,"path.land"))return L;const y=a.querySelector("svg");if(!y)return null;const $=y.getScreenCTM();if(!$)return null;const I=y.createSVGPoint();I.x=S,I.y=x;const k=I.matrixTransform($.inverse()),j=c();for(let R=j.length-1;R>=0;R--)if(j[R].isPointInFill(k))return j[R];return null},f=S=>{const x=p(S.clientX,S.clientY);d(x)},h=()=>{d(null)},g=S=>{const x=p(S.clientX,S.clientY);if(x){const L=x.getAttribute("id");L&&n(L,S)}};let w=!1;const v=()=>{if(w)return;if(c().length===0){requestAnimationFrame(v);return}a.addEventListener("pointermove",f),a.addEventListener("pointerleave",h),a.addEventListener("click",g)};return v(),()=>{w=!0,a.removeEventListener("pointermove",f),a.removeEventListener("pointerleave",h),a.removeEventListener("click",g)}},[n]);const l=(t??(e?[e]:[])).map(a=>a==="KR-47"?"KR-48":a);return m.useEffect(()=>{const a=i.current;if(!a)return;a.querySelectorAll("svg path.land").forEach(d=>{const p=d.getAttribute("id");p&&l.includes(p)?d.classList.add("is-active"):d.classList.remove("is-active")})},[l.join("|")]),o.jsx(Rv,{ref:i,$maxMapHeight:r,role:"img","aria-label":"대한민국 행정구역 지도",dangerouslySetInnerHTML:{__html:Tv}})},Eh={tags:[],keyword:"",sortBy:"recommend",category:"all"},t0=to(e=>({selectedRegionId:void 0,filters:Eh,page:1,pageSize:10,isFilterOpen:!1,setRegion:t=>e({selectedRegionId:t,page:1}),setPage:t=>e({page:t}),setPageSize:t=>e({pageSize:t,page:1}),setKeyword:t=>e(n=>({filters:{...n.filters,keyword:t},page:1})),toggleTag:t=>e(n=>{const i=n.filters.tags.includes(t)?n.filters.tags.filter(s=>s!==t):[...n.filters.tags,t];return{filters:{...n.filters,tags:i},page:1}}),clearTags:()=>e(t=>({filters:{...t.filters,tags:[]},page:1})),setSortBy:t=>e(n=>({filters:{...n.filters,sortBy:t},page:1})),setCategory:t=>e(n=>({filters:{...n.filters,category:t},page:1})),resetFilters:()=>e({filters:Eh,page:1}),setFilterOpen:t=>e({isFilterOpen:t})})),v3=we`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`,zv=u.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 12px 24px;
  color: ${({theme:e})=>e.colors.text900};
  background: ${({theme:e})=>e.colors.warmCream};

  @media (max-width: 960px) {
    padding: 14px 10px 24px;
  }
`,Mv=u.div`
  animation: ${v3} 0.35s ease both;
`,Av=u.div`
  display: block;

  @media (min-width: 961px) {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 28px;
    align-items: start;
  }
`,_v=u.section`
  padding: 12px;
  border-radius: ${({theme:e})=>e.radii.lg};
  margin-bottom: 20px;

  @media (min-width: 961px) {
    max-width: 500px;
    width: 100%;
  }
`,Nv=u.section`
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
`,Dv=u.section`
  margin-top: 28px;
  background: ${({theme:e})=>e.colors.warmCream};
`,Ov=u.h2`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
  margin: 0 0 16px;
`,Bv=u.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 12px;
  -webkit-overflow-scrolling: touch;
`,Fv=u.div`
  @media (min-width: 961px) {
    position: sticky;
    top: 92px;
  }
`,Hv=u.button`
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
`,Uv=u.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-areas:
    "filter content";
  gap: 28px;
  animation: ${v3} 0.35s ease both;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-areas: "content";
  }
`,Vv=u.aside`
  grid-area: filter;

  @media (max-width: 960px) {
    display: none;
  }
`,Wv=u.div`
  grid-area: content;
`,Kv=u.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Yv=u.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Ph=u.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text700};
`,Gv=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,Zv=u.p`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.text700};
  margin: 0;
`,qv=u.button`
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
`,Qv=u.div`
  position: fixed;
  inset: 0;
  z-index: 70;
`,Xv=we`from { opacity: 0; } to { opacity: 1; }`,Jv=we`from { transform: translateX(100%); } to { transform: translateX(0); }`,ew=u.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  animation: ${Xv} 0.2s ease;
`,tw=u.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: min(90vw, 360px);
  background: ${({theme:e})=>e.colors.white};
  padding: 20px;
  overflow-y: auto;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);
  animation: ${Jv} 0.25s ease;
`,nw=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,rw=u.button`
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
`,iw=u.div`
  height: 1px;
`,ow=()=>{const e=ft(),{selectedRegionId:t,filters:n,page:r,pageSize:i,setPage:s,setRegion:l,setKeyword:a,toggleTag:c,setSortBy:d,setCategory:p,resetFilters:f,isFilterOpen:h,setFilterOpen:g}=t0(),w=m.useRef(null),[v,S]=m.useState(""),x=en(E=>E.places),L=en(E=>E.regions),y=[{id:"all",name:"전체"},...L],$=m.useMemo(()=>nv(x,8),[x]),I=m.useMemo(()=>x3(x),[x]),k=m.useMemo(()=>$a(x,n),[x,n]),j=m.useMemo(()=>L3(k,n.sortBy),[k,n.sortBy]),z=m.useMemo(()=>j.slice(0,r*i),[j,r,i]),R=z.length<j.length,T=n.keyword.trim().length>0;m.useEffect(()=>{l("all")},[l]),m.useEffect(()=>{const E=["템플스테이","숲 명상","바다 명상","한옥 명상","호흡 수련","걷기 명상"];let A=0,N=0,F=!1,G;const q=M=>{G=window.setTimeout(()=>{const O=E[A%E.length];if(F?N-=1:N+=1,S(O.slice(0,Math.max(N,0))),!F&&N>=O.length){F=!0,q(700);return}if(F&&N<=0){F=!1,A+=1,q(300);return}q(F?120:240)},M)};return q(240),()=>window.clearTimeout(G)},[]),m.useEffect(()=>{s(1)},[n.keyword,n.sortBy,n.tags,n.category,s]),m.useEffect(()=>{const E=w.current;if(!E||!R||!T)return;const A=new IntersectionObserver(N=>{var F;(F=N[0])!=null&&F.isIntersecting&&s(r+1)},{rootMargin:"200px"});return A.observe(E),()=>A.disconnect()},[R,r,s,T]);const P=E=>{l(E),e("/meditation/map")};return o.jsxs(zv,{children:[o.jsx(Fl,{layout:"main",value:n.keyword,onChange:a,placeholder:v||"명상센터 검색"}),T?o.jsxs(Uv,{children:[o.jsx(Vv,{children:o.jsx(ja,{filters:n,availableTags:I,onChangeKeyword:a,onChangeCategory:p,onToggleTag:c,onChangeSortBy:d,onReset:f})}),o.jsx(Wv,{children:o.jsxs(Kv,{children:[o.jsxs(Gv,{children:[o.jsxs(Zv,{children:["총 ",j.length,"곳의 명상센터"]}),o.jsx(qv,{type:"button",onClick:()=>g(!0),"aria-label":"필터",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})})})]}),o.jsxs(Yv,{children:[z.length===0&&o.jsx(Ph,{children:x.length===0?"등록된 공간이 없습니다.":"조건에 맞는 명상센터가 없어요."}),z.map(E=>o.jsx(Jo,{place:E},E.id))]}),R&&o.jsx(iw,{ref:w})]})})]}):o.jsx(Mv,{children:o.jsxs(Av,{children:[o.jsx(_v,{children:o.jsx(As,{activeRegionId:t,onSelectRegion:P})}),o.jsxs(Fv,{children:[o.jsx(Nv,{children:y.map(E=>o.jsx(Hv,{type:"button",$active:t===E.id,onClick:()=>P(E.id),children:E.name},E.id))}),o.jsxs(Dv,{children:[o.jsx(Ov,{children:"인기 명상지"}),x.length===0?o.jsx(Ph,{style:{marginTop:12,textAlign:"center",padding:"24px 8px"},children:"등록된 공간이 없습니다."}):o.jsx(Bv,{children:$.map(E=>o.jsx(vv,{place:E},E.id))})]})]})]})}),T&&h&&o.jsxs(Qv,{children:[o.jsx(ew,{onClick:()=>g(!1)}),o.jsxs(tw,{children:[o.jsxs(nw,{children:[o.jsx("h3",{style:{margin:0,fontSize:"1.2rem"},children:"필터"}),o.jsx(rw,{type:"button",onClick:()=>g(!1),children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),o.jsx(ja,{filters:n,availableTags:I,onChangeKeyword:a,onChangeCategory:p,onToggleTag:c,onChangeSortBy:d,onReset:f})]})]})]})},w3="mm-landing-dismissed";function sw(){try{return sessionStorage.getItem(w3)==="1"}catch{return!1}}function lw(){try{sessionStorage.setItem(w3,"1")}catch{}}const Ih=()=>{const e=ut(n=>n.authReady),t=ut(n=>!!n.accessToken);return e?!t&&!sw()?o.jsx(Xp,{to:"/welcome",replace:!0}):o.jsx(ow,{}):null},Ca="/assets/kakao-BwFsiG1v.png",Ea="/assets/naver-8e52KbwB.png",Pa="/assets/google-3Iqg8dcD.png",W={h1:Ne`
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 1.22;
    letter-spacing: -0.02em;
  `,h2:Ne`
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 1.26;
    letter-spacing: -0.02em;
  `,h3:Ne`
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.02em;
  `,title:Ne`
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: -0.02em;
  `,body1:Ne`
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.45;
  `,body2:Ne`
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.45;
  `,caption:Ne`
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.4;
  `,buttonLg:Ne`
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.2;
  `,buttonMd:Ne`
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.2;
  `},aw=we`
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(18px, -24px) scale(1.06); }
  66% { transform: translate(-14px, 16px) scale(0.96); }
`,cw=we`
  0%, 100% { transform: scale(1); box-shadow: 0 18px 48px rgba(75, 0, 130, 0.18); }
  50% { transform: scale(1.06); box-shadow: 0 26px 64px rgba(75, 0, 130, 0.28); }
`,uw=we`
  0%, 100% { transform: scale(0.9); opacity: 0.55; }
  50% { transform: scale(1.25); opacity: 0; }
`,Zi=we`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`,dw=we`
  0% { transform: translateY(0); opacity: 0.9; }
  50% { transform: translateY(8px); opacity: 0.4; }
  100% { transform: translateY(0); opacity: 0.9; }
`,pw=we`
  to { background-position: 200% center; }
`;function su(e=.2){const t=m.useRef(null),[n,r]=m.useState(!1);return m.useEffect(()=>{const i=t.current;if(!i)return;if(typeof IntersectionObserver>"u"){r(!0);return}const s=new IntersectionObserver(l=>{l.forEach(a=>{a.isIntersecting&&(r(!0),s.unobserve(a.target))})},{threshold:e});return s.observe(i),()=>s.disconnect()},[e]),{ref:t,inView:n}}const fw=u.div`
  position: relative;
  min-height: 100dvh;
  overflow-x: hidden;
  background:
    radial-gradient(circle at 12% 8%, rgba(168, 139, 202, 0.22), transparent 42%),
    radial-gradient(circle at 88% 4%, rgba(245, 216, 208, 0.55), transparent 40%),
    ${({theme:e})=>e.colors.warmCream};
  color: ${({theme:e})=>e.colors.text900};
`,lu=u.span`
  position: absolute;
  z-index: 0;
  width: ${({$size:e})=>e}px;
  height: ${({$size:e})=>e}px;
  top: ${({$top:e})=>e};
  left: ${({$left:e})=>e};
  border-radius: 50%;
  background: ${({$color:e})=>e};
  filter: blur(42px);
  opacity: 0.5;
  animation: ${aw} 16s ease-in-out infinite;
  animation-delay: ${({$delay:e})=>e};
  pointer-events: none;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,hw=u.div`
  position: relative;
  z-index: 1;
  width: min(100%, 480px);
  margin: 0 auto;
  padding: 0 22px calc(40px + env(safe-area-inset-bottom, 0px));
  box-sizing: border-box;
`,gw=u.section`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: calc(48px + env(safe-area-inset-top, 0px)) 0 40px;
`,mw=u.div`
  position: relative;
  width: 128px;
  height: 128px;
  display: grid;
  place-items: center;
  animation: ${Zi} 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
`,xw=u.span`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid ${({theme:e})=>e.colors.primary200};
  animation: ${uw} 4.5s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Lw=u.div`
  width: 108px;
  height: 108px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: ${({theme:e})=>e.colors.white};
  animation: ${cw} 4.5s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  img {
    width: 74px;
    height: 74px;
    object-fit: contain;
  }
`,yw=u.p`
  margin: 26px 0 0;
  ${W.caption};
  font-weight: 700;
  letter-spacing: 0.14em;
  color: ${({theme:e})=>e.colors.primary400};
  animation: ${Zi} 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.1s both;
`,vw=u.h1`
  margin: 12px 0 0;
  font-size: clamp(3.4rem, 11vw, 4.6rem);
  font-weight: 700;
  line-height: 1.18;
  letter-spacing: -0.03em;
  background: linear-gradient(
    100deg,
    ${({theme:e})=>e.colors.primary600} 0%,
    ${({theme:e})=>e.colors.primary400} 45%,
    ${({theme:e})=>e.colors.dustyRose} 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation:
    ${Zi} 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.18s both,
    ${pw} 6s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: ${Zi} 0.7s ease 0.18s both;
  }
`,ww=u.p`
  margin: 18px 0 0;
  max-width: 320px;
  ${W.body1};
  color: ${({theme:e})=>e.colors.text700};
  animation: ${Zi} 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.28s both;
`,bw=u.div`
  margin-top: 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  ${W.caption};
  color: ${({theme:e})=>e.colors.primary400};
  animation: ${Zi} 0.7s ease 0.4s both;

  span:last-child {
    font-size: 1.8rem;
    line-height: 1;
    animation: ${dw} 1.8s ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    span:last-child {
      animation: none;
    }
  }
`,au=u.section`
  padding: 56px 0;
`,kw=u.p`
  margin: 0 0 10px;
  ${W.caption};
  font-weight: 700;
  letter-spacing: 0.1em;
  color: ${({theme:e})=>e.colors.primary400};
`,jw=u.h2`
  margin: 0;
  ${W.h3};
  color: ${({theme:e})=>e.colors.text900};
`,Sw=u.p`
  margin: 22px 0 30px;
  ${W.body1};
  color: ${({theme:e})=>e.colors.text700};
`,sl=u.div`
  opacity: ${({$inView:e})=>e?1:0};
  transform: ${({$inView:e})=>e?"translateY(0)":"translateY(28px)"};
  transition:
    opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: ${({$delay:e=0})=>e}s;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`,$w=u.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(75, 0, 130, 0.07);
  box-shadow: 0 10px 30px rgba(75, 0, 130, 0.06);
  backdrop-filter: blur(6px);

  & + & {
    margin-top: 14px;
  }
`,Cw=u.div`
  flex: 0 0 auto;
  width: 62px;
  height: 62px;
  border-radius: 20px;
  display: grid;
  place-items: center;
  font-size: 2.6rem;
  background: linear-gradient(140deg, ${({$from:e})=>e}, ${({$to:e})=>e});
  box-shadow: 0 8px 20px rgba(75, 0, 130, 0.14);
`,Ew=u.div`
  min-width: 0;

  strong {
    display: block;
    ${W.body1};
    font-weight: 700;
    color: ${({theme:e})=>e.colors.text900};
  }

  span {
    display: block;
    margin-top: 5px;
    ${W.body2};
    color: ${({theme:e})=>e.colors.text700};
  }
`,Pw=u.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 24px 12px;
  border-radius: 24px;
  background: linear-gradient(135deg, ${({theme:e})=>e.colors.primary600}, ${({theme:e})=>e.colors.primary400});
  color: ${({theme:e})=>e.colors.white};
  box-shadow: 0 16px 36px rgba(75, 0, 130, 0.24);
`,cu=u.div`
  text-align: center;

  & + & {
    border-left: 1px solid rgba(255, 255, 255, 0.22);
  }

  strong {
    display: block;
    font-size: 2.4rem;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  span {
    display: block;
    margin-top: 6px;
    ${W.caption};
    color: rgba(255, 255, 255, 0.82);
  }
`,Iw=u.section`
  padding: 20px 0 8px;
  text-align: center;
`,Tw=u.h2`
  margin: 0;
  ${W.title};
`,Rw=u.p`
  margin: 10px 0 26px;
  ${W.body2};
  color: ${({theme:e})=>e.colors.text700};
`,zw=u.div`
  padding: 26px 22px 22px;
  border-radius: 28px;
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid rgba(75, 0, 130, 0.08);
  box-shadow: 0 20px 50px rgba(75, 0, 130, 0.1);
`,Mw=u.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Th=u.input`
  width: 100%;
  border: 1px solid ${({theme:e})=>e.colors.primary200};
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.text900};
  ${W.body2};
  padding: 15px 22px;
  transition: border-color 0.2s ease, transform 0.2s ease;

  &::placeholder {
    color: ${({theme:e})=>e.colors.text700};
  }

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary400};
    transform: translateY(-1px);
  }
`,Aw=u.button`
  width: 100%;
  margin-top: 4px;
  border: none;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary300};
  color: ${({theme:e})=>e.colors.white};
  padding: 16px 20px;
  ${W.buttonMd};
  cursor: pointer;
  transition: transform 0.15s ease, opacity 0.2s ease;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,_w=u.div`
  margin: 22px 0 18px;
  display: flex;
  align-items: center;
  gap: 14px;
  color: ${({theme:e})=>e.colors.text700};
  ${W.caption};

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: ${({theme:e})=>e.colors.primary200};
  }
`,Nw=u.div`
  display: flex;
  justify-content: center;
  gap: 22px;
`,b3=`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  padding: 0;
  cursor: pointer;
  border: none;
  background: transparent;
  transition: transform 0.16s ease;
`,uu=u.a`
  ${b3}
  &:hover { transform: translateY(-3px); }
`,du=u.button`
  ${b3}
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`,ii=u.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
`,Dw=u.div`
  margin: 24px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  ${W.body2};
  color: ${({theme:e})=>e.colors.text900};
`,Ow=u.button`
  border: none;
  padding: 0;
  background: none;
  font: inherit;
  color: ${({theme:e})=>e.colors.primary300};
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: ${({theme:e})=>e.colors.primary400};
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`,Bw=u.button`
  display: block;
  margin: 20px auto 0;
  padding: 12px 24px;
  border: 1px solid ${({theme:e})=>e.colors.primary200};
  border-radius: ${({theme:e})=>e.radii.pill};
  background: transparent;
  color: ${({theme:e})=>e.colors.primary600};
  ${W.buttonMd};
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease;

  &:hover {
    background: ${({theme:e})=>e.colors.primary50};
    transform: translateY(-1px);
  }
`,Fw=[{icon:"🗺️",from:"#c9b8e0",to:"#a88bca",title:"지도로 찾는 명상 공간",desc:"내 주변 명상 공간과 프로그램을 지도에서 한눈에 둘러보세요."},{icon:"🧘",from:"#f5d8d0",to:"#c9a090",title:"검증된 전문가 클래스",desc:"믿을 수 있는 전문가의 클래스와 리트릿을 직접 살펴보고 예약하세요."},{icon:"📖",from:"#e6dcf0",to:"#7a5aab",title:"나만의 명상 기록",desc:"마음에 드는 공간을 찜하고, 나의 명상 여정을 차곡차곡 기록하세요."}],Hw=()=>{const e=ft(),t=ut(S=>S.authReady),n=ut(S=>!!S.accessToken),[r,i]=m.useState(""),[s,l]=m.useState(""),[a,c]=m.useState(!1),d=Se()??"",p=su(),f=su(),h=su();if(t&&n)return o.jsx(Xp,{to:"/",replace:!0});const g=()=>{lw(),e("/")},w=()=>e("/profile?start=signup"),v=async()=>{if(!Se()){Ke.error("지금은 이용할 수 없어요. 잠시 후 다시 시도해 주세요.");return}const S=r.trim();if(!S||!s){Ke.error("이메일과 비밀번호를 입력해 주세요.");return}c(!0);try{const x=await he("/auth/login",{method:"POST",body:JSON.stringify({email:S,password:s})});if(!x.ok){let L="";try{L=(await x.json()).error??""}catch{}Ke.error(L==="INVALID_CREDENTIALS"?"이메일 또는 비밀번호를 확인해 주세요.":"로그인에 실패했습니다.");return}await ut.getState().setSession(),await mr.getState().pullFromServer(),l(""),e("/")}catch{Ke.error("잠시 후 다시 시도해 주세요.")}finally{c(!1)}};return o.jsxs(fw,{children:[o.jsx(lu,{$size:220,$top:"-40px",$left:"-60px",$delay:"0s",$color:"rgba(168,139,202,0.5)"}),o.jsx(lu,{$size:180,$top:"30dvh",$left:"70%",$delay:"3s",$color:"rgba(245,216,208,0.7)"}),o.jsx(lu,{$size:200,$top:"120dvh",$left:"-40px",$delay:"6s",$color:"rgba(201,160,144,0.4)"}),o.jsxs(hw,{children:[o.jsxs(gw,{children:[o.jsxs(mw,{children:[o.jsx(xw,{}),o.jsx(Lw,{children:o.jsx("img",{src:Xo,alt:"명상 웰니스 지도 로고"})})]}),o.jsx(yw,{children:"MEDITATION WELLNESS MAP"}),o.jsx(vw,{children:"명상 웰니스 지도"}),o.jsx(ww,{children:"내 마음이 쉬어갈 공간을 지도 위에서 찾아보세요. 가까운 명상, 지금 여기에서."}),o.jsxs(bw,{children:[o.jsx("span",{children:"아래로 밀어보세요"}),o.jsx("span",{children:"⌄"})]})]}),o.jsxs(au,{ref:p.ref,children:[o.jsxs(sl,{$inView:p.inView,children:[o.jsx(kw,{children:"WHY 명상 웰니스 지도"}),o.jsx(jw,{children:"바쁜 하루 속, 쉼을 찾는 가장 쉬운 방법"}),o.jsx(Sw,{children:"흩어져 있던 명상 공간과 전문가 프로그램을 한곳에 모았어요."})]}),Fw.map((S,x)=>o.jsx(sl,{$inView:p.inView,$delay:.12+x*.12,children:o.jsxs($w,{children:[o.jsx(Cw,{$from:S.from,$to:S.to,children:S.icon}),o.jsxs(Ew,{children:[o.jsx("strong",{children:S.title}),o.jsx("span",{children:S.desc})]})]})},S.title))]}),o.jsx(au,{ref:f.ref,style:{paddingTop:0},children:o.jsx(sl,{$inView:f.inView,children:o.jsxs(Pw,{children:[o.jsxs(cu,{children:[o.jsx("strong",{children:"120+"}),o.jsx("span",{children:"명상 공간"})]}),o.jsxs(cu,{children:[o.jsx("strong",{children:"40+"}),o.jsx("span",{children:"전문가 클래스"})]}),o.jsxs(cu,{children:[o.jsx("strong",{children:"17"}),o.jsx("span",{children:"지역 커버"})]})]})})}),o.jsx(au,{ref:h.ref,style:{paddingBottom:12},children:o.jsx(sl,{$inView:h.inView,children:o.jsxs(Iw,{children:[o.jsx(Tw,{children:"지금 바로 시작해보세요"}),o.jsx(Rw,{children:"로그인하고 나에게 딱 맞는 명상 공간을 찾아보세요."}),o.jsxs(zw,{children:[o.jsxs(Mw,{onSubmit:S=>{S.preventDefault(),v()},children:[o.jsx(Th,{type:"email",placeholder:"이메일","aria-label":"이메일",autoComplete:"email",value:r,onChange:S=>i(S.target.value)}),o.jsx(Th,{type:"password",placeholder:"비밀번호","aria-label":"비밀번호",autoComplete:"current-password",value:s,onChange:S=>l(S.target.value)}),o.jsx(Aw,{type:"submit",disabled:a,children:a?"처리 중…":"로그인하기"})]}),o.jsx(_w,{children:"또는"}),o.jsxs(Nw,{children:[d?o.jsx(uu,{href:`${d}/oauth2/authorization/kakao`,"aria-label":"카카오로 로그인",children:o.jsx(ii,{src:Ca,alt:""})}):o.jsx(du,{type:"button",disabled:!0,"aria-label":"카카오로 로그인 (API 주소 필요)",children:o.jsx(ii,{src:Ca,alt:""})}),d?o.jsx(uu,{href:`${d}/oauth2/authorization/naver`,"aria-label":"네이버로 로그인",children:o.jsx(ii,{src:Ea,alt:""})}):o.jsx(du,{type:"button",disabled:!0,"aria-label":"네이버로 로그인 (API 주소 필요)",children:o.jsx(ii,{src:Ea,alt:""})}),d?o.jsx(uu,{href:`${d}/oauth2/authorization/google`,"aria-label":"구글로 로그인",children:o.jsx(ii,{src:Pa,alt:""})}):o.jsx(du,{type:"button",disabled:!0,"aria-label":"구글로 로그인 (API 주소 필요)",children:o.jsx(ii,{src:Pa,alt:""})})]}),o.jsxs(Dw,{children:[o.jsx("span",{children:"아직 회원이 아니신가요?"}),o.jsx(Ow,{type:"button",onClick:w,children:"회원가입"})]})]}),o.jsx(Bw,{type:"button",onClick:g,children:"먼저 둘러볼래요"})]})})})]})]})},Uw=u.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 16px 24px;
  color: ${({theme:e})=>e.colors.text900};
`,Vw=u.header`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`,Ww=u.button`
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
`,Kw=u.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: ${({theme:e})=>e.colors.text900};
`,Yw=u.section`
  position: relative;
  padding: 12px;
  border-radius: ${({theme:e})=>e.radii.lg};
  margin-bottom: 20px;
  min-height: 280px;
  overflow: visible;

  svg {
    max-height: 360px;
  }
`,Gw=u.div`
  position: absolute;
  inset: 0;
  z-index: 5;
  cursor: pointer;
  border-radius: ${({theme:e})=>e.radii.lg};
`,Zw=we`
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,qw=u.div`
  position: absolute;
  left: ${({$x:e})=>e}px;
  top: ${({$y:e})=>e}px;
  transform: translate(-50%, -100%);
  z-index: 10;
  filter: drop-shadow(0 6px 20px rgba(75, 0, 130, 0.12));
  animation: ${Zw} 0.2s ease;
`,Qw=u.div`
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
`,Xw=u.button`
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
`,Jw=u.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.primary700};
  margin: 0 0 4px;
  padding-right: 28px;
`,eb=u.p`
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.text700};
  margin: 0 0 12px;
  line-height: 1.45;
`,tb=u.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,nb=u.button`
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
`,rb=u.section`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`,ib=u.button`
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
`,ob=[{label:"명상지",kind:"place"},{label:"명상센터",kind:"center"},{label:"명상 전문가",kind:"expert"}],sb=()=>{const e=ft(),t=m.useRef(null),n=en(x=>x.regions),r=m.useMemo(()=>[{id:"all",name:"전체"},...n.map(x=>({id:x.id,name:x.name}))],[n]),i=m.useRef(null),s=m.useRef(null),{selectedRegionId:l,setRegion:a,setCategory:c}=t0(),[d,p]=m.useState(null),[f,h]=m.useState({x:0,y:0});m.useEffect(()=>{const x=L=>{var j,z,R;if(!d)return;const y=L.target,$=(j=i.current)==null?void 0:j.contains(y),I=(z=t.current)==null?void 0:z.contains(y),k=(R=s.current)==null?void 0:R.contains(y);!$&&!I&&!k&&p(null)};return document.addEventListener("click",x),()=>document.removeEventListener("click",x)},[d]);const g=m.useCallback(x=>{const L=t.current;if(!L)return null;if(x==="all"){const A=L.getBoundingClientRect();return{x:A.width/2,y:A.height/2-40}}const y=L.querySelector(`path.land[id="${x}"]`);if(!y)return null;const $=y.closest("svg");if(!$)return null;const I=y.getBBox();let k=I.x+I.width/2,j=I.y+I.height/2;x==="KR-42"&&(j=I.y+I.height*.65);const z=$.createSVGPoint();z.x=k,z.y=j;const R=$.getScreenCTM();if(!R)return null;const T=z.matrixTransform(R),P=L.getBoundingClientRect(),E=x==="KR-42"?5:x==="KR-11"?0:x==="KR-41"?-15:15;return{x:T.x-P.left,y:T.y-P.top-E}},[]);m.useEffect(()=>{const x=l??"all";p(x);const L=t.current;L?requestAnimationFrame(()=>{const y=g(x);h(y??{x:L.getBoundingClientRect().width/2,y:L.getBoundingClientRect().height/2-40})}):h({x:200,y:120})},[l,g]);const w=x=>{p(x),requestAnimationFrame(()=>{const L=g(x);h(L??{x:200,y:120})})},v=x=>{if(d){if(a(d),x==="expert"){e(`/meditation/region/${d}/experts`);return}c(x==="place"?"템플스테이":"명상센터"),e(`/meditation/region/${d}`)}},S=d?Wn(d):null;return o.jsxs(Uw,{children:[o.jsxs(Vw,{children:[o.jsx(Ww,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(Kw,{children:"지역 선택"})]}),o.jsxs(Yw,{ref:t,children:[o.jsx(As,{activeRegionId:d??void 0,onSelectRegion:w}),S&&o.jsxs(o.Fragment,{children:[o.jsx(Gw,{onClick:()=>p(null),"aria-label":"모달 닫기"}),o.jsx(qw,{ref:i,$x:f.x,$y:f.y,children:o.jsxs(Qw,{children:[o.jsx(Xw,{type:"button",onClick:()=>p(null),"aria-label":"닫기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"18",height:"18",children:o.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})}),o.jsx(Jw,{children:S.name}),o.jsx(eb,{children:"찾으시는 유형을 선택해 주세요"}),o.jsx(tb,{children:ob.map(({label:x,kind:L})=>o.jsx(nb,{type:"button",onClick:()=>v(L),children:x},L))})]})})]})]}),o.jsx(rb,{ref:s,children:r.map(x=>o.jsx(ib,{type:"button",$active:d===x.id,onClick:()=>{p(x.id),requestAnimationFrame(()=>{const L=g(x.id);h(L??{x:200,y:120})})},children:x.name},x.id))})]})};function lb(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const ab=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,cb=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,ub={};function Rh(e,t){return(ub.jsx?cb:ab).test(e)}const db=/[ \t\n\f\r]/g;function pb(e){return typeof e=="object"?e.type==="text"?zh(e.value):!1:zh(e)}function zh(e){return e.replace(db,"")===""}class _s{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}_s.prototype.normal={};_s.prototype.property={};_s.prototype.space=void 0;function k3(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new _s(n,r,t)}function E1(e){return e.toLowerCase()}class At{constructor(t,n){this.attribute=n,this.property=t}}At.prototype.attribute="";At.prototype.booleanish=!1;At.prototype.boolean=!1;At.prototype.commaOrSpaceSeparated=!1;At.prototype.commaSeparated=!1;At.prototype.defined=!1;At.prototype.mustUseProperty=!1;At.prototype.number=!1;At.prototype.overloadedBoolean=!1;At.prototype.property="";At.prototype.spaceSeparated=!1;At.prototype.space=void 0;let fb=0;const se=Xr(),Qe=Xr(),P1=Xr(),Y=Xr(),Pe=Xr(),zi=Xr(),Nt=Xr();function Xr(){return 2**++fb}const I1=Object.freeze(Object.defineProperty({__proto__:null,boolean:se,booleanish:Qe,commaOrSpaceSeparated:Nt,commaSeparated:zi,number:Y,overloadedBoolean:P1,spaceSeparated:Pe},Symbol.toStringTag,{value:"Module"})),pu=Object.keys(I1);class n0 extends At{constructor(t,n,r,i){let s=-1;if(super(t,n),Mh(this,"space",i),typeof r=="number")for(;++s<pu.length;){const l=pu[s];Mh(this,pu[s],(r&I1[l])===I1[l])}}}n0.prototype.defined=!0;function Mh(e,t,n){n&&(e[t]=n)}function io(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const s=new n0(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(s.mustUseProperty=!0),t[r]=s,n[E1(r)]=r,n[E1(s.attribute)]=r}return new _s(t,n,e.space)}const j3=io({properties:{ariaActiveDescendant:null,ariaAtomic:Qe,ariaAutoComplete:null,ariaBusy:Qe,ariaChecked:Qe,ariaColCount:Y,ariaColIndex:Y,ariaColSpan:Y,ariaControls:Pe,ariaCurrent:null,ariaDescribedBy:Pe,ariaDetails:null,ariaDisabled:Qe,ariaDropEffect:Pe,ariaErrorMessage:null,ariaExpanded:Qe,ariaFlowTo:Pe,ariaGrabbed:Qe,ariaHasPopup:null,ariaHidden:Qe,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Pe,ariaLevel:Y,ariaLive:null,ariaModal:Qe,ariaMultiLine:Qe,ariaMultiSelectable:Qe,ariaOrientation:null,ariaOwns:Pe,ariaPlaceholder:null,ariaPosInSet:Y,ariaPressed:Qe,ariaReadOnly:Qe,ariaRelevant:null,ariaRequired:Qe,ariaRoleDescription:Pe,ariaRowCount:Y,ariaRowIndex:Y,ariaRowSpan:Y,ariaSelected:Qe,ariaSetSize:Y,ariaSort:null,ariaValueMax:Y,ariaValueMin:Y,ariaValueNow:Y,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function S3(e,t){return t in e?e[t]:t}function $3(e,t){return S3(e,t.toLowerCase())}const hb=io({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:zi,acceptCharset:Pe,accessKey:Pe,action:null,allow:null,allowFullScreen:se,allowPaymentRequest:se,allowUserMedia:se,alt:null,as:null,async:se,autoCapitalize:null,autoComplete:Pe,autoFocus:se,autoPlay:se,blocking:Pe,capture:null,charSet:null,checked:se,cite:null,className:Pe,cols:Y,colSpan:null,content:null,contentEditable:Qe,controls:se,controlsList:Pe,coords:Y|zi,crossOrigin:null,data:null,dateTime:null,decoding:null,default:se,defer:se,dir:null,dirName:null,disabled:se,download:P1,draggable:Qe,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:se,formTarget:null,headers:Pe,height:Y,hidden:P1,high:Y,href:null,hrefLang:null,htmlFor:Pe,httpEquiv:Pe,id:null,imageSizes:null,imageSrcSet:null,inert:se,inputMode:null,integrity:null,is:null,isMap:se,itemId:null,itemProp:Pe,itemRef:Pe,itemScope:se,itemType:Pe,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:se,low:Y,manifest:null,max:null,maxLength:Y,media:null,method:null,min:null,minLength:Y,multiple:se,muted:se,name:null,nonce:null,noModule:se,noValidate:se,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:se,optimum:Y,pattern:null,ping:Pe,placeholder:null,playsInline:se,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:se,referrerPolicy:null,rel:Pe,required:se,reversed:se,rows:Y,rowSpan:Y,sandbox:Pe,scope:null,scoped:se,seamless:se,selected:se,shadowRootClonable:se,shadowRootDelegatesFocus:se,shadowRootMode:null,shape:null,size:Y,sizes:null,slot:null,span:Y,spellCheck:Qe,src:null,srcDoc:null,srcLang:null,srcSet:null,start:Y,step:null,style:null,tabIndex:Y,target:null,title:null,translate:null,type:null,typeMustMatch:se,useMap:null,value:Qe,width:Y,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Pe,axis:null,background:null,bgColor:null,border:Y,borderColor:null,bottomMargin:Y,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:se,declare:se,event:null,face:null,frame:null,frameBorder:null,hSpace:Y,leftMargin:Y,link:null,longDesc:null,lowSrc:null,marginHeight:Y,marginWidth:Y,noResize:se,noHref:se,noShade:se,noWrap:se,object:null,profile:null,prompt:null,rev:null,rightMargin:Y,rules:null,scheme:null,scrolling:Qe,standby:null,summary:null,text:null,topMargin:Y,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Y,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:se,disableRemotePlayback:se,prefix:null,property:null,results:Y,security:null,unselectable:null},space:"html",transform:$3}),gb=io({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Nt,accentHeight:Y,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:Y,amplitude:Y,arabicForm:null,ascent:Y,attributeName:null,attributeType:null,azimuth:Y,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:Y,by:null,calcMode:null,capHeight:Y,className:Pe,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:Y,diffuseConstant:Y,direction:null,display:null,dur:null,divisor:Y,dominantBaseline:null,download:se,dx:null,dy:null,edgeMode:null,editable:null,elevation:Y,enableBackground:null,end:null,event:null,exponent:Y,externalResourcesRequired:null,fill:null,fillOpacity:Y,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:zi,g2:zi,glyphName:zi,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:Y,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:Y,horizOriginX:Y,horizOriginY:Y,id:null,ideographic:Y,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:Y,k:Y,k1:Y,k2:Y,k3:Y,k4:Y,kernelMatrix:Nt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:Y,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:Y,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:Y,overlineThickness:Y,paintOrder:null,panose1:null,path:null,pathLength:Y,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Pe,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:Y,pointsAtY:Y,pointsAtZ:Y,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Nt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Nt,rev:Nt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Nt,requiredFeatures:Nt,requiredFonts:Nt,requiredFormats:Nt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:Y,specularExponent:Y,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:Y,strikethroughThickness:Y,string:null,stroke:null,strokeDashArray:Nt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:Y,strokeOpacity:Y,strokeWidth:null,style:null,surfaceScale:Y,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Nt,tabIndex:Y,tableValues:null,target:null,targetX:Y,targetY:Y,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Nt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:Y,underlineThickness:Y,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:Y,values:null,vAlphabetic:Y,vMathematical:Y,vectorEffect:null,vHanging:Y,vIdeographic:Y,version:null,vertAdvY:Y,vertOriginX:Y,vertOriginY:Y,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:Y,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:S3}),C3=io({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),E3=io({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:$3}),P3=io({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),mb={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},xb=/[A-Z]/g,Ah=/-[a-z]/g,Lb=/^data[-\w.:]+$/i;function yb(e,t){const n=E1(t);let r=t,i=At;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Lb.test(t)){if(t.charAt(4)==="-"){const s=t.slice(5).replace(Ah,wb);r="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=t.slice(4);if(!Ah.test(s)){let l=s.replace(xb,vb);l.charAt(0)!=="-"&&(l="-"+l),t="data"+l}}i=n0}return new i(r,t)}function vb(e){return"-"+e.toLowerCase()}function wb(e){return e.charAt(1).toUpperCase()}const bb=k3([j3,hb,C3,E3,P3],"html"),r0=k3([j3,gb,C3,E3,P3],"svg");function kb(e){return e.join(" ").trim()}var i0={},_h=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,jb=/\n/g,Sb=/^\s*/,$b=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Cb=/^:\s*/,Eb=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Pb=/^[;\s]*/,Ib=/^\s+|\s+$/g,Tb=`
`,Nh="/",Dh="*",Tr="",Rb="comment",zb="declaration";function Mb(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(w){var v=w.match(jb);v&&(n+=v.length);var S=w.lastIndexOf(Tb);r=~S?w.length-S:r+w.length}function s(){var w={line:n,column:r};return function(v){return v.position=new l(w),d(),v}}function l(w){this.start=w,this.end={line:n,column:r},this.source=t.source}l.prototype.content=e;function a(w){var v=new Error(t.source+":"+n+":"+r+": "+w);if(v.reason=w,v.filename=t.source,v.line=n,v.column=r,v.source=e,!t.silent)throw v}function c(w){var v=w.exec(e);if(v){var S=v[0];return i(S),e=e.slice(S.length),v}}function d(){c(Sb)}function p(w){var v;for(w=w||[];v=f();)v!==!1&&w.push(v);return w}function f(){var w=s();if(!(Nh!=e.charAt(0)||Dh!=e.charAt(1))){for(var v=2;Tr!=e.charAt(v)&&(Dh!=e.charAt(v)||Nh!=e.charAt(v+1));)++v;if(v+=2,Tr===e.charAt(v-1))return a("End of comment missing");var S=e.slice(2,v-2);return r+=2,i(S),e=e.slice(v),r+=2,w({type:Rb,comment:S})}}function h(){var w=s(),v=c($b);if(v){if(f(),!c(Cb))return a("property missing ':'");var S=c(Eb),x=w({type:zb,property:Oh(v[0].replace(_h,Tr)),value:S?Oh(S[0].replace(_h,Tr)):Tr});return c(Pb),x}}function g(){var w=[];p(w);for(var v;v=h();)v!==!1&&(w.push(v),p(w));return w}return d(),g()}function Oh(e){return e?e.replace(Ib,Tr):Tr}var Ab=Mb,_b=Wl&&Wl.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(i0,"__esModule",{value:!0});i0.default=Db;const Nb=_b(Ab);function Db(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,Nb.default)(e),i=typeof t=="function";return r.forEach(s=>{if(s.type!=="declaration")return;const{property:l,value:a}=s;i?t(l,a,s):a&&(n=n||{},n[l]=a)}),n}var ac={};Object.defineProperty(ac,"__esModule",{value:!0});ac.camelCase=void 0;var Ob=/^--[a-zA-Z0-9_-]+$/,Bb=/-([a-z])/g,Fb=/^[^-]+$/,Hb=/^-(webkit|moz|ms|o|khtml)-/,Ub=/^-(ms)-/,Vb=function(e){return!e||Fb.test(e)||Ob.test(e)},Wb=function(e,t){return t.toUpperCase()},Bh=function(e,t){return"".concat(t,"-")},Kb=function(e,t){return t===void 0&&(t={}),Vb(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(Ub,Bh):e=e.replace(Hb,Bh),e.replace(Bb,Wb))};ac.camelCase=Kb;var Yb=Wl&&Wl.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},Gb=Yb(i0),Zb=ac;function T1(e,t){var n={};return!e||typeof e!="string"||(0,Gb.default)(e,function(r,i){r&&i&&(n[(0,Zb.camelCase)(r,t)]=i)}),n}T1.default=T1;var qb=T1;const Qb=Ma(qb),I3=T3("end"),o0=T3("start");function T3(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Xb(e){const t=o0(e),n=I3(e);if(t&&n)return{start:t,end:n}}function es(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Fh(e.position):"start"in e||"end"in e?Fh(e):"line"in e||"column"in e?R1(e):""}function R1(e){return Hh(e&&e.line)+":"+Hh(e&&e.column)}function Fh(e){return R1(e&&e.start)+"-"+R1(e&&e.end)}function Hh(e){return e&&typeof e=="number"?e:1}class wt extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",s={},l=!1;if(n&&("line"in n&&"column"in n?s={place:n}:"start"in n&&"end"in n?s={place:n}:"type"in n?s={ancestors:[n],place:n.position}:s={...n}),typeof t=="string"?i=t:!s.cause&&t&&(l=!0,i=t.message,s.cause=t),!s.ruleId&&!s.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?s.ruleId=r:(s.source=r.slice(0,c),s.ruleId=r.slice(c+1))}if(!s.place&&s.ancestors&&s.ancestors){const c=s.ancestors[s.ancestors.length-1];c&&(s.place=c.position)}const a=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=a?a.line:void 0,this.name=es(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=l&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}wt.prototype.file="";wt.prototype.name="";wt.prototype.reason="";wt.prototype.message="";wt.prototype.stack="";wt.prototype.column=void 0;wt.prototype.line=void 0;wt.prototype.ancestors=void 0;wt.prototype.cause=void 0;wt.prototype.fatal=void 0;wt.prototype.place=void 0;wt.prototype.ruleId=void 0;wt.prototype.source=void 0;const s0={}.hasOwnProperty,Jb=new Map,ek=/[A-Z]/g,tk=new Set(["table","tbody","thead","tfoot","tr"]),nk=new Set(["td","th"]),R3="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function rk(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=dk(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=uk(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?r0:bb,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},s=z3(i,e,void 0);return s&&typeof s!="string"?s:i.create(e,i.Fragment,{children:s||void 0},void 0)}function z3(e,t,n){if(t.type==="element")return ik(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return ok(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return lk(e,t,n);if(t.type==="mdxjsEsm")return sk(e,t);if(t.type==="root")return ak(e,t,n);if(t.type==="text")return ck(e,t)}function ik(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=r0,e.schema=i),e.ancestors.push(t);const s=A3(e,t.tagName,!1),l=pk(e,t);let a=a0(e,t);return tk.has(t.tagName)&&(a=a.filter(function(c){return typeof c=="string"?!pb(c):!0})),M3(e,l,s,t),l0(l,a),e.ancestors.pop(),e.schema=r,e.create(t,s,l,n)}function ok(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}$s(e,t.position)}function sk(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);$s(e,t.position)}function lk(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=r0,e.schema=i),e.ancestors.push(t);const s=t.name===null?e.Fragment:A3(e,t.name,!0),l=fk(e,t),a=a0(e,t);return M3(e,l,s,t),l0(l,a),e.ancestors.pop(),e.schema=r,e.create(t,s,l,n)}function ak(e,t,n){const r={};return l0(r,a0(e,t)),e.create(t,e.Fragment,r,n)}function ck(e,t){return t.value}function M3(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function l0(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function uk(e,t,n){return r;function r(i,s,l,a){const d=Array.isArray(l.children)?n:t;return a?d(s,l,a):d(s,l)}}function dk(e,t){return n;function n(r,i,s,l){const a=Array.isArray(s.children),c=o0(r);return t(i,s,l,a,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function pk(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&s0.call(t.properties,i)){const s=hk(e,i,t.properties[i]);if(s){const[l,a]=s;e.tableCellAlignToStyle&&l==="align"&&typeof a=="string"&&nk.has(t.tagName)?r=a:n[l]=a}}if(r){const s=n.style||(n.style={});s[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function fk(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const s=r.data.estree.body[0];s.type;const l=s.expression;l.type;const a=l.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else $s(e,t.position);else{const i=r.name;let s;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const a=r.value.data.estree.body[0];a.type,s=e.evaluater.evaluateExpression(a.expression)}else $s(e,t.position);else s=r.value===null?!0:r.value;n[i]=s}return n}function a0(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:Jb;for(;++r<t.children.length;){const s=t.children[r];let l;if(e.passKeys){const c=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(c){const d=i.get(c)||0;l=c+"-"+d,i.set(c,d+1)}}const a=z3(e,s,l);a!==void 0&&n.push(a)}return n}function hk(e,t,n){const r=yb(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?lb(n):kb(n)),r.property==="style"){let i=typeof n=="object"?n:gk(e,String(n));return e.stylePropertyNameCase==="css"&&(i=mk(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?mb[r.property]||r.property:r.attribute,n]}}function gk(e,t){try{return Qb(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new wt("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=R3+"#cannot-parse-style-attribute",i}}function A3(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let s=-1,l;for(;++s<i.length;){const a=Rh(i[s])?{type:"Identifier",name:i[s]}:{type:"Literal",value:i[s]};l=l?{type:"MemberExpression",object:l,property:a,computed:!!(s&&a.type==="Literal"),optional:!1}:a}r=l}else r=Rh(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return s0.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);$s(e)}function $s(e,t){const n=new wt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=R3+"#cannot-handle-mdx-estrees-without-createevaluater",n}function mk(e){const t={};let n;for(n in e)s0.call(e,n)&&(t[xk(n)]=e[n]);return t}function xk(e){let t=e.replace(ek,Lk);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function Lk(e){return"-"+e.toLowerCase()}const fu={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},yk={};function vk(e,t){const n=yk,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return _3(e,r,i)}function _3(e,t,n){if(wk(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Uh(e.children,t,n)}return Array.isArray(e)?Uh(e,t,n):""}function Uh(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=_3(e[i],t,n);return r.join("")}function wk(e){return!!(e&&typeof e=="object")}const Vh=document.createElement("i");function c0(e){const t="&"+e+";";Vh.innerHTML=t;const n=Vh.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function In(e,t,n,r){const i=e.length;let s=0,l;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)l=Array.from(r),l.unshift(t,n),e.splice(...l);else for(n&&e.splice(t,n);s<r.length;)l=r.slice(s,s+1e4),l.unshift(t,0),e.splice(...l),s+=1e4,t+=1e4}function Xt(e,t){return e.length>0?(In(e,e.length,0,t),e):t}const Wh={}.hasOwnProperty;function bk(e){const t={};let n=-1;for(;++n<e.length;)kk(t,e[n]);return t}function kk(e,t){let n;for(n in t){const i=(Wh.call(e,n)?e[n]:void 0)||(e[n]={}),s=t[n];let l;if(s)for(l in s){Wh.call(i,l)||(i[l]=[]);const a=s[l];jk(i[l],Array.isArray(a)?a:a?[a]:[])}}}function jk(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);In(e,0,0,r)}function N3(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Mi(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const $n=br(/[A-Za-z]/),Ft=br(/[\dA-Za-z]/),Sk=br(/[#-'*+\--9=?A-Z^-~]/);function z1(e){return e!==null&&(e<32||e===127)}const M1=br(/\d/),$k=br(/[\dA-Fa-f]/),Ck=br(/[!-/:-@[-`{-~]/);function ie(e){return e!==null&&e<-2}function Mt(e){return e!==null&&(e<0||e===32)}function ve(e){return e===-2||e===-1||e===32}const Ek=br(new RegExp("\\p{P}|\\p{S}","u")),Pk=br(/\s/);function br(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function oo(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const s=e.charCodeAt(n);let l="";if(s===37&&Ft(e.charCodeAt(n+1))&&Ft(e.charCodeAt(n+2)))i=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(l=String.fromCharCode(s));else if(s>55295&&s<57344){const a=e.charCodeAt(n+1);s<56320&&a>56319&&a<57344?(l=String.fromCharCode(s,a),i=1):l="�"}else l=String.fromCharCode(s);l&&(t.push(e.slice(r,n),encodeURIComponent(l)),r=n+i+1,l=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function Te(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let s=0;return l;function l(c){return ve(c)?(e.enter(n),a(c)):t(c)}function a(c){return ve(c)&&s++<i?(e.consume(c),a):(e.exit(n),t(c))}}const Ik={tokenize:Tk};function Tk(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),Te(e,t,"linePrefix")}function i(a){return e.enter("paragraph"),s(a)}function s(a){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,l(a)}function l(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return ie(a)?(e.consume(a),e.exit("chunkText"),s):(e.consume(a),l)}}const Rk={tokenize:zk},Kh={tokenize:Mk};function zk(e){const t=this,n=[];let r=0,i,s,l;return a;function a(y){if(r<n.length){const $=n[r];return t.containerState=$[1],e.attempt($[0].continuation,c,d)(y)}return d(y)}function c(y){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&L();const $=t.events.length;let I=$,k;for(;I--;)if(t.events[I][0]==="exit"&&t.events[I][1].type==="chunkFlow"){k=t.events[I][1].end;break}x(r);let j=$;for(;j<t.events.length;)t.events[j][1].end={...k},j++;return In(t.events,I+1,0,t.events.slice($)),t.events.length=j,d(y)}return a(y)}function d(y){if(r===n.length){if(!i)return h(y);if(i.currentConstruct&&i.currentConstruct.concrete)return w(y);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Kh,p,f)(y)}function p(y){return i&&L(),x(r),h(y)}function f(y){return t.parser.lazy[t.now().line]=r!==n.length,l=t.now().offset,w(y)}function h(y){return t.containerState={},e.attempt(Kh,g,w)(y)}function g(y){return r++,n.push([t.currentConstruct,t.containerState]),h(y)}function w(y){if(y===null){i&&L(),x(0),e.consume(y);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:s}),v(y)}function v(y){if(y===null){S(e.exit("chunkFlow"),!0),x(0),e.consume(y);return}return ie(y)?(e.consume(y),S(e.exit("chunkFlow")),r=0,t.interrupt=void 0,a):(e.consume(y),v)}function S(y,$){const I=t.sliceStream(y);if($&&I.push(null),y.previous=s,s&&(s.next=y),s=y,i.defineSkip(y.start),i.write(I),t.parser.lazy[y.start.line]){let k=i.events.length;for(;k--;)if(i.events[k][1].start.offset<l&&(!i.events[k][1].end||i.events[k][1].end.offset>l))return;const j=t.events.length;let z=j,R,T;for(;z--;)if(t.events[z][0]==="exit"&&t.events[z][1].type==="chunkFlow"){if(R){T=t.events[z][1].end;break}R=!0}for(x(r),k=j;k<t.events.length;)t.events[k][1].end={...T},k++;In(t.events,z+1,0,t.events.slice(j)),t.events.length=k}}function x(y){let $=n.length;for(;$-- >y;){const I=n[$];t.containerState=I[1],I[0].exit.call(t,e)}n.length=y}function L(){i.write([null]),s=void 0,i=void 0,t.containerState._closeFlow=void 0}}function Mk(e,t,n){return Te(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Yh(e){if(e===null||Mt(e)||Pk(e))return 1;if(Ek(e))return 2}function u0(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const s=e[i].resolveAll;s&&!r.includes(s)&&(t=s(t,n),r.push(s))}return t}const A1={name:"attention",resolveAll:Ak,tokenize:_k};function Ak(e,t){let n=-1,r,i,s,l,a,c,d,p;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const f={...e[r][1].end},h={...e[n][1].start};Gh(f,-c),Gh(h,c),l={type:c>1?"strongSequence":"emphasisSequence",start:f,end:{...e[r][1].end}},a={type:c>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:h},s={type:c>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?"strong":"emphasis",start:{...l.start},end:{...a.end}},e[r][1].end={...l.start},e[n][1].start={...a.end},d=[],e[r][1].end.offset-e[r][1].start.offset&&(d=Xt(d,[["enter",e[r][1],t],["exit",e[r][1],t]])),d=Xt(d,[["enter",i,t],["enter",l,t],["exit",l,t],["enter",s,t]]),d=Xt(d,u0(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),d=Xt(d,[["exit",s,t],["enter",a,t],["exit",a,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(p=2,d=Xt(d,[["enter",e[n][1],t],["exit",e[n][1],t]])):p=0,In(e,r-1,n-r+3,d),n=r+d.length-p-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function _k(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Yh(r);let s;return l;function l(c){return s=c,e.enter("attentionSequence"),a(c)}function a(c){if(c===s)return e.consume(c),a;const d=e.exit("attentionSequence"),p=Yh(c),f=!p||p===2&&i||n.includes(c),h=!i||i===2&&p||n.includes(r);return d._open=!!(s===42?f:f&&(i||!h)),d._close=!!(s===42?h:h&&(p||!f)),t(c)}}function Gh(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const Nk={name:"autolink",tokenize:Dk};function Dk(e,t,n){let r=0;return i;function i(g){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(g),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),s}function s(g){return $n(g)?(e.consume(g),l):g===64?n(g):d(g)}function l(g){return g===43||g===45||g===46||Ft(g)?(r=1,a(g)):d(g)}function a(g){return g===58?(e.consume(g),r=0,c):(g===43||g===45||g===46||Ft(g))&&r++<32?(e.consume(g),a):(r=0,d(g))}function c(g){return g===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(g),e.exit("autolinkMarker"),e.exit("autolink"),t):g===null||g===32||g===60||z1(g)?n(g):(e.consume(g),c)}function d(g){return g===64?(e.consume(g),p):Sk(g)?(e.consume(g),d):n(g)}function p(g){return Ft(g)?f(g):n(g)}function f(g){return g===46?(e.consume(g),r=0,p):g===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(g),e.exit("autolinkMarker"),e.exit("autolink"),t):h(g)}function h(g){if((g===45||Ft(g))&&r++<63){const w=g===45?h:f;return e.consume(g),w}return n(g)}}const cc={partial:!0,tokenize:Ok};function Ok(e,t,n){return r;function r(s){return ve(s)?Te(e,i,"linePrefix")(s):i(s)}function i(s){return s===null||ie(s)?t(s):n(s)}}const D3={continuation:{tokenize:Fk},exit:Hk,name:"blockQuote",tokenize:Bk};function Bk(e,t,n){const r=this;return i;function i(l){if(l===62){const a=r.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(l),e.exit("blockQuoteMarker"),s}return n(l)}function s(l){return ve(l)?(e.enter("blockQuotePrefixWhitespace"),e.consume(l),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(l))}}function Fk(e,t,n){const r=this;return i;function i(l){return ve(l)?Te(e,s,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l):s(l)}function s(l){return e.attempt(D3,t,n)(l)}}function Hk(e){e.exit("blockQuote")}const O3={name:"characterEscape",tokenize:Uk};function Uk(e,t,n){return r;function r(s){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(s),e.exit("escapeMarker"),i}function i(s){return Ck(s)?(e.enter("characterEscapeValue"),e.consume(s),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(s)}}const B3={name:"characterReference",tokenize:Vk};function Vk(e,t,n){const r=this;let i=0,s,l;return a;function a(f){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),c}function c(f){return f===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(f),e.exit("characterReferenceMarkerNumeric"),d):(e.enter("characterReferenceValue"),s=31,l=Ft,p(f))}function d(f){return f===88||f===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(f),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),s=6,l=$k,p):(e.enter("characterReferenceValue"),s=7,l=M1,p(f))}function p(f){if(f===59&&i){const h=e.exit("characterReferenceValue");return l===Ft&&!c0(r.sliceSerialize(h))?n(f):(e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return l(f)&&i++<s?(e.consume(f),p):n(f)}}const Zh={partial:!0,tokenize:Kk},qh={concrete:!0,name:"codeFenced",tokenize:Wk};function Wk(e,t,n){const r=this,i={partial:!0,tokenize:I};let s=0,l=0,a;return c;function c(k){return d(k)}function d(k){const j=r.events[r.events.length-1];return s=j&&j[1].type==="linePrefix"?j[2].sliceSerialize(j[1],!0).length:0,a=k,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),p(k)}function p(k){return k===a?(l++,e.consume(k),p):l<3?n(k):(e.exit("codeFencedFenceSequence"),ve(k)?Te(e,f,"whitespace")(k):f(k))}function f(k){return k===null||ie(k)?(e.exit("codeFencedFence"),r.interrupt?t(k):e.check(Zh,v,$)(k)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),h(k))}function h(k){return k===null||ie(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),f(k)):ve(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Te(e,g,"whitespace")(k)):k===96&&k===a?n(k):(e.consume(k),h)}function g(k){return k===null||ie(k)?f(k):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),w(k))}function w(k){return k===null||ie(k)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),f(k)):k===96&&k===a?n(k):(e.consume(k),w)}function v(k){return e.attempt(i,$,S)(k)}function S(k){return e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),x}function x(k){return s>0&&ve(k)?Te(e,L,"linePrefix",s+1)(k):L(k)}function L(k){return k===null||ie(k)?e.check(Zh,v,$)(k):(e.enter("codeFlowValue"),y(k))}function y(k){return k===null||ie(k)?(e.exit("codeFlowValue"),L(k)):(e.consume(k),y)}function $(k){return e.exit("codeFenced"),t(k)}function I(k,j,z){let R=0;return T;function T(F){return k.enter("lineEnding"),k.consume(F),k.exit("lineEnding"),P}function P(F){return k.enter("codeFencedFence"),ve(F)?Te(k,E,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(F):E(F)}function E(F){return F===a?(k.enter("codeFencedFenceSequence"),A(F)):z(F)}function A(F){return F===a?(R++,k.consume(F),A):R>=l?(k.exit("codeFencedFenceSequence"),ve(F)?Te(k,N,"whitespace")(F):N(F)):z(F)}function N(F){return F===null||ie(F)?(k.exit("codeFencedFence"),j(F)):z(F)}}}function Kk(e,t,n){const r=this;return i;function i(l){return l===null?n(l):(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),s)}function s(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}const hu={name:"codeIndented",tokenize:Gk},Yk={partial:!0,tokenize:Zk};function Gk(e,t,n){const r=this;return i;function i(d){return e.enter("codeIndented"),Te(e,s,"linePrefix",5)(d)}function s(d){const p=r.events[r.events.length-1];return p&&p[1].type==="linePrefix"&&p[2].sliceSerialize(p[1],!0).length>=4?l(d):n(d)}function l(d){return d===null?c(d):ie(d)?e.attempt(Yk,l,c)(d):(e.enter("codeFlowValue"),a(d))}function a(d){return d===null||ie(d)?(e.exit("codeFlowValue"),l(d)):(e.consume(d),a)}function c(d){return e.exit("codeIndented"),t(d)}}function Zk(e,t,n){const r=this;return i;function i(l){return r.parser.lazy[r.now().line]?n(l):ie(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),i):Te(e,s,"linePrefix",5)(l)}function s(l){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(l):ie(l)?i(l):n(l)}}const qk={name:"codeText",previous:Xk,resolve:Qk,tokenize:Jk};function Qk(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Xk(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Jk(e,t,n){let r=0,i,s;return l;function l(f){return e.enter("codeText"),e.enter("codeTextSequence"),a(f)}function a(f){return f===96?(e.consume(f),r++,a):(e.exit("codeTextSequence"),c(f))}function c(f){return f===null?n(f):f===32?(e.enter("space"),e.consume(f),e.exit("space"),c):f===96?(s=e.enter("codeTextSequence"),i=0,p(f)):ie(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),c):(e.enter("codeTextData"),d(f))}function d(f){return f===null||f===32||f===96||ie(f)?(e.exit("codeTextData"),c(f)):(e.consume(f),d)}function p(f){return f===96?(e.consume(f),i++,p):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(f)):(s.type="codeTextData",d(f))}}class ej{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const s=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Lo(this.left,r),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),Lo(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),Lo(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);Lo(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);Lo(this.left,n.reverse())}}}function Lo(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function F3(e){const t={};let n=-1,r,i,s,l,a,c,d;const p=new ej(e);for(;++n<p.length;){for(;n in t;)n=t[n];if(r=p.get(n),n&&r[1].type==="chunkFlow"&&p.get(n-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,s=0,s<c.length&&c[s][1].type==="lineEndingBlank"&&(s+=2),s<c.length&&c[s][1].type==="content"))for(;++s<c.length&&c[s][1].type!=="content";)c[s][1].type==="chunkText"&&(c[s][1]._isInFirstContentOfListItem=!0,s++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,tj(p,n)),n=t[n],d=!0);else if(r[1]._container){for(s=n,i=void 0;s--;)if(l=p.get(s),l[1].type==="lineEnding"||l[1].type==="lineEndingBlank")l[0]==="enter"&&(i&&(p.get(i)[1].type="lineEndingBlank"),l[1].type="lineEnding",i=s);else if(!(l[1].type==="linePrefix"||l[1].type==="listItemIndent"))break;i&&(r[1].end={...p.get(i)[1].start},a=p.slice(i,n),a.unshift(r),p.splice(i,n-i+1,a))}}return In(e,0,Number.POSITIVE_INFINITY,p.slice(0)),!d}function tj(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const s=[];let l=n._tokenizer;l||(l=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(l._contentTypeTextTrailing=!0));const a=l.events,c=[],d={};let p,f,h=-1,g=n,w=0,v=0;const S=[v];for(;g;){for(;e.get(++i)[1]!==g;);s.push(i),g._tokenizer||(p=r.sliceStream(g),g.next||p.push(null),f&&l.defineSkip(g.start),g._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(p),g._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),f=g,g=g.next}for(g=n;++h<a.length;)a[h][0]==="exit"&&a[h-1][0]==="enter"&&a[h][1].type===a[h-1][1].type&&a[h][1].start.line!==a[h][1].end.line&&(v=h+1,S.push(v),g._tokenizer=void 0,g.previous=void 0,g=g.next);for(l.events=[],g?(g._tokenizer=void 0,g.previous=void 0):S.pop(),h=S.length;h--;){const x=a.slice(S[h],S[h+1]),L=s.pop();c.push([L,L+x.length-1]),e.splice(L,2,x)}for(c.reverse(),h=-1;++h<c.length;)d[w+c[h][0]]=w+c[h][1],w+=c[h][1]-c[h][0]-1;return d}const nj={resolve:ij,tokenize:oj},rj={partial:!0,tokenize:sj};function ij(e){return F3(e),e}function oj(e,t){let n;return r;function r(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?s(a):ie(a)?e.check(rj,l,s)(a):(e.consume(a),i)}function s(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function l(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function sj(e,t,n){const r=this;return i;function i(l){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),Te(e,s,"linePrefix")}function s(l){if(l===null||ie(l))return n(l);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(l):e.interrupt(r.parser.constructs.flow,n,t)(l)}}function H3(e,t,n,r,i,s,l,a,c){const d=c||Number.POSITIVE_INFINITY;let p=0;return f;function f(x){return x===60?(e.enter(r),e.enter(i),e.enter(s),e.consume(x),e.exit(s),h):x===null||x===32||x===41||z1(x)?n(x):(e.enter(r),e.enter(l),e.enter(a),e.enter("chunkString",{contentType:"string"}),v(x))}function h(x){return x===62?(e.enter(s),e.consume(x),e.exit(s),e.exit(i),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),g(x))}function g(x){return x===62?(e.exit("chunkString"),e.exit(a),h(x)):x===null||x===60||ie(x)?n(x):(e.consume(x),x===92?w:g)}function w(x){return x===60||x===62||x===92?(e.consume(x),g):g(x)}function v(x){return!p&&(x===null||x===41||Mt(x))?(e.exit("chunkString"),e.exit(a),e.exit(l),e.exit(r),t(x)):p<d&&x===40?(e.consume(x),p++,v):x===41?(e.consume(x),p--,v):x===null||x===32||x===40||z1(x)?n(x):(e.consume(x),x===92?S:v)}function S(x){return x===40||x===41||x===92?(e.consume(x),v):v(x)}}function U3(e,t,n,r,i,s){const l=this;let a=0,c;return d;function d(g){return e.enter(r),e.enter(i),e.consume(g),e.exit(i),e.enter(s),p}function p(g){return a>999||g===null||g===91||g===93&&!c||g===94&&!a&&"_hiddenFootnoteSupport"in l.parser.constructs?n(g):g===93?(e.exit(s),e.enter(i),e.consume(g),e.exit(i),e.exit(r),t):ie(g)?(e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),p):(e.enter("chunkString",{contentType:"string"}),f(g))}function f(g){return g===null||g===91||g===93||ie(g)||a++>999?(e.exit("chunkString"),p(g)):(e.consume(g),c||(c=!ve(g)),g===92?h:f)}function h(g){return g===91||g===92||g===93?(e.consume(g),a++,f):f(g)}}function V3(e,t,n,r,i,s){let l;return a;function a(h){return h===34||h===39||h===40?(e.enter(r),e.enter(i),e.consume(h),e.exit(i),l=h===40?41:h,c):n(h)}function c(h){return h===l?(e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):(e.enter(s),d(h))}function d(h){return h===l?(e.exit(s),c(l)):h===null?n(h):ie(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),Te(e,d,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),p(h))}function p(h){return h===l||h===null||ie(h)?(e.exit("chunkString"),d(h)):(e.consume(h),h===92?f:p)}function f(h){return h===l||h===92?(e.consume(h),p):p(h)}}function ts(e,t){let n;return r;function r(i){return ie(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):ve(i)?Te(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const lj={name:"definition",tokenize:cj},aj={partial:!0,tokenize:uj};function cj(e,t,n){const r=this;let i;return s;function s(g){return e.enter("definition"),l(g)}function l(g){return U3.call(r,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(g)}function a(g){return i=Mi(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),g===58?(e.enter("definitionMarker"),e.consume(g),e.exit("definitionMarker"),c):n(g)}function c(g){return Mt(g)?ts(e,d)(g):d(g)}function d(g){return H3(e,p,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(g)}function p(g){return e.attempt(aj,f,f)(g)}function f(g){return ve(g)?Te(e,h,"whitespace")(g):h(g)}function h(g){return g===null||ie(g)?(e.exit("definition"),r.parser.defined.push(i),t(g)):n(g)}}function uj(e,t,n){return r;function r(a){return Mt(a)?ts(e,i)(a):n(a)}function i(a){return V3(e,s,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function s(a){return ve(a)?Te(e,l,"whitespace")(a):l(a)}function l(a){return a===null||ie(a)?t(a):n(a)}}const dj={name:"hardBreakEscape",tokenize:pj};function pj(e,t,n){return r;function r(s){return e.enter("hardBreakEscape"),e.consume(s),i}function i(s){return ie(s)?(e.exit("hardBreakEscape"),t(s)):n(s)}}const fj={name:"headingAtx",resolve:hj,tokenize:gj};function hj(e,t){let n=e.length-2,r=3,i,s;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},s={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},In(e,r,n-r+1,[["enter",i,t],["enter",s,t],["exit",s,t],["exit",i,t]])),e}function gj(e,t,n){let r=0;return i;function i(p){return e.enter("atxHeading"),s(p)}function s(p){return e.enter("atxHeadingSequence"),l(p)}function l(p){return p===35&&r++<6?(e.consume(p),l):p===null||Mt(p)?(e.exit("atxHeadingSequence"),a(p)):n(p)}function a(p){return p===35?(e.enter("atxHeadingSequence"),c(p)):p===null||ie(p)?(e.exit("atxHeading"),t(p)):ve(p)?Te(e,a,"whitespace")(p):(e.enter("atxHeadingText"),d(p))}function c(p){return p===35?(e.consume(p),c):(e.exit("atxHeadingSequence"),a(p))}function d(p){return p===null||p===35||Mt(p)?(e.exit("atxHeadingText"),a(p)):(e.consume(p),d)}}const mj=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Qh=["pre","script","style","textarea"],xj={concrete:!0,name:"htmlFlow",resolveTo:vj,tokenize:wj},Lj={partial:!0,tokenize:kj},yj={partial:!0,tokenize:bj};function vj(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function wj(e,t,n){const r=this;let i,s,l,a,c;return d;function d(b){return p(b)}function p(b){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(b),f}function f(b){return b===33?(e.consume(b),h):b===47?(e.consume(b),s=!0,v):b===63?(e.consume(b),i=3,r.interrupt?t:C):$n(b)?(e.consume(b),l=String.fromCharCode(b),S):n(b)}function h(b){return b===45?(e.consume(b),i=2,g):b===91?(e.consume(b),i=5,a=0,w):$n(b)?(e.consume(b),i=4,r.interrupt?t:C):n(b)}function g(b){return b===45?(e.consume(b),r.interrupt?t:C):n(b)}function w(b){const H="CDATA[";return b===H.charCodeAt(a++)?(e.consume(b),a===H.length?r.interrupt?t:E:w):n(b)}function v(b){return $n(b)?(e.consume(b),l=String.fromCharCode(b),S):n(b)}function S(b){if(b===null||b===47||b===62||Mt(b)){const H=b===47,_=l.toLowerCase();return!H&&!s&&Qh.includes(_)?(i=1,r.interrupt?t(b):E(b)):mj.includes(l.toLowerCase())?(i=6,H?(e.consume(b),x):r.interrupt?t(b):E(b)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(b):s?L(b):y(b))}return b===45||Ft(b)?(e.consume(b),l+=String.fromCharCode(b),S):n(b)}function x(b){return b===62?(e.consume(b),r.interrupt?t:E):n(b)}function L(b){return ve(b)?(e.consume(b),L):T(b)}function y(b){return b===47?(e.consume(b),T):b===58||b===95||$n(b)?(e.consume(b),$):ve(b)?(e.consume(b),y):T(b)}function $(b){return b===45||b===46||b===58||b===95||Ft(b)?(e.consume(b),$):I(b)}function I(b){return b===61?(e.consume(b),k):ve(b)?(e.consume(b),I):y(b)}function k(b){return b===null||b===60||b===61||b===62||b===96?n(b):b===34||b===39?(e.consume(b),c=b,j):ve(b)?(e.consume(b),k):z(b)}function j(b){return b===c?(e.consume(b),c=null,R):b===null||ie(b)?n(b):(e.consume(b),j)}function z(b){return b===null||b===34||b===39||b===47||b===60||b===61||b===62||b===96||Mt(b)?I(b):(e.consume(b),z)}function R(b){return b===47||b===62||ve(b)?y(b):n(b)}function T(b){return b===62?(e.consume(b),P):n(b)}function P(b){return b===null||ie(b)?E(b):ve(b)?(e.consume(b),P):n(b)}function E(b){return b===45&&i===2?(e.consume(b),G):b===60&&i===1?(e.consume(b),q):b===62&&i===4?(e.consume(b),Q):b===63&&i===3?(e.consume(b),C):b===93&&i===5?(e.consume(b),O):ie(b)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(Lj,X,A)(b)):b===null||ie(b)?(e.exit("htmlFlowData"),A(b)):(e.consume(b),E)}function A(b){return e.check(yj,N,X)(b)}function N(b){return e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),F}function F(b){return b===null||ie(b)?A(b):(e.enter("htmlFlowData"),E(b))}function G(b){return b===45?(e.consume(b),C):E(b)}function q(b){return b===47?(e.consume(b),l="",M):E(b)}function M(b){if(b===62){const H=l.toLowerCase();return Qh.includes(H)?(e.consume(b),Q):E(b)}return $n(b)&&l.length<8?(e.consume(b),l+=String.fromCharCode(b),M):E(b)}function O(b){return b===93?(e.consume(b),C):E(b)}function C(b){return b===62?(e.consume(b),Q):b===45&&i===2?(e.consume(b),C):E(b)}function Q(b){return b===null||ie(b)?(e.exit("htmlFlowData"),X(b)):(e.consume(b),Q)}function X(b){return e.exit("htmlFlow"),t(b)}}function bj(e,t,n){const r=this;return i;function i(l){return ie(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),s):n(l)}function s(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}function kj(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(cc,t,n)}}const jj={name:"htmlText",tokenize:Sj};function Sj(e,t,n){const r=this;let i,s,l;return a;function a(C){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(C),c}function c(C){return C===33?(e.consume(C),d):C===47?(e.consume(C),I):C===63?(e.consume(C),y):$n(C)?(e.consume(C),z):n(C)}function d(C){return C===45?(e.consume(C),p):C===91?(e.consume(C),s=0,w):$n(C)?(e.consume(C),L):n(C)}function p(C){return C===45?(e.consume(C),g):n(C)}function f(C){return C===null?n(C):C===45?(e.consume(C),h):ie(C)?(l=f,q(C)):(e.consume(C),f)}function h(C){return C===45?(e.consume(C),g):f(C)}function g(C){return C===62?G(C):C===45?h(C):f(C)}function w(C){const Q="CDATA[";return C===Q.charCodeAt(s++)?(e.consume(C),s===Q.length?v:w):n(C)}function v(C){return C===null?n(C):C===93?(e.consume(C),S):ie(C)?(l=v,q(C)):(e.consume(C),v)}function S(C){return C===93?(e.consume(C),x):v(C)}function x(C){return C===62?G(C):C===93?(e.consume(C),x):v(C)}function L(C){return C===null||C===62?G(C):ie(C)?(l=L,q(C)):(e.consume(C),L)}function y(C){return C===null?n(C):C===63?(e.consume(C),$):ie(C)?(l=y,q(C)):(e.consume(C),y)}function $(C){return C===62?G(C):y(C)}function I(C){return $n(C)?(e.consume(C),k):n(C)}function k(C){return C===45||Ft(C)?(e.consume(C),k):j(C)}function j(C){return ie(C)?(l=j,q(C)):ve(C)?(e.consume(C),j):G(C)}function z(C){return C===45||Ft(C)?(e.consume(C),z):C===47||C===62||Mt(C)?R(C):n(C)}function R(C){return C===47?(e.consume(C),G):C===58||C===95||$n(C)?(e.consume(C),T):ie(C)?(l=R,q(C)):ve(C)?(e.consume(C),R):G(C)}function T(C){return C===45||C===46||C===58||C===95||Ft(C)?(e.consume(C),T):P(C)}function P(C){return C===61?(e.consume(C),E):ie(C)?(l=P,q(C)):ve(C)?(e.consume(C),P):R(C)}function E(C){return C===null||C===60||C===61||C===62||C===96?n(C):C===34||C===39?(e.consume(C),i=C,A):ie(C)?(l=E,q(C)):ve(C)?(e.consume(C),E):(e.consume(C),N)}function A(C){return C===i?(e.consume(C),i=void 0,F):C===null?n(C):ie(C)?(l=A,q(C)):(e.consume(C),A)}function N(C){return C===null||C===34||C===39||C===60||C===61||C===96?n(C):C===47||C===62||Mt(C)?R(C):(e.consume(C),N)}function F(C){return C===47||C===62||Mt(C)?R(C):n(C)}function G(C){return C===62?(e.consume(C),e.exit("htmlTextData"),e.exit("htmlText"),t):n(C)}function q(C){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(C),e.exit("lineEnding"),M}function M(C){return ve(C)?Te(e,O,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(C):O(C)}function O(C){return e.enter("htmlTextData"),l(C)}}const d0={name:"labelEnd",resolveAll:Pj,resolveTo:Ij,tokenize:Tj},$j={tokenize:Rj},Cj={tokenize:zj},Ej={tokenize:Mj};function Pj(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&In(e,0,e.length,n),e}function Ij(e,t){let n=e.length,r=0,i,s,l,a;for(;n--;)if(i=e[n][1],s){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(l){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(s=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(l=n);const c={type:e[s][1].type==="labelLink"?"link":"image",start:{...e[s][1].start},end:{...e[e.length-1][1].end}},d={type:"label",start:{...e[s][1].start},end:{...e[l][1].end}},p={type:"labelText",start:{...e[s+r+2][1].end},end:{...e[l-2][1].start}};return a=[["enter",c,t],["enter",d,t]],a=Xt(a,e.slice(s+1,s+r+3)),a=Xt(a,[["enter",p,t]]),a=Xt(a,u0(t.parser.constructs.insideSpan.null,e.slice(s+r+4,l-3),t)),a=Xt(a,[["exit",p,t],e[l-2],e[l-1],["exit",d,t]]),a=Xt(a,e.slice(l+1)),a=Xt(a,[["exit",c,t]]),In(e,s,e.length,a),e}function Tj(e,t,n){const r=this;let i=r.events.length,s,l;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){s=r.events[i][1];break}return a;function a(h){return s?s._inactive?f(h):(l=r.parser.defined.includes(Mi(r.sliceSerialize({start:s.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(h),e.exit("labelMarker"),e.exit("labelEnd"),c):n(h)}function c(h){return h===40?e.attempt($j,p,l?p:f)(h):h===91?e.attempt(Cj,p,l?d:f)(h):l?p(h):f(h)}function d(h){return e.attempt(Ej,p,f)(h)}function p(h){return t(h)}function f(h){return s._balanced=!0,n(h)}}function Rj(e,t,n){return r;function r(f){return e.enter("resource"),e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),i}function i(f){return Mt(f)?ts(e,s)(f):s(f)}function s(f){return f===41?p(f):H3(e,l,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(f)}function l(f){return Mt(f)?ts(e,c)(f):p(f)}function a(f){return n(f)}function c(f){return f===34||f===39||f===40?V3(e,d,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(f):p(f)}function d(f){return Mt(f)?ts(e,p)(f):p(f)}function p(f){return f===41?(e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),e.exit("resource"),t):n(f)}}function zj(e,t,n){const r=this;return i;function i(a){return U3.call(r,e,s,l,"reference","referenceMarker","referenceString")(a)}function s(a){return r.parser.defined.includes(Mi(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function l(a){return n(a)}}function Mj(e,t,n){return r;function r(s){return e.enter("reference"),e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),i}function i(s){return s===93?(e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),e.exit("reference"),t):n(s)}}const Aj={name:"labelStartImage",resolveAll:d0.resolveAll,tokenize:_j};function _j(e,t,n){const r=this;return i;function i(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),s}function s(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),l):n(a)}function l(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const Nj={name:"labelStartLink",resolveAll:d0.resolveAll,tokenize:Dj};function Dj(e,t,n){const r=this;return i;function i(l){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelLink"),s}function s(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const gu={name:"lineEnding",tokenize:Oj};function Oj(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),Te(e,t,"linePrefix")}}const Hl={name:"thematicBreak",tokenize:Bj};function Bj(e,t,n){let r=0,i;return s;function s(d){return e.enter("thematicBreak"),l(d)}function l(d){return i=d,a(d)}function a(d){return d===i?(e.enter("thematicBreakSequence"),c(d)):r>=3&&(d===null||ie(d))?(e.exit("thematicBreak"),t(d)):n(d)}function c(d){return d===i?(e.consume(d),r++,c):(e.exit("thematicBreakSequence"),ve(d)?Te(e,a,"whitespace")(d):a(d))}}const Et={continuation:{tokenize:Vj},exit:Kj,name:"list",tokenize:Uj},Fj={partial:!0,tokenize:Yj},Hj={partial:!0,tokenize:Wj};function Uj(e,t,n){const r=this,i=r.events[r.events.length-1];let s=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,l=0;return a;function a(g){const w=r.containerState.type||(g===42||g===43||g===45?"listUnordered":"listOrdered");if(w==="listUnordered"?!r.containerState.marker||g===r.containerState.marker:M1(g)){if(r.containerState.type||(r.containerState.type=w,e.enter(w,{_container:!0})),w==="listUnordered")return e.enter("listItemPrefix"),g===42||g===45?e.check(Hl,n,d)(g):d(g);if(!r.interrupt||g===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(g)}return n(g)}function c(g){return M1(g)&&++l<10?(e.consume(g),c):(!r.interrupt||l<2)&&(r.containerState.marker?g===r.containerState.marker:g===41||g===46)?(e.exit("listItemValue"),d(g)):n(g)}function d(g){return e.enter("listItemMarker"),e.consume(g),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||g,e.check(cc,r.interrupt?n:p,e.attempt(Fj,h,f))}function p(g){return r.containerState.initialBlankLine=!0,s++,h(g)}function f(g){return ve(g)?(e.enter("listItemPrefixWhitespace"),e.consume(g),e.exit("listItemPrefixWhitespace"),h):n(g)}function h(g){return r.containerState.size=s+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(g)}}function Vj(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(cc,i,s);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Te(e,t,"listItemIndent",r.containerState.size+1)(a)}function s(a){return r.containerState.furtherBlankLines||!ve(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,l(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Hj,t,l)(a))}function l(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,Te(e,e.attempt(Et,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function Wj(e,t,n){const r=this;return Te(e,i,"listItemIndent",r.containerState.size+1);function i(s){const l=r.events[r.events.length-1];return l&&l[1].type==="listItemIndent"&&l[2].sliceSerialize(l[1],!0).length===r.containerState.size?t(s):n(s)}}function Kj(e){e.exit(this.containerState.type)}function Yj(e,t,n){const r=this;return Te(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(s){const l=r.events[r.events.length-1];return!ve(s)&&l&&l[1].type==="listItemPrefixWhitespace"?t(s):n(s)}}const Xh={name:"setextUnderline",resolveTo:Gj,tokenize:Zj};function Gj(e,t){let n=e.length,r,i,s;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!s&&e[n][1].type==="definition"&&(s=n);const l={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",s?(e.splice(i,0,["enter",l,t]),e.splice(s+1,0,["exit",e[r][1],t]),e[r][1].end={...e[s][1].end}):e[r][1]=l,e.push(["exit",l,t]),e}function Zj(e,t,n){const r=this;let i;return s;function s(d){let p=r.events.length,f;for(;p--;)if(r.events[p][1].type!=="lineEnding"&&r.events[p][1].type!=="linePrefix"&&r.events[p][1].type!=="content"){f=r.events[p][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||f)?(e.enter("setextHeadingLine"),i=d,l(d)):n(d)}function l(d){return e.enter("setextHeadingLineSequence"),a(d)}function a(d){return d===i?(e.consume(d),a):(e.exit("setextHeadingLineSequence"),ve(d)?Te(e,c,"lineSuffix")(d):c(d))}function c(d){return d===null||ie(d)?(e.exit("setextHeadingLine"),t(d)):n(d)}}const qj={tokenize:Qj};function Qj(e){const t=this,n=e.attempt(cc,r,e.attempt(this.parser.constructs.flowInitial,i,Te(e,e.attempt(this.parser.constructs.flow,i,e.attempt(nj,i)),"linePrefix")));return n;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEndingBlank"),e.consume(s),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const Xj={resolveAll:K3()},Jj=W3("string"),eS=W3("text");function W3(e){return{resolveAll:K3(e==="text"?tS:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],s=n.attempt(i,l,a);return l;function l(p){return d(p)?s(p):a(p)}function a(p){if(p===null){n.consume(p);return}return n.enter("data"),n.consume(p),c}function c(p){return d(p)?(n.exit("data"),s(p)):(n.consume(p),c)}function d(p){if(p===null)return!0;const f=i[p];let h=-1;if(f)for(;++h<f.length;){const g=f[h];if(!g.previous||g.previous.call(r,r.previous))return!0}return!1}}}function K3(e){return t;function t(n,r){let i=-1,s;for(;++i<=n.length;)s===void 0?n[i]&&n[i][1].type==="data"&&(s=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==s+2&&(n[s][1].end=n[i-1][1].end,n.splice(s+2,i-s-2),i=s+2),s=void 0);return e?e(n,r):n}}function tS(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let s=i.length,l=-1,a=0,c;for(;s--;){const d=i[s];if(typeof d=="string"){for(l=d.length;d.charCodeAt(l-1)===32;)a++,l--;if(l)break;l=-1}else if(d===-2)c=!0,a++;else if(d!==-1){s++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(a=0),a){const d={type:n===e.length||c||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:s?l:r.start._bufferIndex+l,_index:r.start._index+s,line:r.end.line,column:r.end.column-a,offset:r.end.offset-a},end:{...r.end}};r.end={...d.start},r.start.offset===r.end.offset?Object.assign(r,d):(e.splice(n,0,["enter",d,t],["exit",d,t]),n+=2)}n++}return e}const nS={42:Et,43:Et,45:Et,48:Et,49:Et,50:Et,51:Et,52:Et,53:Et,54:Et,55:Et,56:Et,57:Et,62:D3},rS={91:lj},iS={[-2]:hu,[-1]:hu,32:hu},oS={35:fj,42:Hl,45:[Xh,Hl],60:xj,61:Xh,95:Hl,96:qh,126:qh},sS={38:B3,92:O3},lS={[-5]:gu,[-4]:gu,[-3]:gu,33:Aj,38:B3,42:A1,60:[Nk,jj],91:Nj,92:[dj,O3],93:d0,95:A1,96:qk},aS={null:[A1,Xj]},cS={null:[42,95]},uS={null:[]},dS=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:cS,contentInitial:rS,disable:uS,document:nS,flow:oS,flowInitial:iS,insideSpan:aS,string:sS,text:lS},Symbol.toStringTag,{value:"Module"}));function pS(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},s=[];let l=[],a=[];const c={attempt:j(I),check:j(k),consume:L,enter:y,exit:$,interrupt:j(k,{interrupt:!0})},d={code:null,containerState:{},defineSkip:v,events:[],now:w,parser:e,previous:null,sliceSerialize:h,sliceStream:g,write:f};let p=t.tokenize.call(d,c);return t.resolveAll&&s.push(t),d;function f(P){return l=Xt(l,P),S(),l[l.length-1]!==null?[]:(z(t,0),d.events=u0(s,d.events,d),d.events)}function h(P,E){return hS(g(P),E)}function g(P){return fS(l,P)}function w(){const{_bufferIndex:P,_index:E,line:A,column:N,offset:F}=r;return{_bufferIndex:P,_index:E,line:A,column:N,offset:F}}function v(P){i[P.line]=P.column,T()}function S(){let P;for(;r._index<l.length;){const E=l[r._index];if(typeof E=="string")for(P=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===P&&r._bufferIndex<E.length;)x(E.charCodeAt(r._bufferIndex));else x(E)}}function x(P){p=p(P)}function L(P){ie(P)?(r.line++,r.column=1,r.offset+=P===-3?2:1,T()):P!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===l[r._index].length&&(r._bufferIndex=-1,r._index++)),d.previous=P}function y(P,E){const A=E||{};return A.type=P,A.start=w(),d.events.push(["enter",A,d]),a.push(A),A}function $(P){const E=a.pop();return E.end=w(),d.events.push(["exit",E,d]),E}function I(P,E){z(P,E.from)}function k(P,E){E.restore()}function j(P,E){return A;function A(N,F,G){let q,M,O,C;return Array.isArray(N)?X(N):"tokenize"in N?X([N]):Q(N);function Q(Z){return V;function V(ee){const ue=ee!==null&&Z[ee],be=ee!==null&&Z.null,fe=[...Array.isArray(ue)?ue:ue?[ue]:[],...Array.isArray(be)?be:be?[be]:[]];return X(fe)(ee)}}function X(Z){return q=Z,M=0,Z.length===0?G:b(Z[M])}function b(Z){return V;function V(ee){return C=R(),O=Z,Z.partial||(d.currentConstruct=Z),Z.name&&d.parser.constructs.disable.null.includes(Z.name)?_():Z.tokenize.call(E?Object.assign(Object.create(d),E):d,c,H,_)(ee)}}function H(Z){return P(O,C),F}function _(Z){return C.restore(),++M<q.length?b(q[M]):G}}}function z(P,E){P.resolveAll&&!s.includes(P)&&s.push(P),P.resolve&&In(d.events,E,d.events.length-E,P.resolve(d.events.slice(E),d)),P.resolveTo&&(d.events=P.resolveTo(d.events,d))}function R(){const P=w(),E=d.previous,A=d.currentConstruct,N=d.events.length,F=Array.from(a);return{from:N,restore:G};function G(){r=P,d.previous=E,d.currentConstruct=A,d.events.length=N,a=F,T()}}function T(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function fS(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,s=t.end._bufferIndex;let l;if(n===i)l=[e[n].slice(r,s)];else{if(l=e.slice(n,i),r>-1){const a=l[0];typeof a=="string"?l[0]=a.slice(r):l.shift()}s>0&&l.push(e[i].slice(0,s))}return l}function hS(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const s=e[n];let l;if(typeof s=="string")l=s;else switch(s){case-5:{l="\r";break}case-4:{l=`
`;break}case-3:{l=`\r
`;break}case-2:{l=t?" ":"	";break}case-1:{if(!t&&i)continue;l=" ";break}default:l=String.fromCharCode(s)}i=s===-2,r.push(l)}return r.join("")}function gS(e){const r={constructs:bk([dS,...(e||{}).extensions||[]]),content:i(Ik),defined:[],document:i(Rk),flow:i(qj),lazy:{},string:i(Jj),text:i(eS)};return r;function i(s){return l;function l(a){return pS(r,s,a)}}}function mS(e){for(;!F3(e););return e}const Jh=/[\0\t\n\r]/g;function xS(){let e=1,t="",n=!0,r;return i;function i(s,l,a){const c=[];let d,p,f,h,g;for(s=t+(typeof s=="string"?s.toString():new TextDecoder(l||void 0).decode(s)),f=0,t="",n&&(s.charCodeAt(0)===65279&&f++,n=void 0);f<s.length;){if(Jh.lastIndex=f,d=Jh.exec(s),h=d&&d.index!==void 0?d.index:s.length,g=s.charCodeAt(h),!d){t=s.slice(f);break}if(g===10&&f===h&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),f<h&&(c.push(s.slice(f,h)),e+=h-f),g){case 0:{c.push(65533),e++;break}case 9:{for(p=Math.ceil(e/4)*4,c.push(-2);e++<p;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}f=h+1}return a&&(r&&c.push(-5),t&&c.push(t),c.push(null)),c}}const LS=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function yS(e){return e.replace(LS,vS)}function vS(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),s=i===120||i===88;return N3(n.slice(s?2:1),s?16:10)}return c0(n)||e}const Y3={}.hasOwnProperty;function wS(e,t,n){return t&&typeof t=="object"&&(n=t,t=void 0),bS(n)(mS(gS(n).document().write(xS()(e,t,!0))))}function bS(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:s(te),autolinkProtocol:R,autolinkEmail:R,atxHeading:s(Oe),blockQuote:s(be),characterEscape:R,characterReference:R,codeFenced:s(fe),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:s(fe,l),codeText:s(xe,l),codeTextData:R,data:R,codeFlowValue:R,definition:s($e),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:s(Re),hardBreakEscape:s(qe),hardBreakTrailing:s(qe),htmlFlow:s(ze,l),htmlFlowData:R,htmlText:s(ze,l),htmlTextData:R,image:s(Kt),label:l,link:s(te),listItem:s(Ee),listItemValue:h,listOrdered:s(Ce,f),listUnordered:s(Ce),paragraph:s(bt),reference:b,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:s(Oe),strong:s(sn),thematicBreak:s(Jr)},exit:{atxHeading:c(),atxHeadingSequence:I,autolink:c(),autolinkEmail:ue,autolinkProtocol:ee,blockQuote:c(),characterEscapeValue:T,characterReferenceMarkerHexadecimal:_,characterReferenceMarkerNumeric:_,characterReferenceValue:Z,characterReference:V,codeFenced:c(S),codeFencedFence:v,codeFencedFenceInfo:g,codeFencedFenceMeta:w,codeFlowValue:T,codeIndented:c(x),codeText:c(F),codeTextData:T,data:T,definition:c(),definitionDestinationString:$,definitionLabelString:L,definitionTitleString:y,emphasis:c(),hardBreakEscape:c(E),hardBreakTrailing:c(E),htmlFlow:c(A),htmlFlowData:T,htmlText:c(N),htmlTextData:T,image:c(q),label:O,labelText:M,lineEnding:P,link:c(G),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:H,resourceDestinationString:C,resourceTitleString:Q,resource:X,setextHeading:c(z),setextHeadingLineSequence:j,setextHeadingText:k,strong:c(),thematicBreak:c()}};G3(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(B){let U={type:"root",children:[]};const ne={stack:[U],tokenStack:[],config:t,enter:a,exit:d,buffer:l,resume:p,data:n},de=[];let ke=-1;for(;++ke<B.length;)if(B[ke][1].type==="listOrdered"||B[ke][1].type==="listUnordered")if(B[ke][0]==="enter")de.push(ke);else{const Ct=de.pop();ke=i(B,Ct,ke)}for(ke=-1;++ke<B.length;){const Ct=t[B[ke][0]];Y3.call(Ct,B[ke][1].type)&&Ct[B[ke][1].type].call(Object.assign({sliceSerialize:B[ke][2].sliceSerialize},ne),B[ke][1])}if(ne.tokenStack.length>0){const Ct=ne.tokenStack[ne.tokenStack.length-1];(Ct[1]||e2).call(ne,void 0,Ct[0])}for(U.position={start:qn(B.length>0?B[0][1].start:{line:1,column:1,offset:0}),end:qn(B.length>0?B[B.length-2][1].end:{line:1,column:1,offset:0})},ke=-1;++ke<t.transforms.length;)U=t.transforms[ke](U)||U;return U}function i(B,U,ne){let de=U-1,ke=-1,Ct=!1,Yt,oe,ln,kr;for(;++de<=ne;){const ht=B[de];switch(ht[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{ht[0]==="enter"?ke++:ke--,kr=void 0;break}case"lineEndingBlank":{ht[0]==="enter"&&(Yt&&!kr&&!ke&&!ln&&(ln=de),kr=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:kr=void 0}if(!ke&&ht[0]==="enter"&&ht[1].type==="listItemPrefix"||ke===-1&&ht[0]==="exit"&&(ht[1].type==="listUnordered"||ht[1].type==="listOrdered")){if(Yt){let Rn=de;for(oe=void 0;Rn--;){const Gt=B[Rn];if(Gt[1].type==="lineEnding"||Gt[1].type==="lineEndingBlank"){if(Gt[0]==="exit")continue;oe&&(B[oe][1].type="lineEndingBlank",Ct=!0),Gt[1].type="lineEnding",oe=Rn}else if(!(Gt[1].type==="linePrefix"||Gt[1].type==="blockQuotePrefix"||Gt[1].type==="blockQuotePrefixWhitespace"||Gt[1].type==="blockQuoteMarker"||Gt[1].type==="listItemIndent"))break}ln&&(!oe||ln<oe)&&(Yt._spread=!0),Yt.end=Object.assign({},oe?B[oe][1].start:ht[1].end),B.splice(oe||de,0,["exit",Yt,ht[2]]),de++,ne++}if(ht[1].type==="listItemPrefix"){const Rn={type:"listItem",_spread:!1,start:Object.assign({},ht[1].start),end:void 0};Yt=Rn,B.splice(de,0,["enter",Rn,ht[2]]),de++,ne++,ln=void 0,kr=!0}}}return B[U][1]._spread=Ct,ne}function s(B,U){return ne;function ne(de){a.call(this,B(de),de),U&&U.call(this,de)}}function l(){this.stack.push({type:"fragment",children:[]})}function a(B,U,ne){this.stack[this.stack.length-1].children.push(B),this.stack.push(B),this.tokenStack.push([U,ne||void 0]),B.position={start:qn(U.start),end:void 0}}function c(B){return U;function U(ne){B&&B.call(this,ne),d.call(this,ne)}}function d(B,U){const ne=this.stack.pop(),de=this.tokenStack.pop();if(de)de[0].type!==B.type&&(U?U.call(this,B,de[0]):(de[1]||e2).call(this,B,de[0]));else throw new Error("Cannot close `"+B.type+"` ("+es({start:B.start,end:B.end})+"): it’s not open");ne.position.end=qn(B.end)}function p(){return vk(this.stack.pop())}function f(){this.data.expectingFirstListItemValue=!0}function h(B){if(this.data.expectingFirstListItemValue){const U=this.stack[this.stack.length-2];U.start=Number.parseInt(this.sliceSerialize(B),10),this.data.expectingFirstListItemValue=void 0}}function g(){const B=this.resume(),U=this.stack[this.stack.length-1];U.lang=B}function w(){const B=this.resume(),U=this.stack[this.stack.length-1];U.meta=B}function v(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function S(){const B=this.resume(),U=this.stack[this.stack.length-1];U.value=B.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function x(){const B=this.resume(),U=this.stack[this.stack.length-1];U.value=B.replace(/(\r?\n|\r)$/g,"")}function L(B){const U=this.resume(),ne=this.stack[this.stack.length-1];ne.label=U,ne.identifier=Mi(this.sliceSerialize(B)).toLowerCase()}function y(){const B=this.resume(),U=this.stack[this.stack.length-1];U.title=B}function $(){const B=this.resume(),U=this.stack[this.stack.length-1];U.url=B}function I(B){const U=this.stack[this.stack.length-1];if(!U.depth){const ne=this.sliceSerialize(B).length;U.depth=ne}}function k(){this.data.setextHeadingSlurpLineEnding=!0}function j(B){const U=this.stack[this.stack.length-1];U.depth=this.sliceSerialize(B).codePointAt(0)===61?1:2}function z(){this.data.setextHeadingSlurpLineEnding=void 0}function R(B){const ne=this.stack[this.stack.length-1].children;let de=ne[ne.length-1];(!de||de.type!=="text")&&(de=Ve(),de.position={start:qn(B.start),end:void 0},ne.push(de)),this.stack.push(de)}function T(B){const U=this.stack.pop();U.value+=this.sliceSerialize(B),U.position.end=qn(B.end)}function P(B){const U=this.stack[this.stack.length-1];if(this.data.atHardBreak){const ne=U.children[U.children.length-1];ne.position.end=qn(B.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(U.type)&&(R.call(this,B),T.call(this,B))}function E(){this.data.atHardBreak=!0}function A(){const B=this.resume(),U=this.stack[this.stack.length-1];U.value=B}function N(){const B=this.resume(),U=this.stack[this.stack.length-1];U.value=B}function F(){const B=this.resume(),U=this.stack[this.stack.length-1];U.value=B}function G(){const B=this.stack[this.stack.length-1];if(this.data.inReference){const U=this.data.referenceType||"shortcut";B.type+="Reference",B.referenceType=U,delete B.url,delete B.title}else delete B.identifier,delete B.label;this.data.referenceType=void 0}function q(){const B=this.stack[this.stack.length-1];if(this.data.inReference){const U=this.data.referenceType||"shortcut";B.type+="Reference",B.referenceType=U,delete B.url,delete B.title}else delete B.identifier,delete B.label;this.data.referenceType=void 0}function M(B){const U=this.sliceSerialize(B),ne=this.stack[this.stack.length-2];ne.label=yS(U),ne.identifier=Mi(U).toLowerCase()}function O(){const B=this.stack[this.stack.length-1],U=this.resume(),ne=this.stack[this.stack.length-1];if(this.data.inReference=!0,ne.type==="link"){const de=B.children;ne.children=de}else ne.alt=U}function C(){const B=this.resume(),U=this.stack[this.stack.length-1];U.url=B}function Q(){const B=this.resume(),U=this.stack[this.stack.length-1];U.title=B}function X(){this.data.inReference=void 0}function b(){this.data.referenceType="collapsed"}function H(B){const U=this.resume(),ne=this.stack[this.stack.length-1];ne.label=U,ne.identifier=Mi(this.sliceSerialize(B)).toLowerCase(),this.data.referenceType="full"}function _(B){this.data.characterReferenceType=B.type}function Z(B){const U=this.sliceSerialize(B),ne=this.data.characterReferenceType;let de;ne?(de=N3(U,ne==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):de=c0(U);const ke=this.stack[this.stack.length-1];ke.value+=de}function V(B){const U=this.stack.pop();U.position.end=qn(B.end)}function ee(B){T.call(this,B);const U=this.stack[this.stack.length-1];U.url=this.sliceSerialize(B)}function ue(B){T.call(this,B);const U=this.stack[this.stack.length-1];U.url="mailto:"+this.sliceSerialize(B)}function be(){return{type:"blockquote",children:[]}}function fe(){return{type:"code",lang:null,meta:null,value:""}}function xe(){return{type:"inlineCode",value:""}}function $e(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Re(){return{type:"emphasis",children:[]}}function Oe(){return{type:"heading",depth:0,children:[]}}function qe(){return{type:"break"}}function ze(){return{type:"html",value:""}}function Kt(){return{type:"image",title:null,url:"",alt:null}}function te(){return{type:"link",title:null,url:"",children:[]}}function Ce(B){return{type:"list",ordered:B.type==="listOrdered",start:null,spread:B._spread,children:[]}}function Ee(B){return{type:"listItem",spread:B._spread,checked:null,children:[]}}function bt(){return{type:"paragraph",children:[]}}function sn(){return{type:"strong",children:[]}}function Ve(){return{type:"text",value:""}}function Jr(){return{type:"thematicBreak"}}}function qn(e){return{line:e.line,column:e.column,offset:e.offset}}function G3(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?G3(e,r):kS(e,r)}}function kS(e,t){let n;for(n in t)if(Y3.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function e2(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+es({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+es({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+es({start:t.start,end:t.end})+") is still open")}function jS(e){const t=this;t.parser=n;function n(r){return wS(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function SS(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function $S(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function CS(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let s={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(s.data={meta:t.meta}),e.patch(t,s),s=e.applyData(t,s),s={type:"element",tagName:"pre",properties:{},children:[s]},e.patch(t,s),s}function ES(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function PS(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function IS(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=oo(r.toLowerCase()),s=e.footnoteOrder.indexOf(r);let l,a=e.footnoteCounts.get(r);a===void 0?(a=0,e.footnoteOrder.push(r),l=e.footnoteOrder.length):l=s+1,a+=1,e.footnoteCounts.set(r,a);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(l)}]};e.patch(t,c);const d={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,d),e.applyData(t,d)}function TS(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function RS(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Z3(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),s=i[0];s&&s.type==="text"?s.value="["+s.value:i.unshift({type:"text",value:"["});const l=i[i.length-1];return l&&l.type==="text"?l.value+=r:i.push({type:"text",value:r}),i}function zS(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Z3(e,t);const i={src:oo(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,s),e.applyData(t,s)}function MS(e,t){const n={src:oo(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function AS(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function _S(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Z3(e,t);const i={href:oo(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,s),e.applyData(t,s)}function NS(e,t){const n={href:oo(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function DS(e,t,n){const r=e.all(t),i=n?OS(n):q3(t),s={},l=[];if(typeof t.checked=="boolean"){const p=r[0];let f;p&&p.type==="element"&&p.tagName==="p"?f=p:(f={type:"element",tagName:"p",properties:{},children:[]},r.unshift(f)),f.children.length>0&&f.children.unshift({type:"text",value:" "}),f.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const p=r[a];(i||a!==0||p.type!=="element"||p.tagName!=="p")&&l.push({type:"text",value:`
`}),p.type==="element"&&p.tagName==="p"&&!i?l.push(...p.children):l.push(p)}const c=r[r.length-1];c&&(i||c.type!=="element"||c.tagName!=="p")&&l.push({type:"text",value:`
`});const d={type:"element",tagName:"li",properties:s,children:l};return e.patch(t,d),e.applyData(t,d)}function OS(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=q3(n[r])}return t}function q3(e){const t=e.spread;return t??e.children.length>1}function BS(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const l=r[i];if(l.type==="element"&&l.tagName==="li"&&l.properties&&Array.isArray(l.properties.className)&&l.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const s={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,s),e.applyData(t,s)}function FS(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function HS(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function US(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function VS(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const l={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],l),i.push(l)}if(n.length>0){const l={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=o0(t.children[1]),c=I3(t.children[t.children.length-1]);a&&c&&(l.position={start:a,end:c}),i.push(l)}const s={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,s),e.applyData(t,s)}function WS(e,t,n){const r=n?n.children:void 0,s=(r?r.indexOf(t):1)===0?"th":"td",l=n&&n.type==="table"?n.align:void 0,a=l?l.length:t.children.length;let c=-1;const d=[];for(;++c<a;){const f=t.children[c],h={},g=l?l[c]:void 0;g&&(h.align=g);let w={type:"element",tagName:s,properties:h,children:[]};f&&(w.children=e.all(f),e.patch(f,w),w=e.applyData(f,w)),d.push(w)}const p={type:"element",tagName:"tr",properties:{},children:e.wrap(d,!0)};return e.patch(t,p),e.applyData(t,p)}function KS(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const t2=9,n2=32;function YS(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const s=[];for(;r;)s.push(r2(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return s.push(r2(t.slice(i),i>0,!1)),s.join("")}function r2(e,t,n){let r=0,i=e.length;if(t){let s=e.codePointAt(r);for(;s===t2||s===n2;)r++,s=e.codePointAt(r)}if(n){let s=e.codePointAt(i-1);for(;s===t2||s===n2;)i--,s=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function GS(e,t){const n={type:"text",value:YS(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function ZS(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const qS={blockquote:SS,break:$S,code:CS,delete:ES,emphasis:PS,footnoteReference:IS,heading:TS,html:RS,imageReference:zS,image:MS,inlineCode:AS,linkReference:_S,link:NS,listItem:DS,list:BS,paragraph:FS,root:HS,strong:US,table:VS,tableCell:KS,tableRow:WS,text:GS,thematicBreak:ZS,toml:ll,yaml:ll,definition:ll,footnoteDefinition:ll};function ll(){}const Q3=-1,uc=0,ns=1,Ia=2,p0=3,f0=4,h0=5,g0=6,X3=7,J3=8,i2=typeof self=="object"?self:globalThis,QS=(e,t)=>{const n=(i,s)=>(e.set(s,i),i),r=i=>{if(e.has(i))return e.get(i);const[s,l]=t[i];switch(s){case uc:case Q3:return n(l,i);case ns:{const a=n([],i);for(const c of l)a.push(r(c));return a}case Ia:{const a=n({},i);for(const[c,d]of l)a[r(c)]=r(d);return a}case p0:return n(new Date(l),i);case f0:{const{source:a,flags:c}=l;return n(new RegExp(a,c),i)}case h0:{const a=n(new Map,i);for(const[c,d]of l)a.set(r(c),r(d));return a}case g0:{const a=n(new Set,i);for(const c of l)a.add(r(c));return a}case X3:{const{name:a,message:c}=l;return n(new i2[a](c),i)}case J3:return n(BigInt(l),i);case"BigInt":return n(Object(BigInt(l)),i);case"ArrayBuffer":return n(new Uint8Array(l).buffer,l);case"DataView":{const{buffer:a}=new Uint8Array(l);return n(new DataView(a),l)}}return n(new i2[s](l),i)};return r},o2=e=>QS(new Map,e)(0),oi="",{toString:XS}={},{keys:JS}=Object,yo=e=>{const t=typeof e;if(t!=="object"||!e)return[uc,t];const n=XS.call(e).slice(8,-1);switch(n){case"Array":return[ns,oi];case"Object":return[Ia,oi];case"Date":return[p0,oi];case"RegExp":return[f0,oi];case"Map":return[h0,oi];case"Set":return[g0,oi];case"DataView":return[ns,n]}return n.includes("Array")?[ns,n]:n.includes("Error")?[X3,n]:[Ia,n]},al=([e,t])=>e===uc&&(t==="function"||t==="symbol"),e$=(e,t,n,r)=>{const i=(l,a)=>{const c=r.push(l)-1;return n.set(a,c),c},s=l=>{if(n.has(l))return n.get(l);let[a,c]=yo(l);switch(a){case uc:{let p=l;switch(c){case"bigint":a=J3,p=l.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);p=null;break;case"undefined":return i([Q3],l)}return i([a,p],l)}case ns:{if(c){let h=l;return c==="DataView"?h=new Uint8Array(l.buffer):c==="ArrayBuffer"&&(h=new Uint8Array(l)),i([c,[...h]],l)}const p=[],f=i([a,p],l);for(const h of l)p.push(s(h));return f}case Ia:{if(c)switch(c){case"BigInt":return i([c,l.toString()],l);case"Boolean":case"Number":case"String":return i([c,l.valueOf()],l)}if(t&&"toJSON"in l)return s(l.toJSON());const p=[],f=i([a,p],l);for(const h of JS(l))(e||!al(yo(l[h])))&&p.push([s(h),s(l[h])]);return f}case p0:return i([a,l.toISOString()],l);case f0:{const{source:p,flags:f}=l;return i([a,{source:p,flags:f}],l)}case h0:{const p=[],f=i([a,p],l);for(const[h,g]of l)(e||!(al(yo(h))||al(yo(g))))&&p.push([s(h),s(g)]);return f}case g0:{const p=[],f=i([a,p],l);for(const h of l)(e||!al(yo(h)))&&p.push(s(h));return f}}const{message:d}=l;return i([a,{name:c,message:d}],l)};return s},s2=(e,{json:t,lossy:n}={})=>{const r=[];return e$(!(t||n),!!t,new Map,r)(e),r},Ta=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?o2(s2(e,t)):structuredClone(e):(e,t)=>o2(s2(e,t));function t$(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function n$(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function r$(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||t$,r=e.options.footnoteBackLabel||n$,i=e.options.footnoteLabel||"Footnotes",s=e.options.footnoteLabelTagName||"h2",l=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let c=-1;for(;++c<e.footnoteOrder.length;){const d=e.footnoteById.get(e.footnoteOrder[c]);if(!d)continue;const p=e.all(d),f=String(d.identifier).toUpperCase(),h=oo(f.toLowerCase());let g=0;const w=[],v=e.footnoteCounts.get(f);for(;v!==void 0&&++g<=v;){w.length>0&&w.push({type:"text",value:" "});let L=typeof n=="string"?n:n(c,g);typeof L=="string"&&(L={type:"text",value:L}),w.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+h+(g>1?"-"+g:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,g),className:["data-footnote-backref"]},children:Array.isArray(L)?L:[L]})}const S=p[p.length-1];if(S&&S.type==="element"&&S.tagName==="p"){const L=S.children[S.children.length-1];L&&L.type==="text"?L.value+=" ":S.children.push({type:"text",value:" "}),S.children.push(...w)}else p.push(...w);const x={type:"element",tagName:"li",properties:{id:t+"fn-"+h},children:e.wrap(p,!0)};e.patch(d,x),a.push(x)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...Ta(l),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const e5=function(e){if(e==null)return l$;if(typeof e=="function")return dc(e);if(typeof e=="object")return Array.isArray(e)?i$(e):o$(e);if(typeof e=="string")return s$(e);throw new Error("Expected function, string, or object as test")};function i$(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=e5(e[n]);return dc(r);function r(...i){let s=-1;for(;++s<t.length;)if(t[s].apply(this,i))return!0;return!1}}function o$(e){const t=e;return dc(n);function n(r){const i=r;let s;for(s in e)if(i[s]!==t[s])return!1;return!0}}function s$(e){return dc(t);function t(n){return n&&n.type===e}}function dc(e){return t;function t(n,r,i){return!!(a$(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function l$(){return!0}function a$(e){return e!==null&&typeof e=="object"&&"type"in e}const t5=[],c$=!0,l2=!1,u$="skip";function d$(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const s=e5(i),l=r?-1:1;a(e,void 0,[])();function a(c,d,p){const f=c&&typeof c=="object"?c:{};if(typeof f.type=="string"){const g=typeof f.tagName=="string"?f.tagName:typeof f.name=="string"?f.name:void 0;Object.defineProperty(h,"name",{value:"node ("+(c.type+(g?"<"+g+">":""))+")"})}return h;function h(){let g=t5,w,v,S;if((!t||s(c,d,p[p.length-1]||void 0))&&(g=p$(n(c,p)),g[0]===l2))return g;if("children"in c&&c.children){const x=c;if(x.children&&g[0]!==u$)for(v=(r?x.children.length:-1)+l,S=p.concat(x);v>-1&&v<x.children.length;){const L=x.children[v];if(w=a(L,v,S)(),w[0]===l2)return w;v=typeof w[1]=="number"?w[1]:v+l}}return g}}}function p$(e){return Array.isArray(e)?e:typeof e=="number"?[c$,e]:e==null?t5:[e]}function n5(e,t,n,r){let i,s,l;typeof t=="function"&&typeof n!="function"?(s=void 0,l=t,i=n):(s=t,l=n,i=r),d$(e,s,a,i);function a(c,d){const p=d[d.length-1],f=p?p.children.indexOf(c):void 0;return l(c,f,p)}}const _1={}.hasOwnProperty,f$={};function h$(e,t){const n=t||f$,r=new Map,i=new Map,s=new Map,l={...qS,...n.handlers},a={all:d,applyData:m$,definitionById:r,footnoteById:i,footnoteCounts:s,footnoteOrder:[],handlers:l,one:c,options:n,patch:g$,wrap:L$};return n5(e,function(p){if(p.type==="definition"||p.type==="footnoteDefinition"){const f=p.type==="definition"?r:i,h=String(p.identifier).toUpperCase();f.has(h)||f.set(h,p)}}),a;function c(p,f){const h=p.type,g=a.handlers[h];if(_1.call(a.handlers,h)&&g)return g(a,p,f);if(a.options.passThrough&&a.options.passThrough.includes(h)){if("children"in p){const{children:v,...S}=p,x=Ta(S);return x.children=a.all(p),x}return Ta(p)}return(a.options.unknownHandler||x$)(a,p,f)}function d(p){const f=[];if("children"in p){const h=p.children;let g=-1;for(;++g<h.length;){const w=a.one(h[g],p);if(w){if(g&&h[g-1].type==="break"&&(!Array.isArray(w)&&w.type==="text"&&(w.value=a2(w.value)),!Array.isArray(w)&&w.type==="element")){const v=w.children[0];v&&v.type==="text"&&(v.value=a2(v.value))}Array.isArray(w)?f.push(...w):f.push(w)}}}return f}}function g$(e,t){e.position&&(t.position=Xb(e))}function m$(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,s=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const l="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:l}}n.type==="element"&&s&&Object.assign(n.properties,Ta(s)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function x$(e,t){const n=t.data||{},r="value"in t&&!(_1.call(n,"hProperties")||_1.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function L$(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function a2(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function c2(e,t){const n=h$(e,t),r=n.one(e,void 0),i=r$(n),s=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&s.children.push({type:"text",value:`
`},i),s}function y$(e,t){return e&&"run"in e?async function(n,r){const i=c2(n,{file:r,...t});await e.run(i,r)}:function(n,r){return c2(n,{file:r,...e||t})}}function u2(e){if(e)throw e}var Ul=Object.prototype.hasOwnProperty,r5=Object.prototype.toString,d2=Object.defineProperty,p2=Object.getOwnPropertyDescriptor,f2=function(t){return typeof Array.isArray=="function"?Array.isArray(t):r5.call(t)==="[object Array]"},h2=function(t){if(!t||r5.call(t)!=="[object Object]")return!1;var n=Ul.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&Ul.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||Ul.call(t,i)},g2=function(t,n){d2&&n.name==="__proto__"?d2(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},m2=function(t,n){if(n==="__proto__")if(Ul.call(t,n)){if(p2)return p2(t,n).value}else return;return t[n]},v$=function e(){var t,n,r,i,s,l,a=arguments[0],c=1,d=arguments.length,p=!1;for(typeof a=="boolean"&&(p=a,a=arguments[1]||{},c=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});c<d;++c)if(t=arguments[c],t!=null)for(n in t)r=m2(a,n),i=m2(t,n),a!==i&&(p&&i&&(h2(i)||(s=f2(i)))?(s?(s=!1,l=r&&f2(r)?r:[]):l=r&&h2(r)?r:{},g2(a,{name:n,newValue:e(p,l,i)})):typeof i<"u"&&g2(a,{name:n,newValue:i}));return a};const mu=Ma(v$);function N1(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function w$(){const e=[],t={run:n,use:r};return t;function n(...i){let s=-1;const l=i.pop();if(typeof l!="function")throw new TypeError("Expected function as last argument, not "+l);a(null,...i);function a(c,...d){const p=e[++s];let f=-1;if(c){l(c);return}for(;++f<i.length;)(d[f]===null||d[f]===void 0)&&(d[f]=i[f]);i=d,p?b$(p,a)(...d):l(null,...d)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function b$(e,t){let n;return r;function r(...l){const a=e.length>l.length;let c;a&&l.push(i);try{c=e.apply(this,l)}catch(d){const p=d;if(a&&n)throw p;return i(p)}a||(c&&c.then&&typeof c.then=="function"?c.then(s,i):c instanceof Error?i(c):s(c))}function i(l,...a){n||(n=!0,t(l,...a))}function s(l){i(null,l)}}const jn={basename:k$,dirname:j$,extname:S$,join:$$,sep:"/"};function k$(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Ns(e);let n=0,r=-1,i=e.length,s;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else r<0&&(s=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let l=-1,a=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else l<0&&(s=!0,l=i+1),a>-1&&(e.codePointAt(i)===t.codePointAt(a--)?a<0&&(r=i):(a=-1,r=l));return n===r?r=l:r<0&&(r=e.length),e.slice(n,r)}function j$(e){if(Ns(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function S$(e){Ns(e);let t=e.length,n=-1,r=0,i=-1,s=0,l;for(;t--;){const a=e.codePointAt(t);if(a===47){if(l){r=t+1;break}continue}n<0&&(l=!0,n=t+1),a===46?i<0?i=t:s!==1&&(s=1):i>-1&&(s=-1)}return i<0||n<0||s===0||s===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function $$(...e){let t=-1,n;for(;++t<e.length;)Ns(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":C$(n)}function C$(e){Ns(e);const t=e.codePointAt(0)===47;let n=E$(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function E$(e,t){let n="",r=0,i=-1,s=0,l=-1,a,c;for(;++l<=e.length;){if(l<e.length)a=e.codePointAt(l);else{if(a===47)break;a=47}if(a===47){if(!(i===l-1||s===1))if(i!==l-1&&s===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),i=l,s=0;continue}}else if(n.length>0){n="",r=0,i=l,s=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,l):n=e.slice(i+1,l),r=l-i-1;i=l,s=0}else a===46&&s>-1?s++:s=-1}return n}function Ns(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const P$={cwd:I$};function I$(){return"/"}function D1(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function T$(e){if(typeof e=="string")e=new URL(e);else if(!D1(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return R$(e)}function R$(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const xu=["history","path","basename","stem","extname","dirname"];class i5{constructor(t){let n;t?D1(t)?n={path:t}:typeof t=="string"||z$(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":P$.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<xu.length;){const s=xu[r];s in n&&n[s]!==void 0&&n[s]!==null&&(this[s]=s==="history"?[...n[s]]:n[s])}let i;for(i in n)xu.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?jn.basename(this.path):void 0}set basename(t){yu(t,"basename"),Lu(t,"basename"),this.path=jn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?jn.dirname(this.path):void 0}set dirname(t){x2(this.basename,"dirname"),this.path=jn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?jn.extname(this.path):void 0}set extname(t){if(Lu(t,"extname"),x2(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=jn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){D1(t)&&(t=T$(t)),yu(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?jn.basename(this.path,this.extname):void 0}set stem(t){yu(t,"stem"),Lu(t,"stem"),this.path=jn.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new wt(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Lu(e,t){if(e&&e.includes(jn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+jn.sep+"`")}function yu(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function x2(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function z$(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const M$=function(e){const r=this.constructor.prototype,i=r[e],s=function(){return i.apply(s,arguments)};return Object.setPrototypeOf(s,r),s},A$={}.hasOwnProperty;class m0 extends M${constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=w$()}copy(){const t=new m0;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(mu(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(bu("data",this.frozen),this.namespace[t]=n,this):A$.call(this.namespace,t)&&this.namespace[t]||void 0:t?(bu("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=cl(t),r=this.parser||this.Parser;return vu("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),vu("process",this.parser||this.Parser),wu("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(s,l){const a=cl(t),c=r.parse(a);r.run(c,a,function(p,f,h){if(p||!f||!h)return d(p);const g=f,w=r.stringify(g,h);D$(w)?h.value=w:h.result=w,d(p,h)});function d(p,f){p||!f?l(p):s?s(f):n(void 0,f)}}}processSync(t){let n=!1,r;return this.freeze(),vu("processSync",this.parser||this.Parser),wu("processSync",this.compiler||this.Compiler),this.process(t,i),y2("processSync","process",n),r;function i(s,l){n=!0,u2(s),r=l}}run(t,n,r){L2(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?s(void 0,r):new Promise(s);function s(l,a){const c=cl(n);i.run(t,c,d);function d(p,f,h){const g=f||t;p?a(p):l?l(g):r(void 0,g,h)}}}runSync(t,n){let r=!1,i;return this.run(t,n,s),y2("runSync","run",r),i;function s(l,a){u2(l),i=a,r=!0}}stringify(t,n){this.freeze();const r=cl(n),i=this.compiler||this.Compiler;return wu("stringify",i),L2(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(bu("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?a(t):l(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function s(d){if(typeof d=="function")c(d,[]);else if(typeof d=="object")if(Array.isArray(d)){const[p,...f]=d;c(p,f)}else l(d);else throw new TypeError("Expected usable value, not `"+d+"`")}function l(d){if(!("plugins"in d)&&!("settings"in d))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(d.plugins),d.settings&&(i.settings=mu(!0,i.settings,d.settings))}function a(d){let p=-1;if(d!=null)if(Array.isArray(d))for(;++p<d.length;){const f=d[p];s(f)}else throw new TypeError("Expected a list of plugins, not `"+d+"`")}function c(d,p){let f=-1,h=-1;for(;++f<r.length;)if(r[f][0]===d){h=f;break}if(h===-1)r.push([d,...p]);else if(p.length>0){let[g,...w]=p;const v=r[h][1];N1(v)&&N1(g)&&(g=mu(!0,v,g)),r[h]=[d,g,...w]}}}}const _$=new m0().freeze();function vu(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function wu(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function bu(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function L2(e){if(!N1(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function y2(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function cl(e){return N$(e)?e:new i5(e)}function N$(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function D$(e){return typeof e=="string"||O$(e)}function O$(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const B$="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",v2=[],w2={allowDangerousHtml:!0},F$=/^(https?|ircs?|mailto|xmpp)$/i,H$=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function qi(e){const t=U$(e),n=V$(e);return W$(t.runSync(t.parse(n),n),e)}function U$(e){const t=e.rehypePlugins||v2,n=e.remarkPlugins||v2,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...w2}:w2;return _$().use(jS).use(n).use(y$,r).use(t)}function V$(e){const t=e.children||"",n=new i5;return typeof t=="string"&&(n.value=t),n}function W$(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,s=t.disallowedElements,l=t.skipHtml,a=t.unwrapDisallowed,c=t.urlTransform||K$;for(const p of H$)Object.hasOwn(t,p.from)&&(""+p.from+(p.to?"use `"+p.to+"` instead":"remove it")+B$+p.id,void 0);return n5(e,d),rk(e,{Fragment:o.Fragment,components:i,ignoreInvalidStyle:!0,jsx:o.jsx,jsxs:o.jsxs,passKeys:!0,passNode:!0});function d(p,f,h){if(p.type==="raw"&&h&&typeof f=="number")return l?h.children.splice(f,1):h.children[f]={type:"text",value:p.value},f;if(p.type==="element"){let g;for(g in fu)if(Object.hasOwn(fu,g)&&Object.hasOwn(p.properties,g)){const w=p.properties[g],v=fu[g];(v===null||v.includes(p.tagName))&&(p.properties[g]=c(String(w||""),g,p))}}if(p.type==="element"){let g=n?!n.includes(p.tagName):s?s.includes(p.tagName):!1;if(!g&&r&&typeof f=="number"&&(g=!r(p,f,h)),g&&h&&typeof f=="number")return a&&p.children?h.children.splice(f,1,...p.children):h.children.splice(f,1),f}}}function K$(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||F$.test(e.slice(0,t))?e:""}const O1=u.div`
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
`;function so({markdown:e,fallback:t=null}){const n=e==null?void 0:e.trim();return n?o.jsx(O1,{children:o.jsx(qi,{children:n})}):o.jsx(o.Fragment,{children:t})}const Y$=we`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,G$=we`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,Z$=u.button`
  position: fixed;
  inset: 0;
  z-index: 113;
  border: none;
  margin: 0;
  padding: 0;
  background: rgba(0, 0, 0, 0.28);
  cursor: default;
  -webkit-tap-highlight-color: transparent;
  animation: ${G$} 0.52s cubic-bezier(0.25, 0.85, 0.3, 1) forwards;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: -4px;
  }
`,q$=u.div`
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
`,Q$=u.div`
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
  animation: ${Y$} 0.42s cubic-bezier(0.25, 0.8, 0.25, 1) both;
  -webkit-tap-highlight-color: transparent;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary400};
    outline-offset: 2px;
  }
`,X$=u.div`
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
`,J$=u.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
  padding-right: 36px;
`,eC=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
`,tC=u.span`
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
  line-height: 1.35;
`,nC=u.div`
  position: absolute;
  top: -2px;
  right: -4px;
  display: flex;
  align-items: center;
  justify-content: center;
`,rC=u.div`
  font-size: 0.88rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text700};

  .star {
    color: #e8b923;
    margin-right: 4px;
  }
`,iC=u.div`
  font-size: 0.86rem;
  color: ${({theme:e})=>e.colors.text700};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,oC=u.div`
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.45;
  color: ${({theme:e})=>e.colors.text700};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,sC=u.span`
  margin-top: auto;
  padding-top: 6px;
  font-size: 0.82rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.primary600};
`,lC=({place:e,onClose:t,onOpenDetail:n})=>{const r=Wn(e.regionId),i=e.venueKind??"명상지",s=[r==null?void 0:r.name,e.hashtags[0]??i].filter(Boolean).join(" · "),l=e.rating!=null||e.reviewCount!=null&&e.reviewCount>0,a=m.useCallback(()=>{n()},[n]),c=p=>{p.stopPropagation()},d=p=>{(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),a())};return o.jsxs(o.Fragment,{children:[o.jsx(Z$,{type:"button",onClick:t,"aria-label":"닫기"}),o.jsx(q$,{children:o.jsxs(Q$,{role:"button",tabIndex:0,onClick:a,onKeyDown:d,"aria-label":`${e.name} 상세 페이지로 이동`,children:[o.jsx(X$,{children:o.jsx("img",{src:Xy(e.thumbnailUrl),alt:"",draggable:!1,loading:"lazy",decoding:"async",sizes:"min(100vw - 32px, 400px)"})}),o.jsxs(J$,{children:[o.jsx(eC,{children:o.jsx(tC,{children:e.name})}),o.jsx(nC,{onClick:c,onPointerDown:c,children:o.jsx(lc,{placeId:e.id})}),l&&o.jsxs(rC,{children:[e.rating!=null&&o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"star","aria-hidden":!0,children:"★"}),e.rating.toFixed(1)]}),e.reviewCount!=null&&o.jsxs("span",{children:[e.rating!=null?" · ":"","후기 ",e.reviewCount]})]}),o.jsx(iC,{children:s}),o.jsx(oC,{children:o.jsx(so,{markdown:e.shortDescription})}),o.jsx(sC,{children:"탭하여 상세 보기 →"})]})]})})]})},aC={minLat:36.45,maxLat:37.65,minLng:126.75,maxLng:127.15};function cC(e){let t=2166136261;for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619);const n=(t>>>0)%10001/1e4,r=(Math.imul(t,7919)>>>0)%10001/1e4;return[n,r]}function ku(e){if(Number.isFinite(e.lat)&&Number.isFinite(e.lng))return{lat:e.lat,lng:e.lng};const t=Sa.find(a=>a.id===e.regionId)??aC,[n,r]=cC(`${e.id}\0${e.address}`),i=.1,s=t.minLat+(t.maxLat-t.minLat)*(i+(1-2*i)*n),l=t.minLng+(t.maxLng-t.minLng)*(i+(1-2*i)*r);return{lat:s,lng:l}}function Oo(){var e,t;return!!((t=(e=window.naver)==null?void 0:e.maps)!=null&&t.Map)}function Bo(){var t,n;const e=(n=(t=window.naver)==null?void 0:t.maps)==null?void 0:n.Service;return typeof(e==null?void 0:e.geocode)=="function"}function o5(){return document.querySelector('script[src*="oapi.map.naver.com"]')}function B1(e){return e.src.includes("geocoder")}async function b2(e,t,n=25e3){e()||await new Promise((r,i)=>{const s=Date.now(),l=window.setInterval(()=>{e()?(window.clearInterval(l),r()):Date.now()-s>n&&(window.clearInterval(l),i(new Error(`${t} 로드 시간 초과`)))},50)})}async function uC(e){await new Promise((t,n)=>{const r=`__naverMapsCb_${Date.now()}`;window[r]=()=>{t(),delete window[r]};const i=document.createElement("script");i.async=!0,i.onerror=()=>{delete window[r],n(new Error("Naver Maps 스크립트 로드 실패"))},i.src=`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${encodeURIComponent(e)}&submodules=geocoder&callback=${r}`,document.head.appendChild(i)})}function dC(){const e=o5();return!e||B1(e)||!Oo()?!1:!Bo()}async function s5(e){const t=e==null?void 0:e.trim();if(!t)return!1;if(Oo()&&Bo())return!0;if(dC())throw new Error("지도 API가 geocoder 없이 로드되었습니다. 페이지를 새로고침한 뒤 다시 검색해 주세요.");const n=o5();if(n&&B1(n))try{return await b2(()=>Oo()&&Bo(),"Naver Maps(geocoder)"),Oo()&&Bo()}catch{return!1}n&&!B1(n)&&n.remove(),await uC(t);try{return await b2(()=>Oo()&&Bo(),"Naver Maps(geocoder)"),!0}catch{return!1}}async function pC(e){try{return await s5(e)}catch{return!1}}async function F1(e){return s5(e)}const fC=u.div`
  position: relative;
  width: 100%;
  flex: 1;
  min-height: ${({$fillViewport:e})=>e?"0":"min(62dvh, 520px)"};
  border-radius: ${({$fillViewport:e,theme:t})=>e?"0":t.radii.lg};
  overflow: hidden;
  background: ${({theme:e})=>e.colors.bg100};
`,hC=u.button`
  ${({$floating:e,$rightInsetPx:t=0})=>e?Ne`
          position: fixed;
          z-index: 108;
          right: calc(14px + ${t}px);
          bottom: calc(64px + env(safe-area-inset-bottom, 0px));
        `:Ne`
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
`,gC=u.div`
  width: 100%;
  height: 100%;
  min-height: ${({$fillViewport:e})=>e?"100%":"min(62dvh, 520px)"};
`;function mC(e){return e<=9?100:e<=11?72:e<=13?48:0}function xC(e,t){const n=new Set(e.map((i,s)=>s)),r=[];for(;n.size>0;){const i=n.values().next().value,s=new Set([i]);n.delete(i);let l=!0;for(;l;){l=!1;for(const a of[...n]){const c=e[a];let d=!1;for(const p of s){const f=e[p],h=c.x-f.x,g=c.y-f.y;if(h*h+g*g<=t*t){d=!0;break}}d&&(s.add(a),n.delete(a),l=!0)}}r.push([...s])}return r}function LC(e){const t=e;return typeof t.lat=="function"&&typeof t.lng=="function"?{lat:t.lat(),lng:t.lng()}:{lat:37.5665,lng:126.978}}function yC(e){const t=e.replace(/[^a-zA-Z0-9_-]/g,"_");return t.length>0?t.slice(0,48):"x"}function vC(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const l5=88,a5=34,c5=13,wC=7,bC=l5,u5=a5+c5,kC=l5/2,jC=u5,SC="#a78bfa",$C="#8b5cf6",CC="#a78bfa";function EC(e,t){const n=vC(t);return`<div style="width:${bC}px;height:${u5}px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;filter:drop-shadow(0 2px 3px rgba(0,0,0,.24));pointer-events:auto" aria-hidden="true">
<div style="width:100%;height:${a5}px;box-sizing:border-box;background:${SC};border-radius:6px;padding:3px 4px;display:flex;align-items:center;justify-content:center">
<span style="display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;box-sizing:border-box;margin:0;color:#fff;font-size:10px;font-weight:800;line-height:1.2;text-align:center;word-break:keep-all;font-family:system-ui,-apple-system,'Segoe UI',sans-serif;letter-spacing:-0.02em;text-shadow:0 1px 2px rgba(0,0,0,.45)">${n}</span>
</div>
<div style="width:${wC}px;height:${c5}px;box-sizing:border-box;background:${$C};border-radius:0 0 3px 3px;flex-shrink:0"></div>
</div>`}function PC(e,t){const n=`clf_${yC(t)}`,r=e>99?"99+":String(e),i=e>99?10:e>9?11:13;return`<div style="width:38px;height:38px;pointer-events:auto" aria-hidden="true">
<svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
<defs>
<filter id="${n}" x="-40%" y="-40%" width="180%" height="180%">
<feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#2f0051" flood-opacity="0.42"/>
</filter>
</defs>
<circle cx="19" cy="19" r="15" fill="${CC}" filter="url(#${n})"/>
<text x="19" y="19" text-anchor="middle" dominant-baseline="central" fill="#fff" font-size="${i}" font-weight="800" font-family="system-ui,-apple-system,'Segoe UI',sans-serif">${r}</text>
</svg>
</div>`}const k2=({places:e,onSelectPlace:t,fillViewport:n=!1,sidePanelInsetPx:r=0})=>{const i=m.useRef(null),s=m.useRef(null),l=m.useRef([]),a=m.useRef(null),c=m.useRef(null),[d,p]=m.useState(!1),[f,h]=m.useState(!1),g=m.useRef(e),w=m.useRef(t);g.current=e,w.current=t;const v=m.useCallback(()=>{const $=s.current;if(!$||typeof navigator>"u"||!navigator.geolocation)return;const I=window.naver,k=I==null?void 0:I.maps;if(!k)return;const j=k.LatLng,z=$.panTo,R=$.setZoom,T=(P,E)=>{z==null||z.call($,new j(P,E)),R==null||R.call($,16)};if(c.current){T(c.current.lat,c.current.lng);return}h(!0),navigator.geolocation.getCurrentPosition(P=>{h(!1),T(P.coords.latitude,P.coords.longitude)},()=>h(!1),{enableHighAccuracy:!0,timeout:15e3,maximumAge:6e4})},[]),S=()=>{l.current.forEach($=>$.setMap(null)),l.current=[]},x=$=>{const I=window.naver,k=I==null?void 0:I.maps;if(!$||!k)return;const j=k.Marker,z=k.LatLng,R=k.Point,T=k.Event,P=$.getProjection,E=$.getZoom,A=$.setZoom,N=$.panTo;if(!P||!E||!A||!N)return;const F=g.current;if(F.length===0){S();return}const G=P.call($);if(!G||typeof G.fromCoordToOffset!="function")return;const q=F.map(b=>{const{lat:H,lng:_}=ku(b);return{place:b,latlng:new z(H,_)}});let M;try{M=q.map(b=>{const H=G.fromCoordToOffset(b.latlng);return{x:H.x,y:H.y}})}catch{return}const O=E.call($)??11,C=mC(O),X=M.some(b=>!Number.isFinite(b.x)||!Number.isFinite(b.y))?q.map((b,H)=>[H]):xC(M,C);S();for(const[b,H]of X.entries()){const _=H.map(fe=>q[fe]);if(_.length===1){const{place:fe,latlng:xe}=_[0],$e=new j({position:xe,map:$,title:fe.name,icon:{content:EC(fe.id,fe.name),anchor:new R(kC,jC)}});T.addListener($e,"click",()=>w.current(fe.id)),l.current.push($e);continue}let Z=0,V=0;for(const fe of _){const{lat:xe,lng:$e}=LC(fe.latlng);Z+=xe,V+=$e}const ee=_.length,ue=new z(Z/ee,V/ee),be=new j({position:ue,map:$,icon:{content:PC(ee,`g${b}_${ee}`),anchor:new R(26,26)}});T.addListener(be,"click",()=>{const fe=E.call($)??11;A.call($,Math.min(fe+2,19)),N.call($,ue)}),l.current.push(be)}};m.useEffect(()=>{const $=i.current;if(!$)return;let I=!1;return(async()=>{if(!await pC("233s0l2jzo")||I||!i.current)return;const z=window.naver.maps,R=z.Map,T=z.LatLng,P=z.LatLngBounds,E=z.Event,A=new R($,{center:new T(37.5665,126.978),zoom:11,scrollWheel:!0,scaleControl:!1,mapDataControl:!1,zoomControl:!1});if(I)return;s.current=A,p(!0);const N=()=>{x(A)};E.addListener(A,"idle",N),N();const F=g.current;if(F.length>0){const G=new P;for(const M of F){const{lat:O,lng:C}=ku(M);G.extend(new T(O,C))}const q=A.fitBounds;q==null||q.call(A,G,{top:52,right:20,bottom:100,left:20})}})(),()=>{var k;I=!0,S(),c.current=null,(k=a.current)==null||k.setMap(null),a.current=null,s.current=null,p(!1),i.current&&(i.current.innerHTML="")}},[]),m.useEffect(()=>{g.current=e;const $=s.current;if(!$||(x($),e.length===0))return;const I=window.naver,k=I==null?void 0:I.maps,j=k==null?void 0:k.LatLng,z=k==null?void 0:k.LatLngBounds;if(!j||!z)return;const R=new z;for(const P of e){const{lat:E,lng:A}=ku(P);R.extend(new j(E,A))}const T=$.fitBounds;T==null||T.call($,R,{top:52,right:20,bottom:100,left:20})},[e]),m.useEffect(()=>{if(!d||typeof navigator>"u"||!navigator.geolocation)return;const $='<div style="width:16px;height:16px;background:#4B0082;border:3px solid #fff;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,.28)" aria-hidden="true"></div>',I=(j,z)=>{c.current={lat:j,lng:z};const R=s.current;if(!R)return;const T=window.naver,P=T==null?void 0:T.maps;if(!P)return;const E=P.LatLng,A=P.Marker,N=P.Point,F=new E(j,z),G=a.current;if(G&&typeof G.setPosition=="function"){G.setPosition(F);return}G==null||G.setMap(null),a.current=new A({position:F,map:R,zIndex:1e3,title:"내 위치",icon:{content:$,anchor:new N(8,8)}})},k=navigator.geolocation.watchPosition(j=>I(j.coords.latitude,j.coords.longitude),()=>{},{enableHighAccuracy:!0,maximumAge:15e3,timeout:3e4});return()=>{navigator.geolocation.clearWatch(k)}},[d]);const L=typeof navigator<"u"&&!!navigator.geolocation,y=o.jsx(hC,{$floating:n,$rightInsetPx:n?r:0,type:"button","aria-label":"현재 위치로 이동",title:"현재 위치로 이동",disabled:!d||f||!L,onClick:v,children:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":!0,children:[o.jsx("circle",{cx:"12",cy:"12",r:"7"}),o.jsx("circle",{cx:"12",cy:"12",r:"1.5",fill:"currentColor",stroke:"none"}),o.jsx("path",{d:"M12 2v2M12 20v2M2 12h2M20 12h2"})]})});return o.jsxs(fC,{$fillViewport:n,children:[o.jsx(gC,{ref:i,$fillViewport:n,role:"application","aria-label":"명상지 지도"}),n?kx.createPortal(y,document.body):y]})},j2=96,S2=960,H1=400;function IC(){const[e,t]=m.useState(()=>typeof window<"u"&&window.matchMedia(`(max-width: ${S2}px)`).matches);return m.useEffect(()=>{const n=window.matchMedia(`(max-width: ${S2}px)`),r=()=>t(n.matches);return n.addEventListener("change",r),()=>n.removeEventListener("change",r)},[]),e}const $2=u.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 20px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};

  @media (max-width: 960px) {
    padding: 20px 14px calc(48px + env(safe-area-inset-bottom, 0px));
  }
`,TC=u.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
`,RC=u.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,zC=u.button`
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
`,MC=u.button`
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
`,AC=u.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-areas: "filter content";
  gap: 28px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-areas: "content";
  }
`,_C=u.main`
  grid-area: content;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,NC=u.aside`
  grid-area: filter;

  @media (max-width: 960px) {
    display: none;
  }
`,DC=u.button`
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
`,OC=u.div`
  position: fixed;
  inset: 0;
  z-index: 125;
`,BC=we`from { opacity: 0; } to { opacity: 1; }`,FC=we`from { transform: translateX(100%); } to { transform: translateX(0); }`,HC=u.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  animation: ${BC} 0.2s ease;
`,UC=u.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: min(90vw, 360px);
  background: ${({theme:e})=>e.colors.white};
  padding: 20px;
  overflow-y: auto;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);
  animation: ${FC} 0.25s ease;
`,VC=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,WC=u.button`
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
`,ju=u.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,ul=u.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text700};
`,KC=u.div`
  position: fixed;
  z-index: 40;
  top: 0;
  left: 0;
  right: 0;
  bottom: calc(56px + env(safe-area-inset-bottom, 0px));
  background: ${({theme:e})=>e.colors.bg100};
`,C2=u.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  min-height: 0;
`,E2=u.div`
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
`,P2=u.div`
  display: grid;
  grid-template-columns: 44px 1fr 44px;
  align-items: center;
  gap: 8px;
  max-width: 1200px;
  margin: 0 auto;
`,dl=u.button`
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
`,I2=u.span`
  text-align: center;
  font-weight: 700;
  font-size: 1.05rem;
  color: ${({theme:e})=>e.colors.text900};
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,T2=u.div`
  position: fixed;
  left: 50%;
  bottom: calc(64px + env(safe-area-inset-bottom, 0px));
  transform: translateX(-50%);
  z-index: 110;
  display: flex;
  justify-content: center;
`,YC=u.button`
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
`,GC=u.button`
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
`,ZC=u.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: calc(56px + env(safe-area-inset-bottom, 0px));
  height: calc(100dvh - 56px - env(safe-area-inset-bottom, 0px));
  z-index: 95;
  transform: translateY(${({$ty:e})=>e}px);
  ${({$dragging:e})=>e?Ne`
          transition: none;
        `:Ne`
          transition: transform 0.48s cubic-bezier(0.25, 0.85, 0.3, 1);
        `}
  display: flex;
  flex-direction: column;
  background: ${({theme:e})=>e.colors.white};
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -10px 36px rgba(0, 0, 0, 0.14);
  overflow: hidden;
  touch-action: pan-y;
`,qC=u.div`
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
`,QC=u.div`
  flex-shrink: 0;
  padding: 0 12px 8px;
`,XC=u.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 0 12px calc(12px + env(safe-area-inset-bottom, 0px));
  -webkit-overflow-scrolling: touch;
`,R2=u.p`
  margin: 0 0 12px;
  font-size: 0.92rem;
  color: ${({theme:e})=>e.colors.text700};
`,JC=u.div`
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
`,eE=u.div`
  position: relative;
  flex: 1;
  min-width: 0;
  min-height: 0;
`,tE=u.aside`
  width: min(${H1}px, 42vw);
  max-width: ${H1}px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  background: ${({theme:e})=>e.colors.white};
  border-left: 1px solid ${({theme:e})=>e.colors.primary100};
  box-shadow: -6px 0 20px rgba(0, 0, 0, 0.06);
  z-index: 2;
  min-height: 0;
`,nE=u.div`
  flex-shrink: 0;
  padding: 12px 12px 8px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary100};
`,rE=u.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 12px 12px calc(12px + env(safe-area-inset-bottom, 0px));
  -webkit-overflow-scrolling: touch;
`,Su=u.div`
  height: 1px;
`,iE=()=>{const e=ft(),{regionId:t}=Ms(),n=IC(),{filters:r,page:i,pageSize:s,setPage:l,setRegion:a,setKeyword:c,toggleTag:d,setSortBy:p,setCategory:f,resetFilters:h,isFilterOpen:g,setFilterOpen:w}=t0(),[v,S]=m.useState("list"),[x,L]=m.useState(null),y=m.useRef(null),$=m.useRef(null),I=m.useRef(null),k=m.useRef(null),j=m.useRef({active:!1,startY:0,startTy:0}),[z,R]=m.useState(0),[T,P]=m.useState(400),[E,A]=m.useState(200),[N,F]=m.useState(!1),[G,q]=m.useState(!1),M=m.useCallback(()=>{const te=k.current;if(!te)return;const Ce=te.offsetHeight,Ee=Math.max(0,Ce-j2);P(Ee),A(Math.round(Ee*.4)),R(bt=>Math.max(0,Math.min(Ee,bt)))},[]);m.useLayoutEffect(()=>{if(!n||!t)return;const te=requestAnimationFrame(()=>{M();const Ce=k.current;if(Ce){const Ee=Math.max(0,Ce.offsetHeight-j2);R(Ee)}q(!0)});return()=>cancelAnimationFrame(te)},[n,t,M]),m.useEffect(()=>{var Ce;if(!n)return;const te=()=>M();return window.addEventListener("resize",te),(Ce=window.visualViewport)==null||Ce.addEventListener("resize",te),()=>{var Ee;window.removeEventListener("resize",te),(Ee=window.visualViewport)==null||Ee.removeEventListener("resize",te)}},[n,M]),m.useEffect(()=>{t&&(a(t),l(1))},[t,a,l]);const O=en(te=>te.places),C=t?Wn(t):void 0,Q=m.useMemo(()=>x3(O),[O]),X=m.useMemo(()=>t?t==="all"?[...O]:O.filter(te=>te.regionId===t):[],[t,O]),b=m.useMemo(()=>$a(X,r),[X,r]),H=m.useMemo(()=>L3(b,r.sortBy),[b,r.sortBy]),_=m.useMemo(()=>H.slice(0,i*s),[H,i,s]),Z=_.length<H.length,V=n||v==="map",ee=x&&V?O.find(te=>te.id===x):void 0;m.useEffect(()=>{V||L(null)},[V]),m.useEffect(()=>{L(null)},[r.keyword,r.sortBy,r.tags,r.category]),m.useEffect(()=>{l(1)},[r.keyword,r.sortBy,r.tags,r.category,l]),m.useEffect(()=>{const te=n?$.current:v==="map"?I.current:null,Ce=y.current;if(!Ce||!Z)return;const Ee=new IntersectionObserver(bt=>{var sn;(sn=bt[0])!=null&&sn.isIntersecting&&l(i+1)},{root:te??void 0,rootMargin:"200px"});return Ee.observe(Ce),()=>Ee.disconnect()},[Z,n,v,i,l]);const ue=m.useCallback(te=>{const Ce=te,Ee=Math.abs(te-E),bt=Math.abs(te-T);return Ce<=Ee&&Ce<=bt?0:Ee<=bt?E:T},[E,T]),be=m.useCallback(te=>{te.currentTarget.setPointerCapture(te.pointerId),j.current={active:!0,startY:te.clientY,startTy:z},F(!0)},[z]),fe=m.useCallback(te=>{if(!j.current.active)return;const Ce=te.clientY-j.current.startY;let Ee=j.current.startTy+Ce;Ee=Math.max(0,Math.min(T,Ee)),R(Ee)},[T]),xe=m.useCallback(te=>{if(j.current.active){j.current.active=!1;try{te.currentTarget.releasePointerCapture(te.pointerId)}catch{}F(!1),R(Ce=>ue(Ce))}},[ue]);if(!t||!C)return o.jsxs($2,{children:[o.jsx(ul,{children:"해당 지역 정보를 찾지 못했어요."}),o.jsx(MC,{type:"button",onClick:()=>e("/meditation"),children:"메인으로 돌아가기"})]});const $e=()=>{n?R(0):S("list")},Re=()=>{n?R(T):S("map")},Oe=n?G?T>0&&z>=T*.5:!0:v==="map",qe=g&&o.jsxs(OC,{children:[o.jsx(HC,{onClick:()=>w(!1)}),o.jsxs(UC,{children:[o.jsxs(VC,{children:[o.jsx("h3",{style:{margin:0,fontSize:"1.2rem"},children:"필터"}),o.jsx(WC,{type:"button",onClick:()=>w(!1),children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),o.jsx(ja,{filters:r,availableTags:Q,onChangeKeyword:c,onChangeCategory:f,onToggleTag:d,onChangeSortBy:p,onReset:h})]})]}),ze=V&&ee?o.jsx(lC,{place:ee,onClose:()=>L(null),onOpenDetail:()=>{e(`/meditation/place/${ee.id}`),L(null)}}):null,Kt=Oe?o.jsx(T2,{children:o.jsx(YC,{type:"button",onClick:$e,"aria-label":"목록으로 보기",children:"목록"})}):o.jsx(T2,{children:o.jsx(GC,{type:"button",onClick:Re,"aria-label":"지도로 보기",children:"지도"})});return n?o.jsxs(o.Fragment,{children:[o.jsxs(KC,{children:[o.jsx(C2,{children:o.jsx(k2,{fillViewport:!0,places:H,onSelectPlace:L})}),o.jsx(E2,{children:o.jsxs(P2,{children:[o.jsx(dl,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(I2,{children:C.name}),o.jsx(dl,{type:"button",onClick:()=>w(!0),"aria-label":"필터",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})})})]})})]}),o.jsxs(ZC,{ref:k,$ty:G?z:T,$dragging:N,style:{visibility:G?"visible":"hidden"},"aria-label":"명상지 목록 패널",children:[o.jsx(qC,{onPointerDown:be,onPointerMove:fe,onPointerUp:xe,onPointerCancel:xe,"aria-hidden":!0}),o.jsx(QC,{children:o.jsx(Fl,{layout:"region",value:r.keyword,onChange:c,placeholder:"장소, 이름, 주소, 기관명, 태그로 검색"})}),o.jsxs(XC,{ref:$,children:[o.jsxs(R2,{children:["총 ",H.length,"곳"]}),o.jsxs(ju,{children:[_.length===0&&o.jsx(ul,{children:X.length===0?"등록된 공간이 없습니다.":"조건에 맞는 명상센터가 없어요."}),_.map(te=>o.jsx(Jo,{place:te},te.id))]}),Z&&o.jsx(Su,{ref:y})]})]}),ze,Kt,qe]}):v==="map"?o.jsxs(o.Fragment,{children:[o.jsxs(JC,{children:[o.jsxs(eE,{children:[o.jsx(C2,{children:o.jsx(k2,{fillViewport:!0,sidePanelInsetPx:H1,places:H,onSelectPlace:L})}),o.jsx(E2,{children:o.jsxs(P2,{children:[o.jsx(dl,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(I2,{children:C.name}),o.jsx(dl,{type:"button",onClick:()=>w(!0),"aria-label":"필터",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})})})]})})]}),o.jsxs(tE,{"aria-label":"명상지 목록",children:[o.jsx(nE,{children:o.jsx(Fl,{layout:"region",value:r.keyword,onChange:c,placeholder:"장소, 이름, 주소, 기관명, 태그로 검색"})}),o.jsxs(rE,{ref:I,children:[o.jsxs(R2,{children:["총 ",H.length,"곳"]}),o.jsxs(ju,{children:[_.length===0&&o.jsx(ul,{children:X.length===0?"등록된 공간이 없습니다.":"조건에 맞는 명상센터가 없어요."}),_.map(te=>o.jsx(Jo,{place:te},te.id))]}),Z&&o.jsx(Su,{ref:y})]})]})]}),ze,Kt,qe]}):o.jsxs(o.Fragment,{children:[o.jsxs($2,{children:[o.jsxs(TC,{children:[o.jsxs(RC,{children:[o.jsx(zC,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx("h2",{style:{margin:0,fontSize:"1.25rem",fontWeight:600},children:"명상지 리스트"})]}),o.jsx(DC,{type:"button",onClick:()=>w(!0),"aria-label":"필터",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})})})]}),o.jsx(Fl,{layout:"region",value:r.keyword,onChange:c,placeholder:"장소, 이름, 주소, 기관명, 태그로 검색"}),o.jsxs(AC,{children:[o.jsx(NC,{children:o.jsx(ja,{filters:r,availableTags:Q,onChangeKeyword:c,onChangeCategory:f,onToggleTag:d,onChangeSortBy:p,onReset:h})}),o.jsxs(_C,{children:[o.jsxs(ju,{children:[_.length===0&&o.jsx(ul,{children:X.length===0?"등록된 공간이 없습니다.":"조건에 맞는 명상센터가 없어요."}),_.map(te=>o.jsx(Jo,{place:te},te.id))]}),Z&&o.jsx(Su,{ref:y})]})]})]}),Kt,qe]})},z2=u.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 24px 16px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};
`,oE=u.header`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`,sE=u.button`
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
`,lE=u.div`
  flex: 1;
  min-width: 0;
`,aE=u.h1`
  margin: 0;
  font-size: 1.35rem;
  font-weight: 700;
`,cE=u.p`
  margin: 4px 0 0;
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.text700};
`,uE=u.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,dE=u.button`
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
`,pE=u.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`,fE=u.div`
  flex: 1;
  min-width: 0;
`,hE=u.h2`
  margin: 0 0 6px;
  font-size: 1.1rem;
  font-weight: 700;
`,gE=u.p`
  margin: 0;
  font-size: 0.92rem;
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.45;
`,M2=u.p`
  text-align: center;
  color: ${({theme:e})=>e.colors.text700};
  padding: 40px 16px;
`,mE=()=>{const e=ft(),{regionId:t}=Ms(),n=t?Wn(t):void 0,r=en(s=>s.experts),i=m.useMemo(()=>t?t==="all"?[...r]:r.filter(s=>s.regionIds.includes(t)):[],[t,r]);return!t||!n?o.jsx(z2,{children:o.jsx(M2,{children:"지역 정보를 찾을 수 없어요."})}):o.jsxs(z2,{children:[o.jsxs(oE,{children:[o.jsx(sE,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsxs(lE,{children:[o.jsxs(aE,{children:[n.name," 명상 전문가"]}),o.jsx(cE,{children:"프로필 · 전문 분야를 확인하고 상세로 이동하세요"})]})]}),o.jsxs(uE,{children:[i.length===0&&o.jsx(M2,{children:"이 지역에 등록된 명상 전문가가 아직 없어요."}),i.map(s=>o.jsxs(dE,{type:"button",onClick:()=>e(`/meditation/expert/${s.id}`),children:[o.jsx(pE,{src:Jy(s.avatarUrl),alt:"",loading:"lazy",decoding:"async",sizes:"64px"}),o.jsxs(fE,{children:[o.jsx(hE,{children:s.name}),o.jsx(gE,{children:s.specialties.join(" · ")})]})]},s.id))]})]})},xE="★",LE="☆";function Ra(e,t=5){const n=Math.round(Number(e)),r=Math.max(0,Math.min(t,Number.isFinite(n)?n:0));return xE.repeat(r)+LE.repeat(t-r)}const yE=5,vE=we`
  from { opacity: 0; }
  to { opacity: 1; }
`,wE=we`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`,bE=u.div`
  position: fixed;
  inset: 0;
  z-index: 400;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  animation: ${vE} 0.2s ease both;

  @media (min-width: 600px) {
    justify-content: center;
    align-items: center;
    padding: 24px;
  }
`,kE=u.div`
  background: ${({theme:e})=>e.colors.white};
  border-radius: 20px 20px 0 0;
  max-height: min(92dvh, 720px);
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${wE} 0.32s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (min-width: 600px) {
    border-radius: ${({theme:e})=>e.radii.lg};
    max-width: 440px;
    max-height: min(85dvh, 640px);
  }
`,jE=u.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 16px;
  padding-top: calc(12px + env(safe-area-inset-top, 0px));
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary100};
`,SE=u.div`
  min-width: 0;
`,$E=u.span`
  display: block;
  font-size: 1rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
`,CE=u.span`
  display: block;
  margin-top: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text700};
`,EE=u.button`
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
`,PE=u.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 18px 16px calc(24px + env(safe-area-inset-bottom, 0px));
`,IE=u.article`
  padding-bottom: 18px;
  margin-bottom: 18px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary100};

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`,TE=u.p`
  margin: 0 0 10px;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text900};
`,RE=u.div`
  margin: 0;
  font-size: 1rem;
  line-height: 1.65;
  color: ${({theme:e})=>e.colors.text700};
  white-space: pre-wrap;
  word-break: break-word;
`,zE=u.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 16px calc(12px + env(safe-area-inset-bottom, 0px));
  border-top: 1px solid ${({theme:e})=>e.colors.primary100};
  background: ${({theme:e})=>e.colors.white};
`,A2=u.button`
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
`,ME=u.span`
  font-size: 0.88rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text700};
  min-width: 4.5em;
  text-align: center;
`,d5=({open:e,onClose:t,heading:n="후기",reviews:r,pageSize:i})=>{const s=i??yE,[l,a]=m.useState(1);m.useEffect(()=>{if(!e){a(1);return}a(1)},[e,r]),m.useEffect(()=>{if(!e)return;const w=v=>{v.key==="Escape"&&(v.stopPropagation(),t())};return window.addEventListener("keydown",w,!0),()=>window.removeEventListener("keydown",w,!0)},[e,t]),m.useEffect(()=>{if(!e)return;const w=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=w}},[e]);const c=m.useCallback(w=>{w.target===w.currentTarget&&t()},[t]),d=r.length,p=d===0?0:Math.ceil(d/s),f=p===0?1:Math.min(l,p),h=m.useMemo(()=>{if(d===0)return[];const w=(f-1)*s;return r.slice(w,w+s)},[r,d,f,s]);if(m.useEffect(()=>{p>0&&l>p&&a(p)},[l,p]),!e)return null;const g=d===0?"등록된 후기가 없어요.":p>1?`총 ${d}건 · ${s}건씩 보기`:`총 ${d}건`;return o.jsx(bE,{role:"presentation",onClick:c,children:o.jsxs(kE,{role:"dialog","aria-modal":"true","aria-labelledby":"reviews-list-sheet-title",onClick:w=>w.stopPropagation(),children:[o.jsxs(jE,{children:[o.jsxs(SE,{children:[o.jsx($E,{id:"reviews-list-sheet-title",children:n}),o.jsx(CE,{children:g})]}),o.jsx(EE,{type:"button",onClick:t,"aria-label":"닫기",children:o.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),o.jsx(PE,{children:d===0?null:h.map((w,v)=>{const S=w.rating!=null?` · ${Ra(w.rating)}`:"",x=(f-1)*s+v;return o.jsxs(IE,{children:[o.jsxs(TE,{children:[w.author,S]}),o.jsx(RE,{children:w.body})]},`${w.author}-${x}`)})}),d>0&&p>1&&o.jsxs(zE,{children:[o.jsx(A2,{type:"button",onClick:()=>a(w=>Math.max(1,w-1)),disabled:f<=1,children:"이전"}),o.jsxs(ME,{children:[f," / ",p]}),o.jsx(A2,{type:"button",onClick:()=>a(w=>Math.min(p,w+1)),disabled:f>=p,children:"다음"})]})]})})},AE=[{id:"KR-11",name:"서울",slug:"seoul"},{id:"KR-26",name:"부산",slug:"busan"},{id:"KR-27",name:"대구",slug:"daegu"},{id:"KR-28",name:"인천",slug:"incheon"},{id:"KR-29",name:"광주",slug:"gwangju"},{id:"KR-30",name:"대전",slug:"daejeon"},{id:"KR-31",name:"울산",slug:"ulsan"},{id:"KR-41",name:"경기",slug:"gyeonggi"},{id:"KR-42",name:"강원",slug:"gangwon"},{id:"KR-43",name:"충북",slug:"chungbuk"},{id:"KR-44",name:"충남",slug:"chungnam"},{id:"KR-45",name:"전북",slug:"jeonbuk"},{id:"KR-46",name:"전남",slug:"jeonnam"},{id:"KR-47",name:"경북",slug:"gyeongbuk"},{id:"KR-48",name:"경남",slug:"gyeongnam"},{id:"KR-49",name:"제주",slug:"jeju"},{id:"KR-50",name:"세종",slug:"sejong"}],Gr=[...AE].sort((e,t)=>e.name.localeCompare(t.name,"ko"));function lo(e){var t;return((t=Gr.find(n=>n.id===e))==null?void 0:t.name)??e}function _E(){var e,t;return((e=Gr.find(n=>n.id==="KR-11"))==null?void 0:e.id)??((t=Gr[0])==null?void 0:t.id)??"KR-11"}function NE(e,t){const n=t.trim();if(!n)return;const r=e.programs.find(c=>{var d;return(d=c.linksClassTypes)==null?void 0:d.includes(n)});if(r)return r;const s=n.replace(/\([^)]*\)/g," ").replace(/[·]/g," ").split(/\s+/).map(c=>c.replace(/[()]/g,"").trim()).filter(c=>c.length>=2),l=c=>`${c.title} ${c.description}`.toLowerCase(),a=e.programs.find(c=>{const d=l(c);return d.includes(n.toLowerCase())?!0:s.some(p=>d.includes(p.toLowerCase()))});return a||(e.programs.find(c=>c.status==="ongoing")??e.programs[0])}const $u=u.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 0 calc(120px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};
  position: relative;
  z-index: 1;
`,Cu=u.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  padding-top: calc(16px + env(safe-area-inset-top, 0px));
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.95);
  z-index: 5;
`,Eu=u.button`
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
`,Pu=u.h1`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
`,DE=u.div`
  padding: 8px 20px 20px;
  text-align: center;
`,OE=u.img`
  width: 112px;
  height: 112px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${({theme:e})=>e.colors.primary200};
`,BE=u.h2`
  margin: 16px 0 8px;
  font-size: 1.6rem;
  font-weight: 700;
`,_2=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
`,FE=u.span`
  font-size: 0.85rem;
  padding: 4px 10px;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary50};
  color: ${({theme:e})=>e.colors.primary700};
`,HE=u.button`
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
`,vn=u.section`
  padding: 0 20px 24px;
`,Qn=u.h3`
  margin: 0 0 10px;
  font-size: 1.15rem;
  font-weight: 700;
`,Sr=u.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.65;
  color: ${({theme:e})=>e.colors.text700};
`,N2=u.ul`
  margin: 0;
  padding-left: 1.2em;
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.6;

  li {
    margin-bottom: 6px;
  }
`,D2=u.button`
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
`,O2=u.span`
  display: block;
  margin: 0 0 6px;
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
`,B2=u.span`
  display: block;
  font-size: 1rem;
  line-height: 1.65;
  color: ${({theme:e})=>e.colors.text700};
`,F2=u.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  display: block;
  pointer-events: none;
  user-select: none;
`,H2=u.div`
  padding: 14px 16px;
`,U2=u.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 6px;
  margin-bottom: 8px;
  background: ${({theme:e,$past:t})=>t?e.colors.bg100:e.colors.primary100};
  color: ${({theme:e,$past:t})=>t?e.colors.text700:e.colors.primary700};
`,UE=u.button`
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
`,VE=u.div`
  padding: 14px 16px;
  border-radius: ${({theme:e})=>e.radii.md};
  background: ${({theme:e})=>e.colors.warmCream};
  margin-bottom: 10px;
`,WE=u.p`
  margin: 0 0 6px;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text900};
`,KE=u.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.55;
  color: ${({theme:e})=>e.colors.text700};
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,YE=u.button`
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
`,GE=u.p`
  margin: 0;
  color: ${({theme:e})=>e.colors.text700};
  font-size: 0.95rem;
`,ZE=()=>{const e=ft(),{expertId:t}=Ms(),[n,r]=m.useState(),[i,s]=m.useState(),[l,a]=m.useState(!0),[c,d]=m.useState(!1);if(m.useEffect(()=>{if(!t){r(void 0),s(void 0),a(!1);return}let h=!1;return a(!0),(async()=>{const g=await e3(t);if(!h){if(!g){r(void 0),s(void 0),a(!1);return}if(r(g),g.centerPlaceId){const w=await r3(g.centerPlaceId);h||s(w??void 0)}else s(void 0);a(!1)}})(),()=>{h=!0}},[t]),l)return o.jsxs($u,{children:[o.jsxs(Cu,{children:[o.jsx(Eu,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(Pu,{children:"전문가"})]}),o.jsx(vn,{children:o.jsx(Sr,{children:"불러오는 중…"})})]});if(!n)return o.jsxs($u,{children:[o.jsxs(Cu,{children:[o.jsx(Eu,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(Pu,{children:"전문가"})]}),o.jsx(vn,{children:o.jsx(Sr,{children:"프로필을 찾을 수 없어요."})})]});const p=n.programs.filter(h=>h.status==="ongoing"),f=n.programs.filter(h=>h.status==="past");return o.jsxs($u,{children:[o.jsxs(Cu,{children:[o.jsx(Eu,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(Pu,{children:"명상 전문가"})]}),o.jsxs(DE,{children:[o.jsx(OE,{src:n.avatarUrl,alt:""}),o.jsx(BE,{children:n.name}),o.jsx(_2,{children:n.specialties.map(h=>o.jsx(FE,{children:h},h))})]}),o.jsxs(vn,{children:[o.jsx(Qn,{children:"자기소개"}),o.jsx(Sr,{as:"div",children:o.jsx(so,{markdown:n.intro})})]}),o.jsxs(vn,{children:[o.jsx(Qn,{children:"학위·이수"}),o.jsx(N2,{children:[...n.degrees,...n.certificates].map(h=>o.jsx("li",{children:h},h))})]}),o.jsxs(vn,{children:[o.jsx(Qn,{children:"경력"}),o.jsx(N2,{children:n.careers.map(h=>o.jsx("li",{children:h},h))})]}),o.jsxs(vn,{children:[o.jsx(Qn,{children:"클래스·분야"}),o.jsx(_2,{style:{justifyContent:"flex-start"},children:n.classTypes.map(h=>{const g=NE(n,h);return o.jsx(HE,{type:"button",disabled:!g,title:g?`${g.title} 상세 보기`:"등록된 클래스가 없어요",onClick:()=>{g&&e(`/meditation/expert/${n.id}/class/${g.id}`)},children:h},h)})})]}),o.jsxs(vn,{children:[o.jsx(Qn,{children:"센터·활동 지역"}),n.hasCenter&&n.centerSummary&&o.jsx(Sr,{style:{marginBottom:8},children:n.centerSummary}),n.hasCenter&&n.centerAddress&&o.jsx(Sr,{style:{marginBottom:8},children:n.centerAddress}),n.hasCenter&&n.centerPlaceId&&i&&o.jsxs(UE,{type:"button",onClick:()=>e(`/meditation/place/${n.centerPlaceId}`),children:["연결된 명상지 보기 — ",i.name]}),!n.hasCenter&&n.activityAreas&&n.activityAreas.length>0&&o.jsxs(Sr,{children:["주 활동 반경: ",n.activityAreas.map(lo).join(", ")]})]}),o.jsxs(vn,{children:[o.jsx(Qn,{children:"진행 중인 클래스"}),p.length===0&&o.jsx(Sr,{children:"현재 모집 중인 공개 일정이 없어요."}),p.map(h=>o.jsxs(D2,{type:"button","aria-label":`${h.title} 클래스 상세`,onClick:()=>e(`/meditation/expert/${n.id}/class/${h.id}`),children:[h.imageUrl&&o.jsx(F2,{src:h.imageUrl,alt:"",draggable:!1}),o.jsxs(H2,{children:[o.jsx(U2,{children:"진행 중"}),o.jsx(O2,{children:h.title}),o.jsx(B2,{children:h.description})]})]},h.id))]}),f.length>0&&o.jsxs(vn,{children:[o.jsx(Qn,{children:"이전 프로그램"}),f.map(h=>o.jsxs(D2,{type:"button","aria-label":`${h.title} 클래스 상세`,onClick:()=>e(`/meditation/expert/${n.id}/class/${h.id}`),children:[h.imageUrl&&o.jsx(F2,{src:h.imageUrl,alt:"",draggable:!1}),o.jsxs(H2,{children:[o.jsx(U2,{$past:!0,children:"종료"}),o.jsx(O2,{children:h.title}),o.jsx(B2,{children:h.description})]})]},h.id))]}),n.reviews.length>0&&o.jsxs(vn,{children:[o.jsx(Qn,{children:"후기"}),n.reviews.slice(0,2).map((h,g)=>o.jsxs(VE,{children:[o.jsxs(WE,{children:[h.author,h.rating!=null?` · ${Ra(h.rating)}`:""]}),o.jsx(KE,{children:h.body})]},`${h.author}-${g}`)),n.reviews.length>2&&o.jsxs(GE,{style:{marginBottom:10},children:["외 ",n.reviews.length-2,"건의 후기가 더 있어요."]}),o.jsxs(YE,{type:"button",onClick:()=>d(!0),children:["전체 후기 보기 · ",n.reviews.length,"건"]})]}),o.jsx(d5,{open:c,onClose:()=>d(!1),heading:"후기",reviews:n.reviews})]})},Iu=u.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 0 calc(48px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};
`,Tu=u.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  padding-top: calc(16px + env(safe-area-inset-top, 0px));
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.96);
  z-index: 5;
`,Ru=u.button`
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
`,zu=u.h1`
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0;
  flex: 1;
  min-width: 0;
`,qE=u.div`
  width: 100%;
`,QE=u.img`
  width: 100%;
  max-height: 240px;
  object-fit: cover;
  display: block;
  background: ${({theme:e})=>e.colors.bg100};
`,XE=u.div`
  padding: 20px 20px 28px;
`,JE=u.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 8px;
  margin-bottom: 12px;
  background: ${({theme:e,$past:t})=>t?e.colors.bg100:e.colors.primary100};
  color: ${({theme:e,$past:t})=>t?e.colors.text700:e.colors.primary700};
`,eP=u.h2`
  margin: 0 0 14px;
  font-size: 1.45rem;
  font-weight: 700;
  line-height: 1.3;
`,tP=u.p`
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.65;
  color: ${({theme:e})=>e.colors.text700};
`,nP=u.button`
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
`,V2=u.p`
  padding: 32px 20px;
  color: ${({theme:e})=>e.colors.text700};
`,rP=()=>{const e=ft(),{expertId:t,programId:n}=Ms(),[r,i]=m.useState(),[s,l]=m.useState(!0);m.useEffect(()=>{if(!t){i(void 0),l(!1);return}let c=!1;return l(!0),e3(t).then(d=>{c||(i(d??void 0),l(!1))}),()=>{c=!0}},[t]);const a=r==null?void 0:r.programs.find(c=>c.id===n);return s?o.jsxs(Iu,{children:[o.jsxs(Tu,{children:[o.jsx(Ru,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(zu,{children:"클래스"})]}),o.jsx(V2,{children:"불러오는 중…"})]}):!r||!a?o.jsxs(Iu,{children:[o.jsxs(Tu,{children:[o.jsx(Ru,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(zu,{children:"클래스"})]}),o.jsx(V2,{children:"클래스 정보를 찾을 수 없어요."})]}):o.jsxs(Iu,{children:[o.jsxs(Tu,{children:[o.jsx(Ru,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(zu,{children:"클래스 상세"})]}),a.imageUrl?o.jsx(qE,{children:o.jsx(QE,{src:a.imageUrl,alt:""})}):o.jsx("div",{style:{height:8}}),o.jsxs(XE,{children:[o.jsx(JE,{$past:a.status==="past",children:a.status==="ongoing"?"진행 중":"종료된 프로그램"}),o.jsx(eP,{children:a.title}),o.jsx(tP,{children:a.description}),o.jsxs(nP,{type:"button",onClick:()=>e(`/meditation/expert/${r.id}`),children:["← ",r.name," 프로필로 돌아가기"]})]})]})},p5=we`
  from { opacity: 0; }
  to { opacity: 1; }
`,iP=we`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`,oP=u.div`
  position: fixed;
  inset: 0;
  z-index: 300;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  animation: ${p5} 0.2s ease both;

  @media (min-width: 600px) {
    justify-content: center;
    align-items: center;
    padding: 24px;
  }
`,sP=u.div`
  background: ${({theme:e})=>e.colors.white};
  border-radius: 20px 20px 0 0;
  max-height: min(94dvh, 920px);
  height: min(94dvh, 920px);
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${iP} 0.32s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (min-width: 600px) {
    border-radius: ${({theme:e})=>e.radii.lg};
    max-width: 440px;
    height: min(88dvh, 780px);
  }
`,lP=u.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  padding-top: calc(12px + env(safe-area-inset-top, 0px));
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary100};
`,aP=u.span`
  font-size: 1rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
`,cP=u.button`
  width: 40px;
  height: 40px;
  border: none;
  background: ${({theme:e})=>e.colors.bg100};
  border-radius: ${({theme:e})=>e.radii.pill};
  cursor: pointer;
  display: grid;
  place-items: center;
  color: ${({theme:e})=>e.colors.text900};
`,uP=u.div`
  flex-shrink: 0;
  position: relative;
  height: 42vmin;
  min-height: 200px;
  max-height: 280px;
  background: ${({theme:e})=>e.colors.bg100};
`,dP=u.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  touch-action: pan-y pinch-zoom;
`,pP=u.div`
  display: flex;
  height: 100%;
  will-change: transform;
`,fP=u.div`
  flex-shrink: 0;
  height: 100%;
`,hP=u.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none;
  user-select: none;
`,W2=u.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  user-select: none;
`,K2=u.button`
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
`,gP=u.div`
  position: fixed;
  inset: 0;
  z-index: 400;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  flex-direction: column;
  animation: ${p5} 0.2s ease both;
`,mP=u.div`
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 12px;
  padding-top: calc(8px + env(safe-area-inset-top, 0px));
`,xP=u.button`
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
`,LP=u.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10px 28px;
  padding-bottom: calc(28px + env(safe-area-inset-bottom, 0px));
`,Y2=u.div`
  height: 100%;
  width: 100%;
  will-change: transform;
  transition: ${({$snap:e})=>e?"transform 0.28s cubic-bezier(0.22, 1, 0.36, 1)":"none"};
`,G2=u.div`
  position: relative;
  width: 100%;
  max-width: min(96vw, 720px);
  height: min(85dvh, 900px);
  max-height: min(85dvh, 900px);
  overflow: hidden;
  touch-action: none;
  background: transparent;
  border-radius: ${({theme:e})=>e.radii.md};
`,yP=u.div`
  display: flex;
  height: 100%;
  will-change: transform;
`,vP=u.div`
  flex-shrink: 0;
  height: 100%;
`,wP=u.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  background: transparent;
  display: block;
  pointer-events: none;
  user-select: none;
`,Z2=u.img`
  width: 100%;
  height: 100%;
  max-height: min(85dvh, 900px);
  object-fit: contain;
  object-position: center;
  background: transparent;
  display: block;
  user-select: none;
`,bP=u.div`
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
`,kP=u.div`
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
`,f5=u.button`
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
`,jP=u.div`
  flex-shrink: 0;
  display: flex;
  gap: 8px;
  padding: 12px 16px;
  background: ${({theme:e})=>e.colors.warmCream};
`,q2=u.button`
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
`,SP=u.div`
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
`,$P=u.button`
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
`,CP=u.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 18px 16px 28px;
`,EP=u.h3`
  margin: 0 0 12px;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.25;
`,PP=u.div`
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
`,IP=u.section`
  margin-top: 8px;
`,Q2=u.h4`
  margin: 0 0 12px;
  font-size: 1rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
`,X2=u.div`
  padding: 14px;
  border-radius: ${({theme:e})=>e.radii.md};
  background: ${({theme:e})=>e.colors.warmCream};
  margin-bottom: 10px;
`,J2=u.p`
  margin: 0 0 6px;
  font-size: 0.88rem;
  font-weight: 600;
`,e4=u.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.55;
  color: ${({theme:e})=>e.colors.text700};
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,t4=u.button`
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
`,TP=u.section`
  margin-top: 28px;
  padding-top: 22px;
  border-top: 1px solid ${({theme:e})=>e.colors.primary100};
`,RP=u.h4`
  margin: 0 0 14px;
  font-size: 1.05rem;
  font-weight: 700;
`,zP=u.article`
  margin-bottom: 20px;
`,MP=u.div`
  display: flex;
  gap: 14px;
  align-items: flex-start;
  margin-bottom: 10px;
`,AP=u.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`,_P=u.div`
  font-weight: 700;
  font-size: 1.05rem;
  margin-bottom: 6px;
`,NP=u.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.55;
  color: ${({theme:e})=>e.colors.text700};
`,Mu=u.p`
  margin: 0;
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.text700};
`;function x0(e,t){const n=e.join("\0"),[r,i]=m.useState(1),[s,l]=m.useState(!1),[a,c]=m.useState(0),[d,p]=m.useState(0),f=m.useRef(null),h=m.useRef(null),g=m.useRef(1),w=m.useRef(null),v=m.useRef(0),S=m.useRef(0),x=m.useRef(null),L=m.useCallback(()=>{w.current=null,v.current=0,S.current=0,p(0)},[]);m.useEffect(()=>{if(x.current===null){x.current=n;return}x.current!==n&&(x.current=n,i(1),l(!1),c(0),L())},[n,L]),m.useLayoutEffect(()=>{if(!t||e.length<=1){c(0);return}const N=f.current;if(!N)return;const F=()=>{const q=N.getBoundingClientRect().width;q>0&&c(q)};F();const G=new ResizeObserver(F);return G.observe(N),()=>G.disconnect()},[t,e.length,n]);const y=m.useMemo(()=>{const N=e.length;return N<=1?e:[e[N-1],...e,e[0]]},[e]),$=y.length,I=m.useMemo(()=>{const N=e.length;return N<=1?0:r===0?N-1:r===N+1?0:r-1},[e.length,r]),k=m.useCallback(N=>{e.length<=1||(w.current=N.touches[0].clientX,v.current=0,S.current=0,p(0))},[e.length]),j=m.useCallback(N=>{var Q;if(w.current==null||e.length<=1)return;const F=((Q=f.current)==null?void 0:Q.offsetWidth)??320,G=e.length;let q=N.touches[0].clientX-w.current;const M=F*.45;q=Math.max(-M,Math.min(M,q)),S.current=q;const O=g.current;let C=q;O===1&&q>0&&(C=0),O===G&&q<0&&(C=0),v.current=C,p(C)},[e.length]),z=m.useCallback(()=>{var M;if(w.current==null||e.length<=1){L();return}const N=((M=f.current)==null?void 0:M.offsetWidth)??320,F=Math.min(48,N*.14),G=S.current,q=e.length;i(O=>G>F?O===0?q-1:O===1?0:O-1:G<-F?O===q+1?2:O===q?q+1:O+1:O),L()},[e.length,L]),R=m.useCallback(N=>{if(!N.propertyName.toLowerCase().includes("transform")||N.target!==N.currentTarget)return;const F=e.length;if(F<=1)return;const G=g.current;G===F+1?(l(!0),i(1)):G===0&&(l(!0),i(F))},[e.length]);m.useLayoutEffect(()=>{if(!s)return;const N=h.current;N&&N.offsetWidth;let F=null;const G=requestAnimationFrame(()=>{F=requestAnimationFrame(()=>{l(!1)})});return()=>{cancelAnimationFrame(G),F!=null&&cancelAnimationFrame(F)}},[r,s]),m.useEffect(()=>{L()},[n,L]),g.current=r;const T=e.length>1&&a>0,P=T?$*a:void 0,E=T?-(r*a)+d:0,A=m.useCallback(N=>{l(!1),i(N),L()},[L]);return{loopIndex:r,setLoopIndex:i,activeDot:I,loopUrls:y,slideCount:$,usePx:T,trackWidthPx:P,translatePx:E,transOff:s,dragPx:d,viewportRef:f,trackRef:h,onTouchStart:k,onTouchMove:j,onTouchEnd:z,onTouchCancel:L,onTransitionEnd:R,vpWidth:a,syncToLoopIndex:A}}const pl=14,DP=115,OP=360;function n4(e){const t=Math.sign(e),n=Math.abs(e);return t*Math.min(n*.88,OP)}function h5({urls:e,initialLoopIndex:t,onClose:n,lockBodyScroll:r=!0}){const i=e.length>1,s=x0(e,i),{syncToLoopIndex:l,viewportRef:a,trackRef:c,onTouchStart:d,onTouchMove:p,onTouchEnd:f,onTouchCancel:h,onTransitionEnd:g,usePx:w,trackWidthPx:v,translatePx:S,transOff:x,dragPx:L,loopUrls:y,vpWidth:$,setLoopIndex:I,activeDot:k}=s,[j,z]=m.useState(0),[R,T]=m.useState(!1),P=m.useRef(0),E=m.useRef(null),A=m.useRef("n"),N=m.useRef(null),F=m.useRef(!1),G=m.useCallback(V=>{var ee;if((ee=N.current)==null||ee.call(N),N.current=null,a.current=V,V){const ue=be=>{A.current==="v"&&be.preventDefault()};V.addEventListener("touchmove",ue,{passive:!1}),N.current=()=>V.removeEventListener("touchmove",ue)}},[a]);m.useEffect(()=>{if(!r)return;const V=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=V}},[r]),m.useLayoutEffect(()=>{e.length<=1||l(t)},[e.length,t,l]),m.useEffect(()=>{P.current=0,z(0),A.current="n",E.current=null,F.current=!1},[e.join("\0")]),m.useEffect(()=>{const V=ee=>{ee.key==="Escape"&&n()};return window.addEventListener("keydown",V),()=>window.removeEventListener("keydown",V)},[n]),m.useEffect(()=>()=>{var V;(V=N.current)==null||V.call(N),N.current=null},[]);const q=m.useCallback(V=>{V.target===V.currentTarget&&n()},[n]),M=m.useCallback(()=>{if(Math.abs(P.current)>=DP){P.current=0,z(0),n();return}T(!0),P.current=0,z(0),window.setTimeout(()=>T(!1),320)},[n]),O=m.useCallback(V=>{V.touches.length===1&&(T(!1),E.current={x:V.touches[0].clientX,y:V.touches[0].clientY},A.current="n")},[]),C=m.useCallback(V=>{if(!E.current||V.touches.length!==1)return;const ee=V.touches[0].clientX,ue=V.touches[0].clientY,be=ee-E.current.x,fe=ue-E.current.y;if(A.current==="n"){if(Math.abs(be)<pl&&Math.abs(fe)<pl)return;Math.abs(fe)>=Math.abs(be)?A.current="v":(A.current="h",e.length>1&&d(V))}if(A.current==="v"){const xe=n4(fe);P.current=xe,z(xe);return}A.current==="h"&&e.length>1&&p(V)},[e.length,p,d]),Q=m.useCallback(()=>{A.current==="v"?M():A.current==="h"&&e.length>1&&f(),E.current=null,A.current="n"},[M,f,e.length]),X=m.useCallback(()=>{A.current==="v"?M():A.current==="h"&&e.length>1&&h(),E.current=null,A.current="n"},[M,h,e.length]),b=m.useCallback(V=>{V.button===0&&(F.current=!0,T(!1),E.current={x:V.clientX,y:V.clientY},A.current="n")},[]),H=m.useCallback(V=>{if(!F.current||!E.current)return;const ee=V.clientX-E.current.x,ue=V.clientY-E.current.y;if(A.current==="n"){if(Math.abs(ee)<pl&&Math.abs(ue)<pl)return;if(Math.abs(ue)>=Math.abs(ee))A.current="v";else{A.current="h",F.current=!1,E.current=null;return}}if(A.current==="v"){const be=n4(ue);P.current=be,z(be)}},[]),_=m.useCallback(()=>{F.current&&(F.current=!1,A.current==="v"&&M(),E.current=null,A.current="n")},[M]);if(e.length===0)return null;const Z={ref:G,onTouchStart:O,onTouchMove:C,onTouchEnd:Q,onTouchCancel:X,onMouseDown:b,onMouseMove:H,onMouseUp:_,onMouseLeave:_};return o.jsxs(gP,{role:"dialog","aria-modal":"true","aria-label":"프로그램 사진 크게 보기",onClick:q,children:[o.jsx(mP,{onClick:V=>V.stopPropagation(),children:o.jsx(xP,{type:"button",onClick:n,"aria-label":"닫기",children:o.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})}),o.jsx(LP,{onClick:V=>V.stopPropagation(),children:e.length<=1?o.jsx(G2,{...Z,children:o.jsx(Y2,{$snap:R,style:{transform:`translate3d(0, ${j}px, 0)`},children:o.jsx(Z2,{src:e[0],alt:"",draggable:!1})})}):o.jsxs(o.Fragment,{children:[o.jsx(G2,{...Z,children:o.jsx(Y2,{$snap:R,style:{transform:`translate3d(0, ${j}px, 0)`},children:w?o.jsx(yP,{ref:c,onTransitionEnd:g,style:{width:v,height:"100%",transform:`translate3d(${S}px, 0, 0)`,transition:L!==0||x?"none":"transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)"},children:y.map((V,ee)=>o.jsx(vP,{style:{width:$,flexShrink:0},children:o.jsx(wP,{src:V,alt:"",draggable:!1})},`viewer-loop-${ee}`))}):o.jsx(Z2,{src:e[0],alt:"",draggable:!1})})}),o.jsx(kP,{children:e.map((V,ee)=>o.jsx(f5,{type:"button","aria-label":`${ee+1}번째 사진으로 이동`,"aria-current":ee===k?"true":void 0,$active:ee===k,onClick:()=>I(ee+1)},ee))})]})})]})}const BP=({place:e,open:t,onClose:n,initialProgramId:r})=>{var T,P;const i=ic(e).programs??[],s=m.useMemo(()=>i.filter(E=>E.status==="ongoing"),[i]),l=m.useMemo(()=>i.filter(E=>E.status==="past"),[i]),[a,c]=m.useState("ongoing"),[d,p]=m.useState(null),[f,h]=m.useState(!1),[g,w]=m.useState(null),v=a==="ongoing"?s:l;m.useEffect(()=>{var N,F;if(!t)return;const E=(N=s[0])==null?void 0:N.id,A=(F=l[0])==null?void 0:F.id;if(r&&i.some(G=>G.id===r)){const G=i.find(q=>q.id===r);c(G.status==="ongoing"?"ongoing":"past"),p(r)}else E?(c("ongoing"),p(E)):A?(c("past"),p(A)):p(null)},[t,r,s,l,i]);const S=i.find(E=>E.id===d)??null,x=m.useMemo(()=>{var N;if(!S)return[];const E=(N=S.imageUrls)!=null&&N.length?S.imageUrls:[],A=[S.imageUrl,...E.filter(F=>F!==S.imageUrl)];return Array.from(new Set(A))},[S]),L=t&&!!S&&x.length>1,y=x0(x,L);m.useEffect(()=>{t&&y.syncToLoopIndex(1)},[t,y.syncToLoopIndex]),m.useEffect(()=>{w(null)},[d]),m.useEffect(()=>{t||h(!1)},[t]),m.useEffect(()=>{if(!t)return;const E=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=E}},[t]),m.useEffect(()=>{t||w(null)},[t]),m.useEffect(()=>{if(!t)return;const E=A=>{if(A.key==="Escape"){if(f){A.preventDefault(),h(!1);return}n()}};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[t,n,f]);const $=m.useCallback(E=>{E.target===E.currentTarget&&n()},[n]),I=e.venueKind==="명상센터"&&(((T=e.instructors)==null?void 0:T.length)??0)>0,k=s.length>0&&l.length>0,j=I&&(((P=e.instructors)==null?void 0:P.some(E=>E.reviews.length>0))??!1),z=m.useCallback(()=>{x.length!==0&&h(!0)},[x.length]);if(!t||i.length===0)return null;const R=e.venueKind==="명상센터"?"명상센터":"명상지";return o.jsxs(o.Fragment,{children:[o.jsx(oP,{role:"presentation",onClick:$,children:o.jsxs(sP,{role:"dialog","aria-modal":"true","aria-labelledby":"place-programs-modal-title",onClick:E=>E.stopPropagation(),children:[o.jsxs(lP,{children:[o.jsxs(aP,{id:"place-programs-modal-title",children:["프로그램 · 행사 · 후기 ",o.jsxs("span",{style:{opacity:.75},children:["(",R,")"]})]}),o.jsx(cP,{type:"button",onClick:n,"aria-label":"닫기",children:o.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),S&&o.jsxs(o.Fragment,{children:[o.jsx(uP,{children:x.length<=1?o.jsx(K2,{type:"button",$clickable:x.length>0,onClick:z,"aria-label":"사진 크게 보기",children:o.jsx(W2,{src:x[0]??S.imageUrl,alt:"",draggable:!1})}):o.jsxs(o.Fragment,{children:[o.jsx(K2,{type:"button",$clickable:!0,onClick:z,"aria-label":"사진 크게 보기",children:o.jsx(dP,{ref:y.viewportRef,onTouchStart:y.onTouchStart,onTouchMove:y.onTouchMove,onTouchEnd:y.onTouchEnd,onTouchCancel:y.onTouchCancel,children:y.usePx?o.jsx(pP,{ref:y.trackRef,onTransitionEnd:y.onTransitionEnd,style:{width:y.trackWidthPx,transform:`translate3d(${y.translatePx}px, 0, 0)`,transition:y.dragPx!==0||y.transOff?"none":"transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)"},children:y.loopUrls.map((E,A)=>o.jsx(fP,{style:{width:y.vpWidth,flexShrink:0},children:o.jsx(hP,{src:E,alt:"",draggable:!1})},`hero-loop-${A}`))}):o.jsx(W2,{src:x[0],alt:"",draggable:!1})})}),o.jsx(bP,{children:x.map((E,A)=>o.jsx(f5,{type:"button","aria-label":`${A+1}번째 사진으로 이동`,"aria-current":A===y.activeDot?"true":void 0,$active:A===y.activeDot,onClick:()=>y.setLoopIndex(A+1)},A))})]})}),k?o.jsxs(jP,{children:[o.jsxs(q2,{type:"button",$active:a==="ongoing",onClick:()=>{var A;c("ongoing");const E=(A=s[0])==null?void 0:A.id;p(E??null)},disabled:s.length===0,style:{opacity:s.length===0?.45:1},children:["진행 중 ",s.length>0?`(${s.length})`:""]}),o.jsxs(q2,{type:"button",$active:a==="past",onClick:()=>{var A;c("past");const E=(A=l[0])==null?void 0:A.id;p(E??null)},disabled:l.length===0,style:{opacity:l.length===0?.45:1},children:["지난 프로그램 ",l.length>0?`(${l.length})`:""]})]}):null,o.jsxs(SP,{children:[v.length===0&&o.jsx(Mu,{children:"이 구간에 등록된 프로그램이 없어요."}),v.map(E=>o.jsx($P,{type:"button",$active:E.id===d,onClick:()=>p(E.id),"aria-label":E.title,children:o.jsx("img",{src:E.imageUrl,alt:"",draggable:!1})},E.id))]}),o.jsxs(CP,{children:[o.jsxs(EP,{children:[S.kind==="event"?"행사 · ":S.kind==="program"?"프로그램 · ":"",S.title]}),o.jsx(PP,{children:o.jsx(qi,{children:S.bodyFromVenue})}),S.reviews.length>0&&o.jsxs(IP,{children:[o.jsx(Q2,{children:"프로그램 후기"}),S.reviews.slice(0,2).map((E,A)=>o.jsxs(X2,{children:[o.jsxs(J2,{children:[E.author,E.rating!=null?` · ${Ra(E.rating)}`:""]}),o.jsx(e4,{children:E.body})]},`${E.author}-${A}`)),S.reviews.length>2&&o.jsxs(Mu,{style:{marginBottom:10,fontSize:"0.88rem"},children:["외 ",S.reviews.length-2,"건의 후기가 더 있어요."]}),o.jsxs(t4,{type:"button",onClick:()=>w({heading:"프로그램 후기",reviews:S.reviews}),children:["전체 후기 보기 · ",S.reviews.length,"건"]})]}),I&&o.jsxs(TP,{children:[o.jsx(RP,{children:j?"강사 소개 · 강사 후기":"강사 소개"}),e.instructors.map(E=>o.jsxs(zP,{children:[o.jsxs(MP,{children:[o.jsx(AP,{src:E.photoUrl,alt:""}),o.jsxs("div",{children:[o.jsx(_P,{children:E.name}),o.jsx(NP,{children:E.intro})]})]}),E.reviews.length>0&&o.jsxs(o.Fragment,{children:[o.jsx(Q2,{style:{fontSize:"0.95rem",marginBottom:8},children:"강사 후기"}),E.reviews.slice(0,2).map((A,N)=>o.jsxs(X2,{children:[o.jsxs(J2,{children:[A.author,A.rating!=null?` · ${Ra(A.rating)}`:""]}),o.jsx(e4,{children:A.body})]},`${E.id}-ir-${N}`)),E.reviews.length>2&&o.jsxs(Mu,{style:{marginBottom:10,fontSize:"0.88rem"},children:["외 ",E.reviews.length-2,"건의 후기가 더 있어요."]}),o.jsxs(t4,{type:"button",onClick:()=>w({heading:`강사 후기 · ${E.name}`,reviews:E.reviews}),children:["강사 후기 전체 보기 · ",E.reviews.length,"건"]})]})]},E.id))]})]})]})]})}),o.jsx(d5,{open:g!=null,onClose:()=>w(null),heading:g==null?void 0:g.heading,reviews:(g==null?void 0:g.reviews)??[]}),f&&S&&x.length>0&&o.jsx(h5,{urls:x,initialLoopIndex:y.loopIndex,onClose:()=>h(!1),lockBodyScroll:!1})]})};function L0(e){var i;const t=[],n=new Set,r=s=>{const l=s==null?void 0:s.trim();!l||n.has(l)||(n.add(l),t.push(l))};if((i=e.photos)!=null&&i.length)for(const s of e.photos)r(s);else r(e.thumbnailUrl);for(const s of e.programs??[])if(s.status==="ongoing"){r(s.imageUrl);for(const l of s.imageUrls??[])r(l)}return t}function FP(e){return L0(e)[0]??e.thumbnailUrl??""}const Au=u.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0 calc(28px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};
`,_u=u.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  padding-top: calc(16px + env(safe-area-inset-top, 0px));
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.95);
  z-index: 10;
`,Nu=u.button`
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
`,Du=u.h1`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
`,HP=u.button`
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
`,UP=u.div`
  position: relative;
  width: 100%;
  height: 280px;
  background: ${({theme:e})=>e.colors.bg100};
`,VP=u.button`
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
`,WP=u.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  touch-action: pan-y pinch-zoom;
`,KP=u.div`
  display: flex;
  height: 100%;
  will-change: transform;
`,YP=u.div`
  flex-shrink: 0;
  height: 100%;
`,r4=u.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none;
  user-select: none;
`,GP=u.div`
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
`,ZP=u.button`
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
`,qP=u.div`
  padding: 24px 20px;
`,QP=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
`,XP=u.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  color: ${({theme:e})=>e.colors.text900};
  flex: 1;
  min-width: 0;
`,JP=u.div`
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
`,eI=u.div`
  font-size: 1.05rem;
  line-height: 1.6;
  color: ${({theme:e})=>e.colors.text700};
  margin: 0 0 24px;
`,tI=u.section`
  margin: 0 0 28px;
`,nI=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 12px;
`,rI=u.h3`
  margin: 0;
  font-size: 1.15rem;
  font-weight: 700;
`,iI=u.div`
  min-width: 0;
`,oI=u.p`
  margin: 6px 0 0;
  font-size: 0.88rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text700};
`,sI=u.button`
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
`,lI=u.span`
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary100};
  color: ${({theme:e})=>e.colors.primary700};
`,aI=u.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 4px 0 12px;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    height: 4px;
  }
`,cI=u.button`
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
`,uI=u.span`
  display: block;
  padding: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  text-align: left;
  line-height: 1.35;
  color: ${({theme:e})=>e.colors.text900};
  background: ${({theme:e})=>e.colors.white};
`,dI=u.div``,i4=u.div`
  border-bottom: 1px solid ${({theme:e})=>e.colors.border200};

  &:last-child {
    border-bottom: none;
  }
`,o4=u.button`
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
`,s4=u.div`
  display: grid;
  grid-template-rows: ${({$open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.3s ease;
  overflow: hidden;
`,l4=u.div`
  overflow: hidden;
`,a4=u.div`
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
`,pI=u.section`
  margin-top: 28px;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 16px;
    font-weight: 600;
  }
`,fI=u.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`,hI=u.div`
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
`,gI=u.section`
  margin-top: 32px;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 12px;
  }
`,mI=u.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  flex-wrap: wrap;
`,xI=u.button`
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
`,LI=u.span`
  flex: 1;
  min-width: 0;
`,yI=u.a`
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
`,vI=u.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  pointer-events: none;
`,wI=u.div`
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
`,bI=u.div`
  width: 100%;
  min-height: 240px;
  height: 240px;
  border-radius: ${({theme:e})=>e.radii.lg};
  background: ${({theme:e})=>e.colors.bg100};
  overflow: hidden;
  position: relative;
`,c4=u.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  text-align: center;
  background: linear-gradient(180deg, ${({theme:e})=>e.colors.primary50} 0%, ${({theme:e})=>e.colors.warmCream} 100%);
`,kI=u.div`
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
`,u4=u.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.primary400};
  margin: 0 0 24px;
  line-height: 1.6;
`,jI=u.button`
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
`,SI={wifi:"Wi-Fi",parking:"Parking",tea:"Tea"},$I=()=>{var G,q;const e=ft(),{placeId:t}=Ms(),[n,r]=m.useState(),[i,s]=m.useState(!0),[l,a]=m.useState(null);m.useEffect(()=>{if(!t){r(void 0),s(!1),a(null);return}let M=!1;return s(!0),a(null),r3(t).then(O=>{M||(O?(r(O),a(null)):(r(void 0),a("not_found")),s(!1))}).catch(()=>{M||(r(void 0),a("network"),s(!1))}),()=>{M=!0}},[t]),n&&Wn(n.regionId);const c=m.useRef(null),d=(n==null?void 0:n.facilities)??[],p=(G=n==null?void 0:n.detailSections)==null?void 0:G.find(M=>M.title.toLowerCase().includes("유의사항")),[f,h]=m.useState(null),[g,w]=m.useState(!1),[v,S]=m.useState(!1),[x,L]=m.useState(),[y,$]=m.useState(null),I=m.useMemo(()=>n?L0(n):[],[n]),k=!!n&&I.length>1,j=x0(I,k),z=()=>{n&&navigator.clipboard.writeText(n.address).then(()=>{w(!0),setTimeout(()=>w(!1),2e3)})};if(m.useEffect(()=>{if(!n)return;const M="233s0l2jzo",O=()=>{var be,fe;const H=document.getElementById("naver-map");if(!H||!((fe=(be=window.naver)==null?void 0:be.maps)!=null&&fe.Service))return!1;const _=window.naver,Z=new _.maps.LatLng(37.5665,126.978),V=new _.maps.Map(H,{center:Z,zoom:17,scrollWheel:!0,mapTypeControl:!0}),ee=(xe,$e)=>{const Re=new _.maps.LatLng(xe,$e);V.setCenter(Re),new _.maps.Marker({position:Re,map:V})},ue=(xe,$e)=>Number.isFinite(xe)&&Number.isFinite($e);return ue(n.lat??NaN,n.lng??NaN)?(ee(n.lat,n.lng),!0):(_.maps.Service.geocode({query:n.address},(xe,$e)=>{var Ce,Ee,bt,sn;if(xe==="ERROR"){console.warn(`[지도] 주소 변환 실패 - "${n.name}" (${n.address}): status=${xe}`),ee(37.5665,126.978);return}const Re=$e,Oe=Ve=>typeof Ve=="number"?Ve:parseFloat(String(Ve??""));let qe=null,ze=null;const Kt=((Ce=Re==null?void 0:Re.result)==null?void 0:Ce.items)??[],te=Kt.find(Ve=>Ve.isRoadAddress)??Kt[0];if(te!=null&&te.point&&(qe=Oe(te.point.y),ze=Oe(te.point.x)),(qe==null||ze==null||!ue(qe,ze))&&Kt.length>0){const Ve=Kt[0];Ve!=null&&Ve.point&&(qe=Oe(Ve.point.y),ze=Oe(Ve.point.x))}if(qe==null||ze==null||!ue(qe,ze)){const Ve=((bt=(Ee=Re==null?void 0:Re.v2)==null?void 0:Ee.addresses)==null?void 0:bt[0])??((sn=Re==null?void 0:Re.addresses)==null?void 0:sn[0]);Ve&&(qe=Oe(Ve.y),ze=Oe(Ve.x))}qe!=null&&ze!=null&&ue(qe,ze)?ee(qe,ze):ee(37.5665,126.978)}),!0)},C=()=>{var H;return(H=window.naver)!=null&&H.maps&&window.naver.maps.Service?(O(),!0):!1};if(C())return;if(document.querySelector('script[src*="oapi.map.naver.com"]')){const H=setInterval(()=>{C()&&clearInterval(H)},100),_=setTimeout(()=>clearInterval(H),1e4);return()=>{clearInterval(H),clearTimeout(_)}}const X="onNaverMapsReady";window[X]=()=>{if(C())return;const H=setInterval(()=>{C()&&clearInterval(H)},100)};const b=document.createElement("script");return b.type="text/javascript",b.src=`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${M}&submodules=geocoder&callback=${X}`,b.async=!0,document.head.appendChild(b),()=>{delete window[X]}},[n]),m.useEffect(()=>{n&&j.syncToLoopIndex(1)},[n==null?void 0:n.id,j.syncToLoopIndex]),i)return o.jsxs(Au,{children:[o.jsxs(_u,{children:[o.jsx(Nu,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(Du,{children:"상세 페이지"})]}),o.jsx(c4,{children:o.jsx(u4,{children:"불러오는 중…"})})]});if(!n)return o.jsxs(Au,{children:[o.jsxs(_u,{children:[o.jsx(Nu,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(Du,{children:"상세 페이지"})]}),o.jsxs(c4,{children:[o.jsx(kI,{children:"404"}),o.jsxs(u4,{children:[l==="not_found"?"해당 명상센터를 찾지 못했어요.":"장소 정보를 불러올 수 없어요.",o.jsx("br",{}),"메인에서 다시 찾아 주세요."]}),o.jsxs(jI,{type:"button",onClick:()=>e("/meditation"),children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),o.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),"메인으로 돌아가기"]})]})]});const R=n.programs??[],T=R.filter(M=>M.status==="ongoing"),P=R.filter(M=>M.status==="past"),E=R.length>0,A=n.venueKind==="명상센터"?"명상센터":"명상지",N=[];T.length>0&&N.push(`진행 중 ${T.length}`),P.length>0&&N.push(`지난 ${P.length}`);const F=N.join(" · ");return o.jsxs(Au,{children:[g&&o.jsx(vI,{children:o.jsx(wI,{children:"주소를 복사했습니다"})}),o.jsxs(_u,{children:[o.jsx(Nu,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(Du,{children:"상세 페이지"})]}),I.length<=1?o.jsx(HP,{type:"button",onClick:()=>$({urls:I.length===1?I:[n.thumbnailUrl],initialLoopIndex:1}),"aria-label":`${n.name} 대표 사진 크게 보기`,children:o.jsx("img",{src:I[0]??n.thumbnailUrl,alt:`${n.name} 대표 이미지`})}):o.jsxs(UP,{children:[o.jsx(VP,{type:"button",onClick:()=>$({urls:I,initialLoopIndex:j.loopIndex}),"aria-label":`${n.name} 사진 크게 보기`,children:o.jsx(WP,{ref:j.viewportRef,onTouchStart:j.onTouchStart,onTouchMove:j.onTouchMove,onTouchEnd:j.onTouchEnd,onTouchCancel:j.onTouchCancel,children:j.usePx?o.jsx(KP,{ref:j.trackRef,onTransitionEnd:j.onTransitionEnd,style:{width:j.trackWidthPx,transform:`translate3d(${j.translatePx}px, 0, 0)`,transition:j.dragPx!==0||j.transOff?"none":"transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)"},children:j.loopUrls.map((M,O)=>o.jsx(YP,{style:{width:j.vpWidth,flexShrink:0},children:o.jsx(r4,{src:M,alt:"",draggable:!1})},`detail-hero-${O}`))}):o.jsx(r4,{src:I[0],alt:"",draggable:!1})})}),o.jsx(GP,{children:I.map((M,O)=>o.jsx(ZP,{type:"button","aria-label":`${O+1}번째 사진으로 이동`,"aria-current":O===j.activeDot?"true":void 0,$active:O===j.activeDot,onClick:()=>j.setLoopIndex(O+1)},O))})]}),o.jsxs(qP,{children:[o.jsxs(QP,{children:[o.jsx(XP,{children:n.name}),o.jsx(lc,{placeId:n.id})]}),o.jsxs(JP,{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),n.address]}),o.jsx(eI,{children:o.jsx(so,{markdown:n.shortDescription})}),E&&o.jsxs(tI,{children:[o.jsxs(nI,{children:[o.jsxs(iI,{children:[o.jsx(rI,{children:"프로그램 · 후기"}),F?o.jsx(oI,{children:F}):null]}),o.jsx(lI,{children:A})]}),T.length>0?o.jsx(aI,{"aria-label":"진행 중인 프로그램 사진",children:T.map(M=>o.jsxs(cI,{type:"button",onClick:()=>{L(M.id),S(!0)},children:[o.jsx("img",{src:M.imageUrl,alt:"",draggable:!1}),o.jsx(uI,{children:M.title})]},M.id))}):o.jsxs(sI,{type:"button",onClick:()=>{L(void 0),S(!0)},children:["지난 프로그램·후기 보기 (",P.length,")"]})]}),o.jsxs(dI,{children:[o.jsxs(i4,{children:[o.jsxs(o4,{type:"button",$open:f==="fee",onClick:()=>h(f==="fee"?null:"fee"),children:[o.jsx("span",{children:"입장료·이용 요금"}),o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M9 18l6-6-6-6"})})]}),o.jsx(s4,{$open:f==="fee",children:o.jsx(l4,{children:o.jsx(a4,{children:(q=n.admissionFee)!=null&&q.trim()?o.jsx(qi,{children:n.admissionFee}):"현장·예약 시 안내"})})})]}),o.jsxs(i4,{children:[o.jsxs(o4,{type:"button",$open:f==="notice",onClick:()=>h(f==="notice"?null:"notice"),children:[o.jsx("span",{children:"유의사항"}),o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M9 18l6-6-6-6"})})]}),o.jsx(s4,{$open:f==="notice",children:o.jsx(l4,{children:o.jsx(a4,{children:p!=null&&p.body?o.jsx(qi,{children:p.body}):"등록된 유의사항이 없습니다."})})})]})]}),d.length>0&&o.jsxs(pI,{children:[o.jsx("h3",{children:"시설 정보"}),o.jsx(fI,{children:d.map(M=>o.jsxs(hI,{children:[M==="wifi"&&o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M5 12.55a11 11 0 0 1 14.08 0"}),o.jsx("path",{d:"M1.42 9a16 16 0 0 1 21.16 0"}),o.jsx("path",{d:"M8.53 16.11a6 6 0 0 1 6.95 0"}),o.jsx("line",{x1:"12",y1:"20",x2:"12.01",y2:"20"})]}),M==="parking"&&o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),o.jsx("path",{d:"M3 9h18M9 21V9"})]}),M==="tea"&&o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M18 8h1a4 4 0 0 1 0 8h-1"}),o.jsx("path",{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"}),o.jsx("line",{x1:"6",y1:"1",x2:"6",y2:"4"}),o.jsx("line",{x1:"10",y1:"1",x2:"10",y2:"4"}),o.jsx("line",{x1:"14",y1:"1",x2:"14",y2:"4"})]}),!["wifi","parking","tea"].includes(M)&&o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("circle",{cx:"12",cy:"12",r:"10"}),o.jsx("path",{d:"M12 8v4M12 16h.01"})]}),o.jsx("span",{children:SI[M]??M})]},M))})]}),o.jsxs(gI,{children:[o.jsx("h3",{children:"위치"}),o.jsxs(mI,{children:[o.jsxs(xI,{type:"button",onClick:z,title:"클릭하여 주소 복사",children:[o.jsx(LI,{children:n.address}),o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),o.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})]}),o.jsxs(yI,{href:`https://map.naver.com/v5/search/${encodeURIComponent(n.address)}`,target:"_blank",rel:"noreferrer noopener",children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"안내"]})]}),o.jsx(bI,{id:"naver-map",ref:c})]})]}),E&&o.jsx(BP,{place:n,open:v,onClose:()=>S(!1),initialProgramId:x}),y&&o.jsx(h5,{urls:y.urls,initialLoopIndex:y.initialLoopIndex,onClose:()=>$(null)})]})},CI=u.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 24px 20px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};

  @media (max-width: 960px) {
    padding: 20px 14px calc(48px + env(safe-area-inset-bottom, 0px));
  }
`,EI=u.h1`
  font-size: 2.4rem;
  margin-bottom: 12px;
`,PI=u.p`
  font-size: 1.2rem;
  color: ${({theme:e})=>e.colors.text700};
`,II=u.form`
  margin: 24px 0;
  border: 1px solid ${({theme:e})=>e.colors.primary300};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 16px;
  display: grid;
  gap: 8px;
`,TI=u.label`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text700};
`,RI=u.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
`,zI=u.input`
  border: 1px solid ${({theme:e})=>e.colors.border200};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: 10px 12px;
  font-size: 1.1rem;
`,MI=u.button`
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
`,AI=u.div`
  display: grid;
  gap: 12px;
`,_I=u.button`
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
`,NI=u.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: center;
`,DI=u.span`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.primary700};
  font-weight: 600;
`,OI=u.span`
  font-size: 1.2rem;
  font-weight: 600;
`,BI=u.span`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.text700};
`,FI=u.div`
  border-top: 1px solid ${({theme:e})=>e.colors.border200};
  padding-top: 12px;
  display: grid;
  gap: 8px;
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.6;
`,HI=u.ul`
  padding-left: 18px;
  display: grid;
  gap: 6px;
`,UI=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 8px;
`,VI=u.button`
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
`,WI=u.div`
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
`,d4=u.p`
  margin: 24px 0;
  color: ${({theme:e})=>e.colors.text700};
  text-align: center;
`,KI=u.div`
  margin-top: 20px;
  display: flex;
  gap: 8px;
  justify-content: center;
`,YI=u.button`
  border: 1px solid ${({theme:e})=>e.colors.border200};
  background: ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.white};
  color: ${({$active:e})=>e?"#fff":"inherit"};
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
`,GI=()=>{const[e,t]=m.useState([]),[n,r]=m.useState(""),[i,s]=m.useState(null),[l,a]=m.useState(1),[c,d]=m.useState(null),[p,f]=m.useState("ko-KR"),[h,g]=m.useState(!1),[w,v]=m.useState(!0),S=6;m.useEffect(()=>{const R=Se();if(!R){t([]),v(!1);return}v(!0),fetch(`${R}/notices`).then(T=>T.ok?T.json():Promise.reject()).then(T=>{if(!Array.isArray(T)){t([]);return}t(T),s(null)}).catch(()=>{t([])}).finally(()=>v(!1))},[]);const x=m.useCallback((R,T)=>{if(!("speechSynthesis"in window)){alert("이 브라우저는 음성 읽기를 지원하지 않습니다.");return}window.speechSynthesis.cancel();const P=window.speechSynthesis.getVoices(),E=p.split("-")[0],A=P.filter(M=>M.lang.startsWith(E)),N=A.filter(M=>M.localService),F=A.filter(M=>!M.localService),G=h&&F.length?F[0]:N[0]??A[0],q=new SpeechSynthesisUtterance(R);q.lang=p,q.rate=.95,G&&(q.voice=G),q.onstart=()=>d(T),q.onend=()=>d(null),q.onerror=M=>{d(null),console.warn("TTS error:",M)},window.speechSynthesis.speak(q)},[p,h]);m.useEffect(()=>{if(!("speechSynthesis"in window))return;const R=()=>window.speechSynthesis.getVoices();return window.speechSynthesis.onvoiceschanged=R,R(),()=>{window.speechSynthesis.onvoiceschanged=null}},[]);const L=m.useMemo(()=>{const R=n.trim().toLowerCase();return R?e.filter(T=>{const P=T.details?[...T.details.paragraphs,...T.details.bullets??[]]:[];return[T.title,T.summary,...P].join(" ").toLowerCase().includes(R)}):e},[n,e]),y=Math.max(1,Math.ceil(L.length/S)),$=Math.min(l,y),I=L.slice(($-1)*S,$*S),k=m.useCallback(async R=>{if(R.details!==void 0||R.detailLoading)return;const T=Se();if(T){t(P=>P.map(E=>E.id===R.id?{...E,detailLoading:!0}:E));try{const P=await fetch(`${T}/notices/${encodeURIComponent(R.id)}`);if(!P.ok)throw new Error("detail");const E=await P.json();t(A=>A.map(N=>N.id===R.id?{...N,details:E.details,detailLoading:!1}:N))}catch{t(P=>P.map(E=>E.id===R.id?{...E,detailLoading:!1}:E))}}},[]),j=m.useCallback(R=>{if(i===R.id){s(null);return}s(R.id),k(R)},[i,k]),z=R=>{R.preventDefault(),a(1)};return o.jsxs(CI,{children:[o.jsx(EI,{children:"공지사항"}),o.jsx(PI,{children:"전국 힐링 명상 웰니스 지도에서 전하는 소식을 확인하세요."}),w&&o.jsx(d4,{children:"불러오는 중…"}),!w&&e.length===0&&o.jsx(d4,{children:"등록된 공지가 없습니다."}),!w&&e.length>0&&o.jsxs(o.Fragment,{children:[o.jsxs(II,{onSubmit:z,children:[o.jsx(TI,{htmlFor:"notice-search",children:"공지사항 검색"}),o.jsxs(RI,{children:[o.jsx(zI,{id:"notice-search",type:"text",placeholder:"검색어를 입력해주세요.",value:n,onChange:R=>r(R.target.value)}),o.jsx(MI,{type:"submit",children:"검색"})]})]}),o.jsx(AI,{children:I.map(R=>{const T=i===R.id;return o.jsxs(_I,{type:"button",$active:T,onClick:()=>j(R),children:[o.jsxs(NI,{children:[o.jsx(DI,{children:R.category}),o.jsx(OI,{children:R.title}),o.jsx(BI,{children:R.date})]}),T&&o.jsxs(FI,{children:[o.jsxs(UI,{children:[o.jsx(VI,{type:"button",onClick:P=>{if(P.stopPropagation(),c===R.id){window.speechSynthesis.cancel();return}const E=R.details,A=[R.title,R.summary,...(E==null?void 0:E.paragraphs)??[],...(E==null?void 0:E.bullets)??[],E==null?void 0:E.footer].filter(Boolean).join(". ");x(A,R.id)},children:c===R.id?o.jsx(o.Fragment,{children:"멈추기"}):o.jsxs(o.Fragment,{children:[o.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),o.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"})]}),"음성으로 들으기"]})}),o.jsxs(WI,{children:[o.jsx("button",{type:"button",className:p==="ko-KR"?"active":"",onClick:P=>{P.stopPropagation(),f("ko-KR")},children:"한국어"}),o.jsx("button",{type:"button",className:p==="en-US"?"active":"",onClick:P=>{P.stopPropagation(),f("en-US")},children:"English"}),o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,fontSize:"0.85rem",cursor:"pointer"},children:[o.jsx("input",{type:"checkbox",checked:h,onChange:P=>{P.stopPropagation(),g(P.target.checked)}}),"고품질(온라인)"]})]})]}),o.jsx("p",{children:R.summary}),R.detailLoading&&o.jsx("p",{children:"본문을 불러오는 중…"}),!R.detailLoading&&R.details&&o.jsxs(o.Fragment,{children:[R.details.paragraphs.map(P=>o.jsx("p",{children:P},P)),R.details.bullets&&R.details.bullets.length>0&&o.jsx(HI,{children:R.details.bullets.map(P=>o.jsx("li",{children:P},P))}),R.details.footer&&o.jsx("p",{children:R.details.footer})]})]})]},R.id)})}),o.jsx(KI,{children:Array.from({length:y},(R,T)=>o.jsx(YI,{type:"button",$active:$===T+1,onClick:()=>a(T+1),children:T+1},`page-${T+1}`))})]})]})},ZI=u.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 24px 20px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};

  @media (max-width: 960px) {
    padding: 20px 14px calc(48px + env(safe-area-inset-bottom, 0px));
  }
`,qI=u.h1`
  font-size: 2.4rem;
  margin-bottom: 12px;
`,QI=u.p`
  font-size: 1.2rem;
  color: ${({theme:e})=>e.colors.text700};
`,XI=u.div`
  margin-top: 24px;
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 20px;
  box-shadow: ${({theme:e})=>e.shadow.soft};
`,JI=u.form`
  display: grid;
  gap: 16px;
  margin-top: 20px;
`,Ou=u.label`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text700};
`,p4=u.input`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${({theme:e})=>e.colors.border200};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: 10px 12px;
  font-size: 1rem;
`,eT=u.textarea`
  width: 100%;
  min-height: 160px;
  box-sizing: border-box;
  border: 1px solid ${({theme:e})=>e.colors.border200};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: 10px 12px;
  font-size: 1rem;
  resize: vertical;
`,tT=u.button`
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
`,f4=u.p`
  margin: 0;
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.text700};
`,nT=u.p`
  margin: 12px 0 0;
  font-size: 0.95rem;
  color: ${({theme:e,$variant:t})=>t==="error"?"#b91c1c":e.colors.primary700};
`,rT=()=>{const e=ut(h=>h.email),[t,n]=m.useState(e??""),[r,i]=m.useState(""),[s,l]=m.useState(""),[a,c]=m.useState(!1),[d,p]=m.useState(null),f=async h=>{if(h.preventDefault(),p(null),!Se()){p({text:"지금은 전송할 수 없어요. 잠시 후 다시 시도해 주세요.",ok:!1});return}if(!t.trim()||!r.trim()||!s.trim()){p({text:"이메일, 제목, 내용을 모두 입력해 주세요.",ok:!1});return}c(!0);try{if(!(await he("/inquiries",{method:"POST",body:JSON.stringify({email:t.trim(),subject:r.trim(),body:s.trim()})})).ok){p({text:"전송에 실패했습니다.",ok:!1});return}i(""),l(""),p({text:"문의가 접수되었습니다. 빠르게 답변드릴게요.",ok:!0})}catch{p({text:"전송에 실패했습니다. 잠시 후 다시 시도해 주세요.",ok:!1})}finally{c(!1)}};return o.jsxs(ZI,{children:[o.jsx(qI,{children:"1:1 문의"}),o.jsx(QI,{children:"궁금한 점을 남겨주시면 빠르게 답변드릴게요."}),o.jsxs(XI,{children:[o.jsx(f4,{children:"이메일: support@healingmeditation.kr"}),o.jsx(f4,{children:"운영시간: 평일 09:00 - 18:00"}),o.jsxs(JI,{onSubmit:h=>void f(h),children:[o.jsxs("div",{children:[o.jsx(Ou,{htmlFor:"inquiry-email",children:"회신 받을 이메일"}),o.jsx(p4,{id:"inquiry-email",type:"email",value:t,onChange:h=>n(h.target.value),autoComplete:"email",placeholder:"you@example.com"})]}),o.jsxs("div",{children:[o.jsx(Ou,{htmlFor:"inquiry-subject",children:"제목"}),o.jsx(p4,{id:"inquiry-subject",type:"text",value:r,onChange:h=>i(h.target.value),placeholder:"문의 제목"})]}),o.jsxs("div",{children:[o.jsx(Ou,{htmlFor:"inquiry-body",children:"내용"}),o.jsx(eT,{id:"inquiry-body",value:s,onChange:h=>l(h.target.value),placeholder:"문의 내용을 자유롭게 적어 주세요."})]}),o.jsx(tT,{type:"submit",disabled:a,children:a?"전송 중…":"문의 보내기"}),d&&o.jsx(nT,{$variant:d.ok?"ok":"error",role:"status",children:d.text})]})]})]})},h4=[{label:"전체",value:"all"},{label:"템플스테이",value:"템플스테이"},{label:"명상센터",value:"명상센터"},{label:"프리랜서",value:"프리랜서(공간없음)"},{label:"힐링명상",value:"힐링명상"},{label:"기타",value:"기타"}],iT=u.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 20px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};

  @media (max-width: 960px) {
    padding: 20px 14px calc(48px + env(safe-area-inset-bottom, 0px));
  }
`,oT=u.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 24px;
  color: ${({theme:e})=>e.colors.text900};
`,sT=u.div`
  display: flex;
  gap: 8px;
  margin: -8px 0 22px;
  padding: 4px 0;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`,lT=u.button`
  flex: 0 0 auto;
  padding: 9px 12px;
  border: 1px solid
    ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.primary200};
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.white};
  color: ${({theme:e,$active:t})=>t?e.colors.white:e.colors.text700};
  ${W.caption};
  cursor: pointer;
`,aT=u.span`
  margin-left: 4px;
  opacity: 0.72;
`,cT=u.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,uT=u.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text700};
  padding: 48px 24px;
  text-align: center;
  margin: 0;
`,dT=()=>{const[e,t]=m.useState("all"),{favorites:n}=mr(),r=en(a=>a.places),i=m.useMemo(()=>n.map(a=>r.find(c=>c.id===a)).filter(a=>a!=null),[n,r]),s=m.useMemo(()=>$a(i,{category:e,keyword:"",tags:[]}),[e,i]),l=m.useMemo(()=>new Map(h4.map(({value:a})=>[a,a==="all"?i.length:$a(i,{category:a,keyword:"",tags:[]}).length])),[i]);return o.jsxs(iT,{children:[o.jsx(oT,{children:"찜 목록"}),o.jsx(sT,{"aria-label":"찜 목록 카테고리",children:h4.map(a=>o.jsxs(lT,{type:"button",$active:e===a.value,onClick:()=>t(a.value),children:[a.label,o.jsx(aT,{children:l.get(a.value)??0})]},a.value))}),s.length===0?o.jsx(uT,{children:i.length===0?"찜한 명상아이템이 없어요. 리스트에서 하트를 눌러 찜해보세요.":"이 카테고리에 찜한 장소가 아직 없어요."}):o.jsx(cT,{children:s.map(a=>o.jsx("li",{children:o.jsx(Jo,{place:a})},a.id))})]})},pT="/assets/left-arrow-D7869Zjw.png";async function y0(e){var t;if(!e.ok){let n="요청을 처리하지 못했어요.";try{const r=await e.json();(t=r.message)!=null&&t.trim()&&(n=r.message)}catch{}throw new Error(n)}return await e.json()}async function fT(e){return y0(await he("/me/profile",{method:"PUT",body:JSON.stringify(e)}))}async function hT(){return y0(await he("/me"))}async function gT(){const e=await he("/me/expert-profile");if(e.status===204)return null;if(!e.ok)throw new Error("전문가 정보를 불러오지 못했어요.");const t=await e.json();return t?{name:String(t.name??""),intro:String(t.intro??""),degrees:Array.isArray(t.degrees)?t.degrees.map(String):[],certificates:Array.isArray(t.certificates)?t.certificates.map(String):[],careers:Array.isArray(t.careers)?t.careers.map(String):[],classTypes:Array.isArray(t.classTypes)?t.classTypes.map(String):[],regionIds:Array.isArray(t.regionIds)?t.regionIds.map(String):[],hasCenter:!!t.hasCenter,centerName:String(t.centerSummary??""),centerAddress:String(t.centerAddress??""),hidden:!!t.hidden}:null}async function mT(e){return y0(await he("/me/expert-profile",{method:"PUT",body:JSON.stringify({...e,businessOpeningDate:e.businessOpeningDate||null})}))}const xT=["힐링명상","템플스테이","행사","마음챙김","숲 명상","아트명상","호흡","숙박 프로그램"],LT=u.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  display: grid;
  place-items: end center;
  background: rgba(29, 16, 38, 0.46);
`,yT=u.section`
  width: min(100%, 620px);
  max-height: 88dvh;
  overflow-y: auto;
  padding: 20px 20px calc(24px + env(safe-area-inset-bottom, 0px));
  border-radius: 26px 26px 0 0;
  background: ${({theme:e})=>e.colors.white};
`,vT=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
`,wT=u.h2`
  margin: 0;
  ${W.title};
`,bT=u.button`
  border: 0;
  background: transparent;
  ${W.body1};
  cursor: pointer;
`,Bu=u.div`
  display: block;
  margin-top: 20px;
`,Fu=u.span`
  display: block;
  margin-bottom: 8px;
  ${W.body2};
  font-weight: 700;
`,kT=u.input`
  width: 100%;
  box-sizing: border-box;
  padding: 13px 14px;
  border: 1px solid ${({theme:e})=>e.colors.primary200};
  border-radius: 12px;
  ${W.body2};
`,g4=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,jT=u.div`
  padding: 12px;
  border-radius: 18px;
  background: ${({theme:e})=>e.colors.primary50};
`,ST=u.p`
  margin: 10px 0;
  color: ${({theme:e})=>e.colors.text700};
  ${W.caption};
`,m4=u.button`
  padding: 8px 11px;
  border: 1px solid
    ${({theme:e,$selected:t})=>t?e.colors.primary600:e.colors.primary200};
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e,$selected:t})=>t?e.colors.primary600:e.colors.white};
  color: ${({theme:e,$selected:t})=>t?e.colors.white:e.colors.text700};
  ${W.caption};
  cursor: pointer;
`,$T=u.button`
  width: 100%;
  margin-top: 28px;
  padding: 15px;
  border: 0;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary600};
  color: white;
  ${W.buttonMd};
  cursor: pointer;
`,CT=u.p`
  margin: 12px 0 0;
  color: #c5221f;
  ${W.caption};
`;function ET({open:e,profile:t,onClose:n,onSaved:r}){const[i,s]=m.useState(""),[l,a]=m.useState([]),[c,d]=m.useState([]),[p,f]=m.useState(!1),[h,g]=m.useState(null);if(m.useEffect(()=>{e&&(s(t.displayName||t.username.split("@")[0]||""),a(t.regionIds??[]),d(t.interests??[]),g(null))},[e,t]),!e)return null;const w=(v,S,x)=>{x(S.includes(v)?S.filter(L=>L!==v):[...S,v])};return o.jsx(LT,{onMouseDown:n,children:o.jsxs(yT,{role:"dialog","aria-modal":"true",onMouseDown:v=>v.stopPropagation(),children:[o.jsxs(vT,{children:[o.jsx(wT,{children:"프로필 수정"}),o.jsx(bT,{type:"button",onClick:n,"aria-label":"닫기",children:"×"})]}),o.jsxs(Bu,{children:[o.jsx(Fu,{children:"이름"}),o.jsx(kT,{value:i,maxLength:80,onChange:v=>s(v.target.value),placeholder:"화면에 표시할 이름"})]}),o.jsxs(Bu,{children:[o.jsx(Fu,{children:"주 활동 지역"}),o.jsx(jT,{children:o.jsx(As,{activeRegionIds:l,maxMapHeight:"min(42dvh, 420px)",onSelectRegion:v=>w(v,l,a)})}),o.jsx(ST,{children:"지도에서 활동 지역을 선택해 주세요. 선택된 지역을 다시 누르면 해제됩니다."}),o.jsx(g4,{children:Gr.filter(v=>l.includes(v.id)).map(v=>o.jsxs(m4,{type:"button",$selected:!0,onClick:()=>w(v.id,l,a),children:[v.name," ×"]},v.id))})]}),o.jsxs(Bu,{children:[o.jsx(Fu,{children:"관심사"}),o.jsx(g4,{children:xT.map(v=>o.jsx(m4,{type:"button",$selected:c.includes(v),onClick:()=>w(v,c,d),children:v},v))})]}),h&&o.jsx(CT,{children:h}),o.jsx($T,{type:"button",disabled:p||!i.trim(),onClick:()=>{f(!0),g(null),fT({displayName:i.trim(),regionIds:l,interests:c}).then(v=>{r(v),n()}).catch(v=>g(v instanceof Error?v.message:"저장하지 못했어요.")).finally(()=>f(!1))},children:p?"저장 중…":"저장하기"})]})})}const PT=we`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,v0=we`
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,IT=we`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,TT=we`
  from {
    opacity: 0;
    transform: scale(0.96) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`,g5=we`
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,RT=we`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Hu=u.div`
  margin-top: 0;
  animation: ${RT} 0.42s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,zT=u.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,MT=u.p`
  margin: 0;
  padding: 0 4px;
  text-align: left;
  ${W.caption};
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.45;
`,AT=u.section`
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
`,_T=u.div`
  align-self: stretch;
  flex-shrink: 0;
  width: 100%;
  height: 4px;
  margin: 0 0 12px;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary100};
  overflow: hidden;
`,NT=u.div`
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
`,DT=u.div`
  position: relative;
  width: min(100%, 420px);
  padding: 6px 18px 16px;
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,si=u.div`
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${PT} 0.35s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,vo=u.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
`,wo=u.div`
  flex-shrink: 0;
  margin-top: auto;
  padding-top: 12px;
  width: 100%;
`,OT=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
  gap: 12px;
  flex-shrink: 0;
`,BT=u.button`
  border: none;
  background: transparent;
  color: ${({theme:e})=>e.colors.text900};
  ${W.body2};
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
`,FT=u.img`
  width: 18px;
  height: 18px;
  object-fit: contain;
`,HT=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  flex-shrink: 0;
`,UT=u.img`
  width: 74px;
  height: 74px;
  object-fit: contain;
`,x4=u.p`
  margin: 10px 0 0;
  padding: 0 12px;
  text-align: center;
  ${W.body1};
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text900};
  line-height: 1.45;
  max-width: 320px;
`,VT=u.h1`
  margin: 8px 0 0;
  ${W.title};
  color: ${({theme:e})=>e.colors.primary300};
`,Uu=u.h2`
  margin: 14px 0 0;
  text-align: center;
  ${W.h3};
`,L4=u.p`
  margin: 8px 0 0;
  text-align: center;
  ${W.body2};
  color: ${({theme:e})=>e.colors.text700};
`,WT=we`
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
`,Vu=u.div`
  position: fixed;
  top: calc(env(safe-area-inset-top, 0px) + 10px);
  left: 50%;
  z-index: 130;
  pointer-events: none;
  animation: ${WT} 2.2s ease both;
`,Wu=u.div`
  padding: 12px 18px;
  border-radius: ${({theme:e})=>e.radii.pill};
  border: 1px solid
    ${({$variant:e})=>e==="error"?"#f0b8b8":"#96d6a3"};
  background: ${({$variant:e})=>e==="error"?"#fce8e6":"#e8f8ec"};
  color: ${({$variant:e})=>e==="error"?"#c5221f":"#1f6a2b"};
  ${W.body2};
`,y4=u.div`
  margin-top: clamp(24px, 6vh, 48px);
  display: flex;
  flex-direction: column;
  gap: 14px;
`,KT=u.p`
  margin: 8px 0 0;
  text-align: center;
  ${W.body2};
  color: ${({theme:e})=>e.colors.text700};
`,Ir=u.p`
  margin: 6px 4px 0;
  ${W.caption};
  color: #d93025;
  animation: ${v0} 0.24s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,YT=u.p`
  margin: 6px 4px 0;
  ${W.caption};
  color: #188038;
  animation: ${v0} 0.24s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,GT=u.p`
  margin: 6px 4px 0;
  ${W.caption};
  color: ${({theme:e})=>e.colors.text700};
`,v4=u.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  animation: ${g5} 0.42s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: ${({$index:e})=>e*.07}s;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,ZT=u(KT)`
  margin-top: 0;
  text-align: left;
  padding: 0 2px;
  animation: ${g5} 0.42s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,qT=u.div`
  margin-top: 4px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,QT=u.button`
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
`,XT=u.span`
  ${W.h2};
  font-weight: 300;
  line-height: 1;
  color: ${({theme:e})=>e.colors.text700};
  opacity: 0.55;
  user-select: none;
`,JT=u.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,eR=u.input`
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
`,w4=u(Ir)`
  animation: ${v0} 0.3s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Ku=u.div`
  position: relative;
  width: 100%;
`,Yu=u.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  color: ${({theme:e})=>e.colors.text700};
  ${W.caption};
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
`,tR=u.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
`,nR=u.button`
  border: 1px solid
    ${({theme:e,$highlight:t})=>t?e.colors.primary600:e.colors.primary200};
  background: ${({theme:e,$highlight:t})=>t?e.colors.primary600:e.colors.white};
  color: ${({theme:e,$highlight:t})=>t?e.colors.white:e.colors.text700};
  border-radius: ${({theme:e})=>e.radii.pill};
  padding: 12px 14px;
  ${W.buttonMd};
  cursor: pointer;
  opacity: 1;
  transition: border-color 0.22s ease, background 0.22s ease, color 0.22s ease;

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`,di=u.button`
  width: 100%;
  border: none;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary300};
  color: ${({theme:e})=>e.colors.white};
  padding: 16px 20px;
  ${W.buttonMd};
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({$disabled:e})=>e?.55:1};
  margin-top: 0;
  flex-shrink: 0;
  transition: opacity 0.25s ease, transform 0.2s ease;

  &:not(:disabled):active {
    transform: scale(0.99);
  }
`,rR=u.div`
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`,iR=u.button`
  border: 1px solid ${({theme:e})=>e.colors.primary300};
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.primary300};
  ${W.buttonMd};
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
`,oR=u.p`
  margin: 0;
  text-align: center;
  ${W.caption};
  color: ${({theme:e,$error:t})=>t?"#d93025":e.colors.text700};
  max-width: 320px;
  line-height: 1.45;
`,sR=u.div`
  margin-top: 18px;
`,m5=u.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.28);
  display: grid;
  place-items: center;
  z-index: 120;
  animation: ${IT} 0.22s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,lR=u(m5)`
  z-index: 125;
`,x5=u.div`
  width: min(88vw, 320px);
  background: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 22px 18px 16px;
  animation: ${TT} 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,b4=u.p`
  text-align: center;
  ${W.body1};
  color: ${({theme:e})=>e.colors.text900};
`,aR=u.div`
  margin-top: 18px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`,U1=u.button`
  border: 1px solid
    ${({theme:e,$primary:t})=>t?e.colors.primary300:e.colors.primary200};
  background: ${({theme:e,$primary:t})=>t?e.colors.primary300:e.colors.white};
  color: ${({theme:e,$primary:t})=>t?e.colors.white:e.colors.text900};
  border-radius: ${({theme:e})=>e.radii.pill};
  padding: 10px 14px;
  ${W.buttonMd};
  cursor: pointer;
`,cR=u(U1).attrs({type:"button",$primary:!0})`
  width: 100%;
  margin-top: 14px;
`,uR=u.div`
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
  ${W.h2};
  background:
    linear-gradient(to top, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.06)),
    radial-gradient(circle at 20% 20%, #a8d97a, #5f8f49 38%, #304f2d);
`,dR=u.button`
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
`,pR=u(di)`
  flex-shrink: 0;
`,fR=u.button`
  border: 1px solid ${({theme:e})=>e.colors.primary200};
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.primary300};
  ${W.buttonMd};
  border-radius: ${({theme:e})=>e.radii.pill};
  padding: 8px 14px;
  cursor: pointer;
  flex-shrink: 0;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.colors.primary50};
    border-color: ${({theme:e})=>e.colors.primary300};
  }
`,hR=u.span`
  display: block;
  text-align: right;
  width: 100%;
  margin: 0 0 4px;
  ${W.caption};
  color: ${({theme:e})=>e.colors.text700};
`,gR=u.div`
  margin: 36px auto 0;
  display: flex;
  justify-content: center;
`,mR=u.img`
  width: 108px;
  height: 108px;
  object-fit: contain;
`,xR=u.h2`
  margin: 10px 0 0;
  text-align: center;
  ${W.h1};
  color: ${({theme:e})=>e.colors.primary300};
`,LR=u.p`
  margin: 8px 0 0;
  text-align: center;
  ${W.body2};
  color: ${({theme:e})=>e.colors.text700};
`,yR=u.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,rs=u.input`
  width: 100%;
  border: 1px solid ${({theme:e,$error:t})=>t?"#d93025":e.colors.primary200};
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.text900};
  ${W.body2};
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
`,Gu=u(rs)`
  padding: 14px 56px 14px 24px;
  transition:
    border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.22s ease;
`,vR=u.div`
  position: relative;
  width: 100%;
  min-width: 0;
`,wR=u(rs)`
  padding: 14px 58px 14px 24px;
`,bR=u.span`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  ${W.caption};
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: ${({theme:e})=>e.colors.text700};
`,kR=u.button`
  margin-top: 0;
  width: 100%;
  border: none;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary300};
  color: ${({theme:e})=>e.colors.white};
  padding: 16px 20px;
  ${W.buttonMd};
  cursor: pointer;
  transition: transform 0.15s ease;

  &:hover {
    transform: translateY(-1px);
  }
`,jR=u.div`
  margin: 22px 0 18px;
  display: flex;
  align-items: center;
  gap: 14px;
  color: ${({theme:e})=>e.colors.text700};
  ${W.caption};

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: ${({theme:e})=>e.colors.primary200};
  }
`,SR=u.div`
  display: flex;
  justify-content: center;
  gap: 22px;
`,Zu=u.button`
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
`,qu=u.a`
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
`,li=u.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
`,$R=u.div`
  margin: 28px 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 6px;
  text-align: center;
  ${W.body2};
  color: ${({theme:e})=>e.colors.text900};
`,CR=u.button`
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
`,ER=u.div`
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
`,PR=u.div`
  flex: 1 1 auto;
  min-height: min(200px, 28dvh);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,IR=u.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  padding-bottom: 4px;
`,TR=u.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0;
`,RR=u.img`
  width: 72px;
  height: 72px;
  object-fit: contain;
`,zR=u.p`
  margin: 0;
  text-align: center;
  ${W.body2};
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.45;
  max-width: 300px;
`,MR=u.div`
  margin-top: 22px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
`,Qu=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 52px;
  padding: 10px 0;
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary200};
`,Xu=u.label`
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
`,Ju=u.input`
  width: 20px;
  height: 20px;
  margin: 2px 0 0;
  flex-shrink: 0;
  accent-color: ${({theme:e})=>e.colors.primary300};
  cursor: pointer;
`,ed=u.span`
  ${W.body2};
  color: ${({theme:e})=>e.colors.text900};
  line-height: 1.4;
`,td=u.span`
  display: inline-block;
  margin-right: 6px;
  ${W.caption};
  font-weight: 700;
  color: ${({theme:e,$optional:t})=>t?e.colors.text700:e.colors.primary600};
`,nd=u.button`
  flex-shrink: 0;
  margin: 0;
  padding: 8px 4px 8px 10px;
  border: none;
  background: none;
  ${W.caption};
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
`,AR=u.div`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: stretch;
`,_R=u.button`
  flex: 2;
  min-width: 0;
  border: 1px solid ${({theme:e})=>e.colors.primary300};
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.primary300};
  padding: 12px 8px;
  ${W.caption};
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
`,NR=u.button`
  flex: 8;
  min-width: 0;
  border: none;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary300};
  color: ${({theme:e})=>e.colors.white};
  padding: 16px 20px;
  ${W.buttonMd};
  cursor: pointer;
  transition: opacity 0.22s ease, transform 0.2s ease;

  &:active {
    transform: scale(0.99);
  }
`,DR=u(x5)`
  width: min(92vw, 360px);
  max-height: min(72dvh, 520px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 18px 16px 14px;
`,OR=u.div`
  margin-top: 12px;
  overflow-y: auto;
  flex: 1 1 auto;
  min-height: 0;
  ${W.body2};
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.55;
  white-space: pre-line;
`,BR=u.div`
  width: min(100%, 680px);
  padding: 0 2px 32px;
`,FR=u.h1`
  margin: 0 0 20px;
  text-align: center;
  ${W.title};
`,HR=u.section`
  position: relative;
  overflow: hidden;
  padding: 26px 22px 22px;
  border: 1px solid rgba(75, 0, 130, 0.08);
  border-radius: 28px;
  background:
    radial-gradient(circle at 100% 0%, rgba(245, 216, 208, 0.9), transparent 38%),
    linear-gradient(145deg, #ffffff 0%, #faf5ff 100%);
  box-shadow: 0 16px 40px rgba(75, 0, 130, 0.09);
`,UR=u.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 18px;
`,VR=u.button`
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
`,WR=u.img`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
  object-fit: cover;
`,KR=u.span`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: linear-gradient(145deg, #d8c5e9, #a88bca);
  color: ${({theme:e})=>e.colors.white};
  font-size: 1.65rem;
  font-weight: 800;
`,YR=u.span`
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
`,GR=u.div`
  min-width: 0;
  flex: 1;
`,ZR=u.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`,qR=u.h2`
  margin: 0;
  ${W.title};
`,QR=u.span`
  padding: 5px 9px;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary100};
  color: ${({theme:e})=>e.colors.primary600};
  ${W.caption};
  font-weight: 800;
`,XR=u.p`
  margin: 6px 0 0;
  color: ${({theme:e})=>e.colors.text700};
  ${W.body2};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,JR=u.p`
  margin: 8px 0 0;
  color: ${({theme:e})=>e.colors.primary500};
  ${W.caption};
  font-weight: 700;
`,ez=u.button`
  margin-top: 10px;
  padding: 8px 12px;
  border: 1px solid ${({theme:e})=>e.colors.primary200};
  border-radius: ${({theme:e})=>e.radii.pill};
  background: rgba(255, 255, 255, 0.76);
  color: ${({theme:e})=>e.colors.primary600};
  ${W.caption};
  font-weight: 700;
  cursor: pointer;
`,tz=u.input`
  display: none;
`,nz=u.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 24px;
  padding: 17px 8px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(10px);
`,rd=u.div`
  text-align: center;

  & + & {
    border-left: 1px solid rgba(75, 0, 130, 0.1);
  }
`,id=u.strong`
  display: block;
  color: ${({theme:e})=>e.colors.primary600};
  ${W.body1};
  font-weight: 700;
`,od=u.span`
  display: block;
  margin-top: 4px;
  color: ${({theme:e})=>e.colors.text700};
  ${W.caption};
`,rz=u.button`
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
`,iz=u.span`
  width: 44px;
  height: 44px;
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.16);
  font-size: 1.35rem;
`,oz=u.span`
  flex: 1;

  strong,
  small {
    display: block;
  }

  strong {
    ${W.body2};
    font-weight: 700;
  }

  small {
    margin-top: 5px;
    color: rgba(255, 255, 255, 0.75);
    ${W.caption};
  }
`,sd=u.section`
  margin-top: 26px;
`,ld=u.h3`
  margin: 0 4px 11px;
  ${W.body1};
  font-weight: 700;
`,sz=u.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
`,k4=u.button`
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
`,j4=u.span`
  display: block;
  font-size: 1.35rem;
`,S4=u.strong`
  display: block;
  margin-top: 12px;
  ${W.body2};
  font-weight: 700;
`,$4=u.span`
  display: block;
  margin-top: 4px;
  color: ${({theme:e})=>e.colors.text700};
  ${W.caption};
`,C4=u.div`
  overflow: hidden;
  border: 1px solid rgba(75, 0, 130, 0.08);
  border-radius: 22px;
  background: ${({theme:e})=>e.colors.white};
  box-shadow: 0 7px 22px rgba(61, 61, 61, 0.04);
`,bo=u.button`
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
`,ko=u.span`
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: ${({theme:e})=>e.colors.primary50};
`,jo=u.span`
  flex: 1;
  ${W.body2};
  font-weight: 600;
`,ai=u.span`
  color: ${({theme:e})=>e.colors.mutedMauve};
  font-size: 1.25rem;
`,lz=u.p`
  margin: 12px 4px 0;
  color: ${({$error:e,theme:t})=>e?"#c5221f":t.colors.primary600};
  ${W.caption};
  text-align: center;
`,az=u.button`
  display: block;
  margin: 26px auto 0;
  padding: 10px 18px;
  border: 0;
  background: transparent;
  color: ${({theme:e})=>e.colors.text700};
  ${W.caption};
  text-decoration: underline;
  text-underline-offset: 4px;
  cursor: pointer;
`,E4={service:{title:"서비스 이용약관",body:`제1조 (목적)
본 약관은 명상 웰니스 지도 서비스의 이용 조건 및 절차, 회사와 회원 간 권리·의무를 규정합니다.

제2조 (정의)
“서비스”란 회사가 제공하는 명상 웰니스 지도 및 관련 기능을 말합니다.

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

수신 방법·빈도·철회 절차 등은 추후 설정에서 변경하실 수 있습니다.`}},P4=e=>!(e.length<8||!/[a-zA-Z]/.test(e)||!/[0-9]/.test(e)),I4=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,T4=/^[^\s@]+@[^\s@]+\./,ad=/^01[0-9]\d{7,8}$/,ci="meditation-oauth-signup-ticket",cz=()=>{var O0;const e=ft(),[t,n]=g3(),r=m.useRef(!1),[i,s]=m.useState("login"),[l,a]=m.useState(""),[c,d]=m.useState(!1),[p,f]=m.useState({status:"idle",email:null}),[h,g]=m.useState(""),[w,v]=m.useState(""),[S,x]=m.useState(""),[L,y]=m.useState(""),[$,I]=m.useState(!1),[k,j]=m.useState(!1),[z,R]=m.useState(!1),[T,P]=m.useState("KR-11"),[E,A]=m.useState(!1),[N,F]=m.useState(!1),[G,q]=m.useState(!1),[M,O]=m.useState(null),[C,Q]=m.useState(null),[X,b]=m.useState(300),[H,_]=m.useState(!1),[Z,V]=m.useState(!1),[ee,ue]=m.useState(!1),[be,fe]=m.useState(!1),[xe,$e]=m.useState(null),[Re,Oe]=m.useState(!1),[qe,ze]=m.useState(null),[Kt,te]=m.useState(!1),[Ce,Ee]=m.useState(""),[bt,sn]=m.useState(""),[Ve,Jr]=m.useState(!1),[B,U]=m.useState(null),ne=ut(D=>D.accessToken),de=ut(D=>D.email),ke=ut(D=>D.logout),Ct=mr(D=>D.favorites.length),Yt=m.useRef(null),[oe,ln]=m.useState(null),[kr,ht]=m.useState(!1),[Rn,Gt]=m.useState(!1),[I5,$0]=m.useState(!1),[pc,jr]=m.useState(null),T5=((O0=Wn(T))==null?void 0:O0.name)??"서울",ei=m.useMemo(()=>Se()??"",[]),C0=m.useRef(null),[E0,P0]=m.useState(null),[fc,hc]=m.useState(null),Ds=()=>{P0(null),hc(D=>(D!=null&&D.startsWith("blob:")&&URL.revokeObjectURL(D),null))},R5=D=>{if(!D.type.startsWith("image/")){U("이미지 파일만 선택할 수 있어요.");return}const re=5*1024*1024;if(D.size>re){U("사진은 5MB 이하로 선택해 주세요.");return}U(null),P0(D);const Le=URL.createObjectURL(D);hc(Be=>(Be!=null&&Be.startsWith("blob:")&&URL.revokeObjectURL(Be),Le))},gt=m.useMemo(()=>l.trim(),[l]),ti=m.useMemo(()=>gt?!I4.test(gt):!1,[gt]),gc=m.useMemo(()=>gt.length>0&&I4.test(gt),[gt]),I0=!!Se()&&gt.length>0&&T4.test(gt),mt=p.email===gt?p:null,ao=!!mt&&mt.status==="unavailable",T0=m.useMemo(()=>gc?Se()?(mt==null?void 0:mt.status)==="available"&&mt.email===gt:!0:!1,[gc,gt,mt]),z5=ti||ao,zn=m.useMemo(()=>h.replace(/[^\d]/g,""),[h]),M5=m.useMemo(()=>zn?!ad.test(zn):!1,[zn]),R0=m.useMemo(()=>zn.length>0&&ad.test(zn),[zn]),z0=M5,mc=m.useMemo(()=>/^\d{6}$/.test(w.trim()),[w]),M0=async()=>{if(!Se()||!ad.test(zn))return!1;try{return(await he("/auth/phone/signup/send-otp",{method:"POST",body:JSON.stringify({phone:zn})})).ok}catch{return!1}},A5=async()=>{if(!Se()){U("지금은 이용할 수 없어요. 잠시 후 다시 시도해 주세요.");return}U(null),O(null),q(!1),Q(null),v(""),F(!0),b(300),_(!0),window.setTimeout(()=>{var re;(re=document.getElementById("signup-code-anchor"))==null||re.scrollIntoView({behavior:"smooth",block:"nearest"})},120),await M0()||U("인증 문자를 보내지 못했어요. 잠시 후 다시 시도해 주세요.")},_5=async()=>{v(""),q(!1),O(null),Q(null),b(300),_(!0),await M0()||U("인증 문자를 다시 보내지 못했어요. 잠시 후 다시 시도해 주세요.")},N5=async()=>{if(mc){if(!Se()){U("지금은 이용할 수 없어요. 잠시 후 다시 시도해 주세요.");return}U(null);try{const D=await he("/auth/phone/signup/verify-otp",{method:"POST",body:JSON.stringify({phone:zn,code:w.trim()})});if(!D.ok){Q("error");return}const Le=(await D.json()).phoneVerificationToken;if(!Le){Q("error");return}O(Le),q(!0),Q("success")}catch{Q("error")}}},xc=m.useMemo(()=>{const D=S;return D?D.length<8?"8자 이상이어야 합니다":/[a-zA-Z]/.test(D)?/[0-9]/.test(D)?null:"숫자가 포함되어야 합니다":"영문이 포함되어야 합니다":null},[S]),A0=m.useMemo(()=>L.length>0&&S!==L,[S,L]),_0=m.useMemo(()=>P4(S)&&S===L,[S,L]),D5=X<=0,N0=m.useMemo(()=>{const D=Math.floor(X/60),re=X%60;return`${D}:${String(re).padStart(2,"0")}`},[X]),Lc=m.useMemo(()=>Z&&ee,[Z,ee]),Os=m.useMemo(()=>{switch(i){case"signup-terms":return 20;case"signup-account":return 40;case"signup-region":return 60;case"signup-interest":return 80;case"signup-complete":return 100;default:return null}},[i]);m.useEffect(()=>{var Zt,_t;if(r.current||t.get("signupOAuth")!=="1")return;const D=(Zt=t.get("oauthSignupTicket"))==null?void 0:Zt.trim();if(!D)return;r.current=!0;const re=t.get("email")??"",Le=((_t=t.get("picture"))==null?void 0:_t.trim())??"";s("signup-account"),re&&a(re),d(!0),Le.startsWith("https://")&&hc(an=>(an!=null&&an.startsWith("blob:")&&URL.revokeObjectURL(an),Le));try{sessionStorage.setItem(ci,D)}catch{}const Be=new URLSearchParams(t);Be.delete("signupOAuth"),Be.delete("oauthSignupTicket"),Be.delete("email"),Be.delete("picture"),n(Be,{replace:!0})},[t,n]),m.useEffect(()=>{if(t.get("start")!=="signup"||ne)return;s("signup-terms");const D=new URLSearchParams(t);D.delete("start"),n(D,{replace:!0})},[t,n,ne]),m.useEffect(()=>{if(i!=="signup-account"||c)return;if(!gt.length||!T4.test(gt)){f({status:"idle",email:null});return}if(!Se()){f({status:"idle",email:null});return}const re=gt,Le=new AbortController,Zt=window.setTimeout(()=>{f({status:"loading",email:re}),(async()=>{try{const _t=await he(`/auth/email/availability?email=${encodeURIComponent(re)}`,{signal:Le.signal});if(!_t.ok){f({status:"error",email:re});return}const K5=!!(await _t.json()).available;f({status:K5?"available":"unavailable",email:re})}catch(_t){if(_t.name==="AbortError"||!Se())return;f({status:"error",email:re})}})()},320);return()=>{window.clearTimeout(Zt),Le.abort()}},[gt,i,c]),m.useEffect(()=>{if(i!=="signup-account"||!N)return;const D=window.setInterval(()=>{b(re=>re>0?re-1:0)},1e3);return()=>window.clearInterval(D)},[i,N]),m.useEffect(()=>{if(i!=="signup-account"||!N||!G)return;const D=window.setTimeout(()=>{var re;(re=document.getElementById("signup-password-anchor"))==null||re.scrollIntoView({behavior:"smooth",block:"nearest"})},80);return()=>window.clearTimeout(D)},[i,N,G]),m.useEffect(()=>{if(i!=="signup-account"||!c)return;const D=window.setTimeout(()=>{var re;(re=document.getElementById("signup-phone-anchor"))==null||re.scrollIntoView({behavior:"smooth",block:"nearest"})},100);return()=>window.clearTimeout(D)},[i,c]),m.useEffect(()=>{if(!C)return;const D=window.setTimeout(()=>{Q(null)},2200);return()=>window.clearTimeout(D)},[C]),m.useEffect(()=>{if(!H)return;const D=window.setTimeout(()=>{_(!1)},2200);return()=>window.clearTimeout(D)},[H]),m.useEffect(()=>{i==="login"&&R(!1)},[i]),m.useEffect(()=>{i!=="signup-region"&&(ze(null),te(!1),Oe(!1))},[i]);const O5=()=>{if(ze(null),te(!1),!navigator.geolocation){te(!0),ze("이 환경에서는 위치 정보를 쓸 수 없어요. 지도에서 골라주세요.");return}Oe(!0),navigator.geolocation.getCurrentPosition(D=>{var Le;Oe(!1);const re=ev(D.coords.latitude,D.coords.longitude);if(re){P(re),A(!0),te(!1);const Be=((Le=Wn(re))==null?void 0:Le.name)??re;ze(`${Be} 지역으로 맞췄어요. 맞는지 확인해 주세요.`)}else te(!0),ze("위치로 시·도를 찾지 못했어요. 지도에서 선택해 주세요.")},D=>{Oe(!1),te(!0),D.code===1?ze("위치 권한이 필요해요. 허용하시거나 지도에서 골라주세요."):D.code===2?ze("위치를 가져올 수 없어요. 지도에서 선택해 주세요."):ze("위치 확인에 실패했어요. 지도에서 선택해 주세요.")},{enableHighAccuracy:!1,maximumAge:3e5,timeout:12e3})},B5=()=>{if(i==="login"){e(-1);return}if(i==="signup-terms"){$e(null),s("login");return}if(i==="signup-account"){let D=null;try{D=sessionStorage.getItem(ci)}catch{D=null}if(D){try{sessionStorage.removeItem(ci)}catch{}d(!1),f({status:"idle",email:null}),Ds(),O(null),F(!1),q(!1),Q(null),g(""),v(""),x(""),y(""),I(!1),j(!1),s("login");return}d(!1),f({status:"idle",email:null}),Ds(),O(null),F(!1),q(!1),Q(null),g(""),v(""),x(""),y(""),I(!1),j(!1),s("signup-terms");return}if(i==="signup-region"){s("signup-account");return}i==="signup-interest"&&s("signup-region")},F5=async()=>{if(U(null),!Se()){Ke.error("지금은 이용할 수 없어요. 잠시 후 다시 시도해 주세요.");return}const D=Ce.trim();if(!D||!bt){Ke.error("이메일과 비밀번호를 입력해 주세요.");return}Jr(!0);try{const re=await he("/auth/login",{method:"POST",body:JSON.stringify({email:D,password:bt})});if(!re.ok){let Le="";try{Le=(await re.json()).error??""}catch{}Ke.error(Le==="INVALID_CREDENTIALS"?"이메일 또는 비밀번호를 확인해 주세요.":"로그인에 실패했습니다.");return}await ut.getState().setSession(),await mr.getState().pullFromServer(),sn("")}catch{Ke.error("잠시 후 다시 시도해 주세요.")}finally{Jr(!1)}},H5=async()=>{if(U(null),!Se()){U("지금은 이용할 수 없어요. 잠시 후 다시 시도해 주세요.");return}if(!P4(S)||S!==L){U("비밀번호를 다시 확인해 주세요.");return}let D=null;try{D=sessionStorage.getItem(ci)}catch{D=null}if(!D&&(!M||M.trim()==="")){U("휴대폰 인증을 완료해 주세요.");return}const re=Se();Jr(!0);try{const Le=new FormData;Le.append("email",gt),Le.append("password",S),D?Le.append("oauthSignupToken",D):Le.append("phoneVerificationToken",M.trim()),E0&&Le.append("profileImage",E0);const Be=D?`${re}/auth/register/oauth`:`${re}/auth/register`,Zt=await fetch(Be,{method:"POST",body:Le,credentials:"include"});if(Zt.status===409){U("이미 가입된 이메일입니다.");return}if(!Zt.ok){try{const _t=await Zt.json(),an=_t.code??_t.error??"";if(Zt.status===400&&an==="INVALID_OAUTH_SIGNUP_TOKEN"){U("소셜 가입 세션이 만료되었습니다. 소셜 로그인을 다시 진행해 주세요.");try{sessionStorage.removeItem(ci)}catch{}return}if(Zt.status===400&&an==="INVALID_PROFILE_IMAGE_OBJECT_KEY"){U("프로필 사진 정보가 올바르지 않아요. 사진을 다시 선택해 주세요.");return}}catch{}U("회원가입에 실패했습니다.");return}try{sessionStorage.removeItem(ci)}catch{}await ut.getState().setSession(),await mr.getState().pullFromServer(),Ds(),s("login")}catch{U("잠시 후 다시 시도해 주세요.")}finally{Jr(!1)}};m.useEffect(()=>{if(!ne||i!=="login"||!Se()){ln(null);return}let D=!0;return ht(!0),jr(null),he("/me").then(async re=>{if(!re.ok)throw new Error("profile");const Le=await re.json();D&&ln(Le)}).catch(()=>{D&&jr({text:"프로필 정보를 불러오지 못했어요.",error:!0})}).finally(()=>{D&&ht(!1)}),()=>{D=!1}},[ne,i]);const U5=async D=>{var Le;if(!D)return;if(!D.type.startsWith("image/")){jr({text:"이미지 파일만 선택할 수 있어요.",error:!0});return}if(D.size>5*1024*1024){jr({text:"사진은 5MB 이하로 선택해 주세요.",error:!0});return}const re=new FormData;re.append("file",D),Gt(!0),jr(null);try{const Be=await he("/me/profile-image",{method:"POST",body:re});if(!Be.ok){let _t="사진을 바꾸지 못했어요. 잠시 후 다시 시도해 주세요.";try{const an=await Be.json();(Le=an.message)!=null&&Le.trim()&&(_t=an.message)}catch{}throw new Error(_t)}const Zt=await Be.json();ln(Zt),jr({text:"프로필 사진을 바꿨어요."})}catch(Be){jr({text:Be instanceof Error?Be.message:"사진을 바꾸지 못했어요. 잠시 후 다시 시도해 주세요.",error:!0})}finally{Gt(!1),Yt.current&&(Yt.current.value="")}},D0=(oe==null?void 0:oe.email)??de??"",yc=(oe==null?void 0:oe.displayName)||(oe==null?void 0:oe.username)||D0||"명상가",vc=yc.includes("@")?yc.split("@")[0]:yc,V5=(vc.trim()[0]??"명").toUpperCase(),W5=oe!=null&&oe.createdAt?new Date(oe.createdAt).getFullYear():new Date().getFullYear();return o.jsxs(AT,{$dashboard:!!ne&&i==="login",children:[Os!==null&&o.jsx(_T,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Os,"aria-label":`회원가입 진행 ${Os}%`,children:o.jsx(NT,{$pct:Os})}),ne&&i==="login"?o.jsxs(BR,{children:[o.jsx(FR,{children:"마이 페이지"}),o.jsxs(HR,{children:[o.jsxs(UR,{children:[o.jsxs(VR,{type:"button","aria-label":"프로필 사진 바꾸기",disabled:Rn,onClick:()=>{var D;return(D=Yt.current)==null?void 0:D.click()},children:[oe!=null&&oe.profileImageUrl?o.jsx(WR,{src:oe.profileImageUrl,alt:`${vc} 프로필`}):o.jsx(KR,{"aria-hidden":"true",children:V5}),o.jsx(YR,{"aria-hidden":"true",children:Rn?"…":"✦"})]}),o.jsx(tz,{ref:Yt,type:"file",accept:"image/*",onChange:D=>{var re;return void U5((re=D.target.files)==null?void 0:re[0])}}),o.jsxs(GR,{children:[o.jsxs(ZR,{children:[o.jsxs(qR,{children:[vc,"님"]}),o.jsx(QR,{children:(oe==null?void 0:oe.role)==="MEMBER"?"MEMBER":(oe==null?void 0:oe.role)??"MEMBER"})]}),o.jsx(XR,{children:D0}),o.jsx(JR,{children:kr?"프로필을 불러오는 중…":"사진을 눌러 프로필을 꾸며보세요"}),o.jsx(ez,{type:"button",onClick:()=>$0(!0),children:"프로필 수정"})]})]}),o.jsxs(nz,{children:[o.jsxs(rd,{children:[o.jsx(id,{children:Ct}),o.jsx(od,{children:"저장한 장소"})]}),o.jsxs(rd,{children:[o.jsx(id,{children:W5}),o.jsx(od,{children:"함께한 해"})]}),o.jsxs(rd,{children:[o.jsx(id,{children:"맑음"}),o.jsx(od,{children:"오늘의 마음"})]})]})]}),pc&&o.jsx(lz,{$error:pc.error,children:pc.text}),o.jsxs(rz,{type:"button",onClick:()=>e("/meditation/map"),children:[o.jsx(iz,{"aria-hidden":"true",children:"◌"}),o.jsxs(oz,{children:[o.jsx("strong",{children:"오늘, 잠시 쉬어갈 곳을 찾아볼까요?"}),o.jsx("small",{children:"내 주변 명상 공간을 지도에서 둘러보세요"})]}),o.jsx(ai,{"aria-hidden":"true",children:"›"})]}),o.jsxs(sd,{children:[o.jsx(ld,{children:"나의 명상"}),o.jsxs(sz,{children:[o.jsxs(k4,{type:"button",onClick:()=>e("/favorites"),children:[o.jsx(j4,{"aria-hidden":"true",children:"♡"}),o.jsx(S4,{children:"저장한 장소"}),o.jsxs($4,{children:[Ct,"곳의 쉼터를 모았어요"]})]}),o.jsxs(k4,{type:"button",onClick:()=>e("/meditation"),children:[o.jsx(j4,{"aria-hidden":"true",children:"⌁"}),o.jsx(S4,{children:"명상 둘러보기"}),o.jsx($4,{children:"새로운 프로그램을 만나보세요"})]})]})]}),o.jsxs(sd,{children:[o.jsx(ld,{children:"전문가 활동"}),o.jsxs(C4,{children:[o.jsxs(bo,{type:"button",onClick:()=>e("/profile/expert"),children:[o.jsx(ko,{"aria-hidden":"true",children:"✦"}),o.jsx(jo,{children:oe!=null&&oe.expertProfileId?"전문가 프로필 수정":"명상 전문가로 전환"}),o.jsx(ai,{"aria-hidden":"true",children:"›"})]}),(oe==null?void 0:oe.expertProfileId)&&o.jsxs(bo,{type:"button",onClick:()=>e(`/meditation/expert/${oe.expertProfileId}`),children:[o.jsx(ko,{"aria-hidden":"true",children:"◎"}),o.jsx(jo,{children:"내 전문가 페이지 보기"}),o.jsx(ai,{"aria-hidden":"true",children:"›"})]})]})]}),o.jsxs(sd,{children:[o.jsx(ld,{children:"서비스"}),o.jsxs(C4,{children:[o.jsxs(bo,{type:"button",onClick:()=>e("/notice"),children:[o.jsx(ko,{"aria-hidden":"true",children:"♢"}),o.jsx(jo,{children:"공지사항"}),o.jsx(ai,{"aria-hidden":"true",children:"›"})]}),o.jsxs(bo,{type:"button",onClick:()=>e("/inquiry"),children:[o.jsx(ko,{"aria-hidden":"true",children:"?"}),o.jsx(jo,{children:"문의하기"}),o.jsx(ai,{"aria-hidden":"true",children:"›"})]}),o.jsxs(bo,{type:"button",onClick:()=>e("/service-info"),children:[o.jsx(ko,{"aria-hidden":"true",children:"i"}),o.jsx(jo,{children:"서비스 안내"}),o.jsx(ai,{"aria-hidden":"true",children:"›"})]})]})]}),o.jsx(az,{type:"button",onClick:()=>{ke(),ln(null),Ee(""),sn("")},children:"로그아웃"}),oe&&o.jsx(o.Fragment,{children:o.jsx(ET,{open:I5,profile:oe,onClose:()=>$0(!1),onSaved:ln})})]}):o.jsxs(DT,{children:[i!=="signup-complete"&&o.jsxs(OT,{children:[o.jsxs(BT,{type:"button",onClick:B5,"aria-label":"뒤로가기",children:[o.jsx(FT,{src:pT,alt:"","aria-hidden":"true"}),"뒤로가기"]}),i==="signup-interest"&&o.jsx(fR,{type:"button",onClick:()=>s("signup-complete"),children:"건너뛰기"})]}),i==="login"&&o.jsxs(si,{children:[o.jsxs(vo,{children:[o.jsxs(HT,{children:[o.jsx(UT,{src:Xo,alt:"명상 웰니스 지도 로고"}),o.jsx(x4,{children:"명상 웰니스 지도에 오신 것을 환영합니다!"}),o.jsx(VT,{children:"명상 웰니스 지도"})]}),o.jsxs(yR,{children:[o.jsx(rs,{type:"email",placeholder:"이메일","aria-label":"이메일",value:Ce,onChange:D=>Ee(D.target.value),autoComplete:"email"}),o.jsxs(Ku,{children:[o.jsx(Gu,{type:z?"text":"password",placeholder:"비밀번호","aria-label":"비밀번호",autoComplete:"current-password",value:bt,onChange:D=>sn(D.target.value)}),o.jsx(Yu,{type:"button","aria-pressed":z,"aria-label":z?"비밀번호 숨기기":"비밀번호 보기",onClick:()=>R(D=>!D),children:z?"숨기기":"보기"})]})]}),o.jsx(jR,{children:"또는"}),o.jsxs(SR,{children:[ei?o.jsx(qu,{href:`${ei}/oauth2/authorization/kakao`,$bg:"transparent","aria-label":"카카오로 로그인",children:o.jsx(li,{src:Ca,alt:""})}):o.jsx(Zu,{type:"button",$bg:"transparent",disabled:!0,"aria-label":"카카오로 로그인 (API 주소 필요)",children:o.jsx(li,{src:Ca,alt:""})}),ei?o.jsx(qu,{href:`${ei}/oauth2/authorization/naver`,$bg:"transparent","aria-label":"네이버로 로그인",children:o.jsx(li,{src:Ea,alt:""})}):o.jsx(Zu,{type:"button",$bg:"transparent",disabled:!0,"aria-label":"네이버로 로그인 (API 주소 필요)",children:o.jsx(li,{src:Ea,alt:""})}),ei?o.jsx(qu,{href:`${ei}/oauth2/authorization/google`,$bg:"transparent","aria-label":"구글로 로그인",children:o.jsx(li,{src:Pa,alt:""})}):o.jsx(Zu,{type:"button",$bg:"transparent",disabled:!0,"aria-label":"구글로 로그인 (API 주소 필요)",children:o.jsx(li,{src:Pa,alt:""})})]}),o.jsxs($R,{children:[o.jsx("span",{children:"계정이 없으신가요?"}),o.jsx(CR,{type:"button",onClick:()=>{a(""),d(!1),f({status:"idle",email:null}),Ds(),O(null),g(""),v(""),x(""),y(""),I(!1),j(!1),F(!1),q(!1),Q(null),b(300),P("KR-11"),V(!1),ue(!1),fe(!1),$e(null),U(null),s("signup-terms")},children:"회원가입"})]}),B&&i==="login"&&o.jsx(Ir,{style:{marginTop:12},children:B})]}),o.jsx(wo,{children:o.jsx(kR,{type:"button",disabled:Ve,onClick:()=>void F5(),children:Ve?"처리 중…":"로그인하기"})})]}),i==="signup-terms"&&o.jsxs(si,{children:[o.jsxs(ER,{children:[o.jsx(PR,{children:o.jsxs(TR,{children:[o.jsx(RR,{src:Xo,alt:"명상 웰니스 지도 로고"}),o.jsx(x4,{children:"명상 웰니스 지도에 오신 것을 환영합니다!"})]})}),o.jsxs(IR,{children:[o.jsx(zR,{children:"서비스 이용을 위해 아래 약관에 동의해 주세요."}),o.jsxs(MR,{children:[o.jsxs(Qu,{children:[o.jsxs(Xu,{htmlFor:"signup-terms-service",children:[o.jsx(Ju,{id:"signup-terms-service",type:"checkbox",checked:Z,onChange:D=>V(D.target.checked)}),o.jsxs(ed,{children:[o.jsx(td,{children:"[필수]"}),"서비스 이용약관에 동의합니다"]})]}),o.jsx(nd,{type:"button",onClick:D=>{D.stopPropagation(),$e("service")},children:"자세히 ›"})]}),o.jsxs(Qu,{children:[o.jsxs(Xu,{htmlFor:"signup-terms-privacy",children:[o.jsx(Ju,{id:"signup-terms-privacy",type:"checkbox",checked:ee,onChange:D=>ue(D.target.checked)}),o.jsxs(ed,{children:[o.jsx(td,{children:"[필수]"}),"개인정보 수집 및 이용에 동의합니다"]})]}),o.jsx(nd,{type:"button",onClick:D=>{D.stopPropagation(),$e("privacy")},children:"자세히 ›"})]}),o.jsxs(Qu,{children:[o.jsxs(Xu,{htmlFor:"signup-terms-marketing",children:[o.jsx(Ju,{id:"signup-terms-marketing",type:"checkbox",checked:be,onChange:D=>fe(D.target.checked)}),o.jsxs(ed,{children:[o.jsx(td,{$optional:!0,children:"[선택]"}),"마케팅 정보 수신에 동의합니다"]})]}),o.jsx(nd,{type:"button",onClick:D=>{D.stopPropagation(),$e("marketing")},children:"자세히 ›"})]})]})]})]}),o.jsx(wo,{children:o.jsxs(AR,{children:[o.jsx(_R,{type:"button",$disabled:!Lc,disabled:!Lc,"aria-label":"필수 약관에 동의하고 다음 단계로",onClick:()=>{Lc&&s("signup-account")},children:"동의"}),o.jsx(NR,{type:"button",onClick:()=>{V(!0),ue(!0),fe(!0),s("signup-account")},children:"전체 동의"})]})})]}),i==="signup-account"&&o.jsxs(si,{children:[o.jsxs(vo,{children:[o.jsx(Uu,{children:"회원가입"}),o.jsxs(y4,{children:[o.jsx(rs,{type:"email",placeholder:"이메일",value:l,$error:z5,onChange:D=>a(D.target.value),autoComplete:"email",disabled:c}),ti&&o.jsx(Ir,{children:"이메일 형식이 아닙니다"}),!ti&&ao&&o.jsx(Ir,{children:"이미 가입된 이메일이에요"}),!ti&&I0&&!ao&&(mt==null?void 0:mt.status)==="error"&&o.jsx(Ir,{children:"가능 여부를 확인하지 못했어요. 잠시 후 다시 확인해 보세요."}),!ti&&!ao&&I0&&(mt==null?void 0:mt.status)==="loading"&&!c&&o.jsx(GT,{children:"사용 가능 여부 확인 중이에요…"}),!ti&&!ao&&!c&&(!Se()&&gc||(mt==null?void 0:mt.status)==="available")&&o.jsx(YT,{children:"사용가능한 이메일입니다"}),c&&o.jsxs(Hu,{id:"signup-phone-anchor",children:[o.jsx(rs,{type:"tel",inputMode:"numeric",placeholder:"휴대폰 번호 (- 없이)",value:h,$error:z0,onChange:D=>g(D.target.value.replace(/\D/g,"")),autoComplete:"tel",disabled:G}),z0&&o.jsx(Ir,{children:"올바른 휴대폰 번호를 입력해 주세요"})]})]}),N&&o.jsx(Hu,{id:"signup-code-anchor",children:o.jsxs(zT,{children:[o.jsxs(tR,{children:[o.jsxs(vR,{children:[o.jsx(wR,{type:"text",inputMode:"numeric",placeholder:"인증번호",value:w,onChange:D=>v(D.target.value.replace(/\D/g,"").slice(0,6)),autoComplete:"one-time-code","aria-describedby":G?void 0:"signup-code-hint",disabled:G}),o.jsx(bR,{title:`남은 시간 ${N0}`,children:N0})]}),o.jsx(nR,{type:"button",$highlight:D5,disabled:G,onClick:()=>void _5(),children:"다시받기"})]}),!G&&o.jsx(MT,{id:"signup-code-hint",children:"휴대폰으로 발송된 6자리 인증번호를 입력해 주세요"})]})}),N&&G&&o.jsx(Hu,{id:"signup-password-anchor",children:o.jsxs(y4,{children:[o.jsxs(qT,{children:[o.jsx(QT,{type:"button","aria-label":fc?"프로필 사진 바꾸기":"프로필 사진 선택",onClick:()=>{var D;return(D=C0.current)==null?void 0:D.click()},children:fc?o.jsx(JT,{src:fc,alt:""}):o.jsx(XT,{"aria-hidden":!0,children:"+"})}),o.jsx(eR,{ref:C0,type:"file",accept:"image/*",onChange:D=>{var Le;const re=(Le=D.target.files)==null?void 0:Le[0];D.target.value="",re&&R5(re)}})]}),o.jsxs(v4,{$index:0,children:[o.jsxs(Ku,{children:[o.jsx(Gu,{type:$?"text":"password",placeholder:"비밀번호",value:S,$error:!!xc,onChange:D=>x(D.target.value),autoComplete:"new-password"}),o.jsx(Yu,{type:"button","aria-pressed":$,"aria-label":$?"비밀번호 숨기기":"비밀번호 보기",onClick:()=>I(D=>!D),children:$?"숨기기":"보기"})]}),xc&&o.jsx(w4,{children:xc})]}),o.jsxs(v4,{$index:1,children:[o.jsxs(Ku,{children:[o.jsx(Gu,{type:k?"text":"password",placeholder:"비밀번호 확인",value:L,$error:A0,onChange:D=>y(D.target.value),autoComplete:"new-password"}),o.jsx(Yu,{type:"button","aria-pressed":k,"aria-label":k?"비밀번호 확인 숨기기":"비밀번호 확인 보기",onClick:()=>j(D=>!D),children:k?"숨기기":"보기"})]}),A0&&o.jsx(w4,{children:"비밀번호가 일치하지 않습니다"})]}),o.jsx(ZT,{children:"8자 이상, 영문+숫자 포함"})]})})]}),o.jsxs(wo,{children:[!c&&o.jsx(di,{type:"button",$disabled:!T0,disabled:!T0,onClick:()=>d(!0),children:"다음"}),c&&!N&&o.jsx(di,{type:"button",$disabled:!R0,disabled:!R0,onClick:()=>void A5(),children:"인증번호 받기"}),N&&!G&&o.jsx(di,{type:"button",$disabled:!mc,disabled:!mc,onClick:()=>void N5(),children:"인증"}),N&&G&&o.jsx(di,{type:"button",$disabled:!_0,disabled:!_0,onClick:()=>s("signup-region"),children:"다음"})]})]}),H&&o.jsx(Vu,{role:"status","aria-live":"polite",children:o.jsx(Wu,{children:"인증번호를 보냈어요!"})}),C==="success"&&o.jsx(Vu,{role:"status","aria-live":"polite",children:o.jsx(Wu,{children:"인증되었습니다"})}),C==="error"&&o.jsx(Vu,{role:"alert","aria-live":"assertive",children:o.jsx(Wu,{$variant:"error",children:"인증번호가 틀렸습니다"})}),i==="signup-region"&&o.jsx(si,{children:o.jsxs(vo,{children:[o.jsx(Uu,{children:"활동 지역을 설정해주세요"}),o.jsx(L4,{children:"주로 명상하는 지역을 선택해주세요"}),o.jsxs(rR,{children:[o.jsx(iR,{type:"button",disabled:Re,"aria-busy":Re,onClick:O5,children:Re?"위치 확인 중…":"현재 위치로 지역 맞추기"}),qe&&o.jsx(oR,{$error:Kt,children:qe})]}),o.jsx(sR,{children:o.jsx(As,{maxMapHeight:"clamp(220px, calc(100dvh - 260px), 480px)",activeRegionId:T,onSelectRegion:D=>{P(D),A(!0)}})})]})}),i==="signup-interest"&&o.jsxs(si,{children:[o.jsxs(vo,{children:[o.jsx(hR,{children:"1/10"}),o.jsx(Uu,{children:"관심사를 선택해주세요"}),o.jsx(L4,{children:"좌우로 넘기며 관심있는 주제를 선택하세요"}),B&&o.jsx(Ir,{children:B}),o.jsx(uR,{children:"숲"}),o.jsx(dR,{type:"button","aria-label":"관심사 좋아요",children:"♡"})]}),o.jsx(wo,{children:o.jsx(pR,{type:"button",disabled:Ve,onClick:()=>void H5(),children:Ve?"가입 중…":"다음"})})]}),i==="signup-complete"&&o.jsxs(si,{children:[o.jsxs(vo,{children:[o.jsx(gR,{children:o.jsx(mR,{src:Xo,alt:"명상 웰니스 지도 로고"})}),o.jsx(xR,{children:"가입 완료!"}),o.jsx(LR,{children:"평온한 명상 여행을 시작하세요"})]}),o.jsx(wo,{children:o.jsx(di,{type:"button",onClick:()=>{s("login")},children:"시작하기"})})]}),i==="signup-region"&&E&&o.jsx(m5,{role:"dialog","aria-modal":"true","aria-label":"지역 확인",children:o.jsxs(x5,{children:[o.jsxs(b4,{children:[T5," 지역이 맞습니까?"]}),o.jsxs(aR,{children:[o.jsx(U1,{type:"button",onClick:()=>A(!1),children:"아니오"}),o.jsx(U1,{type:"button",$primary:!0,onClick:()=>{A(!1),s("signup-interest")},children:"네"})]})]})}),xe!==null&&o.jsx(lR,{role:"dialog","aria-modal":"true","aria-labelledby":"terms-detail-title",onClick:()=>$e(null),children:o.jsxs(DR,{onClick:D=>D.stopPropagation(),children:[o.jsx(b4,{id:"terms-detail-title",children:E4[xe].title}),o.jsx(OR,{children:E4[xe].body}),o.jsx(cR,{onClick:()=>$e(null),children:"확인"})]})})]})]})},L5={paragraph:"",h1:"# ",h2:"## ",h3:"### ",bullet:"- ",quote:"> "};let V1=1;function uz(e){const t=[["h3",/^###\s?/],["h2",/^##\s?/],["h1",/^#\s?/],["bullet",/^-\s?/],["quote",/^>\s?/]];for(const[n,r]of t)if(r.test(e))return{id:V1++,type:n,text:e.replace(r,"")};return{id:V1++,type:"paragraph",text:e}}function dz(e){const t=e.split(`
`);return(t.length?t:[""]).map(uz)}function pz(e){return e.map(t=>`${L5[t.type]}${t.text}`).join(`
`)}const fz=u.div`
  min-height: 320px;
  padding: 16px 18px;
  border: 1px solid ${({theme:e})=>e.colors.primary200};
  border-radius: 14px;
  background: ${({theme:e})=>e.colors.white};
  cursor: text;
`,hz=u.div`
  position: relative;
  min-height: 1.8em;
  margin: ${({$type:e})=>e==="h1"?"12px 0 6px":e==="h2"?"10px 0 5px":"2px 0"};
  padding-left: ${({$type:e})=>e==="bullet"?"18px":e==="quote"?"14px":"0"};
  border-left: ${({$type:e})=>e==="quote"?"3px solid rgba(75, 0, 130, 0.25)":"0"};

  ${({$type:e})=>e==="bullet"&&Ne`
      &::before {
        content: "•";
        position: absolute;
        left: 3px;
        top: 0.25em;
        color: ${({theme:t})=>t.colors.primary600};
      }
    `}
`,gz=u.textarea`
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

  ${({$type:e})=>e==="h1"?Ne`font-size: 1.45rem; font-weight: 800;`:e==="h2"?Ne`font-size: 1.2rem; font-weight: 750;`:e==="h3"?Ne`font-size: 1.05rem; font-weight: 700;`:W.body2}

  &::placeholder {
    color: ${({theme:e})=>e.colors.mutedMauve};
  }
`,mz=u.div`
  min-height: 1.65em;
  ${W.body2};
  line-height: 1.65;
`,xz=u.div`
  margin-top: 10px;
  color: ${({theme:e})=>e.colors.text700};
  ${W.caption};
`;function Lz({value:e,onChange:t,placeholder:n="내용을 입력하세요. `/` 대신 #, -, > 뒤에 공백을 입력하면 블록이 바뀝니다."}){const[r,i]=m.useState(()=>dz(e)),[s,l]=m.useState(()=>{var p;return((p=r[0])==null?void 0:p.id)??null}),a=m.useRef(null),c=m.useMemo(()=>pz(r),[r]);m.useEffect(()=>{c!==e&&t(c)},[c,t,e]),m.useEffect(()=>{if(a.current==null)return;const p=a.current;a.current=null,requestAnimationFrame(()=>{const f=document.querySelector(`[data-md-block="${p}"]`);f==null||f.focus()})},[r]);const d=(p,f)=>{i(h=>h.map(g=>{if(g.id!==p)return g;if(g.type==="paragraph"){const v=[["### ","h3"],["## ","h2"],["# ","h1"],["- ","bullet"],["> ","quote"]].find(([S])=>f===S);if(v)return{...g,type:v[1],text:""}}return{...g,text:f}}))};return o.jsxs(o.Fragment,{children:[o.jsx(fz,{onClick:p=>{p.target===p.currentTarget&&r.length&&l(r[r.length-1].id)},children:r.map((p,f)=>{const h=s===p.id;return o.jsx(hz,{$type:p.type,children:h?o.jsx(gz,{"data-md-block":p.id,autoFocus:!0,rows:1,$type:p.type,value:p.text,placeholder:f===0?n:"",onFocus:g=>{l(p.id),g.currentTarget.style.height="auto",g.currentTarget.style.height=`${g.currentTarget.scrollHeight}px`},onChange:g=>{d(p.id,g.target.value),g.currentTarget.style.height="auto",g.currentTarget.style.height=`${g.currentTarget.scrollHeight}px`},onKeyDown:g=>{if(g.key==="Enter"&&!g.shiftKey){g.preventDefault();const w=V1++;i(v=>{const S=v.findIndex(L=>L.id===p.id),x=[...v];return x.splice(S+1,0,{id:w,type:"paragraph",text:""}),x}),l(w),a.current=w}else if(g.key==="Backspace"&&p.text===""&&p.type!=="paragraph")g.preventDefault(),i(w=>w.map(v=>v.id===p.id?{...v,type:"paragraph"}:v));else if(g.key==="Backspace"&&p.text===""&&r.length>1){g.preventDefault();const w=r[f-1];i(v=>v.filter(S=>S.id!==p.id)),w&&(l(w.id),a.current=w.id)}},onBlur:()=>{window.setTimeout(()=>{const g=document.activeElement;g instanceof HTMLTextAreaElement&&g.dataset.mdBlock||l(null)},0)}}):o.jsx(mz,{onClick:()=>l(p.id),children:o.jsx(so,{markdown:`${L5[p.type]}${p.text}`,fallback:" "})})},p.id)})}),o.jsx(xz,{children:"`# ` 제목 · `## ` 작은 제목 · `- ` 목록 · `> ` 인용 · Shift+Enter 줄바꿈"})]})}const yz=["마음챙김","아트명상","숲 명상","호흡명상","걷기명상","소리명상"],R4=u.div`
  max-width: 980px;
  margin: 0 auto;
  padding: calc(18px + env(safe-area-inset-top, 0px)) 0 48px;
  color: ${({theme:e})=>e.colors.text900};
`,vz=u.header`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
`,wz=u.button`
  width: 38px;
  height: 38px;
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.text900};
  ${W.body1};
  cursor: pointer;
`,bz=u.h1`
  margin: 0;
  ${W.title};
`,kz=u.p`
  margin: 0 0 24px 50px;
  color: ${({theme:e})=>e.colors.text700};
  ${W.body2};

  @media (max-width: 640px) {
    margin-left: 0;
  }
`,So=u.section`
  margin-top: 16px;
  padding: 22px;
  border: 1px solid rgba(75, 0, 130, 0.09);
  border-radius: 22px;
  background: ${({theme:e})=>e.colors.white};
  box-shadow: 0 8px 24px rgba(75, 0, 130, 0.05);

  @media (max-width: 640px) {
    padding: 18px 15px;
  }
`,$o=u.h2`
  margin: 0 0 6px;
  ${W.body1};
  font-weight: 700;
`,Co=u.p`
  margin: 0 0 18px;
  color: ${({theme:e})=>e.colors.text700};
  ${W.caption};
`,wn=u.div`
  margin-top: 18px;
`,bn=u.label`
  display: block;
  margin-bottom: 8px;
  ${W.body2};
  font-weight: 700;
`,jz=u.p`
  margin: -4px 0 8px;
  color: ${({theme:e})=>e.colors.text700};
  ${W.caption};
`,Eo=u.input`
  width: 100%;
  box-sizing: border-box;
  padding: 13px 14px;
  border: 1px solid ${({theme:e})=>e.colors.primary200};
  border-radius: 12px;
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.text900};
  ${W.body2};
`,cd=u.textarea`
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
  ${W.body2};
`,z4=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,M4=u.button`
  padding: 8px 11px;
  border: 1px solid
    ${({theme:e,$selected:t})=>t?e.colors.primary600:e.colors.primary200};
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e,$selected:t})=>t?e.colors.primary600:e.colors.white};
  color: ${({theme:e,$selected:t})=>t?e.colors.white:e.colors.text700};
  ${W.caption};
  cursor: pointer;
`,Sz=u.div`
  display: grid;
  grid-template-columns: minmax(260px, 0.9fr) minmax(240px, 1.1fr);
  gap: 20px;
  align-items: center;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`,$z=u.div`
  padding: 12px;
  border-radius: 18px;
  background: ${({theme:e})=>e.colors.primary50};
`,Cz=u.div`
  color: ${({theme:e})=>e.colors.text700};
  ${W.body2};
`,A4=u.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`,fl=u.button`
  padding: 14px;
  border: 1px solid
    ${({theme:e,$selected:t})=>t?e.colors.primary600:e.colors.primary200};
  border-radius: 13px;
  background: ${({theme:e,$selected:t})=>t?e.colors.primary50:e.colors.white};
  color: ${({theme:e})=>e.colors.text900};
  ${W.body2};
  cursor: pointer;
`,Ez=u.div`
  position: sticky;
  bottom: calc(56px + env(safe-area-inset-bottom, 0px));
  z-index: 5;
  margin-top: 20px;
  padding: 12px;
  border-radius: 18px;
  background: rgba(255, 250, 248, 0.94);
  backdrop-filter: blur(12px);
`,Pz=u.button`
  width: 100%;
  padding: 15px;
  border: 0;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary600};
  color: white;
  ${W.buttonMd};
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Iz=u.p`
  margin: 10px 0 0;
  color: ${({theme:e,$error:t})=>t?"#c5221f":e.colors.primary600};
  text-align: center;
  ${W.caption};
`,Tz=u.p`
  padding: 80px 20px;
  text-align: center;
  color: ${({theme:e})=>e.colors.text700};
  ${W.body2};
`,Rz=e=>({name:e.displayName||e.username.split("@")[0]||"",intro:"",degrees:[],certificates:[],careers:[],classTypes:[],regionIds:e.regionIds??[],hasCenter:!1,centerName:"",centerAddress:"",businessRegistrationNumber:"",businessOpeningDate:"",hidden:!1}),ud=e=>e.split(`
`).map(t=>t.trim()).filter(Boolean);function zz(){const e=ft(),t=ut(v=>v.accessToken),[n,r]=m.useState(null),[i,s]=m.useState(null),[l,a]=m.useState(!0),[c,d]=m.useState(!1),[p,f]=m.useState(null);m.useEffect(()=>{if(!t){e("/profile",{replace:!0});return}Promise.all([hT(),gT()]).then(([v,S])=>{r(v),s({...Rz(v),...S??{}})}).catch(v=>f({text:v instanceof Error?v.message:"정보를 불러오지 못했어요.",error:!0})).finally(()=>a(!1))},[t,e]);const h=m.useMemo(()=>(i==null?void 0:i.regionIds.map(lo))??[],[i==null?void 0:i.regionIds]);if(l||!i||!n)return o.jsx(R4,{children:o.jsx(Tz,{children:(p==null?void 0:p.text)??"전문가 정보를 불러오는 중…"})});const g=(v,S)=>{const x=i[v];s({...i,[v]:x.includes(S)?x.filter(L=>L!==S):[...x,S]})},w=i.name.trim().length>0&&i.intro.trim().length>0&&i.regionIds.length>0;return o.jsxs(R4,{children:[o.jsxs(vz,{children:[o.jsx(wz,{type:"button",onClick:()=>e("/profile"),"aria-label":"마이페이지로 돌아가기",children:"‹"}),o.jsx(bz,{children:n.expertProfileId?"전문가 프로필 수정":"명상 전문가로 전환"})]}),o.jsx(kz,{children:"작성한 내용은 명상 전문가 목록과 상세 페이지에 공개됩니다."}),o.jsxs(So,{children:[o.jsx($o,{children:"공개 설정"}),o.jsx(Co,{children:"내 전문가 프로필을 명상 전문가 목록·상세에 공개할지 선택하세요. 숨김으로 두면 다른 사용자에게 표시되지 않습니다."}),o.jsxs(A4,{children:[o.jsx(fl,{type:"button",$selected:!i.hidden,onClick:()=>s({...i,hidden:!1}),children:"공개 (노출)"}),o.jsx(fl,{type:"button",$selected:i.hidden,onClick:()=>s({...i,hidden:!0}),children:"숨김"})]})]}),o.jsxs(So,{children:[o.jsx($o,{children:"기본 정보"}),o.jsx(Co,{children:"전문가 페이지에 표시될 활동명과 소개를 작성해 주세요."}),o.jsxs(wn,{children:[o.jsx(bn,{htmlFor:"expert-name",children:"활동명"}),o.jsx(Eo,{id:"expert-name",value:i.name,maxLength:80,onChange:v=>s({...i,name:v.target.value})})]}),o.jsxs(wn,{children:[o.jsx(bn,{htmlFor:"expert-intro",children:"자기소개"}),o.jsx(jz,{children:"노션처럼 문법을 입력하면 해당 줄의 모양이 바로 바뀝니다."}),o.jsx(Lz,{value:i.intro,onChange:v=>s(S=>S&&{...S,intro:v}),placeholder:"명상을 시작하게 된 계기와 수업 철학을 소개해 주세요."})]})]}),o.jsxs(So,{children:[o.jsx($o,{children:"이력과 전문 분야"}),o.jsx(Co,{children:"각 항목은 한 줄에 하나씩 입력해 주세요."}),o.jsxs(wn,{children:[o.jsx(bn,{htmlFor:"expert-degrees",children:"학위"}),o.jsx(cd,{id:"expert-degrees",value:i.degrees.join(`
`),onChange:v=>s({...i,degrees:ud(v.target.value)}),placeholder:`○○대학교 상담심리학 석사
△△대학교 명상학 전공`})]}),o.jsxs(wn,{children:[o.jsx(bn,{htmlFor:"expert-certificates",children:"자격증·이수 교육과정"}),o.jsx(cd,{id:"expert-certificates",value:i.certificates.join(`
`),onChange:v=>s({...i,certificates:ud(v.target.value)})})]}),o.jsxs(wn,{children:[o.jsx(bn,{htmlFor:"expert-careers",children:"경력"}),o.jsx(cd,{id:"expert-careers",value:i.careers.join(`
`),onChange:v=>s({...i,careers:ud(v.target.value)})})]}),o.jsxs(wn,{children:[o.jsx(bn,{children:"클래스 종류"}),o.jsx(z4,{children:yz.map(v=>o.jsx(M4,{type:"button",$selected:i.classTypes.includes(v),onClick:()=>g("classTypes",v),children:v},v))})]})]}),o.jsxs(So,{children:[o.jsx($o,{children:"주 활동 지역"}),o.jsx(Co,{children:"지도에서 활동 가능한 지역을 여러 곳 선택할 수 있습니다."}),o.jsxs(Sz,{children:[o.jsx($z,{children:o.jsx(As,{activeRegionIds:i.regionIds,maxMapHeight:"460px",onSelectRegion:v=>g("regionIds",v)})}),o.jsxs(Cz,{children:[o.jsxs("strong",{children:[h.length,"개 지역 선택됨"]}),o.jsx("p",{children:"선택된 지역을 다시 누르면 해제됩니다."}),o.jsx(z4,{children:Gr.filter(v=>i.regionIds.includes(v.id)).map(v=>o.jsxs(M4,{type:"button",$selected:!0,onClick:()=>g("regionIds",v.id),children:[v.name," ×"]},v.id))})]})]})]}),o.jsxs(So,{children:[o.jsx($o,{children:"센터 정보"}),o.jsx(Co,{children:"본인 소유 센터가 있다면 인증 정보를 함께 입력해 주세요."}),o.jsxs(A4,{children:[o.jsx(fl,{type:"button",$selected:!i.hasCenter,onClick:()=>s({...i,hasCenter:!1}),children:"센터 없음"}),o.jsx(fl,{type:"button",$selected:i.hasCenter,onClick:()=>s({...i,hasCenter:!0}),children:"센터 있음"})]}),i.hasCenter&&o.jsxs(o.Fragment,{children:[o.jsxs(wn,{children:[o.jsx(bn,{htmlFor:"center-name",children:"센터명"}),o.jsx(Eo,{id:"center-name",value:i.centerName,onChange:v=>s({...i,centerName:v.target.value})})]}),o.jsxs(wn,{children:[o.jsx(bn,{htmlFor:"center-address",children:"센터 위치"}),o.jsx(Eo,{id:"center-address",value:i.centerAddress,onChange:v=>s({...i,centerAddress:v.target.value})})]}),o.jsxs(wn,{children:[o.jsx(bn,{htmlFor:"business-number",children:"사업자등록번호"}),o.jsx(Eo,{id:"business-number",inputMode:"numeric",value:i.businessRegistrationNumber,onChange:v=>s({...i,businessRegistrationNumber:v.target.value.replace(/[^\d-]/g,"")})})]}),o.jsxs(wn,{children:[o.jsx(bn,{htmlFor:"opening-date",children:"개업일자"}),o.jsx(Eo,{id:"opening-date",type:"date",value:i.businessOpeningDate,onChange:v=>s({...i,businessOpeningDate:v.target.value})})]})]})]}),o.jsxs(Ez,{children:[o.jsx(Pz,{type:"button",disabled:c||!w,onClick:()=>{d(!0),f(null),mT(i).then(v=>{r(v),f({text:"전문가 프로필을 저장했어요."}),window.setTimeout(()=>e("/profile"),700)}).catch(v=>f({text:v instanceof Error?v.message:"저장하지 못했어요.",error:!0})).finally(()=>d(!1))},children:c?"저장 중…":n.expertProfileId?"전문가 정보 저장":"명상 전문가로 전환"}),p&&o.jsx(Iz,{$error:p.error,children:p.text})]})]})}const Mz=u.div`
  min-height: 40vh;
  display: grid;
  place-items: center;
  padding: 2rem;
  ${W.body1};
  color: ${({theme:e})=>e.colors.text700};
`,Az=()=>{const[e]=g3(),t=ft();return m.useEffect(()=>{if(e.get("error")){t("/profile",{replace:!0});return}const r=e.get("oauthSignupTicket");if(r){const i=e.get("email")??"",s=new URLSearchParams({signupOAuth:"1",oauthSignupTicket:r,email:i}),l=e.get("picture");l&&s.set("picture",l),t(`/profile?${s.toString()}`,{replace:!0});return}ut.getState().bootstrapAuth().then(()=>mr.getState().pullFromServer()).finally(()=>t("/profile",{replace:!0}))},[t,e]),o.jsx(Mz,{children:"로그인 처리 중…"})},_z=u.div`
  color: ${({theme:e})=>e.colors.text900};
`,_4=u.section`
  padding: 48px 20px;

  @media (max-width: 960px) {
    padding: 36px 14px;
  }
`,N4=u.div`
  max-width: 1100px;
  margin: 0 auto;
`,Nz=u.section`
  padding: 64px 20px calc(56px + env(safe-area-inset-bottom, 0px));
  background: linear-gradient(180deg, #ffffff 0%, ${({theme:e})=>e.colors.primary50} 100%);

  @media (max-width: 960px) {
    padding: 48px 14px calc(40px + env(safe-area-inset-bottom, 0px));
  }
`,Dz=u.div`
  max-width: 1100px;
  margin: 0 auto;
  background: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 36px;
  box-shadow: ${({theme:e})=>e.shadow.soft};
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  display: grid;
  gap: 16px;
`,Oz=u.h1`
  font-size: 3rem;
  line-height: 1.3;
`,Bz=u.p`
  font-size: 1.3rem;
  color: ${({theme:e})=>e.colors.text700};
`,Fz=u(ro)`
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
`,Hz=u.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`,dd=u.div`
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 18px;
  box-shadow: ${({theme:e})=>e.shadow.soft};
`,pd=u.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text700};
`,fd=u.p`
  font-size: 2.2rem;
  font-weight: 700;
  margin-top: 8px;
`,Uz=u.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`,hl=u.div`
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 24px;
  box-shadow: ${({theme:e})=>e.shadow.soft};
  display: grid;
  gap: 10px;
`,gl=u.div`
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
`,Vz=u.section`
  padding: 48px 20px;
  background: ${({theme:e})=>e.colors.primary600};
  color: #fff;
`,Wz=u.div`
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
`,Kz=u.button`
  border: none;
  background: #fff;
  color: ${({theme:e})=>e.colors.primary700};
  padding: 10px 18px;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  font-size: 1.1rem;
`,Yz=()=>o.jsxs(_z,{children:[o.jsx(Nz,{children:o.jsxs(Dz,{children:[o.jsx(Oz,{children:"누구나 원하는 곳에서, 더 깊은 힐링 명상"}),o.jsx(Bz,{children:"전국 힐링 명상 웰니스 지도는 지역별 명상센터를 쉽고 빠르게 찾을 수 있는 플랫폼입니다."}),o.jsx(Fz,{to:"/",children:"명상센터 찾아보기"})]})}),o.jsx(_4,{children:o.jsx(N4,{children:o.jsxs(Hz,{children:[o.jsxs(dd,{children:[o.jsx(pd,{children:"누적 명상센터"}),o.jsx(fd,{children:"1,200+"})]}),o.jsxs(dd,{children:[o.jsx(pd,{children:"지역 커버리지"}),o.jsx(fd,{children:"전국 17개"})]}),o.jsxs(dd,{children:[o.jsx(pd,{children:"누적 검색 수"}),o.jsx(fd,{children:"210만+"})]})]})})}),o.jsx(_4,{children:o.jsx(N4,{children:o.jsxs(Uz,{children:[o.jsxs(hl,{children:[o.jsx(gl,{children:o.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[o.jsx("path",{d:"M3 11l9-7 9 7"}),o.jsx("path",{d:"M5 10v10h14V10"})]})}),o.jsx("h3",{children:"지도 기반 탐색"}),o.jsx("p",{children:"대한민국 지도로 지역을 선택하고, 명상센터를 한눈에 찾아보세요."})]}),o.jsxs(hl,{children:[o.jsx(gl,{children:o.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:o.jsx("path",{d:"M4 6h16M4 12h10M4 18h6"})})}),o.jsx("h3",{children:"맞춤형 필터"}),o.jsx("p",{children:"해시태그와 정렬 기준으로 내게 맞는 명상센터를 빠르게 추천해요."})]}),o.jsxs(hl,{children:[o.jsx(gl,{children:o.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[o.jsx("circle",{cx:"12",cy:"8",r:"3"}),o.jsx("path",{d:"M6 20c1.5-3 4-5 6-5s4.5 2 6 5"})]})}),o.jsx("h3",{children:"상세 정보 제공"}),o.jsx("p",{children:"주소, 프로그램, 운영 단체 정보까지 한 페이지에서 확인하세요."})]}),o.jsxs(hl,{children:[o.jsx(gl,{children:o.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[o.jsx("circle",{cx:"10",cy:"10",r:"6"}),o.jsx("line",{x1:"14.5",y1:"14.5",x2:"21",y2:"21"})]})}),o.jsx("h3",{children:"검색 경험"}),o.jsx("p",{children:"검색어 입력만으로 관련 명상센터를 부드럽게 이어 보여드립니다."})]})]})})}),o.jsx(Vz,{children:o.jsxs(Wz,{children:[o.jsxs("div",{children:[o.jsx("h2",{children:"명상센터 운영자라면 함께해요"}),o.jsx("p",{children:"전국 힐링 명상 웰니스 지도와 함께 더 많은 사람에게 명상 경험을 전달하세요."})]}),o.jsx(Kz,{type:"button",children:"등록 문의하기"})]})})]}),Gz=u.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
  background: linear-gradient(180deg, ${({theme:e})=>e.colors.primary50} 0%, ${({theme:e})=>e.colors.warmCream} 100%);
`,Zz=u.div`
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
`,qz=u.p`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.primary700};
  margin: 0 0 8px;
`,Qz=u.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.primary400};
  margin: 0 0 32px;
  text-align: center;
  line-height: 1.5;
`,Xz=u.button`
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
`,Jz=()=>{const e=ft();return o.jsxs(Gz,{children:[o.jsx(Zz,{children:"404"}),o.jsx(qz,{children:"Oops!"}),o.jsx(Qz,{children:"페이지를 찾을 수 없습니다."}),o.jsx(Xz,{type:"button",onClick:()=>e("/"),children:"홈으로"})]})};function y5(e,t){if(e){try{const n=JSON.parse(e);if(n!=null&&n.message)return n.message;if(n!=null&&n.code)return n.code}catch{}return e}return`HTTP ${t}`}async function ot(e){if(!e.ok)throw new Error(y5(await e.text(),e.status));if(e.status!==204)return e.json()}async function eM(e,t){const n=await he("/admin/auth/login",{method:"POST",body:JSON.stringify({loginId:e,password:t})});if(!n.ok)throw new Error(y5(await n.text(),n.status))}async function tM(){return ot(await he("/admin/metrics/traffic"))}async function nM(e,t){const n=new URLSearchParams({granularity:e,limit:String(t)});return ot(await he(`/admin/metrics/http-traffic?${n.toString()}`))}async function rM(e,t){const n=new URLSearchParams({granularity:e,limit:String(t)});return ot(await he(`/admin/metrics/member-traffic?${n.toString()}`))}async function iM(e,t,n=12){const r=new URLSearchParams({granularity:e,limit:String(t),top:String(n)});return ot(await he(`/admin/metrics/api-traffic?${r.toString()}`))}async function oM(){return ot(await he("/admin/places"))}function sM(e){const{id:t,...n}=e;return n}async function lM(e,t,n){const r={regionId:t,data:sM(n)};return ot(e?await he(`/admin/places/${encodeURIComponent(e)}`,{method:"PUT",body:JSON.stringify(r)}):await he("/admin/places",{method:"POST",body:JSON.stringify(r)}))}async function aM(e){await ot(await he(`/admin/places/${encodeURIComponent(e)}`,{method:"DELETE"}))}async function cM(){return ot(await he("/admin/experts"))}async function uM(e,t){const n={data:v5(t)};return ot(e?await he(`/admin/experts/${encodeURIComponent(e)}`,{method:"PUT",body:JSON.stringify(n)}):await he("/admin/experts",{method:"POST",body:JSON.stringify(n)}))}function v5(e){const{id:t,...n}=e;return n}async function dM(e){const t=new URLSearchParams({loginId:e});return(await ot(await he(`/admin/experts/login-id-availability?${t.toString()}`))).available}async function pM(e){const t={loginId:e.loginId,email:e.email,password:e.password,data:v5(e.data)};return ot(await he("/admin/experts/accounts",{method:"POST",body:JSON.stringify(t)}))}async function fM(e){await ot(await he(`/admin/experts/${encodeURIComponent(e)}`,{method:"DELETE"}))}async function hM(){return ot(await he("/admin/notices"))}async function gM(e,t){const n={payload:mM(t)};return ot(e?await he(`/admin/notices/${encodeURIComponent(e)}`,{method:"PUT",body:JSON.stringify(n)}):await he("/admin/notices",{method:"POST",body:JSON.stringify(n)}))}function mM(e){const{id:t,...n}=e;return n}async function xM(e){await ot(await he(`/admin/notices/${encodeURIComponent(e)}`,{method:"DELETE"}))}async function w5(e){const t=new FormData;t.append("file",e);const n=await he("/storage/objects",{method:"POST",body:t});return(await ot(n)).url}function LM(e){return{id:"",regionId:e,name:"",shortDescription:"",description:"",address:"",thumbnailUrl:"",photos:[],hashtags:[],themes:[],hasTempleStay:!1,duration:"",admissionFee:"",venueKind:"명상지",organization:{name:""},externalLink:"",detailSections:[],facilities:[],programs:[],instructors:[],hidden:!1}}function yM(e){const t=e.reduce((n,r)=>{const i=Number.parseInt(r.id,10);return Number.isFinite(i)?Math.max(n,i):n},0);return String(t+1)}function Po(){return{id:"",name:"",avatarUrl:"",specialties:[],regionIds:[],intro:"",degrees:[],certificates:[],careers:[],classTypes:[],hasCenter:!1,programs:[],reviews:[],hidden:!1}}const vM=new Set(["ADMIN","DEV","EMPLOYEE"]),Ai=to(e=>({username:null,role:null,ready:!1,authenticated:!1,bootstrap:async()=>{const t=Se();if(!t){e({username:null,role:null,ready:!0,authenticated:!1});return}try{const n=await fetch(`${t}/admin/auth/me`,{credentials:"include"});if(n.ok){const r=await n.json(),i=r.role??"";if(r.username&&vM.has(i)){e({username:r.username,role:i,ready:!0,authenticated:!0});return}}}catch{}e({username:null,role:null,ready:!0,authenticated:!1})},logout:async()=>{const t=Se();if(t)try{await fetch(`${t}/admin/auth/logout`,{method:"POST",credentials:"include"})}catch{}e({username:null,role:null,ready:!0,authenticated:!1})}})),Ze={colors:{primary50:"#f3eef8",primary100:"#e6dcf0",primary200:"#c9b8e0",primary300:"#a88bca",primary400:"#7a5aab",primary500:"#5c3d8f",primary600:"#4B0082",primary700:"#3d0069",primary800:"#2f0051",primary900:"#22003a",white:"#FFFFFF",warmCream:"#FFFAF8",buddingPeach:"#F5D8D0",charcoal:"#3D3D3D",warmGray:"#6B6B6B",text900:"#3D3D3D",text700:"#6B6B6B",border200:"#9B8A99",mutedMauve:"#9B8A99",dustyGold:"#C9A962",dustyRose:"#C9A090",bg50:"#FFFAF8",bg100:"#F5D8D0"},shadow:{soft:"0 12px 30px rgba(75, 0, 130, 0.1)"},radii:{pill:"999px",md:"12px",lg:"16px"}},wM=u.div`
  display: flex;
  min-height: 100vh;
  background: #0f0f12;
  color: #f4f4f5;
`,bM=u.aside`
  width: ${({$open:e})=>e?"240px":"0"};
  overflow: hidden;
  transition: width 0.2s ease;
  background: #18181b;
  border-right: 1px solid #27272a;
  flex-shrink: 0;
`,kM=u.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`,jM=u.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  border-bottom: 1px solid #27272a;
  background: #111114;
`,SM=u.main`
  flex: 1;
  padding: 20px;
  overflow: auto;
`,$M=u.button`
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
  border-left: 3px solid ${({$active:e})=>e?Ze.colors.primary500:"transparent"};
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
  }
`,xn=u.div`
  background: linear-gradient(180deg, #1b1b1f 0%, #161619 100%);
  border: 1px solid #2a2a30;
  border-radius: ${Ze.radii.lg};
  padding: 16px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02), 0 8px 24px rgba(0, 0, 0, 0.22);
`;u.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 12px;
`;u.div`
  background: #111114;
  border: 1px solid #27272a;
  border-radius: ${Ze.radii.md};
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
`;const w0=u.table`
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
`,ge=u.button`
  padding: 8px 14px;
  border-radius: ${Ze.radii.md};
  border: 1px solid
    ${({$variant:e})=>e==="danger"?"#7f1d1d":e==="primary"?Ze.colors.primary600:"#3f3f46"};
  background: ${({$variant:e})=>e==="danger"?"#991b1b":e==="primary"?Ze.colors.primary600:"transparent"};
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
`,nt=u.input`
  width: 100%;
  padding: 8px 10px;
  border-radius: ${Ze.radii.md};
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
    border-color: ${Ze.colors.primary500};
    box-shadow: 0 0 0 3px rgba(75, 0, 130, 0.25);
  }
`,On=u.textarea`
  width: 100%;
  min-height: 280px;
  padding: 10px;
  border-radius: ${Ze.radii.md};
  border: 1px solid #3f3f46;
  background: #09090b;
  color: #e4e4e7;
  font-family: ui-monospace, monospace;
  font-size: 12px;
  line-height: 1.5;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:focus {
    outline: none;
    border-color: ${Ze.colors.primary500};
    box-shadow: 0 0 0 3px rgba(75, 0, 130, 0.25);
  }
`,ae=u.label`
  display: block;
  font-size: 12px;
  color: #a1a1aa;
  margin-bottom: 4px;
`,ce=u.div`
  margin-bottom: 12px;
`,Zr=u.p`
  color: #f87171;
  font-size: 13px;
  margin: 8px 0;
`;u.iframe`
  width: 100%;
  height: min(70vh, 720px);
  border: 0;
  border-radius: ${Ze.radii.lg};
  background: #000;
`;const CM=u.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #0f0f12;
  padding: 24px;
`,EM=u.h1`
  margin: 0 0 8px;
  font-size: 22px;
  color: #fff;
`;function PM(){const e=ft(),t=Ai(d=>d.bootstrap),[n,r]=m.useState(""),[i,s]=m.useState(""),[l,a]=m.useState(!1),c=async d=>{d.preventDefault(),a(!0);try{if(await eM(n.trim(),i),await t(),!Ai.getState().authenticated){Ke.error("스태프(ADMIN/DEV/EMPLOYEE) 계정만 접근할 수 있습니다.");return}e("/admin",{replace:!0})}catch(p){Ke.error(p instanceof Error?p.message:"로그인에 실패했습니다.")}finally{a(!1)}};return o.jsx(CM,{children:o.jsxs(xn,{style:{width:"100%",maxWidth:400},children:[o.jsx(EM,{children:"Admin 로그인"}),o.jsxs("form",{onSubmit:c,children:[o.jsxs(ce,{children:[o.jsx(ae,{children:"아이디"}),o.jsx(nt,{value:n,onChange:d=>r(d.target.value),autoComplete:"username",required:!0})]}),o.jsxs(ce,{children:[o.jsx(ae,{children:"비밀번호"}),o.jsx(nt,{value:i,onChange:d=>s(d.target.value),type:"password",autoComplete:"current-password",required:!0})]}),o.jsx(ge,{$variant:"primary",type:"submit",disabled:l,style:{width:"100%",marginTop:8},children:l?"로그인 중…":"로그인"})]})]})})}const IM=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({$compact:e})=>e?"8px":"12px"};
`,TM=u(xn)`
  width: 100%;
  padding: ${({$compact:e})=>e?"12px":"14px 12px"};
`,RM=u.h3`
  margin: 0;
  font-size: ${({$compact:e})=>e?"13px":"15px"};
  font-weight: 600;
  word-break: break-all;
`,zM=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: ${({$compact:e})=>e?"8px":"12px"};
`,hd=u.div`
  display: inline-flex;
  align-items: baseline;
  gap: 4px;
  padding: ${({$compact:e})=>e?"4px 9px":"5px 11px"};
  border-radius: ${Ze.radii.pill};
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-size: ${({$compact:e})=>e?"11px":"12px"};
  color: #a1a1aa;

  strong {
    color: #fafafa;
    font-size: ${({$compact:e})=>e?"12px":"13px"};
    font-variant-numeric: tabular-nums;
  }
`,MM=u.div`
  width: 100%;
  min-width: 0;
`,AM=u.svg`
  display: block;
  width: 100%;
  overflow: visible;
  touch-action: none;
`,_M=we`
  from { stroke-dashoffset: 1; }
  to { stroke-dashoffset: 0; }
`,NM=we`
  from { opacity: 0; }
  to { opacity: 1; }
`,DM=u.path`
  stroke-dasharray: 1;
  stroke-dashoffset: 0;
  animation: ${_M} 0.7s ease forwards;
`,OM=u.path`
  animation: ${NM} 0.7s ease forwards;
`,BM=u.div`
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
`,D4=u.p`
  margin: 0;
  padding: ${({$compact:e})=>e?"20px 0":"32px 0"};
  text-align: center;
  color: #71717a;
  font-size: ${({$compact:e})=>e?"12px":"13px"};
`,FM={top:28,right:8,bottom:36,left:36},HM={top:24,right:6,bottom:32,left:32};function UM(e){if(e<=0)return 4;const t=10**Math.floor(Math.log10(e)),n=e/t;return(n<=1?1:n<=2?2:n<=5?5:10)*t}function VM(e){const t=e.match(/^(\d{4})/);return t?Number(t[1]):new Date().getFullYear()}function WM(e,t){if(t==="month"){const r=e.split("-");return r.length>=2?`${Number(r[1])}월`:e}const n=e.split("-");return n.length>=3?`${Number(n[1])}/${Number(n[2])}`:e}function KM(e){return e==="teal"?{stroke:"#2dd4bf",dot:"#5eead4"}:e==="gold"?{stroke:"#fbbf24",dot:"#fde68a"}:{stroke:Ze.colors.primary300,dot:Ze.colors.primary200}}function YM(e,t,n){const r=[];for(let l=1;l<e.length;l++)e[l].year!==e[l-1].year&&r.push({x:(e[l-1].x+e[l].x)/2,yearBefore:e[l-1].year,yearAfter:e[l].year});const i=[];for(const l of e)i[i.length-1]!==l.year&&i.push(l.year);return{yearBands:i.map((l,a)=>({year:l,xStart:a===0?t:r[a-1].x,xEnd:a===i.length-1?n:r[a].x})),dividers:r}}function ml({title:e,series:t,loading:n,error:r,compact:i=!1,accent:s="purple",unit:l="회",emptyMessage:a="아직 표시할 데이터가 없습니다.",hideSummary:c=!1}){const d=m.useRef(null),[p,f]=m.useState(960),[h,g]=m.useState(null),w=m.useId().replace(/:/g,""),v=i?168:260,S=i?HM:FM,x=KM(s);m.useEffect(()=>{const k=d.current;if(!k)return;const j=()=>{const R=k.getBoundingClientRect().width;R>0&&f(R)};j();const z=new ResizeObserver(j);return z.observe(k),window.addEventListener("resize",j),()=>{z.disconnect(),window.removeEventListener("resize",j)}},[t,n]);const L=m.useMemo(()=>{const k=(t==null?void 0:t.points)??[],j=(t==null?void 0:t.granularity)??"day",z=Math.max(120,p-S.left-S.right),R=v-S.top-S.bottom,T=(t==null?void 0:t.peak)??0,P=UM(T),E=k.length,A=k.map((H,_)=>{const Z=E<=1?S.left+z/2:S.left+_/(E-1)*z,V=P>0?H.count/P:0,ee=S.top+R-V*R;return{key:H.key,label:H.label,count:H.count,x:Z,y:ee,year:VM(H.key)}}),N=A.length>0?A.map((H,_)=>`${_===0?"M":"L"} ${H.x.toFixed(2)} ${H.y.toFixed(2)}`).join(" "):"",F=S.top+R,G=S.left,q=p-S.right,M=A.length>0?`${N} L ${A[A.length-1].x.toFixed(2)} ${F} L ${A[0].x.toFixed(2)} ${F} Z`:"",{yearBands:O,dividers:C}=YM(A,G,q),Q=4,X=Array.from({length:Q+1},(H,_)=>{const Z=Math.round(P*_/Q),V=S.top+R-(P>0?Z/P*R:0);return{value:Z,y:V}}),b=E<=12?1:E<=24?2:E<=60?5:7;return{plotted:A,linePath:N,areaPath:M,yearBands:O,dividers:C,yTicks:X,yMax:P,plotH:R,baseY:F,granularity:j,labelEvery:b}},[v,S,t,p]),y=h?L.plotted.find(k=>k.key===h)??null:null,$=k=>{var P;const j=(P=d.current)==null?void 0:P.getBoundingClientRect();if(!j||L.plotted.length===0)return;const z=k.clientX-j.left;let R=L.plotted[0],T=1/0;for(const E of L.plotted){const A=Math.abs(E.x-z);A<T&&(T=A,R=E)}R.key!==h&&g(R.key)},I=`${L.granularity}-${L.plotted.length}-${(t==null?void 0:t.total)??0}`;return o.jsxs(TM,{$compact:i,children:[o.jsx(IM,{$compact:i,children:o.jsx(RM,{$compact:i,children:e})}),r&&o.jsx(Zr,{children:r}),t&&!c&&o.jsxs(zM,{$compact:i,children:[o.jsxs(hd,{$compact:i,children:["합계",o.jsx("strong",{children:t.total.toLocaleString()})]}),o.jsxs(hd,{$compact:i,children:["평균",o.jsx("strong",{children:t.average.toLocaleString()})]}),o.jsxs(hd,{$compact:i,children:["최대",o.jsx("strong",{children:t.peak.toLocaleString()})]})]}),n&&!t?o.jsx(D4,{$compact:i,children:"그래프 데이터를 불러오는 중…"}):L.plotted.length===0?o.jsx(D4,{$compact:i,children:a}):o.jsxs(MM,{ref:d,style:{position:"relative",height:v},children:[o.jsxs(AM,{viewBox:`0 0 ${p} ${v}`,style:{height:v},role:"img","aria-label":e,onMouseMove:$,onMouseLeave:()=>g(null),children:[o.jsx("defs",{children:o.jsxs("linearGradient",{id:`area-${w}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[o.jsx("stop",{offset:"0%",stopColor:x.stroke,stopOpacity:.38}),o.jsx("stop",{offset:"70%",stopColor:x.stroke,stopOpacity:.06}),o.jsx("stop",{offset:"100%",stopColor:x.stroke,stopOpacity:0})]})}),L.yTicks.map(k=>o.jsxs("g",{children:[o.jsx("line",{x1:S.left,x2:p-S.right,y1:k.y,y2:k.y,stroke:"rgba(255,255,255,0.06)",strokeDasharray:"4 4"}),o.jsx("text",{x:S.left-10,y:k.y+4,textAnchor:"end",fill:"#71717a",fontSize:i?9:10,children:k.value.toLocaleString()})]},k.value)),o.jsx("line",{x1:S.left,x2:p-S.right,y1:L.baseY,y2:L.baseY,stroke:"rgba(255,255,255,0.2)",strokeWidth:1}),L.yearBands.map(k=>{const j=(k.xStart+k.xEnd)/2;return o.jsxs("g",{children:[o.jsx("rect",{x:k.xStart,y:S.top-28,width:Math.max(k.xEnd-k.xStart,1),height:20,fill:"rgba(75, 0, 130, 0.08)",rx:4}),o.jsxs("text",{x:j,y:S.top-14,textAnchor:"middle",fill:"#d4d4d8",fontSize:i?11:12,fontWeight:"600",children:[k.year,"년"]})]},k.year)}),L.dividers.map(k=>o.jsx("line",{x1:k.x,x2:k.x,y1:S.top-8,y2:L.baseY,stroke:"rgba(255,255,255,0.14)",strokeWidth:1},`${k.yearBefore}-${k.yearAfter}`)),y&&o.jsx("line",{x1:y.x,x2:y.x,y1:S.top,y2:L.baseY,stroke:x.stroke,strokeOpacity:.35,strokeWidth:1,strokeDasharray:"3 3"}),L.areaPath&&o.jsx(OM,{d:L.areaPath,fill:`url(#area-${w})`,stroke:"none"},`area-${I}`),L.linePath&&o.jsx(DM,{d:L.linePath,pathLength:1,fill:"none",stroke:x.stroke,strokeWidth:i?2:2.5,strokeLinejoin:"round",strokeLinecap:"round"},`line-${I}`),L.plotted.map((k,j)=>j%L.labelEvery===0||j===L.plotted.length-1?o.jsx("text",{x:k.x,y:L.baseY+(i?16:18),textAnchor:"middle",fill:"#a1a1aa",fontSize:i?9:10,children:WM(k.key,L.granularity)},`lbl-${k.key}`):null),y&&o.jsxs("g",{style:{pointerEvents:"none"},children:[o.jsx("circle",{cx:y.x,cy:y.y,r:i?8:10,fill:x.stroke,opacity:.18}),o.jsx("circle",{cx:y.x,cy:y.y,r:i?4.5:5.5,fill:x.dot,stroke:"#0f0f12",strokeWidth:2})]})]}),y&&o.jsxs(BM,{style:{left:y.x,top:y.y},children:[o.jsx("span",{className:"tip-label",children:y.label}),o.jsxs("span",{className:"tip-value",children:[y.count.toLocaleString(),l]})]})]})]})}const GM=[{value:7,label:"최근 7일"},{value:14,label:"최근 14일"},{value:30,label:"최근 30일"},{value:60,label:"최근 60일"},{value:90,label:"최근 90일"}],ZM=[{value:6,label:"최근 6개월"},{value:12,label:"최근 12개월"},{value:24,label:"최근 24개월"}];u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
`;const gd=u.select`
  padding: 6px 10px;
  border-radius: ${Ze.radii.md};
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
    border-color: ${Ze.colors.primary500};
    box-shadow: 0 0 0 3px rgba(75, 0, 130, 0.22);
  }
`,qM=u.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
`,QM=u.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
`,XM=u.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
`,O4=u.h3`
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
    background: ${Ze.colors.primary500};
  }
`,B4=u.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 10px;
`,F4=u.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  & + & {
    margin-top: 20px;
  }
`,JM=u.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,eA=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(132px, 1fr));
  gap: 8px;
  margin-bottom: 20px;
`,ui=u.div`
  background: linear-gradient(180deg, #141417 0%, #111114 100%);
  border: 1px solid #27272a;
  border-radius: ${Ze.radii.md};
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
`;function tA(){const[e,t]=m.useState(null),[n,r]=m.useState(null),[i,s]=m.useState(null),[l,a]=m.useState(null),[c,d]=m.useState(""),[p,f]=m.useState("day"),[h,g]=m.useState(30),[w,v]=m.useState(null),[S,x]=m.useState(null),[L,y]=m.useState(!1),$=void 0,I=p==="day"?GM:ZM,k=m.useCallback(async()=>{v(null);try{t(await tM())}catch(P){v(P instanceof Error?P.message:"지표를 불러오지 못했습니다.")}},[]),j=m.useCallback(async()=>{y(!0),x(null);try{const[P,E,A]=await Promise.all([nM(p,h),rM(p,h),iM(p,h)]);r(P),s(E),a(A)}catch(P){x(P instanceof Error?P.message:"그래프 데이터를 불러오지 못했습니다.")}finally{y(!1)}},[p,h]),z=m.useCallback(async()=>{await Promise.all([k(),j()])},[j,k]);m.useEffect(()=>{j()},[j]),m.useEffect(()=>{k();const P=setInterval(k,3e4);return()=>clearInterval(P)},[k]),m.useEffect(()=>{const P=(l==null?void 0:l.endpoints)??[];if(P.length===0){d("");return}d(E=>P.some(A=>A.uri===E)?E:P[0].uri)},[l]);const R=m.useMemo(()=>(l==null?void 0:l.endpoints.find(P=>P.uri===c))??null,[l,c]),T=P=>{f(P),g(P==="day"?30:12)};return o.jsxs("div",{children:[o.jsxs(qM,{children:[o.jsx(XM,{children:"트래픽·운영 현황"}),o.jsxs(QM,{children:[o.jsxs(gd,{value:p,onChange:P=>T(P.target.value),"aria-label":"집계 단위",children:[o.jsx("option",{value:"day",children:"일별"}),o.jsx("option",{value:"month",children:"월별"})]}),o.jsx(gd,{value:h,onChange:P=>g(Number(P.target.value)),"aria-label":"조회 기간",children:I.map(P=>o.jsx("option",{value:P.value,children:P.label},P.value))}),o.jsx(ge,{$variant:"ghost",type:"button",onClick:z,children:"새로고침"})]})]}),w&&o.jsx(Zr,{children:w}),S&&o.jsx(Zr,{children:S}),e&&o.jsxs(eA,{children:[o.jsxs(ui,{children:[o.jsx("span",{children:"누적 HTTP"}),o.jsx("strong",{children:e.totalHttpRequests.toLocaleString()})]}),o.jsxs(ui,{children:[o.jsx("span",{children:"회원"}),o.jsx("strong",{children:e.membersCount.toLocaleString()})]}),o.jsxs(ui,{children:[o.jsx("span",{children:"명상지·센터"}),o.jsx("strong",{children:e.placesCount.toLocaleString()})]}),o.jsxs(ui,{children:[o.jsx("span",{children:"전문가"}),o.jsx("strong",{children:e.expertsCount.toLocaleString()})]}),o.jsxs(ui,{children:[o.jsx("span",{children:"지역"}),o.jsx("strong",{children:e.regionsCount.toLocaleString()})]}),o.jsxs(ui,{children:[o.jsx("span",{children:"공지"}),o.jsx("strong",{children:e.noticesCount.toLocaleString()})]})]}),o.jsxs(F4,{children:[o.jsx(B4,{children:o.jsx(O4,{children:"주요 추이"})}),o.jsxs(JM,{children:[o.jsx(ml,{title:"HTTP 요청 추이",series:n,loading:L,unit:"회",compact:!0,emptyMessage:"아직 기록된 HTTP 요청이 없습니다."}),o.jsx(ml,{title:`회원 수 추이 (현재 ${(i==null?void 0:i.currentTotal.toLocaleString())??"-"}명)`,series:(i==null?void 0:i.cumulativeSeries)??null,loading:L,accent:"teal",unit:"명",compact:!0,emptyMessage:"아직 가입한 회원이 없습니다."}),o.jsx(ml,{title:"신규 가입 추이",series:(i==null?void 0:i.signupSeries)??null,loading:L,accent:"gold",unit:"명",compact:!0,emptyMessage:"선택한 기간에 신규 가입이 없습니다."})]})]}),o.jsxs(F4,{children:[o.jsxs(B4,{children:[o.jsx(O4,{children:"API별 호출량"}),l&&l.endpoints.length>0?o.jsx(gd,{value:c,onChange:P=>d(P.target.value),"aria-label":"API 선택",children:l.endpoints.map(P=>o.jsx("option",{value:P.uri,children:P.uri},P.uri))}):null]}),L&&!l?o.jsx(xn,{children:o.jsx("p",{style:{margin:0,color:"#71717a",textAlign:"center",padding:"20px 0",fontSize:13},children:"API 그래프를 불러오는 중…"})}):R?o.jsx(ml,{title:R.uri,series:R.series,compact:!0,emptyMessage:"호출 기록 없음"}):o.jsx(xn,{children:o.jsx("p",{style:{margin:0,color:"#71717a",textAlign:"center",padding:"20px 0",fontSize:13},children:"API 호출 기록이 쌓이면 URI별 그래프가 표시됩니다."})})]}),$]})}function H4(e){return Array.from(e.dataTransfer.types).includes("Files")}function nA({label:e,value:t,onChange:n}){const r=m.useRef(null),[i,s]=m.useState(!1),[l,a]=m.useState(null),[c,d]=m.useState(!1),p=async h=>{s(!0),a(null);try{n(await w5(h))}catch(g){a(g instanceof Error?g.message:"업로드 실패 (MinIO 활성화·로그인 확인)")}finally{s(!1)}},f=h=>{var w;if(!H4(h))return;h.preventDefault(),d(!1);const g=(w=h.dataTransfer.files)==null?void 0:w[0];g&&p(g)};return o.jsxs(ce,{children:[e?o.jsx(ae,{children:e}):null,o.jsxs("div",{onDragOver:h=>{H4(h)&&(h.preventDefault(),d(!0))},onDragLeave:h=>{h.currentTarget.contains(h.relatedTarget)||d(!1)},onDrop:f,style:{display:"flex",flexDirection:"column",gap:8,padding:8,margin:-8,borderRadius:12,transition:"background 0.12s, box-shadow 0.12s",background:c?"rgba(124, 58, 237, 0.1)":"transparent",boxShadow:`inset 0 0 0 2px ${c?"#7c3aed":"transparent"}`},children:[o.jsxs("div",{style:{display:"flex",gap:8,alignItems:"stretch"},children:[o.jsx(nt,{value:t,onChange:h=>n(h.target.value),placeholder:"이미지 URL · 업로드 · 파일 끌어다 놓기"}),o.jsx(ge,{type:"button",disabled:i,onClick:()=>{var h;return(h=r.current)==null?void 0:h.click()},children:i?"…":"업로드"})]}),t?o.jsx("img",{src:t,alt:"",style:{maxHeight:96,maxWidth:"100%",borderRadius:8,objectFit:"cover"}}):o.jsx("p",{style:{margin:0,color:c?"#c4b5fd":"#71717a",fontSize:12},children:c?"여기에 놓으면 업로드됩니다":"이미지 파일을 이 영역에 끌어다 놓을 수 있어요"})]}),o.jsx("input",{ref:r,type:"file",accept:"image/*",hidden:!0,onChange:h=>{var w;const g=(w=h.target.files)==null?void 0:w[0];g&&p(g),h.target.value=""}}),l?o.jsx("p",{style:{margin:"6px 0 0",color:"#f87171",fontSize:12},children:l}):null]})}function b5(e,t){const n=e.trim(),r=(t??[]).map(i=>i.trim()).filter(i=>i&&i!==n);return n?[n,...r]:r}function rA(e){const t=e.map(n=>n.trim()).filter(Boolean);return{imageUrl:t[0]??"",imageUrls:t.slice(1)}}const iA=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  border-radius: 12px;
  padding: 8px;
  margin: -8px;
  transition: background 0.12s, box-shadow 0.12s;
  background: ${({$fileDragOver:e})=>e?"rgba(124, 58, 237, 0.1)":"transparent"};
  box-shadow: ${({$fileDragOver:e})=>e?"inset 0 0 0 2px #7c3aed":"inset 0 0 0 2px transparent"};
`,oA=u.div`
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
`,sA=u.span`
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
`,lA=u.button`
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
`,aA=u.button`
  width: 88px;
  height: 88px;
  border-radius: 10px;
  border: 2px dashed ${({$fileDragOver:e})=>e?"#7c3aed":"#52525b"};
  background: ${({$fileDragOver:e})=>e?"rgba(124, 58, 237, 0.14)":"#111114"};
  color: ${({$fileDragOver:e})=>e?"#c4b5fd":"#a1a1aa"};
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
`,cA=u.p`
  margin: 8px 0 0;
  font-size: 12px;
  color: #71717a;
  line-height: 1.45;
`,uA=u.p`
  margin: 6px 0 0;
  color: #f87171;
  font-size: 12px;
`;function xl(e){return Array.from(e.dataTransfer.types).includes("Files")}function dA(e,t,n){if(t===n||t<0||n<0||t>=e.length||n>=e.length)return e;const r=[...e],[i]=r.splice(t,1);return r.splice(n,0,i),r}function U4({label:e="사진",photos:t,onChange:n,maxPhotos:r=10,hint:i="첫 번째 사진이 대표·목록 썸네일입니다. 파일을 끌어다 놓으면 업로드되고, 사진끼리 드래그하면 순서가 바뀝니다."}){const s=m.useRef(null),[l,a]=m.useState(!1),[c,d]=m.useState(null),[p,f]=m.useState(null),[h,g]=m.useState(null),[w,v]=m.useState(!1),S=j=>n(j.slice(0,r)),x=async j=>{if(!(j!=null&&j.length))return;const z=r-t.length;if(z<=0){d(`사진은 최대 ${r}장까지 등록할 수 있습니다.`);return}a(!0),d(null);try{const R=[...t];for(const T of Array.from(j).slice(0,z)){const P=await w5(T);R.includes(P)||R.push(P)}S(R)}catch(R){d(R instanceof Error?R.message:"업로드 실패 (MinIO·로그인 확인)")}finally{a(!1)}},L=j=>{p!==null&&(S(dA(t,p,j)),f(null),g(null))},y=t.length<r,$=j=>{!xl(j)||!y||(j.preventDefault(),v(!0))},I=j=>{j.currentTarget.contains(j.relatedTarget)||v(!1)},k=j=>{xl(j)&&(j.preventDefault(),v(!1),x(j.dataTransfer.files))};return o.jsxs(ce,{children:[o.jsx(ae,{children:e}),o.jsxs(iA,{$fileDragOver:w,onDragOver:$,onDragLeave:I,onDrop:k,children:[t.map((j,z)=>o.jsxs(oA,{draggable:!0,$dragging:p===z,$dragOver:h===z,onDragStart:()=>f(z),onDragEnd:()=>{f(null),g(null)},onDragOver:R=>{xl(R)||(R.preventDefault(),g(z))},onDragLeave:()=>g(R=>R===z?null:R),onDrop:R=>{xl(R)||(R.preventDefault(),L(z))},children:[o.jsx("img",{src:j,alt:""}),z===0?o.jsx(sA,{children:"대표"}):null,o.jsx(lA,{type:"button","aria-label":"사진 삭제",onClick:()=>S(t.filter((R,T)=>T!==z)),children:"×"})]},`${j}-${z}`)),y?o.jsx(aA,{type:"button",disabled:l,$fileDragOver:w,onClick:()=>{var j;return(j=s.current)==null?void 0:j.click()},"aria-label":"사진 추가",children:l?"…":"+"}):null]}),o.jsx("input",{ref:s,type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:j=>void x(j.target.files).finally(()=>{j.target.value=""})}),o.jsx(cA,{children:i}),c?o.jsx(uA,{children:c}):null]})}const pA={width:"100%",padding:8,borderRadius:8,background:"#09090b",color:"#fff",border:"1px solid #3f3f46"};function fA({label:e="지역",value:t,onChange:n}){return o.jsxs(ce,{children:[o.jsx(ae,{children:e}),o.jsx("select",{value:t,onChange:r=>n(r.target.value),style:pA,children:Gr.map(r=>o.jsx("option",{value:r.id,children:r.name},r.id))})]})}const W1=[{id:"KR-11",names:["서울특별시","서울"]},{id:"KR-26",names:["부산광역시","부산"]},{id:"KR-27",names:["대구광역시","대구"]},{id:"KR-28",names:["인천광역시","인천"]},{id:"KR-29",names:["광주광역시","광주"]},{id:"KR-30",names:["대전광역시","대전"]},{id:"KR-31",names:["울산광역시","울산"]},{id:"KR-50",names:["세종특별자치시","세종"]},{id:"KR-41",names:["경기도","경기"]},{id:"KR-42",names:["강원특별자치도","강원도","강원"]},{id:"KR-43",names:["충청북도","충북"]},{id:"KR-44",names:["충청남도","충남"]},{id:"KR-45",names:["전북특별자치도","전라북도","전북"]},{id:"KR-46",names:["전라남도","전남"]},{id:"KR-47",names:["경상북도","경북"]},{id:"KR-48",names:["경상남도","경남"]},{id:"KR-49",names:["제주특별자치도","제주도","제주"]}];function V4(e){return typeof e=="number"?e:parseFloat(String(e??""))}function W4(e){var i,s;const t=V4(((i=e.point)==null?void 0:i.y)??e.y),n=V4(((s=e.point)==null?void 0:s.x)??e.x);if(!Number.isFinite(t)||!Number.isFinite(n))return null;const r=(e.roadAddress||e.jibunAddress||e.address||"").trim();return r?{address:r,lat:t,lng:n,precision:"exact"}:null}function b0(){var e,t;return(t=(e=window.naver)==null?void 0:e.maps)==null?void 0:t.Service}function k5(e){var n,r;if(e==="OK"||e===0)return!0;const t=(r=(n=b0())==null?void 0:n.Status)==null?void 0:r.OK;return t!=null&&e===t}function hA(e){var n;const t=(n=b0())==null?void 0:n.Status;if(t){for(const[r,i]of Object.entries(t))if(i===e&&r!=="OK")return r}return String(e)}function gA(e){var a,c;const t=e,n=[],r=new Set,i=d=>{!d||r.has(d.address)||(r.add(d.address),n.push(d))},s=((a=t.v2)==null?void 0:a.addresses)??[];for(const d of s)i(W4(d));const l=((c=t.result)==null?void 0:c.items)??t.addresses??[];for(const d of l)i(W4(d));return n}function mA(e){const t=b0(),n=t==null?void 0:t.geocode;return n?new Promise((r,i)=>{try{n.call(t,{query:e},(s,l)=>{r({status:s,results:k5(s)?gA(l):[]})})}catch(s){i(s instanceof Error?s:new Error("주소 검색 호출 실패"))}}):Promise.reject(new Error("지도 API(geocoder)가 로드되지 않았습니다."))}function K4(e){return e.replace(/\s+/g,"")}function j5(e){const t=K4(e);for(const n of W1)for(const r of[...n.names].sort((i,s)=>s.length-i.length))if(t.includes(K4(r)))return n.id;return null}function xA(e,t){const n=Sa.find(r=>r.id===t)??Sa[0];return{address:e.trim(),lat:(n.minLat+n.maxLat)/2,lng:(n.minLng+n.maxLng)/2,approximate:!0,precision:"region"}}function LA(e){var d,p;const t=new Set,n=[],r=f=>{const h=f.trim().replace(/\s+/g," ");h.length>=2&&!t.has(h)&&(t.add(h),n.push(h))},i=e.trim().replace(/\s+/g," ");r(i);const s=(d=i.split(/[,，]/)[0])==null?void 0:d.trim();s&&s!==i&&r(s);const l=i.split(/\s+/).filter(Boolean);for(let f=l.length-1;f>=1;f--)r(l.slice(0,f).join(" "));const a=l[l.length-1];if(a&&a.length>=2&&!/[시군구읍면동로]$/.test(a)){const f=l.slice(0,-1).join(" ");r(`${f} ${a}시`.trim()),r(`${f} ${a}군`.trim()),r(`${f} ${a}구`.trim()),r(`${a}시`),r(`${a}군`),r(`${a}구`)}for(const f of W1)for(const h of f.names)i.includes(h)&&r(h);const c=j5(i);if(c){const f=(p=W1.find(h=>h.id===c))==null?void 0:p.names[0];f&&r(f),r(lo(c))}return n}function yA(e,t,n){return e.map(r=>({...r,approximate:t||r.approximate,precision:t?n:r.precision??"exact"}))}function S5(e){return e.precision==="region"?11:e.approximate||e.precision==="area"?14:17}async function K1(e){const t=e.trim();if(!t)return[];const n=LA(t);let r="OK";for(let s=0;s<n.length;s++){const l=n[s],{status:a,results:c}=await mA(l);if(r=a,c.length>0)return yA(c,s>0,s>0?"area":"exact")}const i=j5(t);if(i)return[xA(t,i)];if(!k5(r))throw new Error(`주소 검색 실패 (${hA(r)})`);return[]}const vA=u.div`
  display: flex;
  align-items: stretch;
  gap: 8px;
`,wA=u.div`
  flex: 1;
  min-width: 0;

  input {
    width: 100%;
    height: 100%;
  }
`,bA=u.button`
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
`;function kA(){return o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("circle",{cx:"11",cy:"11",r:"7"}),o.jsx("line",{x1:"16.5",y1:"16.5",x2:"21",y2:"21"})]})}function jA(){return o.jsx("svg",{className:"spin",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:o.jsx("path",{d:"M12 3a9 9 0 1 1-6.36 15.36",strokeLinecap:"round"})})}const SA=u.ul`
  list-style: none;
  margin: 8px 0 0;
  padding: 0;
  border: 1px solid #3f3f46;
  border-radius: 8px;
  overflow: hidden;
  max-height: 160px;
  overflow-y: auto;
`,$A=u.button`
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
`,CA=u.div`
  margin-top: 12px;
  width: 100%;
  height: 220px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #3f3f46;
  background: #27272a;
`,EA=u.p`
  margin: 12px 0 0;
  font-size: 12px;
  color: #71717a;
  line-height: 1.45;
`,PA=u.p`
  margin: 8px 0 0;
  font-size: 12px;
  color: #86efac;
`,IA=u.p`
  margin: 8px 0 0;
  font-size: 12px;
  color: #fcd34d;
  line-height: 1.45;
`,Y4=u.p`
  margin: 6px 0 0;
  font-size: 12px;
  color: #71717a;
  line-height: 1.45;
`;async function Io(){await new Promise(e=>{requestAnimationFrame(()=>requestAnimationFrame(()=>e()))})}function TA({value:e,lat:t,lng:n,onChange:r,onCoordsChange:i}){const s=m.useRef(null),l=m.useRef(null),a=m.useRef(null),c=m.useRef(i);c.current=i;const d=m.useRef(!1),[p,f]=m.useState(e),[h,g]=m.useState([]),[w,v]=m.useState(null),[S,x]=m.useState(!1),[L,y]=m.useState(null),[$,I]=m.useState(!1),k="233s0l2jzo".trim();m.useEffect(()=>{f(e),e.trim()||(v(null),I(!1),g([]))},[e]);const j=m.useCallback((T,P,E)=>{var M,O,C;const N=window.naver.maps,F=s.current;if(!(N!=null&&N.Map)||!N.LatLng||!N.Marker||!F)return;const G=new N.LatLng(T,P);l.current?l.current.setCenter(G):l.current=new N.Map(F,{center:G,zoom:E,scrollWheel:!0,pinchZoom:!0,zoomControl:!0,mapTypeControl:!1,draggable:!0}),a.current&&a.current.setMap(null);const q=new N.Marker({position:G,map:l.current,draggable:!0});a.current=q,(O=(M=N.Event)==null?void 0:M.addListener)==null||O.call(M,q,"dragend",()=>{var H;const Q=q.getPosition(),X=Q.lat(),b=Q.lng();d.current=!0,I(!0),(H=c.current)==null||H.call(c,X,b)}),(C=N.Event)==null||C.trigger(l.current,"resize")},[]),z=m.useCallback((T,P)=>{var E;d.current=!1,j(T.lat,T.lng,S5(T)),v(T),I(!T.approximate),(E=c.current)==null||E.call(c,T.lat,T.lng),(P==null?void 0:P.syncAddress)!==!1&&!T.approximate&&r(T.address)},[r,j]),R=m.useCallback(async T=>{const P=(T??p).trim();if(!P){y("검색할 주소를 입력하세요.");return}y(null),x(!0),I(!1);try{if(!k){y(".env에 VITE_NAVER_MAP_CLIENT_ID를 설정하면 지도에서 주소를 확인할 수 있습니다."),r(P);return}await F1(k),await Io();const E=await K1(P);if(g(E),E.length===0){y("위치를 찾지 못했습니다. 시·군·구 이름이나 더 구체적인 주소로 다시 검색해 보세요.");return}await Io(),z(E[0],{syncAddress:!E[0].approximate})}catch(E){y(E instanceof Error?E.message:"주소 검색 실패")}finally{x(!1)}},[k,r,p,z]);return m.useEffect(()=>{let T=!1;const P=Number.isFinite(t)&&Number.isFinite(n);return(async()=>{if(k)try{if(await F1(k),T)return;if(await Io(),P){j(t,n,16),I(!0);return}if(!e.trim())return;const E=await K1(e);if(T||E.length===0)return;const A=E.find(N=>N.address===e)??E[0];await Io(),T||z(A,{syncAddress:!1})}catch{}})(),()=>{T=!0}},[]),o.jsxs(ce,{children:[o.jsx(ae,{children:"주소 (검색 후 지도에서 확인)"}),o.jsxs(vA,{children:[o.jsx(wA,{children:o.jsx(nt,{value:p,onChange:T=>{f(T.target.value),I(!1)},onKeyDown:T=>{T.key==="Enter"&&(T.preventDefault(),R())},placeholder:"예: 서울특별시 종로구 ..."})}),o.jsx(bA,{type:"button",onClick:()=>void R(),disabled:S,"aria-label":S?"주소 검색 중":"주소 검색",title:S?"검색 중…":"검색",children:S?o.jsx(jA,{}):o.jsx(kA,{})})]}),o.jsxs(Y4,{children:["정확한 도로명·지번이 없어도 「강릉」, 「제주」, 「종로구」처럼 지역명만으로 대략적인 위치를 표시합니다. 검색 후 ",o.jsx("strong",{children:"핀을 드래그"}),"해 정확한 위치로 옮길 수 있습니다."]}),L&&o.jsx(Zr,{children:L}),h.length>1&&o.jsx(SA,{children:h.map(T=>o.jsx("li",{children:o.jsx($A,{type:"button",$active:(w==null?void 0:w.address)===T.address,onClick:()=>void Io().then(()=>z(T)),children:T.address})},`${T.address}-${T.lat}`))}),k?o.jsxs(o.Fragment,{children:[o.jsx(CA,{ref:s,"aria-label":"주소 확인 지도"}),!w&&o.jsx(EA,{children:"검색하면 지도에서 위치를 확인할 수 있습니다."})]}):o.jsx(Y4,{children:".env에 VITE_NAVER_MAP_CLIENT_ID를 설정하면 지도 미리보기가 표시됩니다."}),$&&w&&o.jsxs(PA,{children:["✓ 지도에서 확인됨 — ",w.address]}),!$&&(w==null?void 0:w.approximate)&&o.jsxs(IA,{children:["◎ 대략적인 위치 — ",w.precision==="region"?"시·도":"지역"," 단위로 표시됩니다.",w.address!==p.trim()&&w.precision!=="region"?` (${w.address})`:""]})]})}const G4=[{id:"text",label:"텍스트",group:"기본 블록",prefix:""},{id:"h1",label:"제목1",group:"기본 블록",prefix:"# ",hint:"#"},{id:"h2",label:"제목2",group:"기본 블록",prefix:"## ",hint:"##"},{id:"h3",label:"제목3",group:"기본 블록",prefix:"### ",hint:"###"},{id:"ul",label:"글머리 기호",group:"기본 블록",prefix:"- ",hint:"-"},{id:"ol",label:"번호 목록",group:"기본 블록",prefix:"1. ",hint:"1."},{id:"quote",label:"인용",group:"기본 블록",prefix:"> ",hint:">"},{id:"hr",label:"구분선",group:"기본 블록",prefix:`---
`,hint:"---"}],RA=u.div`
  position: relative;
`,zA=u(On)`
  min-height: ${({$minHeight:e})=>e}px;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.55;
  resize: vertical;
`,MA=u.div`
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
`,AA=u.div`
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
`,_A=u.div`
  padding: 8px 12px 4px;
  font-size: 11px;
  font-weight: 600;
  color: #71717a;
`,NA=u.button`
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
`,DA=u.div`
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
`,OA=u.p`
  margin: 6px 0 0;
  font-size: 12px;
  color: #71717a;
`;function $5(e,t){return e.lastIndexOf(`
`,t-1)+1}function BA(e,t){const n=$5(e,t),r=e.slice(n,t),i=r.lastIndexOf("/");if(i<0||r.slice(0,i).trim()!=="")return null;const l=r.slice(i+1);return l.includes(" ")||l.includes(`
`)?null:{slashStart:n+i,query:l,selected:0}}function FA(e,t,n,r){const i=$5(e,t);return{next:e.slice(0,i)+r+e.slice(n),nextCursor:i+r.length}}function Vl({label:e,value:t,onChange:n,placeholder:r,minHeight:i=100,hint:s="/ 를 입력하면 마크다운 블록을 선택할 수 있습니다."}){const l=m.useRef(null),[a,c]=m.useState(null),d=m.useMemo(()=>{if(!a)return[];const x=a.query.trim().toLowerCase();return x?G4.filter(L=>{var y;return L.label.toLowerCase().includes(x)||L.id.includes(x)||(((y=L.hint)==null?void 0:y.toLowerCase().includes(x))??!1)}):G4},[a]),p=m.useCallback(()=>c(null),[]),f=m.useCallback(x=>{const L=l.current;if(!a||!L)return;const y=L.selectionStart??t.length,{next:$,nextCursor:I}=FA(t,a.slashStart,y,x.prefix);n($),p(),requestAnimationFrame(()=>{L.focus(),L.setSelectionRange(I,I)})},[p,a,n,t]),h=m.useCallback((x,L)=>{const y=BA(x,L);if(!y){c(null);return}c($=>{const I=$&&$.slashStart===y.slashStart?$.selected:0;return{...y,selected:I}})},[]);m.useEffect(()=>{if(a){if(d.length===0){c(null);return}a.selected>=d.length&&c({...a,selected:d.length-1})}},[d.length,a]);const g=x=>{const L=x.target.value,y=x.target.selectionStart??L.length;n(L),h(L,y)},w=x=>{if(!(!a||d.length===0)){if(x.key==="ArrowDown"){x.preventDefault(),c(L=>L&&{...L,selected:Math.min(L.selected+1,d.length-1)});return}if(x.key==="ArrowUp"){x.preventDefault(),c(L=>L&&{...L,selected:Math.max(L.selected-1,0)});return}if(x.key==="Enter"&&!x.shiftKey){x.preventDefault(),f(d[a.selected]);return}x.key==="Escape"&&(x.preventDefault(),p())}},v=()=>{const x=l.current;x&&h(t,x.selectionStart??t.length)};let S="";return o.jsxs(ce,{children:[o.jsx(ae,{children:e}),o.jsxs(RA,{children:[o.jsx(zA,{ref:l,$minHeight:i,value:t,onChange:g,onKeyDown:w,onClick:v,onBlur:()=>window.setTimeout(p,120),placeholder:r,spellCheck:!1}),a&&d.length>0&&o.jsxs(MA,{onMouseDown:x=>x.preventDefault(),children:[o.jsxs(AA,{children:["/",o.jsx("span",{children:a.query||"검색어를 입력하세요"})]}),d.map((x,L)=>{const y=x.group!==S;return S=x.group,o.jsxs("div",{children:[y?o.jsx(_A,{children:x.group}):null,o.jsxs(NA,{type:"button",$active:a.selected===L,onMouseEnter:()=>c($=>$&&{...$,selected:L}),onClick:()=>f(x),children:[o.jsx("span",{children:x.label}),x.hint?o.jsx("kbd",{children:x.hint}):null]})]},x.id)}),o.jsxs(DA,{children:[o.jsx("span",{children:"메뉴 닫기"}),o.jsx("kbd",{children:"esc"})]})]})]}),o.jsx(OA,{children:s})]})}const HA=u.div`
  width: 100%;
  height: 180px;
  border-radius: ${({theme:e})=>e.radii.lg};
  overflow: hidden;
  background: ${({theme:e})=>e.colors.bg100};
  border: 1px solid ${({theme:e})=>e.colors.border200};
`,Z4=u.div`
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
`,Ll=u.p`
  margin: 8px 0 0;
  font-size: 0.8rem;
  color: ${({theme:e})=>e.colors.text700};
`;async function UA(){await new Promise(e=>{requestAnimationFrame(()=>requestAnimationFrame(()=>e()))})}function VA({address:e,lat:t,lng:n}){const r=m.useRef(null),i=m.useRef(null),s=m.useRef(null),[l,a]=m.useState("idle"),[c,d]=m.useState(!1),p="233s0l2jzo".trim(),f=e.trim(),h=Number.isFinite(t)&&Number.isFinite(n);return m.useEffect(()=>{if(!f&&!h){a("idle"),d(!1),i.current=null,s.current=null;return}if(!p){a("no-key");return}let g=!1;const w=window.setTimeout(()=>{(async()=>{var v;a("loading");try{if(await F1(p),g)return;await UA();let S,x,L,y;if(h)S=t,x=n,L=16,y=!1;else{const j=await K1(f);if(g)return;const z=j.find(R=>R.address===f)??j[0];if(!z){a("error"),d(!1);return}S=z.lat,x=z.lng,L=S5(z),y=!!z.approximate}const $=r.current;if(!$||g)return;const I=window.naver,k=new I.maps.LatLng(S,x);if(!i.current)i.current=new I.maps.Map($,{center:k,zoom:L,scrollWheel:!1,mapTypeControl:!1,zoomControl:!1,scaleControl:!1});else{const j=i.current;j.setCenter(k),j.setZoom(L)}s.current&&s.current.setMap(null),s.current=new I.maps.Marker({position:k,map:i.current}),(v=I.maps.Event)==null||v.trigger(i.current,"resize"),g||(d(y),a("ready"))}catch{g||(d(!1),a("error"))}})()},350);return()=>{g=!0,window.clearTimeout(w)}},[p,f,h,t,n]),!f&&!h?o.jsxs(Z4,{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"주소를 입력하면 지도가 표시됩니다"]}):l==="no-key"?o.jsxs(Z4,{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),f,o.jsx(Ll,{children:"VITE_NAVER_MAP_CLIENT_ID 설정 시 지도 미리보기가 표시됩니다."})]}):o.jsxs(o.Fragment,{children:[o.jsx(HA,{ref:r,"aria-label":"위치 미리보기 지도"}),l==="loading"&&o.jsx(Ll,{children:"지도 불러오는 중…"}),l==="ready"&&c&&o.jsx(Ll,{children:"대략적인 위치입니다. 정확한 주소 검색을 권장합니다."}),l==="error"&&o.jsx(Ll,{children:"지도를 표시하지 못했습니다. 시·군·구 이름으로 다시 입력해 보세요."})]})}const WA=.6,KA=2.4,YA=u.div`
  position: sticky;
  top: 16px;
`,GA=u.div`
  background: linear-gradient(180deg, #1b1b1f 0%, #161619 100%);
  border: 1px solid #2a2a30;
  border-radius: 16px;
  padding: 14px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02), 0 8px 24px rgba(0, 0, 0, 0.22);
`,ZA=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 12px;
`,qA=u.h3`
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
    background: ${Ze.colors.primary500};
  }
`,QA=u.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #a1a1aa;
  font-variant-numeric: tabular-nums;
`,XA=u.button`
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
`,JA=u.div`
  position: relative;
  width: max-content;
`,e_=u.div`
  position: absolute;
  left: -4px;
  bottom: -4px;
  width: 26px;
  height: 26px;
  border-radius: 7px;
  background: ${Ze.colors.primary600};
  border: 2px solid #0f0f12;
  cursor: nesw-resize;
  display: grid;
  place-items: center;
  color: #fff;
  font-size: 13px;
  touch-action: none;
  z-index: 3;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
`;function za({title:e="미리보기",controls:t,children:n}){const[r,i]=m.useState(1),s=m.useRef(null),l=d=>{var p,f;d.preventDefault(),(f=(p=d.target).setPointerCapture)==null||f.call(p,d.pointerId),s.current={x:d.clientX,y:d.clientY,zoom:r}},a=d=>{if(!s.current)return;const p=(s.current.x-d.clientX+(d.clientY-s.current.y))/2,f=Math.min(KA,Math.max(WA,s.current.zoom+p*.004));i(f)},c=d=>{var p,f;s.current=null,(f=(p=d.target).releasePointerCapture)==null||f.call(p,d.pointerId)};return o.jsx(YA,{children:o.jsxs(GA,{children:[o.jsxs(ZA,{children:[o.jsx(qA,{children:e}),o.jsxs(QA,{children:[Math.round(r*100),"%",o.jsx(XA,{type:"button",onClick:()=>i(1),children:"초기화"})]})]}),t,o.jsxs(JA,{children:[o.jsx("div",{style:{zoom:r},children:n}),o.jsx(e_,{role:"slider","aria-label":"미리보기 크기 조절",onPointerDown:l,onPointerMove:a,onPointerUp:c,children:"⤢"})]})]})})}const t_=u.div`
  display: flex;
  gap: 6px;
  margin-bottom: 12px;
`,q4=u.button`
  flex: 1;
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid ${({$active:e})=>e?"#7c3aed":"#3f3f46"};
  background: ${({$active:e})=>e?"rgba(124, 58, 237, 0.25)":"#18181b"};
  color: ${({$active:e})=>e?"#fff":"#a1a1aa"};
  font-size: 12px;
  cursor: pointer;
`,Q4=u.div`
  width: 360px;
  border-radius: 24px;
  border: 6px solid #3f3f46;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
  max-height: min(78vh, 760px);
  overflow-y: auto;
  scrollbar-width: thin;
`,n_=u.div`
  width: 360px;
  display: flex;
  justify-content: center;
  padding: 8px 0 4px;
  background: linear-gradient(180deg, ${({theme:e})=>e.colors.primary50} 0%, ${({theme:e})=>e.colors.warmCream} 100%);
  border-radius: 16px;
  border: 1px solid #27272a;
`,r_=u.div`
  width: 200px;
  background: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.radii.lg};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadow.soft};
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  position: relative;
`,i_=u.div`
  width: 100%;
  height: 120px;
  background: ${({theme:e})=>e.colors.bg100};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`,o_=u.div`
  padding: 12px;
`,s_=u.h4`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 6px;
  color: ${({theme:e})=>e.colors.text900};
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,l_=u.span`
  font-size: 0.85rem;
  color: ${({theme:e})=>e.colors.text700};
`,a_=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 6px;
`,c_=u.span`
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.primary600};
  background: ${({theme:e})=>e.colors.primary50};
  padding: 2px 8px;
  border-radius: ${({theme:e})=>e.radii.pill};
`,u_=u.div`
  color: ${({theme:e})=>e.colors.text900};
  background: #fff;
`,d_=u.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary100};
  position: sticky;
  top: 0;
  z-index: 2;
`,p_=u.h1`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
`,f_=u.div`
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
`,h_=u.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 6px;
`,g_=u.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({$active:e})=>e?"#fff":"rgba(255,255,255,0.45)"};
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15);
`,md=u.div`
  height: 220px;
  display: grid;
  place-items: center;
  color: ${({theme:e})=>e.colors.text700};
  font-size: 0.9rem;
  background: ${({theme:e})=>e.colors.bg100};
`,m_=u.div`
  padding: 20px 16px 28px;
`,x_=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;
`,L_=u.h2`
  margin: 0;
  font-size: 1.55rem;
  font-weight: 700;
  line-height: 1.25;
  flex: 1;
`,y_=u.span`
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
`,v_=u.div`
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
`,w_=u.div`
  margin: 0 0 20px;
  font-size: 0.98rem;
  line-height: 1.55;
  color: ${({theme:e})=>e.colors.text700};
`,b_=u.section`
  margin-bottom: 22px;
`,k_=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 10px;
`,j_=u.h3`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
`,S_=u.span`
  font-size: 0.72rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary100};
  color: ${({theme:e})=>e.colors.primary700};
`,$_=u.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 4px;
`,C_=u.div`
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
`,xd=u.div`
  border-bottom: 1px solid ${({theme:e})=>e.colors.border200};
  padding: 12px 0;
  color: ${({theme:e})=>e.colors.text900};
`,Ld=u.div`
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.4;
`,yl=u.div`
  margin-top: 8px;
  font-size: 0.88rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.text700};
`,E_=u.div`
  margin-top: 22px;

  h3 {
    margin: 0 0 10px;
    font-size: 1.05rem;
    font-weight: 600;
  }
`,P_=u.p`
  margin: 0 0 10px;
  font-size: 0.88rem;
  line-height: 1.45;
  color: ${({theme:e})=>e.colors.text700};
`,I_={wifi:"Wi-Fi",parking:"Parking",tea:"Tea"};function T_({place:e}){var v,S,x;const[t,n]=m.useState("detail"),[r,i]=m.useState(0),s=m.useMemo(()=>{var $;if(!e)return null;const L=e.photos??[],y=(($=e.thumbnailUrl)==null?void 0:$.trim())||L[0]||"";return ic({...e,photos:L,thumbnailUrl:y,id:e.id||"preview"})},[e]),l=m.useMemo(()=>s?L0(s):[],[s]);if(!s)return o.jsx(za,{children:o.jsx(Q4,{children:o.jsx("div",{style:{padding:"40px 16px",textAlign:"center",color:"#71717a",fontSize:13},children:"편집 중인 명상지가 없습니다."})})});const a=(s.programs??[]).filter(L=>L.status==="ongoing"),c=(s.programs??[]).filter(L=>L.status==="past"),d=s.venueKind==="명상센터"?"명상센터":"명상지",p=(v=s.detailSections)==null?void 0:v.find(L=>L.title.toLowerCase().includes("유의사항")),f=s.facilities??[],h=FP(s),g=lo(s.regionId),w=l.length>0?r%l.length:0;return o.jsx(za,{controls:o.jsxs(t_,{children:[o.jsx(q4,{type:"button",$active:t==="detail",onClick:()=>n("detail"),children:"상세 페이지"}),o.jsx(q4,{type:"button",$active:t==="list",onClick:()=>n("list"),children:"목록 카드"})]}),children:t==="list"?o.jsx(n_,{children:o.jsxs(r_,{children:[o.jsx(i_,{children:h?o.jsx("img",{src:h,alt:""}):o.jsx(md,{style:{height:120},children:"사진 없음"})}),o.jsxs(o_,{children:[o.jsx(s_,{children:s.name||"이름 미입력"}),o.jsx(l_,{children:g}),((S=s.hashtags)==null?void 0:S.length)>0&&o.jsx(a_,{children:s.hashtags.slice(0,2).map(L=>o.jsx(c_,{children:L},L))})]})]})}):o.jsx(Q4,{children:o.jsxs(u_,{children:[o.jsxs(d_,{children:[o.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),o.jsx(p_,{children:"상세 페이지"})]}),l.length>0?o.jsxs(f_,{children:[o.jsx("img",{src:l[w],alt:""}),l.length>1&&o.jsx(h_,{children:l.map((L,y)=>o.jsx("button",{type:"button","aria-label":`${y+1}번째 사진`,onClick:()=>i(y),style:{padding:0,border:"none",background:"none",cursor:"pointer"},children:o.jsx(g_,{$active:y===w})},y))})]}):o.jsx(md,{children:"대표 사진을 추가하세요"}),o.jsxs(m_,{children:[o.jsxs(x_,{children:[o.jsx(L_,{children:s.name||"이름 미입력"}),o.jsx(y_,{"aria-hidden":!0,children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})})]}),o.jsxs(v_,{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),s.address||"주소 미입력"]}),o.jsx(w_,{children:o.jsx(so,{markdown:s.shortDescription,fallback:"한 줄 소개를 입력하세요."})}),(s.programs??[]).length>0&&o.jsxs(b_,{children:[o.jsxs(k_,{children:[o.jsx(j_,{children:"프로그램 · 후기"}),o.jsx(S_,{children:d})]}),a.length>0?o.jsx($_,{children:a.map(L=>{const y=b5(L.imageUrl,L.imageUrls)[0];return o.jsxs(C_,{children:[y?o.jsx("img",{src:y,alt:""}):o.jsx(md,{style:{height:108},children:"사진"}),o.jsx("span",{children:L.title||"(제목 없음)"})]},L.id)})}):o.jsxs(yl,{children:["지난 프로그램·후기 (",c.length,")"]})]}),o.jsxs(xd,{children:[o.jsx(Ld,{children:"입장료·이용 요금"}),o.jsx(yl,{children:(x=s.admissionFee)!=null&&x.trim()?o.jsx(O1,{children:o.jsx(qi,{children:s.admissionFee})}):"현장·예약 시 안내"})]}),o.jsxs(xd,{children:[o.jsx(Ld,{children:"유의사항"}),o.jsx(yl,{children:p!=null&&p.body?o.jsx(O1,{children:o.jsx(qi,{children:p.body})}):"등록된 유의사항이 없습니다."})]}),f.length>0&&o.jsxs(xd,{children:[o.jsx(Ld,{children:"시설 정보"}),o.jsx(yl,{children:f.map(L=>I_[L]??L).join(" · ")})]}),o.jsxs(E_,{children:[o.jsx("h3",{children:"위치"}),s.address?o.jsx(P_,{children:s.address}):null,o.jsx(VA,{address:s.address,lat:s.lat,lng:s.lng})]})]})]})})})}const R_=we`
  from { opacity: 0; }
  to { opacity: 1; }
`,z_=we`
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,M_=u.div`
  position: fixed;
  inset: 0;
  z-index: 500;
  background: rgba(0, 0, 0, 0.62);
  display: grid;
  place-items: center;
  padding: 20px;
  animation: ${R_} 0.18s ease both;
`,A_=u.div`
  width: min(100%, 360px);
  border-radius: 14px;
  border: 1px solid #3f3f46;
  background: #18181b;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.45);
  animation: ${z_} 0.22s cubic-bezier(0.22, 1, 0.36, 1) both;
  overflow: hidden;
`,__=u.div`
  padding: 22px 22px 18px;
`,N_=u.h3`
  margin: 0 0 10px;
  font-size: 16px;
  font-weight: 600;
  color: #f4f4f5;
`,D_=u.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.55;
  color: #a1a1aa;
`,O_=u.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 14px 18px 18px;
  border-top: 1px solid #27272a;
  background: #111114;
`;function Or({open:e,title:t,message:n,confirmLabel:r="확인",cancelLabel:i="취소",onConfirm:s,onCancel:l}){const a=m.useCallback(c=>{c.target===c.currentTarget&&l()},[l]);return m.useEffect(()=>{if(!e)return;const c=d=>{d.key==="Escape"&&l()};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[e,l]),e?o.jsx(M_,{role:"presentation",onClick:a,children:o.jsxs(A_,{role:"dialog","aria-modal":"true","aria-labelledby":"admin-confirm-title",children:[o.jsxs(__,{children:[o.jsx(N_,{id:"admin-confirm-title",children:t}),o.jsx(D_,{children:n})]}),o.jsxs(O_,{children:[o.jsx(ge,{$variant:"ghost",type:"button",onClick:l,children:i}),o.jsx(ge,{$variant:"primary",type:"button",onClick:s,children:r})]})]})}):null}const B_=u.div`
  display: inline-block;
  max-width: 100%;
`,F_=u.div`
  width: 252px;
  max-width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #3f3f46;
  background: #09090b;
`,H_=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`,U_=u.div`
  font-size: 13px;
  font-weight: 600;
  color: #f4f4f5;
`,X4=u.button`
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
`,V_=u.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  margin-bottom: 4px;
`,W_=u.span`
  text-align: center;
  font-size: 10px;
  font-weight: 600;
  color: #71717a;
  padding: 2px 0;
`,K_=u.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
`,Y_=u.button`
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
`,G_=u.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-size: 12px;
  color: #a1a1aa;
`,Z_=u.button`
  border: none;
  background: none;
  color: #71717a;
  font-size: 12px;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: #e4e4e7;
  }
`,q_=u.p`
  margin: 6px 0 0;
  font-size: 12px;
  color: #71717a;
  line-height: 1.45;
`,Q_=["일","월","화","수","목","금","토"];function J4(e){const[t,n,r]=e.split("-").map(Number);return new Date(t,n-1,r)}function yd(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}function vd(e,t){return e.localeCompare(t)}function X_(e,t){return`${e}-${String(t+1).padStart(2,"0")}`}function J_({startDate:e,endDate:t,onChange:n,allowClear:r=!0,hint:i}){const s=e?J4(e):new Date(`${js()}T12:00:00+09:00`),[l,a]=m.useState(s.getFullYear()),[c,d]=m.useState(s.getMonth()),[p,f]=m.useState(null),h=js(),g=XL(e,t),w=m.useMemo(()=>{const y=new Date(l,c,1).getDay(),$=new Date(l,c+1,0).getDate(),I=new Date(l,c,0).getDate(),k=[];for(let j=y-1;j>=0;j-=1){const z=I-j,R=new Date(l,c-1,z);k.push({iso:yd(R),day:z,inMonth:!1})}for(let j=1;j<=$;j+=1){const z=new Date(l,c,j);k.push({iso:yd(z),day:j,inMonth:!0})}for(;k.length%7!==0;){const j=k.length-(y+$)+1,z=new Date(l,c+1,j);k.push({iso:yd(z),day:j,inMonth:!1})}return k},[c,l]),v=y=>{const $=new Date(l,c+y,1);a($.getFullYear()),d($.getMonth())},S=(y,$)=>{if(!$||y===$){n({startDate:y,endDate:y});return}vd(y,$)<=0?n({startDate:y,endDate:$}):n({startDate:$,endDate:y})},x=(y,$)=>{if(!$){const I=J4(y);a(I.getFullYear()),d(I.getMonth())}if(!p){f(y),n({startDate:y,endDate:y});return}S(p,y),f(null)},L=y=>{if(!e)return!1;const $=t??e;return vd(e,y)<=0&&vd(y,$)<=0};return o.jsxs(B_,{children:[o.jsxs(F_,{children:[o.jsxs(H_,{children:[o.jsx(X4,{type:"button","aria-label":"이전 달",onClick:()=>v(-1),children:"‹"}),o.jsxs(U_,{children:[l,"년 ",c+1,"월"]}),o.jsx(X4,{type:"button","aria-label":"다음 달",onClick:()=>v(1),children:"›"})]}),o.jsx(V_,{children:Q_.map(y=>o.jsx(W_,{children:y},y))}),o.jsx(K_,{children:w.map(({iso:y,day:$,inMonth:I})=>{const k=t??e,j=e===y,z=k===y&&e!==k,R=L(y);return o.jsx(Y_,{type:"button",$muted:!I,$inRange:R&&!j&&!z,$rangeStart:j,$rangeEnd:z,$today:y===h,onClick:()=>x(y,I),children:$},`${X_(l,c)}-${y}`)})}),o.jsxs(G_,{children:[o.jsx("span",{children:g??"날짜를 선택하세요"}),r&&(e||t)?o.jsx(Z_,{type:"button",onClick:()=>{f(null),n({startDate:void 0,endDate:void 0})},children:"초기화"}):null]})]}),i?o.jsx(q_,{children:i}):null]})}function C5(e){try{return new Intl.DateTimeFormat("ko-KR",{timeZone:"Asia/Seoul",dateStyle:"short",timeStyle:"short"}).format(new Date(e))}catch{return""}}function k0({restorable:e,onRestore:t,onDismiss:n}){var i;if(!e)return null;const r=((i=e.label)==null?void 0:i.trim())||(e.isNew?"새 항목":`번호 ${e.recordKey}`);return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,flexWrap:"wrap",padding:"10px 14px",marginBottom:16,borderRadius:12,border:"1px solid #4c3a86",background:"rgba(124, 92, 191, 0.16)"},children:[o.jsxs("span",{style:{fontSize:13,color:"#e4e4e7"},children:["작성 중이던 임시저장본이 있어요 —"," ",o.jsx("strong",{style:{color:"#fff"},children:r}),o.jsxs("span",{style:{color:"#a1a1aa"},children:[" · ",C5(e.savedAt)]})]}),o.jsxs("div",{style:{display:"flex",gap:8,marginLeft:"auto"},children:[o.jsx(ge,{$variant:"primary",type:"button",onClick:()=>t(e),children:"불러오기"}),o.jsx(ge,{type:"button",onClick:()=>n(!0),children:"삭제"}),o.jsx(ge,{$variant:"ghost",type:"button",onClick:()=>n(!1),children:"닫기"})]})]})}function j0({savedAt:e}){return o.jsx("span",{style:{fontSize:12,color:e?"#a78bfa":"#71717a",whiteSpace:"nowrap"},children:e?`임시저장됨 · ${C5(e)}`:"자동 임시저장"})}const eN="v1",E5=`admin-draft:${eN}:`,P5=(e,t)=>`${E5}${e}:${t}`;function tN(e){try{localStorage.setItem(P5(e.scope,e.recordKey),JSON.stringify(e))}catch{}}function Cs(e,t){try{localStorage.removeItem(P5(e,t))}catch{}}function nN(e){const t=`${E5}${e}:`,n=[];try{for(let r=0;r<localStorage.length;r+=1){const i=localStorage.key(r);if(!i||!i.startsWith(t))continue;const s=localStorage.getItem(i);if(s)try{n.push(JSON.parse(s))}catch{}}}catch{}return n.sort((r,i)=>i.savedAt-r.savedAt)}function S0({scope:e,recordKey:t,isNew:n,draft:r,label:i}){const s=m.useRef(null),[l,a]=m.useState(null),[c,d]=m.useState(null);m.useEffect(()=>{const[w]=nN(e);d(w??null)},[e]);const p=m.useMemo(()=>r==null?null:JSON.stringify(r),[r]);m.useEffect(()=>{if(t==null||r==null||p==null||s.current==null||p===s.current)return;const w=Date.now();tN({scope:e,recordKey:t,isNew:n,label:i??"",savedAt:w,data:r}),a(w)},[e,t,n,i,r,p]);const f=m.useCallback(w=>{s.current=w==null?null:JSON.stringify(w),a(null)},[]),h=m.useCallback(()=>{t!=null&&Cs(e,t),a(null),d(w=>w&&w.recordKey===t?null:w)},[e,t]),g=m.useCallback(w=>{d(v=>(w&&v&&Cs(v.scope,v.recordKey),null))},[]);return{savedAt:l,restorable:c,markBaseline:f,clearCurrent:h,dismissRestorable:g}}const rN="유의사항";function iN(e){var t;return((t=e==null?void 0:e.find(n=>n.title.includes("유의사항")))==null?void 0:t.body)??""}function oN(e,t){const n=[...e??[]],r=n.findIndex(s=>s.title.includes("유의사항")),i={title:rN,body:t};return r>=0?n[r]=i:n.push(i),n}function sN(e){return(e??[]).join(", ")}function lN(e){return e.split(/[,，]/).map(t=>t.trim()).filter(Boolean)}function To(e){var r;const t=e.photos??[],n=((r=e.thumbnailUrl)==null?void 0:r.trim())||t[0]||"";return ic({...e,photos:t,thumbnailUrl:n})}function aN(){const[e,t]=m.useState([]),[n,r]=m.useState(null),[i,s]=m.useState(!1),[l,a]=m.useState(null),[c,d]=m.useState("basic"),[p,f]=m.useState(null),[h,g]=m.useState(!1),[w,v]=m.useState(!1),[S,x]=m.useState(!1),[L,y]=m.useState(null),$=m.useRef(null),I=l?i?"new":n:null,{savedAt:k,restorable:j,markBaseline:z,clearCurrent:R,dismissRestorable:T}=S0({scope:"places",recordKey:I,isNew:i,draft:l,label:l==null?void 0:l.name}),P=m.useCallback(async()=>{f(null);try{const _=await oM();t(_)}catch(_){f(_ instanceof Error?_.message:"목록 로드 실패")}},[]);m.useEffect(()=>{P()},[P]);const E=m.useMemo(()=>e.find(_=>_.id===n)??null,[e,n]),A=m.useMemo(()=>L?e.find(_=>_.id===L)??null:null,[e,L]);m.useEffect(()=>{if(E&&!i){if($.current){const Z=$.current;$.current=null,a(Z),z(Z);return}const _=To(structuredClone(E.data));a(_),z(_)}},[E,i,z]);const N=()=>{const _=LM(_E());r(null),s(!0),a(_),z(_),d("basic")},F=_=>{const Z=To(_.data);if(T(!1),d("basic"),_.isNew){r(null),s(!0),a(Z),z(Z);return}s(!1),n===_.recordKey?(a(Z),z(Z)):($.current=Z,r(_.recordKey))},G=()=>{if(l!==null){v(!0);return}N()},q=async()=>{if(l){g(!0),f(null);try{const _=To(l),Z=await lM(i?null:n,_.regionId,_);R(),await P(),r(Z.id),s(!1);const V=To(Z.data);a(V),z(V),d("basic")}catch(_){f(_ instanceof Error?_.message:"저장 실패")}finally{g(!1)}}},M=async()=>{if(!L)return;const _=L;y(null),f(null);try{await aM(_),Cs("places",_),n===_&&(r(null),a(null),s(!1),z(null)),await P()}catch(Z){f(Z instanceof Error?Z.message:"삭제 실패")}},O=(_,Z)=>{if(!l)return;const V=[...l.programs??[]],ee={...V[_],...Z};V[_]={...ee,status:b1(ee)},a({...l,programs:V})},C=_=>{if(!l)return;const Z=[...l.programs??[]],V=_==="event"?JL():{},ee={id:yM(Z),kind:_,title:_==="event"?"새 행사":"새 프로그램",status:"ongoing",imageUrl:"",imageUrls:[],bodyFromVenue:"",reviews:[],hidden:!1,...V};Z.push({...ee,status:b1(ee)}),a({...l,programs:Z}),d("programs")},Q=_=>{if(!l)return;const Z=(l.programs??[]).filter((V,ee)=>ee!==_);a({...l,programs:Z})},X=_=>{l&&a({...l,photos:_,thumbnailUrl:_[0]??l.thumbnailUrl})},b=m.useMemo(()=>l?To(l):null,[l]),H={basic:"기본",programs:"행사·프로그램"};return o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(260px, 1fr) minmax(340px, 1.15fr) max-content",gap:16,alignItems:"start"},children:[o.jsxs(xn,{children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:12},children:[o.jsx("h2",{style:{margin:0,fontSize:18},children:"명상지·센터"}),o.jsx(ge,{$variant:"primary",type:"button",onClick:G,children:"+ 등록"})]}),p&&o.jsx(Zr,{children:p}),o.jsxs(w0,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"이름"}),o.jsx("th",{children:"지역"}),o.jsx("th",{children:"구분"}),o.jsx("th",{children:"행사·프로그램"}),o.jsx("th",{})]})}),o.jsx("tbody",{children:e.map(_=>o.jsxs("tr",{children:[o.jsxs("td",{children:[o.jsx("button",{type:"button",style:{background:"none",border:"none",color:_.data.hidden?"#a1a1aa":"#fff",cursor:"pointer",padding:0},onClick:()=>{r(_.id),s(!1)},children:_.name||_.id}),_.data.hidden&&o.jsx("span",{style:{marginLeft:6,fontSize:11,padding:"1px 6px",borderRadius:999,background:"#3f1d1d",color:"#fca5a5"},children:"숨김"})]}),o.jsx("td",{children:lo(_.regionId)}),o.jsx("td",{children:_.data.venueKind??"명상지"}),o.jsx("td",{children:(_.data.programs??[]).length}),o.jsx("td",{children:o.jsxs("div",{style:{display:"flex",gap:6,justifyContent:"flex-end",flexWrap:"wrap"},children:[o.jsx(ge,{type:"button",onClick:()=>{r(_.id),s(!1),d("basic")},children:"수정"}),o.jsx(ge,{type:"button",onClick:()=>{r(_.id),s(!1),d("programs")},children:"행사·프로그램"}),o.jsx(ge,{$variant:"danger",type:"button",onClick:()=>y(_.id),children:"삭제"})]})})]},_.id))})]})]}),o.jsxs(xn,{children:[o.jsx(k0,{restorable:j,onRestore:F,onDismiss:T}),l?o.jsxs(o.Fragment,{children:[!i&&n?o.jsxs("p",{style:{margin:"0 0 12px",color:"#71717a",fontSize:13},children:["번호: ",n]}):o.jsx("p",{style:{margin:"0 0 12px",color:"#71717a",fontSize:13},children:"저장 시 번호가 자동 부여됩니다."}),o.jsxs("div",{style:{display:"flex",gap:8,marginBottom:12,flexWrap:"wrap"},children:[["basic","programs"].map(_=>o.jsx(ge,{$variant:c===_?"primary":"ghost",type:"button",onClick:()=>d(_),children:H[_]},_)),o.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:10},children:[o.jsx(j0,{savedAt:k}),o.jsx(ge,{$variant:"primary",type:"button",onClick:()=>x(!0),disabled:h,children:h?"저장 중…":"저장"})]})]}),c==="basic"&&o.jsxs(o.Fragment,{children:[o.jsxs(ce,{children:[o.jsx(ae,{children:"공개 노출"}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[o.jsx(ge,{type:"button",$variant:l.hidden?"ghost":"primary",onClick:()=>a({...l,hidden:!1}),children:"노출"}),o.jsx(ge,{type:"button",$variant:l.hidden?"danger":"ghost",onClick:()=>a({...l,hidden:!0}),children:"숨김"})]}),o.jsx("p",{style:{margin:"6px 0 0",fontSize:12,color:"#71717a"},children:"숨김으로 두면 공개 지도·목록에 표시되지 않습니다. (관리자에게만 보임)"})]}),o.jsx(U4,{photos:l.photos??[],onChange:X,maxPhotos:10}),o.jsx(fA,{value:l.regionId,onChange:_=>a({...l,regionId:_})}),o.jsxs(ce,{children:[o.jsx(ae,{children:"구분"}),o.jsxs("select",{value:l.venueKind??"명상지",onChange:_=>a({...l,venueKind:_.target.value}),style:{width:"100%",padding:8,borderRadius:8,background:"#09090b",color:"#fff",border:"1px solid #3f3f46"},children:[o.jsx("option",{value:"명상지",children:"명상지"}),o.jsx("option",{value:"명상센터",children:"명상센터"})]})]}),o.jsxs(ce,{children:[o.jsx(ae,{children:"이름"}),o.jsx(nt,{value:l.name,onChange:_=>a({...l,name:_.target.value})})]}),o.jsx(Vl,{label:"한 줄 소개 (마크다운)",value:l.shortDescription,onChange:_=>a({...l,shortDescription:_}),placeholder:"명상지를 한 줄로 소개해 주세요",minHeight:72}),o.jsx(TA,{value:l.address,lat:l.lat,lng:l.lng,onChange:_=>a({...l,address:_}),onCoordsChange:(_,Z)=>a(V=>V&&{...V,lat:_,lng:Z})},i?"new":n??"edit"),o.jsx(Vl,{label:"입장료·이용 요금 (마크다운)",value:l.admissionFee??"",onChange:_=>a({...l,admissionFee:_}),placeholder:"예: 무료 / 성인 5,000원 / 프로그램별 상이",minHeight:88}),o.jsx(Vl,{label:"유의사항 (마크다운)",value:iN(l.detailSections),onChange:_=>a({...l,detailSections:oN(l.detailSections,_)}),placeholder:`- 조용히 이용해 주세요
- 사전 예약 필수`,minHeight:100}),o.jsxs(ce,{children:[o.jsx(ae,{children:"시설 정보"}),o.jsx(nt,{value:sN(l.facilities),onChange:_=>a({...l,facilities:lN(_.target.value)}),placeholder:"Wi-Fi, 주차, 다과·차 (쉼표로 구분)"}),o.jsx("p",{style:{margin:"6px 0 0",fontSize:12,color:"#71717a"},children:"원하는 시설명을 쉼표로 구분해 직접 입력하세요."})]})]}),c==="programs"&&o.jsxs(o.Fragment,{children:[o.jsx("p",{style:{margin:"0 0 12px",color:"#a1a1aa",fontSize:13},children:"행사·프로그램은 이 장소에만 속합니다. 다른 명상지·센터와 공유되지 않습니다."}),o.jsxs("div",{style:{display:"flex",gap:8,marginBottom:12},children:[o.jsx(ge,{$variant:"ghost",type:"button",onClick:()=>C("event"),children:"+ 행사"}),o.jsx(ge,{$variant:"ghost",type:"button",onClick:()=>C("program"),children:"+ 프로그램"})]}),(l.programs??[]).map((_,Z)=>o.jsxs(xn,{style:{marginBottom:12,background:"#111114"},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8,gap:8},children:[o.jsxs("strong",{style:{fontSize:14},children:[_.kind==="event"?"행사":"프로그램"," · ",_.title||"(제목 없음)"]}),o.jsx("span",{style:{fontSize:12,padding:"2px 8px",borderRadius:999,background:_.status==="past"?"#27272a":"rgba(124, 58, 237, 0.25)",color:_.status==="past"?"#a1a1aa":"#e9d5ff",flexShrink:0},children:QL(_)}),o.jsx(ge,{type:"button",$variant:_.hidden?"danger":"ghost",onClick:()=>O(Z,{hidden:!_.hidden}),style:{marginLeft:"auto"},children:_.hidden?"숨김":"노출"}),o.jsx(ge,{$variant:"danger",type:"button",onClick:()=>Q(Z),children:"삭제"})]}),o.jsxs(ce,{children:[o.jsx(ae,{children:"구분"}),o.jsxs("select",{value:_.kind??"program",onChange:V=>O(Z,{kind:V.target.value}),style:{width:"100%",padding:8,borderRadius:8,background:"#09090b",color:"#fff",border:"1px solid #3f3f46"},children:[o.jsx("option",{value:"event",children:"행사"}),o.jsx("option",{value:"program",children:"프로그램"})]})]}),o.jsxs(ce,{children:[o.jsx(ae,{children:"제목"}),o.jsx(nt,{value:_.title,onChange:V=>O(Z,{title:V.target.value})})]}),o.jsxs(ce,{children:[o.jsx(ae,{children:_.kind==="event"?"행사 기간":"기간 (선택)"}),o.jsx(J_,{startDate:_.startDate,endDate:_.endDate,onChange:V=>O(Z,V),allowClear:_.kind!=="event",hint:_.kind==="event"?"시작일 → 종료일 순으로 두 번 클릭하세요. 종료일이 지나면 자동으로 완료됩니다.":"기간을 넣으면 종료일 이후 자동으로 완료 처리됩니다."})]}),o.jsx(U4,{label:"사진",photos:b5(_.imageUrl,_.imageUrls),onChange:V=>O(Z,rA(V)),maxPhotos:10,hint:"첫 사진이 대표입니다."}),o.jsxs(ce,{children:[o.jsx(ae,{children:"소개 (마크다운)"}),o.jsx(On,{style:{minHeight:120},value:_.bodyFromVenue,onChange:V=>O(Z,{bodyFromVenue:V.target.value})})]})]},_.id)),(l.programs??[]).length===0?o.jsx("p",{style:{color:"#71717a",fontSize:13},children:"등록된 행사·프로그램이 없습니다."}):null]})]}):o.jsx("p",{style:{color:"#a1a1aa"},children:"왼쪽에서 항목을 선택하거나 새로 등록하세요."})]}),o.jsx(T_,{place:b}),o.jsx(Or,{open:w,title:"새로 등록",message:"이전에 작성 중인 내용이 사라집니다. 새로 등록하시겠습니까?",cancelLabel:"계속 작성",confirmLabel:"새로 등록",onCancel:()=>v(!1),onConfirm:()=>{v(!1),N()}}),o.jsx(Or,{open:S,title:"저장",message:i?"등록하시겠습니까?":"저장하시겠습니까?",cancelLabel:"취소",confirmLabel:"저장",onCancel:()=>x(!1),onConfirm:()=>{x(!1),q()}}),o.jsx(Or,{open:L!==null,title:"삭제",message:A?`「${A.name||A.id}」을(를) 삭제할까요? 삭제 후에는 되돌릴 수 없습니다.`:"삭제할까요? 삭제 후에는 되돌릴 수 없습니다.",cancelLabel:"취소",confirmLabel:"삭제",onCancel:()=>y(null),onConfirm:()=>void M()})]})}const eg=u.div`
  border: 6px solid #3f3f46;
  border-radius: 24px;
  overflow: hidden;
  width: 360px;
  max-height: min(76vh, 820px);
  overflow-y: auto;
  background: ${({theme:e})=>e.colors.white};
`,cN=u.div`
  margin: 0 auto;
  padding: 0 0 24px;
  color: ${({theme:e})=>e.colors.text900};
`,uN=u.div`
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
`,dN=u.div`
  padding: 8px 20px 20px;
  text-align: center;
`,pN=u.img`
  width: 112px;
  height: 112px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${({theme:e})=>e.colors.primary200};
`,fN=u.div`
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
`,hN=u.h2`
  margin: 16px 0 8px;
  font-size: 1.6rem;
  font-weight: 700;
`,tg=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
`,ng=u.span`
  font-size: 0.85rem;
  padding: 4px 10px;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary50};
  color: ${({theme:e})=>e.colors.primary700};
`,$r=u.section`
  padding: 0 20px 24px;
`,Cr=u.h3`
  margin: 0 0 10px;
  font-size: 1.15rem;
  font-weight: 700;
`,Ro=u.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.65;
  color: ${({theme:e})=>e.colors.text700};
`,rg=u.ul`
  margin: 0;
  padding-left: 1.2em;
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.6;

  li {
    margin-bottom: 6px;
  }
`,ig=u.div`
  margin-bottom: 14px;
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  border-radius: ${({theme:e})=>e.radii.lg};
  overflow: hidden;
  background: ${({theme:e})=>e.colors.white};
`,og=u.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  display: block;
`,sg=u.div`
  padding: 14px 16px;
`,lg=u.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 6px;
  margin-bottom: 8px;
  background: ${({theme:e,$past:t})=>t?e.colors.bg100:e.colors.primary100};
  color: ${({theme:e,$past:t})=>t?e.colors.text700:e.colors.primary700};
`,ag=u.span`
  display: block;
  margin: 0 0 6px;
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
`,cg=u.span`
  display: block;
  font-size: 1rem;
  line-height: 1.65;
  color: ${({theme:e})=>e.colors.text700};
`,gN=u.p`
  margin: 0;
  padding: 24px 0;
  text-align: center;
  color: #52525b;
  font-size: 13px;
`;function mN({expert:e}){if(!e)return o.jsx(za,{children:o.jsx(eg,{children:o.jsx(gN,{children:"전문가를 선택하거나 새로 입력하면 실제 화면처럼 미리보기가 표시됩니다."})})});const t=(e.programs??[]).filter(i=>i.status==="ongoing"),n=(e.programs??[]).filter(i=>i.status==="past"),r=[...e.degrees??[],...e.certificates??[]];return o.jsx(za,{children:o.jsx(eg,{children:o.jsxs(cN,{children:[o.jsx(uN,{children:"‹ 명상 전문가"}),o.jsxs(dN,{children:[e.avatarUrl?o.jsx(pN,{src:e.avatarUrl,alt:""}):o.jsx(fN,{children:"사진"}),o.jsx(hN,{children:e.name||"활동명"}),o.jsx(tg,{children:(e.specialties??[]).map(i=>o.jsx(ng,{children:i},i))})]}),o.jsxs($r,{children:[o.jsx(Cr,{children:"자기소개"}),o.jsx(Ro,{as:"div",children:o.jsx(so,{markdown:e.intro,fallback:o.jsx("span",{style:{color:"#9ca3af"},children:"소개를 입력하세요."})})})]}),o.jsxs($r,{children:[o.jsx(Cr,{children:"학위·이수"}),o.jsx(rg,{children:r.map(i=>o.jsx("li",{children:i},i))})]}),o.jsxs($r,{children:[o.jsx(Cr,{children:"경력"}),o.jsx(rg,{children:(e.careers??[]).map(i=>o.jsx("li",{children:i},i))})]}),o.jsxs($r,{children:[o.jsx(Cr,{children:"클래스·분야"}),o.jsx(tg,{style:{justifyContent:"flex-start"},children:(e.classTypes??[]).map(i=>o.jsx(ng,{children:i},i))})]}),o.jsxs($r,{children:[o.jsx(Cr,{children:"센터·활동 지역"}),e.hasCenter?o.jsxs(o.Fragment,{children:[e.centerSummary&&o.jsx(Ro,{style:{marginBottom:8},children:e.centerSummary}),e.centerAddress&&o.jsx(Ro,{children:e.centerAddress})]}):o.jsxs(Ro,{children:["주 활동 지역:"," ",(e.regionIds??[]).map(lo).filter(Boolean).join(", ")||"—"]})]}),o.jsxs($r,{children:[o.jsx(Cr,{children:"진행 중인 클래스"}),t.length===0&&o.jsx(Ro,{children:"현재 모집 중인 공개 일정이 없어요."}),t.map(i=>o.jsxs(ig,{children:[i.imageUrl&&o.jsx(og,{src:i.imageUrl,alt:""}),o.jsxs(sg,{children:[o.jsx(lg,{children:"진행 중"}),o.jsx(ag,{children:i.title}),o.jsx(cg,{children:i.description})]})]},i.id))]}),n.length>0&&o.jsxs($r,{children:[o.jsx(Cr,{children:"이전 프로그램"}),n.map(i=>o.jsxs(ig,{children:[i.imageUrl&&o.jsx(og,{src:i.imageUrl,alt:""}),o.jsxs(sg,{children:[o.jsx(lg,{$past:!0,children:"종료"}),o.jsx(ag,{children:i.title}),o.jsx(cg,{children:i.description})]})]},i.id))]})]})})})}const xN=/^[A-Za-z0-9._-]{4,64}$/,LN=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,yN=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,vN=["마음챙김","아트명상","숲 명상","호흡명상","걷기명상","소리명상"],vl=e=>e.split(`
`).map(t=>t.trim()).filter(Boolean),zo=()=>({loginId:"",email:"",password:""}),wl=e=>({padding:"6px 12px",borderRadius:999,fontSize:13,cursor:"pointer",border:`1px solid ${e?"#7c5cbf":"#3f3f46"}`,background:e?"rgba(124, 92, 191, 0.28)":"transparent",color:e?"#fff":"#a1a1aa",transition:"all 0.12s ease"}),bl={minHeight:84,fontFamily:"inherit",fontSize:14};function wN(){const[e,t]=m.useState([]),[n,r]=m.useState(null),[i,s]=m.useState(!1),[l,a]=m.useState(null),[c,d]=m.useState(zo()),[p,f]=m.useState("idle"),[h,g]=m.useState(null),[w,v]=m.useState(!1),[S,x]=m.useState(null),L=l?i?"new":n:null,{savedAt:y,restorable:$,markBaseline:I,clearCurrent:k,dismissRestorable:j}=S0({scope:"experts",recordKey:L,isNew:i,draft:l,label:l==null?void 0:l.name}),z=m.useCallback(async()=>{try{t(await cM())}catch(b){g(b instanceof Error?b.message:"로드 실패")}},[]);m.useEffect(()=>{z()},[z]);const R=b=>{r(b.id),s(!1);const H={...Po(),...structuredClone(b.data)};a(H),I(H),d(zo()),f("idle")},T=()=>{r(null),s(!0);const b=Po();a(b),I(b),d(zo()),f("idle")},P=b=>{const H={...Po(),...b.data};j(!1),d(zo()),f("idle"),b.isNew?(r(null),s(!0)):(r(b.recordKey),s(!1)),a(H),I(H)},E=b=>a(H=>H&&{...H,...b}),A=(b,H)=>a(_=>{if(!_)return _;const Z=_[b];return{..._,[b]:Z.includes(H)?Z.filter(V=>V!==H):[...Z,H]}}),N=xN.test(c.loginId),F=LN.test(c.password),G=yN.test(c.email.trim()),q=async()=>{if(!N){Ke.error("아이디는 영문·숫자와 . _ - 만, 4~64자로 입력하세요.");return}f("checking");try{const b=await dM(c.loginId.trim());f(b?"available":"taken"),b||Ke.error("이미 사용 중인 아이디입니다.")}catch(b){f("idle"),Ke.error(b instanceof Error?b.message:"중복 확인 실패")}},M=b=>{d(H=>({...H,loginId:b})),f("idle")},O=()=>{var b;if(i){if(p!=="available")return Ke.error("아이디 중복확인을 해주세요.");if(!G)return Ke.error("이메일 형식을 확인하세요.");if(!F)return Ke.error("비밀번호는 8자 이상이며 영문·숫자·특수문자를 모두 포함해야 합니다.")}if(!((b=l==null?void 0:l.name)!=null&&b.trim()))return Ke.error("활동명을 입력하세요.");v(!0)},C=async()=>{if(l){g(null);try{if(i){const b=await pM({loginId:c.loginId.trim(),email:c.email.trim(),password:c.password,data:l});k(),await z(),r(b.id),s(!1);const H={...Po(),...b.data};a(H),I(H),d(zo()),f("idle"),Ke.success("전문가 계정이 생성되었습니다.")}else{const b=await uM(n,l);k(),await z(),r(b.id);const H={...Po(),...b.data};a(H),I(H),Ke.success("저장되었습니다.")}}catch(b){Ke.error(b instanceof Error?b.message:"저장 실패")}}},Q=async()=>{if(!S)return;const b=S;x(null);try{await fM(b),Cs("experts",b),n===b&&(r(null),s(!1),a(null),I(null)),await z()}catch(H){Ke.error(H instanceof Error?H.message:"삭제 실패")}},X=S?e.find(b=>b.id===S):null;return o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(200px, 0.7fr) minmax(360px, 1.3fr) max-content",gap:16,alignItems:"start"},children:[o.jsxs(xn,{children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:12},children:[o.jsx("h2",{style:{margin:0},children:"전문가"}),o.jsx(ge,{$variant:"primary",type:"button",onClick:T,children:"+ 등록"})]}),h&&o.jsx(Zr,{children:h}),o.jsxs(w0,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"이름"}),o.jsx("th",{})]})}),o.jsx("tbody",{children:e.map(b=>o.jsxs("tr",{children:[o.jsxs("td",{children:[o.jsx("button",{type:"button",style:{background:"none",border:"none",color:b.data.hidden?"#a1a1aa":"#fff",cursor:"pointer"},onClick:()=>R(b),children:b.name||`전문가 ${b.id}`}),b.data.hidden&&o.jsx("span",{style:{marginLeft:6,fontSize:11,padding:"1px 6px",borderRadius:999,background:"#3f1d1d",color:"#fca5a5"},children:"숨김"})]}),o.jsx("td",{children:o.jsxs("div",{style:{display:"flex",gap:6,justifyContent:"flex-end"},children:[o.jsx(ge,{type:"button",onClick:()=>R(b),children:"수정"}),o.jsx(ge,{$variant:"danger",type:"button",onClick:()=>x(b.id),children:"삭제"})]})})]},b.id))})]})]}),o.jsxs(xn,{children:[o.jsx(k0,{restorable:$,onRestore:P,onDismiss:j}),l?o.jsxs(o.Fragment,{children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[o.jsx("p",{style:{margin:0,color:"#71717a",fontSize:13},children:!i&&n?`번호: ${n}`:"전문가 계정을 새로 만듭니다."}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[o.jsx(j0,{savedAt:y}),o.jsx(ge,{$variant:"primary",type:"button",onClick:O,children:i?"계정 생성":"저장"})]})]}),i&&o.jsxs("div",{style:{border:"1px solid #27272a",borderRadius:12,padding:14,marginBottom:16,background:"#141417"},children:[o.jsx("h3",{style:{margin:"0 0 10px",fontSize:14,color:"#e4e4e7"},children:"로그인 계정"}),o.jsxs(ce,{children:[o.jsx(ae,{children:"아이디"}),o.jsxs("div",{style:{display:"flex",gap:8,alignItems:"stretch"},children:[o.jsx(nt,{value:c.loginId,onChange:b=>M(b.target.value),placeholder:"영문·숫자 . _ - (4~64자)",autoComplete:"off"}),o.jsx(ge,{type:"button",onClick:q,disabled:p==="checking"||!N,style:{whiteSpace:"nowrap"},children:p==="checking"?"확인 중…":"중복확인"})]}),p==="available"&&o.jsx("p",{style:{margin:"6px 0 0",fontSize:12,color:"#34d399"},children:"사용 가능한 아이디입니다."}),p==="taken"&&o.jsx("p",{style:{margin:"6px 0 0",fontSize:12,color:"#f87171"},children:"이미 사용 중인 아이디입니다."})]}),o.jsxs(ce,{children:[o.jsx(ae,{children:"이메일"}),o.jsx(nt,{type:"email",value:c.email,onChange:b=>d(H=>({...H,email:b.target.value})),placeholder:"expert@example.com",autoComplete:"off"})]}),o.jsxs(ce,{children:[o.jsx(ae,{children:"비밀번호"}),o.jsx(nt,{type:"password",value:c.password,onChange:b=>d(H=>({...H,password:b.target.value})),placeholder:"8자 이상 · 영문·숫자·특수문자 포함",autoComplete:"new-password"}),o.jsx("p",{style:{margin:"6px 0 0",fontSize:12,color:c.password?F?"#34d399":"#f87171":"#a1a1aa"},children:"8자 이상, 영문·숫자·특수문자를 모두 포함"})]})]}),o.jsxs(ce,{children:[o.jsx(ae,{children:"공개 노출"}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[o.jsx(ge,{type:"button",$variant:l.hidden?"ghost":"primary",onClick:()=>E({hidden:!1}),children:"노출"}),o.jsx(ge,{type:"button",$variant:l.hidden?"danger":"ghost",onClick:()=>E({hidden:!0}),children:"숨김"})]}),o.jsx("p",{style:{margin:"6px 0 0",fontSize:12,color:"#71717a"},children:"숨김으로 두면 명상전문가 목록·상세에 표시되지 않습니다. (관리자에게만 보임)"})]}),o.jsx(nA,{label:"프로필 사진",value:l.avatarUrl,onChange:b=>E({avatarUrl:b})}),o.jsxs(ce,{children:[o.jsx(ae,{children:"활동명"}),o.jsx(nt,{value:l.name,maxLength:80,onChange:b=>E({name:b.target.value})})]}),o.jsx(Vl,{label:"자기소개 (마크다운)",value:l.intro,onChange:b=>E({intro:b}),placeholder:"명상을 시작하게 된 계기와 수업 철학을 소개해 주세요.",minHeight:120}),o.jsxs(ce,{children:[o.jsx(ae,{children:"전문 분야 (한 줄에 하나)"}),o.jsx(On,{style:bl,value:(l.specialties??[]).join(`
`),onChange:b=>E({specialties:vl(b.target.value)}),placeholder:`마음챙김 명상
스트레스 완화`})]}),o.jsxs(ce,{children:[o.jsx(ae,{children:"학위 (한 줄에 하나)"}),o.jsx(On,{style:bl,value:(l.degrees??[]).join(`
`),onChange:b=>E({degrees:vl(b.target.value)}),placeholder:"○○대학교 상담심리학 석사"})]}),o.jsxs(ce,{children:[o.jsx(ae,{children:"자격증·이수 교육과정 (한 줄에 하나)"}),o.jsx(On,{style:bl,value:(l.certificates??[]).join(`
`),onChange:b=>E({certificates:vl(b.target.value)})})]}),o.jsxs(ce,{children:[o.jsx(ae,{children:"경력 (한 줄에 하나)"}),o.jsx(On,{style:bl,value:(l.careers??[]).join(`
`),onChange:b=>E({careers:vl(b.target.value)})})]}),o.jsxs(ce,{children:[o.jsx(ae,{children:"클래스 종류"}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:vN.map(b=>o.jsx("button",{type:"button",style:wl(l.classTypes.includes(b)),onClick:()=>A("classTypes",b),children:b},b))})]}),o.jsxs(ce,{children:[o.jsxs(ae,{children:["활동 지역 (",l.regionIds.length,"개 선택)"]}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:Gr.map(b=>o.jsx("button",{type:"button",style:wl(l.regionIds.includes(b.id)),onClick:()=>A("regionIds",b.id),children:b.name},b.id))})]}),o.jsxs(ce,{children:[o.jsx(ae,{children:"센터 여부"}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[o.jsx("button",{type:"button",style:wl(!l.hasCenter),onClick:()=>E({hasCenter:!1}),children:"센터 없음"}),o.jsx("button",{type:"button",style:wl(l.hasCenter),onClick:()=>E({hasCenter:!0}),children:"센터 있음"})]})]}),l.hasCenter&&o.jsxs(o.Fragment,{children:[o.jsxs(ce,{children:[o.jsx(ae,{children:"센터명"}),o.jsx(nt,{value:l.centerSummary??"",onChange:b=>E({centerSummary:b.target.value})})]}),o.jsxs(ce,{children:[o.jsx(ae,{children:"센터 위치"}),o.jsx(nt,{value:l.centerAddress??"",onChange:b=>E({centerAddress:b.target.value})})]}),o.jsxs(ce,{children:[o.jsx(ae,{children:"사업자등록번호"}),o.jsx(nt,{inputMode:"numeric",value:l.businessRegistrationNumber??"",onChange:b=>E({businessRegistrationNumber:b.target.value.replace(/[^\d-]/g,"")})})]}),o.jsxs(ce,{children:[o.jsx(ae,{children:"개업일자"}),o.jsx(nt,{type:"date",value:l.businessOpeningDate??"",onChange:b=>E({businessOpeningDate:b.target.value})})]})]})]}):o.jsx("p",{style:{color:"#a1a1aa"},children:"항목을 선택하거나 새로 등록하세요."})]}),o.jsx(mN,{expert:l}),o.jsx(Or,{open:w,title:i?"계정 생성":"저장",message:i?"전문가 계정을 생성하시겠습니까?":"저장하시겠습니까?",cancelLabel:"취소",confirmLabel:i?"생성":"저장",onCancel:()=>v(!1),onConfirm:()=>{v(!1),C()}}),o.jsx(Or,{open:S!==null,title:"삭제",message:X?`「${X.name||X.id}」을(를) 삭제할까요?`:"삭제할까요?",cancelLabel:"취소",confirmLabel:"삭제",onCancel:()=>x(null),onConfirm:()=>void Q()})]})}function bN(){return{category:"공지",title:"",date:new Date().toISOString().slice(0,10),summary:"",body:"",bullets:"",footer:""}}function ug(e){const t=e.details;return{category:String(e.category??"공지"),title:String(e.title??""),date:String(e.date??""),summary:String(e.summary??""),body:((t==null?void 0:t.paragraphs)??[]).join(`

`),bullets:((t==null?void 0:t.bullets)??[]).join(`
`),footer:String((t==null?void 0:t.footer)??"")}}function kN(e){const t=e.body.split(/\n{2,}/).map(i=>i.trim()).filter(Boolean),n=e.bullets.split(`
`).map(i=>i.trim()).filter(Boolean),r={paragraphs:t.length>0?t:[e.summary.trim()||e.title.trim()||"내용"]};return n.length>0&&(r.bullets=n),e.footer.trim()&&(r.footer=e.footer.trim()),{category:e.category.trim()||"공지",title:e.title.trim(),date:e.date.trim(),summary:e.summary.trim(),details:r}}function jN(){const[e,t]=m.useState([]),[n,r]=m.useState(null),[i,s]=m.useState(!1),[l,a]=m.useState(null),[c,d]=m.useState(null),[p,f]=m.useState(!1),[h,g]=m.useState(null),w=l?i?"new":n:null,{savedAt:v,restorable:S,markBaseline:x,clearCurrent:L,dismissRestorable:y}=S0({scope:"notices",recordKey:w,isNew:i,draft:l,label:l==null?void 0:l.title}),$=m.useCallback(async()=>{try{t(await hM())}catch(P){d(P instanceof Error?P.message:"로드 실패")}},[]);m.useEffect(()=>{$()},[$]);const I=()=>{r(null),s(!0);const P=bN();a(P),x(P)},k=P=>{r(P.id),s(!1);const E=ug(P.payload);a(E),x(E)},j=P=>{y(!1),P.isNew?(r(null),s(!0)):(r(P.recordKey),s(!1)),a(P.data),x(P.data)},z=async()=>{if(l){d(null);try{const P=await gM(i?null:n,kN(l));L(),await $(),r(P.id),s(!1);const E=ug(P.payload);a(E),x(E)}catch(P){d(P instanceof Error?P.message:"저장 실패")}}},R=async()=>{if(!h)return;const P=h;g(null);try{await xM(P),Cs("notices",P),n===P&&(r(null),s(!1),a(null),x(null)),await $()}catch(E){d(E instanceof Error?E.message:"삭제 실패")}},T=h?e.find(P=>P.id===h):null;return o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1.2fr",gap:16},children:[o.jsxs(xn,{children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:12},children:[o.jsx("h2",{style:{margin:0},children:"공지"}),o.jsx(ge,{$variant:"primary",type:"button",onClick:I,children:"+ 등록"})]}),c&&o.jsx(Zr,{children:c}),o.jsxs(w0,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"제목"}),o.jsx("th",{})]})}),o.jsx("tbody",{children:e.map(P=>o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("button",{type:"button",style:{background:"none",border:"none",color:"#fff",cursor:"pointer"},onClick:()=>k(P),children:P.title||P.payload.title||""||`공지 ${P.id}`})}),o.jsx("td",{children:o.jsx(ge,{$variant:"danger",type:"button",onClick:()=>g(P.id),children:"삭제"})})]},P.id))})]})]}),o.jsxs(xn,{children:[o.jsx(k0,{restorable:S,onRestore:j,onDismiss:y}),l?o.jsxs(o.Fragment,{children:[!i&&n?o.jsxs("p",{style:{margin:"0 0 12px",color:"#71717a",fontSize:13},children:["번호: ",n]}):o.jsx("p",{style:{margin:"0 0 12px",color:"#71717a",fontSize:13},children:"저장 시 번호가 자동 부여됩니다."}),o.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:10,marginBottom:12},children:[o.jsx(j0,{savedAt:v}),o.jsx(ge,{$variant:"primary",type:"button",onClick:()=>f(!0),children:"저장"})]}),o.jsxs(ce,{children:[o.jsx(ae,{children:"분류"}),o.jsx(nt,{value:l.category,onChange:P=>a({...l,category:P.target.value}),placeholder:"예: 공지, 업데이트"})]}),o.jsxs(ce,{children:[o.jsx(ae,{children:"제목"}),o.jsx(nt,{value:l.title,onChange:P=>a({...l,title:P.target.value})})]}),o.jsxs(ce,{children:[o.jsx(ae,{children:"날짜"}),o.jsx(nt,{type:"date",value:l.date,onChange:P=>a({...l,date:P.target.value})})]}),o.jsxs(ce,{children:[o.jsx(ae,{children:"목록 요약"}),o.jsx(On,{style:{minHeight:72,fontFamily:"inherit",fontSize:14},value:l.summary,onChange:P=>a({...l,summary:P.target.value}),placeholder:"공지 목록에 보이는 한두 줄 요약"})]}),o.jsxs(ce,{children:[o.jsx(ae,{children:"본문"}),o.jsx(On,{style:{minHeight:160,fontFamily:"inherit",fontSize:14},value:l.body,onChange:P=>a({...l,body:P.target.value}),placeholder:"문단마다 빈 줄로 구분"})]}),o.jsxs(ce,{children:[o.jsx(ae,{children:"목록 (선택)"}),o.jsx(On,{style:{minHeight:88,fontFamily:"inherit",fontSize:14},value:l.bullets,onChange:P=>a({...l,bullets:P.target.value}),placeholder:"한 줄에 한 항목"})]}),o.jsxs(ce,{children:[o.jsx(ae,{children:"하단 문구 (선택)"}),o.jsx(nt,{value:l.footer,onChange:P=>a({...l,footer:P.target.value})})]})]}):o.jsx("p",{style:{color:"#a1a1aa"},children:"공지를 선택하거나 새로 등록하세요."})]}),o.jsx(Or,{open:p,title:"저장",message:i?"등록하시겠습니까?":"저장하시겠습니까?",cancelLabel:"취소",confirmLabel:"저장",onCancel:()=>f(!1),onConfirm:()=>{f(!1),z()}}),o.jsx(Or,{open:h!==null,title:"삭제",message:T?`「${T.title||T.payload.title||T.id}」을(를) 삭제할까요?`:"삭제할까요?",cancelLabel:"취소",confirmLabel:"삭제",onCancel:()=>g(null),onConfirm:()=>void R()})]})}const SN=[{to:"/admin",label:"트래픽 현황",end:!0},{to:"/admin/places",label:"명상지·센터"},{to:"/admin/experts",label:"전문가"},{to:"/admin/notices",label:"공지"}];function $N(){const[e,t]=m.useState(!0),n=ft(),r=Ai(i=>i.logout);return o.jsxs(wM,{children:[o.jsxs(bM,{$open:e,children:[o.jsx("div",{style:{padding:"16px",fontWeight:700,fontSize:15},children:"명상맵 Admin"}),o.jsx("nav",{children:SN.map(i=>o.jsx(h3,{to:i.to,end:i.end,style:{textDecoration:"none"},children:({isActive:s})=>o.jsx($M,{as:"span",$active:s,children:i.label})},i.to))})]}),o.jsxs(kM,{children:[o.jsxs(jM,{children:[o.jsx(ge,{$variant:"ghost",type:"button",onClick:()=>t(i=>!i),children:"메뉴"}),o.jsxs("div",{style:{display:"flex",gap:8},children:[o.jsx(ge,{$variant:"ghost",type:"button",onClick:()=>n("/"),children:"앱으로"}),o.jsx(ge,{$variant:"ghost",type:"button",onClick:()=>{r().then(()=>n("/admin/login"))},children:"로그아웃"})]})]}),o.jsx(SM,{children:o.jsx(Jp,{})})]})]})}function CN(){const e=Ai(r=>r.bootstrap),t=Ai(r=>r.ready),n=Ai(r=>r.authenticated);return m.useEffect(()=>{e()},[e]),t?n?o.jsx(Jp,{}):o.jsx(Xp,{to:"/admin/login",replace:!0}):null}const EN=[{path:"/welcome",element:o.jsx(Hw,{})},{path:"/admin/login",element:o.jsx(PM,{})},{path:"/admin",element:o.jsx(CN,{}),children:[{element:o.jsx($N,{}),children:[{index:!0,element:o.jsx(tA,{})},{path:"places",element:o.jsx(aN,{})},{path:"experts",element:o.jsx(wN,{})},{path:"notices",element:o.jsx(jN,{})}]}]},{path:"/",element:o.jsx(Oy,{}),children:[{index:!0,element:o.jsx(Ih,{})},{path:"meditation",element:o.jsx(Ih,{})},{path:"meditation/map",element:o.jsx(sb,{})},{path:"meditation/expert/:expertId/class/:programId",element:o.jsx(rP,{})},{path:"meditation/expert/:expertId",element:o.jsx(ZE,{})},{path:"meditation/region/:regionId/experts",element:o.jsx(mE,{})},{path:"meditation/region/:regionId",element:o.jsx(iE,{})},{path:"meditation/place/:placeId",element:o.jsx($I,{})},{path:"favorites",element:o.jsx(dT,{})},{path:"profile",element:o.jsx(cz,{})},{path:"profile/expert",element:o.jsx(zz,{})},{path:"auth/oauth",element:o.jsx(Az,{})},{path:"notice",element:o.jsx(GI,{})},{path:"inquiry",element:o.jsx(rT,{})},{path:"service-info",element:o.jsx(Yz,{})},{path:"*",element:o.jsx(Jz,{})}]}],PN=()=>Y9(EN),IN=()=>o.jsx(my,{children:o.jsx(PN,{})}),TN=u.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,RN=()=>(m.useEffect(()=>{ut.getState().bootstrapAuth(),en.getState().hydrate().then(()=>mr.getState().pullFromServer())},[]),o.jsxs(TN,{children:[o.jsx(d9,{}),o.jsx(m9,{}),o.jsx(IN,{})]})),zN=wL`
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
`;wd.createRoot(document.getElementById("root")).render(o.jsx(Ge.StrictMode,{children:o.jsxs(LL,{theme:Ze,children:[o.jsx(zN,{}),o.jsx(RN,{})]})}));
