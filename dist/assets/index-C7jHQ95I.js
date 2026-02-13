(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))u(m);new MutationObserver(m=>{for(const h of m)if(h.type==="childList")for(const w of h.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&u(w)}).observe(document,{childList:!0,subtree:!0});function f(m){const h={};return m.integrity&&(h.integrity=m.integrity),m.referrerPolicy&&(h.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?h.credentials="include":m.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function u(m){if(m.ep)return;m.ep=!0;const h=f(m);fetch(m.href,h)}})();var zu={exports:{}},Ml={};var Jd;function ng(){if(Jd)return Ml;Jd=1;var s=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function f(u,m,h){var w=null;if(h!==void 0&&(w=""+h),m.key!==void 0&&(w=""+m.key),"key"in m){h={};for(var k in m)k!=="key"&&(h[k]=m[k])}else h=m;return m=h.ref,{$$typeof:s,type:u,key:w,ref:m!==void 0?m:null,props:h}}return Ml.Fragment=r,Ml.jsx=f,Ml.jsxs=f,Ml}var Wd;function ag(){return Wd||(Wd=1,zu.exports=ng()),zu.exports}var v=ag(),Uu={exports:{}},I={};var Fd;function lg(){if(Fd)return I;Fd=1;var s=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),w=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),O=Symbol.iterator;function q(g){return g===null||typeof g!="object"?null:(g=O&&g[O]||g["@@iterator"],typeof g=="function"?g:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,Y={};function Z(g,N,_){this.props=g,this.context=N,this.refs=Y,this.updater=_||F}Z.prototype.isReactComponent={},Z.prototype.setState=function(g,N){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,N,"setState")},Z.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function H(){}H.prototype=Z.prototype;function K(g,N,_){this.props=g,this.context=N,this.refs=Y,this.updater=_||F}var we=K.prototype=new H;we.constructor=K,X(we,Z.prototype),we.isPureReactComponent=!0;var me=Array.isArray;function Ee(){}var J={H:null,A:null,T:null,S:null},je=Object.prototype.hasOwnProperty;function Ue(g,N,_){var G=_.ref;return{$$typeof:s,type:g,key:N,ref:G!==void 0?G:null,props:_}}function Fe(g,N){return Ue(g.type,N,g.props)}function $e(g){return typeof g=="object"&&g!==null&&g.$$typeof===s}function Ge(g){var N={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(_){return N[_]})}var Nt=/\/+/g;function gt(g,N){return typeof g=="object"&&g!==null&&g.key!=null?Ge(""+g.key):N.toString(36)}function Ie(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(Ee,Ee):(g.status="pending",g.then(function(N){g.status==="pending"&&(g.status="fulfilled",g.value=N)},function(N){g.status==="pending"&&(g.status="rejected",g.reason=N)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function z(g,N,_,G,P){var ne=typeof g;(ne==="undefined"||ne==="boolean")&&(g=null);var de=!1;if(g===null)de=!0;else switch(ne){case"bigint":case"string":case"number":de=!0;break;case"object":switch(g.$$typeof){case s:case r:de=!0;break;case C:return de=g._init,z(de(g._payload),N,_,G,P)}}if(de)return P=P(g),de=G===""?"."+gt(g,0):G,me(P)?(_="",de!=null&&(_=de.replace(Nt,"$&/")+"/"),z(P,N,_,"",function(Ba){return Ba})):P!=null&&($e(P)&&(P=Fe(P,_+(P.key==null||g&&g.key===P.key?"":(""+P.key).replace(Nt,"$&/")+"/")+de)),N.push(P)),1;de=0;var Je=G===""?".":G+":";if(me(g))for(var Ne=0;Ne<g.length;Ne++)G=g[Ne],ne=Je+gt(G,Ne),de+=z(G,N,_,ne,P);else if(Ne=q(g),typeof Ne=="function")for(g=Ne.call(g),Ne=0;!(G=g.next()).done;)G=G.value,ne=Je+gt(G,Ne++),de+=z(G,N,_,ne,P);else if(ne==="object"){if(typeof g.then=="function")return z(Ie(g),N,_,G,P);throw N=String(g),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return de}function L(g,N,_){if(g==null)return g;var G=[],P=0;return z(g,G,"","",function(ne){return N.call(_,ne,P++)}),G}function $(g){if(g._status===-1){var N=g._result;N=N(),N.then(function(_){(g._status===0||g._status===-1)&&(g._status=1,g._result=_)},function(_){(g._status===0||g._status===-1)&&(g._status=2,g._result=_)}),g._status===-1&&(g._status=0,g._result=N)}if(g._status===1)return g._result.default;throw g._result}var fe=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(N))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)},ge={map:L,forEach:function(g,N,_){L(g,function(){N.apply(this,arguments)},_)},count:function(g){var N=0;return L(g,function(){N++}),N},toArray:function(g){return L(g,function(N){return N})||[]},only:function(g){if(!$e(g))throw Error("React.Children.only expected to receive a single React element child.");return g}};return I.Activity=T,I.Children=ge,I.Component=Z,I.Fragment=f,I.Profiler=m,I.PureComponent=K,I.StrictMode=u,I.Suspense=b,I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,I.__COMPILER_RUNTIME={__proto__:null,c:function(g){return J.H.useMemoCache(g)}},I.cache=function(g){return function(){return g.apply(null,arguments)}},I.cacheSignal=function(){return null},I.cloneElement=function(g,N,_){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var G=X({},g.props),P=g.key;if(N!=null)for(ne in N.key!==void 0&&(P=""+N.key),N)!je.call(N,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&N.ref===void 0||(G[ne]=N[ne]);var ne=arguments.length-2;if(ne===1)G.children=_;else if(1<ne){for(var de=Array(ne),Je=0;Je<ne;Je++)de[Je]=arguments[Je+2];G.children=de}return Ue(g.type,P,G)},I.createContext=function(g){return g={$$typeof:w,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:h,_context:g},g},I.createElement=function(g,N,_){var G,P={},ne=null;if(N!=null)for(G in N.key!==void 0&&(ne=""+N.key),N)je.call(N,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(P[G]=N[G]);var de=arguments.length-2;if(de===1)P.children=_;else if(1<de){for(var Je=Array(de),Ne=0;Ne<de;Ne++)Je[Ne]=arguments[Ne+2];P.children=Je}if(g&&g.defaultProps)for(G in de=g.defaultProps,de)P[G]===void 0&&(P[G]=de[G]);return Ue(g,ne,P)},I.createRef=function(){return{current:null}},I.forwardRef=function(g){return{$$typeof:k,render:g}},I.isValidElement=$e,I.lazy=function(g){return{$$typeof:C,_payload:{_status:-1,_result:g},_init:$}},I.memo=function(g,N){return{$$typeof:p,type:g,compare:N===void 0?null:N}},I.startTransition=function(g){var N=J.T,_={};J.T=_;try{var G=g(),P=J.S;P!==null&&P(_,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(Ee,fe)}catch(ne){fe(ne)}finally{N!==null&&_.types!==null&&(N.types=_.types),J.T=N}},I.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},I.use=function(g){return J.H.use(g)},I.useActionState=function(g,N,_){return J.H.useActionState(g,N,_)},I.useCallback=function(g,N){return J.H.useCallback(g,N)},I.useContext=function(g){return J.H.useContext(g)},I.useDebugValue=function(){},I.useDeferredValue=function(g,N){return J.H.useDeferredValue(g,N)},I.useEffect=function(g,N){return J.H.useEffect(g,N)},I.useEffectEvent=function(g){return J.H.useEffectEvent(g)},I.useId=function(){return J.H.useId()},I.useImperativeHandle=function(g,N,_){return J.H.useImperativeHandle(g,N,_)},I.useInsertionEffect=function(g,N){return J.H.useInsertionEffect(g,N)},I.useLayoutEffect=function(g,N){return J.H.useLayoutEffect(g,N)},I.useMemo=function(g,N){return J.H.useMemo(g,N)},I.useOptimistic=function(g,N){return J.H.useOptimistic(g,N)},I.useReducer=function(g,N,_){return J.H.useReducer(g,N,_)},I.useRef=function(g){return J.H.useRef(g)},I.useState=function(g){return J.H.useState(g)},I.useSyncExternalStore=function(g,N,_){return J.H.useSyncExternalStore(g,N,_)},I.useTransition=function(){return J.H.useTransition()},I.version="19.2.4",I}var $d;function qu(){return $d||($d=1,Uu.exports=lg()),Uu.exports}var j=qu(),Nu={exports:{}},Cl={},Mu={exports:{}},Cu={};var Id;function ig(){return Id||(Id=1,(function(s){function r(z,L){var $=z.length;z.push(L);e:for(;0<$;){var fe=$-1>>>1,ge=z[fe];if(0<m(ge,L))z[fe]=L,z[$]=ge,$=fe;else break e}}function f(z){return z.length===0?null:z[0]}function u(z){if(z.length===0)return null;var L=z[0],$=z.pop();if($!==L){z[0]=$;e:for(var fe=0,ge=z.length,g=ge>>>1;fe<g;){var N=2*(fe+1)-1,_=z[N],G=N+1,P=z[G];if(0>m(_,$))G<ge&&0>m(P,_)?(z[fe]=P,z[G]=$,fe=G):(z[fe]=_,z[N]=$,fe=N);else if(G<ge&&0>m(P,$))z[fe]=P,z[G]=$,fe=G;else break e}}return L}function m(z,L){var $=z.sortIndex-L.sortIndex;return $!==0?$:z.id-L.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;s.unstable_now=function(){return h.now()}}else{var w=Date,k=w.now();s.unstable_now=function(){return w.now()-k}}var b=[],p=[],C=1,T=null,O=3,q=!1,F=!1,X=!1,Y=!1,Z=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;function we(z){for(var L=f(p);L!==null;){if(L.callback===null)u(p);else if(L.startTime<=z)u(p),L.sortIndex=L.expirationTime,r(b,L);else break;L=f(p)}}function me(z){if(X=!1,we(z),!F)if(f(b)!==null)F=!0,Ee||(Ee=!0,Ge());else{var L=f(p);L!==null&&Ie(me,L.startTime-z)}}var Ee=!1,J=-1,je=5,Ue=-1;function Fe(){return Y?!0:!(s.unstable_now()-Ue<je)}function $e(){if(Y=!1,Ee){var z=s.unstable_now();Ue=z;var L=!0;try{e:{F=!1,X&&(X=!1,H(J),J=-1),q=!0;var $=O;try{t:{for(we(z),T=f(b);T!==null&&!(T.expirationTime>z&&Fe());){var fe=T.callback;if(typeof fe=="function"){T.callback=null,O=T.priorityLevel;var ge=fe(T.expirationTime<=z);if(z=s.unstable_now(),typeof ge=="function"){T.callback=ge,we(z),L=!0;break t}T===f(b)&&u(b),we(z)}else u(b);T=f(b)}if(T!==null)L=!0;else{var g=f(p);g!==null&&Ie(me,g.startTime-z),L=!1}}break e}finally{T=null,O=$,q=!1}L=void 0}}finally{L?Ge():Ee=!1}}}var Ge;if(typeof K=="function")Ge=function(){K($e)};else if(typeof MessageChannel<"u"){var Nt=new MessageChannel,gt=Nt.port2;Nt.port1.onmessage=$e,Ge=function(){gt.postMessage(null)}}else Ge=function(){Z($e,0)};function Ie(z,L){J=Z(function(){z(s.unstable_now())},L)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):je=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return O},s.unstable_next=function(z){switch(O){case 1:case 2:case 3:var L=3;break;default:L=O}var $=O;O=L;try{return z()}finally{O=$}},s.unstable_requestPaint=function(){Y=!0},s.unstable_runWithPriority=function(z,L){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var $=O;O=z;try{return L()}finally{O=$}},s.unstable_scheduleCallback=function(z,L,$){var fe=s.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?fe+$:fe):$=fe,z){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=$+ge,z={id:C++,callback:L,priorityLevel:z,startTime:$,expirationTime:ge,sortIndex:-1},$>fe?(z.sortIndex=$,r(p,z),f(b)===null&&z===f(p)&&(X?(H(J),J=-1):X=!0,Ie(me,$-fe))):(z.sortIndex=ge,r(b,z),F||q||(F=!0,Ee||(Ee=!0,Ge()))),z},s.unstable_shouldYield=Fe,s.unstable_wrapCallback=function(z){var L=O;return function(){var $=O;O=L;try{return z.apply(this,arguments)}finally{O=$}}}})(Cu)),Cu}var Pd;function og(){return Pd||(Pd=1,Mu.exports=ig()),Mu.exports}var Du={exports:{}},Ke={};var em;function sg(){if(em)return Ke;em=1;var s=qu();function r(b){var p="https://react.dev/errors/"+b;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)p+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+b+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var u={d:{f,r:function(){throw Error(r(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},m=Symbol.for("react.portal");function h(b,p,C){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:T==null?null:""+T,children:b,containerInfo:p,implementation:C}}var w=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function k(b,p){if(b==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Ke.createPortal=function(b,p){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(r(299));return h(b,p,null,C)},Ke.flushSync=function(b){var p=w.T,C=u.p;try{if(w.T=null,u.p=2,b)return b()}finally{w.T=p,u.p=C,u.d.f()}},Ke.preconnect=function(b,p){typeof b=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,u.d.C(b,p))},Ke.prefetchDNS=function(b){typeof b=="string"&&u.d.D(b)},Ke.preinit=function(b,p){if(typeof b=="string"&&p&&typeof p.as=="string"){var C=p.as,T=k(C,p.crossOrigin),O=typeof p.integrity=="string"?p.integrity:void 0,q=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;C==="style"?u.d.S(b,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:T,integrity:O,fetchPriority:q}):C==="script"&&u.d.X(b,{crossOrigin:T,integrity:O,fetchPriority:q,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ke.preinitModule=function(b,p){if(typeof b=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var C=k(p.as,p.crossOrigin);u.d.M(b,{crossOrigin:C,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&u.d.M(b)},Ke.preload=function(b,p){if(typeof b=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var C=p.as,T=k(C,p.crossOrigin);u.d.L(b,C,{crossOrigin:T,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ke.preloadModule=function(b,p){if(typeof b=="string")if(p){var C=k(p.as,p.crossOrigin);u.d.m(b,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:C,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else u.d.m(b)},Ke.requestFormReset=function(b){u.d.r(b)},Ke.unstable_batchedUpdates=function(b,p){return b(p)},Ke.useFormState=function(b,p,C){return w.H.useFormState(b,p,C)},Ke.useFormStatus=function(){return w.H.useHostTransitionStatus()},Ke.version="19.2.4",Ke}var tm;function ug(){if(tm)return Du.exports;tm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(r){console.error(r)}}return s(),Du.exports=sg(),Du.exports}var nm;function cg(){if(nm)return Cl;nm=1;var s=og(),r=qu(),f=ug();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function w(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function k(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(h(e)!==e)throw Error(u(188))}function p(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return b(l),e;if(i===a)return b(l),t;i=i.sibling}throw Error(u(188))}if(n.return!==a.return)n=l,a=i;else{for(var o=!1,c=l.child;c;){if(c===n){o=!0,n=l,a=i;break}if(c===a){o=!0,a=l,n=i;break}c=c.sibling}if(!o){for(c=i.child;c;){if(c===n){o=!0,n=i,a=l;break}if(c===a){o=!0,a=i,n=l;break}c=c.sibling}if(!o)throw Error(u(189))}}if(n.alternate!==a)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function C(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=C(e),t!==null)return t;e=e.sibling}return null}var T=Object.assign,O=Symbol.for("react.element"),q=Symbol.for("react.transitional.element"),F=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),K=Symbol.for("react.context"),we=Symbol.for("react.forward_ref"),me=Symbol.for("react.suspense"),Ee=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),je=Symbol.for("react.lazy"),Ue=Symbol.for("react.activity"),Fe=Symbol.for("react.memo_cache_sentinel"),$e=Symbol.iterator;function Ge(e){return e===null||typeof e!="object"?null:(e=$e&&e[$e]||e["@@iterator"],typeof e=="function"?e:null)}var Nt=Symbol.for("react.client.reference");function gt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Nt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case Z:return"Profiler";case Y:return"StrictMode";case me:return"Suspense";case Ee:return"SuspenseList";case Ue:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case F:return"Portal";case K:return e.displayName||"Context";case H:return(e._context.displayName||"Context")+".Consumer";case we:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case J:return t=e.displayName||null,t!==null?t:gt(e.type)||"Memo";case je:t=e._payload,e=e._init;try{return gt(e(t))}catch{}}return null}var Ie=Array.isArray,z=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},fe=[],ge=-1;function g(e){return{current:e}}function N(e){0>ge||(e.current=fe[ge],fe[ge]=null,ge--)}function _(e,t){ge++,fe[ge]=e.current,e.current=t}var G=g(null),P=g(null),ne=g(null),de=g(null);function Je(e,t){switch(_(ne,t),_(P,e),_(G,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?yd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=yd(t),e=vd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}N(G),_(G,e)}function Ne(){N(G),N(P),N(ne)}function Ba(e){e.memoizedState!==null&&_(de,e);var t=G.current,n=vd(t,e.type);t!==n&&(_(P,e),_(G,n))}function Bl(e){P.current===e&&(N(G),N(P)),de.current===e&&(N(de),kl._currentValue=$)}var ro,Vu;function Cn(e){if(ro===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ro=t&&t[1]||"",Vu=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ro+e+Vu}var fo=!1;function mo(e,t){if(!e||fo)return"";fo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(R){var E=R}Reflect.construct(e,[],D)}else{try{D.call()}catch(R){E=R}e.call(D.prototype)}}else{try{throw Error()}catch(R){E=R}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(R){if(R&&E&&typeof R.stack=="string")return[R.stack,E.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),o=i[0],c=i[1];if(o&&c){var d=o.split(`
`),A=c.split(`
`);for(l=a=0;a<d.length&&!d[a].includes("DetermineComponentFrameRoot");)a++;for(;l<A.length&&!A[l].includes("DetermineComponentFrameRoot");)l++;if(a===d.length||l===A.length)for(a=d.length-1,l=A.length-1;1<=a&&0<=l&&d[a]!==A[l];)l--;for(;1<=a&&0<=l;a--,l--)if(d[a]!==A[l]){if(a!==1||l!==1)do if(a--,l--,0>l||d[a]!==A[l]){var U=`
`+d[a].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=a&&0<=l);break}}}finally{fo=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Cn(n):""}function Cm(e,t){switch(e.tag){case 26:case 27:case 5:return Cn(e.type);case 16:return Cn("Lazy");case 13:return e.child!==t&&t!==null?Cn("Suspense Fallback"):Cn("Suspense");case 19:return Cn("SuspenseList");case 0:case 15:return mo(e.type,!1);case 11:return mo(e.type.render,!1);case 1:return mo(e.type,!0);case 31:return Cn("Activity");default:return""}}function Ku(e){try{var t="",n=null;do t+=Cm(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var ho=Object.prototype.hasOwnProperty,po=s.unstable_scheduleCallback,go=s.unstable_cancelCallback,Dm=s.unstable_shouldYield,Lm=s.unstable_requestPaint,ot=s.unstable_now,Om=s.unstable_getCurrentPriorityLevel,Ju=s.unstable_ImmediatePriority,Wu=s.unstable_UserBlockingPriority,ql=s.unstable_NormalPriority,_m=s.unstable_LowPriority,Fu=s.unstable_IdlePriority,Hm=s.log,Bm=s.unstable_setDisableYieldValue,qa=null,st=null;function on(e){if(typeof Hm=="function"&&Bm(e),st&&typeof st.setStrictMode=="function")try{st.setStrictMode(qa,e)}catch{}}var ut=Math.clz32?Math.clz32:Ym,qm=Math.log,Gm=Math.LN2;function Ym(e){return e>>>=0,e===0?32:31-(qm(e)/Gm|0)|0}var Gl=256,Yl=262144,Ql=4194304;function Dn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xl(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var c=a&134217727;return c!==0?(a=c&~i,a!==0?l=Dn(a):(o&=c,o!==0?l=Dn(o):n||(n=c&~e,n!==0&&(l=Dn(n))))):(c=a&~i,c!==0?l=Dn(c):o!==0?l=Dn(o):n||(n=a&~e,n!==0&&(l=Dn(n)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:l}function Ga(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Qm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $u(){var e=Ql;return Ql<<=1,(Ql&62914560)===0&&(Ql=4194304),e}function yo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ya(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Xm(e,t,n,a,l,i){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var c=e.entanglements,d=e.expirationTimes,A=e.hiddenUpdates;for(n=o&~n;0<n;){var U=31-ut(n),D=1<<U;c[U]=0,d[U]=-1;var E=A[U];if(E!==null)for(A[U]=null,U=0;U<E.length;U++){var R=E[U];R!==null&&(R.lane&=-536870913)}n&=~D}a!==0&&Iu(e,a,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~t))}function Iu(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-ut(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function Pu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-ut(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function ec(e,t){var n=t&-t;return n=(n&42)!==0?1:vo(n),(n&(e.suspendedLanes|t))!==0?0:n}function vo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function bo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function tc(){var e=L.p;return e!==0?e:(e=window.event,e===void 0?32:Gd(e.type))}function nc(e,t){var n=L.p;try{return L.p=e,t()}finally{L.p=n}}var sn=Math.random().toString(36).slice(2),Ye="__reactFiber$"+sn,Pe="__reactProps$"+sn,Pn="__reactContainer$"+sn,wo="__reactEvents$"+sn,Zm="__reactListeners$"+sn,Vm="__reactHandles$"+sn,ac="__reactResources$"+sn,Qa="__reactMarker$"+sn;function So(e){delete e[Ye],delete e[Pe],delete e[wo],delete e[Zm],delete e[Vm]}function ea(e){var t=e[Ye];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pn]||n[Ye]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Rd(e);e!==null;){if(n=e[Ye])return n;e=Rd(e)}return t}e=n,n=e.parentNode}return null}function ta(e){if(e=e[Ye]||e[Pn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Xa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function na(e){var t=e[ac];return t||(t=e[ac]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Be(e){e[Qa]=!0}var lc=new Set,ic={};function Ln(e,t){aa(e,t),aa(e+"Capture",t)}function aa(e,t){for(ic[e]=t,e=0;e<t.length;e++)lc.add(t[e])}var Km=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oc={},sc={};function Jm(e){return ho.call(sc,e)?!0:ho.call(oc,e)?!1:Km.test(e)?sc[e]=!0:(oc[e]=!0,!1)}function Zl(e,t,n){if(Jm(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Vl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Bt(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function uc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wm(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){n=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xo(e){if(!e._valueTracker){var t=uc(e)?"checked":"value";e._valueTracker=Wm(e,t,""+e[t])}}function cc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=uc(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Kl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Fm=/[\n"\\]/g;function vt(e){return e.replace(Fm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ao(e,t,n,a,l,i,o,c){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+yt(t)):e.value!==""+yt(t)&&(e.value=""+yt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Eo(e,o,yt(t)):n!=null?Eo(e,o,yt(n)):a!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+yt(c):e.removeAttribute("name")}function rc(e,t,n,a,l,i,o,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){xo(e);return}n=n!=null?""+yt(n):"",t=t!=null?""+yt(t):n,c||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=c?e.checked:!!a,e.defaultChecked=!!a,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),xo(e)}function Eo(e,t,n){t==="number"&&Kl(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function la(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+yt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function fc(e,t,n){if(t!=null&&(t=""+yt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+yt(n):""}function dc(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(u(92));if(Ie(a)){if(1<a.length)throw Error(u(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=yt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),xo(e)}function ia(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $m=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mc(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||$m.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function hc(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&mc(e,l,a)}else for(var i in t)t.hasOwnProperty(i)&&mc(e,i,t[i])}function Ro(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Im=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jl(e){return Pm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function qt(){}var To=null;function jo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var oa=null,sa=null;function pc(e){var t=ta(e);if(t&&(e=t.stateNode)){var n=e[Pe]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ao(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+vt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[Pe]||null;if(!l)throw Error(u(90));Ao(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&cc(a)}break e;case"textarea":fc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&la(e,!!n.multiple,t,!1)}}}var ko=!1;function gc(e,t,n){if(ko)return e(t,n);ko=!0;try{var a=e(t);return a}finally{if(ko=!1,(oa!==null||sa!==null)&&(Li(),oa&&(t=oa,e=sa,sa=oa=null,pc(t),e)))for(t=0;t<e.length;t++)pc(e[t])}}function Za(e,t){var n=e.stateNode;if(n===null)return null;var a=n[Pe]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zo=!1;if(Gt)try{var Va={};Object.defineProperty(Va,"passive",{get:function(){zo=!0}}),window.addEventListener("test",Va,Va),window.removeEventListener("test",Va,Va)}catch{zo=!1}var un=null,Uo=null,Wl=null;function yc(){if(Wl)return Wl;var e,t=Uo,n=t.length,a,l="value"in un?un.value:un.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(a=1;a<=o&&t[n-a]===l[i-a];a++);return Wl=l.slice(e,1<a?1-a:void 0)}function Fl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $l(){return!0}function vc(){return!1}function et(e){function t(n,a,l,i,o){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?$l:vc,this.isPropagationStopped=vc,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$l)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$l)},persist:function(){},isPersistent:$l}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Il=et(On),Ka=T({},On,{view:0,detail:0}),eh=et(Ka),No,Mo,Ja,Pl=T({},Ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Do,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ja&&(Ja&&e.type==="mousemove"?(No=e.screenX-Ja.screenX,Mo=e.screenY-Ja.screenY):Mo=No=0,Ja=e),No)},movementY:function(e){return"movementY"in e?e.movementY:Mo}}),bc=et(Pl),th=T({},Pl,{dataTransfer:0}),nh=et(th),ah=T({},Ka,{relatedTarget:0}),Co=et(ah),lh=T({},On,{animationName:0,elapsedTime:0,pseudoElement:0}),ih=et(lh),oh=T({},On,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sh=et(oh),uh=T({},On,{data:0}),wc=et(uh),ch={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fh[e])?!!t[e]:!1}function Do(){return dh}var mh=T({},Ka,{key:function(e){if(e.key){var t=ch[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Do,charCode:function(e){return e.type==="keypress"?Fl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hh=et(mh),ph=T({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sc=et(ph),gh=T({},Ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Do}),yh=et(gh),vh=T({},On,{propertyName:0,elapsedTime:0,pseudoElement:0}),bh=et(vh),wh=T({},Pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sh=et(wh),xh=T({},On,{newState:0,oldState:0}),Ah=et(xh),Eh=[9,13,27,32],Lo=Gt&&"CompositionEvent"in window,Wa=null;Gt&&"documentMode"in document&&(Wa=document.documentMode);var Rh=Gt&&"TextEvent"in window&&!Wa,xc=Gt&&(!Lo||Wa&&8<Wa&&11>=Wa),Ac=" ",Ec=!1;function Rc(e,t){switch(e){case"keyup":return Eh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ua=!1;function Th(e,t){switch(e){case"compositionend":return Tc(t);case"keypress":return t.which!==32?null:(Ec=!0,Ac);case"textInput":return e=t.data,e===Ac&&Ec?null:e;default:return null}}function jh(e,t){if(ua)return e==="compositionend"||!Lo&&Rc(e,t)?(e=yc(),Wl=Uo=un=null,ua=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xc&&t.locale!=="ko"?null:t.data;default:return null}}var kh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kh[e.type]:t==="textarea"}function kc(e,t,n,a){oa?sa?sa.push(a):sa=[a]:oa=a,t=Yi(t,"onChange"),0<t.length&&(n=new Il("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Fa=null,$a=null;function zh(e){fd(e,0)}function ei(e){var t=Xa(e);if(cc(t))return e}function zc(e,t){if(e==="change")return t}var Uc=!1;if(Gt){var Oo;if(Gt){var _o="oninput"in document;if(!_o){var Nc=document.createElement("div");Nc.setAttribute("oninput","return;"),_o=typeof Nc.oninput=="function"}Oo=_o}else Oo=!1;Uc=Oo&&(!document.documentMode||9<document.documentMode)}function Mc(){Fa&&(Fa.detachEvent("onpropertychange",Cc),$a=Fa=null)}function Cc(e){if(e.propertyName==="value"&&ei($a)){var t=[];kc(t,$a,e,jo(e)),gc(zh,t)}}function Uh(e,t,n){e==="focusin"?(Mc(),Fa=t,$a=n,Fa.attachEvent("onpropertychange",Cc)):e==="focusout"&&Mc()}function Nh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ei($a)}function Mh(e,t){if(e==="click")return ei(t)}function Ch(e,t){if(e==="input"||e==="change")return ei(t)}function Dh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:Dh;function Ia(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!ho.call(t,l)||!ct(e[l],t[l]))return!1}return!0}function Dc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lc(e,t){var n=Dc(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dc(n)}}function Oc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Oc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _c(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Kl(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kl(e.document)}return t}function Ho(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Lh=Gt&&"documentMode"in document&&11>=document.documentMode,ca=null,Bo=null,Pa=null,qo=!1;function Hc(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qo||ca==null||ca!==Kl(a)||(a=ca,"selectionStart"in a&&Ho(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Pa&&Ia(Pa,a)||(Pa=a,a=Yi(Bo,"onSelect"),0<a.length&&(t=new Il("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=ca)))}function _n(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ra={animationend:_n("Animation","AnimationEnd"),animationiteration:_n("Animation","AnimationIteration"),animationstart:_n("Animation","AnimationStart"),transitionrun:_n("Transition","TransitionRun"),transitionstart:_n("Transition","TransitionStart"),transitioncancel:_n("Transition","TransitionCancel"),transitionend:_n("Transition","TransitionEnd")},Go={},Bc={};Gt&&(Bc=document.createElement("div").style,"AnimationEvent"in window||(delete ra.animationend.animation,delete ra.animationiteration.animation,delete ra.animationstart.animation),"TransitionEvent"in window||delete ra.transitionend.transition);function Hn(e){if(Go[e])return Go[e];if(!ra[e])return e;var t=ra[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Bc)return Go[e]=t[n];return e}var qc=Hn("animationend"),Gc=Hn("animationiteration"),Yc=Hn("animationstart"),Oh=Hn("transitionrun"),_h=Hn("transitionstart"),Hh=Hn("transitioncancel"),Qc=Hn("transitionend"),Xc=new Map,Yo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yo.push("scrollEnd");function kt(e,t){Xc.set(e,t),Ln(t,[e])}var ti=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},bt=[],fa=0,Qo=0;function ni(){for(var e=fa,t=Qo=fa=0;t<e;){var n=bt[t];bt[t++]=null;var a=bt[t];bt[t++]=null;var l=bt[t];bt[t++]=null;var i=bt[t];if(bt[t++]=null,a!==null&&l!==null){var o=a.pending;o===null?l.next=l:(l.next=o.next,o.next=l),a.pending=l}i!==0&&Zc(n,l,i)}}function ai(e,t,n,a){bt[fa++]=e,bt[fa++]=t,bt[fa++]=n,bt[fa++]=a,Qo|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Xo(e,t,n,a){return ai(e,t,n,a),li(e)}function Bn(e,t){return ai(e,null,null,t),li(e)}function Zc(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,i=e.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-ut(n),e=i.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),i):null}function li(e){if(50<Sl)throw Sl=0,Ps=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var da={};function Bh(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,a){return new Bh(e,t,n,a)}function Zo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yt(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Vc(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ii(e,t,n,a,l,i){var o=0;if(a=e,typeof e=="function")Zo(e)&&(o=1);else if(typeof e=="string")o=Xp(e,n,G.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ue:return e=rt(31,n,t,l),e.elementType=Ue,e.lanes=i,e;case X:return qn(n.children,l,i,t);case Y:o=8,l|=24;break;case Z:return e=rt(12,n,t,l|2),e.elementType=Z,e.lanes=i,e;case me:return e=rt(13,n,t,l),e.elementType=me,e.lanes=i,e;case Ee:return e=rt(19,n,t,l),e.elementType=Ee,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case K:o=10;break e;case H:o=9;break e;case we:o=11;break e;case J:o=14;break e;case je:o=16,a=null;break e}o=29,n=Error(u(130,e===null?"null":typeof e,"")),a=null}return t=rt(o,n,t,l),t.elementType=e,t.type=a,t.lanes=i,t}function qn(e,t,n,a){return e=rt(7,e,a,t),e.lanes=n,e}function Vo(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function Kc(e){var t=rt(18,null,null,0);return t.stateNode=e,t}function Ko(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Jc=new WeakMap;function wt(e,t){if(typeof e=="object"&&e!==null){var n=Jc.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Ku(t)},Jc.set(e,t),t)}return{value:e,source:t,stack:Ku(t)}}var ma=[],ha=0,oi=null,el=0,St=[],xt=0,cn=null,Mt=1,Ct="";function Qt(e,t){ma[ha++]=el,ma[ha++]=oi,oi=e,el=t}function Wc(e,t,n){St[xt++]=Mt,St[xt++]=Ct,St[xt++]=cn,cn=e;var a=Mt;e=Ct;var l=32-ut(a)-1;a&=~(1<<l),n+=1;var i=32-ut(t)+l;if(30<i){var o=l-l%5;i=(a&(1<<o)-1).toString(32),a>>=o,l-=o,Mt=1<<32-ut(t)+l|n<<l|a,Ct=i+e}else Mt=1<<i|n<<l|a,Ct=e}function Jo(e){e.return!==null&&(Qt(e,1),Wc(e,1,0))}function Wo(e){for(;e===oi;)oi=ma[--ha],ma[ha]=null,el=ma[--ha],ma[ha]=null;for(;e===cn;)cn=St[--xt],St[xt]=null,Ct=St[--xt],St[xt]=null,Mt=St[--xt],St[xt]=null}function Fc(e,t){St[xt++]=Mt,St[xt++]=Ct,St[xt++]=cn,Mt=t.id,Ct=t.overflow,cn=e}var Qe=null,xe=null,se=!1,rn=null,At=!1,Fo=Error(u(519));function fn(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw tl(wt(t,e)),Fo}function $c(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Ye]=e,t[Pe]=a,n){case"dialog":le("cancel",t),le("close",t);break;case"iframe":case"object":case"embed":le("load",t);break;case"video":case"audio":for(n=0;n<Al.length;n++)le(Al[n],t);break;case"source":le("error",t);break;case"img":case"image":case"link":le("error",t),le("load",t);break;case"details":le("toggle",t);break;case"input":le("invalid",t),rc(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":le("invalid",t);break;case"textarea":le("invalid",t),dc(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||pd(t.textContent,n)?(a.popover!=null&&(le("beforetoggle",t),le("toggle",t)),a.onScroll!=null&&le("scroll",t),a.onScrollEnd!=null&&le("scrollend",t),a.onClick!=null&&(t.onclick=qt),t=!0):t=!1,t||fn(e,!0)}function Ic(e){for(Qe=e.return;Qe;)switch(Qe.tag){case 5:case 31:case 13:At=!1;return;case 27:case 3:At=!0;return;default:Qe=Qe.return}}function pa(e){if(e!==Qe)return!1;if(!se)return Ic(e),se=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||hu(e.type,e.memoizedProps)),n=!n),n&&xe&&fn(e),Ic(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));xe=Ed(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));xe=Ed(e)}else t===27?(t=xe,Rn(e.type)?(e=bu,bu=null,xe=e):xe=t):xe=Qe?Rt(e.stateNode.nextSibling):null;return!0}function Gn(){xe=Qe=null,se=!1}function $o(){var e=rn;return e!==null&&(lt===null?lt=e:lt.push.apply(lt,e),rn=null),e}function tl(e){rn===null?rn=[e]:rn.push(e)}var Io=g(null),Yn=null,Xt=null;function dn(e,t,n){_(Io,t._currentValue),t._currentValue=n}function Zt(e){e._currentValue=Io.current,N(Io)}function Po(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function es(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var o=l.child;i=i.firstContext;e:for(;i!==null;){var c=i;i=l;for(var d=0;d<t.length;d++)if(c.context===t[d]){i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Po(i.return,n,e),a||(o=null);break e}i=c.next}}else if(l.tag===18){if(o=l.return,o===null)throw Error(u(341));o.lanes|=n,i=o.alternate,i!==null&&(i.lanes|=n),Po(o,n,e),o=null}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===e){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}}function ga(e,t,n,a){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var o=l.alternate;if(o===null)throw Error(u(387));if(o=o.memoizedProps,o!==null){var c=l.type;ct(l.pendingProps.value,o.value)||(e!==null?e.push(c):e=[c])}}else if(l===de.current){if(o=l.alternate,o===null)throw Error(u(387));o.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(kl):e=[kl])}l=l.return}e!==null&&es(t,e,n,a),t.flags|=262144}function si(e){for(e=e.firstContext;e!==null;){if(!ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Qn(e){Yn=e,Xt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Xe(e){return Pc(Yn,e)}function ui(e,t){return Yn===null&&Qn(e),Pc(e,t)}function Pc(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Xt===null){if(e===null)throw Error(u(308));Xt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Xt=Xt.next=t;return n}var qh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Gh=s.unstable_scheduleCallback,Yh=s.unstable_NormalPriority,De={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ts(){return{controller:new qh,data:new Map,refCount:0}}function nl(e){e.refCount--,e.refCount===0&&Gh(Yh,function(){e.controller.abort()})}var al=null,ns=0,ya=0,va=null;function Qh(e,t){if(al===null){var n=al=[];ns=0,ya=iu(),va={status:"pending",value:void 0,then:function(a){n.push(a)}}}return ns++,t.then(er,er),t}function er(){if(--ns===0&&al!==null){va!==null&&(va.status="fulfilled");var e=al;al=null,ya=0,va=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Xh(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var tr=z.S;z.S=function(e,t){Bf=ot(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Qh(e,t),tr!==null&&tr(e,t)};var Xn=g(null);function as(){var e=Xn.current;return e!==null?e:Se.pooledCache}function ci(e,t){t===null?_(Xn,Xn.current):_(Xn,t.pool)}function nr(){var e=as();return e===null?null:{parent:De._currentValue,pool:e}}var ba=Error(u(460)),ls=Error(u(474)),ri=Error(u(542)),fi={then:function(){}};function ar(e){return e=e.status,e==="fulfilled"||e==="rejected"}function lr(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(qt,qt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,or(e),e;default:if(typeof t.status=="string")t.then(qt,qt);else{if(e=Se,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,or(e),e}throw Vn=t,ba}}function Zn(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Vn=n,ba):n}}var Vn=null;function ir(){if(Vn===null)throw Error(u(459));var e=Vn;return Vn=null,e}function or(e){if(e===ba||e===ri)throw Error(u(483))}var wa=null,ll=0;function di(e){var t=ll;return ll+=1,wa===null&&(wa=[]),lr(wa,e,t)}function il(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function mi(e,t){throw t.$$typeof===O?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function sr(e){function t(S,y){if(e){var x=S.deletions;x===null?(S.deletions=[y],S.flags|=16):x.push(y)}}function n(S,y){if(!e)return null;for(;y!==null;)t(S,y),y=y.sibling;return null}function a(S){for(var y=new Map;S!==null;)S.key!==null?y.set(S.key,S):y.set(S.index,S),S=S.sibling;return y}function l(S,y){return S=Yt(S,y),S.index=0,S.sibling=null,S}function i(S,y,x){return S.index=x,e?(x=S.alternate,x!==null?(x=x.index,x<y?(S.flags|=67108866,y):x):(S.flags|=67108866,y)):(S.flags|=1048576,y)}function o(S){return e&&S.alternate===null&&(S.flags|=67108866),S}function c(S,y,x,M){return y===null||y.tag!==6?(y=Vo(x,S.mode,M),y.return=S,y):(y=l(y,x),y.return=S,y)}function d(S,y,x,M){var V=x.type;return V===X?U(S,y,x.props.children,M,x.key):y!==null&&(y.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===je&&Zn(V)===y.type)?(y=l(y,x.props),il(y,x),y.return=S,y):(y=ii(x.type,x.key,x.props,null,S.mode,M),il(y,x),y.return=S,y)}function A(S,y,x,M){return y===null||y.tag!==4||y.stateNode.containerInfo!==x.containerInfo||y.stateNode.implementation!==x.implementation?(y=Ko(x,S.mode,M),y.return=S,y):(y=l(y,x.children||[]),y.return=S,y)}function U(S,y,x,M,V){return y===null||y.tag!==7?(y=qn(x,S.mode,M,V),y.return=S,y):(y=l(y,x),y.return=S,y)}function D(S,y,x){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=Vo(""+y,S.mode,x),y.return=S,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case q:return x=ii(y.type,y.key,y.props,null,S.mode,x),il(x,y),x.return=S,x;case F:return y=Ko(y,S.mode,x),y.return=S,y;case je:return y=Zn(y),D(S,y,x)}if(Ie(y)||Ge(y))return y=qn(y,S.mode,x,null),y.return=S,y;if(typeof y.then=="function")return D(S,di(y),x);if(y.$$typeof===K)return D(S,ui(S,y),x);mi(S,y)}return null}function E(S,y,x,M){var V=y!==null?y.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return V!==null?null:c(S,y,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case q:return x.key===V?d(S,y,x,M):null;case F:return x.key===V?A(S,y,x,M):null;case je:return x=Zn(x),E(S,y,x,M)}if(Ie(x)||Ge(x))return V!==null?null:U(S,y,x,M,null);if(typeof x.then=="function")return E(S,y,di(x),M);if(x.$$typeof===K)return E(S,y,ui(S,x),M);mi(S,x)}return null}function R(S,y,x,M,V){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return S=S.get(x)||null,c(y,S,""+M,V);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case q:return S=S.get(M.key===null?x:M.key)||null,d(y,S,M,V);case F:return S=S.get(M.key===null?x:M.key)||null,A(y,S,M,V);case je:return M=Zn(M),R(S,y,x,M,V)}if(Ie(M)||Ge(M))return S=S.get(x)||null,U(y,S,M,V,null);if(typeof M.then=="function")return R(S,y,x,di(M),V);if(M.$$typeof===K)return R(S,y,x,ui(y,M),V);mi(y,M)}return null}function B(S,y,x,M){for(var V=null,ue=null,Q=y,te=y=0,oe=null;Q!==null&&te<x.length;te++){Q.index>te?(oe=Q,Q=null):oe=Q.sibling;var ce=E(S,Q,x[te],M);if(ce===null){Q===null&&(Q=oe);break}e&&Q&&ce.alternate===null&&t(S,Q),y=i(ce,y,te),ue===null?V=ce:ue.sibling=ce,ue=ce,Q=oe}if(te===x.length)return n(S,Q),se&&Qt(S,te),V;if(Q===null){for(;te<x.length;te++)Q=D(S,x[te],M),Q!==null&&(y=i(Q,y,te),ue===null?V=Q:ue.sibling=Q,ue=Q);return se&&Qt(S,te),V}for(Q=a(Q);te<x.length;te++)oe=R(Q,S,te,x[te],M),oe!==null&&(e&&oe.alternate!==null&&Q.delete(oe.key===null?te:oe.key),y=i(oe,y,te),ue===null?V=oe:ue.sibling=oe,ue=oe);return e&&Q.forEach(function(Un){return t(S,Un)}),se&&Qt(S,te),V}function W(S,y,x,M){if(x==null)throw Error(u(151));for(var V=null,ue=null,Q=y,te=y=0,oe=null,ce=x.next();Q!==null&&!ce.done;te++,ce=x.next()){Q.index>te?(oe=Q,Q=null):oe=Q.sibling;var Un=E(S,Q,ce.value,M);if(Un===null){Q===null&&(Q=oe);break}e&&Q&&Un.alternate===null&&t(S,Q),y=i(Un,y,te),ue===null?V=Un:ue.sibling=Un,ue=Un,Q=oe}if(ce.done)return n(S,Q),se&&Qt(S,te),V;if(Q===null){for(;!ce.done;te++,ce=x.next())ce=D(S,ce.value,M),ce!==null&&(y=i(ce,y,te),ue===null?V=ce:ue.sibling=ce,ue=ce);return se&&Qt(S,te),V}for(Q=a(Q);!ce.done;te++,ce=x.next())ce=R(Q,S,te,ce.value,M),ce!==null&&(e&&ce.alternate!==null&&Q.delete(ce.key===null?te:ce.key),y=i(ce,y,te),ue===null?V=ce:ue.sibling=ce,ue=ce);return e&&Q.forEach(function(tg){return t(S,tg)}),se&&Qt(S,te),V}function be(S,y,x,M){if(typeof x=="object"&&x!==null&&x.type===X&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case q:e:{for(var V=x.key;y!==null;){if(y.key===V){if(V=x.type,V===X){if(y.tag===7){n(S,y.sibling),M=l(y,x.props.children),M.return=S,S=M;break e}}else if(y.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===je&&Zn(V)===y.type){n(S,y.sibling),M=l(y,x.props),il(M,x),M.return=S,S=M;break e}n(S,y);break}else t(S,y);y=y.sibling}x.type===X?(M=qn(x.props.children,S.mode,M,x.key),M.return=S,S=M):(M=ii(x.type,x.key,x.props,null,S.mode,M),il(M,x),M.return=S,S=M)}return o(S);case F:e:{for(V=x.key;y!==null;){if(y.key===V)if(y.tag===4&&y.stateNode.containerInfo===x.containerInfo&&y.stateNode.implementation===x.implementation){n(S,y.sibling),M=l(y,x.children||[]),M.return=S,S=M;break e}else{n(S,y);break}else t(S,y);y=y.sibling}M=Ko(x,S.mode,M),M.return=S,S=M}return o(S);case je:return x=Zn(x),be(S,y,x,M)}if(Ie(x))return B(S,y,x,M);if(Ge(x)){if(V=Ge(x),typeof V!="function")throw Error(u(150));return x=V.call(x),W(S,y,x,M)}if(typeof x.then=="function")return be(S,y,di(x),M);if(x.$$typeof===K)return be(S,y,ui(S,x),M);mi(S,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,y!==null&&y.tag===6?(n(S,y.sibling),M=l(y,x),M.return=S,S=M):(n(S,y),M=Vo(x,S.mode,M),M.return=S,S=M),o(S)):n(S,y)}return function(S,y,x,M){try{ll=0;var V=be(S,y,x,M);return wa=null,V}catch(Q){if(Q===ba||Q===ri)throw Q;var ue=rt(29,Q,null,S.mode);return ue.lanes=M,ue.return=S,ue}}}var Kn=sr(!0),ur=sr(!1),mn=!1;function is(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function os(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function hn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function pn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(re&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=li(e),Zc(e,null,n),t}return ai(e,a,t,n),li(e)}function ol(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Pu(e,n)}}function ss(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var us=!1;function sl(){if(us){var e=va;if(e!==null)throw e}}function ul(e,t,n,a){us=!1;var l=e.updateQueue;mn=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,c=l.shared.pending;if(c!==null){l.shared.pending=null;var d=c,A=d.next;d.next=null,o===null?i=A:o.next=A,o=d;var U=e.alternate;U!==null&&(U=U.updateQueue,c=U.lastBaseUpdate,c!==o&&(c===null?U.firstBaseUpdate=A:c.next=A,U.lastBaseUpdate=d))}if(i!==null){var D=l.baseState;o=0,U=A=d=null,c=i;do{var E=c.lane&-536870913,R=E!==c.lane;if(R?(ie&E)===E:(a&E)===E){E!==0&&E===ya&&(us=!0),U!==null&&(U=U.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var B=e,W=c;E=t;var be=n;switch(W.tag){case 1:if(B=W.payload,typeof B=="function"){D=B.call(be,D,E);break e}D=B;break e;case 3:B.flags=B.flags&-65537|128;case 0:if(B=W.payload,E=typeof B=="function"?B.call(be,D,E):B,E==null)break e;D=T({},D,E);break e;case 2:mn=!0}}E=c.callback,E!==null&&(e.flags|=64,R&&(e.flags|=8192),R=l.callbacks,R===null?l.callbacks=[E]:R.push(E))}else R={lane:E,tag:c.tag,payload:c.payload,callback:c.callback,next:null},U===null?(A=U=R,d=D):U=U.next=R,o|=E;if(c=c.next,c===null){if(c=l.shared.pending,c===null)break;R=c,c=R.next,R.next=null,l.lastBaseUpdate=R,l.shared.pending=null}}while(!0);U===null&&(d=D),l.baseState=d,l.firstBaseUpdate=A,l.lastBaseUpdate=U,i===null&&(l.shared.lanes=0),wn|=o,e.lanes=o,e.memoizedState=D}}function cr(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function rr(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)cr(n[e],t)}var Sa=g(null),hi=g(0);function fr(e,t){e=en,_(hi,e),_(Sa,t),en=e|t.baseLanes}function cs(){_(hi,en),_(Sa,Sa.current)}function rs(){en=hi.current,N(Sa),N(hi)}var ft=g(null),Et=null;function gn(e){var t=e.alternate;_(Me,Me.current&1),_(ft,e),Et===null&&(t===null||Sa.current!==null||t.memoizedState!==null)&&(Et=e)}function fs(e){_(Me,Me.current),_(ft,e),Et===null&&(Et=e)}function dr(e){e.tag===22?(_(Me,Me.current),_(ft,e),Et===null&&(Et=e)):yn()}function yn(){_(Me,Me.current),_(ft,ft.current)}function dt(e){N(ft),Et===e&&(Et=null),N(Me)}var Me=g(0);function pi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||yu(n)||vu(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vt=0,ee=null,ye=null,Le=null,gi=!1,xa=!1,Jn=!1,yi=0,cl=0,Aa=null,Zh=0;function ke(){throw Error(u(321))}function ds(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ct(e[n],t[n]))return!1;return!0}function ms(e,t,n,a,l,i){return Vt=i,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,z.H=e===null||e.memoizedState===null?Wr:ks,Jn=!1,i=n(a,l),Jn=!1,xa&&(i=hr(t,n,a,l)),mr(e),i}function mr(e){z.H=dl;var t=ye!==null&&ye.next!==null;if(Vt=0,Le=ye=ee=null,gi=!1,cl=0,Aa=null,t)throw Error(u(300));e===null||Oe||(e=e.dependencies,e!==null&&si(e)&&(Oe=!0))}function hr(e,t,n,a){ee=e;var l=0;do{if(xa&&(Aa=null),cl=0,xa=!1,25<=l)throw Error(u(301));if(l+=1,Le=ye=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}z.H=Fr,i=t(n,a)}while(xa);return i}function Vh(){var e=z.H,t=e.useState()[0];return t=typeof t.then=="function"?rl(t):t,e=e.useState()[0],(ye!==null?ye.memoizedState:null)!==e&&(ee.flags|=1024),t}function hs(){var e=yi!==0;return yi=0,e}function ps(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function gs(e){if(gi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}gi=!1}Vt=0,Le=ye=ee=null,xa=!1,cl=yi=0,Aa=null}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?ee.memoizedState=Le=e:Le=Le.next=e,Le}function Ce(){if(ye===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=Le===null?ee.memoizedState:Le.next;if(t!==null)Le=t,ye=e;else{if(e===null)throw ee.alternate===null?Error(u(467)):Error(u(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},Le===null?ee.memoizedState=Le=e:Le=Le.next=e}return Le}function vi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function rl(e){var t=cl;return cl+=1,Aa===null&&(Aa=[]),e=lr(Aa,e,t),t=ee,(Le===null?t.memoizedState:Le.next)===null&&(t=t.alternate,z.H=t===null||t.memoizedState===null?Wr:ks),e}function bi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return rl(e);if(e.$$typeof===K)return Xe(e)}throw Error(u(438,String(e)))}function ys(e){var t=null,n=ee.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=ee.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=vi(),ee.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=Fe;return t.index++,n}function Kt(e,t){return typeof t=="function"?t(e):t}function wi(e){var t=Ce();return vs(t,ye,e)}function vs(e,t,n){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=n;var l=e.baseQueue,i=a.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}t.baseQueue=l=i,a.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var c=o=null,d=null,A=t,U=!1;do{var D=A.lane&-536870913;if(D!==A.lane?(ie&D)===D:(Vt&D)===D){var E=A.revertLane;if(E===0)d!==null&&(d=d.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),D===ya&&(U=!0);else if((Vt&E)===E){A=A.next,E===ya&&(U=!0);continue}else D={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},d===null?(c=d=D,o=i):d=d.next=D,ee.lanes|=E,wn|=E;D=A.action,Jn&&n(i,D),i=A.hasEagerState?A.eagerState:n(i,D)}else E={lane:D,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},d===null?(c=d=E,o=i):d=d.next=E,ee.lanes|=D,wn|=D;A=A.next}while(A!==null&&A!==t);if(d===null?o=i:d.next=c,!ct(i,e.memoizedState)&&(Oe=!0,U&&(n=va,n!==null)))throw n;e.memoizedState=i,e.baseState=o,e.baseQueue=d,a.lastRenderedState=i}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function bs(e){var t=Ce(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);ct(i,t.memoizedState)||(Oe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function pr(e,t,n){var a=ee,l=Ce(),i=se;if(i){if(n===void 0)throw Error(u(407));n=n()}else n=t();var o=!ct((ye||l).memoizedState,n);if(o&&(l.memoizedState=n,Oe=!0),l=l.queue,xs(vr.bind(null,a,l,e),[e]),l.getSnapshot!==t||o||Le!==null&&Le.memoizedState.tag&1){if(a.flags|=2048,Ea(9,{destroy:void 0},yr.bind(null,a,l,n,t),null),Se===null)throw Error(u(349));i||(Vt&127)!==0||gr(a,t,n)}return n}function gr(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ee.updateQueue,t===null?(t=vi(),ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function yr(e,t,n,a){t.value=n,t.getSnapshot=a,br(t)&&wr(e)}function vr(e,t,n){return n(function(){br(t)&&wr(e)})}function br(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ct(e,n)}catch{return!0}}function wr(e){var t=Bn(e,2);t!==null&&it(t,e,2)}function ws(e){var t=We();if(typeof e=="function"){var n=e;if(e=n(),Jn){on(!0);try{n()}finally{on(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:e},t}function Sr(e,t,n,a){return e.baseState=n,vs(e,ye,typeof a=="function"?a:Kt)}function Kh(e,t,n,a,l){if(Ai(e))throw Error(u(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};z.T!==null?n(!0):i.isTransition=!1,a(i),n=t.pending,n===null?(i.next=t.pending=i,xr(t,i)):(i.next=n.next,t.pending=n.next=i)}}function xr(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var i=z.T,o={};z.T=o;try{var c=n(l,a),d=z.S;d!==null&&d(o,c),Ar(e,t,c)}catch(A){Ss(e,t,A)}finally{i!==null&&o.types!==null&&(i.types=o.types),z.T=i}}else try{i=n(l,a),Ar(e,t,i)}catch(A){Ss(e,t,A)}}function Ar(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Er(e,t,a)},function(a){return Ss(e,t,a)}):Er(e,t,n)}function Er(e,t,n){t.status="fulfilled",t.value=n,Rr(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,xr(e,n)))}function Ss(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Rr(t),t=t.next;while(t!==a)}e.action=null}function Rr(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Tr(e,t){return t}function jr(e,t){if(se){var n=Se.formState;if(n!==null){e:{var a=ee;if(se){if(xe){t:{for(var l=xe,i=At;l.nodeType!==8;){if(!i){l=null;break t}if(l=Rt(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){xe=Rt(l.nextSibling),a=l.data==="F!";break e}}fn(a)}a=!1}a&&(t=n[0])}}return n=We(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tr,lastRenderedState:t},n.queue=a,n=Vr.bind(null,ee,a),a.dispatch=n,a=ws(!1),i=js.bind(null,ee,!1,a.queue),a=We(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=Kh.bind(null,ee,l,i,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function kr(e){var t=Ce();return zr(t,ye,e)}function zr(e,t,n){if(t=vs(e,t,Tr)[0],e=wi(Kt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=rl(t)}catch(o){throw o===ba?ri:o}else a=t;t=Ce();var l=t.queue,i=l.dispatch;return n!==t.memoizedState&&(ee.flags|=2048,Ea(9,{destroy:void 0},Jh.bind(null,l,n),null)),[a,i,e]}function Jh(e,t){e.action=t}function Ur(e){var t=Ce(),n=ye;if(n!==null)return zr(t,n,e);Ce(),t=t.memoizedState,n=Ce();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Ea(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=ee.updateQueue,t===null&&(t=vi(),ee.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function Nr(){return Ce().memoizedState}function Si(e,t,n,a){var l=We();ee.flags|=e,l.memoizedState=Ea(1|t,{destroy:void 0},n,a===void 0?null:a)}function xi(e,t,n,a){var l=Ce();a=a===void 0?null:a;var i=l.memoizedState.inst;ye!==null&&a!==null&&ds(a,ye.memoizedState.deps)?l.memoizedState=Ea(t,i,n,a):(ee.flags|=e,l.memoizedState=Ea(1|t,i,n,a))}function Mr(e,t){Si(8390656,8,e,t)}function xs(e,t){xi(2048,8,e,t)}function Wh(e){ee.flags|=4;var t=ee.updateQueue;if(t===null)t=vi(),ee.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Cr(e){var t=Ce().memoizedState;return Wh({ref:t,nextImpl:e}),function(){if((re&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function Dr(e,t){return xi(4,2,e,t)}function Lr(e,t){return xi(4,4,e,t)}function Or(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _r(e,t,n){n=n!=null?n.concat([e]):null,xi(4,4,Or.bind(null,t,e),n)}function As(){}function Hr(e,t){var n=Ce();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&ds(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function Br(e,t){var n=Ce();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&ds(t,a[1]))return a[0];if(a=e(),Jn){on(!0);try{e()}finally{on(!1)}}return n.memoizedState=[a,t],a}function Es(e,t,n){return n===void 0||(Vt&1073741824)!==0&&(ie&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Gf(),ee.lanes|=e,wn|=e,n)}function qr(e,t,n,a){return ct(n,t)?n:Sa.current!==null?(e=Es(e,n,a),ct(e,t)||(Oe=!0),e):(Vt&42)===0||(Vt&1073741824)!==0&&(ie&261930)===0?(Oe=!0,e.memoizedState=n):(e=Gf(),ee.lanes|=e,wn|=e,t)}function Gr(e,t,n,a,l){var i=L.p;L.p=i!==0&&8>i?i:8;var o=z.T,c={};z.T=c,js(e,!1,t,n);try{var d=l(),A=z.S;if(A!==null&&A(c,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var U=Xh(d,a);fl(e,t,U,pt(e))}else fl(e,t,a,pt(e))}catch(D){fl(e,t,{then:function(){},status:"rejected",reason:D},pt())}finally{L.p=i,o!==null&&c.types!==null&&(o.types=c.types),z.T=o}}function Fh(){}function Rs(e,t,n,a){if(e.tag!==5)throw Error(u(476));var l=Yr(e).queue;Gr(e,l,t,$,n===null?Fh:function(){return Qr(e),n(a)})}function Yr(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:$},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Qr(e){var t=Yr(e);t.next===null&&(t=e.alternate.memoizedState),fl(e,t.next.queue,{},pt())}function Ts(){return Xe(kl)}function Xr(){return Ce().memoizedState}function Zr(){return Ce().memoizedState}function $h(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pt();e=hn(n);var a=pn(t,e,n);a!==null&&(it(a,t,n),ol(a,t,n)),t={cache:ts()},e.payload=t;return}t=t.return}}function Ih(e,t,n){var a=pt();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ai(e)?Kr(t,n):(n=Xo(e,t,n,a),n!==null&&(it(n,e,a),Jr(n,t,a)))}function Vr(e,t,n){var a=pt();fl(e,t,n,a)}function fl(e,t,n,a){var l={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ai(e))Kr(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,c=i(o,n);if(l.hasEagerState=!0,l.eagerState=c,ct(c,o))return ai(e,t,l,0),Se===null&&ni(),!1}catch{}if(n=Xo(e,t,l,a),n!==null)return it(n,e,a),Jr(n,t,a),!0}return!1}function js(e,t,n,a){if(a={lane:2,revertLane:iu(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ai(e)){if(t)throw Error(u(479))}else t=Xo(e,n,a,2),t!==null&&it(t,e,2)}function Ai(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function Kr(e,t){xa=gi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Jr(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Pu(e,n)}}var dl={readContext:Xe,use:bi,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useLayoutEffect:ke,useInsertionEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useSyncExternalStore:ke,useId:ke,useHostTransitionStatus:ke,useFormState:ke,useActionState:ke,useOptimistic:ke,useMemoCache:ke,useCacheRefresh:ke};dl.useEffectEvent=ke;var Wr={readContext:Xe,use:bi,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Xe,useEffect:Mr,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Si(4194308,4,Or.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Si(4194308,4,e,t)},useInsertionEffect:function(e,t){Si(4,2,e,t)},useMemo:function(e,t){var n=We();t=t===void 0?null:t;var a=e();if(Jn){on(!0);try{e()}finally{on(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=We();if(n!==void 0){var l=n(t);if(Jn){on(!0);try{n(t)}finally{on(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=Ih.bind(null,ee,e),[a.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:function(e){e=ws(e);var t=e.queue,n=Vr.bind(null,ee,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:As,useDeferredValue:function(e,t){var n=We();return Es(n,e,t)},useTransition:function(){var e=ws(!1);return e=Gr.bind(null,ee,e.queue,!0,!1),We().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=ee,l=We();if(se){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Se===null)throw Error(u(349));(ie&127)!==0||gr(a,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Mr(vr.bind(null,a,i,e),[e]),a.flags|=2048,Ea(9,{destroy:void 0},yr.bind(null,a,i,n,t),null),n},useId:function(){var e=We(),t=Se.identifierPrefix;if(se){var n=Ct,a=Mt;n=(a&~(1<<32-ut(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=yi++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Zh++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ts,useFormState:jr,useActionState:jr,useOptimistic:function(e){var t=We();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=js.bind(null,ee,!0,n),n.dispatch=t,[e,t]},useMemoCache:ys,useCacheRefresh:function(){return We().memoizedState=$h.bind(null,ee)},useEffectEvent:function(e){var t=We(),n={impl:e};return t.memoizedState=n,function(){if((re&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}},ks={readContext:Xe,use:bi,useCallback:Hr,useContext:Xe,useEffect:xs,useImperativeHandle:_r,useInsertionEffect:Dr,useLayoutEffect:Lr,useMemo:Br,useReducer:wi,useRef:Nr,useState:function(){return wi(Kt)},useDebugValue:As,useDeferredValue:function(e,t){var n=Ce();return qr(n,ye.memoizedState,e,t)},useTransition:function(){var e=wi(Kt)[0],t=Ce().memoizedState;return[typeof e=="boolean"?e:rl(e),t]},useSyncExternalStore:pr,useId:Xr,useHostTransitionStatus:Ts,useFormState:kr,useActionState:kr,useOptimistic:function(e,t){var n=Ce();return Sr(n,ye,e,t)},useMemoCache:ys,useCacheRefresh:Zr};ks.useEffectEvent=Cr;var Fr={readContext:Xe,use:bi,useCallback:Hr,useContext:Xe,useEffect:xs,useImperativeHandle:_r,useInsertionEffect:Dr,useLayoutEffect:Lr,useMemo:Br,useReducer:bs,useRef:Nr,useState:function(){return bs(Kt)},useDebugValue:As,useDeferredValue:function(e,t){var n=Ce();return ye===null?Es(n,e,t):qr(n,ye.memoizedState,e,t)},useTransition:function(){var e=bs(Kt)[0],t=Ce().memoizedState;return[typeof e=="boolean"?e:rl(e),t]},useSyncExternalStore:pr,useId:Xr,useHostTransitionStatus:Ts,useFormState:Ur,useActionState:Ur,useOptimistic:function(e,t){var n=Ce();return ye!==null?Sr(n,ye,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ys,useCacheRefresh:Zr};Fr.useEffectEvent=Cr;function zs(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:T({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Us={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=pt(),l=hn(a);l.payload=t,n!=null&&(l.callback=n),t=pn(e,l,a),t!==null&&(it(t,e,a),ol(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=pt(),l=hn(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=pn(e,l,a),t!==null&&(it(t,e,a),ol(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pt(),a=hn(n);a.tag=2,t!=null&&(a.callback=t),t=pn(e,a,n),t!==null&&(it(t,e,n),ol(t,e,n))}};function $r(e,t,n,a,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,o):t.prototype&&t.prototype.isPureReactComponent?!Ia(n,a)||!Ia(l,i):!0}function Ir(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Us.enqueueReplaceState(t,t.state,null)}function Wn(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=T({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function Pr(e){ti(e)}function ef(e){console.error(e)}function tf(e){ti(e)}function Ei(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function nf(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Ns(e,t,n){return n=hn(n),n.tag=3,n.payload={element:null},n.callback=function(){Ei(e,t)},n}function af(e){return e=hn(e),e.tag=3,e}function lf(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;e.payload=function(){return l(i)},e.callback=function(){nf(t,n,a)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){nf(t,n,a),typeof l!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function Ph(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&ga(t,n,l,!0),n=ft.current,n!==null){switch(n.tag){case 31:case 13:return Et===null?Oi():n.alternate===null&&ze===0&&(ze=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===fi?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),nu(e,a,l)),!1;case 22:return n.flags|=65536,a===fi?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),nu(e,a,l)),!1}throw Error(u(435,n.tag))}return nu(e,a,l),Oi(),!1}if(se)return t=ft.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==Fo&&(e=Error(u(422),{cause:a}),tl(wt(e,n)))):(a!==Fo&&(t=Error(u(423),{cause:a}),tl(wt(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=wt(a,n),l=Ns(e.stateNode,a,l),ss(e,l),ze!==4&&(ze=2)),!1;var i=Error(u(520),{cause:a});if(i=wt(i,n),wl===null?wl=[i]:wl.push(i),ze!==4&&(ze=2),t===null)return!0;a=wt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Ns(n.stateNode,a,e),ss(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Sn===null||!Sn.has(i))))return n.flags|=65536,l&=-l,n.lanes|=l,l=af(l),lf(l,e,n,a),ss(n,l),!1}n=n.return}while(n!==null);return!1}var Ms=Error(u(461)),Oe=!1;function Ze(e,t,n,a){t.child=e===null?ur(t,null,n,a):Kn(t,e.child,n,a)}function of(e,t,n,a,l){n=n.render;var i=t.ref;if("ref"in a){var o={};for(var c in a)c!=="ref"&&(o[c]=a[c])}else o=a;return Qn(t),a=ms(e,t,n,o,i,l),c=hs(),e!==null&&!Oe?(ps(e,t,l),Jt(e,t,l)):(se&&c&&Jo(t),t.flags|=1,Ze(e,t,a,l),t.child)}function sf(e,t,n,a,l){if(e===null){var i=n.type;return typeof i=="function"&&!Zo(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,uf(e,t,i,a,l)):(e=ii(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!qs(e,l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ia,n(o,a)&&e.ref===t.ref)return Jt(e,t,l)}return t.flags|=1,e=Yt(i,a),e.ref=t.ref,e.return=t,t.child=e}function uf(e,t,n,a,l){if(e!==null){var i=e.memoizedProps;if(Ia(i,a)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=a=i,qs(e,l))(e.flags&131072)!==0&&(Oe=!0);else return t.lanes=e.lanes,Jt(e,t,l)}return Cs(e,t,n,a,l)}function cf(e,t,n,a){var l=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(a=t.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~i}else a=0,t.child=null;return rf(e,t,i,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ci(t,i!==null?i.cachePool:null),i!==null?fr(t,i):cs(),dr(t);else return a=t.lanes=536870912,rf(e,t,i!==null?i.baseLanes|n:n,n,a)}else i!==null?(ci(t,i.cachePool),fr(t,i),yn(),t.memoizedState=null):(e!==null&&ci(t,null),cs(),yn());return Ze(e,t,l,n),t.child}function ml(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function rf(e,t,n,a,l){var i=as();return i=i===null?null:{parent:De._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&ci(t,null),cs(),dr(t),e!==null&&ga(e,t,a,!0),t.childLanes=l,null}function Ri(e,t){return t=ji({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function ff(e,t,n){return Kn(t,e.child,null,n),e=Ri(t,t.pendingProps),e.flags|=2,dt(t),t.memoizedState=null,e}function ep(e,t,n){var a=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(se){if(a.mode==="hidden")return e=Ri(t,a),t.lanes=536870912,ml(null,e);if(fs(t),(e=xe)?(e=Ad(e,At),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:cn!==null?{id:Mt,overflow:Ct}:null,retryLane:536870912,hydrationErrors:null},n=Kc(e),n.return=t,t.child=n,Qe=t,xe=null)):e=null,e===null)throw fn(t);return t.lanes=536870912,null}return Ri(t,a)}var i=e.memoizedState;if(i!==null){var o=i.dehydrated;if(fs(t),l)if(t.flags&256)t.flags&=-257,t=ff(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(Oe||ga(e,t,n,!1),l=(n&e.childLanes)!==0,Oe||l){if(a=Se,a!==null&&(o=ec(a,n),o!==0&&o!==i.retryLane))throw i.retryLane=o,Bn(e,o),it(a,e,o),Ms;Oi(),t=ff(e,t,n)}else e=i.treeContext,xe=Rt(o.nextSibling),Qe=t,se=!0,rn=null,At=!1,e!==null&&Fc(t,e),t=Ri(t,a),t.flags|=4096;return t}return e=Yt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ti(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Cs(e,t,n,a,l){return Qn(t),n=ms(e,t,n,a,void 0,l),a=hs(),e!==null&&!Oe?(ps(e,t,l),Jt(e,t,l)):(se&&a&&Jo(t),t.flags|=1,Ze(e,t,n,l),t.child)}function df(e,t,n,a,l,i){return Qn(t),t.updateQueue=null,n=hr(t,a,n,l),mr(e),a=hs(),e!==null&&!Oe?(ps(e,t,i),Jt(e,t,i)):(se&&a&&Jo(t),t.flags|=1,Ze(e,t,n,i),t.child)}function mf(e,t,n,a,l){if(Qn(t),t.stateNode===null){var i=da,o=n.contextType;typeof o=="object"&&o!==null&&(i=Xe(o)),i=new n(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Us,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},is(t),o=n.contextType,i.context=typeof o=="object"&&o!==null?Xe(o):da,i.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(zs(t,n,o,a),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&Us.enqueueReplaceState(i,i.state,null),ul(t,a,i,l),sl(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var c=t.memoizedProps,d=Wn(n,c);i.props=d;var A=i.context,U=n.contextType;o=da,typeof U=="object"&&U!==null&&(o=Xe(U));var D=n.getDerivedStateFromProps;U=typeof D=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,U||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||A!==o)&&Ir(t,i,a,o),mn=!1;var E=t.memoizedState;i.state=E,ul(t,a,i,l),sl(),A=t.memoizedState,c||E!==A||mn?(typeof D=="function"&&(zs(t,n,D,a),A=t.memoizedState),(d=mn||$r(t,n,d,a,E,A,o))?(U||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=A),i.props=a,i.state=A,i.context=o,a=d):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,os(e,t),o=t.memoizedProps,U=Wn(n,o),i.props=U,D=t.pendingProps,E=i.context,A=n.contextType,d=da,typeof A=="object"&&A!==null&&(d=Xe(A)),c=n.getDerivedStateFromProps,(A=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==D||E!==d)&&Ir(t,i,a,d),mn=!1,E=t.memoizedState,i.state=E,ul(t,a,i,l),sl();var R=t.memoizedState;o!==D||E!==R||mn||e!==null&&e.dependencies!==null&&si(e.dependencies)?(typeof c=="function"&&(zs(t,n,c,a),R=t.memoizedState),(U=mn||$r(t,n,U,a,E,R,d)||e!==null&&e.dependencies!==null&&si(e.dependencies))?(A||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,R,d),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,R,d)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=R),i.props=a,i.state=R,i.context=d,a=U):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,Ti(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=Kn(t,e.child,null,l),t.child=Kn(t,null,n,l)):Ze(e,t,n,l),t.memoizedState=i.state,e=t.child):e=Jt(e,t,l),e}function hf(e,t,n,a){return Gn(),t.flags|=256,Ze(e,t,n,a),t.child}var Ds={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ls(e){return{baseLanes:e,cachePool:nr()}}function Os(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=ht),e}function pf(e,t,n){var a=t.pendingProps,l=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(Me.current&2)!==0),o&&(l=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(se){if(l?gn(t):yn(),(e=xe)?(e=Ad(e,At),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:cn!==null?{id:Mt,overflow:Ct}:null,retryLane:536870912,hydrationErrors:null},n=Kc(e),n.return=t,t.child=n,Qe=t,xe=null)):e=null,e===null)throw fn(t);return vu(e)?t.lanes=32:t.lanes=536870912,null}var c=a.children;return a=a.fallback,l?(yn(),l=t.mode,c=ji({mode:"hidden",children:c},l),a=qn(a,l,n,null),c.return=t,a.return=t,c.sibling=a,t.child=c,a=t.child,a.memoizedState=Ls(n),a.childLanes=Os(e,o,n),t.memoizedState=Ds,ml(null,a)):(gn(t),_s(t,c))}var d=e.memoizedState;if(d!==null&&(c=d.dehydrated,c!==null)){if(i)t.flags&256?(gn(t),t.flags&=-257,t=Hs(e,t,n)):t.memoizedState!==null?(yn(),t.child=e.child,t.flags|=128,t=null):(yn(),c=a.fallback,l=t.mode,a=ji({mode:"visible",children:a.children},l),c=qn(c,l,n,null),c.flags|=2,a.return=t,c.return=t,a.sibling=c,t.child=a,Kn(t,e.child,null,n),a=t.child,a.memoizedState=Ls(n),a.childLanes=Os(e,o,n),t.memoizedState=Ds,t=ml(null,a));else if(gn(t),vu(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var A=o.dgst;o=A,a=Error(u(419)),a.stack="",a.digest=o,tl({value:a,source:null,stack:null}),t=Hs(e,t,n)}else if(Oe||ga(e,t,n,!1),o=(n&e.childLanes)!==0,Oe||o){if(o=Se,o!==null&&(a=ec(o,n),a!==0&&a!==d.retryLane))throw d.retryLane=a,Bn(e,a),it(o,e,a),Ms;yu(c)||Oi(),t=Hs(e,t,n)}else yu(c)?(t.flags|=192,t.child=e.child,t=null):(e=d.treeContext,xe=Rt(c.nextSibling),Qe=t,se=!0,rn=null,At=!1,e!==null&&Fc(t,e),t=_s(t,a.children),t.flags|=4096);return t}return l?(yn(),c=a.fallback,l=t.mode,d=e.child,A=d.sibling,a=Yt(d,{mode:"hidden",children:a.children}),a.subtreeFlags=d.subtreeFlags&65011712,A!==null?c=Yt(A,c):(c=qn(c,l,n,null),c.flags|=2),c.return=t,a.return=t,a.sibling=c,t.child=a,ml(null,a),a=t.child,c=e.child.memoizedState,c===null?c=Ls(n):(l=c.cachePool,l!==null?(d=De._currentValue,l=l.parent!==d?{parent:d,pool:d}:l):l=nr(),c={baseLanes:c.baseLanes|n,cachePool:l}),a.memoizedState=c,a.childLanes=Os(e,o,n),t.memoizedState=Ds,ml(e.child,a)):(gn(t),n=e.child,e=n.sibling,n=Yt(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function _s(e,t){return t=ji({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ji(e,t){return e=rt(22,e,null,t),e.lanes=0,e}function Hs(e,t,n){return Kn(t,e.child,null,n),e=_s(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gf(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Po(e.return,t,n)}function Bs(e,t,n,a,l,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l,treeForkCount:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=n,o.tailMode=l,o.treeForkCount=i)}function yf(e,t,n){var a=t.pendingProps,l=a.revealOrder,i=a.tail;a=a.children;var o=Me.current,c=(o&2)!==0;if(c?(o=o&1|2,t.flags|=128):o&=1,_(Me,o),Ze(e,t,a,n),a=se?el:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gf(e,n,t);else if(e.tag===19)gf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&pi(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Bs(t,!1,l,n,i,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&pi(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Bs(t,!0,n,null,i,a);break;case"together":Bs(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),wn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ga(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=Yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function qs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&si(e)))}function tp(e,t,n){switch(t.tag){case 3:Je(t,t.stateNode.containerInfo),dn(t,De,e.memoizedState.cache),Gn();break;case 27:case 5:Ba(t);break;case 4:Je(t,t.stateNode.containerInfo);break;case 10:dn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,fs(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(gn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?pf(e,t,n):(gn(t),e=Jt(e,t,n),e!==null?e.sibling:null);gn(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(ga(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return yf(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),_(Me,Me.current),a)break;return null;case 22:return t.lanes=0,cf(e,t,n,t.pendingProps);case 24:dn(t,De,e.memoizedState.cache)}return Jt(e,t,n)}function vf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Oe=!0;else{if(!qs(e,n)&&(t.flags&128)===0)return Oe=!1,tp(e,t,n);Oe=(e.flags&131072)!==0}else Oe=!1,se&&(t.flags&1048576)!==0&&Wc(t,el,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Zn(t.elementType),t.type=e,typeof e=="function")Zo(e)?(a=Wn(e,a),t.tag=1,t=mf(null,t,e,a,n)):(t.tag=0,t=Cs(null,t,e,a,n));else{if(e!=null){var l=e.$$typeof;if(l===we){t.tag=11,t=of(null,t,e,a,n);break e}else if(l===J){t.tag=14,t=sf(null,t,e,a,n);break e}}throw t=gt(e)||e,Error(u(306,t,""))}}return t;case 0:return Cs(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=Wn(a,t.pendingProps),mf(e,t,a,l,n);case 3:e:{if(Je(t,t.stateNode.containerInfo),e===null)throw Error(u(387));a=t.pendingProps;var i=t.memoizedState;l=i.element,os(e,t),ul(t,a,null,n);var o=t.memoizedState;if(a=o.cache,dn(t,De,a),a!==i.cache&&es(t,[De],n,!0),sl(),a=o.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=hf(e,t,a,n);break e}else if(a!==l){l=wt(Error(u(424)),t),tl(l),t=hf(e,t,a,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,xe=Rt(e.firstChild),Qe=t,se=!0,rn=null,At=!0,n=ur(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gn(),a===l){t=Jt(e,t,n);break e}Ze(e,t,a,n)}t=t.child}return t;case 26:return Ti(e,t),e===null?(n=zd(t.type,null,t.pendingProps,null))?t.memoizedState=n:se||(n=t.type,e=t.pendingProps,a=Qi(ne.current).createElement(n),a[Ye]=t,a[Pe]=e,Ve(a,n,e),Be(a),t.stateNode=a):t.memoizedState=zd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ba(t),e===null&&se&&(a=t.stateNode=Td(t.type,t.pendingProps,ne.current),Qe=t,At=!0,l=xe,Rn(t.type)?(bu=l,xe=Rt(a.firstChild)):xe=l),Ze(e,t,t.pendingProps.children,n),Ti(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&se&&((l=a=xe)&&(a=Np(a,t.type,t.pendingProps,At),a!==null?(t.stateNode=a,Qe=t,xe=Rt(a.firstChild),At=!1,l=!0):l=!1),l||fn(t)),Ba(t),l=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,hu(l,i)?a=null:o!==null&&hu(l,o)&&(t.flags|=32),t.memoizedState!==null&&(l=ms(e,t,Vh,null,null,n),kl._currentValue=l),Ti(e,t),Ze(e,t,a,n),t.child;case 6:return e===null&&se&&((e=n=xe)&&(n=Mp(n,t.pendingProps,At),n!==null?(t.stateNode=n,Qe=t,xe=null,e=!0):e=!1),e||fn(t)),null;case 13:return pf(e,t,n);case 4:return Je(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Kn(t,null,a,n):Ze(e,t,a,n),t.child;case 11:return of(e,t,t.type,t.pendingProps,n);case 7:return Ze(e,t,t.pendingProps,n),t.child;case 8:return Ze(e,t,t.pendingProps.children,n),t.child;case 12:return Ze(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,dn(t,t.type,a.value),Ze(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,Qn(t),l=Xe(l),a=a(l),t.flags|=1,Ze(e,t,a,n),t.child;case 14:return sf(e,t,t.type,t.pendingProps,n);case 15:return uf(e,t,t.type,t.pendingProps,n);case 19:return yf(e,t,n);case 31:return ep(e,t,n);case 22:return cf(e,t,n,t.pendingProps);case 24:return Qn(t),a=Xe(De),e===null?(l=as(),l===null&&(l=Se,i=ts(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=n),l=i),t.memoizedState={parent:a,cache:l},is(t),dn(t,De,l)):((e.lanes&n)!==0&&(os(e,t),ul(t,null,null,n),sl()),l=e.memoizedState,i=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),dn(t,De,a)):(a=i.cache,dn(t,De,a),a!==l.cache&&es(t,[De],n,!0))),Ze(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Wt(e){e.flags|=4}function Gs(e,t,n,a,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Zf())e.flags|=8192;else throw Vn=fi,ls}else e.flags&=-16777217}function bf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Dd(t))if(Zf())e.flags|=8192;else throw Vn=fi,ls}function ki(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?$u():536870912,e.lanes|=t,ka|=t)}function hl(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function np(e,t,n){var a=t.pendingProps;switch(Wo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return Ae(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Zt(De),Ne(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(pa(t)?Wt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,$o())),Ae(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(Wt(t),i!==null?(Ae(t),bf(t,i)):(Ae(t),Gs(t,l,null,a,n))):i?i!==e.memoizedState?(Wt(t),Ae(t),bf(t,i)):(Ae(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Wt(t),Ae(t),Gs(t,l,e,a,n)),null;case 27:if(Bl(t),n=ne.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Wt(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return Ae(t),null}e=G.current,pa(t)?$c(t):(e=Td(l,a,n),t.stateNode=e,Wt(t))}return Ae(t),null;case 5:if(Bl(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Wt(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return Ae(t),null}if(i=G.current,pa(t))$c(t);else{var o=Qi(ne.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?o.createElement("select",{is:a.is}):o.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?o.createElement(l,{is:a.is}):o.createElement(l)}}i[Ye]=t,i[Pe]=a;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=i;e:switch(Ve(i,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Wt(t)}}return Ae(t),Gs(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Wt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(e=ne.current,pa(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=Qe,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[Ye]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||pd(e.nodeValue,n)),e||fn(t,!0)}else e=Qi(e).createTextNode(a),e[Ye]=t,t.stateNode=e}return Ae(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=pa(t),n!==null){if(e===null){if(!a)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[Ye]=t}else Gn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),e=!1}else n=$o(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(dt(t),t):(dt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Ae(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=pa(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[Ye]=t}else Gn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ae(t),l=!1}else l=$o(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(dt(t),t):(dt(t),null)}return dt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ki(t,t.updateQueue),Ae(t),null);case 4:return Ne(),e===null&&cu(t.stateNode.containerInfo),Ae(t),null;case 10:return Zt(t.type),Ae(t),null;case 19:if(N(Me),a=t.memoizedState,a===null)return Ae(t),null;if(l=(t.flags&128)!==0,i=a.rendering,i===null)if(l)hl(a,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=pi(e),i!==null){for(t.flags|=128,hl(a,!1),e=i.updateQueue,t.updateQueue=e,ki(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Vc(n,e),n=n.sibling;return _(Me,Me.current&1|2),se&&Qt(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&ot()>Ci&&(t.flags|=128,l=!0,hl(a,!1),t.lanes=4194304)}else{if(!l)if(e=pi(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,ki(t,e),hl(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!se)return Ae(t),null}else 2*ot()-a.renderingStartTime>Ci&&n!==536870912&&(t.flags|=128,l=!0,hl(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=ot(),e.sibling=null,n=Me.current,_(Me,l?n&1|2:n&1),se&&Qt(t,a.treeForkCount),e):(Ae(t),null);case 22:case 23:return dt(t),rs(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),n=t.updateQueue,n!==null&&ki(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&N(Xn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Zt(De),Ae(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function ap(e,t){switch(Wo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zt(De),Ne(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Bl(t),null;case 31:if(t.memoizedState!==null){if(dt(t),t.alternate===null)throw Error(u(340));Gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(dt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return N(Me),null;case 4:return Ne(),null;case 10:return Zt(t.type),null;case 22:case 23:return dt(t),rs(),e!==null&&N(Xn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Zt(De),null;case 25:return null;default:return null}}function wf(e,t){switch(Wo(t),t.tag){case 3:Zt(De),Ne();break;case 26:case 27:case 5:Bl(t);break;case 4:Ne();break;case 31:t.memoizedState!==null&&dt(t);break;case 13:dt(t);break;case 19:N(Me);break;case 10:Zt(t.type);break;case 22:case 23:dt(t),rs(),e!==null&&N(Xn);break;case 24:Zt(De)}}function pl(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var i=n.create,o=n.inst;a=i(),o.destroy=a}n=n.next}while(n!==l)}}catch(c){pe(t,t.return,c)}}function vn(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){var o=a.inst,c=o.destroy;if(c!==void 0){o.destroy=void 0,l=t;var d=n,A=c;try{A()}catch(U){pe(l,d,U)}}}a=a.next}while(a!==i)}}catch(U){pe(t,t.return,U)}}function Sf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{rr(t,n)}catch(a){pe(e,e.return,a)}}}function xf(e,t,n){n.props=Wn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){pe(e,t,a)}}function gl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){pe(e,t,l)}}function Dt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){pe(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){pe(e,t,l)}else n.current=null}function Af(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){pe(e,e.return,l)}}function Ys(e,t,n){try{var a=e.stateNode;Rp(a,e.type,n,t),a[Pe]=t}catch(l){pe(e,e.return,l)}}function Ef(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Rn(e.type)||e.tag===4}function Qs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ef(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Rn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xs(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qt));else if(a!==4&&(a===27&&Rn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Xs(e,t,n),e=e.sibling;e!==null;)Xs(e,t,n),e=e.sibling}function zi(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Rn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(zi(e,t,n),e=e.sibling;e!==null;)zi(e,t,n),e=e.sibling}function Rf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Ve(t,a,n),t[Ye]=e,t[Pe]=n}catch(i){pe(e,e.return,i)}}var Ft=!1,_e=!1,Zs=!1,Tf=typeof WeakSet=="function"?WeakSet:Set,qe=null;function lp(e,t){if(e=e.containerInfo,du=Fi,e=_c(e),Ho(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,c=-1,d=-1,A=0,U=0,D=e,E=null;t:for(;;){for(var R;D!==n||l!==0&&D.nodeType!==3||(c=o+l),D!==i||a!==0&&D.nodeType!==3||(d=o+a),D.nodeType===3&&(o+=D.nodeValue.length),(R=D.firstChild)!==null;)E=D,D=R;for(;;){if(D===e)break t;if(E===n&&++A===l&&(c=o),E===i&&++U===a&&(d=o),(R=D.nextSibling)!==null)break;D=E,E=D.parentNode}D=R}n=c===-1||d===-1?null:{start:c,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(mu={focusedElem:e,selectionRange:n},Fi=!1,qe=t;qe!==null;)if(t=qe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,qe=e;else for(;qe!==null;){switch(t=qe,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)l=e[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,l=i.memoizedProps,i=i.memoizedState,a=n.stateNode;try{var B=Wn(n.type,l);e=a.getSnapshotBeforeUpdate(B,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(W){pe(n,n.return,W)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)gu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":gu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,qe=e;break}qe=t.return}}function jf(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:It(e,n),a&4&&pl(5,n);break;case 1:if(It(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){pe(n,n.return,o)}else{var l=Wn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){pe(n,n.return,o)}}a&64&&Sf(n),a&512&&gl(n,n.return);break;case 3:if(It(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{rr(e,t)}catch(o){pe(n,n.return,o)}}break;case 27:t===null&&a&4&&Rf(n);case 26:case 5:It(e,n),t===null&&a&4&&Af(n),a&512&&gl(n,n.return);break;case 12:It(e,n);break;case 31:It(e,n),a&4&&Uf(e,n);break;case 13:It(e,n),a&4&&Nf(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=mp.bind(null,n),Cp(e,n))));break;case 22:if(a=n.memoizedState!==null||Ft,!a){t=t!==null&&t.memoizedState!==null||_e,l=Ft;var i=_e;Ft=a,(_e=t)&&!i?Pt(e,n,(n.subtreeFlags&8772)!==0):It(e,n),Ft=l,_e=i}break;case 30:break;default:It(e,n)}}function kf(e){var t=e.alternate;t!==null&&(e.alternate=null,kf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&So(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Re=null,tt=!1;function $t(e,t,n){for(n=n.child;n!==null;)zf(e,t,n),n=n.sibling}function zf(e,t,n){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(qa,n)}catch{}switch(n.tag){case 26:_e||Dt(n,t),$t(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:_e||Dt(n,t);var a=Re,l=tt;Rn(n.type)&&(Re=n.stateNode,tt=!1),$t(e,t,n),Rl(n.stateNode),Re=a,tt=l;break;case 5:_e||Dt(n,t);case 6:if(a=Re,l=tt,Re=null,$t(e,t,n),Re=a,tt=l,Re!==null)if(tt)try{(Re.nodeType===9?Re.body:Re.nodeName==="HTML"?Re.ownerDocument.body:Re).removeChild(n.stateNode)}catch(i){pe(n,t,i)}else try{Re.removeChild(n.stateNode)}catch(i){pe(n,t,i)}break;case 18:Re!==null&&(tt?(e=Re,Sd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Oa(e)):Sd(Re,n.stateNode));break;case 4:a=Re,l=tt,Re=n.stateNode.containerInfo,tt=!0,$t(e,t,n),Re=a,tt=l;break;case 0:case 11:case 14:case 15:vn(2,n,t),_e||vn(4,n,t),$t(e,t,n);break;case 1:_e||(Dt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&xf(n,t,a)),$t(e,t,n);break;case 21:$t(e,t,n);break;case 22:_e=(a=_e)||n.memoizedState!==null,$t(e,t,n),_e=a;break;default:$t(e,t,n)}}function Uf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Oa(e)}catch(n){pe(t,t.return,n)}}}function Nf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Oa(e)}catch(n){pe(t,t.return,n)}}function ip(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Tf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Tf),t;default:throw Error(u(435,e.tag))}}function Ui(e,t){var n=ip(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var l=hp.bind(null,e,a);a.then(l,l)}})}function nt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],i=e,o=t,c=o;e:for(;c!==null;){switch(c.tag){case 27:if(Rn(c.type)){Re=c.stateNode,tt=!1;break e}break;case 5:Re=c.stateNode,tt=!1;break e;case 3:case 4:Re=c.stateNode.containerInfo,tt=!0;break e}c=c.return}if(Re===null)throw Error(u(160));zf(i,o,l),Re=null,tt=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Mf(t,e),t=t.sibling}var zt=null;function Mf(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:nt(t,e),at(e),a&4&&(vn(3,e,e.return),pl(3,e),vn(5,e,e.return));break;case 1:nt(t,e),at(e),a&512&&(_e||n===null||Dt(n,n.return)),a&64&&Ft&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=zt;if(nt(t,e),at(e),a&512&&(_e||n===null||Dt(n,n.return)),a&4){var i=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":i=l.getElementsByTagName("title")[0],(!i||i[Qa]||i[Ye]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(a),l.head.insertBefore(i,l.querySelector("head > title"))),Ve(i,a,n),i[Ye]=e,Be(i),a=i;break e;case"link":var o=Md("link","href",l).get(a+(n.href||""));if(o){for(var c=0;c<o.length;c++)if(i=o[c],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(c,1);break t}}i=l.createElement(a),Ve(i,a,n),l.head.appendChild(i);break;case"meta":if(o=Md("meta","content",l).get(a+(n.content||""))){for(c=0;c<o.length;c++)if(i=o[c],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(c,1);break t}}i=l.createElement(a),Ve(i,a,n),l.head.appendChild(i);break;default:throw Error(u(468,a))}i[Ye]=e,Be(i),a=i}e.stateNode=a}else Cd(l,e.type,e.stateNode);else e.stateNode=Nd(l,a,e.memoizedProps);else i!==a?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,a===null?Cd(l,e.type,e.stateNode):Nd(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Ys(e,e.memoizedProps,n.memoizedProps)}break;case 27:nt(t,e),at(e),a&512&&(_e||n===null||Dt(n,n.return)),n!==null&&a&4&&Ys(e,e.memoizedProps,n.memoizedProps);break;case 5:if(nt(t,e),at(e),a&512&&(_e||n===null||Dt(n,n.return)),e.flags&32){l=e.stateNode;try{ia(l,"")}catch(B){pe(e,e.return,B)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,Ys(e,l,n!==null?n.memoizedProps:l)),a&1024&&(Zs=!0);break;case 6:if(nt(t,e),at(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(B){pe(e,e.return,B)}}break;case 3:if(Vi=null,l=zt,zt=Xi(t.containerInfo),nt(t,e),zt=l,at(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Oa(t.containerInfo)}catch(B){pe(e,e.return,B)}Zs&&(Zs=!1,Cf(e));break;case 4:a=zt,zt=Xi(e.stateNode.containerInfo),nt(t,e),at(e),zt=a;break;case 12:nt(t,e),at(e);break;case 31:nt(t,e),at(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ui(e,a)));break;case 13:nt(t,e),at(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Mi=ot()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ui(e,a)));break;case 22:l=e.memoizedState!==null;var d=n!==null&&n.memoizedState!==null,A=Ft,U=_e;if(Ft=A||l,_e=U||d,nt(t,e),_e=U,Ft=A,at(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||d||Ft||_e||Fn(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){d=n=t;try{if(i=d.stateNode,l)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{c=d.stateNode;var D=d.memoizedProps.style,E=D!=null&&D.hasOwnProperty("display")?D.display:null;c.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(B){pe(d,d.return,B)}}}else if(t.tag===6){if(n===null){d=t;try{d.stateNode.nodeValue=l?"":d.memoizedProps}catch(B){pe(d,d.return,B)}}}else if(t.tag===18){if(n===null){d=t;try{var R=d.stateNode;l?xd(R,!0):xd(d.stateNode,!1)}catch(B){pe(d,d.return,B)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Ui(e,n))));break;case 19:nt(t,e),at(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ui(e,a)));break;case 30:break;case 21:break;default:nt(t,e),at(e)}}function at(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Ef(a)){n=a;break}a=a.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var l=n.stateNode,i=Qs(e);zi(e,i,l);break;case 5:var o=n.stateNode;n.flags&32&&(ia(o,""),n.flags&=-33);var c=Qs(e);zi(e,c,o);break;case 3:case 4:var d=n.stateNode.containerInfo,A=Qs(e);Xs(e,A,d);break;default:throw Error(u(161))}}catch(U){pe(e,e.return,U)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Cf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Cf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function It(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)jf(e,t.alternate,t),t=t.sibling}function Fn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:vn(4,t,t.return),Fn(t);break;case 1:Dt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&xf(t,t.return,n),Fn(t);break;case 27:Rl(t.stateNode);case 26:case 5:Dt(t,t.return),Fn(t);break;case 22:t.memoizedState===null&&Fn(t);break;case 30:Fn(t);break;default:Fn(t)}e=e.sibling}}function Pt(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:Pt(l,i,n),pl(4,i);break;case 1:if(Pt(l,i,n),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(A){pe(a,a.return,A)}if(a=i,l=a.updateQueue,l!==null){var c=a.stateNode;try{var d=l.shared.hiddenCallbacks;if(d!==null)for(l.shared.hiddenCallbacks=null,l=0;l<d.length;l++)cr(d[l],c)}catch(A){pe(a,a.return,A)}}n&&o&64&&Sf(i),gl(i,i.return);break;case 27:Rf(i);case 26:case 5:Pt(l,i,n),n&&a===null&&o&4&&Af(i),gl(i,i.return);break;case 12:Pt(l,i,n);break;case 31:Pt(l,i,n),n&&o&4&&Uf(l,i);break;case 13:Pt(l,i,n),n&&o&4&&Nf(l,i);break;case 22:i.memoizedState===null&&Pt(l,i,n),gl(i,i.return);break;case 30:break;default:Pt(l,i,n)}t=t.sibling}}function Vs(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&nl(n))}function Ks(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&nl(e))}function Ut(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Df(e,t,n,a),t=t.sibling}function Df(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Ut(e,t,n,a),l&2048&&pl(9,t);break;case 1:Ut(e,t,n,a);break;case 3:Ut(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&nl(e)));break;case 12:if(l&2048){Ut(e,t,n,a),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,c=i.onPostCommit;typeof c=="function"&&c(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(d){pe(t,t.return,d)}}else Ut(e,t,n,a);break;case 31:Ut(e,t,n,a);break;case 13:Ut(e,t,n,a);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,t.memoizedState!==null?i._visibility&2?Ut(e,t,n,a):yl(e,t):i._visibility&2?Ut(e,t,n,a):(i._visibility|=2,Ra(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),l&2048&&Vs(o,t);break;case 24:Ut(e,t,n,a),l&2048&&Ks(t.alternate,t);break;default:Ut(e,t,n,a)}}function Ra(e,t,n,a,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,o=t,c=n,d=a,A=o.flags;switch(o.tag){case 0:case 11:case 15:Ra(i,o,c,d,l),pl(8,o);break;case 23:break;case 22:var U=o.stateNode;o.memoizedState!==null?U._visibility&2?Ra(i,o,c,d,l):yl(i,o):(U._visibility|=2,Ra(i,o,c,d,l)),l&&A&2048&&Vs(o.alternate,o);break;case 24:Ra(i,o,c,d,l),l&&A&2048&&Ks(o.alternate,o);break;default:Ra(i,o,c,d,l)}t=t.sibling}}function yl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:yl(n,a),l&2048&&Vs(a.alternate,a);break;case 24:yl(n,a),l&2048&&Ks(a.alternate,a);break;default:yl(n,a)}t=t.sibling}}var vl=8192;function Ta(e,t,n){if(e.subtreeFlags&vl)for(e=e.child;e!==null;)Lf(e,t,n),e=e.sibling}function Lf(e,t,n){switch(e.tag){case 26:Ta(e,t,n),e.flags&vl&&e.memoizedState!==null&&Zp(n,zt,e.memoizedState,e.memoizedProps);break;case 5:Ta(e,t,n);break;case 3:case 4:var a=zt;zt=Xi(e.stateNode.containerInfo),Ta(e,t,n),zt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=vl,vl=16777216,Ta(e,t,n),vl=a):Ta(e,t,n));break;default:Ta(e,t,n)}}function Of(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function bl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];qe=a,Hf(a,e)}Of(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)_f(e),e=e.sibling}function _f(e){switch(e.tag){case 0:case 11:case 15:bl(e),e.flags&2048&&vn(9,e,e.return);break;case 3:bl(e);break;case 12:bl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ni(e)):bl(e);break;default:bl(e)}}function Ni(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];qe=a,Hf(a,e)}Of(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:vn(8,t,t.return),Ni(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ni(t));break;default:Ni(t)}e=e.sibling}}function Hf(e,t){for(;qe!==null;){var n=qe;switch(n.tag){case 0:case 11:case 15:vn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:nl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,qe=a;else e:for(n=e;qe!==null;){a=qe;var l=a.sibling,i=a.return;if(kf(a),a===n){qe=null;break e}if(l!==null){l.return=i,qe=l;break e}qe=i}}}var op={getCacheForType:function(e){var t=Xe(De),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Xe(De).controller.signal}},sp=typeof WeakMap=="function"?WeakMap:Map,re=0,Se=null,ae=null,ie=0,he=0,mt=null,bn=!1,ja=!1,Js=!1,en=0,ze=0,wn=0,$n=0,Ws=0,ht=0,ka=0,wl=null,lt=null,Fs=!1,Mi=0,Bf=0,Ci=1/0,Di=null,Sn=null,He=0,xn=null,za=null,tn=0,$s=0,Is=null,qf=null,Sl=0,Ps=null;function pt(){return(re&2)!==0&&ie!==0?ie&-ie:z.T!==null?iu():tc()}function Gf(){if(ht===0)if((ie&536870912)===0||se){var e=Yl;Yl<<=1,(Yl&3932160)===0&&(Yl=262144),ht=e}else ht=536870912;return e=ft.current,e!==null&&(e.flags|=32),ht}function it(e,t,n){(e===Se&&(he===2||he===9)||e.cancelPendingCommit!==null)&&(Ua(e,0),An(e,ie,ht,!1)),Ya(e,n),((re&2)===0||e!==Se)&&(e===Se&&((re&2)===0&&($n|=n),ze===4&&An(e,ie,ht,!1)),Lt(e))}function Yf(e,t,n){if((re&6)!==0)throw Error(u(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ga(e,t),l=a?rp(e,t):tu(e,t,!0),i=a;do{if(l===0){ja&&!a&&An(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!up(n)){l=tu(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var c=e;l=wl;var d=c.current.memoizedState.isDehydrated;if(d&&(Ua(c,o).flags|=256),o=tu(c,o,!1),o!==2){if(Js&&!d){c.errorRecoveryDisabledLanes|=i,$n|=i,l=4;break e}i=lt,lt=l,i!==null&&(lt===null?lt=i:lt.push.apply(lt,i))}l=o}if(i=!1,l!==2)continue}}if(l===1){Ua(e,0),An(e,t,0,!0);break}e:{switch(a=e,i=l,i){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:An(a,t,ht,!bn);break e;case 2:lt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(l=Mi+300-ot(),10<l)){if(An(a,t,ht,!bn),Xl(a,0,!0)!==0)break e;tn=t,a.timeoutHandle=bd(Qf.bind(null,a,n,lt,Di,Fs,t,ht,$n,ka,bn,i,"Throttled",-0,0),l);break e}Qf(a,n,lt,Di,Fs,t,ht,$n,ka,bn,i,null,-0,0)}}break}while(!0);Lt(e)}function Qf(e,t,n,a,l,i,o,c,d,A,U,D,E,R){if(e.timeoutHandle=-1,D=t.subtreeFlags,D&8192||(D&16785408)===16785408){D={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qt},Lf(t,i,D);var B=(i&62914560)===i?Mi-ot():(i&4194048)===i?Bf-ot():0;if(B=Vp(D,B),B!==null){tn=i,e.cancelPendingCommit=B($f.bind(null,e,t,i,n,a,l,o,c,d,U,D,null,E,R)),An(e,i,o,!A);return}}$f(e,t,i,n,a,l,o,c,d)}function up(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],i=l.getSnapshot;l=l.value;try{if(!ct(i(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function An(e,t,n,a){t&=~Ws,t&=~$n,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var i=31-ut(l),o=1<<i;a[i]=-1,l&=~o}n!==0&&Iu(e,n,t)}function Li(){return(re&6)===0?(xl(0),!1):!0}function eu(){if(ae!==null){if(he===0)var e=ae.return;else e=ae,Xt=Yn=null,gs(e),wa=null,ll=0,e=ae;for(;e!==null;)wf(e.alternate,e),e=e.return;ae=null}}function Ua(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,kp(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),tn=0,eu(),Se=e,ae=n=Yt(e.current,null),ie=t,he=0,mt=null,bn=!1,ja=Ga(e,t),Js=!1,ka=ht=Ws=$n=wn=ze=0,lt=wl=null,Fs=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-ut(a),i=1<<l;t|=e[l],a&=~i}return en=t,ni(),n}function Xf(e,t){ee=null,z.H=dl,t===ba||t===ri?(t=ir(),he=3):t===ls?(t=ir(),he=4):he=t===Ms?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,mt=t,ae===null&&(ze=1,Ei(e,wt(t,e.current)))}function Zf(){var e=ft.current;return e===null?!0:(ie&4194048)===ie?Et===null:(ie&62914560)===ie||(ie&536870912)!==0?e===Et:!1}function Vf(){var e=z.H;return z.H=dl,e===null?dl:e}function Kf(){var e=z.A;return z.A=op,e}function Oi(){ze=4,bn||(ie&4194048)!==ie&&ft.current!==null||(ja=!0),(wn&134217727)===0&&($n&134217727)===0||Se===null||An(Se,ie,ht,!1)}function tu(e,t,n){var a=re;re|=2;var l=Vf(),i=Kf();(Se!==e||ie!==t)&&(Di=null,Ua(e,t)),t=!1;var o=ze;e:do try{if(he!==0&&ae!==null){var c=ae,d=mt;switch(he){case 8:eu(),o=6;break e;case 3:case 2:case 9:case 6:ft.current===null&&(t=!0);var A=he;if(he=0,mt=null,Na(e,c,d,A),n&&ja){o=0;break e}break;default:A=he,he=0,mt=null,Na(e,c,d,A)}}cp(),o=ze;break}catch(U){Xf(e,U)}while(!0);return t&&e.shellSuspendCounter++,Xt=Yn=null,re=a,z.H=l,z.A=i,ae===null&&(Se=null,ie=0,ni()),o}function cp(){for(;ae!==null;)Jf(ae)}function rp(e,t){var n=re;re|=2;var a=Vf(),l=Kf();Se!==e||ie!==t?(Di=null,Ci=ot()+500,Ua(e,t)):ja=Ga(e,t);e:do try{if(he!==0&&ae!==null){t=ae;var i=mt;t:switch(he){case 1:he=0,mt=null,Na(e,t,i,1);break;case 2:case 9:if(ar(i)){he=0,mt=null,Wf(t);break}t=function(){he!==2&&he!==9||Se!==e||(he=7),Lt(e)},i.then(t,t);break e;case 3:he=7;break e;case 4:he=5;break e;case 7:ar(i)?(he=0,mt=null,Wf(t)):(he=0,mt=null,Na(e,t,i,7));break;case 5:var o=null;switch(ae.tag){case 26:o=ae.memoizedState;case 5:case 27:var c=ae;if(o?Dd(o):c.stateNode.complete){he=0,mt=null;var d=c.sibling;if(d!==null)ae=d;else{var A=c.return;A!==null?(ae=A,_i(A)):ae=null}break t}}he=0,mt=null,Na(e,t,i,5);break;case 6:he=0,mt=null,Na(e,t,i,6);break;case 8:eu(),ze=6;break e;default:throw Error(u(462))}}fp();break}catch(U){Xf(e,U)}while(!0);return Xt=Yn=null,z.H=a,z.A=l,re=n,ae!==null?0:(Se=null,ie=0,ni(),ze)}function fp(){for(;ae!==null&&!Dm();)Jf(ae)}function Jf(e){var t=vf(e.alternate,e,en);e.memoizedProps=e.pendingProps,t===null?_i(e):ae=t}function Wf(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=df(n,t,t.pendingProps,t.type,void 0,ie);break;case 11:t=df(n,t,t.pendingProps,t.type.render,t.ref,ie);break;case 5:gs(t);default:wf(n,t),t=ae=Vc(t,en),t=vf(n,t,en)}e.memoizedProps=e.pendingProps,t===null?_i(e):ae=t}function Na(e,t,n,a){Xt=Yn=null,gs(t),wa=null,ll=0;var l=t.return;try{if(Ph(e,l,t,n,ie)){ze=1,Ei(e,wt(n,e.current)),ae=null;return}}catch(i){if(l!==null)throw ae=l,i;ze=1,Ei(e,wt(n,e.current)),ae=null;return}t.flags&32768?(se||a===1?e=!0:ja||(ie&536870912)!==0?e=!1:(bn=e=!0,(a===2||a===9||a===3||a===6)&&(a=ft.current,a!==null&&a.tag===13&&(a.flags|=16384))),Ff(t,e)):_i(t)}function _i(e){var t=e;do{if((t.flags&32768)!==0){Ff(t,bn);return}e=t.return;var n=np(t.alternate,t,en);if(n!==null){ae=n;return}if(t=t.sibling,t!==null){ae=t;return}ae=t=e}while(t!==null);ze===0&&(ze=5)}function Ff(e,t){do{var n=ap(e.alternate,e);if(n!==null){n.flags&=32767,ae=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ae=e;return}ae=e=n}while(e!==null);ze=6,ae=null}function $f(e,t,n,a,l,i,o,c,d){e.cancelPendingCommit=null;do Hi();while(He!==0);if((re&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(i=t.lanes|t.childLanes,i|=Qo,Xm(e,n,i,o,c,d),e===Se&&(ae=Se=null,ie=0),za=t,xn=e,tn=n,$s=i,Is=l,qf=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,pp(ql,function(){return nd(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=z.T,z.T=null,l=L.p,L.p=2,o=re,re|=4;try{lp(e,t,n)}finally{re=o,L.p=l,z.T=a}}He=1,If(),Pf(),ed()}}function If(){if(He===1){He=0;var e=xn,t=za,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=z.T,z.T=null;var a=L.p;L.p=2;var l=re;re|=4;try{Mf(t,e);var i=mu,o=_c(e.containerInfo),c=i.focusedElem,d=i.selectionRange;if(o!==c&&c&&c.ownerDocument&&Oc(c.ownerDocument.documentElement,c)){if(d!==null&&Ho(c)){var A=d.start,U=d.end;if(U===void 0&&(U=A),"selectionStart"in c)c.selectionStart=A,c.selectionEnd=Math.min(U,c.value.length);else{var D=c.ownerDocument||document,E=D&&D.defaultView||window;if(E.getSelection){var R=E.getSelection(),B=c.textContent.length,W=Math.min(d.start,B),be=d.end===void 0?W:Math.min(d.end,B);!R.extend&&W>be&&(o=be,be=W,W=o);var S=Lc(c,W),y=Lc(c,be);if(S&&y&&(R.rangeCount!==1||R.anchorNode!==S.node||R.anchorOffset!==S.offset||R.focusNode!==y.node||R.focusOffset!==y.offset)){var x=D.createRange();x.setStart(S.node,S.offset),R.removeAllRanges(),W>be?(R.addRange(x),R.extend(y.node,y.offset)):(x.setEnd(y.node,y.offset),R.addRange(x))}}}}for(D=[],R=c;R=R.parentNode;)R.nodeType===1&&D.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<D.length;c++){var M=D[c];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}Fi=!!du,mu=du=null}finally{re=l,L.p=a,z.T=n}}e.current=t,He=2}}function Pf(){if(He===2){He=0;var e=xn,t=za,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=z.T,z.T=null;var a=L.p;L.p=2;var l=re;re|=4;try{jf(e,t.alternate,t)}finally{re=l,L.p=a,z.T=n}}He=3}}function ed(){if(He===4||He===3){He=0,Lm();var e=xn,t=za,n=tn,a=qf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?He=5:(He=0,za=xn=null,td(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Sn=null),bo(n),t=t.stateNode,st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(qa,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=z.T,l=L.p,L.p=2,z.T=null;try{for(var i=e.onRecoverableError,o=0;o<a.length;o++){var c=a[o];i(c.value,{componentStack:c.stack})}}finally{z.T=t,L.p=l}}(tn&3)!==0&&Hi(),Lt(e),l=e.pendingLanes,(n&261930)!==0&&(l&42)!==0?e===Ps?Sl++:(Sl=0,Ps=e):Sl=0,xl(0)}}function td(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,nl(t)))}function Hi(){return If(),Pf(),ed(),nd()}function nd(){if(He!==5)return!1;var e=xn,t=$s;$s=0;var n=bo(tn),a=z.T,l=L.p;try{L.p=32>n?32:n,z.T=null,n=Is,Is=null;var i=xn,o=tn;if(He=0,za=xn=null,tn=0,(re&6)!==0)throw Error(u(331));var c=re;if(re|=4,_f(i.current),Df(i,i.current,o,n),re=c,xl(0,!1),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(qa,i)}catch{}return!0}finally{L.p=l,z.T=a,td(e,t)}}function ad(e,t,n){t=wt(n,t),t=Ns(e.stateNode,t,2),e=pn(e,t,2),e!==null&&(Ya(e,2),Lt(e))}function pe(e,t,n){if(e.tag===3)ad(e,e,n);else for(;t!==null;){if(t.tag===3){ad(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Sn===null||!Sn.has(a))){e=wt(n,e),n=af(2),a=pn(t,n,2),a!==null&&(lf(n,a,t,e),Ya(a,2),Lt(a));break}}t=t.return}}function nu(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new sp;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(Js=!0,l.add(n),e=dp.bind(null,e,t,n),t.then(e,e))}function dp(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Se===e&&(ie&n)===n&&(ze===4||ze===3&&(ie&62914560)===ie&&300>ot()-Mi?(re&2)===0&&Ua(e,0):Ws|=n,ka===ie&&(ka=0)),Lt(e)}function ld(e,t){t===0&&(t=$u()),e=Bn(e,t),e!==null&&(Ya(e,t),Lt(e))}function mp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ld(e,n)}function hp(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(t),ld(e,n)}function pp(e,t){return po(e,t)}var Bi=null,Ma=null,au=!1,qi=!1,lu=!1,En=0;function Lt(e){e!==Ma&&e.next===null&&(Ma===null?Bi=Ma=e:Ma=Ma.next=e),qi=!0,au||(au=!0,yp())}function xl(e,t){if(!lu&&qi){lu=!0;do for(var n=!1,a=Bi;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var o=a.suspendedLanes,c=a.pingedLanes;i=(1<<31-ut(42|e)+1)-1,i&=l&~(o&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,ud(a,i))}else i=ie,i=Xl(a,a===Se?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Ga(a,i)||(n=!0,ud(a,i));a=a.next}while(n);lu=!1}}function gp(){id()}function id(){qi=au=!1;var e=0;En!==0&&jp()&&(e=En);for(var t=ot(),n=null,a=Bi;a!==null;){var l=a.next,i=od(a,t);i===0?(a.next=null,n===null?Bi=l:n.next=l,l===null&&(Ma=n)):(n=a,(e!==0||(i&3)!==0)&&(qi=!0)),a=l}He!==0&&He!==5||xl(e),En!==0&&(En=0)}function od(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-ut(i),c=1<<o,d=l[o];d===-1?((c&n)===0||(c&a)!==0)&&(l[o]=Qm(c,t)):d<=t&&(e.expiredLanes|=c),i&=~c}if(t=Se,n=ie,n=Xl(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(he===2||he===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&go(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ga(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&go(a),bo(n)){case 2:case 8:n=Wu;break;case 32:n=ql;break;case 268435456:n=Fu;break;default:n=ql}return a=sd.bind(null,e),n=po(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&go(a),e.callbackPriority=2,e.callbackNode=null,2}function sd(e,t){if(He!==0&&He!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hi()&&e.callbackNode!==n)return null;var a=ie;return a=Xl(e,e===Se?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Yf(e,a,t),od(e,ot()),e.callbackNode!=null&&e.callbackNode===n?sd.bind(null,e):null)}function ud(e,t){if(Hi())return null;Yf(e,t,!0)}function yp(){zp(function(){(re&6)!==0?po(Ju,gp):id()})}function iu(){if(En===0){var e=ya;e===0&&(e=Gl,Gl<<=1,(Gl&261888)===0&&(Gl=256)),En=e}return En}function cd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Jl(""+e)}function rd(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function vp(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var i=cd((l[Pe]||null).action),o=a.submitter;o&&(t=(t=o[Pe]||null)?cd(t.formAction):o.getAttribute("formAction"),t!==null&&(i=t,o=null));var c=new Il("action","action",null,a,l);e.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(En!==0){var d=o?rd(l,o):new FormData(l);Rs(n,{pending:!0,data:d,method:l.method,action:i},null,d)}}else typeof i=="function"&&(c.preventDefault(),d=o?rd(l,o):new FormData(l),Rs(n,{pending:!0,data:d,method:l.method,action:i},i,d))},currentTarget:l}]})}}for(var ou=0;ou<Yo.length;ou++){var su=Yo[ou],bp=su.toLowerCase(),wp=su[0].toUpperCase()+su.slice(1);kt(bp,"on"+wp)}kt(qc,"onAnimationEnd"),kt(Gc,"onAnimationIteration"),kt(Yc,"onAnimationStart"),kt("dblclick","onDoubleClick"),kt("focusin","onFocus"),kt("focusout","onBlur"),kt(Oh,"onTransitionRun"),kt(_h,"onTransitionStart"),kt(Hh,"onTransitionCancel"),kt(Qc,"onTransitionEnd"),aa("onMouseEnter",["mouseout","mouseover"]),aa("onMouseLeave",["mouseout","mouseover"]),aa("onPointerEnter",["pointerout","pointerover"]),aa("onPointerLeave",["pointerout","pointerover"]),Ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ln("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Al));function fd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var o=a.length-1;0<=o;o--){var c=a[o],d=c.instance,A=c.currentTarget;if(c=c.listener,d!==i&&l.isPropagationStopped())break e;i=c,l.currentTarget=A;try{i(l)}catch(U){ti(U)}l.currentTarget=null,i=d}else for(o=0;o<a.length;o++){if(c=a[o],d=c.instance,A=c.currentTarget,c=c.listener,d!==i&&l.isPropagationStopped())break e;i=c,l.currentTarget=A;try{i(l)}catch(U){ti(U)}l.currentTarget=null,i=d}}}}function le(e,t){var n=t[wo];n===void 0&&(n=t[wo]=new Set);var a=e+"__bubble";n.has(a)||(dd(t,e,2,!1),n.add(a))}function uu(e,t,n){var a=0;t&&(a|=4),dd(n,e,a,t)}var Gi="_reactListening"+Math.random().toString(36).slice(2);function cu(e){if(!e[Gi]){e[Gi]=!0,lc.forEach(function(n){n!=="selectionchange"&&(Sp.has(n)||uu(n,!1,e),uu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gi]||(t[Gi]=!0,uu("selectionchange",!1,t))}}function dd(e,t,n,a){switch(Gd(t)){case 2:var l=Wp;break;case 8:l=Fp;break;default:l=Eu}n=l.bind(null,t,n,e),l=void 0,!zo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function ru(e,t,n,a,l){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var c=a.stateNode.containerInfo;if(c===l)break;if(o===4)for(o=a.return;o!==null;){var d=o.tag;if((d===3||d===4)&&o.stateNode.containerInfo===l)return;o=o.return}for(;c!==null;){if(o=ea(c),o===null)return;if(d=o.tag,d===5||d===6||d===26||d===27){a=i=o;continue e}c=c.parentNode}}a=a.return}gc(function(){var A=i,U=jo(n),D=[];e:{var E=Xc.get(e);if(E!==void 0){var R=Il,B=e;switch(e){case"keypress":if(Fl(n)===0)break e;case"keydown":case"keyup":R=hh;break;case"focusin":B="focus",R=Co;break;case"focusout":B="blur",R=Co;break;case"beforeblur":case"afterblur":R=Co;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=bc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=nh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=yh;break;case qc:case Gc:case Yc:R=ih;break;case Qc:R=bh;break;case"scroll":case"scrollend":R=eh;break;case"wheel":R=Sh;break;case"copy":case"cut":case"paste":R=sh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Sc;break;case"toggle":case"beforetoggle":R=Ah}var W=(t&4)!==0,be=!W&&(e==="scroll"||e==="scrollend"),S=W?E!==null?E+"Capture":null:E;W=[];for(var y=A,x;y!==null;){var M=y;if(x=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||x===null||S===null||(M=Za(y,S),M!=null&&W.push(El(y,M,x))),be)break;y=y.return}0<W.length&&(E=new R(E,B,null,n,U),D.push({event:E,listeners:W}))}}if((t&7)===0){e:{if(E=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",E&&n!==To&&(B=n.relatedTarget||n.fromElement)&&(ea(B)||B[Pn]))break e;if((R||E)&&(E=U.window===U?U:(E=U.ownerDocument)?E.defaultView||E.parentWindow:window,R?(B=n.relatedTarget||n.toElement,R=A,B=B?ea(B):null,B!==null&&(be=h(B),W=B.tag,B!==be||W!==5&&W!==27&&W!==6)&&(B=null)):(R=null,B=A),R!==B)){if(W=bc,M="onMouseLeave",S="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(W=Sc,M="onPointerLeave",S="onPointerEnter",y="pointer"),be=R==null?E:Xa(R),x=B==null?E:Xa(B),E=new W(M,y+"leave",R,n,U),E.target=be,E.relatedTarget=x,M=null,ea(U)===A&&(W=new W(S,y+"enter",B,n,U),W.target=x,W.relatedTarget=be,M=W),be=M,R&&B)t:{for(W=xp,S=R,y=B,x=0,M=S;M;M=W(M))x++;M=0;for(var V=y;V;V=W(V))M++;for(;0<x-M;)S=W(S),x--;for(;0<M-x;)y=W(y),M--;for(;x--;){if(S===y||y!==null&&S===y.alternate){W=S;break t}S=W(S),y=W(y)}W=null}else W=null;R!==null&&md(D,E,R,W,!1),B!==null&&be!==null&&md(D,be,B,W,!0)}}e:{if(E=A?Xa(A):window,R=E.nodeName&&E.nodeName.toLowerCase(),R==="select"||R==="input"&&E.type==="file")var ue=zc;else if(jc(E))if(Uc)ue=Ch;else{ue=Nh;var Q=Uh}else R=E.nodeName,!R||R.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?A&&Ro(A.elementType)&&(ue=zc):ue=Mh;if(ue&&(ue=ue(e,A))){kc(D,ue,n,U);break e}Q&&Q(e,E,A),e==="focusout"&&A&&E.type==="number"&&A.memoizedProps.value!=null&&Eo(E,"number",E.value)}switch(Q=A?Xa(A):window,e){case"focusin":(jc(Q)||Q.contentEditable==="true")&&(ca=Q,Bo=A,Pa=null);break;case"focusout":Pa=Bo=ca=null;break;case"mousedown":qo=!0;break;case"contextmenu":case"mouseup":case"dragend":qo=!1,Hc(D,n,U);break;case"selectionchange":if(Lh)break;case"keydown":case"keyup":Hc(D,n,U)}var te;if(Lo)e:{switch(e){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else ua?Rc(e,n)&&(oe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(oe="onCompositionStart");oe&&(xc&&n.locale!=="ko"&&(ua||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&ua&&(te=yc()):(un=U,Uo="value"in un?un.value:un.textContent,ua=!0)),Q=Yi(A,oe),0<Q.length&&(oe=new wc(oe,e,null,n,U),D.push({event:oe,listeners:Q}),te?oe.data=te:(te=Tc(n),te!==null&&(oe.data=te)))),(te=Rh?Th(e,n):jh(e,n))&&(oe=Yi(A,"onBeforeInput"),0<oe.length&&(Q=new wc("onBeforeInput","beforeinput",null,n,U),D.push({event:Q,listeners:oe}),Q.data=te)),vp(D,e,A,n,U)}fd(D,t)})}function El(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yi(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Za(e,n),l!=null&&a.unshift(El(e,l,i)),l=Za(e,t),l!=null&&a.push(El(e,l,i))),e.tag===3)return a;e=e.return}return[]}function xp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function md(e,t,n,a,l){for(var i=t._reactName,o=[];n!==null&&n!==a;){var c=n,d=c.alternate,A=c.stateNode;if(c=c.tag,d!==null&&d===a)break;c!==5&&c!==26&&c!==27||A===null||(d=A,l?(A=Za(n,i),A!=null&&o.unshift(El(n,A,d))):l||(A=Za(n,i),A!=null&&o.push(El(n,A,d)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ap=/\r\n?/g,Ep=/\u0000|\uFFFD/g;function hd(e){return(typeof e=="string"?e:""+e).replace(Ap,`
`).replace(Ep,"")}function pd(e,t){return t=hd(t),hd(e)===t}function ve(e,t,n,a,l,i){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ia(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ia(e,""+a);break;case"className":Vl(e,"class",a);break;case"tabIndex":Vl(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Vl(e,n,a);break;case"style":hc(e,a,i);break;case"data":if(t!=="object"){Vl(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Jl(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&ve(e,t,"name",l.name,l,null),ve(e,t,"formEncType",l.formEncType,l,null),ve(e,t,"formMethod",l.formMethod,l,null),ve(e,t,"formTarget",l.formTarget,l,null)):(ve(e,t,"encType",l.encType,l,null),ve(e,t,"method",l.method,l,null),ve(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Jl(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=qt);break;case"onScroll":a!=null&&le("scroll",e);break;case"onScrollEnd":a!=null&&le("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Jl(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":le("beforetoggle",e),le("toggle",e),Zl(e,"popover",a);break;case"xlinkActuate":Bt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Bt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Bt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Bt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Bt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Bt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Zl(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Im.get(n)||n,Zl(e,n,a))}}function fu(e,t,n,a,l,i){switch(n){case"style":hc(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof a=="string"?ia(e,a):(typeof a=="number"||typeof a=="bigint")&&ia(e,""+a);break;case"onScroll":a!=null&&le("scroll",e);break;case"onScrollEnd":a!=null&&le("scrollend",e);break;case"onClick":a!=null&&(e.onclick=qt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ic.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),i=e[Pe]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof a=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Zl(e,n,a)}}}function Ve(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":le("error",e),le("load",e);var a=!1,l=!1,i;for(i in n)if(n.hasOwnProperty(i)){var o=n[i];if(o!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:ve(e,t,i,o,n,null)}}l&&ve(e,t,"srcSet",n.srcSet,n,null),a&&ve(e,t,"src",n.src,n,null);return;case"input":le("invalid",e);var c=i=o=l=null,d=null,A=null;for(a in n)if(n.hasOwnProperty(a)){var U=n[a];if(U!=null)switch(a){case"name":l=U;break;case"type":o=U;break;case"checked":d=U;break;case"defaultChecked":A=U;break;case"value":i=U;break;case"defaultValue":c=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(u(137,t));break;default:ve(e,t,a,U,n,null)}}rc(e,i,c,d,A,o,l,!1);return;case"select":le("invalid",e),a=o=i=null;for(l in n)if(n.hasOwnProperty(l)&&(c=n[l],c!=null))switch(l){case"value":i=c;break;case"defaultValue":o=c;break;case"multiple":a=c;default:ve(e,t,l,c,n,null)}t=i,n=o,e.multiple=!!a,t!=null?la(e,!!a,t,!1):n!=null&&la(e,!!a,n,!0);return;case"textarea":le("invalid",e),i=l=a=null;for(o in n)if(n.hasOwnProperty(o)&&(c=n[o],c!=null))switch(o){case"value":a=c;break;case"defaultValue":l=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(u(91));break;default:ve(e,t,o,c,n,null)}dc(e,a,l,i);return;case"option":for(d in n)n.hasOwnProperty(d)&&(a=n[d],a!=null)&&(d==="selected"?e.selected=a&&typeof a!="function"&&typeof a!="symbol":ve(e,t,d,a,n,null));return;case"dialog":le("beforetoggle",e),le("toggle",e),le("cancel",e),le("close",e);break;case"iframe":case"object":le("load",e);break;case"video":case"audio":for(a=0;a<Al.length;a++)le(Al[a],e);break;case"image":le("error",e),le("load",e);break;case"details":le("toggle",e);break;case"embed":case"source":case"link":le("error",e),le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in n)if(n.hasOwnProperty(A)&&(a=n[A],a!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:ve(e,t,A,a,n,null)}return;default:if(Ro(t)){for(U in n)n.hasOwnProperty(U)&&(a=n[U],a!==void 0&&fu(e,t,U,a,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(a=n[c],a!=null&&ve(e,t,c,a,n,null))}function Rp(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,o=null,c=null,d=null,A=null,U=null;for(R in n){var D=n[R];if(n.hasOwnProperty(R)&&D!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":d=D;default:a.hasOwnProperty(R)||ve(e,t,R,null,a,D)}}for(var E in a){var R=a[E];if(D=n[E],a.hasOwnProperty(E)&&(R!=null||D!=null))switch(E){case"type":i=R;break;case"name":l=R;break;case"checked":A=R;break;case"defaultChecked":U=R;break;case"value":o=R;break;case"defaultValue":c=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(u(137,t));break;default:R!==D&&ve(e,t,E,R,a,D)}}Ao(e,o,c,d,A,U,i,l);return;case"select":R=o=c=E=null;for(i in n)if(d=n[i],n.hasOwnProperty(i)&&d!=null)switch(i){case"value":break;case"multiple":R=d;default:a.hasOwnProperty(i)||ve(e,t,i,null,a,d)}for(l in a)if(i=a[l],d=n[l],a.hasOwnProperty(l)&&(i!=null||d!=null))switch(l){case"value":E=i;break;case"defaultValue":c=i;break;case"multiple":o=i;default:i!==d&&ve(e,t,l,i,a,d)}t=c,n=o,a=R,E!=null?la(e,!!n,E,!1):!!a!=!!n&&(t!=null?la(e,!!n,t,!0):la(e,!!n,n?[]:"",!1));return;case"textarea":R=E=null;for(c in n)if(l=n[c],n.hasOwnProperty(c)&&l!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:ve(e,t,c,null,a,l)}for(o in a)if(l=a[o],i=n[o],a.hasOwnProperty(o)&&(l!=null||i!=null))switch(o){case"value":E=l;break;case"defaultValue":R=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(u(91));break;default:l!==i&&ve(e,t,o,l,a,i)}fc(e,E,R);return;case"option":for(var B in n)E=n[B],n.hasOwnProperty(B)&&E!=null&&!a.hasOwnProperty(B)&&(B==="selected"?e.selected=!1:ve(e,t,B,null,a,E));for(d in a)E=a[d],R=n[d],a.hasOwnProperty(d)&&E!==R&&(E!=null||R!=null)&&(d==="selected"?e.selected=E&&typeof E!="function"&&typeof E!="symbol":ve(e,t,d,E,a,R));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in n)E=n[W],n.hasOwnProperty(W)&&E!=null&&!a.hasOwnProperty(W)&&ve(e,t,W,null,a,E);for(A in a)if(E=a[A],R=n[A],a.hasOwnProperty(A)&&E!==R&&(E!=null||R!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(u(137,t));break;default:ve(e,t,A,E,a,R)}return;default:if(Ro(t)){for(var be in n)E=n[be],n.hasOwnProperty(be)&&E!==void 0&&!a.hasOwnProperty(be)&&fu(e,t,be,void 0,a,E);for(U in a)E=a[U],R=n[U],!a.hasOwnProperty(U)||E===R||E===void 0&&R===void 0||fu(e,t,U,E,a,R);return}}for(var S in n)E=n[S],n.hasOwnProperty(S)&&E!=null&&!a.hasOwnProperty(S)&&ve(e,t,S,null,a,E);for(D in a)E=a[D],R=n[D],!a.hasOwnProperty(D)||E===R||E==null&&R==null||ve(e,t,D,E,a,R)}function gd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Tp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var l=n[a],i=l.transferSize,o=l.initiatorType,c=l.duration;if(i&&c&&gd(o)){for(o=0,c=l.responseEnd,a+=1;a<n.length;a++){var d=n[a],A=d.startTime;if(A>c)break;var U=d.transferSize,D=d.initiatorType;U&&gd(D)&&(d=d.responseEnd,o+=U*(d<c?1:(c-A)/(d-A)))}if(--a,t+=8*(i+o)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var du=null,mu=null;function Qi(e){return e.nodeType===9?e:e.ownerDocument}function yd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function vd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function hu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pu=null;function jp(){var e=window.event;return e&&e.type==="popstate"?e===pu?!1:(pu=e,!0):(pu=null,!1)}var bd=typeof setTimeout=="function"?setTimeout:void 0,kp=typeof clearTimeout=="function"?clearTimeout:void 0,wd=typeof Promise=="function"?Promise:void 0,zp=typeof queueMicrotask=="function"?queueMicrotask:typeof wd<"u"?function(e){return wd.resolve(null).then(e).catch(Up)}:bd;function Up(e){setTimeout(function(){throw e})}function Rn(e){return e==="head"}function Sd(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(l),Oa(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Rl(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Rl(n);for(var i=n.firstChild;i;){var o=i.nextSibling,c=i.nodeName;i[Qa]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=o}}else n==="body"&&Rl(e.ownerDocument.body);n=l}while(n);Oa(t)}function xd(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function gu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":gu(n),So(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Np(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Qa])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Rt(e.nextSibling),e===null)break}return null}function Mp(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Rt(e.nextSibling),e===null))return null;return e}function Ad(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Rt(e.nextSibling),e===null))return null;return e}function yu(e){return e.data==="$?"||e.data==="$~"}function vu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Cp(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var bu=null;function Ed(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Rt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Rd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Td(e,t,n){switch(t=Qi(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Rl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);So(e)}var Tt=new Map,jd=new Set;function Xi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var nn=L.d;L.d={f:Dp,r:Lp,D:Op,C:_p,L:Hp,m:Bp,X:Gp,S:qp,M:Yp};function Dp(){var e=nn.f(),t=Li();return e||t}function Lp(e){var t=ta(e);t!==null&&t.tag===5&&t.type==="form"?Qr(t):nn.r(e)}var Ca=typeof document>"u"?null:document;function kd(e,t,n){var a=Ca;if(a&&typeof t=="string"&&t){var l=vt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),jd.has(l)||(jd.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),Ve(t,"link",e),Be(t),a.head.appendChild(t)))}}function Op(e){nn.D(e),kd("dns-prefetch",e,null)}function _p(e,t){nn.C(e,t),kd("preconnect",e,t)}function Hp(e,t,n){nn.L(e,t,n);var a=Ca;if(a&&e&&t){var l='link[rel="preload"][as="'+vt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+vt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+vt(n.imageSizes)+'"]')):l+='[href="'+vt(e)+'"]';var i=l;switch(t){case"style":i=Da(e);break;case"script":i=La(e)}Tt.has(i)||(e=T({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Tt.set(i,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(Tl(i))||t==="script"&&a.querySelector(jl(i))||(t=a.createElement("link"),Ve(t,"link",e),Be(t),a.head.appendChild(t)))}}function Bp(e,t){nn.m(e,t);var n=Ca;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+vt(a)+'"][href="'+vt(e)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=La(e)}if(!Tt.has(i)&&(e=T({rel:"modulepreload",href:e},t),Tt.set(i,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(jl(i)))return}a=n.createElement("link"),Ve(a,"link",e),Be(a),n.head.appendChild(a)}}}function qp(e,t,n){nn.S(e,t,n);var a=Ca;if(a&&e){var l=na(a).hoistableStyles,i=Da(e);t=t||"default";var o=l.get(i);if(!o){var c={loading:0,preload:null};if(o=a.querySelector(Tl(i)))c.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Tt.get(i))&&wu(e,n);var d=o=a.createElement("link");Be(d),Ve(d,"link",e),d._p=new Promise(function(A,U){d.onload=A,d.onerror=U}),d.addEventListener("load",function(){c.loading|=1}),d.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Zi(o,t,a)}o={type:"stylesheet",instance:o,count:1,state:c},l.set(i,o)}}}function Gp(e,t){nn.X(e,t);var n=Ca;if(n&&e){var a=na(n).hoistableScripts,l=La(e),i=a.get(l);i||(i=n.querySelector(jl(l)),i||(e=T({src:e,async:!0},t),(t=Tt.get(l))&&Su(e,t),i=n.createElement("script"),Be(i),Ve(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function Yp(e,t){nn.M(e,t);var n=Ca;if(n&&e){var a=na(n).hoistableScripts,l=La(e),i=a.get(l);i||(i=n.querySelector(jl(l)),i||(e=T({src:e,async:!0,type:"module"},t),(t=Tt.get(l))&&Su(e,t),i=n.createElement("script"),Be(i),Ve(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function zd(e,t,n,a){var l=(l=ne.current)?Xi(l):null;if(!l)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Da(n.href),n=na(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Da(n.href);var i=na(l).hoistableStyles,o=i.get(e);if(o||(l=l.ownerDocument||l,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=l.querySelector(Tl(e)))&&!i._p&&(o.instance=i,o.state.loading=5),Tt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Tt.set(e,n),i||Qp(l,e,n,o.state))),t&&a===null)throw Error(u(528,""));return o}if(t&&a!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=La(n),n=na(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Da(e){return'href="'+vt(e)+'"'}function Tl(e){return'link[rel="stylesheet"]['+e+"]"}function Ud(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function Qp(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Ve(t,"link",n),Be(t),e.head.appendChild(t))}function La(e){return'[src="'+vt(e)+'"]'}function jl(e){return"script[async]"+e}function Nd(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+vt(n.href)+'"]');if(a)return t.instance=a,Be(a),a;var l=T({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Be(a),Ve(a,"style",l),Zi(a,n.precedence,e),t.instance=a;case"stylesheet":l=Da(n.href);var i=e.querySelector(Tl(l));if(i)return t.state.loading|=4,t.instance=i,Be(i),i;a=Ud(n),(l=Tt.get(l))&&wu(a,l),i=(e.ownerDocument||e).createElement("link"),Be(i);var o=i;return o._p=new Promise(function(c,d){o.onload=c,o.onerror=d}),Ve(i,"link",a),t.state.loading|=4,Zi(i,n.precedence,e),t.instance=i;case"script":return i=La(n.src),(l=e.querySelector(jl(i)))?(t.instance=l,Be(l),l):(a=n,(l=Tt.get(i))&&(a=T({},n),Su(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Be(l),Ve(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Zi(a,n.precedence,e));return t.instance}function Zi(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,o=0;o<a.length;o++){var c=a[o];if(c.dataset.precedence===t)i=c;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function wu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Su(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Vi=null;function Md(e,t,n){if(Vi===null){var a=new Map,l=Vi=new Map;l.set(n,a)}else l=Vi,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var i=n[l];if(!(i[Qa]||i[Ye]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(t)||"";o=e+o;var c=a.get(o);c?c.push(i):a.set(o,[i])}}return a}function Cd(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Xp(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Dd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Zp(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=Da(a.href),i=t.querySelector(Tl(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ki.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,Be(i);return}i=t.ownerDocument||t,a=Ud(a),(l=Tt.get(l))&&wu(a,l),i=i.createElement("link"),Be(i);var o=i;o._p=new Promise(function(c,d){o.onload=c,o.onerror=d}),Ve(i,"link",a),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Ki.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var xu=0;function Vp(e,t){return e.stylesheets&&e.count===0&&Wi(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Wi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&xu===0&&(xu=62500*Tp());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Wi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>xu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function Ki(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ji=null;function Wi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ji=new Map,t.forEach(Kp,e),Ji=null,Ki.call(e))}function Kp(e,t){if(!(t.state.loading&4)){var n=Ji.get(e);if(n)var a=n.get(null);else{n=new Map,Ji.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var o=l[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),a=o)}a&&n.set(null,a)}l=t.instance,o=l.getAttribute("data-precedence"),i=n.get(o)||a,i===a&&n.set(null,l),n.set(o,l),this.count++,a=Ki.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var kl={$$typeof:K,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function Jp(e,t,n,a,l,i,o,c,d){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yo(0),this.hiddenUpdates=yo(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function Ld(e,t,n,a,l,i,o,c,d,A,U,D){return e=new Jp(e,t,n,o,d,A,U,D,c),t=1,i===!0&&(t|=24),i=rt(3,null,null,t),e.current=i,i.stateNode=e,t=ts(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:t},is(i),e}function Od(e){return e?(e=da,e):da}function _d(e,t,n,a,l,i){l=Od(l),a.context===null?a.context=l:a.pendingContext=l,a=hn(t),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=pn(e,a,t),n!==null&&(it(n,e,t),ol(n,e,t))}function Hd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Au(e,t){Hd(e,t),(e=e.alternate)&&Hd(e,t)}function Bd(e){if(e.tag===13||e.tag===31){var t=Bn(e,67108864);t!==null&&it(t,e,67108864),Au(e,67108864)}}function qd(e){if(e.tag===13||e.tag===31){var t=pt();t=vo(t);var n=Bn(e,t);n!==null&&it(n,e,t),Au(e,t)}}var Fi=!0;function Wp(e,t,n,a){var l=z.T;z.T=null;var i=L.p;try{L.p=2,Eu(e,t,n,a)}finally{L.p=i,z.T=l}}function Fp(e,t,n,a){var l=z.T;z.T=null;var i=L.p;try{L.p=8,Eu(e,t,n,a)}finally{L.p=i,z.T=l}}function Eu(e,t,n,a){if(Fi){var l=Ru(a);if(l===null)ru(e,t,a,$i,n),Yd(e,a);else if(Ip(l,e,t,n,a))a.stopPropagation();else if(Yd(e,a),t&4&&-1<$p.indexOf(e)){for(;l!==null;){var i=ta(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=Dn(i.pendingLanes);if(o!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;o;){var d=1<<31-ut(o);c.entanglements[1]|=d,o&=~d}Lt(i),(re&6)===0&&(Ci=ot()+500,xl(0))}}break;case 31:case 13:c=Bn(i,2),c!==null&&it(c,i,2),Li(),Au(i,2)}if(i=Ru(a),i===null&&ru(e,t,a,$i,n),i===l)break;l=i}l!==null&&a.stopPropagation()}else ru(e,t,a,null,n)}}function Ru(e){return e=jo(e),Tu(e)}var $i=null;function Tu(e){if($i=null,e=ea(e),e!==null){var t=h(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=w(t),e!==null)return e;e=null}else if(n===31){if(e=k(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return $i=e,null}function Gd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Om()){case Ju:return 2;case Wu:return 8;case ql:case _m:return 32;case Fu:return 268435456;default:return 32}default:return 32}}var ju=!1,Tn=null,jn=null,kn=null,zl=new Map,Ul=new Map,zn=[],$p="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Yd(e,t){switch(e){case"focusin":case"focusout":Tn=null;break;case"dragenter":case"dragleave":jn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":zl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ul.delete(t.pointerId)}}function Nl(e,t,n,a,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},t!==null&&(t=ta(t),t!==null&&Bd(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Ip(e,t,n,a,l){switch(t){case"focusin":return Tn=Nl(Tn,e,t,n,a,l),!0;case"dragenter":return jn=Nl(jn,e,t,n,a,l),!0;case"mouseover":return kn=Nl(kn,e,t,n,a,l),!0;case"pointerover":var i=l.pointerId;return zl.set(i,Nl(zl.get(i)||null,e,t,n,a,l)),!0;case"gotpointercapture":return i=l.pointerId,Ul.set(i,Nl(Ul.get(i)||null,e,t,n,a,l)),!0}return!1}function Qd(e){var t=ea(e.target);if(t!==null){var n=h(t);if(n!==null){if(t=n.tag,t===13){if(t=w(n),t!==null){e.blockedOn=t,nc(e.priority,function(){qd(n)});return}}else if(t===31){if(t=k(n),t!==null){e.blockedOn=t,nc(e.priority,function(){qd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ii(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ru(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);To=a,n.target.dispatchEvent(a),To=null}else return t=ta(n),t!==null&&Bd(t),e.blockedOn=n,!1;t.shift()}return!0}function Xd(e,t,n){Ii(e)&&n.delete(t)}function Pp(){ju=!1,Tn!==null&&Ii(Tn)&&(Tn=null),jn!==null&&Ii(jn)&&(jn=null),kn!==null&&Ii(kn)&&(kn=null),zl.forEach(Xd),Ul.forEach(Xd)}function Pi(e,t){e.blockedOn===t&&(e.blockedOn=null,ju||(ju=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Pp)))}var eo=null;function Zd(e){eo!==e&&(eo=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){eo===e&&(eo=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(Tu(a||n)===null)continue;break}var i=ta(n);i!==null&&(e.splice(t,3),t-=3,Rs(i,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function Oa(e){function t(d){return Pi(d,e)}Tn!==null&&Pi(Tn,e),jn!==null&&Pi(jn,e),kn!==null&&Pi(kn,e),zl.forEach(t),Ul.forEach(t);for(var n=0;n<zn.length;n++){var a=zn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<zn.length&&(n=zn[0],n.blockedOn===null);)Qd(n),n.blockedOn===null&&zn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],i=n[a+1],o=l[Pe]||null;if(typeof i=="function")o||Zd(n);else if(o){var c=null;if(i&&i.hasAttribute("formAction")){if(l=i,o=i[Pe]||null)c=o.formAction;else if(Tu(l)!==null)continue}else c=o.action;typeof c=="function"?n[a+1]=c:(n.splice(a,3),a-=3),Zd(n)}}}function Vd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return l=o})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function ku(e){this._internalRoot=e}to.prototype.render=ku.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,a=pt();_d(n,a,e,t,null,null)},to.prototype.unmount=ku.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_d(e.current,2,null,e,null,null),Li(),t[Pn]=null}};function to(e){this._internalRoot=e}to.prototype.unstable_scheduleHydration=function(e){if(e){var t=tc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zn.length&&t!==0&&t<zn[n].priority;n++);zn.splice(n,0,e),n===0&&Qd(e)}};var Kd=r.version;if(Kd!=="19.2.4")throw Error(u(527,Kd,"19.2.4"));L.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=p(t),e=e!==null?C(e):null,e=e===null?null:e.stateNode,e};var eg={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var no=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!no.isDisabled&&no.supportsFiber)try{qa=no.inject(eg),st=no}catch{}}return Cl.createRoot=function(e,t){if(!m(e))throw Error(u(299));var n=!1,a="",l=Pr,i=ef,o=tf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ld(e,1,!1,null,null,n,a,null,l,i,o,Vd),e[Pn]=t.current,cu(e),new ku(t)},Cl.hydrateRoot=function(e,t,n){if(!m(e))throw Error(u(299));var a=!1,l="",i=Pr,o=ef,c=tf,d=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(c=n.onRecoverableError),n.formState!==void 0&&(d=n.formState)),t=Ld(e,1,!0,t,n??null,a,l,d,i,o,c,Vd),t.context=Od(null),n=t.current,a=pt(),a=vo(a),l=hn(a),l.callback=null,pn(n,l,a),n=a,t.current.lanes=n,Ya(t,n),Lt(t),e[Pn]=t.current,cu(e),new to(t)},Cl.version="19.2.4",Cl}var am;function rg(){if(am)return Nu.exports;am=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(r){console.error(r)}}return s(),Nu.exports=cg(),Nu.exports}var fg=rg();var lm="popstate";function dg(s={}){function r(u,m){let{pathname:h,search:w,hash:k}=u.location;return Hu("",{pathname:h,search:w,hash:k},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function f(u,m){return typeof m=="string"?m:Ll(m)}return hg(r,f,null,s)}function Te(s,r){if(s===!1||s===null||typeof s>"u")throw new Error(r)}function Ot(s,r){if(!s){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function mg(){return Math.random().toString(36).substring(2,10)}function im(s,r){return{usr:s.state,key:s.key,idx:r}}function Hu(s,r,f=null,u){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof r=="string"?_a(r):r,state:f,key:r&&r.key||u||mg()}}function Ll({pathname:s="/",search:r="",hash:f=""}){return r&&r!=="?"&&(s+=r.charAt(0)==="?"?r:"?"+r),f&&f!=="#"&&(s+=f.charAt(0)==="#"?f:"#"+f),s}function _a(s){let r={};if(s){let f=s.indexOf("#");f>=0&&(r.hash=s.substring(f),s=s.substring(0,f));let u=s.indexOf("?");u>=0&&(r.search=s.substring(u),s=s.substring(0,u)),s&&(r.pathname=s)}return r}function hg(s,r,f,u={}){let{window:m=document.defaultView,v5Compat:h=!1}=u,w=m.history,k="POP",b=null,p=C();p==null&&(p=0,w.replaceState({...w.state,idx:p},""));function C(){return(w.state||{idx:null}).idx}function T(){k="POP";let Y=C(),Z=Y==null?null:Y-p;p=Y,b&&b({action:k,location:X.location,delta:Z})}function O(Y,Z){k="PUSH";let H=Hu(X.location,Y,Z);p=C()+1;let K=im(H,p),we=X.createHref(H);try{w.pushState(K,"",we)}catch(me){if(me instanceof DOMException&&me.name==="DataCloneError")throw me;m.location.assign(we)}h&&b&&b({action:k,location:X.location,delta:1})}function q(Y,Z){k="REPLACE";let H=Hu(X.location,Y,Z);p=C();let K=im(H,p),we=X.createHref(H);w.replaceState(K,"",we),h&&b&&b({action:k,location:X.location,delta:0})}function F(Y){return pg(Y)}let X={get action(){return k},get location(){return s(m,w)},listen(Y){if(b)throw new Error("A history only accepts one active listener");return m.addEventListener(lm,T),b=Y,()=>{m.removeEventListener(lm,T),b=null}},createHref(Y){return r(m,Y)},createURL:F,encodeLocation(Y){let Z=F(Y);return{pathname:Z.pathname,search:Z.search,hash:Z.hash}},push:O,replace:q,go(Y){return w.go(Y)}};return X}function pg(s,r=!1){let f="http://localhost";typeof window<"u"&&(f=window.location.origin!=="null"?window.location.origin:window.location.href),Te(f,"No window.location.(origin|href) available to create URL");let u=typeof s=="string"?s:Ll(s);return u=u.replace(/ $/,"%20"),!r&&u.startsWith("//")&&(u=f+u),new URL(u,f)}function dm(s,r,f="/"){return gg(s,r,f,!1)}function gg(s,r,f,u){let m=typeof r=="string"?_a(r):r,h=ln(m.pathname||"/",f);if(h==null)return null;let w=mm(s);yg(w);let k=null;for(let b=0;k==null&&b<w.length;++b){let p=kg(h);k=Tg(w[b],p,u)}return k}function mm(s,r=[],f=[],u="",m=!1){let h=(w,k,b=m,p)=>{let C={relativePath:p===void 0?w.path||"":p,caseSensitive:w.caseSensitive===!0,childrenIndex:k,route:w};if(C.relativePath.startsWith("/")){if(!C.relativePath.startsWith(u)&&b)return;Te(C.relativePath.startsWith(u),`Absolute route path "${C.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),C.relativePath=C.relativePath.slice(u.length)}let T=an([u,C.relativePath]),O=f.concat(C);w.children&&w.children.length>0&&(Te(w.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${T}".`),mm(w.children,r,O,T,b)),!(w.path==null&&!w.index)&&r.push({path:T,score:Eg(T,w.index),routesMeta:O})};return s.forEach((w,k)=>{if(w.path===""||!w.path?.includes("?"))h(w,k);else for(let b of hm(w.path))h(w,k,!0,b)}),r}function hm(s){let r=s.split("/");if(r.length===0)return[];let[f,...u]=r,m=f.endsWith("?"),h=f.replace(/\?$/,"");if(u.length===0)return m?[h,""]:[h];let w=hm(u.join("/")),k=[];return k.push(...w.map(b=>b===""?h:[h,b].join("/"))),m&&k.push(...w),k.map(b=>s.startsWith("/")&&b===""?"/":b)}function yg(s){s.sort((r,f)=>r.score!==f.score?f.score-r.score:Rg(r.routesMeta.map(u=>u.childrenIndex),f.routesMeta.map(u=>u.childrenIndex)))}var vg=/^:[\w-]+$/,bg=3,wg=2,Sg=1,xg=10,Ag=-2,om=s=>s==="*";function Eg(s,r){let f=s.split("/"),u=f.length;return f.some(om)&&(u+=Ag),r&&(u+=wg),f.filter(m=>!om(m)).reduce((m,h)=>m+(vg.test(h)?bg:h===""?Sg:xg),u)}function Rg(s,r){return s.length===r.length&&s.slice(0,-1).every((u,m)=>u===r[m])?s[s.length-1]-r[r.length-1]:0}function Tg(s,r,f=!1){let{routesMeta:u}=s,m={},h="/",w=[];for(let k=0;k<u.length;++k){let b=u[k],p=k===u.length-1,C=h==="/"?r:r.slice(h.length)||"/",T=so({path:b.relativePath,caseSensitive:b.caseSensitive,end:p},C),O=b.route;if(!T&&p&&f&&!u[u.length-1].route.index&&(T=so({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},C)),!T)return null;Object.assign(m,T.params),w.push({params:m,pathname:an([h,T.pathname]),pathnameBase:Mg(an([h,T.pathnameBase])),route:O}),T.pathnameBase!=="/"&&(h=an([h,T.pathnameBase]))}return w}function so(s,r){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[f,u]=jg(s.path,s.caseSensitive,s.end),m=r.match(f);if(!m)return null;let h=m[0],w=h.replace(/(.)\/+$/,"$1"),k=m.slice(1);return{params:u.reduce((p,{paramName:C,isOptional:T},O)=>{if(C==="*"){let F=k[O]||"";w=h.slice(0,h.length-F.length).replace(/(.)\/+$/,"$1")}const q=k[O];return T&&!q?p[C]=void 0:p[C]=(q||"").replace(/%2F/g,"/"),p},{}),pathname:h,pathnameBase:w,pattern:s}}function jg(s,r=!1,f=!0){Ot(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let u=[],m="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(w,k,b)=>(u.push({paramName:k,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(u.push({paramName:"*"}),m+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):f?m+="\\/*$":s!==""&&s!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,r?void 0:"i"),u]}function kg(s){try{return s.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Ot(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),s}}function ln(s,r){if(r==="/")return s;if(!s.toLowerCase().startsWith(r.toLowerCase()))return null;let f=r.endsWith("/")?r.length-1:r.length,u=s.charAt(f);return u&&u!=="/"?null:s.slice(f)||"/"}var zg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Ug(s,r="/"){let{pathname:f,search:u="",hash:m=""}=typeof s=="string"?_a(s):s,h;return f?(f=f.replace(/\/\/+/g,"/"),f.startsWith("/")?h=sm(f.substring(1),"/"):h=sm(f,r)):h=r,{pathname:h,search:Cg(u),hash:Dg(m)}}function sm(s,r){let f=r.replace(/\/+$/,"").split("/");return s.split("/").forEach(m=>{m===".."?f.length>1&&f.pop():m!=="."&&f.push(m)}),f.length>1?f.join("/"):"/"}function Lu(s,r,f,u){return`Cannot include a '${s}' character in a manually specified \`to.${r}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ng(s){return s.filter((r,f)=>f===0||r.route.path&&r.route.path.length>0)}function pm(s){let r=Ng(s);return r.map((f,u)=>u===r.length-1?f.pathname:f.pathnameBase)}function gm(s,r,f,u=!1){let m;typeof s=="string"?m=_a(s):(m={...s},Te(!m.pathname||!m.pathname.includes("?"),Lu("?","pathname","search",m)),Te(!m.pathname||!m.pathname.includes("#"),Lu("#","pathname","hash",m)),Te(!m.search||!m.search.includes("#"),Lu("#","search","hash",m)));let h=s===""||m.pathname==="",w=h?"/":m.pathname,k;if(w==null)k=f;else{let T=r.length-1;if(!u&&w.startsWith("..")){let O=w.split("/");for(;O[0]==="..";)O.shift(),T-=1;m.pathname=O.join("/")}k=T>=0?r[T]:"/"}let b=Ug(m,k),p=w&&w!=="/"&&w.endsWith("/"),C=(h||w===".")&&f.endsWith("/");return!b.pathname.endsWith("/")&&(p||C)&&(b.pathname+="/"),b}var an=s=>s.join("/").replace(/\/\/+/g,"/"),Mg=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Cg=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Dg=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,Lg=class{constructor(s,r,f,u=!1){this.status=s,this.statusText=r||"",this.internal=u,f instanceof Error?(this.data=f.toString(),this.error=f):this.data=f}};function Og(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function _g(s){return s.map(r=>r.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var ym=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function vm(s,r){let f=s;if(typeof f!="string"||!zg.test(f))return{absoluteURL:void 0,isExternal:!1,to:f};let u=f,m=!1;if(ym)try{let h=new URL(window.location.href),w=f.startsWith("//")?new URL(h.protocol+f):new URL(f),k=ln(w.pathname,r);w.origin===h.origin&&k!=null?f=k+w.search+w.hash:m=!0}catch{Ot(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:m,to:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var bm=["POST","PUT","PATCH","DELETE"];new Set(bm);var Hg=["GET",...bm];new Set(Hg);var Ha=j.createContext(null);Ha.displayName="DataRouter";var uo=j.createContext(null);uo.displayName="DataRouterState";var Bg=j.createContext(!1),wm=j.createContext({isTransitioning:!1});wm.displayName="ViewTransition";var qg=j.createContext(new Map);qg.displayName="Fetchers";var Gg=j.createContext(null);Gg.displayName="Await";var jt=j.createContext(null);jt.displayName="Navigation";var Ol=j.createContext(null);Ol.displayName="Location";var _t=j.createContext({outlet:null,matches:[],isDataRoute:!1});_t.displayName="Route";var Gu=j.createContext(null);Gu.displayName="RouteError";var Sm="REACT_ROUTER_ERROR",Yg="REDIRECT",Qg="ROUTE_ERROR_RESPONSE";function Xg(s){if(s.startsWith(`${Sm}:${Yg}:{`))try{let r=JSON.parse(s.slice(28));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.location=="string"&&typeof r.reloadDocument=="boolean"&&typeof r.replace=="boolean")return r}catch{}}function Zg(s){if(s.startsWith(`${Sm}:${Qg}:{`))try{let r=JSON.parse(s.slice(40));if(typeof r=="object"&&r&&typeof r.status=="number"&&typeof r.statusText=="string")return new Lg(r.status,r.statusText,r.data)}catch{}}function Vg(s,{relative:r}={}){Te(_l(),"useHref() may be used only in the context of a <Router> component.");let{basename:f,navigator:u}=j.useContext(jt),{hash:m,pathname:h,search:w}=Hl(s,{relative:r}),k=h;return f!=="/"&&(k=h==="/"?f:an([f,h])),u.createHref({pathname:k,search:w,hash:m})}function _l(){return j.useContext(Ol)!=null}function Mn(){return Te(_l(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(Ol).location}var xm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Am(s){j.useContext(jt).static||j.useLayoutEffect(s)}function Em(){let{isDataRoute:s}=j.useContext(_t);return s?sy():Kg()}function Kg(){Te(_l(),"useNavigate() may be used only in the context of a <Router> component.");let s=j.useContext(Ha),{basename:r,navigator:f}=j.useContext(jt),{matches:u}=j.useContext(_t),{pathname:m}=Mn(),h=JSON.stringify(pm(u)),w=j.useRef(!1);return Am(()=>{w.current=!0}),j.useCallback((b,p={})=>{if(Ot(w.current,xm),!w.current)return;if(typeof b=="number"){f.go(b);return}let C=gm(b,JSON.parse(h),m,p.relative==="path");s==null&&r!=="/"&&(C.pathname=C.pathname==="/"?r:an([r,C.pathname])),(p.replace?f.replace:f.push)(C,p.state,p)},[r,f,h,m,s])}var Jg=j.createContext(null);function Wg(s){let r=j.useContext(_t).outlet;return j.useMemo(()=>r&&j.createElement(Jg.Provider,{value:s},r),[r,s])}function Hl(s,{relative:r}={}){let{matches:f}=j.useContext(_t),{pathname:u}=Mn(),m=JSON.stringify(pm(f));return j.useMemo(()=>gm(s,JSON.parse(m),u,r==="path"),[s,m,u,r])}function Fg(s,r){return Rm(s,r)}function Rm(s,r,f,u,m){Te(_l(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:h}=j.useContext(jt),{matches:w}=j.useContext(_t),k=w[w.length-1],b=k?k.params:{},p=k?k.pathname:"/",C=k?k.pathnameBase:"/",T=k&&k.route;{let H=T&&T.path||"";jm(p,!T||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let O=Mn(),q;if(r){let H=typeof r=="string"?_a(r):r;Te(C==="/"||H.pathname?.startsWith(C),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${C}" but pathname "${H.pathname}" was given in the \`location\` prop.`),q=H}else q=O;let F=q.pathname||"/",X=F;if(C!=="/"){let H=C.replace(/^\//,"").split("/");X="/"+F.replace(/^\//,"").split("/").slice(H.length).join("/")}let Y=dm(s,{pathname:X});Ot(T||Y!=null,`No routes matched location "${q.pathname}${q.search}${q.hash}" `),Ot(Y==null||Y[Y.length-1].route.element!==void 0||Y[Y.length-1].route.Component!==void 0||Y[Y.length-1].route.lazy!==void 0,`Matched leaf route at location "${q.pathname}${q.search}${q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Z=ty(Y&&Y.map(H=>Object.assign({},H,{params:Object.assign({},b,H.params),pathname:an([C,h.encodeLocation?h.encodeLocation(H.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?C:an([C,h.encodeLocation?h.encodeLocation(H.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),w,f,u,m);return r&&Z?j.createElement(Ol.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...q},navigationType:"POP"}},Z):Z}function $g(){let s=oy(),r=Og(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),f=s instanceof Error?s.stack:null,u="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:u},h={padding:"2px 4px",backgroundColor:u},w=null;return console.error("Error handled by React Router default ErrorBoundary:",s),w=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:h},"ErrorBoundary")," or"," ",j.createElement("code",{style:h},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},r),f?j.createElement("pre",{style:m},f):null,w)}var Ig=j.createElement($g,null),Tm=class extends j.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,r){return r.location!==s.location||r.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:r.error,location:r.location,revalidation:s.revalidation||r.revalidation}}componentDidCatch(s,r){this.props.onError?this.props.onError(s,r):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const f=Zg(s.digest);f&&(s=f)}let r=s!==void 0?j.createElement(_t.Provider,{value:this.props.routeContext},j.createElement(Gu.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?j.createElement(Pg,{error:s},r):r}};Tm.contextType=Bg;var Ou=new WeakMap;function Pg({children:s,error:r}){let{basename:f}=j.useContext(jt);if(typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){let u=Xg(r.digest);if(u){let m=Ou.get(r);if(m)throw m;let h=vm(u.location,f);if(ym&&!Ou.get(r))if(h.isExternal||u.reloadDocument)window.location.href=h.absoluteURL||h.to;else{const w=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(h.to,{replace:u.replace}));throw Ou.set(r,w),w}return j.createElement("meta",{httpEquiv:"refresh",content:`0;url=${h.absoluteURL||h.to}`})}}return s}function ey({routeContext:s,match:r,children:f}){let u=j.useContext(Ha);return u&&u.static&&u.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=r.route.id),j.createElement(_t.Provider,{value:s},f)}function ty(s,r=[],f=null,u=null,m=null){if(s==null){if(!f)return null;if(f.errors)s=f.matches;else if(r.length===0&&!f.initialized&&f.matches.length>0)s=f.matches;else return null}let h=s,w=f?.errors;if(w!=null){let C=h.findIndex(T=>T.route.id&&w?.[T.route.id]!==void 0);Te(C>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(w).join(",")}`),h=h.slice(0,Math.min(h.length,C+1))}let k=!1,b=-1;if(f)for(let C=0;C<h.length;C++){let T=h[C];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(b=C),T.route.id){let{loaderData:O,errors:q}=f,F=T.route.loader&&!O.hasOwnProperty(T.route.id)&&(!q||q[T.route.id]===void 0);if(T.route.lazy||F){k=!0,b>=0?h=h.slice(0,b+1):h=[h[0]];break}}}let p=f&&u?(C,T)=>{u(C,{location:f.location,params:f.matches?.[0]?.params??{},unstable_pattern:_g(f.matches),errorInfo:T})}:void 0;return h.reduceRight((C,T,O)=>{let q,F=!1,X=null,Y=null;f&&(q=w&&T.route.id?w[T.route.id]:void 0,X=T.route.errorElement||Ig,k&&(b<0&&O===0?(jm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),F=!0,Y=null):b===O&&(F=!0,Y=T.route.hydrateFallbackElement||null)));let Z=r.concat(h.slice(0,O+1)),H=()=>{let K;return q?K=X:F?K=Y:T.route.Component?K=j.createElement(T.route.Component,null):T.route.element?K=T.route.element:K=C,j.createElement(ey,{match:T,routeContext:{outlet:C,matches:Z,isDataRoute:f!=null},children:K})};return f&&(T.route.ErrorBoundary||T.route.errorElement||O===0)?j.createElement(Tm,{location:f.location,revalidation:f.revalidation,component:X,error:q,children:H(),routeContext:{outlet:null,matches:Z,isDataRoute:!0},onError:p}):H()},null)}function Yu(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ny(s){let r=j.useContext(Ha);return Te(r,Yu(s)),r}function ay(s){let r=j.useContext(uo);return Te(r,Yu(s)),r}function ly(s){let r=j.useContext(_t);return Te(r,Yu(s)),r}function Qu(s){let r=ly(s),f=r.matches[r.matches.length-1];return Te(f.route.id,`${s} can only be used on routes that contain a unique "id"`),f.route.id}function iy(){return Qu("useRouteId")}function oy(){let s=j.useContext(Gu),r=ay("useRouteError"),f=Qu("useRouteError");return s!==void 0?s:r.errors?.[f]}function sy(){let{router:s}=ny("useNavigate"),r=Qu("useNavigate"),f=j.useRef(!1);return Am(()=>{f.current=!0}),j.useCallback(async(m,h={})=>{Ot(f.current,xm),f.current&&(typeof m=="number"?await s.navigate(m):await s.navigate(m,{fromRouteId:r,...h}))},[s,r])}var um={};function jm(s,r,f){!r&&!um[s]&&(um[s]=!0,Ot(!1,f))}j.memo(uy);function uy({routes:s,future:r,state:f,onError:u}){return Rm(s,void 0,f,u,r)}function cy(s){return Wg(s.context)}function Nn(s){Te(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ry({basename:s="/",children:r=null,location:f,navigationType:u="POP",navigator:m,static:h=!1,unstable_useTransitions:w}){Te(!_l(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let k=s.replace(/^\/*/,"/"),b=j.useMemo(()=>({basename:k,navigator:m,static:h,unstable_useTransitions:w,future:{}}),[k,m,h,w]);typeof f=="string"&&(f=_a(f));let{pathname:p="/",search:C="",hash:T="",state:O=null,key:q="default"}=f,F=j.useMemo(()=>{let X=ln(p,k);return X==null?null:{location:{pathname:X,search:C,hash:T,state:O,key:q},navigationType:u}},[k,p,C,T,O,q,u]);return Ot(F!=null,`<Router basename="${k}"> is not able to match the URL "${p}${C}${T}" because it does not start with the basename, so the <Router> won't render anything.`),F==null?null:j.createElement(jt.Provider,{value:b},j.createElement(Ol.Provider,{children:r,value:F}))}function fy({children:s,location:r}){return Fg(Bu(s),r)}function Bu(s,r=[]){let f=[];return j.Children.forEach(s,(u,m)=>{if(!j.isValidElement(u))return;let h=[...r,m];if(u.type===j.Fragment){f.push.apply(f,Bu(u.props.children,h));return}Te(u.type===Nn,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Te(!u.props.index||!u.props.children,"An index route cannot have child routes.");let w={id:u.props.id||h.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(w.children=Bu(u.props.children,h)),f.push(w)}),f}var io="get",oo="application/x-www-form-urlencoded";function co(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function dy(s){return co(s)&&s.tagName.toLowerCase()==="button"}function my(s){return co(s)&&s.tagName.toLowerCase()==="form"}function hy(s){return co(s)&&s.tagName.toLowerCase()==="input"}function py(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function gy(s,r){return s.button===0&&(!r||r==="_self")&&!py(s)}var ao=null;function yy(){if(ao===null)try{new FormData(document.createElement("form"),0),ao=!1}catch{ao=!0}return ao}var vy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function _u(s){return s!=null&&!vy.has(s)?(Ot(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${oo}"`),null):s}function by(s,r){let f,u,m,h,w;if(my(s)){let k=s.getAttribute("action");u=k?ln(k,r):null,f=s.getAttribute("method")||io,m=_u(s.getAttribute("enctype"))||oo,h=new FormData(s)}else if(dy(s)||hy(s)&&(s.type==="submit"||s.type==="image")){let k=s.form;if(k==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=s.getAttribute("formaction")||k.getAttribute("action");if(u=b?ln(b,r):null,f=s.getAttribute("formmethod")||k.getAttribute("method")||io,m=_u(s.getAttribute("formenctype"))||_u(k.getAttribute("enctype"))||oo,h=new FormData(k,s),!yy()){let{name:p,type:C,value:T}=s;if(C==="image"){let O=p?`${p}.`:"";h.append(`${O}x`,"0"),h.append(`${O}y`,"0")}else p&&h.append(p,T)}}else{if(co(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');f=io,u=null,m=oo,w=s}return h&&m==="text/plain"&&(w=h,h=void 0),{action:u,method:f.toLowerCase(),encType:m,formData:h,body:w}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Xu(s,r){if(s===!1||s===null||typeof s>"u")throw new Error(r)}function wy(s,r,f,u){let m=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return f?m.pathname.endsWith("/")?m.pathname=`${m.pathname}_.${u}`:m.pathname=`${m.pathname}.${u}`:m.pathname==="/"?m.pathname=`_root.${u}`:r&&ln(m.pathname,r)==="/"?m.pathname=`${r.replace(/\/$/,"")}/_root.${u}`:m.pathname=`${m.pathname.replace(/\/$/,"")}.${u}`,m}async function Sy(s,r){if(s.id in r)return r[s.id];try{let f=await import(s.module);return r[s.id]=f,f}catch(f){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(f),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function xy(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function Ay(s,r,f){let u=await Promise.all(s.map(async m=>{let h=r.routes[m.route.id];if(h){let w=await Sy(h,f);return w.links?w.links():[]}return[]}));return jy(u.flat(1).filter(xy).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function cm(s,r,f,u,m,h){let w=(b,p)=>f[p]?b.route.id!==f[p].route.id:!0,k=(b,p)=>f[p].pathname!==b.pathname||f[p].route.path?.endsWith("*")&&f[p].params["*"]!==b.params["*"];return h==="assets"?r.filter((b,p)=>w(b,p)||k(b,p)):h==="data"?r.filter((b,p)=>{let C=u.routes[b.route.id];if(!C||!C.hasLoader)return!1;if(w(b,p)||k(b,p))return!0;if(b.route.shouldRevalidate){let T=b.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:f[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof T=="boolean")return T}return!0}):[]}function Ey(s,r,{includeHydrateFallback:f}={}){return Ry(s.map(u=>{let m=r.routes[u.route.id];if(!m)return[];let h=[m.module];return m.clientActionModule&&(h=h.concat(m.clientActionModule)),m.clientLoaderModule&&(h=h.concat(m.clientLoaderModule)),f&&m.hydrateFallbackModule&&(h=h.concat(m.hydrateFallbackModule)),m.imports&&(h=h.concat(m.imports)),h}).flat(1))}function Ry(s){return[...new Set(s)]}function Ty(s){let r={},f=Object.keys(s).sort();for(let u of f)r[u]=s[u];return r}function jy(s,r){let f=new Set;return new Set(r),s.reduce((u,m)=>{let h=JSON.stringify(Ty(m));return f.has(h)||(f.add(h),u.push({key:h,link:m})),u},[])}function km(){let s=j.useContext(Ha);return Xu(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function ky(){let s=j.useContext(uo);return Xu(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Zu=j.createContext(void 0);Zu.displayName="FrameworkContext";function zm(){let s=j.useContext(Zu);return Xu(s,"You must render this element inside a <HydratedRouter> element"),s}function zy(s,r){let f=j.useContext(Zu),[u,m]=j.useState(!1),[h,w]=j.useState(!1),{onFocus:k,onBlur:b,onMouseEnter:p,onMouseLeave:C,onTouchStart:T}=r,O=j.useRef(null);j.useEffect(()=>{if(s==="render"&&w(!0),s==="viewport"){let X=Z=>{Z.forEach(H=>{w(H.isIntersecting)})},Y=new IntersectionObserver(X,{threshold:.5});return O.current&&Y.observe(O.current),()=>{Y.disconnect()}}},[s]),j.useEffect(()=>{if(u){let X=setTimeout(()=>{w(!0)},100);return()=>{clearTimeout(X)}}},[u]);let q=()=>{m(!0)},F=()=>{m(!1),w(!1)};return f?s!=="intent"?[h,O,{}]:[h,O,{onFocus:Dl(k,q),onBlur:Dl(b,F),onMouseEnter:Dl(p,q),onMouseLeave:Dl(C,F),onTouchStart:Dl(T,q)}]:[!1,O,{}]}function Dl(s,r){return f=>{s&&s(f),f.defaultPrevented||r(f)}}function Uy({page:s,...r}){let{router:f}=km(),u=j.useMemo(()=>dm(f.routes,s,f.basename),[f.routes,s,f.basename]);return u?j.createElement(My,{page:s,matches:u,...r}):null}function Ny(s){let{manifest:r,routeModules:f}=zm(),[u,m]=j.useState([]);return j.useEffect(()=>{let h=!1;return Ay(s,r,f).then(w=>{h||m(w)}),()=>{h=!0}},[s,r,f]),u}function My({page:s,matches:r,...f}){let u=Mn(),{future:m,manifest:h,routeModules:w}=zm(),{basename:k}=km(),{loaderData:b,matches:p}=ky(),C=j.useMemo(()=>cm(s,r,p,h,u,"data"),[s,r,p,h,u]),T=j.useMemo(()=>cm(s,r,p,h,u,"assets"),[s,r,p,h,u]),O=j.useMemo(()=>{if(s===u.pathname+u.search+u.hash)return[];let X=new Set,Y=!1;if(r.forEach(H=>{let K=h.routes[H.route.id];!K||!K.hasLoader||(!C.some(we=>we.route.id===H.route.id)&&H.route.id in b&&w[H.route.id]?.shouldRevalidate||K.hasClientLoader?Y=!0:X.add(H.route.id))}),X.size===0)return[];let Z=wy(s,k,m.unstable_trailingSlashAwareDataRequests,"data");return Y&&X.size>0&&Z.searchParams.set("_routes",r.filter(H=>X.has(H.route.id)).map(H=>H.route.id).join(",")),[Z.pathname+Z.search]},[k,m.unstable_trailingSlashAwareDataRequests,b,u,h,C,r,s,w]),q=j.useMemo(()=>Ey(T,h),[T,h]),F=Ny(T);return j.createElement(j.Fragment,null,O.map(X=>j.createElement("link",{key:X,rel:"prefetch",as:"fetch",href:X,...f})),q.map(X=>j.createElement("link",{key:X,rel:"modulepreload",href:X,...f})),F.map(({key:X,link:Y})=>j.createElement("link",{key:X,nonce:f.nonce,...Y,crossOrigin:Y.crossOrigin??f.crossOrigin})))}function Cy(...s){return r=>{s.forEach(f=>{typeof f=="function"?f(r):f!=null&&(f.current=r)})}}var Dy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Dy&&(window.__reactRouterVersion="7.13.0")}catch{}function Ly({basename:s,children:r,unstable_useTransitions:f,window:u}){let m=j.useRef();m.current==null&&(m.current=dg({window:u,v5Compat:!0}));let h=m.current,[w,k]=j.useState({action:h.action,location:h.location}),b=j.useCallback(p=>{f===!1?k(p):j.startTransition(()=>k(p))},[f]);return j.useLayoutEffect(()=>h.listen(b),[h,b]),j.createElement(ry,{basename:s,children:r,location:w.location,navigationType:w.action,navigator:h,unstable_useTransitions:f})}var Um=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,In=j.forwardRef(function({onClick:r,discover:f="render",prefetch:u="none",relative:m,reloadDocument:h,replace:w,state:k,target:b,to:p,preventScrollReset:C,viewTransition:T,unstable_defaultShouldRevalidate:O,...q},F){let{basename:X,unstable_useTransitions:Y}=j.useContext(jt),Z=typeof p=="string"&&Um.test(p),H=vm(p,X);p=H.to;let K=Vg(p,{relative:m}),[we,me,Ee]=zy(u,q),J=By(p,{replace:w,state:k,target:b,preventScrollReset:C,relative:m,viewTransition:T,unstable_defaultShouldRevalidate:O,unstable_useTransitions:Y});function je(Fe){r&&r(Fe),Fe.defaultPrevented||J(Fe)}let Ue=j.createElement("a",{...q,...Ee,href:H.absoluteURL||K,onClick:H.isExternal||h?r:je,ref:Cy(F,me),target:b,"data-discover":!Z&&f==="render"?"true":void 0});return we&&!Z?j.createElement(j.Fragment,null,Ue,j.createElement(Uy,{page:K})):Ue});In.displayName="Link";var Oy=j.forwardRef(function({"aria-current":r="page",caseSensitive:f=!1,className:u="",end:m=!1,style:h,to:w,viewTransition:k,children:b,...p},C){let T=Hl(w,{relative:p.relative}),O=Mn(),q=j.useContext(uo),{navigator:F,basename:X}=j.useContext(jt),Y=q!=null&&Xy(T)&&k===!0,Z=F.encodeLocation?F.encodeLocation(T).pathname:T.pathname,H=O.pathname,K=q&&q.navigation&&q.navigation.location?q.navigation.location.pathname:null;f||(H=H.toLowerCase(),K=K?K.toLowerCase():null,Z=Z.toLowerCase()),K&&X&&(K=ln(K,X)||K);const we=Z!=="/"&&Z.endsWith("/")?Z.length-1:Z.length;let me=H===Z||!m&&H.startsWith(Z)&&H.charAt(we)==="/",Ee=K!=null&&(K===Z||!m&&K.startsWith(Z)&&K.charAt(Z.length)==="/"),J={isActive:me,isPending:Ee,isTransitioning:Y},je=me?r:void 0,Ue;typeof u=="function"?Ue=u(J):Ue=[u,me?"active":null,Ee?"pending":null,Y?"transitioning":null].filter(Boolean).join(" ");let Fe=typeof h=="function"?h(J):h;return j.createElement(In,{...p,"aria-current":je,className:Ue,ref:C,style:Fe,to:w,viewTransition:k},typeof b=="function"?b(J):b)});Oy.displayName="NavLink";var _y=j.forwardRef(({discover:s="render",fetcherKey:r,navigate:f,reloadDocument:u,replace:m,state:h,method:w=io,action:k,onSubmit:b,relative:p,preventScrollReset:C,viewTransition:T,unstable_defaultShouldRevalidate:O,...q},F)=>{let{unstable_useTransitions:X}=j.useContext(jt),Y=Yy(),Z=Qy(k,{relative:p}),H=w.toLowerCase()==="get"?"get":"post",K=typeof k=="string"&&Um.test(k),we=me=>{if(b&&b(me),me.defaultPrevented)return;me.preventDefault();let Ee=me.nativeEvent.submitter,J=Ee?.getAttribute("formmethod")||w,je=()=>Y(Ee||me.currentTarget,{fetcherKey:r,method:J,navigate:f,replace:m,state:h,relative:p,preventScrollReset:C,viewTransition:T,unstable_defaultShouldRevalidate:O});X&&f!==!1?j.startTransition(()=>je()):je()};return j.createElement("form",{ref:F,method:H,action:Z,onSubmit:u?b:we,...q,"data-discover":!K&&s==="render"?"true":void 0})});_y.displayName="Form";function Hy(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Nm(s){let r=j.useContext(Ha);return Te(r,Hy(s)),r}function By(s,{target:r,replace:f,state:u,preventScrollReset:m,relative:h,viewTransition:w,unstable_defaultShouldRevalidate:k,unstable_useTransitions:b}={}){let p=Em(),C=Mn(),T=Hl(s,{relative:h});return j.useCallback(O=>{if(gy(O,r)){O.preventDefault();let q=f!==void 0?f:Ll(C)===Ll(T),F=()=>p(s,{replace:q,state:u,preventScrollReset:m,relative:h,viewTransition:w,unstable_defaultShouldRevalidate:k});b?j.startTransition(()=>F()):F()}},[C,p,T,f,u,r,s,m,h,w,k,b])}var qy=0,Gy=()=>`__${String(++qy)}__`;function Yy(){let{router:s}=Nm("useSubmit"),{basename:r}=j.useContext(jt),f=iy(),u=s.fetch,m=s.navigate;return j.useCallback(async(h,w={})=>{let{action:k,method:b,encType:p,formData:C,body:T}=by(h,r);if(w.navigate===!1){let O=w.fetcherKey||Gy();await u(O,f,w.action||k,{unstable_defaultShouldRevalidate:w.unstable_defaultShouldRevalidate,preventScrollReset:w.preventScrollReset,formData:C,body:T,formMethod:w.method||b,formEncType:w.encType||p,flushSync:w.flushSync})}else await m(w.action||k,{unstable_defaultShouldRevalidate:w.unstable_defaultShouldRevalidate,preventScrollReset:w.preventScrollReset,formData:C,body:T,formMethod:w.method||b,formEncType:w.encType||p,replace:w.replace,state:w.state,fromRouteId:f,flushSync:w.flushSync,viewTransition:w.viewTransition})},[u,m,r,f])}function Qy(s,{relative:r}={}){let{basename:f}=j.useContext(jt),u=j.useContext(_t);Te(u,"useFormAction must be used inside a RouteContext");let[m]=u.matches.slice(-1),h={...Hl(s||".",{relative:r})},w=Mn();if(s==null){h.search=w.search;let k=new URLSearchParams(h.search),b=k.getAll("index");if(b.some(C=>C==="")){k.delete("index"),b.filter(T=>T).forEach(T=>k.append("index",T));let C=k.toString();h.search=C?`?${C}`:""}}return(!s||s===".")&&m.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),f!=="/"&&(h.pathname=h.pathname==="/"?f:an([f,h.pathname])),Ll(h)}function Xy(s,{relative:r}={}){let f=j.useContext(wm);Te(f!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Nm("useViewTransitionState"),m=Hl(s,{relative:r});if(!f.isTransitioning)return!1;let h=ln(f.currentLocation.pathname,u)||f.currentLocation.pathname,w=ln(f.nextLocation.pathname,u)||f.nextLocation.pathname;return so(m.pathname,w)!=null||so(m.pathname,h)!=null}const Zy=()=>{const s=j.useRef(null),r=Mn();return j.useEffect(()=>{s.current&&(s.current.scrollTop=s.current.scrollHeight)},[r.pathname]),v.jsx("div",{className:"min-h-screen bg-terminal-bg text-terminal-text font-mono p-4 md:p-8 flex flex-col",children:v.jsxs("div",{className:"max-w-4xl mx-auto w-full border border-terminal-dim/30 bg-black/50 shadow-2xl rounded-lg overflow-hidden flex flex-col flex-grow h-[85vh]",children:[v.jsxs("div",{className:"bg-terminal-dim/10 p-2 flex items-center justify-between border-b border-terminal-dim/30",children:[v.jsxs("div",{className:"flex gap-2",children:[v.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500/50"}),v.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-500/50"}),v.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500/50"})]}),v.jsx("div",{className:"text-xs text-terminal-dim",children:"dara@portfolio: ~"}),v.jsx("div",{className:"w-10"})]}),v.jsx("div",{ref:s,className:"flex-grow overflow-y-auto p-4 md:p-6 space-y-4 custom-scrollbar",children:v.jsx(cy,{})}),v.jsxs("div",{className:"bg-terminal-dim/10 p-2 text-xs text-terminal-dim border-t border-terminal-dim/30 flex justify-between",children:[v.jsx("span",{children:"MODE: INTERACTIVE"}),v.jsx("span",{children:"TYPE 1-9 TO NAVIGATE"})]})]})})},rm=({text:s,speed:r=30,className:f="",onComplete:u})=>{const[m,h]=j.useState(""),[w,k]=j.useState(0);return j.useEffect(()=>{if(w<s.length){const b=setTimeout(()=>{h(p=>p+s[w]),k(p=>p+1)},r);return()=>clearTimeout(b)}else u&&u()},[w,s,r,u]),v.jsx("span",{className:f,children:m})},Vy="/assets/profile-C9-833Qf.png",Ky=()=>{const s=Em(),[r,f]=j.useState(!1),[u,m]=j.useState(!1),h=[{key:"1",label:"About Me",path:"/about"},{key:"2",label:"Skills & Technologies",path:"/skills"},{key:"3",label:"Experience & Projects",path:"/experience"},{key:"4",label:"Useful Sites",path:"/useful-sites"},{key:"5",label:"Contact & Social Links",path:"/contact"}];return j.useEffect(()=>{const w=k=>{const b=h.find(p=>p.key===k.key);b&&s(b.path)};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[s]),v.jsxs("div",{className:"space-y-6",children:[v.jsx("div",{className:"mb-8 flex justify-center",children:v.jsxs("div",{className:"relative w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-terminal-cyan overflow-hidden group cursor-pointer",children:[v.jsx("img",{src:Vy,alt:"Janet 'Dara' Jeffus",className:"w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"}),v.jsx("div",{className:"absolute inset-0 bg-terminal-cyan mix-blend-color opacity-60 transition-opacity duration-500 group-hover:opacity-0"})]})}),v.jsxs("div",{className:"space-y-2",children:[v.jsx("h1",{className:"text-terminal-text font-bold mb-1",children:v.jsx(rm,{text:"Janet 'Dara' Jeffus",speed:50,onComplete:()=>f(!0)})}),r&&v.jsx("p",{className:"text-terminal-text",children:v.jsx(rm,{text:"CEO & Software Engineer | 20+ Years Experience",speed:30,onComplete:()=>m(!0)})})]}),u&&v.jsxs("div",{className:"mt-2 space-y-1",children:[v.jsx("p",{className:"text-terminal-yellow mb-2",children:"Select an option:"}),v.jsx("div",{className:"grid gap-1",children:h.map(w=>v.jsxs("div",{onClick:()=>s(w.path),className:"group flex items-center cursor-pointer hover:bg-terminal-dim/20 p-1 rounded transition-colors",children:[v.jsxs("span",{className:"text-terminal-magenta font-bold mr-4",children:["[",w.key,"]"]}),v.jsx("span",{className:"text-terminal-text group-hover:text-terminal-cyan transition-colors",children:w.label})]},w.key))})]}),u&&v.jsxs("div",{className:"mt-4 flex items-center gap-2 text-terminal-dim animate-pulse",children:[v.jsx("span",{children:">"}),v.jsx("span",{className:"w-2 h-4 bg-terminal-cyan block animate-blink"})]})]})},Jy=()=>v.jsxs("div",{className:"space-y-6 max-w-2xl animate-fade-in",children:[v.jsxs("div",{className:"border-b border-terminal-dim/30 pb-4 mb-6",children:[v.jsx("h1",{className:"text-2xl text-terminal-magenta font-bold mb-2",children:"About Me"}),v.jsx("div",{className:"text-terminal-dim text-sm",children:"-- bio --verbose"})]}),v.jsxs("div",{className:"space-y-4 text-terminal-text leading-relaxed",children:[v.jsxs("p",{children:["I'm ",v.jsx("span",{className:"text-terminal-cyan font-bold",children:'Janet "Dara" Jeffus'}),", a software engineer and technology leader with over ",v.jsx("span",{className:"text-terminal-yellow",children:"20 years of experience"})," building teams, products, and companies."]}),v.jsxs("p",{children:["My career spans from low-level systems programming to executive leadership, always maintaining a hands-on technical approach. I believe in the ",v.jsx("span",{className:"text-terminal-green",children:"Unix philosophy"}),", open source collaboration, and building elegant solutions to complex problems."]}),v.jsx("p",{children:"I'm passionate about mentoring engineers, building inclusive technical cultures, and pushing the boundaries of what's possible with code."}),v.jsxs("div",{className:"mt-8 p-4 border border-terminal-dim/30 bg-terminal-dim/5 rounded",children:[v.jsx("h3",{className:"text-terminal-yellow mb-2 font-bold",children:"Character Sheet"}),v.jsxs("ul",{className:"grid grid-cols-1 md:grid-cols-2 gap-2 text-sm",children:[v.jsxs("li",{children:[v.jsx("span",{className:"text-terminal-dim",children:"Class:"})," Technologist / Hacker"]}),v.jsxs("li",{children:[v.jsx("span",{className:"text-terminal-dim",children:"Level:"})," 20+ (Veteran)"]}),v.jsxs("li",{children:[v.jsx("span",{className:"text-terminal-dim",children:"Alignment:"})," Chaotic Good"]}),v.jsxs("li",{children:[v.jsx("span",{className:"text-terminal-dim",children:"Specialty:"})," Systems & Leadership"]}),v.jsxs("li",{children:[v.jsx("span",{className:"text-terminal-dim",children:"Location:"})," /dev/world"]})]})]})]}),v.jsx("div",{className:"pt-8",children:v.jsx(In,{to:"/",className:"text-terminal-dim hover:text-terminal-cyan transition-colors",children:"< Back to Menu"})})]}),lo={languages:["Ruby","JavaScript","TypeScript","Node.js","Flutter","Dart","PHP"],frameworks:["Ruby on Rails","React","Electron","Express","Heroku","AWS"],leadership:["Team Management","Negotiation","Strategic Leadership","Mentorship","Software Design","System Architecture"],other:["DevOps","Linux","Video Production","Learning Systems","OAuth","Big Data","Legacy Systems"]},Wy=()=>v.jsxs("div",{className:"space-y-8 animate-fade-in",children:[v.jsxs("div",{className:"border-b border-terminal-dim/30 pb-4",children:[v.jsx("h1",{className:"text-2xl text-terminal-cyan font-bold mb-2",children:"Skills & Technologies"}),v.jsx("div",{className:"text-terminal-dim text-sm",children:"-- list --all"})]}),v.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[v.jsxs("div",{className:"space-y-3",children:[v.jsx("h3",{className:"text-terminal-magenta font-bold border-b border-terminal-dim/20 pb-1 inline-block",children:"PROGRAMMING LANGUAGES"}),v.jsx("ul",{className:"space-y-1",children:lo.languages.map((s,r)=>v.jsxs("li",{className:"flex items-center text-sm md:text-base",children:[v.jsx("span",{className:"text-terminal-green mr-2",children:"$"}),v.jsx("span",{className:"text-terminal-text hover:text-terminal-yellow transition-colors cursor-default",children:s})]},r))})]}),v.jsxs("div",{className:"space-y-3",children:[v.jsx("h3",{className:"text-terminal-magenta font-bold border-b border-terminal-dim/20 pb-1 inline-block",children:"FRAMEWORKS & INFRASTRUCTURE"}),v.jsx("ul",{className:"space-y-1",children:lo.frameworks.map((s,r)=>v.jsxs("li",{className:"flex items-center text-sm md:text-base",children:[v.jsx("span",{className:"text-terminal-green mr-2",children:"$"}),v.jsx("span",{className:"text-terminal-text hover:text-terminal-yellow transition-colors cursor-default",children:s})]},r))})]}),v.jsxs("div",{className:"space-y-3",children:[v.jsx("h3",{className:"text-terminal-magenta font-bold border-b border-terminal-dim/20 pb-1 inline-block",children:"LEADERSHIP & MANAGEMENT"}),v.jsx("ul",{className:"space-y-1",children:lo.leadership.map((s,r)=>v.jsxs("li",{className:"flex items-center text-sm md:text-base",children:[v.jsx("span",{className:"text-terminal-green mr-2",children:"$"}),v.jsx("span",{className:"text-terminal-text hover:text-terminal-yellow transition-colors cursor-default",children:s})]},r))})]}),v.jsxs("div",{className:"space-y-3",children:[v.jsx("h3",{className:"text-terminal-magenta font-bold border-b border-terminal-dim/20 pb-1 inline-block",children:"SPECIALIZATIONS & OTHER"}),v.jsx("ul",{className:"space-y-1",children:lo.other.map((s,r)=>v.jsxs("li",{className:"flex items-center text-sm md:text-base",children:[v.jsx("span",{className:"text-terminal-green mr-2",children:"$"}),v.jsx("span",{className:"text-terminal-text hover:text-terminal-yellow transition-colors cursor-default",children:s})]},r))})]})]}),v.jsx("div",{className:"pt-8",children:v.jsx(In,{to:"/",className:"text-terminal-dim hover:text-terminal-cyan transition-colors",children:"< Back to Menu"})})]}),Fy=[{role:"Lead Software Engineer",company:"Cengage Group",period:"Oct 2023 - Present",description:"Leading the project for updating a line of educational books, videos and meta data collection for an extensive modernization project. Created 7,256 figures, categorized, identified and extracted from a book series. Hired contractors, conducting interviews and hiring talent. Lead the project creating custom software in Node/Electron for categorization and annotation from start to finish.",technologies:["Node.js","Electron","Ruby on Rails","Video Production","Software Design"]},{role:"Senior Software Engineer",company:"Realquantum",period:"Jul 2022 - Jul 2023",description:"Drove product development, authentication and geospatial (GIS) integration for a commercial real estate appraisal platform. Cultivated high-performing teams by implementing pair programming, robust testing, and a product-focused workflow.",technologies:["Node.js","TypeScript","Auth0","AWS","Ruby on Rails","DevOps"]},{role:"Senior Software Engineer",company:"Bright Funds",period:"Aug 2021 - Jul 2022",description:"Added 23 languages to the platform with tooling and translation back-end. Developed a custom solution that rewrote over 30% of the code base and instantly added i18n tokens in all templates and JavaScript.",technologies:["Node.js","TypeScript","Ruby on Rails","Heroku","Team Management"]},{role:"Senior Software Developer",company:"Kicksite",period:"Nov 2017 - Mar 2018",description:"Senior full-stack Ruby on Rails developer working on re-designing and revamping major portions of the software platform.",technologies:["Ruby on Rails","Heroku","OAuth","JavaScript"]},{role:"Chief Technology Officer",company:"Helpkin",period:"Nov 2016 - Oct 2017",description:"Helpkin is the new app for parents to share childcare with people they can trust. Leading the tech team to a beautiful product launch.",technologies:["Node.js","Mobile App Dev","TypeScript","Team Management"]},{role:"Chief Technology Officer",company:"FAPL",period:"Jul 2016 - Nov 2016",description:"Bringing innovation to the fashion industry building a trail blazing social platform for fashion discovery.",technologies:["Node.js","TypeScript","Mobile App Dev"]},{role:"Senior Ruby Developer",company:"Local Lighthouse",period:"Sep 2014 - Mar 2015",description:"Lead the integration and development of a big data scale business directory. Acquired large-scale marketing lead data from diverse sources.",technologies:["JavaScript","Negotiation","Big Data"]},{role:"Chief Technology Officer",company:"Net Versa, LLC",period:"Mar 2012 - Nov 2014",description:"System Architect of a complex suite of products that automated business listings. Lead a team of up to 15 developers in building a multi-platform product base.",technologies:["Team Management","Mobile App Dev","System Architecture"]},{role:"Founder",company:"Tradebitcoin.com",period:"Oct 2009 - Jan 2013",description:"First to market and market leader of online local Bitcoin trading that sounded a clarion call for a local-gap trading solution within the Bitcoin economy.",technologies:["JavaScript","Negotiation","Bitcoin"]},{role:"Chief Technology Officer",company:"4MatchR",period:"Oct 2010 - Jan 2011",description:"Team leader and system architect for a big data real estate listing aggregator. Combined all localized real estate listings in a user friendly interface.",technologies:["Team Management","Big Data","Real Estate"]},{role:"Chief Technology Officer",company:"Learning Online, LLC",period:"Apr 2005 - Nov 2008",description:"Co-founder, architect and senior developer for an online learning platform that was a first to market courseware and curriculum marketplace named Scholar Square.",technologies:["Team Management","Learning Systems","JavaScript"]}],$y=[{name:"Terminal Portfolio",description:"A React-based interactive terminal portfolio website.",link:"#",tech:["React","TypeScript","Tailwind"]},{name:"Legacy Migration Tool",description:"Automated tool for migrating legacy databases to modern cloud infrastructure.",link:"#",tech:["Python","AWS","PostgreSQL"]}],Iy=()=>v.jsxs("div",{className:"space-y-12 animate-fade-in",children:[v.jsxs("div",{className:"border-b border-terminal-dim/30 pb-4",children:[v.jsx("h1",{className:"text-2xl text-terminal-yellow font-bold mb-2",children:"Experience & Projects"}),v.jsx("div",{className:"text-terminal-dim text-sm",children:"-- timeline --detailed"})]}),v.jsxs("div",{className:"space-y-8",children:[v.jsx("h2",{className:"text-xl text-terminal-cyan font-bold border-l-4 border-terminal-magenta pl-4",children:"Professional Experience"}),v.jsx("div",{className:"relative border-l border-terminal-dim/30 ml-2 pl-8 space-y-10",children:Fy.map((s,r)=>v.jsxs("div",{className:"relative",children:[v.jsx("div",{className:"absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-terminal-bg border-2 border-terminal-cyan"}),v.jsxs("div",{className:"flex flex-col md:flex-row md:items-baseline justify-between mb-2",children:[v.jsx("h3",{className:"text-lg font-bold text-terminal-text",children:s.role}),v.jsx("span",{className:"text-terminal-dim font-mono text-sm whitespace-nowrap ml-2",children:s.period})]}),v.jsx("div",{className:"text-terminal-magenta mb-2",children:s.company}),v.jsx("p",{className:"text-terminal-dim mb-3 max-w-2xl",children:s.description}),v.jsx("div",{className:"flex flex-wrap gap-2",children:s.technologies.map((f,u)=>v.jsx("span",{className:"text-xs border border-terminal-dim/50 px-2 py-0.5 rounded text-terminal-dim",children:f},u))})]},r))})]}),v.jsxs("div",{className:"space-y-8",children:[v.jsx("h2",{className:"text-xl text-terminal-green font-bold border-l-4 border-terminal-yellow pl-4",children:"Selected Projects"}),v.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:$y.map((s,r)=>v.jsxs("div",{className:"border border-terminal-dim/30 p-4 hover:border-terminal-cyan transition-colors group",children:[v.jsx("h3",{className:"text-lg font-bold text-terminal-text mb-2 group-hover:text-terminal-cyan transition-colors",children:s.name}),v.jsx("p",{className:"text-terminal-dim text-sm mb-4 h-10",children:s.description}),v.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:s.tech.map((f,u)=>v.jsxs("span",{className:"text-xs text-terminal-magenta",children:["#",f]},u))}),v.jsx("a",{href:s.link,className:"text-sm text-terminal-text underline decoration-terminal-dim hover:decoration-terminal-cyan",children:"View Project ->"})]},r))})]}),v.jsx("div",{className:"pt-8",children:v.jsx(In,{to:"/",className:"text-terminal-dim hover:text-terminal-cyan transition-colors",children:"< Back to Menu"})})]});const Mm=(...s)=>s.filter((r,f,u)=>!!r&&r.trim()!==""&&u.indexOf(r)===f).join(" ").trim();const Py=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const ev=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,f,u)=>u?u.toUpperCase():f.toLowerCase());const fm=s=>{const r=ev(s);return r.charAt(0).toUpperCase()+r.slice(1)};var tv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const nv=s=>{for(const r in s)if(r.startsWith("aria-")||r==="role"||r==="title")return!0;return!1};const av=j.forwardRef(({color:s="currentColor",size:r=24,strokeWidth:f=2,absoluteStrokeWidth:u,className:m="",children:h,iconNode:w,...k},b)=>j.createElement("svg",{ref:b,...tv,width:r,height:r,stroke:s,strokeWidth:u?Number(f)*24/Number(r):f,className:Mm("lucide",m),...!h&&!nv(k)&&{"aria-hidden":"true"},...k},[...w.map(([p,C])=>j.createElement(p,C)),...Array.isArray(h)?h:[h]]));const Ht=(s,r)=>{const f=j.forwardRef(({className:u,...m},h)=>j.createElement(av,{ref:h,iconNode:r,className:Mm(`lucide-${Py(fm(s))}`,`lucide-${s}`,u),...m}));return f.displayName=fm(s),f};const lv=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],iv=Ht("external-link",lv);const ov=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],sv=Ht("github",ov);const uv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],cv=Ht("globe",uv);const rv=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],fv=Ht("hash",rv);const dv=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],mv=Ht("instagram",dv);const hv=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],pv=Ht("linkedin",hv);const gv=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],yv=Ht("mail",gv);const vv=[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]],bv=Ht("mouse-pointer-2",vv);const wv=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Sv=Ht("search",wv);const xv=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Av=Ht("video",xv),Ev=()=>{const s=[{label:"Email",value:"darajeffus@gmail.com",href:"mailto:darajeffus@gmail.com",icon:yv},{label:"LinkedIn",value:"janet-jeffus-b0709720",href:"https://www.linkedin.com/in/janet-jeffus-b0709720/",icon:pv},{label:"GitHub",value:"aprajnaparamita",href:"https://github.com/aprajnaparamita",icon:sv},{label:"TikTok",value:"@darabuilds",href:"https://www.tiktok.com/@darabuilds",icon:Av},{label:"Instagram",value:"@darabuilds",href:"https://www.instagram.com/darabuilds",icon:mv}];return v.jsxs("div",{className:"space-y-8 animate-fade-in max-w-2xl",children:[v.jsxs("div",{className:"border-b border-terminal-dim/30 pb-4 mb-6",children:[v.jsx("h1",{className:"text-2xl text-terminal-green font-bold mb-2",children:"Contact & Social Links"}),v.jsx("div",{className:"text-terminal-dim text-sm",children:"-- ping --all"})]}),v.jsx("p",{className:"text-terminal-text mb-8",children:"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions."}),v.jsx("div",{className:"space-y-4",children:s.map((r,f)=>v.jsxs("a",{href:r.href,target:"_blank",rel:"noopener noreferrer",className:"flex items-center p-4 border border-terminal-dim/20 hover:bg-terminal-dim/10 hover:border-terminal-cyan transition-all group",children:[v.jsx(r.icon,{className:"w-5 h-5 text-terminal-magenta mr-4 group-hover:text-terminal-cyan transition-colors"}),v.jsxs("div",{className:"flex-grow",children:[v.jsx("span",{className:"text-terminal-dim text-sm block",children:r.label}),v.jsx("span",{className:"text-terminal-text font-mono group-hover:text-terminal-yellow transition-colors",children:r.value})]}),v.jsx("span",{className:"text-terminal-dim opacity-0 group-hover:opacity-100 transition-opacity text-xs",children:">"})]},f))}),v.jsx("div",{className:"pt-8",children:v.jsx(In,{to:"/",className:"text-terminal-dim hover:text-terminal-cyan transition-colors",children:"< Back to Menu"})})]})},Rv=`# Website Index

Total websites: 168

## Table of Contents

- [AI Tools](#ai-tools-30-sites) (30)
- [Learning](#learning-24-sites) (24)
- [Productivity](#productivity-14-sites) (14)
- [Design](#design-12-sites) (12)
- [Entertainment](#entertainment-10-sites) (10)
- [Food & Cooking](#food-cooking-4-sites) (4)
- [Fun](#fun-4-sites) (4)
- [Shopping](#shopping-3-sites) (3)
- [Education](#education-3-sites) (3)
- [Research](#research-2-sites) (2)
- [Travel](#travel-2-sites) (2)
- [Automotive/DIY](#automotivediy-2-sites) (2)
- [Image Editing](#image-editing-2-sites) (2)
- [AI Tools/Productivity](#ai-toolsproductivity-2-sites) (2)
- [Entertainment/Relaxation](#entertainmentrelaxation-2-sites) (2)
- [Entertainment/Productivity](#entertainmentproductivity-1-sites) (1)
- [Travel/Utilities](#travelutilities-1-sites) (1)
- [Gaming/Entertainment](#gamingentertainment-1-sites) (1)
- [Media Tools](#media-tools-1-sites) (1)
- [Gaming/Education](#gamingeducation-1-sites) (1)
- [Productivity/Tools](#productivitytools-1-sites) (1)
- [Music](#music-1-sites) (1)
- [Books](#books-1-sites) (1)
- [AI Tools/Marketing](#ai-toolsmarketing-1-sites) (1)
- [Design/Fashion](#designfashion-1-sites) (1)
- [Fun/Entertainment](#funentertainment-1-sites) (1)
- [Education/Scholarship](#educationscholarship-1-sites) (1)
- [Crafts/Hobbies](#craftshobbies-1-sites) (1)
- [Education/Travel](#educationtravel-1-sites) (1)
- [Mental Health/Wellness](#mental-healthwellness-1-sites) (1)
- [Finance/Research](#financeresearch-1-sites) (1)
- [Food/Reference](#foodreference-1-sites) (1)
- [Food/Travel](#foodtravel-1-sites) (1)
- [E-commerce](#e-commerce-1-sites) (1)
- [Education/College Resources](#educationcollege-resources-1-sites) (1)
- [Gaming](#gaming-1-sites) (1)
- [Developer Tools](#developer-tools-1-sites) (1)
- [Shopping/Deals](#shoppingdeals-1-sites) (1)
- [Food/Cooking](#foodcooking-1-sites) (1)
- [Learning/Productivity](#learningproductivity-1-sites) (1)
- [Mapping/Geography](#mappinggeography-1-sites) (1)
- [AI Tools/Design](#ai-toolsdesign-1-sites) (1)
- [Shopping & Deals](#shopping-deals-1-sites) (1)
- [Art & Culture](#art-culture-1-sites) (1)
- [Job Search](#job-search-1-sites) (1)
- [Art & Crafts](#art-crafts-1-sites) (1)
- [Career & Productivity](#career-productivity-1-sites) (1)
- [Relaxation/ASMR](#relaxationasmr-1-sites) (1)
- [Entertainment/Learning](#entertainmentlearning-1-sites) (1)
- [Fitness](#fitness-1-sites) (1)
- [Finance](#finance-1-sites) (1)
- [Development](#development-1-sites) (1)
- [Search/Download](#searchdownload-1-sites) (1)
- [Home Repair](#home-repair-1-sites) (1)
- [News/Research](#newsresearch-1-sites) (1)
- [Shopping/Entertainment](#shoppingentertainment-1-sites) (1)
- [Health & Nutrition](#health-nutrition-1-sites) (1)
- [Writing & Productivity](#writing-productivity-1-sites) (1)
- [Content Creation](#content-creation-1-sites) (1)
- [Education/History](#educationhistory-1-sites) (1)
- [History/Research](#historyresearch-1-sites) (1)
- [Research/Education](#researcheducation-1-sites) (1)
- [Utilities](#utilities-1-sites) (1)
- [Home & Lifestyle](#home-lifestyle-1-sites) (1)
- [Education/DIY](#educationdiy-1-sites) (1)
- [Design/Fun](#designfun-1-sites) (1)
- [Education/Research](#educationresearch-1-sites) (1)

---

## AI Tools (30 sites)

### [MusicGPT](https://musicgpt.com)
**URL:** [musicgpt.com](https://musicgpt.com)

An AI-powered music generation platform that creates custom songs, instrumentals, and sound effects from text prompts. Users can generate unique, copyright-free music with lyrics and vocals in various genres.

*Source: [#MusicGPT #tech #ai #fyp #goviral    ](https://www.tiktok.com/@yejinson124/video/7563713376585567519) (33,700 views)*

---

### [Runable](https://runable.ai)
**URL:** [runable.ai](https://runable.ai)

A design-driven general AI agent that can create complete functional websites, documents, reports, podcasts, and other content from scratch using simple text prompts. It serves as an all-in-one AI platform that can replace multiple apps by executing entire tasks from start to finish.

*Source: [#Runable #website #fyp #goviral #ai](https://www.tiktok.com/@yejinson124/video/7593285195847961887) (12,900 views)*

---

### [Clever AI Humanizer](https://aihumanizer.net)
**URL:** [aihumanizer.net](https://aihumanizer.net)

A free AI text humanizer that rewrites AI-generated content to sound more natural and human-like, helping it bypass AI detection tools. Offers 120,000 words per month for free with no ads or paywalls.

*Source: [Best 100% Free Ai Humanizer - Clever Ai Humanizer #aihumanizer #human...](https://www.tiktok.com/@yejinson124/video/7561862556839677214) (122,700 views)*

---

### [Emergent](https://app.emergent.sh)
**URL:** [app.emergent.sh](https://app.emergent.sh)

An agentic AI build platform that generates, tests, and debugs code to create fully functional apps and websites through simple conversations. Unlike traditional AI builders, it automatically tests and debugs code to ensure everything works without manual fixes.

*Source: [#Emergent #Website #fyp #tech #ai   https://app.emergent.sh/?via=yeji...](https://www.tiktok.com/@yejinson124/video/7576396825993743647) (5,989 views)*

---

### [Replit](https://replit.com)
**URL:** [replit.com](https://replit.com)

An AI app builder and coding platform that can generate code but requires manual testing and debugging. Used as a comparison tool in the video to demonstrate Emergent's superior automated testing capabilities.

*Source: [#Emergent #Website #fyp #tech #ai   https://app.emergent.sh/?via=yeji...](https://www.tiktok.com/@yejinson124/video/7576396825993743647) (5,989 views)*

---

### [DeepSite](https://deepsite.com)
**URL:** [deepsite.com](https://deepsite.com)

An AI-powered website builder that generates complete webpages with code in seconds based on text prompts. Users can access, copy, and customize the full source code of generated websites.

*Source: [#college #website #fyp #goviral #trending ](https://www.tiktok.com/@yejinson124/video/7558271853291130142) (169,200 views)*

---

### [Recraft AI](https://recraft.ai)
**URL:** [recraft.ai](https://recraft.ai)

An AI image generator that creates custom images based on text prompts you type. Offers a free trial with two image options per generation.

*Source: [#college #websites #websitesyouneed #fyp #learning ](https://www.tiktok.com/@yejinson124/video/7550883016499875102) (67,400 views)*

---

### [Rocket.new](https://rocket.new)
**URL:** [rocket.new](https://rocket.new)

An AI-powered platform that builds production-ready websites, games, apps, and internal tools from text prompts. It generates both the complete website and provides the source code within minutes.

*Source: [#college #websites #websitesyouneed #fyp #goviral ](https://www.tiktok.com/@yejinson124/video/7552376025200528670) (18,200 views)*

---

### [Runable](https://runable.com)
**URL:** [runable.com](https://runable.com)

A design-driven general AI agent platform that can create complete websites, presentations, documents, and other digital content from simple text prompts. It automatically generates mobile-responsive designs and handles end-to-end project creation without needing multiple apps.

*Source: [#runable #runableai #website #fyp #goviral Enjoy an exclusive 70% off...](https://www.tiktok.com/@yejinson124/video/7579741458266066207) (49,300 views)*

---

### [Base44](https://base44.com)
**URL:** [base44.com](https://base44.com)

A no-code AI platform that allows users to build fully functional apps in minutes by simply describing their idea in natural language. It automatically generates complete applications with databases, UI components, and features.

*Source: [#Base44 #goviral #website #ai #fyp ](https://www.tiktok.com/@yejinson124/video/7597166983385287967) (7,867 views)*

---

### [TinyFish Web Agent](https://tinyfish.io)
**URL:** [tinyfish.io](https://tinyfish.io)

An AI web agent platform that allows solo builders and small teams to run multiple AI agents in parallel to automate web tasks like browsing pages, filling forms, comparing prices, and completing multi-step processes at scale.

*Source: [#Tinyfishwebagent #website #fyp #goviral ](https://www.tiktok.com/@yejinson124/video/7603367646813277471) (2,569 views)*

---

### [Mino AI](https://mino.ai)
**URL:** [mino.ai](https://mino.ai)

An AI automation platform that appears to provide web agent infrastructure and automation capabilities (referenced in the detected URLs and OCR text).

*Source: [#Tinyfishwebagent #website #fyp #goviral ](https://www.tiktok.com/@yejinson124/video/7603367646813277471) (2,569 views)*

---

### [Emergent](https://emergent.ai)
**URL:** [emergent.ai](https://emergent.ai)

An AI-powered live coding platform that turns ideas into production-ready applications through conversational prompts. Users can build, test, launch, and scale apps without coding knowledge, with the AI chatting upfront to understand expectations and automatically generating fully functional applications.

*Source: [Check them out on the link here: http://bit.ly/48KtJHl #emergent #eme...](https://www.tiktok.com/@yejinson124/video/7565967419101973790) (10,700 views)*

---

### [ChatGPT](https://chat.openai.com)
**URL:** [chat.openai.com](https://chat.openai.com)

An AI chatbot that can be used to create customized practice problems, explain topics in simpler terms, and assist with studying by working alongside students rather than doing their work for them.

*Source: [#fyp #college #studying #studyingtips #tips](https://www.tiktok.com/@yejinson124/video/7549042483565448478) (16,200 views)*

---

### [Emergent](https://emergentagent.com)
**URL:** [emergentagent.com](https://emergentagent.com)

An AI-powered platform that builds fully functional apps and websites through simple text conversations, featuring autonomous testing and automatic fixing of endpoints and UI errors.

*Source: [#Emergent #Website #tech #fyp #goviral](https://www.tiktok.com/@yejinson124/video/7584251629201788190) (11,500 views)*

---

### [Lovable](https://lovable.dev)
**URL:** [lovable.dev](https://lovable.dev)

A website builder tool that creates functional websites and apps through prompts, compared in the video as an alternative to Emergent.

*Source: [#Emergent #Website #tech #fyp #goviral](https://www.tiktok.com/@yejinson124/video/7584251629201788190) (11,500 views)*

---

### [Emergent](https://emergent.sh)
**URL:** [emergent.sh](https://emergent.sh)

An AI-powered platform that builds, tests, debugs, validates, and deploys fully functional apps and websites through simple conversational prompts. It automatically handles the entire development process from creation to deployment.

*Source: [#Emergent #website #tech #fyp #ai](https://www.tiktok.com/@yejinson124/video/7586676473738710303) (4,326 views)*

---

### [Bolt](https://bolt.new)
**URL:** [bolt.new](https://bolt.new)

An AI website builder that creates web applications from text prompts, though it requires manual debugging and fixing when issues arise. Used as a comparison point in the video.

*Source: [#Emergent #website #tech #fyp #ai](https://www.tiktok.com/@yejinson124/video/7586676473738710303) (4,326 views)*

---

### [Runable](https://runable.site)
**URL:** [runable.site](https://runable.site)

A design-driven general AI agent that can create complete functional websites, documents, presentations, podcasts, videos, and manage entire projects from a single prompt. It replaces multiple apps by executing complex tasks from start to finish including features like e-commerce functionality.

*Source: [#Runable #Website #tech #ai #fyp ](https://www.tiktok.com/@yejinson124/video/7576530613134478623) (11,400 views)*

---

### [YouWare](https://youware.com)
**URL:** [youware.com](https://youware.com)

An AI-powered platform that lets you build apps through conversational text or voice input, with no coding required. Features real-time collaboration across devices, version control, instant publishing, and a creative community for sharing projects.

*Source: [#YouWare #website #fyp #goviral #ai  ](https://www.tiktok.com/@yejinson124/video/7574153230159039775) (15,300 views)*

---

### [Napkin AI](https://napkin.ai)
**URL:** [napkin.ai](https://napkin.ai)

An AI-powered tool that automatically generates text content from prompts and transforms it into clean visual layouts and diagrams. Users can customize colors, ratios, and styles of the generated visuals.

*Source: [#Napkinai #visual #notes #fyp #goviral](https://www.tiktok.com/@yejinson124/video/7562291298850458911) (11,700 views)*

---

### [GenSpark AI](https://genspark.ai)
**URL:** [genspark.ai](https://genspark.ai)

Provides access to free AI tools including an AI developer tool that can generate fully functional websites from simple text prompts in under a minute.

*Source: [#college #websites #websitesyouneed #fyp #goviral ](https://www.tiktok.com/@yejinson124/video/7551178035295276319) (499,900 views)*

---

### [Blink.new](https://blink.new)
**URL:** [blink.new](https://blink.new)

An AI-powered no-code platform that builds complete agentic AI applications, including databases, hosting, and AI models. Users can create full SaaS apps, websites, and mobile apps by chatting with AI, with the system handling design, coding, and execution automatically.

*Source: [#website #fyp #govral #trending #Blink.new  https://blink.new/?via=ye...](https://www.tiktok.com/@yejinson124/video/7600860960928189727) (9,174 views)*

---

### [Venice AI](https://venice.ai)
**URL:** [venice.ai](https://venice.ai)

Converts static images into videos by uploading an image and typing a prompt. Offers various effects and sound options for video generation.

*Source: [#college #website #fyp #goviral #trending](https://www.tiktok.com/@yejinson124/video/7557918813841378590) (10,900 views)*

---

### [Aithor](https://aithor.com)
**URL:** [aithor.com](https://aithor.com)

An AI essay writing tool that generates essays based on prompts with customizable tone and references. Features a verification/rewrite function to humanize content for natural and original-sounding output.

*Source: [#college #website #fyp #goviral #trending](https://www.tiktok.com/@yejinson124/video/7557918813841378590) (10,900 views)*

---

### [Dora](https://dora.run)
**URL:** [dora.run](https://dora.run)

An AI-powered platform that creates 3D websites in seconds from a simple text prompt, offering quick website previews without the need for complex design work.

*Source: [#college #websites #websitesyouneed #fyp #goviral ](https://www.tiktok.com/@yejinson124/video/7553093721068293407) (15,300 views)*

---

### [Predis.ai](https://predis.ai)
**URL:** [predis.ai](https://predis.ai)

An AI-powered content creation platform that generates high-performing ads, social media posts, and UGC-style videos in seconds. Users can create content by entering ideas, product URLs, or uploading images, with automatic scene generation and easy editing capabilities.

*Source: [#Predis.ai #website #fyp #goviral #tech](https://www.tiktok.com/@yejinson124/video/7598820881627942175) (71,500 views)*

---

### [Altima AI Headshot Generator](https://apps.apple.com/app/apple-store/id6746581022)
**URL:** [apps.apple.com/app/apple-store/id6746581022](https://apps.apple.com/app/apple-store/id6746581022)

An iPhone app that generates professional AI headshots from just one photo, offering 10 free daily generations without watermarks. Creates studio-grade photos suitable for LinkedIn, resumes, job applications, and social media profiles.

*Source: [Get a Free AI Professional Headshot in Seconds – No Studio Needed #ai...](https://www.tiktok.com/@yejinson124/video/7580826626179583262) (21,500 views)*

---

### [TestSprite](https://testsprite.com)
**URL:** [testsprite.com](https://testsprite.com)

An AI-powered testing agent that integrates with IDEs like Cursor, Claude, and Windsurf to automatically test, debug, and fix code without requiring manual test writing or testing experience.

*Source: [#TestSprite #Website #fyp #govital #trending](https://www.tiktok.com/@yejinson124/video/7564190098145807646) (4,581 views)*

---

### [APOB.AI](https://app.apob.ai)
**URL:** [app.apob.ai](https://app.apob.ai)

An AI-powered tool that converts static images into videos by simply adding a description, generating animated content in seconds.

*Source: [#college #websites #websitesyouneed #fyp #goviral ](https://www.tiktok.com/@yejinson124/video/7554948680680492318) (355,500 views)*

---

## Learning (24 sites)

### [Classic Literature Typing Practice](https://typing.io or typelit.io)
**URL:** [typing.io or typelit.io](https://typing.io or typelit.io)

A website that helps improve typing skills by letting users practice typing while reading classic literature like Pride and Prejudice, organized by chapters so you can track progress.

*Source: [#college #website #fyp #goviral #trending](https://www.tiktok.com/@yejinson124/video/7559774051149892895) (93,400 views)*

---

### [Brief](https://brief.com)
**URL:** [brief.com](https://brief.com)

A digital library with over 70,000 books that provides plot summaries for every chapter and audio listening options, browsable by category or title.

*Source: [#website #fyp #goviral #trending #tech](https://www.tiktok.com/@yejinson124/video/7600249470269410591) (14,700 views)*

---

### [1A Auto](https://1aauto.com)
**URL:** [1aauto.com](https://1aauto.com)

A website that provides free auto repair video tutorials and written instructions for specific car makes and models. Users can search by vehicle year, make, and model to find repair guides and also purchase auto parts.

*Source: [#college #website #goviral #tech #fyp ](https://www.tiktok.com/@yejinson124/video/7559005539485764894) (26,800 views)*

---

### [WeAllSew](https://weallsew.com)
**URL:** [weallsew.com](https://weallsew.com)

A sewing tutorial website featuring patterns and guides for all skill levels from beginner to advanced, including detailed step-by-step instructions and lists of required tools and materials.

*Source: [#college #website #goviral #tech #fyp ](https://www.tiktok.com/@yejinson124/video/7559005539485764894) (26,800 views)*

---

### [Roadmap.sh](https://roadmap.sh)
**URL:** [roadmap.sh](https://roadmap.sh)

A platform that generates step-by-step learning roadmaps for any career role you want, providing full learning paths with resources to help you get there (e.g., AI and data scientists).

*Source: [#college #website #websitesyouneed #fyp #goviral ](https://www.tiktok.com/@yejinson124/video/7556433105943285023) (58,500 views)*

---

### [Coddy](https://coddy.tech)
**URL:** [coddy.tech](https://coddy.tech)

An interactive coding learning platform that offers structured courses in popular programming languages like Python, HTML, JavaScript, and more. Features real-life challenges, hints, and hands-on practice with a free tier available.

*Source: [#college #website #fyp #goviral #trending ](https://www.tiktok.com/@yejinson124/video/7559421473790643487) (17,700 views)*

---

### [Animagraffs](https://animagraffs.com)
**URL:** [animagraffs.com](https://animagraffs.com)

An educational platform that uses detailed animations to explain how various things work, including cryptocurrency, the human eye, slot machines, and more complex systems.

*Source: [#college #website #fyp #goviral #trending ](https://www.tiktok.com/@yejinson124/video/7558271853291130142) (169,200 views)*

---

### [Shepherd Study](https://shepherd.study)
**URL:** [shepherd.study](https://shepherd.study)

A study guide generator that creates comprehensive study materials for any topic, including summaries, key points, practice problems, and allows Q&A interactions.

*Source: [#college #websites #websitesyouneed #fyp #goviral ](https://www.tiktok.com/@yejinson124/video/7554122304159026462) (30,400 views)*

---

### [p5.js](https://p5.js.org)
**URL:** [p5.js.org](https://p5.js.org)

A learning platform offering hundreds of free programming courses in Python, HTML, JavaScript and other languages, featuring step-by-step breakdowns with visual aids. Includes AI courses, student favorites, and hackathon starter packs.

*Source: [#college #websites #websitesyouneed #fyp #learning ](https://www.tiktok.com/@yejinson124/video/7550883016499875102) (67,400 views)*

---

### [LingoHut](https://lingohut.com)
**URL:** [lingohut.com](https://lingohut.com)

A free language learning platform that provides lessons, vocabulary, definitions, and pronunciation features for learning almost any language including Greek, German, Afrikaans and many others.

*Source: [#college #website #ai #fyp #goviral](https://www.tiktok.com/@yejinson124/video/7558654048182865183) (55,300 views)*

---

### [BioDigital Human](https://human.biodigital.com)
**URL:** [human.biodigital.com](https://human.biodigital.com)

An interactive 3D anatomy website that allows users to explore the human body in detail with animations that help explain complex biological and anatomical concepts.

*Source: [#college #collegetips #websites #fyp #websitesyouneed ](https://www.tiktok.com/@yejinson124/video/7549393527222963486) (66,200 views)*

---

### [MindLuster](https://mindluster.com)
**URL:** [mindluster.com](https://mindluster.com)

Offers over 300,000 free online courses across various topics including programming, business, medical, and more, with video lessons and official certificates upon completion.

*Source: [#college #websites #websitesyouneed #fyp #goviral ](https://www.tiktok.com/@yejinson124/video/7551178035295276319) (499,900 views)*

---

### [DevDocs](https://devdocs.io)
**URL:** [devdocs.io](https://devdocs.io)

A comprehensive documentation platform offering step-by-step guides, cheat sheets, and examples for various coding languages including CSS, HTML, and JavaScript.

*Source: [](https://www.tiktok.com/@yejinson124/video/7599879904431246623) (5,866 views)*

---

### [Loecsen](https://loecsen.com)
**URL:** [loecsen.com](https://loecsen.com)

A free language learning website that offers full courses for multiple languages broken into organized categories, with progress tracking and structured lessons from basics like greetings to more advanced content.

*Source: [#college #fyp #websites #websitesyouneed #goviral ](https://www.tiktok.com/@yejinson124/video/7550451888496332062) (894,000 views)*

---

### [Mathway](https://mathway.com)
**URL:** [mathway.com](https://mathway.com)

A math problem solver that provides detailed step-by-step solutions to equations, claimed to be more accurate than ChatGPT for mathematical problems.

*Source: [#college #website #fyp #goviral #trending](https://www.tiktok.com/@yejinson124/video/7565711238710299935) (24,500 views)*

---

### [Atlas](https://atlas.org)
**URL:** [atlas.org](https://atlas.org)

A comprehensive learning resource hub that aggregates links, guides, and resources for various topics like 3D modeling, providing curated collections of tools and projects all in one place.

*Source: [#college #fyp #websites #websitesyouneed #goviral ](https://www.tiktok.com/@yejinson124/video/7550112527603027231) (1,200,000 views)*

---

### [Globe Engineer Explorer](https://explorer.globe.engineer)
**URL:** [explorer.globe.engineer](https://explorer.globe.engineer)

An educational platform that teaches topics like Python programming through clear visual explanations and organized step-by-step categories. Makes learning technical subjects more accessible through visual aids.

*Source: [#college #website #fup #goviral #trending](https://www.tiktok.com/@yejinson124/video/7564573948113915167) (46,000 views)*

---

### [ChatEDU](https://chatedu.io)
**URL:** [chatedu.io](https://chatedu.io)

An AI-powered study tool that allows students to upload lecture notes, PDFs, or textbooks to automatically generate comprehensive study guides, practice questions, quizzes, and external information organized by sections.

*Source: [#college #websites #websitesyouneed #fyp #goviral ](https://www.tiktok.com/@yejinson124/video/7553439123588123935) (90,800 views)*

---

### [Class Central](https://classcentral.com)
**URL:** [classcentral.com](https://classcentral.com)

A comprehensive platform providing access to thousands of online courses from top universities like Harvard, Stanford, and MIT, as well as major tech companies like Google, Amazon, and Microsoft.

*Source: [#college #websites #websitesyouneed #fyp #goviral ](https://www.tiktok.com/@yejinson124/video/7553093721068293407) (15,300 views)*

---

### [Open Library](https://openlibrary.org)
**URL:** [openlibrary.org](https://openlibrary.org)

A free digital library providing access to thousands of books that can be read online or listened to as audiobooks.

*Source: [#college #websites #websitesyouneed #fyp #goviral ](https://www.tiktok.com/@yejinson124/video/7551970886916541726) (69,900 views)*

---

### [MathPapa](https://mathpapa.com)
**URL:** [mathpapa.com](https://mathpapa.com)

A math problem solver that provides step-by-step solutions for equations when you paste in problems and click calculate.

*Source: [#TestSprite #Website #fyp #govital #trending](https://www.tiktok.com/@yejinson124/video/7564190098145807646) (4,581 views)*

---

### [StudyFetch](https://studyfetch.com)
**URL:** [studyfetch.com](https://studyfetch.com)

An AI-powered study tool that automatically generates detailed notes, summaries, key points, and organized study guides from uploaded files (PDFs, audio, Canvas), and YouTube links. Eliminates the need to manually rewrite notes.

*Source: [#college #websites #websitesyouneed #fyp #goviral](https://www.tiktok.com/@yejinson124/video/7555322472887782687) (14,900 views)*

---

### [Cymath](https://cymath.com)
**URL:** [cymath.com](https://cymath.com)

A math problem solver that breaks down any math problem step-by-step, providing clear solutions with detailed explanations for each step.

*Source: [#college #websites #websitesyouneed #fyp #goviral](https://www.tiktok.com/@yejinson124/video/7555322472887782687) (14,900 views)*

---

### [TypeLit](https://typelit.io)
**URL:** [typelit.io](https://typelit.io)

A typing practice website that helps improve typing skills by having users retype famous literature works like Alice in Wonderland, Frankenstein, and The Great Gatsby. Combines typing practice with reading classic novels.

*Source: [#college #website #fyp #goviral #trending ](https://www.tiktok.com/@yejinson124/video/7557159719920487710) (12,500 views)*

---

## Productivity (14 sites)

### [Site.co](https://site.co)
**URL:** [site.co](https://site.co)

A personal website builder that lets you create a polished personal site in minutes by picking a template, answering guided questions, and getting an instant custom website with your own URL. Perfect for resumes, portfolios, and personal branding.

*Source: [#college #website #websitesyouneed #fyp #goviral ](https://www.tiktok.com/@yejinson124/video/7556433105943285023) (58,500 views)*

---

### [Tomo.ai](https://tomo.ai)
**URL:** [tomo.ai](https://tomo.ai)

An AI-powered accountability companion that sends text reminders, requests photo proof of tasks, and integrates with Google Calendar, Notion, and Gmail to help with studying, homework, trip planning, and YouTube video summaries.

*Source: [#Tomo.ai #website #fyp #goviral #trending](https://www.tiktok.com/@yejinson124/video/7564907336033111326) (26,900 views)*

---

### [ToolFK](https://toolfk.com)
**URL:** [toolfk.com](https://toolfk.com)

A comprehensive collection of online tools including AI video generators, text-to-speech, PDF to image converters, and many other utilities all in one place.

*Source: [#college #website #fyp #goviral #trending ](https://www.tiktok.com/@yejinson124/video/7558271853291130142) (169,200 views)*

---

### [Gamma](https://gamma.app)
**URL:** [gamma.app](https://gamma.app)

An AI presentation maker that creates slide decks in minutes by typing in a topic and adding notes or textbooks. It automatically generates organized slides with titles, bullet points, and customizable content.

*Source: [#college #websites #websitesyouneed #fyp #goviral ](https://www.tiktok.com/@yejinson124/video/7552376025200528670) (18,200 views)*

---

### [In One Place](https://inone.place.so)
**URL:** [inone.place.so](https://inone.place.so)

An all-in-one website offering a collection of free online tools including text tools, YouTube utilities, and web development resources, eliminating the need to switch between multiple tabs.

*Source: [#college #website #fyp #goviral #trending](https://www.tiktok.com/@yejinson124/video/7560860117038632222) (11,600 views)*

---

### [Clever Cleaner: AI CleanUp App](https://apps.apple.com/clever-cleaner)
**URL:** [apps.apple.com/clever-cleaner](https://apps.apple.com/clever-cleaner)

A free iPhone storage management app that helps users delete duplicate photos, organize large files, compress heavy files, and clean up screenshots and live photos through an intuitive swipe interface. Claims to free up 50+ GB of storage with no ads or paywalls.

*Source: [Clever Cleaner - 100% free iPhone app to free up to 50+ GB in seconds...](https://www.tiktok.com/@yejinson124/video/7573037812090522911) (89,000 views)*

---

### [Paperpal](https://edit.paperpal.com)
**URL:** [edit.paperpal.com](https://edit.paperpal.com)

Allows users to upload PDFs and ask questions about the content, including generating summaries and extracting information from uploaded documents.

*Source: [#college #websites #websitesyouneed #fyp #goviral ](https://www.tiktok.com/@yejinson124/video/7551178035295276319) (499,900 views)*

---

### [LightPDF](https://lightpdf.com)
**URL:** [lightpdf.com](https://lightpdf.com)

A PDF editing tool that allows you to customize PDFs with features like file editing, watermark removal, PDF eraser, and various other PDF manipulation options.

*Source: [](https://www.tiktok.com/@yejinson124/video/7599879904431246623) (5,866 views)*

---

### [I Miss My Cafe](https://imissmycafe.com)
**URL:** [imissmycafe.com](https://imissmycafe.com)

A website that simulates the ambient sounds and atmosphere of sitting in a real cafe, perfect for studying or focusing. Features customizable cafe sounds like barista noises and drink preparation, with Spotify integration for music.

*Source: [#college #website #fyp #goviral #trending](https://www.tiktok.com/@yejinson124/video/7565711238710299935) (24,500 views)*

---

### [Typeless](https://typeless.com)
**URL:** [typeless.com](https://typeless.com)

A voice-to-text tool that converts spoken words into clean, polished text in real-time, automatically removing filler words, repetition, and awkward phrasing. It's approximately 4x faster than typing and works in over 100 languages with auto-editing and formatting features.

*Source: [#Typeless #website #fyp #goviral #tech  @Typeless ](https://www.tiktok.com/@yejinson124/video/7598641721609702686) (5,521 views)*

---

### [Microsoft Office](https://office.microsoft.com)
**URL:** [office.microsoft.com](https://office.microsoft.com)

Microsoft's productivity suite including Word, Excel, PowerPoint, and other tools, available free or discounted for college students.

*Source: [#college #collegetips #fyp #collegehacks #tips](https://www.tiktok.com/@yejinson124/video/7548302062770064671) (9,583 views)*

---

### [TinyWow](https://tinywow.com)
**URL:** [tinywow.com](https://tinywow.com)

An all-in-one online tool that offers multiple services including essay writing, PDF unlocking, YouTube script generation, content improvement, and PDF editing all in one free platform.

*Source: [#college #websites #websitesyouneed #fyp #goviral ](https://www.tiktok.com/@yejinson124/video/7554562985176386847) (30,100 views)*

---

### [FocusFlights](https://focusflights.com)
**URL:** [focusflights.com](https://focusflights.com)

A focus/study app that uses an airplane takeoff theme to help users concentrate and stay productive during study or work sessions.

*Source: [#app #fyp #study #goviral #college FocusFlights](https://www.tiktok.com/@yejinson124/video/7553839996562672927) (4,081 views)*

---

### [Open Source Alternatives To](https://opensourcealternative.to)
**URL:** [opensourcealternative.to](https://opensourcealternative.to)

A directory that helps users find free, open-source alternatives to popular proprietary SAS tools and software. Users can search for any tool and get multiple alternatives with reviews and descriptions.

*Source: [#college #websites #websitesyouneed #fyp #goviral](https://www.tiktok.com/@yejinson124/video/7555322472887782687) (14,900 views)*

---

## Design (12 sites)

### [Uiverse](https://uiverse.io)
**URL:** [uiverse.io](https://uiverse.io)

A library of animation components and UI elements with copyable code that developers can customize for their own projects, featuring various styles and designs including timer animations.

*Source: [#college #website #fyp #goviral #trending](https://www.tiktok.com/@yejinson124/video/7559774051149892895) (93,400 views)*

---

### [Demo Lab](https://dademolab.com)
**URL:** [dademolab.com](https://dademolab.com)

A tool that lets you animate any still pictures by uploading a photo, adjusting the joints, and creating moving animated images with different animation options.

*Source: [#college #website #websitesyouneed #fyp #goviral ](https://www.tiktok.com/@yejinson124/video/7556433105943285023) (58,500 views)*

---

### [FakeDetail](https://fakedetail.com)
**URL:** [fakedetail.com](https://fakedetail.com)

A tool that creates realistic custom phone screenshots (iPhone to iPhone messaging layouts) with customizable details like profile pictures, text content, dark mode, time, and battery levels.

*Source: [#Tomo.ai #website #fyp #goviral #trending](https://www.tiktok.com/@yejinson124/video/7564907336033111326) (26,900 views)*

---

### [Logo Diffusion](https://logodiffusion.com)
**URL:** [logodiffusion.com](https://logodiffusion.com)

An AI-powered logo design tool that creates custom logos from text prompts or sketches, with options to customize styles including fine art, 3D art, and realistic designs.

*Source: [#college #websites #websitesyouneed #fyp #goviral ](https://www.tiktok.com/@yejinson124/video/7554122304159026462) (30,400 views)*

---

### [Jitter](https://jitter.video)
**URL:** [jitter.video](https://jitter.video)

Provides free motion graphics templates, logos, UI elements, and animated social media content that can be customized and exported as GIFs, videos, or Lottie files.

*Source: [#college #fyp #websites #websitesyouneed #goviral ](https://www.tiktok.com/@yejinson124/video/7549766087273991454) (512,300 views)*

---

### [Elastic (or similar animation library)](https://elastic.out)
**URL:** [elastic.out](https://elastic.out)

Offers access to animated components and eye-catching background animations, perfect for creating professional-looking projects and presentations.

*Source: [#college #fyp #websites #websitesyouneed #goviral ](https://www.tiktok.com/@yejinson124/video/7549766087273991454) (512,300 views)*

---

### [3D Logo Lab](https://3dlogolab.io)
**URL:** [3dlogolab.io](https://3dlogolab.io)

A tool that transforms 2D logos into 3D versions with customizable animations, textures, and colors.

*Source: [#college #websites #websitesyouneed #fyp #goviral ](https://www.tiktok.com/@yejinson124/video/7552376025200528670) (18,200 views)*

---

### [Logo System](https://logosystem.co)
**URL:** [logosystem.co](https://logosystem.co)

The largest logo design library offering thousands of templates for inspiration, with customizable colors, symbols, and text options for logo creation.

*Source: [#college #websites #websitesyouneed #fyp #goviral ](https://www.tiktok.com/@yejinson124/video/7553093721068293407) (15,300 views)*

---

### [Formia](https://formia.so)
**URL:** [formia.so](https://formia.so)

A tool that converts 2D logos into 3D versions, allowing users to adjust sizing and colors before exporting the final result.

*Source: [#college #website #websitesyouneed #fyp #goviral](https://www.tiktok.com/@yejinson124/video/7556076468862831902) (17,600 views)*

---

### [FreeSewing](https://freesewing.eu)
**URL:** [freesewing.eu](https://freesewing.eu)

A website that generates customizable clothing patterns with user reviews, allowing users to search different types of clothing and get design inspiration.

*Source: [#college #websites #websitesyouneed #fyp #goviral ](https://www.tiktok.com/@yejinson124/video/7554562985176386847) (30,100 views)*

---

### [Dungeon Scrawl](https://app.dungeonscrawl.com)
**URL:** [app.dungeonscrawl.com](https://app.dungeonscrawl.com)

A custom map design tool that lets users create maps with customizable styles, colors, and sizes, with the ability to export as images.

*Source: [#college #websites #websitesyouneed #fyp #goviral ](https://www.tiktok.com/@yejinson124/video/7551970886916541726) (69,900 views)*

---

### [Neamx](https://neamx.com)
**URL:** [neamx.com](https://neamx.com)

A tool that generates viral thumbnails in seconds based on user input ideas, creating eye-catching thumbnail designs quickly.

*Source: [#college #website #fyp #goviral #trending ](https://www.tiktok.com/@yejinson124/video/7557159719920487710) (12,500 views)*

---

## Entertainment (10 sites)

### [SoBrief](https://sobrief.com)
**URL:** [sobrief.com](https://sobrief.com)

A streaming aggregator that allows users to watch movies and TV shows from Netflix, Hulu, Prime Video and other services for free without login or sign up required.

*Source: [#website #fyp #goviral #trending #tech](https://www.tiktok.com/@yejinson124/video/7600249470269410591) (14,700 views)*

---

### [A Good Movie to Watch](https://agoodmovietowatch.com)
**URL:** [agoodmovietowatch.com](https://agoodmovietowatch.com)

Recommends movies and TV shows based on your mood and filters by streaming platforms like Netflix, Hulu, or Apple TV that you already have subscriptions to.

*Source: [#Website #college #fyp #goviral #trending](https://www.tiktok.com/@yejinson124/video/7568665294361742623) (34,400 views)*

---

### [GIPHY](https://giphy.com)
**URL:** [giphy.com](https://giphy.com)

A searchable database and platform for finding memes, GIFs, reactions, entertainment content, stickers, and clips with trending and recommended content.

*Source: [#college #website #fyp #goviral #trending ](https://www.tiktok.com/@yejinson124/video/7557551160249306398) (28,800 views)*

---

### [MoveMe](https://moveme.tv)
**URL:** [moveme.tv](https://moveme.tv)

A movie recommendation website that lets users find films by typing emotions, keywords, or even emojis. Results can be filtered by year, rating, language, and genre with over 100,000 recommendations available.

*Source: [#college #website #fyp #goviral #trending](https://www.tiktok.com/@yejinson124/video/7560860117038632222) (11,600 views)*

---

### [123Movies Free](https://123moviesfree.net)
**URL:** [123moviesfree.net](https://123moviesfree.net)

A free movie streaming website where users can search and watch movies online by title or keyword.

*Source: [#college #website #fyp #goviral #trending](https://www.tiktok.com/@yejinson124/video/7560860117038632222) (11,600 views)*

---

### [Radio Garden](https://radio.garden)
**URL:** [radio.garden](https://radio.garden)

A website that allows you to listen to live radio stations from anywhere in the world, including countries like North Korea and Mexico, letting you tune in to local stations from different countries or cities.

*Source: [#college #fyp #websites #websitesyouneed #goviral ](https://www.tiktok.com/@yejinson124/video/7550451888496332062) (894,000 views)*

---

### [My Retro TVs](https://myretrotvs.com)
**URL:** [myretrotvs.com](https://myretrotvs.com)

A website where you can watch TV shows and movies from different decades (50s through 2000s), including cartoons, comedies, and classics from the 70s and other eras.

*Source: [#college #fyp #websites #websitesyouneed #goviral ](https://www.tiktok.com/@yejinson124/video/7550451888496332062) (894,000 views)*

---

### [HBO](https://hbo.com)
**URL:** [hbo.com](https://hbo.com)

Streaming service that sometimes offers student discounts or free access through college subscriptions.

*Source: [#college #collegetips #fyp #collegehacks #tips](https://www.tiktok.com/@yejinson124/video/7548302062770064671) (9,583 views)*

---

### [Radiooooo](https://radiooo00.com)
**URL:** [radiooo00.com](https://radiooo00.com)

A website that allows you to listen to music from different countries and decades, such as America in the 1960s or Mexico in the 1980s.

*Source: [#Website #college #fyp #goviral #trending](https://www.tiktok.com/@yejinson124/video/7567930388342000926) (599,600 views)*

---

### [TV Garden](https://tvgarden.com)
**URL:** [tvgarden.com](https://tvgarden.com)

A website that lets you watch live TV stations from anywhere in the world by spinning a 3D globe or selecting countries from a sidebar to access their news and entertainment channels.

*Source: [#college #websites #websitesyouneed #fyp #goviral ](https://www.tiktok.com/@yejinson124/video/7554562985176386847) (30,100 views)*

---

## Food & Cooking (4 sites)

### [What The Fuck Should I Make For Dinner](https://whatthefuckshouldimakefordinner.com)
**URL:** [whatthefuckshouldimakefordinner.com](https://whatthefuckshouldimakefordinner.com)

A humorous website that provides random dinner recipe suggestions with profanity-laced responses. Users can click through different suggestions until they find a meal they like, then get a full step-by-step recipe.

*Source: [#college #website #tech #fyp #goviral](https://www.tiktok.com/@yejinson124/video/7563478237985197343) (8,545 views)*

---

### [MyFridgeFood](https://myfridgefood.com)
**URL:** [myfridgefood.com](https://myfridgefood.com)

A recipe generator that allows you to select ingredients you have at home and generates custom dishes with health information and recipes based on those ingredients.

*Source: [#college #fyp #websites #websitesyouneed #goviral ](https://www.tiktok.com/@yejinson124/video/7549766087273991454) (512,300 views)*

---

### [ChefGPT](https://chefgpt.xyz)
**URL:** [chefgpt.xyz](https://chefgpt.xyz)

An AI recipe generator that creates custom dishes based on ingredients you have, available cooking tools, time constraints, and meal preferences. Provides health information and step-by-step recipes.

*Source: [#college #websites #websitesyouneed #fyp #learning ](https://www.tiktok.com/@yejinson124/video/7550883016499875102) (67,400 views)*

---

### [CopyKat](https://copykat.com)
**URL:** [copykat.com](https://copykat.com)

A recipe website that provides copycat recipes to recreate dishes from popular restaurants and fast food chains at home, with exact ingredients and step-by-step instructions.

*Source: [#Website #college #fyp #goviral #trending](https://www.tiktok.com/@yejinson124/video/7565358722592034078) (27,200 views)*

---

## Fun (4 sites)

### [Uchinoko Maker](https://uchinoko-maker.jp)
**URL:** [uchinoko-maker.jp](https://uchinoko-maker.jp)

A cat customization website where users can design their own custom cat by choosing body shape, toes, eyes, ears, and other features, then order personalized merchandise like phone cases and t-shirts with proceeds supporting rescue animals.

*Source: [#website #fyp #goviral #tech #trending](https://www.tiktok.com/@yejinson124/video/7599116687882964254) (203,600 views)*

---

### [You.Can](https://you.can)
**URL:** [you.can](https://you.can)

A platform providing access to tons of mini games like Astrid Launcher that can be played directly in the browser without downloading anything.

*Source: [#Website #college #fyp #goviral #trending](https://www.tiktok.com/@yejinson124/video/7567930388342000926) (599,600 views)*

---

### [McBroken](https://mcbroken.com)
**URL:** [mcbroken.com](https://mcbroken.com)

Shows in real-time which McDonald's locations have working or broken ice cream machines globally. Users can zoom into their area to check the status of nearby locations.

*Source: [#college #website #fyp #goviral #trending](https://www.tiktok.com/@yejinson124/video/7557918813841378590) (10,900 views)*

---

### [YoPrintables](https://yoprintables.com)
**URL:** [yoprintables.com](https://yoprintables.com)

A tool that generates unlimited custom coloring pages based on user prompts (e.g., 'Batman in the city'), downloadable as PDF files with no login required.

*Source: [#Website #college #fyp #goviral #trending](https://www.tiktok.com/@yejinson124/video/7565358722592034078) (27,200 views)*

---

## Shopping (3 sites)

### [Car-Part.com](https://car-part.com)
**URL:** [car-part.com](https://car-part.com)

A marketplace for finding used and recycled auto parts at cheaper prices than retail by searching for specific car models, parts, and local sellers with dealer information.

*Source: [#website #fyp #goviral #trending #tech](https://www.tiktok.com/@yejinson124/video/7600249470269410591) (14,700 views)*

---

### [You Wants To](https://you.wantsto)
**URL:** [you.wantsto](https://you.wantsto)

A PC finder tool that helps users search for computers and displays product details with direct links to retailers like Amazon and Walmart for price comparison and purchasing.

*Source: [#college #websites #websitesyouneed #fyp #goviral ](https://www.tiktok.com/@yejinson124/video/7554122304159026462) (30,400 views)*

---

### [Amazon Outlet](https://amazon.com/outlet)
**URL:** [amazon.com/outlet](https://amazon.com/outlet)

Amazon's overstock section offering thousands of discounted items across categories like kitchen, toys, electronics, and more with deals up to 85% off the original price.

*Source: [#Website #college #fyp #goviral #trending](https://www.tiktok.com/@yejinson124/video/7567930388342000926) (599,600 views)*

---

## Education (3 sites)

### [QuickMath](https://quickmath.com)
**URL:** [quickmath.com](https://quickmath.com)

A math problem solver that can solve any equation by providing step-by-step solutions. Users can adjust difficulty levels based on their class requirements.

*Source: [#college #website #tech #fyp #goviral](https://www.tiktok.com/@yejinson124/video/7563478237985197343) (8,545 views)*

---

### [LitSolutions](https://litsolutions.com)
**URL:** [litsolutions.com](https://litsolutions.com)

A textbook solutions website where students can search for their textbook, select a specific page and problem, and get step-by-step solutions to homework problems.

*Source: [#college #collegetips #websites #fyp #websitesyouneed ](https://www.tiktok.com/@yejinson124/video/7549393527222963486) (66,200 views)*

---

### [Samantha Z](https://samanthaz.me)
**URL:** [samanthaz.me](https://samanthaz.me)

An AI-powered academic tool that allows students to upload textbooks and lectures for analysis, generating accurate answers along with study guides, quizzes, flashcards, and additional sources. Described as a better version of ChatGPT for academics.

*Source: [#college #fyp #websites #websitesyouneed #goviral ](https://www.tiktok.com/@yejinson124/video/7550112527603027231) (1,200,000 views)*

---

## Research (2 sites)

### [BioRender](https://biorender.com)
**URL:** [biorender.com](https://biorender.com)

A platform that lets you create professional STEM-related scientific figures and illustrations in minutes, covering over 30 fields including immunology, microbiology, and neuroscience with thousands of pre-made templates and icons.

*Source: [#college #website #fyp #goviral #trending](https://www.tiktok.com/@yejinson124/video/7559774051149892895) (93,400 views)*

---

### [Wolfram Alpha](https://wolframalpha.com)
**URL:** [wolframalpha.com](https://wolframalpha.com)

A computational knowledge engine that solves complex problems in math, science, and everyday life by providing detailed step-by-step solutions to typed queries.

*Source: [#college #websites #websitesyouneed #fyp #goviral ](https://www.tiktok.com/@yejinson124/video/7553439123588123935) (90,800 views)*

---

## Travel (2 sites)

### [Roadtrippers](https://roadtrippers.com)
**URL:** [roadtrippers.com](https://roadtrippers.com)

A road trip planning tool that helps users plan routes between destinations, discover top attractions along the way, get hotel recommendations, and automatically generates optimal routes when adding stops to your itinerary.

*Source: [#college #website #goviral #tech #fyp ](https://www.tiktok.com/@yejinson124/video/7559005539485764894) (26,800 views)*

---

### [Make My Drive Fun](https://makemydrivefun.com)
**URL:** [makemydrivefun.com](https://makemydrivefun.com)

A road trip planning tool that helps you map routes between locations, showing the perfect route for your journey. Works internationally, not just limited to the United States.

*Source: [#college #website #fyp #goviral #trending ](https://www.tiktok.com/@yejinson124/video/7557159719920487710) (12,500 views)*

---

## Automotive/DIY (2 sites)

### [Car Care Kiosk](https://carcarekiosk.com)
**URL:** [carcarekiosk.com](https://carcarekiosk.com)

Provides over 60,000 free step-by-step video tutorials showing how to fix and maintain various car problems yourself, with guides specific to different vehicle makes and models.

*Source: [#college #website #fyp #goviral #tech](https://www.tiktok.com/@yejinson124/video/7560511991417163038) (1,100,000 views)*

---

### [Start My Car](https://startmycar.com)
**URL:** [startmycar.com](https://startmycar.com)

A car repair resource website where you can type in your car problem and model to get step-by-step instructions, guides, manuals, and compare different car models.

*Source: [#website #fyp #goviral #trending #tech ](https://www.tiktok.com/@yejinson124/video/7601744057492147486) (296,300 views)*

---

## Image Editing (2 sites)

### [Cleanup Pictures](https://cleanup.pictures)
**URL:** [cleanup.pictures](https://cleanup.pictures)

An image editing tool that allows users to remove people or objects from photos in seconds using a brush tool to highlight unwanted elements.

*Source: [#college #website #tech #fyp #goviral](https://www.tiktok.com/@yejinson124/video/7563478237985197343) (8,545 views)*

---

### [iLoveIMG](https://iloveimg.com)
**URL:** [iloveimg.com](https://iloveimg.com)

A free all-in-one image editing platform that offers tools for compression, background removal, resizing, cropping, photo editing, meme creation, and more without needing to switch between different websites.

*Source: [#college #websites #editor #fyp #goviral](https://www.tiktok.com/@yejinson124/video/7551594453220248862) (147,800 views)*

---

## AI Tools/Productivity (2 sites)

### [Pokee AI](https://pokee.ai)
**URL:** [pokee.ai](https://pokee.ai)

An AI-powered workflow automation platform that plans, reasons, and executes complete workflows across multiple tools like Google, TikTok, Notion, LinkedIn, and more. It features reproducible workflows where you can change inputs to instantly regenerate results, functioning as an intelligent automated version of Zapier.

*Source: [https://pokee.ai/ #pokeeai #website #fyp #goviral #trending @Pokee AI ](https://www.tiktok.com/@yejinson124/video/7566836700186545438) (7,125 views)*

---

### [Serif.AI](https://serif.ai)
**URL:** [serif.ai](https://serif.ai)

An AI-powered email assistant that automatically drafts email responses the moment they hit your inbox, understanding context and generating replies in your tone to help manage emails on autopilot.

*Source: [This is your sign to upgrade your workflow ✨ Use Code: Yejinson124 on...](https://www.tiktok.com/@yejinson124/video/7584168573506047263) (4,441 views)*

---

## Entertainment/Relaxation (2 sites)

### [Drive & Listen](https://driveandlisten.herokuapp.com)
**URL:** [driveandlisten.herokuapp.com](https://driveandlisten.herokuapp.com)

Lets you virtually drive through streets of any country in the world while listening to live radio stations from that country, creating an immersive travel experience.

*Source: [#college #websites #websitesyouneed #fyp #goviral ](https://www.tiktok.com/@yejinson124/video/7555637603752480030) (105,300 views)*

---

### [Slow Roads](https://slowroads.io)
**URL:** [slowroads.io](https://slowroads.io)

An endless, relaxing car driving simulator that can be played online in a browser, featuring customizable environments including different seasons, times of day, and weather conditions.

*Source: [#college #website #websitesyouneed #fyp #goviral](https://www.tiktok.com/@yejinson124/video/7556076468862831902) (17,600 views)*

---

## Entertainment/Productivity (1 sites)

### [SkipVids](https://skipvids.com)
**URL:** [skipvids.com](https://skipvids.com)

A website that allows you to search and watch YouTube videos ad-free with features like background playback, picture-in-picture mode, and video downloading capabilities.

*Source: [#Website #fyp #goviral #ai #tech](https://www.tiktok.com/@yejinson124/video/7563105879730490654) (6,418 views)*

---

## Travel/Utilities (1 sites)

### [Airport WiFi Map](https://umap.openstreetmap.fr)
**URL:** [umap.openstreetmap.fr](https://umap.openstreetmap.fr)

A map-style website that lists airport WiFi networks and their public access passwords from airports worldwide, allowing users to search by location or airport name.

*Source: [#Website #fyp #goviral #ai #tech](https://www.tiktok.com/@yejinson124/video/7563105879730490654) (6,418 views)*

---

## Gaming/Entertainment (1 sites)

### [Unblocked Games Site](https://sites.google.com)
**URL:** [sites.google.com](https://sites.google.com)

A website hosting thousands of games that can be played without being blocked by school or workplace WiFi filters.

*Source: [#Website #fyp #goviral #ai #tech](https://www.tiktok.com/@yejinson124/video/7563105879730490654) (6,418 views)*

---

## Media Tools (1 sites)

### [Cobalt Tools](https://cobalt.tools)
**URL:** [cobalt.tools](https://cobalt.tools)

A video and audio extraction tool that allows users to download full videos or just audio by pasting a link.

*Source: [#Tomo.ai #website #fyp #goviral #trending](https://www.tiktok.com/@yejinson124/video/7564907336033111326) (26,900 views)*

---

## Gaming/Education (1 sites)

### [Build It App](https://builditapp.com)
**URL:** [builditapp.com](https://builditapp.com)

Teaches users how to build structures and creations in Minecraft with full step-by-step tutorials, from survival farms to mansions, suitable for beginners and experienced players.

*Source: [#college #website #fyp #goviral #tech](https://www.tiktok.com/@yejinson124/video/7560511991417163038) (1,100,000 views)*

---

## Productivity/Tools (1 sites)

### [Keyboard Simulator](https://keyboardsimulator.xyz)
**URL:** [keyboardsimulator.xyz](https://keyboardsimulator.xyz)

A simulator that allows users to test different keyboard layouts, customize colors and layouts, and check typing speed and WPM to find their ideal keyboard setup.

*Source: [#college #website #fyp #goviral #tech](https://www.tiktok.com/@yejinson124/video/7560511991417163038) (1,100,000 views)*

---

## Music (1 sites)

### [Music-Map](https://music-map.com)
**URL:** [music-map.com](https://music-map.com)

Shows a visual map of artists that sound similar to the one you search, with proximity on the chart indicating how similar their music style is.

*Source: [#Website #college #fyp #goviral #trending](https://www.tiktok.com/@yejinson124/video/7568665294361742623) (34,400 views)*

---

## Books (1 sites)

### [WhichBook](https://whichbook.net)
**URL:** [whichbook.net](https://whichbook.net)

Provides book recommendations based on your mood by sliding through mood options, and includes direct links to purchase or borrow the suggested books.

*Source: [#Website #college #fyp #goviral #trending](https://www.tiktok.com/@yejinson124/video/7568665294361742623) (34,400 views)*

---

## AI Tools/Marketing (1 sites)

### [Pomelli](https://pomelli.ai)
**URL:** [pomelli.ai](https://pomelli.ai)

An AI tool that analyzes businesses and generates complete brand style guides including fonts, colors, brand values, and marketing campaign ideas with editable designs.

*Source: [#website #fyp #govral #trending #tech ](https://www.tiktok.com/@yejinson124/video/7601371497986379039) (20,700 views)*

---

## Design/Fashion (1 sites)

### [TailorNova](https://tailornova.com)
**URL:** [tailornova.com](https://tailornova.com)

A 3D fashion design tool that allows users to customize clothing styles including fabrics, necklines, sleeves, closures, and body measurements to visualize garment designs.

*Source: [#website #fyp #govral #trending #tech ](https://www.tiktok.com/@yejinson124/video/7601371497986379039) (20,700 views)*

---

## Fun/Entertainment (1 sites)

### [Windows 93](https://windows93.net)
**URL:** [windows93.net](https://windows93.net)

A retro-themed entertainment website that simulates a vintage Windows operating system with various working programs and apps for nostalgic fun.

*Source: [#website #fyp #govral #trending #tech ](https://www.tiktok.com/@yejinson124/video/7601371497986379039) (20,700 views)*

---

## Education/Scholarship (1 sites)

### [QuestBridge](https://questbridge.org)
**URL:** [questbridge.org](https://questbridge.org)

A program that connects high-achieving, low-income students with full scholarships to top universities like Stanford, Harvard, Yale, Princeton, and UPenn. The program covers full cost of attendance including tuition, housing, meals, and travel expenses.

*Source: [#fyp #college #scholarship #questbridge #highschool](https://www.tiktok.com/@yejinson124/video/7547542513293331742) (49,600 views)*

---

## Crafts/Hobbies (1 sites)

### [Ravelry](https://ravelry.com)
**URL:** [ravelry.com](https://ravelry.com)

A website featuring thousands of crochet and knitting patterns uploaded by users, with detailed instructions and searchable designs for various projects like scarves.

*Source: [#website #fyp #goviral #trending #tech ](https://www.tiktok.com/@yejinson124/video/7601744057492147486) (296,300 views)*

---

## Education/Travel (1 sites)

### [WikiShootMe](https://wikishootme.toolforge.org)
**URL:** [wikishootme.toolforge.org](https://wikishootme.toolforge.org)

An interactive mapping website that shows famous places and landmarks through Wikipedia, allowing users to zoom into locations and discover Wikipedia pages about interesting spots.

*Source: [#website #fyp #goviral #trending #tech ](https://www.tiktok.com/@yejinson124/video/7601744057492147486) (296,300 views)*

---

## Mental Health/Wellness (1 sites)

### [Is This Thing Bigger](https://isthisthingbigger.com)
**URL:** [isthisthingbigger.com](https://isthisthingbigger.com)

A website that provides perspective on stress and problems by showing the scale of the universe, comparing Earth and galaxies to help users feel calmer about their issues.

*Source: [#website #stressed #fyp #goviral #calm](https://www.tiktok.com/@yejinson124/video/7561277098560687390) (4,352 views)*

---

## Finance/Research (1 sites)

### [Quiver Quantitative](https://quiverquant.com)
**URL:** [quiverquant.com](https://quiverquant.com)

A stock research platform that tracks politician stock trades, insider trading, institutional holdings, and alternative data to help inform trading decisions. Users can search for specific stocks to see which politicians purchased them, when they bought, and other ownership details.

*Source: [#college #website #fyp #goviral #trending ](https://www.tiktok.com/@yejinson124/video/7566444282110971166) (13,600 views)*

---

## Food/Reference (1 sites)

### [Hack the Menu](https://hackthemenu.com)
**URL:** [hackthemenu.com](https://hackthemenu.com)

A website that provides a comprehensive list of secret menu items from various fast food chains, including descriptions, availability information, and exact ordering instructions.

*Source: [#college #website #fyp #goviral #trending ](https://www.tiktok.com/@yejinson124/video/7566444282110971166) (13,600 views)*

---

## Food/Travel (1 sites)

### [TasteAtlas](https://tasteatlas.com)
**URL:** [tasteatlas.com](https://tasteatlas.com)

An interactive global food exploration platform where users can zoom into any region to discover popular local dishes, complete with step-by-step recipes and ingredient lists.

*Source: [#college #website #fyp #goviral #trending ](https://www.tiktok.com/@yejinson124/video/7566444282110971166) (13,600 views)*

---

## E-commerce (1 sites)

### [Amazon](https://amazon.com)
**URL:** [amazon.com](https://amazon.com)

Online shopping platform where the creator is showing a One Beat power strip surge protector product listing as an example of the type of extension cord recommended for college dorms.

*Source: [#college #collegeessentials #collegetips #fyp #college101](https://www.tiktok.com/@yejinson124/video/7548616049197960478) (4,415 views)*

---

## Education/College Resources (1 sites)

### [College Essay Guy](https://collegeessayguy.com)
**URL:** [collegeessayguy.com](https://collegeessayguy.com)

A free website that provides access to tons of supplemental essay and personal essay examples for college applications, helping students identify patterns and improve their writing.

*Source: [#college #collegeapps #collegetips #fyp #goviral ](https://www.tiktok.com/@yejinson124/video/7553066615055699231) (5,746 views)*

---

## Gaming (1 sites)

### [Play Retro Games](https://playretrogames.com)
**URL:** [playretrogames.com](https://playretrogames.com)

An online platform that allows you to play classic games from old consoles like Nintendo DS, SEGA, Super Nintendo, and Game Boy directly in your browser.

*Source: [#college #website #fyp #goviral #trending ](https://www.tiktok.com/@yejinson124/video/7557551160249306398) (28,800 views)*

---

## Developer Tools (1 sites)

### [QuickRef.ME](https://quickref.me)
**URL:** [quickref.me](https://quickref.me)

A website offering cheat sheets and quick reference guides for coding languages, frameworks, and development tools with key commands, code examples, and core concepts on single pages.

*Source: [#college #website #fyp #goviral #trending ](https://www.tiktok.com/@yejinson124/video/7557551160249306398) (28,800 views)*

---

## Shopping/Deals (1 sites)

### [Koupon](https://koupon.ai)
**URL:** [koupon.ai](https://koupon.ai)

A website and app that aggregates secret promo codes and discounts for major retailers like Amazon, Best Buy, and Walmart, helping users find deals and save money on purchases.

*Source: [#website #fyp #goviral #trending #valentines](https://www.tiktok.com/@yejinson124/video/7604911350271298846) (6,935 views)*

---

## Food/Cooking (1 sites)

### [SuperCook](https://supercook.com)
**URL:** [supercook.com](https://supercook.com)

Creates custom recipes based on ingredients you already have at home, helping reduce food waste by generating recipe suggestions from your available ingredients.

*Source: [#college #websites #websitesyouneed #fyp #goviral ](https://www.tiktok.com/@yejinson124/video/7555637603752480030) (105,300 views)*

---

## Learning/Productivity (1 sites)

### [Keybr](https://keybr.com)
**URL:** [keybr.com](https://keybr.com)

A typing practice website with 18 levels that helps improve typing skills, tracks accuracy, and saves progress over time to monitor improvement.

*Source: [#college #websites #websitesyouneed #fyp #goviral ](https://www.tiktok.com/@yejinson124/video/7555637603752480030) (105,300 views)*

---

## Mapping/Geography (1 sites)

### [Topographic Map Tool](https://topographicmap.com or topoexport.com)
**URL:** [topographicmap.com or topoexport.com](https://topographicmap.com or topoexport.com)

A mapping website that allows users to create interactive 2D and 3D maps of any place in the world, with features to zoom, rotate, and view layers like buildings, roads, and railways.

*Source: [#college #website #ai #fyp #goviral](https://www.tiktok.com/@yejinson124/video/7558654048182865183) (55,300 views)*

---

## AI Tools/Design (1 sites)

### [AI Poster Generator](https://unknown-poster-generator.com)
**URL:** [unknown-poster-generator.com](https://unknown-poster-generator.com)

An AI-powered design tool that creates professional, eye-catching posters from simple text prompts and style descriptions, with options to download or share the results.

*Source: [#college #website #ai #fyp #goviral](https://www.tiktok.com/@yejinson124/video/7558654048182865183) (55,300 views)*

---

## Shopping & Deals (1 sites)

### [Deku Deals](https://dekudeals.com)
**URL:** [dekudeals.com](https://dekudeals.com)

Finds the best deals on console games for Xbox, PlayStation, and Nintendo Switch by comparing prices across different stores.

*Source: [](https://www.tiktok.com/@yejinson124/video/7599566303392763166) (4,777 views)*

---

## Art & Culture (1 sites)

### [wplace.live](https://wplace.live)
**URL:** [wplace.live](https://wplace.live)

An interactive map that allows you to explore artwork from artists around the world by zooming into different regions and browsing different styles.

*Source: [](https://www.tiktok.com/@yejinson124/video/7599566303392763166) (4,777 views)*

---

## Job Search (1 sites)

### [Remote.co](https://remote.co)
**URL:** [remote.co](https://remote.co)

A job board platform featuring thousands of remote and hybrid jobs from around the world, with filters by location, job title, and companies including major brands like Apple, CNN, and CNBC.

*Source: [#website #fyp #goviral #tech #trending](https://www.tiktok.com/@yejinson124/video/7599116687882964254) (203,600 views)*

---

## Art & Crafts (1 sites)

### [FoldBook](https://foldbook.art)
**URL:** [foldbook.art](https://foldbook.art)

A creative tool that transforms regular books into 3D folded art by providing custom folding patterns for text, dates, initials, or symbols based on your book's dimensions.

*Source: [#college #websites #editor #fyp #goviral](https://www.tiktok.com/@yejinson124/video/7551594453220248862) (147,800 views)*

---

## Career & Productivity (1 sites)

### [FlowCV](https://app.flowcv.com)
**URL:** [app.flowcv.com](https://app.flowcv.com)

A professional resume builder that helps create polished resumes in minutes with multiple templates, pre-written content suggestions, and tips to make your resume stand out.

*Source: [#college #websites #editor #fyp #goviral](https://www.tiktok.com/@yejinson124/video/7551594453220248862) (147,800 views)*

---

## Relaxation/ASMR (1 sites)

### [I Miss My Library](https://imissmylibrary.com)
**URL:** [imissmylibrary.com](https://imissmylibrary.com)

A relaxing ambient sound website that provides a library atmosphere with customizable sounds like rainy weather, sunny weather, turning pages, writing on iPad, fireplace crackling, and typing on keyboard to create a calming study or work environment.

*Source: [#relax #website #fyp #goviral #asmr](https://www.tiktok.com/@yejinson124/video/7560142351633485087) (4,566 views)*

---

## Entertainment/Learning (1 sites)

### [PlayPhrase](https://playphrase.me)
**URL:** [playphrase.me](https://playphrase.me)

A website that shows TV and movie scenes based on any word or sentence you type, useful for entertainment and practicing English.

*Source: [#college #website #trending #fyp #goviral](https://www.tiktok.com/@yejinson124/video/7556801421329304862) (19,200 views)*

---

## Fitness (1 sites)

### [MuscleWiki](https://musclewiki.com)
**URL:** [musclewiki.com](https://musclewiki.com)

A fitness and workout website where you can click on muscle groups to see specific exercises with video instructions and equipment options for targeting that muscle.

*Source: [#college #website #trending #fyp #goviral](https://www.tiktok.com/@yejinson124/video/7556801421329304862) (19,200 views)*

---

## Finance (1 sites)

### [Robinhood](https://robinhood.com)
**URL:** [robinhood.com](https://robinhood.com)

An investing app with a minimalistic design that allows users to trade stocks, set up automatic payments, and research stock information. Designed to be beginner-friendly and approachable for new investors.

*Source: [#Investing #Growth #Finance](https://www.tiktok.com/@yejinson124/video/7602439053711035679) (6,658 views)*

---

## Development (1 sites)

### [E2B](https://e2b.app)
**URL:** [e2b.app](https://e2b.app)

Cloud infrastructure platform that appears to host and deploy the websites and applications created through Runable's AI agent system.

*Source: [#Runable #website #fyp #goviral #tech ](https://www.tiktok.com/@yejinson124/video/7570461849565564190) (141,900 views)*

---

## Search/Download (1 sites)

### [Open Directory Finder](https://ewasion.github.io/opendirectory-finder)
**URL:** [ewasion.github.io/opendirectory-finder](https://ewasion.github.io/opendirectory-finder)

A search engine that helps you find direct download links for movies, TV shows, music, books, software, and other files from open directories across the internet.

*Source: [](https://www.tiktok.com/@yejinson124/video/7599879904431246623) (5,866 views)*

---

## Home Repair (1 sites)

### [Appliance Parts Pros](https://appliancepartspros.com)
**URL:** [appliancepartspros.com](https://appliancepartspros.com)

A website that helps you fix appliances by providing how-to videos, repair instructions, and OEM replacement parts. You can search by model number, browse by appliance type or brand, and compare prices for parts.

*Source: [#college #website #fyp #goviral #trending](https://www.tiktok.com/@yejinson124/video/7565711238710299935) (24,500 views)*

---

## News/Research (1 sites)

### [Wall Street Journal](https://wsj.com)
**URL:** [wsj.com](https://wsj.com)

A major business and financial news publication that offers free or discounted access to college students with their .edu email address.

*Source: [#college #collegetips #fyp #collegehacks #tips](https://www.tiktok.com/@yejinson124/video/7548302062770064671) (9,583 views)*

---

## Shopping/Entertainment (1 sites)

### [Amazon Prime](https://amazon.com/prime)
**URL:** [amazon.com/prime](https://amazon.com/prime)

Amazon's subscription service offering free shipping, streaming, and other benefits, with a free 6-month trial for college students.

*Source: [#college #collegetips #fyp #collegehacks #tips](https://www.tiktok.com/@yejinson124/video/7548302062770064671) (9,583 views)*

---

## Health & Nutrition (1 sites)

### [Eat This Much](https://eatthismuch.com)
**URL:** [eatthismuch.com](https://eatthismuch.com)

An automatic meal planner that creates personalized meal plans based on your calorie goals, diet preferences (keto, vegan, paleo, etc.), and budget. Provides detailed nutrition facts, recipes, and ingredients for each meal.

*Source: [#college #website #fup #goviral #trending](https://www.tiktok.com/@yejinson124/video/7564573948113915167) (46,000 views)*

---

## Writing & Productivity (1 sites)

### [Hemingway App](https://hemingwayapp.com)
**URL:** [hemingwayapp.com](https://hemingwayapp.com)

A writing analysis tool that evaluates essay and text quality by identifying weak spots and providing specific suggestions to improve writing clarity and strength. Works by analyzing pasted text instantly.

*Source: [#college #website #fup #goviral #trending](https://www.tiktok.com/@yejinson124/video/7564573948113915167) (46,000 views)*

---

## Content Creation (1 sites)

### [The Blucks](https://theblucks.com)
**URL:** [theblucks.com](https://theblucks.com)

A content generation platform that creates TikTok videos and slides for marketing purposes, generating relatable content automatically with analytics tracking for content type and time saved.

*Source: [#college #websites #websitesyouneed #fyp #goviral ](https://www.tiktok.com/@yejinson124/video/7553439123588123935) (90,800 views)*

---

## Education/History (1 sites)

### [GeaCron](https://geacron.com)
**URL:** [geacron.com](https://geacron.com)

An interactive historical atlas that allows users to explore how the world has changed over time through a draggable timeline, showing territories, rulers, notable people, and battles from different periods.

*Source: [#college #website #websitesyouneed #fyp #goviral](https://www.tiktok.com/@yejinson124/video/7556076468862831902) (17,600 views)*

---

## History/Research (1 sites)

### [Old Maps Online](https://oldmapsonline.org)
**URL:** [oldmapsonline.org](https://oldmapsonline.org)

A platform for browsing and discovering historic old maps from various time periods and regions around the world.

*Source: [#college #website #websitesyouneed #fyp #goviral](https://www.tiktok.com/@yejinson124/video/7556076468862831902) (17,600 views)*

---

## Research/Education (1 sites)

### [Harvard Office of Institutional Research & Analytics](https://oira.harvard.edu)
**URL:** [oira.harvard.edu](https://oira.harvard.edu)

Publishes Harvard University's Common Data Set, which provides detailed annual reports about admissions statistics, test scores, GPA ranges, financial information, and what factors the school considers in applications.

*Source: [#college #collegeapps #fyp #collegetips #goviral ](https://www.tiktok.com/@yejinson124/video/7551106613814267167) (20,800 views)*

---

## Utilities (1 sites)

### [WiFi Space](https://wifispc.com)
**URL:** [wifispc.com](https://wifispc.com)

A website that allows users to find WiFi passwords for nearby routers by browsing a map or searching specific locations worldwide.

*Source: [#college #websites #websitesyouneed #fyp #goviral ](https://www.tiktok.com/@yejinson124/video/7551970886916541726) (69,900 views)*

---

## Home & Lifestyle (1 sites)

### [Cleaning Institute](https://cleaninginstitute.org)
**URL:** [cleaninginstitute.org](https://cleaninginstitute.org)

A resource that provides instructions on how to remove various types of stains, offering guidance on proper cleaning methods for different stain types.

*Source: [#Website #college #fyp #goviral #trending](https://www.tiktok.com/@yejinson124/video/7565358722592034078) (27,200 views)*

---

## Education/DIY (1 sites)

### [iFixit](https://ifixit.com)
**URL:** [ifixit.com](https://ifixit.com)

A free repair manual website that provides step-by-step guides with pictures and instructions to fix virtually anything, including electronics, appliances, cars, medical devices, and more.

*Source: [#college #websites #websitesyouneed #fyp #goviral ](https://www.tiktok.com/@yejinson124/video/7554948680680492318) (355,500 views)*

---

## Design/Fun (1 sites)

### [Beyond Loom (Wiggly Paint)](https://beyondloom.com)
**URL:** [beyondloom.com](https://beyondloom.com)

A creative tool that lets users create animated GIFs by drawing images that automatically turn into wiggly animations, also offers features like creating Valentine's cards.

*Source: [#college #websites #websitesyouneed #fyp #goviral ](https://www.tiktok.com/@yejinson124/video/7554948680680492318) (355,500 views)*

---

## Education/Research (1 sites)

### [Anna's Archive](https://annas-archive.org)
**URL:** [annas-archive.org](https://annas-archive.org)

A free online library archive that provides access to textbooks and other educational materials at no cost. Users can search for and download college textbooks that would otherwise cost hundreds of dollars.

*Source: [#college #collegetips #fyp #college #freetextbook](https://www.tiktok.com/@yejinson124/video/7547543191696723231) (121,700 views)*

---

`,Tv=()=>{const[s,r]=j.useState([]),[f,u]=j.useState(null),[m,h]=j.useState("");j.useEffect(()=>{const p=(C=>{const T=[],O=C.split(/^## /gm);for(let q=1;q<O.length;q++){const F=O[q],Z=F.split(`
`)[0].trim().match(/^(.*?) \((\d+)(?: sites)?\)$/);if(Z){const H=Z[1].trim(),K=parseInt(Z[2],10),we=F.split(/^### /gm).slice(1),me=[];we.forEach(Ee=>{const J=Ee.trim().split(`
`),Ue=J[0].trim().match(/^\[(.*?)\]\((.*?)\)$/);if(!Ue)return;const Fe=Ue[1],$e=Ue[2];let Ge="",Nt="",gt="",Ie;const z=J.findIndex(g=>g.trim().startsWith("**URL:**"));if(z!==-1){const N=J[z].match(/\[(.*?)\]\((.*?)\)/);N&&(Ge=N[1],Nt=N[2])}const L=J.findIndex(g=>g.trim().startsWith("*Source:"));if(L!==-1){const N=J[L].match(/\*Source: \[(.*?)\]\((.*?)\)(?: \((.*?)\))?\*/);N&&(Ie={text:N[1]+(N[3]?` (${N[3]})`:""),link:N[2]})}const $=z!==-1?z+1:1,fe=L!==-1?L:J.length;gt=J.slice($,fe).filter(g=>!g.trim().startsWith("---")&&g.trim()!=="").join(" ").trim(),me.push({name:Fe,link:$e,urlDisplay:Ge||$e,url:Nt||$e,description:gt,source:Ie})}),T.push({id:H.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),name:H,count:K,sites:me})}}return T})(Rv);r(p),p.length>0&&u(p[0].id)},[]);const w=j.useMemo(()=>m?s.map(b=>({...b,sites:b.sites.filter(p=>p.name.toLowerCase().includes(m.toLowerCase())||p.description.toLowerCase().includes(m.toLowerCase()))})).filter(b=>b.sites.length>0):s,[s,m]),k=w.find(b=>b.id===f)||w[0];return v.jsxs("div",{className:"h-full flex flex-col animate-fade-in",children:[v.jsxs("div",{className:"border-b border-terminal-dim/30 pb-4 mb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[v.jsxs("div",{children:[v.jsxs("h1",{className:"text-2xl text-terminal-cyan font-bold flex items-center gap-2",children:[v.jsx(cv,{className:"w-6 h-6"}),"Useful Sites Index"]}),v.jsxs("div",{className:"text-terminal-dim text-xs mt-1",children:["-- parsing /website_index.md (",s.reduce((b,p)=>b+p.count,0)," sites loaded)"]})]}),v.jsxs("div",{className:"relative w-full md:w-64",children:[v.jsx("input",{type:"text",placeholder:"Search sites...",value:m,onChange:b=>h(b.target.value),className:"w-full bg-terminal-dim/10 border border-terminal-dim/30 rounded px-3 py-1 text-sm text-terminal-text focus:outline-none focus:border-terminal-cyan placeholder-terminal-dim/50 pl-8"}),v.jsx(Sv,{className:"w-4 h-4 text-terminal-dim absolute left-2 top-1.5"})]})]}),v.jsxs("div",{className:"flex-grow flex flex-col md:flex-row gap-6 overflow-hidden min-h-0",children:[v.jsx("div",{className:"w-full md:w-64 flex-shrink-0 overflow-y-auto custom-scrollbar border-r border-terminal-dim/30 pr-4",children:v.jsxs("div",{className:"space-y-1",children:[v.jsx("h3",{className:"text-terminal-magenta font-bold text-sm mb-2 uppercase tracking-wider",children:"Categories"}),w.map(b=>v.jsxs("button",{onClick:()=>u(b.id),className:`w-full text-left px-2 py-1.5 rounded text-sm flex justify-between items-center group transition-colors ${k?.id===b.id?"bg-terminal-cyan/10 text-terminal-cyan border-l-2 border-terminal-cyan":"text-terminal-dim hover:bg-terminal-dim/10 hover:text-terminal-text"}`,children:[v.jsx("span",{className:"truncate",children:b.name}),v.jsx("span",{className:`text-xs ${k?.id===b.id?"text-terminal-cyan":"text-terminal-dim group-hover:text-terminal-text"}`,children:b.sites.length})]},b.id)),w.length===0&&v.jsx("div",{className:"text-terminal-dim text-sm italic p-2",children:"No categories found."})]})}),v.jsx("div",{className:"flex-grow overflow-y-auto custom-scrollbar",children:k?v.jsxs("div",{className:"space-y-6",children:[v.jsxs("div",{className:"flex items-baseline gap-2 border-b border-terminal-dim/20 pb-2",children:[v.jsxs("h2",{className:"text-xl text-terminal-text font-bold",children:[v.jsx("span",{className:"text-terminal-magenta",children:"#"})," ",k.name]}),v.jsxs("span",{className:"text-terminal-dim text-sm",children:["(",k.sites.length," items)"]})]}),v.jsx("div",{className:"grid grid-cols-1 gap-4",children:k.sites.map((b,p)=>v.jsxs("div",{className:"group border border-terminal-dim/30 bg-terminal-dim/5 rounded p-4 hover:border-terminal-cyan/50 hover:bg-terminal-dim/10 transition-all duration-300",children:[v.jsxs("div",{className:"flex justify-between items-start gap-4 mb-2",children:[v.jsx("h3",{className:"text-lg font-bold text-terminal-cyan group-hover:underline decoration-terminal-cyan/50 underline-offset-4",children:v.jsxs("a",{href:b.url,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2",children:[b.name,v.jsx(iv,{className:"w-4 h-4 opacity-50 group-hover:opacity-100"})]})}),v.jsx("span",{className:"text-xs text-terminal-dim font-mono bg-terminal-dim/20 px-2 py-0.5 rounded",children:new URL(b.url).hostname.replace("www.","")})]}),v.jsx("p",{className:"text-terminal-text/80 text-sm leading-relaxed mb-3",children:b.description}),b.source&&v.jsxs("div",{className:"text-xs text-terminal-dim flex items-center gap-1 mt-3 pt-3 border-t border-terminal-dim/10",children:[v.jsx(fv,{className:"w-3 h-3 text-terminal-magenta"}),v.jsx("span",{children:"Source:"}),b.source.link?v.jsx("a",{href:b.source.link,target:"_blank",rel:"noopener noreferrer",className:"text-terminal-magenta hover:text-terminal-cyan transition-colors truncate max-w-[200px] md:max-w-md",children:b.source.text}):v.jsx("span",{children:b.source.text})]})]},p))})]}):v.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-terminal-dim opacity-50",children:[v.jsx(bv,{className:"w-12 h-12 mb-4"}),v.jsx("p",{children:"Select a category to view sites"})]})})]}),v.jsxs("div",{className:"pt-4 mt-auto border-t border-terminal-dim/30 flex justify-between items-center",children:[v.jsx(In,{to:"/",className:"text-terminal-dim hover:text-terminal-cyan transition-colors text-sm",children:"< Back to Menu"}),v.jsx("div",{className:"text-terminal-dim text-xs",children:"keys: [1-9] navigate categories"})]})]})};function jv(){return v.jsx(Ly,{children:v.jsx(fy,{children:v.jsxs(Nn,{path:"/",element:v.jsx(Zy,{}),children:[v.jsx(Nn,{index:!0,element:v.jsx(Ky,{})}),v.jsx(Nn,{path:"about",element:v.jsx(Jy,{})}),v.jsx(Nn,{path:"skills",element:v.jsx(Wy,{})}),v.jsx(Nn,{path:"experience",element:v.jsx(Iy,{})}),v.jsx(Nn,{path:"useful-sites",element:v.jsx(Tv,{})}),v.jsx(Nn,{path:"contact",element:v.jsx(Ev,{})})]})})})}fg.createRoot(document.getElementById("root")).render(v.jsx(j.StrictMode,{children:v.jsx(jv,{})}));
