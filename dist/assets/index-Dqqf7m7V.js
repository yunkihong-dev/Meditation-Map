function Jx(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Is=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ga(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var S4={exports:{}},ma={},C4={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ul=Symbol.for("react.element"),e5=Symbol.for("react.portal"),t5=Symbol.for("react.fragment"),n5=Symbol.for("react.strict_mode"),r5=Symbol.for("react.profiler"),i5=Symbol.for("react.provider"),o5=Symbol.for("react.context"),l5=Symbol.for("react.forward_ref"),s5=Symbol.for("react.suspense"),a5=Symbol.for("react.memo"),c5=Symbol.for("react.lazy"),c0=Symbol.iterator;function u5(e){return e===null||typeof e!="object"?null:(e=c0&&e[c0]||e["@@iterator"],typeof e=="function"?e:null)}var $4={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E4=Object.assign,P4={};function Yi(e,t,n){this.props=e,this.context=t,this.refs=P4,this.updater=n||$4}Yi.prototype.isReactComponent={};Yi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function I4(){}I4.prototype=Yi.prototype;function v1(e,t,n){this.props=e,this.context=t,this.refs=P4,this.updater=n||$4}var w1=v1.prototype=new I4;w1.constructor=v1;E4(w1,Yi.prototype);w1.isPureReactComponent=!0;var u0=Array.isArray,T4=Object.prototype.hasOwnProperty,b1={current:null},R4={key:!0,ref:!0,__self:!0,__source:!0};function M4(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)T4.call(t,r)&&!R4.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ul,type:e,key:o,ref:s,props:i,_owner:b1.current}}function d5(e,t){return{$$typeof:ul,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function k1(e){return typeof e=="object"&&e!==null&&e.$$typeof===ul}function p5(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var d0=/\/+/g;function nc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?p5(""+e.key):t.toString(36)}function ls(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ul:case e5:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+nc(s,0):r,u0(i)?(n="",e!=null&&(n=e.replace(d0,"$&/")+"/"),ls(i,t,n,"",function(u){return u})):i!=null&&(k1(i)&&(i=d5(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(d0,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",u0(e))for(var a=0;a<e.length;a++){o=e[a];var c=r+nc(o,a);s+=ls(o,t,n,c,i)}else if(c=u5(e),typeof c=="function")for(e=c.call(e),a=0;!(o=e.next()).done;)o=o.value,c=r+nc(o,a++),s+=ls(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Sl(e,t,n){if(e==null)return e;var r=[],i=0;return ls(e,r,"","",function(o){return t.call(n,o,i++)}),r}function f5(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var bt={current:null},ss={transition:null},h5={ReactCurrentDispatcher:bt,ReactCurrentBatchConfig:ss,ReactCurrentOwner:b1};function z4(){throw Error("act(...) is not supported in production builds of React.")}ce.Children={map:Sl,forEach:function(e,t,n){Sl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Sl(e,function(){t++}),t},toArray:function(e){return Sl(e,function(t){return t})||[]},only:function(e){if(!k1(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ce.Component=Yi;ce.Fragment=t5;ce.Profiler=r5;ce.PureComponent=v1;ce.StrictMode=n5;ce.Suspense=s5;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h5;ce.act=z4;ce.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=E4({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=b1.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)T4.call(t,c)&&!R4.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ul,type:e.type,key:i,ref:o,props:r,_owner:s}};ce.createContext=function(e){return e={$$typeof:o5,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:i5,_context:e},e.Consumer=e};ce.createElement=M4;ce.createFactory=function(e){var t=M4.bind(null,e);return t.type=e,t};ce.createRef=function(){return{current:null}};ce.forwardRef=function(e){return{$$typeof:l5,render:e}};ce.isValidElement=k1;ce.lazy=function(e){return{$$typeof:c5,_payload:{_status:-1,_result:e},_init:f5}};ce.memo=function(e,t){return{$$typeof:a5,type:e,compare:t===void 0?null:t}};ce.startTransition=function(e){var t=ss.transition;ss.transition={};try{e()}finally{ss.transition=t}};ce.unstable_act=z4;ce.useCallback=function(e,t){return bt.current.useCallback(e,t)};ce.useContext=function(e){return bt.current.useContext(e)};ce.useDebugValue=function(){};ce.useDeferredValue=function(e){return bt.current.useDeferredValue(e)};ce.useEffect=function(e,t){return bt.current.useEffect(e,t)};ce.useId=function(){return bt.current.useId()};ce.useImperativeHandle=function(e,t,n){return bt.current.useImperativeHandle(e,t,n)};ce.useInsertionEffect=function(e,t){return bt.current.useInsertionEffect(e,t)};ce.useLayoutEffect=function(e,t){return bt.current.useLayoutEffect(e,t)};ce.useMemo=function(e,t){return bt.current.useMemo(e,t)};ce.useReducer=function(e,t,n){return bt.current.useReducer(e,t,n)};ce.useRef=function(e){return bt.current.useRef(e)};ce.useState=function(e){return bt.current.useState(e)};ce.useSyncExternalStore=function(e,t,n){return bt.current.useSyncExternalStore(e,t,n)};ce.useTransition=function(){return bt.current.useTransition()};ce.version="18.3.1";C4.exports=ce;var y=C4.exports;const We=ga(y),g5=Jx({__proto__:null,default:We},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m5=y,x5=Symbol.for("react.element"),L5=Symbol.for("react.fragment"),y5=Object.prototype.hasOwnProperty,v5=m5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w5={key:!0,ref:!0,__self:!0,__source:!0};function A4(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)y5.call(t,r)&&!w5.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:x5,type:e,key:o,ref:s,props:i,_owner:v5.current}}ma.Fragment=L5;ma.jsx=A4;ma.jsxs=A4;S4.exports=ma;var l=S4.exports,Qu={},_4={exports:{}},Ft={},N4={exports:{}},O4={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,N){var j=z.length;z.push(N);e:for(;0<j;){var Q=j-1>>>1,G=z[Q];if(0<i(G,N))z[Q]=N,z[j]=G,j=Q;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var N=z[0],j=z.pop();if(j!==N){z[0]=j;e:for(var Q=0,G=z.length,E=G>>>1;Q<E;){var q=2*(Q+1)-1,ee=z[q],J=q+1,Y=z[J];if(0>i(ee,j))J<G&&0>i(Y,ee)?(z[Q]=Y,z[J]=j,Q=J):(z[Q]=ee,z[q]=j,Q=q);else if(J<G&&0>i(Y,j))z[Q]=Y,z[J]=j,Q=J;else break e}}return N}function i(z,N){var j=z.sortIndex-N.sortIndex;return j!==0?j:z.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var c=[],u=[],p=1,f=null,h=3,g=!1,b=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(z){for(var N=n(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=z)r(u),N.sortIndex=N.expirationTime,t(c,N);else break;N=n(u)}}function v(z){if(w=!1,L(z),!b)if(n(c)!==null)b=!0,W($);else{var N=n(u);N!==null&&A(v,N.startTime-z)}}function $(z,N){b=!1,w&&(w=!1,m(M),M=-1),g=!0;var j=h;try{for(L(N),f=n(c);f!==null&&(!(f.expirationTime>N)||z&&!I());){var Q=f.callback;if(typeof Q=="function"){f.callback=null,h=f.priorityLevel;var G=Q(f.expirationTime<=N);N=e.unstable_now(),typeof G=="function"?f.callback=G:f===n(c)&&r(c),L(N)}else r(c);f=n(c)}if(f!==null)var E=!0;else{var q=n(u);q!==null&&A(v,q.startTime-N),E=!1}return E}finally{f=null,h=j,g=!1}}var k=!1,S=null,M=-1,T=5,R=-1;function I(){return!(e.unstable_now()-R<T)}function P(){if(S!==null){var z=e.unstable_now();R=z;var N=!0;try{N=S(!0,z)}finally{N?_():(k=!1,S=null)}}else k=!1}var _;if(typeof x=="function")_=function(){x(P)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,H=B.port2;B.port1.onmessage=P,_=function(){H.postMessage(null)}}else _=function(){C(P,0)};function W(z){S=z,k||(k=!0,_())}function A(z,N){M=C(function(){z(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){b||g||(b=!0,W($))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(z){switch(h){case 1:case 2:case 3:var N=3;break;default:N=h}var j=h;h=N;try{return z()}finally{h=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,N){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var j=h;h=z;try{return N()}finally{h=j}},e.unstable_scheduleCallback=function(z,N,j){var Q=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Q+j:Q):j=Q,z){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=j+G,z={id:p++,callback:N,priorityLevel:z,startTime:j,expirationTime:G,sortIndex:-1},j>Q?(z.sortIndex=j,t(u,z),n(c)===null&&z===n(u)&&(w?(m(M),M=-1):w=!0,A(v,j-Q))):(z.sortIndex=G,t(c,z),b||g||(b=!0,W($))),z},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(z){var N=h;return function(){var j=h;h=N;try{return z.apply(this,arguments)}finally{h=j}}}})(O4);N4.exports=O4;var b5=N4.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k5=y,Bt=b5;function U(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var D4=new Set,Fo={};function Kr(e,t){Ri(e,t),Ri(e+"Capture",t)}function Ri(e,t){for(Fo[e]=t,e=0;e<t.length;e++)D4.add(t[e])}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xu=Object.prototype.hasOwnProperty,j5=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p0={},f0={};function S5(e){return Xu.call(f0,e)?!0:Xu.call(p0,e)?!1:j5.test(e)?f0[e]=!0:(p0[e]=!0,!1)}function C5(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $5(e,t,n,r){if(t===null||typeof t>"u"||C5(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function kt(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var st={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){st[e]=new kt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];st[t]=new kt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){st[e]=new kt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){st[e]=new kt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){st[e]=new kt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){st[e]=new kt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){st[e]=new kt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){st[e]=new kt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){st[e]=new kt(e,5,!1,e.toLowerCase(),null,!1,!1)});var j1=/[\-:]([a-z])/g;function S1(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(j1,S1);st[t]=new kt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(j1,S1);st[t]=new kt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(j1,S1);st[t]=new kt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){st[e]=new kt(e,1,!1,e.toLowerCase(),null,!1,!1)});st.xlinkHref=new kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){st[e]=new kt(e,1,!1,e.toLowerCase(),null,!0,!0)});function C1(e,t,n,r){var i=st.hasOwnProperty(t)?st[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($5(t,n,i,r)&&(n=null),r||i===null?S5(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Vn=k5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Cl=Symbol.for("react.element"),si=Symbol.for("react.portal"),ai=Symbol.for("react.fragment"),$1=Symbol.for("react.strict_mode"),Ju=Symbol.for("react.profiler"),B4=Symbol.for("react.provider"),F4=Symbol.for("react.context"),E1=Symbol.for("react.forward_ref"),ed=Symbol.for("react.suspense"),td=Symbol.for("react.suspense_list"),P1=Symbol.for("react.memo"),Qn=Symbol.for("react.lazy"),H4=Symbol.for("react.offscreen"),h0=Symbol.iterator;function no(e){return e===null||typeof e!="object"?null:(e=h0&&e[h0]||e["@@iterator"],typeof e=="function"?e:null)}var Fe=Object.assign,rc;function yo(e){if(rc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);rc=t&&t[1]||""}return`
`+rc+e}var ic=!1;function oc(e,t){if(!e||ic)return"";ic=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=a);break}}}finally{ic=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?yo(e):""}function E5(e){switch(e.tag){case 5:return yo(e.type);case 16:return yo("Lazy");case 13:return yo("Suspense");case 19:return yo("SuspenseList");case 0:case 2:case 15:return e=oc(e.type,!1),e;case 11:return e=oc(e.type.render,!1),e;case 1:return e=oc(e.type,!0),e;default:return""}}function nd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ai:return"Fragment";case si:return"Portal";case Ju:return"Profiler";case $1:return"StrictMode";case ed:return"Suspense";case td:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case F4:return(e.displayName||"Context")+".Consumer";case B4:return(e._context.displayName||"Context")+".Provider";case E1:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P1:return t=e.displayName||null,t!==null?t:nd(e.type)||"Memo";case Qn:t=e._payload,e=e._init;try{return nd(e(t))}catch{}}return null}function P5(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nd(t);case 8:return t===$1?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function hr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function U4(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function I5(e){var t=U4(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $l(e){e._valueTracker||(e._valueTracker=I5(e))}function V4(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=U4(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ts(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function rd(e,t){var n=t.checked;return Fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function g0(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=hr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function W4(e,t){t=t.checked,t!=null&&C1(e,"checked",t,!1)}function id(e,t){W4(e,t);var n=hr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?od(e,t.type,n):t.hasOwnProperty("defaultValue")&&od(e,t.type,hr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function m0(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function od(e,t,n){(t!=="number"||Ts(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var vo=Array.isArray;function bi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+hr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ld(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(U(91));return Fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function x0(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(U(92));if(vo(n)){if(1<n.length)throw Error(U(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:hr(n)}}function K4(e,t){var n=hr(t.value),r=hr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function L0(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Y4(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Y4(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var El,G4=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(El=El||document.createElement("div"),El.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=El.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ho(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},T5=["Webkit","ms","Moz","O"];Object.keys(Co).forEach(function(e){T5.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Co[t]=Co[e]})});function Z4(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Co.hasOwnProperty(e)&&Co[e]?(""+t).trim():t+"px"}function q4(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Z4(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var R5=Fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ad(e,t){if(t){if(R5[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(U(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(U(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(U(61))}if(t.style!=null&&typeof t.style!="object")throw Error(U(62))}}function cd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ud=null;function I1(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dd=null,ki=null,ji=null;function y0(e){if(e=fl(e)){if(typeof dd!="function")throw Error(U(280));var t=e.stateNode;t&&(t=wa(t),dd(e.stateNode,e.type,t))}}function Q4(e){ki?ji?ji.push(e):ji=[e]:ki=e}function X4(){if(ki){var e=ki,t=ji;if(ji=ki=null,y0(e),t)for(e=0;e<t.length;e++)y0(t[e])}}function J4(e,t){return e(t)}function eg(){}var lc=!1;function tg(e,t,n){if(lc)return e(t,n);lc=!0;try{return J4(e,t,n)}finally{lc=!1,(ki!==null||ji!==null)&&(eg(),X4())}}function Uo(e,t){var n=e.stateNode;if(n===null)return null;var r=wa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(U(231,t,typeof n));return n}var pd=!1;if(Dn)try{var ro={};Object.defineProperty(ro,"passive",{get:function(){pd=!0}}),window.addEventListener("test",ro,ro),window.removeEventListener("test",ro,ro)}catch{pd=!1}function M5(e,t,n,r,i,o,s,a,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var $o=!1,Rs=null,Ms=!1,fd=null,z5={onError:function(e){$o=!0,Rs=e}};function A5(e,t,n,r,i,o,s,a,c){$o=!1,Rs=null,M5.apply(z5,arguments)}function _5(e,t,n,r,i,o,s,a,c){if(A5.apply(this,arguments),$o){if($o){var u=Rs;$o=!1,Rs=null}else throw Error(U(198));Ms||(Ms=!0,fd=u)}}function Yr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ng(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v0(e){if(Yr(e)!==e)throw Error(U(188))}function N5(e){var t=e.alternate;if(!t){if(t=Yr(e),t===null)throw Error(U(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return v0(i),e;if(o===r)return v0(i),t;o=o.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?e:t}function rg(e){return e=N5(e),e!==null?ig(e):null}function ig(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ig(e);if(t!==null)return t;e=e.sibling}return null}var og=Bt.unstable_scheduleCallback,w0=Bt.unstable_cancelCallback,O5=Bt.unstable_shouldYield,D5=Bt.unstable_requestPaint,Ve=Bt.unstable_now,B5=Bt.unstable_getCurrentPriorityLevel,T1=Bt.unstable_ImmediatePriority,lg=Bt.unstable_UserBlockingPriority,zs=Bt.unstable_NormalPriority,F5=Bt.unstable_LowPriority,sg=Bt.unstable_IdlePriority,xa=null,Cn=null;function H5(e){if(Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot(xa,e,void 0,(e.current.flags&128)===128)}catch{}}var fn=Math.clz32?Math.clz32:W5,U5=Math.log,V5=Math.LN2;function W5(e){return e>>>=0,e===0?32:31-(U5(e)/V5|0)|0}var Pl=64,Il=4194304;function wo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function As(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=wo(a):(o&=s,o!==0&&(r=wo(o)))}else s=n&~i,s!==0?r=wo(s):o!==0&&(r=wo(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-fn(t),i=1<<n,r|=e[n],t&=~i;return r}function K5(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y5(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-fn(o),a=1<<s,c=i[s];c===-1?(!(a&n)||a&r)&&(i[s]=K5(a,t)):c<=t&&(e.expiredLanes|=a),o&=~a}}function hd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ag(){var e=Pl;return Pl<<=1,!(Pl&4194240)&&(Pl=64),e}function sc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function dl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-fn(t),e[t]=n}function G5(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-fn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function R1(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-fn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ve=0;function cg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ug,M1,dg,pg,fg,gd=!1,Tl=[],ir=null,or=null,lr=null,Vo=new Map,Wo=new Map,Jn=[],Z5="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function b0(e,t){switch(e){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":Vo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wo.delete(t.pointerId)}}function io(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=fl(t),t!==null&&M1(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function q5(e,t,n,r,i){switch(t){case"focusin":return ir=io(ir,e,t,n,r,i),!0;case"dragenter":return or=io(or,e,t,n,r,i),!0;case"mouseover":return lr=io(lr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Vo.set(o,io(Vo.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Wo.set(o,io(Wo.get(o)||null,e,t,n,r,i)),!0}return!1}function hg(e){var t=Pr(e.target);if(t!==null){var n=Yr(t);if(n!==null){if(t=n.tag,t===13){if(t=ng(n),t!==null){e.blockedOn=t,fg(e.priority,function(){dg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function as(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=md(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ud=r,n.target.dispatchEvent(r),ud=null}else return t=fl(n),t!==null&&M1(t),e.blockedOn=n,!1;t.shift()}return!0}function k0(e,t,n){as(e)&&n.delete(t)}function Q5(){gd=!1,ir!==null&&as(ir)&&(ir=null),or!==null&&as(or)&&(or=null),lr!==null&&as(lr)&&(lr=null),Vo.forEach(k0),Wo.forEach(k0)}function oo(e,t){e.blockedOn===t&&(e.blockedOn=null,gd||(gd=!0,Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority,Q5)))}function Ko(e){function t(i){return oo(i,e)}if(0<Tl.length){oo(Tl[0],e);for(var n=1;n<Tl.length;n++){var r=Tl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ir!==null&&oo(ir,e),or!==null&&oo(or,e),lr!==null&&oo(lr,e),Vo.forEach(t),Wo.forEach(t),n=0;n<Jn.length;n++)r=Jn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Jn.length&&(n=Jn[0],n.blockedOn===null);)hg(n),n.blockedOn===null&&Jn.shift()}var Si=Vn.ReactCurrentBatchConfig,_s=!0;function X5(e,t,n,r){var i=ve,o=Si.transition;Si.transition=null;try{ve=1,z1(e,t,n,r)}finally{ve=i,Si.transition=o}}function J5(e,t,n,r){var i=ve,o=Si.transition;Si.transition=null;try{ve=4,z1(e,t,n,r)}finally{ve=i,Si.transition=o}}function z1(e,t,n,r){if(_s){var i=md(e,t,n,r);if(i===null)xc(e,t,r,Ns,n),b0(e,r);else if(q5(i,e,t,n,r))r.stopPropagation();else if(b0(e,r),t&4&&-1<Z5.indexOf(e)){for(;i!==null;){var o=fl(i);if(o!==null&&ug(o),o=md(e,t,n,r),o===null&&xc(e,t,r,Ns,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else xc(e,t,r,null,n)}}var Ns=null;function md(e,t,n,r){if(Ns=null,e=I1(r),e=Pr(e),e!==null)if(t=Yr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ng(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ns=e,null}function gg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(B5()){case T1:return 1;case lg:return 4;case zs:case F5:return 16;case sg:return 536870912;default:return 16}default:return 16}}var tr=null,A1=null,cs=null;function mg(){if(cs)return cs;var e,t=A1,n=t.length,r,i="value"in tr?tr.value:tr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return cs=i.slice(e,1<r?1-r:void 0)}function us(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Rl(){return!0}function j0(){return!1}function Ht(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Rl:j0,this.isPropagationStopped=j0,this}return Fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Rl)},persist:function(){},isPersistent:Rl}),t}var Gi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_1=Ht(Gi),pl=Fe({},Gi,{view:0,detail:0}),e6=Ht(pl),ac,cc,lo,La=Fe({},pl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:N1,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lo&&(lo&&e.type==="mousemove"?(ac=e.screenX-lo.screenX,cc=e.screenY-lo.screenY):cc=ac=0,lo=e),ac)},movementY:function(e){return"movementY"in e?e.movementY:cc}}),S0=Ht(La),t6=Fe({},La,{dataTransfer:0}),n6=Ht(t6),r6=Fe({},pl,{relatedTarget:0}),uc=Ht(r6),i6=Fe({},Gi,{animationName:0,elapsedTime:0,pseudoElement:0}),o6=Ht(i6),l6=Fe({},Gi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),s6=Ht(l6),a6=Fe({},Gi,{data:0}),C0=Ht(a6),c6={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},u6={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},d6={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function p6(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=d6[e])?!!t[e]:!1}function N1(){return p6}var f6=Fe({},pl,{key:function(e){if(e.key){var t=c6[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=us(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?u6[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:N1,charCode:function(e){return e.type==="keypress"?us(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?us(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),h6=Ht(f6),g6=Fe({},La,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$0=Ht(g6),m6=Fe({},pl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:N1}),x6=Ht(m6),L6=Fe({},Gi,{propertyName:0,elapsedTime:0,pseudoElement:0}),y6=Ht(L6),v6=Fe({},La,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),w6=Ht(v6),b6=[9,13,27,32],O1=Dn&&"CompositionEvent"in window,Eo=null;Dn&&"documentMode"in document&&(Eo=document.documentMode);var k6=Dn&&"TextEvent"in window&&!Eo,xg=Dn&&(!O1||Eo&&8<Eo&&11>=Eo),E0=" ",P0=!1;function Lg(e,t){switch(e){case"keyup":return b6.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ci=!1;function j6(e,t){switch(e){case"compositionend":return yg(t);case"keypress":return t.which!==32?null:(P0=!0,E0);case"textInput":return e=t.data,e===E0&&P0?null:e;default:return null}}function S6(e,t){if(ci)return e==="compositionend"||!O1&&Lg(e,t)?(e=mg(),cs=A1=tr=null,ci=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xg&&t.locale!=="ko"?null:t.data;default:return null}}var C6={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function I0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!C6[e.type]:t==="textarea"}function vg(e,t,n,r){Q4(r),t=Os(t,"onChange"),0<t.length&&(n=new _1("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Po=null,Yo=null;function $6(e){Tg(e,0)}function ya(e){var t=pi(e);if(V4(t))return e}function E6(e,t){if(e==="change")return t}var wg=!1;if(Dn){var dc;if(Dn){var pc="oninput"in document;if(!pc){var T0=document.createElement("div");T0.setAttribute("oninput","return;"),pc=typeof T0.oninput=="function"}dc=pc}else dc=!1;wg=dc&&(!document.documentMode||9<document.documentMode)}function R0(){Po&&(Po.detachEvent("onpropertychange",bg),Yo=Po=null)}function bg(e){if(e.propertyName==="value"&&ya(Yo)){var t=[];vg(t,Yo,e,I1(e)),tg($6,t)}}function P6(e,t,n){e==="focusin"?(R0(),Po=t,Yo=n,Po.attachEvent("onpropertychange",bg)):e==="focusout"&&R0()}function I6(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ya(Yo)}function T6(e,t){if(e==="click")return ya(t)}function R6(e,t){if(e==="input"||e==="change")return ya(t)}function M6(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xn=typeof Object.is=="function"?Object.is:M6;function Go(e,t){if(xn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xu.call(t,i)||!xn(e[i],t[i]))return!1}return!0}function M0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function z0(e,t){var n=M0(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=M0(n)}}function kg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?kg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jg(){for(var e=window,t=Ts();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ts(e.document)}return t}function D1(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function z6(e){var t=jg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&kg(n.ownerDocument.documentElement,n)){if(r!==null&&D1(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=z0(n,o);var s=z0(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var A6=Dn&&"documentMode"in document&&11>=document.documentMode,ui=null,xd=null,Io=null,Ld=!1;function A0(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ld||ui==null||ui!==Ts(r)||(r=ui,"selectionStart"in r&&D1(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Io&&Go(Io,r)||(Io=r,r=Os(xd,"onSelect"),0<r.length&&(t=new _1("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ui)))}function Ml(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var di={animationend:Ml("Animation","AnimationEnd"),animationiteration:Ml("Animation","AnimationIteration"),animationstart:Ml("Animation","AnimationStart"),transitionend:Ml("Transition","TransitionEnd")},fc={},Sg={};Dn&&(Sg=document.createElement("div").style,"AnimationEvent"in window||(delete di.animationend.animation,delete di.animationiteration.animation,delete di.animationstart.animation),"TransitionEvent"in window||delete di.transitionend.transition);function va(e){if(fc[e])return fc[e];if(!di[e])return e;var t=di[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Sg)return fc[e]=t[n];return e}var Cg=va("animationend"),$g=va("animationiteration"),Eg=va("animationstart"),Pg=va("transitionend"),Ig=new Map,_0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(e,t){Ig.set(e,t),Kr(t,[e])}for(var hc=0;hc<_0.length;hc++){var gc=_0[hc],_6=gc.toLowerCase(),N6=gc[0].toUpperCase()+gc.slice(1);xr(_6,"on"+N6)}xr(Cg,"onAnimationEnd");xr($g,"onAnimationIteration");xr(Eg,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(Pg,"onTransitionEnd");Ri("onMouseEnter",["mouseout","mouseover"]);Ri("onMouseLeave",["mouseout","mouseover"]);Ri("onPointerEnter",["pointerout","pointerover"]);Ri("onPointerLeave",["pointerout","pointerover"]);Kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),O6=new Set("cancel close invalid load scroll toggle".split(" ").concat(bo));function N0(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_5(r,t,void 0,e),e.currentTarget=null}function Tg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==o&&i.isPropagationStopped())break e;N0(i,a,u),o=c}else for(s=0;s<r.length;s++){if(a=r[s],c=a.instance,u=a.currentTarget,a=a.listener,c!==o&&i.isPropagationStopped())break e;N0(i,a,u),o=c}}}if(Ms)throw e=fd,Ms=!1,fd=null,e}function Ie(e,t){var n=t[kd];n===void 0&&(n=t[kd]=new Set);var r=e+"__bubble";n.has(r)||(Rg(t,e,2,!1),n.add(r))}function mc(e,t,n){var r=0;t&&(r|=4),Rg(n,e,r,t)}var zl="_reactListening"+Math.random().toString(36).slice(2);function Zo(e){if(!e[zl]){e[zl]=!0,D4.forEach(function(n){n!=="selectionchange"&&(O6.has(n)||mc(n,!1,e),mc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zl]||(t[zl]=!0,mc("selectionchange",!1,t))}}function Rg(e,t,n,r){switch(gg(t)){case 1:var i=X5;break;case 4:i=J5;break;default:i=z1}n=i.bind(null,t,n,e),i=void 0,!pd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function xc(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Pr(a),s===null)return;if(c=s.tag,c===5||c===6){r=o=s;continue e}a=a.parentNode}}r=r.return}tg(function(){var u=o,p=I1(n),f=[];e:{var h=Ig.get(e);if(h!==void 0){var g=_1,b=e;switch(e){case"keypress":if(us(n)===0)break e;case"keydown":case"keyup":g=h6;break;case"focusin":b="focus",g=uc;break;case"focusout":b="blur",g=uc;break;case"beforeblur":case"afterblur":g=uc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=S0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=n6;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=x6;break;case Cg:case $g:case Eg:g=o6;break;case Pg:g=y6;break;case"scroll":g=e6;break;case"wheel":g=w6;break;case"copy":case"cut":case"paste":g=s6;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=$0}var w=(t&4)!==0,C=!w&&e==="scroll",m=w?h!==null?h+"Capture":null:h;w=[];for(var x=u,L;x!==null;){L=x;var v=L.stateNode;if(L.tag===5&&v!==null&&(L=v,m!==null&&(v=Uo(x,m),v!=null&&w.push(qo(x,v,L)))),C)break;x=x.return}0<w.length&&(h=new g(h,b,null,n,p),f.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==ud&&(b=n.relatedTarget||n.fromElement)&&(Pr(b)||b[Bn]))break e;if((g||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,g?(b=n.relatedTarget||n.toElement,g=u,b=b?Pr(b):null,b!==null&&(C=Yr(b),b!==C||b.tag!==5&&b.tag!==6)&&(b=null)):(g=null,b=u),g!==b)){if(w=S0,v="onMouseLeave",m="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(w=$0,v="onPointerLeave",m="onPointerEnter",x="pointer"),C=g==null?h:pi(g),L=b==null?h:pi(b),h=new w(v,x+"leave",g,n,p),h.target=C,h.relatedTarget=L,v=null,Pr(p)===u&&(w=new w(m,x+"enter",b,n,p),w.target=L,w.relatedTarget=C,v=w),C=v,g&&b)t:{for(w=g,m=b,x=0,L=w;L;L=Xr(L))x++;for(L=0,v=m;v;v=Xr(v))L++;for(;0<x-L;)w=Xr(w),x--;for(;0<L-x;)m=Xr(m),L--;for(;x--;){if(w===m||m!==null&&w===m.alternate)break t;w=Xr(w),m=Xr(m)}w=null}else w=null;g!==null&&O0(f,h,g,w,!1),b!==null&&C!==null&&O0(f,C,b,w,!0)}}e:{if(h=u?pi(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var $=E6;else if(I0(h))if(wg)$=R6;else{$=I6;var k=P6}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&($=T6);if($&&($=$(e,u))){vg(f,$,n,p);break e}k&&k(e,h,u),e==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&od(h,"number",h.value)}switch(k=u?pi(u):window,e){case"focusin":(I0(k)||k.contentEditable==="true")&&(ui=k,xd=u,Io=null);break;case"focusout":Io=xd=ui=null;break;case"mousedown":Ld=!0;break;case"contextmenu":case"mouseup":case"dragend":Ld=!1,A0(f,n,p);break;case"selectionchange":if(A6)break;case"keydown":case"keyup":A0(f,n,p)}var S;if(O1)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else ci?Lg(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(xg&&n.locale!=="ko"&&(ci||M!=="onCompositionStart"?M==="onCompositionEnd"&&ci&&(S=mg()):(tr=p,A1="value"in tr?tr.value:tr.textContent,ci=!0)),k=Os(u,M),0<k.length&&(M=new C0(M,e,null,n,p),f.push({event:M,listeners:k}),S?M.data=S:(S=yg(n),S!==null&&(M.data=S)))),(S=k6?j6(e,n):S6(e,n))&&(u=Os(u,"onBeforeInput"),0<u.length&&(p=new C0("onBeforeInput","beforeinput",null,n,p),f.push({event:p,listeners:u}),p.data=S))}Tg(f,t)})}function qo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Os(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Uo(e,n),o!=null&&r.unshift(qo(e,o,i)),o=Uo(e,t),o!=null&&r.push(qo(e,o,i))),e=e.return}return r}function Xr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function O0(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&u!==null&&(a=u,i?(c=Uo(n,o),c!=null&&s.unshift(qo(n,c,a))):i||(c=Uo(n,o),c!=null&&s.push(qo(n,c,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var D6=/\r\n?/g,B6=/\u0000|\uFFFD/g;function D0(e){return(typeof e=="string"?e:""+e).replace(D6,`
`).replace(B6,"")}function Al(e,t,n){if(t=D0(t),D0(e)!==t&&n)throw Error(U(425))}function Ds(){}var yd=null,vd=null;function wd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bd=typeof setTimeout=="function"?setTimeout:void 0,F6=typeof clearTimeout=="function"?clearTimeout:void 0,B0=typeof Promise=="function"?Promise:void 0,H6=typeof queueMicrotask=="function"?queueMicrotask:typeof B0<"u"?function(e){return B0.resolve(null).then(e).catch(U6)}:bd;function U6(e){setTimeout(function(){throw e})}function Lc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ko(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ko(t)}function sr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function F0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Zi=Math.random().toString(36).slice(2),jn="__reactFiber$"+Zi,Qo="__reactProps$"+Zi,Bn="__reactContainer$"+Zi,kd="__reactEvents$"+Zi,V6="__reactListeners$"+Zi,W6="__reactHandles$"+Zi;function Pr(e){var t=e[jn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bn]||n[jn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=F0(e);e!==null;){if(n=e[jn])return n;e=F0(e)}return t}e=n,n=e.parentNode}return null}function fl(e){return e=e[jn]||e[Bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(U(33))}function wa(e){return e[Qo]||null}var jd=[],fi=-1;function Lr(e){return{current:e}}function Re(e){0>fi||(e.current=jd[fi],jd[fi]=null,fi--)}function Ce(e,t){fi++,jd[fi]=e.current,e.current=t}var gr={},gt=Lr(gr),Et=Lr(!1),Or=gr;function Mi(e,t){var n=e.type.contextTypes;if(!n)return gr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Pt(e){return e=e.childContextTypes,e!=null}function Bs(){Re(Et),Re(gt)}function H0(e,t,n){if(gt.current!==gr)throw Error(U(168));Ce(gt,t),Ce(Et,n)}function Mg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(U(108,P5(e)||"Unknown",i));return Fe({},n,r)}function Fs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gr,Or=gt.current,Ce(gt,e),Ce(Et,Et.current),!0}function U0(e,t,n){var r=e.stateNode;if(!r)throw Error(U(169));n?(e=Mg(e,t,Or),r.__reactInternalMemoizedMergedChildContext=e,Re(Et),Re(gt),Ce(gt,e)):Re(Et),Ce(Et,n)}var An=null,ba=!1,yc=!1;function zg(e){An===null?An=[e]:An.push(e)}function K6(e){ba=!0,zg(e)}function yr(){if(!yc&&An!==null){yc=!0;var e=0,t=ve;try{var n=An;for(ve=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}An=null,ba=!1}catch(i){throw An!==null&&(An=An.slice(e+1)),og(T1,yr),i}finally{ve=t,yc=!1}}return null}var hi=[],gi=0,Hs=null,Us=0,Yt=[],Gt=0,Dr=null,_n=1,Nn="";function Sr(e,t){hi[gi++]=Us,hi[gi++]=Hs,Hs=e,Us=t}function Ag(e,t,n){Yt[Gt++]=_n,Yt[Gt++]=Nn,Yt[Gt++]=Dr,Dr=e;var r=_n;e=Nn;var i=32-fn(r)-1;r&=~(1<<i),n+=1;var o=32-fn(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,_n=1<<32-fn(t)+i|n<<i|r,Nn=o+e}else _n=1<<o|n<<i|r,Nn=e}function B1(e){e.return!==null&&(Sr(e,1),Ag(e,1,0))}function F1(e){for(;e===Hs;)Hs=hi[--gi],hi[gi]=null,Us=hi[--gi],hi[gi]=null;for(;e===Dr;)Dr=Yt[--Gt],Yt[Gt]=null,Nn=Yt[--Gt],Yt[Gt]=null,_n=Yt[--Gt],Yt[Gt]=null}var Dt=null,Nt=null,ze=!1,pn=null;function _g(e,t){var n=Qt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function V0(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Dt=e,Nt=sr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Dt=e,Nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Dr!==null?{id:_n,overflow:Nn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Qt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Dt=e,Nt=null,!0):!1;default:return!1}}function Sd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Cd(e){if(ze){var t=Nt;if(t){var n=t;if(!V0(e,t)){if(Sd(e))throw Error(U(418));t=sr(n.nextSibling);var r=Dt;t&&V0(e,t)?_g(r,n):(e.flags=e.flags&-4097|2,ze=!1,Dt=e)}}else{if(Sd(e))throw Error(U(418));e.flags=e.flags&-4097|2,ze=!1,Dt=e}}}function W0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Dt=e}function _l(e){if(e!==Dt)return!1;if(!ze)return W0(e),ze=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wd(e.type,e.memoizedProps)),t&&(t=Nt)){if(Sd(e))throw Ng(),Error(U(418));for(;t;)_g(e,t),t=sr(t.nextSibling)}if(W0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(U(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Nt=sr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Nt=null}}else Nt=Dt?sr(e.stateNode.nextSibling):null;return!0}function Ng(){for(var e=Nt;e;)e=sr(e.nextSibling)}function zi(){Nt=Dt=null,ze=!1}function H1(e){pn===null?pn=[e]:pn.push(e)}var Y6=Vn.ReactCurrentBatchConfig;function so(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,e))}return e}function Nl(e,t){throw e=Object.prototype.toString.call(t),Error(U(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function K0(e){var t=e._init;return t(e._payload)}function Og(e){function t(m,x){if(e){var L=m.deletions;L===null?(m.deletions=[x],m.flags|=16):L.push(x)}}function n(m,x){if(!e)return null;for(;x!==null;)t(m,x),x=x.sibling;return null}function r(m,x){for(m=new Map;x!==null;)x.key!==null?m.set(x.key,x):m.set(x.index,x),x=x.sibling;return m}function i(m,x){return m=dr(m,x),m.index=0,m.sibling=null,m}function o(m,x,L){return m.index=L,e?(L=m.alternate,L!==null?(L=L.index,L<x?(m.flags|=2,x):L):(m.flags|=2,x)):(m.flags|=1048576,x)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,x,L,v){return x===null||x.tag!==6?(x=Cc(L,m.mode,v),x.return=m,x):(x=i(x,L),x.return=m,x)}function c(m,x,L,v){var $=L.type;return $===ai?p(m,x,L.props.children,v,L.key):x!==null&&(x.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Qn&&K0($)===x.type)?(v=i(x,L.props),v.ref=so(m,x,L),v.return=m,v):(v=xs(L.type,L.key,L.props,null,m.mode,v),v.ref=so(m,x,L),v.return=m,v)}function u(m,x,L,v){return x===null||x.tag!==4||x.stateNode.containerInfo!==L.containerInfo||x.stateNode.implementation!==L.implementation?(x=$c(L,m.mode,v),x.return=m,x):(x=i(x,L.children||[]),x.return=m,x)}function p(m,x,L,v,$){return x===null||x.tag!==7?(x=Ar(L,m.mode,v,$),x.return=m,x):(x=i(x,L),x.return=m,x)}function f(m,x,L){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Cc(""+x,m.mode,L),x.return=m,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Cl:return L=xs(x.type,x.key,x.props,null,m.mode,L),L.ref=so(m,null,x),L.return=m,L;case si:return x=$c(x,m.mode,L),x.return=m,x;case Qn:var v=x._init;return f(m,v(x._payload),L)}if(vo(x)||no(x))return x=Ar(x,m.mode,L,null),x.return=m,x;Nl(m,x)}return null}function h(m,x,L,v){var $=x!==null?x.key:null;if(typeof L=="string"&&L!==""||typeof L=="number")return $!==null?null:a(m,x,""+L,v);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Cl:return L.key===$?c(m,x,L,v):null;case si:return L.key===$?u(m,x,L,v):null;case Qn:return $=L._init,h(m,x,$(L._payload),v)}if(vo(L)||no(L))return $!==null?null:p(m,x,L,v,null);Nl(m,L)}return null}function g(m,x,L,v,$){if(typeof v=="string"&&v!==""||typeof v=="number")return m=m.get(L)||null,a(x,m,""+v,$);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Cl:return m=m.get(v.key===null?L:v.key)||null,c(x,m,v,$);case si:return m=m.get(v.key===null?L:v.key)||null,u(x,m,v,$);case Qn:var k=v._init;return g(m,x,L,k(v._payload),$)}if(vo(v)||no(v))return m=m.get(L)||null,p(x,m,v,$,null);Nl(x,v)}return null}function b(m,x,L,v){for(var $=null,k=null,S=x,M=x=0,T=null;S!==null&&M<L.length;M++){S.index>M?(T=S,S=null):T=S.sibling;var R=h(m,S,L[M],v);if(R===null){S===null&&(S=T);break}e&&S&&R.alternate===null&&t(m,S),x=o(R,x,M),k===null?$=R:k.sibling=R,k=R,S=T}if(M===L.length)return n(m,S),ze&&Sr(m,M),$;if(S===null){for(;M<L.length;M++)S=f(m,L[M],v),S!==null&&(x=o(S,x,M),k===null?$=S:k.sibling=S,k=S);return ze&&Sr(m,M),$}for(S=r(m,S);M<L.length;M++)T=g(S,m,M,L[M],v),T!==null&&(e&&T.alternate!==null&&S.delete(T.key===null?M:T.key),x=o(T,x,M),k===null?$=T:k.sibling=T,k=T);return e&&S.forEach(function(I){return t(m,I)}),ze&&Sr(m,M),$}function w(m,x,L,v){var $=no(L);if(typeof $!="function")throw Error(U(150));if(L=$.call(L),L==null)throw Error(U(151));for(var k=$=null,S=x,M=x=0,T=null,R=L.next();S!==null&&!R.done;M++,R=L.next()){S.index>M?(T=S,S=null):T=S.sibling;var I=h(m,S,R.value,v);if(I===null){S===null&&(S=T);break}e&&S&&I.alternate===null&&t(m,S),x=o(I,x,M),k===null?$=I:k.sibling=I,k=I,S=T}if(R.done)return n(m,S),ze&&Sr(m,M),$;if(S===null){for(;!R.done;M++,R=L.next())R=f(m,R.value,v),R!==null&&(x=o(R,x,M),k===null?$=R:k.sibling=R,k=R);return ze&&Sr(m,M),$}for(S=r(m,S);!R.done;M++,R=L.next())R=g(S,m,M,R.value,v),R!==null&&(e&&R.alternate!==null&&S.delete(R.key===null?M:R.key),x=o(R,x,M),k===null?$=R:k.sibling=R,k=R);return e&&S.forEach(function(P){return t(m,P)}),ze&&Sr(m,M),$}function C(m,x,L,v){if(typeof L=="object"&&L!==null&&L.type===ai&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case Cl:e:{for(var $=L.key,k=x;k!==null;){if(k.key===$){if($=L.type,$===ai){if(k.tag===7){n(m,k.sibling),x=i(k,L.props.children),x.return=m,m=x;break e}}else if(k.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Qn&&K0($)===k.type){n(m,k.sibling),x=i(k,L.props),x.ref=so(m,k,L),x.return=m,m=x;break e}n(m,k);break}else t(m,k);k=k.sibling}L.type===ai?(x=Ar(L.props.children,m.mode,v,L.key),x.return=m,m=x):(v=xs(L.type,L.key,L.props,null,m.mode,v),v.ref=so(m,x,L),v.return=m,m=v)}return s(m);case si:e:{for(k=L.key;x!==null;){if(x.key===k)if(x.tag===4&&x.stateNode.containerInfo===L.containerInfo&&x.stateNode.implementation===L.implementation){n(m,x.sibling),x=i(x,L.children||[]),x.return=m,m=x;break e}else{n(m,x);break}else t(m,x);x=x.sibling}x=$c(L,m.mode,v),x.return=m,m=x}return s(m);case Qn:return k=L._init,C(m,x,k(L._payload),v)}if(vo(L))return b(m,x,L,v);if(no(L))return w(m,x,L,v);Nl(m,L)}return typeof L=="string"&&L!==""||typeof L=="number"?(L=""+L,x!==null&&x.tag===6?(n(m,x.sibling),x=i(x,L),x.return=m,m=x):(n(m,x),x=Cc(L,m.mode,v),x.return=m,m=x),s(m)):n(m,x)}return C}var Ai=Og(!0),Dg=Og(!1),Vs=Lr(null),Ws=null,mi=null,U1=null;function V1(){U1=mi=Ws=null}function W1(e){var t=Vs.current;Re(Vs),e._currentValue=t}function $d(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ci(e,t){Ws=e,U1=mi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($t=!0),e.firstContext=null)}function tn(e){var t=e._currentValue;if(U1!==e)if(e={context:e,memoizedValue:t,next:null},mi===null){if(Ws===null)throw Error(U(308));mi=e,Ws.dependencies={lanes:0,firstContext:e}}else mi=mi.next=e;return t}var Ir=null;function K1(e){Ir===null?Ir=[e]:Ir.push(e)}function Bg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,K1(t)):(n.next=i.next,i.next=n),t.interleaved=n,Fn(e,r)}function Fn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Xn=!1;function Y1(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function On(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ar(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Fn(e,n)}return i=r.interleaved,i===null?(t.next=t,K1(r)):(t.next=i.next,i.next=t),r.interleaved=t,Fn(e,n)}function ds(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,R1(e,n)}}function Y0(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ks(e,t,n,r){var i=e.updateQueue;Xn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var c=a,u=c.next;c.next=null,s===null?o=u:s.next=u,s=c;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==s&&(a===null?p.firstBaseUpdate=u:a.next=u,p.lastBaseUpdate=c))}if(o!==null){var f=i.baseState;s=0,p=u=c=null,a=o;do{var h=a.lane,g=a.eventTime;if((r&h)===h){p!==null&&(p=p.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var b=e,w=a;switch(h=t,g=n,w.tag){case 1:if(b=w.payload,typeof b=="function"){f=b.call(g,f,h);break e}f=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=w.payload,h=typeof b=="function"?b.call(g,f,h):b,h==null)break e;f=Fe({},f,h);break e;case 2:Xn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(u=p=g,c=f):p=p.next=g,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(p===null&&(c=f),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Fr|=s,e.lanes=s,e.memoizedState=f}}function G0(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var hl={},$n=Lr(hl),Xo=Lr(hl),Jo=Lr(hl);function Tr(e){if(e===hl)throw Error(U(174));return e}function G1(e,t){switch(Ce(Jo,t),Ce(Xo,e),Ce($n,hl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:sd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=sd(t,e)}Re($n),Ce($n,t)}function _i(){Re($n),Re(Xo),Re(Jo)}function Hg(e){Tr(Jo.current);var t=Tr($n.current),n=sd(t,e.type);t!==n&&(Ce(Xo,e),Ce($n,n))}function Z1(e){Xo.current===e&&(Re($n),Re(Xo))}var Ne=Lr(0);function Ys(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vc=[];function q1(){for(var e=0;e<vc.length;e++)vc[e]._workInProgressVersionPrimary=null;vc.length=0}var ps=Vn.ReactCurrentDispatcher,wc=Vn.ReactCurrentBatchConfig,Br=0,Be=null,Xe=null,nt=null,Gs=!1,To=!1,el=0,G6=0;function pt(){throw Error(U(321))}function Q1(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xn(e[n],t[n]))return!1;return!0}function X1(e,t,n,r,i,o){if(Br=o,Be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ps.current=e===null||e.memoizedState===null?X6:J6,e=n(r,i),To){o=0;do{if(To=!1,el=0,25<=o)throw Error(U(301));o+=1,nt=Xe=null,t.updateQueue=null,ps.current=e7,e=n(r,i)}while(To)}if(ps.current=Zs,t=Xe!==null&&Xe.next!==null,Br=0,nt=Xe=Be=null,Gs=!1,t)throw Error(U(300));return e}function J1(){var e=el!==0;return el=0,e}function bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nt===null?Be.memoizedState=nt=e:nt=nt.next=e,nt}function nn(){if(Xe===null){var e=Be.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var t=nt===null?Be.memoizedState:nt.next;if(t!==null)nt=t,Xe=e;else{if(e===null)throw Error(U(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},nt===null?Be.memoizedState=nt=e:nt=nt.next=e}return nt}function tl(e,t){return typeof t=="function"?t(e):t}function bc(e){var t=nn(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=Xe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,c=null,u=o;do{var p=u.lane;if((Br&p)===p)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=f,s=r):c=c.next=f,Be.lanes|=p,Fr|=p}u=u.next}while(u!==null&&u!==o);c===null?s=r:c.next=a,xn(r,t.memoizedState)||($t=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Be.lanes|=o,Fr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function kc(e){var t=nn(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);xn(o,t.memoizedState)||($t=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ug(){}function Vg(e,t){var n=Be,r=nn(),i=t(),o=!xn(r.memoizedState,i);if(o&&(r.memoizedState=i,$t=!0),r=r.queue,ep(Yg.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||nt!==null&&nt.memoizedState.tag&1){if(n.flags|=2048,nl(9,Kg.bind(null,n,r,i,t),void 0,null),it===null)throw Error(U(349));Br&30||Wg(n,t,i)}return i}function Wg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Be.updateQueue,t===null?(t={lastEffect:null,stores:null},Be.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Kg(e,t,n,r){t.value=n,t.getSnapshot=r,Gg(t)&&Zg(e)}function Yg(e,t,n){return n(function(){Gg(t)&&Zg(e)})}function Gg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xn(e,n)}catch{return!0}}function Zg(e){var t=Fn(e,1);t!==null&&hn(t,e,1,-1)}function Z0(e){var t=bn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tl,lastRenderedState:e},t.queue=e,e=e.dispatch=Q6.bind(null,Be,e),[t.memoizedState,e]}function nl(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Be.updateQueue,t===null?(t={lastEffect:null,stores:null},Be.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function qg(){return nn().memoizedState}function fs(e,t,n,r){var i=bn();Be.flags|=e,i.memoizedState=nl(1|t,n,void 0,r===void 0?null:r)}function ka(e,t,n,r){var i=nn();r=r===void 0?null:r;var o=void 0;if(Xe!==null){var s=Xe.memoizedState;if(o=s.destroy,r!==null&&Q1(r,s.deps)){i.memoizedState=nl(t,n,o,r);return}}Be.flags|=e,i.memoizedState=nl(1|t,n,o,r)}function q0(e,t){return fs(8390656,8,e,t)}function ep(e,t){return ka(2048,8,e,t)}function Qg(e,t){return ka(4,2,e,t)}function Xg(e,t){return ka(4,4,e,t)}function Jg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function em(e,t,n){return n=n!=null?n.concat([e]):null,ka(4,4,Jg.bind(null,t,e),n)}function tp(){}function tm(e,t){var n=nn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Q1(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function nm(e,t){var n=nn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Q1(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function rm(e,t,n){return Br&21?(xn(n,t)||(n=ag(),Be.lanes|=n,Fr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$t=!0),e.memoizedState=n)}function Z6(e,t){var n=ve;ve=n!==0&&4>n?n:4,e(!0);var r=wc.transition;wc.transition={};try{e(!1),t()}finally{ve=n,wc.transition=r}}function im(){return nn().memoizedState}function q6(e,t,n){var r=ur(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},om(e))lm(t,n);else if(n=Bg(e,t,n,r),n!==null){var i=vt();hn(n,e,r,i),sm(n,t,r)}}function Q6(e,t,n){var r=ur(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(om(e))lm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,xn(a,s)){var c=t.interleaved;c===null?(i.next=i,K1(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Bg(e,t,i,r),n!==null&&(i=vt(),hn(n,e,r,i),sm(n,t,r))}}function om(e){var t=e.alternate;return e===Be||t!==null&&t===Be}function lm(e,t){To=Gs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,R1(e,n)}}var Zs={readContext:tn,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},X6={readContext:tn,useCallback:function(e,t){return bn().memoizedState=[e,t===void 0?null:t],e},useContext:tn,useEffect:q0,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,fs(4194308,4,Jg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fs(4194308,4,e,t)},useInsertionEffect:function(e,t){return fs(4,2,e,t)},useMemo:function(e,t){var n=bn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=q6.bind(null,Be,e),[r.memoizedState,e]},useRef:function(e){var t=bn();return e={current:e},t.memoizedState=e},useState:Z0,useDebugValue:tp,useDeferredValue:function(e){return bn().memoizedState=e},useTransition:function(){var e=Z0(!1),t=e[0];return e=Z6.bind(null,e[1]),bn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Be,i=bn();if(ze){if(n===void 0)throw Error(U(407));n=n()}else{if(n=t(),it===null)throw Error(U(349));Br&30||Wg(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,q0(Yg.bind(null,r,o,e),[e]),r.flags|=2048,nl(9,Kg.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=bn(),t=it.identifierPrefix;if(ze){var n=Nn,r=_n;n=(r&~(1<<32-fn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=el++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=G6++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},J6={readContext:tn,useCallback:tm,useContext:tn,useEffect:ep,useImperativeHandle:em,useInsertionEffect:Qg,useLayoutEffect:Xg,useMemo:nm,useReducer:bc,useRef:qg,useState:function(){return bc(tl)},useDebugValue:tp,useDeferredValue:function(e){var t=nn();return rm(t,Xe.memoizedState,e)},useTransition:function(){var e=bc(tl)[0],t=nn().memoizedState;return[e,t]},useMutableSource:Ug,useSyncExternalStore:Vg,useId:im,unstable_isNewReconciler:!1},e7={readContext:tn,useCallback:tm,useContext:tn,useEffect:ep,useImperativeHandle:em,useInsertionEffect:Qg,useLayoutEffect:Xg,useMemo:nm,useReducer:kc,useRef:qg,useState:function(){return kc(tl)},useDebugValue:tp,useDeferredValue:function(e){var t=nn();return Xe===null?t.memoizedState=e:rm(t,Xe.memoizedState,e)},useTransition:function(){var e=kc(tl)[0],t=nn().memoizedState;return[e,t]},useMutableSource:Ug,useSyncExternalStore:Vg,useId:im,unstable_isNewReconciler:!1};function cn(e,t){if(e&&e.defaultProps){t=Fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ed(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ja={isMounted:function(e){return(e=e._reactInternals)?Yr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=vt(),i=ur(e),o=On(r,i);o.payload=t,n!=null&&(o.callback=n),t=ar(e,o,i),t!==null&&(hn(t,e,i,r),ds(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=vt(),i=ur(e),o=On(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ar(e,o,i),t!==null&&(hn(t,e,i,r),ds(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=vt(),r=ur(e),i=On(n,r);i.tag=2,t!=null&&(i.callback=t),t=ar(e,i,r),t!==null&&(hn(t,e,r,n),ds(t,e,r))}};function Q0(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Go(n,r)||!Go(i,o):!0}function am(e,t,n){var r=!1,i=gr,o=t.contextType;return typeof o=="object"&&o!==null?o=tn(o):(i=Pt(t)?Or:gt.current,r=t.contextTypes,o=(r=r!=null)?Mi(e,i):gr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ja,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function X0(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ja.enqueueReplaceState(t,t.state,null)}function Pd(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Y1(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=tn(o):(o=Pt(t)?Or:gt.current,i.context=Mi(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ed(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ja.enqueueReplaceState(i,i.state,null),Ks(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ni(e,t){try{var n="",r=t;do n+=E5(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function jc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Id(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var t7=typeof WeakMap=="function"?WeakMap:Map;function cm(e,t,n){n=On(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Qs||(Qs=!0,Bd=r),Id(e,t)},n}function um(e,t,n){n=On(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Id(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Id(e,t),typeof r!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function J0(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new t7;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=g7.bind(null,e,t,n),t.then(e,e))}function ef(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function tf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=On(-1,1),t.tag=2,ar(n,t,1))),n.lanes|=1),e)}var n7=Vn.ReactCurrentOwner,$t=!1;function yt(e,t,n,r){t.child=e===null?Dg(t,null,n,r):Ai(t,e.child,n,r)}function nf(e,t,n,r,i){n=n.render;var o=t.ref;return Ci(t,i),r=X1(e,t,n,r,o,i),n=J1(),e!==null&&!$t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hn(e,t,i)):(ze&&n&&B1(t),t.flags|=1,yt(e,t,r,i),t.child)}function rf(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!cp(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,dm(e,t,o,r,i)):(e=xs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Go,n(s,r)&&e.ref===t.ref)return Hn(e,t,i)}return t.flags|=1,e=dr(o,r),e.ref=t.ref,e.return=t,t.child=e}function dm(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Go(o,r)&&e.ref===t.ref)if($t=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&($t=!0);else return t.lanes=e.lanes,Hn(e,t,i)}return Td(e,t,n,r,i)}function pm(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(Li,_t),_t|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ce(Li,_t),_t|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ce(Li,_t),_t|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ce(Li,_t),_t|=r;return yt(e,t,i,n),t.child}function fm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Td(e,t,n,r,i){var o=Pt(n)?Or:gt.current;return o=Mi(t,o),Ci(t,i),n=X1(e,t,n,r,o,i),r=J1(),e!==null&&!$t?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hn(e,t,i)):(ze&&r&&B1(t),t.flags|=1,yt(e,t,n,i),t.child)}function of(e,t,n,r,i){if(Pt(n)){var o=!0;Fs(t)}else o=!1;if(Ci(t,i),t.stateNode===null)hs(e,t),am(t,n,r),Pd(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=tn(u):(u=Pt(n)?Or:gt.current,u=Mi(t,u));var p=n.getDerivedStateFromProps,f=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||c!==u)&&X0(t,s,r,u),Xn=!1;var h=t.memoizedState;s.state=h,Ks(t,r,s,i),c=t.memoizedState,a!==r||h!==c||Et.current||Xn?(typeof p=="function"&&(Ed(t,n,p,r),c=t.memoizedState),(a=Xn||Q0(t,n,a,r,h,c,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Fg(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:cn(t.type,a),s.props=u,f=t.pendingProps,h=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=tn(c):(c=Pt(n)?Or:gt.current,c=Mi(t,c));var g=n.getDerivedStateFromProps;(p=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||h!==c)&&X0(t,s,r,c),Xn=!1,h=t.memoizedState,s.state=h,Ks(t,r,s,i);var b=t.memoizedState;a!==f||h!==b||Et.current||Xn?(typeof g=="function"&&(Ed(t,n,g,r),b=t.memoizedState),(u=Xn||Q0(t,n,u,r,h,b,c)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,b,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,b,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),s.props=r,s.state=b,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Rd(e,t,n,r,o,i)}function Rd(e,t,n,r,i,o){fm(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&U0(t,n,!1),Hn(e,t,o);r=t.stateNode,n7.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Ai(t,e.child,null,o),t.child=Ai(t,null,a,o)):yt(e,t,a,o),t.memoizedState=r.state,i&&U0(t,n,!0),t.child}function hm(e){var t=e.stateNode;t.pendingContext?H0(e,t.pendingContext,t.pendingContext!==t.context):t.context&&H0(e,t.context,!1),G1(e,t.containerInfo)}function lf(e,t,n,r,i){return zi(),H1(i),t.flags|=256,yt(e,t,n,r),t.child}var Md={dehydrated:null,treeContext:null,retryLane:0};function zd(e){return{baseLanes:e,cachePool:null,transitions:null}}function gm(e,t,n){var r=t.pendingProps,i=Ne.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ce(Ne,i&1),e===null)return Cd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=$a(s,r,0,null),e=Ar(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=zd(n),t.memoizedState=Md,e):np(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return r7(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=dr(i,c),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=dr(a,o):(o=Ar(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?zd(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Md,r}return o=e.child,e=o.sibling,r=dr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function np(e,t){return t=$a({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ol(e,t,n,r){return r!==null&&H1(r),Ai(t,e.child,null,n),e=np(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function r7(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=jc(Error(U(422))),Ol(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=$a({mode:"visible",children:r.children},i,0,null),o=Ar(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Ai(t,e.child,null,s),t.child.memoizedState=zd(s),t.memoizedState=Md,o);if(!(t.mode&1))return Ol(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(U(419)),r=jc(o,r,void 0),Ol(e,t,s,r)}if(a=(s&e.childLanes)!==0,$t||a){if(r=it,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Fn(e,i),hn(r,e,i,-1))}return ap(),r=jc(Error(U(421))),Ol(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=m7.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Nt=sr(i.nextSibling),Dt=t,ze=!0,pn=null,e!==null&&(Yt[Gt++]=_n,Yt[Gt++]=Nn,Yt[Gt++]=Dr,_n=e.id,Nn=e.overflow,Dr=t),t=np(t,r.children),t.flags|=4096,t)}function sf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$d(e.return,t,n)}function Sc(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function mm(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(yt(e,t,r.children,n),r=Ne.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sf(e,n,t);else if(e.tag===19)sf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ce(Ne,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ys(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Sc(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ys(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Sc(t,!0,n,null,o);break;case"together":Sc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function hs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Hn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Fr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(U(153));if(t.child!==null){for(e=t.child,n=dr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function i7(e,t,n){switch(t.tag){case 3:hm(t),zi();break;case 5:Hg(t);break;case 1:Pt(t.type)&&Fs(t);break;case 4:G1(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ce(Vs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ce(Ne,Ne.current&1),t.flags|=128,null):n&t.child.childLanes?gm(e,t,n):(Ce(Ne,Ne.current&1),e=Hn(e,t,n),e!==null?e.sibling:null);Ce(Ne,Ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return mm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ce(Ne,Ne.current),r)break;return null;case 22:case 23:return t.lanes=0,pm(e,t,n)}return Hn(e,t,n)}var xm,Ad,Lm,ym;xm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ad=function(){};Lm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Tr($n.current);var o=null;switch(n){case"input":i=rd(e,i),r=rd(e,r),o=[];break;case"select":i=Fe({},i,{value:void 0}),r=Fe({},r,{value:void 0}),o=[];break;case"textarea":i=ld(e,i),r=ld(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ds)}ad(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Fo.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&a[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Fo.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Ie("scroll",e),o||a===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};ym=function(e,t,n,r){n!==r&&(t.flags|=4)};function ao(e,t){if(!ze)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ft(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function o7(e,t,n){var r=t.pendingProps;switch(F1(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(t),null;case 1:return Pt(t.type)&&Bs(),ft(t),null;case 3:return r=t.stateNode,_i(),Re(Et),Re(gt),q1(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_l(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,pn!==null&&(Ud(pn),pn=null))),Ad(e,t),ft(t),null;case 5:Z1(t);var i=Tr(Jo.current);if(n=t.type,e!==null&&t.stateNode!=null)Lm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(U(166));return ft(t),null}if(e=Tr($n.current),_l(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[jn]=t,r[Qo]=o,e=(t.mode&1)!==0,n){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(i=0;i<bo.length;i++)Ie(bo[i],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":g0(r,o),Ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ie("invalid",r);break;case"textarea":x0(r,o),Ie("invalid",r)}ad(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Al(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Al(r.textContent,a,e),i=["children",""+a]):Fo.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Ie("scroll",r)}switch(n){case"input":$l(r),m0(r,o,!0);break;case"textarea":$l(r),L0(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ds)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Y4(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[jn]=t,e[Qo]=r,xm(e,t,!1,!1),t.stateNode=e;e:{switch(s=cd(n,r),n){case"dialog":Ie("cancel",e),Ie("close",e),i=r;break;case"iframe":case"object":case"embed":Ie("load",e),i=r;break;case"video":case"audio":for(i=0;i<bo.length;i++)Ie(bo[i],e);i=r;break;case"source":Ie("error",e),i=r;break;case"img":case"image":case"link":Ie("error",e),Ie("load",e),i=r;break;case"details":Ie("toggle",e),i=r;break;case"input":g0(e,r),i=rd(e,r),Ie("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Fe({},r,{value:void 0}),Ie("invalid",e);break;case"textarea":x0(e,r),i=ld(e,r),Ie("invalid",e);break;default:i=r}ad(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var c=a[o];o==="style"?q4(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&G4(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ho(e,c):typeof c=="number"&&Ho(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Fo.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Ie("scroll",e):c!=null&&C1(e,o,c,s))}switch(n){case"input":$l(e),m0(e,r,!1);break;case"textarea":$l(e),L0(e);break;case"option":r.value!=null&&e.setAttribute("value",""+hr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?bi(e,!!r.multiple,o,!1):r.defaultValue!=null&&bi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ds)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ft(t),null;case 6:if(e&&t.stateNode!=null)ym(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(U(166));if(n=Tr(Jo.current),Tr($n.current),_l(t)){if(r=t.stateNode,n=t.memoizedProps,r[jn]=t,(o=r.nodeValue!==n)&&(e=Dt,e!==null))switch(e.tag){case 3:Al(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Al(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[jn]=t,t.stateNode=r}return ft(t),null;case 13:if(Re(Ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ze&&Nt!==null&&t.mode&1&&!(t.flags&128))Ng(),zi(),t.flags|=98560,o=!1;else if(o=_l(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(U(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(U(317));o[jn]=t}else zi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ft(t),o=!1}else pn!==null&&(Ud(pn),pn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ne.current&1?et===0&&(et=3):ap())),t.updateQueue!==null&&(t.flags|=4),ft(t),null);case 4:return _i(),Ad(e,t),e===null&&Zo(t.stateNode.containerInfo),ft(t),null;case 10:return W1(t.type._context),ft(t),null;case 17:return Pt(t.type)&&Bs(),ft(t),null;case 19:if(Re(Ne),o=t.memoizedState,o===null)return ft(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)ao(o,!1);else{if(et!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ys(e),s!==null){for(t.flags|=128,ao(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ce(Ne,Ne.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ve()>Oi&&(t.flags|=128,r=!0,ao(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ys(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ao(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ze)return ft(t),null}else 2*Ve()-o.renderingStartTime>Oi&&n!==1073741824&&(t.flags|=128,r=!0,ao(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ve(),t.sibling=null,n=Ne.current,Ce(Ne,r?n&1|2:n&1),t):(ft(t),null);case 22:case 23:return sp(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_t&1073741824&&(ft(t),t.subtreeFlags&6&&(t.flags|=8192)):ft(t),null;case 24:return null;case 25:return null}throw Error(U(156,t.tag))}function l7(e,t){switch(F1(t),t.tag){case 1:return Pt(t.type)&&Bs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _i(),Re(Et),Re(gt),q1(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Z1(t),null;case 13:if(Re(Ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(U(340));zi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Re(Ne),null;case 4:return _i(),null;case 10:return W1(t.type._context),null;case 22:case 23:return sp(),null;case 24:return null;default:return null}}var Dl=!1,ht=!1,s7=typeof WeakSet=="function"?WeakSet:Set,Z=null;function xi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ue(e,t,r)}else n.current=null}function _d(e,t,n){try{n()}catch(r){Ue(e,t,r)}}var af=!1;function a7(e,t){if(yd=_s,e=jg(),D1(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,c=-1,u=0,p=0,f=e,h=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(c=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===e)break t;if(h===n&&++u===i&&(a=s),h===o&&++p===r&&(c=s),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(vd={focusedElem:e,selectionRange:n},_s=!1,Z=t;Z!==null;)if(t=Z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Z=e;else for(;Z!==null;){t=Z;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var w=b.memoizedProps,C=b.memoizedState,m=t.stateNode,x=m.getSnapshotBeforeUpdate(t.elementType===t.type?w:cn(t.type,w),C);m.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var L=t.stateNode.containerInfo;L.nodeType===1?L.textContent="":L.nodeType===9&&L.documentElement&&L.removeChild(L.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(v){Ue(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,Z=e;break}Z=t.return}return b=af,af=!1,b}function Ro(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&_d(t,n,o)}i=i.next}while(i!==r)}}function Sa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Nd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function vm(e){var t=e.alternate;t!==null&&(e.alternate=null,vm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[jn],delete t[Qo],delete t[kd],delete t[V6],delete t[W6])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wm(e){return e.tag===5||e.tag===3||e.tag===4}function cf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Od(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ds));else if(r!==4&&(e=e.child,e!==null))for(Od(e,t,n),e=e.sibling;e!==null;)Od(e,t,n),e=e.sibling}function Dd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Dd(e,t,n),e=e.sibling;e!==null;)Dd(e,t,n),e=e.sibling}var ot=null,un=!1;function Yn(e,t,n){for(n=n.child;n!==null;)bm(e,t,n),n=n.sibling}function bm(e,t,n){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount(xa,n)}catch{}switch(n.tag){case 5:ht||xi(n,t);case 6:var r=ot,i=un;ot=null,Yn(e,t,n),ot=r,un=i,ot!==null&&(un?(e=ot,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ot.removeChild(n.stateNode));break;case 18:ot!==null&&(un?(e=ot,n=n.stateNode,e.nodeType===8?Lc(e.parentNode,n):e.nodeType===1&&Lc(e,n),Ko(e)):Lc(ot,n.stateNode));break;case 4:r=ot,i=un,ot=n.stateNode.containerInfo,un=!0,Yn(e,t,n),ot=r,un=i;break;case 0:case 11:case 14:case 15:if(!ht&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&_d(n,t,s),i=i.next}while(i!==r)}Yn(e,t,n);break;case 1:if(!ht&&(xi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ue(n,t,a)}Yn(e,t,n);break;case 21:Yn(e,t,n);break;case 22:n.mode&1?(ht=(r=ht)||n.memoizedState!==null,Yn(e,t,n),ht=r):Yn(e,t,n);break;default:Yn(e,t,n)}}function uf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new s7),t.forEach(function(r){var i=x7.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function an(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ot=a.stateNode,un=!1;break e;case 3:ot=a.stateNode.containerInfo,un=!0;break e;case 4:ot=a.stateNode.containerInfo,un=!0;break e}a=a.return}if(ot===null)throw Error(U(160));bm(o,s,i),ot=null,un=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Ue(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)km(t,e),t=t.sibling}function km(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(an(t,e),Ln(e),r&4){try{Ro(3,e,e.return),Sa(3,e)}catch(w){Ue(e,e.return,w)}try{Ro(5,e,e.return)}catch(w){Ue(e,e.return,w)}}break;case 1:an(t,e),Ln(e),r&512&&n!==null&&xi(n,n.return);break;case 5:if(an(t,e),Ln(e),r&512&&n!==null&&xi(n,n.return),e.flags&32){var i=e.stateNode;try{Ho(i,"")}catch(w){Ue(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&W4(i,o),cd(a,s);var u=cd(a,o);for(s=0;s<c.length;s+=2){var p=c[s],f=c[s+1];p==="style"?q4(i,f):p==="dangerouslySetInnerHTML"?G4(i,f):p==="children"?Ho(i,f):C1(i,p,f,u)}switch(a){case"input":id(i,o);break;case"textarea":K4(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?bi(i,!!o.multiple,g,!1):h!==!!o.multiple&&(o.defaultValue!=null?bi(i,!!o.multiple,o.defaultValue,!0):bi(i,!!o.multiple,o.multiple?[]:"",!1))}i[Qo]=o}catch(w){Ue(e,e.return,w)}}break;case 6:if(an(t,e),Ln(e),r&4){if(e.stateNode===null)throw Error(U(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){Ue(e,e.return,w)}}break;case 3:if(an(t,e),Ln(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ko(t.containerInfo)}catch(w){Ue(e,e.return,w)}break;case 4:an(t,e),Ln(e);break;case 13:an(t,e),Ln(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(op=Ve())),r&4&&uf(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(ht=(u=ht)||p,an(t,e),ht=u):an(t,e),Ln(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(Z=e,p=e.child;p!==null;){for(f=Z=p;Z!==null;){switch(h=Z,g=h.child,h.tag){case 0:case 11:case 14:case 15:Ro(4,h,h.return);break;case 1:xi(h,h.return);var b=h.stateNode;if(typeof b.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(w){Ue(r,n,w)}}break;case 5:xi(h,h.return);break;case 22:if(h.memoizedState!==null){pf(f);continue}}g!==null?(g.return=h,Z=g):pf(f)}p=p.sibling}e:for(p=null,f=e;;){if(f.tag===5){if(p===null){p=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,c=f.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=Z4("display",s))}catch(w){Ue(e,e.return,w)}}}else if(f.tag===6){if(p===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){Ue(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;p===f&&(p=null),f=f.return}p===f&&(p=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:an(t,e),Ln(e),r&4&&uf(e);break;case 21:break;default:an(t,e),Ln(e)}}function Ln(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(wm(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ho(i,""),r.flags&=-33);var o=cf(e);Dd(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=cf(e);Od(e,a,s);break;default:throw Error(U(161))}}catch(c){Ue(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function c7(e,t,n){Z=e,jm(e)}function jm(e,t,n){for(var r=(e.mode&1)!==0;Z!==null;){var i=Z,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Dl;if(!s){var a=i.alternate,c=a!==null&&a.memoizedState!==null||ht;a=Dl;var u=ht;if(Dl=s,(ht=c)&&!u)for(Z=i;Z!==null;)s=Z,c=s.child,s.tag===22&&s.memoizedState!==null?ff(i):c!==null?(c.return=s,Z=c):ff(i);for(;o!==null;)Z=o,jm(o),o=o.sibling;Z=i,Dl=a,ht=u}df(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,Z=o):df(e)}}function df(e){for(;Z!==null;){var t=Z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ht||Sa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ht)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:cn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&G0(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}G0(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var f=p.dehydrated;f!==null&&Ko(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}ht||t.flags&512&&Nd(t)}catch(h){Ue(t,t.return,h)}}if(t===e){Z=null;break}if(n=t.sibling,n!==null){n.return=t.return,Z=n;break}Z=t.return}}function pf(e){for(;Z!==null;){var t=Z;if(t===e){Z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Z=n;break}Z=t.return}}function ff(e){for(;Z!==null;){var t=Z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Sa(4,t)}catch(c){Ue(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Ue(t,i,c)}}var o=t.return;try{Nd(t)}catch(c){Ue(t,o,c)}break;case 5:var s=t.return;try{Nd(t)}catch(c){Ue(t,s,c)}}}catch(c){Ue(t,t.return,c)}if(t===e){Z=null;break}var a=t.sibling;if(a!==null){a.return=t.return,Z=a;break}Z=t.return}}var u7=Math.ceil,qs=Vn.ReactCurrentDispatcher,rp=Vn.ReactCurrentOwner,en=Vn.ReactCurrentBatchConfig,pe=0,it=null,Qe=null,lt=0,_t=0,Li=Lr(0),et=0,rl=null,Fr=0,Ca=0,ip=0,Mo=null,Ct=null,op=0,Oi=1/0,Mn=null,Qs=!1,Bd=null,cr=null,Bl=!1,nr=null,Xs=0,zo=0,Fd=null,gs=-1,ms=0;function vt(){return pe&6?Ve():gs!==-1?gs:gs=Ve()}function ur(e){return e.mode&1?pe&2&&lt!==0?lt&-lt:Y6.transition!==null?(ms===0&&(ms=ag()),ms):(e=ve,e!==0||(e=window.event,e=e===void 0?16:gg(e.type)),e):1}function hn(e,t,n,r){if(50<zo)throw zo=0,Fd=null,Error(U(185));dl(e,n,r),(!(pe&2)||e!==it)&&(e===it&&(!(pe&2)&&(Ca|=n),et===4&&er(e,lt)),It(e,r),n===1&&pe===0&&!(t.mode&1)&&(Oi=Ve()+500,ba&&yr()))}function It(e,t){var n=e.callbackNode;Y5(e,t);var r=As(e,e===it?lt:0);if(r===0)n!==null&&w0(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&w0(n),t===1)e.tag===0?K6(hf.bind(null,e)):zg(hf.bind(null,e)),H6(function(){!(pe&6)&&yr()}),n=null;else{switch(cg(r)){case 1:n=T1;break;case 4:n=lg;break;case 16:n=zs;break;case 536870912:n=sg;break;default:n=zs}n=Rm(n,Sm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Sm(e,t){if(gs=-1,ms=0,pe&6)throw Error(U(327));var n=e.callbackNode;if($i()&&e.callbackNode!==n)return null;var r=As(e,e===it?lt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Js(e,r);else{t=r;var i=pe;pe|=2;var o=$m();(it!==e||lt!==t)&&(Mn=null,Oi=Ve()+500,zr(e,t));do try{f7();break}catch(a){Cm(e,a)}while(!0);V1(),qs.current=o,pe=i,Qe!==null?t=0:(it=null,lt=0,t=et)}if(t!==0){if(t===2&&(i=hd(e),i!==0&&(r=i,t=Hd(e,i))),t===1)throw n=rl,zr(e,0),er(e,r),It(e,Ve()),n;if(t===6)er(e,r);else{if(i=e.current.alternate,!(r&30)&&!d7(i)&&(t=Js(e,r),t===2&&(o=hd(e),o!==0&&(r=o,t=Hd(e,o))),t===1))throw n=rl,zr(e,0),er(e,r),It(e,Ve()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(U(345));case 2:Cr(e,Ct,Mn);break;case 3:if(er(e,r),(r&130023424)===r&&(t=op+500-Ve(),10<t)){if(As(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){vt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=bd(Cr.bind(null,e,Ct,Mn),t);break}Cr(e,Ct,Mn);break;case 4:if(er(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-fn(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*u7(r/1960))-r,10<r){e.timeoutHandle=bd(Cr.bind(null,e,Ct,Mn),r);break}Cr(e,Ct,Mn);break;case 5:Cr(e,Ct,Mn);break;default:throw Error(U(329))}}}return It(e,Ve()),e.callbackNode===n?Sm.bind(null,e):null}function Hd(e,t){var n=Mo;return e.current.memoizedState.isDehydrated&&(zr(e,t).flags|=256),e=Js(e,t),e!==2&&(t=Ct,Ct=n,t!==null&&Ud(t)),e}function Ud(e){Ct===null?Ct=e:Ct.push.apply(Ct,e)}function d7(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!xn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function er(e,t){for(t&=~ip,t&=~Ca,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-fn(t),r=1<<n;e[n]=-1,t&=~r}}function hf(e){if(pe&6)throw Error(U(327));$i();var t=As(e,0);if(!(t&1))return It(e,Ve()),null;var n=Js(e,t);if(e.tag!==0&&n===2){var r=hd(e);r!==0&&(t=r,n=Hd(e,r))}if(n===1)throw n=rl,zr(e,0),er(e,t),It(e,Ve()),n;if(n===6)throw Error(U(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Cr(e,Ct,Mn),It(e,Ve()),null}function lp(e,t){var n=pe;pe|=1;try{return e(t)}finally{pe=n,pe===0&&(Oi=Ve()+500,ba&&yr())}}function Hr(e){nr!==null&&nr.tag===0&&!(pe&6)&&$i();var t=pe;pe|=1;var n=en.transition,r=ve;try{if(en.transition=null,ve=1,e)return e()}finally{ve=r,en.transition=n,pe=t,!(pe&6)&&yr()}}function sp(){_t=Li.current,Re(Li)}function zr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,F6(n)),Qe!==null)for(n=Qe.return;n!==null;){var r=n;switch(F1(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Bs();break;case 3:_i(),Re(Et),Re(gt),q1();break;case 5:Z1(r);break;case 4:_i();break;case 13:Re(Ne);break;case 19:Re(Ne);break;case 10:W1(r.type._context);break;case 22:case 23:sp()}n=n.return}if(it=e,Qe=e=dr(e.current,null),lt=_t=t,et=0,rl=null,ip=Ca=Fr=0,Ct=Mo=null,Ir!==null){for(t=0;t<Ir.length;t++)if(n=Ir[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Ir=null}return e}function Cm(e,t){do{var n=Qe;try{if(V1(),ps.current=Zs,Gs){for(var r=Be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Gs=!1}if(Br=0,nt=Xe=Be=null,To=!1,el=0,rp.current=null,n===null||n.return===null){et=1,rl=t,Qe=null;break}e:{var o=e,s=n.return,a=n,c=t;if(t=lt,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,p=a,f=p.tag;if(!(p.mode&1)&&(f===0||f===11||f===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var g=ef(s);if(g!==null){g.flags&=-257,tf(g,s,a,o,t),g.mode&1&&J0(o,u,t),t=g,c=u;var b=t.updateQueue;if(b===null){var w=new Set;w.add(c),t.updateQueue=w}else b.add(c);break e}else{if(!(t&1)){J0(o,u,t),ap();break e}c=Error(U(426))}}else if(ze&&a.mode&1){var C=ef(s);if(C!==null){!(C.flags&65536)&&(C.flags|=256),tf(C,s,a,o,t),H1(Ni(c,a));break e}}o=c=Ni(c,a),et!==4&&(et=2),Mo===null?Mo=[o]:Mo.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=cm(o,c,t);Y0(o,m);break e;case 1:a=c;var x=o.type,L=o.stateNode;if(!(o.flags&128)&&(typeof x.getDerivedStateFromError=="function"||L!==null&&typeof L.componentDidCatch=="function"&&(cr===null||!cr.has(L)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=um(o,a,t);Y0(o,v);break e}}o=o.return}while(o!==null)}Pm(n)}catch($){t=$,Qe===n&&n!==null&&(Qe=n=n.return);continue}break}while(!0)}function $m(){var e=qs.current;return qs.current=Zs,e===null?Zs:e}function ap(){(et===0||et===3||et===2)&&(et=4),it===null||!(Fr&268435455)&&!(Ca&268435455)||er(it,lt)}function Js(e,t){var n=pe;pe|=2;var r=$m();(it!==e||lt!==t)&&(Mn=null,zr(e,t));do try{p7();break}catch(i){Cm(e,i)}while(!0);if(V1(),pe=n,qs.current=r,Qe!==null)throw Error(U(261));return it=null,lt=0,et}function p7(){for(;Qe!==null;)Em(Qe)}function f7(){for(;Qe!==null&&!O5();)Em(Qe)}function Em(e){var t=Tm(e.alternate,e,_t);e.memoizedProps=e.pendingProps,t===null?Pm(e):Qe=t,rp.current=null}function Pm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=l7(n,t),n!==null){n.flags&=32767,Qe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{et=6,Qe=null;return}}else if(n=o7(n,t,_t),n!==null){Qe=n;return}if(t=t.sibling,t!==null){Qe=t;return}Qe=t=e}while(t!==null);et===0&&(et=5)}function Cr(e,t,n){var r=ve,i=en.transition;try{en.transition=null,ve=1,h7(e,t,n,r)}finally{en.transition=i,ve=r}return null}function h7(e,t,n,r){do $i();while(nr!==null);if(pe&6)throw Error(U(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(U(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(G5(e,o),e===it&&(Qe=it=null,lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Bl||(Bl=!0,Rm(zs,function(){return $i(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=en.transition,en.transition=null;var s=ve;ve=1;var a=pe;pe|=4,rp.current=null,a7(e,n),km(n,e),z6(vd),_s=!!yd,vd=yd=null,e.current=n,c7(n),D5(),pe=a,ve=s,en.transition=o}else e.current=n;if(Bl&&(Bl=!1,nr=e,Xs=i),o=e.pendingLanes,o===0&&(cr=null),H5(n.stateNode),It(e,Ve()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Qs)throw Qs=!1,e=Bd,Bd=null,e;return Xs&1&&e.tag!==0&&$i(),o=e.pendingLanes,o&1?e===Fd?zo++:(zo=0,Fd=e):zo=0,yr(),null}function $i(){if(nr!==null){var e=cg(Xs),t=en.transition,n=ve;try{if(en.transition=null,ve=16>e?16:e,nr===null)var r=!1;else{if(e=nr,nr=null,Xs=0,pe&6)throw Error(U(331));var i=pe;for(pe|=4,Z=e.current;Z!==null;){var o=Z,s=o.child;if(Z.flags&16){var a=o.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(Z=u;Z!==null;){var p=Z;switch(p.tag){case 0:case 11:case 15:Ro(8,p,o)}var f=p.child;if(f!==null)f.return=p,Z=f;else for(;Z!==null;){p=Z;var h=p.sibling,g=p.return;if(vm(p),p===u){Z=null;break}if(h!==null){h.return=g,Z=h;break}Z=g}}}var b=o.alternate;if(b!==null){var w=b.child;if(w!==null){b.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}Z=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Z=s;else e:for(;Z!==null;){if(o=Z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ro(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,Z=m;break e}Z=o.return}}var x=e.current;for(Z=x;Z!==null;){s=Z;var L=s.child;if(s.subtreeFlags&2064&&L!==null)L.return=s,Z=L;else e:for(s=x;Z!==null;){if(a=Z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Sa(9,a)}}catch($){Ue(a,a.return,$)}if(a===s){Z=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,Z=v;break e}Z=a.return}}if(pe=i,yr(),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot(xa,e)}catch{}r=!0}return r}finally{ve=n,en.transition=t}}return!1}function gf(e,t,n){t=Ni(n,t),t=cm(e,t,1),e=ar(e,t,1),t=vt(),e!==null&&(dl(e,1,t),It(e,t))}function Ue(e,t,n){if(e.tag===3)gf(e,e,n);else for(;t!==null;){if(t.tag===3){gf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cr===null||!cr.has(r))){e=Ni(n,e),e=um(t,e,1),t=ar(t,e,1),e=vt(),t!==null&&(dl(t,1,e),It(t,e));break}}t=t.return}}function g7(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=vt(),e.pingedLanes|=e.suspendedLanes&n,it===e&&(lt&n)===n&&(et===4||et===3&&(lt&130023424)===lt&&500>Ve()-op?zr(e,0):ip|=n),It(e,t)}function Im(e,t){t===0&&(e.mode&1?(t=Il,Il<<=1,!(Il&130023424)&&(Il=4194304)):t=1);var n=vt();e=Fn(e,t),e!==null&&(dl(e,t,n),It(e,n))}function m7(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Im(e,n)}function x7(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(t),Im(e,n)}var Tm;Tm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Et.current)$t=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return $t=!1,i7(e,t,n);$t=!!(e.flags&131072)}else $t=!1,ze&&t.flags&1048576&&Ag(t,Us,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;hs(e,t),e=t.pendingProps;var i=Mi(t,gt.current);Ci(t,n),i=X1(null,t,r,e,i,n);var o=J1();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pt(r)?(o=!0,Fs(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Y1(t),i.updater=ja,t.stateNode=i,i._reactInternals=t,Pd(t,r,e,n),t=Rd(null,t,r,!0,o,n)):(t.tag=0,ze&&o&&B1(t),yt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(hs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=y7(r),e=cn(r,e),i){case 0:t=Td(null,t,r,e,n);break e;case 1:t=of(null,t,r,e,n);break e;case 11:t=nf(null,t,r,e,n);break e;case 14:t=rf(null,t,r,cn(r.type,e),n);break e}throw Error(U(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:cn(r,i),Td(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:cn(r,i),of(e,t,r,i,n);case 3:e:{if(hm(t),e===null)throw Error(U(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Fg(e,t),Ks(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ni(Error(U(423)),t),t=lf(e,t,r,n,i);break e}else if(r!==i){i=Ni(Error(U(424)),t),t=lf(e,t,r,n,i);break e}else for(Nt=sr(t.stateNode.containerInfo.firstChild),Dt=t,ze=!0,pn=null,n=Dg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zi(),r===i){t=Hn(e,t,n);break e}yt(e,t,r,n)}t=t.child}return t;case 5:return Hg(t),e===null&&Cd(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,wd(r,i)?s=null:o!==null&&wd(r,o)&&(t.flags|=32),fm(e,t),yt(e,t,s,n),t.child;case 6:return e===null&&Cd(t),null;case 13:return gm(e,t,n);case 4:return G1(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ai(t,null,r,n):yt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:cn(r,i),nf(e,t,r,i,n);case 7:return yt(e,t,t.pendingProps,n),t.child;case 8:return yt(e,t,t.pendingProps.children,n),t.child;case 12:return yt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Ce(Vs,r._currentValue),r._currentValue=s,o!==null)if(xn(o.value,s)){if(o.children===i.children&&!Et.current){t=Hn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=On(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?c.next=c:(c.next=p.next,p.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),$d(o.return,n,t),a.lanes|=n;break}c=c.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(U(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),$d(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}yt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ci(t,n),i=tn(i),r=r(i),t.flags|=1,yt(e,t,r,n),t.child;case 14:return r=t.type,i=cn(r,t.pendingProps),i=cn(r.type,i),rf(e,t,r,i,n);case 15:return dm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:cn(r,i),hs(e,t),t.tag=1,Pt(r)?(e=!0,Fs(t)):e=!1,Ci(t,n),am(t,r,i),Pd(t,r,i,n),Rd(null,t,r,!0,e,n);case 19:return mm(e,t,n);case 22:return pm(e,t,n)}throw Error(U(156,t.tag))};function Rm(e,t){return og(e,t)}function L7(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qt(e,t,n,r){return new L7(e,t,n,r)}function cp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function y7(e){if(typeof e=="function")return cp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===E1)return 11;if(e===P1)return 14}return 2}function dr(e,t){var n=e.alternate;return n===null?(n=Qt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function xs(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")cp(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case ai:return Ar(n.children,i,o,t);case $1:s=8,i|=8;break;case Ju:return e=Qt(12,n,t,i|2),e.elementType=Ju,e.lanes=o,e;case ed:return e=Qt(13,n,t,i),e.elementType=ed,e.lanes=o,e;case td:return e=Qt(19,n,t,i),e.elementType=td,e.lanes=o,e;case H4:return $a(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case B4:s=10;break e;case F4:s=9;break e;case E1:s=11;break e;case P1:s=14;break e;case Qn:s=16,r=null;break e}throw Error(U(130,e==null?e:typeof e,""))}return t=Qt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Ar(e,t,n,r){return e=Qt(7,e,r,t),e.lanes=n,e}function $a(e,t,n,r){return e=Qt(22,e,r,t),e.elementType=H4,e.lanes=n,e.stateNode={isHidden:!1},e}function Cc(e,t,n){return e=Qt(6,e,null,t),e.lanes=n,e}function $c(e,t,n){return t=Qt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function v7(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sc(0),this.expirationTimes=sc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function up(e,t,n,r,i,o,s,a,c){return e=new v7(e,t,n,a,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Qt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Y1(o),e}function w7(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:si,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Mm(e){if(!e)return gr;e=e._reactInternals;e:{if(Yr(e)!==e||e.tag!==1)throw Error(U(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(U(171))}if(e.tag===1){var n=e.type;if(Pt(n))return Mg(e,n,t)}return t}function zm(e,t,n,r,i,o,s,a,c){return e=up(n,r,!0,e,i,o,s,a,c),e.context=Mm(null),n=e.current,r=vt(),i=ur(n),o=On(r,i),o.callback=t??null,ar(n,o,i),e.current.lanes=i,dl(e,i,r),It(e,r),e}function Ea(e,t,n,r){var i=t.current,o=vt(),s=ur(i);return n=Mm(n),t.context===null?t.context=n:t.pendingContext=n,t=On(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ar(i,t,s),e!==null&&(hn(e,i,s,o),ds(e,i,s)),s}function ea(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function mf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function dp(e,t){mf(e,t),(e=e.alternate)&&mf(e,t)}function b7(){return null}var Am=typeof reportError=="function"?reportError:function(e){console.error(e)};function pp(e){this._internalRoot=e}Pa.prototype.render=pp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(U(409));Ea(e,t,null,null)};Pa.prototype.unmount=pp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Hr(function(){Ea(null,e,null,null)}),t[Bn]=null}};function Pa(e){this._internalRoot=e}Pa.prototype.unstable_scheduleHydration=function(e){if(e){var t=pg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Jn.length&&t!==0&&t<Jn[n].priority;n++);Jn.splice(n,0,e),n===0&&hg(e)}};function fp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ia(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xf(){}function k7(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ea(s);o.call(u)}}var s=zm(t,r,e,0,null,!1,!1,"",xf);return e._reactRootContainer=s,e[Bn]=s.current,Zo(e.nodeType===8?e.parentNode:e),Hr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ea(c);a.call(u)}}var c=up(e,0,!1,null,null,!1,!1,"",xf);return e._reactRootContainer=c,e[Bn]=c.current,Zo(e.nodeType===8?e.parentNode:e),Hr(function(){Ea(t,c,n,r)}),c}function Ta(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var c=ea(s);a.call(c)}}Ea(t,s,e,i)}else s=k7(n,t,e,i,r);return ea(s)}ug=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=wo(t.pendingLanes);n!==0&&(R1(t,n|1),It(t,Ve()),!(pe&6)&&(Oi=Ve()+500,yr()))}break;case 13:Hr(function(){var r=Fn(e,1);if(r!==null){var i=vt();hn(r,e,1,i)}}),dp(e,1)}};M1=function(e){if(e.tag===13){var t=Fn(e,134217728);if(t!==null){var n=vt();hn(t,e,134217728,n)}dp(e,134217728)}};dg=function(e){if(e.tag===13){var t=ur(e),n=Fn(e,t);if(n!==null){var r=vt();hn(n,e,t,r)}dp(e,t)}};pg=function(){return ve};fg=function(e,t){var n=ve;try{return ve=e,t()}finally{ve=n}};dd=function(e,t,n){switch(t){case"input":if(id(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wa(r);if(!i)throw Error(U(90));V4(r),id(r,i)}}}break;case"textarea":K4(e,n);break;case"select":t=n.value,t!=null&&bi(e,!!n.multiple,t,!1)}};J4=lp;eg=Hr;var j7={usingClientEntryPoint:!1,Events:[fl,pi,wa,Q4,X4,lp]},co={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},S7={bundleType:co.bundleType,version:co.version,rendererPackageName:co.rendererPackageName,rendererConfig:co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=rg(e),e===null?null:e.stateNode},findFiberByHostInstance:co.findFiberByHostInstance||b7,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fl.isDisabled&&Fl.supportsFiber)try{xa=Fl.inject(S7),Cn=Fl}catch{}}Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j7;Ft.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fp(t))throw Error(U(200));return w7(e,t,null,n)};Ft.createRoot=function(e,t){if(!fp(e))throw Error(U(299));var n=!1,r="",i=Am;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=up(e,1,!1,null,null,n,!1,r,i),e[Bn]=t.current,Zo(e.nodeType===8?e.parentNode:e),new pp(t)};Ft.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(U(188)):(e=Object.keys(e).join(","),Error(U(268,e)));return e=rg(t),e=e===null?null:e.stateNode,e};Ft.flushSync=function(e){return Hr(e)};Ft.hydrate=function(e,t,n){if(!Ia(t))throw Error(U(200));return Ta(null,e,t,!0,n)};Ft.hydrateRoot=function(e,t,n){if(!fp(e))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Am;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=zm(t,null,e,1,n??null,i,!1,o,s),e[Bn]=t.current,Zo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Pa(t)};Ft.render=function(e,t,n){if(!Ia(t))throw Error(U(200));return Ta(null,e,t,!1,n)};Ft.unmountComponentAtNode=function(e){if(!Ia(e))throw Error(U(40));return e._reactRootContainer?(Hr(function(){Ta(null,null,e,!1,function(){e._reactRootContainer=null,e[Bn]=null})}),!0):!1};Ft.unstable_batchedUpdates=lp;Ft.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ia(n))throw Error(U(200));if(e==null||e._reactInternals===void 0)throw Error(U(38));return Ta(e,t,n,!1,r)};Ft.version="18.3.1-next-f1338f8080-20240426";function _m(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_m)}catch(e){console.error(e)}}_m(),_4.exports=Ft;var Nm=_4.exports,Lf=Nm;Qu.createRoot=Lf.createRoot,Qu.hydrateRoot=Lf.hydrateRoot;var rt=function(){return rt=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},rt.apply(this,arguments)};function Di(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var Te="-ms-",Ao="-moz-",ge="-webkit-",Om="comm",Ra="rule",hp="decl",C7="@import",$7="@namespace",Dm="@keyframes",E7="@layer",Bm=Math.abs,gp=String.fromCharCode,Vd=Object.assign;function P7(e,t){return Je(e,0)^45?(((t<<2^Je(e,0))<<2^Je(e,1))<<2^Je(e,2))<<2^Je(e,3):0}function Fm(e){return e.trim()}function zn(e,t){return(e=t.exec(e))?e[0]:e}function se(e,t,n){return e.replace(t,n)}function Ls(e,t,n){return e.indexOf(t,n)}function Je(e,t){return e.charCodeAt(t)|0}function Ur(e,t,n){return e.slice(t,n)}function dn(e){return e.length}function Hm(e){return e.length}function ko(e,t){return t.push(e),e}function I7(e,t){return e.map(t).join("")}function yf(e,t){return e.filter(function(n){return!zn(n,t)})}var Ma=1,Bi=1,Um=0,rn=0,qe=0,qi="";function za(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Ma,column:Bi,length:s,return:"",siblings:a}}function qn(e,t){return Vd(za("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Jr(e){for(;e.root;)e=qn(e.root,{children:[e]});ko(e,e.siblings)}function T7(){return qe}function R7(){return qe=rn>0?Je(qi,--rn):0,Bi--,qe===10&&(Bi=1,Ma--),qe}function gn(){return qe=rn<Um?Je(qi,rn++):0,Bi++,qe===10&&(Bi=1,Ma++),qe}function rr(){return Je(qi,rn)}function ys(){return rn}function Aa(e,t){return Ur(qi,e,t)}function il(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function M7(e){return Ma=Bi=1,Um=dn(qi=e),rn=0,[]}function z7(e){return qi="",e}function Ec(e){return Fm(Aa(rn-1,Wd(e===91?e+2:e===40?e+1:e)))}function A7(e){for(;(qe=rr())&&qe<33;)gn();return il(e)>2||il(qe)>3?"":" "}function _7(e,t){for(;--t&&gn()&&!(qe<48||qe>102||qe>57&&qe<65||qe>70&&qe<97););return Aa(e,ys()+(t<6&&rr()==32&&gn()==32))}function Wd(e){for(;gn();)switch(qe){case e:return rn;case 34:case 39:e!==34&&e!==39&&Wd(qe);break;case 40:e===41&&Wd(e);break;case 92:gn();break}return rn}function N7(e,t){for(;gn()&&e+qe!==57;)if(e+qe===84&&rr()===47)break;return"/*"+Aa(t,rn-1)+"*"+gp(e===47?e:gn())}function O7(e){for(;!il(rr());)gn();return Aa(e,rn)}function D7(e){return z7(vs("",null,null,null,[""],e=M7(e),0,[0],e))}function vs(e,t,n,r,i,o,s,a,c){for(var u=0,p=0,f=s,h=0,g=0,b=0,w=1,C=1,m=1,x=0,L="",v=i,$=o,k=r,S=L;C;)switch(b=x,x=gn()){case 40:if(b!=108&&Je(S,f-1)==58){Ls(S+=se(Ec(x),"&","&\f"),"&\f",Bm(u?a[u-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:S+=Ec(x);break;case 9:case 10:case 13:case 32:S+=A7(b);break;case 92:S+=_7(ys()-1,7);continue;case 47:switch(rr()){case 42:case 47:ko(B7(N7(gn(),ys()),t,n,c),c),(il(b||1)==5||il(rr()||1)==5)&&dn(S)&&Ur(S,-1,void 0)!==" "&&(S+=" ");break;default:S+="/"}break;case 123*w:a[u++]=dn(S)*m;case 125*w:case 59:case 0:switch(x){case 0:case 125:C=0;case 59+p:m==-1&&(S=se(S,/\f/g,"")),g>0&&(dn(S)-f||w===0&&b===47)&&ko(g>32?wf(S+";",r,n,f-1,c):wf(se(S," ","")+";",r,n,f-2,c),c);break;case 59:S+=";";default:if(ko(k=vf(S,t,n,u,p,i,a,L,v=[],$=[],f,o),o),x===123)if(p===0)vs(S,t,k,k,v,o,f,a,$);else{switch(h){case 99:if(Je(S,3)===110)break;case 108:if(Je(S,2)===97)break;default:p=0;case 100:case 109:case 115:}p?vs(e,k,k,r&&ko(vf(e,k,k,0,0,i,a,L,i,v=[],f,$),$),i,$,f,a,r?v:$):vs(S,k,k,k,[""],$,0,a,$)}}u=p=g=0,w=m=1,L=S="",f=s;break;case 58:f=1+dn(S),g=b;default:if(w<1){if(x==123)--w;else if(x==125&&w++==0&&R7()==125)continue}switch(S+=gp(x),x*w){case 38:m=p>0?1:(S+="\f",-1);break;case 44:a[u++]=(dn(S)-1)*m,m=1;break;case 64:rr()===45&&(S+=Ec(gn())),h=rr(),p=f=dn(L=S+=O7(ys())),x++;break;case 45:b===45&&dn(S)==2&&(w=0)}}return o}function vf(e,t,n,r,i,o,s,a,c,u,p,f){for(var h=i-1,g=i===0?o:[""],b=Hm(g),w=0,C=0,m=0;w<r;++w)for(var x=0,L=Ur(e,h+1,h=Bm(C=s[w])),v=e;x<b;++x)(v=Fm(C>0?g[x]+" "+L:se(L,/&\f/g,g[x])))&&(c[m++]=v);return za(e,t,n,i===0?Ra:a,c,u,p,f)}function B7(e,t,n,r){return za(e,t,n,Om,gp(T7()),Ur(e,2,-2),0,r)}function wf(e,t,n,r,i){return za(e,t,n,hp,Ur(e,0,r),Ur(e,r+1,-1),r,i)}function Vm(e,t,n){switch(P7(e,t)){case 5103:return ge+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return ge+e+e;case 4855:return ge+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Ao+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ge+e+Ao+e+Te+e+e;case 5936:switch(Je(e,t+11)){case 114:return ge+e+Te+se(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ge+e+Te+se(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ge+e+Te+se(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ge+e+Te+e+e;case 6165:return ge+e+Te+"flex-"+e+e;case 5187:return ge+e+se(e,/(\w+).+(:[^]+)/,ge+"box-$1$2"+Te+"flex-$1$2")+e;case 5443:return ge+e+Te+"flex-item-"+se(e,/flex-|-self/g,"")+(zn(e,/flex-|baseline/)?"":Te+"grid-row-"+se(e,/flex-|-self/g,""))+e;case 4675:return ge+e+Te+"flex-line-pack"+se(e,/align-content|flex-|-self/g,"")+e;case 5548:return ge+e+Te+se(e,"shrink","negative")+e;case 5292:return ge+e+Te+se(e,"basis","preferred-size")+e;case 6060:return ge+"box-"+se(e,"-grow","")+ge+e+Te+se(e,"grow","positive")+e;case 4554:return ge+se(e,/([^-])(transform)/g,"$1"+ge+"$2")+e;case 6187:return se(se(se(e,/(zoom-|grab)/,ge+"$1"),/(image-set)/,ge+"$1"),e,"")+e;case 5495:case 3959:return se(e,/(image-set\([^]*)/,ge+"$1$`$1");case 4968:return se(se(e,/(.+:)(flex-)?(.*)/,ge+"box-pack:$3"+Te+"flex-pack:$3"),/space-between/,"justify")+ge+e+e;case 4200:if(!zn(e,/flex-|baseline/))return Te+"grid-column-align"+Ur(e,t)+e;break;case 2592:case 3360:return Te+se(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,zn(r.props,/grid-\w+-end/)})?~Ls(e+(n=n[t].value),"span",0)?e:Te+se(e,"-start","")+e+Te+"grid-row-span:"+(~Ls(n,"span",0)?zn(n,/\d+/):+zn(n,/\d+/)-+zn(e,/\d+/))+";":Te+se(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return zn(r.props,/grid-\w+-start/)})?e:Te+se(se(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return se(e,/(.+)-inline(.+)/,ge+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(dn(e)-1-t>6)switch(Je(e,t+1)){case 109:if(Je(e,t+4)!==45)break;case 102:return se(e,/(.+:)(.+)-([^]+)/,"$1"+ge+"$2-$3$1"+Ao+(Je(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ls(e,"stretch",0)?Vm(se(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return se(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,c,u){return Te+i+":"+o+u+(s?Te+i+"-span:"+(a?c:+c-+o)+u:"")+e});case 4949:if(Je(e,t+6)===121)return se(e,":",":"+ge)+e;break;case 6444:switch(Je(e,Je(e,14)===45?18:11)){case 120:return se(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ge+(Je(e,14)===45?"inline-":"")+"box$3$1"+ge+"$2$3$1"+Te+"$2box$3")+e;case 100:return se(e,":",":"+Te)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return se(e,"scroll-","scroll-snap-")+e}return e}function ta(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function F7(e,t,n,r){switch(e.type){case E7:if(e.children.length)break;case C7:case $7:case hp:return e.return=e.return||e.value;case Om:return"";case Dm:return e.return=e.value+"{"+ta(e.children,r)+"}";case Ra:if(!dn(e.value=e.props.join(",")))return""}return dn(n=ta(e.children,r))?e.return=e.value+"{"+n+"}":""}function H7(e){var t=Hm(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function U7(e){return function(t){t.root||(t=t.return)&&e(t)}}function V7(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case hp:e.return=Vm(e.value,e.length,n);return;case Dm:return ta([qn(e,{value:se(e.value,"@","@"+ge)})],r);case Ra:if(e.length)return I7(n=e.props,function(i){switch(zn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Jr(qn(e,{props:[se(i,/:(read-\w+)/,":"+Ao+"$1")]})),Jr(qn(e,{props:[i]})),Vd(e,{props:yf(n,r)});break;case"::placeholder":Jr(qn(e,{props:[se(i,/:(plac\w+)/,":"+ge+"input-$1")]})),Jr(qn(e,{props:[se(i,/:(plac\w+)/,":"+Ao+"$1")]})),Jr(qn(e,{props:[se(i,/:(plac\w+)/,Te+"input-$1")]})),Jr(qn(e,{props:[i]})),Vd(e,{props:yf(n,r)});break}return""})}}var W7={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},At={},Fi=typeof process<"u"&&At!==void 0&&(At.REACT_APP_SC_ATTR||At.SC_ATTR)||"data-styled",Wm="active",Km="data-styled-version",_a="6.3.8",mp=`/*!sc*/
`,na=typeof window<"u"&&typeof document<"u",En=We.createContext===void 0,K7=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&At!==void 0&&At.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&At.REACT_APP_SC_DISABLE_SPEEDY!==""?At.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&At.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&At!==void 0&&At.SC_DISABLE_SPEEDY!==void 0&&At.SC_DISABLE_SPEEDY!==""&&At.SC_DISABLE_SPEEDY!=="false"&&At.SC_DISABLE_SPEEDY),Y7={},Na=Object.freeze([]),Hi=Object.freeze({});function Ym(e,t,n){return n===void 0&&(n=Hi),e.theme!==n.theme&&e.theme||t||n.theme}var Gm=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),G7=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Z7=/(^-|-$)/g;function bf(e){return e.replace(G7,"-").replace(Z7,"")}var q7=/(a)(d)/gi,kf=function(e){return String.fromCharCode(e+(e>25?39:97))};function Kd(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=kf(t%52)+n;return(kf(t%52)+n).replace(q7,"$1-$2")}var Pc,yi=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Zm=function(e){return yi(5381,e)};function xp(e){return Kd(Zm(e)>>>0)}function Q7(e){return e.displayName||e.name||"Component"}function Ic(e){return typeof e=="string"&&!0}var qm=typeof Symbol=="function"&&Symbol.for,Qm=qm?Symbol.for("react.memo"):60115,X7=qm?Symbol.for("react.forward_ref"):60112,J7={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},e8={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Xm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},t8=((Pc={})[X7]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Pc[Qm]=Xm,Pc);function jf(e){return("type"in(t=e)&&t.type.$$typeof)===Qm?Xm:"$$typeof"in e?t8[e.$$typeof]:J7;var t}var n8=Object.defineProperty,r8=Object.getOwnPropertyNames,Sf=Object.getOwnPropertySymbols,i8=Object.getOwnPropertyDescriptor,o8=Object.getPrototypeOf,Cf=Object.prototype;function Jm(e,t,n){if(typeof t!="string"){if(Cf){var r=o8(t);r&&r!==Cf&&Jm(e,r,n)}var i=r8(t);Sf&&(i=i.concat(Sf(t)));for(var o=jf(e),s=jf(t),a=0;a<i.length;++a){var c=i[a];if(!(c in e8||n&&n[c]||s&&c in s||o&&c in o)){var u=i8(t,c);try{n8(e,c,u)}catch{}}}}return e}function Vr(e){return typeof e=="function"}function Lp(e){return typeof e=="object"&&"styledComponentId"in e}function Rr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ra(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function ol(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Yd(e,t,n){if(n===void 0&&(n=!1),!n&&!ol(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Yd(e[r],t[r]);else if(ol(t))for(var r in t)e[r]=Yd(e[r],t[r]);return e}function yp(e,t){Object.defineProperty(e,"toString",{value:t})}function Wr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var l8=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Wr(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),c=(s=0,n.length);s<c;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(mp);return n},e}(),ws=new Map,ia=new Map,bs=1,vi=function(e){if(ws.has(e))return ws.get(e);for(;ia.has(bs);)bs++;var t=bs++;return ws.set(e,t),ia.set(t,e),t},s8=function(e,t){bs=t+1,ws.set(e,t),ia.set(t,e)},a8="style[".concat(Fi,"][").concat(Km,'="').concat(_a,'"]'),c8=new RegExp("^".concat(Fi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),u8=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},d8=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(mp),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var c=a.match(c8);if(c){var u=0|parseInt(c[1],10),p=c[2];u!==0&&(s8(p,u),u8(e,p,c[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}},$f=function(e){for(var t=document.querySelectorAll(a8),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Fi)!==Wm&&(d8(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function p8(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var e3=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var c=Array.from(a.querySelectorAll("style[".concat(Fi,"]")));return c[c.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Fi,Wm),r.setAttribute(Km,_a);var s=p8();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},f8=function(){function e(t){this.element=e3(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Wr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),h8=function(){function e(t){this.element=e3(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),g8=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Ef=na,m8={isServer:!na,useCSSOMInjection:!K7},oa=function(){function e(t,n,r){t===void 0&&(t=Hi),n===void 0&&(n={});var i=this;this.options=rt(rt({},m8),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&na&&Ef&&(Ef=!1,$f(this)),yp(this,function(){return function(o){for(var s=o.getTag(),a=s.length,c="",u=function(f){var h=function(m){return ia.get(m)}(f);if(h===void 0)return"continue";var g=o.names.get(h),b=s.getGroup(f);if(g===void 0||!g.size||b.length===0)return"continue";var w="".concat(Fi,".g").concat(f,'[id="').concat(h,'"]'),C="";g!==void 0&&g.forEach(function(m){m.length>0&&(C+="".concat(m,","))}),c+="".concat(b).concat(w,'{content:"').concat(C,'"}').concat(mp)},p=0;p<a;p++)u(p);return c}(i)})}return e.registerId=function(t){return vi(t)},e.prototype.rehydrate=function(){!this.server&&na&&$f(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(rt(rt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new g8(i):r?new f8(i):new h8(i)}(this.options),new l8(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(vi(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(vi(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(vi(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),x8=/&/g,wi=47;function Pf(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var s=e.charCodeAt(o);if(r!==0||i||s!==wi||e.charCodeAt(o+1)!==42)if(i)s===42&&e.charCodeAt(o+1)===wi&&(i=!1,o++);else if(s!==34&&s!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(s===123)n++;else if(s===125&&--n<0)return!0}}else r===0?r=s:r===s&&(r=0);else i=!0,o++}return n!==0||r!==0}function t3(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=t3(n.children,t)),n})}function L8(e){var t,n,r,i=Hi,o=i.options,s=o===void 0?Hi:o,a=i.plugins,c=a===void 0?Na:a,u=function(h,g,b){return b.startsWith(n)&&b.endsWith(n)&&b.replaceAll(n,"").length>0?".".concat(t):h},p=c.slice();p.push(function(h){h.type===Ra&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(x8,n).replace(r,u))}),s.prefix&&p.push(V7),p.push(F7);var f=function(h,g,b,w){g===void 0&&(g=""),b===void 0&&(b=""),w===void 0&&(w="&"),t=w,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var C=function(L){if(!Pf(L))return L;for(var v=L.length,$="",k=0,S=0,M=0,T=!1,R=0;R<v;R++){var I=L.charCodeAt(R);if(M!==0||T||I!==wi||L.charCodeAt(R+1)!==42)if(T)I===42&&L.charCodeAt(R+1)===wi&&(T=!1,R++);else if(I!==34&&I!==39||R!==0&&L.charCodeAt(R-1)===92){if(M===0)if(I===123)S++;else if(I===125){if(--S<0){for(var P=R+1;P<v;){var _=L.charCodeAt(P);if(_===59||_===10)break;P++}P<v&&L.charCodeAt(P)===59&&P++,S=0,R=P-1,k=P;continue}S===0&&($+=L.substring(k,R+1),k=R+1)}else I===59&&S===0&&($+=L.substring(k,R+1),k=R+1)}else M===0?M=I:M===I&&(M=0);else T=!0,R++}if(k<v){var B=L.substring(k);Pf(B)||($+=B)}return $}(function(L){if(L.indexOf("//")===-1)return L;for(var v=L.length,$=[],k=0,S=0,M=0,T=0;S<v;){var R=L.charCodeAt(S);if(R!==34&&R!==39||S!==0&&L.charCodeAt(S-1)===92)if(M===0)if(R===40&&S>=3&&(32|L.charCodeAt(S-1))==108&&(32|L.charCodeAt(S-2))==114&&(32|L.charCodeAt(S-3))==117)T=1,S++;else if(T>0)R===41?T--:R===40&&T++,S++;else if(R===wi&&S+1<v&&L.charCodeAt(S+1)===wi){for(S>k&&$.push(L.substring(k,S));S<v&&L.charCodeAt(S)!==10;)S++;k=S}else S++;else S++;else M===0?M=R:M===R&&(M=0),S++}return k===0?L:(k<v&&$.push(L.substring(k)),$.join(""))}(h)),m=D7(b||g?"".concat(b," ").concat(g," { ").concat(C," }"):C);s.namespace&&(m=t3(m,s.namespace));var x=[];return ta(m,H7(p.concat(U7(function(L){return x.push(L)})))),x};return f.hash=c.length?c.reduce(function(h,g){return g.name||Wr(15),yi(h,g.name)},5381).toString():"",f}var y8=new oa,Gd=L8(),Zd={shouldForwardProp:void 0,styleSheet:y8,stylis:Gd},n3=En?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(Zd)}}:We.createContext(Zd);n3.Consumer;En||We.createContext(void 0);function qd(){return En?Zd:We.useContext(n3)}var r3=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Gd);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,yp(this,function(){throw Wr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Gd),this.name+t.hash},e}();function v8(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in W7||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var w8=function(e){return e>="A"&&e<="Z"};function If(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;w8(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var i3=function(e){return e==null||e===!1||e===""},o3=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!i3(r)&&(Array.isArray(r)&&r.isCss||Vr(r)?t.push("".concat(If(n),":"),r,";"):ol(r)?t.push.apply(t,Di(Di(["".concat(n," {")],o3(r),!1),["}"],!1)):t.push("".concat(If(n),": ").concat(v8(n,r),";")))}return t};function pr(e,t,n,r){if(i3(e))return[];if(Lp(e))return[".".concat(e.styledComponentId)];if(Vr(e)){if(!Vr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return pr(i,t,n,r)}var o;return e instanceof r3?n?(e.inject(n,r),[e.getName(r)]):[e]:ol(e)?o3(e):Array.isArray(e)?Array.prototype.concat.apply(Na,e.map(function(s){return pr(s,t,n,r)})):[e.toString()]}function l3(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Vr(n)&&!Lp(n))return!1}return!0}var b8=Zm(_a),k8=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&l3(t),this.componentId=n,this.baseHash=yi(b8,n),this.baseStyle=r,oa.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Rr(i,this.staticRulesId);else{var o=ra(pr(this.rules,t,n,r)),s=Kd(yi(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=Rr(i,s),this.staticRulesId=s}else{for(var c=yi(this.baseHash,r.hash),u="",p=0;p<this.rules.length;p++){var f=this.rules[p];if(typeof f=="string")u+=f;else if(f){var h=ra(pr(f,t,n,r));c=yi(c,h+p),u+=h}}if(u){var g=Kd(c>>>0);if(!n.hasNameForId(this.componentId,g)){var b=r(u,".".concat(g),void 0,this.componentId);n.insertRules(this.componentId,g,b)}i=Rr(i,g)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(vi(this.componentId)):""}},e}(),ll=En?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(void 0)}}:We.createContext(void 0);ll.Consumer;function j8(e){if(En)return e.children;var t=We.useContext(ll),n=We.useMemo(function(){return function(r,i){if(!r)throw Wr(14);if(Vr(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw Wr(8);return i?rt(rt({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?We.createElement(ll.Provider,{value:n},e.children):null}var Tc={};function S8(e,t,n){var r=Lp(e),i=e,o=!Ic(e),s=t.attrs,a=s===void 0?Na:s,c=t.componentId,u=c===void 0?function(v,$){var k=typeof v!="string"?"sc":bf(v);Tc[k]=(Tc[k]||0)+1;var S="".concat(k,"-").concat(xp(_a+k+Tc[k]));return $?"".concat($,"-").concat(S):S}(t.displayName,t.parentComponentId):c,p=t.displayName,f=p===void 0?function(v){return Ic(v)?"styled.".concat(v):"Styled(".concat(Q7(v),")")}(e):p,h=t.displayName&&t.componentId?"".concat(bf(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,b=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var C=t.shouldForwardProp;b=function(v,$){return w(v,$)&&C(v,$)}}else b=w}var m=new k8(n,h,r?i.componentStyle:void 0);function x(v,$){return function(k,S,M){var T=k.attrs,R=k.componentStyle,I=k.defaultProps,P=k.foldedComponentIds,_=k.styledComponentId,B=k.target,H=En?void 0:We.useContext(ll),W=qd(),A=k.shouldForwardProp||W.shouldForwardProp,z=Ym(S,H,I)||Hi,N=function(te,ue,Le){for(var de,fe=rt(rt({},ue),{className:void 0,theme:Le}),we=0;we<te.length;we+=1){var Ee=Vr(de=te[we])?de(fe):de;for(var Ae in Ee)Ae==="className"?fe.className=Rr(fe.className,Ee[Ae]):Ae==="style"?fe.style=rt(rt({},fe.style),Ee[Ae]):fe[Ae]=Ee[Ae]}return"className"in ue&&typeof ue.className=="string"&&(fe.className=Rr(fe.className,ue.className)),fe}(T,S,z),j=N.as||B,Q={};for(var G in N)N[G]===void 0||G[0]==="$"||G==="as"||G==="theme"&&N.theme===z||(G==="forwardedAs"?Q.as=N.forwardedAs:A&&!A(G,j)||(Q[G]=N[G]));var E=function(te,ue){var Le=qd(),de=te.generateAndInjectStyles(ue,Le.styleSheet,Le.stylis);return de}(R,N),q=E.className,ee=E.css,J=Rr(P,_);q&&(J+=" "+q),N.className&&(J+=" "+N.className),Q[Ic(j)&&!Gm.has(j)?"class":"className"]=J,M&&(Q.ref=M);var Y=y.createElement(j,Q);return En&&ee?We.createElement(We.Fragment,null,We.createElement("style",{precedence:"styled-components",href:"sc-".concat(_,"-").concat(q),children:ee}),Y):Y}(L,v,$)}x.displayName=f;var L=We.forwardRef(x);return L.attrs=g,L.componentStyle=m,L.displayName=f,L.shouldForwardProp=b,L.foldedComponentIds=r?Rr(i.foldedComponentIds,i.styledComponentId):"",L.styledComponentId=h,L.target=r?i.target:e,Object.defineProperty(L,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function($){for(var k=[],S=1;S<arguments.length;S++)k[S-1]=arguments[S];for(var M=0,T=k;M<T.length;M++)Yd($,T[M],!0);return $}({},i.defaultProps,v):v}}),yp(L,function(){return".".concat(L.styledComponentId)}),o&&Jm(L,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),L}function Tf(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Rf=function(e){return Object.assign(e,{isCss:!0})};function Me(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Vr(e)||ol(e))return Rf(pr(Tf(Na,Di([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?pr(r):Rf(pr(Tf(r,t)))}function Qd(e,t,n){if(n===void 0&&(n=Hi),!t)throw Wr(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,Me.apply(void 0,Di([i],o,!1)))};return r.attrs=function(i){return Qd(e,t,rt(rt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Qd(e,t,rt(rt({},n),i))},r}var s3=function(e){return Qd(S8,e)},d=s3;Gm.forEach(function(e){d[e]=s3(e)});var C8=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=l3(t),oa.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(ra(pr(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&oa.registerId(this.componentId+t);var o=this.componentId+t;this.isStatic?r.hasNameForId(o,o)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function $8(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Me.apply(void 0,Di([e],t,!1)),i="sc-global-".concat(xp(JSON.stringify(r))),o=new C8(r,i),s=new WeakMap,a=function(c){var u=qd(),p=En?void 0:We.useContext(ll),f=s.get(u.styleSheet);if(f===void 0&&(f=u.styleSheet.allocateGSInstance(i),s.set(u.styleSheet,f)),(typeof window>"u"||!u.styleSheet.server)&&function(C,m,x,L,v){if(o.isStatic)o.renderStyles(C,Y7,x,v);else{var $=rt(rt({},m),{theme:Ym(m,L,a.defaultProps)});o.renderStyles(C,$,x,v)}}(f,c,u.styleSheet,p,u.stylis),!En){var h=We.useRef(!0);We.useLayoutEffect(function(){return h.current=!1,function(){h.current=!0,queueMicrotask(function(){h.current&&(o.removeStyles(f,u.styleSheet),typeof document<"u"&&document.querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(C){return C.remove()}))})}},[f,u.styleSheet])}if(En){var g=i+f,b=typeof window>"u"?u.styleSheet.getTag().getGroup(vi(g)):"";if(b){var w="".concat(i,"-").concat(f);return We.createElement("style",{key:w,"data-styled-global":i,precedence:"styled-components",href:w,children:b})}}return null};return We.memo(a)}function Ke(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ra(Me.apply(void 0,Di([e],t,!1))),i=xp(r);return new r3(i,r)}const E8={},Mf=e=>{let t;const n=new Set,r=(p,f)=>{const h=typeof p=="function"?p(t):p;if(!Object.is(h,t)){const g=t;t=f??(typeof h!="object"||h===null)?h:Object.assign({},t,h),n.forEach(b=>b(t,g))}},i=()=>t,c={setState:r,getState:i,getInitialState:()=>u,subscribe:p=>(n.add(p),()=>n.delete(p)),destroy:()=>{(E8?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,i,c);return c},P8=e=>e?Mf(e):Mf;var a3={exports:{}},c3={},u3={exports:{}},d3={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ui=y;function I8(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var T8=typeof Object.is=="function"?Object.is:I8,R8=Ui.useState,M8=Ui.useEffect,z8=Ui.useLayoutEffect,A8=Ui.useDebugValue;function _8(e,t){var n=t(),r=R8({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return z8(function(){i.value=n,i.getSnapshot=t,Rc(i)&&o({inst:i})},[e,n,t]),M8(function(){return Rc(i)&&o({inst:i}),e(function(){Rc(i)&&o({inst:i})})},[e]),A8(n),n}function Rc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!T8(e,n)}catch{return!0}}function N8(e,t){return t()}var O8=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?N8:_8;d3.useSyncExternalStore=Ui.useSyncExternalStore!==void 0?Ui.useSyncExternalStore:O8;u3.exports=d3;var D8=u3.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oa=y,B8=D8;function F8(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var H8=typeof Object.is=="function"?Object.is:F8,U8=B8.useSyncExternalStore,V8=Oa.useRef,W8=Oa.useEffect,K8=Oa.useMemo,Y8=Oa.useDebugValue;c3.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=V8(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=K8(function(){function c(g){if(!u){if(u=!0,p=g,g=r(g),i!==void 0&&s.hasValue){var b=s.value;if(i(b,g))return f=b}return f=g}if(b=f,H8(p,g))return b;var w=r(g);return i!==void 0&&i(b,w)?(p=g,b):(p=g,f=w)}var u=!1,p,f,h=n===void 0?null:n;return[function(){return c(t())},h===null?void 0:function(){return c(h())}]},[t,n,r,i]);var a=U8(e,o[0],o[1]);return W8(function(){s.hasValue=!0,s.value=a},[a]),Y8(a),a};a3.exports=c3;var G8=a3.exports;const Z8=ga(G8),p3={},{useDebugValue:q8}=We,{useSyncExternalStoreWithSelector:Q8}=Z8;let zf=!1;const X8=e=>e;function J8(e,t=X8,n){(p3?"production":void 0)!=="production"&&n&&!zf&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),zf=!0);const r=Q8(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return q8(r),r}const Af=e=>{(p3?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?P8(e):e,n=(r,i)=>J8(t,r,i);return Object.assign(n,t),n},gl=e=>e?Af(e):Af;function Se(){const e="http://localhost:8080";if(String(e).trim()!=="")return String(e).replace(/\/$/,"")}function vp(){const e=Se();if(!e)throw new Error("VITE_API_BASE_URL이 필요합니다. .env에 백엔드 주소를 설정하세요.");return e}let Mc=class extends Error{constructor(t,n){super(t),this.status=n,this.name="HttpError"}};class eL{constructor(t){this.baseUrl=t}url(t){return`${this.baseUrl}${t.startsWith("/")?t:`/${t}`}`}async findAll(){const t=await fetch(this.url("/experts"));if(!t.ok)throw new Mc("GET /experts 실패",t.status);return t.json()}async findById(t){const n=await fetch(this.url(`/experts/${encodeURIComponent(t)}`));if(n.status===404)return null;if(!n.ok)throw new Mc("GET /experts/:id 실패",n.status);return n.json()}async findByRegionId(t){const n=t==="all"?"":`?regionId=${encodeURIComponent(t)}`,r=await fetch(this.url(`/experts${n}`));if(!r.ok)throw new Mc("GET /experts?regionId 실패",r.status);return r.json()}}let zc=null;function f3(){return zc||(zc=new eL(vp())),zc}const tL=()=>f3().findAll(),h3=e=>f3().findById(e);function sl(){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Seoul"}).format(new Date)}function ks(e){return!!(e&&/^\d{4}-\d{2}-\d{2}$/.test(e))}function Xd(e,t=sl()){var o,s;const n=e.kind??"program",r=(o=e.startDate)==null?void 0:o.trim(),i=(s=e.endDate)==null?void 0:s.trim();return n==="event"?ks(r)&&ks(i)?t>i?"past":"ongoing":e.status==="past"?"past":"ongoing":ks(i)&&t>i?"past":"ongoing"}function nL(e){return(e??[]).map(t=>({...t,status:Xd(t)}))}function Da(e){var t;return(t=e.programs)!=null&&t.length?{...e,programs:nL(e.programs)}:e}function rL(e,t=sl()){var r;if(e.status==="past")return"완료";const n=(r=e.startDate)==null?void 0:r.trim();return ks(n)&&t<n?"예정":"진행 중"}function iL(e,t){const n=e==null?void 0:e.trim(),r=t==null?void 0:t.trim();return n&&r?n===r?n:`${n} ~ ${r}`:n?`${n} ~`:r?`~ ${r}`:null}function oL(e=sl()){const t=new Date(`${e}T12:00:00+09:00`),n=new Date(t);n.setDate(n.getDate()+6);const r=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Seoul"}).format(n);return{startDate:e,endDate:r}}function g3(e){return Da(e)}function _f(e){return e.map(g3)}let Ac=class extends Error{constructor(t,n){super(t),this.status=n,this.name="HttpError"}};class lL{constructor(t){this.baseUrl=t}url(t){return`${this.baseUrl}${t.startsWith("/")?t:`/${t}`}`}async findAll(){const t=await fetch(this.url("/places"));if(!t.ok)throw new Ac("GET /places 실패",t.status);return _f(await t.json())}async findById(t){const n=await fetch(this.url(`/places/${encodeURIComponent(t)}`));if(n.status===404)return null;if(!n.ok)throw new Ac("GET /places/:id 실패",n.status);return g3(await n.json())}async findByRegionId(t){const n=t==="all"?"":`?regionId=${encodeURIComponent(t)}`,r=await fetch(this.url(`/places${n}`));if(!r.ok)throw new Ac("GET /places?regionId 실패",r.status);return _f(await r.json())}}let _c=null;function m3(){return _c||(_c=new lL(vp())),_c}const sL=()=>m3().findAll(),x3=e=>m3().findById(e);class aL extends Error{constructor(t,n){super(t),this.status=n,this.name="HttpError"}}class cL{constructor(t){this.baseUrl=t}url(t){return`${this.baseUrl}${t.startsWith("/")?t:`/${t}`}`}async findAll(){const t=await fetch(this.url("/regions"));if(!t.ok)throw new aL("GET /regions 실패",t.status);return t.json()}}let Nc=null;function uL(){return Nc||(Nc=new cL(vp())),Nc}const dL=()=>uL().findAll();async function Oc(e,t){try{return{ok:!0,value:await e()}}catch{return{ok:!1}}}const Xt=gl(e=>({places:[],regions:[],experts:[],catalogReady:!1,catalogError:null,clearCatalogError:()=>e({catalogError:null}),hydrate:async()=>{if(!Se()){e({places:[],regions:[],experts:[],catalogReady:!0,catalogError:null});return}e({catalogReady:!1,catalogError:null});const[t,n,r]=await Promise.all([Oc(()=>sL()),Oc(()=>dL()),Oc(()=>tL())]),i=!t.ok||!n.ok||!r.ok;e({places:t.ok?t.value:[],regions:n.ok?n.value:[],experts:r.ok?r.value:[],catalogReady:!0,catalogError:i?"서버에서 정보를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.":null})}})),pL=d.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 16px;
  padding-top: calc(12px + env(safe-area-inset-top, 0px));
  background: ${({theme:e})=>e.colors.primary50};
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary200};
  color: ${({theme:e})=>e.colors.text900};
`,fL=d.p`
  margin: 0;
  flex: 1;
  min-width: 0;
  font-size: 0.92rem;
  line-height: 1.45;
`,hL=d.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,gL=d.button`
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
`,mL=d.button`
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
`,xL=()=>{const e=Xt(i=>i.catalogError),t=Xt(i=>i.catalogReady),n=Xt(i=>i.clearCatalogError),r=Xt(i=>i.hydrate);return e?l.jsxs(pL,{role:"alert","aria-live":"assertive",children:[l.jsx(fL,{children:e}),l.jsxs(hL,{children:[l.jsx(gL,{type:"button",disabled:!t,onClick:()=>void r(),children:"다시 시도"}),l.jsx(mL,{type:"button",onClick:n,"aria-label":"오류 안내 닫기",children:"×"})]})]}):null};/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function al(){return al=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},al.apply(this,arguments)}var Mr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Mr||(Mr={}));const Nf="popstate";function LL(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Jd("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:la(i)}return vL(t,n,null,e)}function tt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function wp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function yL(){return Math.random().toString(36).substr(2,8)}function Of(e,t){return{usr:e.state,key:e.key,idx:t}}function Jd(e,t,n,r){return n===void 0&&(n=null),al({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ml(t):t,{state:n,key:t&&t.key||r||yL()})}function la(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ml(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function vL(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Mr.Pop,c=null,u=p();u==null&&(u=0,s.replaceState(al({},s.state,{idx:u}),""));function p(){return(s.state||{idx:null}).idx}function f(){a=Mr.Pop;let C=p(),m=C==null?null:C-u;u=C,c&&c({action:a,location:w.location,delta:m})}function h(C,m){a=Mr.Push;let x=Jd(w.location,C,m);u=p()+1;let L=Of(x,u),v=w.createHref(x);try{s.pushState(L,"",v)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;i.location.assign(v)}o&&c&&c({action:a,location:w.location,delta:1})}function g(C,m){a=Mr.Replace;let x=Jd(w.location,C,m);u=p();let L=Of(x,u),v=w.createHref(x);s.replaceState(L,"",v),o&&c&&c({action:a,location:w.location,delta:0})}function b(C){let m=i.location.origin!=="null"?i.location.origin:i.location.href,x=typeof C=="string"?C:la(C);return x=x.replace(/ $/,"%20"),tt(m,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,m)}let w={get action(){return a},get location(){return e(i,s)},listen(C){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Nf,f),c=C,()=>{i.removeEventListener(Nf,f),c=null}},createHref(C){return t(i,C)},createURL:b,encodeLocation(C){let m=b(C);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:g,go(C){return s.go(C)}};return w}var Df;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Df||(Df={}));function wL(e,t,n){return n===void 0&&(n="/"),bL(e,t,n)}function bL(e,t,n,r){let i=typeof t=="string"?ml(t):t,o=Vi(i.pathname||"/",n);if(o==null)return null;let s=L3(e);kL(s);let a=null;for(let c=0;a==null&&c<s.length;++c){let u=zL(o);a=RL(s[c],u)}return a}function L3(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let c={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};c.relativePath.startsWith("/")&&(tt(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=fr([r,c.relativePath]),p=n.concat(c);o.children&&o.children.length>0&&(tt(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),L3(o.children,t,p,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:IL(u,o.index),routesMeta:p})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let c of y3(o.path))i(o,s,c)}),t}function y3(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=y3(r.join("/")),a=[];return a.push(...s.map(c=>c===""?o:[o,c].join("/"))),i&&a.push(...s),a.map(c=>e.startsWith("/")&&c===""?"/":c)}function kL(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:TL(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const jL=/^:[\w-]+$/,SL=3,CL=2,$L=1,EL=10,PL=-2,Bf=e=>e==="*";function IL(e,t){let n=e.split("/"),r=n.length;return n.some(Bf)&&(r+=PL),t&&(r+=CL),n.filter(i=>!Bf(i)).reduce((i,o)=>i+(jL.test(o)?SL:o===""?$L:EL),r)}function TL(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function RL(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let c=r[a],u=a===r.length-1,p=o==="/"?t:t.slice(o.length)||"/",f=e1({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},p),h=c.route;if(!f)return null;Object.assign(i,f.params),s.push({params:i,pathname:fr([o,f.pathname]),pathnameBase:DL(fr([o,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(o=fr([o,f.pathnameBase]))}return s}function e1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ML(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,p,f)=>{let{paramName:h,isOptional:g}=p;if(h==="*"){let w=a[f]||"";s=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const b=a[f];return g&&!b?u[h]=void 0:u[h]=(b||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function ML(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),wp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function zL(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return wp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Vi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const AL=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_L=e=>AL.test(e);function NL(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ml(e):e,o;if(n)if(_L(n))o=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),wp(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?o=Ff(n.substring(1),"/"):o=Ff(n,t)}else o=t;return{pathname:o,search:BL(r),hash:FL(i)}}function Ff(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Dc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function OL(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function bp(e,t){let n=OL(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function kp(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ml(e):(i=al({},e),tt(!i.pathname||!i.pathname.includes("?"),Dc("?","pathname","search",i)),tt(!i.pathname||!i.pathname.includes("#"),Dc("#","pathname","hash",i)),tt(!i.search||!i.search.includes("#"),Dc("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}a=f>=0?t[f]:"/"}let c=NL(i,a),u=s&&s!=="/"&&s.endsWith("/"),p=(o||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||p)&&(c.pathname+="/"),c}const fr=e=>e.join("/").replace(/\/\/+/g,"/"),DL=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),BL=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,FL=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function HL(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const v3=["post","put","patch","delete"];new Set(v3);const UL=["get",...v3];new Set(UL);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sa(){return sa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sa.apply(this,arguments)}const Ba=y.createContext(null),w3=y.createContext(null),Wn=y.createContext(null),jp=y.createContext(null),In=y.createContext({outlet:null,matches:[],isDataRoute:!1}),b3=y.createContext(null);function VL(e,t){let{relative:n}=t===void 0?{}:t;Qi()||tt(!1);let{basename:r,navigator:i}=y.useContext(Wn),{hash:o,pathname:s,search:a}=Fa(e,{relative:n}),c=s;return r!=="/"&&(c=s==="/"?r:fr([r,s])),i.createHref({pathname:c,search:a,hash:o})}function Qi(){return y.useContext(jp)!=null}function Kn(){return Qi()||tt(!1),y.useContext(jp).location}function k3(e){y.useContext(Wn).static||y.useLayoutEffect(e)}function mt(){let{isDataRoute:e}=y.useContext(In);return e?o9():WL()}function WL(){Qi()||tt(!1);let e=y.useContext(Ba),{basename:t,future:n,navigator:r}=y.useContext(Wn),{matches:i}=y.useContext(In),{pathname:o}=Kn(),s=JSON.stringify(bp(i,n.v7_relativeSplatPath)),a=y.useRef(!1);return k3(()=>{a.current=!0}),y.useCallback(function(u,p){if(p===void 0&&(p={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=kp(u,JSON.parse(s),o,p.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:fr([t,f.pathname])),(p.replace?r.replace:r.push)(f,p.state,p)},[t,r,s,o,e])}const KL=y.createContext(null);function YL(e){let t=y.useContext(In).outlet;return t&&y.createElement(KL.Provider,{value:e},t)}function xl(){let{matches:e}=y.useContext(In),t=e[e.length-1];return t?t.params:{}}function Fa(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=y.useContext(Wn),{matches:i}=y.useContext(In),{pathname:o}=Kn(),s=JSON.stringify(bp(i,r.v7_relativeSplatPath));return y.useMemo(()=>kp(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function GL(e,t){return ZL(e)}function ZL(e,t,n,r){Qi()||tt(!1);let{navigator:i}=y.useContext(Wn),{matches:o}=y.useContext(In),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let u=Kn(),p;p=u;let f=p.pathname||"/",h=f;if(c!=="/"){let w=c.replace(/^\//,"").split("/");h="/"+f.replace(/^\//,"").split("/").slice(w.length).join("/")}let g=wL(e,{pathname:h});return e9(g&&g.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:fr([c,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?c:fr([c,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),o,n,r)}function qL(){let e=i9(),t=HL(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),n?y.createElement("pre",{style:i},n):null,null)}const QL=y.createElement(qL,null);class XL extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?y.createElement(In.Provider,{value:this.props.routeContext},y.createElement(b3.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function JL(e){let{routeContext:t,match:n,children:r}=e,i=y.useContext(Ba);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(In.Provider,{value:t},r)}function e9(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let p=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);p>=0||tt(!1),s=s.slice(0,Math.min(s.length,p+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<s.length;p++){let f=s[p];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=p),f.route.id){let{loaderData:h,errors:g}=n,b=f.route.loader&&h[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||b){c=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((p,f,h)=>{let g,b=!1,w=null,C=null;n&&(g=a&&f.route.id?a[f.route.id]:void 0,w=f.route.errorElement||QL,c&&(u<0&&h===0?(l9("route-fallback"),b=!0,C=null):u===h&&(b=!0,C=f.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,h+1)),x=()=>{let L;return g?L=w:b?L=C:f.route.Component?L=y.createElement(f.route.Component,null):f.route.element?L=f.route.element:L=p,y.createElement(JL,{match:f,routeContext:{outlet:p,matches:m,isDataRoute:n!=null},children:L})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?y.createElement(XL,{location:n.location,revalidation:n.revalidation,component:w,error:g,children:x(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):x()},null)}var j3=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(j3||{}),S3=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(S3||{});function t9(e){let t=y.useContext(Ba);return t||tt(!1),t}function n9(e){let t=y.useContext(w3);return t||tt(!1),t}function r9(e){let t=y.useContext(In);return t||tt(!1),t}function C3(e){let t=r9(),n=t.matches[t.matches.length-1];return n.route.id||tt(!1),n.route.id}function i9(){var e;let t=y.useContext(b3),n=n9(S3.UseRouteError),r=C3();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function o9(){let{router:e}=t9(j3.UseNavigateStable),t=C3(),n=y.useRef(!1);return k3(()=>{n.current=!0}),y.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,sa({fromRouteId:t},o)))},[e,t])}const Hf={};function l9(e,t,n){Hf[e]||(Hf[e]=!0)}function s9(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function a9(e){let{to:t,replace:n,state:r,relative:i}=e;Qi()||tt(!1);let{future:o,static:s}=y.useContext(Wn),{matches:a}=y.useContext(In),{pathname:c}=Kn(),u=mt(),p=kp(t,bp(a,o.v7_relativeSplatPath),c,i==="path"),f=JSON.stringify(p);return y.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:i}),[u,f,i,n,r]),null}function Sp(e){return YL(e.context)}function c9(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Mr.Pop,navigator:o,static:s=!1,future:a}=e;Qi()&&tt(!1);let c=t.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:c,navigator:o,static:s,future:sa({v7_relativeSplatPath:!1},a)}),[c,a,o,s]);typeof r=="string"&&(r=ml(r));let{pathname:p="/",search:f="",hash:h="",state:g=null,key:b="default"}=r,w=y.useMemo(()=>{let C=Vi(p,c);return C==null?null:{location:{pathname:C,search:f,hash:h,state:g,key:b},navigationType:i}},[c,p,f,h,g,b,i]);return w==null?null:y.createElement(Wn.Provider,{value:u},y.createElement(jp.Provider,{children:n,value:w}))}new Promise(()=>{});/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function aa(){return aa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},aa.apply(this,arguments)}function $3(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function u9(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function d9(e,t){return e.button===0&&(!t||t==="_self")&&!u9(e)}function t1(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function p9(e,t){let n=t1(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(o=>{n.append(i,o)})}),n}const f9=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],h9=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],g9="6";try{window.__reactRouterVersion=g9}catch{}const m9=y.createContext({isTransitioning:!1}),x9="startTransition",Uf=g5[x9];function L9(e){let{basename:t,children:n,future:r,window:i}=e,o=y.useRef();o.current==null&&(o.current=LL({window:i,v5Compat:!0}));let s=o.current,[a,c]=y.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},p=y.useCallback(f=>{u&&Uf?Uf(()=>c(f)):c(f)},[c,u]);return y.useLayoutEffect(()=>s.listen(p),[s,p]),y.useEffect(()=>s9(r),[r]),y.createElement(c9,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const y9=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",v9=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xi=y.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:c,to:u,preventScrollReset:p,viewTransition:f}=t,h=$3(t,f9),{basename:g}=y.useContext(Wn),b,w=!1;if(typeof u=="string"&&v9.test(u)&&(b=u,y9))try{let L=new URL(window.location.href),v=u.startsWith("//")?new URL(L.protocol+u):new URL(u),$=Vi(v.pathname,g);v.origin===L.origin&&$!=null?u=$+v.search+v.hash:w=!0}catch{}let C=VL(u,{relative:i}),m=b9(u,{replace:s,state:a,target:c,preventScrollReset:p,relative:i,viewTransition:f});function x(L){r&&r(L),L.defaultPrevented||m(L)}return y.createElement("a",aa({},h,{href:b||C,onClick:w||o?r:x,ref:n,target:c}))}),E3=y.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:a,to:c,viewTransition:u,children:p}=t,f=$3(t,h9),h=Fa(c,{relative:f.relative}),g=Kn(),b=y.useContext(w3),{navigator:w,basename:C}=y.useContext(Wn),m=b!=null&&k9(h)&&u===!0,x=w.encodeLocation?w.encodeLocation(h).pathname:h.pathname,L=g.pathname,v=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;i||(L=L.toLowerCase(),v=v?v.toLowerCase():null,x=x.toLowerCase()),v&&C&&(v=Vi(v,C)||v);const $=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let k=L===x||!s&&L.startsWith(x)&&L.charAt($)==="/",S=v!=null&&(v===x||!s&&v.startsWith(x)&&v.charAt(x.length)==="/"),M={isActive:k,isPending:S,isTransitioning:m},T=k?r:void 0,R;typeof o=="function"?R=o(M):R=[o,k?"active":null,S?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let I=typeof a=="function"?a(M):a;return y.createElement(Xi,aa({},f,{"aria-current":T,className:R,ref:n,style:I,to:c,viewTransition:u}),typeof p=="function"?p(M):p)});var n1;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(n1||(n1={}));var Vf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Vf||(Vf={}));function w9(e){let t=y.useContext(Ba);return t||tt(!1),t}function b9(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=t===void 0?{}:t,c=mt(),u=Kn(),p=Fa(e,{relative:s});return y.useCallback(f=>{if(d9(f,n)){f.preventDefault();let h=r!==void 0?r:la(u)===la(p);c(e,{replace:h,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[u,c,p,r,i,n,e,o,s,a])}function P3(e){let t=y.useRef(t1(e)),n=y.useRef(!1),r=Kn(),i=y.useMemo(()=>p9(r.search,n.current?null:t.current),[r.search]),o=mt(),s=y.useCallback((a,c)=>{const u=t1(typeof a=="function"?a(i):a);n.current=!0,o("?"+u,c)},[o,i]);return[i,s]}function k9(e,t){t===void 0&&(t={});let n=y.useContext(m9);n==null&&tt(!1);let{basename:r}=w9(n1.useViewTransitionState),i=Fa(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=Vi(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=Vi(n.nextLocation.pathname,r)||n.nextLocation.pathname;return e1(i.pathname,s)!=null||e1(i.pathname,o)!=null}const js="/assets/logo-CsQHSiKo.png",j9=d.header`
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
`,S9=d(Xi)`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: 2px;
    border-radius: ${({theme:e})=>e.radii.md};
  }
`,C9=d.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
`,$9=d.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`,E9=d.h1`
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.colors.primary600};
  margin: 0;
  line-height: 1.3;
`,P9=d.p`
  font-size: 0.8rem;
  color: ${({theme:e})=>e.colors.primary400};
  margin: 2px 0 0;
`,I9=d.div`
  width: 48px;
  flex-shrink: 0;
`,T9=()=>l.jsxs(j9,{children:[l.jsx(S9,{to:"/",children:l.jsx(C9,{src:js,alt:"명상 지도 로고"})}),l.jsxs($9,{children:[l.jsx(E9,{children:"명상 지도"}),l.jsx(P9,{children:"국내 명상지를 찾아보세요"})]}),l.jsx(I9,{})]}),R9=d.nav`
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
`,Bc=d(E3)`
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
`,M9=d(Xi)`
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
`,z9=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),l.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),A9=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),l.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"}),l.jsx("line",{x1:"8",y1:"6",x2:"16",y2:"6"}),l.jsx("line",{x1:"8",y1:"10",x2:"16",y2:"10"})]}),_9=()=>l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),N9=()=>l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),l.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),O9=()=>{const{pathname:e}=Kn(),t=e.startsWith("/meditation/map")||e.startsWith("/meditation/region")||e.startsWith("/blog");return l.jsxs(R9,{role:"navigation","aria-label":"하단 메뉴",children:[l.jsxs(Bc,{to:"/",end:!0,children:[l.jsx(z9,{}),l.jsx("span",{children:"홈"})]}),l.jsxs(M9,{to:"/meditation/map",$active:t,children:[l.jsx(A9,{}),l.jsx("span",{children:"지도"})]}),l.jsxs(Bc,{to:"/favorites",children:[l.jsx(_9,{}),l.jsx("span",{children:"찜"})]}),l.jsxs(Bc,{to:"/profile",children:[l.jsx(N9,{}),l.jsx("span",{children:"마이"})]})]})},D9=d.div`
  min-height: 100vh;
  background: ${({theme:e})=>e.colors.warmCream};
`,B9=d.main`
  padding: 0 20px calc(56px + env(safe-area-inset-bottom, 0px) + 24px);
  background: ${({theme:e})=>e.colors.warmCream};

  @media (max-width: 768px) {
    padding: 0 12px calc(56px + env(safe-area-inset-bottom, 0px) + 24px);
  }
`,F9=()=>{const{pathname:e}=Kn(),t=e==="/"||e==="/meditation";return l.jsxs(D9,{children:[t&&l.jsx(T9,{}),l.jsx(B9,{children:l.jsx(Sp,{})}),l.jsx(O9,{})]})},H9=d.div`
  background: ${({theme:e})=>e.colors.white};
  padding: 20px;
  border-radius: ${({theme:e})=>e.radii.lg};
  box-shadow: ${({theme:e})=>e.shadow.soft};
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid ${({theme:e})=>e.colors.primary100};
`,Hl=d.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ul=d.span`
  font-size: 1.1rem;
  font-weight: 600;
`,U9=d.select`
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid ${({theme:e})=>e.colors.border200};
  font-size: 1.1rem;
`,Wf=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,Kf=d.button`
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
`,V9=d.button`
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
`,W9=d.input`
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
`,K9=d.span`
  font-size: 0.88rem;
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.4;
`,ca=({filters:e,availableTags:t,onChangeKeyword:n,onChangeCategory:r,onToggleTag:i,onChangeSortBy:o,onReset:s})=>{const a=[{label:"전체",value:"all"},{label:"템플스테이",value:"템플스테이"},{label:"명상센터",value:"명상센터"},{label:"프리랜서(공간없음)",value:"프리랜서(공간없음)"},{label:"힐링명상",value:"힐링명상"},{label:"기타",value:"기타"}];return l.jsxs(H9,{children:[l.jsxs(Hl,{children:[l.jsx(Ul,{children:"검색"}),l.jsx(W9,{type:"search",enterKeyHint:"search",autoComplete:"off",placeholder:"이름, 주소, 기관명, 태그, 소개글…",value:e.keyword,onChange:c=>n(c.target.value),"aria-label":"검색어"}),l.jsx(K9,{children:"띄어쓰기로 여러 단어를 넣으면 모두 포함되는 장소만 보여요."})]}),l.jsxs(Hl,{children:[l.jsx(Ul,{children:"카테고리"}),l.jsx(Wf,{children:a.map(c=>l.jsx(Kf,{type:"button",$active:e.category===c.value,onClick:()=>r(c.value),children:c.label},c.value))})]}),l.jsxs(Hl,{children:[l.jsx(Ul,{children:"해시태그"}),l.jsx(Wf,{children:t.map(c=>l.jsxs(Kf,{type:"button",$active:e.tags.includes(c),onClick:()=>i(c),children:["#",c]},c))})]}),l.jsxs(Hl,{children:[l.jsx(Ul,{children:"정렬"}),l.jsxs(U9,{value:e.sortBy,onChange:c=>o(c.target.value),children:[l.jsx("option",{value:"recommend",children:"추천순"}),l.jsx("option",{value:"name",children:"이름순"})]})]}),l.jsx(V9,{type:"button",onClick:s,children:"필터 초기화"})]})},Y9=d.form`
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

  ${({$layout:e})=>e==="main"?Me`
          width: 75%;
          max-width: 420px;
          margin-bottom: 20px;

          &:focus-within {
            width: 100%;
            max-width: 100%;
            border-color: ${({theme:t})=>t.colors.primary400};
            box-shadow: 0 4px 16px rgba(75, 0, 130, 0.12);
          }
        `:Me`
          width: 100%;
          max-width: 100%;
          margin-bottom: 16px;

          &:focus-within {
            border-color: ${({theme:t})=>t.colors.primary400};
            box-shadow: 0 4px 16px rgba(75, 0, 130, 0.1);
          }
        `}
`,G9=d.span`
  color: ${({theme:e})=>e.colors.primary600};
  display: grid;
  place-items: center;
  flex-shrink: 0;

  svg {
    width: 18px;
    height: 18px;
  }
`,Z9=d.input`
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
`,q9=d.button`
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
`,Ss=({value:e,onChange:t,placeholder:n,layout:r="region",id:i,"aria-label":o})=>{const s=a=>{a.preventDefault()};return l.jsxs(Y9,{$layout:r,onSubmit:s,children:[l.jsx(G9,{"aria-hidden":!0,children:l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("circle",{cx:"11",cy:"11",r:"7"}),l.jsx("line",{x1:"16.65",y1:"16.65",x2:"21",y2:"21"})]})}),l.jsx(Z9,{id:i,type:"search",enterKeyHint:"search",autoComplete:"off",placeholder:n,value:e,onChange:a=>t(a.target.value),"aria-label":o??"검색어"}),e?l.jsx(q9,{type:"button",onClick:()=>t(""),"aria-label":"검색어 삭제",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"18",height:"18",children:l.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})}):null]})},Q9=480,X9=360,J9=128;function Cp(e,t){try{const n=new URL(e);return n.hostname.includes("images.unsplash.com")?(n.searchParams.set("w",String(t)),n.searchParams.set("q","70"),n.searchParams.has("auto")||n.searchParams.set("auto","format"),n.searchParams.has("fit")||n.searchParams.set("fit","crop"),n.toString()):e}catch{return e}}function I3(e){if(e==null||!String(e).trim())return"";const t=String(e).trim();return Cp(t,Q9)}function ey(e){if(e==null||!String(e).trim())return"";const t=String(e).trim();return Cp(t,X9)}function ty(e){if(e==null||!String(e).trim())return"";const t=String(e).trim();return Cp(t,J9)}const ua=[{id:"KR-11",minLat:37.41,maxLat:37.7,minLng:126.75,maxLng:127.2},{id:"KR-50",minLat:36.4,maxLat:36.62,minLng:127.18,maxLng:127.32},{id:"KR-30",minLat:36.2,maxLat:36.55,minLng:127.2,maxLng:127.55},{id:"KR-27",minLat:35.7,maxLat:36.04,minLng:128.2,maxLng:128.78},{id:"KR-26",minLat:34.88,maxLat:35.32,minLng:128.8,maxLng:129.3},{id:"KR-31",minLat:35.38,maxLat:35.78,minLng:128.9,maxLng:129.5},{id:"KR-29",minLat:35,maxLat:35.3,minLng:126.5,maxLng:127},{id:"KR-28",minLat:37.2,maxLat:37.7,minLng:126.2,maxLng:126.9},{id:"KR-49",minLat:33,maxLat:33.6,minLng:126,maxLng:127},{id:"KR-41",minLat:36.9,maxLat:38,minLng:126.5,maxLng:127.5},{id:"KR-42",minLat:37,maxLat:38.5,minLng:127,maxLng:131},{id:"KR-43",minLat:36,maxLat:37.1,minLng:127,maxLng:128.4},{id:"KR-44",minLat:35.7,maxLat:36.6,minLng:125.5,maxLng:127.1},{id:"KR-45",minLat:35,maxLat:36,minLng:126.4,maxLng:128},{id:"KR-46",minLat:33,maxLat:35.2,minLng:125,maxLng:128},{id:"KR-47",minLat:35.5,maxLat:38,minLng:127,maxLng:130},{id:"KR-48",minLat:34.4,maxLat:35.5,minLng:127.4,maxLng:130}],ny=(e,t)=>{if(!Number.isFinite(e)||!Number.isFinite(t)||e<32.5||e>38.8||t<123||t>132)return null;for(const n of ua)if(e>=n.minLat&&e<=n.maxLat&&t>=n.minLng&&t<=n.maxLng)return n.id;return null},ry={id:"all",name:"전체",slug:"all"},Un=e=>e==="all"?ry:Xt.getState().regions.find(t=>t.id===e),iy=(e,t=8)=>[...e].sort((n,r)=>{const i=(r.viewCount??0)-(n.viewCount??0);return i!==0?i:String(n.id).localeCompare(String(r.id))}).slice(0,t),T3=e=>{const t=new Set;return e.forEach(n=>{n.hashtags.forEach(r=>t.add(r))}),Array.from(t).filter(n=>n!=="템플스테이").sort()},oy=e=>e.hashtags.some(t=>/프리랜서|코칭|개인지도|1:1/.test(t))?"프리랜서(공간없음)":e.hasTempleStay?"템플스테이":e.hashtags.includes("요가")||e.name.includes("요가")?"요가센터":"명상센터",da=(e,t)=>e.filter(n=>{var r;if(t.category&&t.category!=="all"){const i=oy(n);if(t.category==="힐링명상"){if(i==="요가센터")return!1}else if(i!==t.category)return!1}if(t.tags.length>0&&!t.tags.some(o=>[...n.hashtags,...n.themes].includes(o)))return!1;if(t.keyword.trim().length>0){const i=t.keyword.trim().toLowerCase().split(/\s+/).filter(u=>u.length>0),o=(n.detailSections??[]).map(u=>`${u.title} ${u.body}`).join(" "),s=(n.programs??[]).map(u=>u.title).join(" "),a=[n.name,n.shortDescription,n.description,n.address,(r=n.organization)==null?void 0:r.name,n.duration,n.admissionFee,n.venueKind,s,...n.hashtags,...n.themes,o].filter(Boolean).join(" ").toLowerCase();if(!i.every(u=>a.includes(u)))return!1}return!0}),R3=(e,t)=>t==="name"?[...e].sort((n,r)=>n.name.localeCompare(r.name,"ko")):e,ly=["meditation-access-token","meditation-user-email","meditation-user-role"];function Yf(){if(!(typeof window>"u"))for(const e of ly)localStorage.removeItem(e),document.cookie=`${e}=; path=/; max-age=0; SameSite=Lax`}const sy=new Set(["ADMIN","DEV","EMPLOYEE"]),Gf="__http_only_cookie_session__",qt=gl((e,t)=>({accessToken:null,email:null,role:null,authReady:!1,bootstrapAuth:async()=>{Yf();const n=Se();if(!n){e({accessToken:null,email:null,role:null,authReady:!0});return}try{const r=await fetch(`${n}/me`,{credentials:"include"});if(r.ok){const i=await r.json(),o=i.email??i.username??"",s=i.role??"MEMBER";e({accessToken:Gf,email:o||null,role:s,authReady:!0});return}}catch{}e({accessToken:null,email:null,role:null,authReady:!0})},setSession:async()=>{e({accessToken:Gf,email:null,role:null,authReady:!1}),await t().bootstrapAuth()},logout:async()=>{const n=Se();if(n)try{await fetch(`${n}/auth/logout`,{method:"POST",credentials:"include"})}catch{}Yf(),e({accessToken:null,email:null,role:null,authReady:!0})},isStaff:()=>sy.has(t().role??""),isAuthenticated:()=>!!t().accessToken,authHeader:()=>{}}));async function me(e,t={}){const n=Se();if(!n)throw new Error("VITE_API_BASE_URL 미설정");const r=new Headers(t.headers);t.body&&!r.has("Content-Type")&&!(t.body instanceof FormData)&&r.set("Content-Type","application/json");const i=e.startsWith("/")?`${n}${e}`:`${n}/${e}`;return fetch(i,{...t,headers:r,credentials:"include"})}const M3="meditation-favorites",ay=()=>{if(typeof window>"u")return[];try{const e=localStorage.getItem(M3);if(!e)return[];const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}},Vl=e=>{if(!(typeof window>"u"))try{localStorage.setItem(M3,JSON.stringify(e))}catch{}},_r=gl((e,t)=>({favorites:ay(),replaceAll:n=>{const r=[...new Set(n)];Vl(r),e({favorites:r})},pullFromServer:async()=>{if(!(!Se()||!qt.getState().isAuthenticated()))try{const n=await me("/me/favorites");if(!n.ok)return;const r=await n.json(),i=Array.isArray(r.placeIds)?r.placeIds:[];Vl(i),e({favorites:i})}catch{}},pushToServer:async n=>{if(!(!Se()||!qt.getState().isAuthenticated()))try{const r=await me("/me/favorites",{method:"PUT",body:JSON.stringify({placeIds:n})});if(!r.ok)return;const i=await r.json(),o=Array.isArray(i.placeIds)?i.placeIds:n;Vl(o),e({favorites:o})}catch{}},toggleFavorite:n=>{const r=t(),o=r.favorites.includes(n)?r.favorites.filter(s=>s!==n):[...r.favorites,n];Vl(o),e({favorites:o}),Se()&&qt.getState().isAuthenticated()&&t().pushToServer(o)},isFavorite:n=>t().favorites.includes(n)})),cy=d.button`
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
`,uy=d.span`
  position: relative;
  display: inline-flex;
  width: 19px;
  height: 19px;
`,dy=d.svg`
  position: absolute;
  inset: 0;
  width: 19px;
  height: 19px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  overflow: visible;
`,py=d.svg`
  position: absolute;
  inset: 0;
  width: 19px;
  height: 19px;
  fill: currentColor;
  stroke: none;
  pointer-events: none;
  opacity: ${({$active:e})=>e?1:0};
  transition: opacity 0.35s ease;
`,Zf="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",Ha=({placeId:e})=>{const{isFavorite:t,toggleFavorite:n}=_r(),r=t(e),i=o=>{o.preventDefault(),o.stopPropagation(),n(e)};return l.jsx(cy,{type:"button",$active:r,onClick:i,"aria-label":r?"찜 해제":"찜하기",children:l.jsxs(uy,{children:[l.jsx(dy,{viewBox:"0 0 24 24",children:l.jsx("path",{d:Zf})}),l.jsx(py,{viewBox:"0 0 24 24",$active:r,children:l.jsx("path",{d:Zf})})]})})},fy=d.div`
  flex-shrink: 0;
  width: 200px;
  position: relative;
`,hy=d(Xi)`
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
`,gy=d.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  z-index: 2;
`,my=d.div`
  width: 100%;
  height: 120px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,xy=d.div`
  padding: 12px;
`,Ly=d.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 6px;
  color: ${({theme:e})=>e.colors.text900};
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,yy=d.span`
  font-size: 0.85rem;
  color: ${({theme:e})=>e.colors.text700};
`,vy=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 6px;
`,wy=d.span`
  display: inline-block;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.primary600};
  background: ${({theme:e})=>e.colors.primary50};
  padding: 2px 8px;
  border-radius: ${({theme:e})=>e.radii.pill};
`,by=({place:e})=>{const t=Un(e.regionId);return l.jsxs(fy,{children:[l.jsx(gy,{children:l.jsx(Ha,{placeId:e.id})}),l.jsxs(hy,{to:`/meditation/place/${e.id}`,children:[l.jsx(my,{children:l.jsx("img",{src:I3(e.thumbnailUrl),alt:`${e.name} 썸네일`,loading:"lazy",decoding:"async",sizes:"200px"})}),l.jsxs(xy,{children:[l.jsx(Ly,{children:e.name}),l.jsx(yy,{children:(t==null?void 0:t.name)??e.regionId}),e.hashtags&&e.hashtags.length>0&&l.jsx(vy,{children:e.hashtags.slice(0,2).map(n=>l.jsx(wy,{children:n},n))})]})]})]})},ky=d.article`
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
`,jy=d(Xi)`
  display: block;
  text-decoration: none;
  color: inherit;

  @media (min-width: 961px) {
    display: flex;
  }
`,Sy=d.div`
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
`,Cy=d.div`
  padding: 16px 18px;

  @media (min-width: 961px) {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
  }
`,$y=d.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 10px;
  color: ${({theme:e})=>e.colors.text900};
`,Ey=d.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 12px;
  margin-bottom: 10px;
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.text700};
`,Py=d.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,Iy=d.div`
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
`,Ty=d.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Ry=d.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,_o=({place:e})=>{const t=Un(e.regionId);return l.jsx(ky,{children:l.jsxs(jy,{to:`/meditation/place/${e.id}`,children:[l.jsx(Sy,{children:l.jsx("img",{src:I3(e.thumbnailUrl),alt:`${e.name} 썸네일`,loading:"lazy",decoding:"async",sizes:"(min-width: 961px) 220px, 100vw"})}),l.jsxs(Cy,{children:[l.jsx($y,{children:e.name}),l.jsx(Ey,{children:l.jsxs(Py,{children:[l.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),l.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),(t==null?void 0:t.name)??e.regionId]})}),l.jsxs(Ty,{children:[l.jsx(Iy,{children:e.hashtags.slice(0,4).map(n=>l.jsx("span",{children:n},n))}),l.jsx(Ry,{children:l.jsx(Ha,{placeId:e.id})})]})]})]})})},My=`<svg width="386" height="630" viewBox="0 0 386 630" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`,zy=d.div`
  cursor: pointer;
  overflow: hidden;
  ${({$maxMapHeight:e})=>e?Me`
          max-height: ${e};
        `:void 0}

  svg {
    width: 100%;
    height: auto;
    max-width: 100%;
    display: block;
    margin: 0 auto;
    pointer-events: none;
    ${({$maxMapHeight:e})=>e?Me`
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
`,Ll=({activeRegionId:e,activeRegionIds:t,onSelectRegion:n,maxMapHeight:r})=>{const i=y.useRef(null),o=y.useRef(null);y.useEffect(()=>{const a=i.current;if(!a)return;const c=()=>Array.from(a.querySelectorAll("svg path.land")).filter(C=>C.getAttribute("id")),u=C=>{const m=(C==null?void 0:C.getAttribute("id"))??null;m!==o.current&&(o.current=m,c().forEach(x=>{x.getAttribute("id")===m?x.classList.add("is-hovered"):x.classList.remove("is-hovered")}))},p=(C,m)=>{var M;const x=document.elementFromPoint(C,m);if((M=x==null?void 0:x.matches)!=null&&M.call(x,"path.land"))return x;const L=a.querySelector("svg");if(!L)return null;const v=L.getScreenCTM();if(!v)return null;const $=L.createSVGPoint();$.x=C,$.y=m;const k=$.matrixTransform(v.inverse()),S=c();for(let T=S.length-1;T>=0;T--)if(S[T].isPointInFill(k))return S[T];return null},f=C=>{const m=p(C.clientX,C.clientY);u(m)},h=()=>{u(null)},g=C=>{const m=p(C.clientX,C.clientY);if(m){const x=m.getAttribute("id");x&&n(x,C)}};let b=!1;const w=()=>{if(b)return;if(c().length===0){requestAnimationFrame(w);return}a.addEventListener("pointermove",f),a.addEventListener("pointerleave",h),a.addEventListener("click",g)};return w(),()=>{b=!0,a.removeEventListener("pointermove",f),a.removeEventListener("pointerleave",h),a.removeEventListener("click",g)}},[n]);const s=(t??(e?[e]:[])).map(a=>a==="KR-47"?"KR-48":a);return y.useEffect(()=>{const a=i.current;if(!a)return;a.querySelectorAll("svg path.land").forEach(u=>{const p=u.getAttribute("id");p&&s.includes(p)?u.classList.add("is-active"):u.classList.remove("is-active")})},[s.join("|")]),l.jsx(zy,{ref:i,$maxMapHeight:r,role:"img","aria-label":"대한민국 행정구역 지도",dangerouslySetInnerHTML:{__html:My}})},qf={tags:[],keyword:"",sortBy:"recommend",category:"all"},$p=gl(e=>({selectedRegionId:void 0,filters:qf,page:1,pageSize:10,isFilterOpen:!1,setRegion:t=>e({selectedRegionId:t,page:1}),setPage:t=>e({page:t}),setPageSize:t=>e({pageSize:t,page:1}),setKeyword:t=>e(n=>({filters:{...n.filters,keyword:t},page:1})),toggleTag:t=>e(n=>{const i=n.filters.tags.includes(t)?n.filters.tags.filter(o=>o!==t):[...n.filters.tags,t];return{filters:{...n.filters,tags:i},page:1}}),clearTags:()=>e(t=>({filters:{...t.filters,tags:[]},page:1})),setSortBy:t=>e(n=>({filters:{...n.filters,sortBy:t},page:1})),setCategory:t=>e(n=>({filters:{...n.filters,category:t},page:1})),resetFilters:()=>e({filters:qf,page:1}),setFilterOpen:t=>e({isFilterOpen:t})})),z3=Ke`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`,Ay=d.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 12px 24px;
  color: ${({theme:e})=>e.colors.text900};
  background: ${({theme:e})=>e.colors.warmCream};

  @media (max-width: 960px) {
    padding: 14px 10px 24px;
  }
`,_y=d.div`
  animation: ${z3} 0.35s ease both;
`,Ny=d.div`
  display: block;

  @media (min-width: 961px) {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 28px;
    align-items: start;
  }
`,Oy=d.section`
  padding: 12px;
  border-radius: ${({theme:e})=>e.radii.lg};
  margin-bottom: 20px;

  @media (min-width: 961px) {
    max-width: 500px;
    width: 100%;
  }
`,Dy=d.section`
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
`,By=d.section`
  margin-top: 28px;
  background: ${({theme:e})=>e.colors.warmCream};
`,Fy=d.h2`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
  margin: 0 0 16px;
`,Hy=d.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 12px;
  -webkit-overflow-scrolling: touch;
`,Uy=d.div`
  @media (min-width: 961px) {
    position: sticky;
    top: 92px;
  }
`,Vy=d.button`
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
`,Wy=d.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-areas:
    "filter content";
  gap: 28px;
  animation: ${z3} 0.35s ease both;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-areas: "content";
  }
`,Ky=d.aside`
  grid-area: filter;

  @media (max-width: 960px) {
    display: none;
  }
`,Yy=d.div`
  grid-area: content;
`,Gy=d.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Zy=d.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Qf=d.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text700};
`,qy=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,Qy=d.p`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.text700};
  margin: 0;
`,Xy=d.button`
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
`,Jy=d.div`
  position: fixed;
  inset: 0;
  z-index: 70;
`,ev=Ke`from { opacity: 0; } to { opacity: 1; }`,tv=Ke`from { transform: translateX(100%); } to { transform: translateX(0); }`,nv=d.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  animation: ${ev} 0.2s ease;
`,rv=d.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: min(90vw, 360px);
  background: ${({theme:e})=>e.colors.white};
  padding: 20px;
  overflow-y: auto;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);
  animation: ${tv} 0.25s ease;
`,iv=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,ov=d.button`
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
`,lv=d.div`
  height: 1px;
`,Xf=()=>{const e=mt(),{selectedRegionId:t,filters:n,page:r,pageSize:i,setPage:o,setRegion:s,setKeyword:a,toggleTag:c,setSortBy:u,setCategory:p,resetFilters:f,isFilterOpen:h,setFilterOpen:g}=$p(),b=y.useRef(null),[w,C]=y.useState(""),m=Xt(P=>P.places),x=Xt(P=>P.regions),L=[{id:"all",name:"전체"},...x],v=y.useMemo(()=>iy(m,8),[m]),$=y.useMemo(()=>T3(m),[m]),k=y.useMemo(()=>da(m,n),[m,n]),S=y.useMemo(()=>R3(k,n.sortBy),[k,n.sortBy]),M=y.useMemo(()=>S.slice(0,r*i),[S,r,i]),T=M.length<S.length,R=n.keyword.trim().length>0;y.useEffect(()=>{s("all")},[s]),y.useEffect(()=>{const P=["템플스테이","숲 명상","바다 명상","한옥 명상","호흡 수련","걷기 명상"];let _=0,B=0,H=!1,W;const A=z=>{W=window.setTimeout(()=>{const N=P[_%P.length];if(H?B-=1:B+=1,C(N.slice(0,Math.max(B,0))),!H&&B>=N.length){H=!0,A(700);return}if(H&&B<=0){H=!1,_+=1,A(300);return}A(H?120:240)},z)};return A(240),()=>window.clearTimeout(W)},[]),y.useEffect(()=>{o(1)},[n.keyword,n.sortBy,n.tags,n.category,o]),y.useEffect(()=>{const P=b.current;if(!P||!T||!R)return;const _=new IntersectionObserver(B=>{var H;(H=B[0])!=null&&H.isIntersecting&&o(r+1)},{rootMargin:"200px"});return _.observe(P),()=>_.disconnect()},[T,r,o,R]);const I=P=>{s(P),e("/meditation/map")};return l.jsxs(Ay,{children:[l.jsx(Ss,{layout:"main",value:n.keyword,onChange:a,placeholder:w||"명상센터 검색"}),R?l.jsxs(Wy,{children:[l.jsx(Ky,{children:l.jsx(ca,{filters:n,availableTags:$,onChangeKeyword:a,onChangeCategory:p,onToggleTag:c,onChangeSortBy:u,onReset:f})}),l.jsx(Yy,{children:l.jsxs(Gy,{children:[l.jsxs(qy,{children:[l.jsxs(Qy,{children:["총 ",S.length,"곳의 명상센터"]}),l.jsx(Xy,{type:"button",onClick:()=>g(!0),"aria-label":"필터",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})})})]}),l.jsxs(Zy,{children:[M.length===0&&l.jsx(Qf,{children:m.length===0?"등록된 공간이 없습니다.":"조건에 맞는 명상센터가 없어요."}),M.map(P=>l.jsx(_o,{place:P},P.id))]}),T&&l.jsx(lv,{ref:b})]})})]}):l.jsx(_y,{children:l.jsxs(Ny,{children:[l.jsx(Oy,{children:l.jsx(Ll,{activeRegionId:t,onSelectRegion:I})}),l.jsxs(Uy,{children:[l.jsx(Dy,{children:L.map(P=>l.jsx(Vy,{type:"button",$active:t===P.id,onClick:()=>I(P.id),children:P.name},P.id))}),l.jsxs(By,{children:[l.jsx(Fy,{children:"인기 명상지"}),m.length===0?l.jsx(Qf,{style:{marginTop:12,textAlign:"center",padding:"24px 8px"},children:"등록된 공간이 없습니다."}):l.jsx(Hy,{children:v.map(P=>l.jsx(by,{place:P},P.id))})]})]})]})}),R&&h&&l.jsxs(Jy,{children:[l.jsx(nv,{onClick:()=>g(!1)}),l.jsxs(rv,{children:[l.jsxs(iv,{children:[l.jsx("h3",{style:{margin:0,fontSize:"1.2rem"},children:"필터"}),l.jsx(ov,{type:"button",onClick:()=>g(!1),children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),l.jsx(ca,{filters:n,availableTags:$,onChangeKeyword:a,onChangeCategory:p,onToggleTag:c,onChangeSortBy:u,onReset:f})]})]})]})},sv=d.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 16px 24px;
  color: ${({theme:e})=>e.colors.text900};
`,av=d.header`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`,cv=d.button`
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
`,uv=d.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: ${({theme:e})=>e.colors.text900};
`,dv=d.section`
  position: relative;
  padding: 12px;
  border-radius: ${({theme:e})=>e.radii.lg};
  margin-bottom: 20px;
  min-height: 280px;
  overflow: visible;

  svg {
    max-height: 360px;
  }
`,pv=d.div`
  position: absolute;
  inset: 0;
  z-index: 5;
  cursor: pointer;
  border-radius: ${({theme:e})=>e.radii.lg};
`,fv=Ke`
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,hv=d.div`
  position: absolute;
  left: ${({$x:e})=>e}px;
  top: ${({$y:e})=>e}px;
  transform: translate(-50%, -100%);
  z-index: 10;
  filter: drop-shadow(0 6px 20px rgba(75, 0, 130, 0.12));
  animation: ${fv} 0.2s ease;
`,gv=d.div`
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
`,mv=d.button`
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
`,xv=d.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.primary700};
  margin: 0 0 4px;
  padding-right: 28px;
`,Lv=d.p`
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.text700};
  margin: 0 0 12px;
  line-height: 1.45;
`,yv=d.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,vv=d.button`
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
`,wv=d.section`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`,bv=d.button`
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
`,kv=[{label:"명상지",kind:"place"},{label:"명상센터",kind:"center"},{label:"명상 전문가",kind:"expert"}],jv=()=>{const e=mt(),t=y.useRef(null),n=Xt(m=>m.regions),r=y.useMemo(()=>[{id:"all",name:"전체"},...n.map(m=>({id:m.id,name:m.name}))],[n]),i=y.useRef(null),o=y.useRef(null),{selectedRegionId:s,setRegion:a,setCategory:c}=$p(),[u,p]=y.useState(null),[f,h]=y.useState({x:0,y:0});y.useEffect(()=>{const m=x=>{var S,M,T;if(!u)return;const L=x.target,v=(S=i.current)==null?void 0:S.contains(L),$=(M=t.current)==null?void 0:M.contains(L),k=(T=o.current)==null?void 0:T.contains(L);!v&&!$&&!k&&p(null)};return document.addEventListener("click",m),()=>document.removeEventListener("click",m)},[u]);const g=y.useCallback(m=>{const x=t.current;if(!x)return null;if(m==="all"){const _=x.getBoundingClientRect();return{x:_.width/2,y:_.height/2-40}}const L=x.querySelector(`path.land[id="${m}"]`);if(!L)return null;const v=L.closest("svg");if(!v)return null;const $=L.getBBox();let k=$.x+$.width/2,S=$.y+$.height/2;m==="KR-42"&&(S=$.y+$.height*.65);const M=v.createSVGPoint();M.x=k,M.y=S;const T=v.getScreenCTM();if(!T)return null;const R=M.matrixTransform(T),I=x.getBoundingClientRect(),P=m==="KR-42"?5:m==="KR-11"?0:m==="KR-41"?-15:15;return{x:R.x-I.left,y:R.y-I.top-P}},[]);y.useEffect(()=>{const m=s??"all";p(m);const x=t.current;x?requestAnimationFrame(()=>{const L=g(m);h(L??{x:x.getBoundingClientRect().width/2,y:x.getBoundingClientRect().height/2-40})}):h({x:200,y:120})},[s,g]);const b=m=>{p(m),requestAnimationFrame(()=>{const x=g(m);h(x??{x:200,y:120})})},w=m=>{if(u){if(a(u),m==="expert"){e(`/meditation/region/${u}/experts`);return}c(m==="place"?"템플스테이":"명상센터"),e(`/meditation/region/${u}`)}},C=u?Un(u):null;return l.jsxs(sv,{children:[l.jsxs(av,{children:[l.jsx(cv,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),l.jsx(uv,{children:"지역 선택"})]}),l.jsxs(dv,{ref:t,children:[l.jsx(Ll,{activeRegionId:u??void 0,onSelectRegion:b}),C&&l.jsxs(l.Fragment,{children:[l.jsx(pv,{onClick:()=>p(null),"aria-label":"모달 닫기"}),l.jsx(hv,{ref:i,$x:f.x,$y:f.y,children:l.jsxs(gv,{children:[l.jsx(mv,{type:"button",onClick:()=>p(null),"aria-label":"닫기",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"18",height:"18",children:l.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})}),l.jsx(xv,{children:C.name}),l.jsx(Lv,{children:"찾으시는 유형을 선택해 주세요"}),l.jsx(yv,{children:kv.map(({label:m,kind:x})=>l.jsx(vv,{type:"button",onClick:()=>w(x),children:m},x))})]})})]})]}),l.jsx(wv,{ref:o,children:r.map(m=>l.jsx(bv,{type:"button",$active:u===m.id,onClick:()=>{p(m.id),requestAnimationFrame(()=>{const x=g(m.id);h(x??{x:200,y:120})})},children:m.name},m.id))})]})};function Sv(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const Cv=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,$v=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Ev={};function Jf(e,t){return(Ev.jsx?$v:Cv).test(e)}const Pv=/[ \t\n\f\r]/g;function Iv(e){return typeof e=="object"?e.type==="text"?eh(e.value):!1:eh(e)}function eh(e){return e.replace(Pv,"")===""}class yl{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}yl.prototype.normal={};yl.prototype.property={};yl.prototype.space=void 0;function A3(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new yl(n,r,t)}function r1(e){return e.toLowerCase()}class Rt{constructor(t,n){this.attribute=n,this.property=t}}Rt.prototype.attribute="";Rt.prototype.booleanish=!1;Rt.prototype.boolean=!1;Rt.prototype.commaOrSpaceSeparated=!1;Rt.prototype.commaSeparated=!1;Rt.prototype.defined=!1;Rt.prototype.mustUseProperty=!1;Rt.prototype.number=!1;Rt.prototype.overloadedBoolean=!1;Rt.prototype.property="";Rt.prototype.spaceSeparated=!1;Rt.prototype.space=void 0;let Tv=0;const le=Gr(),Ge=Gr(),i1=Gr(),V=Gr(),je=Gr(),Ei=Gr(),zt=Gr();function Gr(){return 2**++Tv}const o1=Object.freeze(Object.defineProperty({__proto__:null,boolean:le,booleanish:Ge,commaOrSpaceSeparated:zt,commaSeparated:Ei,number:V,overloadedBoolean:i1,spaceSeparated:je},Symbol.toStringTag,{value:"Module"})),Fc=Object.keys(o1);class Ep extends Rt{constructor(t,n,r,i){let o=-1;if(super(t,n),th(this,"space",i),typeof r=="number")for(;++o<Fc.length;){const s=Fc[o];th(this,Fc[o],(r&o1[s])===o1[s])}}}Ep.prototype.defined=!0;function th(e,t,n){n&&(e[t]=n)}function Ji(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const o=new Ep(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[r1(r)]=r,n[r1(o.attribute)]=r}return new yl(t,n,e.space)}const _3=Ji({properties:{ariaActiveDescendant:null,ariaAtomic:Ge,ariaAutoComplete:null,ariaBusy:Ge,ariaChecked:Ge,ariaColCount:V,ariaColIndex:V,ariaColSpan:V,ariaControls:je,ariaCurrent:null,ariaDescribedBy:je,ariaDetails:null,ariaDisabled:Ge,ariaDropEffect:je,ariaErrorMessage:null,ariaExpanded:Ge,ariaFlowTo:je,ariaGrabbed:Ge,ariaHasPopup:null,ariaHidden:Ge,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:je,ariaLevel:V,ariaLive:null,ariaModal:Ge,ariaMultiLine:Ge,ariaMultiSelectable:Ge,ariaOrientation:null,ariaOwns:je,ariaPlaceholder:null,ariaPosInSet:V,ariaPressed:Ge,ariaReadOnly:Ge,ariaRelevant:null,ariaRequired:Ge,ariaRoleDescription:je,ariaRowCount:V,ariaRowIndex:V,ariaRowSpan:V,ariaSelected:Ge,ariaSetSize:V,ariaSort:null,ariaValueMax:V,ariaValueMin:V,ariaValueNow:V,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function N3(e,t){return t in e?e[t]:t}function O3(e,t){return N3(e,t.toLowerCase())}const Rv=Ji({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Ei,acceptCharset:je,accessKey:je,action:null,allow:null,allowFullScreen:le,allowPaymentRequest:le,allowUserMedia:le,alt:null,as:null,async:le,autoCapitalize:null,autoComplete:je,autoFocus:le,autoPlay:le,blocking:je,capture:null,charSet:null,checked:le,cite:null,className:je,cols:V,colSpan:null,content:null,contentEditable:Ge,controls:le,controlsList:je,coords:V|Ei,crossOrigin:null,data:null,dateTime:null,decoding:null,default:le,defer:le,dir:null,dirName:null,disabled:le,download:i1,draggable:Ge,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:le,formTarget:null,headers:je,height:V,hidden:i1,high:V,href:null,hrefLang:null,htmlFor:je,httpEquiv:je,id:null,imageSizes:null,imageSrcSet:null,inert:le,inputMode:null,integrity:null,is:null,isMap:le,itemId:null,itemProp:je,itemRef:je,itemScope:le,itemType:je,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:le,low:V,manifest:null,max:null,maxLength:V,media:null,method:null,min:null,minLength:V,multiple:le,muted:le,name:null,nonce:null,noModule:le,noValidate:le,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:le,optimum:V,pattern:null,ping:je,placeholder:null,playsInline:le,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:le,referrerPolicy:null,rel:je,required:le,reversed:le,rows:V,rowSpan:V,sandbox:je,scope:null,scoped:le,seamless:le,selected:le,shadowRootClonable:le,shadowRootDelegatesFocus:le,shadowRootMode:null,shape:null,size:V,sizes:null,slot:null,span:V,spellCheck:Ge,src:null,srcDoc:null,srcLang:null,srcSet:null,start:V,step:null,style:null,tabIndex:V,target:null,title:null,translate:null,type:null,typeMustMatch:le,useMap:null,value:Ge,width:V,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:je,axis:null,background:null,bgColor:null,border:V,borderColor:null,bottomMargin:V,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:le,declare:le,event:null,face:null,frame:null,frameBorder:null,hSpace:V,leftMargin:V,link:null,longDesc:null,lowSrc:null,marginHeight:V,marginWidth:V,noResize:le,noHref:le,noShade:le,noWrap:le,object:null,profile:null,prompt:null,rev:null,rightMargin:V,rules:null,scheme:null,scrolling:Ge,standby:null,summary:null,text:null,topMargin:V,valueType:null,version:null,vAlign:null,vLink:null,vSpace:V,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:le,disableRemotePlayback:le,prefix:null,property:null,results:V,security:null,unselectable:null},space:"html",transform:O3}),Mv=Ji({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:zt,accentHeight:V,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:V,amplitude:V,arabicForm:null,ascent:V,attributeName:null,attributeType:null,azimuth:V,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:V,by:null,calcMode:null,capHeight:V,className:je,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:V,diffuseConstant:V,direction:null,display:null,dur:null,divisor:V,dominantBaseline:null,download:le,dx:null,dy:null,edgeMode:null,editable:null,elevation:V,enableBackground:null,end:null,event:null,exponent:V,externalResourcesRequired:null,fill:null,fillOpacity:V,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Ei,g2:Ei,glyphName:Ei,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:V,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:V,horizOriginX:V,horizOriginY:V,id:null,ideographic:V,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:V,k:V,k1:V,k2:V,k3:V,k4:V,kernelMatrix:zt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:V,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:V,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:V,overlineThickness:V,paintOrder:null,panose1:null,path:null,pathLength:V,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:je,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:V,pointsAtY:V,pointsAtZ:V,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:zt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:zt,rev:zt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:zt,requiredFeatures:zt,requiredFonts:zt,requiredFormats:zt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:V,specularExponent:V,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:V,strikethroughThickness:V,string:null,stroke:null,strokeDashArray:zt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:V,strokeOpacity:V,strokeWidth:null,style:null,surfaceScale:V,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:zt,tabIndex:V,tableValues:null,target:null,targetX:V,targetY:V,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:zt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:V,underlineThickness:V,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:V,values:null,vAlphabetic:V,vMathematical:V,vectorEffect:null,vHanging:V,vIdeographic:V,version:null,vertAdvY:V,vertOriginX:V,vertOriginY:V,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:V,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:N3}),D3=Ji({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),B3=Ji({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:O3}),F3=Ji({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),zv={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Av=/[A-Z]/g,nh=/-[a-z]/g,_v=/^data[-\w.:]+$/i;function Nv(e,t){const n=r1(t);let r=t,i=Rt;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&_v.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(nh,Dv);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!nh.test(o)){let s=o.replace(Av,Ov);s.charAt(0)!=="-"&&(s="-"+s),t="data"+s}}i=Ep}return new i(r,t)}function Ov(e){return"-"+e.toLowerCase()}function Dv(e){return e.charAt(1).toUpperCase()}const Bv=A3([_3,Rv,D3,B3,F3],"html"),Pp=A3([_3,Mv,D3,B3,F3],"svg");function Fv(e){return e.join(" ").trim()}var Ip={},rh=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Hv=/\n/g,Uv=/^\s*/,Vv=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Wv=/^:\s*/,Kv=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Yv=/^[;\s]*/,Gv=/^\s+|\s+$/g,Zv=`
`,ih="/",oh="*",Er="",qv="comment",Qv="declaration";function Xv(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(b){var w=b.match(Hv);w&&(n+=w.length);var C=b.lastIndexOf(Zv);r=~C?b.length-C:r+b.length}function o(){var b={line:n,column:r};return function(w){return w.position=new s(b),u(),w}}function s(b){this.start=b,this.end={line:n,column:r},this.source=t.source}s.prototype.content=e;function a(b){var w=new Error(t.source+":"+n+":"+r+": "+b);if(w.reason=b,w.filename=t.source,w.line=n,w.column=r,w.source=e,!t.silent)throw w}function c(b){var w=b.exec(e);if(w){var C=w[0];return i(C),e=e.slice(C.length),w}}function u(){c(Uv)}function p(b){var w;for(b=b||[];w=f();)w!==!1&&b.push(w);return b}function f(){var b=o();if(!(ih!=e.charAt(0)||oh!=e.charAt(1))){for(var w=2;Er!=e.charAt(w)&&(oh!=e.charAt(w)||ih!=e.charAt(w+1));)++w;if(w+=2,Er===e.charAt(w-1))return a("End of comment missing");var C=e.slice(2,w-2);return r+=2,i(C),e=e.slice(w),r+=2,b({type:qv,comment:C})}}function h(){var b=o(),w=c(Vv);if(w){if(f(),!c(Wv))return a("property missing ':'");var C=c(Kv),m=b({type:Qv,property:lh(w[0].replace(rh,Er)),value:C?lh(C[0].replace(rh,Er)):Er});return c(Yv),m}}function g(){var b=[];p(b);for(var w;w=h();)w!==!1&&(b.push(w),p(b));return b}return u(),g()}function lh(e){return e?e.replace(Gv,Er):Er}var Jv=Xv,ew=Is&&Is.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ip,"__esModule",{value:!0});Ip.default=nw;const tw=ew(Jv);function nw(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,tw.default)(e),i=typeof t=="function";return r.forEach(o=>{if(o.type!=="declaration")return;const{property:s,value:a}=o;i?t(s,a,o):a&&(n=n||{},n[s]=a)}),n}var Ua={};Object.defineProperty(Ua,"__esModule",{value:!0});Ua.camelCase=void 0;var rw=/^--[a-zA-Z0-9_-]+$/,iw=/-([a-z])/g,ow=/^[^-]+$/,lw=/^-(webkit|moz|ms|o|khtml)-/,sw=/^-(ms)-/,aw=function(e){return!e||ow.test(e)||rw.test(e)},cw=function(e,t){return t.toUpperCase()},sh=function(e,t){return"".concat(t,"-")},uw=function(e,t){return t===void 0&&(t={}),aw(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(sw,sh):e=e.replace(lw,sh),e.replace(iw,cw))};Ua.camelCase=uw;var dw=Is&&Is.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},pw=dw(Ip),fw=Ua;function l1(e,t){var n={};return!e||typeof e!="string"||(0,pw.default)(e,function(r,i){r&&i&&(n[(0,fw.camelCase)(r,t)]=i)}),n}l1.default=l1;var hw=l1;const gw=ga(hw),H3=U3("end"),Tp=U3("start");function U3(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function mw(e){const t=Tp(e),n=H3(e);if(t&&n)return{start:t,end:n}}function No(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?ah(e.position):"start"in e||"end"in e?ah(e):"line"in e||"column"in e?s1(e):""}function s1(e){return ch(e&&e.line)+":"+ch(e&&e.column)}function ah(e){return s1(e&&e.start)+"-"+s1(e&&e.end)}function ch(e){return e&&typeof e=="number"?e:1}class xt extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},s=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(s=!0,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?o.ruleId=r:(o.source=r.slice(0,c),o.ruleId=r.slice(c+1))}if(!o.place&&o.ancestors&&o.ancestors){const c=o.ancestors[o.ancestors.length-1];c&&(o.place=c.position)}const a=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=a?a.line:void 0,this.name=No(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=s&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}xt.prototype.file="";xt.prototype.name="";xt.prototype.reason="";xt.prototype.message="";xt.prototype.stack="";xt.prototype.column=void 0;xt.prototype.line=void 0;xt.prototype.ancestors=void 0;xt.prototype.cause=void 0;xt.prototype.fatal=void 0;xt.prototype.place=void 0;xt.prototype.ruleId=void 0;xt.prototype.source=void 0;const Rp={}.hasOwnProperty,xw=new Map,Lw=/[A-Z]/g,yw=new Set(["table","tbody","thead","tfoot","tr"]),vw=new Set(["td","th"]),V3="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function ww(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=Pw(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Ew(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Pp:Bv,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=W3(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function W3(e,t,n){if(t.type==="element")return bw(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return kw(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return Sw(e,t,n);if(t.type==="mdxjsEsm")return jw(e,t);if(t.type==="root")return Cw(e,t,n);if(t.type==="text")return $w(e,t)}function bw(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Pp,e.schema=i),e.ancestors.push(t);const o=Y3(e,t.tagName,!1),s=Iw(e,t);let a=zp(e,t);return yw.has(t.tagName)&&(a=a.filter(function(c){return typeof c=="string"?!Iv(c):!0})),K3(e,s,o,t),Mp(s,a),e.ancestors.pop(),e.schema=r,e.create(t,o,s,n)}function kw(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}cl(e,t.position)}function jw(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);cl(e,t.position)}function Sw(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=Pp,e.schema=i),e.ancestors.push(t);const o=t.name===null?e.Fragment:Y3(e,t.name,!0),s=Tw(e,t),a=zp(e,t);return K3(e,s,o,t),Mp(s,a),e.ancestors.pop(),e.schema=r,e.create(t,o,s,n)}function Cw(e,t,n){const r={};return Mp(r,zp(e,t)),e.create(t,e.Fragment,r,n)}function $w(e,t){return t.value}function K3(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Mp(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function Ew(e,t,n){return r;function r(i,o,s,a){const u=Array.isArray(s.children)?n:t;return a?u(o,s,a):u(o,s)}}function Pw(e,t){return n;function n(r,i,o,s){const a=Array.isArray(o.children),c=Tp(r);return t(i,o,s,a,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function Iw(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&Rp.call(t.properties,i)){const o=Rw(e,i,t.properties[i]);if(o){const[s,a]=o;e.tableCellAlignToStyle&&s==="align"&&typeof a=="string"&&vw.has(t.tagName)?r=a:n[s]=a}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function Tw(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const s=o.expression;s.type;const a=s.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else cl(e,t.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const a=r.value.data.estree.body[0];a.type,o=e.evaluater.evaluateExpression(a.expression)}else cl(e,t.position);else o=r.value===null?!0:r.value;n[i]=o}return n}function zp(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:xw;for(;++r<t.children.length;){const o=t.children[r];let s;if(e.passKeys){const c=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(c){const u=i.get(c)||0;s=c+"-"+u,i.set(c,u+1)}}const a=W3(e,o,s);a!==void 0&&n.push(a)}return n}function Rw(e,t,n){const r=Nv(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Sv(n):Fv(n)),r.property==="style"){let i=typeof n=="object"?n:Mw(e,String(n));return e.stylePropertyNameCase==="css"&&(i=zw(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?zv[r.property]||r.property:r.attribute,n]}}function Mw(e,t){try{return gw(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new xt("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=V3+"#cannot-parse-style-attribute",i}}function Y3(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let o=-1,s;for(;++o<i.length;){const a=Jf(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};s=s?{type:"MemberExpression",object:s,property:a,computed:!!(o&&a.type==="Literal"),optional:!1}:a}r=s}else r=Jf(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return Rp.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);cl(e)}function cl(e,t){const n=new xt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=V3+"#cannot-handle-mdx-estrees-without-createevaluater",n}function zw(e){const t={};let n;for(n in e)Rp.call(e,n)&&(t[Aw(n)]=e[n]);return t}function Aw(e){let t=e.replace(Lw,_w);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function _w(e){return"-"+e.toLowerCase()}const Hc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Nw={};function Ow(e,t){const n=Nw,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return G3(e,r,i)}function G3(e,t,n){if(Dw(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return uh(e.children,t,n)}return Array.isArray(e)?uh(e,t,n):""}function uh(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=G3(e[i],t,n);return r.join("")}function Dw(e){return!!(e&&typeof e=="object")}const dh=document.createElement("i");function Ap(e){const t="&"+e+";";dh.innerHTML=t;const n=dh.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function Pn(e,t,n,r){const i=e.length;let o=0,s;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)s=Array.from(r),s.unshift(t,n),e.splice(...s);else for(n&&e.splice(t,n);o<r.length;)s=r.slice(o,o+1e4),s.unshift(t,0),e.splice(...s),o+=1e4,t+=1e4}function Zt(e,t){return e.length>0?(Pn(e,e.length,0,t),e):t}const ph={}.hasOwnProperty;function Bw(e){const t={};let n=-1;for(;++n<e.length;)Fw(t,e[n]);return t}function Fw(e,t){let n;for(n in t){const i=(ph.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let s;if(o)for(s in o){ph.call(i,s)||(i[s]=[]);const a=o[s];Hw(i[s],Array.isArray(a)?a:a?[a]:[])}}}function Hw(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Pn(e,0,0,r)}function Z3(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Pi(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Sn=vr(/[A-Za-z]/),Ot=vr(/[\dA-Za-z]/),Uw=vr(/[#-'*+\--9=?A-Z^-~]/);function a1(e){return e!==null&&(e<32||e===127)}const c1=vr(/\d/),Vw=vr(/[\dA-Fa-f]/),Ww=vr(/[!-/:-@[-`{-~]/);function ie(e){return e!==null&&e<-2}function Tt(e){return e!==null&&(e<0||e===32)}function xe(e){return e===-2||e===-1||e===32}const Kw=vr(new RegExp("\\p{P}|\\p{S}","u")),Yw=vr(/\s/);function vr(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function eo(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let s="";if(o===37&&Ot(e.charCodeAt(n+1))&&Ot(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(s=String.fromCharCode(o));else if(o>55295&&o<57344){const a=e.charCodeAt(n+1);o<56320&&a>56319&&a<57344?(s=String.fromCharCode(o,a),i=1):s="�"}else s=String.fromCharCode(o);s&&(t.push(e.slice(r,n),encodeURIComponent(s)),r=n+i+1,s=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function $e(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return s;function s(c){return xe(c)?(e.enter(n),a(c)):t(c)}function a(c){return xe(c)&&o++<i?(e.consume(c),a):(e.exit(n),t(c))}}const Gw={tokenize:Zw};function Zw(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),$e(e,t,"linePrefix")}function i(a){return e.enter("paragraph"),o(a)}function o(a){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,s(a)}function s(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return ie(a)?(e.consume(a),e.exit("chunkText"),o):(e.consume(a),s)}}const qw={tokenize:Qw},fh={tokenize:Xw};function Qw(e){const t=this,n=[];let r=0,i,o,s;return a;function a(L){if(r<n.length){const v=n[r];return t.containerState=v[1],e.attempt(v[0].continuation,c,u)(L)}return u(L)}function c(L){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&x();const v=t.events.length;let $=v,k;for(;$--;)if(t.events[$][0]==="exit"&&t.events[$][1].type==="chunkFlow"){k=t.events[$][1].end;break}m(r);let S=v;for(;S<t.events.length;)t.events[S][1].end={...k},S++;return Pn(t.events,$+1,0,t.events.slice(v)),t.events.length=S,u(L)}return a(L)}function u(L){if(r===n.length){if(!i)return h(L);if(i.currentConstruct&&i.currentConstruct.concrete)return b(L);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(fh,p,f)(L)}function p(L){return i&&x(),m(r),h(L)}function f(L){return t.parser.lazy[t.now().line]=r!==n.length,s=t.now().offset,b(L)}function h(L){return t.containerState={},e.attempt(fh,g,b)(L)}function g(L){return r++,n.push([t.currentConstruct,t.containerState]),h(L)}function b(L){if(L===null){i&&x(),m(0),e.consume(L);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),w(L)}function w(L){if(L===null){C(e.exit("chunkFlow"),!0),m(0),e.consume(L);return}return ie(L)?(e.consume(L),C(e.exit("chunkFlow")),r=0,t.interrupt=void 0,a):(e.consume(L),w)}function C(L,v){const $=t.sliceStream(L);if(v&&$.push(null),L.previous=o,o&&(o.next=L),o=L,i.defineSkip(L.start),i.write($),t.parser.lazy[L.start.line]){let k=i.events.length;for(;k--;)if(i.events[k][1].start.offset<s&&(!i.events[k][1].end||i.events[k][1].end.offset>s))return;const S=t.events.length;let M=S,T,R;for(;M--;)if(t.events[M][0]==="exit"&&t.events[M][1].type==="chunkFlow"){if(T){R=t.events[M][1].end;break}T=!0}for(m(r),k=S;k<t.events.length;)t.events[k][1].end={...R},k++;Pn(t.events,M+1,0,t.events.slice(S)),t.events.length=k}}function m(L){let v=n.length;for(;v-- >L;){const $=n[v];t.containerState=$[1],$[0].exit.call(t,e)}n.length=L}function x(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function Xw(e,t,n){return $e(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function hh(e){if(e===null||Tt(e)||Yw(e))return 1;if(Kw(e))return 2}function _p(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const u1={name:"attention",resolveAll:Jw,tokenize:eb};function Jw(e,t){let n=-1,r,i,o,s,a,c,u,p;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const f={...e[r][1].end},h={...e[n][1].start};gh(f,-c),gh(h,c),s={type:c>1?"strongSequence":"emphasisSequence",start:f,end:{...e[r][1].end}},a={type:c>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:h},o={type:c>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?"strong":"emphasis",start:{...s.start},end:{...a.end}},e[r][1].end={...s.start},e[n][1].start={...a.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=Zt(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=Zt(u,[["enter",i,t],["enter",s,t],["exit",s,t],["enter",o,t]]),u=Zt(u,_p(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=Zt(u,[["exit",o,t],["enter",a,t],["exit",a,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(p=2,u=Zt(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):p=0,Pn(e,r-1,n-r+3,u),n=r+u.length-p-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function eb(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=hh(r);let o;return s;function s(c){return o=c,e.enter("attentionSequence"),a(c)}function a(c){if(c===o)return e.consume(c),a;const u=e.exit("attentionSequence"),p=hh(c),f=!p||p===2&&i||n.includes(c),h=!i||i===2&&p||n.includes(r);return u._open=!!(o===42?f:f&&(i||!h)),u._close=!!(o===42?h:h&&(p||!f)),t(c)}}function gh(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const tb={name:"autolink",tokenize:nb};function nb(e,t,n){let r=0;return i;function i(g){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(g),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(g){return Sn(g)?(e.consume(g),s):g===64?n(g):u(g)}function s(g){return g===43||g===45||g===46||Ot(g)?(r=1,a(g)):u(g)}function a(g){return g===58?(e.consume(g),r=0,c):(g===43||g===45||g===46||Ot(g))&&r++<32?(e.consume(g),a):(r=0,u(g))}function c(g){return g===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(g),e.exit("autolinkMarker"),e.exit("autolink"),t):g===null||g===32||g===60||a1(g)?n(g):(e.consume(g),c)}function u(g){return g===64?(e.consume(g),p):Uw(g)?(e.consume(g),u):n(g)}function p(g){return Ot(g)?f(g):n(g)}function f(g){return g===46?(e.consume(g),r=0,p):g===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(g),e.exit("autolinkMarker"),e.exit("autolink"),t):h(g)}function h(g){if((g===45||Ot(g))&&r++<63){const b=g===45?h:f;return e.consume(g),b}return n(g)}}const Va={partial:!0,tokenize:rb};function rb(e,t,n){return r;function r(o){return xe(o)?$e(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||ie(o)?t(o):n(o)}}const q3={continuation:{tokenize:ob},exit:lb,name:"blockQuote",tokenize:ib};function ib(e,t,n){const r=this;return i;function i(s){if(s===62){const a=r.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(s),e.exit("blockQuoteMarker"),o}return n(s)}function o(s){return xe(s)?(e.enter("blockQuotePrefixWhitespace"),e.consume(s),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(s))}}function ob(e,t,n){const r=this;return i;function i(s){return xe(s)?$e(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s):o(s)}function o(s){return e.attempt(q3,t,n)(s)}}function lb(e){e.exit("blockQuote")}const Q3={name:"characterEscape",tokenize:sb};function sb(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return Ww(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const X3={name:"characterReference",tokenize:ab};function ab(e,t,n){const r=this;let i=0,o,s;return a;function a(f){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),c}function c(f){return f===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(f),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),o=31,s=Ot,p(f))}function u(f){return f===88||f===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(f),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,s=Vw,p):(e.enter("characterReferenceValue"),o=7,s=c1,p(f))}function p(f){if(f===59&&i){const h=e.exit("characterReferenceValue");return s===Ot&&!Ap(r.sliceSerialize(h))?n(f):(e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return s(f)&&i++<o?(e.consume(f),p):n(f)}}const mh={partial:!0,tokenize:ub},xh={concrete:!0,name:"codeFenced",tokenize:cb};function cb(e,t,n){const r=this,i={partial:!0,tokenize:$};let o=0,s=0,a;return c;function c(k){return u(k)}function u(k){const S=r.events[r.events.length-1];return o=S&&S[1].type==="linePrefix"?S[2].sliceSerialize(S[1],!0).length:0,a=k,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),p(k)}function p(k){return k===a?(s++,e.consume(k),p):s<3?n(k):(e.exit("codeFencedFenceSequence"),xe(k)?$e(e,f,"whitespace")(k):f(k))}function f(k){return k===null||ie(k)?(e.exit("codeFencedFence"),r.interrupt?t(k):e.check(mh,w,v)(k)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),h(k))}function h(k){return k===null||ie(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),f(k)):xe(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),$e(e,g,"whitespace")(k)):k===96&&k===a?n(k):(e.consume(k),h)}function g(k){return k===null||ie(k)?f(k):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),b(k))}function b(k){return k===null||ie(k)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),f(k)):k===96&&k===a?n(k):(e.consume(k),b)}function w(k){return e.attempt(i,v,C)(k)}function C(k){return e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),m}function m(k){return o>0&&xe(k)?$e(e,x,"linePrefix",o+1)(k):x(k)}function x(k){return k===null||ie(k)?e.check(mh,w,v)(k):(e.enter("codeFlowValue"),L(k))}function L(k){return k===null||ie(k)?(e.exit("codeFlowValue"),x(k)):(e.consume(k),L)}function v(k){return e.exit("codeFenced"),t(k)}function $(k,S,M){let T=0;return R;function R(H){return k.enter("lineEnding"),k.consume(H),k.exit("lineEnding"),I}function I(H){return k.enter("codeFencedFence"),xe(H)?$e(k,P,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(H):P(H)}function P(H){return H===a?(k.enter("codeFencedFenceSequence"),_(H)):M(H)}function _(H){return H===a?(T++,k.consume(H),_):T>=s?(k.exit("codeFencedFenceSequence"),xe(H)?$e(k,B,"whitespace")(H):B(H)):M(H)}function B(H){return H===null||ie(H)?(k.exit("codeFencedFence"),S(H)):M(H)}}}function ub(e,t,n){const r=this;return i;function i(s){return s===null?n(s):(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),o)}function o(s){return r.parser.lazy[r.now().line]?n(s):t(s)}}const Uc={name:"codeIndented",tokenize:pb},db={partial:!0,tokenize:fb};function pb(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),$e(e,o,"linePrefix",5)(u)}function o(u){const p=r.events[r.events.length-1];return p&&p[1].type==="linePrefix"&&p[2].sliceSerialize(p[1],!0).length>=4?s(u):n(u)}function s(u){return u===null?c(u):ie(u)?e.attempt(db,s,c)(u):(e.enter("codeFlowValue"),a(u))}function a(u){return u===null||ie(u)?(e.exit("codeFlowValue"),s(u)):(e.consume(u),a)}function c(u){return e.exit("codeIndented"),t(u)}}function fb(e,t,n){const r=this;return i;function i(s){return r.parser.lazy[r.now().line]?n(s):ie(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),i):$e(e,o,"linePrefix",5)(s)}function o(s){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(s):ie(s)?i(s):n(s)}}const hb={name:"codeText",previous:mb,resolve:gb,tokenize:xb};function gb(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function mb(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function xb(e,t,n){let r=0,i,o;return s;function s(f){return e.enter("codeText"),e.enter("codeTextSequence"),a(f)}function a(f){return f===96?(e.consume(f),r++,a):(e.exit("codeTextSequence"),c(f))}function c(f){return f===null?n(f):f===32?(e.enter("space"),e.consume(f),e.exit("space"),c):f===96?(o=e.enter("codeTextSequence"),i=0,p(f)):ie(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),c):(e.enter("codeTextData"),u(f))}function u(f){return f===null||f===32||f===96||ie(f)?(e.exit("codeTextData"),c(f)):(e.consume(f),u)}function p(f){return f===96?(e.consume(f),i++,p):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(f)):(o.type="codeTextData",u(f))}}class Lb{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&uo(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),uo(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),uo(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);uo(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);uo(this.left,n.reverse())}}}function uo(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function J3(e){const t={};let n=-1,r,i,o,s,a,c,u;const p=new Lb(e);for(;++n<p.length;){for(;n in t;)n=t[n];if(r=p.get(n),n&&r[1].type==="chunkFlow"&&p.get(n-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,o=0,o<c.length&&c[o][1].type==="lineEndingBlank"&&(o+=2),o<c.length&&c[o][1].type==="content"))for(;++o<c.length&&c[o][1].type!=="content";)c[o][1].type==="chunkText"&&(c[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,yb(p,n)),n=t[n],u=!0);else if(r[1]._container){for(o=n,i=void 0;o--;)if(s=p.get(o),s[1].type==="lineEnding"||s[1].type==="lineEndingBlank")s[0]==="enter"&&(i&&(p.get(i)[1].type="lineEndingBlank"),s[1].type="lineEnding",i=o);else if(!(s[1].type==="linePrefix"||s[1].type==="listItemIndent"))break;i&&(r[1].end={...p.get(i)[1].start},a=p.slice(i,n),a.unshift(r),p.splice(i,n-i+1,a))}}return Pn(e,0,Number.POSITIVE_INFINITY,p.slice(0)),!u}function yb(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const o=[];let s=n._tokenizer;s||(s=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(s._contentTypeTextTrailing=!0));const a=s.events,c=[],u={};let p,f,h=-1,g=n,b=0,w=0;const C=[w];for(;g;){for(;e.get(++i)[1]!==g;);o.push(i),g._tokenizer||(p=r.sliceStream(g),g.next||p.push(null),f&&s.defineSkip(g.start),g._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=!0),s.write(p),g._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=void 0)),f=g,g=g.next}for(g=n;++h<a.length;)a[h][0]==="exit"&&a[h-1][0]==="enter"&&a[h][1].type===a[h-1][1].type&&a[h][1].start.line!==a[h][1].end.line&&(w=h+1,C.push(w),g._tokenizer=void 0,g.previous=void 0,g=g.next);for(s.events=[],g?(g._tokenizer=void 0,g.previous=void 0):C.pop(),h=C.length;h--;){const m=a.slice(C[h],C[h+1]),x=o.pop();c.push([x,x+m.length-1]),e.splice(x,2,m)}for(c.reverse(),h=-1;++h<c.length;)u[b+c[h][0]]=b+c[h][1],b+=c[h][1]-c[h][0]-1;return u}const vb={resolve:bb,tokenize:kb},wb={partial:!0,tokenize:jb};function bb(e){return J3(e),e}function kb(e,t){let n;return r;function r(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?o(a):ie(a)?e.check(wb,s,o)(a):(e.consume(a),i)}function o(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function s(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function jb(e,t,n){const r=this;return i;function i(s){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),$e(e,o,"linePrefix")}function o(s){if(s===null||ie(s))return n(s);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(s):e.interrupt(r.parser.constructs.flow,n,t)(s)}}function ex(e,t,n,r,i,o,s,a,c){const u=c||Number.POSITIVE_INFINITY;let p=0;return f;function f(m){return m===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(m),e.exit(o),h):m===null||m===32||m===41||a1(m)?n(m):(e.enter(r),e.enter(s),e.enter(a),e.enter("chunkString",{contentType:"string"}),w(m))}function h(m){return m===62?(e.enter(o),e.consume(m),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),g(m))}function g(m){return m===62?(e.exit("chunkString"),e.exit(a),h(m)):m===null||m===60||ie(m)?n(m):(e.consume(m),m===92?b:g)}function b(m){return m===60||m===62||m===92?(e.consume(m),g):g(m)}function w(m){return!p&&(m===null||m===41||Tt(m))?(e.exit("chunkString"),e.exit(a),e.exit(s),e.exit(r),t(m)):p<u&&m===40?(e.consume(m),p++,w):m===41?(e.consume(m),p--,w):m===null||m===32||m===40||a1(m)?n(m):(e.consume(m),m===92?C:w)}function C(m){return m===40||m===41||m===92?(e.consume(m),w):w(m)}}function tx(e,t,n,r,i,o){const s=this;let a=0,c;return u;function u(g){return e.enter(r),e.enter(i),e.consume(g),e.exit(i),e.enter(o),p}function p(g){return a>999||g===null||g===91||g===93&&!c||g===94&&!a&&"_hiddenFootnoteSupport"in s.parser.constructs?n(g):g===93?(e.exit(o),e.enter(i),e.consume(g),e.exit(i),e.exit(r),t):ie(g)?(e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),p):(e.enter("chunkString",{contentType:"string"}),f(g))}function f(g){return g===null||g===91||g===93||ie(g)||a++>999?(e.exit("chunkString"),p(g)):(e.consume(g),c||(c=!xe(g)),g===92?h:f)}function h(g){return g===91||g===92||g===93?(e.consume(g),a++,f):f(g)}}function nx(e,t,n,r,i,o){let s;return a;function a(h){return h===34||h===39||h===40?(e.enter(r),e.enter(i),e.consume(h),e.exit(i),s=h===40?41:h,c):n(h)}function c(h){return h===s?(e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):(e.enter(o),u(h))}function u(h){return h===s?(e.exit(o),c(s)):h===null?n(h):ie(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),$e(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),p(h))}function p(h){return h===s||h===null||ie(h)?(e.exit("chunkString"),u(h)):(e.consume(h),h===92?f:p)}function f(h){return h===s||h===92?(e.consume(h),p):p(h)}}function Oo(e,t){let n;return r;function r(i){return ie(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):xe(i)?$e(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const Sb={name:"definition",tokenize:$b},Cb={partial:!0,tokenize:Eb};function $b(e,t,n){const r=this;let i;return o;function o(g){return e.enter("definition"),s(g)}function s(g){return tx.call(r,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(g)}function a(g){return i=Pi(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),g===58?(e.enter("definitionMarker"),e.consume(g),e.exit("definitionMarker"),c):n(g)}function c(g){return Tt(g)?Oo(e,u)(g):u(g)}function u(g){return ex(e,p,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(g)}function p(g){return e.attempt(Cb,f,f)(g)}function f(g){return xe(g)?$e(e,h,"whitespace")(g):h(g)}function h(g){return g===null||ie(g)?(e.exit("definition"),r.parser.defined.push(i),t(g)):n(g)}}function Eb(e,t,n){return r;function r(a){return Tt(a)?Oo(e,i)(a):n(a)}function i(a){return nx(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function o(a){return xe(a)?$e(e,s,"whitespace")(a):s(a)}function s(a){return a===null||ie(a)?t(a):n(a)}}const Pb={name:"hardBreakEscape",tokenize:Ib};function Ib(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return ie(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const Tb={name:"headingAtx",resolve:Rb,tokenize:Mb};function Rb(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Pn(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function Mb(e,t,n){let r=0;return i;function i(p){return e.enter("atxHeading"),o(p)}function o(p){return e.enter("atxHeadingSequence"),s(p)}function s(p){return p===35&&r++<6?(e.consume(p),s):p===null||Tt(p)?(e.exit("atxHeadingSequence"),a(p)):n(p)}function a(p){return p===35?(e.enter("atxHeadingSequence"),c(p)):p===null||ie(p)?(e.exit("atxHeading"),t(p)):xe(p)?$e(e,a,"whitespace")(p):(e.enter("atxHeadingText"),u(p))}function c(p){return p===35?(e.consume(p),c):(e.exit("atxHeadingSequence"),a(p))}function u(p){return p===null||p===35||Tt(p)?(e.exit("atxHeadingText"),a(p)):(e.consume(p),u)}}const zb=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Lh=["pre","script","style","textarea"],Ab={concrete:!0,name:"htmlFlow",resolveTo:Ob,tokenize:Db},_b={partial:!0,tokenize:Fb},Nb={partial:!0,tokenize:Bb};function Ob(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Db(e,t,n){const r=this;let i,o,s,a,c;return u;function u(E){return p(E)}function p(E){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(E),f}function f(E){return E===33?(e.consume(E),h):E===47?(e.consume(E),o=!0,w):E===63?(e.consume(E),i=3,r.interrupt?t:j):Sn(E)?(e.consume(E),s=String.fromCharCode(E),C):n(E)}function h(E){return E===45?(e.consume(E),i=2,g):E===91?(e.consume(E),i=5,a=0,b):Sn(E)?(e.consume(E),i=4,r.interrupt?t:j):n(E)}function g(E){return E===45?(e.consume(E),r.interrupt?t:j):n(E)}function b(E){const q="CDATA[";return E===q.charCodeAt(a++)?(e.consume(E),a===q.length?r.interrupt?t:P:b):n(E)}function w(E){return Sn(E)?(e.consume(E),s=String.fromCharCode(E),C):n(E)}function C(E){if(E===null||E===47||E===62||Tt(E)){const q=E===47,ee=s.toLowerCase();return!q&&!o&&Lh.includes(ee)?(i=1,r.interrupt?t(E):P(E)):zb.includes(s.toLowerCase())?(i=6,q?(e.consume(E),m):r.interrupt?t(E):P(E)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(E):o?x(E):L(E))}return E===45||Ot(E)?(e.consume(E),s+=String.fromCharCode(E),C):n(E)}function m(E){return E===62?(e.consume(E),r.interrupt?t:P):n(E)}function x(E){return xe(E)?(e.consume(E),x):R(E)}function L(E){return E===47?(e.consume(E),R):E===58||E===95||Sn(E)?(e.consume(E),v):xe(E)?(e.consume(E),L):R(E)}function v(E){return E===45||E===46||E===58||E===95||Ot(E)?(e.consume(E),v):$(E)}function $(E){return E===61?(e.consume(E),k):xe(E)?(e.consume(E),$):L(E)}function k(E){return E===null||E===60||E===61||E===62||E===96?n(E):E===34||E===39?(e.consume(E),c=E,S):xe(E)?(e.consume(E),k):M(E)}function S(E){return E===c?(e.consume(E),c=null,T):E===null||ie(E)?n(E):(e.consume(E),S)}function M(E){return E===null||E===34||E===39||E===47||E===60||E===61||E===62||E===96||Tt(E)?$(E):(e.consume(E),M)}function T(E){return E===47||E===62||xe(E)?L(E):n(E)}function R(E){return E===62?(e.consume(E),I):n(E)}function I(E){return E===null||ie(E)?P(E):xe(E)?(e.consume(E),I):n(E)}function P(E){return E===45&&i===2?(e.consume(E),W):E===60&&i===1?(e.consume(E),A):E===62&&i===4?(e.consume(E),Q):E===63&&i===3?(e.consume(E),j):E===93&&i===5?(e.consume(E),N):ie(E)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(_b,G,_)(E)):E===null||ie(E)?(e.exit("htmlFlowData"),_(E)):(e.consume(E),P)}function _(E){return e.check(Nb,B,G)(E)}function B(E){return e.enter("lineEnding"),e.consume(E),e.exit("lineEnding"),H}function H(E){return E===null||ie(E)?_(E):(e.enter("htmlFlowData"),P(E))}function W(E){return E===45?(e.consume(E),j):P(E)}function A(E){return E===47?(e.consume(E),s="",z):P(E)}function z(E){if(E===62){const q=s.toLowerCase();return Lh.includes(q)?(e.consume(E),Q):P(E)}return Sn(E)&&s.length<8?(e.consume(E),s+=String.fromCharCode(E),z):P(E)}function N(E){return E===93?(e.consume(E),j):P(E)}function j(E){return E===62?(e.consume(E),Q):E===45&&i===2?(e.consume(E),j):P(E)}function Q(E){return E===null||ie(E)?(e.exit("htmlFlowData"),G(E)):(e.consume(E),Q)}function G(E){return e.exit("htmlFlow"),t(E)}}function Bb(e,t,n){const r=this;return i;function i(s){return ie(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),o):n(s)}function o(s){return r.parser.lazy[r.now().line]?n(s):t(s)}}function Fb(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Va,t,n)}}const Hb={name:"htmlText",tokenize:Ub};function Ub(e,t,n){const r=this;let i,o,s;return a;function a(j){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(j),c}function c(j){return j===33?(e.consume(j),u):j===47?(e.consume(j),$):j===63?(e.consume(j),L):Sn(j)?(e.consume(j),M):n(j)}function u(j){return j===45?(e.consume(j),p):j===91?(e.consume(j),o=0,b):Sn(j)?(e.consume(j),x):n(j)}function p(j){return j===45?(e.consume(j),g):n(j)}function f(j){return j===null?n(j):j===45?(e.consume(j),h):ie(j)?(s=f,A(j)):(e.consume(j),f)}function h(j){return j===45?(e.consume(j),g):f(j)}function g(j){return j===62?W(j):j===45?h(j):f(j)}function b(j){const Q="CDATA[";return j===Q.charCodeAt(o++)?(e.consume(j),o===Q.length?w:b):n(j)}function w(j){return j===null?n(j):j===93?(e.consume(j),C):ie(j)?(s=w,A(j)):(e.consume(j),w)}function C(j){return j===93?(e.consume(j),m):w(j)}function m(j){return j===62?W(j):j===93?(e.consume(j),m):w(j)}function x(j){return j===null||j===62?W(j):ie(j)?(s=x,A(j)):(e.consume(j),x)}function L(j){return j===null?n(j):j===63?(e.consume(j),v):ie(j)?(s=L,A(j)):(e.consume(j),L)}function v(j){return j===62?W(j):L(j)}function $(j){return Sn(j)?(e.consume(j),k):n(j)}function k(j){return j===45||Ot(j)?(e.consume(j),k):S(j)}function S(j){return ie(j)?(s=S,A(j)):xe(j)?(e.consume(j),S):W(j)}function M(j){return j===45||Ot(j)?(e.consume(j),M):j===47||j===62||Tt(j)?T(j):n(j)}function T(j){return j===47?(e.consume(j),W):j===58||j===95||Sn(j)?(e.consume(j),R):ie(j)?(s=T,A(j)):xe(j)?(e.consume(j),T):W(j)}function R(j){return j===45||j===46||j===58||j===95||Ot(j)?(e.consume(j),R):I(j)}function I(j){return j===61?(e.consume(j),P):ie(j)?(s=I,A(j)):xe(j)?(e.consume(j),I):T(j)}function P(j){return j===null||j===60||j===61||j===62||j===96?n(j):j===34||j===39?(e.consume(j),i=j,_):ie(j)?(s=P,A(j)):xe(j)?(e.consume(j),P):(e.consume(j),B)}function _(j){return j===i?(e.consume(j),i=void 0,H):j===null?n(j):ie(j)?(s=_,A(j)):(e.consume(j),_)}function B(j){return j===null||j===34||j===39||j===60||j===61||j===96?n(j):j===47||j===62||Tt(j)?T(j):(e.consume(j),B)}function H(j){return j===47||j===62||Tt(j)?T(j):n(j)}function W(j){return j===62?(e.consume(j),e.exit("htmlTextData"),e.exit("htmlText"),t):n(j)}function A(j){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(j),e.exit("lineEnding"),z}function z(j){return xe(j)?$e(e,N,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(j):N(j)}function N(j){return e.enter("htmlTextData"),s(j)}}const Np={name:"labelEnd",resolveAll:Yb,resolveTo:Gb,tokenize:Zb},Vb={tokenize:qb},Wb={tokenize:Qb},Kb={tokenize:Xb};function Yb(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&Pn(e,0,e.length,n),e}function Gb(e,t){let n=e.length,r=0,i,o,s,a;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(s){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(s=n);const c={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[o][1].start},end:{...e[s][1].end}},p={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[s-2][1].start}};return a=[["enter",c,t],["enter",u,t]],a=Zt(a,e.slice(o+1,o+r+3)),a=Zt(a,[["enter",p,t]]),a=Zt(a,_p(t.parser.constructs.insideSpan.null,e.slice(o+r+4,s-3),t)),a=Zt(a,[["exit",p,t],e[s-2],e[s-1],["exit",u,t]]),a=Zt(a,e.slice(s+1)),a=Zt(a,[["exit",c,t]]),Pn(e,o,e.length,a),e}function Zb(e,t,n){const r=this;let i=r.events.length,o,s;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return a;function a(h){return o?o._inactive?f(h):(s=r.parser.defined.includes(Pi(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(h),e.exit("labelMarker"),e.exit("labelEnd"),c):n(h)}function c(h){return h===40?e.attempt(Vb,p,s?p:f)(h):h===91?e.attempt(Wb,p,s?u:f)(h):s?p(h):f(h)}function u(h){return e.attempt(Kb,p,f)(h)}function p(h){return t(h)}function f(h){return o._balanced=!0,n(h)}}function qb(e,t,n){return r;function r(f){return e.enter("resource"),e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),i}function i(f){return Tt(f)?Oo(e,o)(f):o(f)}function o(f){return f===41?p(f):ex(e,s,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(f)}function s(f){return Tt(f)?Oo(e,c)(f):p(f)}function a(f){return n(f)}function c(f){return f===34||f===39||f===40?nx(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(f):p(f)}function u(f){return Tt(f)?Oo(e,p)(f):p(f)}function p(f){return f===41?(e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),e.exit("resource"),t):n(f)}}function Qb(e,t,n){const r=this;return i;function i(a){return tx.call(r,e,o,s,"reference","referenceMarker","referenceString")(a)}function o(a){return r.parser.defined.includes(Pi(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function s(a){return n(a)}}function Xb(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const Jb={name:"labelStartImage",resolveAll:Np.resolveAll,tokenize:ek};function ek(e,t,n){const r=this;return i;function i(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),o}function o(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),s):n(a)}function s(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const tk={name:"labelStartLink",resolveAll:Np.resolveAll,tokenize:nk};function nk(e,t,n){const r=this;return i;function i(s){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelLink"),o}function o(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(s):t(s)}}const Vc={name:"lineEnding",tokenize:rk};function rk(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),$e(e,t,"linePrefix")}}const Cs={name:"thematicBreak",tokenize:ik};function ik(e,t,n){let r=0,i;return o;function o(u){return e.enter("thematicBreak"),s(u)}function s(u){return i=u,a(u)}function a(u){return u===i?(e.enter("thematicBreakSequence"),c(u)):r>=3&&(u===null||ie(u))?(e.exit("thematicBreak"),t(u)):n(u)}function c(u){return u===i?(e.consume(u),r++,c):(e.exit("thematicBreakSequence"),xe(u)?$e(e,a,"whitespace")(u):a(u))}}const St={continuation:{tokenize:ak},exit:uk,name:"list",tokenize:sk},ok={partial:!0,tokenize:dk},lk={partial:!0,tokenize:ck};function sk(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,s=0;return a;function a(g){const b=r.containerState.type||(g===42||g===43||g===45?"listUnordered":"listOrdered");if(b==="listUnordered"?!r.containerState.marker||g===r.containerState.marker:c1(g)){if(r.containerState.type||(r.containerState.type=b,e.enter(b,{_container:!0})),b==="listUnordered")return e.enter("listItemPrefix"),g===42||g===45?e.check(Cs,n,u)(g):u(g);if(!r.interrupt||g===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(g)}return n(g)}function c(g){return c1(g)&&++s<10?(e.consume(g),c):(!r.interrupt||s<2)&&(r.containerState.marker?g===r.containerState.marker:g===41||g===46)?(e.exit("listItemValue"),u(g)):n(g)}function u(g){return e.enter("listItemMarker"),e.consume(g),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||g,e.check(Va,r.interrupt?n:p,e.attempt(ok,h,f))}function p(g){return r.containerState.initialBlankLine=!0,o++,h(g)}function f(g){return xe(g)?(e.enter("listItemPrefixWhitespace"),e.consume(g),e.exit("listItemPrefixWhitespace"),h):n(g)}function h(g){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(g)}}function ak(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Va,i,o);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,$e(e,t,"listItemIndent",r.containerState.size+1)(a)}function o(a){return r.containerState.furtherBlankLines||!xe(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,s(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(lk,t,s)(a))}function s(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,$e(e,e.attempt(St,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function ck(e,t,n){const r=this;return $e(e,i,"listItemIndent",r.containerState.size+1);function i(o){const s=r.events[r.events.length-1];return s&&s[1].type==="listItemIndent"&&s[2].sliceSerialize(s[1],!0).length===r.containerState.size?t(o):n(o)}}function uk(e){e.exit(this.containerState.type)}function dk(e,t,n){const r=this;return $e(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const s=r.events[r.events.length-1];return!xe(o)&&s&&s[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const yh={name:"setextUnderline",resolveTo:pk,tokenize:fk};function pk(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const s={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",s,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=s,e.push(["exit",s,t]),e}function fk(e,t,n){const r=this;let i;return o;function o(u){let p=r.events.length,f;for(;p--;)if(r.events[p][1].type!=="lineEnding"&&r.events[p][1].type!=="linePrefix"&&r.events[p][1].type!=="content"){f=r.events[p][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||f)?(e.enter("setextHeadingLine"),i=u,s(u)):n(u)}function s(u){return e.enter("setextHeadingLineSequence"),a(u)}function a(u){return u===i?(e.consume(u),a):(e.exit("setextHeadingLineSequence"),xe(u)?$e(e,c,"lineSuffix")(u):c(u))}function c(u){return u===null||ie(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const hk={tokenize:gk};function gk(e){const t=this,n=e.attempt(Va,r,e.attempt(this.parser.constructs.flowInitial,i,$e(e,e.attempt(this.parser.constructs.flow,i,e.attempt(vb,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const mk={resolveAll:ix()},xk=rx("string"),Lk=rx("text");function rx(e){return{resolveAll:ix(e==="text"?yk:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,s,a);return s;function s(p){return u(p)?o(p):a(p)}function a(p){if(p===null){n.consume(p);return}return n.enter("data"),n.consume(p),c}function c(p){return u(p)?(n.exit("data"),o(p)):(n.consume(p),c)}function u(p){if(p===null)return!0;const f=i[p];let h=-1;if(f)for(;++h<f.length;){const g=f[h];if(!g.previous||g.previous.call(r,r.previous))return!0}return!1}}}function ix(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function yk(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,s=-1,a=0,c;for(;o--;){const u=i[o];if(typeof u=="string"){for(s=u.length;u.charCodeAt(s-1)===32;)a++,s--;if(s)break;s=-1}else if(u===-2)c=!0,a++;else if(u!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(a=0),a){const u={type:n===e.length||c||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?s:r.start._bufferIndex+s,_index:r.start._index+o,line:r.end.line,column:r.end.column-a,offset:r.end.offset-a},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const vk={42:St,43:St,45:St,48:St,49:St,50:St,51:St,52:St,53:St,54:St,55:St,56:St,57:St,62:q3},wk={91:Sb},bk={[-2]:Uc,[-1]:Uc,32:Uc},kk={35:Tb,42:Cs,45:[yh,Cs],60:Ab,61:yh,95:Cs,96:xh,126:xh},jk={38:X3,92:Q3},Sk={[-5]:Vc,[-4]:Vc,[-3]:Vc,33:Jb,38:X3,42:u1,60:[tb,Hb],91:tk,92:[Pb,Q3],93:Np,95:u1,96:hb},Ck={null:[u1,mk]},$k={null:[42,95]},Ek={null:[]},Pk=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:$k,contentInitial:wk,disable:Ek,document:vk,flow:kk,flowInitial:bk,insideSpan:Ck,string:jk,text:Sk},Symbol.toStringTag,{value:"Module"}));function Ik(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},o=[];let s=[],a=[];const c={attempt:S($),check:S(k),consume:x,enter:L,exit:v,interrupt:S(k,{interrupt:!0})},u={code:null,containerState:{},defineSkip:w,events:[],now:b,parser:e,previous:null,sliceSerialize:h,sliceStream:g,write:f};let p=t.tokenize.call(u,c);return t.resolveAll&&o.push(t),u;function f(I){return s=Zt(s,I),C(),s[s.length-1]!==null?[]:(M(t,0),u.events=_p(o,u.events,u),u.events)}function h(I,P){return Rk(g(I),P)}function g(I){return Tk(s,I)}function b(){const{_bufferIndex:I,_index:P,line:_,column:B,offset:H}=r;return{_bufferIndex:I,_index:P,line:_,column:B,offset:H}}function w(I){i[I.line]=I.column,R()}function C(){let I;for(;r._index<s.length;){const P=s[r._index];if(typeof P=="string")for(I=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===I&&r._bufferIndex<P.length;)m(P.charCodeAt(r._bufferIndex));else m(P)}}function m(I){p=p(I)}function x(I){ie(I)?(r.line++,r.column=1,r.offset+=I===-3?2:1,R()):I!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===s[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=I}function L(I,P){const _=P||{};return _.type=I,_.start=b(),u.events.push(["enter",_,u]),a.push(_),_}function v(I){const P=a.pop();return P.end=b(),u.events.push(["exit",P,u]),P}function $(I,P){M(I,P.from)}function k(I,P){P.restore()}function S(I,P){return _;function _(B,H,W){let A,z,N,j;return Array.isArray(B)?G(B):"tokenize"in B?G([B]):Q(B);function Q(J){return Y;function Y(te){const ue=te!==null&&J[te],Le=te!==null&&J.null,de=[...Array.isArray(ue)?ue:ue?[ue]:[],...Array.isArray(Le)?Le:Le?[Le]:[]];return G(de)(te)}}function G(J){return A=J,z=0,J.length===0?W:E(J[z])}function E(J){return Y;function Y(te){return j=T(),N=J,J.partial||(u.currentConstruct=J),J.name&&u.parser.constructs.disable.null.includes(J.name)?ee():J.tokenize.call(P?Object.assign(Object.create(u),P):u,c,q,ee)(te)}}function q(J){return I(N,j),H}function ee(J){return j.restore(),++z<A.length?E(A[z]):W}}}function M(I,P){I.resolveAll&&!o.includes(I)&&o.push(I),I.resolve&&Pn(u.events,P,u.events.length-P,I.resolve(u.events.slice(P),u)),I.resolveTo&&(u.events=I.resolveTo(u.events,u))}function T(){const I=b(),P=u.previous,_=u.currentConstruct,B=u.events.length,H=Array.from(a);return{from:B,restore:W};function W(){r=I,u.previous=P,u.currentConstruct=_,u.events.length=B,a=H,R()}}function R(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function Tk(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let s;if(n===i)s=[e[n].slice(r,o)];else{if(s=e.slice(n,i),r>-1){const a=s[0];typeof a=="string"?s[0]=a.slice(r):s.shift()}o>0&&s.push(e[i].slice(0,o))}return s}function Rk(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let s;if(typeof o=="string")s=o;else switch(o){case-5:{s="\r";break}case-4:{s=`
`;break}case-3:{s=`\r
`;break}case-2:{s=t?" ":"	";break}case-1:{if(!t&&i)continue;s=" ";break}default:s=String.fromCharCode(o)}i=o===-2,r.push(s)}return r.join("")}function Mk(e){const r={constructs:Bw([Pk,...(e||{}).extensions||[]]),content:i(Gw),defined:[],document:i(qw),flow:i(hk),lazy:{},string:i(xk),text:i(Lk)};return r;function i(o){return s;function s(a){return Ik(r,o,a)}}}function zk(e){for(;!J3(e););return e}const vh=/[\0\t\n\r]/g;function Ak(){let e=1,t="",n=!0,r;return i;function i(o,s,a){const c=[];let u,p,f,h,g;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(s||void 0).decode(o)),f=0,t="",n&&(o.charCodeAt(0)===65279&&f++,n=void 0);f<o.length;){if(vh.lastIndex=f,u=vh.exec(o),h=u&&u.index!==void 0?u.index:o.length,g=o.charCodeAt(h),!u){t=o.slice(f);break}if(g===10&&f===h&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),f<h&&(c.push(o.slice(f,h)),e+=h-f),g){case 0:{c.push(65533),e++;break}case 9:{for(p=Math.ceil(e/4)*4,c.push(-2);e++<p;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}f=h+1}return a&&(r&&c.push(-5),t&&c.push(t),c.push(null)),c}}const _k=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Nk(e){return e.replace(_k,Ok)}function Ok(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return Z3(n.slice(o?2:1),o?16:10)}return Ap(n)||e}const ox={}.hasOwnProperty;function Dk(e,t,n){return t&&typeof t=="object"&&(n=t,t=void 0),Bk(n)(zk(Mk(n).document().write(Ak()(e,t,!0))))}function Bk(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(X),autolinkProtocol:T,autolinkEmail:T,atxHeading:o(Ae),blockQuote:o(Le),characterEscape:T,characterReference:T,codeFenced:o(de),codeFencedFenceInfo:s,codeFencedFenceMeta:s,codeIndented:o(de,s),codeText:o(fe,s),codeTextData:T,data:T,codeFlowValue:T,definition:o(we),definitionDestinationString:s,definitionLabelString:s,definitionTitleString:s,emphasis:o(Ee),hardBreakEscape:o(Ye),hardBreakTrailing:o(Ye),htmlFlow:o(Pe,s),htmlFlowData:T,htmlText:o(Pe,s),htmlTextData:T,image:o(Ut),label:s,link:o(X),listItem:o(ke),listItemValue:h,listOrdered:o(be,f),listUnordered:o(be),paragraph:o(Lt),reference:E,referenceString:s,resourceDestinationString:s,resourceTitleString:s,setextHeading:o(Ae),strong:o(on),thematicBreak:o(Zr)},exit:{atxHeading:c(),atxHeadingSequence:$,autolink:c(),autolinkEmail:ue,autolinkProtocol:te,blockQuote:c(),characterEscapeValue:R,characterReferenceMarkerHexadecimal:ee,characterReferenceMarkerNumeric:ee,characterReferenceValue:J,characterReference:Y,codeFenced:c(C),codeFencedFence:w,codeFencedFenceInfo:g,codeFencedFenceMeta:b,codeFlowValue:R,codeIndented:c(m),codeText:c(H),codeTextData:R,data:R,definition:c(),definitionDestinationString:v,definitionLabelString:x,definitionTitleString:L,emphasis:c(),hardBreakEscape:c(P),hardBreakTrailing:c(P),htmlFlow:c(_),htmlFlowData:R,htmlText:c(B),htmlTextData:R,image:c(A),label:N,labelText:z,lineEnding:I,link:c(W),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:q,resourceDestinationString:j,resourceTitleString:Q,resource:G,setextHeading:c(M),setextHeadingLineSequence:S,setextHeadingText:k,strong:c(),thematicBreak:c()}};lx(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(O){let F={type:"root",children:[]};const ne={stack:[F],tokenStack:[],config:t,enter:a,exit:u,buffer:s,resume:p,data:n},ae=[];let ye=-1;for(;++ye<O.length;)if(O[ye][1].type==="listOrdered"||O[ye][1].type==="listUnordered")if(O[ye][0]==="enter")ae.push(ye);else{const jt=ae.pop();ye=i(O,jt,ye)}for(ye=-1;++ye<O.length;){const jt=t[O[ye][0]];ox.call(jt,O[ye][1].type)&&jt[O[ye][1].type].call(Object.assign({sliceSerialize:O[ye][2].sliceSerialize},ne),O[ye][1])}if(ne.tokenStack.length>0){const jt=ne.tokenStack[ne.tokenStack.length-1];(jt[1]||wh).call(ne,void 0,jt[0])}for(F.position={start:Gn(O.length>0?O[0][1].start:{line:1,column:1,offset:0}),end:Gn(O.length>0?O[O.length-2][1].end:{line:1,column:1,offset:0})},ye=-1;++ye<t.transforms.length;)F=t.transforms[ye](F)||F;return F}function i(O,F,ne){let ae=F-1,ye=-1,jt=!1,Vt,oe,ln,wr;for(;++ae<=ne;){const ct=O[ae];switch(ct[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{ct[0]==="enter"?ye++:ye--,wr=void 0;break}case"lineEndingBlank":{ct[0]==="enter"&&(Vt&&!wr&&!ye&&!ln&&(ln=ae),wr=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:wr=void 0}if(!ye&&ct[0]==="enter"&&ct[1].type==="listItemPrefix"||ye===-1&&ct[0]==="exit"&&(ct[1].type==="listUnordered"||ct[1].type==="listOrdered")){if(Vt){let Tn=ae;for(oe=void 0;Tn--;){const Wt=O[Tn];if(Wt[1].type==="lineEnding"||Wt[1].type==="lineEndingBlank"){if(Wt[0]==="exit")continue;oe&&(O[oe][1].type="lineEndingBlank",jt=!0),Wt[1].type="lineEnding",oe=Tn}else if(!(Wt[1].type==="linePrefix"||Wt[1].type==="blockQuotePrefix"||Wt[1].type==="blockQuotePrefixWhitespace"||Wt[1].type==="blockQuoteMarker"||Wt[1].type==="listItemIndent"))break}ln&&(!oe||ln<oe)&&(Vt._spread=!0),Vt.end=Object.assign({},oe?O[oe][1].start:ct[1].end),O.splice(oe||ae,0,["exit",Vt,ct[2]]),ae++,ne++}if(ct[1].type==="listItemPrefix"){const Tn={type:"listItem",_spread:!1,start:Object.assign({},ct[1].start),end:void 0};Vt=Tn,O.splice(ae,0,["enter",Tn,ct[2]]),ae++,ne++,ln=void 0,wr=!0}}}return O[F][1]._spread=jt,ne}function o(O,F){return ne;function ne(ae){a.call(this,O(ae),ae),F&&F.call(this,ae)}}function s(){this.stack.push({type:"fragment",children:[]})}function a(O,F,ne){this.stack[this.stack.length-1].children.push(O),this.stack.push(O),this.tokenStack.push([F,ne||void 0]),O.position={start:Gn(F.start),end:void 0}}function c(O){return F;function F(ne){O&&O.call(this,ne),u.call(this,ne)}}function u(O,F){const ne=this.stack.pop(),ae=this.tokenStack.pop();if(ae)ae[0].type!==O.type&&(F?F.call(this,O,ae[0]):(ae[1]||wh).call(this,O,ae[0]));else throw new Error("Cannot close `"+O.type+"` ("+No({start:O.start,end:O.end})+"): it’s not open");ne.position.end=Gn(O.end)}function p(){return Ow(this.stack.pop())}function f(){this.data.expectingFirstListItemValue=!0}function h(O){if(this.data.expectingFirstListItemValue){const F=this.stack[this.stack.length-2];F.start=Number.parseInt(this.sliceSerialize(O),10),this.data.expectingFirstListItemValue=void 0}}function g(){const O=this.resume(),F=this.stack[this.stack.length-1];F.lang=O}function b(){const O=this.resume(),F=this.stack[this.stack.length-1];F.meta=O}function w(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function C(){const O=this.resume(),F=this.stack[this.stack.length-1];F.value=O.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function m(){const O=this.resume(),F=this.stack[this.stack.length-1];F.value=O.replace(/(\r?\n|\r)$/g,"")}function x(O){const F=this.resume(),ne=this.stack[this.stack.length-1];ne.label=F,ne.identifier=Pi(this.sliceSerialize(O)).toLowerCase()}function L(){const O=this.resume(),F=this.stack[this.stack.length-1];F.title=O}function v(){const O=this.resume(),F=this.stack[this.stack.length-1];F.url=O}function $(O){const F=this.stack[this.stack.length-1];if(!F.depth){const ne=this.sliceSerialize(O).length;F.depth=ne}}function k(){this.data.setextHeadingSlurpLineEnding=!0}function S(O){const F=this.stack[this.stack.length-1];F.depth=this.sliceSerialize(O).codePointAt(0)===61?1:2}function M(){this.data.setextHeadingSlurpLineEnding=void 0}function T(O){const ne=this.stack[this.stack.length-1].children;let ae=ne[ne.length-1];(!ae||ae.type!=="text")&&(ae=He(),ae.position={start:Gn(O.start),end:void 0},ne.push(ae)),this.stack.push(ae)}function R(O){const F=this.stack.pop();F.value+=this.sliceSerialize(O),F.position.end=Gn(O.end)}function I(O){const F=this.stack[this.stack.length-1];if(this.data.atHardBreak){const ne=F.children[F.children.length-1];ne.position.end=Gn(O.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(F.type)&&(T.call(this,O),R.call(this,O))}function P(){this.data.atHardBreak=!0}function _(){const O=this.resume(),F=this.stack[this.stack.length-1];F.value=O}function B(){const O=this.resume(),F=this.stack[this.stack.length-1];F.value=O}function H(){const O=this.resume(),F=this.stack[this.stack.length-1];F.value=O}function W(){const O=this.stack[this.stack.length-1];if(this.data.inReference){const F=this.data.referenceType||"shortcut";O.type+="Reference",O.referenceType=F,delete O.url,delete O.title}else delete O.identifier,delete O.label;this.data.referenceType=void 0}function A(){const O=this.stack[this.stack.length-1];if(this.data.inReference){const F=this.data.referenceType||"shortcut";O.type+="Reference",O.referenceType=F,delete O.url,delete O.title}else delete O.identifier,delete O.label;this.data.referenceType=void 0}function z(O){const F=this.sliceSerialize(O),ne=this.stack[this.stack.length-2];ne.label=Nk(F),ne.identifier=Pi(F).toLowerCase()}function N(){const O=this.stack[this.stack.length-1],F=this.resume(),ne=this.stack[this.stack.length-1];if(this.data.inReference=!0,ne.type==="link"){const ae=O.children;ne.children=ae}else ne.alt=F}function j(){const O=this.resume(),F=this.stack[this.stack.length-1];F.url=O}function Q(){const O=this.resume(),F=this.stack[this.stack.length-1];F.title=O}function G(){this.data.inReference=void 0}function E(){this.data.referenceType="collapsed"}function q(O){const F=this.resume(),ne=this.stack[this.stack.length-1];ne.label=F,ne.identifier=Pi(this.sliceSerialize(O)).toLowerCase(),this.data.referenceType="full"}function ee(O){this.data.characterReferenceType=O.type}function J(O){const F=this.sliceSerialize(O),ne=this.data.characterReferenceType;let ae;ne?(ae=Z3(F,ne==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):ae=Ap(F);const ye=this.stack[this.stack.length-1];ye.value+=ae}function Y(O){const F=this.stack.pop();F.position.end=Gn(O.end)}function te(O){R.call(this,O);const F=this.stack[this.stack.length-1];F.url=this.sliceSerialize(O)}function ue(O){R.call(this,O);const F=this.stack[this.stack.length-1];F.url="mailto:"+this.sliceSerialize(O)}function Le(){return{type:"blockquote",children:[]}}function de(){return{type:"code",lang:null,meta:null,value:""}}function fe(){return{type:"inlineCode",value:""}}function we(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Ee(){return{type:"emphasis",children:[]}}function Ae(){return{type:"heading",depth:0,children:[]}}function Ye(){return{type:"break"}}function Pe(){return{type:"html",value:""}}function Ut(){return{type:"image",title:null,url:"",alt:null}}function X(){return{type:"link",title:null,url:"",children:[]}}function be(O){return{type:"list",ordered:O.type==="listOrdered",start:null,spread:O._spread,children:[]}}function ke(O){return{type:"listItem",spread:O._spread,checked:null,children:[]}}function Lt(){return{type:"paragraph",children:[]}}function on(){return{type:"strong",children:[]}}function He(){return{type:"text",value:""}}function Zr(){return{type:"thematicBreak"}}}function Gn(e){return{line:e.line,column:e.column,offset:e.offset}}function lx(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?lx(e,r):Fk(e,r)}}function Fk(e,t){let n;for(n in t)if(ox.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function wh(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+No({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+No({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+No({start:t.start,end:t.end})+") is still open")}function Hk(e){const t=this;t.parser=n;function n(r){return Dk(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function Uk(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function Vk(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function Wk(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function Kk(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Yk(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Gk(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=eo(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let s,a=e.footnoteCounts.get(r);a===void 0?(a=0,e.footnoteOrder.push(r),s=e.footnoteOrder.length):s=o+1,a+=1,e.footnoteCounts.set(r,a);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(s)}]};e.patch(t,c);const u={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,u),e.applyData(t,u)}function Zk(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function qk(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function sx(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const s=i[i.length-1];return s&&s.type==="text"?s.value+=r:i.push({type:"text",value:r}),i}function Qk(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return sx(e,t);const i={src:eo(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function Xk(e,t){const n={src:eo(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function Jk(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function ej(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return sx(e,t);const i={href:eo(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function tj(e,t){const n={href:eo(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function nj(e,t,n){const r=e.all(t),i=n?rj(n):ax(t),o={},s=[];if(typeof t.checked=="boolean"){const p=r[0];let f;p&&p.type==="element"&&p.tagName==="p"?f=p:(f={type:"element",tagName:"p",properties:{},children:[]},r.unshift(f)),f.children.length>0&&f.children.unshift({type:"text",value:" "}),f.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const p=r[a];(i||a!==0||p.type!=="element"||p.tagName!=="p")&&s.push({type:"text",value:`
`}),p.type==="element"&&p.tagName==="p"&&!i?s.push(...p.children):s.push(p)}const c=r[r.length-1];c&&(i||c.type!=="element"||c.tagName!=="p")&&s.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:o,children:s};return e.patch(t,u),e.applyData(t,u)}function rj(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=ax(n[r])}return t}function ax(e){const t=e.spread;return t??e.children.length>1}function ij(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const s=r[i];if(s.type==="element"&&s.tagName==="li"&&s.properties&&Array.isArray(s.properties.className)&&s.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function oj(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function lj(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function sj(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function aj(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const s={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],s),i.push(s)}if(n.length>0){const s={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=Tp(t.children[1]),c=H3(t.children[t.children.length-1]);a&&c&&(s.position={start:a,end:c}),i.push(s)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function cj(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",s=n&&n.type==="table"?n.align:void 0,a=s?s.length:t.children.length;let c=-1;const u=[];for(;++c<a;){const f=t.children[c],h={},g=s?s[c]:void 0;g&&(h.align=g);let b={type:"element",tagName:o,properties:h,children:[]};f&&(b.children=e.all(f),e.patch(f,b),b=e.applyData(f,b)),u.push(b)}const p={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,p),e.applyData(t,p)}function uj(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const bh=9,kh=32;function dj(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(jh(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(jh(t.slice(i),i>0,!1)),o.join("")}function jh(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===bh||o===kh;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===bh||o===kh;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function pj(e,t){const n={type:"text",value:dj(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function fj(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const hj={blockquote:Uk,break:Vk,code:Wk,delete:Kk,emphasis:Yk,footnoteReference:Gk,heading:Zk,html:qk,imageReference:Qk,image:Xk,inlineCode:Jk,linkReference:ej,link:tj,listItem:nj,list:ij,paragraph:oj,root:lj,strong:sj,table:aj,tableCell:uj,tableRow:cj,text:pj,thematicBreak:fj,toml:Wl,yaml:Wl,definition:Wl,footnoteDefinition:Wl};function Wl(){}const cx=-1,Wa=0,Do=1,pa=2,Op=3,Dp=4,Bp=5,Fp=6,ux=7,dx=8,Sh=typeof self=="object"?self:globalThis,gj=(e,t)=>{const n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,s]=t[i];switch(o){case Wa:case cx:return n(s,i);case Do:{const a=n([],i);for(const c of s)a.push(r(c));return a}case pa:{const a=n({},i);for(const[c,u]of s)a[r(c)]=r(u);return a}case Op:return n(new Date(s),i);case Dp:{const{source:a,flags:c}=s;return n(new RegExp(a,c),i)}case Bp:{const a=n(new Map,i);for(const[c,u]of s)a.set(r(c),r(u));return a}case Fp:{const a=n(new Set,i);for(const c of s)a.add(r(c));return a}case ux:{const{name:a,message:c}=s;return n(new Sh[a](c),i)}case dx:return n(BigInt(s),i);case"BigInt":return n(Object(BigInt(s)),i);case"ArrayBuffer":return n(new Uint8Array(s).buffer,s);case"DataView":{const{buffer:a}=new Uint8Array(s);return n(new DataView(a),s)}}return n(new Sh[o](s),i)};return r},Ch=e=>gj(new Map,e)(0),ei="",{toString:mj}={},{keys:xj}=Object,po=e=>{const t=typeof e;if(t!=="object"||!e)return[Wa,t];const n=mj.call(e).slice(8,-1);switch(n){case"Array":return[Do,ei];case"Object":return[pa,ei];case"Date":return[Op,ei];case"RegExp":return[Dp,ei];case"Map":return[Bp,ei];case"Set":return[Fp,ei];case"DataView":return[Do,n]}return n.includes("Array")?[Do,n]:n.includes("Error")?[ux,n]:[pa,n]},Kl=([e,t])=>e===Wa&&(t==="function"||t==="symbol"),Lj=(e,t,n,r)=>{const i=(s,a)=>{const c=r.push(s)-1;return n.set(a,c),c},o=s=>{if(n.has(s))return n.get(s);let[a,c]=po(s);switch(a){case Wa:{let p=s;switch(c){case"bigint":a=dx,p=s.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);p=null;break;case"undefined":return i([cx],s)}return i([a,p],s)}case Do:{if(c){let h=s;return c==="DataView"?h=new Uint8Array(s.buffer):c==="ArrayBuffer"&&(h=new Uint8Array(s)),i([c,[...h]],s)}const p=[],f=i([a,p],s);for(const h of s)p.push(o(h));return f}case pa:{if(c)switch(c){case"BigInt":return i([c,s.toString()],s);case"Boolean":case"Number":case"String":return i([c,s.valueOf()],s)}if(t&&"toJSON"in s)return o(s.toJSON());const p=[],f=i([a,p],s);for(const h of xj(s))(e||!Kl(po(s[h])))&&p.push([o(h),o(s[h])]);return f}case Op:return i([a,s.toISOString()],s);case Dp:{const{source:p,flags:f}=s;return i([a,{source:p,flags:f}],s)}case Bp:{const p=[],f=i([a,p],s);for(const[h,g]of s)(e||!(Kl(po(h))||Kl(po(g))))&&p.push([o(h),o(g)]);return f}case Fp:{const p=[],f=i([a,p],s);for(const h of s)(e||!Kl(po(h)))&&p.push(o(h));return f}}const{message:u}=s;return i([a,{name:c,message:u}],s)};return o},$h=(e,{json:t,lossy:n}={})=>{const r=[];return Lj(!(t||n),!!t,new Map,r)(e),r},fa=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Ch($h(e,t)):structuredClone(e):(e,t)=>Ch($h(e,t));function yj(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function vj(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function wj(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||yj,r=e.options.footnoteBackLabel||vj,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",s=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let c=-1;for(;++c<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[c]);if(!u)continue;const p=e.all(u),f=String(u.identifier).toUpperCase(),h=eo(f.toLowerCase());let g=0;const b=[],w=e.footnoteCounts.get(f);for(;w!==void 0&&++g<=w;){b.length>0&&b.push({type:"text",value:" "});let x=typeof n=="string"?n:n(c,g);typeof x=="string"&&(x={type:"text",value:x}),b.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+h+(g>1?"-"+g:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,g),className:["data-footnote-backref"]},children:Array.isArray(x)?x:[x]})}const C=p[p.length-1];if(C&&C.type==="element"&&C.tagName==="p"){const x=C.children[C.children.length-1];x&&x.type==="text"?x.value+=" ":C.children.push({type:"text",value:" "}),C.children.push(...b)}else p.push(...b);const m={type:"element",tagName:"li",properties:{id:t+"fn-"+h},children:e.wrap(p,!0)};e.patch(u,m),a.push(m)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...fa(s),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const px=function(e){if(e==null)return Sj;if(typeof e=="function")return Ka(e);if(typeof e=="object")return Array.isArray(e)?bj(e):kj(e);if(typeof e=="string")return jj(e);throw new Error("Expected function, string, or object as test")};function bj(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=px(e[n]);return Ka(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return!0;return!1}}function kj(e){const t=e;return Ka(n);function n(r){const i=r;let o;for(o in e)if(i[o]!==t[o])return!1;return!0}}function jj(e){return Ka(t);function t(n){return n&&n.type===e}}function Ka(e){return t;function t(n,r,i){return!!(Cj(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function Sj(){return!0}function Cj(e){return e!==null&&typeof e=="object"&&"type"in e}const fx=[],$j=!0,Eh=!1,Ej="skip";function Pj(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const o=px(i),s=r?-1:1;a(e,void 0,[])();function a(c,u,p){const f=c&&typeof c=="object"?c:{};if(typeof f.type=="string"){const g=typeof f.tagName=="string"?f.tagName:typeof f.name=="string"?f.name:void 0;Object.defineProperty(h,"name",{value:"node ("+(c.type+(g?"<"+g+">":""))+")"})}return h;function h(){let g=fx,b,w,C;if((!t||o(c,u,p[p.length-1]||void 0))&&(g=Ij(n(c,p)),g[0]===Eh))return g;if("children"in c&&c.children){const m=c;if(m.children&&g[0]!==Ej)for(w=(r?m.children.length:-1)+s,C=p.concat(m);w>-1&&w<m.children.length;){const x=m.children[w];if(b=a(x,w,C)(),b[0]===Eh)return b;w=typeof b[1]=="number"?b[1]:w+s}}return g}}}function Ij(e){return Array.isArray(e)?e:typeof e=="number"?[$j,e]:e==null?fx:[e]}function hx(e,t,n,r){let i,o,s;typeof t=="function"&&typeof n!="function"?(o=void 0,s=t,i=n):(o=t,s=n,i=r),Pj(e,o,a,i);function a(c,u){const p=u[u.length-1],f=p?p.children.indexOf(c):void 0;return s(c,f,p)}}const d1={}.hasOwnProperty,Tj={};function Rj(e,t){const n=t||Tj,r=new Map,i=new Map,o=new Map,s={...hj,...n.handlers},a={all:u,applyData:zj,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:s,one:c,options:n,patch:Mj,wrap:_j};return hx(e,function(p){if(p.type==="definition"||p.type==="footnoteDefinition"){const f=p.type==="definition"?r:i,h=String(p.identifier).toUpperCase();f.has(h)||f.set(h,p)}}),a;function c(p,f){const h=p.type,g=a.handlers[h];if(d1.call(a.handlers,h)&&g)return g(a,p,f);if(a.options.passThrough&&a.options.passThrough.includes(h)){if("children"in p){const{children:w,...C}=p,m=fa(C);return m.children=a.all(p),m}return fa(p)}return(a.options.unknownHandler||Aj)(a,p,f)}function u(p){const f=[];if("children"in p){const h=p.children;let g=-1;for(;++g<h.length;){const b=a.one(h[g],p);if(b){if(g&&h[g-1].type==="break"&&(!Array.isArray(b)&&b.type==="text"&&(b.value=Ph(b.value)),!Array.isArray(b)&&b.type==="element")){const w=b.children[0];w&&w.type==="text"&&(w.value=Ph(w.value))}Array.isArray(b)?f.push(...b):f.push(b)}}}return f}}function Mj(e,t){e.position&&(t.position=mw(e))}function zj(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const s="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:s}}n.type==="element"&&o&&Object.assign(n.properties,fa(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function Aj(e,t){const n=t.data||{},r="value"in t&&!(d1.call(n,"hProperties")||d1.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function _j(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Ph(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Ih(e,t){const n=Rj(e,t),r=n.one(e,void 0),i=wj(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function Nj(e,t){return e&&"run"in e?async function(n,r){const i=Ih(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Ih(n,{file:r,...e||t})}}function Th(e){if(e)throw e}var $s=Object.prototype.hasOwnProperty,gx=Object.prototype.toString,Rh=Object.defineProperty,Mh=Object.getOwnPropertyDescriptor,zh=function(t){return typeof Array.isArray=="function"?Array.isArray(t):gx.call(t)==="[object Array]"},Ah=function(t){if(!t||gx.call(t)!=="[object Object]")return!1;var n=$s.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&$s.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||$s.call(t,i)},_h=function(t,n){Rh&&n.name==="__proto__"?Rh(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Nh=function(t,n){if(n==="__proto__")if($s.call(t,n)){if(Mh)return Mh(t,n).value}else return;return t[n]},Oj=function e(){var t,n,r,i,o,s,a=arguments[0],c=1,u=arguments.length,p=!1;for(typeof a=="boolean"&&(p=a,a=arguments[1]||{},c=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});c<u;++c)if(t=arguments[c],t!=null)for(n in t)r=Nh(a,n),i=Nh(t,n),a!==i&&(p&&i&&(Ah(i)||(o=zh(i)))?(o?(o=!1,s=r&&zh(r)?r:[]):s=r&&Ah(r)?r:{},_h(a,{name:n,newValue:e(p,s,i)})):typeof i<"u"&&_h(a,{name:n,newValue:i}));return a};const Wc=ga(Oj);function p1(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Dj(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const s=i.pop();if(typeof s!="function")throw new TypeError("Expected function as last argument, not "+s);a(null,...i);function a(c,...u){const p=e[++o];let f=-1;if(c){s(c);return}for(;++f<i.length;)(u[f]===null||u[f]===void 0)&&(u[f]=i[f]);i=u,p?Bj(p,a)(...u):s(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function Bj(e,t){let n;return r;function r(...s){const a=e.length>s.length;let c;a&&s.push(i);try{c=e.apply(this,s)}catch(u){const p=u;if(a&&n)throw p;return i(p)}a||(c&&c.then&&typeof c.then=="function"?c.then(o,i):c instanceof Error?i(c):o(c))}function i(s,...a){n||(n=!0,t(s,...a))}function o(s){i(null,s)}}const kn={basename:Fj,dirname:Hj,extname:Uj,join:Vj,sep:"/"};function Fj(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');vl(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let s=-1,a=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else s<0&&(o=!0,s=i+1),a>-1&&(e.codePointAt(i)===t.codePointAt(a--)?a<0&&(r=i):(a=-1,r=s));return n===r?r=s:r<0&&(r=e.length),e.slice(n,r)}function Hj(e){if(vl(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function Uj(e){vl(e);let t=e.length,n=-1,r=0,i=-1,o=0,s;for(;t--;){const a=e.codePointAt(t);if(a===47){if(s){r=t+1;break}continue}n<0&&(s=!0,n=t+1),a===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function Vj(...e){let t=-1,n;for(;++t<e.length;)vl(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":Wj(n)}function Wj(e){vl(e);const t=e.codePointAt(0)===47;let n=Kj(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function Kj(e,t){let n="",r=0,i=-1,o=0,s=-1,a,c;for(;++s<=e.length;){if(s<e.length)a=e.codePointAt(s);else{if(a===47)break;a=47}if(a===47){if(!(i===s-1||o===1))if(i!==s-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),i=s,o=0;continue}}else if(n.length>0){n="",r=0,i=s,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,s):n=e.slice(i+1,s),r=s-i-1;i=s,o=0}else a===46&&o>-1?o++:o=-1}return n}function vl(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const Yj={cwd:Gj};function Gj(){return"/"}function f1(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function Zj(e){if(typeof e=="string")e=new URL(e);else if(!f1(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return qj(e)}function qj(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const Kc=["history","path","basename","stem","extname","dirname"];class mx{constructor(t){let n;t?f1(t)?n={path:t}:typeof t=="string"||Qj(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":Yj.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Kc.length;){const o=Kc[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)Kc.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?kn.basename(this.path):void 0}set basename(t){Gc(t,"basename"),Yc(t,"basename"),this.path=kn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?kn.dirname(this.path):void 0}set dirname(t){Oh(this.basename,"dirname"),this.path=kn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?kn.extname(this.path):void 0}set extname(t){if(Yc(t,"extname"),Oh(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=kn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){f1(t)&&(t=Zj(t)),Gc(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?kn.basename(this.path,this.extname):void 0}set stem(t){Gc(t,"stem"),Yc(t,"stem"),this.path=kn.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new xt(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Yc(e,t){if(e&&e.includes(kn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+kn.sep+"`")}function Gc(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Oh(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function Qj(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Xj=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},Jj={}.hasOwnProperty;class Hp extends Xj{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Dj()}copy(){const t=new Hp;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Wc(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Qc("data",this.frozen),this.namespace[t]=n,this):Jj.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Qc("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Yl(t),r=this.parser||this.Parser;return Zc("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Zc("process",this.parser||this.Parser),qc("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,s){const a=Yl(t),c=r.parse(a);r.run(c,a,function(p,f,h){if(p||!f||!h)return u(p);const g=f,b=r.stringify(g,h);nS(b)?h.value=b:h.result=b,u(p,h)});function u(p,f){p||!f?s(p):o?o(f):n(void 0,f)}}}processSync(t){let n=!1,r;return this.freeze(),Zc("processSync",this.parser||this.Parser),qc("processSync",this.compiler||this.Compiler),this.process(t,i),Bh("processSync","process",n),r;function i(o,s){n=!0,Th(o),r=s}}run(t,n,r){Dh(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(s,a){const c=Yl(n);i.run(t,c,u);function u(p,f,h){const g=f||t;p?a(p):s?s(g):r(void 0,g,h)}}}runSync(t,n){let r=!1,i;return this.run(t,n,o),Bh("runSync","run",r),i;function o(s,a){Th(s),i=a,r=!0}}stringify(t,n){this.freeze();const r=Yl(n),i=this.compiler||this.Compiler;return qc("stringify",i),Dh(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(Qc("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?a(t):s(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(u){if(typeof u=="function")c(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[p,...f]=u;c(p,f)}else s(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function s(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(u.plugins),u.settings&&(i.settings=Wc(!0,i.settings,u.settings))}function a(u){let p=-1;if(u!=null)if(Array.isArray(u))for(;++p<u.length;){const f=u[p];o(f)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function c(u,p){let f=-1,h=-1;for(;++f<r.length;)if(r[f][0]===u){h=f;break}if(h===-1)r.push([u,...p]);else if(p.length>0){let[g,...b]=p;const w=r[h][1];p1(w)&&p1(g)&&(g=Wc(!0,w,g)),r[h]=[u,g,...b]}}}}const eS=new Hp().freeze();function Zc(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function qc(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Qc(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Dh(e){if(!p1(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Bh(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Yl(e){return tS(e)?e:new mx(e)}function tS(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function nS(e){return typeof e=="string"||rS(e)}function rS(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const iS="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Fh=[],Hh={allowDangerousHtml:!0},oS=/^(https?|ircs?|mailto|xmpp)$/i,lS=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Wi(e){const t=sS(e),n=aS(e);return cS(t.runSync(t.parse(n),n),e)}function sS(e){const t=e.rehypePlugins||Fh,n=e.remarkPlugins||Fh,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Hh}:Hh;return eS().use(Hk).use(n).use(Nj,r).use(t)}function aS(e){const t=e.children||"",n=new mx;return typeof t=="string"&&(n.value=t),n}function cS(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,o=t.disallowedElements,s=t.skipHtml,a=t.unwrapDisallowed,c=t.urlTransform||uS;for(const p of lS)Object.hasOwn(t,p.from)&&(""+p.from+(p.to?"use `"+p.to+"` instead":"remove it")+iS+p.id,void 0);return hx(e,u),ww(e,{Fragment:l.Fragment,components:i,ignoreInvalidStyle:!0,jsx:l.jsx,jsxs:l.jsxs,passKeys:!0,passNode:!0});function u(p,f,h){if(p.type==="raw"&&h&&typeof f=="number")return s?h.children.splice(f,1):h.children[f]={type:"text",value:p.value},f;if(p.type==="element"){let g;for(g in Hc)if(Object.hasOwn(Hc,g)&&Object.hasOwn(p.properties,g)){const b=p.properties[g],w=Hc[g];(w===null||w.includes(p.tagName))&&(p.properties[g]=c(String(b||""),g,p))}}if(p.type==="element"){let g=n?!n.includes(p.tagName):o?o.includes(p.tagName):!1;if(!g&&r&&typeof f=="number"&&(g=!r(p,f,h)),g&&h&&typeof f=="number")return a&&p.children?h.children.splice(f,1,...p.children):h.children.splice(f,1),f}}}function uS(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||oS.test(e.slice(0,t))?e:""}const h1=d.div`
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
`;function wl({markdown:e,fallback:t=null}){const n=e==null?void 0:e.trim();return n?l.jsx(h1,{children:l.jsx(Wi,{children:n})}):l.jsx(l.Fragment,{children:t})}const dS=Ke`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,pS=Ke`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,fS=d.button`
  position: fixed;
  inset: 0;
  z-index: 113;
  border: none;
  margin: 0;
  padding: 0;
  background: rgba(0, 0, 0, 0.28);
  cursor: default;
  -webkit-tap-highlight-color: transparent;
  animation: ${pS} 0.52s cubic-bezier(0.25, 0.85, 0.3, 1) forwards;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: -4px;
  }
`,hS=d.div`
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
`,gS=d.div`
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
  animation: ${dS} 0.42s cubic-bezier(0.25, 0.8, 0.25, 1) both;
  -webkit-tap-highlight-color: transparent;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary400};
    outline-offset: 2px;
  }
`,mS=d.div`
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
`,xS=d.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
  padding-right: 36px;
`,LS=d.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
`,yS=d.span`
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
  line-height: 1.35;
`,vS=d.div`
  position: absolute;
  top: -2px;
  right: -4px;
  display: flex;
  align-items: center;
  justify-content: center;
`,wS=d.div`
  font-size: 0.88rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text700};

  .star {
    color: #e8b923;
    margin-right: 4px;
  }
`,bS=d.div`
  font-size: 0.86rem;
  color: ${({theme:e})=>e.colors.text700};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,kS=d.div`
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.45;
  color: ${({theme:e})=>e.colors.text700};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,jS=d.span`
  margin-top: auto;
  padding-top: 6px;
  font-size: 0.82rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.primary600};
`,SS=({place:e,onClose:t,onOpenDetail:n})=>{const r=Un(e.regionId),i=e.venueKind??"명상지",o=[r==null?void 0:r.name,e.hashtags[0]??i].filter(Boolean).join(" · "),s=e.rating!=null||e.reviewCount!=null&&e.reviewCount>0,a=y.useCallback(()=>{n()},[n]),c=p=>{p.stopPropagation()},u=p=>{(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),a())};return l.jsxs(l.Fragment,{children:[l.jsx(fS,{type:"button",onClick:t,"aria-label":"닫기"}),l.jsx(hS,{children:l.jsxs(gS,{role:"button",tabIndex:0,onClick:a,onKeyDown:u,"aria-label":`${e.name} 상세 페이지로 이동`,children:[l.jsx(mS,{children:l.jsx("img",{src:ey(e.thumbnailUrl),alt:"",draggable:!1,loading:"lazy",decoding:"async",sizes:"min(100vw - 32px, 400px)"})}),l.jsxs(xS,{children:[l.jsx(LS,{children:l.jsx(yS,{children:e.name})}),l.jsx(vS,{onClick:c,onPointerDown:c,children:l.jsx(Ha,{placeId:e.id})}),s&&l.jsxs(wS,{children:[e.rating!=null&&l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"star","aria-hidden":!0,children:"★"}),e.rating.toFixed(1)]}),e.reviewCount!=null&&l.jsxs("span",{children:[e.rating!=null?" · ":"","후기 ",e.reviewCount]})]}),l.jsx(bS,{children:o}),l.jsx(kS,{children:l.jsx(wl,{markdown:e.shortDescription})}),l.jsx(jS,{children:"탭하여 상세 보기 →"})]})]})})]})},CS={minLat:36.45,maxLat:37.65,minLng:126.75,maxLng:127.15};function $S(e){let t=2166136261;for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619);const n=(t>>>0)%10001/1e4,r=(Math.imul(t,7919)>>>0)%10001/1e4;return[n,r]}function Xc(e){const t=ua.find(a=>a.id===e.regionId)??CS,[n,r]=$S(`${e.id}\0${e.address}`),i=.1,o=t.minLat+(t.maxLat-t.minLat)*(i+(1-2*i)*n),s=t.minLng+(t.maxLng-t.minLng)*(i+(1-2*i)*r);return{lat:o,lng:s}}function jo(){var e,t;return!!((t=(e=window.naver)==null?void 0:e.maps)!=null&&t.Map)}function So(){var t,n;const e=(n=(t=window.naver)==null?void 0:t.maps)==null?void 0:n.Service;return typeof(e==null?void 0:e.geocode)=="function"}function xx(){return document.querySelector('script[src*="oapi.map.naver.com"]')}function g1(e){return e.src.includes("geocoder")}async function Uh(e,t,n=25e3){e()||await new Promise((r,i)=>{const o=Date.now(),s=window.setInterval(()=>{e()?(window.clearInterval(s),r()):Date.now()-o>n&&(window.clearInterval(s),i(new Error(`${t} 로드 시간 초과`)))},50)})}async function ES(e){await new Promise((t,n)=>{const r=`__naverMapsCb_${Date.now()}`;window[r]=()=>{t(),delete window[r]};const i=document.createElement("script");i.async=!0,i.onerror=()=>{delete window[r],n(new Error("Naver Maps 스크립트 로드 실패"))},i.src=`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${encodeURIComponent(e)}&submodules=geocoder&callback=${r}`,document.head.appendChild(i)})}function PS(){const e=xx();return!e||g1(e)||!jo()?!1:!So()}async function Lx(e){const t=e==null?void 0:e.trim();if(!t)return!1;if(jo()&&So())return!0;if(PS())throw new Error("지도 API가 geocoder 없이 로드되었습니다. 페이지를 새로고침한 뒤 다시 검색해 주세요.");const n=xx();if(n&&g1(n))try{return await Uh(()=>jo()&&So(),"Naver Maps(geocoder)"),jo()&&So()}catch{return!1}n&&!g1(n)&&n.remove(),await ES(t);try{return await Uh(()=>jo()&&So(),"Naver Maps(geocoder)"),!0}catch{return!1}}async function IS(e){try{return await Lx(e)}catch{return!1}}async function Es(e){return Lx(e)}const TS=d.div`
  position: relative;
  width: 100%;
  flex: 1;
  min-height: ${({$fillViewport:e})=>e?"0":"min(62dvh, 520px)"};
  border-radius: ${({$fillViewport:e,theme:t})=>e?"0":t.radii.lg};
  overflow: hidden;
  background: ${({theme:e})=>e.colors.bg100};
`,RS=d.button`
  ${({$floating:e,$rightInsetPx:t=0})=>e?Me`
          position: fixed;
          z-index: 108;
          right: calc(14px + ${t}px);
          bottom: calc(64px + env(safe-area-inset-bottom, 0px));
        `:Me`
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
`,MS=d.div`
  width: 100%;
  height: 100%;
  min-height: ${({$fillViewport:e})=>e?"100%":"min(62dvh, 520px)"};
`;function zS(e){return e<=9?100:e<=11?72:e<=13?48:0}function AS(e,t){const n=new Set(e.map((i,o)=>o)),r=[];for(;n.size>0;){const i=n.values().next().value,o=new Set([i]);n.delete(i);let s=!0;for(;s;){s=!1;for(const a of[...n]){const c=e[a];let u=!1;for(const p of o){const f=e[p],h=c.x-f.x,g=c.y-f.y;if(h*h+g*g<=t*t){u=!0;break}}u&&(o.add(a),n.delete(a),s=!0)}}r.push([...o])}return r}function _S(e){const t=e;return typeof t.lat=="function"&&typeof t.lng=="function"?{lat:t.lat(),lng:t.lng()}:{lat:37.5665,lng:126.978}}function NS(e){const t=e.replace(/[^a-zA-Z0-9_-]/g,"_");return t.length>0?t.slice(0,48):"x"}function OS(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const yx=88,vx=34,wx=13,DS=7,BS=yx,bx=vx+wx,FS=yx/2,HS=bx,US="#a78bfa",VS="#8b5cf6",WS="#a78bfa";function KS(e,t){const n=OS(t);return`<div style="width:${BS}px;height:${bx}px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;filter:drop-shadow(0 2px 3px rgba(0,0,0,.24));pointer-events:auto" aria-hidden="true">
<div style="width:100%;height:${vx}px;box-sizing:border-box;background:${US};border-radius:6px;padding:3px 4px;display:flex;align-items:center;justify-content:center">
<span style="display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;box-sizing:border-box;margin:0;color:#fff;font-size:10px;font-weight:800;line-height:1.2;text-align:center;word-break:keep-all;font-family:system-ui,-apple-system,'Segoe UI',sans-serif;letter-spacing:-0.02em;text-shadow:0 1px 2px rgba(0,0,0,.45)">${n}</span>
</div>
<div style="width:${DS}px;height:${wx}px;box-sizing:border-box;background:${VS};border-radius:0 0 3px 3px;flex-shrink:0"></div>
</div>`}function YS(e,t){const n=`clf_${NS(t)}`,r=e>99?"99+":String(e),i=e>99?10:e>9?11:13;return`<div style="width:38px;height:38px;pointer-events:auto" aria-hidden="true">
<svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
<defs>
<filter id="${n}" x="-40%" y="-40%" width="180%" height="180%">
<feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#2f0051" flood-opacity="0.42"/>
</filter>
</defs>
<circle cx="19" cy="19" r="15" fill="${WS}" filter="url(#${n})"/>
<text x="19" y="19" text-anchor="middle" dominant-baseline="central" fill="#fff" font-size="${i}" font-weight="800" font-family="system-ui,-apple-system,'Segoe UI',sans-serif">${r}</text>
</svg>
</div>`}const Vh=({places:e,onSelectPlace:t,fillViewport:n=!1,sidePanelInsetPx:r=0})=>{const i=y.useRef(null),o=y.useRef(null),s=y.useRef([]),a=y.useRef(null),c=y.useRef(null),[u,p]=y.useState(!1),[f,h]=y.useState(!1),g=y.useRef(e),b=y.useRef(t);g.current=e,b.current=t;const w=y.useCallback(()=>{const v=o.current;if(!v||typeof navigator>"u"||!navigator.geolocation)return;const $=window.naver,k=$==null?void 0:$.maps;if(!k)return;const S=k.LatLng,M=v.panTo,T=v.setZoom,R=(I,P)=>{M==null||M.call(v,new S(I,P)),T==null||T.call(v,16)};if(c.current){R(c.current.lat,c.current.lng);return}h(!0),navigator.geolocation.getCurrentPosition(I=>{h(!1),R(I.coords.latitude,I.coords.longitude)},()=>h(!1),{enableHighAccuracy:!0,timeout:15e3,maximumAge:6e4})},[]),C=()=>{s.current.forEach(v=>v.setMap(null)),s.current=[]},m=v=>{const $=window.naver,k=$==null?void 0:$.maps;if(!v||!k)return;const S=k.Marker,M=k.LatLng,T=k.Point,R=k.Event,I=v.getProjection,P=v.getZoom,_=v.setZoom,B=v.panTo;if(!I||!P||!_||!B)return;const H=g.current;if(H.length===0){C();return}const W=I.call(v);if(!W||typeof W.fromCoordToOffset!="function")return;const A=H.map(E=>{const{lat:q,lng:ee}=Xc(E);return{place:E,latlng:new M(q,ee)}});let z;try{z=A.map(E=>{const q=W.fromCoordToOffset(E.latlng);return{x:q.x,y:q.y}})}catch{return}const N=P.call(v)??11,j=zS(N),G=z.some(E=>!Number.isFinite(E.x)||!Number.isFinite(E.y))?A.map((E,q)=>[q]):AS(z,j);C();for(const[E,q]of G.entries()){const ee=q.map(de=>A[de]);if(ee.length===1){const{place:de,latlng:fe}=ee[0],we=new S({position:fe,map:v,title:de.name,icon:{content:KS(de.id,de.name),anchor:new T(FS,HS)}});R.addListener(we,"click",()=>b.current(de.id)),s.current.push(we);continue}let J=0,Y=0;for(const de of ee){const{lat:fe,lng:we}=_S(de.latlng);J+=fe,Y+=we}const te=ee.length,ue=new M(J/te,Y/te),Le=new S({position:ue,map:v,icon:{content:YS(te,`g${E}_${te}`),anchor:new T(26,26)}});R.addListener(Le,"click",()=>{const de=P.call(v)??11;_.call(v,Math.min(de+2,19)),B.call(v,ue)}),s.current.push(Le)}};y.useEffect(()=>{const v=i.current;if(!v)return;let $=!1;return(async()=>{if(!await IS("233s0l2jzo")||$||!i.current)return;const M=window.naver.maps,T=M.Map,R=M.LatLng,I=M.LatLngBounds,P=M.Event,_=new T(v,{center:new R(37.5665,126.978),zoom:11,scrollWheel:!0,scaleControl:!1,mapDataControl:!1,zoomControl:!1});if($)return;o.current=_,p(!0);const B=()=>{m(_)};P.addListener(_,"idle",B),B();const H=g.current;if(H.length>0){const W=new I;for(const z of H){const{lat:N,lng:j}=Xc(z);W.extend(new R(N,j))}const A=_.fitBounds;A==null||A.call(_,W,{top:52,right:20,bottom:100,left:20})}})(),()=>{var k;$=!0,C(),c.current=null,(k=a.current)==null||k.setMap(null),a.current=null,o.current=null,p(!1),i.current&&(i.current.innerHTML="")}},[]),y.useEffect(()=>{g.current=e;const v=o.current;if(!v||(m(v),e.length===0))return;const $=window.naver,k=$==null?void 0:$.maps,S=k==null?void 0:k.LatLng,M=k==null?void 0:k.LatLngBounds;if(!S||!M)return;const T=new M;for(const I of e){const{lat:P,lng:_}=Xc(I);T.extend(new S(P,_))}const R=v.fitBounds;R==null||R.call(v,T,{top:52,right:20,bottom:100,left:20})},[e]),y.useEffect(()=>{if(!u||typeof navigator>"u"||!navigator.geolocation)return;const v='<div style="width:16px;height:16px;background:#4B0082;border:3px solid #fff;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,.28)" aria-hidden="true"></div>',$=(S,M)=>{c.current={lat:S,lng:M};const T=o.current;if(!T)return;const R=window.naver,I=R==null?void 0:R.maps;if(!I)return;const P=I.LatLng,_=I.Marker,B=I.Point,H=new P(S,M),W=a.current;if(W&&typeof W.setPosition=="function"){W.setPosition(H);return}W==null||W.setMap(null),a.current=new _({position:H,map:T,zIndex:1e3,title:"내 위치",icon:{content:v,anchor:new B(8,8)}})},k=navigator.geolocation.watchPosition(S=>$(S.coords.latitude,S.coords.longitude),()=>{},{enableHighAccuracy:!0,maximumAge:15e3,timeout:3e4});return()=>{navigator.geolocation.clearWatch(k)}},[u]);const x=typeof navigator<"u"&&!!navigator.geolocation,L=l.jsx(RS,{$floating:n,$rightInsetPx:n?r:0,type:"button","aria-label":"현재 위치로 이동",title:"현재 위치로 이동",disabled:!u||f||!x,onClick:w,children:l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":!0,children:[l.jsx("circle",{cx:"12",cy:"12",r:"7"}),l.jsx("circle",{cx:"12",cy:"12",r:"1.5",fill:"currentColor",stroke:"none"}),l.jsx("path",{d:"M12 2v2M12 20v2M2 12h2M20 12h2"})]})});return l.jsxs(TS,{$fillViewport:n,children:[l.jsx(MS,{ref:i,$fillViewport:n,role:"application","aria-label":"명상지 지도"}),n?Nm.createPortal(L,document.body):L]})},Wh=96,Kh=960,m1=400;function GS(){const[e,t]=y.useState(()=>typeof window<"u"&&window.matchMedia(`(max-width: ${Kh}px)`).matches);return y.useEffect(()=>{const n=window.matchMedia(`(max-width: ${Kh}px)`),r=()=>t(n.matches);return n.addEventListener("change",r),()=>n.removeEventListener("change",r)},[]),e}const Yh=d.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 20px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};

  @media (max-width: 960px) {
    padding: 20px 14px calc(48px + env(safe-area-inset-bottom, 0px));
  }
`,ZS=d.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
`,qS=d.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,QS=d.button`
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
`,XS=d.button`
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
`,JS=d.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-areas: "filter content";
  gap: 28px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-areas: "content";
  }
`,eC=d.main`
  grid-area: content;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,tC=d.aside`
  grid-area: filter;

  @media (max-width: 960px) {
    display: none;
  }
`,nC=d.button`
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
`,rC=d.div`
  position: fixed;
  inset: 0;
  z-index: 125;
`,iC=Ke`from { opacity: 0; } to { opacity: 1; }`,oC=Ke`from { transform: translateX(100%); } to { transform: translateX(0); }`,lC=d.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  animation: ${iC} 0.2s ease;
`,sC=d.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: min(90vw, 360px);
  background: ${({theme:e})=>e.colors.white};
  padding: 20px;
  overflow-y: auto;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);
  animation: ${oC} 0.25s ease;
`,aC=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,cC=d.button`
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
`,Jc=d.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Gl=d.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text700};
`,uC=d.div`
  position: fixed;
  z-index: 40;
  top: 0;
  left: 0;
  right: 0;
  bottom: calc(56px + env(safe-area-inset-bottom, 0px));
  background: ${({theme:e})=>e.colors.bg100};
`,Gh=d.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  min-height: 0;
`,Zh=d.div`
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
`,qh=d.div`
  display: grid;
  grid-template-columns: 44px 1fr 44px;
  align-items: center;
  gap: 8px;
  max-width: 1200px;
  margin: 0 auto;
`,Zl=d.button`
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
`,Qh=d.span`
  text-align: center;
  font-weight: 700;
  font-size: 1.05rem;
  color: ${({theme:e})=>e.colors.text900};
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Xh=d.div`
  position: fixed;
  left: 50%;
  bottom: calc(64px + env(safe-area-inset-bottom, 0px));
  transform: translateX(-50%);
  z-index: 110;
  display: flex;
  justify-content: center;
`,dC=d.button`
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
`,pC=d.button`
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
`,fC=d.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: calc(56px + env(safe-area-inset-bottom, 0px));
  height: calc(100dvh - 56px - env(safe-area-inset-bottom, 0px));
  z-index: 95;
  transform: translateY(${({$ty:e})=>e}px);
  ${({$dragging:e})=>e?Me`
          transition: none;
        `:Me`
          transition: transform 0.48s cubic-bezier(0.25, 0.85, 0.3, 1);
        `}
  display: flex;
  flex-direction: column;
  background: ${({theme:e})=>e.colors.white};
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -10px 36px rgba(0, 0, 0, 0.14);
  overflow: hidden;
  touch-action: pan-y;
`,hC=d.div`
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
`,gC=d.div`
  flex-shrink: 0;
  padding: 0 12px 8px;
`,mC=d.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 0 12px calc(12px + env(safe-area-inset-bottom, 0px));
  -webkit-overflow-scrolling: touch;
`,Jh=d.p`
  margin: 0 0 12px;
  font-size: 0.92rem;
  color: ${({theme:e})=>e.colors.text700};
`,xC=d.div`
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
`,LC=d.div`
  position: relative;
  flex: 1;
  min-width: 0;
  min-height: 0;
`,yC=d.aside`
  width: min(${m1}px, 42vw);
  max-width: ${m1}px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  background: ${({theme:e})=>e.colors.white};
  border-left: 1px solid ${({theme:e})=>e.colors.primary100};
  box-shadow: -6px 0 20px rgba(0, 0, 0, 0.06);
  z-index: 2;
  min-height: 0;
`,vC=d.div`
  flex-shrink: 0;
  padding: 12px 12px 8px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary100};
`,wC=d.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 12px 12px calc(12px + env(safe-area-inset-bottom, 0px));
  -webkit-overflow-scrolling: touch;
`,eu=d.div`
  height: 1px;
`,bC=()=>{const e=mt(),{regionId:t}=xl(),n=GS(),{filters:r,page:i,pageSize:o,setPage:s,setRegion:a,setKeyword:c,toggleTag:u,setSortBy:p,setCategory:f,resetFilters:h,isFilterOpen:g,setFilterOpen:b}=$p(),[w,C]=y.useState("list"),[m,x]=y.useState(null),L=y.useRef(null),v=y.useRef(null),$=y.useRef(null),k=y.useRef(null),S=y.useRef({active:!1,startY:0,startTy:0}),[M,T]=y.useState(0),[R,I]=y.useState(400),[P,_]=y.useState(200),[B,H]=y.useState(!1),[W,A]=y.useState(!1),z=y.useCallback(()=>{const X=k.current;if(!X)return;const be=X.offsetHeight,ke=Math.max(0,be-Wh);I(ke),_(Math.round(ke*.4)),T(Lt=>Math.max(0,Math.min(ke,Lt)))},[]);y.useLayoutEffect(()=>{if(!n||!t)return;const X=requestAnimationFrame(()=>{z();const be=k.current;if(be){const ke=Math.max(0,be.offsetHeight-Wh);T(ke)}A(!0)});return()=>cancelAnimationFrame(X)},[n,t,z]),y.useEffect(()=>{var be;if(!n)return;const X=()=>z();return window.addEventListener("resize",X),(be=window.visualViewport)==null||be.addEventListener("resize",X),()=>{var ke;window.removeEventListener("resize",X),(ke=window.visualViewport)==null||ke.removeEventListener("resize",X)}},[n,z]),y.useEffect(()=>{t&&(a(t),s(1))},[t,a,s]);const N=Xt(X=>X.places),j=t?Un(t):void 0,Q=y.useMemo(()=>T3(N),[N]),G=y.useMemo(()=>t?t==="all"?[...N]:N.filter(X=>X.regionId===t):[],[t,N]),E=y.useMemo(()=>da(G,r),[G,r]),q=y.useMemo(()=>R3(E,r.sortBy),[E,r.sortBy]),ee=y.useMemo(()=>q.slice(0,i*o),[q,i,o]),J=ee.length<q.length,Y=n||w==="map",te=m&&Y?N.find(X=>X.id===m):void 0;y.useEffect(()=>{Y||x(null)},[Y]),y.useEffect(()=>{x(null)},[r.keyword,r.sortBy,r.tags,r.category]),y.useEffect(()=>{s(1)},[r.keyword,r.sortBy,r.tags,r.category,s]),y.useEffect(()=>{const X=n?v.current:w==="map"?$.current:null,be=L.current;if(!be||!J)return;const ke=new IntersectionObserver(Lt=>{var on;(on=Lt[0])!=null&&on.isIntersecting&&s(i+1)},{root:X??void 0,rootMargin:"200px"});return ke.observe(be),()=>ke.disconnect()},[J,n,w,i,s]);const ue=y.useCallback(X=>{const be=X,ke=Math.abs(X-P),Lt=Math.abs(X-R);return be<=ke&&be<=Lt?0:ke<=Lt?P:R},[P,R]),Le=y.useCallback(X=>{X.currentTarget.setPointerCapture(X.pointerId),S.current={active:!0,startY:X.clientY,startTy:M},H(!0)},[M]),de=y.useCallback(X=>{if(!S.current.active)return;const be=X.clientY-S.current.startY;let ke=S.current.startTy+be;ke=Math.max(0,Math.min(R,ke)),T(ke)},[R]),fe=y.useCallback(X=>{if(S.current.active){S.current.active=!1;try{X.currentTarget.releasePointerCapture(X.pointerId)}catch{}H(!1),T(be=>ue(be))}},[ue]);if(!t||!j)return l.jsxs(Yh,{children:[l.jsx(Gl,{children:"해당 지역 정보를 찾지 못했어요."}),l.jsx(XS,{type:"button",onClick:()=>e("/meditation"),children:"메인으로 돌아가기"})]});const we=()=>{n?T(0):C("list")},Ee=()=>{n?T(R):C("map")},Ae=n?W?R>0&&M>=R*.5:!0:w==="map",Ye=g&&l.jsxs(rC,{children:[l.jsx(lC,{onClick:()=>b(!1)}),l.jsxs(sC,{children:[l.jsxs(aC,{children:[l.jsx("h3",{style:{margin:0,fontSize:"1.2rem"},children:"필터"}),l.jsx(cC,{type:"button",onClick:()=>b(!1),children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),l.jsx(ca,{filters:r,availableTags:Q,onChangeKeyword:c,onChangeCategory:f,onToggleTag:u,onChangeSortBy:p,onReset:h})]})]}),Pe=Y&&te?l.jsx(SS,{place:te,onClose:()=>x(null),onOpenDetail:()=>{e(`/meditation/place/${te.id}`),x(null)}}):null,Ut=Ae?l.jsx(Xh,{children:l.jsx(dC,{type:"button",onClick:we,"aria-label":"목록으로 보기",children:"목록"})}):l.jsx(Xh,{children:l.jsx(pC,{type:"button",onClick:Ee,"aria-label":"지도로 보기",children:"지도"})});return n?l.jsxs(l.Fragment,{children:[l.jsxs(uC,{children:[l.jsx(Gh,{children:l.jsx(Vh,{fillViewport:!0,places:q,onSelectPlace:x})}),l.jsx(Zh,{children:l.jsxs(qh,{children:[l.jsx(Zl,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),l.jsx(Qh,{children:j.name}),l.jsx(Zl,{type:"button",onClick:()=>b(!0),"aria-label":"필터",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})})})]})})]}),l.jsxs(fC,{ref:k,$ty:W?M:R,$dragging:B,style:{visibility:W?"visible":"hidden"},"aria-label":"명상지 목록 패널",children:[l.jsx(hC,{onPointerDown:Le,onPointerMove:de,onPointerUp:fe,onPointerCancel:fe,"aria-hidden":!0}),l.jsx(gC,{children:l.jsx(Ss,{layout:"region",value:r.keyword,onChange:c,placeholder:"장소, 이름, 주소, 기관명, 태그로 검색"})}),l.jsxs(mC,{ref:v,children:[l.jsxs(Jh,{children:["총 ",q.length,"곳"]}),l.jsxs(Jc,{children:[ee.length===0&&l.jsx(Gl,{children:G.length===0?"등록된 공간이 없습니다.":"조건에 맞는 명상센터가 없어요."}),ee.map(X=>l.jsx(_o,{place:X},X.id))]}),J&&l.jsx(eu,{ref:L})]})]}),Pe,Ut,Ye]}):w==="map"?l.jsxs(l.Fragment,{children:[l.jsxs(xC,{children:[l.jsxs(LC,{children:[l.jsx(Gh,{children:l.jsx(Vh,{fillViewport:!0,sidePanelInsetPx:m1,places:q,onSelectPlace:x})}),l.jsx(Zh,{children:l.jsxs(qh,{children:[l.jsx(Zl,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),l.jsx(Qh,{children:j.name}),l.jsx(Zl,{type:"button",onClick:()=>b(!0),"aria-label":"필터",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})})})]})})]}),l.jsxs(yC,{"aria-label":"명상지 목록",children:[l.jsx(vC,{children:l.jsx(Ss,{layout:"region",value:r.keyword,onChange:c,placeholder:"장소, 이름, 주소, 기관명, 태그로 검색"})}),l.jsxs(wC,{ref:$,children:[l.jsxs(Jh,{children:["총 ",q.length,"곳"]}),l.jsxs(Jc,{children:[ee.length===0&&l.jsx(Gl,{children:G.length===0?"등록된 공간이 없습니다.":"조건에 맞는 명상센터가 없어요."}),ee.map(X=>l.jsx(_o,{place:X},X.id))]}),J&&l.jsx(eu,{ref:L})]})]})]}),Pe,Ut,Ye]}):l.jsxs(l.Fragment,{children:[l.jsxs(Yh,{children:[l.jsxs(ZS,{children:[l.jsxs(qS,{children:[l.jsx(QS,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),l.jsx("h2",{style:{margin:0,fontSize:"1.25rem",fontWeight:600},children:"명상지 리스트"})]}),l.jsx(nC,{type:"button",onClick:()=>b(!0),"aria-label":"필터",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})})})]}),l.jsx(Ss,{layout:"region",value:r.keyword,onChange:c,placeholder:"장소, 이름, 주소, 기관명, 태그로 검색"}),l.jsxs(JS,{children:[l.jsx(tC,{children:l.jsx(ca,{filters:r,availableTags:Q,onChangeKeyword:c,onChangeCategory:f,onToggleTag:u,onChangeSortBy:p,onReset:h})}),l.jsxs(eC,{children:[l.jsxs(Jc,{children:[ee.length===0&&l.jsx(Gl,{children:G.length===0?"등록된 공간이 없습니다.":"조건에 맞는 명상센터가 없어요."}),ee.map(X=>l.jsx(_o,{place:X},X.id))]}),J&&l.jsx(eu,{ref:L})]})]})]}),Ut,Ye]})},e2=d.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 24px 16px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};
`,kC=d.header`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`,jC=d.button`
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
`,SC=d.div`
  flex: 1;
  min-width: 0;
`,CC=d.h1`
  margin: 0;
  font-size: 1.35rem;
  font-weight: 700;
`,$C=d.p`
  margin: 4px 0 0;
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.text700};
`,EC=d.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,PC=d.button`
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
`,IC=d.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`,TC=d.div`
  flex: 1;
  min-width: 0;
`,RC=d.h2`
  margin: 0 0 6px;
  font-size: 1.1rem;
  font-weight: 700;
`,MC=d.p`
  margin: 0;
  font-size: 0.92rem;
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.45;
`,t2=d.p`
  text-align: center;
  color: ${({theme:e})=>e.colors.text700};
  padding: 40px 16px;
`,zC=()=>{const e=mt(),{regionId:t}=xl(),n=t?Un(t):void 0,r=Xt(o=>o.experts),i=y.useMemo(()=>t?t==="all"?[...r]:r.filter(o=>o.regionIds.includes(t)):[],[t,r]);return!t||!n?l.jsx(e2,{children:l.jsx(t2,{children:"지역 정보를 찾을 수 없어요."})}):l.jsxs(e2,{children:[l.jsxs(kC,{children:[l.jsx(jC,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),l.jsxs(SC,{children:[l.jsxs(CC,{children:[n.name," 명상 전문가"]}),l.jsx($C,{children:"프로필 · 전문 분야를 확인하고 상세로 이동하세요"})]})]}),l.jsxs(EC,{children:[i.length===0&&l.jsx(t2,{children:"이 지역에 등록된 명상 전문가가 아직 없어요."}),i.map(o=>l.jsxs(PC,{type:"button",onClick:()=>e(`/meditation/expert/${o.id}`),children:[l.jsx(IC,{src:ty(o.avatarUrl),alt:"",loading:"lazy",decoding:"async",sizes:"64px"}),l.jsxs(TC,{children:[l.jsx(RC,{children:o.name}),l.jsx(MC,{children:o.specialties.join(" · ")})]})]},o.id))]})]})},AC="★",_C="☆";function ha(e,t=5){const n=Math.round(Number(e)),r=Math.max(0,Math.min(t,Number.isFinite(n)?n:0));return AC.repeat(r)+_C.repeat(t-r)}const NC=5,OC=Ke`
  from { opacity: 0; }
  to { opacity: 1; }
`,DC=Ke`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`,BC=d.div`
  position: fixed;
  inset: 0;
  z-index: 400;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  animation: ${OC} 0.2s ease both;

  @media (min-width: 600px) {
    justify-content: center;
    align-items: center;
    padding: 24px;
  }
`,FC=d.div`
  background: ${({theme:e})=>e.colors.white};
  border-radius: 20px 20px 0 0;
  max-height: min(92dvh, 720px);
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${DC} 0.32s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (min-width: 600px) {
    border-radius: ${({theme:e})=>e.radii.lg};
    max-width: 440px;
    max-height: min(85dvh, 640px);
  }
`,HC=d.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 16px;
  padding-top: calc(12px + env(safe-area-inset-top, 0px));
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary100};
`,UC=d.div`
  min-width: 0;
`,VC=d.span`
  display: block;
  font-size: 1rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
`,WC=d.span`
  display: block;
  margin-top: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text700};
`,KC=d.button`
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
`,YC=d.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 18px 16px calc(24px + env(safe-area-inset-bottom, 0px));
`,GC=d.article`
  padding-bottom: 18px;
  margin-bottom: 18px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary100};

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`,ZC=d.p`
  margin: 0 0 10px;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text900};
`,qC=d.div`
  margin: 0;
  font-size: 1rem;
  line-height: 1.65;
  color: ${({theme:e})=>e.colors.text700};
  white-space: pre-wrap;
  word-break: break-word;
`,QC=d.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 16px calc(12px + env(safe-area-inset-bottom, 0px));
  border-top: 1px solid ${({theme:e})=>e.colors.primary100};
  background: ${({theme:e})=>e.colors.white};
`,n2=d.button`
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
`,XC=d.span`
  font-size: 0.88rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text700};
  min-width: 4.5em;
  text-align: center;
`,kx=({open:e,onClose:t,heading:n="후기",reviews:r,pageSize:i})=>{const o=i??NC,[s,a]=y.useState(1);y.useEffect(()=>{if(!e){a(1);return}a(1)},[e,r]),y.useEffect(()=>{if(!e)return;const b=w=>{w.key==="Escape"&&(w.stopPropagation(),t())};return window.addEventListener("keydown",b,!0),()=>window.removeEventListener("keydown",b,!0)},[e,t]),y.useEffect(()=>{if(!e)return;const b=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=b}},[e]);const c=y.useCallback(b=>{b.target===b.currentTarget&&t()},[t]),u=r.length,p=u===0?0:Math.ceil(u/o),f=p===0?1:Math.min(s,p),h=y.useMemo(()=>{if(u===0)return[];const b=(f-1)*o;return r.slice(b,b+o)},[r,u,f,o]);if(y.useEffect(()=>{p>0&&s>p&&a(p)},[s,p]),!e)return null;const g=u===0?"등록된 후기가 없어요.":p>1?`총 ${u}건 · ${o}건씩 보기`:`총 ${u}건`;return l.jsx(BC,{role:"presentation",onClick:c,children:l.jsxs(FC,{role:"dialog","aria-modal":"true","aria-labelledby":"reviews-list-sheet-title",onClick:b=>b.stopPropagation(),children:[l.jsxs(HC,{children:[l.jsxs(UC,{children:[l.jsx(VC,{id:"reviews-list-sheet-title",children:n}),l.jsx(WC,{children:g})]}),l.jsx(KC,{type:"button",onClick:t,"aria-label":"닫기",children:l.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),l.jsx(YC,{children:u===0?null:h.map((b,w)=>{const C=b.rating!=null?` · ${ha(b.rating)}`:"",m=(f-1)*o+w;return l.jsxs(GC,{children:[l.jsxs(ZC,{children:[b.author,C]}),l.jsx(qC,{children:b.body})]},`${b.author}-${m}`)})}),u>0&&p>1&&l.jsxs(QC,{children:[l.jsx(n2,{type:"button",onClick:()=>a(b=>Math.max(1,b-1)),disabled:f<=1,children:"이전"}),l.jsxs(XC,{children:[f," / ",p]}),l.jsx(n2,{type:"button",onClick:()=>a(b=>Math.min(p,b+1)),disabled:f>=p,children:"다음"})]})]})})},JC=[{id:"KR-11",name:"서울",slug:"seoul"},{id:"KR-26",name:"부산",slug:"busan"},{id:"KR-27",name:"대구",slug:"daegu"},{id:"KR-28",name:"인천",slug:"incheon"},{id:"KR-29",name:"광주",slug:"gwangju"},{id:"KR-30",name:"대전",slug:"daejeon"},{id:"KR-31",name:"울산",slug:"ulsan"},{id:"KR-41",name:"경기",slug:"gyeonggi"},{id:"KR-42",name:"강원",slug:"gangwon"},{id:"KR-43",name:"충북",slug:"chungbuk"},{id:"KR-44",name:"충남",slug:"chungnam"},{id:"KR-45",name:"전북",slug:"jeonbuk"},{id:"KR-46",name:"전남",slug:"jeonnam"},{id:"KR-47",name:"경북",slug:"gyeongbuk"},{id:"KR-48",name:"경남",slug:"gyeongnam"},{id:"KR-49",name:"제주",slug:"jeju"},{id:"KR-50",name:"세종",slug:"sejong"}],Ki=[...JC].sort((e,t)=>e.name.localeCompare(t.name,"ko"));function bl(e){var t;return((t=Ki.find(n=>n.id===e))==null?void 0:t.name)??e}function e$(){var e,t;return((e=Ki.find(n=>n.id==="KR-11"))==null?void 0:e.id)??((t=Ki[0])==null?void 0:t.id)??"KR-11"}function t$(e,t){const n=t.trim();if(!n)return;const r=e.programs.find(c=>{var u;return(u=c.linksClassTypes)==null?void 0:u.includes(n)});if(r)return r;const o=n.replace(/\([^)]*\)/g," ").replace(/[·]/g," ").split(/\s+/).map(c=>c.replace(/[()]/g,"").trim()).filter(c=>c.length>=2),s=c=>`${c.title} ${c.description}`.toLowerCase(),a=e.programs.find(c=>{const u=s(c);return u.includes(n.toLowerCase())?!0:o.some(p=>u.includes(p.toLowerCase()))});return a||(e.programs.find(c=>c.status==="ongoing")??e.programs[0])}const tu=d.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 0 calc(120px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};
  position: relative;
  z-index: 1;
`,nu=d.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  padding-top: calc(16px + env(safe-area-inset-top, 0px));
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.95);
  z-index: 5;
`,ru=d.button`
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
`,iu=d.h1`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
`,n$=d.div`
  padding: 8px 20px 20px;
  text-align: center;
`,r$=d.img`
  width: 112px;
  height: 112px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${({theme:e})=>e.colors.primary200};
`,i$=d.h2`
  margin: 16px 0 8px;
  font-size: 1.6rem;
  font-weight: 700;
`,r2=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
`,o$=d.span`
  font-size: 0.85rem;
  padding: 4px 10px;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary50};
  color: ${({theme:e})=>e.colors.primary700};
`,l$=d.button`
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
`,yn=d.section`
  padding: 0 20px 24px;
`,Zn=d.h3`
  margin: 0 0 10px;
  font-size: 1.15rem;
  font-weight: 700;
`,kr=d.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.65;
  color: ${({theme:e})=>e.colors.text700};
`,i2=d.ul`
  margin: 0;
  padding-left: 1.2em;
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.6;

  li {
    margin-bottom: 6px;
  }
`,o2=d.button`
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
`,l2=d.span`
  display: block;
  margin: 0 0 6px;
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
`,s2=d.span`
  display: block;
  font-size: 1rem;
  line-height: 1.65;
  color: ${({theme:e})=>e.colors.text700};
`,a2=d.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  display: block;
  pointer-events: none;
  user-select: none;
`,c2=d.div`
  padding: 14px 16px;
`,u2=d.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 6px;
  margin-bottom: 8px;
  background: ${({theme:e,$past:t})=>t?e.colors.bg100:e.colors.primary100};
  color: ${({theme:e,$past:t})=>t?e.colors.text700:e.colors.primary700};
`,s$=d.button`
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
`,a$=d.div`
  padding: 14px 16px;
  border-radius: ${({theme:e})=>e.radii.md};
  background: ${({theme:e})=>e.colors.warmCream};
  margin-bottom: 10px;
`,c$=d.p`
  margin: 0 0 6px;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text900};
`,u$=d.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.55;
  color: ${({theme:e})=>e.colors.text700};
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,d$=d.button`
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
`,p$=d.p`
  margin: 0;
  color: ${({theme:e})=>e.colors.text700};
  font-size: 0.95rem;
`,f$=()=>{const e=mt(),{expertId:t}=xl(),[n,r]=y.useState(),[i,o]=y.useState(),[s,a]=y.useState(!0),[c,u]=y.useState(!1);if(y.useEffect(()=>{if(!t){r(void 0),o(void 0),a(!1);return}let h=!1;return a(!0),(async()=>{const g=await h3(t);if(!h){if(!g){r(void 0),o(void 0),a(!1);return}if(r(g),g.centerPlaceId){const b=await x3(g.centerPlaceId);h||o(b??void 0)}else o(void 0);a(!1)}})(),()=>{h=!0}},[t]),s)return l.jsxs(tu,{children:[l.jsxs(nu,{children:[l.jsx(ru,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),l.jsx(iu,{children:"전문가"})]}),l.jsx(yn,{children:l.jsx(kr,{children:"불러오는 중…"})})]});if(!n)return l.jsxs(tu,{children:[l.jsxs(nu,{children:[l.jsx(ru,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),l.jsx(iu,{children:"전문가"})]}),l.jsx(yn,{children:l.jsx(kr,{children:"프로필을 찾을 수 없어요."})})]});const p=n.programs.filter(h=>h.status==="ongoing"),f=n.programs.filter(h=>h.status==="past");return l.jsxs(tu,{children:[l.jsxs(nu,{children:[l.jsx(ru,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),l.jsx(iu,{children:"명상 전문가"})]}),l.jsxs(n$,{children:[l.jsx(r$,{src:n.avatarUrl,alt:""}),l.jsx(i$,{children:n.name}),l.jsx(r2,{children:n.specialties.map(h=>l.jsx(o$,{children:h},h))})]}),l.jsxs(yn,{children:[l.jsx(Zn,{children:"자기소개"}),l.jsx(kr,{as:"div",children:l.jsx(wl,{markdown:n.intro})})]}),l.jsxs(yn,{children:[l.jsx(Zn,{children:"학위·이수"}),l.jsx(i2,{children:[...n.degrees,...n.certificates].map(h=>l.jsx("li",{children:h},h))})]}),l.jsxs(yn,{children:[l.jsx(Zn,{children:"경력"}),l.jsx(i2,{children:n.careers.map(h=>l.jsx("li",{children:h},h))})]}),l.jsxs(yn,{children:[l.jsx(Zn,{children:"클래스·분야"}),l.jsx(r2,{style:{justifyContent:"flex-start"},children:n.classTypes.map(h=>{const g=t$(n,h);return l.jsx(l$,{type:"button",disabled:!g,title:g?`${g.title} 상세 보기`:"등록된 클래스가 없어요",onClick:()=>{g&&e(`/meditation/expert/${n.id}/class/${g.id}`)},children:h},h)})})]}),l.jsxs(yn,{children:[l.jsx(Zn,{children:"센터·활동 지역"}),n.hasCenter&&n.centerSummary&&l.jsx(kr,{style:{marginBottom:8},children:n.centerSummary}),n.hasCenter&&n.centerAddress&&l.jsx(kr,{style:{marginBottom:8},children:n.centerAddress}),n.hasCenter&&n.centerPlaceId&&i&&l.jsxs(s$,{type:"button",onClick:()=>e(`/meditation/place/${n.centerPlaceId}`),children:["연결된 명상지 보기 — ",i.name]}),!n.hasCenter&&n.activityAreas&&n.activityAreas.length>0&&l.jsxs(kr,{children:["주 활동 반경: ",n.activityAreas.map(bl).join(", ")]})]}),l.jsxs(yn,{children:[l.jsx(Zn,{children:"진행 중인 클래스"}),p.length===0&&l.jsx(kr,{children:"현재 모집 중인 공개 일정이 없어요."}),p.map(h=>l.jsxs(o2,{type:"button","aria-label":`${h.title} 클래스 상세`,onClick:()=>e(`/meditation/expert/${n.id}/class/${h.id}`),children:[h.imageUrl&&l.jsx(a2,{src:h.imageUrl,alt:"",draggable:!1}),l.jsxs(c2,{children:[l.jsx(u2,{children:"진행 중"}),l.jsx(l2,{children:h.title}),l.jsx(s2,{children:h.description})]})]},h.id))]}),f.length>0&&l.jsxs(yn,{children:[l.jsx(Zn,{children:"이전 프로그램"}),f.map(h=>l.jsxs(o2,{type:"button","aria-label":`${h.title} 클래스 상세`,onClick:()=>e(`/meditation/expert/${n.id}/class/${h.id}`),children:[h.imageUrl&&l.jsx(a2,{src:h.imageUrl,alt:"",draggable:!1}),l.jsxs(c2,{children:[l.jsx(u2,{$past:!0,children:"종료"}),l.jsx(l2,{children:h.title}),l.jsx(s2,{children:h.description})]})]},h.id))]}),n.reviews.length>0&&l.jsxs(yn,{children:[l.jsx(Zn,{children:"후기"}),n.reviews.slice(0,2).map((h,g)=>l.jsxs(a$,{children:[l.jsxs(c$,{children:[h.author,h.rating!=null?` · ${ha(h.rating)}`:""]}),l.jsx(u$,{children:h.body})]},`${h.author}-${g}`)),n.reviews.length>2&&l.jsxs(p$,{style:{marginBottom:10},children:["외 ",n.reviews.length-2,"건의 후기가 더 있어요."]}),l.jsxs(d$,{type:"button",onClick:()=>u(!0),children:["전체 후기 보기 · ",n.reviews.length,"건"]})]}),l.jsx(kx,{open:c,onClose:()=>u(!1),heading:"후기",reviews:n.reviews})]})},ou=d.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 0 calc(48px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};
`,lu=d.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  padding-top: calc(16px + env(safe-area-inset-top, 0px));
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.96);
  z-index: 5;
`,su=d.button`
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
`,au=d.h1`
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0;
  flex: 1;
  min-width: 0;
`,h$=d.div`
  width: 100%;
`,g$=d.img`
  width: 100%;
  max-height: 240px;
  object-fit: cover;
  display: block;
  background: ${({theme:e})=>e.colors.bg100};
`,m$=d.div`
  padding: 20px 20px 28px;
`,x$=d.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 8px;
  margin-bottom: 12px;
  background: ${({theme:e,$past:t})=>t?e.colors.bg100:e.colors.primary100};
  color: ${({theme:e,$past:t})=>t?e.colors.text700:e.colors.primary700};
`,L$=d.h2`
  margin: 0 0 14px;
  font-size: 1.45rem;
  font-weight: 700;
  line-height: 1.3;
`,y$=d.p`
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.65;
  color: ${({theme:e})=>e.colors.text700};
`,v$=d.button`
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
`,d2=d.p`
  padding: 32px 20px;
  color: ${({theme:e})=>e.colors.text700};
`,w$=()=>{const e=mt(),{expertId:t,programId:n}=xl(),[r,i]=y.useState(),[o,s]=y.useState(!0);y.useEffect(()=>{if(!t){i(void 0),s(!1);return}let c=!1;return s(!0),h3(t).then(u=>{c||(i(u??void 0),s(!1))}),()=>{c=!0}},[t]);const a=r==null?void 0:r.programs.find(c=>c.id===n);return o?l.jsxs(ou,{children:[l.jsxs(lu,{children:[l.jsx(su,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),l.jsx(au,{children:"클래스"})]}),l.jsx(d2,{children:"불러오는 중…"})]}):!r||!a?l.jsxs(ou,{children:[l.jsxs(lu,{children:[l.jsx(su,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),l.jsx(au,{children:"클래스"})]}),l.jsx(d2,{children:"클래스 정보를 찾을 수 없어요."})]}):l.jsxs(ou,{children:[l.jsxs(lu,{children:[l.jsx(su,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),l.jsx(au,{children:"클래스 상세"})]}),a.imageUrl?l.jsx(h$,{children:l.jsx(g$,{src:a.imageUrl,alt:""})}):l.jsx("div",{style:{height:8}}),l.jsxs(m$,{children:[l.jsx(x$,{$past:a.status==="past",children:a.status==="ongoing"?"진행 중":"종료된 프로그램"}),l.jsx(L$,{children:a.title}),l.jsx(y$,{children:a.description}),l.jsxs(v$,{type:"button",onClick:()=>e(`/meditation/expert/${r.id}`),children:["← ",r.name," 프로필로 돌아가기"]})]})]})},jx=Ke`
  from { opacity: 0; }
  to { opacity: 1; }
`,b$=Ke`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`,k$=d.div`
  position: fixed;
  inset: 0;
  z-index: 300;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  animation: ${jx} 0.2s ease both;

  @media (min-width: 600px) {
    justify-content: center;
    align-items: center;
    padding: 24px;
  }
`,j$=d.div`
  background: ${({theme:e})=>e.colors.white};
  border-radius: 20px 20px 0 0;
  max-height: min(94dvh, 920px);
  height: min(94dvh, 920px);
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${b$} 0.32s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (min-width: 600px) {
    border-radius: ${({theme:e})=>e.radii.lg};
    max-width: 440px;
    height: min(88dvh, 780px);
  }
`,S$=d.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  padding-top: calc(12px + env(safe-area-inset-top, 0px));
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary100};
`,C$=d.span`
  font-size: 1rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
`,$$=d.button`
  width: 40px;
  height: 40px;
  border: none;
  background: ${({theme:e})=>e.colors.bg100};
  border-radius: ${({theme:e})=>e.radii.pill};
  cursor: pointer;
  display: grid;
  place-items: center;
  color: ${({theme:e})=>e.colors.text900};
`,E$=d.div`
  flex-shrink: 0;
  position: relative;
  height: 42vmin;
  min-height: 200px;
  max-height: 280px;
  background: ${({theme:e})=>e.colors.bg100};
`,P$=d.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  touch-action: pan-y pinch-zoom;
`,I$=d.div`
  display: flex;
  height: 100%;
  will-change: transform;
`,T$=d.div`
  flex-shrink: 0;
  height: 100%;
`,R$=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none;
  user-select: none;
`,p2=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  user-select: none;
`,f2=d.button`
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
`,M$=d.div`
  position: fixed;
  inset: 0;
  z-index: 400;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  flex-direction: column;
  animation: ${jx} 0.2s ease both;
`,z$=d.div`
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 12px;
  padding-top: calc(8px + env(safe-area-inset-top, 0px));
`,A$=d.button`
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
`,_$=d.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10px 28px;
  padding-bottom: calc(28px + env(safe-area-inset-bottom, 0px));
`,h2=d.div`
  height: 100%;
  width: 100%;
  will-change: transform;
  transition: ${({$snap:e})=>e?"transform 0.28s cubic-bezier(0.22, 1, 0.36, 1)":"none"};
`,g2=d.div`
  position: relative;
  width: 100%;
  max-width: min(96vw, 720px);
  height: min(85dvh, 900px);
  max-height: min(85dvh, 900px);
  overflow: hidden;
  touch-action: none;
  background: transparent;
  border-radius: ${({theme:e})=>e.radii.md};
`,N$=d.div`
  display: flex;
  height: 100%;
  will-change: transform;
`,O$=d.div`
  flex-shrink: 0;
  height: 100%;
`,D$=d.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  background: transparent;
  display: block;
  pointer-events: none;
  user-select: none;
`,m2=d.img`
  width: 100%;
  height: 100%;
  max-height: min(85dvh, 900px);
  object-fit: contain;
  object-position: center;
  background: transparent;
  display: block;
  user-select: none;
`,B$=d.div`
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
`,F$=d.div`
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
`,Sx=d.button`
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
`,H$=d.div`
  flex-shrink: 0;
  display: flex;
  gap: 8px;
  padding: 12px 16px;
  background: ${({theme:e})=>e.colors.warmCream};
`,x2=d.button`
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
`,U$=d.div`
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
`,V$=d.button`
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
`,W$=d.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 18px 16px 28px;
`,K$=d.h3`
  margin: 0 0 12px;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.25;
`,Y$=d.div`
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
`,G$=d.section`
  margin-top: 8px;
`,L2=d.h4`
  margin: 0 0 12px;
  font-size: 1rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
`,y2=d.div`
  padding: 14px;
  border-radius: ${({theme:e})=>e.radii.md};
  background: ${({theme:e})=>e.colors.warmCream};
  margin-bottom: 10px;
`,v2=d.p`
  margin: 0 0 6px;
  font-size: 0.88rem;
  font-weight: 600;
`,w2=d.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.55;
  color: ${({theme:e})=>e.colors.text700};
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,b2=d.button`
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
`,Z$=d.section`
  margin-top: 28px;
  padding-top: 22px;
  border-top: 1px solid ${({theme:e})=>e.colors.primary100};
`,q$=d.h4`
  margin: 0 0 14px;
  font-size: 1.05rem;
  font-weight: 700;
`,Q$=d.article`
  margin-bottom: 20px;
`,X$=d.div`
  display: flex;
  gap: 14px;
  align-items: flex-start;
  margin-bottom: 10px;
`,J$=d.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`,eE=d.div`
  font-weight: 700;
  font-size: 1.05rem;
  margin-bottom: 6px;
`,tE=d.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.55;
  color: ${({theme:e})=>e.colors.text700};
`,cu=d.p`
  margin: 0;
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.text700};
`;function Up(e,t){const n=e.join("\0"),[r,i]=y.useState(1),[o,s]=y.useState(!1),[a,c]=y.useState(0),[u,p]=y.useState(0),f=y.useRef(null),h=y.useRef(null),g=y.useRef(1),b=y.useRef(null),w=y.useRef(0),C=y.useRef(0),m=y.useRef(null),x=y.useCallback(()=>{b.current=null,w.current=0,C.current=0,p(0)},[]);y.useEffect(()=>{if(m.current===null){m.current=n;return}m.current!==n&&(m.current=n,i(1),s(!1),c(0),x())},[n,x]),y.useLayoutEffect(()=>{if(!t||e.length<=1){c(0);return}const B=f.current;if(!B)return;const H=()=>{const A=B.getBoundingClientRect().width;A>0&&c(A)};H();const W=new ResizeObserver(H);return W.observe(B),()=>W.disconnect()},[t,e.length,n]);const L=y.useMemo(()=>{const B=e.length;return B<=1?e:[e[B-1],...e,e[0]]},[e]),v=L.length,$=y.useMemo(()=>{const B=e.length;return B<=1?0:r===0?B-1:r===B+1?0:r-1},[e.length,r]),k=y.useCallback(B=>{e.length<=1||(b.current=B.touches[0].clientX,w.current=0,C.current=0,p(0))},[e.length]),S=y.useCallback(B=>{var Q;if(b.current==null||e.length<=1)return;const H=((Q=f.current)==null?void 0:Q.offsetWidth)??320,W=e.length;let A=B.touches[0].clientX-b.current;const z=H*.45;A=Math.max(-z,Math.min(z,A)),C.current=A;const N=g.current;let j=A;N===1&&A>0&&(j=0),N===W&&A<0&&(j=0),w.current=j,p(j)},[e.length]),M=y.useCallback(()=>{var z;if(b.current==null||e.length<=1){x();return}const B=((z=f.current)==null?void 0:z.offsetWidth)??320,H=Math.min(48,B*.14),W=C.current,A=e.length;i(N=>W>H?N===0?A-1:N===1?0:N-1:W<-H?N===A+1?2:N===A?A+1:N+1:N),x()},[e.length,x]),T=y.useCallback(B=>{if(!B.propertyName.toLowerCase().includes("transform")||B.target!==B.currentTarget)return;const H=e.length;if(H<=1)return;const W=g.current;W===H+1?(s(!0),i(1)):W===0&&(s(!0),i(H))},[e.length]);y.useLayoutEffect(()=>{if(!o)return;const B=h.current;B&&B.offsetWidth;let H=null;const W=requestAnimationFrame(()=>{H=requestAnimationFrame(()=>{s(!1)})});return()=>{cancelAnimationFrame(W),H!=null&&cancelAnimationFrame(H)}},[r,o]),y.useEffect(()=>{x()},[n,x]),g.current=r;const R=e.length>1&&a>0,I=R?v*a:void 0,P=R?-(r*a)+u:0,_=y.useCallback(B=>{s(!1),i(B),x()},[x]);return{loopIndex:r,setLoopIndex:i,activeDot:$,loopUrls:L,slideCount:v,usePx:R,trackWidthPx:I,translatePx:P,transOff:o,dragPx:u,viewportRef:f,trackRef:h,onTouchStart:k,onTouchMove:S,onTouchEnd:M,onTouchCancel:x,onTransitionEnd:T,vpWidth:a,syncToLoopIndex:_}}const ql=14,nE=115,rE=360;function k2(e){const t=Math.sign(e),n=Math.abs(e);return t*Math.min(n*.88,rE)}function Cx({urls:e,initialLoopIndex:t,onClose:n,lockBodyScroll:r=!0}){const i=e.length>1,o=Up(e,i),{syncToLoopIndex:s,viewportRef:a,trackRef:c,onTouchStart:u,onTouchMove:p,onTouchEnd:f,onTouchCancel:h,onTransitionEnd:g,usePx:b,trackWidthPx:w,translatePx:C,transOff:m,dragPx:x,loopUrls:L,vpWidth:v,setLoopIndex:$,activeDot:k}=o,[S,M]=y.useState(0),[T,R]=y.useState(!1),I=y.useRef(0),P=y.useRef(null),_=y.useRef("n"),B=y.useRef(null),H=y.useRef(!1),W=y.useCallback(Y=>{var te;if((te=B.current)==null||te.call(B),B.current=null,a.current=Y,Y){const ue=Le=>{_.current==="v"&&Le.preventDefault()};Y.addEventListener("touchmove",ue,{passive:!1}),B.current=()=>Y.removeEventListener("touchmove",ue)}},[a]);y.useEffect(()=>{if(!r)return;const Y=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=Y}},[r]),y.useLayoutEffect(()=>{e.length<=1||s(t)},[e.length,t,s]),y.useEffect(()=>{I.current=0,M(0),_.current="n",P.current=null,H.current=!1},[e.join("\0")]),y.useEffect(()=>{const Y=te=>{te.key==="Escape"&&n()};return window.addEventListener("keydown",Y),()=>window.removeEventListener("keydown",Y)},[n]),y.useEffect(()=>()=>{var Y;(Y=B.current)==null||Y.call(B),B.current=null},[]);const A=y.useCallback(Y=>{Y.target===Y.currentTarget&&n()},[n]),z=y.useCallback(()=>{if(Math.abs(I.current)>=nE){I.current=0,M(0),n();return}R(!0),I.current=0,M(0),window.setTimeout(()=>R(!1),320)},[n]),N=y.useCallback(Y=>{Y.touches.length===1&&(R(!1),P.current={x:Y.touches[0].clientX,y:Y.touches[0].clientY},_.current="n")},[]),j=y.useCallback(Y=>{if(!P.current||Y.touches.length!==1)return;const te=Y.touches[0].clientX,ue=Y.touches[0].clientY,Le=te-P.current.x,de=ue-P.current.y;if(_.current==="n"){if(Math.abs(Le)<ql&&Math.abs(de)<ql)return;Math.abs(de)>=Math.abs(Le)?_.current="v":(_.current="h",e.length>1&&u(Y))}if(_.current==="v"){const fe=k2(de);I.current=fe,M(fe);return}_.current==="h"&&e.length>1&&p(Y)},[e.length,p,u]),Q=y.useCallback(()=>{_.current==="v"?z():_.current==="h"&&e.length>1&&f(),P.current=null,_.current="n"},[z,f,e.length]),G=y.useCallback(()=>{_.current==="v"?z():_.current==="h"&&e.length>1&&h(),P.current=null,_.current="n"},[z,h,e.length]),E=y.useCallback(Y=>{Y.button===0&&(H.current=!0,R(!1),P.current={x:Y.clientX,y:Y.clientY},_.current="n")},[]),q=y.useCallback(Y=>{if(!H.current||!P.current)return;const te=Y.clientX-P.current.x,ue=Y.clientY-P.current.y;if(_.current==="n"){if(Math.abs(te)<ql&&Math.abs(ue)<ql)return;if(Math.abs(ue)>=Math.abs(te))_.current="v";else{_.current="h",H.current=!1,P.current=null;return}}if(_.current==="v"){const Le=k2(ue);I.current=Le,M(Le)}},[]),ee=y.useCallback(()=>{H.current&&(H.current=!1,_.current==="v"&&z(),P.current=null,_.current="n")},[z]);if(e.length===0)return null;const J={ref:W,onTouchStart:N,onTouchMove:j,onTouchEnd:Q,onTouchCancel:G,onMouseDown:E,onMouseMove:q,onMouseUp:ee,onMouseLeave:ee};return l.jsxs(M$,{role:"dialog","aria-modal":"true","aria-label":"프로그램 사진 크게 보기",onClick:A,children:[l.jsx(z$,{onClick:Y=>Y.stopPropagation(),children:l.jsx(A$,{type:"button",onClick:n,"aria-label":"닫기",children:l.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})}),l.jsx(_$,{onClick:Y=>Y.stopPropagation(),children:e.length<=1?l.jsx(g2,{...J,children:l.jsx(h2,{$snap:T,style:{transform:`translate3d(0, ${S}px, 0)`},children:l.jsx(m2,{src:e[0],alt:"",draggable:!1})})}):l.jsxs(l.Fragment,{children:[l.jsx(g2,{...J,children:l.jsx(h2,{$snap:T,style:{transform:`translate3d(0, ${S}px, 0)`},children:b?l.jsx(N$,{ref:c,onTransitionEnd:g,style:{width:w,height:"100%",transform:`translate3d(${C}px, 0, 0)`,transition:x!==0||m?"none":"transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)"},children:L.map((Y,te)=>l.jsx(O$,{style:{width:v,flexShrink:0},children:l.jsx(D$,{src:Y,alt:"",draggable:!1})},`viewer-loop-${te}`))}):l.jsx(m2,{src:e[0],alt:"",draggable:!1})})}),l.jsx(F$,{children:e.map((Y,te)=>l.jsx(Sx,{type:"button","aria-label":`${te+1}번째 사진으로 이동`,"aria-current":te===k?"true":void 0,$active:te===k,onClick:()=>$(te+1)},te))})]})})]})}const iE=({place:e,open:t,onClose:n,initialProgramId:r})=>{var R,I;const i=Da(e).programs??[],o=y.useMemo(()=>i.filter(P=>P.status==="ongoing"),[i]),s=y.useMemo(()=>i.filter(P=>P.status==="past"),[i]),[a,c]=y.useState("ongoing"),[u,p]=y.useState(null),[f,h]=y.useState(!1),[g,b]=y.useState(null),w=a==="ongoing"?o:s;y.useEffect(()=>{var B,H;if(!t)return;const P=(B=o[0])==null?void 0:B.id,_=(H=s[0])==null?void 0:H.id;if(r&&i.some(W=>W.id===r)){const W=i.find(A=>A.id===r);c(W.status==="ongoing"?"ongoing":"past"),p(r)}else P?(c("ongoing"),p(P)):_?(c("past"),p(_)):p(null)},[t,r,o,s,i]);const C=i.find(P=>P.id===u)??null,m=y.useMemo(()=>{var B;if(!C)return[];const P=(B=C.imageUrls)!=null&&B.length?C.imageUrls:[],_=[C.imageUrl,...P.filter(H=>H!==C.imageUrl)];return Array.from(new Set(_))},[C]),x=t&&!!C&&m.length>1,L=Up(m,x);y.useEffect(()=>{t&&L.syncToLoopIndex(1)},[t,L.syncToLoopIndex]),y.useEffect(()=>{b(null)},[u]),y.useEffect(()=>{t||h(!1)},[t]),y.useEffect(()=>{if(!t)return;const P=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=P}},[t]),y.useEffect(()=>{t||b(null)},[t]),y.useEffect(()=>{if(!t)return;const P=_=>{if(_.key==="Escape"){if(f){_.preventDefault(),h(!1);return}n()}};return window.addEventListener("keydown",P),()=>window.removeEventListener("keydown",P)},[t,n,f]);const v=y.useCallback(P=>{P.target===P.currentTarget&&n()},[n]),$=e.venueKind==="명상센터"&&(((R=e.instructors)==null?void 0:R.length)??0)>0,k=o.length>0&&s.length>0,S=$&&(((I=e.instructors)==null?void 0:I.some(P=>P.reviews.length>0))??!1),M=y.useCallback(()=>{m.length!==0&&h(!0)},[m.length]);if(!t||i.length===0)return null;const T=e.venueKind==="명상센터"?"명상센터":"명상지";return l.jsxs(l.Fragment,{children:[l.jsx(k$,{role:"presentation",onClick:v,children:l.jsxs(j$,{role:"dialog","aria-modal":"true","aria-labelledby":"place-programs-modal-title",onClick:P=>P.stopPropagation(),children:[l.jsxs(S$,{children:[l.jsxs(C$,{id:"place-programs-modal-title",children:["프로그램 · 행사 · 후기 ",l.jsxs("span",{style:{opacity:.75},children:["(",T,")"]})]}),l.jsx($$,{type:"button",onClick:n,"aria-label":"닫기",children:l.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),C&&l.jsxs(l.Fragment,{children:[l.jsx(E$,{children:m.length<=1?l.jsx(f2,{type:"button",$clickable:m.length>0,onClick:M,"aria-label":"사진 크게 보기",children:l.jsx(p2,{src:m[0]??C.imageUrl,alt:"",draggable:!1})}):l.jsxs(l.Fragment,{children:[l.jsx(f2,{type:"button",$clickable:!0,onClick:M,"aria-label":"사진 크게 보기",children:l.jsx(P$,{ref:L.viewportRef,onTouchStart:L.onTouchStart,onTouchMove:L.onTouchMove,onTouchEnd:L.onTouchEnd,onTouchCancel:L.onTouchCancel,children:L.usePx?l.jsx(I$,{ref:L.trackRef,onTransitionEnd:L.onTransitionEnd,style:{width:L.trackWidthPx,transform:`translate3d(${L.translatePx}px, 0, 0)`,transition:L.dragPx!==0||L.transOff?"none":"transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)"},children:L.loopUrls.map((P,_)=>l.jsx(T$,{style:{width:L.vpWidth,flexShrink:0},children:l.jsx(R$,{src:P,alt:"",draggable:!1})},`hero-loop-${_}`))}):l.jsx(p2,{src:m[0],alt:"",draggable:!1})})}),l.jsx(B$,{children:m.map((P,_)=>l.jsx(Sx,{type:"button","aria-label":`${_+1}번째 사진으로 이동`,"aria-current":_===L.activeDot?"true":void 0,$active:_===L.activeDot,onClick:()=>L.setLoopIndex(_+1)},_))})]})}),k?l.jsxs(H$,{children:[l.jsxs(x2,{type:"button",$active:a==="ongoing",onClick:()=>{var _;c("ongoing");const P=(_=o[0])==null?void 0:_.id;p(P??null)},disabled:o.length===0,style:{opacity:o.length===0?.45:1},children:["진행 중 ",o.length>0?`(${o.length})`:""]}),l.jsxs(x2,{type:"button",$active:a==="past",onClick:()=>{var _;c("past");const P=(_=s[0])==null?void 0:_.id;p(P??null)},disabled:s.length===0,style:{opacity:s.length===0?.45:1},children:["지난 프로그램 ",s.length>0?`(${s.length})`:""]})]}):null,l.jsxs(U$,{children:[w.length===0&&l.jsx(cu,{children:"이 구간에 등록된 프로그램이 없어요."}),w.map(P=>l.jsx(V$,{type:"button",$active:P.id===u,onClick:()=>p(P.id),"aria-label":P.title,children:l.jsx("img",{src:P.imageUrl,alt:"",draggable:!1})},P.id))]}),l.jsxs(W$,{children:[l.jsxs(K$,{children:[C.kind==="event"?"행사 · ":C.kind==="program"?"프로그램 · ":"",C.title]}),l.jsx(Y$,{children:l.jsx(Wi,{children:C.bodyFromVenue})}),C.reviews.length>0&&l.jsxs(G$,{children:[l.jsx(L2,{children:"프로그램 후기"}),C.reviews.slice(0,2).map((P,_)=>l.jsxs(y2,{children:[l.jsxs(v2,{children:[P.author,P.rating!=null?` · ${ha(P.rating)}`:""]}),l.jsx(w2,{children:P.body})]},`${P.author}-${_}`)),C.reviews.length>2&&l.jsxs(cu,{style:{marginBottom:10,fontSize:"0.88rem"},children:["외 ",C.reviews.length-2,"건의 후기가 더 있어요."]}),l.jsxs(b2,{type:"button",onClick:()=>b({heading:"프로그램 후기",reviews:C.reviews}),children:["전체 후기 보기 · ",C.reviews.length,"건"]})]}),$&&l.jsxs(Z$,{children:[l.jsx(q$,{children:S?"강사 소개 · 강사 후기":"강사 소개"}),e.instructors.map(P=>l.jsxs(Q$,{children:[l.jsxs(X$,{children:[l.jsx(J$,{src:P.photoUrl,alt:""}),l.jsxs("div",{children:[l.jsx(eE,{children:P.name}),l.jsx(tE,{children:P.intro})]})]}),P.reviews.length>0&&l.jsxs(l.Fragment,{children:[l.jsx(L2,{style:{fontSize:"0.95rem",marginBottom:8},children:"강사 후기"}),P.reviews.slice(0,2).map((_,B)=>l.jsxs(y2,{children:[l.jsxs(v2,{children:[_.author,_.rating!=null?` · ${ha(_.rating)}`:""]}),l.jsx(w2,{children:_.body})]},`${P.id}-ir-${B}`)),P.reviews.length>2&&l.jsxs(cu,{style:{marginBottom:10,fontSize:"0.88rem"},children:["외 ",P.reviews.length-2,"건의 후기가 더 있어요."]}),l.jsxs(b2,{type:"button",onClick:()=>b({heading:`강사 후기 · ${P.name}`,reviews:P.reviews}),children:["강사 후기 전체 보기 · ",P.reviews.length,"건"]})]})]},P.id))]})]})]})]})}),l.jsx(kx,{open:g!=null,onClose:()=>b(null),heading:g==null?void 0:g.heading,reviews:(g==null?void 0:g.reviews)??[]}),f&&C&&m.length>0&&l.jsx(Cx,{urls:m,initialLoopIndex:L.loopIndex,onClose:()=>h(!1),lockBodyScroll:!1})]})};function Vp(e){var i;const t=[],n=new Set,r=o=>{const s=o==null?void 0:o.trim();!s||n.has(s)||(n.add(s),t.push(s))};if((i=e.photos)!=null&&i.length)for(const o of e.photos)r(o);else r(e.thumbnailUrl);for(const o of e.programs??[])if(o.status==="ongoing"){r(o.imageUrl);for(const s of o.imageUrls??[])r(s)}return t}function oE(e){return Vp(e)[0]??e.thumbnailUrl??""}const uu=d.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0 calc(28px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};
`,du=d.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  padding-top: calc(16px + env(safe-area-inset-top, 0px));
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.95);
  z-index: 10;
`,pu=d.button`
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
`,fu=d.h1`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
`,lE=d.button`
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
`,sE=d.div`
  position: relative;
  width: 100%;
  height: 280px;
  background: ${({theme:e})=>e.colors.bg100};
`,aE=d.button`
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
`,cE=d.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  touch-action: pan-y pinch-zoom;
`,uE=d.div`
  display: flex;
  height: 100%;
  will-change: transform;
`,dE=d.div`
  flex-shrink: 0;
  height: 100%;
`,j2=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none;
  user-select: none;
`,pE=d.div`
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
`,fE=d.button`
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
`,hE=d.div`
  padding: 24px 20px;
`,gE=d.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
`,mE=d.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  color: ${({theme:e})=>e.colors.text900};
  flex: 1;
  min-width: 0;
`,xE=d.div`
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
`,LE=d.div`
  font-size: 1.05rem;
  line-height: 1.6;
  color: ${({theme:e})=>e.colors.text700};
  margin: 0 0 24px;
`,yE=d.section`
  margin: 0 0 28px;
`,vE=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 12px;
`,wE=d.h3`
  margin: 0;
  font-size: 1.15rem;
  font-weight: 700;
`,bE=d.div`
  min-width: 0;
`,kE=d.p`
  margin: 6px 0 0;
  font-size: 0.88rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text700};
`,jE=d.button`
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
`,SE=d.span`
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary100};
  color: ${({theme:e})=>e.colors.primary700};
`,CE=d.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 4px 0 12px;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    height: 4px;
  }
`,$E=d.button`
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
`,EE=d.span`
  display: block;
  padding: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  text-align: left;
  line-height: 1.35;
  color: ${({theme:e})=>e.colors.text900};
  background: ${({theme:e})=>e.colors.white};
`,PE=d.div``,S2=d.div`
  border-bottom: 1px solid ${({theme:e})=>e.colors.border200};

  &:last-child {
    border-bottom: none;
  }
`,C2=d.button`
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
`,$2=d.div`
  display: grid;
  grid-template-rows: ${({$open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.3s ease;
  overflow: hidden;
`,E2=d.div`
  overflow: hidden;
`,P2=d.div`
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
`,IE=d.section`
  margin-top: 28px;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 16px;
    font-weight: 600;
  }
`,TE=d.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`,RE=d.div`
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
`,ME=d.section`
  margin-top: 32px;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 12px;
  }
`,zE=d.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  flex-wrap: wrap;
`,AE=d.button`
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
`,_E=d.span`
  flex: 1;
  min-width: 0;
`,NE=d.a`
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
`,OE=d.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  pointer-events: none;
`,DE=d.div`
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
`,BE=d.div`
  width: 100%;
  min-height: 240px;
  height: 240px;
  border-radius: ${({theme:e})=>e.radii.lg};
  background: ${({theme:e})=>e.colors.bg100};
  overflow: hidden;
  position: relative;
`,I2=d.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  text-align: center;
  background: linear-gradient(180deg, ${({theme:e})=>e.colors.primary50} 0%, ${({theme:e})=>e.colors.warmCream} 100%);
`,FE=d.div`
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
`,T2=d.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.primary400};
  margin: 0 0 24px;
  line-height: 1.6;
`,HE=d.button`
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
`,UE={wifi:"Wi-Fi",parking:"Parking",tea:"Tea"},VE=()=>{var W,A;const e=mt(),{placeId:t}=xl(),[n,r]=y.useState(),[i,o]=y.useState(!0),[s,a]=y.useState(null);y.useEffect(()=>{if(!t){r(void 0),o(!1),a(null);return}let z=!1;return o(!0),a(null),x3(t).then(N=>{z||(N?(r(N),a(null)):(r(void 0),a("not_found")),o(!1))}).catch(()=>{z||(r(void 0),a("network"),o(!1))}),()=>{z=!0}},[t]),n&&Un(n.regionId);const c=y.useRef(null),u=(n==null?void 0:n.facilities)??[],p=(W=n==null?void 0:n.detailSections)==null?void 0:W.find(z=>z.title.toLowerCase().includes("유의사항")),[f,h]=y.useState(null),[g,b]=y.useState(!1),[w,C]=y.useState(!1),[m,x]=y.useState(),[L,v]=y.useState(null),$=y.useMemo(()=>n?Vp(n):[],[n]),k=!!n&&$.length>1,S=Up($,k),M=()=>{n&&navigator.clipboard.writeText(n.address).then(()=>{b(!0),setTimeout(()=>b(!1),2e3)})};if(y.useEffect(()=>{if(!n)return;const z="233s0l2jzo",N=()=>{var Le,de;const q=document.getElementById("naver-map");if(!q||!((de=(Le=window.naver)==null?void 0:Le.maps)!=null&&de.Service))return!1;const ee=window.naver,J=new ee.maps.LatLng(37.5665,126.978),Y=new ee.maps.Map(q,{center:J,zoom:17,scrollWheel:!0,mapTypeControl:!0}),te=(fe,we)=>{const Ee=new ee.maps.LatLng(fe,we);Y.setCenter(Ee),new ee.maps.Marker({position:Ee,map:Y})},ue=(fe,we)=>Number.isFinite(fe)&&Number.isFinite(we);return ee.maps.Service.geocode({query:n.address},(fe,we)=>{var be,ke,Lt,on;if(fe==="ERROR"){console.warn(`[지도] 주소 변환 실패 - "${n.name}" (${n.address}): status=${fe}`),te(37.5665,126.978);return}const Ee=we,Ae=He=>typeof He=="number"?He:parseFloat(String(He??""));let Ye=null,Pe=null;const Ut=((be=Ee==null?void 0:Ee.result)==null?void 0:be.items)??[],X=Ut.find(He=>He.isRoadAddress)??Ut[0];if(X!=null&&X.point&&(Ye=Ae(X.point.y),Pe=Ae(X.point.x)),(Ye==null||Pe==null||!ue(Ye,Pe))&&Ut.length>0){const He=Ut[0];He!=null&&He.point&&(Ye=Ae(He.point.y),Pe=Ae(He.point.x))}if(Ye==null||Pe==null||!ue(Ye,Pe)){const He=((Lt=(ke=Ee==null?void 0:Ee.v2)==null?void 0:ke.addresses)==null?void 0:Lt[0])??((on=Ee==null?void 0:Ee.addresses)==null?void 0:on[0]);He&&(Ye=Ae(He.y),Pe=Ae(He.x))}Ye!=null&&Pe!=null&&ue(Ye,Pe)?te(Ye,Pe):te(37.5665,126.978)}),!0},j=()=>{var q;return(q=window.naver)!=null&&q.maps&&window.naver.maps.Service?(N(),!0):!1};if(j())return;if(document.querySelector('script[src*="oapi.map.naver.com"]')){const q=setInterval(()=>{j()&&clearInterval(q)},100),ee=setTimeout(()=>clearInterval(q),1e4);return()=>{clearInterval(q),clearTimeout(ee)}}const G="onNaverMapsReady";window[G]=()=>{if(j())return;const q=setInterval(()=>{j()&&clearInterval(q)},100)};const E=document.createElement("script");return E.type="text/javascript",E.src=`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${z}&submodules=geocoder&callback=${G}`,E.async=!0,document.head.appendChild(E),()=>{delete window[G]}},[n]),y.useEffect(()=>{n&&S.syncToLoopIndex(1)},[n==null?void 0:n.id,S.syncToLoopIndex]),i)return l.jsxs(uu,{children:[l.jsxs(du,{children:[l.jsx(pu,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),l.jsx(fu,{children:"상세 페이지"})]}),l.jsx(I2,{children:l.jsx(T2,{children:"불러오는 중…"})})]});if(!n)return l.jsxs(uu,{children:[l.jsxs(du,{children:[l.jsx(pu,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),l.jsx(fu,{children:"상세 페이지"})]}),l.jsxs(I2,{children:[l.jsx(FE,{children:"404"}),l.jsxs(T2,{children:[s==="not_found"?"해당 명상센터를 찾지 못했어요.":"장소 정보를 불러올 수 없어요.",l.jsx("br",{}),"메인에서 다시 찾아 주세요."]}),l.jsxs(HE,{type:"button",onClick:()=>e("/meditation"),children:[l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),l.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),"메인으로 돌아가기"]})]})]});const T=n.programs??[],R=T.filter(z=>z.status==="ongoing"),I=T.filter(z=>z.status==="past"),P=T.length>0,_=n.venueKind==="명상센터"?"명상센터":"명상지",B=[];R.length>0&&B.push(`진행 중 ${R.length}`),I.length>0&&B.push(`지난 ${I.length}`);const H=B.join(" · ");return l.jsxs(uu,{children:[g&&l.jsx(OE,{children:l.jsx(DE,{children:"주소를 복사했습니다"})}),l.jsxs(du,{children:[l.jsx(pu,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),l.jsx(fu,{children:"상세 페이지"})]}),$.length<=1?l.jsx(lE,{type:"button",onClick:()=>v({urls:$.length===1?$:[n.thumbnailUrl],initialLoopIndex:1}),"aria-label":`${n.name} 대표 사진 크게 보기`,children:l.jsx("img",{src:$[0]??n.thumbnailUrl,alt:`${n.name} 대표 이미지`})}):l.jsxs(sE,{children:[l.jsx(aE,{type:"button",onClick:()=>v({urls:$,initialLoopIndex:S.loopIndex}),"aria-label":`${n.name} 사진 크게 보기`,children:l.jsx(cE,{ref:S.viewportRef,onTouchStart:S.onTouchStart,onTouchMove:S.onTouchMove,onTouchEnd:S.onTouchEnd,onTouchCancel:S.onTouchCancel,children:S.usePx?l.jsx(uE,{ref:S.trackRef,onTransitionEnd:S.onTransitionEnd,style:{width:S.trackWidthPx,transform:`translate3d(${S.translatePx}px, 0, 0)`,transition:S.dragPx!==0||S.transOff?"none":"transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)"},children:S.loopUrls.map((z,N)=>l.jsx(dE,{style:{width:S.vpWidth,flexShrink:0},children:l.jsx(j2,{src:z,alt:"",draggable:!1})},`detail-hero-${N}`))}):l.jsx(j2,{src:$[0],alt:"",draggable:!1})})}),l.jsx(pE,{children:$.map((z,N)=>l.jsx(fE,{type:"button","aria-label":`${N+1}번째 사진으로 이동`,"aria-current":N===S.activeDot?"true":void 0,$active:N===S.activeDot,onClick:()=>S.setLoopIndex(N+1)},N))})]}),l.jsxs(hE,{children:[l.jsxs(gE,{children:[l.jsx(mE,{children:n.name}),l.jsx(Ha,{placeId:n.id})]}),l.jsxs(xE,{children:[l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),l.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),n.address]}),l.jsx(LE,{children:l.jsx(wl,{markdown:n.shortDescription})}),P&&l.jsxs(yE,{children:[l.jsxs(vE,{children:[l.jsxs(bE,{children:[l.jsx(wE,{children:"프로그램 · 후기"}),H?l.jsx(kE,{children:H}):null]}),l.jsx(SE,{children:_})]}),R.length>0?l.jsx(CE,{"aria-label":"진행 중인 프로그램 사진",children:R.map(z=>l.jsxs($E,{type:"button",onClick:()=>{x(z.id),C(!0)},children:[l.jsx("img",{src:z.imageUrl,alt:"",draggable:!1}),l.jsx(EE,{children:z.title})]},z.id))}):l.jsxs(jE,{type:"button",onClick:()=>{x(void 0),C(!0)},children:["지난 프로그램·후기 보기 (",I.length,")"]})]}),l.jsxs(PE,{children:[l.jsxs(S2,{children:[l.jsxs(C2,{type:"button",$open:f==="fee",onClick:()=>h(f==="fee"?null:"fee"),children:[l.jsx("span",{children:"입장료·이용 요금"}),l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{d:"M9 18l6-6-6-6"})})]}),l.jsx($2,{$open:f==="fee",children:l.jsx(E2,{children:l.jsx(P2,{children:(A=n.admissionFee)!=null&&A.trim()?l.jsx(Wi,{children:n.admissionFee}):"현장·예약 시 안내"})})})]}),l.jsxs(S2,{children:[l.jsxs(C2,{type:"button",$open:f==="notice",onClick:()=>h(f==="notice"?null:"notice"),children:[l.jsx("span",{children:"유의사항"}),l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{d:"M9 18l6-6-6-6"})})]}),l.jsx($2,{$open:f==="notice",children:l.jsx(E2,{children:l.jsx(P2,{children:p!=null&&p.body?l.jsx(Wi,{children:p.body}):"등록된 유의사항이 없습니다."})})})]})]}),u.length>0&&l.jsxs(IE,{children:[l.jsx("h3",{children:"시설 정보"}),l.jsx(TE,{children:u.map(z=>l.jsxs(RE,{children:[z==="wifi"&&l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("path",{d:"M5 12.55a11 11 0 0 1 14.08 0"}),l.jsx("path",{d:"M1.42 9a16 16 0 0 1 21.16 0"}),l.jsx("path",{d:"M8.53 16.11a6 6 0 0 1 6.95 0"}),l.jsx("line",{x1:"12",y1:"20",x2:"12.01",y2:"20"})]}),z==="parking"&&l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),l.jsx("path",{d:"M3 9h18M9 21V9"})]}),z==="tea"&&l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("path",{d:"M18 8h1a4 4 0 0 1 0 8h-1"}),l.jsx("path",{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"}),l.jsx("line",{x1:"6",y1:"1",x2:"6",y2:"4"}),l.jsx("line",{x1:"10",y1:"1",x2:"10",y2:"4"}),l.jsx("line",{x1:"14",y1:"1",x2:"14",y2:"4"})]}),!["wifi","parking","tea"].includes(z)&&l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("circle",{cx:"12",cy:"12",r:"10"}),l.jsx("path",{d:"M12 8v4M12 16h.01"})]}),l.jsx("span",{children:UE[z]??z})]},z))})]}),l.jsxs(ME,{children:[l.jsx("h3",{children:"위치"}),l.jsxs(zE,{children:[l.jsxs(AE,{type:"button",onClick:M,title:"클릭하여 주소 복사",children:[l.jsx(_E,{children:n.address}),l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),l.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})]}),l.jsxs(NE,{href:`https://map.naver.com/v5/search/${encodeURIComponent(n.address)}`,target:"_blank",rel:"noreferrer noopener",children:[l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),l.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"안내"]})]}),l.jsx(BE,{id:"naver-map",ref:c})]})]}),P&&l.jsx(iE,{place:n,open:w,onClose:()=>C(!1),initialProgramId:m}),L&&l.jsx(Cx,{urls:L.urls,initialLoopIndex:L.initialLoopIndex,onClose:()=>v(null)})]})},WE=d.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 24px 20px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};

  @media (max-width: 960px) {
    padding: 20px 14px calc(48px + env(safe-area-inset-bottom, 0px));
  }
`,KE=d.h1`
  font-size: 2.4rem;
  margin-bottom: 12px;
`,YE=d.p`
  font-size: 1.2rem;
  color: ${({theme:e})=>e.colors.text700};
`,GE=d.form`
  margin: 24px 0;
  border: 1px solid ${({theme:e})=>e.colors.primary300};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 16px;
  display: grid;
  gap: 8px;
`,ZE=d.label`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text700};
`,qE=d.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
`,QE=d.input`
  border: 1px solid ${({theme:e})=>e.colors.border200};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: 10px 12px;
  font-size: 1.1rem;
`,XE=d.button`
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
`,JE=d.div`
  display: grid;
  gap: 12px;
`,eP=d.button`
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
`,tP=d.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: center;
`,nP=d.span`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.primary700};
  font-weight: 600;
`,rP=d.span`
  font-size: 1.2rem;
  font-weight: 600;
`,iP=d.span`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.text700};
`,oP=d.div`
  border-top: 1px solid ${({theme:e})=>e.colors.border200};
  padding-top: 12px;
  display: grid;
  gap: 8px;
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.6;
`,lP=d.ul`
  padding-left: 18px;
  display: grid;
  gap: 6px;
`,sP=d.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 8px;
`,aP=d.button`
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
`,cP=d.div`
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
`,R2=d.p`
  margin: 24px 0;
  color: ${({theme:e})=>e.colors.text700};
  text-align: center;
`,uP=d.div`
  margin-top: 20px;
  display: flex;
  gap: 8px;
  justify-content: center;
`,dP=d.button`
  border: 1px solid ${({theme:e})=>e.colors.border200};
  background: ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.white};
  color: ${({$active:e})=>e?"#fff":"inherit"};
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
`,pP=()=>{const[e,t]=y.useState([]),[n,r]=y.useState(""),[i,o]=y.useState(null),[s,a]=y.useState(1),[c,u]=y.useState(null),[p,f]=y.useState("ko-KR"),[h,g]=y.useState(!1),[b,w]=y.useState(!0),C=6;y.useEffect(()=>{const T=Se();if(!T){t([]),w(!1);return}w(!0),fetch(`${T}/notices`).then(R=>R.ok?R.json():Promise.reject()).then(R=>{if(!Array.isArray(R)){t([]);return}t(R),o(null)}).catch(()=>{t([])}).finally(()=>w(!1))},[]);const m=y.useCallback((T,R)=>{if(!("speechSynthesis"in window)){alert("이 브라우저는 음성 읽기를 지원하지 않습니다.");return}window.speechSynthesis.cancel();const I=window.speechSynthesis.getVoices(),P=p.split("-")[0],_=I.filter(z=>z.lang.startsWith(P)),B=_.filter(z=>z.localService),H=_.filter(z=>!z.localService),W=h&&H.length?H[0]:B[0]??_[0],A=new SpeechSynthesisUtterance(T);A.lang=p,A.rate=.95,W&&(A.voice=W),A.onstart=()=>u(R),A.onend=()=>u(null),A.onerror=z=>{u(null),console.warn("TTS error:",z)},window.speechSynthesis.speak(A)},[p,h]);y.useEffect(()=>{if(!("speechSynthesis"in window))return;const T=()=>window.speechSynthesis.getVoices();return window.speechSynthesis.onvoiceschanged=T,T(),()=>{window.speechSynthesis.onvoiceschanged=null}},[]);const x=y.useMemo(()=>{const T=n.trim().toLowerCase();return T?e.filter(R=>{const I=R.details?[...R.details.paragraphs,...R.details.bullets??[]]:[];return[R.title,R.summary,...I].join(" ").toLowerCase().includes(T)}):e},[n,e]),L=Math.max(1,Math.ceil(x.length/C)),v=Math.min(s,L),$=x.slice((v-1)*C,v*C),k=y.useCallback(async T=>{if(T.details!==void 0||T.detailLoading)return;const R=Se();if(R){t(I=>I.map(P=>P.id===T.id?{...P,detailLoading:!0}:P));try{const I=await fetch(`${R}/notices/${encodeURIComponent(T.id)}`);if(!I.ok)throw new Error("detail");const P=await I.json();t(_=>_.map(B=>B.id===T.id?{...B,details:P.details,detailLoading:!1}:B))}catch{t(I=>I.map(P=>P.id===T.id?{...P,detailLoading:!1}:P))}}},[]),S=y.useCallback(T=>{if(i===T.id){o(null);return}o(T.id),k(T)},[i,k]),M=T=>{T.preventDefault(),a(1)};return l.jsxs(WE,{children:[l.jsx(KE,{children:"공지사항"}),l.jsx(YE,{children:"전국 힐링명상지도에서 전하는 소식을 확인하세요."}),b&&l.jsx(R2,{children:"불러오는 중…"}),!b&&e.length===0&&l.jsx(R2,{children:"등록된 공지가 없습니다."}),!b&&e.length>0&&l.jsxs(l.Fragment,{children:[l.jsxs(GE,{onSubmit:M,children:[l.jsx(ZE,{htmlFor:"notice-search",children:"공지사항 검색"}),l.jsxs(qE,{children:[l.jsx(QE,{id:"notice-search",type:"text",placeholder:"검색어를 입력해주세요.",value:n,onChange:T=>r(T.target.value)}),l.jsx(XE,{type:"submit",children:"검색"})]})]}),l.jsx(JE,{children:$.map(T=>{const R=i===T.id;return l.jsxs(eP,{type:"button",$active:R,onClick:()=>S(T),children:[l.jsxs(tP,{children:[l.jsx(nP,{children:T.category}),l.jsx(rP,{children:T.title}),l.jsx(iP,{children:T.date})]}),R&&l.jsxs(oP,{children:[l.jsxs(sP,{children:[l.jsx(aP,{type:"button",onClick:I=>{if(I.stopPropagation(),c===T.id){window.speechSynthesis.cancel();return}const P=T.details,_=[T.title,T.summary,...(P==null?void 0:P.paragraphs)??[],...(P==null?void 0:P.bullets)??[],P==null?void 0:P.footer].filter(Boolean).join(". ");m(_,T.id)},children:c===T.id?l.jsx(l.Fragment,{children:"멈추기"}):l.jsxs(l.Fragment,{children:[l.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),l.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"})]}),"음성으로 들으기"]})}),l.jsxs(cP,{children:[l.jsx("button",{type:"button",className:p==="ko-KR"?"active":"",onClick:I=>{I.stopPropagation(),f("ko-KR")},children:"한국어"}),l.jsx("button",{type:"button",className:p==="en-US"?"active":"",onClick:I=>{I.stopPropagation(),f("en-US")},children:"English"}),l.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,fontSize:"0.85rem",cursor:"pointer"},children:[l.jsx("input",{type:"checkbox",checked:h,onChange:I=>{I.stopPropagation(),g(I.target.checked)}}),"고품질(온라인)"]})]})]}),l.jsx("p",{children:T.summary}),T.detailLoading&&l.jsx("p",{children:"본문을 불러오는 중…"}),!T.detailLoading&&T.details&&l.jsxs(l.Fragment,{children:[T.details.paragraphs.map(I=>l.jsx("p",{children:I},I)),T.details.bullets&&T.details.bullets.length>0&&l.jsx(lP,{children:T.details.bullets.map(I=>l.jsx("li",{children:I},I))}),T.details.footer&&l.jsx("p",{children:T.details.footer})]})]})]},T.id)})}),l.jsx(uP,{children:Array.from({length:L},(T,R)=>l.jsx(dP,{type:"button",$active:v===R+1,onClick:()=>a(R+1),children:R+1},`page-${R+1}`))})]})]})},fP=d.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 24px 20px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};

  @media (max-width: 960px) {
    padding: 20px 14px calc(48px + env(safe-area-inset-bottom, 0px));
  }
`,hP=d.h1`
  font-size: 2.4rem;
  margin-bottom: 12px;
`,gP=d.p`
  font-size: 1.2rem;
  color: ${({theme:e})=>e.colors.text700};
`,mP=d.div`
  margin-top: 24px;
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 20px;
  box-shadow: ${({theme:e})=>e.shadow.soft};
`,xP=d.form`
  display: grid;
  gap: 16px;
  margin-top: 20px;
`,hu=d.label`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text700};
`,M2=d.input`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${({theme:e})=>e.colors.border200};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: 10px 12px;
  font-size: 1rem;
`,LP=d.textarea`
  width: 100%;
  min-height: 160px;
  box-sizing: border-box;
  border: 1px solid ${({theme:e})=>e.colors.border200};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: 10px 12px;
  font-size: 1rem;
  resize: vertical;
`,yP=d.button`
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
`,z2=d.p`
  margin: 0;
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.text700};
`,vP=d.p`
  margin: 12px 0 0;
  font-size: 0.95rem;
  color: ${({theme:e,$variant:t})=>t==="error"?"#b91c1c":e.colors.primary700};
`,wP=()=>{const e=qt(h=>h.email),[t,n]=y.useState(e??""),[r,i]=y.useState(""),[o,s]=y.useState(""),[a,c]=y.useState(!1),[u,p]=y.useState(null),f=async h=>{if(h.preventDefault(),p(null),!Se()){p({text:"지금은 전송할 수 없어요. 잠시 후 다시 시도해 주세요.",ok:!1});return}if(!t.trim()||!r.trim()||!o.trim()){p({text:"이메일, 제목, 내용을 모두 입력해 주세요.",ok:!1});return}c(!0);try{if(!(await me("/inquiries",{method:"POST",body:JSON.stringify({email:t.trim(),subject:r.trim(),body:o.trim()})})).ok){p({text:"전송에 실패했습니다.",ok:!1});return}i(""),s(""),p({text:"문의가 접수되었습니다. 빠르게 답변드릴게요.",ok:!0})}catch{p({text:"전송에 실패했습니다. 잠시 후 다시 시도해 주세요.",ok:!1})}finally{c(!1)}};return l.jsxs(fP,{children:[l.jsx(hP,{children:"1:1 문의"}),l.jsx(gP,{children:"궁금한 점을 남겨주시면 빠르게 답변드릴게요."}),l.jsxs(mP,{children:[l.jsx(z2,{children:"이메일: support@healingmeditation.kr"}),l.jsx(z2,{children:"운영시간: 평일 09:00 - 18:00"}),l.jsxs(xP,{onSubmit:h=>void f(h),children:[l.jsxs("div",{children:[l.jsx(hu,{htmlFor:"inquiry-email",children:"회신 받을 이메일"}),l.jsx(M2,{id:"inquiry-email",type:"email",value:t,onChange:h=>n(h.target.value),autoComplete:"email",placeholder:"you@example.com"})]}),l.jsxs("div",{children:[l.jsx(hu,{htmlFor:"inquiry-subject",children:"제목"}),l.jsx(M2,{id:"inquiry-subject",type:"text",value:r,onChange:h=>i(h.target.value),placeholder:"문의 제목"})]}),l.jsxs("div",{children:[l.jsx(hu,{htmlFor:"inquiry-body",children:"내용"}),l.jsx(LP,{id:"inquiry-body",value:o,onChange:h=>s(h.target.value),placeholder:"문의 내용을 자유롭게 적어 주세요."})]}),l.jsx(yP,{type:"submit",disabled:a,children:a?"전송 중…":"문의 보내기"}),u&&l.jsx(vP,{$variant:u.ok?"ok":"error",role:"status",children:u.text})]})]})]})},K={h1:Me`
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 1.22;
    letter-spacing: -0.02em;
  `,h2:Me`
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 1.26;
    letter-spacing: -0.02em;
  `,h3:Me`
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.02em;
  `,title:Me`
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: -0.02em;
  `,body1:Me`
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.45;
  `,body2:Me`
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.45;
  `,caption:Me`
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.4;
  `,buttonLg:Me`
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.2;
  `,buttonMd:Me`
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.2;
  `},A2=[{label:"전체",value:"all"},{label:"템플스테이",value:"템플스테이"},{label:"명상센터",value:"명상센터"},{label:"프리랜서",value:"프리랜서(공간없음)"},{label:"힐링명상",value:"힐링명상"},{label:"기타",value:"기타"}],bP=d.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 20px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};

  @media (max-width: 960px) {
    padding: 20px 14px calc(48px + env(safe-area-inset-bottom, 0px));
  }
`,kP=d.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 24px;
  color: ${({theme:e})=>e.colors.text900};
`,jP=d.div`
  display: flex;
  gap: 8px;
  margin: -8px 0 22px;
  padding: 4px 0;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`,SP=d.button`
  flex: 0 0 auto;
  padding: 9px 12px;
  border: 1px solid
    ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.primary200};
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.white};
  color: ${({theme:e,$active:t})=>t?e.colors.white:e.colors.text700};
  ${K.caption};
  cursor: pointer;
`,CP=d.span`
  margin-left: 4px;
  opacity: 0.72;
`,$P=d.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,EP=d.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text700};
  padding: 48px 24px;
  text-align: center;
  margin: 0;
`,PP=()=>{const[e,t]=y.useState("all"),{favorites:n}=_r(),r=Xt(a=>a.places),i=y.useMemo(()=>n.map(a=>r.find(c=>c.id===a)).filter(a=>a!=null),[n,r]),o=y.useMemo(()=>da(i,{category:e,keyword:"",tags:[]}),[e,i]),s=y.useMemo(()=>new Map(A2.map(({value:a})=>[a,a==="all"?i.length:da(i,{category:a,keyword:"",tags:[]}).length])),[i]);return l.jsxs(bP,{children:[l.jsx(kP,{children:"찜 목록"}),l.jsx(jP,{"aria-label":"찜 목록 카테고리",children:A2.map(a=>l.jsxs(SP,{type:"button",$active:e===a.value,onClick:()=>t(a.value),children:[a.label,l.jsx(CP,{children:s.get(a.value)??0})]},a.value))}),o.length===0?l.jsx(EP,{children:i.length===0?"찜한 명상아이템이 없어요. 리스트에서 하트를 눌러 찜해보세요.":"이 카테고리에 찜한 장소가 아직 없어요."}):l.jsx($P,{children:o.map(a=>l.jsx("li",{children:l.jsx(_o,{place:a})},a.id))})]})},_2="/assets/kakao-BwFsiG1v.png",N2="/assets/naver-8e52KbwB.png",O2="/assets/google-3Iqg8dcD.png",IP="/assets/left-arrow-D7869Zjw.png";async function Wp(e){var t;if(!e.ok){let n="요청을 처리하지 못했어요.";try{const r=await e.json();(t=r.message)!=null&&t.trim()&&(n=r.message)}catch{}throw new Error(n)}return await e.json()}async function TP(e){return Wp(await me("/me/profile",{method:"PUT",body:JSON.stringify(e)}))}async function RP(){return Wp(await me("/me"))}async function MP(){const e=await me("/me/expert-profile");if(e.status===204)return null;if(!e.ok)throw new Error("전문가 정보를 불러오지 못했어요.");const t=await e.json();return t?{name:String(t.name??""),intro:String(t.intro??""),degrees:Array.isArray(t.degrees)?t.degrees.map(String):[],certificates:Array.isArray(t.certificates)?t.certificates.map(String):[],careers:Array.isArray(t.careers)?t.careers.map(String):[],classTypes:Array.isArray(t.classTypes)?t.classTypes.map(String):[],regionIds:Array.isArray(t.regionIds)?t.regionIds.map(String):[],hasCenter:!!t.hasCenter,centerName:String(t.centerSummary??""),centerAddress:String(t.centerAddress??"")}:null}async function zP(e){return Wp(await me("/me/expert-profile",{method:"PUT",body:JSON.stringify({...e,businessOpeningDate:e.businessOpeningDate||null})}))}const AP=["힐링명상","템플스테이","행사","마음챙김","숲 명상","아트명상","호흡","숙박 프로그램"],_P=d.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  display: grid;
  place-items: end center;
  background: rgba(29, 16, 38, 0.46);
`,NP=d.section`
  width: min(100%, 620px);
  max-height: 88dvh;
  overflow-y: auto;
  padding: 20px 20px calc(24px + env(safe-area-inset-bottom, 0px));
  border-radius: 26px 26px 0 0;
  background: ${({theme:e})=>e.colors.white};
`,OP=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
`,DP=d.h2`
  margin: 0;
  ${K.title};
`,BP=d.button`
  border: 0;
  background: transparent;
  ${K.body1};
  cursor: pointer;
`,gu=d.div`
  display: block;
  margin-top: 20px;
`,mu=d.span`
  display: block;
  margin-bottom: 8px;
  ${K.body2};
  font-weight: 700;
`,FP=d.input`
  width: 100%;
  box-sizing: border-box;
  padding: 13px 14px;
  border: 1px solid ${({theme:e})=>e.colors.primary200};
  border-radius: 12px;
  ${K.body2};
`,D2=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,HP=d.div`
  padding: 12px;
  border-radius: 18px;
  background: ${({theme:e})=>e.colors.primary50};
`,UP=d.p`
  margin: 10px 0;
  color: ${({theme:e})=>e.colors.text700};
  ${K.caption};
`,B2=d.button`
  padding: 8px 11px;
  border: 1px solid
    ${({theme:e,$selected:t})=>t?e.colors.primary600:e.colors.primary200};
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e,$selected:t})=>t?e.colors.primary600:e.colors.white};
  color: ${({theme:e,$selected:t})=>t?e.colors.white:e.colors.text700};
  ${K.caption};
  cursor: pointer;
`,VP=d.button`
  width: 100%;
  margin-top: 28px;
  padding: 15px;
  border: 0;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary600};
  color: white;
  ${K.buttonMd};
  cursor: pointer;
`,WP=d.p`
  margin: 12px 0 0;
  color: #c5221f;
  ${K.caption};
`;function KP({open:e,profile:t,onClose:n,onSaved:r}){const[i,o]=y.useState(""),[s,a]=y.useState([]),[c,u]=y.useState([]),[p,f]=y.useState(!1),[h,g]=y.useState(null);if(y.useEffect(()=>{e&&(o(t.displayName||t.username.split("@")[0]||""),a(t.regionIds??[]),u(t.interests??[]),g(null))},[e,t]),!e)return null;const b=(w,C,m)=>{m(C.includes(w)?C.filter(x=>x!==w):[...C,w])};return l.jsx(_P,{onMouseDown:n,children:l.jsxs(NP,{role:"dialog","aria-modal":"true",onMouseDown:w=>w.stopPropagation(),children:[l.jsxs(OP,{children:[l.jsx(DP,{children:"프로필 수정"}),l.jsx(BP,{type:"button",onClick:n,"aria-label":"닫기",children:"×"})]}),l.jsxs(gu,{children:[l.jsx(mu,{children:"이름"}),l.jsx(FP,{value:i,maxLength:80,onChange:w=>o(w.target.value),placeholder:"화면에 표시할 이름"})]}),l.jsxs(gu,{children:[l.jsx(mu,{children:"주 활동 지역"}),l.jsx(HP,{children:l.jsx(Ll,{activeRegionIds:s,maxMapHeight:"min(42dvh, 420px)",onSelectRegion:w=>b(w,s,a)})}),l.jsx(UP,{children:"지도에서 활동 지역을 선택해 주세요. 선택된 지역을 다시 누르면 해제됩니다."}),l.jsx(D2,{children:Ki.filter(w=>s.includes(w.id)).map(w=>l.jsxs(B2,{type:"button",$selected:!0,onClick:()=>b(w.id,s,a),children:[w.name," ×"]},w.id))})]}),l.jsxs(gu,{children:[l.jsx(mu,{children:"관심사"}),l.jsx(D2,{children:AP.map(w=>l.jsx(B2,{type:"button",$selected:c.includes(w),onClick:()=>b(w,c,u),children:w},w))})]}),h&&l.jsx(WP,{children:h}),l.jsx(VP,{type:"button",disabled:p||!i.trim(),onClick:()=>{f(!0),g(null),TP({displayName:i.trim(),regionIds:s,interests:c}).then(w=>{r(w),n()}).catch(w=>g(w instanceof Error?w.message:"저장하지 못했어요.")).finally(()=>f(!1))},children:p?"저장 중…":"저장하기"})]})})}const YP=Ke`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Kp=Ke`
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,GP=Ke`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,ZP=Ke`
  from {
    opacity: 0;
    transform: scale(0.96) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`,$x=Ke`
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,qP=Ke`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,xu=d.div`
  margin-top: 0;
  animation: ${qP} 0.42s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,QP=d.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,XP=d.p`
  margin: 0;
  padding: 0 4px;
  text-align: left;
  ${K.caption};
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.45;
`,JP=d.section`
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
`,eI=d.div`
  align-self: stretch;
  flex-shrink: 0;
  width: 100%;
  height: 4px;
  margin: 0 0 12px;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary100};
  overflow: hidden;
`,tI=d.div`
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
`,nI=d.div`
  position: relative;
  width: min(100%, 420px);
  padding: 6px 18px 16px;
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,ti=d.div`
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${YP} 0.35s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,fo=d.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
`,ho=d.div`
  flex-shrink: 0;
  margin-top: auto;
  padding-top: 12px;
  width: 100%;
`,rI=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
  gap: 12px;
  flex-shrink: 0;
`,iI=d.button`
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
`,oI=d.img`
  width: 18px;
  height: 18px;
  object-fit: contain;
`,lI=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  flex-shrink: 0;
`,sI=d.img`
  width: 74px;
  height: 74px;
  object-fit: contain;
`,F2=d.p`
  margin: 10px 0 0;
  padding: 0 12px;
  text-align: center;
  ${K.body1};
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text900};
  line-height: 1.45;
  max-width: 320px;
`,aI=d.h1`
  margin: 8px 0 0;
  ${K.title};
  color: ${({theme:e})=>e.colors.primary300};
`,Lu=d.h2`
  margin: 14px 0 0;
  text-align: center;
  ${K.h3};
`,H2=d.p`
  margin: 8px 0 0;
  text-align: center;
  ${K.body2};
  color: ${({theme:e})=>e.colors.text700};
`,cI=Ke`
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
`,yu=d.div`
  position: fixed;
  top: calc(env(safe-area-inset-top, 0px) + 10px);
  left: 50%;
  z-index: 130;
  pointer-events: none;
  animation: ${cI} 2.2s ease both;
`,vu=d.div`
  padding: 12px 18px;
  border-radius: ${({theme:e})=>e.radii.pill};
  border: 1px solid
    ${({$variant:e})=>e==="error"?"#f0b8b8":"#96d6a3"};
  background: ${({$variant:e})=>e==="error"?"#fce8e6":"#e8f8ec"};
  color: ${({$variant:e})=>e==="error"?"#c5221f":"#1f6a2b"};
  ${K.body2};
`,U2=d.div`
  margin-top: clamp(24px, 6vh, 48px);
  display: flex;
  flex-direction: column;
  gap: 14px;
`,uI=d.p`
  margin: 8px 0 0;
  text-align: center;
  ${K.body2};
  color: ${({theme:e})=>e.colors.text700};
`,$r=d.p`
  margin: 6px 4px 0;
  ${K.caption};
  color: #d93025;
  animation: ${Kp} 0.24s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,dI=d.p`
  margin: 6px 4px 0;
  ${K.caption};
  color: #188038;
  animation: ${Kp} 0.24s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,pI=d.p`
  margin: 6px 4px 0;
  ${K.caption};
  color: ${({theme:e})=>e.colors.text700};
`,V2=d.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  animation: ${$x} 0.42s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: ${({$index:e})=>e*.07}s;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,fI=d(uI)`
  margin-top: 0;
  text-align: left;
  padding: 0 2px;
  animation: ${$x} 0.42s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,hI=d.div`
  margin-top: 4px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,gI=d.button`
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
`,mI=d.span`
  ${K.h2};
  font-weight: 300;
  line-height: 1;
  color: ${({theme:e})=>e.colors.text700};
  opacity: 0.55;
  user-select: none;
`,xI=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,LI=d.input`
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
`,W2=d($r)`
  animation: ${Kp} 0.3s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,wu=d.div`
  position: relative;
  width: 100%;
`,bu=d.button`
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
`,yI=d.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
`,vI=d.button`
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
`,li=d.button`
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
`,wI=d.div`
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`,bI=d.button`
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
`,kI=d.p`
  margin: 0;
  text-align: center;
  ${K.caption};
  color: ${({theme:e,$error:t})=>t?"#d93025":e.colors.text700};
  max-width: 320px;
  line-height: 1.45;
`,jI=d.div`
  margin-top: 18px;
`,Ex=d.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.28);
  display: grid;
  place-items: center;
  z-index: 120;
  animation: ${GP} 0.22s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,SI=d(Ex)`
  z-index: 125;
`,Px=d.div`
  width: min(88vw, 320px);
  background: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 22px 18px 16px;
  animation: ${ZP} 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,K2=d.p`
  text-align: center;
  ${K.body1};
  color: ${({theme:e})=>e.colors.text900};
`,CI=d.div`
  margin-top: 18px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`,x1=d.button`
  border: 1px solid
    ${({theme:e,$primary:t})=>t?e.colors.primary300:e.colors.primary200};
  background: ${({theme:e,$primary:t})=>t?e.colors.primary300:e.colors.white};
  color: ${({theme:e,$primary:t})=>t?e.colors.white:e.colors.text900};
  border-radius: ${({theme:e})=>e.radii.pill};
  padding: 10px 14px;
  ${K.buttonMd};
  cursor: pointer;
`,$I=d(x1).attrs({type:"button",$primary:!0})`
  width: 100%;
  margin-top: 14px;
`,EI=d.div`
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
`,PI=d.button`
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
`,II=d(li)`
  flex-shrink: 0;
`,TI=d.button`
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
`,RI=d.span`
  display: block;
  text-align: right;
  width: 100%;
  margin: 0 0 4px;
  ${K.caption};
  color: ${({theme:e})=>e.colors.text700};
`,MI=d.div`
  margin: 36px auto 0;
  display: flex;
  justify-content: center;
`,zI=d.img`
  width: 108px;
  height: 108px;
  object-fit: contain;
`,AI=d.h2`
  margin: 10px 0 0;
  text-align: center;
  ${K.h1};
  color: ${({theme:e})=>e.colors.primary300};
`,_I=d.p`
  margin: 8px 0 0;
  text-align: center;
  ${K.body2};
  color: ${({theme:e})=>e.colors.text700};
`,NI=d.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,Bo=d.input`
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
`,ku=d(Bo)`
  padding: 14px 56px 14px 24px;
  transition:
    border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.22s ease;
`,OI=d.div`
  position: relative;
  width: 100%;
  min-width: 0;
`,DI=d(Bo)`
  padding: 14px 58px 14px 24px;
`,BI=d.span`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  ${K.caption};
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: ${({theme:e})=>e.colors.text700};
`,FI=d.button`
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
`,HI=d.div`
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
`,UI=d.div`
  display: flex;
  justify-content: center;
  gap: 22px;
`,ju=d.button`
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
`,Su=d.a`
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
`,ni=d.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
`,VI=d.div`
  margin: 28px 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 6px;
  text-align: center;
  ${K.body2};
  color: ${({theme:e})=>e.colors.text900};
`,WI=d.button`
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
`,KI=d.div`
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
`,YI=d.div`
  flex: 1 1 auto;
  min-height: min(200px, 28dvh);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,GI=d.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  padding-bottom: 4px;
`,ZI=d.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0;
`,qI=d.img`
  width: 72px;
  height: 72px;
  object-fit: contain;
`,QI=d.p`
  margin: 0;
  text-align: center;
  ${K.body2};
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.45;
  max-width: 300px;
`,XI=d.div`
  margin-top: 22px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
`,Cu=d.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 52px;
  padding: 10px 0;
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary200};
`,$u=d.label`
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
`,Eu=d.input`
  width: 20px;
  height: 20px;
  margin: 2px 0 0;
  flex-shrink: 0;
  accent-color: ${({theme:e})=>e.colors.primary300};
  cursor: pointer;
`,Pu=d.span`
  ${K.body2};
  color: ${({theme:e})=>e.colors.text900};
  line-height: 1.4;
`,Iu=d.span`
  display: inline-block;
  margin-right: 6px;
  ${K.caption};
  font-weight: 700;
  color: ${({theme:e,$optional:t})=>t?e.colors.text700:e.colors.primary600};
`,Tu=d.button`
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
`,JI=d.div`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: stretch;
`,eT=d.button`
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
`,tT=d.button`
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
`,nT=d(Px)`
  width: min(92vw, 360px);
  max-height: min(72dvh, 520px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 18px 16px 14px;
`,rT=d.div`
  margin-top: 12px;
  overflow-y: auto;
  flex: 1 1 auto;
  min-height: 0;
  ${K.body2};
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.55;
  white-space: pre-line;
`,iT=d.div`
  width: min(100%, 680px);
  padding: 0 2px 32px;
`,oT=d.h1`
  margin: 0 0 20px;
  text-align: center;
  ${K.title};
`,lT=d.section`
  position: relative;
  overflow: hidden;
  padding: 26px 22px 22px;
  border: 1px solid rgba(75, 0, 130, 0.08);
  border-radius: 28px;
  background:
    radial-gradient(circle at 100% 0%, rgba(245, 216, 208, 0.9), transparent 38%),
    linear-gradient(145deg, #ffffff 0%, #faf5ff 100%);
  box-shadow: 0 16px 40px rgba(75, 0, 130, 0.09);
`,sT=d.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 18px;
`,aT=d.button`
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
`,cT=d.img`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
  object-fit: cover;
`,uT=d.span`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: linear-gradient(145deg, #d8c5e9, #a88bca);
  color: ${({theme:e})=>e.colors.white};
  font-size: 1.65rem;
  font-weight: 800;
`,dT=d.span`
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
`,pT=d.div`
  min-width: 0;
  flex: 1;
`,fT=d.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`,hT=d.h2`
  margin: 0;
  ${K.title};
`,gT=d.span`
  padding: 5px 9px;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary100};
  color: ${({theme:e})=>e.colors.primary600};
  ${K.caption};
  font-weight: 800;
`,mT=d.p`
  margin: 6px 0 0;
  color: ${({theme:e})=>e.colors.text700};
  ${K.body2};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,xT=d.p`
  margin: 8px 0 0;
  color: ${({theme:e})=>e.colors.primary500};
  ${K.caption};
  font-weight: 700;
`,LT=d.button`
  margin-top: 10px;
  padding: 8px 12px;
  border: 1px solid ${({theme:e})=>e.colors.primary200};
  border-radius: ${({theme:e})=>e.radii.pill};
  background: rgba(255, 255, 255, 0.76);
  color: ${({theme:e})=>e.colors.primary600};
  ${K.caption};
  font-weight: 700;
  cursor: pointer;
`,yT=d.input`
  display: none;
`,vT=d.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 24px;
  padding: 17px 8px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(10px);
`,Ru=d.div`
  text-align: center;

  & + & {
    border-left: 1px solid rgba(75, 0, 130, 0.1);
  }
`,Mu=d.strong`
  display: block;
  color: ${({theme:e})=>e.colors.primary600};
  ${K.body1};
  font-weight: 700;
`,zu=d.span`
  display: block;
  margin-top: 4px;
  color: ${({theme:e})=>e.colors.text700};
  ${K.caption};
`,wT=d.button`
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
`,bT=d.span`
  width: 44px;
  height: 44px;
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.16);
  font-size: 1.35rem;
`,kT=d.span`
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
`,Au=d.section`
  margin-top: 26px;
`,_u=d.h3`
  margin: 0 4px 11px;
  ${K.body1};
  font-weight: 700;
`,jT=d.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
`,Y2=d.button`
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
`,G2=d.span`
  display: block;
  font-size: 1.35rem;
`,Z2=d.strong`
  display: block;
  margin-top: 12px;
  ${K.body2};
  font-weight: 700;
`,q2=d.span`
  display: block;
  margin-top: 4px;
  color: ${({theme:e})=>e.colors.text700};
  ${K.caption};
`,Q2=d.div`
  overflow: hidden;
  border: 1px solid rgba(75, 0, 130, 0.08);
  border-radius: 22px;
  background: ${({theme:e})=>e.colors.white};
  box-shadow: 0 7px 22px rgba(61, 61, 61, 0.04);
`,go=d.button`
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
`,mo=d.span`
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: ${({theme:e})=>e.colors.primary50};
`,xo=d.span`
  flex: 1;
  ${K.body2};
  font-weight: 600;
`,ri=d.span`
  color: ${({theme:e})=>e.colors.mutedMauve};
  font-size: 1.25rem;
`,ST=d.p`
  margin: 12px 4px 0;
  color: ${({$error:e,theme:t})=>e?"#c5221f":t.colors.primary600};
  ${K.caption};
  text-align: center;
`,CT=d.button`
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
`,X2={service:{title:"서비스 이용약관",body:`제1조 (목적)
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

수신 방법·빈도·철회 절차 등은 추후 설정에서 변경하실 수 있습니다.`}},J2=e=>!(e.length<8||!/[a-zA-Z]/.test(e)||!/[0-9]/.test(e)),e4=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,t4=/^[^\s@]+@[^\s@]+\./,Nu=/^01[0-9]\d{7,8}$/,ii="meditation-oauth-signup-ticket",$T=()=>{var a0;const e=mt(),[t,n]=P3(),r=y.useRef(!1),[i,o]=y.useState("login"),[s,a]=y.useState(""),[c,u]=y.useState(!1),[p,f]=y.useState({status:"idle",email:null}),[h,g]=y.useState(""),[b,w]=y.useState(""),[C,m]=y.useState(""),[x,L]=y.useState(""),[v,$]=y.useState(!1),[k,S]=y.useState(!1),[M,T]=y.useState(!1),[R,I]=y.useState("KR-11"),[P,_]=y.useState(!1),[B,H]=y.useState(!1),[W,A]=y.useState(!1),[z,N]=y.useState(null),[j,Q]=y.useState(null),[G,E]=y.useState(300),[q,ee]=y.useState(!1),[J,Y]=y.useState(!1),[te,ue]=y.useState(!1),[Le,de]=y.useState(!1),[fe,we]=y.useState(null),[Ee,Ae]=y.useState(!1),[Ye,Pe]=y.useState(null),[Ut,X]=y.useState(!1),[be,ke]=y.useState(""),[Lt,on]=y.useState(""),[He,Zr]=y.useState(!1),[O,F]=y.useState(null),ne=qt(D=>D.accessToken),ae=qt(D=>D.email),ye=qt(D=>D.logout),jt=_r(D=>D.favorites.length),Vt=y.useRef(null),[oe,ln]=y.useState(null),[wr,ct]=y.useState(!1),[Tn,Wt]=y.useState(!1),[_x,Zp]=y.useState(!1),[Ya,br]=y.useState(null),Nx=((a0=Un(R))==null?void 0:a0.name)??"서울",qr=y.useMemo(()=>Se()??"",[]),qp=y.useRef(null),[Qp,Xp]=y.useState(null),[Ga,Za]=y.useState(null),kl=()=>{Xp(null),Za(D=>(D!=null&&D.startsWith("blob:")&&URL.revokeObjectURL(D),null))},Ox=D=>{if(!D.type.startsWith("image/")){F("이미지 파일만 선택할 수 있어요.");return}const re=5*1024*1024;if(D.size>re){F("사진은 5MB 이하로 선택해 주세요.");return}F(null),Xp(D);const he=URL.createObjectURL(D);Za(_e=>(_e!=null&&_e.startsWith("blob:")&&URL.revokeObjectURL(_e),he))},ut=y.useMemo(()=>s.trim(),[s]),Qr=y.useMemo(()=>ut?!e4.test(ut):!1,[ut]),qa=y.useMemo(()=>ut.length>0&&e4.test(ut),[ut]),Jp=!!Se()&&ut.length>0&&t4.test(ut),dt=p.email===ut?p:null,to=!!dt&&dt.status==="unavailable",e0=y.useMemo(()=>qa?Se()?(dt==null?void 0:dt.status)==="available"&&dt.email===ut:!0:!1,[qa,ut,dt]),Dx=Qr||to,Rn=y.useMemo(()=>h.replace(/[^\d]/g,""),[h]),Bx=y.useMemo(()=>Rn?!Nu.test(Rn):!1,[Rn]),t0=y.useMemo(()=>Rn.length>0&&Nu.test(Rn),[Rn]),n0=Bx,Qa=y.useMemo(()=>/^\d{6}$/.test(b.trim()),[b]),r0=async()=>{if(!Se()||!Nu.test(Rn))return!1;try{return(await me("/auth/phone/signup/send-otp",{method:"POST",body:JSON.stringify({phone:Rn})})).ok}catch{return!1}},Fx=async()=>{if(!Se()){F("지금은 이용할 수 없어요. 잠시 후 다시 시도해 주세요.");return}F(null),N(null),A(!1),Q(null),w(""),H(!0),E(300),ee(!0),window.setTimeout(()=>{var re;(re=document.getElementById("signup-code-anchor"))==null||re.scrollIntoView({behavior:"smooth",block:"nearest"})},120),await r0()||F("인증 문자를 보내지 못했어요. 잠시 후 다시 시도해 주세요.")},Hx=async()=>{w(""),A(!1),N(null),Q(null),E(300),ee(!0),await r0()||F("인증 문자를 다시 보내지 못했어요. 잠시 후 다시 시도해 주세요.")},Ux=async()=>{if(Qa){if(!Se()){F("지금은 이용할 수 없어요. 잠시 후 다시 시도해 주세요.");return}F(null);try{const D=await me("/auth/phone/signup/verify-otp",{method:"POST",body:JSON.stringify({phone:Rn,code:b.trim()})});if(!D.ok){Q("error");return}const he=(await D.json()).phoneVerificationToken;if(!he){Q("error");return}N(he),A(!0),Q("success")}catch{Q("error")}}},Xa=y.useMemo(()=>{const D=C;return D?D.length<8?"8자 이상이어야 합니다":/[a-zA-Z]/.test(D)?/[0-9]/.test(D)?null:"숫자가 포함되어야 합니다":"영문이 포함되어야 합니다":null},[C]),i0=y.useMemo(()=>x.length>0&&C!==x,[C,x]),o0=y.useMemo(()=>J2(C)&&C===x,[C,x]),Vx=G<=0,l0=y.useMemo(()=>{const D=Math.floor(G/60),re=G%60;return`${D}:${String(re).padStart(2,"0")}`},[G]),Ja=y.useMemo(()=>J&&te,[J,te]),jl=y.useMemo(()=>{switch(i){case"signup-terms":return 20;case"signup-account":return 40;case"signup-region":return 60;case"signup-interest":return 80;case"signup-complete":return 100;default:return null}},[i]);y.useEffect(()=>{var Kt,Mt;if(r.current||t.get("signupOAuth")!=="1")return;const D=(Kt=t.get("oauthSignupTicket"))==null?void 0:Kt.trim();if(!D)return;r.current=!0;const re=t.get("email")??"",he=((Mt=t.get("picture"))==null?void 0:Mt.trim())??"";o("signup-account"),re&&a(re),u(!0),he.startsWith("https://")&&Za(sn=>(sn!=null&&sn.startsWith("blob:")&&URL.revokeObjectURL(sn),he));try{sessionStorage.setItem(ii,D)}catch{}const _e=new URLSearchParams(t);_e.delete("signupOAuth"),_e.delete("oauthSignupTicket"),_e.delete("email"),_e.delete("picture"),n(_e,{replace:!0})},[t,n]),y.useEffect(()=>{if(i!=="signup-account"||c)return;if(!ut.length||!t4.test(ut)){f({status:"idle",email:null});return}if(!Se()){f({status:"idle",email:null});return}const re=ut,he=new AbortController,Kt=window.setTimeout(()=>{f({status:"loading",email:re}),(async()=>{try{const Mt=await me(`/auth/email/availability?email=${encodeURIComponent(re)}`,{signal:he.signal});if(!Mt.ok){f({status:"error",email:re});return}const Xx=!!(await Mt.json()).available;f({status:Xx?"available":"unavailable",email:re})}catch(Mt){if(Mt.name==="AbortError"||!Se())return;f({status:"error",email:re})}})()},320);return()=>{window.clearTimeout(Kt),he.abort()}},[ut,i,c]),y.useEffect(()=>{if(i!=="signup-account"||!B)return;const D=window.setInterval(()=>{E(re=>re>0?re-1:0)},1e3);return()=>window.clearInterval(D)},[i,B]),y.useEffect(()=>{if(i!=="signup-account"||!B||!W)return;const D=window.setTimeout(()=>{var re;(re=document.getElementById("signup-password-anchor"))==null||re.scrollIntoView({behavior:"smooth",block:"nearest"})},80);return()=>window.clearTimeout(D)},[i,B,W]),y.useEffect(()=>{if(i!=="signup-account"||!c)return;const D=window.setTimeout(()=>{var re;(re=document.getElementById("signup-phone-anchor"))==null||re.scrollIntoView({behavior:"smooth",block:"nearest"})},100);return()=>window.clearTimeout(D)},[i,c]),y.useEffect(()=>{if(!j)return;const D=window.setTimeout(()=>{Q(null)},2200);return()=>window.clearTimeout(D)},[j]),y.useEffect(()=>{if(!q)return;const D=window.setTimeout(()=>{ee(!1)},2200);return()=>window.clearTimeout(D)},[q]),y.useEffect(()=>{i==="login"&&T(!1)},[i]),y.useEffect(()=>{i!=="signup-region"&&(Pe(null),X(!1),Ae(!1))},[i]);const Wx=()=>{if(Pe(null),X(!1),!navigator.geolocation){X(!0),Pe("이 환경에서는 위치 정보를 쓸 수 없어요. 지도에서 골라주세요.");return}Ae(!0),navigator.geolocation.getCurrentPosition(D=>{var he;Ae(!1);const re=ny(D.coords.latitude,D.coords.longitude);if(re){I(re),_(!0),X(!1);const _e=((he=Un(re))==null?void 0:he.name)??re;Pe(`${_e} 지역으로 맞췄어요. 맞는지 확인해 주세요.`)}else X(!0),Pe("위치로 시·도를 찾지 못했어요. 지도에서 선택해 주세요.")},D=>{Ae(!1),X(!0),D.code===1?Pe("위치 권한이 필요해요. 허용하시거나 지도에서 골라주세요."):D.code===2?Pe("위치를 가져올 수 없어요. 지도에서 선택해 주세요."):Pe("위치 확인에 실패했어요. 지도에서 선택해 주세요.")},{enableHighAccuracy:!1,maximumAge:3e5,timeout:12e3})},Kx=()=>{if(i==="login"){e(-1);return}if(i==="signup-terms"){we(null),o("login");return}if(i==="signup-account"){let D=null;try{D=sessionStorage.getItem(ii)}catch{D=null}if(D){try{sessionStorage.removeItem(ii)}catch{}u(!1),f({status:"idle",email:null}),kl(),N(null),H(!1),A(!1),Q(null),g(""),w(""),m(""),L(""),$(!1),S(!1),o("login");return}u(!1),f({status:"idle",email:null}),kl(),N(null),H(!1),A(!1),Q(null),g(""),w(""),m(""),L(""),$(!1),S(!1),o("signup-terms");return}if(i==="signup-region"){o("signup-account");return}i==="signup-interest"&&o("signup-region")},Yx=async()=>{if(F(null),!Se()){F("지금은 이용할 수 없어요. 잠시 후 다시 시도해 주세요.");return}const D=be.trim();if(!D||!Lt){F("이메일과 비밀번호를 입력해 주세요.");return}Zr(!0);try{const re=await me("/auth/login",{method:"POST",body:JSON.stringify({email:D,password:Lt})});if(!re.ok){let he="";try{he=(await re.json()).error??""}catch{}F(he==="INVALID_CREDENTIALS"?"이메일 또는 비밀번호를 확인해 주세요.":"로그인에 실패했습니다.");return}await qt.getState().setSession(),await _r.getState().pullFromServer(),on("")}catch{F("잠시 후 다시 시도해 주세요.")}finally{Zr(!1)}},Gx=async()=>{if(F(null),!Se()){F("지금은 이용할 수 없어요. 잠시 후 다시 시도해 주세요.");return}if(!J2(C)||C!==x){F("비밀번호를 다시 확인해 주세요.");return}let D=null;try{D=sessionStorage.getItem(ii)}catch{D=null}if(!D&&(!z||z.trim()==="")){F("휴대폰 인증을 완료해 주세요.");return}const re=Se();Zr(!0);try{const he=new FormData;he.append("email",ut),he.append("password",C),D?he.append("oauthSignupToken",D):he.append("phoneVerificationToken",z.trim()),Qp&&he.append("profileImage",Qp);const _e=D?`${re}/auth/register/oauth`:`${re}/auth/register`,Kt=await fetch(_e,{method:"POST",body:he,credentials:"include"});if(Kt.status===409){F("이미 가입된 이메일입니다.");return}if(!Kt.ok){try{const Mt=await Kt.json(),sn=Mt.code??Mt.error??"";if(Kt.status===400&&sn==="INVALID_OAUTH_SIGNUP_TOKEN"){F("소셜 가입 세션이 만료되었습니다. 소셜 로그인을 다시 진행해 주세요.");try{sessionStorage.removeItem(ii)}catch{}return}if(Kt.status===400&&sn==="INVALID_PROFILE_IMAGE_OBJECT_KEY"){F("프로필 사진 정보가 올바르지 않아요. 사진을 다시 선택해 주세요.");return}}catch{}F("회원가입에 실패했습니다.");return}try{sessionStorage.removeItem(ii)}catch{}await qt.getState().setSession(),await _r.getState().pullFromServer(),kl(),o("login")}catch{F("잠시 후 다시 시도해 주세요.")}finally{Zr(!1)}};y.useEffect(()=>{if(!ne||i!=="login"||!Se()){ln(null);return}let D=!0;return ct(!0),br(null),me("/me").then(async re=>{if(!re.ok)throw new Error("profile");const he=await re.json();D&&ln(he)}).catch(()=>{D&&br({text:"프로필 정보를 불러오지 못했어요.",error:!0})}).finally(()=>{D&&ct(!1)}),()=>{D=!1}},[ne,i]);const Zx=async D=>{var he;if(!D)return;if(!D.type.startsWith("image/")){br({text:"이미지 파일만 선택할 수 있어요.",error:!0});return}if(D.size>5*1024*1024){br({text:"사진은 5MB 이하로 선택해 주세요.",error:!0});return}const re=new FormData;re.append("file",D),Wt(!0),br(null);try{const _e=await me("/me/profile-image",{method:"POST",body:re});if(!_e.ok){let Mt="사진을 바꾸지 못했어요. 잠시 후 다시 시도해 주세요.";try{const sn=await _e.json();(he=sn.message)!=null&&he.trim()&&(Mt=sn.message)}catch{}throw new Error(Mt)}const Kt=await _e.json();ln(Kt),br({text:"프로필 사진을 바꿨어요."})}catch(_e){br({text:_e instanceof Error?_e.message:"사진을 바꾸지 못했어요. 잠시 후 다시 시도해 주세요.",error:!0})}finally{Wt(!1),Vt.current&&(Vt.current.value="")}},s0=(oe==null?void 0:oe.email)??ae??"",ec=(oe==null?void 0:oe.displayName)||(oe==null?void 0:oe.username)||s0||"명상가",tc=ec.includes("@")?ec.split("@")[0]:ec,qx=(tc.trim()[0]??"명").toUpperCase(),Qx=oe!=null&&oe.createdAt?new Date(oe.createdAt).getFullYear():new Date().getFullYear();return l.jsxs(JP,{$dashboard:!!ne&&i==="login",children:[jl!==null&&l.jsx(eI,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":jl,"aria-label":`회원가입 진행 ${jl}%`,children:l.jsx(tI,{$pct:jl})}),ne&&i==="login"?l.jsxs(iT,{children:[l.jsx(oT,{children:"마이 페이지"}),l.jsxs(lT,{children:[l.jsxs(sT,{children:[l.jsxs(aT,{type:"button","aria-label":"프로필 사진 바꾸기",disabled:Tn,onClick:()=>{var D;return(D=Vt.current)==null?void 0:D.click()},children:[oe!=null&&oe.profileImageUrl?l.jsx(cT,{src:oe.profileImageUrl,alt:`${tc} 프로필`}):l.jsx(uT,{"aria-hidden":"true",children:qx}),l.jsx(dT,{"aria-hidden":"true",children:Tn?"…":"✦"})]}),l.jsx(yT,{ref:Vt,type:"file",accept:"image/*",onChange:D=>{var re;return void Zx((re=D.target.files)==null?void 0:re[0])}}),l.jsxs(pT,{children:[l.jsxs(fT,{children:[l.jsxs(hT,{children:[tc,"님"]}),l.jsx(gT,{children:(oe==null?void 0:oe.role)==="MEMBER"?"MEMBER":(oe==null?void 0:oe.role)??"MEMBER"})]}),l.jsx(mT,{children:s0}),l.jsx(xT,{children:wr?"프로필을 불러오는 중…":"사진을 눌러 프로필을 꾸며보세요"}),l.jsx(LT,{type:"button",onClick:()=>Zp(!0),children:"프로필 수정"})]})]}),l.jsxs(vT,{children:[l.jsxs(Ru,{children:[l.jsx(Mu,{children:jt}),l.jsx(zu,{children:"저장한 장소"})]}),l.jsxs(Ru,{children:[l.jsx(Mu,{children:Qx}),l.jsx(zu,{children:"함께한 해"})]}),l.jsxs(Ru,{children:[l.jsx(Mu,{children:"맑음"}),l.jsx(zu,{children:"오늘의 마음"})]})]})]}),Ya&&l.jsx(ST,{$error:Ya.error,children:Ya.text}),l.jsxs(wT,{type:"button",onClick:()=>e("/meditation/map"),children:[l.jsx(bT,{"aria-hidden":"true",children:"◌"}),l.jsxs(kT,{children:[l.jsx("strong",{children:"오늘, 잠시 쉬어갈 곳을 찾아볼까요?"}),l.jsx("small",{children:"내 주변 명상 공간을 지도에서 둘러보세요"})]}),l.jsx(ri,{"aria-hidden":"true",children:"›"})]}),l.jsxs(Au,{children:[l.jsx(_u,{children:"나의 명상"}),l.jsxs(jT,{children:[l.jsxs(Y2,{type:"button",onClick:()=>e("/favorites"),children:[l.jsx(G2,{"aria-hidden":"true",children:"♡"}),l.jsx(Z2,{children:"저장한 장소"}),l.jsxs(q2,{children:[jt,"곳의 쉼터를 모았어요"]})]}),l.jsxs(Y2,{type:"button",onClick:()=>e("/meditation"),children:[l.jsx(G2,{"aria-hidden":"true",children:"⌁"}),l.jsx(Z2,{children:"명상 둘러보기"}),l.jsx(q2,{children:"새로운 프로그램을 만나보세요"})]})]})]}),l.jsxs(Au,{children:[l.jsx(_u,{children:"전문가 활동"}),l.jsxs(Q2,{children:[l.jsxs(go,{type:"button",onClick:()=>e("/profile/expert"),children:[l.jsx(mo,{"aria-hidden":"true",children:"✦"}),l.jsx(xo,{children:oe!=null&&oe.expertProfileId?"전문가 프로필 수정":"명상 전문가로 전환"}),l.jsx(ri,{"aria-hidden":"true",children:"›"})]}),(oe==null?void 0:oe.expertProfileId)&&l.jsxs(go,{type:"button",onClick:()=>e(`/meditation/expert/${oe.expertProfileId}`),children:[l.jsx(mo,{"aria-hidden":"true",children:"◎"}),l.jsx(xo,{children:"내 전문가 페이지 보기"}),l.jsx(ri,{"aria-hidden":"true",children:"›"})]})]})]}),l.jsxs(Au,{children:[l.jsx(_u,{children:"서비스"}),l.jsxs(Q2,{children:[l.jsxs(go,{type:"button",onClick:()=>e("/notice"),children:[l.jsx(mo,{"aria-hidden":"true",children:"♢"}),l.jsx(xo,{children:"공지사항"}),l.jsx(ri,{"aria-hidden":"true",children:"›"})]}),l.jsxs(go,{type:"button",onClick:()=>e("/inquiry"),children:[l.jsx(mo,{"aria-hidden":"true",children:"?"}),l.jsx(xo,{children:"문의하기"}),l.jsx(ri,{"aria-hidden":"true",children:"›"})]}),l.jsxs(go,{type:"button",onClick:()=>e("/service-info"),children:[l.jsx(mo,{"aria-hidden":"true",children:"i"}),l.jsx(xo,{children:"서비스 안내"}),l.jsx(ri,{"aria-hidden":"true",children:"›"})]})]})]}),l.jsx(CT,{type:"button",onClick:()=>{ye(),ln(null),ke(""),on("")},children:"로그아웃"}),oe&&l.jsx(l.Fragment,{children:l.jsx(KP,{open:_x,profile:oe,onClose:()=>Zp(!1),onSaved:ln})})]}):l.jsxs(nI,{children:[i!=="signup-complete"&&l.jsxs(rI,{children:[l.jsxs(iI,{type:"button",onClick:Kx,"aria-label":"뒤로가기",children:[l.jsx(oI,{src:IP,alt:"","aria-hidden":"true"}),"뒤로가기"]}),i==="signup-interest"&&l.jsx(TI,{type:"button",onClick:()=>o("signup-complete"),children:"건너뛰기"})]}),i==="login"&&l.jsxs(ti,{children:[l.jsxs(fo,{children:[l.jsxs(lI,{children:[l.jsx(sI,{src:js,alt:"명상 지도 로고"}),l.jsx(F2,{children:"명상 지도에 오신 것을 환영합니다!"}),l.jsx(aI,{children:"명상 지도"})]}),l.jsxs(NI,{children:[l.jsx(Bo,{type:"email",placeholder:"이메일","aria-label":"이메일",value:be,onChange:D=>ke(D.target.value),autoComplete:"email"}),l.jsxs(wu,{children:[l.jsx(ku,{type:M?"text":"password",placeholder:"비밀번호","aria-label":"비밀번호",autoComplete:"current-password",value:Lt,onChange:D=>on(D.target.value)}),l.jsx(bu,{type:"button","aria-pressed":M,"aria-label":M?"비밀번호 숨기기":"비밀번호 보기",onClick:()=>T(D=>!D),children:M?"숨기기":"보기"})]})]}),l.jsx(HI,{children:"또는"}),l.jsxs(UI,{children:[qr?l.jsx(Su,{href:`${qr}/oauth2/authorization/kakao`,$bg:"transparent","aria-label":"카카오로 로그인",children:l.jsx(ni,{src:_2,alt:""})}):l.jsx(ju,{type:"button",$bg:"transparent",disabled:!0,"aria-label":"카카오로 로그인 (API 주소 필요)",children:l.jsx(ni,{src:_2,alt:""})}),qr?l.jsx(Su,{href:`${qr}/oauth2/authorization/naver`,$bg:"transparent","aria-label":"네이버로 로그인",children:l.jsx(ni,{src:N2,alt:""})}):l.jsx(ju,{type:"button",$bg:"transparent",disabled:!0,"aria-label":"네이버로 로그인 (API 주소 필요)",children:l.jsx(ni,{src:N2,alt:""})}),qr?l.jsx(Su,{href:`${qr}/oauth2/authorization/google`,$bg:"transparent","aria-label":"구글로 로그인",children:l.jsx(ni,{src:O2,alt:""})}):l.jsx(ju,{type:"button",$bg:"transparent",disabled:!0,"aria-label":"구글로 로그인 (API 주소 필요)",children:l.jsx(ni,{src:O2,alt:""})})]}),l.jsxs(VI,{children:[l.jsx("span",{children:"계정이 없으신가요?"}),l.jsx(WI,{type:"button",onClick:()=>{a(""),u(!1),f({status:"idle",email:null}),kl(),N(null),g(""),w(""),m(""),L(""),$(!1),S(!1),H(!1),A(!1),Q(null),E(300),I("KR-11"),Y(!1),ue(!1),de(!1),we(null),F(null),o("signup-terms")},children:"회원가입"})]}),O&&i==="login"&&l.jsx($r,{style:{marginTop:12},children:O})]}),l.jsx(ho,{children:l.jsx(FI,{type:"button",disabled:He,onClick:()=>void Yx(),children:He?"처리 중…":"로그인하기"})})]}),i==="signup-terms"&&l.jsxs(ti,{children:[l.jsxs(KI,{children:[l.jsx(YI,{children:l.jsxs(ZI,{children:[l.jsx(qI,{src:js,alt:"명상 지도 로고"}),l.jsx(F2,{children:"명상 지도에 오신 것을 환영합니다!"})]})}),l.jsxs(GI,{children:[l.jsx(QI,{children:"서비스 이용을 위해 아래 약관에 동의해 주세요."}),l.jsxs(XI,{children:[l.jsxs(Cu,{children:[l.jsxs($u,{htmlFor:"signup-terms-service",children:[l.jsx(Eu,{id:"signup-terms-service",type:"checkbox",checked:J,onChange:D=>Y(D.target.checked)}),l.jsxs(Pu,{children:[l.jsx(Iu,{children:"[필수]"}),"서비스 이용약관에 동의합니다"]})]}),l.jsx(Tu,{type:"button",onClick:D=>{D.stopPropagation(),we("service")},children:"자세히 ›"})]}),l.jsxs(Cu,{children:[l.jsxs($u,{htmlFor:"signup-terms-privacy",children:[l.jsx(Eu,{id:"signup-terms-privacy",type:"checkbox",checked:te,onChange:D=>ue(D.target.checked)}),l.jsxs(Pu,{children:[l.jsx(Iu,{children:"[필수]"}),"개인정보 수집 및 이용에 동의합니다"]})]}),l.jsx(Tu,{type:"button",onClick:D=>{D.stopPropagation(),we("privacy")},children:"자세히 ›"})]}),l.jsxs(Cu,{children:[l.jsxs($u,{htmlFor:"signup-terms-marketing",children:[l.jsx(Eu,{id:"signup-terms-marketing",type:"checkbox",checked:Le,onChange:D=>de(D.target.checked)}),l.jsxs(Pu,{children:[l.jsx(Iu,{$optional:!0,children:"[선택]"}),"마케팅 정보 수신에 동의합니다"]})]}),l.jsx(Tu,{type:"button",onClick:D=>{D.stopPropagation(),we("marketing")},children:"자세히 ›"})]})]})]})]}),l.jsx(ho,{children:l.jsxs(JI,{children:[l.jsx(eT,{type:"button",$disabled:!Ja,disabled:!Ja,"aria-label":"필수 약관에 동의하고 다음 단계로",onClick:()=>{Ja&&o("signup-account")},children:"동의"}),l.jsx(tT,{type:"button",onClick:()=>{Y(!0),ue(!0),de(!0),o("signup-account")},children:"전체 동의"})]})})]}),i==="signup-account"&&l.jsxs(ti,{children:[l.jsxs(fo,{children:[l.jsx(Lu,{children:"회원가입"}),l.jsxs(U2,{children:[l.jsx(Bo,{type:"email",placeholder:"이메일",value:s,$error:Dx,onChange:D=>a(D.target.value),autoComplete:"email",disabled:c}),Qr&&l.jsx($r,{children:"이메일 형식이 아닙니다"}),!Qr&&to&&l.jsx($r,{children:"이미 가입된 이메일이에요"}),!Qr&&Jp&&!to&&(dt==null?void 0:dt.status)==="error"&&l.jsx($r,{children:"가능 여부를 확인하지 못했어요. 잠시 후 다시 확인해 보세요."}),!Qr&&!to&&Jp&&(dt==null?void 0:dt.status)==="loading"&&!c&&l.jsx(pI,{children:"사용 가능 여부 확인 중이에요…"}),!Qr&&!to&&!c&&(!Se()&&qa||(dt==null?void 0:dt.status)==="available")&&l.jsx(dI,{children:"사용가능한 이메일입니다"}),c&&l.jsxs(xu,{id:"signup-phone-anchor",children:[l.jsx(Bo,{type:"tel",inputMode:"numeric",placeholder:"휴대폰 번호 (- 없이)",value:h,$error:n0,onChange:D=>g(D.target.value.replace(/\D/g,"")),autoComplete:"tel",disabled:W}),n0&&l.jsx($r,{children:"올바른 휴대폰 번호를 입력해 주세요"})]})]}),B&&l.jsx(xu,{id:"signup-code-anchor",children:l.jsxs(QP,{children:[l.jsxs(yI,{children:[l.jsxs(OI,{children:[l.jsx(DI,{type:"text",inputMode:"numeric",placeholder:"인증번호",value:b,onChange:D=>w(D.target.value.replace(/\D/g,"").slice(0,6)),autoComplete:"one-time-code","aria-describedby":W?void 0:"signup-code-hint",disabled:W}),l.jsx(BI,{title:`남은 시간 ${l0}`,children:l0})]}),l.jsx(vI,{type:"button",$highlight:Vx,disabled:W,onClick:()=>void Hx(),children:"다시받기"})]}),!W&&l.jsx(XP,{id:"signup-code-hint",children:"휴대폰으로 발송된 6자리 인증번호를 입력해 주세요"})]})}),B&&W&&l.jsx(xu,{id:"signup-password-anchor",children:l.jsxs(U2,{children:[l.jsxs(hI,{children:[l.jsx(gI,{type:"button","aria-label":Ga?"프로필 사진 바꾸기":"프로필 사진 선택",onClick:()=>{var D;return(D=qp.current)==null?void 0:D.click()},children:Ga?l.jsx(xI,{src:Ga,alt:""}):l.jsx(mI,{"aria-hidden":!0,children:"+"})}),l.jsx(LI,{ref:qp,type:"file",accept:"image/*",onChange:D=>{var he;const re=(he=D.target.files)==null?void 0:he[0];D.target.value="",re&&Ox(re)}})]}),l.jsxs(V2,{$index:0,children:[l.jsxs(wu,{children:[l.jsx(ku,{type:v?"text":"password",placeholder:"비밀번호",value:C,$error:!!Xa,onChange:D=>m(D.target.value),autoComplete:"new-password"}),l.jsx(bu,{type:"button","aria-pressed":v,"aria-label":v?"비밀번호 숨기기":"비밀번호 보기",onClick:()=>$(D=>!D),children:v?"숨기기":"보기"})]}),Xa&&l.jsx(W2,{children:Xa})]}),l.jsxs(V2,{$index:1,children:[l.jsxs(wu,{children:[l.jsx(ku,{type:k?"text":"password",placeholder:"비밀번호 확인",value:x,$error:i0,onChange:D=>L(D.target.value),autoComplete:"new-password"}),l.jsx(bu,{type:"button","aria-pressed":k,"aria-label":k?"비밀번호 확인 숨기기":"비밀번호 확인 보기",onClick:()=>S(D=>!D),children:k?"숨기기":"보기"})]}),i0&&l.jsx(W2,{children:"비밀번호가 일치하지 않습니다"})]}),l.jsx(fI,{children:"8자 이상, 영문+숫자 포함"})]})})]}),l.jsxs(ho,{children:[!c&&l.jsx(li,{type:"button",$disabled:!e0,disabled:!e0,onClick:()=>u(!0),children:"다음"}),c&&!B&&l.jsx(li,{type:"button",$disabled:!t0,disabled:!t0,onClick:()=>void Fx(),children:"인증번호 받기"}),B&&!W&&l.jsx(li,{type:"button",$disabled:!Qa,disabled:!Qa,onClick:()=>void Ux(),children:"인증"}),B&&W&&l.jsx(li,{type:"button",$disabled:!o0,disabled:!o0,onClick:()=>o("signup-region"),children:"다음"})]})]}),q&&l.jsx(yu,{role:"status","aria-live":"polite",children:l.jsx(vu,{children:"인증번호를 보냈어요!"})}),j==="success"&&l.jsx(yu,{role:"status","aria-live":"polite",children:l.jsx(vu,{children:"인증되었습니다"})}),j==="error"&&l.jsx(yu,{role:"alert","aria-live":"assertive",children:l.jsx(vu,{$variant:"error",children:"인증번호가 틀렸습니다"})}),i==="signup-region"&&l.jsx(ti,{children:l.jsxs(fo,{children:[l.jsx(Lu,{children:"활동 지역을 설정해주세요"}),l.jsx(H2,{children:"주로 명상하는 지역을 선택해주세요"}),l.jsxs(wI,{children:[l.jsx(bI,{type:"button",disabled:Ee,"aria-busy":Ee,onClick:Wx,children:Ee?"위치 확인 중…":"현재 위치로 지역 맞추기"}),Ye&&l.jsx(kI,{$error:Ut,children:Ye})]}),l.jsx(jI,{children:l.jsx(Ll,{maxMapHeight:"clamp(220px, calc(100dvh - 260px), 480px)",activeRegionId:R,onSelectRegion:D=>{I(D),_(!0)}})})]})}),i==="signup-interest"&&l.jsxs(ti,{children:[l.jsxs(fo,{children:[l.jsx(RI,{children:"1/10"}),l.jsx(Lu,{children:"관심사를 선택해주세요"}),l.jsx(H2,{children:"좌우로 넘기며 관심있는 주제를 선택하세요"}),O&&l.jsx($r,{children:O}),l.jsx(EI,{children:"숲"}),l.jsx(PI,{type:"button","aria-label":"관심사 좋아요",children:"♡"})]}),l.jsx(ho,{children:l.jsx(II,{type:"button",disabled:He,onClick:()=>void Gx(),children:He?"가입 중…":"다음"})})]}),i==="signup-complete"&&l.jsxs(ti,{children:[l.jsxs(fo,{children:[l.jsx(MI,{children:l.jsx(zI,{src:js,alt:"명상 지도 로고"})}),l.jsx(AI,{children:"가입 완료!"}),l.jsx(_I,{children:"평온한 명상 여행을 시작하세요"})]}),l.jsx(ho,{children:l.jsx(li,{type:"button",onClick:()=>{o("login")},children:"시작하기"})})]}),i==="signup-region"&&P&&l.jsx(Ex,{role:"dialog","aria-modal":"true","aria-label":"지역 확인",children:l.jsxs(Px,{children:[l.jsxs(K2,{children:[Nx," 지역이 맞습니까?"]}),l.jsxs(CI,{children:[l.jsx(x1,{type:"button",onClick:()=>_(!1),children:"아니오"}),l.jsx(x1,{type:"button",$primary:!0,onClick:()=>{_(!1),o("signup-interest")},children:"네"})]})]})}),fe!==null&&l.jsx(SI,{role:"dialog","aria-modal":"true","aria-labelledby":"terms-detail-title",onClick:()=>we(null),children:l.jsxs(nT,{onClick:D=>D.stopPropagation(),children:[l.jsx(K2,{id:"terms-detail-title",children:X2[fe].title}),l.jsx(rT,{children:X2[fe].body}),l.jsx($I,{onClick:()=>we(null),children:"확인"})]})})]})]})},Ix={paragraph:"",h1:"# ",h2:"## ",h3:"### ",bullet:"- ",quote:"> "};let L1=1;function ET(e){const t=[["h3",/^###\s?/],["h2",/^##\s?/],["h1",/^#\s?/],["bullet",/^-\s?/],["quote",/^>\s?/]];for(const[n,r]of t)if(r.test(e))return{id:L1++,type:n,text:e.replace(r,"")};return{id:L1++,type:"paragraph",text:e}}function PT(e){const t=e.split(`
`);return(t.length?t:[""]).map(ET)}function IT(e){return e.map(t=>`${Ix[t.type]}${t.text}`).join(`
`)}const TT=d.div`
  min-height: 320px;
  padding: 16px 18px;
  border: 1px solid ${({theme:e})=>e.colors.primary200};
  border-radius: 14px;
  background: ${({theme:e})=>e.colors.white};
  cursor: text;
`,RT=d.div`
  position: relative;
  min-height: 1.8em;
  margin: ${({$type:e})=>e==="h1"?"12px 0 6px":e==="h2"?"10px 0 5px":"2px 0"};
  padding-left: ${({$type:e})=>e==="bullet"?"18px":e==="quote"?"14px":"0"};
  border-left: ${({$type:e})=>e==="quote"?"3px solid rgba(75, 0, 130, 0.25)":"0"};

  ${({$type:e})=>e==="bullet"&&Me`
      &::before {
        content: "•";
        position: absolute;
        left: 3px;
        top: 0.25em;
        color: ${({theme:t})=>t.colors.primary600};
      }
    `}
`,MT=d.textarea`
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

  ${({$type:e})=>e==="h1"?Me`font-size: 1.45rem; font-weight: 800;`:e==="h2"?Me`font-size: 1.2rem; font-weight: 750;`:e==="h3"?Me`font-size: 1.05rem; font-weight: 700;`:K.body2}

  &::placeholder {
    color: ${({theme:e})=>e.colors.mutedMauve};
  }
`,zT=d.div`
  min-height: 1.65em;
  ${K.body2};
  line-height: 1.65;
`,AT=d.div`
  margin-top: 10px;
  color: ${({theme:e})=>e.colors.text700};
  ${K.caption};
`;function _T({value:e,onChange:t,placeholder:n="내용을 입력하세요. `/` 대신 #, -, > 뒤에 공백을 입력하면 블록이 바뀝니다."}){const[r,i]=y.useState(()=>PT(e)),[o,s]=y.useState(()=>{var p;return((p=r[0])==null?void 0:p.id)??null}),a=y.useRef(null),c=y.useMemo(()=>IT(r),[r]);y.useEffect(()=>{c!==e&&t(c)},[c,t,e]),y.useEffect(()=>{if(a.current==null)return;const p=a.current;a.current=null,requestAnimationFrame(()=>{const f=document.querySelector(`[data-md-block="${p}"]`);f==null||f.focus()})},[r]);const u=(p,f)=>{i(h=>h.map(g=>{if(g.id!==p)return g;if(g.type==="paragraph"){const w=[["### ","h3"],["## ","h2"],["# ","h1"],["- ","bullet"],["> ","quote"]].find(([C])=>f===C);if(w)return{...g,type:w[1],text:""}}return{...g,text:f}}))};return l.jsxs(l.Fragment,{children:[l.jsx(TT,{onClick:p=>{p.target===p.currentTarget&&r.length&&s(r[r.length-1].id)},children:r.map((p,f)=>{const h=o===p.id;return l.jsx(RT,{$type:p.type,children:h?l.jsx(MT,{"data-md-block":p.id,autoFocus:!0,rows:1,$type:p.type,value:p.text,placeholder:f===0?n:"",onFocus:g=>{s(p.id),g.currentTarget.style.height="auto",g.currentTarget.style.height=`${g.currentTarget.scrollHeight}px`},onChange:g=>{u(p.id,g.target.value),g.currentTarget.style.height="auto",g.currentTarget.style.height=`${g.currentTarget.scrollHeight}px`},onKeyDown:g=>{if(g.key==="Enter"&&!g.shiftKey){g.preventDefault();const b=L1++;i(w=>{const C=w.findIndex(x=>x.id===p.id),m=[...w];return m.splice(C+1,0,{id:b,type:"paragraph",text:""}),m}),s(b),a.current=b}else if(g.key==="Backspace"&&p.text===""&&p.type!=="paragraph")g.preventDefault(),i(b=>b.map(w=>w.id===p.id?{...w,type:"paragraph"}:w));else if(g.key==="Backspace"&&p.text===""&&r.length>1){g.preventDefault();const b=r[f-1];i(w=>w.filter(C=>C.id!==p.id)),b&&(s(b.id),a.current=b.id)}},onBlur:()=>{window.setTimeout(()=>{const g=document.activeElement;g instanceof HTMLTextAreaElement&&g.dataset.mdBlock||s(null)},0)}}):l.jsx(zT,{onClick:()=>s(p.id),children:l.jsx(wl,{markdown:`${Ix[p.type]}${p.text}`,fallback:" "})})},p.id)})}),l.jsx(AT,{children:"`# ` 제목 · `## ` 작은 제목 · `- ` 목록 · `> ` 인용 · Shift+Enter 줄바꿈"})]})}const NT=["마음챙김","아트명상","숲 명상","호흡명상","걷기명상","소리명상"],n4=d.div`
  max-width: 980px;
  margin: 0 auto;
  padding: calc(18px + env(safe-area-inset-top, 0px)) 0 48px;
  color: ${({theme:e})=>e.colors.text900};
`,OT=d.header`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
`,DT=d.button`
  width: 38px;
  height: 38px;
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.text900};
  ${K.body1};
  cursor: pointer;
`,BT=d.h1`
  margin: 0;
  ${K.title};
`,FT=d.p`
  margin: 0 0 24px 50px;
  color: ${({theme:e})=>e.colors.text700};
  ${K.body2};

  @media (max-width: 640px) {
    margin-left: 0;
  }
`,Ql=d.section`
  margin-top: 16px;
  padding: 22px;
  border: 1px solid rgba(75, 0, 130, 0.09);
  border-radius: 22px;
  background: ${({theme:e})=>e.colors.white};
  box-shadow: 0 8px 24px rgba(75, 0, 130, 0.05);

  @media (max-width: 640px) {
    padding: 18px 15px;
  }
`,Xl=d.h2`
  margin: 0 0 6px;
  ${K.body1};
  font-weight: 700;
`,Jl=d.p`
  margin: 0 0 18px;
  color: ${({theme:e})=>e.colors.text700};
  ${K.caption};
`,vn=d.div`
  margin-top: 18px;
`,wn=d.label`
  display: block;
  margin-bottom: 8px;
  ${K.body2};
  font-weight: 700;
`,HT=d.p`
  margin: -4px 0 8px;
  color: ${({theme:e})=>e.colors.text700};
  ${K.caption};
`,Lo=d.input`
  width: 100%;
  box-sizing: border-box;
  padding: 13px 14px;
  border: 1px solid ${({theme:e})=>e.colors.primary200};
  border-radius: 12px;
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.text900};
  ${K.body2};
`,Ou=d.textarea`
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
`,r4=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,i4=d.button`
  padding: 8px 11px;
  border: 1px solid
    ${({theme:e,$selected:t})=>t?e.colors.primary600:e.colors.primary200};
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e,$selected:t})=>t?e.colors.primary600:e.colors.white};
  color: ${({theme:e,$selected:t})=>t?e.colors.white:e.colors.text700};
  ${K.caption};
  cursor: pointer;
`,UT=d.div`
  display: grid;
  grid-template-columns: minmax(260px, 0.9fr) minmax(240px, 1.1fr);
  gap: 20px;
  align-items: center;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`,VT=d.div`
  padding: 12px;
  border-radius: 18px;
  background: ${({theme:e})=>e.colors.primary50};
`,WT=d.div`
  color: ${({theme:e})=>e.colors.text700};
  ${K.body2};
`,KT=d.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`,o4=d.button`
  padding: 14px;
  border: 1px solid
    ${({theme:e,$selected:t})=>t?e.colors.primary600:e.colors.primary200};
  border-radius: 13px;
  background: ${({theme:e,$selected:t})=>t?e.colors.primary50:e.colors.white};
  color: ${({theme:e})=>e.colors.text900};
  ${K.body2};
  cursor: pointer;
`,YT=d.div`
  position: sticky;
  bottom: calc(56px + env(safe-area-inset-bottom, 0px));
  z-index: 5;
  margin-top: 20px;
  padding: 12px;
  border-radius: 18px;
  background: rgba(255, 250, 248, 0.94);
  backdrop-filter: blur(12px);
`,GT=d.button`
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
`,ZT=d.p`
  margin: 10px 0 0;
  color: ${({theme:e,$error:t})=>t?"#c5221f":e.colors.primary600};
  text-align: center;
  ${K.caption};
`,qT=d.p`
  padding: 80px 20px;
  text-align: center;
  color: ${({theme:e})=>e.colors.text700};
  ${K.body2};
`,QT=e=>({name:e.displayName||e.username.split("@")[0]||"",intro:"",degrees:[],certificates:[],careers:[],classTypes:[],regionIds:e.regionIds??[],hasCenter:!1,centerName:"",centerAddress:"",businessRegistrationNumber:"",businessOpeningDate:""}),Du=e=>e.split(`
`).map(t=>t.trim()).filter(Boolean);function XT(){const e=mt(),t=qt(w=>w.accessToken),[n,r]=y.useState(null),[i,o]=y.useState(null),[s,a]=y.useState(!0),[c,u]=y.useState(!1),[p,f]=y.useState(null);y.useEffect(()=>{if(!t){e("/profile",{replace:!0});return}Promise.all([RP(),MP()]).then(([w,C])=>{r(w),o({...QT(w),...C??{}})}).catch(w=>f({text:w instanceof Error?w.message:"정보를 불러오지 못했어요.",error:!0})).finally(()=>a(!1))},[t,e]);const h=y.useMemo(()=>(i==null?void 0:i.regionIds.map(bl))??[],[i==null?void 0:i.regionIds]);if(s||!i||!n)return l.jsx(n4,{children:l.jsx(qT,{children:(p==null?void 0:p.text)??"전문가 정보를 불러오는 중…"})});const g=(w,C)=>{const m=i[w];o({...i,[w]:m.includes(C)?m.filter(x=>x!==C):[...m,C]})},b=i.name.trim().length>0&&i.intro.trim().length>0&&i.regionIds.length>0;return l.jsxs(n4,{children:[l.jsxs(OT,{children:[l.jsx(DT,{type:"button",onClick:()=>e("/profile"),"aria-label":"마이페이지로 돌아가기",children:"‹"}),l.jsx(BT,{children:n.expertProfileId?"전문가 프로필 수정":"명상 전문가로 전환"})]}),l.jsx(FT,{children:"작성한 내용은 명상 전문가 목록과 상세 페이지에 공개됩니다."}),l.jsxs(Ql,{children:[l.jsx(Xl,{children:"기본 정보"}),l.jsx(Jl,{children:"전문가 페이지에 표시될 활동명과 소개를 작성해 주세요."}),l.jsxs(vn,{children:[l.jsx(wn,{htmlFor:"expert-name",children:"활동명"}),l.jsx(Lo,{id:"expert-name",value:i.name,maxLength:80,onChange:w=>o({...i,name:w.target.value})})]}),l.jsxs(vn,{children:[l.jsx(wn,{htmlFor:"expert-intro",children:"자기소개"}),l.jsx(HT,{children:"노션처럼 문법을 입력하면 해당 줄의 모양이 바로 바뀝니다."}),l.jsx(_T,{value:i.intro,onChange:w=>o(C=>C&&{...C,intro:w}),placeholder:"명상을 시작하게 된 계기와 수업 철학을 소개해 주세요."})]})]}),l.jsxs(Ql,{children:[l.jsx(Xl,{children:"이력과 전문 분야"}),l.jsx(Jl,{children:"각 항목은 한 줄에 하나씩 입력해 주세요."}),l.jsxs(vn,{children:[l.jsx(wn,{htmlFor:"expert-degrees",children:"학위"}),l.jsx(Ou,{id:"expert-degrees",value:i.degrees.join(`
`),onChange:w=>o({...i,degrees:Du(w.target.value)}),placeholder:`○○대학교 상담심리학 석사
△△대학교 명상학 전공`})]}),l.jsxs(vn,{children:[l.jsx(wn,{htmlFor:"expert-certificates",children:"자격증·이수 교육과정"}),l.jsx(Ou,{id:"expert-certificates",value:i.certificates.join(`
`),onChange:w=>o({...i,certificates:Du(w.target.value)})})]}),l.jsxs(vn,{children:[l.jsx(wn,{htmlFor:"expert-careers",children:"경력"}),l.jsx(Ou,{id:"expert-careers",value:i.careers.join(`
`),onChange:w=>o({...i,careers:Du(w.target.value)})})]}),l.jsxs(vn,{children:[l.jsx(wn,{children:"클래스 종류"}),l.jsx(r4,{children:NT.map(w=>l.jsx(i4,{type:"button",$selected:i.classTypes.includes(w),onClick:()=>g("classTypes",w),children:w},w))})]})]}),l.jsxs(Ql,{children:[l.jsx(Xl,{children:"주 활동 지역"}),l.jsx(Jl,{children:"지도에서 활동 가능한 지역을 여러 곳 선택할 수 있습니다."}),l.jsxs(UT,{children:[l.jsx(VT,{children:l.jsx(Ll,{activeRegionIds:i.regionIds,maxMapHeight:"460px",onSelectRegion:w=>g("regionIds",w)})}),l.jsxs(WT,{children:[l.jsxs("strong",{children:[h.length,"개 지역 선택됨"]}),l.jsx("p",{children:"선택된 지역을 다시 누르면 해제됩니다."}),l.jsx(r4,{children:Ki.filter(w=>i.regionIds.includes(w.id)).map(w=>l.jsxs(i4,{type:"button",$selected:!0,onClick:()=>g("regionIds",w.id),children:[w.name," ×"]},w.id))})]})]})]}),l.jsxs(Ql,{children:[l.jsx(Xl,{children:"센터 정보"}),l.jsx(Jl,{children:"본인 소유 센터가 있다면 인증 정보를 함께 입력해 주세요."}),l.jsxs(KT,{children:[l.jsx(o4,{type:"button",$selected:!i.hasCenter,onClick:()=>o({...i,hasCenter:!1}),children:"센터 없음"}),l.jsx(o4,{type:"button",$selected:i.hasCenter,onClick:()=>o({...i,hasCenter:!0}),children:"센터 있음"})]}),i.hasCenter&&l.jsxs(l.Fragment,{children:[l.jsxs(vn,{children:[l.jsx(wn,{htmlFor:"center-name",children:"센터명"}),l.jsx(Lo,{id:"center-name",value:i.centerName,onChange:w=>o({...i,centerName:w.target.value})})]}),l.jsxs(vn,{children:[l.jsx(wn,{htmlFor:"center-address",children:"센터 위치"}),l.jsx(Lo,{id:"center-address",value:i.centerAddress,onChange:w=>o({...i,centerAddress:w.target.value})})]}),l.jsxs(vn,{children:[l.jsx(wn,{htmlFor:"business-number",children:"사업자등록번호"}),l.jsx(Lo,{id:"business-number",inputMode:"numeric",value:i.businessRegistrationNumber,onChange:w=>o({...i,businessRegistrationNumber:w.target.value.replace(/[^\d-]/g,"")})})]}),l.jsxs(vn,{children:[l.jsx(wn,{htmlFor:"opening-date",children:"개업일자"}),l.jsx(Lo,{id:"opening-date",type:"date",value:i.businessOpeningDate,onChange:w=>o({...i,businessOpeningDate:w.target.value})})]})]})]}),l.jsxs(YT,{children:[l.jsx(GT,{type:"button",disabled:c||!b,onClick:()=>{u(!0),f(null),zP(i).then(w=>{r(w),f({text:"전문가 프로필을 저장했어요."}),window.setTimeout(()=>e("/profile"),700)}).catch(w=>f({text:w instanceof Error?w.message:"저장하지 못했어요.",error:!0})).finally(()=>u(!1))},children:c?"저장 중…":n.expertProfileId?"전문가 정보 저장":"명상 전문가로 전환"}),p&&l.jsx(ZT,{$error:p.error,children:p.text})]})]})}const JT=d.div`
  min-height: 40vh;
  display: grid;
  place-items: center;
  padding: 2rem;
  ${K.body1};
  color: ${({theme:e})=>e.colors.text700};
`,eR=()=>{const[e]=P3(),t=mt();return y.useEffect(()=>{if(e.get("error")){t("/profile",{replace:!0});return}const r=e.get("oauthSignupTicket");if(r){const i=e.get("email")??"",o=new URLSearchParams({signupOAuth:"1",oauthSignupTicket:r,email:i}),s=e.get("picture");s&&o.set("picture",s),t(`/profile?${o.toString()}`,{replace:!0});return}qt.getState().bootstrapAuth().then(()=>_r.getState().pullFromServer()).finally(()=>t("/profile",{replace:!0}))},[t,e]),l.jsx(JT,{children:"로그인 처리 중…"})},tR=d.div`
  color: ${({theme:e})=>e.colors.text900};
`,l4=d.section`
  padding: 48px 20px;

  @media (max-width: 960px) {
    padding: 36px 14px;
  }
`,s4=d.div`
  max-width: 1100px;
  margin: 0 auto;
`,nR=d.section`
  padding: 64px 20px calc(56px + env(safe-area-inset-bottom, 0px));
  background: linear-gradient(180deg, #ffffff 0%, ${({theme:e})=>e.colors.primary50} 100%);

  @media (max-width: 960px) {
    padding: 48px 14px calc(40px + env(safe-area-inset-bottom, 0px));
  }
`,rR=d.div`
  max-width: 1100px;
  margin: 0 auto;
  background: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 36px;
  box-shadow: ${({theme:e})=>e.shadow.soft};
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  display: grid;
  gap: 16px;
`,iR=d.h1`
  font-size: 3rem;
  line-height: 1.3;
`,oR=d.p`
  font-size: 1.3rem;
  color: ${({theme:e})=>e.colors.text700};
`,lR=d(Xi)`
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
`,sR=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`,Bu=d.div`
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 18px;
  box-shadow: ${({theme:e})=>e.shadow.soft};
`,Fu=d.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text700};
`,Hu=d.p`
  font-size: 2.2rem;
  font-weight: 700;
  margin-top: 8px;
`,aR=d.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`,es=d.div`
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 24px;
  box-shadow: ${({theme:e})=>e.shadow.soft};
  display: grid;
  gap: 10px;
`,ts=d.div`
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
`,cR=d.section`
  padding: 48px 20px;
  background: ${({theme:e})=>e.colors.primary600};
  color: #fff;
`,uR=d.div`
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
`,dR=d.button`
  border: none;
  background: #fff;
  color: ${({theme:e})=>e.colors.primary700};
  padding: 10px 18px;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  font-size: 1.1rem;
`,pR=()=>l.jsxs(tR,{children:[l.jsx(nR,{children:l.jsxs(rR,{children:[l.jsx(iR,{children:"누구나 원하는 곳에서, 더 깊은 힐링 명상"}),l.jsx(oR,{children:"전국 힐링명상지도는 지역별 명상센터를 쉽고 빠르게 찾을 수 있는 플랫폼입니다."}),l.jsx(lR,{to:"/",children:"명상센터 찾아보기"})]})}),l.jsx(l4,{children:l.jsx(s4,{children:l.jsxs(sR,{children:[l.jsxs(Bu,{children:[l.jsx(Fu,{children:"누적 명상센터"}),l.jsx(Hu,{children:"1,200+"})]}),l.jsxs(Bu,{children:[l.jsx(Fu,{children:"지역 커버리지"}),l.jsx(Hu,{children:"전국 17개"})]}),l.jsxs(Bu,{children:[l.jsx(Fu,{children:"누적 검색 수"}),l.jsx(Hu,{children:"210만+"})]})]})})}),l.jsx(l4,{children:l.jsx(s4,{children:l.jsxs(aR,{children:[l.jsxs(es,{children:[l.jsx(ts,{children:l.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[l.jsx("path",{d:"M3 11l9-7 9 7"}),l.jsx("path",{d:"M5 10v10h14V10"})]})}),l.jsx("h3",{children:"지도 기반 탐색"}),l.jsx("p",{children:"대한민국 지도로 지역을 선택하고, 명상센터를 한눈에 찾아보세요."})]}),l.jsxs(es,{children:[l.jsx(ts,{children:l.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:l.jsx("path",{d:"M4 6h16M4 12h10M4 18h6"})})}),l.jsx("h3",{children:"맞춤형 필터"}),l.jsx("p",{children:"해시태그와 정렬 기준으로 내게 맞는 명상센터를 빠르게 추천해요."})]}),l.jsxs(es,{children:[l.jsx(ts,{children:l.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[l.jsx("circle",{cx:"12",cy:"8",r:"3"}),l.jsx("path",{d:"M6 20c1.5-3 4-5 6-5s4.5 2 6 5"})]})}),l.jsx("h3",{children:"상세 정보 제공"}),l.jsx("p",{children:"주소, 프로그램, 운영 단체 정보까지 한 페이지에서 확인하세요."})]}),l.jsxs(es,{children:[l.jsx(ts,{children:l.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[l.jsx("circle",{cx:"10",cy:"10",r:"6"}),l.jsx("line",{x1:"14.5",y1:"14.5",x2:"21",y2:"21"})]})}),l.jsx("h3",{children:"검색 경험"}),l.jsx("p",{children:"검색어 입력만으로 관련 명상센터를 부드럽게 이어 보여드립니다."})]})]})})}),l.jsx(cR,{children:l.jsxs(uR,{children:[l.jsxs("div",{children:[l.jsx("h2",{children:"명상센터 운영자라면 함께해요"}),l.jsx("p",{children:"전국 힐링명상지도와 함께 더 많은 사람에게 명상 경험을 전달하세요."})]}),l.jsx(dR,{type:"button",children:"등록 문의하기"})]})})]}),fR=d.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
  background: linear-gradient(180deg, ${({theme:e})=>e.colors.primary50} 0%, ${({theme:e})=>e.colors.warmCream} 100%);
`,hR=d.div`
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
`,gR=d.p`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.primary700};
  margin: 0 0 8px;
`,mR=d.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.primary400};
  margin: 0 0 32px;
  text-align: center;
  line-height: 1.5;
`,xR=d.button`
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
`,LR=()=>{const e=mt();return l.jsxs(fR,{children:[l.jsx(hR,{children:"404"}),l.jsx(gR,{children:"Oops!"}),l.jsx(mR,{children:"페이지를 찾을 수 없습니다."}),l.jsx(xR,{type:"button",onClick:()=>e("/"),children:"홈으로"})]})};async function at(e){if(!e.ok){const t=await e.text();throw new Error(t||`HTTP ${e.status}`)}if(e.status!==204)return e.json()}async function yR(e,t){const n=await me("/admin/auth/login",{method:"POST",body:JSON.stringify({loginId:e,password:t})});if(!n.ok){const r=await n.text();throw new Error(r||`HTTP ${n.status}`)}}async function vR(){return at(await me("/admin/metrics/traffic"))}async function wR(e,t){const n=new URLSearchParams({granularity:e,limit:String(t)});return at(await me(`/admin/metrics/http-traffic?${n.toString()}`))}async function bR(e,t){const n=new URLSearchParams({granularity:e,limit:String(t)});return at(await me(`/admin/metrics/member-traffic?${n.toString()}`))}async function kR(e,t,n=12){const r=new URLSearchParams({granularity:e,limit:String(t),top:String(n)});return at(await me(`/admin/metrics/api-traffic?${r.toString()}`))}async function jR(){return at(await me("/admin/places"))}function SR(e){const{id:t,...n}=e;return n}async function CR(e,t,n){const r={regionId:t,data:SR(n)};return at(e?await me(`/admin/places/${encodeURIComponent(e)}`,{method:"PUT",body:JSON.stringify(r)}):await me("/admin/places",{method:"POST",body:JSON.stringify(r)}))}async function $R(e){await at(await me(`/admin/places/${encodeURIComponent(e)}`,{method:"DELETE"}))}async function ER(){return at(await me("/admin/experts"))}async function PR(e,t){const n={data:IR(t)};return at(e?await me(`/admin/experts/${encodeURIComponent(e)}`,{method:"PUT",body:JSON.stringify(n)}):await me("/admin/experts",{method:"POST",body:JSON.stringify(n)}))}function IR(e){const{id:t,...n}=e;return n}async function TR(e){await at(await me(`/admin/experts/${encodeURIComponent(e)}`,{method:"DELETE"}))}async function RR(){return at(await me("/admin/notices"))}async function MR(e,t){const n={payload:zR(t)};return at(e?await me(`/admin/notices/${encodeURIComponent(e)}`,{method:"PUT",body:JSON.stringify(n)}):await me("/admin/notices",{method:"POST",body:JSON.stringify(n)}))}function zR(e){const{id:t,...n}=e;return n}async function AR(e){await at(await me(`/admin/notices/${encodeURIComponent(e)}`,{method:"DELETE"}))}async function _R(e){const t=new FormData;t.append("file",e);const n=await me("/storage/objects",{method:"POST",body:t});return(await at(n)).url}function NR(e){return{id:"",regionId:e,name:"",shortDescription:"",description:"",address:"",thumbnailUrl:"",photos:[],hashtags:[],themes:[],hasTempleStay:!1,duration:"",admissionFee:"",venueKind:"명상지",organization:{name:""},externalLink:"",detailSections:[],facilities:[],programs:[],instructors:[]}}function OR(e){const t=e.reduce((n,r)=>{const i=Number.parseInt(r.id,10);return Number.isFinite(i)?Math.max(n,i):n},0);return String(t+1)}function DR(){return{id:"",name:"",avatarUrl:"",specialties:[],regionIds:[],intro:"",degrees:[],certificates:[],careers:[],classTypes:[],hasCenter:!1,programs:[],reviews:[]}}const BR=new Set(["ADMIN","DEV","EMPLOYEE"]),Ii=gl(e=>({username:null,role:null,ready:!1,authenticated:!1,bootstrap:async()=>{const t=Se();if(!t){e({username:null,role:null,ready:!0,authenticated:!1});return}try{const n=await fetch(`${t}/admin/auth/me`,{credentials:"include"});if(n.ok){const r=await n.json(),i=r.role??"";if(r.username&&BR.has(i)){e({username:r.username,role:i,ready:!0,authenticated:!0});return}}}catch{}e({username:null,role:null,ready:!0,authenticated:!1})},logout:async()=>{const t=Se();if(t)try{await fetch(`${t}/admin/auth/logout`,{method:"POST",credentials:"include"})}catch{}e({username:null,role:null,ready:!0,authenticated:!1})}})),wt={colors:{primary50:"#f3eef8",primary100:"#e6dcf0",primary200:"#c9b8e0",primary300:"#a88bca",primary400:"#7a5aab",primary500:"#5c3d8f",primary600:"#4B0082",primary700:"#3d0069",primary800:"#2f0051",primary900:"#22003a",white:"#FFFFFF",warmCream:"#FFFAF8",buddingPeach:"#F5D8D0",charcoal:"#3D3D3D",warmGray:"#6B6B6B",text900:"#3D3D3D",text700:"#6B6B6B",border200:"#9B8A99",mutedMauve:"#9B8A99",dustyGold:"#C9A962",dustyRose:"#C9A090",bg50:"#FFFAF8",bg100:"#F5D8D0"},shadow:{soft:"0 12px 30px rgba(75, 0, 130, 0.1)"},radii:{pill:"999px",md:"12px",lg:"16px"}},FR=d.div`
  display: flex;
  min-height: 100vh;
  background: #0f0f12;
  color: #f4f4f5;
`,HR=d.aside`
  width: ${({$open:e})=>e?"240px":"0"};
  overflow: hidden;
  transition: width 0.2s ease;
  background: #18181b;
  border-right: 1px solid #27272a;
  flex-shrink: 0;
`,UR=d.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`,VR=d.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  border-bottom: 1px solid #27272a;
  background: #111114;
`,WR=d.main`
  flex: 1;
  padding: 20px;
  overflow: auto;
`,KR=d.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 10px 16px;
  border: none;
  background: ${({$active:e})=>e?"rgba(75, 0, 130, 0.35)":"transparent"};
  color: ${({$active:e})=>e?"#fff":"#a1a1aa"};
  font-size: 14px;
  cursor: pointer;
  border-left: 3px solid ${({$active:e})=>e?wt.colors.primary600:"transparent"};

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
  }
`,mn=d.div`
  background: #18181b;
  border: 1px solid #27272a;
  border-radius: ${wt.radii.lg};
  padding: 16px;
`;d.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 12px;
`;d.div`
  background: #111114;
  border: 1px solid #27272a;
  border-radius: ${wt.radii.md};
  padding: 14px;

  strong {
    display: block;
    font-size: 22px;
    margin-top: 4px;
  }

  span {
    font-size: 12px;
    color: #a1a1aa;
  }
`;const Yp=d.table`
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
    color: #a1a1aa;
    font-weight: 600;
  }

  tr:hover td {
    background: rgba(255, 255, 255, 0.03);
  }
`,Ze=d.button`
  padding: 8px 14px;
  border-radius: ${wt.radii.md};
  border: 1px solid
    ${({$variant:e})=>e==="danger"?"#7f1d1d":e==="primary"?wt.colors.primary600:"#3f3f46"};
  background: ${({$variant:e})=>e==="danger"?"#991b1b":e==="primary"?wt.colors.primary600:"transparent"};
  color: #fff;
  font-size: 13px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Jt=d.input`
  width: 100%;
  padding: 8px 10px;
  border-radius: ${wt.radii.md};
  border: 1px solid #3f3f46;
  background: #09090b;
  color: #fff;
  font-size: 14px;
`,Ti=d.textarea`
  width: 100%;
  min-height: 280px;
  padding: 10px;
  border-radius: ${wt.radii.md};
  border: 1px solid #3f3f46;
  background: #09090b;
  color: #e4e4e7;
  font-family: ui-monospace, monospace;
  font-size: 12px;
  line-height: 1.5;
`,Oe=d.label`
  display: block;
  font-size: 12px;
  color: #a1a1aa;
  margin-bottom: 4px;
`,De=d.div`
  margin-bottom: 12px;
`,mr=d.p`
  color: #f87171;
  font-size: 13px;
  margin: 8px 0;
`;d.iframe`
  width: 100%;
  height: min(70vh, 720px);
  border: 0;
  border-radius: ${wt.radii.lg};
  background: #000;
`;const YR=d.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #0f0f12;
  padding: 24px;
`,GR=d.h1`
  margin: 0 0 8px;
  font-size: 22px;
  color: #fff;
`;function ZR(){const e=mt(),t=Ii(f=>f.bootstrap),[n,r]=y.useState(""),[i,o]=y.useState(""),[s,a]=y.useState(null),[c,u]=y.useState(!1),p=async f=>{f.preventDefault(),a(null),u(!0);try{if(await yR(n.trim(),i),await t(),!Ii.getState().authenticated){a("스태프(ADMIN/DEV/EMPLOYEE) 계정만 접근할 수 있습니다.");return}e("/admin",{replace:!0})}catch(h){a(h instanceof Error?h.message:"로그인에 실패했습니다.")}finally{u(!1)}};return l.jsx(YR,{children:l.jsxs(mn,{style:{width:"100%",maxWidth:400},children:[l.jsx(GR,{children:"Admin 로그인"}),l.jsxs("form",{onSubmit:p,children:[l.jsxs(De,{children:[l.jsx(Oe,{children:"아이디"}),l.jsx(Jt,{value:n,onChange:f=>r(f.target.value),autoComplete:"username",required:!0})]}),l.jsxs(De,{children:[l.jsx(Oe,{children:"비밀번호"}),l.jsx(Jt,{value:i,onChange:f=>o(f.target.value),type:"password",autoComplete:"current-password",required:!0})]}),s&&l.jsx(mr,{children:s}),l.jsx(Ze,{$variant:"primary",type:"submit",disabled:c,style:{width:"100%",marginTop:8},children:c?"로그인 중…":"로그인"})]})]})})}const qR=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({$compact:e})=>e?"8px":"12px"};
`,QR=d(mn)`
  width: 100%;
  padding: ${({$compact:e})=>e?"12px":"14px 12px"};
`,XR=d.h3`
  margin: 0;
  font-size: ${({$compact:e})=>e?"13px":"15px"};
  font-weight: 600;
  word-break: break-all;
`,JR=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: ${({$compact:e})=>e?"8px":"12px"};
`,Uu=d.div`
  padding: ${({$compact:e})=>e?"4px 8px":"6px 10px"};
  border-radius: ${wt.radii.pill};
  background: rgba(75, 0, 130, 0.18);
  border: 1px solid rgba(75, 0, 130, 0.35);
  font-size: ${({$compact:e})=>e?"11px":"12px"};
  color: #d4d4d8;

  strong {
    color: #fff;
    margin-left: 4px;
    font-size: ${({$compact:e})=>e?"12px":"13px"};
  }
`,eM=d.div`
  width: 100%;
  min-width: 0;
`,tM=d.svg`
  display: block;
  width: 100%;
  overflow: visible;
`,nM=d.div`
  position: absolute;
  pointer-events: none;
  padding: 6px 10px;
  border-radius: 8px;
  background: rgba(9, 9, 11, 0.95);
  border: 1px solid #3f3f46;
  color: #fff;
  font-size: 12px;
  white-space: nowrap;
  transform: translate(-50%, -120%);
  z-index: 2;
`,a4=d.p`
  margin: 0;
  padding: ${({$compact:e})=>e?"20px 0":"32px 0"};
  text-align: center;
  color: #71717a;
  font-size: ${({$compact:e})=>e?"12px":"13px"};
`,rM={top:28,right:8,bottom:36,left:36},iM={top:24,right:6,bottom:32,left:32};function oM(e){if(e<=0)return 4;const t=10**Math.floor(Math.log10(e)),n=e/t;return(n<=1?1:n<=2?2:n<=5?5:10)*t}function lM(e){const t=e.match(/^(\d{4})/);return t?Number(t[1]):new Date().getFullYear()}function sM(e,t){if(t==="month"){const r=e.split("-");return r.length>=2?`${Number(r[1])}월`:e}const n=e.split("-");return n.length>=3?`${Number(n[1])}/${Number(n[2])}`:e}function aM(e){return e==="teal"?{stroke:"#2dd4bf",fill:"rgba(45, 212, 191, 0.18)",dot:"#5eead4"}:e==="gold"?{stroke:"#fbbf24",fill:"rgba(251, 191, 36, 0.16)",dot:"#fde68a"}:{stroke:wt.colors.primary300,fill:"rgba(168, 139, 202, 0.2)",dot:wt.colors.primary200}}function cM(e,t,n){const r=[];for(let s=1;s<e.length;s++)e[s].year!==e[s-1].year&&r.push({x:(e[s-1].x+e[s].x)/2,yearBefore:e[s-1].year,yearAfter:e[s].year});const i=[];for(const s of e)i[i.length-1]!==s.year&&i.push(s.year);return{yearBands:i.map((s,a)=>({year:s,xStart:a===0?t:r[a-1].x,xEnd:a===i.length-1?n:r[a].x})),dividers:r}}function ns({title:e,series:t,loading:n,error:r,compact:i=!1,accent:o="purple",unit:s="회",emptyMessage:a="아직 표시할 데이터가 없습니다.",hideSummary:c=!1}){const u=y.useRef(null),[p,f]=y.useState(960),[h,g]=y.useState(null),[b,w]=y.useState(null),C=i?168:260,m=i?iM:rM,x=aM(o);y.useEffect(()=>{const v=u.current;if(!v)return;const $=()=>{const S=v.getBoundingClientRect().width;S>0&&f(S)};$();const k=new ResizeObserver($);return k.observe(v),window.addEventListener("resize",$),()=>{k.disconnect(),window.removeEventListener("resize",$)}},[t,n]);const L=y.useMemo(()=>{const v=(t==null?void 0:t.points)??[],$=(t==null?void 0:t.granularity)??"day",k=Math.max(120,p-m.left-m.right),S=C-m.top-m.bottom,M=(t==null?void 0:t.peak)??0,T=oM(M),R=v.length,I=v.map((G,E)=>{const q=R<=1?m.left+k/2:m.left+E/(R-1)*k,ee=T>0?G.count/T:0,J=m.top+S-ee*S;return{key:G.key,label:G.label,count:G.count,x:q,y:J,year:lM(G.key)}}),P=I.length>0?I.map((G,E)=>`${E===0?"M":"L"} ${G.x.toFixed(2)} ${G.y.toFixed(2)}`).join(" "):"",_=m.top+S,B=m.left,H=p-m.right,W=I.length>0?`${P} L ${I[I.length-1].x.toFixed(2)} ${_} L ${I[0].x.toFixed(2)} ${_} Z`:"",{yearBands:A,dividers:z}=cM(I,B,H),N=4,j=Array.from({length:N+1},(G,E)=>{const q=Math.round(T*E/N),ee=m.top+S-(T>0?q/T*S:0);return{value:q,y:ee}}),Q=R<=12?1:R<=24?2:R<=60?5:7;return{plotted:I,linePath:P,areaPath:W,yearBands:A,dividers:z,yTicks:j,yMax:T,plotH:S,baseY:_,granularity:$,labelEvery:Q}},[C,m,t,p]);return l.jsxs(QR,{$compact:i,children:[l.jsx(qR,{$compact:i,children:l.jsx(XR,{$compact:i,children:e})}),r&&l.jsx(mr,{children:r}),t&&!c&&l.jsxs(JR,{$compact:i,children:[l.jsxs(Uu,{$compact:i,children:["합계",l.jsx("strong",{children:t.total.toLocaleString()})]}),l.jsxs(Uu,{$compact:i,children:["평균",l.jsx("strong",{children:t.average.toLocaleString()})]}),l.jsxs(Uu,{$compact:i,children:["최대",l.jsx("strong",{children:t.peak.toLocaleString()})]})]}),n&&!t?l.jsx(a4,{$compact:i,children:"그래프 데이터를 불러오는 중…"}):L.plotted.length===0?l.jsx(a4,{$compact:i,children:a}):l.jsxs(eM,{ref:u,style:{position:"relative",height:C},children:[l.jsxs(tM,{viewBox:`0 0 ${p} ${C}`,style:{height:C},role:"img","aria-label":e,children:[L.yTicks.map(v=>l.jsxs("g",{children:[l.jsx("line",{x1:m.left,x2:p-m.right,y1:v.y,y2:v.y,stroke:"rgba(255,255,255,0.08)",strokeDasharray:"4 4"}),l.jsx("text",{x:m.left-10,y:v.y+4,textAnchor:"end",fill:"#71717a",fontSize:i?9:10,children:v.value.toLocaleString()})]},v.value)),l.jsx("line",{x1:m.left,x2:p-m.right,y1:L.baseY,y2:L.baseY,stroke:"rgba(255,255,255,0.2)",strokeWidth:1}),L.yearBands.map(v=>{const $=(v.xStart+v.xEnd)/2;return l.jsxs("g",{children:[l.jsx("rect",{x:v.xStart,y:m.top-28,width:Math.max(v.xEnd-v.xStart,1),height:20,fill:"rgba(75, 0, 130, 0.08)",rx:4}),l.jsxs("text",{x:$,y:m.top-14,textAnchor:"middle",fill:"#d4d4d8",fontSize:i?11:12,fontWeight:"600",children:[v.year,"년"]})]},v.year)}),L.dividers.map(v=>l.jsxs("g",{children:[l.jsx("line",{x1:v.x,x2:v.x,y1:m.top-8,y2:L.baseY,stroke:"rgba(255,255,255,0.14)",strokeWidth:1}),l.jsx("text",{x:v.x,y:m.top-16,textAnchor:"middle",fill:"#52525b",fontSize:"11",fontWeight:"600",children:"|"})]},`${v.yearBefore}-${v.yearAfter}`)),L.areaPath&&l.jsx("path",{d:L.areaPath,fill:x.fill,stroke:"none"}),L.linePath&&l.jsx("path",{d:L.linePath,fill:"none",stroke:x.stroke,strokeWidth:i?2:2.5,strokeLinejoin:"round",strokeLinecap:"round"}),L.plotted.map((v,$)=>{const k=h===v.key,S=$%L.labelEvery===0||$===L.plotted.length-1;return l.jsxs("g",{children:[l.jsx("circle",{cx:v.x,cy:v.y,r:k?i?5:6:i?3.5:4,fill:x.dot,stroke:x.stroke,strokeWidth:2,style:{cursor:"default"},onMouseEnter:M=>{var R;g(v.key);const T=(R=u.current)==null?void 0:R.getBoundingClientRect();T&&w({x:M.clientX-T.left,y:M.clientY-T.top,text:`${v.label}: ${v.count.toLocaleString()}${s}`})},onMouseLeave:()=>{g(null),w(null)}}),S&&l.jsx("text",{x:v.x,y:L.baseY+(i?16:18),textAnchor:"middle",fill:"#a1a1aa",fontSize:i?9:10,children:sM(v.key,L.granularity)})]},v.key)})]}),b&&l.jsx(nM,{style:{left:b.x,top:b.y},children:b.text})]})]})}const uM=[{value:7,label:"최근 7일"},{value:14,label:"최근 14일"},{value:30,label:"최근 30일"},{value:60,label:"최근 60일"},{value:90,label:"최근 90일"}],dM=[{value:6,label:"최근 6개월"},{value:12,label:"최근 12개월"},{value:24,label:"최근 24개월"}];d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
`;const Vu=d.select`
  padding: 6px 10px;
  border-radius: ${wt.radii.md};
  border: 1px solid #3f3f46;
  background: #09090b;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
`,pM=d.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
`,fM=d.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
`,hM=d.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
`,c4=d.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #e4e4e7;
`,u4=d.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 10px;
`,d4=d.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  & + & {
    margin-top: 20px;
  }
`,gM=d.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,mM=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(132px, 1fr));
  gap: 8px;
  margin-bottom: 20px;
`,oi=d.div`
  background: #111114;
  border: 1px solid #27272a;
  border-radius: ${wt.radii.md};
  padding: 10px 12px;

  strong {
    display: block;
    font-size: 18px;
    margin-top: 2px;
    line-height: 1.2;
  }

  span {
    font-size: 11px;
    color: #a1a1aa;
  }
`;function xM(){const[e,t]=y.useState(null),[n,r]=y.useState(null),[i,o]=y.useState(null),[s,a]=y.useState(null),[c,u]=y.useState(""),[p,f]=y.useState("day"),[h,g]=y.useState(30),[b,w]=y.useState(null),[C,m]=y.useState(null),[x,L]=y.useState(!1),v=void 0,$=p==="day"?uM:dM,k=y.useCallback(async()=>{w(null);try{t(await vR())}catch(I){w(I instanceof Error?I.message:"지표를 불러오지 못했습니다.")}},[]),S=y.useCallback(async()=>{L(!0),m(null);try{const[I,P,_]=await Promise.all([wR(p,h),bR(p,h),kR(p,h)]);r(I),o(P),a(_)}catch(I){m(I instanceof Error?I.message:"그래프 데이터를 불러오지 못했습니다.")}finally{L(!1)}},[p,h]),M=y.useCallback(async()=>{await Promise.all([k(),S()])},[S,k]);y.useEffect(()=>{S()},[S]),y.useEffect(()=>{k();const I=setInterval(k,3e4);return()=>clearInterval(I)},[k]),y.useEffect(()=>{const I=(s==null?void 0:s.endpoints)??[];if(I.length===0){u("");return}u(P=>I.some(_=>_.uri===P)?P:I[0].uri)},[s]);const T=y.useMemo(()=>(s==null?void 0:s.endpoints.find(I=>I.uri===c))??null,[s,c]),R=I=>{f(I),g(I==="day"?30:12)};return l.jsxs("div",{children:[l.jsxs(pM,{children:[l.jsx(hM,{children:"트래픽·운영 현황"}),l.jsxs(fM,{children:[l.jsxs(Vu,{value:p,onChange:I=>R(I.target.value),"aria-label":"집계 단위",children:[l.jsx("option",{value:"day",children:"일별"}),l.jsx("option",{value:"month",children:"월별"})]}),l.jsx(Vu,{value:h,onChange:I=>g(Number(I.target.value)),"aria-label":"조회 기간",children:$.map(I=>l.jsx("option",{value:I.value,children:I.label},I.value))}),l.jsx(Ze,{$variant:"ghost",type:"button",onClick:M,children:"새로고침"})]})]}),b&&l.jsx(mr,{children:b}),C&&l.jsx(mr,{children:C}),e&&l.jsxs(mM,{children:[l.jsxs(oi,{children:[l.jsx("span",{children:"누적 HTTP"}),l.jsx("strong",{children:e.totalHttpRequests.toLocaleString()})]}),l.jsxs(oi,{children:[l.jsx("span",{children:"회원"}),l.jsx("strong",{children:e.membersCount.toLocaleString()})]}),l.jsxs(oi,{children:[l.jsx("span",{children:"명상지·센터"}),l.jsx("strong",{children:e.placesCount.toLocaleString()})]}),l.jsxs(oi,{children:[l.jsx("span",{children:"전문가"}),l.jsx("strong",{children:e.expertsCount.toLocaleString()})]}),l.jsxs(oi,{children:[l.jsx("span",{children:"지역"}),l.jsx("strong",{children:e.regionsCount.toLocaleString()})]}),l.jsxs(oi,{children:[l.jsx("span",{children:"공지"}),l.jsx("strong",{children:e.noticesCount.toLocaleString()})]})]}),l.jsxs(d4,{children:[l.jsx(u4,{children:l.jsx(c4,{children:"주요 추이"})}),l.jsxs(gM,{children:[l.jsx(ns,{title:"HTTP 요청 추이",series:n,loading:x,unit:"회",compact:!0,emptyMessage:"아직 기록된 HTTP 요청이 없습니다."}),l.jsx(ns,{title:`회원 수 추이 (현재 ${(i==null?void 0:i.currentTotal.toLocaleString())??"-"}명)`,series:(i==null?void 0:i.cumulativeSeries)??null,loading:x,accent:"teal",unit:"명",compact:!0,emptyMessage:"아직 가입한 회원이 없습니다."}),l.jsx(ns,{title:"신규 가입 추이",series:(i==null?void 0:i.signupSeries)??null,loading:x,accent:"gold",unit:"명",compact:!0,emptyMessage:"선택한 기간에 신규 가입이 없습니다."})]})]}),l.jsxs(d4,{children:[l.jsxs(u4,{children:[l.jsx(c4,{children:"API별 호출량"}),s&&s.endpoints.length>0?l.jsx(Vu,{value:c,onChange:I=>u(I.target.value),"aria-label":"API 선택",children:s.endpoints.map(I=>l.jsx("option",{value:I.uri,children:I.uri},I.uri))}):null]}),x&&!s?l.jsx(mn,{children:l.jsx("p",{style:{margin:0,color:"#71717a",textAlign:"center",padding:"20px 0",fontSize:13},children:"API 그래프를 불러오는 중…"})}):T?l.jsx(ns,{title:T.uri,series:T.series,compact:!0,emptyMessage:"호출 기록 없음"}):l.jsx(mn,{children:l.jsx("p",{style:{margin:0,color:"#71717a",textAlign:"center",padding:"20px 0",fontSize:13},children:"API 호출 기록이 쌓이면 URI별 그래프가 표시됩니다."})})]}),v]})}function Tx(e,t){const n=e.trim(),r=(t??[]).map(i=>i.trim()).filter(i=>i&&i!==n);return n?[n,...r]:r}function LM(e){const t=e.map(n=>n.trim()).filter(Boolean);return{imageUrl:t[0]??"",imageUrls:t.slice(1)}}const yM=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,vM=d.div`
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
`,wM=d.span`
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
`,bM=d.button`
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
`,kM=d.button`
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
`,jM=d.p`
  margin: 8px 0 0;
  font-size: 12px;
  color: #71717a;
  line-height: 1.45;
`,SM=d.p`
  margin: 6px 0 0;
  color: #f87171;
  font-size: 12px;
`;function CM(e,t,n){if(t===n||t<0||n<0||t>=e.length||n>=e.length)return e;const r=[...e],[i]=r.splice(t,1);return r.splice(n,0,i),r}function p4({label:e="사진",photos:t,onChange:n,maxPhotos:r=10,hint:i="첫 번째 사진이 대표·목록 썸네일입니다. 드래그로 순서를 바꿀 수 있습니다."}){const o=y.useRef(null),[s,a]=y.useState(!1),[c,u]=y.useState(null),[p,f]=y.useState(null),[h,g]=y.useState(null),b=x=>n(x.slice(0,r)),w=async x=>{if(!(x!=null&&x.length))return;const L=r-t.length;if(L<=0){u(`사진은 최대 ${r}장까지 등록할 수 있습니다.`);return}a(!0),u(null);try{const v=[...t];for(const $ of Array.from(x).slice(0,L)){const k=await _R($);v.includes(k)||v.push(k)}b(v)}catch(v){u(v instanceof Error?v.message:"업로드 실패 (MinIO·로그인 확인)")}finally{a(!1)}},C=x=>{p!==null&&(b(CM(t,p,x)),f(null),g(null))},m=t.length<r;return l.jsxs(De,{children:[l.jsx(Oe,{children:e}),l.jsxs(yM,{children:[t.map((x,L)=>l.jsxs(vM,{draggable:!0,$dragging:p===L,$dragOver:h===L,onDragStart:()=>f(L),onDragEnd:()=>{f(null),g(null)},onDragOver:v=>{v.preventDefault(),g(L)},onDragLeave:()=>g(v=>v===L?null:v),onDrop:v=>{v.preventDefault(),C(L)},children:[l.jsx("img",{src:x,alt:""}),L===0?l.jsx(wM,{children:"대표"}):null,l.jsx(bM,{type:"button","aria-label":"사진 삭제",onClick:()=>b(t.filter((v,$)=>$!==L)),children:"×"})]},`${x}-${L}`)),m?l.jsx(kM,{type:"button",disabled:s,onClick:()=>{var x;return(x=o.current)==null?void 0:x.click()},"aria-label":"사진 추가",children:s?"…":"+"}):null]}),l.jsx("input",{ref:o,type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:x=>void w(x.target.files).finally(()=>{x.target.value=""})}),l.jsx(jM,{children:i}),c?l.jsx(SM,{children:c}):null]})}const $M={width:"100%",padding:8,borderRadius:8,background:"#09090b",color:"#fff",border:"1px solid #3f3f46"};function EM({label:e="지역",value:t,onChange:n}){return l.jsxs(De,{children:[l.jsx(Oe,{children:e}),l.jsx("select",{value:t,onChange:r=>n(r.target.value),style:$M,children:Ki.map(r=>l.jsx("option",{value:r.id,children:r.name},r.id))})]})}const y1=[{id:"KR-11",names:["서울특별시","서울"]},{id:"KR-26",names:["부산광역시","부산"]},{id:"KR-27",names:["대구광역시","대구"]},{id:"KR-28",names:["인천광역시","인천"]},{id:"KR-29",names:["광주광역시","광주"]},{id:"KR-30",names:["대전광역시","대전"]},{id:"KR-31",names:["울산광역시","울산"]},{id:"KR-50",names:["세종특별자치시","세종"]},{id:"KR-41",names:["경기도","경기"]},{id:"KR-42",names:["강원특별자치도","강원도","강원"]},{id:"KR-43",names:["충청북도","충북"]},{id:"KR-44",names:["충청남도","충남"]},{id:"KR-45",names:["전북특별자치도","전라북도","전북"]},{id:"KR-46",names:["전라남도","전남"]},{id:"KR-47",names:["경상북도","경북"]},{id:"KR-48",names:["경상남도","경남"]},{id:"KR-49",names:["제주특별자치도","제주도","제주"]}];function f4(e){return typeof e=="number"?e:parseFloat(String(e??""))}function h4(e){var i,o;const t=f4(((i=e.point)==null?void 0:i.y)??e.y),n=f4(((o=e.point)==null?void 0:o.x)??e.x);if(!Number.isFinite(t)||!Number.isFinite(n))return null;const r=(e.roadAddress||e.jibunAddress||e.address||"").trim();return r?{address:r,lat:t,lng:n,precision:"exact"}:null}function Gp(){var e,t;return(t=(e=window.naver)==null?void 0:e.maps)==null?void 0:t.Service}function Rx(e){var n,r;if(e==="OK"||e===0)return!0;const t=(r=(n=Gp())==null?void 0:n.Status)==null?void 0:r.OK;return t!=null&&e===t}function PM(e){var n;const t=(n=Gp())==null?void 0:n.Status;if(t){for(const[r,i]of Object.entries(t))if(i===e&&r!=="OK")return r}return String(e)}function IM(e){var a,c;const t=e,n=[],r=new Set,i=u=>{!u||r.has(u.address)||(r.add(u.address),n.push(u))},o=((a=t.v2)==null?void 0:a.addresses)??[];for(const u of o)i(h4(u));const s=((c=t.result)==null?void 0:c.items)??t.addresses??[];for(const u of s)i(h4(u));return n}function TM(e){const t=Gp(),n=t==null?void 0:t.geocode;return n?new Promise((r,i)=>{try{n.call(t,{query:e},(o,s)=>{r({status:o,results:Rx(o)?IM(s):[]})})}catch(o){i(o instanceof Error?o:new Error("주소 검색 호출 실패"))}}):Promise.reject(new Error("지도 API(geocoder)가 로드되지 않았습니다."))}function g4(e){return e.replace(/\s+/g,"")}function Mx(e){const t=g4(e);for(const n of y1)for(const r of[...n.names].sort((i,o)=>o.length-i.length))if(t.includes(g4(r)))return n.id;return null}function RM(e,t){const n=ua.find(r=>r.id===t)??ua[0];return{address:e.trim(),lat:(n.minLat+n.maxLat)/2,lng:(n.minLng+n.maxLng)/2,approximate:!0,precision:"region"}}function MM(e){var u,p;const t=new Set,n=[],r=f=>{const h=f.trim().replace(/\s+/g," ");h.length>=2&&!t.has(h)&&(t.add(h),n.push(h))},i=e.trim().replace(/\s+/g," ");r(i);const o=(u=i.split(/[,，]/)[0])==null?void 0:u.trim();o&&o!==i&&r(o);const s=i.split(/\s+/).filter(Boolean);for(let f=s.length-1;f>=1;f--)r(s.slice(0,f).join(" "));const a=s[s.length-1];if(a&&a.length>=2&&!/[시군구읍면동로]$/.test(a)){const f=s.slice(0,-1).join(" ");r(`${f} ${a}시`.trim()),r(`${f} ${a}군`.trim()),r(`${f} ${a}구`.trim()),r(`${a}시`),r(`${a}군`),r(`${a}구`)}for(const f of y1)for(const h of f.names)i.includes(h)&&r(h);const c=Mx(i);if(c){const f=(p=y1.find(h=>h.id===c))==null?void 0:p.names[0];f&&r(f),r(bl(c))}return n}function zM(e,t,n){return e.map(r=>({...r,approximate:t||r.approximate,precision:t?n:r.precision??"exact"}))}function zx(e){return e.precision==="region"?11:e.approximate||e.precision==="area"?14:17}async function Ps(e){const t=e.trim();if(!t)return[];const n=MM(t);let r="OK";for(let o=0;o<n.length;o++){const s=n[o],{status:a,results:c}=await TM(s);if(r=a,c.length>0)return zM(c,o>0,o>0?"area":"exact")}const i=Mx(t);if(i)return[RM(t,i)];if(!Rx(r))throw new Error(`주소 검색 실패 (${PM(r)})`);return[]}const AM=d.div`
  display: flex;
  align-items: stretch;
  gap: 8px;
`,_M=d.div`
  flex: 1;
  min-width: 0;

  input {
    width: 100%;
    height: 100%;
  }
`,NM=d.button`
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
`;function OM(){return l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[l.jsx("circle",{cx:"11",cy:"11",r:"7"}),l.jsx("line",{x1:"16.5",y1:"16.5",x2:"21",y2:"21"})]})}function DM(){return l.jsx("svg",{className:"spin",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:l.jsx("path",{d:"M12 3a9 9 0 1 1-6.36 15.36",strokeLinecap:"round"})})}const BM=d.ul`
  list-style: none;
  margin: 8px 0 0;
  padding: 0;
  border: 1px solid #3f3f46;
  border-radius: 8px;
  overflow: hidden;
  max-height: 160px;
  overflow-y: auto;
`,FM=d.button`
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
`,HM=d.div`
  margin-top: 12px;
  width: 100%;
  height: 220px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #3f3f46;
  background: #27272a;
`,UM=d.p`
  margin: 12px 0 0;
  font-size: 12px;
  color: #71717a;
  line-height: 1.45;
`,VM=d.p`
  margin: 8px 0 0;
  font-size: 12px;
  color: #86efac;
`,WM=d.p`
  margin: 8px 0 0;
  font-size: 12px;
  color: #fcd34d;
  line-height: 1.45;
`,m4=d.p`
  margin: 6px 0 0;
  font-size: 12px;
  color: #71717a;
  line-height: 1.45;
`;async function jr(){await new Promise(e=>{requestAnimationFrame(()=>requestAnimationFrame(()=>e()))})}function KM({value:e,onChange:t}){const n=y.useRef(null),r=y.useRef(null),i=y.useRef(null),[o,s]=y.useState(e),[a,c]=y.useState([]),[u,p]=y.useState(null),[f,h]=y.useState(!1),[g,b]=y.useState(null),[w,C]=y.useState(!1),m="233s0l2jzo".trim();y.useEffect(()=>{s(e),e.trim()||(p(null),C(!1),c([]))},[e]);const x=y.useCallback((v,$)=>{var I;const S=window.naver.maps,M=n.current;if(!(S!=null&&S.Map)||!S.LatLng||!S.Marker||!M)return;const T=new S.LatLng(v.lat,v.lng),R=zx(v);if(!r.current)r.current=new S.Map(M,{center:T,zoom:R,scrollWheel:!0,mapTypeControl:!1});else{const P=r.current;P.setCenter(T),P.setZoom(R)}i.current&&i.current.setMap(null),i.current=new S.Marker({position:T,map:r.current}),(I=S.Event)==null||I.trigger(r.current,"resize"),p(v),C(!v.approximate),($==null?void 0:$.syncAddress)!==!1&&!v.approximate&&t(v.address)},[t]),L=y.useCallback(async v=>{const $=(v??o).trim();if(!$){b("검색할 주소를 입력하세요.");return}b(null),h(!0),C(!1);try{if(!m){b(".env에 VITE_NAVER_MAP_CLIENT_ID를 설정하면 지도에서 주소를 확인할 수 있습니다."),t($);return}await Es(m),await jr();const k=await Ps($);if(c(k),k.length===0){b("위치를 찾지 못했습니다. 시·군·구 이름이나 더 구체적인 주소로 다시 검색해 보세요.");return}await jr(),x(k[0],{syncAddress:!k[0].approximate})}catch(k){b(k instanceof Error?k.message:"주소 검색 실패")}finally{h(!1)}},[m,t,o,x]);return y.useEffect(()=>{if(!e.trim()||!m)return;let v=!1;return(async()=>{try{if(await Es(m),v)return;await jr();const $=await Ps(e);if(v||$.length===0)return;const k=$.find(S=>S.address===e)??$[0];await jr(),v||x(k,{syncAddress:!1})}catch{}})(),()=>{v=!0}},[m,x,e]),y.useEffect(()=>{const v=o.trim();if(!v||!m||v===e.trim())return;let $=!1;const k=window.setTimeout(()=>{(async()=>{try{if(await Es(m),$)return;await jr();const S=await Ps(v);if($||S.length===0)return;await jr(),$||(c(S),b(null),x(S[0],{syncAddress:!1}))}catch{}})()},600);return()=>{$=!0,window.clearTimeout(k)}},[m,o,x,e]),l.jsxs(De,{children:[l.jsx(Oe,{children:"주소 (검색 후 지도에서 확인)"}),l.jsxs(AM,{children:[l.jsx(_M,{children:l.jsx(Jt,{value:o,onChange:v=>{s(v.target.value),C(!1)},onKeyDown:v=>{v.key==="Enter"&&(v.preventDefault(),L())},placeholder:"예: 서울특별시 종로구 ..."})}),l.jsx(NM,{type:"button",onClick:()=>void L(),disabled:f,"aria-label":f?"주소 검색 중":"주소 검색",title:f?"검색 중…":"검색",children:f?l.jsx(DM,{}):l.jsx(OM,{})})]}),l.jsx(m4,{children:"정확한 도로명·지번이 없어도 「강릉」, 「제주」, 「종로구」처럼 지역명만으로 대략적인 위치를 표시합니다. 검색 후 핀 위치를 확인해 주세요."}),g&&l.jsx(mr,{children:g}),a.length>1&&l.jsx(BM,{children:a.map(v=>l.jsx("li",{children:l.jsx(FM,{type:"button",$active:(u==null?void 0:u.address)===v.address,onClick:()=>void jr().then(()=>x(v)),children:v.address})},`${v.address}-${v.lat}`))}),m?l.jsxs(l.Fragment,{children:[l.jsx(HM,{ref:n,"aria-label":"주소 확인 지도"}),!u&&l.jsx(UM,{children:"검색하면 지도에서 위치를 확인할 수 있습니다."})]}):l.jsx(m4,{children:".env에 VITE_NAVER_MAP_CLIENT_ID를 설정하면 지도 미리보기가 표시됩니다."}),w&&u&&l.jsxs(VM,{children:["✓ 지도에서 확인됨 — ",u.address]}),!w&&(u==null?void 0:u.approximate)&&l.jsxs(WM,{children:["◎ 대략적인 위치 — ",u.precision==="region"?"시·도":"지역"," 단위로 표시됩니다.",u.address!==o.trim()&&u.precision!=="region"?` (${u.address})`:""]})]})}const x4=[{id:"text",label:"텍스트",group:"기본 블록",prefix:""},{id:"h1",label:"제목1",group:"기본 블록",prefix:"# ",hint:"#"},{id:"h2",label:"제목2",group:"기본 블록",prefix:"## ",hint:"##"},{id:"h3",label:"제목3",group:"기본 블록",prefix:"### ",hint:"###"},{id:"ul",label:"글머리 기호",group:"기본 블록",prefix:"- ",hint:"-"},{id:"ol",label:"번호 목록",group:"기본 블록",prefix:"1. ",hint:"1."},{id:"quote",label:"인용",group:"기본 블록",prefix:"> ",hint:">"},{id:"hr",label:"구분선",group:"기본 블록",prefix:`---
`,hint:"---"}],YM=d.div`
  position: relative;
`,GM=d(Ti)`
  min-height: ${({$minHeight:e})=>e}px;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.55;
  resize: vertical;
`,ZM=d.div`
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
`,qM=d.div`
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
`,QM=d.div`
  padding: 8px 12px 4px;
  font-size: 11px;
  font-weight: 600;
  color: #71717a;
`,XM=d.button`
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
`,JM=d.div`
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
`,ez=d.p`
  margin: 6px 0 0;
  font-size: 12px;
  color: #71717a;
`;function Ax(e,t){return e.lastIndexOf(`
`,t-1)+1}function tz(e,t){const n=Ax(e,t),r=e.slice(n,t),i=r.lastIndexOf("/");if(i<0||r.slice(0,i).trim()!=="")return null;const s=r.slice(i+1);return s.includes(" ")||s.includes(`
`)?null:{slashStart:n+i,query:s,selected:0}}function nz(e,t,n,r){const i=Ax(e,t);return{next:e.slice(0,i)+r+e.slice(n),nextCursor:i+r.length}}function Wu({label:e,value:t,onChange:n,placeholder:r,minHeight:i=100,hint:o="/ 를 입력하면 마크다운 블록을 선택할 수 있습니다."}){const s=y.useRef(null),[a,c]=y.useState(null),u=y.useMemo(()=>{if(!a)return[];const m=a.query.trim().toLowerCase();return m?x4.filter(x=>{var L;return x.label.toLowerCase().includes(m)||x.id.includes(m)||(((L=x.hint)==null?void 0:L.toLowerCase().includes(m))??!1)}):x4},[a]),p=y.useCallback(()=>c(null),[]),f=y.useCallback(m=>{const x=s.current;if(!a||!x)return;const L=x.selectionStart??t.length,{next:v,nextCursor:$}=nz(t,a.slashStart,L,m.prefix);n(v),p(),requestAnimationFrame(()=>{x.focus(),x.setSelectionRange($,$)})},[p,a,n,t]),h=y.useCallback((m,x)=>{const L=tz(m,x);if(!L){c(null);return}c(v=>{const $=v&&v.slashStart===L.slashStart?v.selected:0;return{...L,selected:$}})},[]);y.useEffect(()=>{if(a){if(u.length===0){c(null);return}a.selected>=u.length&&c({...a,selected:u.length-1})}},[u.length,a]);const g=m=>{const x=m.target.value,L=m.target.selectionStart??x.length;n(x),h(x,L)},b=m=>{if(!(!a||u.length===0)){if(m.key==="ArrowDown"){m.preventDefault(),c(x=>x&&{...x,selected:Math.min(x.selected+1,u.length-1)});return}if(m.key==="ArrowUp"){m.preventDefault(),c(x=>x&&{...x,selected:Math.max(x.selected-1,0)});return}if(m.key==="Enter"&&!m.shiftKey){m.preventDefault(),f(u[a.selected]);return}m.key==="Escape"&&(m.preventDefault(),p())}},w=()=>{const m=s.current;m&&h(t,m.selectionStart??t.length)};let C="";return l.jsxs(De,{children:[l.jsx(Oe,{children:e}),l.jsxs(YM,{children:[l.jsx(GM,{ref:s,$minHeight:i,value:t,onChange:g,onKeyDown:b,onClick:w,onBlur:()=>window.setTimeout(p,120),placeholder:r,spellCheck:!1}),a&&u.length>0&&l.jsxs(ZM,{onMouseDown:m=>m.preventDefault(),children:[l.jsxs(qM,{children:["/",l.jsx("span",{children:a.query||"검색어를 입력하세요"})]}),u.map((m,x)=>{const L=m.group!==C;return C=m.group,l.jsxs("div",{children:[L?l.jsx(QM,{children:m.group}):null,l.jsxs(XM,{type:"button",$active:a.selected===x,onMouseEnter:()=>c(v=>v&&{...v,selected:x}),onClick:()=>f(m),children:[l.jsx("span",{children:m.label}),m.hint?l.jsx("kbd",{children:m.hint}):null]})]},m.id)}),l.jsxs(JM,{children:[l.jsx("span",{children:"메뉴 닫기"}),l.jsx("kbd",{children:"esc"})]})]})]}),l.jsx(ez,{children:o})]})}const rz=d.div`
  width: 100%;
  height: 180px;
  border-radius: ${({theme:e})=>e.radii.lg};
  overflow: hidden;
  background: ${({theme:e})=>e.colors.bg100};
  border: 1px solid ${({theme:e})=>e.colors.border200};
`,L4=d.div`
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
`,rs=d.p`
  margin: 8px 0 0;
  font-size: 0.8rem;
  color: ${({theme:e})=>e.colors.text700};
`;async function iz(){await new Promise(e=>{requestAnimationFrame(()=>requestAnimationFrame(()=>e()))})}function oz({address:e}){const t=y.useRef(null),n=y.useRef(null),r=y.useRef(null),[i,o]=y.useState("idle"),[s,a]=y.useState(!1),c="233s0l2jzo".trim(),u=e.trim();return y.useEffect(()=>{if(!u){o("idle"),a(!1),n.current=null,r.current=null;return}if(!c){o("no-key");return}let p=!1;const f=window.setTimeout(()=>{(async()=>{var h;o("loading");try{if(await Es(c),p)return;await iz();const g=await Ps(u);if(p)return;const b=g.find(L=>L.address===u)??g[0];if(!b){o("error"),a(!1);return}const w=t.current;if(!w||p)return;const C=window.naver,m=new C.maps.LatLng(b.lat,b.lng),x=zx(b);if(!n.current)n.current=new C.maps.Map(w,{center:m,zoom:x,scrollWheel:!1,mapTypeControl:!1,zoomControl:!1,scaleControl:!1});else{const L=n.current;L.setCenter(m),L.setZoom(x)}r.current&&r.current.setMap(null),r.current=new C.maps.Marker({position:m,map:n.current}),(h=C.maps.Event)==null||h.trigger(n.current,"resize"),p||(a(!!b.approximate),o("ready"))}catch{p||(a(!1),o("error"))}})()},350);return()=>{p=!0,window.clearTimeout(f)}},[c,u]),u?i==="no-key"?l.jsxs(L4,{children:[l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[l.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),l.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),u,l.jsx(rs,{children:"VITE_NAVER_MAP_CLIENT_ID 설정 시 지도 미리보기가 표시됩니다."})]}):l.jsxs(l.Fragment,{children:[l.jsx(rz,{ref:t,"aria-label":"위치 미리보기 지도"}),i==="loading"&&l.jsx(rs,{children:"지도 불러오는 중…"}),i==="ready"&&s&&l.jsx(rs,{children:"대략적인 위치입니다. 정확한 주소 검색을 권장합니다."}),i==="error"&&l.jsx(rs,{children:"지도를 표시하지 못했습니다. 시·군·구 이름으로 다시 입력해 보세요."})]}):l.jsxs(L4,{children:[l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[l.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),l.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"주소를 입력하면 지도가 표시됩니다"]})}const y4=d.div`
  position: sticky;
  top: 16px;
`,v4=d.h3`
  margin: 0 0 12px;
  font-size: 15px;
  font-weight: 600;
  color: #f4f4f5;
`,lz=d.div`
  display: flex;
  gap: 6px;
  margin-bottom: 12px;
`,w4=d.button`
  flex: 1;
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid ${({$active:e})=>e?"#7c3aed":"#3f3f46"};
  background: ${({$active:e})=>e?"rgba(124, 58, 237, 0.25)":"#18181b"};
  color: ${({$active:e})=>e?"#fff":"#a1a1aa"};
  font-size: 12px;
  cursor: pointer;
`,sz=d.div`
  border-radius: 24px;
  border: 6px solid #3f3f46;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
  max-height: min(78vh, 760px);
  overflow-y: auto;
  scrollbar-width: thin;
`,az=d.div`
  display: flex;
  justify-content: center;
  padding: 8px 0 4px;
  background: linear-gradient(180deg, ${({theme:e})=>e.colors.primary50} 0%, ${({theme:e})=>e.colors.warmCream} 100%);
  border-radius: 16px;
  border: 1px solid #27272a;
`,cz=d.div`
  width: 200px;
  background: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.radii.lg};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadow.soft};
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  position: relative;
`,uz=d.div`
  width: 100%;
  height: 120px;
  background: ${({theme:e})=>e.colors.bg100};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`,dz=d.div`
  padding: 12px;
`,pz=d.h4`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 6px;
  color: ${({theme:e})=>e.colors.text900};
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,fz=d.span`
  font-size: 0.85rem;
  color: ${({theme:e})=>e.colors.text700};
`,hz=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 6px;
`,gz=d.span`
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.primary600};
  background: ${({theme:e})=>e.colors.primary50};
  padding: 2px 8px;
  border-radius: ${({theme:e})=>e.radii.pill};
`,mz=d.div`
  color: ${({theme:e})=>e.colors.text900};
  background: #fff;
`,xz=d.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary100};
  position: sticky;
  top: 0;
  z-index: 2;
`,Lz=d.h1`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
`,yz=d.div`
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
`,vz=d.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 6px;
`,wz=d.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({$active:e})=>e?"#fff":"rgba(255,255,255,0.45)"};
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15);
`,Ku=d.div`
  height: 220px;
  display: grid;
  place-items: center;
  color: ${({theme:e})=>e.colors.text700};
  font-size: 0.9rem;
  background: ${({theme:e})=>e.colors.bg100};
`,bz=d.div`
  padding: 20px 16px 28px;
`,kz=d.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;
`,jz=d.h2`
  margin: 0;
  font-size: 1.55rem;
  font-weight: 700;
  line-height: 1.25;
  flex: 1;
`,Sz=d.span`
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
`,Cz=d.div`
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
`,$z=d.div`
  margin: 0 0 20px;
  font-size: 0.98rem;
  line-height: 1.55;
  color: ${({theme:e})=>e.colors.text700};
`,Ez=d.section`
  margin-bottom: 22px;
`,Pz=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 10px;
`,Iz=d.h3`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
`,Tz=d.span`
  font-size: 0.72rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary100};
  color: ${({theme:e})=>e.colors.primary700};
`,Rz=d.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 4px;
`,Mz=d.div`
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
`,Yu=d.div`
  border-bottom: 1px solid ${({theme:e})=>e.colors.border200};
  padding: 12px 0;
  color: ${({theme:e})=>e.colors.text900};
`,Gu=d.div`
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.4;
`,is=d.div`
  margin-top: 8px;
  font-size: 0.88rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.text700};
`,zz=d.div`
  margin-top: 22px;

  h3 {
    margin: 0 0 10px;
    font-size: 1.05rem;
    font-weight: 600;
  }
`,Az=d.p`
  margin: 0 0 10px;
  font-size: 0.88rem;
  line-height: 1.45;
  color: ${({theme:e})=>e.colors.text700};
`,_z={wifi:"Wi-Fi",parking:"Parking",tea:"Tea"};function Nz({place:e}){var w,C,m;const[t,n]=y.useState("detail"),[r,i]=y.useState(0),o=y.useMemo(()=>{var v;if(!e)return null;const x=e.photos??[],L=((v=e.thumbnailUrl)==null?void 0:v.trim())||x[0]||"";return Da({...e,photos:x,thumbnailUrl:L,id:e.id||"preview"})},[e]),s=y.useMemo(()=>o?Vp(o):[],[o]);if(!o)return l.jsxs(y4,{children:[l.jsx(v4,{children:"미리보기"}),l.jsx("p",{style:{margin:0,color:"#71717a",fontSize:13},children:"편집 중인 명상지가 없습니다."})]});const a=(o.programs??[]).filter(x=>x.status==="ongoing"),c=(o.programs??[]).filter(x=>x.status==="past"),u=o.venueKind==="명상센터"?"명상센터":"명상지",p=(w=o.detailSections)==null?void 0:w.find(x=>x.title.toLowerCase().includes("유의사항")),f=o.facilities??[],h=oE(o),g=bl(o.regionId),b=s.length>0?r%s.length:0;return l.jsxs(y4,{children:[l.jsx(v4,{children:"미리보기"}),l.jsxs(lz,{children:[l.jsx(w4,{type:"button",$active:t==="detail",onClick:()=>n("detail"),children:"상세 페이지"}),l.jsx(w4,{type:"button",$active:t==="list",onClick:()=>n("list"),children:"목록 카드"})]}),t==="list"?l.jsx(az,{children:l.jsxs(cz,{children:[l.jsx(uz,{children:h?l.jsx("img",{src:h,alt:""}):l.jsx(Ku,{style:{height:120},children:"사진 없음"})}),l.jsxs(dz,{children:[l.jsx(pz,{children:o.name||"이름 미입력"}),l.jsx(fz,{children:g}),((C=o.hashtags)==null?void 0:C.length)>0&&l.jsx(hz,{children:o.hashtags.slice(0,2).map(x=>l.jsx(gz,{children:x},x))})]})]})}):l.jsx(sz,{children:l.jsxs(mz,{children:[l.jsxs(xz,{children:[l.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),l.jsx(Lz,{children:"상세 페이지"})]}),s.length>0?l.jsxs(yz,{children:[l.jsx("img",{src:s[b],alt:""}),s.length>1&&l.jsx(vz,{children:s.map((x,L)=>l.jsx("button",{type:"button","aria-label":`${L+1}번째 사진`,onClick:()=>i(L),style:{padding:0,border:"none",background:"none",cursor:"pointer"},children:l.jsx(wz,{$active:L===b})},L))})]}):l.jsx(Ku,{children:"대표 사진을 추가하세요"}),l.jsxs(bz,{children:[l.jsxs(kz,{children:[l.jsx(jz,{children:o.name||"이름 미입력"}),l.jsx(Sz,{"aria-hidden":!0,children:l.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})})]}),l.jsxs(Cz,{children:[l.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),l.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),o.address||"주소 미입력"]}),l.jsx($z,{children:l.jsx(wl,{markdown:o.shortDescription,fallback:"한 줄 소개를 입력하세요."})}),(o.programs??[]).length>0&&l.jsxs(Ez,{children:[l.jsxs(Pz,{children:[l.jsx(Iz,{children:"프로그램 · 후기"}),l.jsx(Tz,{children:u})]}),a.length>0?l.jsx(Rz,{children:a.map(x=>{const L=Tx(x.imageUrl,x.imageUrls)[0];return l.jsxs(Mz,{children:[L?l.jsx("img",{src:L,alt:""}):l.jsx(Ku,{style:{height:108},children:"사진"}),l.jsx("span",{children:x.title||"(제목 없음)"})]},x.id)})}):l.jsxs(is,{children:["지난 프로그램·후기 (",c.length,")"]})]}),l.jsxs(Yu,{children:[l.jsx(Gu,{children:"입장료·이용 요금"}),l.jsx(is,{children:(m=o.admissionFee)!=null&&m.trim()?l.jsx(h1,{children:l.jsx(Wi,{children:o.admissionFee})}):"현장·예약 시 안내"})]}),l.jsxs(Yu,{children:[l.jsx(Gu,{children:"유의사항"}),l.jsx(is,{children:p!=null&&p.body?l.jsx(h1,{children:l.jsx(Wi,{children:p.body})}):"등록된 유의사항이 없습니다."})]}),f.length>0&&l.jsxs(Yu,{children:[l.jsx(Gu,{children:"시설 정보"}),l.jsx(is,{children:f.map(x=>_z[x]??x).join(" · ")})]}),l.jsxs(zz,{children:[l.jsx("h3",{children:"위치"}),o.address?l.jsx(Az,{children:o.address}):null,l.jsx(oz,{address:o.address})]})]})]})})]})}const Oz=Ke`
  from { opacity: 0; }
  to { opacity: 1; }
`,Dz=Ke`
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,Bz=d.div`
  position: fixed;
  inset: 0;
  z-index: 500;
  background: rgba(0, 0, 0, 0.62);
  display: grid;
  place-items: center;
  padding: 20px;
  animation: ${Oz} 0.18s ease both;
`,Fz=d.div`
  width: min(100%, 360px);
  border-radius: 14px;
  border: 1px solid #3f3f46;
  background: #18181b;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.45);
  animation: ${Dz} 0.22s cubic-bezier(0.22, 1, 0.36, 1) both;
  overflow: hidden;
`,Hz=d.div`
  padding: 22px 22px 18px;
`,Uz=d.h3`
  margin: 0 0 10px;
  font-size: 16px;
  font-weight: 600;
  color: #f4f4f5;
`,Vz=d.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.55;
  color: #a1a1aa;
`,Wz=d.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 14px 18px 18px;
  border-top: 1px solid #27272a;
  background: #111114;
`;function Nr({open:e,title:t,message:n,confirmLabel:r="확인",cancelLabel:i="취소",onConfirm:o,onCancel:s}){const a=y.useCallback(c=>{c.target===c.currentTarget&&s()},[s]);return y.useEffect(()=>{if(!e)return;const c=u=>{u.key==="Escape"&&s()};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[e,s]),e?l.jsx(Bz,{role:"presentation",onClick:a,children:l.jsxs(Fz,{role:"dialog","aria-modal":"true","aria-labelledby":"admin-confirm-title",children:[l.jsxs(Hz,{children:[l.jsx(Uz,{id:"admin-confirm-title",children:t}),l.jsx(Vz,{children:n})]}),l.jsxs(Wz,{children:[l.jsx(Ze,{$variant:"ghost",type:"button",onClick:s,children:i}),l.jsx(Ze,{$variant:"primary",type:"button",onClick:o,children:r})]})]})}):null}const Kz=d.div`
  display: inline-block;
  max-width: 100%;
`,Yz=d.div`
  width: 252px;
  max-width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #3f3f46;
  background: #09090b;
`,Gz=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`,Zz=d.div`
  font-size: 13px;
  font-weight: 600;
  color: #f4f4f5;
`,b4=d.button`
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
`,qz=d.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  margin-bottom: 4px;
`,Qz=d.span`
  text-align: center;
  font-size: 10px;
  font-weight: 600;
  color: #71717a;
  padding: 2px 0;
`,Xz=d.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
`,Jz=d.button`
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
`,eA=d.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-size: 12px;
  color: #a1a1aa;
`,tA=d.button`
  border: none;
  background: none;
  color: #71717a;
  font-size: 12px;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: #e4e4e7;
  }
`,nA=d.p`
  margin: 6px 0 0;
  font-size: 12px;
  color: #71717a;
  line-height: 1.45;
`,rA=["일","월","화","수","목","금","토"];function k4(e){const[t,n,r]=e.split("-").map(Number);return new Date(t,n-1,r)}function Zu(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}function qu(e,t){return e.localeCompare(t)}function iA(e,t){return`${e}-${String(t+1).padStart(2,"0")}`}function oA({startDate:e,endDate:t,onChange:n,allowClear:r=!0,hint:i}){const o=e?k4(e):new Date(`${sl()}T12:00:00+09:00`),[s,a]=y.useState(o.getFullYear()),[c,u]=y.useState(o.getMonth()),[p,f]=y.useState(null),h=sl(),g=iL(e,t),b=y.useMemo(()=>{const L=new Date(s,c,1).getDay(),v=new Date(s,c+1,0).getDate(),$=new Date(s,c,0).getDate(),k=[];for(let S=L-1;S>=0;S-=1){const M=$-S,T=new Date(s,c-1,M);k.push({iso:Zu(T),day:M,inMonth:!1})}for(let S=1;S<=v;S+=1){const M=new Date(s,c,S);k.push({iso:Zu(M),day:S,inMonth:!0})}for(;k.length%7!==0;){const S=k.length-(L+v)+1,M=new Date(s,c+1,S);k.push({iso:Zu(M),day:S,inMonth:!1})}return k},[c,s]),w=L=>{const v=new Date(s,c+L,1);a(v.getFullYear()),u(v.getMonth())},C=(L,v)=>{if(!v||L===v){n({startDate:L,endDate:L});return}qu(L,v)<=0?n({startDate:L,endDate:v}):n({startDate:v,endDate:L})},m=(L,v)=>{if(!v){const $=k4(L);a($.getFullYear()),u($.getMonth())}if(!p){f(L),n({startDate:L,endDate:L});return}C(p,L),f(null)},x=L=>{if(!e)return!1;const v=t??e;return qu(e,L)<=0&&qu(L,v)<=0};return l.jsxs(Kz,{children:[l.jsxs(Yz,{children:[l.jsxs(Gz,{children:[l.jsx(b4,{type:"button","aria-label":"이전 달",onClick:()=>w(-1),children:"‹"}),l.jsxs(Zz,{children:[s,"년 ",c+1,"월"]}),l.jsx(b4,{type:"button","aria-label":"다음 달",onClick:()=>w(1),children:"›"})]}),l.jsx(qz,{children:rA.map(L=>l.jsx(Qz,{children:L},L))}),l.jsx(Xz,{children:b.map(({iso:L,day:v,inMonth:$})=>{const k=t??e,S=e===L,M=k===L&&e!==k,T=x(L);return l.jsx(Jz,{type:"button",$muted:!$,$inRange:T&&!S&&!M,$rangeStart:S,$rangeEnd:M,$today:L===h,onClick:()=>m(L,$),children:v},`${iA(s,c)}-${L}`)})}),l.jsxs(eA,{children:[l.jsx("span",{children:g??"날짜를 선택하세요"}),r&&(e||t)?l.jsx(tA,{type:"button",onClick:()=>{f(null),n({startDate:void 0,endDate:void 0})},children:"초기화"}):null]})]}),i?l.jsx(nA,{children:i}):null]})}const lA="유의사항";function sA(e){var t;return((t=e==null?void 0:e.find(n=>n.title.includes("유의사항")))==null?void 0:t.body)??""}function aA(e,t){const n=[...e??[]],r=n.findIndex(o=>o.title.includes("유의사항")),i={title:lA,body:t};return r>=0?n[r]=i:n.push(i),n}function cA(e){return(e??[]).join(", ")}function uA(e){return e.split(/[,，]/).map(t=>t.trim()).filter(Boolean)}function os(e){var r;const t=e.photos??[],n=((r=e.thumbnailUrl)==null?void 0:r.trim())||t[0]||"";return Da({...e,photos:t,thumbnailUrl:n})}function dA(){const[e,t]=y.useState([]),[n,r]=y.useState(null),[i,o]=y.useState(!1),[s,a]=y.useState(null),[c,u]=y.useState("basic"),[p,f]=y.useState(null),[h,g]=y.useState(!1),[b,w]=y.useState(!1),[C,m]=y.useState(!1),[x,L]=y.useState(null),v=y.useCallback(async()=>{f(null);try{const A=await jR();t(A)}catch(A){f(A instanceof Error?A.message:"목록 로드 실패")}},[]);y.useEffect(()=>{v()},[v]);const $=y.useMemo(()=>e.find(A=>A.id===n)??null,[e,n]),k=y.useMemo(()=>x?e.find(A=>A.id===x)??null:null,[e,x]);y.useEffect(()=>{if($&&!i){const A=os(structuredClone($.data));a(A)}},[$,i]);const S=()=>{const A=NR(e$());r(null),o(!0),a(A),u("basic")},M=()=>{if(s!==null){w(!0);return}S()},T=async()=>{if(s){g(!0),f(null);try{const A=os(s),z=await CR(i?null:n,A.regionId,A);await v(),r(z.id),o(!1),a(os(z.data)),u("basic")}catch(A){f(A instanceof Error?A.message:"저장 실패")}finally{g(!1)}}},R=async()=>{if(!x)return;const A=x;L(null),f(null);try{await $R(A),n===A&&(r(null),a(null),o(!1)),await v()}catch(z){f(z instanceof Error?z.message:"삭제 실패")}},I=(A,z)=>{if(!s)return;const N=[...s.programs??[]],j={...N[A],...z};N[A]={...j,status:Xd(j)},a({...s,programs:N})},P=A=>{if(!s)return;const z=[...s.programs??[]],N=A==="event"?oL():{},j={id:OR(z),kind:A,title:A==="event"?"새 행사":"새 프로그램",status:"ongoing",imageUrl:"",imageUrls:[],bodyFromVenue:"",reviews:[],...N};z.push({...j,status:Xd(j)}),a({...s,programs:z}),u("programs")},_=A=>{if(!s)return;const z=(s.programs??[]).filter((N,j)=>j!==A);a({...s,programs:z})},B=A=>{s&&a({...s,photos:A,thumbnailUrl:A[0]??s.thumbnailUrl})},H=y.useMemo(()=>s?os(s):null,[s]),W={basic:"기본",programs:"행사·프로그램"};return l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(260px, 1fr) minmax(340px, 1.15fr) minmax(300px, 380px)",gap:16,alignItems:"start"},children:[l.jsxs(mn,{children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:12},children:[l.jsx("h2",{style:{margin:0,fontSize:18},children:"명상지·센터"}),l.jsx(Ze,{$variant:"primary",type:"button",onClick:M,children:"+ 등록"})]}),p&&l.jsx(mr,{children:p}),l.jsxs(Yp,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"이름"}),l.jsx("th",{children:"지역"}),l.jsx("th",{children:"구분"}),l.jsx("th",{children:"행사·프로그램"}),l.jsx("th",{})]})}),l.jsx("tbody",{children:e.map(A=>l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("button",{type:"button",style:{background:"none",border:"none",color:"#fff",cursor:"pointer",padding:0},onClick:()=>{r(A.id),o(!1)},children:A.name||A.id})}),l.jsx("td",{children:bl(A.regionId)}),l.jsx("td",{children:A.data.venueKind??"명상지"}),l.jsx("td",{children:(A.data.programs??[]).length}),l.jsx("td",{children:l.jsx(Ze,{$variant:"danger",type:"button",onClick:()=>L(A.id),children:"삭제"})})]},A.id))})]})]}),l.jsx(mn,{children:s?l.jsxs(l.Fragment,{children:[!i&&n?l.jsxs("p",{style:{margin:"0 0 12px",color:"#71717a",fontSize:13},children:["번호: ",n]}):l.jsx("p",{style:{margin:"0 0 12px",color:"#71717a",fontSize:13},children:"저장 시 번호가 자동 부여됩니다."}),l.jsxs("div",{style:{display:"flex",gap:8,marginBottom:12,flexWrap:"wrap"},children:[["basic","programs"].map(A=>l.jsx(Ze,{$variant:c===A?"primary":"ghost",type:"button",onClick:()=>u(A),children:W[A]},A)),l.jsx(Ze,{$variant:"primary",type:"button",onClick:()=>m(!0),disabled:h,style:{marginLeft:"auto"},children:h?"저장 중…":"저장"})]}),c==="basic"&&l.jsxs(l.Fragment,{children:[l.jsx(p4,{photos:s.photos??[],onChange:B,maxPhotos:10}),l.jsx(EM,{value:s.regionId,onChange:A=>a({...s,regionId:A})}),l.jsxs(De,{children:[l.jsx(Oe,{children:"구분"}),l.jsxs("select",{value:s.venueKind??"명상지",onChange:A=>a({...s,venueKind:A.target.value}),style:{width:"100%",padding:8,borderRadius:8,background:"#09090b",color:"#fff",border:"1px solid #3f3f46"},children:[l.jsx("option",{value:"명상지",children:"명상지"}),l.jsx("option",{value:"명상센터",children:"명상센터"})]})]}),l.jsxs(De,{children:[l.jsx(Oe,{children:"이름"}),l.jsx(Jt,{value:s.name,onChange:A=>a({...s,name:A.target.value})})]}),l.jsx(Wu,{label:"한 줄 소개 (마크다운)",value:s.shortDescription,onChange:A=>a({...s,shortDescription:A}),placeholder:"명상지를 한 줄로 소개해 주세요",minHeight:72}),l.jsx(KM,{value:s.address,onChange:A=>a({...s,address:A})},i?"new":n??"edit"),l.jsx(Wu,{label:"입장료·이용 요금 (마크다운)",value:s.admissionFee??"",onChange:A=>a({...s,admissionFee:A}),placeholder:"예: 무료 / 성인 5,000원 / 프로그램별 상이",minHeight:88}),l.jsx(Wu,{label:"유의사항 (마크다운)",value:sA(s.detailSections),onChange:A=>a({...s,detailSections:aA(s.detailSections,A)}),placeholder:`- 조용히 이용해 주세요
- 사전 예약 필수`,minHeight:100}),l.jsxs(De,{children:[l.jsx(Oe,{children:"시설 정보"}),l.jsx(Jt,{value:cA(s.facilities),onChange:A=>a({...s,facilities:uA(A.target.value)}),placeholder:"Wi-Fi, 주차, 다과·차 (쉼표로 구분)"}),l.jsx("p",{style:{margin:"6px 0 0",fontSize:12,color:"#71717a"},children:"원하는 시설명을 쉼표로 구분해 직접 입력하세요."})]})]}),c==="programs"&&l.jsxs(l.Fragment,{children:[l.jsx("p",{style:{margin:"0 0 12px",color:"#a1a1aa",fontSize:13},children:"행사·프로그램은 이 장소에만 속합니다. 다른 명상지·센터와 공유되지 않습니다."}),l.jsxs("div",{style:{display:"flex",gap:8,marginBottom:12},children:[l.jsx(Ze,{$variant:"ghost",type:"button",onClick:()=>P("event"),children:"+ 행사"}),l.jsx(Ze,{$variant:"ghost",type:"button",onClick:()=>P("program"),children:"+ 프로그램"})]}),(s.programs??[]).map((A,z)=>l.jsxs(mn,{style:{marginBottom:12,background:"#111114"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8,gap:8},children:[l.jsxs("strong",{style:{fontSize:14},children:[A.kind==="event"?"행사":"프로그램"," · ",A.title||"(제목 없음)"]}),l.jsx("span",{style:{fontSize:12,padding:"2px 8px",borderRadius:999,background:A.status==="past"?"#27272a":"rgba(124, 58, 237, 0.25)",color:A.status==="past"?"#a1a1aa":"#e9d5ff",flexShrink:0},children:rL(A)}),l.jsx(Ze,{$variant:"danger",type:"button",onClick:()=>_(z),children:"삭제"})]}),l.jsxs(De,{children:[l.jsx(Oe,{children:"구분"}),l.jsxs("select",{value:A.kind??"program",onChange:N=>I(z,{kind:N.target.value}),style:{width:"100%",padding:8,borderRadius:8,background:"#09090b",color:"#fff",border:"1px solid #3f3f46"},children:[l.jsx("option",{value:"event",children:"행사"}),l.jsx("option",{value:"program",children:"프로그램"})]})]}),l.jsxs(De,{children:[l.jsx(Oe,{children:"제목"}),l.jsx(Jt,{value:A.title,onChange:N=>I(z,{title:N.target.value})})]}),l.jsxs(De,{children:[l.jsx(Oe,{children:A.kind==="event"?"행사 기간":"기간 (선택)"}),l.jsx(oA,{startDate:A.startDate,endDate:A.endDate,onChange:N=>I(z,N),allowClear:A.kind!=="event",hint:A.kind==="event"?"시작일 → 종료일 순으로 두 번 클릭하세요. 종료일이 지나면 자동으로 완료됩니다.":"기간을 넣으면 종료일 이후 자동으로 완료 처리됩니다."})]}),l.jsx(p4,{label:"사진",photos:Tx(A.imageUrl,A.imageUrls),onChange:N=>I(z,LM(N)),maxPhotos:10,hint:"첫 사진이 대표입니다."}),l.jsxs(De,{children:[l.jsx(Oe,{children:"소개 (마크다운)"}),l.jsx(Ti,{style:{minHeight:120},value:A.bodyFromVenue,onChange:N=>I(z,{bodyFromVenue:N.target.value})})]})]},A.id)),(s.programs??[]).length===0?l.jsx("p",{style:{color:"#71717a",fontSize:13},children:"등록된 행사·프로그램이 없습니다."}):null]})]}):l.jsx("p",{style:{color:"#a1a1aa"},children:"왼쪽에서 항목을 선택하거나 새로 등록하세요."})}),l.jsx(Nz,{place:H}),l.jsx(Nr,{open:b,title:"새로 등록",message:"이전에 작성 중인 내용이 사라집니다. 새로 등록하시겠습니까?",cancelLabel:"계속 작성",confirmLabel:"새로 등록",onCancel:()=>w(!1),onConfirm:()=>{w(!1),S()}}),l.jsx(Nr,{open:C,title:"저장",message:i?"등록하시겠습니까?":"저장하시겠습니까?",cancelLabel:"취소",confirmLabel:"저장",onCancel:()=>m(!1),onConfirm:()=>{m(!1),T()}}),l.jsx(Nr,{open:x!==null,title:"삭제",message:k?`「${k.name||k.id}」을(를) 삭제할까요? 삭제 후에는 되돌릴 수 없습니다.`:"삭제할까요? 삭제 후에는 되돌릴 수 없습니다.",cancelLabel:"취소",confirmLabel:"삭제",onCancel:()=>L(null),onConfirm:()=>void R()})]})}function pA(){const[e,t]=y.useState([]),[n,r]=y.useState(null),[i,o]=y.useState(!1),[s,a]=y.useState(null),[c,u]=y.useState(null),[p,f]=y.useState(!1),[h,g]=y.useState(null),b=y.useCallback(async()=>{try{t(await ER())}catch(v){u(v instanceof Error?v.message:"로드 실패")}},[]);y.useEffect(()=>{b()},[b]);const w=v=>{r(v.id),o(!1),a(structuredClone(v.data))},C=()=>{r(null),o(!0),a(DR())},m=async()=>{if(s){u(null);try{const v=await PR(i?null:n,s);await b(),r(v.id),o(!1),a(v.data)}catch(v){u(v instanceof Error?v.message:"저장 실패")}}},x=async()=>{if(!h)return;const v=h;g(null);try{await TR(v),n===v&&(r(null),o(!1),a(null)),await b()}catch($){u($ instanceof Error?$.message:"삭제 실패")}},L=h?e.find(v=>v.id===h):null;return l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1.2fr",gap:16},children:[l.jsxs(mn,{children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:12},children:[l.jsx("h2",{style:{margin:0},children:"전문가"}),l.jsx(Ze,{$variant:"primary",type:"button",onClick:C,children:"+ 등록"})]}),c&&l.jsx(mr,{children:c}),l.jsxs(Yp,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"이름"}),l.jsx("th",{})]})}),l.jsx("tbody",{children:e.map(v=>l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("button",{type:"button",style:{background:"none",border:"none",color:"#fff",cursor:"pointer"},onClick:()=>w(v),children:v.name||`전문가 ${v.id}`})}),l.jsx("td",{children:l.jsx(Ze,{$variant:"danger",type:"button",onClick:()=>g(v.id),children:"삭제"})})]},v.id))})]})]}),l.jsx(mn,{children:s?l.jsxs(l.Fragment,{children:[!i&&n?l.jsxs("p",{style:{margin:"0 0 12px",color:"#71717a",fontSize:13},children:["번호: ",n]}):l.jsx("p",{style:{margin:"0 0 12px",color:"#71717a",fontSize:13},children:"저장 시 번호가 자동 부여됩니다."}),l.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:12},children:l.jsx(Ze,{$variant:"primary",type:"button",onClick:()=>f(!0),children:"저장"})}),l.jsxs(De,{children:[l.jsx(Oe,{children:"이름"}),l.jsx(Jt,{value:s.name,onChange:v=>a({...s,name:v.target.value})})]}),l.jsxs(De,{children:[l.jsx(Oe,{children:"소개"}),l.jsx(Ti,{style:{minHeight:120,fontFamily:"inherit",fontSize:14},value:s.intro,onChange:v=>a({...s,intro:v.target.value})})]}),l.jsxs(De,{children:[l.jsx(Oe,{children:"아바타 URL"}),l.jsx(Jt,{value:s.avatarUrl,onChange:v=>a({...s,avatarUrl:v.target.value})})]})]}):l.jsx("p",{style:{color:"#a1a1aa"},children:"항목을 선택하거나 새로 등록하세요."})}),l.jsx(Nr,{open:p,title:"저장",message:i?"등록하시겠습니까?":"저장하시겠습니까?",cancelLabel:"취소",confirmLabel:"저장",onCancel:()=>f(!1),onConfirm:()=>{f(!1),m()}}),l.jsx(Nr,{open:h!==null,title:"삭제",message:L?`「${L.name||L.id}」을(를) 삭제할까요?`:"삭제할까요?",cancelLabel:"취소",confirmLabel:"삭제",onCancel:()=>g(null),onConfirm:()=>void x()})]})}function fA(){return{category:"공지",title:"",date:new Date().toISOString().slice(0,10),summary:"",body:"",bullets:"",footer:""}}function j4(e){const t=e.details;return{category:String(e.category??"공지"),title:String(e.title??""),date:String(e.date??""),summary:String(e.summary??""),body:((t==null?void 0:t.paragraphs)??[]).join(`

`),bullets:((t==null?void 0:t.bullets)??[]).join(`
`),footer:String((t==null?void 0:t.footer)??"")}}function hA(e){const t=e.body.split(/\n{2,}/).map(i=>i.trim()).filter(Boolean),n=e.bullets.split(`
`).map(i=>i.trim()).filter(Boolean),r={paragraphs:t.length>0?t:[e.summary.trim()||e.title.trim()||"내용"]};return n.length>0&&(r.bullets=n),e.footer.trim()&&(r.footer=e.footer.trim()),{category:e.category.trim()||"공지",title:e.title.trim(),date:e.date.trim(),summary:e.summary.trim(),details:r}}function gA(){const[e,t]=y.useState([]),[n,r]=y.useState(null),[i,o]=y.useState(!1),[s,a]=y.useState(null),[c,u]=y.useState(null),[p,f]=y.useState(!1),[h,g]=y.useState(null),b=y.useCallback(async()=>{try{t(await RR())}catch(v){u(v instanceof Error?v.message:"로드 실패")}},[]);y.useEffect(()=>{b()},[b]);const w=()=>{r(null),o(!0),a(fA())},C=v=>{r(v.id),o(!1),a(j4(v.payload))},m=async()=>{if(s){u(null);try{const v=await MR(i?null:n,hA(s));await b(),r(v.id),o(!1),a(j4(v.payload))}catch(v){u(v instanceof Error?v.message:"저장 실패")}}},x=async()=>{if(!h)return;const v=h;g(null);try{await AR(v),n===v&&(r(null),o(!1),a(null)),await b()}catch($){u($ instanceof Error?$.message:"삭제 실패")}},L=h?e.find(v=>v.id===h):null;return l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1.2fr",gap:16},children:[l.jsxs(mn,{children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:12},children:[l.jsx("h2",{style:{margin:0},children:"공지"}),l.jsx(Ze,{$variant:"primary",type:"button",onClick:w,children:"+ 등록"})]}),c&&l.jsx(mr,{children:c}),l.jsxs(Yp,{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"제목"}),l.jsx("th",{})]})}),l.jsx("tbody",{children:e.map(v=>l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("button",{type:"button",style:{background:"none",border:"none",color:"#fff",cursor:"pointer"},onClick:()=>C(v),children:v.title||v.payload.title||""||`공지 ${v.id}`})}),l.jsx("td",{children:l.jsx(Ze,{$variant:"danger",type:"button",onClick:()=>g(v.id),children:"삭제"})})]},v.id))})]})]}),l.jsx(mn,{children:s?l.jsxs(l.Fragment,{children:[!i&&n?l.jsxs("p",{style:{margin:"0 0 12px",color:"#71717a",fontSize:13},children:["번호: ",n]}):l.jsx("p",{style:{margin:"0 0 12px",color:"#71717a",fontSize:13},children:"저장 시 번호가 자동 부여됩니다."}),l.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:12},children:l.jsx(Ze,{$variant:"primary",type:"button",onClick:()=>f(!0),children:"저장"})}),l.jsxs(De,{children:[l.jsx(Oe,{children:"분류"}),l.jsx(Jt,{value:s.category,onChange:v=>a({...s,category:v.target.value}),placeholder:"예: 공지, 업데이트"})]}),l.jsxs(De,{children:[l.jsx(Oe,{children:"제목"}),l.jsx(Jt,{value:s.title,onChange:v=>a({...s,title:v.target.value})})]}),l.jsxs(De,{children:[l.jsx(Oe,{children:"날짜"}),l.jsx(Jt,{type:"date",value:s.date,onChange:v=>a({...s,date:v.target.value})})]}),l.jsxs(De,{children:[l.jsx(Oe,{children:"목록 요약"}),l.jsx(Ti,{style:{minHeight:72,fontFamily:"inherit",fontSize:14},value:s.summary,onChange:v=>a({...s,summary:v.target.value}),placeholder:"공지 목록에 보이는 한두 줄 요약"})]}),l.jsxs(De,{children:[l.jsx(Oe,{children:"본문"}),l.jsx(Ti,{style:{minHeight:160,fontFamily:"inherit",fontSize:14},value:s.body,onChange:v=>a({...s,body:v.target.value}),placeholder:"문단마다 빈 줄로 구분"})]}),l.jsxs(De,{children:[l.jsx(Oe,{children:"목록 (선택)"}),l.jsx(Ti,{style:{minHeight:88,fontFamily:"inherit",fontSize:14},value:s.bullets,onChange:v=>a({...s,bullets:v.target.value}),placeholder:"한 줄에 한 항목"})]}),l.jsxs(De,{children:[l.jsx(Oe,{children:"하단 문구 (선택)"}),l.jsx(Jt,{value:s.footer,onChange:v=>a({...s,footer:v.target.value})})]})]}):l.jsx("p",{style:{color:"#a1a1aa"},children:"공지를 선택하거나 새로 등록하세요."})}),l.jsx(Nr,{open:p,title:"저장",message:i?"등록하시겠습니까?":"저장하시겠습니까?",cancelLabel:"취소",confirmLabel:"저장",onCancel:()=>f(!1),onConfirm:()=>{f(!1),m()}}),l.jsx(Nr,{open:h!==null,title:"삭제",message:L?`「${L.title||L.payload.title||L.id}」을(를) 삭제할까요?`:"삭제할까요?",cancelLabel:"취소",confirmLabel:"삭제",onCancel:()=>g(null),onConfirm:()=>void x()})]})}const mA=[{to:"/admin",label:"트래픽 현황",end:!0},{to:"/admin/places",label:"명상지·센터"},{to:"/admin/experts",label:"전문가"},{to:"/admin/notices",label:"공지"}];function xA(){const[e,t]=y.useState(!0),n=mt(),r=Ii(i=>i.logout);return l.jsxs(FR,{children:[l.jsxs(HR,{$open:e,children:[l.jsx("div",{style:{padding:"16px",fontWeight:700,fontSize:15},children:"명상맵 Admin"}),l.jsx("nav",{children:mA.map(i=>l.jsx(E3,{to:i.to,end:i.end,style:{textDecoration:"none"},children:({isActive:o})=>l.jsx(KR,{as:"span",$active:o,children:i.label})},i.to))})]}),l.jsxs(UR,{children:[l.jsxs(VR,{children:[l.jsx(Ze,{$variant:"ghost",type:"button",onClick:()=>t(i=>!i),children:"메뉴"}),l.jsxs("div",{style:{display:"flex",gap:8},children:[l.jsx(Ze,{$variant:"ghost",type:"button",onClick:()=>n("/"),children:"앱으로"}),l.jsx(Ze,{$variant:"ghost",type:"button",onClick:()=>{r().then(()=>n("/admin/login"))},children:"로그아웃"})]})]}),l.jsx(WR,{children:l.jsx(Sp,{})})]})]})}function LA(){const e=Ii(r=>r.bootstrap),t=Ii(r=>r.ready),n=Ii(r=>r.authenticated);return y.useEffect(()=>{e()},[e]),t?n?l.jsx(Sp,{}):l.jsx(a9,{to:"/admin/login",replace:!0}):null}const yA=[{path:"/admin/login",element:l.jsx(ZR,{})},{path:"/admin",element:l.jsx(LA,{}),children:[{element:l.jsx(xA,{}),children:[{index:!0,element:l.jsx(xM,{})},{path:"places",element:l.jsx(dA,{})},{path:"experts",element:l.jsx(pA,{})},{path:"notices",element:l.jsx(gA,{})}]}]},{path:"/",element:l.jsx(F9,{}),children:[{index:!0,element:l.jsx(Xf,{})},{path:"meditation",element:l.jsx(Xf,{})},{path:"meditation/map",element:l.jsx(jv,{})},{path:"meditation/expert/:expertId/class/:programId",element:l.jsx(w$,{})},{path:"meditation/expert/:expertId",element:l.jsx(f$,{})},{path:"meditation/region/:regionId/experts",element:l.jsx(zC,{})},{path:"meditation/region/:regionId",element:l.jsx(bC,{})},{path:"meditation/place/:placeId",element:l.jsx(VE,{})},{path:"favorites",element:l.jsx(PP,{})},{path:"profile",element:l.jsx($T,{})},{path:"profile/expert",element:l.jsx(XT,{})},{path:"auth/oauth",element:l.jsx(eR,{})},{path:"notice",element:l.jsx(pP,{})},{path:"inquiry",element:l.jsx(wP,{})},{path:"service-info",element:l.jsx(pR,{})},{path:"*",element:l.jsx(LR,{})}]}],vA=()=>GL(yA),wA=()=>l.jsx(L9,{children:l.jsx(vA,{})}),bA=d.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,kA=()=>(y.useEffect(()=>{qt.getState().bootstrapAuth(),Xt.getState().hydrate().then(()=>_r.getState().pullFromServer())},[]),l.jsxs(bA,{children:[l.jsx(xL,{}),l.jsx(wA,{})]})),jA=$8`
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
`;Qu.createRoot(document.getElementById("root")).render(l.jsx(We.StrictMode,{children:l.jsxs(j8,{theme:wt,children:[l.jsx(jA,{}),l.jsx(kA,{})]})}));
