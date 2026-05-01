function S3(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var kl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ss(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yf={exports:{}},as={},vf={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mo=Symbol.for("react.element"),C3=Symbol.for("react.portal"),j3=Symbol.for("react.fragment"),$3=Symbol.for("react.strict_mode"),E3=Symbol.for("react.profiler"),P3=Symbol.for("react.provider"),T3=Symbol.for("react.context"),I3=Symbol.for("react.forward_ref"),R3=Symbol.for("react.suspense"),z3=Symbol.for("react.memo"),M3=Symbol.for("react.lazy"),z1=Symbol.iterator;function _3(e){return e===null||typeof e!="object"?null:(e=z1&&e[z1]||e["@@iterator"],typeof e=="function"?e:null)}var wf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bf=Object.assign,kf={};function oi(e,t,n){this.props=e,this.context=t,this.refs=kf,this.updater=n||wf}oi.prototype.isReactComponent={};oi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};oi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Sf(){}Sf.prototype=oi.prototype;function pc(e,t,n){this.props=e,this.context=t,this.refs=kf,this.updater=n||wf}var fc=pc.prototype=new Sf;fc.constructor=pc;bf(fc,oi.prototype);fc.isPureReactComponent=!0;var M1=Array.isArray,Cf=Object.prototype.hasOwnProperty,hc={current:null},jf={key:!0,ref:!0,__self:!0,__source:!0};function $f(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Cf.call(t,r)&&!jf.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:mo,type:e,key:o,ref:l,props:i,_owner:hc.current}}function N3(e,t){return{$$typeof:mo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function mc(e){return typeof e=="object"&&e!==null&&e.$$typeof===mo}function A3(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var _1=/\/+/g;function Os(e,t){return typeof e=="object"&&e!==null&&e.key!=null?A3(""+e.key):t.toString(36)}function rl(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case mo:case C3:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Os(l,0):r,M1(i)?(n="",e!=null&&(n=e.replace(_1,"$&/")+"/"),rl(i,t,n,"",function(c){return c})):i!=null&&(mc(i)&&(i=N3(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(_1,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",M1(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+Os(o,a);l+=rl(o,t,n,u,i)}else if(u=_3(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+Os(o,a++),l+=rl(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function $o(e,t,n){if(e==null)return e;var r=[],i=0;return rl(e,r,"","",function(o){return t.call(n,o,i++)}),r}function F3(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var it={current:null},il={transition:null},O3={ReactCurrentDispatcher:it,ReactCurrentBatchConfig:il,ReactCurrentOwner:hc};function Ef(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:$o,forEach:function(e,t,n){$o(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return $o(e,function(){t++}),t},toArray:function(e){return $o(e,function(t){return t})||[]},only:function(e){if(!mc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};se.Component=oi;se.Fragment=j3;se.Profiler=E3;se.PureComponent=pc;se.StrictMode=$3;se.Suspense=R3;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O3;se.act=Ef;se.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=bf({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=hc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Cf.call(t,u)&&!jf.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:mo,type:e.type,key:i,ref:o,props:r,_owner:l}};se.createContext=function(e){return e={$$typeof:T3,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:P3,_context:e},e.Consumer=e};se.createElement=$f;se.createFactory=function(e){var t=$f.bind(null,e);return t.type=e,t};se.createRef=function(){return{current:null}};se.forwardRef=function(e){return{$$typeof:I3,render:e}};se.isValidElement=mc;se.lazy=function(e){return{$$typeof:M3,_payload:{_status:-1,_result:e},_init:F3}};se.memo=function(e,t){return{$$typeof:z3,type:e,compare:t===void 0?null:t}};se.startTransition=function(e){var t=il.transition;il.transition={};try{e()}finally{il.transition=t}};se.unstable_act=Ef;se.useCallback=function(e,t){return it.current.useCallback(e,t)};se.useContext=function(e){return it.current.useContext(e)};se.useDebugValue=function(){};se.useDeferredValue=function(e){return it.current.useDeferredValue(e)};se.useEffect=function(e,t){return it.current.useEffect(e,t)};se.useId=function(){return it.current.useId()};se.useImperativeHandle=function(e,t,n){return it.current.useImperativeHandle(e,t,n)};se.useInsertionEffect=function(e,t){return it.current.useInsertionEffect(e,t)};se.useLayoutEffect=function(e,t){return it.current.useLayoutEffect(e,t)};se.useMemo=function(e,t){return it.current.useMemo(e,t)};se.useReducer=function(e,t,n){return it.current.useReducer(e,t,n)};se.useRef=function(e){return it.current.useRef(e)};se.useState=function(e){return it.current.useState(e)};se.useSyncExternalStore=function(e,t,n){return it.current.useSyncExternalStore(e,t,n)};se.useTransition=function(){return it.current.useTransition()};se.version="18.3.1";vf.exports=se;var w=vf.exports;const Re=ss(w),D3=S3({__proto__:null,default:Re},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B3=w,U3=Symbol.for("react.element"),H3=Symbol.for("react.fragment"),V3=Object.prototype.hasOwnProperty,W3=B3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,K3={key:!0,ref:!0,__self:!0,__source:!0};function Pf(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)V3.call(t,r)&&!K3.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:U3,type:e,key:o,ref:l,props:i,_owner:W3.current}}as.Fragment=H3;as.jsx=Pf;as.jsxs=Pf;yf.exports=as;var s=yf.exports,qa={},Tf={exports:{}},kt={},If={exports:{}},Rf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,D){var b=N.length;N.push(D);e:for(;0<b;){var Z=b-1>>>1,q=N[Z];if(0<i(q,D))N[Z]=D,N[b]=q,b=Z;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var D=N[0],b=N.pop();if(b!==D){N[0]=b;e:for(var Z=0,q=N.length,C=q>>>1;Z<C;){var ne=2*(Z+1)-1,ae=N[ne],G=ne+1,H=N[G];if(0>i(ae,b))G<q&&0>i(H,ae)?(N[Z]=H,N[G]=b,Z=G):(N[Z]=ae,N[ne]=b,Z=ne);else if(G<q&&0>i(H,b))N[Z]=H,N[G]=b,Z=G;else break e}}return D}function i(N,D){var b=N.sortIndex-D.sortIndex;return b!==0?b:N.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],c=[],d=1,p=null,m=3,h=!1,y=!1,v=!1,$=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(N){for(var D=n(c);D!==null;){if(D.callback===null)r(c);else if(D.startTime<=N)r(c),D.sortIndex=D.expirationTime,t(u,D);else break;D=n(c)}}function k(N){if(v=!1,g(N),!y)if(n(u)!==null)y=!0,Y(P);else{var D=n(c);D!==null&&V(k,D.startTime-N)}}function P(N,D){y=!1,v&&(v=!1,L(T),T=-1),h=!0;var b=m;try{for(g(D),p=n(u);p!==null&&(!(p.expirationTime>D)||N&&!I());){var Z=p.callback;if(typeof Z=="function"){p.callback=null,m=p.priorityLevel;var q=Z(p.expirationTime<=D);D=e.unstable_now(),typeof q=="function"?p.callback=q:p===n(u)&&r(u),g(D)}else r(u);p=n(u)}if(p!==null)var C=!0;else{var ne=n(c);ne!==null&&V(k,ne.startTime-D),C=!1}return C}finally{p=null,m=b,h=!1}}var S=!1,j=null,T=-1,z=5,R=-1;function I(){return!(e.unstable_now()-R<z)}function E(){if(j!==null){var N=e.unstable_now();R=N;var D=!0;try{D=j(!0,N)}finally{D?M():(S=!1,j=null)}}else S=!1}var M;if(typeof x=="function")M=function(){x(E)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,A=F.port2;F.port1.onmessage=E,M=function(){A.postMessage(null)}}else M=function(){$(E,0)};function Y(N){j=N,S||(S=!0,M())}function V(N,D){T=$(function(){N(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){y||h||(y=!0,Y(P))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(N){switch(m){case 1:case 2:case 3:var D=3;break;default:D=m}var b=m;m=D;try{return N()}finally{m=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,D){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var b=m;m=N;try{return D()}finally{m=b}},e.unstable_scheduleCallback=function(N,D,b){var Z=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?Z+b:Z):b=Z,N){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=b+q,N={id:d++,callback:D,priorityLevel:N,startTime:b,expirationTime:q,sortIndex:-1},b>Z?(N.sortIndex=b,t(c,N),n(u)===null&&N===n(c)&&(v?(L(T),T=-1):v=!0,V(k,b-Z))):(N.sortIndex=q,t(u,N),y||h||(y=!0,Y(P))),N},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(N){var D=m;return function(){var b=m;m=D;try{return N.apply(this,arguments)}finally{m=b}}}})(Rf);If.exports=Rf;var q3=If.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y3=w,bt=q3;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zf=new Set,Ki={};function pr(e,t){Wr(e,t),Wr(e+"Capture",t)}function Wr(e,t){for(Ki[e]=t,e=0;e<t.length;e++)zf.add(t[e])}var cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ya=Object.prototype.hasOwnProperty,Z3=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,N1={},A1={};function G3(e){return Ya.call(A1,e)?!0:Ya.call(N1,e)?!1:Z3.test(e)?A1[e]=!0:(N1[e]=!0,!1)}function Q3(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function X3(e,t,n,r){if(t===null||typeof t>"u"||Q3(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ot(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ze[e]=new ot(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ze[t]=new ot(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ze[e]=new ot(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ze[e]=new ot(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ze[e]=new ot(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ze[e]=new ot(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ze[e]=new ot(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ze[e]=new ot(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ze[e]=new ot(e,5,!1,e.toLowerCase(),null,!1,!1)});var gc=/[\-:]([a-z])/g;function Lc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(gc,Lc);Ze[t]=new ot(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(gc,Lc);Ze[t]=new ot(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(gc,Lc);Ze[t]=new ot(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ze[e]=new ot(e,1,!1,e.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ze[e]=new ot(e,1,!1,e.toLowerCase(),null,!0,!0)});function xc(e,t,n,r){var i=Ze.hasOwnProperty(t)?Ze[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(X3(t,n,i,r)&&(n=null),r||i===null?G3(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var mn=Y3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Eo=Symbol.for("react.element"),br=Symbol.for("react.portal"),kr=Symbol.for("react.fragment"),yc=Symbol.for("react.strict_mode"),Za=Symbol.for("react.profiler"),Mf=Symbol.for("react.provider"),_f=Symbol.for("react.context"),vc=Symbol.for("react.forward_ref"),Ga=Symbol.for("react.suspense"),Qa=Symbol.for("react.suspense_list"),wc=Symbol.for("react.memo"),bn=Symbol.for("react.lazy"),Nf=Symbol.for("react.offscreen"),F1=Symbol.iterator;function hi(e){return e===null||typeof e!="object"?null:(e=F1&&e[F1]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Object.assign,Ds;function $i(e){if(Ds===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ds=t&&t[1]||""}return`
`+Ds+e}var Bs=!1;function Us(e,t){if(!e||Bs)return"";Bs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{Bs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?$i(e):""}function J3(e){switch(e.tag){case 5:return $i(e.type);case 16:return $i("Lazy");case 13:return $i("Suspense");case 19:return $i("SuspenseList");case 0:case 2:case 15:return e=Us(e.type,!1),e;case 11:return e=Us(e.type.render,!1),e;case 1:return e=Us(e.type,!0),e;default:return""}}function Xa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case kr:return"Fragment";case br:return"Portal";case Za:return"Profiler";case yc:return"StrictMode";case Ga:return"Suspense";case Qa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _f:return(e.displayName||"Context")+".Consumer";case Mf:return(e._context.displayName||"Context")+".Provider";case vc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wc:return t=e.displayName||null,t!==null?t:Xa(e.type)||"Memo";case bn:t=e._payload,e=e._init;try{return Xa(e(t))}catch{}}return null}function em(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xa(t);case 8:return t===yc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function On(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Af(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function tm(e){var t=Af(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Po(e){e._valueTracker||(e._valueTracker=tm(e))}function Ff(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Af(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Sl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ja(e,t){var n=t.checked;return Pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function O1(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=On(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Of(e,t){t=t.checked,t!=null&&xc(e,"checked",t,!1)}function eu(e,t){Of(e,t);var n=On(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?tu(e,t.type,n):t.hasOwnProperty("defaultValue")&&tu(e,t.type,On(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function D1(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function tu(e,t,n){(t!=="number"||Sl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ei=Array.isArray;function Ar(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+On(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function nu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(O(91));return Pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function B1(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(O(92));if(Ei(n)){if(1<n.length)throw Error(O(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:On(n)}}function Df(e,t){var n=On(t.value),r=On(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function U1(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ru(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var To,Uf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(To=To||document.createElement("div"),To.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=To.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ri={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nm=["Webkit","ms","Moz","O"];Object.keys(Ri).forEach(function(e){nm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ri[t]=Ri[e]})});function Hf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ri.hasOwnProperty(e)&&Ri[e]?(""+t).trim():t+"px"}function Vf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Hf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var rm=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function iu(e,t){if(t){if(rm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(O(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(O(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(O(61))}if(t.style!=null&&typeof t.style!="object")throw Error(O(62))}}function ou(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lu=null;function bc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var su=null,Fr=null,Or=null;function H1(e){if(e=xo(e)){if(typeof su!="function")throw Error(O(280));var t=e.stateNode;t&&(t=fs(t),su(e.stateNode,e.type,t))}}function Wf(e){Fr?Or?Or.push(e):Or=[e]:Fr=e}function Kf(){if(Fr){var e=Fr,t=Or;if(Or=Fr=null,H1(e),t)for(e=0;e<t.length;e++)H1(t[e])}}function qf(e,t){return e(t)}function Yf(){}var Hs=!1;function Zf(e,t,n){if(Hs)return e(t,n);Hs=!0;try{return qf(e,t,n)}finally{Hs=!1,(Fr!==null||Or!==null)&&(Yf(),Kf())}}function Yi(e,t){var n=e.stateNode;if(n===null)return null;var r=fs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(O(231,t,typeof n));return n}var au=!1;if(cn)try{var mi={};Object.defineProperty(mi,"passive",{get:function(){au=!0}}),window.addEventListener("test",mi,mi),window.removeEventListener("test",mi,mi)}catch{au=!1}function im(e,t,n,r,i,o,l,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var zi=!1,Cl=null,jl=!1,uu=null,om={onError:function(e){zi=!0,Cl=e}};function lm(e,t,n,r,i,o,l,a,u){zi=!1,Cl=null,im.apply(om,arguments)}function sm(e,t,n,r,i,o,l,a,u){if(lm.apply(this,arguments),zi){if(zi){var c=Cl;zi=!1,Cl=null}else throw Error(O(198));jl||(jl=!0,uu=c)}}function fr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Gf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function V1(e){if(fr(e)!==e)throw Error(O(188))}function am(e){var t=e.alternate;if(!t){if(t=fr(e),t===null)throw Error(O(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return V1(i),e;if(o===r)return V1(i),t;o=o.sibling}throw Error(O(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?e:t}function Qf(e){return e=am(e),e!==null?Xf(e):null}function Xf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xf(e);if(t!==null)return t;e=e.sibling}return null}var Jf=bt.unstable_scheduleCallback,W1=bt.unstable_cancelCallback,um=bt.unstable_shouldYield,cm=bt.unstable_requestPaint,Ie=bt.unstable_now,dm=bt.unstable_getCurrentPriorityLevel,kc=bt.unstable_ImmediatePriority,e2=bt.unstable_UserBlockingPriority,$l=bt.unstable_NormalPriority,pm=bt.unstable_LowPriority,t2=bt.unstable_IdlePriority,us=null,Gt=null;function fm(e){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(us,e,void 0,(e.current.flags&128)===128)}catch{}}var Dt=Math.clz32?Math.clz32:gm,hm=Math.log,mm=Math.LN2;function gm(e){return e>>>=0,e===0?32:31-(hm(e)/mm|0)|0}var Io=64,Ro=4194304;function Pi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function El(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=Pi(a):(o&=l,o!==0&&(r=Pi(o)))}else l=n&~i,l!==0?r=Pi(l):o!==0&&(r=Pi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Dt(t),i=1<<n,r|=e[n],t&=~i;return r}function Lm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Dt(o),a=1<<l,u=i[l];u===-1?(!(a&n)||a&r)&&(i[l]=Lm(a,t)):u<=t&&(e.expiredLanes|=a),o&=~a}}function cu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function n2(){var e=Io;return Io<<=1,!(Io&4194240)&&(Io=64),e}function Vs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function go(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Dt(t),e[t]=n}function ym(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Dt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Sc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Dt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var me=0;function r2(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var i2,Cc,o2,l2,s2,du=!1,zo=[],Pn=null,Tn=null,In=null,Zi=new Map,Gi=new Map,Sn=[],vm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function K1(e,t){switch(e){case"focusin":case"focusout":Pn=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":Zi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gi.delete(t.pointerId)}}function gi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=xo(t),t!==null&&Cc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function wm(e,t,n,r,i){switch(t){case"focusin":return Pn=gi(Pn,e,t,n,r,i),!0;case"dragenter":return Tn=gi(Tn,e,t,n,r,i),!0;case"mouseover":return In=gi(In,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Zi.set(o,gi(Zi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Gi.set(o,gi(Gi.get(o)||null,e,t,n,r,i)),!0}return!1}function a2(e){var t=Qn(e.target);if(t!==null){var n=fr(t);if(n!==null){if(t=n.tag,t===13){if(t=Gf(n),t!==null){e.blockedOn=t,s2(e.priority,function(){o2(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ol(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);lu=r,n.target.dispatchEvent(r),lu=null}else return t=xo(n),t!==null&&Cc(t),e.blockedOn=n,!1;t.shift()}return!0}function q1(e,t,n){ol(e)&&n.delete(t)}function bm(){du=!1,Pn!==null&&ol(Pn)&&(Pn=null),Tn!==null&&ol(Tn)&&(Tn=null),In!==null&&ol(In)&&(In=null),Zi.forEach(q1),Gi.forEach(q1)}function Li(e,t){e.blockedOn===t&&(e.blockedOn=null,du||(du=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,bm)))}function Qi(e){function t(i){return Li(i,e)}if(0<zo.length){Li(zo[0],e);for(var n=1;n<zo.length;n++){var r=zo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Pn!==null&&Li(Pn,e),Tn!==null&&Li(Tn,e),In!==null&&Li(In,e),Zi.forEach(t),Gi.forEach(t),n=0;n<Sn.length;n++)r=Sn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Sn.length&&(n=Sn[0],n.blockedOn===null);)a2(n),n.blockedOn===null&&Sn.shift()}var Dr=mn.ReactCurrentBatchConfig,Pl=!0;function km(e,t,n,r){var i=me,o=Dr.transition;Dr.transition=null;try{me=1,jc(e,t,n,r)}finally{me=i,Dr.transition=o}}function Sm(e,t,n,r){var i=me,o=Dr.transition;Dr.transition=null;try{me=4,jc(e,t,n,r)}finally{me=i,Dr.transition=o}}function jc(e,t,n,r){if(Pl){var i=pu(e,t,n,r);if(i===null)ea(e,t,r,Tl,n),K1(e,r);else if(wm(i,e,t,n,r))r.stopPropagation();else if(K1(e,r),t&4&&-1<vm.indexOf(e)){for(;i!==null;){var o=xo(i);if(o!==null&&i2(o),o=pu(e,t,n,r),o===null&&ea(e,t,r,Tl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ea(e,t,r,null,n)}}var Tl=null;function pu(e,t,n,r){if(Tl=null,e=bc(r),e=Qn(e),e!==null)if(t=fr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Gf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Tl=e,null}function u2(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dm()){case kc:return 1;case e2:return 4;case $l:case pm:return 16;case t2:return 536870912;default:return 16}default:return 16}}var jn=null,$c=null,ll=null;function c2(){if(ll)return ll;var e,t=$c,n=t.length,r,i="value"in jn?jn.value:jn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return ll=i.slice(e,1<r?1-r:void 0)}function sl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Mo(){return!0}function Y1(){return!1}function St(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Mo:Y1,this.isPropagationStopped=Y1,this}return Pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Mo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Mo)},persist:function(){},isPersistent:Mo}),t}var li={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ec=St(li),Lo=Pe({},li,{view:0,detail:0}),Cm=St(Lo),Ws,Ks,xi,cs=Pe({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xi&&(xi&&e.type==="mousemove"?(Ws=e.screenX-xi.screenX,Ks=e.screenY-xi.screenY):Ks=Ws=0,xi=e),Ws)},movementY:function(e){return"movementY"in e?e.movementY:Ks}}),Z1=St(cs),jm=Pe({},cs,{dataTransfer:0}),$m=St(jm),Em=Pe({},Lo,{relatedTarget:0}),qs=St(Em),Pm=Pe({},li,{animationName:0,elapsedTime:0,pseudoElement:0}),Tm=St(Pm),Im=Pe({},li,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rm=St(Im),zm=Pe({},li,{data:0}),G1=St(zm),Mm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_m={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Am(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nm[e])?!!t[e]:!1}function Pc(){return Am}var Fm=Pe({},Lo,{key:function(e){if(e.key){var t=Mm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=sl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_m[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pc,charCode:function(e){return e.type==="keypress"?sl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?sl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Om=St(Fm),Dm=Pe({},cs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Q1=St(Dm),Bm=Pe({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pc}),Um=St(Bm),Hm=Pe({},li,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vm=St(Hm),Wm=Pe({},cs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Km=St(Wm),qm=[9,13,27,32],Tc=cn&&"CompositionEvent"in window,Mi=null;cn&&"documentMode"in document&&(Mi=document.documentMode);var Ym=cn&&"TextEvent"in window&&!Mi,d2=cn&&(!Tc||Mi&&8<Mi&&11>=Mi),X1=" ",J1=!1;function p2(e,t){switch(e){case"keyup":return qm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function f2(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sr=!1;function Zm(e,t){switch(e){case"compositionend":return f2(t);case"keypress":return t.which!==32?null:(J1=!0,X1);case"textInput":return e=t.data,e===X1&&J1?null:e;default:return null}}function Gm(e,t){if(Sr)return e==="compositionend"||!Tc&&p2(e,t)?(e=c2(),ll=$c=jn=null,Sr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return d2&&t.locale!=="ko"?null:t.data;default:return null}}var Qm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ed(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qm[e.type]:t==="textarea"}function h2(e,t,n,r){Wf(r),t=Il(t,"onChange"),0<t.length&&(n=new Ec("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _i=null,Xi=null;function Xm(e){C2(e,0)}function ds(e){var t=$r(e);if(Ff(t))return e}function Jm(e,t){if(e==="change")return t}var m2=!1;if(cn){var Ys;if(cn){var Zs="oninput"in document;if(!Zs){var td=document.createElement("div");td.setAttribute("oninput","return;"),Zs=typeof td.oninput=="function"}Ys=Zs}else Ys=!1;m2=Ys&&(!document.documentMode||9<document.documentMode)}function nd(){_i&&(_i.detachEvent("onpropertychange",g2),Xi=_i=null)}function g2(e){if(e.propertyName==="value"&&ds(Xi)){var t=[];h2(t,Xi,e,bc(e)),Zf(Xm,t)}}function eg(e,t,n){e==="focusin"?(nd(),_i=t,Xi=n,_i.attachEvent("onpropertychange",g2)):e==="focusout"&&nd()}function tg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ds(Xi)}function ng(e,t){if(e==="click")return ds(t)}function rg(e,t){if(e==="input"||e==="change")return ds(t)}function ig(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ht=typeof Object.is=="function"?Object.is:ig;function Ji(e,t){if(Ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ya.call(t,i)||!Ht(e[i],t[i]))return!1}return!0}function rd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function id(e,t){var n=rd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rd(n)}}function L2(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?L2(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function x2(){for(var e=window,t=Sl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Sl(e.document)}return t}function Ic(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function og(e){var t=x2(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&L2(n.ownerDocument.documentElement,n)){if(r!==null&&Ic(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=id(n,o);var l=id(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var lg=cn&&"documentMode"in document&&11>=document.documentMode,Cr=null,fu=null,Ni=null,hu=!1;function od(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hu||Cr==null||Cr!==Sl(r)||(r=Cr,"selectionStart"in r&&Ic(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ni&&Ji(Ni,r)||(Ni=r,r=Il(fu,"onSelect"),0<r.length&&(t=new Ec("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Cr)))}function _o(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var jr={animationend:_o("Animation","AnimationEnd"),animationiteration:_o("Animation","AnimationIteration"),animationstart:_o("Animation","AnimationStart"),transitionend:_o("Transition","TransitionEnd")},Gs={},y2={};cn&&(y2=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function ps(e){if(Gs[e])return Gs[e];if(!jr[e])return e;var t=jr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in y2)return Gs[e]=t[n];return e}var v2=ps("animationend"),w2=ps("animationiteration"),b2=ps("animationstart"),k2=ps("transitionend"),S2=new Map,ld="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bn(e,t){S2.set(e,t),pr(t,[e])}for(var Qs=0;Qs<ld.length;Qs++){var Xs=ld[Qs],sg=Xs.toLowerCase(),ag=Xs[0].toUpperCase()+Xs.slice(1);Bn(sg,"on"+ag)}Bn(v2,"onAnimationEnd");Bn(w2,"onAnimationIteration");Bn(b2,"onAnimationStart");Bn("dblclick","onDoubleClick");Bn("focusin","onFocus");Bn("focusout","onBlur");Bn(k2,"onTransitionEnd");Wr("onMouseEnter",["mouseout","mouseover"]);Wr("onMouseLeave",["mouseout","mouseover"]);Wr("onPointerEnter",["pointerout","pointerover"]);Wr("onPointerLeave",["pointerout","pointerover"]);pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ti="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ug=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ti));function sd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,sm(r,t,void 0,e),e.currentTarget=null}function C2(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;sd(i,a,c),o=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,c=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;sd(i,a,c),o=u}}}if(jl)throw e=uu,jl=!1,uu=null,e}function be(e,t){var n=t[yu];n===void 0&&(n=t[yu]=new Set);var r=e+"__bubble";n.has(r)||(j2(t,e,2,!1),n.add(r))}function Js(e,t,n){var r=0;t&&(r|=4),j2(n,e,r,t)}var No="_reactListening"+Math.random().toString(36).slice(2);function eo(e){if(!e[No]){e[No]=!0,zf.forEach(function(n){n!=="selectionchange"&&(ug.has(n)||Js(n,!1,e),Js(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[No]||(t[No]=!0,Js("selectionchange",!1,t))}}function j2(e,t,n,r){switch(u2(t)){case 1:var i=km;break;case 4:i=Sm;break;default:i=jc}n=i.bind(null,t,n,e),i=void 0,!au||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ea(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Qn(a),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Zf(function(){var c=o,d=bc(n),p=[];e:{var m=S2.get(e);if(m!==void 0){var h=Ec,y=e;switch(e){case"keypress":if(sl(n)===0)break e;case"keydown":case"keyup":h=Om;break;case"focusin":y="focus",h=qs;break;case"focusout":y="blur",h=qs;break;case"beforeblur":case"afterblur":h=qs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Z1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=$m;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Um;break;case v2:case w2:case b2:h=Tm;break;case k2:h=Vm;break;case"scroll":h=Cm;break;case"wheel":h=Km;break;case"copy":case"cut":case"paste":h=Rm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Q1}var v=(t&4)!==0,$=!v&&e==="scroll",L=v?m!==null?m+"Capture":null:m;v=[];for(var x=c,g;x!==null;){g=x;var k=g.stateNode;if(g.tag===5&&k!==null&&(g=k,L!==null&&(k=Yi(x,L),k!=null&&v.push(to(x,k,g)))),$)break;x=x.return}0<v.length&&(m=new h(m,y,null,n,d),p.push({event:m,listeners:v}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",m&&n!==lu&&(y=n.relatedTarget||n.fromElement)&&(Qn(y)||y[dn]))break e;if((h||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,h?(y=n.relatedTarget||n.toElement,h=c,y=y?Qn(y):null,y!==null&&($=fr(y),y!==$||y.tag!==5&&y.tag!==6)&&(y=null)):(h=null,y=c),h!==y)){if(v=Z1,k="onMouseLeave",L="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(v=Q1,k="onPointerLeave",L="onPointerEnter",x="pointer"),$=h==null?m:$r(h),g=y==null?m:$r(y),m=new v(k,x+"leave",h,n,d),m.target=$,m.relatedTarget=g,k=null,Qn(d)===c&&(v=new v(L,x+"enter",y,n,d),v.target=g,v.relatedTarget=$,k=v),$=k,h&&y)t:{for(v=h,L=y,x=0,g=v;g;g=Lr(g))x++;for(g=0,k=L;k;k=Lr(k))g++;for(;0<x-g;)v=Lr(v),x--;for(;0<g-x;)L=Lr(L),g--;for(;x--;){if(v===L||L!==null&&v===L.alternate)break t;v=Lr(v),L=Lr(L)}v=null}else v=null;h!==null&&ad(p,m,h,v,!1),y!==null&&$!==null&&ad(p,$,y,v,!0)}}e:{if(m=c?$r(c):window,h=m.nodeName&&m.nodeName.toLowerCase(),h==="select"||h==="input"&&m.type==="file")var P=Jm;else if(ed(m))if(m2)P=rg;else{P=tg;var S=eg}else(h=m.nodeName)&&h.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(P=ng);if(P&&(P=P(e,c))){h2(p,P,n,d);break e}S&&S(e,m,c),e==="focusout"&&(S=m._wrapperState)&&S.controlled&&m.type==="number"&&tu(m,"number",m.value)}switch(S=c?$r(c):window,e){case"focusin":(ed(S)||S.contentEditable==="true")&&(Cr=S,fu=c,Ni=null);break;case"focusout":Ni=fu=Cr=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,od(p,n,d);break;case"selectionchange":if(lg)break;case"keydown":case"keyup":od(p,n,d)}var j;if(Tc)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Sr?p2(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(d2&&n.locale!=="ko"&&(Sr||T!=="onCompositionStart"?T==="onCompositionEnd"&&Sr&&(j=c2()):(jn=d,$c="value"in jn?jn.value:jn.textContent,Sr=!0)),S=Il(c,T),0<S.length&&(T=new G1(T,e,null,n,d),p.push({event:T,listeners:S}),j?T.data=j:(j=f2(n),j!==null&&(T.data=j)))),(j=Ym?Zm(e,n):Gm(e,n))&&(c=Il(c,"onBeforeInput"),0<c.length&&(d=new G1("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=j))}C2(p,t)})}function to(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Il(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Yi(e,n),o!=null&&r.unshift(to(e,o,i)),o=Yi(e,t),o!=null&&r.push(to(e,o,i))),e=e.return}return r}function Lr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ad(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Yi(n,o),u!=null&&l.unshift(to(n,u,a))):i||(u=Yi(n,o),u!=null&&l.push(to(n,u,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var cg=/\r\n?/g,dg=/\u0000|\uFFFD/g;function ud(e){return(typeof e=="string"?e:""+e).replace(cg,`
`).replace(dg,"")}function Ao(e,t,n){if(t=ud(t),ud(e)!==t&&n)throw Error(O(425))}function Rl(){}var mu=null,gu=null;function Lu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xu=typeof setTimeout=="function"?setTimeout:void 0,pg=typeof clearTimeout=="function"?clearTimeout:void 0,cd=typeof Promise=="function"?Promise:void 0,fg=typeof queueMicrotask=="function"?queueMicrotask:typeof cd<"u"?function(e){return cd.resolve(null).then(e).catch(hg)}:xu;function hg(e){setTimeout(function(){throw e})}function ta(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Qi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qi(t)}function Rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function dd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var si=Math.random().toString(36).slice(2),Yt="__reactFiber$"+si,no="__reactProps$"+si,dn="__reactContainer$"+si,yu="__reactEvents$"+si,mg="__reactListeners$"+si,gg="__reactHandles$"+si;function Qn(e){var t=e[Yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dn]||n[Yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=dd(e);e!==null;){if(n=e[Yt])return n;e=dd(e)}return t}e=n,n=e.parentNode}return null}function xo(e){return e=e[Yt]||e[dn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $r(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(O(33))}function fs(e){return e[no]||null}var vu=[],Er=-1;function Un(e){return{current:e}}function Se(e){0>Er||(e.current=vu[Er],vu[Er]=null,Er--)}function ye(e,t){Er++,vu[Er]=e.current,e.current=t}var Dn={},Je=Un(Dn),ut=Un(!1),ir=Dn;function Kr(e,t){var n=e.type.contextTypes;if(!n)return Dn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ct(e){return e=e.childContextTypes,e!=null}function zl(){Se(ut),Se(Je)}function pd(e,t,n){if(Je.current!==Dn)throw Error(O(168));ye(Je,t),ye(ut,n)}function $2(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(O(108,em(e)||"Unknown",i));return Pe({},n,r)}function Ml(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dn,ir=Je.current,ye(Je,e),ye(ut,ut.current),!0}function fd(e,t,n){var r=e.stateNode;if(!r)throw Error(O(169));n?(e=$2(e,t,ir),r.__reactInternalMemoizedMergedChildContext=e,Se(ut),Se(Je),ye(Je,e)):Se(ut),ye(ut,n)}var ln=null,hs=!1,na=!1;function E2(e){ln===null?ln=[e]:ln.push(e)}function Lg(e){hs=!0,E2(e)}function Hn(){if(!na&&ln!==null){na=!0;var e=0,t=me;try{var n=ln;for(me=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ln=null,hs=!1}catch(i){throw ln!==null&&(ln=ln.slice(e+1)),Jf(kc,Hn),i}finally{me=t,na=!1}}return null}var Pr=[],Tr=0,_l=null,Nl=0,$t=[],Et=0,or=null,sn=1,an="";function qn(e,t){Pr[Tr++]=Nl,Pr[Tr++]=_l,_l=e,Nl=t}function P2(e,t,n){$t[Et++]=sn,$t[Et++]=an,$t[Et++]=or,or=e;var r=sn;e=an;var i=32-Dt(r)-1;r&=~(1<<i),n+=1;var o=32-Dt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,sn=1<<32-Dt(t)+i|n<<i|r,an=o+e}else sn=1<<o|n<<i|r,an=e}function Rc(e){e.return!==null&&(qn(e,1),P2(e,1,0))}function zc(e){for(;e===_l;)_l=Pr[--Tr],Pr[Tr]=null,Nl=Pr[--Tr],Pr[Tr]=null;for(;e===or;)or=$t[--Et],$t[Et]=null,an=$t[--Et],$t[Et]=null,sn=$t[--Et],$t[Et]=null}var wt=null,yt=null,Ce=!1,Ot=null;function T2(e,t){var n=Tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function hd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,wt=e,yt=Rn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,wt=e,yt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=or!==null?{id:sn,overflow:an}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,wt=e,yt=null,!0):!1;default:return!1}}function wu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bu(e){if(Ce){var t=yt;if(t){var n=t;if(!hd(e,t)){if(wu(e))throw Error(O(418));t=Rn(n.nextSibling);var r=wt;t&&hd(e,t)?T2(r,n):(e.flags=e.flags&-4097|2,Ce=!1,wt=e)}}else{if(wu(e))throw Error(O(418));e.flags=e.flags&-4097|2,Ce=!1,wt=e}}}function md(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;wt=e}function Fo(e){if(e!==wt)return!1;if(!Ce)return md(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Lu(e.type,e.memoizedProps)),t&&(t=yt)){if(wu(e))throw I2(),Error(O(418));for(;t;)T2(e,t),t=Rn(t.nextSibling)}if(md(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){yt=Rn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}yt=null}}else yt=wt?Rn(e.stateNode.nextSibling):null;return!0}function I2(){for(var e=yt;e;)e=Rn(e.nextSibling)}function qr(){yt=wt=null,Ce=!1}function Mc(e){Ot===null?Ot=[e]:Ot.push(e)}var xg=mn.ReactCurrentBatchConfig;function yi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,e))}return e}function Oo(e,t){throw e=Object.prototype.toString.call(t),Error(O(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gd(e){var t=e._init;return t(e._payload)}function R2(e){function t(L,x){if(e){var g=L.deletions;g===null?(L.deletions=[x],L.flags|=16):g.push(x)}}function n(L,x){if(!e)return null;for(;x!==null;)t(L,x),x=x.sibling;return null}function r(L,x){for(L=new Map;x!==null;)x.key!==null?L.set(x.key,x):L.set(x.index,x),x=x.sibling;return L}function i(L,x){return L=Nn(L,x),L.index=0,L.sibling=null,L}function o(L,x,g){return L.index=g,e?(g=L.alternate,g!==null?(g=g.index,g<x?(L.flags|=2,x):g):(L.flags|=2,x)):(L.flags|=1048576,x)}function l(L){return e&&L.alternate===null&&(L.flags|=2),L}function a(L,x,g,k){return x===null||x.tag!==6?(x=ua(g,L.mode,k),x.return=L,x):(x=i(x,g),x.return=L,x)}function u(L,x,g,k){var P=g.type;return P===kr?d(L,x,g.props.children,k,g.key):x!==null&&(x.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===bn&&gd(P)===x.type)?(k=i(x,g.props),k.ref=yi(L,x,g),k.return=L,k):(k=hl(g.type,g.key,g.props,null,L.mode,k),k.ref=yi(L,x,g),k.return=L,k)}function c(L,x,g,k){return x===null||x.tag!==4||x.stateNode.containerInfo!==g.containerInfo||x.stateNode.implementation!==g.implementation?(x=ca(g,L.mode,k),x.return=L,x):(x=i(x,g.children||[]),x.return=L,x)}function d(L,x,g,k,P){return x===null||x.tag!==7?(x=rr(g,L.mode,k,P),x.return=L,x):(x=i(x,g),x.return=L,x)}function p(L,x,g){if(typeof x=="string"&&x!==""||typeof x=="number")return x=ua(""+x,L.mode,g),x.return=L,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Eo:return g=hl(x.type,x.key,x.props,null,L.mode,g),g.ref=yi(L,null,x),g.return=L,g;case br:return x=ca(x,L.mode,g),x.return=L,x;case bn:var k=x._init;return p(L,k(x._payload),g)}if(Ei(x)||hi(x))return x=rr(x,L.mode,g,null),x.return=L,x;Oo(L,x)}return null}function m(L,x,g,k){var P=x!==null?x.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:a(L,x,""+g,k);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Eo:return g.key===P?u(L,x,g,k):null;case br:return g.key===P?c(L,x,g,k):null;case bn:return P=g._init,m(L,x,P(g._payload),k)}if(Ei(g)||hi(g))return P!==null?null:d(L,x,g,k,null);Oo(L,g)}return null}function h(L,x,g,k,P){if(typeof k=="string"&&k!==""||typeof k=="number")return L=L.get(g)||null,a(x,L,""+k,P);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Eo:return L=L.get(k.key===null?g:k.key)||null,u(x,L,k,P);case br:return L=L.get(k.key===null?g:k.key)||null,c(x,L,k,P);case bn:var S=k._init;return h(L,x,g,S(k._payload),P)}if(Ei(k)||hi(k))return L=L.get(g)||null,d(x,L,k,P,null);Oo(x,k)}return null}function y(L,x,g,k){for(var P=null,S=null,j=x,T=x=0,z=null;j!==null&&T<g.length;T++){j.index>T?(z=j,j=null):z=j.sibling;var R=m(L,j,g[T],k);if(R===null){j===null&&(j=z);break}e&&j&&R.alternate===null&&t(L,j),x=o(R,x,T),S===null?P=R:S.sibling=R,S=R,j=z}if(T===g.length)return n(L,j),Ce&&qn(L,T),P;if(j===null){for(;T<g.length;T++)j=p(L,g[T],k),j!==null&&(x=o(j,x,T),S===null?P=j:S.sibling=j,S=j);return Ce&&qn(L,T),P}for(j=r(L,j);T<g.length;T++)z=h(j,L,T,g[T],k),z!==null&&(e&&z.alternate!==null&&j.delete(z.key===null?T:z.key),x=o(z,x,T),S===null?P=z:S.sibling=z,S=z);return e&&j.forEach(function(I){return t(L,I)}),Ce&&qn(L,T),P}function v(L,x,g,k){var P=hi(g);if(typeof P!="function")throw Error(O(150));if(g=P.call(g),g==null)throw Error(O(151));for(var S=P=null,j=x,T=x=0,z=null,R=g.next();j!==null&&!R.done;T++,R=g.next()){j.index>T?(z=j,j=null):z=j.sibling;var I=m(L,j,R.value,k);if(I===null){j===null&&(j=z);break}e&&j&&I.alternate===null&&t(L,j),x=o(I,x,T),S===null?P=I:S.sibling=I,S=I,j=z}if(R.done)return n(L,j),Ce&&qn(L,T),P;if(j===null){for(;!R.done;T++,R=g.next())R=p(L,R.value,k),R!==null&&(x=o(R,x,T),S===null?P=R:S.sibling=R,S=R);return Ce&&qn(L,T),P}for(j=r(L,j);!R.done;T++,R=g.next())R=h(j,L,T,R.value,k),R!==null&&(e&&R.alternate!==null&&j.delete(R.key===null?T:R.key),x=o(R,x,T),S===null?P=R:S.sibling=R,S=R);return e&&j.forEach(function(E){return t(L,E)}),Ce&&qn(L,T),P}function $(L,x,g,k){if(typeof g=="object"&&g!==null&&g.type===kr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Eo:e:{for(var P=g.key,S=x;S!==null;){if(S.key===P){if(P=g.type,P===kr){if(S.tag===7){n(L,S.sibling),x=i(S,g.props.children),x.return=L,L=x;break e}}else if(S.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===bn&&gd(P)===S.type){n(L,S.sibling),x=i(S,g.props),x.ref=yi(L,S,g),x.return=L,L=x;break e}n(L,S);break}else t(L,S);S=S.sibling}g.type===kr?(x=rr(g.props.children,L.mode,k,g.key),x.return=L,L=x):(k=hl(g.type,g.key,g.props,null,L.mode,k),k.ref=yi(L,x,g),k.return=L,L=k)}return l(L);case br:e:{for(S=g.key;x!==null;){if(x.key===S)if(x.tag===4&&x.stateNode.containerInfo===g.containerInfo&&x.stateNode.implementation===g.implementation){n(L,x.sibling),x=i(x,g.children||[]),x.return=L,L=x;break e}else{n(L,x);break}else t(L,x);x=x.sibling}x=ca(g,L.mode,k),x.return=L,L=x}return l(L);case bn:return S=g._init,$(L,x,S(g._payload),k)}if(Ei(g))return y(L,x,g,k);if(hi(g))return v(L,x,g,k);Oo(L,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,x!==null&&x.tag===6?(n(L,x.sibling),x=i(x,g),x.return=L,L=x):(n(L,x),x=ua(g,L.mode,k),x.return=L,L=x),l(L)):n(L,x)}return $}var Yr=R2(!0),z2=R2(!1),Al=Un(null),Fl=null,Ir=null,_c=null;function Nc(){_c=Ir=Fl=null}function Ac(e){var t=Al.current;Se(Al),e._currentValue=t}function ku(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Br(e,t){Fl=e,_c=Ir=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(at=!0),e.firstContext=null)}function Rt(e){var t=e._currentValue;if(_c!==e)if(e={context:e,memoizedValue:t,next:null},Ir===null){if(Fl===null)throw Error(O(308));Ir=e,Fl.dependencies={lanes:0,firstContext:e}}else Ir=Ir.next=e;return t}var Xn=null;function Fc(e){Xn===null?Xn=[e]:Xn.push(e)}function M2(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Fc(t)):(n.next=i.next,i.next=n),t.interleaved=n,pn(e,r)}function pn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var kn=!1;function Oc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _2(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function un(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function zn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,pn(e,n)}return i=r.interleaved,i===null?(t.next=t,Fc(r)):(t.next=i.next,i.next=t),r.interleaved=t,pn(e,n)}function al(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sc(e,n)}}function Ld(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ol(e,t,n,r){var i=e.updateQueue;kn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,l===null?o=c:l.next=c,l=u;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==l&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(o!==null){var p=i.baseState;l=0,d=c=u=null,a=o;do{var m=a.lane,h=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,v=a;switch(m=t,h=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){p=y.call(h,p,m);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,m=typeof y=="function"?y.call(h,p,m):y,m==null)break e;p=Pe({},p,m);break e;case 2:kn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else h={eventTime:h,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=h,u=p):d=d.next=h,l|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);sr|=l,e.lanes=l,e.memoizedState=p}}function xd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(O(191,i));i.call(r)}}}var yo={},Qt=Un(yo),ro=Un(yo),io=Un(yo);function Jn(e){if(e===yo)throw Error(O(174));return e}function Dc(e,t){switch(ye(io,t),ye(ro,e),ye(Qt,yo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ru(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ru(t,e)}Se(Qt),ye(Qt,t)}function Zr(){Se(Qt),Se(ro),Se(io)}function N2(e){Jn(io.current);var t=Jn(Qt.current),n=ru(t,e.type);t!==n&&(ye(ro,e),ye(Qt,n))}function Bc(e){ro.current===e&&(Se(Qt),Se(ro))}var $e=Un(0);function Dl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ra=[];function Uc(){for(var e=0;e<ra.length;e++)ra[e]._workInProgressVersionPrimary=null;ra.length=0}var ul=mn.ReactCurrentDispatcher,ia=mn.ReactCurrentBatchConfig,lr=0,Ee=null,Fe=null,He=null,Bl=!1,Ai=!1,oo=0,yg=0;function Ge(){throw Error(O(321))}function Hc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ht(e[n],t[n]))return!1;return!0}function Vc(e,t,n,r,i,o){if(lr=o,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ul.current=e===null||e.memoizedState===null?kg:Sg,e=n(r,i),Ai){o=0;do{if(Ai=!1,oo=0,25<=o)throw Error(O(301));o+=1,He=Fe=null,t.updateQueue=null,ul.current=Cg,e=n(r,i)}while(Ai)}if(ul.current=Ul,t=Fe!==null&&Fe.next!==null,lr=0,He=Fe=Ee=null,Bl=!1,t)throw Error(O(300));return e}function Wc(){var e=oo!==0;return oo=0,e}function Kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Ee.memoizedState=He=e:He=He.next=e,He}function zt(){if(Fe===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=He===null?Ee.memoizedState:He.next;if(t!==null)He=t,Fe=e;else{if(e===null)throw Error(O(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},He===null?Ee.memoizedState=He=e:He=He.next=e}return He}function lo(e,t){return typeof t=="function"?t(e):t}function oa(e){var t=zt(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=Fe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,u=null,c=o;do{var d=c.lane;if((lr&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=p,l=r):u=u.next=p,Ee.lanes|=d,sr|=d}c=c.next}while(c!==null&&c!==o);u===null?l=r:u.next=a,Ht(r,t.memoizedState)||(at=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ee.lanes|=o,sr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function la(e){var t=zt(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Ht(o,t.memoizedState)||(at=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function A2(){}function F2(e,t){var n=Ee,r=zt(),i=t(),o=!Ht(r.memoizedState,i);if(o&&(r.memoizedState=i,at=!0),r=r.queue,Kc(B2.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,so(9,D2.bind(null,n,r,i,t),void 0,null),We===null)throw Error(O(349));lr&30||O2(n,t,i)}return i}function O2(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function D2(e,t,n,r){t.value=n,t.getSnapshot=r,U2(t)&&H2(e)}function B2(e,t,n){return n(function(){U2(t)&&H2(e)})}function U2(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ht(e,n)}catch{return!0}}function H2(e){var t=pn(e,1);t!==null&&Bt(t,e,1,-1)}function yd(e){var t=Kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lo,lastRenderedState:e},t.queue=e,e=e.dispatch=bg.bind(null,Ee,e),[t.memoizedState,e]}function so(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function V2(){return zt().memoizedState}function cl(e,t,n,r){var i=Kt();Ee.flags|=e,i.memoizedState=so(1|t,n,void 0,r===void 0?null:r)}function ms(e,t,n,r){var i=zt();r=r===void 0?null:r;var o=void 0;if(Fe!==null){var l=Fe.memoizedState;if(o=l.destroy,r!==null&&Hc(r,l.deps)){i.memoizedState=so(t,n,o,r);return}}Ee.flags|=e,i.memoizedState=so(1|t,n,o,r)}function vd(e,t){return cl(8390656,8,e,t)}function Kc(e,t){return ms(2048,8,e,t)}function W2(e,t){return ms(4,2,e,t)}function K2(e,t){return ms(4,4,e,t)}function q2(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Y2(e,t,n){return n=n!=null?n.concat([e]):null,ms(4,4,q2.bind(null,t,e),n)}function qc(){}function Z2(e,t){var n=zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function G2(e,t){var n=zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Hc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Q2(e,t,n){return lr&21?(Ht(n,t)||(n=n2(),Ee.lanes|=n,sr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,at=!0),e.memoizedState=n)}function vg(e,t){var n=me;me=n!==0&&4>n?n:4,e(!0);var r=ia.transition;ia.transition={};try{e(!1),t()}finally{me=n,ia.transition=r}}function X2(){return zt().memoizedState}function wg(e,t,n){var r=_n(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},J2(e))e4(t,n);else if(n=M2(e,t,n,r),n!==null){var i=rt();Bt(n,e,r,i),t4(n,t,r)}}function bg(e,t,n){var r=_n(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(J2(e))e4(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,Ht(a,l)){var u=t.interleaved;u===null?(i.next=i,Fc(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=M2(e,t,i,r),n!==null&&(i=rt(),Bt(n,e,r,i),t4(n,t,r))}}function J2(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function e4(e,t){Ai=Bl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function t4(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sc(e,n)}}var Ul={readContext:Rt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},kg={readContext:Rt,useCallback:function(e,t){return Kt().memoizedState=[e,t===void 0?null:t],e},useContext:Rt,useEffect:vd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,cl(4194308,4,q2.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cl(4194308,4,e,t)},useInsertionEffect:function(e,t){return cl(4,2,e,t)},useMemo:function(e,t){var n=Kt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Kt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=wg.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var t=Kt();return e={current:e},t.memoizedState=e},useState:yd,useDebugValue:qc,useDeferredValue:function(e){return Kt().memoizedState=e},useTransition:function(){var e=yd(!1),t=e[0];return e=vg.bind(null,e[1]),Kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ee,i=Kt();if(Ce){if(n===void 0)throw Error(O(407));n=n()}else{if(n=t(),We===null)throw Error(O(349));lr&30||O2(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,vd(B2.bind(null,r,o,e),[e]),r.flags|=2048,so(9,D2.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Kt(),t=We.identifierPrefix;if(Ce){var n=an,r=sn;n=(r&~(1<<32-Dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=oo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=yg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Sg={readContext:Rt,useCallback:Z2,useContext:Rt,useEffect:Kc,useImperativeHandle:Y2,useInsertionEffect:W2,useLayoutEffect:K2,useMemo:G2,useReducer:oa,useRef:V2,useState:function(){return oa(lo)},useDebugValue:qc,useDeferredValue:function(e){var t=zt();return Q2(t,Fe.memoizedState,e)},useTransition:function(){var e=oa(lo)[0],t=zt().memoizedState;return[e,t]},useMutableSource:A2,useSyncExternalStore:F2,useId:X2,unstable_isNewReconciler:!1},Cg={readContext:Rt,useCallback:Z2,useContext:Rt,useEffect:Kc,useImperativeHandle:Y2,useInsertionEffect:W2,useLayoutEffect:K2,useMemo:G2,useReducer:la,useRef:V2,useState:function(){return la(lo)},useDebugValue:qc,useDeferredValue:function(e){var t=zt();return Fe===null?t.memoizedState=e:Q2(t,Fe.memoizedState,e)},useTransition:function(){var e=la(lo)[0],t=zt().memoizedState;return[e,t]},useMutableSource:A2,useSyncExternalStore:F2,useId:X2,unstable_isNewReconciler:!1};function Nt(e,t){if(e&&e.defaultProps){t=Pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Su(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var gs={isMounted:function(e){return(e=e._reactInternals)?fr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=rt(),i=_n(e),o=un(r,i);o.payload=t,n!=null&&(o.callback=n),t=zn(e,o,i),t!==null&&(Bt(t,e,i,r),al(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=rt(),i=_n(e),o=un(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=zn(e,o,i),t!==null&&(Bt(t,e,i,r),al(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=rt(),r=_n(e),i=un(n,r);i.tag=2,t!=null&&(i.callback=t),t=zn(e,i,r),t!==null&&(Bt(t,e,r,n),al(t,e,r))}};function wd(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Ji(n,r)||!Ji(i,o):!0}function n4(e,t,n){var r=!1,i=Dn,o=t.contextType;return typeof o=="object"&&o!==null?o=Rt(o):(i=ct(t)?ir:Je.current,r=t.contextTypes,o=(r=r!=null)?Kr(e,i):Dn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=gs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function bd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&gs.enqueueReplaceState(t,t.state,null)}function Cu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Oc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Rt(o):(o=ct(t)?ir:Je.current,i.context=Kr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Su(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&gs.enqueueReplaceState(i,i.state,null),Ol(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Gr(e,t){try{var n="",r=t;do n+=J3(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function sa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ju(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var jg=typeof WeakMap=="function"?WeakMap:Map;function r4(e,t,n){n=un(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Vl||(Vl=!0,Nu=r),ju(e,t)},n}function i4(e,t,n){n=un(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ju(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ju(e,t),typeof r!="function"&&(Mn===null?Mn=new Set([this]):Mn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function kd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new jg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Dg.bind(null,e,t,n),t.then(e,e))}function Sd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Cd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=un(-1,1),t.tag=2,zn(n,t,1))),n.lanes|=1),e)}var $g=mn.ReactCurrentOwner,at=!1;function nt(e,t,n,r){t.child=e===null?z2(t,null,n,r):Yr(t,e.child,n,r)}function jd(e,t,n,r,i){n=n.render;var o=t.ref;return Br(t,i),r=Vc(e,t,n,r,o,i),n=Wc(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,fn(e,t,i)):(Ce&&n&&Rc(t),t.flags|=1,nt(e,t,r,i),t.child)}function $d(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!t1(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,o4(e,t,o,r,i)):(e=hl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ji,n(l,r)&&e.ref===t.ref)return fn(e,t,i)}return t.flags|=1,e=Nn(o,r),e.ref=t.ref,e.return=t,t.child=e}function o4(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ji(o,r)&&e.ref===t.ref)if(at=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(at=!0);else return t.lanes=e.lanes,fn(e,t,i)}return $u(e,t,n,r,i)}function l4(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(zr,xt),xt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ye(zr,xt),xt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ye(zr,xt),xt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ye(zr,xt),xt|=r;return nt(e,t,i,n),t.child}function s4(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function $u(e,t,n,r,i){var o=ct(n)?ir:Je.current;return o=Kr(t,o),Br(t,i),n=Vc(e,t,n,r,o,i),r=Wc(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,fn(e,t,i)):(Ce&&r&&Rc(t),t.flags|=1,nt(e,t,n,i),t.child)}function Ed(e,t,n,r,i){if(ct(n)){var o=!0;Ml(t)}else o=!1;if(Br(t,i),t.stateNode===null)dl(e,t),n4(t,n,r),Cu(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Rt(c):(c=ct(n)?ir:Je.current,c=Kr(t,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==c)&&bd(t,l,r,c),kn=!1;var m=t.memoizedState;l.state=m,Ol(t,r,l,i),u=t.memoizedState,a!==r||m!==u||ut.current||kn?(typeof d=="function"&&(Su(t,n,d,r),u=t.memoizedState),(a=kn||wd(t,n,a,r,m,u,c))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,_2(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Nt(t.type,a),l.props=c,p=t.pendingProps,m=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Rt(u):(u=ct(n)?ir:Je.current,u=Kr(t,u));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==p||m!==u)&&bd(t,l,r,u),kn=!1,m=t.memoizedState,l.state=m,Ol(t,r,l,i);var y=t.memoizedState;a!==p||m!==y||ut.current||kn?(typeof h=="function"&&(Su(t,n,h,r),y=t.memoizedState),(c=kn||wd(t,n,c,r,m,y,u)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Eu(e,t,n,r,o,i)}function Eu(e,t,n,r,i,o){s4(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&fd(t,n,!1),fn(e,t,o);r=t.stateNode,$g.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Yr(t,e.child,null,o),t.child=Yr(t,null,a,o)):nt(e,t,a,o),t.memoizedState=r.state,i&&fd(t,n,!0),t.child}function a4(e){var t=e.stateNode;t.pendingContext?pd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pd(e,t.context,!1),Dc(e,t.containerInfo)}function Pd(e,t,n,r,i){return qr(),Mc(i),t.flags|=256,nt(e,t,n,r),t.child}var Pu={dehydrated:null,treeContext:null,retryLane:0};function Tu(e){return{baseLanes:e,cachePool:null,transitions:null}}function u4(e,t,n){var r=t.pendingProps,i=$e.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ye($e,i&1),e===null)return bu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=ys(l,r,0,null),e=rr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Tu(n),t.memoizedState=Pu,e):Yc(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Eg(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Nn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Nn(a,o):(o=rr(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Tu(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Pu,r}return o=e.child,e=o.sibling,r=Nn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Yc(e,t){return t=ys({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Do(e,t,n,r){return r!==null&&Mc(r),Yr(t,e.child,null,n),e=Yc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Eg(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=sa(Error(O(422))),Do(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ys({mode:"visible",children:r.children},i,0,null),o=rr(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Yr(t,e.child,null,l),t.child.memoizedState=Tu(l),t.memoizedState=Pu,o);if(!(t.mode&1))return Do(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(O(419)),r=sa(o,r,void 0),Do(e,t,l,r)}if(a=(l&e.childLanes)!==0,at||a){if(r=We,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,pn(e,i),Bt(r,e,i,-1))}return e1(),r=sa(Error(O(421))),Do(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Bg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,yt=Rn(i.nextSibling),wt=t,Ce=!0,Ot=null,e!==null&&($t[Et++]=sn,$t[Et++]=an,$t[Et++]=or,sn=e.id,an=e.overflow,or=t),t=Yc(t,r.children),t.flags|=4096,t)}function Td(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ku(e.return,t,n)}function aa(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function c4(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(nt(e,t,r.children,n),r=$e.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Td(e,n,t);else if(e.tag===19)Td(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ye($e,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Dl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),aa(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Dl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}aa(t,!0,n,null,o);break;case"together":aa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function dl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function fn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(O(153));if(t.child!==null){for(e=t.child,n=Nn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Nn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pg(e,t,n){switch(t.tag){case 3:a4(t),qr();break;case 5:N2(t);break;case 1:ct(t.type)&&Ml(t);break;case 4:Dc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ye(Al,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ye($e,$e.current&1),t.flags|=128,null):n&t.child.childLanes?u4(e,t,n):(ye($e,$e.current&1),e=fn(e,t,n),e!==null?e.sibling:null);ye($e,$e.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return c4(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye($e,$e.current),r)break;return null;case 22:case 23:return t.lanes=0,l4(e,t,n)}return fn(e,t,n)}var d4,Iu,p4,f4;d4=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Iu=function(){};p4=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Jn(Qt.current);var o=null;switch(n){case"input":i=Ja(e,i),r=Ja(e,r),o=[];break;case"select":i=Pe({},i,{value:void 0}),r=Pe({},r,{value:void 0}),o=[];break;case"textarea":i=nu(e,i),r=nu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Rl)}iu(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ki.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ki.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&be("scroll",e),o||a===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};f4=function(e,t,n,r){n!==r&&(t.flags|=4)};function vi(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Tg(e,t,n){var r=t.pendingProps;switch(zc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(t),null;case 1:return ct(t.type)&&zl(),Qe(t),null;case 3:return r=t.stateNode,Zr(),Se(ut),Se(Je),Uc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Fo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ot!==null&&(Ou(Ot),Ot=null))),Iu(e,t),Qe(t),null;case 5:Bc(t);var i=Jn(io.current);if(n=t.type,e!==null&&t.stateNode!=null)p4(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(O(166));return Qe(t),null}if(e=Jn(Qt.current),Fo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Yt]=t,r[no]=o,e=(t.mode&1)!==0,n){case"dialog":be("cancel",r),be("close",r);break;case"iframe":case"object":case"embed":be("load",r);break;case"video":case"audio":for(i=0;i<Ti.length;i++)be(Ti[i],r);break;case"source":be("error",r);break;case"img":case"image":case"link":be("error",r),be("load",r);break;case"details":be("toggle",r);break;case"input":O1(r,o),be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},be("invalid",r);break;case"textarea":B1(r,o),be("invalid",r)}iu(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ao(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ao(r.textContent,a,e),i=["children",""+a]):Ki.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&be("scroll",r)}switch(n){case"input":Po(r),D1(r,o,!0);break;case"textarea":Po(r),U1(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Rl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Yt]=t,e[no]=r,d4(e,t,!1,!1),t.stateNode=e;e:{switch(l=ou(n,r),n){case"dialog":be("cancel",e),be("close",e),i=r;break;case"iframe":case"object":case"embed":be("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ti.length;i++)be(Ti[i],e);i=r;break;case"source":be("error",e),i=r;break;case"img":case"image":case"link":be("error",e),be("load",e),i=r;break;case"details":be("toggle",e),i=r;break;case"input":O1(e,r),i=Ja(e,r),be("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Pe({},r,{value:void 0}),be("invalid",e);break;case"textarea":B1(e,r),i=nu(e,r),be("invalid",e);break;default:i=r}iu(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?Vf(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Uf(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&qi(e,u):typeof u=="number"&&qi(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ki.hasOwnProperty(o)?u!=null&&o==="onScroll"&&be("scroll",e):u!=null&&xc(e,o,u,l))}switch(n){case"input":Po(e),D1(e,r,!1);break;case"textarea":Po(e),U1(e);break;case"option":r.value!=null&&e.setAttribute("value",""+On(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ar(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ar(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Rl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Qe(t),null;case 6:if(e&&t.stateNode!=null)f4(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(O(166));if(n=Jn(io.current),Jn(Qt.current),Fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Yt]=t,(o=r.nodeValue!==n)&&(e=wt,e!==null))switch(e.tag){case 3:Ao(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ao(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yt]=t,t.stateNode=r}return Qe(t),null;case 13:if(Se($e),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&yt!==null&&t.mode&1&&!(t.flags&128))I2(),qr(),t.flags|=98560,o=!1;else if(o=Fo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(O(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(O(317));o[Yt]=t}else qr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Qe(t),o=!1}else Ot!==null&&(Ou(Ot),Ot=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||$e.current&1?De===0&&(De=3):e1())),t.updateQueue!==null&&(t.flags|=4),Qe(t),null);case 4:return Zr(),Iu(e,t),e===null&&eo(t.stateNode.containerInfo),Qe(t),null;case 10:return Ac(t.type._context),Qe(t),null;case 17:return ct(t.type)&&zl(),Qe(t),null;case 19:if(Se($e),o=t.memoizedState,o===null)return Qe(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)vi(o,!1);else{if(De!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Dl(e),l!==null){for(t.flags|=128,vi(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ye($e,$e.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ie()>Qr&&(t.flags|=128,r=!0,vi(o,!1),t.lanes=4194304)}else{if(!r)if(e=Dl(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Ce)return Qe(t),null}else 2*Ie()-o.renderingStartTime>Qr&&n!==1073741824&&(t.flags|=128,r=!0,vi(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ie(),t.sibling=null,n=$e.current,ye($e,r?n&1|2:n&1),t):(Qe(t),null);case 22:case 23:return Jc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xt&1073741824&&(Qe(t),t.subtreeFlags&6&&(t.flags|=8192)):Qe(t),null;case 24:return null;case 25:return null}throw Error(O(156,t.tag))}function Ig(e,t){switch(zc(t),t.tag){case 1:return ct(t.type)&&zl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zr(),Se(ut),Se(Je),Uc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Bc(t),null;case 13:if(Se($e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(O(340));qr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Se($e),null;case 4:return Zr(),null;case 10:return Ac(t.type._context),null;case 22:case 23:return Jc(),null;case 24:return null;default:return null}}var Bo=!1,Xe=!1,Rg=typeof WeakSet=="function"?WeakSet:Set,K=null;function Rr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(e,t,r)}else n.current=null}function Ru(e,t,n){try{n()}catch(r){Te(e,t,r)}}var Id=!1;function zg(e,t){if(mu=Pl,e=x2(),Ic(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,u=-1,c=0,d=0,p=e,m=null;t:for(;;){for(var h;p!==n||i!==0&&p.nodeType!==3||(a=l+i),p!==o||r!==0&&p.nodeType!==3||(u=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(h=p.firstChild)!==null;)m=p,p=h;for(;;){if(p===e)break t;if(m===n&&++c===i&&(a=l),m===o&&++d===r&&(u=l),(h=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=h}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(gu={focusedElem:e,selectionRange:n},Pl=!1,K=t;K!==null;)if(t=K,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,K=e;else for(;K!==null;){t=K;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,$=y.memoizedState,L=t.stateNode,x=L.getSnapshotBeforeUpdate(t.elementType===t.type?v:Nt(t.type,v),$);L.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(k){Te(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,K=e;break}K=t.return}return y=Id,Id=!1,y}function Fi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ru(t,n,o)}i=i.next}while(i!==r)}}function Ls(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function zu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function h4(e){var t=e.alternate;t!==null&&(e.alternate=null,h4(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Yt],delete t[no],delete t[yu],delete t[mg],delete t[gg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function m4(e){return e.tag===5||e.tag===3||e.tag===4}function Rd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||m4(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Rl));else if(r!==4&&(e=e.child,e!==null))for(Mu(e,t,n),e=e.sibling;e!==null;)Mu(e,t,n),e=e.sibling}function _u(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(_u(e,t,n),e=e.sibling;e!==null;)_u(e,t,n),e=e.sibling}var qe=null,At=!1;function xn(e,t,n){for(n=n.child;n!==null;)g4(e,t,n),n=n.sibling}function g4(e,t,n){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(us,n)}catch{}switch(n.tag){case 5:Xe||Rr(n,t);case 6:var r=qe,i=At;qe=null,xn(e,t,n),qe=r,At=i,qe!==null&&(At?(e=qe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(At?(e=qe,n=n.stateNode,e.nodeType===8?ta(e.parentNode,n):e.nodeType===1&&ta(e,n),Qi(e)):ta(qe,n.stateNode));break;case 4:r=qe,i=At,qe=n.stateNode.containerInfo,At=!0,xn(e,t,n),qe=r,At=i;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Ru(n,t,l),i=i.next}while(i!==r)}xn(e,t,n);break;case 1:if(!Xe&&(Rr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Te(n,t,a)}xn(e,t,n);break;case 21:xn(e,t,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,xn(e,t,n),Xe=r):xn(e,t,n);break;default:xn(e,t,n)}}function zd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Rg),t.forEach(function(r){var i=Ug.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function _t(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:qe=a.stateNode,At=!1;break e;case 3:qe=a.stateNode.containerInfo,At=!0;break e;case 4:qe=a.stateNode.containerInfo,At=!0;break e}a=a.return}if(qe===null)throw Error(O(160));g4(o,l,i),qe=null,At=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Te(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)L4(t,e),t=t.sibling}function L4(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_t(t,e),Wt(e),r&4){try{Fi(3,e,e.return),Ls(3,e)}catch(v){Te(e,e.return,v)}try{Fi(5,e,e.return)}catch(v){Te(e,e.return,v)}}break;case 1:_t(t,e),Wt(e),r&512&&n!==null&&Rr(n,n.return);break;case 5:if(_t(t,e),Wt(e),r&512&&n!==null&&Rr(n,n.return),e.flags&32){var i=e.stateNode;try{qi(i,"")}catch(v){Te(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Of(i,o),ou(a,l);var c=ou(a,o);for(l=0;l<u.length;l+=2){var d=u[l],p=u[l+1];d==="style"?Vf(i,p):d==="dangerouslySetInnerHTML"?Uf(i,p):d==="children"?qi(i,p):xc(i,d,p,c)}switch(a){case"input":eu(i,o);break;case"textarea":Df(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?Ar(i,!!o.multiple,h,!1):m!==!!o.multiple&&(o.defaultValue!=null?Ar(i,!!o.multiple,o.defaultValue,!0):Ar(i,!!o.multiple,o.multiple?[]:"",!1))}i[no]=o}catch(v){Te(e,e.return,v)}}break;case 6:if(_t(t,e),Wt(e),r&4){if(e.stateNode===null)throw Error(O(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){Te(e,e.return,v)}}break;case 3:if(_t(t,e),Wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qi(t.containerInfo)}catch(v){Te(e,e.return,v)}break;case 4:_t(t,e),Wt(e);break;case 13:_t(t,e),Wt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Qc=Ie())),r&4&&zd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Xe=(c=Xe)||d,_t(t,e),Xe=c):_t(t,e),Wt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(K=e,d=e.child;d!==null;){for(p=K=d;K!==null;){switch(m=K,h=m.child,m.tag){case 0:case 11:case 14:case 15:Fi(4,m,m.return);break;case 1:Rr(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){Te(r,n,v)}}break;case 5:Rr(m,m.return);break;case 22:if(m.memoizedState!==null){_d(p);continue}}h!==null?(h.return=m,K=h):_d(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,u=p.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Hf("display",l))}catch(v){Te(e,e.return,v)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(v){Te(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:_t(t,e),Wt(e),r&4&&zd(e);break;case 21:break;default:_t(t,e),Wt(e)}}function Wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(m4(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(qi(i,""),r.flags&=-33);var o=Rd(e);_u(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Rd(e);Mu(e,a,l);break;default:throw Error(O(161))}}catch(u){Te(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mg(e,t,n){K=e,x4(e)}function x4(e,t,n){for(var r=(e.mode&1)!==0;K!==null;){var i=K,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Bo;if(!l){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Xe;a=Bo;var c=Xe;if(Bo=l,(Xe=u)&&!c)for(K=i;K!==null;)l=K,u=l.child,l.tag===22&&l.memoizedState!==null?Nd(i):u!==null?(u.return=l,K=u):Nd(i);for(;o!==null;)K=o,x4(o),o=o.sibling;K=i,Bo=a,Xe=c}Md(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,K=o):Md(e)}}function Md(e){for(;K!==null;){var t=K;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Xe||Ls(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Nt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&xd(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}xd(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Qi(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}Xe||t.flags&512&&zu(t)}catch(m){Te(t,t.return,m)}}if(t===e){K=null;break}if(n=t.sibling,n!==null){n.return=t.return,K=n;break}K=t.return}}function _d(e){for(;K!==null;){var t=K;if(t===e){K=null;break}var n=t.sibling;if(n!==null){n.return=t.return,K=n;break}K=t.return}}function Nd(e){for(;K!==null;){var t=K;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ls(4,t)}catch(u){Te(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){Te(t,i,u)}}var o=t.return;try{zu(t)}catch(u){Te(t,o,u)}break;case 5:var l=t.return;try{zu(t)}catch(u){Te(t,l,u)}}}catch(u){Te(t,t.return,u)}if(t===e){K=null;break}var a=t.sibling;if(a!==null){a.return=t.return,K=a;break}K=t.return}}var _g=Math.ceil,Hl=mn.ReactCurrentDispatcher,Zc=mn.ReactCurrentOwner,It=mn.ReactCurrentBatchConfig,ce=0,We=null,Ae=null,Ye=0,xt=0,zr=Un(0),De=0,ao=null,sr=0,xs=0,Gc=0,Oi=null,st=null,Qc=0,Qr=1/0,rn=null,Vl=!1,Nu=null,Mn=null,Uo=!1,$n=null,Wl=0,Di=0,Au=null,pl=-1,fl=0;function rt(){return ce&6?Ie():pl!==-1?pl:pl=Ie()}function _n(e){return e.mode&1?ce&2&&Ye!==0?Ye&-Ye:xg.transition!==null?(fl===0&&(fl=n2()),fl):(e=me,e!==0||(e=window.event,e=e===void 0?16:u2(e.type)),e):1}function Bt(e,t,n,r){if(50<Di)throw Di=0,Au=null,Error(O(185));go(e,n,r),(!(ce&2)||e!==We)&&(e===We&&(!(ce&2)&&(xs|=n),De===4&&Cn(e,Ye)),dt(e,r),n===1&&ce===0&&!(t.mode&1)&&(Qr=Ie()+500,hs&&Hn()))}function dt(e,t){var n=e.callbackNode;xm(e,t);var r=El(e,e===We?Ye:0);if(r===0)n!==null&&W1(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&W1(n),t===1)e.tag===0?Lg(Ad.bind(null,e)):E2(Ad.bind(null,e)),fg(function(){!(ce&6)&&Hn()}),n=null;else{switch(r2(r)){case 1:n=kc;break;case 4:n=e2;break;case 16:n=$l;break;case 536870912:n=t2;break;default:n=$l}n=j4(n,y4.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function y4(e,t){if(pl=-1,fl=0,ce&6)throw Error(O(327));var n=e.callbackNode;if(Ur()&&e.callbackNode!==n)return null;var r=El(e,e===We?Ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Kl(e,r);else{t=r;var i=ce;ce|=2;var o=w4();(We!==e||Ye!==t)&&(rn=null,Qr=Ie()+500,nr(e,t));do try{Fg();break}catch(a){v4(e,a)}while(!0);Nc(),Hl.current=o,ce=i,Ae!==null?t=0:(We=null,Ye=0,t=De)}if(t!==0){if(t===2&&(i=cu(e),i!==0&&(r=i,t=Fu(e,i))),t===1)throw n=ao,nr(e,0),Cn(e,r),dt(e,Ie()),n;if(t===6)Cn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Ng(i)&&(t=Kl(e,r),t===2&&(o=cu(e),o!==0&&(r=o,t=Fu(e,o))),t===1))throw n=ao,nr(e,0),Cn(e,r),dt(e,Ie()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(O(345));case 2:Yn(e,st,rn);break;case 3:if(Cn(e,r),(r&130023424)===r&&(t=Qc+500-Ie(),10<t)){if(El(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){rt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=xu(Yn.bind(null,e,st,rn),t);break}Yn(e,st,rn);break;case 4:if(Cn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Dt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_g(r/1960))-r,10<r){e.timeoutHandle=xu(Yn.bind(null,e,st,rn),r);break}Yn(e,st,rn);break;case 5:Yn(e,st,rn);break;default:throw Error(O(329))}}}return dt(e,Ie()),e.callbackNode===n?y4.bind(null,e):null}function Fu(e,t){var n=Oi;return e.current.memoizedState.isDehydrated&&(nr(e,t).flags|=256),e=Kl(e,t),e!==2&&(t=st,st=n,t!==null&&Ou(t)),e}function Ou(e){st===null?st=e:st.push.apply(st,e)}function Ng(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ht(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Cn(e,t){for(t&=~Gc,t&=~xs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Dt(t),r=1<<n;e[n]=-1,t&=~r}}function Ad(e){if(ce&6)throw Error(O(327));Ur();var t=El(e,0);if(!(t&1))return dt(e,Ie()),null;var n=Kl(e,t);if(e.tag!==0&&n===2){var r=cu(e);r!==0&&(t=r,n=Fu(e,r))}if(n===1)throw n=ao,nr(e,0),Cn(e,t),dt(e,Ie()),n;if(n===6)throw Error(O(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yn(e,st,rn),dt(e,Ie()),null}function Xc(e,t){var n=ce;ce|=1;try{return e(t)}finally{ce=n,ce===0&&(Qr=Ie()+500,hs&&Hn())}}function ar(e){$n!==null&&$n.tag===0&&!(ce&6)&&Ur();var t=ce;ce|=1;var n=It.transition,r=me;try{if(It.transition=null,me=1,e)return e()}finally{me=r,It.transition=n,ce=t,!(ce&6)&&Hn()}}function Jc(){xt=zr.current,Se(zr)}function nr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,pg(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(zc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zl();break;case 3:Zr(),Se(ut),Se(Je),Uc();break;case 5:Bc(r);break;case 4:Zr();break;case 13:Se($e);break;case 19:Se($e);break;case 10:Ac(r.type._context);break;case 22:case 23:Jc()}n=n.return}if(We=e,Ae=e=Nn(e.current,null),Ye=xt=t,De=0,ao=null,Gc=xs=sr=0,st=Oi=null,Xn!==null){for(t=0;t<Xn.length;t++)if(n=Xn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Xn=null}return e}function v4(e,t){do{var n=Ae;try{if(Nc(),ul.current=Ul,Bl){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Bl=!1}if(lr=0,He=Fe=Ee=null,Ai=!1,oo=0,Zc.current=null,n===null||n.return===null){De=1,ao=t,Ae=null;break}e:{var o=e,l=n.return,a=n,u=t;if(t=Ye,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=Sd(l);if(h!==null){h.flags&=-257,Cd(h,l,a,o,t),h.mode&1&&kd(o,c,t),t=h,u=c;var y=t.updateQueue;if(y===null){var v=new Set;v.add(u),t.updateQueue=v}else y.add(u);break e}else{if(!(t&1)){kd(o,c,t),e1();break e}u=Error(O(426))}}else if(Ce&&a.mode&1){var $=Sd(l);if($!==null){!($.flags&65536)&&($.flags|=256),Cd($,l,a,o,t),Mc(Gr(u,a));break e}}o=u=Gr(u,a),De!==4&&(De=2),Oi===null?Oi=[o]:Oi.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var L=r4(o,u,t);Ld(o,L);break e;case 1:a=u;var x=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof x.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Mn===null||!Mn.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=i4(o,a,t);Ld(o,k);break e}}o=o.return}while(o!==null)}k4(n)}catch(P){t=P,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(!0)}function w4(){var e=Hl.current;return Hl.current=Ul,e===null?Ul:e}function e1(){(De===0||De===3||De===2)&&(De=4),We===null||!(sr&268435455)&&!(xs&268435455)||Cn(We,Ye)}function Kl(e,t){var n=ce;ce|=2;var r=w4();(We!==e||Ye!==t)&&(rn=null,nr(e,t));do try{Ag();break}catch(i){v4(e,i)}while(!0);if(Nc(),ce=n,Hl.current=r,Ae!==null)throw Error(O(261));return We=null,Ye=0,De}function Ag(){for(;Ae!==null;)b4(Ae)}function Fg(){for(;Ae!==null&&!um();)b4(Ae)}function b4(e){var t=C4(e.alternate,e,xt);e.memoizedProps=e.pendingProps,t===null?k4(e):Ae=t,Zc.current=null}function k4(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ig(n,t),n!==null){n.flags&=32767,Ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{De=6,Ae=null;return}}else if(n=Tg(n,t,xt),n!==null){Ae=n;return}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);De===0&&(De=5)}function Yn(e,t,n){var r=me,i=It.transition;try{It.transition=null,me=1,Og(e,t,n,r)}finally{It.transition=i,me=r}return null}function Og(e,t,n,r){do Ur();while($n!==null);if(ce&6)throw Error(O(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(O(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ym(e,o),e===We&&(Ae=We=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Uo||(Uo=!0,j4($l,function(){return Ur(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=It.transition,It.transition=null;var l=me;me=1;var a=ce;ce|=4,Zc.current=null,zg(e,n),L4(n,e),og(gu),Pl=!!mu,gu=mu=null,e.current=n,Mg(n),cm(),ce=a,me=l,It.transition=o}else e.current=n;if(Uo&&(Uo=!1,$n=e,Wl=i),o=e.pendingLanes,o===0&&(Mn=null),fm(n.stateNode),dt(e,Ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Vl)throw Vl=!1,e=Nu,Nu=null,e;return Wl&1&&e.tag!==0&&Ur(),o=e.pendingLanes,o&1?e===Au?Di++:(Di=0,Au=e):Di=0,Hn(),null}function Ur(){if($n!==null){var e=r2(Wl),t=It.transition,n=me;try{if(It.transition=null,me=16>e?16:e,$n===null)var r=!1;else{if(e=$n,$n=null,Wl=0,ce&6)throw Error(O(331));var i=ce;for(ce|=4,K=e.current;K!==null;){var o=K,l=o.child;if(K.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(K=c;K!==null;){var d=K;switch(d.tag){case 0:case 11:case 15:Fi(8,d,o)}var p=d.child;if(p!==null)p.return=d,K=p;else for(;K!==null;){d=K;var m=d.sibling,h=d.return;if(h4(d),d===c){K=null;break}if(m!==null){m.return=h,K=m;break}K=h}}}var y=o.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var $=v.sibling;v.sibling=null,v=$}while(v!==null)}}K=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,K=l;else e:for(;K!==null;){if(o=K,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Fi(9,o,o.return)}var L=o.sibling;if(L!==null){L.return=o.return,K=L;break e}K=o.return}}var x=e.current;for(K=x;K!==null;){l=K;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,K=g;else e:for(l=x;K!==null;){if(a=K,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ls(9,a)}}catch(P){Te(a,a.return,P)}if(a===l){K=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,K=k;break e}K=a.return}}if(ce=i,Hn(),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(us,e)}catch{}r=!0}return r}finally{me=n,It.transition=t}}return!1}function Fd(e,t,n){t=Gr(n,t),t=r4(e,t,1),e=zn(e,t,1),t=rt(),e!==null&&(go(e,1,t),dt(e,t))}function Te(e,t,n){if(e.tag===3)Fd(e,e,n);else for(;t!==null;){if(t.tag===3){Fd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mn===null||!Mn.has(r))){e=Gr(n,e),e=i4(t,e,1),t=zn(t,e,1),e=rt(),t!==null&&(go(t,1,e),dt(t,e));break}}t=t.return}}function Dg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=rt(),e.pingedLanes|=e.suspendedLanes&n,We===e&&(Ye&n)===n&&(De===4||De===3&&(Ye&130023424)===Ye&&500>Ie()-Qc?nr(e,0):Gc|=n),dt(e,t)}function S4(e,t){t===0&&(e.mode&1?(t=Ro,Ro<<=1,!(Ro&130023424)&&(Ro=4194304)):t=1);var n=rt();e=pn(e,t),e!==null&&(go(e,t,n),dt(e,n))}function Bg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),S4(e,n)}function Ug(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(t),S4(e,n)}var C4;C4=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ut.current)at=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return at=!1,Pg(e,t,n);at=!!(e.flags&131072)}else at=!1,Ce&&t.flags&1048576&&P2(t,Nl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;dl(e,t),e=t.pendingProps;var i=Kr(t,Je.current);Br(t,n),i=Vc(null,t,r,e,i,n);var o=Wc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ct(r)?(o=!0,Ml(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Oc(t),i.updater=gs,t.stateNode=i,i._reactInternals=t,Cu(t,r,e,n),t=Eu(null,t,r,!0,o,n)):(t.tag=0,Ce&&o&&Rc(t),nt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(dl(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Vg(r),e=Nt(r,e),i){case 0:t=$u(null,t,r,e,n);break e;case 1:t=Ed(null,t,r,e,n);break e;case 11:t=jd(null,t,r,e,n);break e;case 14:t=$d(null,t,r,Nt(r.type,e),n);break e}throw Error(O(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),$u(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),Ed(e,t,r,i,n);case 3:e:{if(a4(t),e===null)throw Error(O(387));r=t.pendingProps,o=t.memoizedState,i=o.element,_2(e,t),Ol(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Gr(Error(O(423)),t),t=Pd(e,t,r,n,i);break e}else if(r!==i){i=Gr(Error(O(424)),t),t=Pd(e,t,r,n,i);break e}else for(yt=Rn(t.stateNode.containerInfo.firstChild),wt=t,Ce=!0,Ot=null,n=z2(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qr(),r===i){t=fn(e,t,n);break e}nt(e,t,r,n)}t=t.child}return t;case 5:return N2(t),e===null&&bu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Lu(r,i)?l=null:o!==null&&Lu(r,o)&&(t.flags|=32),s4(e,t),nt(e,t,l,n),t.child;case 6:return e===null&&bu(t),null;case 13:return u4(e,t,n);case 4:return Dc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Yr(t,null,r,n):nt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),jd(e,t,r,i,n);case 7:return nt(e,t,t.pendingProps,n),t.child;case 8:return nt(e,t,t.pendingProps.children,n),t.child;case 12:return nt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,ye(Al,r._currentValue),r._currentValue=l,o!==null)if(Ht(o.value,l)){if(o.children===i.children&&!ut.current){t=fn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=un(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),ku(o.return,n,t),a.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(O(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),ku(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}nt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Br(t,n),i=Rt(i),r=r(i),t.flags|=1,nt(e,t,r,n),t.child;case 14:return r=t.type,i=Nt(r,t.pendingProps),i=Nt(r.type,i),$d(e,t,r,i,n);case 15:return o4(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Nt(r,i),dl(e,t),t.tag=1,ct(r)?(e=!0,Ml(t)):e=!1,Br(t,n),n4(t,r,i),Cu(t,r,i,n),Eu(null,t,r,!0,e,n);case 19:return c4(e,t,n);case 22:return l4(e,t,n)}throw Error(O(156,t.tag))};function j4(e,t){return Jf(e,t)}function Hg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,n,r){return new Hg(e,t,n,r)}function t1(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vg(e){if(typeof e=="function")return t1(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vc)return 11;if(e===wc)return 14}return 2}function Nn(e,t){var n=e.alternate;return n===null?(n=Tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function hl(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")t1(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case kr:return rr(n.children,i,o,t);case yc:l=8,i|=8;break;case Za:return e=Tt(12,n,t,i|2),e.elementType=Za,e.lanes=o,e;case Ga:return e=Tt(13,n,t,i),e.elementType=Ga,e.lanes=o,e;case Qa:return e=Tt(19,n,t,i),e.elementType=Qa,e.lanes=o,e;case Nf:return ys(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Mf:l=10;break e;case _f:l=9;break e;case vc:l=11;break e;case wc:l=14;break e;case bn:l=16,r=null;break e}throw Error(O(130,e==null?e:typeof e,""))}return t=Tt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function rr(e,t,n,r){return e=Tt(7,e,r,t),e.lanes=n,e}function ys(e,t,n,r){return e=Tt(22,e,r,t),e.elementType=Nf,e.lanes=n,e.stateNode={isHidden:!1},e}function ua(e,t,n){return e=Tt(6,e,null,t),e.lanes=n,e}function ca(e,t,n){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Wg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vs(0),this.expirationTimes=Vs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function n1(e,t,n,r,i,o,l,a,u){return e=new Wg(e,t,n,a,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Tt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oc(o),e}function Kg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:br,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $4(e){if(!e)return Dn;e=e._reactInternals;e:{if(fr(e)!==e||e.tag!==1)throw Error(O(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ct(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(O(171))}if(e.tag===1){var n=e.type;if(ct(n))return $2(e,n,t)}return t}function E4(e,t,n,r,i,o,l,a,u){return e=n1(n,r,!0,e,i,o,l,a,u),e.context=$4(null),n=e.current,r=rt(),i=_n(n),o=un(r,i),o.callback=t??null,zn(n,o,i),e.current.lanes=i,go(e,i,r),dt(e,r),e}function vs(e,t,n,r){var i=t.current,o=rt(),l=_n(i);return n=$4(n),t.context===null?t.context=n:t.pendingContext=n,t=un(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=zn(i,t,l),e!==null&&(Bt(e,i,l,o),al(e,i,l)),l}function ql(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Od(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function r1(e,t){Od(e,t),(e=e.alternate)&&Od(e,t)}function qg(){return null}var P4=typeof reportError=="function"?reportError:function(e){console.error(e)};function i1(e){this._internalRoot=e}ws.prototype.render=i1.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(O(409));vs(e,t,null,null)};ws.prototype.unmount=i1.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ar(function(){vs(null,e,null,null)}),t[dn]=null}};function ws(e){this._internalRoot=e}ws.prototype.unstable_scheduleHydration=function(e){if(e){var t=l2();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Sn.length&&t!==0&&t<Sn[n].priority;n++);Sn.splice(n,0,e),n===0&&a2(e)}};function o1(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Dd(){}function Yg(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=ql(l);o.call(c)}}var l=E4(t,r,e,0,null,!1,!1,"",Dd);return e._reactRootContainer=l,e[dn]=l.current,eo(e.nodeType===8?e.parentNode:e),ar(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ql(u);a.call(c)}}var u=n1(e,0,!1,null,null,!1,!1,"",Dd);return e._reactRootContainer=u,e[dn]=u.current,eo(e.nodeType===8?e.parentNode:e),ar(function(){vs(t,u,n,r)}),u}function ks(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var u=ql(l);a.call(u)}}vs(t,l,e,i)}else l=Yg(n,t,e,i,r);return ql(l)}i2=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pi(t.pendingLanes);n!==0&&(Sc(t,n|1),dt(t,Ie()),!(ce&6)&&(Qr=Ie()+500,Hn()))}break;case 13:ar(function(){var r=pn(e,1);if(r!==null){var i=rt();Bt(r,e,1,i)}}),r1(e,1)}};Cc=function(e){if(e.tag===13){var t=pn(e,134217728);if(t!==null){var n=rt();Bt(t,e,134217728,n)}r1(e,134217728)}};o2=function(e){if(e.tag===13){var t=_n(e),n=pn(e,t);if(n!==null){var r=rt();Bt(n,e,t,r)}r1(e,t)}};l2=function(){return me};s2=function(e,t){var n=me;try{return me=e,t()}finally{me=n}};su=function(e,t,n){switch(t){case"input":if(eu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=fs(r);if(!i)throw Error(O(90));Ff(r),eu(r,i)}}}break;case"textarea":Df(e,n);break;case"select":t=n.value,t!=null&&Ar(e,!!n.multiple,t,!1)}};qf=Xc;Yf=ar;var Zg={usingClientEntryPoint:!1,Events:[xo,$r,fs,Wf,Kf,Xc]},wi={findFiberByHostInstance:Qn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gg={bundleType:wi.bundleType,version:wi.version,rendererPackageName:wi.rendererPackageName,rendererConfig:wi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qf(e),e===null?null:e.stateNode},findFiberByHostInstance:wi.findFiberByHostInstance||qg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ho.isDisabled&&Ho.supportsFiber)try{us=Ho.inject(Gg),Gt=Ho}catch{}}kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zg;kt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!o1(t))throw Error(O(200));return Kg(e,t,null,n)};kt.createRoot=function(e,t){if(!o1(e))throw Error(O(299));var n=!1,r="",i=P4;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=n1(e,1,!1,null,null,n,!1,r,i),e[dn]=t.current,eo(e.nodeType===8?e.parentNode:e),new i1(t)};kt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(O(188)):(e=Object.keys(e).join(","),Error(O(268,e)));return e=Qf(t),e=e===null?null:e.stateNode,e};kt.flushSync=function(e){return ar(e)};kt.hydrate=function(e,t,n){if(!bs(t))throw Error(O(200));return ks(null,e,t,!0,n)};kt.hydrateRoot=function(e,t,n){if(!o1(e))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=P4;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=E4(t,null,e,1,n??null,i,!1,o,l),e[dn]=t.current,eo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ws(t)};kt.render=function(e,t,n){if(!bs(t))throw Error(O(200));return ks(null,e,t,!1,n)};kt.unmountComponentAtNode=function(e){if(!bs(e))throw Error(O(40));return e._reactRootContainer?(ar(function(){ks(null,null,e,!1,function(){e._reactRootContainer=null,e[dn]=null})}),!0):!1};kt.unstable_batchedUpdates=Xc;kt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!bs(n))throw Error(O(200));if(e==null||e._reactInternals===void 0)throw Error(O(38));return ks(e,t,n,!1,r)};kt.version="18.3.1-next-f1338f8080-20240426";function T4(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T4)}catch(e){console.error(e)}}T4(),Tf.exports=kt;var I4=Tf.exports,Bd=I4;qa.createRoot=Bd.createRoot,qa.hydrateRoot=Bd.hydrateRoot;var Ve=function(){return Ve=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Ve.apply(this,arguments)};function Xr(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var ke="-ms-",Bi="-moz-",pe="-webkit-",R4="comm",Ss="rule",l1="decl",Qg="@import",Xg="@namespace",z4="@keyframes",Jg="@layer",M4=Math.abs,s1=String.fromCharCode,Du=Object.assign;function e5(e,t){return Oe(e,0)^45?(((t<<2^Oe(e,0))<<2^Oe(e,1))<<2^Oe(e,2))<<2^Oe(e,3):0}function _4(e){return e.trim()}function on(e,t){return(e=t.exec(e))?e[0]:e}function oe(e,t,n){return e.replace(t,n)}function ml(e,t,n){return e.indexOf(t,n)}function Oe(e,t){return e.charCodeAt(t)|0}function ur(e,t,n){return e.slice(t,n)}function Ft(e){return e.length}function N4(e){return e.length}function Ii(e,t){return t.push(e),e}function t5(e,t){return e.map(t).join("")}function Ud(e,t){return e.filter(function(n){return!on(n,t)})}var Cs=1,Jr=1,A4=0,Mt=0,Ne=0,ai="";function js(e,t,n,r,i,o,l,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Cs,column:Jr,length:l,return:"",siblings:a}}function wn(e,t){return Du(js("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function xr(e){for(;e.root;)e=wn(e.root,{children:[e]});Ii(e,e.siblings)}function n5(){return Ne}function r5(){return Ne=Mt>0?Oe(ai,--Mt):0,Jr--,Ne===10&&(Jr=1,Cs--),Ne}function Ut(){return Ne=Mt<A4?Oe(ai,Mt++):0,Jr++,Ne===10&&(Jr=1,Cs++),Ne}function En(){return Oe(ai,Mt)}function gl(){return Mt}function $s(e,t){return ur(ai,e,t)}function uo(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function i5(e){return Cs=Jr=1,A4=Ft(ai=e),Mt=0,[]}function o5(e){return ai="",e}function da(e){return _4($s(Mt-1,Bu(e===91?e+2:e===40?e+1:e)))}function l5(e){for(;(Ne=En())&&Ne<33;)Ut();return uo(e)>2||uo(Ne)>3?"":" "}function s5(e,t){for(;--t&&Ut()&&!(Ne<48||Ne>102||Ne>57&&Ne<65||Ne>70&&Ne<97););return $s(e,gl()+(t<6&&En()==32&&Ut()==32))}function Bu(e){for(;Ut();)switch(Ne){case e:return Mt;case 34:case 39:e!==34&&e!==39&&Bu(Ne);break;case 40:e===41&&Bu(e);break;case 92:Ut();break}return Mt}function a5(e,t){for(;Ut()&&e+Ne!==57;)if(e+Ne===84&&En()===47)break;return"/*"+$s(t,Mt-1)+"*"+s1(e===47?e:Ut())}function u5(e){for(;!uo(En());)Ut();return $s(e,Mt)}function c5(e){return o5(Ll("",null,null,null,[""],e=i5(e),0,[0],e))}function Ll(e,t,n,r,i,o,l,a,u){for(var c=0,d=0,p=l,m=0,h=0,y=0,v=1,$=1,L=1,x=0,g="",k=i,P=o,S=r,j=g;$;)switch(y=x,x=Ut()){case 40:if(y!=108&&Oe(j,p-1)==58){ml(j+=oe(da(x),"&","&\f"),"&\f",M4(c?a[c-1]:0))!=-1&&(L=-1);break}case 34:case 39:case 91:j+=da(x);break;case 9:case 10:case 13:case 32:j+=l5(y);break;case 92:j+=s5(gl()-1,7);continue;case 47:switch(En()){case 42:case 47:Ii(d5(a5(Ut(),gl()),t,n,u),u),(uo(y||1)==5||uo(En()||1)==5)&&Ft(j)&&ur(j,-1,void 0)!==" "&&(j+=" ");break;default:j+="/"}break;case 123*v:a[c++]=Ft(j)*L;case 125*v:case 59:case 0:switch(x){case 0:case 125:$=0;case 59+d:L==-1&&(j=oe(j,/\f/g,"")),h>0&&(Ft(j)-p||v===0&&y===47)&&Ii(h>32?Vd(j+";",r,n,p-1,u):Vd(oe(j," ","")+";",r,n,p-2,u),u);break;case 59:j+=";";default:if(Ii(S=Hd(j,t,n,c,d,i,a,g,k=[],P=[],p,o),o),x===123)if(d===0)Ll(j,t,S,S,k,o,p,a,P);else{switch(m){case 99:if(Oe(j,3)===110)break;case 108:if(Oe(j,2)===97)break;default:d=0;case 100:case 109:case 115:}d?Ll(e,S,S,r&&Ii(Hd(e,S,S,0,0,i,a,g,i,k=[],p,P),P),i,P,p,a,r?k:P):Ll(j,S,S,S,[""],P,0,a,P)}}c=d=h=0,v=L=1,g=j="",p=l;break;case 58:p=1+Ft(j),h=y;default:if(v<1){if(x==123)--v;else if(x==125&&v++==0&&r5()==125)continue}switch(j+=s1(x),x*v){case 38:L=d>0?1:(j+="\f",-1);break;case 44:a[c++]=(Ft(j)-1)*L,L=1;break;case 64:En()===45&&(j+=da(Ut())),m=En(),d=p=Ft(g=j+=u5(gl())),x++;break;case 45:y===45&&Ft(j)==2&&(v=0)}}return o}function Hd(e,t,n,r,i,o,l,a,u,c,d,p){for(var m=i-1,h=i===0?o:[""],y=N4(h),v=0,$=0,L=0;v<r;++v)for(var x=0,g=ur(e,m+1,m=M4($=l[v])),k=e;x<y;++x)(k=_4($>0?h[x]+" "+g:oe(g,/&\f/g,h[x])))&&(u[L++]=k);return js(e,t,n,i===0?Ss:a,u,c,d,p)}function d5(e,t,n,r){return js(e,t,n,R4,s1(n5()),ur(e,2,-2),0,r)}function Vd(e,t,n,r,i){return js(e,t,n,l1,ur(e,0,r),ur(e,r+1,-1),r,i)}function F4(e,t,n){switch(e5(e,t)){case 5103:return pe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return pe+e+e;case 4855:return pe+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Bi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return pe+e+Bi+e+ke+e+e;case 5936:switch(Oe(e,t+11)){case 114:return pe+e+ke+oe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return pe+e+ke+oe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return pe+e+ke+oe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return pe+e+ke+e+e;case 6165:return pe+e+ke+"flex-"+e+e;case 5187:return pe+e+oe(e,/(\w+).+(:[^]+)/,pe+"box-$1$2"+ke+"flex-$1$2")+e;case 5443:return pe+e+ke+"flex-item-"+oe(e,/flex-|-self/g,"")+(on(e,/flex-|baseline/)?"":ke+"grid-row-"+oe(e,/flex-|-self/g,""))+e;case 4675:return pe+e+ke+"flex-line-pack"+oe(e,/align-content|flex-|-self/g,"")+e;case 5548:return pe+e+ke+oe(e,"shrink","negative")+e;case 5292:return pe+e+ke+oe(e,"basis","preferred-size")+e;case 6060:return pe+"box-"+oe(e,"-grow","")+pe+e+ke+oe(e,"grow","positive")+e;case 4554:return pe+oe(e,/([^-])(transform)/g,"$1"+pe+"$2")+e;case 6187:return oe(oe(oe(e,/(zoom-|grab)/,pe+"$1"),/(image-set)/,pe+"$1"),e,"")+e;case 5495:case 3959:return oe(e,/(image-set\([^]*)/,pe+"$1$`$1");case 4968:return oe(oe(e,/(.+:)(flex-)?(.*)/,pe+"box-pack:$3"+ke+"flex-pack:$3"),/space-between/,"justify")+pe+e+e;case 4200:if(!on(e,/flex-|baseline/))return ke+"grid-column-align"+ur(e,t)+e;break;case 2592:case 3360:return ke+oe(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,on(r.props,/grid-\w+-end/)})?~ml(e+(n=n[t].value),"span",0)?e:ke+oe(e,"-start","")+e+ke+"grid-row-span:"+(~ml(n,"span",0)?on(n,/\d+/):+on(n,/\d+/)-+on(e,/\d+/))+";":ke+oe(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return on(r.props,/grid-\w+-start/)})?e:ke+oe(oe(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return oe(e,/(.+)-inline(.+)/,pe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ft(e)-1-t>6)switch(Oe(e,t+1)){case 109:if(Oe(e,t+4)!==45)break;case 102:return oe(e,/(.+:)(.+)-([^]+)/,"$1"+pe+"$2-$3$1"+Bi+(Oe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ml(e,"stretch",0)?F4(oe(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return oe(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,a,u,c){return ke+i+":"+o+c+(l?ke+i+"-span:"+(a?u:+u-+o)+c:"")+e});case 4949:if(Oe(e,t+6)===121)return oe(e,":",":"+pe)+e;break;case 6444:switch(Oe(e,Oe(e,14)===45?18:11)){case 120:return oe(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+pe+(Oe(e,14)===45?"inline-":"")+"box$3$1"+pe+"$2$3$1"+ke+"$2box$3")+e;case 100:return oe(e,":",":"+ke)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return oe(e,"scroll-","scroll-snap-")+e}return e}function Yl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function p5(e,t,n,r){switch(e.type){case Jg:if(e.children.length)break;case Qg:case Xg:case l1:return e.return=e.return||e.value;case R4:return"";case z4:return e.return=e.value+"{"+Yl(e.children,r)+"}";case Ss:if(!Ft(e.value=e.props.join(",")))return""}return Ft(n=Yl(e.children,r))?e.return=e.value+"{"+n+"}":""}function f5(e){var t=N4(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function h5(e){return function(t){t.root||(t=t.return)&&e(t)}}function m5(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case l1:e.return=F4(e.value,e.length,n);return;case z4:return Yl([wn(e,{value:oe(e.value,"@","@"+pe)})],r);case Ss:if(e.length)return t5(n=e.props,function(i){switch(on(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":xr(wn(e,{props:[oe(i,/:(read-\w+)/,":"+Bi+"$1")]})),xr(wn(e,{props:[i]})),Du(e,{props:Ud(n,r)});break;case"::placeholder":xr(wn(e,{props:[oe(i,/:(plac\w+)/,":"+pe+"input-$1")]})),xr(wn(e,{props:[oe(i,/:(plac\w+)/,":"+Bi+"$1")]})),xr(wn(e,{props:[oe(i,/:(plac\w+)/,ke+"input-$1")]})),xr(wn(e,{props:[i]})),Du(e,{props:Ud(n,r)});break}return""})}}var g5={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Lt={},ei=typeof process<"u"&&Lt!==void 0&&(Lt.REACT_APP_SC_ATTR||Lt.SC_ATTR)||"data-styled",O4="active",D4="data-styled-version",Es="6.3.8",a1=`/*!sc*/
`,Zl=typeof window<"u"&&typeof document<"u",Xt=Re.createContext===void 0,L5=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Lt!==void 0&&Lt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Lt.REACT_APP_SC_DISABLE_SPEEDY!==""?Lt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Lt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Lt!==void 0&&Lt.SC_DISABLE_SPEEDY!==void 0&&Lt.SC_DISABLE_SPEEDY!==""&&Lt.SC_DISABLE_SPEEDY!=="false"&&Lt.SC_DISABLE_SPEEDY),x5={},Ps=Object.freeze([]),ti=Object.freeze({});function B4(e,t,n){return n===void 0&&(n=ti),e.theme!==n.theme&&e.theme||t||n.theme}var U4=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),y5=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,v5=/(^-|-$)/g;function Wd(e){return e.replace(y5,"-").replace(v5,"")}var w5=/(a)(d)/gi,Kd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Uu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Kd(t%52)+n;return(Kd(t%52)+n).replace(w5,"$1-$2")}var pa,Mr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},H4=function(e){return Mr(5381,e)};function u1(e){return Uu(H4(e)>>>0)}function b5(e){return e.displayName||e.name||"Component"}function fa(e){return typeof e=="string"&&!0}var V4=typeof Symbol=="function"&&Symbol.for,W4=V4?Symbol.for("react.memo"):60115,k5=V4?Symbol.for("react.forward_ref"):60112,S5={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},C5={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},K4={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},j5=((pa={})[k5]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},pa[W4]=K4,pa);function qd(e){return("type"in(t=e)&&t.type.$$typeof)===W4?K4:"$$typeof"in e?j5[e.$$typeof]:S5;var t}var $5=Object.defineProperty,E5=Object.getOwnPropertyNames,Yd=Object.getOwnPropertySymbols,P5=Object.getOwnPropertyDescriptor,T5=Object.getPrototypeOf,Zd=Object.prototype;function q4(e,t,n){if(typeof t!="string"){if(Zd){var r=T5(t);r&&r!==Zd&&q4(e,r,n)}var i=E5(t);Yd&&(i=i.concat(Yd(t)));for(var o=qd(e),l=qd(t),a=0;a<i.length;++a){var u=i[a];if(!(u in C5||n&&n[u]||l&&u in l||o&&u in o)){var c=P5(t,u);try{$5(e,u,c)}catch{}}}}return e}function cr(e){return typeof e=="function"}function c1(e){return typeof e=="object"&&"styledComponentId"in e}function er(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Gl(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function co(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Hu(e,t,n){if(n===void 0&&(n=!1),!n&&!co(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Hu(e[r],t[r]);else if(co(t))for(var r in t)e[r]=Hu(e[r],t[r]);return e}function d1(e,t){Object.defineProperty(e,"toString",{value:t})}function dr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var I5=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw dr(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),u=(l=0,n.length);l<u;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(a1);return n},e}(),xl=new Map,Ql=new Map,yl=1,_r=function(e){if(xl.has(e))return xl.get(e);for(;Ql.has(yl);)yl++;var t=yl++;return xl.set(e,t),Ql.set(t,e),t},R5=function(e,t){yl=t+1,xl.set(e,t),Ql.set(t,e)},z5="style[".concat(ei,"][").concat(D4,'="').concat(Es,'"]'),M5=new RegExp("^".concat(ei,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),_5=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},N5=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(a1),i=[],o=0,l=r.length;o<l;o++){var a=r[o].trim();if(a){var u=a.match(M5);if(u){var c=0|parseInt(u[1],10),d=u[2];c!==0&&(R5(d,c),_5(e,d,u[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},Gd=function(e){for(var t=document.querySelectorAll(z5),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(ei)!==O4&&(N5(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function A5(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Y4=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var u=Array.from(a.querySelectorAll("style[".concat(ei,"]")));return u[u.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(ei,O4),r.setAttribute(D4,Es);var l=A5();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},F5=function(){function e(t){this.element=Y4(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw dr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),O5=function(){function e(t){this.element=Y4(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),D5=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Qd=Zl,B5={isServer:!Zl,useCSSOMInjection:!L5},Xl=function(){function e(t,n,r){t===void 0&&(t=ti),n===void 0&&(n={});var i=this;this.options=Ve(Ve({},B5),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Zl&&Qd&&(Qd=!1,Gd(this)),d1(this,function(){return function(o){for(var l=o.getTag(),a=l.length,u="",c=function(p){var m=function(L){return Ql.get(L)}(p);if(m===void 0)return"continue";var h=o.names.get(m),y=l.getGroup(p);if(h===void 0||!h.size||y.length===0)return"continue";var v="".concat(ei,".g").concat(p,'[id="').concat(m,'"]'),$="";h!==void 0&&h.forEach(function(L){L.length>0&&($+="".concat(L,","))}),u+="".concat(y).concat(v,'{content:"').concat($,'"}').concat(a1)},d=0;d<a;d++)c(d);return u}(i)})}return e.registerId=function(t){return _r(t)},e.prototype.rehydrate=function(){!this.server&&Zl&&Gd(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ve(Ve({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new D5(i):r?new F5(i):new O5(i)}(this.options),new I5(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(_r(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(_r(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(_r(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),U5=/&/g,Nr=47;function Xd(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var l=e.charCodeAt(o);if(r!==0||i||l!==Nr||e.charCodeAt(o+1)!==42)if(i)l===42&&e.charCodeAt(o+1)===Nr&&(i=!1,o++);else if(l!==34&&l!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(l===123)n++;else if(l===125&&--n<0)return!0}}else r===0?r=l:r===l&&(r=0);else i=!0,o++}return n!==0||r!==0}function Z4(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Z4(n.children,t)),n})}function H5(e){var t,n,r,i=ti,o=i.options,l=o===void 0?ti:o,a=i.plugins,u=a===void 0?Ps:a,c=function(m,h,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):m},d=u.slice();d.push(function(m){m.type===Ss&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(U5,n).replace(r,c))}),l.prefix&&d.push(m5),d.push(p5);var p=function(m,h,y,v){h===void 0&&(h=""),y===void 0&&(y=""),v===void 0&&(v="&"),t=v,n=h,r=new RegExp("\\".concat(n,"\\b"),"g");var $=function(g){if(!Xd(g))return g;for(var k=g.length,P="",S=0,j=0,T=0,z=!1,R=0;R<k;R++){var I=g.charCodeAt(R);if(T!==0||z||I!==Nr||g.charCodeAt(R+1)!==42)if(z)I===42&&g.charCodeAt(R+1)===Nr&&(z=!1,R++);else if(I!==34&&I!==39||R!==0&&g.charCodeAt(R-1)===92){if(T===0)if(I===123)j++;else if(I===125){if(--j<0){for(var E=R+1;E<k;){var M=g.charCodeAt(E);if(M===59||M===10)break;E++}E<k&&g.charCodeAt(E)===59&&E++,j=0,R=E-1,S=E;continue}j===0&&(P+=g.substring(S,R+1),S=R+1)}else I===59&&j===0&&(P+=g.substring(S,R+1),S=R+1)}else T===0?T=I:T===I&&(T=0);else z=!0,R++}if(S<k){var F=g.substring(S);Xd(F)||(P+=F)}return P}(function(g){if(g.indexOf("//")===-1)return g;for(var k=g.length,P=[],S=0,j=0,T=0,z=0;j<k;){var R=g.charCodeAt(j);if(R!==34&&R!==39||j!==0&&g.charCodeAt(j-1)===92)if(T===0)if(R===40&&j>=3&&(32|g.charCodeAt(j-1))==108&&(32|g.charCodeAt(j-2))==114&&(32|g.charCodeAt(j-3))==117)z=1,j++;else if(z>0)R===41?z--:R===40&&z++,j++;else if(R===Nr&&j+1<k&&g.charCodeAt(j+1)===Nr){for(j>S&&P.push(g.substring(S,j));j<k&&g.charCodeAt(j)!==10;)j++;S=j}else j++;else j++;else T===0?T=R:T===R&&(T=0),j++}return S===0?g:(S<k&&P.push(g.substring(S)),P.join(""))}(m)),L=c5(y||h?"".concat(y," ").concat(h," { ").concat($," }"):$);l.namespace&&(L=Z4(L,l.namespace));var x=[];return Yl(L,f5(d.concat(h5(function(g){return x.push(g)})))),x};return p.hash=u.length?u.reduce(function(m,h){return h.name||dr(15),Mr(m,h.name)},5381).toString():"",p}var V5=new Xl,Vu=H5(),Wu={shouldForwardProp:void 0,styleSheet:V5,stylis:Vu},G4=Xt?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(Wu)}}:Re.createContext(Wu);G4.Consumer;Xt||Re.createContext(void 0);function Ku(){return Xt?Wu:Re.useContext(G4)}var Q4=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Vu);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,d1(this,function(){throw dr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Vu),this.name+t.hash},e}();function W5(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in g5||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var K5=function(e){return e>="A"&&e<="Z"};function Jd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;K5(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var X4=function(e){return e==null||e===!1||e===""},J4=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!X4(r)&&(Array.isArray(r)&&r.isCss||cr(r)?t.push("".concat(Jd(n),":"),r,";"):co(r)?t.push.apply(t,Xr(Xr(["".concat(n," {")],J4(r),!1),["}"],!1)):t.push("".concat(Jd(n),": ").concat(W5(n,r),";")))}return t};function An(e,t,n,r){if(X4(e))return[];if(c1(e))return[".".concat(e.styledComponentId)];if(cr(e)){if(!cr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return An(i,t,n,r)}var o;return e instanceof Q4?n?(e.inject(n,r),[e.getName(r)]):[e]:co(e)?J4(e):Array.isArray(e)?Array.prototype.concat.apply(Ps,e.map(function(l){return An(l,t,n,r)})):[e.toString()]}function eh(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(cr(n)&&!c1(n))return!1}return!0}var q5=H4(Es),Y5=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&eh(t),this.componentId=n,this.baseHash=Mr(q5,n),this.baseStyle=r,Xl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=er(i,this.staticRulesId);else{var o=Gl(An(this.rules,t,n,r)),l=Uu(Mr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}i=er(i,l),this.staticRulesId=l}else{for(var u=Mr(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var p=this.rules[d];if(typeof p=="string")c+=p;else if(p){var m=Gl(An(p,t,n,r));u=Mr(u,m+d),c+=m}}if(c){var h=Uu(u>>>0);if(!n.hasNameForId(this.componentId,h)){var y=r(c,".".concat(h),void 0,this.componentId);n.insertRules(this.componentId,h,y)}i=er(i,h)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(_r(this.componentId)):""}},e}(),po=Xt?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(void 0)}}:Re.createContext(void 0);po.Consumer;function Z5(e){if(Xt)return e.children;var t=Re.useContext(po),n=Re.useMemo(function(){return function(r,i){if(!r)throw dr(14);if(cr(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw dr(8);return i?Ve(Ve({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?Re.createElement(po.Provider,{value:n},e.children):null}var ha={};function G5(e,t,n){var r=c1(e),i=e,o=!fa(e),l=t.attrs,a=l===void 0?Ps:l,u=t.componentId,c=u===void 0?function(k,P){var S=typeof k!="string"?"sc":Wd(k);ha[S]=(ha[S]||0)+1;var j="".concat(S,"-").concat(u1(Es+S+ha[S]));return P?"".concat(P,"-").concat(j):j}(t.displayName,t.parentComponentId):u,d=t.displayName,p=d===void 0?function(k){return fa(k)?"styled.".concat(k):"Styled(".concat(b5(k),")")}(e):d,m=t.displayName&&t.componentId?"".concat(Wd(t.displayName),"-").concat(t.componentId):t.componentId||c,h=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var $=t.shouldForwardProp;y=function(k,P){return v(k,P)&&$(k,P)}}else y=v}var L=new Y5(n,m,r?i.componentStyle:void 0);function x(k,P){return function(S,j,T){var z=S.attrs,R=S.componentStyle,I=S.defaultProps,E=S.foldedComponentIds,M=S.styledComponentId,F=S.target,A=Xt?void 0:Re.useContext(po),Y=Ku(),V=S.shouldForwardProp||Y.shouldForwardProp,N=B4(j,A,I)||ti,D=function(J,re,Q){for(var ge,ue=Ve(Ve({},re),{className:void 0,theme:Q}),Ct=0;Ct<J.length;Ct+=1){var ze=cr(ge=J[Ct])?ge(ue):ge;for(var Ue in ze)Ue==="className"?ue.className=er(ue.className,ze[Ue]):Ue==="style"?ue.style=Ve(Ve({},ue.style),ze[Ue]):ue[Ue]=ze[Ue]}return"className"in re&&typeof re.className=="string"&&(ue.className=er(ue.className,re.className)),ue}(z,j,N),b=D.as||F,Z={};for(var q in D)D[q]===void 0||q[0]==="$"||q==="as"||q==="theme"&&D.theme===N||(q==="forwardedAs"?Z.as=D.forwardedAs:V&&!V(q,b)||(Z[q]=D[q]));var C=function(J,re){var Q=Ku(),ge=J.generateAndInjectStyles(re,Q.styleSheet,Q.stylis);return ge}(R,D),ne=C.className,ae=C.css,G=er(E,M);ne&&(G+=" "+ne),D.className&&(G+=" "+D.className),Z[fa(b)&&!U4.has(b)?"class":"className"]=G,T&&(Z.ref=T);var H=w.createElement(b,Z);return Xt&&ae?Re.createElement(Re.Fragment,null,Re.createElement("style",{precedence:"styled-components",href:"sc-".concat(M,"-").concat(ne),children:ae}),H):H}(g,k,P)}x.displayName=p;var g=Re.forwardRef(x);return g.attrs=h,g.componentStyle=L,g.displayName=p,g.shouldForwardProp=y,g.foldedComponentIds=r?er(i.foldedComponentIds,i.styledComponentId):"",g.styledComponentId=m,g.target=r?i.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=r?function(P){for(var S=[],j=1;j<arguments.length;j++)S[j-1]=arguments[j];for(var T=0,z=S;T<z.length;T++)Hu(P,z[T],!0);return P}({},i.defaultProps,k):k}}),d1(g,function(){return".".concat(g.styledComponentId)}),o&&q4(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function e0(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var t0=function(e){return Object.assign(e,{isCss:!0})};function _e(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(cr(e)||co(e))return t0(An(e0(Ps,Xr([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?An(r):t0(An(e0(r,t)))}function qu(e,t,n){if(n===void 0&&(n=ti),!t)throw dr(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,_e.apply(void 0,Xr([i],o,!1)))};return r.attrs=function(i){return qu(e,t,Ve(Ve({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return qu(e,t,Ve(Ve({},n),i))},r}var th=function(e){return qu(G5,e)},f=th;U4.forEach(function(e){f[e]=th(e)});var Q5=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=eh(t),Xl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Gl(An(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Xl.registerId(this.componentId+t);var o=this.componentId+t;this.isStatic?r.hasNameForId(o,o)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function X5(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=_e.apply(void 0,Xr([e],t,!1)),i="sc-global-".concat(u1(JSON.stringify(r))),o=new Q5(r,i),l=new WeakMap,a=function(u){var c=Ku(),d=Xt?void 0:Re.useContext(po),p=l.get(c.styleSheet);if(p===void 0&&(p=c.styleSheet.allocateGSInstance(i),l.set(c.styleSheet,p)),(typeof window>"u"||!c.styleSheet.server)&&function($,L,x,g,k){if(o.isStatic)o.renderStyles($,x5,x,k);else{var P=Ve(Ve({},L),{theme:B4(L,g,a.defaultProps)});o.renderStyles($,P,x,k)}}(p,u,c.styleSheet,d,c.stylis),!Xt){var m=Re.useRef(!0);Re.useLayoutEffect(function(){return m.current=!1,function(){m.current=!0,queueMicrotask(function(){m.current&&(o.removeStyles(p,c.styleSheet),typeof document<"u"&&document.querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function($){return $.remove()}))})}},[p,c.styleSheet])}if(Xt){var h=i+p,y=typeof window>"u"?c.styleSheet.getTag().getGroup(_r(h)):"";if(y){var v="".concat(i,"-").concat(p);return Re.createElement("style",{key:v,"data-styled-global":i,precedence:"styled-components",href:v,children:y})}}return null};return Re.memo(a)}function Be(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Gl(_e.apply(void 0,Xr([e],t,!1))),i=u1(r);return new Q4(i,r)}/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fo(){return fo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fo.apply(this,arguments)}var tr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(tr||(tr={}));const n0="popstate";function J5(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:a}=r.location;return Yu("",{pathname:o,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Jl(i)}return t6(t,n,null,e)}function Ke(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function p1(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function e6(){return Math.random().toString(36).substr(2,8)}function r0(e,t){return{usr:e.state,key:e.key,idx:t}}function Yu(e,t,n,r){return n===void 0&&(n=null),fo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?vo(t):t,{state:n,key:t&&t.key||r||e6()})}function Jl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function vo(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function t6(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=tr.Pop,u=null,c=d();c==null&&(c=0,l.replaceState(fo({},l.state,{idx:c}),""));function d(){return(l.state||{idx:null}).idx}function p(){a=tr.Pop;let $=d(),L=$==null?null:$-c;c=$,u&&u({action:a,location:v.location,delta:L})}function m($,L){a=tr.Push;let x=Yu(v.location,$,L);c=d()+1;let g=r0(x,c),k=v.createHref(x);try{l.pushState(g,"",k)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;i.location.assign(k)}o&&u&&u({action:a,location:v.location,delta:1})}function h($,L){a=tr.Replace;let x=Yu(v.location,$,L);c=d();let g=r0(x,c),k=v.createHref(x);l.replaceState(g,"",k),o&&u&&u({action:a,location:v.location,delta:0})}function y($){let L=i.location.origin!=="null"?i.location.origin:i.location.href,x=typeof $=="string"?$:Jl($);return x=x.replace(/ $/,"%20"),Ke(L,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,L)}let v={get action(){return a},get location(){return e(i,l)},listen($){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(n0,p),u=$,()=>{i.removeEventListener(n0,p),u=null}},createHref($){return t(i,$)},createURL:y,encodeLocation($){let L=y($);return{pathname:L.pathname,search:L.search,hash:L.hash}},push:m,replace:h,go($){return l.go($)}};return v}var i0;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(i0||(i0={}));function n6(e,t,n){return n===void 0&&(n="/"),r6(e,t,n)}function r6(e,t,n,r){let i=typeof t=="string"?vo(t):t,o=ni(i.pathname||"/",n);if(o==null)return null;let l=nh(e);i6(l);let a=null;for(let u=0;a==null&&u<l.length;++u){let c=m6(o);a=f6(l[u],c)}return a}function nh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,a)=>{let u={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};u.relativePath.startsWith("/")&&(Ke(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Fn([r,u.relativePath]),d=n.concat(u);o.children&&o.children.length>0&&(Ke(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),nh(o.children,t,d,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:d6(c,o.index),routesMeta:d})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let u of rh(o.path))i(o,l,u)}),t}function rh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=rh(r.join("/")),a=[];return a.push(...l.map(u=>u===""?o:[o,u].join("/"))),i&&a.push(...l),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function i6(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:p6(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const o6=/^:[\w-]+$/,l6=3,s6=2,a6=1,u6=10,c6=-2,o0=e=>e==="*";function d6(e,t){let n=e.split("/"),r=n.length;return n.some(o0)&&(r+=c6),t&&(r+=s6),n.filter(i=>!o0(i)).reduce((i,o)=>i+(o6.test(o)?l6:o===""?a6:u6),r)}function p6(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function f6(e,t,n){let{routesMeta:r}=e,i={},o="/",l=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",p=Zu({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p)return null;Object.assign(i,p.params),l.push({params:i,pathname:Fn([o,p.pathname]),pathnameBase:v6(Fn([o,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(o=Fn([o,p.pathnameBase]))}return l}function Zu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=h6(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:m,isOptional:h}=d;if(m==="*"){let v=a[p]||"";l=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const y=a[p];return h&&!y?c[m]=void 0:c[m]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:l,pattern:e}}function h6(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),p1(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function m6(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return p1(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ni(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const g6=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,L6=e=>g6.test(e);function x6(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?vo(e):e,o;if(n)if(L6(n))o=n;else{if(n.includes("//")){let l=n;n=n.replace(/\/\/+/g,"/"),p1(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?o=l0(n.substring(1),"/"):o=l0(n,t)}else o=t;return{pathname:o,search:w6(r),hash:b6(i)}}function l0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ma(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function y6(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ih(e,t){let n=y6(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function oh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=vo(e):(i=fo({},e),Ke(!i.pathname||!i.pathname.includes("?"),ma("?","pathname","search",i)),Ke(!i.pathname||!i.pathname.includes("#"),ma("#","pathname","hash",i)),Ke(!i.search||!i.search.includes("#"),ma("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(l==null)a=n;else{let p=t.length-1;if(!r&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}a=p>=0?t[p]:"/"}let u=x6(i,a),c=l&&l!=="/"&&l.endsWith("/"),d=(o||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Fn=e=>e.join("/").replace(/\/\/+/g,"/"),v6=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),w6=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,b6=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function k6(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const lh=["post","put","patch","delete"];new Set(lh);const S6=["get",...lh];new Set(S6);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function es(){return es=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},es.apply(this,arguments)}const Ts=w.createContext(null),sh=w.createContext(null),Vn=w.createContext(null),f1=w.createContext(null),gn=w.createContext({outlet:null,matches:[],isDataRoute:!1}),ah=w.createContext(null);function C6(e,t){let{relative:n}=t===void 0?{}:t;wo()||Ke(!1);let{basename:r,navigator:i}=w.useContext(Vn),{hash:o,pathname:l,search:a}=Is(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:Fn([r,l])),i.createHref({pathname:u,search:a,hash:o})}function wo(){return w.useContext(f1)!=null}function hr(){return wo()||Ke(!1),w.useContext(f1).location}function uh(e){w.useContext(Vn).static||w.useLayoutEffect(e)}function en(){let{isDataRoute:e}=w.useContext(gn);return e?D6():j6()}function j6(){wo()||Ke(!1);let e=w.useContext(Ts),{basename:t,future:n,navigator:r}=w.useContext(Vn),{matches:i}=w.useContext(gn),{pathname:o}=hr(),l=JSON.stringify(ih(i,n.v7_relativeSplatPath)),a=w.useRef(!1);return uh(()=>{a.current=!0}),w.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let p=oh(c,JSON.parse(l),o,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Fn([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,l,o,e])}const $6=w.createContext(null);function E6(e){let t=w.useContext(gn).outlet;return t&&w.createElement($6.Provider,{value:e},t)}function bo(){let{matches:e}=w.useContext(gn),t=e[e.length-1];return t?t.params:{}}function Is(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(Vn),{matches:i}=w.useContext(gn),{pathname:o}=hr(),l=JSON.stringify(ih(i,r.v7_relativeSplatPath));return w.useMemo(()=>oh(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function P6(e,t){return T6(e)}function T6(e,t,n,r){wo()||Ke(!1);let{navigator:i}=w.useContext(Vn),{matches:o}=w.useContext(gn),l=o[o.length-1],a=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let c=hr(),d;d=c;let p=d.pathname||"/",m=p;if(u!=="/"){let v=u.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(v.length).join("/")}let h=n6(e,{pathname:m});return _6(h&&h.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:Fn([u,i.encodeLocation?i.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?u:Fn([u,i.encodeLocation?i.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),o,n,r)}function I6(){let e=O6(),t=k6(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,null)}const R6=w.createElement(I6,null);class z6 extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(gn.Provider,{value:this.props.routeContext},w.createElement(ah.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function M6(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(Ts);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(gn.Provider,{value:t},r)}function _6(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=l.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);d>=0||Ke(!1),l=l.slice(0,Math.min(l.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<l.length;d++){let p=l[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:m,errors:h}=n,y=p.route.loader&&m[p.route.id]===void 0&&(!h||h[p.route.id]===void 0);if(p.route.lazy||y){u=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((d,p,m)=>{let h,y=!1,v=null,$=null;n&&(h=a&&p.route.id?a[p.route.id]:void 0,v=p.route.errorElement||R6,u&&(c<0&&m===0?(B6("route-fallback"),y=!0,$=null):c===m&&(y=!0,$=p.route.hydrateFallbackElement||null)));let L=t.concat(l.slice(0,m+1)),x=()=>{let g;return h?g=v:y?g=$:p.route.Component?g=w.createElement(p.route.Component,null):p.route.element?g=p.route.element:g=d,w.createElement(M6,{match:p,routeContext:{outlet:d,matches:L,isDataRoute:n!=null},children:g})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?w.createElement(z6,{location:n.location,revalidation:n.revalidation,component:v,error:h,children:x(),routeContext:{outlet:null,matches:L,isDataRoute:!0}}):x()},null)}var ch=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ch||{}),dh=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(dh||{});function N6(e){let t=w.useContext(Ts);return t||Ke(!1),t}function A6(e){let t=w.useContext(sh);return t||Ke(!1),t}function F6(e){let t=w.useContext(gn);return t||Ke(!1),t}function ph(e){let t=F6(),n=t.matches[t.matches.length-1];return n.route.id||Ke(!1),n.route.id}function O6(){var e;let t=w.useContext(ah),n=A6(dh.UseRouteError),r=ph();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function D6(){let{router:e}=N6(ch.UseNavigateStable),t=ph(),n=w.useRef(!1);return uh(()=>{n.current=!0}),w.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,es({fromRouteId:t},o)))},[e,t])}const s0={};function B6(e,t,n){s0[e]||(s0[e]=!0)}function U6(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function H6(e){return E6(e.context)}function V6(e){let{basename:t="/",children:n=null,location:r,navigationType:i=tr.Pop,navigator:o,static:l=!1,future:a}=e;wo()&&Ke(!1);let u=t.replace(/^\/*/,"/"),c=w.useMemo(()=>({basename:u,navigator:o,static:l,future:es({v7_relativeSplatPath:!1},a)}),[u,a,o,l]);typeof r=="string"&&(r=vo(r));let{pathname:d="/",search:p="",hash:m="",state:h=null,key:y="default"}=r,v=w.useMemo(()=>{let $=ni(d,u);return $==null?null:{location:{pathname:$,search:p,hash:m,state:h,key:y},navigationType:i}},[u,d,p,m,h,y,i]);return v==null?null:w.createElement(Vn.Provider,{value:c},w.createElement(f1.Provider,{children:n,value:v}))}new Promise(()=>{});/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ts(){return ts=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ts.apply(this,arguments)}function fh(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function W6(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function K6(e,t){return e.button===0&&(!t||t==="_self")&&!W6(e)}const q6=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Y6=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Z6="6";try{window.__reactRouterVersion=Z6}catch{}const G6=w.createContext({isTransitioning:!1}),Q6="startTransition",a0=D3[Q6];function X6(e){let{basename:t,children:n,future:r,window:i}=e,o=w.useRef();o.current==null&&(o.current=J5({window:i,v5Compat:!0}));let l=o.current,[a,u]=w.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},d=w.useCallback(p=>{c&&a0?a0(()=>u(p)):u(p)},[u,c]);return w.useLayoutEffect(()=>l.listen(d),[l,d]),w.useEffect(()=>U6(r),[r]),w.createElement(V6,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}const J6=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",e7=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ui=w.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:u,to:c,preventScrollReset:d,viewTransition:p}=t,m=fh(t,q6),{basename:h}=w.useContext(Vn),y,v=!1;if(typeof c=="string"&&e7.test(c)&&(y=c,J6))try{let g=new URL(window.location.href),k=c.startsWith("//")?new URL(g.protocol+c):new URL(c),P=ni(k.pathname,h);k.origin===g.origin&&P!=null?c=P+k.search+k.hash:v=!0}catch{}let $=C6(c,{relative:i}),L=r7(c,{replace:l,state:a,target:u,preventScrollReset:d,relative:i,viewTransition:p});function x(g){r&&r(g),g.defaultPrevented||L(g)}return w.createElement("a",ts({},m,{href:y||$,onClick:v||o?r:x,ref:n,target:u}))}),t7=w.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:l=!1,style:a,to:u,viewTransition:c,children:d}=t,p=fh(t,Y6),m=Is(u,{relative:p.relative}),h=hr(),y=w.useContext(sh),{navigator:v,basename:$}=w.useContext(Vn),L=y!=null&&i7(m)&&c===!0,x=v.encodeLocation?v.encodeLocation(m).pathname:m.pathname,g=h.pathname,k=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(g=g.toLowerCase(),k=k?k.toLowerCase():null,x=x.toLowerCase()),k&&$&&(k=ni(k,$)||k);const P=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let S=g===x||!l&&g.startsWith(x)&&g.charAt(P)==="/",j=k!=null&&(k===x||!l&&k.startsWith(x)&&k.charAt(x.length)==="/"),T={isActive:S,isPending:j,isTransitioning:L},z=S?r:void 0,R;typeof o=="function"?R=o(T):R=[o,S?"active":null,j?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let I=typeof a=="function"?a(T):a;return w.createElement(ui,ts({},p,{"aria-current":z,className:R,ref:n,style:I,to:u,viewTransition:c}),typeof d=="function"?d(T):d)});var Gu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Gu||(Gu={}));var u0;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(u0||(u0={}));function n7(e){let t=w.useContext(Ts);return t||Ke(!1),t}function r7(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,viewTransition:a}=t===void 0?{}:t,u=en(),c=hr(),d=Is(e,{relative:l});return w.useCallback(p=>{if(K6(p,n)){p.preventDefault();let m=r!==void 0?r:Jl(c)===Jl(d);u(e,{replace:m,state:i,preventScrollReset:o,relative:l,viewTransition:a})}},[c,u,d,r,i,n,e,o,l,a])}function i7(e,t){t===void 0&&(t={});let n=w.useContext(G6);n==null&&Ke(!1);let{basename:r}=n7(Gu.useViewTransitionState),i=Is(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=ni(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=ni(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Zu(i.pathname,l)!=null||Zu(i.pathname,o)!=null}const vl="/assets/logo-CsQHSiKo.png",o7=f.header`
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
`,l7=f(ui)`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: 2px;
    border-radius: ${({theme:e})=>e.radii.md};
  }
`,s7=f.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
`,a7=f.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`,u7=f.h1`
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.colors.primary600};
  margin: 0;
  line-height: 1.3;
`,c7=f.p`
  font-size: 0.8rem;
  color: ${({theme:e})=>e.colors.primary400};
  margin: 2px 0 0;
`,d7=f.div`
  width: 48px;
  flex-shrink: 0;
`,p7=()=>s.jsxs(o7,{children:[s.jsx(l7,{to:"/",children:s.jsx(s7,{src:vl,alt:"명상 지도 로고"})}),s.jsxs(a7,{children:[s.jsx(u7,{children:"명상 지도"}),s.jsx(c7,{children:"국내 명상지를 찾아보세요"})]}),s.jsx(d7,{})]}),f7=f.nav`
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
`,ga=f(t7)`
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
`,h7=f(ui)`
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
`,m7=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),s.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),g7=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),s.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"}),s.jsx("line",{x1:"8",y1:"6",x2:"16",y2:"6"}),s.jsx("line",{x1:"8",y1:"10",x2:"16",y2:"10"})]}),L7=()=>s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),x7=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),s.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),y7=()=>{const{pathname:e}=hr(),t=e.startsWith("/meditation/map")||e.startsWith("/meditation/region")||e.startsWith("/blog");return s.jsxs(f7,{role:"navigation","aria-label":"하단 메뉴",children:[s.jsxs(ga,{to:"/",end:!0,children:[s.jsx(m7,{}),s.jsx("span",{children:"홈"})]}),s.jsxs(h7,{to:"/meditation/map",$active:t,children:[s.jsx(g7,{}),s.jsx("span",{children:"지도"})]}),s.jsxs(ga,{to:"/favorites",children:[s.jsx(L7,{}),s.jsx("span",{children:"찜"})]}),s.jsxs(ga,{to:"/profile",children:[s.jsx(x7,{}),s.jsx("span",{children:"마이"})]})]})},v7=f.div`
  min-height: 100vh;
  background: ${({theme:e})=>e.colors.warmCream};
`,w7=f.main`
  padding: 0 20px calc(56px + env(safe-area-inset-bottom, 0px) + 24px);
  background: ${({theme:e})=>e.colors.warmCream};

  @media (max-width: 768px) {
    padding: 0 12px calc(56px + env(safe-area-inset-bottom, 0px) + 24px);
  }
`,b7=()=>{const{pathname:e}=hr(),t=e==="/"||e==="/meditation";return s.jsxs(v7,{children:[t&&s.jsx(p7,{}),s.jsx(w7,{children:s.jsx(H6,{})}),s.jsx(y7,{})]})},k7=f.div`
  background: ${({theme:e})=>e.colors.white};
  padding: 20px;
  border-radius: ${({theme:e})=>e.radii.lg};
  box-shadow: ${({theme:e})=>e.shadow.soft};
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid ${({theme:e})=>e.colors.primary100};
`,Vo=f.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Wo=f.span`
  font-size: 1.1rem;
  font-weight: 600;
`,S7=f.select`
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid ${({theme:e})=>e.colors.border200};
  font-size: 1.1rem;
`,c0=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,d0=f.button`
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
`,C7=f.button`
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
`,j7=f.input`
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
`,$7=f.span`
  font-size: 0.88rem;
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.4;
`,ns=({filters:e,availableTags:t,onChangeKeyword:n,onChangeCategory:r,onToggleTag:i,onChangeSortBy:o,onReset:l})=>{const a=[{label:"전체",value:"all"},{label:"템플스테이",value:"템플스테이"},{label:"명상센터",value:"명상센터"},{label:"프리랜서(공간없음)",value:"프리랜서(공간없음)"},{label:"힐링명상",value:"힐링명상"},{label:"기타",value:"기타"}];return s.jsxs(k7,{children:[s.jsxs(Vo,{children:[s.jsx(Wo,{children:"검색"}),s.jsx(j7,{type:"search",enterKeyHint:"search",autoComplete:"off",placeholder:"이름, 주소, 기관명, 태그, 소개글…",value:e.keyword,onChange:u=>n(u.target.value),"aria-label":"검색어"}),s.jsx($7,{children:"띄어쓰기로 여러 단어를 넣으면 모두 포함되는 장소만 보여요."})]}),s.jsxs(Vo,{children:[s.jsx(Wo,{children:"카테고리"}),s.jsx(c0,{children:a.map(u=>s.jsx(d0,{type:"button",$active:e.category===u.value,onClick:()=>r(u.value),children:u.label},u.value))})]}),s.jsxs(Vo,{children:[s.jsx(Wo,{children:"해시태그"}),s.jsx(c0,{children:t.map(u=>s.jsxs(d0,{type:"button",$active:e.tags.includes(u),onClick:()=>i(u),children:["#",u]},u))})]}),s.jsxs(Vo,{children:[s.jsx(Wo,{children:"정렬"}),s.jsxs(S7,{value:e.sortBy,onChange:u=>o(u.target.value),children:[s.jsx("option",{value:"recommend",children:"추천순"}),s.jsx("option",{value:"name",children:"이름순"})]})]}),s.jsx(C7,{type:"button",onClick:l,children:"필터 초기화"})]})},E7=f.form`
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
`,P7=f.span`
  color: ${({theme:e})=>e.colors.primary600};
  display: grid;
  place-items: center;
  flex-shrink: 0;

  svg {
    width: 18px;
    height: 18px;
  }
`,T7=f.input`
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
`,I7=f.button`
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
`,Qu=({value:e,onChange:t,placeholder:n,layout:r="region",id:i,"aria-label":o})=>{const l=a=>{a.preventDefault()};return s.jsxs(E7,{$layout:r,onSubmit:l,children:[s.jsx(P7,{"aria-hidden":!0,children:s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("circle",{cx:"11",cy:"11",r:"7"}),s.jsx("line",{x1:"16.65",y1:"16.65",x2:"21",y2:"21"})]})}),s.jsx(T7,{id:i,type:"search",enterKeyHint:"search",autoComplete:"off",placeholder:n,value:e,onChange:a=>t(a.target.value),"aria-label":o??"검색어"}),e?s.jsx(I7,{type:"button",onClick:()=>t(""),"aria-label":"검색어 삭제",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"18",height:"18",children:s.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})}):null]})},R7=[{id:"1",regionId:"KR-11",name:"한강 새벽 명상 라운지",shortDescription:"한강 물결 소리와 함께하는 60분 호흡 명상.",description:"새벽의 고요함 속에서 호흡을 따라가며 몸과 마음을 정리하는 프로그램입니다. 초보자도 참여할 수 있도록 안내자가 동행합니다.",address:"서울 영등포구 여의동로 330",thumbnailUrl:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=60",hashtags:["도심","새벽","호흡","코칭"],themes:["강변","마음챙김"],hasTempleStay:!1,duration:"1시간",organization:{name:"한강 마음연구소"},externalLink:"https://example.com/hanriver",detailSections:[{title:"프로그램",body:`1. **호흡 안내** - 15분
2. 바디 스캔
3. 마무리 저널링`},{title:"일정",body:`- **매일 05:30** 개강
- 소요 **1시간**
- 운영: 한강 마음연구소`},{title:"준비물",body:`- 따뜻한 외투
- 개인 담요
- **편한 복장** 권장`}],admissionFee:"1회 체험 2만원~ (예약·현장 안내)",venueKind:"명상지",programs:[{id:"place1-ongoing",title:"새벽 호흡 · 바디스캔",status:"ongoing",imageUrl:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=60",imageUrls:["https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=60","https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?auto=format&fit=crop&w=900&q=60"],bodyFromVenue:`**운영** 새벽 5:30 집결 · 약 60분

간단한 스트레칭 후 호흡 카운트와 바디스캔으로 긴장을 낮춥니다. 초보자도 따라오실 수 있도록 단계 안내를 드립니다.`,reviews:[{author:"윤**",body:"물소리랑 같이 하니까 집중이 잘 됐어요. 다음에 또 신청할게요.",rating:5},{author:"김**",body:"새벽 기온이 걱정됐는데 준비물 안내 덕에 무리 없었어요.",rating:5},{author:"이**",body:"처음이라 어색했는데 단계별로 천천히 알려주셔서 따라가기 좋았습니다.",rating:4},{author:"박**",body:"한강 뷰가 너무 좋아요. 출근 전에 한 번씩 하고 싶어지네요.",rating:5},{author:"최**",body:"바디스캔 파트에서 어깨가 풀리는 느낌이 들었어요.",rating:5},{author:"정**",body:"소규모라 편하게 질문할 수 있었어요.",rating:4},{author:"강**",body:"주차 정보 미리 알려주셔서 찾기 쉬웠습니다.",rating:5},{author:"조**",body:"호흡 리듬이 처음엔 빨랐는데 끝날 때쯤 맞춰졌어요.",rating:5},{author:"한**",body:"가을이라 쌀쌀했지만 담요 챙기라는 공지가 정확했어요.",rating:4},{author:"서**",body:"명상 후에 커피 한 잔하면서 정리한 시간이 좋았습니다.",rating:5},{author:"홍**",body:"동료 추천으로 왔는데 재택근무 스트레스가 조금 가라앉았어요.",rating:5},{author:"유**",body:"음향 장비 없이 자연 소리만으로 진행돼서 더 몰입됐어요.",rating:5},{author:"임**",body:"운동화 필수 안내가 도움 됐고 산책로까지 안내해 주셔서 좋았어요.",rating:4}]},{id:"place1-past",title:"봄맞이 한강 야외 명상 시즌",status:"past",imageUrl:"https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=60",bodyFromVenue:"2025년 3~4월에만 진행했던 **해 질 녘** 일정입니다. 동일 커리큘럼을 올해 말 다시 열 예정입니다.",reviews:[{author:"문**",body:"지난 시즌 참여했는데 분위기가 너무 좋았어요. 사진보다 실제가 훨씬 예뻤습니다.",rating:5},{author:"서**",body:"야외라 쌀쌀할 줄 알았는데 담요 챙겨주셔서 괜찮았어요.",rating:4},{author:"나**",body:"해 질 녘 색감이 인상 깊었고 안내가 친절했습니다.",rating:5},{author:"오**",body:"그룹 인원이 많지 않아서 좋았어요.",rating:4},{author:"신**",body:"다음 시즌도 열리면 알림 받고 싶어요.",rating:5},{author:"권**",body:"발열 텀블러 챙기라는 팁이 정말 유용했어요.",rating:5},{author:"장**",body:"처음 야외 명상이라 설렘 반 걱정 반였는데 만족합니다.",rating:5},{author:"윤**",body:"사진 촬영 구역도 정해져 있어서 방해받지 않았어요.",rating:4},{author:"배**",body:"가족이랑 같이 왔는데 서로 말 없이도 편안했습니다.",rating:5},{author:"송**",body:"체온 조절이 어려웠던 분들을 위해 온열매트도 있었으면 좋겠어요.",rating:3},{author:"노**",body:"강사님 목소리 톤이 차분해서 금방 이완됐어요.",rating:5},{author:"하**",body:"시즌 한정이라 아쉽지만 그만큼 특별하게 느껴졌습니다.",rating:5}]},{id:"place1-ongoing-weekend",title:"주말 낮·가족 동반 힐링 명상",status:"ongoing",imageUrl:"https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=60",imageUrls:["https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=60"],bodyFromVenue:`토·일 **오전 10시** · 약 50분.

가벼운 소개 후 **호흡·감각 명상**을 진행하며, 어린이동반 가족은 따로 안내석에서 활동합니다.`,reviews:[{author:"오**",body:"아이 데리고 왔는데 분리 안내가 차분해서 좋았어요.",rating:5},{author:"남**",body:"주말이라 새벽반보다 부담이 덜했습니다.",rating:4}]},{id:"place1-past-winter",title:"겨울 한파 시즌 실내 호흡 캠프",status:"past",imageUrl:"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=60",bodyFromVenue:"2025년 1~2월 **인근 카페 연계** 실내 진행 분입니다. 지금은 종료되었으며 여름 실내 안내는 추후 공지합니다.",reviews:[{author:"고**",body:"추운데 실내에서 할 수 있어서 다행이었어요.",rating:5},{author:"단**",body:"짧게 30분 코스도 있었으면 좋겠어요.",rating:4}]},{id:"place1-ongoing-corporate",title:"기업·팀 단위 프라이빗 세션",status:"ongoing",imageUrl:"https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?auto=format&fit=crop&w=900&q=60",bodyFromVenue:`**사전 협의**로 일정·인원 맞춤 운영. 연수·팀빌딩용 **60~90분** 패키지 문의 환영합니다.

한강 인근 야외 또는 실내 공간 중 선택 가능합니다.`,reviews:[{author:"팀장**",body:"부서 워크샵으로 진행했는데 만족도가 높았습니다.",rating:5}]}]},{id:"2",regionId:"KR-11",name:"남산 숲길 호흡 스튜디오",shortDescription:"도심 속 숲길을 따라 걷는 90분 이동 명상.",description:"남산 둘레길에서 걷기 명상과 호흡 명상을 결합한 프로그램으로, 스트레스 해소에 집중합니다.",address:"서울 중구 남산공원길 105",thumbnailUrl:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60",hashtags:["숲","걷기","호흡"],themes:["자연","마음챙김"],hasTempleStay:!1,duration:"1시간 30분",organization:{name:"남산 리추얼"},externalLink:"https://example.com/namsan",detailSections:[{title:"프로그램",body:`- **숲길 걷기 명상** (40분)
- 호흡 리듬 정렬
- 마무리 스트레칭`},{title:"일정",body:`- **오전 09:00** / **오후 14:00**
- 소요 **1시간 30분**
- 운영: 남산 리추얼`},{title:"유의사항",body:`- **편한 운동화** 필수 착용
- 야외 진행 시 우의 준비 권장`}],admissionFee:"1회 체험 3만원~ (예약·현장 안내)",venueKind:"명상지",programs:[{id:"place2-ongoing-forest",title:"숲길 걷기 명상 · 오전 코스",status:"ongoing",imageUrl:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60",imageUrls:["https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=60"],bodyFromVenue:`**09:00 만남** 후 둘레길 구간별 걸음 호흡·멈춤 명상을 진행합니다.

우천 시 실내 대체 루트 안내.`,reviews:[{author:"산**",body:"걸으면서 하는 명상이 생각보다 어렵지만 시원했어요.",rating:5},{author:"길**",body:"가이드 속도가 천천해서 부담 없었습니다.",rating:4}]},{id:"place2-ongoing-hike-breath",title:"오후반 · 짧은 오르막 호흡 트레이닝",status:"ongoing",imageUrl:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=60",bodyFromVenue:"**14:00** 출발 · 난이도 **초·중급**. 오르막 구간에서 호흡 길이 맞추기 연습을 합니다.",reviews:[{author:"님**",body:"운동화 필수 안내 잘 지켰어요.",rating:5}]},{id:"place2-past-fog",title:"안개 낀 남산 새벽 6시 특집",status:"past",imageUrl:"https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=60",bodyFromVenue:"2024년 가을 한정 **새벽 일정**이었습니다. 봄 시즌에 비슷한 일정 오픈 시 공지 예정입니다.",reviews:[{author:"새**",body:"안개 속 고요함이 인상적이었어요.",rating:5},{author:"범**",body:"일찍 일어나기 힘들었지만 그만큼 보람.",rating:4}]}]},{id:"3",regionId:"KR-11",name:"북촌 고요한 다실",shortDescription:"차 명상과 함께하는 45분 정좌 명상.",description:"전통 다실에서 차를 음미하며 집중력을 높이는 명상 프로그램입니다.",address:"서울 종로구 북촌로 12길 28",thumbnailUrl:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=60",hashtags:["전통","차명상","정좌"],themes:["실내","고요"],hasTempleStay:!1,duration:"45분",organization:{name:"북촌 다도원"},externalLink:"https://example.com/bukchon",detailSections:[{title:"프로그램",body:`1. **차 준비** - 차 탕 준비 및 분배
2. 향 관찰 (5분)
3. 정좌 명상 (30분)`},{title:"일정",body:`- **주중 11:00, 15:00**
- 소요 **45분**
- 예약제 운영`},{title:"추천 대상",body:`- 조용한 **집중**이 필요한 분
- 차 문화에 관심 있는 분`}],admissionFee:"1회 체험 4만원~ (예약·현장 안내)",venueKind:"명상지",programs:[{id:"place3-ongoing-tea-sit",title:"전통 다실 · 차 명상 & 정좌",status:"ongoing",imageUrl:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=60",imageUrls:["https://images.unsplash.com/photo-1544787219-7f626044c58c?auto=format&fit=crop&w=900&q=60"],bodyFromVenue:`**11:00 / 15:00** · 약 45분. 차 탕 향 관찰 후 30분 정좌, 마무리에 짧은 기록 시간을 드립니다.

소규모(최대 8명).`,reviews:[{author:"다**",body:"차 향이 진해서 잡생각이 덜 났어요.",rating:5},{author:"실**",body:"정좌 자세 서포트가 친절했습니다.",rating:5}]},{id:"place3-ongoing-evening-tea",title:"저녁반 · 저소음 차 음미 명상",status:"ongoing",imageUrl:"https://images.unsplash.com/photo-1544787219-7f626044c58c?auto=format&fit=crop&w=900&q=60",bodyFromVenue:"**19:30** 일 1회. 조명을 낮춘 다실에서 **한 모금씩** 천천히 음미하며 호흡에 맞춥니다.",reviews:[{author:"저**",body:"퇴근 후 딱 좋은 길이었어요.",rating:4}]},{id:"place3-past-hanok",title:"한옥 개관 기념 초청 세션",status:"past",imageUrl:"https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=900&q=60",bodyFromVenue:"공간 리뉴얼 오픈 시 진행했던 **한정 초청** 일정입니다. 유사 이벤트는 인스타 공지로 안내드립니다.",reviews:[{author:"초**",body:"한옥 마당 뷰가 특별했어요.",rating:5}]}]},{id:"4",regionId:"KR-11",name:"성수 리버사이드 요가덱",shortDescription:"한강 전망의 스트레칭 명상 클래스.",description:"요가와 명상 호흡을 결합해 몸의 긴장을 풀어주는 프로그램입니다.",address:"서울 성동구 뚝섬로 273",thumbnailUrl:"https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=60",hashtags:["요가","강변","스트레칭"],themes:["도심","움직임"],hasTempleStay:!1,duration:"1시간",organization:{name:"리버 요가랩"},externalLink:"https://example.com/river",detailSections:[{title:"프로그램",body:`- **요가 플로우** (25분)
- 호흡 명상 (20분)
- 릴랙스 쿨다운`},{title:"난이도",body:"**초급** - 누구나 참여 가능"}],admissionFee:"1회 체험 별도 문의 (예약·현장 안내)"},{id:"5",regionId:"KR-11",name:"홍대 사운드 테라피 룸",shortDescription:"싱잉볼과 함께하는 30분 사운드 명상.",description:"사운드 테라피 도구를 활용해 마음의 파동을 안정시키는 프로그램입니다.",address:"서울 마포구 와우산로 21길 36",thumbnailUrl:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=60",hashtags:["사운드","실내","힐링","1:1"],themes:["실내","마음챙김"],hasTempleStay:!1,duration:"30분",organization:{name:"사운드클라우드 룸"},externalLink:"https://example.com/sound",detailSections:[{title:"프로그램",body:`1. **싱잉볼 세션** (15분)
2. 호흡 명상 (15분)`},{title:"추천 대상",body:`- **30분** 짧게 집중을 원하는 분
- 바쁜 일상의 쉼이 필요한 분`}],admissionFee:"1회 체험 2만원~ (예약·현장 안내)"},{id:"6",regionId:"KR-11",name:"여의도 마음챙김 센터",shortDescription:"업무 후 60분 마음챙김 프로그램.",description:"직장인을 위한 저녁 명상 클래스입니다. 감정 정리와 집중 회복에 초점을 둡니다.",address:"서울 영등포구 국제금융로 10",thumbnailUrl:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60",hashtags:["도심","퇴근","집중"],themes:["실내","마음챙김"],hasTempleStay:!1,duration:"1시간",organization:{name:"마인드 오피스"},externalLink:"https://example.com/mindoffice",detailSections:[{title:"프로그램",body:`- **호흡 집중** (20분)
- 감정 라벨링 연습
- 감사 기록`},{title:"구성",body:`- 인원 **12명** 소규모
- 1:1 피드백 가능`}],admissionFee:"1회 체험 3만원~ (예약·현장 안내)",venueKind:"명상센터",programs:[{id:"place6-ongoing",title:"퇴근 후 MBSR 스타일 마음챙김",status:"ongoing",imageUrl:"https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=900&q=60",imageUrls:["https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=60"],bodyFromVenue:`월·수 **저녁 7시** 고정반. 호흡, 바디스캔, 감정에 이름 붙이기 연습을 포함합니다.

소규모(최대 12명)로 진행합니다.`,reviews:[{author:"장**",body:"직장에서 쌓인 게 조금 풀려요. 안내가 차분해요.",rating:5},{author:"윤**",body:"퇴근 후 딱 1시간이라 부담 덜했어요.",rating:4},{author:"허**",body:"MBSR 느낌이라 익숙한 분들도 만족할 거예요.",rating:5},{author:"남**",body:"감정 라벨링 파트가 일상에도 도움 됩니다.",rating:5},{author:"오**",body:"실내 온도·조명이 편안해서 졸음이 아니라 안정이 왔어요.",rating:4},{author:"류**",body:"책자 없이도 따라갈 수 있게 정리해 주셨어요.",rating:5},{author:"코**",body:"온라인 병행 수업 안내도 명확했습니다.",rating:5},{author:"모**",body:"중간에 체어 명상 옵션이 있어서 무릎이 안 좋은 분도 괜찮아요.",rating:5},{author:"탁**",body:"동기들이랑 같이 신청했는데 나눔 시간이 의미 있었어요.",rating:4},{author:"표**",body:"연장 근무 끝나고 가기엔 빡빡했지만 그래도 할 만했어요.",rating:4},{author:"길**",body:"4주차쯤부터 숨이 자연스럽게 길어지는 게 느껴졌어요.",rating:5},{author:"추**",body:"물·담요 제공이 세심해서 좋았습니다.",rating:5},{author:"반**",body:"주차는 빌딩 안내대 따라가면 됩니다.",rating:4}]},{id:"place6-past",title:"연말 스페셜 라이브 길드 명상 4주",status:"past",imageUrl:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=60",bodyFromVenue:"2024년 12월 한정 과정입니다. 매주 다른 **테마 음악**과 짧은 나눔을 곁들였습니다.",reviews:[{author:"한**",body:"연말에 하기 좋았어요. 같이 한 분들이랑도 친해졌어요.",rating:5},{author:"노**",body:"음악 볼륨이 살짝 컸지만 명상 자체는 만족.",rating:4},{author:"채**",body:"매주 테마가 달라서 지루하지 않았어요.",rating:5},{author:"편**",body:"촛불 향이 은은해서 분위기 좋았습니다.",rating:4},{author:"구**",body:"연말 스트레스 풀기에 딱이었어요.",rating:5},{author:"라**",body:"친구랑 같이 신청해서 더 편했어요.",rating:5},{author:"마**",body:"좌석 간격이 넓어서 호흡하기 편했습니다.",rating:4},{author:"사**",body:"라이브 연주가 생각보다 긴장을 풀어줬어요.",rating:5},{author:"아**",body:"마지막 주 가볍게 나누는 시간이 좋았어요.",rating:5},{author:"차**",body:"겨울이라 실내 습도만 조금 아쉬웠어요.",rating:3},{author:"카**",body:"4주 끝나고도 혼자 연습할 수 있게 자료를 주셨어요.",rating:5}]},{id:"place6-ongoing-lunch",title:"금요 점심 30분 마인드 리셋",status:"ongoing",imageUrl:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=60",bodyFromVenue:`매주 금요일 **12:15–12:45**. 의자 앉은 자세로 짧은 **호흡·전신 스캔**만 진행합니다.

밀 도시락 가능 구역 안내 드립니다.`,reviews:[{author:"직장인**",body:"점심 시간에 딱 맞아요. 회사에서 가깝다면 추천.",rating:5},{author:"류**",body:"짧은데도 집중이 잘 됐어요.",rating:4}]},{id:"place6-past-spring",title:"봄맞이 오프닝 위크 무료 체험",status:"past",imageUrl:"https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=900&q=60",bodyFromVenue:"2025년 3월 오픈 기념 **1주간** 진행한 무료 체험입니다. 동일 커리큘럼은 퇴근반 일정에서 만나보실 수 있어요.",reviews:[{author:"새**",body:"처음 접하는 분들에게 문턱 낮춰준 이벤트였어요.",rating:5},{author:"봄**",body:"이후 정식 반도 등록했습니다.",rating:5}]},{id:"place6-ongoing-focus-lab",title:"딥 포커스 · 디지털 디톡스 데이",status:"ongoing",imageUrl:"https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=60",imageUrls:["https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?auto=format&fit=crop&w=900&q=60"],bodyFromVenue:`월 1회 **토요일 오후** · 스마트폰 **수납 후** 진행.

긴 호흡, **묵언 나눔**, 짧은 산책(날씨 허용 시 연결)으로 구성됩니다.`,reviews:[{author:"개**",body:"폰 없이 3시간이 이렇게 길었나 싶었어요. 좋은 의미로요.",rating:5},{author:"발**",body:"집중이 필요한 시기에 딱이었습니다.",rating:5}]}],instructors:[{id:"ins-6a",name:"박선",photoUrl:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=60",intro:"임상심리 석사 수료 · MBSR 지도 8년. 호흡과 감정 라벨링 과정을 집중적으로 안내합니다.",reviews:[{author:"강**",body:"박선 선생님 설명이 이해하기 쉬워요.",rating:5},{author:"도**",body:"호흡 타이밍을 손동작으로 알려주셔서 좋았어요.",rating:5},{author:"버**",body:"질문해도 부담 없이 답해 주셨습니다.",rating:4},{author:"너**",body:"감정 이름 붙이기 연습이 실생활에 유용해요.",rating:5},{author:"더**",body:"처음엔 낯설었는데 3주차부터 익숙해졌어요.",rating:5},{author:"러**",body:"녹음 가이드 주신 거 집에서도 듣고 있어요.",rating:5},{author:"머**",body:"목소리가 안정적이에요.",rating:4},{author:"어**",body:"노트 필기 시간이 있어서 정리가 잘 됐습니다.",rating:5},{author:"저**",body:"센터 시설도 깔끔했어요.",rating:5}]},{id:"ins-6b",name:"오민",photoUrl:"https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=60",intro:"요가·명상 복합 지도자. 퇴근반에서는 바디 스캔과 부드러운 스트레칭을 담당합니다.",reviews:[{author:"신**",body:"몸이 뻐근했는데 풀어주셔서 좋았어요.",rating:5},{author:"거**",body:"부드러운 스트레칭 후 명상이라 이어지기 좋았어요.",rating:5},{author:"너**",body:"퇴근 후 몸이 뭉쳐 있을 때 특히 추천합니다.",rating:4},{author:"더**",body:"요가 경험 없어도 따라할 수 있는 난이도였어요.",rating:5},{author:"러**",body:"매트·블럭 준비되어 있어서 편했습니다.",rating:5},{author:"머**",body:"호흡·스트레칭 비율이 균형 잡혀 있어요.",rating:4},{author:"버**",body:"오민 선생님 워밍업 설명이 친절해요.",rating:5},{author:"서**",body:"무리한 자세 안 하셔도 된다고 하셔서 안심됐어요.",rating:5}]}]},{id:"7",regionId:"KR-11",name:"삼청동 차명상 아틀리에",shortDescription:"차 향과 함께하는 저녁 명상.",description:"차 향을 따라 집중을 높이고, 짧은 명상과 대화를 포함하는 프로그램입니다.",address:"서울 종로구 삼청로 98",thumbnailUrl:"https://images.unsplash.com/photo-1470019693664-1d202d2c0907?auto=format&fit=crop&w=900&q=60",hashtags:["차명상","전통","저녁"],themes:["실내","고요"],hasTempleStay:!1,duration:"50분",organization:{name:"삼청 아틀리에"},externalLink:"https://example.com/samcheong",detailSections:[{title:"프로그램",body:`- **차 명상** (20분)
- 호흡 리듬 맞추기
- 마무리 기록`},{title:"특징",body:`- **차 전문가** 직접 진행
- 프리미엄 차 제공`}],admissionFee:"1회 체험 4만원~ (예약·현장 안내)",venueKind:"명상지",programs:[{id:"place7-ongoing-evening",title:"저녁 차 명상 · 호흡 리듬",status:"ongoing",imageUrl:"https://images.unsplash.com/photo-1470019693664-1d202d2c0907?auto=format&fit=crop&w=900&q=60",imageUrls:["https://images.unsplash.com/photo-1544787219-7f626044c58c?auto=format&fit=crop&w=900&q=60"],bodyFromVenue:`**19:00** 집결 · 약 50분.

차 명상 20분, 호흡 리듬 맞추기, **저널·짧은 나눔**(선택)으로 마무리합니다.`,reviews:[{author:"아**",body:"차 전문가님이 향 설명도 해주셔서 좋았어요.",rating:5},{author:"틀**",body:"마지막 기록 시간이 정리에 도움 됐습니다.",rating:4}]},{id:"place7-ongoing-silent",title:"무소음(말 없음) 심화 차정 명상",status:"ongoing",imageUrl:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=60",bodyFromVenue:"**토요일 16:00** · 말 없이 진행. 초보는 사전 안내 영상 시청 후 참여를 권장합니다.",reviews:[{author:"말**",body:"조용해서 처음엔 어색했는데 몰입이 깊어졌어요.",rating:5}]},{id:"place7-past-tea-fair",title:"삼청 차 박람 연계 특별 시음 명상",status:"past",imageUrl:"https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=900&q=60",bodyFromVenue:"지역 행사 연계 **주말 3회** 한정이었습니다. 행사 재개 시 동일 포맷으로 열 수 있습니다.",reviews:[{author:"박**",body:"다양한 차를 비교하며 했던 게 재밌었어요.",rating:5}]}]},{id:"8",regionId:"KR-11",name:"잠실 루프탑 선셋 명상",shortDescription:"해질녘 루프탑에서 진행되는 40분 명상.",description:"도심 스카이라인을 보며 일몰 시간에 맞춰 진행되는 명상 프로그램입니다.",address:"서울 송파구 올림픽로 300",thumbnailUrl:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60",hashtags:["루프탑","선셋","도심","프리랜서"],themes:["도심","마음챙김"],hasTempleStay:!1,duration:"40분",organization:{name:"선셋 루프"},externalLink:"https://example.com/sunset",detailSections:[{title:"프로그램",body:`1. **일몰 호흡** - 일몰 시각 맞춤
2. 집중 명상 (25분)`},{title:"추천",body:`- **퇴근 후** 짧은 휴식
- 도심에서 자연 느끼기`}],admissionFee:"1회 체험 별도 문의 (예약·현장 안내)",venueKind:"명상지",programs:[{id:"place8-ongoing-sunset",title:"선셋 타이밍 맞춤 일몰 호흡",status:"ongoing",imageUrl:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=60",imageUrls:["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=60"],bodyFromVenue:`일몰 **30분 전** 루프탑 입장 · 약 40분.

스카이라인 관찰, 호흡, **25분 집중 명상** 후 짧은 스트레칭.`,reviews:[{author:"루**",body:"도심뷰가 달라 보이는 시간이었어요.",rating:5},{author:"탑**",body:"바람이 있어 겉옷 챙기라는 공지가 맞았습니다.",rating:4}]},{id:"place8-ongoing-bluehour",title:"블루아워 · 야경 정리 명상",status:"ongoing",imageUrl:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=60",bodyFromVenue:"**계절별** 일몰 후 20분 시작. 어두워진 후 불빛을 배경으로 **짧은 바디스캔** 위주입니다.",reviews:[{author:"야**",body:"퇴근 직후라 머리가 복잡했는데 정리됐어요.",rating:5}]},{id:"place8-past-typhoon",title:"8월 태풍 대체 실내 미니 세션",status:"past",imageUrl:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60",bodyFromVenue:"야외 일정이 **안전상 취소**되었을 때 건물 내 라운지에서 **25분** 대체 진행했습니다.",reviews:[{author:"대**",body:"취소만 당한 줄 알았는데 대안이 있어서 감사했어요.",rating:4}]}]},{id:"9",regionId:"KR-11",name:"강남 호흡 리트릿 스튜디오",shortDescription:"집중 호흡과 자세 교정 클래스.",description:"호흡 패턴 교정을 통해 긴장을 완화하는 실내 명상 프로그램입니다.",address:"서울 강남구 테헤란로 152",thumbnailUrl:"https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=60",hashtags:["호흡","실내","리트릿"],themes:["실내","집중"],hasTempleStay:!1,duration:"1시간",organization:{name:"브레스 스튜디오"},externalLink:"https://example.com/breath",detailSections:[{title:"프로그램",body:`- **호흡 패턴** 체크 (15분)
- 집중 명상 (40분)`},{title:"특징",body:`- **1:1 상담** 포함
- 호흡 교정 맞춤 프로그램`}],admissionFee:"1회 체험 2만원~ (예약·현장 안내)"},{id:"10",regionId:"KR-11",name:"은평 한옥 명상마당",shortDescription:"한옥 마당에서 진행되는 70분 명상.",description:"한옥의 고즈넉한 분위기에서 몸과 마음을 천천히 풀어가는 프로그램입니다.",address:"서울 은평구 진관길 73",thumbnailUrl:"https://images.unsplash.com/photo-1470019693664-1d202d2c0907?auto=format&fit=crop&w=900&q=60",hashtags:["한옥","고요","전통"],themes:["전통","고요"],hasTempleStay:!1,duration:"70분",organization:{name:"진관 명상마당"},externalLink:"https://example.com/jingwan",detailSections:[{title:"프로그램",body:`- **호흡 정렬** (20분)
- 마음챙김 명상
- 차 한잔으로 마무리`},{title:"준비물",body:`- **따뜻한 양말** (마루 착석 시)
- 편한 한복 또는 와이드 팬츠`}],admissionFee:"1회 체험 3만원~ (예약·현장 안내)"},{id:"11",regionId:"KR-11",name:"서촌 움직임 명상홀",shortDescription:"느린 움직임으로 진행되는 50분 명상.",description:"몸의 감각을 깨우는 움직임 명상 프로그램으로 초보자도 쉽게 참여할 수 있습니다.",address:"서울 종로구 자하문로 9길 24",thumbnailUrl:"https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=60",hashtags:["움직임","감각","실내"],themes:["움직임","마음챙김"],hasTempleStay:!1,duration:"50분",organization:{name:"모션 마인드"},externalLink:"https://example.com/motion",detailSections:[{title:"프로그램",body:`- **느린 움직임** 워밍업
- 호흡 동기화 움직임
- 마무리 스트레칭`},{title:"난이도",body:"**초급** - 운동 경험 없어도 OK"}],admissionFee:"1회 체험 4만원~ (예약·현장 안내)"},{id:"12",regionId:"KR-11",name:"동대문 심야 명상살롱",shortDescription:"밤 10시에 시작하는 40분 집중 명상.",description:"하루를 마무리하며 마음을 정리하는 심야 명상 프로그램입니다.",address:"서울 중구 장충단로 275",thumbnailUrl:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=60",hashtags:["심야","도심","집중"],themes:["실내","집중"],hasTempleStay:!1,duration:"40분",organization:{name:"나이트 마인드"},externalLink:"https://example.com/night",detailSections:[{title:"프로그램",body:`- **심야 호흡** 명상 (25분)
- 감정 정리 및 마무리`},{title:"특징",body:`- **야간 예약제** 운영 (22:00~)
- 조용한 분위기`}],admissionFee:"1회 체험 별도 문의 (예약·현장 안내)"},{id:"13",regionId:"KR-26",name:"해운대 바다 명상 라운지",shortDescription:"파도 소리와 함께하는 해변 명상.",description:"해운대 해변에서 진행되는 일출 명상 프로그램입니다.",address:"부산 해운대구 해운대해변로 264",thumbnailUrl:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=60",hashtags:["해변","일출","호흡"],themes:["바다","자연"],hasTempleStay:!1,duration:"1시간",organization:{name:"부산 해변명상"},externalLink:"https://example.com/busan",detailSections:[{title:"프로그램",body:`- **일출 명상** (30분)
- 파도 소리와 호흡
- 마무리 스트레칭`},{title:"준비물",body:`- **돗자리** (모래 위 착석)
- 따뜻한 겉옷
- 선크림 권장`}],admissionFee:"1회 체험 2만원~ (예약·현장 안내)"},{id:"14",regionId:"KR-27",name:"팔공산 고요 수련원",shortDescription:"산사 분위기 속 집중 명상.",description:"팔공산 자락의 숲에서 정좌와 걷기 명상을 함께 진행합니다.",address:"대구 동구 팔공산로 185길 89",thumbnailUrl:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60",hashtags:["산","걷기","고요"],themes:["산림","자연"],hasTempleStay:!0,duration:"반나절",organization:{name:"팔공산 수련원"},externalLink:"https://example.com/palgong",detailSections:[{title:"프로그램",body:`1. **정좌 명상** (40분)
2. 걷기 명상 (산책로)
3. 명상 노트 정리`},{title:"특징",body:`- **템플스테이** 옵션 제공
- 산사 식사 체험 가능`}],admissionFee:"1회 체험 3만원~ (예약·현장 안내)"},{id:"15",regionId:"KR-28",name:"영종도 바람 명상센터",shortDescription:"바람과 함께하는 해안 명상.",description:"영종도 해안 산책로에서 진행되는 바람 명상 프로그램입니다.",address:"인천 중구 운서동 2850",thumbnailUrl:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=60",hashtags:["바람","해안","산책"],themes:["바다","자연"],hasTempleStay:!1,duration:"1시간",organization:{name:"영종 힐링센터"},externalLink:"https://example.com/yeongjong",detailSections:[{title:"프로그램",body:`- **해안 산책** (30분)
- 바람 명상 호흡
- 마음 정리`},{title:"준비물",body:`- **편한 운동화** 필수
- 겉옷 (해안 바람)
- 모자/선크림`}],admissionFee:"1회 체험 4만원~ (예약·현장 안내)"},{id:"16",regionId:"KR-29",name:"무등산 정적 리트릿",shortDescription:"산림 속 2시간 명상 리트릿.",description:"무등산 자락에서 진행되는 호흡 명상과 걷기 명상을 포함합니다.",address:"광주 북구 무등로 1550",thumbnailUrl:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60",hashtags:["산림","리트릿","호흡"],themes:["자연","산림"],hasTempleStay:!1,duration:"2시간",organization:{name:"무등 힐링캠프"},externalLink:"https://example.com/mudeung",detailSections:[{title:"프로그램",body:`- **숲 호흡** (40분)
- 걷기 명상 (숲길)
- 휴식 타임`},{title:"추천",body:`- **자연 속** 재충전이 필요한 분
- 2시간 여유 있는 분`}],admissionFee:"1회 체험 별도 문의 (예약·현장 안내)"},{id:"17",regionId:"KR-30",name:"대청호 수변 명상관",shortDescription:"호숫가에서 진행되는 저녁 명상.",description:"대청호 수변길을 따라 진행되는 집중 명상 프로그램입니다.",address:"대전 동구 회남로 123",thumbnailUrl:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=60",hashtags:["호수","저녁","고요"],themes:["물","자연"],hasTempleStay:!1,duration:"1시간",organization:{name:"대청 수련관"},externalLink:"https://example.com/daecheong",detailSections:[{title:"프로그램",body:`- **호숫가 호흡** (30분)
- 마음챙김 명상
- 저녁 노을 감상`},{title:"구성",body:`- **1:1 상담** 가능
- 소규모 그룹 (8명)`}],admissionFee:"1회 체험 2만원~ (예약·현장 안내)"},{id:"18",regionId:"KR-31",name:"대왕암 해송 명상길",shortDescription:"해송 숲길 걷기 명상.",description:"울산 동구 해송 숲길에서 진행되는 걷기 명상 프로그램입니다.",address:"울산 동구 등대길 95",thumbnailUrl:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60",hashtags:["해송","걷기","바다"],themes:["바다","숲"],hasTempleStay:!1,duration:"1시간 20분",organization:{name:"해송 명상길"},externalLink:"https://example.com/ulsan",detailSections:[{title:"프로그램",body:`- **걷기 명상** (40분)
- 파도 호흡
- 해송 숲 감상`},{title:"추천",body:`- **자연 소리** 명상을 원하는 분
- 해송 풍경 좋아하는 분`}],admissionFee:"1회 체험 3만원~ (예약·현장 안내)"},{id:"19",regionId:"KR-41",name:"양평 강변 선명상",shortDescription:"강변 야외 명상과 차 한잔.",description:"남한강변에서 진행되는 야외 명상 프로그램입니다.",address:"경기 양평군 양평읍 강변로 51",thumbnailUrl:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=60",hashtags:["강변","자연","야외"],themes:["물","자연"],hasTempleStay:!1,duration:"1시간",organization:{name:"양평 마음쉼터"},externalLink:"https://example.com/yangpyeong",detailSections:[{title:"프로그램",body:`- **강변 명상** (40분)
- 차 한잔 명상
- 자유 시간`},{title:"준비물",body:`- **돗자리** (야외 착석)
- 편한 복장
- 개인 물통`}],admissionFee:"1회 체험 4만원~ (예약·현장 안내)"},{id:"20",regionId:"KR-41",name:"가평 숲속 차명상",shortDescription:"침엽수 숲 속 차 명상 프로그램.",description:"가평 숲속에서 차향과 함께 호흡 명상을 진행합니다.",address:"경기 가평군 상면 수목원로 190",thumbnailUrl:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60",hashtags:["숲","차명상","휴식"],themes:["숲","고요"],hasTempleStay:!1,duration:"1시간",organization:{name:"가평 힐링하우스"},externalLink:"https://example.com/gapyeong",detailSections:[{title:"프로그램",body:`- **차 명상** (25분)
- 숲 호흡 산책
- 마무리 차 time`},{title:"추천",body:`- **자연 속** 휴식을 원하는 분
- 침엽수 향 좋아하는 분`}],admissionFee:"1회 체험 별도 문의 (예약·현장 안내)"},{id:"21",regionId:"KR-41",name:"수원 정원 명상랩",shortDescription:"정원 산책과 짧은 정좌 명상.",description:"수원 정원에서 산책과 정좌 명상을 조합한 프로그램입니다.",address:"경기 수원시 권선구 세류로 215",thumbnailUrl:"https://images.unsplash.com/photo-1470019693664-1d202d2c0907?auto=format&fit=crop&w=900&q=60",hashtags:["정원","산책","도심"],themes:["도심","자연"],hasTempleStay:!1,duration:"50분",organization:{name:"수원 가든랩"},externalLink:"https://example.com/suwon",detailSections:[{title:"프로그램",body:`- **정원 산책** (25분)
- 정좌 명상 (20분)
- 정원 감상`},{title:"특징",body:`- **가족** 참여 가능
- 아이 동반 시 사전 문의`}],admissionFee:"1회 체험 2만원~ (예약·현장 안내)"},{id:"22",regionId:"KR-42",name:"속초 해변 호흡캠프",shortDescription:"동해 바람과 함께하는 아침 호흡 명상.",description:"속초 해변에서 진행되는 일출 호흡 명상 프로그램입니다.",address:"강원 속초시 해오름로 186",thumbnailUrl:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=60",hashtags:["동해","일출","호흡"],themes:["바다","자연"],hasTempleStay:!1,duration:"1시간",organization:{name:"동해 명상캠프"},externalLink:"https://example.com/sokcho",detailSections:[{title:"프로그램",body:`- **일출 명상** (35분)
- 바다 호흡
- 아침 햇살 명상`},{title:"추천",body:`- **동해 여행자**
- 일출을 함께 맞고 싶은 분`}],admissionFee:"1회 체험 3만원~ (예약·현장 안내)"},{id:"23",regionId:"KR-42",name:"평창 산림 명상센터",shortDescription:"자작나무 숲에서 진행하는 고요 명상.",description:"평창 산림에서 진행되는 고요한 정좌 명상 프로그램입니다.",address:"강원 평창군 봉평면 태기로 111",thumbnailUrl:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60",hashtags:["산림","고요","힐링"],themes:["숲","고요"],hasTempleStay:!0,duration:"반나절",organization:{name:"평창 마음숲"},externalLink:"https://example.com/pyeongchang",detailSections:[{title:"프로그램",body:`- **숲 정좌** (40분)
- 걷기 명상 (자작나무 숲)
- 명상 노트`},{title:"특징",body:`- **템플스테이** 선택 가능
- 반나절/1박 프로그램`}],admissionFee:"1회 체험 4만원~ (예약·현장 안내)"},{id:"24",regionId:"KR-43",name:"제천 산사 힐링센터",shortDescription:"산사에서 진행되는 집중 명상.",description:"산사 분위기에서 마음을 정리하는 반나절 프로그램입니다.",address:"충북 제천시 청풍면 산사길 32",thumbnailUrl:"https://images.unsplash.com/photo-1470019693664-1d202d2c0907?auto=format&fit=crop&w=900&q=60",hashtags:["산사","템플스테이","고요"],themes:["전통","산림"],hasTempleStay:!0,duration:"반나절",organization:{name:"제천 힐링센터"},externalLink:"https://example.com/jecheon",detailSections:[{title:"프로그램",body:`- **정좌 명상** (50분)
- 산사 산책
- 차 공양 체험`},{title:"특징",body:`- **숙박형** 옵션
- 산사 식사 포함 가능`}],admissionFee:"1회 체험 별도 문의 (예약·현장 안내)"},{id:"25",regionId:"KR-44",name:"부여 연꽃 명상정원",shortDescription:"연꽃 정원에서 진행하는 명상.",description:"부여 연꽃 정원에서 진행되는 고요한 명상 프로그램입니다.",address:"충남 부여군 부여읍 연꽃로 96",thumbnailUrl:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60",hashtags:["정원","연꽃","고요"],themes:["자연","고요"],hasTempleStay:!1,duration:"50분",organization:{name:"부여 명상정원"},externalLink:"https://example.com/buyeo",detailSections:[{title:"프로그램",body:`- **정원 산책** (25분)
- 연꽃 감상 정좌 명상
- 고요한 마무리`},{title:"추천",body:`- **여유로운** 휴식을 원하는 분
- 연꽃 시즌(7~8월) 추천`}],admissionFee:"1회 체험 2만원~ (예약·현장 안내)"},{id:"26",regionId:"KR-45",name:"전주 한옥 마루명상",shortDescription:"한옥 마루에서 진행되는 명상.",description:"전주 한옥마을에서 진행되는 전통 명상 프로그램입니다.",address:"전북 전주시 완산구 기린대로 99",thumbnailUrl:"https://images.unsplash.com/photo-1470019693664-1d202d2c0907?auto=format&fit=crop&w=900&q=60",hashtags:["한옥","전통","고요"],themes:["전통","고요"],hasTempleStay:!1,duration:"1시간",organization:{name:"전주 한옥명상"},externalLink:"https://example.com/jeonju",detailSections:[{title:"프로그램",body:`- **차 명상** (30분)
- 정좌 명상 (한옥 마루)
- 전통 다도 체험`},{title:"특징",body:`- **전통 문화** 체험 포함
- 한옥마을 산책`}],admissionFee:"1회 체험 3만원~ (예약·현장 안내)"},{id:"27",regionId:"KR-46",name:"담양 대나무 숨길",shortDescription:"대나무 숲길 걷기 명상.",description:"담양 대나무 숲에서 진행되는 걷기 명상 프로그램입니다.",address:"전남 담양군 담양읍 죽향대로 111",thumbnailUrl:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60",hashtags:["대나무","걷기","힐링"],themes:["숲","자연"],hasTempleStay:!1,duration:"1시간",organization:{name:"담양 숨길"},externalLink:"https://example.com/damyang",detailSections:[{title:"프로그램",body:`- **대나무 숲** 걷기 명상
- 숲속 호흡
- 사진 촬영 포인트`},{title:"추천",body:`- **가볍게** 걷고 싶은 분
- 대나무 풍경 좋아하는 분`}],admissionFee:"1회 체험 4만원~ (예약·현장 안내)"},{id:"28",regionId:"KR-47",name:"경주 고도 명상당",shortDescription:"고도 경주의 고요함을 느끼는 명상.",description:"경주의 문화 유적 근처에서 진행되는 정좌 명상 프로그램입니다.",address:"경북 경주시 계림로 94",thumbnailUrl:"https://images.unsplash.com/photo-1470019693664-1d202d2c0907?auto=format&fit=crop&w=900&q=60",hashtags:["문화","고요","전통"],themes:["전통","고요"],hasTempleStay:!1,duration:"1시간",organization:{name:"경주 명상당"},externalLink:"https://example.com/gyeongju",detailSections:[{title:"프로그램",body:`- **정좌 명상** (30분)
- 고도 경주 산책
- 역사와 명상`},{title:"특징",body:`- **문화 탐방** 포함
- 경주 월정교 등 인근`}],admissionFee:"1회 체험 별도 문의 (예약·현장 안내)"},{id:"29",regionId:"KR-48",name:"거제 바람과 바다 명상터",shortDescription:"남해 바람을 느끼는 해안 명상.",description:"거제 해안에서 진행되는 야외 호흡 명상 프로그램입니다.",address:"경남 거제시 일운면 해안로 220",thumbnailUrl:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=60",hashtags:["남해","바다","호흡"],themes:["바다","자연"],hasTempleStay:!1,duration:"1시간",organization:{name:"거제 바다명상"},externalLink:"https://example.com/geoje",detailSections:[{title:"프로그램",body:`- **바다 호흡** (40분)
- 마음챙김 명상
- 남해 바람 감상`},{title:"추천",body:`- **해안 여행자**
- 거제도 일정에 맞추기 좋은`}],admissionFee:"1회 체험 2만원~ (예약·현장 안내)"},{id:"30",regionId:"KR-49",name:"제주 오름 선명상",shortDescription:"오름 위에서 진행되는 일출 명상.",description:"제주 오름에서 맞이하는 일출과 함께 호흡 명상을 진행합니다.",address:"제주 제주시 구좌읍 오름길 33",thumbnailUrl:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60",hashtags:["오름","일출","자연"],themes:["산","자연"],hasTempleStay:!1,duration:"1시간 30분",organization:{name:"제주 오름센터"},externalLink:"https://example.com/jejuoreum",detailSections:[{title:"프로그램",body:`- **오름 등반** (산책 수준)
- 일출 명상 (정상)
- 제주 새벽 풍경`},{title:"준비물",body:`- **운동화** (등산화 X)
- 물
- 겉옷 (새벽 쌀쌀함)`}],admissionFee:"1회 체험 3만원~ (예약·현장 안내)"},{id:"31",regionId:"KR-49",name:"서귀포 해안 치유스테이",shortDescription:"해안 산책과 쉼 명상.",description:"서귀포 해안길에서 진행되는 치유 명상 프로그램입니다.",address:"제주 서귀포시 해안로 120",thumbnailUrl:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=60",hashtags:["해안","치유","휴식"],themes:["바다","자연"],hasTempleStay:!1,duration:"2시간",organization:{name:"서귀포 치유스테이"},externalLink:"https://example.com/seogwipo",detailSections:[{title:"프로그램",body:`- **해안 산책** (60분)
- 호흡 명상
- 서귀포 해안 풍경`},{title:"특징",body:`- **소규모** 운영 (6명)
- 맞춤형 진행`}],admissionFee:"1회 체험 4만원~ (예약·현장 안내)"},{id:"32",regionId:"KR-50",name:"세종 호수공원 명상데크",shortDescription:"호수 전망의 야외 명상.",description:"세종 호수공원에서 진행되는 야외 명상 프로그램입니다.",address:"세종 호수공원길 45",thumbnailUrl:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=60",hashtags:["호수","야외","고요"],themes:["물","자연"],hasTempleStay:!1,duration:"50분",organization:{name:"세종 마음쉼터"},externalLink:"https://example.com/sejong",detailSections:[{title:"프로그램",body:`- **호수 명상** (30분)
- 호흡 안내
- 호수공원 전망`},{title:"추천",body:`- **야외 명상**을 원하는 분
- 세종 지역 거주자`}],admissionFee:"1회 체험 별도 문의 (예약·현장 안내)"}],z7=R7;function M7(){return[...z7]}const _7=[{id:"KR-11",name:"서울",slug:"seoul"},{id:"KR-26",name:"부산",slug:"busan"},{id:"KR-27",name:"대구",slug:"daegu"},{id:"KR-28",name:"인천",slug:"incheon"},{id:"KR-29",name:"광주",slug:"gwangju"},{id:"KR-30",name:"대전",slug:"daejeon"},{id:"KR-31",name:"울산",slug:"ulsan"},{id:"KR-41",name:"경기",slug:"gyeonggi"},{id:"KR-42",name:"강원",slug:"gangwon"},{id:"KR-43",name:"충북",slug:"chungbuk"},{id:"KR-44",name:"충남",slug:"chungnam"},{id:"KR-45",name:"전북",slug:"jeonbuk"},{id:"KR-46",name:"전남",slug:"jeonnam"},{id:"KR-47",name:"경북",slug:"gyeongbuk"},{id:"KR-48",name:"경남",slug:"gyeongnam"},{id:"KR-49",name:"제주",slug:"jeju"},{id:"KR-50",name:"세종",slug:"sejong"}],N7=_7;function A7(){return[...N7]}const hh=[{id:"KR-11",minLat:37.41,maxLat:37.7,minLng:126.75,maxLng:127.2},{id:"KR-50",minLat:36.4,maxLat:36.62,minLng:127.18,maxLng:127.32},{id:"KR-30",minLat:36.2,maxLat:36.55,minLng:127.2,maxLng:127.55},{id:"KR-27",minLat:35.7,maxLat:36.04,minLng:128.2,maxLng:128.78},{id:"KR-26",minLat:34.88,maxLat:35.32,minLng:128.8,maxLng:129.3},{id:"KR-31",minLat:35.38,maxLat:35.78,minLng:128.9,maxLng:129.5},{id:"KR-29",minLat:35,maxLat:35.3,minLng:126.5,maxLng:127},{id:"KR-28",minLat:37.2,maxLat:37.7,minLng:126.2,maxLng:126.9},{id:"KR-49",minLat:33,maxLat:33.6,minLng:126,maxLng:127},{id:"KR-41",minLat:36.9,maxLat:38,minLng:126.5,maxLng:127.5},{id:"KR-42",minLat:37,maxLat:38.5,minLng:127,maxLng:131},{id:"KR-43",minLat:36,maxLat:37.1,minLng:127,maxLng:128.4},{id:"KR-44",minLat:35.7,maxLat:36.6,minLng:125.5,maxLng:127.1},{id:"KR-45",minLat:35,maxLat:36,minLng:126.4,maxLng:128},{id:"KR-46",minLat:33,maxLat:35.2,minLng:125,maxLng:128},{id:"KR-47",minLat:35.5,maxLat:38,minLng:127,maxLng:130},{id:"KR-48",minLat:34.4,maxLat:35.5,minLng:127.4,maxLng:130}],F7=(e,t)=>{if(!Number.isFinite(e)||!Number.isFinite(t)||e<32.5||e>38.8||t<123||t>132)return null;for(const n of hh)if(e>=n.minLat&&e<=n.maxLat&&t>=n.minLng&&t<=n.maxLng)return n.id;return null},mh=A7(),ri=M7(),O7={id:"all",name:"전체",slug:"all"},gh=()=>mh,hn=e=>e==="all"?O7:mh.find(t=>t.id===e),D7=()=>ri,B7=e=>e==="all"?[...ri]:ri.filter(t=>t.regionId===e),U7=(e=8)=>ri.slice(0,e),Rs=e=>ri.find(t=>t.id===e),Lh=()=>{const e=new Set;return ri.forEach(t=>{t.hashtags.forEach(n=>e.add(n))}),Array.from(e).filter(t=>t!=="템플스테이").sort()},H7=e=>e.hashtags.some(t=>/프리랜서|코칭|개인지도|1:1/.test(t))?"프리랜서(공간없음)":e.hasTempleStay?"템플스테이":e.hashtags.includes("요가")||e.name.includes("요가")?"요가센터":"명상센터",xh=(e,t)=>e.filter(n=>{var r;if(t.category&&t.category!=="all"){const i=H7(n);if(t.category==="힐링명상"){if(i==="요가센터")return!1}else if(i!==t.category)return!1}if(t.tags.length>0&&!t.tags.some(o=>[...n.hashtags,...n.themes].includes(o)))return!1;if(t.keyword.trim().length>0){const i=t.keyword.trim().toLowerCase().split(/\s+/).filter(c=>c.length>0),o=(n.detailSections??[]).map(c=>`${c.title} ${c.body}`).join(" "),l=(n.programs??[]).map(c=>c.title).join(" "),a=[n.name,n.shortDescription,n.description,n.address,(r=n.organization)==null?void 0:r.name,n.duration,n.admissionFee,n.venueKind,l,...n.hashtags,...n.themes,o].filter(Boolean).join(" ").toLowerCase();if(!i.every(c=>a.includes(c)))return!1}return!0}),yh=(e,t)=>t==="name"?[...e].sort((n,r)=>n.name.localeCompare(r.name,"ko")):e,V7={},p0=e=>{let t;const n=new Set,r=(d,p)=>{const m=typeof d=="function"?d(t):d;if(!Object.is(m,t)){const h=t;t=p??(typeof m!="object"||m===null)?m:Object.assign({},t,m),n.forEach(y=>y(t,h))}},i=()=>t,u={setState:r,getState:i,getInitialState:()=>c,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(V7?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=t=e(r,i,u);return u},W7=e=>e?p0(e):p0;var vh={exports:{}},wh={},bh={exports:{}},kh={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ii=w;function K7(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var q7=typeof Object.is=="function"?Object.is:K7,Y7=ii.useState,Z7=ii.useEffect,G7=ii.useLayoutEffect,Q7=ii.useDebugValue;function X7(e,t){var n=t(),r=Y7({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return G7(function(){i.value=n,i.getSnapshot=t,La(i)&&o({inst:i})},[e,n,t]),Z7(function(){return La(i)&&o({inst:i}),e(function(){La(i)&&o({inst:i})})},[e]),Q7(n),n}function La(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!q7(e,n)}catch{return!0}}function J7(e,t){return t()}var e9=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?J7:X7;kh.useSyncExternalStore=ii.useSyncExternalStore!==void 0?ii.useSyncExternalStore:e9;bh.exports=kh;var t9=bh.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zs=w,n9=t9;function r9(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var i9=typeof Object.is=="function"?Object.is:r9,o9=n9.useSyncExternalStore,l9=zs.useRef,s9=zs.useEffect,a9=zs.useMemo,u9=zs.useDebugValue;wh.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=l9(null);if(o.current===null){var l={hasValue:!1,value:null};o.current=l}else l=o.current;o=a9(function(){function u(h){if(!c){if(c=!0,d=h,h=r(h),i!==void 0&&l.hasValue){var y=l.value;if(i(y,h))return p=y}return p=h}if(y=p,i9(d,h))return y;var v=r(h);return i!==void 0&&i(y,v)?(d=h,y):(d=h,p=v)}var c=!1,d,p,m=n===void 0?null:n;return[function(){return u(t())},m===null?void 0:function(){return u(m())}]},[t,n,r,i]);var a=o9(e,o[0],o[1]);return s9(function(){l.hasValue=!0,l.value=a},[a]),u9(a),a};vh.exports=wh;var c9=vh.exports;const d9=ss(c9),Sh={},{useDebugValue:p9}=Re,{useSyncExternalStoreWithSelector:f9}=d9;let f0=!1;const h9=e=>e;function m9(e,t=h9,n){(Sh?"production":void 0)!=="production"&&n&&!f0&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),f0=!0);const r=f9(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return p9(r),r}const h0=e=>{(Sh?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?W7(e):e,n=(r,i)=>m9(t,r,i);return Object.assign(n,t),n},Ch=e=>e?h0(e):h0,jh="meditation-favorites",g9=()=>{if(typeof window>"u")return[];try{const e=localStorage.getItem(jh);if(!e)return[];const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}},L9=e=>{if(!(typeof window>"u"))try{localStorage.setItem(jh,JSON.stringify(e))}catch{}},$h=Ch((e,t)=>({favorites:g9(),toggleFavorite:n=>{e(r=>{const o=r.favorites.includes(n)?r.favorites.filter(l=>l!==n):[...r.favorites,n];return L9(o),{favorites:o}})},isFavorite:n=>t().favorites.includes(n)})),x9=f.button`
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
`,y9=f.span`
  position: relative;
  display: inline-flex;
  width: 19px;
  height: 19px;
`,v9=f.svg`
  position: absolute;
  inset: 0;
  width: 19px;
  height: 19px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  overflow: visible;
`,w9=f.svg`
  position: absolute;
  inset: 0;
  width: 19px;
  height: 19px;
  fill: currentColor;
  stroke: none;
  pointer-events: none;
  opacity: ${({$active:e})=>e?1:0};
  transition: opacity 0.35s ease;
`,m0="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",Ms=({placeId:e})=>{const{isFavorite:t,toggleFavorite:n}=$h(),r=t(e),i=o=>{o.preventDefault(),o.stopPropagation(),n(e)};return s.jsx(x9,{type:"button",$active:r,onClick:i,"aria-label":r?"찜 해제":"찜하기",children:s.jsxs(y9,{children:[s.jsx(v9,{viewBox:"0 0 24 24",children:s.jsx("path",{d:m0})}),s.jsx(w9,{viewBox:"0 0 24 24",$active:r,children:s.jsx("path",{d:m0})})]})})},b9=f.div`
  flex-shrink: 0;
  width: 200px;
  position: relative;
`,k9=f(ui)`
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
`,S9=f.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  z-index: 2;
`,C9=f.div`
  width: 100%;
  height: 120px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,j9=f.div`
  padding: 12px;
`,$9=f.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 6px;
  color: ${({theme:e})=>e.colors.text900};
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,E9=f.span`
  font-size: 0.85rem;
  color: ${({theme:e})=>e.colors.text700};
`,P9=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 6px;
`,T9=f.span`
  display: inline-block;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.primary600};
  background: ${({theme:e})=>e.colors.primary50};
  padding: 2px 8px;
  border-radius: ${({theme:e})=>e.radii.pill};
`,I9=({place:e})=>{const t=hn(e.regionId);return s.jsxs(b9,{children:[s.jsx(S9,{children:s.jsx(Ms,{placeId:e.id})}),s.jsxs(k9,{to:`/meditation/place/${e.id}`,children:[s.jsx(C9,{children:s.jsx("img",{src:e.thumbnailUrl,alt:`${e.name} 썸네일`})}),s.jsxs(j9,{children:[s.jsx($9,{children:e.name}),s.jsx(E9,{children:(t==null?void 0:t.name)??e.regionId}),e.hashtags&&e.hashtags.length>0&&s.jsx(P9,{children:e.hashtags.slice(0,2).map(n=>s.jsx(T9,{children:n},n))})]})]})]})},R9=f.article`
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
`,z9=f(ui)`
  display: block;
  text-decoration: none;
  color: inherit;

  @media (min-width: 961px) {
    display: flex;
  }
`,M9=f.div`
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
`,_9=f.div`
  padding: 16px 18px;

  @media (min-width: 961px) {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
  }
`,N9=f.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 10px;
  color: ${({theme:e})=>e.colors.text900};
`,A9=f.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 12px;
  margin-bottom: 10px;
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.text700};
`,F9=f.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,O9=f.div`
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
`,D9=f.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,B9=f.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,rs=({place:e})=>{const t=hn(e.regionId);return s.jsx(R9,{children:s.jsxs(z9,{to:`/meditation/place/${e.id}`,children:[s.jsx(M9,{children:s.jsx("img",{src:e.thumbnailUrl,alt:`${e.name} 썸네일`})}),s.jsxs(_9,{children:[s.jsx(N9,{children:e.name}),s.jsx(A9,{children:s.jsxs(F9,{children:[s.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),s.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),(t==null?void 0:t.name)??e.regionId]})}),s.jsxs(D9,{children:[s.jsx(O9,{children:e.hashtags.slice(0,4).map(n=>s.jsx("span",{children:n},n))}),s.jsx(B9,{children:s.jsx(Ms,{placeId:e.id})})]})]})]})})},U9=`<svg width="386" height="630" viewBox="0 0 386 630" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`,H9=f.div`
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
`,h1=({activeRegionId:e,onSelectRegion:t,maxMapHeight:n})=>{const r=w.useRef(null),i=w.useRef(null);w.useEffect(()=>{const l=r.current;if(!l)return;const a=()=>Array.from(l.querySelectorAll("svg path.land")).filter(v=>v.getAttribute("id")),u=v=>{const $=(v==null?void 0:v.getAttribute("id"))??null;$!==i.current&&(i.current=$,a().forEach(L=>{L.getAttribute("id")===$?L.classList.add("is-hovered"):L.classList.remove("is-hovered")}))},c=(v,$)=>{var j;const L=document.elementFromPoint(v,$);if((j=L==null?void 0:L.matches)!=null&&j.call(L,"path.land"))return L;const x=l.querySelector("svg");if(!x)return null;const g=x.getScreenCTM();if(!g)return null;const k=x.createSVGPoint();k.x=v,k.y=$;const P=k.matrixTransform(g.inverse()),S=a();for(let T=S.length-1;T>=0;T--)if(S[T].isPointInFill(P))return S[T];return null},d=v=>{const $=c(v.clientX,v.clientY);u($)},p=()=>{u(null)},m=v=>{const $=c(v.clientX,v.clientY);if($){const L=$.getAttribute("id");L&&t(L,v)}};let h=!1;const y=()=>{if(h)return;if(a().length===0){requestAnimationFrame(y);return}l.addEventListener("pointermove",d),l.addEventListener("pointerleave",p),l.addEventListener("click",m)};return y(),()=>{h=!0,l.removeEventListener("pointermove",d),l.removeEventListener("pointerleave",p),l.removeEventListener("click",m)}},[t]);const o=e==="KR-47"?"KR-48":e;return w.useEffect(()=>{const l=r.current;if(!l)return;l.querySelectorAll("svg path.land").forEach(u=>{u.getAttribute("id")===o?u.classList.add("is-active"):u.classList.remove("is-active")})},[o]),s.jsx(H9,{ref:r,$maxMapHeight:n,role:"img","aria-label":"대한민국 행정구역 지도",dangerouslySetInnerHTML:{__html:U9}})},g0={tags:[],keyword:"",sortBy:"recommend",category:"all"},m1=Ch(e=>({selectedRegionId:void 0,filters:g0,page:1,pageSize:10,isFilterOpen:!1,setRegion:t=>e({selectedRegionId:t,page:1}),setPage:t=>e({page:t}),setPageSize:t=>e({pageSize:t,page:1}),setKeyword:t=>e(n=>({filters:{...n.filters,keyword:t},page:1})),toggleTag:t=>e(n=>{const i=n.filters.tags.includes(t)?n.filters.tags.filter(o=>o!==t):[...n.filters.tags,t];return{filters:{...n.filters,tags:i},page:1}}),clearTags:()=>e(t=>({filters:{...t.filters,tags:[]},page:1})),setSortBy:t=>e(n=>({filters:{...n.filters,sortBy:t},page:1})),setCategory:t=>e(n=>({filters:{...n.filters,category:t},page:1})),resetFilters:()=>e({filters:g0,page:1}),setFilterOpen:t=>e({isFilterOpen:t})})),Eh=Be`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`,V9=f.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 12px 24px;
  color: ${({theme:e})=>e.colors.text900};
  background: ${({theme:e})=>e.colors.warmCream};

  @media (max-width: 960px) {
    padding: 14px 10px 24px;
  }
`,W9=f.div`
  animation: ${Eh} 0.35s ease both;
`,K9=f.div`
  display: block;

  @media (min-width: 961px) {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 28px;
    align-items: start;
  }
`,q9=f.section`
  padding: 12px;
  border-radius: ${({theme:e})=>e.radii.lg};
  margin-bottom: 20px;

  @media (min-width: 961px) {
    max-width: 500px;
    width: 100%;
  }
`,Y9=f.section`
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
`,Z9=f.section`
  margin-top: 28px;
  background: ${({theme:e})=>e.colors.warmCream};
`,G9=f.h2`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
  margin: 0 0 16px;
`,Q9=f.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 12px;
  -webkit-overflow-scrolling: touch;
`,X9=f.div`
  @media (min-width: 961px) {
    position: sticky;
    top: 92px;
  }
`,J9=f.button`
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
`,e8=f.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-areas:
    "filter content";
  gap: 28px;
  animation: ${Eh} 0.35s ease both;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-areas: "content";
  }
`,t8=f.aside`
  grid-area: filter;

  @media (max-width: 960px) {
    display: none;
  }
`,n8=f.div`
  grid-area: content;
`,r8=f.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,i8=f.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,o8=f.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text700};
`,l8=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,s8=f.p`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.text700};
  margin: 0;
`,a8=f.button`
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
`,u8=f.div`
  position: fixed;
  inset: 0;
  z-index: 70;
`,c8=Be`from { opacity: 0; } to { opacity: 1; }`,d8=Be`from { transform: translateX(100%); } to { transform: translateX(0); }`,p8=f.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  animation: ${c8} 0.2s ease;
`,f8=f.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: min(90vw, 360px);
  background: ${({theme:e})=>e.colors.white};
  padding: 20px;
  overflow-y: auto;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);
  animation: ${d8} 0.25s ease;
`,h8=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,m8=f.button`
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
`,g8=f.div`
  height: 1px;
`,L0=()=>{const e=en(),{selectedRegionId:t,filters:n,page:r,pageSize:i,setPage:o,setRegion:l,setKeyword:a,toggleTag:u,setSortBy:c,setCategory:d,resetFilters:p,isFilterOpen:m,setFilterOpen:h}=m1(),y=w.useRef(null),[v,$]=w.useState(""),L=gh(),x=[{id:"all",name:"전체"},...L],g=U7(8),k=w.useMemo(()=>Lh(),[]),P=w.useMemo(()=>D7(),[]),S=w.useMemo(()=>xh(P,n),[P,n]),j=w.useMemo(()=>yh(S,n.sortBy),[S,n.sortBy]),T=w.useMemo(()=>j.slice(0,r*i),[j,r,i]),z=T.length<j.length,R=n.keyword.trim().length>0;w.useEffect(()=>{l("all")},[l]),w.useEffect(()=>{const E=["템플스테이","숲 명상","바다 명상","한옥 명상","호흡 수련","걷기 명상"];let M=0,F=0,A=!1,Y;const V=N=>{Y=window.setTimeout(()=>{const D=E[M%E.length];if(A?F-=1:F+=1,$(D.slice(0,Math.max(F,0))),!A&&F>=D.length){A=!0,V(700);return}if(A&&F<=0){A=!1,M+=1,V(300);return}V(A?120:240)},N)};return V(240),()=>window.clearTimeout(Y)},[]),w.useEffect(()=>{o(1)},[n.keyword,n.sortBy,n.tags,n.category,o]),w.useEffect(()=>{const E=y.current;if(!E||!z||!R)return;const M=new IntersectionObserver(F=>{var A;(A=F[0])!=null&&A.isIntersecting&&o(r+1)},{rootMargin:"200px"});return M.observe(E),()=>M.disconnect()},[z,r,o,R]);const I=E=>{l(E),e("/meditation/map")};return s.jsxs(V9,{children:[s.jsx(Qu,{layout:"main",value:n.keyword,onChange:a,placeholder:v||"명상센터 검색"}),R?s.jsxs(e8,{children:[s.jsx(t8,{children:s.jsx(ns,{filters:n,availableTags:k,onChangeKeyword:a,onChangeCategory:d,onToggleTag:u,onChangeSortBy:c,onReset:p})}),s.jsx(n8,{children:s.jsxs(r8,{children:[s.jsxs(l8,{children:[s.jsxs(s8,{children:["총 ",j.length,"곳의 명상센터"]}),s.jsx(a8,{type:"button",onClick:()=>h(!0),"aria-label":"필터",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})})})]}),s.jsxs(i8,{children:[T.length===0&&s.jsx(o8,{children:"조건에 맞는 명상센터가 없어요."}),T.map(E=>s.jsx(rs,{place:E},E.id))]}),z&&s.jsx(g8,{ref:y})]})})]}):s.jsx(W9,{children:s.jsxs(K9,{children:[s.jsx(q9,{children:s.jsx(h1,{activeRegionId:t,onSelectRegion:I})}),s.jsxs(X9,{children:[s.jsx(Y9,{children:x.map(E=>s.jsx(J9,{type:"button",$active:t===E.id,onClick:()=>I(E.id),children:E.name},E.id))}),s.jsxs(Z9,{children:[s.jsx(G9,{children:"인기 명상지"}),s.jsx(Q9,{children:g.map(E=>s.jsx(I9,{place:E},E.id))})]})]})]})}),R&&m&&s.jsxs(u8,{children:[s.jsx(p8,{onClick:()=>h(!1)}),s.jsxs(f8,{children:[s.jsxs(h8,{children:[s.jsx("h3",{style:{margin:0,fontSize:"1.2rem"},children:"필터"}),s.jsx(m8,{type:"button",onClick:()=>h(!1),children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),s.jsx(ns,{filters:n,availableTags:k,onChangeKeyword:a,onChangeCategory:d,onToggleTag:u,onChangeSortBy:c,onReset:p})]})]})]})},L8=f.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 16px 24px;
  color: ${({theme:e})=>e.colors.text900};
`,x8=f.header`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`,y8=f.button`
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
`,v8=f.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: ${({theme:e})=>e.colors.text900};
`,w8=f.section`
  position: relative;
  padding: 12px;
  border-radius: ${({theme:e})=>e.radii.lg};
  margin-bottom: 20px;
  min-height: 280px;
  overflow: visible;

  svg {
    max-height: 360px;
  }
`,b8=f.div`
  position: absolute;
  inset: 0;
  z-index: 5;
  cursor: pointer;
  border-radius: ${({theme:e})=>e.radii.lg};
`,k8=Be`
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,S8=f.div`
  position: absolute;
  left: ${({$x:e})=>e}px;
  top: ${({$y:e})=>e}px;
  transform: translate(-50%, -100%);
  z-index: 10;
  filter: drop-shadow(0 6px 20px rgba(75, 0, 130, 0.12));
  animation: ${k8} 0.2s ease;
`,C8=f.div`
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
`,j8=f.button`
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
`,$8=f.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.primary700};
  margin: 0 0 4px;
  padding-right: 28px;
`,E8=f.p`
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.text700};
  margin: 0 0 12px;
  line-height: 1.45;
`,P8=f.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,T8=f.button`
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
`,I8=f.section`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`,R8=f.button`
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
`,z8=[{label:"명상지",kind:"place"},{label:"명상센터",kind:"center"},{label:"명상 전문가",kind:"expert"}],M8=()=>{const e=en(),t=w.useRef(null),n=[{id:"all",name:"전체"},...gh().map($=>({id:$.id,name:$.name}))],r=w.useRef(null),i=w.useRef(null),{selectedRegionId:o,setRegion:l,setCategory:a}=m1(),[u,c]=w.useState(null),[d,p]=w.useState({x:0,y:0});w.useEffect(()=>{const $=L=>{var S,j,T;if(!u)return;const x=L.target,g=(S=r.current)==null?void 0:S.contains(x),k=(j=t.current)==null?void 0:j.contains(x),P=(T=i.current)==null?void 0:T.contains(x);!g&&!k&&!P&&c(null)};return document.addEventListener("click",$),()=>document.removeEventListener("click",$)},[u]);const m=w.useCallback($=>{const L=t.current;if(!L)return null;if($==="all"){const E=L.getBoundingClientRect();return{x:E.width/2,y:E.height/2-40}}const x=L.querySelector(`path.land[id="${$}"]`);if(!x)return null;const g=x.closest("svg");if(!g)return null;const k=x.getBBox();let P=k.x+k.width/2,S=k.y+k.height/2;$==="KR-42"&&(S=k.y+k.height*.65);const j=g.createSVGPoint();j.x=P,j.y=S;const T=g.getScreenCTM();if(!T)return null;const z=j.matrixTransform(T),R=L.getBoundingClientRect(),I=$==="KR-42"?5:$==="KR-11"?0:$==="KR-41"?-15:15;return{x:z.x-R.left,y:z.y-R.top-I}},[]);w.useEffect(()=>{const $=o??"all";c($);const L=t.current;L?requestAnimationFrame(()=>{const x=m($);p(x??{x:L.getBoundingClientRect().width/2,y:L.getBoundingClientRect().height/2-40})}):p({x:200,y:120})},[o,m]);const h=$=>{c($),requestAnimationFrame(()=>{const L=m($);p(L??{x:200,y:120})})},y=$=>{if(u){if(l(u),$==="expert"){e(`/meditation/region/${u}/experts`);return}a($==="place"?"템플스테이":"명상센터"),e(`/meditation/region/${u}`)}},v=u?hn(u):null;return s.jsxs(L8,{children:[s.jsxs(x8,{children:[s.jsx(y8,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),s.jsx(v8,{children:"지역 선택"})]}),s.jsxs(w8,{ref:t,children:[s.jsx(h1,{activeRegionId:u??void 0,onSelectRegion:h}),v&&s.jsxs(s.Fragment,{children:[s.jsx(b8,{onClick:()=>c(null),"aria-label":"모달 닫기"}),s.jsx(S8,{ref:r,$x:d.x,$y:d.y,children:s.jsxs(C8,{children:[s.jsx(j8,{type:"button",onClick:()=>c(null),"aria-label":"닫기",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"18",height:"18",children:s.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})}),s.jsx($8,{children:v.name}),s.jsx(E8,{children:"찾으시는 유형을 선택해 주세요"}),s.jsx(P8,{children:z8.map(({label:$,kind:L})=>s.jsx(T8,{type:"button",onClick:()=>y(L),children:$},L))})]})})]})]}),s.jsx(I8,{ref:i,children:n.map($=>s.jsx(R8,{type:"button",$active:u===$.id,onClick:()=>{c($.id),requestAnimationFrame(()=>{const L=m($.id);p(L??{x:200,y:120})})},children:$.name},$.id))})]})},_8=Be`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,N8=Be`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,A8=f.button`
  position: fixed;
  inset: 0;
  z-index: 113;
  border: none;
  margin: 0;
  padding: 0;
  background: rgba(0, 0, 0, 0.28);
  cursor: default;
  -webkit-tap-highlight-color: transparent;
  animation: ${N8} 0.52s cubic-bezier(0.25, 0.85, 0.3, 1) forwards;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: -4px;
  }
`,F8=f.div`
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
`,O8=f.div`
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
  animation: ${_8} 0.42s cubic-bezier(0.25, 0.8, 0.25, 1) both;
  -webkit-tap-highlight-color: transparent;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary400};
    outline-offset: 2px;
  }
`,D8=f.div`
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
`,B8=f.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
  padding-right: 36px;
`,U8=f.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
`,H8=f.span`
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
  line-height: 1.35;
`,V8=f.div`
  position: absolute;
  top: -2px;
  right: -4px;
  display: flex;
  align-items: center;
  justify-content: center;
`,W8=f.div`
  font-size: 0.88rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text700};

  .star {
    color: #e8b923;
    margin-right: 4px;
  }
`,K8=f.div`
  font-size: 0.86rem;
  color: ${({theme:e})=>e.colors.text700};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,q8=f.p`
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.45;
  color: ${({theme:e})=>e.colors.text700};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Y8=f.span`
  margin-top: auto;
  padding-top: 6px;
  font-size: 0.82rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.primary600};
`,Z8=({place:e,onClose:t,onOpenDetail:n})=>{const r=hn(e.regionId),i=e.venueKind??"명상지",o=[r==null?void 0:r.name,e.hashtags[0]??i].filter(Boolean).join(" · "),l=e.rating!=null||e.reviewCount!=null&&e.reviewCount>0,a=w.useCallback(()=>{n()},[n]),u=d=>{d.stopPropagation()},c=d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),a())};return s.jsxs(s.Fragment,{children:[s.jsx(A8,{type:"button",onClick:t,"aria-label":"닫기"}),s.jsx(F8,{children:s.jsxs(O8,{role:"button",tabIndex:0,onClick:a,onKeyDown:c,"aria-label":`${e.name} 상세 페이지로 이동`,children:[s.jsx(D8,{children:s.jsx("img",{src:e.thumbnailUrl,alt:"",draggable:!1})}),s.jsxs(B8,{children:[s.jsx(U8,{children:s.jsx(H8,{children:e.name})}),s.jsx(V8,{onClick:u,onPointerDown:u,children:s.jsx(Ms,{placeId:e.id})}),l&&s.jsxs(W8,{children:[e.rating!=null&&s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"star","aria-hidden":!0,children:"★"}),e.rating.toFixed(1)]}),e.reviewCount!=null&&s.jsxs("span",{children:[e.rating!=null?" · ":"","후기 ",e.reviewCount]})]}),s.jsx(K8,{children:o}),s.jsx(q8,{children:e.shortDescription}),s.jsx(Y8,{children:"탭하여 상세 보기 →"})]})]})})]})},G8={minLat:36.45,maxLat:37.65,minLng:126.75,maxLng:127.15};function Q8(e){let t=2166136261;for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619);const n=(t>>>0)%10001/1e4,r=(Math.imul(t,7919)>>>0)%10001/1e4;return[n,r]}function xa(e){const t=hh.find(a=>a.id===e.regionId)??G8,[n,r]=Q8(`${e.id}\0${e.address}`),i=.1,o=t.minLat+(t.maxLat-t.minLat)*(i+(1-2*i)*n),l=t.minLng+(t.maxLng-t.minLng)*(i+(1-2*i)*r);return{lat:o,lng:l}}async function X8(e){var i;const t=e==null?void 0:e.trim();if(!t)return!1;const n=window.naver;if((i=n==null?void 0:n.maps)!=null&&i.Map)return!0;const r=()=>new Promise((o,l)=>{const a=Date.now(),u=window.setInterval(()=>{var d;const c=window.naver;(d=c==null?void 0:c.maps)!=null&&d.Map?(window.clearInterval(u),o()):Date.now()-a>25e3&&(window.clearInterval(u),l(new Error("Naver Maps 로드 시간 초과")))},50)});if(document.querySelector('script[src*="oapi.map.naver.com"]'))try{return await r(),!0}catch{return!1}return await new Promise((o,l)=>{const a=`__naverMapCb_${Date.now()}`;window[a]=()=>{o(),delete window[a]};const u=document.createElement("script");u.async=!0,u.onerror=()=>{delete window[a],l(new Error("Naver Maps 스크립트 로드 실패"))},u.src=`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${encodeURIComponent(t)}&callback=${a}`,document.head.appendChild(u)}),!0}const J8=f.div`
  position: relative;
  width: 100%;
  flex: 1;
  min-height: ${({$fillViewport:e})=>e?"0":"min(62dvh, 520px)"};
  border-radius: ${({$fillViewport:e,theme:t})=>e?"0":t.radii.lg};
  overflow: hidden;
  background: ${({theme:e})=>e.colors.bg100};
`,eL=f.button`
  ${({$floating:e})=>e?_e`
          position: fixed;
          z-index: 108;
          right: 14px;
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
`,tL=f.div`
  width: 100%;
  height: 100%;
  min-height: ${({$fillViewport:e})=>e?"100%":"min(62dvh, 520px)"};
`;function nL(e){return e<=9?100:e<=11?72:e<=13?48:0}function rL(e,t){const n=new Set(e.map((i,o)=>o)),r=[];for(;n.size>0;){const i=n.values().next().value,o=new Set([i]);n.delete(i);let l=!0;for(;l;){l=!1;for(const a of[...n]){const u=e[a];let c=!1;for(const d of o){const p=e[d],m=u.x-p.x,h=u.y-p.y;if(m*m+h*h<=t*t){c=!0;break}}c&&(o.add(a),n.delete(a),l=!0)}}r.push([...o])}return r}function iL(e){const t=e;return typeof t.lat=="function"&&typeof t.lng=="function"?{lat:t.lat(),lng:t.lng()}:{lat:37.5665,lng:126.978}}function oL(e){const t=e.replace(/[^a-zA-Z0-9_-]/g,"_");return t.length>0?t.slice(0,48):"x"}function lL(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const Ph=88,Th=34,Ih=13,sL=7,aL=Ph,Rh=Th+Ih-2,uL=Ph/2,cL=Rh,dL="#7c3aed",pL="#6d28d9",yr="#4c1d95",fL="#7c3aed";function hL(e,t){const n=lL(t);return`<div style="width:${aL}px;height:${Rh}px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;filter:drop-shadow(0 2px 3px rgba(0,0,0,.24));pointer-events:auto" aria-hidden="true">
<div style="width:100%;height:${Th}px;box-sizing:border-box;background:${dL};border:2px solid ${yr};border-radius:6px;padding:3px 4px;display:flex;align-items:center;justify-content:center">
<span style="display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;box-sizing:border-box;margin:0;color:#fff;font-size:10px;font-weight:800;line-height:1.2;text-align:center;word-break:keep-all;font-family:system-ui,-apple-system,'Segoe UI',sans-serif;letter-spacing:-0.02em;text-shadow:1px 1px 0 ${yr},-1px -1px 0 ${yr},1px -1px 0 ${yr},-1px 1px 0 ${yr},0 1px 0 rgba(0,0,0,.2)">${n}</span>
</div>
<div style="width:${sL}px;height:${Ih}px;box-sizing:border-box;background:${pL};border:2px solid ${yr};border-top:none;border-radius:0 0 3px 3px;margin-top:-2px;flex-shrink:0"></div>
</div>`}function mL(e,t){const n=`clf_${oL(t)}`,r=e>99?"99+":String(e),i=e>99?10:e>9?11:13;return`<div style="width:38px;height:38px;pointer-events:auto" aria-hidden="true">
<svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
<defs>
<filter id="${n}" x="-40%" y="-40%" width="180%" height="180%">
<feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#2f0051" flood-opacity="0.42"/>
</filter>
</defs>
<circle cx="19" cy="19" r="15" fill="${fL}" filter="url(#${n})"/>
<text x="19" y="19" text-anchor="middle" dominant-baseline="central" fill="#fff" font-size="${i}" font-weight="800" font-family="system-ui,-apple-system,'Segoe UI',sans-serif">${r}</text>
</svg>
</div>`}const x0=({places:e,onSelectPlace:t,fillViewport:n=!1})=>{const r=w.useRef(null),i=w.useRef(null),o=w.useRef([]),l=w.useRef(null),a=w.useRef(null),[u,c]=w.useState(!1),[d,p]=w.useState(!1),m=w.useRef(e),h=w.useRef(t);m.current=e,h.current=t;const y=w.useCallback(()=>{const g=i.current;if(!g||typeof navigator>"u"||!navigator.geolocation)return;const k=window.naver,P=k==null?void 0:k.maps;if(!P)return;const S=P.LatLng,j=g.panTo,T=g.setZoom,z=(R,I)=>{j==null||j.call(g,new S(R,I)),T==null||T.call(g,16)};if(a.current){z(a.current.lat,a.current.lng);return}p(!0),navigator.geolocation.getCurrentPosition(R=>{p(!1),z(R.coords.latitude,R.coords.longitude)},()=>p(!1),{enableHighAccuracy:!0,timeout:15e3,maximumAge:6e4})},[]),v=()=>{o.current.forEach(g=>g.setMap(null)),o.current=[]},$=g=>{const k=window.naver,P=k==null?void 0:k.maps;if(!g||!P)return;const S=P.Marker,j=P.LatLng,T=P.Point,z=P.Event,R=g.getProjection,I=g.getZoom,E=g.setZoom,M=g.panTo;if(!R||!I||!E||!M)return;const F=m.current;if(F.length===0){v();return}const A=R.call(g);if(!A||typeof A.fromCoordToOffset!="function")return;const Y=F.map(q=>{const{lat:C,lng:ne}=xa(q);return{place:q,latlng:new j(C,ne)}});let V;try{V=Y.map(q=>{const C=A.fromCoordToOffset(q.latlng);return{x:C.x,y:C.y}})}catch{return}const N=I.call(g)??11,D=nL(N),Z=V.some(q=>!Number.isFinite(q.x)||!Number.isFinite(q.y))?Y.map((q,C)=>[C]):rL(V,D);v();for(const[q,C]of Z.entries()){const ne=C.map(Q=>Y[Q]);if(ne.length===1){const{place:Q,latlng:ge}=ne[0],ue=new S({position:ge,map:g,title:Q.name,icon:{content:hL(Q.id,Q.name),anchor:new T(uL,cL)}});z.addListener(ue,"click",()=>h.current(Q.id)),o.current.push(ue);continue}let ae=0,G=0;for(const Q of ne){const{lat:ge,lng:ue}=iL(Q.latlng);ae+=ge,G+=ue}const H=ne.length,J=new j(ae/H,G/H),re=new S({position:J,map:g,icon:{content:mL(H,`g${q}_${H}`),anchor:new T(26,26)}});z.addListener(re,"click",()=>{const Q=I.call(g)??11;E.call(g,Math.min(Q+2,19)),M.call(g,J)}),o.current.push(re)}};w.useEffect(()=>{const g=r.current;if(!g)return;let k=!1;return(async()=>{if(!await X8("z2xjrdi0i5")||k||!r.current)return;const j=window.naver.maps,T=j.Map,z=j.LatLng,R=j.LatLngBounds,I=j.Event,E=new T(g,{center:new z(37.5665,126.978),zoom:11,scrollWheel:!0,scaleControl:!1,mapDataControl:!1,zoomControl:!1});if(k)return;i.current=E,c(!0);const M=()=>{$(E)};I.addListener(E,"idle",M),M();const F=m.current;if(F.length>0){const A=new R;for(const V of F){const{lat:N,lng:D}=xa(V);A.extend(new z(N,D))}const Y=E.fitBounds;Y==null||Y.call(E,A,{top:52,right:20,bottom:100,left:20})}})(),()=>{var P;k=!0,v(),a.current=null,(P=l.current)==null||P.setMap(null),l.current=null,i.current=null,c(!1),r.current&&(r.current.innerHTML="")}},[]),w.useEffect(()=>{m.current=e;const g=i.current;if(!g||($(g),e.length===0))return;const k=window.naver,P=k==null?void 0:k.maps,S=P==null?void 0:P.LatLng,j=P==null?void 0:P.LatLngBounds;if(!S||!j)return;const T=new j;for(const R of e){const{lat:I,lng:E}=xa(R);T.extend(new S(I,E))}const z=g.fitBounds;z==null||z.call(g,T,{top:52,right:20,bottom:100,left:20})},[e]),w.useEffect(()=>{if(!u||typeof navigator>"u"||!navigator.geolocation)return;const g='<div style="width:16px;height:16px;background:#4B0082;border:3px solid #fff;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,.28)" aria-hidden="true"></div>',k=(S,j)=>{a.current={lat:S,lng:j};const T=i.current;if(!T)return;const z=window.naver,R=z==null?void 0:z.maps;if(!R)return;const I=R.LatLng,E=R.Marker,M=R.Point,F=new I(S,j),A=l.current;if(A&&typeof A.setPosition=="function"){A.setPosition(F);return}A==null||A.setMap(null),l.current=new E({position:F,map:T,zIndex:1e3,title:"내 위치",icon:{content:g,anchor:new M(8,8)}})},P=navigator.geolocation.watchPosition(S=>k(S.coords.latitude,S.coords.longitude),()=>{},{enableHighAccuracy:!0,maximumAge:15e3,timeout:3e4});return()=>{navigator.geolocation.clearWatch(P)}},[u]);const L=typeof navigator<"u"&&!!navigator.geolocation,x=s.jsx(eL,{$floating:n,type:"button","aria-label":"현재 위치로 이동",title:"현재 위치로 이동",disabled:!u||d||!L,onClick:y,children:s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":!0,children:[s.jsx("circle",{cx:"12",cy:"12",r:"7"}),s.jsx("circle",{cx:"12",cy:"12",r:"1.5",fill:"currentColor",stroke:"none"}),s.jsx("path",{d:"M12 2v2M12 20v2M2 12h2M20 12h2"})]})});return s.jsxs(J8,{$fillViewport:n,children:[s.jsx(tL,{ref:r,$fillViewport:n,role:"application","aria-label":"명상지 지도"}),n?I4.createPortal(x,document.body):x]})},y0=96,v0=960;function gL(){const[e,t]=w.useState(()=>typeof window<"u"&&window.matchMedia(`(max-width: ${v0}px)`).matches);return w.useEffect(()=>{const n=window.matchMedia(`(max-width: ${v0}px)`),r=()=>t(n.matches);return n.addEventListener("change",r),()=>n.removeEventListener("change",r)},[]),e}const w0=f.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 20px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};

  @media (max-width: 960px) {
    padding: 20px 14px calc(48px + env(safe-area-inset-bottom, 0px));
  }
`,LL=f.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
`,xL=f.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,yL=f.button`
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
`,vL=f.button`
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
`,wL=f.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-areas: "filter content";
  gap: 28px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-areas: "content";
  }
`,bL=f.main`
  grid-area: content;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,kL=f.aside`
  grid-area: filter;

  @media (max-width: 960px) {
    display: none;
  }
`,SL=f.button`
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
`,CL=f.div`
  position: fixed;
  inset: 0;
  z-index: 125;
`,jL=Be`from { opacity: 0; } to { opacity: 1; }`,$L=Be`from { transform: translateX(100%); } to { transform: translateX(0); }`,EL=f.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  animation: ${jL} 0.2s ease;
`,PL=f.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: min(90vw, 360px);
  background: ${({theme:e})=>e.colors.white};
  padding: 20px;
  overflow-y: auto;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);
  animation: ${$L} 0.25s ease;
`,TL=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,IL=f.button`
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
`,b0=f.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,ya=f.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text700};
`,k0=f.div`
  position: fixed;
  z-index: 40;
  top: 0;
  left: 0;
  right: 0;
  bottom: calc(56px + env(safe-area-inset-bottom, 0px));
  background: ${({theme:e})=>e.colors.bg100};
`,S0=f.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  min-height: 0;
`,C0=f.div`
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
`,j0=f.div`
  display: grid;
  grid-template-columns: 44px 1fr 44px;
  align-items: center;
  gap: 8px;
  max-width: 1200px;
  margin: 0 auto;
`,Ko=f.button`
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
`,$0=f.span`
  text-align: center;
  font-weight: 700;
  font-size: 1.05rem;
  color: ${({theme:e})=>e.colors.text900};
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,E0=f.div`
  position: fixed;
  left: 50%;
  bottom: calc(64px + env(safe-area-inset-bottom, 0px));
  transform: translateX(-50%);
  z-index: 110;
  display: flex;
  justify-content: center;
`,RL=f.button`
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
`,zL=f.button`
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
`,ML=f.div`
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
`,_L=f.div`
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
`,NL=f.div`
  flex-shrink: 0;
  padding: 0 12px 8px;
`,AL=f.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 0 12px calc(12px + env(safe-area-inset-bottom, 0px));
  -webkit-overflow-scrolling: touch;
`,FL=f.p`
  margin: 0 0 12px;
  font-size: 0.92rem;
  color: ${({theme:e})=>e.colors.text700};
`,P0=f.div`
  height: 1px;
`,OL=()=>{const e=en(),{regionId:t}=bo(),n=gL(),{filters:r,page:i,pageSize:o,setPage:l,setRegion:a,setKeyword:u,toggleTag:c,setSortBy:d,setCategory:p,resetFilters:m,isFilterOpen:h,setFilterOpen:y}=m1(),[v,$]=w.useState("list"),[L,x]=w.useState(null),g=w.useRef(null),k=w.useRef(null),P=w.useRef(null),S=w.useRef({active:!1,startY:0,startTy:0}),[j,T]=w.useState(0),[z,R]=w.useState(400),[I,E]=w.useState(200),[M,F]=w.useState(!1),[A,Y]=w.useState(!1),V=w.useCallback(()=>{const X=P.current;if(!X)return;const Le=X.offsetHeight,je=Math.max(0,Le-y0);R(je),E(Math.round(je*.4)),T(jt=>Math.max(0,Math.min(je,jt)))},[]);w.useLayoutEffect(()=>{if(!n||!t)return;const X=requestAnimationFrame(()=>{V();const Le=P.current;if(Le){const je=Math.max(0,Le.offsetHeight-y0);T(je)}Y(!0)});return()=>cancelAnimationFrame(X)},[n,t,V]),w.useEffect(()=>{var Le;if(!n)return;const X=()=>V();return window.addEventListener("resize",X),(Le=window.visualViewport)==null||Le.addEventListener("resize",X),()=>{var je;window.removeEventListener("resize",X),(je=window.visualViewport)==null||je.removeEventListener("resize",X)}},[n,V]),w.useEffect(()=>{t&&(a(t),l(1))},[t,a,l]);const N=t?hn(t):void 0,D=w.useMemo(()=>Lh(),[]),b=w.useMemo(()=>t?B7(t):[],[t]),Z=w.useMemo(()=>xh(b,r),[b,r]),q=w.useMemo(()=>yh(Z,r.sortBy),[Z,r.sortBy]),C=w.useMemo(()=>q.slice(0,i*o),[q,i,o]),ne=C.length<q.length,ae=n||v==="map",G=L&&ae?Rs(L):void 0;w.useEffect(()=>{ae||x(null)},[ae]),w.useEffect(()=>{x(null)},[r.keyword,r.sortBy,r.tags,r.category]),w.useEffect(()=>{l(1)},[r.keyword,r.sortBy,r.tags,r.category,l]),w.useEffect(()=>{const X=n?k.current:null,Le=g.current;if(!Le||!ne)return;const je=new IntersectionObserver(jt=>{var Kn;(Kn=jt[0])!=null&&Kn.isIntersecting&&l(i+1)},{root:X??void 0,rootMargin:"200px"});return je.observe(Le),()=>je.disconnect()},[ne,n,i,l]);const H=w.useCallback(X=>{const Le=X,je=Math.abs(X-I),jt=Math.abs(X-z);return Le<=je&&Le<=jt?0:je<=jt?I:z},[I,z]),J=w.useCallback(X=>{X.currentTarget.setPointerCapture(X.pointerId),S.current={active:!0,startY:X.clientY,startTy:j},F(!0)},[j]),re=w.useCallback(X=>{if(!S.current.active)return;const Le=X.clientY-S.current.startY;let je=S.current.startTy+Le;je=Math.max(0,Math.min(z,je)),T(je)},[z]),Q=w.useCallback(X=>{if(S.current.active){S.current.active=!1;try{X.currentTarget.releasePointerCapture(X.pointerId)}catch{}F(!1),T(Le=>H(Le))}},[H]);if(!t||!N)return s.jsxs(w0,{children:[s.jsx(ya,{children:"해당 지역 정보를 찾지 못했어요."}),s.jsx(vL,{type:"button",onClick:()=>e("/meditation"),children:"메인으로 돌아가기"})]});const ge=()=>{n?T(0):$("list")},ue=()=>{n?T(z):$("map")},Ct=n?A?z>0&&j>=z*.5:!0:v==="map",ze=h&&s.jsxs(CL,{children:[s.jsx(EL,{onClick:()=>y(!1)}),s.jsxs(PL,{children:[s.jsxs(TL,{children:[s.jsx("h3",{style:{margin:0,fontSize:"1.2rem"},children:"필터"}),s.jsx(IL,{type:"button",onClick:()=>y(!1),children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),s.jsx(ns,{filters:r,availableTags:D,onChangeKeyword:u,onChangeCategory:p,onToggleTag:c,onChangeSortBy:d,onReset:m})]})]}),Ue=ae&&G?s.jsx(Z8,{place:G,onClose:()=>x(null),onOpenDetail:()=>{e(`/meditation/place/${G.id}`),x(null)}}):null,ht=Ct?s.jsx(E0,{children:s.jsx(RL,{type:"button",onClick:ge,"aria-label":"목록으로 보기",children:"목록"})}):s.jsx(E0,{children:s.jsx(zL,{type:"button",onClick:ue,"aria-label":"지도로 보기",children:"지도"})});return n?s.jsxs(s.Fragment,{children:[s.jsxs(k0,{children:[s.jsx(S0,{children:s.jsx(x0,{fillViewport:!0,places:q,onSelectPlace:x})}),s.jsx(C0,{children:s.jsxs(j0,{children:[s.jsx(Ko,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),s.jsx($0,{children:N.name}),s.jsx(Ko,{type:"button",onClick:()=>y(!0),"aria-label":"필터",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})})})]})})]}),s.jsxs(ML,{ref:P,$ty:A?j:z,$dragging:M,style:{visibility:A?"visible":"hidden"},"aria-label":"명상지 목록 패널",children:[s.jsx(_L,{onPointerDown:J,onPointerMove:re,onPointerUp:Q,onPointerCancel:Q,"aria-hidden":!0}),s.jsx(NL,{children:s.jsx(Qu,{layout:"region",value:r.keyword,onChange:u,placeholder:"장소, 이름, 주소, 기관명, 태그로 검색"})}),s.jsxs(AL,{ref:k,children:[s.jsxs(FL,{children:["총 ",q.length,"곳"]}),s.jsxs(b0,{children:[C.length===0&&s.jsx(ya,{children:"조건에 맞는 명상센터가 없어요."}),C.map(X=>s.jsx(rs,{place:X},X.id))]}),ne&&s.jsx(P0,{ref:g})]})]}),Ue,ht,ze]}):v==="map"?s.jsxs(s.Fragment,{children:[s.jsxs(k0,{children:[s.jsx(S0,{children:s.jsx(x0,{fillViewport:!0,places:q,onSelectPlace:x})}),s.jsx(C0,{children:s.jsxs(j0,{children:[s.jsx(Ko,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),s.jsx($0,{children:N.name}),s.jsx(Ko,{type:"button",onClick:()=>y(!0),"aria-label":"필터",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})})})]})})]}),Ue,ht,ze]}):s.jsxs(s.Fragment,{children:[s.jsxs(w0,{children:[s.jsxs(LL,{children:[s.jsxs(xL,{children:[s.jsx(yL,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),s.jsx("h2",{style:{margin:0,fontSize:"1.25rem",fontWeight:600},children:"명상지 리스트"})]}),s.jsx(SL,{type:"button",onClick:()=>y(!0),"aria-label":"필터",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})})})]}),s.jsx(Qu,{layout:"region",value:r.keyword,onChange:u,placeholder:"장소, 이름, 주소, 기관명, 태그로 검색"}),s.jsxs(wL,{children:[s.jsx(kL,{children:s.jsx(ns,{filters:r,availableTags:D,onChangeKeyword:u,onChangeCategory:p,onToggleTag:c,onChangeSortBy:d,onReset:m})}),s.jsxs(bL,{children:[s.jsxs(b0,{children:[C.length===0&&s.jsx(ya,{children:"조건에 맞는 명상센터가 없어요."}),C.map(X=>s.jsx(rs,{place:X},X.id))]}),ne&&s.jsx(P0,{ref:g})]})]})]}),ht,ze]})},DL=[{id:"exp-seoul-1",name:"이호흡",avatarUrl:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=60",specialties:["호흡 명상","불안 완화","1:1 코칭"],regionIds:["KR-11"],intro:"심리상담 석사 과정을 마치고 10년간 호흡·바디스캔 명상을 지도해 왔습니다. 바쁜 도심 속에서도 뇌를 쉬게 하는 방법에 집중합니다.",degrees:["OO대학교 심리학 학사","OO대학원 임상심리 석사 과정 수료"],certificates:["마음챙김 기반 스트레스 완화(MBSR) 수료","명상 지도사 1급"],careers:["2016–2020 OO명상센터 수석 강사","2020–현재 프리랜서 명상 지도"],classTypes:["호흡 명상","아트 명상(감각 드로잉)","걷기 명상"],hasCenter:!1,activityAreas:["서울 전역","온라인"],programs:[{id:"p1",title:"야간 호흡 안정화 4주",status:"ongoing",imageUrl:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=60",description:"퇴근 후 45분, 호흡 카운트와 바디스캔으로 수면 전 긴장을 낮춥니다."},{id:"p2",title:"여름 집중 호흡 워크숍",status:"past",description:"2024년 8월, 한강 둔치에서 진행한 단기 워크숍입니다."}],reviews:[{author:"김**",body:"호흡만으로도 이렇게 편해질 수 있다는 걸 처음 알았어요. 설명이 차분하고 따라 하기 쉬웠습니다.",rating:5},{author:"박**",body:"직장 스트레스가 심했는데 1:1이 체계적이에요.",rating:5},{author:"안**",body:"초반에는 숨이 가빴던데 중반부터 리듬이 잡혔어요.",rating:4},{author:"진**",body:"온라인 세션도 화질·소리 안정적이었습니다.",rating:5},{author:"혜**",body:"불안할 때 쓸 만한 호흡 루틴을 적어 주셔서 도움 됐어요.",rating:5},{author:"태**",body:"과제가 부담 없는 수준이라 꾸준히 하기 좋았어요.",rating:4},{author:"민**",body:"야간 시간대 수업이라 퇴근 후 수강하기 좋았습니다.",rating:5},{author:"수**",body:"바디스캔 가이드 속도가 적당했어요.",rating:5},{author:"지**",body:"질문해도 논하지 않고 경청해 주셔서 편했어요.",rating:5},{author:"영**",body:"4주 과정인데 주차마다 목표가 명확해서 좋았습니다.",rating:4},{author:"훈**",body:"수면 전 루틴으로 쓰고 있어요.",rating:5},{author:"현**",body:"가격 대비 만족도가 높았어요.",rating:5},{author:"도**",body:"친구에게도 추천했습니다.",rating:5},{author:"연**",body:"다음 시즌 워크숍도 관심 있어요.",rating:4}]},{id:"exp-seoul-2",name:"정아트",avatarUrl:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=60",specialties:["아트 명상","감정 표현","그룹 세션"],regionIds:["KR-11"],intro:"미술치료 배경을 바탕으로 표현과 호흡을 연결하는 아트 명상을 이끕니다. 그림 실력은 전혀 필요 없습니다.",degrees:["OO예술대 미술교육 학사"],certificates:["미술치료사 2급","명상 지도사"],careers:["2019–현재 스튜디오 운영·출강"],classTypes:["아트 명상","색과 감각","저널링"],hasCenter:!0,centerSummary:"마포구 소재 소형 스튜디오. 최대 8명 그룹 수업.",centerPlaceId:"6",programs:[{id:"p3",title:"금요 아트 명상 나이트",status:"ongoing",imageUrl:"https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=60",description:"캔버스에 감정 색을 옮기고 짧은 명상으로 마무리합니다."}],reviews:[{author:"최**",body:"말로 하기 어려운 감정이 색으로 정리됐어요.",rating:5}]},{id:"exp-busan-1",name:"한바다",avatarUrl:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=60",specialties:["해안 명상","소리 명상","리트릿"],regionIds:["KR-48"],intro:"부산·경남 해안을 기반으로 야외·소규모 리트릿을 기획합니다.",degrees:["OO대 불교학과 학사"],certificates:["템플스테이 인솔자 교육 이수"],careers:["2014–현재 독립 가이드","지역 문화재단 협력 프로그램 다수"],classTypes:["일출 명상","소리·공명","걷기 명상"],hasCenter:!1,activityAreas:["부산","울산","경남 해안"],programs:[{id:"p4",title:"겨울 해변 호흡 산책",status:"ongoing",description:"파도 리듬에 맞춘 천천한 걸음과 호흡. 월 2회 토요일."},{id:"p5",title:"가을 영도 선셋 명상",status:"past",imageUrl:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=60",description:"종료된 시즌 프로그램입니다. 후기는 아래 참고하세요."}],reviews:[{author:"이**",body:"야외라 더 몰입됐고 안내가 친절했습니다.",rating:4}]},{id:"exp-gangwon-1",name:"산들",avatarUrl:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=60",specialties:["숲 명상","차 명상","기업 웰니스"],regionIds:["KR-42"],intro:"강원 숲길과 차밭에서 진행하는 힐링 명상 전문입니다. 기업 재충전 프로그램 출강 가능합니다.",degrees:["OO대 산림자원학 학사"],certificates:["산림치유 지도사","명상 지도사"],careers:["2017–현재 강원 지역 집중","기업 HRD 웰니스 파트너"],classTypes:["숲 치유","차 명상","실내 릴렉스"],hasCenter:!0,centerSummary:"평창 인근 협력 숲속 공간(예약제).",programs:[{id:"p6",title:"주말 숲 리트릿 2박",status:"ongoing",imageUrl:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=60",description:"고요한 숲길 걷기, 차 시음, 야간 명상으로 구성합니다."}],reviews:[{author:"정**",body:"도시에선 느끼지 못했던 온도감이 있었어요.",rating:5}]}],BL=DL;function UL(){return[...BL]}const Xu=UL(),zh=e=>Xu.find(t=>t.id===e),HL=e=>e==="all"?[...Xu]:Xu.filter(t=>t.regionIds.includes(e)),T0=f.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 24px 16px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};
`,VL=f.header`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`,WL=f.button`
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
`,KL=f.div`
  flex: 1;
  min-width: 0;
`,qL=f.h1`
  margin: 0;
  font-size: 1.35rem;
  font-weight: 700;
`,YL=f.p`
  margin: 4px 0 0;
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.text700};
`,ZL=f.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,GL=f.button`
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
`,QL=f.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`,XL=f.div`
  flex: 1;
  min-width: 0;
`,JL=f.h2`
  margin: 0 0 6px;
  font-size: 1.1rem;
  font-weight: 700;
`,ex=f.p`
  margin: 0;
  font-size: 0.92rem;
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.45;
`,I0=f.p`
  text-align: center;
  color: ${({theme:e})=>e.colors.text700};
  padding: 40px 16px;
`,tx=()=>{const e=en(),{regionId:t}=bo(),n=t?hn(t):void 0,r=t?HL(t):[];return!t||!n?s.jsx(T0,{children:s.jsx(I0,{children:"지역 정보를 찾을 수 없어요."})}):s.jsxs(T0,{children:[s.jsxs(VL,{children:[s.jsx(WL,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),s.jsxs(KL,{children:[s.jsxs(qL,{children:[n.name," 명상 전문가"]}),s.jsx(YL,{children:"프로필 · 전문 분야를 확인하고 상세로 이동하세요"})]})]}),s.jsxs(ZL,{children:[r.length===0&&s.jsx(I0,{children:"이 지역에 등록된 명상 전문가가 아직 없어요."}),r.map(i=>s.jsxs(GL,{type:"button",onClick:()=>e(`/meditation/expert/${i.id}`),children:[s.jsx(QL,{src:i.avatarUrl,alt:""}),s.jsxs(XL,{children:[s.jsx(JL,{children:i.name}),s.jsx(ex,{children:i.specialties.join(" · ")})]})]},i.id))]})]})},nx="★",rx="☆";function is(e,t=5){const n=Math.round(Number(e)),r=Math.max(0,Math.min(t,Number.isFinite(n)?n:0));return nx.repeat(r)+rx.repeat(t-r)}const ix=5,ox=Be`
  from { opacity: 0; }
  to { opacity: 1; }
`,lx=Be`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`,sx=f.div`
  position: fixed;
  inset: 0;
  z-index: 400;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  animation: ${ox} 0.2s ease both;

  @media (min-width: 600px) {
    justify-content: center;
    align-items: center;
    padding: 24px;
  }
`,ax=f.div`
  background: ${({theme:e})=>e.colors.white};
  border-radius: 20px 20px 0 0;
  max-height: min(92dvh, 720px);
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${lx} 0.32s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (min-width: 600px) {
    border-radius: ${({theme:e})=>e.radii.lg};
    max-width: 440px;
    max-height: min(85dvh, 640px);
  }
`,ux=f.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 16px;
  padding-top: calc(12px + env(safe-area-inset-top, 0px));
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary100};
`,cx=f.div`
  min-width: 0;
`,dx=f.span`
  display: block;
  font-size: 1rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
`,px=f.span`
  display: block;
  margin-top: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text700};
`,fx=f.button`
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
`,hx=f.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 18px 16px calc(24px + env(safe-area-inset-bottom, 0px));
`,mx=f.article`
  padding-bottom: 18px;
  margin-bottom: 18px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary100};

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`,gx=f.p`
  margin: 0 0 10px;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text900};
`,Lx=f.div`
  margin: 0;
  font-size: 1rem;
  line-height: 1.65;
  color: ${({theme:e})=>e.colors.text700};
  white-space: pre-wrap;
  word-break: break-word;
`,xx=f.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 16px calc(12px + env(safe-area-inset-bottom, 0px));
  border-top: 1px solid ${({theme:e})=>e.colors.primary100};
  background: ${({theme:e})=>e.colors.white};
`,R0=f.button`
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
`,yx=f.span`
  font-size: 0.88rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text700};
  min-width: 4.5em;
  text-align: center;
`,Mh=({open:e,onClose:t,heading:n="후기",reviews:r,pageSize:i})=>{const o=i??ix,[l,a]=w.useState(1);w.useEffect(()=>{if(!e){a(1);return}a(1)},[e,r]),w.useEffect(()=>{if(!e)return;const y=v=>{v.key==="Escape"&&(v.stopPropagation(),t())};return window.addEventListener("keydown",y,!0),()=>window.removeEventListener("keydown",y,!0)},[e,t]),w.useEffect(()=>{if(!e)return;const y=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=y}},[e]);const u=w.useCallback(y=>{y.target===y.currentTarget&&t()},[t]),c=r.length,d=c===0?0:Math.ceil(c/o),p=d===0?1:Math.min(l,d),m=w.useMemo(()=>{if(c===0)return[];const y=(p-1)*o;return r.slice(y,y+o)},[r,c,p,o]);if(w.useEffect(()=>{d>0&&l>d&&a(d)},[l,d]),!e)return null;const h=c===0?"등록된 후기가 없어요.":d>1?`총 ${c}건 · ${o}건씩 보기`:`총 ${c}건`;return s.jsx(sx,{role:"presentation",onClick:u,children:s.jsxs(ax,{role:"dialog","aria-modal":"true","aria-labelledby":"reviews-list-sheet-title",onClick:y=>y.stopPropagation(),children:[s.jsxs(ux,{children:[s.jsxs(cx,{children:[s.jsx(dx,{id:"reviews-list-sheet-title",children:n}),s.jsx(px,{children:h})]}),s.jsx(fx,{type:"button",onClick:t,"aria-label":"닫기",children:s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),s.jsx(hx,{children:c===0?null:m.map((y,v)=>{const $=y.rating!=null?` · ${is(y.rating)}`:"",L=(p-1)*o+v;return s.jsxs(mx,{children:[s.jsxs(gx,{children:[y.author,$]}),s.jsx(Lx,{children:y.body})]},`${y.author}-${L}`)})}),c>0&&d>1&&s.jsxs(xx,{children:[s.jsx(R0,{type:"button",onClick:()=>a(y=>Math.max(1,y-1)),disabled:p<=1,children:"이전"}),s.jsxs(yx,{children:[p," / ",d]}),s.jsx(R0,{type:"button",onClick:()=>a(y=>Math.min(d,y+1)),disabled:p>=d,children:"다음"})]})]})})};function vx(e,t){const n=t.trim();if(!n)return;const r=e.programs.find(u=>{var c;return(c=u.linksClassTypes)==null?void 0:c.includes(n)});if(r)return r;const o=n.replace(/\([^)]*\)/g," ").replace(/[·]/g," ").split(/\s+/).map(u=>u.replace(/[()]/g,"").trim()).filter(u=>u.length>=2),l=u=>`${u.title} ${u.description}`.toLowerCase(),a=e.programs.find(u=>{const c=l(u);return c.includes(n.toLowerCase())?!0:o.some(d=>c.includes(d.toLowerCase()))});return a||(e.programs.find(u=>u.status==="ongoing")??e.programs[0])}const z0=f.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 0 calc(120px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};
  position: relative;
  z-index: 1;
`,M0=f.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  padding-top: calc(16px + env(safe-area-inset-top, 0px));
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.95);
  z-index: 5;
`,_0=f.button`
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
`,N0=f.h1`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
`,wx=f.div`
  padding: 8px 20px 20px;
  text-align: center;
`,bx=f.img`
  width: 112px;
  height: 112px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${({theme:e})=>e.colors.primary200};
`,kx=f.h2`
  margin: 16px 0 8px;
  font-size: 1.6rem;
  font-weight: 700;
`,A0=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
`,Sx=f.span`
  font-size: 0.85rem;
  padding: 4px 10px;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary50};
  color: ${({theme:e})=>e.colors.primary700};
`,Cx=f.button`
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
`,nn=f.section`
  padding: 0 20px 24px;
`,yn=f.h3`
  margin: 0 0 10px;
  font-size: 1.15rem;
  font-weight: 700;
`,bi=f.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.65;
  color: ${({theme:e})=>e.colors.text700};
`,F0=f.ul`
  margin: 0;
  padding-left: 1.2em;
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.6;

  li {
    margin-bottom: 6px;
  }
`,O0=f.button`
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
`,D0=f.span`
  display: block;
  margin: 0 0 6px;
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
`,B0=f.span`
  display: block;
  font-size: 1rem;
  line-height: 1.65;
  color: ${({theme:e})=>e.colors.text700};
`,U0=f.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  display: block;
  pointer-events: none;
  user-select: none;
`,H0=f.div`
  padding: 14px 16px;
`,V0=f.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 6px;
  margin-bottom: 8px;
  background: ${({theme:e,$past:t})=>t?e.colors.bg100:e.colors.primary100};
  color: ${({theme:e,$past:t})=>t?e.colors.text700:e.colors.primary700};
`,jx=f.button`
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
`,$x=f.div`
  padding: 14px 16px;
  border-radius: ${({theme:e})=>e.radii.md};
  background: ${({theme:e})=>e.colors.warmCream};
  margin-bottom: 10px;
`,Ex=f.p`
  margin: 0 0 6px;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text900};
`,Px=f.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.55;
  color: ${({theme:e})=>e.colors.text700};
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Tx=f.button`
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
`,Ix=f.p`
  margin: 0;
  color: ${({theme:e})=>e.colors.text700};
  font-size: 0.95rem;
`,Rx=()=>{const e=en(),{expertId:t}=bo(),n=t?zh(t):void 0,r=n!=null&&n.centerPlaceId?Rs(n.centerPlaceId):void 0,[i,o]=w.useState(!1);if(!n)return s.jsxs(z0,{children:[s.jsxs(M0,{children:[s.jsx(_0,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),s.jsx(N0,{children:"전문가"})]}),s.jsx(nn,{children:s.jsx(bi,{children:"프로필을 찾을 수 없어요."})})]});const l=n.programs.filter(u=>u.status==="ongoing"),a=n.programs.filter(u=>u.status==="past");return s.jsxs(z0,{children:[s.jsxs(M0,{children:[s.jsx(_0,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),s.jsx(N0,{children:"명상 전문가"})]}),s.jsxs(wx,{children:[s.jsx(bx,{src:n.avatarUrl,alt:""}),s.jsx(kx,{children:n.name}),s.jsx(A0,{children:n.specialties.map(u=>s.jsx(Sx,{children:u},u))})]}),s.jsxs(nn,{children:[s.jsx(yn,{children:"자기소개"}),s.jsx(bi,{children:n.intro})]}),s.jsxs(nn,{children:[s.jsx(yn,{children:"학위·이수"}),s.jsx(F0,{children:[...n.degrees,...n.certificates].map(u=>s.jsx("li",{children:u},u))})]}),s.jsxs(nn,{children:[s.jsx(yn,{children:"경력"}),s.jsx(F0,{children:n.careers.map(u=>s.jsx("li",{children:u},u))})]}),s.jsxs(nn,{children:[s.jsx(yn,{children:"클래스·분야"}),s.jsx(A0,{style:{justifyContent:"flex-start"},children:n.classTypes.map(u=>{const c=vx(n,u);return s.jsx(Cx,{type:"button",disabled:!c,title:c?`${c.title} 상세 보기`:"등록된 클래스가 없어요",onClick:()=>{c&&e(`/meditation/expert/${n.id}/class/${c.id}`)},children:u},u)})})]}),s.jsxs(nn,{children:[s.jsx(yn,{children:"센터·활동 지역"}),n.hasCenter&&n.centerSummary&&s.jsx(bi,{style:{marginBottom:8},children:n.centerSummary}),n.hasCenter&&n.centerPlaceId&&r&&s.jsxs(jx,{type:"button",onClick:()=>e(`/meditation/place/${n.centerPlaceId}`),children:["연결된 명상지 보기 — ",r.name]}),!n.hasCenter&&n.activityAreas&&n.activityAreas.length>0&&s.jsxs(bi,{children:["주 활동 반경: ",n.activityAreas.join(", ")]})]}),s.jsxs(nn,{children:[s.jsx(yn,{children:"진행 중인 클래스"}),l.length===0&&s.jsx(bi,{children:"현재 모집 중인 공개 일정이 없어요."}),l.map(u=>s.jsxs(O0,{type:"button","aria-label":`${u.title} 클래스 상세`,onClick:()=>e(`/meditation/expert/${n.id}/class/${u.id}`),children:[u.imageUrl&&s.jsx(U0,{src:u.imageUrl,alt:"",draggable:!1}),s.jsxs(H0,{children:[s.jsx(V0,{children:"진행 중"}),s.jsx(D0,{children:u.title}),s.jsx(B0,{children:u.description})]})]},u.id))]}),a.length>0&&s.jsxs(nn,{children:[s.jsx(yn,{children:"이전 프로그램"}),a.map(u=>s.jsxs(O0,{type:"button","aria-label":`${u.title} 클래스 상세`,onClick:()=>e(`/meditation/expert/${n.id}/class/${u.id}`),children:[u.imageUrl&&s.jsx(U0,{src:u.imageUrl,alt:"",draggable:!1}),s.jsxs(H0,{children:[s.jsx(V0,{$past:!0,children:"종료"}),s.jsx(D0,{children:u.title}),s.jsx(B0,{children:u.description})]})]},u.id))]}),n.reviews.length>0&&s.jsxs(nn,{children:[s.jsx(yn,{children:"후기"}),n.reviews.slice(0,2).map((u,c)=>s.jsxs($x,{children:[s.jsxs(Ex,{children:[u.author,u.rating!=null?` · ${is(u.rating)}`:""]}),s.jsx(Px,{children:u.body})]},`${u.author}-${c}`)),n.reviews.length>2&&s.jsxs(Ix,{style:{marginBottom:10},children:["외 ",n.reviews.length-2,"건의 후기가 더 있어요."]}),s.jsxs(Tx,{type:"button",onClick:()=>o(!0),children:["전체 후기 보기 · ",n.reviews.length,"건"]})]}),s.jsx(Mh,{open:i,onClose:()=>o(!1),heading:"후기",reviews:n.reviews})]})},W0=f.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 0 calc(48px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};
`,K0=f.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  padding-top: calc(16px + env(safe-area-inset-top, 0px));
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.96);
  z-index: 5;
`,q0=f.button`
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
`,Y0=f.h1`
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0;
  flex: 1;
  min-width: 0;
`,zx=f.div`
  width: 100%;
`,Mx=f.img`
  width: 100%;
  max-height: 240px;
  object-fit: cover;
  display: block;
  background: ${({theme:e})=>e.colors.bg100};
`,_x=f.div`
  padding: 20px 20px 28px;
`,Nx=f.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 8px;
  margin-bottom: 12px;
  background: ${({theme:e,$past:t})=>t?e.colors.bg100:e.colors.primary100};
  color: ${({theme:e,$past:t})=>t?e.colors.text700:e.colors.primary700};
`,Ax=f.h2`
  margin: 0 0 14px;
  font-size: 1.45rem;
  font-weight: 700;
  line-height: 1.3;
`,Fx=f.p`
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.65;
  color: ${({theme:e})=>e.colors.text700};
`,Ox=f.button`
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
`,Dx=f.p`
  padding: 32px 20px;
  color: ${({theme:e})=>e.colors.text700};
`,Bx=()=>{const e=en(),{expertId:t,programId:n}=bo(),r=t?zh(t):void 0,i=r==null?void 0:r.programs.find(o=>o.id===n);return!r||!i?s.jsxs(W0,{children:[s.jsxs(K0,{children:[s.jsx(q0,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),s.jsx(Y0,{children:"클래스"})]}),s.jsx(Dx,{children:"클래스 정보를 찾을 수 없어요."})]}):s.jsxs(W0,{children:[s.jsxs(K0,{children:[s.jsx(q0,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),s.jsx(Y0,{children:"클래스 상세"})]}),i.imageUrl?s.jsx(zx,{children:s.jsx(Mx,{src:i.imageUrl,alt:""})}):s.jsx("div",{style:{height:8}}),s.jsxs(_x,{children:[s.jsx(Nx,{$past:i.status==="past",children:i.status==="ongoing"?"진행 중":"종료된 프로그램"}),s.jsx(Ax,{children:i.title}),s.jsx(Fx,{children:i.description}),s.jsxs(Ox,{type:"button",onClick:()=>e(`/meditation/expert/${r.id}`),children:["← ",r.name," 프로필로 돌아가기"]})]})]})};function Ux(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const Hx=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Vx=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Wx={};function Z0(e,t){return(Wx.jsx?Vx:Hx).test(e)}const Kx=/[ \t\n\f\r]/g;function qx(e){return typeof e=="object"?e.type==="text"?G0(e.value):!1:G0(e)}function G0(e){return e.replace(Kx,"")===""}class ko{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}ko.prototype.normal={};ko.prototype.property={};ko.prototype.space=void 0;function _h(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new ko(n,r,t)}function Ju(e){return e.toLowerCase()}class ft{constructor(t,n){this.attribute=n,this.property=t}}ft.prototype.attribute="";ft.prototype.booleanish=!1;ft.prototype.boolean=!1;ft.prototype.commaOrSpaceSeparated=!1;ft.prototype.commaSeparated=!1;ft.prototype.defined=!1;ft.prototype.mustUseProperty=!1;ft.prototype.number=!1;ft.prototype.overloadedBoolean=!1;ft.prototype.property="";ft.prototype.spaceSeparated=!1;ft.prototype.space=void 0;let Yx=0;const ie=mr(),Me=mr(),ec=mr(),B=mr(),xe=mr(),Hr=mr(),gt=mr();function mr(){return 2**++Yx}const tc=Object.freeze(Object.defineProperty({__proto__:null,boolean:ie,booleanish:Me,commaOrSpaceSeparated:gt,commaSeparated:Hr,number:B,overloadedBoolean:ec,spaceSeparated:xe},Symbol.toStringTag,{value:"Module"})),va=Object.keys(tc);class g1 extends ft{constructor(t,n,r,i){let o=-1;if(super(t,n),Q0(this,"space",i),typeof r=="number")for(;++o<va.length;){const l=va[o];Q0(this,va[o],(r&tc[l])===tc[l])}}}g1.prototype.defined=!0;function Q0(e,t,n){n&&(e[t]=n)}function ci(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const o=new g1(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[Ju(r)]=r,n[Ju(o.attribute)]=r}return new ko(t,n,e.space)}const Nh=ci({properties:{ariaActiveDescendant:null,ariaAtomic:Me,ariaAutoComplete:null,ariaBusy:Me,ariaChecked:Me,ariaColCount:B,ariaColIndex:B,ariaColSpan:B,ariaControls:xe,ariaCurrent:null,ariaDescribedBy:xe,ariaDetails:null,ariaDisabled:Me,ariaDropEffect:xe,ariaErrorMessage:null,ariaExpanded:Me,ariaFlowTo:xe,ariaGrabbed:Me,ariaHasPopup:null,ariaHidden:Me,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:xe,ariaLevel:B,ariaLive:null,ariaModal:Me,ariaMultiLine:Me,ariaMultiSelectable:Me,ariaOrientation:null,ariaOwns:xe,ariaPlaceholder:null,ariaPosInSet:B,ariaPressed:Me,ariaReadOnly:Me,ariaRelevant:null,ariaRequired:Me,ariaRoleDescription:xe,ariaRowCount:B,ariaRowIndex:B,ariaRowSpan:B,ariaSelected:Me,ariaSetSize:B,ariaSort:null,ariaValueMax:B,ariaValueMin:B,ariaValueNow:B,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function Ah(e,t){return t in e?e[t]:t}function Fh(e,t){return Ah(e,t.toLowerCase())}const Zx=ci({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Hr,acceptCharset:xe,accessKey:xe,action:null,allow:null,allowFullScreen:ie,allowPaymentRequest:ie,allowUserMedia:ie,alt:null,as:null,async:ie,autoCapitalize:null,autoComplete:xe,autoFocus:ie,autoPlay:ie,blocking:xe,capture:null,charSet:null,checked:ie,cite:null,className:xe,cols:B,colSpan:null,content:null,contentEditable:Me,controls:ie,controlsList:xe,coords:B|Hr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ie,defer:ie,dir:null,dirName:null,disabled:ie,download:ec,draggable:Me,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ie,formTarget:null,headers:xe,height:B,hidden:ec,high:B,href:null,hrefLang:null,htmlFor:xe,httpEquiv:xe,id:null,imageSizes:null,imageSrcSet:null,inert:ie,inputMode:null,integrity:null,is:null,isMap:ie,itemId:null,itemProp:xe,itemRef:xe,itemScope:ie,itemType:xe,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ie,low:B,manifest:null,max:null,maxLength:B,media:null,method:null,min:null,minLength:B,multiple:ie,muted:ie,name:null,nonce:null,noModule:ie,noValidate:ie,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ie,optimum:B,pattern:null,ping:xe,placeholder:null,playsInline:ie,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ie,referrerPolicy:null,rel:xe,required:ie,reversed:ie,rows:B,rowSpan:B,sandbox:xe,scope:null,scoped:ie,seamless:ie,selected:ie,shadowRootClonable:ie,shadowRootDelegatesFocus:ie,shadowRootMode:null,shape:null,size:B,sizes:null,slot:null,span:B,spellCheck:Me,src:null,srcDoc:null,srcLang:null,srcSet:null,start:B,step:null,style:null,tabIndex:B,target:null,title:null,translate:null,type:null,typeMustMatch:ie,useMap:null,value:Me,width:B,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:xe,axis:null,background:null,bgColor:null,border:B,borderColor:null,bottomMargin:B,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ie,declare:ie,event:null,face:null,frame:null,frameBorder:null,hSpace:B,leftMargin:B,link:null,longDesc:null,lowSrc:null,marginHeight:B,marginWidth:B,noResize:ie,noHref:ie,noShade:ie,noWrap:ie,object:null,profile:null,prompt:null,rev:null,rightMargin:B,rules:null,scheme:null,scrolling:Me,standby:null,summary:null,text:null,topMargin:B,valueType:null,version:null,vAlign:null,vLink:null,vSpace:B,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ie,disableRemotePlayback:ie,prefix:null,property:null,results:B,security:null,unselectable:null},space:"html",transform:Fh}),Gx=ci({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:gt,accentHeight:B,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:B,amplitude:B,arabicForm:null,ascent:B,attributeName:null,attributeType:null,azimuth:B,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:B,by:null,calcMode:null,capHeight:B,className:xe,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:B,diffuseConstant:B,direction:null,display:null,dur:null,divisor:B,dominantBaseline:null,download:ie,dx:null,dy:null,edgeMode:null,editable:null,elevation:B,enableBackground:null,end:null,event:null,exponent:B,externalResourcesRequired:null,fill:null,fillOpacity:B,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Hr,g2:Hr,glyphName:Hr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:B,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:B,horizOriginX:B,horizOriginY:B,id:null,ideographic:B,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:B,k:B,k1:B,k2:B,k3:B,k4:B,kernelMatrix:gt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:B,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:B,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:B,overlineThickness:B,paintOrder:null,panose1:null,path:null,pathLength:B,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:xe,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:B,pointsAtY:B,pointsAtZ:B,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:gt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:gt,rev:gt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:gt,requiredFeatures:gt,requiredFonts:gt,requiredFormats:gt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:B,specularExponent:B,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:B,strikethroughThickness:B,string:null,stroke:null,strokeDashArray:gt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:B,strokeOpacity:B,strokeWidth:null,style:null,surfaceScale:B,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:gt,tabIndex:B,tableValues:null,target:null,targetX:B,targetY:B,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:gt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:B,underlineThickness:B,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:B,values:null,vAlphabetic:B,vMathematical:B,vectorEffect:null,vHanging:B,vIdeographic:B,version:null,vertAdvY:B,vertOriginX:B,vertOriginY:B,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:B,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Ah}),Oh=ci({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),Dh=ci({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Fh}),Bh=ci({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),Qx={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Xx=/[A-Z]/g,X0=/-[a-z]/g,Jx=/^data[-\w.:]+$/i;function ey(e,t){const n=Ju(t);let r=t,i=ft;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Jx.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(X0,ny);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!X0.test(o)){let l=o.replace(Xx,ty);l.charAt(0)!=="-"&&(l="-"+l),t="data"+l}}i=g1}return new i(r,t)}function ty(e){return"-"+e.toLowerCase()}function ny(e){return e.charAt(1).toUpperCase()}const ry=_h([Nh,Zx,Oh,Dh,Bh],"html"),L1=_h([Nh,Gx,Oh,Dh,Bh],"svg");function iy(e){return e.join(" ").trim()}var x1={},J0=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,oy=/\n/g,ly=/^\s*/,sy=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,ay=/^:\s*/,uy=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,cy=/^[;\s]*/,dy=/^\s+|\s+$/g,py=`
`,ep="/",tp="*",Gn="",fy="comment",hy="declaration";function my(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(y){var v=y.match(oy);v&&(n+=v.length);var $=y.lastIndexOf(py);r=~$?y.length-$:r+y.length}function o(){var y={line:n,column:r};return function(v){return v.position=new l(y),c(),v}}function l(y){this.start=y,this.end={line:n,column:r},this.source=t.source}l.prototype.content=e;function a(y){var v=new Error(t.source+":"+n+":"+r+": "+y);if(v.reason=y,v.filename=t.source,v.line=n,v.column=r,v.source=e,!t.silent)throw v}function u(y){var v=y.exec(e);if(v){var $=v[0];return i($),e=e.slice($.length),v}}function c(){u(ly)}function d(y){var v;for(y=y||[];v=p();)v!==!1&&y.push(v);return y}function p(){var y=o();if(!(ep!=e.charAt(0)||tp!=e.charAt(1))){for(var v=2;Gn!=e.charAt(v)&&(tp!=e.charAt(v)||ep!=e.charAt(v+1));)++v;if(v+=2,Gn===e.charAt(v-1))return a("End of comment missing");var $=e.slice(2,v-2);return r+=2,i($),e=e.slice(v),r+=2,y({type:fy,comment:$})}}function m(){var y=o(),v=u(sy);if(v){if(p(),!u(ay))return a("property missing ':'");var $=u(uy),L=y({type:hy,property:np(v[0].replace(J0,Gn)),value:$?np($[0].replace(J0,Gn)):Gn});return u(cy),L}}function h(){var y=[];d(y);for(var v;v=m();)v!==!1&&(y.push(v),d(y));return y}return c(),h()}function np(e){return e?e.replace(dy,Gn):Gn}var gy=my,Ly=kl&&kl.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(x1,"__esModule",{value:!0});x1.default=yy;const xy=Ly(gy);function yy(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,xy.default)(e),i=typeof t=="function";return r.forEach(o=>{if(o.type!=="declaration")return;const{property:l,value:a}=o;i?t(l,a,o):a&&(n=n||{},n[l]=a)}),n}var _s={};Object.defineProperty(_s,"__esModule",{value:!0});_s.camelCase=void 0;var vy=/^--[a-zA-Z0-9_-]+$/,wy=/-([a-z])/g,by=/^[^-]+$/,ky=/^-(webkit|moz|ms|o|khtml)-/,Sy=/^-(ms)-/,Cy=function(e){return!e||by.test(e)||vy.test(e)},jy=function(e,t){return t.toUpperCase()},rp=function(e,t){return"".concat(t,"-")},$y=function(e,t){return t===void 0&&(t={}),Cy(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(Sy,rp):e=e.replace(ky,rp),e.replace(wy,jy))};_s.camelCase=$y;var Ey=kl&&kl.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},Py=Ey(x1),Ty=_s;function nc(e,t){var n={};return!e||typeof e!="string"||(0,Py.default)(e,function(r,i){r&&i&&(n[(0,Ty.camelCase)(r,t)]=i)}),n}nc.default=nc;var Iy=nc;const Ry=ss(Iy),Uh=Hh("end"),y1=Hh("start");function Hh(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function zy(e){const t=y1(e),n=Uh(e);if(t&&n)return{start:t,end:n}}function Ui(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?ip(e.position):"start"in e||"end"in e?ip(e):"line"in e||"column"in e?rc(e):""}function rc(e){return op(e&&e.line)+":"+op(e&&e.column)}function ip(e){return rc(e&&e.start)+"-"+rc(e&&e.end)}function op(e){return e&&typeof e=="number"?e:1}class et extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},l=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(l=!0,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const u=r.indexOf(":");u===-1?o.ruleId=r:(o.source=r.slice(0,u),o.ruleId=r.slice(u+1))}if(!o.place&&o.ancestors&&o.ancestors){const u=o.ancestors[o.ancestors.length-1];u&&(o.place=u.position)}const a=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=a?a.line:void 0,this.name=Ui(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=l&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}et.prototype.file="";et.prototype.name="";et.prototype.reason="";et.prototype.message="";et.prototype.stack="";et.prototype.column=void 0;et.prototype.line=void 0;et.prototype.ancestors=void 0;et.prototype.cause=void 0;et.prototype.fatal=void 0;et.prototype.place=void 0;et.prototype.ruleId=void 0;et.prototype.source=void 0;const v1={}.hasOwnProperty,My=new Map,_y=/[A-Z]/g,Ny=new Set(["table","tbody","thead","tfoot","tr"]),Ay=new Set(["td","th"]),Vh="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Fy(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=Ky(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Wy(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?L1:ry,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=Wh(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function Wh(e,t,n){if(t.type==="element")return Oy(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return Dy(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return Uy(e,t,n);if(t.type==="mdxjsEsm")return By(e,t);if(t.type==="root")return Hy(e,t,n);if(t.type==="text")return Vy(e,t)}function Oy(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=L1,e.schema=i),e.ancestors.push(t);const o=qh(e,t.tagName,!1),l=qy(e,t);let a=b1(e,t);return Ny.has(t.tagName)&&(a=a.filter(function(u){return typeof u=="string"?!qx(u):!0})),Kh(e,l,o,t),w1(l,a),e.ancestors.pop(),e.schema=r,e.create(t,o,l,n)}function Dy(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}ho(e,t.position)}function By(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);ho(e,t.position)}function Uy(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=L1,e.schema=i),e.ancestors.push(t);const o=t.name===null?e.Fragment:qh(e,t.name,!0),l=Yy(e,t),a=b1(e,t);return Kh(e,l,o,t),w1(l,a),e.ancestors.pop(),e.schema=r,e.create(t,o,l,n)}function Hy(e,t,n){const r={};return w1(r,b1(e,t)),e.create(t,e.Fragment,r,n)}function Vy(e,t){return t.value}function Kh(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function w1(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function Wy(e,t,n){return r;function r(i,o,l,a){const c=Array.isArray(l.children)?n:t;return a?c(o,l,a):c(o,l)}}function Ky(e,t){return n;function n(r,i,o,l){const a=Array.isArray(o.children),u=y1(r);return t(i,o,l,a,{columnNumber:u?u.column-1:void 0,fileName:e,lineNumber:u?u.line:void 0},void 0)}}function qy(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&v1.call(t.properties,i)){const o=Zy(e,i,t.properties[i]);if(o){const[l,a]=o;e.tableCellAlignToStyle&&l==="align"&&typeof a=="string"&&Ay.has(t.tagName)?r=a:n[l]=a}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function Yy(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const l=o.expression;l.type;const a=l.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else ho(e,t.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const a=r.value.data.estree.body[0];a.type,o=e.evaluater.evaluateExpression(a.expression)}else ho(e,t.position);else o=r.value===null?!0:r.value;n[i]=o}return n}function b1(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:My;for(;++r<t.children.length;){const o=t.children[r];let l;if(e.passKeys){const u=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(u){const c=i.get(u)||0;l=u+"-"+c,i.set(u,c+1)}}const a=Wh(e,o,l);a!==void 0&&n.push(a)}return n}function Zy(e,t,n){const r=ey(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Ux(n):iy(n)),r.property==="style"){let i=typeof n=="object"?n:Gy(e,String(n));return e.stylePropertyNameCase==="css"&&(i=Qy(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?Qx[r.property]||r.property:r.attribute,n]}}function Gy(e,t){try{return Ry(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new et("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=Vh+"#cannot-parse-style-attribute",i}}function qh(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let o=-1,l;for(;++o<i.length;){const a=Z0(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};l=l?{type:"MemberExpression",object:l,property:a,computed:!!(o&&a.type==="Literal"),optional:!1}:a}r=l}else r=Z0(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return v1.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);ho(e)}function ho(e,t){const n=new et("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Vh+"#cannot-handle-mdx-estrees-without-createevaluater",n}function Qy(e){const t={};let n;for(n in e)v1.call(e,n)&&(t[Xy(n)]=e[n]);return t}function Xy(e){let t=e.replace(_y,Jy);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function Jy(e){return"-"+e.toLowerCase()}const wa={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},ev={};function tv(e,t){const n=ev,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Yh(e,r,i)}function Yh(e,t,n){if(nv(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return lp(e.children,t,n)}return Array.isArray(e)?lp(e,t,n):""}function lp(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=Yh(e[i],t,n);return r.join("")}function nv(e){return!!(e&&typeof e=="object")}const sp=document.createElement("i");function k1(e){const t="&"+e+";";sp.innerHTML=t;const n=sp.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function Jt(e,t,n,r){const i=e.length;let o=0,l;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)l=Array.from(r),l.unshift(t,n),e.splice(...l);else for(n&&e.splice(t,n);o<r.length;)l=r.slice(o,o+1e4),l.unshift(t,0),e.splice(...l),o+=1e4,t+=1e4}function Pt(e,t){return e.length>0?(Jt(e,e.length,0,t),e):t}const ap={}.hasOwnProperty;function rv(e){const t={};let n=-1;for(;++n<e.length;)iv(t,e[n]);return t}function iv(e,t){let n;for(n in t){const i=(ap.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let l;if(o)for(l in o){ap.call(i,l)||(i[l]=[]);const a=o[l];ov(i[l],Array.isArray(a)?a:a?[a]:[])}}}function ov(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Jt(e,0,0,r)}function Zh(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Vr(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Zt=Wn(/[A-Za-z]/),vt=Wn(/[\dA-Za-z]/),lv=Wn(/[#-'*+\--9=?A-Z^-~]/);function ic(e){return e!==null&&(e<32||e===127)}const oc=Wn(/\d/),sv=Wn(/[\dA-Fa-f]/),av=Wn(/[!-/:-@[-`{-~]/);function ee(e){return e!==null&&e<-2}function pt(e){return e!==null&&(e<0||e===32)}function fe(e){return e===-2||e===-1||e===32}const uv=Wn(new RegExp("\\p{P}|\\p{S}","u")),cv=Wn(/\s/);function Wn(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function di(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let l="";if(o===37&&vt(e.charCodeAt(n+1))&&vt(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(l=String.fromCharCode(o));else if(o>55295&&o<57344){const a=e.charCodeAt(n+1);o<56320&&a>56319&&a<57344?(l=String.fromCharCode(o,a),i=1):l="�"}else l=String.fromCharCode(o);l&&(t.push(e.slice(r,n),encodeURIComponent(l)),r=n+i+1,l=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function ve(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return l;function l(u){return fe(u)?(e.enter(n),a(u)):t(u)}function a(u){return fe(u)&&o++<i?(e.consume(u),a):(e.exit(n),t(u))}}const dv={tokenize:pv};function pv(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),ve(e,t,"linePrefix")}function i(a){return e.enter("paragraph"),o(a)}function o(a){const u=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=u),n=u,l(a)}function l(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return ee(a)?(e.consume(a),e.exit("chunkText"),o):(e.consume(a),l)}}const fv={tokenize:hv},up={tokenize:mv};function hv(e){const t=this,n=[];let r=0,i,o,l;return a;function a(g){if(r<n.length){const k=n[r];return t.containerState=k[1],e.attempt(k[0].continuation,u,c)(g)}return c(g)}function u(g){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&x();const k=t.events.length;let P=k,S;for(;P--;)if(t.events[P][0]==="exit"&&t.events[P][1].type==="chunkFlow"){S=t.events[P][1].end;break}L(r);let j=k;for(;j<t.events.length;)t.events[j][1].end={...S},j++;return Jt(t.events,P+1,0,t.events.slice(k)),t.events.length=j,c(g)}return a(g)}function c(g){if(r===n.length){if(!i)return m(g);if(i.currentConstruct&&i.currentConstruct.concrete)return y(g);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(up,d,p)(g)}function d(g){return i&&x(),L(r),m(g)}function p(g){return t.parser.lazy[t.now().line]=r!==n.length,l=t.now().offset,y(g)}function m(g){return t.containerState={},e.attempt(up,h,y)(g)}function h(g){return r++,n.push([t.currentConstruct,t.containerState]),m(g)}function y(g){if(g===null){i&&x(),L(0),e.consume(g);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),v(g)}function v(g){if(g===null){$(e.exit("chunkFlow"),!0),L(0),e.consume(g);return}return ee(g)?(e.consume(g),$(e.exit("chunkFlow")),r=0,t.interrupt=void 0,a):(e.consume(g),v)}function $(g,k){const P=t.sliceStream(g);if(k&&P.push(null),g.previous=o,o&&(o.next=g),o=g,i.defineSkip(g.start),i.write(P),t.parser.lazy[g.start.line]){let S=i.events.length;for(;S--;)if(i.events[S][1].start.offset<l&&(!i.events[S][1].end||i.events[S][1].end.offset>l))return;const j=t.events.length;let T=j,z,R;for(;T--;)if(t.events[T][0]==="exit"&&t.events[T][1].type==="chunkFlow"){if(z){R=t.events[T][1].end;break}z=!0}for(L(r),S=j;S<t.events.length;)t.events[S][1].end={...R},S++;Jt(t.events,T+1,0,t.events.slice(j)),t.events.length=S}}function L(g){let k=n.length;for(;k-- >g;){const P=n[k];t.containerState=P[1],P[0].exit.call(t,e)}n.length=g}function x(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function mv(e,t,n){return ve(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function cp(e){if(e===null||pt(e)||cv(e))return 1;if(uv(e))return 2}function S1(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const lc={name:"attention",resolveAll:gv,tokenize:Lv};function gv(e,t){let n=-1,r,i,o,l,a,u,c,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;u=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const p={...e[r][1].end},m={...e[n][1].start};dp(p,-u),dp(m,u),l={type:u>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},a={type:u>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:m},o={type:u>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:u>1?"strong":"emphasis",start:{...l.start},end:{...a.end}},e[r][1].end={...l.start},e[n][1].start={...a.end},c=[],e[r][1].end.offset-e[r][1].start.offset&&(c=Pt(c,[["enter",e[r][1],t],["exit",e[r][1],t]])),c=Pt(c,[["enter",i,t],["enter",l,t],["exit",l,t],["enter",o,t]]),c=Pt(c,S1(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),c=Pt(c,[["exit",o,t],["enter",a,t],["exit",a,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,c=Pt(c,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,Jt(e,r-1,n-r+3,c),n=r+c.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function Lv(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=cp(r);let o;return l;function l(u){return o=u,e.enter("attentionSequence"),a(u)}function a(u){if(u===o)return e.consume(u),a;const c=e.exit("attentionSequence"),d=cp(u),p=!d||d===2&&i||n.includes(u),m=!i||i===2&&d||n.includes(r);return c._open=!!(o===42?p:p&&(i||!m)),c._close=!!(o===42?m:m&&(d||!p)),t(u)}}function dp(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const xv={name:"autolink",tokenize:yv};function yv(e,t,n){let r=0;return i;function i(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(h){return Zt(h)?(e.consume(h),l):h===64?n(h):c(h)}function l(h){return h===43||h===45||h===46||vt(h)?(r=1,a(h)):c(h)}function a(h){return h===58?(e.consume(h),r=0,u):(h===43||h===45||h===46||vt(h))&&r++<32?(e.consume(h),a):(r=0,c(h))}function u(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):h===null||h===32||h===60||ic(h)?n(h):(e.consume(h),u)}function c(h){return h===64?(e.consume(h),d):lv(h)?(e.consume(h),c):n(h)}function d(h){return vt(h)?p(h):n(h)}function p(h){return h===46?(e.consume(h),r=0,d):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):m(h)}function m(h){if((h===45||vt(h))&&r++<63){const y=h===45?m:p;return e.consume(h),y}return n(h)}}const Ns={partial:!0,tokenize:vv};function vv(e,t,n){return r;function r(o){return fe(o)?ve(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||ee(o)?t(o):n(o)}}const Gh={continuation:{tokenize:bv},exit:kv,name:"blockQuote",tokenize:wv};function wv(e,t,n){const r=this;return i;function i(l){if(l===62){const a=r.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(l),e.exit("blockQuoteMarker"),o}return n(l)}function o(l){return fe(l)?(e.enter("blockQuotePrefixWhitespace"),e.consume(l),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(l))}}function bv(e,t,n){const r=this;return i;function i(l){return fe(l)?ve(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l):o(l)}function o(l){return e.attempt(Gh,t,n)(l)}}function kv(e){e.exit("blockQuote")}const Qh={name:"characterEscape",tokenize:Sv};function Sv(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return av(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const Xh={name:"characterReference",tokenize:Cv};function Cv(e,t,n){const r=this;let i=0,o,l;return a;function a(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),u}function u(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),c):(e.enter("characterReferenceValue"),o=31,l=vt,d(p))}function c(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,l=sv,d):(e.enter("characterReferenceValue"),o=7,l=oc,d(p))}function d(p){if(p===59&&i){const m=e.exit("characterReferenceValue");return l===vt&&!k1(r.sliceSerialize(m))?n(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return l(p)&&i++<o?(e.consume(p),d):n(p)}}const pp={partial:!0,tokenize:$v},fp={concrete:!0,name:"codeFenced",tokenize:jv};function jv(e,t,n){const r=this,i={partial:!0,tokenize:P};let o=0,l=0,a;return u;function u(S){return c(S)}function c(S){const j=r.events[r.events.length-1];return o=j&&j[1].type==="linePrefix"?j[2].sliceSerialize(j[1],!0).length:0,a=S,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(S)}function d(S){return S===a?(l++,e.consume(S),d):l<3?n(S):(e.exit("codeFencedFenceSequence"),fe(S)?ve(e,p,"whitespace")(S):p(S))}function p(S){return S===null||ee(S)?(e.exit("codeFencedFence"),r.interrupt?t(S):e.check(pp,v,k)(S)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),m(S))}function m(S){return S===null||ee(S)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(S)):fe(S)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),ve(e,h,"whitespace")(S)):S===96&&S===a?n(S):(e.consume(S),m)}function h(S){return S===null||ee(S)?p(S):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),y(S))}function y(S){return S===null||ee(S)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(S)):S===96&&S===a?n(S):(e.consume(S),y)}function v(S){return e.attempt(i,k,$)(S)}function $(S){return e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),L}function L(S){return o>0&&fe(S)?ve(e,x,"linePrefix",o+1)(S):x(S)}function x(S){return S===null||ee(S)?e.check(pp,v,k)(S):(e.enter("codeFlowValue"),g(S))}function g(S){return S===null||ee(S)?(e.exit("codeFlowValue"),x(S)):(e.consume(S),g)}function k(S){return e.exit("codeFenced"),t(S)}function P(S,j,T){let z=0;return R;function R(A){return S.enter("lineEnding"),S.consume(A),S.exit("lineEnding"),I}function I(A){return S.enter("codeFencedFence"),fe(A)?ve(S,E,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(A):E(A)}function E(A){return A===a?(S.enter("codeFencedFenceSequence"),M(A)):T(A)}function M(A){return A===a?(z++,S.consume(A),M):z>=l?(S.exit("codeFencedFenceSequence"),fe(A)?ve(S,F,"whitespace")(A):F(A)):T(A)}function F(A){return A===null||ee(A)?(S.exit("codeFencedFence"),j(A)):T(A)}}}function $v(e,t,n){const r=this;return i;function i(l){return l===null?n(l):(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),o)}function o(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}const ba={name:"codeIndented",tokenize:Pv},Ev={partial:!0,tokenize:Tv};function Pv(e,t,n){const r=this;return i;function i(c){return e.enter("codeIndented"),ve(e,o,"linePrefix",5)(c)}function o(c){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?l(c):n(c)}function l(c){return c===null?u(c):ee(c)?e.attempt(Ev,l,u)(c):(e.enter("codeFlowValue"),a(c))}function a(c){return c===null||ee(c)?(e.exit("codeFlowValue"),l(c)):(e.consume(c),a)}function u(c){return e.exit("codeIndented"),t(c)}}function Tv(e,t,n){const r=this;return i;function i(l){return r.parser.lazy[r.now().line]?n(l):ee(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),i):ve(e,o,"linePrefix",5)(l)}function o(l){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(l):ee(l)?i(l):n(l)}}const Iv={name:"codeText",previous:zv,resolve:Rv,tokenize:Mv};function Rv(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function zv(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Mv(e,t,n){let r=0,i,o;return l;function l(p){return e.enter("codeText"),e.enter("codeTextSequence"),a(p)}function a(p){return p===96?(e.consume(p),r++,a):(e.exit("codeTextSequence"),u(p))}function u(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),u):p===96?(o=e.enter("codeTextSequence"),i=0,d(p)):ee(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),u):(e.enter("codeTextData"),c(p))}function c(p){return p===null||p===32||p===96||ee(p)?(e.exit("codeTextData"),u(p)):(e.consume(p),c)}function d(p){return p===96?(e.consume(p),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(o.type="codeTextData",c(p))}}class _v{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&ki(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),ki(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),ki(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);ki(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);ki(this.left,n.reverse())}}}function ki(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Jh(e){const t={};let n=-1,r,i,o,l,a,u,c;const d=new _v(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(u=r[1]._tokenizer.events,o=0,o<u.length&&u[o][1].type==="lineEndingBlank"&&(o+=2),o<u.length&&u[o][1].type==="content"))for(;++o<u.length&&u[o][1].type!=="content";)u[o][1].type==="chunkText"&&(u[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,Nv(d,n)),n=t[n],c=!0);else if(r[1]._container){for(o=n,i=void 0;o--;)if(l=d.get(o),l[1].type==="lineEnding"||l[1].type==="lineEndingBlank")l[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),l[1].type="lineEnding",i=o);else if(!(l[1].type==="linePrefix"||l[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},a=d.slice(i,n),a.unshift(r),d.splice(i,n-i+1,a))}}return Jt(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!c}function Nv(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const o=[];let l=n._tokenizer;l||(l=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(l._contentTypeTextTrailing=!0));const a=l.events,u=[],c={};let d,p,m=-1,h=n,y=0,v=0;const $=[v];for(;h;){for(;e.get(++i)[1]!==h;);o.push(i),h._tokenizer||(d=r.sliceStream(h),h.next||d.push(null),p&&l.defineSkip(h.start),h._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(d),h._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),p=h,h=h.next}for(h=n;++m<a.length;)a[m][0]==="exit"&&a[m-1][0]==="enter"&&a[m][1].type===a[m-1][1].type&&a[m][1].start.line!==a[m][1].end.line&&(v=m+1,$.push(v),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(l.events=[],h?(h._tokenizer=void 0,h.previous=void 0):$.pop(),m=$.length;m--;){const L=a.slice($[m],$[m+1]),x=o.pop();u.push([x,x+L.length-1]),e.splice(x,2,L)}for(u.reverse(),m=-1;++m<u.length;)c[y+u[m][0]]=y+u[m][1],y+=u[m][1]-u[m][0]-1;return c}const Av={resolve:Ov,tokenize:Dv},Fv={partial:!0,tokenize:Bv};function Ov(e){return Jh(e),e}function Dv(e,t){let n;return r;function r(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?o(a):ee(a)?e.check(Fv,l,o)(a):(e.consume(a),i)}function o(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function l(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function Bv(e,t,n){const r=this;return i;function i(l){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),ve(e,o,"linePrefix")}function o(l){if(l===null||ee(l))return n(l);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(l):e.interrupt(r.parser.constructs.flow,n,t)(l)}}function e3(e,t,n,r,i,o,l,a,u){const c=u||Number.POSITIVE_INFINITY;let d=0;return p;function p(L){return L===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(L),e.exit(o),m):L===null||L===32||L===41||ic(L)?n(L):(e.enter(r),e.enter(l),e.enter(a),e.enter("chunkString",{contentType:"string"}),v(L))}function m(L){return L===62?(e.enter(o),e.consume(L),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),h(L))}function h(L){return L===62?(e.exit("chunkString"),e.exit(a),m(L)):L===null||L===60||ee(L)?n(L):(e.consume(L),L===92?y:h)}function y(L){return L===60||L===62||L===92?(e.consume(L),h):h(L)}function v(L){return!d&&(L===null||L===41||pt(L))?(e.exit("chunkString"),e.exit(a),e.exit(l),e.exit(r),t(L)):d<c&&L===40?(e.consume(L),d++,v):L===41?(e.consume(L),d--,v):L===null||L===32||L===40||ic(L)?n(L):(e.consume(L),L===92?$:v)}function $(L){return L===40||L===41||L===92?(e.consume(L),v):v(L)}}function t3(e,t,n,r,i,o){const l=this;let a=0,u;return c;function c(h){return e.enter(r),e.enter(i),e.consume(h),e.exit(i),e.enter(o),d}function d(h){return a>999||h===null||h===91||h===93&&!u||h===94&&!a&&"_hiddenFootnoteSupport"in l.parser.constructs?n(h):h===93?(e.exit(o),e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):ee(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),p(h))}function p(h){return h===null||h===91||h===93||ee(h)||a++>999?(e.exit("chunkString"),d(h)):(e.consume(h),u||(u=!fe(h)),h===92?m:p)}function m(h){return h===91||h===92||h===93?(e.consume(h),a++,p):p(h)}}function n3(e,t,n,r,i,o){let l;return a;function a(m){return m===34||m===39||m===40?(e.enter(r),e.enter(i),e.consume(m),e.exit(i),l=m===40?41:m,u):n(m)}function u(m){return m===l?(e.enter(i),e.consume(m),e.exit(i),e.exit(r),t):(e.enter(o),c(m))}function c(m){return m===l?(e.exit(o),u(l)):m===null?n(m):ee(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),ve(e,c,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(m))}function d(m){return m===l||m===null||ee(m)?(e.exit("chunkString"),c(m)):(e.consume(m),m===92?p:d)}function p(m){return m===l||m===92?(e.consume(m),d):d(m)}}function Hi(e,t){let n;return r;function r(i){return ee(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):fe(i)?ve(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const Uv={name:"definition",tokenize:Vv},Hv={partial:!0,tokenize:Wv};function Vv(e,t,n){const r=this;let i;return o;function o(h){return e.enter("definition"),l(h)}function l(h){return t3.call(r,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function a(h){return i=Vr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),u):n(h)}function u(h){return pt(h)?Hi(e,c)(h):c(h)}function c(h){return e3(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function d(h){return e.attempt(Hv,p,p)(h)}function p(h){return fe(h)?ve(e,m,"whitespace")(h):m(h)}function m(h){return h===null||ee(h)?(e.exit("definition"),r.parser.defined.push(i),t(h)):n(h)}}function Wv(e,t,n){return r;function r(a){return pt(a)?Hi(e,i)(a):n(a)}function i(a){return n3(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function o(a){return fe(a)?ve(e,l,"whitespace")(a):l(a)}function l(a){return a===null||ee(a)?t(a):n(a)}}const Kv={name:"hardBreakEscape",tokenize:qv};function qv(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return ee(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const Yv={name:"headingAtx",resolve:Zv,tokenize:Gv};function Zv(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Jt(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function Gv(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),o(d)}function o(d){return e.enter("atxHeadingSequence"),l(d)}function l(d){return d===35&&r++<6?(e.consume(d),l):d===null||pt(d)?(e.exit("atxHeadingSequence"),a(d)):n(d)}function a(d){return d===35?(e.enter("atxHeadingSequence"),u(d)):d===null||ee(d)?(e.exit("atxHeading"),t(d)):fe(d)?ve(e,a,"whitespace")(d):(e.enter("atxHeadingText"),c(d))}function u(d){return d===35?(e.consume(d),u):(e.exit("atxHeadingSequence"),a(d))}function c(d){return d===null||d===35||pt(d)?(e.exit("atxHeadingText"),a(d)):(e.consume(d),c)}}const Qv=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],hp=["pre","script","style","textarea"],Xv={concrete:!0,name:"htmlFlow",resolveTo:tw,tokenize:nw},Jv={partial:!0,tokenize:iw},ew={partial:!0,tokenize:rw};function tw(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function nw(e,t,n){const r=this;let i,o,l,a,u;return c;function c(C){return d(C)}function d(C){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(C),p}function p(C){return C===33?(e.consume(C),m):C===47?(e.consume(C),o=!0,v):C===63?(e.consume(C),i=3,r.interrupt?t:b):Zt(C)?(e.consume(C),l=String.fromCharCode(C),$):n(C)}function m(C){return C===45?(e.consume(C),i=2,h):C===91?(e.consume(C),i=5,a=0,y):Zt(C)?(e.consume(C),i=4,r.interrupt?t:b):n(C)}function h(C){return C===45?(e.consume(C),r.interrupt?t:b):n(C)}function y(C){const ne="CDATA[";return C===ne.charCodeAt(a++)?(e.consume(C),a===ne.length?r.interrupt?t:E:y):n(C)}function v(C){return Zt(C)?(e.consume(C),l=String.fromCharCode(C),$):n(C)}function $(C){if(C===null||C===47||C===62||pt(C)){const ne=C===47,ae=l.toLowerCase();return!ne&&!o&&hp.includes(ae)?(i=1,r.interrupt?t(C):E(C)):Qv.includes(l.toLowerCase())?(i=6,ne?(e.consume(C),L):r.interrupt?t(C):E(C)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(C):o?x(C):g(C))}return C===45||vt(C)?(e.consume(C),l+=String.fromCharCode(C),$):n(C)}function L(C){return C===62?(e.consume(C),r.interrupt?t:E):n(C)}function x(C){return fe(C)?(e.consume(C),x):R(C)}function g(C){return C===47?(e.consume(C),R):C===58||C===95||Zt(C)?(e.consume(C),k):fe(C)?(e.consume(C),g):R(C)}function k(C){return C===45||C===46||C===58||C===95||vt(C)?(e.consume(C),k):P(C)}function P(C){return C===61?(e.consume(C),S):fe(C)?(e.consume(C),P):g(C)}function S(C){return C===null||C===60||C===61||C===62||C===96?n(C):C===34||C===39?(e.consume(C),u=C,j):fe(C)?(e.consume(C),S):T(C)}function j(C){return C===u?(e.consume(C),u=null,z):C===null||ee(C)?n(C):(e.consume(C),j)}function T(C){return C===null||C===34||C===39||C===47||C===60||C===61||C===62||C===96||pt(C)?P(C):(e.consume(C),T)}function z(C){return C===47||C===62||fe(C)?g(C):n(C)}function R(C){return C===62?(e.consume(C),I):n(C)}function I(C){return C===null||ee(C)?E(C):fe(C)?(e.consume(C),I):n(C)}function E(C){return C===45&&i===2?(e.consume(C),Y):C===60&&i===1?(e.consume(C),V):C===62&&i===4?(e.consume(C),Z):C===63&&i===3?(e.consume(C),b):C===93&&i===5?(e.consume(C),D):ee(C)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(Jv,q,M)(C)):C===null||ee(C)?(e.exit("htmlFlowData"),M(C)):(e.consume(C),E)}function M(C){return e.check(ew,F,q)(C)}function F(C){return e.enter("lineEnding"),e.consume(C),e.exit("lineEnding"),A}function A(C){return C===null||ee(C)?M(C):(e.enter("htmlFlowData"),E(C))}function Y(C){return C===45?(e.consume(C),b):E(C)}function V(C){return C===47?(e.consume(C),l="",N):E(C)}function N(C){if(C===62){const ne=l.toLowerCase();return hp.includes(ne)?(e.consume(C),Z):E(C)}return Zt(C)&&l.length<8?(e.consume(C),l+=String.fromCharCode(C),N):E(C)}function D(C){return C===93?(e.consume(C),b):E(C)}function b(C){return C===62?(e.consume(C),Z):C===45&&i===2?(e.consume(C),b):E(C)}function Z(C){return C===null||ee(C)?(e.exit("htmlFlowData"),q(C)):(e.consume(C),Z)}function q(C){return e.exit("htmlFlow"),t(C)}}function rw(e,t,n){const r=this;return i;function i(l){return ee(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),o):n(l)}function o(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}function iw(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Ns,t,n)}}const ow={name:"htmlText",tokenize:lw};function lw(e,t,n){const r=this;let i,o,l;return a;function a(b){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(b),u}function u(b){return b===33?(e.consume(b),c):b===47?(e.consume(b),P):b===63?(e.consume(b),g):Zt(b)?(e.consume(b),T):n(b)}function c(b){return b===45?(e.consume(b),d):b===91?(e.consume(b),o=0,y):Zt(b)?(e.consume(b),x):n(b)}function d(b){return b===45?(e.consume(b),h):n(b)}function p(b){return b===null?n(b):b===45?(e.consume(b),m):ee(b)?(l=p,V(b)):(e.consume(b),p)}function m(b){return b===45?(e.consume(b),h):p(b)}function h(b){return b===62?Y(b):b===45?m(b):p(b)}function y(b){const Z="CDATA[";return b===Z.charCodeAt(o++)?(e.consume(b),o===Z.length?v:y):n(b)}function v(b){return b===null?n(b):b===93?(e.consume(b),$):ee(b)?(l=v,V(b)):(e.consume(b),v)}function $(b){return b===93?(e.consume(b),L):v(b)}function L(b){return b===62?Y(b):b===93?(e.consume(b),L):v(b)}function x(b){return b===null||b===62?Y(b):ee(b)?(l=x,V(b)):(e.consume(b),x)}function g(b){return b===null?n(b):b===63?(e.consume(b),k):ee(b)?(l=g,V(b)):(e.consume(b),g)}function k(b){return b===62?Y(b):g(b)}function P(b){return Zt(b)?(e.consume(b),S):n(b)}function S(b){return b===45||vt(b)?(e.consume(b),S):j(b)}function j(b){return ee(b)?(l=j,V(b)):fe(b)?(e.consume(b),j):Y(b)}function T(b){return b===45||vt(b)?(e.consume(b),T):b===47||b===62||pt(b)?z(b):n(b)}function z(b){return b===47?(e.consume(b),Y):b===58||b===95||Zt(b)?(e.consume(b),R):ee(b)?(l=z,V(b)):fe(b)?(e.consume(b),z):Y(b)}function R(b){return b===45||b===46||b===58||b===95||vt(b)?(e.consume(b),R):I(b)}function I(b){return b===61?(e.consume(b),E):ee(b)?(l=I,V(b)):fe(b)?(e.consume(b),I):z(b)}function E(b){return b===null||b===60||b===61||b===62||b===96?n(b):b===34||b===39?(e.consume(b),i=b,M):ee(b)?(l=E,V(b)):fe(b)?(e.consume(b),E):(e.consume(b),F)}function M(b){return b===i?(e.consume(b),i=void 0,A):b===null?n(b):ee(b)?(l=M,V(b)):(e.consume(b),M)}function F(b){return b===null||b===34||b===39||b===60||b===61||b===96?n(b):b===47||b===62||pt(b)?z(b):(e.consume(b),F)}function A(b){return b===47||b===62||pt(b)?z(b):n(b)}function Y(b){return b===62?(e.consume(b),e.exit("htmlTextData"),e.exit("htmlText"),t):n(b)}function V(b){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),N}function N(b){return fe(b)?ve(e,D,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(b):D(b)}function D(b){return e.enter("htmlTextData"),l(b)}}const C1={name:"labelEnd",resolveAll:cw,resolveTo:dw,tokenize:pw},sw={tokenize:fw},aw={tokenize:hw},uw={tokenize:mw};function cw(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&Jt(e,0,e.length,n),e}function dw(e,t){let n=e.length,r=0,i,o,l,a;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(l){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(l=n);const u={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},c={type:"label",start:{...e[o][1].start},end:{...e[l][1].end}},d={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[l-2][1].start}};return a=[["enter",u,t],["enter",c,t]],a=Pt(a,e.slice(o+1,o+r+3)),a=Pt(a,[["enter",d,t]]),a=Pt(a,S1(t.parser.constructs.insideSpan.null,e.slice(o+r+4,l-3),t)),a=Pt(a,[["exit",d,t],e[l-2],e[l-1],["exit",c,t]]),a=Pt(a,e.slice(l+1)),a=Pt(a,[["exit",u,t]]),Jt(e,o,e.length,a),e}function pw(e,t,n){const r=this;let i=r.events.length,o,l;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return a;function a(m){return o?o._inactive?p(m):(l=r.parser.defined.includes(Vr(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(m),e.exit("labelMarker"),e.exit("labelEnd"),u):n(m)}function u(m){return m===40?e.attempt(sw,d,l?d:p)(m):m===91?e.attempt(aw,d,l?c:p)(m):l?d(m):p(m)}function c(m){return e.attempt(uw,d,p)(m)}function d(m){return t(m)}function p(m){return o._balanced=!0,n(m)}}function fw(e,t,n){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),i}function i(p){return pt(p)?Hi(e,o)(p):o(p)}function o(p){return p===41?d(p):e3(e,l,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function l(p){return pt(p)?Hi(e,u)(p):d(p)}function a(p){return n(p)}function u(p){return p===34||p===39||p===40?n3(e,c,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):d(p)}function c(p){return pt(p)?Hi(e,d)(p):d(p)}function d(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),t):n(p)}}function hw(e,t,n){const r=this;return i;function i(a){return t3.call(r,e,o,l,"reference","referenceMarker","referenceString")(a)}function o(a){return r.parser.defined.includes(Vr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function l(a){return n(a)}}function mw(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const gw={name:"labelStartImage",resolveAll:C1.resolveAll,tokenize:Lw};function Lw(e,t,n){const r=this;return i;function i(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),o}function o(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),l):n(a)}function l(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const xw={name:"labelStartLink",resolveAll:C1.resolveAll,tokenize:yw};function yw(e,t,n){const r=this;return i;function i(l){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelLink"),o}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const ka={name:"lineEnding",tokenize:vw};function vw(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),ve(e,t,"linePrefix")}}const wl={name:"thematicBreak",tokenize:ww};function ww(e,t,n){let r=0,i;return o;function o(c){return e.enter("thematicBreak"),l(c)}function l(c){return i=c,a(c)}function a(c){return c===i?(e.enter("thematicBreakSequence"),u(c)):r>=3&&(c===null||ee(c))?(e.exit("thematicBreak"),t(c)):n(c)}function u(c){return c===i?(e.consume(c),r++,u):(e.exit("thematicBreakSequence"),fe(c)?ve(e,a,"whitespace")(c):a(c))}}const lt={continuation:{tokenize:Cw},exit:$w,name:"list",tokenize:Sw},bw={partial:!0,tokenize:Ew},kw={partial:!0,tokenize:jw};function Sw(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,l=0;return a;function a(h){const y=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(y==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:oc(h)){if(r.containerState.type||(r.containerState.type=y,e.enter(y,{_container:!0})),y==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(wl,n,c)(h):c(h);if(!r.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),u(h)}return n(h)}function u(h){return oc(h)&&++l<10?(e.consume(h),u):(!r.interrupt||l<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),c(h)):n(h)}function c(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,e.check(Ns,r.interrupt?n:d,e.attempt(bw,m,p))}function d(h){return r.containerState.initialBlankLine=!0,o++,m(h)}function p(h){return fe(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),m):n(h)}function m(h){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(h)}}function Cw(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Ns,i,o);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,ve(e,t,"listItemIndent",r.containerState.size+1)(a)}function o(a){return r.containerState.furtherBlankLines||!fe(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,l(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(kw,t,l)(a))}function l(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,ve(e,e.attempt(lt,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function jw(e,t,n){const r=this;return ve(e,i,"listItemIndent",r.containerState.size+1);function i(o){const l=r.events[r.events.length-1];return l&&l[1].type==="listItemIndent"&&l[2].sliceSerialize(l[1],!0).length===r.containerState.size?t(o):n(o)}}function $w(e){e.exit(this.containerState.type)}function Ew(e,t,n){const r=this;return ve(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const l=r.events[r.events.length-1];return!fe(o)&&l&&l[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const mp={name:"setextUnderline",resolveTo:Pw,tokenize:Tw};function Pw(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const l={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",l,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=l,e.push(["exit",l,t]),e}function Tw(e,t,n){const r=this;let i;return o;function o(c){let d=r.events.length,p;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){p=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),i=c,l(c)):n(c)}function l(c){return e.enter("setextHeadingLineSequence"),a(c)}function a(c){return c===i?(e.consume(c),a):(e.exit("setextHeadingLineSequence"),fe(c)?ve(e,u,"lineSuffix")(c):u(c))}function u(c){return c===null||ee(c)?(e.exit("setextHeadingLine"),t(c)):n(c)}}const Iw={tokenize:Rw};function Rw(e){const t=this,n=e.attempt(Ns,r,e.attempt(this.parser.constructs.flowInitial,i,ve(e,e.attempt(this.parser.constructs.flow,i,e.attempt(Av,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const zw={resolveAll:i3()},Mw=r3("string"),_w=r3("text");function r3(e){return{resolveAll:i3(e==="text"?Nw:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,l,a);return l;function l(d){return c(d)?o(d):a(d)}function a(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),u}function u(d){return c(d)?(n.exit("data"),o(d)):(n.consume(d),u)}function c(d){if(d===null)return!0;const p=i[d];let m=-1;if(p)for(;++m<p.length;){const h=p[m];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function i3(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function Nw(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,l=-1,a=0,u;for(;o--;){const c=i[o];if(typeof c=="string"){for(l=c.length;c.charCodeAt(l-1)===32;)a++,l--;if(l)break;l=-1}else if(c===-2)u=!0,a++;else if(c!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(a=0),a){const c={type:n===e.length||u||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?l:r.start._bufferIndex+l,_index:r.start._index+o,line:r.end.line,column:r.end.column-a,offset:r.end.offset-a},end:{...r.end}};r.end={...c.start},r.start.offset===r.end.offset?Object.assign(r,c):(e.splice(n,0,["enter",c,t],["exit",c,t]),n+=2)}n++}return e}const Aw={42:lt,43:lt,45:lt,48:lt,49:lt,50:lt,51:lt,52:lt,53:lt,54:lt,55:lt,56:lt,57:lt,62:Gh},Fw={91:Uv},Ow={[-2]:ba,[-1]:ba,32:ba},Dw={35:Yv,42:wl,45:[mp,wl],60:Xv,61:mp,95:wl,96:fp,126:fp},Bw={38:Xh,92:Qh},Uw={[-5]:ka,[-4]:ka,[-3]:ka,33:gw,38:Xh,42:lc,60:[xv,ow],91:xw,92:[Kv,Qh],93:C1,95:lc,96:Iv},Hw={null:[lc,zw]},Vw={null:[42,95]},Ww={null:[]},Kw=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Vw,contentInitial:Fw,disable:Ww,document:Aw,flow:Dw,flowInitial:Ow,insideSpan:Hw,string:Bw,text:Uw},Symbol.toStringTag,{value:"Module"}));function qw(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},o=[];let l=[],a=[];const u={attempt:j(P),check:j(S),consume:x,enter:g,exit:k,interrupt:j(S,{interrupt:!0})},c={code:null,containerState:{},defineSkip:v,events:[],now:y,parser:e,previous:null,sliceSerialize:m,sliceStream:h,write:p};let d=t.tokenize.call(c,u);return t.resolveAll&&o.push(t),c;function p(I){return l=Pt(l,I),$(),l[l.length-1]!==null?[]:(T(t,0),c.events=S1(o,c.events,c),c.events)}function m(I,E){return Zw(h(I),E)}function h(I){return Yw(l,I)}function y(){const{_bufferIndex:I,_index:E,line:M,column:F,offset:A}=r;return{_bufferIndex:I,_index:E,line:M,column:F,offset:A}}function v(I){i[I.line]=I.column,R()}function $(){let I;for(;r._index<l.length;){const E=l[r._index];if(typeof E=="string")for(I=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===I&&r._bufferIndex<E.length;)L(E.charCodeAt(r._bufferIndex));else L(E)}}function L(I){d=d(I)}function x(I){ee(I)?(r.line++,r.column=1,r.offset+=I===-3?2:1,R()):I!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===l[r._index].length&&(r._bufferIndex=-1,r._index++)),c.previous=I}function g(I,E){const M=E||{};return M.type=I,M.start=y(),c.events.push(["enter",M,c]),a.push(M),M}function k(I){const E=a.pop();return E.end=y(),c.events.push(["exit",E,c]),E}function P(I,E){T(I,E.from)}function S(I,E){E.restore()}function j(I,E){return M;function M(F,A,Y){let V,N,D,b;return Array.isArray(F)?q(F):"tokenize"in F?q([F]):Z(F);function Z(G){return H;function H(J){const re=J!==null&&G[J],Q=J!==null&&G.null,ge=[...Array.isArray(re)?re:re?[re]:[],...Array.isArray(Q)?Q:Q?[Q]:[]];return q(ge)(J)}}function q(G){return V=G,N=0,G.length===0?Y:C(G[N])}function C(G){return H;function H(J){return b=z(),D=G,G.partial||(c.currentConstruct=G),G.name&&c.parser.constructs.disable.null.includes(G.name)?ae():G.tokenize.call(E?Object.assign(Object.create(c),E):c,u,ne,ae)(J)}}function ne(G){return I(D,b),A}function ae(G){return b.restore(),++N<V.length?C(V[N]):Y}}}function T(I,E){I.resolveAll&&!o.includes(I)&&o.push(I),I.resolve&&Jt(c.events,E,c.events.length-E,I.resolve(c.events.slice(E),c)),I.resolveTo&&(c.events=I.resolveTo(c.events,c))}function z(){const I=y(),E=c.previous,M=c.currentConstruct,F=c.events.length,A=Array.from(a);return{from:F,restore:Y};function Y(){r=I,c.previous=E,c.currentConstruct=M,c.events.length=F,a=A,R()}}function R(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function Yw(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let l;if(n===i)l=[e[n].slice(r,o)];else{if(l=e.slice(n,i),r>-1){const a=l[0];typeof a=="string"?l[0]=a.slice(r):l.shift()}o>0&&l.push(e[i].slice(0,o))}return l}function Zw(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let l;if(typeof o=="string")l=o;else switch(o){case-5:{l="\r";break}case-4:{l=`
`;break}case-3:{l=`\r
`;break}case-2:{l=t?" ":"	";break}case-1:{if(!t&&i)continue;l=" ";break}default:l=String.fromCharCode(o)}i=o===-2,r.push(l)}return r.join("")}function Gw(e){const r={constructs:rv([Kw,...(e||{}).extensions||[]]),content:i(dv),defined:[],document:i(fv),flow:i(Iw),lazy:{},string:i(Mw),text:i(_w)};return r;function i(o){return l;function l(a){return qw(r,o,a)}}}function Qw(e){for(;!Jh(e););return e}const gp=/[\0\t\n\r]/g;function Xw(){let e=1,t="",n=!0,r;return i;function i(o,l,a){const u=[];let c,d,p,m,h;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(l||void 0).decode(o)),p=0,t="",n&&(o.charCodeAt(0)===65279&&p++,n=void 0);p<o.length;){if(gp.lastIndex=p,c=gp.exec(o),m=c&&c.index!==void 0?c.index:o.length,h=o.charCodeAt(m),!c){t=o.slice(p);break}if(h===10&&p===m&&r)u.push(-3),r=void 0;else switch(r&&(u.push(-5),r=void 0),p<m&&(u.push(o.slice(p,m)),e+=m-p),h){case 0:{u.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,u.push(-2);e++<d;)u.push(-1);break}case 10:{u.push(-4),e=1;break}default:r=!0,e=1}p=m+1}return a&&(r&&u.push(-5),t&&u.push(t),u.push(null)),u}}const Jw=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function eb(e){return e.replace(Jw,tb)}function tb(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return Zh(n.slice(o?2:1),o?16:10)}return k1(n)||e}const o3={}.hasOwnProperty;function nb(e,t,n){return t&&typeof t=="object"&&(n=t,t=void 0),rb(n)(Qw(Gw(n).document().write(Xw()(e,t,!0))))}function rb(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(je),autolinkProtocol:z,autolinkEmail:z,atxHeading:o(Ue),blockQuote:o(Q),characterEscape:z,characterReference:z,codeFenced:o(ge),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:o(ge,l),codeText:o(ue,l),codeTextData:z,data:z,codeFlowValue:z,definition:o(Ct),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:o(ze),hardBreakEscape:o(ht),hardBreakTrailing:o(ht),htmlFlow:o(X,l),htmlFlowData:z,htmlText:o(X,l),htmlTextData:z,image:o(Le),label:l,link:o(je),listItem:o(Kn),listItemValue:m,listOrdered:o(jt,p),listUnordered:o(jt),paragraph:o(pi),reference:C,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:o(Ue),strong:o(fi),thematicBreak:o(jo)},exit:{atxHeading:u(),atxHeadingSequence:P,autolink:u(),autolinkEmail:re,autolinkProtocol:J,blockQuote:u(),characterEscapeValue:R,characterReferenceMarkerHexadecimal:ae,characterReferenceMarkerNumeric:ae,characterReferenceValue:G,characterReference:H,codeFenced:u($),codeFencedFence:v,codeFencedFenceInfo:h,codeFencedFenceMeta:y,codeFlowValue:R,codeIndented:u(L),codeText:u(A),codeTextData:R,data:R,definition:u(),definitionDestinationString:k,definitionLabelString:x,definitionTitleString:g,emphasis:u(),hardBreakEscape:u(E),hardBreakTrailing:u(E),htmlFlow:u(M),htmlFlowData:R,htmlText:u(F),htmlTextData:R,image:u(V),label:D,labelText:N,lineEnding:I,link:u(Y),listItem:u(),listOrdered:u(),listUnordered:u(),paragraph:u(),referenceString:ne,resourceDestinationString:b,resourceTitleString:Z,resource:q,setextHeading:u(T),setextHeadingLineSequence:j,setextHeadingText:S,strong:u(),thematicBreak:u()}};l3(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(_){let U={type:"root",children:[]};const te={stack:[U],tokenStack:[],config:t,enter:a,exit:c,buffer:l,resume:d,data:n},le=[];let he=-1;for(;++he<_.length;)if(_[he][1].type==="listOrdered"||_[he][1].type==="listUnordered")if(_[he][0]==="enter")le.push(he);else{const mt=le.pop();he=i(_,mt,he)}for(he=-1;++he<_.length;){const mt=t[_[he][0]];o3.call(mt,_[he][1].type)&&mt[_[he][1].type].call(Object.assign({sliceSerialize:_[he][2].sliceSerialize},te),_[he][1])}if(te.tokenStack.length>0){const mt=te.tokenStack[te.tokenStack.length-1];(mt[1]||Lp).call(te,void 0,mt[0])}for(U.position={start:vn(_.length>0?_[0][1].start:{line:1,column:1,offset:0}),end:vn(_.length>0?_[_.length-2][1].end:{line:1,column:1,offset:0})},he=-1;++he<t.transforms.length;)U=t.transforms[he](U)||U;return U}function i(_,U,te){let le=U-1,he=-1,mt=!1,Vt,W,we,Ln;for(;++le<=te;){const tt=_[le];switch(tt[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{tt[0]==="enter"?he++:he--,Ln=void 0;break}case"lineEndingBlank":{tt[0]==="enter"&&(Vt&&!Ln&&!he&&!we&&(we=le),Ln=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Ln=void 0}if(!he&&tt[0]==="enter"&&tt[1].type==="listItemPrefix"||he===-1&&tt[0]==="exit"&&(tt[1].type==="listUnordered"||tt[1].type==="listOrdered")){if(Vt){let gr=le;for(W=void 0;gr--;){const tn=_[gr];if(tn[1].type==="lineEnding"||tn[1].type==="lineEndingBlank"){if(tn[0]==="exit")continue;W&&(_[W][1].type="lineEndingBlank",mt=!0),tn[1].type="lineEnding",W=gr}else if(!(tn[1].type==="linePrefix"||tn[1].type==="blockQuotePrefix"||tn[1].type==="blockQuotePrefixWhitespace"||tn[1].type==="blockQuoteMarker"||tn[1].type==="listItemIndent"))break}we&&(!W||we<W)&&(Vt._spread=!0),Vt.end=Object.assign({},W?_[W][1].start:tt[1].end),_.splice(W||le,0,["exit",Vt,tt[2]]),le++,te++}if(tt[1].type==="listItemPrefix"){const gr={type:"listItem",_spread:!1,start:Object.assign({},tt[1].start),end:void 0};Vt=gr,_.splice(le,0,["enter",gr,tt[2]]),le++,te++,we=void 0,Ln=!0}}}return _[U][1]._spread=mt,te}function o(_,U){return te;function te(le){a.call(this,_(le),le),U&&U.call(this,le)}}function l(){this.stack.push({type:"fragment",children:[]})}function a(_,U,te){this.stack[this.stack.length-1].children.push(_),this.stack.push(_),this.tokenStack.push([U,te||void 0]),_.position={start:vn(U.start),end:void 0}}function u(_){return U;function U(te){_&&_.call(this,te),c.call(this,te)}}function c(_,U){const te=this.stack.pop(),le=this.tokenStack.pop();if(le)le[0].type!==_.type&&(U?U.call(this,_,le[0]):(le[1]||Lp).call(this,_,le[0]));else throw new Error("Cannot close `"+_.type+"` ("+Ui({start:_.start,end:_.end})+"): it’s not open");te.position.end=vn(_.end)}function d(){return tv(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function m(_){if(this.data.expectingFirstListItemValue){const U=this.stack[this.stack.length-2];U.start=Number.parseInt(this.sliceSerialize(_),10),this.data.expectingFirstListItemValue=void 0}}function h(){const _=this.resume(),U=this.stack[this.stack.length-1];U.lang=_}function y(){const _=this.resume(),U=this.stack[this.stack.length-1];U.meta=_}function v(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function $(){const _=this.resume(),U=this.stack[this.stack.length-1];U.value=_.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function L(){const _=this.resume(),U=this.stack[this.stack.length-1];U.value=_.replace(/(\r?\n|\r)$/g,"")}function x(_){const U=this.resume(),te=this.stack[this.stack.length-1];te.label=U,te.identifier=Vr(this.sliceSerialize(_)).toLowerCase()}function g(){const _=this.resume(),U=this.stack[this.stack.length-1];U.title=_}function k(){const _=this.resume(),U=this.stack[this.stack.length-1];U.url=_}function P(_){const U=this.stack[this.stack.length-1];if(!U.depth){const te=this.sliceSerialize(_).length;U.depth=te}}function S(){this.data.setextHeadingSlurpLineEnding=!0}function j(_){const U=this.stack[this.stack.length-1];U.depth=this.sliceSerialize(_).codePointAt(0)===61?1:2}function T(){this.data.setextHeadingSlurpLineEnding=void 0}function z(_){const te=this.stack[this.stack.length-1].children;let le=te[te.length-1];(!le||le.type!=="text")&&(le=Co(),le.position={start:vn(_.start),end:void 0},te.push(le)),this.stack.push(le)}function R(_){const U=this.stack.pop();U.value+=this.sliceSerialize(_),U.position.end=vn(_.end)}function I(_){const U=this.stack[this.stack.length-1];if(this.data.atHardBreak){const te=U.children[U.children.length-1];te.position.end=vn(_.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(U.type)&&(z.call(this,_),R.call(this,_))}function E(){this.data.atHardBreak=!0}function M(){const _=this.resume(),U=this.stack[this.stack.length-1];U.value=_}function F(){const _=this.resume(),U=this.stack[this.stack.length-1];U.value=_}function A(){const _=this.resume(),U=this.stack[this.stack.length-1];U.value=_}function Y(){const _=this.stack[this.stack.length-1];if(this.data.inReference){const U=this.data.referenceType||"shortcut";_.type+="Reference",_.referenceType=U,delete _.url,delete _.title}else delete _.identifier,delete _.label;this.data.referenceType=void 0}function V(){const _=this.stack[this.stack.length-1];if(this.data.inReference){const U=this.data.referenceType||"shortcut";_.type+="Reference",_.referenceType=U,delete _.url,delete _.title}else delete _.identifier,delete _.label;this.data.referenceType=void 0}function N(_){const U=this.sliceSerialize(_),te=this.stack[this.stack.length-2];te.label=eb(U),te.identifier=Vr(U).toLowerCase()}function D(){const _=this.stack[this.stack.length-1],U=this.resume(),te=this.stack[this.stack.length-1];if(this.data.inReference=!0,te.type==="link"){const le=_.children;te.children=le}else te.alt=U}function b(){const _=this.resume(),U=this.stack[this.stack.length-1];U.url=_}function Z(){const _=this.resume(),U=this.stack[this.stack.length-1];U.title=_}function q(){this.data.inReference=void 0}function C(){this.data.referenceType="collapsed"}function ne(_){const U=this.resume(),te=this.stack[this.stack.length-1];te.label=U,te.identifier=Vr(this.sliceSerialize(_)).toLowerCase(),this.data.referenceType="full"}function ae(_){this.data.characterReferenceType=_.type}function G(_){const U=this.sliceSerialize(_),te=this.data.characterReferenceType;let le;te?(le=Zh(U,te==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):le=k1(U);const he=this.stack[this.stack.length-1];he.value+=le}function H(_){const U=this.stack.pop();U.position.end=vn(_.end)}function J(_){R.call(this,_);const U=this.stack[this.stack.length-1];U.url=this.sliceSerialize(_)}function re(_){R.call(this,_);const U=this.stack[this.stack.length-1];U.url="mailto:"+this.sliceSerialize(_)}function Q(){return{type:"blockquote",children:[]}}function ge(){return{type:"code",lang:null,meta:null,value:""}}function ue(){return{type:"inlineCode",value:""}}function Ct(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function ze(){return{type:"emphasis",children:[]}}function Ue(){return{type:"heading",depth:0,children:[]}}function ht(){return{type:"break"}}function X(){return{type:"html",value:""}}function Le(){return{type:"image",title:null,url:"",alt:null}}function je(){return{type:"link",title:null,url:"",children:[]}}function jt(_){return{type:"list",ordered:_.type==="listOrdered",start:null,spread:_._spread,children:[]}}function Kn(_){return{type:"listItem",spread:_._spread,checked:null,children:[]}}function pi(){return{type:"paragraph",children:[]}}function fi(){return{type:"strong",children:[]}}function Co(){return{type:"text",value:""}}function jo(){return{type:"thematicBreak"}}}function vn(e){return{line:e.line,column:e.column,offset:e.offset}}function l3(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?l3(e,r):ib(e,r)}}function ib(e,t){let n;for(n in t)if(o3.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function Lp(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Ui({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Ui({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Ui({start:t.start,end:t.end})+") is still open")}function ob(e){const t=this;t.parser=n;function n(r){return nb(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function lb(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function sb(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function ab(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function ub(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function cb(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function db(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=di(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let l,a=e.footnoteCounts.get(r);a===void 0?(a=0,e.footnoteOrder.push(r),l=e.footnoteOrder.length):l=o+1,a+=1,e.footnoteCounts.set(r,a);const u={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(l)}]};e.patch(t,u);const c={type:"element",tagName:"sup",properties:{},children:[u]};return e.patch(t,c),e.applyData(t,c)}function pb(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function fb(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function s3(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const l=i[i.length-1];return l&&l.type==="text"?l.value+=r:i.push({type:"text",value:r}),i}function hb(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return s3(e,t);const i={src:di(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function mb(e,t){const n={src:di(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function gb(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function Lb(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return s3(e,t);const i={href:di(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function xb(e,t){const n={href:di(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function yb(e,t,n){const r=e.all(t),i=n?vb(n):a3(t),o={},l=[];if(typeof t.checked=="boolean"){const d=r[0];let p;d&&d.type==="element"&&d.tagName==="p"?p=d:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const d=r[a];(i||a!==0||d.type!=="element"||d.tagName!=="p")&&l.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?l.push(...d.children):l.push(d)}const u=r[r.length-1];u&&(i||u.type!=="element"||u.tagName!=="p")&&l.push({type:"text",value:`
`});const c={type:"element",tagName:"li",properties:o,children:l};return e.patch(t,c),e.applyData(t,c)}function vb(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=a3(n[r])}return t}function a3(e){const t=e.spread;return t??e.children.length>1}function wb(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const l=r[i];if(l.type==="element"&&l.tagName==="li"&&l.properties&&Array.isArray(l.properties.className)&&l.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function bb(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function kb(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Sb(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Cb(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const l={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],l),i.push(l)}if(n.length>0){const l={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=y1(t.children[1]),u=Uh(t.children[t.children.length-1]);a&&u&&(l.position={start:a,end:u}),i.push(l)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function jb(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",l=n&&n.type==="table"?n.align:void 0,a=l?l.length:t.children.length;let u=-1;const c=[];for(;++u<a;){const p=t.children[u],m={},h=l?l[u]:void 0;h&&(m.align=h);let y={type:"element",tagName:o,properties:m,children:[]};p&&(y.children=e.all(p),e.patch(p,y),y=e.applyData(p,y)),c.push(y)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(c,!0)};return e.patch(t,d),e.applyData(t,d)}function $b(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const xp=9,yp=32;function Eb(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(vp(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(vp(t.slice(i),i>0,!1)),o.join("")}function vp(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===xp||o===yp;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===xp||o===yp;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function Pb(e,t){const n={type:"text",value:Eb(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function Tb(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const Ib={blockquote:lb,break:sb,code:ab,delete:ub,emphasis:cb,footnoteReference:db,heading:pb,html:fb,imageReference:hb,image:mb,inlineCode:gb,linkReference:Lb,link:xb,listItem:yb,list:wb,paragraph:bb,root:kb,strong:Sb,table:Cb,tableCell:$b,tableRow:jb,text:Pb,thematicBreak:Tb,toml:qo,yaml:qo,definition:qo,footnoteDefinition:qo};function qo(){}const u3=-1,As=0,Vi=1,os=2,j1=3,$1=4,E1=5,P1=6,c3=7,d3=8,wp=typeof self=="object"?self:globalThis,Rb=(e,t)=>{const n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,l]=t[i];switch(o){case As:case u3:return n(l,i);case Vi:{const a=n([],i);for(const u of l)a.push(r(u));return a}case os:{const a=n({},i);for(const[u,c]of l)a[r(u)]=r(c);return a}case j1:return n(new Date(l),i);case $1:{const{source:a,flags:u}=l;return n(new RegExp(a,u),i)}case E1:{const a=n(new Map,i);for(const[u,c]of l)a.set(r(u),r(c));return a}case P1:{const a=n(new Set,i);for(const u of l)a.add(r(u));return a}case c3:{const{name:a,message:u}=l;return n(new wp[a](u),i)}case d3:return n(BigInt(l),i);case"BigInt":return n(Object(BigInt(l)),i);case"ArrayBuffer":return n(new Uint8Array(l).buffer,l);case"DataView":{const{buffer:a}=new Uint8Array(l);return n(new DataView(a),l)}}return n(new wp[o](l),i)};return r},bp=e=>Rb(new Map,e)(0),vr="",{toString:zb}={},{keys:Mb}=Object,Si=e=>{const t=typeof e;if(t!=="object"||!e)return[As,t];const n=zb.call(e).slice(8,-1);switch(n){case"Array":return[Vi,vr];case"Object":return[os,vr];case"Date":return[j1,vr];case"RegExp":return[$1,vr];case"Map":return[E1,vr];case"Set":return[P1,vr];case"DataView":return[Vi,n]}return n.includes("Array")?[Vi,n]:n.includes("Error")?[c3,n]:[os,n]},Yo=([e,t])=>e===As&&(t==="function"||t==="symbol"),_b=(e,t,n,r)=>{const i=(l,a)=>{const u=r.push(l)-1;return n.set(a,u),u},o=l=>{if(n.has(l))return n.get(l);let[a,u]=Si(l);switch(a){case As:{let d=l;switch(u){case"bigint":a=d3,d=l.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+u);d=null;break;case"undefined":return i([u3],l)}return i([a,d],l)}case Vi:{if(u){let m=l;return u==="DataView"?m=new Uint8Array(l.buffer):u==="ArrayBuffer"&&(m=new Uint8Array(l)),i([u,[...m]],l)}const d=[],p=i([a,d],l);for(const m of l)d.push(o(m));return p}case os:{if(u)switch(u){case"BigInt":return i([u,l.toString()],l);case"Boolean":case"Number":case"String":return i([u,l.valueOf()],l)}if(t&&"toJSON"in l)return o(l.toJSON());const d=[],p=i([a,d],l);for(const m of Mb(l))(e||!Yo(Si(l[m])))&&d.push([o(m),o(l[m])]);return p}case j1:return i([a,l.toISOString()],l);case $1:{const{source:d,flags:p}=l;return i([a,{source:d,flags:p}],l)}case E1:{const d=[],p=i([a,d],l);for(const[m,h]of l)(e||!(Yo(Si(m))||Yo(Si(h))))&&d.push([o(m),o(h)]);return p}case P1:{const d=[],p=i([a,d],l);for(const m of l)(e||!Yo(Si(m)))&&d.push(o(m));return p}}const{message:c}=l;return i([a,{name:u,message:c}],l)};return o},kp=(e,{json:t,lossy:n}={})=>{const r=[];return _b(!(t||n),!!t,new Map,r)(e),r},ls=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?bp(kp(e,t)):structuredClone(e):(e,t)=>bp(kp(e,t));function Nb(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function Ab(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function Fb(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||Nb,r=e.options.footnoteBackLabel||Ab,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",l=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let u=-1;for(;++u<e.footnoteOrder.length;){const c=e.footnoteById.get(e.footnoteOrder[u]);if(!c)continue;const d=e.all(c),p=String(c.identifier).toUpperCase(),m=di(p.toLowerCase());let h=0;const y=[],v=e.footnoteCounts.get(p);for(;v!==void 0&&++h<=v;){y.length>0&&y.push({type:"text",value:" "});let x=typeof n=="string"?n:n(u,h);typeof x=="string"&&(x={type:"text",value:x}),y.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+m+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(u,h),className:["data-footnote-backref"]},children:Array.isArray(x)?x:[x]})}const $=d[d.length-1];if($&&$.type==="element"&&$.tagName==="p"){const x=$.children[$.children.length-1];x&&x.type==="text"?x.value+=" ":$.children.push({type:"text",value:" "}),$.children.push(...y)}else d.push(...y);const L={type:"element",tagName:"li",properties:{id:t+"fn-"+m},children:e.wrap(d,!0)};e.patch(c,L),a.push(L)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...ls(l),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const p3=function(e){if(e==null)return Ub;if(typeof e=="function")return Fs(e);if(typeof e=="object")return Array.isArray(e)?Ob(e):Db(e);if(typeof e=="string")return Bb(e);throw new Error("Expected function, string, or object as test")};function Ob(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=p3(e[n]);return Fs(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return!0;return!1}}function Db(e){const t=e;return Fs(n);function n(r){const i=r;let o;for(o in e)if(i[o]!==t[o])return!1;return!0}}function Bb(e){return Fs(t);function t(n){return n&&n.type===e}}function Fs(e){return t;function t(n,r,i){return!!(Hb(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function Ub(){return!0}function Hb(e){return e!==null&&typeof e=="object"&&"type"in e}const f3=[],Vb=!0,Sp=!1,Wb="skip";function Kb(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const o=p3(i),l=r?-1:1;a(e,void 0,[])();function a(u,c,d){const p=u&&typeof u=="object"?u:{};if(typeof p.type=="string"){const h=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(m,"name",{value:"node ("+(u.type+(h?"<"+h+">":""))+")"})}return m;function m(){let h=f3,y,v,$;if((!t||o(u,c,d[d.length-1]||void 0))&&(h=qb(n(u,d)),h[0]===Sp))return h;if("children"in u&&u.children){const L=u;if(L.children&&h[0]!==Wb)for(v=(r?L.children.length:-1)+l,$=d.concat(L);v>-1&&v<L.children.length;){const x=L.children[v];if(y=a(x,v,$)(),y[0]===Sp)return y;v=typeof y[1]=="number"?y[1]:v+l}}return h}}}function qb(e){return Array.isArray(e)?e:typeof e=="number"?[Vb,e]:e==null?f3:[e]}function h3(e,t,n,r){let i,o,l;typeof t=="function"&&typeof n!="function"?(o=void 0,l=t,i=n):(o=t,l=n,i=r),Kb(e,o,a,i);function a(u,c){const d=c[c.length-1],p=d?d.children.indexOf(u):void 0;return l(u,p,d)}}const sc={}.hasOwnProperty,Yb={};function Zb(e,t){const n=t||Yb,r=new Map,i=new Map,o=new Map,l={...Ib,...n.handlers},a={all:c,applyData:Qb,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:l,one:u,options:n,patch:Gb,wrap:Jb};return h3(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const p=d.type==="definition"?r:i,m=String(d.identifier).toUpperCase();p.has(m)||p.set(m,d)}}),a;function u(d,p){const m=d.type,h=a.handlers[m];if(sc.call(a.handlers,m)&&h)return h(a,d,p);if(a.options.passThrough&&a.options.passThrough.includes(m)){if("children"in d){const{children:v,...$}=d,L=ls($);return L.children=a.all(d),L}return ls(d)}return(a.options.unknownHandler||Xb)(a,d,p)}function c(d){const p=[];if("children"in d){const m=d.children;let h=-1;for(;++h<m.length;){const y=a.one(m[h],d);if(y){if(h&&m[h-1].type==="break"&&(!Array.isArray(y)&&y.type==="text"&&(y.value=Cp(y.value)),!Array.isArray(y)&&y.type==="element")){const v=y.children[0];v&&v.type==="text"&&(v.value=Cp(v.value))}Array.isArray(y)?p.push(...y):p.push(y)}}}return p}}function Gb(e,t){e.position&&(t.position=zy(e))}function Qb(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const l="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:l}}n.type==="element"&&o&&Object.assign(n.properties,ls(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function Xb(e,t){const n=t.data||{},r="value"in t&&!(sc.call(n,"hProperties")||sc.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Jb(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Cp(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function jp(e,t){const n=Zb(e,t),r=n.one(e,void 0),i=Fb(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function ek(e,t){return e&&"run"in e?async function(n,r){const i=jp(n,{file:r,...t});await e.run(i,r)}:function(n,r){return jp(n,{file:r,...e||t})}}function $p(e){if(e)throw e}var bl=Object.prototype.hasOwnProperty,m3=Object.prototype.toString,Ep=Object.defineProperty,Pp=Object.getOwnPropertyDescriptor,Tp=function(t){return typeof Array.isArray=="function"?Array.isArray(t):m3.call(t)==="[object Array]"},Ip=function(t){if(!t||m3.call(t)!=="[object Object]")return!1;var n=bl.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&bl.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||bl.call(t,i)},Rp=function(t,n){Ep&&n.name==="__proto__"?Ep(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},zp=function(t,n){if(n==="__proto__")if(bl.call(t,n)){if(Pp)return Pp(t,n).value}else return;return t[n]},tk=function e(){var t,n,r,i,o,l,a=arguments[0],u=1,c=arguments.length,d=!1;for(typeof a=="boolean"&&(d=a,a=arguments[1]||{},u=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});u<c;++u)if(t=arguments[u],t!=null)for(n in t)r=zp(a,n),i=zp(t,n),a!==i&&(d&&i&&(Ip(i)||(o=Tp(i)))?(o?(o=!1,l=r&&Tp(r)?r:[]):l=r&&Ip(r)?r:{},Rp(a,{name:n,newValue:e(d,l,i)})):typeof i<"u"&&Rp(a,{name:n,newValue:i}));return a};const Sa=ss(tk);function ac(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function nk(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const l=i.pop();if(typeof l!="function")throw new TypeError("Expected function as last argument, not "+l);a(null,...i);function a(u,...c){const d=e[++o];let p=-1;if(u){l(u);return}for(;++p<i.length;)(c[p]===null||c[p]===void 0)&&(c[p]=i[p]);i=c,d?rk(d,a)(...c):l(null,...c)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function rk(e,t){let n;return r;function r(...l){const a=e.length>l.length;let u;a&&l.push(i);try{u=e.apply(this,l)}catch(c){const d=c;if(a&&n)throw d;return i(d)}a||(u&&u.then&&typeof u.then=="function"?u.then(o,i):u instanceof Error?i(u):o(u))}function i(l,...a){n||(n=!0,t(l,...a))}function o(l){i(null,l)}}const qt={basename:ik,dirname:ok,extname:lk,join:sk,sep:"/"};function ik(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');So(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let l=-1,a=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else l<0&&(o=!0,l=i+1),a>-1&&(e.codePointAt(i)===t.codePointAt(a--)?a<0&&(r=i):(a=-1,r=l));return n===r?r=l:r<0&&(r=e.length),e.slice(n,r)}function ok(e){if(So(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function lk(e){So(e);let t=e.length,n=-1,r=0,i=-1,o=0,l;for(;t--;){const a=e.codePointAt(t);if(a===47){if(l){r=t+1;break}continue}n<0&&(l=!0,n=t+1),a===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function sk(...e){let t=-1,n;for(;++t<e.length;)So(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":ak(n)}function ak(e){So(e);const t=e.codePointAt(0)===47;let n=uk(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function uk(e,t){let n="",r=0,i=-1,o=0,l=-1,a,u;for(;++l<=e.length;){if(l<e.length)a=e.codePointAt(l);else{if(a===47)break;a=47}if(a===47){if(!(i===l-1||o===1))if(i!==l-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(u=n.lastIndexOf("/"),u!==n.length-1){u<0?(n="",r=0):(n=n.slice(0,u),r=n.length-1-n.lastIndexOf("/")),i=l,o=0;continue}}else if(n.length>0){n="",r=0,i=l,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,l):n=e.slice(i+1,l),r=l-i-1;i=l,o=0}else a===46&&o>-1?o++:o=-1}return n}function So(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const ck={cwd:dk};function dk(){return"/"}function uc(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function pk(e){if(typeof e=="string")e=new URL(e);else if(!uc(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return fk(e)}function fk(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const Ca=["history","path","basename","stem","extname","dirname"];class g3{constructor(t){let n;t?uc(t)?n={path:t}:typeof t=="string"||hk(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":ck.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Ca.length;){const o=Ca[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)Ca.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?qt.basename(this.path):void 0}set basename(t){$a(t,"basename"),ja(t,"basename"),this.path=qt.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?qt.dirname(this.path):void 0}set dirname(t){Mp(this.basename,"dirname"),this.path=qt.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?qt.extname(this.path):void 0}set extname(t){if(ja(t,"extname"),Mp(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=qt.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){uc(t)&&(t=pk(t)),$a(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?qt.basename(this.path,this.extname):void 0}set stem(t){$a(t,"stem"),ja(t,"stem"),this.path=qt.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new et(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function ja(e,t){if(e&&e.includes(qt.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+qt.sep+"`")}function $a(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Mp(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function hk(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const mk=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},gk={}.hasOwnProperty;class T1 extends mk{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=nk()}copy(){const t=new T1;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Sa(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Ta("data",this.frozen),this.namespace[t]=n,this):gk.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Ta("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Zo(t),r=this.parser||this.Parser;return Ea("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Ea("process",this.parser||this.Parser),Pa("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,l){const a=Zo(t),u=r.parse(a);r.run(u,a,function(d,p,m){if(d||!p||!m)return c(d);const h=p,y=r.stringify(h,m);yk(y)?m.value=y:m.result=y,c(d,m)});function c(d,p){d||!p?l(d):o?o(p):n(void 0,p)}}}processSync(t){let n=!1,r;return this.freeze(),Ea("processSync",this.parser||this.Parser),Pa("processSync",this.compiler||this.Compiler),this.process(t,i),Np("processSync","process",n),r;function i(o,l){n=!0,$p(o),r=l}}run(t,n,r){_p(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(l,a){const u=Zo(n);i.run(t,u,c);function c(d,p,m){const h=p||t;d?a(d):l?l(h):r(void 0,h,m)}}}runSync(t,n){let r=!1,i;return this.run(t,n,o),Np("runSync","run",r),i;function o(l,a){$p(l),i=a,r=!0}}stringify(t,n){this.freeze();const r=Zo(n),i=this.compiler||this.Compiler;return Pa("stringify",i),_p(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(Ta("use",this.frozen),t!=null)if(typeof t=="function")u(t,n);else if(typeof t=="object")Array.isArray(t)?a(t):l(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(c){if(typeof c=="function")u(c,[]);else if(typeof c=="object")if(Array.isArray(c)){const[d,...p]=c;u(d,p)}else l(c);else throw new TypeError("Expected usable value, not `"+c+"`")}function l(c){if(!("plugins"in c)&&!("settings"in c))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(c.plugins),c.settings&&(i.settings=Sa(!0,i.settings,c.settings))}function a(c){let d=-1;if(c!=null)if(Array.isArray(c))for(;++d<c.length;){const p=c[d];o(p)}else throw new TypeError("Expected a list of plugins, not `"+c+"`")}function u(c,d){let p=-1,m=-1;for(;++p<r.length;)if(r[p][0]===c){m=p;break}if(m===-1)r.push([c,...d]);else if(d.length>0){let[h,...y]=d;const v=r[m][1];ac(v)&&ac(h)&&(h=Sa(!0,v,h)),r[m]=[c,h,...y]}}}}const Lk=new T1().freeze();function Ea(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Pa(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Ta(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function _p(e){if(!ac(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Np(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Zo(e){return xk(e)?e:new g3(e)}function xk(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function yk(e){return typeof e=="string"||vk(e)}function vk(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const wk="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Ap=[],Fp={allowDangerousHtml:!0},bk=/^(https?|ircs?|mailto|xmpp)$/i,kk=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function L3(e){const t=Sk(e),n=Ck(e);return jk(t.runSync(t.parse(n),n),e)}function Sk(e){const t=e.rehypePlugins||Ap,n=e.remarkPlugins||Ap,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Fp}:Fp;return Lk().use(ob).use(n).use(ek,r).use(t)}function Ck(e){const t=e.children||"",n=new g3;return typeof t=="string"&&(n.value=t),n}function jk(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,o=t.disallowedElements,l=t.skipHtml,a=t.unwrapDisallowed,u=t.urlTransform||$k;for(const d of kk)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+wk+d.id,void 0);return h3(e,c),Fy(e,{Fragment:s.Fragment,components:i,ignoreInvalidStyle:!0,jsx:s.jsx,jsxs:s.jsxs,passKeys:!0,passNode:!0});function c(d,p,m){if(d.type==="raw"&&m&&typeof p=="number")return l?m.children.splice(p,1):m.children[p]={type:"text",value:d.value},p;if(d.type==="element"){let h;for(h in wa)if(Object.hasOwn(wa,h)&&Object.hasOwn(d.properties,h)){const y=d.properties[h],v=wa[h];(v===null||v.includes(d.tagName))&&(d.properties[h]=u(String(y||""),h,d))}}if(d.type==="element"){let h=n?!n.includes(d.tagName):o?o.includes(d.tagName):!1;if(!h&&r&&typeof p=="number"&&(h=!r(d,p,m)),h&&m&&typeof p=="number")return a&&d.children?m.children.splice(p,1,...d.children):m.children.splice(p,1),p}}}function $k(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||bk.test(e.slice(0,t))?e:""}const x3=Be`
  from { opacity: 0; }
  to { opacity: 1; }
`,Ek=Be`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`,Pk=f.div`
  position: fixed;
  inset: 0;
  z-index: 300;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  animation: ${x3} 0.2s ease both;

  @media (min-width: 600px) {
    justify-content: center;
    align-items: center;
    padding: 24px;
  }
`,Tk=f.div`
  background: ${({theme:e})=>e.colors.white};
  border-radius: 20px 20px 0 0;
  max-height: min(94dvh, 920px);
  height: min(94dvh, 920px);
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${Ek} 0.32s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (min-width: 600px) {
    border-radius: ${({theme:e})=>e.radii.lg};
    max-width: 440px;
    height: min(88dvh, 780px);
  }
`,Ik=f.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  padding-top: calc(12px + env(safe-area-inset-top, 0px));
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary100};
`,Rk=f.span`
  font-size: 1rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
`,zk=f.button`
  width: 40px;
  height: 40px;
  border: none;
  background: ${({theme:e})=>e.colors.bg100};
  border-radius: ${({theme:e})=>e.radii.pill};
  cursor: pointer;
  display: grid;
  place-items: center;
  color: ${({theme:e})=>e.colors.text900};
`,Mk=f.div`
  flex-shrink: 0;
  position: relative;
  height: 42vmin;
  min-height: 200px;
  max-height: 280px;
  background: ${({theme:e})=>e.colors.bg100};
`,_k=f.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  touch-action: pan-y pinch-zoom;
`,Nk=f.div`
  display: flex;
  height: 100%;
  will-change: transform;
`,Ak=f.div`
  flex-shrink: 0;
  height: 100%;
`,Fk=f.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none;
  user-select: none;
`,Op=f.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  user-select: none;
`,Dp=f.button`
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
`,Ok=f.div`
  position: fixed;
  inset: 0;
  z-index: 400;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  flex-direction: column;
  animation: ${x3} 0.2s ease both;
`,Dk=f.div`
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 12px;
  padding-top: calc(8px + env(safe-area-inset-top, 0px));
`,Bk=f.button`
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
`,Uk=f.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10px 28px;
  padding-bottom: calc(28px + env(safe-area-inset-bottom, 0px));
`,Bp=f.div`
  height: 100%;
  width: 100%;
  will-change: transform;
  transition: ${({$snap:e})=>e?"transform 0.28s cubic-bezier(0.22, 1, 0.36, 1)":"none"};
`,Up=f.div`
  position: relative;
  width: 100%;
  max-width: min(96vw, 720px);
  height: min(85dvh, 900px);
  max-height: min(85dvh, 900px);
  overflow: hidden;
  touch-action: none;
  background: transparent;
  border-radius: ${({theme:e})=>e.radii.md};
`,Hk=f.div`
  display: flex;
  height: 100%;
  will-change: transform;
`,Vk=f.div`
  flex-shrink: 0;
  height: 100%;
`,Wk=f.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  background: transparent;
  display: block;
  pointer-events: none;
  user-select: none;
`,Hp=f.img`
  width: 100%;
  height: 100%;
  max-height: min(85dvh, 900px);
  object-fit: contain;
  object-position: center;
  background: transparent;
  display: block;
  user-select: none;
`,Kk=f.div`
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
`,qk=f.div`
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
`,y3=f.button`
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
`,Yk=f.div`
  flex-shrink: 0;
  display: flex;
  gap: 8px;
  padding: 12px 16px;
  background: ${({theme:e})=>e.colors.warmCream};
`,Vp=f.button`
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
`,Zk=f.div`
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
`,Gk=f.button`
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
`,Qk=f.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 18px 16px 28px;
`,Xk=f.h3`
  margin: 0 0 12px;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.25;
`,Jk=f.div`
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
`,eS=f.section`
  margin-top: 8px;
`,Wp=f.h4`
  margin: 0 0 12px;
  font-size: 1rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
`,Kp=f.div`
  padding: 14px;
  border-radius: ${({theme:e})=>e.radii.md};
  background: ${({theme:e})=>e.colors.warmCream};
  margin-bottom: 10px;
`,qp=f.p`
  margin: 0 0 6px;
  font-size: 0.88rem;
  font-weight: 600;
`,Yp=f.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.55;
  color: ${({theme:e})=>e.colors.text700};
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Zp=f.button`
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
`,tS=f.section`
  margin-top: 28px;
  padding-top: 22px;
  border-top: 1px solid ${({theme:e})=>e.colors.primary100};
`,nS=f.h4`
  margin: 0 0 14px;
  font-size: 1.05rem;
  font-weight: 700;
`,rS=f.article`
  margin-bottom: 20px;
`,iS=f.div`
  display: flex;
  gap: 14px;
  align-items: flex-start;
  margin-bottom: 10px;
`,oS=f.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`,lS=f.div`
  font-weight: 700;
  font-size: 1.05rem;
  margin-bottom: 6px;
`,sS=f.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.55;
  color: ${({theme:e})=>e.colors.text700};
`,Ia=f.p`
  margin: 0;
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.text700};
`;function I1(e,t){const n=e.join("\0"),[r,i]=w.useState(1),[o,l]=w.useState(!1),[a,u]=w.useState(0),[c,d]=w.useState(0),p=w.useRef(null),m=w.useRef(null),h=w.useRef(1),y=w.useRef(null),v=w.useRef(0),$=w.useRef(0),L=w.useRef(null),x=w.useCallback(()=>{y.current=null,v.current=0,$.current=0,d(0)},[]);w.useEffect(()=>{if(L.current===null){L.current=n;return}L.current!==n&&(L.current=n,i(1),l(!1),u(0),x())},[n,x]),w.useLayoutEffect(()=>{if(!t||e.length<=1){u(0);return}const F=p.current;if(!F)return;const A=()=>{const V=F.getBoundingClientRect().width;V>0&&u(V)};A();const Y=new ResizeObserver(A);return Y.observe(F),()=>Y.disconnect()},[t,e.length,n]);const g=w.useMemo(()=>{const F=e.length;return F<=1?e:[e[F-1],...e,e[0]]},[e]),k=g.length,P=w.useMemo(()=>{const F=e.length;return F<=1?0:r===0?F-1:r===F+1?0:r-1},[e.length,r]),S=w.useCallback(F=>{e.length<=1||(y.current=F.touches[0].clientX,v.current=0,$.current=0,d(0))},[e.length]),j=w.useCallback(F=>{var Z;if(y.current==null||e.length<=1)return;const A=((Z=p.current)==null?void 0:Z.offsetWidth)??320,Y=e.length;let V=F.touches[0].clientX-y.current;const N=A*.45;V=Math.max(-N,Math.min(N,V)),$.current=V;const D=h.current;let b=V;D===1&&V>0&&(b=0),D===Y&&V<0&&(b=0),v.current=b,d(b)},[e.length]),T=w.useCallback(()=>{var N;if(y.current==null||e.length<=1){x();return}const F=((N=p.current)==null?void 0:N.offsetWidth)??320,A=Math.min(48,F*.14),Y=$.current,V=e.length;i(D=>Y>A?D===0?V-1:D===1?0:D-1:Y<-A?D===V+1?2:D===V?V+1:D+1:D),x()},[e.length,x]),z=w.useCallback(F=>{if(!F.propertyName.toLowerCase().includes("transform")||F.target!==F.currentTarget)return;const A=e.length;if(A<=1)return;const Y=h.current;Y===A+1?(l(!0),i(1)):Y===0&&(l(!0),i(A))},[e.length]);w.useLayoutEffect(()=>{if(!o)return;const F=m.current;F&&F.offsetWidth;let A=null;const Y=requestAnimationFrame(()=>{A=requestAnimationFrame(()=>{l(!1)})});return()=>{cancelAnimationFrame(Y),A!=null&&cancelAnimationFrame(A)}},[r,o]),w.useEffect(()=>{x()},[n,x]),h.current=r;const R=e.length>1&&a>0,I=R?k*a:void 0,E=R?-(r*a)+c:0,M=w.useCallback(F=>{l(!1),i(F),x()},[x]);return{loopIndex:r,setLoopIndex:i,activeDot:P,loopUrls:g,slideCount:k,usePx:R,trackWidthPx:I,translatePx:E,transOff:o,dragPx:c,viewportRef:p,trackRef:m,onTouchStart:S,onTouchMove:j,onTouchEnd:T,onTouchCancel:x,onTransitionEnd:z,vpWidth:a,syncToLoopIndex:M}}const Go=14,aS=115,uS=360;function Gp(e){const t=Math.sign(e),n=Math.abs(e);return t*Math.min(n*.88,uS)}function v3({urls:e,initialLoopIndex:t,onClose:n,lockBodyScroll:r=!0}){const i=e.length>1,o=I1(e,i),{syncToLoopIndex:l,viewportRef:a,trackRef:u,onTouchStart:c,onTouchMove:d,onTouchEnd:p,onTouchCancel:m,onTransitionEnd:h,usePx:y,trackWidthPx:v,translatePx:$,transOff:L,dragPx:x,loopUrls:g,vpWidth:k,setLoopIndex:P,activeDot:S}=o,[j,T]=w.useState(0),[z,R]=w.useState(!1),I=w.useRef(0),E=w.useRef(null),M=w.useRef("n"),F=w.useRef(null),A=w.useRef(!1),Y=w.useCallback(H=>{var J;if((J=F.current)==null||J.call(F),F.current=null,a.current=H,H){const re=Q=>{M.current==="v"&&Q.preventDefault()};H.addEventListener("touchmove",re,{passive:!1}),F.current=()=>H.removeEventListener("touchmove",re)}},[a]);w.useEffect(()=>{if(!r)return;const H=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=H}},[r]),w.useLayoutEffect(()=>{e.length<=1||l(t)},[e.length,t,l]),w.useEffect(()=>{I.current=0,T(0),M.current="n",E.current=null,A.current=!1},[e.join("\0")]),w.useEffect(()=>{const H=J=>{J.key==="Escape"&&n()};return window.addEventListener("keydown",H),()=>window.removeEventListener("keydown",H)},[n]),w.useEffect(()=>()=>{var H;(H=F.current)==null||H.call(F),F.current=null},[]);const V=w.useCallback(H=>{H.target===H.currentTarget&&n()},[n]),N=w.useCallback(()=>{if(Math.abs(I.current)>=aS){I.current=0,T(0),n();return}R(!0),I.current=0,T(0),window.setTimeout(()=>R(!1),320)},[n]),D=w.useCallback(H=>{H.touches.length===1&&(R(!1),E.current={x:H.touches[0].clientX,y:H.touches[0].clientY},M.current="n")},[]),b=w.useCallback(H=>{if(!E.current||H.touches.length!==1)return;const J=H.touches[0].clientX,re=H.touches[0].clientY,Q=J-E.current.x,ge=re-E.current.y;if(M.current==="n"){if(Math.abs(Q)<Go&&Math.abs(ge)<Go)return;Math.abs(ge)>=Math.abs(Q)?M.current="v":(M.current="h",e.length>1&&c(H))}if(M.current==="v"){const ue=Gp(ge);I.current=ue,T(ue);return}M.current==="h"&&e.length>1&&d(H)},[e.length,d,c]),Z=w.useCallback(()=>{M.current==="v"?N():M.current==="h"&&e.length>1&&p(),E.current=null,M.current="n"},[N,p,e.length]),q=w.useCallback(()=>{M.current==="v"?N():M.current==="h"&&e.length>1&&m(),E.current=null,M.current="n"},[N,m,e.length]),C=w.useCallback(H=>{H.button===0&&(A.current=!0,R(!1),E.current={x:H.clientX,y:H.clientY},M.current="n")},[]),ne=w.useCallback(H=>{if(!A.current||!E.current)return;const J=H.clientX-E.current.x,re=H.clientY-E.current.y;if(M.current==="n"){if(Math.abs(J)<Go&&Math.abs(re)<Go)return;if(Math.abs(re)>=Math.abs(J))M.current="v";else{M.current="h",A.current=!1,E.current=null;return}}if(M.current==="v"){const Q=Gp(re);I.current=Q,T(Q)}},[]),ae=w.useCallback(()=>{A.current&&(A.current=!1,M.current==="v"&&N(),E.current=null,M.current="n")},[N]);if(e.length===0)return null;const G={ref:Y,onTouchStart:D,onTouchMove:b,onTouchEnd:Z,onTouchCancel:q,onMouseDown:C,onMouseMove:ne,onMouseUp:ae,onMouseLeave:ae};return s.jsxs(Ok,{role:"dialog","aria-modal":"true","aria-label":"프로그램 사진 크게 보기",onClick:V,children:[s.jsx(Dk,{onClick:H=>H.stopPropagation(),children:s.jsx(Bk,{type:"button",onClick:n,"aria-label":"닫기",children:s.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})}),s.jsx(Uk,{onClick:H=>H.stopPropagation(),children:e.length<=1?s.jsx(Up,{...G,children:s.jsx(Bp,{$snap:z,style:{transform:`translate3d(0, ${j}px, 0)`},children:s.jsx(Hp,{src:e[0],alt:"",draggable:!1})})}):s.jsxs(s.Fragment,{children:[s.jsx(Up,{...G,children:s.jsx(Bp,{$snap:z,style:{transform:`translate3d(0, ${j}px, 0)`},children:y?s.jsx(Hk,{ref:u,onTransitionEnd:h,style:{width:v,height:"100%",transform:`translate3d(${$}px, 0, 0)`,transition:x!==0||L?"none":"transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)"},children:g.map((H,J)=>s.jsx(Vk,{style:{width:k,flexShrink:0},children:s.jsx(Wk,{src:H,alt:"",draggable:!1})},`viewer-loop-${J}`))}):s.jsx(Hp,{src:e[0],alt:"",draggable:!1})})}),s.jsx(qk,{children:e.map((H,J)=>s.jsx(y3,{type:"button","aria-label":`${J+1}번째 사진으로 이동`,"aria-current":J===S?"true":void 0,$active:J===S,onClick:()=>P(J+1)},J))})]})})]})}const cS=({place:e,open:t,onClose:n,initialProgramId:r})=>{var R,I;const i=e.programs??[],o=w.useMemo(()=>i.filter(E=>E.status==="ongoing"),[i]),l=w.useMemo(()=>i.filter(E=>E.status==="past"),[i]),[a,u]=w.useState("ongoing"),[c,d]=w.useState(null),[p,m]=w.useState(!1),[h,y]=w.useState(null),v=a==="ongoing"?o:l;w.useEffect(()=>{var F,A;if(!t)return;const E=(F=o[0])==null?void 0:F.id,M=(A=l[0])==null?void 0:A.id;if(r&&i.some(Y=>Y.id===r)){const Y=i.find(V=>V.id===r);u(Y.status==="ongoing"?"ongoing":"past"),d(r)}else E?(u("ongoing"),d(E)):M?(u("past"),d(M)):d(null)},[t,r,o,l,i]);const $=i.find(E=>E.id===c)??null,L=w.useMemo(()=>{var F;if(!$)return[];const E=(F=$.imageUrls)!=null&&F.length?$.imageUrls:[],M=[$.imageUrl,...E.filter(A=>A!==$.imageUrl)];return Array.from(new Set(M))},[$]),x=t&&!!$&&L.length>1,g=I1(L,x);w.useEffect(()=>{t&&g.syncToLoopIndex(1)},[t,g.syncToLoopIndex]),w.useEffect(()=>{y(null)},[c]),w.useEffect(()=>{t||m(!1)},[t]),w.useEffect(()=>{if(!t)return;const E=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=E}},[t]),w.useEffect(()=>{t||y(null)},[t]),w.useEffect(()=>{if(!t)return;const E=M=>{if(M.key==="Escape"){if(p){M.preventDefault(),m(!1);return}n()}};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[t,n,p]);const k=w.useCallback(E=>{E.target===E.currentTarget&&n()},[n]),P=e.venueKind==="명상센터"&&(((R=e.instructors)==null?void 0:R.length)??0)>0,S=o.length>0&&l.length>0,j=P&&(((I=e.instructors)==null?void 0:I.some(E=>E.reviews.length>0))??!1),T=w.useCallback(()=>{L.length!==0&&m(!0)},[L.length]);if(!t||i.length===0)return null;const z=e.venueKind==="명상센터"?"명상센터":"명상지";return s.jsxs(s.Fragment,{children:[s.jsx(Pk,{role:"presentation",onClick:k,children:s.jsxs(Tk,{role:"dialog","aria-modal":"true","aria-labelledby":"place-programs-modal-title",onClick:E=>E.stopPropagation(),children:[s.jsxs(Ik,{children:[s.jsxs(Rk,{id:"place-programs-modal-title",children:["프로그램 · 후기 ",s.jsxs("span",{style:{opacity:.75},children:["(",z,")"]})]}),s.jsx(zk,{type:"button",onClick:n,"aria-label":"닫기",children:s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),$&&s.jsxs(s.Fragment,{children:[s.jsx(Mk,{children:L.length<=1?s.jsx(Dp,{type:"button",$clickable:L.length>0,onClick:T,"aria-label":"사진 크게 보기",children:s.jsx(Op,{src:L[0]??$.imageUrl,alt:"",draggable:!1})}):s.jsxs(s.Fragment,{children:[s.jsx(Dp,{type:"button",$clickable:!0,onClick:T,"aria-label":"사진 크게 보기",children:s.jsx(_k,{ref:g.viewportRef,onTouchStart:g.onTouchStart,onTouchMove:g.onTouchMove,onTouchEnd:g.onTouchEnd,onTouchCancel:g.onTouchCancel,children:g.usePx?s.jsx(Nk,{ref:g.trackRef,onTransitionEnd:g.onTransitionEnd,style:{width:g.trackWidthPx,transform:`translate3d(${g.translatePx}px, 0, 0)`,transition:g.dragPx!==0||g.transOff?"none":"transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)"},children:g.loopUrls.map((E,M)=>s.jsx(Ak,{style:{width:g.vpWidth,flexShrink:0},children:s.jsx(Fk,{src:E,alt:"",draggable:!1})},`hero-loop-${M}`))}):s.jsx(Op,{src:L[0],alt:"",draggable:!1})})}),s.jsx(Kk,{children:L.map((E,M)=>s.jsx(y3,{type:"button","aria-label":`${M+1}번째 사진으로 이동`,"aria-current":M===g.activeDot?"true":void 0,$active:M===g.activeDot,onClick:()=>g.setLoopIndex(M+1)},M))})]})}),S?s.jsxs(Yk,{children:[s.jsxs(Vp,{type:"button",$active:a==="ongoing",onClick:()=>{var M;u("ongoing");const E=(M=o[0])==null?void 0:M.id;d(E??null)},disabled:o.length===0,style:{opacity:o.length===0?.45:1},children:["진행 중 ",o.length>0?`(${o.length})`:""]}),s.jsxs(Vp,{type:"button",$active:a==="past",onClick:()=>{var M;u("past");const E=(M=l[0])==null?void 0:M.id;d(E??null)},disabled:l.length===0,style:{opacity:l.length===0?.45:1},children:["지난 프로그램 ",l.length>0?`(${l.length})`:""]})]}):null,s.jsxs(Zk,{children:[v.length===0&&s.jsx(Ia,{children:"이 구간에 등록된 프로그램이 없어요."}),v.map(E=>s.jsx(Gk,{type:"button",$active:E.id===c,onClick:()=>d(E.id),"aria-label":E.title,children:s.jsx("img",{src:E.imageUrl,alt:"",draggable:!1})},E.id))]}),s.jsxs(Qk,{children:[s.jsx(Xk,{children:$.title}),s.jsx(Jk,{children:s.jsx(L3,{children:$.bodyFromVenue})}),$.reviews.length>0&&s.jsxs(eS,{children:[s.jsx(Wp,{children:"프로그램 후기"}),$.reviews.slice(0,2).map((E,M)=>s.jsxs(Kp,{children:[s.jsxs(qp,{children:[E.author,E.rating!=null?` · ${is(E.rating)}`:""]}),s.jsx(Yp,{children:E.body})]},`${E.author}-${M}`)),$.reviews.length>2&&s.jsxs(Ia,{style:{marginBottom:10,fontSize:"0.88rem"},children:["외 ",$.reviews.length-2,"건의 후기가 더 있어요."]}),s.jsxs(Zp,{type:"button",onClick:()=>y({heading:"프로그램 후기",reviews:$.reviews}),children:["전체 후기 보기 · ",$.reviews.length,"건"]})]}),P&&s.jsxs(tS,{children:[s.jsx(nS,{children:j?"강사 소개 · 강사 후기":"강사 소개"}),e.instructors.map(E=>s.jsxs(rS,{children:[s.jsxs(iS,{children:[s.jsx(oS,{src:E.photoUrl,alt:""}),s.jsxs("div",{children:[s.jsx(lS,{children:E.name}),s.jsx(sS,{children:E.intro})]})]}),E.reviews.length>0&&s.jsxs(s.Fragment,{children:[s.jsx(Wp,{style:{fontSize:"0.95rem",marginBottom:8},children:"강사 후기"}),E.reviews.slice(0,2).map((M,F)=>s.jsxs(Kp,{children:[s.jsxs(qp,{children:[M.author,M.rating!=null?` · ${is(M.rating)}`:""]}),s.jsx(Yp,{children:M.body})]},`${E.id}-ir-${F}`)),E.reviews.length>2&&s.jsxs(Ia,{style:{marginBottom:10,fontSize:"0.88rem"},children:["외 ",E.reviews.length-2,"건의 후기가 더 있어요."]}),s.jsxs(Zp,{type:"button",onClick:()=>y({heading:`강사 후기 · ${E.name}`,reviews:E.reviews}),children:["강사 후기 전체 보기 · ",E.reviews.length,"건"]})]})]},E.id))]})]})]})]})}),s.jsx(Mh,{open:h!=null,onClose:()=>y(null),heading:h==null?void 0:h.heading,reviews:(h==null?void 0:h.reviews)??[]}),p&&$&&L.length>0&&s.jsx(v3,{urls:L,initialLoopIndex:g.loopIndex,onClose:()=>m(!1),lockBodyScroll:!1})]})};function dS(e){const t=[],n=new Set,r=i=>{const o=i==null?void 0:i.trim();!o||n.has(o)||(n.add(o),t.push(o))};r(e.thumbnailUrl);for(const i of e.programs??[])if(i.status==="ongoing"){r(i.imageUrl);for(const o of i.imageUrls??[])r(o)}return t}const Qp=f.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0 calc(28px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};
`,Xp=f.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  padding-top: calc(16px + env(safe-area-inset-top, 0px));
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.95);
  z-index: 10;
`,Jp=f.button`
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
`,ef=f.h1`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
`,pS=f.button`
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
`,fS=f.div`
  position: relative;
  width: 100%;
  height: 280px;
  background: ${({theme:e})=>e.colors.bg100};
`,hS=f.button`
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
`,mS=f.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  touch-action: pan-y pinch-zoom;
`,gS=f.div`
  display: flex;
  height: 100%;
  will-change: transform;
`,LS=f.div`
  flex-shrink: 0;
  height: 100%;
`,tf=f.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none;
  user-select: none;
`,xS=f.div`
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
`,yS=f.button`
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
`,vS=f.div`
  padding: 24px 20px;
`,wS=f.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
`,bS=f.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  color: ${({theme:e})=>e.colors.text900};
  flex: 1;
  min-width: 0;
`,kS=f.div`
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
`,SS=f.p`
  font-size: 1.05rem;
  line-height: 1.6;
  color: ${({theme:e})=>e.colors.text700};
  margin: 0 0 24px;
`,CS=f.section`
  margin: 0 0 28px;
`,jS=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 12px;
`,$S=f.h3`
  margin: 0;
  font-size: 1.15rem;
  font-weight: 700;
`,ES=f.div`
  min-width: 0;
`,PS=f.p`
  margin: 6px 0 0;
  font-size: 0.88rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text700};
`,TS=f.button`
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
`,IS=f.span`
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary100};
  color: ${({theme:e})=>e.colors.primary700};
`,RS=f.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 4px 0 12px;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    height: 4px;
  }
`,zS=f.button`
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
`,MS=f.span`
  display: block;
  padding: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  text-align: left;
  line-height: 1.35;
  color: ${({theme:e})=>e.colors.text900};
  background: ${({theme:e})=>e.colors.white};
`,_S=f.div``,nf=f.div`
  border-bottom: 1px solid ${({theme:e})=>e.colors.border200};

  &:last-child {
    border-bottom: none;
  }
`,rf=f.button`
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
`,of=f.div`
  display: grid;
  grid-template-rows: ${({$open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.3s ease;
  overflow: hidden;
`,lf=f.div`
  overflow: hidden;
`,sf=f.div`
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
`,NS=f.section`
  margin-top: 28px;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 16px;
    font-weight: 600;
  }
`,AS=f.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`,FS=f.div`
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
`,OS=f.section`
  margin-top: 32px;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 12px;
  }
`,DS=f.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  flex-wrap: wrap;
`,BS=f.button`
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
`,US=f.span`
  flex: 1;
  min-width: 0;
`,HS=f.a`
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
`,VS=f.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  pointer-events: none;
`,WS=f.div`
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
`,KS=f.div`
  width: 100%;
  min-height: 240px;
  height: 240px;
  border-radius: ${({theme:e})=>e.radii.lg};
  background: ${({theme:e})=>e.colors.bg100};
  overflow: hidden;
  position: relative;
`,qS=f.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  text-align: center;
  background: linear-gradient(180deg, ${({theme:e})=>e.colors.primary50} 0%, ${({theme:e})=>e.colors.warmCream} 100%);
`,YS=f.div`
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
`,ZS=f.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.primary400};
  margin: 0 0 24px;
  line-height: 1.6;
`,GS=f.button`
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
`,QS={wifi:"Wi-Fi",parking:"Parking",tea:"Tea"},XS=["wifi","parking","tea"],JS=()=>{const e=en(),{placeId:t}=bo(),n=t?Rs(t):void 0;n&&hn(n.regionId);const r=w.useRef(null),i=(n==null?void 0:n.facilities)??XS,o=n==null?void 0:n.detailSections.find(I=>I.title.toLowerCase().includes("유의사항")),[l,a]=w.useState(null),[u,c]=w.useState(!1),[d,p]=w.useState(!1),[m,h]=w.useState(),[y,v]=w.useState(null),$=w.useMemo(()=>n?dS(n):[],[n]),L=!!n&&$.length>1,x=I1($,L),g=()=>{n&&navigator.clipboard.writeText(n.address).then(()=>{c(!0),setTimeout(()=>c(!1),2e3)})};if(w.useEffect(()=>{if(!n)return;const I="z2xjrdi0i5",E=()=>{var C,ne;const V=document.getElementById("naver-map");if(!V||!((ne=(C=window.naver)==null?void 0:C.maps)!=null&&ne.Service))return!1;const N=window.naver,D=new N.maps.LatLng(37.5665,126.978),b=new N.maps.Map(V,{center:D,zoom:17,scrollWheel:!0,mapTypeControl:!0}),Z=(ae,G)=>{const H=new N.maps.LatLng(ae,G);b.setCenter(H),new N.maps.Marker({position:H,map:b})},q=(ae,G)=>Number.isFinite(ae)&&Number.isFinite(G);return N.maps.Service.geocode({address:n.address},(ae,G)=>{var Ct,ze,Ue,ht;if(ae==="ERROR"){console.warn(`[지도] 주소 변환 실패 - "${n.name}" (${n.address}): status=${ae}`),Z(37.5665,126.978);return}const H=G,J=X=>typeof X=="number"?X:parseFloat(String(X??""));let re=null,Q=null;const ge=((Ct=H==null?void 0:H.result)==null?void 0:Ct.items)??[],ue=ge.find(X=>X.isRoadAddress)??ge[0];if(ue!=null&&ue.point&&(re=J(ue.point.y),Q=J(ue.point.x)),(re==null||Q==null||!q(re,Q))&&ge.length>0){const X=ge[0];X!=null&&X.point&&(re=J(X.point.y),Q=J(X.point.x))}if(re==null||Q==null||!q(re,Q)){const X=((Ue=(ze=H==null?void 0:H.v2)==null?void 0:ze.addresses)==null?void 0:Ue[0])??((ht=H==null?void 0:H.addresses)==null?void 0:ht[0]);X&&(re=J(X.y),Q=J(X.x))}re!=null&&Q!=null&&q(re,Q)?Z(re,Q):Z(37.5665,126.978)}),!0},M=()=>{var V;return(V=window.naver)!=null&&V.maps&&window.naver.maps.Service?(E(),!0):!1};if(M())return;if(document.querySelector('script[src*="oapi.map.naver.com"]')){const V=setInterval(()=>{M()&&clearInterval(V)},100),N=setTimeout(()=>clearInterval(V),1e4);return()=>{clearInterval(V),clearTimeout(N)}}const A="onNaverMapsReady";window[A]=()=>{if(M())return;const V=setInterval(()=>{M()&&clearInterval(V)},100)};const Y=document.createElement("script");return Y.type="text/javascript",Y.src=`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${I}&submodules=geocoder&callback=${A}`,Y.async=!0,document.head.appendChild(Y),()=>{delete window[A]}},[n]),w.useEffect(()=>{n&&x.syncToLoopIndex(1)},[n==null?void 0:n.id,x.syncToLoopIndex]),!n)return s.jsxs(Qp,{children:[s.jsxs(Xp,{children:[s.jsx(Jp,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),s.jsx(ef,{children:"상세 페이지"})]}),s.jsxs(qS,{children:[s.jsx(YS,{children:"404"}),s.jsxs(ZS,{children:["해당 명상센터를 찾지 못했어요.",s.jsx("br",{}),"URL을 확인하거나 메인에서 다시 탐색해주세요."]}),s.jsxs(GS,{type:"button",onClick:()=>e("/meditation"),children:[s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),s.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),"메인으로 돌아가기"]})]})]});const k=n.programs??[],P=k.filter(I=>I.status==="ongoing"),S=k.filter(I=>I.status==="past"),j=k.length>0,T=n.venueKind==="명상센터"?"명상센터":"명상지",z=[];P.length>0&&z.push(`진행 중 ${P.length}`),S.length>0&&z.push(`지난 ${S.length}`);const R=z.join(" · ");return s.jsxs(Qp,{children:[u&&s.jsx(VS,{children:s.jsx(WS,{children:"주소를 복사했습니다"})}),s.jsxs(Xp,{children:[s.jsx(Jp,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),s.jsx(ef,{children:"상세 페이지"})]}),$.length<=1?s.jsx(pS,{type:"button",onClick:()=>v({urls:$.length===1?$:[n.thumbnailUrl],initialLoopIndex:1}),"aria-label":`${n.name} 대표 사진 크게 보기`,children:s.jsx("img",{src:$[0]??n.thumbnailUrl,alt:`${n.name} 대표 이미지`})}):s.jsxs(fS,{children:[s.jsx(hS,{type:"button",onClick:()=>v({urls:$,initialLoopIndex:x.loopIndex}),"aria-label":`${n.name} 사진 크게 보기`,children:s.jsx(mS,{ref:x.viewportRef,onTouchStart:x.onTouchStart,onTouchMove:x.onTouchMove,onTouchEnd:x.onTouchEnd,onTouchCancel:x.onTouchCancel,children:x.usePx?s.jsx(gS,{ref:x.trackRef,onTransitionEnd:x.onTransitionEnd,style:{width:x.trackWidthPx,transform:`translate3d(${x.translatePx}px, 0, 0)`,transition:x.dragPx!==0||x.transOff?"none":"transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)"},children:x.loopUrls.map((I,E)=>s.jsx(LS,{style:{width:x.vpWidth,flexShrink:0},children:s.jsx(tf,{src:I,alt:"",draggable:!1})},`detail-hero-${E}`))}):s.jsx(tf,{src:$[0],alt:"",draggable:!1})})}),s.jsx(xS,{children:$.map((I,E)=>s.jsx(yS,{type:"button","aria-label":`${E+1}번째 사진으로 이동`,"aria-current":E===x.activeDot?"true":void 0,$active:E===x.activeDot,onClick:()=>x.setLoopIndex(E+1)},E))})]}),s.jsxs(vS,{children:[s.jsxs(wS,{children:[s.jsx(bS,{children:n.name}),s.jsx(Ms,{placeId:n.id})]}),s.jsxs(kS,{children:[s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),s.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),n.address]}),s.jsx(SS,{children:n.shortDescription}),j&&s.jsxs(CS,{children:[s.jsxs(jS,{children:[s.jsxs(ES,{children:[s.jsx($S,{children:"프로그램 · 후기"}),R?s.jsx(PS,{children:R}):null]}),s.jsx(IS,{children:T})]}),P.length>0?s.jsx(RS,{"aria-label":"진행 중인 프로그램 사진",children:P.map(I=>s.jsxs(zS,{type:"button",onClick:()=>{h(I.id),p(!0)},children:[s.jsx("img",{src:I.imageUrl,alt:"",draggable:!1}),s.jsx(MS,{children:I.title})]},I.id))}):s.jsxs(TS,{type:"button",onClick:()=>{h(void 0),p(!0)},children:["지난 프로그램·후기 보기 (",S.length,")"]})]}),s.jsxs(_S,{children:[s.jsxs(nf,{children:[s.jsxs(rf,{type:"button",$open:l==="fee",onClick:()=>a(l==="fee"?null:"fee"),children:[s.jsx("span",{children:"입장료·이용 요금"}),s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M9 18l6-6-6-6"})})]}),s.jsx(of,{$open:l==="fee",children:s.jsx(lf,{children:s.jsx(sf,{children:n.admissionFee??"현장·예약 시 안내"})})})]}),s.jsxs(nf,{children:[s.jsxs(rf,{type:"button",$open:l==="notice",onClick:()=>a(l==="notice"?null:"notice"),children:[s.jsx("span",{children:"유의사항"}),s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M9 18l6-6-6-6"})})]}),s.jsx(of,{$open:l==="notice",children:s.jsx(lf,{children:s.jsx(sf,{children:o!=null&&o.body?s.jsx(L3,{children:o.body}):"등록된 유의사항이 없습니다."})})})]})]}),s.jsxs(NS,{children:[s.jsx("h3",{children:"시설 정보"}),s.jsx(AS,{children:i.map(I=>s.jsxs(FS,{children:[I==="wifi"&&s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M5 12.55a11 11 0 0 1 14.08 0"}),s.jsx("path",{d:"M1.42 9a16 16 0 0 1 21.16 0"}),s.jsx("path",{d:"M8.53 16.11a6 6 0 0 1 6.95 0"}),s.jsx("line",{x1:"12",y1:"20",x2:"12.01",y2:"20"})]}),I==="parking"&&s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),s.jsx("path",{d:"M3 9h18M9 21V9"})]}),I==="tea"&&s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M18 8h1a4 4 0 0 1 0 8h-1"}),s.jsx("path",{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"}),s.jsx("line",{x1:"6",y1:"1",x2:"6",y2:"4"}),s.jsx("line",{x1:"10",y1:"1",x2:"10",y2:"4"}),s.jsx("line",{x1:"14",y1:"1",x2:"14",y2:"4"})]}),s.jsx("span",{children:QS[I]??I})]},I))})]}),s.jsxs(OS,{children:[s.jsx("h3",{children:"위치"}),s.jsxs(DS,{children:[s.jsxs(BS,{type:"button",onClick:g,title:"클릭하여 주소 복사",children:[s.jsx(US,{children:n.address}),s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),s.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})]}),s.jsxs(HS,{href:`https://map.naver.com/v5/search/${encodeURIComponent(n.address)}`,target:"_blank",rel:"noreferrer noopener",children:[s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),s.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"안내"]})]}),s.jsx(KS,{id:"naver-map",ref:r})]})]}),j&&s.jsx(cS,{place:n,open:d,onClose:()=>p(!1),initialProgramId:m}),y&&s.jsx(v3,{urls:y.urls,initialLoopIndex:y.initialLoopIndex,onClose:()=>v(null)})]})},Ra=[{id:"notice-1",category:"공지사항",title:"[중요] 서버 점검 및 재발방지 안내",date:"2026-01-18",summary:"서비스 안정화를 위한 점검이 예정되어 있습니다.",details:{paragraphs:["안녕하세요, 전국 힐링명상지도입니다.","보다 안정적인 서비스를 제공하기 위해 정기 점검을 진행합니다.","점검 시간에는 일부 서비스 이용이 제한될 수 있으니 양해 부탁드립니다."],bullets:["점검 일시: 2026년 1월 25일(일) 02:00 ~ 05:00","점검 내용: 서버 안정화 및 보안 업데이트","영향 범위: 검색/상세 페이지 접속 지연"],footer:"전국 힐링명상지도 드림"}},{id:"notice-2",category:"공지사항",title:"제주 · 강원 신규 명상센터 추가",date:"2026-01-10",summary:"신규 지역 명상센터가 업데이트되었습니다.",details:{paragraphs:["제주, 강원 지역의 새로운 명상센터가 추가되었습니다.","지역별 지도에서 확인하거나 명상센터 검색을 이용해보세요."],bullets:["제주 지역 신규 명상센터 6곳 추가","강원 지역 신규 명상센터 4곳 추가"],footer:"전국 힐링명상지도 드림"}},{id:"notice-3",category:"공지사항",title:"검색 경험 개선 업데이트",date:"2025-12-28",summary:"검색 정확도와 속도가 개선되었습니다.",details:{paragraphs:["검색 필터링 로직을 개선해 더 정확한 결과를 제공합니다.","추천 태그 기반 검색도 함께 적용됩니다."],bullets:["키워드 매칭 정확도 향상","검색 응답 속도 개선"],footer:"전국 힐링명상지도 드림"}},{id:"notice-4",category:"공지사항",title:"연말 운영시간 안내",date:"2025-12-20",summary:"연말 연휴 고객센터 운영시간을 안내드립니다.",details:{paragraphs:["연말 연휴 기간 고객센터 운영시간이 조정됩니다.","문의 사항은 1:1 문의를 이용해주세요."],bullets:["12/31: 09:00~14:00","01/01: 휴무"],footer:"전국 힐링명상지도 드림"}},{id:"notice-5",category:"공지사항",title:"프로필 즐겨찾기 기능 오픈",date:"2025-12-05",summary:"즐겨찾기 기능이 새롭게 추가되었습니다.",details:{paragraphs:["자주 찾는 명상센터를 저장해 빠르게 접근할 수 있어요.","상세 페이지의 ‘즐겨찾기’ 버튼을 눌러보세요."],bullets:["명상센터 즐겨찾기 추가","내 즐겨찾기 목록 제공"],footer:"전국 힐링명상지도 드림"}},{id:"notice-6",category:"공지사항",title:"지도 렌더링 성능 개선",date:"2025-11-23",summary:"지도 로딩 속도가 향상되었습니다.",details:{paragraphs:["지도 렌더링 최적화를 통해 로딩 시간이 감소했습니다.","모바일 환경에서도 부드럽게 동작합니다."],bullets:["지도 로딩 20% 개선","모바일 스크롤 최적화"],footer:"전국 힐링명상지도 드림"}},{id:"notice-7",category:"공지사항",title:"태그 필터 업데이트 안내",date:"2025-11-12",summary:"태그 필터가 더 세분화되었습니다.",details:{paragraphs:["태그 필터가 세분화되어 더 정확한 탐색이 가능합니다.","‘명상 유형’ 태그가 새로 추가되었습니다."],bullets:["명상 유형 태그 추가","인기 태그 자동 추천"],footer:"전국 힐링명상지도 드림"}},{id:"notice-8",category:"공지사항",title:"개인정보 처리방침 개정",date:"2025-10-30",summary:"개인정보 처리방침이 개정됩니다.",details:{paragraphs:["관련 법령 변경에 따라 개인정보 처리방침을 개정합니다.","자세한 내용은 서비스 소개 페이지에서 확인해주세요."],bullets:["개정 시행일: 2025-11-05","주요 변경사항: 데이터 보관 정책"],footer:"전국 힐링명상지도 드림"}},{id:"notice-9",category:"공지사항",title:"명상센터 데이터 정비 안내",date:"2025-10-15",summary:"일부 명상센터 정보가 업데이트됩니다.",details:{paragraphs:["보다 정확한 정보를 위해 명상센터 데이터를 정비합니다.","기간 중 일부 정보가 일시적으로 변경될 수 있습니다."],bullets:["정비 기간: 2025-10-16 ~ 2025-10-20","대상: 지역/태그/운영 정보"],footer:"전국 힐링명상지도 드림"}}],eC=f.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 24px 20px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};

  @media (max-width: 960px) {
    padding: 20px 14px calc(48px + env(safe-area-inset-bottom, 0px));
  }
`,tC=f.h1`
  font-size: 2.4rem;
  margin-bottom: 12px;
`,nC=f.p`
  font-size: 1.2rem;
  color: ${({theme:e})=>e.colors.text700};
`,rC=f.form`
  margin: 24px 0;
  border: 1px solid ${({theme:e})=>e.colors.primary300};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 16px;
  display: grid;
  gap: 8px;
`,iC=f.label`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text700};
`,oC=f.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
`,lC=f.input`
  border: 1px solid ${({theme:e})=>e.colors.border200};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: 10px 12px;
  font-size: 1.1rem;
`,sC=f.button`
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
`,aC=f.div`
  display: grid;
  gap: 12px;
`,uC=f.button`
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
`,cC=f.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: center;
`,dC=f.span`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.primary700};
  font-weight: 600;
`,pC=f.span`
  font-size: 1.2rem;
  font-weight: 600;
`,fC=f.span`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.text700};
`,hC=f.div`
  border-top: 1px solid ${({theme:e})=>e.colors.border200};
  padding-top: 12px;
  display: grid;
  gap: 8px;
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.6;
`,mC=f.ul`
  padding-left: 18px;
  display: grid;
  gap: 6px;
`,gC=f.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 8px;
`,LC=f.button`
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
`,xC=f.div`
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
`,yC=f.div`
  margin-top: 20px;
  display: flex;
  gap: 8px;
  justify-content: center;
`,vC=f.button`
  border: 1px solid ${({theme:e})=>e.colors.border200};
  background: ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.white};
  color: ${({$active:e})=>e?"#fff":"inherit"};
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
`,wC=()=>{var g;const[e,t]=w.useState(""),[n,r]=w.useState(((g=Ra[0])==null?void 0:g.id)??null),[i,o]=w.useState(1),[l,a]=w.useState(null),[u,c]=w.useState("ko-KR"),[d,p]=w.useState(!1),m=6,h=w.useCallback((k,P)=>{if(!("speechSynthesis"in window)){alert("이 브라우저는 음성 읽기를 지원하지 않습니다.");return}window.speechSynthesis.cancel();const S=window.speechSynthesis.getVoices(),j=u.split("-")[0],T=S.filter(M=>M.lang.startsWith(j)),z=T.filter(M=>M.localService),R=T.filter(M=>!M.localService),I=d&&R.length?R[0]:z[0]??T[0],E=new SpeechSynthesisUtterance(k);E.lang=u,E.rate=.95,I&&(E.voice=I),E.onstart=()=>a(P),E.onend=()=>a(null),E.onerror=M=>{a(null),console.warn("TTS error:",M)},window.speechSynthesis.speak(E)},[u,d]);w.useEffect(()=>{if(!("speechSynthesis"in window))return;const k=()=>window.speechSynthesis.getVoices();return window.speechSynthesis.onvoiceschanged=k,k(),()=>{window.speechSynthesis.onvoiceschanged=null}},[]);const y=w.useMemo(()=>{const k=e.trim().toLowerCase();return k?Ra.filter(P=>[P.title,P.summary,...P.details.paragraphs,...P.details.bullets??[]].join(" ").toLowerCase().includes(k)):Ra},[e]),v=Math.max(1,Math.ceil(y.length/m)),$=Math.min(i,v),L=y.slice(($-1)*m,$*m),x=k=>{k.preventDefault(),o(1)};return s.jsxs(eC,{children:[s.jsx(tC,{children:"공지사항"}),s.jsx(nC,{children:"전국 힐링명상지도에서 전하는 소식을 확인하세요."}),s.jsxs(rC,{onSubmit:x,children:[s.jsx(iC,{htmlFor:"notice-search",children:"공지사항 검색"}),s.jsxs(oC,{children:[s.jsx(lC,{id:"notice-search",type:"text",placeholder:"검색어를 입력해주세요.",value:e,onChange:k=>t(k.target.value)}),s.jsx(sC,{type:"submit",children:"검색"})]})]}),s.jsx(aC,{children:L.map(k=>{var S;const P=n===k.id;return s.jsxs(uC,{type:"button",$active:P,onClick:()=>r(P?null:k.id),children:[s.jsxs(cC,{children:[s.jsx(dC,{children:k.category}),s.jsx(pC,{children:k.title}),s.jsx(fC,{children:k.date})]}),P&&s.jsxs(hC,{children:[s.jsxs(gC,{children:[s.jsx(LC,{type:"button",onClick:j=>{if(j.stopPropagation(),l===k.id){window.speechSynthesis.cancel();return}const T=[k.title,k.summary,...k.details.paragraphs,...k.details.bullets??[],k.details.footer].filter(Boolean).join(". ");h(T,k.id)},children:l===k.id?s.jsx(s.Fragment,{children:"멈추기"}):s.jsxs(s.Fragment,{children:[s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),s.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"})]}),"음성으로 들으기"]})}),s.jsxs(xC,{children:[s.jsx("button",{type:"button",className:u==="ko-KR"?"active":"",onClick:j=>{j.stopPropagation(),c("ko-KR")},children:"한국어"}),s.jsx("button",{type:"button",className:u==="en-US"?"active":"",onClick:j=>{j.stopPropagation(),c("en-US")},children:"English"}),s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,fontSize:"0.85rem",cursor:"pointer"},children:[s.jsx("input",{type:"checkbox",checked:d,onChange:j=>{j.stopPropagation(),p(j.target.checked)}}),"고품질(온라인)"]})]})]}),s.jsx("p",{children:k.summary}),k.details.paragraphs.map(j=>s.jsx("p",{children:j},j)),((S=k.details.bullets)==null?void 0:S.length)>0&&s.jsx(mC,{children:k.details.bullets.map(j=>s.jsx("li",{children:j},j))}),s.jsx("p",{children:k.details.footer})]})]},k.id)})}),s.jsx(yC,{children:Array.from({length:v},(k,P)=>s.jsx(vC,{type:"button",$active:$===P+1,onClick:()=>o(P+1),children:P+1},`page-${P+1}`))})]})},bC=f.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 24px 20px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};

  @media (max-width: 960px) {
    padding: 20px 14px calc(48px + env(safe-area-inset-bottom, 0px));
  }
`,kC=f.h1`
  font-size: 2.4rem;
  margin-bottom: 12px;
`,SC=f.p`
  font-size: 1.2rem;
  color: ${({theme:e})=>e.colors.text700};
`,CC=f.div`
  margin-top: 24px;
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 20px;
  box-shadow: ${({theme:e})=>e.shadow.soft};
`,jC=()=>s.jsxs(bC,{children:[s.jsx(kC,{children:"1:1 문의"}),s.jsx(SC,{children:"궁금한 점을 남겨주시면 빠르게 답변드릴게요."}),s.jsxs(CC,{children:[s.jsx("p",{children:"이메일: support@healingmeditation.kr"}),s.jsx("p",{children:"운영시간: 평일 09:00 - 18:00"})]})]}),$C=f.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 20px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};

  @media (max-width: 960px) {
    padding: 20px 14px calc(48px + env(safe-area-inset-bottom, 0px));
  }
`,EC=f.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 24px;
  color: ${({theme:e})=>e.colors.text900};
`,PC=f.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,TC=f.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text700};
  padding: 48px 24px;
  text-align: center;
  margin: 0;
`,IC=()=>{const{favorites:e}=$h(),t=e.map(n=>Rs(n)).filter(n=>n!=null);return s.jsxs($C,{children:[s.jsx(EC,{children:"찜 목록"}),t.length===0?s.jsx(TC,{children:"찜한 명상아이템이 없어요. 리스트에서 하트를 눌러 찜해보세요."}):s.jsx(PC,{children:t.map(n=>s.jsx("li",{children:s.jsx(rs,{place:n})},n.id))})]})},RC="/assets/kakao-BwFsiG1v.png",zC="/assets/naver-8e52KbwB.png",MC="/assets/google-3Iqg8dcD.png",_C="/assets/left-arrow-D7869Zjw.png",de={h1:_e`
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
  `},NC=Be`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,R1=Be`
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,AC=Be`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,FC=Be`
  from {
    opacity: 0;
    transform: scale(0.96) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`,w3=Be`
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,OC=Be`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,za=f.div`
  margin-top: 0;
  animation: ${OC} 0.42s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,DC=f.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,BC=f.p`
  margin: 0;
  padding: 0 4px;
  text-align: left;
  ${de.caption};
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.45;
`,UC=f.section`
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
`,HC=f.div`
  position: relative;
  width: min(100%, 420px);
  padding: 6px 18px 16px;
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,wr=f.div`
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${NC} 0.35s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Ci=f.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
`,ji=f.div`
  flex-shrink: 0;
  margin-top: auto;
  padding-top: 12px;
  width: 100%;
`,VC=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
  gap: 12px;
  flex-shrink: 0;
`,WC=f.button`
  border: none;
  background: transparent;
  color: ${({theme:e})=>e.colors.text900};
  ${de.body2};
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
`,KC=f.img`
  width: 18px;
  height: 18px;
  object-fit: contain;
`,qC=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  flex-shrink: 0;
`,YC=f.img`
  width: 74px;
  height: 74px;
  object-fit: contain;
`,af=f.p`
  margin: 10px 0 0;
  padding: 0 12px;
  text-align: center;
  ${de.body1};
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text900};
  line-height: 1.45;
  max-width: 320px;
`,ZC=f.h1`
  margin: 8px 0 0;
  ${de.title};
  color: ${({theme:e})=>e.colors.primary300};
`,Ma=f.h2`
  margin: 14px 0 0;
  text-align: center;
  ${de.h3};
`,uf=f.p`
  margin: 8px 0 0;
  text-align: center;
  ${de.body2};
  color: ${({theme:e})=>e.colors.text700};
`,GC=Be`
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
`,_a=f.div`
  position: fixed;
  top: calc(env(safe-area-inset-top, 0px) + 10px);
  left: 50%;
  z-index: 130;
  pointer-events: none;
  animation: ${GC} 2.2s ease both;
`,Na=f.div`
  padding: 12px 18px;
  border-radius: ${({theme:e})=>e.radii.pill};
  border: 1px solid
    ${({$variant:e})=>e==="error"?"#f0b8b8":"#96d6a3"};
  background: ${({$variant:e})=>e==="error"?"#fce8e6":"#e8f8ec"};
  color: ${({$variant:e})=>e==="error"?"#c5221f":"#1f6a2b"};
  ${de.body2};
`,cf=f.div`
  margin-top: clamp(24px, 6vh, 48px);
  display: flex;
  flex-direction: column;
  gap: 14px;
`,QC=f.p`
  margin: 8px 0 0;
  text-align: center;
  ${de.body2};
  color: ${({theme:e})=>e.colors.text700};
`,cc=f.p`
  margin: 6px 4px 0;
  ${de.caption};
  color: #d93025;
  animation: ${R1} 0.24s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,XC=f.p`
  margin: 6px 4px 0;
  ${de.caption};
  color: #188038;
  animation: ${R1} 0.24s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,df=f.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  animation: ${w3} 0.42s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: ${({$index:e})=>e*.07}s;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,JC=f(QC)`
  margin-top: 0;
  text-align: left;
  padding: 0 2px;
  animation: ${w3} 0.42s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,pf=f(cc)`
  animation: ${R1} 0.3s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Aa=f.div`
  position: relative;
  width: 100%;
`,Fa=f.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  color: ${({theme:e})=>e.colors.text700};
  ${de.caption};
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
`,ej=f.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
`,tj=f.button`
  border: 1px solid
    ${({theme:e,$highlight:t})=>t?e.colors.primary600:e.colors.primary200};
  background: ${({theme:e,$highlight:t})=>t?e.colors.primary600:e.colors.white};
  color: ${({theme:e,$highlight:t})=>t?e.colors.white:e.colors.text700};
  border-radius: ${({theme:e})=>e.radii.pill};
  padding: 12px 14px;
  ${de.buttonMd};
  cursor: pointer;
  opacity: 1;
  transition: border-color 0.22s ease, background 0.22s ease, color 0.22s ease;

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`,Zn=f.button`
  width: 100%;
  border: none;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary300};
  color: ${({theme:e})=>e.colors.white};
  padding: 16px 20px;
  ${de.buttonMd};
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({$disabled:e})=>e?.55:1};
  margin-top: 0;
  flex-shrink: 0;
  transition: opacity 0.25s ease, transform 0.2s ease;

  &:not(:disabled):active {
    transform: scale(0.99);
  }
`,nj=f.div`
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`,rj=f.button`
  border: 1px solid ${({theme:e})=>e.colors.primary300};
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.primary300};
  ${de.buttonMd};
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
`,ij=f.p`
  margin: 0;
  text-align: center;
  ${de.caption};
  color: ${({theme:e,$error:t})=>t?"#d93025":e.colors.text700};
  max-width: 320px;
  line-height: 1.45;
`,oj=f.div`
  margin-top: 18px;
`,b3=f.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.28);
  display: grid;
  place-items: center;
  z-index: 120;
  animation: ${AC} 0.22s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,lj=f(b3)`
  z-index: 125;
`,k3=f.div`
  width: min(88vw, 320px);
  background: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 22px 18px 16px;
  animation: ${FC} 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,ff=f.p`
  text-align: center;
  ${de.body1};
  color: ${({theme:e})=>e.colors.text900};
`,sj=f.div`
  margin-top: 18px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`,dc=f.button`
  border: 1px solid
    ${({theme:e,$primary:t})=>t?e.colors.primary300:e.colors.primary200};
  background: ${({theme:e,$primary:t})=>t?e.colors.primary300:e.colors.white};
  color: ${({theme:e,$primary:t})=>t?e.colors.white:e.colors.text900};
  border-radius: ${({theme:e})=>e.radii.pill};
  padding: 10px 14px;
  ${de.buttonMd};
  cursor: pointer;
`,aj=f(dc).attrs({type:"button",$primary:!0})`
  width: 100%;
  margin-top: 14px;
`,uj=f.div`
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
  ${de.h2};
  background:
    linear-gradient(to top, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.06)),
    radial-gradient(circle at 20% 20%, #a8d97a, #5f8f49 38%, #304f2d);
`,cj=f.button`
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
`,dj=f(Zn)`
  flex-shrink: 0;
`,pj=f.button`
  border: 1px solid ${({theme:e})=>e.colors.primary200};
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.primary300};
  ${de.buttonMd};
  border-radius: ${({theme:e})=>e.radii.pill};
  padding: 8px 14px;
  cursor: pointer;
  flex-shrink: 0;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.colors.primary50};
    border-color: ${({theme:e})=>e.colors.primary300};
  }
`,fj=f.span`
  display: block;
  text-align: right;
  width: 100%;
  margin: 0 0 4px;
  ${de.caption};
  color: ${({theme:e})=>e.colors.text700};
`,hj=f.div`
  margin: 36px auto 0;
  display: flex;
  justify-content: center;
`,mj=f.img`
  width: 108px;
  height: 108px;
  object-fit: contain;
`,gj=f.h2`
  margin: 10px 0 0;
  text-align: center;
  ${de.h1};
  color: ${({theme:e})=>e.colors.primary300};
`,Lj=f.p`
  margin: 8px 0 0;
  text-align: center;
  ${de.body2};
  color: ${({theme:e})=>e.colors.text700};
`,xj=f.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,Wi=f.input`
  width: 100%;
  border: 1px solid ${({theme:e,$error:t})=>t?"#d93025":e.colors.primary200};
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.text900};
  ${de.body2};
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
`,Oa=f(Wi)`
  padding: 14px 56px 14px 24px;
  transition:
    border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.22s ease;
`,yj=f.div`
  position: relative;
  width: 100%;
  min-width: 0;
`,vj=f(Wi)`
  padding: 14px 58px 14px 24px;
`,wj=f.span`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  ${de.caption};
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: ${({theme:e})=>e.colors.text700};
`,bj=f.button`
  margin-top: 0;
  width: 100%;
  border: none;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary300};
  color: ${({theme:e})=>e.colors.white};
  padding: 16px 20px;
  ${de.buttonMd};
  cursor: pointer;
  transition: transform 0.15s ease;

  &:hover {
    transform: translateY(-1px);
  }
`,kj=f.div`
  margin: 22px 0 18px;
  display: flex;
  align-items: center;
  gap: 14px;
  color: ${({theme:e})=>e.colors.text700};
  ${de.caption};

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: ${({theme:e})=>e.colors.primary200};
  }
`,Sj=f.div`
  display: flex;
  justify-content: center;
  gap: 22px;
`,Da=f.button`
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
`,Ba=f.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
`,Cj=f.div`
  margin: 28px 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 6px;
  text-align: center;
  ${de.body2};
  color: ${({theme:e})=>e.colors.text900};
`,jj=f.button`
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
`,$j=f.div`
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
`,Ej=f.div`
  flex: 1 1 auto;
  min-height: min(200px, 28dvh);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,Pj=f.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  padding-bottom: 4px;
`,Tj=f.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0;
`,Ij=f.img`
  width: 72px;
  height: 72px;
  object-fit: contain;
`,Rj=f.p`
  margin: 0;
  text-align: center;
  ${de.body2};
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.45;
  max-width: 300px;
`,zj=f.div`
  margin-top: 22px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
`,Qo=f.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 52px;
  padding: 10px 0;
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary200};
`,Xo=f.label`
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
`,Jo=f.input`
  width: 20px;
  height: 20px;
  margin: 2px 0 0;
  flex-shrink: 0;
  accent-color: ${({theme:e})=>e.colors.primary300};
  cursor: pointer;
`,el=f.span`
  ${de.body2};
  color: ${({theme:e})=>e.colors.text900};
  line-height: 1.4;
`,Ua=f.span`
  display: inline-block;
  margin-right: 6px;
  ${de.caption};
  font-weight: 700;
  color: ${({theme:e,$optional:t})=>t?e.colors.text700:e.colors.primary600};
`,Ha=f.button`
  flex-shrink: 0;
  margin: 0;
  padding: 8px 4px 8px 10px;
  border: none;
  background: none;
  ${de.caption};
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
`,Mj=f.span`
  flex-shrink: 0;
  width: 64px;
`,_j=f(k3)`
  width: min(92vw, 360px);
  max-height: min(72dvh, 520px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 18px 16px 14px;
`,Nj=f.div`
  margin-top: 12px;
  overflow-y: auto;
  flex: 1 1 auto;
  min-height: 0;
  ${de.body2};
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.55;
  white-space: pre-line;
`,hf={service:{title:"서비스 이용약관",body:`제1조 (목적)
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

수신 방법·빈도·철회 절차 등은 추후 설정에서 변경하실 수 있습니다.`}},Aj=e=>!(e.length<8||!/[a-zA-Z]/.test(e)||!/[0-9]/.test(e)),mf=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,gf=/^01[0-9]\d{7,8}$/,Fj="111111",Oj=()=>{var Vt;const e=en(),[t,n]=w.useState("login"),[r,i]=w.useState(""),[o,l]=w.useState(!1),[a,u]=w.useState(""),[c,d]=w.useState(""),[p,m]=w.useState(""),[h,y]=w.useState(""),[v,$]=w.useState(!1),[L,x]=w.useState(!1),[g,k]=w.useState(!1),[P,S]=w.useState("KR-11"),[j,T]=w.useState(!1),[z,R]=w.useState(!1),[I,E]=w.useState(!1),[M,F]=w.useState(null),[A,Y]=w.useState(300),[V,N]=w.useState(!1),[D,b]=w.useState(!1),[Z,q]=w.useState(!1),[C,ne]=w.useState(!1),[ae,G]=w.useState(null),[H,J]=w.useState(!1),[re,Q]=w.useState(null),[ge,ue]=w.useState(!1),Ct=((Vt=hn(P))==null?void 0:Vt.name)??"서울",ze=w.useMemo(()=>r.trim(),[r]),Ue=w.useMemo(()=>ze?!mf.test(ze):!1,[ze]),ht=w.useMemo(()=>ze.length>0&&mf.test(ze),[ze]),X=Ue,Le=w.useMemo(()=>a.replace(/[^\d]/g,""),[a]),je=w.useMemo(()=>Le?!gf.test(Le):!1,[Le]),jt=w.useMemo(()=>Le.length>0&&gf.test(Le),[Le]),Kn=je,pi=w.useMemo(()=>/^\d{6}$/.test(c.trim()),[c]),fi=w.useMemo(()=>{const W=p;return W?W.length<8?"8자 이상이어야 합니다":/[a-zA-Z]/.test(W)?/[0-9]/.test(W)?null:"숫자가 포함되어야 합니다":"영문이 포함되어야 합니다":null},[p]),Co=w.useMemo(()=>h.length>0&&p!==h,[p,h]),jo=w.useMemo(()=>Aj(p)&&p===h,[p,h]),_=A<=0,U=w.useMemo(()=>{const W=Math.floor(A/60),we=A%60;return`${W}:${String(we).padStart(2,"0")}`},[A]),te=w.useMemo(()=>D&&Z&&C,[D,Z,C]),le=w.useMemo(()=>D&&Z,[D,Z]);w.useEffect(()=>{if(t!=="signup-account"||!z)return;const W=window.setInterval(()=>{Y(we=>we>0?we-1:0)},1e3);return()=>window.clearInterval(W)},[t,z]),w.useEffect(()=>{if(t!=="signup-account"||!z||!I)return;const W=window.setTimeout(()=>{var we;(we=document.getElementById("signup-password-anchor"))==null||we.scrollIntoView({behavior:"smooth",block:"nearest"})},80);return()=>window.clearTimeout(W)},[t,z,I]),w.useEffect(()=>{if(t!=="signup-account"||!o)return;const W=window.setTimeout(()=>{var we;(we=document.getElementById("signup-phone-anchor"))==null||we.scrollIntoView({behavior:"smooth",block:"nearest"})},100);return()=>window.clearTimeout(W)},[t,o]),w.useEffect(()=>{if(!M)return;const W=window.setTimeout(()=>{F(null)},2200);return()=>window.clearTimeout(W)},[M]),w.useEffect(()=>{if(!V)return;const W=window.setTimeout(()=>{N(!1)},2200);return()=>window.clearTimeout(W)},[V]),w.useEffect(()=>{t==="login"&&k(!1)},[t]),w.useEffect(()=>{t!=="signup-region"&&(Q(null),ue(!1),J(!1))},[t]);const he=()=>{if(Q(null),ue(!1),!navigator.geolocation){ue(!0),Q("이 환경에서는 위치 정보를 쓸 수 없어요. 지도에서 골라주세요.");return}J(!0),navigator.geolocation.getCurrentPosition(W=>{var Ln;J(!1);const we=F7(W.coords.latitude,W.coords.longitude);if(we){S(we),T(!0),ue(!1);const tt=((Ln=hn(we))==null?void 0:Ln.name)??we;Q(`${tt} 지역으로 맞췄어요. 맞는지 확인해 주세요.`)}else ue(!0),Q("위치로 시·도를 찾지 못했어요. 지도에서 선택해 주세요.")},W=>{J(!1),ue(!0),W.code===1?Q("위치 권한이 필요해요. 허용하시거나 지도에서 골라주세요."):W.code===2?Q("위치를 가져올 수 없어요. 지도에서 선택해 주세요."):Q("위치 확인에 실패했어요. 지도에서 선택해 주세요.")},{enableHighAccuracy:!1,maximumAge:3e5,timeout:12e3})},mt=()=>{if(t==="login"){e(-1);return}if(t==="signup-terms"){G(null),n("login");return}if(t==="signup-account"){l(!1),R(!1),E(!1),F(null),u(""),d(""),m(""),y(""),$(!1),x(!1),n("signup-terms");return}if(t==="signup-region"){n("signup-account");return}t==="signup-interest"&&n("signup-region")};return s.jsx(UC,{children:s.jsxs(HC,{children:[t!=="signup-complete"&&s.jsxs(VC,{children:[s.jsxs(WC,{type:"button",onClick:mt,"aria-label":"뒤로가기",children:[s.jsx(KC,{src:_C,alt:"","aria-hidden":"true"}),"뒤로가기"]}),t==="signup-interest"&&s.jsx(pj,{type:"button",onClick:()=>n("signup-complete"),children:"건너뛰기"})]}),t==="login"&&s.jsxs(wr,{children:[s.jsxs(Ci,{children:[s.jsxs(qC,{children:[s.jsx(YC,{src:vl,alt:"명상 지도 로고"}),s.jsx(af,{children:"명상 지도에 오신 것을 환영합니다!"}),s.jsx(ZC,{children:"명상 지도"})]}),s.jsxs(xj,{children:[s.jsx(Wi,{type:"email",placeholder:"이메일","aria-label":"이메일"}),s.jsxs(Aa,{children:[s.jsx(Oa,{type:g?"text":"password",placeholder:"비밀번호","aria-label":"비밀번호",autoComplete:"current-password"}),s.jsx(Fa,{type:"button","aria-pressed":g,"aria-label":g?"비밀번호 숨기기":"비밀번호 보기",onClick:()=>k(W=>!W),children:g?"숨기기":"보기"})]})]}),s.jsx(kj,{children:"또는"}),s.jsxs(Sj,{children:[s.jsx(Da,{type:"button",$bg:"transparent","aria-label":"카카오로 로그인",children:s.jsx(Ba,{src:RC,alt:"카카오 로그인"})}),s.jsx(Da,{type:"button",$bg:"transparent",$color:"#fff","aria-label":"네이버로 로그인",children:s.jsx(Ba,{src:zC,alt:"네이버 로그인"})}),s.jsx(Da,{type:"button",$bg:"transparent","aria-label":"구글로 로그인",children:s.jsx(Ba,{src:MC,alt:"구글 로그인"})})]}),s.jsxs(Cj,{children:[s.jsx("span",{children:"계정이 없으신가요?"}),s.jsx(jj,{type:"button",onClick:()=>{i(""),l(!1),u(""),d(""),m(""),y(""),$(!1),x(!1),R(!1),E(!1),F(null),Y(300),S("KR-11"),b(!1),q(!1),ne(!1),G(null),n("signup-terms")},children:"회원가입"})]})]}),s.jsx(ji,{children:s.jsx(bj,{type:"button",children:"로그인하기"})})]}),t==="signup-terms"&&s.jsxs(wr,{children:[s.jsxs($j,{children:[s.jsx(Ej,{children:s.jsxs(Tj,{children:[s.jsx(Ij,{src:vl,alt:"명상 지도 로고"}),s.jsx(af,{children:"명상 지도에 오신 것을 환영합니다!"})]})}),s.jsxs(Pj,{children:[s.jsx(Rj,{children:"서비스 이용을 위해 아래 약관에 동의해 주세요."}),s.jsxs(zj,{children:[s.jsxs(Qo,{children:[s.jsxs(Xo,{htmlFor:"signup-terms-service",children:[s.jsx(Jo,{id:"signup-terms-service",type:"checkbox",checked:D,onChange:W=>b(W.target.checked)}),s.jsxs(el,{children:[s.jsx(Ua,{children:"[필수]"}),"서비스 이용약관에 동의합니다"]})]}),s.jsx(Ha,{type:"button",onClick:W=>{W.stopPropagation(),G("service")},children:"자세히 ›"})]}),s.jsxs(Qo,{children:[s.jsxs(Xo,{htmlFor:"signup-terms-privacy",children:[s.jsx(Jo,{id:"signup-terms-privacy",type:"checkbox",checked:Z,onChange:W=>q(W.target.checked)}),s.jsxs(el,{children:[s.jsx(Ua,{children:"[필수]"}),"개인정보 수집 및 이용에 동의합니다"]})]}),s.jsx(Ha,{type:"button",onClick:W=>{W.stopPropagation(),G("privacy")},children:"자세히 ›"})]}),s.jsxs(Qo,{children:[s.jsxs(Xo,{htmlFor:"signup-terms-marketing",children:[s.jsx(Jo,{id:"signup-terms-marketing",type:"checkbox",checked:C,onChange:W=>ne(W.target.checked)}),s.jsxs(el,{children:[s.jsx(Ua,{$optional:!0,children:"[선택]"}),"마케팅 정보 수신에 동의합니다"]})]}),s.jsx(Ha,{type:"button",onClick:W=>{W.stopPropagation(),G("marketing")},children:"자세히 ›"})]}),s.jsxs(Qo,{children:[s.jsxs(Xo,{htmlFor:"signup-terms-all",children:[s.jsx(Jo,{id:"signup-terms-all",type:"checkbox",checked:te,onChange:W=>{const we=W.target.checked;b(we),q(we),ne(we)}}),s.jsx(el,{children:"전체 동의"})]}),s.jsx(Mj,{"aria-hidden":!0})]})]})]})]}),s.jsx(ji,{children:s.jsx(Zn,{type:"button",$disabled:!le,disabled:!le,onClick:()=>n("signup-account"),children:"다음"})})]}),t==="signup-account"&&s.jsxs(wr,{children:[s.jsxs(Ci,{children:[s.jsx(Ma,{children:"회원가입"}),s.jsxs(cf,{children:[s.jsx(Wi,{type:"email",placeholder:"이메일",value:r,$error:X,onChange:W=>i(W.target.value),autoComplete:"email",disabled:o}),Ue&&s.jsx(cc,{children:"이메일 형식이 아닙니다"}),!X&&ht&&!o&&s.jsx(XC,{children:"사용가능한 이메일입니다"}),o&&s.jsxs(za,{id:"signup-phone-anchor",children:[s.jsx(Wi,{type:"tel",inputMode:"numeric",placeholder:"휴대폰 번호 (- 없이)",value:a,$error:Kn,onChange:W=>u(W.target.value.replace(/\D/g,"")),autoComplete:"tel",disabled:I}),Kn&&s.jsx(cc,{children:"올바른 휴대폰 번호를 입력해 주세요"})]})]}),z&&s.jsx(za,{id:"signup-code-anchor",children:s.jsxs(DC,{children:[s.jsxs(ej,{children:[s.jsxs(yj,{children:[s.jsx(vj,{type:"text",inputMode:"numeric",placeholder:"인증번호",value:c,onChange:W=>d(W.target.value.replace(/\D/g,"").slice(0,6)),autoComplete:"one-time-code","aria-describedby":I?void 0:"signup-code-hint",disabled:I}),s.jsx(wj,{title:`남은 시간 ${U}`,children:U})]}),s.jsx(tj,{type:"button",$highlight:_,disabled:I,onClick:()=>{d(""),E(!1),F(null),Y(300),N(!0)},children:"다시받기"})]}),!I&&s.jsx(BC,{id:"signup-code-hint",children:"휴대폰으로 발송된 6자리 인증번호를 입력해 주세요"})]})}),z&&I&&s.jsx(za,{id:"signup-password-anchor",children:s.jsxs(cf,{children:[s.jsxs(df,{$index:0,children:[s.jsxs(Aa,{children:[s.jsx(Oa,{type:v?"text":"password",placeholder:"비밀번호",value:p,$error:!!fi,onChange:W=>m(W.target.value),autoComplete:"new-password"}),s.jsx(Fa,{type:"button","aria-pressed":v,"aria-label":v?"비밀번호 숨기기":"비밀번호 보기",onClick:()=>$(W=>!W),children:v?"숨기기":"보기"})]}),fi&&s.jsx(pf,{children:fi})]}),s.jsxs(df,{$index:1,children:[s.jsxs(Aa,{children:[s.jsx(Oa,{type:L?"text":"password",placeholder:"비밀번호 확인",value:h,$error:Co,onChange:W=>y(W.target.value),autoComplete:"new-password"}),s.jsx(Fa,{type:"button","aria-pressed":L,"aria-label":L?"비밀번호 확인 숨기기":"비밀번호 확인 보기",onClick:()=>x(W=>!W),children:L?"숨기기":"보기"})]}),Co&&s.jsx(pf,{children:"비밀번호가 일치하지 않습니다"})]}),s.jsx(JC,{children:"8자 이상, 영문+숫자 포함"})]})})]}),s.jsxs(ji,{children:[!o&&s.jsx(Zn,{type:"button",$disabled:!ht,disabled:!ht,onClick:()=>l(!0),children:"다음"}),o&&!z&&s.jsx(Zn,{type:"button",$disabled:!jt,disabled:!jt,onClick:()=>{R(!0),E(!1),F(null),d(""),Y(300),N(!0),window.setTimeout(()=>{var W;(W=document.getElementById("signup-code-anchor"))==null||W.scrollIntoView({behavior:"smooth",block:"nearest"})},120)},children:"인증번호 받기"}),z&&!I&&s.jsx(Zn,{type:"button",$disabled:!pi,disabled:!pi,onClick:()=>{pi&&(c.trim()===Fj?(E(!0),F("success")):F("error"))},children:"인증"}),z&&I&&s.jsx(Zn,{type:"button",$disabled:!jo,disabled:!jo,onClick:()=>n("signup-region"),children:"다음"})]})]}),V&&s.jsx(_a,{role:"status","aria-live":"polite",children:s.jsx(Na,{children:"인증번호를 보냈어요!"})}),M==="success"&&s.jsx(_a,{role:"status","aria-live":"polite",children:s.jsx(Na,{children:"인증되었습니다"})}),M==="error"&&s.jsx(_a,{role:"alert","aria-live":"assertive",children:s.jsx(Na,{$variant:"error",children:"인증번호가 틀렸습니다"})}),t==="signup-region"&&s.jsx(wr,{children:s.jsxs(Ci,{children:[s.jsx(Ma,{children:"활동 지역을 설정해주세요"}),s.jsx(uf,{children:"주로 명상하는 지역을 선택해주세요"}),s.jsxs(nj,{children:[s.jsx(rj,{type:"button",disabled:H,"aria-busy":H,onClick:he,children:H?"위치 확인 중…":"현재 위치로 지역 맞추기"}),re&&s.jsx(ij,{$error:ge,children:re})]}),s.jsx(oj,{children:s.jsx(h1,{maxMapHeight:"clamp(220px, calc(100dvh - 260px), 480px)",activeRegionId:P,onSelectRegion:W=>{S(W),T(!0)}})})]})}),t==="signup-interest"&&s.jsxs(wr,{children:[s.jsxs(Ci,{children:[s.jsx(fj,{children:"1/10"}),s.jsx(Ma,{children:"관심사를 선택해주세요"}),s.jsx(uf,{children:"좌우로 넘기며 관심있는 주제를 선택하세요"}),s.jsx(uj,{children:"숲"}),s.jsx(cj,{type:"button","aria-label":"관심사 좋아요",children:"♡"})]}),s.jsx(ji,{children:s.jsx(dj,{type:"button",onClick:()=>n("signup-complete"),children:"다음"})})]}),t==="signup-complete"&&s.jsxs(wr,{children:[s.jsxs(Ci,{children:[s.jsx(hj,{children:s.jsx(mj,{src:vl,alt:"명상 지도 로고"})}),s.jsx(gj,{children:"가입 완료!"}),s.jsx(Lj,{children:"평온한 명상 여행을 시작하세요"})]}),s.jsx(ji,{children:s.jsx(Zn,{type:"button",onClick:()=>{n("login")},children:"시작하기"})})]}),t==="signup-region"&&j&&s.jsx(b3,{role:"dialog","aria-modal":"true","aria-label":"지역 확인",children:s.jsxs(k3,{children:[s.jsxs(ff,{children:[Ct," 지역이 맞습니까?"]}),s.jsxs(sj,{children:[s.jsx(dc,{type:"button",onClick:()=>T(!1),children:"아니오"}),s.jsx(dc,{type:"button",$primary:!0,onClick:()=>{T(!1),n("signup-interest")},children:"네"})]})]})}),ae!==null&&s.jsx(lj,{role:"dialog","aria-modal":"true","aria-labelledby":"terms-detail-title",onClick:()=>G(null),children:s.jsxs(_j,{onClick:W=>W.stopPropagation(),children:[s.jsx(ff,{id:"terms-detail-title",children:hf[ae].title}),s.jsx(Nj,{children:hf[ae].body}),s.jsx(aj,{onClick:()=>G(null),children:"확인"})]})})]})})},Dj=f.div`
  color: ${({theme:e})=>e.colors.text900};
`,Lf=f.section`
  padding: 48px 20px;

  @media (max-width: 960px) {
    padding: 36px 14px;
  }
`,xf=f.div`
  max-width: 1100px;
  margin: 0 auto;
`,Bj=f.section`
  padding: 64px 20px calc(56px + env(safe-area-inset-bottom, 0px));
  background: linear-gradient(180deg, #ffffff 0%, ${({theme:e})=>e.colors.primary50} 100%);

  @media (max-width: 960px) {
    padding: 48px 14px calc(40px + env(safe-area-inset-bottom, 0px));
  }
`,Uj=f.div`
  max-width: 1100px;
  margin: 0 auto;
  background: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 36px;
  box-shadow: ${({theme:e})=>e.shadow.soft};
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  display: grid;
  gap: 16px;
`,Hj=f.h1`
  font-size: 3rem;
  line-height: 1.3;
`,Vj=f.p`
  font-size: 1.3rem;
  color: ${({theme:e})=>e.colors.text700};
`,Wj=f(ui)`
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
`,Kj=f.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`,Va=f.div`
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 18px;
  box-shadow: ${({theme:e})=>e.shadow.soft};
`,Wa=f.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text700};
`,Ka=f.p`
  font-size: 2.2rem;
  font-weight: 700;
  margin-top: 8px;
`,qj=f.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`,tl=f.div`
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 24px;
  box-shadow: ${({theme:e})=>e.shadow.soft};
  display: grid;
  gap: 10px;
`,nl=f.div`
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
`,Yj=f.section`
  padding: 48px 20px;
  background: ${({theme:e})=>e.colors.primary600};
  color: #fff;
`,Zj=f.div`
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
`,Gj=f.button`
  border: none;
  background: #fff;
  color: ${({theme:e})=>e.colors.primary700};
  padding: 10px 18px;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  font-size: 1.1rem;
`,Qj=()=>s.jsxs(Dj,{children:[s.jsx(Bj,{children:s.jsxs(Uj,{children:[s.jsx(Hj,{children:"누구나 원하는 곳에서, 더 깊은 힐링 명상"}),s.jsx(Vj,{children:"전국 힐링명상지도는 지역별 명상센터를 쉽고 빠르게 찾을 수 있는 플랫폼입니다."}),s.jsx(Wj,{to:"/",children:"명상센터 찾아보기"})]})}),s.jsx(Lf,{children:s.jsx(xf,{children:s.jsxs(Kj,{children:[s.jsxs(Va,{children:[s.jsx(Wa,{children:"누적 명상센터"}),s.jsx(Ka,{children:"1,200+"})]}),s.jsxs(Va,{children:[s.jsx(Wa,{children:"지역 커버리지"}),s.jsx(Ka,{children:"전국 17개"})]}),s.jsxs(Va,{children:[s.jsx(Wa,{children:"누적 검색 수"}),s.jsx(Ka,{children:"210만+"})]})]})})}),s.jsx(Lf,{children:s.jsx(xf,{children:s.jsxs(qj,{children:[s.jsxs(tl,{children:[s.jsx(nl,{children:s.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[s.jsx("path",{d:"M3 11l9-7 9 7"}),s.jsx("path",{d:"M5 10v10h14V10"})]})}),s.jsx("h3",{children:"지도 기반 탐색"}),s.jsx("p",{children:"대한민국 지도로 지역을 선택하고, 명상센터를 한눈에 찾아보세요."})]}),s.jsxs(tl,{children:[s.jsx(nl,{children:s.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:s.jsx("path",{d:"M4 6h16M4 12h10M4 18h6"})})}),s.jsx("h3",{children:"맞춤형 필터"}),s.jsx("p",{children:"해시태그와 정렬 기준으로 내게 맞는 명상센터를 빠르게 추천해요."})]}),s.jsxs(tl,{children:[s.jsx(nl,{children:s.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[s.jsx("circle",{cx:"12",cy:"8",r:"3"}),s.jsx("path",{d:"M6 20c1.5-3 4-5 6-5s4.5 2 6 5"})]})}),s.jsx("h3",{children:"상세 정보 제공"}),s.jsx("p",{children:"주소, 프로그램, 운영 단체 정보까지 한 페이지에서 확인하세요."})]}),s.jsxs(tl,{children:[s.jsx(nl,{children:s.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[s.jsx("circle",{cx:"10",cy:"10",r:"6"}),s.jsx("line",{x1:"14.5",y1:"14.5",x2:"21",y2:"21"})]})}),s.jsx("h3",{children:"검색 경험"}),s.jsx("p",{children:"검색어 입력만으로 관련 명상센터를 부드럽게 이어 보여드립니다."})]})]})})}),s.jsx(Yj,{children:s.jsxs(Zj,{children:[s.jsxs("div",{children:[s.jsx("h2",{children:"명상센터 운영자라면 함께해요"}),s.jsx("p",{children:"전국 힐링명상지도와 함께 더 많은 사람에게 명상 경험을 전달하세요."})]}),s.jsx(Gj,{type:"button",children:"등록 문의하기"})]})})]}),Xj=f.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
  background: linear-gradient(180deg, ${({theme:e})=>e.colors.primary50} 0%, ${({theme:e})=>e.colors.warmCream} 100%);
`,Jj=f.div`
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
`,e$=f.p`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.primary700};
  margin: 0 0 8px;
`,t$=f.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.primary400};
  margin: 0 0 32px;
  text-align: center;
  line-height: 1.5;
`,n$=f.button`
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
`,r$=()=>{const e=en();return s.jsxs(Xj,{children:[s.jsx(Jj,{children:"404"}),s.jsx(e$,{children:"Oops!"}),s.jsx(t$,{children:"페이지를 찾을 수 없습니다."}),s.jsx(n$,{type:"button",onClick:()=>e("/"),children:"홈으로"})]})},i$=[{path:"/",element:s.jsx(b7,{}),children:[{index:!0,element:s.jsx(L0,{})},{path:"meditation",element:s.jsx(L0,{})},{path:"meditation/map",element:s.jsx(M8,{})},{path:"meditation/expert/:expertId/class/:programId",element:s.jsx(Bx,{})},{path:"meditation/expert/:expertId",element:s.jsx(Rx,{})},{path:"meditation/region/:regionId/experts",element:s.jsx(tx,{})},{path:"meditation/region/:regionId",element:s.jsx(OL,{})},{path:"meditation/place/:placeId",element:s.jsx(JS,{})},{path:"favorites",element:s.jsx(IC,{})},{path:"profile",element:s.jsx(Oj,{})},{path:"notice",element:s.jsx(wC,{})},{path:"inquiry",element:s.jsx(jC,{})},{path:"service-info",element:s.jsx(Qj,{})},{path:"*",element:s.jsx(r$,{})}]}],o$=()=>P6(i$),l$=()=>s.jsx(X6,{children:s.jsx(o$,{})}),s$=f.div`
  min-height: 100vh;
`,a$=()=>s.jsx(s$,{children:s.jsx(l$,{})}),u$=X5`
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
`,c$={colors:{primary50:"#f3eef8",primary100:"#e6dcf0",primary200:"#c9b8e0",primary300:"#a88bca",primary400:"#7a5aab",primary500:"#5c3d8f",primary600:"#4B0082",primary700:"#3d0069",primary800:"#2f0051",primary900:"#22003a",white:"#FFFFFF",warmCream:"#FFFAF8",buddingPeach:"#F5D8D0",charcoal:"#3D3D3D",warmGray:"#6B6B6B",text900:"#3D3D3D",text700:"#6B6B6B",border200:"#9B8A99",mutedMauve:"#9B8A99",dustyGold:"#C9A962",dustyRose:"#C9A090",bg50:"#FFFAF8",bg100:"#F5D8D0"},shadow:{soft:"0 12px 30px rgba(75, 0, 130, 0.1)"},radii:{pill:"999px",md:"12px",lg:"16px"}};qa.createRoot(document.getElementById("root")).render(s.jsx(Re.StrictMode,{children:s.jsxs(Z5,{theme:c$,children:[s.jsx(u$,{}),s.jsx(a$,{})]})}));
