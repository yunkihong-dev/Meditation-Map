function v3(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var bl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ss(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var x2={exports:{}},as={},y2={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var po=Symbol.for("react.element"),w3=Symbol.for("react.portal"),k3=Symbol.for("react.fragment"),b3=Symbol.for("react.strict_mode"),S3=Symbol.for("react.profiler"),C3=Symbol.for("react.provider"),j3=Symbol.for("react.context"),$3=Symbol.for("react.forward_ref"),E3=Symbol.for("react.suspense"),P3=Symbol.for("react.memo"),T3=Symbol.for("react.lazy"),R1=Symbol.iterator;function I3(e){return e===null||typeof e!="object"?null:(e=R1&&e[R1]||e["@@iterator"],typeof e=="function"?e:null)}var v2={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w2=Object.assign,k2={};function ni(e,t,n){this.props=e,this.context=t,this.refs=k2,this.updater=n||v2}ni.prototype.isReactComponent={};ni.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ni.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function b2(){}b2.prototype=ni.prototype;function dc(e,t,n){this.props=e,this.context=t,this.refs=k2,this.updater=n||v2}var pc=dc.prototype=new b2;pc.constructor=dc;w2(pc,ni.prototype);pc.isPureReactComponent=!0;var z1=Array.isArray,S2=Object.prototype.hasOwnProperty,fc={current:null},C2={key:!0,ref:!0,__self:!0,__source:!0};function j2(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)S2.call(t,r)&&!C2.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:po,type:e,key:o,ref:l,props:i,_owner:fc.current}}function R3(e,t){return{$$typeof:po,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function hc(e){return typeof e=="object"&&e!==null&&e.$$typeof===po}function z3(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var M1=/\/+/g;function Ds(e,t){return typeof e=="object"&&e!==null&&e.key!=null?z3(""+e.key):t.toString(36)}function rl(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case po:case w3:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Ds(l,0):r,z1(i)?(n="",e!=null&&(n=e.replace(M1,"$&/")+"/"),rl(i,t,n,"",function(c){return c})):i!=null&&(hc(i)&&(i=R3(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(M1,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",z1(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+Ds(o,a);l+=rl(o,t,n,u,i)}else if(u=I3(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+Ds(o,a++),l+=rl(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function jo(e,t,n){if(e==null)return e;var r=[],i=0;return rl(e,r,"","",function(o){return t.call(n,o,i++)}),r}function M3(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var nt={current:null},il={transition:null},_3={ReactCurrentDispatcher:nt,ReactCurrentBatchConfig:il,ReactCurrentOwner:fc};function $2(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:jo,forEach:function(e,t,n){jo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return jo(e,function(){t++}),t},toArray:function(e){return jo(e,function(t){return t})||[]},only:function(e){if(!hc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ae.Component=ni;ae.Fragment=k3;ae.Profiler=S3;ae.PureComponent=dc;ae.StrictMode=b3;ae.Suspense=E3;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_3;ae.act=$2;ae.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=w2({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=fc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)S2.call(t,u)&&!C2.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:po,type:e.type,key:i,ref:o,props:r,_owner:l}};ae.createContext=function(e){return e={$$typeof:j3,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:C3,_context:e},e.Consumer=e};ae.createElement=j2;ae.createFactory=function(e){var t=j2.bind(null,e);return t.type=e,t};ae.createRef=function(){return{current:null}};ae.forwardRef=function(e){return{$$typeof:$3,render:e}};ae.isValidElement=hc;ae.lazy=function(e){return{$$typeof:T3,_payload:{_status:-1,_result:e},_init:M3}};ae.memo=function(e,t){return{$$typeof:P3,type:e,compare:t===void 0?null:t}};ae.startTransition=function(e){var t=il.transition;il.transition={};try{e()}finally{il.transition=t}};ae.unstable_act=$2;ae.useCallback=function(e,t){return nt.current.useCallback(e,t)};ae.useContext=function(e){return nt.current.useContext(e)};ae.useDebugValue=function(){};ae.useDeferredValue=function(e){return nt.current.useDeferredValue(e)};ae.useEffect=function(e,t){return nt.current.useEffect(e,t)};ae.useId=function(){return nt.current.useId()};ae.useImperativeHandle=function(e,t,n){return nt.current.useImperativeHandle(e,t,n)};ae.useInsertionEffect=function(e,t){return nt.current.useInsertionEffect(e,t)};ae.useLayoutEffect=function(e,t){return nt.current.useLayoutEffect(e,t)};ae.useMemo=function(e,t){return nt.current.useMemo(e,t)};ae.useReducer=function(e,t,n){return nt.current.useReducer(e,t,n)};ae.useRef=function(e){return nt.current.useRef(e)};ae.useState=function(e){return nt.current.useState(e)};ae.useSyncExternalStore=function(e,t,n){return nt.current.useSyncExternalStore(e,t,n)};ae.useTransition=function(){return nt.current.useTransition()};ae.version="18.3.1";y2.exports=ae;var k=y2.exports;const Re=ss(k),N3=v3({__proto__:null,default:Re},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A3=k,F3=Symbol.for("react.element"),D3=Symbol.for("react.fragment"),O3=Object.prototype.hasOwnProperty,B3=A3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U3={key:!0,ref:!0,__self:!0,__source:!0};function E2(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)O3.call(t,r)&&!U3.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:F3,type:e,key:o,ref:l,props:i,_owner:B3.current}}as.Fragment=D3;as.jsx=E2;as.jsxs=E2;x2.exports=as;var s=x2.exports,Ka={},P2={exports:{}},wt={},T2={exports:{}},I2={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,D){var w=_.length;_.push(D);e:for(;0<w;){var q=w-1>>>1,Z=_[q];if(0<i(Z,D))_[q]=D,_[w]=Z,w=q;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var D=_[0],w=_.pop();if(w!==D){_[0]=w;e:for(var q=0,Z=_.length,j=Z>>>1;q<j;){var re=2*(q+1)-1,oe=_[re],Q=re+1,H=_[Q];if(0>i(oe,w))Q<Z&&0>i(H,oe)?(_[q]=H,_[Q]=w,q=Q):(_[q]=oe,_[re]=w,q=re);else if(Q<Z&&0>i(H,w))_[q]=H,_[Q]=w,q=Q;else break e}}return D}function i(_,D){var w=_.sortIndex-D.sortIndex;return w!==0?w:_.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],c=[],d=1,p=null,m=3,f=!1,y=!1,v=!1,C=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(_){for(var D=n(c);D!==null;){if(D.callback===null)r(c);else if(D.startTime<=_)r(c),D.sortIndex=D.expirationTime,t(u,D);else break;D=n(c)}}function b(_){if(v=!1,x(_),!y)if(n(u)!==null)y=!0,Y(P);else{var D=n(c);D!==null&&K(b,D.startTime-_)}}function P(_,D){y=!1,v&&(v=!1,g(I),I=-1),f=!0;var w=m;try{for(x(D),p=n(u);p!==null&&(!(p.expirationTime>D)||_&&!z());){var q=p.callback;if(typeof q=="function"){p.callback=null,m=p.priorityLevel;var Z=q(p.expirationTime<=D);D=e.unstable_now(),typeof Z=="function"?p.callback=Z:p===n(u)&&r(u),x(D)}else r(u);p=n(u)}if(p!==null)var j=!0;else{var re=n(c);re!==null&&K(b,re.startTime-D),j=!1}return j}finally{p=null,m=w,f=!1}}var S=!1,$=null,I=-1,E=5,T=-1;function z(){return!(e.unstable_now()-T<E)}function R(){if($!==null){var _=e.unstable_now();T=_;var D=!0;try{D=$(!0,_)}finally{D?A():(S=!1,$=null)}}else S=!1}var A;if(typeof L=="function")A=function(){L(R)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,F=N.port2;N.port1.onmessage=R,A=function(){F.postMessage(null)}}else A=function(){C(R,0)};function Y(_){$=_,S||(S=!0,A())}function K(_,D){I=C(function(){_(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){y||f||(y=!0,Y(P))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(_){switch(m){case 1:case 2:case 3:var D=3;break;default:D=m}var w=m;m=D;try{return _()}finally{m=w}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,D){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var w=m;m=_;try{return D()}finally{m=w}},e.unstable_scheduleCallback=function(_,D,w){var q=e.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?q+w:q):w=q,_){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=w+Z,_={id:d++,callback:D,priorityLevel:_,startTime:w,expirationTime:Z,sortIndex:-1},w>q?(_.sortIndex=w,t(c,_),n(u)===null&&_===n(c)&&(v?(g(I),I=-1):v=!0,K(b,w-q))):(_.sortIndex=Z,t(u,_),y||f||(y=!0,Y(P))),_},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(_){var D=m;return function(){var w=m;m=D;try{return _.apply(this,arguments)}finally{m=w}}}})(I2);T2.exports=I2;var H3=T2.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V3=k,vt=H3;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var R2=new Set,Hi={};function ur(e,t){Ur(e,t),Ur(e+"Capture",t)}function Ur(e,t){for(Hi[e]=t,e=0;e<t.length;e++)R2.add(t[e])}var ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qa=Object.prototype.hasOwnProperty,W3=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_1={},N1={};function K3(e){return qa.call(N1,e)?!0:qa.call(_1,e)?!1:W3.test(e)?N1[e]=!0:(_1[e]=!0,!1)}function q3(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Y3(e,t,n,r){if(t===null||typeof t>"u"||q3(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function rt(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){qe[e]=new rt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];qe[t]=new rt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){qe[e]=new rt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){qe[e]=new rt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){qe[e]=new rt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){qe[e]=new rt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){qe[e]=new rt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){qe[e]=new rt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){qe[e]=new rt(e,5,!1,e.toLowerCase(),null,!1,!1)});var mc=/[\-:]([a-z])/g;function gc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(mc,gc);qe[t]=new rt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(mc,gc);qe[t]=new rt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(mc,gc);qe[t]=new rt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){qe[e]=new rt(e,1,!1,e.toLowerCase(),null,!1,!1)});qe.xlinkHref=new rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){qe[e]=new rt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Lc(e,t,n,r){var i=qe.hasOwnProperty(t)?qe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Y3(t,n,i,r)&&(n=null),r||i===null?K3(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var dn=V3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$o=Symbol.for("react.element"),yr=Symbol.for("react.portal"),vr=Symbol.for("react.fragment"),xc=Symbol.for("react.strict_mode"),Ya=Symbol.for("react.profiler"),z2=Symbol.for("react.provider"),M2=Symbol.for("react.context"),yc=Symbol.for("react.forward_ref"),Za=Symbol.for("react.suspense"),Qa=Symbol.for("react.suspense_list"),vc=Symbol.for("react.memo"),vn=Symbol.for("react.lazy"),_2=Symbol.for("react.offscreen"),A1=Symbol.iterator;function pi(e){return e===null||typeof e!="object"?null:(e=A1&&e[A1]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Object.assign,Os;function Si(e){if(Os===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Os=t&&t[1]||""}return`
`+Os+e}var Bs=!1;function Us(e,t){if(!e||Bs)return"";Bs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{Bs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Si(e):""}function Z3(e){switch(e.tag){case 5:return Si(e.type);case 16:return Si("Lazy");case 13:return Si("Suspense");case 19:return Si("SuspenseList");case 0:case 2:case 15:return e=Us(e.type,!1),e;case 11:return e=Us(e.type.render,!1),e;case 1:return e=Us(e.type,!0),e;default:return""}}function Ga(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vr:return"Fragment";case yr:return"Portal";case Ya:return"Profiler";case xc:return"StrictMode";case Za:return"Suspense";case Qa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case M2:return(e.displayName||"Context")+".Consumer";case z2:return(e._context.displayName||"Context")+".Provider";case yc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vc:return t=e.displayName||null,t!==null?t:Ga(e.type)||"Memo";case vn:t=e._payload,e=e._init;try{return Ga(e(t))}catch{}}return null}function Q3(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ga(t);case 8:return t===xc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function An(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function N2(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function G3(e){var t=N2(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Eo(e){e._valueTracker||(e._valueTracker=G3(e))}function A2(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=N2(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Sl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xa(e,t){var n=t.checked;return Pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function F1(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=An(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function F2(e,t){t=t.checked,t!=null&&Lc(e,"checked",t,!1)}function Ja(e,t){F2(e,t);var n=An(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?eu(e,t.type,n):t.hasOwnProperty("defaultValue")&&eu(e,t.type,An(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function D1(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function eu(e,t,n){(t!=="number"||Sl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ci=Array.isArray;function Mr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+An(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function tu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(O(91));return Pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function O1(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(O(92));if(Ci(n)){if(1<n.length)throw Error(O(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:An(n)}}function D2(e,t){var n=An(t.value),r=An(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function B1(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function O2(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?O2(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Po,B2=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Po=Po||document.createElement("div"),Po.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Po.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Pi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},X3=["Webkit","ms","Moz","O"];Object.keys(Pi).forEach(function(e){X3.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Pi[t]=Pi[e]})});function U2(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Pi.hasOwnProperty(e)&&Pi[e]?(""+t).trim():t+"px"}function H2(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=U2(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var J3=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ru(e,t){if(t){if(J3[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(O(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(O(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(O(61))}if(t.style!=null&&typeof t.style!="object")throw Error(O(62))}}function iu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ou=null;function wc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var lu=null,_r=null,Nr=null;function U1(e){if(e=mo(e)){if(typeof lu!="function")throw Error(O(280));var t=e.stateNode;t&&(t=fs(t),lu(e.stateNode,e.type,t))}}function V2(e){_r?Nr?Nr.push(e):Nr=[e]:_r=e}function W2(){if(_r){var e=_r,t=Nr;if(Nr=_r=null,U1(e),t)for(e=0;e<t.length;e++)U1(t[e])}}function K2(e,t){return e(t)}function q2(){}var Hs=!1;function Y2(e,t,n){if(Hs)return e(t,n);Hs=!0;try{return K2(e,t,n)}finally{Hs=!1,(_r!==null||Nr!==null)&&(q2(),W2())}}function Wi(e,t){var n=e.stateNode;if(n===null)return null;var r=fs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(O(231,t,typeof n));return n}var su=!1;if(ln)try{var fi={};Object.defineProperty(fi,"passive",{get:function(){su=!0}}),window.addEventListener("test",fi,fi),window.removeEventListener("test",fi,fi)}catch{su=!1}function em(e,t,n,r,i,o,l,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Ti=!1,Cl=null,jl=!1,au=null,tm={onError:function(e){Ti=!0,Cl=e}};function nm(e,t,n,r,i,o,l,a,u){Ti=!1,Cl=null,em.apply(tm,arguments)}function rm(e,t,n,r,i,o,l,a,u){if(nm.apply(this,arguments),Ti){if(Ti){var c=Cl;Ti=!1,Cl=null}else throw Error(O(198));jl||(jl=!0,au=c)}}function cr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Z2(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function H1(e){if(cr(e)!==e)throw Error(O(188))}function im(e){var t=e.alternate;if(!t){if(t=cr(e),t===null)throw Error(O(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return H1(i),e;if(o===r)return H1(i),t;o=o.sibling}throw Error(O(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?e:t}function Q2(e){return e=im(e),e!==null?G2(e):null}function G2(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=G2(e);if(t!==null)return t;e=e.sibling}return null}var X2=vt.unstable_scheduleCallback,V1=vt.unstable_cancelCallback,om=vt.unstable_shouldYield,lm=vt.unstable_requestPaint,Ie=vt.unstable_now,sm=vt.unstable_getCurrentPriorityLevel,kc=vt.unstable_ImmediatePriority,J2=vt.unstable_UserBlockingPriority,$l=vt.unstable_NormalPriority,am=vt.unstable_LowPriority,ef=vt.unstable_IdlePriority,us=null,qt=null;function um(e){if(qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(us,e,void 0,(e.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:pm,cm=Math.log,dm=Math.LN2;function pm(e){return e>>>=0,e===0?32:31-(cm(e)/dm|0)|0}var To=64,Io=4194304;function ji(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function El(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=ji(a):(o&=l,o!==0&&(r=ji(o)))}else l=n&~i,l!==0?r=ji(l):o!==0&&(r=ji(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Nt(t),i=1<<n,r|=e[n],t&=~i;return r}function fm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Nt(o),a=1<<l,u=i[l];u===-1?(!(a&n)||a&r)&&(i[l]=fm(a,t)):u<=t&&(e.expiredLanes|=a),o&=~a}}function uu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function tf(){var e=To;return To<<=1,!(To&4194240)&&(To=64),e}function Vs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Nt(t),e[t]=n}function mm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Nt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function bc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Nt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ge=0;function nf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var rf,Sc,of,lf,sf,cu=!1,Ro=[],$n=null,En=null,Pn=null,Ki=new Map,qi=new Map,kn=[],gm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function W1(e,t){switch(e){case"focusin":case"focusout":$n=null;break;case"dragenter":case"dragleave":En=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":Ki.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qi.delete(t.pointerId)}}function hi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=mo(t),t!==null&&Sc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Lm(e,t,n,r,i){switch(t){case"focusin":return $n=hi($n,e,t,n,r,i),!0;case"dragenter":return En=hi(En,e,t,n,r,i),!0;case"mouseover":return Pn=hi(Pn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ki.set(o,hi(Ki.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,qi.set(o,hi(qi.get(o)||null,e,t,n,r,i)),!0}return!1}function af(e){var t=Yn(e.target);if(t!==null){var n=cr(t);if(n!==null){if(t=n.tag,t===13){if(t=Z2(n),t!==null){e.blockedOn=t,sf(e.priority,function(){of(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ol(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=du(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ou=r,n.target.dispatchEvent(r),ou=null}else return t=mo(n),t!==null&&Sc(t),e.blockedOn=n,!1;t.shift()}return!0}function K1(e,t,n){ol(e)&&n.delete(t)}function xm(){cu=!1,$n!==null&&ol($n)&&($n=null),En!==null&&ol(En)&&(En=null),Pn!==null&&ol(Pn)&&(Pn=null),Ki.forEach(K1),qi.forEach(K1)}function mi(e,t){e.blockedOn===t&&(e.blockedOn=null,cu||(cu=!0,vt.unstable_scheduleCallback(vt.unstable_NormalPriority,xm)))}function Yi(e){function t(i){return mi(i,e)}if(0<Ro.length){mi(Ro[0],e);for(var n=1;n<Ro.length;n++){var r=Ro[n];r.blockedOn===e&&(r.blockedOn=null)}}for($n!==null&&mi($n,e),En!==null&&mi(En,e),Pn!==null&&mi(Pn,e),Ki.forEach(t),qi.forEach(t),n=0;n<kn.length;n++)r=kn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<kn.length&&(n=kn[0],n.blockedOn===null);)af(n),n.blockedOn===null&&kn.shift()}var Ar=dn.ReactCurrentBatchConfig,Pl=!0;function ym(e,t,n,r){var i=ge,o=Ar.transition;Ar.transition=null;try{ge=1,Cc(e,t,n,r)}finally{ge=i,Ar.transition=o}}function vm(e,t,n,r){var i=ge,o=Ar.transition;Ar.transition=null;try{ge=4,Cc(e,t,n,r)}finally{ge=i,Ar.transition=o}}function Cc(e,t,n,r){if(Pl){var i=du(e,t,n,r);if(i===null)ea(e,t,r,Tl,n),W1(e,r);else if(Lm(i,e,t,n,r))r.stopPropagation();else if(W1(e,r),t&4&&-1<gm.indexOf(e)){for(;i!==null;){var o=mo(i);if(o!==null&&rf(o),o=du(e,t,n,r),o===null&&ea(e,t,r,Tl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ea(e,t,r,null,n)}}var Tl=null;function du(e,t,n,r){if(Tl=null,e=wc(r),e=Yn(e),e!==null)if(t=cr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Z2(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Tl=e,null}function uf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sm()){case kc:return 1;case J2:return 4;case $l:case am:return 16;case ef:return 536870912;default:return 16}default:return 16}}var Sn=null,jc=null,ll=null;function cf(){if(ll)return ll;var e,t=jc,n=t.length,r,i="value"in Sn?Sn.value:Sn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return ll=i.slice(e,1<r?1-r:void 0)}function sl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zo(){return!0}function q1(){return!1}function kt(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?zo:q1,this.isPropagationStopped=q1,this}return Pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zo)},persist:function(){},isPersistent:zo}),t}var ri={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$c=kt(ri),ho=Pe({},ri,{view:0,detail:0}),wm=kt(ho),Ws,Ks,gi,cs=Pe({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ec,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gi&&(gi&&e.type==="mousemove"?(Ws=e.screenX-gi.screenX,Ks=e.screenY-gi.screenY):Ks=Ws=0,gi=e),Ws)},movementY:function(e){return"movementY"in e?e.movementY:Ks}}),Y1=kt(cs),km=Pe({},cs,{dataTransfer:0}),bm=kt(km),Sm=Pe({},ho,{relatedTarget:0}),qs=kt(Sm),Cm=Pe({},ri,{animationName:0,elapsedTime:0,pseudoElement:0}),jm=kt(Cm),$m=Pe({},ri,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Em=kt($m),Pm=Pe({},ri,{data:0}),Z1=kt(Pm),Tm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Im={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Rm[e])?!!t[e]:!1}function Ec(){return zm}var Mm=Pe({},ho,{key:function(e){if(e.key){var t=Tm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=sl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Im[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ec,charCode:function(e){return e.type==="keypress"?sl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?sl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_m=kt(Mm),Nm=Pe({},cs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Q1=kt(Nm),Am=Pe({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ec}),Fm=kt(Am),Dm=Pe({},ri,{propertyName:0,elapsedTime:0,pseudoElement:0}),Om=kt(Dm),Bm=Pe({},cs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Um=kt(Bm),Hm=[9,13,27,32],Pc=ln&&"CompositionEvent"in window,Ii=null;ln&&"documentMode"in document&&(Ii=document.documentMode);var Vm=ln&&"TextEvent"in window&&!Ii,df=ln&&(!Pc||Ii&&8<Ii&&11>=Ii),G1=" ",X1=!1;function pf(e,t){switch(e){case"keyup":return Hm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ff(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wr=!1;function Wm(e,t){switch(e){case"compositionend":return ff(t);case"keypress":return t.which!==32?null:(X1=!0,G1);case"textInput":return e=t.data,e===G1&&X1?null:e;default:return null}}function Km(e,t){if(wr)return e==="compositionend"||!Pc&&pf(e,t)?(e=cf(),ll=jc=Sn=null,wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return df&&t.locale!=="ko"?null:t.data;default:return null}}var qm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function J1(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qm[e.type]:t==="textarea"}function hf(e,t,n,r){V2(r),t=Il(t,"onChange"),0<t.length&&(n=new $c("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ri=null,Zi=null;function Ym(e){Cf(e,0)}function ds(e){var t=Sr(e);if(A2(t))return e}function Zm(e,t){if(e==="change")return t}var mf=!1;if(ln){var Ys;if(ln){var Zs="oninput"in document;if(!Zs){var ed=document.createElement("div");ed.setAttribute("oninput","return;"),Zs=typeof ed.oninput=="function"}Ys=Zs}else Ys=!1;mf=Ys&&(!document.documentMode||9<document.documentMode)}function td(){Ri&&(Ri.detachEvent("onpropertychange",gf),Zi=Ri=null)}function gf(e){if(e.propertyName==="value"&&ds(Zi)){var t=[];hf(t,Zi,e,wc(e)),Y2(Ym,t)}}function Qm(e,t,n){e==="focusin"?(td(),Ri=t,Zi=n,Ri.attachEvent("onpropertychange",gf)):e==="focusout"&&td()}function Gm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ds(Zi)}function Xm(e,t){if(e==="click")return ds(t)}function Jm(e,t){if(e==="input"||e==="change")return ds(t)}function e5(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dt=typeof Object.is=="function"?Object.is:e5;function Qi(e,t){if(Dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!qa.call(t,i)||!Dt(e[i],t[i]))return!1}return!0}function nd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rd(e,t){var n=nd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nd(n)}}function Lf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xf(){for(var e=window,t=Sl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Sl(e.document)}return t}function Tc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function t5(e){var t=xf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Lf(n.ownerDocument.documentElement,n)){if(r!==null&&Tc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=rd(n,o);var l=rd(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var n5=ln&&"documentMode"in document&&11>=document.documentMode,kr=null,pu=null,zi=null,fu=!1;function id(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fu||kr==null||kr!==Sl(r)||(r=kr,"selectionStart"in r&&Tc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zi&&Qi(zi,r)||(zi=r,r=Il(pu,"onSelect"),0<r.length&&(t=new $c("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=kr)))}function Mo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var br={animationend:Mo("Animation","AnimationEnd"),animationiteration:Mo("Animation","AnimationIteration"),animationstart:Mo("Animation","AnimationStart"),transitionend:Mo("Transition","TransitionEnd")},Qs={},yf={};ln&&(yf=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function ps(e){if(Qs[e])return Qs[e];if(!br[e])return e;var t=br[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in yf)return Qs[e]=t[n];return e}var vf=ps("animationend"),wf=ps("animationiteration"),kf=ps("animationstart"),bf=ps("transitionend"),Sf=new Map,od="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dn(e,t){Sf.set(e,t),ur(t,[e])}for(var Gs=0;Gs<od.length;Gs++){var Xs=od[Gs],r5=Xs.toLowerCase(),i5=Xs[0].toUpperCase()+Xs.slice(1);Dn(r5,"on"+i5)}Dn(vf,"onAnimationEnd");Dn(wf,"onAnimationIteration");Dn(kf,"onAnimationStart");Dn("dblclick","onDoubleClick");Dn("focusin","onFocus");Dn("focusout","onBlur");Dn(bf,"onTransitionEnd");Ur("onMouseEnter",["mouseout","mouseover"]);Ur("onMouseLeave",["mouseout","mouseover"]);Ur("onPointerEnter",["pointerout","pointerover"]);Ur("onPointerLeave",["pointerout","pointerover"]);ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $i="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),o5=new Set("cancel close invalid load scroll toggle".split(" ").concat($i));function ld(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,rm(r,t,void 0,e),e.currentTarget=null}function Cf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;ld(i,a,c),o=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,c=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;ld(i,a,c),o=u}}}if(jl)throw e=au,jl=!1,au=null,e}function ke(e,t){var n=t[xu];n===void 0&&(n=t[xu]=new Set);var r=e+"__bubble";n.has(r)||(jf(t,e,2,!1),n.add(r))}function Js(e,t,n){var r=0;t&&(r|=4),jf(n,e,r,t)}var _o="_reactListening"+Math.random().toString(36).slice(2);function Gi(e){if(!e[_o]){e[_o]=!0,R2.forEach(function(n){n!=="selectionchange"&&(o5.has(n)||Js(n,!1,e),Js(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_o]||(t[_o]=!0,Js("selectionchange",!1,t))}}function jf(e,t,n,r){switch(uf(t)){case 1:var i=ym;break;case 4:i=vm;break;default:i=Cc}n=i.bind(null,t,n,e),i=void 0,!su||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ea(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Yn(a),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Y2(function(){var c=o,d=wc(n),p=[];e:{var m=Sf.get(e);if(m!==void 0){var f=$c,y=e;switch(e){case"keypress":if(sl(n)===0)break e;case"keydown":case"keyup":f=_m;break;case"focusin":y="focus",f=qs;break;case"focusout":y="blur",f=qs;break;case"beforeblur":case"afterblur":f=qs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Y1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=bm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=Fm;break;case vf:case wf:case kf:f=jm;break;case bf:f=Om;break;case"scroll":f=wm;break;case"wheel":f=Um;break;case"copy":case"cut":case"paste":f=Em;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Q1}var v=(t&4)!==0,C=!v&&e==="scroll",g=v?m!==null?m+"Capture":null:m;v=[];for(var L=c,x;L!==null;){x=L;var b=x.stateNode;if(x.tag===5&&b!==null&&(x=b,g!==null&&(b=Wi(L,g),b!=null&&v.push(Xi(L,b,x)))),C)break;L=L.return}0<v.length&&(m=new f(m,y,null,n,d),p.push({event:m,listeners:v}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",m&&n!==ou&&(y=n.relatedTarget||n.fromElement)&&(Yn(y)||y[sn]))break e;if((f||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,f?(y=n.relatedTarget||n.toElement,f=c,y=y?Yn(y):null,y!==null&&(C=cr(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(f=null,y=c),f!==y)){if(v=Y1,b="onMouseLeave",g="onMouseEnter",L="mouse",(e==="pointerout"||e==="pointerover")&&(v=Q1,b="onPointerLeave",g="onPointerEnter",L="pointer"),C=f==null?m:Sr(f),x=y==null?m:Sr(y),m=new v(b,L+"leave",f,n,d),m.target=C,m.relatedTarget=x,b=null,Yn(d)===c&&(v=new v(g,L+"enter",y,n,d),v.target=x,v.relatedTarget=C,b=v),C=b,f&&y)t:{for(v=f,g=y,L=0,x=v;x;x=hr(x))L++;for(x=0,b=g;b;b=hr(b))x++;for(;0<L-x;)v=hr(v),L--;for(;0<x-L;)g=hr(g),x--;for(;L--;){if(v===g||g!==null&&v===g.alternate)break t;v=hr(v),g=hr(g)}v=null}else v=null;f!==null&&sd(p,m,f,v,!1),y!==null&&C!==null&&sd(p,C,y,v,!0)}}e:{if(m=c?Sr(c):window,f=m.nodeName&&m.nodeName.toLowerCase(),f==="select"||f==="input"&&m.type==="file")var P=Zm;else if(J1(m))if(mf)P=Jm;else{P=Gm;var S=Qm}else(f=m.nodeName)&&f.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(P=Xm);if(P&&(P=P(e,c))){hf(p,P,n,d);break e}S&&S(e,m,c),e==="focusout"&&(S=m._wrapperState)&&S.controlled&&m.type==="number"&&eu(m,"number",m.value)}switch(S=c?Sr(c):window,e){case"focusin":(J1(S)||S.contentEditable==="true")&&(kr=S,pu=c,zi=null);break;case"focusout":zi=pu=kr=null;break;case"mousedown":fu=!0;break;case"contextmenu":case"mouseup":case"dragend":fu=!1,id(p,n,d);break;case"selectionchange":if(n5)break;case"keydown":case"keyup":id(p,n,d)}var $;if(Pc)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else wr?pf(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(df&&n.locale!=="ko"&&(wr||I!=="onCompositionStart"?I==="onCompositionEnd"&&wr&&($=cf()):(Sn=d,jc="value"in Sn?Sn.value:Sn.textContent,wr=!0)),S=Il(c,I),0<S.length&&(I=new Z1(I,e,null,n,d),p.push({event:I,listeners:S}),$?I.data=$:($=ff(n),$!==null&&(I.data=$)))),($=Vm?Wm(e,n):Km(e,n))&&(c=Il(c,"onBeforeInput"),0<c.length&&(d=new Z1("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=$))}Cf(p,t)})}function Xi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Il(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Wi(e,n),o!=null&&r.unshift(Xi(e,o,i)),o=Wi(e,t),o!=null&&r.push(Xi(e,o,i))),e=e.return}return r}function hr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sd(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=Wi(n,o),u!=null&&l.unshift(Xi(n,u,a))):i||(u=Wi(n,o),u!=null&&l.push(Xi(n,u,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var l5=/\r\n?/g,s5=/\u0000|\uFFFD/g;function ad(e){return(typeof e=="string"?e:""+e).replace(l5,`
`).replace(s5,"")}function No(e,t,n){if(t=ad(t),ad(e)!==t&&n)throw Error(O(425))}function Rl(){}var hu=null,mu=null;function gu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Lu=typeof setTimeout=="function"?setTimeout:void 0,a5=typeof clearTimeout=="function"?clearTimeout:void 0,ud=typeof Promise=="function"?Promise:void 0,u5=typeof queueMicrotask=="function"?queueMicrotask:typeof ud<"u"?function(e){return ud.resolve(null).then(e).catch(c5)}:Lu;function c5(e){setTimeout(function(){throw e})}function ta(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Yi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Yi(t)}function Tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function cd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ii=Math.random().toString(36).slice(2),Wt="__reactFiber$"+ii,Ji="__reactProps$"+ii,sn="__reactContainer$"+ii,xu="__reactEvents$"+ii,d5="__reactListeners$"+ii,p5="__reactHandles$"+ii;function Yn(e){var t=e[Wt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[sn]||n[Wt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=cd(e);e!==null;){if(n=e[Wt])return n;e=cd(e)}return t}e=n,n=e.parentNode}return null}function mo(e){return e=e[Wt]||e[sn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Sr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(O(33))}function fs(e){return e[Ji]||null}var yu=[],Cr=-1;function On(e){return{current:e}}function Se(e){0>Cr||(e.current=yu[Cr],yu[Cr]=null,Cr--)}function ye(e,t){Cr++,yu[Cr]=e.current,e.current=t}var Fn={},Ge=On(Fn),st=On(!1),tr=Fn;function Hr(e,t){var n=e.type.contextTypes;if(!n)return Fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function at(e){return e=e.childContextTypes,e!=null}function zl(){Se(st),Se(Ge)}function dd(e,t,n){if(Ge.current!==Fn)throw Error(O(168));ye(Ge,t),ye(st,n)}function $f(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(O(108,Q3(e)||"Unknown",i));return Pe({},n,r)}function Ml(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fn,tr=Ge.current,ye(Ge,e),ye(st,st.current),!0}function pd(e,t,n){var r=e.stateNode;if(!r)throw Error(O(169));n?(e=$f(e,t,tr),r.__reactInternalMemoizedMergedChildContext=e,Se(st),Se(Ge),ye(Ge,e)):Se(st),ye(st,n)}var tn=null,hs=!1,na=!1;function Ef(e){tn===null?tn=[e]:tn.push(e)}function f5(e){hs=!0,Ef(e)}function Bn(){if(!na&&tn!==null){na=!0;var e=0,t=ge;try{var n=tn;for(ge=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}tn=null,hs=!1}catch(i){throw tn!==null&&(tn=tn.slice(e+1)),X2(kc,Bn),i}finally{ge=t,na=!1}}return null}var jr=[],$r=0,_l=null,Nl=0,bt=[],St=0,nr=null,nn=1,rn="";function Vn(e,t){jr[$r++]=Nl,jr[$r++]=_l,_l=e,Nl=t}function Pf(e,t,n){bt[St++]=nn,bt[St++]=rn,bt[St++]=nr,nr=e;var r=nn;e=rn;var i=32-Nt(r)-1;r&=~(1<<i),n+=1;var o=32-Nt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,nn=1<<32-Nt(t)+i|n<<i|r,rn=o+e}else nn=1<<o|n<<i|r,rn=e}function Ic(e){e.return!==null&&(Vn(e,1),Pf(e,1,0))}function Rc(e){for(;e===_l;)_l=jr[--$r],jr[$r]=null,Nl=jr[--$r],jr[$r]=null;for(;e===nr;)nr=bt[--St],bt[St]=null,rn=bt[--St],bt[St]=null,nn=bt[--St],bt[St]=null}var yt=null,Lt=null,Ce=!1,_t=null;function Tf(e,t){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function fd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,yt=e,Lt=Tn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,yt=e,Lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=nr!==null?{id:nn,overflow:rn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,yt=e,Lt=null,!0):!1;default:return!1}}function vu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wu(e){if(Ce){var t=Lt;if(t){var n=t;if(!fd(e,t)){if(vu(e))throw Error(O(418));t=Tn(n.nextSibling);var r=yt;t&&fd(e,t)?Tf(r,n):(e.flags=e.flags&-4097|2,Ce=!1,yt=e)}}else{if(vu(e))throw Error(O(418));e.flags=e.flags&-4097|2,Ce=!1,yt=e}}}function hd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;yt=e}function Ao(e){if(e!==yt)return!1;if(!Ce)return hd(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gu(e.type,e.memoizedProps)),t&&(t=Lt)){if(vu(e))throw If(),Error(O(418));for(;t;)Tf(e,t),t=Tn(t.nextSibling)}if(hd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Lt=Tn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Lt=null}}else Lt=yt?Tn(e.stateNode.nextSibling):null;return!0}function If(){for(var e=Lt;e;)e=Tn(e.nextSibling)}function Vr(){Lt=yt=null,Ce=!1}function zc(e){_t===null?_t=[e]:_t.push(e)}var h5=dn.ReactCurrentBatchConfig;function Li(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,e))}return e}function Fo(e,t){throw e=Object.prototype.toString.call(t),Error(O(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function md(e){var t=e._init;return t(e._payload)}function Rf(e){function t(g,L){if(e){var x=g.deletions;x===null?(g.deletions=[L],g.flags|=16):x.push(L)}}function n(g,L){if(!e)return null;for(;L!==null;)t(g,L),L=L.sibling;return null}function r(g,L){for(g=new Map;L!==null;)L.key!==null?g.set(L.key,L):g.set(L.index,L),L=L.sibling;return g}function i(g,L){return g=Mn(g,L),g.index=0,g.sibling=null,g}function o(g,L,x){return g.index=x,e?(x=g.alternate,x!==null?(x=x.index,x<L?(g.flags|=2,L):x):(g.flags|=2,L)):(g.flags|=1048576,L)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,L,x,b){return L===null||L.tag!==6?(L=ua(x,g.mode,b),L.return=g,L):(L=i(L,x),L.return=g,L)}function u(g,L,x,b){var P=x.type;return P===vr?d(g,L,x.props.children,b,x.key):L!==null&&(L.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===vn&&md(P)===L.type)?(b=i(L,x.props),b.ref=Li(g,L,x),b.return=g,b):(b=hl(x.type,x.key,x.props,null,g.mode,b),b.ref=Li(g,L,x),b.return=g,b)}function c(g,L,x,b){return L===null||L.tag!==4||L.stateNode.containerInfo!==x.containerInfo||L.stateNode.implementation!==x.implementation?(L=ca(x,g.mode,b),L.return=g,L):(L=i(L,x.children||[]),L.return=g,L)}function d(g,L,x,b,P){return L===null||L.tag!==7?(L=er(x,g.mode,b,P),L.return=g,L):(L=i(L,x),L.return=g,L)}function p(g,L,x){if(typeof L=="string"&&L!==""||typeof L=="number")return L=ua(""+L,g.mode,x),L.return=g,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case $o:return x=hl(L.type,L.key,L.props,null,g.mode,x),x.ref=Li(g,null,L),x.return=g,x;case yr:return L=ca(L,g.mode,x),L.return=g,L;case vn:var b=L._init;return p(g,b(L._payload),x)}if(Ci(L)||pi(L))return L=er(L,g.mode,x,null),L.return=g,L;Fo(g,L)}return null}function m(g,L,x,b){var P=L!==null?L.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return P!==null?null:a(g,L,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case $o:return x.key===P?u(g,L,x,b):null;case yr:return x.key===P?c(g,L,x,b):null;case vn:return P=x._init,m(g,L,P(x._payload),b)}if(Ci(x)||pi(x))return P!==null?null:d(g,L,x,b,null);Fo(g,x)}return null}function f(g,L,x,b,P){if(typeof b=="string"&&b!==""||typeof b=="number")return g=g.get(x)||null,a(L,g,""+b,P);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case $o:return g=g.get(b.key===null?x:b.key)||null,u(L,g,b,P);case yr:return g=g.get(b.key===null?x:b.key)||null,c(L,g,b,P);case vn:var S=b._init;return f(g,L,x,S(b._payload),P)}if(Ci(b)||pi(b))return g=g.get(x)||null,d(L,g,b,P,null);Fo(L,b)}return null}function y(g,L,x,b){for(var P=null,S=null,$=L,I=L=0,E=null;$!==null&&I<x.length;I++){$.index>I?(E=$,$=null):E=$.sibling;var T=m(g,$,x[I],b);if(T===null){$===null&&($=E);break}e&&$&&T.alternate===null&&t(g,$),L=o(T,L,I),S===null?P=T:S.sibling=T,S=T,$=E}if(I===x.length)return n(g,$),Ce&&Vn(g,I),P;if($===null){for(;I<x.length;I++)$=p(g,x[I],b),$!==null&&(L=o($,L,I),S===null?P=$:S.sibling=$,S=$);return Ce&&Vn(g,I),P}for($=r(g,$);I<x.length;I++)E=f($,g,I,x[I],b),E!==null&&(e&&E.alternate!==null&&$.delete(E.key===null?I:E.key),L=o(E,L,I),S===null?P=E:S.sibling=E,S=E);return e&&$.forEach(function(z){return t(g,z)}),Ce&&Vn(g,I),P}function v(g,L,x,b){var P=pi(x);if(typeof P!="function")throw Error(O(150));if(x=P.call(x),x==null)throw Error(O(151));for(var S=P=null,$=L,I=L=0,E=null,T=x.next();$!==null&&!T.done;I++,T=x.next()){$.index>I?(E=$,$=null):E=$.sibling;var z=m(g,$,T.value,b);if(z===null){$===null&&($=E);break}e&&$&&z.alternate===null&&t(g,$),L=o(z,L,I),S===null?P=z:S.sibling=z,S=z,$=E}if(T.done)return n(g,$),Ce&&Vn(g,I),P;if($===null){for(;!T.done;I++,T=x.next())T=p(g,T.value,b),T!==null&&(L=o(T,L,I),S===null?P=T:S.sibling=T,S=T);return Ce&&Vn(g,I),P}for($=r(g,$);!T.done;I++,T=x.next())T=f($,g,I,T.value,b),T!==null&&(e&&T.alternate!==null&&$.delete(T.key===null?I:T.key),L=o(T,L,I),S===null?P=T:S.sibling=T,S=T);return e&&$.forEach(function(R){return t(g,R)}),Ce&&Vn(g,I),P}function C(g,L,x,b){if(typeof x=="object"&&x!==null&&x.type===vr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case $o:e:{for(var P=x.key,S=L;S!==null;){if(S.key===P){if(P=x.type,P===vr){if(S.tag===7){n(g,S.sibling),L=i(S,x.props.children),L.return=g,g=L;break e}}else if(S.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===vn&&md(P)===S.type){n(g,S.sibling),L=i(S,x.props),L.ref=Li(g,S,x),L.return=g,g=L;break e}n(g,S);break}else t(g,S);S=S.sibling}x.type===vr?(L=er(x.props.children,g.mode,b,x.key),L.return=g,g=L):(b=hl(x.type,x.key,x.props,null,g.mode,b),b.ref=Li(g,L,x),b.return=g,g=b)}return l(g);case yr:e:{for(S=x.key;L!==null;){if(L.key===S)if(L.tag===4&&L.stateNode.containerInfo===x.containerInfo&&L.stateNode.implementation===x.implementation){n(g,L.sibling),L=i(L,x.children||[]),L.return=g,g=L;break e}else{n(g,L);break}else t(g,L);L=L.sibling}L=ca(x,g.mode,b),L.return=g,g=L}return l(g);case vn:return S=x._init,C(g,L,S(x._payload),b)}if(Ci(x))return y(g,L,x,b);if(pi(x))return v(g,L,x,b);Fo(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,L!==null&&L.tag===6?(n(g,L.sibling),L=i(L,x),L.return=g,g=L):(n(g,L),L=ua(x,g.mode,b),L.return=g,g=L),l(g)):n(g,L)}return C}var Wr=Rf(!0),zf=Rf(!1),Al=On(null),Fl=null,Er=null,Mc=null;function _c(){Mc=Er=Fl=null}function Nc(e){var t=Al.current;Se(Al),e._currentValue=t}function ku(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fr(e,t){Fl=e,Mc=Er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(lt=!0),e.firstContext=null)}function Et(e){var t=e._currentValue;if(Mc!==e)if(e={context:e,memoizedValue:t,next:null},Er===null){if(Fl===null)throw Error(O(308));Er=e,Fl.dependencies={lanes:0,firstContext:e}}else Er=Er.next=e;return t}var Zn=null;function Ac(e){Zn===null?Zn=[e]:Zn.push(e)}function Mf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ac(t)):(n.next=i.next,i.next=n),t.interleaved=n,an(e,r)}function an(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wn=!1;function Fc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _f(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function on(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function In(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,an(e,n)}return i=r.interleaved,i===null?(t.next=t,Ac(r)):(t.next=i.next,i.next=t),r.interleaved=t,an(e,n)}function al(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bc(e,n)}}function gd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Dl(e,t,n,r){var i=e.updateQueue;wn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,l===null?o=c:l.next=c,l=u;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==l&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(o!==null){var p=i.baseState;l=0,d=c=u=null,a=o;do{var m=a.lane,f=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,v=a;switch(m=t,f=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){p=y.call(f,p,m);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,m=typeof y=="function"?y.call(f,p,m):y,m==null)break e;p=Pe({},p,m);break e;case 2:wn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else f={eventTime:f,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=f,u=p):d=d.next=f,l|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);ir|=l,e.lanes=l,e.memoizedState=p}}function Ld(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(O(191,i));i.call(r)}}}var go={},Yt=On(go),eo=On(go),to=On(go);function Qn(e){if(e===go)throw Error(O(174));return e}function Dc(e,t){switch(ye(to,t),ye(eo,e),ye(Yt,go),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:nu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=nu(t,e)}Se(Yt),ye(Yt,t)}function Kr(){Se(Yt),Se(eo),Se(to)}function Nf(e){Qn(to.current);var t=Qn(Yt.current),n=nu(t,e.type);t!==n&&(ye(eo,e),ye(Yt,n))}function Oc(e){eo.current===e&&(Se(Yt),Se(eo))}var $e=On(0);function Ol(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ra=[];function Bc(){for(var e=0;e<ra.length;e++)ra[e]._workInProgressVersionPrimary=null;ra.length=0}var ul=dn.ReactCurrentDispatcher,ia=dn.ReactCurrentBatchConfig,rr=0,Ee=null,Ne=null,Oe=null,Bl=!1,Mi=!1,no=0,m5=0;function Ye(){throw Error(O(321))}function Uc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dt(e[n],t[n]))return!1;return!0}function Hc(e,t,n,r,i,o){if(rr=o,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ul.current=e===null||e.memoizedState===null?y5:v5,e=n(r,i),Mi){o=0;do{if(Mi=!1,no=0,25<=o)throw Error(O(301));o+=1,Oe=Ne=null,t.updateQueue=null,ul.current=w5,e=n(r,i)}while(Mi)}if(ul.current=Ul,t=Ne!==null&&Ne.next!==null,rr=0,Oe=Ne=Ee=null,Bl=!1,t)throw Error(O(300));return e}function Vc(){var e=no!==0;return no=0,e}function Ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?Ee.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function Pt(){if(Ne===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Oe===null?Ee.memoizedState:Oe.next;if(t!==null)Oe=t,Ne=e;else{if(e===null)throw Error(O(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Oe===null?Ee.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function ro(e,t){return typeof t=="function"?t(e):t}function oa(e){var t=Pt(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=Ne,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,u=null,c=o;do{var d=c.lane;if((rr&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=p,l=r):u=u.next=p,Ee.lanes|=d,ir|=d}c=c.next}while(c!==null&&c!==o);u===null?l=r:u.next=a,Dt(r,t.memoizedState)||(lt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ee.lanes|=o,ir|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function la(e){var t=Pt(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Dt(o,t.memoizedState)||(lt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Af(){}function Ff(e,t){var n=Ee,r=Pt(),i=t(),o=!Dt(r.memoizedState,i);if(o&&(r.memoizedState=i,lt=!0),r=r.queue,Wc(Bf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,io(9,Of.bind(null,n,r,i,t),void 0,null),Ue===null)throw Error(O(349));rr&30||Df(n,t,i)}return i}function Df(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Of(e,t,n,r){t.value=n,t.getSnapshot=r,Uf(t)&&Hf(e)}function Bf(e,t,n){return n(function(){Uf(t)&&Hf(e)})}function Uf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dt(e,n)}catch{return!0}}function Hf(e){var t=an(e,1);t!==null&&At(t,e,1,-1)}function xd(e){var t=Ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ro,lastRenderedState:e},t.queue=e,e=e.dispatch=x5.bind(null,Ee,e),[t.memoizedState,e]}function io(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Vf(){return Pt().memoizedState}function cl(e,t,n,r){var i=Ht();Ee.flags|=e,i.memoizedState=io(1|t,n,void 0,r===void 0?null:r)}function ms(e,t,n,r){var i=Pt();r=r===void 0?null:r;var o=void 0;if(Ne!==null){var l=Ne.memoizedState;if(o=l.destroy,r!==null&&Uc(r,l.deps)){i.memoizedState=io(t,n,o,r);return}}Ee.flags|=e,i.memoizedState=io(1|t,n,o,r)}function yd(e,t){return cl(8390656,8,e,t)}function Wc(e,t){return ms(2048,8,e,t)}function Wf(e,t){return ms(4,2,e,t)}function Kf(e,t){return ms(4,4,e,t)}function qf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Yf(e,t,n){return n=n!=null?n.concat([e]):null,ms(4,4,qf.bind(null,t,e),n)}function Kc(){}function Zf(e,t){var n=Pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Uc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Qf(e,t){var n=Pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Uc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Gf(e,t,n){return rr&21?(Dt(n,t)||(n=tf(),Ee.lanes|=n,ir|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,lt=!0),e.memoizedState=n)}function g5(e,t){var n=ge;ge=n!==0&&4>n?n:4,e(!0);var r=ia.transition;ia.transition={};try{e(!1),t()}finally{ge=n,ia.transition=r}}function Xf(){return Pt().memoizedState}function L5(e,t,n){var r=zn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Jf(e))e4(t,n);else if(n=Mf(e,t,n,r),n!==null){var i=tt();At(n,e,r,i),t4(n,t,r)}}function x5(e,t,n){var r=zn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jf(e))e4(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,Dt(a,l)){var u=t.interleaved;u===null?(i.next=i,Ac(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Mf(e,t,i,r),n!==null&&(i=tt(),At(n,e,r,i),t4(n,t,r))}}function Jf(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function e4(e,t){Mi=Bl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function t4(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bc(e,n)}}var Ul={readContext:Et,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},y5={readContext:Et,useCallback:function(e,t){return Ht().memoizedState=[e,t===void 0?null:t],e},useContext:Et,useEffect:yd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,cl(4194308,4,qf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cl(4194308,4,e,t)},useInsertionEffect:function(e,t){return cl(4,2,e,t)},useMemo:function(e,t){var n=Ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=L5.bind(null,Ee,e),[r.memoizedState,e]},useRef:function(e){var t=Ht();return e={current:e},t.memoizedState=e},useState:xd,useDebugValue:Kc,useDeferredValue:function(e){return Ht().memoizedState=e},useTransition:function(){var e=xd(!1),t=e[0];return e=g5.bind(null,e[1]),Ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ee,i=Ht();if(Ce){if(n===void 0)throw Error(O(407));n=n()}else{if(n=t(),Ue===null)throw Error(O(349));rr&30||Df(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,yd(Bf.bind(null,r,o,e),[e]),r.flags|=2048,io(9,Of.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ht(),t=Ue.identifierPrefix;if(Ce){var n=rn,r=nn;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=no++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=m5++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},v5={readContext:Et,useCallback:Zf,useContext:Et,useEffect:Wc,useImperativeHandle:Yf,useInsertionEffect:Wf,useLayoutEffect:Kf,useMemo:Qf,useReducer:oa,useRef:Vf,useState:function(){return oa(ro)},useDebugValue:Kc,useDeferredValue:function(e){var t=Pt();return Gf(t,Ne.memoizedState,e)},useTransition:function(){var e=oa(ro)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:Af,useSyncExternalStore:Ff,useId:Xf,unstable_isNewReconciler:!1},w5={readContext:Et,useCallback:Zf,useContext:Et,useEffect:Wc,useImperativeHandle:Yf,useInsertionEffect:Wf,useLayoutEffect:Kf,useMemo:Qf,useReducer:la,useRef:Vf,useState:function(){return la(ro)},useDebugValue:Kc,useDeferredValue:function(e){var t=Pt();return Ne===null?t.memoizedState=e:Gf(t,Ne.memoizedState,e)},useTransition:function(){var e=la(ro)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:Af,useSyncExternalStore:Ff,useId:Xf,unstable_isNewReconciler:!1};function Rt(e,t){if(e&&e.defaultProps){t=Pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function bu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var gs={isMounted:function(e){return(e=e._reactInternals)?cr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=tt(),i=zn(e),o=on(r,i);o.payload=t,n!=null&&(o.callback=n),t=In(e,o,i),t!==null&&(At(t,e,i,r),al(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=tt(),i=zn(e),o=on(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=In(e,o,i),t!==null&&(At(t,e,i,r),al(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=tt(),r=zn(e),i=on(n,r);i.tag=2,t!=null&&(i.callback=t),t=In(e,i,r),t!==null&&(At(t,e,r,n),al(t,e,r))}};function vd(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Qi(n,r)||!Qi(i,o):!0}function n4(e,t,n){var r=!1,i=Fn,o=t.contextType;return typeof o=="object"&&o!==null?o=Et(o):(i=at(t)?tr:Ge.current,r=t.contextTypes,o=(r=r!=null)?Hr(e,i):Fn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=gs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function wd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&gs.enqueueReplaceState(t,t.state,null)}function Su(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Fc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Et(o):(o=at(t)?tr:Ge.current,i.context=Hr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(bu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&gs.enqueueReplaceState(i,i.state,null),Dl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function qr(e,t){try{var n="",r=t;do n+=Z3(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function sa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Cu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var k5=typeof WeakMap=="function"?WeakMap:Map;function r4(e,t,n){n=on(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Vl||(Vl=!0,_u=r),Cu(e,t)},n}function i4(e,t,n){n=on(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Cu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Cu(e,t),typeof r!="function"&&(Rn===null?Rn=new Set([this]):Rn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function kd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new k5;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=N5.bind(null,e,t,n),t.then(e,e))}function bd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Sd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=on(-1,1),t.tag=2,In(n,t,1))),n.lanes|=1),e)}var b5=dn.ReactCurrentOwner,lt=!1;function et(e,t,n,r){t.child=e===null?zf(t,null,n,r):Wr(t,e.child,n,r)}function Cd(e,t,n,r,i){n=n.render;var o=t.ref;return Fr(t,i),r=Hc(e,t,n,r,o,i),n=Vc(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,un(e,t,i)):(Ce&&n&&Ic(t),t.flags|=1,et(e,t,r,i),t.child)}function jd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!e1(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,o4(e,t,o,r,i)):(e=hl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Qi,n(l,r)&&e.ref===t.ref)return un(e,t,i)}return t.flags|=1,e=Mn(o,r),e.ref=t.ref,e.return=t,t.child=e}function o4(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Qi(o,r)&&e.ref===t.ref)if(lt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(lt=!0);else return t.lanes=e.lanes,un(e,t,i)}return ju(e,t,n,r,i)}function l4(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(Tr,gt),gt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ye(Tr,gt),gt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ye(Tr,gt),gt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ye(Tr,gt),gt|=r;return et(e,t,i,n),t.child}function s4(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ju(e,t,n,r,i){var o=at(n)?tr:Ge.current;return o=Hr(t,o),Fr(t,i),n=Hc(e,t,n,r,o,i),r=Vc(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,un(e,t,i)):(Ce&&r&&Ic(t),t.flags|=1,et(e,t,n,i),t.child)}function $d(e,t,n,r,i){if(at(n)){var o=!0;Ml(t)}else o=!1;if(Fr(t,i),t.stateNode===null)dl(e,t),n4(t,n,r),Su(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Et(c):(c=at(n)?tr:Ge.current,c=Hr(t,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==c)&&wd(t,l,r,c),wn=!1;var m=t.memoizedState;l.state=m,Dl(t,r,l,i),u=t.memoizedState,a!==r||m!==u||st.current||wn?(typeof d=="function"&&(bu(t,n,d,r),u=t.memoizedState),(a=wn||vd(t,n,a,r,m,u,c))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,_f(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Rt(t.type,a),l.props=c,p=t.pendingProps,m=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Et(u):(u=at(n)?tr:Ge.current,u=Hr(t,u));var f=n.getDerivedStateFromProps;(d=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==p||m!==u)&&wd(t,l,r,u),wn=!1,m=t.memoizedState,l.state=m,Dl(t,r,l,i);var y=t.memoizedState;a!==p||m!==y||st.current||wn?(typeof f=="function"&&(bu(t,n,f,r),y=t.memoizedState),(c=wn||vd(t,n,c,r,m,y,u)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return $u(e,t,n,r,o,i)}function $u(e,t,n,r,i,o){s4(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&pd(t,n,!1),un(e,t,o);r=t.stateNode,b5.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Wr(t,e.child,null,o),t.child=Wr(t,null,a,o)):et(e,t,a,o),t.memoizedState=r.state,i&&pd(t,n,!0),t.child}function a4(e){var t=e.stateNode;t.pendingContext?dd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&dd(e,t.context,!1),Dc(e,t.containerInfo)}function Ed(e,t,n,r,i){return Vr(),zc(i),t.flags|=256,et(e,t,n,r),t.child}var Eu={dehydrated:null,treeContext:null,retryLane:0};function Pu(e){return{baseLanes:e,cachePool:null,transitions:null}}function u4(e,t,n){var r=t.pendingProps,i=$e.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ye($e,i&1),e===null)return wu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=ys(l,r,0,null),e=er(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Pu(n),t.memoizedState=Eu,e):qc(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return S5(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Mn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Mn(a,o):(o=er(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Pu(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Eu,r}return o=e.child,e=o.sibling,r=Mn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function qc(e,t){return t=ys({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Do(e,t,n,r){return r!==null&&zc(r),Wr(t,e.child,null,n),e=qc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function S5(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=sa(Error(O(422))),Do(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ys({mode:"visible",children:r.children},i,0,null),o=er(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Wr(t,e.child,null,l),t.child.memoizedState=Pu(l),t.memoizedState=Eu,o);if(!(t.mode&1))return Do(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(O(419)),r=sa(o,r,void 0),Do(e,t,l,r)}if(a=(l&e.childLanes)!==0,lt||a){if(r=Ue,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,an(e,i),At(r,e,i,-1))}return Jc(),r=sa(Error(O(421))),Do(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=A5.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Lt=Tn(i.nextSibling),yt=t,Ce=!0,_t=null,e!==null&&(bt[St++]=nn,bt[St++]=rn,bt[St++]=nr,nn=e.id,rn=e.overflow,nr=t),t=qc(t,r.children),t.flags|=4096,t)}function Pd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ku(e.return,t,n)}function aa(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function c4(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(et(e,t,r.children,n),r=$e.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pd(e,n,t);else if(e.tag===19)Pd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ye($e,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ol(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),aa(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ol(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}aa(t,!0,n,null,o);break;case"together":aa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function dl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function un(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ir|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(O(153));if(t.child!==null){for(e=t.child,n=Mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function C5(e,t,n){switch(t.tag){case 3:a4(t),Vr();break;case 5:Nf(t);break;case 1:at(t.type)&&Ml(t);break;case 4:Dc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ye(Al,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ye($e,$e.current&1),t.flags|=128,null):n&t.child.childLanes?u4(e,t,n):(ye($e,$e.current&1),e=un(e,t,n),e!==null?e.sibling:null);ye($e,$e.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return c4(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye($e,$e.current),r)break;return null;case 22:case 23:return t.lanes=0,l4(e,t,n)}return un(e,t,n)}var d4,Tu,p4,f4;d4=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Tu=function(){};p4=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Qn(Yt.current);var o=null;switch(n){case"input":i=Xa(e,i),r=Xa(e,r),o=[];break;case"select":i=Pe({},i,{value:void 0}),r=Pe({},r,{value:void 0}),o=[];break;case"textarea":i=tu(e,i),r=tu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Rl)}ru(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Hi.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Hi.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ke("scroll",e),o||a===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};f4=function(e,t,n,r){n!==r&&(t.flags|=4)};function xi(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function j5(e,t,n){var r=t.pendingProps;switch(Rc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return at(t.type)&&zl(),Ze(t),null;case 3:return r=t.stateNode,Kr(),Se(st),Se(Ge),Bc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ao(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,_t!==null&&(Fu(_t),_t=null))),Tu(e,t),Ze(t),null;case 5:Oc(t);var i=Qn(to.current);if(n=t.type,e!==null&&t.stateNode!=null)p4(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(O(166));return Ze(t),null}if(e=Qn(Yt.current),Ao(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Wt]=t,r[Ji]=o,e=(t.mode&1)!==0,n){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(i=0;i<$i.length;i++)ke($i[i],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":F1(r,o),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ke("invalid",r);break;case"textarea":O1(r,o),ke("invalid",r)}ru(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&No(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&No(r.textContent,a,e),i=["children",""+a]):Hi.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ke("scroll",r)}switch(n){case"input":Eo(r),D1(r,o,!0);break;case"textarea":Eo(r),B1(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Rl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=O2(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Wt]=t,e[Ji]=r,d4(e,t,!1,!1),t.stateNode=e;e:{switch(l=iu(n,r),n){case"dialog":ke("cancel",e),ke("close",e),i=r;break;case"iframe":case"object":case"embed":ke("load",e),i=r;break;case"video":case"audio":for(i=0;i<$i.length;i++)ke($i[i],e);i=r;break;case"source":ke("error",e),i=r;break;case"img":case"image":case"link":ke("error",e),ke("load",e),i=r;break;case"details":ke("toggle",e),i=r;break;case"input":F1(e,r),i=Xa(e,r),ke("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Pe({},r,{value:void 0}),ke("invalid",e);break;case"textarea":O1(e,r),i=tu(e,r),ke("invalid",e);break;default:i=r}ru(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?H2(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&B2(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Vi(e,u):typeof u=="number"&&Vi(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Hi.hasOwnProperty(o)?u!=null&&o==="onScroll"&&ke("scroll",e):u!=null&&Lc(e,o,u,l))}switch(n){case"input":Eo(e),D1(e,r,!1);break;case"textarea":Eo(e),B1(e);break;case"option":r.value!=null&&e.setAttribute("value",""+An(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Mr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Mr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Rl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ze(t),null;case 6:if(e&&t.stateNode!=null)f4(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(O(166));if(n=Qn(to.current),Qn(Yt.current),Ao(t)){if(r=t.stateNode,n=t.memoizedProps,r[Wt]=t,(o=r.nodeValue!==n)&&(e=yt,e!==null))switch(e.tag){case 3:No(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&No(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Wt]=t,t.stateNode=r}return Ze(t),null;case 13:if(Se($e),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&Lt!==null&&t.mode&1&&!(t.flags&128))If(),Vr(),t.flags|=98560,o=!1;else if(o=Ao(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(O(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(O(317));o[Wt]=t}else Vr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ze(t),o=!1}else _t!==null&&(Fu(_t),_t=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||$e.current&1?Fe===0&&(Fe=3):Jc())),t.updateQueue!==null&&(t.flags|=4),Ze(t),null);case 4:return Kr(),Tu(e,t),e===null&&Gi(t.stateNode.containerInfo),Ze(t),null;case 10:return Nc(t.type._context),Ze(t),null;case 17:return at(t.type)&&zl(),Ze(t),null;case 19:if(Se($e),o=t.memoizedState,o===null)return Ze(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)xi(o,!1);else{if(Fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Ol(e),l!==null){for(t.flags|=128,xi(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ye($e,$e.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ie()>Yr&&(t.flags|=128,r=!0,xi(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ol(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Ce)return Ze(t),null}else 2*Ie()-o.renderingStartTime>Yr&&n!==1073741824&&(t.flags|=128,r=!0,xi(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ie(),t.sibling=null,n=$e.current,ye($e,r?n&1|2:n&1),t):(Ze(t),null);case 22:case 23:return Xc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?gt&1073741824&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),null;case 24:return null;case 25:return null}throw Error(O(156,t.tag))}function $5(e,t){switch(Rc(t),t.tag){case 1:return at(t.type)&&zl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kr(),Se(st),Se(Ge),Bc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Oc(t),null;case 13:if(Se($e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(O(340));Vr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Se($e),null;case 4:return Kr(),null;case 10:return Nc(t.type._context),null;case 22:case 23:return Xc(),null;case 24:return null;default:return null}}var Oo=!1,Qe=!1,E5=typeof WeakSet=="function"?WeakSet:Set,W=null;function Pr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(e,t,r)}else n.current=null}function Iu(e,t,n){try{n()}catch(r){Te(e,t,r)}}var Td=!1;function P5(e,t){if(hu=Pl,e=xf(),Tc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,u=-1,c=0,d=0,p=e,m=null;t:for(;;){for(var f;p!==n||i!==0&&p.nodeType!==3||(a=l+i),p!==o||r!==0&&p.nodeType!==3||(u=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(f=p.firstChild)!==null;)m=p,p=f;for(;;){if(p===e)break t;if(m===n&&++c===i&&(a=l),m===o&&++d===r&&(u=l),(f=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=f}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(mu={focusedElem:e,selectionRange:n},Pl=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,C=y.memoizedState,g=t.stateNode,L=g.getSnapshotBeforeUpdate(t.elementType===t.type?v:Rt(t.type,v),C);g.__reactInternalSnapshotBeforeUpdate=L}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(b){Te(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return y=Td,Td=!1,y}function _i(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Iu(t,n,o)}i=i.next}while(i!==r)}}function Ls(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ru(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function h4(e){var t=e.alternate;t!==null&&(e.alternate=null,h4(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Wt],delete t[Ji],delete t[xu],delete t[d5],delete t[p5])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function m4(e){return e.tag===5||e.tag===3||e.tag===4}function Id(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||m4(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Rl));else if(r!==4&&(e=e.child,e!==null))for(zu(e,t,n),e=e.sibling;e!==null;)zu(e,t,n),e=e.sibling}function Mu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Mu(e,t,n),e=e.sibling;e!==null;)Mu(e,t,n),e=e.sibling}var We=null,zt=!1;function gn(e,t,n){for(n=n.child;n!==null;)g4(e,t,n),n=n.sibling}function g4(e,t,n){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(us,n)}catch{}switch(n.tag){case 5:Qe||Pr(n,t);case 6:var r=We,i=zt;We=null,gn(e,t,n),We=r,zt=i,We!==null&&(zt?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(zt?(e=We,n=n.stateNode,e.nodeType===8?ta(e.parentNode,n):e.nodeType===1&&ta(e,n),Yi(e)):ta(We,n.stateNode));break;case 4:r=We,i=zt,We=n.stateNode.containerInfo,zt=!0,gn(e,t,n),We=r,zt=i;break;case 0:case 11:case 14:case 15:if(!Qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Iu(n,t,l),i=i.next}while(i!==r)}gn(e,t,n);break;case 1:if(!Qe&&(Pr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Te(n,t,a)}gn(e,t,n);break;case 21:gn(e,t,n);break;case 22:n.mode&1?(Qe=(r=Qe)||n.memoizedState!==null,gn(e,t,n),Qe=r):gn(e,t,n);break;default:gn(e,t,n)}}function Rd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new E5),t.forEach(function(r){var i=F5.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function It(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:We=a.stateNode,zt=!1;break e;case 3:We=a.stateNode.containerInfo,zt=!0;break e;case 4:We=a.stateNode.containerInfo,zt=!0;break e}a=a.return}if(We===null)throw Error(O(160));g4(o,l,i),We=null,zt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Te(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)L4(t,e),t=t.sibling}function L4(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(It(t,e),Ut(e),r&4){try{_i(3,e,e.return),Ls(3,e)}catch(v){Te(e,e.return,v)}try{_i(5,e,e.return)}catch(v){Te(e,e.return,v)}}break;case 1:It(t,e),Ut(e),r&512&&n!==null&&Pr(n,n.return);break;case 5:if(It(t,e),Ut(e),r&512&&n!==null&&Pr(n,n.return),e.flags&32){var i=e.stateNode;try{Vi(i,"")}catch(v){Te(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&F2(i,o),iu(a,l);var c=iu(a,o);for(l=0;l<u.length;l+=2){var d=u[l],p=u[l+1];d==="style"?H2(i,p):d==="dangerouslySetInnerHTML"?B2(i,p):d==="children"?Vi(i,p):Lc(i,d,p,c)}switch(a){case"input":Ja(i,o);break;case"textarea":D2(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var f=o.value;f!=null?Mr(i,!!o.multiple,f,!1):m!==!!o.multiple&&(o.defaultValue!=null?Mr(i,!!o.multiple,o.defaultValue,!0):Mr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ji]=o}catch(v){Te(e,e.return,v)}}break;case 6:if(It(t,e),Ut(e),r&4){if(e.stateNode===null)throw Error(O(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){Te(e,e.return,v)}}break;case 3:if(It(t,e),Ut(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yi(t.containerInfo)}catch(v){Te(e,e.return,v)}break;case 4:It(t,e),Ut(e);break;case 13:It(t,e),Ut(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Qc=Ie())),r&4&&Rd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Qe=(c=Qe)||d,It(t,e),Qe=c):It(t,e),Ut(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(W=e,d=e.child;d!==null;){for(p=W=d;W!==null;){switch(m=W,f=m.child,m.tag){case 0:case 11:case 14:case 15:_i(4,m,m.return);break;case 1:Pr(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){Te(r,n,v)}}break;case 5:Pr(m,m.return);break;case 22:if(m.memoizedState!==null){Md(p);continue}}f!==null?(f.return=m,W=f):Md(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,u=p.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=U2("display",l))}catch(v){Te(e,e.return,v)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(v){Te(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:It(t,e),Ut(e),r&4&&Rd(e);break;case 21:break;default:It(t,e),Ut(e)}}function Ut(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(m4(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Vi(i,""),r.flags&=-33);var o=Id(e);Mu(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Id(e);zu(e,a,l);break;default:throw Error(O(161))}}catch(u){Te(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function T5(e,t,n){W=e,x4(e)}function x4(e,t,n){for(var r=(e.mode&1)!==0;W!==null;){var i=W,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Oo;if(!l){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Qe;a=Oo;var c=Qe;if(Oo=l,(Qe=u)&&!c)for(W=i;W!==null;)l=W,u=l.child,l.tag===22&&l.memoizedState!==null?_d(i):u!==null?(u.return=l,W=u):_d(i);for(;o!==null;)W=o,x4(o),o=o.sibling;W=i,Oo=a,Qe=c}zd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,W=o):zd(e)}}function zd(e){for(;W!==null;){var t=W;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Qe||Ls(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Qe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Rt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ld(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ld(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Yi(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}Qe||t.flags&512&&Ru(t)}catch(m){Te(t,t.return,m)}}if(t===e){W=null;break}if(n=t.sibling,n!==null){n.return=t.return,W=n;break}W=t.return}}function Md(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var n=t.sibling;if(n!==null){n.return=t.return,W=n;break}W=t.return}}function _d(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ls(4,t)}catch(u){Te(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){Te(t,i,u)}}var o=t.return;try{Ru(t)}catch(u){Te(t,o,u)}break;case 5:var l=t.return;try{Ru(t)}catch(u){Te(t,l,u)}}}catch(u){Te(t,t.return,u)}if(t===e){W=null;break}var a=t.sibling;if(a!==null){a.return=t.return,W=a;break}W=t.return}}var I5=Math.ceil,Hl=dn.ReactCurrentDispatcher,Yc=dn.ReactCurrentOwner,$t=dn.ReactCurrentBatchConfig,ce=0,Ue=null,_e=null,Ke=0,gt=0,Tr=On(0),Fe=0,oo=null,ir=0,xs=0,Zc=0,Ni=null,ot=null,Qc=0,Yr=1/0,Jt=null,Vl=!1,_u=null,Rn=null,Bo=!1,Cn=null,Wl=0,Ai=0,Nu=null,pl=-1,fl=0;function tt(){return ce&6?Ie():pl!==-1?pl:pl=Ie()}function zn(e){return e.mode&1?ce&2&&Ke!==0?Ke&-Ke:h5.transition!==null?(fl===0&&(fl=tf()),fl):(e=ge,e!==0||(e=window.event,e=e===void 0?16:uf(e.type)),e):1}function At(e,t,n,r){if(50<Ai)throw Ai=0,Nu=null,Error(O(185));fo(e,n,r),(!(ce&2)||e!==Ue)&&(e===Ue&&(!(ce&2)&&(xs|=n),Fe===4&&bn(e,Ke)),ut(e,r),n===1&&ce===0&&!(t.mode&1)&&(Yr=Ie()+500,hs&&Bn()))}function ut(e,t){var n=e.callbackNode;hm(e,t);var r=El(e,e===Ue?Ke:0);if(r===0)n!==null&&V1(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&V1(n),t===1)e.tag===0?f5(Nd.bind(null,e)):Ef(Nd.bind(null,e)),u5(function(){!(ce&6)&&Bn()}),n=null;else{switch(nf(r)){case 1:n=kc;break;case 4:n=J2;break;case 16:n=$l;break;case 536870912:n=ef;break;default:n=$l}n=j4(n,y4.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function y4(e,t){if(pl=-1,fl=0,ce&6)throw Error(O(327));var n=e.callbackNode;if(Dr()&&e.callbackNode!==n)return null;var r=El(e,e===Ue?Ke:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Kl(e,r);else{t=r;var i=ce;ce|=2;var o=w4();(Ue!==e||Ke!==t)&&(Jt=null,Yr=Ie()+500,Jn(e,t));do try{M5();break}catch(a){v4(e,a)}while(!0);_c(),Hl.current=o,ce=i,_e!==null?t=0:(Ue=null,Ke=0,t=Fe)}if(t!==0){if(t===2&&(i=uu(e),i!==0&&(r=i,t=Au(e,i))),t===1)throw n=oo,Jn(e,0),bn(e,r),ut(e,Ie()),n;if(t===6)bn(e,r);else{if(i=e.current.alternate,!(r&30)&&!R5(i)&&(t=Kl(e,r),t===2&&(o=uu(e),o!==0&&(r=o,t=Au(e,o))),t===1))throw n=oo,Jn(e,0),bn(e,r),ut(e,Ie()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(O(345));case 2:Wn(e,ot,Jt);break;case 3:if(bn(e,r),(r&130023424)===r&&(t=Qc+500-Ie(),10<t)){if(El(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){tt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Lu(Wn.bind(null,e,ot,Jt),t);break}Wn(e,ot,Jt);break;case 4:if(bn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Nt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*I5(r/1960))-r,10<r){e.timeoutHandle=Lu(Wn.bind(null,e,ot,Jt),r);break}Wn(e,ot,Jt);break;case 5:Wn(e,ot,Jt);break;default:throw Error(O(329))}}}return ut(e,Ie()),e.callbackNode===n?y4.bind(null,e):null}function Au(e,t){var n=Ni;return e.current.memoizedState.isDehydrated&&(Jn(e,t).flags|=256),e=Kl(e,t),e!==2&&(t=ot,ot=n,t!==null&&Fu(t)),e}function Fu(e){ot===null?ot=e:ot.push.apply(ot,e)}function R5(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Dt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bn(e,t){for(t&=~Zc,t&=~xs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Nt(t),r=1<<n;e[n]=-1,t&=~r}}function Nd(e){if(ce&6)throw Error(O(327));Dr();var t=El(e,0);if(!(t&1))return ut(e,Ie()),null;var n=Kl(e,t);if(e.tag!==0&&n===2){var r=uu(e);r!==0&&(t=r,n=Au(e,r))}if(n===1)throw n=oo,Jn(e,0),bn(e,t),ut(e,Ie()),n;if(n===6)throw Error(O(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wn(e,ot,Jt),ut(e,Ie()),null}function Gc(e,t){var n=ce;ce|=1;try{return e(t)}finally{ce=n,ce===0&&(Yr=Ie()+500,hs&&Bn())}}function or(e){Cn!==null&&Cn.tag===0&&!(ce&6)&&Dr();var t=ce;ce|=1;var n=$t.transition,r=ge;try{if($t.transition=null,ge=1,e)return e()}finally{ge=r,$t.transition=n,ce=t,!(ce&6)&&Bn()}}function Xc(){gt=Tr.current,Se(Tr)}function Jn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,a5(n)),_e!==null)for(n=_e.return;n!==null;){var r=n;switch(Rc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zl();break;case 3:Kr(),Se(st),Se(Ge),Bc();break;case 5:Oc(r);break;case 4:Kr();break;case 13:Se($e);break;case 19:Se($e);break;case 10:Nc(r.type._context);break;case 22:case 23:Xc()}n=n.return}if(Ue=e,_e=e=Mn(e.current,null),Ke=gt=t,Fe=0,oo=null,Zc=xs=ir=0,ot=Ni=null,Zn!==null){for(t=0;t<Zn.length;t++)if(n=Zn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Zn=null}return e}function v4(e,t){do{var n=_e;try{if(_c(),ul.current=Ul,Bl){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Bl=!1}if(rr=0,Oe=Ne=Ee=null,Mi=!1,no=0,Yc.current=null,n===null||n.return===null){Fe=1,oo=t,_e=null;break}e:{var o=e,l=n.return,a=n,u=t;if(t=Ke,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var f=bd(l);if(f!==null){f.flags&=-257,Sd(f,l,a,o,t),f.mode&1&&kd(o,c,t),t=f,u=c;var y=t.updateQueue;if(y===null){var v=new Set;v.add(u),t.updateQueue=v}else y.add(u);break e}else{if(!(t&1)){kd(o,c,t),Jc();break e}u=Error(O(426))}}else if(Ce&&a.mode&1){var C=bd(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Sd(C,l,a,o,t),zc(qr(u,a));break e}}o=u=qr(u,a),Fe!==4&&(Fe=2),Ni===null?Ni=[o]:Ni.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=r4(o,u,t);gd(o,g);break e;case 1:a=u;var L=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof L.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Rn===null||!Rn.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=i4(o,a,t);gd(o,b);break e}}o=o.return}while(o!==null)}b4(n)}catch(P){t=P,_e===n&&n!==null&&(_e=n=n.return);continue}break}while(!0)}function w4(){var e=Hl.current;return Hl.current=Ul,e===null?Ul:e}function Jc(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),Ue===null||!(ir&268435455)&&!(xs&268435455)||bn(Ue,Ke)}function Kl(e,t){var n=ce;ce|=2;var r=w4();(Ue!==e||Ke!==t)&&(Jt=null,Jn(e,t));do try{z5();break}catch(i){v4(e,i)}while(!0);if(_c(),ce=n,Hl.current=r,_e!==null)throw Error(O(261));return Ue=null,Ke=0,Fe}function z5(){for(;_e!==null;)k4(_e)}function M5(){for(;_e!==null&&!om();)k4(_e)}function k4(e){var t=C4(e.alternate,e,gt);e.memoizedProps=e.pendingProps,t===null?b4(e):_e=t,Yc.current=null}function b4(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=$5(n,t),n!==null){n.flags&=32767,_e=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Fe=6,_e=null;return}}else if(n=j5(n,t,gt),n!==null){_e=n;return}if(t=t.sibling,t!==null){_e=t;return}_e=t=e}while(t!==null);Fe===0&&(Fe=5)}function Wn(e,t,n){var r=ge,i=$t.transition;try{$t.transition=null,ge=1,_5(e,t,n,r)}finally{$t.transition=i,ge=r}return null}function _5(e,t,n,r){do Dr();while(Cn!==null);if(ce&6)throw Error(O(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(O(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(mm(e,o),e===Ue&&(_e=Ue=null,Ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Bo||(Bo=!0,j4($l,function(){return Dr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=$t.transition,$t.transition=null;var l=ge;ge=1;var a=ce;ce|=4,Yc.current=null,P5(e,n),L4(n,e),t5(mu),Pl=!!hu,mu=hu=null,e.current=n,T5(n),lm(),ce=a,ge=l,$t.transition=o}else e.current=n;if(Bo&&(Bo=!1,Cn=e,Wl=i),o=e.pendingLanes,o===0&&(Rn=null),um(n.stateNode),ut(e,Ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Vl)throw Vl=!1,e=_u,_u=null,e;return Wl&1&&e.tag!==0&&Dr(),o=e.pendingLanes,o&1?e===Nu?Ai++:(Ai=0,Nu=e):Ai=0,Bn(),null}function Dr(){if(Cn!==null){var e=nf(Wl),t=$t.transition,n=ge;try{if($t.transition=null,ge=16>e?16:e,Cn===null)var r=!1;else{if(e=Cn,Cn=null,Wl=0,ce&6)throw Error(O(331));var i=ce;for(ce|=4,W=e.current;W!==null;){var o=W,l=o.child;if(W.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(W=c;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:_i(8,d,o)}var p=d.child;if(p!==null)p.return=d,W=p;else for(;W!==null;){d=W;var m=d.sibling,f=d.return;if(h4(d),d===c){W=null;break}if(m!==null){m.return=f,W=m;break}W=f}}}var y=o.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var C=v.sibling;v.sibling=null,v=C}while(v!==null)}}W=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,W=l;else e:for(;W!==null;){if(o=W,o.flags&2048)switch(o.tag){case 0:case 11:case 15:_i(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,W=g;break e}W=o.return}}var L=e.current;for(W=L;W!==null;){l=W;var x=l.child;if(l.subtreeFlags&2064&&x!==null)x.return=l,W=x;else e:for(l=L;W!==null;){if(a=W,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ls(9,a)}}catch(P){Te(a,a.return,P)}if(a===l){W=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,W=b;break e}W=a.return}}if(ce=i,Bn(),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(us,e)}catch{}r=!0}return r}finally{ge=n,$t.transition=t}}return!1}function Ad(e,t,n){t=qr(n,t),t=r4(e,t,1),e=In(e,t,1),t=tt(),e!==null&&(fo(e,1,t),ut(e,t))}function Te(e,t,n){if(e.tag===3)Ad(e,e,n);else for(;t!==null;){if(t.tag===3){Ad(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Rn===null||!Rn.has(r))){e=qr(n,e),e=i4(t,e,1),t=In(t,e,1),e=tt(),t!==null&&(fo(t,1,e),ut(t,e));break}}t=t.return}}function N5(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=tt(),e.pingedLanes|=e.suspendedLanes&n,Ue===e&&(Ke&n)===n&&(Fe===4||Fe===3&&(Ke&130023424)===Ke&&500>Ie()-Qc?Jn(e,0):Zc|=n),ut(e,t)}function S4(e,t){t===0&&(e.mode&1?(t=Io,Io<<=1,!(Io&130023424)&&(Io=4194304)):t=1);var n=tt();e=an(e,t),e!==null&&(fo(e,t,n),ut(e,n))}function A5(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),S4(e,n)}function F5(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(t),S4(e,n)}var C4;C4=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||st.current)lt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return lt=!1,C5(e,t,n);lt=!!(e.flags&131072)}else lt=!1,Ce&&t.flags&1048576&&Pf(t,Nl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;dl(e,t),e=t.pendingProps;var i=Hr(t,Ge.current);Fr(t,n),i=Hc(null,t,r,e,i,n);var o=Vc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,at(r)?(o=!0,Ml(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Fc(t),i.updater=gs,t.stateNode=i,i._reactInternals=t,Su(t,r,e,n),t=$u(null,t,r,!0,o,n)):(t.tag=0,Ce&&o&&Ic(t),et(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(dl(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=O5(r),e=Rt(r,e),i){case 0:t=ju(null,t,r,e,n);break e;case 1:t=$d(null,t,r,e,n);break e;case 11:t=Cd(null,t,r,e,n);break e;case 14:t=jd(null,t,r,Rt(r.type,e),n);break e}throw Error(O(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),ju(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),$d(e,t,r,i,n);case 3:e:{if(a4(t),e===null)throw Error(O(387));r=t.pendingProps,o=t.memoizedState,i=o.element,_f(e,t),Dl(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=qr(Error(O(423)),t),t=Ed(e,t,r,n,i);break e}else if(r!==i){i=qr(Error(O(424)),t),t=Ed(e,t,r,n,i);break e}else for(Lt=Tn(t.stateNode.containerInfo.firstChild),yt=t,Ce=!0,_t=null,n=zf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vr(),r===i){t=un(e,t,n);break e}et(e,t,r,n)}t=t.child}return t;case 5:return Nf(t),e===null&&wu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,gu(r,i)?l=null:o!==null&&gu(r,o)&&(t.flags|=32),s4(e,t),et(e,t,l,n),t.child;case 6:return e===null&&wu(t),null;case 13:return u4(e,t,n);case 4:return Dc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wr(t,null,r,n):et(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),Cd(e,t,r,i,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,ye(Al,r._currentValue),r._currentValue=l,o!==null)if(Dt(o.value,l)){if(o.children===i.children&&!st.current){t=un(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=on(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),ku(o.return,n,t),a.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(O(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),ku(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}et(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Fr(t,n),i=Et(i),r=r(i),t.flags|=1,et(e,t,r,n),t.child;case 14:return r=t.type,i=Rt(r,t.pendingProps),i=Rt(r.type,i),jd(e,t,r,i,n);case 15:return o4(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),dl(e,t),t.tag=1,at(r)?(e=!0,Ml(t)):e=!1,Fr(t,n),n4(t,r,i),Su(t,r,i,n),$u(null,t,r,!0,e,n);case 19:return c4(e,t,n);case 22:return l4(e,t,n)}throw Error(O(156,t.tag))};function j4(e,t){return X2(e,t)}function D5(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,n,r){return new D5(e,t,n,r)}function e1(e){return e=e.prototype,!(!e||!e.isReactComponent)}function O5(e){if(typeof e=="function")return e1(e)?1:0;if(e!=null){if(e=e.$$typeof,e===yc)return 11;if(e===vc)return 14}return 2}function Mn(e,t){var n=e.alternate;return n===null?(n=jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function hl(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")e1(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case vr:return er(n.children,i,o,t);case xc:l=8,i|=8;break;case Ya:return e=jt(12,n,t,i|2),e.elementType=Ya,e.lanes=o,e;case Za:return e=jt(13,n,t,i),e.elementType=Za,e.lanes=o,e;case Qa:return e=jt(19,n,t,i),e.elementType=Qa,e.lanes=o,e;case _2:return ys(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case z2:l=10;break e;case M2:l=9;break e;case yc:l=11;break e;case vc:l=14;break e;case vn:l=16,r=null;break e}throw Error(O(130,e==null?e:typeof e,""))}return t=jt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function er(e,t,n,r){return e=jt(7,e,r,t),e.lanes=n,e}function ys(e,t,n,r){return e=jt(22,e,r,t),e.elementType=_2,e.lanes=n,e.stateNode={isHidden:!1},e}function ua(e,t,n){return e=jt(6,e,null,t),e.lanes=n,e}function ca(e,t,n){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function B5(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vs(0),this.expirationTimes=Vs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function t1(e,t,n,r,i,o,l,a,u){return e=new B5(e,t,n,a,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=jt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fc(o),e}function U5(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $4(e){if(!e)return Fn;e=e._reactInternals;e:{if(cr(e)!==e||e.tag!==1)throw Error(O(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(at(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(O(171))}if(e.tag===1){var n=e.type;if(at(n))return $f(e,n,t)}return t}function E4(e,t,n,r,i,o,l,a,u){return e=t1(n,r,!0,e,i,o,l,a,u),e.context=$4(null),n=e.current,r=tt(),i=zn(n),o=on(r,i),o.callback=t??null,In(n,o,i),e.current.lanes=i,fo(e,i,r),ut(e,r),e}function vs(e,t,n,r){var i=t.current,o=tt(),l=zn(i);return n=$4(n),t.context===null?t.context=n:t.pendingContext=n,t=on(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=In(i,t,l),e!==null&&(At(e,i,l,o),al(e,i,l)),l}function ql(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function n1(e,t){Fd(e,t),(e=e.alternate)&&Fd(e,t)}function H5(){return null}var P4=typeof reportError=="function"?reportError:function(e){console.error(e)};function r1(e){this._internalRoot=e}ws.prototype.render=r1.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(O(409));vs(e,t,null,null)};ws.prototype.unmount=r1.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;or(function(){vs(null,e,null,null)}),t[sn]=null}};function ws(e){this._internalRoot=e}ws.prototype.unstable_scheduleHydration=function(e){if(e){var t=lf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<kn.length&&t!==0&&t<kn[n].priority;n++);kn.splice(n,0,e),n===0&&af(e)}};function i1(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ks(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Dd(){}function V5(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=ql(l);o.call(c)}}var l=E4(t,r,e,0,null,!1,!1,"",Dd);return e._reactRootContainer=l,e[sn]=l.current,Gi(e.nodeType===8?e.parentNode:e),or(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ql(u);a.call(c)}}var u=t1(e,0,!1,null,null,!1,!1,"",Dd);return e._reactRootContainer=u,e[sn]=u.current,Gi(e.nodeType===8?e.parentNode:e),or(function(){vs(t,u,n,r)}),u}function bs(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var u=ql(l);a.call(u)}}vs(t,l,e,i)}else l=V5(n,t,e,i,r);return ql(l)}rf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ji(t.pendingLanes);n!==0&&(bc(t,n|1),ut(t,Ie()),!(ce&6)&&(Yr=Ie()+500,Bn()))}break;case 13:or(function(){var r=an(e,1);if(r!==null){var i=tt();At(r,e,1,i)}}),n1(e,1)}};Sc=function(e){if(e.tag===13){var t=an(e,134217728);if(t!==null){var n=tt();At(t,e,134217728,n)}n1(e,134217728)}};of=function(e){if(e.tag===13){var t=zn(e),n=an(e,t);if(n!==null){var r=tt();At(n,e,t,r)}n1(e,t)}};lf=function(){return ge};sf=function(e,t){var n=ge;try{return ge=e,t()}finally{ge=n}};lu=function(e,t,n){switch(t){case"input":if(Ja(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=fs(r);if(!i)throw Error(O(90));A2(r),Ja(r,i)}}}break;case"textarea":D2(e,n);break;case"select":t=n.value,t!=null&&Mr(e,!!n.multiple,t,!1)}};K2=Gc;q2=or;var W5={usingClientEntryPoint:!1,Events:[mo,Sr,fs,V2,W2,Gc]},yi={findFiberByHostInstance:Yn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},K5={bundleType:yi.bundleType,version:yi.version,rendererPackageName:yi.rendererPackageName,rendererConfig:yi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Q2(e),e===null?null:e.stateNode},findFiberByHostInstance:yi.findFiberByHostInstance||H5,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uo.isDisabled&&Uo.supportsFiber)try{us=Uo.inject(K5),qt=Uo}catch{}}wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W5;wt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!i1(t))throw Error(O(200));return U5(e,t,null,n)};wt.createRoot=function(e,t){if(!i1(e))throw Error(O(299));var n=!1,r="",i=P4;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=t1(e,1,!1,null,null,n,!1,r,i),e[sn]=t.current,Gi(e.nodeType===8?e.parentNode:e),new r1(t)};wt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(O(188)):(e=Object.keys(e).join(","),Error(O(268,e)));return e=Q2(t),e=e===null?null:e.stateNode,e};wt.flushSync=function(e){return or(e)};wt.hydrate=function(e,t,n){if(!ks(t))throw Error(O(200));return bs(null,e,t,!0,n)};wt.hydrateRoot=function(e,t,n){if(!i1(e))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=P4;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=E4(t,null,e,1,n??null,i,!1,o,l),e[sn]=t.current,Gi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ws(t)};wt.render=function(e,t,n){if(!ks(t))throw Error(O(200));return bs(null,e,t,!1,n)};wt.unmountComponentAtNode=function(e){if(!ks(e))throw Error(O(40));return e._reactRootContainer?(or(function(){bs(null,null,e,!1,function(){e._reactRootContainer=null,e[sn]=null})}),!0):!1};wt.unstable_batchedUpdates=Gc;wt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ks(n))throw Error(O(200));if(e==null||e._reactInternals===void 0)throw Error(O(38));return bs(e,t,n,!1,r)};wt.version="18.3.1-next-f1338f8080-20240426";function T4(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T4)}catch(e){console.error(e)}}T4(),P2.exports=wt;var q5=P2.exports,Od=q5;Ka.createRoot=Od.createRoot,Ka.hydrateRoot=Od.hydrateRoot;var Be=function(){return Be=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Be.apply(this,arguments)};function Zr(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var be="-ms-",Fi="-moz-",fe="-webkit-",I4="comm",Ss="rule",o1="decl",Y5="@import",Z5="@namespace",R4="@keyframes",Q5="@layer",z4=Math.abs,l1=String.fromCharCode,Du=Object.assign;function G5(e,t){return Ae(e,0)^45?(((t<<2^Ae(e,0))<<2^Ae(e,1))<<2^Ae(e,2))<<2^Ae(e,3):0}function M4(e){return e.trim()}function en(e,t){return(e=t.exec(e))?e[0]:e}function ie(e,t,n){return e.replace(t,n)}function ml(e,t,n){return e.indexOf(t,n)}function Ae(e,t){return e.charCodeAt(t)|0}function lr(e,t,n){return e.slice(t,n)}function Mt(e){return e.length}function _4(e){return e.length}function Ei(e,t){return t.push(e),e}function X5(e,t){return e.map(t).join("")}function Bd(e,t){return e.filter(function(n){return!en(n,t)})}var Cs=1,Qr=1,N4=0,Tt=0,Me=0,oi="";function js(e,t,n,r,i,o,l,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Cs,column:Qr,length:l,return:"",siblings:a}}function yn(e,t){return Du(js("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function mr(e){for(;e.root;)e=yn(e.root,{children:[e]});Ei(e,e.siblings)}function J5(){return Me}function eg(){return Me=Tt>0?Ae(oi,--Tt):0,Qr--,Me===10&&(Qr=1,Cs--),Me}function Ft(){return Me=Tt<N4?Ae(oi,Tt++):0,Qr++,Me===10&&(Qr=1,Cs++),Me}function jn(){return Ae(oi,Tt)}function gl(){return Tt}function $s(e,t){return lr(oi,e,t)}function lo(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function tg(e){return Cs=Qr=1,N4=Mt(oi=e),Tt=0,[]}function ng(e){return oi="",e}function da(e){return M4($s(Tt-1,Ou(e===91?e+2:e===40?e+1:e)))}function rg(e){for(;(Me=jn())&&Me<33;)Ft();return lo(e)>2||lo(Me)>3?"":" "}function ig(e,t){for(;--t&&Ft()&&!(Me<48||Me>102||Me>57&&Me<65||Me>70&&Me<97););return $s(e,gl()+(t<6&&jn()==32&&Ft()==32))}function Ou(e){for(;Ft();)switch(Me){case e:return Tt;case 34:case 39:e!==34&&e!==39&&Ou(Me);break;case 40:e===41&&Ou(e);break;case 92:Ft();break}return Tt}function og(e,t){for(;Ft()&&e+Me!==57;)if(e+Me===84&&jn()===47)break;return"/*"+$s(t,Tt-1)+"*"+l1(e===47?e:Ft())}function lg(e){for(;!lo(jn());)Ft();return $s(e,Tt)}function sg(e){return ng(Ll("",null,null,null,[""],e=tg(e),0,[0],e))}function Ll(e,t,n,r,i,o,l,a,u){for(var c=0,d=0,p=l,m=0,f=0,y=0,v=1,C=1,g=1,L=0,x="",b=i,P=o,S=r,$=x;C;)switch(y=L,L=Ft()){case 40:if(y!=108&&Ae($,p-1)==58){ml($+=ie(da(L),"&","&\f"),"&\f",z4(c?a[c-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:$+=da(L);break;case 9:case 10:case 13:case 32:$+=rg(y);break;case 92:$+=ig(gl()-1,7);continue;case 47:switch(jn()){case 42:case 47:Ei(ag(og(Ft(),gl()),t,n,u),u),(lo(y||1)==5||lo(jn()||1)==5)&&Mt($)&&lr($,-1,void 0)!==" "&&($+=" ");break;default:$+="/"}break;case 123*v:a[c++]=Mt($)*g;case 125*v:case 59:case 0:switch(L){case 0:case 125:C=0;case 59+d:g==-1&&($=ie($,/\f/g,"")),f>0&&(Mt($)-p||v===0&&y===47)&&Ei(f>32?Hd($+";",r,n,p-1,u):Hd(ie($," ","")+";",r,n,p-2,u),u);break;case 59:$+=";";default:if(Ei(S=Ud($,t,n,c,d,i,a,x,b=[],P=[],p,o),o),L===123)if(d===0)Ll($,t,S,S,b,o,p,a,P);else{switch(m){case 99:if(Ae($,3)===110)break;case 108:if(Ae($,2)===97)break;default:d=0;case 100:case 109:case 115:}d?Ll(e,S,S,r&&Ei(Ud(e,S,S,0,0,i,a,x,i,b=[],p,P),P),i,P,p,a,r?b:P):Ll($,S,S,S,[""],P,0,a,P)}}c=d=f=0,v=g=1,x=$="",p=l;break;case 58:p=1+Mt($),f=y;default:if(v<1){if(L==123)--v;else if(L==125&&v++==0&&eg()==125)continue}switch($+=l1(L),L*v){case 38:g=d>0?1:($+="\f",-1);break;case 44:a[c++]=(Mt($)-1)*g,g=1;break;case 64:jn()===45&&($+=da(Ft())),m=jn(),d=p=Mt(x=$+=lg(gl())),L++;break;case 45:y===45&&Mt($)==2&&(v=0)}}return o}function Ud(e,t,n,r,i,o,l,a,u,c,d,p){for(var m=i-1,f=i===0?o:[""],y=_4(f),v=0,C=0,g=0;v<r;++v)for(var L=0,x=lr(e,m+1,m=z4(C=l[v])),b=e;L<y;++L)(b=M4(C>0?f[L]+" "+x:ie(x,/&\f/g,f[L])))&&(u[g++]=b);return js(e,t,n,i===0?Ss:a,u,c,d,p)}function ag(e,t,n,r){return js(e,t,n,I4,l1(J5()),lr(e,2,-2),0,r)}function Hd(e,t,n,r,i){return js(e,t,n,o1,lr(e,0,r),lr(e,r+1,-1),r,i)}function A4(e,t,n){switch(G5(e,t)){case 5103:return fe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return fe+e+e;case 4855:return fe+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Fi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return fe+e+Fi+e+be+e+e;case 5936:switch(Ae(e,t+11)){case 114:return fe+e+be+ie(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return fe+e+be+ie(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return fe+e+be+ie(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return fe+e+be+e+e;case 6165:return fe+e+be+"flex-"+e+e;case 5187:return fe+e+ie(e,/(\w+).+(:[^]+)/,fe+"box-$1$2"+be+"flex-$1$2")+e;case 5443:return fe+e+be+"flex-item-"+ie(e,/flex-|-self/g,"")+(en(e,/flex-|baseline/)?"":be+"grid-row-"+ie(e,/flex-|-self/g,""))+e;case 4675:return fe+e+be+"flex-line-pack"+ie(e,/align-content|flex-|-self/g,"")+e;case 5548:return fe+e+be+ie(e,"shrink","negative")+e;case 5292:return fe+e+be+ie(e,"basis","preferred-size")+e;case 6060:return fe+"box-"+ie(e,"-grow","")+fe+e+be+ie(e,"grow","positive")+e;case 4554:return fe+ie(e,/([^-])(transform)/g,"$1"+fe+"$2")+e;case 6187:return ie(ie(ie(e,/(zoom-|grab)/,fe+"$1"),/(image-set)/,fe+"$1"),e,"")+e;case 5495:case 3959:return ie(e,/(image-set\([^]*)/,fe+"$1$`$1");case 4968:return ie(ie(e,/(.+:)(flex-)?(.*)/,fe+"box-pack:$3"+be+"flex-pack:$3"),/space-between/,"justify")+fe+e+e;case 4200:if(!en(e,/flex-|baseline/))return be+"grid-column-align"+lr(e,t)+e;break;case 2592:case 3360:return be+ie(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,en(r.props,/grid-\w+-end/)})?~ml(e+(n=n[t].value),"span",0)?e:be+ie(e,"-start","")+e+be+"grid-row-span:"+(~ml(n,"span",0)?en(n,/\d+/):+en(n,/\d+/)-+en(e,/\d+/))+";":be+ie(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return en(r.props,/grid-\w+-start/)})?e:be+ie(ie(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ie(e,/(.+)-inline(.+)/,fe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Mt(e)-1-t>6)switch(Ae(e,t+1)){case 109:if(Ae(e,t+4)!==45)break;case 102:return ie(e,/(.+:)(.+)-([^]+)/,"$1"+fe+"$2-$3$1"+Fi+(Ae(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ml(e,"stretch",0)?A4(ie(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ie(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,a,u,c){return be+i+":"+o+c+(l?be+i+"-span:"+(a?u:+u-+o)+c:"")+e});case 4949:if(Ae(e,t+6)===121)return ie(e,":",":"+fe)+e;break;case 6444:switch(Ae(e,Ae(e,14)===45?18:11)){case 120:return ie(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+fe+(Ae(e,14)===45?"inline-":"")+"box$3$1"+fe+"$2$3$1"+be+"$2box$3")+e;case 100:return ie(e,":",":"+be)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ie(e,"scroll-","scroll-snap-")+e}return e}function Yl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function ug(e,t,n,r){switch(e.type){case Q5:if(e.children.length)break;case Y5:case Z5:case o1:return e.return=e.return||e.value;case I4:return"";case R4:return e.return=e.value+"{"+Yl(e.children,r)+"}";case Ss:if(!Mt(e.value=e.props.join(",")))return""}return Mt(n=Yl(e.children,r))?e.return=e.value+"{"+n+"}":""}function cg(e){var t=_4(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function dg(e){return function(t){t.root||(t=t.return)&&e(t)}}function pg(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case o1:e.return=A4(e.value,e.length,n);return;case R4:return Yl([yn(e,{value:ie(e.value,"@","@"+fe)})],r);case Ss:if(e.length)return X5(n=e.props,function(i){switch(en(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":mr(yn(e,{props:[ie(i,/:(read-\w+)/,":"+Fi+"$1")]})),mr(yn(e,{props:[i]})),Du(e,{props:Bd(n,r)});break;case"::placeholder":mr(yn(e,{props:[ie(i,/:(plac\w+)/,":"+fe+"input-$1")]})),mr(yn(e,{props:[ie(i,/:(plac\w+)/,":"+Fi+"$1")]})),mr(yn(e,{props:[ie(i,/:(plac\w+)/,be+"input-$1")]})),mr(yn(e,{props:[i]})),Du(e,{props:Bd(n,r)});break}return""})}}var fg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},mt={},Gr=typeof process<"u"&&mt!==void 0&&(mt.REACT_APP_SC_ATTR||mt.SC_ATTR)||"data-styled",F4="active",D4="data-styled-version",Es="6.3.8",s1=`/*!sc*/
`,Zl=typeof window<"u"&&typeof document<"u",Zt=Re.createContext===void 0,hg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&mt!==void 0&&mt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&mt.REACT_APP_SC_DISABLE_SPEEDY!==""?mt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&mt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&mt!==void 0&&mt.SC_DISABLE_SPEEDY!==void 0&&mt.SC_DISABLE_SPEEDY!==""&&mt.SC_DISABLE_SPEEDY!=="false"&&mt.SC_DISABLE_SPEEDY),mg={},Ps=Object.freeze([]),Xr=Object.freeze({});function O4(e,t,n){return n===void 0&&(n=Xr),e.theme!==n.theme&&e.theme||t||n.theme}var B4=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),gg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Lg=/(^-|-$)/g;function Vd(e){return e.replace(gg,"-").replace(Lg,"")}var xg=/(a)(d)/gi,Wd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Bu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Wd(t%52)+n;return(Wd(t%52)+n).replace(xg,"$1-$2")}var pa,Ir=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},U4=function(e){return Ir(5381,e)};function a1(e){return Bu(U4(e)>>>0)}function yg(e){return e.displayName||e.name||"Component"}function fa(e){return typeof e=="string"&&!0}var H4=typeof Symbol=="function"&&Symbol.for,V4=H4?Symbol.for("react.memo"):60115,vg=H4?Symbol.for("react.forward_ref"):60112,wg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},kg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},W4={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},bg=((pa={})[vg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},pa[V4]=W4,pa);function Kd(e){return("type"in(t=e)&&t.type.$$typeof)===V4?W4:"$$typeof"in e?bg[e.$$typeof]:wg;var t}var Sg=Object.defineProperty,Cg=Object.getOwnPropertyNames,qd=Object.getOwnPropertySymbols,jg=Object.getOwnPropertyDescriptor,$g=Object.getPrototypeOf,Yd=Object.prototype;function K4(e,t,n){if(typeof t!="string"){if(Yd){var r=$g(t);r&&r!==Yd&&K4(e,r,n)}var i=Cg(t);qd&&(i=i.concat(qd(t)));for(var o=Kd(e),l=Kd(t),a=0;a<i.length;++a){var u=i[a];if(!(u in kg||n&&n[u]||l&&u in l||o&&u in o)){var c=jg(t,u);try{Sg(e,u,c)}catch{}}}}return e}function sr(e){return typeof e=="function"}function u1(e){return typeof e=="object"&&"styledComponentId"in e}function Gn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ql(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function so(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Uu(e,t,n){if(n===void 0&&(n=!1),!n&&!so(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Uu(e[r],t[r]);else if(so(t))for(var r in t)e[r]=Uu(e[r],t[r]);return e}function c1(e,t){Object.defineProperty(e,"toString",{value:t})}function ar(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Eg=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw ar(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),u=(l=0,n.length);l<u;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(s1);return n},e}(),xl=new Map,Gl=new Map,yl=1,Rr=function(e){if(xl.has(e))return xl.get(e);for(;Gl.has(yl);)yl++;var t=yl++;return xl.set(e,t),Gl.set(t,e),t},Pg=function(e,t){yl=t+1,xl.set(e,t),Gl.set(t,e)},Tg="style[".concat(Gr,"][").concat(D4,'="').concat(Es,'"]'),Ig=new RegExp("^".concat(Gr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Rg=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},zg=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(s1),i=[],o=0,l=r.length;o<l;o++){var a=r[o].trim();if(a){var u=a.match(Ig);if(u){var c=0|parseInt(u[1],10),d=u[2];c!==0&&(Pg(d,c),Rg(e,d,u[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},Zd=function(e){for(var t=document.querySelectorAll(Tg),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Gr)!==F4&&(zg(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Mg(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var q4=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var u=Array.from(a.querySelectorAll("style[".concat(Gr,"]")));return u[u.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Gr,F4),r.setAttribute(D4,Es);var l=Mg();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},_g=function(){function e(t){this.element=q4(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw ar(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Ng=function(){function e(t){this.element=q4(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Ag=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Qd=Zl,Fg={isServer:!Zl,useCSSOMInjection:!hg},Xl=function(){function e(t,n,r){t===void 0&&(t=Xr),n===void 0&&(n={});var i=this;this.options=Be(Be({},Fg),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Zl&&Qd&&(Qd=!1,Zd(this)),c1(this,function(){return function(o){for(var l=o.getTag(),a=l.length,u="",c=function(p){var m=function(g){return Gl.get(g)}(p);if(m===void 0)return"continue";var f=o.names.get(m),y=l.getGroup(p);if(f===void 0||!f.size||y.length===0)return"continue";var v="".concat(Gr,".g").concat(p,'[id="').concat(m,'"]'),C="";f!==void 0&&f.forEach(function(g){g.length>0&&(C+="".concat(g,","))}),u+="".concat(y).concat(v,'{content:"').concat(C,'"}').concat(s1)},d=0;d<a;d++)c(d);return u}(i)})}return e.registerId=function(t){return Rr(t)},e.prototype.rehydrate=function(){!this.server&&Zl&&Zd(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Be(Be({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Ag(i):r?new _g(i):new Ng(i)}(this.options),new Eg(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Rr(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Rr(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Rr(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Dg=/&/g,zr=47;function Gd(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var l=e.charCodeAt(o);if(r!==0||i||l!==zr||e.charCodeAt(o+1)!==42)if(i)l===42&&e.charCodeAt(o+1)===zr&&(i=!1,o++);else if(l!==34&&l!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(l===123)n++;else if(l===125&&--n<0)return!0}}else r===0?r=l:r===l&&(r=0);else i=!0,o++}return n!==0||r!==0}function Y4(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Y4(n.children,t)),n})}function Og(e){var t,n,r,i=Xr,o=i.options,l=o===void 0?Xr:o,a=i.plugins,u=a===void 0?Ps:a,c=function(m,f,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):m},d=u.slice();d.push(function(m){m.type===Ss&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(Dg,n).replace(r,c))}),l.prefix&&d.push(pg),d.push(ug);var p=function(m,f,y,v){f===void 0&&(f=""),y===void 0&&(y=""),v===void 0&&(v="&"),t=v,n=f,r=new RegExp("\\".concat(n,"\\b"),"g");var C=function(x){if(!Gd(x))return x;for(var b=x.length,P="",S=0,$=0,I=0,E=!1,T=0;T<b;T++){var z=x.charCodeAt(T);if(I!==0||E||z!==zr||x.charCodeAt(T+1)!==42)if(E)z===42&&x.charCodeAt(T+1)===zr&&(E=!1,T++);else if(z!==34&&z!==39||T!==0&&x.charCodeAt(T-1)===92){if(I===0)if(z===123)$++;else if(z===125){if(--$<0){for(var R=T+1;R<b;){var A=x.charCodeAt(R);if(A===59||A===10)break;R++}R<b&&x.charCodeAt(R)===59&&R++,$=0,T=R-1,S=R;continue}$===0&&(P+=x.substring(S,T+1),S=T+1)}else z===59&&$===0&&(P+=x.substring(S,T+1),S=T+1)}else I===0?I=z:I===z&&(I=0);else E=!0,T++}if(S<b){var N=x.substring(S);Gd(N)||(P+=N)}return P}(function(x){if(x.indexOf("//")===-1)return x;for(var b=x.length,P=[],S=0,$=0,I=0,E=0;$<b;){var T=x.charCodeAt($);if(T!==34&&T!==39||$!==0&&x.charCodeAt($-1)===92)if(I===0)if(T===40&&$>=3&&(32|x.charCodeAt($-1))==108&&(32|x.charCodeAt($-2))==114&&(32|x.charCodeAt($-3))==117)E=1,$++;else if(E>0)T===41?E--:T===40&&E++,$++;else if(T===zr&&$+1<b&&x.charCodeAt($+1)===zr){for($>S&&P.push(x.substring(S,$));$<b&&x.charCodeAt($)!==10;)$++;S=$}else $++;else $++;else I===0?I=T:I===T&&(I=0),$++}return S===0?x:(S<b&&P.push(x.substring(S)),P.join(""))}(m)),g=sg(y||f?"".concat(y," ").concat(f," { ").concat(C," }"):C);l.namespace&&(g=Y4(g,l.namespace));var L=[];return Yl(g,cg(d.concat(dg(function(x){return L.push(x)})))),L};return p.hash=u.length?u.reduce(function(m,f){return f.name||ar(15),Ir(m,f.name)},5381).toString():"",p}var Bg=new Xl,Hu=Og(),Vu={shouldForwardProp:void 0,styleSheet:Bg,stylis:Hu},Z4=Zt?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(Vu)}}:Re.createContext(Vu);Z4.Consumer;Zt||Re.createContext(void 0);function Wu(){return Zt?Vu:Re.useContext(Z4)}var Q4=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Hu);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,c1(this,function(){throw ar(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Hu),this.name+t.hash},e}();function Ug(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in fg||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var Hg=function(e){return e>="A"&&e<="Z"};function Xd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Hg(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var G4=function(e){return e==null||e===!1||e===""},X4=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!G4(r)&&(Array.isArray(r)&&r.isCss||sr(r)?t.push("".concat(Xd(n),":"),r,";"):so(r)?t.push.apply(t,Zr(Zr(["".concat(n," {")],X4(r),!1),["}"],!1)):t.push("".concat(Xd(n),": ").concat(Ug(n,r),";")))}return t};function _n(e,t,n,r){if(G4(e))return[];if(u1(e))return[".".concat(e.styledComponentId)];if(sr(e)){if(!sr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return _n(i,t,n,r)}var o;return e instanceof Q4?n?(e.inject(n,r),[e.getName(r)]):[e]:so(e)?X4(e):Array.isArray(e)?Array.prototype.concat.apply(Ps,e.map(function(l){return _n(l,t,n,r)})):[e.toString()]}function J4(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(sr(n)&&!u1(n))return!1}return!0}var Vg=U4(Es),Wg=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&J4(t),this.componentId=n,this.baseHash=Ir(Vg,n),this.baseStyle=r,Xl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Gn(i,this.staticRulesId);else{var o=Ql(_n(this.rules,t,n,r)),l=Bu(Ir(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}i=Gn(i,l),this.staticRulesId=l}else{for(var u=Ir(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var p=this.rules[d];if(typeof p=="string")c+=p;else if(p){var m=Ql(_n(p,t,n,r));u=Ir(u,m+d),c+=m}}if(c){var f=Bu(u>>>0);if(!n.hasNameForId(this.componentId,f)){var y=r(c,".".concat(f),void 0,this.componentId);n.insertRules(this.componentId,f,y)}i=Gn(i,f)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(Rr(this.componentId)):""}},e}(),ao=Zt?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(void 0)}}:Re.createContext(void 0);ao.Consumer;function Kg(e){if(Zt)return e.children;var t=Re.useContext(ao),n=Re.useMemo(function(){return function(r,i){if(!r)throw ar(14);if(sr(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw ar(8);return i?Be(Be({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?Re.createElement(ao.Provider,{value:n},e.children):null}var ha={};function qg(e,t,n){var r=u1(e),i=e,o=!fa(e),l=t.attrs,a=l===void 0?Ps:l,u=t.componentId,c=u===void 0?function(b,P){var S=typeof b!="string"?"sc":Vd(b);ha[S]=(ha[S]||0)+1;var $="".concat(S,"-").concat(a1(Es+S+ha[S]));return P?"".concat(P,"-").concat($):$}(t.displayName,t.parentComponentId):u,d=t.displayName,p=d===void 0?function(b){return fa(b)?"styled.".concat(b):"Styled(".concat(yg(b),")")}(e):d,m=t.displayName&&t.componentId?"".concat(Vd(t.displayName),"-").concat(t.componentId):t.componentId||c,f=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var C=t.shouldForwardProp;y=function(b,P){return v(b,P)&&C(b,P)}}else y=v}var g=new Wg(n,m,r?i.componentStyle:void 0);function L(b,P){return function(S,$,I){var E=S.attrs,T=S.componentStyle,z=S.defaultProps,R=S.foldedComponentIds,A=S.styledComponentId,N=S.target,F=Zt?void 0:Re.useContext(ao),Y=Wu(),K=S.shouldForwardProp||Y.shouldForwardProp,_=O4($,F,z)||Xr,D=function(G,de,se){for(var je,Le=Be(Be({},de),{className:void 0,theme:se}),te=0;te<G.length;te+=1){var ue=sr(je=G[te])?je(Le):je;for(var X in ue)X==="className"?Le.className=Gn(Le.className,ue[X]):X==="style"?Le.style=Be(Be({},Le.style),ue[X]):Le[X]=ue[X]}return"className"in de&&typeof de.className=="string"&&(Le.className=Gn(Le.className,de.className)),Le}(E,$,_),w=D.as||N,q={};for(var Z in D)D[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&D.theme===_||(Z==="forwardedAs"?q.as=D.forwardedAs:K&&!K(Z,w)||(q[Z]=D[Z]));var j=function(G,de){var se=Wu(),je=G.generateAndInjectStyles(de,se.styleSheet,se.stylis);return je}(T,D),re=j.className,oe=j.css,Q=Gn(R,A);re&&(Q+=" "+re),D.className&&(Q+=" "+D.className),q[fa(w)&&!B4.has(w)?"class":"className"]=Q,I&&(q.ref=I);var H=k.createElement(w,q);return Zt&&oe?Re.createElement(Re.Fragment,null,Re.createElement("style",{precedence:"styled-components",href:"sc-".concat(A,"-").concat(re),children:oe}),H):H}(x,b,P)}L.displayName=p;var x=Re.forwardRef(L);return x.attrs=f,x.componentStyle=g,x.displayName=p,x.shouldForwardProp=y,x.foldedComponentIds=r?Gn(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=m,x.target=r?i.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=r?function(P){for(var S=[],$=1;$<arguments.length;$++)S[$-1]=arguments[$];for(var I=0,E=S;I<E.length;I++)Uu(P,E[I],!0);return P}({},i.defaultProps,b):b}}),c1(x,function(){return".".concat(x.styledComponentId)}),o&&K4(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function Jd(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var e0=function(e){return Object.assign(e,{isCss:!0})};function De(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(sr(e)||so(e))return e0(_n(Jd(Ps,Zr([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?_n(r):e0(_n(Jd(r,t)))}function Ku(e,t,n){if(n===void 0&&(n=Xr),!t)throw ar(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,De.apply(void 0,Zr([i],o,!1)))};return r.attrs=function(i){return Ku(e,t,Be(Be({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Ku(e,t,Be(Be({},n),i))},r}var eh=function(e){return Ku(qg,e)},h=eh;B4.forEach(function(e){h[e]=eh(e)});var Yg=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=J4(t),Xl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Ql(_n(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Xl.registerId(this.componentId+t);var o=this.componentId+t;this.isStatic?r.hasNameForId(o,o)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function Zg(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=De.apply(void 0,Zr([e],t,!1)),i="sc-global-".concat(a1(JSON.stringify(r))),o=new Yg(r,i),l=new WeakMap,a=function(u){var c=Wu(),d=Zt?void 0:Re.useContext(ao),p=l.get(c.styleSheet);if(p===void 0&&(p=c.styleSheet.allocateGSInstance(i),l.set(c.styleSheet,p)),(typeof window>"u"||!c.styleSheet.server)&&function(C,g,L,x,b){if(o.isStatic)o.renderStyles(C,mg,L,b);else{var P=Be(Be({},g),{theme:O4(g,x,a.defaultProps)});o.renderStyles(C,P,L,b)}}(p,u,c.styleSheet,d,c.stylis),!Zt){var m=Re.useRef(!0);Re.useLayoutEffect(function(){return m.current=!1,function(){m.current=!0,queueMicrotask(function(){m.current&&(o.removeStyles(p,c.styleSheet),typeof document<"u"&&document.querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(C){return C.remove()}))})}},[p,c.styleSheet])}if(Zt){var f=i+p,y=typeof window>"u"?c.styleSheet.getTag().getGroup(Rr(f)):"";if(y){var v="".concat(i,"-").concat(p);return Re.createElement("style",{key:v,"data-styled-global":i,precedence:"styled-components",href:v,children:y})}}return null};return Re.memo(a)}function Ve(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ql(De.apply(void 0,Zr([e],t,!1))),i=a1(r);return new Q4(i,r)}/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uo(){return uo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},uo.apply(this,arguments)}var Xn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Xn||(Xn={}));const t0="popstate";function Qg(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:a}=r.location;return qu("",{pathname:o,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Jl(i)}return Xg(t,n,null,e)}function He(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function d1(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Gg(){return Math.random().toString(36).substr(2,8)}function n0(e,t){return{usr:e.state,key:e.key,idx:t}}function qu(e,t,n,r){return n===void 0&&(n=null),uo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Lo(t):t,{state:n,key:t&&t.key||r||Gg()})}function Jl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Lo(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Xg(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=Xn.Pop,u=null,c=d();c==null&&(c=0,l.replaceState(uo({},l.state,{idx:c}),""));function d(){return(l.state||{idx:null}).idx}function p(){a=Xn.Pop;let C=d(),g=C==null?null:C-c;c=C,u&&u({action:a,location:v.location,delta:g})}function m(C,g){a=Xn.Push;let L=qu(v.location,C,g);c=d()+1;let x=n0(L,c),b=v.createHref(L);try{l.pushState(x,"",b)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;i.location.assign(b)}o&&u&&u({action:a,location:v.location,delta:1})}function f(C,g){a=Xn.Replace;let L=qu(v.location,C,g);c=d();let x=n0(L,c),b=v.createHref(L);l.replaceState(x,"",b),o&&u&&u({action:a,location:v.location,delta:0})}function y(C){let g=i.location.origin!=="null"?i.location.origin:i.location.href,L=typeof C=="string"?C:Jl(C);return L=L.replace(/ $/,"%20"),He(g,"No window.location.(origin|href) available to create URL for href: "+L),new URL(L,g)}let v={get action(){return a},get location(){return e(i,l)},listen(C){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(t0,p),u=C,()=>{i.removeEventListener(t0,p),u=null}},createHref(C){return t(i,C)},createURL:y,encodeLocation(C){let g=y(C);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:m,replace:f,go(C){return l.go(C)}};return v}var r0;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(r0||(r0={}));function Jg(e,t,n){return n===void 0&&(n="/"),e6(e,t,n)}function e6(e,t,n,r){let i=typeof t=="string"?Lo(t):t,o=Jr(i.pathname||"/",n);if(o==null)return null;let l=th(e);t6(l);let a=null;for(let u=0;a==null&&u<l.length;++u){let c=p6(o);a=c6(l[u],c)}return a}function th(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,a)=>{let u={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};u.relativePath.startsWith("/")&&(He(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Nn([r,u.relativePath]),d=n.concat(u);o.children&&o.children.length>0&&(He(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),th(o.children,t,d,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:a6(c,o.index),routesMeta:d})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let u of nh(o.path))i(o,l,u)}),t}function nh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=nh(r.join("/")),a=[];return a.push(...l.map(u=>u===""?o:[o,u].join("/"))),i&&a.push(...l),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function t6(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:u6(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const n6=/^:[\w-]+$/,r6=3,i6=2,o6=1,l6=10,s6=-2,i0=e=>e==="*";function a6(e,t){let n=e.split("/"),r=n.length;return n.some(i0)&&(r+=s6),t&&(r+=i6),n.filter(i=>!i0(i)).reduce((i,o)=>i+(n6.test(o)?r6:o===""?o6:l6),r)}function u6(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function c6(e,t,n){let{routesMeta:r}=e,i={},o="/",l=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",p=Yu({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p)return null;Object.assign(i,p.params),l.push({params:i,pathname:Nn([o,p.pathname]),pathnameBase:L6(Nn([o,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(o=Nn([o,p.pathnameBase]))}return l}function Yu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=d6(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:m,isOptional:f}=d;if(m==="*"){let v=a[p]||"";l=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const y=a[p];return f&&!y?c[m]=void 0:c[m]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:l,pattern:e}}function d6(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),d1(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function p6(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return d1(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Jr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const f6=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,h6=e=>f6.test(e);function m6(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Lo(e):e,o;if(n)if(h6(n))o=n;else{if(n.includes("//")){let l=n;n=n.replace(/\/\/+/g,"/"),d1(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?o=o0(n.substring(1),"/"):o=o0(n,t)}else o=t;return{pathname:o,search:x6(r),hash:y6(i)}}function o0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ma(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function g6(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function rh(e,t){let n=g6(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ih(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Lo(e):(i=uo({},e),He(!i.pathname||!i.pathname.includes("?"),ma("?","pathname","search",i)),He(!i.pathname||!i.pathname.includes("#"),ma("#","pathname","hash",i)),He(!i.search||!i.search.includes("#"),ma("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(l==null)a=n;else{let p=t.length-1;if(!r&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}a=p>=0?t[p]:"/"}let u=m6(i,a),c=l&&l!=="/"&&l.endsWith("/"),d=(o||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Nn=e=>e.join("/").replace(/\/\/+/g,"/"),L6=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),x6=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,y6=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function v6(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const oh=["post","put","patch","delete"];new Set(oh);const w6=["get",...oh];new Set(w6);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function es(){return es=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},es.apply(this,arguments)}const Ts=k.createContext(null),lh=k.createContext(null),Un=k.createContext(null),p1=k.createContext(null),pn=k.createContext({outlet:null,matches:[],isDataRoute:!1}),sh=k.createContext(null);function k6(e,t){let{relative:n}=t===void 0?{}:t;xo()||He(!1);let{basename:r,navigator:i}=k.useContext(Un),{hash:o,pathname:l,search:a}=Is(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:Nn([r,l])),i.createHref({pathname:u,search:a,hash:o})}function xo(){return k.useContext(p1)!=null}function dr(){return xo()||He(!1),k.useContext(p1).location}function ah(e){k.useContext(Un).static||k.useLayoutEffect(e)}function Ot(){let{isDataRoute:e}=k.useContext(pn);return e?A6():b6()}function b6(){xo()||He(!1);let e=k.useContext(Ts),{basename:t,future:n,navigator:r}=k.useContext(Un),{matches:i}=k.useContext(pn),{pathname:o}=dr(),l=JSON.stringify(rh(i,n.v7_relativeSplatPath)),a=k.useRef(!1);return ah(()=>{a.current=!0}),k.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let p=ih(c,JSON.parse(l),o,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Nn([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,l,o,e])}const S6=k.createContext(null);function C6(e){let t=k.useContext(pn).outlet;return t&&k.createElement(S6.Provider,{value:e},t)}function yo(){let{matches:e}=k.useContext(pn),t=e[e.length-1];return t?t.params:{}}function Is(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=k.useContext(Un),{matches:i}=k.useContext(pn),{pathname:o}=dr(),l=JSON.stringify(rh(i,r.v7_relativeSplatPath));return k.useMemo(()=>ih(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function j6(e,t){return $6(e)}function $6(e,t,n,r){xo()||He(!1);let{navigator:i}=k.useContext(Un),{matches:o}=k.useContext(pn),l=o[o.length-1],a=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let c=dr(),d;d=c;let p=d.pathname||"/",m=p;if(u!=="/"){let v=u.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(v.length).join("/")}let f=Jg(e,{pathname:m});return R6(f&&f.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:Nn([u,i.encodeLocation?i.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?u:Nn([u,i.encodeLocation?i.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),o,n,r)}function E6(){let e=N6(),t=v6(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:i},n):null,null)}const P6=k.createElement(E6,null);class T6 extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(pn.Provider,{value:this.props.routeContext},k.createElement(sh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function I6(e){let{routeContext:t,match:n,children:r}=e,i=k.useContext(Ts);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(pn.Provider,{value:t},r)}function R6(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=l.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);d>=0||He(!1),l=l.slice(0,Math.min(l.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<l.length;d++){let p=l[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:m,errors:f}=n,y=p.route.loader&&m[p.route.id]===void 0&&(!f||f[p.route.id]===void 0);if(p.route.lazy||y){u=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((d,p,m)=>{let f,y=!1,v=null,C=null;n&&(f=a&&p.route.id?a[p.route.id]:void 0,v=p.route.errorElement||P6,u&&(c<0&&m===0?(F6("route-fallback"),y=!0,C=null):c===m&&(y=!0,C=p.route.hydrateFallbackElement||null)));let g=t.concat(l.slice(0,m+1)),L=()=>{let x;return f?x=v:y?x=C:p.route.Component?x=k.createElement(p.route.Component,null):p.route.element?x=p.route.element:x=d,k.createElement(I6,{match:p,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:x})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?k.createElement(T6,{location:n.location,revalidation:n.revalidation,component:v,error:f,children:L(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):L()},null)}var uh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(uh||{}),ch=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ch||{});function z6(e){let t=k.useContext(Ts);return t||He(!1),t}function M6(e){let t=k.useContext(lh);return t||He(!1),t}function _6(e){let t=k.useContext(pn);return t||He(!1),t}function dh(e){let t=_6(),n=t.matches[t.matches.length-1];return n.route.id||He(!1),n.route.id}function N6(){var e;let t=k.useContext(sh),n=M6(ch.UseRouteError),r=dh();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function A6(){let{router:e}=z6(uh.UseNavigateStable),t=dh(),n=k.useRef(!1);return ah(()=>{n.current=!0}),k.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,es({fromRouteId:t},o)))},[e,t])}const l0={};function F6(e,t,n){l0[e]||(l0[e]=!0)}function D6(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function O6(e){return C6(e.context)}function B6(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Xn.Pop,navigator:o,static:l=!1,future:a}=e;xo()&&He(!1);let u=t.replace(/^\/*/,"/"),c=k.useMemo(()=>({basename:u,navigator:o,static:l,future:es({v7_relativeSplatPath:!1},a)}),[u,a,o,l]);typeof r=="string"&&(r=Lo(r));let{pathname:d="/",search:p="",hash:m="",state:f=null,key:y="default"}=r,v=k.useMemo(()=>{let C=Jr(d,u);return C==null?null:{location:{pathname:C,search:p,hash:m,state:f,key:y},navigationType:i}},[u,d,p,m,f,y,i]);return v==null?null:k.createElement(Un.Provider,{value:c},k.createElement(p1.Provider,{children:n,value:v}))}new Promise(()=>{});/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ts(){return ts=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ts.apply(this,arguments)}function ph(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function U6(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function H6(e,t){return e.button===0&&(!t||t==="_self")&&!U6(e)}const V6=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],W6=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],K6="6";try{window.__reactRouterVersion=K6}catch{}const q6=k.createContext({isTransitioning:!1}),Y6="startTransition",s0=N3[Y6];function Z6(e){let{basename:t,children:n,future:r,window:i}=e,o=k.useRef();o.current==null&&(o.current=Qg({window:i,v5Compat:!0}));let l=o.current,[a,u]=k.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},d=k.useCallback(p=>{c&&s0?s0(()=>u(p)):u(p)},[u,c]);return k.useLayoutEffect(()=>l.listen(d),[l,d]),k.useEffect(()=>D6(r),[r]),k.createElement(B6,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}const Q6=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",G6=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,li=k.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:u,to:c,preventScrollReset:d,viewTransition:p}=t,m=ph(t,V6),{basename:f}=k.useContext(Un),y,v=!1;if(typeof c=="string"&&G6.test(c)&&(y=c,Q6))try{let x=new URL(window.location.href),b=c.startsWith("//")?new URL(x.protocol+c):new URL(c),P=Jr(b.pathname,f);b.origin===x.origin&&P!=null?c=P+b.search+b.hash:v=!0}catch{}let C=k6(c,{relative:i}),g=e7(c,{replace:l,state:a,target:u,preventScrollReset:d,relative:i,viewTransition:p});function L(x){r&&r(x),x.defaultPrevented||g(x)}return k.createElement("a",ts({},m,{href:y||C,onClick:v||o?r:L,ref:n,target:u}))}),X6=k.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:l=!1,style:a,to:u,viewTransition:c,children:d}=t,p=ph(t,W6),m=Is(u,{relative:p.relative}),f=dr(),y=k.useContext(lh),{navigator:v,basename:C}=k.useContext(Un),g=y!=null&&t7(m)&&c===!0,L=v.encodeLocation?v.encodeLocation(m).pathname:m.pathname,x=f.pathname,b=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(x=x.toLowerCase(),b=b?b.toLowerCase():null,L=L.toLowerCase()),b&&C&&(b=Jr(b,C)||b);const P=L!=="/"&&L.endsWith("/")?L.length-1:L.length;let S=x===L||!l&&x.startsWith(L)&&x.charAt(P)==="/",$=b!=null&&(b===L||!l&&b.startsWith(L)&&b.charAt(L.length)==="/"),I={isActive:S,isPending:$,isTransitioning:g},E=S?r:void 0,T;typeof o=="function"?T=o(I):T=[o,S?"active":null,$?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let z=typeof a=="function"?a(I):a;return k.createElement(li,ts({},p,{"aria-current":E,className:T,ref:n,style:z,to:u,viewTransition:c}),typeof d=="function"?d(I):d)});var Zu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Zu||(Zu={}));var a0;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(a0||(a0={}));function J6(e){let t=k.useContext(Ts);return t||He(!1),t}function e7(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,viewTransition:a}=t===void 0?{}:t,u=Ot(),c=dr(),d=Is(e,{relative:l});return k.useCallback(p=>{if(H6(p,n)){p.preventDefault();let m=r!==void 0?r:Jl(c)===Jl(d);u(e,{replace:m,state:i,preventScrollReset:o,relative:l,viewTransition:a})}},[c,u,d,r,i,n,e,o,l,a])}function t7(e,t){t===void 0&&(t={});let n=k.useContext(q6);n==null&&He(!1);let{basename:r}=J6(Zu.useViewTransitionState),i=Is(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=Jr(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=Jr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Yu(i.pathname,l)!=null||Yu(i.pathname,o)!=null}const vl="/assets/logo-CsQHSiKo.png",n7=h.header`
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
`,r7=h(li)`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: 2px;
    border-radius: ${({theme:e})=>e.radii.md};
  }
`,i7=h.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
`,o7=h.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`,l7=h.h1`
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.colors.primary600};
  margin: 0;
  line-height: 1.3;
`,s7=h.p`
  font-size: 0.8rem;
  color: ${({theme:e})=>e.colors.primary400};
  margin: 2px 0 0;
`,a7=h.div`
  width: 48px;
  flex-shrink: 0;
`,u7=()=>s.jsxs(n7,{children:[s.jsx(r7,{to:"/",children:s.jsx(i7,{src:vl,alt:"명상 지도 로고"})}),s.jsxs(o7,{children:[s.jsx(l7,{children:"명상 지도"}),s.jsx(s7,{children:"국내 명상지를 찾아보세요"})]}),s.jsx(a7,{})]}),c7=h.nav`
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
`,ga=h(X6)`
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
`,d7=h(li)`
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
`,p7=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),s.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),f7=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),s.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"}),s.jsx("line",{x1:"8",y1:"6",x2:"16",y2:"6"}),s.jsx("line",{x1:"8",y1:"10",x2:"16",y2:"10"})]}),h7=()=>s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),m7=()=>s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),s.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),g7=()=>{const{pathname:e}=dr(),t=e.startsWith("/meditation/map")||e.startsWith("/meditation/region")||e.startsWith("/blog");return s.jsxs(c7,{role:"navigation","aria-label":"하단 메뉴",children:[s.jsxs(ga,{to:"/",end:!0,children:[s.jsx(p7,{}),s.jsx("span",{children:"홈"})]}),s.jsxs(d7,{to:"/meditation/map",$active:t,children:[s.jsx(f7,{}),s.jsx("span",{children:"지도"})]}),s.jsxs(ga,{to:"/favorites",children:[s.jsx(h7,{}),s.jsx("span",{children:"찜"})]}),s.jsxs(ga,{to:"/profile",children:[s.jsx(m7,{}),s.jsx("span",{children:"마이"})]})]})},L7=h.div`
  min-height: 100vh;
  background: ${({theme:e})=>e.colors.warmCream};
`,x7=h.main`
  padding: 0 20px calc(56px + env(safe-area-inset-bottom, 0px) + 24px);
  background: ${({theme:e})=>e.colors.warmCream};

  @media (max-width: 768px) {
    padding: 0 12px calc(56px + env(safe-area-inset-bottom, 0px) + 24px);
  }
`,y7=()=>{const{pathname:e}=dr(),t=e==="/"||e==="/meditation";return s.jsxs(L7,{children:[t&&s.jsx(u7,{}),s.jsx(x7,{children:s.jsx(O6,{})}),s.jsx(g7,{})]})},v7=h.div`
  background: ${({theme:e})=>e.colors.white};
  padding: 20px;
  border-radius: ${({theme:e})=>e.radii.lg};
  box-shadow: ${({theme:e})=>e.shadow.soft};
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid ${({theme:e})=>e.colors.primary100};
`,Ho=h.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Vo=h.span`
  font-size: 1.1rem;
  font-weight: 600;
`,w7=h.select`
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid ${({theme:e})=>e.colors.border200};
  font-size: 1.1rem;
`,u0=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,c0=h.button`
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
`,k7=h.button`
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
`,b7=h.input`
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
`,S7=h.span`
  font-size: 0.88rem;
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.4;
`,ns=({filters:e,availableTags:t,onChangeKeyword:n,onChangeCategory:r,onToggleTag:i,onChangeSortBy:o,onReset:l})=>{const a=[{label:"전체",value:"all"},{label:"템플스테이",value:"템플스테이"},{label:"명상센터",value:"명상센터"},{label:"프리랜서(공간없음)",value:"프리랜서(공간없음)"},{label:"힐링명상",value:"힐링명상"},{label:"기타",value:"기타"}];return s.jsxs(v7,{children:[s.jsxs(Ho,{children:[s.jsx(Vo,{children:"검색"}),s.jsx(b7,{type:"search",enterKeyHint:"search",autoComplete:"off",placeholder:"이름, 주소, 기관명, 태그, 소개글…",value:e.keyword,onChange:u=>n(u.target.value),"aria-label":"검색어"}),s.jsx(S7,{children:"띄어쓰기로 여러 단어를 넣으면 모두 포함되는 장소만 보여요."})]}),s.jsxs(Ho,{children:[s.jsx(Vo,{children:"카테고리"}),s.jsx(u0,{children:a.map(u=>s.jsx(c0,{type:"button",$active:e.category===u.value,onClick:()=>r(u.value),children:u.label},u.value))})]}),s.jsxs(Ho,{children:[s.jsx(Vo,{children:"해시태그"}),s.jsx(u0,{children:t.map(u=>s.jsxs(c0,{type:"button",$active:e.tags.includes(u),onClick:()=>i(u),children:["#",u]},u))})]}),s.jsxs(Ho,{children:[s.jsx(Vo,{children:"정렬"}),s.jsxs(w7,{value:e.sortBy,onChange:u=>o(u.target.value),children:[s.jsx("option",{value:"recommend",children:"추천순"}),s.jsx("option",{value:"name",children:"이름순"})]})]}),s.jsx(k7,{type:"button",onClick:l,children:"필터 초기화"})]})},C7=h.form`
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

  ${({$layout:e})=>e==="main"?De`
          width: 75%;
          max-width: 420px;
          margin-bottom: 20px;

          &:focus-within {
            width: 100%;
            max-width: 100%;
            border-color: ${({theme:t})=>t.colors.primary400};
            box-shadow: 0 4px 16px rgba(75, 0, 130, 0.12);
          }
        `:De`
          width: 100%;
          max-width: 100%;
          margin-bottom: 16px;

          &:focus-within {
            border-color: ${({theme:t})=>t.colors.primary400};
            box-shadow: 0 4px 16px rgba(75, 0, 130, 0.1);
          }
        `}
`,j7=h.span`
  color: ${({theme:e})=>e.colors.primary600};
  display: grid;
  place-items: center;
  flex-shrink: 0;

  svg {
    width: 18px;
    height: 18px;
  }
`,$7=h.input`
  flex: 1;
  min-width: 0;
  border: none;
  background: transparent;
  font-size: 1.05rem;
  outline: none;
  color: ${({theme:e})=>e.colors.text900};

  &::placeholder {
    color: ${({theme:e})=>e.colors.text700};
    opacity: 0.85;
  }
`,E7=h.button`
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
`,Qu=({value:e,onChange:t,placeholder:n,layout:r="region",id:i,"aria-label":o})=>{const l=a=>{a.preventDefault()};return s.jsxs(C7,{$layout:r,onSubmit:l,children:[s.jsx(j7,{"aria-hidden":!0,children:s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("circle",{cx:"11",cy:"11",r:"7"}),s.jsx("line",{x1:"16.65",y1:"16.65",x2:"21",y2:"21"})]})}),s.jsx($7,{id:i,type:"search",enterKeyHint:"search",autoComplete:"off",placeholder:n,value:e,onChange:a=>t(a.target.value),"aria-label":o??"검색어"}),e?s.jsx(E7,{type:"button",onClick:()=>t(""),"aria-label":"검색어 삭제",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"18",height:"18",children:s.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})}):null]})},P7=[{id:"1",regionId:"KR-11",name:"한강 새벽 명상 라운지",shortDescription:"한강 물결 소리와 함께하는 60분 호흡 명상.",description:"새벽의 고요함 속에서 호흡을 따라가며 몸과 마음을 정리하는 프로그램입니다. 초보자도 참여할 수 있도록 안내자가 동행합니다.",address:"서울 영등포구 여의동로 330",thumbnailUrl:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=60",hashtags:["도심","새벽","호흡","코칭"],themes:["강변","마음챙김"],hasTempleStay:!1,duration:"1시간",organization:{name:"한강 마음연구소"},externalLink:"https://example.com/hanriver",detailSections:[{title:"프로그램",body:`1. **호흡 안내** - 15분
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
- 세종 지역 거주자`}],admissionFee:"1회 체험 별도 문의 (예약·현장 안내)"}],T7=P7;function I7(){return[...T7]}const R7=[{id:"KR-11",name:"서울",slug:"seoul"},{id:"KR-26",name:"부산",slug:"busan"},{id:"KR-27",name:"대구",slug:"daegu"},{id:"KR-28",name:"인천",slug:"incheon"},{id:"KR-29",name:"광주",slug:"gwangju"},{id:"KR-30",name:"대전",slug:"daejeon"},{id:"KR-31",name:"울산",slug:"ulsan"},{id:"KR-41",name:"경기",slug:"gyeonggi"},{id:"KR-42",name:"강원",slug:"gangwon"},{id:"KR-43",name:"충북",slug:"chungbuk"},{id:"KR-44",name:"충남",slug:"chungnam"},{id:"KR-45",name:"전북",slug:"jeonbuk"},{id:"KR-46",name:"전남",slug:"jeonnam"},{id:"KR-47",name:"경북",slug:"gyeongbuk"},{id:"KR-48",name:"경남",slug:"gyeongnam"},{id:"KR-49",name:"제주",slug:"jeju"},{id:"KR-50",name:"세종",slug:"sejong"}],z7=R7;function M7(){return[...z7]}const fh=[{id:"KR-11",minLat:37.41,maxLat:37.7,minLng:126.75,maxLng:127.2},{id:"KR-50",minLat:36.4,maxLat:36.62,minLng:127.18,maxLng:127.32},{id:"KR-30",minLat:36.2,maxLat:36.55,minLng:127.2,maxLng:127.55},{id:"KR-27",minLat:35.7,maxLat:36.04,minLng:128.2,maxLng:128.78},{id:"KR-26",minLat:34.88,maxLat:35.32,minLng:128.8,maxLng:129.3},{id:"KR-31",minLat:35.38,maxLat:35.78,minLng:128.9,maxLng:129.5},{id:"KR-29",minLat:35,maxLat:35.3,minLng:126.5,maxLng:127},{id:"KR-28",minLat:37.2,maxLat:37.7,minLng:126.2,maxLng:126.9},{id:"KR-49",minLat:33,maxLat:33.6,minLng:126,maxLng:127},{id:"KR-41",minLat:36.9,maxLat:38,minLng:126.5,maxLng:127.5},{id:"KR-42",minLat:37,maxLat:38.5,minLng:127,maxLng:131},{id:"KR-43",minLat:36,maxLat:37.1,minLng:127,maxLng:128.4},{id:"KR-44",minLat:35.7,maxLat:36.6,minLng:125.5,maxLng:127.1},{id:"KR-45",minLat:35,maxLat:36,minLng:126.4,maxLng:128},{id:"KR-46",minLat:33,maxLat:35.2,minLng:125,maxLng:128},{id:"KR-47",minLat:35.5,maxLat:38,minLng:127,maxLng:130},{id:"KR-48",minLat:34.4,maxLat:35.5,minLng:127.4,maxLng:130}],_7=(e,t)=>{if(!Number.isFinite(e)||!Number.isFinite(t)||e<32.5||e>38.8||t<123||t>132)return null;for(const n of fh)if(e>=n.minLat&&e<=n.maxLat&&t>=n.minLng&&t<=n.maxLng)return n.id;return null},hh=M7(),ei=I7(),N7={id:"all",name:"전체",slug:"all"},mh=()=>hh,cn=e=>e==="all"?N7:hh.find(t=>t.id===e),A7=()=>ei,F7=e=>e==="all"?[...ei]:ei.filter(t=>t.regionId===e),D7=(e=8)=>ei.slice(0,e),Rs=e=>ei.find(t=>t.id===e),gh=()=>{const e=new Set;return ei.forEach(t=>{t.hashtags.forEach(n=>e.add(n))}),Array.from(e).filter(t=>t!=="템플스테이").sort()},O7=e=>e.hashtags.some(t=>/프리랜서|코칭|개인지도|1:1/.test(t))?"프리랜서(공간없음)":e.hasTempleStay?"템플스테이":e.hashtags.includes("요가")||e.name.includes("요가")?"요가센터":"명상센터",Lh=(e,t)=>e.filter(n=>{var r;if(t.category&&t.category!=="all"){const i=O7(n);if(t.category==="힐링명상"){if(i==="요가센터")return!1}else if(i!==t.category)return!1}if(t.tags.length>0&&!t.tags.some(o=>[...n.hashtags,...n.themes].includes(o)))return!1;if(t.keyword.trim().length>0){const i=t.keyword.trim().toLowerCase().split(/\s+/).filter(c=>c.length>0),o=(n.detailSections??[]).map(c=>`${c.title} ${c.body}`).join(" "),l=(n.programs??[]).map(c=>c.title).join(" "),a=[n.name,n.shortDescription,n.description,n.address,(r=n.organization)==null?void 0:r.name,n.duration,n.admissionFee,n.venueKind,l,...n.hashtags,...n.themes,o].filter(Boolean).join(" ").toLowerCase();if(!i.every(c=>a.includes(c)))return!1}return!0}),xh=(e,t)=>t==="name"?[...e].sort((n,r)=>n.name.localeCompare(r.name,"ko")):e,B7={},d0=e=>{let t;const n=new Set,r=(d,p)=>{const m=typeof d=="function"?d(t):d;if(!Object.is(m,t)){const f=t;t=p??(typeof m!="object"||m===null)?m:Object.assign({},t,m),n.forEach(y=>y(t,f))}},i=()=>t,u={setState:r,getState:i,getInitialState:()=>c,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(B7?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=t=e(r,i,u);return u},U7=e=>e?d0(e):d0;var yh={exports:{}},vh={},wh={exports:{}},kh={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ti=k;function H7(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var V7=typeof Object.is=="function"?Object.is:H7,W7=ti.useState,K7=ti.useEffect,q7=ti.useLayoutEffect,Y7=ti.useDebugValue;function Z7(e,t){var n=t(),r=W7({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return q7(function(){i.value=n,i.getSnapshot=t,La(i)&&o({inst:i})},[e,n,t]),K7(function(){return La(i)&&o({inst:i}),e(function(){La(i)&&o({inst:i})})},[e]),Y7(n),n}function La(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!V7(e,n)}catch{return!0}}function Q7(e,t){return t()}var G7=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Q7:Z7;kh.useSyncExternalStore=ti.useSyncExternalStore!==void 0?ti.useSyncExternalStore:G7;wh.exports=kh;var X7=wh.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zs=k,J7=X7;function e9(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var t9=typeof Object.is=="function"?Object.is:e9,n9=J7.useSyncExternalStore,r9=zs.useRef,i9=zs.useEffect,o9=zs.useMemo,l9=zs.useDebugValue;vh.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=r9(null);if(o.current===null){var l={hasValue:!1,value:null};o.current=l}else l=o.current;o=o9(function(){function u(f){if(!c){if(c=!0,d=f,f=r(f),i!==void 0&&l.hasValue){var y=l.value;if(i(y,f))return p=y}return p=f}if(y=p,t9(d,f))return y;var v=r(f);return i!==void 0&&i(y,v)?(d=f,y):(d=f,p=v)}var c=!1,d,p,m=n===void 0?null:n;return[function(){return u(t())},m===null?void 0:function(){return u(m())}]},[t,n,r,i]);var a=n9(e,o[0],o[1]);return i9(function(){l.hasValue=!0,l.value=a},[a]),l9(a),a};yh.exports=vh;var s9=yh.exports;const a9=ss(s9),bh={},{useDebugValue:u9}=Re,{useSyncExternalStoreWithSelector:c9}=a9;let p0=!1;const d9=e=>e;function p9(e,t=d9,n){(bh?"production":void 0)!=="production"&&n&&!p0&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),p0=!0);const r=c9(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return u9(r),r}const f0=e=>{(bh?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?U7(e):e,n=(r,i)=>p9(t,r,i);return Object.assign(n,t),n},Sh=e=>e?f0(e):f0,Ch="meditation-favorites",f9=()=>{if(typeof window>"u")return[];try{const e=localStorage.getItem(Ch);if(!e)return[];const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}},h9=e=>{if(!(typeof window>"u"))try{localStorage.setItem(Ch,JSON.stringify(e))}catch{}},jh=Sh((e,t)=>({favorites:f9(),toggleFavorite:n=>{e(r=>{const o=r.favorites.includes(n)?r.favorites.filter(l=>l!==n):[...r.favorites,n];return h9(o),{favorites:o}})},isFavorite:n=>t().favorites.includes(n)})),m9=h.button`
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
`,g9=h.span`
  position: relative;
  display: inline-flex;
  width: 19px;
  height: 19px;
`,L9=h.svg`
  position: absolute;
  inset: 0;
  width: 19px;
  height: 19px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  overflow: visible;
`,x9=h.svg`
  position: absolute;
  inset: 0;
  width: 19px;
  height: 19px;
  fill: currentColor;
  stroke: none;
  pointer-events: none;
  opacity: ${({$active:e})=>e?1:0};
  transition: opacity 0.35s ease;
`,h0="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",Ms=({placeId:e})=>{const{isFavorite:t,toggleFavorite:n}=jh(),r=t(e),i=o=>{o.preventDefault(),o.stopPropagation(),n(e)};return s.jsx(m9,{type:"button",$active:r,onClick:i,"aria-label":r?"찜 해제":"찜하기",children:s.jsxs(g9,{children:[s.jsx(L9,{viewBox:"0 0 24 24",children:s.jsx("path",{d:h0})}),s.jsx(x9,{viewBox:"0 0 24 24",$active:r,children:s.jsx("path",{d:h0})})]})})},y9=h.div`
  flex-shrink: 0;
  width: 200px;
  position: relative;
`,v9=h(li)`
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
`,w9=h.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  z-index: 2;
`,k9=h.div`
  width: 100%;
  height: 120px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,b9=h.div`
  padding: 12px;
`,S9=h.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 6px;
  color: ${({theme:e})=>e.colors.text900};
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,C9=h.span`
  font-size: 0.85rem;
  color: ${({theme:e})=>e.colors.text700};
`,j9=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 6px;
`,$9=h.span`
  display: inline-block;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.primary600};
  background: ${({theme:e})=>e.colors.primary50};
  padding: 2px 8px;
  border-radius: ${({theme:e})=>e.radii.pill};
`,E9=({place:e})=>{const t=cn(e.regionId);return s.jsxs(y9,{children:[s.jsx(w9,{children:s.jsx(Ms,{placeId:e.id})}),s.jsxs(v9,{to:`/meditation/place/${e.id}`,children:[s.jsx(k9,{children:s.jsx("img",{src:e.thumbnailUrl,alt:`${e.name} 썸네일`})}),s.jsxs(b9,{children:[s.jsx(S9,{children:e.name}),s.jsx(C9,{children:(t==null?void 0:t.name)??e.regionId}),e.hashtags&&e.hashtags.length>0&&s.jsx(j9,{children:e.hashtags.slice(0,2).map(n=>s.jsx($9,{children:n},n))})]})]})]})},P9=h.article`
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
`,T9=h(li)`
  display: block;
  text-decoration: none;
  color: inherit;

  @media (min-width: 961px) {
    display: flex;
  }
`,I9=h.div`
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
`,R9=h.div`
  padding: 16px 18px;

  @media (min-width: 961px) {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
  }
`,z9=h.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 10px;
  color: ${({theme:e})=>e.colors.text900};
`,M9=h.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 12px;
  margin-bottom: 10px;
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.text700};
`,_9=h.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,N9=h.div`
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
`,A9=h.div`
  position: relative;
`,F9=h.div`
  position: absolute;
  bottom: 100%;
  right: 0;
  margin-bottom: 6px;
`,D9=h.button`
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
`,rs=({place:e})=>{const t=Ot(),n=cn(e.regionId),r=i=>{i.preventDefault(),i.stopPropagation(),t(`/meditation/place/${e.id}`)};return s.jsx(P9,{children:s.jsxs(T9,{to:`/meditation/place/${e.id}`,children:[s.jsx(I9,{children:s.jsx("img",{src:e.thumbnailUrl,alt:`${e.name} 썸네일`})}),s.jsxs(R9,{children:[s.jsx(z9,{children:e.name}),s.jsx(M9,{children:s.jsxs(_9,{children:[s.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),s.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),(n==null?void 0:n.name)??e.regionId]})}),s.jsx(N9,{children:e.hashtags.slice(0,4).map(i=>s.jsx("span",{children:i},i))}),s.jsxs(A9,{children:[s.jsx(F9,{children:s.jsx(Ms,{placeId:e.id})}),s.jsx(D9,{type:"button",onClick:r,children:"예약하기"})]})]})]})})},O9=`<svg width="386" height="630" viewBox="0 0 386 630" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`,B9=h.div`
  cursor: pointer;
  overflow: hidden;
  ${({$maxMapHeight:e})=>e?De`
          max-height: ${e};
        `:void 0}

  svg {
    width: 100%;
    height: auto;
    max-width: 100%;
    display: block;
    margin: 0 auto;
    pointer-events: none;
    ${({$maxMapHeight:e})=>e?De`
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
`,f1=({activeRegionId:e,onSelectRegion:t,maxMapHeight:n})=>{const r=k.useRef(null),i=k.useRef(null);k.useEffect(()=>{const l=r.current;if(!l)return;const a=()=>Array.from(l.querySelectorAll("svg path.land")).filter(v=>v.getAttribute("id")),u=v=>{const C=(v==null?void 0:v.getAttribute("id"))??null;C!==i.current&&(i.current=C,a().forEach(g=>{g.getAttribute("id")===C?g.classList.add("is-hovered"):g.classList.remove("is-hovered")}))},c=(v,C)=>{var $;const g=document.elementFromPoint(v,C);if(($=g==null?void 0:g.matches)!=null&&$.call(g,"path.land"))return g;const L=l.querySelector("svg");if(!L)return null;const x=L.getScreenCTM();if(!x)return null;const b=L.createSVGPoint();b.x=v,b.y=C;const P=b.matrixTransform(x.inverse()),S=a();for(let I=S.length-1;I>=0;I--)if(S[I].isPointInFill(P))return S[I];return null},d=v=>{const C=c(v.clientX,v.clientY);u(C)},p=()=>{u(null)},m=v=>{const C=c(v.clientX,v.clientY);if(C){const g=C.getAttribute("id");g&&t(g,v)}};let f=!1;const y=()=>{if(f)return;if(a().length===0){requestAnimationFrame(y);return}l.addEventListener("pointermove",d),l.addEventListener("pointerleave",p),l.addEventListener("click",m)};return y(),()=>{f=!0,l.removeEventListener("pointermove",d),l.removeEventListener("pointerleave",p),l.removeEventListener("click",m)}},[t]);const o=e==="KR-47"?"KR-48":e;return k.useEffect(()=>{const l=r.current;if(!l)return;l.querySelectorAll("svg path.land").forEach(u=>{u.getAttribute("id")===o?u.classList.add("is-active"):u.classList.remove("is-active")})},[o]),s.jsx(B9,{ref:r,$maxMapHeight:n,role:"img","aria-label":"대한민국 행정구역 지도",dangerouslySetInnerHTML:{__html:O9}})},m0={tags:[],keyword:"",sortBy:"recommend",category:"all"},h1=Sh(e=>({selectedRegionId:void 0,filters:m0,page:1,pageSize:10,isFilterOpen:!1,setRegion:t=>e({selectedRegionId:t,page:1}),setPage:t=>e({page:t}),setPageSize:t=>e({pageSize:t,page:1}),setKeyword:t=>e(n=>({filters:{...n.filters,keyword:t},page:1})),toggleTag:t=>e(n=>{const i=n.filters.tags.includes(t)?n.filters.tags.filter(o=>o!==t):[...n.filters.tags,t];return{filters:{...n.filters,tags:i},page:1}}),clearTags:()=>e(t=>({filters:{...t.filters,tags:[]},page:1})),setSortBy:t=>e(n=>({filters:{...n.filters,sortBy:t},page:1})),setCategory:t=>e(n=>({filters:{...n.filters,category:t},page:1})),resetFilters:()=>e({filters:m0,page:1}),setFilterOpen:t=>e({isFilterOpen:t})})),$h=Ve`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`,U9=h.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 12px 24px;
  color: ${({theme:e})=>e.colors.text900};
  background: ${({theme:e})=>e.colors.warmCream};

  @media (max-width: 960px) {
    padding: 14px 10px 24px;
  }
`,H9=h.div`
  animation: ${$h} 0.35s ease both;
`,V9=h.div`
  display: block;

  @media (min-width: 961px) {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 28px;
    align-items: start;
  }
`,W9=h.section`
  padding: 12px;
  border-radius: ${({theme:e})=>e.radii.lg};
  margin-bottom: 20px;

  @media (min-width: 961px) {
    max-width: 500px;
    width: 100%;
  }
`,K9=h.section`
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
`,q9=h.section`
  margin-top: 28px;
  background: ${({theme:e})=>e.colors.warmCream};
`,Y9=h.h2`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
  margin: 0 0 16px;
`,Z9=h.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 12px;
  -webkit-overflow-scrolling: touch;
`,Q9=h.div`
  @media (min-width: 961px) {
    position: sticky;
    top: 92px;
  }
`,G9=h.button`
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
`,X9=h.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-areas:
    "filter content";
  gap: 28px;
  animation: ${$h} 0.35s ease both;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-areas: "content";
  }
`,J9=h.aside`
  grid-area: filter;

  @media (max-width: 960px) {
    display: none;
  }
`,e8=h.div`
  grid-area: content;
`,t8=h.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,n8=h.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,r8=h.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text700};
`,i8=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,o8=h.p`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.text700};
  margin: 0;
`,l8=h.button`
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
`,s8=h.div`
  position: fixed;
  inset: 0;
  z-index: 70;
`,a8=Ve`from { opacity: 0; } to { opacity: 1; }`,u8=Ve`from { transform: translateX(100%); } to { transform: translateX(0); }`,c8=h.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  animation: ${a8} 0.2s ease;
`,d8=h.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: min(90vw, 360px);
  background: ${({theme:e})=>e.colors.white};
  padding: 20px;
  overflow-y: auto;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);
  animation: ${u8} 0.25s ease;
`,p8=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,f8=h.button`
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
`,h8=h.div`
  height: 1px;
`,g0=()=>{const e=Ot(),{selectedRegionId:t,filters:n,page:r,pageSize:i,setPage:o,setRegion:l,setKeyword:a,toggleTag:u,setSortBy:c,setCategory:d,resetFilters:p,isFilterOpen:m,setFilterOpen:f}=h1(),y=k.useRef(null),[v,C]=k.useState(""),g=mh(),L=[{id:"all",name:"전체"},...g],x=D7(8),b=k.useMemo(()=>gh(),[]),P=k.useMemo(()=>A7(),[]),S=k.useMemo(()=>Lh(P,n),[P,n]),$=k.useMemo(()=>xh(S,n.sortBy),[S,n.sortBy]),I=k.useMemo(()=>$.slice(0,r*i),[$,r,i]),E=I.length<$.length,T=n.keyword.trim().length>0;k.useEffect(()=>{l("all")},[l]),k.useEffect(()=>{const R=["템플스테이","숲 명상","바다 명상","한옥 명상","호흡 수련","걷기 명상"];let A=0,N=0,F=!1,Y;const K=_=>{Y=window.setTimeout(()=>{const D=R[A%R.length];if(F?N-=1:N+=1,C(D.slice(0,Math.max(N,0))),!F&&N>=D.length){F=!0,K(700);return}if(F&&N<=0){F=!1,A+=1,K(300);return}K(F?120:240)},_)};return K(240),()=>window.clearTimeout(Y)},[]),k.useEffect(()=>{o(1)},[n.keyword,n.sortBy,n.tags,n.category,o]),k.useEffect(()=>{const R=y.current;if(!R||!E||!T)return;const A=new IntersectionObserver(N=>{var F;(F=N[0])!=null&&F.isIntersecting&&o(r+1)},{rootMargin:"200px"});return A.observe(R),()=>A.disconnect()},[E,r,o,T]);const z=R=>{l(R),e("/meditation/map")};return s.jsxs(U9,{children:[s.jsx(Qu,{layout:"main",value:n.keyword,onChange:a,placeholder:v||"명상센터 검색"}),T?s.jsxs(X9,{children:[s.jsx(J9,{children:s.jsx(ns,{filters:n,availableTags:b,onChangeKeyword:a,onChangeCategory:d,onToggleTag:u,onChangeSortBy:c,onReset:p})}),s.jsx(e8,{children:s.jsxs(t8,{children:[s.jsxs(i8,{children:[s.jsxs(o8,{children:["총 ",$.length,"곳의 명상센터"]}),s.jsx(l8,{type:"button",onClick:()=>f(!0),"aria-label":"필터",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})})})]}),s.jsxs(n8,{children:[I.length===0&&s.jsx(r8,{children:"조건에 맞는 명상센터가 없어요."}),I.map(R=>s.jsx(rs,{place:R},R.id))]}),E&&s.jsx(h8,{ref:y})]})})]}):s.jsx(H9,{children:s.jsxs(V9,{children:[s.jsx(W9,{children:s.jsx(f1,{activeRegionId:t,onSelectRegion:z})}),s.jsxs(Q9,{children:[s.jsx(K9,{children:L.map(R=>s.jsx(G9,{type:"button",$active:t===R.id,onClick:()=>z(R.id),children:R.name},R.id))}),s.jsxs(q9,{children:[s.jsx(Y9,{children:"인기 명상지"}),s.jsx(Z9,{children:x.map(R=>s.jsx(E9,{place:R},R.id))})]})]})]})}),T&&m&&s.jsxs(s8,{children:[s.jsx(c8,{onClick:()=>f(!1)}),s.jsxs(d8,{children:[s.jsxs(p8,{children:[s.jsx("h3",{style:{margin:0,fontSize:"1.2rem"},children:"필터"}),s.jsx(f8,{type:"button",onClick:()=>f(!1),children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),s.jsx(ns,{filters:n,availableTags:b,onChangeKeyword:a,onChangeCategory:d,onToggleTag:u,onChangeSortBy:c,onReset:p})]})]})]})},m8=h.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 16px 24px;
  color: ${({theme:e})=>e.colors.text900};
`,g8=h.header`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`,L8=h.button`
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
`,x8=h.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: ${({theme:e})=>e.colors.text900};
`,y8=h.section`
  position: relative;
  padding: 12px;
  border-radius: ${({theme:e})=>e.radii.lg};
  margin-bottom: 20px;
  min-height: 280px;
  overflow: visible;

  svg {
    max-height: 360px;
  }
`,v8=h.div`
  position: absolute;
  inset: 0;
  z-index: 5;
  cursor: pointer;
  border-radius: ${({theme:e})=>e.radii.lg};
`,w8=Ve`
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,k8=h.div`
  position: absolute;
  left: ${({$x:e})=>e}px;
  top: ${({$y:e})=>e}px;
  transform: translate(-50%, -100%);
  z-index: 10;
  filter: drop-shadow(0 6px 20px rgba(75, 0, 130, 0.12));
  animation: ${w8} 0.2s ease;
`,b8=h.div`
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
`,S8=h.button`
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
`,C8=h.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.primary700};
  margin: 0 0 4px;
  padding-right: 28px;
`,j8=h.p`
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.text700};
  margin: 0 0 12px;
  line-height: 1.45;
`,$8=h.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,E8=h.button`
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
`,P8=h.section`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`,T8=h.button`
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
`,I8=[{label:"명상지",kind:"place"},{label:"명상센터",kind:"center"},{label:"명상 전문가",kind:"expert"}],R8=()=>{const e=Ot(),t=k.useRef(null),n=[{id:"all",name:"전체"},...mh().map(C=>({id:C.id,name:C.name}))],r=k.useRef(null),i=k.useRef(null),{selectedRegionId:o,setRegion:l,setCategory:a}=h1(),[u,c]=k.useState(null),[d,p]=k.useState({x:0,y:0});k.useEffect(()=>{const C=g=>{var S,$,I;if(!u)return;const L=g.target,x=(S=r.current)==null?void 0:S.contains(L),b=($=t.current)==null?void 0:$.contains(L),P=(I=i.current)==null?void 0:I.contains(L);!x&&!b&&!P&&c(null)};return document.addEventListener("click",C),()=>document.removeEventListener("click",C)},[u]);const m=k.useCallback(C=>{const g=t.current;if(!g)return null;if(C==="all"){const R=g.getBoundingClientRect();return{x:R.width/2,y:R.height/2-40}}const L=g.querySelector(`path.land[id="${C}"]`);if(!L)return null;const x=L.closest("svg");if(!x)return null;const b=L.getBBox();let P=b.x+b.width/2,S=b.y+b.height/2;C==="KR-42"&&(S=b.y+b.height*.65);const $=x.createSVGPoint();$.x=P,$.y=S;const I=x.getScreenCTM();if(!I)return null;const E=$.matrixTransform(I),T=g.getBoundingClientRect(),z=C==="KR-42"?5:C==="KR-11"?0:C==="KR-41"?-15:15;return{x:E.x-T.left,y:E.y-T.top-z}},[]);k.useEffect(()=>{const C=o??"all";c(C);const g=t.current;g?requestAnimationFrame(()=>{const L=m(C);p(L??{x:g.getBoundingClientRect().width/2,y:g.getBoundingClientRect().height/2-40})}):p({x:200,y:120})},[o,m]);const f=C=>{c(C),requestAnimationFrame(()=>{const g=m(C);p(g??{x:200,y:120})})},y=C=>{if(u){if(l(u),C==="expert"){e(`/meditation/region/${u}/experts`);return}a(C==="place"?"템플스테이":"명상센터"),e(`/meditation/region/${u}`)}},v=u?cn(u):null;return s.jsxs(m8,{children:[s.jsxs(g8,{children:[s.jsx(L8,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),s.jsx(x8,{children:"지역 선택"})]}),s.jsxs(y8,{ref:t,children:[s.jsx(f1,{activeRegionId:u??void 0,onSelectRegion:f}),v&&s.jsxs(s.Fragment,{children:[s.jsx(v8,{onClick:()=>c(null),"aria-label":"모달 닫기"}),s.jsx(k8,{ref:r,$x:d.x,$y:d.y,children:s.jsxs(b8,{children:[s.jsx(S8,{type:"button",onClick:()=>c(null),"aria-label":"닫기",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"18",height:"18",children:s.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})}),s.jsx(C8,{children:v.name}),s.jsx(j8,{children:"찾으시는 유형을 선택해 주세요"}),s.jsx($8,{children:I8.map(({label:C,kind:g})=>s.jsx(E8,{type:"button",onClick:()=>y(g),children:C},g))})]})})]})]}),s.jsx(P8,{ref:i,children:n.map(C=>s.jsx(T8,{type:"button",$active:u===C.id,onClick:()=>{c(C.id),requestAnimationFrame(()=>{const g=m(C.id);p(g??{x:200,y:120})})},children:C.name},C.id))})]})},z8=Ve`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,M8=h.button`
  position: fixed;
  inset: 0;
  z-index: 113;
  border: none;
  margin: 0;
  padding: 0;
  background: rgba(0, 0, 0, 0.28);
  cursor: default;
  -webkit-tap-highlight-color: transparent;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: -4px;
  }
`,_8=h.div`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 115;
  padding: 0 12px;
  padding-bottom: calc(118px + env(safe-area-inset-bottom, 0px));
  pointer-events: none;
  display: flex;
  justify-content: center;

  @media (min-width: 961px) {
    padding-bottom: calc(100px + env(safe-area-inset-bottom, 0px));
  }
`,N8=h.div`
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
  animation: ${z8} 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;
  -webkit-tap-highlight-color: transparent;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary400};
    outline-offset: 2px;
  }
`,A8=h.div`
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
`,F8=h.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
  padding-right: 36px;
`,D8=h.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
`,O8=h.span`
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
  line-height: 1.35;
`,B8=h.div`
  position: absolute;
  top: -2px;
  right: -4px;
  display: flex;
  align-items: center;
  justify-content: center;
`,U8=h.div`
  font-size: 0.88rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text700};

  .star {
    color: #e8b923;
    margin-right: 4px;
  }
`,H8=h.div`
  font-size: 0.86rem;
  color: ${({theme:e})=>e.colors.text700};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,V8=h.p`
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.45;
  color: ${({theme:e})=>e.colors.text700};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,W8=h.span`
  margin-top: auto;
  padding-top: 6px;
  font-size: 0.82rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.primary600};
`,K8=({place:e,onClose:t,onOpenDetail:n})=>{const r=cn(e.regionId),i=e.venueKind??"명상지",o=[r==null?void 0:r.name,e.hashtags[0]??i].filter(Boolean).join(" · "),l=k.useCallback(()=>{n()},[n]),a=c=>{c.stopPropagation()},u=c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),l())};return s.jsxs(s.Fragment,{children:[s.jsx(M8,{type:"button",onClick:t,"aria-label":"닫기"}),s.jsx(_8,{children:s.jsxs(N8,{role:"button",tabIndex:0,onClick:l,onKeyDown:u,"aria-label":`${e.name} 상세 페이지로 이동`,children:[s.jsx(A8,{children:s.jsx("img",{src:e.thumbnailUrl,alt:"",draggable:!1})}),s.jsxs(F8,{children:[s.jsx(D8,{children:s.jsx(O8,{children:e.name})}),s.jsx(B8,{onClick:a,onPointerDown:a,children:s.jsx(Ms,{placeId:e.id})}),(e.rating!=null||e.reviewCount!=null)&&s.jsxs(U8,{children:[e.rating!=null&&s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"star","aria-hidden":!0,children:"★"}),e.rating.toFixed(1)]}),e.reviewCount!=null&&s.jsxs("span",{children:[e.rating!=null?" · ":"","후기 ",e.reviewCount]})]}),s.jsx(H8,{children:o}),s.jsx(V8,{children:e.shortDescription}),s.jsx(W8,{children:"탭하여 상세 보기 →"})]})]})})]})},q8={minLat:36.45,maxLat:37.65,minLng:126.75,maxLng:127.15};function Y8(e){let t=2166136261;for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619);const n=(t>>>0)%10001/1e4,r=(Math.imul(t,7919)>>>0)%10001/1e4;return[n,r]}function xa(e){const t=fh.find(a=>a.id===e.regionId)??q8,[n,r]=Y8(`${e.id}\0${e.address}`),i=.1,o=t.minLat+(t.maxLat-t.minLat)*(i+(1-2*i)*n),l=t.minLng+(t.maxLng-t.minLng)*(i+(1-2*i)*r);return{lat:o,lng:l}}async function Z8(e){var i;const t=e==null?void 0:e.trim();if(!t)return!1;const n=window.naver;if((i=n==null?void 0:n.maps)!=null&&i.Map)return!0;const r=()=>new Promise((o,l)=>{const a=Date.now(),u=window.setInterval(()=>{var d;const c=window.naver;(d=c==null?void 0:c.maps)!=null&&d.Map?(window.clearInterval(u),o()):Date.now()-a>25e3&&(window.clearInterval(u),l(new Error("Naver Maps 로드 시간 초과")))},50)});if(document.querySelector('script[src*="oapi.map.naver.com"]'))try{return await r(),!0}catch{return!1}return await new Promise((o,l)=>{const a=`__naverMapCb_${Date.now()}`;window[a]=()=>{o(),delete window[a]};const u=document.createElement("script");u.async=!0,u.onerror=()=>{delete window[a],l(new Error("Naver Maps 스크립트 로드 실패"))},u.src=`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${encodeURIComponent(t)}&callback=${a}`,document.head.appendChild(u)}),!0}const Q8=h.div`
  width: 100%;
  flex: 1;
  min-height: ${({$fillViewport:e})=>e?"0":"min(62dvh, 520px)"};
  border-radius: ${({$fillViewport:e,theme:t})=>e?"0":t.radii.lg};
  overflow: hidden;
  background: ${({theme:e})=>e.colors.bg100};
`,G8=h.div`
  width: 100%;
  height: 100%;
  min-height: ${({$fillViewport:e})=>e?"100%":"min(62dvh, 520px)"};
`;function X8(e){return e<=9?100:e<=11?72:e<=13?48:1e6}function J8(e,t){const n=new Set(e.map((i,o)=>o)),r=[];for(;n.size>0;){const i=n.values().next().value,o=new Set([i]);n.delete(i);let l=!0;for(;l;){l=!1;for(const a of[...n]){const u=e[a];let c=!1;for(const d of o){const p=e[d],m=u.x-p.x,f=u.y-p.y;if(m*m+f*f<=t*t){c=!0;break}}c&&(o.add(a),n.delete(a),l=!0)}}r.push([...o])}return r}function eL(e){const t=e;return typeof t.lat=="function"&&typeof t.lng=="function"?{lat:t.lat(),lng:t.lng()}:{lat:37.5665,lng:126.978}}function Eh(e){const t=e.replace(/[^a-zA-Z0-9_-]/g,"_");return t.length>0?t.slice(0,48):"x"}function tL(e){const t=`mpg_${Eh(e)}`,n=`mpf_${t}`;return`<div style="width:40px;height:52px;pointer-events:auto" aria-hidden="true">
<svg width="40" height="52" viewBox="0 0 40 52" xmlns="http://www.w3.org/2000/svg">
<defs>
<linearGradient id="${t}" x1="20" y1="3" x2="20" y2="44" gradientUnits="userSpaceOnUse">
<stop stop-color="#a88bca"/>
<stop offset="0.55" stop-color="#5c3d8f"/>
<stop offset="1" stop-color="#3d0069"/>
</linearGradient>
<filter id="${n}" x="-45%" y="-38%" width="190%" height="190%">
<feDropShadow dx="0" dy="2" stdDeviation="3.2" flood-color="#3d0069" flood-opacity="0.42"/>
</filter>
</defs>
<path filter="url(#${n})"
d="M20 4 C11.1 4 3.8 11.6 3.8 20.8 C3.8 30.2 19.6 45.2 20 46.8 C20.4 45.2 36.2 30.2 36.2 20.8 C36.2 11.6 28.9 4 20 4 Z"
fill="url(#${t})" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>
<circle cx="20" cy="19.5" r="5.8" fill="#fff" fill-opacity="0.96"/>
<circle cx="20" cy="19.5" r="2.5" fill="#4B0082" fill-opacity="0.88"/>
</svg>
</div>`}function nL(e,t){const n=`clg_${Eh(t)}`,r=`clf_${n}`,i=e>99?"99+":String(e),o=e>99?11:e>9?13:15;return`<div style="width:52px;height:52px;pointer-events:auto" aria-hidden="true">
<svg width="52" height="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
<defs>
<linearGradient id="${n}" x1="15" y1="12" x2="37" y2="40" gradientUnits="userSpaceOnUse">
<stop stop-color="#7a5aab"/>
<stop offset="1" stop-color="#3d0069"/>
</linearGradient>
<filter id="${r}" x="-40%" y="-40%" width="180%" height="180%">
<feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#2f0051" flood-opacity="0.45"/>
</filter>
</defs>
<circle cx="26" cy="26" r="22" fill="url(#${n})" stroke="#C9A962" stroke-width="3.5" filter="url(#${r})"/>
<text x="26" y="26" text-anchor="middle" dominant-baseline="central" fill="#fff" font-size="${o}" font-weight="800" font-family="system-ui,-apple-system,'Segoe UI',sans-serif">${i}</text>
</svg>
</div>`}const L0=({places:e,onSelectPlace:t,fillViewport:n=!1})=>{const r=k.useRef(null),i=k.useRef(null),o=k.useRef([]),l=k.useRef(e),a=k.useRef(t);l.current=e,a.current=t;const u=()=>{o.current.forEach(d=>d.setMap(null)),o.current=[]},c=d=>{const p=window.naver,m=p==null?void 0:p.maps;if(!d||!m)return;const f=m.Marker,y=m.LatLng,v=m.Point,C=m.Event,g=d.getProjection,L=d.getZoom,x=d.setZoom,b=d.panTo;if(!g||!L||!x||!b)return;u();const P=l.current;if(P.length===0)return;const S=P.map(R=>{const{lat:A,lng:N}=xa(R);return{place:R,latlng:new y(A,N)}}),$=g.call(d),I=L.call(d)??11,E=X8(I),T=S.map(R=>$.fromCoordToOffset(R.latlng)),z=J8(T,E);for(const[R,A]of z.entries()){const N=A.map(w=>S[w]);if(N.length===1){const{place:w,latlng:q}=N[0],Z=new f({position:q,map:d,title:w.name,icon:{content:tL(w.id),anchor:new v(20,46.8)}});C.addListener(Z,"click",()=>a.current(w.id)),o.current.push(Z);continue}let F=0,Y=0;for(const w of N){const{lat:q,lng:Z}=eL(w.latlng);F+=q,Y+=Z}const K=N.length,_=new y(F/K,Y/K),D=new f({position:_,map:d,icon:{content:nL(K,`g${R}_${K}`),anchor:new v(26,26)}});C.addListener(D,"click",()=>{const w=L.call(d)??11;x.call(d,Math.min(w+2,19)),b.call(d,_)}),o.current.push(D)}};return k.useEffect(()=>{const d=r.current;if(!d)return;let p=!1;return(async()=>{if(!await Z8("z2xjrdi0i5")||p||!r.current)return;const y=window.naver.maps,v=y.Map,C=y.LatLng,g=y.LatLngBounds,L=y.Event,x=new v(d,{center:new C(37.5665,126.978),zoom:11,scaleControl:!0,mapDataControl:!1,zoomControl:!0});i.current=x;const b=()=>{c(x)};L.addListener(x,"idle",b),b();const P=l.current;if(P.length>0){const S=new g;for(const I of P){const{lat:E,lng:T}=xa(I);S.extend(new C(E,T))}const $=x.fitBounds;$==null||$.call(x,S,{top:52,right:20,bottom:100,left:20})}})(),()=>{p=!0,u(),i.current=null,r.current&&(r.current.innerHTML="")}},[]),k.useEffect(()=>{l.current=e;const d=i.current;if(!d||(c(d),e.length===0))return;const p=window.naver,m=p==null?void 0:p.maps,f=m==null?void 0:m.LatLng,y=m==null?void 0:m.LatLngBounds;if(!f||!y)return;const v=new y;for(const g of e){const{lat:L,lng:x}=xa(g);v.extend(new f(L,x))}const C=d.fitBounds;C==null||C.call(d,v,{top:52,right:20,bottom:100,left:20})},[e]),s.jsx(Q8,{$fillViewport:n,children:s.jsx(G8,{ref:r,$fillViewport:n,role:"application","aria-label":"명상지 지도"})})},x0=96,y0=960;function rL(){const[e,t]=k.useState(()=>typeof window<"u"&&window.matchMedia(`(max-width: ${y0}px)`).matches);return k.useEffect(()=>{const n=window.matchMedia(`(max-width: ${y0}px)`),r=()=>t(n.matches);return n.addEventListener("change",r),()=>n.removeEventListener("change",r)},[]),e}const v0=h.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 20px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};

  @media (max-width: 960px) {
    padding: 20px 14px calc(48px + env(safe-area-inset-bottom, 0px));
  }
`,iL=h.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
`,oL=h.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,lL=h.button`
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
`,sL=h.button`
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
`,aL=h.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-areas: "filter content";
  gap: 28px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-areas: "content";
  }
`,uL=h.main`
  grid-area: content;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,cL=h.aside`
  grid-area: filter;

  @media (max-width: 960px) {
    display: none;
  }
`,dL=h.button`
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
`,pL=h.div`
  position: fixed;
  inset: 0;
  z-index: 125;
`,fL=Ve`from { opacity: 0; } to { opacity: 1; }`,hL=Ve`from { transform: translateX(100%); } to { transform: translateX(0); }`,mL=h.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  animation: ${fL} 0.2s ease;
`,gL=h.div`
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
`,LL=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,xL=h.button`
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
`,w0=h.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,ya=h.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text700};
`,k0=h.div`
  position: fixed;
  z-index: 40;
  top: 0;
  left: 0;
  right: 0;
  bottom: calc(56px + env(safe-area-inset-bottom, 0px));
  background: ${({theme:e})=>e.colors.bg100};
`,b0=h.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  min-height: 0;
`,S0=h.div`
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
`,C0=h.div`
  display: grid;
  grid-template-columns: 44px 1fr 44px;
  align-items: center;
  gap: 8px;
  max-width: 1200px;
  margin: 0 auto;
`,Wo=h.button`
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
`,j0=h.span`
  text-align: center;
  font-weight: 700;
  font-size: 1.05rem;
  color: ${({theme:e})=>e.colors.text900};
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,$0=h.button`
  position: fixed;
  left: 50%;
  bottom: calc(64px + env(safe-area-inset-bottom, 0px));
  transform: translateX(-50%);
  z-index: 110;
  padding: 12px 28px;
  border-radius: 999px;
  border: 1px solid ${({theme:e})=>e.colors.primary200};
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.text900};
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  box-shadow: 0 4px 22px rgba(0, 0, 0, 0.14);
  -webkit-tap-highlight-color: transparent;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: 2px;
  }
`,yL=h.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: calc(56px + env(safe-area-inset-bottom, 0px));
  height: calc(100dvh - 56px - env(safe-area-inset-bottom, 0px));
  z-index: 95;
  transform: translateY(${({$ty:e})=>e}px);
  ${({$dragging:e})=>e?De`
          transition: none;
        `:De`
          transition: transform 0.34s cubic-bezier(0.22, 1, 0.36, 1);
        `}
  display: flex;
  flex-direction: column;
  background: ${({theme:e})=>e.colors.white};
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -10px 36px rgba(0, 0, 0, 0.14);
  overflow: hidden;
  touch-action: pan-y;
`,vL=h.div`
  flex-shrink: 0;
  padding: 12px 0 8px;
  touch-action: none;
  cursor: grab;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
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
`,wL=h.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text700};
`,kL=h.div`
  flex-shrink: 0;
  padding: 0 12px 8px;
`,bL=h.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 0 12px calc(12px + env(safe-area-inset-bottom, 0px));
  -webkit-overflow-scrolling: touch;
`,SL=h.p`
  margin: 0 0 12px;
  font-size: 0.92rem;
  color: ${({theme:e})=>e.colors.text700};
`,E0=h.div`
  height: 1px;
`,CL=()=>{const e=Ot(),{regionId:t}=yo(),n=rL(),{filters:r,page:i,pageSize:o,setPage:l,setRegion:a,setKeyword:u,toggleTag:c,setSortBy:d,setCategory:p,resetFilters:m,isFilterOpen:f,setFilterOpen:y}=h1(),[v,C]=k.useState("list"),[g,L]=k.useState(null),x=k.useRef(null),b=k.useRef(null),P=k.useRef(null),S=k.useRef({active:!1,startY:0,startTy:0}),[$,I]=k.useState(0),[E,T]=k.useState(400),[z,R]=k.useState(200),[A,N]=k.useState(!1),[F,Y]=k.useState(!1),K=k.useCallback(()=>{const te=P.current;if(!te)return;const ue=te.offsetHeight,X=Math.max(0,ue-x0);T(X),R(Math.round(X*.4)),I(pt=>Math.max(0,Math.min(X,pt)))},[]);k.useLayoutEffect(()=>{if(!n||!t)return;const te=requestAnimationFrame(()=>{K();const ue=P.current;if(ue){const X=Math.max(0,ue.offsetHeight-x0);I(X)}Y(!0)});return()=>cancelAnimationFrame(te)},[n,t,K]),k.useEffect(()=>{var ue;if(!n)return;const te=()=>K();return window.addEventListener("resize",te),(ue=window.visualViewport)==null||ue.addEventListener("resize",te),()=>{var X;window.removeEventListener("resize",te),(X=window.visualViewport)==null||X.removeEventListener("resize",te)}},[n,K]),k.useEffect(()=>{t&&(a(t),l(1))},[t,a,l]);const _=t?cn(t):void 0,D=k.useMemo(()=>gh(),[]),w=k.useMemo(()=>t?F7(t):[],[t]),q=k.useMemo(()=>Lh(w,r),[w,r]),Z=k.useMemo(()=>xh(q,r.sortBy),[q,r.sortBy]),j=k.useMemo(()=>Z.slice(0,i*o),[Z,i,o]),re=j.length<Z.length,oe=n||v==="map",Q=g&&oe?Rs(g):void 0;k.useEffect(()=>{oe||L(null)},[oe]),k.useEffect(()=>{L(null)},[r.keyword,r.sortBy,r.tags,r.category]),k.useEffect(()=>{l(1)},[r.keyword,r.sortBy,r.tags,r.category,l]),k.useEffect(()=>{const te=n?b.current:null,ue=x.current;if(!ue||!re)return;const X=new IntersectionObserver(pt=>{var fn;(fn=pt[0])!=null&&fn.isIntersecting&&l(i+1)},{root:te??void 0,rootMargin:"200px"});return X.observe(ue),()=>X.disconnect()},[re,n,i,l]);const H=k.useCallback(te=>{const ue=te,X=Math.abs(te-z),pt=Math.abs(te-E);return ue<=X&&ue<=pt?0:X<=pt?z:E},[z,E]),G=k.useCallback(te=>{te.currentTarget.setPointerCapture(te.pointerId),S.current={active:!0,startY:te.clientY,startTy:$},N(!0)},[$]),de=k.useCallback(te=>{if(!S.current.active)return;const ue=te.clientY-S.current.startY;let X=S.current.startTy+ue;X=Math.max(0,Math.min(E,X)),I(X)},[E]),se=k.useCallback(te=>{if(S.current.active){S.current.active=!1;try{te.currentTarget.releasePointerCapture(te.pointerId)}catch{}N(!1),I(ue=>H(ue))}},[H]);if(!t||!_)return s.jsxs(v0,{children:[s.jsx(ya,{children:"해당 지역 정보를 찾지 못했어요."}),s.jsx(sL,{type:"button",onClick:()=>e("/meditation"),children:"메인으로 돌아가기"})]});const je=f&&s.jsxs(pL,{children:[s.jsx(mL,{onClick:()=>y(!1)}),s.jsxs(gL,{children:[s.jsxs(LL,{children:[s.jsx("h3",{style:{margin:0,fontSize:"1.2rem"},children:"필터"}),s.jsx(xL,{type:"button",onClick:()=>y(!1),children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),s.jsx(ns,{filters:r,availableTags:D,onChangeKeyword:u,onChangeCategory:p,onToggleTag:c,onChangeSortBy:d,onReset:m})]})]}),Le=oe&&Q?s.jsx(K8,{place:Q,onClose:()=>L(null),onOpenDetail:()=>{e(`/meditation/place/${Q.id}`),L(null)}}):null;return n?s.jsxs(s.Fragment,{children:[s.jsxs(k0,{children:[s.jsx(b0,{children:s.jsx(L0,{fillViewport:!0,places:Z,onSelectPlace:L})}),s.jsx(S0,{children:s.jsxs(C0,{children:[s.jsx(Wo,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),s.jsx(j0,{children:_.name}),s.jsx(Wo,{type:"button",onClick:()=>y(!0),"aria-label":"필터",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})})})]})})]}),s.jsxs(yL,{ref:P,$ty:F?$:E,$dragging:A,style:{visibility:F?"visible":"hidden"},"aria-label":"명상지 목록 패널",children:[s.jsx(vL,{onPointerDown:G,onPointerMove:de,onPointerUp:se,onPointerCancel:se,children:s.jsx(wL,{children:"위로 드래그해 목록 보기 · 아래로 접기"})}),s.jsx(kL,{children:s.jsx(Qu,{layout:"region",value:r.keyword,onChange:u,placeholder:"장소, 이름, 주소, 기관명, 태그로 검색"})}),s.jsxs(bL,{ref:b,children:[s.jsxs(SL,{children:["총 ",Z.length,"곳"]}),s.jsxs(w0,{children:[j.length===0&&s.jsx(ya,{children:"조건에 맞는 명상센터가 없어요."}),j.map(te=>s.jsx(rs,{place:te},te.id))]}),re&&s.jsx(E0,{ref:x})]})]}),Le,je]}):v==="map"?s.jsxs(s.Fragment,{children:[s.jsxs(k0,{children:[s.jsx(b0,{children:s.jsx(L0,{fillViewport:!0,places:Z,onSelectPlace:L})}),s.jsx(S0,{children:s.jsxs(C0,{children:[s.jsx(Wo,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),s.jsx(j0,{children:_.name}),s.jsx(Wo,{type:"button",onClick:()=>y(!0),"aria-label":"필터",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})})})]})})]}),s.jsx($0,{type:"button",onClick:()=>C("list"),children:"목록"}),Le,je]}):s.jsxs(s.Fragment,{children:[s.jsxs(v0,{children:[s.jsxs(iL,{children:[s.jsxs(oL,{children:[s.jsx(lL,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),s.jsx("h2",{style:{margin:0,fontSize:"1.25rem",fontWeight:600},children:"명상지 리스트"})]}),s.jsx(dL,{type:"button",onClick:()=>y(!0),"aria-label":"필터",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})})})]}),s.jsx(Qu,{layout:"region",value:r.keyword,onChange:u,placeholder:"장소, 이름, 주소, 기관명, 태그로 검색"}),s.jsxs(aL,{children:[s.jsx(cL,{children:s.jsx(ns,{filters:r,availableTags:D,onChangeKeyword:u,onChangeCategory:p,onToggleTag:c,onChangeSortBy:d,onReset:m})}),s.jsxs(uL,{children:[s.jsxs(w0,{children:[j.length===0&&s.jsx(ya,{children:"조건에 맞는 명상센터가 없어요."}),j.map(te=>s.jsx(rs,{place:te},te.id))]}),re&&s.jsx(E0,{ref:x})]})]})]}),s.jsx($0,{type:"button",onClick:()=>C("map"),children:"지도"}),je]})},jL=[{id:"exp-seoul-1",name:"이호흡",avatarUrl:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=60",specialties:["호흡 명상","불안 완화","1:1 코칭"],regionIds:["KR-11"],intro:"심리상담 석사 과정을 마치고 10년간 호흡·바디스캔 명상을 지도해 왔습니다. 바쁜 도심 속에서도 뇌를 쉬게 하는 방법에 집중합니다.",degrees:["OO대학교 심리학 학사","OO대학원 임상심리 석사 과정 수료"],certificates:["마음챙김 기반 스트레스 완화(MBSR) 수료","명상 지도사 1급"],careers:["2016–2020 OO명상센터 수석 강사","2020–현재 프리랜서 명상 지도"],classTypes:["호흡 명상","아트 명상(감각 드로잉)","걷기 명상"],hasCenter:!1,activityAreas:["서울 전역","온라인"],programs:[{id:"p1",title:"야간 호흡 안정화 4주",status:"ongoing",imageUrl:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=60",description:"퇴근 후 45분, 호흡 카운트와 바디스캔으로 수면 전 긴장을 낮춥니다."},{id:"p2",title:"여름 집중 호흡 워크숍",status:"past",description:"2024년 8월, 한강 둔치에서 진행한 단기 워크숍입니다."}],reviews:[{author:"김**",body:"호흡만으로도 이렇게 편해질 수 있다는 걸 처음 알았어요. 설명이 차분하고 따라 하기 쉬웠습니다.",rating:5},{author:"박**",body:"직장 스트레스가 심했는데 1:1이 체계적이에요.",rating:5},{author:"안**",body:"초반에는 숨이 가빴던데 중반부터 리듬이 잡혔어요.",rating:4},{author:"진**",body:"온라인 세션도 화질·소리 안정적이었습니다.",rating:5},{author:"혜**",body:"불안할 때 쓸 만한 호흡 루틴을 적어 주셔서 도움 됐어요.",rating:5},{author:"태**",body:"과제가 부담 없는 수준이라 꾸준히 하기 좋았어요.",rating:4},{author:"민**",body:"야간 시간대 수업이라 퇴근 후 수강하기 좋았습니다.",rating:5},{author:"수**",body:"바디스캔 가이드 속도가 적당했어요.",rating:5},{author:"지**",body:"질문해도 논하지 않고 경청해 주셔서 편했어요.",rating:5},{author:"영**",body:"4주 과정인데 주차마다 목표가 명확해서 좋았습니다.",rating:4},{author:"훈**",body:"수면 전 루틴으로 쓰고 있어요.",rating:5},{author:"현**",body:"가격 대비 만족도가 높았어요.",rating:5},{author:"도**",body:"친구에게도 추천했습니다.",rating:5},{author:"연**",body:"다음 시즌 워크숍도 관심 있어요.",rating:4}]},{id:"exp-seoul-2",name:"정아트",avatarUrl:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=60",specialties:["아트 명상","감정 표현","그룹 세션"],regionIds:["KR-11"],intro:"미술치료 배경을 바탕으로 표현과 호흡을 연결하는 아트 명상을 이끕니다. 그림 실력은 전혀 필요 없습니다.",degrees:["OO예술대 미술교육 학사"],certificates:["미술치료사 2급","명상 지도사"],careers:["2019–현재 스튜디오 운영·출강"],classTypes:["아트 명상","색과 감각","저널링"],hasCenter:!0,centerSummary:"마포구 소재 소형 스튜디오. 최대 8명 그룹 수업.",centerPlaceId:"6",programs:[{id:"p3",title:"금요 아트 명상 나이트",status:"ongoing",imageUrl:"https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=60",description:"캔버스에 감정 색을 옮기고 짧은 명상으로 마무리합니다."}],reviews:[{author:"최**",body:"말로 하기 어려운 감정이 색으로 정리됐어요.",rating:5}]},{id:"exp-busan-1",name:"한바다",avatarUrl:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=60",specialties:["해안 명상","소리 명상","리트릿"],regionIds:["KR-48"],intro:"부산·경남 해안을 기반으로 야외·소규모 리트릿을 기획합니다.",degrees:["OO대 불교학과 학사"],certificates:["템플스테이 인솔자 교육 이수"],careers:["2014–현재 독립 가이드","지역 문화재단 협력 프로그램 다수"],classTypes:["일출 명상","소리·공명","걷기 명상"],hasCenter:!1,activityAreas:["부산","울산","경남 해안"],programs:[{id:"p4",title:"겨울 해변 호흡 산책",status:"ongoing",description:"파도 리듬에 맞춘 천천한 걸음과 호흡. 월 2회 토요일."},{id:"p5",title:"가을 영도 선셋 명상",status:"past",imageUrl:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=60",description:"종료된 시즌 프로그램입니다. 후기는 아래 참고하세요."}],reviews:[{author:"이**",body:"야외라 더 몰입됐고 안내가 친절했습니다.",rating:4}]},{id:"exp-gangwon-1",name:"산들",avatarUrl:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=60",specialties:["숲 명상","차 명상","기업 웰니스"],regionIds:["KR-42"],intro:"강원 숲길과 차밭에서 진행하는 힐링 명상 전문입니다. 기업 재충전 프로그램 출강 가능합니다.",degrees:["OO대 산림자원학 학사"],certificates:["산림치유 지도사","명상 지도사"],careers:["2017–현재 강원 지역 집중","기업 HRD 웰니스 파트너"],classTypes:["숲 치유","차 명상","실내 릴렉스"],hasCenter:!0,centerSummary:"평창 인근 협력 숲속 공간(예약제).",programs:[{id:"p6",title:"주말 숲 리트릿 2박",status:"ongoing",imageUrl:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=60",description:"고요한 숲길 걷기, 차 시음, 야간 명상으로 구성합니다."}],reviews:[{author:"정**",body:"도시에선 느끼지 못했던 온도감이 있었어요.",rating:5}]}],$L=jL;function EL(){return[...$L]}const Gu=EL(),Ph=e=>Gu.find(t=>t.id===e),PL=e=>e==="all"?[...Gu]:Gu.filter(t=>t.regionIds.includes(e)),P0=h.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 24px 16px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};
`,TL=h.header`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`,IL=h.button`
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
`,RL=h.div`
  flex: 1;
  min-width: 0;
`,zL=h.h1`
  margin: 0;
  font-size: 1.35rem;
  font-weight: 700;
`,ML=h.p`
  margin: 4px 0 0;
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.text700};
`,_L=h.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,NL=h.button`
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
`,AL=h.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`,FL=h.div`
  flex: 1;
  min-width: 0;
`,DL=h.h2`
  margin: 0 0 6px;
  font-size: 1.1rem;
  font-weight: 700;
`,OL=h.p`
  margin: 0;
  font-size: 0.92rem;
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.45;
`,T0=h.p`
  text-align: center;
  color: ${({theme:e})=>e.colors.text700};
  padding: 40px 16px;
`,BL=()=>{const e=Ot(),{regionId:t}=yo(),n=t?cn(t):void 0,r=t?PL(t):[];return!t||!n?s.jsx(P0,{children:s.jsx(T0,{children:"지역 정보를 찾을 수 없어요."})}):s.jsxs(P0,{children:[s.jsxs(TL,{children:[s.jsx(IL,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),s.jsxs(RL,{children:[s.jsxs(zL,{children:[n.name," 명상 전문가"]}),s.jsx(ML,{children:"프로필 · 전문 분야를 확인하고 상세로 이동하세요"})]})]}),s.jsxs(_L,{children:[r.length===0&&s.jsx(T0,{children:"이 지역에 등록된 명상 전문가가 아직 없어요."}),r.map(i=>s.jsxs(NL,{type:"button",onClick:()=>e(`/meditation/expert/${i.id}`),children:[s.jsx(AL,{src:i.avatarUrl,alt:""}),s.jsxs(FL,{children:[s.jsx(DL,{children:i.name}),s.jsx(OL,{children:i.specialties.join(" · ")})]})]},i.id))]})]})},UL="★",HL="☆";function is(e,t=5){const n=Math.round(Number(e)),r=Math.max(0,Math.min(t,Number.isFinite(n)?n:0));return UL.repeat(r)+HL.repeat(t-r)}const VL=5,WL=Ve`
  from { opacity: 0; }
  to { opacity: 1; }
`,KL=Ve`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`,qL=h.div`
  position: fixed;
  inset: 0;
  z-index: 400;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  animation: ${WL} 0.2s ease both;

  @media (min-width: 600px) {
    justify-content: center;
    align-items: center;
    padding: 24px;
  }
`,YL=h.div`
  background: ${({theme:e})=>e.colors.white};
  border-radius: 20px 20px 0 0;
  max-height: min(92dvh, 720px);
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${KL} 0.32s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (min-width: 600px) {
    border-radius: ${({theme:e})=>e.radii.lg};
    max-width: 440px;
    max-height: min(85dvh, 640px);
  }
`,ZL=h.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 16px;
  padding-top: calc(12px + env(safe-area-inset-top, 0px));
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary100};
`,QL=h.div`
  min-width: 0;
`,GL=h.span`
  display: block;
  font-size: 1rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
`,XL=h.span`
  display: block;
  margin-top: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text700};
`,JL=h.button`
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
`,ex=h.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 18px 16px calc(24px + env(safe-area-inset-bottom, 0px));
`,tx=h.article`
  padding-bottom: 18px;
  margin-bottom: 18px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary100};

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`,nx=h.p`
  margin: 0 0 10px;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text900};
`,rx=h.div`
  margin: 0;
  font-size: 1rem;
  line-height: 1.65;
  color: ${({theme:e})=>e.colors.text700};
  white-space: pre-wrap;
  word-break: break-word;
`,ix=h.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 16px calc(12px + env(safe-area-inset-bottom, 0px));
  border-top: 1px solid ${({theme:e})=>e.colors.primary100};
  background: ${({theme:e})=>e.colors.white};
`,I0=h.button`
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
`,ox=h.span`
  font-size: 0.88rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text700};
  min-width: 4.5em;
  text-align: center;
`,Th=({open:e,onClose:t,heading:n="후기",reviews:r,pageSize:i})=>{const o=i??VL,[l,a]=k.useState(1);k.useEffect(()=>{if(!e){a(1);return}a(1)},[e,r]),k.useEffect(()=>{if(!e)return;const y=v=>{v.key==="Escape"&&(v.stopPropagation(),t())};return window.addEventListener("keydown",y,!0),()=>window.removeEventListener("keydown",y,!0)},[e,t]),k.useEffect(()=>{if(!e)return;const y=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=y}},[e]);const u=k.useCallback(y=>{y.target===y.currentTarget&&t()},[t]),c=r.length,d=c===0?0:Math.ceil(c/o),p=d===0?1:Math.min(l,d),m=k.useMemo(()=>{if(c===0)return[];const y=(p-1)*o;return r.slice(y,y+o)},[r,c,p,o]);if(k.useEffect(()=>{d>0&&l>d&&a(d)},[l,d]),!e)return null;const f=c===0?"등록된 후기가 없어요.":d>1?`총 ${c}건 · ${o}건씩 보기`:`총 ${c}건`;return s.jsx(qL,{role:"presentation",onClick:u,children:s.jsxs(YL,{role:"dialog","aria-modal":"true","aria-labelledby":"reviews-list-sheet-title",onClick:y=>y.stopPropagation(),children:[s.jsxs(ZL,{children:[s.jsxs(QL,{children:[s.jsx(GL,{id:"reviews-list-sheet-title",children:n}),s.jsx(XL,{children:f})]}),s.jsx(JL,{type:"button",onClick:t,"aria-label":"닫기",children:s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),s.jsx(ex,{children:c===0?null:m.map((y,v)=>{const C=y.rating!=null?` · ${is(y.rating)}`:"",g=(p-1)*o+v;return s.jsxs(tx,{children:[s.jsxs(nx,{children:[y.author,C]}),s.jsx(rx,{children:y.body})]},`${y.author}-${g}`)})}),c>0&&d>1&&s.jsxs(ix,{children:[s.jsx(I0,{type:"button",onClick:()=>a(y=>Math.max(1,y-1)),disabled:p<=1,children:"이전"}),s.jsxs(ox,{children:[p," / ",d]}),s.jsx(I0,{type:"button",onClick:()=>a(y=>Math.min(d,y+1)),disabled:p>=d,children:"다음"})]})]})})};function lx(e,t){const n=t.trim();if(!n)return;const r=e.programs.find(u=>{var c;return(c=u.linksClassTypes)==null?void 0:c.includes(n)});if(r)return r;const o=n.replace(/\([^)]*\)/g," ").replace(/[·]/g," ").split(/\s+/).map(u=>u.replace(/[()]/g,"").trim()).filter(u=>u.length>=2),l=u=>`${u.title} ${u.description}`.toLowerCase(),a=e.programs.find(u=>{const c=l(u);return c.includes(n.toLowerCase())?!0:o.some(d=>c.includes(d.toLowerCase()))});return a||(e.programs.find(u=>u.status==="ongoing")??e.programs[0])}const R0=h.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 0 calc(120px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};
  position: relative;
  z-index: 1;
`,z0=h.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  padding-top: calc(16px + env(safe-area-inset-top, 0px));
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.95);
  z-index: 5;
`,M0=h.button`
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
`,_0=h.h1`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
`,sx=h.div`
  padding: 8px 20px 20px;
  text-align: center;
`,ax=h.img`
  width: 112px;
  height: 112px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${({theme:e})=>e.colors.primary200};
`,ux=h.h2`
  margin: 16px 0 8px;
  font-size: 1.6rem;
  font-weight: 700;
`,N0=h.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
`,cx=h.span`
  font-size: 0.85rem;
  padding: 4px 10px;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary50};
  color: ${({theme:e})=>e.colors.primary700};
`,dx=h.button`
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
`,Xt=h.section`
  padding: 0 20px 24px;
`,Ln=h.h3`
  margin: 0 0 10px;
  font-size: 1.15rem;
  font-weight: 700;
`,gr=h.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.65;
  color: ${({theme:e})=>e.colors.text700};
`,A0=h.ul`
  margin: 0;
  padding-left: 1.2em;
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.6;

  li {
    margin-bottom: 6px;
  }
`,F0=h.button`
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
`,D0=h.span`
  display: block;
  margin: 0 0 6px;
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
`,O0=h.span`
  display: block;
  font-size: 1rem;
  line-height: 1.65;
  color: ${({theme:e})=>e.colors.text700};
`,B0=h.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  display: block;
  pointer-events: none;
  user-select: none;
`,U0=h.div`
  padding: 14px 16px;
`,H0=h.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 6px;
  margin-bottom: 8px;
  background: ${({theme:e,$past:t})=>t?e.colors.bg100:e.colors.primary100};
  color: ${({theme:e,$past:t})=>t?e.colors.text700:e.colors.primary700};
`,px=h.button`
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
`,fx=h.div`
  padding: 14px 16px;
  border-radius: ${({theme:e})=>e.radii.md};
  background: ${({theme:e})=>e.colors.warmCream};
  margin-bottom: 10px;
`,hx=h.p`
  margin: 0 0 6px;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text900};
`,mx=h.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.55;
  color: ${({theme:e})=>e.colors.text700};
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,gx=h.button`
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
`,V0=h.p`
  margin: 0;
  color: ${({theme:e})=>e.colors.text700};
  font-size: 0.95rem;
`,Lx=()=>{const e=Ot(),{expertId:t}=yo(),n=t?Ph(t):void 0,r=n!=null&&n.centerPlaceId?Rs(n.centerPlaceId):void 0,[i,o]=k.useState(!1);if(!n)return s.jsxs(R0,{children:[s.jsxs(z0,{children:[s.jsx(M0,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),s.jsx(_0,{children:"전문가"})]}),s.jsx(Xt,{children:s.jsx(gr,{children:"프로필을 찾을 수 없어요."})})]});const l=n.programs.filter(u=>u.status==="ongoing"),a=n.programs.filter(u=>u.status==="past");return s.jsxs(R0,{children:[s.jsxs(z0,{children:[s.jsx(M0,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),s.jsx(_0,{children:"명상 전문가"})]}),s.jsxs(sx,{children:[s.jsx(ax,{src:n.avatarUrl,alt:""}),s.jsx(ux,{children:n.name}),s.jsx(N0,{children:n.specialties.map(u=>s.jsx(cx,{children:u},u))})]}),s.jsxs(Xt,{children:[s.jsx(Ln,{children:"자기소개"}),s.jsx(gr,{children:n.intro})]}),s.jsxs(Xt,{children:[s.jsx(Ln,{children:"학위·이수"}),s.jsx(A0,{children:[...n.degrees,...n.certificates].map(u=>s.jsx("li",{children:u},u))})]}),s.jsxs(Xt,{children:[s.jsx(Ln,{children:"경력"}),s.jsx(A0,{children:n.careers.map(u=>s.jsx("li",{children:u},u))})]}),s.jsxs(Xt,{children:[s.jsx(Ln,{children:"클래스·분야"}),s.jsx(N0,{style:{justifyContent:"flex-start"},children:n.classTypes.map(u=>{const c=lx(n,u);return s.jsx(dx,{type:"button",disabled:!c,title:c?`${c.title} 상세 보기`:"등록된 클래스가 없어요",onClick:()=>{c&&e(`/meditation/expert/${n.id}/class/${c.id}`)},children:u},u)})})]}),s.jsxs(Xt,{children:[s.jsx(Ln,{children:"센터·활동 지역"}),n.hasCenter&&n.centerSummary&&s.jsx(gr,{style:{marginBottom:8},children:n.centerSummary}),n.hasCenter&&n.centerPlaceId&&r&&s.jsxs(px,{type:"button",onClick:()=>e(`/meditation/place/${n.centerPlaceId}`),children:["연결된 명상지 보기 — ",r.name]}),!n.hasCenter&&n.activityAreas&&n.activityAreas.length>0&&s.jsxs(gr,{children:["주 활동 반경: ",n.activityAreas.join(", ")]})]}),s.jsxs(Xt,{children:[s.jsx(Ln,{children:"진행 중인 클래스"}),l.length===0&&s.jsx(gr,{children:"현재 모집 중인 공개 일정이 없어요."}),l.map(u=>s.jsxs(F0,{type:"button","aria-label":`${u.title} 클래스 상세`,onClick:()=>e(`/meditation/expert/${n.id}/class/${u.id}`),children:[u.imageUrl&&s.jsx(B0,{src:u.imageUrl,alt:"",draggable:!1}),s.jsxs(U0,{children:[s.jsx(H0,{children:"진행 중"}),s.jsx(D0,{children:u.title}),s.jsx(O0,{children:u.description})]})]},u.id))]}),s.jsxs(Xt,{children:[s.jsx(Ln,{children:"이전 프로그램"}),a.length===0&&s.jsx(gr,{children:"아직 공개된 이력이 없어요."}),a.map(u=>s.jsxs(F0,{type:"button","aria-label":`${u.title} 클래스 상세`,onClick:()=>e(`/meditation/expert/${n.id}/class/${u.id}`),children:[u.imageUrl&&s.jsx(B0,{src:u.imageUrl,alt:"",draggable:!1}),s.jsxs(U0,{children:[s.jsx(H0,{$past:!0,children:"종료"}),s.jsx(D0,{children:u.title}),s.jsx(O0,{children:u.description})]})]},u.id))]}),s.jsxs(Xt,{children:[s.jsx(Ln,{children:"후기"}),n.reviews.length===0&&s.jsx(V0,{children:"등록된 후기가 없어요."}),n.reviews.length>0&&s.jsxs(s.Fragment,{children:[n.reviews.slice(0,2).map((u,c)=>s.jsxs(fx,{children:[s.jsxs(hx,{children:[u.author,u.rating!=null?` · ${is(u.rating)}`:""]}),s.jsx(mx,{children:u.body})]},`${u.author}-${c}`)),n.reviews.length>2&&s.jsxs(V0,{style:{marginBottom:10},children:["외 ",n.reviews.length-2,"건의 후기가 더 있어요."]}),s.jsxs(gx,{type:"button",onClick:()=>o(!0),children:["전체 후기 보기 · ",n.reviews.length,"건"]})]})]}),s.jsx(Th,{open:i,onClose:()=>o(!1),heading:"후기",reviews:n.reviews})]})},W0=h.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 0 calc(48px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};
`,K0=h.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  padding-top: calc(16px + env(safe-area-inset-top, 0px));
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.96);
  z-index: 5;
`,q0=h.button`
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
`,Y0=h.h1`
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0;
  flex: 1;
  min-width: 0;
`,xx=h.div`
  width: 100%;
`,yx=h.img`
  width: 100%;
  max-height: 240px;
  object-fit: cover;
  display: block;
  background: ${({theme:e})=>e.colors.bg100};
`,vx=h.div`
  padding: 20px 20px 28px;
`,wx=h.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 8px;
  margin-bottom: 12px;
  background: ${({theme:e,$past:t})=>t?e.colors.bg100:e.colors.primary100};
  color: ${({theme:e,$past:t})=>t?e.colors.text700:e.colors.primary700};
`,kx=h.h2`
  margin: 0 0 14px;
  font-size: 1.45rem;
  font-weight: 700;
  line-height: 1.3;
`,bx=h.p`
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.65;
  color: ${({theme:e})=>e.colors.text700};
`,Sx=h.button`
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
`,Cx=h.p`
  padding: 32px 20px;
  color: ${({theme:e})=>e.colors.text700};
`,jx=()=>{const e=Ot(),{expertId:t,programId:n}=yo(),r=t?Ph(t):void 0,i=r==null?void 0:r.programs.find(o=>o.id===n);return!r||!i?s.jsxs(W0,{children:[s.jsxs(K0,{children:[s.jsx(q0,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),s.jsx(Y0,{children:"클래스"})]}),s.jsx(Cx,{children:"클래스 정보를 찾을 수 없어요."})]}):s.jsxs(W0,{children:[s.jsxs(K0,{children:[s.jsx(q0,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),s.jsx(Y0,{children:"클래스 상세"})]}),i.imageUrl?s.jsx(xx,{children:s.jsx(yx,{src:i.imageUrl,alt:""})}):s.jsx("div",{style:{height:8}}),s.jsxs(vx,{children:[s.jsx(wx,{$past:i.status==="past",children:i.status==="ongoing"?"진행 중":"종료된 프로그램"}),s.jsx(kx,{children:i.title}),s.jsx(bx,{children:i.description}),s.jsxs(Sx,{type:"button",onClick:()=>e(`/meditation/expert/${r.id}`),children:["← ",r.name," 프로필로 돌아가기"]})]})]})};function $x(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const Ex=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Px=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Tx={};function Z0(e,t){return(Tx.jsx?Px:Ex).test(e)}const Ix=/[ \t\n\f\r]/g;function Rx(e){return typeof e=="object"?e.type==="text"?Q0(e.value):!1:Q0(e)}function Q0(e){return e.replace(Ix,"")===""}class vo{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}vo.prototype.normal={};vo.prototype.property={};vo.prototype.space=void 0;function Ih(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new vo(n,r,t)}function Xu(e){return e.toLowerCase()}class dt{constructor(t,n){this.attribute=n,this.property=t}}dt.prototype.attribute="";dt.prototype.booleanish=!1;dt.prototype.boolean=!1;dt.prototype.commaOrSpaceSeparated=!1;dt.prototype.commaSeparated=!1;dt.prototype.defined=!1;dt.prototype.mustUseProperty=!1;dt.prototype.number=!1;dt.prototype.overloadedBoolean=!1;dt.prototype.property="";dt.prototype.spaceSeparated=!1;dt.prototype.space=void 0;let zx=0;const ne=pr(),ze=pr(),Ju=pr(),B=pr(),xe=pr(),Or=pr(),ht=pr();function pr(){return 2**++zx}const ec=Object.freeze(Object.defineProperty({__proto__:null,boolean:ne,booleanish:ze,commaOrSpaceSeparated:ht,commaSeparated:Or,number:B,overloadedBoolean:Ju,spaceSeparated:xe},Symbol.toStringTag,{value:"Module"})),va=Object.keys(ec);class m1 extends dt{constructor(t,n,r,i){let o=-1;if(super(t,n),G0(this,"space",i),typeof r=="number")for(;++o<va.length;){const l=va[o];G0(this,va[o],(r&ec[l])===ec[l])}}}m1.prototype.defined=!0;function G0(e,t,n){n&&(e[t]=n)}function si(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const o=new m1(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[Xu(r)]=r,n[Xu(o.attribute)]=r}return new vo(t,n,e.space)}const Rh=si({properties:{ariaActiveDescendant:null,ariaAtomic:ze,ariaAutoComplete:null,ariaBusy:ze,ariaChecked:ze,ariaColCount:B,ariaColIndex:B,ariaColSpan:B,ariaControls:xe,ariaCurrent:null,ariaDescribedBy:xe,ariaDetails:null,ariaDisabled:ze,ariaDropEffect:xe,ariaErrorMessage:null,ariaExpanded:ze,ariaFlowTo:xe,ariaGrabbed:ze,ariaHasPopup:null,ariaHidden:ze,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:xe,ariaLevel:B,ariaLive:null,ariaModal:ze,ariaMultiLine:ze,ariaMultiSelectable:ze,ariaOrientation:null,ariaOwns:xe,ariaPlaceholder:null,ariaPosInSet:B,ariaPressed:ze,ariaReadOnly:ze,ariaRelevant:null,ariaRequired:ze,ariaRoleDescription:xe,ariaRowCount:B,ariaRowIndex:B,ariaRowSpan:B,ariaSelected:ze,ariaSetSize:B,ariaSort:null,ariaValueMax:B,ariaValueMin:B,ariaValueNow:B,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function zh(e,t){return t in e?e[t]:t}function Mh(e,t){return zh(e,t.toLowerCase())}const Mx=si({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Or,acceptCharset:xe,accessKey:xe,action:null,allow:null,allowFullScreen:ne,allowPaymentRequest:ne,allowUserMedia:ne,alt:null,as:null,async:ne,autoCapitalize:null,autoComplete:xe,autoFocus:ne,autoPlay:ne,blocking:xe,capture:null,charSet:null,checked:ne,cite:null,className:xe,cols:B,colSpan:null,content:null,contentEditable:ze,controls:ne,controlsList:xe,coords:B|Or,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ne,defer:ne,dir:null,dirName:null,disabled:ne,download:Ju,draggable:ze,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ne,formTarget:null,headers:xe,height:B,hidden:Ju,high:B,href:null,hrefLang:null,htmlFor:xe,httpEquiv:xe,id:null,imageSizes:null,imageSrcSet:null,inert:ne,inputMode:null,integrity:null,is:null,isMap:ne,itemId:null,itemProp:xe,itemRef:xe,itemScope:ne,itemType:xe,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ne,low:B,manifest:null,max:null,maxLength:B,media:null,method:null,min:null,minLength:B,multiple:ne,muted:ne,name:null,nonce:null,noModule:ne,noValidate:ne,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ne,optimum:B,pattern:null,ping:xe,placeholder:null,playsInline:ne,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ne,referrerPolicy:null,rel:xe,required:ne,reversed:ne,rows:B,rowSpan:B,sandbox:xe,scope:null,scoped:ne,seamless:ne,selected:ne,shadowRootClonable:ne,shadowRootDelegatesFocus:ne,shadowRootMode:null,shape:null,size:B,sizes:null,slot:null,span:B,spellCheck:ze,src:null,srcDoc:null,srcLang:null,srcSet:null,start:B,step:null,style:null,tabIndex:B,target:null,title:null,translate:null,type:null,typeMustMatch:ne,useMap:null,value:ze,width:B,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:xe,axis:null,background:null,bgColor:null,border:B,borderColor:null,bottomMargin:B,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ne,declare:ne,event:null,face:null,frame:null,frameBorder:null,hSpace:B,leftMargin:B,link:null,longDesc:null,lowSrc:null,marginHeight:B,marginWidth:B,noResize:ne,noHref:ne,noShade:ne,noWrap:ne,object:null,profile:null,prompt:null,rev:null,rightMargin:B,rules:null,scheme:null,scrolling:ze,standby:null,summary:null,text:null,topMargin:B,valueType:null,version:null,vAlign:null,vLink:null,vSpace:B,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ne,disableRemotePlayback:ne,prefix:null,property:null,results:B,security:null,unselectable:null},space:"html",transform:Mh}),_x=si({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:ht,accentHeight:B,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:B,amplitude:B,arabicForm:null,ascent:B,attributeName:null,attributeType:null,azimuth:B,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:B,by:null,calcMode:null,capHeight:B,className:xe,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:B,diffuseConstant:B,direction:null,display:null,dur:null,divisor:B,dominantBaseline:null,download:ne,dx:null,dy:null,edgeMode:null,editable:null,elevation:B,enableBackground:null,end:null,event:null,exponent:B,externalResourcesRequired:null,fill:null,fillOpacity:B,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Or,g2:Or,glyphName:Or,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:B,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:B,horizOriginX:B,horizOriginY:B,id:null,ideographic:B,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:B,k:B,k1:B,k2:B,k3:B,k4:B,kernelMatrix:ht,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:B,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:B,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:B,overlineThickness:B,paintOrder:null,panose1:null,path:null,pathLength:B,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:xe,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:B,pointsAtY:B,pointsAtZ:B,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:ht,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:ht,rev:ht,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:ht,requiredFeatures:ht,requiredFonts:ht,requiredFormats:ht,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:B,specularExponent:B,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:B,strikethroughThickness:B,string:null,stroke:null,strokeDashArray:ht,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:B,strokeOpacity:B,strokeWidth:null,style:null,surfaceScale:B,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:ht,tabIndex:B,tableValues:null,target:null,targetX:B,targetY:B,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:ht,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:B,underlineThickness:B,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:B,values:null,vAlphabetic:B,vMathematical:B,vectorEffect:null,vHanging:B,vIdeographic:B,version:null,vertAdvY:B,vertOriginX:B,vertOriginY:B,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:B,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:zh}),_h=si({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),Nh=si({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Mh}),Ah=si({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),Nx={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Ax=/[A-Z]/g,X0=/-[a-z]/g,Fx=/^data[-\w.:]+$/i;function Dx(e,t){const n=Xu(t);let r=t,i=dt;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Fx.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(X0,Bx);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!X0.test(o)){let l=o.replace(Ax,Ox);l.charAt(0)!=="-"&&(l="-"+l),t="data"+l}}i=m1}return new i(r,t)}function Ox(e){return"-"+e.toLowerCase()}function Bx(e){return e.charAt(1).toUpperCase()}const Ux=Ih([Rh,Mx,_h,Nh,Ah],"html"),g1=Ih([Rh,_x,_h,Nh,Ah],"svg");function Hx(e){return e.join(" ").trim()}var L1={},J0=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Vx=/\n/g,Wx=/^\s*/,Kx=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,qx=/^:\s*/,Yx=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Zx=/^[;\s]*/,Qx=/^\s+|\s+$/g,Gx=`
`,ep="/",tp="*",qn="",Xx="comment",Jx="declaration";function ey(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(y){var v=y.match(Vx);v&&(n+=v.length);var C=y.lastIndexOf(Gx);r=~C?y.length-C:r+y.length}function o(){var y={line:n,column:r};return function(v){return v.position=new l(y),c(),v}}function l(y){this.start=y,this.end={line:n,column:r},this.source=t.source}l.prototype.content=e;function a(y){var v=new Error(t.source+":"+n+":"+r+": "+y);if(v.reason=y,v.filename=t.source,v.line=n,v.column=r,v.source=e,!t.silent)throw v}function u(y){var v=y.exec(e);if(v){var C=v[0];return i(C),e=e.slice(C.length),v}}function c(){u(Wx)}function d(y){var v;for(y=y||[];v=p();)v!==!1&&y.push(v);return y}function p(){var y=o();if(!(ep!=e.charAt(0)||tp!=e.charAt(1))){for(var v=2;qn!=e.charAt(v)&&(tp!=e.charAt(v)||ep!=e.charAt(v+1));)++v;if(v+=2,qn===e.charAt(v-1))return a("End of comment missing");var C=e.slice(2,v-2);return r+=2,i(C),e=e.slice(v),r+=2,y({type:Xx,comment:C})}}function m(){var y=o(),v=u(Kx);if(v){if(p(),!u(qx))return a("property missing ':'");var C=u(Yx),g=y({type:Jx,property:np(v[0].replace(J0,qn)),value:C?np(C[0].replace(J0,qn)):qn});return u(Zx),g}}function f(){var y=[];d(y);for(var v;v=m();)v!==!1&&(y.push(v),d(y));return y}return c(),f()}function np(e){return e?e.replace(Qx,qn):qn}var ty=ey,ny=bl&&bl.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(L1,"__esModule",{value:!0});L1.default=iy;const ry=ny(ty);function iy(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,ry.default)(e),i=typeof t=="function";return r.forEach(o=>{if(o.type!=="declaration")return;const{property:l,value:a}=o;i?t(l,a,o):a&&(n=n||{},n[l]=a)}),n}var _s={};Object.defineProperty(_s,"__esModule",{value:!0});_s.camelCase=void 0;var oy=/^--[a-zA-Z0-9_-]+$/,ly=/-([a-z])/g,sy=/^[^-]+$/,ay=/^-(webkit|moz|ms|o|khtml)-/,uy=/^-(ms)-/,cy=function(e){return!e||sy.test(e)||oy.test(e)},dy=function(e,t){return t.toUpperCase()},rp=function(e,t){return"".concat(t,"-")},py=function(e,t){return t===void 0&&(t={}),cy(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(uy,rp):e=e.replace(ay,rp),e.replace(ly,dy))};_s.camelCase=py;var fy=bl&&bl.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},hy=fy(L1),my=_s;function tc(e,t){var n={};return!e||typeof e!="string"||(0,hy.default)(e,function(r,i){r&&i&&(n[(0,my.camelCase)(r,t)]=i)}),n}tc.default=tc;var gy=tc;const Ly=ss(gy),Fh=Dh("end"),x1=Dh("start");function Dh(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function xy(e){const t=x1(e),n=Fh(e);if(t&&n)return{start:t,end:n}}function Di(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?ip(e.position):"start"in e||"end"in e?ip(e):"line"in e||"column"in e?nc(e):""}function nc(e){return op(e&&e.line)+":"+op(e&&e.column)}function ip(e){return nc(e&&e.start)+"-"+nc(e&&e.end)}function op(e){return e&&typeof e=="number"?e:1}class Xe extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},l=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(l=!0,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const u=r.indexOf(":");u===-1?o.ruleId=r:(o.source=r.slice(0,u),o.ruleId=r.slice(u+1))}if(!o.place&&o.ancestors&&o.ancestors){const u=o.ancestors[o.ancestors.length-1];u&&(o.place=u.position)}const a=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=a?a.line:void 0,this.name=Di(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=l&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Xe.prototype.file="";Xe.prototype.name="";Xe.prototype.reason="";Xe.prototype.message="";Xe.prototype.stack="";Xe.prototype.column=void 0;Xe.prototype.line=void 0;Xe.prototype.ancestors=void 0;Xe.prototype.cause=void 0;Xe.prototype.fatal=void 0;Xe.prototype.place=void 0;Xe.prototype.ruleId=void 0;Xe.prototype.source=void 0;const y1={}.hasOwnProperty,yy=new Map,vy=/[A-Z]/g,wy=new Set(["table","tbody","thead","tfoot","tr"]),ky=new Set(["td","th"]),Oh="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function by(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=Iy(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Ty(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?g1:Ux,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=Bh(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function Bh(e,t,n){if(t.type==="element")return Sy(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return Cy(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return $y(e,t,n);if(t.type==="mdxjsEsm")return jy(e,t);if(t.type==="root")return Ey(e,t,n);if(t.type==="text")return Py(e,t)}function Sy(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=g1,e.schema=i),e.ancestors.push(t);const o=Hh(e,t.tagName,!1),l=Ry(e,t);let a=w1(e,t);return wy.has(t.tagName)&&(a=a.filter(function(u){return typeof u=="string"?!Rx(u):!0})),Uh(e,l,o,t),v1(l,a),e.ancestors.pop(),e.schema=r,e.create(t,o,l,n)}function Cy(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}co(e,t.position)}function jy(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);co(e,t.position)}function $y(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=g1,e.schema=i),e.ancestors.push(t);const o=t.name===null?e.Fragment:Hh(e,t.name,!0),l=zy(e,t),a=w1(e,t);return Uh(e,l,o,t),v1(l,a),e.ancestors.pop(),e.schema=r,e.create(t,o,l,n)}function Ey(e,t,n){const r={};return v1(r,w1(e,t)),e.create(t,e.Fragment,r,n)}function Py(e,t){return t.value}function Uh(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function v1(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function Ty(e,t,n){return r;function r(i,o,l,a){const c=Array.isArray(l.children)?n:t;return a?c(o,l,a):c(o,l)}}function Iy(e,t){return n;function n(r,i,o,l){const a=Array.isArray(o.children),u=x1(r);return t(i,o,l,a,{columnNumber:u?u.column-1:void 0,fileName:e,lineNumber:u?u.line:void 0},void 0)}}function Ry(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&y1.call(t.properties,i)){const o=My(e,i,t.properties[i]);if(o){const[l,a]=o;e.tableCellAlignToStyle&&l==="align"&&typeof a=="string"&&ky.has(t.tagName)?r=a:n[l]=a}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function zy(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const l=o.expression;l.type;const a=l.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else co(e,t.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const a=r.value.data.estree.body[0];a.type,o=e.evaluater.evaluateExpression(a.expression)}else co(e,t.position);else o=r.value===null?!0:r.value;n[i]=o}return n}function w1(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:yy;for(;++r<t.children.length;){const o=t.children[r];let l;if(e.passKeys){const u=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(u){const c=i.get(u)||0;l=u+"-"+c,i.set(u,c+1)}}const a=Bh(e,o,l);a!==void 0&&n.push(a)}return n}function My(e,t,n){const r=Dx(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?$x(n):Hx(n)),r.property==="style"){let i=typeof n=="object"?n:_y(e,String(n));return e.stylePropertyNameCase==="css"&&(i=Ny(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?Nx[r.property]||r.property:r.attribute,n]}}function _y(e,t){try{return Ly(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new Xe("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=Oh+"#cannot-parse-style-attribute",i}}function Hh(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let o=-1,l;for(;++o<i.length;){const a=Z0(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};l=l?{type:"MemberExpression",object:l,property:a,computed:!!(o&&a.type==="Literal"),optional:!1}:a}r=l}else r=Z0(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return y1.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);co(e)}function co(e,t){const n=new Xe("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Oh+"#cannot-handle-mdx-estrees-without-createevaluater",n}function Ny(e){const t={};let n;for(n in e)y1.call(e,n)&&(t[Ay(n)]=e[n]);return t}function Ay(e){let t=e.replace(vy,Fy);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function Fy(e){return"-"+e.toLowerCase()}const wa={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Dy={};function Oy(e,t){const n=Dy,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Vh(e,r,i)}function Vh(e,t,n){if(By(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return lp(e.children,t,n)}return Array.isArray(e)?lp(e,t,n):""}function lp(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=Vh(e[i],t,n);return r.join("")}function By(e){return!!(e&&typeof e=="object")}const sp=document.createElement("i");function k1(e){const t="&"+e+";";sp.innerHTML=t;const n=sp.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function Qt(e,t,n,r){const i=e.length;let o=0,l;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)l=Array.from(r),l.unshift(t,n),e.splice(...l);else for(n&&e.splice(t,n);o<r.length;)l=r.slice(o,o+1e4),l.unshift(t,0),e.splice(...l),o+=1e4,t+=1e4}function Ct(e,t){return e.length>0?(Qt(e,e.length,0,t),e):t}const ap={}.hasOwnProperty;function Uy(e){const t={};let n=-1;for(;++n<e.length;)Hy(t,e[n]);return t}function Hy(e,t){let n;for(n in t){const i=(ap.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let l;if(o)for(l in o){ap.call(i,l)||(i[l]=[]);const a=o[l];Vy(i[l],Array.isArray(a)?a:a?[a]:[])}}}function Vy(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Qt(e,0,0,r)}function Wh(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Br(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Kt=Hn(/[A-Za-z]/),xt=Hn(/[\dA-Za-z]/),Wy=Hn(/[#-'*+\--9=?A-Z^-~]/);function rc(e){return e!==null&&(e<32||e===127)}const ic=Hn(/\d/),Ky=Hn(/[\dA-Fa-f]/),qy=Hn(/[!-/:-@[-`{-~]/);function J(e){return e!==null&&e<-2}function ct(e){return e!==null&&(e<0||e===32)}function he(e){return e===-2||e===-1||e===32}const Yy=Hn(new RegExp("\\p{P}|\\p{S}","u")),Zy=Hn(/\s/);function Hn(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function ai(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let l="";if(o===37&&xt(e.charCodeAt(n+1))&&xt(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(l=String.fromCharCode(o));else if(o>55295&&o<57344){const a=e.charCodeAt(n+1);o<56320&&a>56319&&a<57344?(l=String.fromCharCode(o,a),i=1):l="�"}else l=String.fromCharCode(o);l&&(t.push(e.slice(r,n),encodeURIComponent(l)),r=n+i+1,l=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function ve(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return l;function l(u){return he(u)?(e.enter(n),a(u)):t(u)}function a(u){return he(u)&&o++<i?(e.consume(u),a):(e.exit(n),t(u))}}const Qy={tokenize:Gy};function Gy(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),ve(e,t,"linePrefix")}function i(a){return e.enter("paragraph"),o(a)}function o(a){const u=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=u),n=u,l(a)}function l(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return J(a)?(e.consume(a),e.exit("chunkText"),o):(e.consume(a),l)}}const Xy={tokenize:Jy},up={tokenize:ev};function Jy(e){const t=this,n=[];let r=0,i,o,l;return a;function a(x){if(r<n.length){const b=n[r];return t.containerState=b[1],e.attempt(b[0].continuation,u,c)(x)}return c(x)}function u(x){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&L();const b=t.events.length;let P=b,S;for(;P--;)if(t.events[P][0]==="exit"&&t.events[P][1].type==="chunkFlow"){S=t.events[P][1].end;break}g(r);let $=b;for(;$<t.events.length;)t.events[$][1].end={...S},$++;return Qt(t.events,P+1,0,t.events.slice(b)),t.events.length=$,c(x)}return a(x)}function c(x){if(r===n.length){if(!i)return m(x);if(i.currentConstruct&&i.currentConstruct.concrete)return y(x);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(up,d,p)(x)}function d(x){return i&&L(),g(r),m(x)}function p(x){return t.parser.lazy[t.now().line]=r!==n.length,l=t.now().offset,y(x)}function m(x){return t.containerState={},e.attempt(up,f,y)(x)}function f(x){return r++,n.push([t.currentConstruct,t.containerState]),m(x)}function y(x){if(x===null){i&&L(),g(0),e.consume(x);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),v(x)}function v(x){if(x===null){C(e.exit("chunkFlow"),!0),g(0),e.consume(x);return}return J(x)?(e.consume(x),C(e.exit("chunkFlow")),r=0,t.interrupt=void 0,a):(e.consume(x),v)}function C(x,b){const P=t.sliceStream(x);if(b&&P.push(null),x.previous=o,o&&(o.next=x),o=x,i.defineSkip(x.start),i.write(P),t.parser.lazy[x.start.line]){let S=i.events.length;for(;S--;)if(i.events[S][1].start.offset<l&&(!i.events[S][1].end||i.events[S][1].end.offset>l))return;const $=t.events.length;let I=$,E,T;for(;I--;)if(t.events[I][0]==="exit"&&t.events[I][1].type==="chunkFlow"){if(E){T=t.events[I][1].end;break}E=!0}for(g(r),S=$;S<t.events.length;)t.events[S][1].end={...T},S++;Qt(t.events,I+1,0,t.events.slice($)),t.events.length=S}}function g(x){let b=n.length;for(;b-- >x;){const P=n[b];t.containerState=P[1],P[0].exit.call(t,e)}n.length=x}function L(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function ev(e,t,n){return ve(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function cp(e){if(e===null||ct(e)||Zy(e))return 1;if(Yy(e))return 2}function b1(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const oc={name:"attention",resolveAll:tv,tokenize:nv};function tv(e,t){let n=-1,r,i,o,l,a,u,c,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;u=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const p={...e[r][1].end},m={...e[n][1].start};dp(p,-u),dp(m,u),l={type:u>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},a={type:u>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:m},o={type:u>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:u>1?"strong":"emphasis",start:{...l.start},end:{...a.end}},e[r][1].end={...l.start},e[n][1].start={...a.end},c=[],e[r][1].end.offset-e[r][1].start.offset&&(c=Ct(c,[["enter",e[r][1],t],["exit",e[r][1],t]])),c=Ct(c,[["enter",i,t],["enter",l,t],["exit",l,t],["enter",o,t]]),c=Ct(c,b1(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),c=Ct(c,[["exit",o,t],["enter",a,t],["exit",a,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,c=Ct(c,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,Qt(e,r-1,n-r+3,c),n=r+c.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function nv(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=cp(r);let o;return l;function l(u){return o=u,e.enter("attentionSequence"),a(u)}function a(u){if(u===o)return e.consume(u),a;const c=e.exit("attentionSequence"),d=cp(u),p=!d||d===2&&i||n.includes(u),m=!i||i===2&&d||n.includes(r);return c._open=!!(o===42?p:p&&(i||!m)),c._close=!!(o===42?m:m&&(d||!p)),t(u)}}function dp(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const rv={name:"autolink",tokenize:iv};function iv(e,t,n){let r=0;return i;function i(f){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(f){return Kt(f)?(e.consume(f),l):f===64?n(f):c(f)}function l(f){return f===43||f===45||f===46||xt(f)?(r=1,a(f)):c(f)}function a(f){return f===58?(e.consume(f),r=0,u):(f===43||f===45||f===46||xt(f))&&r++<32?(e.consume(f),a):(r=0,c(f))}function u(f){return f===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.exit("autolink"),t):f===null||f===32||f===60||rc(f)?n(f):(e.consume(f),u)}function c(f){return f===64?(e.consume(f),d):Wy(f)?(e.consume(f),c):n(f)}function d(f){return xt(f)?p(f):n(f)}function p(f){return f===46?(e.consume(f),r=0,d):f===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(f),e.exit("autolinkMarker"),e.exit("autolink"),t):m(f)}function m(f){if((f===45||xt(f))&&r++<63){const y=f===45?m:p;return e.consume(f),y}return n(f)}}const Ns={partial:!0,tokenize:ov};function ov(e,t,n){return r;function r(o){return he(o)?ve(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||J(o)?t(o):n(o)}}const Kh={continuation:{tokenize:sv},exit:av,name:"blockQuote",tokenize:lv};function lv(e,t,n){const r=this;return i;function i(l){if(l===62){const a=r.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(l),e.exit("blockQuoteMarker"),o}return n(l)}function o(l){return he(l)?(e.enter("blockQuotePrefixWhitespace"),e.consume(l),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(l))}}function sv(e,t,n){const r=this;return i;function i(l){return he(l)?ve(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l):o(l)}function o(l){return e.attempt(Kh,t,n)(l)}}function av(e){e.exit("blockQuote")}const qh={name:"characterEscape",tokenize:uv};function uv(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return qy(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const Yh={name:"characterReference",tokenize:cv};function cv(e,t,n){const r=this;let i=0,o,l;return a;function a(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),u}function u(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),c):(e.enter("characterReferenceValue"),o=31,l=xt,d(p))}function c(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,l=Ky,d):(e.enter("characterReferenceValue"),o=7,l=ic,d(p))}function d(p){if(p===59&&i){const m=e.exit("characterReferenceValue");return l===xt&&!k1(r.sliceSerialize(m))?n(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return l(p)&&i++<o?(e.consume(p),d):n(p)}}const pp={partial:!0,tokenize:pv},fp={concrete:!0,name:"codeFenced",tokenize:dv};function dv(e,t,n){const r=this,i={partial:!0,tokenize:P};let o=0,l=0,a;return u;function u(S){return c(S)}function c(S){const $=r.events[r.events.length-1];return o=$&&$[1].type==="linePrefix"?$[2].sliceSerialize($[1],!0).length:0,a=S,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(S)}function d(S){return S===a?(l++,e.consume(S),d):l<3?n(S):(e.exit("codeFencedFenceSequence"),he(S)?ve(e,p,"whitespace")(S):p(S))}function p(S){return S===null||J(S)?(e.exit("codeFencedFence"),r.interrupt?t(S):e.check(pp,v,b)(S)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),m(S))}function m(S){return S===null||J(S)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(S)):he(S)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),ve(e,f,"whitespace")(S)):S===96&&S===a?n(S):(e.consume(S),m)}function f(S){return S===null||J(S)?p(S):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),y(S))}function y(S){return S===null||J(S)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(S)):S===96&&S===a?n(S):(e.consume(S),y)}function v(S){return e.attempt(i,b,C)(S)}function C(S){return e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),g}function g(S){return o>0&&he(S)?ve(e,L,"linePrefix",o+1)(S):L(S)}function L(S){return S===null||J(S)?e.check(pp,v,b)(S):(e.enter("codeFlowValue"),x(S))}function x(S){return S===null||J(S)?(e.exit("codeFlowValue"),L(S)):(e.consume(S),x)}function b(S){return e.exit("codeFenced"),t(S)}function P(S,$,I){let E=0;return T;function T(F){return S.enter("lineEnding"),S.consume(F),S.exit("lineEnding"),z}function z(F){return S.enter("codeFencedFence"),he(F)?ve(S,R,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(F):R(F)}function R(F){return F===a?(S.enter("codeFencedFenceSequence"),A(F)):I(F)}function A(F){return F===a?(E++,S.consume(F),A):E>=l?(S.exit("codeFencedFenceSequence"),he(F)?ve(S,N,"whitespace")(F):N(F)):I(F)}function N(F){return F===null||J(F)?(S.exit("codeFencedFence"),$(F)):I(F)}}}function pv(e,t,n){const r=this;return i;function i(l){return l===null?n(l):(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),o)}function o(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}const ka={name:"codeIndented",tokenize:hv},fv={partial:!0,tokenize:mv};function hv(e,t,n){const r=this;return i;function i(c){return e.enter("codeIndented"),ve(e,o,"linePrefix",5)(c)}function o(c){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?l(c):n(c)}function l(c){return c===null?u(c):J(c)?e.attempt(fv,l,u)(c):(e.enter("codeFlowValue"),a(c))}function a(c){return c===null||J(c)?(e.exit("codeFlowValue"),l(c)):(e.consume(c),a)}function u(c){return e.exit("codeIndented"),t(c)}}function mv(e,t,n){const r=this;return i;function i(l){return r.parser.lazy[r.now().line]?n(l):J(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),i):ve(e,o,"linePrefix",5)(l)}function o(l){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(l):J(l)?i(l):n(l)}}const gv={name:"codeText",previous:xv,resolve:Lv,tokenize:yv};function Lv(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function xv(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function yv(e,t,n){let r=0,i,o;return l;function l(p){return e.enter("codeText"),e.enter("codeTextSequence"),a(p)}function a(p){return p===96?(e.consume(p),r++,a):(e.exit("codeTextSequence"),u(p))}function u(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),u):p===96?(o=e.enter("codeTextSequence"),i=0,d(p)):J(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),u):(e.enter("codeTextData"),c(p))}function c(p){return p===null||p===32||p===96||J(p)?(e.exit("codeTextData"),u(p)):(e.consume(p),c)}function d(p){return p===96?(e.consume(p),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(o.type="codeTextData",c(p))}}class vv{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&vi(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),vi(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),vi(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);vi(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);vi(this.left,n.reverse())}}}function vi(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Zh(e){const t={};let n=-1,r,i,o,l,a,u,c;const d=new vv(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(u=r[1]._tokenizer.events,o=0,o<u.length&&u[o][1].type==="lineEndingBlank"&&(o+=2),o<u.length&&u[o][1].type==="content"))for(;++o<u.length&&u[o][1].type!=="content";)u[o][1].type==="chunkText"&&(u[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,wv(d,n)),n=t[n],c=!0);else if(r[1]._container){for(o=n,i=void 0;o--;)if(l=d.get(o),l[1].type==="lineEnding"||l[1].type==="lineEndingBlank")l[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),l[1].type="lineEnding",i=o);else if(!(l[1].type==="linePrefix"||l[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},a=d.slice(i,n),a.unshift(r),d.splice(i,n-i+1,a))}}return Qt(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!c}function wv(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const o=[];let l=n._tokenizer;l||(l=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(l._contentTypeTextTrailing=!0));const a=l.events,u=[],c={};let d,p,m=-1,f=n,y=0,v=0;const C=[v];for(;f;){for(;e.get(++i)[1]!==f;);o.push(i),f._tokenizer||(d=r.sliceStream(f),f.next||d.push(null),p&&l.defineSkip(f.start),f._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(d),f._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),p=f,f=f.next}for(f=n;++m<a.length;)a[m][0]==="exit"&&a[m-1][0]==="enter"&&a[m][1].type===a[m-1][1].type&&a[m][1].start.line!==a[m][1].end.line&&(v=m+1,C.push(v),f._tokenizer=void 0,f.previous=void 0,f=f.next);for(l.events=[],f?(f._tokenizer=void 0,f.previous=void 0):C.pop(),m=C.length;m--;){const g=a.slice(C[m],C[m+1]),L=o.pop();u.push([L,L+g.length-1]),e.splice(L,2,g)}for(u.reverse(),m=-1;++m<u.length;)c[y+u[m][0]]=y+u[m][1],y+=u[m][1]-u[m][0]-1;return c}const kv={resolve:Sv,tokenize:Cv},bv={partial:!0,tokenize:jv};function Sv(e){return Zh(e),e}function Cv(e,t){let n;return r;function r(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?o(a):J(a)?e.check(bv,l,o)(a):(e.consume(a),i)}function o(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function l(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function jv(e,t,n){const r=this;return i;function i(l){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),ve(e,o,"linePrefix")}function o(l){if(l===null||J(l))return n(l);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(l):e.interrupt(r.parser.constructs.flow,n,t)(l)}}function Qh(e,t,n,r,i,o,l,a,u){const c=u||Number.POSITIVE_INFINITY;let d=0;return p;function p(g){return g===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(g),e.exit(o),m):g===null||g===32||g===41||rc(g)?n(g):(e.enter(r),e.enter(l),e.enter(a),e.enter("chunkString",{contentType:"string"}),v(g))}function m(g){return g===62?(e.enter(o),e.consume(g),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),f(g))}function f(g){return g===62?(e.exit("chunkString"),e.exit(a),m(g)):g===null||g===60||J(g)?n(g):(e.consume(g),g===92?y:f)}function y(g){return g===60||g===62||g===92?(e.consume(g),f):f(g)}function v(g){return!d&&(g===null||g===41||ct(g))?(e.exit("chunkString"),e.exit(a),e.exit(l),e.exit(r),t(g)):d<c&&g===40?(e.consume(g),d++,v):g===41?(e.consume(g),d--,v):g===null||g===32||g===40||rc(g)?n(g):(e.consume(g),g===92?C:v)}function C(g){return g===40||g===41||g===92?(e.consume(g),v):v(g)}}function Gh(e,t,n,r,i,o){const l=this;let a=0,u;return c;function c(f){return e.enter(r),e.enter(i),e.consume(f),e.exit(i),e.enter(o),d}function d(f){return a>999||f===null||f===91||f===93&&!u||f===94&&!a&&"_hiddenFootnoteSupport"in l.parser.constructs?n(f):f===93?(e.exit(o),e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):J(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),p(f))}function p(f){return f===null||f===91||f===93||J(f)||a++>999?(e.exit("chunkString"),d(f)):(e.consume(f),u||(u=!he(f)),f===92?m:p)}function m(f){return f===91||f===92||f===93?(e.consume(f),a++,p):p(f)}}function Xh(e,t,n,r,i,o){let l;return a;function a(m){return m===34||m===39||m===40?(e.enter(r),e.enter(i),e.consume(m),e.exit(i),l=m===40?41:m,u):n(m)}function u(m){return m===l?(e.enter(i),e.consume(m),e.exit(i),e.exit(r),t):(e.enter(o),c(m))}function c(m){return m===l?(e.exit(o),u(l)):m===null?n(m):J(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),ve(e,c,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(m))}function d(m){return m===l||m===null||J(m)?(e.exit("chunkString"),c(m)):(e.consume(m),m===92?p:d)}function p(m){return m===l||m===92?(e.consume(m),d):d(m)}}function Oi(e,t){let n;return r;function r(i){return J(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):he(i)?ve(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const $v={name:"definition",tokenize:Pv},Ev={partial:!0,tokenize:Tv};function Pv(e,t,n){const r=this;let i;return o;function o(f){return e.enter("definition"),l(f)}function l(f){return Gh.call(r,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(f)}function a(f){return i=Br(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),f===58?(e.enter("definitionMarker"),e.consume(f),e.exit("definitionMarker"),u):n(f)}function u(f){return ct(f)?Oi(e,c)(f):c(f)}function c(f){return Qh(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(f)}function d(f){return e.attempt(Ev,p,p)(f)}function p(f){return he(f)?ve(e,m,"whitespace")(f):m(f)}function m(f){return f===null||J(f)?(e.exit("definition"),r.parser.defined.push(i),t(f)):n(f)}}function Tv(e,t,n){return r;function r(a){return ct(a)?Oi(e,i)(a):n(a)}function i(a){return Xh(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function o(a){return he(a)?ve(e,l,"whitespace")(a):l(a)}function l(a){return a===null||J(a)?t(a):n(a)}}const Iv={name:"hardBreakEscape",tokenize:Rv};function Rv(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return J(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const zv={name:"headingAtx",resolve:Mv,tokenize:_v};function Mv(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Qt(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function _v(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),o(d)}function o(d){return e.enter("atxHeadingSequence"),l(d)}function l(d){return d===35&&r++<6?(e.consume(d),l):d===null||ct(d)?(e.exit("atxHeadingSequence"),a(d)):n(d)}function a(d){return d===35?(e.enter("atxHeadingSequence"),u(d)):d===null||J(d)?(e.exit("atxHeading"),t(d)):he(d)?ve(e,a,"whitespace")(d):(e.enter("atxHeadingText"),c(d))}function u(d){return d===35?(e.consume(d),u):(e.exit("atxHeadingSequence"),a(d))}function c(d){return d===null||d===35||ct(d)?(e.exit("atxHeadingText"),a(d)):(e.consume(d),c)}}const Nv=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],hp=["pre","script","style","textarea"],Av={concrete:!0,name:"htmlFlow",resolveTo:Ov,tokenize:Bv},Fv={partial:!0,tokenize:Hv},Dv={partial:!0,tokenize:Uv};function Ov(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Bv(e,t,n){const r=this;let i,o,l,a,u;return c;function c(j){return d(j)}function d(j){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(j),p}function p(j){return j===33?(e.consume(j),m):j===47?(e.consume(j),o=!0,v):j===63?(e.consume(j),i=3,r.interrupt?t:w):Kt(j)?(e.consume(j),l=String.fromCharCode(j),C):n(j)}function m(j){return j===45?(e.consume(j),i=2,f):j===91?(e.consume(j),i=5,a=0,y):Kt(j)?(e.consume(j),i=4,r.interrupt?t:w):n(j)}function f(j){return j===45?(e.consume(j),r.interrupt?t:w):n(j)}function y(j){const re="CDATA[";return j===re.charCodeAt(a++)?(e.consume(j),a===re.length?r.interrupt?t:R:y):n(j)}function v(j){return Kt(j)?(e.consume(j),l=String.fromCharCode(j),C):n(j)}function C(j){if(j===null||j===47||j===62||ct(j)){const re=j===47,oe=l.toLowerCase();return!re&&!o&&hp.includes(oe)?(i=1,r.interrupt?t(j):R(j)):Nv.includes(l.toLowerCase())?(i=6,re?(e.consume(j),g):r.interrupt?t(j):R(j)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(j):o?L(j):x(j))}return j===45||xt(j)?(e.consume(j),l+=String.fromCharCode(j),C):n(j)}function g(j){return j===62?(e.consume(j),r.interrupt?t:R):n(j)}function L(j){return he(j)?(e.consume(j),L):T(j)}function x(j){return j===47?(e.consume(j),T):j===58||j===95||Kt(j)?(e.consume(j),b):he(j)?(e.consume(j),x):T(j)}function b(j){return j===45||j===46||j===58||j===95||xt(j)?(e.consume(j),b):P(j)}function P(j){return j===61?(e.consume(j),S):he(j)?(e.consume(j),P):x(j)}function S(j){return j===null||j===60||j===61||j===62||j===96?n(j):j===34||j===39?(e.consume(j),u=j,$):he(j)?(e.consume(j),S):I(j)}function $(j){return j===u?(e.consume(j),u=null,E):j===null||J(j)?n(j):(e.consume(j),$)}function I(j){return j===null||j===34||j===39||j===47||j===60||j===61||j===62||j===96||ct(j)?P(j):(e.consume(j),I)}function E(j){return j===47||j===62||he(j)?x(j):n(j)}function T(j){return j===62?(e.consume(j),z):n(j)}function z(j){return j===null||J(j)?R(j):he(j)?(e.consume(j),z):n(j)}function R(j){return j===45&&i===2?(e.consume(j),Y):j===60&&i===1?(e.consume(j),K):j===62&&i===4?(e.consume(j),q):j===63&&i===3?(e.consume(j),w):j===93&&i===5?(e.consume(j),D):J(j)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(Fv,Z,A)(j)):j===null||J(j)?(e.exit("htmlFlowData"),A(j)):(e.consume(j),R)}function A(j){return e.check(Dv,N,Z)(j)}function N(j){return e.enter("lineEnding"),e.consume(j),e.exit("lineEnding"),F}function F(j){return j===null||J(j)?A(j):(e.enter("htmlFlowData"),R(j))}function Y(j){return j===45?(e.consume(j),w):R(j)}function K(j){return j===47?(e.consume(j),l="",_):R(j)}function _(j){if(j===62){const re=l.toLowerCase();return hp.includes(re)?(e.consume(j),q):R(j)}return Kt(j)&&l.length<8?(e.consume(j),l+=String.fromCharCode(j),_):R(j)}function D(j){return j===93?(e.consume(j),w):R(j)}function w(j){return j===62?(e.consume(j),q):j===45&&i===2?(e.consume(j),w):R(j)}function q(j){return j===null||J(j)?(e.exit("htmlFlowData"),Z(j)):(e.consume(j),q)}function Z(j){return e.exit("htmlFlow"),t(j)}}function Uv(e,t,n){const r=this;return i;function i(l){return J(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),o):n(l)}function o(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}function Hv(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Ns,t,n)}}const Vv={name:"htmlText",tokenize:Wv};function Wv(e,t,n){const r=this;let i,o,l;return a;function a(w){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(w),u}function u(w){return w===33?(e.consume(w),c):w===47?(e.consume(w),P):w===63?(e.consume(w),x):Kt(w)?(e.consume(w),I):n(w)}function c(w){return w===45?(e.consume(w),d):w===91?(e.consume(w),o=0,y):Kt(w)?(e.consume(w),L):n(w)}function d(w){return w===45?(e.consume(w),f):n(w)}function p(w){return w===null?n(w):w===45?(e.consume(w),m):J(w)?(l=p,K(w)):(e.consume(w),p)}function m(w){return w===45?(e.consume(w),f):p(w)}function f(w){return w===62?Y(w):w===45?m(w):p(w)}function y(w){const q="CDATA[";return w===q.charCodeAt(o++)?(e.consume(w),o===q.length?v:y):n(w)}function v(w){return w===null?n(w):w===93?(e.consume(w),C):J(w)?(l=v,K(w)):(e.consume(w),v)}function C(w){return w===93?(e.consume(w),g):v(w)}function g(w){return w===62?Y(w):w===93?(e.consume(w),g):v(w)}function L(w){return w===null||w===62?Y(w):J(w)?(l=L,K(w)):(e.consume(w),L)}function x(w){return w===null?n(w):w===63?(e.consume(w),b):J(w)?(l=x,K(w)):(e.consume(w),x)}function b(w){return w===62?Y(w):x(w)}function P(w){return Kt(w)?(e.consume(w),S):n(w)}function S(w){return w===45||xt(w)?(e.consume(w),S):$(w)}function $(w){return J(w)?(l=$,K(w)):he(w)?(e.consume(w),$):Y(w)}function I(w){return w===45||xt(w)?(e.consume(w),I):w===47||w===62||ct(w)?E(w):n(w)}function E(w){return w===47?(e.consume(w),Y):w===58||w===95||Kt(w)?(e.consume(w),T):J(w)?(l=E,K(w)):he(w)?(e.consume(w),E):Y(w)}function T(w){return w===45||w===46||w===58||w===95||xt(w)?(e.consume(w),T):z(w)}function z(w){return w===61?(e.consume(w),R):J(w)?(l=z,K(w)):he(w)?(e.consume(w),z):E(w)}function R(w){return w===null||w===60||w===61||w===62||w===96?n(w):w===34||w===39?(e.consume(w),i=w,A):J(w)?(l=R,K(w)):he(w)?(e.consume(w),R):(e.consume(w),N)}function A(w){return w===i?(e.consume(w),i=void 0,F):w===null?n(w):J(w)?(l=A,K(w)):(e.consume(w),A)}function N(w){return w===null||w===34||w===39||w===60||w===61||w===96?n(w):w===47||w===62||ct(w)?E(w):(e.consume(w),N)}function F(w){return w===47||w===62||ct(w)?E(w):n(w)}function Y(w){return w===62?(e.consume(w),e.exit("htmlTextData"),e.exit("htmlText"),t):n(w)}function K(w){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),_}function _(w){return he(w)?ve(e,D,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(w):D(w)}function D(w){return e.enter("htmlTextData"),l(w)}}const S1={name:"labelEnd",resolveAll:Zv,resolveTo:Qv,tokenize:Gv},Kv={tokenize:Xv},qv={tokenize:Jv},Yv={tokenize:ew};function Zv(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&Qt(e,0,e.length,n),e}function Qv(e,t){let n=e.length,r=0,i,o,l,a;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(l){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(l=n);const u={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},c={type:"label",start:{...e[o][1].start},end:{...e[l][1].end}},d={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[l-2][1].start}};return a=[["enter",u,t],["enter",c,t]],a=Ct(a,e.slice(o+1,o+r+3)),a=Ct(a,[["enter",d,t]]),a=Ct(a,b1(t.parser.constructs.insideSpan.null,e.slice(o+r+4,l-3),t)),a=Ct(a,[["exit",d,t],e[l-2],e[l-1],["exit",c,t]]),a=Ct(a,e.slice(l+1)),a=Ct(a,[["exit",u,t]]),Qt(e,o,e.length,a),e}function Gv(e,t,n){const r=this;let i=r.events.length,o,l;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return a;function a(m){return o?o._inactive?p(m):(l=r.parser.defined.includes(Br(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(m),e.exit("labelMarker"),e.exit("labelEnd"),u):n(m)}function u(m){return m===40?e.attempt(Kv,d,l?d:p)(m):m===91?e.attempt(qv,d,l?c:p)(m):l?d(m):p(m)}function c(m){return e.attempt(Yv,d,p)(m)}function d(m){return t(m)}function p(m){return o._balanced=!0,n(m)}}function Xv(e,t,n){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),i}function i(p){return ct(p)?Oi(e,o)(p):o(p)}function o(p){return p===41?d(p):Qh(e,l,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function l(p){return ct(p)?Oi(e,u)(p):d(p)}function a(p){return n(p)}function u(p){return p===34||p===39||p===40?Xh(e,c,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):d(p)}function c(p){return ct(p)?Oi(e,d)(p):d(p)}function d(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),t):n(p)}}function Jv(e,t,n){const r=this;return i;function i(a){return Gh.call(r,e,o,l,"reference","referenceMarker","referenceString")(a)}function o(a){return r.parser.defined.includes(Br(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function l(a){return n(a)}}function ew(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const tw={name:"labelStartImage",resolveAll:S1.resolveAll,tokenize:nw};function nw(e,t,n){const r=this;return i;function i(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),o}function o(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),l):n(a)}function l(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const rw={name:"labelStartLink",resolveAll:S1.resolveAll,tokenize:iw};function iw(e,t,n){const r=this;return i;function i(l){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelLink"),o}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const ba={name:"lineEnding",tokenize:ow};function ow(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),ve(e,t,"linePrefix")}}const wl={name:"thematicBreak",tokenize:lw};function lw(e,t,n){let r=0,i;return o;function o(c){return e.enter("thematicBreak"),l(c)}function l(c){return i=c,a(c)}function a(c){return c===i?(e.enter("thematicBreakSequence"),u(c)):r>=3&&(c===null||J(c))?(e.exit("thematicBreak"),t(c)):n(c)}function u(c){return c===i?(e.consume(c),r++,u):(e.exit("thematicBreakSequence"),he(c)?ve(e,a,"whitespace")(c):a(c))}}const it={continuation:{tokenize:cw},exit:pw,name:"list",tokenize:uw},sw={partial:!0,tokenize:fw},aw={partial:!0,tokenize:dw};function uw(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,l=0;return a;function a(f){const y=r.containerState.type||(f===42||f===43||f===45?"listUnordered":"listOrdered");if(y==="listUnordered"?!r.containerState.marker||f===r.containerState.marker:ic(f)){if(r.containerState.type||(r.containerState.type=y,e.enter(y,{_container:!0})),y==="listUnordered")return e.enter("listItemPrefix"),f===42||f===45?e.check(wl,n,c)(f):c(f);if(!r.interrupt||f===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),u(f)}return n(f)}function u(f){return ic(f)&&++l<10?(e.consume(f),u):(!r.interrupt||l<2)&&(r.containerState.marker?f===r.containerState.marker:f===41||f===46)?(e.exit("listItemValue"),c(f)):n(f)}function c(f){return e.enter("listItemMarker"),e.consume(f),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||f,e.check(Ns,r.interrupt?n:d,e.attempt(sw,m,p))}function d(f){return r.containerState.initialBlankLine=!0,o++,m(f)}function p(f){return he(f)?(e.enter("listItemPrefixWhitespace"),e.consume(f),e.exit("listItemPrefixWhitespace"),m):n(f)}function m(f){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(f)}}function cw(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Ns,i,o);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,ve(e,t,"listItemIndent",r.containerState.size+1)(a)}function o(a){return r.containerState.furtherBlankLines||!he(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,l(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(aw,t,l)(a))}function l(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,ve(e,e.attempt(it,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function dw(e,t,n){const r=this;return ve(e,i,"listItemIndent",r.containerState.size+1);function i(o){const l=r.events[r.events.length-1];return l&&l[1].type==="listItemIndent"&&l[2].sliceSerialize(l[1],!0).length===r.containerState.size?t(o):n(o)}}function pw(e){e.exit(this.containerState.type)}function fw(e,t,n){const r=this;return ve(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const l=r.events[r.events.length-1];return!he(o)&&l&&l[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const mp={name:"setextUnderline",resolveTo:hw,tokenize:mw};function hw(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const l={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",l,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=l,e.push(["exit",l,t]),e}function mw(e,t,n){const r=this;let i;return o;function o(c){let d=r.events.length,p;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){p=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),i=c,l(c)):n(c)}function l(c){return e.enter("setextHeadingLineSequence"),a(c)}function a(c){return c===i?(e.consume(c),a):(e.exit("setextHeadingLineSequence"),he(c)?ve(e,u,"lineSuffix")(c):u(c))}function u(c){return c===null||J(c)?(e.exit("setextHeadingLine"),t(c)):n(c)}}const gw={tokenize:Lw};function Lw(e){const t=this,n=e.attempt(Ns,r,e.attempt(this.parser.constructs.flowInitial,i,ve(e,e.attempt(this.parser.constructs.flow,i,e.attempt(kv,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const xw={resolveAll:e3()},yw=Jh("string"),vw=Jh("text");function Jh(e){return{resolveAll:e3(e==="text"?ww:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,l,a);return l;function l(d){return c(d)?o(d):a(d)}function a(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),u}function u(d){return c(d)?(n.exit("data"),o(d)):(n.consume(d),u)}function c(d){if(d===null)return!0;const p=i[d];let m=-1;if(p)for(;++m<p.length;){const f=p[m];if(!f.previous||f.previous.call(r,r.previous))return!0}return!1}}}function e3(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function ww(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,l=-1,a=0,u;for(;o--;){const c=i[o];if(typeof c=="string"){for(l=c.length;c.charCodeAt(l-1)===32;)a++,l--;if(l)break;l=-1}else if(c===-2)u=!0,a++;else if(c!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(a=0),a){const c={type:n===e.length||u||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?l:r.start._bufferIndex+l,_index:r.start._index+o,line:r.end.line,column:r.end.column-a,offset:r.end.offset-a},end:{...r.end}};r.end={...c.start},r.start.offset===r.end.offset?Object.assign(r,c):(e.splice(n,0,["enter",c,t],["exit",c,t]),n+=2)}n++}return e}const kw={42:it,43:it,45:it,48:it,49:it,50:it,51:it,52:it,53:it,54:it,55:it,56:it,57:it,62:Kh},bw={91:$v},Sw={[-2]:ka,[-1]:ka,32:ka},Cw={35:zv,42:wl,45:[mp,wl],60:Av,61:mp,95:wl,96:fp,126:fp},jw={38:Yh,92:qh},$w={[-5]:ba,[-4]:ba,[-3]:ba,33:tw,38:Yh,42:oc,60:[rv,Vv],91:rw,92:[Iv,qh],93:S1,95:oc,96:gv},Ew={null:[oc,xw]},Pw={null:[42,95]},Tw={null:[]},Iw=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Pw,contentInitial:bw,disable:Tw,document:kw,flow:Cw,flowInitial:Sw,insideSpan:Ew,string:jw,text:$w},Symbol.toStringTag,{value:"Module"}));function Rw(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},o=[];let l=[],a=[];const u={attempt:$(P),check:$(S),consume:L,enter:x,exit:b,interrupt:$(S,{interrupt:!0})},c={code:null,containerState:{},defineSkip:v,events:[],now:y,parser:e,previous:null,sliceSerialize:m,sliceStream:f,write:p};let d=t.tokenize.call(c,u);return t.resolveAll&&o.push(t),c;function p(z){return l=Ct(l,z),C(),l[l.length-1]!==null?[]:(I(t,0),c.events=b1(o,c.events,c),c.events)}function m(z,R){return Mw(f(z),R)}function f(z){return zw(l,z)}function y(){const{_bufferIndex:z,_index:R,line:A,column:N,offset:F}=r;return{_bufferIndex:z,_index:R,line:A,column:N,offset:F}}function v(z){i[z.line]=z.column,T()}function C(){let z;for(;r._index<l.length;){const R=l[r._index];if(typeof R=="string")for(z=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===z&&r._bufferIndex<R.length;)g(R.charCodeAt(r._bufferIndex));else g(R)}}function g(z){d=d(z)}function L(z){J(z)?(r.line++,r.column=1,r.offset+=z===-3?2:1,T()):z!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===l[r._index].length&&(r._bufferIndex=-1,r._index++)),c.previous=z}function x(z,R){const A=R||{};return A.type=z,A.start=y(),c.events.push(["enter",A,c]),a.push(A),A}function b(z){const R=a.pop();return R.end=y(),c.events.push(["exit",R,c]),R}function P(z,R){I(z,R.from)}function S(z,R){R.restore()}function $(z,R){return A;function A(N,F,Y){let K,_,D,w;return Array.isArray(N)?Z(N):"tokenize"in N?Z([N]):q(N);function q(Q){return H;function H(G){const de=G!==null&&Q[G],se=G!==null&&Q.null,je=[...Array.isArray(de)?de:de?[de]:[],...Array.isArray(se)?se:se?[se]:[]];return Z(je)(G)}}function Z(Q){return K=Q,_=0,Q.length===0?Y:j(Q[_])}function j(Q){return H;function H(G){return w=E(),D=Q,Q.partial||(c.currentConstruct=Q),Q.name&&c.parser.constructs.disable.null.includes(Q.name)?oe():Q.tokenize.call(R?Object.assign(Object.create(c),R):c,u,re,oe)(G)}}function re(Q){return z(D,w),F}function oe(Q){return w.restore(),++_<K.length?j(K[_]):Y}}}function I(z,R){z.resolveAll&&!o.includes(z)&&o.push(z),z.resolve&&Qt(c.events,R,c.events.length-R,z.resolve(c.events.slice(R),c)),z.resolveTo&&(c.events=z.resolveTo(c.events,c))}function E(){const z=y(),R=c.previous,A=c.currentConstruct,N=c.events.length,F=Array.from(a);return{from:N,restore:Y};function Y(){r=z,c.previous=R,c.currentConstruct=A,c.events.length=N,a=F,T()}}function T(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function zw(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let l;if(n===i)l=[e[n].slice(r,o)];else{if(l=e.slice(n,i),r>-1){const a=l[0];typeof a=="string"?l[0]=a.slice(r):l.shift()}o>0&&l.push(e[i].slice(0,o))}return l}function Mw(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let l;if(typeof o=="string")l=o;else switch(o){case-5:{l="\r";break}case-4:{l=`
`;break}case-3:{l=`\r
`;break}case-2:{l=t?" ":"	";break}case-1:{if(!t&&i)continue;l=" ";break}default:l=String.fromCharCode(o)}i=o===-2,r.push(l)}return r.join("")}function _w(e){const r={constructs:Uy([Iw,...(e||{}).extensions||[]]),content:i(Qy),defined:[],document:i(Xy),flow:i(gw),lazy:{},string:i(yw),text:i(vw)};return r;function i(o){return l;function l(a){return Rw(r,o,a)}}}function Nw(e){for(;!Zh(e););return e}const gp=/[\0\t\n\r]/g;function Aw(){let e=1,t="",n=!0,r;return i;function i(o,l,a){const u=[];let c,d,p,m,f;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(l||void 0).decode(o)),p=0,t="",n&&(o.charCodeAt(0)===65279&&p++,n=void 0);p<o.length;){if(gp.lastIndex=p,c=gp.exec(o),m=c&&c.index!==void 0?c.index:o.length,f=o.charCodeAt(m),!c){t=o.slice(p);break}if(f===10&&p===m&&r)u.push(-3),r=void 0;else switch(r&&(u.push(-5),r=void 0),p<m&&(u.push(o.slice(p,m)),e+=m-p),f){case 0:{u.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,u.push(-2);e++<d;)u.push(-1);break}case 10:{u.push(-4),e=1;break}default:r=!0,e=1}p=m+1}return a&&(r&&u.push(-5),t&&u.push(t),u.push(null)),u}}const Fw=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Dw(e){return e.replace(Fw,Ow)}function Ow(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return Wh(n.slice(o?2:1),o?16:10)}return k1(n)||e}const t3={}.hasOwnProperty;function Bw(e,t,n){return t&&typeof t=="object"&&(n=t,t=void 0),Uw(n)(Nw(_w(n).document().write(Aw()(e,t,!0))))}function Uw(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(ko),autolinkProtocol:E,autolinkEmail:E,atxHeading:o(X),blockQuote:o(se),characterEscape:E,characterReference:E,codeFenced:o(je),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:o(je,l),codeText:o(Le,l),codeTextData:E,data:E,codeFlowValue:E,definition:o(te),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:o(ue),hardBreakEscape:o(pt),hardBreakTrailing:o(pt),htmlFlow:o(fn,l),htmlFlowData:E,htmlText:o(fn,l),htmlTextData:E,image:o(hn),label:l,link:o(ko),listItem:o(bo),listItemValue:m,listOrdered:o(ui,p),listUnordered:o(ui),paragraph:o(ci),reference:j,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:o(X),strong:o(di),thematicBreak:o(Co)},exit:{atxHeading:u(),atxHeadingSequence:P,autolink:u(),autolinkEmail:de,autolinkProtocol:G,blockQuote:u(),characterEscapeValue:T,characterReferenceMarkerHexadecimal:oe,characterReferenceMarkerNumeric:oe,characterReferenceValue:Q,characterReference:H,codeFenced:u(C),codeFencedFence:v,codeFencedFenceInfo:f,codeFencedFenceMeta:y,codeFlowValue:T,codeIndented:u(g),codeText:u(F),codeTextData:T,data:T,definition:u(),definitionDestinationString:b,definitionLabelString:L,definitionTitleString:x,emphasis:u(),hardBreakEscape:u(R),hardBreakTrailing:u(R),htmlFlow:u(A),htmlFlowData:T,htmlText:u(N),htmlTextData:T,image:u(K),label:D,labelText:_,lineEnding:z,link:u(Y),listItem:u(),listOrdered:u(),listUnordered:u(),paragraph:u(),referenceString:re,resourceDestinationString:w,resourceTitleString:q,resource:Z,setextHeading:u(I),setextHeadingLineSequence:$,setextHeadingText:S,strong:u(),thematicBreak:u()}};n3(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(M){let U={type:"root",children:[]};const ee={stack:[U],tokenStack:[],config:t,enter:a,exit:c,buffer:l,resume:d,data:n},le=[];let me=-1;for(;++me<M.length;)if(M[me][1].type==="listOrdered"||M[me][1].type==="listUnordered")if(M[me][0]==="enter")le.push(me);else{const ft=le.pop();me=i(M,ft,me)}for(me=-1;++me<M.length;){const ft=t[M[me][0]];t3.call(ft,M[me][1].type)&&ft[M[me][1].type].call(Object.assign({sliceSerialize:M[me][2].sliceSerialize},ee),M[me][1])}if(ee.tokenStack.length>0){const ft=ee.tokenStack[ee.tokenStack.length-1];(ft[1]||Lp).call(ee,void 0,ft[0])}for(U.position={start:xn(M.length>0?M[0][1].start:{line:1,column:1,offset:0}),end:xn(M.length>0?M[M.length-2][1].end:{line:1,column:1,offset:0})},me=-1;++me<t.transforms.length;)U=t.transforms[me](U)||U;return U}function i(M,U,ee){let le=U-1,me=-1,ft=!1,Bt,V,we,mn;for(;++le<=ee;){const Je=M[le];switch(Je[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Je[0]==="enter"?me++:me--,mn=void 0;break}case"lineEndingBlank":{Je[0]==="enter"&&(Bt&&!mn&&!me&&!we&&(we=le),mn=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:mn=void 0}if(!me&&Je[0]==="enter"&&Je[1].type==="listItemPrefix"||me===-1&&Je[0]==="exit"&&(Je[1].type==="listUnordered"||Je[1].type==="listOrdered")){if(Bt){let fr=le;for(V=void 0;fr--;){const Gt=M[fr];if(Gt[1].type==="lineEnding"||Gt[1].type==="lineEndingBlank"){if(Gt[0]==="exit")continue;V&&(M[V][1].type="lineEndingBlank",ft=!0),Gt[1].type="lineEnding",V=fr}else if(!(Gt[1].type==="linePrefix"||Gt[1].type==="blockQuotePrefix"||Gt[1].type==="blockQuotePrefixWhitespace"||Gt[1].type==="blockQuoteMarker"||Gt[1].type==="listItemIndent"))break}we&&(!V||we<V)&&(Bt._spread=!0),Bt.end=Object.assign({},V?M[V][1].start:Je[1].end),M.splice(V||le,0,["exit",Bt,Je[2]]),le++,ee++}if(Je[1].type==="listItemPrefix"){const fr={type:"listItem",_spread:!1,start:Object.assign({},Je[1].start),end:void 0};Bt=fr,M.splice(le,0,["enter",fr,Je[2]]),le++,ee++,we=void 0,mn=!0}}}return M[U][1]._spread=ft,ee}function o(M,U){return ee;function ee(le){a.call(this,M(le),le),U&&U.call(this,le)}}function l(){this.stack.push({type:"fragment",children:[]})}function a(M,U,ee){this.stack[this.stack.length-1].children.push(M),this.stack.push(M),this.tokenStack.push([U,ee||void 0]),M.position={start:xn(U.start),end:void 0}}function u(M){return U;function U(ee){M&&M.call(this,ee),c.call(this,ee)}}function c(M,U){const ee=this.stack.pop(),le=this.tokenStack.pop();if(le)le[0].type!==M.type&&(U?U.call(this,M,le[0]):(le[1]||Lp).call(this,M,le[0]));else throw new Error("Cannot close `"+M.type+"` ("+Di({start:M.start,end:M.end})+"): it’s not open");ee.position.end=xn(M.end)}function d(){return Oy(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function m(M){if(this.data.expectingFirstListItemValue){const U=this.stack[this.stack.length-2];U.start=Number.parseInt(this.sliceSerialize(M),10),this.data.expectingFirstListItemValue=void 0}}function f(){const M=this.resume(),U=this.stack[this.stack.length-1];U.lang=M}function y(){const M=this.resume(),U=this.stack[this.stack.length-1];U.meta=M}function v(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function C(){const M=this.resume(),U=this.stack[this.stack.length-1];U.value=M.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function g(){const M=this.resume(),U=this.stack[this.stack.length-1];U.value=M.replace(/(\r?\n|\r)$/g,"")}function L(M){const U=this.resume(),ee=this.stack[this.stack.length-1];ee.label=U,ee.identifier=Br(this.sliceSerialize(M)).toLowerCase()}function x(){const M=this.resume(),U=this.stack[this.stack.length-1];U.title=M}function b(){const M=this.resume(),U=this.stack[this.stack.length-1];U.url=M}function P(M){const U=this.stack[this.stack.length-1];if(!U.depth){const ee=this.sliceSerialize(M).length;U.depth=ee}}function S(){this.data.setextHeadingSlurpLineEnding=!0}function $(M){const U=this.stack[this.stack.length-1];U.depth=this.sliceSerialize(M).codePointAt(0)===61?1:2}function I(){this.data.setextHeadingSlurpLineEnding=void 0}function E(M){const ee=this.stack[this.stack.length-1].children;let le=ee[ee.length-1];(!le||le.type!=="text")&&(le=So(),le.position={start:xn(M.start),end:void 0},ee.push(le)),this.stack.push(le)}function T(M){const U=this.stack.pop();U.value+=this.sliceSerialize(M),U.position.end=xn(M.end)}function z(M){const U=this.stack[this.stack.length-1];if(this.data.atHardBreak){const ee=U.children[U.children.length-1];ee.position.end=xn(M.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(U.type)&&(E.call(this,M),T.call(this,M))}function R(){this.data.atHardBreak=!0}function A(){const M=this.resume(),U=this.stack[this.stack.length-1];U.value=M}function N(){const M=this.resume(),U=this.stack[this.stack.length-1];U.value=M}function F(){const M=this.resume(),U=this.stack[this.stack.length-1];U.value=M}function Y(){const M=this.stack[this.stack.length-1];if(this.data.inReference){const U=this.data.referenceType||"shortcut";M.type+="Reference",M.referenceType=U,delete M.url,delete M.title}else delete M.identifier,delete M.label;this.data.referenceType=void 0}function K(){const M=this.stack[this.stack.length-1];if(this.data.inReference){const U=this.data.referenceType||"shortcut";M.type+="Reference",M.referenceType=U,delete M.url,delete M.title}else delete M.identifier,delete M.label;this.data.referenceType=void 0}function _(M){const U=this.sliceSerialize(M),ee=this.stack[this.stack.length-2];ee.label=Dw(U),ee.identifier=Br(U).toLowerCase()}function D(){const M=this.stack[this.stack.length-1],U=this.resume(),ee=this.stack[this.stack.length-1];if(this.data.inReference=!0,ee.type==="link"){const le=M.children;ee.children=le}else ee.alt=U}function w(){const M=this.resume(),U=this.stack[this.stack.length-1];U.url=M}function q(){const M=this.resume(),U=this.stack[this.stack.length-1];U.title=M}function Z(){this.data.inReference=void 0}function j(){this.data.referenceType="collapsed"}function re(M){const U=this.resume(),ee=this.stack[this.stack.length-1];ee.label=U,ee.identifier=Br(this.sliceSerialize(M)).toLowerCase(),this.data.referenceType="full"}function oe(M){this.data.characterReferenceType=M.type}function Q(M){const U=this.sliceSerialize(M),ee=this.data.characterReferenceType;let le;ee?(le=Wh(U,ee==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):le=k1(U);const me=this.stack[this.stack.length-1];me.value+=le}function H(M){const U=this.stack.pop();U.position.end=xn(M.end)}function G(M){T.call(this,M);const U=this.stack[this.stack.length-1];U.url=this.sliceSerialize(M)}function de(M){T.call(this,M);const U=this.stack[this.stack.length-1];U.url="mailto:"+this.sliceSerialize(M)}function se(){return{type:"blockquote",children:[]}}function je(){return{type:"code",lang:null,meta:null,value:""}}function Le(){return{type:"inlineCode",value:""}}function te(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function ue(){return{type:"emphasis",children:[]}}function X(){return{type:"heading",depth:0,children:[]}}function pt(){return{type:"break"}}function fn(){return{type:"html",value:""}}function hn(){return{type:"image",title:null,url:"",alt:null}}function ko(){return{type:"link",title:null,url:"",children:[]}}function ui(M){return{type:"list",ordered:M.type==="listOrdered",start:null,spread:M._spread,children:[]}}function bo(M){return{type:"listItem",spread:M._spread,checked:null,children:[]}}function ci(){return{type:"paragraph",children:[]}}function di(){return{type:"strong",children:[]}}function So(){return{type:"text",value:""}}function Co(){return{type:"thematicBreak"}}}function xn(e){return{line:e.line,column:e.column,offset:e.offset}}function n3(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?n3(e,r):Hw(e,r)}}function Hw(e,t){let n;for(n in t)if(t3.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function Lp(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Di({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Di({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Di({start:t.start,end:t.end})+") is still open")}function Vw(e){const t=this;t.parser=n;function n(r){return Bw(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function Ww(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function Kw(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function qw(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function Yw(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Zw(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Qw(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=ai(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let l,a=e.footnoteCounts.get(r);a===void 0?(a=0,e.footnoteOrder.push(r),l=e.footnoteOrder.length):l=o+1,a+=1,e.footnoteCounts.set(r,a);const u={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(l)}]};e.patch(t,u);const c={type:"element",tagName:"sup",properties:{},children:[u]};return e.patch(t,c),e.applyData(t,c)}function Gw(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Xw(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function r3(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const l=i[i.length-1];return l&&l.type==="text"?l.value+=r:i.push({type:"text",value:r}),i}function Jw(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return r3(e,t);const i={src:ai(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function ek(e,t){const n={src:ai(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function tk(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function nk(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return r3(e,t);const i={href:ai(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function rk(e,t){const n={href:ai(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function ik(e,t,n){const r=e.all(t),i=n?ok(n):i3(t),o={},l=[];if(typeof t.checked=="boolean"){const d=r[0];let p;d&&d.type==="element"&&d.tagName==="p"?p=d:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const d=r[a];(i||a!==0||d.type!=="element"||d.tagName!=="p")&&l.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?l.push(...d.children):l.push(d)}const u=r[r.length-1];u&&(i||u.type!=="element"||u.tagName!=="p")&&l.push({type:"text",value:`
`});const c={type:"element",tagName:"li",properties:o,children:l};return e.patch(t,c),e.applyData(t,c)}function ok(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=i3(n[r])}return t}function i3(e){const t=e.spread;return t??e.children.length>1}function lk(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const l=r[i];if(l.type==="element"&&l.tagName==="li"&&l.properties&&Array.isArray(l.properties.className)&&l.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function sk(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function ak(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function uk(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function ck(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const l={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],l),i.push(l)}if(n.length>0){const l={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=x1(t.children[1]),u=Fh(t.children[t.children.length-1]);a&&u&&(l.position={start:a,end:u}),i.push(l)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function dk(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",l=n&&n.type==="table"?n.align:void 0,a=l?l.length:t.children.length;let u=-1;const c=[];for(;++u<a;){const p=t.children[u],m={},f=l?l[u]:void 0;f&&(m.align=f);let y={type:"element",tagName:o,properties:m,children:[]};p&&(y.children=e.all(p),e.patch(p,y),y=e.applyData(p,y)),c.push(y)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(c,!0)};return e.patch(t,d),e.applyData(t,d)}function pk(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const xp=9,yp=32;function fk(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(vp(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(vp(t.slice(i),i>0,!1)),o.join("")}function vp(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===xp||o===yp;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===xp||o===yp;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function hk(e,t){const n={type:"text",value:fk(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function mk(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const gk={blockquote:Ww,break:Kw,code:qw,delete:Yw,emphasis:Zw,footnoteReference:Qw,heading:Gw,html:Xw,imageReference:Jw,image:ek,inlineCode:tk,linkReference:nk,link:rk,listItem:ik,list:lk,paragraph:sk,root:ak,strong:uk,table:ck,tableCell:pk,tableRow:dk,text:hk,thematicBreak:mk,toml:Ko,yaml:Ko,definition:Ko,footnoteDefinition:Ko};function Ko(){}const o3=-1,As=0,Bi=1,os=2,C1=3,j1=4,$1=5,E1=6,l3=7,s3=8,wp=typeof self=="object"?self:globalThis,Lk=(e,t)=>{const n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,l]=t[i];switch(o){case As:case o3:return n(l,i);case Bi:{const a=n([],i);for(const u of l)a.push(r(u));return a}case os:{const a=n({},i);for(const[u,c]of l)a[r(u)]=r(c);return a}case C1:return n(new Date(l),i);case j1:{const{source:a,flags:u}=l;return n(new RegExp(a,u),i)}case $1:{const a=n(new Map,i);for(const[u,c]of l)a.set(r(u),r(c));return a}case E1:{const a=n(new Set,i);for(const u of l)a.add(r(u));return a}case l3:{const{name:a,message:u}=l;return n(new wp[a](u),i)}case s3:return n(BigInt(l),i);case"BigInt":return n(Object(BigInt(l)),i);case"ArrayBuffer":return n(new Uint8Array(l).buffer,l);case"DataView":{const{buffer:a}=new Uint8Array(l);return n(new DataView(a),l)}}return n(new wp[o](l),i)};return r},kp=e=>Lk(new Map,e)(0),Lr="",{toString:xk}={},{keys:yk}=Object,wi=e=>{const t=typeof e;if(t!=="object"||!e)return[As,t];const n=xk.call(e).slice(8,-1);switch(n){case"Array":return[Bi,Lr];case"Object":return[os,Lr];case"Date":return[C1,Lr];case"RegExp":return[j1,Lr];case"Map":return[$1,Lr];case"Set":return[E1,Lr];case"DataView":return[Bi,n]}return n.includes("Array")?[Bi,n]:n.includes("Error")?[l3,n]:[os,n]},qo=([e,t])=>e===As&&(t==="function"||t==="symbol"),vk=(e,t,n,r)=>{const i=(l,a)=>{const u=r.push(l)-1;return n.set(a,u),u},o=l=>{if(n.has(l))return n.get(l);let[a,u]=wi(l);switch(a){case As:{let d=l;switch(u){case"bigint":a=s3,d=l.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+u);d=null;break;case"undefined":return i([o3],l)}return i([a,d],l)}case Bi:{if(u){let m=l;return u==="DataView"?m=new Uint8Array(l.buffer):u==="ArrayBuffer"&&(m=new Uint8Array(l)),i([u,[...m]],l)}const d=[],p=i([a,d],l);for(const m of l)d.push(o(m));return p}case os:{if(u)switch(u){case"BigInt":return i([u,l.toString()],l);case"Boolean":case"Number":case"String":return i([u,l.valueOf()],l)}if(t&&"toJSON"in l)return o(l.toJSON());const d=[],p=i([a,d],l);for(const m of yk(l))(e||!qo(wi(l[m])))&&d.push([o(m),o(l[m])]);return p}case C1:return i([a,l.toISOString()],l);case j1:{const{source:d,flags:p}=l;return i([a,{source:d,flags:p}],l)}case $1:{const d=[],p=i([a,d],l);for(const[m,f]of l)(e||!(qo(wi(m))||qo(wi(f))))&&d.push([o(m),o(f)]);return p}case E1:{const d=[],p=i([a,d],l);for(const m of l)(e||!qo(wi(m)))&&d.push(o(m));return p}}const{message:c}=l;return i([a,{name:u,message:c}],l)};return o},bp=(e,{json:t,lossy:n}={})=>{const r=[];return vk(!(t||n),!!t,new Map,r)(e),r},ls=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?kp(bp(e,t)):structuredClone(e):(e,t)=>kp(bp(e,t));function wk(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function kk(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function bk(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||wk,r=e.options.footnoteBackLabel||kk,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",l=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let u=-1;for(;++u<e.footnoteOrder.length;){const c=e.footnoteById.get(e.footnoteOrder[u]);if(!c)continue;const d=e.all(c),p=String(c.identifier).toUpperCase(),m=ai(p.toLowerCase());let f=0;const y=[],v=e.footnoteCounts.get(p);for(;v!==void 0&&++f<=v;){y.length>0&&y.push({type:"text",value:" "});let L=typeof n=="string"?n:n(u,f);typeof L=="string"&&(L={type:"text",value:L}),y.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+m+(f>1?"-"+f:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(u,f),className:["data-footnote-backref"]},children:Array.isArray(L)?L:[L]})}const C=d[d.length-1];if(C&&C.type==="element"&&C.tagName==="p"){const L=C.children[C.children.length-1];L&&L.type==="text"?L.value+=" ":C.children.push({type:"text",value:" "}),C.children.push(...y)}else d.push(...y);const g={type:"element",tagName:"li",properties:{id:t+"fn-"+m},children:e.wrap(d,!0)};e.patch(c,g),a.push(g)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...ls(l),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const a3=function(e){if(e==null)return $k;if(typeof e=="function")return Fs(e);if(typeof e=="object")return Array.isArray(e)?Sk(e):Ck(e);if(typeof e=="string")return jk(e);throw new Error("Expected function, string, or object as test")};function Sk(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=a3(e[n]);return Fs(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return!0;return!1}}function Ck(e){const t=e;return Fs(n);function n(r){const i=r;let o;for(o in e)if(i[o]!==t[o])return!1;return!0}}function jk(e){return Fs(t);function t(n){return n&&n.type===e}}function Fs(e){return t;function t(n,r,i){return!!(Ek(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function $k(){return!0}function Ek(e){return e!==null&&typeof e=="object"&&"type"in e}const u3=[],Pk=!0,Sp=!1,Tk="skip";function Ik(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const o=a3(i),l=r?-1:1;a(e,void 0,[])();function a(u,c,d){const p=u&&typeof u=="object"?u:{};if(typeof p.type=="string"){const f=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(m,"name",{value:"node ("+(u.type+(f?"<"+f+">":""))+")"})}return m;function m(){let f=u3,y,v,C;if((!t||o(u,c,d[d.length-1]||void 0))&&(f=Rk(n(u,d)),f[0]===Sp))return f;if("children"in u&&u.children){const g=u;if(g.children&&f[0]!==Tk)for(v=(r?g.children.length:-1)+l,C=d.concat(g);v>-1&&v<g.children.length;){const L=g.children[v];if(y=a(L,v,C)(),y[0]===Sp)return y;v=typeof y[1]=="number"?y[1]:v+l}}return f}}}function Rk(e){return Array.isArray(e)?e:typeof e=="number"?[Pk,e]:e==null?u3:[e]}function c3(e,t,n,r){let i,o,l;typeof t=="function"&&typeof n!="function"?(o=void 0,l=t,i=n):(o=t,l=n,i=r),Ik(e,o,a,i);function a(u,c){const d=c[c.length-1],p=d?d.children.indexOf(u):void 0;return l(u,p,d)}}const lc={}.hasOwnProperty,zk={};function Mk(e,t){const n=t||zk,r=new Map,i=new Map,o=new Map,l={...gk,...n.handlers},a={all:c,applyData:Nk,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:l,one:u,options:n,patch:_k,wrap:Fk};return c3(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const p=d.type==="definition"?r:i,m=String(d.identifier).toUpperCase();p.has(m)||p.set(m,d)}}),a;function u(d,p){const m=d.type,f=a.handlers[m];if(lc.call(a.handlers,m)&&f)return f(a,d,p);if(a.options.passThrough&&a.options.passThrough.includes(m)){if("children"in d){const{children:v,...C}=d,g=ls(C);return g.children=a.all(d),g}return ls(d)}return(a.options.unknownHandler||Ak)(a,d,p)}function c(d){const p=[];if("children"in d){const m=d.children;let f=-1;for(;++f<m.length;){const y=a.one(m[f],d);if(y){if(f&&m[f-1].type==="break"&&(!Array.isArray(y)&&y.type==="text"&&(y.value=Cp(y.value)),!Array.isArray(y)&&y.type==="element")){const v=y.children[0];v&&v.type==="text"&&(v.value=Cp(v.value))}Array.isArray(y)?p.push(...y):p.push(y)}}}return p}}function _k(e,t){e.position&&(t.position=xy(e))}function Nk(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const l="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:l}}n.type==="element"&&o&&Object.assign(n.properties,ls(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function Ak(e,t){const n=t.data||{},r="value"in t&&!(lc.call(n,"hProperties")||lc.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Fk(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Cp(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function jp(e,t){const n=Mk(e,t),r=n.one(e,void 0),i=bk(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function Dk(e,t){return e&&"run"in e?async function(n,r){const i=jp(n,{file:r,...t});await e.run(i,r)}:function(n,r){return jp(n,{file:r,...e||t})}}function $p(e){if(e)throw e}var kl=Object.prototype.hasOwnProperty,d3=Object.prototype.toString,Ep=Object.defineProperty,Pp=Object.getOwnPropertyDescriptor,Tp=function(t){return typeof Array.isArray=="function"?Array.isArray(t):d3.call(t)==="[object Array]"},Ip=function(t){if(!t||d3.call(t)!=="[object Object]")return!1;var n=kl.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&kl.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||kl.call(t,i)},Rp=function(t,n){Ep&&n.name==="__proto__"?Ep(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},zp=function(t,n){if(n==="__proto__")if(kl.call(t,n)){if(Pp)return Pp(t,n).value}else return;return t[n]},Ok=function e(){var t,n,r,i,o,l,a=arguments[0],u=1,c=arguments.length,d=!1;for(typeof a=="boolean"&&(d=a,a=arguments[1]||{},u=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});u<c;++u)if(t=arguments[u],t!=null)for(n in t)r=zp(a,n),i=zp(t,n),a!==i&&(d&&i&&(Ip(i)||(o=Tp(i)))?(o?(o=!1,l=r&&Tp(r)?r:[]):l=r&&Ip(r)?r:{},Rp(a,{name:n,newValue:e(d,l,i)})):typeof i<"u"&&Rp(a,{name:n,newValue:i}));return a};const Sa=ss(Ok);function sc(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Bk(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const l=i.pop();if(typeof l!="function")throw new TypeError("Expected function as last argument, not "+l);a(null,...i);function a(u,...c){const d=e[++o];let p=-1;if(u){l(u);return}for(;++p<i.length;)(c[p]===null||c[p]===void 0)&&(c[p]=i[p]);i=c,d?Uk(d,a)(...c):l(null,...c)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function Uk(e,t){let n;return r;function r(...l){const a=e.length>l.length;let u;a&&l.push(i);try{u=e.apply(this,l)}catch(c){const d=c;if(a&&n)throw d;return i(d)}a||(u&&u.then&&typeof u.then=="function"?u.then(o,i):u instanceof Error?i(u):o(u))}function i(l,...a){n||(n=!0,t(l,...a))}function o(l){i(null,l)}}const Vt={basename:Hk,dirname:Vk,extname:Wk,join:Kk,sep:"/"};function Hk(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');wo(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let l=-1,a=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else l<0&&(o=!0,l=i+1),a>-1&&(e.codePointAt(i)===t.codePointAt(a--)?a<0&&(r=i):(a=-1,r=l));return n===r?r=l:r<0&&(r=e.length),e.slice(n,r)}function Vk(e){if(wo(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function Wk(e){wo(e);let t=e.length,n=-1,r=0,i=-1,o=0,l;for(;t--;){const a=e.codePointAt(t);if(a===47){if(l){r=t+1;break}continue}n<0&&(l=!0,n=t+1),a===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function Kk(...e){let t=-1,n;for(;++t<e.length;)wo(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":qk(n)}function qk(e){wo(e);const t=e.codePointAt(0)===47;let n=Yk(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function Yk(e,t){let n="",r=0,i=-1,o=0,l=-1,a,u;for(;++l<=e.length;){if(l<e.length)a=e.codePointAt(l);else{if(a===47)break;a=47}if(a===47){if(!(i===l-1||o===1))if(i!==l-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(u=n.lastIndexOf("/"),u!==n.length-1){u<0?(n="",r=0):(n=n.slice(0,u),r=n.length-1-n.lastIndexOf("/")),i=l,o=0;continue}}else if(n.length>0){n="",r=0,i=l,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,l):n=e.slice(i+1,l),r=l-i-1;i=l,o=0}else a===46&&o>-1?o++:o=-1}return n}function wo(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const Zk={cwd:Qk};function Qk(){return"/"}function ac(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function Gk(e){if(typeof e=="string")e=new URL(e);else if(!ac(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return Xk(e)}function Xk(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const Ca=["history","path","basename","stem","extname","dirname"];class p3{constructor(t){let n;t?ac(t)?n={path:t}:typeof t=="string"||Jk(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":Zk.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Ca.length;){const o=Ca[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)Ca.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?Vt.basename(this.path):void 0}set basename(t){$a(t,"basename"),ja(t,"basename"),this.path=Vt.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?Vt.dirname(this.path):void 0}set dirname(t){Mp(this.basename,"dirname"),this.path=Vt.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?Vt.extname(this.path):void 0}set extname(t){if(ja(t,"extname"),Mp(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Vt.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){ac(t)&&(t=Gk(t)),$a(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?Vt.basename(this.path,this.extname):void 0}set stem(t){$a(t,"stem"),ja(t,"stem"),this.path=Vt.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new Xe(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function ja(e,t){if(e&&e.includes(Vt.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Vt.sep+"`")}function $a(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Mp(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function Jk(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const eb=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},tb={}.hasOwnProperty;class P1 extends eb{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Bk()}copy(){const t=new P1;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Sa(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Ta("data",this.frozen),this.namespace[t]=n,this):tb.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Ta("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Yo(t),r=this.parser||this.Parser;return Ea("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Ea("process",this.parser||this.Parser),Pa("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,l){const a=Yo(t),u=r.parse(a);r.run(u,a,function(d,p,m){if(d||!p||!m)return c(d);const f=p,y=r.stringify(f,m);ib(y)?m.value=y:m.result=y,c(d,m)});function c(d,p){d||!p?l(d):o?o(p):n(void 0,p)}}}processSync(t){let n=!1,r;return this.freeze(),Ea("processSync",this.parser||this.Parser),Pa("processSync",this.compiler||this.Compiler),this.process(t,i),Np("processSync","process",n),r;function i(o,l){n=!0,$p(o),r=l}}run(t,n,r){_p(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(l,a){const u=Yo(n);i.run(t,u,c);function c(d,p,m){const f=p||t;d?a(d):l?l(f):r(void 0,f,m)}}}runSync(t,n){let r=!1,i;return this.run(t,n,o),Np("runSync","run",r),i;function o(l,a){$p(l),i=a,r=!0}}stringify(t,n){this.freeze();const r=Yo(n),i=this.compiler||this.Compiler;return Pa("stringify",i),_p(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(Ta("use",this.frozen),t!=null)if(typeof t=="function")u(t,n);else if(typeof t=="object")Array.isArray(t)?a(t):l(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(c){if(typeof c=="function")u(c,[]);else if(typeof c=="object")if(Array.isArray(c)){const[d,...p]=c;u(d,p)}else l(c);else throw new TypeError("Expected usable value, not `"+c+"`")}function l(c){if(!("plugins"in c)&&!("settings"in c))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(c.plugins),c.settings&&(i.settings=Sa(!0,i.settings,c.settings))}function a(c){let d=-1;if(c!=null)if(Array.isArray(c))for(;++d<c.length;){const p=c[d];o(p)}else throw new TypeError("Expected a list of plugins, not `"+c+"`")}function u(c,d){let p=-1,m=-1;for(;++p<r.length;)if(r[p][0]===c){m=p;break}if(m===-1)r.push([c,...d]);else if(d.length>0){let[f,...y]=d;const v=r[m][1];sc(v)&&sc(f)&&(f=Sa(!0,v,f)),r[m]=[c,f,...y]}}}}const nb=new P1().freeze();function Ea(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Pa(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Ta(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function _p(e){if(!sc(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Np(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Yo(e){return rb(e)?e:new p3(e)}function rb(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function ib(e){return typeof e=="string"||ob(e)}function ob(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const lb="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Ap=[],Fp={allowDangerousHtml:!0},sb=/^(https?|ircs?|mailto|xmpp)$/i,ab=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function f3(e){const t=ub(e),n=cb(e);return db(t.runSync(t.parse(n),n),e)}function ub(e){const t=e.rehypePlugins||Ap,n=e.remarkPlugins||Ap,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Fp}:Fp;return nb().use(Vw).use(n).use(Dk,r).use(t)}function cb(e){const t=e.children||"",n=new p3;return typeof t=="string"&&(n.value=t),n}function db(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,o=t.disallowedElements,l=t.skipHtml,a=t.unwrapDisallowed,u=t.urlTransform||pb;for(const d of ab)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+lb+d.id,void 0);return c3(e,c),by(e,{Fragment:s.Fragment,components:i,ignoreInvalidStyle:!0,jsx:s.jsx,jsxs:s.jsxs,passKeys:!0,passNode:!0});function c(d,p,m){if(d.type==="raw"&&m&&typeof p=="number")return l?m.children.splice(p,1):m.children[p]={type:"text",value:d.value},p;if(d.type==="element"){let f;for(f in wa)if(Object.hasOwn(wa,f)&&Object.hasOwn(d.properties,f)){const y=d.properties[f],v=wa[f];(v===null||v.includes(d.tagName))&&(d.properties[f]=u(String(y||""),f,d))}}if(d.type==="element"){let f=n?!n.includes(d.tagName):o?o.includes(d.tagName):!1;if(!f&&r&&typeof p=="number"&&(f=!r(d,p,m)),f&&m&&typeof p=="number")return a&&d.children?m.children.splice(p,1,...d.children):m.children.splice(p,1),p}}}function pb(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||sb.test(e.slice(0,t))?e:""}const h3=Ve`
  from { opacity: 0; }
  to { opacity: 1; }
`,fb=Ve`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`,hb=h.div`
  position: fixed;
  inset: 0;
  z-index: 300;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  animation: ${h3} 0.2s ease both;

  @media (min-width: 600px) {
    justify-content: center;
    align-items: center;
    padding: 24px;
  }
`,mb=h.div`
  background: ${({theme:e})=>e.colors.white};
  border-radius: 20px 20px 0 0;
  max-height: min(94dvh, 920px);
  height: min(94dvh, 920px);
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${fb} 0.32s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (min-width: 600px) {
    border-radius: ${({theme:e})=>e.radii.lg};
    max-width: 440px;
    height: min(88dvh, 780px);
  }
`,gb=h.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  padding-top: calc(12px + env(safe-area-inset-top, 0px));
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary100};
`,Lb=h.span`
  font-size: 1rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
`,xb=h.button`
  width: 40px;
  height: 40px;
  border: none;
  background: ${({theme:e})=>e.colors.bg100};
  border-radius: ${({theme:e})=>e.radii.pill};
  cursor: pointer;
  display: grid;
  place-items: center;
  color: ${({theme:e})=>e.colors.text900};
`,yb=h.div`
  flex-shrink: 0;
  position: relative;
  height: 42vmin;
  min-height: 200px;
  max-height: 280px;
  background: ${({theme:e})=>e.colors.bg100};
`,vb=h.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  touch-action: pan-y pinch-zoom;
`,wb=h.div`
  display: flex;
  height: 100%;
  will-change: transform;
`,kb=h.div`
  flex-shrink: 0;
  height: 100%;
`,bb=h.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none;
  user-select: none;
`,Dp=h.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  user-select: none;
`,Op=h.button`
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
`,Sb=h.div`
  position: fixed;
  inset: 0;
  z-index: 400;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  flex-direction: column;
  animation: ${h3} 0.2s ease both;
`,Cb=h.div`
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 12px;
  padding-top: calc(8px + env(safe-area-inset-top, 0px));
`,jb=h.button`
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
`,$b=h.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10px 28px;
  padding-bottom: calc(28px + env(safe-area-inset-bottom, 0px));
`,Bp=h.div`
  height: 100%;
  width: 100%;
  will-change: transform;
  transition: ${({$snap:e})=>e?"transform 0.28s cubic-bezier(0.22, 1, 0.36, 1)":"none"};
`,Up=h.div`
  position: relative;
  width: 100%;
  max-width: min(96vw, 720px);
  height: min(85dvh, 900px);
  max-height: min(85dvh, 900px);
  overflow: hidden;
  touch-action: none;
  background: transparent;
  border-radius: ${({theme:e})=>e.radii.md};
`,Eb=h.div`
  display: flex;
  height: 100%;
  will-change: transform;
`,Pb=h.div`
  flex-shrink: 0;
  height: 100%;
`,Tb=h.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  background: transparent;
  display: block;
  pointer-events: none;
  user-select: none;
`,Hp=h.img`
  width: 100%;
  height: 100%;
  max-height: min(85dvh, 900px);
  object-fit: contain;
  object-position: center;
  background: transparent;
  display: block;
  user-select: none;
`,Ib=h.div`
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
`,Rb=h.div`
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
`,m3=h.button`
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
`,zb=h.div`
  flex-shrink: 0;
  display: flex;
  gap: 8px;
  padding: 12px 16px;
  background: ${({theme:e})=>e.colors.warmCream};
`,Vp=h.button`
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
`,Mb=h.div`
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
`,_b=h.button`
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
`,Nb=h.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 18px 16px 28px;
`,Ab=h.h3`
  margin: 0 0 12px;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.25;
`,Fb=h.div`
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
`,Db=h.section`
  margin-top: 8px;
`,Wp=h.h4`
  margin: 0 0 12px;
  font-size: 1rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
`,Kp=h.div`
  padding: 14px;
  border-radius: ${({theme:e})=>e.radii.md};
  background: ${({theme:e})=>e.colors.warmCream};
  margin-bottom: 10px;
`,qp=h.p`
  margin: 0 0 6px;
  font-size: 0.88rem;
  font-weight: 600;
`,Yp=h.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.55;
  color: ${({theme:e})=>e.colors.text700};
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Zp=h.button`
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
`,Ob=h.section`
  margin-top: 28px;
  padding-top: 22px;
  border-top: 1px solid ${({theme:e})=>e.colors.primary100};
`,Bb=h.h4`
  margin: 0 0 14px;
  font-size: 1.05rem;
  font-weight: 700;
`,Ub=h.article`
  margin-bottom: 20px;
`,Hb=h.div`
  display: flex;
  gap: 14px;
  align-items: flex-start;
  margin-bottom: 10px;
`,Vb=h.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`,Wb=h.div`
  font-weight: 700;
  font-size: 1.05rem;
  margin-bottom: 6px;
`,Kb=h.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.55;
  color: ${({theme:e})=>e.colors.text700};
`,Zo=h.p`
  margin: 0;
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.text700};
`;function T1(e,t){const n=e.join("\0"),[r,i]=k.useState(1),[o,l]=k.useState(!1),[a,u]=k.useState(0),[c,d]=k.useState(0),p=k.useRef(null),m=k.useRef(null),f=k.useRef(1),y=k.useRef(null),v=k.useRef(0),C=k.useRef(0),g=k.useRef(null),L=k.useCallback(()=>{y.current=null,v.current=0,C.current=0,d(0)},[]);k.useEffect(()=>{if(g.current===null){g.current=n;return}g.current!==n&&(g.current=n,i(1),l(!1),u(0),L())},[n,L]),k.useLayoutEffect(()=>{if(!t||e.length<=1){u(0);return}const N=p.current;if(!N)return;const F=()=>{const K=N.getBoundingClientRect().width;K>0&&u(K)};F();const Y=new ResizeObserver(F);return Y.observe(N),()=>Y.disconnect()},[t,e.length,n]);const x=k.useMemo(()=>{const N=e.length;return N<=1?e:[e[N-1],...e,e[0]]},[e]),b=x.length,P=k.useMemo(()=>{const N=e.length;return N<=1?0:r===0?N-1:r===N+1?0:r-1},[e.length,r]),S=k.useCallback(N=>{e.length<=1||(y.current=N.touches[0].clientX,v.current=0,C.current=0,d(0))},[e.length]),$=k.useCallback(N=>{var q;if(y.current==null||e.length<=1)return;const F=((q=p.current)==null?void 0:q.offsetWidth)??320,Y=e.length;let K=N.touches[0].clientX-y.current;const _=F*.45;K=Math.max(-_,Math.min(_,K)),C.current=K;const D=f.current;let w=K;D===1&&K>0&&(w=0),D===Y&&K<0&&(w=0),v.current=w,d(w)},[e.length]),I=k.useCallback(()=>{var _;if(y.current==null||e.length<=1){L();return}const N=((_=p.current)==null?void 0:_.offsetWidth)??320,F=Math.min(48,N*.14),Y=C.current,K=e.length;i(D=>Y>F?D===0?K-1:D===1?0:D-1:Y<-F?D===K+1?2:D===K?K+1:D+1:D),L()},[e.length,L]),E=k.useCallback(N=>{if(!N.propertyName.toLowerCase().includes("transform")||N.target!==N.currentTarget)return;const F=e.length;if(F<=1)return;const Y=f.current;Y===F+1?(l(!0),i(1)):Y===0&&(l(!0),i(F))},[e.length]);k.useLayoutEffect(()=>{if(!o)return;const N=m.current;N&&N.offsetWidth;let F=null;const Y=requestAnimationFrame(()=>{F=requestAnimationFrame(()=>{l(!1)})});return()=>{cancelAnimationFrame(Y),F!=null&&cancelAnimationFrame(F)}},[r,o]),k.useEffect(()=>{L()},[n,L]),f.current=r;const T=e.length>1&&a>0,z=T?b*a:void 0,R=T?-(r*a)+c:0,A=k.useCallback(N=>{l(!1),i(N),L()},[L]);return{loopIndex:r,setLoopIndex:i,activeDot:P,loopUrls:x,slideCount:b,usePx:T,trackWidthPx:z,translatePx:R,transOff:o,dragPx:c,viewportRef:p,trackRef:m,onTouchStart:S,onTouchMove:$,onTouchEnd:I,onTouchCancel:L,onTransitionEnd:E,vpWidth:a,syncToLoopIndex:A}}const Qo=14,qb=115,Yb=360;function Qp(e){const t=Math.sign(e),n=Math.abs(e);return t*Math.min(n*.88,Yb)}function g3({urls:e,initialLoopIndex:t,onClose:n,lockBodyScroll:r=!0}){const i=e.length>1,o=T1(e,i),{syncToLoopIndex:l,viewportRef:a,trackRef:u,onTouchStart:c,onTouchMove:d,onTouchEnd:p,onTouchCancel:m,onTransitionEnd:f,usePx:y,trackWidthPx:v,translatePx:C,transOff:g,dragPx:L,loopUrls:x,vpWidth:b,setLoopIndex:P,activeDot:S}=o,[$,I]=k.useState(0),[E,T]=k.useState(!1),z=k.useRef(0),R=k.useRef(null),A=k.useRef("n"),N=k.useRef(null),F=k.useRef(!1),Y=k.useCallback(H=>{var G;if((G=N.current)==null||G.call(N),N.current=null,a.current=H,H){const de=se=>{A.current==="v"&&se.preventDefault()};H.addEventListener("touchmove",de,{passive:!1}),N.current=()=>H.removeEventListener("touchmove",de)}},[a]);k.useEffect(()=>{if(!r)return;const H=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=H}},[r]),k.useLayoutEffect(()=>{e.length<=1||l(t)},[e.length,t,l]),k.useEffect(()=>{z.current=0,I(0),A.current="n",R.current=null,F.current=!1},[e.join("\0")]),k.useEffect(()=>{const H=G=>{G.key==="Escape"&&n()};return window.addEventListener("keydown",H),()=>window.removeEventListener("keydown",H)},[n]),k.useEffect(()=>()=>{var H;(H=N.current)==null||H.call(N),N.current=null},[]);const K=k.useCallback(H=>{H.target===H.currentTarget&&n()},[n]),_=k.useCallback(()=>{if(Math.abs(z.current)>=qb){z.current=0,I(0),n();return}T(!0),z.current=0,I(0),window.setTimeout(()=>T(!1),320)},[n]),D=k.useCallback(H=>{H.touches.length===1&&(T(!1),R.current={x:H.touches[0].clientX,y:H.touches[0].clientY},A.current="n")},[]),w=k.useCallback(H=>{if(!R.current||H.touches.length!==1)return;const G=H.touches[0].clientX,de=H.touches[0].clientY,se=G-R.current.x,je=de-R.current.y;if(A.current==="n"){if(Math.abs(se)<Qo&&Math.abs(je)<Qo)return;Math.abs(je)>=Math.abs(se)?A.current="v":(A.current="h",e.length>1&&c(H))}if(A.current==="v"){const Le=Qp(je);z.current=Le,I(Le);return}A.current==="h"&&e.length>1&&d(H)},[e.length,d,c]),q=k.useCallback(()=>{A.current==="v"?_():A.current==="h"&&e.length>1&&p(),R.current=null,A.current="n"},[_,p,e.length]),Z=k.useCallback(()=>{A.current==="v"?_():A.current==="h"&&e.length>1&&m(),R.current=null,A.current="n"},[_,m,e.length]),j=k.useCallback(H=>{H.button===0&&(F.current=!0,T(!1),R.current={x:H.clientX,y:H.clientY},A.current="n")},[]),re=k.useCallback(H=>{if(!F.current||!R.current)return;const G=H.clientX-R.current.x,de=H.clientY-R.current.y;if(A.current==="n"){if(Math.abs(G)<Qo&&Math.abs(de)<Qo)return;if(Math.abs(de)>=Math.abs(G))A.current="v";else{A.current="h",F.current=!1,R.current=null;return}}if(A.current==="v"){const se=Qp(de);z.current=se,I(se)}},[]),oe=k.useCallback(()=>{F.current&&(F.current=!1,A.current==="v"&&_(),R.current=null,A.current="n")},[_]);if(e.length===0)return null;const Q={ref:Y,onTouchStart:D,onTouchMove:w,onTouchEnd:q,onTouchCancel:Z,onMouseDown:j,onMouseMove:re,onMouseUp:oe,onMouseLeave:oe};return s.jsxs(Sb,{role:"dialog","aria-modal":"true","aria-label":"프로그램 사진 크게 보기",onClick:K,children:[s.jsx(Cb,{onClick:H=>H.stopPropagation(),children:s.jsx(jb,{type:"button",onClick:n,"aria-label":"닫기",children:s.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})}),s.jsx($b,{onClick:H=>H.stopPropagation(),children:e.length<=1?s.jsx(Up,{...Q,children:s.jsx(Bp,{$snap:E,style:{transform:`translate3d(0, ${$}px, 0)`},children:s.jsx(Hp,{src:e[0],alt:"",draggable:!1})})}):s.jsxs(s.Fragment,{children:[s.jsx(Up,{...Q,children:s.jsx(Bp,{$snap:E,style:{transform:`translate3d(0, ${$}px, 0)`},children:y?s.jsx(Eb,{ref:u,onTransitionEnd:f,style:{width:v,height:"100%",transform:`translate3d(${C}px, 0, 0)`,transition:L!==0||g?"none":"transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)"},children:x.map((H,G)=>s.jsx(Pb,{style:{width:b,flexShrink:0},children:s.jsx(Tb,{src:H,alt:"",draggable:!1})},`viewer-loop-${G}`))}):s.jsx(Hp,{src:e[0],alt:"",draggable:!1})})}),s.jsx(Rb,{children:e.map((H,G)=>s.jsx(m3,{type:"button","aria-label":`${G+1}번째 사진으로 이동`,"aria-current":G===S?"true":void 0,$active:G===S,onClick:()=>P(G+1)},G))})]})})]})}const Zb=({place:e,open:t,onClose:n,initialProgramId:r})=>{var I;const i=e.programs??[],o=k.useMemo(()=>i.filter(E=>E.status==="ongoing"),[i]),l=k.useMemo(()=>i.filter(E=>E.status==="past"),[i]),[a,u]=k.useState("ongoing"),[c,d]=k.useState(null),[p,m]=k.useState(!1),[f,y]=k.useState(null),v=a==="ongoing"?o:l;k.useEffect(()=>{var z,R;if(!t)return;const E=(z=o[0])==null?void 0:z.id,T=(R=l[0])==null?void 0:R.id;if(r&&i.some(A=>A.id===r)){const A=i.find(N=>N.id===r);u(A.status==="ongoing"?"ongoing":"past"),d(r)}else E?(u("ongoing"),d(E)):T?(u("past"),d(T)):d(null)},[t,r,o,l,i]);const C=i.find(E=>E.id===c)??null,g=k.useMemo(()=>{var z;if(!C)return[];const E=(z=C.imageUrls)!=null&&z.length?C.imageUrls:[],T=[C.imageUrl,...E.filter(R=>R!==C.imageUrl)];return Array.from(new Set(T))},[C]),L=t&&!!C&&g.length>1,x=T1(g,L);k.useEffect(()=>{t&&x.syncToLoopIndex(1)},[t,x.syncToLoopIndex]),k.useEffect(()=>{y(null)},[c]),k.useEffect(()=>{t||m(!1)},[t]),k.useEffect(()=>{if(!t)return;const E=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=E}},[t]),k.useEffect(()=>{t||y(null)},[t]),k.useEffect(()=>{if(!t)return;const E=T=>{if(T.key==="Escape"){if(p){T.preventDefault(),m(!1);return}n()}};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[t,n,p]);const b=k.useCallback(E=>{E.target===E.currentTarget&&n()},[n]),P=e.venueKind==="명상센터"&&(((I=e.instructors)==null?void 0:I.length)??0)>0,S=k.useCallback(()=>{g.length!==0&&m(!0)},[g.length]);if(!t||i.length===0)return null;const $=e.venueKind==="명상센터"?"명상센터":"명상지";return s.jsxs(s.Fragment,{children:[s.jsx(hb,{role:"presentation",onClick:b,children:s.jsxs(mb,{role:"dialog","aria-modal":"true","aria-labelledby":"place-programs-modal-title",onClick:E=>E.stopPropagation(),children:[s.jsxs(gb,{children:[s.jsxs(Lb,{id:"place-programs-modal-title",children:["프로그램 · 후기 ",s.jsxs("span",{style:{opacity:.75},children:["(",$,")"]})]}),s.jsx(xb,{type:"button",onClick:n,"aria-label":"닫기",children:s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),C&&s.jsxs(s.Fragment,{children:[s.jsx(yb,{children:g.length<=1?s.jsx(Op,{type:"button",$clickable:g.length>0,onClick:S,"aria-label":"사진 크게 보기",children:s.jsx(Dp,{src:g[0]??C.imageUrl,alt:"",draggable:!1})}):s.jsxs(s.Fragment,{children:[s.jsx(Op,{type:"button",$clickable:!0,onClick:S,"aria-label":"사진 크게 보기",children:s.jsx(vb,{ref:x.viewportRef,onTouchStart:x.onTouchStart,onTouchMove:x.onTouchMove,onTouchEnd:x.onTouchEnd,onTouchCancel:x.onTouchCancel,children:x.usePx?s.jsx(wb,{ref:x.trackRef,onTransitionEnd:x.onTransitionEnd,style:{width:x.trackWidthPx,transform:`translate3d(${x.translatePx}px, 0, 0)`,transition:x.dragPx!==0||x.transOff?"none":"transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)"},children:x.loopUrls.map((E,T)=>s.jsx(kb,{style:{width:x.vpWidth,flexShrink:0},children:s.jsx(bb,{src:E,alt:"",draggable:!1})},`hero-loop-${T}`))}):s.jsx(Dp,{src:g[0],alt:"",draggable:!1})})}),s.jsx(Ib,{children:g.map((E,T)=>s.jsx(m3,{type:"button","aria-label":`${T+1}번째 사진으로 이동`,"aria-current":T===x.activeDot?"true":void 0,$active:T===x.activeDot,onClick:()=>x.setLoopIndex(T+1)},T))})]})}),s.jsxs(zb,{children:[s.jsxs(Vp,{type:"button",$active:a==="ongoing",onClick:()=>{var T;u("ongoing");const E=(T=o[0])==null?void 0:T.id;d(E??null)},disabled:o.length===0,style:{opacity:o.length===0?.45:1},children:["진행 중 ",o.length>0?`(${o.length})`:""]}),s.jsxs(Vp,{type:"button",$active:a==="past",onClick:()=>{var T;u("past");const E=(T=l[0])==null?void 0:T.id;d(E??null)},disabled:l.length===0,style:{opacity:l.length===0?.45:1},children:["지난 프로그램 ",l.length>0?`(${l.length})`:""]})]}),s.jsxs(Mb,{children:[v.length===0&&s.jsx(Zo,{children:"이 구간에 등록된 프로그램이 없어요."}),v.map(E=>s.jsx(_b,{type:"button",$active:E.id===c,onClick:()=>d(E.id),"aria-label":E.title,children:s.jsx("img",{src:E.imageUrl,alt:"",draggable:!1})},E.id))]}),s.jsxs(Nb,{children:[s.jsx(Ab,{children:C.title}),s.jsx(Fb,{children:s.jsx(f3,{children:C.bodyFromVenue})}),s.jsxs(Db,{children:[s.jsx(Wp,{children:"프로그램 후기"}),C.reviews.length===0&&s.jsx(Zo,{children:"아직 등록된 후기가 없어요."}),C.reviews.slice(0,2).map((E,T)=>s.jsxs(Kp,{children:[s.jsxs(qp,{children:[E.author,E.rating!=null?` · ${is(E.rating)}`:""]}),s.jsx(Yp,{children:E.body})]},`${E.author}-${T}`)),C.reviews.length>2&&s.jsxs(Zo,{style:{marginBottom:10,fontSize:"0.88rem"},children:["외 ",C.reviews.length-2,"건의 후기가 더 있어요."]}),C.reviews.length>0&&s.jsxs(Zp,{type:"button",onClick:()=>y({heading:"프로그램 후기",reviews:C.reviews}),children:["전체 후기 보기 · ",C.reviews.length,"건"]})]}),P&&s.jsxs(Ob,{children:[s.jsx(Bb,{children:"강사 소개 · 강사 후기"}),e.instructors.map(E=>s.jsxs(Ub,{children:[s.jsxs(Hb,{children:[s.jsx(Vb,{src:E.photoUrl,alt:""}),s.jsxs("div",{children:[s.jsx(Wb,{children:E.name}),s.jsx(Kb,{children:E.intro})]})]}),E.reviews.length>0&&s.jsxs(s.Fragment,{children:[s.jsx(Wp,{style:{fontSize:"0.95rem",marginBottom:8},children:"강사 후기"}),E.reviews.slice(0,2).map((T,z)=>s.jsxs(Kp,{children:[s.jsxs(qp,{children:[T.author,T.rating!=null?` · ${is(T.rating)}`:""]}),s.jsx(Yp,{children:T.body})]},`${E.id}-ir-${z}`)),E.reviews.length>2&&s.jsxs(Zo,{style:{marginBottom:10,fontSize:"0.88rem"},children:["외 ",E.reviews.length-2,"건의 후기가 더 있어요."]}),s.jsxs(Zp,{type:"button",onClick:()=>y({heading:`강사 후기 · ${E.name}`,reviews:E.reviews}),children:["강사 후기 전체 보기 · ",E.reviews.length,"건"]})]})]},E.id))]})]})]})]})}),s.jsx(Th,{open:f!=null,onClose:()=>y(null),heading:f==null?void 0:f.heading,reviews:(f==null?void 0:f.reviews)??[]}),p&&C&&g.length>0&&s.jsx(g3,{urls:g,initialLoopIndex:x.loopIndex,onClose:()=>m(!1),lockBodyScroll:!1})]})};function Qb(e){const t=[],n=new Set,r=i=>{const o=i==null?void 0:i.trim();!o||n.has(o)||(n.add(o),t.push(o))};r(e.thumbnailUrl);for(const i of e.programs??[])if(i.status==="ongoing"){r(i.imageUrl);for(const o of i.imageUrls??[])r(o)}return t}const Gp=h.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0 calc(80px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};

  @media (max-width: 960px) {
    padding: 0 0 calc(72px + env(safe-area-inset-bottom, 0px));
  }
`,Xp=h.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  padding-top: calc(16px + env(safe-area-inset-top, 0px));
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.95);
  z-index: 10;
`,Jp=h.button`
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
`,e2=h.h1`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
`,Gb=h.button`
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
`,Xb=h.div`
  position: relative;
  width: 100%;
  height: 280px;
  background: ${({theme:e})=>e.colors.bg100};
`,Jb=h.button`
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
`,eS=h.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  touch-action: pan-y pinch-zoom;
`,tS=h.div`
  display: flex;
  height: 100%;
  will-change: transform;
`,nS=h.div`
  flex-shrink: 0;
  height: 100%;
`,t2=h.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none;
  user-select: none;
`,rS=h.div`
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
`,iS=h.button`
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
`,oS=h.div`
  padding: 24px 20px;
`,lS=h.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
`,sS=h.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  color: ${({theme:e})=>e.colors.text900};
  flex: 1;
  min-width: 0;
`,aS=h.div`
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
`,uS=h.p`
  font-size: 1.05rem;
  line-height: 1.6;
  color: ${({theme:e})=>e.colors.text700};
  margin: 0 0 24px;
`,cS=h.section`
  margin: 0 0 28px;
`,dS=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 12px;
`,pS=h.h3`
  margin: 0;
  font-size: 1.15rem;
  font-weight: 700;
`,fS=h.div`
  min-width: 0;
`,hS=h.p`
  margin: 6px 0 0;
  font-size: 0.88rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text700};
`,mS=h.button`
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
`,gS=h.span`
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary100};
  color: ${({theme:e})=>e.colors.primary700};
`,LS=h.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 4px 0 12px;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    height: 4px;
  }
`,xS=h.button`
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
`,yS=h.span`
  display: block;
  padding: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  text-align: left;
  line-height: 1.35;
  color: ${({theme:e})=>e.colors.text900};
  background: ${({theme:e})=>e.colors.white};
`,vS=h.div``,n2=h.div`
  border-bottom: 1px solid ${({theme:e})=>e.colors.border200};

  &:last-child {
    border-bottom: none;
  }
`,r2=h.button`
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
`,i2=h.div`
  display: grid;
  grid-template-rows: ${({$open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.3s ease;
  overflow: hidden;
`,o2=h.div`
  overflow: hidden;
`,l2=h.div`
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
`,wS=h.section`
  margin-top: 28px;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 16px;
    font-weight: 600;
  }
`,kS=h.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`,bS=h.div`
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
`,SS=h.a`
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
`,CS=h.section`
  margin-top: 32px;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 12px;
  }
`,jS=h.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  flex-wrap: wrap;
`,$S=h.button`
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
`,ES=h.span`
  flex: 1;
  min-width: 0;
`,PS=h.a`
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
`,TS=h.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  pointer-events: none;
`,IS=h.div`
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
`,RS=h.div`
  width: 100%;
  min-height: 240px;
  height: 240px;
  border-radius: ${({theme:e})=>e.radii.lg};
  background: ${({theme:e})=>e.colors.bg100};
  overflow: hidden;
  position: relative;
`,zS=h.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  text-align: center;
  background: linear-gradient(180deg, ${({theme:e})=>e.colors.primary50} 0%, ${({theme:e})=>e.colors.warmCream} 100%);
`,MS=h.div`
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
`,_S=h.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.primary400};
  margin: 0 0 24px;
  line-height: 1.6;
`,NS=h.button`
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
`,AS={wifi:"Wi-Fi",parking:"Parking",tea:"Tea"},FS=["wifi","parking","tea"],DS=()=>{const e=Ot(),{placeId:t}=yo(),n=t?Rs(t):void 0;n&&cn(n.regionId);const r=k.useRef(null),i=(n==null?void 0:n.facilities)??FS,o=n==null?void 0:n.detailSections.find(E=>E.title.toLowerCase().includes("유의사항")),[l,a]=k.useState(null),[u,c]=k.useState(!1),[d,p]=k.useState(!1),[m,f]=k.useState(),[y,v]=k.useState(null),C=k.useMemo(()=>n?Qb(n):[],[n]),g=!!n&&C.length>1,L=T1(C,g),x=()=>{n&&navigator.clipboard.writeText(n.address).then(()=>{c(!0),setTimeout(()=>c(!1),2e3)})};if(k.useEffect(()=>{if(!n)return;const E="z2xjrdi0i5",T=()=>{var q,Z;const F=document.getElementById("naver-map");if(!F||!((Z=(q=window.naver)==null?void 0:q.maps)!=null&&Z.Service))return!1;const Y=window.naver,K=new Y.maps.LatLng(37.5665,126.978),_=new Y.maps.Map(F,{center:K,zoom:17,mapTypeControl:!0}),D=(j,re)=>{const oe=new Y.maps.LatLng(j,re);_.setCenter(oe),new Y.maps.Marker({position:oe,map:_})},w=(j,re)=>Number.isFinite(j)&&Number.isFinite(re);return Y.maps.Service.geocode({address:n.address},(j,re)=>{var je,Le,te,ue;if(j==="ERROR"){console.warn(`[지도] 주소 변환 실패 - "${n.name}" (${n.address}): status=${j}`),D(37.5665,126.978);return}const oe=re,Q=X=>typeof X=="number"?X:parseFloat(String(X??""));let H=null,G=null;const de=((je=oe==null?void 0:oe.result)==null?void 0:je.items)??[],se=de.find(X=>X.isRoadAddress)??de[0];if(se!=null&&se.point&&(H=Q(se.point.y),G=Q(se.point.x)),(H==null||G==null||!w(H,G))&&de.length>0){const X=de[0];X!=null&&X.point&&(H=Q(X.point.y),G=Q(X.point.x))}if(H==null||G==null||!w(H,G)){const X=((te=(Le=oe==null?void 0:oe.v2)==null?void 0:Le.addresses)==null?void 0:te[0])??((ue=oe==null?void 0:oe.addresses)==null?void 0:ue[0]);X&&(H=Q(X.y),G=Q(X.x))}H!=null&&G!=null&&w(H,G)?D(H,G):D(37.5665,126.978)}),!0},z=()=>{var F;return(F=window.naver)!=null&&F.maps&&window.naver.maps.Service?(T(),!0):!1};if(z())return;if(document.querySelector('script[src*="oapi.map.naver.com"]')){const F=setInterval(()=>{z()&&clearInterval(F)},100),Y=setTimeout(()=>clearInterval(F),1e4);return()=>{clearInterval(F),clearTimeout(Y)}}const A="onNaverMapsReady";window[A]=()=>{if(z())return;const F=setInterval(()=>{z()&&clearInterval(F)},100)};const N=document.createElement("script");return N.type="text/javascript",N.src=`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${E}&submodules=geocoder&callback=${A}`,N.async=!0,document.head.appendChild(N),()=>{delete window[A]}},[n]),k.useEffect(()=>{n&&L.syncToLoopIndex(1)},[n==null?void 0:n.id,L.syncToLoopIndex]),!n)return s.jsxs(Gp,{children:[s.jsxs(Xp,{children:[s.jsx(Jp,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),s.jsx(e2,{children:"상세 페이지"})]}),s.jsxs(zS,{children:[s.jsx(MS,{children:"404"}),s.jsxs(_S,{children:["해당 명상센터를 찾지 못했어요.",s.jsx("br",{}),"URL을 확인하거나 메인에서 다시 탐색해주세요."]}),s.jsxs(NS,{type:"button",onClick:()=>e("/meditation"),children:[s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),s.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),"메인으로 돌아가기"]})]})]});const b=n.programs??[],P=b.filter(E=>E.status==="ongoing"),S=b.filter(E=>E.status==="past"),$=b.length>0,I=n.venueKind==="명상센터"?"명상센터":"명상지";return s.jsxs(Gp,{children:[u&&s.jsx(TS,{children:s.jsx(IS,{children:"주소를 복사했습니다"})}),s.jsxs(Xp,{children:[s.jsx(Jp,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),s.jsx(e2,{children:"상세 페이지"})]}),C.length<=1?s.jsx(Gb,{type:"button",onClick:()=>v({urls:C.length===1?C:[n.thumbnailUrl],initialLoopIndex:1}),"aria-label":`${n.name} 대표 사진 크게 보기`,children:s.jsx("img",{src:C[0]??n.thumbnailUrl,alt:`${n.name} 대표 이미지`})}):s.jsxs(Xb,{children:[s.jsx(Jb,{type:"button",onClick:()=>v({urls:C,initialLoopIndex:L.loopIndex}),"aria-label":`${n.name} 사진 크게 보기`,children:s.jsx(eS,{ref:L.viewportRef,onTouchStart:L.onTouchStart,onTouchMove:L.onTouchMove,onTouchEnd:L.onTouchEnd,onTouchCancel:L.onTouchCancel,children:L.usePx?s.jsx(tS,{ref:L.trackRef,onTransitionEnd:L.onTransitionEnd,style:{width:L.trackWidthPx,transform:`translate3d(${L.translatePx}px, 0, 0)`,transition:L.dragPx!==0||L.transOff?"none":"transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)"},children:L.loopUrls.map((E,T)=>s.jsx(nS,{style:{width:L.vpWidth,flexShrink:0},children:s.jsx(t2,{src:E,alt:"",draggable:!1})},`detail-hero-${T}`))}):s.jsx(t2,{src:C[0],alt:"",draggable:!1})})}),s.jsx(rS,{children:C.map((E,T)=>s.jsx(iS,{type:"button","aria-label":`${T+1}번째 사진으로 이동`,"aria-current":T===L.activeDot?"true":void 0,$active:T===L.activeDot,onClick:()=>L.setLoopIndex(T+1)},T))})]}),s.jsxs(oS,{children:[s.jsxs(lS,{children:[s.jsx(sS,{children:n.name}),s.jsx(Ms,{placeId:n.id})]}),s.jsxs(aS,{children:[s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),s.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),n.address]}),s.jsx(uS,{children:n.shortDescription}),$&&s.jsxs(cS,{children:[s.jsxs(dS,{children:[s.jsxs(fS,{children:[s.jsx(pS,{children:"프로그램 · 후기"}),s.jsxs(hS,{children:["진행 중 ",P.length," · 지난 ",S.length]})]}),s.jsx(gS,{children:I})]}),P.length>0?s.jsx(LS,{"aria-label":"진행 중인 프로그램 사진",children:P.map(E=>s.jsxs(xS,{type:"button",onClick:()=>{f(E.id),p(!0)},children:[s.jsx("img",{src:E.imageUrl,alt:"",draggable:!1}),s.jsx(yS,{children:E.title})]},E.id))}):s.jsxs(mS,{type:"button",onClick:()=>{f(void 0),p(!0)},children:["지난 프로그램·후기 보기 (",S.length,")"]})]}),s.jsxs(vS,{children:[s.jsxs(n2,{children:[s.jsxs(r2,{type:"button",$open:l==="fee",onClick:()=>a(l==="fee"?null:"fee"),children:[s.jsx("span",{children:"입장료·이용 요금"}),s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M9 18l6-6-6-6"})})]}),s.jsx(i2,{$open:l==="fee",children:s.jsx(o2,{children:s.jsx(l2,{children:n.admissionFee??"현장·예약 시 안내"})})})]}),s.jsxs(n2,{children:[s.jsxs(r2,{type:"button",$open:l==="notice",onClick:()=>a(l==="notice"?null:"notice"),children:[s.jsx("span",{children:"유의사항"}),s.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s.jsx("path",{d:"M9 18l6-6-6-6"})})]}),s.jsx(i2,{$open:l==="notice",children:s.jsx(o2,{children:s.jsx(l2,{children:o!=null&&o.body?s.jsx(f3,{children:o.body}):"등록된 유의사항이 없습니다."})})})]})]}),s.jsxs(wS,{children:[s.jsx("h3",{children:"시설 정보"}),s.jsx(kS,{children:i.map(E=>s.jsxs(bS,{children:[E==="wifi"&&s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M5 12.55a11 11 0 0 1 14.08 0"}),s.jsx("path",{d:"M1.42 9a16 16 0 0 1 21.16 0"}),s.jsx("path",{d:"M8.53 16.11a6 6 0 0 1 6.95 0"}),s.jsx("line",{x1:"12",y1:"20",x2:"12.01",y2:"20"})]}),E==="parking"&&s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),s.jsx("path",{d:"M3 9h18M9 21V9"})]}),E==="tea"&&s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M18 8h1a4 4 0 0 1 0 8h-1"}),s.jsx("path",{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"}),s.jsx("line",{x1:"6",y1:"1",x2:"6",y2:"4"}),s.jsx("line",{x1:"10",y1:"1",x2:"10",y2:"4"}),s.jsx("line",{x1:"14",y1:"1",x2:"14",y2:"4"})]}),s.jsx("span",{children:AS[E]??E})]},E))})]}),s.jsxs(CS,{children:[s.jsx("h3",{children:"위치"}),s.jsxs(jS,{children:[s.jsxs($S,{type:"button",onClick:x,title:"클릭하여 주소 복사",children:[s.jsx(ES,{children:n.address}),s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),s.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})]}),s.jsxs(PS,{href:`https://map.naver.com/v5/search/${encodeURIComponent(n.address)}`,target:"_blank",rel:"noreferrer noopener",children:[s.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),s.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"안내"]})]}),s.jsx(RS,{id:"naver-map",ref:r})]})]}),s.jsx(SS,{href:n.externalLink,target:"_blank",rel:"noreferrer",children:"예약하기"}),$&&s.jsx(Zb,{place:n,open:d,onClose:()=>p(!1),initialProgramId:m}),y&&s.jsx(g3,{urls:y.urls,initialLoopIndex:y.initialLoopIndex,onClose:()=>v(null)})]})},Ia=[{id:"notice-1",category:"공지사항",title:"[중요] 서버 점검 및 재발방지 안내",date:"2026-01-18",summary:"서비스 안정화를 위한 점검이 예정되어 있습니다.",details:{paragraphs:["안녕하세요, 전국 힐링명상지도입니다.","보다 안정적인 서비스를 제공하기 위해 정기 점검을 진행합니다.","점검 시간에는 일부 서비스 이용이 제한될 수 있으니 양해 부탁드립니다."],bullets:["점검 일시: 2026년 1월 25일(일) 02:00 ~ 05:00","점검 내용: 서버 안정화 및 보안 업데이트","영향 범위: 검색/상세 페이지 접속 지연"],footer:"전국 힐링명상지도 드림"}},{id:"notice-2",category:"공지사항",title:"제주 · 강원 신규 명상센터 추가",date:"2026-01-10",summary:"신규 지역 명상센터가 업데이트되었습니다.",details:{paragraphs:["제주, 강원 지역의 새로운 명상센터가 추가되었습니다.","지역별 지도에서 확인하거나 명상센터 검색을 이용해보세요."],bullets:["제주 지역 신규 명상센터 6곳 추가","강원 지역 신규 명상센터 4곳 추가"],footer:"전국 힐링명상지도 드림"}},{id:"notice-3",category:"공지사항",title:"검색 경험 개선 업데이트",date:"2025-12-28",summary:"검색 정확도와 속도가 개선되었습니다.",details:{paragraphs:["검색 필터링 로직을 개선해 더 정확한 결과를 제공합니다.","추천 태그 기반 검색도 함께 적용됩니다."],bullets:["키워드 매칭 정확도 향상","검색 응답 속도 개선"],footer:"전국 힐링명상지도 드림"}},{id:"notice-4",category:"공지사항",title:"연말 운영시간 안내",date:"2025-12-20",summary:"연말 연휴 고객센터 운영시간을 안내드립니다.",details:{paragraphs:["연말 연휴 기간 고객센터 운영시간이 조정됩니다.","문의 사항은 1:1 문의를 이용해주세요."],bullets:["12/31: 09:00~14:00","01/01: 휴무"],footer:"전국 힐링명상지도 드림"}},{id:"notice-5",category:"공지사항",title:"프로필 즐겨찾기 기능 오픈",date:"2025-12-05",summary:"즐겨찾기 기능이 새롭게 추가되었습니다.",details:{paragraphs:["자주 찾는 명상센터를 저장해 빠르게 접근할 수 있어요.","상세 페이지의 ‘즐겨찾기’ 버튼을 눌러보세요."],bullets:["명상센터 즐겨찾기 추가","내 즐겨찾기 목록 제공"],footer:"전국 힐링명상지도 드림"}},{id:"notice-6",category:"공지사항",title:"지도 렌더링 성능 개선",date:"2025-11-23",summary:"지도 로딩 속도가 향상되었습니다.",details:{paragraphs:["지도 렌더링 최적화를 통해 로딩 시간이 감소했습니다.","모바일 환경에서도 부드럽게 동작합니다."],bullets:["지도 로딩 20% 개선","모바일 스크롤 최적화"],footer:"전국 힐링명상지도 드림"}},{id:"notice-7",category:"공지사항",title:"태그 필터 업데이트 안내",date:"2025-11-12",summary:"태그 필터가 더 세분화되었습니다.",details:{paragraphs:["태그 필터가 세분화되어 더 정확한 탐색이 가능합니다.","‘명상 유형’ 태그가 새로 추가되었습니다."],bullets:["명상 유형 태그 추가","인기 태그 자동 추천"],footer:"전국 힐링명상지도 드림"}},{id:"notice-8",category:"공지사항",title:"개인정보 처리방침 개정",date:"2025-10-30",summary:"개인정보 처리방침이 개정됩니다.",details:{paragraphs:["관련 법령 변경에 따라 개인정보 처리방침을 개정합니다.","자세한 내용은 서비스 소개 페이지에서 확인해주세요."],bullets:["개정 시행일: 2025-11-05","주요 변경사항: 데이터 보관 정책"],footer:"전국 힐링명상지도 드림"}},{id:"notice-9",category:"공지사항",title:"명상센터 데이터 정비 안내",date:"2025-10-15",summary:"일부 명상센터 정보가 업데이트됩니다.",details:{paragraphs:["보다 정확한 정보를 위해 명상센터 데이터를 정비합니다.","기간 중 일부 정보가 일시적으로 변경될 수 있습니다."],bullets:["정비 기간: 2025-10-16 ~ 2025-10-20","대상: 지역/태그/운영 정보"],footer:"전국 힐링명상지도 드림"}}],OS=h.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 24px 20px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};

  @media (max-width: 960px) {
    padding: 20px 14px calc(48px + env(safe-area-inset-bottom, 0px));
  }
`,BS=h.h1`
  font-size: 2.4rem;
  margin-bottom: 12px;
`,US=h.p`
  font-size: 1.2rem;
  color: ${({theme:e})=>e.colors.text700};
`,HS=h.form`
  margin: 24px 0;
  border: 1px solid ${({theme:e})=>e.colors.primary300};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 16px;
  display: grid;
  gap: 8px;
`,VS=h.label`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text700};
`,WS=h.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
`,KS=h.input`
  border: 1px solid ${({theme:e})=>e.colors.border200};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: 10px 12px;
  font-size: 1.1rem;
`,qS=h.button`
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
`,YS=h.div`
  display: grid;
  gap: 12px;
`,ZS=h.button`
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
`,QS=h.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: center;
`,GS=h.span`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.primary700};
  font-weight: 600;
`,XS=h.span`
  font-size: 1.2rem;
  font-weight: 600;
`,JS=h.span`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.text700};
`,eC=h.div`
  border-top: 1px solid ${({theme:e})=>e.colors.border200};
  padding-top: 12px;
  display: grid;
  gap: 8px;
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.6;
`,tC=h.ul`
  padding-left: 18px;
  display: grid;
  gap: 6px;
`,nC=h.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 8px;
`,rC=h.button`
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
`,iC=h.div`
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
`,oC=h.div`
  margin-top: 20px;
  display: flex;
  gap: 8px;
  justify-content: center;
`,lC=h.button`
  border: 1px solid ${({theme:e})=>e.colors.border200};
  background: ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.white};
  color: ${({$active:e})=>e?"#fff":"inherit"};
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
`,sC=()=>{var x;const[e,t]=k.useState(""),[n,r]=k.useState(((x=Ia[0])==null?void 0:x.id)??null),[i,o]=k.useState(1),[l,a]=k.useState(null),[u,c]=k.useState("ko-KR"),[d,p]=k.useState(!1),m=6,f=k.useCallback((b,P)=>{if(!("speechSynthesis"in window)){alert("이 브라우저는 음성 읽기를 지원하지 않습니다.");return}window.speechSynthesis.cancel();const S=window.speechSynthesis.getVoices(),$=u.split("-")[0],I=S.filter(A=>A.lang.startsWith($)),E=I.filter(A=>A.localService),T=I.filter(A=>!A.localService),z=d&&T.length?T[0]:E[0]??I[0],R=new SpeechSynthesisUtterance(b);R.lang=u,R.rate=.95,z&&(R.voice=z),R.onstart=()=>a(P),R.onend=()=>a(null),R.onerror=A=>{a(null),console.warn("TTS error:",A)},window.speechSynthesis.speak(R)},[u,d]);k.useEffect(()=>{if(!("speechSynthesis"in window))return;const b=()=>window.speechSynthesis.getVoices();return window.speechSynthesis.onvoiceschanged=b,b(),()=>{window.speechSynthesis.onvoiceschanged=null}},[]);const y=k.useMemo(()=>{const b=e.trim().toLowerCase();return b?Ia.filter(P=>[P.title,P.summary,...P.details.paragraphs,...P.details.bullets??[]].join(" ").toLowerCase().includes(b)):Ia},[e]),v=Math.max(1,Math.ceil(y.length/m)),C=Math.min(i,v),g=y.slice((C-1)*m,C*m),L=b=>{b.preventDefault(),o(1)};return s.jsxs(OS,{children:[s.jsx(BS,{children:"공지사항"}),s.jsx(US,{children:"전국 힐링명상지도에서 전하는 소식을 확인하세요."}),s.jsxs(HS,{onSubmit:L,children:[s.jsx(VS,{htmlFor:"notice-search",children:"공지사항 검색"}),s.jsxs(WS,{children:[s.jsx(KS,{id:"notice-search",type:"text",placeholder:"검색어를 입력해주세요.",value:e,onChange:b=>t(b.target.value)}),s.jsx(qS,{type:"submit",children:"검색"})]})]}),s.jsx(YS,{children:g.map(b=>{var S;const P=n===b.id;return s.jsxs(ZS,{type:"button",$active:P,onClick:()=>r(P?null:b.id),children:[s.jsxs(QS,{children:[s.jsx(GS,{children:b.category}),s.jsx(XS,{children:b.title}),s.jsx(JS,{children:b.date})]}),P&&s.jsxs(eC,{children:[s.jsxs(nC,{children:[s.jsx(rC,{type:"button",onClick:$=>{if($.stopPropagation(),l===b.id){window.speechSynthesis.cancel();return}const I=[b.title,b.summary,...b.details.paragraphs,...b.details.bullets??[],b.details.footer].filter(Boolean).join(". ");f(I,b.id)},children:l===b.id?s.jsx(s.Fragment,{children:"멈추기"}):s.jsxs(s.Fragment,{children:[s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[s.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),s.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"})]}),"음성으로 들으기"]})}),s.jsxs(iC,{children:[s.jsx("button",{type:"button",className:u==="ko-KR"?"active":"",onClick:$=>{$.stopPropagation(),c("ko-KR")},children:"한국어"}),s.jsx("button",{type:"button",className:u==="en-US"?"active":"",onClick:$=>{$.stopPropagation(),c("en-US")},children:"English"}),s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,fontSize:"0.85rem",cursor:"pointer"},children:[s.jsx("input",{type:"checkbox",checked:d,onChange:$=>{$.stopPropagation(),p($.target.checked)}}),"고품질(온라인)"]})]})]}),s.jsx("p",{children:b.summary}),b.details.paragraphs.map($=>s.jsx("p",{children:$},$)),((S=b.details.bullets)==null?void 0:S.length)>0&&s.jsx(tC,{children:b.details.bullets.map($=>s.jsx("li",{children:$},$))}),s.jsx("p",{children:b.details.footer})]})]},b.id)})}),s.jsx(oC,{children:Array.from({length:v},(b,P)=>s.jsx(lC,{type:"button",$active:C===P+1,onClick:()=>o(P+1),children:P+1},`page-${P+1}`))})]})},aC=h.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 24px 20px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};

  @media (max-width: 960px) {
    padding: 20px 14px calc(48px + env(safe-area-inset-bottom, 0px));
  }
`,uC=h.h1`
  font-size: 2.4rem;
  margin-bottom: 12px;
`,cC=h.p`
  font-size: 1.2rem;
  color: ${({theme:e})=>e.colors.text700};
`,dC=h.div`
  margin-top: 24px;
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 20px;
  box-shadow: ${({theme:e})=>e.shadow.soft};
`,pC=()=>s.jsxs(aC,{children:[s.jsx(uC,{children:"1:1 문의"}),s.jsx(cC,{children:"궁금한 점을 남겨주시면 빠르게 답변드릴게요."}),s.jsxs(dC,{children:[s.jsx("p",{children:"이메일: support@healingmeditation.kr"}),s.jsx("p",{children:"운영시간: 평일 09:00 - 18:00"})]})]}),fC=h.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 20px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};

  @media (max-width: 960px) {
    padding: 20px 14px calc(48px + env(safe-area-inset-bottom, 0px));
  }
`,hC=h.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 24px;
  color: ${({theme:e})=>e.colors.text900};
`,mC=h.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,gC=h.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text700};
  padding: 48px 24px;
  text-align: center;
  margin: 0;
`,LC=()=>{const{favorites:e}=jh(),t=e.map(n=>Rs(n)).filter(n=>n!=null);return s.jsxs(fC,{children:[s.jsx(hC,{children:"찜 목록"}),t.length===0?s.jsx(gC,{children:"찜한 명상아이템이 없어요. 리스트에서 하트를 눌러 찜해보세요."}):s.jsx(mC,{children:t.map(n=>s.jsx("li",{children:s.jsx(rs,{place:n})},n.id))})]})},xC="/assets/kakao-BwFsiG1v.png",yC="/assets/naver-8e52KbwB.png",vC="/assets/google-3Iqg8dcD.png",wC="/assets/left-arrow-D7869Zjw.png",pe={h1:De`
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 1.22;
    letter-spacing: -0.02em;
  `,h2:De`
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 1.26;
    letter-spacing: -0.02em;
  `,h3:De`
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.02em;
  `,title:De`
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: -0.02em;
  `,body1:De`
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.45;
  `,body2:De`
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.45;
  `,caption:De`
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.4;
  `,buttonLg:De`
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.2;
  `,buttonMd:De`
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.2;
  `},kC=Ve`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,I1=Ve`
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,bC=Ve`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,SC=Ve`
  from {
    opacity: 0;
    transform: scale(0.96) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`,L3=Ve`
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,CC=Ve`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ra=h.div`
  margin-top: 0;
  animation: ${CC} 0.42s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,jC=h.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,$C=h.p`
  margin: 0;
  padding: 0 4px;
  text-align: left;
  ${pe.caption};
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.45;
`,EC=h.section`
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
`,PC=h.div`
  position: relative;
  width: min(100%, 420px);
  padding: 6px 18px 16px;
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,xr=h.div`
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${kC} 0.35s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,ki=h.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
`,bi=h.div`
  flex-shrink: 0;
  margin-top: auto;
  padding-top: 12px;
  width: 100%;
`,TC=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
  gap: 12px;
  flex-shrink: 0;
`,IC=h.button`
  border: none;
  background: transparent;
  color: ${({theme:e})=>e.colors.text900};
  ${pe.body2};
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
`,RC=h.img`
  width: 18px;
  height: 18px;
  object-fit: contain;
`,zC=h.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  flex-shrink: 0;
`,MC=h.img`
  width: 74px;
  height: 74px;
  object-fit: contain;
`,s2=h.p`
  margin: 10px 0 0;
  padding: 0 12px;
  text-align: center;
  ${pe.body1};
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text900};
  line-height: 1.45;
  max-width: 320px;
`,_C=h.h1`
  margin: 8px 0 0;
  ${pe.title};
  color: ${({theme:e})=>e.colors.primary300};
`,za=h.h2`
  margin: 14px 0 0;
  text-align: center;
  ${pe.h3};
`,a2=h.p`
  margin: 8px 0 0;
  text-align: center;
  ${pe.body2};
  color: ${({theme:e})=>e.colors.text700};
`,NC=Ve`
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
`,Ma=h.div`
  position: fixed;
  top: calc(env(safe-area-inset-top, 0px) + 10px);
  left: 50%;
  z-index: 130;
  pointer-events: none;
  animation: ${NC} 2.2s ease both;
`,_a=h.div`
  padding: 12px 18px;
  border-radius: ${({theme:e})=>e.radii.pill};
  border: 1px solid
    ${({$variant:e})=>e==="error"?"#f0b8b8":"#96d6a3"};
  background: ${({$variant:e})=>e==="error"?"#fce8e6":"#e8f8ec"};
  color: ${({$variant:e})=>e==="error"?"#c5221f":"#1f6a2b"};
  ${pe.body2};
`,u2=h.div`
  margin-top: clamp(24px, 6vh, 48px);
  display: flex;
  flex-direction: column;
  gap: 14px;
`,AC=h.p`
  margin: 8px 0 0;
  text-align: center;
  ${pe.body2};
  color: ${({theme:e})=>e.colors.text700};
`,uc=h.p`
  margin: 6px 4px 0;
  ${pe.caption};
  color: #d93025;
  animation: ${I1} 0.24s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,FC=h.p`
  margin: 6px 4px 0;
  ${pe.caption};
  color: #188038;
  animation: ${I1} 0.24s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,c2=h.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  animation: ${L3} 0.42s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: ${({$index:e})=>e*.07}s;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,DC=h(AC)`
  margin-top: 0;
  text-align: left;
  padding: 0 2px;
  animation: ${L3} 0.42s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,d2=h(uc)`
  animation: ${I1} 0.3s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Na=h.div`
  position: relative;
  width: 100%;
`,Aa=h.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  color: ${({theme:e})=>e.colors.text700};
  ${pe.caption};
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
`,OC=h.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
`,BC=h.button`
  border: 1px solid
    ${({theme:e,$highlight:t})=>t?e.colors.primary600:e.colors.primary200};
  background: ${({theme:e,$highlight:t})=>t?e.colors.primary600:e.colors.white};
  color: ${({theme:e,$highlight:t})=>t?e.colors.white:e.colors.text700};
  border-radius: ${({theme:e})=>e.radii.pill};
  padding: 12px 14px;
  ${pe.buttonMd};
  cursor: pointer;
  opacity: 1;
  transition: border-color 0.22s ease, background 0.22s ease, color 0.22s ease;

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`,Kn=h.button`
  width: 100%;
  border: none;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary300};
  color: ${({theme:e})=>e.colors.white};
  padding: 16px 20px;
  ${pe.buttonMd};
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({$disabled:e})=>e?.55:1};
  margin-top: 0;
  flex-shrink: 0;
  transition: opacity 0.25s ease, transform 0.2s ease;

  &:not(:disabled):active {
    transform: scale(0.99);
  }
`,UC=h.div`
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`,HC=h.button`
  border: 1px solid ${({theme:e})=>e.colors.primary300};
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.primary300};
  ${pe.buttonMd};
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
`,VC=h.p`
  margin: 0;
  text-align: center;
  ${pe.caption};
  color: ${({theme:e,$error:t})=>t?"#d93025":e.colors.text700};
  max-width: 320px;
  line-height: 1.45;
`,WC=h.div`
  margin-top: 18px;
`,x3=h.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.28);
  display: grid;
  place-items: center;
  z-index: 120;
  animation: ${bC} 0.22s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,KC=h(x3)`
  z-index: 125;
`,y3=h.div`
  width: min(88vw, 320px);
  background: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 22px 18px 16px;
  animation: ${SC} 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,p2=h.p`
  text-align: center;
  ${pe.body1};
  color: ${({theme:e})=>e.colors.text900};
`,qC=h.div`
  margin-top: 18px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`,cc=h.button`
  border: 1px solid
    ${({theme:e,$primary:t})=>t?e.colors.primary300:e.colors.primary200};
  background: ${({theme:e,$primary:t})=>t?e.colors.primary300:e.colors.white};
  color: ${({theme:e,$primary:t})=>t?e.colors.white:e.colors.text900};
  border-radius: ${({theme:e})=>e.radii.pill};
  padding: 10px 14px;
  ${pe.buttonMd};
  cursor: pointer;
`,YC=h(cc).attrs({type:"button",$primary:!0})`
  width: 100%;
  margin-top: 14px;
`,ZC=h.div`
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
  ${pe.h2};
  background:
    linear-gradient(to top, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.06)),
    radial-gradient(circle at 20% 20%, #a8d97a, #5f8f49 38%, #304f2d);
`,QC=h.button`
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
`,GC=h(Kn)`
  flex-shrink: 0;
`,XC=h.button`
  border: 1px solid ${({theme:e})=>e.colors.primary200};
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.primary300};
  ${pe.buttonMd};
  border-radius: ${({theme:e})=>e.radii.pill};
  padding: 8px 14px;
  cursor: pointer;
  flex-shrink: 0;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:hover {
    background: ${({theme:e})=>e.colors.primary50};
    border-color: ${({theme:e})=>e.colors.primary300};
  }
`,JC=h.span`
  display: block;
  text-align: right;
  width: 100%;
  margin: 0 0 4px;
  ${pe.caption};
  color: ${({theme:e})=>e.colors.text700};
`,ej=h.div`
  margin: 36px auto 0;
  display: flex;
  justify-content: center;
`,tj=h.img`
  width: 108px;
  height: 108px;
  object-fit: contain;
`,nj=h.h2`
  margin: 10px 0 0;
  text-align: center;
  ${pe.h1};
  color: ${({theme:e})=>e.colors.primary300};
`,rj=h.p`
  margin: 8px 0 0;
  text-align: center;
  ${pe.body2};
  color: ${({theme:e})=>e.colors.text700};
`,ij=h.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,Ui=h.input`
  width: 100%;
  border: 1px solid ${({theme:e,$error:t})=>t?"#d93025":e.colors.primary200};
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.text900};
  ${pe.body2};
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
`,Fa=h(Ui)`
  padding: 14px 56px 14px 24px;
  transition:
    border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.22s ease;
`,oj=h.div`
  position: relative;
  width: 100%;
  min-width: 0;
`,lj=h(Ui)`
  padding: 14px 58px 14px 24px;
`,sj=h.span`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  ${pe.caption};
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: ${({theme:e})=>e.colors.text700};
`,aj=h.button`
  margin-top: 0;
  width: 100%;
  border: none;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary300};
  color: ${({theme:e})=>e.colors.white};
  padding: 16px 20px;
  ${pe.buttonMd};
  cursor: pointer;
  transition: transform 0.15s ease;

  &:hover {
    transform: translateY(-1px);
  }
`,uj=h.div`
  margin: 22px 0 18px;
  display: flex;
  align-items: center;
  gap: 14px;
  color: ${({theme:e})=>e.colors.text700};
  ${pe.caption};

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: ${({theme:e})=>e.colors.primary200};
  }
`,cj=h.div`
  display: flex;
  justify-content: center;
  gap: 22px;
`,Da=h.button`
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
`,Oa=h.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
`,dj=h.div`
  margin: 28px 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 6px;
  text-align: center;
  ${pe.body2};
  color: ${({theme:e})=>e.colors.text900};
`,pj=h.button`
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
`,fj=h.div`
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
`,hj=h.div`
  flex: 1 1 auto;
  min-height: min(200px, 28dvh);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,mj=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  padding-bottom: 4px;
`,gj=h.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0;
`,Lj=h.img`
  width: 72px;
  height: 72px;
  object-fit: contain;
`,xj=h.p`
  margin: 0;
  text-align: center;
  ${pe.body2};
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.45;
  max-width: 300px;
`,yj=h.div`
  margin-top: 22px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
`,Go=h.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 52px;
  padding: 10px 0;
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary200};
`,Xo=h.label`
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
`,Jo=h.input`
  width: 20px;
  height: 20px;
  margin: 2px 0 0;
  flex-shrink: 0;
  accent-color: ${({theme:e})=>e.colors.primary300};
  cursor: pointer;
`,el=h.span`
  ${pe.body2};
  color: ${({theme:e})=>e.colors.text900};
  line-height: 1.4;
`,Ba=h.span`
  display: inline-block;
  margin-right: 6px;
  ${pe.caption};
  font-weight: 700;
  color: ${({theme:e,$optional:t})=>t?e.colors.text700:e.colors.primary600};
`,Ua=h.button`
  flex-shrink: 0;
  margin: 0;
  padding: 8px 4px 8px 10px;
  border: none;
  background: none;
  ${pe.caption};
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
`,vj=h.span`
  flex-shrink: 0;
  width: 64px;
`,wj=h(y3)`
  width: min(92vw, 360px);
  max-height: min(72dvh, 520px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 18px 16px 14px;
`,kj=h.div`
  margin-top: 12px;
  overflow-y: auto;
  flex: 1 1 auto;
  min-height: 0;
  ${pe.body2};
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.55;
  white-space: pre-line;
`,f2={service:{title:"서비스 이용약관",body:`제1조 (목적)
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

수신 방법·빈도·철회 절차 등은 추후 설정에서 변경하실 수 있습니다.`}},bj=e=>!(e.length<8||!/[a-zA-Z]/.test(e)||!/[0-9]/.test(e)),h2=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,m2=/^01[0-9]\d{7,8}$/,Sj="111111",Cj=()=>{var Bt;const e=Ot(),[t,n]=k.useState("login"),[r,i]=k.useState(""),[o,l]=k.useState(!1),[a,u]=k.useState(""),[c,d]=k.useState(""),[p,m]=k.useState(""),[f,y]=k.useState(""),[v,C]=k.useState(!1),[g,L]=k.useState(!1),[x,b]=k.useState(!1),[P,S]=k.useState("KR-11"),[$,I]=k.useState(!1),[E,T]=k.useState(!1),[z,R]=k.useState(!1),[A,N]=k.useState(null),[F,Y]=k.useState(300),[K,_]=k.useState(!1),[D,w]=k.useState(!1),[q,Z]=k.useState(!1),[j,re]=k.useState(!1),[oe,Q]=k.useState(null),[H,G]=k.useState(!1),[de,se]=k.useState(null),[je,Le]=k.useState(!1),te=((Bt=cn(P))==null?void 0:Bt.name)??"서울",ue=k.useMemo(()=>r.trim(),[r]),X=k.useMemo(()=>ue?!h2.test(ue):!1,[ue]),pt=k.useMemo(()=>ue.length>0&&h2.test(ue),[ue]),fn=X,hn=k.useMemo(()=>a.replace(/[^\d]/g,""),[a]),ko=k.useMemo(()=>hn?!m2.test(hn):!1,[hn]),ui=k.useMemo(()=>hn.length>0&&m2.test(hn),[hn]),bo=ko,ci=k.useMemo(()=>/^\d{6}$/.test(c.trim()),[c]),di=k.useMemo(()=>{const V=p;return V?V.length<8?"8자 이상이어야 합니다":/[a-zA-Z]/.test(V)?/[0-9]/.test(V)?null:"숫자가 포함되어야 합니다":"영문이 포함되어야 합니다":null},[p]),So=k.useMemo(()=>f.length>0&&p!==f,[p,f]),Co=k.useMemo(()=>bj(p)&&p===f,[p,f]),M=F<=0,U=k.useMemo(()=>{const V=Math.floor(F/60),we=F%60;return`${V}:${String(we).padStart(2,"0")}`},[F]),ee=k.useMemo(()=>D&&q&&j,[D,q,j]),le=k.useMemo(()=>D&&q,[D,q]);k.useEffect(()=>{if(t!=="signup-account"||!E)return;const V=window.setInterval(()=>{Y(we=>we>0?we-1:0)},1e3);return()=>window.clearInterval(V)},[t,E]),k.useEffect(()=>{if(t!=="signup-account"||!E||!z)return;const V=window.setTimeout(()=>{var we;(we=document.getElementById("signup-password-anchor"))==null||we.scrollIntoView({behavior:"smooth",block:"nearest"})},80);return()=>window.clearTimeout(V)},[t,E,z]),k.useEffect(()=>{if(t!=="signup-account"||!o)return;const V=window.setTimeout(()=>{var we;(we=document.getElementById("signup-phone-anchor"))==null||we.scrollIntoView({behavior:"smooth",block:"nearest"})},100);return()=>window.clearTimeout(V)},[t,o]),k.useEffect(()=>{if(!A)return;const V=window.setTimeout(()=>{N(null)},2200);return()=>window.clearTimeout(V)},[A]),k.useEffect(()=>{if(!K)return;const V=window.setTimeout(()=>{_(!1)},2200);return()=>window.clearTimeout(V)},[K]),k.useEffect(()=>{t==="login"&&b(!1)},[t]),k.useEffect(()=>{t!=="signup-region"&&(se(null),Le(!1),G(!1))},[t]);const me=()=>{if(se(null),Le(!1),!navigator.geolocation){Le(!0),se("이 환경에서는 위치 정보를 쓸 수 없어요. 지도에서 골라주세요.");return}G(!0),navigator.geolocation.getCurrentPosition(V=>{var mn;G(!1);const we=_7(V.coords.latitude,V.coords.longitude);if(we){S(we),I(!0),Le(!1);const Je=((mn=cn(we))==null?void 0:mn.name)??we;se(`${Je} 지역으로 맞췄어요. 맞는지 확인해 주세요.`)}else Le(!0),se("위치로 시·도를 찾지 못했어요. 지도에서 선택해 주세요.")},V=>{G(!1),Le(!0),V.code===1?se("위치 권한이 필요해요. 허용하시거나 지도에서 골라주세요."):V.code===2?se("위치를 가져올 수 없어요. 지도에서 선택해 주세요."):se("위치 확인에 실패했어요. 지도에서 선택해 주세요.")},{enableHighAccuracy:!1,maximumAge:3e5,timeout:12e3})},ft=()=>{if(t==="login"){e(-1);return}if(t==="signup-terms"){Q(null),n("login");return}if(t==="signup-account"){l(!1),T(!1),R(!1),N(null),u(""),d(""),m(""),y(""),C(!1),L(!1),n("signup-terms");return}if(t==="signup-region"){n("signup-account");return}t==="signup-interest"&&n("signup-region")};return s.jsx(EC,{children:s.jsxs(PC,{children:[t!=="signup-complete"&&s.jsxs(TC,{children:[s.jsxs(IC,{type:"button",onClick:ft,"aria-label":"뒤로가기",children:[s.jsx(RC,{src:wC,alt:"","aria-hidden":"true"}),"뒤로가기"]}),t==="signup-interest"&&s.jsx(XC,{type:"button",onClick:()=>n("signup-complete"),children:"건너뛰기"})]}),t==="login"&&s.jsxs(xr,{children:[s.jsxs(ki,{children:[s.jsxs(zC,{children:[s.jsx(MC,{src:vl,alt:"명상 지도 로고"}),s.jsx(s2,{children:"명상 지도에 오신 것을 환영합니다!"}),s.jsx(_C,{children:"명상 지도"})]}),s.jsxs(ij,{children:[s.jsx(Ui,{type:"email",placeholder:"이메일","aria-label":"이메일"}),s.jsxs(Na,{children:[s.jsx(Fa,{type:x?"text":"password",placeholder:"비밀번호","aria-label":"비밀번호",autoComplete:"current-password"}),s.jsx(Aa,{type:"button","aria-pressed":x,"aria-label":x?"비밀번호 숨기기":"비밀번호 보기",onClick:()=>b(V=>!V),children:x?"숨기기":"보기"})]})]}),s.jsx(uj,{children:"또는"}),s.jsxs(cj,{children:[s.jsx(Da,{type:"button",$bg:"transparent","aria-label":"카카오로 로그인",children:s.jsx(Oa,{src:xC,alt:"카카오 로그인"})}),s.jsx(Da,{type:"button",$bg:"transparent",$color:"#fff","aria-label":"네이버로 로그인",children:s.jsx(Oa,{src:yC,alt:"네이버 로그인"})}),s.jsx(Da,{type:"button",$bg:"transparent","aria-label":"구글로 로그인",children:s.jsx(Oa,{src:vC,alt:"구글 로그인"})})]}),s.jsxs(dj,{children:[s.jsx("span",{children:"계정이 없으신가요?"}),s.jsx(pj,{type:"button",onClick:()=>{i(""),l(!1),u(""),d(""),m(""),y(""),C(!1),L(!1),T(!1),R(!1),N(null),Y(300),S("KR-11"),w(!1),Z(!1),re(!1),Q(null),n("signup-terms")},children:"회원가입"})]})]}),s.jsx(bi,{children:s.jsx(aj,{type:"button",children:"로그인하기"})})]}),t==="signup-terms"&&s.jsxs(xr,{children:[s.jsxs(fj,{children:[s.jsx(hj,{children:s.jsxs(gj,{children:[s.jsx(Lj,{src:vl,alt:"명상 지도 로고"}),s.jsx(s2,{children:"명상 지도에 오신 것을 환영합니다!"})]})}),s.jsxs(mj,{children:[s.jsx(xj,{children:"서비스 이용을 위해 아래 약관에 동의해 주세요."}),s.jsxs(yj,{children:[s.jsxs(Go,{children:[s.jsxs(Xo,{htmlFor:"signup-terms-service",children:[s.jsx(Jo,{id:"signup-terms-service",type:"checkbox",checked:D,onChange:V=>w(V.target.checked)}),s.jsxs(el,{children:[s.jsx(Ba,{children:"[필수]"}),"서비스 이용약관에 동의합니다"]})]}),s.jsx(Ua,{type:"button",onClick:V=>{V.stopPropagation(),Q("service")},children:"자세히 ›"})]}),s.jsxs(Go,{children:[s.jsxs(Xo,{htmlFor:"signup-terms-privacy",children:[s.jsx(Jo,{id:"signup-terms-privacy",type:"checkbox",checked:q,onChange:V=>Z(V.target.checked)}),s.jsxs(el,{children:[s.jsx(Ba,{children:"[필수]"}),"개인정보 수집 및 이용에 동의합니다"]})]}),s.jsx(Ua,{type:"button",onClick:V=>{V.stopPropagation(),Q("privacy")},children:"자세히 ›"})]}),s.jsxs(Go,{children:[s.jsxs(Xo,{htmlFor:"signup-terms-marketing",children:[s.jsx(Jo,{id:"signup-terms-marketing",type:"checkbox",checked:j,onChange:V=>re(V.target.checked)}),s.jsxs(el,{children:[s.jsx(Ba,{$optional:!0,children:"[선택]"}),"마케팅 정보 수신에 동의합니다"]})]}),s.jsx(Ua,{type:"button",onClick:V=>{V.stopPropagation(),Q("marketing")},children:"자세히 ›"})]}),s.jsxs(Go,{children:[s.jsxs(Xo,{htmlFor:"signup-terms-all",children:[s.jsx(Jo,{id:"signup-terms-all",type:"checkbox",checked:ee,onChange:V=>{const we=V.target.checked;w(we),Z(we),re(we)}}),s.jsx(el,{children:"전체 동의"})]}),s.jsx(vj,{"aria-hidden":!0})]})]})]})]}),s.jsx(bi,{children:s.jsx(Kn,{type:"button",$disabled:!le,disabled:!le,onClick:()=>n("signup-account"),children:"다음"})})]}),t==="signup-account"&&s.jsxs(xr,{children:[s.jsxs(ki,{children:[s.jsx(za,{children:"회원가입"}),s.jsxs(u2,{children:[s.jsx(Ui,{type:"email",placeholder:"이메일",value:r,$error:fn,onChange:V=>i(V.target.value),autoComplete:"email",disabled:o}),X&&s.jsx(uc,{children:"이메일 형식이 아닙니다"}),!fn&&pt&&!o&&s.jsx(FC,{children:"사용가능한 이메일입니다"}),o&&s.jsxs(Ra,{id:"signup-phone-anchor",children:[s.jsx(Ui,{type:"tel",inputMode:"numeric",placeholder:"휴대폰 번호 (- 없이)",value:a,$error:bo,onChange:V=>u(V.target.value.replace(/\D/g,"")),autoComplete:"tel",disabled:z}),bo&&s.jsx(uc,{children:"올바른 휴대폰 번호를 입력해 주세요"})]})]}),E&&s.jsx(Ra,{id:"signup-code-anchor",children:s.jsxs(jC,{children:[s.jsxs(OC,{children:[s.jsxs(oj,{children:[s.jsx(lj,{type:"text",inputMode:"numeric",placeholder:"인증번호",value:c,onChange:V=>d(V.target.value.replace(/\D/g,"").slice(0,6)),autoComplete:"one-time-code","aria-describedby":z?void 0:"signup-code-hint",disabled:z}),s.jsx(sj,{title:`남은 시간 ${U}`,children:U})]}),s.jsx(BC,{type:"button",$highlight:M,disabled:z,onClick:()=>{d(""),R(!1),N(null),Y(300),_(!0)},children:"다시받기"})]}),!z&&s.jsx($C,{id:"signup-code-hint",children:"휴대폰으로 발송된 6자리 인증번호를 입력해 주세요"})]})}),E&&z&&s.jsx(Ra,{id:"signup-password-anchor",children:s.jsxs(u2,{children:[s.jsxs(c2,{$index:0,children:[s.jsxs(Na,{children:[s.jsx(Fa,{type:v?"text":"password",placeholder:"비밀번호",value:p,$error:!!di,onChange:V=>m(V.target.value),autoComplete:"new-password"}),s.jsx(Aa,{type:"button","aria-pressed":v,"aria-label":v?"비밀번호 숨기기":"비밀번호 보기",onClick:()=>C(V=>!V),children:v?"숨기기":"보기"})]}),di&&s.jsx(d2,{children:di})]}),s.jsxs(c2,{$index:1,children:[s.jsxs(Na,{children:[s.jsx(Fa,{type:g?"text":"password",placeholder:"비밀번호 확인",value:f,$error:So,onChange:V=>y(V.target.value),autoComplete:"new-password"}),s.jsx(Aa,{type:"button","aria-pressed":g,"aria-label":g?"비밀번호 확인 숨기기":"비밀번호 확인 보기",onClick:()=>L(V=>!V),children:g?"숨기기":"보기"})]}),So&&s.jsx(d2,{children:"비밀번호가 일치하지 않습니다"})]}),s.jsx(DC,{children:"8자 이상, 영문+숫자 포함"})]})})]}),s.jsxs(bi,{children:[!o&&s.jsx(Kn,{type:"button",$disabled:!pt,disabled:!pt,onClick:()=>l(!0),children:"다음"}),o&&!E&&s.jsx(Kn,{type:"button",$disabled:!ui,disabled:!ui,onClick:()=>{T(!0),R(!1),N(null),d(""),Y(300),_(!0),window.setTimeout(()=>{var V;(V=document.getElementById("signup-code-anchor"))==null||V.scrollIntoView({behavior:"smooth",block:"nearest"})},120)},children:"인증번호 받기"}),E&&!z&&s.jsx(Kn,{type:"button",$disabled:!ci,disabled:!ci,onClick:()=>{ci&&(c.trim()===Sj?(R(!0),N("success")):N("error"))},children:"인증"}),E&&z&&s.jsx(Kn,{type:"button",$disabled:!Co,disabled:!Co,onClick:()=>n("signup-region"),children:"다음"})]})]}),K&&s.jsx(Ma,{role:"status","aria-live":"polite",children:s.jsx(_a,{children:"인증번호를 보냈어요!"})}),A==="success"&&s.jsx(Ma,{role:"status","aria-live":"polite",children:s.jsx(_a,{children:"인증되었습니다"})}),A==="error"&&s.jsx(Ma,{role:"alert","aria-live":"assertive",children:s.jsx(_a,{$variant:"error",children:"인증번호가 틀렸습니다"})}),t==="signup-region"&&s.jsx(xr,{children:s.jsxs(ki,{children:[s.jsx(za,{children:"활동 지역을 설정해주세요"}),s.jsx(a2,{children:"주로 명상하는 지역을 선택해주세요"}),s.jsxs(UC,{children:[s.jsx(HC,{type:"button",disabled:H,"aria-busy":H,onClick:me,children:H?"위치 확인 중…":"현재 위치로 지역 맞추기"}),de&&s.jsx(VC,{$error:je,children:de})]}),s.jsx(WC,{children:s.jsx(f1,{maxMapHeight:"clamp(220px, calc(100dvh - 260px), 480px)",activeRegionId:P,onSelectRegion:V=>{S(V),I(!0)}})})]})}),t==="signup-interest"&&s.jsxs(xr,{children:[s.jsxs(ki,{children:[s.jsx(JC,{children:"1/10"}),s.jsx(za,{children:"관심사를 선택해주세요"}),s.jsx(a2,{children:"좌우로 넘기며 관심있는 주제를 선택하세요"}),s.jsx(ZC,{children:"숲"}),s.jsx(QC,{type:"button","aria-label":"관심사 좋아요",children:"♡"})]}),s.jsx(bi,{children:s.jsx(GC,{type:"button",onClick:()=>n("signup-complete"),children:"다음"})})]}),t==="signup-complete"&&s.jsxs(xr,{children:[s.jsxs(ki,{children:[s.jsx(ej,{children:s.jsx(tj,{src:vl,alt:"명상 지도 로고"})}),s.jsx(nj,{children:"가입 완료!"}),s.jsx(rj,{children:"평온한 명상 여행을 시작하세요"})]}),s.jsx(bi,{children:s.jsx(Kn,{type:"button",onClick:()=>{n("login")},children:"시작하기"})})]}),t==="signup-region"&&$&&s.jsx(x3,{role:"dialog","aria-modal":"true","aria-label":"지역 확인",children:s.jsxs(y3,{children:[s.jsxs(p2,{children:[te," 지역이 맞습니까?"]}),s.jsxs(qC,{children:[s.jsx(cc,{type:"button",onClick:()=>I(!1),children:"아니오"}),s.jsx(cc,{type:"button",$primary:!0,onClick:()=>{I(!1),n("signup-interest")},children:"네"})]})]})}),oe!==null&&s.jsx(KC,{role:"dialog","aria-modal":"true","aria-labelledby":"terms-detail-title",onClick:()=>Q(null),children:s.jsxs(wj,{onClick:V=>V.stopPropagation(),children:[s.jsx(p2,{id:"terms-detail-title",children:f2[oe].title}),s.jsx(kj,{children:f2[oe].body}),s.jsx(YC,{onClick:()=>Q(null),children:"확인"})]})})]})})},jj=h.div`
  color: ${({theme:e})=>e.colors.text900};
`,g2=h.section`
  padding: 48px 20px;

  @media (max-width: 960px) {
    padding: 36px 14px;
  }
`,L2=h.div`
  max-width: 1100px;
  margin: 0 auto;
`,$j=h.section`
  padding: 64px 20px calc(56px + env(safe-area-inset-bottom, 0px));
  background: linear-gradient(180deg, #ffffff 0%, ${({theme:e})=>e.colors.primary50} 100%);

  @media (max-width: 960px) {
    padding: 48px 14px calc(40px + env(safe-area-inset-bottom, 0px));
  }
`,Ej=h.div`
  max-width: 1100px;
  margin: 0 auto;
  background: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 36px;
  box-shadow: ${({theme:e})=>e.shadow.soft};
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  display: grid;
  gap: 16px;
`,Pj=h.h1`
  font-size: 3rem;
  line-height: 1.3;
`,Tj=h.p`
  font-size: 1.3rem;
  color: ${({theme:e})=>e.colors.text700};
`,Ij=h(li)`
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
`,Rj=h.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`,Ha=h.div`
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 18px;
  box-shadow: ${({theme:e})=>e.shadow.soft};
`,Va=h.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text700};
`,Wa=h.p`
  font-size: 2.2rem;
  font-weight: 700;
  margin-top: 8px;
`,zj=h.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`,tl=h.div`
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 24px;
  box-shadow: ${({theme:e})=>e.shadow.soft};
  display: grid;
  gap: 10px;
`,nl=h.div`
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
`,Mj=h.section`
  padding: 48px 20px;
  background: ${({theme:e})=>e.colors.primary600};
  color: #fff;
`,_j=h.div`
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
`,Nj=h.button`
  border: none;
  background: #fff;
  color: ${({theme:e})=>e.colors.primary700};
  padding: 10px 18px;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  font-size: 1.1rem;
`,Aj=()=>s.jsxs(jj,{children:[s.jsx($j,{children:s.jsxs(Ej,{children:[s.jsx(Pj,{children:"누구나 원하는 곳에서, 더 깊은 힐링 명상"}),s.jsx(Tj,{children:"전국 힐링명상지도는 지역별 명상센터를 쉽고 빠르게 찾을 수 있는 플랫폼입니다."}),s.jsx(Ij,{to:"/",children:"명상센터 찾아보기"})]})}),s.jsx(g2,{children:s.jsx(L2,{children:s.jsxs(Rj,{children:[s.jsxs(Ha,{children:[s.jsx(Va,{children:"누적 명상센터"}),s.jsx(Wa,{children:"1,200+"})]}),s.jsxs(Ha,{children:[s.jsx(Va,{children:"지역 커버리지"}),s.jsx(Wa,{children:"전국 17개"})]}),s.jsxs(Ha,{children:[s.jsx(Va,{children:"누적 검색 수"}),s.jsx(Wa,{children:"210만+"})]})]})})}),s.jsx(g2,{children:s.jsx(L2,{children:s.jsxs(zj,{children:[s.jsxs(tl,{children:[s.jsx(nl,{children:s.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[s.jsx("path",{d:"M3 11l9-7 9 7"}),s.jsx("path",{d:"M5 10v10h14V10"})]})}),s.jsx("h3",{children:"지도 기반 탐색"}),s.jsx("p",{children:"대한민국 지도로 지역을 선택하고, 명상센터를 한눈에 찾아보세요."})]}),s.jsxs(tl,{children:[s.jsx(nl,{children:s.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:s.jsx("path",{d:"M4 6h16M4 12h10M4 18h6"})})}),s.jsx("h3",{children:"맞춤형 필터"}),s.jsx("p",{children:"해시태그와 정렬 기준으로 내게 맞는 명상센터를 빠르게 추천해요."})]}),s.jsxs(tl,{children:[s.jsx(nl,{children:s.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[s.jsx("circle",{cx:"12",cy:"8",r:"3"}),s.jsx("path",{d:"M6 20c1.5-3 4-5 6-5s4.5 2 6 5"})]})}),s.jsx("h3",{children:"상세 정보 제공"}),s.jsx("p",{children:"주소, 프로그램, 운영 단체 정보까지 한 페이지에서 확인하세요."})]}),s.jsxs(tl,{children:[s.jsx(nl,{children:s.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[s.jsx("circle",{cx:"10",cy:"10",r:"6"}),s.jsx("line",{x1:"14.5",y1:"14.5",x2:"21",y2:"21"})]})}),s.jsx("h3",{children:"검색 경험"}),s.jsx("p",{children:"검색어 입력만으로 관련 명상센터를 부드럽게 이어 보여드립니다."})]})]})})}),s.jsx(Mj,{children:s.jsxs(_j,{children:[s.jsxs("div",{children:[s.jsx("h2",{children:"명상센터 운영자라면 함께해요"}),s.jsx("p",{children:"전국 힐링명상지도와 함께 더 많은 사람에게 명상 경험을 전달하세요."})]}),s.jsx(Nj,{type:"button",children:"등록 문의하기"})]})})]}),Fj=h.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
  background: linear-gradient(180deg, ${({theme:e})=>e.colors.primary50} 0%, ${({theme:e})=>e.colors.warmCream} 100%);
`,Dj=h.div`
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
`,Oj=h.p`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.primary700};
  margin: 0 0 8px;
`,Bj=h.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.primary400};
  margin: 0 0 32px;
  text-align: center;
  line-height: 1.5;
`,Uj=h.button`
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
`,Hj=()=>{const e=Ot();return s.jsxs(Fj,{children:[s.jsx(Dj,{children:"404"}),s.jsx(Oj,{children:"Oops!"}),s.jsx(Bj,{children:"페이지를 찾을 수 없습니다."}),s.jsx(Uj,{type:"button",onClick:()=>e("/"),children:"홈으로"})]})},Vj=[{path:"/",element:s.jsx(y7,{}),children:[{index:!0,element:s.jsx(g0,{})},{path:"meditation",element:s.jsx(g0,{})},{path:"meditation/map",element:s.jsx(R8,{})},{path:"meditation/expert/:expertId/class/:programId",element:s.jsx(jx,{})},{path:"meditation/expert/:expertId",element:s.jsx(Lx,{})},{path:"meditation/region/:regionId/experts",element:s.jsx(BL,{})},{path:"meditation/region/:regionId",element:s.jsx(CL,{})},{path:"meditation/place/:placeId",element:s.jsx(DS,{})},{path:"favorites",element:s.jsx(LC,{})},{path:"profile",element:s.jsx(Cj,{})},{path:"notice",element:s.jsx(sC,{})},{path:"inquiry",element:s.jsx(pC,{})},{path:"service-info",element:s.jsx(Aj,{})},{path:"*",element:s.jsx(Hj,{})}]}],Wj=()=>j6(Vj),Kj=()=>s.jsx(Z6,{children:s.jsx(Wj,{})}),qj=h.div`
  min-height: 100vh;
`,Yj=()=>s.jsx(qj,{children:s.jsx(Kj,{})}),Zj=Zg`
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
`,Qj={colors:{primary50:"#f3eef8",primary100:"#e6dcf0",primary200:"#c9b8e0",primary300:"#a88bca",primary400:"#7a5aab",primary500:"#5c3d8f",primary600:"#4B0082",primary700:"#3d0069",primary800:"#2f0051",primary900:"#22003a",white:"#FFFFFF",warmCream:"#FFFAF8",buddingPeach:"#F5D8D0",charcoal:"#3D3D3D",warmGray:"#6B6B6B",text900:"#3D3D3D",text700:"#6B6B6B",border200:"#9B8A99",mutedMauve:"#9B8A99",dustyGold:"#C9A962",dustyRose:"#C9A090",bg50:"#FFFAF8",bg100:"#F5D8D0"},shadow:{soft:"0 12px 30px rgba(75, 0, 130, 0.1)"},radii:{pill:"999px",md:"12px",lg:"16px"}};Ka.createRoot(document.getElementById("root")).render(s.jsx(Re.StrictMode,{children:s.jsxs(Kg,{theme:Qj,children:[s.jsx(Zj,{}),s.jsx(Yj,{})]})}));
