function e6(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Wl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ma(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var gg={exports:{}},Aa={},mg={exports:{}},ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ps=Symbol.for("react.element"),t6=Symbol.for("react.portal"),n6=Symbol.for("react.fragment"),r6=Symbol.for("react.strict_mode"),i6=Symbol.for("react.profiler"),o6=Symbol.for("react.provider"),s6=Symbol.for("react.context"),l6=Symbol.for("react.forward_ref"),a6=Symbol.for("react.suspense"),c6=Symbol.for("react.memo"),u6=Symbol.for("react.lazy"),O0=Symbol.iterator;function d6(e){return e===null||typeof e!="object"?null:(e=O0&&e[O0]||e["@@iterator"],typeof e=="function"?e:null)}var xg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lg=Object.assign,yg={};function Qi(e,t,n){this.props=e,this.context=t,this.refs=yg,this.updater=n||xg}Qi.prototype.isReactComponent={};Qi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Qi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vg(){}vg.prototype=Qi.prototype;function K1(e,t,n){this.props=e,this.context=t,this.refs=yg,this.updater=n||xg}var Y1=K1.prototype=new vg;Y1.constructor=K1;Lg(Y1,Qi.prototype);Y1.isPureReactComponent=!0;var B0=Array.isArray,bg=Object.prototype.hasOwnProperty,G1={current:null},wg={key:!0,ref:!0,__self:!0,__source:!0};function kg(e,t,n){var r,i={},s=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(s=""+t.key),t)bg.call(t,r)&&!wg.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var c=Array(a),d=0;d<a;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ps,type:e,key:s,ref:l,props:i,_owner:G1.current}}function p6(e,t){return{$$typeof:Ps,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Z1(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ps}function f6(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var F0=/\/+/g;function bc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?f6(""+e.key):t.toString(36)}function kl(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ps:case t6:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+bc(l,0):r,B0(i)?(n="",e!=null&&(n=e.replace(F0,"$&/")+"/"),kl(i,t,n,"",function(d){return d})):i!=null&&(Z1(i)&&(i=p6(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(F0,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",B0(e))for(var a=0;a<e.length;a++){s=e[a];var c=r+bc(s,a);l+=kl(s,t,n,c,i)}else if(c=d6(e),typeof c=="function")for(e=c.call(e),a=0;!(s=e.next()).done;)s=s.value,c=r+bc(s,a++),l+=kl(s,t,n,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Fs(e,t,n){if(e==null)return e;var r=[],i=0;return kl(e,r,"","",function(s){return t.call(n,s,i++)}),r}function h6(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var St={current:null},jl={transition:null},g6={ReactCurrentDispatcher:St,ReactCurrentBatchConfig:jl,ReactCurrentOwner:G1};function jg(){throw Error("act(...) is not supported in production builds of React.")}ge.Children={map:Fs,forEach:function(e,t,n){Fs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Fs(e,function(){t++}),t},toArray:function(e){return Fs(e,function(t){return t})||[]},only:function(e){if(!Z1(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ge.Component=Qi;ge.Fragment=n6;ge.Profiler=i6;ge.PureComponent=K1;ge.StrictMode=r6;ge.Suspense=a6;ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=g6;ge.act=jg;ge.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Lg({},e.props),i=e.key,s=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,l=G1.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)bg.call(t,c)&&!wg.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&a!==void 0?a[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){a=Array(c);for(var d=0;d<c;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:Ps,type:e.type,key:i,ref:s,props:r,_owner:l}};ge.createContext=function(e){return e={$$typeof:s6,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o6,_context:e},e.Consumer=e};ge.createElement=kg;ge.createFactory=function(e){var t=kg.bind(null,e);return t.type=e,t};ge.createRef=function(){return{current:null}};ge.forwardRef=function(e){return{$$typeof:l6,render:e}};ge.isValidElement=Z1;ge.lazy=function(e){return{$$typeof:u6,_payload:{_status:-1,_result:e},_init:h6}};ge.memo=function(e,t){return{$$typeof:c6,type:e,compare:t===void 0?null:t}};ge.startTransition=function(e){var t=jl.transition;jl.transition={};try{e()}finally{jl.transition=t}};ge.unstable_act=jg;ge.useCallback=function(e,t){return St.current.useCallback(e,t)};ge.useContext=function(e){return St.current.useContext(e)};ge.useDebugValue=function(){};ge.useDeferredValue=function(e){return St.current.useDeferredValue(e)};ge.useEffect=function(e,t){return St.current.useEffect(e,t)};ge.useId=function(){return St.current.useId()};ge.useImperativeHandle=function(e,t,n){return St.current.useImperativeHandle(e,t,n)};ge.useInsertionEffect=function(e,t){return St.current.useInsertionEffect(e,t)};ge.useLayoutEffect=function(e,t){return St.current.useLayoutEffect(e,t)};ge.useMemo=function(e,t){return St.current.useMemo(e,t)};ge.useReducer=function(e,t,n){return St.current.useReducer(e,t,n)};ge.useRef=function(e){return St.current.useRef(e)};ge.useState=function(e){return St.current.useState(e)};ge.useSyncExternalStore=function(e,t,n){return St.current.useSyncExternalStore(e,t,n)};ge.useTransition=function(){return St.current.useTransition()};ge.version="18.3.1";mg.exports=ge;var m=mg.exports;const Ze=Ma(m),m6=e6({__proto__:null,default:Ze},[m]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x6=m,L6=Symbol.for("react.element"),y6=Symbol.for("react.fragment"),v6=Object.prototype.hasOwnProperty,b6=x6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w6={key:!0,ref:!0,__self:!0,__source:!0};function Sg(e,t,n){var r,i={},s=null,l=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)v6.call(t,r)&&!w6.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:L6,type:e,key:s,ref:l,props:i,_owner:b6.current}}Aa.Fragment=y6;Aa.jsx=Sg;Aa.jsxs=Sg;gg.exports=Aa;var o=gg.exports,vd={},$g={exports:{}},Wt={},Cg={exports:{}},Eg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,D){var C=_.length;_.push(D);e:for(;0<C;){var X=C-1>>>1,J=_[X];if(0<i(J,D))_[X]=D,_[C]=J,C=X;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var D=_[0],C=_.pop();if(C!==D){_[0]=C;e:for(var X=0,J=_.length,w=J>>>1;X<w;){var H=2*(X+1)-1,M=_[H],G=H+1,U=_[G];if(0>i(M,C))G<J&&0>i(U,M)?(_[X]=U,_[G]=C,X=G):(_[X]=M,_[H]=C,X=H);else if(G<J&&0>i(U,C))_[X]=U,_[G]=C,X=G;else break e}}return D}function i(_,D){var C=_.sortIndex-D.sortIndex;return C!==0?C:_.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var c=[],d=[],p=1,f=null,h=3,g=!1,b=!1,v=!1,$=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(_){for(var D=n(d);D!==null;){if(D.callback===null)r(d);else if(D.startTime<=_)r(d),D.sortIndex=D.expirationTime,t(c,D);else break;D=n(d)}}function S(_){if(v=!1,y(_),!b)if(n(c)!==null)b=!0,Y(I);else{var D=n(d);D!==null&&Q(S,D.startTime-_)}}function I(_,D){b=!1,v&&(v=!1,x(R),R=-1),g=!0;var C=h;try{for(y(D),f=n(c);f!==null&&(!(f.expirationTime>D)||_&&!P());){var X=f.callback;if(typeof X=="function"){f.callback=null,h=f.priorityLevel;var J=X(f.expirationTime<=D);D=e.unstable_now(),typeof J=="function"?f.callback=J:f===n(c)&&r(c),y(D)}else r(c);f=n(c)}if(f!==null)var w=!0;else{var H=n(d);H!==null&&Q(S,H.startTime-D),w=!1}return w}finally{f=null,h=C,g=!1}}var k=!1,j=null,R=-1,z=5,T=-1;function P(){return!(e.unstable_now()-T<z)}function E(){if(j!==null){var _=e.unstable_now();T=_;var D=!0;try{D=j(!0,_)}finally{D?A():(k=!1,j=null)}}else k=!1}var A;if(typeof L=="function")A=function(){L(E)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,F=N.port2;N.port1.onmessage=E,A=function(){F.postMessage(null)}}else A=function(){$(E,0)};function Y(_){j=_,k||(k=!0,A())}function Q(_,D){R=$(function(){_(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){b||g||(b=!0,Y(I))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(_){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var C=h;h=D;try{return _()}finally{h=C}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,D){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var C=h;h=_;try{return D()}finally{h=C}},e.unstable_scheduleCallback=function(_,D,C){var X=e.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?X+C:X):C=X,_){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=C+J,_={id:p++,callback:D,priorityLevel:_,startTime:C,expirationTime:J,sortIndex:-1},C>X?(_.sortIndex=C,t(d,_),n(c)===null&&_===n(d)&&(v?(x(R),R=-1):v=!0,Q(S,C-X))):(_.sortIndex=J,t(c,_),b||g||(b=!0,Y(I))),_},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(_){var D=h;return function(){var C=h;h=D;try{return _.apply(this,arguments)}finally{h=C}}}})(Eg);Cg.exports=Eg;var k6=Cg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j6=m,Vt=k6;function K(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Pg=new Set,os={};function qr(e,t){Ni(e,t),Ni(e+"Capture",t)}function Ni(e,t){for(os[e]=t,e=0;e<t.length;e++)Pg.add(t[e])}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bd=Object.prototype.hasOwnProperty,S6=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,H0={},U0={};function $6(e){return bd.call(U0,e)?!0:bd.call(H0,e)?!1:S6.test(e)?U0[e]=!0:(H0[e]=!0,!1)}function C6(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function E6(e,t,n,r){if(t===null||typeof t>"u"||C6(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $t(e,t,n,r,i,s,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=l}var pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pt[e]=new $t(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pt[t]=new $t(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pt[e]=new $t(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pt[e]=new $t(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pt[e]=new $t(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pt[e]=new $t(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pt[e]=new $t(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pt[e]=new $t(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pt[e]=new $t(e,5,!1,e.toLowerCase(),null,!1,!1)});var q1=/[\-:]([a-z])/g;function Q1(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(q1,Q1);pt[t]=new $t(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(q1,Q1);pt[t]=new $t(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(q1,Q1);pt[t]=new $t(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pt[e]=new $t(e,1,!1,e.toLowerCase(),null,!1,!1)});pt.xlinkHref=new $t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pt[e]=new $t(e,1,!1,e.toLowerCase(),null,!0,!0)});function X1(e,t,n,r){var i=pt.hasOwnProperty(t)?pt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(E6(t,n,i,r)&&(n=null),r||i===null?$6(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Kn=j6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Hs=Symbol.for("react.element"),pi=Symbol.for("react.portal"),fi=Symbol.for("react.fragment"),J1=Symbol.for("react.strict_mode"),wd=Symbol.for("react.profiler"),Ig=Symbol.for("react.provider"),Tg=Symbol.for("react.context"),ep=Symbol.for("react.forward_ref"),kd=Symbol.for("react.suspense"),jd=Symbol.for("react.suspense_list"),tp=Symbol.for("react.memo"),Jn=Symbol.for("react.lazy"),Rg=Symbol.for("react.offscreen"),V0=Symbol.iterator;function co(e){return e===null||typeof e!="object"?null:(e=V0&&e[V0]||e["@@iterator"],typeof e=="function"?e:null)}var Ve=Object.assign,wc;function _o(e){if(wc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wc=t&&t[1]||""}return`
`+wc+e}var kc=!1;function jc(e,t){if(!e||kc)return"";kc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),l=i.length-1,a=s.length-1;1<=l&&0<=a&&i[l]!==s[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==s[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==s[a]){var c=`
`+i[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=a);break}}}finally{kc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_o(e):""}function P6(e){switch(e.tag){case 5:return _o(e.type);case 16:return _o("Lazy");case 13:return _o("Suspense");case 19:return _o("SuspenseList");case 0:case 2:case 15:return e=jc(e.type,!1),e;case 11:return e=jc(e.type.render,!1),e;case 1:return e=jc(e.type,!0),e;default:return""}}function Sd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fi:return"Fragment";case pi:return"Portal";case wd:return"Profiler";case J1:return"StrictMode";case kd:return"Suspense";case jd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Tg:return(e.displayName||"Context")+".Consumer";case Ig:return(e._context.displayName||"Context")+".Provider";case ep:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case tp:return t=e.displayName||null,t!==null?t:Sd(e.type)||"Memo";case Jn:t=e._payload,e=e._init;try{return Sd(e(t))}catch{}}return null}function I6(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sd(t);case 8:return t===J1?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function T6(e){var t=zg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,s.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Us(e){e._valueTracker||(e._valueTracker=T6(e))}function Mg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=zg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Kl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $d(e,t){var n=t.checked;return Ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function W0(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=xr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ag(e,t){t=t.checked,t!=null&&X1(e,"checked",t,!1)}function Cd(e,t){Ag(e,t);var n=xr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ed(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ed(e,t.type,xr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function K0(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ed(e,t,n){(t!=="number"||Kl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var No=Array.isArray;function Ci(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+xr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Pd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(K(91));return Ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Y0(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(K(92));if(No(n)){if(1<n.length)throw Error(K(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:xr(n)}}function _g(e,t){var n=xr(t.value),r=xr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function G0(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ng(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Id(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ng(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Vs,Dg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Vs=Vs||document.createElement("div"),Vs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Vs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ss(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},R6=["Webkit","ms","Moz","O"];Object.keys(Uo).forEach(function(e){R6.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Uo[t]=Uo[e]})});function Og(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Uo.hasOwnProperty(e)&&Uo[e]?(""+t).trim():t+"px"}function Bg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Og(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var z6=Ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Td(e,t){if(t){if(z6[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(K(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(K(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(K(61))}if(t.style!=null&&typeof t.style!="object")throw Error(K(62))}}function Rd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zd=null;function np(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Md=null,Ei=null,Pi=null;function Z0(e){if(e=Rs(e)){if(typeof Md!="function")throw Error(K(280));var t=e.stateNode;t&&(t=Ba(t),Md(e.stateNode,e.type,t))}}function Fg(e){Ei?Pi?Pi.push(e):Pi=[e]:Ei=e}function Hg(){if(Ei){var e=Ei,t=Pi;if(Pi=Ei=null,Z0(e),t)for(e=0;e<t.length;e++)Z0(t[e])}}function Ug(e,t){return e(t)}function Vg(){}var Sc=!1;function Wg(e,t,n){if(Sc)return e(t,n);Sc=!0;try{return Ug(e,t,n)}finally{Sc=!1,(Ei!==null||Pi!==null)&&(Vg(),Hg())}}function ls(e,t){var n=e.stateNode;if(n===null)return null;var r=Ba(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(K(231,t,typeof n));return n}var Ad=!1;if(Fn)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){Ad=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{Ad=!1}function M6(e,t,n,r,i,s,l,a,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(p){this.onError(p)}}var Vo=!1,Yl=null,Gl=!1,_d=null,A6={onError:function(e){Vo=!0,Yl=e}};function _6(e,t,n,r,i,s,l,a,c){Vo=!1,Yl=null,M6.apply(A6,arguments)}function N6(e,t,n,r,i,s,l,a,c){if(_6.apply(this,arguments),Vo){if(Vo){var d=Yl;Vo=!1,Yl=null}else throw Error(K(198));Gl||(Gl=!0,_d=d)}}function Qr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Kg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function q0(e){if(Qr(e)!==e)throw Error(K(188))}function D6(e){var t=e.alternate;if(!t){if(t=Qr(e),t===null)throw Error(K(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return q0(i),e;if(s===r)return q0(i),t;s=s.sibling}throw Error(K(188))}if(n.return!==r.return)n=i,r=s;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=s;break}if(a===r){l=!0,r=i,n=s;break}a=a.sibling}if(!l){for(a=s.child;a;){if(a===n){l=!0,n=s,r=i;break}if(a===r){l=!0,r=s,n=i;break}a=a.sibling}if(!l)throw Error(K(189))}}if(n.alternate!==r)throw Error(K(190))}if(n.tag!==3)throw Error(K(188));return n.stateNode.current===n?e:t}function Yg(e){return e=D6(e),e!==null?Gg(e):null}function Gg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Gg(e);if(t!==null)return t;e=e.sibling}return null}var Zg=Vt.unstable_scheduleCallback,Q0=Vt.unstable_cancelCallback,O6=Vt.unstable_shouldYield,B6=Vt.unstable_requestPaint,Ge=Vt.unstable_now,F6=Vt.unstable_getCurrentPriorityLevel,rp=Vt.unstable_ImmediatePriority,qg=Vt.unstable_UserBlockingPriority,Zl=Vt.unstable_NormalPriority,H6=Vt.unstable_LowPriority,Qg=Vt.unstable_IdlePriority,_a=null,Cn=null;function U6(e){if(Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot(_a,e,void 0,(e.current.flags&128)===128)}catch{}}var hn=Math.clz32?Math.clz32:K6,V6=Math.log,W6=Math.LN2;function K6(e){return e>>>=0,e===0?32:31-(V6(e)/W6|0)|0}var Ws=64,Ks=4194304;function Do(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ql(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=Do(a):(s&=l,s!==0&&(r=Do(s)))}else l=n&~i,l!==0?r=Do(l):s!==0&&(r=Do(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-hn(t),i=1<<n,r|=e[n],t&=~i;return r}function Y6(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function G6(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-hn(s),a=1<<l,c=i[l];c===-1?(!(a&n)||a&r)&&(i[l]=Y6(a,t)):c<=t&&(e.expiredLanes|=a),s&=~a}}function Nd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Xg(){var e=Ws;return Ws<<=1,!(Ws&4194240)&&(Ws=64),e}function $c(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Is(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-hn(t),e[t]=n}function Z6(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-hn(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function ip(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-hn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Se=0;function Jg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var em,op,tm,nm,rm,Dd=!1,Ys=[],sr=null,lr=null,ar=null,as=new Map,cs=new Map,tr=[],q6="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function X0(e,t){switch(e){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":as.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":cs.delete(t.pointerId)}}function po(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Rs(t),t!==null&&op(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Q6(e,t,n,r,i){switch(t){case"focusin":return sr=po(sr,e,t,n,r,i),!0;case"dragenter":return lr=po(lr,e,t,n,r,i),!0;case"mouseover":return ar=po(ar,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return as.set(s,po(as.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,cs.set(s,po(cs.get(s)||null,e,t,n,r,i)),!0}return!1}function im(e){var t=Rr(e.target);if(t!==null){var n=Qr(t);if(n!==null){if(t=n.tag,t===13){if(t=Kg(n),t!==null){e.blockedOn=t,rm(e.priority,function(){tm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Od(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);zd=r,n.target.dispatchEvent(r),zd=null}else return t=Rs(n),t!==null&&op(t),e.blockedOn=n,!1;t.shift()}return!0}function J0(e,t,n){Sl(e)&&n.delete(t)}function X6(){Dd=!1,sr!==null&&Sl(sr)&&(sr=null),lr!==null&&Sl(lr)&&(lr=null),ar!==null&&Sl(ar)&&(ar=null),as.forEach(J0),cs.forEach(J0)}function fo(e,t){e.blockedOn===t&&(e.blockedOn=null,Dd||(Dd=!0,Vt.unstable_scheduleCallback(Vt.unstable_NormalPriority,X6)))}function us(e){function t(i){return fo(i,e)}if(0<Ys.length){fo(Ys[0],e);for(var n=1;n<Ys.length;n++){var r=Ys[n];r.blockedOn===e&&(r.blockedOn=null)}}for(sr!==null&&fo(sr,e),lr!==null&&fo(lr,e),ar!==null&&fo(ar,e),as.forEach(t),cs.forEach(t),n=0;n<tr.length;n++)r=tr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tr.length&&(n=tr[0],n.blockedOn===null);)im(n),n.blockedOn===null&&tr.shift()}var Ii=Kn.ReactCurrentBatchConfig,Ql=!0;function J6(e,t,n,r){var i=Se,s=Ii.transition;Ii.transition=null;try{Se=1,sp(e,t,n,r)}finally{Se=i,Ii.transition=s}}function e7(e,t,n,r){var i=Se,s=Ii.transition;Ii.transition=null;try{Se=4,sp(e,t,n,r)}finally{Se=i,Ii.transition=s}}function sp(e,t,n,r){if(Ql){var i=Od(e,t,n,r);if(i===null)_c(e,t,r,Xl,n),X0(e,r);else if(Q6(i,e,t,n,r))r.stopPropagation();else if(X0(e,r),t&4&&-1<q6.indexOf(e)){for(;i!==null;){var s=Rs(i);if(s!==null&&em(s),s=Od(e,t,n,r),s===null&&_c(e,t,r,Xl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else _c(e,t,r,null,n)}}var Xl=null;function Od(e,t,n,r){if(Xl=null,e=np(r),e=Rr(e),e!==null)if(t=Qr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Kg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xl=e,null}function om(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(F6()){case rp:return 1;case qg:return 4;case Zl:case H6:return 16;case Qg:return 536870912;default:return 16}default:return 16}}var rr=null,lp=null,$l=null;function sm(){if($l)return $l;var e,t=lp,n=t.length,r,i="value"in rr?rr.value:rr.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[s-r];r++);return $l=i.slice(e,1<r?1-r:void 0)}function Cl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Gs(){return!0}function ef(){return!1}function Kt(e){function t(n,r,i,s,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Gs:ef,this.isPropagationStopped=ef,this}return Ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gs)},persist:function(){},isPersistent:Gs}),t}var Xi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ap=Kt(Xi),Ts=Ve({},Xi,{view:0,detail:0}),t7=Kt(Ts),Cc,Ec,ho,Na=Ve({},Ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ho&&(ho&&e.type==="mousemove"?(Cc=e.screenX-ho.screenX,Ec=e.screenY-ho.screenY):Ec=Cc=0,ho=e),Cc)},movementY:function(e){return"movementY"in e?e.movementY:Ec}}),tf=Kt(Na),n7=Ve({},Na,{dataTransfer:0}),r7=Kt(n7),i7=Ve({},Ts,{relatedTarget:0}),Pc=Kt(i7),o7=Ve({},Xi,{animationName:0,elapsedTime:0,pseudoElement:0}),s7=Kt(o7),l7=Ve({},Xi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),a7=Kt(l7),c7=Ve({},Xi,{data:0}),nf=Kt(c7),u7={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},d7={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},p7={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function f7(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=p7[e])?!!t[e]:!1}function cp(){return f7}var h7=Ve({},Ts,{key:function(e){if(e.key){var t=u7[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Cl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?d7[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cp,charCode:function(e){return e.type==="keypress"?Cl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),g7=Kt(h7),m7=Ve({},Na,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rf=Kt(m7),x7=Ve({},Ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cp}),L7=Kt(x7),y7=Ve({},Xi,{propertyName:0,elapsedTime:0,pseudoElement:0}),v7=Kt(y7),b7=Ve({},Na,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),w7=Kt(b7),k7=[9,13,27,32],up=Fn&&"CompositionEvent"in window,Wo=null;Fn&&"documentMode"in document&&(Wo=document.documentMode);var j7=Fn&&"TextEvent"in window&&!Wo,lm=Fn&&(!up||Wo&&8<Wo&&11>=Wo),of=" ",sf=!1;function am(e,t){switch(e){case"keyup":return k7.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hi=!1;function S7(e,t){switch(e){case"compositionend":return cm(t);case"keypress":return t.which!==32?null:(sf=!0,of);case"textInput":return e=t.data,e===of&&sf?null:e;default:return null}}function $7(e,t){if(hi)return e==="compositionend"||!up&&am(e,t)?(e=sm(),$l=lp=rr=null,hi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lm&&t.locale!=="ko"?null:t.data;default:return null}}var C7={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!C7[e.type]:t==="textarea"}function um(e,t,n,r){Fg(r),t=Jl(t,"onChange"),0<t.length&&(n=new ap("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ko=null,ds=null;function E7(e){bm(e,0)}function Da(e){var t=xi(e);if(Mg(t))return e}function P7(e,t){if(e==="change")return t}var dm=!1;if(Fn){var Ic;if(Fn){var Tc="oninput"in document;if(!Tc){var af=document.createElement("div");af.setAttribute("oninput","return;"),Tc=typeof af.oninput=="function"}Ic=Tc}else Ic=!1;dm=Ic&&(!document.documentMode||9<document.documentMode)}function cf(){Ko&&(Ko.detachEvent("onpropertychange",pm),ds=Ko=null)}function pm(e){if(e.propertyName==="value"&&Da(ds)){var t=[];um(t,ds,e,np(e)),Wg(E7,t)}}function I7(e,t,n){e==="focusin"?(cf(),Ko=t,ds=n,Ko.attachEvent("onpropertychange",pm)):e==="focusout"&&cf()}function T7(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Da(ds)}function R7(e,t){if(e==="click")return Da(t)}function z7(e,t){if(e==="input"||e==="change")return Da(t)}function M7(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ln=typeof Object.is=="function"?Object.is:M7;function ps(e,t){if(Ln(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bd.call(t,i)||!Ln(e[i],t[i]))return!1}return!0}function uf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function df(e,t){var n=uf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=uf(n)}}function fm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hm(){for(var e=window,t=Kl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kl(e.document)}return t}function dp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function A7(e){var t=hm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&fm(n.ownerDocument.documentElement,n)){if(r!==null&&dp(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=df(n,s);var l=df(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _7=Fn&&"documentMode"in document&&11>=document.documentMode,gi=null,Bd=null,Yo=null,Fd=!1;function pf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fd||gi==null||gi!==Kl(r)||(r=gi,"selectionStart"in r&&dp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yo&&ps(Yo,r)||(Yo=r,r=Jl(Bd,"onSelect"),0<r.length&&(t=new ap("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gi)))}function Zs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mi={animationend:Zs("Animation","AnimationEnd"),animationiteration:Zs("Animation","AnimationIteration"),animationstart:Zs("Animation","AnimationStart"),transitionend:Zs("Transition","TransitionEnd")},Rc={},gm={};Fn&&(gm=document.createElement("div").style,"AnimationEvent"in window||(delete mi.animationend.animation,delete mi.animationiteration.animation,delete mi.animationstart.animation),"TransitionEvent"in window||delete mi.transitionend.transition);function Oa(e){if(Rc[e])return Rc[e];if(!mi[e])return e;var t=mi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in gm)return Rc[e]=t[n];return e}var mm=Oa("animationend"),xm=Oa("animationiteration"),Lm=Oa("animationstart"),ym=Oa("transitionend"),vm=new Map,ff="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(e,t){vm.set(e,t),qr(t,[e])}for(var zc=0;zc<ff.length;zc++){var Mc=ff[zc],N7=Mc.toLowerCase(),D7=Mc[0].toUpperCase()+Mc.slice(1);yr(N7,"on"+D7)}yr(mm,"onAnimationEnd");yr(xm,"onAnimationIteration");yr(Lm,"onAnimationStart");yr("dblclick","onDoubleClick");yr("focusin","onFocus");yr("focusout","onBlur");yr(ym,"onTransitionEnd");Ni("onMouseEnter",["mouseout","mouseover"]);Ni("onMouseLeave",["mouseout","mouseover"]);Ni("onPointerEnter",["pointerout","pointerover"]);Ni("onPointerLeave",["pointerout","pointerover"]);qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),O7=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oo));function hf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,N6(r,t,void 0,e),e.currentTarget=null}function bm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],c=a.instance,d=a.currentTarget;if(a=a.listener,c!==s&&i.isPropagationStopped())break e;hf(i,a,d),s=c}else for(l=0;l<r.length;l++){if(a=r[l],c=a.instance,d=a.currentTarget,a=a.listener,c!==s&&i.isPropagationStopped())break e;hf(i,a,d),s=c}}}if(Gl)throw e=_d,Gl=!1,_d=null,e}function Ae(e,t){var n=t[Kd];n===void 0&&(n=t[Kd]=new Set);var r=e+"__bubble";n.has(r)||(wm(t,e,2,!1),n.add(r))}function Ac(e,t,n){var r=0;t&&(r|=4),wm(n,e,r,t)}var qs="_reactListening"+Math.random().toString(36).slice(2);function fs(e){if(!e[qs]){e[qs]=!0,Pg.forEach(function(n){n!=="selectionchange"&&(O7.has(n)||Ac(n,!1,e),Ac(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qs]||(t[qs]=!0,Ac("selectionchange",!1,t))}}function wm(e,t,n,r){switch(om(t)){case 1:var i=J6;break;case 4:i=e7;break;default:i=sp}n=i.bind(null,t,n,e),i=void 0,!Ad||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function _c(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Rr(a),l===null)return;if(c=l.tag,c===5||c===6){r=s=l;continue e}a=a.parentNode}}r=r.return}Wg(function(){var d=s,p=np(n),f=[];e:{var h=vm.get(e);if(h!==void 0){var g=ap,b=e;switch(e){case"keypress":if(Cl(n)===0)break e;case"keydown":case"keyup":g=g7;break;case"focusin":b="focus",g=Pc;break;case"focusout":b="blur",g=Pc;break;case"beforeblur":case"afterblur":g=Pc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=tf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=r7;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=L7;break;case mm:case xm:case Lm:g=s7;break;case ym:g=v7;break;case"scroll":g=t7;break;case"wheel":g=w7;break;case"copy":case"cut":case"paste":g=a7;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=rf}var v=(t&4)!==0,$=!v&&e==="scroll",x=v?h!==null?h+"Capture":null:h;v=[];for(var L=d,y;L!==null;){y=L;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,x!==null&&(S=ls(L,x),S!=null&&v.push(hs(L,S,y)))),$)break;L=L.return}0<v.length&&(h=new g(h,b,null,n,p),f.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==zd&&(b=n.relatedTarget||n.fromElement)&&(Rr(b)||b[Hn]))break e;if((g||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,g?(b=n.relatedTarget||n.toElement,g=d,b=b?Rr(b):null,b!==null&&($=Qr(b),b!==$||b.tag!==5&&b.tag!==6)&&(b=null)):(g=null,b=d),g!==b)){if(v=tf,S="onMouseLeave",x="onMouseEnter",L="mouse",(e==="pointerout"||e==="pointerover")&&(v=rf,S="onPointerLeave",x="onPointerEnter",L="pointer"),$=g==null?h:xi(g),y=b==null?h:xi(b),h=new v(S,L+"leave",g,n,p),h.target=$,h.relatedTarget=y,S=null,Rr(p)===d&&(v=new v(x,L+"enter",b,n,p),v.target=y,v.relatedTarget=$,S=v),$=S,g&&b)t:{for(v=g,x=b,L=0,y=v;y;y=ni(y))L++;for(y=0,S=x;S;S=ni(S))y++;for(;0<L-y;)v=ni(v),L--;for(;0<y-L;)x=ni(x),y--;for(;L--;){if(v===x||x!==null&&v===x.alternate)break t;v=ni(v),x=ni(x)}v=null}else v=null;g!==null&&gf(f,h,g,v,!1),b!==null&&$!==null&&gf(f,$,b,v,!0)}}e:{if(h=d?xi(d):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var I=P7;else if(lf(h))if(dm)I=z7;else{I=T7;var k=I7}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(I=R7);if(I&&(I=I(e,d))){um(f,I,n,p);break e}k&&k(e,h,d),e==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&Ed(h,"number",h.value)}switch(k=d?xi(d):window,e){case"focusin":(lf(k)||k.contentEditable==="true")&&(gi=k,Bd=d,Yo=null);break;case"focusout":Yo=Bd=gi=null;break;case"mousedown":Fd=!0;break;case"contextmenu":case"mouseup":case"dragend":Fd=!1,pf(f,n,p);break;case"selectionchange":if(_7)break;case"keydown":case"keyup":pf(f,n,p)}var j;if(up)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else hi?am(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(lm&&n.locale!=="ko"&&(hi||R!=="onCompositionStart"?R==="onCompositionEnd"&&hi&&(j=sm()):(rr=p,lp="value"in rr?rr.value:rr.textContent,hi=!0)),k=Jl(d,R),0<k.length&&(R=new nf(R,e,null,n,p),f.push({event:R,listeners:k}),j?R.data=j:(j=cm(n),j!==null&&(R.data=j)))),(j=j7?S7(e,n):$7(e,n))&&(d=Jl(d,"onBeforeInput"),0<d.length&&(p=new nf("onBeforeInput","beforeinput",null,n,p),f.push({event:p,listeners:d}),p.data=j))}bm(f,t)})}function hs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ls(e,n),s!=null&&r.unshift(hs(e,s,i)),s=ls(e,t),s!=null&&r.push(hs(e,s,i))),e=e.return}return r}function ni(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function gf(e,t,n,r,i){for(var s=t._reactName,l=[];n!==null&&n!==r;){var a=n,c=a.alternate,d=a.stateNode;if(c!==null&&c===r)break;a.tag===5&&d!==null&&(a=d,i?(c=ls(n,s),c!=null&&l.unshift(hs(n,c,a))):i||(c=ls(n,s),c!=null&&l.push(hs(n,c,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var B7=/\r\n?/g,F7=/\u0000|\uFFFD/g;function mf(e){return(typeof e=="string"?e:""+e).replace(B7,`
`).replace(F7,"")}function Qs(e,t,n){if(t=mf(t),mf(e)!==t&&n)throw Error(K(425))}function ea(){}var Hd=null,Ud=null;function Vd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=typeof setTimeout=="function"?setTimeout:void 0,H7=typeof clearTimeout=="function"?clearTimeout:void 0,xf=typeof Promise=="function"?Promise:void 0,U7=typeof queueMicrotask=="function"?queueMicrotask:typeof xf<"u"?function(e){return xf.resolve(null).then(e).catch(V7)}:Wd;function V7(e){setTimeout(function(){throw e})}function Nc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),us(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);us(t)}function cr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Lf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ji=Math.random().toString(36).slice(2),Sn="__reactFiber$"+Ji,gs="__reactProps$"+Ji,Hn="__reactContainer$"+Ji,Kd="__reactEvents$"+Ji,W7="__reactListeners$"+Ji,K7="__reactHandles$"+Ji;function Rr(e){var t=e[Sn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Hn]||n[Sn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Lf(e);e!==null;){if(n=e[Sn])return n;e=Lf(e)}return t}e=n,n=e.parentNode}return null}function Rs(e){return e=e[Sn]||e[Hn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(K(33))}function Ba(e){return e[gs]||null}var Yd=[],Li=-1;function vr(e){return{current:e}}function Ne(e){0>Li||(e.current=Yd[Li],Yd[Li]=null,Li--)}function Re(e,t){Li++,Yd[Li]=e.current,e.current=t}var Lr={},vt=vr(Lr),Rt=vr(!1),Br=Lr;function Di(e,t){var n=e.type.contextTypes;if(!n)return Lr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function zt(e){return e=e.childContextTypes,e!=null}function ta(){Ne(Rt),Ne(vt)}function yf(e,t,n){if(vt.current!==Lr)throw Error(K(168));Re(vt,t),Re(Rt,n)}function km(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(K(108,I6(e)||"Unknown",i));return Ve({},n,r)}function na(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Lr,Br=vt.current,Re(vt,e),Re(Rt,Rt.current),!0}function vf(e,t,n){var r=e.stateNode;if(!r)throw Error(K(169));n?(e=km(e,t,Br),r.__reactInternalMemoizedMergedChildContext=e,Ne(Rt),Ne(vt),Re(vt,e)):Ne(Rt),Re(Rt,n)}var _n=null,Fa=!1,Dc=!1;function jm(e){_n===null?_n=[e]:_n.push(e)}function Y7(e){Fa=!0,jm(e)}function br(){if(!Dc&&_n!==null){Dc=!0;var e=0,t=Se;try{var n=_n;for(Se=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_n=null,Fa=!1}catch(i){throw _n!==null&&(_n=_n.slice(e+1)),Zg(rp,br),i}finally{Se=t,Dc=!1}}return null}var yi=[],vi=0,ra=null,ia=0,qt=[],Qt=0,Fr=null,Nn=1,Dn="";function Er(e,t){yi[vi++]=ia,yi[vi++]=ra,ra=e,ia=t}function Sm(e,t,n){qt[Qt++]=Nn,qt[Qt++]=Dn,qt[Qt++]=Fr,Fr=e;var r=Nn;e=Dn;var i=32-hn(r)-1;r&=~(1<<i),n+=1;var s=32-hn(t)+i;if(30<s){var l=i-i%5;s=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Nn=1<<32-hn(t)+i|n<<i|r,Dn=s+e}else Nn=1<<s|n<<i|r,Dn=e}function pp(e){e.return!==null&&(Er(e,1),Sm(e,1,0))}function fp(e){for(;e===ra;)ra=yi[--vi],yi[vi]=null,ia=yi[--vi],yi[vi]=null;for(;e===Fr;)Fr=qt[--Qt],qt[Qt]=null,Dn=qt[--Qt],qt[Qt]=null,Nn=qt[--Qt],qt[Qt]=null}var Ut=null,Ft=null,Be=!1,fn=null;function $m(e,t){var n=Jt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function bf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ut=e,Ft=cr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ut=e,Ft=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Fr!==null?{id:Nn,overflow:Dn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Jt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ut=e,Ft=null,!0):!1;default:return!1}}function Gd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Zd(e){if(Be){var t=Ft;if(t){var n=t;if(!bf(e,t)){if(Gd(e))throw Error(K(418));t=cr(n.nextSibling);var r=Ut;t&&bf(e,t)?$m(r,n):(e.flags=e.flags&-4097|2,Be=!1,Ut=e)}}else{if(Gd(e))throw Error(K(418));e.flags=e.flags&-4097|2,Be=!1,Ut=e}}}function wf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ut=e}function Xs(e){if(e!==Ut)return!1;if(!Be)return wf(e),Be=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Vd(e.type,e.memoizedProps)),t&&(t=Ft)){if(Gd(e))throw Cm(),Error(K(418));for(;t;)$m(e,t),t=cr(t.nextSibling)}if(wf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(K(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ft=cr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ft=null}}else Ft=Ut?cr(e.stateNode.nextSibling):null;return!0}function Cm(){for(var e=Ft;e;)e=cr(e.nextSibling)}function Oi(){Ft=Ut=null,Be=!1}function hp(e){fn===null?fn=[e]:fn.push(e)}var G7=Kn.ReactCurrentBatchConfig;function go(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(K(309));var r=n.stateNode}if(!r)throw Error(K(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(l){var a=i.refs;l===null?delete a[s]:a[s]=l},t._stringRef=s,t)}if(typeof e!="string")throw Error(K(284));if(!n._owner)throw Error(K(290,e))}return e}function Js(e,t){throw e=Object.prototype.toString.call(t),Error(K(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function kf(e){var t=e._init;return t(e._payload)}function Em(e){function t(x,L){if(e){var y=x.deletions;y===null?(x.deletions=[L],x.flags|=16):y.push(L)}}function n(x,L){if(!e)return null;for(;L!==null;)t(x,L),L=L.sibling;return null}function r(x,L){for(x=new Map;L!==null;)L.key!==null?x.set(L.key,L):x.set(L.index,L),L=L.sibling;return x}function i(x,L){return x=fr(x,L),x.index=0,x.sibling=null,x}function s(x,L,y){return x.index=y,e?(y=x.alternate,y!==null?(y=y.index,y<L?(x.flags|=2,L):y):(x.flags|=2,L)):(x.flags|=1048576,L)}function l(x){return e&&x.alternate===null&&(x.flags|=2),x}function a(x,L,y,S){return L===null||L.tag!==6?(L=Wc(y,x.mode,S),L.return=x,L):(L=i(L,y),L.return=x,L)}function c(x,L,y,S){var I=y.type;return I===fi?p(x,L,y.props.children,S,y.key):L!==null&&(L.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Jn&&kf(I)===L.type)?(S=i(L,y.props),S.ref=go(x,L,y),S.return=x,S):(S=Ml(y.type,y.key,y.props,null,x.mode,S),S.ref=go(x,L,y),S.return=x,S)}function d(x,L,y,S){return L===null||L.tag!==4||L.stateNode.containerInfo!==y.containerInfo||L.stateNode.implementation!==y.implementation?(L=Kc(y,x.mode,S),L.return=x,L):(L=i(L,y.children||[]),L.return=x,L)}function p(x,L,y,S,I){return L===null||L.tag!==7?(L=Dr(y,x.mode,S,I),L.return=x,L):(L=i(L,y),L.return=x,L)}function f(x,L,y){if(typeof L=="string"&&L!==""||typeof L=="number")return L=Wc(""+L,x.mode,y),L.return=x,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Hs:return y=Ml(L.type,L.key,L.props,null,x.mode,y),y.ref=go(x,null,L),y.return=x,y;case pi:return L=Kc(L,x.mode,y),L.return=x,L;case Jn:var S=L._init;return f(x,S(L._payload),y)}if(No(L)||co(L))return L=Dr(L,x.mode,y,null),L.return=x,L;Js(x,L)}return null}function h(x,L,y,S){var I=L!==null?L.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return I!==null?null:a(x,L,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Hs:return y.key===I?c(x,L,y,S):null;case pi:return y.key===I?d(x,L,y,S):null;case Jn:return I=y._init,h(x,L,I(y._payload),S)}if(No(y)||co(y))return I!==null?null:p(x,L,y,S,null);Js(x,y)}return null}function g(x,L,y,S,I){if(typeof S=="string"&&S!==""||typeof S=="number")return x=x.get(y)||null,a(L,x,""+S,I);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Hs:return x=x.get(S.key===null?y:S.key)||null,c(L,x,S,I);case pi:return x=x.get(S.key===null?y:S.key)||null,d(L,x,S,I);case Jn:var k=S._init;return g(x,L,y,k(S._payload),I)}if(No(S)||co(S))return x=x.get(y)||null,p(L,x,S,I,null);Js(L,S)}return null}function b(x,L,y,S){for(var I=null,k=null,j=L,R=L=0,z=null;j!==null&&R<y.length;R++){j.index>R?(z=j,j=null):z=j.sibling;var T=h(x,j,y[R],S);if(T===null){j===null&&(j=z);break}e&&j&&T.alternate===null&&t(x,j),L=s(T,L,R),k===null?I=T:k.sibling=T,k=T,j=z}if(R===y.length)return n(x,j),Be&&Er(x,R),I;if(j===null){for(;R<y.length;R++)j=f(x,y[R],S),j!==null&&(L=s(j,L,R),k===null?I=j:k.sibling=j,k=j);return Be&&Er(x,R),I}for(j=r(x,j);R<y.length;R++)z=g(j,x,R,y[R],S),z!==null&&(e&&z.alternate!==null&&j.delete(z.key===null?R:z.key),L=s(z,L,R),k===null?I=z:k.sibling=z,k=z);return e&&j.forEach(function(P){return t(x,P)}),Be&&Er(x,R),I}function v(x,L,y,S){var I=co(y);if(typeof I!="function")throw Error(K(150));if(y=I.call(y),y==null)throw Error(K(151));for(var k=I=null,j=L,R=L=0,z=null,T=y.next();j!==null&&!T.done;R++,T=y.next()){j.index>R?(z=j,j=null):z=j.sibling;var P=h(x,j,T.value,S);if(P===null){j===null&&(j=z);break}e&&j&&P.alternate===null&&t(x,j),L=s(P,L,R),k===null?I=P:k.sibling=P,k=P,j=z}if(T.done)return n(x,j),Be&&Er(x,R),I;if(j===null){for(;!T.done;R++,T=y.next())T=f(x,T.value,S),T!==null&&(L=s(T,L,R),k===null?I=T:k.sibling=T,k=T);return Be&&Er(x,R),I}for(j=r(x,j);!T.done;R++,T=y.next())T=g(j,x,R,T.value,S),T!==null&&(e&&T.alternate!==null&&j.delete(T.key===null?R:T.key),L=s(T,L,R),k===null?I=T:k.sibling=T,k=T);return e&&j.forEach(function(E){return t(x,E)}),Be&&Er(x,R),I}function $(x,L,y,S){if(typeof y=="object"&&y!==null&&y.type===fi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Hs:e:{for(var I=y.key,k=L;k!==null;){if(k.key===I){if(I=y.type,I===fi){if(k.tag===7){n(x,k.sibling),L=i(k,y.props.children),L.return=x,x=L;break e}}else if(k.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Jn&&kf(I)===k.type){n(x,k.sibling),L=i(k,y.props),L.ref=go(x,k,y),L.return=x,x=L;break e}n(x,k);break}else t(x,k);k=k.sibling}y.type===fi?(L=Dr(y.props.children,x.mode,S,y.key),L.return=x,x=L):(S=Ml(y.type,y.key,y.props,null,x.mode,S),S.ref=go(x,L,y),S.return=x,x=S)}return l(x);case pi:e:{for(k=y.key;L!==null;){if(L.key===k)if(L.tag===4&&L.stateNode.containerInfo===y.containerInfo&&L.stateNode.implementation===y.implementation){n(x,L.sibling),L=i(L,y.children||[]),L.return=x,x=L;break e}else{n(x,L);break}else t(x,L);L=L.sibling}L=Kc(y,x.mode,S),L.return=x,x=L}return l(x);case Jn:return k=y._init,$(x,L,k(y._payload),S)}if(No(y))return b(x,L,y,S);if(co(y))return v(x,L,y,S);Js(x,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,L!==null&&L.tag===6?(n(x,L.sibling),L=i(L,y),L.return=x,x=L):(n(x,L),L=Wc(y,x.mode,S),L.return=x,x=L),l(x)):n(x,L)}return $}var Bi=Em(!0),Pm=Em(!1),oa=vr(null),sa=null,bi=null,gp=null;function mp(){gp=bi=sa=null}function xp(e){var t=oa.current;Ne(oa),e._currentValue=t}function qd(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ti(e,t){sa=e,gp=bi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Tt=!0),e.firstContext=null)}function nn(e){var t=e._currentValue;if(gp!==e)if(e={context:e,memoizedValue:t,next:null},bi===null){if(sa===null)throw Error(K(308));bi=e,sa.dependencies={lanes:0,firstContext:e}}else bi=bi.next=e;return t}var zr=null;function Lp(e){zr===null?zr=[e]:zr.push(e)}function Im(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Lp(t)):(n.next=i.next,i.next=n),t.interleaved=n,Un(e,r)}function Un(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var er=!1;function yp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ur(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ye&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Un(e,n)}return i=r.interleaved,i===null?(t.next=t,Lp(r)):(t.next=i.next,i.next=t),r.interleaved=t,Un(e,n)}function El(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ip(e,n)}}function jf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function la(e,t,n,r){var i=e.updateQueue;er=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var c=a,d=c.next;c.next=null,l===null?s=d:l.next=d,l=c;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==l&&(a===null?p.firstBaseUpdate=d:a.next=d,p.lastBaseUpdate=c))}if(s!==null){var f=i.baseState;l=0,p=d=c=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){p!==null&&(p=p.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var b=e,v=a;switch(h=t,g=n,v.tag){case 1:if(b=v.payload,typeof b=="function"){f=b.call(g,f,h);break e}f=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=v.payload,h=typeof b=="function"?b.call(g,f,h):b,h==null)break e;f=Ve({},f,h);break e;case 2:er=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(d=p=g,c=f):p=p.next=g,l|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(p===null&&(c=f),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Ur|=l,e.lanes=l,e.memoizedState=f}}function Sf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(K(191,i));i.call(r)}}}var zs={},En=vr(zs),ms=vr(zs),xs=vr(zs);function Mr(e){if(e===zs)throw Error(K(174));return e}function vp(e,t){switch(Re(xs,t),Re(ms,e),Re(En,zs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Id(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Id(t,e)}Ne(En),Re(En,t)}function Fi(){Ne(En),Ne(ms),Ne(xs)}function Rm(e){Mr(xs.current);var t=Mr(En.current),n=Id(t,e.type);t!==n&&(Re(ms,e),Re(En,n))}function bp(e){ms.current===e&&(Ne(En),Ne(ms))}var He=vr(0);function aa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Oc=[];function wp(){for(var e=0;e<Oc.length;e++)Oc[e]._workInProgressVersionPrimary=null;Oc.length=0}var Pl=Kn.ReactCurrentDispatcher,Bc=Kn.ReactCurrentBatchConfig,Hr=0,Ue=null,et=null,st=null,ca=!1,Go=!1,Ls=0,Z7=0;function xt(){throw Error(K(321))}function kp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ln(e[n],t[n]))return!1;return!0}function jp(e,t,n,r,i,s){if(Hr=s,Ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pl.current=e===null||e.memoizedState===null?J7:e8,e=n(r,i),Go){s=0;do{if(Go=!1,Ls=0,25<=s)throw Error(K(301));s+=1,st=et=null,t.updateQueue=null,Pl.current=t8,e=n(r,i)}while(Go)}if(Pl.current=ua,t=et!==null&&et.next!==null,Hr=0,st=et=Ue=null,ca=!1,t)throw Error(K(300));return e}function Sp(){var e=Ls!==0;return Ls=0,e}function kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?Ue.memoizedState=st=e:st=st.next=e,st}function rn(){if(et===null){var e=Ue.alternate;e=e!==null?e.memoizedState:null}else e=et.next;var t=st===null?Ue.memoizedState:st.next;if(t!==null)st=t,et=e;else{if(e===null)throw Error(K(310));et=e,e={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},st===null?Ue.memoizedState=st=e:st=st.next=e}return st}function ys(e,t){return typeof t=="function"?t(e):t}function Fc(e){var t=rn(),n=t.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=e;var r=et,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=l=null,c=null,d=s;do{var p=d.lane;if((Hr&p)===p)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var f={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(a=c=f,l=r):c=c.next=f,Ue.lanes|=p,Ur|=p}d=d.next}while(d!==null&&d!==s);c===null?l=r:c.next=a,Ln(r,t.memoizedState)||(Tt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Ue.lanes|=s,Ur|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hc(e){var t=rn(),n=t.queue;if(n===null)throw Error(K(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do s=e(s,l.action),l=l.next;while(l!==i);Ln(s,t.memoizedState)||(Tt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function zm(){}function Mm(e,t){var n=Ue,r=rn(),i=t(),s=!Ln(r.memoizedState,i);if(s&&(r.memoizedState=i,Tt=!0),r=r.queue,$p(Nm.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||st!==null&&st.memoizedState.tag&1){if(n.flags|=2048,vs(9,_m.bind(null,n,r,i,t),void 0,null),at===null)throw Error(K(349));Hr&30||Am(n,t,i)}return i}function Am(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ue.updateQueue,t===null?(t={lastEffect:null,stores:null},Ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _m(e,t,n,r){t.value=n,t.getSnapshot=r,Dm(t)&&Om(e)}function Nm(e,t,n){return n(function(){Dm(t)&&Om(e)})}function Dm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ln(e,n)}catch{return!0}}function Om(e){var t=Un(e,1);t!==null&&gn(t,e,1,-1)}function $f(e){var t=kn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ys,lastRenderedState:e},t.queue=e,e=e.dispatch=X7.bind(null,Ue,e),[t.memoizedState,e]}function vs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ue.updateQueue,t===null?(t={lastEffect:null,stores:null},Ue.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Bm(){return rn().memoizedState}function Il(e,t,n,r){var i=kn();Ue.flags|=e,i.memoizedState=vs(1|t,n,void 0,r===void 0?null:r)}function Ha(e,t,n,r){var i=rn();r=r===void 0?null:r;var s=void 0;if(et!==null){var l=et.memoizedState;if(s=l.destroy,r!==null&&kp(r,l.deps)){i.memoizedState=vs(t,n,s,r);return}}Ue.flags|=e,i.memoizedState=vs(1|t,n,s,r)}function Cf(e,t){return Il(8390656,8,e,t)}function $p(e,t){return Ha(2048,8,e,t)}function Fm(e,t){return Ha(4,2,e,t)}function Hm(e,t){return Ha(4,4,e,t)}function Um(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vm(e,t,n){return n=n!=null?n.concat([e]):null,Ha(4,4,Um.bind(null,t,e),n)}function Cp(){}function Wm(e,t){var n=rn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&kp(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Km(e,t){var n=rn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&kp(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ym(e,t,n){return Hr&21?(Ln(n,t)||(n=Xg(),Ue.lanes|=n,Ur|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Tt=!0),e.memoizedState=n)}function q7(e,t){var n=Se;Se=n!==0&&4>n?n:4,e(!0);var r=Bc.transition;Bc.transition={};try{e(!1),t()}finally{Se=n,Bc.transition=r}}function Gm(){return rn().memoizedState}function Q7(e,t,n){var r=pr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zm(e))qm(t,n);else if(n=Im(e,t,n,r),n!==null){var i=jt();gn(n,e,r,i),Qm(n,t,r)}}function X7(e,t,n){var r=pr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zm(e))qm(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var l=t.lastRenderedState,a=s(l,n);if(i.hasEagerState=!0,i.eagerState=a,Ln(a,l)){var c=t.interleaved;c===null?(i.next=i,Lp(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Im(e,t,i,r),n!==null&&(i=jt(),gn(n,e,r,i),Qm(n,t,r))}}function Zm(e){var t=e.alternate;return e===Ue||t!==null&&t===Ue}function qm(e,t){Go=ca=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ip(e,n)}}var ua={readContext:nn,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},J7={readContext:nn,useCallback:function(e,t){return kn().memoizedState=[e,t===void 0?null:t],e},useContext:nn,useEffect:Cf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Il(4194308,4,Um.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Il(4194308,4,e,t)},useInsertionEffect:function(e,t){return Il(4,2,e,t)},useMemo:function(e,t){var n=kn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=kn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Q7.bind(null,Ue,e),[r.memoizedState,e]},useRef:function(e){var t=kn();return e={current:e},t.memoizedState=e},useState:$f,useDebugValue:Cp,useDeferredValue:function(e){return kn().memoizedState=e},useTransition:function(){var e=$f(!1),t=e[0];return e=q7.bind(null,e[1]),kn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ue,i=kn();if(Be){if(n===void 0)throw Error(K(407));n=n()}else{if(n=t(),at===null)throw Error(K(349));Hr&30||Am(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Cf(Nm.bind(null,r,s,e),[e]),r.flags|=2048,vs(9,_m.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=kn(),t=at.identifierPrefix;if(Be){var n=Dn,r=Nn;n=(r&~(1<<32-hn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ls++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Z7++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},e8={readContext:nn,useCallback:Wm,useContext:nn,useEffect:$p,useImperativeHandle:Vm,useInsertionEffect:Fm,useLayoutEffect:Hm,useMemo:Km,useReducer:Fc,useRef:Bm,useState:function(){return Fc(ys)},useDebugValue:Cp,useDeferredValue:function(e){var t=rn();return Ym(t,et.memoizedState,e)},useTransition:function(){var e=Fc(ys)[0],t=rn().memoizedState;return[e,t]},useMutableSource:zm,useSyncExternalStore:Mm,useId:Gm,unstable_isNewReconciler:!1},t8={readContext:nn,useCallback:Wm,useContext:nn,useEffect:$p,useImperativeHandle:Vm,useInsertionEffect:Fm,useLayoutEffect:Hm,useMemo:Km,useReducer:Hc,useRef:Bm,useState:function(){return Hc(ys)},useDebugValue:Cp,useDeferredValue:function(e){var t=rn();return et===null?t.memoizedState=e:Ym(t,et.memoizedState,e)},useTransition:function(){var e=Hc(ys)[0],t=rn().memoizedState;return[e,t]},useMutableSource:zm,useSyncExternalStore:Mm,useId:Gm,unstable_isNewReconciler:!1};function un(e,t){if(e&&e.defaultProps){t=Ve({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Qd(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ua={isMounted:function(e){return(e=e._reactInternals)?Qr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=jt(),i=pr(e),s=Bn(r,i);s.payload=t,n!=null&&(s.callback=n),t=ur(e,s,i),t!==null&&(gn(t,e,i,r),El(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=jt(),i=pr(e),s=Bn(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=ur(e,s,i),t!==null&&(gn(t,e,i,r),El(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jt(),r=pr(e),i=Bn(n,r);i.tag=2,t!=null&&(i.callback=t),t=ur(e,i,r),t!==null&&(gn(t,e,r,n),El(t,e,r))}};function Ef(e,t,n,r,i,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,l):t.prototype&&t.prototype.isPureReactComponent?!ps(n,r)||!ps(i,s):!0}function Xm(e,t,n){var r=!1,i=Lr,s=t.contextType;return typeof s=="object"&&s!==null?s=nn(s):(i=zt(t)?Br:vt.current,r=t.contextTypes,s=(r=r!=null)?Di(e,i):Lr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ua,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Pf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ua.enqueueReplaceState(t,t.state,null)}function Xd(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},yp(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=nn(s):(s=zt(t)?Br:vt.current,i.context=Di(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Qd(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ua.enqueueReplaceState(i,i.state,null),la(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Hi(e,t){try{var n="",r=t;do n+=P6(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Uc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Jd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var n8=typeof WeakMap=="function"?WeakMap:Map;function Jm(e,t,n){n=Bn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){pa||(pa=!0,c1=r),Jd(e,t)},n}function ex(e,t,n){n=Bn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Jd(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Jd(e,t),typeof r!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function If(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new n8;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=m8.bind(null,e,t,n),t.then(e,e))}function Tf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Rf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bn(-1,1),t.tag=2,ur(n,t,1))),n.lanes|=1),e)}var r8=Kn.ReactCurrentOwner,Tt=!1;function kt(e,t,n,r){t.child=e===null?Pm(t,null,n,r):Bi(t,e.child,n,r)}function zf(e,t,n,r,i){n=n.render;var s=t.ref;return Ti(t,i),r=jp(e,t,n,r,s,i),n=Sp(),e!==null&&!Tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Vn(e,t,i)):(Be&&n&&pp(t),t.flags|=1,kt(e,t,r,i),t.child)}function Mf(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Ap(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,tx(e,t,s,r,i)):(e=Ml(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:ps,n(l,r)&&e.ref===t.ref)return Vn(e,t,i)}return t.flags|=1,e=fr(s,r),e.ref=t.ref,e.return=t,t.child=e}function tx(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(ps(s,r)&&e.ref===t.ref)if(Tt=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Tt=!0);else return t.lanes=e.lanes,Vn(e,t,i)}return e1(e,t,n,r,i)}function nx(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Re(ki,Bt),Bt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Re(ki,Bt),Bt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Re(ki,Bt),Bt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Re(ki,Bt),Bt|=r;return kt(e,t,i,n),t.child}function rx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function e1(e,t,n,r,i){var s=zt(n)?Br:vt.current;return s=Di(t,s),Ti(t,i),n=jp(e,t,n,r,s,i),r=Sp(),e!==null&&!Tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Vn(e,t,i)):(Be&&r&&pp(t),t.flags|=1,kt(e,t,n,i),t.child)}function Af(e,t,n,r,i){if(zt(n)){var s=!0;na(t)}else s=!1;if(Ti(t,i),t.stateNode===null)Tl(e,t),Xm(t,n,r),Xd(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var c=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=nn(d):(d=zt(n)?Br:vt.current,d=Di(t,d));var p=n.getDerivedStateFromProps,f=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||c!==d)&&Pf(t,l,r,d),er=!1;var h=t.memoizedState;l.state=h,la(t,r,l,i),c=t.memoizedState,a!==r||h!==c||Rt.current||er?(typeof p=="function"&&(Qd(t,n,p,r),c=t.memoizedState),(a=er||Ef(t,n,a,r,h,c,d))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),l.props=r,l.state=c,l.context=d,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Tm(e,t),a=t.memoizedProps,d=t.type===t.elementType?a:un(t.type,a),l.props=d,f=t.pendingProps,h=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=nn(c):(c=zt(n)?Br:vt.current,c=Di(t,c));var g=n.getDerivedStateFromProps;(p=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==f||h!==c)&&Pf(t,l,r,c),er=!1,h=t.memoizedState,l.state=h,la(t,r,l,i);var b=t.memoizedState;a!==f||h!==b||Rt.current||er?(typeof g=="function"&&(Qd(t,n,g,r),b=t.memoizedState),(d=er||Ef(t,n,d,r,h,b,c)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,b,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,b,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),l.props=r,l.state=b,l.context=c,r=d):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return t1(e,t,n,r,s,i)}function t1(e,t,n,r,i,s){rx(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&vf(t,n,!1),Vn(e,t,s);r=t.stateNode,r8.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Bi(t,e.child,null,s),t.child=Bi(t,null,a,s)):kt(e,t,a,s),t.memoizedState=r.state,i&&vf(t,n,!0),t.child}function ix(e){var t=e.stateNode;t.pendingContext?yf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&yf(e,t.context,!1),vp(e,t.containerInfo)}function _f(e,t,n,r,i){return Oi(),hp(i),t.flags|=256,kt(e,t,n,r),t.child}var n1={dehydrated:null,treeContext:null,retryLane:0};function r1(e){return{baseLanes:e,cachePool:null,transitions:null}}function ox(e,t,n){var r=t.pendingProps,i=He.current,s=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Re(He,i&1),e===null)return Zd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,s?(r=t.mode,s=t.child,l={mode:"hidden",children:l},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=Ka(l,r,0,null),e=Dr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=r1(n),t.memoizedState=n1,e):Ep(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return i8(e,t,l,r,a,i,n);if(s){s=r.fallback,l=t.mode,i=e.child,a=i.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=fr(i,c),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=fr(a,s):(s=Dr(s,l,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,l=e.child.memoizedState,l=l===null?r1(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=n1,r}return s=e.child,e=s.sibling,r=fr(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ep(e,t){return t=Ka({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function el(e,t,n,r){return r!==null&&hp(r),Bi(t,e.child,null,n),e=Ep(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function i8(e,t,n,r,i,s,l){if(n)return t.flags&256?(t.flags&=-257,r=Uc(Error(K(422))),el(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Ka({mode:"visible",children:r.children},i,0,null),s=Dr(s,i,l,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Bi(t,e.child,null,l),t.child.memoizedState=r1(l),t.memoizedState=n1,s);if(!(t.mode&1))return el(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(K(419)),r=Uc(s,r,void 0),el(e,t,l,r)}if(a=(l&e.childLanes)!==0,Tt||a){if(r=at,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Un(e,i),gn(r,e,i,-1))}return Mp(),r=Uc(Error(K(421))),el(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=x8.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ft=cr(i.nextSibling),Ut=t,Be=!0,fn=null,e!==null&&(qt[Qt++]=Nn,qt[Qt++]=Dn,qt[Qt++]=Fr,Nn=e.id,Dn=e.overflow,Fr=t),t=Ep(t,r.children),t.flags|=4096,t)}function Nf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),qd(e.return,t,n)}function Vc(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function sx(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(kt(e,t,r.children,n),r=He.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nf(e,n,t);else if(e.tag===19)Nf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Re(He,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&aa(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Vc(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&aa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Vc(t,!0,n,null,s);break;case"together":Vc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Tl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ur|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(K(153));if(t.child!==null){for(e=t.child,n=fr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function o8(e,t,n){switch(t.tag){case 3:ix(t),Oi();break;case 5:Rm(t);break;case 1:zt(t.type)&&na(t);break;case 4:vp(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Re(oa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Re(He,He.current&1),t.flags|=128,null):n&t.child.childLanes?ox(e,t,n):(Re(He,He.current&1),e=Vn(e,t,n),e!==null?e.sibling:null);Re(He,He.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return sx(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Re(He,He.current),r)break;return null;case 22:case 23:return t.lanes=0,nx(e,t,n)}return Vn(e,t,n)}var lx,i1,ax,cx;lx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};i1=function(){};ax=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Mr(En.current);var s=null;switch(n){case"input":i=$d(e,i),r=$d(e,r),s=[];break;case"select":i=Ve({},i,{value:void 0}),r=Ve({},r,{value:void 0}),s=[];break;case"textarea":i=Pd(e,i),r=Pd(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ea)}Td(n,r);var l;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var a=i[d];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(os.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var c=r[d];if(a=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&c!==a&&(c!=null||a!=null))if(d==="style")if(a){for(l in a)!a.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&a[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(s||(s=[]),s.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(os.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&Ae("scroll",e),s||a===c||(s=[])):(s=s||[]).push(d,c))}n&&(s=s||[]).push("style",n);var d=s;(t.updateQueue=d)&&(t.flags|=4)}};cx=function(e,t,n,r){n!==r&&(t.flags|=4)};function mo(e,t){if(!Be)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Lt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function s8(e,t,n){var r=t.pendingProps;switch(fp(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(t),null;case 1:return zt(t.type)&&ta(),Lt(t),null;case 3:return r=t.stateNode,Fi(),Ne(Rt),Ne(vt),wp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Xs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,fn!==null&&(p1(fn),fn=null))),i1(e,t),Lt(t),null;case 5:bp(t);var i=Mr(xs.current);if(n=t.type,e!==null&&t.stateNode!=null)ax(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(K(166));return Lt(t),null}if(e=Mr(En.current),Xs(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Sn]=t,r[gs]=s,e=(t.mode&1)!==0,n){case"dialog":Ae("cancel",r),Ae("close",r);break;case"iframe":case"object":case"embed":Ae("load",r);break;case"video":case"audio":for(i=0;i<Oo.length;i++)Ae(Oo[i],r);break;case"source":Ae("error",r);break;case"img":case"image":case"link":Ae("error",r),Ae("load",r);break;case"details":Ae("toggle",r);break;case"input":W0(r,s),Ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ae("invalid",r);break;case"textarea":Y0(r,s),Ae("invalid",r)}Td(n,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Qs(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Qs(r.textContent,a,e),i=["children",""+a]):os.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Ae("scroll",r)}switch(n){case"input":Us(r),K0(r,s,!0);break;case"textarea":Us(r),G0(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ea)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ng(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Sn]=t,e[gs]=r,lx(e,t,!1,!1),t.stateNode=e;e:{switch(l=Rd(n,r),n){case"dialog":Ae("cancel",e),Ae("close",e),i=r;break;case"iframe":case"object":case"embed":Ae("load",e),i=r;break;case"video":case"audio":for(i=0;i<Oo.length;i++)Ae(Oo[i],e);i=r;break;case"source":Ae("error",e),i=r;break;case"img":case"image":case"link":Ae("error",e),Ae("load",e),i=r;break;case"details":Ae("toggle",e),i=r;break;case"input":W0(e,r),i=$d(e,r),Ae("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ve({},r,{value:void 0}),Ae("invalid",e);break;case"textarea":Y0(e,r),i=Pd(e,r),Ae("invalid",e);break;default:i=r}Td(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var c=a[s];s==="style"?Bg(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Dg(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ss(e,c):typeof c=="number"&&ss(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(os.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Ae("scroll",e):c!=null&&X1(e,s,c,l))}switch(n){case"input":Us(e),K0(e,r,!1);break;case"textarea":Us(e),G0(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xr(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Ci(e,!!r.multiple,s,!1):r.defaultValue!=null&&Ci(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ea)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Lt(t),null;case 6:if(e&&t.stateNode!=null)cx(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(K(166));if(n=Mr(xs.current),Mr(En.current),Xs(t)){if(r=t.stateNode,n=t.memoizedProps,r[Sn]=t,(s=r.nodeValue!==n)&&(e=Ut,e!==null))switch(e.tag){case 3:Qs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qs(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Sn]=t,t.stateNode=r}return Lt(t),null;case 13:if(Ne(He),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Be&&Ft!==null&&t.mode&1&&!(t.flags&128))Cm(),Oi(),t.flags|=98560,s=!1;else if(s=Xs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(K(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(K(317));s[Sn]=t}else Oi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Lt(t),s=!1}else fn!==null&&(p1(fn),fn=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||He.current&1?rt===0&&(rt=3):Mp())),t.updateQueue!==null&&(t.flags|=4),Lt(t),null);case 4:return Fi(),i1(e,t),e===null&&fs(t.stateNode.containerInfo),Lt(t),null;case 10:return xp(t.type._context),Lt(t),null;case 17:return zt(t.type)&&ta(),Lt(t),null;case 19:if(Ne(He),s=t.memoizedState,s===null)return Lt(t),null;if(r=(t.flags&128)!==0,l=s.rendering,l===null)if(r)mo(s,!1);else{if(rt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=aa(e),l!==null){for(t.flags|=128,mo(s,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Re(He,He.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ge()>Ui&&(t.flags|=128,r=!0,mo(s,!1),t.lanes=4194304)}else{if(!r)if(e=aa(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!Be)return Lt(t),null}else 2*Ge()-s.renderingStartTime>Ui&&n!==1073741824&&(t.flags|=128,r=!0,mo(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(n=s.last,n!==null?n.sibling=l:t.child=l,s.last=l)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ge(),t.sibling=null,n=He.current,Re(He,r?n&1|2:n&1),t):(Lt(t),null);case 22:case 23:return zp(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Bt&1073741824&&(Lt(t),t.subtreeFlags&6&&(t.flags|=8192)):Lt(t),null;case 24:return null;case 25:return null}throw Error(K(156,t.tag))}function l8(e,t){switch(fp(t),t.tag){case 1:return zt(t.type)&&ta(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fi(),Ne(Rt),Ne(vt),wp(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return bp(t),null;case 13:if(Ne(He),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(K(340));Oi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ne(He),null;case 4:return Fi(),null;case 10:return xp(t.type._context),null;case 22:case 23:return zp(),null;case 24:return null;default:return null}}var tl=!1,yt=!1,a8=typeof WeakSet=="function"?WeakSet:Set,ee=null;function wi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ke(e,t,r)}else n.current=null}function o1(e,t,n){try{n()}catch(r){Ke(e,t,r)}}var Df=!1;function c8(e,t){if(Hd=Ql,e=hm(),dp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var l=0,a=-1,c=-1,d=0,p=0,f=e,h=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=l+i),f!==s||r!==0&&f.nodeType!==3||(c=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===e)break t;if(h===n&&++d===i&&(a=l),h===s&&++p===r&&(c=l),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ud={focusedElem:e,selectionRange:n},Ql=!1,ee=t;ee!==null;)if(t=ee,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ee=e;else for(;ee!==null;){t=ee;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var v=b.memoizedProps,$=b.memoizedState,x=t.stateNode,L=x.getSnapshotBeforeUpdate(t.elementType===t.type?v:un(t.type,v),$);x.__reactInternalSnapshotBeforeUpdate=L}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(K(163))}}catch(S){Ke(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,ee=e;break}ee=t.return}return b=Df,Df=!1,b}function Zo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&o1(t,n,s)}i=i.next}while(i!==r)}}function Va(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function s1(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ux(e){var t=e.alternate;t!==null&&(e.alternate=null,ux(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Sn],delete t[gs],delete t[Kd],delete t[W7],delete t[K7])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function dx(e){return e.tag===5||e.tag===3||e.tag===4}function Of(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function l1(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ea));else if(r!==4&&(e=e.child,e!==null))for(l1(e,t,n),e=e.sibling;e!==null;)l1(e,t,n),e=e.sibling}function a1(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(a1(e,t,n),e=e.sibling;e!==null;)a1(e,t,n),e=e.sibling}var ct=null,dn=!1;function Zn(e,t,n){for(n=n.child;n!==null;)px(e,t,n),n=n.sibling}function px(e,t,n){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount(_a,n)}catch{}switch(n.tag){case 5:yt||wi(n,t);case 6:var r=ct,i=dn;ct=null,Zn(e,t,n),ct=r,dn=i,ct!==null&&(dn?(e=ct,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ct.removeChild(n.stateNode));break;case 18:ct!==null&&(dn?(e=ct,n=n.stateNode,e.nodeType===8?Nc(e.parentNode,n):e.nodeType===1&&Nc(e,n),us(e)):Nc(ct,n.stateNode));break;case 4:r=ct,i=dn,ct=n.stateNode.containerInfo,dn=!0,Zn(e,t,n),ct=r,dn=i;break;case 0:case 11:case 14:case 15:if(!yt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&o1(n,t,l),i=i.next}while(i!==r)}Zn(e,t,n);break;case 1:if(!yt&&(wi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ke(n,t,a)}Zn(e,t,n);break;case 21:Zn(e,t,n);break;case 22:n.mode&1?(yt=(r=yt)||n.memoizedState!==null,Zn(e,t,n),yt=r):Zn(e,t,n);break;default:Zn(e,t,n)}}function Bf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new a8),t.forEach(function(r){var i=L8.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function cn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:ct=a.stateNode,dn=!1;break e;case 3:ct=a.stateNode.containerInfo,dn=!0;break e;case 4:ct=a.stateNode.containerInfo,dn=!0;break e}a=a.return}if(ct===null)throw Error(K(160));px(s,l,i),ct=null,dn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){Ke(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fx(t,e),t=t.sibling}function fx(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(cn(t,e),yn(e),r&4){try{Zo(3,e,e.return),Va(3,e)}catch(v){Ke(e,e.return,v)}try{Zo(5,e,e.return)}catch(v){Ke(e,e.return,v)}}break;case 1:cn(t,e),yn(e),r&512&&n!==null&&wi(n,n.return);break;case 5:if(cn(t,e),yn(e),r&512&&n!==null&&wi(n,n.return),e.flags&32){var i=e.stateNode;try{ss(i,"")}catch(v){Ke(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,l=n!==null?n.memoizedProps:s,a=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Ag(i,s),Rd(a,l);var d=Rd(a,s);for(l=0;l<c.length;l+=2){var p=c[l],f=c[l+1];p==="style"?Bg(i,f):p==="dangerouslySetInnerHTML"?Dg(i,f):p==="children"?ss(i,f):X1(i,p,f,d)}switch(a){case"input":Cd(i,s);break;case"textarea":_g(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Ci(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ci(i,!!s.multiple,s.defaultValue,!0):Ci(i,!!s.multiple,s.multiple?[]:"",!1))}i[gs]=s}catch(v){Ke(e,e.return,v)}}break;case 6:if(cn(t,e),yn(e),r&4){if(e.stateNode===null)throw Error(K(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(v){Ke(e,e.return,v)}}break;case 3:if(cn(t,e),yn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{us(t.containerInfo)}catch(v){Ke(e,e.return,v)}break;case 4:cn(t,e),yn(e);break;case 13:cn(t,e),yn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Tp=Ge())),r&4&&Bf(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(yt=(d=yt)||p,cn(t,e),yt=d):cn(t,e),yn(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&e.mode&1)for(ee=e,p=e.child;p!==null;){for(f=ee=p;ee!==null;){switch(h=ee,g=h.child,h.tag){case 0:case 11:case 14:case 15:Zo(4,h,h.return);break;case 1:wi(h,h.return);var b=h.stateNode;if(typeof b.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(v){Ke(r,n,v)}}break;case 5:wi(h,h.return);break;case 22:if(h.memoizedState!==null){Hf(f);continue}}g!==null?(g.return=h,ee=g):Hf(f)}p=p.sibling}e:for(p=null,f=e;;){if(f.tag===5){if(p===null){p=f;try{i=f.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,c=f.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=Og("display",l))}catch(v){Ke(e,e.return,v)}}}else if(f.tag===6){if(p===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(v){Ke(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;p===f&&(p=null),f=f.return}p===f&&(p=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:cn(t,e),yn(e),r&4&&Bf(e);break;case 21:break;default:cn(t,e),yn(e)}}function yn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(dx(n)){var r=n;break e}n=n.return}throw Error(K(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ss(i,""),r.flags&=-33);var s=Of(e);a1(e,s,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Of(e);l1(e,a,l);break;default:throw Error(K(161))}}catch(c){Ke(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function u8(e,t,n){ee=e,hx(e)}function hx(e,t,n){for(var r=(e.mode&1)!==0;ee!==null;){var i=ee,s=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||tl;if(!l){var a=i.alternate,c=a!==null&&a.memoizedState!==null||yt;a=tl;var d=yt;if(tl=l,(yt=c)&&!d)for(ee=i;ee!==null;)l=ee,c=l.child,l.tag===22&&l.memoizedState!==null?Uf(i):c!==null?(c.return=l,ee=c):Uf(i);for(;s!==null;)ee=s,hx(s),s=s.sibling;ee=i,tl=a,yt=d}Ff(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,ee=s):Ff(e)}}function Ff(e){for(;ee!==null;){var t=ee;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:yt||Va(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!yt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:un(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Sf(t,s,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Sf(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var f=p.dehydrated;f!==null&&us(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(K(163))}yt||t.flags&512&&s1(t)}catch(h){Ke(t,t.return,h)}}if(t===e){ee=null;break}if(n=t.sibling,n!==null){n.return=t.return,ee=n;break}ee=t.return}}function Hf(e){for(;ee!==null;){var t=ee;if(t===e){ee=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ee=n;break}ee=t.return}}function Uf(e){for(;ee!==null;){var t=ee;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Va(4,t)}catch(c){Ke(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Ke(t,i,c)}}var s=t.return;try{s1(t)}catch(c){Ke(t,s,c)}break;case 5:var l=t.return;try{s1(t)}catch(c){Ke(t,l,c)}}}catch(c){Ke(t,t.return,c)}if(t===e){ee=null;break}var a=t.sibling;if(a!==null){a.return=t.return,ee=a;break}ee=t.return}}var d8=Math.ceil,da=Kn.ReactCurrentDispatcher,Pp=Kn.ReactCurrentOwner,tn=Kn.ReactCurrentBatchConfig,ye=0,at=null,Je=null,dt=0,Bt=0,ki=vr(0),rt=0,bs=null,Ur=0,Wa=0,Ip=0,qo=null,It=null,Tp=0,Ui=1/0,Mn=null,pa=!1,c1=null,dr=null,nl=!1,ir=null,fa=0,Qo=0,u1=null,Rl=-1,zl=0;function jt(){return ye&6?Ge():Rl!==-1?Rl:Rl=Ge()}function pr(e){return e.mode&1?ye&2&&dt!==0?dt&-dt:G7.transition!==null?(zl===0&&(zl=Xg()),zl):(e=Se,e!==0||(e=window.event,e=e===void 0?16:om(e.type)),e):1}function gn(e,t,n,r){if(50<Qo)throw Qo=0,u1=null,Error(K(185));Is(e,n,r),(!(ye&2)||e!==at)&&(e===at&&(!(ye&2)&&(Wa|=n),rt===4&&nr(e,dt)),Mt(e,r),n===1&&ye===0&&!(t.mode&1)&&(Ui=Ge()+500,Fa&&br()))}function Mt(e,t){var n=e.callbackNode;G6(e,t);var r=ql(e,e===at?dt:0);if(r===0)n!==null&&Q0(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Q0(n),t===1)e.tag===0?Y7(Vf.bind(null,e)):jm(Vf.bind(null,e)),U7(function(){!(ye&6)&&br()}),n=null;else{switch(Jg(r)){case 1:n=rp;break;case 4:n=qg;break;case 16:n=Zl;break;case 536870912:n=Qg;break;default:n=Zl}n=wx(n,gx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function gx(e,t){if(Rl=-1,zl=0,ye&6)throw Error(K(327));var n=e.callbackNode;if(Ri()&&e.callbackNode!==n)return null;var r=ql(e,e===at?dt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ha(e,r);else{t=r;var i=ye;ye|=2;var s=xx();(at!==e||dt!==t)&&(Mn=null,Ui=Ge()+500,Nr(e,t));do try{h8();break}catch(a){mx(e,a)}while(!0);mp(),da.current=s,ye=i,Je!==null?t=0:(at=null,dt=0,t=rt)}if(t!==0){if(t===2&&(i=Nd(e),i!==0&&(r=i,t=d1(e,i))),t===1)throw n=bs,Nr(e,0),nr(e,r),Mt(e,Ge()),n;if(t===6)nr(e,r);else{if(i=e.current.alternate,!(r&30)&&!p8(i)&&(t=ha(e,r),t===2&&(s=Nd(e),s!==0&&(r=s,t=d1(e,s))),t===1))throw n=bs,Nr(e,0),nr(e,r),Mt(e,Ge()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(K(345));case 2:Pr(e,It,Mn);break;case 3:if(nr(e,r),(r&130023424)===r&&(t=Tp+500-Ge(),10<t)){if(ql(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){jt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Wd(Pr.bind(null,e,It,Mn),t);break}Pr(e,It,Mn);break;case 4:if(nr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-hn(r);s=1<<l,l=t[l],l>i&&(i=l),r&=~s}if(r=i,r=Ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*d8(r/1960))-r,10<r){e.timeoutHandle=Wd(Pr.bind(null,e,It,Mn),r);break}Pr(e,It,Mn);break;case 5:Pr(e,It,Mn);break;default:throw Error(K(329))}}}return Mt(e,Ge()),e.callbackNode===n?gx.bind(null,e):null}function d1(e,t){var n=qo;return e.current.memoizedState.isDehydrated&&(Nr(e,t).flags|=256),e=ha(e,t),e!==2&&(t=It,It=n,t!==null&&p1(t)),e}function p1(e){It===null?It=e:It.push.apply(It,e)}function p8(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ln(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nr(e,t){for(t&=~Ip,t&=~Wa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-hn(t),r=1<<n;e[n]=-1,t&=~r}}function Vf(e){if(ye&6)throw Error(K(327));Ri();var t=ql(e,0);if(!(t&1))return Mt(e,Ge()),null;var n=ha(e,t);if(e.tag!==0&&n===2){var r=Nd(e);r!==0&&(t=r,n=d1(e,r))}if(n===1)throw n=bs,Nr(e,0),nr(e,t),Mt(e,Ge()),n;if(n===6)throw Error(K(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pr(e,It,Mn),Mt(e,Ge()),null}function Rp(e,t){var n=ye;ye|=1;try{return e(t)}finally{ye=n,ye===0&&(Ui=Ge()+500,Fa&&br())}}function Vr(e){ir!==null&&ir.tag===0&&!(ye&6)&&Ri();var t=ye;ye|=1;var n=tn.transition,r=Se;try{if(tn.transition=null,Se=1,e)return e()}finally{Se=r,tn.transition=n,ye=t,!(ye&6)&&br()}}function zp(){Bt=ki.current,Ne(ki)}function Nr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,H7(n)),Je!==null)for(n=Je.return;n!==null;){var r=n;switch(fp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ta();break;case 3:Fi(),Ne(Rt),Ne(vt),wp();break;case 5:bp(r);break;case 4:Fi();break;case 13:Ne(He);break;case 19:Ne(He);break;case 10:xp(r.type._context);break;case 22:case 23:zp()}n=n.return}if(at=e,Je=e=fr(e.current,null),dt=Bt=t,rt=0,bs=null,Ip=Wa=Ur=0,It=qo=null,zr!==null){for(t=0;t<zr.length;t++)if(n=zr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var l=s.next;s.next=i,r.next=l}n.pending=r}zr=null}return e}function mx(e,t){do{var n=Je;try{if(mp(),Pl.current=ua,ca){for(var r=Ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ca=!1}if(Hr=0,st=et=Ue=null,Go=!1,Ls=0,Pp.current=null,n===null||n.return===null){rt=1,bs=t,Je=null;break}e:{var s=e,l=n.return,a=n,c=t;if(t=dt,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,p=a,f=p.tag;if(!(p.mode&1)&&(f===0||f===11||f===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var g=Tf(l);if(g!==null){g.flags&=-257,Rf(g,l,a,s,t),g.mode&1&&If(s,d,t),t=g,c=d;var b=t.updateQueue;if(b===null){var v=new Set;v.add(c),t.updateQueue=v}else b.add(c);break e}else{if(!(t&1)){If(s,d,t),Mp();break e}c=Error(K(426))}}else if(Be&&a.mode&1){var $=Tf(l);if($!==null){!($.flags&65536)&&($.flags|=256),Rf($,l,a,s,t),hp(Hi(c,a));break e}}s=c=Hi(c,a),rt!==4&&(rt=2),qo===null?qo=[s]:qo.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var x=Jm(s,c,t);jf(s,x);break e;case 1:a=c;var L=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof L.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(dr===null||!dr.has(y)))){s.flags|=65536,t&=-t,s.lanes|=t;var S=ex(s,a,t);jf(s,S);break e}}s=s.return}while(s!==null)}yx(n)}catch(I){t=I,Je===n&&n!==null&&(Je=n=n.return);continue}break}while(!0)}function xx(){var e=da.current;return da.current=ua,e===null?ua:e}function Mp(){(rt===0||rt===3||rt===2)&&(rt=4),at===null||!(Ur&268435455)&&!(Wa&268435455)||nr(at,dt)}function ha(e,t){var n=ye;ye|=2;var r=xx();(at!==e||dt!==t)&&(Mn=null,Nr(e,t));do try{f8();break}catch(i){mx(e,i)}while(!0);if(mp(),ye=n,da.current=r,Je!==null)throw Error(K(261));return at=null,dt=0,rt}function f8(){for(;Je!==null;)Lx(Je)}function h8(){for(;Je!==null&&!O6();)Lx(Je)}function Lx(e){var t=bx(e.alternate,e,Bt);e.memoizedProps=e.pendingProps,t===null?yx(e):Je=t,Pp.current=null}function yx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=l8(n,t),n!==null){n.flags&=32767,Je=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{rt=6,Je=null;return}}else if(n=s8(n,t,Bt),n!==null){Je=n;return}if(t=t.sibling,t!==null){Je=t;return}Je=t=e}while(t!==null);rt===0&&(rt=5)}function Pr(e,t,n){var r=Se,i=tn.transition;try{tn.transition=null,Se=1,g8(e,t,n,r)}finally{tn.transition=i,Se=r}return null}function g8(e,t,n,r){do Ri();while(ir!==null);if(ye&6)throw Error(K(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(K(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Z6(e,s),e===at&&(Je=at=null,dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||nl||(nl=!0,wx(Zl,function(){return Ri(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=tn.transition,tn.transition=null;var l=Se;Se=1;var a=ye;ye|=4,Pp.current=null,c8(e,n),fx(n,e),A7(Ud),Ql=!!Hd,Ud=Hd=null,e.current=n,u8(n),B6(),ye=a,Se=l,tn.transition=s}else e.current=n;if(nl&&(nl=!1,ir=e,fa=i),s=e.pendingLanes,s===0&&(dr=null),U6(n.stateNode),Mt(e,Ge()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(pa)throw pa=!1,e=c1,c1=null,e;return fa&1&&e.tag!==0&&Ri(),s=e.pendingLanes,s&1?e===u1?Qo++:(Qo=0,u1=e):Qo=0,br(),null}function Ri(){if(ir!==null){var e=Jg(fa),t=tn.transition,n=Se;try{if(tn.transition=null,Se=16>e?16:e,ir===null)var r=!1;else{if(e=ir,ir=null,fa=0,ye&6)throw Error(K(331));var i=ye;for(ye|=4,ee=e.current;ee!==null;){var s=ee,l=s.child;if(ee.flags&16){var a=s.deletions;if(a!==null){for(var c=0;c<a.length;c++){var d=a[c];for(ee=d;ee!==null;){var p=ee;switch(p.tag){case 0:case 11:case 15:Zo(8,p,s)}var f=p.child;if(f!==null)f.return=p,ee=f;else for(;ee!==null;){p=ee;var h=p.sibling,g=p.return;if(ux(p),p===d){ee=null;break}if(h!==null){h.return=g,ee=h;break}ee=g}}}var b=s.alternate;if(b!==null){var v=b.child;if(v!==null){b.child=null;do{var $=v.sibling;v.sibling=null,v=$}while(v!==null)}}ee=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,ee=l;else e:for(;ee!==null;){if(s=ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Zo(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,ee=x;break e}ee=s.return}}var L=e.current;for(ee=L;ee!==null;){l=ee;var y=l.child;if(l.subtreeFlags&2064&&y!==null)y.return=l,ee=y;else e:for(l=L;ee!==null;){if(a=ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Va(9,a)}}catch(I){Ke(a,a.return,I)}if(a===l){ee=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ee=S;break e}ee=a.return}}if(ye=i,br(),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot(_a,e)}catch{}r=!0}return r}finally{Se=n,tn.transition=t}}return!1}function Wf(e,t,n){t=Hi(n,t),t=Jm(e,t,1),e=ur(e,t,1),t=jt(),e!==null&&(Is(e,1,t),Mt(e,t))}function Ke(e,t,n){if(e.tag===3)Wf(e,e,n);else for(;t!==null;){if(t.tag===3){Wf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dr===null||!dr.has(r))){e=Hi(n,e),e=ex(t,e,1),t=ur(t,e,1),e=jt(),t!==null&&(Is(t,1,e),Mt(t,e));break}}t=t.return}}function m8(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=jt(),e.pingedLanes|=e.suspendedLanes&n,at===e&&(dt&n)===n&&(rt===4||rt===3&&(dt&130023424)===dt&&500>Ge()-Tp?Nr(e,0):Ip|=n),Mt(e,t)}function vx(e,t){t===0&&(e.mode&1?(t=Ks,Ks<<=1,!(Ks&130023424)&&(Ks=4194304)):t=1);var n=jt();e=Un(e,t),e!==null&&(Is(e,t,n),Mt(e,n))}function x8(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vx(e,n)}function L8(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(K(314))}r!==null&&r.delete(t),vx(e,n)}var bx;bx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Rt.current)Tt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Tt=!1,o8(e,t,n);Tt=!!(e.flags&131072)}else Tt=!1,Be&&t.flags&1048576&&Sm(t,ia,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Tl(e,t),e=t.pendingProps;var i=Di(t,vt.current);Ti(t,n),i=jp(null,t,r,e,i,n);var s=Sp();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,zt(r)?(s=!0,na(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,yp(t),i.updater=Ua,t.stateNode=i,i._reactInternals=t,Xd(t,r,e,n),t=t1(null,t,r,!0,s,n)):(t.tag=0,Be&&s&&pp(t),kt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Tl(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=v8(r),e=un(r,e),i){case 0:t=e1(null,t,r,e,n);break e;case 1:t=Af(null,t,r,e,n);break e;case 11:t=zf(null,t,r,e,n);break e;case 14:t=Mf(null,t,r,un(r.type,e),n);break e}throw Error(K(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:un(r,i),e1(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:un(r,i),Af(e,t,r,i,n);case 3:e:{if(ix(t),e===null)throw Error(K(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Tm(e,t),la(t,r,null,n);var l=t.memoizedState;if(r=l.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Hi(Error(K(423)),t),t=_f(e,t,r,n,i);break e}else if(r!==i){i=Hi(Error(K(424)),t),t=_f(e,t,r,n,i);break e}else for(Ft=cr(t.stateNode.containerInfo.firstChild),Ut=t,Be=!0,fn=null,n=Pm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Oi(),r===i){t=Vn(e,t,n);break e}kt(e,t,r,n)}t=t.child}return t;case 5:return Rm(t),e===null&&Zd(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,Vd(r,i)?l=null:s!==null&&Vd(r,s)&&(t.flags|=32),rx(e,t),kt(e,t,l,n),t.child;case 6:return e===null&&Zd(t),null;case 13:return ox(e,t,n);case 4:return vp(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Bi(t,null,r,n):kt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:un(r,i),zf(e,t,r,i,n);case 7:return kt(e,t,t.pendingProps,n),t.child;case 8:return kt(e,t,t.pendingProps.children,n),t.child;case 12:return kt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,l=i.value,Re(oa,r._currentValue),r._currentValue=l,s!==null)if(Ln(s.value,l)){if(s.children===i.children&&!Rt.current){t=Vn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){l=s.child;for(var c=a.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Bn(-1,n&-n),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?c.next=c:(c.next=p.next,p.next=c),d.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),qd(s.return,n,t),a.lanes|=n;break}c=c.next}}else if(s.tag===10)l=s.type===t.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(K(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),qd(l,n,t),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===t){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}kt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ti(t,n),i=nn(i),r=r(i),t.flags|=1,kt(e,t,r,n),t.child;case 14:return r=t.type,i=un(r,t.pendingProps),i=un(r.type,i),Mf(e,t,r,i,n);case 15:return tx(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:un(r,i),Tl(e,t),t.tag=1,zt(r)?(e=!0,na(t)):e=!1,Ti(t,n),Xm(t,r,i),Xd(t,r,i,n),t1(null,t,r,!0,e,n);case 19:return sx(e,t,n);case 22:return nx(e,t,n)}throw Error(K(156,t.tag))};function wx(e,t){return Zg(e,t)}function y8(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(e,t,n,r){return new y8(e,t,n,r)}function Ap(e){return e=e.prototype,!(!e||!e.isReactComponent)}function v8(e){if(typeof e=="function")return Ap(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ep)return 11;if(e===tp)return 14}return 2}function fr(e,t){var n=e.alternate;return n===null?(n=Jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ml(e,t,n,r,i,s){var l=2;if(r=e,typeof e=="function")Ap(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case fi:return Dr(n.children,i,s,t);case J1:l=8,i|=8;break;case wd:return e=Jt(12,n,t,i|2),e.elementType=wd,e.lanes=s,e;case kd:return e=Jt(13,n,t,i),e.elementType=kd,e.lanes=s,e;case jd:return e=Jt(19,n,t,i),e.elementType=jd,e.lanes=s,e;case Rg:return Ka(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ig:l=10;break e;case Tg:l=9;break e;case ep:l=11;break e;case tp:l=14;break e;case Jn:l=16,r=null;break e}throw Error(K(130,e==null?e:typeof e,""))}return t=Jt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Dr(e,t,n,r){return e=Jt(7,e,r,t),e.lanes=n,e}function Ka(e,t,n,r){return e=Jt(22,e,r,t),e.elementType=Rg,e.lanes=n,e.stateNode={isHidden:!1},e}function Wc(e,t,n){return e=Jt(6,e,null,t),e.lanes=n,e}function Kc(e,t,n){return t=Jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function b8(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$c(0),this.expirationTimes=$c(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$c(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _p(e,t,n,r,i,s,l,a,c){return e=new b8(e,t,n,a,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Jt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yp(s),e}function w8(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function kx(e){if(!e)return Lr;e=e._reactInternals;e:{if(Qr(e)!==e||e.tag!==1)throw Error(K(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(zt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(K(171))}if(e.tag===1){var n=e.type;if(zt(n))return km(e,n,t)}return t}function jx(e,t,n,r,i,s,l,a,c){return e=_p(n,r,!0,e,i,s,l,a,c),e.context=kx(null),n=e.current,r=jt(),i=pr(n),s=Bn(r,i),s.callback=t??null,ur(n,s,i),e.current.lanes=i,Is(e,i,r),Mt(e,r),e}function Ya(e,t,n,r){var i=t.current,s=jt(),l=pr(i);return n=kx(n),t.context===null?t.context=n:t.pendingContext=n,t=Bn(s,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ur(i,t,l),e!==null&&(gn(e,i,l,s),El(e,i,l)),l}function ga(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Kf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Np(e,t){Kf(e,t),(e=e.alternate)&&Kf(e,t)}function k8(){return null}var Sx=typeof reportError=="function"?reportError:function(e){console.error(e)};function Dp(e){this._internalRoot=e}Ga.prototype.render=Dp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(K(409));Ya(e,t,null,null)};Ga.prototype.unmount=Dp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vr(function(){Ya(null,e,null,null)}),t[Hn]=null}};function Ga(e){this._internalRoot=e}Ga.prototype.unstable_scheduleHydration=function(e){if(e){var t=nm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tr.length&&t!==0&&t<tr[n].priority;n++);tr.splice(n,0,e),n===0&&im(e)}};function Op(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Za(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yf(){}function j8(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=ga(l);s.call(d)}}var l=jx(t,r,e,0,null,!1,!1,"",Yf);return e._reactRootContainer=l,e[Hn]=l.current,fs(e.nodeType===8?e.parentNode:e),Vr(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var d=ga(c);a.call(d)}}var c=_p(e,0,!1,null,null,!1,!1,"",Yf);return e._reactRootContainer=c,e[Hn]=c.current,fs(e.nodeType===8?e.parentNode:e),Vr(function(){Ya(t,c,n,r)}),c}function qa(e,t,n,r,i){var s=n._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var a=i;i=function(){var c=ga(l);a.call(c)}}Ya(t,l,e,i)}else l=j8(n,t,e,i,r);return ga(l)}em=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Do(t.pendingLanes);n!==0&&(ip(t,n|1),Mt(t,Ge()),!(ye&6)&&(Ui=Ge()+500,br()))}break;case 13:Vr(function(){var r=Un(e,1);if(r!==null){var i=jt();gn(r,e,1,i)}}),Np(e,1)}};op=function(e){if(e.tag===13){var t=Un(e,134217728);if(t!==null){var n=jt();gn(t,e,134217728,n)}Np(e,134217728)}};tm=function(e){if(e.tag===13){var t=pr(e),n=Un(e,t);if(n!==null){var r=jt();gn(n,e,t,r)}Np(e,t)}};nm=function(){return Se};rm=function(e,t){var n=Se;try{return Se=e,t()}finally{Se=n}};Md=function(e,t,n){switch(t){case"input":if(Cd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ba(r);if(!i)throw Error(K(90));Mg(r),Cd(r,i)}}}break;case"textarea":_g(e,n);break;case"select":t=n.value,t!=null&&Ci(e,!!n.multiple,t,!1)}};Ug=Rp;Vg=Vr;var S8={usingClientEntryPoint:!1,Events:[Rs,xi,Ba,Fg,Hg,Rp]},xo={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$8={bundleType:xo.bundleType,version:xo.version,rendererPackageName:xo.rendererPackageName,rendererConfig:xo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Yg(e),e===null?null:e.stateNode},findFiberByHostInstance:xo.findFiberByHostInstance||k8,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rl.isDisabled&&rl.supportsFiber)try{_a=rl.inject($8),Cn=rl}catch{}}Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S8;Wt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Op(t))throw Error(K(200));return w8(e,t,null,n)};Wt.createRoot=function(e,t){if(!Op(e))throw Error(K(299));var n=!1,r="",i=Sx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=_p(e,1,!1,null,null,n,!1,r,i),e[Hn]=t.current,fs(e.nodeType===8?e.parentNode:e),new Dp(t)};Wt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(K(188)):(e=Object.keys(e).join(","),Error(K(268,e)));return e=Yg(t),e=e===null?null:e.stateNode,e};Wt.flushSync=function(e){return Vr(e)};Wt.hydrate=function(e,t,n){if(!Za(t))throw Error(K(200));return qa(null,e,t,!0,n)};Wt.hydrateRoot=function(e,t,n){if(!Op(e))throw Error(K(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",l=Sx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=jx(t,null,e,1,n??null,i,!1,s,l),e[Hn]=t.current,fs(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ga(t)};Wt.render=function(e,t,n){if(!Za(t))throw Error(K(200));return qa(null,e,t,!1,n)};Wt.unmountComponentAtNode=function(e){if(!Za(e))throw Error(K(40));return e._reactRootContainer?(Vr(function(){qa(null,null,e,!1,function(){e._reactRootContainer=null,e[Hn]=null})}),!0):!1};Wt.unstable_batchedUpdates=Rp;Wt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Za(n))throw Error(K(200));if(e==null||e._reactInternals===void 0)throw Error(K(38));return qa(e,t,n,!1,r)};Wt.version="18.3.1-next-f1338f8080-20240426";function $x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($x)}catch(e){console.error(e)}}$x(),$g.exports=Wt;var Cx=$g.exports,Gf=Cx;vd.createRoot=Gf.createRoot,vd.hydrateRoot=Gf.hydrateRoot;var lt=function(){return lt=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},lt.apply(this,arguments)};function Vi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var _e="-ms-",Xo="-moz-",be="-webkit-",Ex="comm",Qa="rule",Bp="decl",C8="@import",E8="@namespace",Px="@keyframes",P8="@layer",Ix=Math.abs,Fp=String.fromCharCode,f1=Object.assign;function I8(e,t){return tt(e,0)^45?(((t<<2^tt(e,0))<<2^tt(e,1))<<2^tt(e,2))<<2^tt(e,3):0}function Tx(e){return e.trim()}function An(e,t){return(e=t.exec(e))?e[0]:e}function ue(e,t,n){return e.replace(t,n)}function Al(e,t,n){return e.indexOf(t,n)}function tt(e,t){return e.charCodeAt(t)|0}function Wr(e,t,n){return e.slice(t,n)}function pn(e){return e.length}function Rx(e){return e.length}function Bo(e,t){return t.push(e),e}function T8(e,t){return e.map(t).join("")}function Zf(e,t){return e.filter(function(n){return!An(n,t)})}var Xa=1,Wi=1,zx=0,on=0,Xe=0,eo="";function Ja(e,t,n,r,i,s,l,a){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Xa,column:Wi,length:l,return:"",siblings:a}}function Xn(e,t){return f1(Ja("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ri(e){for(;e.root;)e=Xn(e.root,{children:[e]});Bo(e,e.siblings)}function R8(){return Xe}function z8(){return Xe=on>0?tt(eo,--on):0,Wi--,Xe===10&&(Wi=1,Xa--),Xe}function mn(){return Xe=on<zx?tt(eo,on++):0,Wi++,Xe===10&&(Wi=1,Xa++),Xe}function or(){return tt(eo,on)}function _l(){return on}function ec(e,t){return Wr(eo,e,t)}function ws(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function M8(e){return Xa=Wi=1,zx=pn(eo=e),on=0,[]}function A8(e){return eo="",e}function Yc(e){return Tx(ec(on-1,h1(e===91?e+2:e===40?e+1:e)))}function _8(e){for(;(Xe=or())&&Xe<33;)mn();return ws(e)>2||ws(Xe)>3?"":" "}function N8(e,t){for(;--t&&mn()&&!(Xe<48||Xe>102||Xe>57&&Xe<65||Xe>70&&Xe<97););return ec(e,_l()+(t<6&&or()==32&&mn()==32))}function h1(e){for(;mn();)switch(Xe){case e:return on;case 34:case 39:e!==34&&e!==39&&h1(Xe);break;case 40:e===41&&h1(e);break;case 92:mn();break}return on}function D8(e,t){for(;mn()&&e+Xe!==57;)if(e+Xe===84&&or()===47)break;return"/*"+ec(t,on-1)+"*"+Fp(e===47?e:mn())}function O8(e){for(;!ws(or());)mn();return ec(e,on)}function B8(e){return A8(Nl("",null,null,null,[""],e=M8(e),0,[0],e))}function Nl(e,t,n,r,i,s,l,a,c){for(var d=0,p=0,f=l,h=0,g=0,b=0,v=1,$=1,x=1,L=0,y="",S=i,I=s,k=r,j=y;$;)switch(b=L,L=mn()){case 40:if(b!=108&&tt(j,f-1)==58){Al(j+=ue(Yc(L),"&","&\f"),"&\f",Ix(d?a[d-1]:0))!=-1&&(x=-1);break}case 34:case 39:case 91:j+=Yc(L);break;case 9:case 10:case 13:case 32:j+=_8(b);break;case 92:j+=N8(_l()-1,7);continue;case 47:switch(or()){case 42:case 47:Bo(F8(D8(mn(),_l()),t,n,c),c),(ws(b||1)==5||ws(or()||1)==5)&&pn(j)&&Wr(j,-1,void 0)!==" "&&(j+=" ");break;default:j+="/"}break;case 123*v:a[d++]=pn(j)*x;case 125*v:case 59:case 0:switch(L){case 0:case 125:$=0;case 59+p:x==-1&&(j=ue(j,/\f/g,"")),g>0&&(pn(j)-f||v===0&&b===47)&&Bo(g>32?Qf(j+";",r,n,f-1,c):Qf(ue(j," ","")+";",r,n,f-2,c),c);break;case 59:j+=";";default:if(Bo(k=qf(j,t,n,d,p,i,a,y,S=[],I=[],f,s),s),L===123)if(p===0)Nl(j,t,k,k,S,s,f,a,I);else{switch(h){case 99:if(tt(j,3)===110)break;case 108:if(tt(j,2)===97)break;default:p=0;case 100:case 109:case 115:}p?Nl(e,k,k,r&&Bo(qf(e,k,k,0,0,i,a,y,i,S=[],f,I),I),i,I,f,a,r?S:I):Nl(j,k,k,k,[""],I,0,a,I)}}d=p=g=0,v=x=1,y=j="",f=l;break;case 58:f=1+pn(j),g=b;default:if(v<1){if(L==123)--v;else if(L==125&&v++==0&&z8()==125)continue}switch(j+=Fp(L),L*v){case 38:x=p>0?1:(j+="\f",-1);break;case 44:a[d++]=(pn(j)-1)*x,x=1;break;case 64:or()===45&&(j+=Yc(mn())),h=or(),p=f=pn(y=j+=O8(_l())),L++;break;case 45:b===45&&pn(j)==2&&(v=0)}}return s}function qf(e,t,n,r,i,s,l,a,c,d,p,f){for(var h=i-1,g=i===0?s:[""],b=Rx(g),v=0,$=0,x=0;v<r;++v)for(var L=0,y=Wr(e,h+1,h=Ix($=l[v])),S=e;L<b;++L)(S=Tx($>0?g[L]+" "+y:ue(y,/&\f/g,g[L])))&&(c[x++]=S);return Ja(e,t,n,i===0?Qa:a,c,d,p,f)}function F8(e,t,n,r){return Ja(e,t,n,Ex,Fp(R8()),Wr(e,2,-2),0,r)}function Qf(e,t,n,r,i){return Ja(e,t,n,Bp,Wr(e,0,r),Wr(e,r+1,-1),r,i)}function Mx(e,t,n){switch(I8(e,t)){case 5103:return be+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return be+e+e;case 4855:return be+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Xo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return be+e+Xo+e+_e+e+e;case 5936:switch(tt(e,t+11)){case 114:return be+e+_e+ue(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return be+e+_e+ue(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return be+e+_e+ue(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return be+e+_e+e+e;case 6165:return be+e+_e+"flex-"+e+e;case 5187:return be+e+ue(e,/(\w+).+(:[^]+)/,be+"box-$1$2"+_e+"flex-$1$2")+e;case 5443:return be+e+_e+"flex-item-"+ue(e,/flex-|-self/g,"")+(An(e,/flex-|baseline/)?"":_e+"grid-row-"+ue(e,/flex-|-self/g,""))+e;case 4675:return be+e+_e+"flex-line-pack"+ue(e,/align-content|flex-|-self/g,"")+e;case 5548:return be+e+_e+ue(e,"shrink","negative")+e;case 5292:return be+e+_e+ue(e,"basis","preferred-size")+e;case 6060:return be+"box-"+ue(e,"-grow","")+be+e+_e+ue(e,"grow","positive")+e;case 4554:return be+ue(e,/([^-])(transform)/g,"$1"+be+"$2")+e;case 6187:return ue(ue(ue(e,/(zoom-|grab)/,be+"$1"),/(image-set)/,be+"$1"),e,"")+e;case 5495:case 3959:return ue(e,/(image-set\([^]*)/,be+"$1$`$1");case 4968:return ue(ue(e,/(.+:)(flex-)?(.*)/,be+"box-pack:$3"+_e+"flex-pack:$3"),/space-between/,"justify")+be+e+e;case 4200:if(!An(e,/flex-|baseline/))return _e+"grid-column-align"+Wr(e,t)+e;break;case 2592:case 3360:return _e+ue(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,An(r.props,/grid-\w+-end/)})?~Al(e+(n=n[t].value),"span",0)?e:_e+ue(e,"-start","")+e+_e+"grid-row-span:"+(~Al(n,"span",0)?An(n,/\d+/):+An(n,/\d+/)-+An(e,/\d+/))+";":_e+ue(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return An(r.props,/grid-\w+-start/)})?e:_e+ue(ue(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ue(e,/(.+)-inline(.+)/,be+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pn(e)-1-t>6)switch(tt(e,t+1)){case 109:if(tt(e,t+4)!==45)break;case 102:return ue(e,/(.+:)(.+)-([^]+)/,"$1"+be+"$2-$3$1"+Xo+(tt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Al(e,"stretch",0)?Mx(ue(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ue(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,l,a,c,d){return _e+i+":"+s+d+(l?_e+i+"-span:"+(a?c:+c-+s)+d:"")+e});case 4949:if(tt(e,t+6)===121)return ue(e,":",":"+be)+e;break;case 6444:switch(tt(e,tt(e,14)===45?18:11)){case 120:return ue(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+be+(tt(e,14)===45?"inline-":"")+"box$3$1"+be+"$2$3$1"+_e+"$2box$3")+e;case 100:return ue(e,":",":"+_e)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ue(e,"scroll-","scroll-snap-")+e}return e}function ma(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function H8(e,t,n,r){switch(e.type){case P8:if(e.children.length)break;case C8:case E8:case Bp:return e.return=e.return||e.value;case Ex:return"";case Px:return e.return=e.value+"{"+ma(e.children,r)+"}";case Qa:if(!pn(e.value=e.props.join(",")))return""}return pn(n=ma(e.children,r))?e.return=e.value+"{"+n+"}":""}function U8(e){var t=Rx(e);return function(n,r,i,s){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,s)||"";return l}}function V8(e){return function(t){t.root||(t=t.return)&&e(t)}}function W8(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Bp:e.return=Mx(e.value,e.length,n);return;case Px:return ma([Xn(e,{value:ue(e.value,"@","@"+be)})],r);case Qa:if(e.length)return T8(n=e.props,function(i){switch(An(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ri(Xn(e,{props:[ue(i,/:(read-\w+)/,":"+Xo+"$1")]})),ri(Xn(e,{props:[i]})),f1(e,{props:Zf(n,r)});break;case"::placeholder":ri(Xn(e,{props:[ue(i,/:(plac\w+)/,":"+be+"input-$1")]})),ri(Xn(e,{props:[ue(i,/:(plac\w+)/,":"+Xo+"$1")]})),ri(Xn(e,{props:[ue(i,/:(plac\w+)/,_e+"input-$1")]})),ri(Xn(e,{props:[i]})),f1(e,{props:Zf(n,r)});break}return""})}}var K8={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ot={},Ki=typeof process<"u"&&Ot!==void 0&&(Ot.REACT_APP_SC_ATTR||Ot.SC_ATTR)||"data-styled",Ax="active",_x="data-styled-version",tc="6.3.8",Hp=`/*!sc*/
`,xa=typeof window<"u"&&typeof document<"u",Pn=Ze.createContext===void 0,Y8=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ot!==void 0&&Ot.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ot.REACT_APP_SC_DISABLE_SPEEDY!==""?Ot.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ot.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ot!==void 0&&Ot.SC_DISABLE_SPEEDY!==void 0&&Ot.SC_DISABLE_SPEEDY!==""&&Ot.SC_DISABLE_SPEEDY!=="false"&&Ot.SC_DISABLE_SPEEDY),G8={},nc=Object.freeze([]),Yi=Object.freeze({});function Nx(e,t,n){return n===void 0&&(n=Yi),e.theme!==n.theme&&e.theme||t||n.theme}var Dx=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Z8=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,q8=/(^-|-$)/g;function Xf(e){return e.replace(Z8,"-").replace(q8,"")}var Q8=/(a)(d)/gi,Jf=function(e){return String.fromCharCode(e+(e>25?39:97))};function g1(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Jf(t%52)+n;return(Jf(t%52)+n).replace(Q8,"$1-$2")}var Gc,ji=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ox=function(e){return ji(5381,e)};function Up(e){return g1(Ox(e)>>>0)}function X8(e){return e.displayName||e.name||"Component"}function Zc(e){return typeof e=="string"&&!0}var Bx=typeof Symbol=="function"&&Symbol.for,Fx=Bx?Symbol.for("react.memo"):60115,J8=Bx?Symbol.for("react.forward_ref"):60112,eL={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},tL={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Hx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},nL=((Gc={})[J8]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Gc[Fx]=Hx,Gc);function eh(e){return("type"in(t=e)&&t.type.$$typeof)===Fx?Hx:"$$typeof"in e?nL[e.$$typeof]:eL;var t}var rL=Object.defineProperty,iL=Object.getOwnPropertyNames,th=Object.getOwnPropertySymbols,oL=Object.getOwnPropertyDescriptor,sL=Object.getPrototypeOf,nh=Object.prototype;function Ux(e,t,n){if(typeof t!="string"){if(nh){var r=sL(t);r&&r!==nh&&Ux(e,r,n)}var i=iL(t);th&&(i=i.concat(th(t)));for(var s=eh(e),l=eh(t),a=0;a<i.length;++a){var c=i[a];if(!(c in tL||n&&n[c]||l&&c in l||s&&c in s)){var d=oL(t,c);try{rL(e,c,d)}catch{}}}}return e}function Kr(e){return typeof e=="function"}function Vp(e){return typeof e=="object"&&"styledComponentId"in e}function Ar(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function La(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function ks(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function m1(e,t,n){if(n===void 0&&(n=!1),!n&&!ks(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=m1(e[r],t[r]);else if(ks(t))for(var r in t)e[r]=m1(e[r],t[r]);return e}function Wp(e,t){Object.defineProperty(e,"toString",{value:t})}function Yr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var lL=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw Yr(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var l=i;l<s;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),c=(l=0,n.length);l<c;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,l=i;l<s;l++)n+="".concat(this.tag.getRule(l)).concat(Hp);return n},e}(),Dl=new Map,ya=new Map,Ol=1,Si=function(e){if(Dl.has(e))return Dl.get(e);for(;ya.has(Ol);)Ol++;var t=Ol++;return Dl.set(e,t),ya.set(t,e),t},aL=function(e,t){Ol=t+1,Dl.set(e,t),ya.set(t,e)},cL="style[".concat(Ki,"][").concat(_x,'="').concat(tc,'"]'),uL=new RegExp("^".concat(Ki,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),dL=function(e,t,n){for(var r,i=n.split(","),s=0,l=i.length;s<l;s++)(r=i[s])&&e.registerName(t,r)},pL=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Hp),i=[],s=0,l=r.length;s<l;s++){var a=r[s].trim();if(a){var c=a.match(uL);if(c){var d=0|parseInt(c[1],10),p=c[2];d!==0&&(aL(p,d),dL(e,p,c[3]),e.getTag().insertRules(d,i)),i.length=0}else i.push(a)}}},rh=function(e){for(var t=document.querySelectorAll(cL),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Ki)!==Ax&&(pL(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function fL(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Vx=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var c=Array.from(a.querySelectorAll("style[".concat(Ki,"]")));return c[c.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ki,Ax),r.setAttribute(_x,tc);var l=fL();return l&&r.setAttribute("nonce",l),n.insertBefore(r,s),r},hL=function(){function e(t){this.element=Vx(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var l=r[i];if(l.ownerNode===n)return l}throw Yr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),gL=function(){function e(t){this.element=Vx(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),mL=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),ih=xa,xL={isServer:!xa,useCSSOMInjection:!Y8},va=function(){function e(t,n,r){t===void 0&&(t=Yi),n===void 0&&(n={});var i=this;this.options=lt(lt({},xL),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&xa&&ih&&(ih=!1,rh(this)),Wp(this,function(){return function(s){for(var l=s.getTag(),a=l.length,c="",d=function(f){var h=function(x){return ya.get(x)}(f);if(h===void 0)return"continue";var g=s.names.get(h),b=l.getGroup(f);if(g===void 0||!g.size||b.length===0)return"continue";var v="".concat(Ki,".g").concat(f,'[id="').concat(h,'"]'),$="";g!==void 0&&g.forEach(function(x){x.length>0&&($+="".concat(x,","))}),c+="".concat(b).concat(v,'{content:"').concat($,'"}').concat(Hp)},p=0;p<a;p++)d(p);return c}(i)})}return e.registerId=function(t){return Si(t)},e.prototype.rehydrate=function(){!this.server&&xa&&rh(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(lt(lt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new mL(i):r?new hL(i):new gL(i)}(this.options),new lL(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Si(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Si(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Si(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),LL=/&/g,$i=47;function oh(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,s=0;s<t;s++){var l=e.charCodeAt(s);if(r!==0||i||l!==$i||e.charCodeAt(s+1)!==42)if(i)l===42&&e.charCodeAt(s+1)===$i&&(i=!1,s++);else if(l!==34&&l!==39||s!==0&&e.charCodeAt(s-1)===92){if(r===0){if(l===123)n++;else if(l===125&&--n<0)return!0}}else r===0?r=l:r===l&&(r=0);else i=!0,s++}return n!==0||r!==0}function Wx(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Wx(n.children,t)),n})}function yL(e){var t,n,r,i=Yi,s=i.options,l=s===void 0?Yi:s,a=i.plugins,c=a===void 0?nc:a,d=function(h,g,b){return b.startsWith(n)&&b.endsWith(n)&&b.replaceAll(n,"").length>0?".".concat(t):h},p=c.slice();p.push(function(h){h.type===Qa&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(LL,n).replace(r,d))}),l.prefix&&p.push(W8),p.push(H8);var f=function(h,g,b,v){g===void 0&&(g=""),b===void 0&&(b=""),v===void 0&&(v="&"),t=v,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var $=function(y){if(!oh(y))return y;for(var S=y.length,I="",k=0,j=0,R=0,z=!1,T=0;T<S;T++){var P=y.charCodeAt(T);if(R!==0||z||P!==$i||y.charCodeAt(T+1)!==42)if(z)P===42&&y.charCodeAt(T+1)===$i&&(z=!1,T++);else if(P!==34&&P!==39||T!==0&&y.charCodeAt(T-1)===92){if(R===0)if(P===123)j++;else if(P===125){if(--j<0){for(var E=T+1;E<S;){var A=y.charCodeAt(E);if(A===59||A===10)break;E++}E<S&&y.charCodeAt(E)===59&&E++,j=0,T=E-1,k=E;continue}j===0&&(I+=y.substring(k,T+1),k=T+1)}else P===59&&j===0&&(I+=y.substring(k,T+1),k=T+1)}else R===0?R=P:R===P&&(R=0);else z=!0,T++}if(k<S){var N=y.substring(k);oh(N)||(I+=N)}return I}(function(y){if(y.indexOf("//")===-1)return y;for(var S=y.length,I=[],k=0,j=0,R=0,z=0;j<S;){var T=y.charCodeAt(j);if(T!==34&&T!==39||j!==0&&y.charCodeAt(j-1)===92)if(R===0)if(T===40&&j>=3&&(32|y.charCodeAt(j-1))==108&&(32|y.charCodeAt(j-2))==114&&(32|y.charCodeAt(j-3))==117)z=1,j++;else if(z>0)T===41?z--:T===40&&z++,j++;else if(T===$i&&j+1<S&&y.charCodeAt(j+1)===$i){for(j>k&&I.push(y.substring(k,j));j<S&&y.charCodeAt(j)!==10;)j++;k=j}else j++;else j++;else R===0?R=T:R===T&&(R=0),j++}return k===0?y:(k<S&&I.push(y.substring(k)),I.join(""))}(h)),x=B8(b||g?"".concat(b," ").concat(g," { ").concat($," }"):$);l.namespace&&(x=Wx(x,l.namespace));var L=[];return ma(x,U8(p.concat(V8(function(y){return L.push(y)})))),L};return f.hash=c.length?c.reduce(function(h,g){return g.name||Yr(15),ji(h,g.name)},5381).toString():"",f}var vL=new va,x1=yL(),L1={shouldForwardProp:void 0,styleSheet:vL,stylis:x1},Kx=Pn?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(L1)}}:Ze.createContext(L1);Kx.Consumer;Pn||Ze.createContext(void 0);function y1(){return Pn?L1:Ze.useContext(Kx)}var Yx=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=x1);var l=r.name+s.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,s(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Wp(this,function(){throw Yr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=x1),this.name+t.hash},e}();function bL(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in K8||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var wL=function(e){return e>="A"&&e<="Z"};function sh(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;wL(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Gx=function(e){return e==null||e===!1||e===""},Zx=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!Gx(r)&&(Array.isArray(r)&&r.isCss||Kr(r)?t.push("".concat(sh(n),":"),r,";"):ks(r)?t.push.apply(t,Vi(Vi(["".concat(n," {")],Zx(r),!1),["}"],!1)):t.push("".concat(sh(n),": ").concat(bL(n,r),";")))}return t};function hr(e,t,n,r){if(Gx(e))return[];if(Vp(e))return[".".concat(e.styledComponentId)];if(Kr(e)){if(!Kr(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return hr(i,t,n,r)}var s;return e instanceof Yx?n?(e.inject(n,r),[e.getName(r)]):[e]:ks(e)?Zx(e):Array.isArray(e)?Array.prototype.concat.apply(nc,e.map(function(l){return hr(l,t,n,r)})):[e.toString()]}function qx(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Kr(n)&&!Vp(n))return!1}return!0}var kL=Ox(tc),jL=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&qx(t),this.componentId=n,this.baseHash=ji(kL,n),this.baseStyle=r,va.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Ar(i,this.staticRulesId);else{var s=La(hr(this.rules,t,n,r)),l=g1(ji(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(s,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}i=Ar(i,l),this.staticRulesId=l}else{for(var c=ji(this.baseHash,r.hash),d="",p=0;p<this.rules.length;p++){var f=this.rules[p];if(typeof f=="string")d+=f;else if(f){var h=La(hr(f,t,n,r));c=ji(c,h+p),d+=h}}if(d){var g=g1(c>>>0);if(!n.hasNameForId(this.componentId,g)){var b=r(d,".".concat(g),void 0,this.componentId);n.insertRules(this.componentId,g,b)}i=Ar(i,g)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(Si(this.componentId)):""}},e}(),js=Pn?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(void 0)}}:Ze.createContext(void 0);js.Consumer;function SL(e){if(Pn)return e.children;var t=Ze.useContext(js),n=Ze.useMemo(function(){return function(r,i){if(!r)throw Yr(14);if(Kr(r)){var s=r(i);return s}if(Array.isArray(r)||typeof r!="object")throw Yr(8);return i?lt(lt({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?Ze.createElement(js.Provider,{value:n},e.children):null}var qc={};function $L(e,t,n){var r=Vp(e),i=e,s=!Zc(e),l=t.attrs,a=l===void 0?nc:l,c=t.componentId,d=c===void 0?function(S,I){var k=typeof S!="string"?"sc":Xf(S);qc[k]=(qc[k]||0)+1;var j="".concat(k,"-").concat(Up(tc+k+qc[k]));return I?"".concat(I,"-").concat(j):j}(t.displayName,t.parentComponentId):c,p=t.displayName,f=p===void 0?function(S){return Zc(S)?"styled.".concat(S):"Styled(".concat(X8(S),")")}(e):p,h=t.displayName&&t.componentId?"".concat(Xf(t.displayName),"-").concat(t.componentId):t.componentId||d,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,b=t.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var $=t.shouldForwardProp;b=function(S,I){return v(S,I)&&$(S,I)}}else b=v}var x=new jL(n,h,r?i.componentStyle:void 0);function L(S,I){return function(k,j,R){var z=k.attrs,T=k.componentStyle,P=k.defaultProps,E=k.foldedComponentIds,A=k.styledComponentId,N=k.target,F=Pn?void 0:Ze.useContext(js),Y=y1(),Q=k.shouldForwardProp||Y.shouldForwardProp,_=Nx(j,F,P)||Yi,D=function(ne,de,q){for(var te,le=lt(lt({},de),{className:void 0,theme:q}),xe=0;xe<ne.length;xe+=1){var $e=Kr(te=ne[xe])?te(le):te;for(var Me in $e)Me==="className"?le.className=Ar(le.className,$e[Me]):Me==="style"?le.style=lt(lt({},le.style),$e[Me]):le[Me]=$e[Me]}return"className"in de&&typeof de.className=="string"&&(le.className=Ar(le.className,de.className)),le}(z,j,_),C=D.as||N,X={};for(var J in D)D[J]===void 0||J[0]==="$"||J==="as"||J==="theme"&&D.theme===_||(J==="forwardedAs"?X.as=D.forwardedAs:Q&&!Q(J,C)||(X[J]=D[J]));var w=function(ne,de){var q=y1(),te=ne.generateAndInjectStyles(de,q.styleSheet,q.stylis);return te}(T,D),H=w.className,M=w.css,G=Ar(E,A);H&&(G+=" "+H),D.className&&(G+=" "+D.className),X[Zc(C)&&!Dx.has(C)?"class":"className"]=G,R&&(X.ref=R);var U=m.createElement(C,X);return Pn&&M?Ze.createElement(Ze.Fragment,null,Ze.createElement("style",{precedence:"styled-components",href:"sc-".concat(A,"-").concat(H),children:M}),U):U}(y,S,I)}L.displayName=f;var y=Ze.forwardRef(L);return y.attrs=g,y.componentStyle=x,y.displayName=f,y.shouldForwardProp=b,y.foldedComponentIds=r?Ar(i.foldedComponentIds,i.styledComponentId):"",y.styledComponentId=h,y.target=r?i.target:e,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(I){for(var k=[],j=1;j<arguments.length;j++)k[j-1]=arguments[j];for(var R=0,z=k;R<z.length;R++)m1(I,z[R],!0);return I}({},i.defaultProps,S):S}}),Wp(y,function(){return".".concat(y.styledComponentId)}),s&&Ux(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function lh(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var ah=function(e){return Object.assign(e,{isCss:!0})};function Oe(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Kr(e)||ks(e))return ah(hr(lh(nc,Vi([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?hr(r):ah(hr(lh(r,t)))}function v1(e,t,n){if(n===void 0&&(n=Yi),!t)throw Yr(1,t);var r=function(i){for(var s=[],l=1;l<arguments.length;l++)s[l-1]=arguments[l];return e(t,n,Oe.apply(void 0,Vi([i],s,!1)))};return r.attrs=function(i){return v1(e,t,lt(lt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return v1(e,t,lt(lt({},n),i))},r}var Qx=function(e){return v1($L,e)},u=Qx;Dx.forEach(function(e){u[e]=Qx(e)});var CL=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=qx(t),va.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var s=i(La(hr(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,s)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&va.registerId(this.componentId+t);var s=this.componentId+t;this.isStatic?r.hasNameForId(s,s)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function EL(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Oe.apply(void 0,Vi([e],t,!1)),i="sc-global-".concat(Up(JSON.stringify(r))),s=new CL(r,i),l=new WeakMap,a=function(c){var d=y1(),p=Pn?void 0:Ze.useContext(js),f=l.get(d.styleSheet);if(f===void 0&&(f=d.styleSheet.allocateGSInstance(i),l.set(d.styleSheet,f)),(typeof window>"u"||!d.styleSheet.server)&&function($,x,L,y,S){if(s.isStatic)s.renderStyles($,G8,L,S);else{var I=lt(lt({},x),{theme:Nx(x,y,a.defaultProps)});s.renderStyles($,I,L,S)}}(f,c,d.styleSheet,p,d.stylis),!Pn){var h=Ze.useRef(!0);Ze.useLayoutEffect(function(){return h.current=!1,function(){h.current=!0,queueMicrotask(function(){h.current&&(s.removeStyles(f,d.styleSheet),typeof document<"u"&&document.querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function($){return $.remove()}))})}},[f,d.styleSheet])}if(Pn){var g=i+f,b=typeof window>"u"?d.styleSheet.getTag().getGroup(Si(g)):"";if(b){var v="".concat(i,"-").concat(f);return Ze.createElement("style",{key:v,"data-styled-global":i,precedence:"styled-components",href:v,children:b})}}return null};return Ze.memo(a)}function ke(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=La(Oe.apply(void 0,Vi([e],t,!1))),i=Up(r);return new Yx(i,r)}const PL={},ch=e=>{let t;const n=new Set,r=(p,f)=>{const h=typeof p=="function"?p(t):p;if(!Object.is(h,t)){const g=t;t=f??(typeof h!="object"||h===null)?h:Object.assign({},t,h),n.forEach(b=>b(t,g))}},i=()=>t,c={setState:r,getState:i,getInitialState:()=>d,subscribe:p=>(n.add(p),()=>n.delete(p)),destroy:()=>{(PL?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},d=t=e(r,i,c);return c},IL=e=>e?ch(e):ch;var Xx={exports:{}},Jx={},e3={exports:{}},t3={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gi=m;function TL(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var RL=typeof Object.is=="function"?Object.is:TL,zL=Gi.useState,ML=Gi.useEffect,AL=Gi.useLayoutEffect,_L=Gi.useDebugValue;function NL(e,t){var n=t(),r=zL({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return AL(function(){i.value=n,i.getSnapshot=t,Qc(i)&&s({inst:i})},[e,n,t]),ML(function(){return Qc(i)&&s({inst:i}),e(function(){Qc(i)&&s({inst:i})})},[e]),_L(n),n}function Qc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!RL(e,n)}catch{return!0}}function DL(e,t){return t()}var OL=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?DL:NL;t3.useSyncExternalStore=Gi.useSyncExternalStore!==void 0?Gi.useSyncExternalStore:OL;e3.exports=t3;var BL=e3.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rc=m,FL=BL;function HL(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var UL=typeof Object.is=="function"?Object.is:HL,VL=FL.useSyncExternalStore,WL=rc.useRef,KL=rc.useEffect,YL=rc.useMemo,GL=rc.useDebugValue;Jx.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=WL(null);if(s.current===null){var l={hasValue:!1,value:null};s.current=l}else l=s.current;s=YL(function(){function c(g){if(!d){if(d=!0,p=g,g=r(g),i!==void 0&&l.hasValue){var b=l.value;if(i(b,g))return f=b}return f=g}if(b=f,UL(p,g))return b;var v=r(g);return i!==void 0&&i(b,v)?(p=g,b):(p=g,f=v)}var d=!1,p,f,h=n===void 0?null:n;return[function(){return c(t())},h===null?void 0:function(){return c(h())}]},[t,n,r,i]);var a=VL(e,s[0],s[1]);return KL(function(){l.hasValue=!0,l.value=a},[a]),GL(a),a};Xx.exports=Jx;var ZL=Xx.exports;const qL=Ma(ZL),n3={},{useDebugValue:QL}=Ze,{useSyncExternalStoreWithSelector:XL}=qL;let uh=!1;const JL=e=>e;function e9(e,t=JL,n){(n3?"production":void 0)!=="production"&&n&&!uh&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),uh=!0);const r=XL(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return QL(r),r}const dh=e=>{(n3?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?IL(e):e,n=(r,i)=>e9(t,r,i);return Object.assign(n,t),n},to=e=>e?dh(e):dh;function Ce(){const e="https://localhost";if(String(e).trim()!=="")return String(e).replace(/\/$/,"")}function Kp(){const e=Ce();if(!e)throw new Error("VITE_API_BASE_URL이 필요합니다. .env에 백엔드 주소를 설정하세요.");return e}const ph=e=>e.filter(t=>!t.hidden);let Xc=class extends Error{constructor(t,n){super(t),this.status=n,this.name="HttpError"}};class t9{constructor(t){this.baseUrl=t}url(t){return`${this.baseUrl}${t.startsWith("/")?t:`/${t}`}`}async findAll(){const t=await fetch(this.url("/experts"));if(!t.ok)throw new Xc("GET /experts 실패",t.status);return ph(await t.json())}async findById(t){const n=await fetch(this.url(`/experts/${encodeURIComponent(t)}`));if(n.status===404)return null;if(!n.ok)throw new Xc("GET /experts/:id 실패",n.status);const r=await n.json();return r.hidden?null:r}async findByRegionId(t){const n=t==="all"?"":`?regionId=${encodeURIComponent(t)}`,r=await fetch(this.url(`/experts${n}`));if(!r.ok)throw new Xc("GET /experts?regionId 실패",r.status);return ph(await r.json())}}let Jc=null;function r3(){return Jc||(Jc=new t9(Kp())),Jc}const n9=()=>r3().findAll(),i3=e=>r3().findById(e);function Ss(){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Seoul"}).format(new Date)}function Bl(e){return!!(e&&/^\d{4}-\d{2}-\d{2}$/.test(e))}function b1(e,t=Ss()){var s,l;const n=e.kind??"program",r=(s=e.startDate)==null?void 0:s.trim(),i=(l=e.endDate)==null?void 0:l.trim();return n==="event"?Bl(r)&&Bl(i)?t>i?"past":"ongoing":e.status==="past"?"past":"ongoing":Bl(i)&&t>i?"past":"ongoing"}function r9(e){return(e??[]).map(t=>({...t,status:b1(t)}))}function ic(e){var t;return(t=e.programs)!=null&&t.length?{...e,programs:r9(e.programs)}:e}function i9(e,t=Ss()){var r;if(e.status==="past")return"완료";const n=(r=e.startDate)==null?void 0:r.trim();return Bl(n)&&t<n?"예정":"진행 중"}function o9(e,t){const n=e==null?void 0:e.trim(),r=t==null?void 0:t.trim();return n&&r?n===r?n:`${n} ~ ${r}`:n?`${n} ~`:r?`~ ${r}`:null}function s9(e=Ss()){const t=new Date(`${e}T12:00:00+09:00`),n=new Date(t);n.setDate(n.getDate()+6);const r=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Seoul"}).format(n);return{startDate:e,endDate:r}}function o3(e){const t=(e.programs??[]).filter(n=>!n.hidden);return ic({...e,programs:t})}function fh(e){return e.filter(t=>!t.hidden).map(o3)}let eu=class extends Error{constructor(t,n){super(t),this.status=n,this.name="HttpError"}};class l9{constructor(t){this.baseUrl=t}url(t){return`${this.baseUrl}${t.startsWith("/")?t:`/${t}`}`}async findAll(){const t=await fetch(this.url("/places"));if(!t.ok)throw new eu("GET /places 실패",t.status);return fh(await t.json())}async findById(t){const n=await fetch(this.url(`/places/${encodeURIComponent(t)}`));if(n.status===404)return null;if(!n.ok)throw new eu("GET /places/:id 실패",n.status);const r=await n.json();return r.hidden?null:o3(r)}async findByRegionId(t){const n=t==="all"?"":`?regionId=${encodeURIComponent(t)}`,r=await fetch(this.url(`/places${n}`));if(!r.ok)throw new eu("GET /places?regionId 실패",r.status);return fh(await r.json())}}let tu=null;function s3(){return tu||(tu=new l9(Kp())),tu}const a9=()=>s3().findAll(),l3=e=>s3().findById(e);class c9 extends Error{constructor(t,n){super(t),this.status=n,this.name="HttpError"}}class u9{constructor(t){this.baseUrl=t}url(t){return`${this.baseUrl}${t.startsWith("/")?t:`/${t}`}`}async findAll(){const t=await fetch(this.url("/regions"));if(!t.ok)throw new c9("GET /regions 실패",t.status);return t.json()}}let nu=null;function d9(){return nu||(nu=new u9(Kp())),nu}const p9=()=>d9().findAll();async function ru(e,t){try{return{ok:!0,value:await e()}}catch{return{ok:!1}}}const en=to(e=>({places:[],regions:[],experts:[],catalogReady:!1,catalogError:null,clearCatalogError:()=>e({catalogError:null}),hydrate:async()=>{if(!Ce()){e({places:[],regions:[],experts:[],catalogReady:!0,catalogError:null});return}e({catalogReady:!1,catalogError:null});const[t,n,r]=await Promise.all([ru(()=>a9()),ru(()=>p9()),ru(()=>n9())]),i=!t.ok||!n.ok||!r.ok;e({places:t.ok?t.value:[],regions:n.ok?n.value:[],experts:r.ok?r.value:[],catalogReady:!0,catalogError:i?"서버에서 정보를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.":null})}})),f9=u.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 16px;
  padding-top: calc(12px + env(safe-area-inset-top, 0px));
  background: ${({theme:e})=>e.colors.primary50};
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary200};
  color: ${({theme:e})=>e.colors.text900};
`,h9=u.p`
  margin: 0;
  flex: 1;
  min-width: 0;
  font-size: 0.92rem;
  line-height: 1.45;
`,g9=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,m9=u.button`
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
`,x9=u.button`
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
`,L9=()=>{const e=en(i=>i.catalogError),t=en(i=>i.catalogReady),n=en(i=>i.clearCatalogError),r=en(i=>i.hydrate);return e?o.jsxs(f9,{role:"alert","aria-live":"assertive",children:[o.jsx(h9,{children:e}),o.jsxs(g9,{children:[o.jsx(m9,{type:"button",disabled:!t,onClick:()=>void r(),children:"다시 시도"}),o.jsx(x9,{type:"button",onClick:n,"aria-label":"오류 안내 닫기",children:"×"})]})]}):null};let y9=0;const Jo=to((e,t)=>({toasts:[],show:(n,r="info",i=3200)=>{if(!n)return;const s=++y9;e(l=>({toasts:[...l.toasts,{id:s,message:n,variant:r}]})),i>0&&setTimeout(()=>t().dismiss(s),i)},dismiss:n=>e(r=>({toasts:r.toasts.filter(i=>i.id!==n)}))})),Ye={error:e=>Jo.getState().show(e,"error"),success:e=>Jo.getState().show(e,"success"),info:e=>Jo.getState().show(e,"info")},v9=ke`
  from { opacity: 0; transform: translateY(-12px); }
  to { opacity: 1; transform: translateY(0); }
`,b9=u.div`
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
`;function w1(e){return e==="error"?{bg:"rgba(127, 29, 29, 0.96)",border:"#b91c1c",icon:"⚠️"}:e==="success"?{bg:"rgba(6, 78, 59, 0.96)",border:"#059669",icon:"✓"}:{bg:"rgba(24, 24, 27, 0.96)",border:"#3f3f46",icon:"ℹ️"}}const w9=u.div`
  pointer-events: auto;
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 12px 14px;
  border-radius: 12px;
  font-size: 14px;
  line-height: 1.4;
  color: #fff;
  background: ${({$variant:e})=>w1(e).bg};
  border: 1px solid ${({$variant:e})=>w1(e).border};
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(8px);
  animation: ${v9} 0.22s ease;
  cursor: pointer;

  .toast-icon {
    flex-shrink: 0;
    font-size: 14px;
  }
  .toast-msg {
    flex: 1;
    word-break: break-word;
  }
`;function k9(){const e=Jo(n=>n.toasts),t=Jo(n=>n.dismiss);return e.length===0?null:o.jsx(b9,{"aria-live":"polite",children:e.map(n=>o.jsxs(w9,{$variant:n.variant,role:"alert",onClick:()=>t(n.id),children:[o.jsx("span",{className:"toast-icon",children:w1(n.variant).icon}),o.jsx("span",{className:"toast-msg",children:n.message})]},n.id))})}/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $s(){return $s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$s.apply(this,arguments)}var _r;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(_r||(_r={}));const hh="popstate";function j9(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:l,hash:a}=r.location;return k1("",{pathname:s,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ba(i)}return $9(t,n,null,e)}function it(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Yp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function S9(){return Math.random().toString(36).substr(2,8)}function gh(e,t){return{usr:e.state,key:e.key,idx:t}}function k1(e,t,n,r){return n===void 0&&(n=null),$s({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ms(t):t,{state:n,key:t&&t.key||r||S9()})}function ba(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ms(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function $9(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,l=i.history,a=_r.Pop,c=null,d=p();d==null&&(d=0,l.replaceState($s({},l.state,{idx:d}),""));function p(){return(l.state||{idx:null}).idx}function f(){a=_r.Pop;let $=p(),x=$==null?null:$-d;d=$,c&&c({action:a,location:v.location,delta:x})}function h($,x){a=_r.Push;let L=k1(v.location,$,x);d=p()+1;let y=gh(L,d),S=v.createHref(L);try{l.pushState(y,"",S)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(S)}s&&c&&c({action:a,location:v.location,delta:1})}function g($,x){a=_r.Replace;let L=k1(v.location,$,x);d=p();let y=gh(L,d),S=v.createHref(L);l.replaceState(y,"",S),s&&c&&c({action:a,location:v.location,delta:0})}function b($){let x=i.location.origin!=="null"?i.location.origin:i.location.href,L=typeof $=="string"?$:ba($);return L=L.replace(/ $/,"%20"),it(x,"No window.location.(origin|href) available to create URL for href: "+L),new URL(L,x)}let v={get action(){return a},get location(){return e(i,l)},listen($){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(hh,f),c=$,()=>{i.removeEventListener(hh,f),c=null}},createHref($){return t(i,$)},createURL:b,encodeLocation($){let x=b($);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:h,replace:g,go($){return l.go($)}};return v}var mh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(mh||(mh={}));function C9(e,t,n){return n===void 0&&(n="/"),E9(e,t,n)}function E9(e,t,n,r){let i=typeof t=="string"?Ms(t):t,s=Zi(i.pathname||"/",n);if(s==null)return null;let l=a3(e);P9(l);let a=null;for(let c=0;a==null&&c<l.length;++c){let d=B9(s);a=D9(l[c],d)}return a}function a3(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,l,a)=>{let c={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:l,route:s};c.relativePath.startsWith("/")&&(it(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let d=gr([r,c.relativePath]),p=n.concat(c);s.children&&s.children.length>0&&(it(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),a3(s.children,t,p,d)),!(s.path==null&&!s.index)&&t.push({path:d,score:_9(d,s.index),routesMeta:p})};return e.forEach((s,l)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,l);else for(let c of c3(s.path))i(s,l,c)}),t}function c3(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let l=c3(r.join("/")),a=[];return a.push(...l.map(c=>c===""?s:[s,c].join("/"))),i&&a.push(...l),a.map(c=>e.startsWith("/")&&c===""?"/":c)}function P9(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:N9(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const I9=/^:[\w-]+$/,T9=3,R9=2,z9=1,M9=10,A9=-2,xh=e=>e==="*";function _9(e,t){let n=e.split("/"),r=n.length;return n.some(xh)&&(r+=A9),t&&(r+=R9),n.filter(i=>!xh(i)).reduce((i,s)=>i+(I9.test(s)?T9:s===""?z9:M9),r)}function N9(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function D9(e,t,n){let{routesMeta:r}=e,i={},s="/",l=[];for(let a=0;a<r.length;++a){let c=r[a],d=a===r.length-1,p=s==="/"?t:t.slice(s.length)||"/",f=j1({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},p),h=c.route;if(!f)return null;Object.assign(i,f.params),l.push({params:i,pathname:gr([s,f.pathname]),pathnameBase:W9(gr([s,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(s=gr([s,f.pathnameBase]))}return l}function j1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=O9(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],l=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((d,p,f)=>{let{paramName:h,isOptional:g}=p;if(h==="*"){let v=a[f]||"";l=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const b=a[f];return g&&!b?d[h]=void 0:d[h]=(b||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:l,pattern:e}}function O9(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Yp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,c)=>(r.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function B9(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Yp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Zi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const F9=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,H9=e=>F9.test(e);function U9(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ms(e):e,s;if(n)if(H9(n))s=n;else{if(n.includes("//")){let l=n;n=n.replace(/\/\/+/g,"/"),Yp(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?s=Lh(n.substring(1),"/"):s=Lh(n,t)}else s=t;return{pathname:s,search:K9(r),hash:Y9(i)}}function Lh(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function iu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function V9(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Gp(e,t){let n=V9(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Zp(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ms(e):(i=$s({},e),it(!i.pathname||!i.pathname.includes("?"),iu("?","pathname","search",i)),it(!i.pathname||!i.pathname.includes("#"),iu("#","pathname","hash",i)),it(!i.search||!i.search.includes("#"),iu("#","search","hash",i)));let s=e===""||i.pathname==="",l=s?"/":i.pathname,a;if(l==null)a=n;else{let f=t.length-1;if(!r&&l.startsWith("..")){let h=l.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}a=f>=0?t[f]:"/"}let c=U9(i,a),d=l&&l!=="/"&&l.endsWith("/"),p=(s||l===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||p)&&(c.pathname+="/"),c}const gr=e=>e.join("/").replace(/\/\/+/g,"/"),W9=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),K9=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Y9=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function G9(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const u3=["post","put","patch","delete"];new Set(u3);const Z9=["get",...u3];new Set(Z9);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wa(){return wa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wa.apply(this,arguments)}const oc=m.createContext(null),d3=m.createContext(null),Yn=m.createContext(null),qp=m.createContext(null),Tn=m.createContext({outlet:null,matches:[],isDataRoute:!1}),p3=m.createContext(null);function q9(e,t){let{relative:n}=t===void 0?{}:t;no()||it(!1);let{basename:r,navigator:i}=m.useContext(Yn),{hash:s,pathname:l,search:a}=sc(e,{relative:n}),c=l;return r!=="/"&&(c=l==="/"?r:gr([r,l])),i.createHref({pathname:c,search:a,hash:s})}function no(){return m.useContext(qp)!=null}function Gn(){return no()||it(!1),m.useContext(qp).location}function f3(e){m.useContext(Yn).static||m.useLayoutEffect(e)}function ft(){let{isDataRoute:e}=m.useContext(Tn);return e?dy():Q9()}function Q9(){no()||it(!1);let e=m.useContext(oc),{basename:t,future:n,navigator:r}=m.useContext(Yn),{matches:i}=m.useContext(Tn),{pathname:s}=Gn(),l=JSON.stringify(Gp(i,n.v7_relativeSplatPath)),a=m.useRef(!1);return f3(()=>{a.current=!0}),m.useCallback(function(d,p){if(p===void 0&&(p={}),!a.current)return;if(typeof d=="number"){r.go(d);return}let f=Zp(d,JSON.parse(l),s,p.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:gr([t,f.pathname])),(p.replace?r.replace:r.push)(f,p.state,p)},[t,r,l,s,e])}const X9=m.createContext(null);function J9(e){let t=m.useContext(Tn).outlet;return t&&m.createElement(X9.Provider,{value:e},t)}function As(){let{matches:e}=m.useContext(Tn),t=e[e.length-1];return t?t.params:{}}function sc(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=m.useContext(Yn),{matches:i}=m.useContext(Tn),{pathname:s}=Gn(),l=JSON.stringify(Gp(i,r.v7_relativeSplatPath));return m.useMemo(()=>Zp(e,JSON.parse(l),s,n==="path"),[e,l,s,n])}function ey(e,t){return ty(e)}function ty(e,t,n,r){no()||it(!1);let{navigator:i}=m.useContext(Yn),{matches:s}=m.useContext(Tn),l=s[s.length-1],a=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let d=Gn(),p;p=d;let f=p.pathname||"/",h=f;if(c!=="/"){let v=c.replace(/^\//,"").split("/");h="/"+f.replace(/^\//,"").split("/").slice(v.length).join("/")}let g=C9(e,{pathname:h});return sy(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:gr([c,i.encodeLocation?i.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?c:gr([c,i.encodeLocation?i.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),s,n,r)}function ny(){let e=uy(),t=G9(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},t),n?m.createElement("pre",{style:i},n):null,null)}const ry=m.createElement(ny,null);class iy extends m.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?m.createElement(Tn.Provider,{value:this.props.routeContext},m.createElement(p3.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function oy(e){let{routeContext:t,match:n,children:r}=e,i=m.useContext(oc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),m.createElement(Tn.Provider,{value:t},r)}function sy(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let p=l.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);p>=0||it(!1),l=l.slice(0,Math.min(l.length,p+1))}let c=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<l.length;p++){let f=l[p];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(d=p),f.route.id){let{loaderData:h,errors:g}=n,b=f.route.loader&&h[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||b){c=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((p,f,h)=>{let g,b=!1,v=null,$=null;n&&(g=a&&f.route.id?a[f.route.id]:void 0,v=f.route.errorElement||ry,c&&(d<0&&h===0?(py("route-fallback"),b=!0,$=null):d===h&&(b=!0,$=f.route.hydrateFallbackElement||null)));let x=t.concat(l.slice(0,h+1)),L=()=>{let y;return g?y=v:b?y=$:f.route.Component?y=m.createElement(f.route.Component,null):f.route.element?y=f.route.element:y=p,m.createElement(oy,{match:f,routeContext:{outlet:p,matches:x,isDataRoute:n!=null},children:y})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?m.createElement(iy,{location:n.location,revalidation:n.revalidation,component:v,error:g,children:L(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):L()},null)}var h3=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(h3||{}),g3=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(g3||{});function ly(e){let t=m.useContext(oc);return t||it(!1),t}function ay(e){let t=m.useContext(d3);return t||it(!1),t}function cy(e){let t=m.useContext(Tn);return t||it(!1),t}function m3(e){let t=cy(),n=t.matches[t.matches.length-1];return n.route.id||it(!1),n.route.id}function uy(){var e;let t=m.useContext(p3),n=ay(g3.UseRouteError),r=m3();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function dy(){let{router:e}=ly(h3.UseNavigateStable),t=m3(),n=m.useRef(!1);return f3(()=>{n.current=!0}),m.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,wa({fromRouteId:t},s)))},[e,t])}const yh={};function py(e,t,n){yh[e]||(yh[e]=!0)}function fy(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Qp(e){let{to:t,replace:n,state:r,relative:i}=e;no()||it(!1);let{future:s,static:l}=m.useContext(Yn),{matches:a}=m.useContext(Tn),{pathname:c}=Gn(),d=ft(),p=Zp(t,Gp(a,s.v7_relativeSplatPath),c,i==="path"),f=JSON.stringify(p);return m.useEffect(()=>d(JSON.parse(f),{replace:n,state:r,relative:i}),[d,f,i,n,r]),null}function Xp(e){return J9(e.context)}function hy(e){let{basename:t="/",children:n=null,location:r,navigationType:i=_r.Pop,navigator:s,static:l=!1,future:a}=e;no()&&it(!1);let c=t.replace(/^\/*/,"/"),d=m.useMemo(()=>({basename:c,navigator:s,static:l,future:wa({v7_relativeSplatPath:!1},a)}),[c,a,s,l]);typeof r=="string"&&(r=Ms(r));let{pathname:p="/",search:f="",hash:h="",state:g=null,key:b="default"}=r,v=m.useMemo(()=>{let $=Zi(p,c);return $==null?null:{location:{pathname:$,search:f,hash:h,state:g,key:b},navigationType:i}},[c,p,f,h,g,b,i]);return v==null?null:m.createElement(Yn.Provider,{value:d},m.createElement(qp.Provider,{children:n,value:v}))}new Promise(()=>{});/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ka(){return ka=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ka.apply(this,arguments)}function x3(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function gy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function my(e,t){return e.button===0&&(!t||t==="_self")&&!gy(e)}function S1(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function xy(e,t){let n=S1(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(s=>{n.append(i,s)})}),n}const Ly=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],yy=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],vy="6";try{window.__reactRouterVersion=vy}catch{}const by=m.createContext({isTransitioning:!1}),wy="startTransition",vh=m6[wy];function ky(e){let{basename:t,children:n,future:r,window:i}=e,s=m.useRef();s.current==null&&(s.current=j9({window:i,v5Compat:!0}));let l=s.current,[a,c]=m.useState({action:l.action,location:l.location}),{v7_startTransition:d}=r||{},p=m.useCallback(f=>{d&&vh?vh(()=>c(f)):c(f)},[c,d]);return m.useLayoutEffect(()=>l.listen(p),[l,p]),m.useEffect(()=>fy(r),[r]),m.createElement(hy,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}const jy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Sy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ro=m.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:l,state:a,target:c,to:d,preventScrollReset:p,viewTransition:f}=t,h=x3(t,Ly),{basename:g}=m.useContext(Yn),b,v=!1;if(typeof d=="string"&&Sy.test(d)&&(b=d,jy))try{let y=new URL(window.location.href),S=d.startsWith("//")?new URL(y.protocol+d):new URL(d),I=Zi(S.pathname,g);S.origin===y.origin&&I!=null?d=I+S.search+S.hash:v=!0}catch{}let $=q9(d,{relative:i}),x=Cy(d,{replace:l,state:a,target:c,preventScrollReset:p,relative:i,viewTransition:f});function L(y){r&&r(y),y.defaultPrevented||x(y)}return m.createElement("a",ka({},h,{href:b||$,onClick:v||s?r:L,ref:n,target:c}))}),L3=m.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:l=!1,style:a,to:c,viewTransition:d,children:p}=t,f=x3(t,yy),h=sc(c,{relative:f.relative}),g=Gn(),b=m.useContext(d3),{navigator:v,basename:$}=m.useContext(Yn),x=b!=null&&Ey(h)&&d===!0,L=v.encodeLocation?v.encodeLocation(h).pathname:h.pathname,y=g.pathname,S=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;i||(y=y.toLowerCase(),S=S?S.toLowerCase():null,L=L.toLowerCase()),S&&$&&(S=Zi(S,$)||S);const I=L!=="/"&&L.endsWith("/")?L.length-1:L.length;let k=y===L||!l&&y.startsWith(L)&&y.charAt(I)==="/",j=S!=null&&(S===L||!l&&S.startsWith(L)&&S.charAt(L.length)==="/"),R={isActive:k,isPending:j,isTransitioning:x},z=k?r:void 0,T;typeof s=="function"?T=s(R):T=[s,k?"active":null,j?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let P=typeof a=="function"?a(R):a;return m.createElement(ro,ka({},f,{"aria-current":z,className:T,ref:n,style:P,to:c,viewTransition:d}),typeof p=="function"?p(R):p)});var $1;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})($1||($1={}));var bh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(bh||(bh={}));function $y(e){let t=m.useContext(oc);return t||it(!1),t}function Cy(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:l,viewTransition:a}=t===void 0?{}:t,c=ft(),d=Gn(),p=sc(e,{relative:l});return m.useCallback(f=>{if(my(f,n)){f.preventDefault();let h=r!==void 0?r:ba(d)===ba(p);c(e,{replace:h,state:i,preventScrollReset:s,relative:l,viewTransition:a})}},[d,c,p,r,i,n,e,s,l,a])}function y3(e){let t=m.useRef(S1(e)),n=m.useRef(!1),r=Gn(),i=m.useMemo(()=>xy(r.search,n.current?null:t.current),[r.search]),s=ft(),l=m.useCallback((a,c)=>{const d=S1(typeof a=="function"?a(i):a);n.current=!0,s("?"+d,c)},[s,i]);return[i,l]}function Ey(e,t){t===void 0&&(t={});let n=m.useContext(by);n==null&&it(!1);let{basename:r}=$y($1.useViewTransitionState),i=sc(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=Zi(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=Zi(n.nextLocation.pathname,r)||n.nextLocation.pathname;return j1(i.pathname,l)!=null||j1(i.pathname,s)!=null}const zi="/assets/logo-CsQHSiKo.png",Py=u.header`
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
`,Iy=u(ro)`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: 2px;
    border-radius: ${({theme:e})=>e.radii.md};
  }
`,Ty=u.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
`,Ry=u.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`,zy=u.h1`
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({theme:e})=>e.colors.primary600};
  margin: 0;
  line-height: 1.3;
`,My=u.p`
  font-size: 0.8rem;
  color: ${({theme:e})=>e.colors.primary400};
  margin: 2px 0 0;
`,Ay=u.div`
  width: 48px;
  flex-shrink: 0;
`,_y=()=>o.jsxs(Py,{children:[o.jsx(Iy,{to:"/",children:o.jsx(Ty,{src:zi,alt:"명상 웰니스 지도 로고"})}),o.jsxs(Ry,{children:[o.jsx(zy,{children:"명상 웰니스 지도"}),o.jsx(My,{children:"국내 명상지를 찾아보세요"})]}),o.jsx(Ay,{})]}),Ny=u.nav`
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
`,ou=u(L3)`
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
`,Dy=u(ro)`
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
`,Oy=()=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),o.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),By=()=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),o.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"}),o.jsx("line",{x1:"8",y1:"6",x2:"16",y2:"6"}),o.jsx("line",{x1:"8",y1:"10",x2:"16",y2:"10"})]}),Fy=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),Hy=()=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),o.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),Uy=()=>{const{pathname:e}=Gn(),t=e.startsWith("/meditation/map")||e.startsWith("/meditation/region")||e.startsWith("/blog");return o.jsxs(Ny,{role:"navigation","aria-label":"하단 메뉴",children:[o.jsxs(ou,{to:"/",end:!0,children:[o.jsx(Oy,{}),o.jsx("span",{children:"홈"})]}),o.jsxs(Dy,{to:"/meditation/map",$active:t,children:[o.jsx(By,{}),o.jsx("span",{children:"지도"})]}),o.jsxs(ou,{to:"/favorites",children:[o.jsx(Fy,{}),o.jsx("span",{children:"찜"})]}),o.jsxs(ou,{to:"/profile",children:[o.jsx(Hy,{}),o.jsx("span",{children:"마이"})]})]})},Vy=u.div`
  min-height: 100vh;
  background: ${({theme:e})=>e.colors.warmCream};
`,Wy=u.main`
  padding: 0 20px calc(56px + env(safe-area-inset-bottom, 0px) + 24px);
  background: ${({theme:e})=>e.colors.warmCream};

  @media (max-width: 768px) {
    padding: 0 12px calc(56px + env(safe-area-inset-bottom, 0px) + 24px);
  }
`,Ky=()=>{const{pathname:e}=Gn(),t=e==="/"||e==="/meditation";return o.jsxs(Vy,{children:[t&&o.jsx(_y,{}),o.jsx(Wy,{children:o.jsx(Xp,{})}),o.jsx(Uy,{})]})},Yy=u.div`
  background: ${({theme:e})=>e.colors.white};
  padding: 20px;
  border-radius: ${({theme:e})=>e.radii.lg};
  box-shadow: ${({theme:e})=>e.shadow.soft};
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid ${({theme:e})=>e.colors.primary100};
`,il=u.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ol=u.span`
  font-size: 1.1rem;
  font-weight: 600;
`,Gy=u.select`
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid ${({theme:e})=>e.colors.border200};
  font-size: 1.1rem;
`,wh=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,kh=u.button`
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
`,Zy=u.button`
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
`,qy=u.input`
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
`,Qy=u.span`
  font-size: 0.88rem;
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.4;
`,ja=({filters:e,availableTags:t,onChangeKeyword:n,onChangeCategory:r,onToggleTag:i,onChangeSortBy:s,onReset:l})=>{const a=[{label:"전체",value:"all"},{label:"템플스테이",value:"템플스테이"},{label:"명상센터",value:"명상센터"},{label:"프리랜서(공간없음)",value:"프리랜서(공간없음)"},{label:"힐링명상",value:"힐링명상"},{label:"기타",value:"기타"}];return o.jsxs(Yy,{children:[o.jsxs(il,{children:[o.jsx(ol,{children:"검색"}),o.jsx(qy,{type:"search",enterKeyHint:"search",autoComplete:"off",placeholder:"이름, 주소, 기관명, 태그, 소개글…",value:e.keyword,onChange:c=>n(c.target.value),"aria-label":"검색어"}),o.jsx(Qy,{children:"띄어쓰기로 여러 단어를 넣으면 모두 포함되는 장소만 보여요."})]}),o.jsxs(il,{children:[o.jsx(ol,{children:"카테고리"}),o.jsx(wh,{children:a.map(c=>o.jsx(kh,{type:"button",$active:e.category===c.value,onClick:()=>r(c.value),children:c.label},c.value))})]}),o.jsxs(il,{children:[o.jsx(ol,{children:"해시태그"}),o.jsx(wh,{children:t.map(c=>o.jsxs(kh,{type:"button",$active:e.tags.includes(c),onClick:()=>i(c),children:["#",c]},c))})]}),o.jsxs(il,{children:[o.jsx(ol,{children:"정렬"}),o.jsxs(Gy,{value:e.sortBy,onChange:c=>s(c.target.value),children:[o.jsx("option",{value:"recommend",children:"추천순"}),o.jsx("option",{value:"name",children:"이름순"})]})]}),o.jsx(Zy,{type:"button",onClick:l,children:"필터 초기화"})]})},Xy=u.form`
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

  ${({$layout:e})=>e==="main"?Oe`
          width: 75%;
          max-width: 420px;
          margin-bottom: 20px;

          &:focus-within {
            width: 100%;
            max-width: 100%;
            border-color: ${({theme:t})=>t.colors.primary400};
            box-shadow: 0 4px 16px rgba(75, 0, 130, 0.12);
          }
        `:Oe`
          width: 100%;
          max-width: 100%;
          margin-bottom: 16px;

          &:focus-within {
            border-color: ${({theme:t})=>t.colors.primary400};
            box-shadow: 0 4px 16px rgba(75, 0, 130, 0.1);
          }
        `}
`,Jy=u.span`
  color: ${({theme:e})=>e.colors.primary600};
  display: grid;
  place-items: center;
  flex-shrink: 0;

  svg {
    width: 18px;
    height: 18px;
  }
`,ev=u.input`
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
`,tv=u.button`
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
`,Fl=({value:e,onChange:t,placeholder:n,layout:r="region",id:i,"aria-label":s})=>{const l=a=>{a.preventDefault()};return o.jsxs(Xy,{$layout:r,onSubmit:l,children:[o.jsx(Jy,{"aria-hidden":!0,children:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("circle",{cx:"11",cy:"11",r:"7"}),o.jsx("line",{x1:"16.65",y1:"16.65",x2:"21",y2:"21"})]})}),o.jsx(ev,{id:i,type:"search",enterKeyHint:"search",autoComplete:"off",placeholder:n,value:e,onChange:a=>t(a.target.value),"aria-label":s??"검색어"}),e?o.jsx(tv,{type:"button",onClick:()=>t(""),"aria-label":"검색어 삭제",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"18",height:"18",children:o.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})}):null]})},nv=480,rv=360,iv=128;function Jp(e,t){try{const n=new URL(e);return n.hostname.includes("images.unsplash.com")?(n.searchParams.set("w",String(t)),n.searchParams.set("q","70"),n.searchParams.has("auto")||n.searchParams.set("auto","format"),n.searchParams.has("fit")||n.searchParams.set("fit","crop"),n.toString()):e}catch{return e}}function v3(e){if(e==null||!String(e).trim())return"";const t=String(e).trim();return Jp(t,nv)}function ov(e){if(e==null||!String(e).trim())return"";const t=String(e).trim();return Jp(t,rv)}function sv(e){if(e==null||!String(e).trim())return"";const t=String(e).trim();return Jp(t,iv)}const Sa=[{id:"KR-11",minLat:37.41,maxLat:37.7,minLng:126.75,maxLng:127.2},{id:"KR-50",minLat:36.4,maxLat:36.62,minLng:127.18,maxLng:127.32},{id:"KR-30",minLat:36.2,maxLat:36.55,minLng:127.2,maxLng:127.55},{id:"KR-27",minLat:35.7,maxLat:36.04,minLng:128.2,maxLng:128.78},{id:"KR-26",minLat:34.88,maxLat:35.32,minLng:128.8,maxLng:129.3},{id:"KR-31",minLat:35.38,maxLat:35.78,minLng:128.9,maxLng:129.5},{id:"KR-29",minLat:35,maxLat:35.3,minLng:126.5,maxLng:127},{id:"KR-28",minLat:37.2,maxLat:37.7,minLng:126.2,maxLng:126.9},{id:"KR-49",minLat:33,maxLat:33.6,minLng:126,maxLng:127},{id:"KR-41",minLat:36.9,maxLat:38,minLng:126.5,maxLng:127.5},{id:"KR-42",minLat:37,maxLat:38.5,minLng:127,maxLng:131},{id:"KR-43",minLat:36,maxLat:37.1,minLng:127,maxLng:128.4},{id:"KR-44",minLat:35.7,maxLat:36.6,minLng:125.5,maxLng:127.1},{id:"KR-45",minLat:35,maxLat:36,minLng:126.4,maxLng:128},{id:"KR-46",minLat:33,maxLat:35.2,minLng:125,maxLng:128},{id:"KR-47",minLat:35.5,maxLat:38,minLng:127,maxLng:130},{id:"KR-48",minLat:34.4,maxLat:35.5,minLng:127.4,maxLng:130}],lv=(e,t)=>{if(!Number.isFinite(e)||!Number.isFinite(t)||e<32.5||e>38.8||t<123||t>132)return null;for(const n of Sa)if(e>=n.minLat&&e<=n.maxLat&&t>=n.minLng&&t<=n.maxLng)return n.id;return null},av={id:"all",name:"전체",slug:"all"},Wn=e=>e==="all"?av:en.getState().regions.find(t=>t.id===e),cv=(e,t=8)=>[...e].sort((n,r)=>{const i=(r.viewCount??0)-(n.viewCount??0);return i!==0?i:String(n.id).localeCompare(String(r.id))}).slice(0,t),b3=e=>{const t=new Set;return e.forEach(n=>{n.hashtags.forEach(r=>t.add(r))}),Array.from(t).filter(n=>n!=="템플스테이").sort()},uv=e=>e.hashtags.some(t=>/프리랜서|코칭|개인지도|1:1/.test(t))?"프리랜서(공간없음)":e.hasTempleStay?"템플스테이":e.hashtags.includes("요가")||e.name.includes("요가")?"요가센터":"명상센터",$a=(e,t)=>e.filter(n=>{var r;if(t.category&&t.category!=="all"){const i=uv(n);if(t.category==="힐링명상"){if(i==="요가센터")return!1}else if(i!==t.category)return!1}if(t.tags.length>0&&!t.tags.some(s=>[...n.hashtags,...n.themes].includes(s)))return!1;if(t.keyword.trim().length>0){const i=t.keyword.trim().toLowerCase().split(/\s+/).filter(d=>d.length>0),s=(n.detailSections??[]).map(d=>`${d.title} ${d.body}`).join(" "),l=(n.programs??[]).map(d=>d.title).join(" "),a=[n.name,n.shortDescription,n.description,n.address,(r=n.organization)==null?void 0:r.name,n.duration,n.admissionFee,n.venueKind,l,...n.hashtags,...n.themes,s].filter(Boolean).join(" ").toLowerCase();if(!i.every(d=>a.includes(d)))return!1}return!0}),w3=(e,t)=>t==="name"?[...e].sort((n,r)=>n.name.localeCompare(r.name,"ko")):e,dv=["meditation-access-token","meditation-user-email","meditation-user-role"];function jh(){if(!(typeof window>"u"))for(const e of dv)localStorage.removeItem(e),document.cookie=`${e}=; path=/; max-age=0; SameSite=Lax`}const pv=new Set(["ADMIN","DEV","EMPLOYEE"]),Sh="__http_only_cookie_session__",ut=to((e,t)=>({accessToken:null,email:null,role:null,authReady:!1,bootstrapAuth:async()=>{jh();const n=Ce();if(!n){e({accessToken:null,email:null,role:null,authReady:!0});return}try{const r=await fetch(`${n}/me`,{credentials:"include"});if(r.ok){const i=await r.json(),s=i.email??i.username??"",l=i.role??"MEMBER";e({accessToken:Sh,email:s||null,role:l,authReady:!0});return}}catch{}e({accessToken:null,email:null,role:null,authReady:!0})},setSession:async()=>{e({accessToken:Sh,email:null,role:null,authReady:!1}),await t().bootstrapAuth()},logout:async()=>{const n=Ce();if(n)try{await fetch(`${n}/auth/logout`,{method:"POST",credentials:"include"})}catch{}jh(),e({accessToken:null,email:null,role:null,authReady:!0})},isStaff:()=>pv.has(t().role??""),isAuthenticated:()=>!!t().accessToken,authHeader:()=>{}}));async function me(e,t={}){const n=Ce();if(!n)throw new Error("VITE_API_BASE_URL 미설정");const r=new Headers(t.headers);t.body&&!r.has("Content-Type")&&!(t.body instanceof FormData)&&r.set("Content-Type","application/json");const i=e.startsWith("/")?`${n}${e}`:`${n}/${e}`;return fetch(i,{...t,headers:r,credentials:"include"})}const k3="meditation-favorites",fv=()=>{if(typeof window>"u")return[];try{const e=localStorage.getItem(k3);if(!e)return[];const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}},sl=e=>{if(!(typeof window>"u"))try{localStorage.setItem(k3,JSON.stringify(e))}catch{}},mr=to((e,t)=>({favorites:fv(),replaceAll:n=>{const r=[...new Set(n)];sl(r),e({favorites:r})},pullFromServer:async()=>{if(!(!Ce()||!ut.getState().isAuthenticated()))try{const n=await me("/me/favorites");if(!n.ok)return;const r=await n.json(),i=Array.isArray(r.placeIds)?r.placeIds:[];sl(i),e({favorites:i})}catch{}},pushToServer:async n=>{if(!(!Ce()||!ut.getState().isAuthenticated()))try{const r=await me("/me/favorites",{method:"PUT",body:JSON.stringify({placeIds:n})});if(!r.ok)return;const i=await r.json(),s=Array.isArray(i.placeIds)?i.placeIds:n;sl(s),e({favorites:s})}catch{}},toggleFavorite:n=>{const r=t(),s=r.favorites.includes(n)?r.favorites.filter(l=>l!==n):[...r.favorites,n];sl(s),e({favorites:s}),Ce()&&ut.getState().isAuthenticated()&&t().pushToServer(s)},isFavorite:n=>t().favorites.includes(n)})),hv=u.button`
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
`,gv=u.span`
  position: relative;
  display: inline-flex;
  width: 19px;
  height: 19px;
`,mv=u.svg`
  position: absolute;
  inset: 0;
  width: 19px;
  height: 19px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  overflow: visible;
`,xv=u.svg`
  position: absolute;
  inset: 0;
  width: 19px;
  height: 19px;
  fill: currentColor;
  stroke: none;
  pointer-events: none;
  opacity: ${({$active:e})=>e?1:0};
  transition: opacity 0.35s ease;
`,$h="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",lc=({placeId:e})=>{const{isFavorite:t,toggleFavorite:n}=mr(),r=t(e),i=s=>{s.preventDefault(),s.stopPropagation(),n(e)};return o.jsx(hv,{type:"button",$active:r,onClick:i,"aria-label":r?"찜 해제":"찜하기",children:o.jsxs(gv,{children:[o.jsx(mv,{viewBox:"0 0 24 24",children:o.jsx("path",{d:$h})}),o.jsx(xv,{viewBox:"0 0 24 24",$active:r,children:o.jsx("path",{d:$h})})]})})},Lv=u.div`
  flex-shrink: 0;
  width: 200px;
  position: relative;
`,yv=u(ro)`
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
`,vv=u.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  z-index: 2;
`,bv=u.div`
  width: 100%;
  height: 120px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,wv=u.div`
  padding: 12px;
`,kv=u.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 6px;
  color: ${({theme:e})=>e.colors.text900};
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,jv=u.span`
  font-size: 0.85rem;
  color: ${({theme:e})=>e.colors.text700};
`,Sv=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 6px;
`,$v=u.span`
  display: inline-block;
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.primary600};
  background: ${({theme:e})=>e.colors.primary50};
  padding: 2px 8px;
  border-radius: ${({theme:e})=>e.radii.pill};
`,Cv=({place:e})=>{const t=Wn(e.regionId);return o.jsxs(Lv,{children:[o.jsx(vv,{children:o.jsx(lc,{placeId:e.id})}),o.jsxs(yv,{to:`/meditation/place/${e.id}`,children:[o.jsx(bv,{children:o.jsx("img",{src:v3(e.thumbnailUrl),alt:`${e.name} 썸네일`,loading:"lazy",decoding:"async",sizes:"200px"})}),o.jsxs(wv,{children:[o.jsx(kv,{children:e.name}),o.jsx(jv,{children:(t==null?void 0:t.name)??e.regionId}),e.hashtags&&e.hashtags.length>0&&o.jsx(Sv,{children:e.hashtags.slice(0,2).map(n=>o.jsx($v,{children:n},n))})]})]})]})},Ev=u.article`
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
`,Pv=u(ro)`
  display: block;
  text-decoration: none;
  color: inherit;

  @media (min-width: 961px) {
    display: flex;
  }
`,Iv=u.div`
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
`,Tv=u.div`
  padding: 16px 18px;

  @media (min-width: 961px) {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
  }
`,Rv=u.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 10px;
  color: ${({theme:e})=>e.colors.text900};
`,zv=u.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 12px;
  margin-bottom: 10px;
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.text700};
`,Mv=u.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`,Av=u.div`
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
`,_v=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Nv=u.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,es=({place:e})=>{const t=Wn(e.regionId);return o.jsx(Ev,{children:o.jsxs(Pv,{to:`/meditation/place/${e.id}`,children:[o.jsx(Iv,{children:o.jsx("img",{src:v3(e.thumbnailUrl),alt:`${e.name} 썸네일`,loading:"lazy",decoding:"async",sizes:"(min-width: 961px) 220px, 100vw"})}),o.jsxs(Tv,{children:[o.jsx(Rv,{children:e.name}),o.jsx(zv,{children:o.jsxs(Mv,{children:[o.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),(t==null?void 0:t.name)??e.regionId]})}),o.jsxs(_v,{children:[o.jsx(Av,{children:e.hashtags.slice(0,4).map(n=>o.jsx("span",{children:n},n))}),o.jsx(Nv,{children:o.jsx(lc,{placeId:e.id})})]})]})]})})},Dv=`<svg width="386" height="630" viewBox="0 0 386 630" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`,Ov=u.div`
  cursor: pointer;
  overflow: hidden;
  ${({$maxMapHeight:e})=>e?Oe`
          max-height: ${e};
        `:void 0}

  svg {
    width: 100%;
    height: auto;
    max-width: 100%;
    display: block;
    margin: 0 auto;
    pointer-events: none;
    ${({$maxMapHeight:e})=>e?Oe`
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
`,_s=({activeRegionId:e,activeRegionIds:t,onSelectRegion:n,maxMapHeight:r})=>{const i=m.useRef(null),s=m.useRef(null);m.useEffect(()=>{const a=i.current;if(!a)return;const c=()=>Array.from(a.querySelectorAll("svg path.land")).filter($=>$.getAttribute("id")),d=$=>{const x=($==null?void 0:$.getAttribute("id"))??null;x!==s.current&&(s.current=x,c().forEach(L=>{L.getAttribute("id")===x?L.classList.add("is-hovered"):L.classList.remove("is-hovered")}))},p=($,x)=>{var R;const L=document.elementFromPoint($,x);if((R=L==null?void 0:L.matches)!=null&&R.call(L,"path.land"))return L;const y=a.querySelector("svg");if(!y)return null;const S=y.getScreenCTM();if(!S)return null;const I=y.createSVGPoint();I.x=$,I.y=x;const k=I.matrixTransform(S.inverse()),j=c();for(let z=j.length-1;z>=0;z--)if(j[z].isPointInFill(k))return j[z];return null},f=$=>{const x=p($.clientX,$.clientY);d(x)},h=()=>{d(null)},g=$=>{const x=p($.clientX,$.clientY);if(x){const L=x.getAttribute("id");L&&n(L,$)}};let b=!1;const v=()=>{if(b)return;if(c().length===0){requestAnimationFrame(v);return}a.addEventListener("pointermove",f),a.addEventListener("pointerleave",h),a.addEventListener("click",g)};return v(),()=>{b=!0,a.removeEventListener("pointermove",f),a.removeEventListener("pointerleave",h),a.removeEventListener("click",g)}},[n]);const l=(t??(e?[e]:[])).map(a=>a==="KR-47"?"KR-48":a);return m.useEffect(()=>{const a=i.current;if(!a)return;a.querySelectorAll("svg path.land").forEach(d=>{const p=d.getAttribute("id");p&&l.includes(p)?d.classList.add("is-active"):d.classList.remove("is-active")})},[l.join("|")]),o.jsx(Ov,{ref:i,$maxMapHeight:r,role:"img","aria-label":"대한민국 행정구역 지도",dangerouslySetInnerHTML:{__html:Dv}})},Ch={tags:[],keyword:"",sortBy:"recommend",category:"all"},e0=to(e=>({selectedRegionId:void 0,filters:Ch,page:1,pageSize:10,isFilterOpen:!1,setRegion:t=>e({selectedRegionId:t,page:1}),setPage:t=>e({page:t}),setPageSize:t=>e({pageSize:t,page:1}),setKeyword:t=>e(n=>({filters:{...n.filters,keyword:t},page:1})),toggleTag:t=>e(n=>{const i=n.filters.tags.includes(t)?n.filters.tags.filter(s=>s!==t):[...n.filters.tags,t];return{filters:{...n.filters,tags:i},page:1}}),clearTags:()=>e(t=>({filters:{...t.filters,tags:[]},page:1})),setSortBy:t=>e(n=>({filters:{...n.filters,sortBy:t},page:1})),setCategory:t=>e(n=>({filters:{...n.filters,category:t},page:1})),resetFilters:()=>e({filters:Ch,page:1}),setFilterOpen:t=>e({isFilterOpen:t})})),j3=ke`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`,Bv=u.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 12px 24px;
  color: ${({theme:e})=>e.colors.text900};
  background: ${({theme:e})=>e.colors.warmCream};

  @media (max-width: 960px) {
    padding: 14px 10px 24px;
  }
`,Fv=u.div`
  animation: ${j3} 0.35s ease both;
`,Hv=u.div`
  display: block;

  @media (min-width: 961px) {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 28px;
    align-items: start;
  }
`,Uv=u.section`
  padding: 12px;
  border-radius: ${({theme:e})=>e.radii.lg};
  margin-bottom: 20px;

  @media (min-width: 961px) {
    max-width: 500px;
    width: 100%;
  }
`,Vv=u.section`
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
`,Wv=u.section`
  margin-top: 28px;
  background: ${({theme:e})=>e.colors.warmCream};
`,Kv=u.h2`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
  margin: 0 0 16px;
`,Yv=u.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 12px;
  -webkit-overflow-scrolling: touch;
`,Gv=u.div`
  @media (min-width: 961px) {
    position: sticky;
    top: 92px;
  }
`,Zv=u.button`
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
`,qv=u.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-areas:
    "filter content";
  gap: 28px;
  animation: ${j3} 0.35s ease both;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-areas: "content";
  }
`,Qv=u.aside`
  grid-area: filter;

  @media (max-width: 960px) {
    display: none;
  }
`,Xv=u.div`
  grid-area: content;
`,Jv=u.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,eb=u.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Eh=u.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text700};
`,tb=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`,nb=u.p`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.text700};
  margin: 0;
`,rb=u.button`
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
`,ib=u.div`
  position: fixed;
  inset: 0;
  z-index: 70;
`,ob=ke`from { opacity: 0; } to { opacity: 1; }`,sb=ke`from { transform: translateX(100%); } to { transform: translateX(0); }`,lb=u.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  animation: ${ob} 0.2s ease;
`,ab=u.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: min(90vw, 360px);
  background: ${({theme:e})=>e.colors.white};
  padding: 20px;
  overflow-y: auto;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);
  animation: ${sb} 0.25s ease;
`,cb=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,ub=u.button`
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
`,db=u.div`
  height: 1px;
`,pb=()=>{const e=ft(),{selectedRegionId:t,filters:n,page:r,pageSize:i,setPage:s,setRegion:l,setKeyword:a,toggleTag:c,setSortBy:d,setCategory:p,resetFilters:f,isFilterOpen:h,setFilterOpen:g}=e0(),b=m.useRef(null),[v,$]=m.useState(""),x=en(E=>E.places),L=en(E=>E.regions),y=[{id:"all",name:"전체"},...L],S=m.useMemo(()=>cv(x,8),[x]),I=m.useMemo(()=>b3(x),[x]),k=m.useMemo(()=>$a(x,n),[x,n]),j=m.useMemo(()=>w3(k,n.sortBy),[k,n.sortBy]),R=m.useMemo(()=>j.slice(0,r*i),[j,r,i]),z=R.length<j.length,T=n.keyword.trim().length>0;m.useEffect(()=>{l("all")},[l]),m.useEffect(()=>{const E=["템플스테이","숲 명상","바다 명상","한옥 명상","호흡 수련","걷기 명상"];let A=0,N=0,F=!1,Y;const Q=_=>{Y=window.setTimeout(()=>{const D=E[A%E.length];if(F?N-=1:N+=1,$(D.slice(0,Math.max(N,0))),!F&&N>=D.length){F=!0,Q(700);return}if(F&&N<=0){F=!1,A+=1,Q(300);return}Q(F?120:240)},_)};return Q(240),()=>window.clearTimeout(Y)},[]),m.useEffect(()=>{s(1)},[n.keyword,n.sortBy,n.tags,n.category,s]),m.useEffect(()=>{const E=b.current;if(!E||!z||!T)return;const A=new IntersectionObserver(N=>{var F;(F=N[0])!=null&&F.isIntersecting&&s(r+1)},{rootMargin:"200px"});return A.observe(E),()=>A.disconnect()},[z,r,s,T]);const P=E=>{l(E),e("/meditation/map")};return o.jsxs(Bv,{children:[o.jsx(Fl,{layout:"main",value:n.keyword,onChange:a,placeholder:v||"명상센터 검색"}),T?o.jsxs(qv,{children:[o.jsx(Qv,{children:o.jsx(ja,{filters:n,availableTags:I,onChangeKeyword:a,onChangeCategory:p,onToggleTag:c,onChangeSortBy:d,onReset:f})}),o.jsx(Xv,{children:o.jsxs(Jv,{children:[o.jsxs(tb,{children:[o.jsxs(nb,{children:["총 ",j.length,"곳의 명상센터"]}),o.jsx(rb,{type:"button",onClick:()=>g(!0),"aria-label":"필터",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})})})]}),o.jsxs(eb,{children:[R.length===0&&o.jsx(Eh,{children:x.length===0?"등록된 공간이 없습니다.":"조건에 맞는 명상센터가 없어요."}),R.map(E=>o.jsx(es,{place:E},E.id))]}),z&&o.jsx(db,{ref:b})]})})]}):o.jsx(Fv,{children:o.jsxs(Hv,{children:[o.jsx(Uv,{children:o.jsx(_s,{activeRegionId:t,onSelectRegion:P})}),o.jsxs(Gv,{children:[o.jsx(Vv,{children:y.map(E=>o.jsx(Zv,{type:"button",$active:t===E.id,onClick:()=>P(E.id),children:E.name},E.id))}),o.jsxs(Wv,{children:[o.jsx(Kv,{children:"인기 명상지"}),x.length===0?o.jsx(Eh,{style:{marginTop:12,textAlign:"center",padding:"24px 8px"},children:"등록된 공간이 없습니다."}):o.jsx(Yv,{children:S.map(E=>o.jsx(Cv,{place:E},E.id))})]})]})]})}),T&&h&&o.jsxs(ib,{children:[o.jsx(lb,{onClick:()=>g(!1)}),o.jsxs(ab,{children:[o.jsxs(cb,{children:[o.jsx("h3",{style:{margin:0,fontSize:"1.2rem"},children:"필터"}),o.jsx(ub,{type:"button",onClick:()=>g(!1),children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),o.jsx(ja,{filters:n,availableTags:I,onChangeKeyword:a,onChangeCategory:p,onToggleTag:c,onChangeSortBy:d,onReset:f})]})]})]})},S3="mm-landing-dismissed";function fb(){try{return sessionStorage.getItem(S3)==="1"}catch{return!1}}function hb(){try{sessionStorage.setItem(S3,"1")}catch{}}const Ph=()=>{const e=ut(n=>n.authReady),t=ut(n=>!!n.accessToken);return e?!t&&!fb()?o.jsx(Qp,{to:"/welcome",replace:!0}):o.jsx(pb,{}):null},Ca="/assets/kakao-BwFsiG1v.png",Ea="/assets/naver-8e52KbwB.png",Pa="/assets/google-3Iqg8dcD.png",W={h1:Oe`
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 1.22;
    letter-spacing: -0.02em;
  `,h2:Oe`
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 1.26;
    letter-spacing: -0.02em;
  `,h3:Oe`
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.02em;
  `,title:Oe`
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: -0.02em;
  `,body1:Oe`
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.45;
  `,body2:Oe`
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.45;
  `,caption:Oe`
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.4;
  `,buttonLg:Oe`
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.2;
  `,buttonMd:Oe`
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.2;
  `},su=[{bot:["안녕하세요 🎉","명상 웰니스 지도에 오신 걸 환영해요!","이전에 명상 웰니스 지도를 이용해본 적 있나요?"],left:{label:"네, 회원이에요 😊",next:1},right:{label:"처음이에요 🚀",next:2}},{bot:["반가워요! 로그인만 하면 바로 이용할 수 있어요 😊","혹시 명상 웰니스 지도가 아직 낯설다면, 잠깐 소개해 드릴까요?"],left:{label:"음, 괜찮아 😊",next:"login"},right:{label:"좋아, 들어볼게 ✨",next:2}},{bot:["바쁜 하루 속, 마음 쉴 곳 찾기 어려우셨죠? 🤔","내 주변 명상 공간을 지도에서 바로 찾게 도와드려요 🗺️"],auto:3},{bot:["검증된 전문가의 클래스와 리트릿도 살펴보고 예약할 수 있어요 🧘","마음에 든 공간은 찜하고, 나만의 명상 기록도 남길 수 있고요 📖"],auto:4},{bot:["이제 어떻게 쓰는지 튜토리얼로 딱 보여드릴게요 🧚","1분이면 충분해요!"],left:{label:"나중에 할래요",next:"exit"},right:{label:"튜토리얼 볼래요 🧚",next:"tutorial"}}],Lo={map:{emoji:"🗺️",title:"내 주변 명상 공간 지도",bg:"#efe9f6"},expert:{emoji:"🧘",title:"전문가 클래스 · 리트릿",bg:"#f6ece8"},record:{emoji:"📖",title:"찜 · 나의 명상 기록",bg:"#eaf0ec"}},yo=[{key:"map",caption:"지도에서 내 주변 명상 공간을 골라요"},{key:"expert",caption:"전문가 클래스와 리트릿을 예약해요"},{key:"record",caption:"찜하고 나만의 명상 기록을 남겨요"}],$3=ke`
  from { opacity: 0; transform: translateY(14px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`,gb=ke`
  0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
  40% { transform: translateY(-5px); opacity: 1; }
`,C3=ke`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`,E3=ke`
  from { opacity: 0; }
  to { opacity: 1; }
`,mb=ke`
  from { opacity: 0; transform: translateY(18px) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`,xb=ke`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`,Lb=u.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  background: ${({theme:e})=>e.colors.warmCream};
`,yb=u.header`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: calc(14px + env(safe-area-inset-top, 0px)) 20px 12px;
`,vb=u.h1`
  margin: 0;
  ${W.title};
  color: ${({theme:e})=>e.colors.text900};
`,bb=u.button`
  border: none;
  background: transparent;
  color: ${({theme:e})=>e.colors.text700};
  ${W.body2};
  cursor: pointer;
  padding: 6px 4px;

  &:hover {
    color: ${({theme:e})=>e.colors.primary600};
  }
`,wb=u.div`
  flex-shrink: 0;
  height: 3px;
  margin: 0 20px;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary100};
  overflow: hidden;
`,kb=u.div`
  height: 100%;
  width: ${({$pct:e})=>`${e}%`};
  border-radius: inherit;
  background: ${({theme:e})=>e.colors.primary400};
  transition: width 0.4s cubic-bezier(0.22, 1, 0.36, 1);
`,jb=u.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  padding: 18px 18px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,lu=u.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  justify-content: ${({$user:e})=>e?"flex-end":"flex-start"};
`,Ih=u.div`
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.primary50};
  display: grid;
  place-items: center;
  visibility: ${({$ghost:e})=>e?"hidden":"visible"};

  img {
    width: 22px;
    height: 22px;
    object-fit: contain;
  }
`,Th=u.div`
  max-width: 76%;
  padding: 12px 15px;
  ${W.body1};
  line-height: 1.45;
  word-break: keep-all;
  animation: ${$3} 0.36s cubic-bezier(0.22, 1, 0.36, 1) both;

  ${({$user:e,theme:t})=>e?`
    background: ${t.colors.primary600};
    color: ${t.colors.white};
    border-radius: 20px 20px 6px 20px;
    box-shadow: 0 6px 16px rgba(75, 0, 130, 0.14);
  `:`
    background: ${t.colors.white};
    color: ${t.colors.text900};
    border-radius: 20px 20px 20px 6px;
    box-shadow: 0 6px 16px rgba(61, 61, 61, 0.06);
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Sb=u.div`
  display: inline-flex;
  gap: 5px;
  padding: 15px 16px;
  background: ${({theme:e})=>e.colors.white};
  border-radius: 20px 20px 20px 6px;
  box-shadow: 0 6px 16px rgba(61, 61, 61, 0.06);
  animation: ${$3} 0.24s ease both;

  span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({theme:e})=>e.colors.primary200};
    animation: ${gb} 1.3s ease-in-out infinite;
  }
  span:nth-child(2) {
    animation-delay: 0.18s;
  }
  span:nth-child(3) {
    animation-delay: 0.36s;
  }
`,Rh=u.div`
  flex-shrink: 0;
  background: ${({theme:e})=>e.colors.white};
  border-top: 1px solid ${({theme:e})=>e.colors.primary100};
  box-shadow: 0 -6px 20px rgba(61, 61, 61, 0.05);
  padding: 16px 18px calc(18px + env(safe-area-inset-bottom, 0px));
`,$b=u.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  animation: ${C3} 0.3s cubic-bezier(0.22, 1, 0.36, 1) both;
`,zh=u.button`
  width: 100%;
  min-width: 0;
  padding: 16px 12px;
  ${W.buttonMd};
  border-radius: ${({theme:e})=>e.radii.md};
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: transform 0.15s ease, background 0.2s ease, border-color 0.2s ease;

  ${({$primary:e,theme:t})=>e?`
    border: none;
    background: ${t.colors.primary500};
    color: ${t.colors.white};
    &:hover { background: ${t.colors.primary600}; }
  `:`
    border: 1.5px solid ${t.colors.primary300};
    background: ${t.colors.white};
    color: ${t.colors.primary600};
    &:hover { background: ${t.colors.primary50}; }
  `}

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.98);
  }
`,Cb=u.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  animation: ${C3} 0.3s cubic-bezier(0.22, 1, 0.36, 1) both;
`,au=u.button`
  width: 100%;
  border: none;
  border-radius: ${({theme:e})=>e.radii.md};
  background: ${({theme:e})=>e.colors.primary500};
  color: ${({theme:e})=>e.colors.white};
  padding: 16px 20px;
  ${W.buttonMd};
  cursor: pointer;
  transition: transform 0.15s ease, background 0.2s ease, opacity 0.2s ease;

  &:hover:not(:disabled) {
    background: ${({theme:e})=>e.colors.primary600};
    transform: translateY(-1px);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,Eb=u.button`
  display: block;
  margin: 2px auto 0;
  padding: 10px 4px;
  border: none;
  background: none;
  color: ${({theme:e})=>e.colors.text700};
  ${W.body2};
  text-decoration: underline;
  text-underline-offset: 4px;
  cursor: pointer;

  &:hover {
    color: ${({theme:e})=>e.colors.primary600};
  }
`,Pb=u.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 8px 0 4px;
`,Ib=u.span`
  width: ${({$active:e})=>e?"22px":"8px"};
  height: 8px;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e,$active:t})=>t?e.colors.primary400:e.colors.primary100};
  transition: width 0.25s ease, background 0.25s ease;
`,Tb=u.div`
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-x: contain;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`,Rb=u.div`
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 22px;
  padding: 8px 24px 12px;
  box-sizing: border-box;
`,zb=u.button`
  border: none;
  padding: 0;
  cursor: zoom-in;
  width: min(78%, 280px);
  aspect-ratio: 9 / 15;
  border-radius: 28px;
  overflow: hidden;
  background: ${({theme:e})=>e.colors.white};
  box-shadow: 0 20px 44px rgba(61, 61, 61, 0.12);
  display: flex;
  flex-direction: column;
  transition: transform 0.18s ease;

  &:hover {
    transform: translateY(-3px);
  }
  &:active {
    transform: scale(0.99);
  }
`,Mb=u.div`
  flex: 1 1 auto;
  display: grid;
  place-items: center;
  font-size: 5.4rem;
  background: ${({$bg:e})=>e};
`,Mh=u.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 14px 16px;
  ${W.body2};
  color: ${({theme:e})=>e.colors.text700};
  border-top: 1px solid ${({theme:e})=>e.colors.primary100};

  &::before {
    content: "미리보기";
    ${W.caption};
    font-weight: 700;
    color: ${({theme:e})=>e.colors.primary600};
    background: ${({theme:e})=>e.colors.primary50};
    padding: 2px 7px;
    border-radius: ${({theme:e})=>e.radii.pill};
  }
`,Ab=u.p`
  margin: 0;
  text-align: center;
  ${W.title};
  color: ${({theme:e})=>e.colors.text900};
`,_b=u.span`
  ${W.caption};
  color: ${({theme:e})=>e.colors.text700};
`,Nb=u.div`
  position: fixed;
  inset: 0;
  z-index: 90;
  background: rgba(0, 0, 0, 0.72);
  display: grid;
  place-items: center;
  padding: 24px;
  cursor: zoom-out;
  animation: ${E3} 0.2s ease both;
`,Db=u.div`
  width: min(100%, 420px);
  aspect-ratio: 9 / 15;
  max-height: 82vh;
  border-radius: 30px;
  overflow: hidden;
  background: ${({theme:e})=>e.colors.white};
  display: flex;
  flex-direction: column;
  cursor: grab;
  touch-action: none; /* 세로 드래그를 스크롤이 아닌 제스처로 받기 */
  animation: ${xb} 0.26s cubic-bezier(0.22, 1, 0.36, 1) both;

  &:active {
    cursor: grabbing;
  }
`,Ob=u.div`
  flex: 1 1 auto;
  display: grid;
  place-items: center;
  font-size: 8rem;
  background: ${({$bg:e})=>e};
`,Bb=u.div`
  position: fixed;
  inset: 0;
  z-index: 80;
  background: rgba(0, 0, 0, 0.38);
  display: grid;
  place-items: center;
  padding: 20px;
  animation: ${E3} 0.2s ease both;
`,Fb=u.div`
  position: relative;
  width: min(100%, 400px);
  padding: 28px 22px 22px;
  border-radius: 26px;
  background: ${({theme:e})=>e.colors.white};
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.22);
  animation: ${mb} 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Hb=u.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 34px;
  height: 34px;
  border: none;
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.primary50};
  color: ${({theme:e})=>e.colors.text700};
  font-size: 1.8rem;
  line-height: 1;
  cursor: pointer;
  display: grid;
  place-items: center;

  &:hover {
    color: ${({theme:e})=>e.colors.primary600};
  }
`,Ub=u.h2`
  margin: 0;
  text-align: center;
  ${W.title};
  color: ${({theme:e})=>e.colors.text900};
`,Vb=u.p`
  margin: 8px 0 22px;
  text-align: center;
  ${W.body2};
  color: ${({theme:e})=>e.colors.text700};
`,Wb=u.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Ah=u.input`
  width: 100%;
  border: 1px solid ${({theme:e})=>e.colors.primary200};
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.text900};
  ${W.body2};
  padding: 14px 20px;
  transition: border-color 0.2s ease, transform 0.2s ease;

  &::placeholder {
    color: ${({theme:e})=>e.colors.text700};
  }

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.colors.primary400};
    transform: translateY(-1px);
  }
`,Kb=u.div`
  margin: 18px 0 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${({theme:e})=>e.colors.text700};
  ${W.caption};

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: ${({theme:e})=>e.colors.primary200};
  }
`,Yb=u.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`,P3=`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  padding: 0;
  cursor: pointer;
  border: none;
  background: transparent;
  transition: transform 0.16s ease;
`,cu=u.a`
  ${P3}
  &:hover { transform: translateY(-3px); }
`,uu=u.button`
  ${P3}
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`,ii=u.img`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
`,Gb=u.div`
  margin: 20px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  ${W.body2};
  color: ${({theme:e})=>e.colors.text900};
`,Zb=u.button`
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
`,qb=()=>{const e=ft(),t=ut(q=>q.authReady),n=ut(q=>!!q.accessToken),[r,i]=m.useState("chat"),[s,l]=m.useState([]),[a,c]=m.useState(!1),[d,p]=m.useState(0),[f,h]=m.useState(!1),[g,b]=m.useState(0),[v,$]=m.useState(null),[x,L]=m.useState(0),y=m.useRef(null),[S,I]=m.useState(!1),[k,j]=m.useState(""),[R,z]=m.useState(""),[T,P]=m.useState(!1),E=m.useRef(null),A=m.useRef(null),N=Ce()??"";if(m.useEffect(()=>{const q=su[d];if(!q)return;let te=!1;const le=[];h(!1);let xe=0;const $e=()=>{if(te)return;if(xe>=q.bot.length){if(c(!1),typeof q.auto=="number"){const De=q.auto;le.push(setTimeout(()=>{te||p(De)},500))}else h(!0);return}c(!0);const Me=xe===0?450:720;le.push(setTimeout(()=>{if(te)return;c(!1);const De=q.bot[xe],Ee=xe===0;l(Ct=>[...Ct,{from:"bot",text:De,head:Ee}]),xe+=1,le.push(setTimeout($e,300))},Me))};return $e(),()=>{te=!0,le.forEach(clearTimeout)}},[d]),m.useEffect(()=>{var q;r==="chat"&&((q=E.current)==null||q.scrollIntoView({behavior:"smooth",block:"end"}))},[s,a,f,r]),m.useEffect(()=>{if(!S&&!v)return;const q=te=>{te.key==="Escape"&&(I(!1),$(null))};return window.addEventListener("keydown",q),()=>window.removeEventListener("keydown",q)},[S,v]),t&&n)return o.jsx(Qp,{to:"/",replace:!0});const F=()=>{hb(),e("/")},Y=q=>{h(!1),l(le=>[...le,{from:"user",text:q.label}]);const te=q.next;te==="login"?I(!0):te==="exit"?F():te==="tutorial"?i("tutorial"):p(te)},Q=()=>e("/profile?start=signup"),_=q=>{y.current=null,L(0),$(q)},D=()=>{y.current=null,L(0),$(null)},C=q=>{y.current=q.clientY},X=q=>{y.current!==null&&L(q.clientY-y.current)},J=q=>{if(y.current===null)return;const te=q.clientY-y.current;y.current=null,Math.abs(te)>80?D():L(0)},w=()=>{const q=A.current;if(!q)return;const te=Math.round(q.scrollLeft/q.clientWidth);b(Math.max(0,Math.min(yo.length-1,te)))},H=async()=>{if(!Ce()){Ye.error("지금은 이용할 수 없어요. 잠시 후 다시 시도해 주세요.");return}const q=k.trim();if(!q||!R){Ye.error("이메일과 비밀번호를 입력해 주세요.");return}P(!0);try{const te=await me("/auth/login",{method:"POST",body:JSON.stringify({email:q,password:R})});if(!te.ok){let le="";try{le=(await te.json()).error??""}catch{}Ye.error(le==="INVALID_CREDENTIALS"?"이메일 또는 비밀번호를 확인해 주세요.":"로그인에 실패했습니다.");return}await ut.getState().setSession(),await mr.getState().pullFromServer(),z(""),e("/")}catch{Ye.error("잠시 후 다시 시도해 주세요.")}finally{P(!1)}},M=su[d],G=Math.round((d+(f?1:0))/su.length*100),U=Math.round((g+1)/yo.length*100),ne=r==="chat"&&f&&!!(M!=null&&M.left)&&!!(M!=null&&M.right),de=g>=yo.length-1;return o.jsxs(Lb,{children:[o.jsxs(yb,{children:[o.jsx(vb,{children:r==="chat"?"시작하기":"튜토리얼"}),o.jsx(bb,{type:"button",onClick:F,children:"나가기"})]}),o.jsx(wb,{children:o.jsx(kb,{$pct:r==="chat"?G:U})}),r==="chat"&&o.jsxs(o.Fragment,{children:[o.jsxs(jb,{children:[s.map((q,te)=>q.from==="user"?o.jsx(lu,{$user:!0,children:o.jsx(Th,{$user:!0,children:q.text})},te):o.jsxs(lu,{children:[o.jsx(Ih,{$ghost:!q.head,children:o.jsx("img",{src:zi,alt:""})}),o.jsx(Th,{children:q.text})]},te)),a&&o.jsxs(lu,{children:[o.jsx(Ih,{children:o.jsx("img",{src:zi,alt:""})}),o.jsxs(Sb,{children:[o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{})]})]}),o.jsx("div",{ref:E})]}),ne&&(M==null?void 0:M.left)&&(M==null?void 0:M.right)&&o.jsx(Rh,{children:o.jsxs($b,{children:[o.jsx(zh,{type:"button",onClick:()=>Y(M.left),children:M.left.label}),o.jsx(zh,{type:"button",$primary:!0,onClick:()=>Y(M.right),children:M.right.label})]})})]}),r==="tutorial"&&o.jsxs(o.Fragment,{children:[o.jsx(Pb,{children:yo.map((q,te)=>o.jsx(Ib,{$active:te===g},q.key))}),o.jsx(Tb,{ref:A,onScroll:w,children:yo.map(q=>{const te=Lo[q.key];return o.jsxs(Rb,{children:[o.jsxs(zb,{type:"button",$bg:te.bg,onClick:()=>_(q.key),"aria-label":`${te.title} 크게 보기`,children:[o.jsx(Mb,{$bg:te.bg,children:te.emoji}),o.jsx(Mh,{children:te.title})]}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[o.jsx(Ab,{children:q.caption}),o.jsx(_b,{children:"탭하면 크게 볼 수 있어요"})]})]},q.key)})}),o.jsx(Rh,{children:o.jsxs(Cb,{children:[de?o.jsx(au,{type:"button",onClick:()=>I(!0),children:"명상 웰니스 지도 시작하기 ✨"}):o.jsx(au,{type:"button",onClick:()=>{const q=A.current;q&&q.scrollTo({left:(g+1)*q.clientWidth,behavior:"smooth"})},children:"다음 →"}),o.jsx(Eb,{type:"button",onClick:F,children:"나중에 할래요"})]})})]}),v&&o.jsx(Nb,{onClick:D,children:o.jsxs(Db,{$bg:Lo[v].bg,onClick:q=>q.stopPropagation(),onPointerDown:C,onPointerMove:X,onPointerUp:J,onPointerCancel:J,style:x!==0?{transform:`translateY(${x}px)`,opacity:Math.max(.4,1-Math.abs(x)/500),animation:"none"}:void 0,children:[o.jsx(Ob,{$bg:Lo[v].bg,children:Lo[v].emoji}),o.jsx(Mh,{children:Lo[v].title})]})}),S&&o.jsx(Bb,{onClick:q=>{q.target===q.currentTarget&&I(!1)},children:o.jsxs(Fb,{role:"dialog","aria-modal":"true","aria-label":"로그인",children:[o.jsx(Hb,{type:"button","aria-label":"닫기",onClick:()=>I(!1),children:"×"}),o.jsx(Ub,{children:"로그인"}),o.jsx(Vb,{children:"로그인하고 나에게 딱 맞는 명상 공간을 찾아보세요."}),o.jsxs(Wb,{onSubmit:q=>{q.preventDefault(),H()},children:[o.jsx(Ah,{type:"email",placeholder:"이메일","aria-label":"이메일",autoComplete:"email",value:k,onChange:q=>j(q.target.value)}),o.jsx(Ah,{type:"password",placeholder:"비밀번호","aria-label":"비밀번호",autoComplete:"current-password",value:R,onChange:q=>z(q.target.value)}),o.jsx(au,{type:"submit",disabled:T,children:T?"처리 중…":"로그인하기"})]}),o.jsx(Kb,{children:"또는"}),o.jsxs(Yb,{children:[N?o.jsx(cu,{href:`${N}/oauth2/authorization/kakao`,"aria-label":"카카오로 로그인",children:o.jsx(ii,{src:Ca,alt:""})}):o.jsx(uu,{type:"button",disabled:!0,"aria-label":"카카오로 로그인 (API 주소 필요)",children:o.jsx(ii,{src:Ca,alt:""})}),N?o.jsx(cu,{href:`${N}/oauth2/authorization/naver`,"aria-label":"네이버로 로그인",children:o.jsx(ii,{src:Ea,alt:""})}):o.jsx(uu,{type:"button",disabled:!0,"aria-label":"네이버로 로그인 (API 주소 필요)",children:o.jsx(ii,{src:Ea,alt:""})}),N?o.jsx(cu,{href:`${N}/oauth2/authorization/google`,"aria-label":"구글로 로그인",children:o.jsx(ii,{src:Pa,alt:""})}):o.jsx(uu,{type:"button",disabled:!0,"aria-label":"구글로 로그인 (API 주소 필요)",children:o.jsx(ii,{src:Pa,alt:""})})]}),o.jsxs(Gb,{children:[o.jsx("span",{children:"아직 회원이 아니신가요?"}),o.jsx(Zb,{type:"button",onClick:Q,children:"회원가입"})]})]})})]})},Qb=u.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 16px 24px;
  color: ${({theme:e})=>e.colors.text900};
`,Xb=u.header`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`,Jb=u.button`
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
`,ew=u.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: ${({theme:e})=>e.colors.text900};
`,tw=u.section`
  position: relative;
  padding: 12px;
  border-radius: ${({theme:e})=>e.radii.lg};
  margin-bottom: 20px;
  min-height: 280px;
  overflow: visible;

  svg {
    max-height: 360px;
  }
`,nw=u.div`
  position: absolute;
  inset: 0;
  z-index: 5;
  cursor: pointer;
  border-radius: ${({theme:e})=>e.radii.lg};
`,rw=ke`
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,iw=u.div`
  position: absolute;
  left: ${({$x:e})=>e}px;
  top: ${({$y:e})=>e}px;
  transform: translate(-50%, -100%);
  z-index: 10;
  filter: drop-shadow(0 6px 20px rgba(75, 0, 130, 0.12));
  animation: ${rw} 0.2s ease;
`,ow=u.div`
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
`,sw=u.button`
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
`,lw=u.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.primary700};
  margin: 0 0 4px;
  padding-right: 28px;
`,aw=u.p`
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.text700};
  margin: 0 0 12px;
  line-height: 1.45;
`,cw=u.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,uw=u.button`
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
`,dw=u.section`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`,pw=u.button`
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
`,fw=[{label:"명상지",kind:"place"},{label:"명상센터",kind:"center"},{label:"명상 전문가",kind:"expert"}],hw=()=>{const e=ft(),t=m.useRef(null),n=en(x=>x.regions),r=m.useMemo(()=>[{id:"all",name:"전체"},...n.map(x=>({id:x.id,name:x.name}))],[n]),i=m.useRef(null),s=m.useRef(null),{selectedRegionId:l,setRegion:a,setCategory:c}=e0(),[d,p]=m.useState(null),[f,h]=m.useState({x:0,y:0});m.useEffect(()=>{const x=L=>{var j,R,z;if(!d)return;const y=L.target,S=(j=i.current)==null?void 0:j.contains(y),I=(R=t.current)==null?void 0:R.contains(y),k=(z=s.current)==null?void 0:z.contains(y);!S&&!I&&!k&&p(null)};return document.addEventListener("click",x),()=>document.removeEventListener("click",x)},[d]);const g=m.useCallback(x=>{const L=t.current;if(!L)return null;if(x==="all"){const A=L.getBoundingClientRect();return{x:A.width/2,y:A.height/2-40}}const y=L.querySelector(`path.land[id="${x}"]`);if(!y)return null;const S=y.closest("svg");if(!S)return null;const I=y.getBBox();let k=I.x+I.width/2,j=I.y+I.height/2;x==="KR-42"&&(j=I.y+I.height*.65);const R=S.createSVGPoint();R.x=k,R.y=j;const z=S.getScreenCTM();if(!z)return null;const T=R.matrixTransform(z),P=L.getBoundingClientRect(),E=x==="KR-42"?5:x==="KR-11"?0:x==="KR-41"?-15:15;return{x:T.x-P.left,y:T.y-P.top-E}},[]);m.useEffect(()=>{const x=l??"all";p(x);const L=t.current;L?requestAnimationFrame(()=>{const y=g(x);h(y??{x:L.getBoundingClientRect().width/2,y:L.getBoundingClientRect().height/2-40})}):h({x:200,y:120})},[l,g]);const b=x=>{p(x),requestAnimationFrame(()=>{const L=g(x);h(L??{x:200,y:120})})},v=x=>{if(d){if(a(d),x==="expert"){e(`/meditation/region/${d}/experts`);return}c(x==="place"?"템플스테이":"명상센터"),e(`/meditation/region/${d}`)}},$=d?Wn(d):null;return o.jsxs(Qb,{children:[o.jsxs(Xb,{children:[o.jsx(Jb,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(ew,{children:"지역 선택"})]}),o.jsxs(tw,{ref:t,children:[o.jsx(_s,{activeRegionId:d??void 0,onSelectRegion:b}),$&&o.jsxs(o.Fragment,{children:[o.jsx(nw,{onClick:()=>p(null),"aria-label":"모달 닫기"}),o.jsx(iw,{ref:i,$x:f.x,$y:f.y,children:o.jsxs(ow,{children:[o.jsx(sw,{type:"button",onClick:()=>p(null),"aria-label":"닫기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"18",height:"18",children:o.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})}),o.jsx(lw,{children:$.name}),o.jsx(aw,{children:"찾으시는 유형을 선택해 주세요"}),o.jsx(cw,{children:fw.map(({label:x,kind:L})=>o.jsx(uw,{type:"button",onClick:()=>v(L),children:x},L))})]})})]})]}),o.jsx(dw,{ref:s,children:r.map(x=>o.jsx(pw,{type:"button",$active:d===x.id,onClick:()=>{p(x.id),requestAnimationFrame(()=>{const L=g(x.id);h(L??{x:200,y:120})})},children:x.name},x.id))})]})};function gw(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const mw=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,xw=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Lw={};function _h(e,t){return(Lw.jsx?xw:mw).test(e)}const yw=/[ \t\n\f\r]/g;function vw(e){return typeof e=="object"?e.type==="text"?Nh(e.value):!1:Nh(e)}function Nh(e){return e.replace(yw,"")===""}class Ns{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}Ns.prototype.normal={};Ns.prototype.property={};Ns.prototype.space=void 0;function I3(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new Ns(n,r,t)}function C1(e){return e.toLowerCase()}class _t{constructor(t,n){this.attribute=n,this.property=t}}_t.prototype.attribute="";_t.prototype.booleanish=!1;_t.prototype.boolean=!1;_t.prototype.commaOrSpaceSeparated=!1;_t.prototype.commaSeparated=!1;_t.prototype.defined=!1;_t.prototype.mustUseProperty=!1;_t.prototype.number=!1;_t.prototype.overloadedBoolean=!1;_t.prototype.property="";_t.prototype.spaceSeparated=!1;_t.prototype.space=void 0;let bw=0;const ce=Xr(),Qe=Xr(),E1=Xr(),Z=Xr(),Te=Xr(),Mi=Xr(),Dt=Xr();function Xr(){return 2**++bw}const P1=Object.freeze(Object.defineProperty({__proto__:null,boolean:ce,booleanish:Qe,commaOrSpaceSeparated:Dt,commaSeparated:Mi,number:Z,overloadedBoolean:E1,spaceSeparated:Te},Symbol.toStringTag,{value:"Module"})),du=Object.keys(P1);class t0 extends _t{constructor(t,n,r,i){let s=-1;if(super(t,n),Dh(this,"space",i),typeof r=="number")for(;++s<du.length;){const l=du[s];Dh(this,du[s],(r&P1[l])===P1[l])}}}t0.prototype.defined=!0;function Dh(e,t,n){n&&(e[t]=n)}function io(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const s=new t0(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(s.mustUseProperty=!0),t[r]=s,n[C1(r)]=r,n[C1(s.attribute)]=r}return new Ns(t,n,e.space)}const T3=io({properties:{ariaActiveDescendant:null,ariaAtomic:Qe,ariaAutoComplete:null,ariaBusy:Qe,ariaChecked:Qe,ariaColCount:Z,ariaColIndex:Z,ariaColSpan:Z,ariaControls:Te,ariaCurrent:null,ariaDescribedBy:Te,ariaDetails:null,ariaDisabled:Qe,ariaDropEffect:Te,ariaErrorMessage:null,ariaExpanded:Qe,ariaFlowTo:Te,ariaGrabbed:Qe,ariaHasPopup:null,ariaHidden:Qe,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Te,ariaLevel:Z,ariaLive:null,ariaModal:Qe,ariaMultiLine:Qe,ariaMultiSelectable:Qe,ariaOrientation:null,ariaOwns:Te,ariaPlaceholder:null,ariaPosInSet:Z,ariaPressed:Qe,ariaReadOnly:Qe,ariaRelevant:null,ariaRequired:Qe,ariaRoleDescription:Te,ariaRowCount:Z,ariaRowIndex:Z,ariaRowSpan:Z,ariaSelected:Qe,ariaSetSize:Z,ariaSort:null,ariaValueMax:Z,ariaValueMin:Z,ariaValueNow:Z,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function R3(e,t){return t in e?e[t]:t}function z3(e,t){return R3(e,t.toLowerCase())}const ww=io({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Mi,acceptCharset:Te,accessKey:Te,action:null,allow:null,allowFullScreen:ce,allowPaymentRequest:ce,allowUserMedia:ce,alt:null,as:null,async:ce,autoCapitalize:null,autoComplete:Te,autoFocus:ce,autoPlay:ce,blocking:Te,capture:null,charSet:null,checked:ce,cite:null,className:Te,cols:Z,colSpan:null,content:null,contentEditable:Qe,controls:ce,controlsList:Te,coords:Z|Mi,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ce,defer:ce,dir:null,dirName:null,disabled:ce,download:E1,draggable:Qe,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ce,formTarget:null,headers:Te,height:Z,hidden:E1,high:Z,href:null,hrefLang:null,htmlFor:Te,httpEquiv:Te,id:null,imageSizes:null,imageSrcSet:null,inert:ce,inputMode:null,integrity:null,is:null,isMap:ce,itemId:null,itemProp:Te,itemRef:Te,itemScope:ce,itemType:Te,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ce,low:Z,manifest:null,max:null,maxLength:Z,media:null,method:null,min:null,minLength:Z,multiple:ce,muted:ce,name:null,nonce:null,noModule:ce,noValidate:ce,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ce,optimum:Z,pattern:null,ping:Te,placeholder:null,playsInline:ce,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ce,referrerPolicy:null,rel:Te,required:ce,reversed:ce,rows:Z,rowSpan:Z,sandbox:Te,scope:null,scoped:ce,seamless:ce,selected:ce,shadowRootClonable:ce,shadowRootDelegatesFocus:ce,shadowRootMode:null,shape:null,size:Z,sizes:null,slot:null,span:Z,spellCheck:Qe,src:null,srcDoc:null,srcLang:null,srcSet:null,start:Z,step:null,style:null,tabIndex:Z,target:null,title:null,translate:null,type:null,typeMustMatch:ce,useMap:null,value:Qe,width:Z,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Te,axis:null,background:null,bgColor:null,border:Z,borderColor:null,bottomMargin:Z,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ce,declare:ce,event:null,face:null,frame:null,frameBorder:null,hSpace:Z,leftMargin:Z,link:null,longDesc:null,lowSrc:null,marginHeight:Z,marginWidth:Z,noResize:ce,noHref:ce,noShade:ce,noWrap:ce,object:null,profile:null,prompt:null,rev:null,rightMargin:Z,rules:null,scheme:null,scrolling:Qe,standby:null,summary:null,text:null,topMargin:Z,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Z,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ce,disableRemotePlayback:ce,prefix:null,property:null,results:Z,security:null,unselectable:null},space:"html",transform:z3}),kw=io({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Dt,accentHeight:Z,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:Z,amplitude:Z,arabicForm:null,ascent:Z,attributeName:null,attributeType:null,azimuth:Z,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:Z,by:null,calcMode:null,capHeight:Z,className:Te,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:Z,diffuseConstant:Z,direction:null,display:null,dur:null,divisor:Z,dominantBaseline:null,download:ce,dx:null,dy:null,edgeMode:null,editable:null,elevation:Z,enableBackground:null,end:null,event:null,exponent:Z,externalResourcesRequired:null,fill:null,fillOpacity:Z,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Mi,g2:Mi,glyphName:Mi,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:Z,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:Z,horizOriginX:Z,horizOriginY:Z,id:null,ideographic:Z,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:Z,k:Z,k1:Z,k2:Z,k3:Z,k4:Z,kernelMatrix:Dt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:Z,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:Z,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:Z,overlineThickness:Z,paintOrder:null,panose1:null,path:null,pathLength:Z,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Te,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:Z,pointsAtY:Z,pointsAtZ:Z,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Dt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Dt,rev:Dt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Dt,requiredFeatures:Dt,requiredFonts:Dt,requiredFormats:Dt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:Z,specularExponent:Z,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:Z,strikethroughThickness:Z,string:null,stroke:null,strokeDashArray:Dt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:Z,strokeOpacity:Z,strokeWidth:null,style:null,surfaceScale:Z,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Dt,tabIndex:Z,tableValues:null,target:null,targetX:Z,targetY:Z,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Dt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:Z,underlineThickness:Z,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:Z,values:null,vAlphabetic:Z,vMathematical:Z,vectorEffect:null,vHanging:Z,vIdeographic:Z,version:null,vertAdvY:Z,vertOriginX:Z,vertOriginY:Z,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:Z,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:R3}),M3=io({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),A3=io({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:z3}),_3=io({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),jw={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Sw=/[A-Z]/g,Oh=/-[a-z]/g,$w=/^data[-\w.:]+$/i;function Cw(e,t){const n=C1(t);let r=t,i=_t;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&$w.test(t)){if(t.charAt(4)==="-"){const s=t.slice(5).replace(Oh,Pw);r="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=t.slice(4);if(!Oh.test(s)){let l=s.replace(Sw,Ew);l.charAt(0)!=="-"&&(l="-"+l),t="data"+l}}i=t0}return new i(r,t)}function Ew(e){return"-"+e.toLowerCase()}function Pw(e){return e.charAt(1).toUpperCase()}const Iw=I3([T3,ww,M3,A3,_3],"html"),n0=I3([T3,kw,M3,A3,_3],"svg");function Tw(e){return e.join(" ").trim()}var r0={},Bh=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Rw=/\n/g,zw=/^\s*/,Mw=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Aw=/^:\s*/,_w=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Nw=/^[;\s]*/,Dw=/^\s+|\s+$/g,Ow=`
`,Fh="/",Hh="*",Tr="",Bw="comment",Fw="declaration";function Hw(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(b){var v=b.match(Rw);v&&(n+=v.length);var $=b.lastIndexOf(Ow);r=~$?b.length-$:r+b.length}function s(){var b={line:n,column:r};return function(v){return v.position=new l(b),d(),v}}function l(b){this.start=b,this.end={line:n,column:r},this.source=t.source}l.prototype.content=e;function a(b){var v=new Error(t.source+":"+n+":"+r+": "+b);if(v.reason=b,v.filename=t.source,v.line=n,v.column=r,v.source=e,!t.silent)throw v}function c(b){var v=b.exec(e);if(v){var $=v[0];return i($),e=e.slice($.length),v}}function d(){c(zw)}function p(b){var v;for(b=b||[];v=f();)v!==!1&&b.push(v);return b}function f(){var b=s();if(!(Fh!=e.charAt(0)||Hh!=e.charAt(1))){for(var v=2;Tr!=e.charAt(v)&&(Hh!=e.charAt(v)||Fh!=e.charAt(v+1));)++v;if(v+=2,Tr===e.charAt(v-1))return a("End of comment missing");var $=e.slice(2,v-2);return r+=2,i($),e=e.slice(v),r+=2,b({type:Bw,comment:$})}}function h(){var b=s(),v=c(Mw);if(v){if(f(),!c(Aw))return a("property missing ':'");var $=c(_w),x=b({type:Fw,property:Uh(v[0].replace(Bh,Tr)),value:$?Uh($[0].replace(Bh,Tr)):Tr});return c(Nw),x}}function g(){var b=[];p(b);for(var v;v=h();)v!==!1&&(b.push(v),p(b));return b}return d(),g()}function Uh(e){return e?e.replace(Dw,Tr):Tr}var Uw=Hw,Vw=Wl&&Wl.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r0,"__esModule",{value:!0});r0.default=Kw;const Ww=Vw(Uw);function Kw(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,Ww.default)(e),i=typeof t=="function";return r.forEach(s=>{if(s.type!=="declaration")return;const{property:l,value:a}=s;i?t(l,a,s):a&&(n=n||{},n[l]=a)}),n}var ac={};Object.defineProperty(ac,"__esModule",{value:!0});ac.camelCase=void 0;var Yw=/^--[a-zA-Z0-9_-]+$/,Gw=/-([a-z])/g,Zw=/^[^-]+$/,qw=/^-(webkit|moz|ms|o|khtml)-/,Qw=/^-(ms)-/,Xw=function(e){return!e||Zw.test(e)||Yw.test(e)},Jw=function(e,t){return t.toUpperCase()},Vh=function(e,t){return"".concat(t,"-")},ek=function(e,t){return t===void 0&&(t={}),Xw(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(Qw,Vh):e=e.replace(qw,Vh),e.replace(Gw,Jw))};ac.camelCase=ek;var tk=Wl&&Wl.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},nk=tk(r0),rk=ac;function I1(e,t){var n={};return!e||typeof e!="string"||(0,nk.default)(e,function(r,i){r&&i&&(n[(0,rk.camelCase)(r,t)]=i)}),n}I1.default=I1;var ik=I1;const ok=Ma(ik),N3=D3("end"),i0=D3("start");function D3(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function sk(e){const t=i0(e),n=N3(e);if(t&&n)return{start:t,end:n}}function ts(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Wh(e.position):"start"in e||"end"in e?Wh(e):"line"in e||"column"in e?T1(e):""}function T1(e){return Kh(e&&e.line)+":"+Kh(e&&e.column)}function Wh(e){return T1(e&&e.start)+"-"+T1(e&&e.end)}function Kh(e){return e&&typeof e=="number"?e:1}class bt extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",s={},l=!1;if(n&&("line"in n&&"column"in n?s={place:n}:"start"in n&&"end"in n?s={place:n}:"type"in n?s={ancestors:[n],place:n.position}:s={...n}),typeof t=="string"?i=t:!s.cause&&t&&(l=!0,i=t.message,s.cause=t),!s.ruleId&&!s.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?s.ruleId=r:(s.source=r.slice(0,c),s.ruleId=r.slice(c+1))}if(!s.place&&s.ancestors&&s.ancestors){const c=s.ancestors[s.ancestors.length-1];c&&(s.place=c.position)}const a=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=a?a.line:void 0,this.name=ts(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=l&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}bt.prototype.file="";bt.prototype.name="";bt.prototype.reason="";bt.prototype.message="";bt.prototype.stack="";bt.prototype.column=void 0;bt.prototype.line=void 0;bt.prototype.ancestors=void 0;bt.prototype.cause=void 0;bt.prototype.fatal=void 0;bt.prototype.place=void 0;bt.prototype.ruleId=void 0;bt.prototype.source=void 0;const o0={}.hasOwnProperty,lk=new Map,ak=/[A-Z]/g,ck=new Set(["table","tbody","thead","tfoot","tr"]),uk=new Set(["td","th"]),O3="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function dk(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=yk(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Lk(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?n0:Iw,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},s=B3(i,e,void 0);return s&&typeof s!="string"?s:i.create(e,i.Fragment,{children:s||void 0},void 0)}function B3(e,t,n){if(t.type==="element")return pk(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return fk(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return gk(e,t,n);if(t.type==="mdxjsEsm")return hk(e,t);if(t.type==="root")return mk(e,t,n);if(t.type==="text")return xk(e,t)}function pk(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=n0,e.schema=i),e.ancestors.push(t);const s=H3(e,t.tagName,!1),l=vk(e,t);let a=l0(e,t);return ck.has(t.tagName)&&(a=a.filter(function(c){return typeof c=="string"?!vw(c):!0})),F3(e,l,s,t),s0(l,a),e.ancestors.pop(),e.schema=r,e.create(t,s,l,n)}function fk(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Cs(e,t.position)}function hk(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Cs(e,t.position)}function gk(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=n0,e.schema=i),e.ancestors.push(t);const s=t.name===null?e.Fragment:H3(e,t.name,!0),l=bk(e,t),a=l0(e,t);return F3(e,l,s,t),s0(l,a),e.ancestors.pop(),e.schema=r,e.create(t,s,l,n)}function mk(e,t,n){const r={};return s0(r,l0(e,t)),e.create(t,e.Fragment,r,n)}function xk(e,t){return t.value}function F3(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function s0(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function Lk(e,t,n){return r;function r(i,s,l,a){const d=Array.isArray(l.children)?n:t;return a?d(s,l,a):d(s,l)}}function yk(e,t){return n;function n(r,i,s,l){const a=Array.isArray(s.children),c=i0(r);return t(i,s,l,a,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function vk(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&o0.call(t.properties,i)){const s=wk(e,i,t.properties[i]);if(s){const[l,a]=s;e.tableCellAlignToStyle&&l==="align"&&typeof a=="string"&&uk.has(t.tagName)?r=a:n[l]=a}}if(r){const s=n.style||(n.style={});s[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function bk(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const s=r.data.estree.body[0];s.type;const l=s.expression;l.type;const a=l.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else Cs(e,t.position);else{const i=r.name;let s;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const a=r.value.data.estree.body[0];a.type,s=e.evaluater.evaluateExpression(a.expression)}else Cs(e,t.position);else s=r.value===null?!0:r.value;n[i]=s}return n}function l0(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:lk;for(;++r<t.children.length;){const s=t.children[r];let l;if(e.passKeys){const c=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(c){const d=i.get(c)||0;l=c+"-"+d,i.set(c,d+1)}}const a=B3(e,s,l);a!==void 0&&n.push(a)}return n}function wk(e,t,n){const r=Cw(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?gw(n):Tw(n)),r.property==="style"){let i=typeof n=="object"?n:kk(e,String(n));return e.stylePropertyNameCase==="css"&&(i=jk(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?jw[r.property]||r.property:r.attribute,n]}}function kk(e,t){try{return ok(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new bt("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=O3+"#cannot-parse-style-attribute",i}}function H3(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let s=-1,l;for(;++s<i.length;){const a=_h(i[s])?{type:"Identifier",name:i[s]}:{type:"Literal",value:i[s]};l=l?{type:"MemberExpression",object:l,property:a,computed:!!(s&&a.type==="Literal"),optional:!1}:a}r=l}else r=_h(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return o0.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Cs(e)}function Cs(e,t){const n=new bt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=O3+"#cannot-handle-mdx-estrees-without-createevaluater",n}function jk(e){const t={};let n;for(n in e)o0.call(e,n)&&(t[Sk(n)]=e[n]);return t}function Sk(e){let t=e.replace(ak,$k);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function $k(e){return"-"+e.toLowerCase()}const pu={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Ck={};function Ek(e,t){const n=Ck,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return U3(e,r,i)}function U3(e,t,n){if(Pk(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Yh(e.children,t,n)}return Array.isArray(e)?Yh(e,t,n):""}function Yh(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=U3(e[i],t,n);return r.join("")}function Pk(e){return!!(e&&typeof e=="object")}const Gh=document.createElement("i");function a0(e){const t="&"+e+";";Gh.innerHTML=t;const n=Gh.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function In(e,t,n,r){const i=e.length;let s=0,l;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)l=Array.from(r),l.unshift(t,n),e.splice(...l);else for(n&&e.splice(t,n);s<r.length;)l=r.slice(s,s+1e4),l.unshift(t,0),e.splice(...l),s+=1e4,t+=1e4}function Xt(e,t){return e.length>0?(In(e,e.length,0,t),e):t}const Zh={}.hasOwnProperty;function Ik(e){const t={};let n=-1;for(;++n<e.length;)Tk(t,e[n]);return t}function Tk(e,t){let n;for(n in t){const i=(Zh.call(e,n)?e[n]:void 0)||(e[n]={}),s=t[n];let l;if(s)for(l in s){Zh.call(i,l)||(i[l]=[]);const a=s[l];Rk(i[l],Array.isArray(a)?a:a?[a]:[])}}}function Rk(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);In(e,0,0,r)}function V3(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Ai(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const $n=wr(/[A-Za-z]/),Ht=wr(/[\dA-Za-z]/),zk=wr(/[#-'*+\--9=?A-Z^-~]/);function R1(e){return e!==null&&(e<32||e===127)}const z1=wr(/\d/),Mk=wr(/[\dA-Fa-f]/),Ak=wr(/[!-/:-@[-`{-~]/);function se(e){return e!==null&&e<-2}function At(e){return e!==null&&(e<0||e===32)}function we(e){return e===-2||e===-1||e===32}const _k=wr(new RegExp("\\p{P}|\\p{S}","u")),Nk=wr(/\s/);function wr(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function oo(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const s=e.charCodeAt(n);let l="";if(s===37&&Ht(e.charCodeAt(n+1))&&Ht(e.charCodeAt(n+2)))i=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(l=String.fromCharCode(s));else if(s>55295&&s<57344){const a=e.charCodeAt(n+1);s<56320&&a>56319&&a<57344?(l=String.fromCharCode(s,a),i=1):l="�"}else l=String.fromCharCode(s);l&&(t.push(e.slice(r,n),encodeURIComponent(l)),r=n+i+1,l=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function ze(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let s=0;return l;function l(c){return we(c)?(e.enter(n),a(c)):t(c)}function a(c){return we(c)&&s++<i?(e.consume(c),a):(e.exit(n),t(c))}}const Dk={tokenize:Ok};function Ok(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),ze(e,t,"linePrefix")}function i(a){return e.enter("paragraph"),s(a)}function s(a){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,l(a)}function l(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return se(a)?(e.consume(a),e.exit("chunkText"),s):(e.consume(a),l)}}const Bk={tokenize:Fk},qh={tokenize:Hk};function Fk(e){const t=this,n=[];let r=0,i,s,l;return a;function a(y){if(r<n.length){const S=n[r];return t.containerState=S[1],e.attempt(S[0].continuation,c,d)(y)}return d(y)}function c(y){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&L();const S=t.events.length;let I=S,k;for(;I--;)if(t.events[I][0]==="exit"&&t.events[I][1].type==="chunkFlow"){k=t.events[I][1].end;break}x(r);let j=S;for(;j<t.events.length;)t.events[j][1].end={...k},j++;return In(t.events,I+1,0,t.events.slice(S)),t.events.length=j,d(y)}return a(y)}function d(y){if(r===n.length){if(!i)return h(y);if(i.currentConstruct&&i.currentConstruct.concrete)return b(y);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(qh,p,f)(y)}function p(y){return i&&L(),x(r),h(y)}function f(y){return t.parser.lazy[t.now().line]=r!==n.length,l=t.now().offset,b(y)}function h(y){return t.containerState={},e.attempt(qh,g,b)(y)}function g(y){return r++,n.push([t.currentConstruct,t.containerState]),h(y)}function b(y){if(y===null){i&&L(),x(0),e.consume(y);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:s}),v(y)}function v(y){if(y===null){$(e.exit("chunkFlow"),!0),x(0),e.consume(y);return}return se(y)?(e.consume(y),$(e.exit("chunkFlow")),r=0,t.interrupt=void 0,a):(e.consume(y),v)}function $(y,S){const I=t.sliceStream(y);if(S&&I.push(null),y.previous=s,s&&(s.next=y),s=y,i.defineSkip(y.start),i.write(I),t.parser.lazy[y.start.line]){let k=i.events.length;for(;k--;)if(i.events[k][1].start.offset<l&&(!i.events[k][1].end||i.events[k][1].end.offset>l))return;const j=t.events.length;let R=j,z,T;for(;R--;)if(t.events[R][0]==="exit"&&t.events[R][1].type==="chunkFlow"){if(z){T=t.events[R][1].end;break}z=!0}for(x(r),k=j;k<t.events.length;)t.events[k][1].end={...T},k++;In(t.events,R+1,0,t.events.slice(j)),t.events.length=k}}function x(y){let S=n.length;for(;S-- >y;){const I=n[S];t.containerState=I[1],I[0].exit.call(t,e)}n.length=y}function L(){i.write([null]),s=void 0,i=void 0,t.containerState._closeFlow=void 0}}function Hk(e,t,n){return ze(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Qh(e){if(e===null||At(e)||Nk(e))return 1;if(_k(e))return 2}function c0(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const s=e[i].resolveAll;s&&!r.includes(s)&&(t=s(t,n),r.push(s))}return t}const M1={name:"attention",resolveAll:Uk,tokenize:Vk};function Uk(e,t){let n=-1,r,i,s,l,a,c,d,p;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const f={...e[r][1].end},h={...e[n][1].start};Xh(f,-c),Xh(h,c),l={type:c>1?"strongSequence":"emphasisSequence",start:f,end:{...e[r][1].end}},a={type:c>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:h},s={type:c>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?"strong":"emphasis",start:{...l.start},end:{...a.end}},e[r][1].end={...l.start},e[n][1].start={...a.end},d=[],e[r][1].end.offset-e[r][1].start.offset&&(d=Xt(d,[["enter",e[r][1],t],["exit",e[r][1],t]])),d=Xt(d,[["enter",i,t],["enter",l,t],["exit",l,t],["enter",s,t]]),d=Xt(d,c0(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),d=Xt(d,[["exit",s,t],["enter",a,t],["exit",a,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(p=2,d=Xt(d,[["enter",e[n][1],t],["exit",e[n][1],t]])):p=0,In(e,r-1,n-r+3,d),n=r+d.length-p-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function Vk(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Qh(r);let s;return l;function l(c){return s=c,e.enter("attentionSequence"),a(c)}function a(c){if(c===s)return e.consume(c),a;const d=e.exit("attentionSequence"),p=Qh(c),f=!p||p===2&&i||n.includes(c),h=!i||i===2&&p||n.includes(r);return d._open=!!(s===42?f:f&&(i||!h)),d._close=!!(s===42?h:h&&(p||!f)),t(c)}}function Xh(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const Wk={name:"autolink",tokenize:Kk};function Kk(e,t,n){let r=0;return i;function i(g){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(g),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),s}function s(g){return $n(g)?(e.consume(g),l):g===64?n(g):d(g)}function l(g){return g===43||g===45||g===46||Ht(g)?(r=1,a(g)):d(g)}function a(g){return g===58?(e.consume(g),r=0,c):(g===43||g===45||g===46||Ht(g))&&r++<32?(e.consume(g),a):(r=0,d(g))}function c(g){return g===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(g),e.exit("autolinkMarker"),e.exit("autolink"),t):g===null||g===32||g===60||R1(g)?n(g):(e.consume(g),c)}function d(g){return g===64?(e.consume(g),p):zk(g)?(e.consume(g),d):n(g)}function p(g){return Ht(g)?f(g):n(g)}function f(g){return g===46?(e.consume(g),r=0,p):g===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(g),e.exit("autolinkMarker"),e.exit("autolink"),t):h(g)}function h(g){if((g===45||Ht(g))&&r++<63){const b=g===45?h:f;return e.consume(g),b}return n(g)}}const cc={partial:!0,tokenize:Yk};function Yk(e,t,n){return r;function r(s){return we(s)?ze(e,i,"linePrefix")(s):i(s)}function i(s){return s===null||se(s)?t(s):n(s)}}const W3={continuation:{tokenize:Zk},exit:qk,name:"blockQuote",tokenize:Gk};function Gk(e,t,n){const r=this;return i;function i(l){if(l===62){const a=r.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(l),e.exit("blockQuoteMarker"),s}return n(l)}function s(l){return we(l)?(e.enter("blockQuotePrefixWhitespace"),e.consume(l),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(l))}}function Zk(e,t,n){const r=this;return i;function i(l){return we(l)?ze(e,s,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l):s(l)}function s(l){return e.attempt(W3,t,n)(l)}}function qk(e){e.exit("blockQuote")}const K3={name:"characterEscape",tokenize:Qk};function Qk(e,t,n){return r;function r(s){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(s),e.exit("escapeMarker"),i}function i(s){return Ak(s)?(e.enter("characterEscapeValue"),e.consume(s),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(s)}}const Y3={name:"characterReference",tokenize:Xk};function Xk(e,t,n){const r=this;let i=0,s,l;return a;function a(f){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),c}function c(f){return f===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(f),e.exit("characterReferenceMarkerNumeric"),d):(e.enter("characterReferenceValue"),s=31,l=Ht,p(f))}function d(f){return f===88||f===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(f),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),s=6,l=Mk,p):(e.enter("characterReferenceValue"),s=7,l=z1,p(f))}function p(f){if(f===59&&i){const h=e.exit("characterReferenceValue");return l===Ht&&!a0(r.sliceSerialize(h))?n(f):(e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return l(f)&&i++<s?(e.consume(f),p):n(f)}}const Jh={partial:!0,tokenize:ej},e2={concrete:!0,name:"codeFenced",tokenize:Jk};function Jk(e,t,n){const r=this,i={partial:!0,tokenize:I};let s=0,l=0,a;return c;function c(k){return d(k)}function d(k){const j=r.events[r.events.length-1];return s=j&&j[1].type==="linePrefix"?j[2].sliceSerialize(j[1],!0).length:0,a=k,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),p(k)}function p(k){return k===a?(l++,e.consume(k),p):l<3?n(k):(e.exit("codeFencedFenceSequence"),we(k)?ze(e,f,"whitespace")(k):f(k))}function f(k){return k===null||se(k)?(e.exit("codeFencedFence"),r.interrupt?t(k):e.check(Jh,v,S)(k)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),h(k))}function h(k){return k===null||se(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),f(k)):we(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),ze(e,g,"whitespace")(k)):k===96&&k===a?n(k):(e.consume(k),h)}function g(k){return k===null||se(k)?f(k):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),b(k))}function b(k){return k===null||se(k)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),f(k)):k===96&&k===a?n(k):(e.consume(k),b)}function v(k){return e.attempt(i,S,$)(k)}function $(k){return e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),x}function x(k){return s>0&&we(k)?ze(e,L,"linePrefix",s+1)(k):L(k)}function L(k){return k===null||se(k)?e.check(Jh,v,S)(k):(e.enter("codeFlowValue"),y(k))}function y(k){return k===null||se(k)?(e.exit("codeFlowValue"),L(k)):(e.consume(k),y)}function S(k){return e.exit("codeFenced"),t(k)}function I(k,j,R){let z=0;return T;function T(F){return k.enter("lineEnding"),k.consume(F),k.exit("lineEnding"),P}function P(F){return k.enter("codeFencedFence"),we(F)?ze(k,E,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(F):E(F)}function E(F){return F===a?(k.enter("codeFencedFenceSequence"),A(F)):R(F)}function A(F){return F===a?(z++,k.consume(F),A):z>=l?(k.exit("codeFencedFenceSequence"),we(F)?ze(k,N,"whitespace")(F):N(F)):R(F)}function N(F){return F===null||se(F)?(k.exit("codeFencedFence"),j(F)):R(F)}}}function ej(e,t,n){const r=this;return i;function i(l){return l===null?n(l):(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),s)}function s(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}const fu={name:"codeIndented",tokenize:nj},tj={partial:!0,tokenize:rj};function nj(e,t,n){const r=this;return i;function i(d){return e.enter("codeIndented"),ze(e,s,"linePrefix",5)(d)}function s(d){const p=r.events[r.events.length-1];return p&&p[1].type==="linePrefix"&&p[2].sliceSerialize(p[1],!0).length>=4?l(d):n(d)}function l(d){return d===null?c(d):se(d)?e.attempt(tj,l,c)(d):(e.enter("codeFlowValue"),a(d))}function a(d){return d===null||se(d)?(e.exit("codeFlowValue"),l(d)):(e.consume(d),a)}function c(d){return e.exit("codeIndented"),t(d)}}function rj(e,t,n){const r=this;return i;function i(l){return r.parser.lazy[r.now().line]?n(l):se(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),i):ze(e,s,"linePrefix",5)(l)}function s(l){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(l):se(l)?i(l):n(l)}}const ij={name:"codeText",previous:sj,resolve:oj,tokenize:lj};function oj(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function sj(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function lj(e,t,n){let r=0,i,s;return l;function l(f){return e.enter("codeText"),e.enter("codeTextSequence"),a(f)}function a(f){return f===96?(e.consume(f),r++,a):(e.exit("codeTextSequence"),c(f))}function c(f){return f===null?n(f):f===32?(e.enter("space"),e.consume(f),e.exit("space"),c):f===96?(s=e.enter("codeTextSequence"),i=0,p(f)):se(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),c):(e.enter("codeTextData"),d(f))}function d(f){return f===null||f===32||f===96||se(f)?(e.exit("codeTextData"),c(f)):(e.consume(f),d)}function p(f){return f===96?(e.consume(f),i++,p):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(f)):(s.type="codeTextData",d(f))}}class aj{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const s=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&vo(this.left,r),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),vo(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),vo(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);vo(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);vo(this.left,n.reverse())}}}function vo(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function G3(e){const t={};let n=-1,r,i,s,l,a,c,d;const p=new aj(e);for(;++n<p.length;){for(;n in t;)n=t[n];if(r=p.get(n),n&&r[1].type==="chunkFlow"&&p.get(n-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,s=0,s<c.length&&c[s][1].type==="lineEndingBlank"&&(s+=2),s<c.length&&c[s][1].type==="content"))for(;++s<c.length&&c[s][1].type!=="content";)c[s][1].type==="chunkText"&&(c[s][1]._isInFirstContentOfListItem=!0,s++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,cj(p,n)),n=t[n],d=!0);else if(r[1]._container){for(s=n,i=void 0;s--;)if(l=p.get(s),l[1].type==="lineEnding"||l[1].type==="lineEndingBlank")l[0]==="enter"&&(i&&(p.get(i)[1].type="lineEndingBlank"),l[1].type="lineEnding",i=s);else if(!(l[1].type==="linePrefix"||l[1].type==="listItemIndent"))break;i&&(r[1].end={...p.get(i)[1].start},a=p.slice(i,n),a.unshift(r),p.splice(i,n-i+1,a))}}return In(e,0,Number.POSITIVE_INFINITY,p.slice(0)),!d}function cj(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const s=[];let l=n._tokenizer;l||(l=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(l._contentTypeTextTrailing=!0));const a=l.events,c=[],d={};let p,f,h=-1,g=n,b=0,v=0;const $=[v];for(;g;){for(;e.get(++i)[1]!==g;);s.push(i),g._tokenizer||(p=r.sliceStream(g),g.next||p.push(null),f&&l.defineSkip(g.start),g._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(p),g._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),f=g,g=g.next}for(g=n;++h<a.length;)a[h][0]==="exit"&&a[h-1][0]==="enter"&&a[h][1].type===a[h-1][1].type&&a[h][1].start.line!==a[h][1].end.line&&(v=h+1,$.push(v),g._tokenizer=void 0,g.previous=void 0,g=g.next);for(l.events=[],g?(g._tokenizer=void 0,g.previous=void 0):$.pop(),h=$.length;h--;){const x=a.slice($[h],$[h+1]),L=s.pop();c.push([L,L+x.length-1]),e.splice(L,2,x)}for(c.reverse(),h=-1;++h<c.length;)d[b+c[h][0]]=b+c[h][1],b+=c[h][1]-c[h][0]-1;return d}const uj={resolve:pj,tokenize:fj},dj={partial:!0,tokenize:hj};function pj(e){return G3(e),e}function fj(e,t){let n;return r;function r(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?s(a):se(a)?e.check(dj,l,s)(a):(e.consume(a),i)}function s(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function l(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function hj(e,t,n){const r=this;return i;function i(l){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),ze(e,s,"linePrefix")}function s(l){if(l===null||se(l))return n(l);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(l):e.interrupt(r.parser.constructs.flow,n,t)(l)}}function Z3(e,t,n,r,i,s,l,a,c){const d=c||Number.POSITIVE_INFINITY;let p=0;return f;function f(x){return x===60?(e.enter(r),e.enter(i),e.enter(s),e.consume(x),e.exit(s),h):x===null||x===32||x===41||R1(x)?n(x):(e.enter(r),e.enter(l),e.enter(a),e.enter("chunkString",{contentType:"string"}),v(x))}function h(x){return x===62?(e.enter(s),e.consume(x),e.exit(s),e.exit(i),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),g(x))}function g(x){return x===62?(e.exit("chunkString"),e.exit(a),h(x)):x===null||x===60||se(x)?n(x):(e.consume(x),x===92?b:g)}function b(x){return x===60||x===62||x===92?(e.consume(x),g):g(x)}function v(x){return!p&&(x===null||x===41||At(x))?(e.exit("chunkString"),e.exit(a),e.exit(l),e.exit(r),t(x)):p<d&&x===40?(e.consume(x),p++,v):x===41?(e.consume(x),p--,v):x===null||x===32||x===40||R1(x)?n(x):(e.consume(x),x===92?$:v)}function $(x){return x===40||x===41||x===92?(e.consume(x),v):v(x)}}function q3(e,t,n,r,i,s){const l=this;let a=0,c;return d;function d(g){return e.enter(r),e.enter(i),e.consume(g),e.exit(i),e.enter(s),p}function p(g){return a>999||g===null||g===91||g===93&&!c||g===94&&!a&&"_hiddenFootnoteSupport"in l.parser.constructs?n(g):g===93?(e.exit(s),e.enter(i),e.consume(g),e.exit(i),e.exit(r),t):se(g)?(e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),p):(e.enter("chunkString",{contentType:"string"}),f(g))}function f(g){return g===null||g===91||g===93||se(g)||a++>999?(e.exit("chunkString"),p(g)):(e.consume(g),c||(c=!we(g)),g===92?h:f)}function h(g){return g===91||g===92||g===93?(e.consume(g),a++,f):f(g)}}function Q3(e,t,n,r,i,s){let l;return a;function a(h){return h===34||h===39||h===40?(e.enter(r),e.enter(i),e.consume(h),e.exit(i),l=h===40?41:h,c):n(h)}function c(h){return h===l?(e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):(e.enter(s),d(h))}function d(h){return h===l?(e.exit(s),c(l)):h===null?n(h):se(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),ze(e,d,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),p(h))}function p(h){return h===l||h===null||se(h)?(e.exit("chunkString"),d(h)):(e.consume(h),h===92?f:p)}function f(h){return h===l||h===92?(e.consume(h),p):p(h)}}function ns(e,t){let n;return r;function r(i){return se(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):we(i)?ze(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const gj={name:"definition",tokenize:xj},mj={partial:!0,tokenize:Lj};function xj(e,t,n){const r=this;let i;return s;function s(g){return e.enter("definition"),l(g)}function l(g){return q3.call(r,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(g)}function a(g){return i=Ai(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),g===58?(e.enter("definitionMarker"),e.consume(g),e.exit("definitionMarker"),c):n(g)}function c(g){return At(g)?ns(e,d)(g):d(g)}function d(g){return Z3(e,p,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(g)}function p(g){return e.attempt(mj,f,f)(g)}function f(g){return we(g)?ze(e,h,"whitespace")(g):h(g)}function h(g){return g===null||se(g)?(e.exit("definition"),r.parser.defined.push(i),t(g)):n(g)}}function Lj(e,t,n){return r;function r(a){return At(a)?ns(e,i)(a):n(a)}function i(a){return Q3(e,s,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function s(a){return we(a)?ze(e,l,"whitespace")(a):l(a)}function l(a){return a===null||se(a)?t(a):n(a)}}const yj={name:"hardBreakEscape",tokenize:vj};function vj(e,t,n){return r;function r(s){return e.enter("hardBreakEscape"),e.consume(s),i}function i(s){return se(s)?(e.exit("hardBreakEscape"),t(s)):n(s)}}const bj={name:"headingAtx",resolve:wj,tokenize:kj};function wj(e,t){let n=e.length-2,r=3,i,s;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},s={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},In(e,r,n-r+1,[["enter",i,t],["enter",s,t],["exit",s,t],["exit",i,t]])),e}function kj(e,t,n){let r=0;return i;function i(p){return e.enter("atxHeading"),s(p)}function s(p){return e.enter("atxHeadingSequence"),l(p)}function l(p){return p===35&&r++<6?(e.consume(p),l):p===null||At(p)?(e.exit("atxHeadingSequence"),a(p)):n(p)}function a(p){return p===35?(e.enter("atxHeadingSequence"),c(p)):p===null||se(p)?(e.exit("atxHeading"),t(p)):we(p)?ze(e,a,"whitespace")(p):(e.enter("atxHeadingText"),d(p))}function c(p){return p===35?(e.consume(p),c):(e.exit("atxHeadingSequence"),a(p))}function d(p){return p===null||p===35||At(p)?(e.exit("atxHeadingText"),a(p)):(e.consume(p),d)}}const jj=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],t2=["pre","script","style","textarea"],Sj={concrete:!0,name:"htmlFlow",resolveTo:Ej,tokenize:Pj},$j={partial:!0,tokenize:Tj},Cj={partial:!0,tokenize:Ij};function Ej(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Pj(e,t,n){const r=this;let i,s,l,a,c;return d;function d(w){return p(w)}function p(w){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(w),f}function f(w){return w===33?(e.consume(w),h):w===47?(e.consume(w),s=!0,v):w===63?(e.consume(w),i=3,r.interrupt?t:C):$n(w)?(e.consume(w),l=String.fromCharCode(w),$):n(w)}function h(w){return w===45?(e.consume(w),i=2,g):w===91?(e.consume(w),i=5,a=0,b):$n(w)?(e.consume(w),i=4,r.interrupt?t:C):n(w)}function g(w){return w===45?(e.consume(w),r.interrupt?t:C):n(w)}function b(w){const H="CDATA[";return w===H.charCodeAt(a++)?(e.consume(w),a===H.length?r.interrupt?t:E:b):n(w)}function v(w){return $n(w)?(e.consume(w),l=String.fromCharCode(w),$):n(w)}function $(w){if(w===null||w===47||w===62||At(w)){const H=w===47,M=l.toLowerCase();return!H&&!s&&t2.includes(M)?(i=1,r.interrupt?t(w):E(w)):jj.includes(l.toLowerCase())?(i=6,H?(e.consume(w),x):r.interrupt?t(w):E(w)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(w):s?L(w):y(w))}return w===45||Ht(w)?(e.consume(w),l+=String.fromCharCode(w),$):n(w)}function x(w){return w===62?(e.consume(w),r.interrupt?t:E):n(w)}function L(w){return we(w)?(e.consume(w),L):T(w)}function y(w){return w===47?(e.consume(w),T):w===58||w===95||$n(w)?(e.consume(w),S):we(w)?(e.consume(w),y):T(w)}function S(w){return w===45||w===46||w===58||w===95||Ht(w)?(e.consume(w),S):I(w)}function I(w){return w===61?(e.consume(w),k):we(w)?(e.consume(w),I):y(w)}function k(w){return w===null||w===60||w===61||w===62||w===96?n(w):w===34||w===39?(e.consume(w),c=w,j):we(w)?(e.consume(w),k):R(w)}function j(w){return w===c?(e.consume(w),c=null,z):w===null||se(w)?n(w):(e.consume(w),j)}function R(w){return w===null||w===34||w===39||w===47||w===60||w===61||w===62||w===96||At(w)?I(w):(e.consume(w),R)}function z(w){return w===47||w===62||we(w)?y(w):n(w)}function T(w){return w===62?(e.consume(w),P):n(w)}function P(w){return w===null||se(w)?E(w):we(w)?(e.consume(w),P):n(w)}function E(w){return w===45&&i===2?(e.consume(w),Y):w===60&&i===1?(e.consume(w),Q):w===62&&i===4?(e.consume(w),X):w===63&&i===3?(e.consume(w),C):w===93&&i===5?(e.consume(w),D):se(w)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check($j,J,A)(w)):w===null||se(w)?(e.exit("htmlFlowData"),A(w)):(e.consume(w),E)}function A(w){return e.check(Cj,N,J)(w)}function N(w){return e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),F}function F(w){return w===null||se(w)?A(w):(e.enter("htmlFlowData"),E(w))}function Y(w){return w===45?(e.consume(w),C):E(w)}function Q(w){return w===47?(e.consume(w),l="",_):E(w)}function _(w){if(w===62){const H=l.toLowerCase();return t2.includes(H)?(e.consume(w),X):E(w)}return $n(w)&&l.length<8?(e.consume(w),l+=String.fromCharCode(w),_):E(w)}function D(w){return w===93?(e.consume(w),C):E(w)}function C(w){return w===62?(e.consume(w),X):w===45&&i===2?(e.consume(w),C):E(w)}function X(w){return w===null||se(w)?(e.exit("htmlFlowData"),J(w)):(e.consume(w),X)}function J(w){return e.exit("htmlFlow"),t(w)}}function Ij(e,t,n){const r=this;return i;function i(l){return se(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),s):n(l)}function s(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}function Tj(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(cc,t,n)}}const Rj={name:"htmlText",tokenize:zj};function zj(e,t,n){const r=this;let i,s,l;return a;function a(C){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(C),c}function c(C){return C===33?(e.consume(C),d):C===47?(e.consume(C),I):C===63?(e.consume(C),y):$n(C)?(e.consume(C),R):n(C)}function d(C){return C===45?(e.consume(C),p):C===91?(e.consume(C),s=0,b):$n(C)?(e.consume(C),L):n(C)}function p(C){return C===45?(e.consume(C),g):n(C)}function f(C){return C===null?n(C):C===45?(e.consume(C),h):se(C)?(l=f,Q(C)):(e.consume(C),f)}function h(C){return C===45?(e.consume(C),g):f(C)}function g(C){return C===62?Y(C):C===45?h(C):f(C)}function b(C){const X="CDATA[";return C===X.charCodeAt(s++)?(e.consume(C),s===X.length?v:b):n(C)}function v(C){return C===null?n(C):C===93?(e.consume(C),$):se(C)?(l=v,Q(C)):(e.consume(C),v)}function $(C){return C===93?(e.consume(C),x):v(C)}function x(C){return C===62?Y(C):C===93?(e.consume(C),x):v(C)}function L(C){return C===null||C===62?Y(C):se(C)?(l=L,Q(C)):(e.consume(C),L)}function y(C){return C===null?n(C):C===63?(e.consume(C),S):se(C)?(l=y,Q(C)):(e.consume(C),y)}function S(C){return C===62?Y(C):y(C)}function I(C){return $n(C)?(e.consume(C),k):n(C)}function k(C){return C===45||Ht(C)?(e.consume(C),k):j(C)}function j(C){return se(C)?(l=j,Q(C)):we(C)?(e.consume(C),j):Y(C)}function R(C){return C===45||Ht(C)?(e.consume(C),R):C===47||C===62||At(C)?z(C):n(C)}function z(C){return C===47?(e.consume(C),Y):C===58||C===95||$n(C)?(e.consume(C),T):se(C)?(l=z,Q(C)):we(C)?(e.consume(C),z):Y(C)}function T(C){return C===45||C===46||C===58||C===95||Ht(C)?(e.consume(C),T):P(C)}function P(C){return C===61?(e.consume(C),E):se(C)?(l=P,Q(C)):we(C)?(e.consume(C),P):z(C)}function E(C){return C===null||C===60||C===61||C===62||C===96?n(C):C===34||C===39?(e.consume(C),i=C,A):se(C)?(l=E,Q(C)):we(C)?(e.consume(C),E):(e.consume(C),N)}function A(C){return C===i?(e.consume(C),i=void 0,F):C===null?n(C):se(C)?(l=A,Q(C)):(e.consume(C),A)}function N(C){return C===null||C===34||C===39||C===60||C===61||C===96?n(C):C===47||C===62||At(C)?z(C):(e.consume(C),N)}function F(C){return C===47||C===62||At(C)?z(C):n(C)}function Y(C){return C===62?(e.consume(C),e.exit("htmlTextData"),e.exit("htmlText"),t):n(C)}function Q(C){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(C),e.exit("lineEnding"),_}function _(C){return we(C)?ze(e,D,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(C):D(C)}function D(C){return e.enter("htmlTextData"),l(C)}}const u0={name:"labelEnd",resolveAll:Nj,resolveTo:Dj,tokenize:Oj},Mj={tokenize:Bj},Aj={tokenize:Fj},_j={tokenize:Hj};function Nj(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&In(e,0,e.length,n),e}function Dj(e,t){let n=e.length,r=0,i,s,l,a;for(;n--;)if(i=e[n][1],s){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(l){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(s=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(l=n);const c={type:e[s][1].type==="labelLink"?"link":"image",start:{...e[s][1].start},end:{...e[e.length-1][1].end}},d={type:"label",start:{...e[s][1].start},end:{...e[l][1].end}},p={type:"labelText",start:{...e[s+r+2][1].end},end:{...e[l-2][1].start}};return a=[["enter",c,t],["enter",d,t]],a=Xt(a,e.slice(s+1,s+r+3)),a=Xt(a,[["enter",p,t]]),a=Xt(a,c0(t.parser.constructs.insideSpan.null,e.slice(s+r+4,l-3),t)),a=Xt(a,[["exit",p,t],e[l-2],e[l-1],["exit",d,t]]),a=Xt(a,e.slice(l+1)),a=Xt(a,[["exit",c,t]]),In(e,s,e.length,a),e}function Oj(e,t,n){const r=this;let i=r.events.length,s,l;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){s=r.events[i][1];break}return a;function a(h){return s?s._inactive?f(h):(l=r.parser.defined.includes(Ai(r.sliceSerialize({start:s.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(h),e.exit("labelMarker"),e.exit("labelEnd"),c):n(h)}function c(h){return h===40?e.attempt(Mj,p,l?p:f)(h):h===91?e.attempt(Aj,p,l?d:f)(h):l?p(h):f(h)}function d(h){return e.attempt(_j,p,f)(h)}function p(h){return t(h)}function f(h){return s._balanced=!0,n(h)}}function Bj(e,t,n){return r;function r(f){return e.enter("resource"),e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),i}function i(f){return At(f)?ns(e,s)(f):s(f)}function s(f){return f===41?p(f):Z3(e,l,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(f)}function l(f){return At(f)?ns(e,c)(f):p(f)}function a(f){return n(f)}function c(f){return f===34||f===39||f===40?Q3(e,d,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(f):p(f)}function d(f){return At(f)?ns(e,p)(f):p(f)}function p(f){return f===41?(e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),e.exit("resource"),t):n(f)}}function Fj(e,t,n){const r=this;return i;function i(a){return q3.call(r,e,s,l,"reference","referenceMarker","referenceString")(a)}function s(a){return r.parser.defined.includes(Ai(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function l(a){return n(a)}}function Hj(e,t,n){return r;function r(s){return e.enter("reference"),e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),i}function i(s){return s===93?(e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),e.exit("reference"),t):n(s)}}const Uj={name:"labelStartImage",resolveAll:u0.resolveAll,tokenize:Vj};function Vj(e,t,n){const r=this;return i;function i(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),s}function s(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),l):n(a)}function l(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const Wj={name:"labelStartLink",resolveAll:u0.resolveAll,tokenize:Kj};function Kj(e,t,n){const r=this;return i;function i(l){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelLink"),s}function s(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const hu={name:"lineEnding",tokenize:Yj};function Yj(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),ze(e,t,"linePrefix")}}const Hl={name:"thematicBreak",tokenize:Gj};function Gj(e,t,n){let r=0,i;return s;function s(d){return e.enter("thematicBreak"),l(d)}function l(d){return i=d,a(d)}function a(d){return d===i?(e.enter("thematicBreakSequence"),c(d)):r>=3&&(d===null||se(d))?(e.exit("thematicBreak"),t(d)):n(d)}function c(d){return d===i?(e.consume(d),r++,c):(e.exit("thematicBreakSequence"),we(d)?ze(e,a,"whitespace")(d):a(d))}}const Pt={continuation:{tokenize:Xj},exit:eS,name:"list",tokenize:Qj},Zj={partial:!0,tokenize:tS},qj={partial:!0,tokenize:Jj};function Qj(e,t,n){const r=this,i=r.events[r.events.length-1];let s=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,l=0;return a;function a(g){const b=r.containerState.type||(g===42||g===43||g===45?"listUnordered":"listOrdered");if(b==="listUnordered"?!r.containerState.marker||g===r.containerState.marker:z1(g)){if(r.containerState.type||(r.containerState.type=b,e.enter(b,{_container:!0})),b==="listUnordered")return e.enter("listItemPrefix"),g===42||g===45?e.check(Hl,n,d)(g):d(g);if(!r.interrupt||g===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(g)}return n(g)}function c(g){return z1(g)&&++l<10?(e.consume(g),c):(!r.interrupt||l<2)&&(r.containerState.marker?g===r.containerState.marker:g===41||g===46)?(e.exit("listItemValue"),d(g)):n(g)}function d(g){return e.enter("listItemMarker"),e.consume(g),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||g,e.check(cc,r.interrupt?n:p,e.attempt(Zj,h,f))}function p(g){return r.containerState.initialBlankLine=!0,s++,h(g)}function f(g){return we(g)?(e.enter("listItemPrefixWhitespace"),e.consume(g),e.exit("listItemPrefixWhitespace"),h):n(g)}function h(g){return r.containerState.size=s+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(g)}}function Xj(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(cc,i,s);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,ze(e,t,"listItemIndent",r.containerState.size+1)(a)}function s(a){return r.containerState.furtherBlankLines||!we(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,l(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(qj,t,l)(a))}function l(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,ze(e,e.attempt(Pt,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function Jj(e,t,n){const r=this;return ze(e,i,"listItemIndent",r.containerState.size+1);function i(s){const l=r.events[r.events.length-1];return l&&l[1].type==="listItemIndent"&&l[2].sliceSerialize(l[1],!0).length===r.containerState.size?t(s):n(s)}}function eS(e){e.exit(this.containerState.type)}function tS(e,t,n){const r=this;return ze(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(s){const l=r.events[r.events.length-1];return!we(s)&&l&&l[1].type==="listItemPrefixWhitespace"?t(s):n(s)}}const n2={name:"setextUnderline",resolveTo:nS,tokenize:rS};function nS(e,t){let n=e.length,r,i,s;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!s&&e[n][1].type==="definition"&&(s=n);const l={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",s?(e.splice(i,0,["enter",l,t]),e.splice(s+1,0,["exit",e[r][1],t]),e[r][1].end={...e[s][1].end}):e[r][1]=l,e.push(["exit",l,t]),e}function rS(e,t,n){const r=this;let i;return s;function s(d){let p=r.events.length,f;for(;p--;)if(r.events[p][1].type!=="lineEnding"&&r.events[p][1].type!=="linePrefix"&&r.events[p][1].type!=="content"){f=r.events[p][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||f)?(e.enter("setextHeadingLine"),i=d,l(d)):n(d)}function l(d){return e.enter("setextHeadingLineSequence"),a(d)}function a(d){return d===i?(e.consume(d),a):(e.exit("setextHeadingLineSequence"),we(d)?ze(e,c,"lineSuffix")(d):c(d))}function c(d){return d===null||se(d)?(e.exit("setextHeadingLine"),t(d)):n(d)}}const iS={tokenize:oS};function oS(e){const t=this,n=e.attempt(cc,r,e.attempt(this.parser.constructs.flowInitial,i,ze(e,e.attempt(this.parser.constructs.flow,i,e.attempt(uj,i)),"linePrefix")));return n;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEndingBlank"),e.consume(s),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const sS={resolveAll:J3()},lS=X3("string"),aS=X3("text");function X3(e){return{resolveAll:J3(e==="text"?cS:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],s=n.attempt(i,l,a);return l;function l(p){return d(p)?s(p):a(p)}function a(p){if(p===null){n.consume(p);return}return n.enter("data"),n.consume(p),c}function c(p){return d(p)?(n.exit("data"),s(p)):(n.consume(p),c)}function d(p){if(p===null)return!0;const f=i[p];let h=-1;if(f)for(;++h<f.length;){const g=f[h];if(!g.previous||g.previous.call(r,r.previous))return!0}return!1}}}function J3(e){return t;function t(n,r){let i=-1,s;for(;++i<=n.length;)s===void 0?n[i]&&n[i][1].type==="data"&&(s=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==s+2&&(n[s][1].end=n[i-1][1].end,n.splice(s+2,i-s-2),i=s+2),s=void 0);return e?e(n,r):n}}function cS(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let s=i.length,l=-1,a=0,c;for(;s--;){const d=i[s];if(typeof d=="string"){for(l=d.length;d.charCodeAt(l-1)===32;)a++,l--;if(l)break;l=-1}else if(d===-2)c=!0,a++;else if(d!==-1){s++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(a=0),a){const d={type:n===e.length||c||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:s?l:r.start._bufferIndex+l,_index:r.start._index+s,line:r.end.line,column:r.end.column-a,offset:r.end.offset-a},end:{...r.end}};r.end={...d.start},r.start.offset===r.end.offset?Object.assign(r,d):(e.splice(n,0,["enter",d,t],["exit",d,t]),n+=2)}n++}return e}const uS={42:Pt,43:Pt,45:Pt,48:Pt,49:Pt,50:Pt,51:Pt,52:Pt,53:Pt,54:Pt,55:Pt,56:Pt,57:Pt,62:W3},dS={91:gj},pS={[-2]:fu,[-1]:fu,32:fu},fS={35:bj,42:Hl,45:[n2,Hl],60:Sj,61:n2,95:Hl,96:e2,126:e2},hS={38:Y3,92:K3},gS={[-5]:hu,[-4]:hu,[-3]:hu,33:Uj,38:Y3,42:M1,60:[Wk,Rj],91:Wj,92:[yj,K3],93:u0,95:M1,96:ij},mS={null:[M1,sS]},xS={null:[42,95]},LS={null:[]},yS=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:xS,contentInitial:dS,disable:LS,document:uS,flow:fS,flowInitial:pS,insideSpan:mS,string:hS,text:gS},Symbol.toStringTag,{value:"Module"}));function vS(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},s=[];let l=[],a=[];const c={attempt:j(I),check:j(k),consume:L,enter:y,exit:S,interrupt:j(k,{interrupt:!0})},d={code:null,containerState:{},defineSkip:v,events:[],now:b,parser:e,previous:null,sliceSerialize:h,sliceStream:g,write:f};let p=t.tokenize.call(d,c);return t.resolveAll&&s.push(t),d;function f(P){return l=Xt(l,P),$(),l[l.length-1]!==null?[]:(R(t,0),d.events=c0(s,d.events,d),d.events)}function h(P,E){return wS(g(P),E)}function g(P){return bS(l,P)}function b(){const{_bufferIndex:P,_index:E,line:A,column:N,offset:F}=r;return{_bufferIndex:P,_index:E,line:A,column:N,offset:F}}function v(P){i[P.line]=P.column,T()}function $(){let P;for(;r._index<l.length;){const E=l[r._index];if(typeof E=="string")for(P=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===P&&r._bufferIndex<E.length;)x(E.charCodeAt(r._bufferIndex));else x(E)}}function x(P){p=p(P)}function L(P){se(P)?(r.line++,r.column=1,r.offset+=P===-3?2:1,T()):P!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===l[r._index].length&&(r._bufferIndex=-1,r._index++)),d.previous=P}function y(P,E){const A=E||{};return A.type=P,A.start=b(),d.events.push(["enter",A,d]),a.push(A),A}function S(P){const E=a.pop();return E.end=b(),d.events.push(["exit",E,d]),E}function I(P,E){R(P,E.from)}function k(P,E){E.restore()}function j(P,E){return A;function A(N,F,Y){let Q,_,D,C;return Array.isArray(N)?J(N):"tokenize"in N?J([N]):X(N);function X(G){return U;function U(ne){const de=ne!==null&&G[ne],q=ne!==null&&G.null,te=[...Array.isArray(de)?de:de?[de]:[],...Array.isArray(q)?q:q?[q]:[]];return J(te)(ne)}}function J(G){return Q=G,_=0,G.length===0?Y:w(G[_])}function w(G){return U;function U(ne){return C=z(),D=G,G.partial||(d.currentConstruct=G),G.name&&d.parser.constructs.disable.null.includes(G.name)?M():G.tokenize.call(E?Object.assign(Object.create(d),E):d,c,H,M)(ne)}}function H(G){return P(D,C),F}function M(G){return C.restore(),++_<Q.length?w(Q[_]):Y}}}function R(P,E){P.resolveAll&&!s.includes(P)&&s.push(P),P.resolve&&In(d.events,E,d.events.length-E,P.resolve(d.events.slice(E),d)),P.resolveTo&&(d.events=P.resolveTo(d.events,d))}function z(){const P=b(),E=d.previous,A=d.currentConstruct,N=d.events.length,F=Array.from(a);return{from:N,restore:Y};function Y(){r=P,d.previous=E,d.currentConstruct=A,d.events.length=N,a=F,T()}}function T(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function bS(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,s=t.end._bufferIndex;let l;if(n===i)l=[e[n].slice(r,s)];else{if(l=e.slice(n,i),r>-1){const a=l[0];typeof a=="string"?l[0]=a.slice(r):l.shift()}s>0&&l.push(e[i].slice(0,s))}return l}function wS(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const s=e[n];let l;if(typeof s=="string")l=s;else switch(s){case-5:{l="\r";break}case-4:{l=`
`;break}case-3:{l=`\r
`;break}case-2:{l=t?" ":"	";break}case-1:{if(!t&&i)continue;l=" ";break}default:l=String.fromCharCode(s)}i=s===-2,r.push(l)}return r.join("")}function kS(e){const r={constructs:Ik([yS,...(e||{}).extensions||[]]),content:i(Dk),defined:[],document:i(Bk),flow:i(iS),lazy:{},string:i(lS),text:i(aS)};return r;function i(s){return l;function l(a){return vS(r,s,a)}}}function jS(e){for(;!G3(e););return e}const r2=/[\0\t\n\r]/g;function SS(){let e=1,t="",n=!0,r;return i;function i(s,l,a){const c=[];let d,p,f,h,g;for(s=t+(typeof s=="string"?s.toString():new TextDecoder(l||void 0).decode(s)),f=0,t="",n&&(s.charCodeAt(0)===65279&&f++,n=void 0);f<s.length;){if(r2.lastIndex=f,d=r2.exec(s),h=d&&d.index!==void 0?d.index:s.length,g=s.charCodeAt(h),!d){t=s.slice(f);break}if(g===10&&f===h&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),f<h&&(c.push(s.slice(f,h)),e+=h-f),g){case 0:{c.push(65533),e++;break}case 9:{for(p=Math.ceil(e/4)*4,c.push(-2);e++<p;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}f=h+1}return a&&(r&&c.push(-5),t&&c.push(t),c.push(null)),c}}const $S=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function CS(e){return e.replace($S,ES)}function ES(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),s=i===120||i===88;return V3(n.slice(s?2:1),s?16:10)}return a0(n)||e}const e5={}.hasOwnProperty;function PS(e,t,n){return t&&typeof t=="object"&&(n=t,t=void 0),IS(n)(jS(kS(n).document().write(SS()(e,t,!0))))}function IS(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:s(re),autolinkProtocol:z,autolinkEmail:z,atxHeading:s(Me),blockQuote:s(q),characterEscape:z,characterReference:z,codeFenced:s(te),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:s(te,l),codeText:s(le,l),codeTextData:z,data:z,codeFlowValue:z,definition:s(xe),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:s($e),hardBreakEscape:s(De),hardBreakTrailing:s(De),htmlFlow:s(Ee,l),htmlFlowData:z,htmlText:s(Ee,l),htmlTextData:z,image:s(Ct),label:l,link:s(re),listItem:s(Ie),listItemValue:h,listOrdered:s(Pe,f),listUnordered:s(Pe),paragraph:s(wt),reference:w,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:s(Me),strong:s(sn),thematicBreak:s(Jr)},exit:{atxHeading:c(),atxHeadingSequence:I,autolink:c(),autolinkEmail:de,autolinkProtocol:ne,blockQuote:c(),characterEscapeValue:T,characterReferenceMarkerHexadecimal:M,characterReferenceMarkerNumeric:M,characterReferenceValue:G,characterReference:U,codeFenced:c($),codeFencedFence:v,codeFencedFenceInfo:g,codeFencedFenceMeta:b,codeFlowValue:T,codeIndented:c(x),codeText:c(F),codeTextData:T,data:T,definition:c(),definitionDestinationString:S,definitionLabelString:L,definitionTitleString:y,emphasis:c(),hardBreakEscape:c(E),hardBreakTrailing:c(E),htmlFlow:c(A),htmlFlowData:T,htmlText:c(N),htmlTextData:T,image:c(Q),label:D,labelText:_,lineEnding:P,link:c(Y),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:H,resourceDestinationString:C,resourceTitleString:X,resource:J,setextHeading:c(R),setextHeadingLineSequence:j,setextHeadingText:k,strong:c(),thematicBreak:c()}};t5(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(B){let V={type:"root",children:[]};const ie={stack:[V],tokenStack:[],config:t,enter:a,exit:d,buffer:l,resume:p,data:n},he=[];let je=-1;for(;++je<B.length;)if(B[je][1].type==="listOrdered"||B[je][1].type==="listUnordered")if(B[je][0]==="enter")he.push(je);else{const Et=he.pop();je=i(B,Et,je)}for(je=-1;++je<B.length;){const Et=t[B[je][0]];e5.call(Et,B[je][1].type)&&Et[B[je][1].type].call(Object.assign({sliceSerialize:B[je][2].sliceSerialize},ie),B[je][1])}if(ie.tokenStack.length>0){const Et=ie.tokenStack[ie.tokenStack.length-1];(Et[1]||i2).call(ie,void 0,Et[0])}for(V.position={start:qn(B.length>0?B[0][1].start:{line:1,column:1,offset:0}),end:qn(B.length>0?B[B.length-2][1].end:{line:1,column:1,offset:0})},je=-1;++je<t.transforms.length;)V=t.transforms[je](V)||V;return V}function i(B,V,ie){let he=V-1,je=-1,Et=!1,Yt,ae,ln,kr;for(;++he<=ie;){const ht=B[he];switch(ht[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{ht[0]==="enter"?je++:je--,kr=void 0;break}case"lineEndingBlank":{ht[0]==="enter"&&(Yt&&!kr&&!je&&!ln&&(ln=he),kr=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:kr=void 0}if(!je&&ht[0]==="enter"&&ht[1].type==="listItemPrefix"||je===-1&&ht[0]==="exit"&&(ht[1].type==="listUnordered"||ht[1].type==="listOrdered")){if(Yt){let Rn=he;for(ae=void 0;Rn--;){const Gt=B[Rn];if(Gt[1].type==="lineEnding"||Gt[1].type==="lineEndingBlank"){if(Gt[0]==="exit")continue;ae&&(B[ae][1].type="lineEndingBlank",Et=!0),Gt[1].type="lineEnding",ae=Rn}else if(!(Gt[1].type==="linePrefix"||Gt[1].type==="blockQuotePrefix"||Gt[1].type==="blockQuotePrefixWhitespace"||Gt[1].type==="blockQuoteMarker"||Gt[1].type==="listItemIndent"))break}ln&&(!ae||ln<ae)&&(Yt._spread=!0),Yt.end=Object.assign({},ae?B[ae][1].start:ht[1].end),B.splice(ae||he,0,["exit",Yt,ht[2]]),he++,ie++}if(ht[1].type==="listItemPrefix"){const Rn={type:"listItem",_spread:!1,start:Object.assign({},ht[1].start),end:void 0};Yt=Rn,B.splice(he,0,["enter",Rn,ht[2]]),he++,ie++,ln=void 0,kr=!0}}}return B[V][1]._spread=Et,ie}function s(B,V){return ie;function ie(he){a.call(this,B(he),he),V&&V.call(this,he)}}function l(){this.stack.push({type:"fragment",children:[]})}function a(B,V,ie){this.stack[this.stack.length-1].children.push(B),this.stack.push(B),this.tokenStack.push([V,ie||void 0]),B.position={start:qn(V.start),end:void 0}}function c(B){return V;function V(ie){B&&B.call(this,ie),d.call(this,ie)}}function d(B,V){const ie=this.stack.pop(),he=this.tokenStack.pop();if(he)he[0].type!==B.type&&(V?V.call(this,B,he[0]):(he[1]||i2).call(this,B,he[0]));else throw new Error("Cannot close `"+B.type+"` ("+ts({start:B.start,end:B.end})+"): it’s not open");ie.position.end=qn(B.end)}function p(){return Ek(this.stack.pop())}function f(){this.data.expectingFirstListItemValue=!0}function h(B){if(this.data.expectingFirstListItemValue){const V=this.stack[this.stack.length-2];V.start=Number.parseInt(this.sliceSerialize(B),10),this.data.expectingFirstListItemValue=void 0}}function g(){const B=this.resume(),V=this.stack[this.stack.length-1];V.lang=B}function b(){const B=this.resume(),V=this.stack[this.stack.length-1];V.meta=B}function v(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function $(){const B=this.resume(),V=this.stack[this.stack.length-1];V.value=B.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function x(){const B=this.resume(),V=this.stack[this.stack.length-1];V.value=B.replace(/(\r?\n|\r)$/g,"")}function L(B){const V=this.resume(),ie=this.stack[this.stack.length-1];ie.label=V,ie.identifier=Ai(this.sliceSerialize(B)).toLowerCase()}function y(){const B=this.resume(),V=this.stack[this.stack.length-1];V.title=B}function S(){const B=this.resume(),V=this.stack[this.stack.length-1];V.url=B}function I(B){const V=this.stack[this.stack.length-1];if(!V.depth){const ie=this.sliceSerialize(B).length;V.depth=ie}}function k(){this.data.setextHeadingSlurpLineEnding=!0}function j(B){const V=this.stack[this.stack.length-1];V.depth=this.sliceSerialize(B).codePointAt(0)===61?1:2}function R(){this.data.setextHeadingSlurpLineEnding=void 0}function z(B){const ie=this.stack[this.stack.length-1].children;let he=ie[ie.length-1];(!he||he.type!=="text")&&(he=We(),he.position={start:qn(B.start),end:void 0},ie.push(he)),this.stack.push(he)}function T(B){const V=this.stack.pop();V.value+=this.sliceSerialize(B),V.position.end=qn(B.end)}function P(B){const V=this.stack[this.stack.length-1];if(this.data.atHardBreak){const ie=V.children[V.children.length-1];ie.position.end=qn(B.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(V.type)&&(z.call(this,B),T.call(this,B))}function E(){this.data.atHardBreak=!0}function A(){const B=this.resume(),V=this.stack[this.stack.length-1];V.value=B}function N(){const B=this.resume(),V=this.stack[this.stack.length-1];V.value=B}function F(){const B=this.resume(),V=this.stack[this.stack.length-1];V.value=B}function Y(){const B=this.stack[this.stack.length-1];if(this.data.inReference){const V=this.data.referenceType||"shortcut";B.type+="Reference",B.referenceType=V,delete B.url,delete B.title}else delete B.identifier,delete B.label;this.data.referenceType=void 0}function Q(){const B=this.stack[this.stack.length-1];if(this.data.inReference){const V=this.data.referenceType||"shortcut";B.type+="Reference",B.referenceType=V,delete B.url,delete B.title}else delete B.identifier,delete B.label;this.data.referenceType=void 0}function _(B){const V=this.sliceSerialize(B),ie=this.stack[this.stack.length-2];ie.label=CS(V),ie.identifier=Ai(V).toLowerCase()}function D(){const B=this.stack[this.stack.length-1],V=this.resume(),ie=this.stack[this.stack.length-1];if(this.data.inReference=!0,ie.type==="link"){const he=B.children;ie.children=he}else ie.alt=V}function C(){const B=this.resume(),V=this.stack[this.stack.length-1];V.url=B}function X(){const B=this.resume(),V=this.stack[this.stack.length-1];V.title=B}function J(){this.data.inReference=void 0}function w(){this.data.referenceType="collapsed"}function H(B){const V=this.resume(),ie=this.stack[this.stack.length-1];ie.label=V,ie.identifier=Ai(this.sliceSerialize(B)).toLowerCase(),this.data.referenceType="full"}function M(B){this.data.characterReferenceType=B.type}function G(B){const V=this.sliceSerialize(B),ie=this.data.characterReferenceType;let he;ie?(he=V3(V,ie==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):he=a0(V);const je=this.stack[this.stack.length-1];je.value+=he}function U(B){const V=this.stack.pop();V.position.end=qn(B.end)}function ne(B){T.call(this,B);const V=this.stack[this.stack.length-1];V.url=this.sliceSerialize(B)}function de(B){T.call(this,B);const V=this.stack[this.stack.length-1];V.url="mailto:"+this.sliceSerialize(B)}function q(){return{type:"blockquote",children:[]}}function te(){return{type:"code",lang:null,meta:null,value:""}}function le(){return{type:"inlineCode",value:""}}function xe(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function $e(){return{type:"emphasis",children:[]}}function Me(){return{type:"heading",depth:0,children:[]}}function De(){return{type:"break"}}function Ee(){return{type:"html",value:""}}function Ct(){return{type:"image",title:null,url:"",alt:null}}function re(){return{type:"link",title:null,url:"",children:[]}}function Pe(B){return{type:"list",ordered:B.type==="listOrdered",start:null,spread:B._spread,children:[]}}function Ie(B){return{type:"listItem",spread:B._spread,checked:null,children:[]}}function wt(){return{type:"paragraph",children:[]}}function sn(){return{type:"strong",children:[]}}function We(){return{type:"text",value:""}}function Jr(){return{type:"thematicBreak"}}}function qn(e){return{line:e.line,column:e.column,offset:e.offset}}function t5(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?t5(e,r):TS(e,r)}}function TS(e,t){let n;for(n in t)if(e5.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function i2(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+ts({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+ts({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+ts({start:t.start,end:t.end})+") is still open")}function RS(e){const t=this;t.parser=n;function n(r){return PS(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function zS(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function MS(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function AS(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let s={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(s.data={meta:t.meta}),e.patch(t,s),s=e.applyData(t,s),s={type:"element",tagName:"pre",properties:{},children:[s]},e.patch(t,s),s}function _S(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function NS(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function DS(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=oo(r.toLowerCase()),s=e.footnoteOrder.indexOf(r);let l,a=e.footnoteCounts.get(r);a===void 0?(a=0,e.footnoteOrder.push(r),l=e.footnoteOrder.length):l=s+1,a+=1,e.footnoteCounts.set(r,a);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(l)}]};e.patch(t,c);const d={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,d),e.applyData(t,d)}function OS(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function BS(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function n5(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),s=i[0];s&&s.type==="text"?s.value="["+s.value:i.unshift({type:"text",value:"["});const l=i[i.length-1];return l&&l.type==="text"?l.value+=r:i.push({type:"text",value:r}),i}function FS(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return n5(e,t);const i={src:oo(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,s),e.applyData(t,s)}function HS(e,t){const n={src:oo(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function US(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function VS(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return n5(e,t);const i={href:oo(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,s),e.applyData(t,s)}function WS(e,t){const n={href:oo(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function KS(e,t,n){const r=e.all(t),i=n?YS(n):r5(t),s={},l=[];if(typeof t.checked=="boolean"){const p=r[0];let f;p&&p.type==="element"&&p.tagName==="p"?f=p:(f={type:"element",tagName:"p",properties:{},children:[]},r.unshift(f)),f.children.length>0&&f.children.unshift({type:"text",value:" "}),f.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const p=r[a];(i||a!==0||p.type!=="element"||p.tagName!=="p")&&l.push({type:"text",value:`
`}),p.type==="element"&&p.tagName==="p"&&!i?l.push(...p.children):l.push(p)}const c=r[r.length-1];c&&(i||c.type!=="element"||c.tagName!=="p")&&l.push({type:"text",value:`
`});const d={type:"element",tagName:"li",properties:s,children:l};return e.patch(t,d),e.applyData(t,d)}function YS(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=r5(n[r])}return t}function r5(e){const t=e.spread;return t??e.children.length>1}function GS(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const l=r[i];if(l.type==="element"&&l.tagName==="li"&&l.properties&&Array.isArray(l.properties.className)&&l.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const s={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,s),e.applyData(t,s)}function ZS(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function qS(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function QS(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function XS(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const l={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],l),i.push(l)}if(n.length>0){const l={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=i0(t.children[1]),c=N3(t.children[t.children.length-1]);a&&c&&(l.position={start:a,end:c}),i.push(l)}const s={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,s),e.applyData(t,s)}function JS(e,t,n){const r=n?n.children:void 0,s=(r?r.indexOf(t):1)===0?"th":"td",l=n&&n.type==="table"?n.align:void 0,a=l?l.length:t.children.length;let c=-1;const d=[];for(;++c<a;){const f=t.children[c],h={},g=l?l[c]:void 0;g&&(h.align=g);let b={type:"element",tagName:s,properties:h,children:[]};f&&(b.children=e.all(f),e.patch(f,b),b=e.applyData(f,b)),d.push(b)}const p={type:"element",tagName:"tr",properties:{},children:e.wrap(d,!0)};return e.patch(t,p),e.applyData(t,p)}function e$(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const o2=9,s2=32;function t$(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const s=[];for(;r;)s.push(l2(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return s.push(l2(t.slice(i),i>0,!1)),s.join("")}function l2(e,t,n){let r=0,i=e.length;if(t){let s=e.codePointAt(r);for(;s===o2||s===s2;)r++,s=e.codePointAt(r)}if(n){let s=e.codePointAt(i-1);for(;s===o2||s===s2;)i--,s=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function n$(e,t){const n={type:"text",value:t$(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function r$(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const i$={blockquote:zS,break:MS,code:AS,delete:_S,emphasis:NS,footnoteReference:DS,heading:OS,html:BS,imageReference:FS,image:HS,inlineCode:US,linkReference:VS,link:WS,listItem:KS,list:GS,paragraph:ZS,root:qS,strong:QS,table:XS,tableCell:e$,tableRow:JS,text:n$,thematicBreak:r$,toml:ll,yaml:ll,definition:ll,footnoteDefinition:ll};function ll(){}const i5=-1,uc=0,rs=1,Ia=2,d0=3,p0=4,f0=5,h0=6,o5=7,s5=8,a2=typeof self=="object"?self:globalThis,o$=(e,t)=>{const n=(i,s)=>(e.set(s,i),i),r=i=>{if(e.has(i))return e.get(i);const[s,l]=t[i];switch(s){case uc:case i5:return n(l,i);case rs:{const a=n([],i);for(const c of l)a.push(r(c));return a}case Ia:{const a=n({},i);for(const[c,d]of l)a[r(c)]=r(d);return a}case d0:return n(new Date(l),i);case p0:{const{source:a,flags:c}=l;return n(new RegExp(a,c),i)}case f0:{const a=n(new Map,i);for(const[c,d]of l)a.set(r(c),r(d));return a}case h0:{const a=n(new Set,i);for(const c of l)a.add(r(c));return a}case o5:{const{name:a,message:c}=l;return n(new a2[a](c),i)}case s5:return n(BigInt(l),i);case"BigInt":return n(Object(BigInt(l)),i);case"ArrayBuffer":return n(new Uint8Array(l).buffer,l);case"DataView":{const{buffer:a}=new Uint8Array(l);return n(new DataView(a),l)}}return n(new a2[s](l),i)};return r},c2=e=>o$(new Map,e)(0),oi="",{toString:s$}={},{keys:l$}=Object,bo=e=>{const t=typeof e;if(t!=="object"||!e)return[uc,t];const n=s$.call(e).slice(8,-1);switch(n){case"Array":return[rs,oi];case"Object":return[Ia,oi];case"Date":return[d0,oi];case"RegExp":return[p0,oi];case"Map":return[f0,oi];case"Set":return[h0,oi];case"DataView":return[rs,n]}return n.includes("Array")?[rs,n]:n.includes("Error")?[o5,n]:[Ia,n]},al=([e,t])=>e===uc&&(t==="function"||t==="symbol"),a$=(e,t,n,r)=>{const i=(l,a)=>{const c=r.push(l)-1;return n.set(a,c),c},s=l=>{if(n.has(l))return n.get(l);let[a,c]=bo(l);switch(a){case uc:{let p=l;switch(c){case"bigint":a=s5,p=l.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);p=null;break;case"undefined":return i([i5],l)}return i([a,p],l)}case rs:{if(c){let h=l;return c==="DataView"?h=new Uint8Array(l.buffer):c==="ArrayBuffer"&&(h=new Uint8Array(l)),i([c,[...h]],l)}const p=[],f=i([a,p],l);for(const h of l)p.push(s(h));return f}case Ia:{if(c)switch(c){case"BigInt":return i([c,l.toString()],l);case"Boolean":case"Number":case"String":return i([c,l.valueOf()],l)}if(t&&"toJSON"in l)return s(l.toJSON());const p=[],f=i([a,p],l);for(const h of l$(l))(e||!al(bo(l[h])))&&p.push([s(h),s(l[h])]);return f}case d0:return i([a,l.toISOString()],l);case p0:{const{source:p,flags:f}=l;return i([a,{source:p,flags:f}],l)}case f0:{const p=[],f=i([a,p],l);for(const[h,g]of l)(e||!(al(bo(h))||al(bo(g))))&&p.push([s(h),s(g)]);return f}case h0:{const p=[],f=i([a,p],l);for(const h of l)(e||!al(bo(h)))&&p.push(s(h));return f}}const{message:d}=l;return i([a,{name:c,message:d}],l)};return s},u2=(e,{json:t,lossy:n}={})=>{const r=[];return a$(!(t||n),!!t,new Map,r)(e),r},Ta=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?c2(u2(e,t)):structuredClone(e):(e,t)=>c2(u2(e,t));function c$(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function u$(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function d$(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||c$,r=e.options.footnoteBackLabel||u$,i=e.options.footnoteLabel||"Footnotes",s=e.options.footnoteLabelTagName||"h2",l=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let c=-1;for(;++c<e.footnoteOrder.length;){const d=e.footnoteById.get(e.footnoteOrder[c]);if(!d)continue;const p=e.all(d),f=String(d.identifier).toUpperCase(),h=oo(f.toLowerCase());let g=0;const b=[],v=e.footnoteCounts.get(f);for(;v!==void 0&&++g<=v;){b.length>0&&b.push({type:"text",value:" "});let L=typeof n=="string"?n:n(c,g);typeof L=="string"&&(L={type:"text",value:L}),b.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+h+(g>1?"-"+g:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,g),className:["data-footnote-backref"]},children:Array.isArray(L)?L:[L]})}const $=p[p.length-1];if($&&$.type==="element"&&$.tagName==="p"){const L=$.children[$.children.length-1];L&&L.type==="text"?L.value+=" ":$.children.push({type:"text",value:" "}),$.children.push(...b)}else p.push(...b);const x={type:"element",tagName:"li",properties:{id:t+"fn-"+h},children:e.wrap(p,!0)};e.patch(d,x),a.push(x)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...Ta(l),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const l5=function(e){if(e==null)return g$;if(typeof e=="function")return dc(e);if(typeof e=="object")return Array.isArray(e)?p$(e):f$(e);if(typeof e=="string")return h$(e);throw new Error("Expected function, string, or object as test")};function p$(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=l5(e[n]);return dc(r);function r(...i){let s=-1;for(;++s<t.length;)if(t[s].apply(this,i))return!0;return!1}}function f$(e){const t=e;return dc(n);function n(r){const i=r;let s;for(s in e)if(i[s]!==t[s])return!1;return!0}}function h$(e){return dc(t);function t(n){return n&&n.type===e}}function dc(e){return t;function t(n,r,i){return!!(m$(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function g$(){return!0}function m$(e){return e!==null&&typeof e=="object"&&"type"in e}const a5=[],x$=!0,d2=!1,L$="skip";function y$(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const s=l5(i),l=r?-1:1;a(e,void 0,[])();function a(c,d,p){const f=c&&typeof c=="object"?c:{};if(typeof f.type=="string"){const g=typeof f.tagName=="string"?f.tagName:typeof f.name=="string"?f.name:void 0;Object.defineProperty(h,"name",{value:"node ("+(c.type+(g?"<"+g+">":""))+")"})}return h;function h(){let g=a5,b,v,$;if((!t||s(c,d,p[p.length-1]||void 0))&&(g=v$(n(c,p)),g[0]===d2))return g;if("children"in c&&c.children){const x=c;if(x.children&&g[0]!==L$)for(v=(r?x.children.length:-1)+l,$=p.concat(x);v>-1&&v<x.children.length;){const L=x.children[v];if(b=a(L,v,$)(),b[0]===d2)return b;v=typeof b[1]=="number"?b[1]:v+l}}return g}}}function v$(e){return Array.isArray(e)?e:typeof e=="number"?[x$,e]:e==null?a5:[e]}function c5(e,t,n,r){let i,s,l;typeof t=="function"&&typeof n!="function"?(s=void 0,l=t,i=n):(s=t,l=n,i=r),y$(e,s,a,i);function a(c,d){const p=d[d.length-1],f=p?p.children.indexOf(c):void 0;return l(c,f,p)}}const A1={}.hasOwnProperty,b$={};function w$(e,t){const n=t||b$,r=new Map,i=new Map,s=new Map,l={...i$,...n.handlers},a={all:d,applyData:j$,definitionById:r,footnoteById:i,footnoteCounts:s,footnoteOrder:[],handlers:l,one:c,options:n,patch:k$,wrap:$$};return c5(e,function(p){if(p.type==="definition"||p.type==="footnoteDefinition"){const f=p.type==="definition"?r:i,h=String(p.identifier).toUpperCase();f.has(h)||f.set(h,p)}}),a;function c(p,f){const h=p.type,g=a.handlers[h];if(A1.call(a.handlers,h)&&g)return g(a,p,f);if(a.options.passThrough&&a.options.passThrough.includes(h)){if("children"in p){const{children:v,...$}=p,x=Ta($);return x.children=a.all(p),x}return Ta(p)}return(a.options.unknownHandler||S$)(a,p,f)}function d(p){const f=[];if("children"in p){const h=p.children;let g=-1;for(;++g<h.length;){const b=a.one(h[g],p);if(b){if(g&&h[g-1].type==="break"&&(!Array.isArray(b)&&b.type==="text"&&(b.value=p2(b.value)),!Array.isArray(b)&&b.type==="element")){const v=b.children[0];v&&v.type==="text"&&(v.value=p2(v.value))}Array.isArray(b)?f.push(...b):f.push(b)}}}return f}}function k$(e,t){e.position&&(t.position=sk(e))}function j$(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,s=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const l="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:l}}n.type==="element"&&s&&Object.assign(n.properties,Ta(s)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function S$(e,t){const n=t.data||{},r="value"in t&&!(A1.call(n,"hProperties")||A1.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function $$(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function p2(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function f2(e,t){const n=w$(e,t),r=n.one(e,void 0),i=d$(n),s=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&s.children.push({type:"text",value:`
`},i),s}function C$(e,t){return e&&"run"in e?async function(n,r){const i=f2(n,{file:r,...t});await e.run(i,r)}:function(n,r){return f2(n,{file:r,...e||t})}}function h2(e){if(e)throw e}var Ul=Object.prototype.hasOwnProperty,u5=Object.prototype.toString,g2=Object.defineProperty,m2=Object.getOwnPropertyDescriptor,x2=function(t){return typeof Array.isArray=="function"?Array.isArray(t):u5.call(t)==="[object Array]"},L2=function(t){if(!t||u5.call(t)!=="[object Object]")return!1;var n=Ul.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&Ul.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||Ul.call(t,i)},y2=function(t,n){g2&&n.name==="__proto__"?g2(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},v2=function(t,n){if(n==="__proto__")if(Ul.call(t,n)){if(m2)return m2(t,n).value}else return;return t[n]},E$=function e(){var t,n,r,i,s,l,a=arguments[0],c=1,d=arguments.length,p=!1;for(typeof a=="boolean"&&(p=a,a=arguments[1]||{},c=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});c<d;++c)if(t=arguments[c],t!=null)for(n in t)r=v2(a,n),i=v2(t,n),a!==i&&(p&&i&&(L2(i)||(s=x2(i)))?(s?(s=!1,l=r&&x2(r)?r:[]):l=r&&L2(r)?r:{},y2(a,{name:n,newValue:e(p,l,i)})):typeof i<"u"&&y2(a,{name:n,newValue:i}));return a};const gu=Ma(E$);function _1(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function P$(){const e=[],t={run:n,use:r};return t;function n(...i){let s=-1;const l=i.pop();if(typeof l!="function")throw new TypeError("Expected function as last argument, not "+l);a(null,...i);function a(c,...d){const p=e[++s];let f=-1;if(c){l(c);return}for(;++f<i.length;)(d[f]===null||d[f]===void 0)&&(d[f]=i[f]);i=d,p?I$(p,a)(...d):l(null,...d)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function I$(e,t){let n;return r;function r(...l){const a=e.length>l.length;let c;a&&l.push(i);try{c=e.apply(this,l)}catch(d){const p=d;if(a&&n)throw p;return i(p)}a||(c&&c.then&&typeof c.then=="function"?c.then(s,i):c instanceof Error?i(c):s(c))}function i(l,...a){n||(n=!0,t(l,...a))}function s(l){i(null,l)}}const jn={basename:T$,dirname:R$,extname:z$,join:M$,sep:"/"};function T$(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Ds(e);let n=0,r=-1,i=e.length,s;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else r<0&&(s=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let l=-1,a=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else l<0&&(s=!0,l=i+1),a>-1&&(e.codePointAt(i)===t.codePointAt(a--)?a<0&&(r=i):(a=-1,r=l));return n===r?r=l:r<0&&(r=e.length),e.slice(n,r)}function R$(e){if(Ds(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function z$(e){Ds(e);let t=e.length,n=-1,r=0,i=-1,s=0,l;for(;t--;){const a=e.codePointAt(t);if(a===47){if(l){r=t+1;break}continue}n<0&&(l=!0,n=t+1),a===46?i<0?i=t:s!==1&&(s=1):i>-1&&(s=-1)}return i<0||n<0||s===0||s===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function M$(...e){let t=-1,n;for(;++t<e.length;)Ds(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":A$(n)}function A$(e){Ds(e);const t=e.codePointAt(0)===47;let n=_$(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function _$(e,t){let n="",r=0,i=-1,s=0,l=-1,a,c;for(;++l<=e.length;){if(l<e.length)a=e.codePointAt(l);else{if(a===47)break;a=47}if(a===47){if(!(i===l-1||s===1))if(i!==l-1&&s===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),i=l,s=0;continue}}else if(n.length>0){n="",r=0,i=l,s=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,l):n=e.slice(i+1,l),r=l-i-1;i=l,s=0}else a===46&&s>-1?s++:s=-1}return n}function Ds(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const N$={cwd:D$};function D$(){return"/"}function N1(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function O$(e){if(typeof e=="string")e=new URL(e);else if(!N1(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return B$(e)}function B$(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const mu=["history","path","basename","stem","extname","dirname"];class d5{constructor(t){let n;t?N1(t)?n={path:t}:typeof t=="string"||F$(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":N$.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<mu.length;){const s=mu[r];s in n&&n[s]!==void 0&&n[s]!==null&&(this[s]=s==="history"?[...n[s]]:n[s])}let i;for(i in n)mu.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?jn.basename(this.path):void 0}set basename(t){Lu(t,"basename"),xu(t,"basename"),this.path=jn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?jn.dirname(this.path):void 0}set dirname(t){b2(this.basename,"dirname"),this.path=jn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?jn.extname(this.path):void 0}set extname(t){if(xu(t,"extname"),b2(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=jn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){N1(t)&&(t=O$(t)),Lu(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?jn.basename(this.path,this.extname):void 0}set stem(t){Lu(t,"stem"),xu(t,"stem"),this.path=jn.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new bt(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function xu(e,t){if(e&&e.includes(jn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+jn.sep+"`")}function Lu(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function b2(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function F$(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const H$=function(e){const r=this.constructor.prototype,i=r[e],s=function(){return i.apply(s,arguments)};return Object.setPrototypeOf(s,r),s},U$={}.hasOwnProperty;class g0 extends H${constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=P$()}copy(){const t=new g0;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(gu(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(bu("data",this.frozen),this.namespace[t]=n,this):U$.call(this.namespace,t)&&this.namespace[t]||void 0:t?(bu("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=cl(t),r=this.parser||this.Parser;return yu("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),yu("process",this.parser||this.Parser),vu("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(s,l){const a=cl(t),c=r.parse(a);r.run(c,a,function(p,f,h){if(p||!f||!h)return d(p);const g=f,b=r.stringify(g,h);K$(b)?h.value=b:h.result=b,d(p,h)});function d(p,f){p||!f?l(p):s?s(f):n(void 0,f)}}}processSync(t){let n=!1,r;return this.freeze(),yu("processSync",this.parser||this.Parser),vu("processSync",this.compiler||this.Compiler),this.process(t,i),k2("processSync","process",n),r;function i(s,l){n=!0,h2(s),r=l}}run(t,n,r){w2(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?s(void 0,r):new Promise(s);function s(l,a){const c=cl(n);i.run(t,c,d);function d(p,f,h){const g=f||t;p?a(p):l?l(g):r(void 0,g,h)}}}runSync(t,n){let r=!1,i;return this.run(t,n,s),k2("runSync","run",r),i;function s(l,a){h2(l),i=a,r=!0}}stringify(t,n){this.freeze();const r=cl(n),i=this.compiler||this.Compiler;return vu("stringify",i),w2(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(bu("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?a(t):l(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function s(d){if(typeof d=="function")c(d,[]);else if(typeof d=="object")if(Array.isArray(d)){const[p,...f]=d;c(p,f)}else l(d);else throw new TypeError("Expected usable value, not `"+d+"`")}function l(d){if(!("plugins"in d)&&!("settings"in d))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(d.plugins),d.settings&&(i.settings=gu(!0,i.settings,d.settings))}function a(d){let p=-1;if(d!=null)if(Array.isArray(d))for(;++p<d.length;){const f=d[p];s(f)}else throw new TypeError("Expected a list of plugins, not `"+d+"`")}function c(d,p){let f=-1,h=-1;for(;++f<r.length;)if(r[f][0]===d){h=f;break}if(h===-1)r.push([d,...p]);else if(p.length>0){let[g,...b]=p;const v=r[h][1];_1(v)&&_1(g)&&(g=gu(!0,v,g)),r[h]=[d,g,...b]}}}}const V$=new g0().freeze();function yu(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function vu(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function bu(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function w2(e){if(!_1(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function k2(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function cl(e){return W$(e)?e:new d5(e)}function W$(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function K$(e){return typeof e=="string"||Y$(e)}function Y$(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const G$="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",j2=[],S2={allowDangerousHtml:!0},Z$=/^(https?|ircs?|mailto|xmpp)$/i,q$=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function qi(e){const t=Q$(e),n=X$(e);return J$(t.runSync(t.parse(n),n),e)}function Q$(e){const t=e.rehypePlugins||j2,n=e.remarkPlugins||j2,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...S2}:S2;return V$().use(RS).use(n).use(C$,r).use(t)}function X$(e){const t=e.children||"",n=new d5;return typeof t=="string"&&(n.value=t),n}function J$(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,s=t.disallowedElements,l=t.skipHtml,a=t.unwrapDisallowed,c=t.urlTransform||eC;for(const p of q$)Object.hasOwn(t,p.from)&&(""+p.from+(p.to?"use `"+p.to+"` instead":"remove it")+G$+p.id,void 0);return c5(e,d),dk(e,{Fragment:o.Fragment,components:i,ignoreInvalidStyle:!0,jsx:o.jsx,jsxs:o.jsxs,passKeys:!0,passNode:!0});function d(p,f,h){if(p.type==="raw"&&h&&typeof f=="number")return l?h.children.splice(f,1):h.children[f]={type:"text",value:p.value},f;if(p.type==="element"){let g;for(g in pu)if(Object.hasOwn(pu,g)&&Object.hasOwn(p.properties,g)){const b=p.properties[g],v=pu[g];(v===null||v.includes(p.tagName))&&(p.properties[g]=c(String(b||""),g,p))}}if(p.type==="element"){let g=n?!n.includes(p.tagName):s?s.includes(p.tagName):!1;if(!g&&r&&typeof f=="number"&&(g=!r(p,f,h)),g&&h&&typeof f=="number")return a&&p.children?h.children.splice(f,1,...p.children):h.children.splice(f,1),f}}}function eC(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||Z$.test(e.slice(0,t))?e:""}const D1=u.div`
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
`;function so({markdown:e,fallback:t=null}){const n=e==null?void 0:e.trim();return n?o.jsx(D1,{children:o.jsx(qi,{children:n})}):o.jsx(o.Fragment,{children:t})}const tC=ke`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,nC=ke`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,rC=u.button`
  position: fixed;
  inset: 0;
  z-index: 113;
  border: none;
  margin: 0;
  padding: 0;
  background: rgba(0, 0, 0, 0.28);
  cursor: default;
  -webkit-tap-highlight-color: transparent;
  animation: ${nC} 0.52s cubic-bezier(0.25, 0.85, 0.3, 1) forwards;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary300};
    outline-offset: -4px;
  }
`,iC=u.div`
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
`,oC=u.div`
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
  animation: ${tC} 0.42s cubic-bezier(0.25, 0.8, 0.25, 1) both;
  -webkit-tap-highlight-color: transparent;

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary400};
    outline-offset: 2px;
  }
`,sC=u.div`
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
`,lC=u.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
  padding-right: 36px;
`,aC=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
`,cC=u.span`
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
  line-height: 1.35;
`,uC=u.div`
  position: absolute;
  top: -2px;
  right: -4px;
  display: flex;
  align-items: center;
  justify-content: center;
`,dC=u.div`
  font-size: 0.88rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text700};

  .star {
    color: #e8b923;
    margin-right: 4px;
  }
`,pC=u.div`
  font-size: 0.86rem;
  color: ${({theme:e})=>e.colors.text700};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,fC=u.div`
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.45;
  color: ${({theme:e})=>e.colors.text700};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,hC=u.span`
  margin-top: auto;
  padding-top: 6px;
  font-size: 0.82rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.primary600};
`,gC=({place:e,onClose:t,onOpenDetail:n})=>{const r=Wn(e.regionId),i=e.venueKind??"명상지",s=[r==null?void 0:r.name,e.hashtags[0]??i].filter(Boolean).join(" · "),l=e.rating!=null||e.reviewCount!=null&&e.reviewCount>0,a=m.useCallback(()=>{n()},[n]),c=p=>{p.stopPropagation()},d=p=>{(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),a())};return o.jsxs(o.Fragment,{children:[o.jsx(rC,{type:"button",onClick:t,"aria-label":"닫기"}),o.jsx(iC,{children:o.jsxs(oC,{role:"button",tabIndex:0,onClick:a,onKeyDown:d,"aria-label":`${e.name} 상세 페이지로 이동`,children:[o.jsx(sC,{children:o.jsx("img",{src:ov(e.thumbnailUrl),alt:"",draggable:!1,loading:"lazy",decoding:"async",sizes:"min(100vw - 32px, 400px)"})}),o.jsxs(lC,{children:[o.jsx(aC,{children:o.jsx(cC,{children:e.name})}),o.jsx(uC,{onClick:c,onPointerDown:c,children:o.jsx(lc,{placeId:e.id})}),l&&o.jsxs(dC,{children:[e.rating!=null&&o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"star","aria-hidden":!0,children:"★"}),e.rating.toFixed(1)]}),e.reviewCount!=null&&o.jsxs("span",{children:[e.rating!=null?" · ":"","후기 ",e.reviewCount]})]}),o.jsx(pC,{children:s}),o.jsx(fC,{children:o.jsx(so,{markdown:e.shortDescription})}),o.jsx(hC,{children:"탭하여 상세 보기 →"})]})]})})]})},mC={minLat:36.45,maxLat:37.65,minLng:126.75,maxLng:127.15};function xC(e){let t=2166136261;for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619);const n=(t>>>0)%10001/1e4,r=(Math.imul(t,7919)>>>0)%10001/1e4;return[n,r]}function wu(e){if(Number.isFinite(e.lat)&&Number.isFinite(e.lng))return{lat:e.lat,lng:e.lng};const t=Sa.find(a=>a.id===e.regionId)??mC,[n,r]=xC(`${e.id}\0${e.address}`),i=.1,s=t.minLat+(t.maxLat-t.minLat)*(i+(1-2*i)*n),l=t.minLng+(t.maxLng-t.minLng)*(i+(1-2*i)*r);return{lat:s,lng:l}}function Fo(){var e,t;return!!((t=(e=window.naver)==null?void 0:e.maps)!=null&&t.Map)}function Ho(){var t,n;const e=(n=(t=window.naver)==null?void 0:t.maps)==null?void 0:n.Service;return typeof(e==null?void 0:e.geocode)=="function"}function p5(){return document.querySelector('script[src*="oapi.map.naver.com"]')}function O1(e){return e.src.includes("geocoder")}async function $2(e,t,n=25e3){e()||await new Promise((r,i)=>{const s=Date.now(),l=window.setInterval(()=>{e()?(window.clearInterval(l),r()):Date.now()-s>n&&(window.clearInterval(l),i(new Error(`${t} 로드 시간 초과`)))},50)})}async function LC(e){await new Promise((t,n)=>{const r=`__naverMapsCb_${Date.now()}`;window[r]=()=>{t(),delete window[r]};const i=document.createElement("script");i.async=!0,i.onerror=()=>{delete window[r],n(new Error("Naver Maps 스크립트 로드 실패"))},i.src=`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${encodeURIComponent(e)}&submodules=geocoder&callback=${r}`,document.head.appendChild(i)})}function yC(){const e=p5();return!e||O1(e)||!Fo()?!1:!Ho()}async function f5(e){const t=e==null?void 0:e.trim();if(!t)return!1;if(Fo()&&Ho())return!0;if(yC())throw new Error("지도 API가 geocoder 없이 로드되었습니다. 페이지를 새로고침한 뒤 다시 검색해 주세요.");const n=p5();if(n&&O1(n))try{return await $2(()=>Fo()&&Ho(),"Naver Maps(geocoder)"),Fo()&&Ho()}catch{return!1}n&&!O1(n)&&n.remove(),await LC(t);try{return await $2(()=>Fo()&&Ho(),"Naver Maps(geocoder)"),!0}catch{return!1}}async function vC(e){try{return await f5(e)}catch{return!1}}async function B1(e){return f5(e)}const bC=u.div`
  position: relative;
  width: 100%;
  flex: 1;
  min-height: ${({$fillViewport:e})=>e?"0":"min(62dvh, 520px)"};
  border-radius: ${({$fillViewport:e,theme:t})=>e?"0":t.radii.lg};
  overflow: hidden;
  background: ${({theme:e})=>e.colors.bg100};
`,wC=u.button`
  ${({$floating:e,$rightInsetPx:t=0})=>e?Oe`
          position: fixed;
          z-index: 108;
          right: calc(14px + ${t}px);
          bottom: calc(64px + env(safe-area-inset-bottom, 0px));
        `:Oe`
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
`,kC=u.div`
  width: 100%;
  height: 100%;
  min-height: ${({$fillViewport:e})=>e?"100%":"min(62dvh, 520px)"};
`;function jC(e){return e<=9?100:e<=11?72:e<=13?48:0}function SC(e,t){const n=new Set(e.map((i,s)=>s)),r=[];for(;n.size>0;){const i=n.values().next().value,s=new Set([i]);n.delete(i);let l=!0;for(;l;){l=!1;for(const a of[...n]){const c=e[a];let d=!1;for(const p of s){const f=e[p],h=c.x-f.x,g=c.y-f.y;if(h*h+g*g<=t*t){d=!0;break}}d&&(s.add(a),n.delete(a),l=!0)}}r.push([...s])}return r}function $C(e){const t=e;return typeof t.lat=="function"&&typeof t.lng=="function"?{lat:t.lat(),lng:t.lng()}:{lat:37.5665,lng:126.978}}function CC(e){const t=e.replace(/[^a-zA-Z0-9_-]/g,"_");return t.length>0?t.slice(0,48):"x"}function EC(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const h5=88,g5=34,m5=13,PC=7,IC=h5,x5=g5+m5,TC=h5/2,RC=x5,zC="#a78bfa",MC="#8b5cf6",AC="#a78bfa";function _C(e,t){const n=EC(t);return`<div style="width:${IC}px;height:${x5}px;box-sizing:border-box;display:flex;flex-direction:column;align-items:center;filter:drop-shadow(0 2px 3px rgba(0,0,0,.24));pointer-events:auto" aria-hidden="true">
<div style="width:100%;height:${g5}px;box-sizing:border-box;background:${zC};border-radius:6px;padding:3px 4px;display:flex;align-items:center;justify-content:center">
<span style="display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;box-sizing:border-box;margin:0;color:#fff;font-size:10px;font-weight:800;line-height:1.2;text-align:center;word-break:keep-all;font-family:system-ui,-apple-system,'Segoe UI',sans-serif;letter-spacing:-0.02em;text-shadow:0 1px 2px rgba(0,0,0,.45)">${n}</span>
</div>
<div style="width:${PC}px;height:${m5}px;box-sizing:border-box;background:${MC};border-radius:0 0 3px 3px;flex-shrink:0"></div>
</div>`}function NC(e,t){const n=`clf_${CC(t)}`,r=e>99?"99+":String(e),i=e>99?10:e>9?11:13;return`<div style="width:38px;height:38px;pointer-events:auto" aria-hidden="true">
<svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
<defs>
<filter id="${n}" x="-40%" y="-40%" width="180%" height="180%">
<feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#2f0051" flood-opacity="0.42"/>
</filter>
</defs>
<circle cx="19" cy="19" r="15" fill="${AC}" filter="url(#${n})"/>
<text x="19" y="19" text-anchor="middle" dominant-baseline="central" fill="#fff" font-size="${i}" font-weight="800" font-family="system-ui,-apple-system,'Segoe UI',sans-serif">${r}</text>
</svg>
</div>`}const C2=({places:e,onSelectPlace:t,fillViewport:n=!1,sidePanelInsetPx:r=0})=>{const i=m.useRef(null),s=m.useRef(null),l=m.useRef([]),a=m.useRef(null),c=m.useRef(null),[d,p]=m.useState(!1),[f,h]=m.useState(!1),g=m.useRef(e),b=m.useRef(t);g.current=e,b.current=t;const v=m.useCallback(()=>{const S=s.current;if(!S||typeof navigator>"u"||!navigator.geolocation)return;const I=window.naver,k=I==null?void 0:I.maps;if(!k)return;const j=k.LatLng,R=S.panTo,z=S.setZoom,T=(P,E)=>{R==null||R.call(S,new j(P,E)),z==null||z.call(S,16)};if(c.current){T(c.current.lat,c.current.lng);return}h(!0),navigator.geolocation.getCurrentPosition(P=>{h(!1),T(P.coords.latitude,P.coords.longitude)},()=>h(!1),{enableHighAccuracy:!0,timeout:15e3,maximumAge:6e4})},[]),$=()=>{l.current.forEach(S=>S.setMap(null)),l.current=[]},x=S=>{const I=window.naver,k=I==null?void 0:I.maps;if(!S||!k)return;const j=k.Marker,R=k.LatLng,z=k.Point,T=k.Event,P=S.getProjection,E=S.getZoom,A=S.setZoom,N=S.panTo;if(!P||!E||!A||!N)return;const F=g.current;if(F.length===0){$();return}const Y=P.call(S);if(!Y||typeof Y.fromCoordToOffset!="function")return;const Q=F.map(w=>{const{lat:H,lng:M}=wu(w);return{place:w,latlng:new R(H,M)}});let _;try{_=Q.map(w=>{const H=Y.fromCoordToOffset(w.latlng);return{x:H.x,y:H.y}})}catch{return}const D=E.call(S)??11,C=jC(D),J=_.some(w=>!Number.isFinite(w.x)||!Number.isFinite(w.y))?Q.map((w,H)=>[H]):SC(_,C);$();for(const[w,H]of J.entries()){const M=H.map(te=>Q[te]);if(M.length===1){const{place:te,latlng:le}=M[0],xe=new j({position:le,map:S,title:te.name,icon:{content:_C(te.id,te.name),anchor:new z(TC,RC)}});T.addListener(xe,"click",()=>b.current(te.id)),l.current.push(xe);continue}let G=0,U=0;for(const te of M){const{lat:le,lng:xe}=$C(te.latlng);G+=le,U+=xe}const ne=M.length,de=new R(G/ne,U/ne),q=new j({position:de,map:S,icon:{content:NC(ne,`g${w}_${ne}`),anchor:new z(26,26)}});T.addListener(q,"click",()=>{const te=E.call(S)??11;A.call(S,Math.min(te+2,19)),N.call(S,de)}),l.current.push(q)}};m.useEffect(()=>{const S=i.current;if(!S)return;let I=!1;return(async()=>{if(!await vC("233s0l2jzo")||I||!i.current)return;const R=window.naver.maps,z=R.Map,T=R.LatLng,P=R.LatLngBounds,E=R.Event,A=new z(S,{center:new T(37.5665,126.978),zoom:11,scrollWheel:!0,scaleControl:!1,mapDataControl:!1,zoomControl:!1});if(I)return;s.current=A,p(!0);const N=()=>{x(A)};E.addListener(A,"idle",N),N();const F=g.current;if(F.length>0){const Y=new P;for(const _ of F){const{lat:D,lng:C}=wu(_);Y.extend(new T(D,C))}const Q=A.fitBounds;Q==null||Q.call(A,Y,{top:52,right:20,bottom:100,left:20})}})(),()=>{var k;I=!0,$(),c.current=null,(k=a.current)==null||k.setMap(null),a.current=null,s.current=null,p(!1),i.current&&(i.current.innerHTML="")}},[]),m.useEffect(()=>{g.current=e;const S=s.current;if(!S||(x(S),e.length===0))return;const I=window.naver,k=I==null?void 0:I.maps,j=k==null?void 0:k.LatLng,R=k==null?void 0:k.LatLngBounds;if(!j||!R)return;const z=new R;for(const P of e){const{lat:E,lng:A}=wu(P);z.extend(new j(E,A))}const T=S.fitBounds;T==null||T.call(S,z,{top:52,right:20,bottom:100,left:20})},[e]),m.useEffect(()=>{if(!d||typeof navigator>"u"||!navigator.geolocation)return;const S='<div style="width:16px;height:16px;background:#4B0082;border:3px solid #fff;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,.28)" aria-hidden="true"></div>',I=(j,R)=>{c.current={lat:j,lng:R};const z=s.current;if(!z)return;const T=window.naver,P=T==null?void 0:T.maps;if(!P)return;const E=P.LatLng,A=P.Marker,N=P.Point,F=new E(j,R),Y=a.current;if(Y&&typeof Y.setPosition=="function"){Y.setPosition(F);return}Y==null||Y.setMap(null),a.current=new A({position:F,map:z,zIndex:1e3,title:"내 위치",icon:{content:S,anchor:new N(8,8)}})},k=navigator.geolocation.watchPosition(j=>I(j.coords.latitude,j.coords.longitude),()=>{},{enableHighAccuracy:!0,maximumAge:15e3,timeout:3e4});return()=>{navigator.geolocation.clearWatch(k)}},[d]);const L=typeof navigator<"u"&&!!navigator.geolocation,y=o.jsx(wC,{$floating:n,$rightInsetPx:n?r:0,type:"button","aria-label":"현재 위치로 이동",title:"현재 위치로 이동",disabled:!d||f||!L,onClick:v,children:o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round","aria-hidden":!0,children:[o.jsx("circle",{cx:"12",cy:"12",r:"7"}),o.jsx("circle",{cx:"12",cy:"12",r:"1.5",fill:"currentColor",stroke:"none"}),o.jsx("path",{d:"M12 2v2M12 20v2M2 12h2M20 12h2"})]})});return o.jsxs(bC,{$fillViewport:n,children:[o.jsx(kC,{ref:i,$fillViewport:n,role:"application","aria-label":"명상지 지도"}),n?Cx.createPortal(y,document.body):y]})},E2=96,P2=960,F1=400;function DC(){const[e,t]=m.useState(()=>typeof window<"u"&&window.matchMedia(`(max-width: ${P2}px)`).matches);return m.useEffect(()=>{const n=window.matchMedia(`(max-width: ${P2}px)`),r=()=>t(n.matches);return n.addEventListener("change",r),()=>n.removeEventListener("change",r)},[]),e}const I2=u.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 20px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};

  @media (max-width: 960px) {
    padding: 20px 14px calc(48px + env(safe-area-inset-bottom, 0px));
  }
`,OC=u.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
`,BC=u.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,FC=u.button`
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
`,HC=u.button`
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
`,UC=u.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-areas: "filter content";
  gap: 28px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-areas: "content";
  }
`,VC=u.main`
  grid-area: content;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,WC=u.aside`
  grid-area: filter;

  @media (max-width: 960px) {
    display: none;
  }
`,KC=u.button`
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
`,YC=u.div`
  position: fixed;
  inset: 0;
  z-index: 125;
`,GC=ke`from { opacity: 0; } to { opacity: 1; }`,ZC=ke`from { transform: translateX(100%); } to { transform: translateX(0); }`,qC=u.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  animation: ${GC} 0.2s ease;
`,QC=u.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: min(90vw, 360px);
  background: ${({theme:e})=>e.colors.white};
  padding: 20px;
  overflow-y: auto;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);
  animation: ${ZC} 0.25s ease;
`,XC=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,JC=u.button`
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
`,ku=u.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,ul=u.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text700};
`,eE=u.div`
  position: fixed;
  z-index: 40;
  top: 0;
  left: 0;
  right: 0;
  bottom: calc(56px + env(safe-area-inset-bottom, 0px));
  background: ${({theme:e})=>e.colors.bg100};
`,T2=u.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  min-height: 0;
`,R2=u.div`
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
`,z2=u.div`
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
`,M2=u.span`
  text-align: center;
  font-weight: 700;
  font-size: 1.05rem;
  color: ${({theme:e})=>e.colors.text900};
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,A2=u.div`
  position: fixed;
  left: 50%;
  bottom: calc(64px + env(safe-area-inset-bottom, 0px));
  transform: translateX(-50%);
  z-index: 110;
  display: flex;
  justify-content: center;
`,tE=u.button`
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
`,nE=u.button`
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
`,rE=u.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: calc(56px + env(safe-area-inset-bottom, 0px));
  height: calc(100dvh - 56px - env(safe-area-inset-bottom, 0px));
  z-index: 95;
  transform: translateY(${({$ty:e})=>e}px);
  ${({$dragging:e})=>e?Oe`
          transition: none;
        `:Oe`
          transition: transform 0.48s cubic-bezier(0.25, 0.85, 0.3, 1);
        `}
  display: flex;
  flex-direction: column;
  background: ${({theme:e})=>e.colors.white};
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -10px 36px rgba(0, 0, 0, 0.14);
  overflow: hidden;
  touch-action: pan-y;
`,iE=u.div`
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
`,oE=u.div`
  flex-shrink: 0;
  padding: 0 12px 8px;
`,sE=u.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 0 12px calc(12px + env(safe-area-inset-bottom, 0px));
  -webkit-overflow-scrolling: touch;
`,_2=u.p`
  margin: 0 0 12px;
  font-size: 0.92rem;
  color: ${({theme:e})=>e.colors.text700};
`,lE=u.div`
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
`,aE=u.div`
  position: relative;
  flex: 1;
  min-width: 0;
  min-height: 0;
`,cE=u.aside`
  width: min(${F1}px, 42vw);
  max-width: ${F1}px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  background: ${({theme:e})=>e.colors.white};
  border-left: 1px solid ${({theme:e})=>e.colors.primary100};
  box-shadow: -6px 0 20px rgba(0, 0, 0, 0.06);
  z-index: 2;
  min-height: 0;
`,uE=u.div`
  flex-shrink: 0;
  padding: 12px 12px 8px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary100};
`,dE=u.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 12px 12px calc(12px + env(safe-area-inset-bottom, 0px));
  -webkit-overflow-scrolling: touch;
`,ju=u.div`
  height: 1px;
`,pE=()=>{const e=ft(),{regionId:t}=As(),n=DC(),{filters:r,page:i,pageSize:s,setPage:l,setRegion:a,setKeyword:c,toggleTag:d,setSortBy:p,setCategory:f,resetFilters:h,isFilterOpen:g,setFilterOpen:b}=e0(),[v,$]=m.useState("list"),[x,L]=m.useState(null),y=m.useRef(null),S=m.useRef(null),I=m.useRef(null),k=m.useRef(null),j=m.useRef({active:!1,startY:0,startTy:0}),[R,z]=m.useState(0),[T,P]=m.useState(400),[E,A]=m.useState(200),[N,F]=m.useState(!1),[Y,Q]=m.useState(!1),_=m.useCallback(()=>{const re=k.current;if(!re)return;const Pe=re.offsetHeight,Ie=Math.max(0,Pe-E2);P(Ie),A(Math.round(Ie*.4)),z(wt=>Math.max(0,Math.min(Ie,wt)))},[]);m.useLayoutEffect(()=>{if(!n||!t)return;const re=requestAnimationFrame(()=>{_();const Pe=k.current;if(Pe){const Ie=Math.max(0,Pe.offsetHeight-E2);z(Ie)}Q(!0)});return()=>cancelAnimationFrame(re)},[n,t,_]),m.useEffect(()=>{var Pe;if(!n)return;const re=()=>_();return window.addEventListener("resize",re),(Pe=window.visualViewport)==null||Pe.addEventListener("resize",re),()=>{var Ie;window.removeEventListener("resize",re),(Ie=window.visualViewport)==null||Ie.removeEventListener("resize",re)}},[n,_]),m.useEffect(()=>{t&&(a(t),l(1))},[t,a,l]);const D=en(re=>re.places),C=t?Wn(t):void 0,X=m.useMemo(()=>b3(D),[D]),J=m.useMemo(()=>t?t==="all"?[...D]:D.filter(re=>re.regionId===t):[],[t,D]),w=m.useMemo(()=>$a(J,r),[J,r]),H=m.useMemo(()=>w3(w,r.sortBy),[w,r.sortBy]),M=m.useMemo(()=>H.slice(0,i*s),[H,i,s]),G=M.length<H.length,U=n||v==="map",ne=x&&U?D.find(re=>re.id===x):void 0;m.useEffect(()=>{U||L(null)},[U]),m.useEffect(()=>{L(null)},[r.keyword,r.sortBy,r.tags,r.category]),m.useEffect(()=>{l(1)},[r.keyword,r.sortBy,r.tags,r.category,l]),m.useEffect(()=>{const re=n?S.current:v==="map"?I.current:null,Pe=y.current;if(!Pe||!G)return;const Ie=new IntersectionObserver(wt=>{var sn;(sn=wt[0])!=null&&sn.isIntersecting&&l(i+1)},{root:re??void 0,rootMargin:"200px"});return Ie.observe(Pe),()=>Ie.disconnect()},[G,n,v,i,l]);const de=m.useCallback(re=>{const Pe=re,Ie=Math.abs(re-E),wt=Math.abs(re-T);return Pe<=Ie&&Pe<=wt?0:Ie<=wt?E:T},[E,T]),q=m.useCallback(re=>{re.currentTarget.setPointerCapture(re.pointerId),j.current={active:!0,startY:re.clientY,startTy:R},F(!0)},[R]),te=m.useCallback(re=>{if(!j.current.active)return;const Pe=re.clientY-j.current.startY;let Ie=j.current.startTy+Pe;Ie=Math.max(0,Math.min(T,Ie)),z(Ie)},[T]),le=m.useCallback(re=>{if(j.current.active){j.current.active=!1;try{re.currentTarget.releasePointerCapture(re.pointerId)}catch{}F(!1),z(Pe=>de(Pe))}},[de]);if(!t||!C)return o.jsxs(I2,{children:[o.jsx(ul,{children:"해당 지역 정보를 찾지 못했어요."}),o.jsx(HC,{type:"button",onClick:()=>e("/meditation"),children:"메인으로 돌아가기"})]});const xe=()=>{n?z(0):$("list")},$e=()=>{n?z(T):$("map")},Me=n?Y?T>0&&R>=T*.5:!0:v==="map",De=g&&o.jsxs(YC,{children:[o.jsx(qC,{onClick:()=>b(!1)}),o.jsxs(QC,{children:[o.jsxs(XC,{children:[o.jsx("h3",{style:{margin:0,fontSize:"1.2rem"},children:"필터"}),o.jsx(JC,{type:"button",onClick:()=>b(!1),children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),o.jsx(ja,{filters:r,availableTags:X,onChangeKeyword:c,onChangeCategory:f,onToggleTag:d,onChangeSortBy:p,onReset:h})]})]}),Ee=U&&ne?o.jsx(gC,{place:ne,onClose:()=>L(null),onOpenDetail:()=>{e(`/meditation/place/${ne.id}`),L(null)}}):null,Ct=Me?o.jsx(A2,{children:o.jsx(tE,{type:"button",onClick:xe,"aria-label":"목록으로 보기",children:"목록"})}):o.jsx(A2,{children:o.jsx(nE,{type:"button",onClick:$e,"aria-label":"지도로 보기",children:"지도"})});return n?o.jsxs(o.Fragment,{children:[o.jsxs(eE,{children:[o.jsx(T2,{children:o.jsx(C2,{fillViewport:!0,places:H,onSelectPlace:L})}),o.jsx(R2,{children:o.jsxs(z2,{children:[o.jsx(dl,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(M2,{children:C.name}),o.jsx(dl,{type:"button",onClick:()=>b(!0),"aria-label":"필터",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})})})]})})]}),o.jsxs(rE,{ref:k,$ty:Y?R:T,$dragging:N,style:{visibility:Y?"visible":"hidden"},"aria-label":"명상지 목록 패널",children:[o.jsx(iE,{onPointerDown:q,onPointerMove:te,onPointerUp:le,onPointerCancel:le,"aria-hidden":!0}),o.jsx(oE,{children:o.jsx(Fl,{layout:"region",value:r.keyword,onChange:c,placeholder:"장소, 이름, 주소, 기관명, 태그로 검색"})}),o.jsxs(sE,{ref:S,children:[o.jsxs(_2,{children:["총 ",H.length,"곳"]}),o.jsxs(ku,{children:[M.length===0&&o.jsx(ul,{children:J.length===0?"등록된 공간이 없습니다.":"조건에 맞는 명상센터가 없어요."}),M.map(re=>o.jsx(es,{place:re},re.id))]}),G&&o.jsx(ju,{ref:y})]})]}),Ee,Ct,De]}):v==="map"?o.jsxs(o.Fragment,{children:[o.jsxs(lE,{children:[o.jsxs(aE,{children:[o.jsx(T2,{children:o.jsx(C2,{fillViewport:!0,sidePanelInsetPx:F1,places:H,onSelectPlace:L})}),o.jsx(R2,{children:o.jsxs(z2,{children:[o.jsx(dl,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(M2,{children:C.name}),o.jsx(dl,{type:"button",onClick:()=>b(!0),"aria-label":"필터",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})})})]})})]}),o.jsxs(cE,{"aria-label":"명상지 목록",children:[o.jsx(uE,{children:o.jsx(Fl,{layout:"region",value:r.keyword,onChange:c,placeholder:"장소, 이름, 주소, 기관명, 태그로 검색"})}),o.jsxs(dE,{ref:I,children:[o.jsxs(_2,{children:["총 ",H.length,"곳"]}),o.jsxs(ku,{children:[M.length===0&&o.jsx(ul,{children:J.length===0?"등록된 공간이 없습니다.":"조건에 맞는 명상센터가 없어요."}),M.map(re=>o.jsx(es,{place:re},re.id))]}),G&&o.jsx(ju,{ref:y})]})]})]}),Ee,Ct,De]}):o.jsxs(o.Fragment,{children:[o.jsxs(I2,{children:[o.jsxs(OC,{children:[o.jsxs(BC,{children:[o.jsx(FC,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx("h2",{style:{margin:0,fontSize:"1.25rem",fontWeight:600},children:"명상지 리스트"})]}),o.jsx(KC,{type:"button",onClick:()=>b(!0),"aria-label":"필터",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})})})]}),o.jsx(Fl,{layout:"region",value:r.keyword,onChange:c,placeholder:"장소, 이름, 주소, 기관명, 태그로 검색"}),o.jsxs(UC,{children:[o.jsx(WC,{children:o.jsx(ja,{filters:r,availableTags:X,onChangeKeyword:c,onChangeCategory:f,onToggleTag:d,onChangeSortBy:p,onReset:h})}),o.jsxs(VC,{children:[o.jsxs(ku,{children:[M.length===0&&o.jsx(ul,{children:J.length===0?"등록된 공간이 없습니다.":"조건에 맞는 명상센터가 없어요."}),M.map(re=>o.jsx(es,{place:re},re.id))]}),G&&o.jsx(ju,{ref:y})]})]})]}),Ct,De]})},N2=u.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 24px 16px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};
`,fE=u.header`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`,hE=u.button`
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
`,gE=u.div`
  flex: 1;
  min-width: 0;
`,mE=u.h1`
  margin: 0;
  font-size: 1.35rem;
  font-weight: 700;
`,xE=u.p`
  margin: 4px 0 0;
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.text700};
`,LE=u.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,yE=u.button`
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
`,vE=u.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`,bE=u.div`
  flex: 1;
  min-width: 0;
`,wE=u.h2`
  margin: 0 0 6px;
  font-size: 1.1rem;
  font-weight: 700;
`,kE=u.p`
  margin: 0;
  font-size: 0.92rem;
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.45;
`,D2=u.p`
  text-align: center;
  color: ${({theme:e})=>e.colors.text700};
  padding: 40px 16px;
`,jE=()=>{const e=ft(),{regionId:t}=As(),n=t?Wn(t):void 0,r=en(s=>s.experts),i=m.useMemo(()=>t?t==="all"?[...r]:r.filter(s=>s.regionIds.includes(t)):[],[t,r]);return!t||!n?o.jsx(N2,{children:o.jsx(D2,{children:"지역 정보를 찾을 수 없어요."})}):o.jsxs(N2,{children:[o.jsxs(fE,{children:[o.jsx(hE,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsxs(gE,{children:[o.jsxs(mE,{children:[n.name," 명상 전문가"]}),o.jsx(xE,{children:"프로필 · 전문 분야를 확인하고 상세로 이동하세요"})]})]}),o.jsxs(LE,{children:[i.length===0&&o.jsx(D2,{children:"이 지역에 등록된 명상 전문가가 아직 없어요."}),i.map(s=>o.jsxs(yE,{type:"button",onClick:()=>e(`/meditation/expert/${s.id}`),children:[o.jsx(vE,{src:sv(s.avatarUrl),alt:"",loading:"lazy",decoding:"async",sizes:"64px"}),o.jsxs(bE,{children:[o.jsx(wE,{children:s.name}),o.jsx(kE,{children:s.specialties.join(" · ")})]})]},s.id))]})]})},SE="★",$E="☆";function Ra(e,t=5){const n=Math.round(Number(e)),r=Math.max(0,Math.min(t,Number.isFinite(n)?n:0));return SE.repeat(r)+$E.repeat(t-r)}const CE=5,EE=ke`
  from { opacity: 0; }
  to { opacity: 1; }
`,PE=ke`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`,IE=u.div`
  position: fixed;
  inset: 0;
  z-index: 400;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  animation: ${EE} 0.2s ease both;

  @media (min-width: 600px) {
    justify-content: center;
    align-items: center;
    padding: 24px;
  }
`,TE=u.div`
  background: ${({theme:e})=>e.colors.white};
  border-radius: 20px 20px 0 0;
  max-height: min(92dvh, 720px);
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${PE} 0.32s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (min-width: 600px) {
    border-radius: ${({theme:e})=>e.radii.lg};
    max-width: 440px;
    max-height: min(85dvh, 640px);
  }
`,RE=u.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 16px;
  padding-top: calc(12px + env(safe-area-inset-top, 0px));
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary100};
`,zE=u.div`
  min-width: 0;
`,ME=u.span`
  display: block;
  font-size: 1rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
`,AE=u.span`
  display: block;
  margin-top: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text700};
`,_E=u.button`
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
`,NE=u.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 18px 16px calc(24px + env(safe-area-inset-bottom, 0px));
`,DE=u.article`
  padding-bottom: 18px;
  margin-bottom: 18px;
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary100};

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`,OE=u.p`
  margin: 0 0 10px;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text900};
`,BE=u.div`
  margin: 0;
  font-size: 1rem;
  line-height: 1.65;
  color: ${({theme:e})=>e.colors.text700};
  white-space: pre-wrap;
  word-break: break-word;
`,FE=u.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 16px calc(12px + env(safe-area-inset-bottom, 0px));
  border-top: 1px solid ${({theme:e})=>e.colors.primary100};
  background: ${({theme:e})=>e.colors.white};
`,O2=u.button`
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
`,HE=u.span`
  font-size: 0.88rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text700};
  min-width: 4.5em;
  text-align: center;
`,L5=({open:e,onClose:t,heading:n="후기",reviews:r,pageSize:i})=>{const s=i??CE,[l,a]=m.useState(1);m.useEffect(()=>{if(!e){a(1);return}a(1)},[e,r]),m.useEffect(()=>{if(!e)return;const b=v=>{v.key==="Escape"&&(v.stopPropagation(),t())};return window.addEventListener("keydown",b,!0),()=>window.removeEventListener("keydown",b,!0)},[e,t]),m.useEffect(()=>{if(!e)return;const b=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=b}},[e]);const c=m.useCallback(b=>{b.target===b.currentTarget&&t()},[t]),d=r.length,p=d===0?0:Math.ceil(d/s),f=p===0?1:Math.min(l,p),h=m.useMemo(()=>{if(d===0)return[];const b=(f-1)*s;return r.slice(b,b+s)},[r,d,f,s]);if(m.useEffect(()=>{p>0&&l>p&&a(p)},[l,p]),!e)return null;const g=d===0?"등록된 후기가 없어요.":p>1?`총 ${d}건 · ${s}건씩 보기`:`총 ${d}건`;return o.jsx(IE,{role:"presentation",onClick:c,children:o.jsxs(TE,{role:"dialog","aria-modal":"true","aria-labelledby":"reviews-list-sheet-title",onClick:b=>b.stopPropagation(),children:[o.jsxs(RE,{children:[o.jsxs(zE,{children:[o.jsx(ME,{id:"reviews-list-sheet-title",children:n}),o.jsx(AE,{children:g})]}),o.jsx(_E,{type:"button",onClick:t,"aria-label":"닫기",children:o.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),o.jsx(NE,{children:d===0?null:h.map((b,v)=>{const $=b.rating!=null?` · ${Ra(b.rating)}`:"",x=(f-1)*s+v;return o.jsxs(DE,{children:[o.jsxs(OE,{children:[b.author,$]}),o.jsx(BE,{children:b.body})]},`${b.author}-${x}`)})}),d>0&&p>1&&o.jsxs(FE,{children:[o.jsx(O2,{type:"button",onClick:()=>a(b=>Math.max(1,b-1)),disabled:f<=1,children:"이전"}),o.jsxs(HE,{children:[f," / ",p]}),o.jsx(O2,{type:"button",onClick:()=>a(b=>Math.min(p,b+1)),disabled:f>=p,children:"다음"})]})]})})},UE=[{id:"KR-11",name:"서울",slug:"seoul"},{id:"KR-26",name:"부산",slug:"busan"},{id:"KR-27",name:"대구",slug:"daegu"},{id:"KR-28",name:"인천",slug:"incheon"},{id:"KR-29",name:"광주",slug:"gwangju"},{id:"KR-30",name:"대전",slug:"daejeon"},{id:"KR-31",name:"울산",slug:"ulsan"},{id:"KR-41",name:"경기",slug:"gyeonggi"},{id:"KR-42",name:"강원",slug:"gangwon"},{id:"KR-43",name:"충북",slug:"chungbuk"},{id:"KR-44",name:"충남",slug:"chungnam"},{id:"KR-45",name:"전북",slug:"jeonbuk"},{id:"KR-46",name:"전남",slug:"jeonnam"},{id:"KR-47",name:"경북",slug:"gyeongbuk"},{id:"KR-48",name:"경남",slug:"gyeongnam"},{id:"KR-49",name:"제주",slug:"jeju"},{id:"KR-50",name:"세종",slug:"sejong"}],Gr=[...UE].sort((e,t)=>e.name.localeCompare(t.name,"ko"));function lo(e){var t;return((t=Gr.find(n=>n.id===e))==null?void 0:t.name)??e}function VE(){var e,t;return((e=Gr.find(n=>n.id==="KR-11"))==null?void 0:e.id)??((t=Gr[0])==null?void 0:t.id)??"KR-11"}function WE(e,t){const n=t.trim();if(!n)return;const r=e.programs.find(c=>{var d;return(d=c.linksClassTypes)==null?void 0:d.includes(n)});if(r)return r;const s=n.replace(/\([^)]*\)/g," ").replace(/[·]/g," ").split(/\s+/).map(c=>c.replace(/[()]/g,"").trim()).filter(c=>c.length>=2),l=c=>`${c.title} ${c.description}`.toLowerCase(),a=e.programs.find(c=>{const d=l(c);return d.includes(n.toLowerCase())?!0:s.some(p=>d.includes(p.toLowerCase()))});return a||(e.programs.find(c=>c.status==="ongoing")??e.programs[0])}const Su=u.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 0 calc(120px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};
  position: relative;
  z-index: 1;
`,$u=u.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  padding-top: calc(16px + env(safe-area-inset-top, 0px));
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.95);
  z-index: 5;
`,Cu=u.button`
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
`,Eu=u.h1`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
`,KE=u.div`
  padding: 8px 20px 20px;
  text-align: center;
`,YE=u.img`
  width: 112px;
  height: 112px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${({theme:e})=>e.colors.primary200};
`,GE=u.h2`
  margin: 16px 0 8px;
  font-size: 1.6rem;
  font-weight: 700;
`,B2=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
`,ZE=u.span`
  font-size: 0.85rem;
  padding: 4px 10px;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary50};
  color: ${({theme:e})=>e.colors.primary700};
`,qE=u.button`
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
`,F2=u.ul`
  margin: 0;
  padding-left: 1.2em;
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.6;

  li {
    margin-bottom: 6px;
  }
`,H2=u.button`
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
`,U2=u.span`
  display: block;
  margin: 0 0 6px;
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
`,V2=u.span`
  display: block;
  font-size: 1rem;
  line-height: 1.65;
  color: ${({theme:e})=>e.colors.text700};
`,W2=u.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  display: block;
  pointer-events: none;
  user-select: none;
`,K2=u.div`
  padding: 14px 16px;
`,Y2=u.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 6px;
  margin-bottom: 8px;
  background: ${({theme:e,$past:t})=>t?e.colors.bg100:e.colors.primary100};
  color: ${({theme:e,$past:t})=>t?e.colors.text700:e.colors.primary700};
`,QE=u.button`
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
`,XE=u.div`
  padding: 14px 16px;
  border-radius: ${({theme:e})=>e.radii.md};
  background: ${({theme:e})=>e.colors.warmCream};
  margin-bottom: 10px;
`,JE=u.p`
  margin: 0 0 6px;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text900};
`,eP=u.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.55;
  color: ${({theme:e})=>e.colors.text700};
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,tP=u.button`
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
`,nP=u.p`
  margin: 0;
  color: ${({theme:e})=>e.colors.text700};
  font-size: 0.95rem;
`,rP=()=>{const e=ft(),{expertId:t}=As(),[n,r]=m.useState(),[i,s]=m.useState(),[l,a]=m.useState(!0),[c,d]=m.useState(!1);if(m.useEffect(()=>{if(!t){r(void 0),s(void 0),a(!1);return}let h=!1;return a(!0),(async()=>{const g=await i3(t);if(!h){if(!g){r(void 0),s(void 0),a(!1);return}if(r(g),g.centerPlaceId){const b=await l3(g.centerPlaceId);h||s(b??void 0)}else s(void 0);a(!1)}})(),()=>{h=!0}},[t]),l)return o.jsxs(Su,{children:[o.jsxs($u,{children:[o.jsx(Cu,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(Eu,{children:"전문가"})]}),o.jsx(vn,{children:o.jsx(Sr,{children:"불러오는 중…"})})]});if(!n)return o.jsxs(Su,{children:[o.jsxs($u,{children:[o.jsx(Cu,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(Eu,{children:"전문가"})]}),o.jsx(vn,{children:o.jsx(Sr,{children:"프로필을 찾을 수 없어요."})})]});const p=n.programs.filter(h=>h.status==="ongoing"),f=n.programs.filter(h=>h.status==="past");return o.jsxs(Su,{children:[o.jsxs($u,{children:[o.jsx(Cu,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(Eu,{children:"명상 전문가"})]}),o.jsxs(KE,{children:[o.jsx(YE,{src:n.avatarUrl,alt:""}),o.jsx(GE,{children:n.name}),o.jsx(B2,{children:n.specialties.map(h=>o.jsx(ZE,{children:h},h))})]}),o.jsxs(vn,{children:[o.jsx(Qn,{children:"자기소개"}),o.jsx(Sr,{as:"div",children:o.jsx(so,{markdown:n.intro})})]}),o.jsxs(vn,{children:[o.jsx(Qn,{children:"학위·이수"}),o.jsx(F2,{children:[...n.degrees,...n.certificates].map(h=>o.jsx("li",{children:h},h))})]}),o.jsxs(vn,{children:[o.jsx(Qn,{children:"경력"}),o.jsx(F2,{children:n.careers.map(h=>o.jsx("li",{children:h},h))})]}),o.jsxs(vn,{children:[o.jsx(Qn,{children:"클래스·분야"}),o.jsx(B2,{style:{justifyContent:"flex-start"},children:n.classTypes.map(h=>{const g=WE(n,h);return o.jsx(qE,{type:"button",disabled:!g,title:g?`${g.title} 상세 보기`:"등록된 클래스가 없어요",onClick:()=>{g&&e(`/meditation/expert/${n.id}/class/${g.id}`)},children:h},h)})})]}),o.jsxs(vn,{children:[o.jsx(Qn,{children:"센터·활동 지역"}),n.hasCenter&&n.centerSummary&&o.jsx(Sr,{style:{marginBottom:8},children:n.centerSummary}),n.hasCenter&&n.centerAddress&&o.jsx(Sr,{style:{marginBottom:8},children:n.centerAddress}),n.hasCenter&&n.centerPlaceId&&i&&o.jsxs(QE,{type:"button",onClick:()=>e(`/meditation/place/${n.centerPlaceId}`),children:["연결된 명상지 보기 — ",i.name]}),!n.hasCenter&&n.activityAreas&&n.activityAreas.length>0&&o.jsxs(Sr,{children:["주 활동 반경: ",n.activityAreas.map(lo).join(", ")]})]}),o.jsxs(vn,{children:[o.jsx(Qn,{children:"진행 중인 클래스"}),p.length===0&&o.jsx(Sr,{children:"현재 모집 중인 공개 일정이 없어요."}),p.map(h=>o.jsxs(H2,{type:"button","aria-label":`${h.title} 클래스 상세`,onClick:()=>e(`/meditation/expert/${n.id}/class/${h.id}`),children:[h.imageUrl&&o.jsx(W2,{src:h.imageUrl,alt:"",draggable:!1}),o.jsxs(K2,{children:[o.jsx(Y2,{children:"진행 중"}),o.jsx(U2,{children:h.title}),o.jsx(V2,{children:h.description})]})]},h.id))]}),f.length>0&&o.jsxs(vn,{children:[o.jsx(Qn,{children:"이전 프로그램"}),f.map(h=>o.jsxs(H2,{type:"button","aria-label":`${h.title} 클래스 상세`,onClick:()=>e(`/meditation/expert/${n.id}/class/${h.id}`),children:[h.imageUrl&&o.jsx(W2,{src:h.imageUrl,alt:"",draggable:!1}),o.jsxs(K2,{children:[o.jsx(Y2,{$past:!0,children:"종료"}),o.jsx(U2,{children:h.title}),o.jsx(V2,{children:h.description})]})]},h.id))]}),n.reviews.length>0&&o.jsxs(vn,{children:[o.jsx(Qn,{children:"후기"}),n.reviews.slice(0,2).map((h,g)=>o.jsxs(XE,{children:[o.jsxs(JE,{children:[h.author,h.rating!=null?` · ${Ra(h.rating)}`:""]}),o.jsx(eP,{children:h.body})]},`${h.author}-${g}`)),n.reviews.length>2&&o.jsxs(nP,{style:{marginBottom:10},children:["외 ",n.reviews.length-2,"건의 후기가 더 있어요."]}),o.jsxs(tP,{type:"button",onClick:()=>d(!0),children:["전체 후기 보기 · ",n.reviews.length,"건"]})]}),o.jsx(L5,{open:c,onClose:()=>d(!1),heading:"후기",reviews:n.reviews})]})},Pu=u.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 0 calc(48px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};
`,Iu=u.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  padding-top: calc(16px + env(safe-area-inset-top, 0px));
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.96);
  z-index: 5;
`,Tu=u.button`
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
`,Ru=u.h1`
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0;
  flex: 1;
  min-width: 0;
`,iP=u.div`
  width: 100%;
`,oP=u.img`
  width: 100%;
  max-height: 240px;
  object-fit: cover;
  display: block;
  background: ${({theme:e})=>e.colors.bg100};
`,sP=u.div`
  padding: 20px 20px 28px;
`,lP=u.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 8px;
  margin-bottom: 12px;
  background: ${({theme:e,$past:t})=>t?e.colors.bg100:e.colors.primary100};
  color: ${({theme:e,$past:t})=>t?e.colors.text700:e.colors.primary700};
`,aP=u.h2`
  margin: 0 0 14px;
  font-size: 1.45rem;
  font-weight: 700;
  line-height: 1.3;
`,cP=u.p`
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.65;
  color: ${({theme:e})=>e.colors.text700};
`,uP=u.button`
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
`,G2=u.p`
  padding: 32px 20px;
  color: ${({theme:e})=>e.colors.text700};
`,dP=()=>{const e=ft(),{expertId:t,programId:n}=As(),[r,i]=m.useState(),[s,l]=m.useState(!0);m.useEffect(()=>{if(!t){i(void 0),l(!1);return}let c=!1;return l(!0),i3(t).then(d=>{c||(i(d??void 0),l(!1))}),()=>{c=!0}},[t]);const a=r==null?void 0:r.programs.find(c=>c.id===n);return s?o.jsxs(Pu,{children:[o.jsxs(Iu,{children:[o.jsx(Tu,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(Ru,{children:"클래스"})]}),o.jsx(G2,{children:"불러오는 중…"})]}):!r||!a?o.jsxs(Pu,{children:[o.jsxs(Iu,{children:[o.jsx(Tu,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(Ru,{children:"클래스"})]}),o.jsx(G2,{children:"클래스 정보를 찾을 수 없어요."})]}):o.jsxs(Pu,{children:[o.jsxs(Iu,{children:[o.jsx(Tu,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(Ru,{children:"클래스 상세"})]}),a.imageUrl?o.jsx(iP,{children:o.jsx(oP,{src:a.imageUrl,alt:""})}):o.jsx("div",{style:{height:8}}),o.jsxs(sP,{children:[o.jsx(lP,{$past:a.status==="past",children:a.status==="ongoing"?"진행 중":"종료된 프로그램"}),o.jsx(aP,{children:a.title}),o.jsx(cP,{children:a.description}),o.jsxs(uP,{type:"button",onClick:()=>e(`/meditation/expert/${r.id}`),children:["← ",r.name," 프로필로 돌아가기"]})]})]})},y5=ke`
  from { opacity: 0; }
  to { opacity: 1; }
`,pP=ke`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`,fP=u.div`
  position: fixed;
  inset: 0;
  z-index: 300;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  animation: ${y5} 0.2s ease both;

  @media (min-width: 600px) {
    justify-content: center;
    align-items: center;
    padding: 24px;
  }
`,hP=u.div`
  background: ${({theme:e})=>e.colors.white};
  border-radius: 20px 20px 0 0;
  max-height: min(94dvh, 920px);
  height: min(94dvh, 920px);
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${pP} 0.32s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (min-width: 600px) {
    border-radius: ${({theme:e})=>e.radii.lg};
    max-width: 440px;
    height: min(88dvh, 780px);
  }
`,gP=u.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  padding-top: calc(12px + env(safe-area-inset-top, 0px));
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary100};
`,mP=u.span`
  font-size: 1rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
`,xP=u.button`
  width: 40px;
  height: 40px;
  border: none;
  background: ${({theme:e})=>e.colors.bg100};
  border-radius: ${({theme:e})=>e.radii.pill};
  cursor: pointer;
  display: grid;
  place-items: center;
  color: ${({theme:e})=>e.colors.text900};
`,LP=u.div`
  flex-shrink: 0;
  position: relative;
  height: 42vmin;
  min-height: 200px;
  max-height: 280px;
  background: ${({theme:e})=>e.colors.bg100};
`,yP=u.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  touch-action: pan-y pinch-zoom;
`,vP=u.div`
  display: flex;
  height: 100%;
  will-change: transform;
`,bP=u.div`
  flex-shrink: 0;
  height: 100%;
`,wP=u.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none;
  user-select: none;
`,Z2=u.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  user-select: none;
`,q2=u.button`
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
`,kP=u.div`
  position: fixed;
  inset: 0;
  z-index: 400;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  flex-direction: column;
  animation: ${y5} 0.2s ease both;
`,jP=u.div`
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 12px;
  padding-top: calc(8px + env(safe-area-inset-top, 0px));
`,SP=u.button`
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
`,$P=u.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10px 28px;
  padding-bottom: calc(28px + env(safe-area-inset-bottom, 0px));
`,Q2=u.div`
  height: 100%;
  width: 100%;
  will-change: transform;
  transition: ${({$snap:e})=>e?"transform 0.28s cubic-bezier(0.22, 1, 0.36, 1)":"none"};
`,X2=u.div`
  position: relative;
  width: 100%;
  max-width: min(96vw, 720px);
  height: min(85dvh, 900px);
  max-height: min(85dvh, 900px);
  overflow: hidden;
  touch-action: none;
  background: transparent;
  border-radius: ${({theme:e})=>e.radii.md};
`,CP=u.div`
  display: flex;
  height: 100%;
  will-change: transform;
`,EP=u.div`
  flex-shrink: 0;
  height: 100%;
`,PP=u.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  background: transparent;
  display: block;
  pointer-events: none;
  user-select: none;
`,J2=u.img`
  width: 100%;
  height: 100%;
  max-height: min(85dvh, 900px);
  object-fit: contain;
  object-position: center;
  background: transparent;
  display: block;
  user-select: none;
`,IP=u.div`
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
`,TP=u.div`
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
`,v5=u.button`
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
`,RP=u.div`
  flex-shrink: 0;
  display: flex;
  gap: 8px;
  padding: 12px 16px;
  background: ${({theme:e})=>e.colors.warmCream};
`,e4=u.button`
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
`,zP=u.div`
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
`,MP=u.button`
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
`,AP=u.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 18px 16px 28px;
`,_P=u.h3`
  margin: 0 0 12px;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.25;
`,NP=u.div`
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
`,DP=u.section`
  margin-top: 8px;
`,t4=u.h4`
  margin: 0 0 12px;
  font-size: 1rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
`,n4=u.div`
  padding: 14px;
  border-radius: ${({theme:e})=>e.radii.md};
  background: ${({theme:e})=>e.colors.warmCream};
  margin-bottom: 10px;
`,r4=u.p`
  margin: 0 0 6px;
  font-size: 0.88rem;
  font-weight: 600;
`,i4=u.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.55;
  color: ${({theme:e})=>e.colors.text700};
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,o4=u.button`
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
`,OP=u.section`
  margin-top: 28px;
  padding-top: 22px;
  border-top: 1px solid ${({theme:e})=>e.colors.primary100};
`,BP=u.h4`
  margin: 0 0 14px;
  font-size: 1.05rem;
  font-weight: 700;
`,FP=u.article`
  margin-bottom: 20px;
`,HP=u.div`
  display: flex;
  gap: 14px;
  align-items: flex-start;
  margin-bottom: 10px;
`,UP=u.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`,VP=u.div`
  font-weight: 700;
  font-size: 1.05rem;
  margin-bottom: 6px;
`,WP=u.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.55;
  color: ${({theme:e})=>e.colors.text700};
`,zu=u.p`
  margin: 0;
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.text700};
`;function m0(e,t){const n=e.join("\0"),[r,i]=m.useState(1),[s,l]=m.useState(!1),[a,c]=m.useState(0),[d,p]=m.useState(0),f=m.useRef(null),h=m.useRef(null),g=m.useRef(1),b=m.useRef(null),v=m.useRef(0),$=m.useRef(0),x=m.useRef(null),L=m.useCallback(()=>{b.current=null,v.current=0,$.current=0,p(0)},[]);m.useEffect(()=>{if(x.current===null){x.current=n;return}x.current!==n&&(x.current=n,i(1),l(!1),c(0),L())},[n,L]),m.useLayoutEffect(()=>{if(!t||e.length<=1){c(0);return}const N=f.current;if(!N)return;const F=()=>{const Q=N.getBoundingClientRect().width;Q>0&&c(Q)};F();const Y=new ResizeObserver(F);return Y.observe(N),()=>Y.disconnect()},[t,e.length,n]);const y=m.useMemo(()=>{const N=e.length;return N<=1?e:[e[N-1],...e,e[0]]},[e]),S=y.length,I=m.useMemo(()=>{const N=e.length;return N<=1?0:r===0?N-1:r===N+1?0:r-1},[e.length,r]),k=m.useCallback(N=>{e.length<=1||(b.current=N.touches[0].clientX,v.current=0,$.current=0,p(0))},[e.length]),j=m.useCallback(N=>{var X;if(b.current==null||e.length<=1)return;const F=((X=f.current)==null?void 0:X.offsetWidth)??320,Y=e.length;let Q=N.touches[0].clientX-b.current;const _=F*.45;Q=Math.max(-_,Math.min(_,Q)),$.current=Q;const D=g.current;let C=Q;D===1&&Q>0&&(C=0),D===Y&&Q<0&&(C=0),v.current=C,p(C)},[e.length]),R=m.useCallback(()=>{var _;if(b.current==null||e.length<=1){L();return}const N=((_=f.current)==null?void 0:_.offsetWidth)??320,F=Math.min(48,N*.14),Y=$.current,Q=e.length;i(D=>Y>F?D===0?Q-1:D===1?0:D-1:Y<-F?D===Q+1?2:D===Q?Q+1:D+1:D),L()},[e.length,L]),z=m.useCallback(N=>{if(!N.propertyName.toLowerCase().includes("transform")||N.target!==N.currentTarget)return;const F=e.length;if(F<=1)return;const Y=g.current;Y===F+1?(l(!0),i(1)):Y===0&&(l(!0),i(F))},[e.length]);m.useLayoutEffect(()=>{if(!s)return;const N=h.current;N&&N.offsetWidth;let F=null;const Y=requestAnimationFrame(()=>{F=requestAnimationFrame(()=>{l(!1)})});return()=>{cancelAnimationFrame(Y),F!=null&&cancelAnimationFrame(F)}},[r,s]),m.useEffect(()=>{L()},[n,L]),g.current=r;const T=e.length>1&&a>0,P=T?S*a:void 0,E=T?-(r*a)+d:0,A=m.useCallback(N=>{l(!1),i(N),L()},[L]);return{loopIndex:r,setLoopIndex:i,activeDot:I,loopUrls:y,slideCount:S,usePx:T,trackWidthPx:P,translatePx:E,transOff:s,dragPx:d,viewportRef:f,trackRef:h,onTouchStart:k,onTouchMove:j,onTouchEnd:R,onTouchCancel:L,onTransitionEnd:z,vpWidth:a,syncToLoopIndex:A}}const pl=14,KP=115,YP=360;function s4(e){const t=Math.sign(e),n=Math.abs(e);return t*Math.min(n*.88,YP)}function b5({urls:e,initialLoopIndex:t,onClose:n,lockBodyScroll:r=!0}){const i=e.length>1,s=m0(e,i),{syncToLoopIndex:l,viewportRef:a,trackRef:c,onTouchStart:d,onTouchMove:p,onTouchEnd:f,onTouchCancel:h,onTransitionEnd:g,usePx:b,trackWidthPx:v,translatePx:$,transOff:x,dragPx:L,loopUrls:y,vpWidth:S,setLoopIndex:I,activeDot:k}=s,[j,R]=m.useState(0),[z,T]=m.useState(!1),P=m.useRef(0),E=m.useRef(null),A=m.useRef("n"),N=m.useRef(null),F=m.useRef(!1),Y=m.useCallback(U=>{var ne;if((ne=N.current)==null||ne.call(N),N.current=null,a.current=U,U){const de=q=>{A.current==="v"&&q.preventDefault()};U.addEventListener("touchmove",de,{passive:!1}),N.current=()=>U.removeEventListener("touchmove",de)}},[a]);m.useEffect(()=>{if(!r)return;const U=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=U}},[r]),m.useLayoutEffect(()=>{e.length<=1||l(t)},[e.length,t,l]),m.useEffect(()=>{P.current=0,R(0),A.current="n",E.current=null,F.current=!1},[e.join("\0")]),m.useEffect(()=>{const U=ne=>{ne.key==="Escape"&&n()};return window.addEventListener("keydown",U),()=>window.removeEventListener("keydown",U)},[n]),m.useEffect(()=>()=>{var U;(U=N.current)==null||U.call(N),N.current=null},[]);const Q=m.useCallback(U=>{U.target===U.currentTarget&&n()},[n]),_=m.useCallback(()=>{if(Math.abs(P.current)>=KP){P.current=0,R(0),n();return}T(!0),P.current=0,R(0),window.setTimeout(()=>T(!1),320)},[n]),D=m.useCallback(U=>{U.touches.length===1&&(T(!1),E.current={x:U.touches[0].clientX,y:U.touches[0].clientY},A.current="n")},[]),C=m.useCallback(U=>{if(!E.current||U.touches.length!==1)return;const ne=U.touches[0].clientX,de=U.touches[0].clientY,q=ne-E.current.x,te=de-E.current.y;if(A.current==="n"){if(Math.abs(q)<pl&&Math.abs(te)<pl)return;Math.abs(te)>=Math.abs(q)?A.current="v":(A.current="h",e.length>1&&d(U))}if(A.current==="v"){const le=s4(te);P.current=le,R(le);return}A.current==="h"&&e.length>1&&p(U)},[e.length,p,d]),X=m.useCallback(()=>{A.current==="v"?_():A.current==="h"&&e.length>1&&f(),E.current=null,A.current="n"},[_,f,e.length]),J=m.useCallback(()=>{A.current==="v"?_():A.current==="h"&&e.length>1&&h(),E.current=null,A.current="n"},[_,h,e.length]),w=m.useCallback(U=>{U.button===0&&(F.current=!0,T(!1),E.current={x:U.clientX,y:U.clientY},A.current="n")},[]),H=m.useCallback(U=>{if(!F.current||!E.current)return;const ne=U.clientX-E.current.x,de=U.clientY-E.current.y;if(A.current==="n"){if(Math.abs(ne)<pl&&Math.abs(de)<pl)return;if(Math.abs(de)>=Math.abs(ne))A.current="v";else{A.current="h",F.current=!1,E.current=null;return}}if(A.current==="v"){const q=s4(de);P.current=q,R(q)}},[]),M=m.useCallback(()=>{F.current&&(F.current=!1,A.current==="v"&&_(),E.current=null,A.current="n")},[_]);if(e.length===0)return null;const G={ref:Y,onTouchStart:D,onTouchMove:C,onTouchEnd:X,onTouchCancel:J,onMouseDown:w,onMouseMove:H,onMouseUp:M,onMouseLeave:M};return o.jsxs(kP,{role:"dialog","aria-modal":"true","aria-label":"프로그램 사진 크게 보기",onClick:Q,children:[o.jsx(jP,{onClick:U=>U.stopPropagation(),children:o.jsx(SP,{type:"button",onClick:n,"aria-label":"닫기",children:o.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})}),o.jsx($P,{onClick:U=>U.stopPropagation(),children:e.length<=1?o.jsx(X2,{...G,children:o.jsx(Q2,{$snap:z,style:{transform:`translate3d(0, ${j}px, 0)`},children:o.jsx(J2,{src:e[0],alt:"",draggable:!1})})}):o.jsxs(o.Fragment,{children:[o.jsx(X2,{...G,children:o.jsx(Q2,{$snap:z,style:{transform:`translate3d(0, ${j}px, 0)`},children:b?o.jsx(CP,{ref:c,onTransitionEnd:g,style:{width:v,height:"100%",transform:`translate3d(${$}px, 0, 0)`,transition:L!==0||x?"none":"transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)"},children:y.map((U,ne)=>o.jsx(EP,{style:{width:S,flexShrink:0},children:o.jsx(PP,{src:U,alt:"",draggable:!1})},`viewer-loop-${ne}`))}):o.jsx(J2,{src:e[0],alt:"",draggable:!1})})}),o.jsx(TP,{children:e.map((U,ne)=>o.jsx(v5,{type:"button","aria-label":`${ne+1}번째 사진으로 이동`,"aria-current":ne===k?"true":void 0,$active:ne===k,onClick:()=>I(ne+1)},ne))})]})})]})}const GP=({place:e,open:t,onClose:n,initialProgramId:r})=>{var T,P;const i=ic(e).programs??[],s=m.useMemo(()=>i.filter(E=>E.status==="ongoing"),[i]),l=m.useMemo(()=>i.filter(E=>E.status==="past"),[i]),[a,c]=m.useState("ongoing"),[d,p]=m.useState(null),[f,h]=m.useState(!1),[g,b]=m.useState(null),v=a==="ongoing"?s:l;m.useEffect(()=>{var N,F;if(!t)return;const E=(N=s[0])==null?void 0:N.id,A=(F=l[0])==null?void 0:F.id;if(r&&i.some(Y=>Y.id===r)){const Y=i.find(Q=>Q.id===r);c(Y.status==="ongoing"?"ongoing":"past"),p(r)}else E?(c("ongoing"),p(E)):A?(c("past"),p(A)):p(null)},[t,r,s,l,i]);const $=i.find(E=>E.id===d)??null,x=m.useMemo(()=>{var N;if(!$)return[];const E=(N=$.imageUrls)!=null&&N.length?$.imageUrls:[],A=[$.imageUrl,...E.filter(F=>F!==$.imageUrl)];return Array.from(new Set(A))},[$]),L=t&&!!$&&x.length>1,y=m0(x,L);m.useEffect(()=>{t&&y.syncToLoopIndex(1)},[t,y.syncToLoopIndex]),m.useEffect(()=>{b(null)},[d]),m.useEffect(()=>{t||h(!1)},[t]),m.useEffect(()=>{if(!t)return;const E=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=E}},[t]),m.useEffect(()=>{t||b(null)},[t]),m.useEffect(()=>{if(!t)return;const E=A=>{if(A.key==="Escape"){if(f){A.preventDefault(),h(!1);return}n()}};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[t,n,f]);const S=m.useCallback(E=>{E.target===E.currentTarget&&n()},[n]),I=e.venueKind==="명상센터"&&(((T=e.instructors)==null?void 0:T.length)??0)>0,k=s.length>0&&l.length>0,j=I&&(((P=e.instructors)==null?void 0:P.some(E=>E.reviews.length>0))??!1),R=m.useCallback(()=>{x.length!==0&&h(!0)},[x.length]);if(!t||i.length===0)return null;const z=e.venueKind==="명상센터"?"명상센터":"명상지";return o.jsxs(o.Fragment,{children:[o.jsx(fP,{role:"presentation",onClick:S,children:o.jsxs(hP,{role:"dialog","aria-modal":"true","aria-labelledby":"place-programs-modal-title",onClick:E=>E.stopPropagation(),children:[o.jsxs(gP,{children:[o.jsxs(mP,{id:"place-programs-modal-title",children:["프로그램 · 행사 · 후기 ",o.jsxs("span",{style:{opacity:.75},children:["(",z,")"]})]}),o.jsx(xP,{type:"button",onClick:n,"aria-label":"닫기",children:o.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),$&&o.jsxs(o.Fragment,{children:[o.jsx(LP,{children:x.length<=1?o.jsx(q2,{type:"button",$clickable:x.length>0,onClick:R,"aria-label":"사진 크게 보기",children:o.jsx(Z2,{src:x[0]??$.imageUrl,alt:"",draggable:!1})}):o.jsxs(o.Fragment,{children:[o.jsx(q2,{type:"button",$clickable:!0,onClick:R,"aria-label":"사진 크게 보기",children:o.jsx(yP,{ref:y.viewportRef,onTouchStart:y.onTouchStart,onTouchMove:y.onTouchMove,onTouchEnd:y.onTouchEnd,onTouchCancel:y.onTouchCancel,children:y.usePx?o.jsx(vP,{ref:y.trackRef,onTransitionEnd:y.onTransitionEnd,style:{width:y.trackWidthPx,transform:`translate3d(${y.translatePx}px, 0, 0)`,transition:y.dragPx!==0||y.transOff?"none":"transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)"},children:y.loopUrls.map((E,A)=>o.jsx(bP,{style:{width:y.vpWidth,flexShrink:0},children:o.jsx(wP,{src:E,alt:"",draggable:!1})},`hero-loop-${A}`))}):o.jsx(Z2,{src:x[0],alt:"",draggable:!1})})}),o.jsx(IP,{children:x.map((E,A)=>o.jsx(v5,{type:"button","aria-label":`${A+1}번째 사진으로 이동`,"aria-current":A===y.activeDot?"true":void 0,$active:A===y.activeDot,onClick:()=>y.setLoopIndex(A+1)},A))})]})}),k?o.jsxs(RP,{children:[o.jsxs(e4,{type:"button",$active:a==="ongoing",onClick:()=>{var A;c("ongoing");const E=(A=s[0])==null?void 0:A.id;p(E??null)},disabled:s.length===0,style:{opacity:s.length===0?.45:1},children:["진행 중 ",s.length>0?`(${s.length})`:""]}),o.jsxs(e4,{type:"button",$active:a==="past",onClick:()=>{var A;c("past");const E=(A=l[0])==null?void 0:A.id;p(E??null)},disabled:l.length===0,style:{opacity:l.length===0?.45:1},children:["지난 프로그램 ",l.length>0?`(${l.length})`:""]})]}):null,o.jsxs(zP,{children:[v.length===0&&o.jsx(zu,{children:"이 구간에 등록된 프로그램이 없어요."}),v.map(E=>o.jsx(MP,{type:"button",$active:E.id===d,onClick:()=>p(E.id),"aria-label":E.title,children:o.jsx("img",{src:E.imageUrl,alt:"",draggable:!1})},E.id))]}),o.jsxs(AP,{children:[o.jsxs(_P,{children:[$.kind==="event"?"행사 · ":$.kind==="program"?"프로그램 · ":"",$.title]}),o.jsx(NP,{children:o.jsx(qi,{children:$.bodyFromVenue})}),$.reviews.length>0&&o.jsxs(DP,{children:[o.jsx(t4,{children:"프로그램 후기"}),$.reviews.slice(0,2).map((E,A)=>o.jsxs(n4,{children:[o.jsxs(r4,{children:[E.author,E.rating!=null?` · ${Ra(E.rating)}`:""]}),o.jsx(i4,{children:E.body})]},`${E.author}-${A}`)),$.reviews.length>2&&o.jsxs(zu,{style:{marginBottom:10,fontSize:"0.88rem"},children:["외 ",$.reviews.length-2,"건의 후기가 더 있어요."]}),o.jsxs(o4,{type:"button",onClick:()=>b({heading:"프로그램 후기",reviews:$.reviews}),children:["전체 후기 보기 · ",$.reviews.length,"건"]})]}),I&&o.jsxs(OP,{children:[o.jsx(BP,{children:j?"강사 소개 · 강사 후기":"강사 소개"}),e.instructors.map(E=>o.jsxs(FP,{children:[o.jsxs(HP,{children:[o.jsx(UP,{src:E.photoUrl,alt:""}),o.jsxs("div",{children:[o.jsx(VP,{children:E.name}),o.jsx(WP,{children:E.intro})]})]}),E.reviews.length>0&&o.jsxs(o.Fragment,{children:[o.jsx(t4,{style:{fontSize:"0.95rem",marginBottom:8},children:"강사 후기"}),E.reviews.slice(0,2).map((A,N)=>o.jsxs(n4,{children:[o.jsxs(r4,{children:[A.author,A.rating!=null?` · ${Ra(A.rating)}`:""]}),o.jsx(i4,{children:A.body})]},`${E.id}-ir-${N}`)),E.reviews.length>2&&o.jsxs(zu,{style:{marginBottom:10,fontSize:"0.88rem"},children:["외 ",E.reviews.length-2,"건의 후기가 더 있어요."]}),o.jsxs(o4,{type:"button",onClick:()=>b({heading:`강사 후기 · ${E.name}`,reviews:E.reviews}),children:["강사 후기 전체 보기 · ",E.reviews.length,"건"]})]})]},E.id))]})]})]})]})}),o.jsx(L5,{open:g!=null,onClose:()=>b(null),heading:g==null?void 0:g.heading,reviews:(g==null?void 0:g.reviews)??[]}),f&&$&&x.length>0&&o.jsx(b5,{urls:x,initialLoopIndex:y.loopIndex,onClose:()=>h(!1),lockBodyScroll:!1})]})};function x0(e){var i;const t=[],n=new Set,r=s=>{const l=s==null?void 0:s.trim();!l||n.has(l)||(n.add(l),t.push(l))};if((i=e.photos)!=null&&i.length)for(const s of e.photos)r(s);else r(e.thumbnailUrl);for(const s of e.programs??[])if(s.status==="ongoing"){r(s.imageUrl);for(const l of s.imageUrls??[])r(l)}return t}function ZP(e){return x0(e)[0]??e.thumbnailUrl??""}const Mu=u.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0 calc(28px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};
`,Au=u.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  padding-top: calc(16px + env(safe-area-inset-top, 0px));
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.95);
  z-index: 10;
`,_u=u.button`
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
`,Nu=u.h1`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
`,qP=u.button`
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
`,QP=u.div`
  position: relative;
  width: 100%;
  height: 280px;
  background: ${({theme:e})=>e.colors.bg100};
`,XP=u.button`
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
`,JP=u.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  touch-action: pan-y pinch-zoom;
`,eI=u.div`
  display: flex;
  height: 100%;
  will-change: transform;
`,tI=u.div`
  flex-shrink: 0;
  height: 100%;
`,l4=u.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none;
  user-select: none;
`,nI=u.div`
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
`,rI=u.button`
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
`,iI=u.div`
  padding: 24px 20px;
`,oI=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
`,sI=u.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  color: ${({theme:e})=>e.colors.text900};
  flex: 1;
  min-width: 0;
`,lI=u.div`
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
`,aI=u.div`
  font-size: 1.05rem;
  line-height: 1.6;
  color: ${({theme:e})=>e.colors.text700};
  margin: 0 0 24px;
`,cI=u.section`
  margin: 0 0 28px;
`,uI=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 12px;
`,dI=u.h3`
  margin: 0;
  font-size: 1.15rem;
  font-weight: 700;
`,pI=u.div`
  min-width: 0;
`,fI=u.p`
  margin: 6px 0 0;
  font-size: 0.88rem;
  font-weight: 500;
  color: ${({theme:e})=>e.colors.text700};
`,hI=u.button`
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
`,gI=u.span`
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary100};
  color: ${({theme:e})=>e.colors.primary700};
`,mI=u.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 4px 0 12px;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    height: 4px;
  }
`,xI=u.button`
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
`,LI=u.span`
  display: block;
  padding: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  text-align: left;
  line-height: 1.35;
  color: ${({theme:e})=>e.colors.text900};
  background: ${({theme:e})=>e.colors.white};
`,yI=u.div``,a4=u.div`
  border-bottom: 1px solid ${({theme:e})=>e.colors.border200};

  &:last-child {
    border-bottom: none;
  }
`,c4=u.button`
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
`,u4=u.div`
  display: grid;
  grid-template-rows: ${({$open:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 0.3s ease;
  overflow: hidden;
`,d4=u.div`
  overflow: hidden;
`,p4=u.div`
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
`,vI=u.section`
  margin-top: 28px;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 16px;
    font-weight: 600;
  }
`,bI=u.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`,wI=u.div`
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
`,kI=u.section`
  margin-top: 32px;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 12px;
  }
`,jI=u.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  flex-wrap: wrap;
`,SI=u.button`
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
`,$I=u.span`
  flex: 1;
  min-width: 0;
`,CI=u.a`
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
`,EI=u.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  pointer-events: none;
`,PI=u.div`
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
`,II=u.div`
  width: 100%;
  min-height: 240px;
  height: 240px;
  border-radius: ${({theme:e})=>e.radii.lg};
  background: ${({theme:e})=>e.colors.bg100};
  overflow: hidden;
  position: relative;
`,f4=u.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  text-align: center;
  background: linear-gradient(180deg, ${({theme:e})=>e.colors.primary50} 0%, ${({theme:e})=>e.colors.warmCream} 100%);
`,TI=u.div`
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
`,h4=u.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.primary400};
  margin: 0 0 24px;
  line-height: 1.6;
`,RI=u.button`
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
`,zI={wifi:"Wi-Fi",parking:"Parking",tea:"Tea"},MI=()=>{var Y,Q;const e=ft(),{placeId:t}=As(),[n,r]=m.useState(),[i,s]=m.useState(!0),[l,a]=m.useState(null);m.useEffect(()=>{if(!t){r(void 0),s(!1),a(null);return}let _=!1;return s(!0),a(null),l3(t).then(D=>{_||(D?(r(D),a(null)):(r(void 0),a("not_found")),s(!1))}).catch(()=>{_||(r(void 0),a("network"),s(!1))}),()=>{_=!0}},[t]),n&&Wn(n.regionId);const c=m.useRef(null),d=(n==null?void 0:n.facilities)??[],p=(Y=n==null?void 0:n.detailSections)==null?void 0:Y.find(_=>_.title.toLowerCase().includes("유의사항")),[f,h]=m.useState(null),[g,b]=m.useState(!1),[v,$]=m.useState(!1),[x,L]=m.useState(),[y,S]=m.useState(null),I=m.useMemo(()=>n?x0(n):[],[n]),k=!!n&&I.length>1,j=m0(I,k),R=()=>{n&&navigator.clipboard.writeText(n.address).then(()=>{b(!0),setTimeout(()=>b(!1),2e3)})};if(m.useEffect(()=>{if(!n)return;const _="233s0l2jzo",D=()=>{var q,te;const H=document.getElementById("naver-map");if(!H||!((te=(q=window.naver)==null?void 0:q.maps)!=null&&te.Service))return!1;const M=window.naver,G=new M.maps.LatLng(37.5665,126.978),U=new M.maps.Map(H,{center:G,zoom:17,scrollWheel:!0,mapTypeControl:!0}),ne=(le,xe)=>{const $e=new M.maps.LatLng(le,xe);U.setCenter($e),new M.maps.Marker({position:$e,map:U})},de=(le,xe)=>Number.isFinite(le)&&Number.isFinite(xe);return de(n.lat??NaN,n.lng??NaN)?(ne(n.lat,n.lng),!0):(M.maps.Service.geocode({query:n.address},(le,xe)=>{var Pe,Ie,wt,sn;if(le==="ERROR"){console.warn(`[지도] 주소 변환 실패 - "${n.name}" (${n.address}): status=${le}`),ne(37.5665,126.978);return}const $e=xe,Me=We=>typeof We=="number"?We:parseFloat(String(We??""));let De=null,Ee=null;const Ct=((Pe=$e==null?void 0:$e.result)==null?void 0:Pe.items)??[],re=Ct.find(We=>We.isRoadAddress)??Ct[0];if(re!=null&&re.point&&(De=Me(re.point.y),Ee=Me(re.point.x)),(De==null||Ee==null||!de(De,Ee))&&Ct.length>0){const We=Ct[0];We!=null&&We.point&&(De=Me(We.point.y),Ee=Me(We.point.x))}if(De==null||Ee==null||!de(De,Ee)){const We=((wt=(Ie=$e==null?void 0:$e.v2)==null?void 0:Ie.addresses)==null?void 0:wt[0])??((sn=$e==null?void 0:$e.addresses)==null?void 0:sn[0]);We&&(De=Me(We.y),Ee=Me(We.x))}De!=null&&Ee!=null&&de(De,Ee)?ne(De,Ee):ne(37.5665,126.978)}),!0)},C=()=>{var H;return(H=window.naver)!=null&&H.maps&&window.naver.maps.Service?(D(),!0):!1};if(C())return;if(document.querySelector('script[src*="oapi.map.naver.com"]')){const H=setInterval(()=>{C()&&clearInterval(H)},100),M=setTimeout(()=>clearInterval(H),1e4);return()=>{clearInterval(H),clearTimeout(M)}}const J="onNaverMapsReady";window[J]=()=>{if(C())return;const H=setInterval(()=>{C()&&clearInterval(H)},100)};const w=document.createElement("script");return w.type="text/javascript",w.src=`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${_}&submodules=geocoder&callback=${J}`,w.async=!0,document.head.appendChild(w),()=>{delete window[J]}},[n]),m.useEffect(()=>{n&&j.syncToLoopIndex(1)},[n==null?void 0:n.id,j.syncToLoopIndex]),i)return o.jsxs(Mu,{children:[o.jsxs(Au,{children:[o.jsx(_u,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(Nu,{children:"상세 페이지"})]}),o.jsx(f4,{children:o.jsx(h4,{children:"불러오는 중…"})})]});if(!n)return o.jsxs(Mu,{children:[o.jsxs(Au,{children:[o.jsx(_u,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(Nu,{children:"상세 페이지"})]}),o.jsxs(f4,{children:[o.jsx(TI,{children:"404"}),o.jsxs(h4,{children:[l==="not_found"?"해당 명상센터를 찾지 못했어요.":"장소 정보를 불러올 수 없어요.",o.jsx("br",{}),"메인에서 다시 찾아 주세요."]}),o.jsxs(RI,{type:"button",onClick:()=>e("/meditation"),children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),o.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),"메인으로 돌아가기"]})]})]});const z=n.programs??[],T=z.filter(_=>_.status==="ongoing"),P=z.filter(_=>_.status==="past"),E=z.length>0,A=n.venueKind==="명상센터"?"명상센터":"명상지",N=[];T.length>0&&N.push(`진행 중 ${T.length}`),P.length>0&&N.push(`지난 ${P.length}`);const F=N.join(" · ");return o.jsxs(Mu,{children:[g&&o.jsx(EI,{children:o.jsx(PI,{children:"주소를 복사했습니다"})}),o.jsxs(Au,{children:[o.jsx(_u,{type:"button",onClick:()=>e(-1),"aria-label":"뒤로 가기",children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})})}),o.jsx(Nu,{children:"상세 페이지"})]}),I.length<=1?o.jsx(qP,{type:"button",onClick:()=>S({urls:I.length===1?I:[n.thumbnailUrl],initialLoopIndex:1}),"aria-label":`${n.name} 대표 사진 크게 보기`,children:o.jsx("img",{src:I[0]??n.thumbnailUrl,alt:`${n.name} 대표 이미지`})}):o.jsxs(QP,{children:[o.jsx(XP,{type:"button",onClick:()=>S({urls:I,initialLoopIndex:j.loopIndex}),"aria-label":`${n.name} 사진 크게 보기`,children:o.jsx(JP,{ref:j.viewportRef,onTouchStart:j.onTouchStart,onTouchMove:j.onTouchMove,onTouchEnd:j.onTouchEnd,onTouchCancel:j.onTouchCancel,children:j.usePx?o.jsx(eI,{ref:j.trackRef,onTransitionEnd:j.onTransitionEnd,style:{width:j.trackWidthPx,transform:`translate3d(${j.translatePx}px, 0, 0)`,transition:j.dragPx!==0||j.transOff?"none":"transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)"},children:j.loopUrls.map((_,D)=>o.jsx(tI,{style:{width:j.vpWidth,flexShrink:0},children:o.jsx(l4,{src:_,alt:"",draggable:!1})},`detail-hero-${D}`))}):o.jsx(l4,{src:I[0],alt:"",draggable:!1})})}),o.jsx(nI,{children:I.map((_,D)=>o.jsx(rI,{type:"button","aria-label":`${D+1}번째 사진으로 이동`,"aria-current":D===j.activeDot?"true":void 0,$active:D===j.activeDot,onClick:()=>j.setLoopIndex(D+1)},D))})]}),o.jsxs(iI,{children:[o.jsxs(oI,{children:[o.jsx(sI,{children:n.name}),o.jsx(lc,{placeId:n.id})]}),o.jsxs(lI,{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),n.address]}),o.jsx(aI,{children:o.jsx(so,{markdown:n.shortDescription})}),E&&o.jsxs(cI,{children:[o.jsxs(uI,{children:[o.jsxs(pI,{children:[o.jsx(dI,{children:"프로그램 · 후기"}),F?o.jsx(fI,{children:F}):null]}),o.jsx(gI,{children:A})]}),T.length>0?o.jsx(mI,{"aria-label":"진행 중인 프로그램 사진",children:T.map(_=>o.jsxs(xI,{type:"button",onClick:()=>{L(_.id),$(!0)},children:[o.jsx("img",{src:_.imageUrl,alt:"",draggable:!1}),o.jsx(LI,{children:_.title})]},_.id))}):o.jsxs(hI,{type:"button",onClick:()=>{L(void 0),$(!0)},children:["지난 프로그램·후기 보기 (",P.length,")"]})]}),o.jsxs(yI,{children:[o.jsxs(a4,{children:[o.jsxs(c4,{type:"button",$open:f==="fee",onClick:()=>h(f==="fee"?null:"fee"),children:[o.jsx("span",{children:"입장료·이용 요금"}),o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M9 18l6-6-6-6"})})]}),o.jsx(u4,{$open:f==="fee",children:o.jsx(d4,{children:o.jsx(p4,{children:(Q=n.admissionFee)!=null&&Q.trim()?o.jsx(qi,{children:n.admissionFee}):"현장·예약 시 안내"})})})]}),o.jsxs(a4,{children:[o.jsxs(c4,{type:"button",$open:f==="notice",onClick:()=>h(f==="notice"?null:"notice"),children:[o.jsx("span",{children:"유의사항"}),o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M9 18l6-6-6-6"})})]}),o.jsx(u4,{$open:f==="notice",children:o.jsx(d4,{children:o.jsx(p4,{children:p!=null&&p.body?o.jsx(qi,{children:p.body}):"등록된 유의사항이 없습니다."})})})]})]}),d.length>0&&o.jsxs(vI,{children:[o.jsx("h3",{children:"시설 정보"}),o.jsx(bI,{children:d.map(_=>o.jsxs(wI,{children:[_==="wifi"&&o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M5 12.55a11 11 0 0 1 14.08 0"}),o.jsx("path",{d:"M1.42 9a16 16 0 0 1 21.16 0"}),o.jsx("path",{d:"M8.53 16.11a6 6 0 0 1 6.95 0"}),o.jsx("line",{x1:"12",y1:"20",x2:"12.01",y2:"20"})]}),_==="parking"&&o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),o.jsx("path",{d:"M3 9h18M9 21V9"})]}),_==="tea"&&o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M18 8h1a4 4 0 0 1 0 8h-1"}),o.jsx("path",{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"}),o.jsx("line",{x1:"6",y1:"1",x2:"6",y2:"4"}),o.jsx("line",{x1:"10",y1:"1",x2:"10",y2:"4"}),o.jsx("line",{x1:"14",y1:"1",x2:"14",y2:"4"})]}),!["wifi","parking","tea"].includes(_)&&o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("circle",{cx:"12",cy:"12",r:"10"}),o.jsx("path",{d:"M12 8v4M12 16h.01"})]}),o.jsx("span",{children:zI[_]??_})]},_))})]}),o.jsxs(kI,{children:[o.jsx("h3",{children:"위치"}),o.jsxs(jI,{children:[o.jsxs(SI,{type:"button",onClick:R,title:"클릭하여 주소 복사",children:[o.jsx($I,{children:n.address}),o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),o.jsx("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"})]})]}),o.jsxs(CI,{href:`https://map.naver.com/v5/search/${encodeURIComponent(n.address)}`,target:"_blank",rel:"noreferrer noopener",children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"안내"]})]}),o.jsx(II,{id:"naver-map",ref:c})]})]}),E&&o.jsx(GP,{place:n,open:v,onClose:()=>$(!1),initialProgramId:x}),y&&o.jsx(b5,{urls:y.urls,initialLoopIndex:y.initialLoopIndex,onClose:()=>S(null)})]})},AI=u.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 24px 20px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};

  @media (max-width: 960px) {
    padding: 20px 14px calc(48px + env(safe-area-inset-bottom, 0px));
  }
`,_I=u.h1`
  font-size: 2.4rem;
  margin-bottom: 12px;
`,NI=u.p`
  font-size: 1.2rem;
  color: ${({theme:e})=>e.colors.text700};
`,DI=u.form`
  margin: 24px 0;
  border: 1px solid ${({theme:e})=>e.colors.primary300};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 16px;
  display: grid;
  gap: 8px;
`,OI=u.label`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text700};
`,BI=u.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
`,FI=u.input`
  border: 1px solid ${({theme:e})=>e.colors.border200};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: 10px 12px;
  font-size: 1.1rem;
`,HI=u.button`
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
`,UI=u.div`
  display: grid;
  gap: 12px;
`,VI=u.button`
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
`,WI=u.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: center;
`,KI=u.span`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.primary700};
  font-weight: 600;
`,YI=u.span`
  font-size: 1.2rem;
  font-weight: 600;
`,GI=u.span`
  font-size: 1rem;
  color: ${({theme:e})=>e.colors.text700};
`,ZI=u.div`
  border-top: 1px solid ${({theme:e})=>e.colors.border200};
  padding-top: 12px;
  display: grid;
  gap: 8px;
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.6;
`,qI=u.ul`
  padding-left: 18px;
  display: grid;
  gap: 6px;
`,QI=u.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 8px;
`,XI=u.button`
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
`,JI=u.div`
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
`,g4=u.p`
  margin: 24px 0;
  color: ${({theme:e})=>e.colors.text700};
  text-align: center;
`,eT=u.div`
  margin-top: 20px;
  display: flex;
  gap: 8px;
  justify-content: center;
`,tT=u.button`
  border: 1px solid ${({theme:e})=>e.colors.border200};
  background: ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.white};
  color: ${({$active:e})=>e?"#fff":"inherit"};
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
`,nT=()=>{const[e,t]=m.useState([]),[n,r]=m.useState(""),[i,s]=m.useState(null),[l,a]=m.useState(1),[c,d]=m.useState(null),[p,f]=m.useState("ko-KR"),[h,g]=m.useState(!1),[b,v]=m.useState(!0),$=6;m.useEffect(()=>{const z=Ce();if(!z){t([]),v(!1);return}v(!0),fetch(`${z}/notices`).then(T=>T.ok?T.json():Promise.reject()).then(T=>{if(!Array.isArray(T)){t([]);return}t(T),s(null)}).catch(()=>{t([])}).finally(()=>v(!1))},[]);const x=m.useCallback((z,T)=>{if(!("speechSynthesis"in window)){alert("이 브라우저는 음성 읽기를 지원하지 않습니다.");return}window.speechSynthesis.cancel();const P=window.speechSynthesis.getVoices(),E=p.split("-")[0],A=P.filter(_=>_.lang.startsWith(E)),N=A.filter(_=>_.localService),F=A.filter(_=>!_.localService),Y=h&&F.length?F[0]:N[0]??A[0],Q=new SpeechSynthesisUtterance(z);Q.lang=p,Q.rate=.95,Y&&(Q.voice=Y),Q.onstart=()=>d(T),Q.onend=()=>d(null),Q.onerror=_=>{d(null),console.warn("TTS error:",_)},window.speechSynthesis.speak(Q)},[p,h]);m.useEffect(()=>{if(!("speechSynthesis"in window))return;const z=()=>window.speechSynthesis.getVoices();return window.speechSynthesis.onvoiceschanged=z,z(),()=>{window.speechSynthesis.onvoiceschanged=null}},[]);const L=m.useMemo(()=>{const z=n.trim().toLowerCase();return z?e.filter(T=>{const P=T.details?[...T.details.paragraphs,...T.details.bullets??[]]:[];return[T.title,T.summary,...P].join(" ").toLowerCase().includes(z)}):e},[n,e]),y=Math.max(1,Math.ceil(L.length/$)),S=Math.min(l,y),I=L.slice((S-1)*$,S*$),k=m.useCallback(async z=>{if(z.details!==void 0||z.detailLoading)return;const T=Ce();if(T){t(P=>P.map(E=>E.id===z.id?{...E,detailLoading:!0}:E));try{const P=await fetch(`${T}/notices/${encodeURIComponent(z.id)}`);if(!P.ok)throw new Error("detail");const E=await P.json();t(A=>A.map(N=>N.id===z.id?{...N,details:E.details,detailLoading:!1}:N))}catch{t(P=>P.map(E=>E.id===z.id?{...E,detailLoading:!1}:E))}}},[]),j=m.useCallback(z=>{if(i===z.id){s(null);return}s(z.id),k(z)},[i,k]),R=z=>{z.preventDefault(),a(1)};return o.jsxs(AI,{children:[o.jsx(_I,{children:"공지사항"}),o.jsx(NI,{children:"전국 힐링 명상 웰니스 지도에서 전하는 소식을 확인하세요."}),b&&o.jsx(g4,{children:"불러오는 중…"}),!b&&e.length===0&&o.jsx(g4,{children:"등록된 공지가 없습니다."}),!b&&e.length>0&&o.jsxs(o.Fragment,{children:[o.jsxs(DI,{onSubmit:R,children:[o.jsx(OI,{htmlFor:"notice-search",children:"공지사항 검색"}),o.jsxs(BI,{children:[o.jsx(FI,{id:"notice-search",type:"text",placeholder:"검색어를 입력해주세요.",value:n,onChange:z=>r(z.target.value)}),o.jsx(HI,{type:"submit",children:"검색"})]})]}),o.jsx(UI,{children:I.map(z=>{const T=i===z.id;return o.jsxs(VI,{type:"button",$active:T,onClick:()=>j(z),children:[o.jsxs(WI,{children:[o.jsx(KI,{children:z.category}),o.jsx(YI,{children:z.title}),o.jsx(GI,{children:z.date})]}),T&&o.jsxs(ZI,{children:[o.jsxs(QI,{children:[o.jsx(XI,{type:"button",onClick:P=>{if(P.stopPropagation(),c===z.id){window.speechSynthesis.cancel();return}const E=z.details,A=[z.title,z.summary,...(E==null?void 0:E.paragraphs)??[],...(E==null?void 0:E.bullets)??[],E==null?void 0:E.footer].filter(Boolean).join(". ");x(A,z.id)},children:c===z.id?o.jsx(o.Fragment,{children:"멈추기"}):o.jsxs(o.Fragment,{children:[o.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),o.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"})]}),"음성으로 들으기"]})}),o.jsxs(JI,{children:[o.jsx("button",{type:"button",className:p==="ko-KR"?"active":"",onClick:P=>{P.stopPropagation(),f("ko-KR")},children:"한국어"}),o.jsx("button",{type:"button",className:p==="en-US"?"active":"",onClick:P=>{P.stopPropagation(),f("en-US")},children:"English"}),o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,fontSize:"0.85rem",cursor:"pointer"},children:[o.jsx("input",{type:"checkbox",checked:h,onChange:P=>{P.stopPropagation(),g(P.target.checked)}}),"고품질(온라인)"]})]})]}),o.jsx("p",{children:z.summary}),z.detailLoading&&o.jsx("p",{children:"본문을 불러오는 중…"}),!z.detailLoading&&z.details&&o.jsxs(o.Fragment,{children:[z.details.paragraphs.map(P=>o.jsx("p",{children:P},P)),z.details.bullets&&z.details.bullets.length>0&&o.jsx(qI,{children:z.details.bullets.map(P=>o.jsx("li",{children:P},P))}),z.details.footer&&o.jsx("p",{children:z.details.footer})]})]})]},z.id)})}),o.jsx(eT,{children:Array.from({length:y},(z,T)=>o.jsx(tT,{type:"button",$active:S===T+1,onClick:()=>a(T+1),children:T+1},`page-${T+1}`))})]})]})},rT=u.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 24px 20px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};

  @media (max-width: 960px) {
    padding: 20px 14px calc(48px + env(safe-area-inset-bottom, 0px));
  }
`,iT=u.h1`
  font-size: 2.4rem;
  margin-bottom: 12px;
`,oT=u.p`
  font-size: 1.2rem;
  color: ${({theme:e})=>e.colors.text700};
`,sT=u.div`
  margin-top: 24px;
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 20px;
  box-shadow: ${({theme:e})=>e.shadow.soft};
`,lT=u.form`
  display: grid;
  gap: 16px;
  margin-top: 20px;
`,Du=u.label`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text700};
`,m4=u.input`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${({theme:e})=>e.colors.border200};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: 10px 12px;
  font-size: 1rem;
`,aT=u.textarea`
  width: 100%;
  min-height: 160px;
  box-sizing: border-box;
  border: 1px solid ${({theme:e})=>e.colors.border200};
  border-radius: ${({theme:e})=>e.radii.md};
  padding: 10px 12px;
  font-size: 1rem;
  resize: vertical;
`,cT=u.button`
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
`,x4=u.p`
  margin: 0;
  font-size: 0.95rem;
  color: ${({theme:e})=>e.colors.text700};
`,uT=u.p`
  margin: 12px 0 0;
  font-size: 0.95rem;
  color: ${({theme:e,$variant:t})=>t==="error"?"#b91c1c":e.colors.primary700};
`,dT=()=>{const e=ut(h=>h.email),[t,n]=m.useState(e??""),[r,i]=m.useState(""),[s,l]=m.useState(""),[a,c]=m.useState(!1),[d,p]=m.useState(null),f=async h=>{if(h.preventDefault(),p(null),!Ce()){p({text:"지금은 전송할 수 없어요. 잠시 후 다시 시도해 주세요.",ok:!1});return}if(!t.trim()||!r.trim()||!s.trim()){p({text:"이메일, 제목, 내용을 모두 입력해 주세요.",ok:!1});return}c(!0);try{if(!(await me("/inquiries",{method:"POST",body:JSON.stringify({email:t.trim(),subject:r.trim(),body:s.trim()})})).ok){p({text:"전송에 실패했습니다.",ok:!1});return}i(""),l(""),p({text:"문의가 접수되었습니다. 빠르게 답변드릴게요.",ok:!0})}catch{p({text:"전송에 실패했습니다. 잠시 후 다시 시도해 주세요.",ok:!1})}finally{c(!1)}};return o.jsxs(rT,{children:[o.jsx(iT,{children:"1:1 문의"}),o.jsx(oT,{children:"궁금한 점을 남겨주시면 빠르게 답변드릴게요."}),o.jsxs(sT,{children:[o.jsx(x4,{children:"이메일: support@healingmeditation.kr"}),o.jsx(x4,{children:"운영시간: 평일 09:00 - 18:00"}),o.jsxs(lT,{onSubmit:h=>void f(h),children:[o.jsxs("div",{children:[o.jsx(Du,{htmlFor:"inquiry-email",children:"회신 받을 이메일"}),o.jsx(m4,{id:"inquiry-email",type:"email",value:t,onChange:h=>n(h.target.value),autoComplete:"email",placeholder:"you@example.com"})]}),o.jsxs("div",{children:[o.jsx(Du,{htmlFor:"inquiry-subject",children:"제목"}),o.jsx(m4,{id:"inquiry-subject",type:"text",value:r,onChange:h=>i(h.target.value),placeholder:"문의 제목"})]}),o.jsxs("div",{children:[o.jsx(Du,{htmlFor:"inquiry-body",children:"내용"}),o.jsx(aT,{id:"inquiry-body",value:s,onChange:h=>l(h.target.value),placeholder:"문의 내용을 자유롭게 적어 주세요."})]}),o.jsx(cT,{type:"submit",disabled:a,children:a?"전송 중…":"문의 보내기"}),d&&o.jsx(uT,{$variant:d.ok?"ok":"error",role:"status",children:d.text})]})]})]})},L4=[{label:"전체",value:"all"},{label:"템플스테이",value:"템플스테이"},{label:"명상센터",value:"명상센터"},{label:"프리랜서",value:"프리랜서(공간없음)"},{label:"힐링명상",value:"힐링명상"},{label:"기타",value:"기타"}],pT=u.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 20px calc(64px + env(safe-area-inset-bottom, 0px));
  color: ${({theme:e})=>e.colors.text900};

  @media (max-width: 960px) {
    padding: 20px 14px calc(48px + env(safe-area-inset-bottom, 0px));
  }
`,fT=u.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 24px;
  color: ${({theme:e})=>e.colors.text900};
`,hT=u.div`
  display: flex;
  gap: 8px;
  margin: -8px 0 22px;
  padding: 4px 0;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`,gT=u.button`
  flex: 0 0 auto;
  padding: 9px 12px;
  border: 1px solid
    ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.primary200};
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.white};
  color: ${({theme:e,$active:t})=>t?e.colors.white:e.colors.text700};
  ${W.caption};
  cursor: pointer;
`,mT=u.span`
  margin-left: 4px;
  opacity: 0.72;
`,xT=u.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,LT=u.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text700};
  padding: 48px 24px;
  text-align: center;
  margin: 0;
`,yT=()=>{const[e,t]=m.useState("all"),{favorites:n}=mr(),r=en(a=>a.places),i=m.useMemo(()=>n.map(a=>r.find(c=>c.id===a)).filter(a=>a!=null),[n,r]),s=m.useMemo(()=>$a(i,{category:e,keyword:"",tags:[]}),[e,i]),l=m.useMemo(()=>new Map(L4.map(({value:a})=>[a,a==="all"?i.length:$a(i,{category:a,keyword:"",tags:[]}).length])),[i]);return o.jsxs(pT,{children:[o.jsx(fT,{children:"찜 목록"}),o.jsx(hT,{"aria-label":"찜 목록 카테고리",children:L4.map(a=>o.jsxs(gT,{type:"button",$active:e===a.value,onClick:()=>t(a.value),children:[a.label,o.jsx(mT,{children:l.get(a.value)??0})]},a.value))}),s.length===0?o.jsx(LT,{children:i.length===0?"찜한 명상아이템이 없어요. 리스트에서 하트를 눌러 찜해보세요.":"이 카테고리에 찜한 장소가 아직 없어요."}):o.jsx(xT,{children:s.map(a=>o.jsx("li",{children:o.jsx(es,{place:a})},a.id))})]})},vT="/assets/left-arrow-D7869Zjw.png";async function L0(e){var t;if(!e.ok){let n="요청을 처리하지 못했어요.";try{const r=await e.json();(t=r.message)!=null&&t.trim()&&(n=r.message)}catch{}throw new Error(n)}return await e.json()}async function bT(e){return L0(await me("/me/profile",{method:"PUT",body:JSON.stringify(e)}))}async function wT(){return L0(await me("/me"))}async function kT(){const e=await me("/me/expert-profile");if(e.status===204)return null;if(!e.ok)throw new Error("전문가 정보를 불러오지 못했어요.");const t=await e.json();return t?{name:String(t.name??""),intro:String(t.intro??""),degrees:Array.isArray(t.degrees)?t.degrees.map(String):[],certificates:Array.isArray(t.certificates)?t.certificates.map(String):[],careers:Array.isArray(t.careers)?t.careers.map(String):[],classTypes:Array.isArray(t.classTypes)?t.classTypes.map(String):[],regionIds:Array.isArray(t.regionIds)?t.regionIds.map(String):[],hasCenter:!!t.hasCenter,centerName:String(t.centerSummary??""),centerAddress:String(t.centerAddress??""),hidden:!!t.hidden}:null}async function jT(e){return L0(await me("/me/expert-profile",{method:"PUT",body:JSON.stringify({...e,businessOpeningDate:e.businessOpeningDate||null})}))}const ST=["힐링명상","템플스테이","행사","마음챙김","숲 명상","아트명상","호흡","숙박 프로그램"],$T=u.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  display: grid;
  place-items: end center;
  background: rgba(29, 16, 38, 0.46);
`,CT=u.section`
  width: min(100%, 620px);
  max-height: 88dvh;
  overflow-y: auto;
  padding: 20px 20px calc(24px + env(safe-area-inset-bottom, 0px));
  border-radius: 26px 26px 0 0;
  background: ${({theme:e})=>e.colors.white};
`,ET=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
`,PT=u.h2`
  margin: 0;
  ${W.title};
`,IT=u.button`
  border: 0;
  background: transparent;
  ${W.body1};
  cursor: pointer;
`,Ou=u.div`
  display: block;
  margin-top: 20px;
`,Bu=u.span`
  display: block;
  margin-bottom: 8px;
  ${W.body2};
  font-weight: 700;
`,TT=u.input`
  width: 100%;
  box-sizing: border-box;
  padding: 13px 14px;
  border: 1px solid ${({theme:e})=>e.colors.primary200};
  border-radius: 12px;
  ${W.body2};
`,y4=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,RT=u.div`
  padding: 12px;
  border-radius: 18px;
  background: ${({theme:e})=>e.colors.primary50};
`,zT=u.p`
  margin: 10px 0;
  color: ${({theme:e})=>e.colors.text700};
  ${W.caption};
`,v4=u.button`
  padding: 8px 11px;
  border: 1px solid
    ${({theme:e,$selected:t})=>t?e.colors.primary600:e.colors.primary200};
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e,$selected:t})=>t?e.colors.primary600:e.colors.white};
  color: ${({theme:e,$selected:t})=>t?e.colors.white:e.colors.text700};
  ${W.caption};
  cursor: pointer;
`,MT=u.button`
  width: 100%;
  margin-top: 28px;
  padding: 15px;
  border: 0;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary600};
  color: white;
  ${W.buttonMd};
  cursor: pointer;
`,AT=u.p`
  margin: 12px 0 0;
  color: #c5221f;
  ${W.caption};
`;function _T({open:e,profile:t,onClose:n,onSaved:r}){const[i,s]=m.useState(""),[l,a]=m.useState([]),[c,d]=m.useState([]),[p,f]=m.useState(!1),[h,g]=m.useState(null);if(m.useEffect(()=>{e&&(s(t.displayName||t.username.split("@")[0]||""),a(t.regionIds??[]),d(t.interests??[]),g(null))},[e,t]),!e)return null;const b=(v,$,x)=>{x($.includes(v)?$.filter(L=>L!==v):[...$,v])};return o.jsx($T,{onMouseDown:n,children:o.jsxs(CT,{role:"dialog","aria-modal":"true",onMouseDown:v=>v.stopPropagation(),children:[o.jsxs(ET,{children:[o.jsx(PT,{children:"프로필 수정"}),o.jsx(IT,{type:"button",onClick:n,"aria-label":"닫기",children:"×"})]}),o.jsxs(Ou,{children:[o.jsx(Bu,{children:"이름"}),o.jsx(TT,{value:i,maxLength:80,onChange:v=>s(v.target.value),placeholder:"화면에 표시할 이름"})]}),o.jsxs(Ou,{children:[o.jsx(Bu,{children:"주 활동 지역"}),o.jsx(RT,{children:o.jsx(_s,{activeRegionIds:l,maxMapHeight:"min(42dvh, 420px)",onSelectRegion:v=>b(v,l,a)})}),o.jsx(zT,{children:"지도에서 활동 지역을 선택해 주세요. 선택된 지역을 다시 누르면 해제됩니다."}),o.jsx(y4,{children:Gr.filter(v=>l.includes(v.id)).map(v=>o.jsxs(v4,{type:"button",$selected:!0,onClick:()=>b(v.id,l,a),children:[v.name," ×"]},v.id))})]}),o.jsxs(Ou,{children:[o.jsx(Bu,{children:"관심사"}),o.jsx(y4,{children:ST.map(v=>o.jsx(v4,{type:"button",$selected:c.includes(v),onClick:()=>b(v,c,d),children:v},v))})]}),h&&o.jsx(AT,{children:h}),o.jsx(MT,{type:"button",disabled:p||!i.trim(),onClick:()=>{f(!0),g(null),bT({displayName:i.trim(),regionIds:l,interests:c}).then(v=>{r(v),n()}).catch(v=>g(v instanceof Error?v.message:"저장하지 못했어요.")).finally(()=>f(!1))},children:p?"저장 중…":"저장하기"})]})})}const NT=ke`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,y0=ke`
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,DT=ke`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,OT=ke`
  from {
    opacity: 0;
    transform: scale(0.96) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`,w5=ke`
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,BT=ke`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Fu=u.div`
  margin-top: 0;
  animation: ${BT} 0.42s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,FT=u.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,HT=u.p`
  margin: 0;
  padding: 0 4px;
  text-align: left;
  ${W.caption};
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.45;
`,UT=u.section`
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
`,VT=u.div`
  align-self: stretch;
  flex-shrink: 0;
  width: 100%;
  height: 4px;
  margin: 0 0 12px;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary100};
  overflow: hidden;
`,WT=u.div`
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
`,KT=u.div`
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
  animation: ${NT} 0.35s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,wo=u.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
`,ko=u.div`
  flex-shrink: 0;
  margin-top: auto;
  padding-top: 12px;
  width: 100%;
`,YT=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
  gap: 12px;
  flex-shrink: 0;
`,GT=u.button`
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
`,ZT=u.img`
  width: 18px;
  height: 18px;
  object-fit: contain;
`,qT=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  flex-shrink: 0;
`,QT=u.img`
  width: 74px;
  height: 74px;
  object-fit: contain;
`,b4=u.p`
  margin: 10px 0 0;
  padding: 0 12px;
  text-align: center;
  ${W.body1};
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text900};
  line-height: 1.45;
  max-width: 320px;
`,XT=u.h1`
  margin: 8px 0 0;
  ${W.title};
  color: ${({theme:e})=>e.colors.primary300};
`,Hu=u.h2`
  margin: 14px 0 0;
  text-align: center;
  ${W.h3};
`,w4=u.p`
  margin: 8px 0 0;
  text-align: center;
  ${W.body2};
  color: ${({theme:e})=>e.colors.text700};
`,JT=ke`
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
`,Uu=u.div`
  position: fixed;
  top: calc(env(safe-area-inset-top, 0px) + 10px);
  left: 50%;
  z-index: 130;
  pointer-events: none;
  animation: ${JT} 2.2s ease both;
`,Vu=u.div`
  padding: 12px 18px;
  border-radius: ${({theme:e})=>e.radii.pill};
  border: 1px solid
    ${({$variant:e})=>e==="error"?"#f0b8b8":"#96d6a3"};
  background: ${({$variant:e})=>e==="error"?"#fce8e6":"#e8f8ec"};
  color: ${({$variant:e})=>e==="error"?"#c5221f":"#1f6a2b"};
  ${W.body2};
`,k4=u.div`
  margin-top: clamp(24px, 6vh, 48px);
  display: flex;
  flex-direction: column;
  gap: 14px;
`,eR=u.p`
  margin: 8px 0 0;
  text-align: center;
  ${W.body2};
  color: ${({theme:e})=>e.colors.text700};
`,Ir=u.p`
  margin: 6px 4px 0;
  ${W.caption};
  color: #d93025;
  animation: ${y0} 0.24s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,tR=u.p`
  margin: 6px 4px 0;
  ${W.caption};
  color: #188038;
  animation: ${y0} 0.24s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,nR=u.p`
  margin: 6px 4px 0;
  ${W.caption};
  color: ${({theme:e})=>e.colors.text700};
`,j4=u.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  animation: ${w5} 0.42s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: ${({$index:e})=>e*.07}s;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,rR=u(eR)`
  margin-top: 0;
  text-align: left;
  padding: 0 2px;
  animation: ${w5} 0.42s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,iR=u.div`
  margin-top: 4px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,oR=u.button`
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
`,sR=u.span`
  ${W.h2};
  font-weight: 300;
  line-height: 1;
  color: ${({theme:e})=>e.colors.text700};
  opacity: 0.55;
  user-select: none;
`,lR=u.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,aR=u.input`
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
`,S4=u(Ir)`
  animation: ${y0} 0.3s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Wu=u.div`
  position: relative;
  width: 100%;
`,Ku=u.button`
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
`,cR=u.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 8px;
  align-items: center;
`,uR=u.button`
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
`,dR=u.div`
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`,pR=u.button`
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
`,fR=u.p`
  margin: 0;
  text-align: center;
  ${W.caption};
  color: ${({theme:e,$error:t})=>t?"#d93025":e.colors.text700};
  max-width: 320px;
  line-height: 1.45;
`,hR=u.div`
  margin-top: 18px;
`,k5=u.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.28);
  display: grid;
  place-items: center;
  z-index: 120;
  animation: ${DT} 0.22s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,gR=u(k5)`
  z-index: 125;
`,j5=u.div`
  width: min(88vw, 320px);
  background: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 22px 18px 16px;
  animation: ${OT} 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,$4=u.p`
  text-align: center;
  ${W.body1};
  color: ${({theme:e})=>e.colors.text900};
`,mR=u.div`
  margin-top: 18px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`,H1=u.button`
  border: 1px solid
    ${({theme:e,$primary:t})=>t?e.colors.primary300:e.colors.primary200};
  background: ${({theme:e,$primary:t})=>t?e.colors.primary300:e.colors.white};
  color: ${({theme:e,$primary:t})=>t?e.colors.white:e.colors.text900};
  border-radius: ${({theme:e})=>e.radii.pill};
  padding: 10px 14px;
  ${W.buttonMd};
  cursor: pointer;
`,xR=u(H1).attrs({type:"button",$primary:!0})`
  width: 100%;
  margin-top: 14px;
`,LR=u.div`
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
`,yR=u.button`
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
`,vR=u(di)`
  flex-shrink: 0;
`,bR=u.button`
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
`,wR=u.span`
  display: block;
  text-align: right;
  width: 100%;
  margin: 0 0 4px;
  ${W.caption};
  color: ${({theme:e})=>e.colors.text700};
`,kR=u.div`
  margin: 36px auto 0;
  display: flex;
  justify-content: center;
`,jR=u.img`
  width: 108px;
  height: 108px;
  object-fit: contain;
`,SR=u.h2`
  margin: 10px 0 0;
  text-align: center;
  ${W.h1};
  color: ${({theme:e})=>e.colors.primary300};
`,$R=u.p`
  margin: 8px 0 0;
  text-align: center;
  ${W.body2};
  color: ${({theme:e})=>e.colors.text700};
`,CR=u.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,is=u.input`
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
`,Yu=u(is)`
  padding: 14px 56px 14px 24px;
  transition:
    border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.22s ease;
`,ER=u.div`
  position: relative;
  width: 100%;
  min-width: 0;
`,PR=u(is)`
  padding: 14px 58px 14px 24px;
`,IR=u.span`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  ${W.caption};
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: ${({theme:e})=>e.colors.text700};
`,TR=u.button`
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
`,RR=u.div`
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
`,zR=u.div`
  display: flex;
  justify-content: center;
  gap: 22px;
`,Gu=u.button`
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
`,Zu=u.a`
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
`,MR=u.div`
  margin: 28px 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 6px;
  text-align: center;
  ${W.body2};
  color: ${({theme:e})=>e.colors.text900};
`,AR=u.button`
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
`,_R=u.div`
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
`,NR=u.div`
  flex: 1 1 auto;
  min-height: min(200px, 28dvh);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,DR=u.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  padding-bottom: 4px;
`,OR=u.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0;
`,BR=u.img`
  width: 72px;
  height: 72px;
  object-fit: contain;
`,FR=u.p`
  margin: 0;
  text-align: center;
  ${W.body2};
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.45;
  max-width: 300px;
`,HR=u.div`
  margin-top: 22px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
`,qu=u.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 52px;
  padding: 10px 0;
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary200};
`,Qu=u.label`
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
`,Xu=u.input`
  width: 20px;
  height: 20px;
  margin: 2px 0 0;
  flex-shrink: 0;
  accent-color: ${({theme:e})=>e.colors.primary300};
  cursor: pointer;
`,Ju=u.span`
  ${W.body2};
  color: ${({theme:e})=>e.colors.text900};
  line-height: 1.4;
`,ed=u.span`
  display: inline-block;
  margin-right: 6px;
  ${W.caption};
  font-weight: 700;
  color: ${({theme:e,$optional:t})=>t?e.colors.text700:e.colors.primary600};
`,td=u.button`
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
`,UR=u.div`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: stretch;
`,VR=u.button`
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
`,WR=u.button`
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
`,KR=u(j5)`
  width: min(92vw, 360px);
  max-height: min(72dvh, 520px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 18px 16px 14px;
`,YR=u.div`
  margin-top: 12px;
  overflow-y: auto;
  flex: 1 1 auto;
  min-height: 0;
  ${W.body2};
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.55;
  white-space: pre-line;
`,GR=u.div`
  width: min(100%, 680px);
  padding: 0 2px 32px;
`,ZR=u.h1`
  margin: 0 0 20px;
  text-align: center;
  ${W.title};
`,qR=u.section`
  position: relative;
  overflow: hidden;
  padding: 26px 22px 22px;
  border: 1px solid rgba(75, 0, 130, 0.08);
  border-radius: 28px;
  background:
    radial-gradient(circle at 100% 0%, rgba(245, 216, 208, 0.9), transparent 38%),
    linear-gradient(145deg, #ffffff 0%, #faf5ff 100%);
  box-shadow: 0 16px 40px rgba(75, 0, 130, 0.09);
`,QR=u.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 18px;
`,XR=u.button`
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
`,JR=u.img`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
  object-fit: cover;
`,ez=u.span`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: linear-gradient(145deg, #d8c5e9, #a88bca);
  color: ${({theme:e})=>e.colors.white};
  font-size: 1.65rem;
  font-weight: 800;
`,tz=u.span`
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
`,nz=u.div`
  min-width: 0;
  flex: 1;
`,rz=u.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`,iz=u.h2`
  margin: 0;
  ${W.title};
`,oz=u.span`
  padding: 5px 9px;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary100};
  color: ${({theme:e})=>e.colors.primary600};
  ${W.caption};
  font-weight: 800;
`,sz=u.p`
  margin: 6px 0 0;
  color: ${({theme:e})=>e.colors.text700};
  ${W.body2};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,lz=u.p`
  margin: 8px 0 0;
  color: ${({theme:e})=>e.colors.primary500};
  ${W.caption};
  font-weight: 700;
`,az=u.button`
  margin-top: 10px;
  padding: 8px 12px;
  border: 1px solid ${({theme:e})=>e.colors.primary200};
  border-radius: ${({theme:e})=>e.radii.pill};
  background: rgba(255, 255, 255, 0.76);
  color: ${({theme:e})=>e.colors.primary600};
  ${W.caption};
  font-weight: 700;
  cursor: pointer;
`,cz=u.input`
  display: none;
`,uz=u.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 24px;
  padding: 17px 8px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(10px);
`,nd=u.div`
  text-align: center;

  & + & {
    border-left: 1px solid rgba(75, 0, 130, 0.1);
  }
`,rd=u.strong`
  display: block;
  color: ${({theme:e})=>e.colors.primary600};
  ${W.body1};
  font-weight: 700;
`,id=u.span`
  display: block;
  margin-top: 4px;
  color: ${({theme:e})=>e.colors.text700};
  ${W.caption};
`,dz=u.button`
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
`,pz=u.span`
  width: 44px;
  height: 44px;
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.16);
  font-size: 1.35rem;
`,fz=u.span`
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
`,od=u.section`
  margin-top: 26px;
`,sd=u.h3`
  margin: 0 4px 11px;
  ${W.body1};
  font-weight: 700;
`,hz=u.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
`,C4=u.button`
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
`,E4=u.span`
  display: block;
  font-size: 1.35rem;
`,P4=u.strong`
  display: block;
  margin-top: 12px;
  ${W.body2};
  font-weight: 700;
`,I4=u.span`
  display: block;
  margin-top: 4px;
  color: ${({theme:e})=>e.colors.text700};
  ${W.caption};
`,T4=u.div`
  overflow: hidden;
  border: 1px solid rgba(75, 0, 130, 0.08);
  border-radius: 22px;
  background: ${({theme:e})=>e.colors.white};
  box-shadow: 0 7px 22px rgba(61, 61, 61, 0.04);
`,jo=u.button`
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
`,So=u.span`
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: ${({theme:e})=>e.colors.primary50};
`,$o=u.span`
  flex: 1;
  ${W.body2};
  font-weight: 600;
`,ai=u.span`
  color: ${({theme:e})=>e.colors.mutedMauve};
  font-size: 1.25rem;
`,gz=u.p`
  margin: 12px 4px 0;
  color: ${({$error:e,theme:t})=>e?"#c5221f":t.colors.primary600};
  ${W.caption};
  text-align: center;
`,mz=u.button`
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
`,R4={service:{title:"서비스 이용약관",body:`제1조 (목적)
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

수신 방법·빈도·철회 절차 등은 추후 설정에서 변경하실 수 있습니다.`}},z4=e=>!(e.length<8||!/[a-zA-Z]/.test(e)||!/[0-9]/.test(e)),M4=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,A4=/^[^\s@]+@[^\s@]+\./,ld=/^01[0-9]\d{7,8}$/,ci="meditation-oauth-signup-ticket",xz=()=>{var D0;const e=ft(),[t,n]=y3(),r=m.useRef(!1),[i,s]=m.useState("login"),[l,a]=m.useState(""),[c,d]=m.useState(!1),[p,f]=m.useState({status:"idle",email:null}),[h,g]=m.useState(""),[b,v]=m.useState(""),[$,x]=m.useState(""),[L,y]=m.useState(""),[S,I]=m.useState(!1),[k,j]=m.useState(!1),[R,z]=m.useState(!1),[T,P]=m.useState("KR-11"),[E,A]=m.useState(!1),[N,F]=m.useState(!1),[Y,Q]=m.useState(!1),[_,D]=m.useState(null),[C,X]=m.useState(null),[J,w]=m.useState(300),[H,M]=m.useState(!1),[G,U]=m.useState(!1),[ne,de]=m.useState(!1),[q,te]=m.useState(!1),[le,xe]=m.useState(null),[$e,Me]=m.useState(!1),[De,Ee]=m.useState(null),[Ct,re]=m.useState(!1),[Pe,Ie]=m.useState(""),[wt,sn]=m.useState(""),[We,Jr]=m.useState(!1),[B,V]=m.useState(null),ie=ut(O=>O.accessToken),he=ut(O=>O.email),je=ut(O=>O.logout),Et=mr(O=>O.favorites.length),Yt=m.useRef(null),[ae,ln]=m.useState(null),[kr,ht]=m.useState(!1),[Rn,Gt]=m.useState(!1),[N5,S0]=m.useState(!1),[pc,jr]=m.useState(null),D5=((D0=Wn(T))==null?void 0:D0.name)??"서울",ei=m.useMemo(()=>Ce()??"",[]),$0=m.useRef(null),[C0,E0]=m.useState(null),[fc,hc]=m.useState(null),Os=()=>{E0(null),hc(O=>(O!=null&&O.startsWith("blob:")&&URL.revokeObjectURL(O),null))},O5=O=>{if(!O.type.startsWith("image/")){V("이미지 파일만 선택할 수 있어요.");return}const oe=5*1024*1024;if(O.size>oe){V("사진은 5MB 이하로 선택해 주세요.");return}V(null),E0(O);const ve=URL.createObjectURL(O);hc(Fe=>(Fe!=null&&Fe.startsWith("blob:")&&URL.revokeObjectURL(Fe),ve))},gt=m.useMemo(()=>l.trim(),[l]),ti=m.useMemo(()=>gt?!M4.test(gt):!1,[gt]),gc=m.useMemo(()=>gt.length>0&&M4.test(gt),[gt]),P0=!!Ce()&&gt.length>0&&A4.test(gt),mt=p.email===gt?p:null,ao=!!mt&&mt.status==="unavailable",I0=m.useMemo(()=>gc?Ce()?(mt==null?void 0:mt.status)==="available"&&mt.email===gt:!0:!1,[gc,gt,mt]),B5=ti||ao,zn=m.useMemo(()=>h.replace(/[^\d]/g,""),[h]),F5=m.useMemo(()=>zn?!ld.test(zn):!1,[zn]),T0=m.useMemo(()=>zn.length>0&&ld.test(zn),[zn]),R0=F5,mc=m.useMemo(()=>/^\d{6}$/.test(b.trim()),[b]),z0=async()=>{if(!Ce()||!ld.test(zn))return!1;try{return(await me("/auth/phone/signup/send-otp",{method:"POST",body:JSON.stringify({phone:zn})})).ok}catch{return!1}},H5=async()=>{if(!Ce()){V("지금은 이용할 수 없어요. 잠시 후 다시 시도해 주세요.");return}V(null),D(null),Q(!1),X(null),v(""),F(!0),w(300),M(!0),window.setTimeout(()=>{var oe;(oe=document.getElementById("signup-code-anchor"))==null||oe.scrollIntoView({behavior:"smooth",block:"nearest"})},120),await z0()||V("인증 문자를 보내지 못했어요. 잠시 후 다시 시도해 주세요.")},U5=async()=>{v(""),Q(!1),D(null),X(null),w(300),M(!0),await z0()||V("인증 문자를 다시 보내지 못했어요. 잠시 후 다시 시도해 주세요.")},V5=async()=>{if(mc){if(!Ce()){V("지금은 이용할 수 없어요. 잠시 후 다시 시도해 주세요.");return}V(null);try{const O=await me("/auth/phone/signup/verify-otp",{method:"POST",body:JSON.stringify({phone:zn,code:b.trim()})});if(!O.ok){X("error");return}const ve=(await O.json()).phoneVerificationToken;if(!ve){X("error");return}D(ve),Q(!0),X("success")}catch{X("error")}}},xc=m.useMemo(()=>{const O=$;return O?O.length<8?"8자 이상이어야 합니다":/[a-zA-Z]/.test(O)?/[0-9]/.test(O)?null:"숫자가 포함되어야 합니다":"영문이 포함되어야 합니다":null},[$]),M0=m.useMemo(()=>L.length>0&&$!==L,[$,L]),A0=m.useMemo(()=>z4($)&&$===L,[$,L]),W5=J<=0,_0=m.useMemo(()=>{const O=Math.floor(J/60),oe=J%60;return`${O}:${String(oe).padStart(2,"0")}`},[J]),Lc=m.useMemo(()=>G&&ne,[G,ne]),Bs=m.useMemo(()=>{switch(i){case"signup-terms":return 20;case"signup-account":return 40;case"signup-region":return 60;case"signup-interest":return 80;case"signup-complete":return 100;default:return null}},[i]);m.useEffect(()=>{var Zt,Nt;if(r.current||t.get("signupOAuth")!=="1")return;const O=(Zt=t.get("oauthSignupTicket"))==null?void 0:Zt.trim();if(!O)return;r.current=!0;const oe=t.get("email")??"",ve=((Nt=t.get("picture"))==null?void 0:Nt.trim())??"";s("signup-account"),oe&&a(oe),d(!0),ve.startsWith("https://")&&hc(an=>(an!=null&&an.startsWith("blob:")&&URL.revokeObjectURL(an),ve));try{sessionStorage.setItem(ci,O)}catch{}const Fe=new URLSearchParams(t);Fe.delete("signupOAuth"),Fe.delete("oauthSignupTicket"),Fe.delete("email"),Fe.delete("picture"),n(Fe,{replace:!0})},[t,n]),m.useEffect(()=>{if(t.get("start")!=="signup"||ie)return;s("signup-terms");const O=new URLSearchParams(t);O.delete("start"),n(O,{replace:!0})},[t,n,ie]),m.useEffect(()=>{if(i!=="signup-account"||c)return;if(!gt.length||!A4.test(gt)){f({status:"idle",email:null});return}if(!Ce()){f({status:"idle",email:null});return}const oe=gt,ve=new AbortController,Zt=window.setTimeout(()=>{f({status:"loading",email:oe}),(async()=>{try{const Nt=await me(`/auth/email/availability?email=${encodeURIComponent(oe)}`,{signal:ve.signal});if(!Nt.ok){f({status:"error",email:oe});return}const J5=!!(await Nt.json()).available;f({status:J5?"available":"unavailable",email:oe})}catch(Nt){if(Nt.name==="AbortError"||!Ce())return;f({status:"error",email:oe})}})()},320);return()=>{window.clearTimeout(Zt),ve.abort()}},[gt,i,c]),m.useEffect(()=>{if(i!=="signup-account"||!N)return;const O=window.setInterval(()=>{w(oe=>oe>0?oe-1:0)},1e3);return()=>window.clearInterval(O)},[i,N]),m.useEffect(()=>{if(i!=="signup-account"||!N||!Y)return;const O=window.setTimeout(()=>{var oe;(oe=document.getElementById("signup-password-anchor"))==null||oe.scrollIntoView({behavior:"smooth",block:"nearest"})},80);return()=>window.clearTimeout(O)},[i,N,Y]),m.useEffect(()=>{if(i!=="signup-account"||!c)return;const O=window.setTimeout(()=>{var oe;(oe=document.getElementById("signup-phone-anchor"))==null||oe.scrollIntoView({behavior:"smooth",block:"nearest"})},100);return()=>window.clearTimeout(O)},[i,c]),m.useEffect(()=>{if(!C)return;const O=window.setTimeout(()=>{X(null)},2200);return()=>window.clearTimeout(O)},[C]),m.useEffect(()=>{if(!H)return;const O=window.setTimeout(()=>{M(!1)},2200);return()=>window.clearTimeout(O)},[H]),m.useEffect(()=>{i==="login"&&z(!1)},[i]),m.useEffect(()=>{i!=="signup-region"&&(Ee(null),re(!1),Me(!1))},[i]);const K5=()=>{if(Ee(null),re(!1),!navigator.geolocation){re(!0),Ee("이 환경에서는 위치 정보를 쓸 수 없어요. 지도에서 골라주세요.");return}Me(!0),navigator.geolocation.getCurrentPosition(O=>{var ve;Me(!1);const oe=lv(O.coords.latitude,O.coords.longitude);if(oe){P(oe),A(!0),re(!1);const Fe=((ve=Wn(oe))==null?void 0:ve.name)??oe;Ee(`${Fe} 지역으로 맞췄어요. 맞는지 확인해 주세요.`)}else re(!0),Ee("위치로 시·도를 찾지 못했어요. 지도에서 선택해 주세요.")},O=>{Me(!1),re(!0),O.code===1?Ee("위치 권한이 필요해요. 허용하시거나 지도에서 골라주세요."):O.code===2?Ee("위치를 가져올 수 없어요. 지도에서 선택해 주세요."):Ee("위치 확인에 실패했어요. 지도에서 선택해 주세요.")},{enableHighAccuracy:!1,maximumAge:3e5,timeout:12e3})},Y5=()=>{if(i==="login"){e(-1);return}if(i==="signup-terms"){xe(null),s("login");return}if(i==="signup-account"){let O=null;try{O=sessionStorage.getItem(ci)}catch{O=null}if(O){try{sessionStorage.removeItem(ci)}catch{}d(!1),f({status:"idle",email:null}),Os(),D(null),F(!1),Q(!1),X(null),g(""),v(""),x(""),y(""),I(!1),j(!1),s("login");return}d(!1),f({status:"idle",email:null}),Os(),D(null),F(!1),Q(!1),X(null),g(""),v(""),x(""),y(""),I(!1),j(!1),s("signup-terms");return}if(i==="signup-region"){s("signup-account");return}i==="signup-interest"&&s("signup-region")},G5=async()=>{if(V(null),!Ce()){Ye.error("지금은 이용할 수 없어요. 잠시 후 다시 시도해 주세요.");return}const O=Pe.trim();if(!O||!wt){Ye.error("이메일과 비밀번호를 입력해 주세요.");return}Jr(!0);try{const oe=await me("/auth/login",{method:"POST",body:JSON.stringify({email:O,password:wt})});if(!oe.ok){let ve="";try{ve=(await oe.json()).error??""}catch{}Ye.error(ve==="INVALID_CREDENTIALS"?"이메일 또는 비밀번호를 확인해 주세요.":"로그인에 실패했습니다.");return}await ut.getState().setSession(),await mr.getState().pullFromServer(),sn("")}catch{Ye.error("잠시 후 다시 시도해 주세요.")}finally{Jr(!1)}},Z5=async()=>{if(V(null),!Ce()){V("지금은 이용할 수 없어요. 잠시 후 다시 시도해 주세요.");return}if(!z4($)||$!==L){V("비밀번호를 다시 확인해 주세요.");return}let O=null;try{O=sessionStorage.getItem(ci)}catch{O=null}if(!O&&(!_||_.trim()==="")){V("휴대폰 인증을 완료해 주세요.");return}const oe=Ce();Jr(!0);try{const ve=new FormData;ve.append("email",gt),ve.append("password",$),O?ve.append("oauthSignupToken",O):ve.append("phoneVerificationToken",_.trim()),C0&&ve.append("profileImage",C0);const Fe=O?`${oe}/auth/register/oauth`:`${oe}/auth/register`,Zt=await fetch(Fe,{method:"POST",body:ve,credentials:"include"});if(Zt.status===409){V("이미 가입된 이메일입니다.");return}if(!Zt.ok){try{const Nt=await Zt.json(),an=Nt.code??Nt.error??"";if(Zt.status===400&&an==="INVALID_OAUTH_SIGNUP_TOKEN"){V("소셜 가입 세션이 만료되었습니다. 소셜 로그인을 다시 진행해 주세요.");try{sessionStorage.removeItem(ci)}catch{}return}if(Zt.status===400&&an==="INVALID_PROFILE_IMAGE_OBJECT_KEY"){V("프로필 사진 정보가 올바르지 않아요. 사진을 다시 선택해 주세요.");return}}catch{}V("회원가입에 실패했습니다.");return}try{sessionStorage.removeItem(ci)}catch{}await ut.getState().setSession(),await mr.getState().pullFromServer(),Os(),s("login")}catch{V("잠시 후 다시 시도해 주세요.")}finally{Jr(!1)}};m.useEffect(()=>{if(!ie||i!=="login"||!Ce()){ln(null);return}let O=!0;return ht(!0),jr(null),me("/me").then(async oe=>{if(!oe.ok)throw new Error("profile");const ve=await oe.json();O&&ln(ve)}).catch(()=>{O&&jr({text:"프로필 정보를 불러오지 못했어요.",error:!0})}).finally(()=>{O&&ht(!1)}),()=>{O=!1}},[ie,i]);const q5=async O=>{var ve;if(!O)return;if(!O.type.startsWith("image/")){jr({text:"이미지 파일만 선택할 수 있어요.",error:!0});return}if(O.size>5*1024*1024){jr({text:"사진은 5MB 이하로 선택해 주세요.",error:!0});return}const oe=new FormData;oe.append("file",O),Gt(!0),jr(null);try{const Fe=await me("/me/profile-image",{method:"POST",body:oe});if(!Fe.ok){let Nt="사진을 바꾸지 못했어요. 잠시 후 다시 시도해 주세요.";try{const an=await Fe.json();(ve=an.message)!=null&&ve.trim()&&(Nt=an.message)}catch{}throw new Error(Nt)}const Zt=await Fe.json();ln(Zt),jr({text:"프로필 사진을 바꿨어요."})}catch(Fe){jr({text:Fe instanceof Error?Fe.message:"사진을 바꾸지 못했어요. 잠시 후 다시 시도해 주세요.",error:!0})}finally{Gt(!1),Yt.current&&(Yt.current.value="")}},N0=(ae==null?void 0:ae.email)??he??"",yc=(ae==null?void 0:ae.displayName)||(ae==null?void 0:ae.username)||N0||"명상가",vc=yc.includes("@")?yc.split("@")[0]:yc,Q5=(vc.trim()[0]??"명").toUpperCase(),X5=ae!=null&&ae.createdAt?new Date(ae.createdAt).getFullYear():new Date().getFullYear();return o.jsxs(UT,{$dashboard:!!ie&&i==="login",children:[Bs!==null&&o.jsx(VT,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Bs,"aria-label":`회원가입 진행 ${Bs}%`,children:o.jsx(WT,{$pct:Bs})}),ie&&i==="login"?o.jsxs(GR,{children:[o.jsx(ZR,{children:"마이 페이지"}),o.jsxs(qR,{children:[o.jsxs(QR,{children:[o.jsxs(XR,{type:"button","aria-label":"프로필 사진 바꾸기",disabled:Rn,onClick:()=>{var O;return(O=Yt.current)==null?void 0:O.click()},children:[ae!=null&&ae.profileImageUrl?o.jsx(JR,{src:ae.profileImageUrl,alt:`${vc} 프로필`}):o.jsx(ez,{"aria-hidden":"true",children:Q5}),o.jsx(tz,{"aria-hidden":"true",children:Rn?"…":"✦"})]}),o.jsx(cz,{ref:Yt,type:"file",accept:"image/*",onChange:O=>{var oe;return void q5((oe=O.target.files)==null?void 0:oe[0])}}),o.jsxs(nz,{children:[o.jsxs(rz,{children:[o.jsxs(iz,{children:[vc,"님"]}),o.jsx(oz,{children:(ae==null?void 0:ae.role)==="MEMBER"?"MEMBER":(ae==null?void 0:ae.role)??"MEMBER"})]}),o.jsx(sz,{children:N0}),o.jsx(lz,{children:kr?"프로필을 불러오는 중…":"사진을 눌러 프로필을 꾸며보세요"}),o.jsx(az,{type:"button",onClick:()=>S0(!0),children:"프로필 수정"})]})]}),o.jsxs(uz,{children:[o.jsxs(nd,{children:[o.jsx(rd,{children:Et}),o.jsx(id,{children:"저장한 장소"})]}),o.jsxs(nd,{children:[o.jsx(rd,{children:X5}),o.jsx(id,{children:"함께한 해"})]}),o.jsxs(nd,{children:[o.jsx(rd,{children:"맑음"}),o.jsx(id,{children:"오늘의 마음"})]})]})]}),pc&&o.jsx(gz,{$error:pc.error,children:pc.text}),o.jsxs(dz,{type:"button",onClick:()=>e("/meditation/map"),children:[o.jsx(pz,{"aria-hidden":"true",children:"◌"}),o.jsxs(fz,{children:[o.jsx("strong",{children:"오늘, 잠시 쉬어갈 곳을 찾아볼까요?"}),o.jsx("small",{children:"내 주변 명상 공간을 지도에서 둘러보세요"})]}),o.jsx(ai,{"aria-hidden":"true",children:"›"})]}),o.jsxs(od,{children:[o.jsx(sd,{children:"나의 명상"}),o.jsxs(hz,{children:[o.jsxs(C4,{type:"button",onClick:()=>e("/favorites"),children:[o.jsx(E4,{"aria-hidden":"true",children:"♡"}),o.jsx(P4,{children:"저장한 장소"}),o.jsxs(I4,{children:[Et,"곳의 쉼터를 모았어요"]})]}),o.jsxs(C4,{type:"button",onClick:()=>e("/meditation"),children:[o.jsx(E4,{"aria-hidden":"true",children:"⌁"}),o.jsx(P4,{children:"명상 둘러보기"}),o.jsx(I4,{children:"새로운 프로그램을 만나보세요"})]})]})]}),o.jsxs(od,{children:[o.jsx(sd,{children:"전문가 활동"}),o.jsxs(T4,{children:[o.jsxs(jo,{type:"button",onClick:()=>e("/profile/expert"),children:[o.jsx(So,{"aria-hidden":"true",children:"✦"}),o.jsx($o,{children:ae!=null&&ae.expertProfileId?"전문가 프로필 수정":"명상 전문가로 전환"}),o.jsx(ai,{"aria-hidden":"true",children:"›"})]}),(ae==null?void 0:ae.expertProfileId)&&o.jsxs(jo,{type:"button",onClick:()=>e(`/meditation/expert/${ae.expertProfileId}`),children:[o.jsx(So,{"aria-hidden":"true",children:"◎"}),o.jsx($o,{children:"내 전문가 페이지 보기"}),o.jsx(ai,{"aria-hidden":"true",children:"›"})]})]})]}),o.jsxs(od,{children:[o.jsx(sd,{children:"서비스"}),o.jsxs(T4,{children:[o.jsxs(jo,{type:"button",onClick:()=>e("/notice"),children:[o.jsx(So,{"aria-hidden":"true",children:"♢"}),o.jsx($o,{children:"공지사항"}),o.jsx(ai,{"aria-hidden":"true",children:"›"})]}),o.jsxs(jo,{type:"button",onClick:()=>e("/inquiry"),children:[o.jsx(So,{"aria-hidden":"true",children:"?"}),o.jsx($o,{children:"문의하기"}),o.jsx(ai,{"aria-hidden":"true",children:"›"})]}),o.jsxs(jo,{type:"button",onClick:()=>e("/service-info"),children:[o.jsx(So,{"aria-hidden":"true",children:"i"}),o.jsx($o,{children:"서비스 안내"}),o.jsx(ai,{"aria-hidden":"true",children:"›"})]})]})]}),o.jsx(mz,{type:"button",onClick:()=>{je(),ln(null),Ie(""),sn("")},children:"로그아웃"}),ae&&o.jsx(o.Fragment,{children:o.jsx(_T,{open:N5,profile:ae,onClose:()=>S0(!1),onSaved:ln})})]}):o.jsxs(KT,{children:[i!=="signup-complete"&&o.jsxs(YT,{children:[o.jsxs(GT,{type:"button",onClick:Y5,"aria-label":"뒤로가기",children:[o.jsx(ZT,{src:vT,alt:"","aria-hidden":"true"}),"뒤로가기"]}),i==="signup-interest"&&o.jsx(bR,{type:"button",onClick:()=>s("signup-complete"),children:"건너뛰기"})]}),i==="login"&&o.jsxs(si,{children:[o.jsxs(wo,{children:[o.jsxs(qT,{children:[o.jsx(QT,{src:zi,alt:"명상 웰니스 지도 로고"}),o.jsx(b4,{children:"명상 웰니스 지도에 오신 것을 환영합니다!"}),o.jsx(XT,{children:"명상 웰니스 지도"})]}),o.jsxs(CR,{children:[o.jsx(is,{type:"email",placeholder:"이메일","aria-label":"이메일",value:Pe,onChange:O=>Ie(O.target.value),autoComplete:"email"}),o.jsxs(Wu,{children:[o.jsx(Yu,{type:R?"text":"password",placeholder:"비밀번호","aria-label":"비밀번호",autoComplete:"current-password",value:wt,onChange:O=>sn(O.target.value)}),o.jsx(Ku,{type:"button","aria-pressed":R,"aria-label":R?"비밀번호 숨기기":"비밀번호 보기",onClick:()=>z(O=>!O),children:R?"숨기기":"보기"})]})]}),o.jsx(RR,{children:"또는"}),o.jsxs(zR,{children:[ei?o.jsx(Zu,{href:`${ei}/oauth2/authorization/kakao`,$bg:"transparent","aria-label":"카카오로 로그인",children:o.jsx(li,{src:Ca,alt:""})}):o.jsx(Gu,{type:"button",$bg:"transparent",disabled:!0,"aria-label":"카카오로 로그인 (API 주소 필요)",children:o.jsx(li,{src:Ca,alt:""})}),ei?o.jsx(Zu,{href:`${ei}/oauth2/authorization/naver`,$bg:"transparent","aria-label":"네이버로 로그인",children:o.jsx(li,{src:Ea,alt:""})}):o.jsx(Gu,{type:"button",$bg:"transparent",disabled:!0,"aria-label":"네이버로 로그인 (API 주소 필요)",children:o.jsx(li,{src:Ea,alt:""})}),ei?o.jsx(Zu,{href:`${ei}/oauth2/authorization/google`,$bg:"transparent","aria-label":"구글로 로그인",children:o.jsx(li,{src:Pa,alt:""})}):o.jsx(Gu,{type:"button",$bg:"transparent",disabled:!0,"aria-label":"구글로 로그인 (API 주소 필요)",children:o.jsx(li,{src:Pa,alt:""})})]}),o.jsxs(MR,{children:[o.jsx("span",{children:"계정이 없으신가요?"}),o.jsx(AR,{type:"button",onClick:()=>{a(""),d(!1),f({status:"idle",email:null}),Os(),D(null),g(""),v(""),x(""),y(""),I(!1),j(!1),F(!1),Q(!1),X(null),w(300),P("KR-11"),U(!1),de(!1),te(!1),xe(null),V(null),s("signup-terms")},children:"회원가입"})]}),B&&i==="login"&&o.jsx(Ir,{style:{marginTop:12},children:B})]}),o.jsx(ko,{children:o.jsx(TR,{type:"button",disabled:We,onClick:()=>void G5(),children:We?"처리 중…":"로그인하기"})})]}),i==="signup-terms"&&o.jsxs(si,{children:[o.jsxs(_R,{children:[o.jsx(NR,{children:o.jsxs(OR,{children:[o.jsx(BR,{src:zi,alt:"명상 웰니스 지도 로고"}),o.jsx(b4,{children:"명상 웰니스 지도에 오신 것을 환영합니다!"})]})}),o.jsxs(DR,{children:[o.jsx(FR,{children:"서비스 이용을 위해 아래 약관에 동의해 주세요."}),o.jsxs(HR,{children:[o.jsxs(qu,{children:[o.jsxs(Qu,{htmlFor:"signup-terms-service",children:[o.jsx(Xu,{id:"signup-terms-service",type:"checkbox",checked:G,onChange:O=>U(O.target.checked)}),o.jsxs(Ju,{children:[o.jsx(ed,{children:"[필수]"}),"서비스 이용약관에 동의합니다"]})]}),o.jsx(td,{type:"button",onClick:O=>{O.stopPropagation(),xe("service")},children:"자세히 ›"})]}),o.jsxs(qu,{children:[o.jsxs(Qu,{htmlFor:"signup-terms-privacy",children:[o.jsx(Xu,{id:"signup-terms-privacy",type:"checkbox",checked:ne,onChange:O=>de(O.target.checked)}),o.jsxs(Ju,{children:[o.jsx(ed,{children:"[필수]"}),"개인정보 수집 및 이용에 동의합니다"]})]}),o.jsx(td,{type:"button",onClick:O=>{O.stopPropagation(),xe("privacy")},children:"자세히 ›"})]}),o.jsxs(qu,{children:[o.jsxs(Qu,{htmlFor:"signup-terms-marketing",children:[o.jsx(Xu,{id:"signup-terms-marketing",type:"checkbox",checked:q,onChange:O=>te(O.target.checked)}),o.jsxs(Ju,{children:[o.jsx(ed,{$optional:!0,children:"[선택]"}),"마케팅 정보 수신에 동의합니다"]})]}),o.jsx(td,{type:"button",onClick:O=>{O.stopPropagation(),xe("marketing")},children:"자세히 ›"})]})]})]})]}),o.jsx(ko,{children:o.jsxs(UR,{children:[o.jsx(VR,{type:"button",$disabled:!Lc,disabled:!Lc,"aria-label":"필수 약관에 동의하고 다음 단계로",onClick:()=>{Lc&&s("signup-account")},children:"동의"}),o.jsx(WR,{type:"button",onClick:()=>{U(!0),de(!0),te(!0),s("signup-account")},children:"전체 동의"})]})})]}),i==="signup-account"&&o.jsxs(si,{children:[o.jsxs(wo,{children:[o.jsx(Hu,{children:"회원가입"}),o.jsxs(k4,{children:[o.jsx(is,{type:"email",placeholder:"이메일",value:l,$error:B5,onChange:O=>a(O.target.value),autoComplete:"email",disabled:c}),ti&&o.jsx(Ir,{children:"이메일 형식이 아닙니다"}),!ti&&ao&&o.jsx(Ir,{children:"이미 가입된 이메일이에요"}),!ti&&P0&&!ao&&(mt==null?void 0:mt.status)==="error"&&o.jsx(Ir,{children:"가능 여부를 확인하지 못했어요. 잠시 후 다시 확인해 보세요."}),!ti&&!ao&&P0&&(mt==null?void 0:mt.status)==="loading"&&!c&&o.jsx(nR,{children:"사용 가능 여부 확인 중이에요…"}),!ti&&!ao&&!c&&(!Ce()&&gc||(mt==null?void 0:mt.status)==="available")&&o.jsx(tR,{children:"사용가능한 이메일입니다"}),c&&o.jsxs(Fu,{id:"signup-phone-anchor",children:[o.jsx(is,{type:"tel",inputMode:"numeric",placeholder:"휴대폰 번호 (- 없이)",value:h,$error:R0,onChange:O=>g(O.target.value.replace(/\D/g,"")),autoComplete:"tel",disabled:Y}),R0&&o.jsx(Ir,{children:"올바른 휴대폰 번호를 입력해 주세요"})]})]}),N&&o.jsx(Fu,{id:"signup-code-anchor",children:o.jsxs(FT,{children:[o.jsxs(cR,{children:[o.jsxs(ER,{children:[o.jsx(PR,{type:"text",inputMode:"numeric",placeholder:"인증번호",value:b,onChange:O=>v(O.target.value.replace(/\D/g,"").slice(0,6)),autoComplete:"one-time-code","aria-describedby":Y?void 0:"signup-code-hint",disabled:Y}),o.jsx(IR,{title:`남은 시간 ${_0}`,children:_0})]}),o.jsx(uR,{type:"button",$highlight:W5,disabled:Y,onClick:()=>void U5(),children:"다시받기"})]}),!Y&&o.jsx(HT,{id:"signup-code-hint",children:"휴대폰으로 발송된 6자리 인증번호를 입력해 주세요"})]})}),N&&Y&&o.jsx(Fu,{id:"signup-password-anchor",children:o.jsxs(k4,{children:[o.jsxs(iR,{children:[o.jsx(oR,{type:"button","aria-label":fc?"프로필 사진 바꾸기":"프로필 사진 선택",onClick:()=>{var O;return(O=$0.current)==null?void 0:O.click()},children:fc?o.jsx(lR,{src:fc,alt:""}):o.jsx(sR,{"aria-hidden":!0,children:"+"})}),o.jsx(aR,{ref:$0,type:"file",accept:"image/*",onChange:O=>{var ve;const oe=(ve=O.target.files)==null?void 0:ve[0];O.target.value="",oe&&O5(oe)}})]}),o.jsxs(j4,{$index:0,children:[o.jsxs(Wu,{children:[o.jsx(Yu,{type:S?"text":"password",placeholder:"비밀번호",value:$,$error:!!xc,onChange:O=>x(O.target.value),autoComplete:"new-password"}),o.jsx(Ku,{type:"button","aria-pressed":S,"aria-label":S?"비밀번호 숨기기":"비밀번호 보기",onClick:()=>I(O=>!O),children:S?"숨기기":"보기"})]}),xc&&o.jsx(S4,{children:xc})]}),o.jsxs(j4,{$index:1,children:[o.jsxs(Wu,{children:[o.jsx(Yu,{type:k?"text":"password",placeholder:"비밀번호 확인",value:L,$error:M0,onChange:O=>y(O.target.value),autoComplete:"new-password"}),o.jsx(Ku,{type:"button","aria-pressed":k,"aria-label":k?"비밀번호 확인 숨기기":"비밀번호 확인 보기",onClick:()=>j(O=>!O),children:k?"숨기기":"보기"})]}),M0&&o.jsx(S4,{children:"비밀번호가 일치하지 않습니다"})]}),o.jsx(rR,{children:"8자 이상, 영문+숫자 포함"})]})})]}),o.jsxs(ko,{children:[!c&&o.jsx(di,{type:"button",$disabled:!I0,disabled:!I0,onClick:()=>d(!0),children:"다음"}),c&&!N&&o.jsx(di,{type:"button",$disabled:!T0,disabled:!T0,onClick:()=>void H5(),children:"인증번호 받기"}),N&&!Y&&o.jsx(di,{type:"button",$disabled:!mc,disabled:!mc,onClick:()=>void V5(),children:"인증"}),N&&Y&&o.jsx(di,{type:"button",$disabled:!A0,disabled:!A0,onClick:()=>s("signup-region"),children:"다음"})]})]}),H&&o.jsx(Uu,{role:"status","aria-live":"polite",children:o.jsx(Vu,{children:"인증번호를 보냈어요!"})}),C==="success"&&o.jsx(Uu,{role:"status","aria-live":"polite",children:o.jsx(Vu,{children:"인증되었습니다"})}),C==="error"&&o.jsx(Uu,{role:"alert","aria-live":"assertive",children:o.jsx(Vu,{$variant:"error",children:"인증번호가 틀렸습니다"})}),i==="signup-region"&&o.jsx(si,{children:o.jsxs(wo,{children:[o.jsx(Hu,{children:"활동 지역을 설정해주세요"}),o.jsx(w4,{children:"주로 명상하는 지역을 선택해주세요"}),o.jsxs(dR,{children:[o.jsx(pR,{type:"button",disabled:$e,"aria-busy":$e,onClick:K5,children:$e?"위치 확인 중…":"현재 위치로 지역 맞추기"}),De&&o.jsx(fR,{$error:Ct,children:De})]}),o.jsx(hR,{children:o.jsx(_s,{maxMapHeight:"clamp(220px, calc(100dvh - 260px), 480px)",activeRegionId:T,onSelectRegion:O=>{P(O),A(!0)}})})]})}),i==="signup-interest"&&o.jsxs(si,{children:[o.jsxs(wo,{children:[o.jsx(wR,{children:"1/10"}),o.jsx(Hu,{children:"관심사를 선택해주세요"}),o.jsx(w4,{children:"좌우로 넘기며 관심있는 주제를 선택하세요"}),B&&o.jsx(Ir,{children:B}),o.jsx(LR,{children:"숲"}),o.jsx(yR,{type:"button","aria-label":"관심사 좋아요",children:"♡"})]}),o.jsx(ko,{children:o.jsx(vR,{type:"button",disabled:We,onClick:()=>void Z5(),children:We?"가입 중…":"다음"})})]}),i==="signup-complete"&&o.jsxs(si,{children:[o.jsxs(wo,{children:[o.jsx(kR,{children:o.jsx(jR,{src:zi,alt:"명상 웰니스 지도 로고"})}),o.jsx(SR,{children:"가입 완료!"}),o.jsx($R,{children:"평온한 명상 여행을 시작하세요"})]}),o.jsx(ko,{children:o.jsx(di,{type:"button",onClick:()=>{s("login")},children:"시작하기"})})]}),i==="signup-region"&&E&&o.jsx(k5,{role:"dialog","aria-modal":"true","aria-label":"지역 확인",children:o.jsxs(j5,{children:[o.jsxs($4,{children:[D5," 지역이 맞습니까?"]}),o.jsxs(mR,{children:[o.jsx(H1,{type:"button",onClick:()=>A(!1),children:"아니오"}),o.jsx(H1,{type:"button",$primary:!0,onClick:()=>{A(!1),s("signup-interest")},children:"네"})]})]})}),le!==null&&o.jsx(gR,{role:"dialog","aria-modal":"true","aria-labelledby":"terms-detail-title",onClick:()=>xe(null),children:o.jsxs(KR,{onClick:O=>O.stopPropagation(),children:[o.jsx($4,{id:"terms-detail-title",children:R4[le].title}),o.jsx(YR,{children:R4[le].body}),o.jsx(xR,{onClick:()=>xe(null),children:"확인"})]})})]})]})},S5={paragraph:"",h1:"# ",h2:"## ",h3:"### ",bullet:"- ",quote:"> "};let U1=1;function Lz(e){const t=[["h3",/^###\s?/],["h2",/^##\s?/],["h1",/^#\s?/],["bullet",/^-\s?/],["quote",/^>\s?/]];for(const[n,r]of t)if(r.test(e))return{id:U1++,type:n,text:e.replace(r,"")};return{id:U1++,type:"paragraph",text:e}}function yz(e){const t=e.split(`
`);return(t.length?t:[""]).map(Lz)}function vz(e){return e.map(t=>`${S5[t.type]}${t.text}`).join(`
`)}const bz=u.div`
  min-height: 320px;
  padding: 16px 18px;
  border: 1px solid ${({theme:e})=>e.colors.primary200};
  border-radius: 14px;
  background: ${({theme:e})=>e.colors.white};
  cursor: text;
`,wz=u.div`
  position: relative;
  min-height: 1.8em;
  margin: ${({$type:e})=>e==="h1"?"12px 0 6px":e==="h2"?"10px 0 5px":"2px 0"};
  padding-left: ${({$type:e})=>e==="bullet"?"18px":e==="quote"?"14px":"0"};
  border-left: ${({$type:e})=>e==="quote"?"3px solid rgba(75, 0, 130, 0.25)":"0"};

  ${({$type:e})=>e==="bullet"&&Oe`
      &::before {
        content: "•";
        position: absolute;
        left: 3px;
        top: 0.25em;
        color: ${({theme:t})=>t.colors.primary600};
      }
    `}
`,kz=u.textarea`
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

  ${({$type:e})=>e==="h1"?Oe`font-size: 1.45rem; font-weight: 800;`:e==="h2"?Oe`font-size: 1.2rem; font-weight: 750;`:e==="h3"?Oe`font-size: 1.05rem; font-weight: 700;`:W.body2}

  &::placeholder {
    color: ${({theme:e})=>e.colors.mutedMauve};
  }
`,jz=u.div`
  min-height: 1.65em;
  ${W.body2};
  line-height: 1.65;
`,Sz=u.div`
  margin-top: 10px;
  color: ${({theme:e})=>e.colors.text700};
  ${W.caption};
`;function $z({value:e,onChange:t,placeholder:n="내용을 입력하세요. `/` 대신 #, -, > 뒤에 공백을 입력하면 블록이 바뀝니다."}){const[r,i]=m.useState(()=>yz(e)),[s,l]=m.useState(()=>{var p;return((p=r[0])==null?void 0:p.id)??null}),a=m.useRef(null),c=m.useMemo(()=>vz(r),[r]);m.useEffect(()=>{c!==e&&t(c)},[c,t,e]),m.useEffect(()=>{if(a.current==null)return;const p=a.current;a.current=null,requestAnimationFrame(()=>{const f=document.querySelector(`[data-md-block="${p}"]`);f==null||f.focus()})},[r]);const d=(p,f)=>{i(h=>h.map(g=>{if(g.id!==p)return g;if(g.type==="paragraph"){const v=[["### ","h3"],["## ","h2"],["# ","h1"],["- ","bullet"],["> ","quote"]].find(([$])=>f===$);if(v)return{...g,type:v[1],text:""}}return{...g,text:f}}))};return o.jsxs(o.Fragment,{children:[o.jsx(bz,{onClick:p=>{p.target===p.currentTarget&&r.length&&l(r[r.length-1].id)},children:r.map((p,f)=>{const h=s===p.id;return o.jsx(wz,{$type:p.type,children:h?o.jsx(kz,{"data-md-block":p.id,autoFocus:!0,rows:1,$type:p.type,value:p.text,placeholder:f===0?n:"",onFocus:g=>{l(p.id),g.currentTarget.style.height="auto",g.currentTarget.style.height=`${g.currentTarget.scrollHeight}px`},onChange:g=>{d(p.id,g.target.value),g.currentTarget.style.height="auto",g.currentTarget.style.height=`${g.currentTarget.scrollHeight}px`},onKeyDown:g=>{if(g.key==="Enter"&&!g.shiftKey){g.preventDefault();const b=U1++;i(v=>{const $=v.findIndex(L=>L.id===p.id),x=[...v];return x.splice($+1,0,{id:b,type:"paragraph",text:""}),x}),l(b),a.current=b}else if(g.key==="Backspace"&&p.text===""&&p.type!=="paragraph")g.preventDefault(),i(b=>b.map(v=>v.id===p.id?{...v,type:"paragraph"}:v));else if(g.key==="Backspace"&&p.text===""&&r.length>1){g.preventDefault();const b=r[f-1];i(v=>v.filter($=>$.id!==p.id)),b&&(l(b.id),a.current=b.id)}},onBlur:()=>{window.setTimeout(()=>{const g=document.activeElement;g instanceof HTMLTextAreaElement&&g.dataset.mdBlock||l(null)},0)}}):o.jsx(jz,{onClick:()=>l(p.id),children:o.jsx(so,{markdown:`${S5[p.type]}${p.text}`,fallback:" "})})},p.id)})}),o.jsx(Sz,{children:"`# ` 제목 · `## ` 작은 제목 · `- ` 목록 · `> ` 인용 · Shift+Enter 줄바꿈"})]})}const Cz=["마음챙김","아트명상","숲 명상","호흡명상","걷기명상","소리명상"],_4=u.div`
  max-width: 980px;
  margin: 0 auto;
  padding: calc(18px + env(safe-area-inset-top, 0px)) 0 48px;
  color: ${({theme:e})=>e.colors.text900};
`,Ez=u.header`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
`,Pz=u.button`
  width: 38px;
  height: 38px;
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.text900};
  ${W.body1};
  cursor: pointer;
`,Iz=u.h1`
  margin: 0;
  ${W.title};
`,Tz=u.p`
  margin: 0 0 24px 50px;
  color: ${({theme:e})=>e.colors.text700};
  ${W.body2};

  @media (max-width: 640px) {
    margin-left: 0;
  }
`,Co=u.section`
  margin-top: 16px;
  padding: 22px;
  border: 1px solid rgba(75, 0, 130, 0.09);
  border-radius: 22px;
  background: ${({theme:e})=>e.colors.white};
  box-shadow: 0 8px 24px rgba(75, 0, 130, 0.05);

  @media (max-width: 640px) {
    padding: 18px 15px;
  }
`,Eo=u.h2`
  margin: 0 0 6px;
  ${W.body1};
  font-weight: 700;
`,Po=u.p`
  margin: 0 0 18px;
  color: ${({theme:e})=>e.colors.text700};
  ${W.caption};
`,bn=u.div`
  margin-top: 18px;
`,wn=u.label`
  display: block;
  margin-bottom: 8px;
  ${W.body2};
  font-weight: 700;
`,Rz=u.p`
  margin: -4px 0 8px;
  color: ${({theme:e})=>e.colors.text700};
  ${W.caption};
`,Io=u.input`
  width: 100%;
  box-sizing: border-box;
  padding: 13px 14px;
  border: 1px solid ${({theme:e})=>e.colors.primary200};
  border-radius: 12px;
  background: ${({theme:e})=>e.colors.white};
  color: ${({theme:e})=>e.colors.text900};
  ${W.body2};
`,ad=u.textarea`
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
`,N4=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,D4=u.button`
  padding: 8px 11px;
  border: 1px solid
    ${({theme:e,$selected:t})=>t?e.colors.primary600:e.colors.primary200};
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e,$selected:t})=>t?e.colors.primary600:e.colors.white};
  color: ${({theme:e,$selected:t})=>t?e.colors.white:e.colors.text700};
  ${W.caption};
  cursor: pointer;
`,zz=u.div`
  display: grid;
  grid-template-columns: minmax(260px, 0.9fr) minmax(240px, 1.1fr);
  gap: 20px;
  align-items: center;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`,Mz=u.div`
  padding: 12px;
  border-radius: 18px;
  background: ${({theme:e})=>e.colors.primary50};
`,Az=u.div`
  color: ${({theme:e})=>e.colors.text700};
  ${W.body2};
`,O4=u.div`
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
`,_z=u.div`
  position: sticky;
  bottom: calc(56px + env(safe-area-inset-bottom, 0px));
  z-index: 5;
  margin-top: 20px;
  padding: 12px;
  border-radius: 18px;
  background: rgba(255, 250, 248, 0.94);
  backdrop-filter: blur(12px);
`,Nz=u.button`
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
`,Dz=u.p`
  margin: 10px 0 0;
  color: ${({theme:e,$error:t})=>t?"#c5221f":e.colors.primary600};
  text-align: center;
  ${W.caption};
`,Oz=u.p`
  padding: 80px 20px;
  text-align: center;
  color: ${({theme:e})=>e.colors.text700};
  ${W.body2};
`,Bz=e=>({name:e.displayName||e.username.split("@")[0]||"",intro:"",degrees:[],certificates:[],careers:[],classTypes:[],regionIds:e.regionIds??[],hasCenter:!1,centerName:"",centerAddress:"",businessRegistrationNumber:"",businessOpeningDate:"",hidden:!1}),cd=e=>e.split(`
`).map(t=>t.trim()).filter(Boolean);function Fz(){const e=ft(),t=ut(v=>v.accessToken),[n,r]=m.useState(null),[i,s]=m.useState(null),[l,a]=m.useState(!0),[c,d]=m.useState(!1),[p,f]=m.useState(null);m.useEffect(()=>{if(!t){e("/profile",{replace:!0});return}Promise.all([wT(),kT()]).then(([v,$])=>{r(v),s({...Bz(v),...$??{}})}).catch(v=>f({text:v instanceof Error?v.message:"정보를 불러오지 못했어요.",error:!0})).finally(()=>a(!1))},[t,e]);const h=m.useMemo(()=>(i==null?void 0:i.regionIds.map(lo))??[],[i==null?void 0:i.regionIds]);if(l||!i||!n)return o.jsx(_4,{children:o.jsx(Oz,{children:(p==null?void 0:p.text)??"전문가 정보를 불러오는 중…"})});const g=(v,$)=>{const x=i[v];s({...i,[v]:x.includes($)?x.filter(L=>L!==$):[...x,$]})},b=i.name.trim().length>0&&i.intro.trim().length>0&&i.regionIds.length>0;return o.jsxs(_4,{children:[o.jsxs(Ez,{children:[o.jsx(Pz,{type:"button",onClick:()=>e("/profile"),"aria-label":"마이페이지로 돌아가기",children:"‹"}),o.jsx(Iz,{children:n.expertProfileId?"전문가 프로필 수정":"명상 전문가로 전환"})]}),o.jsx(Tz,{children:"작성한 내용은 명상 전문가 목록과 상세 페이지에 공개됩니다."}),o.jsxs(Co,{children:[o.jsx(Eo,{children:"공개 설정"}),o.jsx(Po,{children:"내 전문가 프로필을 명상 전문가 목록·상세에 공개할지 선택하세요. 숨김으로 두면 다른 사용자에게 표시되지 않습니다."}),o.jsxs(O4,{children:[o.jsx(fl,{type:"button",$selected:!i.hidden,onClick:()=>s({...i,hidden:!1}),children:"공개 (노출)"}),o.jsx(fl,{type:"button",$selected:i.hidden,onClick:()=>s({...i,hidden:!0}),children:"숨김"})]})]}),o.jsxs(Co,{children:[o.jsx(Eo,{children:"기본 정보"}),o.jsx(Po,{children:"전문가 페이지에 표시될 활동명과 소개를 작성해 주세요."}),o.jsxs(bn,{children:[o.jsx(wn,{htmlFor:"expert-name",children:"활동명"}),o.jsx(Io,{id:"expert-name",value:i.name,maxLength:80,onChange:v=>s({...i,name:v.target.value})})]}),o.jsxs(bn,{children:[o.jsx(wn,{htmlFor:"expert-intro",children:"자기소개"}),o.jsx(Rz,{children:"노션처럼 문법을 입력하면 해당 줄의 모양이 바로 바뀝니다."}),o.jsx($z,{value:i.intro,onChange:v=>s($=>$&&{...$,intro:v}),placeholder:"명상을 시작하게 된 계기와 수업 철학을 소개해 주세요."})]})]}),o.jsxs(Co,{children:[o.jsx(Eo,{children:"이력과 전문 분야"}),o.jsx(Po,{children:"각 항목은 한 줄에 하나씩 입력해 주세요."}),o.jsxs(bn,{children:[o.jsx(wn,{htmlFor:"expert-degrees",children:"학위"}),o.jsx(ad,{id:"expert-degrees",value:i.degrees.join(`
`),onChange:v=>s({...i,degrees:cd(v.target.value)}),placeholder:`○○대학교 상담심리학 석사
△△대학교 명상학 전공`})]}),o.jsxs(bn,{children:[o.jsx(wn,{htmlFor:"expert-certificates",children:"자격증·이수 교육과정"}),o.jsx(ad,{id:"expert-certificates",value:i.certificates.join(`
`),onChange:v=>s({...i,certificates:cd(v.target.value)})})]}),o.jsxs(bn,{children:[o.jsx(wn,{htmlFor:"expert-careers",children:"경력"}),o.jsx(ad,{id:"expert-careers",value:i.careers.join(`
`),onChange:v=>s({...i,careers:cd(v.target.value)})})]}),o.jsxs(bn,{children:[o.jsx(wn,{children:"클래스 종류"}),o.jsx(N4,{children:Cz.map(v=>o.jsx(D4,{type:"button",$selected:i.classTypes.includes(v),onClick:()=>g("classTypes",v),children:v},v))})]})]}),o.jsxs(Co,{children:[o.jsx(Eo,{children:"주 활동 지역"}),o.jsx(Po,{children:"지도에서 활동 가능한 지역을 여러 곳 선택할 수 있습니다."}),o.jsxs(zz,{children:[o.jsx(Mz,{children:o.jsx(_s,{activeRegionIds:i.regionIds,maxMapHeight:"460px",onSelectRegion:v=>g("regionIds",v)})}),o.jsxs(Az,{children:[o.jsxs("strong",{children:[h.length,"개 지역 선택됨"]}),o.jsx("p",{children:"선택된 지역을 다시 누르면 해제됩니다."}),o.jsx(N4,{children:Gr.filter(v=>i.regionIds.includes(v.id)).map(v=>o.jsxs(D4,{type:"button",$selected:!0,onClick:()=>g("regionIds",v.id),children:[v.name," ×"]},v.id))})]})]})]}),o.jsxs(Co,{children:[o.jsx(Eo,{children:"센터 정보"}),o.jsx(Po,{children:"본인 소유 센터가 있다면 인증 정보를 함께 입력해 주세요."}),o.jsxs(O4,{children:[o.jsx(fl,{type:"button",$selected:!i.hasCenter,onClick:()=>s({...i,hasCenter:!1}),children:"센터 없음"}),o.jsx(fl,{type:"button",$selected:i.hasCenter,onClick:()=>s({...i,hasCenter:!0}),children:"센터 있음"})]}),i.hasCenter&&o.jsxs(o.Fragment,{children:[o.jsxs(bn,{children:[o.jsx(wn,{htmlFor:"center-name",children:"센터명"}),o.jsx(Io,{id:"center-name",value:i.centerName,onChange:v=>s({...i,centerName:v.target.value})})]}),o.jsxs(bn,{children:[o.jsx(wn,{htmlFor:"center-address",children:"센터 위치"}),o.jsx(Io,{id:"center-address",value:i.centerAddress,onChange:v=>s({...i,centerAddress:v.target.value})})]}),o.jsxs(bn,{children:[o.jsx(wn,{htmlFor:"business-number",children:"사업자등록번호"}),o.jsx(Io,{id:"business-number",inputMode:"numeric",value:i.businessRegistrationNumber,onChange:v=>s({...i,businessRegistrationNumber:v.target.value.replace(/[^\d-]/g,"")})})]}),o.jsxs(bn,{children:[o.jsx(wn,{htmlFor:"opening-date",children:"개업일자"}),o.jsx(Io,{id:"opening-date",type:"date",value:i.businessOpeningDate,onChange:v=>s({...i,businessOpeningDate:v.target.value})})]})]})]}),o.jsxs(_z,{children:[o.jsx(Nz,{type:"button",disabled:c||!b,onClick:()=>{d(!0),f(null),jT(i).then(v=>{r(v),f({text:"전문가 프로필을 저장했어요."}),window.setTimeout(()=>e("/profile"),700)}).catch(v=>f({text:v instanceof Error?v.message:"저장하지 못했어요.",error:!0})).finally(()=>d(!1))},children:c?"저장 중…":n.expertProfileId?"전문가 정보 저장":"명상 전문가로 전환"}),p&&o.jsx(Dz,{$error:p.error,children:p.text})]})]})}const Hz=u.div`
  min-height: 40vh;
  display: grid;
  place-items: center;
  padding: 2rem;
  ${W.body1};
  color: ${({theme:e})=>e.colors.text700};
`,Uz=()=>{const[e]=y3(),t=ft();return m.useEffect(()=>{if(e.get("error")){t("/profile",{replace:!0});return}const r=e.get("oauthSignupTicket");if(r){const i=e.get("email")??"",s=new URLSearchParams({signupOAuth:"1",oauthSignupTicket:r,email:i}),l=e.get("picture");l&&s.set("picture",l),t(`/profile?${s.toString()}`,{replace:!0});return}ut.getState().bootstrapAuth().then(()=>mr.getState().pullFromServer()).finally(()=>t("/profile",{replace:!0}))},[t,e]),o.jsx(Hz,{children:"로그인 처리 중…"})},Vz=u.div`
  color: ${({theme:e})=>e.colors.text900};
`,B4=u.section`
  padding: 48px 20px;

  @media (max-width: 960px) {
    padding: 36px 14px;
  }
`,F4=u.div`
  max-width: 1100px;
  margin: 0 auto;
`,Wz=u.section`
  padding: 64px 20px calc(56px + env(safe-area-inset-bottom, 0px));
  background: linear-gradient(180deg, #ffffff 0%, ${({theme:e})=>e.colors.primary50} 100%);

  @media (max-width: 960px) {
    padding: 48px 14px calc(40px + env(safe-area-inset-bottom, 0px));
  }
`,Kz=u.div`
  max-width: 1100px;
  margin: 0 auto;
  background: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 36px;
  box-shadow: ${({theme:e})=>e.shadow.soft};
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  display: grid;
  gap: 16px;
`,Yz=u.h1`
  font-size: 3rem;
  line-height: 1.3;
`,Gz=u.p`
  font-size: 1.3rem;
  color: ${({theme:e})=>e.colors.text700};
`,Zz=u(ro)`
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
`,qz=u.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`,ud=u.div`
  background: ${({theme:e})=>e.colors.white};
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  border-radius: ${({theme:e})=>e.radii.lg};
  padding: 18px;
  box-shadow: ${({theme:e})=>e.shadow.soft};
`,dd=u.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.text700};
`,pd=u.p`
  font-size: 2.2rem;
  font-weight: 700;
  margin-top: 8px;
`,Qz=u.div`
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
`,Xz=u.section`
  padding: 48px 20px;
  background: ${({theme:e})=>e.colors.primary600};
  color: #fff;
`,Jz=u.div`
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
`,eM=u.button`
  border: none;
  background: #fff;
  color: ${({theme:e})=>e.colors.primary700};
  padding: 10px 18px;
  border-radius: ${({theme:e})=>e.radii.md};
  cursor: pointer;
  font-size: 1.1rem;
`,tM=()=>o.jsxs(Vz,{children:[o.jsx(Wz,{children:o.jsxs(Kz,{children:[o.jsx(Yz,{children:"누구나 원하는 곳에서, 더 깊은 힐링 명상"}),o.jsx(Gz,{children:"전국 힐링 명상 웰니스 지도는 지역별 명상센터를 쉽고 빠르게 찾을 수 있는 플랫폼입니다."}),o.jsx(Zz,{to:"/",children:"명상센터 찾아보기"})]})}),o.jsx(B4,{children:o.jsx(F4,{children:o.jsxs(qz,{children:[o.jsxs(ud,{children:[o.jsx(dd,{children:"누적 명상센터"}),o.jsx(pd,{children:"1,200+"})]}),o.jsxs(ud,{children:[o.jsx(dd,{children:"지역 커버리지"}),o.jsx(pd,{children:"전국 17개"})]}),o.jsxs(ud,{children:[o.jsx(dd,{children:"누적 검색 수"}),o.jsx(pd,{children:"210만+"})]})]})})}),o.jsx(B4,{children:o.jsx(F4,{children:o.jsxs(Qz,{children:[o.jsxs(hl,{children:[o.jsx(gl,{children:o.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[o.jsx("path",{d:"M3 11l9-7 9 7"}),o.jsx("path",{d:"M5 10v10h14V10"})]})}),o.jsx("h3",{children:"지도 기반 탐색"}),o.jsx("p",{children:"대한민국 지도로 지역을 선택하고, 명상센터를 한눈에 찾아보세요."})]}),o.jsxs(hl,{children:[o.jsx(gl,{children:o.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:o.jsx("path",{d:"M4 6h16M4 12h10M4 18h6"})})}),o.jsx("h3",{children:"맞춤형 필터"}),o.jsx("p",{children:"해시태그와 정렬 기준으로 내게 맞는 명상센터를 빠르게 추천해요."})]}),o.jsxs(hl,{children:[o.jsx(gl,{children:o.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[o.jsx("circle",{cx:"12",cy:"8",r:"3"}),o.jsx("path",{d:"M6 20c1.5-3 4-5 6-5s4.5 2 6 5"})]})}),o.jsx("h3",{children:"상세 정보 제공"}),o.jsx("p",{children:"주소, 프로그램, 운영 단체 정보까지 한 페이지에서 확인하세요."})]}),o.jsxs(hl,{children:[o.jsx(gl,{children:o.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[o.jsx("circle",{cx:"10",cy:"10",r:"6"}),o.jsx("line",{x1:"14.5",y1:"14.5",x2:"21",y2:"21"})]})}),o.jsx("h3",{children:"검색 경험"}),o.jsx("p",{children:"검색어 입력만으로 관련 명상센터를 부드럽게 이어 보여드립니다."})]})]})})}),o.jsx(Xz,{children:o.jsxs(Jz,{children:[o.jsxs("div",{children:[o.jsx("h2",{children:"명상센터 운영자라면 함께해요"}),o.jsx("p",{children:"전국 힐링 명상 웰니스 지도와 함께 더 많은 사람에게 명상 경험을 전달하세요."})]}),o.jsx(eM,{type:"button",children:"등록 문의하기"})]})})]}),nM=u.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
  background: linear-gradient(180deg, ${({theme:e})=>e.colors.primary50} 0%, ${({theme:e})=>e.colors.warmCream} 100%);
`,rM=u.div`
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
`,iM=u.p`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.primary700};
  margin: 0 0 8px;
`,oM=u.p`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.colors.primary400};
  margin: 0 0 32px;
  text-align: center;
  line-height: 1.5;
`,sM=u.button`
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
`,lM=()=>{const e=ft();return o.jsxs(nM,{children:[o.jsx(rM,{children:"404"}),o.jsx(iM,{children:"Oops!"}),o.jsx(oM,{children:"페이지를 찾을 수 없습니다."}),o.jsx(sM,{type:"button",onClick:()=>e("/"),children:"홈으로"})]})};function $5(e,t){if(e){try{const n=JSON.parse(e);if(n!=null&&n.message)return n.message;if(n!=null&&n.code)return n.code}catch{}return e}return`HTTP ${t}`}async function ot(e){if(!e.ok)throw new Error($5(await e.text(),e.status));if(e.status!==204)return e.json()}async function aM(e,t){const n=await me("/admin/auth/login",{method:"POST",body:JSON.stringify({loginId:e,password:t})});if(!n.ok)throw new Error($5(await n.text(),n.status))}async function cM(){return ot(await me("/admin/metrics/traffic"))}async function uM(e,t){const n=new URLSearchParams({granularity:e,limit:String(t)});return ot(await me(`/admin/metrics/http-traffic?${n.toString()}`))}async function dM(e,t){const n=new URLSearchParams({granularity:e,limit:String(t)});return ot(await me(`/admin/metrics/member-traffic?${n.toString()}`))}async function pM(e,t,n=12){const r=new URLSearchParams({granularity:e,limit:String(t),top:String(n)});return ot(await me(`/admin/metrics/api-traffic?${r.toString()}`))}async function fM(){return ot(await me("/admin/places"))}function hM(e){const{id:t,...n}=e;return n}async function gM(e,t,n){const r={regionId:t,data:hM(n)};return ot(e?await me(`/admin/places/${encodeURIComponent(e)}`,{method:"PUT",body:JSON.stringify(r)}):await me("/admin/places",{method:"POST",body:JSON.stringify(r)}))}async function mM(e){await ot(await me(`/admin/places/${encodeURIComponent(e)}`,{method:"DELETE"}))}async function xM(){return ot(await me("/admin/experts"))}async function LM(e,t){const n={data:C5(t)};return ot(e?await me(`/admin/experts/${encodeURIComponent(e)}`,{method:"PUT",body:JSON.stringify(n)}):await me("/admin/experts",{method:"POST",body:JSON.stringify(n)}))}function C5(e){const{id:t,...n}=e;return n}async function yM(e){const t=new URLSearchParams({loginId:e});return(await ot(await me(`/admin/experts/login-id-availability?${t.toString()}`))).available}async function vM(e){const t={loginId:e.loginId,email:e.email,password:e.password,data:C5(e.data)};return ot(await me("/admin/experts/accounts",{method:"POST",body:JSON.stringify(t)}))}async function bM(e){await ot(await me(`/admin/experts/${encodeURIComponent(e)}`,{method:"DELETE"}))}async function wM(){return ot(await me("/admin/notices"))}async function kM(e,t){const n={payload:jM(t)};return ot(e?await me(`/admin/notices/${encodeURIComponent(e)}`,{method:"PUT",body:JSON.stringify(n)}):await me("/admin/notices",{method:"POST",body:JSON.stringify(n)}))}function jM(e){const{id:t,...n}=e;return n}async function SM(e){await ot(await me(`/admin/notices/${encodeURIComponent(e)}`,{method:"DELETE"}))}async function E5(e){const t=new FormData;t.append("file",e);const n=await me("/storage/objects",{method:"POST",body:t});return(await ot(n)).url}function $M(e){return{id:"",regionId:e,name:"",shortDescription:"",description:"",address:"",thumbnailUrl:"",photos:[],hashtags:[],themes:[],hasTempleStay:!1,duration:"",admissionFee:"",venueKind:"명상지",organization:{name:""},externalLink:"",detailSections:[],facilities:[],programs:[],instructors:[],hidden:!1}}function CM(e){const t=e.reduce((n,r)=>{const i=Number.parseInt(r.id,10);return Number.isFinite(i)?Math.max(n,i):n},0);return String(t+1)}function To(){return{id:"",name:"",avatarUrl:"",specialties:[],regionIds:[],intro:"",degrees:[],certificates:[],careers:[],classTypes:[],hasCenter:!1,programs:[],reviews:[],hidden:!1}}const EM=new Set(["ADMIN","DEV","EMPLOYEE"]),_i=to(e=>({username:null,role:null,ready:!1,authenticated:!1,bootstrap:async()=>{const t=Ce();if(!t){e({username:null,role:null,ready:!0,authenticated:!1});return}try{const n=await fetch(`${t}/admin/auth/me`,{credentials:"include"});if(n.ok){const r=await n.json(),i=r.role??"";if(r.username&&EM.has(i)){e({username:r.username,role:i,ready:!0,authenticated:!0});return}}}catch{}e({username:null,role:null,ready:!0,authenticated:!1})},logout:async()=>{const t=Ce();if(t)try{await fetch(`${t}/admin/auth/logout`,{method:"POST",credentials:"include"})}catch{}e({username:null,role:null,ready:!0,authenticated:!1})}})),qe={colors:{primary50:"#f3eef8",primary100:"#e6dcf0",primary200:"#c9b8e0",primary300:"#a88bca",primary400:"#7a5aab",primary500:"#5c3d8f",primary600:"#4B0082",primary700:"#3d0069",primary800:"#2f0051",primary900:"#22003a",white:"#FFFFFF",warmCream:"#FFFAF8",buddingPeach:"#F5D8D0",charcoal:"#3D3D3D",warmGray:"#6B6B6B",text900:"#3D3D3D",text700:"#6B6B6B",border200:"#9B8A99",mutedMauve:"#9B8A99",dustyGold:"#C9A962",dustyRose:"#C9A090",bg50:"#FFFAF8",bg100:"#F5D8D0"},shadow:{soft:"0 12px 30px rgba(75, 0, 130, 0.1)"},radii:{pill:"999px",md:"12px",lg:"16px"}},PM=u.div`
  display: flex;
  min-height: 100vh;
  background: #0f0f12;
  color: #f4f4f5;
`,IM=u.aside`
  width: ${({$open:e})=>e?"240px":"0"};
  overflow: hidden;
  transition: width 0.2s ease;
  background: #18181b;
  border-right: 1px solid #27272a;
  flex-shrink: 0;
`,TM=u.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`,RM=u.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  border-bottom: 1px solid #27272a;
  background: #111114;
`,zM=u.main`
  flex: 1;
  padding: 20px;
  overflow: auto;
`,MM=u.button`
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
  border-left: 3px solid ${({$active:e})=>e?qe.colors.primary500:"transparent"};
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
  }
`,xn=u.div`
  background: linear-gradient(180deg, #1b1b1f 0%, #161619 100%);
  border: 1px solid #2a2a30;
  border-radius: ${qe.radii.lg};
  padding: 16px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02), 0 8px 24px rgba(0, 0, 0, 0.22);
`;u.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 12px;
`;u.div`
  background: #111114;
  border: 1px solid #27272a;
  border-radius: ${qe.radii.md};
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
`;const v0=u.table`
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
`,Le=u.button`
  padding: 8px 14px;
  border-radius: ${qe.radii.md};
  border: 1px solid
    ${({$variant:e})=>e==="danger"?"#7f1d1d":e==="primary"?qe.colors.primary600:"#3f3f46"};
  background: ${({$variant:e})=>e==="danger"?"#991b1b":e==="primary"?qe.colors.primary600:"transparent"};
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
  border-radius: ${qe.radii.md};
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
    border-color: ${qe.colors.primary500};
    box-shadow: 0 0 0 3px rgba(75, 0, 130, 0.25);
  }
`,On=u.textarea`
  width: 100%;
  min-height: 280px;
  padding: 10px;
  border-radius: ${qe.radii.md};
  border: 1px solid #3f3f46;
  background: #09090b;
  color: #e4e4e7;
  font-family: ui-monospace, monospace;
  font-size: 12px;
  line-height: 1.5;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:focus {
    outline: none;
    border-color: ${qe.colors.primary500};
    box-shadow: 0 0 0 3px rgba(75, 0, 130, 0.25);
  }
`,pe=u.label`
  display: block;
  font-size: 12px;
  color: #a1a1aa;
  margin-bottom: 4px;
`,fe=u.div`
  margin-bottom: 12px;
`,Zr=u.p`
  color: #f87171;
  font-size: 13px;
  margin: 8px 0;
`;u.iframe`
  width: 100%;
  height: min(70vh, 720px);
  border: 0;
  border-radius: ${qe.radii.lg};
  background: #000;
`;const AM=u.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #0f0f12;
  padding: 24px;
`,_M=u.h1`
  margin: 0 0 8px;
  font-size: 22px;
  color: #fff;
`;function NM(){const e=ft(),t=_i(d=>d.bootstrap),[n,r]=m.useState(""),[i,s]=m.useState(""),[l,a]=m.useState(!1),c=async d=>{d.preventDefault(),a(!0);try{if(await aM(n.trim(),i),await t(),!_i.getState().authenticated){Ye.error("스태프(ADMIN/DEV/EMPLOYEE) 계정만 접근할 수 있습니다.");return}e("/admin",{replace:!0})}catch(p){Ye.error(p instanceof Error?p.message:"로그인에 실패했습니다.")}finally{a(!1)}};return o.jsx(AM,{children:o.jsxs(xn,{style:{width:"100%",maxWidth:400},children:[o.jsx(_M,{children:"Admin 로그인"}),o.jsxs("form",{onSubmit:c,children:[o.jsxs(fe,{children:[o.jsx(pe,{children:"아이디"}),o.jsx(nt,{value:n,onChange:d=>r(d.target.value),autoComplete:"username",required:!0})]}),o.jsxs(fe,{children:[o.jsx(pe,{children:"비밀번호"}),o.jsx(nt,{value:i,onChange:d=>s(d.target.value),type:"password",autoComplete:"current-password",required:!0})]}),o.jsx(Le,{$variant:"primary",type:"submit",disabled:l,style:{width:"100%",marginTop:8},children:l?"로그인 중…":"로그인"})]})]})})}const DM=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({$compact:e})=>e?"8px":"12px"};
`,OM=u(xn)`
  width: 100%;
  padding: ${({$compact:e})=>e?"12px":"14px 12px"};
`,BM=u.h3`
  margin: 0;
  font-size: ${({$compact:e})=>e?"13px":"15px"};
  font-weight: 600;
  word-break: break-all;
`,FM=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: ${({$compact:e})=>e?"8px":"12px"};
`,fd=u.div`
  display: inline-flex;
  align-items: baseline;
  gap: 4px;
  padding: ${({$compact:e})=>e?"4px 9px":"5px 11px"};
  border-radius: ${qe.radii.pill};
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-size: ${({$compact:e})=>e?"11px":"12px"};
  color: #a1a1aa;

  strong {
    color: #fafafa;
    font-size: ${({$compact:e})=>e?"12px":"13px"};
    font-variant-numeric: tabular-nums;
  }
`,HM=u.div`
  width: 100%;
  min-width: 0;
`,UM=u.svg`
  display: block;
  width: 100%;
  overflow: visible;
  touch-action: none;
`,VM=ke`
  from { stroke-dashoffset: 1; }
  to { stroke-dashoffset: 0; }
`,WM=ke`
  from { opacity: 0; }
  to { opacity: 1; }
`,KM=u.path`
  stroke-dasharray: 1;
  stroke-dashoffset: 0;
  animation: ${VM} 0.7s ease forwards;
`,YM=u.path`
  animation: ${WM} 0.7s ease forwards;
`,GM=u.div`
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
`,H4=u.p`
  margin: 0;
  padding: ${({$compact:e})=>e?"20px 0":"32px 0"};
  text-align: center;
  color: #71717a;
  font-size: ${({$compact:e})=>e?"12px":"13px"};
`,ZM={top:28,right:8,bottom:36,left:36},qM={top:24,right:6,bottom:32,left:32};function QM(e){if(e<=0)return 4;const t=10**Math.floor(Math.log10(e)),n=e/t;return(n<=1?1:n<=2?2:n<=5?5:10)*t}function XM(e){const t=e.match(/^(\d{4})/);return t?Number(t[1]):new Date().getFullYear()}function JM(e,t){if(t==="month"){const r=e.split("-");return r.length>=2?`${Number(r[1])}월`:e}const n=e.split("-");return n.length>=3?`${Number(n[1])}/${Number(n[2])}`:e}function eA(e){return e==="teal"?{stroke:"#2dd4bf",dot:"#5eead4"}:e==="gold"?{stroke:"#fbbf24",dot:"#fde68a"}:{stroke:qe.colors.primary300,dot:qe.colors.primary200}}function tA(e,t,n){const r=[];for(let l=1;l<e.length;l++)e[l].year!==e[l-1].year&&r.push({x:(e[l-1].x+e[l].x)/2,yearBefore:e[l-1].year,yearAfter:e[l].year});const i=[];for(const l of e)i[i.length-1]!==l.year&&i.push(l.year);return{yearBands:i.map((l,a)=>({year:l,xStart:a===0?t:r[a-1].x,xEnd:a===i.length-1?n:r[a].x})),dividers:r}}function ml({title:e,series:t,loading:n,error:r,compact:i=!1,accent:s="purple",unit:l="회",emptyMessage:a="아직 표시할 데이터가 없습니다.",hideSummary:c=!1}){const d=m.useRef(null),[p,f]=m.useState(960),[h,g]=m.useState(null),b=m.useId().replace(/:/g,""),v=i?168:260,$=i?qM:ZM,x=eA(s);m.useEffect(()=>{const k=d.current;if(!k)return;const j=()=>{const z=k.getBoundingClientRect().width;z>0&&f(z)};j();const R=new ResizeObserver(j);return R.observe(k),window.addEventListener("resize",j),()=>{R.disconnect(),window.removeEventListener("resize",j)}},[t,n]);const L=m.useMemo(()=>{const k=(t==null?void 0:t.points)??[],j=(t==null?void 0:t.granularity)??"day",R=Math.max(120,p-$.left-$.right),z=v-$.top-$.bottom,T=(t==null?void 0:t.peak)??0,P=QM(T),E=k.length,A=k.map((H,M)=>{const G=E<=1?$.left+R/2:$.left+M/(E-1)*R,U=P>0?H.count/P:0,ne=$.top+z-U*z;return{key:H.key,label:H.label,count:H.count,x:G,y:ne,year:XM(H.key)}}),N=A.length>0?A.map((H,M)=>`${M===0?"M":"L"} ${H.x.toFixed(2)} ${H.y.toFixed(2)}`).join(" "):"",F=$.top+z,Y=$.left,Q=p-$.right,_=A.length>0?`${N} L ${A[A.length-1].x.toFixed(2)} ${F} L ${A[0].x.toFixed(2)} ${F} Z`:"",{yearBands:D,dividers:C}=tA(A,Y,Q),X=4,J=Array.from({length:X+1},(H,M)=>{const G=Math.round(P*M/X),U=$.top+z-(P>0?G/P*z:0);return{value:G,y:U}}),w=E<=12?1:E<=24?2:E<=60?5:7;return{plotted:A,linePath:N,areaPath:_,yearBands:D,dividers:C,yTicks:J,yMax:P,plotH:z,baseY:F,granularity:j,labelEvery:w}},[v,$,t,p]),y=h?L.plotted.find(k=>k.key===h)??null:null,S=k=>{var P;const j=(P=d.current)==null?void 0:P.getBoundingClientRect();if(!j||L.plotted.length===0)return;const R=k.clientX-j.left;let z=L.plotted[0],T=1/0;for(const E of L.plotted){const A=Math.abs(E.x-R);A<T&&(T=A,z=E)}z.key!==h&&g(z.key)},I=`${L.granularity}-${L.plotted.length}-${(t==null?void 0:t.total)??0}`;return o.jsxs(OM,{$compact:i,children:[o.jsx(DM,{$compact:i,children:o.jsx(BM,{$compact:i,children:e})}),r&&o.jsx(Zr,{children:r}),t&&!c&&o.jsxs(FM,{$compact:i,children:[o.jsxs(fd,{$compact:i,children:["합계",o.jsx("strong",{children:t.total.toLocaleString()})]}),o.jsxs(fd,{$compact:i,children:["평균",o.jsx("strong",{children:t.average.toLocaleString()})]}),o.jsxs(fd,{$compact:i,children:["최대",o.jsx("strong",{children:t.peak.toLocaleString()})]})]}),n&&!t?o.jsx(H4,{$compact:i,children:"그래프 데이터를 불러오는 중…"}):L.plotted.length===0?o.jsx(H4,{$compact:i,children:a}):o.jsxs(HM,{ref:d,style:{position:"relative",height:v},children:[o.jsxs(UM,{viewBox:`0 0 ${p} ${v}`,style:{height:v},role:"img","aria-label":e,onMouseMove:S,onMouseLeave:()=>g(null),children:[o.jsx("defs",{children:o.jsxs("linearGradient",{id:`area-${b}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[o.jsx("stop",{offset:"0%",stopColor:x.stroke,stopOpacity:.38}),o.jsx("stop",{offset:"70%",stopColor:x.stroke,stopOpacity:.06}),o.jsx("stop",{offset:"100%",stopColor:x.stroke,stopOpacity:0})]})}),L.yTicks.map(k=>o.jsxs("g",{children:[o.jsx("line",{x1:$.left,x2:p-$.right,y1:k.y,y2:k.y,stroke:"rgba(255,255,255,0.06)",strokeDasharray:"4 4"}),o.jsx("text",{x:$.left-10,y:k.y+4,textAnchor:"end",fill:"#71717a",fontSize:i?9:10,children:k.value.toLocaleString()})]},k.value)),o.jsx("line",{x1:$.left,x2:p-$.right,y1:L.baseY,y2:L.baseY,stroke:"rgba(255,255,255,0.2)",strokeWidth:1}),L.yearBands.map(k=>{const j=(k.xStart+k.xEnd)/2;return o.jsxs("g",{children:[o.jsx("rect",{x:k.xStart,y:$.top-28,width:Math.max(k.xEnd-k.xStart,1),height:20,fill:"rgba(75, 0, 130, 0.08)",rx:4}),o.jsxs("text",{x:j,y:$.top-14,textAnchor:"middle",fill:"#d4d4d8",fontSize:i?11:12,fontWeight:"600",children:[k.year,"년"]})]},k.year)}),L.dividers.map(k=>o.jsx("line",{x1:k.x,x2:k.x,y1:$.top-8,y2:L.baseY,stroke:"rgba(255,255,255,0.14)",strokeWidth:1},`${k.yearBefore}-${k.yearAfter}`)),y&&o.jsx("line",{x1:y.x,x2:y.x,y1:$.top,y2:L.baseY,stroke:x.stroke,strokeOpacity:.35,strokeWidth:1,strokeDasharray:"3 3"}),L.areaPath&&o.jsx(YM,{d:L.areaPath,fill:`url(#area-${b})`,stroke:"none"},`area-${I}`),L.linePath&&o.jsx(KM,{d:L.linePath,pathLength:1,fill:"none",stroke:x.stroke,strokeWidth:i?2:2.5,strokeLinejoin:"round",strokeLinecap:"round"},`line-${I}`),L.plotted.map((k,j)=>j%L.labelEvery===0||j===L.plotted.length-1?o.jsx("text",{x:k.x,y:L.baseY+(i?16:18),textAnchor:"middle",fill:"#a1a1aa",fontSize:i?9:10,children:JM(k.key,L.granularity)},`lbl-${k.key}`):null),y&&o.jsxs("g",{style:{pointerEvents:"none"},children:[o.jsx("circle",{cx:y.x,cy:y.y,r:i?8:10,fill:x.stroke,opacity:.18}),o.jsx("circle",{cx:y.x,cy:y.y,r:i?4.5:5.5,fill:x.dot,stroke:"#0f0f12",strokeWidth:2})]})]}),y&&o.jsxs(GM,{style:{left:y.x,top:y.y},children:[o.jsx("span",{className:"tip-label",children:y.label}),o.jsxs("span",{className:"tip-value",children:[y.count.toLocaleString(),l]})]})]})]})}const nA=[{value:7,label:"최근 7일"},{value:14,label:"최근 14일"},{value:30,label:"최근 30일"},{value:60,label:"최근 60일"},{value:90,label:"최근 90일"}],rA=[{value:6,label:"최근 6개월"},{value:12,label:"최근 12개월"},{value:24,label:"최근 24개월"}];u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
`;const hd=u.select`
  padding: 6px 10px;
  border-radius: ${qe.radii.md};
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
    border-color: ${qe.colors.primary500};
    box-shadow: 0 0 0 3px rgba(75, 0, 130, 0.22);
  }
`,iA=u.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
`,oA=u.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
`,sA=u.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
`,U4=u.h3`
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
    background: ${qe.colors.primary500};
  }
`,V4=u.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 10px;
`,W4=u.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  & + & {
    margin-top: 20px;
  }
`,lA=u.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,aA=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(132px, 1fr));
  gap: 8px;
  margin-bottom: 20px;
`,ui=u.div`
  background: linear-gradient(180deg, #141417 0%, #111114 100%);
  border: 1px solid #27272a;
  border-radius: ${qe.radii.md};
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
`;function cA(){const[e,t]=m.useState(null),[n,r]=m.useState(null),[i,s]=m.useState(null),[l,a]=m.useState(null),[c,d]=m.useState(""),[p,f]=m.useState("day"),[h,g]=m.useState(30),[b,v]=m.useState(null),[$,x]=m.useState(null),[L,y]=m.useState(!1),S=void 0,I=p==="day"?nA:rA,k=m.useCallback(async()=>{v(null);try{t(await cM())}catch(P){v(P instanceof Error?P.message:"지표를 불러오지 못했습니다.")}},[]),j=m.useCallback(async()=>{y(!0),x(null);try{const[P,E,A]=await Promise.all([uM(p,h),dM(p,h),pM(p,h)]);r(P),s(E),a(A)}catch(P){x(P instanceof Error?P.message:"그래프 데이터를 불러오지 못했습니다.")}finally{y(!1)}},[p,h]),R=m.useCallback(async()=>{await Promise.all([k(),j()])},[j,k]);m.useEffect(()=>{j()},[j]),m.useEffect(()=>{k();const P=setInterval(k,3e4);return()=>clearInterval(P)},[k]),m.useEffect(()=>{const P=(l==null?void 0:l.endpoints)??[];if(P.length===0){d("");return}d(E=>P.some(A=>A.uri===E)?E:P[0].uri)},[l]);const z=m.useMemo(()=>(l==null?void 0:l.endpoints.find(P=>P.uri===c))??null,[l,c]),T=P=>{f(P),g(P==="day"?30:12)};return o.jsxs("div",{children:[o.jsxs(iA,{children:[o.jsx(sA,{children:"트래픽·운영 현황"}),o.jsxs(oA,{children:[o.jsxs(hd,{value:p,onChange:P=>T(P.target.value),"aria-label":"집계 단위",children:[o.jsx("option",{value:"day",children:"일별"}),o.jsx("option",{value:"month",children:"월별"})]}),o.jsx(hd,{value:h,onChange:P=>g(Number(P.target.value)),"aria-label":"조회 기간",children:I.map(P=>o.jsx("option",{value:P.value,children:P.label},P.value))}),o.jsx(Le,{$variant:"ghost",type:"button",onClick:R,children:"새로고침"})]})]}),b&&o.jsx(Zr,{children:b}),$&&o.jsx(Zr,{children:$}),e&&o.jsxs(aA,{children:[o.jsxs(ui,{children:[o.jsx("span",{children:"누적 HTTP"}),o.jsx("strong",{children:e.totalHttpRequests.toLocaleString()})]}),o.jsxs(ui,{children:[o.jsx("span",{children:"회원"}),o.jsx("strong",{children:e.membersCount.toLocaleString()})]}),o.jsxs(ui,{children:[o.jsx("span",{children:"명상지·센터"}),o.jsx("strong",{children:e.placesCount.toLocaleString()})]}),o.jsxs(ui,{children:[o.jsx("span",{children:"전문가"}),o.jsx("strong",{children:e.expertsCount.toLocaleString()})]}),o.jsxs(ui,{children:[o.jsx("span",{children:"지역"}),o.jsx("strong",{children:e.regionsCount.toLocaleString()})]}),o.jsxs(ui,{children:[o.jsx("span",{children:"공지"}),o.jsx("strong",{children:e.noticesCount.toLocaleString()})]})]}),o.jsxs(W4,{children:[o.jsx(V4,{children:o.jsx(U4,{children:"주요 추이"})}),o.jsxs(lA,{children:[o.jsx(ml,{title:"HTTP 요청 추이",series:n,loading:L,unit:"회",compact:!0,emptyMessage:"아직 기록된 HTTP 요청이 없습니다."}),o.jsx(ml,{title:`회원 수 추이 (현재 ${(i==null?void 0:i.currentTotal.toLocaleString())??"-"}명)`,series:(i==null?void 0:i.cumulativeSeries)??null,loading:L,accent:"teal",unit:"명",compact:!0,emptyMessage:"아직 가입한 회원이 없습니다."}),o.jsx(ml,{title:"신규 가입 추이",series:(i==null?void 0:i.signupSeries)??null,loading:L,accent:"gold",unit:"명",compact:!0,emptyMessage:"선택한 기간에 신규 가입이 없습니다."})]})]}),o.jsxs(W4,{children:[o.jsxs(V4,{children:[o.jsx(U4,{children:"API별 호출량"}),l&&l.endpoints.length>0?o.jsx(hd,{value:c,onChange:P=>d(P.target.value),"aria-label":"API 선택",children:l.endpoints.map(P=>o.jsx("option",{value:P.uri,children:P.uri},P.uri))}):null]}),L&&!l?o.jsx(xn,{children:o.jsx("p",{style:{margin:0,color:"#71717a",textAlign:"center",padding:"20px 0",fontSize:13},children:"API 그래프를 불러오는 중…"})}):z?o.jsx(ml,{title:z.uri,series:z.series,compact:!0,emptyMessage:"호출 기록 없음"}):o.jsx(xn,{children:o.jsx("p",{style:{margin:0,color:"#71717a",textAlign:"center",padding:"20px 0",fontSize:13},children:"API 호출 기록이 쌓이면 URI별 그래프가 표시됩니다."})})]}),S]})}function K4(e){return Array.from(e.dataTransfer.types).includes("Files")}function uA({label:e,value:t,onChange:n}){const r=m.useRef(null),[i,s]=m.useState(!1),[l,a]=m.useState(null),[c,d]=m.useState(!1),p=async h=>{s(!0),a(null);try{n(await E5(h))}catch(g){a(g instanceof Error?g.message:"업로드 실패 (MinIO 활성화·로그인 확인)")}finally{s(!1)}},f=h=>{var b;if(!K4(h))return;h.preventDefault(),d(!1);const g=(b=h.dataTransfer.files)==null?void 0:b[0];g&&p(g)};return o.jsxs(fe,{children:[e?o.jsx(pe,{children:e}):null,o.jsxs("div",{onDragOver:h=>{K4(h)&&(h.preventDefault(),d(!0))},onDragLeave:h=>{h.currentTarget.contains(h.relatedTarget)||d(!1)},onDrop:f,style:{display:"flex",flexDirection:"column",gap:8,padding:8,margin:-8,borderRadius:12,transition:"background 0.12s, box-shadow 0.12s",background:c?"rgba(124, 58, 237, 0.1)":"transparent",boxShadow:`inset 0 0 0 2px ${c?"#7c3aed":"transparent"}`},children:[o.jsxs("div",{style:{display:"flex",gap:8,alignItems:"stretch"},children:[o.jsx(nt,{value:t,onChange:h=>n(h.target.value),placeholder:"이미지 URL · 업로드 · 파일 끌어다 놓기"}),o.jsx(Le,{type:"button",disabled:i,onClick:()=>{var h;return(h=r.current)==null?void 0:h.click()},children:i?"…":"업로드"})]}),t?o.jsx("img",{src:t,alt:"",style:{maxHeight:96,maxWidth:"100%",borderRadius:8,objectFit:"cover"}}):o.jsx("p",{style:{margin:0,color:c?"#c4b5fd":"#71717a",fontSize:12},children:c?"여기에 놓으면 업로드됩니다":"이미지 파일을 이 영역에 끌어다 놓을 수 있어요"})]}),o.jsx("input",{ref:r,type:"file",accept:"image/*",hidden:!0,onChange:h=>{var b;const g=(b=h.target.files)==null?void 0:b[0];g&&p(g),h.target.value=""}}),l?o.jsx("p",{style:{margin:"6px 0 0",color:"#f87171",fontSize:12},children:l}):null]})}function P5(e,t){const n=e.trim(),r=(t??[]).map(i=>i.trim()).filter(i=>i&&i!==n);return n?[n,...r]:r}function dA(e){const t=e.map(n=>n.trim()).filter(Boolean);return{imageUrl:t[0]??"",imageUrls:t.slice(1)}}const pA=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  border-radius: 12px;
  padding: 8px;
  margin: -8px;
  transition: background 0.12s, box-shadow 0.12s;
  background: ${({$fileDragOver:e})=>e?"rgba(124, 58, 237, 0.1)":"transparent"};
  box-shadow: ${({$fileDragOver:e})=>e?"inset 0 0 0 2px #7c3aed":"inset 0 0 0 2px transparent"};
`,fA=u.div`
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
`,hA=u.span`
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
`,gA=u.button`
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
`,mA=u.button`
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
`,xA=u.p`
  margin: 8px 0 0;
  font-size: 12px;
  color: #71717a;
  line-height: 1.45;
`,LA=u.p`
  margin: 6px 0 0;
  color: #f87171;
  font-size: 12px;
`;function xl(e){return Array.from(e.dataTransfer.types).includes("Files")}function yA(e,t,n){if(t===n||t<0||n<0||t>=e.length||n>=e.length)return e;const r=[...e],[i]=r.splice(t,1);return r.splice(n,0,i),r}function Y4({label:e="사진",photos:t,onChange:n,maxPhotos:r=10,hint:i="첫 번째 사진이 대표·목록 썸네일입니다. 파일을 끌어다 놓으면 업로드되고, 사진끼리 드래그하면 순서가 바뀝니다."}){const s=m.useRef(null),[l,a]=m.useState(!1),[c,d]=m.useState(null),[p,f]=m.useState(null),[h,g]=m.useState(null),[b,v]=m.useState(!1),$=j=>n(j.slice(0,r)),x=async j=>{if(!(j!=null&&j.length))return;const R=r-t.length;if(R<=0){d(`사진은 최대 ${r}장까지 등록할 수 있습니다.`);return}a(!0),d(null);try{const z=[...t];for(const T of Array.from(j).slice(0,R)){const P=await E5(T);z.includes(P)||z.push(P)}$(z)}catch(z){d(z instanceof Error?z.message:"업로드 실패 (MinIO·로그인 확인)")}finally{a(!1)}},L=j=>{p!==null&&($(yA(t,p,j)),f(null),g(null))},y=t.length<r,S=j=>{!xl(j)||!y||(j.preventDefault(),v(!0))},I=j=>{j.currentTarget.contains(j.relatedTarget)||v(!1)},k=j=>{xl(j)&&(j.preventDefault(),v(!1),x(j.dataTransfer.files))};return o.jsxs(fe,{children:[o.jsx(pe,{children:e}),o.jsxs(pA,{$fileDragOver:b,onDragOver:S,onDragLeave:I,onDrop:k,children:[t.map((j,R)=>o.jsxs(fA,{draggable:!0,$dragging:p===R,$dragOver:h===R,onDragStart:()=>f(R),onDragEnd:()=>{f(null),g(null)},onDragOver:z=>{xl(z)||(z.preventDefault(),g(R))},onDragLeave:()=>g(z=>z===R?null:z),onDrop:z=>{xl(z)||(z.preventDefault(),L(R))},children:[o.jsx("img",{src:j,alt:""}),R===0?o.jsx(hA,{children:"대표"}):null,o.jsx(gA,{type:"button","aria-label":"사진 삭제",onClick:()=>$(t.filter((z,T)=>T!==R)),children:"×"})]},`${j}-${R}`)),y?o.jsx(mA,{type:"button",disabled:l,$fileDragOver:b,onClick:()=>{var j;return(j=s.current)==null?void 0:j.click()},"aria-label":"사진 추가",children:l?"…":"+"}):null]}),o.jsx("input",{ref:s,type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:j=>void x(j.target.files).finally(()=>{j.target.value=""})}),o.jsx(xA,{children:i}),c?o.jsx(LA,{children:c}):null]})}const vA={width:"100%",padding:8,borderRadius:8,background:"#09090b",color:"#fff",border:"1px solid #3f3f46"};function bA({label:e="지역",value:t,onChange:n}){return o.jsxs(fe,{children:[o.jsx(pe,{children:e}),o.jsx("select",{value:t,onChange:r=>n(r.target.value),style:vA,children:Gr.map(r=>o.jsx("option",{value:r.id,children:r.name},r.id))})]})}const V1=[{id:"KR-11",names:["서울특별시","서울"]},{id:"KR-26",names:["부산광역시","부산"]},{id:"KR-27",names:["대구광역시","대구"]},{id:"KR-28",names:["인천광역시","인천"]},{id:"KR-29",names:["광주광역시","광주"]},{id:"KR-30",names:["대전광역시","대전"]},{id:"KR-31",names:["울산광역시","울산"]},{id:"KR-50",names:["세종특별자치시","세종"]},{id:"KR-41",names:["경기도","경기"]},{id:"KR-42",names:["강원특별자치도","강원도","강원"]},{id:"KR-43",names:["충청북도","충북"]},{id:"KR-44",names:["충청남도","충남"]},{id:"KR-45",names:["전북특별자치도","전라북도","전북"]},{id:"KR-46",names:["전라남도","전남"]},{id:"KR-47",names:["경상북도","경북"]},{id:"KR-48",names:["경상남도","경남"]},{id:"KR-49",names:["제주특별자치도","제주도","제주"]}];function G4(e){return typeof e=="number"?e:parseFloat(String(e??""))}function Z4(e){var i,s;const t=G4(((i=e.point)==null?void 0:i.y)??e.y),n=G4(((s=e.point)==null?void 0:s.x)??e.x);if(!Number.isFinite(t)||!Number.isFinite(n))return null;const r=(e.roadAddress||e.jibunAddress||e.address||"").trim();return r?{address:r,lat:t,lng:n,precision:"exact"}:null}function b0(){var e,t;return(t=(e=window.naver)==null?void 0:e.maps)==null?void 0:t.Service}function I5(e){var n,r;if(e==="OK"||e===0)return!0;const t=(r=(n=b0())==null?void 0:n.Status)==null?void 0:r.OK;return t!=null&&e===t}function wA(e){var n;const t=(n=b0())==null?void 0:n.Status;if(t){for(const[r,i]of Object.entries(t))if(i===e&&r!=="OK")return r}return String(e)}function kA(e){var a,c;const t=e,n=[],r=new Set,i=d=>{!d||r.has(d.address)||(r.add(d.address),n.push(d))},s=((a=t.v2)==null?void 0:a.addresses)??[];for(const d of s)i(Z4(d));const l=((c=t.result)==null?void 0:c.items)??t.addresses??[];for(const d of l)i(Z4(d));return n}function jA(e){const t=b0(),n=t==null?void 0:t.geocode;return n?new Promise((r,i)=>{try{n.call(t,{query:e},(s,l)=>{r({status:s,results:I5(s)?kA(l):[]})})}catch(s){i(s instanceof Error?s:new Error("주소 검색 호출 실패"))}}):Promise.reject(new Error("지도 API(geocoder)가 로드되지 않았습니다."))}function q4(e){return e.replace(/\s+/g,"")}function T5(e){const t=q4(e);for(const n of V1)for(const r of[...n.names].sort((i,s)=>s.length-i.length))if(t.includes(q4(r)))return n.id;return null}function SA(e,t){const n=Sa.find(r=>r.id===t)??Sa[0];return{address:e.trim(),lat:(n.minLat+n.maxLat)/2,lng:(n.minLng+n.maxLng)/2,approximate:!0,precision:"region"}}function $A(e){var d,p;const t=new Set,n=[],r=f=>{const h=f.trim().replace(/\s+/g," ");h.length>=2&&!t.has(h)&&(t.add(h),n.push(h))},i=e.trim().replace(/\s+/g," ");r(i);const s=(d=i.split(/[,，]/)[0])==null?void 0:d.trim();s&&s!==i&&r(s);const l=i.split(/\s+/).filter(Boolean);for(let f=l.length-1;f>=1;f--)r(l.slice(0,f).join(" "));const a=l[l.length-1];if(a&&a.length>=2&&!/[시군구읍면동로]$/.test(a)){const f=l.slice(0,-1).join(" ");r(`${f} ${a}시`.trim()),r(`${f} ${a}군`.trim()),r(`${f} ${a}구`.trim()),r(`${a}시`),r(`${a}군`),r(`${a}구`)}for(const f of V1)for(const h of f.names)i.includes(h)&&r(h);const c=T5(i);if(c){const f=(p=V1.find(h=>h.id===c))==null?void 0:p.names[0];f&&r(f),r(lo(c))}return n}function CA(e,t,n){return e.map(r=>({...r,approximate:t||r.approximate,precision:t?n:r.precision??"exact"}))}function R5(e){return e.precision==="region"?11:e.approximate||e.precision==="area"?14:17}async function W1(e){const t=e.trim();if(!t)return[];const n=$A(t);let r="OK";for(let s=0;s<n.length;s++){const l=n[s],{status:a,results:c}=await jA(l);if(r=a,c.length>0)return CA(c,s>0,s>0?"area":"exact")}const i=T5(t);if(i)return[SA(t,i)];if(!I5(r))throw new Error(`주소 검색 실패 (${wA(r)})`);return[]}const EA=u.div`
  display: flex;
  align-items: stretch;
  gap: 8px;
`,PA=u.div`
  flex: 1;
  min-width: 0;

  input {
    width: 100%;
    height: 100%;
  }
`,IA=u.button`
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
`;function TA(){return o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("circle",{cx:"11",cy:"11",r:"7"}),o.jsx("line",{x1:"16.5",y1:"16.5",x2:"21",y2:"21"})]})}function RA(){return o.jsx("svg",{className:"spin",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:o.jsx("path",{d:"M12 3a9 9 0 1 1-6.36 15.36",strokeLinecap:"round"})})}const zA=u.ul`
  list-style: none;
  margin: 8px 0 0;
  padding: 0;
  border: 1px solid #3f3f46;
  border-radius: 8px;
  overflow: hidden;
  max-height: 160px;
  overflow-y: auto;
`,MA=u.button`
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
`,AA=u.div`
  margin-top: 12px;
  width: 100%;
  height: 220px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #3f3f46;
  background: #27272a;
`,_A=u.p`
  margin: 12px 0 0;
  font-size: 12px;
  color: #71717a;
  line-height: 1.45;
`,NA=u.p`
  margin: 8px 0 0;
  font-size: 12px;
  color: #86efac;
`,DA=u.p`
  margin: 8px 0 0;
  font-size: 12px;
  color: #fcd34d;
  line-height: 1.45;
`,Q4=u.p`
  margin: 6px 0 0;
  font-size: 12px;
  color: #71717a;
  line-height: 1.45;
`;async function Ro(){await new Promise(e=>{requestAnimationFrame(()=>requestAnimationFrame(()=>e()))})}function OA({value:e,lat:t,lng:n,onChange:r,onCoordsChange:i}){const s=m.useRef(null),l=m.useRef(null),a=m.useRef(null),c=m.useRef(i);c.current=i;const d=m.useRef(!1),[p,f]=m.useState(e),[h,g]=m.useState([]),[b,v]=m.useState(null),[$,x]=m.useState(!1),[L,y]=m.useState(null),[S,I]=m.useState(!1),k="233s0l2jzo".trim();m.useEffect(()=>{f(e),e.trim()||(v(null),I(!1),g([]))},[e]);const j=m.useCallback((T,P,E)=>{var _,D,C;const N=window.naver.maps,F=s.current;if(!(N!=null&&N.Map)||!N.LatLng||!N.Marker||!F)return;const Y=new N.LatLng(T,P);l.current?l.current.setCenter(Y):l.current=new N.Map(F,{center:Y,zoom:E,scrollWheel:!0,pinchZoom:!0,zoomControl:!0,mapTypeControl:!1,draggable:!0}),a.current&&a.current.setMap(null);const Q=new N.Marker({position:Y,map:l.current,draggable:!0});a.current=Q,(D=(_=N.Event)==null?void 0:_.addListener)==null||D.call(_,Q,"dragend",()=>{var H;const X=Q.getPosition(),J=X.lat(),w=X.lng();d.current=!0,I(!0),(H=c.current)==null||H.call(c,J,w)}),(C=N.Event)==null||C.trigger(l.current,"resize")},[]),R=m.useCallback((T,P)=>{var E;d.current=!1,j(T.lat,T.lng,R5(T)),v(T),I(!T.approximate),(E=c.current)==null||E.call(c,T.lat,T.lng),(P==null?void 0:P.syncAddress)!==!1&&!T.approximate&&r(T.address)},[r,j]),z=m.useCallback(async T=>{const P=(T??p).trim();if(!P){y("검색할 주소를 입력하세요.");return}y(null),x(!0),I(!1);try{if(!k){y(".env에 VITE_NAVER_MAP_CLIENT_ID를 설정하면 지도에서 주소를 확인할 수 있습니다."),r(P);return}await B1(k),await Ro();const E=await W1(P);if(g(E),E.length===0){y("위치를 찾지 못했습니다. 시·군·구 이름이나 더 구체적인 주소로 다시 검색해 보세요.");return}await Ro(),R(E[0],{syncAddress:!E[0].approximate})}catch(E){y(E instanceof Error?E.message:"주소 검색 실패")}finally{x(!1)}},[k,r,p,R]);return m.useEffect(()=>{let T=!1;const P=Number.isFinite(t)&&Number.isFinite(n);return(async()=>{if(k)try{if(await B1(k),T)return;if(await Ro(),P){j(t,n,16),I(!0);return}if(!e.trim())return;const E=await W1(e);if(T||E.length===0)return;const A=E.find(N=>N.address===e)??E[0];await Ro(),T||R(A,{syncAddress:!1})}catch{}})(),()=>{T=!0}},[]),o.jsxs(fe,{children:[o.jsx(pe,{children:"주소 (검색 후 지도에서 확인)"}),o.jsxs(EA,{children:[o.jsx(PA,{children:o.jsx(nt,{value:p,onChange:T=>{f(T.target.value),I(!1)},onKeyDown:T=>{T.key==="Enter"&&(T.preventDefault(),z())},placeholder:"예: 서울특별시 종로구 ..."})}),o.jsx(IA,{type:"button",onClick:()=>void z(),disabled:$,"aria-label":$?"주소 검색 중":"주소 검색",title:$?"검색 중…":"검색",children:$?o.jsx(RA,{}):o.jsx(TA,{})})]}),o.jsxs(Q4,{children:["정확한 도로명·지번이 없어도 「강릉」, 「제주」, 「종로구」처럼 지역명만으로 대략적인 위치를 표시합니다. 검색 후 ",o.jsx("strong",{children:"핀을 드래그"}),"해 정확한 위치로 옮길 수 있습니다."]}),L&&o.jsx(Zr,{children:L}),h.length>1&&o.jsx(zA,{children:h.map(T=>o.jsx("li",{children:o.jsx(MA,{type:"button",$active:(b==null?void 0:b.address)===T.address,onClick:()=>void Ro().then(()=>R(T)),children:T.address})},`${T.address}-${T.lat}`))}),k?o.jsxs(o.Fragment,{children:[o.jsx(AA,{ref:s,"aria-label":"주소 확인 지도"}),!b&&o.jsx(_A,{children:"검색하면 지도에서 위치를 확인할 수 있습니다."})]}):o.jsx(Q4,{children:".env에 VITE_NAVER_MAP_CLIENT_ID를 설정하면 지도 미리보기가 표시됩니다."}),S&&b&&o.jsxs(NA,{children:["✓ 지도에서 확인됨 — ",b.address]}),!S&&(b==null?void 0:b.approximate)&&o.jsxs(DA,{children:["◎ 대략적인 위치 — ",b.precision==="region"?"시·도":"지역"," 단위로 표시됩니다.",b.address!==p.trim()&&b.precision!=="region"?` (${b.address})`:""]})]})}const X4=[{id:"text",label:"텍스트",group:"기본 블록",prefix:""},{id:"h1",label:"제목1",group:"기본 블록",prefix:"# ",hint:"#"},{id:"h2",label:"제목2",group:"기본 블록",prefix:"## ",hint:"##"},{id:"h3",label:"제목3",group:"기본 블록",prefix:"### ",hint:"###"},{id:"ul",label:"글머리 기호",group:"기본 블록",prefix:"- ",hint:"-"},{id:"ol",label:"번호 목록",group:"기본 블록",prefix:"1. ",hint:"1."},{id:"quote",label:"인용",group:"기본 블록",prefix:"> ",hint:">"},{id:"hr",label:"구분선",group:"기본 블록",prefix:`---
`,hint:"---"}],BA=u.div`
  position: relative;
`,FA=u(On)`
  min-height: ${({$minHeight:e})=>e}px;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.55;
  resize: vertical;
`,HA=u.div`
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
`,UA=u.div`
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
`,VA=u.div`
  padding: 8px 12px 4px;
  font-size: 11px;
  font-weight: 600;
  color: #71717a;
`,WA=u.button`
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
`,KA=u.div`
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
`,YA=u.p`
  margin: 6px 0 0;
  font-size: 12px;
  color: #71717a;
`;function z5(e,t){return e.lastIndexOf(`
`,t-1)+1}function GA(e,t){const n=z5(e,t),r=e.slice(n,t),i=r.lastIndexOf("/");if(i<0||r.slice(0,i).trim()!=="")return null;const l=r.slice(i+1);return l.includes(" ")||l.includes(`
`)?null:{slashStart:n+i,query:l,selected:0}}function ZA(e,t,n,r){const i=z5(e,t);return{next:e.slice(0,i)+r+e.slice(n),nextCursor:i+r.length}}function Vl({label:e,value:t,onChange:n,placeholder:r,minHeight:i=100,hint:s="/ 를 입력하면 마크다운 블록을 선택할 수 있습니다."}){const l=m.useRef(null),[a,c]=m.useState(null),d=m.useMemo(()=>{if(!a)return[];const x=a.query.trim().toLowerCase();return x?X4.filter(L=>{var y;return L.label.toLowerCase().includes(x)||L.id.includes(x)||(((y=L.hint)==null?void 0:y.toLowerCase().includes(x))??!1)}):X4},[a]),p=m.useCallback(()=>c(null),[]),f=m.useCallback(x=>{const L=l.current;if(!a||!L)return;const y=L.selectionStart??t.length,{next:S,nextCursor:I}=ZA(t,a.slashStart,y,x.prefix);n(S),p(),requestAnimationFrame(()=>{L.focus(),L.setSelectionRange(I,I)})},[p,a,n,t]),h=m.useCallback((x,L)=>{const y=GA(x,L);if(!y){c(null);return}c(S=>{const I=S&&S.slashStart===y.slashStart?S.selected:0;return{...y,selected:I}})},[]);m.useEffect(()=>{if(a){if(d.length===0){c(null);return}a.selected>=d.length&&c({...a,selected:d.length-1})}},[d.length,a]);const g=x=>{const L=x.target.value,y=x.target.selectionStart??L.length;n(L),h(L,y)},b=x=>{if(!(!a||d.length===0)){if(x.key==="ArrowDown"){x.preventDefault(),c(L=>L&&{...L,selected:Math.min(L.selected+1,d.length-1)});return}if(x.key==="ArrowUp"){x.preventDefault(),c(L=>L&&{...L,selected:Math.max(L.selected-1,0)});return}if(x.key==="Enter"&&!x.shiftKey){x.preventDefault(),f(d[a.selected]);return}x.key==="Escape"&&(x.preventDefault(),p())}},v=()=>{const x=l.current;x&&h(t,x.selectionStart??t.length)};let $="";return o.jsxs(fe,{children:[o.jsx(pe,{children:e}),o.jsxs(BA,{children:[o.jsx(FA,{ref:l,$minHeight:i,value:t,onChange:g,onKeyDown:b,onClick:v,onBlur:()=>window.setTimeout(p,120),placeholder:r,spellCheck:!1}),a&&d.length>0&&o.jsxs(HA,{onMouseDown:x=>x.preventDefault(),children:[o.jsxs(UA,{children:["/",o.jsx("span",{children:a.query||"검색어를 입력하세요"})]}),d.map((x,L)=>{const y=x.group!==$;return $=x.group,o.jsxs("div",{children:[y?o.jsx(VA,{children:x.group}):null,o.jsxs(WA,{type:"button",$active:a.selected===L,onMouseEnter:()=>c(S=>S&&{...S,selected:L}),onClick:()=>f(x),children:[o.jsx("span",{children:x.label}),x.hint?o.jsx("kbd",{children:x.hint}):null]})]},x.id)}),o.jsxs(KA,{children:[o.jsx("span",{children:"메뉴 닫기"}),o.jsx("kbd",{children:"esc"})]})]})]}),o.jsx(YA,{children:s})]})}const qA=u.div`
  width: 100%;
  height: 180px;
  border-radius: ${({theme:e})=>e.radii.lg};
  overflow: hidden;
  background: ${({theme:e})=>e.colors.bg100};
  border: 1px solid ${({theme:e})=>e.colors.border200};
`,J4=u.div`
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
`;async function QA(){await new Promise(e=>{requestAnimationFrame(()=>requestAnimationFrame(()=>e()))})}function XA({address:e,lat:t,lng:n}){const r=m.useRef(null),i=m.useRef(null),s=m.useRef(null),[l,a]=m.useState("idle"),[c,d]=m.useState(!1),p="233s0l2jzo".trim(),f=e.trim(),h=Number.isFinite(t)&&Number.isFinite(n);return m.useEffect(()=>{if(!f&&!h){a("idle"),d(!1),i.current=null,s.current=null;return}if(!p){a("no-key");return}let g=!1;const b=window.setTimeout(()=>{(async()=>{var v;a("loading");try{if(await B1(p),g)return;await QA();let $,x,L,y;if(h)$=t,x=n,L=16,y=!1;else{const j=await W1(f);if(g)return;const R=j.find(z=>z.address===f)??j[0];if(!R){a("error"),d(!1);return}$=R.lat,x=R.lng,L=R5(R),y=!!R.approximate}const S=r.current;if(!S||g)return;const I=window.naver,k=new I.maps.LatLng($,x);if(!i.current)i.current=new I.maps.Map(S,{center:k,zoom:L,scrollWheel:!1,mapTypeControl:!1,zoomControl:!1,scaleControl:!1});else{const j=i.current;j.setCenter(k),j.setZoom(L)}s.current&&s.current.setMap(null),s.current=new I.maps.Marker({position:k,map:i.current}),(v=I.maps.Event)==null||v.trigger(i.current,"resize"),g||(d(y),a("ready"))}catch{g||(d(!1),a("error"))}})()},350);return()=>{g=!0,window.clearTimeout(b)}},[p,f,h,t,n]),!f&&!h?o.jsxs(J4,{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"주소를 입력하면 지도가 표시됩니다"]}):l==="no-key"?o.jsxs(J4,{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2","aria-hidden":"true",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),f,o.jsx(Ll,{children:"VITE_NAVER_MAP_CLIENT_ID 설정 시 지도 미리보기가 표시됩니다."})]}):o.jsxs(o.Fragment,{children:[o.jsx(qA,{ref:r,"aria-label":"위치 미리보기 지도"}),l==="loading"&&o.jsx(Ll,{children:"지도 불러오는 중…"}),l==="ready"&&c&&o.jsx(Ll,{children:"대략적인 위치입니다. 정확한 주소 검색을 권장합니다."}),l==="error"&&o.jsx(Ll,{children:"지도를 표시하지 못했습니다. 시·군·구 이름으로 다시 입력해 보세요."})]})}const JA=.6,e_=2.4,t_=u.div`
  position: sticky;
  top: 16px;
`,n_=u.div`
  background: linear-gradient(180deg, #1b1b1f 0%, #161619 100%);
  border: 1px solid #2a2a30;
  border-radius: 16px;
  padding: 14px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02), 0 8px 24px rgba(0, 0, 0, 0.22);
`,r_=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 12px;
`,i_=u.h3`
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
    background: ${qe.colors.primary500};
  }
`,o_=u.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #a1a1aa;
  font-variant-numeric: tabular-nums;
`,s_=u.button`
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
`,l_=u.div`
  position: relative;
  width: max-content;
`,a_=u.div`
  position: absolute;
  left: -4px;
  bottom: -4px;
  width: 26px;
  height: 26px;
  border-radius: 7px;
  background: ${qe.colors.primary600};
  border: 2px solid #0f0f12;
  cursor: nesw-resize;
  display: grid;
  place-items: center;
  color: #fff;
  font-size: 13px;
  touch-action: none;
  z-index: 3;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
`;function za({title:e="미리보기",controls:t,children:n}){const[r,i]=m.useState(1),s=m.useRef(null),l=d=>{var p,f;d.preventDefault(),(f=(p=d.target).setPointerCapture)==null||f.call(p,d.pointerId),s.current={x:d.clientX,y:d.clientY,zoom:r}},a=d=>{if(!s.current)return;const p=(s.current.x-d.clientX+(d.clientY-s.current.y))/2,f=Math.min(e_,Math.max(JA,s.current.zoom+p*.004));i(f)},c=d=>{var p,f;s.current=null,(f=(p=d.target).releasePointerCapture)==null||f.call(p,d.pointerId)};return o.jsx(t_,{children:o.jsxs(n_,{children:[o.jsxs(r_,{children:[o.jsx(i_,{children:e}),o.jsxs(o_,{children:[Math.round(r*100),"%",o.jsx(s_,{type:"button",onClick:()=>i(1),children:"초기화"})]})]}),t,o.jsxs(l_,{children:[o.jsx("div",{style:{zoom:r},children:n}),o.jsx(a_,{role:"slider","aria-label":"미리보기 크기 조절",onPointerDown:l,onPointerMove:a,onPointerUp:c,children:"⤢"})]})]})})}const c_=u.div`
  display: flex;
  gap: 6px;
  margin-bottom: 12px;
`,eg=u.button`
  flex: 1;
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid ${({$active:e})=>e?"#7c3aed":"#3f3f46"};
  background: ${({$active:e})=>e?"rgba(124, 58, 237, 0.25)":"#18181b"};
  color: ${({$active:e})=>e?"#fff":"#a1a1aa"};
  font-size: 12px;
  cursor: pointer;
`,tg=u.div`
  width: 360px;
  border-radius: 24px;
  border: 6px solid #3f3f46;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
  max-height: min(78vh, 760px);
  overflow-y: auto;
  scrollbar-width: thin;
`,u_=u.div`
  width: 360px;
  display: flex;
  justify-content: center;
  padding: 8px 0 4px;
  background: linear-gradient(180deg, ${({theme:e})=>e.colors.primary50} 0%, ${({theme:e})=>e.colors.warmCream} 100%);
  border-radius: 16px;
  border: 1px solid #27272a;
`,d_=u.div`
  width: 200px;
  background: ${({theme:e})=>e.colors.white};
  border-radius: ${({theme:e})=>e.radii.lg};
  overflow: hidden;
  box-shadow: ${({theme:e})=>e.shadow.soft};
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  position: relative;
`,p_=u.div`
  width: 100%;
  height: 120px;
  background: ${({theme:e})=>e.colors.bg100};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`,f_=u.div`
  padding: 12px;
`,h_=u.h4`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 6px;
  color: ${({theme:e})=>e.colors.text900};
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,g_=u.span`
  font-size: 0.85rem;
  color: ${({theme:e})=>e.colors.text700};
`,m_=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 6px;
`,x_=u.span`
  font-size: 0.75rem;
  color: ${({theme:e})=>e.colors.primary600};
  background: ${({theme:e})=>e.colors.primary50};
  padding: 2px 8px;
  border-radius: ${({theme:e})=>e.radii.pill};
`,L_=u.div`
  color: ${({theme:e})=>e.colors.text900};
  background: #fff;
`,y_=u.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid ${({theme:e})=>e.colors.primary100};
  position: sticky;
  top: 0;
  z-index: 2;
`,v_=u.h1`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
`,b_=u.div`
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
`,w_=u.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 6px;
`,k_=u.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({$active:e})=>e?"#fff":"rgba(255,255,255,0.45)"};
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15);
`,gd=u.div`
  height: 220px;
  display: grid;
  place-items: center;
  color: ${({theme:e})=>e.colors.text700};
  font-size: 0.9rem;
  background: ${({theme:e})=>e.colors.bg100};
`,j_=u.div`
  padding: 20px 16px 28px;
`,S_=u.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;
`,$_=u.h2`
  margin: 0;
  font-size: 1.55rem;
  font-weight: 700;
  line-height: 1.25;
  flex: 1;
`,C_=u.span`
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
`,E_=u.div`
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
`,P_=u.div`
  margin: 0 0 20px;
  font-size: 0.98rem;
  line-height: 1.55;
  color: ${({theme:e})=>e.colors.text700};
`,I_=u.section`
  margin-bottom: 22px;
`,T_=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 10px;
`,R_=u.h3`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
`,z_=u.span`
  font-size: 0.72rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: ${({theme:e})=>e.radii.pill};
  background: ${({theme:e})=>e.colors.primary100};
  color: ${({theme:e})=>e.colors.primary700};
`,M_=u.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 4px;
`,A_=u.div`
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
`,md=u.div`
  border-bottom: 1px solid ${({theme:e})=>e.colors.border200};
  padding: 12px 0;
  color: ${({theme:e})=>e.colors.text900};
`,xd=u.div`
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.4;
`,yl=u.div`
  margin-top: 8px;
  font-size: 0.88rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.text700};
`,__=u.div`
  margin-top: 22px;

  h3 {
    margin: 0 0 10px;
    font-size: 1.05rem;
    font-weight: 600;
  }
`,N_=u.p`
  margin: 0 0 10px;
  font-size: 0.88rem;
  line-height: 1.45;
  color: ${({theme:e})=>e.colors.text700};
`,D_={wifi:"Wi-Fi",parking:"Parking",tea:"Tea"};function O_({place:e}){var v,$,x;const[t,n]=m.useState("detail"),[r,i]=m.useState(0),s=m.useMemo(()=>{var S;if(!e)return null;const L=e.photos??[],y=((S=e.thumbnailUrl)==null?void 0:S.trim())||L[0]||"";return ic({...e,photos:L,thumbnailUrl:y,id:e.id||"preview"})},[e]),l=m.useMemo(()=>s?x0(s):[],[s]);if(!s)return o.jsx(za,{children:o.jsx(tg,{children:o.jsx("div",{style:{padding:"40px 16px",textAlign:"center",color:"#71717a",fontSize:13},children:"편집 중인 명상지가 없습니다."})})});const a=(s.programs??[]).filter(L=>L.status==="ongoing"),c=(s.programs??[]).filter(L=>L.status==="past"),d=s.venueKind==="명상센터"?"명상센터":"명상지",p=(v=s.detailSections)==null?void 0:v.find(L=>L.title.toLowerCase().includes("유의사항")),f=s.facilities??[],h=ZP(s),g=lo(s.regionId),b=l.length>0?r%l.length:0;return o.jsx(za,{controls:o.jsxs(c_,{children:[o.jsx(eg,{type:"button",$active:t==="detail",onClick:()=>n("detail"),children:"상세 페이지"}),o.jsx(eg,{type:"button",$active:t==="list",onClick:()=>n("list"),children:"목록 카드"})]}),children:t==="list"?o.jsx(u_,{children:o.jsxs(d_,{children:[o.jsx(p_,{children:h?o.jsx("img",{src:h,alt:""}):o.jsx(gd,{style:{height:120},children:"사진 없음"})}),o.jsxs(f_,{children:[o.jsx(h_,{children:s.name||"이름 미입력"}),o.jsx(g_,{children:g}),(($=s.hashtags)==null?void 0:$.length)>0&&o.jsx(m_,{children:s.hashtags.slice(0,2).map(L=>o.jsx(x_,{children:L},L))})]})]})}):o.jsx(tg,{children:o.jsxs(L_,{children:[o.jsxs(y_,{children:[o.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),o.jsx(v_,{children:"상세 페이지"})]}),l.length>0?o.jsxs(b_,{children:[o.jsx("img",{src:l[b],alt:""}),l.length>1&&o.jsx(w_,{children:l.map((L,y)=>o.jsx("button",{type:"button","aria-label":`${y+1}번째 사진`,onClick:()=>i(y),style:{padding:0,border:"none",background:"none",cursor:"pointer"},children:o.jsx(k_,{$active:y===b})},y))})]}):o.jsx(gd,{children:"대표 사진을 추가하세요"}),o.jsxs(j_,{children:[o.jsxs(S_,{children:[o.jsx($_,{children:s.name||"이름 미입력"}),o.jsx(C_,{"aria-hidden":!0,children:o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:o.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})})]}),o.jsxs(E_,{children:[o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),s.address||"주소 미입력"]}),o.jsx(P_,{children:o.jsx(so,{markdown:s.shortDescription,fallback:"한 줄 소개를 입력하세요."})}),(s.programs??[]).length>0&&o.jsxs(I_,{children:[o.jsxs(T_,{children:[o.jsx(R_,{children:"프로그램 · 후기"}),o.jsx(z_,{children:d})]}),a.length>0?o.jsx(M_,{children:a.map(L=>{const y=P5(L.imageUrl,L.imageUrls)[0];return o.jsxs(A_,{children:[y?o.jsx("img",{src:y,alt:""}):o.jsx(gd,{style:{height:108},children:"사진"}),o.jsx("span",{children:L.title||"(제목 없음)"})]},L.id)})}):o.jsxs(yl,{children:["지난 프로그램·후기 (",c.length,")"]})]}),o.jsxs(md,{children:[o.jsx(xd,{children:"입장료·이용 요금"}),o.jsx(yl,{children:(x=s.admissionFee)!=null&&x.trim()?o.jsx(D1,{children:o.jsx(qi,{children:s.admissionFee})}):"현장·예약 시 안내"})]}),o.jsxs(md,{children:[o.jsx(xd,{children:"유의사항"}),o.jsx(yl,{children:p!=null&&p.body?o.jsx(D1,{children:o.jsx(qi,{children:p.body})}):"등록된 유의사항이 없습니다."})]}),f.length>0&&o.jsxs(md,{children:[o.jsx(xd,{children:"시설 정보"}),o.jsx(yl,{children:f.map(L=>D_[L]??L).join(" · ")})]}),o.jsxs(__,{children:[o.jsx("h3",{children:"위치"}),s.address?o.jsx(N_,{children:s.address}):null,o.jsx(XA,{address:s.address,lat:s.lat,lng:s.lng})]})]})]})})})}const B_=ke`
  from { opacity: 0; }
  to { opacity: 1; }
`,F_=ke`
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`,H_=u.div`
  position: fixed;
  inset: 0;
  z-index: 500;
  background: rgba(0, 0, 0, 0.62);
  display: grid;
  place-items: center;
  padding: 20px;
  animation: ${B_} 0.18s ease both;
`,U_=u.div`
  width: min(100%, 360px);
  border-radius: 14px;
  border: 1px solid #3f3f46;
  background: #18181b;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.45);
  animation: ${F_} 0.22s cubic-bezier(0.22, 1, 0.36, 1) both;
  overflow: hidden;
`,V_=u.div`
  padding: 22px 22px 18px;
`,W_=u.h3`
  margin: 0 0 10px;
  font-size: 16px;
  font-weight: 600;
  color: #f4f4f5;
`,K_=u.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.55;
  color: #a1a1aa;
`,Y_=u.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 14px 18px 18px;
  border-top: 1px solid #27272a;
  background: #111114;
`;function Or({open:e,title:t,message:n,confirmLabel:r="확인",cancelLabel:i="취소",onConfirm:s,onCancel:l}){const a=m.useCallback(c=>{c.target===c.currentTarget&&l()},[l]);return m.useEffect(()=>{if(!e)return;const c=d=>{d.key==="Escape"&&l()};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[e,l]),e?o.jsx(H_,{role:"presentation",onClick:a,children:o.jsxs(U_,{role:"dialog","aria-modal":"true","aria-labelledby":"admin-confirm-title",children:[o.jsxs(V_,{children:[o.jsx(W_,{id:"admin-confirm-title",children:t}),o.jsx(K_,{children:n})]}),o.jsxs(Y_,{children:[o.jsx(Le,{$variant:"ghost",type:"button",onClick:l,children:i}),o.jsx(Le,{$variant:"primary",type:"button",onClick:s,children:r})]})]})}):null}const G_=u.div`
  display: inline-block;
  max-width: 100%;
`,Z_=u.div`
  width: 252px;
  max-width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #3f3f46;
  background: #09090b;
`,q_=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`,Q_=u.div`
  font-size: 13px;
  font-weight: 600;
  color: #f4f4f5;
`,ng=u.button`
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
`,X_=u.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  margin-bottom: 4px;
`,J_=u.span`
  text-align: center;
  font-size: 10px;
  font-weight: 600;
  color: #71717a;
  padding: 2px 0;
`,eN=u.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
`,tN=u.button`
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
`,nN=u.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-size: 12px;
  color: #a1a1aa;
`,rN=u.button`
  border: none;
  background: none;
  color: #71717a;
  font-size: 12px;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: #e4e4e7;
  }
`,iN=u.p`
  margin: 6px 0 0;
  font-size: 12px;
  color: #71717a;
  line-height: 1.45;
`,oN=["일","월","화","수","목","금","토"];function rg(e){const[t,n,r]=e.split("-").map(Number);return new Date(t,n-1,r)}function Ld(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}function yd(e,t){return e.localeCompare(t)}function sN(e,t){return`${e}-${String(t+1).padStart(2,"0")}`}function lN({startDate:e,endDate:t,onChange:n,allowClear:r=!0,hint:i}){const s=e?rg(e):new Date(`${Ss()}T12:00:00+09:00`),[l,a]=m.useState(s.getFullYear()),[c,d]=m.useState(s.getMonth()),[p,f]=m.useState(null),h=Ss(),g=o9(e,t),b=m.useMemo(()=>{const y=new Date(l,c,1).getDay(),S=new Date(l,c+1,0).getDate(),I=new Date(l,c,0).getDate(),k=[];for(let j=y-1;j>=0;j-=1){const R=I-j,z=new Date(l,c-1,R);k.push({iso:Ld(z),day:R,inMonth:!1})}for(let j=1;j<=S;j+=1){const R=new Date(l,c,j);k.push({iso:Ld(R),day:j,inMonth:!0})}for(;k.length%7!==0;){const j=k.length-(y+S)+1,R=new Date(l,c+1,j);k.push({iso:Ld(R),day:j,inMonth:!1})}return k},[c,l]),v=y=>{const S=new Date(l,c+y,1);a(S.getFullYear()),d(S.getMonth())},$=(y,S)=>{if(!S||y===S){n({startDate:y,endDate:y});return}yd(y,S)<=0?n({startDate:y,endDate:S}):n({startDate:S,endDate:y})},x=(y,S)=>{if(!S){const I=rg(y);a(I.getFullYear()),d(I.getMonth())}if(!p){f(y),n({startDate:y,endDate:y});return}$(p,y),f(null)},L=y=>{if(!e)return!1;const S=t??e;return yd(e,y)<=0&&yd(y,S)<=0};return o.jsxs(G_,{children:[o.jsxs(Z_,{children:[o.jsxs(q_,{children:[o.jsx(ng,{type:"button","aria-label":"이전 달",onClick:()=>v(-1),children:"‹"}),o.jsxs(Q_,{children:[l,"년 ",c+1,"월"]}),o.jsx(ng,{type:"button","aria-label":"다음 달",onClick:()=>v(1),children:"›"})]}),o.jsx(X_,{children:oN.map(y=>o.jsx(J_,{children:y},y))}),o.jsx(eN,{children:b.map(({iso:y,day:S,inMonth:I})=>{const k=t??e,j=e===y,R=k===y&&e!==k,z=L(y);return o.jsx(tN,{type:"button",$muted:!I,$inRange:z&&!j&&!R,$rangeStart:j,$rangeEnd:R,$today:y===h,onClick:()=>x(y,I),children:S},`${sN(l,c)}-${y}`)})}),o.jsxs(nN,{children:[o.jsx("span",{children:g??"날짜를 선택하세요"}),r&&(e||t)?o.jsx(rN,{type:"button",onClick:()=>{f(null),n({startDate:void 0,endDate:void 0})},children:"초기화"}):null]})]}),i?o.jsx(iN,{children:i}):null]})}function M5(e){try{return new Intl.DateTimeFormat("ko-KR",{timeZone:"Asia/Seoul",dateStyle:"short",timeStyle:"short"}).format(new Date(e))}catch{return""}}function w0({restorable:e,onRestore:t,onDismiss:n}){var i;if(!e)return null;const r=((i=e.label)==null?void 0:i.trim())||(e.isNew?"새 항목":`번호 ${e.recordKey}`);return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,flexWrap:"wrap",padding:"10px 14px",marginBottom:16,borderRadius:12,border:"1px solid #4c3a86",background:"rgba(124, 92, 191, 0.16)"},children:[o.jsxs("span",{style:{fontSize:13,color:"#e4e4e7"},children:["작성 중이던 임시저장본이 있어요 —"," ",o.jsx("strong",{style:{color:"#fff"},children:r}),o.jsxs("span",{style:{color:"#a1a1aa"},children:[" · ",M5(e.savedAt)]})]}),o.jsxs("div",{style:{display:"flex",gap:8,marginLeft:"auto"},children:[o.jsx(Le,{$variant:"primary",type:"button",onClick:()=>t(e),children:"불러오기"}),o.jsx(Le,{type:"button",onClick:()=>n(!0),children:"삭제"}),o.jsx(Le,{$variant:"ghost",type:"button",onClick:()=>n(!1),children:"닫기"})]})]})}function k0({savedAt:e}){return o.jsx("span",{style:{fontSize:12,color:e?"#a78bfa":"#71717a",whiteSpace:"nowrap"},children:e?`임시저장됨 · ${M5(e)}`:"자동 임시저장"})}const aN="v1",A5=`admin-draft:${aN}:`,_5=(e,t)=>`${A5}${e}:${t}`;function cN(e){try{localStorage.setItem(_5(e.scope,e.recordKey),JSON.stringify(e))}catch{}}function Es(e,t){try{localStorage.removeItem(_5(e,t))}catch{}}function uN(e){const t=`${A5}${e}:`,n=[];try{for(let r=0;r<localStorage.length;r+=1){const i=localStorage.key(r);if(!i||!i.startsWith(t))continue;const s=localStorage.getItem(i);if(s)try{n.push(JSON.parse(s))}catch{}}}catch{}return n.sort((r,i)=>i.savedAt-r.savedAt)}function j0({scope:e,recordKey:t,isNew:n,draft:r,label:i}){const s=m.useRef(null),[l,a]=m.useState(null),[c,d]=m.useState(null);m.useEffect(()=>{const[b]=uN(e);d(b??null)},[e]);const p=m.useMemo(()=>r==null?null:JSON.stringify(r),[r]);m.useEffect(()=>{if(t==null||r==null||p==null||s.current==null||p===s.current)return;const b=Date.now();cN({scope:e,recordKey:t,isNew:n,label:i??"",savedAt:b,data:r}),a(b)},[e,t,n,i,r,p]);const f=m.useCallback(b=>{s.current=b==null?null:JSON.stringify(b),a(null)},[]),h=m.useCallback(()=>{t!=null&&Es(e,t),a(null),d(b=>b&&b.recordKey===t?null:b)},[e,t]),g=m.useCallback(b=>{d(v=>(b&&v&&Es(v.scope,v.recordKey),null))},[]);return{savedAt:l,restorable:c,markBaseline:f,clearCurrent:h,dismissRestorable:g}}const dN="유의사항";function pN(e){var t;return((t=e==null?void 0:e.find(n=>n.title.includes("유의사항")))==null?void 0:t.body)??""}function fN(e,t){const n=[...e??[]],r=n.findIndex(s=>s.title.includes("유의사항")),i={title:dN,body:t};return r>=0?n[r]=i:n.push(i),n}function hN(e){return(e??[]).join(", ")}function gN(e){return e.split(/[,，]/).map(t=>t.trim()).filter(Boolean)}function zo(e){var r;const t=e.photos??[],n=((r=e.thumbnailUrl)==null?void 0:r.trim())||t[0]||"";return ic({...e,photos:t,thumbnailUrl:n})}function mN(){const[e,t]=m.useState([]),[n,r]=m.useState(null),[i,s]=m.useState(!1),[l,a]=m.useState(null),[c,d]=m.useState("basic"),[p,f]=m.useState(null),[h,g]=m.useState(!1),[b,v]=m.useState(!1),[$,x]=m.useState(!1),[L,y]=m.useState(null),S=m.useRef(null),I=l?i?"new":n:null,{savedAt:k,restorable:j,markBaseline:R,clearCurrent:z,dismissRestorable:T}=j0({scope:"places",recordKey:I,isNew:i,draft:l,label:l==null?void 0:l.name}),P=m.useCallback(async()=>{f(null);try{const M=await fM();t(M)}catch(M){f(M instanceof Error?M.message:"목록 로드 실패")}},[]);m.useEffect(()=>{P()},[P]);const E=m.useMemo(()=>e.find(M=>M.id===n)??null,[e,n]),A=m.useMemo(()=>L?e.find(M=>M.id===L)??null:null,[e,L]);m.useEffect(()=>{if(E&&!i){if(S.current){const G=S.current;S.current=null,a(G),R(G);return}const M=zo(structuredClone(E.data));a(M),R(M)}},[E,i,R]);const N=()=>{const M=$M(VE());r(null),s(!0),a(M),R(M),d("basic")},F=M=>{const G=zo(M.data);if(T(!1),d("basic"),M.isNew){r(null),s(!0),a(G),R(G);return}s(!1),n===M.recordKey?(a(G),R(G)):(S.current=G,r(M.recordKey))},Y=()=>{if(l!==null){v(!0);return}N()},Q=async()=>{if(l){g(!0),f(null);try{const M=zo(l),G=await gM(i?null:n,M.regionId,M);z(),await P(),r(G.id),s(!1);const U=zo(G.data);a(U),R(U),d("basic")}catch(M){f(M instanceof Error?M.message:"저장 실패")}finally{g(!1)}}},_=async()=>{if(!L)return;const M=L;y(null),f(null);try{await mM(M),Es("places",M),n===M&&(r(null),a(null),s(!1),R(null)),await P()}catch(G){f(G instanceof Error?G.message:"삭제 실패")}},D=(M,G)=>{if(!l)return;const U=[...l.programs??[]],ne={...U[M],...G};U[M]={...ne,status:b1(ne)},a({...l,programs:U})},C=M=>{if(!l)return;const G=[...l.programs??[]],U=M==="event"?s9():{},ne={id:CM(G),kind:M,title:M==="event"?"새 행사":"새 프로그램",status:"ongoing",imageUrl:"",imageUrls:[],bodyFromVenue:"",reviews:[],hidden:!1,...U};G.push({...ne,status:b1(ne)}),a({...l,programs:G}),d("programs")},X=M=>{if(!l)return;const G=(l.programs??[]).filter((U,ne)=>ne!==M);a({...l,programs:G})},J=M=>{l&&a({...l,photos:M,thumbnailUrl:M[0]??l.thumbnailUrl})},w=m.useMemo(()=>l?zo(l):null,[l]),H={basic:"기본",programs:"행사·프로그램"};return o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(260px, 1fr) minmax(340px, 1.15fr) max-content",gap:16,alignItems:"start"},children:[o.jsxs(xn,{children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:12},children:[o.jsx("h2",{style:{margin:0,fontSize:18},children:"명상지·센터"}),o.jsx(Le,{$variant:"primary",type:"button",onClick:Y,children:"+ 등록"})]}),p&&o.jsx(Zr,{children:p}),o.jsxs(v0,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"이름"}),o.jsx("th",{children:"지역"}),o.jsx("th",{children:"구분"}),o.jsx("th",{children:"행사·프로그램"}),o.jsx("th",{})]})}),o.jsx("tbody",{children:e.map(M=>o.jsxs("tr",{children:[o.jsxs("td",{children:[o.jsx("button",{type:"button",style:{background:"none",border:"none",color:M.data.hidden?"#a1a1aa":"#fff",cursor:"pointer",padding:0},onClick:()=>{r(M.id),s(!1)},children:M.name||M.id}),M.data.hidden&&o.jsx("span",{style:{marginLeft:6,fontSize:11,padding:"1px 6px",borderRadius:999,background:"#3f1d1d",color:"#fca5a5"},children:"숨김"})]}),o.jsx("td",{children:lo(M.regionId)}),o.jsx("td",{children:M.data.venueKind??"명상지"}),o.jsx("td",{children:(M.data.programs??[]).length}),o.jsx("td",{children:o.jsxs("div",{style:{display:"flex",gap:6,justifyContent:"flex-end",flexWrap:"wrap"},children:[o.jsx(Le,{type:"button",onClick:()=>{r(M.id),s(!1),d("basic")},children:"수정"}),o.jsx(Le,{type:"button",onClick:()=>{r(M.id),s(!1),d("programs")},children:"행사·프로그램"}),o.jsx(Le,{$variant:"danger",type:"button",onClick:()=>y(M.id),children:"삭제"})]})})]},M.id))})]})]}),o.jsxs(xn,{children:[o.jsx(w0,{restorable:j,onRestore:F,onDismiss:T}),l?o.jsxs(o.Fragment,{children:[!i&&n?o.jsxs("p",{style:{margin:"0 0 12px",color:"#71717a",fontSize:13},children:["번호: ",n]}):o.jsx("p",{style:{margin:"0 0 12px",color:"#71717a",fontSize:13},children:"저장 시 번호가 자동 부여됩니다."}),o.jsxs("div",{style:{display:"flex",gap:8,marginBottom:12,flexWrap:"wrap"},children:[["basic","programs"].map(M=>o.jsx(Le,{$variant:c===M?"primary":"ghost",type:"button",onClick:()=>d(M),children:H[M]},M)),o.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:10},children:[o.jsx(k0,{savedAt:k}),o.jsx(Le,{$variant:"primary",type:"button",onClick:()=>x(!0),disabled:h,children:h?"저장 중…":"저장"})]})]}),c==="basic"&&o.jsxs(o.Fragment,{children:[o.jsxs(fe,{children:[o.jsx(pe,{children:"공개 노출"}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[o.jsx(Le,{type:"button",$variant:l.hidden?"ghost":"primary",onClick:()=>a({...l,hidden:!1}),children:"노출"}),o.jsx(Le,{type:"button",$variant:l.hidden?"danger":"ghost",onClick:()=>a({...l,hidden:!0}),children:"숨김"})]}),o.jsx("p",{style:{margin:"6px 0 0",fontSize:12,color:"#71717a"},children:"숨김으로 두면 공개 지도·목록에 표시되지 않습니다. (관리자에게만 보임)"})]}),o.jsx(Y4,{photos:l.photos??[],onChange:J,maxPhotos:10}),o.jsx(bA,{value:l.regionId,onChange:M=>a({...l,regionId:M})}),o.jsxs(fe,{children:[o.jsx(pe,{children:"구분"}),o.jsxs("select",{value:l.venueKind??"명상지",onChange:M=>a({...l,venueKind:M.target.value}),style:{width:"100%",padding:8,borderRadius:8,background:"#09090b",color:"#fff",border:"1px solid #3f3f46"},children:[o.jsx("option",{value:"명상지",children:"명상지"}),o.jsx("option",{value:"명상센터",children:"명상센터"})]})]}),o.jsxs(fe,{children:[o.jsx(pe,{children:"이름"}),o.jsx(nt,{value:l.name,onChange:M=>a({...l,name:M.target.value})})]}),o.jsx(Vl,{label:"한 줄 소개 (마크다운)",value:l.shortDescription,onChange:M=>a({...l,shortDescription:M}),placeholder:"명상지를 한 줄로 소개해 주세요",minHeight:72}),o.jsx(OA,{value:l.address,lat:l.lat,lng:l.lng,onChange:M=>a({...l,address:M}),onCoordsChange:(M,G)=>a(U=>U&&{...U,lat:M,lng:G})},i?"new":n??"edit"),o.jsx(Vl,{label:"입장료·이용 요금 (마크다운)",value:l.admissionFee??"",onChange:M=>a({...l,admissionFee:M}),placeholder:"예: 무료 / 성인 5,000원 / 프로그램별 상이",minHeight:88}),o.jsx(Vl,{label:"유의사항 (마크다운)",value:pN(l.detailSections),onChange:M=>a({...l,detailSections:fN(l.detailSections,M)}),placeholder:`- 조용히 이용해 주세요
- 사전 예약 필수`,minHeight:100}),o.jsxs(fe,{children:[o.jsx(pe,{children:"시설 정보"}),o.jsx(nt,{value:hN(l.facilities),onChange:M=>a({...l,facilities:gN(M.target.value)}),placeholder:"Wi-Fi, 주차, 다과·차 (쉼표로 구분)"}),o.jsx("p",{style:{margin:"6px 0 0",fontSize:12,color:"#71717a"},children:"원하는 시설명을 쉼표로 구분해 직접 입력하세요."})]})]}),c==="programs"&&o.jsxs(o.Fragment,{children:[o.jsx("p",{style:{margin:"0 0 12px",color:"#a1a1aa",fontSize:13},children:"행사·프로그램은 이 장소에만 속합니다. 다른 명상지·센터와 공유되지 않습니다."}),o.jsxs("div",{style:{display:"flex",gap:8,marginBottom:12},children:[o.jsx(Le,{$variant:"ghost",type:"button",onClick:()=>C("event"),children:"+ 행사"}),o.jsx(Le,{$variant:"ghost",type:"button",onClick:()=>C("program"),children:"+ 프로그램"})]}),(l.programs??[]).map((M,G)=>o.jsxs(xn,{style:{marginBottom:12,background:"#111114"},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8,gap:8},children:[o.jsxs("strong",{style:{fontSize:14},children:[M.kind==="event"?"행사":"프로그램"," · ",M.title||"(제목 없음)"]}),o.jsx("span",{style:{fontSize:12,padding:"2px 8px",borderRadius:999,background:M.status==="past"?"#27272a":"rgba(124, 58, 237, 0.25)",color:M.status==="past"?"#a1a1aa":"#e9d5ff",flexShrink:0},children:i9(M)}),o.jsx(Le,{type:"button",$variant:M.hidden?"danger":"ghost",onClick:()=>D(G,{hidden:!M.hidden}),style:{marginLeft:"auto"},children:M.hidden?"숨김":"노출"}),o.jsx(Le,{$variant:"danger",type:"button",onClick:()=>X(G),children:"삭제"})]}),o.jsxs(fe,{children:[o.jsx(pe,{children:"구분"}),o.jsxs("select",{value:M.kind??"program",onChange:U=>D(G,{kind:U.target.value}),style:{width:"100%",padding:8,borderRadius:8,background:"#09090b",color:"#fff",border:"1px solid #3f3f46"},children:[o.jsx("option",{value:"event",children:"행사"}),o.jsx("option",{value:"program",children:"프로그램"})]})]}),o.jsxs(fe,{children:[o.jsx(pe,{children:"제목"}),o.jsx(nt,{value:M.title,onChange:U=>D(G,{title:U.target.value})})]}),o.jsxs(fe,{children:[o.jsx(pe,{children:M.kind==="event"?"행사 기간":"기간 (선택)"}),o.jsx(lN,{startDate:M.startDate,endDate:M.endDate,onChange:U=>D(G,U),allowClear:M.kind!=="event",hint:M.kind==="event"?"시작일 → 종료일 순으로 두 번 클릭하세요. 종료일이 지나면 자동으로 완료됩니다.":"기간을 넣으면 종료일 이후 자동으로 완료 처리됩니다."})]}),o.jsx(Y4,{label:"사진",photos:P5(M.imageUrl,M.imageUrls),onChange:U=>D(G,dA(U)),maxPhotos:10,hint:"첫 사진이 대표입니다."}),o.jsxs(fe,{children:[o.jsx(pe,{children:"소개 (마크다운)"}),o.jsx(On,{style:{minHeight:120},value:M.bodyFromVenue,onChange:U=>D(G,{bodyFromVenue:U.target.value})})]})]},M.id)),(l.programs??[]).length===0?o.jsx("p",{style:{color:"#71717a",fontSize:13},children:"등록된 행사·프로그램이 없습니다."}):null]})]}):o.jsx("p",{style:{color:"#a1a1aa"},children:"왼쪽에서 항목을 선택하거나 새로 등록하세요."})]}),o.jsx(O_,{place:w}),o.jsx(Or,{open:b,title:"새로 등록",message:"이전에 작성 중인 내용이 사라집니다. 새로 등록하시겠습니까?",cancelLabel:"계속 작성",confirmLabel:"새로 등록",onCancel:()=>v(!1),onConfirm:()=>{v(!1),N()}}),o.jsx(Or,{open:$,title:"저장",message:i?"등록하시겠습니까?":"저장하시겠습니까?",cancelLabel:"취소",confirmLabel:"저장",onCancel:()=>x(!1),onConfirm:()=>{x(!1),Q()}}),o.jsx(Or,{open:L!==null,title:"삭제",message:A?`「${A.name||A.id}」을(를) 삭제할까요? 삭제 후에는 되돌릴 수 없습니다.`:"삭제할까요? 삭제 후에는 되돌릴 수 없습니다.",cancelLabel:"취소",confirmLabel:"삭제",onCancel:()=>y(null),onConfirm:()=>void _()})]})}const ig=u.div`
  border: 6px solid #3f3f46;
  border-radius: 24px;
  overflow: hidden;
  width: 360px;
  max-height: min(76vh, 820px);
  overflow-y: auto;
  background: ${({theme:e})=>e.colors.white};
`,xN=u.div`
  margin: 0 auto;
  padding: 0 0 24px;
  color: ${({theme:e})=>e.colors.text900};
`,LN=u.div`
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
`,yN=u.div`
  padding: 8px 20px 20px;
  text-align: center;
`,vN=u.img`
  width: 112px;
  height: 112px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${({theme:e})=>e.colors.primary200};
`,bN=u.div`
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
`,wN=u.h2`
  margin: 16px 0 8px;
  font-size: 1.6rem;
  font-weight: 700;
`,og=u.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
`,sg=u.span`
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
`,Mo=u.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.65;
  color: ${({theme:e})=>e.colors.text700};
`,lg=u.ul`
  margin: 0;
  padding-left: 1.2em;
  color: ${({theme:e})=>e.colors.text700};
  line-height: 1.6;

  li {
    margin-bottom: 6px;
  }
`,ag=u.div`
  margin-bottom: 14px;
  border: 1px solid ${({theme:e})=>e.colors.primary100};
  border-radius: ${({theme:e})=>e.radii.lg};
  overflow: hidden;
  background: ${({theme:e})=>e.colors.white};
`,cg=u.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  display: block;
`,ug=u.div`
  padding: 14px 16px;
`,dg=u.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 6px;
  margin-bottom: 8px;
  background: ${({theme:e,$past:t})=>t?e.colors.bg100:e.colors.primary100};
  color: ${({theme:e,$past:t})=>t?e.colors.text700:e.colors.primary700};
`,pg=u.span`
  display: block;
  margin: 0 0 6px;
  font-size: 1.05rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text900};
`,fg=u.span`
  display: block;
  font-size: 1rem;
  line-height: 1.65;
  color: ${({theme:e})=>e.colors.text700};
`,kN=u.p`
  margin: 0;
  padding: 24px 0;
  text-align: center;
  color: #52525b;
  font-size: 13px;
`;function jN({expert:e}){if(!e)return o.jsx(za,{children:o.jsx(ig,{children:o.jsx(kN,{children:"전문가를 선택하거나 새로 입력하면 실제 화면처럼 미리보기가 표시됩니다."})})});const t=(e.programs??[]).filter(i=>i.status==="ongoing"),n=(e.programs??[]).filter(i=>i.status==="past"),r=[...e.degrees??[],...e.certificates??[]];return o.jsx(za,{children:o.jsx(ig,{children:o.jsxs(xN,{children:[o.jsx(LN,{children:"‹ 명상 전문가"}),o.jsxs(yN,{children:[e.avatarUrl?o.jsx(vN,{src:e.avatarUrl,alt:""}):o.jsx(bN,{children:"사진"}),o.jsx(wN,{children:e.name||"활동명"}),o.jsx(og,{children:(e.specialties??[]).map(i=>o.jsx(sg,{children:i},i))})]}),o.jsxs($r,{children:[o.jsx(Cr,{children:"자기소개"}),o.jsx(Mo,{as:"div",children:o.jsx(so,{markdown:e.intro,fallback:o.jsx("span",{style:{color:"#9ca3af"},children:"소개를 입력하세요."})})})]}),o.jsxs($r,{children:[o.jsx(Cr,{children:"학위·이수"}),o.jsx(lg,{children:r.map(i=>o.jsx("li",{children:i},i))})]}),o.jsxs($r,{children:[o.jsx(Cr,{children:"경력"}),o.jsx(lg,{children:(e.careers??[]).map(i=>o.jsx("li",{children:i},i))})]}),o.jsxs($r,{children:[o.jsx(Cr,{children:"클래스·분야"}),o.jsx(og,{style:{justifyContent:"flex-start"},children:(e.classTypes??[]).map(i=>o.jsx(sg,{children:i},i))})]}),o.jsxs($r,{children:[o.jsx(Cr,{children:"센터·활동 지역"}),e.hasCenter?o.jsxs(o.Fragment,{children:[e.centerSummary&&o.jsx(Mo,{style:{marginBottom:8},children:e.centerSummary}),e.centerAddress&&o.jsx(Mo,{children:e.centerAddress})]}):o.jsxs(Mo,{children:["주 활동 지역:"," ",(e.regionIds??[]).map(lo).filter(Boolean).join(", ")||"—"]})]}),o.jsxs($r,{children:[o.jsx(Cr,{children:"진행 중인 클래스"}),t.length===0&&o.jsx(Mo,{children:"현재 모집 중인 공개 일정이 없어요."}),t.map(i=>o.jsxs(ag,{children:[i.imageUrl&&o.jsx(cg,{src:i.imageUrl,alt:""}),o.jsxs(ug,{children:[o.jsx(dg,{children:"진행 중"}),o.jsx(pg,{children:i.title}),o.jsx(fg,{children:i.description})]})]},i.id))]}),n.length>0&&o.jsxs($r,{children:[o.jsx(Cr,{children:"이전 프로그램"}),n.map(i=>o.jsxs(ag,{children:[i.imageUrl&&o.jsx(cg,{src:i.imageUrl,alt:""}),o.jsxs(ug,{children:[o.jsx(dg,{$past:!0,children:"종료"}),o.jsx(pg,{children:i.title}),o.jsx(fg,{children:i.description})]})]},i.id))]})]})})})}const SN=/^[A-Za-z0-9._-]{4,64}$/,$N=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,CN=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,EN=["마음챙김","아트명상","숲 명상","호흡명상","걷기명상","소리명상"],vl=e=>e.split(`
`).map(t=>t.trim()).filter(Boolean),Ao=()=>({loginId:"",email:"",password:""}),bl=e=>({padding:"6px 12px",borderRadius:999,fontSize:13,cursor:"pointer",border:`1px solid ${e?"#7c5cbf":"#3f3f46"}`,background:e?"rgba(124, 92, 191, 0.28)":"transparent",color:e?"#fff":"#a1a1aa",transition:"all 0.12s ease"}),wl={minHeight:84,fontFamily:"inherit",fontSize:14};function PN(){const[e,t]=m.useState([]),[n,r]=m.useState(null),[i,s]=m.useState(!1),[l,a]=m.useState(null),[c,d]=m.useState(Ao()),[p,f]=m.useState("idle"),[h,g]=m.useState(null),[b,v]=m.useState(!1),[$,x]=m.useState(null),L=l?i?"new":n:null,{savedAt:y,restorable:S,markBaseline:I,clearCurrent:k,dismissRestorable:j}=j0({scope:"experts",recordKey:L,isNew:i,draft:l,label:l==null?void 0:l.name}),R=m.useCallback(async()=>{try{t(await xM())}catch(w){g(w instanceof Error?w.message:"로드 실패")}},[]);m.useEffect(()=>{R()},[R]);const z=w=>{r(w.id),s(!1);const H={...To(),...structuredClone(w.data)};a(H),I(H),d(Ao()),f("idle")},T=()=>{r(null),s(!0);const w=To();a(w),I(w),d(Ao()),f("idle")},P=w=>{const H={...To(),...w.data};j(!1),d(Ao()),f("idle"),w.isNew?(r(null),s(!0)):(r(w.recordKey),s(!1)),a(H),I(H)},E=w=>a(H=>H&&{...H,...w}),A=(w,H)=>a(M=>{if(!M)return M;const G=M[w];return{...M,[w]:G.includes(H)?G.filter(U=>U!==H):[...G,H]}}),N=SN.test(c.loginId),F=$N.test(c.password),Y=CN.test(c.email.trim()),Q=async()=>{if(!N){Ye.error("아이디는 영문·숫자와 . _ - 만, 4~64자로 입력하세요.");return}f("checking");try{const w=await yM(c.loginId.trim());f(w?"available":"taken"),w||Ye.error("이미 사용 중인 아이디입니다.")}catch(w){f("idle"),Ye.error(w instanceof Error?w.message:"중복 확인 실패")}},_=w=>{d(H=>({...H,loginId:w})),f("idle")},D=()=>{var w;if(i){if(p!=="available")return Ye.error("아이디 중복확인을 해주세요.");if(!Y)return Ye.error("이메일 형식을 확인하세요.");if(!F)return Ye.error("비밀번호는 8자 이상이며 영문·숫자·특수문자를 모두 포함해야 합니다.")}if(!((w=l==null?void 0:l.name)!=null&&w.trim()))return Ye.error("활동명을 입력하세요.");v(!0)},C=async()=>{if(l){g(null);try{if(i){const w=await vM({loginId:c.loginId.trim(),email:c.email.trim(),password:c.password,data:l});k(),await R(),r(w.id),s(!1);const H={...To(),...w.data};a(H),I(H),d(Ao()),f("idle"),Ye.success("전문가 계정이 생성되었습니다.")}else{const w=await LM(n,l);k(),await R(),r(w.id);const H={...To(),...w.data};a(H),I(H),Ye.success("저장되었습니다.")}}catch(w){Ye.error(w instanceof Error?w.message:"저장 실패")}}},X=async()=>{if(!$)return;const w=$;x(null);try{await bM(w),Es("experts",w),n===w&&(r(null),s(!1),a(null),I(null)),await R()}catch(H){Ye.error(H instanceof Error?H.message:"삭제 실패")}},J=$?e.find(w=>w.id===$):null;return o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(200px, 0.7fr) minmax(360px, 1.3fr) max-content",gap:16,alignItems:"start"},children:[o.jsxs(xn,{children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:12},children:[o.jsx("h2",{style:{margin:0},children:"전문가"}),o.jsx(Le,{$variant:"primary",type:"button",onClick:T,children:"+ 등록"})]}),h&&o.jsx(Zr,{children:h}),o.jsxs(v0,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"이름"}),o.jsx("th",{})]})}),o.jsx("tbody",{children:e.map(w=>o.jsxs("tr",{children:[o.jsxs("td",{children:[o.jsx("button",{type:"button",style:{background:"none",border:"none",color:w.data.hidden?"#a1a1aa":"#fff",cursor:"pointer"},onClick:()=>z(w),children:w.name||`전문가 ${w.id}`}),w.data.hidden&&o.jsx("span",{style:{marginLeft:6,fontSize:11,padding:"1px 6px",borderRadius:999,background:"#3f1d1d",color:"#fca5a5"},children:"숨김"})]}),o.jsx("td",{children:o.jsxs("div",{style:{display:"flex",gap:6,justifyContent:"flex-end"},children:[o.jsx(Le,{type:"button",onClick:()=>z(w),children:"수정"}),o.jsx(Le,{$variant:"danger",type:"button",onClick:()=>x(w.id),children:"삭제"})]})})]},w.id))})]})]}),o.jsxs(xn,{children:[o.jsx(w0,{restorable:S,onRestore:P,onDismiss:j}),l?o.jsxs(o.Fragment,{children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[o.jsx("p",{style:{margin:0,color:"#71717a",fontSize:13},children:!i&&n?`번호: ${n}`:"전문가 계정을 새로 만듭니다."}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[o.jsx(k0,{savedAt:y}),o.jsx(Le,{$variant:"primary",type:"button",onClick:D,children:i?"계정 생성":"저장"})]})]}),i&&o.jsxs("div",{style:{border:"1px solid #27272a",borderRadius:12,padding:14,marginBottom:16,background:"#141417"},children:[o.jsx("h3",{style:{margin:"0 0 10px",fontSize:14,color:"#e4e4e7"},children:"로그인 계정"}),o.jsxs(fe,{children:[o.jsx(pe,{children:"아이디"}),o.jsxs("div",{style:{display:"flex",gap:8,alignItems:"stretch"},children:[o.jsx(nt,{value:c.loginId,onChange:w=>_(w.target.value),placeholder:"영문·숫자 . _ - (4~64자)",autoComplete:"off"}),o.jsx(Le,{type:"button",onClick:Q,disabled:p==="checking"||!N,style:{whiteSpace:"nowrap"},children:p==="checking"?"확인 중…":"중복확인"})]}),p==="available"&&o.jsx("p",{style:{margin:"6px 0 0",fontSize:12,color:"#34d399"},children:"사용 가능한 아이디입니다."}),p==="taken"&&o.jsx("p",{style:{margin:"6px 0 0",fontSize:12,color:"#f87171"},children:"이미 사용 중인 아이디입니다."})]}),o.jsxs(fe,{children:[o.jsx(pe,{children:"이메일"}),o.jsx(nt,{type:"email",value:c.email,onChange:w=>d(H=>({...H,email:w.target.value})),placeholder:"expert@example.com",autoComplete:"off"})]}),o.jsxs(fe,{children:[o.jsx(pe,{children:"비밀번호"}),o.jsx(nt,{type:"password",value:c.password,onChange:w=>d(H=>({...H,password:w.target.value})),placeholder:"8자 이상 · 영문·숫자·특수문자 포함",autoComplete:"new-password"}),o.jsx("p",{style:{margin:"6px 0 0",fontSize:12,color:c.password?F?"#34d399":"#f87171":"#a1a1aa"},children:"8자 이상, 영문·숫자·특수문자를 모두 포함"})]})]}),o.jsxs(fe,{children:[o.jsx(pe,{children:"공개 노출"}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[o.jsx(Le,{type:"button",$variant:l.hidden?"ghost":"primary",onClick:()=>E({hidden:!1}),children:"노출"}),o.jsx(Le,{type:"button",$variant:l.hidden?"danger":"ghost",onClick:()=>E({hidden:!0}),children:"숨김"})]}),o.jsx("p",{style:{margin:"6px 0 0",fontSize:12,color:"#71717a"},children:"숨김으로 두면 명상전문가 목록·상세에 표시되지 않습니다. (관리자에게만 보임)"})]}),o.jsx(uA,{label:"프로필 사진",value:l.avatarUrl,onChange:w=>E({avatarUrl:w})}),o.jsxs(fe,{children:[o.jsx(pe,{children:"활동명"}),o.jsx(nt,{value:l.name,maxLength:80,onChange:w=>E({name:w.target.value})})]}),o.jsx(Vl,{label:"자기소개 (마크다운)",value:l.intro,onChange:w=>E({intro:w}),placeholder:"명상을 시작하게 된 계기와 수업 철학을 소개해 주세요.",minHeight:120}),o.jsxs(fe,{children:[o.jsx(pe,{children:"전문 분야 (한 줄에 하나)"}),o.jsx(On,{style:wl,value:(l.specialties??[]).join(`
`),onChange:w=>E({specialties:vl(w.target.value)}),placeholder:`마음챙김 명상
스트레스 완화`})]}),o.jsxs(fe,{children:[o.jsx(pe,{children:"학위 (한 줄에 하나)"}),o.jsx(On,{style:wl,value:(l.degrees??[]).join(`
`),onChange:w=>E({degrees:vl(w.target.value)}),placeholder:"○○대학교 상담심리학 석사"})]}),o.jsxs(fe,{children:[o.jsx(pe,{children:"자격증·이수 교육과정 (한 줄에 하나)"}),o.jsx(On,{style:wl,value:(l.certificates??[]).join(`
`),onChange:w=>E({certificates:vl(w.target.value)})})]}),o.jsxs(fe,{children:[o.jsx(pe,{children:"경력 (한 줄에 하나)"}),o.jsx(On,{style:wl,value:(l.careers??[]).join(`
`),onChange:w=>E({careers:vl(w.target.value)})})]}),o.jsxs(fe,{children:[o.jsx(pe,{children:"클래스 종류"}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:EN.map(w=>o.jsx("button",{type:"button",style:bl(l.classTypes.includes(w)),onClick:()=>A("classTypes",w),children:w},w))})]}),o.jsxs(fe,{children:[o.jsxs(pe,{children:["활동 지역 (",l.regionIds.length,"개 선택)"]}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:Gr.map(w=>o.jsx("button",{type:"button",style:bl(l.regionIds.includes(w.id)),onClick:()=>A("regionIds",w.id),children:w.name},w.id))})]}),o.jsxs(fe,{children:[o.jsx(pe,{children:"센터 여부"}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[o.jsx("button",{type:"button",style:bl(!l.hasCenter),onClick:()=>E({hasCenter:!1}),children:"센터 없음"}),o.jsx("button",{type:"button",style:bl(l.hasCenter),onClick:()=>E({hasCenter:!0}),children:"센터 있음"})]})]}),l.hasCenter&&o.jsxs(o.Fragment,{children:[o.jsxs(fe,{children:[o.jsx(pe,{children:"센터명"}),o.jsx(nt,{value:l.centerSummary??"",onChange:w=>E({centerSummary:w.target.value})})]}),o.jsxs(fe,{children:[o.jsx(pe,{children:"센터 위치"}),o.jsx(nt,{value:l.centerAddress??"",onChange:w=>E({centerAddress:w.target.value})})]}),o.jsxs(fe,{children:[o.jsx(pe,{children:"사업자등록번호"}),o.jsx(nt,{inputMode:"numeric",value:l.businessRegistrationNumber??"",onChange:w=>E({businessRegistrationNumber:w.target.value.replace(/[^\d-]/g,"")})})]}),o.jsxs(fe,{children:[o.jsx(pe,{children:"개업일자"}),o.jsx(nt,{type:"date",value:l.businessOpeningDate??"",onChange:w=>E({businessOpeningDate:w.target.value})})]})]})]}):o.jsx("p",{style:{color:"#a1a1aa"},children:"항목을 선택하거나 새로 등록하세요."})]}),o.jsx(jN,{expert:l}),o.jsx(Or,{open:b,title:i?"계정 생성":"저장",message:i?"전문가 계정을 생성하시겠습니까?":"저장하시겠습니까?",cancelLabel:"취소",confirmLabel:i?"생성":"저장",onCancel:()=>v(!1),onConfirm:()=>{v(!1),C()}}),o.jsx(Or,{open:$!==null,title:"삭제",message:J?`「${J.name||J.id}」을(를) 삭제할까요?`:"삭제할까요?",cancelLabel:"취소",confirmLabel:"삭제",onCancel:()=>x(null),onConfirm:()=>void X()})]})}function IN(){return{category:"공지",title:"",date:new Date().toISOString().slice(0,10),summary:"",body:"",bullets:"",footer:""}}function hg(e){const t=e.details;return{category:String(e.category??"공지"),title:String(e.title??""),date:String(e.date??""),summary:String(e.summary??""),body:((t==null?void 0:t.paragraphs)??[]).join(`

`),bullets:((t==null?void 0:t.bullets)??[]).join(`
`),footer:String((t==null?void 0:t.footer)??"")}}function TN(e){const t=e.body.split(/\n{2,}/).map(i=>i.trim()).filter(Boolean),n=e.bullets.split(`
`).map(i=>i.trim()).filter(Boolean),r={paragraphs:t.length>0?t:[e.summary.trim()||e.title.trim()||"내용"]};return n.length>0&&(r.bullets=n),e.footer.trim()&&(r.footer=e.footer.trim()),{category:e.category.trim()||"공지",title:e.title.trim(),date:e.date.trim(),summary:e.summary.trim(),details:r}}function RN(){const[e,t]=m.useState([]),[n,r]=m.useState(null),[i,s]=m.useState(!1),[l,a]=m.useState(null),[c,d]=m.useState(null),[p,f]=m.useState(!1),[h,g]=m.useState(null),b=l?i?"new":n:null,{savedAt:v,restorable:$,markBaseline:x,clearCurrent:L,dismissRestorable:y}=j0({scope:"notices",recordKey:b,isNew:i,draft:l,label:l==null?void 0:l.title}),S=m.useCallback(async()=>{try{t(await wM())}catch(P){d(P instanceof Error?P.message:"로드 실패")}},[]);m.useEffect(()=>{S()},[S]);const I=()=>{r(null),s(!0);const P=IN();a(P),x(P)},k=P=>{r(P.id),s(!1);const E=hg(P.payload);a(E),x(E)},j=P=>{y(!1),P.isNew?(r(null),s(!0)):(r(P.recordKey),s(!1)),a(P.data),x(P.data)},R=async()=>{if(l){d(null);try{const P=await kM(i?null:n,TN(l));L(),await S(),r(P.id),s(!1);const E=hg(P.payload);a(E),x(E)}catch(P){d(P instanceof Error?P.message:"저장 실패")}}},z=async()=>{if(!h)return;const P=h;g(null);try{await SM(P),Es("notices",P),n===P&&(r(null),s(!1),a(null),x(null)),await S()}catch(E){d(E instanceof Error?E.message:"삭제 실패")}},T=h?e.find(P=>P.id===h):null;return o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1.2fr",gap:16},children:[o.jsxs(xn,{children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:12},children:[o.jsx("h2",{style:{margin:0},children:"공지"}),o.jsx(Le,{$variant:"primary",type:"button",onClick:I,children:"+ 등록"})]}),c&&o.jsx(Zr,{children:c}),o.jsxs(v0,{children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"제목"}),o.jsx("th",{})]})}),o.jsx("tbody",{children:e.map(P=>o.jsxs("tr",{children:[o.jsx("td",{children:o.jsx("button",{type:"button",style:{background:"none",border:"none",color:"#fff",cursor:"pointer"},onClick:()=>k(P),children:P.title||P.payload.title||""||`공지 ${P.id}`})}),o.jsx("td",{children:o.jsx(Le,{$variant:"danger",type:"button",onClick:()=>g(P.id),children:"삭제"})})]},P.id))})]})]}),o.jsxs(xn,{children:[o.jsx(w0,{restorable:$,onRestore:j,onDismiss:y}),l?o.jsxs(o.Fragment,{children:[!i&&n?o.jsxs("p",{style:{margin:"0 0 12px",color:"#71717a",fontSize:13},children:["번호: ",n]}):o.jsx("p",{style:{margin:"0 0 12px",color:"#71717a",fontSize:13},children:"저장 시 번호가 자동 부여됩니다."}),o.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:10,marginBottom:12},children:[o.jsx(k0,{savedAt:v}),o.jsx(Le,{$variant:"primary",type:"button",onClick:()=>f(!0),children:"저장"})]}),o.jsxs(fe,{children:[o.jsx(pe,{children:"분류"}),o.jsx(nt,{value:l.category,onChange:P=>a({...l,category:P.target.value}),placeholder:"예: 공지, 업데이트"})]}),o.jsxs(fe,{children:[o.jsx(pe,{children:"제목"}),o.jsx(nt,{value:l.title,onChange:P=>a({...l,title:P.target.value})})]}),o.jsxs(fe,{children:[o.jsx(pe,{children:"날짜"}),o.jsx(nt,{type:"date",value:l.date,onChange:P=>a({...l,date:P.target.value})})]}),o.jsxs(fe,{children:[o.jsx(pe,{children:"목록 요약"}),o.jsx(On,{style:{minHeight:72,fontFamily:"inherit",fontSize:14},value:l.summary,onChange:P=>a({...l,summary:P.target.value}),placeholder:"공지 목록에 보이는 한두 줄 요약"})]}),o.jsxs(fe,{children:[o.jsx(pe,{children:"본문"}),o.jsx(On,{style:{minHeight:160,fontFamily:"inherit",fontSize:14},value:l.body,onChange:P=>a({...l,body:P.target.value}),placeholder:"문단마다 빈 줄로 구분"})]}),o.jsxs(fe,{children:[o.jsx(pe,{children:"목록 (선택)"}),o.jsx(On,{style:{minHeight:88,fontFamily:"inherit",fontSize:14},value:l.bullets,onChange:P=>a({...l,bullets:P.target.value}),placeholder:"한 줄에 한 항목"})]}),o.jsxs(fe,{children:[o.jsx(pe,{children:"하단 문구 (선택)"}),o.jsx(nt,{value:l.footer,onChange:P=>a({...l,footer:P.target.value})})]})]}):o.jsx("p",{style:{color:"#a1a1aa"},children:"공지를 선택하거나 새로 등록하세요."})]}),o.jsx(Or,{open:p,title:"저장",message:i?"등록하시겠습니까?":"저장하시겠습니까?",cancelLabel:"취소",confirmLabel:"저장",onCancel:()=>f(!1),onConfirm:()=>{f(!1),R()}}),o.jsx(Or,{open:h!==null,title:"삭제",message:T?`「${T.title||T.payload.title||T.id}」을(를) 삭제할까요?`:"삭제할까요?",cancelLabel:"취소",confirmLabel:"삭제",onCancel:()=>g(null),onConfirm:()=>void z()})]})}const zN=[{to:"/admin",label:"트래픽 현황",end:!0},{to:"/admin/places",label:"명상지·센터"},{to:"/admin/experts",label:"전문가"},{to:"/admin/notices",label:"공지"}];function MN(){const[e,t]=m.useState(!0),n=ft(),r=_i(i=>i.logout);return o.jsxs(PM,{children:[o.jsxs(IM,{$open:e,children:[o.jsx("div",{style:{padding:"16px",fontWeight:700,fontSize:15},children:"명상맵 Admin"}),o.jsx("nav",{children:zN.map(i=>o.jsx(L3,{to:i.to,end:i.end,style:{textDecoration:"none"},children:({isActive:s})=>o.jsx(MM,{as:"span",$active:s,children:i.label})},i.to))})]}),o.jsxs(TM,{children:[o.jsxs(RM,{children:[o.jsx(Le,{$variant:"ghost",type:"button",onClick:()=>t(i=>!i),children:"메뉴"}),o.jsxs("div",{style:{display:"flex",gap:8},children:[o.jsx(Le,{$variant:"ghost",type:"button",onClick:()=>n("/"),children:"앱으로"}),o.jsx(Le,{$variant:"ghost",type:"button",onClick:()=>{r().then(()=>n("/admin/login"))},children:"로그아웃"})]})]}),o.jsx(zM,{children:o.jsx(Xp,{})})]})]})}function AN(){const e=_i(r=>r.bootstrap),t=_i(r=>r.ready),n=_i(r=>r.authenticated);return m.useEffect(()=>{e()},[e]),t?n?o.jsx(Xp,{}):o.jsx(Qp,{to:"/admin/login",replace:!0}):null}const _N=[{path:"/welcome",element:o.jsx(qb,{})},{path:"/admin/login",element:o.jsx(NM,{})},{path:"/admin",element:o.jsx(AN,{}),children:[{element:o.jsx(MN,{}),children:[{index:!0,element:o.jsx(cA,{})},{path:"places",element:o.jsx(mN,{})},{path:"experts",element:o.jsx(PN,{})},{path:"notices",element:o.jsx(RN,{})}]}]},{path:"/",element:o.jsx(Ky,{}),children:[{index:!0,element:o.jsx(Ph,{})},{path:"meditation",element:o.jsx(Ph,{})},{path:"meditation/map",element:o.jsx(hw,{})},{path:"meditation/expert/:expertId/class/:programId",element:o.jsx(dP,{})},{path:"meditation/expert/:expertId",element:o.jsx(rP,{})},{path:"meditation/region/:regionId/experts",element:o.jsx(jE,{})},{path:"meditation/region/:regionId",element:o.jsx(pE,{})},{path:"meditation/place/:placeId",element:o.jsx(MI,{})},{path:"favorites",element:o.jsx(yT,{})},{path:"profile",element:o.jsx(xz,{})},{path:"profile/expert",element:o.jsx(Fz,{})},{path:"auth/oauth",element:o.jsx(Uz,{})},{path:"notice",element:o.jsx(nT,{})},{path:"inquiry",element:o.jsx(dT,{})},{path:"service-info",element:o.jsx(tM,{})},{path:"*",element:o.jsx(lM,{})}]}],NN=()=>ey(_N),DN=()=>o.jsx(ky,{children:o.jsx(NN,{})}),ON=u.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,BN=()=>(m.useEffect(()=>{ut.getState().bootstrapAuth(),en.getState().hydrate().then(()=>mr.getState().pullFromServer())},[]),o.jsxs(ON,{children:[o.jsx(L9,{}),o.jsx(k9,{}),o.jsx(DN,{})]})),FN=EL`
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
`;vd.createRoot(document.getElementById("root")).render(o.jsx(Ze.StrictMode,{children:o.jsxs(SL,{theme:qe,children:[o.jsx(FN,{}),o.jsx(BN,{})]})}));
