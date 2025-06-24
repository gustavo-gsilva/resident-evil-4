(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))s(f);new MutationObserver(f=>{for(const m of f)if(m.type==="childList")for(const p of m.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function o(f){const m={};return f.integrity&&(m.integrity=f.integrity),f.referrerPolicy&&(m.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?m.credentials="include":f.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function s(f){if(f.ep)return;f.ep=!0;const m=o(f);fetch(f.href,m)}})();function sh(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var go={exports:{}},al={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0;function D1(){if(d0)return al;d0=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function o(s,f,m){var p=null;if(m!==void 0&&(p=""+m),f.key!==void 0&&(p=""+f.key),"key"in f){m={};for(var v in f)v!=="key"&&(m[v]=f[v])}else m=f;return f=m.ref,{$$typeof:l,type:s,key:p,ref:f!==void 0?f:null,props:m}}return al.Fragment=u,al.jsx=o,al.jsxs=o,al}var m0;function F1(){return m0||(m0=1,go.exports=D1()),go.exports}var c=F1(),po={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0;function R1(){if(h0)return ie;h0=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),p=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),F=Symbol.iterator;function _(y){return y===null||typeof y!="object"?null:(y=F&&y[F]||y["@@iterator"],typeof y=="function"?y:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,G={};function q(y,U,Q){this.props=y,this.context=U,this.refs=G,this.updater=Q||B}q.prototype.isReactComponent={},q.prototype.setState=function(y,U){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,U,"setState")},q.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function L(){}L.prototype=q.prototype;function Y(y,U,Q){this.props=y,this.context=U,this.refs=G,this.updater=Q||B}var K=Y.prototype=new L;K.constructor=Y,R(K,q.prototype),K.isPureReactComponent=!0;var le=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},De=Object.prototype.hasOwnProperty;function je(y,U,Q,X,P,me){return Q=me.ref,{$$typeof:l,type:y,key:U,ref:Q!==void 0?Q:null,props:me}}function Oe(y,U){return je(y.type,U,void 0,void 0,void 0,y.props)}function Ce(y){return typeof y=="object"&&y!==null&&y.$$typeof===l}function et(y){var U={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(Q){return U[Q]})}var xt=/\/+/g;function Ke(y,U){return typeof y=="object"&&y!==null&&y.key!=null?et(""+y.key):U.toString(36)}function Gn(){}function Xn(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(Gn,Gn):(y.status="pending",y.then(function(U){y.status==="pending"&&(y.status="fulfilled",y.value=U)},function(U){y.status==="pending"&&(y.status="rejected",y.reason=U)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function Je(y,U,Q,X,P){var me=typeof y;(me==="undefined"||me==="boolean")&&(y=null);var re=!1;if(y===null)re=!0;else switch(me){case"bigint":case"string":case"number":re=!0;break;case"object":switch(y.$$typeof){case l:case u:re=!0;break;case N:return re=y._init,Je(re(y._payload),U,Q,X,P)}}if(re)return P=P(y),re=X===""?"."+Ke(y,0):X,le(P)?(Q="",re!=null&&(Q=re.replace(xt,"$&/")+"/"),Je(P,U,Q,"",function(mn){return mn})):P!=null&&(Ce(P)&&(P=Oe(P,Q+(P.key==null||y&&y.key===P.key?"":(""+P.key).replace(xt,"$&/")+"/")+re)),U.push(P)),1;re=0;var st=X===""?".":X+":";if(le(y))for(var we=0;we<y.length;we++)X=y[we],me=st+Ke(X,we),re+=Je(X,U,Q,me,P);else if(we=_(y),typeof we=="function")for(y=we.call(y),we=0;!(X=y.next()).done;)X=X.value,me=st+Ke(X,we++),re+=Je(X,U,Q,me,P);else if(me==="object"){if(typeof y.then=="function")return Je(Xn(y),U,Q,X,P);throw U=String(y),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return re}function T(y,U,Q){if(y==null)return y;var X=[],P=0;return Je(y,X,"","",function(me){return U.call(Q,me,P++)}),X}function V(y){if(y._status===-1){var U=y._result;U=U(),U.then(function(Q){(y._status===0||y._status===-1)&&(y._status=1,y._result=Q)},function(Q){(y._status===0||y._status===-1)&&(y._status=2,y._result=Q)}),y._status===-1&&(y._status=0,y._result=U)}if(y._status===1)return y._result.default;throw y._result}var ne=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)};function Se(){}return ie.Children={map:T,forEach:function(y,U,Q){T(y,function(){U.apply(this,arguments)},Q)},count:function(y){var U=0;return T(y,function(){U++}),U},toArray:function(y){return T(y,function(U){return U})||[]},only:function(y){if(!Ce(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},ie.Component=q,ie.Fragment=o,ie.Profiler=f,ie.PureComponent=Y,ie.StrictMode=s,ie.Suspense=x,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ie.__COMPILER_RUNTIME={__proto__:null,c:function(y){return I.H.useMemoCache(y)}},ie.cache=function(y){return function(){return y.apply(null,arguments)}},ie.cloneElement=function(y,U,Q){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var X=R({},y.props),P=y.key,me=void 0;if(U!=null)for(re in U.ref!==void 0&&(me=void 0),U.key!==void 0&&(P=""+U.key),U)!De.call(U,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&U.ref===void 0||(X[re]=U[re]);var re=arguments.length-2;if(re===1)X.children=Q;else if(1<re){for(var st=Array(re),we=0;we<re;we++)st[we]=arguments[we+2];X.children=st}return je(y.type,P,void 0,void 0,me,X)},ie.createContext=function(y){return y={$$typeof:p,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:m,_context:y},y},ie.createElement=function(y,U,Q){var X,P={},me=null;if(U!=null)for(X in U.key!==void 0&&(me=""+U.key),U)De.call(U,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(P[X]=U[X]);var re=arguments.length-2;if(re===1)P.children=Q;else if(1<re){for(var st=Array(re),we=0;we<re;we++)st[we]=arguments[we+2];P.children=st}if(y&&y.defaultProps)for(X in re=y.defaultProps,re)P[X]===void 0&&(P[X]=re[X]);return je(y,me,void 0,void 0,null,P)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(y){return{$$typeof:v,render:y}},ie.isValidElement=Ce,ie.lazy=function(y){return{$$typeof:N,_payload:{_status:-1,_result:y},_init:V}},ie.memo=function(y,U){return{$$typeof:g,type:y,compare:U===void 0?null:U}},ie.startTransition=function(y){var U=I.T,Q={};I.T=Q;try{var X=y(),P=I.S;P!==null&&P(Q,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(Se,ne)}catch(me){ne(me)}finally{I.T=U}},ie.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ie.use=function(y){return I.H.use(y)},ie.useActionState=function(y,U,Q){return I.H.useActionState(y,U,Q)},ie.useCallback=function(y,U){return I.H.useCallback(y,U)},ie.useContext=function(y){return I.H.useContext(y)},ie.useDebugValue=function(){},ie.useDeferredValue=function(y,U){return I.H.useDeferredValue(y,U)},ie.useEffect=function(y,U,Q){var X=I.H;if(typeof Q=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return X.useEffect(y,U)},ie.useId=function(){return I.H.useId()},ie.useImperativeHandle=function(y,U,Q){return I.H.useImperativeHandle(y,U,Q)},ie.useInsertionEffect=function(y,U){return I.H.useInsertionEffect(y,U)},ie.useLayoutEffect=function(y,U){return I.H.useLayoutEffect(y,U)},ie.useMemo=function(y,U){return I.H.useMemo(y,U)},ie.useOptimistic=function(y,U){return I.H.useOptimistic(y,U)},ie.useReducer=function(y,U,Q){return I.H.useReducer(y,U,Q)},ie.useRef=function(y){return I.H.useRef(y)},ie.useState=function(y){return I.H.useState(y)},ie.useSyncExternalStore=function(y,U,Q){return I.H.useSyncExternalStore(y,U,Q)},ie.useTransition=function(){return I.H.useTransition()},ie.version="19.1.0",ie}var g0;function Po(){return g0||(g0=1,po.exports=R1()),po.exports}var z=Po();const uh=sh(z);var vo={exports:{}},rl={},xo={exports:{}},bo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p0;function M1(){return p0||(p0=1,function(l){function u(T,V){var ne=T.length;T.push(V);e:for(;0<ne;){var Se=ne-1>>>1,y=T[Se];if(0<f(y,V))T[Se]=V,T[ne]=y,ne=Se;else break e}}function o(T){return T.length===0?null:T[0]}function s(T){if(T.length===0)return null;var V=T[0],ne=T.pop();if(ne!==V){T[0]=ne;e:for(var Se=0,y=T.length,U=y>>>1;Se<U;){var Q=2*(Se+1)-1,X=T[Q],P=Q+1,me=T[P];if(0>f(X,ne))P<y&&0>f(me,X)?(T[Se]=me,T[P]=ne,Se=P):(T[Se]=X,T[Q]=ne,Se=Q);else if(P<y&&0>f(me,ne))T[Se]=me,T[P]=ne,Se=P;else break e}}return V}function f(T,V){var ne=T.sortIndex-V.sortIndex;return ne!==0?ne:T.id-V.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;l.unstable_now=function(){return m.now()}}else{var p=Date,v=p.now();l.unstable_now=function(){return p.now()-v}}var x=[],g=[],N=1,F=null,_=3,B=!1,R=!1,G=!1,q=!1,L=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;function le(T){for(var V=o(g);V!==null;){if(V.callback===null)s(g);else if(V.startTime<=T)s(g),V.sortIndex=V.expirationTime,u(x,V);else break;V=o(g)}}function I(T){if(G=!1,le(T),!R)if(o(x)!==null)R=!0,De||(De=!0,Ke());else{var V=o(g);V!==null&&Je(I,V.startTime-T)}}var De=!1,je=-1,Oe=5,Ce=-1;function et(){return q?!0:!(l.unstable_now()-Ce<Oe)}function xt(){if(q=!1,De){var T=l.unstable_now();Ce=T;var V=!0;try{e:{R=!1,G&&(G=!1,Y(je),je=-1),B=!0;var ne=_;try{t:{for(le(T),F=o(x);F!==null&&!(F.expirationTime>T&&et());){var Se=F.callback;if(typeof Se=="function"){F.callback=null,_=F.priorityLevel;var y=Se(F.expirationTime<=T);if(T=l.unstable_now(),typeof y=="function"){F.callback=y,le(T),V=!0;break t}F===o(x)&&s(x),le(T)}else s(x);F=o(x)}if(F!==null)V=!0;else{var U=o(g);U!==null&&Je(I,U.startTime-T),V=!1}}break e}finally{F=null,_=ne,B=!1}V=void 0}}finally{V?Ke():De=!1}}}var Ke;if(typeof K=="function")Ke=function(){K(xt)};else if(typeof MessageChannel<"u"){var Gn=new MessageChannel,Xn=Gn.port2;Gn.port1.onmessage=xt,Ke=function(){Xn.postMessage(null)}}else Ke=function(){L(xt,0)};function Je(T,V){je=L(function(){T(l.unstable_now())},V)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(T){T.callback=null},l.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Oe=0<T?Math.floor(1e3/T):5},l.unstable_getCurrentPriorityLevel=function(){return _},l.unstable_next=function(T){switch(_){case 1:case 2:case 3:var V=3;break;default:V=_}var ne=_;_=V;try{return T()}finally{_=ne}},l.unstable_requestPaint=function(){q=!0},l.unstable_runWithPriority=function(T,V){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var ne=_;_=T;try{return V()}finally{_=ne}},l.unstable_scheduleCallback=function(T,V,ne){var Se=l.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?Se+ne:Se):ne=Se,T){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=ne+y,T={id:N++,callback:V,priorityLevel:T,startTime:ne,expirationTime:y,sortIndex:-1},ne>Se?(T.sortIndex=ne,u(g,T),o(x)===null&&T===o(g)&&(G?(Y(je),je=-1):G=!0,Je(I,ne-Se))):(T.sortIndex=y,u(x,T),R||B||(R=!0,De||(De=!0,Ke()))),T},l.unstable_shouldYield=et,l.unstable_wrapCallback=function(T){var V=_;return function(){var ne=_;_=V;try{return T.apply(this,arguments)}finally{_=ne}}}}(bo)),bo}var v0;function U1(){return v0||(v0=1,xo.exports=M1()),xo.exports}var yo={exports:{}},We={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x0;function L1(){if(x0)return We;x0=1;var l=Po();function u(x){var g="https://react.dev/errors/"+x;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)g+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+x+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var s={d:{f:o,r:function(){throw Error(u(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},f=Symbol.for("react.portal");function m(x,g,N){var F=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:F==null?null:""+F,children:x,containerInfo:g,implementation:N}}var p=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(x,g){if(x==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return We.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,We.createPortal=function(x,g){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(u(299));return m(x,g,null,N)},We.flushSync=function(x){var g=p.T,N=s.p;try{if(p.T=null,s.p=2,x)return x()}finally{p.T=g,s.p=N,s.d.f()}},We.preconnect=function(x,g){typeof x=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(x,g))},We.prefetchDNS=function(x){typeof x=="string"&&s.d.D(x)},We.preinit=function(x,g){if(typeof x=="string"&&g&&typeof g.as=="string"){var N=g.as,F=v(N,g.crossOrigin),_=typeof g.integrity=="string"?g.integrity:void 0,B=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;N==="style"?s.d.S(x,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:F,integrity:_,fetchPriority:B}):N==="script"&&s.d.X(x,{crossOrigin:F,integrity:_,fetchPriority:B,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},We.preinitModule=function(x,g){if(typeof x=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var N=v(g.as,g.crossOrigin);s.d.M(x,{crossOrigin:N,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(x)},We.preload=function(x,g){if(typeof x=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var N=g.as,F=v(N,g.crossOrigin);s.d.L(x,N,{crossOrigin:F,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},We.preloadModule=function(x,g){if(typeof x=="string")if(g){var N=v(g.as,g.crossOrigin);s.d.m(x,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:N,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(x)},We.requestFormReset=function(x){s.d.r(x)},We.unstable_batchedUpdates=function(x,g){return x(g)},We.useFormState=function(x,g,N){return p.H.useFormState(x,g,N)},We.useFormStatus=function(){return p.H.useHostTransitionStatus()},We.version="19.1.0",We}var b0;function H1(){if(b0)return yo.exports;b0=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),yo.exports=L1(),yo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0;function B1(){if(y0)return rl;y0=1;var l=U1(),u=Po(),o=H1();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(m(e)!==e)throw Error(s(188))}function x(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,a=t;;){var r=n.return;if(r===null)break;var i=r.alternate;if(i===null){if(a=r.return,a!==null){n=a;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===n)return v(r),e;if(i===a)return v(r),t;i=i.sibling}throw Error(s(188))}if(n.return!==a.return)n=r,a=i;else{for(var d=!1,h=r.child;h;){if(h===n){d=!0,n=r,a=i;break}if(h===a){d=!0,a=r,n=i;break}h=h.sibling}if(!d){for(h=i.child;h;){if(h===n){d=!0,n=i,a=r;break}if(h===a){d=!0,a=i,n=r;break}h=h.sibling}if(!d)throw Error(s(189))}}if(n.alternate!==a)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var N=Object.assign,F=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),L=Symbol.for("react.provider"),Y=Symbol.for("react.consumer"),K=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),De=Symbol.for("react.suspense_list"),je=Symbol.for("react.memo"),Oe=Symbol.for("react.lazy"),Ce=Symbol.for("react.activity"),et=Symbol.for("react.memo_cache_sentinel"),xt=Symbol.iterator;function Ke(e){return e===null||typeof e!="object"?null:(e=xt&&e[xt]||e["@@iterator"],typeof e=="function"?e:null)}var Gn=Symbol.for("react.client.reference");function Xn(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Gn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case q:return"Profiler";case G:return"StrictMode";case I:return"Suspense";case De:return"SuspenseList";case Ce:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case K:return(e.displayName||"Context")+".Provider";case Y:return(e._context.displayName||"Context")+".Consumer";case le:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case je:return t=e.displayName||null,t!==null?t:Xn(e.type)||"Memo";case Oe:t=e._payload,e=e._init;try{return Xn(e(t))}catch{}}return null}var Je=Array.isArray,T=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},Se=[],y=-1;function U(e){return{current:e}}function Q(e){0>y||(e.current=Se[y],Se[y]=null,y--)}function X(e,t){y++,Se[y]=e.current,e.current=t}var P=U(null),me=U(null),re=U(null),st=U(null);function we(e,t){switch(X(re,t),X(me,e),X(P,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?qm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=qm(t),e=Ym(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Q(P),X(P,e)}function mn(){Q(P),Q(me),Q(re)}function Pi(e){e.memoizedState!==null&&X(st,e);var t=P.current,n=Ym(t,e.type);t!==n&&(X(me,e),X(P,n))}function bl(e){me.current===e&&(Q(P),Q(me)),st.current===e&&(Q(st),Wr._currentValue=ne)}var es=Object.prototype.hasOwnProperty,ts=l.unstable_scheduleCallback,ns=l.unstable_cancelCallback,cg=l.unstable_shouldYield,fg=l.unstable_requestPaint,Ft=l.unstable_now,dg=l.unstable_getCurrentPriorityLevel,bc=l.unstable_ImmediatePriority,yc=l.unstable_UserBlockingPriority,yl=l.unstable_NormalPriority,mg=l.unstable_LowPriority,Sc=l.unstable_IdlePriority,hg=l.log,gg=l.unstable_setDisableYieldValue,ir=null,ut=null;function hn(e){if(typeof hg=="function"&&gg(e),ut&&typeof ut.setStrictMode=="function")try{ut.setStrictMode(ir,e)}catch{}}var ot=Math.clz32?Math.clz32:xg,pg=Math.log,vg=Math.LN2;function xg(e){return e>>>=0,e===0?32:31-(pg(e)/vg|0)|0}var Sl=256,Nl=4194304;function Vn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function jl(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var r=0,i=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var h=a&134217727;return h!==0?(a=h&~i,a!==0?r=Vn(a):(d&=h,d!==0?r=Vn(d):n||(n=h&~e,n!==0&&(r=Vn(n))))):(h=a&~i,h!==0?r=Vn(h):d!==0?r=Vn(d):n||(n=a&~e,n!==0&&(r=Vn(n)))),r===0?0:t!==0&&t!==r&&(t&i)===0&&(i=r&-r,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:r}function sr(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function bg(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nc(){var e=Sl;return Sl<<=1,(Sl&4194048)===0&&(Sl=256),e}function jc(){var e=Nl;return Nl<<=1,(Nl&62914560)===0&&(Nl=4194304),e}function as(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ur(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function yg(e,t,n,a,r,i){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var h=e.entanglements,b=e.expirationTimes,A=e.hiddenUpdates;for(n=d&~n;0<n;){var O=31-ot(n),M=1<<O;h[O]=0,b[O]=-1;var C=A[O];if(C!==null)for(A[O]=null,O=0;O<C.length;O++){var w=C[O];w!==null&&(w.lane&=-536870913)}n&=~M}a!==0&&Ec(e,a,0),i!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=i&~(d&~t))}function Ec(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-ot(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&4194090}function Ac(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-ot(n),r=1<<a;r&t|e[a]&t&&(e[a]|=t),n&=~r}}function rs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ls(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Cc(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:i0(e.type))}function Sg(e,t){var n=V.p;try{return V.p=e,t()}finally{V.p=n}}var gn=Math.random().toString(36).slice(2),Ie="__reactFiber$"+gn,nt="__reactProps$"+gn,ma="__reactContainer$"+gn,is="__reactEvents$"+gn,Ng="__reactListeners$"+gn,jg="__reactHandles$"+gn,wc="__reactResources$"+gn,or="__reactMarker$"+gn;function ss(e){delete e[Ie],delete e[nt],delete e[is],delete e[Ng],delete e[jg]}function ha(e){var t=e[Ie];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ma]||n[Ie]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Vm(e);e!==null;){if(n=e[Ie])return n;e=Vm(e)}return t}e=n,n=e.parentNode}return null}function ga(e){if(e=e[Ie]||e[ma]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function cr(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function pa(e){var t=e[wc];return t||(t=e[wc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ye(e){e[or]=!0}var _c=new Set,Oc={};function Qn(e,t){va(e,t),va(e+"Capture",t)}function va(e,t){for(Oc[e]=t,e=0;e<t.length;e++)_c.add(t[e])}var Eg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),zc={},Tc={};function Ag(e){return es.call(Tc,e)?!0:es.call(zc,e)?!1:Eg.test(e)?Tc[e]=!0:(zc[e]=!0,!1)}function El(e,t,n){if(Ag(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Al(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Xt(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}var us,Dc;function xa(e){if(us===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);us=t&&t[1]||"",Dc=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+us+e+Dc}var os=!1;function cs(e,t){if(!e||os)return"";os=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(w){var C=w}Reflect.construct(e,[],M)}else{try{M.call()}catch(w){C=w}e.call(M.prototype)}}else{try{throw Error()}catch(w){C=w}(M=e())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(w){if(w&&C&&typeof w.stack=="string")return[w.stack,C.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),d=i[0],h=i[1];if(d&&h){var b=d.split(`
`),A=h.split(`
`);for(r=a=0;a<b.length&&!b[a].includes("DetermineComponentFrameRoot");)a++;for(;r<A.length&&!A[r].includes("DetermineComponentFrameRoot");)r++;if(a===b.length||r===A.length)for(a=b.length-1,r=A.length-1;1<=a&&0<=r&&b[a]!==A[r];)r--;for(;1<=a&&0<=r;a--,r--)if(b[a]!==A[r]){if(a!==1||r!==1)do if(a--,r--,0>r||b[a]!==A[r]){var O=`
`+b[a].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=a&&0<=r);break}}}finally{os=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?xa(n):""}function Cg(e){switch(e.tag){case 26:case 27:case 5:return xa(e.type);case 16:return xa("Lazy");case 13:return xa("Suspense");case 19:return xa("SuspenseList");case 0:case 15:return cs(e.type,!1);case 11:return cs(e.type.render,!1);case 1:return cs(e.type,!0);case 31:return xa("Activity");default:return""}}function Fc(e){try{var t="";do t+=Cg(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function bt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wg(e){var t=Rc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(d){a=""+d,i.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(d){a=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Cl(e){e._valueTracker||(e._valueTracker=wg(e))}function Mc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Rc(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function wl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var _g=/[\n"\\]/g;function yt(e){return e.replace(_g,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function fs(e,t,n,a,r,i,d,h){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+bt(t)):e.value!==""+bt(t)&&(e.value=""+bt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?ds(e,d,bt(t)):n!=null?ds(e,d,bt(n)):a!=null&&e.removeAttribute("value"),r==null&&i!=null&&(e.defaultChecked=!!i),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+bt(h):e.removeAttribute("name")}function Uc(e,t,n,a,r,i,d,h){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null))return;n=n!=null?""+bt(n):"",t=t!=null?""+bt(t):n,h||t===e.value||(e.value=t),e.defaultValue=t}a=a??r,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=h?e.checked:!!a,e.defaultChecked=!!a,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d)}function ds(e,t,n){t==="number"&&wl(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ba(e,t,n,a){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&a&&(e[n].defaultSelected=!0)}else{for(n=""+bt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Lc(e,t,n){if(t!=null&&(t=""+bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+bt(n):""}function Hc(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(s(92));if(Je(a)){if(1<a.length)throw Error(s(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=bt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a)}function ya(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Og=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bc(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Og.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function qc(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var r in t)a=t[r],t.hasOwnProperty(r)&&n[r]!==a&&Bc(e,r,a)}else for(var i in t)t.hasOwnProperty(i)&&Bc(e,i,t[i])}function ms(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Tg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _l(e){return Tg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var hs=null;function gs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sa=null,Na=null;function Yc(e){var t=ga(e);if(t&&(e=t.stateNode)){var n=e[nt]||null;e:switch(e=t.stateNode,t.type){case"input":if(fs(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+yt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var r=a[nt]||null;if(!r)throw Error(s(90));fs(a,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Mc(a)}break e;case"textarea":Lc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ba(e,!!n.multiple,t,!1)}}}var ps=!1;function kc(e,t,n){if(ps)return e(t,n);ps=!0;try{var a=e(t);return a}finally{if(ps=!1,(Sa!==null||Na!==null)&&(mi(),Sa&&(t=Sa,e=Na,Na=Sa=null,Yc(t),e)))for(t=0;t<e.length;t++)Yc(e[t])}}function fr(e,t){var n=e.stateNode;if(n===null)return null;var a=n[nt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vs=!1;if(Vt)try{var dr={};Object.defineProperty(dr,"passive",{get:function(){vs=!0}}),window.addEventListener("test",dr,dr),window.removeEventListener("test",dr,dr)}catch{vs=!1}var pn=null,xs=null,Ol=null;function Gc(){if(Ol)return Ol;var e,t=xs,n=t.length,a,r="value"in pn?pn.value:pn.textContent,i=r.length;for(e=0;e<n&&t[e]===r[e];e++);var d=n-e;for(a=1;a<=d&&t[n-a]===r[i-a];a++);return Ol=r.slice(e,1<a?1-a:void 0)}function zl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tl(){return!0}function Xc(){return!1}function at(e){function t(n,a,r,i,d){this._reactName=n,this._targetInst=r,this.type=a,this.nativeEvent=i,this.target=d,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(i):i[h]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Tl:Xc,this.isPropagationStopped=Xc,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Tl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Tl)},persist:function(){},isPersistent:Tl}),t}var Zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dl=at(Zn),mr=N({},Zn,{view:0,detail:0}),Dg=at(mr),bs,ys,hr,Fl=N({},mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ns,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hr&&(hr&&e.type==="mousemove"?(bs=e.screenX-hr.screenX,ys=e.screenY-hr.screenY):ys=bs=0,hr=e),bs)},movementY:function(e){return"movementY"in e?e.movementY:ys}}),Vc=at(Fl),Fg=N({},Fl,{dataTransfer:0}),Rg=at(Fg),Mg=N({},mr,{relatedTarget:0}),Ss=at(Mg),Ug=N({},Zn,{animationName:0,elapsedTime:0,pseudoElement:0}),Lg=at(Ug),Hg=N({},Zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bg=at(Hg),qg=N({},Zn,{data:0}),Qc=at(qg),Yg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gg[e])?!!t[e]:!1}function Ns(){return Xg}var Vg=N({},mr,{key:function(e){if(e.key){var t=Yg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ns,charCode:function(e){return e.type==="keypress"?zl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qg=at(Vg),Zg=N({},Fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zc=at(Zg),Kg=N({},mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ns}),Jg=at(Kg),Ig=N({},Zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),$g=at(Ig),Wg=N({},Fl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pg=at(Wg),ep=N({},Zn,{newState:0,oldState:0}),tp=at(ep),np=[9,13,27,32],js=Vt&&"CompositionEvent"in window,gr=null;Vt&&"documentMode"in document&&(gr=document.documentMode);var ap=Vt&&"TextEvent"in window&&!gr,Kc=Vt&&(!js||gr&&8<gr&&11>=gr),Jc=" ",Ic=!1;function $c(e,t){switch(e){case"keyup":return np.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ja=!1;function rp(e,t){switch(e){case"compositionend":return Wc(t);case"keypress":return t.which!==32?null:(Ic=!0,Jc);case"textInput":return e=t.data,e===Jc&&Ic?null:e;default:return null}}function lp(e,t){if(ja)return e==="compositionend"||!js&&$c(e,t)?(e=Gc(),Ol=xs=pn=null,ja=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kc&&t.locale!=="ko"?null:t.data;default:return null}}var ip={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ip[e.type]:t==="textarea"}function ef(e,t,n,a){Sa?Na?Na.push(a):Na=[a]:Sa=a,t=bi(t,"onChange"),0<t.length&&(n=new Dl("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var pr=null,vr=null;function sp(e){Mm(e,0)}function Rl(e){var t=cr(e);if(Mc(t))return e}function tf(e,t){if(e==="change")return t}var nf=!1;if(Vt){var Es;if(Vt){var As="oninput"in document;if(!As){var af=document.createElement("div");af.setAttribute("oninput","return;"),As=typeof af.oninput=="function"}Es=As}else Es=!1;nf=Es&&(!document.documentMode||9<document.documentMode)}function rf(){pr&&(pr.detachEvent("onpropertychange",lf),vr=pr=null)}function lf(e){if(e.propertyName==="value"&&Rl(vr)){var t=[];ef(t,vr,e,gs(e)),kc(sp,t)}}function up(e,t,n){e==="focusin"?(rf(),pr=t,vr=n,pr.attachEvent("onpropertychange",lf)):e==="focusout"&&rf()}function op(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Rl(vr)}function cp(e,t){if(e==="click")return Rl(t)}function fp(e,t){if(e==="input"||e==="change")return Rl(t)}function dp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:dp;function xr(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var r=n[a];if(!es.call(t,r)||!ct(e[r],t[r]))return!1}return!0}function sf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function uf(e,t){var n=sf(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sf(n)}}function of(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?of(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=wl(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=wl(e.document)}return t}function Cs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var mp=Vt&&"documentMode"in document&&11>=document.documentMode,Ea=null,ws=null,br=null,_s=!1;function ff(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_s||Ea==null||Ea!==wl(a)||(a=Ea,"selectionStart"in a&&Cs(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),br&&xr(br,a)||(br=a,a=bi(ws,"onSelect"),0<a.length&&(t=new Dl("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Ea)))}function Kn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Aa={animationend:Kn("Animation","AnimationEnd"),animationiteration:Kn("Animation","AnimationIteration"),animationstart:Kn("Animation","AnimationStart"),transitionrun:Kn("Transition","TransitionRun"),transitionstart:Kn("Transition","TransitionStart"),transitioncancel:Kn("Transition","TransitionCancel"),transitionend:Kn("Transition","TransitionEnd")},Os={},df={};Vt&&(df=document.createElement("div").style,"AnimationEvent"in window||(delete Aa.animationend.animation,delete Aa.animationiteration.animation,delete Aa.animationstart.animation),"TransitionEvent"in window||delete Aa.transitionend.transition);function Jn(e){if(Os[e])return Os[e];if(!Aa[e])return e;var t=Aa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in df)return Os[e]=t[n];return e}var mf=Jn("animationend"),hf=Jn("animationiteration"),gf=Jn("animationstart"),hp=Jn("transitionrun"),gp=Jn("transitionstart"),pp=Jn("transitioncancel"),pf=Jn("transitionend"),vf=new Map,zs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zs.push("scrollEnd");function zt(e,t){vf.set(e,t),Qn(t,[e])}var xf=new WeakMap;function St(e,t){if(typeof e=="object"&&e!==null){var n=xf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Fc(t)},xf.set(e,t),t)}return{value:e,source:t,stack:Fc(t)}}var Nt=[],Ca=0,Ts=0;function Ml(){for(var e=Ca,t=Ts=Ca=0;t<e;){var n=Nt[t];Nt[t++]=null;var a=Nt[t];Nt[t++]=null;var r=Nt[t];Nt[t++]=null;var i=Nt[t];if(Nt[t++]=null,a!==null&&r!==null){var d=a.pending;d===null?r.next=r:(r.next=d.next,d.next=r),a.pending=r}i!==0&&bf(n,r,i)}}function Ul(e,t,n,a){Nt[Ca++]=e,Nt[Ca++]=t,Nt[Ca++]=n,Nt[Ca++]=a,Ts|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Ds(e,t,n,a){return Ul(e,t,n,a),Ll(e)}function wa(e,t){return Ul(e,null,null,t),Ll(e)}function bf(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var r=!1,i=e.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(r=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,r&&t!==null&&(r=31-ot(n),e=i.hiddenUpdates,a=e[r],a===null?e[r]=[t]:a.push(t),t.lane=n|536870912),i):null}function Ll(e){if(50<Xr)throw Xr=0,Hu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var _a={};function vp(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,t,n,a){return new vp(e,t,n,a)}function Fs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qt(e,t){var n=e.alternate;return n===null?(n=ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function yf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Hl(e,t,n,a,r,i){var d=0;if(a=e,typeof e=="function")Fs(e)&&(d=1);else if(typeof e=="string")d=b1(e,n,P.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ce:return e=ft(31,n,t,r),e.elementType=Ce,e.lanes=i,e;case R:return In(n.children,r,i,t);case G:d=8,r|=24;break;case q:return e=ft(12,n,t,r|2),e.elementType=q,e.lanes=i,e;case I:return e=ft(13,n,t,r),e.elementType=I,e.lanes=i,e;case De:return e=ft(19,n,t,r),e.elementType=De,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:case K:d=10;break e;case Y:d=9;break e;case le:d=11;break e;case je:d=14;break e;case Oe:d=16,a=null;break e}d=29,n=Error(s(130,e===null?"null":typeof e,"")),a=null}return t=ft(d,n,t,r),t.elementType=e,t.type=a,t.lanes=i,t}function In(e,t,n,a){return e=ft(7,e,a,t),e.lanes=n,e}function Rs(e,t,n){return e=ft(6,e,null,t),e.lanes=n,e}function Ms(e,t,n){return t=ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Oa=[],za=0,Bl=null,ql=0,jt=[],Et=0,$n=null,Zt=1,Kt="";function Wn(e,t){Oa[za++]=ql,Oa[za++]=Bl,Bl=e,ql=t}function Sf(e,t,n){jt[Et++]=Zt,jt[Et++]=Kt,jt[Et++]=$n,$n=e;var a=Zt;e=Kt;var r=32-ot(a)-1;a&=~(1<<r),n+=1;var i=32-ot(t)+r;if(30<i){var d=r-r%5;i=(a&(1<<d)-1).toString(32),a>>=d,r-=d,Zt=1<<32-ot(t)+r|n<<r|a,Kt=i+e}else Zt=1<<i|n<<r|a,Kt=e}function Us(e){e.return!==null&&(Wn(e,1),Sf(e,1,0))}function Ls(e){for(;e===Bl;)Bl=Oa[--za],Oa[za]=null,ql=Oa[--za],Oa[za]=null;for(;e===$n;)$n=jt[--Et],jt[Et]=null,Kt=jt[--Et],jt[Et]=null,Zt=jt[--Et],jt[Et]=null}var tt=null,Fe=null,ge=!1,Pn=null,Rt=!1,Hs=Error(s(519));function ea(e){var t=Error(s(418,""));throw Nr(St(t,e)),Hs}function Nf(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Ie]=e,t[nt]=a,n){case"dialog":ce("cancel",t),ce("close",t);break;case"iframe":case"object":case"embed":ce("load",t);break;case"video":case"audio":for(n=0;n<Qr.length;n++)ce(Qr[n],t);break;case"source":ce("error",t);break;case"img":case"image":case"link":ce("error",t),ce("load",t);break;case"details":ce("toggle",t);break;case"input":ce("invalid",t),Uc(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Cl(t);break;case"select":ce("invalid",t);break;case"textarea":ce("invalid",t),Hc(t,a.value,a.defaultValue,a.children),Cl(t)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Bm(t.textContent,n)?(a.popover!=null&&(ce("beforetoggle",t),ce("toggle",t)),a.onScroll!=null&&ce("scroll",t),a.onScrollEnd!=null&&ce("scrollend",t),a.onClick!=null&&(t.onclick=yi),t=!0):t=!1,t||ea(e)}function jf(e){for(tt=e.return;tt;)switch(tt.tag){case 5:case 13:Rt=!1;return;case 27:case 3:Rt=!0;return;default:tt=tt.return}}function yr(e){if(e!==tt)return!1;if(!ge)return jf(e),ge=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||eo(e.type,e.memoizedProps)),n=!n),n&&Fe&&ea(e),jf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Fe=Dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Fe=null}}else t===27?(t=Fe,Dn(e.type)?(e=ro,ro=null,Fe=e):Fe=t):Fe=tt?Dt(e.stateNode.nextSibling):null;return!0}function Sr(){Fe=tt=null,ge=!1}function Ef(){var e=Pn;return e!==null&&(it===null?it=e:it.push.apply(it,e),Pn=null),e}function Nr(e){Pn===null?Pn=[e]:Pn.push(e)}var Bs=U(null),ta=null,Jt=null;function vn(e,t,n){X(Bs,t._currentValue),t._currentValue=n}function It(e){e._currentValue=Bs.current,Q(Bs)}function qs(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Ys(e,t,n,a){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var i=r.dependencies;if(i!==null){var d=r.child;i=i.firstContext;e:for(;i!==null;){var h=i;i=r;for(var b=0;b<t.length;b++)if(h.context===t[b]){i.lanes|=n,h=i.alternate,h!==null&&(h.lanes|=n),qs(i.return,n,e),a||(d=null);break e}i=h.next}}else if(r.tag===18){if(d=r.return,d===null)throw Error(s(341));d.lanes|=n,i=d.alternate,i!==null&&(i.lanes|=n),qs(d,n,e),d=null}else d=r.child;if(d!==null)d.return=r;else for(d=r;d!==null;){if(d===e){d=null;break}if(r=d.sibling,r!==null){r.return=d.return,d=r;break}d=d.return}r=d}}function jr(e,t,n,a){e=null;for(var r=t,i=!1;r!==null;){if(!i){if((r.flags&524288)!==0)i=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var d=r.alternate;if(d===null)throw Error(s(387));if(d=d.memoizedProps,d!==null){var h=r.type;ct(r.pendingProps.value,d.value)||(e!==null?e.push(h):e=[h])}}else if(r===st.current){if(d=r.alternate,d===null)throw Error(s(387));d.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Wr):e=[Wr])}r=r.return}e!==null&&Ys(t,e,n,a),t.flags|=262144}function Yl(e){for(e=e.firstContext;e!==null;){if(!ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function na(e){ta=e,Jt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function $e(e){return Af(ta,e)}function kl(e,t){return ta===null&&na(e),Af(e,t)}function Af(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Jt===null){if(e===null)throw Error(s(308));Jt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Jt=Jt.next=t;return n}var xp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},bp=l.unstable_scheduleCallback,yp=l.unstable_NormalPriority,Be={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ks(){return{controller:new xp,data:new Map,refCount:0}}function Er(e){e.refCount--,e.refCount===0&&bp(yp,function(){e.controller.abort()})}var Ar=null,Gs=0,Ta=0,Da=null;function Sp(e,t){if(Ar===null){var n=Ar=[];Gs=0,Ta=Vu(),Da={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Gs++,t.then(Cf,Cf),t}function Cf(){if(--Gs===0&&Ar!==null){Da!==null&&(Da.status="fulfilled");var e=Ar;Ar=null,Ta=0,Da=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Np(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(a.status="rejected",a.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),a}var wf=T.S;T.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Sp(e,t),wf!==null&&wf(e,t)};var aa=U(null);function Xs(){var e=aa.current;return e!==null?e:Ee.pooledCache}function Gl(e,t){t===null?X(aa,aa.current):X(aa,t.pool)}function _f(){var e=Xs();return e===null?null:{parent:Be._currentValue,pool:e}}var Cr=Error(s(460)),Of=Error(s(474)),Xl=Error(s(542)),Vs={then:function(){}};function zf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vl(){}function Tf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Vl,Vl),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ff(e),e;default:if(typeof t.status=="string")t.then(Vl,Vl);else{if(e=Ee,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=a}},function(a){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ff(e),e}throw wr=t,Cr}}var wr=null;function Df(){if(wr===null)throw Error(s(459));var e=wr;return wr=null,e}function Ff(e){if(e===Cr||e===Xl)throw Error(s(483))}var xn=!1;function Qs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function bn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function yn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(pe&2)!==0){var r=a.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),a.pending=t,t=Ll(e),bf(e,null,n),t}return Ul(e,a,t,n),Ll(e)}function _r(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Ac(e,n)}}function Ks(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var r=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?r=i=d:i=i.next=d,n=n.next}while(n!==null);i===null?r=i=t:i=i.next=t}else r=i=t;n={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Js=!1;function Or(){if(Js){var e=Da;if(e!==null)throw e}}function zr(e,t,n,a){Js=!1;var r=e.updateQueue;xn=!1;var i=r.firstBaseUpdate,d=r.lastBaseUpdate,h=r.shared.pending;if(h!==null){r.shared.pending=null;var b=h,A=b.next;b.next=null,d===null?i=A:d.next=A,d=b;var O=e.alternate;O!==null&&(O=O.updateQueue,h=O.lastBaseUpdate,h!==d&&(h===null?O.firstBaseUpdate=A:h.next=A,O.lastBaseUpdate=b))}if(i!==null){var M=r.baseState;d=0,O=A=b=null,h=i;do{var C=h.lane&-536870913,w=C!==h.lane;if(w?(de&C)===C:(a&C)===C){C!==0&&C===Ta&&(Js=!0),O!==null&&(O=O.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var ae=e,ee=h;C=t;var ye=n;switch(ee.tag){case 1:if(ae=ee.payload,typeof ae=="function"){M=ae.call(ye,M,C);break e}M=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=ee.payload,C=typeof ae=="function"?ae.call(ye,M,C):ae,C==null)break e;M=N({},M,C);break e;case 2:xn=!0}}C=h.callback,C!==null&&(e.flags|=64,w&&(e.flags|=8192),w=r.callbacks,w===null?r.callbacks=[C]:w.push(C))}else w={lane:C,tag:h.tag,payload:h.payload,callback:h.callback,next:null},O===null?(A=O=w,b=M):O=O.next=w,d|=C;if(h=h.next,h===null){if(h=r.shared.pending,h===null)break;w=h,h=w.next,w.next=null,r.lastBaseUpdate=w,r.shared.pending=null}}while(!0);O===null&&(b=M),r.baseState=b,r.firstBaseUpdate=A,r.lastBaseUpdate=O,i===null&&(r.shared.lanes=0),_n|=d,e.lanes=d,e.memoizedState=M}}function Rf(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Mf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Rf(n[e],t)}var Fa=U(null),Ql=U(0);function Uf(e,t){e=an,X(Ql,e),X(Fa,t),an=e|t.baseLanes}function Is(){X(Ql,an),X(Fa,Fa.current)}function $s(){an=Ql.current,Q(Fa),Q(Ql)}var Sn=0,se=null,xe=null,Le=null,Zl=!1,Ra=!1,ra=!1,Kl=0,Tr=0,Ma=null,jp=0;function Me(){throw Error(s(321))}function Ws(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ct(e[n],t[n]))return!1;return!0}function Ps(e,t,n,a,r,i){return Sn=i,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?bd:yd,ra=!1,i=n(a,r),ra=!1,Ra&&(i=Hf(t,n,a,r)),Lf(e),i}function Lf(e){T.H=ei;var t=xe!==null&&xe.next!==null;if(Sn=0,Le=xe=se=null,Zl=!1,Tr=0,Ma=null,t)throw Error(s(300));e===null||ke||(e=e.dependencies,e!==null&&Yl(e)&&(ke=!0))}function Hf(e,t,n,a){se=e;var r=0;do{if(Ra&&(Ma=null),Tr=0,Ra=!1,25<=r)throw Error(s(301));if(r+=1,Le=xe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}T.H=zp,i=t(n,a)}while(Ra);return i}function Ep(){var e=T.H,t=e.useState()[0];return t=typeof t.then=="function"?Dr(t):t,e=e.useState()[0],(xe!==null?xe.memoizedState:null)!==e&&(se.flags|=1024),t}function eu(){var e=Kl!==0;return Kl=0,e}function tu(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function nu(e){if(Zl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Zl=!1}Sn=0,Le=xe=se=null,Ra=!1,Tr=Kl=0,Ma=null}function rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?se.memoizedState=Le=e:Le=Le.next=e,Le}function He(){if(xe===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=Le===null?se.memoizedState:Le.next;if(t!==null)Le=t,xe=e;else{if(e===null)throw se.alternate===null?Error(s(467)):Error(s(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Le===null?se.memoizedState=Le=e:Le=Le.next=e}return Le}function au(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Dr(e){var t=Tr;return Tr+=1,Ma===null&&(Ma=[]),e=Tf(Ma,e,t),t=se,(Le===null?t.memoizedState:Le.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?bd:yd),e}function Jl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Dr(e);if(e.$$typeof===K)return $e(e)}throw Error(s(438,String(e)))}function ru(e){var t=null,n=se.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=se.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=au(),se.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=et;return t.index++,n}function $t(e,t){return typeof t=="function"?t(e):t}function Il(e){var t=He();return lu(t,xe,e)}function lu(e,t,n){var a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var r=e.baseQueue,i=a.pending;if(i!==null){if(r!==null){var d=r.next;r.next=i.next,i.next=d}t.baseQueue=r=i,a.pending=null}if(i=e.baseState,r===null)e.memoizedState=i;else{t=r.next;var h=d=null,b=null,A=t,O=!1;do{var M=A.lane&-536870913;if(M!==A.lane?(de&M)===M:(Sn&M)===M){var C=A.revertLane;if(C===0)b!==null&&(b=b.next={lane:0,revertLane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),M===Ta&&(O=!0);else if((Sn&C)===C){A=A.next,C===Ta&&(O=!0);continue}else M={lane:0,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},b===null?(h=b=M,d=i):b=b.next=M,se.lanes|=C,_n|=C;M=A.action,ra&&n(i,M),i=A.hasEagerState?A.eagerState:n(i,M)}else C={lane:M,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},b===null?(h=b=C,d=i):b=b.next=C,se.lanes|=M,_n|=M;A=A.next}while(A!==null&&A!==t);if(b===null?d=i:b.next=h,!ct(i,e.memoizedState)&&(ke=!0,O&&(n=Da,n!==null)))throw n;e.memoizedState=i,e.baseState=d,e.baseQueue=b,a.lastRenderedState=i}return r===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function iu(e){var t=He(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var a=n.dispatch,r=n.pending,i=t.memoizedState;if(r!==null){n.pending=null;var d=r=r.next;do i=e(i,d.action),d=d.next;while(d!==r);ct(i,t.memoizedState)||(ke=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function Bf(e,t,n){var a=se,r=He(),i=ge;if(i){if(n===void 0)throw Error(s(407));n=n()}else n=t();var d=!ct((xe||r).memoizedState,n);d&&(r.memoizedState=n,ke=!0),r=r.queue;var h=kf.bind(null,a,r,e);if(Fr(2048,8,h,[e]),r.getSnapshot!==t||d||Le!==null&&Le.memoizedState.tag&1){if(a.flags|=2048,Ua(9,$l(),Yf.bind(null,a,r,n,t),null),Ee===null)throw Error(s(349));i||(Sn&124)!==0||qf(a,t,n)}return n}function qf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=se.updateQueue,t===null?(t=au(),se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yf(e,t,n,a){t.value=n,t.getSnapshot=a,Gf(t)&&Xf(e)}function kf(e,t,n){return n(function(){Gf(t)&&Xf(e)})}function Gf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ct(e,n)}catch{return!0}}function Xf(e){var t=wa(e,2);t!==null&&pt(t,e,2)}function su(e){var t=rt();if(typeof e=="function"){var n=e;if(e=n(),ra){hn(!0);try{n()}finally{hn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$t,lastRenderedState:e},t}function Vf(e,t,n,a){return e.baseState=n,lu(e,xe,typeof a=="function"?a:$t)}function Ap(e,t,n,a,r){if(Pl(e))throw Error(s(485));if(e=t.action,e!==null){var i={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){i.listeners.push(d)}};T.T!==null?n(!0):i.isTransition=!1,a(i),n=t.pending,n===null?(i.next=t.pending=i,Qf(t,i)):(i.next=n.next,t.pending=n.next=i)}}function Qf(e,t){var n=t.action,a=t.payload,r=e.state;if(t.isTransition){var i=T.T,d={};T.T=d;try{var h=n(r,a),b=T.S;b!==null&&b(d,h),Zf(e,t,h)}catch(A){uu(e,t,A)}finally{T.T=i}}else try{i=n(r,a),Zf(e,t,i)}catch(A){uu(e,t,A)}}function Zf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Kf(e,t,a)},function(a){return uu(e,t,a)}):Kf(e,t,n)}function Kf(e,t,n){t.status="fulfilled",t.value=n,Jf(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Qf(e,n)))}function uu(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Jf(t),t=t.next;while(t!==a)}e.action=null}function Jf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function If(e,t){return t}function $f(e,t){if(ge){var n=Ee.formState;if(n!==null){e:{var a=se;if(ge){if(Fe){t:{for(var r=Fe,i=Rt;r.nodeType!==8;){if(!i){r=null;break t}if(r=Dt(r.nextSibling),r===null){r=null;break t}}i=r.data,r=i==="F!"||i==="F"?r:null}if(r){Fe=Dt(r.nextSibling),a=r.data==="F!";break e}}ea(a)}a=!1}a&&(t=n[0])}}return n=rt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:If,lastRenderedState:t},n.queue=a,n=pd.bind(null,se,a),a.dispatch=n,a=su(!1),i=mu.bind(null,se,!1,a.queue),a=rt(),r={state:t,dispatch:null,action:e,pending:null},a.queue=r,n=Ap.bind(null,se,r,i,n),r.dispatch=n,a.memoizedState=e,[t,n,!1]}function Wf(e){var t=He();return Pf(t,xe,e)}function Pf(e,t,n){if(t=lu(e,t,If)[0],e=Il($t)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Dr(t)}catch(d){throw d===Cr?Xl:d}else a=t;t=He();var r=t.queue,i=r.dispatch;return n!==t.memoizedState&&(se.flags|=2048,Ua(9,$l(),Cp.bind(null,r,n),null)),[a,i,e]}function Cp(e,t){e.action=t}function ed(e){var t=He(),n=xe;if(n!==null)return Pf(t,n,e);He(),t=t.memoizedState,n=He();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Ua(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=se.updateQueue,t===null&&(t=au(),se.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function $l(){return{destroy:void 0,resource:void 0}}function td(){return He().memoizedState}function Wl(e,t,n,a){var r=rt();a=a===void 0?null:a,se.flags|=e,r.memoizedState=Ua(1|t,$l(),n,a)}function Fr(e,t,n,a){var r=He();a=a===void 0?null:a;var i=r.memoizedState.inst;xe!==null&&a!==null&&Ws(a,xe.memoizedState.deps)?r.memoizedState=Ua(t,i,n,a):(se.flags|=e,r.memoizedState=Ua(1|t,i,n,a))}function nd(e,t){Wl(8390656,8,e,t)}function ad(e,t){Fr(2048,8,e,t)}function rd(e,t){return Fr(4,2,e,t)}function ld(e,t){return Fr(4,4,e,t)}function id(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sd(e,t,n){n=n!=null?n.concat([e]):null,Fr(4,4,id.bind(null,t,e),n)}function ou(){}function ud(e,t){var n=He();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Ws(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function od(e,t){var n=He();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Ws(t,a[1]))return a[0];if(a=e(),ra){hn(!0);try{e()}finally{hn(!1)}}return n.memoizedState=[a,t],a}function cu(e,t,n){return n===void 0||(Sn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=dm(),se.lanes|=e,_n|=e,n)}function cd(e,t,n,a){return ct(n,t)?n:Fa.current!==null?(e=cu(e,n,a),ct(e,t)||(ke=!0),e):(Sn&42)===0?(ke=!0,e.memoizedState=n):(e=dm(),se.lanes|=e,_n|=e,t)}function fd(e,t,n,a,r){var i=V.p;V.p=i!==0&&8>i?i:8;var d=T.T,h={};T.T=h,mu(e,!1,t,n);try{var b=r(),A=T.S;if(A!==null&&A(h,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var O=Np(b,a);Rr(e,t,O,gt(e))}else Rr(e,t,a,gt(e))}catch(M){Rr(e,t,{then:function(){},status:"rejected",reason:M},gt())}finally{V.p=i,T.T=d}}function wp(){}function fu(e,t,n,a){if(e.tag!==5)throw Error(s(476));var r=dd(e).queue;fd(e,r,t,ne,n===null?wp:function(){return md(e),n(a)})}function dd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$t,lastRenderedState:ne},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$t,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function md(e){var t=dd(e).next.queue;Rr(e,t,{},gt())}function du(){return $e(Wr)}function hd(){return He().memoizedState}function gd(){return He().memoizedState}function _p(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=gt();e=bn(n);var a=yn(t,e,n);a!==null&&(pt(a,t,n),_r(a,t,n)),t={cache:ks()},e.payload=t;return}t=t.return}}function Op(e,t,n){var a=gt();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Pl(e)?vd(t,n):(n=Ds(e,t,n,a),n!==null&&(pt(n,e,a),xd(n,t,a)))}function pd(e,t,n){var a=gt();Rr(e,t,n,a)}function Rr(e,t,n,a){var r={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pl(e))vd(t,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var d=t.lastRenderedState,h=i(d,n);if(r.hasEagerState=!0,r.eagerState=h,ct(h,d))return Ul(e,t,r,0),Ee===null&&Ml(),!1}catch{}finally{}if(n=Ds(e,t,r,a),n!==null)return pt(n,e,a),xd(n,t,a),!0}return!1}function mu(e,t,n,a){if(a={lane:2,revertLane:Vu(),action:a,hasEagerState:!1,eagerState:null,next:null},Pl(e)){if(t)throw Error(s(479))}else t=Ds(e,n,a,2),t!==null&&pt(t,e,2)}function Pl(e){var t=e.alternate;return e===se||t!==null&&t===se}function vd(e,t){Ra=Zl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function xd(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Ac(e,n)}}var ei={readContext:$e,use:Jl,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useLayoutEffect:Me,useInsertionEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useSyncExternalStore:Me,useId:Me,useHostTransitionStatus:Me,useFormState:Me,useActionState:Me,useOptimistic:Me,useMemoCache:Me,useCacheRefresh:Me},bd={readContext:$e,use:Jl,useCallback:function(e,t){return rt().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:nd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Wl(4194308,4,id.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wl(4194308,4,e,t)},useInsertionEffect:function(e,t){Wl(4,2,e,t)},useMemo:function(e,t){var n=rt();t=t===void 0?null:t;var a=e();if(ra){hn(!0);try{e()}finally{hn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=rt();if(n!==void 0){var r=n(t);if(ra){hn(!0);try{n(t)}finally{hn(!1)}}}else r=t;return a.memoizedState=a.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=Op.bind(null,se,e),[a.memoizedState,e]},useRef:function(e){var t=rt();return e={current:e},t.memoizedState=e},useState:function(e){e=su(e);var t=e.queue,n=pd.bind(null,se,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ou,useDeferredValue:function(e,t){var n=rt();return cu(n,e,t)},useTransition:function(){var e=su(!1);return e=fd.bind(null,se,e.queue,!0,!1),rt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=se,r=rt();if(ge){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Ee===null)throw Error(s(349));(de&124)!==0||qf(a,t,n)}r.memoizedState=n;var i={value:n,getSnapshot:t};return r.queue=i,nd(kf.bind(null,a,i,e),[e]),a.flags|=2048,Ua(9,$l(),Yf.bind(null,a,i,n,t),null),n},useId:function(){var e=rt(),t=Ee.identifierPrefix;if(ge){var n=Kt,a=Zt;n=(a&~(1<<32-ot(a)-1)).toString(32)+n,t="«"+t+"R"+n,n=Kl++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=jp++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:du,useFormState:$f,useActionState:$f,useOptimistic:function(e){var t=rt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=mu.bind(null,se,!0,n),n.dispatch=t,[e,t]},useMemoCache:ru,useCacheRefresh:function(){return rt().memoizedState=_p.bind(null,se)}},yd={readContext:$e,use:Jl,useCallback:ud,useContext:$e,useEffect:ad,useImperativeHandle:sd,useInsertionEffect:rd,useLayoutEffect:ld,useMemo:od,useReducer:Il,useRef:td,useState:function(){return Il($t)},useDebugValue:ou,useDeferredValue:function(e,t){var n=He();return cd(n,xe.memoizedState,e,t)},useTransition:function(){var e=Il($t)[0],t=He().memoizedState;return[typeof e=="boolean"?e:Dr(e),t]},useSyncExternalStore:Bf,useId:hd,useHostTransitionStatus:du,useFormState:Wf,useActionState:Wf,useOptimistic:function(e,t){var n=He();return Vf(n,xe,e,t)},useMemoCache:ru,useCacheRefresh:gd},zp={readContext:$e,use:Jl,useCallback:ud,useContext:$e,useEffect:ad,useImperativeHandle:sd,useInsertionEffect:rd,useLayoutEffect:ld,useMemo:od,useReducer:iu,useRef:td,useState:function(){return iu($t)},useDebugValue:ou,useDeferredValue:function(e,t){var n=He();return xe===null?cu(n,e,t):cd(n,xe.memoizedState,e,t)},useTransition:function(){var e=iu($t)[0],t=He().memoizedState;return[typeof e=="boolean"?e:Dr(e),t]},useSyncExternalStore:Bf,useId:hd,useHostTransitionStatus:du,useFormState:ed,useActionState:ed,useOptimistic:function(e,t){var n=He();return xe!==null?Vf(n,xe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ru,useCacheRefresh:gd},La=null,Mr=0;function ti(e){var t=Mr;return Mr+=1,La===null&&(La=[]),Tf(La,e,t)}function Ur(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ni(e,t){throw t.$$typeof===F?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Sd(e){var t=e._init;return t(e._payload)}function Nd(e){function t(j,S){if(e){var E=j.deletions;E===null?(j.deletions=[S],j.flags|=16):E.push(S)}}function n(j,S){if(!e)return null;for(;S!==null;)t(j,S),S=S.sibling;return null}function a(j){for(var S=new Map;j!==null;)j.key!==null?S.set(j.key,j):S.set(j.index,j),j=j.sibling;return S}function r(j,S){return j=Qt(j,S),j.index=0,j.sibling=null,j}function i(j,S,E){return j.index=E,e?(E=j.alternate,E!==null?(E=E.index,E<S?(j.flags|=67108866,S):E):(j.flags|=67108866,S)):(j.flags|=1048576,S)}function d(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function h(j,S,E,D){return S===null||S.tag!==6?(S=Rs(E,j.mode,D),S.return=j,S):(S=r(S,E),S.return=j,S)}function b(j,S,E,D){var Z=E.type;return Z===R?O(j,S,E.props.children,D,E.key):S!==null&&(S.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Oe&&Sd(Z)===S.type)?(S=r(S,E.props),Ur(S,E),S.return=j,S):(S=Hl(E.type,E.key,E.props,null,j.mode,D),Ur(S,E),S.return=j,S)}function A(j,S,E,D){return S===null||S.tag!==4||S.stateNode.containerInfo!==E.containerInfo||S.stateNode.implementation!==E.implementation?(S=Ms(E,j.mode,D),S.return=j,S):(S=r(S,E.children||[]),S.return=j,S)}function O(j,S,E,D,Z){return S===null||S.tag!==7?(S=In(E,j.mode,D,Z),S.return=j,S):(S=r(S,E),S.return=j,S)}function M(j,S,E){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=Rs(""+S,j.mode,E),S.return=j,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case _:return E=Hl(S.type,S.key,S.props,null,j.mode,E),Ur(E,S),E.return=j,E;case B:return S=Ms(S,j.mode,E),S.return=j,S;case Oe:var D=S._init;return S=D(S._payload),M(j,S,E)}if(Je(S)||Ke(S))return S=In(S,j.mode,E,null),S.return=j,S;if(typeof S.then=="function")return M(j,ti(S),E);if(S.$$typeof===K)return M(j,kl(j,S),E);ni(j,S)}return null}function C(j,S,E,D){var Z=S!==null?S.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return Z!==null?null:h(j,S,""+E,D);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case _:return E.key===Z?b(j,S,E,D):null;case B:return E.key===Z?A(j,S,E,D):null;case Oe:return Z=E._init,E=Z(E._payload),C(j,S,E,D)}if(Je(E)||Ke(E))return Z!==null?null:O(j,S,E,D,null);if(typeof E.then=="function")return C(j,S,ti(E),D);if(E.$$typeof===K)return C(j,S,kl(j,E),D);ni(j,E)}return null}function w(j,S,E,D,Z){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return j=j.get(E)||null,h(S,j,""+D,Z);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case _:return j=j.get(D.key===null?E:D.key)||null,b(S,j,D,Z);case B:return j=j.get(D.key===null?E:D.key)||null,A(S,j,D,Z);case Oe:var ue=D._init;return D=ue(D._payload),w(j,S,E,D,Z)}if(Je(D)||Ke(D))return j=j.get(E)||null,O(S,j,D,Z,null);if(typeof D.then=="function")return w(j,S,E,ti(D),Z);if(D.$$typeof===K)return w(j,S,E,kl(S,D),Z);ni(S,D)}return null}function ae(j,S,E,D){for(var Z=null,ue=null,W=S,te=S=0,Xe=null;W!==null&&te<E.length;te++){W.index>te?(Xe=W,W=null):Xe=W.sibling;var he=C(j,W,E[te],D);if(he===null){W===null&&(W=Xe);break}e&&W&&he.alternate===null&&t(j,W),S=i(he,S,te),ue===null?Z=he:ue.sibling=he,ue=he,W=Xe}if(te===E.length)return n(j,W),ge&&Wn(j,te),Z;if(W===null){for(;te<E.length;te++)W=M(j,E[te],D),W!==null&&(S=i(W,S,te),ue===null?Z=W:ue.sibling=W,ue=W);return ge&&Wn(j,te),Z}for(W=a(W);te<E.length;te++)Xe=w(W,j,te,E[te],D),Xe!==null&&(e&&Xe.alternate!==null&&W.delete(Xe.key===null?te:Xe.key),S=i(Xe,S,te),ue===null?Z=Xe:ue.sibling=Xe,ue=Xe);return e&&W.forEach(function(Ln){return t(j,Ln)}),ge&&Wn(j,te),Z}function ee(j,S,E,D){if(E==null)throw Error(s(151));for(var Z=null,ue=null,W=S,te=S=0,Xe=null,he=E.next();W!==null&&!he.done;te++,he=E.next()){W.index>te?(Xe=W,W=null):Xe=W.sibling;var Ln=C(j,W,he.value,D);if(Ln===null){W===null&&(W=Xe);break}e&&W&&Ln.alternate===null&&t(j,W),S=i(Ln,S,te),ue===null?Z=Ln:ue.sibling=Ln,ue=Ln,W=Xe}if(he.done)return n(j,W),ge&&Wn(j,te),Z;if(W===null){for(;!he.done;te++,he=E.next())he=M(j,he.value,D),he!==null&&(S=i(he,S,te),ue===null?Z=he:ue.sibling=he,ue=he);return ge&&Wn(j,te),Z}for(W=a(W);!he.done;te++,he=E.next())he=w(W,j,te,he.value,D),he!==null&&(e&&he.alternate!==null&&W.delete(he.key===null?te:he.key),S=i(he,S,te),ue===null?Z=he:ue.sibling=he,ue=he);return e&&W.forEach(function(T1){return t(j,T1)}),ge&&Wn(j,te),Z}function ye(j,S,E,D){if(typeof E=="object"&&E!==null&&E.type===R&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case _:e:{for(var Z=E.key;S!==null;){if(S.key===Z){if(Z=E.type,Z===R){if(S.tag===7){n(j,S.sibling),D=r(S,E.props.children),D.return=j,j=D;break e}}else if(S.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Oe&&Sd(Z)===S.type){n(j,S.sibling),D=r(S,E.props),Ur(D,E),D.return=j,j=D;break e}n(j,S);break}else t(j,S);S=S.sibling}E.type===R?(D=In(E.props.children,j.mode,D,E.key),D.return=j,j=D):(D=Hl(E.type,E.key,E.props,null,j.mode,D),Ur(D,E),D.return=j,j=D)}return d(j);case B:e:{for(Z=E.key;S!==null;){if(S.key===Z)if(S.tag===4&&S.stateNode.containerInfo===E.containerInfo&&S.stateNode.implementation===E.implementation){n(j,S.sibling),D=r(S,E.children||[]),D.return=j,j=D;break e}else{n(j,S);break}else t(j,S);S=S.sibling}D=Ms(E,j.mode,D),D.return=j,j=D}return d(j);case Oe:return Z=E._init,E=Z(E._payload),ye(j,S,E,D)}if(Je(E))return ae(j,S,E,D);if(Ke(E)){if(Z=Ke(E),typeof Z!="function")throw Error(s(150));return E=Z.call(E),ee(j,S,E,D)}if(typeof E.then=="function")return ye(j,S,ti(E),D);if(E.$$typeof===K)return ye(j,S,kl(j,E),D);ni(j,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,S!==null&&S.tag===6?(n(j,S.sibling),D=r(S,E),D.return=j,j=D):(n(j,S),D=Rs(E,j.mode,D),D.return=j,j=D),d(j)):n(j,S)}return function(j,S,E,D){try{Mr=0;var Z=ye(j,S,E,D);return La=null,Z}catch(W){if(W===Cr||W===Xl)throw W;var ue=ft(29,W,null,j.mode);return ue.lanes=D,ue.return=j,ue}finally{}}}var Ha=Nd(!0),jd=Nd(!1),At=U(null),Mt=null;function Nn(e){var t=e.alternate;X(qe,qe.current&1),X(At,e),Mt===null&&(t===null||Fa.current!==null||t.memoizedState!==null)&&(Mt=e)}function Ed(e){if(e.tag===22){if(X(qe,qe.current),X(At,e),Mt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Mt=e)}}else jn()}function jn(){X(qe,qe.current),X(At,At.current)}function Wt(e){Q(At),Mt===e&&(Mt=null),Q(qe)}var qe=U(0);function ai(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||ao(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function hu(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:N({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var gu={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=gt(),r=bn(a);r.payload=t,n!=null&&(r.callback=n),t=yn(e,r,a),t!==null&&(pt(t,e,a),_r(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=gt(),r=bn(a);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=yn(e,r,a),t!==null&&(pt(t,e,a),_r(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gt(),a=bn(n);a.tag=2,t!=null&&(a.callback=t),t=yn(e,a,n),t!==null&&(pt(t,e,n),_r(t,e,n))}};function Ad(e,t,n,a,r,i,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,d):t.prototype&&t.prototype.isPureReactComponent?!xr(n,a)||!xr(r,i):!0}function Cd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&gu.enqueueReplaceState(t,t.state,null)}function la(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=N({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}var ri=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function wd(e){ri(e)}function _d(e){console.error(e)}function Od(e){ri(e)}function li(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function zd(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function pu(e,t,n){return n=bn(n),n.tag=3,n.payload={element:null},n.callback=function(){li(e,t)},n}function Td(e){return e=bn(e),e.tag=3,e}function Dd(e,t,n,a){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var i=a.value;e.payload=function(){return r(i)},e.callback=function(){zd(t,n,a)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){zd(t,n,a),typeof r!="function"&&(On===null?On=new Set([this]):On.add(this));var h=a.stack;this.componentDidCatch(a.value,{componentStack:h!==null?h:""})})}function Tp(e,t,n,a,r){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&jr(t,n,r,!0),n=At.current,n!==null){switch(n.tag){case 13:return Mt===null?qu():n.alternate===null&&Re===0&&(Re=3),n.flags&=-257,n.flags|=65536,n.lanes=r,a===Vs?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),ku(e,a,r)),!1;case 22:return n.flags|=65536,a===Vs?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),ku(e,a,r)),!1}throw Error(s(435,n.tag))}return ku(e,a,r),qu(),!1}if(ge)return t=At.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,a!==Hs&&(e=Error(s(422),{cause:a}),Nr(St(e,n)))):(a!==Hs&&(t=Error(s(423),{cause:a}),Nr(St(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,a=St(a,n),r=pu(e.stateNode,a,r),Ks(e,r),Re!==4&&(Re=2)),!1;var i=Error(s(520),{cause:a});if(i=St(i,n),Gr===null?Gr=[i]:Gr.push(i),Re!==4&&(Re=2),t===null)return!0;a=St(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=pu(n.stateNode,a,e),Ks(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(On===null||!On.has(i))))return n.flags|=65536,r&=-r,n.lanes|=r,r=Td(r),Dd(r,e,n,a),Ks(n,r),!1}n=n.return}while(n!==null);return!1}var Fd=Error(s(461)),ke=!1;function Ve(e,t,n,a){t.child=e===null?jd(t,null,n,a):Ha(t,e.child,n,a)}function Rd(e,t,n,a,r){n=n.render;var i=t.ref;if("ref"in a){var d={};for(var h in a)h!=="ref"&&(d[h]=a[h])}else d=a;return na(t),a=Ps(e,t,n,d,i,r),h=eu(),e!==null&&!ke?(tu(e,t,r),Pt(e,t,r)):(ge&&h&&Us(t),t.flags|=1,Ve(e,t,a,r),t.child)}function Md(e,t,n,a,r){if(e===null){var i=n.type;return typeof i=="function"&&!Fs(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,Ud(e,t,i,a,r)):(e=Hl(n.type,null,a,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Eu(e,r)){var d=i.memoizedProps;if(n=n.compare,n=n!==null?n:xr,n(d,a)&&e.ref===t.ref)return Pt(e,t,r)}return t.flags|=1,e=Qt(i,a),e.ref=t.ref,e.return=t,t.child=e}function Ud(e,t,n,a,r){if(e!==null){var i=e.memoizedProps;if(xr(i,a)&&e.ref===t.ref)if(ke=!1,t.pendingProps=a=i,Eu(e,r))(e.flags&131072)!==0&&(ke=!0);else return t.lanes=e.lanes,Pt(e,t,r)}return vu(e,t,n,a,r)}function Ld(e,t,n){var a=t.pendingProps,r=a.children,i=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=i!==null?i.baseLanes|n:n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;t.childLanes=i&~a}else t.childLanes=0,t.child=null;return Hd(e,t,a,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Gl(t,i!==null?i.cachePool:null),i!==null?Uf(t,i):Is(),Ed(t);else return t.lanes=t.childLanes=536870912,Hd(e,t,i!==null?i.baseLanes|n:n,n)}else i!==null?(Gl(t,i.cachePool),Uf(t,i),jn(),t.memoizedState=null):(e!==null&&Gl(t,null),Is(),jn());return Ve(e,t,r,n),t.child}function Hd(e,t,n,a){var r=Xs();return r=r===null?null:{parent:Be._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},e!==null&&Gl(t,null),Is(),Ed(t),e!==null&&jr(e,t,a,!0),null}function ii(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function vu(e,t,n,a,r){return na(t),n=Ps(e,t,n,a,void 0,r),a=eu(),e!==null&&!ke?(tu(e,t,r),Pt(e,t,r)):(ge&&a&&Us(t),t.flags|=1,Ve(e,t,n,r),t.child)}function Bd(e,t,n,a,r,i){return na(t),t.updateQueue=null,n=Hf(t,a,n,r),Lf(e),a=eu(),e!==null&&!ke?(tu(e,t,i),Pt(e,t,i)):(ge&&a&&Us(t),t.flags|=1,Ve(e,t,n,i),t.child)}function qd(e,t,n,a,r){if(na(t),t.stateNode===null){var i=_a,d=n.contextType;typeof d=="object"&&d!==null&&(i=$e(d)),i=new n(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=gu,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},Qs(t),d=n.contextType,i.context=typeof d=="object"&&d!==null?$e(d):_a,i.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(hu(t,n,d,a),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(d=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),d!==i.state&&gu.enqueueReplaceState(i,i.state,null),zr(t,a,i,r),Or(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var h=t.memoizedProps,b=la(n,h);i.props=b;var A=i.context,O=n.contextType;d=_a,typeof O=="object"&&O!==null&&(d=$e(O));var M=n.getDerivedStateFromProps;O=typeof M=="function"||typeof i.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,O||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(h||A!==d)&&Cd(t,i,a,d),xn=!1;var C=t.memoizedState;i.state=C,zr(t,a,i,r),Or(),A=t.memoizedState,h||C!==A||xn?(typeof M=="function"&&(hu(t,n,M,a),A=t.memoizedState),(b=xn||Ad(t,n,b,a,C,A,d))?(O||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=A),i.props=a,i.state=A,i.context=d,a=b):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,Zs(e,t),d=t.memoizedProps,O=la(n,d),i.props=O,M=t.pendingProps,C=i.context,A=n.contextType,b=_a,typeof A=="object"&&A!==null&&(b=$e(A)),h=n.getDerivedStateFromProps,(A=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d!==M||C!==b)&&Cd(t,i,a,b),xn=!1,C=t.memoizedState,i.state=C,zr(t,a,i,r),Or();var w=t.memoizedState;d!==M||C!==w||xn||e!==null&&e.dependencies!==null&&Yl(e.dependencies)?(typeof h=="function"&&(hu(t,n,h,a),w=t.memoizedState),(O=xn||Ad(t,n,O,a,C,w,b)||e!==null&&e.dependencies!==null&&Yl(e.dependencies))?(A||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,w,b),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,w,b)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=w),i.props=a,i.state=w,i.context=b,a=O):(typeof i.componentDidUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,ii(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=Ha(t,e.child,null,r),t.child=Ha(t,null,n,r)):Ve(e,t,n,r),t.memoizedState=i.state,e=t.child):e=Pt(e,t,r),e}function Yd(e,t,n,a){return Sr(),t.flags|=256,Ve(e,t,n,a),t.child}var xu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bu(e){return{baseLanes:e,cachePool:_f()}}function yu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ct),e}function kd(e,t,n){var a=t.pendingProps,r=!1,i=(t.flags&128)!==0,d;if((d=i)||(d=e!==null&&e.memoizedState===null?!1:(qe.current&2)!==0),d&&(r=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(ge){if(r?Nn(t):jn(),ge){var h=Fe,b;if(b=h){e:{for(b=h,h=Rt;b.nodeType!==8;){if(!h){h=null;break e}if(b=Dt(b.nextSibling),b===null){h=null;break e}}h=b}h!==null?(t.memoizedState={dehydrated:h,treeContext:$n!==null?{id:Zt,overflow:Kt}:null,retryLane:536870912,hydrationErrors:null},b=ft(18,null,null,0),b.stateNode=h,b.return=t,t.child=b,tt=t,Fe=null,b=!0):b=!1}b||ea(t)}if(h=t.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return ao(h)?t.lanes=32:t.lanes=536870912,null;Wt(t)}return h=a.children,a=a.fallback,r?(jn(),r=t.mode,h=si({mode:"hidden",children:h},r),a=In(a,r,n,null),h.return=t,a.return=t,h.sibling=a,t.child=h,r=t.child,r.memoizedState=bu(n),r.childLanes=yu(e,d,n),t.memoizedState=xu,a):(Nn(t),Su(t,h))}if(b=e.memoizedState,b!==null&&(h=b.dehydrated,h!==null)){if(i)t.flags&256?(Nn(t),t.flags&=-257,t=Nu(e,t,n)):t.memoizedState!==null?(jn(),t.child=e.child,t.flags|=128,t=null):(jn(),r=a.fallback,h=t.mode,a=si({mode:"visible",children:a.children},h),r=In(r,h,n,null),r.flags|=2,a.return=t,r.return=t,a.sibling=r,t.child=a,Ha(t,e.child,null,n),a=t.child,a.memoizedState=bu(n),a.childLanes=yu(e,d,n),t.memoizedState=xu,t=r);else if(Nn(t),ao(h)){if(d=h.nextSibling&&h.nextSibling.dataset,d)var A=d.dgst;d=A,a=Error(s(419)),a.stack="",a.digest=d,Nr({value:a,source:null,stack:null}),t=Nu(e,t,n)}else if(ke||jr(e,t,n,!1),d=(n&e.childLanes)!==0,ke||d){if(d=Ee,d!==null&&(a=n&-n,a=(a&42)!==0?1:rs(a),a=(a&(d.suspendedLanes|n))!==0?0:a,a!==0&&a!==b.retryLane))throw b.retryLane=a,wa(e,a),pt(d,e,a),Fd;h.data==="$?"||qu(),t=Nu(e,t,n)}else h.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=b.treeContext,Fe=Dt(h.nextSibling),tt=t,ge=!0,Pn=null,Rt=!1,e!==null&&(jt[Et++]=Zt,jt[Et++]=Kt,jt[Et++]=$n,Zt=e.id,Kt=e.overflow,$n=t),t=Su(t,a.children),t.flags|=4096);return t}return r?(jn(),r=a.fallback,h=t.mode,b=e.child,A=b.sibling,a=Qt(b,{mode:"hidden",children:a.children}),a.subtreeFlags=b.subtreeFlags&65011712,A!==null?r=Qt(A,r):(r=In(r,h,n,null),r.flags|=2),r.return=t,a.return=t,a.sibling=r,t.child=a,a=r,r=t.child,h=e.child.memoizedState,h===null?h=bu(n):(b=h.cachePool,b!==null?(A=Be._currentValue,b=b.parent!==A?{parent:A,pool:A}:b):b=_f(),h={baseLanes:h.baseLanes|n,cachePool:b}),r.memoizedState=h,r.childLanes=yu(e,d,n),t.memoizedState=xu,a):(Nn(t),n=e.child,e=n.sibling,n=Qt(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function Su(e,t){return t=si({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function si(e,t){return e=ft(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Nu(e,t,n){return Ha(t,e.child,null,n),e=Su(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Gd(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),qs(e.return,t,n)}function ju(e,t,n,a,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:r}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=n,i.tailMode=r)}function Xd(e,t,n){var a=t.pendingProps,r=a.revealOrder,i=a.tail;if(Ve(e,t,a.children,n),a=qe.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gd(e,n,t);else if(e.tag===19)Gd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(X(qe,a),r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&ai(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),ju(t,!1,r,n,i);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&ai(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}ju(t,!0,n,null,i);break;case"together":ju(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_n|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(jr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Eu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Yl(e)))}function Dp(e,t,n){switch(t.tag){case 3:we(t,t.stateNode.containerInfo),vn(t,Be,e.memoizedState.cache),Sr();break;case 27:case 5:Pi(t);break;case 4:we(t,t.stateNode.containerInfo);break;case 10:vn(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Nn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?kd(e,t,n):(Nn(t),e=Pt(e,t,n),e!==null?e.sibling:null);Nn(t);break;case 19:var r=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(jr(e,t,n,!1),a=(n&t.childLanes)!==0),r){if(a)return Xd(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),X(qe,qe.current),a)break;return null;case 22:case 23:return t.lanes=0,Ld(e,t,n);case 24:vn(t,Be,e.memoizedState.cache)}return Pt(e,t,n)}function Vd(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ke=!0;else{if(!Eu(e,n)&&(t.flags&128)===0)return ke=!1,Dp(e,t,n);ke=(e.flags&131072)!==0}else ke=!1,ge&&(t.flags&1048576)!==0&&Sf(t,ql,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,r=a._init;if(a=r(a._payload),t.type=a,typeof a=="function")Fs(a)?(e=la(a,e),t.tag=1,t=qd(null,t,a,e,n)):(t.tag=0,t=vu(null,t,a,e,n));else{if(a!=null){if(r=a.$$typeof,r===le){t.tag=11,t=Rd(null,t,a,e,n);break e}else if(r===je){t.tag=14,t=Md(null,t,a,e,n);break e}}throw t=Xn(a)||a,Error(s(306,t,""))}}return t;case 0:return vu(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,r=la(a,t.pendingProps),qd(e,t,a,r,n);case 3:e:{if(we(t,t.stateNode.containerInfo),e===null)throw Error(s(387));a=t.pendingProps;var i=t.memoizedState;r=i.element,Zs(e,t),zr(t,a,null,n);var d=t.memoizedState;if(a=d.cache,vn(t,Be,a),a!==i.cache&&Ys(t,[Be],n,!0),Or(),a=d.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Yd(e,t,a,n);break e}else if(a!==r){r=St(Error(s(424)),t),Nr(r),t=Yd(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Fe=Dt(e.firstChild),tt=t,ge=!0,Pn=null,Rt=!0,n=jd(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Sr(),a===r){t=Pt(e,t,n);break e}Ve(e,t,a,n)}t=t.child}return t;case 26:return ii(e,t),e===null?(n=Jm(t.type,null,t.pendingProps,null))?t.memoizedState=n:ge||(n=t.type,e=t.pendingProps,a=Si(re.current).createElement(n),a[Ie]=t,a[nt]=e,Ze(a,n,e),Ye(a),t.stateNode=a):t.memoizedState=Jm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Pi(t),e===null&&ge&&(a=t.stateNode=Qm(t.type,t.pendingProps,re.current),tt=t,Rt=!0,r=Fe,Dn(t.type)?(ro=r,Fe=Dt(a.firstChild)):Fe=r),Ve(e,t,t.pendingProps.children,n),ii(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ge&&((r=a=Fe)&&(a=i1(a,t.type,t.pendingProps,Rt),a!==null?(t.stateNode=a,tt=t,Fe=Dt(a.firstChild),Rt=!1,r=!0):r=!1),r||ea(t)),Pi(t),r=t.type,i=t.pendingProps,d=e!==null?e.memoizedProps:null,a=i.children,eo(r,i)?a=null:d!==null&&eo(r,d)&&(t.flags|=32),t.memoizedState!==null&&(r=Ps(e,t,Ep,null,null,n),Wr._currentValue=r),ii(e,t),Ve(e,t,a,n),t.child;case 6:return e===null&&ge&&((e=n=Fe)&&(n=s1(n,t.pendingProps,Rt),n!==null?(t.stateNode=n,tt=t,Fe=null,e=!0):e=!1),e||ea(t)),null;case 13:return kd(e,t,n);case 4:return we(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Ha(t,null,a,n):Ve(e,t,a,n),t.child;case 11:return Rd(e,t,t.type,t.pendingProps,n);case 7:return Ve(e,t,t.pendingProps,n),t.child;case 8:return Ve(e,t,t.pendingProps.children,n),t.child;case 12:return Ve(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,vn(t,t.type,a.value),Ve(e,t,a.children,n),t.child;case 9:return r=t.type._context,a=t.pendingProps.children,na(t),r=$e(r),a=a(r),t.flags|=1,Ve(e,t,a,n),t.child;case 14:return Md(e,t,t.type,t.pendingProps,n);case 15:return Ud(e,t,t.type,t.pendingProps,n);case 19:return Xd(e,t,n);case 31:return a=t.pendingProps,n=t.mode,a={mode:a.mode,children:a.children},e===null?(n=si(a,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Qt(e.child,a),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Ld(e,t,n);case 24:return na(t),a=$e(Be),e===null?(r=Xs(),r===null&&(r=Ee,i=ks(),r.pooledCache=i,i.refCount++,i!==null&&(r.pooledCacheLanes|=n),r=i),t.memoizedState={parent:a,cache:r},Qs(t),vn(t,Be,r)):((e.lanes&n)!==0&&(Zs(e,t),zr(t,null,null,n),Or()),r=e.memoizedState,i=t.memoizedState,r.parent!==a?(r={parent:a,cache:a},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),vn(t,Be,a)):(a=i.cache,vn(t,Be,a),a!==r.cache&&Ys(t,[Be],n,!0))),Ve(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function en(e){e.flags|=4}function Qd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!e0(t)){if(t=At.current,t!==null&&((de&4194048)===de?Mt!==null:(de&62914560)!==de&&(de&536870912)===0||t!==Mt))throw wr=Vs,Of;e.flags|=8192}}function ui(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?jc():536870912,e.lanes|=t,ka|=t)}function Lr(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags&65011712,a|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Fp(e,t,n){var a=t.pendingProps;switch(Ls(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),It(Be),mn(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(yr(t)?en(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ef())),ze(t),null;case 26:return n=t.memoizedState,e===null?(en(t),n!==null?(ze(t),Qd(t,n)):(ze(t),t.flags&=-16777217)):n?n!==e.memoizedState?(en(t),ze(t),Qd(t,n)):(ze(t),t.flags&=-16777217):(e.memoizedProps!==a&&en(t),ze(t),t.flags&=-16777217),null;case 27:bl(t),n=re.current;var r=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&en(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return ze(t),null}e=P.current,yr(t)?Nf(t):(e=Qm(r,a,n),t.stateNode=e,en(t))}return ze(t),null;case 5:if(bl(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&en(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return ze(t),null}if(e=P.current,yr(t))Nf(t);else{switch(r=Si(re.current),e){case 1:e=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?r.createElement("select",{is:a.is}):r.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?r.createElement(n,{is:a.is}):r.createElement(n)}}e[Ie]=t,e[nt]=a;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=e;e:switch(Ze(e,n,a),n){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&en(t)}}return ze(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&en(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(e=re.current,yr(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,r=tt,r!==null)switch(r.tag){case 27:case 5:a=r.memoizedProps}e[Ie]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Bm(e.nodeValue,n)),e||ea(t)}else e=Si(e).createTextNode(a),e[Ie]=t,t.stateNode=e}return ze(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=yr(t),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error(s(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(s(317));r[Ie]=t}else Sr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),r=!1}else r=Ef(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Wt(t),t):(Wt(t),null)}if(Wt(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=a!==null,e=e!==null&&e.memoizedState!==null,n){a=t.child,r=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(r=a.alternate.memoizedState.cachePool.pool);var i=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==r&&(a.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),ui(t,t.updateQueue),ze(t),null;case 4:return mn(),e===null&&Ju(t.stateNode.containerInfo),ze(t),null;case 10:return It(t.type),ze(t),null;case 19:if(Q(qe),r=t.memoizedState,r===null)return ze(t),null;if(a=(t.flags&128)!==0,i=r.rendering,i===null)if(a)Lr(r,!1);else{if(Re!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ai(e),i!==null){for(t.flags|=128,Lr(r,!1),e=i.updateQueue,t.updateQueue=e,ui(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)yf(n,e),n=n.sibling;return X(qe,qe.current&1|2),t.child}e=e.sibling}r.tail!==null&&Ft()>fi&&(t.flags|=128,a=!0,Lr(r,!1),t.lanes=4194304)}else{if(!a)if(e=ai(i),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,ui(t,e),Lr(r,!0),r.tail===null&&r.tailMode==="hidden"&&!i.alternate&&!ge)return ze(t),null}else 2*Ft()-r.renderingStartTime>fi&&n!==536870912&&(t.flags|=128,a=!0,Lr(r,!1),t.lanes=4194304);r.isBackwards?(i.sibling=t.child,t.child=i):(e=r.last,e!==null?e.sibling=i:t.child=i,r.last=i)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=Ft(),t.sibling=null,e=qe.current,X(qe,a?e&1|2:e&1),t):(ze(t),null);case 22:case 23:return Wt(t),$s(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),n=t.updateQueue,n!==null&&ui(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&Q(aa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),It(Be),ze(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Rp(e,t){switch(Ls(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return It(Be),mn(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return bl(t),null;case 13:if(Wt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(qe),null;case 4:return mn(),null;case 10:return It(t.type),null;case 22:case 23:return Wt(t),$s(),e!==null&&Q(aa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return It(Be),null;case 25:return null;default:return null}}function Zd(e,t){switch(Ls(t),t.tag){case 3:It(Be),mn();break;case 26:case 27:case 5:bl(t);break;case 4:mn();break;case 13:Wt(t);break;case 19:Q(qe);break;case 10:It(t.type);break;case 22:case 23:Wt(t),$s(),e!==null&&Q(aa);break;case 24:It(Be)}}function Hr(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var r=a.next;n=r;do{if((n.tag&e)===e){a=void 0;var i=n.create,d=n.inst;a=i(),d.destroy=a}n=n.next}while(n!==r)}}catch(h){Ne(t,t.return,h)}}function En(e,t,n){try{var a=t.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var i=r.next;a=i;do{if((a.tag&e)===e){var d=a.inst,h=d.destroy;if(h!==void 0){d.destroy=void 0,r=t;var b=n,A=h;try{A()}catch(O){Ne(r,b,O)}}}a=a.next}while(a!==i)}}catch(O){Ne(t,t.return,O)}}function Kd(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Mf(t,n)}catch(a){Ne(e,e.return,a)}}}function Jd(e,t,n){n.props=la(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Ne(e,t,a)}}function Br(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(r){Ne(e,t,r)}}function Ut(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(r){Ne(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Ne(e,t,r)}else n.current=null}function Id(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(r){Ne(e,e.return,r)}}function Au(e,t,n){try{var a=e.stateNode;t1(a,e.type,n,t),a[nt]=t}catch(r){Ne(e,e.return,r)}}function $d(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Dn(e.type)||e.tag===4}function Cu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$d(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Dn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wu(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=yi));else if(a!==4&&(a===27&&Dn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(wu(e,t,n),e=e.sibling;e!==null;)wu(e,t,n),e=e.sibling}function oi(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Dn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(oi(e,t,n),e=e.sibling;e!==null;)oi(e,t,n),e=e.sibling}function Wd(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);Ze(t,a,n),t[Ie]=e,t[nt]=n}catch(i){Ne(e,e.return,i)}}var tn=!1,Ue=!1,_u=!1,Pd=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function Mp(e,t){if(e=e.containerInfo,Wu=wi,e=cf(e),Cs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var r=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var d=0,h=-1,b=-1,A=0,O=0,M=e,C=null;t:for(;;){for(var w;M!==n||r!==0&&M.nodeType!==3||(h=d+r),M!==i||a!==0&&M.nodeType!==3||(b=d+a),M.nodeType===3&&(d+=M.nodeValue.length),(w=M.firstChild)!==null;)C=M,M=w;for(;;){if(M===e)break t;if(C===n&&++A===r&&(h=d),C===i&&++O===a&&(b=d),(w=M.nextSibling)!==null)break;M=C,C=M.parentNode}M=w}n=h===-1||b===-1?null:{start:h,end:b}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pu={focusedElem:e,selectionRange:n},wi=!1,Ge=t;Ge!==null;)if(t=Ge,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ge=e;else for(;Ge!==null;){switch(t=Ge,i=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,r=i.memoizedProps,i=i.memoizedState,a=n.stateNode;try{var ae=la(n.type,r,n.elementType===n.type);e=a.getSnapshotBeforeUpdate(ae,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Ne(n,n.return,ee)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)no(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":no(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Ge=e;break}Ge=t.return}}function em(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:An(e,n),a&4&&Hr(5,n);break;case 1:if(An(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){Ne(n,n.return,d)}else{var r=la(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Ne(n,n.return,d)}}a&64&&Kd(n),a&512&&Br(n,n.return);break;case 3:if(An(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Mf(e,t)}catch(d){Ne(n,n.return,d)}}break;case 27:t===null&&a&4&&Wd(n);case 26:case 5:An(e,n),t===null&&a&4&&Id(n),a&512&&Br(n,n.return);break;case 12:An(e,n);break;case 13:An(e,n),a&4&&am(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Xp.bind(null,n),u1(e,n))));break;case 22:if(a=n.memoizedState!==null||tn,!a){t=t!==null&&t.memoizedState!==null||Ue,r=tn;var i=Ue;tn=a,(Ue=t)&&!i?Cn(e,n,(n.subtreeFlags&8772)!==0):An(e,n),tn=r,Ue=i}break;case 30:break;default:An(e,n)}}function tm(e){var t=e.alternate;t!==null&&(e.alternate=null,tm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ss(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var _e=null,lt=!1;function nn(e,t,n){for(n=n.child;n!==null;)nm(e,t,n),n=n.sibling}function nm(e,t,n){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(ir,n)}catch{}switch(n.tag){case 26:Ue||Ut(n,t),nn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ue||Ut(n,t);var a=_e,r=lt;Dn(n.type)&&(_e=n.stateNode,lt=!1),nn(e,t,n),Kr(n.stateNode),_e=a,lt=r;break;case 5:Ue||Ut(n,t);case 6:if(a=_e,r=lt,_e=null,nn(e,t,n),_e=a,lt=r,_e!==null)if(lt)try{(_e.nodeType===9?_e.body:_e.nodeName==="HTML"?_e.ownerDocument.body:_e).removeChild(n.stateNode)}catch(i){Ne(n,t,i)}else try{_e.removeChild(n.stateNode)}catch(i){Ne(n,t,i)}break;case 18:_e!==null&&(lt?(e=_e,Xm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),nl(e)):Xm(_e,n.stateNode));break;case 4:a=_e,r=lt,_e=n.stateNode.containerInfo,lt=!0,nn(e,t,n),_e=a,lt=r;break;case 0:case 11:case 14:case 15:Ue||En(2,n,t),Ue||En(4,n,t),nn(e,t,n);break;case 1:Ue||(Ut(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Jd(n,t,a)),nn(e,t,n);break;case 21:nn(e,t,n);break;case 22:Ue=(a=Ue)||n.memoizedState!==null,nn(e,t,n),Ue=a;break;default:nn(e,t,n)}}function am(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{nl(e)}catch(n){Ne(t,t.return,n)}}function Up(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Pd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Pd),t;default:throw Error(s(435,e.tag))}}function Ou(e,t){var n=Up(e);t.forEach(function(a){var r=Vp.bind(null,e,a);n.has(a)||(n.add(a),a.then(r,r))})}function dt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var r=n[a],i=e,d=t,h=d;e:for(;h!==null;){switch(h.tag){case 27:if(Dn(h.type)){_e=h.stateNode,lt=!1;break e}break;case 5:_e=h.stateNode,lt=!1;break e;case 3:case 4:_e=h.stateNode.containerInfo,lt=!0;break e}h=h.return}if(_e===null)throw Error(s(160));nm(i,d,r),_e=null,lt=!1,i=r.alternate,i!==null&&(i.return=null),r.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)rm(t,e),t=t.sibling}var Tt=null;function rm(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:dt(t,e),mt(e),a&4&&(En(3,e,e.return),Hr(3,e),En(5,e,e.return));break;case 1:dt(t,e),mt(e),a&512&&(Ue||n===null||Ut(n,n.return)),a&64&&tn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var r=Tt;if(dt(t,e),mt(e),a&512&&(Ue||n===null||Ut(n,n.return)),a&4){var i=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(a){case"title":i=r.getElementsByTagName("title")[0],(!i||i[or]||i[Ie]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=r.createElement(a),r.head.insertBefore(i,r.querySelector("head > title"))),Ze(i,a,n),i[Ie]=e,Ye(i),a=i;break e;case"link":var d=Wm("link","href",r).get(a+(n.href||""));if(d){for(var h=0;h<d.length;h++)if(i=d[h],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(h,1);break t}}i=r.createElement(a),Ze(i,a,n),r.head.appendChild(i);break;case"meta":if(d=Wm("meta","content",r).get(a+(n.content||""))){for(h=0;h<d.length;h++)if(i=d[h],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(h,1);break t}}i=r.createElement(a),Ze(i,a,n),r.head.appendChild(i);break;default:throw Error(s(468,a))}i[Ie]=e,Ye(i),a=i}e.stateNode=a}else Pm(r,e.type,e.stateNode);else e.stateNode=$m(r,a,e.memoizedProps);else i!==a?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,a===null?Pm(r,e.type,e.stateNode):$m(r,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Au(e,e.memoizedProps,n.memoizedProps)}break;case 27:dt(t,e),mt(e),a&512&&(Ue||n===null||Ut(n,n.return)),n!==null&&a&4&&Au(e,e.memoizedProps,n.memoizedProps);break;case 5:if(dt(t,e),mt(e),a&512&&(Ue||n===null||Ut(n,n.return)),e.flags&32){r=e.stateNode;try{ya(r,"")}catch(w){Ne(e,e.return,w)}}a&4&&e.stateNode!=null&&(r=e.memoizedProps,Au(e,r,n!==null?n.memoizedProps:r)),a&1024&&(_u=!0);break;case 6:if(dt(t,e),mt(e),a&4){if(e.stateNode===null)throw Error(s(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(w){Ne(e,e.return,w)}}break;case 3:if(Ei=null,r=Tt,Tt=Ni(t.containerInfo),dt(t,e),Tt=r,mt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{nl(t.containerInfo)}catch(w){Ne(e,e.return,w)}_u&&(_u=!1,lm(e));break;case 4:a=Tt,Tt=Ni(e.stateNode.containerInfo),dt(t,e),mt(e),Tt=a;break;case 12:dt(t,e),mt(e);break;case 13:dt(t,e),mt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Mu=Ft()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ou(e,a)));break;case 22:r=e.memoizedState!==null;var b=n!==null&&n.memoizedState!==null,A=tn,O=Ue;if(tn=A||r,Ue=O||b,dt(t,e),Ue=O,tn=A,mt(e),a&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||b||tn||Ue||ia(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){b=n=t;try{if(i=b.stateNode,r)d=i.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{h=b.stateNode;var M=b.memoizedProps.style,C=M!=null&&M.hasOwnProperty("display")?M.display:null;h.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(w){Ne(b,b.return,w)}}}else if(t.tag===6){if(n===null){b=t;try{b.stateNode.nodeValue=r?"":b.memoizedProps}catch(w){Ne(b,b.return,w)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Ou(e,n))));break;case 19:dt(t,e),mt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ou(e,a)));break;case 30:break;case 21:break;default:dt(t,e),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if($d(a)){n=a;break}a=a.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var r=n.stateNode,i=Cu(e);oi(e,i,r);break;case 5:var d=n.stateNode;n.flags&32&&(ya(d,""),n.flags&=-33);var h=Cu(e);oi(e,h,d);break;case 3:case 4:var b=n.stateNode.containerInfo,A=Cu(e);wu(e,A,b);break;default:throw Error(s(161))}}catch(O){Ne(e,e.return,O)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function lm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;lm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function An(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)em(e,t.alternate,t),t=t.sibling}function ia(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:En(4,t,t.return),ia(t);break;case 1:Ut(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Jd(t,t.return,n),ia(t);break;case 27:Kr(t.stateNode);case 26:case 5:Ut(t,t.return),ia(t);break;case 22:t.memoizedState===null&&ia(t);break;case 30:ia(t);break;default:ia(t)}e=e.sibling}}function Cn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,r=e,i=t,d=i.flags;switch(i.tag){case 0:case 11:case 15:Cn(r,i,n),Hr(4,i);break;case 1:if(Cn(r,i,n),a=i,r=a.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(A){Ne(a,a.return,A)}if(a=i,r=a.updateQueue,r!==null){var h=a.stateNode;try{var b=r.shared.hiddenCallbacks;if(b!==null)for(r.shared.hiddenCallbacks=null,r=0;r<b.length;r++)Rf(b[r],h)}catch(A){Ne(a,a.return,A)}}n&&d&64&&Kd(i),Br(i,i.return);break;case 27:Wd(i);case 26:case 5:Cn(r,i,n),n&&a===null&&d&4&&Id(i),Br(i,i.return);break;case 12:Cn(r,i,n);break;case 13:Cn(r,i,n),n&&d&4&&am(r,i);break;case 22:i.memoizedState===null&&Cn(r,i,n),Br(i,i.return);break;case 30:break;default:Cn(r,i,n)}t=t.sibling}}function zu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Er(n))}function Tu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Er(e))}function Lt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)im(e,t,n,a),t=t.sibling}function im(e,t,n,a){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Lt(e,t,n,a),r&2048&&Hr(9,t);break;case 1:Lt(e,t,n,a);break;case 3:Lt(e,t,n,a),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Er(e)));break;case 12:if(r&2048){Lt(e,t,n,a),e=t.stateNode;try{var i=t.memoizedProps,d=i.id,h=i.onPostCommit;typeof h=="function"&&h(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){Ne(t,t.return,b)}}else Lt(e,t,n,a);break;case 13:Lt(e,t,n,a);break;case 23:break;case 22:i=t.stateNode,d=t.alternate,t.memoizedState!==null?i._visibility&2?Lt(e,t,n,a):qr(e,t):i._visibility&2?Lt(e,t,n,a):(i._visibility|=2,Ba(e,t,n,a,(t.subtreeFlags&10256)!==0)),r&2048&&zu(d,t);break;case 24:Lt(e,t,n,a),r&2048&&Tu(t.alternate,t);break;default:Lt(e,t,n,a)}}function Ba(e,t,n,a,r){for(r=r&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var i=e,d=t,h=n,b=a,A=d.flags;switch(d.tag){case 0:case 11:case 15:Ba(i,d,h,b,r),Hr(8,d);break;case 23:break;case 22:var O=d.stateNode;d.memoizedState!==null?O._visibility&2?Ba(i,d,h,b,r):qr(i,d):(O._visibility|=2,Ba(i,d,h,b,r)),r&&A&2048&&zu(d.alternate,d);break;case 24:Ba(i,d,h,b,r),r&&A&2048&&Tu(d.alternate,d);break;default:Ba(i,d,h,b,r)}t=t.sibling}}function qr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,r=a.flags;switch(a.tag){case 22:qr(n,a),r&2048&&zu(a.alternate,a);break;case 24:qr(n,a),r&2048&&Tu(a.alternate,a);break;default:qr(n,a)}t=t.sibling}}var Yr=8192;function qa(e){if(e.subtreeFlags&Yr)for(e=e.child;e!==null;)sm(e),e=e.sibling}function sm(e){switch(e.tag){case 26:qa(e),e.flags&Yr&&e.memoizedState!==null&&S1(Tt,e.memoizedState,e.memoizedProps);break;case 5:qa(e);break;case 3:case 4:var t=Tt;Tt=Ni(e.stateNode.containerInfo),qa(e),Tt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Yr,Yr=16777216,qa(e),Yr=t):qa(e));break;default:qa(e)}}function um(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function kr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ge=a,cm(a,e)}um(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)om(e),e=e.sibling}function om(e){switch(e.tag){case 0:case 11:case 15:kr(e),e.flags&2048&&En(9,e,e.return);break;case 3:kr(e);break;case 12:kr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ci(e)):kr(e);break;default:kr(e)}}function ci(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ge=a,cm(a,e)}um(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:En(8,t,t.return),ci(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,ci(t));break;default:ci(t)}e=e.sibling}}function cm(e,t){for(;Ge!==null;){var n=Ge;switch(n.tag){case 0:case 11:case 15:En(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Er(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Ge=a;else e:for(n=e;Ge!==null;){a=Ge;var r=a.sibling,i=a.return;if(tm(a),a===n){Ge=null;break e}if(r!==null){r.return=i,Ge=r;break e}Ge=i}}}var Lp={getCacheForType:function(e){var t=$e(Be),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Hp=typeof WeakMap=="function"?WeakMap:Map,pe=0,Ee=null,oe=null,de=0,ve=0,ht=null,wn=!1,Ya=!1,Du=!1,an=0,Re=0,_n=0,sa=0,Fu=0,Ct=0,ka=0,Gr=null,it=null,Ru=!1,Mu=0,fi=1/0,di=null,On=null,Qe=0,zn=null,Ga=null,Xa=0,Uu=0,Lu=null,fm=null,Xr=0,Hu=null;function gt(){if((pe&2)!==0&&de!==0)return de&-de;if(T.T!==null){var e=Ta;return e!==0?e:Vu()}return Cc()}function dm(){Ct===0&&(Ct=(de&536870912)===0||ge?Nc():536870912);var e=At.current;return e!==null&&(e.flags|=32),Ct}function pt(e,t,n){(e===Ee&&(ve===2||ve===9)||e.cancelPendingCommit!==null)&&(Va(e,0),Tn(e,de,Ct,!1)),ur(e,n),((pe&2)===0||e!==Ee)&&(e===Ee&&((pe&2)===0&&(sa|=n),Re===4&&Tn(e,de,Ct,!1)),Ht(e))}function mm(e,t,n){if((pe&6)!==0)throw Error(s(327));var a=!n&&(t&124)===0&&(t&e.expiredLanes)===0||sr(e,t),r=a?Yp(e,t):Yu(e,t,!0),i=a;do{if(r===0){Ya&&!a&&Tn(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!Bp(n)){r=Yu(e,t,!1),i=!1;continue}if(r===2){if(i=t,e.errorRecoveryDisabledLanes&i)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var h=e;r=Gr;var b=h.current.memoizedState.isDehydrated;if(b&&(Va(h,d).flags|=256),d=Yu(h,d,!1),d!==2){if(Du&&!b){h.errorRecoveryDisabledLanes|=i,sa|=i,r=4;break e}i=it,it=r,i!==null&&(it===null?it=i:it.push.apply(it,i))}r=d}if(i=!1,r!==2)continue}}if(r===1){Va(e,0),Tn(e,t,0,!0);break}e:{switch(a=e,i=r,i){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:Tn(a,t,Ct,!wn);break e;case 2:it=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(r=Mu+300-Ft(),10<r)){if(Tn(a,t,Ct,!wn),jl(a,0,!0)!==0)break e;a.timeoutHandle=km(hm.bind(null,a,n,it,di,Ru,t,Ct,sa,ka,wn,i,2,-0,0),r);break e}hm(a,n,it,di,Ru,t,Ct,sa,ka,wn,i,0,-0,0)}}break}while(!0);Ht(e)}function hm(e,t,n,a,r,i,d,h,b,A,O,M,C,w){if(e.timeoutHandle=-1,M=t.subtreeFlags,(M&8192||(M&16785408)===16785408)&&($r={stylesheets:null,count:0,unsuspend:y1},sm(t),M=N1(),M!==null)){e.cancelPendingCommit=M(Sm.bind(null,e,t,i,n,a,r,d,h,b,O,1,C,w)),Tn(e,i,d,!A);return}Sm(e,t,i,n,a,r,d,h,b)}function Bp(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var r=n[a],i=r.getSnapshot;r=r.value;try{if(!ct(i(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tn(e,t,n,a){t&=~Fu,t&=~sa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var r=t;0<r;){var i=31-ot(r),d=1<<i;a[i]=-1,r&=~d}n!==0&&Ec(e,n,t)}function mi(){return(pe&6)===0?(Vr(0),!1):!0}function Bu(){if(oe!==null){if(ve===0)var e=oe.return;else e=oe,Jt=ta=null,nu(e),La=null,Mr=0,e=oe;for(;e!==null;)Zd(e.alternate,e),e=e.return;oe=null}}function Va(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,a1(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Bu(),Ee=e,oe=n=Qt(e.current,null),de=t,ve=0,ht=null,wn=!1,Ya=sr(e,t),Du=!1,ka=Ct=Fu=sa=_n=Re=0,it=Gr=null,Ru=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var r=31-ot(a),i=1<<r;t|=e[r],a&=~i}return an=t,Ml(),n}function gm(e,t){se=null,T.H=ei,t===Cr||t===Xl?(t=Df(),ve=3):t===Of?(t=Df(),ve=4):ve=t===Fd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ht=t,oe===null&&(Re=1,li(e,St(t,e.current)))}function pm(){var e=T.H;return T.H=ei,e===null?ei:e}function vm(){var e=T.A;return T.A=Lp,e}function qu(){Re=4,wn||(de&4194048)!==de&&At.current!==null||(Ya=!0),(_n&134217727)===0&&(sa&134217727)===0||Ee===null||Tn(Ee,de,Ct,!1)}function Yu(e,t,n){var a=pe;pe|=2;var r=pm(),i=vm();(Ee!==e||de!==t)&&(di=null,Va(e,t)),t=!1;var d=Re;e:do try{if(ve!==0&&oe!==null){var h=oe,b=ht;switch(ve){case 8:Bu(),d=6;break e;case 3:case 2:case 9:case 6:At.current===null&&(t=!0);var A=ve;if(ve=0,ht=null,Qa(e,h,b,A),n&&Ya){d=0;break e}break;default:A=ve,ve=0,ht=null,Qa(e,h,b,A)}}qp(),d=Re;break}catch(O){gm(e,O)}while(!0);return t&&e.shellSuspendCounter++,Jt=ta=null,pe=a,T.H=r,T.A=i,oe===null&&(Ee=null,de=0,Ml()),d}function qp(){for(;oe!==null;)xm(oe)}function Yp(e,t){var n=pe;pe|=2;var a=pm(),r=vm();Ee!==e||de!==t?(di=null,fi=Ft()+500,Va(e,t)):Ya=sr(e,t);e:do try{if(ve!==0&&oe!==null){t=oe;var i=ht;t:switch(ve){case 1:ve=0,ht=null,Qa(e,t,i,1);break;case 2:case 9:if(zf(i)){ve=0,ht=null,bm(t);break}t=function(){ve!==2&&ve!==9||Ee!==e||(ve=7),Ht(e)},i.then(t,t);break e;case 3:ve=7;break e;case 4:ve=5;break e;case 7:zf(i)?(ve=0,ht=null,bm(t)):(ve=0,ht=null,Qa(e,t,i,7));break;case 5:var d=null;switch(oe.tag){case 26:d=oe.memoizedState;case 5:case 27:var h=oe;if(!d||e0(d)){ve=0,ht=null;var b=h.sibling;if(b!==null)oe=b;else{var A=h.return;A!==null?(oe=A,hi(A)):oe=null}break t}}ve=0,ht=null,Qa(e,t,i,5);break;case 6:ve=0,ht=null,Qa(e,t,i,6);break;case 8:Bu(),Re=6;break e;default:throw Error(s(462))}}kp();break}catch(O){gm(e,O)}while(!0);return Jt=ta=null,T.H=a,T.A=r,pe=n,oe!==null?0:(Ee=null,de=0,Ml(),Re)}function kp(){for(;oe!==null&&!cg();)xm(oe)}function xm(e){var t=Vd(e.alternate,e,an);e.memoizedProps=e.pendingProps,t===null?hi(e):oe=t}function bm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Bd(n,t,t.pendingProps,t.type,void 0,de);break;case 11:t=Bd(n,t,t.pendingProps,t.type.render,t.ref,de);break;case 5:nu(t);default:Zd(n,t),t=oe=yf(t,an),t=Vd(n,t,an)}e.memoizedProps=e.pendingProps,t===null?hi(e):oe=t}function Qa(e,t,n,a){Jt=ta=null,nu(t),La=null,Mr=0;var r=t.return;try{if(Tp(e,r,t,n,de)){Re=1,li(e,St(n,e.current)),oe=null;return}}catch(i){if(r!==null)throw oe=r,i;Re=1,li(e,St(n,e.current)),oe=null;return}t.flags&32768?(ge||a===1?e=!0:Ya||(de&536870912)!==0?e=!1:(wn=e=!0,(a===2||a===9||a===3||a===6)&&(a=At.current,a!==null&&a.tag===13&&(a.flags|=16384))),ym(t,e)):hi(t)}function hi(e){var t=e;do{if((t.flags&32768)!==0){ym(t,wn);return}e=t.return;var n=Fp(t.alternate,t,an);if(n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);Re===0&&(Re=5)}function ym(e,t){do{var n=Rp(e.alternate,e);if(n!==null){n.flags&=32767,oe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){oe=e;return}oe=e=n}while(e!==null);Re=6,oe=null}function Sm(e,t,n,a,r,i,d,h,b){e.cancelPendingCommit=null;do gi();while(Qe!==0);if((pe&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(i=t.lanes|t.childLanes,i|=Ts,yg(e,n,i,d,h,b),e===Ee&&(oe=Ee=null,de=0),Ga=t,zn=e,Xa=n,Uu=i,Lu=r,fm=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Qp(yl,function(){return Cm(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=T.T,T.T=null,r=V.p,V.p=2,d=pe,pe|=4;try{Mp(e,t,n)}finally{pe=d,V.p=r,T.T=a}}Qe=1,Nm(),jm(),Em()}}function Nm(){if(Qe===1){Qe=0;var e=zn,t=Ga,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=T.T,T.T=null;var a=V.p;V.p=2;var r=pe;pe|=4;try{rm(t,e);var i=Pu,d=cf(e.containerInfo),h=i.focusedElem,b=i.selectionRange;if(d!==h&&h&&h.ownerDocument&&of(h.ownerDocument.documentElement,h)){if(b!==null&&Cs(h)){var A=b.start,O=b.end;if(O===void 0&&(O=A),"selectionStart"in h)h.selectionStart=A,h.selectionEnd=Math.min(O,h.value.length);else{var M=h.ownerDocument||document,C=M&&M.defaultView||window;if(C.getSelection){var w=C.getSelection(),ae=h.textContent.length,ee=Math.min(b.start,ae),ye=b.end===void 0?ee:Math.min(b.end,ae);!w.extend&&ee>ye&&(d=ye,ye=ee,ee=d);var j=uf(h,ee),S=uf(h,ye);if(j&&S&&(w.rangeCount!==1||w.anchorNode!==j.node||w.anchorOffset!==j.offset||w.focusNode!==S.node||w.focusOffset!==S.offset)){var E=M.createRange();E.setStart(j.node,j.offset),w.removeAllRanges(),ee>ye?(w.addRange(E),w.extend(S.node,S.offset)):(E.setEnd(S.node,S.offset),w.addRange(E))}}}}for(M=[],w=h;w=w.parentNode;)w.nodeType===1&&M.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<M.length;h++){var D=M[h];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}wi=!!Wu,Pu=Wu=null}finally{pe=r,V.p=a,T.T=n}}e.current=t,Qe=2}}function jm(){if(Qe===2){Qe=0;var e=zn,t=Ga,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=T.T,T.T=null;var a=V.p;V.p=2;var r=pe;pe|=4;try{em(e,t.alternate,t)}finally{pe=r,V.p=a,T.T=n}}Qe=3}}function Em(){if(Qe===4||Qe===3){Qe=0,fg();var e=zn,t=Ga,n=Xa,a=fm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Qe=5:(Qe=0,Ga=zn=null,Am(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(On=null),ls(n),t=t.stateNode,ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(ir,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=T.T,r=V.p,V.p=2,T.T=null;try{for(var i=e.onRecoverableError,d=0;d<a.length;d++){var h=a[d];i(h.value,{componentStack:h.stack})}}finally{T.T=t,V.p=r}}(Xa&3)!==0&&gi(),Ht(e),r=e.pendingLanes,(n&4194090)!==0&&(r&42)!==0?e===Hu?Xr++:(Xr=0,Hu=e):Xr=0,Vr(0)}}function Am(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Er(t)))}function gi(e){return Nm(),jm(),Em(),Cm()}function Cm(){if(Qe!==5)return!1;var e=zn,t=Uu;Uu=0;var n=ls(Xa),a=T.T,r=V.p;try{V.p=32>n?32:n,T.T=null,n=Lu,Lu=null;var i=zn,d=Xa;if(Qe=0,Ga=zn=null,Xa=0,(pe&6)!==0)throw Error(s(331));var h=pe;if(pe|=4,om(i.current),im(i,i.current,d,n),pe=h,Vr(0,!1),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(ir,i)}catch{}return!0}finally{V.p=r,T.T=a,Am(e,t)}}function wm(e,t,n){t=St(n,t),t=pu(e.stateNode,t,2),e=yn(e,t,2),e!==null&&(ur(e,2),Ht(e))}function Ne(e,t,n){if(e.tag===3)wm(e,e,n);else for(;t!==null;){if(t.tag===3){wm(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(On===null||!On.has(a))){e=St(n,e),n=Td(2),a=yn(t,n,2),a!==null&&(Dd(n,a,t,e),ur(a,2),Ht(a));break}}t=t.return}}function ku(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Hp;var r=new Set;a.set(t,r)}else r=a.get(t),r===void 0&&(r=new Set,a.set(t,r));r.has(n)||(Du=!0,r.add(n),e=Gp.bind(null,e,t,n),t.then(e,e))}function Gp(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ee===e&&(de&n)===n&&(Re===4||Re===3&&(de&62914560)===de&&300>Ft()-Mu?(pe&2)===0&&Va(e,0):Fu|=n,ka===de&&(ka=0)),Ht(e)}function _m(e,t){t===0&&(t=jc()),e=wa(e,t),e!==null&&(ur(e,t),Ht(e))}function Xp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_m(e,n)}function Vp(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(t),_m(e,n)}function Qp(e,t){return ts(e,t)}var pi=null,Za=null,Gu=!1,vi=!1,Xu=!1,ua=0;function Ht(e){e!==Za&&e.next===null&&(Za===null?pi=Za=e:Za=Za.next=e),vi=!0,Gu||(Gu=!0,Kp())}function Vr(e,t){if(!Xu&&vi){Xu=!0;do for(var n=!1,a=pi;a!==null;){if(e!==0){var r=a.pendingLanes;if(r===0)var i=0;else{var d=a.suspendedLanes,h=a.pingedLanes;i=(1<<31-ot(42|e)+1)-1,i&=r&~(d&~h),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,Dm(a,i))}else i=de,i=jl(a,a===Ee?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||sr(a,i)||(n=!0,Dm(a,i));a=a.next}while(n);Xu=!1}}function Zp(){Om()}function Om(){vi=Gu=!1;var e=0;ua!==0&&(n1()&&(e=ua),ua=0);for(var t=Ft(),n=null,a=pi;a!==null;){var r=a.next,i=zm(a,t);i===0?(a.next=null,n===null?pi=r:n.next=r,r===null&&(Za=n)):(n=a,(e!==0||(i&3)!==0)&&(vi=!0)),a=r}Vr(e)}function zm(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var d=31-ot(i),h=1<<d,b=r[d];b===-1?((h&n)===0||(h&a)!==0)&&(r[d]=bg(h,t)):b<=t&&(e.expiredLanes|=h),i&=~h}if(t=Ee,n=de,n=jl(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(ve===2||ve===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&ns(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||sr(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&ns(a),ls(n)){case 2:case 8:n=yc;break;case 32:n=yl;break;case 268435456:n=Sc;break;default:n=yl}return a=Tm.bind(null,e),n=ts(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&ns(a),e.callbackPriority=2,e.callbackNode=null,2}function Tm(e,t){if(Qe!==0&&Qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(gi()&&e.callbackNode!==n)return null;var a=de;return a=jl(e,e===Ee?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(mm(e,a,t),zm(e,Ft()),e.callbackNode!=null&&e.callbackNode===n?Tm.bind(null,e):null)}function Dm(e,t){if(gi())return null;mm(e,t,!0)}function Kp(){r1(function(){(pe&6)!==0?ts(bc,Zp):Om()})}function Vu(){return ua===0&&(ua=Nc()),ua}function Fm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:_l(""+e)}function Rm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Jp(e,t,n,a,r){if(t==="submit"&&n&&n.stateNode===r){var i=Fm((r[nt]||null).action),d=a.submitter;d&&(t=(t=d[nt]||null)?Fm(t.formAction):d.getAttribute("formAction"),t!==null&&(i=t,d=null));var h=new Dl("action","action",null,a,r);e.push({event:h,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ua!==0){var b=d?Rm(r,d):new FormData(r);fu(n,{pending:!0,data:b,method:r.method,action:i},null,b)}}else typeof i=="function"&&(h.preventDefault(),b=d?Rm(r,d):new FormData(r),fu(n,{pending:!0,data:b,method:r.method,action:i},i,b))},currentTarget:r}]})}}for(var Qu=0;Qu<zs.length;Qu++){var Zu=zs[Qu],Ip=Zu.toLowerCase(),$p=Zu[0].toUpperCase()+Zu.slice(1);zt(Ip,"on"+$p)}zt(mf,"onAnimationEnd"),zt(hf,"onAnimationIteration"),zt(gf,"onAnimationStart"),zt("dblclick","onDoubleClick"),zt("focusin","onFocus"),zt("focusout","onBlur"),zt(hp,"onTransitionRun"),zt(gp,"onTransitionStart"),zt(pp,"onTransitionCancel"),zt(pf,"onTransitionEnd"),va("onMouseEnter",["mouseout","mouseover"]),va("onMouseLeave",["mouseout","mouseover"]),va("onPointerEnter",["pointerout","pointerover"]),va("onPointerLeave",["pointerout","pointerover"]),Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qr));function Mm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],r=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var d=a.length-1;0<=d;d--){var h=a[d],b=h.instance,A=h.currentTarget;if(h=h.listener,b!==i&&r.isPropagationStopped())break e;i=h,r.currentTarget=A;try{i(r)}catch(O){ri(O)}r.currentTarget=null,i=b}else for(d=0;d<a.length;d++){if(h=a[d],b=h.instance,A=h.currentTarget,h=h.listener,b!==i&&r.isPropagationStopped())break e;i=h,r.currentTarget=A;try{i(r)}catch(O){ri(O)}r.currentTarget=null,i=b}}}}function ce(e,t){var n=t[is];n===void 0&&(n=t[is]=new Set);var a=e+"__bubble";n.has(a)||(Um(t,e,2,!1),n.add(a))}function Ku(e,t,n){var a=0;t&&(a|=4),Um(n,e,a,t)}var xi="_reactListening"+Math.random().toString(36).slice(2);function Ju(e){if(!e[xi]){e[xi]=!0,_c.forEach(function(n){n!=="selectionchange"&&(Wp.has(n)||Ku(n,!1,e),Ku(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xi]||(t[xi]=!0,Ku("selectionchange",!1,t))}}function Um(e,t,n,a){switch(i0(t)){case 2:var r=A1;break;case 8:r=C1;break;default:r=oo}n=r.bind(null,t,n,e),r=void 0,!vs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Iu(e,t,n,a,r){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var d=a.tag;if(d===3||d===4){var h=a.stateNode.containerInfo;if(h===r)break;if(d===4)for(d=a.return;d!==null;){var b=d.tag;if((b===3||b===4)&&d.stateNode.containerInfo===r)return;d=d.return}for(;h!==null;){if(d=ha(h),d===null)return;if(b=d.tag,b===5||b===6||b===26||b===27){a=i=d;continue e}h=h.parentNode}}a=a.return}kc(function(){var A=i,O=gs(n),M=[];e:{var C=vf.get(e);if(C!==void 0){var w=Dl,ae=e;switch(e){case"keypress":if(zl(n)===0)break e;case"keydown":case"keyup":w=Qg;break;case"focusin":ae="focus",w=Ss;break;case"focusout":ae="blur",w=Ss;break;case"beforeblur":case"afterblur":w=Ss;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Vc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Rg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Jg;break;case mf:case hf:case gf:w=Lg;break;case pf:w=$g;break;case"scroll":case"scrollend":w=Dg;break;case"wheel":w=Pg;break;case"copy":case"cut":case"paste":w=Bg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Zc;break;case"toggle":case"beforetoggle":w=tp}var ee=(t&4)!==0,ye=!ee&&(e==="scroll"||e==="scrollend"),j=ee?C!==null?C+"Capture":null:C;ee=[];for(var S=A,E;S!==null;){var D=S;if(E=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||E===null||j===null||(D=fr(S,j),D!=null&&ee.push(Zr(S,D,E))),ye)break;S=S.return}0<ee.length&&(C=new w(C,ae,null,n,O),M.push({event:C,listeners:ee}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",C&&n!==hs&&(ae=n.relatedTarget||n.fromElement)&&(ha(ae)||ae[ma]))break e;if((w||C)&&(C=O.window===O?O:(C=O.ownerDocument)?C.defaultView||C.parentWindow:window,w?(ae=n.relatedTarget||n.toElement,w=A,ae=ae?ha(ae):null,ae!==null&&(ye=m(ae),ee=ae.tag,ae!==ye||ee!==5&&ee!==27&&ee!==6)&&(ae=null)):(w=null,ae=A),w!==ae)){if(ee=Vc,D="onMouseLeave",j="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Zc,D="onPointerLeave",j="onPointerEnter",S="pointer"),ye=w==null?C:cr(w),E=ae==null?C:cr(ae),C=new ee(D,S+"leave",w,n,O),C.target=ye,C.relatedTarget=E,D=null,ha(O)===A&&(ee=new ee(j,S+"enter",ae,n,O),ee.target=E,ee.relatedTarget=ye,D=ee),ye=D,w&&ae)t:{for(ee=w,j=ae,S=0,E=ee;E;E=Ka(E))S++;for(E=0,D=j;D;D=Ka(D))E++;for(;0<S-E;)ee=Ka(ee),S--;for(;0<E-S;)j=Ka(j),E--;for(;S--;){if(ee===j||j!==null&&ee===j.alternate)break t;ee=Ka(ee),j=Ka(j)}ee=null}else ee=null;w!==null&&Lm(M,C,w,ee,!1),ae!==null&&ye!==null&&Lm(M,ye,ae,ee,!0)}}e:{if(C=A?cr(A):window,w=C.nodeName&&C.nodeName.toLowerCase(),w==="select"||w==="input"&&C.type==="file")var Z=tf;else if(Pc(C))if(nf)Z=fp;else{Z=op;var ue=up}else w=C.nodeName,!w||w.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?A&&ms(A.elementType)&&(Z=tf):Z=cp;if(Z&&(Z=Z(e,A))){ef(M,Z,n,O);break e}ue&&ue(e,C,A),e==="focusout"&&A&&C.type==="number"&&A.memoizedProps.value!=null&&ds(C,"number",C.value)}switch(ue=A?cr(A):window,e){case"focusin":(Pc(ue)||ue.contentEditable==="true")&&(Ea=ue,ws=A,br=null);break;case"focusout":br=ws=Ea=null;break;case"mousedown":_s=!0;break;case"contextmenu":case"mouseup":case"dragend":_s=!1,ff(M,n,O);break;case"selectionchange":if(mp)break;case"keydown":case"keyup":ff(M,n,O)}var W;if(js)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else ja?$c(e,n)&&(te="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(te="onCompositionStart");te&&(Kc&&n.locale!=="ko"&&(ja||te!=="onCompositionStart"?te==="onCompositionEnd"&&ja&&(W=Gc()):(pn=O,xs="value"in pn?pn.value:pn.textContent,ja=!0)),ue=bi(A,te),0<ue.length&&(te=new Qc(te,e,null,n,O),M.push({event:te,listeners:ue}),W?te.data=W:(W=Wc(n),W!==null&&(te.data=W)))),(W=ap?rp(e,n):lp(e,n))&&(te=bi(A,"onBeforeInput"),0<te.length&&(ue=new Qc("onBeforeInput","beforeinput",null,n,O),M.push({event:ue,listeners:te}),ue.data=W)),Jp(M,e,A,n,O)}Mm(M,t)})}function Zr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function bi(e,t){for(var n=t+"Capture",a=[];e!==null;){var r=e,i=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||i===null||(r=fr(e,n),r!=null&&a.unshift(Zr(e,r,i)),r=fr(e,t),r!=null&&a.push(Zr(e,r,i))),e.tag===3)return a;e=e.return}return[]}function Ka(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Lm(e,t,n,a,r){for(var i=t._reactName,d=[];n!==null&&n!==a;){var h=n,b=h.alternate,A=h.stateNode;if(h=h.tag,b!==null&&b===a)break;h!==5&&h!==26&&h!==27||A===null||(b=A,r?(A=fr(n,i),A!=null&&d.unshift(Zr(n,A,b))):r||(A=fr(n,i),A!=null&&d.push(Zr(n,A,b)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var Pp=/\r\n?/g,e1=/\u0000|\uFFFD/g;function Hm(e){return(typeof e=="string"?e:""+e).replace(Pp,`
`).replace(e1,"")}function Bm(e,t){return t=Hm(t),Hm(e)===t}function yi(){}function be(e,t,n,a,r,i){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ya(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ya(e,""+a);break;case"className":Al(e,"class",a);break;case"tabIndex":Al(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Al(e,n,a);break;case"style":qc(e,a,i);break;case"data":if(t!=="object"){Al(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=_l(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&be(e,t,"name",r.name,r,null),be(e,t,"formEncType",r.formEncType,r,null),be(e,t,"formMethod",r.formMethod,r,null),be(e,t,"formTarget",r.formTarget,r,null)):(be(e,t,"encType",r.encType,r,null),be(e,t,"method",r.method,r,null),be(e,t,"target",r.target,r,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=_l(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=yi);break;case"onScroll":a!=null&&ce("scroll",e);break;case"onScrollEnd":a!=null&&ce("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=_l(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":ce("beforetoggle",e),ce("toggle",e),El(e,"popover",a);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":El(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=zg.get(n)||n,El(e,n,a))}}function $u(e,t,n,a,r,i){switch(n){case"style":qc(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof a=="string"?ya(e,a):(typeof a=="number"||typeof a=="bigint")&&ya(e,""+a);break;case"onScroll":a!=null&&ce("scroll",e);break;case"onScrollEnd":a!=null&&ce("scrollend",e);break;case"onClick":a!=null&&(e.onclick=yi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Oc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),i=e[nt]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,r),typeof a=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,r);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):El(e,n,a)}}}function Ze(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ce("error",e),ce("load",e);var a=!1,r=!1,i;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"src":a=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:be(e,t,i,d,n,null)}}r&&be(e,t,"srcSet",n.srcSet,n,null),a&&be(e,t,"src",n.src,n,null);return;case"input":ce("invalid",e);var h=i=d=r=null,b=null,A=null;for(a in n)if(n.hasOwnProperty(a)){var O=n[a];if(O!=null)switch(a){case"name":r=O;break;case"type":d=O;break;case"checked":b=O;break;case"defaultChecked":A=O;break;case"value":i=O;break;case"defaultValue":h=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(s(137,t));break;default:be(e,t,a,O,n,null)}}Uc(e,i,h,b,A,d,r,!1),Cl(e);return;case"select":ce("invalid",e),a=d=i=null;for(r in n)if(n.hasOwnProperty(r)&&(h=n[r],h!=null))switch(r){case"value":i=h;break;case"defaultValue":d=h;break;case"multiple":a=h;default:be(e,t,r,h,n,null)}t=i,n=d,e.multiple=!!a,t!=null?ba(e,!!a,t,!1):n!=null&&ba(e,!!a,n,!0);return;case"textarea":ce("invalid",e),i=r=a=null;for(d in n)if(n.hasOwnProperty(d)&&(h=n[d],h!=null))switch(d){case"value":a=h;break;case"defaultValue":r=h;break;case"children":i=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:be(e,t,d,h,n,null)}Hc(e,a,r,i),Cl(e);return;case"option":for(b in n)if(n.hasOwnProperty(b)&&(a=n[b],a!=null))switch(b){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:be(e,t,b,a,n,null)}return;case"dialog":ce("beforetoggle",e),ce("toggle",e),ce("cancel",e),ce("close",e);break;case"iframe":case"object":ce("load",e);break;case"video":case"audio":for(a=0;a<Qr.length;a++)ce(Qr[a],e);break;case"image":ce("error",e),ce("load",e);break;case"details":ce("toggle",e);break;case"embed":case"source":case"link":ce("error",e),ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in n)if(n.hasOwnProperty(A)&&(a=n[A],a!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:be(e,t,A,a,n,null)}return;default:if(ms(t)){for(O in n)n.hasOwnProperty(O)&&(a=n[O],a!==void 0&&$u(e,t,O,a,n,void 0));return}}for(h in n)n.hasOwnProperty(h)&&(a=n[h],a!=null&&be(e,t,h,a,n,null))}function t1(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,i=null,d=null,h=null,b=null,A=null,O=null;for(w in n){var M=n[w];if(n.hasOwnProperty(w)&&M!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":b=M;default:a.hasOwnProperty(w)||be(e,t,w,null,a,M)}}for(var C in a){var w=a[C];if(M=n[C],a.hasOwnProperty(C)&&(w!=null||M!=null))switch(C){case"type":i=w;break;case"name":r=w;break;case"checked":A=w;break;case"defaultChecked":O=w;break;case"value":d=w;break;case"defaultValue":h=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(137,t));break;default:w!==M&&be(e,t,C,w,a,M)}}fs(e,d,h,b,A,O,i,r);return;case"select":w=d=h=C=null;for(i in n)if(b=n[i],n.hasOwnProperty(i)&&b!=null)switch(i){case"value":break;case"multiple":w=b;default:a.hasOwnProperty(i)||be(e,t,i,null,a,b)}for(r in a)if(i=a[r],b=n[r],a.hasOwnProperty(r)&&(i!=null||b!=null))switch(r){case"value":C=i;break;case"defaultValue":h=i;break;case"multiple":d=i;default:i!==b&&be(e,t,r,i,a,b)}t=h,n=d,a=w,C!=null?ba(e,!!n,C,!1):!!a!=!!n&&(t!=null?ba(e,!!n,t,!0):ba(e,!!n,n?[]:"",!1));return;case"textarea":w=C=null;for(h in n)if(r=n[h],n.hasOwnProperty(h)&&r!=null&&!a.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:be(e,t,h,null,a,r)}for(d in a)if(r=a[d],i=n[d],a.hasOwnProperty(d)&&(r!=null||i!=null))switch(d){case"value":C=r;break;case"defaultValue":w=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(s(91));break;default:r!==i&&be(e,t,d,r,a,i)}Lc(e,C,w);return;case"option":for(var ae in n)if(C=n[ae],n.hasOwnProperty(ae)&&C!=null&&!a.hasOwnProperty(ae))switch(ae){case"selected":e.selected=!1;break;default:be(e,t,ae,null,a,C)}for(b in a)if(C=a[b],w=n[b],a.hasOwnProperty(b)&&C!==w&&(C!=null||w!=null))switch(b){case"selected":e.selected=C&&typeof C!="function"&&typeof C!="symbol";break;default:be(e,t,b,C,a,w)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in n)C=n[ee],n.hasOwnProperty(ee)&&C!=null&&!a.hasOwnProperty(ee)&&be(e,t,ee,null,a,C);for(A in a)if(C=a[A],w=n[A],a.hasOwnProperty(A)&&C!==w&&(C!=null||w!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(137,t));break;default:be(e,t,A,C,a,w)}return;default:if(ms(t)){for(var ye in n)C=n[ye],n.hasOwnProperty(ye)&&C!==void 0&&!a.hasOwnProperty(ye)&&$u(e,t,ye,void 0,a,C);for(O in a)C=a[O],w=n[O],!a.hasOwnProperty(O)||C===w||C===void 0&&w===void 0||$u(e,t,O,C,a,w);return}}for(var j in n)C=n[j],n.hasOwnProperty(j)&&C!=null&&!a.hasOwnProperty(j)&&be(e,t,j,null,a,C);for(M in a)C=a[M],w=n[M],!a.hasOwnProperty(M)||C===w||C==null&&w==null||be(e,t,M,C,a,w)}var Wu=null,Pu=null;function Si(e){return e.nodeType===9?e:e.ownerDocument}function qm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ym(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function eo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var to=null;function n1(){var e=window.event;return e&&e.type==="popstate"?e===to?!1:(to=e,!0):(to=null,!1)}var km=typeof setTimeout=="function"?setTimeout:void 0,a1=typeof clearTimeout=="function"?clearTimeout:void 0,Gm=typeof Promise=="function"?Promise:void 0,r1=typeof queueMicrotask=="function"?queueMicrotask:typeof Gm<"u"?function(e){return Gm.resolve(null).then(e).catch(l1)}:km;function l1(e){setTimeout(function(){throw e})}function Dn(e){return e==="head"}function Xm(e,t){var n=t,a=0,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(0<a&&8>a){n=a;var d=e.ownerDocument;if(n&1&&Kr(d.documentElement),n&2&&Kr(d.body),n&4)for(n=d.head,Kr(n),d=n.firstChild;d;){var h=d.nextSibling,b=d.nodeName;d[or]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&d.rel.toLowerCase()==="stylesheet"||n.removeChild(d),d=h}}if(r===0){e.removeChild(i),nl(t);return}r--}else n==="$"||n==="$?"||n==="$!"?r++:a=n.charCodeAt(0)-48;else a=0;n=i}while(n);nl(t)}function no(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":no(n),ss(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function i1(e,t,n,a){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[or])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Dt(e.nextSibling),e===null)break}return null}function s1(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Dt(e.nextSibling),e===null))return null;return e}function ao(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function u1(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var ro=null;function Vm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Qm(e,t,n){switch(t=Si(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Kr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ss(e)}var wt=new Map,Zm=new Set;function Ni(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var rn=V.d;V.d={f:o1,r:c1,D:f1,C:d1,L:m1,m:h1,X:p1,S:g1,M:v1};function o1(){var e=rn.f(),t=mi();return e||t}function c1(e){var t=ga(e);t!==null&&t.tag===5&&t.type==="form"?md(t):rn.r(e)}var Ja=typeof document>"u"?null:document;function Km(e,t,n){var a=Ja;if(a&&typeof t=="string"&&t){var r=yt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),Zm.has(r)||(Zm.add(r),e={rel:e,crossOrigin:n,href:t},a.querySelector(r)===null&&(t=a.createElement("link"),Ze(t,"link",e),Ye(t),a.head.appendChild(t)))}}function f1(e){rn.D(e),Km("dns-prefetch",e,null)}function d1(e,t){rn.C(e,t),Km("preconnect",e,t)}function m1(e,t,n){rn.L(e,t,n);var a=Ja;if(a&&e&&t){var r='link[rel="preload"][as="'+yt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+yt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+yt(n.imageSizes)+'"]')):r+='[href="'+yt(e)+'"]';var i=r;switch(t){case"style":i=Ia(e);break;case"script":i=$a(e)}wt.has(i)||(e=N({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),wt.set(i,e),a.querySelector(r)!==null||t==="style"&&a.querySelector(Jr(i))||t==="script"&&a.querySelector(Ir(i))||(t=a.createElement("link"),Ze(t,"link",e),Ye(t),a.head.appendChild(t)))}}function h1(e,t){rn.m(e,t);var n=Ja;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+yt(a)+'"][href="'+yt(e)+'"]',i=r;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=$a(e)}if(!wt.has(i)&&(e=N({rel:"modulepreload",href:e},t),wt.set(i,e),n.querySelector(r)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ir(i)))return}a=n.createElement("link"),Ze(a,"link",e),Ye(a),n.head.appendChild(a)}}}function g1(e,t,n){rn.S(e,t,n);var a=Ja;if(a&&e){var r=pa(a).hoistableStyles,i=Ia(e);t=t||"default";var d=r.get(i);if(!d){var h={loading:0,preload:null};if(d=a.querySelector(Jr(i)))h.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":t},n),(n=wt.get(i))&&lo(e,n);var b=d=a.createElement("link");Ye(b),Ze(b,"link",e),b._p=new Promise(function(A,O){b.onload=A,b.onerror=O}),b.addEventListener("load",function(){h.loading|=1}),b.addEventListener("error",function(){h.loading|=2}),h.loading|=4,ji(d,t,a)}d={type:"stylesheet",instance:d,count:1,state:h},r.set(i,d)}}}function p1(e,t){rn.X(e,t);var n=Ja;if(n&&e){var a=pa(n).hoistableScripts,r=$a(e),i=a.get(r);i||(i=n.querySelector(Ir(r)),i||(e=N({src:e,async:!0},t),(t=wt.get(r))&&io(e,t),i=n.createElement("script"),Ye(i),Ze(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(r,i))}}function v1(e,t){rn.M(e,t);var n=Ja;if(n&&e){var a=pa(n).hoistableScripts,r=$a(e),i=a.get(r);i||(i=n.querySelector(Ir(r)),i||(e=N({src:e,async:!0,type:"module"},t),(t=wt.get(r))&&io(e,t),i=n.createElement("script"),Ye(i),Ze(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(r,i))}}function Jm(e,t,n,a){var r=(r=re.current)?Ni(r):null;if(!r)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ia(n.href),n=pa(r).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ia(n.href);var i=pa(r).hoistableStyles,d=i.get(e);if(d||(r=r.ownerDocument||r,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,d),(i=r.querySelector(Jr(e)))&&!i._p&&(d.instance=i,d.state.loading=5),wt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},wt.set(e,n),i||x1(r,e,n,d.state))),t&&a===null)throw Error(s(528,""));return d}if(t&&a!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=$a(n),n=pa(r).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ia(e){return'href="'+yt(e)+'"'}function Jr(e){return'link[rel="stylesheet"]['+e+"]"}function Im(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function x1(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Ze(t,"link",n),Ye(t),e.head.appendChild(t))}function $a(e){return'[src="'+yt(e)+'"]'}function Ir(e){return"script[async]"+e}function $m(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+yt(n.href)+'"]');if(a)return t.instance=a,Ye(a),a;var r=N({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ye(a),Ze(a,"style",r),ji(a,n.precedence,e),t.instance=a;case"stylesheet":r=Ia(n.href);var i=e.querySelector(Jr(r));if(i)return t.state.loading|=4,t.instance=i,Ye(i),i;a=Im(n),(r=wt.get(r))&&lo(a,r),i=(e.ownerDocument||e).createElement("link"),Ye(i);var d=i;return d._p=new Promise(function(h,b){d.onload=h,d.onerror=b}),Ze(i,"link",a),t.state.loading|=4,ji(i,n.precedence,e),t.instance=i;case"script":return i=$a(n.src),(r=e.querySelector(Ir(i)))?(t.instance=r,Ye(r),r):(a=n,(r=wt.get(i))&&(a=N({},n),io(a,r)),e=e.ownerDocument||e,r=e.createElement("script"),Ye(r),Ze(r,"link",a),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,ji(a,n.precedence,e));return t.instance}function ji(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=a.length?a[a.length-1]:null,i=r,d=0;d<a.length;d++){var h=a[d];if(h.dataset.precedence===t)i=h;else if(i!==r)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function lo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function io(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ei=null;function Wm(e,t,n){if(Ei===null){var a=new Map,r=Ei=new Map;r.set(n,a)}else r=Ei,a=r.get(n),a||(a=new Map,r.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var i=n[r];if(!(i[or]||i[Ie]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var d=i.getAttribute(t)||"";d=e+d;var h=a.get(d);h?h.push(i):a.set(d,[i])}}return a}function Pm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function b1(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function e0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var $r=null;function y1(){}function S1(e,t,n){if($r===null)throw Error(s(475));var a=$r;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var r=Ia(n.href),i=e.querySelector(Jr(r));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=Ai.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=i,Ye(i);return}i=e.ownerDocument||e,n=Im(n),(r=wt.get(r))&&lo(n,r),i=i.createElement("link"),Ye(i);var d=i;d._p=new Promise(function(h,b){d.onload=h,d.onerror=b}),Ze(i,"link",n),t.instance=i}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=Ai.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function N1(){if($r===null)throw Error(s(475));var e=$r;return e.stylesheets&&e.count===0&&so(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&so(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Ai(){if(this.count--,this.count===0){if(this.stylesheets)so(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ci=null;function so(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ci=new Map,t.forEach(j1,e),Ci=null,Ai.call(e))}function j1(e,t){if(!(t.state.loading&4)){var n=Ci.get(e);if(n)var a=n.get(null);else{n=new Map,Ci.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<r.length;i++){var d=r[i];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),a=d)}a&&n.set(null,a)}r=t.instance,d=r.getAttribute("data-precedence"),i=n.get(d)||a,i===a&&n.set(null,r),n.set(d,r),this.count++,a=Ai.bind(this),r.addEventListener("load",a),r.addEventListener("error",a),i?i.parentNode.insertBefore(r,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var Wr={$$typeof:K,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function E1(e,t,n,a,r,i,d,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=as(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=as(0),this.hiddenUpdates=as(null),this.identifierPrefix=a,this.onUncaughtError=r,this.onCaughtError=i,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function t0(e,t,n,a,r,i,d,h,b,A,O,M){return e=new E1(e,t,n,d,h,b,A,M),t=1,i===!0&&(t|=24),i=ft(3,null,null,t),e.current=i,i.stateNode=e,t=ks(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:t},Qs(i),e}function n0(e){return e?(e=_a,e):_a}function a0(e,t,n,a,r,i){r=n0(r),a.context===null?a.context=r:a.pendingContext=r,a=bn(t),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=yn(e,a,t),n!==null&&(pt(n,e,t),_r(n,e,t))}function r0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function uo(e,t){r0(e,t),(e=e.alternate)&&r0(e,t)}function l0(e){if(e.tag===13){var t=wa(e,67108864);t!==null&&pt(t,e,67108864),uo(e,67108864)}}var wi=!0;function A1(e,t,n,a){var r=T.T;T.T=null;var i=V.p;try{V.p=2,oo(e,t,n,a)}finally{V.p=i,T.T=r}}function C1(e,t,n,a){var r=T.T;T.T=null;var i=V.p;try{V.p=8,oo(e,t,n,a)}finally{V.p=i,T.T=r}}function oo(e,t,n,a){if(wi){var r=co(a);if(r===null)Iu(e,t,a,_i,n),s0(e,a);else if(_1(r,e,t,n,a))a.stopPropagation();else if(s0(e,a),t&4&&-1<w1.indexOf(e)){for(;r!==null;){var i=ga(r);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var d=Vn(i.pendingLanes);if(d!==0){var h=i;for(h.pendingLanes|=2,h.entangledLanes|=2;d;){var b=1<<31-ot(d);h.entanglements[1]|=b,d&=~b}Ht(i),(pe&6)===0&&(fi=Ft()+500,Vr(0))}}break;case 13:h=wa(i,2),h!==null&&pt(h,i,2),mi(),uo(i,2)}if(i=co(a),i===null&&Iu(e,t,a,_i,n),i===r)break;r=i}r!==null&&a.stopPropagation()}else Iu(e,t,a,null,n)}}function co(e){return e=gs(e),fo(e)}var _i=null;function fo(e){if(_i=null,e=ha(e),e!==null){var t=m(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return _i=e,null}function i0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dg()){case bc:return 2;case yc:return 8;case yl:case mg:return 32;case Sc:return 268435456;default:return 32}default:return 32}}var mo=!1,Fn=null,Rn=null,Mn=null,Pr=new Map,el=new Map,Un=[],w1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function s0(e,t){switch(e){case"focusin":case"focusout":Fn=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":Pr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":el.delete(t.pointerId)}}function tl(e,t,n,a,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[r]},t!==null&&(t=ga(t),t!==null&&l0(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function _1(e,t,n,a,r){switch(t){case"focusin":return Fn=tl(Fn,e,t,n,a,r),!0;case"dragenter":return Rn=tl(Rn,e,t,n,a,r),!0;case"mouseover":return Mn=tl(Mn,e,t,n,a,r),!0;case"pointerover":var i=r.pointerId;return Pr.set(i,tl(Pr.get(i)||null,e,t,n,a,r)),!0;case"gotpointercapture":return i=r.pointerId,el.set(i,tl(el.get(i)||null,e,t,n,a,r)),!0}return!1}function u0(e){var t=ha(e.target);if(t!==null){var n=m(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,Sg(e.priority,function(){if(n.tag===13){var a=gt();a=rs(a);var r=wa(n,a);r!==null&&pt(r,n,a),uo(n,a)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=co(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);hs=a,n.target.dispatchEvent(a),hs=null}else return t=ga(n),t!==null&&l0(t),e.blockedOn=n,!1;t.shift()}return!0}function o0(e,t,n){Oi(e)&&n.delete(t)}function O1(){mo=!1,Fn!==null&&Oi(Fn)&&(Fn=null),Rn!==null&&Oi(Rn)&&(Rn=null),Mn!==null&&Oi(Mn)&&(Mn=null),Pr.forEach(o0),el.forEach(o0)}function zi(e,t){e.blockedOn===t&&(e.blockedOn=null,mo||(mo=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,O1)))}var Ti=null;function c0(e){Ti!==e&&(Ti=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Ti===e&&(Ti=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],r=e[t+2];if(typeof a!="function"){if(fo(a||n)===null)continue;break}var i=ga(n);i!==null&&(e.splice(t,3),t-=3,fu(i,{pending:!0,data:r,method:n.method,action:a},a,r))}}))}function nl(e){function t(b){return zi(b,e)}Fn!==null&&zi(Fn,e),Rn!==null&&zi(Rn,e),Mn!==null&&zi(Mn,e),Pr.forEach(t),el.forEach(t);for(var n=0;n<Un.length;n++){var a=Un[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Un.length&&(n=Un[0],n.blockedOn===null);)u0(n),n.blockedOn===null&&Un.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var r=n[a],i=n[a+1],d=r[nt]||null;if(typeof i=="function")d||c0(n);else if(d){var h=null;if(i&&i.hasAttribute("formAction")){if(r=i,d=i[nt]||null)h=d.formAction;else if(fo(r)!==null)continue}else h=d.action;typeof h=="function"?n[a+1]=h:(n.splice(a,3),a-=3),c0(n)}}}function ho(e){this._internalRoot=e}Di.prototype.render=ho.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,a=gt();a0(n,a,e,t,null,null)},Di.prototype.unmount=ho.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;a0(e.current,2,null,e,null,null),mi(),t[ma]=null}};function Di(e){this._internalRoot=e}Di.prototype.unstable_scheduleHydration=function(e){if(e){var t=Cc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Un.length&&t!==0&&t<Un[n].priority;n++);Un.splice(n,0,e),n===0&&u0(e)}};var f0=u.version;if(f0!=="19.1.0")throw Error(s(527,f0,"19.1.0"));V.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=x(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var z1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fi.isDisabled&&Fi.supportsFiber)try{ir=Fi.inject(z1),ut=Fi}catch{}}return rl.createRoot=function(e,t){if(!f(e))throw Error(s(299));var n=!1,a="",r=wd,i=_d,d=Od,h=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(h=t.unstable_transitionCallbacks)),t=t0(e,1,!1,null,null,n,a,r,i,d,h,null),e[ma]=t.current,Ju(e),new ho(t)},rl.hydrateRoot=function(e,t,n){if(!f(e))throw Error(s(299));var a=!1,r="",i=wd,d=_d,h=Od,b=null,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(h=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks),n.formState!==void 0&&(A=n.formState)),t=t0(e,1,!0,t,n??null,a,r,i,d,h,b,A),t.context=n0(null),n=t.current,a=gt(),a=rs(a),r=bn(a),r.callback=null,yn(n,r,a),n=a,t.current.lanes=n,ur(t,n),Ht(t),e[ma]=t.current,Ju(e),new Di(t)},rl.version="19.1.0",rl}var S0;function q1(){if(S0)return vo.exports;S0=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),vo.exports=B1(),vo.exports}var Y1=q1(),ll={},N0;function k1(){if(N0)return ll;N0=1,Object.defineProperty(ll,"__esModule",{value:!0}),ll.parse=p,ll.serialize=g;const l=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,u=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,f=Object.prototype.toString,m=(()=>{const _=function(){};return _.prototype=Object.create(null),_})();function p(_,B){const R=new m,G=_.length;if(G<2)return R;const q=(B==null?void 0:B.decode)||N;let L=0;do{const Y=_.indexOf("=",L);if(Y===-1)break;const K=_.indexOf(";",L),le=K===-1?G:K;if(Y>le){L=_.lastIndexOf(";",Y-1)+1;continue}const I=v(_,L,Y),De=x(_,Y,I),je=_.slice(I,De);if(R[je]===void 0){let Oe=v(_,Y+1,le),Ce=x(_,le,Oe);const et=q(_.slice(Oe,Ce));R[je]=et}L=le+1}while(L<G);return R}function v(_,B,R){do{const G=_.charCodeAt(B);if(G!==32&&G!==9)return B}while(++B<R);return R}function x(_,B,R){for(;B>R;){const G=_.charCodeAt(--B);if(G!==32&&G!==9)return B+1}return R}function g(_,B,R){const G=(R==null?void 0:R.encode)||encodeURIComponent;if(!l.test(_))throw new TypeError(`argument name is invalid: ${_}`);const q=G(B);if(!u.test(q))throw new TypeError(`argument val is invalid: ${B}`);let L=_+"="+q;if(!R)return L;if(R.maxAge!==void 0){if(!Number.isInteger(R.maxAge))throw new TypeError(`option maxAge is invalid: ${R.maxAge}`);L+="; Max-Age="+R.maxAge}if(R.domain){if(!o.test(R.domain))throw new TypeError(`option domain is invalid: ${R.domain}`);L+="; Domain="+R.domain}if(R.path){if(!s.test(R.path))throw new TypeError(`option path is invalid: ${R.path}`);L+="; Path="+R.path}if(R.expires){if(!F(R.expires)||!Number.isFinite(R.expires.valueOf()))throw new TypeError(`option expires is invalid: ${R.expires}`);L+="; Expires="+R.expires.toUTCString()}if(R.httpOnly&&(L+="; HttpOnly"),R.secure&&(L+="; Secure"),R.partitioned&&(L+="; Partitioned"),R.priority)switch(typeof R.priority=="string"?R.priority.toLowerCase():void 0){case"low":L+="; Priority=Low";break;case"medium":L+="; Priority=Medium";break;case"high":L+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${R.priority}`)}if(R.sameSite)switch(typeof R.sameSite=="string"?R.sameSite.toLowerCase():R.sameSite){case!0:case"strict":L+="; SameSite=Strict";break;case"lax":L+="; SameSite=Lax";break;case"none":L+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${R.sameSite}`)}return L}function N(_){if(_.indexOf("%")===-1)return _;try{return decodeURIComponent(_)}catch{return _}}function F(_){return f.call(_)==="[object Date]"}return ll}k1();var j0="popstate";function G1(l={}){function u(s,f){let{pathname:m,search:p,hash:v}=s.location;return Do("",{pathname:m,search:p,hash:v},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function o(s,f){return typeof f=="string"?f:fl(f)}return V1(u,o,null,l)}function Te(l,u){if(l===!1||l===null||typeof l>"u")throw new Error(u)}function kt(l,u){if(!l){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function X1(){return Math.random().toString(36).substring(2,10)}function E0(l,u){return{usr:l.state,key:l.key,idx:u}}function Do(l,u,o=null,s){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof u=="string"?nr(u):u,state:o,key:u&&u.key||s||X1()}}function fl({pathname:l="/",search:u="",hash:o=""}){return u&&u!=="?"&&(l+=u.charAt(0)==="?"?u:"?"+u),o&&o!=="#"&&(l+=o.charAt(0)==="#"?o:"#"+o),l}function nr(l){let u={};if(l){let o=l.indexOf("#");o>=0&&(u.hash=l.substring(o),l=l.substring(0,o));let s=l.indexOf("?");s>=0&&(u.search=l.substring(s),l=l.substring(0,s)),l&&(u.pathname=l)}return u}function V1(l,u,o,s={}){let{window:f=document.defaultView,v5Compat:m=!1}=s,p=f.history,v="POP",x=null,g=N();g==null&&(g=0,p.replaceState({...p.state,idx:g},""));function N(){return(p.state||{idx:null}).idx}function F(){v="POP";let q=N(),L=q==null?null:q-g;g=q,x&&x({action:v,location:G.location,delta:L})}function _(q,L){v="PUSH";let Y=Do(G.location,q,L);g=N()+1;let K=E0(Y,g),le=G.createHref(Y);try{p.pushState(K,"",le)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;f.location.assign(le)}m&&x&&x({action:v,location:G.location,delta:1})}function B(q,L){v="REPLACE";let Y=Do(G.location,q,L);g=N();let K=E0(Y,g),le=G.createHref(Y);p.replaceState(K,"",le),m&&x&&x({action:v,location:G.location,delta:0})}function R(q){return Q1(q)}let G={get action(){return v},get location(){return l(f,p)},listen(q){if(x)throw new Error("A history only accepts one active listener");return f.addEventListener(j0,F),x=q,()=>{f.removeEventListener(j0,F),x=null}},createHref(q){return u(f,q)},createURL:R,encodeLocation(q){let L=R(q);return{pathname:L.pathname,search:L.search,hash:L.hash}},push:_,replace:B,go(q){return p.go(q)}};return G}function Q1(l,u=!1){let o="http://localhost";typeof window<"u"&&(o=window.location.origin!=="null"?window.location.origin:window.location.href),Te(o,"No window.location.(origin|href) available to create URL");let s=typeof l=="string"?l:fl(l);return s=s.replace(/ $/,"%20"),!u&&s.startsWith("//")&&(s=o+s),new URL(s,o)}function oh(l,u,o="/"){return Z1(l,u,o,!1)}function Z1(l,u,o,s){let f=typeof u=="string"?nr(u):u,m=sn(f.pathname||"/",o);if(m==null)return null;let p=ch(l);K1(p);let v=null;for(let x=0;v==null&&x<p.length;++x){let g=lv(m);v=av(p[x],g,s)}return v}function ch(l,u=[],o=[],s=""){let f=(m,p,v)=>{let x={relativePath:v===void 0?m.path||"":v,caseSensitive:m.caseSensitive===!0,childrenIndex:p,route:m};x.relativePath.startsWith("/")&&(Te(x.relativePath.startsWith(s),`Absolute route path "${x.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(s.length));let g=ln([s,x.relativePath]),N=o.concat(x);m.children&&m.children.length>0&&(Te(m.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),ch(m.children,u,N,g)),!(m.path==null&&!m.index)&&u.push({path:g,score:tv(g,m.index),routesMeta:N})};return l.forEach((m,p)=>{var v;if(m.path===""||!((v=m.path)!=null&&v.includes("?")))f(m,p);else for(let x of fh(m.path))f(m,p,x)}),u}function fh(l){let u=l.split("/");if(u.length===0)return[];let[o,...s]=u,f=o.endsWith("?"),m=o.replace(/\?$/,"");if(s.length===0)return f?[m,""]:[m];let p=fh(s.join("/")),v=[];return v.push(...p.map(x=>x===""?m:[m,x].join("/"))),f&&v.push(...p),v.map(x=>l.startsWith("/")&&x===""?"/":x)}function K1(l){l.sort((u,o)=>u.score!==o.score?o.score-u.score:nv(u.routesMeta.map(s=>s.childrenIndex),o.routesMeta.map(s=>s.childrenIndex)))}var J1=/^:[\w-]+$/,I1=3,$1=2,W1=1,P1=10,ev=-2,A0=l=>l==="*";function tv(l,u){let o=l.split("/"),s=o.length;return o.some(A0)&&(s+=ev),u&&(s+=$1),o.filter(f=>!A0(f)).reduce((f,m)=>f+(J1.test(m)?I1:m===""?W1:P1),s)}function nv(l,u){return l.length===u.length&&l.slice(0,-1).every((s,f)=>s===u[f])?l[l.length-1]-u[u.length-1]:0}function av(l,u,o=!1){let{routesMeta:s}=l,f={},m="/",p=[];for(let v=0;v<s.length;++v){let x=s[v],g=v===s.length-1,N=m==="/"?u:u.slice(m.length)||"/",F=Yi({path:x.relativePath,caseSensitive:x.caseSensitive,end:g},N),_=x.route;if(!F&&g&&o&&!s[s.length-1].route.index&&(F=Yi({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},N)),!F)return null;Object.assign(f,F.params),p.push({params:f,pathname:ln([m,F.pathname]),pathnameBase:ov(ln([m,F.pathnameBase])),route:_}),F.pathnameBase!=="/"&&(m=ln([m,F.pathnameBase]))}return p}function Yi(l,u){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[o,s]=rv(l.path,l.caseSensitive,l.end),f=u.match(o);if(!f)return null;let m=f[0],p=m.replace(/(.)\/+$/,"$1"),v=f.slice(1);return{params:s.reduce((g,{paramName:N,isOptional:F},_)=>{if(N==="*"){let R=v[_]||"";p=m.slice(0,m.length-R.length).replace(/(.)\/+$/,"$1")}const B=v[_];return F&&!B?g[N]=void 0:g[N]=(B||"").replace(/%2F/g,"/"),g},{}),pathname:m,pathnameBase:p,pattern:l}}function rv(l,u=!1,o=!0){kt(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let s=[],f="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,v,x)=>(s.push({paramName:v,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)"));return l.endsWith("*")?(s.push({paramName:"*"}),f+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?f+="\\/*$":l!==""&&l!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,u?void 0:"i"),s]}function lv(l){try{return l.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return kt(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),l}}function sn(l,u){if(u==="/")return l;if(!l.toLowerCase().startsWith(u.toLowerCase()))return null;let o=u.endsWith("/")?u.length-1:u.length,s=l.charAt(o);return s&&s!=="/"?null:l.slice(o)||"/"}function iv(l,u="/"){let{pathname:o,search:s="",hash:f=""}=typeof l=="string"?nr(l):l;return{pathname:o?o.startsWith("/")?o:sv(o,u):u,search:cv(s),hash:fv(f)}}function sv(l,u){let o=u.replace(/\/+$/,"").split("/");return l.split("/").forEach(f=>{f===".."?o.length>1&&o.pop():f!=="."&&o.push(f)}),o.length>1?o.join("/"):"/"}function So(l,u,o,s){return`Cannot include a '${l}' character in a manually specified \`to.${u}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function uv(l){return l.filter((u,o)=>o===0||u.route.path&&u.route.path.length>0)}function dh(l){let u=uv(l);return u.map((o,s)=>s===u.length-1?o.pathname:o.pathnameBase)}function mh(l,u,o,s=!1){let f;typeof l=="string"?f=nr(l):(f={...l},Te(!f.pathname||!f.pathname.includes("?"),So("?","pathname","search",f)),Te(!f.pathname||!f.pathname.includes("#"),So("#","pathname","hash",f)),Te(!f.search||!f.search.includes("#"),So("#","search","hash",f)));let m=l===""||f.pathname==="",p=m?"/":f.pathname,v;if(p==null)v=o;else{let F=u.length-1;if(!s&&p.startsWith("..")){let _=p.split("/");for(;_[0]==="..";)_.shift(),F-=1;f.pathname=_.join("/")}v=F>=0?u[F]:"/"}let x=iv(f,v),g=p&&p!=="/"&&p.endsWith("/"),N=(m||p===".")&&o.endsWith("/");return!x.pathname.endsWith("/")&&(g||N)&&(x.pathname+="/"),x}var ln=l=>l.join("/").replace(/\/\/+/g,"/"),ov=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),cv=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,fv=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function dv(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}var hh=["POST","PUT","PATCH","DELETE"];new Set(hh);var mv=["GET",...hh];new Set(mv);var ar=z.createContext(null);ar.displayName="DataRouter";var Vi=z.createContext(null);Vi.displayName="DataRouterState";var gh=z.createContext({isTransitioning:!1});gh.displayName="ViewTransition";var hv=z.createContext(new Map);hv.displayName="Fetchers";var gv=z.createContext(null);gv.displayName="Await";var Gt=z.createContext(null);Gt.displayName="Navigation";var hl=z.createContext(null);hl.displayName="Location";var cn=z.createContext({outlet:null,matches:[],isDataRoute:!1});cn.displayName="Route";var ec=z.createContext(null);ec.displayName="RouteError";function pv(l,{relative:u}={}){Te(gl(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:s}=z.useContext(Gt),{hash:f,pathname:m,search:p}=pl(l,{relative:u}),v=m;return o!=="/"&&(v=m==="/"?o:ln([o,m])),s.createHref({pathname:v,search:p,hash:f})}function gl(){return z.useContext(hl)!=null}function da(){return Te(gl(),"useLocation() may be used only in the context of a <Router> component."),z.useContext(hl).location}var ph="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function vh(l){z.useContext(Gt).static||z.useLayoutEffect(l)}function vv(){let{isDataRoute:l}=z.useContext(cn);return l?zv():xv()}function xv(){Te(gl(),"useNavigate() may be used only in the context of a <Router> component.");let l=z.useContext(ar),{basename:u,navigator:o}=z.useContext(Gt),{matches:s}=z.useContext(cn),{pathname:f}=da(),m=JSON.stringify(dh(s)),p=z.useRef(!1);return vh(()=>{p.current=!0}),z.useCallback((x,g={})=>{if(kt(p.current,ph),!p.current)return;if(typeof x=="number"){o.go(x);return}let N=mh(x,JSON.parse(m),f,g.relative==="path");l==null&&u!=="/"&&(N.pathname=N.pathname==="/"?u:ln([u,N.pathname])),(g.replace?o.replace:o.push)(N,g.state,g)},[u,o,m,f,l])}z.createContext(null);function pl(l,{relative:u}={}){let{matches:o}=z.useContext(cn),{pathname:s}=da(),f=JSON.stringify(dh(o));return z.useMemo(()=>mh(l,JSON.parse(f),s,u==="path"),[l,f,s,u])}function bv(l,u){return xh(l,u)}function xh(l,u,o,s){var L;Te(gl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=z.useContext(Gt),{matches:m}=z.useContext(cn),p=m[m.length-1],v=p?p.params:{},x=p?p.pathname:"/",g=p?p.pathnameBase:"/",N=p&&p.route;{let Y=N&&N.path||"";bh(x,!N||Y.endsWith("*")||Y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${Y==="/"?"*":`${Y}/*`}">.`)}let F=da(),_;if(u){let Y=typeof u=="string"?nr(u):u;Te(g==="/"||((L=Y.pathname)==null?void 0:L.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${Y.pathname}" was given in the \`location\` prop.`),_=Y}else _=F;let B=_.pathname||"/",R=B;if(g!=="/"){let Y=g.replace(/^\//,"").split("/");R="/"+B.replace(/^\//,"").split("/").slice(Y.length).join("/")}let G=oh(l,{pathname:R});kt(N||G!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),kt(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let q=Ev(G&&G.map(Y=>Object.assign({},Y,{params:Object.assign({},v,Y.params),pathname:ln([g,f.encodeLocation?f.encodeLocation(Y.pathname).pathname:Y.pathname]),pathnameBase:Y.pathnameBase==="/"?g:ln([g,f.encodeLocation?f.encodeLocation(Y.pathnameBase).pathname:Y.pathnameBase])})),m,o,s);return u&&q?z.createElement(hl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",..._},navigationType:"POP"}},q):q}function yv(){let l=Ov(),u=dv(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),o=l instanceof Error?l.stack:null,s="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:s},m={padding:"2px 4px",backgroundColor:s},p=null;return console.error("Error handled by React Router default ErrorBoundary:",l),p=z.createElement(z.Fragment,null,z.createElement("p",null,"💿 Hey developer 👋"),z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",z.createElement("code",{style:m},"ErrorBoundary")," or"," ",z.createElement("code",{style:m},"errorElement")," prop on your route.")),z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},u),o?z.createElement("pre",{style:f},o):null,p)}var Sv=z.createElement(yv,null),Nv=class extends z.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,u){return u.location!==l.location||u.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:u.error,location:u.location,revalidation:l.revalidation||u.revalidation}}componentDidCatch(l,u){console.error("React Router caught the following error during render",l,u)}render(){return this.state.error!==void 0?z.createElement(cn.Provider,{value:this.props.routeContext},z.createElement(ec.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function jv({routeContext:l,match:u,children:o}){let s=z.useContext(ar);return s&&s.static&&s.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=u.route.id),z.createElement(cn.Provider,{value:l},o)}function Ev(l,u=[],o=null,s=null){if(l==null){if(!o)return null;if(o.errors)l=o.matches;else if(u.length===0&&!o.initialized&&o.matches.length>0)l=o.matches;else return null}let f=l,m=o==null?void 0:o.errors;if(m!=null){let x=f.findIndex(g=>g.route.id&&(m==null?void 0:m[g.route.id])!==void 0);Te(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),f=f.slice(0,Math.min(f.length,x+1))}let p=!1,v=-1;if(o)for(let x=0;x<f.length;x++){let g=f[x];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(v=x),g.route.id){let{loaderData:N,errors:F}=o,_=g.route.loader&&!N.hasOwnProperty(g.route.id)&&(!F||F[g.route.id]===void 0);if(g.route.lazy||_){p=!0,v>=0?f=f.slice(0,v+1):f=[f[0]];break}}}return f.reduceRight((x,g,N)=>{let F,_=!1,B=null,R=null;o&&(F=m&&g.route.id?m[g.route.id]:void 0,B=g.route.errorElement||Sv,p&&(v<0&&N===0?(bh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,R=null):v===N&&(_=!0,R=g.route.hydrateFallbackElement||null)));let G=u.concat(f.slice(0,N+1)),q=()=>{let L;return F?L=B:_?L=R:g.route.Component?L=z.createElement(g.route.Component,null):g.route.element?L=g.route.element:L=x,z.createElement(jv,{match:g,routeContext:{outlet:x,matches:G,isDataRoute:o!=null},children:L})};return o&&(g.route.ErrorBoundary||g.route.errorElement||N===0)?z.createElement(Nv,{location:o.location,revalidation:o.revalidation,component:B,error:F,children:q(),routeContext:{outlet:null,matches:G,isDataRoute:!0}}):q()},null)}function tc(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Av(l){let u=z.useContext(ar);return Te(u,tc(l)),u}function Cv(l){let u=z.useContext(Vi);return Te(u,tc(l)),u}function wv(l){let u=z.useContext(cn);return Te(u,tc(l)),u}function nc(l){let u=wv(l),o=u.matches[u.matches.length-1];return Te(o.route.id,`${l} can only be used on routes that contain a unique "id"`),o.route.id}function _v(){return nc("useRouteId")}function Ov(){var s;let l=z.useContext(ec),u=Cv("useRouteError"),o=nc("useRouteError");return l!==void 0?l:(s=u.errors)==null?void 0:s[o]}function zv(){let{router:l}=Av("useNavigate"),u=nc("useNavigate"),o=z.useRef(!1);return vh(()=>{o.current=!0}),z.useCallback(async(f,m={})=>{kt(o.current,ph),o.current&&(typeof f=="number"?l.navigate(f):await l.navigate(f,{fromRouteId:u,...m}))},[l,u])}var C0={};function bh(l,u,o){!u&&!C0[l]&&(C0[l]=!0,kt(!1,o))}z.memo(Tv);function Tv({routes:l,future:u,state:o}){return xh(l,void 0,o,u)}function sl(l){Te(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Dv({basename:l="/",children:u=null,location:o,navigationType:s="POP",navigator:f,static:m=!1}){Te(!gl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=l.replace(/^\/*/,"/"),v=z.useMemo(()=>({basename:p,navigator:f,static:m,future:{}}),[p,f,m]);typeof o=="string"&&(o=nr(o));let{pathname:x="/",search:g="",hash:N="",state:F=null,key:_="default"}=o,B=z.useMemo(()=>{let R=sn(x,p);return R==null?null:{location:{pathname:R,search:g,hash:N,state:F,key:_},navigationType:s}},[p,x,g,N,F,_,s]);return kt(B!=null,`<Router basename="${p}"> is not able to match the URL "${x}${g}${N}" because it does not start with the basename, so the <Router> won't render anything.`),B==null?null:z.createElement(Gt.Provider,{value:v},z.createElement(hl.Provider,{children:u,value:B}))}function Fv({children:l,location:u}){return bv(Fo(l),u)}function Fo(l,u=[]){let o=[];return z.Children.forEach(l,(s,f)=>{if(!z.isValidElement(s))return;let m=[...u,f];if(s.type===z.Fragment){o.push.apply(o,Fo(s.props.children,m));return}Te(s.type===sl,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Te(!s.props.index||!s.props.children,"An index route cannot have child routes.");let p={id:s.props.id||m.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(p.children=Fo(s.props.children,m)),o.push(p)}),o}var Li="get",Hi="application/x-www-form-urlencoded";function Qi(l){return l!=null&&typeof l.tagName=="string"}function Rv(l){return Qi(l)&&l.tagName.toLowerCase()==="button"}function Mv(l){return Qi(l)&&l.tagName.toLowerCase()==="form"}function Uv(l){return Qi(l)&&l.tagName.toLowerCase()==="input"}function Lv(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function Hv(l,u){return l.button===0&&(!u||u==="_self")&&!Lv(l)}var Ri=null;function Bv(){if(Ri===null)try{new FormData(document.createElement("form"),0),Ri=!1}catch{Ri=!0}return Ri}var qv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function No(l){return l!=null&&!qv.has(l)?(kt(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Hi}"`),null):l}function Yv(l,u){let o,s,f,m,p;if(Mv(l)){let v=l.getAttribute("action");s=v?sn(v,u):null,o=l.getAttribute("method")||Li,f=No(l.getAttribute("enctype"))||Hi,m=new FormData(l)}else if(Rv(l)||Uv(l)&&(l.type==="submit"||l.type==="image")){let v=l.form;if(v==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=l.getAttribute("formaction")||v.getAttribute("action");if(s=x?sn(x,u):null,o=l.getAttribute("formmethod")||v.getAttribute("method")||Li,f=No(l.getAttribute("formenctype"))||No(v.getAttribute("enctype"))||Hi,m=new FormData(v,l),!Bv()){let{name:g,type:N,value:F}=l;if(N==="image"){let _=g?`${g}.`:"";m.append(`${_}x`,"0"),m.append(`${_}y`,"0")}else g&&m.append(g,F)}}else{if(Qi(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Li,s=null,f=Hi,p=l}return m&&f==="text/plain"&&(p=m,m=void 0),{action:s,method:o.toLowerCase(),encType:f,formData:m,body:p}}function ac(l,u){if(l===!1||l===null||typeof l>"u")throw new Error(u)}async function kv(l,u){if(l.id in u)return u[l.id];try{let o=await import(l.module);return u[l.id]=o,o}catch(o){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Gv(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function Xv(l,u,o){let s=await Promise.all(l.map(async f=>{let m=u.routes[f.route.id];if(m){let p=await kv(m,o);return p.links?p.links():[]}return[]}));return Kv(s.flat(1).filter(Gv).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function w0(l,u,o,s,f,m){let p=(x,g)=>o[g]?x.route.id!==o[g].route.id:!0,v=(x,g)=>{var N;return o[g].pathname!==x.pathname||((N=o[g].route.path)==null?void 0:N.endsWith("*"))&&o[g].params["*"]!==x.params["*"]};return m==="assets"?u.filter((x,g)=>p(x,g)||v(x,g)):m==="data"?u.filter((x,g)=>{var F;let N=s.routes[x.route.id];if(!N||!N.hasLoader)return!1;if(p(x,g)||v(x,g))return!0;if(x.route.shouldRevalidate){let _=x.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((F=o[0])==null?void 0:F.params)||{},nextUrl:new URL(l,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function Vv(l,u,{includeHydrateFallback:o}={}){return Qv(l.map(s=>{let f=u.routes[s.route.id];if(!f)return[];let m=[f.module];return f.clientActionModule&&(m=m.concat(f.clientActionModule)),f.clientLoaderModule&&(m=m.concat(f.clientLoaderModule)),o&&f.hydrateFallbackModule&&(m=m.concat(f.hydrateFallbackModule)),f.imports&&(m=m.concat(f.imports)),m}).flat(1))}function Qv(l){return[...new Set(l)]}function Zv(l){let u={},o=Object.keys(l).sort();for(let s of o)u[s]=l[s];return u}function Kv(l,u){let o=new Set;return new Set(u),l.reduce((s,f)=>{let m=JSON.stringify(Zv(f));return o.has(m)||(o.add(m),s.push({key:m,link:f})),s},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Jv=new Set([100,101,204,205]);function Iv(l,u){let o=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return o.pathname==="/"?o.pathname="_root.data":u&&sn(o.pathname,u)==="/"?o.pathname=`${u.replace(/\/$/,"")}/_root.data`:o.pathname=`${o.pathname.replace(/\/$/,"")}.data`,o}function yh(){let l=z.useContext(ar);return ac(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function $v(){let l=z.useContext(Vi);return ac(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var rc=z.createContext(void 0);rc.displayName="FrameworkContext";function Sh(){let l=z.useContext(rc);return ac(l,"You must render this element inside a <HydratedRouter> element"),l}function Wv(l,u){let o=z.useContext(rc),[s,f]=z.useState(!1),[m,p]=z.useState(!1),{onFocus:v,onBlur:x,onMouseEnter:g,onMouseLeave:N,onTouchStart:F}=u,_=z.useRef(null);z.useEffect(()=>{if(l==="render"&&p(!0),l==="viewport"){let G=L=>{L.forEach(Y=>{p(Y.isIntersecting)})},q=new IntersectionObserver(G,{threshold:.5});return _.current&&q.observe(_.current),()=>{q.disconnect()}}},[l]),z.useEffect(()=>{if(s){let G=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(G)}}},[s]);let B=()=>{f(!0)},R=()=>{f(!1),p(!1)};return o?l!=="intent"?[m,_,{}]:[m,_,{onFocus:il(v,B),onBlur:il(x,R),onMouseEnter:il(g,B),onMouseLeave:il(N,R),onTouchStart:il(F,B)}]:[!1,_,{}]}function il(l,u){return o=>{l&&l(o),o.defaultPrevented||u(o)}}function Pv({page:l,...u}){let{router:o}=yh(),s=z.useMemo(()=>oh(o.routes,l,o.basename),[o.routes,l,o.basename]);return s?z.createElement(tx,{page:l,matches:s,...u}):null}function ex(l){let{manifest:u,routeModules:o}=Sh(),[s,f]=z.useState([]);return z.useEffect(()=>{let m=!1;return Xv(l,u,o).then(p=>{m||f(p)}),()=>{m=!0}},[l,u,o]),s}function tx({page:l,matches:u,...o}){let s=da(),{manifest:f,routeModules:m}=Sh(),{basename:p}=yh(),{loaderData:v,matches:x}=$v(),g=z.useMemo(()=>w0(l,u,x,f,s,"data"),[l,u,x,f,s]),N=z.useMemo(()=>w0(l,u,x,f,s,"assets"),[l,u,x,f,s]),F=z.useMemo(()=>{if(l===s.pathname+s.search+s.hash)return[];let R=new Set,G=!1;if(u.forEach(L=>{var K;let Y=f.routes[L.route.id];!Y||!Y.hasLoader||(!g.some(le=>le.route.id===L.route.id)&&L.route.id in v&&((K=m[L.route.id])!=null&&K.shouldRevalidate)||Y.hasClientLoader?G=!0:R.add(L.route.id))}),R.size===0)return[];let q=Iv(l,p);return G&&R.size>0&&q.searchParams.set("_routes",u.filter(L=>R.has(L.route.id)).map(L=>L.route.id).join(",")),[q.pathname+q.search]},[p,v,s,f,g,u,l,m]),_=z.useMemo(()=>Vv(N,f),[N,f]),B=ex(N);return z.createElement(z.Fragment,null,F.map(R=>z.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...o})),_.map(R=>z.createElement("link",{key:R,rel:"modulepreload",href:R,...o})),B.map(({key:R,link:G})=>z.createElement("link",{key:R,...G})))}function nx(...l){return u=>{l.forEach(o=>{typeof o=="function"?o(u):o!=null&&(o.current=u)})}}var Nh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Nh&&(window.__reactRouterVersion="7.6.2")}catch{}function ax({basename:l,children:u,window:o}){let s=z.useRef();s.current==null&&(s.current=G1({window:o,v5Compat:!0}));let f=s.current,[m,p]=z.useState({action:f.action,location:f.location}),v=z.useCallback(x=>{z.startTransition(()=>p(x))},[p]);return z.useLayoutEffect(()=>f.listen(v),[f,v]),z.createElement(Dv,{basename:l,children:u,location:m.location,navigationType:m.action,navigator:f})}var jh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kn=z.forwardRef(function({onClick:u,discover:o="render",prefetch:s="none",relative:f,reloadDocument:m,replace:p,state:v,target:x,to:g,preventScrollReset:N,viewTransition:F,..._},B){let{basename:R}=z.useContext(Gt),G=typeof g=="string"&&jh.test(g),q,L=!1;if(typeof g=="string"&&G&&(q=g,Nh))try{let Ce=new URL(window.location.href),et=g.startsWith("//")?new URL(Ce.protocol+g):new URL(g),xt=sn(et.pathname,R);et.origin===Ce.origin&&xt!=null?g=xt+et.search+et.hash:L=!0}catch{kt(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Y=pv(g,{relative:f}),[K,le,I]=Wv(s,_),De=sx(g,{replace:p,state:v,target:x,preventScrollReset:N,relative:f,viewTransition:F});function je(Ce){u&&u(Ce),Ce.defaultPrevented||De(Ce)}let Oe=z.createElement("a",{..._,...I,href:q||Y,onClick:L||m?u:je,ref:nx(B,le),target:x,"data-discover":!G&&o==="render"?"true":void 0});return K&&!G?z.createElement(z.Fragment,null,Oe,z.createElement(Pv,{page:Y})):Oe});kn.displayName="Link";var rx=z.forwardRef(function({"aria-current":u="page",caseSensitive:o=!1,className:s="",end:f=!1,style:m,to:p,viewTransition:v,children:x,...g},N){let F=pl(p,{relative:g.relative}),_=da(),B=z.useContext(Vi),{navigator:R,basename:G}=z.useContext(Gt),q=B!=null&&dx(F)&&v===!0,L=R.encodeLocation?R.encodeLocation(F).pathname:F.pathname,Y=_.pathname,K=B&&B.navigation&&B.navigation.location?B.navigation.location.pathname:null;o||(Y=Y.toLowerCase(),K=K?K.toLowerCase():null,L=L.toLowerCase()),K&&G&&(K=sn(K,G)||K);const le=L!=="/"&&L.endsWith("/")?L.length-1:L.length;let I=Y===L||!f&&Y.startsWith(L)&&Y.charAt(le)==="/",De=K!=null&&(K===L||!f&&K.startsWith(L)&&K.charAt(L.length)==="/"),je={isActive:I,isPending:De,isTransitioning:q},Oe=I?u:void 0,Ce;typeof s=="function"?Ce=s(je):Ce=[s,I?"active":null,De?"pending":null,q?"transitioning":null].filter(Boolean).join(" ");let et=typeof m=="function"?m(je):m;return z.createElement(kn,{...g,"aria-current":Oe,className:Ce,ref:N,style:et,to:p,viewTransition:v},typeof x=="function"?x(je):x)});rx.displayName="NavLink";var lx=z.forwardRef(({discover:l="render",fetcherKey:u,navigate:o,reloadDocument:s,replace:f,state:m,method:p=Li,action:v,onSubmit:x,relative:g,preventScrollReset:N,viewTransition:F,..._},B)=>{let R=cx(),G=fx(v,{relative:g}),q=p.toLowerCase()==="get"?"get":"post",L=typeof v=="string"&&jh.test(v),Y=K=>{if(x&&x(K),K.defaultPrevented)return;K.preventDefault();let le=K.nativeEvent.submitter,I=(le==null?void 0:le.getAttribute("formmethod"))||p;R(le||K.currentTarget,{fetcherKey:u,method:I,navigate:o,replace:f,state:m,relative:g,preventScrollReset:N,viewTransition:F})};return z.createElement("form",{ref:B,method:q,action:G,onSubmit:s?x:Y,..._,"data-discover":!L&&l==="render"?"true":void 0})});lx.displayName="Form";function ix(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Eh(l){let u=z.useContext(ar);return Te(u,ix(l)),u}function sx(l,{target:u,replace:o,state:s,preventScrollReset:f,relative:m,viewTransition:p}={}){let v=vv(),x=da(),g=pl(l,{relative:m});return z.useCallback(N=>{if(Hv(N,u)){N.preventDefault();let F=o!==void 0?o:fl(x)===fl(g);v(l,{replace:F,state:s,preventScrollReset:f,relative:m,viewTransition:p})}},[x,v,g,o,s,u,l,f,m,p])}var ux=0,ox=()=>`__${String(++ux)}__`;function cx(){let{router:l}=Eh("useSubmit"),{basename:u}=z.useContext(Gt),o=_v();return z.useCallback(async(s,f={})=>{let{action:m,method:p,encType:v,formData:x,body:g}=Yv(s,u);if(f.navigate===!1){let N=f.fetcherKey||ox();await l.fetch(N,o,f.action||m,{preventScrollReset:f.preventScrollReset,formData:x,body:g,formMethod:f.method||p,formEncType:f.encType||v,flushSync:f.flushSync})}else await l.navigate(f.action||m,{preventScrollReset:f.preventScrollReset,formData:x,body:g,formMethod:f.method||p,formEncType:f.encType||v,replace:f.replace,state:f.state,fromRouteId:o,flushSync:f.flushSync,viewTransition:f.viewTransition})},[l,u,o])}function fx(l,{relative:u}={}){let{basename:o}=z.useContext(Gt),s=z.useContext(cn);Te(s,"useFormAction must be used inside a RouteContext");let[f]=s.matches.slice(-1),m={...pl(l||".",{relative:u})},p=da();if(l==null){m.search=p.search;let v=new URLSearchParams(m.search),x=v.getAll("index");if(x.some(N=>N==="")){v.delete("index"),x.filter(F=>F).forEach(F=>v.append("index",F));let N=v.toString();m.search=N?`?${N}`:""}}return(!l||l===".")&&f.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(m.pathname=m.pathname==="/"?o:ln([o,m.pathname])),fl(m)}function dx(l,u={}){let o=z.useContext(gh);Te(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Eh("useViewTransitionState"),f=pl(l,{relative:u.relative});if(!o.isTransitioning)return!1;let m=sn(o.currentLocation.pathname,s)||o.currentLocation.pathname,p=sn(o.nextLocation.pathname,s)||o.nextLocation.pathname;return Yi(f.pathname,p)!=null||Yi(f.pathname,m)!=null}[...Jv];const mx="/resident-evil-4/assets/resident-evil-artwork-1-7at0B4Xi.jpg",hx="/resident-evil-4/assets/resident-evil-artwork-2-BvQLKmbl.jpeg",gx="/resident-evil-4/assets/resident-evil-artwork-3-BHd0X7Hh.jpeg",px="/resident-evil-4/assets/logo-re4-Da-2Apyo.png",vx="/resident-evil-4/assets/logo-resident-evil-4-CPcOqNAd.png",xx="/resident-evil-4/assets/logo-ps4-D3_8mtA_.svg",bx="/resident-evil-4/assets/logo-ps5-_nUEnF3_.svg",yx="/resident-evil-4/assets/logo-xbox-series-s-DBRSKQyO.svg",Sx="data:image/svg+xml,%3csvg%20width='28'%20height='20'%20viewBox='0%200%2028%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_5797_73870)'%3e%3cpath%20d='M6.16105%209.61436C6.54499%209.61544%206.92852%209.59037%207.30878%209.53934C7.64794%209.49845%207.97693%209.40015%208.28055%209.24898C8.55722%209.10776%208.78922%208.89731%208.95213%208.63981C9.12137%208.37769%209.20599%208.0343%209.20599%207.60964C9.20599%207.18499%209.12137%206.84139%208.95213%206.57883C8.78882%206.32181%208.5569%206.11166%208.28055%205.9703C7.97681%205.81941%207.64788%205.72113%207.30878%205.67994C6.92849%205.62924%206.54498%205.60417%206.16105%205.60493H3.46668V9.61436H6.16105ZM7.11067%203.31891C8.09565%203.31891%208.93467%203.4407%209.62774%203.68428C10.3208%203.92787%2010.884%204.24948%2011.3174%204.64913C11.7377%205.0297%2012.0625%205.49744%2012.267%206.01687C12.6646%207.04087%2012.6646%208.16871%2012.267%209.19272C12.0645%209.71598%2011.7396%2010.1873%2011.3174%2010.5702C10.8827%2010.9698%2010.3195%2011.2914%209.62774%2011.535C8.93601%2011.7786%208.09699%2011.9004%207.11067%2011.9004H3.46668V16.6968H0V3.31891H7.11067Z'%20fill='white'/%3e%3cpath%20d='M24.0838%206.88798C23.8713%206.60116%2023.61%206.35103%2023.3108%206.14818C22.9904%205.93064%2022.6364%205.76304%2022.2618%205.65153C21.8657%205.53157%2021.4528%205.47094%2021.0375%205.47175C20.2567%205.47175%2019.5941%205.59979%2019.0497%205.85588C18.5293%206.09298%2018.075%206.44613%2017.7247%206.88604C17.3821%207.32591%2017.1312%207.82551%2016.9859%208.35724C16.8299%208.91341%2016.7513%209.48708%2016.7522%2010.0632C16.7513%2010.6173%2016.8295%2011.1689%2016.9846%2011.7025C17.1327%2012.2216%2017.3835%2012.7082%2017.7233%2013.1356C18.0758%2013.5712%2018.5297%2013.9209%2019.0483%2014.1567C19.5932%2014.4128%2020.2558%2014.5408%2021.0362%2014.5408C22.0951%2014.5408%2022.9233%2014.266%2023.521%2013.7163C24.1187%2013.1666%2024.4832%2012.4421%2024.6144%2011.5428H27.9723C27.8972%2012.3356%2027.6632%2013.1069%2027.2832%2013.8139C26.9241%2014.4778%2026.4283%2015.0642%2025.8259%2015.5374C25.1968%2016.0253%2024.4774%2016.3942%2023.7057%2016.6244C22.8409%2016.8825%2021.9395%2017.009%2021.0342%2016.9995C19.8254%2016.9995%2018.7394%2016.8214%2017.7764%2016.4653C16.8133%2016.1092%2016%2015.6188%2015.3365%2014.9941C14.6748%2014.3717%2014.1557%2013.6227%2013.8127%2012.7954C13.4549%2011.9262%2013.2758%2010.9982%2013.2855%2010.0632C13.2766%209.11224%2013.4565%208.16841%2013.8154%207.28246C14.1576%206.443%2014.6764%205.68076%2015.3392%205.04365C16.0041%204.40645%2016.8174%203.90635%2017.7791%203.54335C18.7408%203.18034%2019.8269%202.99927%2021.0375%203.00013C21.8696%202.99565%2022.6983%203.10296%2023.4996%203.31895C24.2395%203.51676%2024.9407%203.83003%2025.5754%204.24629C26.1797%204.64623%2026.6941%205.15935%2027.0878%205.755C27.4944%206.37954%2027.7509%207.08369%2027.8386%207.81597H24.4807C24.4231%207.4816%2024.2871%207.16425%2024.0832%206.88798H24.0838Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_5797_73870'%3e%3crect%20width='27.97'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Nx="/resident-evil-4/assets/village-image-1-CkFk8AaG.png",jx="/resident-evil-4/assets/village-image-2-BKVKHvX1.png",Ex="/resident-evil-4/assets/village-image-3-Zwd9MiU9.png",Ax="/resident-evil-4/assets/village-image-4-3xYhAP2h.png",Cx="/resident-evil-4/assets/village-image-5-8wO1DiUu.png",wx="/resident-evil-4/assets/village-image-6-LRvyHGPp.png",_x="/resident-evil-4/assets/village-image-7-CAC5-UFd.png",Ox="/resident-evil-4/assets/village-image-8-B658UQbN.png",zx="/resident-evil-4/assets/castle-image-1-uaybaKPU.jpg",Tx="/resident-evil-4/assets/castle-image-2-DxO1F5qu.jpg",Dx="/resident-evil-4/assets/castle-image-3-DPQ6IBEL.png",Fx="/resident-evil-4/assets/castle-image-4-DsmafK88.png",Rx="/resident-evil-4/assets/castle-image-5-WC36frMa.png",Mx="/resident-evil-4/assets/castle-image-6-D1iuk41O.png",Ux="/resident-evil-4/assets/island-image-1-BVTWLBkL.jpg",Lx="/resident-evil-4/assets/island-image-2-RSpAXgPR.png",Hx="/resident-evil-4/assets/island-image-3-DDow4hT8.webp",Bx="/resident-evil-4/assets/island-image-4-B66OMocj.png",qx="/resident-evil-4/assets/island-image-5-ByjsbUo-.webp",Yx="/resident-evil-4/assets/island-image-6-D90MuBYS.webp",kx="/resident-evil-4/assets/leon-image-1-KnIjPXKL.jpg",Gx="/resident-evil-4/assets/leon-image-2-RNSWRXXK.png",Xx="/resident-evil-4/assets/leon-image-3-4YamGR9x.png",Vx="/resident-evil-4/assets/leon-image-4-CVpQ0JW6.png",Qx="/resident-evil-4/assets/leon-image-5-CKGYfNsq.png",Zx="/resident-evil-4/assets/leon-image-6-DY_um7Y_.jpg",Kx="/resident-evil-4/assets/leon-image-7-DpdJBYzW.jpg",Jx="/resident-evil-4/assets/luis-serra-image-1-DOiv-UFK.png",Ix="/resident-evil-4/assets/luis-serra-image-2-BJIVzHSz.jpg",$x="/resident-evil-4/assets/luis-serra-image-3-4D96OmNW.jpg",Wx="/resident-evil-4/assets/luis-serra-image-4-Be9lKC8E.png",Px="/resident-evil-4/assets/luis-serra-image-5-COL42Or0.png",e2="/resident-evil-4/assets/luis-serra-image-6-iB2Ck_1k.png",t2="/resident-evil-4/assets/luis-serra-image-7-DS6JkXb6.png",n2="/resident-evil-4/assets/ada-wong-image-1-DasbY2X2.jpg",a2="/resident-evil-4/assets/ada-wong-image-2-8G0hQ5dT.png",r2="/resident-evil-4/assets/ada-wong-image-3-x7vpxKgR.jpeg",l2="/resident-evil-4/assets/ada-wong-image-4-CeDemxlg.png",i2="/resident-evil-4/assets/ada-wong-image-5-ufSROVwe.png",s2="/resident-evil-4/assets/ashley-image-1-B66svUNt.png",u2="/resident-evil-4/assets/ashley-image-2-BiCqECMF.png",o2="/resident-evil-4/assets/ashley-image-3-BYIrNnbs.png",c2="/resident-evil-4/assets/ashley-image-4-BYSldtSj.png",f2="/resident-evil-4/assets/ashley-image-5-BempAPKm.png",d2="/resident-evil-4/assets/merchant-image-1-bM-NVtdD.png",m2="/resident-evil-4/assets/merchant-image-2-CZFfupZ6.png",h2="/resident-evil-4/assets/merchant-image-3-BLVJmMjm.webp",g2="/resident-evil-4/assets/merchant-image-4-CbEEEudk.webp",p2="/resident-evil-4/assets/merchant-image-5-zZICNSt3.png",v2="/resident-evil-4/assets/bitorez-image-1-CAyo1c9E.jpg",x2="/resident-evil-4/assets/bitorez-image-2-HJ9rh0ba.png",b2="/resident-evil-4/assets/bitorez-image-3-_LXQxV9Y.png",y2="/resident-evil-4/assets/bitorez-image-4-D2kGYKlF.png",S2="/resident-evil-4/assets/bitorez-image-5-CEt9Tvwd.png",N2="/resident-evil-4/assets/salazar-image-1-DA7Ge4Vp.png",j2="/resident-evil-4/assets/salazar-image-2-Cr9MTPqx.png",E2="/resident-evil-4/assets/salazar-image-3-DWPnvgg3.png",A2="/resident-evil-4/assets/salazar-image-4-Blh_Civu.png",C2="/resident-evil-4/assets/salazar-image-5-CBBF4Inb.png",w2="/resident-evil-4/assets/krauser-image-1-DlZsSm-t.webp",_2="/resident-evil-4/assets/krauser-image-2-BxNRHf9X.webp",O2="/resident-evil-4/assets/krauser-image-3-B86h7Tje.jpg",z2="/resident-evil-4/assets/krauser-image-4-CyKRY_CT.png",T2="/resident-evil-4/assets/krauser-image-5-DgcBORV4.webp",D2="/resident-evil-4/assets/saddler-image-1-B542LJCr.png",F2="/resident-evil-4/assets/saddler-image-2-BbD_VaWH.png",R2="/resident-evil-4/assets/saddler-image-3-DtYIUemB.png",M2="/resident-evil-4/assets/saddler-image-4-i5H5GlVN.jpg",U2="/resident-evil-4/assets/saddler-image-5-DdU3Ag4J.png",Ah={logo:px},lc={artWork:mx,logoArtWork:vx,artWork2:hx,artWork3:gx},L2={LogoPs4:xx,LogoPs5:bx,LogoXbox:yx,LogoPc:Sx},rr=[{name:"Vila El Pueblo",phrase1:"El Pueblo é uma vila isolada e tomada pelo terror.",phrase2:"Aqui, cada olhar esconde um perigo… e cada sombra, um segredo mortal.",description:"Uma vila isolada, marcada pela decadência e pelo silêncio opressor. Suas ruas de terra batida e construções deterioradas escondem algo muito mais sombrio do que simples moradores. O que antes parecia uma comunidade rural esquecida, agora é o lar de um culto obscuro e de habitantes tomados por uma presença parasitária e violenta.",villageImages:[Nx,jx,Ex,Ax,Cx,wx,_x,Ox]},{name:"Castelo",phrase1:"Entre essas paredes, até a própria escuridão sussurra seu nome.",phrase2:"Aqui, cada pedra carrega o eco de gritos que o tempo não conseguiu silenciar.",description:"Um lugar frio, sombrio e sufocante, onde paredes de pedra observam cada passo. Um labirinto de salões grandiosos e corredores estreitos, repleto de armadilhas, mistérios e ecos de um passado macabro.",castleImages:[zx,Tx,Dx,Fx,Rx,Mx]},{name:"Ilha de La Puerta",phrase1:"Aqui, a escuridão não é apenas ausência de luz... é a presença constante do medo, do metal e da morte.",phrase2:"Na isolada Ilha de la Puerta, o perigo espreita em cada sombra e a sobrevivência depende da coragem e da astúcia.",description:"Ilha de la Puerta — Uma terra isolada e esquecida, onde a natureza selvagem se mistura a estruturas industriais abandonadas. Laboratórios secretos e fábricas desativadas, com horrores mutantes e mistérios obscuros à espreita em cada canto.",islandImages:[Ux,Lx,Hx,Bx,qx,Yx]}],fn=[{name:"Leon S. Kennedy",phrase:"Não luto por glória... luto porque alguém tem que fazer o que é certo.",description:"Leon é um agente de elite do governo dos EUA, conhecido por suas habilidades de combate e determinação. Após sobreviver a Raccoon City como policial novato, foi recrutado para missões especiais contra ameaças bioterroristas.",images:[kx,Gx,Xx,Vx,Qx,Zx,Kx],phrase2:"Missão impossível? Só mais um dia de trabalho.",description2:"Mesmo sob pressão e cercado de horrores, Leon mantém a calma, a inteligência tática e a precisão letal, sendo símbolo de coragem e resiliência."},{name:"Luis Serra",phrase:"Brinquei demais com o perigo... agora é minha vez de acertar as contas.",description:"Luis Serra Navarro é um ex-pesquisador ligado à criação das Las Plagas. Carismático, sarcástico e inteligente, ele esconde um passado cheio de arrependimentos e busca redenção ao ajudar Leon.",images:[Jx,Ix,$x,Wx,Px,e2,t2],description2:"Luis é sarcástico, inteligente e carismático. Gosta de soltar piadas, mesmo em situações de perigo, e mantém um ar descontraído, o que muitas vezes esconde seu passado e seus verdadeiros sentimentos.",description3:"Mesmo parecendo agir por interesse, Luis demonstra coragem e ajuda Leon a enfrentar as ameaças que ele próprio ajudou a criar.",phrase2:"No meio do caos, um charme irresistível... e umas balas bem precisas."},{name:"Ada Wong",phrase:"Confiança é um luxo que eu não posso me permitir.",description:"Misteriosa, elegante e letal, Ada Wong é uma espiã que usa charme e habilidade para cumprir seus próprios objetivos, sempre cercada de segredos.",images:[n2,a2,r2,l2,i2],phrase2:"Fria, calculista e imprevisível, Ada nunca revela totalmente suas intenções — e confiar nela é um jogo perigoso.",description2:"Ela nunca revela tudo. Ada vive no limite entre confiança e traição, onde cada movimento é calculado."},{name:"Ashley Graham",phrase:"Eu posso ser filha do presidente, mas sei muito bem como me virar.",description:"Ashley Graham é uma jovem determinada, inteligente e corajosa. Filha do presidente dos Estados Unidos, ela se vê em uma situação extrema após ser sequestrada por um culto misterioso. Apesar de não ter treinamento em combate, Ashley demonstra resiliência, empatia e uma surpreendente capacidade de adaptação.",images:[s2,u2,o2,c2,f2],phrase2:"Eu não sou só um peso… posso ser sua melhor aliada pra sair daqui.",description2:"Ao longo de sua jornada, ela revela ser uma pessoa gentil, otimista e disposta a enfrentar seus medos. Sua coragem vai além da aparência frágil, mostrando que, mesmo em meio ao caos, ela sabe como se manter forte."},{name:"Mercador",phrase:"Nem tudo que ofereço é o que você quer… mas, sem dúvida, é o que vai precisar.",description:"Uma sombra ambulante, de voz rouca e intenções veladas. Sempre à espreita, surge onde menos se espera, oferecendo muito mais do que simples mercadorias — oferece chances de sobreviver… por um preço.",phrase2:"Nem todos que carregam armas estão prontos para o que vem… mas eu preparo você para o inevitável.",description2:"O mercador sabe que, no fim, tudo se resume ao preço que você está disposto a pagar.",images:[d2,m2,h2,g2,p2]},{name:"Bitores Méndez",phrase:"Você não deveria ter vindo aqui.",description:"Imponente e brutal, Méndez é o terror encarnado do vilarejo. Sob o sobretudo preto, esconde-se algo ainda mais monstruoso. Quem invade seu território… não sai vivo.",phrase2:"Seus passos já selaram seu destino.",description2:"Méndez não hesita em eliminar qualquer um que invada seu território, sendo a personificação da ameaça rural e do horror que assola o vilarejo.",images:[v2,x2,b2,y2,S2]},{name:"Ramon Salazar",phrase:"Este castelo é meu reino e você é apenas um intruso condenado.",description:"Ramon Salazar é o aristocrático senhor do castelo, frágil na aparência, mas poderoso e cruel. Com olhos penetrantes e postura altiva, ele reina sobre a decadência gótica, protegendo seu domínio com mente calculista e frieza predadora.",phrase2:"O poder está nas sombras… e eu sou a escuridão que reina aqui.",description2:" Por trás de sua voz melodiosa e zombeteira, habita uma mente sádica e manipuladora, capaz de comandar exércitos de horrores parasitários com precisão cruel.",images:[N2,j2,E2,A2,C2]},{name:"Jack Krauser",phrase:"No campo de batalha, não há lugar para fraquezas só para sobreviventes.",description:"Jack Krauser é um ex-soldado de elite, frio, calculista e implacável. Forjado no campo de batalha, domina técnicas de combate corpo a corpo, furtividade e armas brancas.",phrase2:"Caço, ataco e desapareço a morte vem silenciosa.",description2:"Sua mente é movida pela força e pela sobrevivência, sem espaço para fraqueza ou piedade. Letal, metódico e sempre um passo à frente, Krauser é o predador perfeito.",images:[w2,_2,O2,z2,T2]},{name:"Osmund Saddler",phrase:"A sua carne... sua mente... tudo agora pertence ao meu rebanho.",description:"Líder do culto Los Iluminados, Saddler é um fanático obcecado pelo controle absoluto. Por trás de sua aparência serena e de discursos sobre fé e iluminação, esconde-se um mestre da manipulação, que usa o parasita Las Plagas para subjugar corpos e mentes.",phrase2:"Você não é mais dono de si... agora pertence a nós.",description2:"Visionário distorcido, ele acredita que a verdadeira salvação da humanidade está na total submissão ao seu rebanho.",images:[D2,F2,R2,M2,U2]}],Ch=z.createContext();function H2({children:l}){const[u,o]=z.useState(!1),s=()=>o(!0),f=()=>o(!1),m=()=>o(p=>!p);return z.useEffect(()=>(document.body.classList.toggle("overflow-hidden",u),()=>document.body.classList.remove("overflow-hidden")),[u]),c.jsx(Ch.Provider,{value:{isOpen:u,open:s,close:f,toggle:m},children:l})}function Zi(){return z.useContext(Ch)}function B2(){const{logo:l}=Ah,{isOpen:u,toggle:o}=Zi();return c.jsxs("header",{className:`\r
         w-full \r
         flex \r
         justify-between\r
         items-center \r
         fixed \r
         px-15 \r
         py-15\r
         z-30\r
         pointer-events-none`,children:[c.jsx("a",{href:"#banner",children:c.jsx("img",{className:`
               w-27 
               pointer-events-auto 
               duration-200 
               ease-in
               ${u?"opacity-0 pointer-events-none":"opacity-100"}`,src:l,alt:"Logo Header"})}),c.jsxs("div",{onClick:o,className:`\r
            relative\r
            w-12\r
            h-12\r
            cursor-pointer\r
            pointer-events-auto\r
            group`,children:[c.jsx("div",{className:`
               absolute
               left-0
               w-12 
               h-3 
               transition-transform 
               duration-500
               z-10
               bg-white
               group-hover:bg-[#fff19f]
               ${u?"top-1/2 -translate-y-1/2 rotate-[45deg]":"top-[calc(50%-6px)] rotate-0"}`}),c.jsx("div",{className:`
               absolute
               left-0
               w-12 
               h-3 
               transition-transform 
               duration-500
               z-10 
               bg-white
               group-hover:bg-[#fff19f]
               ${u?"top-1/2 -translate-y-1/2 rotate-[-45deg]":"top-[calc(50%+6px)] rotate-0"}`})]})]})}function q2(){const{artWork:l,logoArtWork:u}=lc;return c.jsxs("div",{className:`\r
         w-screen \r
         h-screen\r
         relative`,id:"banner",children:[c.jsx("img",{className:`\r
            w-full \r
            h-full \r
            object-cover`,src:l,alt:"ArtWork do Resident Evil 4"}),c.jsx("img",{className:`\r
            absolute \r
            top-1/2 \r
            left-1/2 \r
            transform \r
            -translate-x-1/2 \r
            -translate-y-1/2`,src:u,alt:"Logo do Resident Evil 4"})]})}function wh(){const{logoArtWork:l}=lc,{LogoPs4:u,LogoPs5:o,LogoXbox:s,LogoPc:f}=L2;return c.jsxs("section",{className:`\r
         flex \r
         flex-col \r
         justify-center \r
         items-center \r
         pt-30 \r
         pb-20`,children:[c.jsx("img",{className:"w-200 sm:w-185",src:l,alt:"Logo do Resident Evil 4"}),c.jsxs("div",{className:`\r
            flex \r
            flex-col \r
            items-center \r
            gap-25`,children:[c.jsx("h2",{className:`\r
               text-[5rem]\r
               sm:text-[6rem]\r
               text-[#fff]\r
               font-bold \r
               uppercase`,children:"Disponível"}),c.jsxs("div",{className:`\r
               flex \r
               justify-center \r
               flex-wrap \r
               gap-12 \r
               px-20`,children:[c.jsx("img",{className:"w-50",src:u,alt:"Logo do PS4"}),c.jsx("img",{className:"w-50",src:o,alt:"Logo PS5"}),c.jsx("img",{className:"w-80",src:s,alt:"Logo Xbox Series X/S"}),c.jsx("img",{className:"w-20",src:f,alt:"Logo PC"})]})]})]})}function Y2(){return c.jsxs("section",{id:"about",className:`\r
         h-full \r
         flex \r
         flex-col \r
         justify-center \r
         items-center \r
         gap-20 \r
         bg-[linear-gradient(to_bottom,_#261e1e,_#5b4949)] \r
         pb-60`,children:[c.jsx(wh,{className:"pb-30"}),c.jsx("h2",{className:`\r
            text-[6rem] \r
            font-bold \r
            uppercase\r
            text-[#fff]`,children:"Sobre"}),c.jsx("p",{className:`\r
            max-w-400 \r
            text-[2.5rem]\r
            sm:text-[3rem]\r
            text-center\r
            text-[#fff]\r
            font-bold \r
            uppercase\r
            px-15`,children:"Seis anos após os eventos de Resident Evil 2, Leon Kennedy, sobrevivente de Raccoon City, foi enviado a um vilarejo isolado na Europa para investigar o desaparecimento da filha do presidente dos Estados Unidos. O que ele descobre lá é diferente de tudo o que ele já viu antes."})]})}function _t(){const[l,u]=z.useState(null),[o,s]=z.useState(!1),f=p=>u(p);return z.useEffect(()=>(l?document.body.classList.add("overflow-hidden"):document.body.classList.remove("overflow-hidden"),()=>document.body.classList.remove("overflow-hidden")),[l]),{openImage:l,handleOpen:f,handleClose:()=>{s(!0),setTimeout(()=>{u(null),s(!1)},300)},isClosing:o}}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function k2(l,u,o){return(u=X2(u))in l?Object.defineProperty(l,u,{value:o,enumerable:!0,configurable:!0,writable:!0}):l[u]=o,l}function _0(l,u){var o=Object.keys(l);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(l);u&&(s=s.filter(function(f){return Object.getOwnPropertyDescriptor(l,f).enumerable})),o.push.apply(o,s)}return o}function H(l){for(var u=1;u<arguments.length;u++){var o=arguments[u]!=null?arguments[u]:{};u%2?_0(Object(o),!0).forEach(function(s){k2(l,s,o[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(o)):_0(Object(o)).forEach(function(s){Object.defineProperty(l,s,Object.getOwnPropertyDescriptor(o,s))})}return l}function G2(l,u){if(typeof l!="object"||!l)return l;var o=l[Symbol.toPrimitive];if(o!==void 0){var s=o.call(l,u);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(u==="string"?String:Number)(l)}function X2(l){var u=G2(l,"string");return typeof u=="symbol"?u:u+""}const O0=()=>{};let ic={},_h={},Oh=null,zh={mark:O0,measure:O0};try{typeof window<"u"&&(ic=window),typeof document<"u"&&(_h=document),typeof MutationObserver<"u"&&(Oh=MutationObserver),typeof performance<"u"&&(zh=performance)}catch{}const{userAgent:z0=""}=ic.navigator||{},Bn=ic,Ae=_h,T0=Oh,Mi=zh;Bn.document;const dn=!!Ae.documentElement&&!!Ae.head&&typeof Ae.addEventListener=="function"&&typeof Ae.createElement=="function",Th=~z0.indexOf("MSIE")||~z0.indexOf("Trident/");var V2=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Q2=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Dh={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Z2={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Fh=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Pe="classic",Ki="duotone",K2="sharp",J2="sharp-duotone",Rh=[Pe,Ki,K2,J2],I2={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},$2={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},W2=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),P2={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},eb=["fak","fa-kit","fakd","fa-kit-duotone"],D0={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},tb=["kit"],nb={kit:{"fa-kit":"fak"}},ab=["fak","fakd"],rb={kit:{fak:"fa-kit"}},F0={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ui={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},lb=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ib=["fak","fa-kit","fakd","fa-kit-duotone"],sb={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ub={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},ob={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Ro={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},cb=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Mo=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...lb,...cb],fb=["solid","regular","light","thin","duotone","brands"],Mh=[1,2,3,4,5,6,7,8,9,10],db=Mh.concat([11,12,13,14,15,16,17,18,19,20]),mb=[...Object.keys(ob),...fb,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ui.GROUP,Ui.SWAP_OPACITY,Ui.PRIMARY,Ui.SECONDARY].concat(Mh.map(l=>"".concat(l,"x"))).concat(db.map(l=>"w-".concat(l))),hb={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const un="___FONT_AWESOME___",Uo=16,Uh="fa",Lh="svg-inline--fa",ca="data-fa-i2svg",Lo="data-fa-pseudo-element",gb="data-fa-pseudo-element-pending",sc="data-prefix",uc="data-icon",R0="fontawesome-i2svg",pb="async",vb=["HTML","HEAD","STYLE","SCRIPT"],Hh=(()=>{try{return!0}catch{return!1}})();function vl(l){return new Proxy(l,{get(u,o){return o in u?u[o]:u[Pe]}})}const Bh=H({},Dh);Bh[Pe]=H(H(H(H({},{"fa-duotone":"duotone"}),Dh[Pe]),D0.kit),D0["kit-duotone"]);const xb=vl(Bh),Ho=H({},P2);Ho[Pe]=H(H(H(H({},{duotone:"fad"}),Ho[Pe]),F0.kit),F0["kit-duotone"]);const M0=vl(Ho),Bo=H({},Ro);Bo[Pe]=H(H({},Bo[Pe]),rb.kit);const oc=vl(Bo),qo=H({},ub);qo[Pe]=H(H({},qo[Pe]),nb.kit);vl(qo);const bb=V2,qh="fa-layers-text",yb=Q2,Sb=H({},I2);vl(Sb);const Nb=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],jo=Z2,jb=[...tb,...mb],ol=Bn.FontAwesomeConfig||{};function Eb(l){var u=Ae.querySelector("script["+l+"]");if(u)return u.getAttribute(l)}function Ab(l){return l===""?!0:l==="false"?!1:l==="true"?!0:l}Ae&&typeof Ae.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(u=>{let[o,s]=u;const f=Ab(Eb(o));f!=null&&(ol[s]=f)});const Yh={styleDefault:"solid",familyDefault:Pe,cssPrefix:Uh,replacementClass:Lh,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ol.familyPrefix&&(ol.cssPrefix=ol.familyPrefix);const tr=H(H({},Yh),ol);tr.autoReplaceSvg||(tr.observeMutations=!1);const $={};Object.keys(Yh).forEach(l=>{Object.defineProperty($,l,{enumerable:!0,set:function(u){tr[l]=u,cl.forEach(o=>o($))},get:function(){return tr[l]}})});Object.defineProperty($,"familyPrefix",{enumerable:!0,set:function(l){tr.cssPrefix=l,cl.forEach(u=>u($))},get:function(){return tr.cssPrefix}});Bn.FontAwesomeConfig=$;const cl=[];function Cb(l){return cl.push(l),()=>{cl.splice(cl.indexOf(l),1)}}const Hn=Uo,qt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function wb(l){if(!l||!dn)return;const u=Ae.createElement("style");u.setAttribute("type","text/css"),u.innerHTML=l;const o=Ae.head.childNodes;let s=null;for(let f=o.length-1;f>-1;f--){const m=o[f],p=(m.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(p)>-1&&(s=m)}return Ae.head.insertBefore(u,s),l}const _b="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function dl(){let l=12,u="";for(;l-- >0;)u+=_b[Math.random()*62|0];return u}function lr(l){const u=[];for(let o=(l||[]).length>>>0;o--;)u[o]=l[o];return u}function cc(l){return l.classList?lr(l.classList):(l.getAttribute("class")||"").split(" ").filter(u=>u)}function kh(l){return"".concat(l).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ob(l){return Object.keys(l||{}).reduce((u,o)=>u+"".concat(o,'="').concat(kh(l[o]),'" '),"").trim()}function Ji(l){return Object.keys(l||{}).reduce((u,o)=>u+"".concat(o,": ").concat(l[o].trim(),";"),"")}function fc(l){return l.size!==qt.size||l.x!==qt.x||l.y!==qt.y||l.rotate!==qt.rotate||l.flipX||l.flipY}function zb(l){let{transform:u,containerWidth:o,iconWidth:s}=l;const f={transform:"translate(".concat(o/2," 256)")},m="translate(".concat(u.x*32,", ").concat(u.y*32,") "),p="scale(".concat(u.size/16*(u.flipX?-1:1),", ").concat(u.size/16*(u.flipY?-1:1),") "),v="rotate(".concat(u.rotate," 0 0)"),x={transform:"".concat(m," ").concat(p," ").concat(v)},g={transform:"translate(".concat(s/2*-1," -256)")};return{outer:f,inner:x,path:g}}function Tb(l){let{transform:u,width:o=Uo,height:s=Uo,startCentered:f=!1}=l,m="";return f&&Th?m+="translate(".concat(u.x/Hn-o/2,"em, ").concat(u.y/Hn-s/2,"em) "):f?m+="translate(calc(-50% + ".concat(u.x/Hn,"em), calc(-50% + ").concat(u.y/Hn,"em)) "):m+="translate(".concat(u.x/Hn,"em, ").concat(u.y/Hn,"em) "),m+="scale(".concat(u.size/Hn*(u.flipX?-1:1),", ").concat(u.size/Hn*(u.flipY?-1:1),") "),m+="rotate(".concat(u.rotate,"deg) "),m}var Db=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Gh(){const l=Uh,u=Lh,o=$.cssPrefix,s=$.replacementClass;let f=Db;if(o!==l||s!==u){const m=new RegExp("\\.".concat(l,"\\-"),"g"),p=new RegExp("\\--".concat(l,"\\-"),"g"),v=new RegExp("\\.".concat(u),"g");f=f.replace(m,".".concat(o,"-")).replace(p,"--".concat(o,"-")).replace(v,".".concat(s))}return f}let U0=!1;function Eo(){$.autoAddCss&&!U0&&(wb(Gh()),U0=!0)}var Fb={mixout(){return{dom:{css:Gh,insertCss:Eo}}},hooks(){return{beforeDOMElementCreation(){Eo()},beforeI2svg(){Eo()}}}};const on=Bn||{};on[un]||(on[un]={});on[un].styles||(on[un].styles={});on[un].hooks||(on[un].hooks={});on[un].shims||(on[un].shims=[]);var Yt=on[un];const Xh=[],Vh=function(){Ae.removeEventListener("DOMContentLoaded",Vh),ki=1,Xh.map(l=>l())};let ki=!1;dn&&(ki=(Ae.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ae.readyState),ki||Ae.addEventListener("DOMContentLoaded",Vh));function Rb(l){dn&&(ki?setTimeout(l,0):Xh.push(l))}function xl(l){const{tag:u,attributes:o={},children:s=[]}=l;return typeof l=="string"?kh(l):"<".concat(u," ").concat(Ob(o),">").concat(s.map(xl).join(""),"</").concat(u,">")}function L0(l,u,o){if(l&&l[u]&&l[u][o])return{prefix:u,iconName:o,icon:l[u][o]}}var Ao=function(u,o,s,f){var m=Object.keys(u),p=m.length,v=o,x,g,N;for(s===void 0?(x=1,N=u[m[0]]):(x=0,N=s);x<p;x++)g=m[x],N=v(N,u[g],g,u);return N};function Mb(l){const u=[];let o=0;const s=l.length;for(;o<s;){const f=l.charCodeAt(o++);if(f>=55296&&f<=56319&&o<s){const m=l.charCodeAt(o++);(m&64512)==56320?u.push(((f&1023)<<10)+(m&1023)+65536):(u.push(f),o--)}else u.push(f)}return u}function Yo(l){const u=Mb(l);return u.length===1?u[0].toString(16):null}function Ub(l,u){const o=l.length;let s=l.charCodeAt(u),f;return s>=55296&&s<=56319&&o>u+1&&(f=l.charCodeAt(u+1),f>=56320&&f<=57343)?(s-55296)*1024+f-56320+65536:s}function H0(l){return Object.keys(l).reduce((u,o)=>{const s=l[o];return!!s.icon?u[s.iconName]=s.icon:u[o]=s,u},{})}function ko(l,u){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:s=!1}=o,f=H0(u);typeof Yt.hooks.addPack=="function"&&!s?Yt.hooks.addPack(l,H0(u)):Yt.styles[l]=H(H({},Yt.styles[l]||{}),f),l==="fas"&&ko("fa",u)}const{styles:ml,shims:Lb}=Yt,Qh=Object.keys(oc),Hb=Qh.reduce((l,u)=>(l[u]=Object.keys(oc[u]),l),{});let dc=null,Zh={},Kh={},Jh={},Ih={},$h={};function Bb(l){return~jb.indexOf(l)}function qb(l,u){const o=u.split("-"),s=o[0],f=o.slice(1).join("-");return s===l&&f!==""&&!Bb(f)?f:null}const Wh=()=>{const l=s=>Ao(ml,(f,m,p)=>(f[p]=Ao(m,s,{}),f),{});Zh=l((s,f,m)=>(f[3]&&(s[f[3]]=m),f[2]&&f[2].filter(v=>typeof v=="number").forEach(v=>{s[v.toString(16)]=m}),s)),Kh=l((s,f,m)=>(s[m]=m,f[2]&&f[2].filter(v=>typeof v=="string").forEach(v=>{s[v]=m}),s)),$h=l((s,f,m)=>{const p=f[2];return s[m]=m,p.forEach(v=>{s[v]=m}),s});const u="far"in ml||$.autoFetchSvg,o=Ao(Lb,(s,f)=>{const m=f[0];let p=f[1];const v=f[2];return p==="far"&&!u&&(p="fas"),typeof m=="string"&&(s.names[m]={prefix:p,iconName:v}),typeof m=="number"&&(s.unicodes[m.toString(16)]={prefix:p,iconName:v}),s},{names:{},unicodes:{}});Jh=o.names,Ih=o.unicodes,dc=Ii($.styleDefault,{family:$.familyDefault})};Cb(l=>{dc=Ii(l.styleDefault,{family:$.familyDefault})});Wh();function mc(l,u){return(Zh[l]||{})[u]}function Yb(l,u){return(Kh[l]||{})[u]}function oa(l,u){return($h[l]||{})[u]}function Ph(l){return Jh[l]||{prefix:null,iconName:null}}function kb(l){const u=Ih[l],o=mc("fas",l);return u||(o?{prefix:"fas",iconName:o}:null)||{prefix:null,iconName:null}}function qn(){return dc}const eg=()=>({prefix:null,iconName:null,rest:[]});function Gb(l){let u=Pe;const o=Qh.reduce((s,f)=>(s[f]="".concat($.cssPrefix,"-").concat(f),s),{});return Rh.forEach(s=>{(l.includes(o[s])||l.some(f=>Hb[s].includes(f)))&&(u=s)}),u}function Ii(l){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:o=Pe}=u,s=xb[o][l];if(o===Ki&&!l)return"fad";const f=M0[o][l]||M0[o][s],m=l in Yt.styles?l:null;return f||m||null}function Xb(l){let u=[],o=null;return l.forEach(s=>{const f=qb($.cssPrefix,s);f?o=f:s&&u.push(s)}),{iconName:o,rest:u}}function B0(l){return l.sort().filter((u,o,s)=>s.indexOf(u)===o)}function $i(l){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:o=!1}=u;let s=null;const f=Mo.concat(ib),m=B0(l.filter(F=>f.includes(F))),p=B0(l.filter(F=>!Mo.includes(F))),v=m.filter(F=>(s=F,!Fh.includes(F))),[x=null]=v,g=Gb(m),N=H(H({},Xb(p)),{},{prefix:Ii(x,{family:g})});return H(H(H({},N),Kb({values:l,family:g,styles:ml,config:$,canonical:N,givenPrefix:s})),Vb(o,s,N))}function Vb(l,u,o){let{prefix:s,iconName:f}=o;if(l||!s||!f)return{prefix:s,iconName:f};const m=u==="fa"?Ph(f):{},p=oa(s,f);return f=m.iconName||p||f,s=m.prefix||s,s==="far"&&!ml.far&&ml.fas&&!$.autoFetchSvg&&(s="fas"),{prefix:s,iconName:f}}const Qb=Rh.filter(l=>l!==Pe||l!==Ki),Zb=Object.keys(Ro).filter(l=>l!==Pe).map(l=>Object.keys(Ro[l])).flat();function Kb(l){const{values:u,family:o,canonical:s,givenPrefix:f="",styles:m={},config:p={}}=l,v=o===Ki,x=u.includes("fa-duotone")||u.includes("fad"),g=p.familyDefault==="duotone",N=s.prefix==="fad"||s.prefix==="fa-duotone";if(!v&&(x||g||N)&&(s.prefix="fad"),(u.includes("fa-brands")||u.includes("fab"))&&(s.prefix="fab"),!s.prefix&&Qb.includes(o)&&(Object.keys(m).find(_=>Zb.includes(_))||p.autoFetchSvg)){const _=W2.get(o).defaultShortPrefixId;s.prefix=_,s.iconName=oa(s.prefix,s.iconName)||s.iconName}return(s.prefix==="fa"||f==="fa")&&(s.prefix=qn()||"fas"),s}class Jb{constructor(){this.definitions={}}add(){for(var u=arguments.length,o=new Array(u),s=0;s<u;s++)o[s]=arguments[s];const f=o.reduce(this._pullDefinitions,{});Object.keys(f).forEach(m=>{this.definitions[m]=H(H({},this.definitions[m]||{}),f[m]),ko(m,f[m]);const p=oc[Pe][m];p&&ko(p,f[m]),Wh()})}reset(){this.definitions={}}_pullDefinitions(u,o){const s=o.prefix&&o.iconName&&o.icon?{0:o}:o;return Object.keys(s).map(f=>{const{prefix:m,iconName:p,icon:v}=s[f],x=v[2];u[m]||(u[m]={}),x.length>0&&x.forEach(g=>{typeof g=="string"&&(u[m][g]=v)}),u[m][p]=v}),u}}let q0=[],Wa={};const er={},Ib=Object.keys(er);function $b(l,u){let{mixoutsTo:o}=u;return q0=l,Wa={},Object.keys(er).forEach(s=>{Ib.indexOf(s)===-1&&delete er[s]}),q0.forEach(s=>{const f=s.mixout?s.mixout():{};if(Object.keys(f).forEach(m=>{typeof f[m]=="function"&&(o[m]=f[m]),typeof f[m]=="object"&&Object.keys(f[m]).forEach(p=>{o[m]||(o[m]={}),o[m][p]=f[m][p]})}),s.hooks){const m=s.hooks();Object.keys(m).forEach(p=>{Wa[p]||(Wa[p]=[]),Wa[p].push(m[p])})}s.provides&&s.provides(er)}),o}function Go(l,u){for(var o=arguments.length,s=new Array(o>2?o-2:0),f=2;f<o;f++)s[f-2]=arguments[f];return(Wa[l]||[]).forEach(p=>{u=p.apply(null,[u,...s])}),u}function fa(l){for(var u=arguments.length,o=new Array(u>1?u-1:0),s=1;s<u;s++)o[s-1]=arguments[s];(Wa[l]||[]).forEach(m=>{m.apply(null,o)})}function Yn(){const l=arguments[0],u=Array.prototype.slice.call(arguments,1);return er[l]?er[l].apply(null,u):void 0}function Xo(l){l.prefix==="fa"&&(l.prefix="fas");let{iconName:u}=l;const o=l.prefix||qn();if(u)return u=oa(o,u)||u,L0(tg.definitions,o,u)||L0(Yt.styles,o,u)}const tg=new Jb,Wb=()=>{$.autoReplaceSvg=!1,$.observeMutations=!1,fa("noAuto")},Pb={i2svg:function(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return dn?(fa("beforeI2svg",l),Yn("pseudoElements2svg",l),Yn("i2svg",l)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:u}=l;$.autoReplaceSvg===!1&&($.autoReplaceSvg=!0),$.observeMutations=!0,Rb(()=>{ty({autoReplaceSvgRoot:u}),fa("watch",l)})}},ey={icon:l=>{if(l===null)return null;if(typeof l=="object"&&l.prefix&&l.iconName)return{prefix:l.prefix,iconName:oa(l.prefix,l.iconName)||l.iconName};if(Array.isArray(l)&&l.length===2){const u=l[1].indexOf("fa-")===0?l[1].slice(3):l[1],o=Ii(l[0]);return{prefix:o,iconName:oa(o,u)||u}}if(typeof l=="string"&&(l.indexOf("".concat($.cssPrefix,"-"))>-1||l.match(bb))){const u=$i(l.split(" "),{skipLookups:!0});return{prefix:u.prefix||qn(),iconName:oa(u.prefix,u.iconName)||u.iconName}}if(typeof l=="string"){const u=qn();return{prefix:u,iconName:oa(u,l)||l}}}},vt={noAuto:Wb,config:$,dom:Pb,parse:ey,library:tg,findIconDefinition:Xo,toHtml:xl},ty=function(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:u=Ae}=l;(Object.keys(Yt.styles).length>0||$.autoFetchSvg)&&dn&&$.autoReplaceSvg&&vt.dom.i2svg({node:u})};function Wi(l,u){return Object.defineProperty(l,"abstract",{get:u}),Object.defineProperty(l,"html",{get:function(){return l.abstract.map(o=>xl(o))}}),Object.defineProperty(l,"node",{get:function(){if(!dn)return;const o=Ae.createElement("div");return o.innerHTML=l.html,o.children}}),l}function ny(l){let{children:u,main:o,mask:s,attributes:f,styles:m,transform:p}=l;if(fc(p)&&o.found&&!s.found){const{width:v,height:x}=o,g={x:v/x/2,y:.5};f.style=Ji(H(H({},m),{},{"transform-origin":"".concat(g.x+p.x/16,"em ").concat(g.y+p.y/16,"em")}))}return[{tag:"svg",attributes:f,children:u}]}function ay(l){let{prefix:u,iconName:o,children:s,attributes:f,symbol:m}=l;const p=m===!0?"".concat(u,"-").concat($.cssPrefix,"-").concat(o):m;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:H(H({},f),{},{id:p}),children:s}]}]}function hc(l){const{icons:{main:u,mask:o},prefix:s,iconName:f,transform:m,symbol:p,title:v,maskId:x,titleId:g,extra:N,watchable:F=!1}=l,{width:_,height:B}=o.found?o:u,R=ab.includes(s),G=[$.replacementClass,f?"".concat($.cssPrefix,"-").concat(f):""].filter(I=>N.classes.indexOf(I)===-1).filter(I=>I!==""||!!I).concat(N.classes).join(" ");let q={children:[],attributes:H(H({},N.attributes),{},{"data-prefix":s,"data-icon":f,class:G,role:N.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(B)})};const L=R&&!~N.classes.indexOf("fa-fw")?{width:"".concat(_/B*16*.0625,"em")}:{};F&&(q.attributes[ca]=""),v&&(q.children.push({tag:"title",attributes:{id:q.attributes["aria-labelledby"]||"title-".concat(g||dl())},children:[v]}),delete q.attributes.title);const Y=H(H({},q),{},{prefix:s,iconName:f,main:u,mask:o,maskId:x,transform:m,symbol:p,styles:H(H({},L),N.styles)}),{children:K,attributes:le}=o.found&&u.found?Yn("generateAbstractMask",Y)||{children:[],attributes:{}}:Yn("generateAbstractIcon",Y)||{children:[],attributes:{}};return Y.children=K,Y.attributes=le,p?ay(Y):ny(Y)}function Y0(l){const{content:u,width:o,height:s,transform:f,title:m,extra:p,watchable:v=!1}=l,x=H(H(H({},p.attributes),m?{title:m}:{}),{},{class:p.classes.join(" ")});v&&(x[ca]="");const g=H({},p.styles);fc(f)&&(g.transform=Tb({transform:f,startCentered:!0,width:o,height:s}),g["-webkit-transform"]=g.transform);const N=Ji(g);N.length>0&&(x.style=N);const F=[];return F.push({tag:"span",attributes:x,children:[u]}),m&&F.push({tag:"span",attributes:{class:"sr-only"},children:[m]}),F}function ry(l){const{content:u,title:o,extra:s}=l,f=H(H(H({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")}),m=Ji(s.styles);m.length>0&&(f.style=m);const p=[];return p.push({tag:"span",attributes:f,children:[u]}),o&&p.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),p}const{styles:Co}=Yt;function Vo(l){const u=l[0],o=l[1],[s]=l.slice(4);let f=null;return Array.isArray(s)?f={tag:"g",attributes:{class:"".concat($.cssPrefix,"-").concat(jo.GROUP)},children:[{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(jo.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(jo.PRIMARY),fill:"currentColor",d:s[1]}}]}:f={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:u,height:o,icon:f}}const ly={found:!1,width:512,height:512};function iy(l,u){!Hh&&!$.showMissingIcons&&l&&console.error('Icon with name "'.concat(l,'" and prefix "').concat(u,'" is missing.'))}function Qo(l,u){let o=u;return u==="fa"&&$.styleDefault!==null&&(u=qn()),new Promise((s,f)=>{if(o==="fa"){const m=Ph(l)||{};l=m.iconName||l,u=m.prefix||u}if(l&&u&&Co[u]&&Co[u][l]){const m=Co[u][l];return s(Vo(m))}iy(l,u),s(H(H({},ly),{},{icon:$.showMissingIcons&&l?Yn("missingIconAbstract")||{}:{}}))})}const k0=()=>{},Zo=$.measurePerformance&&Mi&&Mi.mark&&Mi.measure?Mi:{mark:k0,measure:k0},ul='FA "6.7.2"',sy=l=>(Zo.mark("".concat(ul," ").concat(l," begins")),()=>ng(l)),ng=l=>{Zo.mark("".concat(ul," ").concat(l," ends")),Zo.measure("".concat(ul," ").concat(l),"".concat(ul," ").concat(l," begins"),"".concat(ul," ").concat(l," ends"))};var gc={begin:sy,end:ng};const Bi=()=>{};function G0(l){return typeof(l.getAttribute?l.getAttribute(ca):null)=="string"}function uy(l){const u=l.getAttribute?l.getAttribute(sc):null,o=l.getAttribute?l.getAttribute(uc):null;return u&&o}function oy(l){return l&&l.classList&&l.classList.contains&&l.classList.contains($.replacementClass)}function cy(){return $.autoReplaceSvg===!0?qi.replace:qi[$.autoReplaceSvg]||qi.replace}function fy(l){return Ae.createElementNS("http://www.w3.org/2000/svg",l)}function dy(l){return Ae.createElement(l)}function ag(l){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:o=l.tag==="svg"?fy:dy}=u;if(typeof l=="string")return Ae.createTextNode(l);const s=o(l.tag);return Object.keys(l.attributes||[]).forEach(function(m){s.setAttribute(m,l.attributes[m])}),(l.children||[]).forEach(function(m){s.appendChild(ag(m,{ceFn:o}))}),s}function my(l){let u=" ".concat(l.outerHTML," ");return u="".concat(u,"Font Awesome fontawesome.com "),u}const qi={replace:function(l){const u=l[0];if(u.parentNode)if(l[1].forEach(o=>{u.parentNode.insertBefore(ag(o),u)}),u.getAttribute(ca)===null&&$.keepOriginalSource){let o=Ae.createComment(my(u));u.parentNode.replaceChild(o,u)}else u.remove()},nest:function(l){const u=l[0],o=l[1];if(~cc(u).indexOf($.replacementClass))return qi.replace(l);const s=new RegExp("".concat($.cssPrefix,"-.*"));if(delete o[0].attributes.id,o[0].attributes.class){const m=o[0].attributes.class.split(" ").reduce((p,v)=>(v===$.replacementClass||v.match(s)?p.toSvg.push(v):p.toNode.push(v),p),{toNode:[],toSvg:[]});o[0].attributes.class=m.toSvg.join(" "),m.toNode.length===0?u.removeAttribute("class"):u.setAttribute("class",m.toNode.join(" "))}const f=o.map(m=>xl(m)).join(`
`);u.setAttribute(ca,""),u.innerHTML=f}};function X0(l){l()}function rg(l,u){const o=typeof u=="function"?u:Bi;if(l.length===0)o();else{let s=X0;$.mutateApproach===pb&&(s=Bn.requestAnimationFrame||X0),s(()=>{const f=cy(),m=gc.begin("mutate");l.map(f),m(),o()})}}let pc=!1;function lg(){pc=!0}function Ko(){pc=!1}let Gi=null;function V0(l){if(!T0||!$.observeMutations)return;const{treeCallback:u=Bi,nodeCallback:o=Bi,pseudoElementsCallback:s=Bi,observeMutationsRoot:f=Ae}=l;Gi=new T0(m=>{if(pc)return;const p=qn();lr(m).forEach(v=>{if(v.type==="childList"&&v.addedNodes.length>0&&!G0(v.addedNodes[0])&&($.searchPseudoElements&&s(v.target),u(v.target)),v.type==="attributes"&&v.target.parentNode&&$.searchPseudoElements&&s(v.target.parentNode),v.type==="attributes"&&G0(v.target)&&~Nb.indexOf(v.attributeName))if(v.attributeName==="class"&&uy(v.target)){const{prefix:x,iconName:g}=$i(cc(v.target));v.target.setAttribute(sc,x||p),g&&v.target.setAttribute(uc,g)}else oy(v.target)&&o(v.target)})}),dn&&Gi.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function hy(){Gi&&Gi.disconnect()}function gy(l){const u=l.getAttribute("style");let o=[];return u&&(o=u.split(";").reduce((s,f)=>{const m=f.split(":"),p=m[0],v=m.slice(1);return p&&v.length>0&&(s[p]=v.join(":").trim()),s},{})),o}function py(l){const u=l.getAttribute("data-prefix"),o=l.getAttribute("data-icon"),s=l.innerText!==void 0?l.innerText.trim():"";let f=$i(cc(l));return f.prefix||(f.prefix=qn()),u&&o&&(f.prefix=u,f.iconName=o),f.iconName&&f.prefix||(f.prefix&&s.length>0&&(f.iconName=Yb(f.prefix,l.innerText)||mc(f.prefix,Yo(l.innerText))),!f.iconName&&$.autoFetchSvg&&l.firstChild&&l.firstChild.nodeType===Node.TEXT_NODE&&(f.iconName=l.firstChild.data)),f}function vy(l){const u=lr(l.attributes).reduce((f,m)=>(f.name!=="class"&&f.name!=="style"&&(f[m.name]=m.value),f),{}),o=l.getAttribute("title"),s=l.getAttribute("data-fa-title-id");return $.autoA11y&&(o?u["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(s||dl()):(u["aria-hidden"]="true",u.focusable="false")),u}function xy(){return{iconName:null,title:null,titleId:null,prefix:null,transform:qt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Q0(l){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:o,prefix:s,rest:f}=py(l),m=vy(l),p=Go("parseNodeAttributes",{},l);let v=u.styleParser?gy(l):[];return H({iconName:o,title:l.getAttribute("title"),titleId:l.getAttribute("data-fa-title-id"),prefix:s,transform:qt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:f,styles:v,attributes:m}},p)}const{styles:by}=Yt;function ig(l){const u=$.autoReplaceSvg==="nest"?Q0(l,{styleParser:!1}):Q0(l);return~u.extra.classes.indexOf(qh)?Yn("generateLayersText",l,u):Yn("generateSvgReplacementMutation",l,u)}function yy(){return[...eb,...Mo]}function Z0(l){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!dn)return Promise.resolve();const o=Ae.documentElement.classList,s=N=>o.add("".concat(R0,"-").concat(N)),f=N=>o.remove("".concat(R0,"-").concat(N)),m=$.autoFetchSvg?yy():Fh.concat(Object.keys(by));m.includes("fa")||m.push("fa");const p=[".".concat(qh,":not([").concat(ca,"])")].concat(m.map(N=>".".concat(N,":not([").concat(ca,"])"))).join(", ");if(p.length===0)return Promise.resolve();let v=[];try{v=lr(l.querySelectorAll(p))}catch{}if(v.length>0)s("pending"),f("complete");else return Promise.resolve();const x=gc.begin("onTree"),g=v.reduce((N,F)=>{try{const _=ig(F);_&&N.push(_)}catch(_){Hh||_.name==="MissingIcon"&&console.error(_)}return N},[]);return new Promise((N,F)=>{Promise.all(g).then(_=>{rg(_,()=>{s("active"),s("complete"),f("pending"),typeof u=="function"&&u(),x(),N()})}).catch(_=>{x(),F(_)})})}function Sy(l){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ig(l).then(o=>{o&&rg([o],u)})}function Ny(l){return function(u){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=(u||{}).icon?u:Xo(u||{});let{mask:f}=o;return f&&(f=(f||{}).icon?f:Xo(f||{})),l(s,H(H({},o),{},{mask:f}))}}const jy=function(l){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:o=qt,symbol:s=!1,mask:f=null,maskId:m=null,title:p=null,titleId:v=null,classes:x=[],attributes:g={},styles:N={}}=u;if(!l)return;const{prefix:F,iconName:_,icon:B}=l;return Wi(H({type:"icon"},l),()=>(fa("beforeDOMElementCreation",{iconDefinition:l,params:u}),$.autoA11y&&(p?g["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(v||dl()):(g["aria-hidden"]="true",g.focusable="false")),hc({icons:{main:Vo(B),mask:f?Vo(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:F,iconName:_,transform:H(H({},qt),o),symbol:s,title:p,maskId:m,titleId:v,extra:{attributes:g,styles:N,classes:x}})))};var Ey={mixout(){return{icon:Ny(jy)}},hooks(){return{mutationObserverCallbacks(l){return l.treeCallback=Z0,l.nodeCallback=Sy,l}}},provides(l){l.i2svg=function(u){const{node:o=Ae,callback:s=()=>{}}=u;return Z0(o,s)},l.generateSvgReplacementMutation=function(u,o){const{iconName:s,title:f,titleId:m,prefix:p,transform:v,symbol:x,mask:g,maskId:N,extra:F}=o;return new Promise((_,B)=>{Promise.all([Qo(s,p),g.iconName?Qo(g.iconName,g.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(R=>{let[G,q]=R;_([u,hc({icons:{main:G,mask:q},prefix:p,iconName:s,transform:v,symbol:x,maskId:N,title:f,titleId:m,extra:F,watchable:!0})])}).catch(B)})},l.generateAbstractIcon=function(u){let{children:o,attributes:s,main:f,transform:m,styles:p}=u;const v=Ji(p);v.length>0&&(s.style=v);let x;return fc(m)&&(x=Yn("generateAbstractTransformGrouping",{main:f,transform:m,containerWidth:f.width,iconWidth:f.width})),o.push(x||f.icon),{children:o,attributes:s}}}},Ay={mixout(){return{layer(l){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:o=[]}=u;return Wi({type:"layer"},()=>{fa("beforeDOMElementCreation",{assembler:l,params:u});let s=[];return l(f=>{Array.isArray(f)?f.map(m=>{s=s.concat(m.abstract)}):s=s.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat($.cssPrefix,"-layers"),...o].join(" ")},children:s}]})}}}},Cy={mixout(){return{counter(l){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:o=null,classes:s=[],attributes:f={},styles:m={}}=u;return Wi({type:"counter",content:l},()=>(fa("beforeDOMElementCreation",{content:l,params:u}),ry({content:l.toString(),title:o,extra:{attributes:f,styles:m,classes:["".concat($.cssPrefix,"-layers-counter"),...s]}})))}}}},wy={mixout(){return{text(l){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:o=qt,title:s=null,classes:f=[],attributes:m={},styles:p={}}=u;return Wi({type:"text",content:l},()=>(fa("beforeDOMElementCreation",{content:l,params:u}),Y0({content:l,transform:H(H({},qt),o),title:s,extra:{attributes:m,styles:p,classes:["".concat($.cssPrefix,"-layers-text"),...f]}})))}}},provides(l){l.generateLayersText=function(u,o){const{title:s,transform:f,extra:m}=o;let p=null,v=null;if(Th){const x=parseInt(getComputedStyle(u).fontSize,10),g=u.getBoundingClientRect();p=g.width/x,v=g.height/x}return $.autoA11y&&!s&&(m.attributes["aria-hidden"]="true"),Promise.resolve([u,Y0({content:u.innerHTML,width:p,height:v,transform:f,title:s,extra:m,watchable:!0})])}}};const _y=new RegExp('"',"ug"),K0=[1105920,1112319],J0=H(H(H(H({},{FontAwesome:{normal:"fas",400:"fas"}}),$2),hb),sb),Jo=Object.keys(J0).reduce((l,u)=>(l[u.toLowerCase()]=J0[u],l),{}),Oy=Object.keys(Jo).reduce((l,u)=>{const o=Jo[u];return l[u]=o[900]||[...Object.entries(o)][0][1],l},{});function zy(l){const u=l.replace(_y,""),o=Ub(u,0),s=o>=K0[0]&&o<=K0[1],f=u.length===2?u[0]===u[1]:!1;return{value:Yo(f?u[0]:u),isSecondary:s||f}}function Ty(l,u){const o=l.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(u),f=isNaN(s)?"normal":s;return(Jo[o]||{})[f]||Oy[o]}function I0(l,u){const o="".concat(gb).concat(u.replace(":","-"));return new Promise((s,f)=>{if(l.getAttribute(o)!==null)return s();const p=lr(l.children).filter(_=>_.getAttribute(Lo)===u)[0],v=Bn.getComputedStyle(l,u),x=v.getPropertyValue("font-family"),g=x.match(yb),N=v.getPropertyValue("font-weight"),F=v.getPropertyValue("content");if(p&&!g)return l.removeChild(p),s();if(g&&F!=="none"&&F!==""){const _=v.getPropertyValue("content");let B=Ty(x,N);const{value:R,isSecondary:G}=zy(_),q=g[0].startsWith("FontAwesome");let L=mc(B,R),Y=L;if(q){const K=kb(R);K.iconName&&K.prefix&&(L=K.iconName,B=K.prefix)}if(L&&!G&&(!p||p.getAttribute(sc)!==B||p.getAttribute(uc)!==Y)){l.setAttribute(o,Y),p&&l.removeChild(p);const K=xy(),{extra:le}=K;le.attributes[Lo]=u,Qo(L,B).then(I=>{const De=hc(H(H({},K),{},{icons:{main:I,mask:eg()},prefix:B,iconName:Y,extra:le,watchable:!0})),je=Ae.createElementNS("http://www.w3.org/2000/svg","svg");u==="::before"?l.insertBefore(je,l.firstChild):l.appendChild(je),je.outerHTML=De.map(Oe=>xl(Oe)).join(`
`),l.removeAttribute(o),s()}).catch(f)}else s()}else s()})}function Dy(l){return Promise.all([I0(l,"::before"),I0(l,"::after")])}function Fy(l){return l.parentNode!==document.head&&!~vb.indexOf(l.tagName.toUpperCase())&&!l.getAttribute(Lo)&&(!l.parentNode||l.parentNode.tagName!=="svg")}function $0(l){if(dn)return new Promise((u,o)=>{const s=lr(l.querySelectorAll("*")).filter(Fy).map(Dy),f=gc.begin("searchPseudoElements");lg(),Promise.all(s).then(()=>{f(),Ko(),u()}).catch(()=>{f(),Ko(),o()})})}var Ry={hooks(){return{mutationObserverCallbacks(l){return l.pseudoElementsCallback=$0,l}}},provides(l){l.pseudoElements2svg=function(u){const{node:o=Ae}=u;$.searchPseudoElements&&$0(o)}}};let W0=!1;var My={mixout(){return{dom:{unwatch(){lg(),W0=!0}}}},hooks(){return{bootstrap(){V0(Go("mutationObserverCallbacks",{}))},noAuto(){hy()},watch(l){const{observeMutationsRoot:u}=l;W0?Ko():V0(Go("mutationObserverCallbacks",{observeMutationsRoot:u}))}}}};const P0=l=>{let u={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return l.toLowerCase().split(" ").reduce((o,s)=>{const f=s.toLowerCase().split("-"),m=f[0];let p=f.slice(1).join("-");if(m&&p==="h")return o.flipX=!0,o;if(m&&p==="v")return o.flipY=!0,o;if(p=parseFloat(p),isNaN(p))return o;switch(m){case"grow":o.size=o.size+p;break;case"shrink":o.size=o.size-p;break;case"left":o.x=o.x-p;break;case"right":o.x=o.x+p;break;case"up":o.y=o.y-p;break;case"down":o.y=o.y+p;break;case"rotate":o.rotate=o.rotate+p;break}return o},u)};var Uy={mixout(){return{parse:{transform:l=>P0(l)}}},hooks(){return{parseNodeAttributes(l,u){const o=u.getAttribute("data-fa-transform");return o&&(l.transform=P0(o)),l}}},provides(l){l.generateAbstractTransformGrouping=function(u){let{main:o,transform:s,containerWidth:f,iconWidth:m}=u;const p={transform:"translate(".concat(f/2," 256)")},v="translate(".concat(s.x*32,", ").concat(s.y*32,") "),x="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),g="rotate(".concat(s.rotate," 0 0)"),N={transform:"".concat(v," ").concat(x," ").concat(g)},F={transform:"translate(".concat(m/2*-1," -256)")},_={outer:p,inner:N,path:F};return{tag:"g",attributes:H({},_.outer),children:[{tag:"g",attributes:H({},_.inner),children:[{tag:o.icon.tag,children:o.icon.children,attributes:H(H({},o.icon.attributes),_.path)}]}]}}}};const wo={x:0,y:0,width:"100%",height:"100%"};function eh(l){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return l.attributes&&(l.attributes.fill||u)&&(l.attributes.fill="black"),l}function Ly(l){return l.tag==="g"?l.children:[l]}var Hy={hooks(){return{parseNodeAttributes(l,u){const o=u.getAttribute("data-fa-mask"),s=o?$i(o.split(" ").map(f=>f.trim())):eg();return s.prefix||(s.prefix=qn()),l.mask=s,l.maskId=u.getAttribute("data-fa-mask-id"),l}}},provides(l){l.generateAbstractMask=function(u){let{children:o,attributes:s,main:f,mask:m,maskId:p,transform:v}=u;const{width:x,icon:g}=f,{width:N,icon:F}=m,_=zb({transform:v,containerWidth:N,iconWidth:x}),B={tag:"rect",attributes:H(H({},wo),{},{fill:"white"})},R=g.children?{children:g.children.map(eh)}:{},G={tag:"g",attributes:H({},_.inner),children:[eh(H({tag:g.tag,attributes:H(H({},g.attributes),_.path)},R))]},q={tag:"g",attributes:H({},_.outer),children:[G]},L="mask-".concat(p||dl()),Y="clip-".concat(p||dl()),K={tag:"mask",attributes:H(H({},wo),{},{id:L,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[B,q]},le={tag:"defs",children:[{tag:"clipPath",attributes:{id:Y},children:Ly(F)},K]};return o.push(le,{tag:"rect",attributes:H({fill:"currentColor","clip-path":"url(#".concat(Y,")"),mask:"url(#".concat(L,")")},wo)}),{children:o,attributes:s}}}},By={provides(l){let u=!1;Bn.matchMedia&&(u=Bn.matchMedia("(prefers-reduced-motion: reduce)").matches),l.missingIconAbstract=function(){const o=[],s={fill:"currentColor"},f={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};o.push({tag:"path",attributes:H(H({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const m=H(H({},f),{},{attributeName:"opacity"}),p={tag:"circle",attributes:H(H({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return u||p.children.push({tag:"animate",attributes:H(H({},f),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:H(H({},m),{},{values:"1;0;1;1;0;1;"})}),o.push(p),o.push({tag:"path",attributes:H(H({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:u?[]:[{tag:"animate",attributes:H(H({},m),{},{values:"1;0;0;0;0;1;"})}]}),u||o.push({tag:"path",attributes:H(H({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:H(H({},m),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:o}}}},qy={hooks(){return{parseNodeAttributes(l,u){const o=u.getAttribute("data-fa-symbol"),s=o===null?!1:o===""?!0:o;return l.symbol=s,l}}}},Yy=[Fb,Ey,Ay,Cy,wy,Ry,My,Uy,Hy,By,qy];$b(Yy,{mixoutsTo:vt});vt.noAuto;vt.config;vt.library;vt.dom;const Io=vt.parse;vt.findIconDefinition;vt.toHtml;const ky=vt.icon;vt.layer;vt.text;vt.counter;var _o={exports:{}},Oo,th;function Gy(){if(th)return Oo;th=1;var l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Oo=l,Oo}var zo,nh;function Xy(){if(nh)return zo;nh=1;var l=Gy();function u(){}function o(){}return o.resetWarningCache=u,zo=function(){function s(p,v,x,g,N,F){if(F!==l){var _=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw _.name="Invariant Violation",_}}s.isRequired=s;function f(){return s}var m={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:f,element:s,elementType:s,instanceOf:f,node:s,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f,checkPropTypes:o,resetWarningCache:u};return m.PropTypes=m,m},zo}var ah;function Vy(){return ah||(ah=1,_o.exports=Xy()()),_o.exports}var Qy=Vy();const fe=sh(Qy);function rh(l,u){var o=Object.keys(l);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(l);u&&(s=s.filter(function(f){return Object.getOwnPropertyDescriptor(l,f).enumerable})),o.push.apply(o,s)}return o}function Bt(l){for(var u=1;u<arguments.length;u++){var o=arguments[u]!=null?arguments[u]:{};u%2?rh(Object(o),!0).forEach(function(s){Pa(l,s,o[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(o)):rh(Object(o)).forEach(function(s){Object.defineProperty(l,s,Object.getOwnPropertyDescriptor(o,s))})}return l}function Xi(l){"@babel/helpers - typeof";return Xi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},Xi(l)}function Pa(l,u,o){return u in l?Object.defineProperty(l,u,{value:o,enumerable:!0,configurable:!0,writable:!0}):l[u]=o,l}function Zy(l,u){if(l==null)return{};var o={},s=Object.keys(l),f,m;for(m=0;m<s.length;m++)f=s[m],!(u.indexOf(f)>=0)&&(o[f]=l[f]);return o}function Ky(l,u){if(l==null)return{};var o=Zy(l,u),s,f;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(l);for(f=0;f<m.length;f++)s=m[f],!(u.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(l,s)&&(o[s]=l[s])}return o}function $o(l){return Jy(l)||Iy(l)||$y(l)||Wy()}function Jy(l){if(Array.isArray(l))return Wo(l)}function Iy(l){if(typeof Symbol<"u"&&l[Symbol.iterator]!=null||l["@@iterator"]!=null)return Array.from(l)}function $y(l,u){if(l){if(typeof l=="string")return Wo(l,u);var o=Object.prototype.toString.call(l).slice(8,-1);if(o==="Object"&&l.constructor&&(o=l.constructor.name),o==="Map"||o==="Set")return Array.from(l);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return Wo(l,u)}}function Wo(l,u){(u==null||u>l.length)&&(u=l.length);for(var o=0,s=new Array(u);o<u;o++)s[o]=l[o];return s}function Wy(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Py(l){var u,o=l.beat,s=l.fade,f=l.beatFade,m=l.bounce,p=l.shake,v=l.flash,x=l.spin,g=l.spinPulse,N=l.spinReverse,F=l.pulse,_=l.fixedWidth,B=l.inverse,R=l.border,G=l.listItem,q=l.flip,L=l.size,Y=l.rotation,K=l.pull,le=(u={"fa-beat":o,"fa-fade":s,"fa-beat-fade":f,"fa-bounce":m,"fa-shake":p,"fa-flash":v,"fa-spin":x,"fa-spin-reverse":N,"fa-spin-pulse":g,"fa-pulse":F,"fa-fw":_,"fa-inverse":B,"fa-border":R,"fa-li":G,"fa-flip":q===!0,"fa-flip-horizontal":q==="horizontal"||q==="both","fa-flip-vertical":q==="vertical"||q==="both"},Pa(u,"fa-".concat(L),typeof L<"u"&&L!==null),Pa(u,"fa-rotate-".concat(Y),typeof Y<"u"&&Y!==null&&Y!==0),Pa(u,"fa-pull-".concat(K),typeof K<"u"&&K!==null),Pa(u,"fa-swap-opacity",l.swapOpacity),u);return Object.keys(le).map(function(I){return le[I]?I:null}).filter(function(I){return I})}function e3(l){return l=l-0,l===l}function sg(l){return e3(l)?l:(l=l.replace(/[\-_\s]+(.)?/g,function(u,o){return o?o.toUpperCase():""}),l.substr(0,1).toLowerCase()+l.substr(1))}var t3=["style"];function n3(l){return l.charAt(0).toUpperCase()+l.slice(1)}function a3(l){return l.split(";").map(function(u){return u.trim()}).filter(function(u){return u}).reduce(function(u,o){var s=o.indexOf(":"),f=sg(o.slice(0,s)),m=o.slice(s+1).trim();return f.startsWith("webkit")?u[n3(f)]=m:u[f]=m,u},{})}function ug(l,u){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof u=="string")return u;var s=(u.children||[]).map(function(x){return ug(l,x)}),f=Object.keys(u.attributes||{}).reduce(function(x,g){var N=u.attributes[g];switch(g){case"class":x.attrs.className=N,delete u.attributes.class;break;case"style":x.attrs.style=a3(N);break;default:g.indexOf("aria-")===0||g.indexOf("data-")===0?x.attrs[g.toLowerCase()]=N:x.attrs[sg(g)]=N}return x},{attrs:{}}),m=o.style,p=m===void 0?{}:m,v=Ky(o,t3);return f.attrs.style=Bt(Bt({},f.attrs.style),p),l.apply(void 0,[u.tag,Bt(Bt({},f.attrs),v)].concat($o(s)))}var og=!1;try{og=!0}catch{}function r3(){if(!og&&console&&typeof console.error=="function"){var l;(l=console).error.apply(l,arguments)}}function lh(l){if(l&&Xi(l)==="object"&&l.prefix&&l.iconName&&l.icon)return l;if(Io.icon)return Io.icon(l);if(l===null)return null;if(l&&Xi(l)==="object"&&l.prefix&&l.iconName)return l;if(Array.isArray(l)&&l.length===2)return{prefix:l[0],iconName:l[1]};if(typeof l=="string")return{prefix:"fas",iconName:l}}function To(l,u){return Array.isArray(u)&&u.length>0||!Array.isArray(u)&&u?Pa({},l,u):{}}var ih={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},k=uh.forwardRef(function(l,u){var o=Bt(Bt({},ih),l),s=o.icon,f=o.mask,m=o.symbol,p=o.className,v=o.title,x=o.titleId,g=o.maskId,N=lh(s),F=To("classes",[].concat($o(Py(o)),$o((p||"").split(" ")))),_=To("transform",typeof o.transform=="string"?Io.transform(o.transform):o.transform),B=To("mask",lh(f)),R=ky(N,Bt(Bt(Bt(Bt({},F),_),B),{},{symbol:m,title:v,titleId:x,maskId:g}));if(!R)return r3("Could not find icon",N),null;var G=R.abstract,q={ref:u};return Object.keys(o).forEach(function(L){ih.hasOwnProperty(L)||(q[L]=o[L])}),l3(G[0],q)});k.displayName="FontAwesomeIcon";k.propTypes={beat:fe.bool,border:fe.bool,beatFade:fe.bool,bounce:fe.bool,className:fe.string,fade:fe.bool,flash:fe.bool,mask:fe.oneOfType([fe.object,fe.array,fe.string]),maskId:fe.string,fixedWidth:fe.bool,inverse:fe.bool,flip:fe.oneOf([!0,!1,"horizontal","vertical","both"]),icon:fe.oneOfType([fe.object,fe.array,fe.string]),listItem:fe.bool,pull:fe.oneOf(["right","left"]),pulse:fe.bool,rotation:fe.oneOf([0,90,180,270]),shake:fe.bool,size:fe.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:fe.bool,spinPulse:fe.bool,spinReverse:fe.bool,symbol:fe.oneOfType([fe.bool,fe.string]),title:fe.string,titleId:fe.string,transform:fe.oneOfType([fe.string,fe.object]),swapOpacity:fe.bool};var l3=ug.bind(null,uh.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const vc={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},J={prefix:"fas",iconName:"expand",icon:[448,512,[],"f065","M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"]},Ot={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]};function i3(){const{name:l,phrase:u,description:o,images:s,phrase2:f,description2:m}=fn[0],{openImage:p,handleOpen:v,handleClose:x,isClosing:g}=_t();return c.jsx(c.Fragment,{children:c.jsxs("section",{id:"leon",className:`\r
            flex flex-col \r
            justify-center \r
            items-center \r
            gap-40 \r
            bg-[linear-gradient(to_bottom,_#2C3E4F,_#658EB5)] \r
            py-50`,children:[c.jsxs("div",{className:"grid lg:grid-cols-2 gap-15",children:[c.jsxs("div",{className:"lg:pl-40",children:[c.jsx("h1",{className:`\r
                     text-[5rem] \r
                     font-bold\r
                     uppercase \r
                     pb-20\r
                     px-15\r
                     lg:px-0\r
                     text-[#fff]`,children:l}),c.jsx("h2",{className:`\r
                     max-w-170 \r
                     text-[3.5rem] \r
                     font-bold \r
                     text-[#FFF200]\r
                     pb-10\r
                     px-15\r
                     lg:px-0`,children:u}),c.jsx("h3",{className:`\r
                     max-w-180 \r
                     text-[2.5rem] \r
                     text-white \r
                     font-bold \r
                     pb-50\r
                     px-15\r
                     lg:px-0`,children:o}),c.jsxs("div",{className:`\r
                     h-250\r
                     lg:h-300 \r
                     relative \r
                     group\r
                     cursor-zoom-in`,onClick:()=>v(s[0]),children:[c.jsx("img",{className:`\r
                        w-[800px]\r
                        lg:w-[700px] \r
                        h-full \r
                        object-cover \r
                        group-hover:border-8 border-[#FFF9D6] duration-300 ease-in`,src:s[0],alt:"Leon Image 1"}),c.jsx(k,{icon:J,className:`\r
                        group-hover:text-[#2C3E4F] \r
                        group-hover:bg-[#FFF9D6] \r
                        bg-[#2C3E4F] \r
                        duration-300 ease-in  \r
                        text-[#FFF9D6] \r
                        text-4xl\r
                        px-6\r
                        py-5 \r
                        rounded-[50%] \r
                        absolute \r
                        bottom-15 \r
                        right-15`})]})]}),c.jsxs("div",{className:"grid grid-cols-1 grid-rows-1 gap-15",children:[c.jsxs("div",{className:`\r
                     h-180\r
                     lg:h-full\r
                     relative\r
                     group \r
                     cursor-zoom-in`,onClick:()=>v(s[1]),children:[c.jsx("img",{className:`\r
                        w-[800px] \r
                        h-full \r
                        object-cover \r
                        group-hover:border-8 border-[#FFF9D6] duration-300 ease-in`,src:s[1],alt:"Leon Image 2"}),c.jsx(k,{icon:J,className:`\r
                        group-hover:text-[#2C3E4F] \r
                        group-hover:bg-[#FFF9D6] \r
                        bg-[#2C3E4F] \r
                        duration-300 ease-in  \r
                        text-[#FFF9D6] \r
                        text-4xl\r
                        px-6\r
                        py-5 \r
                        rounded-[50%] \r
                        absolute \r
                        bottom-15 \r
                        right-15`})]}),c.jsxs("div",{className:`\r
                     h-190 \r
                     relative \r
                     group \r
                     cursor-zoom-in`,onClick:()=>v(s[2]),children:[c.jsx("img",{className:`\r
                        w-[800px] \r
                        h-full \r
                        object-cover \r
                        group-hover:border-8 border-[#FFF9D6] duration-300 ease-in`,src:s[2],alt:"Leon Image 3"}),c.jsx(k,{icon:J,className:`\r
                        group-hover:text-[#2C3E4F] \r
                        group-hover:bg-[#FFF9D6] \r
                        bg-[#2C3E4F] \r
                        duration-300 ease-in  \r
                        text-[#FFF9D6] \r
                        text-4xl\r
                        px-6\r
                        py-5 \r
                        rounded-[50%] \r
                        absolute \r
                        bottom-15 \r
                        right-15`})]})]})]}),c.jsx("div",{className:"lg:w-screen lg:h-screen",children:c.jsx("img",{className:"w-full h-full object-cover",src:s[3],alt:"Leon Image 4"})}),c.jsxs("div",{className:"grid lg:grid-cols-2 gap-15",children:[c.jsxs("div",{className:"grid grid-cols-1 grid-rows-1 gap-15",children:[c.jsx("div",{className:"flex justify-center",children:c.jsx("h2",{className:`\r
                        max-w-170 \r
                        text-[3.5rem] \r
                        font-bold\r
                        text-[#FFF200]\r
                        pb-20\r
                        px-15\r
                        lg:px-0`,children:f})}),c.jsxs("div",{className:`\r
                     h-250\r
                     lg:h-300 \r
                     relative \r
                     group\r
                     cursor-zoom-in`,onClick:()=>v(s[4]),children:[c.jsx("img",{className:`\r
                        w-[800px]\r
                        h-full \r
                        object-cover \r
                        group-hover:border-8 border-[#FFF9D6] duration-300 ease-in`,src:s[4],alt:"Leon Image 5"}),c.jsx(k,{icon:J,className:`\r
                        group-hover:text-[#2C3E4F] \r
                        group-hover:bg-[#FFF9D6] \r
                        bg-[#2C3E4F] \r
                        duration-300 ease-in  \r
                        text-[#FFF9D6] \r
                        text-4xl\r
                        px-6\r
                        py-5 \r
                        rounded-[50%] \r
                        absolute \r
                        bottom-15 \r
                        right-15`})]}),c.jsxs("div",{className:`\r
                     h-180\r
                     lg:h-190 \r
                     relative \r
                     group \r
                     cursor-zoom-in`,onClick:()=>v(s[5]),children:[c.jsx("img",{className:`\r
                        w-[800px] \r
                        h-full \r
                        object-cover \r
                        group-hover:border-8 border-[#FFF9D6] duration-300 ease-in`,src:s[5],alt:"Leon Image 6"}),c.jsx(k,{icon:J,className:`\r
                        group-hover:text-[#2C3E4F] \r
                        group-hover:bg-[#FFF9D6] \r
                        bg-[#2C3E4F] \r
                        duration-300 ease-in  \r
                        text-[#FFF9D6] \r
                        text-4xl\r
                        px-6\r
                        py-5 \r
                        rounded-[50%] \r
                        absolute \r
                        bottom-15 \r
                        right-15`})]})]}),c.jsx("div",{className:"flex justify-center pt-20 lg:pr-30",children:c.jsxs("div",{children:[c.jsx("div",{className:"flex justify-center",children:c.jsx("h3",{className:`\r
                           max-w-150 \r
                           text-[2.5rem] \r
                           text-white \r
                           font-bold \r
                           pb-50\r
                           px-12\r
                           lg:px-0`,children:m})}),c.jsxs("div",{className:`\r
                        h-200\r
                        lg:h-300 \r
                        relative \r
                        group\r
                        cursor-zoom-in`,onClick:()=>v(s[6]),children:[c.jsx("img",{className:`\r
                           w-[800px]\r
                           lg:w-[700px] \r
                           h-full \r
                           object-cover \r
                           group-hover:border-8 border-[#FFF9D6] duration-300 ease-in`,src:s[6],alt:"Leon Image 7"}),c.jsx(k,{icon:J,className:`\r
                        group-hover:text-[#2C3E4F] \r
                        group-hover:bg-[#FFF9D6] \r
                        bg-[#2C3E4F] \r
                           duration-300 ease-in  \r
                        text-[#FFF9D6] \r
                           text-4xl\r
                           px-6\r
                           py-5 \r
                           rounded-[50%] \r
                           absolute \r
                           bottom-15 \r
                           right-15`})]})]})})]}),p&&c.jsxs("div",{onClick:x,className:`\r
                  flex \r
                  justify-center \r
                  items-center \r
                  fixed \r
                  inset-0 \r
                  bg-black \r
                  bg-opacity-80 \r
                  z-50 \r
                  cursor-zoom-out`,children:[c.jsx("img",{className:`
                        max-w-[100%] 
                        max-h-[100%] 
                        animate__animated ${g?"animate__zoomOut":"animate__zoomIn"}
                        `,src:p,alt:"Image Expanded"}),c.jsx(k,{icon:Ot,className:`\r
                     text-[#a7a1a1]\r
                     text-7xl\r
                     hover:text-[#ffffff]\r
                     duration-300 ease-in\r
                     absolute\r
                     top-13 \r
                     right-13\r
                     sm:top-20\r
                     sm:right-20 \r
                     cursor-pointer`})]})]})})}function s3(){const{name:l,phrase:u,description:o,images:s,phrase2:f,description2:m,description3:p}=fn[1],{openImage:v,handleOpen:x,handleClose:g,isClosing:N}=_t();return c.jsx(c.Fragment,{children:c.jsxs("section",{id:"luis",className:`\r
            flex flex-col \r
            justify-center \r
            items-center \r
            gap-40 \r
            bg-[linear-gradient(to_bottom,_#87584d,_#5B3A33)] \r
            pt-40`,children:[c.jsxs("div",{className:"lg:hidden",children:[c.jsx("h1",{className:`\r
                  text-[5rem] \r
                  font-bold\r
                  uppercase \r
                  text-[#fff]\r
                  pb-20\r
                  px-12\r
                  lg:px-0`,children:l}),c.jsx("h2",{className:`\r
                  max-w-170 \r
                  text-[3.5rem] \r
                  font-bold \r
                  text-[#FFF200]\r
                  pb-10\r
                  px-12\r
                  lg:px-0`,children:u}),c.jsx("h3",{className:`\r
                  max-w-180 \r
                  text-[2.5rem] \r
                  text-white \r
                  font-bold \r
                  px-12\r
                  lg:px-0`,children:o})]}),c.jsxs("div",{className:"grid lg:grid-cols-2 gap-15",children:[c.jsxs("div",{className:"grid grid-cols-1 grid-rows-1 gap-15",children:[c.jsxs("div",{className:`\r
                     h-[600px]\r
                     lg:h-[890px] \r
                     relative\r
                     group \r
                     cursor-zoom-in`,onClick:()=>x(s[0]),children:[c.jsx("img",{className:`\r
                        w-[800px] \r
                        h-full\r
                        object-cover \r
                        group-hover:border-8 border-[#FFF9D6] duration-300 ease-in`,src:s[0],alt:"Luis Image 1"}),c.jsx(k,{icon:J,className:`\r
                        group-hover:text-[#2C3E4F] \r
                        group-hover:bg-[#FFF9D6] \r
                        bg-[#2C3E4F]\r
                        duration-300 ease-in \r
                        text-[#FFF9D6] \r
                        text-4xl\r
                        px-6 \r
                        py-5 \r
                        rounded-[50%] \r
                        absolute \r
                        bottom-15 \r
                        right-15`})]}),c.jsxs("div",{className:`\r
                     h-200 \r
                     lg:h-300\r
                     relative \r
                     group \r
                     cursor-zoom-in`,onClick:()=>x(s[1]),children:[c.jsx("img",{className:`\r
                        w-[800px] \r
                        h-full \r
                        object-cover \r
                        group-hover:border-8 border-[#FFF9D6] duration-300 ease-in`,src:s[1],alt:"Luis Image 2"}),c.jsx(k,{icon:J,className:`\r
                        group-hover:text-[#2C3E4F] \r
                        group-hover:bg-[#FFF9D6] \r
                        bg-[#2C3E4F]\r
                        duration-300 ease-in \r
                        text-[#FFF9D6] \r
                        text-4xl\r
                        px-6 \r
                        py-5 \r
                        rounded-[50%] \r
                        absolute \r
                        bottom-15 \r
                        right-15`})]})]}),c.jsx("div",{className:"lg:pr-40",children:c.jsxs("div",{className:"flex flex-col items-center",children:[c.jsxs("div",{className:"hidden lg:block",children:[c.jsx("h1",{className:`\r
                           text-[5rem] \r
                           font-bold\r
                           uppercase \r
                           text-[#fff]\r
                           pb-20`,children:l}),c.jsx("h2",{className:`\r
                           max-w-170 \r
                           text-[3.5rem] \r
                           font-bold \r
                           pb-10\r
                           bg-gradient-to-r from-[#FFF200] to-[#999100] bg-clip-text text-transparent`,children:u}),c.jsx("h3",{className:`\r
                           max-w-180 \r
                           text-[2.5rem] \r
                           text-white \r
                           font-bold \r
                           pb-50`,children:o})]}),c.jsxs("div",{className:`\r
                        h-180\r
                        relative \r
                        group\r
                        cursor-zoom-in`,onClick:()=>x(s[2]),children:[c.jsx("img",{className:`\r
                           w-[800px]\r
                           lg:w-[700px] \r
                           h-full \r
                           object-cover \r
                           group-hover:border-8 border-[#FFF9D6] duration-300 ease-in`,src:s[2],alt:"Luis Image 3"}),c.jsx(k,{icon:J,className:`\r
                        group-hover:text-[#2C3E4F] \r
                        group-hover:bg-[#FFF9D6] \r
                        bg-[#2C3E4F]\r
                           duration-300 ease-in \r
                        text-[#FFF9D6] \r
                           text-4xl\r
                           px-6 \r
                           py-5 \r
                           rounded-[50%] \r
                           absolute \r
                           bottom-15 \r
                           right-15`})]}),c.jsx("h3",{className:`\r
                        max-w-180 \r
                        text-[2.5rem] \r
                        text-white \r
                        font-bold \r
                        pt-50\r
                        px-12\r
                        lg:px-0`,children:m})]})})]}),c.jsx("div",{className:"lg:w-screen lg:h-screen",children:c.jsx("img",{className:"w-full h-full object-cover",src:s[3],alt:"Luis Image 4"})}),c.jsxs("div",{className:"grid lg:grid-cols-2 gap-15",children:[c.jsx("div",{className:"pt-20 lg:pl-40",children:c.jsxs("div",{className:"flex flex-col items-center justify-center",children:[c.jsx("h3",{className:`\r
                        max-w-180 \r
                        text-[2.5rem] \r
                        text-white \r
                        font-bold \r
                        pb-50\r
                        px-12\r
                        lg:px-0`,children:p}),c.jsxs("div",{className:`\r
                        h-230\r
                        lg:h-300 \r
                        relative \r
                        group\r
                        cursor-zoom-in`,onClick:()=>x(s[4]),children:[c.jsx("img",{className:`\r
                           w-[800px]\r
                           lg:w-[700px] \r
                           h-full \r
                           object-cover \r
                           group-hover:border-8 border-[#FFF9D6] duration-300 ease-in`,src:s[4],alt:"Luis Image 5"}),c.jsx(k,{icon:J,className:`\r
                        group-hover:text-[#2C3E4F] \r
                        group-hover:bg-[#FFF9D6] \r
                        bg-[#2C3E4F]\r
                           duration-300 ease-in \r
                        text-[#FFF9D6] \r
                           text-4xl\r
                           px-6 \r
                           py-5 \r
                           rounded-[50%] \r
                           absolute \r
                           bottom-15 \r
                           right-15`})]})]})}),c.jsxs("div",{className:"grid grid-cols-1 grid-rows-1 gap-15 pb-50",children:[c.jsx("div",{className:"flex flex-col items-center",children:c.jsx("h2",{className:`\r
                        max-w-170 \r
                        text-[3.5rem] \r
                        font-bold \r
                        text-[#FFF200]\r
                        pb-20\r
                        pt-20\r
                        lg:pt-0\r
                        px-12\r
                        lg:px-0`,children:f})}),c.jsxs("div",{className:`\r
                     h-240\r
                     lg:h-[890px] \r
                     relative\r
                     group \r
                     cursor-zoom-in`,onClick:()=>x(s[5]),children:[c.jsx("img",{className:`\r
                        w-[800px] \r
                        h-full\r
                        object-cover \r
                        group-hover:border-8 border-[#FFF9D6] duration-300 ease-in`,src:s[5],alt:"Luis Image 6"}),c.jsx(k,{icon:J,className:`\r
                        group-hover:text-[#2C3E4F] \r
                        group-hover:bg-[#FFF9D6] \r
                        bg-[#2C3E4F]\r
                           duration-300 ease-in \r
                        text-[#FFF9D6] \r
                           text-4xl\r
                           px-6 \r
                           py-5 \r
                           rounded-[50%] \r
                           absolute \r
                           bottom-15 \r
                           right-15`})]}),c.jsxs("div",{className:`\r
                     h-190 \r
                     relative \r
                     group \r
                     cursor-zoom-in`,onClick:()=>x(s[6]),children:[c.jsx("img",{className:`\r
                        w-[800px] \r
                        h-full \r
                        object-cover \r
                        group-hover:border-8 border-[#FFF9D6] duration-300 ease-in`,src:s[6],alt:"Luis Image 7"}),c.jsx(k,{icon:J,className:`\r
                        group-hover:text-[#2C3E4F] \r
                        group-hover:bg-[#FFF9D6] \r
                        bg-[#2C3E4F]\r
                           duration-300 ease-in \r
                        text-[#FFF9D6] \r
                           text-4xl\r
                           px-6 \r
                           py-5 \r
                           rounded-[50%] \r
                           absolute \r
                           bottom-15 \r
                           right-15`})]})]})]}),v&&c.jsxs("div",{onClick:g,className:`\r
                  flex \r
                  justify-center \r
                  items-center \r
                  fixed \r
                  inset-0 \r
                  bg-black \r
                  bg-opacity-80 \r
                  z-50 \r
                  cursor-zoom-out`,children:[c.jsx("img",{className:`
                        max-w-[100%] 
                        max-h-[100%] 
                        animate__animated ${N?"animate__zoomOut":"animate__zoomIn"}
                        `,src:v,alt:"Image Expanded"}),c.jsx(k,{icon:Ot,className:`\r
                     text-[#a7a1a1]\r
                     text-7xl\r
                     hover:text-[#ffffff] \r
                     duration-300 ease-in\r
                     absolute \r
                     top-13 \r
                     right-13\r
                     sm:top-20\r
                     sm:right-20  \r
                     cursor-pointer`})]})]})})}function u3(){const{name:l,phrase:u,description:o,images:s,phrase2:f,description2:m}=fn[2],{openImage:p,handleOpen:v,handleClose:x,isClosing:g}=_t();return c.jsx(c.Fragment,{children:c.jsxs("section",{id:"ada",className:`\r
            flex flex-col \r
            justify-center \r
            items-center \r
            gap-40 \r
            bg-[linear-gradient(to_bottom,_#5C1B1B,_#542121)] \r
            py-50`,children:[c.jsxs("div",{className:"grid lg:grid-cols-2 gap-15",children:[c.jsx("div",{className:"flex justify-center lg:pl-40",children:c.jsxs("div",{children:[c.jsx("h1",{className:`\r
                        text-[5rem] \r
                        font-bold\r
                        uppercase \r
                        text-[#fff]\r
                        pb-20\r
                        px-12\r
                        lg:px-0`,children:l}),c.jsx("h2",{className:`\r
                        max-w-180 \r
                        text-[3.5rem] \r
                        font-bold \r
                        text-[#FFF200]\r
                        pb-10\r
                        px-12\r
                        lg:px-0`,children:u}),c.jsx("h3",{className:`\r
                        max-w-180 \r
                        text-[2.5rem] \r
                        text-white \r
                        font-bold \r
                        pb-50\r
                        px-12\r
                        lg:px-0`,children:o}),c.jsxs("div",{className:`\r
                        h-250\r
                        lg:h-300 \r
                        relative \r
                        group\r
                        cursor-zoom-in`,onClick:()=>v(s[0]),children:[c.jsx("img",{className:`\r
                           w-[800px]\r
                           lg:w-[700px] \r
                           h-full \r
                           object-cover \r
                           group-hover:border-8 border-[#FFF9D6] duration-300 ease-in`,src:s[0],alt:"Ada Image 1"}),c.jsx(k,{icon:J,className:`\r
                           group-hover:text-[#2C3E4F] \r
                           group-hover:bg-[#FFF9D6] \r
                           bg-[#2C3E4F] \r
                           duration-300 ease-in\r
                           text-[#FFF9D6] \r
                           text-4xl\r
                           px-6 \r
                           py-5 \r
                           rounded-[50%] \r
                           absolute \r
                           bottom-15 \r
                           right-15`})]})]})}),c.jsxs("div",{className:"grid grid-cols-1 grid-rows-1 gap-15",children:[c.jsxs("div",{className:`\r
                     h-200\r
                     lg:h-full\r
                     relative\r
                     group \r
                     cursor-zoom-in`,onClick:()=>v(s[1]),children:[c.jsx("img",{className:`\r
                        w-[800px] \r
                        h-full \r
                        object-cover \r
                        group-hover:border-8 border-[#FFF9D6] duration-300 ease-in`,src:s[1],alt:"Ada Image 2"}),c.jsx(k,{icon:J,className:`\r
                           group-hover:text-[#2C3E4F] \r
                           group-hover:bg-[#FFF9D6] \r
                           bg-[#2C3E4F] \r
                           duration-300 ease-in\r
                           text-[#FFF9D6] \r
                           text-4xl\r
                           px-6 \r
                           py-5 \r
                           rounded-[50%] \r
                           absolute \r
                           bottom-15 \r
                           right-15`})]}),c.jsxs("div",{className:`\r
                     h-190 \r
                     relative \r
                     group \r
                     cursor-zoom-in`,onClick:()=>v(s[2]),children:[c.jsx("img",{className:`\r
                        w-[800px] \r
                        h-full \r
                        object-cover \r
                        group-hover:border-8 border-[#FFF9D6] duration-300 ease-in`,src:s[2],alt:"Ada Image 3"}),c.jsx(k,{icon:J,className:`\r
                           group-hover:text-[#2C3E4F] \r
                           group-hover:bg-[#FFF9D6] \r
                           bg-[#2C3E4F] \r
                           duration-300 ease-in\r
                           text-[#FFF9D6] \r
                           text-4xl\r
                           px-6 \r
                           py-5 \r
                           rounded-[50%] \r
                           absolute \r
                           bottom-15 \r
                           right-15`})]})]})]}),c.jsxs("div",{className:"grid lg:grid-cols-2 gap-15",children:[c.jsxs("div",{className:"grid grid-cols-1 grid-rows-1 gap-15",children:[c.jsx("div",{className:"flex justify-center",children:c.jsx("h2",{className:`\r
                        max-w-170 \r
                        text-[3rem]\r
                        lg:text-[3.5rem] \r
                        font-bold\r
                        text-[#FFF200]\r
                        pb-20\r
                        px-12\r
                        lg:px-0`,children:f})}),c.jsxs("div",{className:`\r
                     h-210\r
                     lg:h-[928px] \r
                     relative\r
                     group \r
                     cursor-zoom-in`,onClick:()=>v(s[3]),children:[c.jsx("img",{className:`\r
                        w-[800px] \r
                        h-full\r
                        object-cover \r
                        group-hover:border-8 border-[#FFF9D6] duration-300 ease-in`,src:s[3],alt:"Ada Image 4"}),c.jsx(k,{icon:J,className:`\r
                           group-hover:text-[#2C3E4F] \r
                           group-hover:bg-[#FFF9D6] \r
                           bg-[#2C3E4F] \r
                           duration-300 ease-in\r
                           text-[#FFF9D6] \r
                           text-4xl\r
                           px-6 \r
                           py-5 \r
                           rounded-[50%] \r
                           absolute \r
                           bottom-15 \r
                           right-15`})]})]}),c.jsx("div",{className:"flex justify-center pt-20 lg:pr-30",children:c.jsxs("div",{children:[c.jsx("div",{className:"flex justify-center",children:c.jsx("h3",{className:`\r
                           max-w-150 \r
                           text-[2.5rem] \r
                           text-white \r
                           font-bold \r
                           pb-50\r
                           px-12\r
                           lg:px-0`,children:m})}),c.jsxs("div",{className:`\r
                        h-250\r
                        lg:h-300 \r
                        relative \r
                        group\r
                        cursor-zoom-in`,onClick:()=>v(s[4]),children:[c.jsx("img",{className:`\r
                           w-[800px]\r
                           lg:w-[700px] \r
                           h-full \r
                           object-cover \r
                           group-hover:border-8 \r
                           border-[#FFF9D6] \r
                           duration-300 ease-in`,src:s[4],alt:"Ada Image 5"}),c.jsx(k,{icon:J,className:`\r
                           group-hover:text-[#2C3E4F] \r
                           group-hover:bg-[#FFF9D6] \r
                           bg-[#2C3E4F] \r
                           duration-300 ease-in\r
                           text-[#FFF9D6] \r
                           text-4xl\r
                           px-6 \r
                           py-5 \r
                           rounded-[50%] \r
                           absolute \r
                           bottom-15 \r
                           right-15`})]})]})})]}),p&&c.jsxs("div",{onClick:x,className:`\r
                  flex \r
                  justify-center \r
                  items-center \r
                  fixed \r
                  inset-0 \r
                  bg-black \r
                  bg-opacity-80 \r
                  z-50 \r
                  cursor-zoom-out`,children:[c.jsx("img",{className:`
                        max-w-[100%] 
                        max-h-[100%] 
                        animate__animated ${g?"animate__zoomOut":"animate__zoomIn"}
                        `,src:p,alt:"Image Expanded"}),c.jsx(k,{icon:Ot,className:`\r
                     text-7xl\r
                     text-[#a7a1a1]\r
                     hover:text-[#ffffff] \r
                     duration-300 ease-in\r
                     absolute \r
                     top-13 \r
                     right-13\r
                     sm:top-20\r
                     sm:right-20  \r
                     cursor-pointer`})]})]})})}function o3(){const{name:l,phrase:u,description:o,images:s,phrase2:f,description2:m}=fn[3],{openImage:p,handleOpen:v,handleClose:x,isClosing:g}=_t();return c.jsx(c.Fragment,{children:c.jsxs("section",{id:"ashley",className:`\r
            flex flex-col \r
            justify-center \r
            items-center \r
            gap-40 \r
            bg-[linear-gradient(to_bottom,_#81623a,_#4A3A27)] \r
            py-50`,children:[c.jsxs("div",{className:"grid lg:grid-cols-2 gap-15",children:[c.jsx("div",{className:"flex justify-center lg:pl-40",children:c.jsxs("div",{children:[c.jsx("h1",{className:`\r
                        text-[5rem] \r
                        font-bold\r
                        uppercase\r
                        text-[#fff] \r
                        pb-20\r
                        px-12\r
                        lg:px-0`,children:l}),c.jsx("h2",{className:`\r
                        max-w-170 \r
                        text-[3.5rem] \r
                        font-bold \r
                        text-[#FFF200]\r
                        pb-10\r
                        px-12\r
                        lg:px-0`,children:u}),c.jsx("h3",{className:`\r
                        max-w-180 \r
                        text-[2.5rem] \r
                        text-white \r
                        font-bold \r
                        pb-50\r
                        px-12\r
                        lg:px-0`,children:o}),c.jsxs("div",{className:`\r
                        h-230\r
                        lg:h-300 \r
                        relative \r
                        group\r
                        cursor-zoom-in`,onClick:()=>v(s[0]),children:[c.jsx("img",{className:`\r
                           w-[800px]\r
                           lg:w-[700px] \r
                           h-full \r
                           object-cover \r
                           group-hover:border-8 border-[#FFF9D6] duration-300 ease-in`,src:s[0],alt:"Ashley Image 1"}),c.jsx(k,{icon:J,className:`\r
                           group-hover:text-[#2C3E4F] \r
                           group-hover:bg-[#FFF9D6] \r
                           bg-[#2C3E4F] \r
                           duration-300 ease-in  \r
                           text-[#FFF9D6] \r
                           text-4xl\r
                           px-6 \r
                           py-5 \r
                           rounded-[50%] \r
                           absolute \r
                           bottom-15 \r
                           right-15`})]})]})}),c.jsxs("div",{className:"grid grid-cols-1 grid-rows-1 gap-15",children:[c.jsxs("div",{className:`\r
                     h-200\r
                     lg:h-full\r
                     relative\r
                     group \r
                     cursor-zoom-in`,onClick:()=>v(s[1]),children:[c.jsx("img",{className:`\r
                        w-[800px] \r
                        h-full \r
                        object-cover \r
                        group-hover:border-8 border-[#FFF9D6] duration-300 ease-in`,src:s[1],alt:"Ashley Image 2"}),c.jsx(k,{icon:J,className:`\r
                           group-hover:text-[#2C3E4F] \r
                           group-hover:bg-[#FFF9D6] \r
                           bg-[#2C3E4F] \r
                           duration-300 ease-in  \r
                           text-[#FFF9D6] \r
                           text-4xl\r
                           px-6 \r
                           py-5 \r
                           rounded-[50%] \r
                           absolute \r
                           bottom-15 \r
                           right-15`})]}),c.jsxs("div",{className:`\r
                     h-180\r
                     lg:h-190 \r
                     relative \r
                     group \r
                     cursor-zoom-in`,onClick:()=>v(s[2]),children:[c.jsx("img",{className:`\r
                        w-[800px] \r
                        h-full \r
                        object-cover \r
                        group-hover:border-8 border-[#FFF9D6] duration-300 ease-in`,src:s[2],alt:"Ashley Image 3"}),c.jsx(k,{icon:J,className:`\r
                           group-hover:text-[#2C3E4F] \r
                           group-hover:bg-[#FFF9D6] \r
                           bg-[#2C3E4F] \r
                           duration-300 ease-in  \r
                           text-[#FFF9D6] \r
                           text-4xl\r
                           px-6 \r
                           py-5 \r
                           rounded-[50%] \r
                           absolute \r
                           bottom-15 \r
                           right-15`})]})]})]}),c.jsxs("div",{className:"grid lg:grid-cols-2 gap-15",children:[c.jsxs("div",{className:"grid grid-cols-1 grid-rows-1 gap-15",children:[c.jsx("div",{className:"flex justify-center",children:c.jsx("h2",{className:`\r
                        max-w-170 \r
                        text-[3.5rem] \r
                        font-bold\r
                        text-[#FFF200]\r
                        pb-20\r
                        px-12\r
                        lg:px-0`,children:f})}),c.jsxs("div",{className:`\r
                     h-210\r
                     lg:h-[928px] \r
                        relative\r
                        group \r
                        cursor-zoom-in`,onClick:()=>v(s[3]),children:[c.jsx("img",{className:`\r
                        w-[800px] \r
                        h-full\r
                        object-cover \r
                        group-hover:border-8 border-[#FFF9D6] duration-300 ease-in`,src:s[3],alt:"Ashley Image 5"}),c.jsx(k,{icon:J,className:`\r
                           group-hover:text-[#2C3E4F] \r
                           group-hover:bg-[#FFF9D6] \r
                           bg-[#2C3E4F] \r
                           duration-300 ease-in  \r
                           text-[#FFF9D6] \r
                           text-4xl\r
                           px-6 \r
                           py-5 \r
                           rounded-[50%] \r
                           absolute \r
                           bottom-15 \r
                           right-15`})]})]}),c.jsx("div",{className:"flex justify-center pt-20 lg:pr-30",children:c.jsxs("div",{children:[c.jsx("div",{className:"flex justify-center",children:c.jsx("h3",{className:`\r
                           max-w-150 \r
                           text-[2.5rem] \r
                           text-white \r
                           font-bold \r
                           pb-50\r
                           px-12\r
                           lg:px-0`,children:m})}),c.jsxs("div",{className:`\r
                        h-190\r
                        lg:h-300 \r
                        relative \r
                        group\r
                        cursor-zoom-in`,onClick:()=>v(s[4]),children:[c.jsx("img",{className:`\r
                           w-[800px]\r
                           lg:w-[700px] \r
                           h-full \r
                           object-cover \r
                           group-hover:border-8 border-[#FFF9D6] duration-300 ease-in`,src:s[4],alt:"Ashley Image 5"}),c.jsx(k,{icon:J,className:`\r
                           group-hover:text-[#2C3E4F] \r
                           group-hover:bg-[#FFF9D6] \r
                           bg-[#2C3E4F] \r
                           duration-300 ease-in  \r
                           text-[#FFF9D6] \r
                           text-4xl\r
                           px-6 \r
                           py-5 \r
                           rounded-[50%] \r
                           absolute \r
                           bottom-15 \r
                           right-15`})]})]})})]}),p&&c.jsxs("div",{onClick:x,className:`\r
                  flex \r
                  justify-center \r
                  items-center \r
                  fixed \r
                  inset-0 \r
                  bg-black \r
                  bg-opacity-80 \r
                  z-50 \r
                  cursor-zoom-out`,children:[c.jsx("img",{className:`
                        max-w-[100%] 
                        max-h-[100%] 
                        animate__animated ${g?"animate__zoomOut":"animate__zoomIn"}
                        `,src:p,alt:"Image Expanded"}),c.jsx(k,{icon:Ot,className:`\r
                     text-[#a7a1a1]\r
                     text-7xl\r
                     hover:text-[#ffffff] \r
                     duration-300 ease-in\r
                     absolute \r
                     top-13 \r
                     right-13\r
                     sm:top-20\r
                     sm:right-20  \r
                     cursor-pointer`})]})]})})}function c3(){const{name:l,phrase:u,description:o,images:s,phrase2:f,description2:m}=fn[4],{openImage:p,handleOpen:v,handleClose:x,isClosing:g}=_t();return c.jsx(c.Fragment,{children:c.jsxs("section",{id:"merchant",className:`\r
            flex flex-col \r
            justify-center \r
            items-center \r
            gap-40 \r
            bg-[linear-gradient(to_bottom,_#2C2F4A,_#3C4065)] \r
            py-50`,children:[c.jsxs("div",{className:"grid lg:grid-cols-2 gap-15",children:[c.jsxs("div",{className:"grid grid-cols-1 grid-rows-1 gap-15",children:[c.jsxs("div",{className:"lg:hidden",children:[c.jsx("h1",{className:`\r
                           text-[5rem] \r
                           font-bold\r
                           uppercase \r
                           text-[#fff]\r
                           pb-20\r
                           px-12\r
                           lg:px-0`,children:l}),c.jsx("h2",{className:`\r
                           max-w-180 \r
                           text-[3.5rem] \r
                           font-bold \r
                           text-[#FFF200]\r
                           pb-10\r
                           px-12\r
                           lg:px-0`,children:f}),c.jsx("h3",{className:`\r
                           max-w-190 \r
                           text-[2.5rem] \r
                           text-white \r
                           font-bold \r
                           pb-40\r
                           px-12\r
                           lg:px-0`,children:o})]}),c.jsxs("div",{className:`\r
                     h-260\r
                     lg:h-[890px]\r
                     relative\r
                     group \r
                     cursor-zoom-in`,onClick:()=>v(s[0]),children:[c.jsx("img",{className:`\r
                        w-[800px] \r
                        h-full\r
                        object-cover \r
                        group-hover:border-8 \r
                        border-[#FFF9D6] \r
                        duration-300 ease-in`,src:s[0],alt:"Mercador Image 1"}),c.jsx(k,{icon:J,className:`\r
                        group-hover:text-[#2C3E4F] \r
                        group-hover:bg-[#FFF9D6] \r
                        duration-300 ease-in \r
                        text-[#FFF9D6] \r
                        text-4xl\r
                        px-6 \r
                        py-5 \r
                        rounded-[50%] \r
                        bg-[#2C3E4F] \r
                        absolute \r
                        bottom-15 \r
                        right-15`})]}),c.jsx("div",{className:"flex justify-center",children:c.jsx("h2",{className:`\r
                           max-w-190 \r
                           text-[3.5rem] \r
                           font-bold \r
                           py-20\r
                           px-12\r
                           lg:px-0\r
                           text-[#FFF200]`,children:u})}),c.jsxs("div",{className:`\r
                     h-230 \r
                     relative \r
                     group \r
                     cursor-zoom-in`,onClick:()=>v(s[1]),children:[c.jsx("img",{className:`\r
                        w-[800px] \r
                        h-full \r
                        object-cover \r
                        group-hover:border-8 \r
                        border-[#FFF9D6] \r
                        duration-300 ease-in`,src:s[1],alt:"MercadorImage 2"}),c.jsx(k,{icon:J,className:`\r
                        group-hover:text-[#2C3E4F] \r
                        group-hover:bg-[#FFF9D6] \r
                        duration-300 ease-in \r
                        text-[#FFF9D6] \r
                        text-4xl\r
                        px-6 \r
                        py-5 \r
                        rounded-[50%] \r
                        bg-[#2C3E4F] \r
                        absolute \r
                        bottom-15 \r
                        right-15`})]})]}),c.jsx("div",{className:"lg:pr-40",children:c.jsxs("div",{className:"flex flex-col items-center gap-20",children:[c.jsxs("div",{className:"hidden lg:block",children:[c.jsx("h1",{className:`\r
                           text-[5rem] \r
                           font-bold\r
                           uppercase \r
                           text-[#fff]\r
                           pb-20`,children:l}),c.jsx("h2",{className:`\r
                           max-w-180 \r
                           text-[3.5rem] \r
                           font-bold \r
                           text-[#FFF200]\r
                           pb-10`,children:f}),c.jsx("h3",{className:`\r
                           max-w-190 \r
                           text-[2.5rem] \r
                           text-white \r
                           font-bold \r
                           pb-50`,children:o})]}),c.jsxs("div",{className:`\r
                        h-180\r
                        relative \r
                        group\r
                        cursor-zoom-in`,onClick:()=>v(s[2]),children:[c.jsx("img",{className:`\r
                           w-[800px]\r
                           lg:w-[700px] \r
                           h-full \r
                           object-cover \r
                           group-hover:border-8 \r
                           border-[#FFF9D6] \r
                           duration-300 ease-in`,src:s[2],alt:"Mercador Image 3"}),c.jsx(k,{icon:J,className:`\r
                        group-hover:text-[#2C3E4F] \r
                        group-hover:bg-[#FFF9D6] \r
                        duration-300 ease-in \r
                        text-[#FFF9D6] \r
                        text-4xl\r
                        px-6 \r
                        py-5 \r
                        rounded-[50%] \r
                        bg-[#2C3E4F] \r
                        absolute \r
                        bottom-15 \r
                        right-15`})]}),c.jsx("h3",{className:`\r
                        max-w-180 \r
                        text-[2.5rem] \r
                        text-white \r
                        font-bold \r
                        py-15\r
                        px-12\r
                        lg:px-0`,children:m}),c.jsxs("div",{className:`\r
                        h-180\r
                        relative \r
                        group\r
                        cursor-zoom-in`,onClick:()=>v(s[3]),children:[c.jsx("img",{className:`\r
                           w-[800px]\r
                           lg:w-[700px] \r
                           h-full \r
                           object-cover \r
                           group-hover:border-8 \r
                           border-[#FFF9D6] \r
                           duration-300 ease-in`,src:s[3],alt:"Mercador Image 4"}),c.jsx(k,{icon:J,className:`\r
                        group-hover:text-[#2C3E4F] \r
                        group-hover:bg-[#FFF9D6] \r
                        duration-300 ease-in \r
                        text-[#FFF9D6] \r
                        text-4xl\r
                        px-6 \r
                        py-5 \r
                        rounded-[50%] \r
                        bg-[#2C3E4F] \r
                        absolute \r
                        bottom-15 \r
                        right-15`})]})]})})]}),c.jsx("div",{className:"lg:w-screen lg:h-screen",children:c.jsx("img",{className:"w-full h-full object-cover",src:s[4],alt:"MercadorImage 5"})}),p&&c.jsxs("div",{onClick:x,className:`\r
                  flex \r
                  justify-center \r
                  items-center \r
                  fixed \r
                  inset-0 \r
                  bg-black \r
                  bg-opacity-80 \r
                  z-50 \r
                  cursor-zoom-out`,children:[c.jsx("img",{className:`
                        max-w-[100%] 
                        max-h-[100%] 
                        animate__animated ${g?"animate__zoomOut":"animate__zoomIn"}
                        `,src:p,alt:"Image Expanded"}),c.jsx(k,{icon:Ot,className:`\r
                     text-[#a7a1a1]\r
                     text-7xl\r
                     hover:text-[#ffffff] \r
                     duration-300 ease-in\r
                     absolute \r
                     top-13 \r
                     right-13\r
                     sm:top-20\r
                     sm:right-20  \r
                     cursor-pointer`})]})]})})}function f3(){const{name:l,phrase:u,description:o,images:s,phrase2:f,description2:m}=fn[5],{openImage:p,handleOpen:v,handleClose:x,isClosing:g}=_t();return c.jsx(c.Fragment,{children:c.jsxs("section",{id:"bitores",className:`\r
            flex flex-col \r
            justify-center \r
            items-center \r
            gap-40 \r
            bg-[linear-gradient(to_bottom,_#2a1515,_#2a1b1b)] \r
            py-50`,children:[c.jsxs("div",{className:"grid lg:grid-cols-2 gap-15",children:[c.jsx("div",{className:"flex justify-center lg:pl-40",children:c.jsxs("div",{children:[c.jsx("h1",{className:`\r
                        text-[5rem] \r
                        font-bold\r
                        uppercase \r
                        text-[#fff]\r
                        pb-20\r
                        px-12\r
                        lg:px-0`,children:l}),c.jsx("h2",{className:`\r
                        max-w-170 \r
                        text-[3.5rem] \r
                        font-bold \r
                        text-[#FFF200]\r
                        pb-10\r
                        px-12\r
                        lg:px-0`,children:u}),c.jsx("h3",{className:`\r
                        max-w-180 \r
                        text-[2.5rem] \r
                        text-white \r
                        font-bold \r
                        pb-50\r
                        px-12\r
                        lg:px-0`,children:o}),c.jsxs("div",{className:`\r
                        h-260\r
                        lg:h-300 \r
                        relative \r
                        group\r
                        cursor-zoom-in`,onClick:()=>v(s[0]),children:[c.jsx("img",{className:`\r
                           w-[800px]\r
                           lg:w-[700px] \r
                           h-full \r
                           object-cover \r
                           group-hover:border-8 \r
                           border-[#FFF9D6] \r
                           duration-300 ease-in`,src:s[0],alt:"Bitores Image 1"}),c.jsx(k,{icon:J,className:`\r
                           group-hover:text-[#2C3E4F] \r
                           group-hover:bg-[#FFF9D6]\r
                           bg-[#2C3E4F] \r
                           duration-300 ease-in \r
                           text-[#FFF9D6] \r
                           text-4xl\r
                           px-6 \r
                           py-5 \r
                           rounded-[50%] \r
                           absolute \r
                           bottom-15 \r
                           right-15`})]})]})}),c.jsxs("div",{className:"grid grid-cols-1 grid-rows-1 gap-15",children:[c.jsxs("div",{className:`\r
                     lg:h-full\r
                     h-220\r
                     relative\r
                     group \r
                     cursor-zoom-in`,onClick:()=>v(s[1]),children:[c.jsx("img",{className:`\r
                        w-[800px] \r
                        h-full \r
                        object-cover \r
                        group-hover:border-8 \r
                        border-[#FFF9D6] \r
                        duration-300 ease-in`,src:s[1],alt:"Bitores Image 2"}),c.jsx(k,{icon:J,className:`\r
                           group-hover:text-[#2C3E4F] \r
                           group-hover:bg-[#FFF9D6]\r
                           bg-[#2C3E4F] \r
                           duration-300 ease-in \r
                           text-[#FFF9D6] \r
                           text-4xl\r
                           px-6 \r
                           py-5 \r
                           rounded-[50%] \r
                           absolute \r
                           bottom-15 \r
                           right-15`})]}),c.jsxs("div",{className:`\r
                     h-190 \r
                     relative \r
                     group \r
                     cursor-zoom-in`,onClick:()=>v(s[2]),children:[c.jsx("img",{className:`\r
                        w-[800px] \r
                        h-full \r
                        object-cover \r
                        group-hover:border-8 \r
                        border-[#FFF9D6] \r
                        duration-300 ease-in`,src:s[2],alt:"Bitores Image 3"}),c.jsx(k,{icon:J,className:`\r
                           group-hover:text-[#2C3E4F] \r
                           group-hover:bg-[#FFF9D6]\r
                           bg-[#2C3E4F] \r
                           duration-300 ease-in \r
                           text-[#FFF9D6] \r
                           text-4xl\r
                           px-6 \r
                           py-5 \r
                           rounded-[50%] \r
                           absolute \r
                           bottom-15 \r
                           right-15`})]})]})]}),c.jsxs("div",{className:"grid lg:grid-cols-2 gap-15",children:[c.jsxs("div",{className:"grid grid-cols-1 grid-rows-1 gap-15",children:[c.jsx("div",{className:"flex justify-center",children:c.jsx("h2",{className:`\r
                        max-w-170 \r
                        text-[3.5rem] \r
                        font-bold\r
                        text-[#FFF200] \r
                        pb-20\r
                        px-12\r
                        lg:px-0`,children:f})}),c.jsxs("div",{className:`\r
                     h-260\r
                     lg:h-[928px] \r
                        relative\r
                        group \r
                        cursor-zoom-in`,onClick:()=>v(s[3]),children:[c.jsx("img",{className:`\r
                        w-[800px] \r
                        h-full \r
                        object-cover \r
                        group-hover:border-8 \r
                        border-[#FFF9D6] \r
                        duration-300 ease-in`,src:s[3],alt:"Bitores Image 4"}),c.jsx(k,{icon:J,className:`\r
                           group-hover:text-[#2C3E4F] \r
                           group-hover:bg-[#FFF9D6]\r
                           bg-[#2C3E4F] \r
                           duration-300 ease-in \r
                           text-[#FFF9D6] \r
                           text-4xl\r
                           px-6 \r
                           py-5 \r
                           rounded-[50%] \r
                           absolute \r
                           bottom-15 \r
                           right-15`})]})]}),c.jsx("div",{className:"flex justify-center pt-20 lg:pr-30",children:c.jsxs("div",{children:[c.jsx("div",{className:"flex justify-center",children:c.jsx("h3",{className:`\r
                           max-w-150 \r
                           text-[2.5rem] \r
                           text-white \r
                           font-bold \r
                           pb-50\r
                           px-12\r
                           lg:px-0`,children:m})}),c.jsxs("div",{className:`\r
                        h-190\r
                        lg:h-300 \r
                        relative \r
                        group\r
                        cursor-zoom-in`,onClick:()=>v(s[4]),children:[c.jsx("img",{className:`\r
                           w-[800px]\r
                           lg:w-[700px] \r
                           h-full \r
                           object-cover \r
                           group-hover:border-8 \r
                           border-[#FFF9D6] \r
                           duration-300 ease-in`,src:s[4],alt:"Bitores Image 5"}),c.jsx(k,{icon:J,className:`\r
                           group-hover:text-[#2C3E4F] \r
                           group-hover:bg-[#FFF9D6]\r
                           bg-[#2C3E4F] \r
                           duration-300 ease-in \r
                           text-[#FFF9D6] \r
                           text-4xl\r
                           px-6 \r
                           py-5 \r
                           rounded-[50%] \r
                           absolute \r
                           bottom-15 \r
                           right-15`})]})]})})]}),p&&c.jsxs("div",{onClick:x,className:`\r
                  flex \r
                  justify-center \r
                  items-center \r
                  fixed \r
                  inset-0 \r
                  bg-black \r
                  bg-opacity-80 \r
                  z-50 \r
                  cursor-zoom-out`,children:[c.jsx("img",{className:`
                        max-w-[100%] 
                        max-h-[100%] 
                        animate__animated ${g?"animate__zoomOut":"animate__zoomIn"}
                        `,src:p,alt:"Image Expanded"}),c.jsx(k,{icon:Ot,className:`\r
                     text-[#a7a1a1]\r
                     text-7xl\r
                     hover:text-[#ffffff] \r
                     duration-300 ease-in\r
                     absolute \r
                     top-13 \r
                     right-13\r
                     sm:top-20\r
                     sm:right-20  \r
                     cursor-pointer`})]})]})})}function d3(){const{name:l,phrase:u,description:o,images:s,phrase2:f,description2:m}=fn[6],{openImage:p,handleOpen:v,handleClose:x,isClosing:g}=_t();return c.jsx(c.Fragment,{children:c.jsxs("section",{id:"salazar",className:`\r
            flex flex-col \r
            justify-center \r
            items-center \r
            gap-40 \r
            bg-[linear-gradient(to_bottom,_#58181F,_#5b2329)] \r
            py-50`,children:[c.jsxs("div",{className:"grid lg:grid-cols-2 gap-15",children:[c.jsx("div",{className:"flex justify-center lg:pl-40",children:c.jsxs("div",{children:[c.jsx("h1",{className:`\r
                        text-[5rem] \r
                        font-bold\r
                        uppercase \r
                        text-[#fff]\r
                        pb-20\r
                        px-12\r
                        lg:px-0`,children:l}),c.jsx("h2",{className:`\r
                        max-w-170 \r
                        text-[3.5rem] \r
                        font-bold \r
                        pb-10\r
                        px-12\r
                        lg:px-0\r
                        text-[#FFF200]`,children:u}),c.jsx("h3",{className:`\r
                        max-w-180 \r
                        text-[2.5rem] \r
                        text-white \r
                        font-bold \r
                        pb-50\r
                        px-12\r
                        lg:px-0`,children:o}),c.jsxs("div",{className:`\r
                        h-260\r
                        lg:h-300 \r
                        relative \r
                        group\r
                        cursor-zoom-in`,onClick:()=>v(s[0]),children:[c.jsx("img",{className:`\r
                           w-[800px]\r
                           lg:w-[700px] \r
                           h-full \r
                           object-cover \r
                           group-hover:border-8 \r
                           border-[#FFF9D6] \r
                           duration-300 ease-in`,src:s[0],alt:"Salazar Image 1"}),c.jsx(k,{icon:J,className:`\r
                           group-hover:text-[#2C3E4F] \r
                           group-hover:bg-[#FFF9D6] \r
                           bg-[#2C3E4F]\r
                           duration-300 ease-in \r
                           text-[#FFF9D6] \r
                           text-4xl \r
                           px-6 \r
                           py-5 \r
                           rounded-[50%] \r
                           absolute \r
                           bottom-15 \r
                           right-15`})]})]})}),c.jsxs("div",{className:"grid grid-cols-1 grid-rows-1 gap-15",children:[c.jsxs("div",{className:`\r
                     h-220\r
                     lg:h-full\r
                     relative\r
                     group \r
                     cursor-zoom-in`,onClick:()=>v(s[1]),children:[c.jsx("img",{className:`\r
                        w-[800px] \r
                        h-full \r
                        object-cover \r
                        group-hover:border-8 \r
                        border-[#FFF9D6] \r
                        duration-300 ease-in`,src:s[1],alt:"Salazar Image 2"}),c.jsx(k,{icon:J,className:`\r
                           group-hover:text-[#2C3E4F] \r
                           group-hover:bg-[#FFF9D6] \r
                           bg-[#2C3E4F]\r
                           duration-300 ease-in \r
                           text-[#FFF9D6] \r
                           text-4xl \r
                           px-6 \r
                           py-5 \r
                           rounded-[50%] \r
                           absolute \r
                           bottom-15 \r
                           right-15`})]}),c.jsxs("div",{className:`\r
                     h-190 \r
                     relative \r
                     group \r
                     cursor-zoom-in`,onClick:()=>v(s[2]),children:[c.jsx("img",{className:`\r
                        w-[800px] \r
                        h-full \r
                        object-cover \r
                        group-hover:border-8 \r
                        border-[#FFF9D6] \r
                        duration-300 ease-in`,src:s[2],alt:"Salazar Image 3"}),c.jsx(k,{icon:J,className:`\r
                           group-hover:text-[#2C3E4F] \r
                           group-hover:bg-[#FFF9D6] \r
                           bg-[#2C3E4F]\r
                           duration-300 ease-in \r
                           text-[#FFF9D6] \r
                           text-4xl \r
                           px-6 \r
                           py-5 \r
                           rounded-[50%] \r
                           absolute \r
                           bottom-15 \r
                           right-15`})]})]})]}),c.jsxs("div",{className:"grid lg:grid-cols-2 gap-15",children:[c.jsxs("div",{className:"grid grid-cols-1 grid-rows-1 gap-15",children:[c.jsx("div",{className:"flex justify-center",children:c.jsx("h2",{className:`\r
                        max-w-200 \r
                        text-[3.5rem] \r
                        font-bold\r
                        text-[#FFF200]\r
                        pb-20\r
                        px-12\r
                        lg:px-20`,children:f})}),c.jsxs("div",{className:`\r
                        h-200\r
                        lg:h-[928px] \r
                        relative\r
                        group \r
                        cursor-zoom-in`,onClick:()=>v(s[3]),children:[c.jsx("img",{className:`\r
                        w-[800px] \r
                        h-full \r
                        object-cover \r
                        group-hover:border-8 \r
                        border-[#FFF9D6] \r
                        duration-300 ease-in`,src:s[3],alt:"Salazar Image 4"}),c.jsx(k,{icon:J,className:`\r
                           group-hover:text-[#2C3E4F] \r
                           group-hover:bg-[#FFF9D6] \r
                           bg-[#2C3E4F]\r
                           duration-300 ease-in \r
                           text-[#FFF9D6] \r
                           text-4xl \r
                           px-6 \r
                           py-5 \r
                           rounded-[50%] \r
                           absolute \r
                           bottom-15 \r
                           right-15`})]})]}),c.jsx("div",{className:"flex justify-center pt-10 lg:pr-30",children:c.jsxs("div",{children:[c.jsx("div",{className:"flex justify-center",children:c.jsx("h3",{className:`\r
                           max-w-160 \r
                           text-[2.5rem] \r
                           text-white \r
                           font-bold \r
                           pb-40\r
                           px-12\r
                           lg:px-0`,children:m})}),c.jsxs("div",{className:`\r
                        h-230\r
                        lg:h-300 \r
                        relative \r
                        group\r
                        cursor-zoom-in`,onClick:()=>v(s[4]),children:[c.jsx("img",{className:`\r
                           w-[800px]\r
                           lg:w-[700px] \r
                           h-full \r
                           object-cover \r
                           group-hover:border-8 \r
                           border-[#FFF9D6] \r
                           duration-300 ease-in`,src:s[4],alt:"Salazar Image 5"}),c.jsx(k,{icon:J,className:`\r
                           group-hover:text-[#2C3E4F] \r
                           group-hover:bg-[#FFF9D6] \r
                           bg-[#2C3E4F]\r
                           duration-300 ease-in \r
                           text-[#FFF9D6] \r
                           text-4xl \r
                           px-6 \r
                           py-5 \r
                           rounded-[50%] \r
                           absolute \r
                           bottom-15 \r
                           right-15`})]})]})})]}),p&&c.jsxs("div",{onClick:x,className:`\r
                  flex \r
                  justify-center \r
                  items-center \r
                  fixed \r
                  inset-0 \r
                  bg-black \r
                  bg-opacity-80 \r
                  z-50 \r
                  cursor-zoom-out`,children:[c.jsx("img",{className:`
                        max-w-[100%] 
                        max-h-[100%] 
                        animate__animated ${g?"animate__zoomOut":"animate__zoomIn"}
                        `,src:p,alt:"Image Expanded"}),c.jsx(k,{icon:Ot,className:`\r
                     text-[#a7a1a1]\r
                     hover:text-[#ffffff] \r
                     text-7xl\r
                     duration-300 ease-in\r
                     absolute \r
                     top-13 \r
                     right-13\r
                     sm:top-20\r
                     sm:right-20  \r
                     cursor-pointer`})]})]})})}function m3(){const{name:l,phrase:u,description:o,images:s,phrase2:f,description2:m}=fn[7],{openImage:p,handleOpen:v,handleClose:x,isClosing:g}=_t();return c.jsx(c.Fragment,{children:c.jsxs("section",{id:"krauser",className:`\r
            flex flex-col \r
            justify-center \r
            items-center \r
            gap-40 \r
            bg-[linear-gradient(to_bottom,_#4B5320,_#5E6731)] \r
            py-50`,children:[c.jsxs("div",{className:"grid lg:grid-cols-2 gap-15",children:[c.jsxs("div",{className:"grid grid-cols-1 grid-rows-1 gap-15",children:[c.jsxs("div",{className:"lg:hidden",children:[c.jsx("h1",{className:`\r
                        text-[5rem] \r
                        font-bold\r
                        uppercase \r
                        text-[#fff]\r
                        pb-20\r
                        px-12\r
                        lg:px-0`,children:l}),c.jsx("h2",{className:`\r
                        max-w-180 \r
                        text-[3.5rem] \r
                        font-bold \r
                        text-[#FFF200]\r
                        pb-10\r
                        px-12\r
                        lg:px-0`,children:f}),c.jsx("h3",{className:`\r
                        max-w-190 \r
                        text-[2.5rem] \r
                        text-white \r
                        font-bold \r
                        pb-50\r
                        px-12\r
                        lg:px-0`,children:o})]}),c.jsxs("div",{className:`\r
                     h-270\r
                     lg:h-[890px]\r
                     relative\r
                     group \r
                     cursor-zoom-in`,onClick:()=>v(s[0]),children:[c.jsx("img",{className:`\r
                        w-[800px] \r
                        h-full\r
                        object-cover \r
                        group-hover:border-8 \r
                        border-[#FFF9D6] \r
                        duration-300 ease-in`,src:s[0],alt:"Krauser Image 1"}),c.jsx(k,{icon:J,className:`\r
                           group-hover:text-[#2C3E4F] \r
                           group-hover:bg-[#FFF9D6]\r
                           bg-[#2C3E4F] \r
                           duration-300 ease-in \r
                           text-[#FFF9D6] \r
                           text-4xl\r
                           px-6 \r
                           py-5 \r
                           rounded-[50%] \r
                           absolute \r
                           bottom-15 \r
                           right-15`})]}),c.jsx("div",{className:"flex justify-center",children:c.jsx("h2",{className:`\r
                           max-w-190 \r
                           text-[3.5rem] \r
                           font-bold \r
                           py-20\r
                           px-12\r
                           lg:px-0\r
                           text-[#FFF200]`,children:u})}),c.jsxs("div",{className:`\r
                     h-230\r
                     lg:h-300 \r
                     relative \r
                     group \r
                     cursor-zoom-in`,onClick:()=>v(s[1]),children:[c.jsx("img",{className:`\r
                        w-[800px] \r
                        h-full \r
                        object-cover \r
                        group-hover:border-8 \r
                        border-[#FFF9D6] \r
                        duration-300 ease-in`,src:s[1],alt:"Krauser Image 2"}),c.jsx(k,{icon:J,className:`\r
                           group-hover:text-[#2C3E4F] \r
                           group-hover:bg-[#FFF9D6]\r
                           bg-[#2C3E4F] \r
                           duration-300 ease-in \r
                           text-[#FFF9D6] \r
                           text-4xl\r
                           px-6 \r
                           py-5 \r
                           rounded-[50%] \r
                           absolute \r
                           bottom-15 \r
                           right-15`})]})]}),c.jsx("div",{className:"lg:pr-40",children:c.jsxs("div",{className:"flex flex-col items-center gap-20",children:[c.jsxs("div",{className:"hidden lg:block",children:[c.jsx("h1",{className:`\r
                           text-[5rem] \r
                           font-bold\r
                           uppercase \r
                           text-[#fff]\r
                           pb-20`,children:l}),c.jsx("h2",{className:`\r
                           max-w-180 \r
                           text-[3.5rem] \r
                           font-bold \r
                           text-[#FFF200]\r
                           pb-10`,children:f}),c.jsx("h3",{className:`\r
                           max-w-190 \r
                           text-[2.5rem] \r
                           text-white \r
                           font-bold \r
                           pb-50`,children:o})]}),c.jsxs("div",{className:`\r
                        h-180\r
                        relative \r
                        group\r
                        cursor-zoom-in`,onClick:()=>v(s[2]),children:[c.jsx("img",{className:`\r
                           w-[700px] \r
                           h-full \r
                           object-cover \r
                           group-hover:border-8 \r
                           border-[#FFF9D6] \r
                           duration-300 ease-in`,src:s[2],alt:"Krauser Image 3"}),c.jsx(k,{icon:J,className:`\r
                           group-hover:text-[#2C3E4F] \r
                           group-hover:bg-[#FFF9D6]\r
                           bg-[#2C3E4F] \r
                           duration-300 ease-in \r
                           text-[#FFF9D6] \r
                           text-4xl\r
                           px-6 \r
                           py-5 \r
                           rounded-[50%] \r
                           absolute \r
                           bottom-15 \r
                           right-15`})]}),c.jsx("h3",{className:`\r
                        max-w-180 \r
                        text-[2.5rem] \r
                        text-white \r
                        font-bold \r
                        py-15\r
                        px-12\r
                        lg:px-0`,children:m}),c.jsxs("div",{className:`\r
                        h-180\r
                        relative \r
                        group\r
                        cursor-zoom-in`,onClick:()=>v(s[3]),children:[c.jsx("img",{className:`\r
                           w-[800px]\r
                           lg:w-[700px] \r
                           h-full \r
                           object-cover \r
                           group-hover:border-8 \r
                           border-[#FFF9D6] \r
                           duration-300 ease-in`,src:s[3],alt:"Krauser Image 4"}),c.jsx(k,{icon:J,className:`\r
                           group-hover:text-[#2C3E4F] \r
                           group-hover:bg-[#FFF9D6]\r
                           bg-[#2C3E4F] \r
                           duration-300 ease-in \r
                           text-[#FFF9D6] \r
                           text-4xl\r
                           px-6 \r
                           py-5 \r
                           rounded-[50%] \r
                           absolute \r
                           bottom-15 \r
                           right-15`})]})]})})]}),c.jsx("div",{className:"lg:w-screen lg:h-screen",children:c.jsx("img",{className:"w-full h-full object-cover",src:s[4],alt:"MercadorImage 5"})}),p&&c.jsxs("div",{onClick:x,className:`\r
                  flex \r
                  justify-center \r
                  items-center \r
                  fixed \r
                  inset-0 \r
                  bg-black \r
                  bg-opacity-80 \r
                  z-50 \r
                  cursor-zoom-out`,children:[c.jsx("img",{className:`
                        max-w-[100%] 
                        max-h-[100%] 
                        animate__animated ${g?"animate__zoomOut":"animate__zoomIn"}
                        `,src:p,alt:"Image Expanded"}),c.jsx(k,{icon:Ot,className:`\r
                     text-[#a7a1a1]\r
                     text-7xl\r
                     hover:text-[#ffffff] \r
                     duration-300 ease-in\r
                     absolute \r
                     top-13 \r
                     right-13\r
                     sm:top-20\r
                     sm:right-20  \r
                     cursor-pointer`})]})]})})}function h3(){const{name:l,phrase:u,description:o,images:s,phrase2:f,description2:m}=fn[8],{openImage:p,handleOpen:v,handleClose:x,isClosing:g}=_t();return c.jsx(c.Fragment,{children:c.jsxs("section",{id:"saddler",className:`\r
            flex flex-col \r
            justify-center \r
            items-center \r
            gap-40 \r
            bg-[linear-gradient(to_bottom,_#1e1d1d,_#3A0E5F)] \r
            py-50`,children:[c.jsxs("div",{className:"grid lg:grid-cols-2 gap-15",children:[c.jsx("div",{className:"flex justify-center lg:pl-40",children:c.jsxs("div",{children:[c.jsx("h1",{className:`\r
                        text-[5rem] \r
                        font-bold\r
                        uppercase \r
                        text-[#fff]\r
                        pb-20\r
                        px-12\r
                        lg:px-0`,children:l}),c.jsx("h2",{className:`\r
                        max-w-190 \r
                        text-[3.5rem] \r
                        font-bold \r
                        pb-10\r
                        px-12\r
                        lg:px-0\r
                        text-[#FFF200]`,children:u}),c.jsx("h3",{className:`\r
                        max-w-190 \r
                        text-[2.5rem] \r
                        text-white \r
                        font-bold \r
                        pb-50\r
                        px-12\r
                        lg:px-0`,children:o}),c.jsxs("div",{className:`\r
                        h-270\r
                        lg:h-300 \r
                        relative \r
                        group\r
                        cursor-zoom-in`,onClick:()=>v(s[0]),children:[c.jsx("img",{className:`\r
                           w-[800px]\r
                           lg:w-[700px] \r
                           h-full \r
                           object-cover \r
                           group-hover:border-8 \r
                           border-[#FFF9D6] \r
                           duration-300 ease-in`,src:s[0],alt:"Saddler Image 1"}),c.jsx(k,{icon:J,className:`\r
                        group-hover:text-[#2C3E4F] \r
                        group-hover:bg-[#FFF9D6] \r
                        bg-[#2C3E4F]\r
                           duration-300 ease-in \r
                        text-[#FFF9D6] \r
                           text-4xl\r
                           px-6 \r
                           py-5 \r
                           rounded-[50%] \r
                           absolute \r
                           bottom-15 \r
                           right-15`})]})]})}),c.jsxs("div",{className:"grid grid-cols-1 grid-rows-1 gap-15",children:[c.jsxs("div",{className:`\r
                     h-220\r
                     lg:h-full\r
                     relative\r
                     group \r
                     cursor-zoom-in`,onClick:()=>v(s[1]),children:[c.jsx("img",{className:`\r
                        w-[800px] \r
                        h-full \r
                        object-cover \r
                        group-hover:border-8 \r
                        border-[#FFF9D6] \r
                        duration-300 ease-in`,src:s[1],alt:"Saddler Image 2"}),c.jsx(k,{icon:J,className:`\r
                        group-hover:text-[#2C3E4F] \r
                        group-hover:bg-[#FFF9D6] \r
                        bg-[#2C3E4F]\r
                           duration-300 ease-in \r
                        text-[#FFF9D6] \r
                           text-4xl\r
                           px-6 \r
                           py-5 \r
                           rounded-[50%] \r
                           absolute \r
                           bottom-15 \r
                           right-15`})]}),c.jsxs("div",{className:`\r
                     h-190 \r
                     relative \r
                     group \r
                     cursor-zoom-in`,onClick:()=>v(s[2]),children:[c.jsx("img",{className:`\r
                        w-[800px] \r
                        h-full \r
                        object-cover \r
                        group-hover:border-8 \r
                        border-[#FFF9D6] \r
                        duration-300 ease-in`,src:s[2],alt:"Saddler Image 3"}),c.jsx(k,{icon:J,className:`\r
                        group-hover:text-[#2C3E4F] \r
                        group-hover:bg-[#FFF9D6] \r
                        bg-[#2C3E4F]\r
                           duration-300 ease-in \r
                        text-[#FFF9D6] \r
                           text-4xl\r
                           px-6 \r
                           py-5 \r
                           rounded-[50%] \r
                           absolute \r
                           bottom-15 \r
                           right-15`})]})]})]}),c.jsxs("div",{className:"grid lg:grid-cols-2 gap-15",children:[c.jsxs("div",{className:"grid grid-cols-1 grid-rows-1 gap-15",children:[c.jsx("div",{className:"flex justify-center",children:c.jsx("h2",{className:`\r
                        max-w-170 \r
                        text-[3.5rem] \r
                        font-bold\r
                        text-[#FFF200]\r
                        pb-20\r
                        px-12\r
                        lg:px-0`,children:f})}),c.jsxs("div",{className:`\r
                     h-210\r
                     lg:h-[928px]\r
                     relative\r
                     group \r
                     cursor-zoom-in`,onClick:()=>v(s[3]),children:[c.jsx("img",{className:`\r
                        w-[800px] \r
                        h-full\r
                        object-cover \r
                        group-hover:border-8 \r
                        border-[#FFF9D6] \r
                        duration-300 ease-in`,src:s[3],alt:"Saddler Image 4"}),c.jsx(k,{icon:J,className:`\r
                        group-hover:text-[#2C3E4F] \r
                        group-hover:bg-[#FFF9D6] \r
                        bg-[#2C3E4F]\r
                           duration-300 ease-in \r
                        text-[#FFF9D6] \r
                           text-4xl\r
                           px-6 \r
                           py-5 \r
                           rounded-[50%] \r
                           absolute \r
                           bottom-15 \r
                           right-15`})]})]}),c.jsx("div",{className:"flex justify-center pt-20 lg:pr-30",children:c.jsxs("div",{children:[c.jsx("div",{className:"flex justify-center",children:c.jsx("h3",{className:`\r
                           max-w-160 \r
                           text-[2.5rem] \r
                           text-white \r
                           font-bold \r
                           pb-50\r
                           px-12\r
                           lg:px-0`,children:m})}),c.jsxs("div",{className:`\r
                        h-250\r
                        lg:h-300 \r
                        relative \r
                        group\r
                        cursor-zoom-in`,onClick:()=>v(s[4]),children:[c.jsx("img",{className:`\r
                           w-[800px]\r
                           lg:w-[700px] \r
                           h-full \r
                           object-cover \r
                           group-hover:border-8 \r
                           border-[#FFF9D6] \r
                           duration-300 ease-in`,src:s[4],alt:"Saddler Image 5"}),c.jsx(k,{icon:J,className:`\r
                        group-hover:text-[#2C3E4F] \r
                        group-hover:bg-[#FFF9D6] \r
                        bg-[#2C3E4F]\r
                           duration-300 ease-in \r
                        text-[#FFF9D6] \r
                           text-4xl\r
                           px-6 \r
                           py-5 \r
                           rounded-[50%] \r
                           absolute \r
                           bottom-15 \r
                           right-15`})]})]})})]}),p&&c.jsxs("div",{onClick:x,className:`\r
                  flex \r
                  justify-center \r
                  items-center \r
                  fixed \r
                  inset-0 \r
                  bg-black \r
                  bg-opacity-80 \r
                  z-50 \r
                  cursor-zoom-out`,children:[c.jsx("img",{className:`
                        max-w-[100%] 
                        max-h-[100%] 
                        animate__animated ${g?"animate__zoomOut":"animate__zoomIn"}
                        `,src:p,alt:"Image Expanded"}),c.jsx(k,{icon:Ot,className:`\r
                     text-[#a7a1a1]\r
                     text-7xl\r
                     hover:text-[#ffffff] \r
                     duration-300 ease-in\r
                     absolute \r
                     top-13 \r
                     right-13\r
                     sm:top-20\r
                     sm:right-20  \r
                     cursor-pointer`})]})]})})}function g3(){const{phrase1:l,villageImages:u}=rr[0];return c.jsxs("section",{id:"village",className:`\r
         flex \r
         flex-col \r
         items-center\r
         gap-40\r
         py-50\r
         bg-[linear-gradient(to_bottom,_#340c0c,_#210D0D)]`,children:[c.jsx("h2",{className:`\r
            max-w-[350px] \r
            text-[2.5rem] \r
            text-white \r
            font-bold\r
            px-12\r
            lg:px-0`,children:l}),c.jsx(kn,{to:"/village/",children:c.jsxs("div",{className:`\r
               relative \r
               group \r
               cursor-pointer\r
               px-15\r
               2xl:px-0`,children:[c.jsx("img",{className:`\r
                  2xl:w-[70vw] \r
                  2xl:h-[85vh] \r
                  object-cover \r
                  border-11\r
                  lg:border-20 \r
                  border-white \r
                  duration-300 ease-in\r
                  group-hover:rotate-[0.8deg]\r
                  group-hover:scale-101\r
                  group-hover:brightness-110`,src:u[0],alt:"Village Image 1"}),c.jsx("button",{className:`\r
                  text-[1.3rem]\r
                  sm:text-[1.5rem]\r
                  lg:text-[1.7rem]\r
                  font-medium\r
                  bg-white\r
                  group-hover:bg-[#FFF9D6]\r
                  duration-200 ease-in\r
                  absolute \r
                  bottom-10\r
                  lg:bottom-23 \r
                  left-1/2\r
                  -translate-x-1/2\r
                  rounded-full\r
                  py-[9px]\r
                  px-[22px]\r
                  lg:py-[12px]\r
                  lg:px-[30px]\r
                  cursor-pointer`,children:"Explore El Pueblo"})]})})]})}function p3(){const{phrase1:l,castleImages:u}=rr[1];return c.jsxs("section",{id:"castle",className:`\r
         flex \r
         flex-col \r
         items-center\r
         gap-40\r
         py-50\r
         bg-[linear-gradient(to_bottom,_#192836,_#213952)]`,children:[c.jsx("h2",{className:`\r
            max-w-[390px] \r
            text-[2.5rem] \r
            text-white \r
            font-bold\r
            px-12\r
            lg:px-0`,children:l}),c.jsx(kn,{to:"/castle/",children:c.jsxs("div",{className:`\r
               relative \r
               group \r
               cursor-pointer\r
               px-15\r
               2xl:px-0`,children:[c.jsx("img",{className:`\r
                  2xl:w-[70vw] \r
                  2xl:h-[85vh] \r
                  object-cover \r
                  border-11\r
                  lg:border-20 \r
                  border-white \r
                  duration-300 ease-in\r
                  group-hover:rotate-[0.8deg]\r
                  group-hover:scale-101\r
                  group-hover:brightness-110`,src:u[0],alt:"Village Image 1"}),c.jsx("button",{className:`\r
                  text-[1.3rem]\r
                  sm:text-[1.5rem]\r
                  lg:text-[1.7rem]\r
                  font-medium\r
                  bg-white\r
                  group-hover:bg-[#FFF9D6]\r
                  duration-200 ease-in\r
                  absolute \r
                  bottom-10\r
                  lg:bottom-23 \r
                  left-1/2\r
                  -translate-x-1/2\r
                  rounded-full\r
                  py-[9px]\r
                  px-[22px]\r
                  lg:py-[12px]\r
                  lg:px-[30px]\r
                  cursor-pointer`,children:"Explore o Castelo"})]})})]})}function v3(){const{phrase1:l,islandImages:u}=rr[2];return c.jsxs("section",{id:"island",className:`\r
         flex \r
         flex-col \r
         items-center\r
         gap-40\r
         py-50\r
         bg-[linear-gradient(to_bottom,_#242e24,_#334033)]`,children:[c.jsx("h2",{className:`\r
            max-w-[390px] \r
            text-[2.5rem] \r
            text-white \r
            font-bold\r
            px-12\r
            lg:px-0`,children:l}),c.jsx(kn,{to:"/island/",children:c.jsxs("div",{className:`\r
               relative \r
               group \r
               cursor-pointer\r
               px-15\r
               2xl:px-0`,children:[c.jsx("img",{className:`\r
                  2xl:w-[70vw] \r
                  2xl:h-[85vh] \r
                  object-cover \r
                  border-11\r
                  lg:border-20\r
                  border-white \r
                  duration-300 ease-in\r
                  group-hover:rotate-[0.8deg]\r
                  group-hover:scale-101\r
                  group-hover:brightness-110`,src:u[0],alt:"Village Image 1"}),c.jsx("button",{className:`\r
                  text-[1.3rem]\r
                  sm:text-[1.5rem]\r
                  lg:text-[1.7rem]\r
                  font-medium\r
                  bg-white\r
                  group-hover:bg-[#FFF9D6]\r
                  duration-200 ease-in\r
                  absolute \r
                  bottom-10\r
                  lg:bottom-23 \r
                  left-1/2\r
                  -translate-x-1/2\r
                  rounded-full\r
                  py-[9px]\r
                  px-[22px]\r
                  lg:py-[12px]\r
                  lg:px-[30px]\r
                  cursor-pointer`,children:"Explore o Castelo"})]})})]})}function x3(){return c.jsxs("section",{className:`\r
         flex \r
         flex-col \r
         justify-center \r
         items-center \r
         gap-30 \r
         px-15`,children:[c.jsx("h1",{className:`\r
            text-[6rem] \r
            font-bold\r
         text-[#fff]`,children:"Aviso Importante"}),c.jsx("h2",{className:`\r
            max-w-400 \r
            text-[2.5rem]\r
            sm:text-[3rem]\r
         text-[#fff]\r
            font-bold \r
            uppercase\r
            text-center`,children:"Este projeto foi desenvolvido unicamente para fins de estudo e aprendizado, sem qualquer intenção de obtenção de lucro ou finalidade comercial. Todos os direitos autorais e propriedades intelectuais relacionadas aos conteúdos, personagens, marcas e elementos utilizados pertencem aos seus respectivos criadores e detentores legais. Este trabalho não tem vínculo oficial com nenhuma empresa ou entidade e é destinado exclusivamente para uso educacional e demonstrativo."})]})}function b3(){const{artWork2:l,artWork3:u}=lc;return c.jsxs(c.Fragment,{children:[c.jsx(i3,{}),c.jsx(s3,{}),c.jsx("img",{className:"w-screen",src:l,alt:"Resident Evil 4 Artwork 2"}),c.jsx(u3,{}),c.jsx(g3,{}),c.jsx(o3,{}),c.jsx(c3,{}),c.jsx(f3,{}),c.jsx(p3,{}),c.jsx(d3,{}),c.jsx(m3,{}),c.jsx(h3,{}),c.jsx(v3,{}),c.jsx("img",{className:"w-screen",src:u,alt:"Resident Evil 4 Artwork 3"}),c.jsxs("div",{className:`\r
            flex \r
            flex-col \r
            gap-40 \r
            pb-40 \r
            bg-[linear-gradient(to_bottom,_#261e1e,_#5b4949)]`,children:[c.jsx(wh,{}),c.jsx(x3,{})]})]})}function y3(){const[l,u]=z.useState("characters"),[o,s]=z.useState(null),{close:f}=Zi(),m=p=>{u(p)};return c.jsxs("div",{className:`\r
         w-[90vw]\r
         lg:w-[50dvw] \r
         h-[100dvh] \r
         fixed \r
         right-0\r
         z-20 \r
         bg-[#060713]\r
         animate__animated animate__fadeInRightBig`,children:[c.jsxs("div",{className:"absolute sm:static bottom-3 flex sm:gap-7 pt-19 pb-15 px-12 sm:px-20",children:[c.jsx("button",{onClick:()=>m("characters"),className:`
                  text-[1.5rem]
                  sm:text-[1.7rem]
                  font-medium
                  rounded-full
                  py-[12px]
                  px-[15px]
                  sm:px-[17px]
                  cursor-pointer
                  ${l==="characters"?"text-[#000] bg-white duration-200 ease-in":"text-white bg-transparent hover:text-[#fff19f] duration-100 ease-in"}
                     `,children:"Personagens"}),c.jsx("button",{onClick:()=>m("places"),className:`
                  text-[1.5rem]
                  sm:text-[1.7rem]
                  font-medium
                  rounded-full
                  py-[10px]
                  px-[15px]
                  sm:px-[19px]
                  cursor-pointer
                  ${l==="places"?"text-[#000] bg-white duration-200 ease-in":"text-white bg-transparent hover:text-[#fff19f] duration-100 ease-in"}
                     `,children:"Lugares"}),c.jsx("a",{href:"#about",children:c.jsx("button",{onClick:()=>{m("about"),f()},className:`
                  text-[1.5rem]
                  sm:text-[1.7rem]
                  font-medium
                  rounded-full
                  py-[11px]
                  px-[15px]
                  sm:px-[19px]
                  cursor-pointer
                  ${l==="about"?"text-[#000] bg-white duration-200 ease-in":"text-white bg-transparent hover:text-[#fff19f] duration-100 ease-in"}
                     `,children:"Sobre"})})]}),c.jsxs("ul",{className:`
               flex 
               flex-col 
               justify-center 
               sm:pl-20 
               pl-12
               pt-20
               sm:pt-0
               transition-all
               duration-300 
               absolute
               ${l==="characters"?"opacity-100 blur-0":"opacity-0 blur-sm pointer-events-none"}`,children:[c.jsx("li",{className:`\r
               text-[2.9rem]\r
               sm:text-[4rem] \r
               pb-2\r
               sm:pb-0\r
               font-bold \r
               uppercase`,children:c.jsx("a",{href:"#leon",onClick:()=>{s("leon"),f()},className:`
                  cursor-pointer
                  ${o==="leon"?"text-[#340c0c]":"text-white hover:text-[#fff19f] duration-150 ease-in"}
                     `,children:"Leon S. Kennedy"})}),c.jsx("li",{className:`\r
                  text-[2.9rem]\r
                  sm:text-[4rem]  \r
                  pb-2\r
                  sm:pb-0\r
                  font-bold \r
                  uppercase`,children:c.jsx("a",{href:"#luis",onClick:()=>{s("luis"),f()},className:`
                     cursor-pointer
                  ${o==="luis"?"text-[#340c0c]":"text-white hover:text-[#fff19f] duration-150 ease-in"}
                  `,children:"Luis Serra"})}),c.jsx("li",{className:`\r
                  text-[2.9rem]\r
                  sm:text-[4rem]\r
                  pb-2 \r
                  sm:pb-0\r
                  font-bold \r
                  uppercase`,children:c.jsx("a",{href:"#ada",onClick:()=>{s("ada"),f()},className:`
                     cursor-pointer
                  ${o==="ada"?"text-[#340c0c]":"text-white hover:text-[#fff19f] duration-150 ease-in"}
                  `,children:"Ada Wong"})}),c.jsx("li",{className:`\r
                  text-[2.9rem]\r
                  sm:text-[4rem]  \r
                  pb-2\r
                  sm:pb-0\r
                  font-bold \r
                  uppercase`,children:c.jsx("a",{href:"#ashley",onClick:()=>{s("ashley"),f()},className:`
                     cursor-pointer
                  ${o==="ashley"?"text-[#340c0c]":"text-white hover:text-[#fff19f] duration-150 ease-in"}
                  `,children:"Ashley Graham"})}),c.jsx("li",{className:`\r
                  text-[2.9rem]\r
                  sm:text-[4rem]\r
                  pb-2  \r
                  sm:pb-0\r
                  font-bold \r
                  uppercase`,children:c.jsx("a",{href:"#merchant",onClick:()=>{s("merchant"),f()},className:`
                     cursor-pointer
                  ${o==="merchant"?"text-[#340c0c]":"text-white hover:text-[#fff19f] duration-150 ease-in"}
                  `,children:"Mercador"})}),c.jsx("li",{className:`\r
                  text-[2.9rem]\r
                  sm:text-[4rem] \r
                  pb-2\r
                  sm:pb-0\r
                  font-bold \r
                  uppercase`,children:c.jsx("a",{href:"#bitores",onClick:()=>{s("bitores"),f()},className:`
                     cursor-pointer
                  ${o==="bitores"?"text-[#340c0c]":"text-white hover:text-[#fff19f] duration-150 ease-in"}
                  `,children:"Bitores Méndez"})}),c.jsx("li",{className:`\r
                  text-[2.9rem]\r
                  sm:text-[4rem] \r
                  pb-2\r
                  sm:pb-0\r
                  font-bold \r
                  uppercase`,children:c.jsx("a",{href:"#salazar",onClick:()=>{s("salazar"),f()},className:`
                     cursor-pointer
                  ${o==="salazar"?"text-[#340c0c]":"text-white hover:text-[#fff19f] duration-150 ease-in"}
                  `,children:"Ramon Salazar"})}),c.jsx("li",{className:`\r
                  text-[2.9rem]\r
                  sm:text-[4rem] \r
                  pb-2\r
                  sm:pb-0\r
                  font-bold \r
                  uppercase`,children:c.jsx("a",{href:"#krauser",onClick:()=>{s("krauser"),f()},className:`
                     cursor-pointer
                  ${o==="krauser"?"text-[#340c0c]":"text-white hover:text-[#fff19f] duration-150 ease-in"}
                  `,children:"Jack Krauser"})}),c.jsx("li",{className:`\r
                  text-[2.9rem]\r
                  sm:text-[4rem] \r
                  pb-2 \r
                  sm:pb-0\r
                  font-bold \r
                  uppercase`,children:c.jsx("a",{href:"#saddler",onClick:()=>{s("saddle"),f()},className:`
                     cursor-pointer
                  ${o==="saddler"?"text-[#340c0c]":"text-white hover:text-[#fff19f] duration-150 ease-in"}
                  `,children:"Osmund Saddler"})})]}),c.jsxs("ul",{className:`
            sm:pl-20 
            pl-12
            pt-22
            sm:pt-0
            transition-all
            duration-300 
            absolute
               ${l==="places"?"opacity-100 blur-0":"opacity-0 blur-sm pointer-events-none"}`,children:[c.jsx("li",{className:`\r
                  text-[2.4rem]\r
                  sm:text-[4rem] \r
                  pb-2  \r
                  sm:pb-0\r
                  font-bold \r
                  uppercase`,children:c.jsx("a",{href:"#village",onClick:()=>{s("village"),f()},className:`
                     cursor-pointer
                  ${o==="village"?"text-[#340c0c]":"text-white hover:text-[#fff19f] duration-150 ease-in"}
                  `,children:"Vilarejo El Pueblo"})}),c.jsx("li",{className:`\r
                  text-[2.4rem]\r
                  sm:text-[4rem]  \r
                  pb-2\r
                  sm:pb-0\r
                  font-bold \r
                  uppercase`,children:c.jsx("a",{href:"#castle",onClick:()=>{s("castle"),f()},className:`
                     cursor-pointer
                  ${o==="castle"?"text-[#340c0c]":"text-white hover:text-[#fff19f] duration-150 ease-in"}
                  `,children:"Castelo"})}),c.jsx("li",{className:`\r
                  text-[2.4rem]\r
                  sm:text-[4rem] \r
                  pb-2\r
                  sm:pb-0\r
                  font-bold \r
                  uppercase`,children:c.jsx("a",{href:"#island",onClick:()=>{s("island"),f()},className:`
                     cursor-pointer
                  ${o==="island"?"text-[#340c0c]":"text-white hover:text-[#fff19f] duration-150 ease-in"}
                  `,children:"Ilha de La Puerta"})})]})]})}function S3(){const{logo:l}=Ah,{isOpen:u}=Zi();return c.jsx("div",{className:`
            w-[100dvw] 
            h-[100dvh]
            fixed 
            z-20
            backdrop-blur-3xl
            transition-opacity 
            duration-500 
            ease-in-out
            hidden
            lg:block
         ${u?"opacity-100":"opacity-0 pointer-events-none"}`,children:c.jsx("img",{className:`\r
               w-[22%] \r
               absolute \r
               top-1/2\r
               left-1/4\r
               -translate-x-1/2\r
               -translate-y-1/2`,src:l,alt:"Logotipo Resident Evil 4"})})}function N3(){const{isOpen:l}=Zi();return c.jsxs(c.Fragment,{children:[c.jsx(S3,{}),l&&c.jsx(y3,{}),c.jsx(B2,{}),c.jsx(q2,{}),c.jsx(Y2,{}),c.jsx(b3,{})]})}function xc(){const l=z.useRef(null);return z.useEffect(()=>{const u=l.current;if(!u)return;const o=s=>{s.deltaY!==0&&(s.preventDefault(),u.scrollLeft+=s.deltaY)};return u.addEventListener("wheel",o,{passive:!1}),()=>{u.removeEventListener("wheel",o)}},[]),l}function j3(){const{name:l,phrase2:u,description:o,villageImages:s}=rr[0],{openImage:f,handleOpen:m,handleClose:p,isClosing:v}=_t(),x=xc();return c.jsxs("section",{ref:x,className:`\r
         w-screen\r
         h-screen\r
         flex\r
         md:pl-40\r
         pl-15\r
         pr-20\r
         relative\r
         overflow-x-auto\r
         bg-[linear-gradient(to_bottom,_#340c0c,_#210D0D)]`,children:[c.jsxs("div",{className:`\r
            w-max \r
            flex \r
            items-center \r
            gap-30`,children:[c.jsxs("div",{className:`\r
               2xl:w-[80vw]\r
               2xl:flex \r
               items-center \r
               gap-30`,children:[c.jsx("img",{className:`\r
                  w-[80vw]\r
                  md:w-[60vw]\r
                  lg:w-[45vw]\r
                  xl:w-[80dvh] \r
                  2xl:w-[95dvh] \r
                  2xl:h-[60dvh]\r
                  sm:rotate-[-5deg]\r
                  object-cover \r
                  border-8\r
                  sm:border-12 \r
                  border-white\r
                  animate__animated animate__rotateIn`,src:s[0],alt:"Village Image 1"}),c.jsxs("div",{className:`\r
                  min-w-[500px] \r
                  2xl:flex \r
                  gap-15\r
                  flex-col\r
                  2xl:gap-8`,children:[c.jsx("h1",{className:`\r
                     w-[250px]\r
                     text-[3.3rem]\r
                     2xl:text-[5rem] \r
                     font-bold \r
                     uppercase \r
                     text-[#9a8567]\r
                     pt-20\r
                     2xl:pt-0`,children:l}),c.jsx("h2",{className:`\r
                     w-[300px]\r
                     sm:w-[400px]\r
                     text-[2rem]\r
                     2xl:text-[2.2rem] \r
                     font-bold \r
                     uppercase \r
                     text-[#FFF200]\r
                     pt-5\r
                     2xl:pt-0`,children:u}),c.jsx("p",{className:`\r
                     w-[300px]\r
                     sm:w-[400px]\r
                     md:w-[600px]\r
                     2xl:w-[400px] \r
                     text-[1.7rem]\r
                     2xl:text-[2rem] \r
                     text-white \r
                     font-medium\r
                     pt-5\r
                     2xl:pt-0`,children:o})]})]}),c.jsxs("div",{className:"flex gap-8",children:[c.jsxs("div",{className:"flex flex-col gap-8",children:[c.jsxs("div",{className:`\r
                     w-[260px]\r
                     h-[200px]\r
                     relative\r
                     group \r
                     cursor-zoom-in\r
                     ml-96`,onClick:()=>m(s[1]),children:[c.jsx("img",{className:`\r
                        h-full \r
                        object-cover \r
                        group-hover:border-8 border-[#854848] duration-300 ease-in`,src:s[1],alt:"Village Image 2"}),c.jsx(k,{icon:J,className:`\r
                     group-hover:text-[#ffffff] \r
                     group-hover:bg-[#854848]\r
                        duration-300 ease-in\r
                        text-[#c5a981] text-4xl\r
                        px-6 \r
                        py-5 \r
                        rounded-[50%] \r
                        bg-[#602424] \r
                        absolute \r
                        bottom-15 \r
                        right-15`})]}),c.jsxs("div",{className:`\r
                     w-200\r
                     h-180 \r
                     relative \r
                     group \r
                     cursor-zoom-in`,onClick:()=>m(s[2]),children:[c.jsx("img",{className:`\r
                        w-[800px] \r
                        h-full \r
                        object-cover\r
                        group-hover:border-8 border-[#854848] duration-300 ease-in`,src:s[2],alt:"Village Image 3"}),c.jsx(k,{icon:J,className:`\r
                     group-hover:text-[#ffffff] \r
                     group-hover:bg-[#854848]\r
                        duration-300 ease-in\r
                        text-[#c5a981] text-4xl\r
                        px-6 \r
                        py-5 \r
                        rounded-[50%] \r
                        bg-[#602424] \r
                        absolute \r
                        bottom-15 \r
                        right-15`})]})]}),c.jsx("div",{className:"flex items-center",children:c.jsxs("div",{className:`\r
                     w-120\r
                     h-200 \r
                     relative \r
                     group \r
                     cursor-zoom-in`,onClick:()=>m(s[3]),children:[c.jsx("img",{className:`\r
                        w-full\r
                        h-full \r
                        object-cover\r
                        group-hover:border-8 border-[#854848] duration-300 ease-in`,src:s[3],alt:"Village Image 4"}),c.jsx(k,{icon:J,className:`\r
                     group-hover:text-[#ffffff] \r
                     group-hover:bg-[#854848]\r
                        duration-300 ease-in\r
                        text-[#c5a981] text-4xl\r
                        px-6 \r
                        py-5 \r
                        rounded-[50%] \r
                        bg-[#602424] \r
                        absolute \r
                        bottom-15 \r
                        right-15`})]})})]}),c.jsxs("div",{className:"flex items-center gap-8",children:[c.jsxs("div",{className:`\r
                  w-[360px]\r
                  h-[93dvh]\r
                  sm:h-[715px]\r
                  relative\r
                  group \r
                  cursor-zoom-in\r
                  ml-10`,onClick:()=>m(s[4]),children:[c.jsx("img",{className:`\r
                     w-full\r
                     h-full \r
                     object-cover \r
                     group-hover:border-8 border-[#854848] duration-300 ease-in`,src:s[4],alt:"Village Image 5"}),c.jsx(k,{icon:J,className:`\r
                     group-hover:text-[#ffffff] \r
                     group-hover:bg-[#854848]\r
                        duration-300 ease-in\r
                        text-[#c5a981] text-4xl\r
                        px-6 \r
                        py-5 \r
                        rounded-[50%] \r
                        bg-[#602424] \r
                        absolute \r
                        bottom-15 \r
                        right-15`})]}),c.jsxs("div",{className:"flex items-center",children:[c.jsxs("div",{className:`\r
                     w-180\r
                     h-180 \r
                     relative \r
                     group \r
                     cursor-zoom-in`,onClick:()=>m(s[5]),children:[c.jsx("img",{className:`\r
                        w-full\r
                        h-full \r
                        object-cover\r
                        group-hover:border-8 border-[#854848] duration-300 ease-in`,src:s[5],alt:"Village Image 6"}),c.jsx(k,{icon:J,className:`\r
                     group-hover:text-[#ffffff] \r
                     group-hover:bg-[#854848]\r
                        duration-300 ease-in\r
                        text-[#c5a981] text-4xl\r
                        px-6 \r
                        py-5 \r
                        rounded-[50%] \r
                        bg-[#602424] \r
                        absolute \r
                        bottom-15 \r
                        right-15`})]}),c.jsxs("div",{className:`\r
                     w-120\r
                     h-210 \r
                     relative \r
                     group \r
                     cursor-zoom-in\r
                     ml-35`,onClick:()=>m(s[6]),children:[c.jsx("img",{className:`\r
                        w-full\r
                        h-full \r
                        object-cover\r
                        group-hover:border-8 border-[#854848] duration-300 ease-in`,src:s[6],alt:"Village Image 7"}),c.jsx(k,{icon:J,className:`\r
                     group-hover:text-[#ffffff] \r
                     group-hover:bg-[#854848]\r
                        duration-300 ease-in\r
                        text-[#c5a981] text-4xl\r
                        px-6 \r
                        py-5 \r
                        rounded-[50%] \r
                        bg-[#602424] \r
                        absolute \r
                        bottom-15 \r
                        right-15`})]}),c.jsxs("div",{className:`\r
                     w-[750px]\r
                     h-[93dvh]\r
                     sm:h-[715px]\r
                     relative \r
                     group \r
                     cursor-zoom-in\r
                     ml-35`,onClick:()=>m(s[7]),children:[c.jsx("img",{className:`\r
                        w-full\r
                        h-full \r
                        object-cover\r
                        group-hover:border-8 border-[#854848] duration-300 ease-in`,src:s[7],alt:"Village Image 8"}),c.jsx(k,{icon:J,className:`\r
                     group-hover:text-[#ffffff] \r
                     group-hover:bg-[#854848]\r
                        duration-300 ease-in\r
                        text-[#c5a981] text-4xl\r
                        px-6 \r
                        py-5 \r
                        rounded-[50%] \r
                        bg-[#602424] \r
                        absolute \r
                        bottom-15 \r
                        right-15`})]})]})]})]}),c.jsxs(kn,{to:"/",className:`\r
            flex\r
            items-center\r
            text-[1.5rem]\r
            sm:text-[1.7rem]\r
            text-[#c5a981]\r
            font-medium\r
            fixed \r
            top-15\r
            lef-15\r
            md:top-25 \r
            md:left-25\r
            py-[13px]\r
            px-[23px]\r
            sm:px-[30px]\r
            rounded-full\r
            cursor-pointer\r
            hover:bg-[#411313]\r
            bg-[#501717]\r
            duration-200 ease-in`,children:[c.jsx(k,{icon:vc,className:`\r
               text-[#c5a981] \r
               text-[1.5rem]\r
               pr-5`}),"Voltar"]}),f&&c.jsxs("div",{onClick:p,className:`\r
               flex \r
               justify-center \r
               items-center \r
               fixed \r
               inset-0 \r
               bg-black \r
               bg-opacity-80 \r
               z-50 \r
               cursor-zoom-out`,children:[c.jsx("img",{className:`
                        max-w-[100%] 
                        max-h-[100%] 
                        animate__animated ${v?"animate__zoomOut":"animate__zoomIn"}
                        `,src:f,alt:"Image Expanded"}),c.jsx(k,{icon:Ot,className:`\r
                  hover:text-[#ffffff] \r
                  duration-300 ease-in \r
                  text-[#c5a981]\r
                  absolute \r
                  top-13 \r
                  right-13\r
                  sm:top-20\r
                  sm:right-20  \r
                  text-7xl\r
                  cursor-pointer`})]})]})}function E3(){const{name:l,phrase2:u,description:o,castleImages:s}=rr[1],{openImage:f,handleOpen:m,handleClose:p,isClosing:v}=_t(),x=xc();return c.jsxs("section",{ref:x,className:`\r
         w-screen\r
         h-screen\r
         flex\r
         bg-[linear-gradient(to_bottom,_#192836,_#213952)]\r
         md:pl-40 \r
         pl-15\r
         pr-20\r
         relative\r
         overflow-x-auto`,children:[c.jsxs("div",{className:`\r
            w-max \r
            flex \r
            items-center \r
            gap-30`,children:[c.jsxs("div",{className:`\r
               2xl:w-[80vw]\r
               2xl:flex \r
               items-center \r
               gap-30`,children:[c.jsx("img",{className:`\r
                  w-[80vw]\r
                  md:w-[60vw]\r
                  lg:w-[45vw]\r
                  xl:w-[80dvh] \r
                  2xl:w-[95dvh] \r
                  2xl:h-[60dvh]\r
                  sm:rotate-[-5deg]\r
                  object-cover \r
                  border-8\r
                  sm:border-12 \r
                  border-white\r
                  animate__animated animate__rotateIn`,src:s[0],alt:"Castle Image 1"}),c.jsxs("div",{className:`\r
                  min-w-[500px] \r
                  2xl:flex \r
                  gap-15\r
                  flex-col\r
                  2xl:gap-8`,children:[c.jsx("h1",{className:`\r
                     w-[250px]\r
                     text-[3.3rem]\r
                     2xl:text-[5rem] \r
                     font-bold \r
                     uppercase \r
                     text-[#C2A85D]\r
                     pt-20\r
                     2xl:pt-0`,children:l}),c.jsx("h2",{className:`\r
                     w-[300px]\r
                     sm:w-[400px]\r
                     text-[2rem]\r
                     2xl:text-[2.2rem] \r
                     font-bold \r
                     uppercase \r
                     text-[#FFF200]\r
                     pt-5\r
                     2xl:pt-0`,children:u}),c.jsx("p",{className:`\r
                     w-[300px]\r
                     sm:w-[400px]\r
                     md:w-[600px]\r
                     2xl:w-[400px] \r
                     text-[1.7rem]\r
                     2xl:text-[2rem] \r
                     text-white \r
                     font-medium\r
                     pt-5\r
                     2xl:pt-0`,children:o})]})]}),c.jsxs("div",{className:"flex gap-8",children:[c.jsxs("div",{className:"flex flex-col gap-8",children:[c.jsxs("div",{className:`\r
                     w-[260px]\r
                     h-[200px]\r
                     relative\r
                     group \r
                     cursor-zoom-in\r
                     ml-96`,onClick:()=>m(s[1]),children:[c.jsx("img",{className:`\r
                        w-[800px] \r
                        h-full \r
                        object-cover \r
                        group-hover:border-8 border-[#275188] duration-300 ease-in`,src:s[1],alt:"Castle Image 2"}),c.jsx(k,{icon:J,className:`\r
                     group-hover:text-[#ffffff] group-hover:bg-[#384152]\r
                     bg-[#275188]\r
                        duration-300 ease-in \r
                        text-[#c5a981]\r
                        text-4xl\r
                        px-6 \r
                        py-5 \r
                        rounded-[50%] \r
                        absolute \r
                        bottom-15 \r
                        right-15`})]}),c.jsxs("div",{className:`\r
                     w-200\r
                     h-180 \r
                     relative \r
                     group \r
                     cursor-zoom-in`,onClick:()=>m(s[2]),children:[c.jsx("img",{className:`\r
                        w-[800px] \r
                        h-full \r
                        object-cover\r
                        group-hover:border-8 border-[#275188] duration-300 ease-in`,src:s[2],alt:"Castle Image 3"}),c.jsx(k,{icon:J,className:`\r
                     group-hover:text-[#ffffff] group-hover:bg-[#384152]\r
                     bg-[#275188]\r
                        duration-300 ease-in \r
                        text-[#c5a981]\r
                        text-4xl\r
                        px-6 \r
                        py-5 \r
                        rounded-[50%] \r
                        absolute \r
                        bottom-15 \r
                        right-15`})]})]}),c.jsx("div",{className:"flex items-center",children:c.jsxs("div",{className:`\r
                     w-120\r
                     h-230 \r
                     relative \r
                     group \r
                     cursor-zoom-in`,onClick:()=>m(s[3]),children:[c.jsx("img",{className:`\r
                        w-full\r
                        h-full \r
                        object-cover\r
                        group-hover:border-8 border-[#275188] duration-300 ease-in`,src:s[3],alt:"Castle Image 4"}),c.jsx(k,{icon:J,className:`\r
                     group-hover:text-[#ffffff] group-hover:bg-[#384152]\r
                     bg-[#275188]\r
                        duration-300 ease-in \r
                        text-[#c5a981]\r
                        text-4xl\r
                        px-6 \r
                        py-5 \r
                        rounded-[50%] \r
                        absolute \r
                        bottom-15 \r
                        right-15`})]})})]}),c.jsxs("div",{className:"flex items-center gap-30",children:[c.jsxs("div",{className:`\r
                  w-[450px]\r
                  h-[450px]\r
                  relative\r
                  group \r
                  cursor-zoom-in`,onClick:()=>m(s[4]),children:[c.jsx("img",{className:`\r
                     w-full\r
                     h-full \r
                     object-cover \r
                     group-hover:border-8 border-[#275188] duration-300 ease-in`,src:s[4],alt:"Castle Image 5"}),c.jsx(k,{icon:J,className:`\r
                     group-hover:text-[#ffffff] group-hover:bg-[#384152]\r
                     bg-[#275188]\r
                        duration-300 ease-in \r
                        text-[#c5a981]\r
                        text-4xl\r
                        px-6 \r
                        py-5 \r
                        rounded-[50%] \r
                        absolute \r
                        bottom-15 \r
                        right-15`})]}),c.jsx("div",{className:"flex items-center",children:c.jsxs("div",{className:`\r
                     w-[750px]\r
                     h-[715px]\r
                     relative \r
                     group \r
                     cursor-zoom-in`,onClick:()=>m(s[5]),children:[c.jsx("img",{className:`\r
                        w-full\r
                        h-full \r
                        object-cover\r
                        group-hover:border-8 border-[#275188] duration-300 ease-in`,src:s[5],alt:"Castle Image 6"}),c.jsx(k,{icon:J,className:`\r
                     group-hover:text-[#ffffff] group-hover:bg-[#384152]\r
                     bg-[#275188]\r
                        duration-300 ease-in \r
                        text-[#c5a981]\r
                        text-4xl\r
                        px-6 \r
                        py-5 \r
                        rounded-[50%] \r
                        absolute \r
                        bottom-15 \r
                        right-15`})]})})]})]}),c.jsxs(kn,{to:"/",className:`\r
            flex\r
            items-center\r
            text-[1.5rem]\r
            sm:text-[1.7rem]\r
            text-[#C2A85D]\r
            font-medium\r
            fixed \r
            top-15\r
            lef-15\r
            md:top-25 \r
            md:left-25\r
            py-[13px]\r
            px-[23px]\r
            sm:px-[30px]\r
            rounded-full\r
            cursor-pointer\r
            hover:bg-[#2a3a46]\r
            bg-[#315071]\r
            duration-200 ease-in`,children:[c.jsx(k,{icon:vc,className:`\r
               text-[#C2A85D] \r
               text-[1.5rem]\r
               pr-5`}),"Voltar"]}),f&&c.jsxs("div",{onClick:p,className:`\r
               flex \r
               justify-center \r
               items-center\r
               fixed \r
               inset-0 \r
               bg-black \r
               bg-opacity-80 \r
               z-50 \r
               cursor-zoom-out`,children:[c.jsx("img",{className:`
                        max-w-[100%] 
                        max-h-[100%] 
                        animate__animated ${v?"animate__zoomOut":"animate__zoomIn"}
                        `,src:f,alt:"Image Expanded"}),c.jsx(k,{icon:Ot,className:`\r
                  hover:text-[#ffffff] \r
                  duration-300 ease-in \r
                  text-[#c5a981]\r
                  text-7xl\r
                  absolute \r
                  top-13 \r
                  right-13\r
                  sm:top-20\r
                  sm:right-20  \r
                  cursor-pointer`})]})]})}function A3(){const{name:l,phrase2:u,description:o,islandImages:s}=rr[2],{openImage:f,handleOpen:m,handleClose:p,isClosing:v}=_t(),x=xc();return c.jsxs("section",{ref:x,className:`\r
         flex\r
         w-screen\r
         h-screen\r
         bg-[linear-gradient(to_bottom,_#242e24,_#334033)]\r
         md:pl-40 \r
         pl-15\r
         pr-20\r
         relative\r
         overflow-x-auto`,children:[c.jsxs("div",{className:`\r
            w-max \r
            flex \r
            items-center \r
            gap-30`,children:[c.jsxs("div",{className:`\r
               2xl:w-[80vw]\r
               2xl:flex \r
               items-center \r
               gap-30`,children:[c.jsx("img",{className:`\r
                  w-[80vw]\r
                  md:w-[60vw]\r
                  lg:w-[45vw]\r
                  xl:w-[80dvh] \r
                  2xl:w-[95dvh] \r
                  2xl:h-[60dvh]\r
                  sm:rotate-[-5deg]\r
                  object-cover \r
                  border-8\r
                  sm:border-12 \r
                  border-white\r
                  animate__animated animate__rotateIn`,src:s[0],alt:"Castle Image 1"}),c.jsxs("div",{className:`\r
                  min-w-[500px] \r
                  2xl:flex \r
                  gap-15\r
                  flex-col\r
                  2xl:gap-8`,children:[c.jsx("h1",{className:`\r
                     2xl:w-[250px]\r
                     text-[3.3rem]\r
                     2xl:text-[5rem] \r
                     font-bold \r
                     uppercase \r
                     text-[#C2A85D]\r
                     pt-20\r
                     2xl:pt-0`,children:l}),c.jsx("h2",{className:`\r
                     w-[300px]\r
                     sm:w-[400px]\r
                     text-[2rem]\r
                     2xl:text-[2.2rem] \r
                     font-bold \r
                     uppercase \r
                     text-[#FFF200]\r
                     pt-5\r
                     2xl:pt-0`,children:u}),c.jsx("p",{className:`\r
                     w-[300px]\r
                     sm:w-[400px]\r
                     md:w-[600px]\r
                     2xl:w-[400px] \r
                     text-[1.7rem]\r
                     2xl:text-[2rem] \r
                     text-white \r
                     font-medium\r
                     pt-5\r
                     2xl:pt-0`,children:o})]})]}),c.jsxs("div",{className:"flex gap-8",children:[c.jsxs("div",{className:"flex flex-col gap-8",children:[c.jsxs("div",{className:`\r
                     w-[260px]\r
                     h-[200px]\r
                     relative\r
                     group \r
                     cursor-zoom-in\r
                     ml-96`,onClick:()=>m(s[1]),children:[c.jsx("img",{className:`\r
                        w-[800px] \r
                        h-full \r
                        object-cover \r
                        group-hover:border-8 border-[#506044] duration-300 ease-in`,src:s[1],alt:"Castle Image 2"}),c.jsx(k,{icon:J,className:`\r
                     group-hover:text-[#ffffff] \r
                     group-hover:bg-[#273427] \r
                     bg-[#48553e] \r
                        duration-300 ease-in\r
                        text-[#c5a981] \r
                        text-4xl\r
                        px-6 \r
                        py-5 \r
                        rounded-[50%] \r
                        absolute \r
                        bottom-15 \r
                        right-15`})]}),c.jsxs("div",{className:`\r
                     w-200\r
                     h-180 \r
                     relative \r
                     group \r
                     cursor-zoom-in`,onClick:()=>m(s[2]),children:[c.jsx("img",{className:`\r
                        w-[800px] \r
                        h-full \r
                        object-cover\r
                        group-hover:border-8 border-[#506044] duration-300 ease-in`,src:s[2],alt:"Castle Image 3"}),c.jsx(k,{icon:J,className:`\r
                     group-hover:text-[#ffffff] \r
                     group-hover:bg-[#273427] \r
                     bg-[#48553e] \r
                        duration-300 ease-in\r
                        text-[#c5a981] \r
                        text-4xl\r
                        px-6 \r
                        py-5 \r
                        rounded-[50%] \r
                        absolute \r
                        bottom-15 \r
                        right-15`})]})]}),c.jsx("div",{className:"flex items-center",children:c.jsxs("div",{className:`\r
                     w-120\r
                     h-230 \r
                     relative \r
                     group \r
                     cursor-zoom-in`,onClick:()=>m(s[3]),children:[c.jsx("img",{className:`\r
                        w-full\r
                        h-full \r
                        object-cover\r
                        group-hover:border-8 border-[#506044] duration-300 ease-in`,src:s[3],alt:"Castle Image 4"}),c.jsx(k,{icon:J,className:`\r
                     group-hover:text-[#ffffff] \r
                     group-hover:bg-[#273427] \r
                     bg-[#48553e] \r
                        duration-300 ease-in\r
                        text-[#c5a981] \r
                        text-4xl\r
                        px-6 \r
                        py-5 \r
                        rounded-[50%] \r
                        absolute \r
                        bottom-15 \r
                        right-15`})]})})]}),c.jsxs("div",{className:"flex items-center gap-30",children:[c.jsxs("div",{className:`\r
                  w-[450px]\r
                  h-[450px]\r
                  relative\r
                  group \r
                  cursor-zoom-in`,onClick:()=>m(s[4]),children:[c.jsx("img",{className:`\r
                     w-full\r
                     h-full \r
                     object-cover \r
                     group-hover:border-8 border-[#506044] duration-300 ease-in`,src:s[4],alt:"Castle Image 5"}),c.jsx(k,{icon:J,className:`\r
                     group-hover:text-[#ffffff] \r
                     group-hover:bg-[#273427] \r
                     bg-[#48553e] \r
                        duration-300 ease-in\r
                        text-[#c5a981] \r
                        text-4xl\r
                        px-6 \r
                        py-5 \r
                        rounded-[50%] \r
                        absolute \r
                        bottom-15 \r
                        right-15`})]}),c.jsx("div",{className:"flex items-center",children:c.jsxs("div",{className:`\r
                     w-[750px]\r
                     h-[93dvh]\r
                     sm:h-[715px]\r
                     relative \r
                     group \r
                     cursor-zoom-in`,onClick:()=>m(s[5]),children:[c.jsx("img",{className:`\r
                        w-full\r
                        h-full \r
                        object-cover\r
                        group-hover:border-8 border-[#506044] duration-300 ease-in`,src:s[5],alt:"Castle Image 6"}),c.jsx(k,{icon:J,className:`\r
                     group-hover:text-[#ffffff] \r
                     group-hover:bg-[#273427] \r
                     bg-[#48553e] \r
                        duration-300 ease-in\r
                        text-[#c5a981] \r
                        text-4xl\r
                        px-6 \r
                        py-5 \r
                        rounded-[50%] \r
                        absolute \r
                        bottom-15 \r
                        right-15`})]})})]})]}),c.jsxs(kn,{to:"/",className:`\r
            flex\r
            items-center\r
            text-[1.5rem]\r
            sm:text-[1.7rem]\r
            text-[#C2A85D]\r
            font-medium\r
            bg-[#48553e]\r
            hover:bg-[#293a29]\r
            duration-200 ease-in\r
            fixed \r
            top-15\r
            lef-15\r
            md:top-25 \r
            md:left-25\r
            py-[13px]\r
            px-[23px]\r
            sm:px-[30px]\r
            rounded-full\r
            cursor-pointer`,children:[c.jsx(k,{icon:vc,className:`\r
               text-[#C2A85D] \r
               text-[1.3rem]\r
               sm:text-[1.5rem]\r
               pr-5`}),"Voltar"]}),f&&c.jsxs("div",{onClick:p,className:`\r
               flex \r
               justify-center \r
               items-center \r
               fixed \r
               inset-0 \r
               bg-black \r
               bg-opacity-80 \r
               z-50 \r
               cursor-zoom-out`,children:[c.jsx("img",{className:`
                        max-w-[100%] 
                        max-h-[100%] 
                        animate__animated ${v?"animate__zoomOut":"animate__zoomIn"}
                        `,src:f,alt:"Image Expanded"}),c.jsx(k,{icon:Ot,className:`\r
                  hover:text-[#ffffff] \r
                  duration-300 ease-in \r
                  text-[#c5a981]\r
                  text-7xl\r
                  absolute \r
                  top-13 \r
                  right-13\r
                  sm:top-20\r
                  sm:right-20 \r
                  cursor-pointer`})]})]})}function C3(){return c.jsxs(Fv,{children:[c.jsx(sl,{path:"/",element:c.jsx(N3,{})}),c.jsx(sl,{path:"/village",element:c.jsx(j3,{})}),c.jsx(sl,{path:"/castle",element:c.jsx(E3,{})}),c.jsx(sl,{path:"/island",element:c.jsx(A3,{})})]})}function w3(){return c.jsx(H2,{children:c.jsx(ax,{children:c.jsx(C3,{})})})}Y1.createRoot(document.getElementById("root")).render(c.jsx(z.StrictMode,{children:c.jsx(w3,{})}));
