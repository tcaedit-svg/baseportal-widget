"use strict";var BaseportalChatSDK=(()=>{var zl=Object.create;var wn=Object.defineProperty;var $l=Object.getOwnPropertyDescriptor;var Kl=Object.getOwnPropertyNames;var Jl=Object.getPrototypeOf,Yl=Object.prototype.hasOwnProperty;var Ql=(o,s)=>()=>(s||o((s={exports:{}}).exports,s),s.exports),Xl=(o,s)=>{for(var l in s)wn(o,l,{get:s[l],enumerable:!0})},Es=(o,s,l,p)=>{if(s&&typeof s=="object"||typeof s=="function")for(let u of Kl(s))!Yl.call(o,u)&&u!==l&&wn(o,u,{get:()=>s[u],enumerable:!(p=$l(s,u))||p.enumerable});return o};var Vs=(o,s,l)=>(l=o!=null?zl(Jl(o)):{},Es(s||!o||!o.__esModule?wn(l,"default",{value:o,enumerable:!0}):l,o)),Zl=o=>Es(wn({},"__esModule",{value:!0}),o);var Li=Ql((Jt,Vi)=>{"use strict";(function(o,s){typeof Jt=="object"&&typeof Vi=="object"?Vi.exports=s():typeof define=="function"&&define.amd?define([],s):typeof Jt=="object"?Jt.Ably=s():o.Ably=s()})(Jt,()=>{var o={},s={exports:o},l=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptor,g=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertyNames,_=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,R=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))S.call(t,n)&&R(e,n,t[n]);if(_)for(var n of _(t))C.call(t,n)&&R(e,n,t[n]);return e},I=(e,t)=>p(e,g(t)),T=(e,t)=>{var n={};for(var i in e)S.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&_)for(var i of _(e))t.indexOf(i)<0&&C.call(e,i)&&(n[i]=e[i]);return n},N=(e,t)=>{for(var n in t)l(e,n,{get:t[n],enumerable:!0})},U=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of m(t))!S.call(e,r)&&r!==n&&l(e,r,{get:()=>t[r],enumerable:!(i=u(t,r))||i.enumerable});return e},E=e=>U(l({},"__esModule",{value:!0}),e),P=function(e,t){this[0]=e,this[1]=t},G=(e,t,n)=>{var i=(d,f,v,b)=>{try{var k=n[d](f),M=(f=k.value)instanceof P,O=k.done;Promise.resolve(M?f[0]:f).then(x=>M?i(d==="return"?d:"next",f[1]?{done:x.done,value:x.value}:x,v,b):v({value:x,done:O})).catch(x=>i("throw",x,v,b))}catch(x){b(x)}},r=d=>a[d]=f=>new Promise((v,b)=>i(d,f,v,b)),a={};return n=n.apply(e,t),a[Symbol.asyncIterator]=()=>a,r("next"),r("throw"),r("return"),a},X={};N(X,{ErrorInfo:()=>A,Realtime:()=>gi,Rest:()=>li,default:()=>Fl,makeProtocolMessageFromDeserialized:()=>cs,msgpack:()=>Ci}),s.exports=E(X);var w=class{},ee=typeof global<"u"?global:typeof window<"u"?window:self;function J(e,t){return`${e}`.padStart(t?3:2,"0")}function z(e){return w.Config.logTimestamps?function(t){let n=new Date;e(J(n.getHours())+":"+J(n.getMinutes())+":"+J(n.getSeconds())+"."+J(n.getMilliseconds(),1)+" "+t)}:function(t){e(t)}}var re=()=>{var e;let t,n;return typeof((e=ee?.console)==null?void 0:e.log)=="function"?(t=function(...i){console.log.apply(console,i)},n=console.warn?function(...i){console.warn.apply(console,i)}:t):t=n=function(){},[t,n].map(z)},D=class zt{constructor(){this.deprecated=(t,n)=>{this.deprecationWarning(`${t} is deprecated and will be removed in a future version. ${n}`)},this.shouldLog=t=>t<=this.logLevel,this.setLog=(t,n)=>{t!==void 0&&(this.logLevel=t),n!==void 0&&(this.logHandler=this.logErrorHandler=n)},this.logLevel=zt.defaultLogLevel,this.logHandler=zt.defaultLogHandler,this.logErrorHandler=zt.defaultLogErrorHandler}static initLogHandlers(){let[t,n]=re();this.defaultLogHandler=t,this.defaultLogErrorHandler=n,this.defaultLogger=new zt}static logActionNoStrip(t,n,i,r){t.logAction(n,i,r)}logAction(t,n,i){this.shouldLog(t)&&(t===1?this.logErrorHandler:this.logHandler)("Ably: "+n+": "+i,t)}renamedClientOption(t,n){this.deprecationWarning(`The \`${t}\` client option has been renamed to \`${n}\`. Please update your code to use \`${n}\` instead. \`${t}\` will be removed in a future version.`)}renamedMethod(t,n,i){this.deprecationWarning(`\`${t}\`\u2019s \`${n}\` method has been renamed to \`${i}\`. Please update your code to use \`${i}\` instead. \`${n}\` will be removed in a future version.`)}deprecationWarning(t){this.shouldLog(1)&&this.logErrorHandler(`Ably: Deprecation warning - ${t}`,1)}};D.defaultLogLevel=1,D.LOG_NONE=0,D.LOG_ERROR=1,D.LOG_MAJOR=2,D.LOG_MINOR=3,D.LOG_MICRO=4,D.logAction=(e,t,n,i)=>{D.logActionNoStrip(e,t,n,i)};var Y=D,c=Y,ie={};N(ie,{Format:()=>on,allSame:()=>zn,allToLowerCase:()=>$n,allToUpperCase:()=>ir,arrChooseN:()=>ae,arrDeleteValue:()=>Ot,arrEquals:()=>cr,arrIntersect:()=>tt,arrIntersectOb:()=>pt,arrPopRandomElement:()=>It,arrWithoutValue:()=>nn,cheapRandStr:()=>se,containsValue:()=>Te,copy:()=>Pe,createMissingPluginError:()=>ln,dataSizeBytes:()=>$,decodeBody:()=>de,encodeBody:()=>qe,ensureArray:()=>Ge,forInOwnNonNullProperties:()=>sn,getBackoffCoefficient:()=>rr,getGlobalObject:()=>Jn,getJitterCoefficient:()=>sr,getRetryTime:()=>Kn,inherits:()=>Tt,inspectBody:()=>B,inspectError:()=>te,intersect:()=>Fe,isEmpty:()=>fe,isErrorInfoOrPartialErrorInfo:()=>an,isNil:()=>Z,isObject:()=>Q,keysArray:()=>st,listenerToAsyncIterator:()=>fa,matchDerivedChannel:()=>ar,mixin:()=>q,parseQueryString:()=>at,prototypicalClone:()=>ye,randomString:()=>Ie,shallowClone:()=>Re,shallowEquals:()=>or,stringifyValues:()=>Pt,throwMissingPluginError:()=>Me,toBase64:()=>cn,toQueryString:()=>ot,valuesArray:()=>rn,whenPromiseSettles:()=>ge,withTimeoutAsync:()=>lr});function ve(e){let t="["+e.constructor.name;return e.message&&(t+=": "+e.message),e.statusCode&&(t+="; statusCode="+e.statusCode),e.code&&(t+="; code="+e.code),e.cause&&(t+="; cause="+te(e.cause)),e.detail&&Object.keys(e.detail).length>0&&(t+="; detail="+JSON.stringify(e.detail)),e.href&&!(e.message&&e.message.indexOf("help.ably.io")>-1)&&(t+="; see "+e.href+" "),t+="]",t}var A=class ki extends Error{constructor(t,n,i,r,a){super(t),typeof Object.setPrototypeOf<"u"&&Object.setPrototypeOf(this,ki.prototype),this.code=n,this.statusCode=i,this.cause=r,this.detail=a}toString(){return ve(this)}static fromValues(t){let{message:n,code:i,statusCode:r,detail:a}=t;if(typeof n!="string"||typeof i!="number"||typeof r!="number"||!Z(a)&&(typeof a!="object"||Array.isArray(a)))throw new Error("ErrorInfo.fromValues(): invalid values: "+w.Config.inspect(t));let d=Object.assign(new ki(n,i,r,void 0,a),t);return d.code&&!d.href&&(d.href="https://help.ably.io/error/"+d.code),d}},pe=class Si extends Error{constructor(t,n,i,r,a){super(t),typeof Object.setPrototypeOf<"u"&&Object.setPrototypeOf(this,Si.prototype),this.code=n,this.statusCode=i,this.cause=r,this.detail=a}toString(){return ve(this)}static fromValues(t){let{message:n,code:i,statusCode:r,detail:a}=t;if(typeof n!="string"||!Z(i)&&typeof i!="number"||!Z(r)&&typeof r!="number"||!Z(a)&&(typeof a!="object"||Array.isArray(a)))throw new Error("PartialErrorInfo.fromValues(): invalid values: "+w.Config.inspect(t));let d=Object.assign(new Si(n,i,r,void 0,a),t);return d.code&&!d.href&&(d.href="https://help.ably.io/error/"+d.code),d}};function Ue(e){return Math.floor(Math.random()*e.length)}function q(e,...t){for(let n=0;n<t.length;n++){let i=t[n];if(!i)break;for(let r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e}function Pe(e){return q({},e)}function Ge(e){return Z(e)?[]:Array.isArray(e)?e:[e]}function Q(e){return Object.prototype.toString.call(e)=="[object Object]"}function fe(e){for(let t in e)return!1;return!0}function Z(e){return e==null}function Re(e){let t=new Object;for(let n in e)t[n]=e[n];return t}function ye(e,t){class n{}n.prototype=e;let i=new n;return t&&q(i,t),i}var Tt=function(e,t){if(w.Config.inherits){w.Config.inherits(e,t);return}e.super_=t,e.prototype=ye(t.prototype,{constructor:e})};function Te(e,t){for(let n in e)if(e[n]==t)return!0;return!1}function Fe(e,t){return Array.isArray(t)?tt(e,t):pt(e,t)}function tt(e,t){let n=[];for(let i=0;i<e.length;i++){let r=e[i];t.indexOf(r)!=-1&&n.push(r)}return n}function pt(e,t){let n=[];for(let i=0;i<e.length;i++){let r=e[i];r in t&&n.push(r)}return n}function Ot(e,t){let n=e.indexOf(t),i=n!=-1;return i&&e.splice(n,1),i}function nn(e,t){let n=e.slice();return Ot(n,t),n}function st(e,t){let n=[];for(let i in e)t&&!Object.prototype.hasOwnProperty.call(e,i)||n.push(i);return n}function rn(e,t){let n=[];for(let i in e)t&&!Object.prototype.hasOwnProperty.call(e,i)||n.push(e[i]);return n}function sn(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&e[n]&&t(n)}function zn(e,t){if(e.length===0)return!0;let n=e[0][t];return e.every(function(i){return i[t]===n})}var on=(e=>(e.msgpack="msgpack",e.json="json",e))(on||{});function It(e){return e.splice(Ue(e),1)[0]}function ot(e){let t=[];if(e)for(let n in e)t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.length?"?"+t.join("&"):""}function Pt(e){return Object.fromEntries(Object.entries(e).map(([t,n])=>[t,String(n)]))}function at(e){let t,n=/([^?&=]+)=?([^&]*)/g,i={};for(;t=n.exec(e);)i[decodeURIComponent(t[1])]=decodeURIComponent(t[2]);return i}function an(e){return typeof e=="object"&&e!==null&&(e instanceof A||e instanceof pe)}function te(e){var t,n;return e instanceof Error||((t=e?.constructor)==null?void 0:t.name)==="ErrorInfo"||((n=e?.constructor)==null?void 0:n.name)==="PartialErrorInfo"?e.toString():w.Config.inspect(e)}function B(e){return w.BufferUtils.isBuffer(e)?e.toString():typeof e=="string"?e:w.Config.inspect(e)}function $(e){if(w.BufferUtils.isBuffer(e))return w.BufferUtils.byteLength(e);if(typeof e=="string")return w.Config.stringByteSize(e);if(typeof e=="number")return 8;if(typeof e=="boolean")return 1;throw new Error(`Expected input of Utils.dataSizeBytes to be a string, a number, a boolean or a buffer, but was: ${typeof e}`)}function se(){return String(Math.random()).substr(2)}var Ie=async e=>{let t=await w.Config.getRandomArrayBuffer(e);return w.BufferUtils.base64Encode(t)};function ae(e,t){let n=Math.min(t,e.length),i=e.slice(),r=[];for(let a=0;a<n;a++)r.push(It(i));return r}function ge(e,t){e.then(n=>{t?.(null,n)}).catch(n=>{t?.(n)})}function de(e,t,n){return n=="msgpack"?(t||Me("MsgPack"),t.decode(e)):JSON.parse(String(e))}function qe(e,t,n){return n=="msgpack"?(t||Me("MsgPack"),t.encode(e,!0)):JSON.stringify(e)}function $n(e){return e.map(function(t){return t&&t.toLowerCase()})}function ir(e){return e.map(function(t){return t&&t.toUpperCase()})}function rr(e){return Math.min((e+2)/3,2)}function sr(){return 1-Math.random()*.2}function Kn(e,t){return e*rr(t)*sr()}function Jn(){return typeof global<"u"?global:typeof window<"u"?window:self}function or(e,t){return Object.keys(e).every(n=>e[n]===t[n])&&Object.keys(t).every(n=>t[n]===e[n])}function ar(e){let t=/^(\[([^?]*)(?:(.*))\])?(.+)$/,n=e.match(t);if(!n||!n.length||n.length<5)throw new A("regex match failed",400,40010);if(n[2])throw new A(`cannot use a derived option with a ${n[2]} channel`,400,40010);return{qualifierParam:n[3]||"",channelName:n[4]}}function cn(e){let t=w.BufferUtils,n=t.utf8Encode(e);return t.base64Encode(n)}function cr(e,t){return e.length===t.length&&e.every(function(n,i){return n===t[i]})}function ln(e){return new A(`${e} plugin not provided`,40019,400)}function Me(e){throw ln(e)}async function lr(e,t=5e3,n="Timeout expired"){let i=new A(n,5e4,500);return Promise.race([e,new Promise((r,a)=>setTimeout(()=>a(i),t))])}function fa(e){return G(this,null,function*(){let t=[],n=null,i=e(r=>{if(n){let a=n;n=null,a(r)}else t.push(r)});try{for(;;)if(t.length>0)yield t.shift();else{if(n)throw new A("Concurrent next() calls are not supported",4e4,400);yield yield new P(new Promise(a=>{n=a}))}}finally{i()}})}var hr="2.21.0",ga="ably-js/"+hr,We={ENDPOINT:"main",ENVIRONMENT:"",REST_HOST:"rest.ably.io",REALTIME_HOST:"realtime.ably.io",FALLBACK_HOSTS:["main.a.fallback.ably-realtime.com","main.b.fallback.ably-realtime.com","main.c.fallback.ably-realtime.com","main.d.fallback.ably-realtime.com","main.e.fallback.ably-realtime.com"],PORT:80,TLS_PORT:443,TIMEOUTS:{disconnectedRetryTimeout:15e3,suspendedRetryTimeout:3e4,httpRequestTimeout:1e4,httpMaxRetryDuration:15e3,channelRetryTimeout:15e3,fallbackRetryTimeout:6e5,connectionStateTtl:12e4,realtimeRequestTimeout:1e4,recvTimeout:9e4,webSocketConnectTimeout:1e4,webSocketSlowTimeout:4e3},httpMaxRetryCount:3,maxMessageSize:65536,version:hr,protocolVersion:6,agent:ga,getPort:ma,getHttpScheme:ba,getPrimaryDomainFromEndpoint:ur,getEndpointFallbackHosts:pr,getFallbackHosts:gr,getHosts:va,checkHost:mr,objectifyOptions:wa,normaliseOptions:Aa,defaultGetHeaders:Ca,defaultPostHeaders:xa};function ma(e,t){return t||e.tls?e.tlsPort:e.port}function ba(e){return e.tls?"https://":"http://"}function dr(e){return e.includes(".")||e.includes("::")||e==="localhost"}function ur(e){return dr(e)?e:e.startsWith("nonprod:")?`${e.replace("nonprod:","")}.realtime.ably-nonprod.net`:`${e}.realtime.ably.net`}function pr(e){if(dr(e))return[];if(e.startsWith("nonprod:")){let t=e.replace("nonprod:","");return fr(t,"ably-realtime-nonprod.com")}return fr(e,"ably-realtime.com")}function fr(e,t){return["a","b","c","d","e"].map(n=>`${e}.${n}.fallback.${t}`)}function gr(e){let t=e.fallbackHosts,n=typeof e.httpMaxRetryCount<"u"?e.httpMaxRetryCount:We.httpMaxRetryCount;return t?ae(t,n):[]}function va(e){return[e.primaryDomain].concat(gr(e))}function mr(e){if(typeof e!="string")throw new A("host must be a string; was a "+typeof e,4e4,400);if(!e.length)throw new A("host must not be zero-length",4e4,400)}function ya(e){let t={};for(let n in We.TIMEOUTS)t[n]=e[n]||We.TIMEOUTS[n];return t}function Yn(e){let t=We.agent;if(e.agents)for(var n in e.agents)t+=" "+n+"/"+e.agents[n];return t}function wa(e,t,n,i,r){if(e===void 0){let d=t?`${n} must be initialized with either a client options object, an Ably API key, or an Ably Token`:`${n} must be initialized with a client options object`;throw c.logAction(i,c.LOG_ERROR,`${n}()`,d),new Error(d)}let a;if(typeof e=="string")if(e.indexOf(":")==-1){if(!t){let d=`${n} cannot be initialized with just an Ably Token; you must provide a client options object with a \`plugins\` property. (Set this Ably Token as the object\u2019s \`token\` property.)`;throw c.logAction(i,c.LOG_ERROR,`${n}()`,d),new Error(d)}a={token:e}}else{if(!t){let d=`${n} cannot be initialized with just an Ably API key; you must provide a client options object with a \`plugins\` property. (Set this Ably API key as the object\u2019s \`key\` property.)`;throw c.logAction(i,c.LOG_ERROR,`${n}()`,d),new Error(d)}a={key:e}}else a=e;return r&&(a=I(y({},a),{plugins:y(y({},r),a.plugins)})),a}function _a(e){if(e.endpoint&&(e.environment||e.restHost||e.realtimeHost))throw new A("The `endpoint` option cannot be used in conjunction with the `environment`, `restHost`, or `realtimeHost` options.",40106,400);if(e.environment&&(e.restHost||e.realtimeHost))throw new A("The `environment` option cannot be used in conjunction with the `restHost`, or `realtimeHost` options.",40106,400)}function Aa(e,t,n){let i=n??c.defaultLogger;e.environment&&i.deprecated("The `environment` client option","Use the `endpoint` client option instead."),e.restHost&&i.deprecated("The `restHost` client option","Use the `endpoint` client option instead."),e.realtimeHost&&i.deprecated("The `realtimeHost` client option","Use the `endpoint` client option instead."),_a(e),typeof e.recover=="function"&&e.closeOnUnload===!0&&(c.logAction(i,c.LOG_ERROR,"Defaults.normaliseOptions","closeOnUnload was true and a session recovery function was set - these are mutually exclusive, so unsetting the latter"),e.recover=void 0),"closeOnUnload"in e||(e.closeOnUnload=!e.recover),"queueMessages"in e||(e.queueMessages=!0);let r=e.endpoint||We.ENDPOINT;!e.fallbackHosts&&!e.restHost&&!e.realtimeHost&&!e.port&&!e.tlsPort&&(e.fallbackHosts=pr(e.environment||r));let a=e.environment&&`${e.environment}.realtime.ably.net`,f=e.restHost||e.realtimeHost||a||ur(r);(e.fallbackHosts||[]).concat(f).forEach(mr),e.port=e.port||We.PORT,e.tlsPort=e.tlsPort||We.TLS_PORT,"tls"in e||(e.tls=!0);let v=ya(e);t?"useBinaryProtocol"in e?e.useBinaryProtocol=w.Config.supportsBinary&&e.useBinaryProtocol:e.useBinaryProtocol=w.Config.preferBinary:e.useBinaryProtocol=!1;let b={};e.clientId&&(b["X-Ably-ClientId"]=w.BufferUtils.base64Encode(w.BufferUtils.utf8Encode(e.clientId))),"idempotentRestPublishing"in e||(e.idempotentRestPublishing=!0);let k=null,M=e.connectivityCheckUrl;if(e.connectivityCheckUrl){let[x,V]=e.connectivityCheckUrl.split("?");k=V?at(V):{},x.indexOf("://")===-1&&(x="https://"+x),M=x}let O=e.wsConnectivityCheckUrl;return O&&O.indexOf("://")===-1&&(O="wss://"+O),I(y({},e),{primaryDomain:f,maxMessageSize:e.maxMessageSize||We.maxMessageSize,timeouts:v,connectivityCheckParams:k,connectivityCheckUrl:M,wsConnectivityCheckUrl:O,headers:b})}function hn(e,t,n){let i=n||{};if(i.cipher){e||Me("Crypto");let r=e.getCipher(i.cipher,t);i.cipher=r.cipherParams,i.channelCipher=r.cipher}else"cipher"in i&&(i.cipher=void 0,i.channelCipher=null);return i}var br={json:"application/json",xml:"application/xml",html:"text/html",msgpack:"application/x-msgpack",text:"text/plain"},vr={format:"json",protocolVersion:We.protocolVersion};function Ca(e,{format:t,protocolVersion:n=vr.protocolVersion}={}){return{accept:br[t??(e.useBinaryProtocol?"msgpack":"json")],"X-Ably-Version":n.toString(),"Ably-Agent":Yn(e)}}function xa(e,{format:t,protocolVersion:n=vr.protocolVersion}={}){let i=br[t??(e.useBinaryProtocol?"msgpack":"json")];return{accept:i,"content-type":i,"X-Ably-Version":n.toString(),"Ably-Agent":Yn(e)}}var F=We;function ka(e){return Object.assign(We,e)}var Sa=class Ls{constructor(t,n){this.logger=t,this.members=n||[]}call(t,n){for(let i of this.members)if(i)try{i(t,n)}catch(r){c.logAction(this.logger,c.LOG_ERROR,"Multicaster multiple callback handler","Unexpected exception: "+r+"; stack = "+r.stack)}}push(...t){this.members.push(...t)}createPromise(){return new Promise((t,n)=>{this.push((i,r)=>{i?n(i):t(r)})})}resolveAll(t){this.call(null,t)}rejectAll(t){this.call(t)}static create(t,n){let i=new Ls(t,n);return Object.assign((r,a)=>i.call(r,a),{push:r=>i.push(r),createPromise:()=>i.createPromise(),resolveAll:r=>i.resolveAll(r),rejectAll:r=>i.rejectAll(r)})}},yr=Sa,wr=(e=>(e.Get="get",e.Delete="delete",e.Post="post",e.Put="put",e.Patch="patch",e))(wr||{}),we=wr,_r=(e=>(e[e.Success=200]="Success",e[e.NoContent=204]="NoContent",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.Forbidden=403]="Forbidden",e[e.RequestTimeout=408]="RequestTimeout",e[e.InternalServerError=500]="InternalServerError",e))(_r||{});function Ma(e){return e>=200&&e<400}var dn=_r,Qn=Math.pow(2,17);function Ra(){return("000000"+Math.floor(Math.random()*1e16)).slice(-16)}function Ta(e){return!!e.connection}function Ar(e){return an(e)?(e.code||(e.statusCode===403?e.code=40300:(e.code=40170,e.statusCode=401)),e):new A(te(e),e.code||40170,e.statusCode||401)}var Oa=(e,t)=>{let n=w.BufferUtils,i=n.utf8Encode(e),r=n.utf8Encode(t),a=n.hmacSha256(i,r);return n.base64Encode(a)};function Cr(e){if(!e)return"";typeof e=="string"&&(e=JSON.parse(e));let t=Object.create(null),n=st(e,!0);if(!n)return"";n.sort();for(let i=0;i<n.length;i++)t[n[i]]=e[n[i]].sort();return JSON.stringify(t)}function xr(e,t){if(e.authCallback)c.logAction(t,c.LOG_MINOR,"Auth()","using token auth with authCallback");else if(e.authUrl)c.logAction(t,c.LOG_MINOR,"Auth()","using token auth with authUrl");else if(e.key)c.logAction(t,c.LOG_MINOR,"Auth()","using token auth with client-side signing");else if(e.tokenDetails)c.logAction(t,c.LOG_MINOR,"Auth()","using token auth with supplied token only");else{let n="authOptions must include valid authentication parameters";throw c.logAction(t,c.LOG_ERROR,"Auth()",n),new Error(n)}}function Ia(e){return"useTokenAuth"in e&&!e.useTokenAuth}function kr(e){return e.useTokenAuth||!Ia(e)&&(e.authCallback||e.authUrl||e.token||e.tokenDetails)}function Pa(e){return!e.key&&!e.authCallback&&!e.authUrl}var Ea=0;function Va(){return Ea++}var La=class{constructor(e,t){if(this.authOptions={},this.client=e,this.tokenParams=t.defaultTokenParams||{},this.currentTokenRequestId=null,this.waitingForTokenRequest=null,kr(t))Pa(t)&&c.logAction(this.logger,c.LOG_ERROR,"Auth()","Warning: library initialized with a token literal without any way to renew the token when it expires (no authUrl, authCallback, or key). See https://help.ably.io/error/40171 for help"),this._saveTokenOptions(t.defaultTokenParams,t),xr(this.authOptions,this.logger);else{if(!t.key){let n="No authentication options provided; need one of: key, authUrl, or authCallback (or for testing only, token or tokenDetails)";throw c.logAction(this.logger,c.LOG_ERROR,"Auth()",n),new A(n,40160,401)}c.logAction(this.logger,c.LOG_MINOR,"Auth()","anonymous, using basic auth"),this._saveBasicOptions(t)}}get logger(){return this.client.logger}async authorize(e,t){if(t&&t.key&&this.authOptions.key!==t.key)throw new A("Unable to update auth options with incompatible key",40102,401);try{let n=await this._forceNewToken(e??null,t??null);return Ta(this.client)?new Promise((i,r)=>{this.client.connection.connectionManager.onAuthUpdated(n,(a,d)=>a?r(a):i(d))}):n}catch(n){throw this.client.connection&&n.statusCode===dn.Forbidden&&this.client.connection.connectionManager.actOnErrorFromAuthorize(n),n}}async _forceNewToken(e,t){this.tokenDetails=null,this._saveTokenOptions(e,t),xr(this.authOptions,this.logger);try{return this._ensureValidAuthCredentials(!0)}finally{delete this.tokenParams.timestamp,delete this.authOptions.queryTime}}async requestToken(e,t){let n=t||this.authOptions,i=e||Pe(this.tokenParams),r,a=this.client;if(n.authCallback)c.logAction(this.logger,c.LOG_MINOR,"Auth.requestToken()","using token auth with authCallback"),r=n.authCallback;else if(n.authUrl)c.logAction(this.logger,c.LOG_MINOR,"Auth.requestToken()","using token auth with authUrl"),r=(f,v)=>{let b=q({accept:"application/json, text/plain"},n.authHeaders),k=n.authMethod&&n.authMethod.toLowerCase()==="post",M,O=n.authUrl.indexOf("?");O>-1&&(M=at(n.authUrl.slice(O)),n.authUrl=n.authUrl.slice(0,O),k||(n.authParams=q(M,n.authParams)));let x=q({},n.authParams||{},f),V=L=>{var W,ne;let ce=(W=L.body)!=null?W:null,ue=null;if(L.error)c.logAction(this.logger,c.LOG_MICRO,"Auth.requestToken().tokenRequestCallback","Received Error: "+te(L.error));else{let Oe=(ne=L.headers["content-type"])!=null?ne:null;Array.isArray(Oe)?ue=Oe.join(", "):ue=Oe,c.logAction(this.logger,c.LOG_MICRO,"Auth.requestToken().tokenRequestCallback","Received; content-type: "+ue+"; body: "+B(ce))}if(L.error){v(L.error,null);return}if(L.unpacked){v(null,ce);return}if(w.BufferUtils.isBuffer(ce)&&(ce=ce.toString()),!ue){v(new A("authUrl response is missing a content-type header",40170,401),null);return}let K=ue.indexOf("application/json")>-1,De=ue.indexOf("text/plain")>-1||ue.indexOf("application/jwt")>-1;if(!K&&!De){v(new A("authUrl responded with unacceptable content-type "+ue+", should be either text/plain, application/jwt or application/json",40170,401),null);return}if(K){if(ce.length>Qn){v(new A("authUrl response exceeded max permitted length",40170,401),null);return}try{ce=JSON.parse(ce)}catch(Oe){v(new A("Unexpected error processing authURL response; err = "+Oe.message,40170,401),null);return}}v(null,ce,ue)};if(c.logAction(this.logger,c.LOG_MICRO,"Auth.requestToken().tokenRequestCallback","Requesting token from "+n.authUrl+"; Params: "+JSON.stringify(x)+"; method: "+(k?"POST":"GET")),k){let L=b||{};L["content-type"]="application/x-www-form-urlencoded";let W=ot(x).slice(1);ge(this.client.http.doUri(we.Post,n.authUrl,L,W,M),(ne,ce)=>V(ne||ce))}else ge(this.client.http.doUri(we.Get,n.authUrl,b||{},null,x),(L,W)=>V(L||W))};else if(n.key)c.logAction(this.logger,c.LOG_MINOR,"Auth.requestToken()","using token auth with client-side signing"),r=(f,v)=>{ge(this.createTokenRequest(f,n),(b,k)=>v(b,k??null))};else{let f="Need a new token, but authOptions does not include any way to request one (no authUrl, authCallback, or key)";throw c.logAction(this.logger,c.LOG_ERROR,"Auth()","library initialized with a token literal without any way to renew the token when it expires (no authUrl, authCallback, or key). See https://help.ably.io/error/40171 for help"),new A(f,40171,403)}"capability"in i&&(i.capability=Cr(i.capability));let d=(f,v)=>{let b=f.keyName,k="/keys/"+b+"/requestToken",M=function(x){return a.baseUri(x)+k},O=F.defaultPostHeaders(this.client.options,{format:"json"});n.requestHeaders&&q(O,n.requestHeaders),c.logAction(this.logger,c.LOG_MICRO,"Auth.requestToken().requestToken","Sending POST to "+k+"; Token params: "+JSON.stringify(f)),ge(this.client.http.do(we.Post,M,O,JSON.stringify(f),null),(x,V)=>x?v(x):v(V.error,V.body,V.unpacked))};return new Promise((f,v)=>{let b=!1,k=this.client.options.timeouts.realtimeRequestTimeout,M=setTimeout(()=>{b=!0;let O="Token request callback timed out after "+k/1e3+" seconds";c.logAction(this.logger,c.LOG_ERROR,"Auth.requestToken()",O),v(new A(O,40170,401))},k);r(i,(O,x,V)=>{if(b)return;if(clearTimeout(M),O){c.logAction(this.logger,c.LOG_ERROR,"Auth.requestToken()","token request signing call returned error; err = "+te(O)),v(Ar(O));return}if(typeof x=="string"){x.length===0?v(new A("Token string is empty",40170,401)):x.length>Qn?v(new A("Token string exceeded max permitted length (was "+x.length+" bytes)",40170,401)):x==="undefined"||x==="null"?v(new A("Token string was literal null/undefined",40170,401)):x[0]==="{"&&!(V&&V.indexOf("application/jwt")>-1)?v(new A("Token was double-encoded; make sure you're not JSON-encoding an already encoded token request or details",40170,401)):f({token:x});return}if(typeof x!="object"||x===null){let W="Expected token request callback to call back with a token string or token request/details object, but got a "+typeof x;c.logAction(this.logger,c.LOG_ERROR,"Auth.requestToken()",W),v(new A(W,40170,401));return}let L=JSON.stringify(x).length;if(L>Qn&&!n.suppressMaxLengthCheck){v(new A("Token request/details object exceeded max permitted stringified size (was "+L+" bytes)",40170,401));return}if("issued"in x){f(x);return}if(!("keyName"in x)){let W="Expected token request callback to call back with a token string, token request object, or token details object";c.logAction(this.logger,c.LOG_ERROR,"Auth.requestToken()",W),v(new A(W,40170,401));return}d(x,(W,ne,ce)=>{if(W){c.logAction(this.logger,c.LOG_ERROR,"Auth.requestToken()","token request API call returned error; err = "+te(W)),v(Ar(W));return}ce||(ne=JSON.parse(ne)),c.logAction(this.logger,c.LOG_MINOR,"Auth.getToken()","token received"),f(ne)})})})}async createTokenRequest(e,t){t=t||this.authOptions,e=e||Pe(this.tokenParams);let n=t.key;if(!n)throw new A("No key specified",40101,403);let i=n.split(":"),r=i[0],a=i[1];if(!a)throw new A("Invalid key specified",40101,403);if(e.clientId==="")throw new A("clientId can\u2019t be an empty string",40012,400);"capability"in e&&(e.capability=Cr(e.capability));let d=q({keyName:r},e),f=e.clientId||"",v=e.ttl||"",b=e.capability||"";d.timestamp||(d.timestamp=await this._getTimestamp(t&&t.queryTime));let k=d.nonce||(d.nonce=Ra()),M=d.timestamp,O=d.keyName+`
`+v+`
`+b+`
`+f+`
`+M+`
`+k+`
`;return d.mac=d.mac||Oa(O,a),c.logAction(this.logger,c.LOG_MINOR,"Auth.getTokenRequest()","generated signed request"),d}async getAuthParams(){if(this.method=="basic")return{key:this.key};{let e=await this._ensureValidAuthCredentials(!1);if(!e)throw new Error("Auth.getAuthParams(): _ensureValidAuthCredentials returned no error or tokenDetails");return{access_token:e.token}}}async getAuthHeaders(){if(this.method=="basic")return{authorization:"Basic "+this.basicKey};{let e=await this._ensureValidAuthCredentials(!1);if(!e)throw new Error("Auth.getAuthParams(): _ensureValidAuthCredentials returned no error or tokenDetails");return{authorization:"Bearer "+cn(e.token)}}}_saveBasicOptions(e){this.method="basic",this.key=e.key,this.basicKey=cn(e.key),this.authOptions=e||{},"clientId"in e&&this._userSetClientId(e.clientId)}_saveTokenOptions(e,t){this.method="token",e&&(this.tokenParams=e),t&&(t.token&&(t.tokenDetails=typeof t.token=="string"?{token:t.token}:t.token),t.tokenDetails&&(this.tokenDetails=t.tokenDetails),"clientId"in t&&this._userSetClientId(t.clientId),this.authOptions=t)}async _ensureValidAuthCredentials(e){let t=this.tokenDetails;if(t){if(this._tokenClientIdMismatch(t.clientId))throw new A("Mismatch between clientId in token ("+t.clientId+") and current clientId ("+this.clientId+")",40102,403);if(!this.client.isTimeOffsetSet()||!t.expires||t.expires>=this.client.getTimestampUsingOffset())return c.logAction(this.logger,c.LOG_MINOR,"Auth.getToken()","using cached token; expires = "+t.expires),t;c.logAction(this.logger,c.LOG_MINOR,"Auth.getToken()","deleting expired token"),this.tokenDetails=null}let n=(this.waitingForTokenRequest||(this.waitingForTokenRequest=yr.create(this.logger))).createPromise();if(this.currentTokenRequestId!==null&&!e)return n;let i=this.currentTokenRequestId=Va(),r,a=null;try{r=await this.requestToken(this.tokenParams,this.authOptions)}catch(f){a=f}if(this.currentTokenRequestId>i)return c.logAction(this.logger,c.LOG_MINOR,"Auth._ensureValidAuthCredentials()","Discarding token request response; overtaken by newer one"),n;this.currentTokenRequestId=null;let d=this.waitingForTokenRequest;return this.waitingForTokenRequest=null,a?(d?.rejectAll(a),n):(d?.resolveAll(this.tokenDetails=r),n)}_userSetClientId(e){if(typeof e=="string"||e===null){if(e==="*")throw new A('Can\u2019t use "*" as a clientId as that string is reserved. (To change the default token request behaviour to use a wildcard clientId, instantiate the library with {defaultTokenParams: {clientId: "*"}}), or if calling authorize(), pass it in as a tokenParam: authorize({clientId: "*"}, authOptions)',40012,400);{let t=this._uncheckedSetClientId(e);if(t)throw t}}else throw new A("clientId must be either a string or null",40012,400)}_uncheckedSetClientId(e){if(this._tokenClientIdMismatch(e)){let t="Unexpected clientId mismatch: client has "+this.clientId+", requested "+e,n=new A(t,40102,401);return c.logAction(this.logger,c.LOG_ERROR,"Auth._uncheckedSetClientId()",t),n}else return this.clientId=this.tokenParams.clientId=e,null}_tokenClientIdMismatch(e){return!!(this.clientId&&this.clientId!=="*"&&e&&e!=="*"&&this.clientId!==e)}static isTokenErr(e){return e.code&&e.code>=40140&&e.code<40150}revokeTokens(e,t){return this.client.rest.revokeTokens(e,t)}async _getTimestamp(e){return this.client.getTimestamp(e||!!this.authOptions.queryTime)}},Je=La;function Xn(e){let t=[];if(e)for(let n in e)t.push(n+"="+e[n]);return t.join("&")}function ft(e,t){return e+(t?"?":"")+Xn(t)}function Na(e,t,n,i,r){e.error?c.logActionNoStrip(r,c.LOG_MICRO,"Http."+t+"()","Received Error; "+ft(n,i)+"; Error: "+te(e.error)):c.logActionNoStrip(r,c.LOG_MICRO,"Http."+t+"()","Received; "+ft(n,i)+"; Headers: "+Xn(e.headers)+"; StatusCode: "+e.statusCode+"; Body"+(w.BufferUtils.isBuffer(e.body)?" (Base64): "+w.BufferUtils.base64Encode(e.body):": "+e.body))}function Ba(e,t,n,i,r){r.shouldLog(c.LOG_MICRO)&&c.logActionNoStrip(r,c.LOG_MICRO,"Http."+e+"()","Sending; "+ft(t,i)+"; Body"+(w.BufferUtils.isBuffer(n)?" (Base64): "+w.BufferUtils.base64Encode(n):": "+n))}var Zn=class{constructor(e){this.client=e,this.platformHttp=new w.Http(e),this.checkConnectivity=this.platformHttp.checkConnectivity?()=>this.platformHttp.checkConnectivity():void 0}get logger(){var e,t;return(t=(e=this.client)==null?void 0:e.logger)!=null?t:c.defaultLogger}get supportsAuthHeaders(){return this.platformHttp.supportsAuthHeaders}get supportsLinkHeaders(){return this.platformHttp.supportsLinkHeaders}_getHosts(e){let t=e.connection,n=t&&t.connectionManager.host;return n?[n].concat(F.getFallbackHosts(e.options)):F.getHosts(e.options)}async do(e,t,n,i,r){try{let a=this.client;if(!a)return{error:new A("http.do called without client",5e4,500)};let d=typeof t=="function"?t:function(M){return a.baseUri(M)+t},f=a._currentFallback;if(f)if(f.validUntil>Date.now()){let M=await this.doUri(e,d(f.host),n,i,r);return M.error&&this.platformHttp.shouldFallback(M.error)?(a._currentFallback=null,this.do(e,t,n,i,r)):M}else a._currentFallback=null;let v=this._getHosts(a);if(v.length===1)return this.doUri(e,d(v[0]),n,i,r);let b=null,k=async(M,O)=>{let x=M.shift();b=b??new Date;let V=await this.doUri(e,d(x),n,i,r);return V.error&&this.platformHttp.shouldFallback(V.error)&&M.length?Date.now()-b.getTime()>a.options.timeouts.httpMaxRetryDuration?{error:new A(`Timeout for trying fallback hosts retries. Total elapsed time exceeded the ${a.options.timeouts.httpMaxRetryDuration}ms limit`,50003,500)}:k(M,!0):(O&&(a._currentFallback={host:x,validUntil:Date.now()+a.options.timeouts.fallbackRetryTimeout}),V)};return k(v)}catch(a){return{error:new A(`Unexpected error in Http.do: ${te(a)}`,500,5e4)}}}async doUri(e,t,n,i,r){try{Ba(e,t,i,r,this.logger);let a=await this.platformHttp.doUri(e,t,n,i,r);return this.logger.shouldLog(c.LOG_MICRO)&&Na(a,e,t,r,this.logger),a}catch(a){return{error:new A(`Unexpected error in Http.doUri: ${te(a)}`,500,5e4)}}}};function Ua(e,t,n,i){try{n.apply(t,i)}catch(r){c.logAction(e,c.LOG_ERROR,"EventEmitter.emit()","Unexpected listener exception: "+r+"; stack = "+(r&&r.stack))}}function ei(e,t,n){let i,r,a;for(let d=0;d<e.length;d++)if(i=e[d],n&&(i=i[n]),Array.isArray(i)){for(;(r=i.indexOf(t))!==-1;)i.splice(r,1);n&&i.length===0&&delete e[d][n]}else if(Q(i))for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&Array.isArray(i[a])&&ei([i],t,a)}var qa=class{constructor(e){this.logger=e,this.any=[],this.events=Object.create(null),this.anyOnce=[],this.eventsOnce=Object.create(null)}on(...e){if(e.length===1){let t=e[0];if(typeof t=="function")this.any.push(t);else throw new Error("EventListener.on(): Invalid arguments: "+w.Config.inspect(e))}if(e.length===2){let[t,n]=e;if(typeof n!="function")throw new Error("EventListener.on(): Invalid arguments: "+w.Config.inspect(e));if(Z(t))this.any.push(n);else if(Array.isArray(t))t.forEach(i=>{this.on(i,n)});else{if(typeof t!="string")throw new Error("EventListener.on(): Invalid arguments: "+w.Config.inspect(e));(this.events[t]||(this.events[t]=[])).push(n)}}}off(...e){if(e.length==0||Z(e[0])&&Z(e[1])){this.any=[],this.events=Object.create(null),this.anyOnce=[],this.eventsOnce=Object.create(null);return}let[t,n]=e,i=null,r=null;if(e.length===1||!n)typeof t=="function"?i=t:r=t;else{if(typeof n!="function")throw new Error("EventEmitter.off(): invalid arguments:"+w.Config.inspect(e));[r,i]=[t,n]}if(i&&Z(r)){ei([this.any,this.events,this.anyOnce,this.eventsOnce],i);return}if(Array.isArray(r)){r.forEach(a=>{this.off(a,i)});return}if(typeof r!="string")throw new Error("EventEmitter.off(): invalid arguments:"+w.Config.inspect(e));i?ei([this.events,this.eventsOnce],i,r):(delete this.events[r],delete this.eventsOnce[r])}listeners(e){if(e){let t=this.events[e]||[];return this.eventsOnce[e]&&Array.prototype.push.apply(t,this.eventsOnce[e]),t.length?t:null}return this.any.length?this.any:null}emit(e,...t){let n={event:e},i=[];this.anyOnce.length&&(Array.prototype.push.apply(i,this.anyOnce),this.anyOnce=[]),this.any.length&&Array.prototype.push.apply(i,this.any);let r=this.eventsOnce[e];r&&(Array.prototype.push.apply(i,r),delete this.eventsOnce[e]);let a=this.events[e];a&&Array.prototype.push.apply(i,a),i.forEach(d=>{Ua(this.logger,n,d,t)})}once(...e){let t=e.length;if(t===0||t===1&&typeof e[0]!="function"){let r=e[0];return new Promise(a=>{this.once(r,a)})}let[n,i]=e;if(e.length===1&&typeof n=="function")this.anyOnce.push(n);else if(Z(n)){if(typeof i!="function")throw new Error("EventEmitter.once(): Invalid arguments:"+w.Config.inspect(e));this.anyOnce.push(i)}else if(Array.isArray(n)){let r=this,a=function(){let d=Array.prototype.slice.call(arguments);if(n.forEach(function(f){r.off(f,a)}),typeof i!="function")throw new Error("EventEmitter.once(): Invalid arguments:"+w.Config.inspect(e));i.apply(this,d)};n.forEach(function(d){r.on(d,a)})}else{if(typeof n!="string")throw new Error("EventEmitter.once(): Invalid arguments:"+w.Config.inspect(e));let r=this.eventsOnce[n]||(this.eventsOnce[n]=[]);if(i){if(typeof i!="function")throw new Error("EventEmitter.once(): Invalid arguments:"+w.Config.inspect(e));r.push(i)}}}async whenState(e,t){if(typeof e!="string"||typeof t!="string")throw new Error("whenState requires a valid state String argument");return e===t?null:this.once(e)}},ke=qa,j={HEARTBEAT:0,ACK:1,NACK:2,CONNECT:3,CONNECTED:4,DISCONNECT:5,DISCONNECTED:6,CLOSE:7,CLOSED:8,ERROR:9,ATTACH:10,ATTACHED:11,DETACH:12,DETACHED:13,PRESENCE:14,MESSAGE:15,SYNC:16,AUTH:17,ACTIVATE:18,OBJECT:19,OBJECT_SYNC:20,ANNOTATION:21},Sr=[];Object.keys(j).forEach(function(e){Sr[j[e]]=e});var Ee={HAS_PRESENCE:1,HAS_BACKLOG:2,RESUMED:4,TRANSIENT:16,ATTACH_RESUME:32,HAS_OBJECTS:128,PRESENCE:65536,PUBLISH:1<<17,SUBSCRIBE:1<<18,PRESENCE_SUBSCRIBE:1<<19,ANNOTATION_PUBLISH:1<<21,ANNOTATION_SUBSCRIBE:1<<22,OBJECT_SUBSCRIBE:1<<24,OBJECT_PUBLISH:1<<25},Da=Object.keys(Ee);Ee.MODE_ALL=Ee.PRESENCE|Ee.PUBLISH|Ee.SUBSCRIBE|Ee.PRESENCE_SUBSCRIBE|Ee.ANNOTATION_PUBLISH|Ee.ANNOTATION_SUBSCRIBE|Ee.OBJECT_SUBSCRIBE|Ee.OBJECT_PUBLISH;var Mr=["PRESENCE","PUBLISH","SUBSCRIBE","PRESENCE_SUBSCRIBE","ANNOTATION_PUBLISH","ANNOTATION_SUBSCRIBE","OBJECT_SUBSCRIBE","OBJECT_PUBLISH"];function Ha(e){return!e||!e.channelOptions?{channelOptions:e,plugins:{},baseEncodedPreviousPayload:void 0}:e}function Rr(e,t,n){if(n&&n.cipher){e||Me("Crypto");let i=e.getCipher(n.cipher,t);return{cipher:i.cipherParams,channelCipher:i.cipher}}return n??{}}async function Ga(e,t){let{data:n,encoding:i}=await Tr(e.data,e.encoding,t);return e.data=n,e.encoding=i,e}async function Tr(e,t,n){let i=n.channelCipher,r=e,a=t?t+"/":"";w.BufferUtils.isBuffer(r)||(r=w.BufferUtils.utf8Encode(String(r)),a=a+"utf-8/");let d=await i.encrypt(r);return a=a+"cipher+"+i.algorithm,{data:d,encoding:a}}async function ti(e,t){let{data:n,encoding:i}=Or(e.data,e.encoding);return e.data=n,e.encoding=i,t!=null&&t.cipher?Ga(e,t):e}function Or(e,t){if(typeof e=="string"||w.BufferUtils.isBuffer(e)||e===null||e===void 0)return{data:e,encoding:t};if(Q(e)||Array.isArray(e))return{data:JSON.stringify(e),encoding:t?t+"/json":"json"};throw new A("Data type is unsupported",40013,400)}async function ni(e,t){let{data:n,encoding:i,error:r}=await Ir(e.data,e.encoding,t);if(e.data=n,e.encoding=i,r)throw r}async function Ir(e,t,n){let i=Ha(n),r=e,a=e,d=t,f;if(t){let v=t.split("/"),b,k=v.length,M="";try{for(;(b=k)>0;){let O=v[--k].match(/([-\w]+)(\+([\w-]+))?/);if(!O)break;switch(M=O[1],M){case"base64":a=w.BufferUtils.base64Decode(String(a)),b==v.length&&(r=a);continue;case"utf-8":a=w.BufferUtils.utf8Decode(a);continue;case"json":a=JSON.parse(a);continue;case"cipher":if(i.channelOptions!=null&&i.channelOptions.cipher&&i.channelOptions.channelCipher){let x=O[3],V=i.channelOptions.channelCipher;if(x!=V.algorithm)throw new Error("Unable to decrypt message with given cipher; incompatible cipher params");a=await V.decrypt(a);continue}else throw new Error("Unable to decrypt message; not an encrypted channel");case"vcdiff":if(!i.plugins||!i.plugins.vcdiff)throw new A("Missing Vcdiff decoder (https://github.com/ably-forks/vcdiff-decoder)",40019,400);if(typeof Uint8Array>"u")throw new A("Delta decoding not supported on this browser (need ArrayBuffer & Uint8Array)",40020,400);try{let x=i.baseEncodedPreviousPayload;typeof x=="string"&&(x=w.BufferUtils.utf8Encode(x));let V=w.BufferUtils.toBuffer(x);a=w.BufferUtils.toBuffer(a),a=w.BufferUtils.arrayBufferViewToBuffer(i.plugins.vcdiff.decode(a,V)),r=a}catch(x){throw new A("Vcdiff delta decode failed with "+x,40018,400)}continue;default:throw new Error("Unknown encoding")}}}catch(O){let x=O;f=new A(`Error processing the ${M} encoding, decoder returned \u2018${x.message}\u2019`,x.code||40013,400)}finally{d=b<=0?null:v.slice(0,b).join("/")}}return f?{error:f,data:a,encoding:d}:(i.baseEncodedPreviousPayload=r,{data:a,encoding:d})}function ii(...e){let t=e.length>0?"json":"msgpack",{data:n,encoding:i}=Pr(this.data,this.encoding,t);return Object.assign({},this,{encoding:i,data:n})}function Pr(e,t,n){return!e||!w.BufferUtils.isBuffer(e)?{data:e,encoding:t}:n==="msgpack"?{data:w.BufferUtils.toBuffer(e),encoding:t}:{data:w.BufferUtils.base64Encode(e),encoding:t?t+"/base64":"base64"}}var un={encryptData:Tr,encodeData:Or,encodeDataForWire:Pr,decodeData:Ir};function pn(e){let{id:t,connectionId:n,timestamp:i}=e,r;switch(e.action){case j.MESSAGE:{r=e.messages;break}case j.PRESENCE:case j.SYNC:r=e.presence;break;case j.ANNOTATION:r=e.annotations;break;case j.OBJECT:case j.OBJECT_SYNC:r=e.state;break;default:throw new A("Unexpected action "+e.action,4e4,400)}for(let a=0;a<r.length;a++){let d=r[a];d.connectionId||(d.connectionId=n),d.timestamp||(d.timestamp=i),t&&!d.id&&(d.id=t+":"+a)}}function gt(e,t){let n="["+t;for(let i in e)i==="data"?typeof e.data=="string"?n+="; data="+e.data:w.BufferUtils.isBuffer(e.data)?n+="; data (buffer)="+w.BufferUtils.base64Encode(e.data):typeof e.data<"u"&&(n+="; data (json)="+JSON.stringify(e.data)):i&&(i==="extras"||i==="operation")?n+="; "+i+"="+JSON.stringify(e[i]):i==="version"?n+="; version="+JSON.stringify(e[i]):i==="annotations"?n+="; annotations="+JSON.stringify(e[i]):e[i]!==void 0&&(n+="; "+i+"="+e[i]);return n+="]",n}var mt=class{},Er=class{constructor(e){this.Platform=w,this.ErrorInfo=A,this.Logger=c,this.Defaults=F,this.Utils=ie,this.EventEmitter=ke,this.MessageEncoding=un;var t,n,i,r,a,d,f,v,b,k,M,O;this._additionalHTTPRequestImplementations=(t=e.plugins)!=null?t:null,this.logger=new c,this.logger.setLog(e.logLevel,e.logHandler),c.logAction(this.logger,c.LOG_MICRO,"BaseClient()","initialized with clientOptions "+w.Config.inspect(e)),this._MsgPack=(i=(n=e.plugins)==null?void 0:n.MsgPack)!=null?i:null;let x=this.options=F.normaliseOptions(e,this._MsgPack,this.logger);if(x.key){let V=x.key.match(/^([^:\s]+):([^:.\s]+)$/);if(!V){let L="invalid key parameter";throw c.logAction(this.logger,c.LOG_ERROR,"BaseClient()",L),new A(L,40400,404)}x.keyName=V[1],x.keySecret=V[2]}if("clientId"in x)if(typeof x.clientId=="string"||x.clientId===null){if(x.clientId==="*")throw new A('Can\u2019t use "*" as a clientId as that string is reserved. (To change the default token request behaviour to use a wildcard clientId, use {defaultTokenParams: {clientId: "*"}})',40012,400)}else throw new A("clientId must be either a string or null",40012,400);c.logAction(this.logger,c.LOG_MINOR,"BaseClient()","started; version = "+F.version),this._currentFallback=null,this.serverTimeOffset=null,this.http=new Zn(this),this.auth=new Je(this,x),this._rest=(r=e.plugins)!=null&&r.Rest?new e.plugins.Rest(this):null,this._Crypto=(d=(a=e.plugins)==null?void 0:a.Crypto)!=null?d:null,this.__FilteredSubscriptions=(v=(f=e.plugins)==null?void 0:f.MessageInteractions)!=null?v:null,this._Annotations=(k=(b=e.plugins)==null?void 0:b.Annotations)!=null?k:null,this._liveObjectsPlugin=(O=(M=e.plugins)==null?void 0:M.LiveObjects)!=null?O:null}get rest(){return this._rest||Me("Rest"),this._rest}get _FilteredSubscriptions(){return this.__FilteredSubscriptions||Me("MessageInteractions"),this.__FilteredSubscriptions}get channels(){return this.rest.channels}get push(){return this.rest.push}device(){var e;return(!((e=this.options.plugins)!=null&&e.Push)||!this.push.LocalDevice)&&Me("Push"),this._device||(this._device=this.push.LocalDevice.load(this)),this._device}baseUri(e){return F.getHttpScheme(this.options)+e+":"+F.getPort(this.options,!1)}async stats(e){return this.rest.stats(e)}async time(e){return this.rest.time(e)}async request(e,t,n,i,r,a){return this.rest.request(e,t,n,i,r,a)}batchPublish(e){return this.rest.batchPublish(e)}batchPresence(e){return this.rest.batchPresence(e)}setLog(e){this.logger.setLog(e.level,e.handler)}async getTimestamp(e){return!this.isTimeOffsetSet()&&e?this.time():this.getTimestampUsingOffset()}getTimestampUsingOffset(){return Date.now()+(this.serverTimeOffset||0)}isTimeOffsetSet(){return this.serverTimeOffset!==null}};Er.Platform=w;var Vr=Er,ja=class xt{toJSON(){var t,n,i;return{id:this.id,deviceSecret:this.deviceSecret,platform:this.platform,formFactor:this.formFactor,clientId:this.clientId,metadata:this.metadata,deviceIdentityToken:this.deviceIdentityToken,push:{recipient:(t=this.push)==null?void 0:t.recipient,state:(n=this.push)==null?void 0:n.state,error:(i=this.push)==null?void 0:i.error}}}toString(){var t,n,i,r;let a="[DeviceDetails";return this.id&&(a+="; id="+this.id),this.platform&&(a+="; platform="+this.platform),this.formFactor&&(a+="; formFactor="+this.formFactor),this.clientId&&(a+="; clientId="+this.clientId),this.metadata&&(a+="; metadata="+this.metadata),this.deviceIdentityToken&&(a+="; deviceIdentityToken="+JSON.stringify(this.deviceIdentityToken)),(t=this.push)!=null&&t.recipient&&(a+="; push.recipient="+JSON.stringify(this.push.recipient)),(n=this.push)!=null&&n.state&&(a+="; push.state="+this.push.state),(i=this.push)!=null&&i.error&&(a+="; push.error="+JSON.stringify(this.push.error)),(r=this.push)!=null&&r.metadata&&(a+="; push.metadata="+this.push.metadata),a+="]",a}static toRequestBody(t,n,i){return qe(t,n,i)}static fromResponseBody(t,n,i){return i&&(t=de(t,n,i)),Array.isArray(t)?xt.fromValuesArray(t):xt.fromValues(t)}static fromValues(t){return t.error=t.error&&A.fromValues(t.error),Object.assign(new xt,t)}static fromLocalDevice(t){return Object.assign(new xt,t)}static fromValuesArray(t){let n=t.length,i=new Array(n);for(let r=0;r<n;r++)i[r]=xt.fromValues(t[r]);return i}},bt=ja;async function Lr(e,t,n,i){if(e.http.supportsAuthHeaders){let r=await e.auth.getAuthHeaders();return i(q(r,t),n)}else{let r=await e.auth.getAuthParams();return i(t,q(r,n))}}function Fa(e,t,n){if(e.err&&!e.body)return{err:e.err};if(e.statusCode===dn.NoContent)return I(y({},e),{body:[],unpacked:!0});let i=e.body;if(!e.unpacked)try{i=de(i,t,n)}catch(f){return an(f)?{err:f}:{err:new pe(te(f),null)}}if(!i)return{err:new pe("unenvelope(): Response body is missing",null)};let{statusCode:r,response:a,headers:d}=i;if(r===void 0)return I(y({},e),{body:i,unpacked:!0});if(r<200||r>=300){let f=a&&a.error||e.err;return f||(f=new Error("Error in unenveloping "+i),f.statusCode=r),{err:f,body:a,headers:d,unpacked:!0,statusCode:r}}return{err:e.err,body:a,headers:d,unpacked:!0,statusCode:r}}function Wa(e,t,n,i,r){e.err?c.logAction(r,c.LOG_MICRO,"Resource."+t+"()","Received Error; "+ft(n,i)+"; Error: "+te(e.err)):c.logAction(r,c.LOG_MICRO,"Resource."+t+"()","Received; "+ft(n,i)+"; Headers: "+Xn(e.headers)+"; StatusCode: "+e.statusCode+"; Body: "+(w.BufferUtils.isBuffer(e.body)?" (Base64): "+w.BufferUtils.base64Encode(e.body):": "+w.Config.inspect(e.body)))}var za=class kt{static async get(t,n,i,r,a,d){return kt.do(we.Get,t,n,null,i,r,a,d??!1)}static async delete(t,n,i,r,a,d){return kt.do(we.Delete,t,n,null,i,r,a,d)}static async post(t,n,i,r,a,d,f){return kt.do(we.Post,t,n,i,r,a,d,f)}static async patch(t,n,i,r,a,d,f){return kt.do(we.Patch,t,n,i,r,a,d,f)}static async put(t,n,i,r,a,d,f){return kt.do(we.Put,t,n,i,r,a,d,f)}static async do(t,n,i,r,a,d,f,v){f&&((d=d||{}).envelope=f);let b=n.logger;async function k(O,x){var V;if(b.shouldLog(c.LOG_MICRO)){let W=r;if(((V=O["content-type"])==null?void 0:V.indexOf("msgpack"))>0)try{n._MsgPack||Me("MsgPack"),W=n._MsgPack.decode(r)}catch(ne){c.logAction(b,c.LOG_MICRO,"Resource."+t+"()","Sending MsgPack Decoding Error: "+te(ne))}c.logAction(b,c.LOG_MICRO,"Resource."+t+"()","Sending; "+ft(i,x)+"; Body: "+W)}let L=await n.http.do(t,i,O,r,x);return L.error&&Je.isTokenErr(L.error)?(await n.auth.authorize(null,null),Lr(n,O,x,k)):{err:L.error,body:L.body,headers:L.headers,unpacked:L.unpacked,statusCode:L.statusCode}}let M=await Lr(n,a,d,k);if(f&&(M=Fa(M,n._MsgPack,f)),b.shouldLog(c.LOG_MICRO)&&Wa(M,t,i,d,b),v){if(M.err)throw M.err;{let O=y({},M);return delete O.err,O}}return M}},me=za;function $a(e){let t=e.match(/^\.\/(\w+)\?(.*)$/);return t&&t[2]&&at(t[2])}function Ka(e){typeof e=="string"&&(e=e.split(","));let t={};for(let n=0;n<e.length;n++){let i=e[n].match(/^\s*<(.+)>;\s*rel="(\w+)"$/);if(i){let r=$a(i[1]);r&&(t[i[2]]=r)}}return t}function Ja(e,t,n){return!(n&&(t||typeof e.code=="number"))}var Ya=class{constructor(e,t,n,i,r,a){this.client=e,this.path=t,this.headers=n,this.envelope=i??null,this.bodyHandler=r,this.useHttpPaginatedResponse=a||!1}get logger(){return this.client.logger}async get(e){let t=await me.get(this.client,this.path,this.headers,e,this.envelope,!1);return this.handlePage(t)}async delete(e){let t=await me.delete(this.client,this.path,this.headers,e,this.envelope,!1);return this.handlePage(t)}async post(e,t){let n=await me.post(this.client,this.path,t,this.headers,e,this.envelope,!1);return this.handlePage(n)}async put(e,t){let n=await me.put(this.client,this.path,t,this.headers,e,this.envelope,!1);return this.handlePage(n)}async patch(e,t){let n=await me.patch(this.client,this.path,t,this.headers,e,this.envelope,!1);return this.handlePage(n)}async handlePage(e){if(e.err&&Ja(e.err,e.body,this.useHttpPaginatedResponse))throw c.logAction(this.logger,c.LOG_ERROR,"PaginatedResource.handlePage()","Unexpected error getting resource: err = "+te(e.err)),e.err;let t,n,i;try{t=e.statusCode==dn.NoContent?[]:await this.bodyHandler(e.body,e.headers||{},e.unpacked)}catch(r){throw e.err||r}return e.headers&&(n=e.headers.Link||e.headers.link)&&(i=Ka(n)),this.useHttpPaginatedResponse?new Qa(this,t,e.headers||{},e.statusCode,i,e.err):new Nr(this,t,i)}},Nr=class{constructor(e,t,n){this.resource=e,this.items=t,this._relParams=n}async first(){if(this.hasFirst())return this.get(this._relParams.first);throw new A("No link to the first page of results",40400,404)}async current(){if(this.hasCurrent())return this.get(this._relParams.current);throw new A("No link to the current page of results",40400,404)}async next(){return this.hasNext()?this.get(this._relParams.next):null}hasFirst(){return this._relParams!=null&&"first"in this._relParams}hasCurrent(){return this._relParams!=null&&"current"in this._relParams}hasNext(){return this._relParams!=null&&"next"in this._relParams}isLast(){return!this.hasNext()}async get(e){let t=this.resource,n=await me.get(t.client,t.path,t.headers,e,t.envelope,!1);return t.handlePage(n)}},Qa=class extends Nr{constructor(e,t,n,i,r,a){super(e,t,r),this.statusCode=i,this.success=i<300&&i>=200,this.headers=n,this.errorCode=a&&a.code,this.errorMessage=a&&a.message,this.errorDetail=a?.detail}toJSON(){return{items:this.items,statusCode:this.statusCode,success:this.success,headers:this.headers,errorCode:this.errorCode,errorMessage:this.errorMessage,errorDetail:this.errorDetail}}},ze=Ya,Br=class $t{toJSON(){return{channel:this.channel,deviceId:this.deviceId,clientId:this.clientId}}toString(){let t="[PushChannelSubscription";return this.channel&&(t+="; channel="+this.channel),this.deviceId&&(t+="; deviceId="+this.deviceId),this.clientId&&(t+="; clientId="+this.clientId),t+="]",t}static fromResponseBody(t,n,i){return i&&(t=de(t,n,i)),Array.isArray(t)?$t.fromValuesArray(t):$t.fromValues(t)}static fromValues(t){return Object.assign(new $t,t)}static fromValuesArray(t){let n=t.length,i=new Array(n);for(let r=0;r<n;r++)i[r]=$t.fromValues(t[r]);return i}};Br.toRequestBody=qe;var Xa=Br,fn=Xa,Za=class{constructor(e){var t;this.client=e,this.admin=new ec(e),w.Config.push&&((t=e.options.plugins)!=null&&t.Push)&&(this.stateMachine=new e.options.plugins.Push.ActivationStateMachine(e),this.LocalDevice=e.options.plugins.Push.localDeviceFactory(bt))}async activate(e,t){await new Promise((n,i)=>{var r;if(!((r=this.client.options.plugins)!=null&&r.Push)){i(ln("Push"));return}if(!this.stateMachine){i(new A("This platform is not supported as a target of push notifications",4e4,400));return}if(this.stateMachine.activatedCallback){i(new A("Activation already in progress",4e4,400));return}this.stateMachine.activatedCallback=a=>{if(a){i(a);return}n()},this.stateMachine.updateFailedCallback=t,this.stateMachine.handleEvent(new this.client.options.plugins.Push.CalledActivate(this.stateMachine,e))})}async deactivate(e){await new Promise((t,n)=>{var i;if(!((i=this.client.options.plugins)!=null&&i.Push)){n(ln("Push"));return}if(!this.stateMachine){n(new A("This platform is not supported as a target of push notifications",4e4,400));return}if(this.stateMachine.deactivatedCallback){n(new A("Deactivation already in progress",4e4,400));return}this.stateMachine.deactivatedCallback=r=>{if(r){n(r);return}t()},this.stateMachine.handleEvent(new this.client.options.plugins.Push.CalledDeactivate(this.stateMachine,e))})}},ec=class{constructor(e){this.client=e,this.deviceRegistrations=new tc(e),this.channelSubscriptions=new nc(e)}async publish(e,t){let n=this.client,i=n.options.useBinaryProtocol?"msgpack":"json",r=F.defaultPostHeaders(n.options),a={},d=q({recipient:e},t);q(r,n.options.headers),n.options.pushFullWait&&q(a,{fullWait:"true"});let f=qe(d,n._MsgPack,i);await me.post(n,"/push/publish",f,r,a,null,!0)}},tc=class{constructor(e){this.client=e}async save(e){let t=this.client,n=bt.fromValues(e),i=t.options.useBinaryProtocol?"msgpack":"json",r=F.defaultPostHeaders(t.options),a={};q(r,t.options.headers),t.options.pushFullWait&&q(a,{fullWait:"true"});let d=qe(n,t._MsgPack,i),f=await me.put(t,"/push/deviceRegistrations/"+encodeURIComponent(e.id),d,r,a,null,!0);return bt.fromResponseBody(f.body,t._MsgPack,f.unpacked?void 0:i)}async get(e){let t=this.client,n=t.options.useBinaryProtocol?"msgpack":"json",i=F.defaultGetHeaders(t.options),r=e.id||e;if(typeof r!="string"||!r.length)throw new A("First argument to DeviceRegistrations#get must be a deviceId string or DeviceDetails",4e4,400);q(i,t.options.headers);let a=await me.get(t,"/push/deviceRegistrations/"+encodeURIComponent(r),i,{},null,!0);return bt.fromResponseBody(a.body,t._MsgPack,a.unpacked?void 0:n)}async list(e){let t=this.client,n=t.options.useBinaryProtocol?"msgpack":"json",i=this.client.http.supportsLinkHeaders?void 0:n,r=F.defaultGetHeaders(t.options);return q(r,t.options.headers),new ze(t,"/push/deviceRegistrations",r,i,async function(a,d,f){return bt.fromResponseBody(a,t._MsgPack,f?void 0:n)}).get(e)}async remove(e){let t=this.client,n=F.defaultGetHeaders(t.options),i={},r=e.id||e;if(typeof r!="string"||!r.length)throw new A("First argument to DeviceRegistrations#remove must be a deviceId string or DeviceDetails",4e4,400);q(n,t.options.headers),t.options.pushFullWait&&q(i,{fullWait:"true"}),await me.delete(t,"/push/deviceRegistrations/"+encodeURIComponent(r),n,i,null,!0)}async removeWhere(e){let t=this.client,n=t.options.useBinaryProtocol?"msgpack":"json",i=F.defaultGetHeaders(t.options,{format:n});q(i,t.options.headers),t.options.pushFullWait&&q(e,{fullWait:"true"}),await me.delete(t,"/push/deviceRegistrations",i,e,null,!0)}},nc=class Ns{constructor(t){this.remove=Ns.prototype.removeWhere,this.client=t}async save(t){let n=this.client,i=fn.fromValues(t),r=n.options.useBinaryProtocol?"msgpack":"json",a=F.defaultPostHeaders(n.options),d={};q(a,n.options.headers),n.options.pushFullWait&&q(d,{fullWait:"true"});let f=qe(i,n._MsgPack,r),v=await me.post(n,"/push/channelSubscriptions",f,a,d,null,!0);return fn.fromResponseBody(v.body,n._MsgPack,v.unpacked?void 0:r)}async list(t){let n=this.client,i=n.options.useBinaryProtocol?"msgpack":"json",r=this.client.http.supportsLinkHeaders?void 0:i,a=F.defaultGetHeaders(n.options);return q(a,n.options.headers),new ze(n,"/push/channelSubscriptions",a,r,async function(d,f,v){return fn.fromResponseBody(d,n._MsgPack,v?void 0:i)}).get(t)}async removeWhere(t){let n=this.client,i=n.options.useBinaryProtocol?"msgpack":"json",r=F.defaultGetHeaders(n.options,{format:i});q(r,n.options.headers),n.options.pushFullWait&&q(t,{fullWait:"true"}),await me.delete(n,"/push/channelSubscriptions",r,t,null,!0)}async listChannels(t){let n=this.client,i=n.options.useBinaryProtocol?"msgpack":"json",r=this.client.http.supportsLinkHeaders?void 0:i,a=F.defaultGetHeaders(n.options);return q(a,n.options.headers),n.options.pushFullWait&&q(t,{fullWait:"true"}),new ze(n,"/push/channels",a,r,async function(d,f,v){let b=!v&&i?de(d,n._MsgPack,i):d;for(let k=0;k<b.length;k++)b[k]=String(b[k]);return b}).get(t)}},ic=Za,Ur=["absent","present","enter","leave","update"];async function qr(e,t,n,i){let r=Rr(t,e,i??null);return Et.fromValues(n).decode(r,e)}async function rc(e,t,n,i){return Promise.all(n.map(function(r){return qr(e,t,r,i)}))}async function sc(e,t){return Et.fromValues(e).decode(t.channelOptions,t.logger)}async function Dr(e,t){return Promise.all(e.map(function(n){return sc(n,t)}))}var Hr=class Kt extends mt{isSynthesized(){return!this.id||!this.connectionId?!0:this.id.substring(this.connectionId.length,0)!==this.connectionId}parseId(){if(!this.id)throw new Error("parseId(): Presence message does not contain an id");let t=this.id.split(":");return{connectionId:t[0],msgSerial:parseInt(t[1],10),index:parseInt(t[2],10)}}async encode(t){let n=Object.assign(new Et,this,{action:Ur.indexOf(this.action||"present")});return ti(n,t)}static fromValues(t){return Object.assign(new Kt,t)}static fromValuesArray(t){return t.map(n=>Kt.fromValues(n))}static fromData(t){return t instanceof Kt?t:Kt.fromValues({data:t})}toString(){return gt(this,"PresenceMessage")}},Et=class Mi extends mt{toJSON(...t){return ii.call(this,...t)}static fromValues(t){return Object.assign(new Mi,t)}static fromValuesArray(t){return t.map(n=>Mi.fromValues(n))}async decode(t,n){let i=Object.assign(new Hr,I(y({},this),{action:Ur[this.action]}));try{await ni(i,t)}catch(r){c.logAction(n,c.LOG_ERROR,"WirePresenceMessage.decode()",te(r))}return i}toString(){return gt(this,"WirePresenceMessage")}},Ye=Hr,oc=class{constructor(e){this.channel=e}get logger(){return this.channel.logger}async get(e){c.logAction(this.logger,c.LOG_MICRO,"RestPresence.get()","channel = "+this.channel.name);let t=this.channel.client,n=t.options.useBinaryProtocol?"msgpack":"json",i=this.channel.client.http.supportsLinkHeaders?void 0:n,r=F.defaultGetHeaders(t.options);return q(r,t.options.headers),new ze(t,this.channel.client.rest.presenceMixin.basePath(this),r,i,async(a,d,f)=>{let v=f?a:de(a,t._MsgPack,n);return Dr(v,this.channel)}).get(e)}async history(e){return c.logAction(this.logger,c.LOG_MICRO,"RestPresence.history()","channel = "+this.channel.name),this.channel.client.rest.presenceMixin.history(this,e)}},ac=oc,Gr=["message.create","message.update","message.delete","meta","message.summary","message.append"];function cc(e){return Gr[e||0]||"unknown"}function lc(e){let t=0;return e.name&&(t+=e.name.length),e.clientId&&(t+=e.clientId.length),e.extras&&(t+=JSON.stringify(e.extras).length),e.data&&(t+=$(e.data)),t}async function jr(e,t,n,i){let r=Rr(t,e,i??null);return Vt.fromValues(n).decode(r,e)}async function hc(e,t,n,i){return Promise.all(n.map(function(r){return jr(e,t,r,i)}))}async function Fr(e,t){return Vt.fromValues(e).decode(t.channelOptions,t.logger)}async function Wr(e,t){return Promise.all(e.map(function(n){return Fr(n,t)}))}async function zr(e,t){return Promise.all(e.map(n=>n.encode(t)))}var $r=qe;function Kr(e){let t,n=0;for(let i=0;i<e.length;i++)t=e[i],n+=t.size||(t.size=lc(t));return n}var Jr=class Ri extends mt{expandFields(){if(this.version||(this.version={}),!this.version.serial&&this.serial&&(this.version.serial=this.serial),!this.version.timestamp&&this.timestamp&&(this.version.timestamp=this.timestamp),this.annotations?this.annotations.summary||(this.annotations.summary={}):this.annotations={summary:{}},this.annotations&&this.annotations.summary)for(let[t,n]of Object.entries(this.annotations.summary))if(t.endsWith(":distinct.v1")||t.endsWith(":unique.v1")||t.endsWith(":multiple.v1"))for(let[,i]of Object.entries(n))i.clipped||(i.clipped=!1);else t.endsWith(":flag.v1")&&(n.clipped||(n.clipped=!1))}async encode(t){let n=Object.assign(new Vt,this,{action:Gr.indexOf(this.action||"message.create")});return ti(n,t)}static fromValues(t){return Object.assign(new Ri,t)}static fromValuesArray(t){return t.map(n=>Ri.fromValues(n))}toString(){return gt(this,"Message")}},Vt=class Ti extends mt{toJSON(...t){return ii.call(this,...t)}static fromValues(t){return Object.assign(new Ti,t)}static fromValuesArray(t){return t.map(n=>Ti.fromValues(n))}async decodeWithErr(t,n){let i=Object.assign(new Jr,I(y({},this),{action:cc(this.action)})),r;try{await ni(i,t)}catch(a){c.logAction(n,c.LOG_ERROR,"WireMessage.decode()",te(a)),r=a}return i.expandFields(),{decoded:i,err:r}}async decode(t,n){let{decoded:i}=await this.decodeWithErr(t,n);return i}toString(){return gt(this,"WireMessage")}},$e=Jr,dc=9;function uc(e){return e.every(function(t){return!t.id})}var pc=class{constructor(e,t,n){this._annotations=null;var i,r;c.logAction(e.logger,c.LOG_MINOR,"RestChannel()","started; name = "+t),this.name=t,this.client=e,this.presence=new ac(this),this.channelOptions=hn((i=e._Crypto)!=null?i:null,this.logger,n),(r=e.options.plugins)!=null&&r.Push&&(this._push=new e.options.plugins.Push.PushChannel(this)),e._Annotations&&(this._annotations=new e._Annotations.RestAnnotations(this)),e._liveObjectsPlugin&&(this._object=new e._liveObjectsPlugin.RestObject(this))}get annotations(){return this._annotations||Me("Annotations"),this._annotations}get push(){return this._push||Me("Push"),this._push}get object(){return this._object||Me("LiveObjects"),this._object}get logger(){return this.client.logger}setOptions(e){var t;this.channelOptions=hn((t=this.client._Crypto)!=null?t:null,this.logger,e)}async history(e){return c.logAction(this.logger,c.LOG_MICRO,"RestChannel.history()","channel = "+this.name),this.client.rest.channelMixin.history(this,e)}async publish(...e){let t=e[0],n=e[1],i,r;if(typeof t=="string"||t===null)i=[$e.fromValues({name:t,data:n})],r=e[2];else if(Q(t))i=[$e.fromValues(t)],r=e[1];else if(Array.isArray(t))i=$e.fromValuesArray(t),r=e[1];else throw new A("The single-argument form of publish() expects a message object or an array of message objects",40013,400);r||(r={});let a=this.client,d=a.options,f=d.useBinaryProtocol?"msgpack":"json",v=a.options.idempotentRestPublishing,b=F.defaultPostHeaders(a.options);if(q(b,d.headers),v&&uc(i)){let x=await Ie(dc);i.forEach(function(V,L){V.id=x+":"+L.toString()})}let k=await zr(i,this.channelOptions),M=Kr(k),O=d.maxMessageSize;if(M>O)throw new A(`Maximum size of messages that can be published at once exceeded (was ${M} bytes; limit is ${O} bytes)`,40009,400);return this._publish($r(k,a._MsgPack,f),b,r)}async _publish(e,t,n){let i=this.client,r=i.options.useBinaryProtocol?"msgpack":"json",{body:a,unpacked:d}=await me.post(i,i.rest.channelMixin.basePath(this)+"/messages",e,t,n,null,!0),f=(d?a:de(a,i._MsgPack,r))||{};return delete f.channel,delete f.messageId,f}async status(){return this.client.rest.channelMixin.status(this)}async getMessage(e){return c.logAction(this.logger,c.LOG_MICRO,"RestChannel.getMessage()","channel = "+this.name),this.client.rest.channelMixin.getMessage(this,e)}async updateMessage(e,t,n){return c.logAction(this.logger,c.LOG_MICRO,"RestChannel.updateMessage()","channel = "+this.name),this.client.rest.channelMixin.updateDeleteMessage(this,"message.update",e,t,n)}async deleteMessage(e,t,n){return c.logAction(this.logger,c.LOG_MICRO,"RestChannel.deleteMessage()","channel = "+this.name),this.client.rest.channelMixin.updateDeleteMessage(this,"message.delete",e,t,n)}async appendMessage(e,t,n){return c.logAction(this.logger,c.LOG_MICRO,"RestChannel.appendMessage()","channel = "+this.name),this.client.rest.channelMixin.updateDeleteMessage(this,"message.append",e,t,n)}async getMessageVersions(e,t){return c.logAction(this.logger,c.LOG_MICRO,"RestChannel.getMessageVersions()","channel = "+this.name),this.client.rest.channelMixin.getMessageVersions(this,e,t)}},fc=pc,gc=class Bs{constructor(t){this.entries=t&&t.entries||void 0,this.schema=t&&t.schema||void 0,this.appId=t&&t.appId||void 0,this.inProgress=t&&t.inProgress||void 0,this.unit=t&&t.unit||void 0,this.intervalId=t&&t.intervalId||void 0}static fromValues(t){return new Bs(t)}},mc=gc,Yr=class{static basePath(e){return"/channels/"+encodeURIComponent(e.name)}static history(e,t){let n=e.client,i=n.options.useBinaryProtocol?"msgpack":"json",r=e.client.http.supportsLinkHeaders?void 0:i,a=F.defaultGetHeaders(n.options);return q(a,n.options.headers),new ze(n,this.basePath(e)+"/messages",a,r,async function(d,f,v){let b=v?d:de(d,n._MsgPack,i);return Wr(b,e)}).get(t)}static async status(e){let t=e.client.options.useBinaryProtocol?"msgpack":"json",n=F.defaultPostHeaders(e.client.options);return(await me.get(e.client,this.basePath(e),n,{},t,!0)).body}static async getMessage(e,t){let n=typeof t=="string"?t:t.serial;if(!n)throw new A('This message lacks a serial. Make sure you have enabled "Message annotations, updates, and deletes" in channel settings on your dashboard.',40003,400);let i=e.client,r=i.options.useBinaryProtocol?"msgpack":"json",a=F.defaultGetHeaders(i.options);q(a,i.options.headers);let{body:d,unpacked:f}=await me.get(i,this.basePath(e)+"/messages/"+encodeURIComponent(n),a,{},null,!0),v=f?d:de(d,i._MsgPack,r);return Fr(v,e)}static async updateDeleteMessage(e,t,n,i,r){if(!n.serial)throw new A('This message lacks a serial and cannot be updated. Make sure you have enabled "Message annotations, updates, and deletes" in channel settings on your dashboard.',40003,400);let a=e.client,d=a.options.useBinaryProtocol?"msgpack":"json",f=F.defaultPostHeaders(a.options);q(f,a.options.headers);let v=$e.fromValues(n);v.action=t,v.version=i;let b=await v.encode(e.channelOptions),k=$r(b,a._MsgPack,d),M=me.patch,{body:O,unpacked:x}=await M(a,this.basePath(e)+"/messages/"+encodeURIComponent(n.serial),k,f,r||{},null,!0);return(x?O:de(O,a._MsgPack,d))||{versionSerial:null}}static getMessageVersions(e,t,n){let i=typeof t=="string"?t:t.serial;if(!i)throw new A('This message lacks a serial. Make sure you have enabled "Message annotations, updates, and deletes" in channel settings on your dashboard.',40003,400);let r=e.client,a=r.options.useBinaryProtocol?"msgpack":"json",d=e.client.http.supportsLinkHeaders?void 0:a,f=F.defaultGetHeaders(r.options);return q(f,r.options.headers),new ze(r,this.basePath(e)+"/messages/"+encodeURIComponent(i)+"/versions",f,d,async(v,b,k)=>{let M=k?v:de(v,r._MsgPack,a);return Wr(M,e)}).get(n||{})}},bc=class{static basePath(e){return Yr.basePath(e.channel)+"/presence"}static async history(e,t){let n=e.channel.client,i=n.options.useBinaryProtocol?"msgpack":"json",r=e.channel.client.http.supportsLinkHeaders?void 0:i,a=F.defaultGetHeaders(n.options);return q(a,n.options.headers),new ze(n,this.basePath(e)+"/history",a,r,async(d,f,v)=>{let b=v?d:de(d,n._MsgPack,i);return Dr(b,e.channel)}).get(t)}},Qr=class{constructor(e){this.channelMixin=Yr,this.presenceMixin=bc,this.Resource=me,this.PaginatedResource=ze,this.DeviceDetails=bt,this.PushChannelSubscription=fn,this.client=e,this.channels=new vc(this.client),this.push=new ic(this.client)}async stats(e){let t=F.defaultGetHeaders(this.client.options),n=this.client.options.useBinaryProtocol?"msgpack":"json",i=this.client.http.supportsLinkHeaders?void 0:n;return q(t,this.client.options.headers),new ze(this.client,"/stats",t,i,async(r,a,d)=>{let f=d?r:de(r,this.client._MsgPack,n);for(let v=0;v<f.length;v++)f[v]=mc.fromValues(f[v]);return f}).get(e)}async time(e){let t=F.defaultGetHeaders(this.client.options,{format:"json"});this.client.options.headers&&q(t,this.client.options.headers);let n=f=>this.client.baseUri(f)+"/time",{error:i,body:r,unpacked:a}=await this.client.http.do(we.Get,n,t,null,e);if(i)throw i;a||(r=JSON.parse(r));let d=r[0];if(!d)throw new A("Internal error (unexpected result type from GET /time)",5e4,500);return this.client.serverTimeOffset=d-Date.now(),d}async request(e,t,n,i,r,a){var d;let[f,v,b]=this.client.options.useBinaryProtocol?(this.client._MsgPack||Me("MsgPack"),[this.client._MsgPack.encode,this.client._MsgPack.decode,"msgpack"]):[JSON.stringify,JSON.parse,"json"],k=this.client.http.supportsLinkHeaders?void 0:b;i=i||{};let M=e.toLowerCase(),O=M=="get"?F.defaultGetHeaders(this.client.options,{format:b,protocolVersion:n}):F.defaultPostHeaders(this.client.options,{format:b,protocolVersion:n});typeof r!="string"&&(r=(d=f(r))!=null?d:null),q(O,this.client.options.headers),a&&q(O,a);let x=new ze(this.client,t,O,k,async function(V,L,W){return Ge(W?V:v(V))},!0);if(!w.Http.methods.includes(M))throw new A("Unsupported method "+M,40500,405);return w.Http.methodsWithBody.includes(M)?x[M](i,r):x[M](i)}async batchPublish(e){let t,n;Array.isArray(e)?(t=e,n=!1):(t=[e],n=!0);let i=this.client.options.useBinaryProtocol?"msgpack":"json",r=F.defaultPostHeaders(this.client.options);this.client.options.headers&&q(r,this.client.options.headers);let a=qe(t,this.client._MsgPack,i),d=await me.post(this.client,"/messages",a,r,{},null,!0),f=d.unpacked?d.body:de(d.body,this.client._MsgPack,i);return n?f[0]:f}async batchPresence(e){let t=this.client.options.useBinaryProtocol?"msgpack":"json",n=F.defaultGetHeaders(this.client.options);this.client.options.headers&&q(n,this.client.options.headers);let i=e.join(","),r=await me.get(this.client,"/presence",n,{channels:i},null,!0);return r.unpacked?r.body:de(r.body,this.client._MsgPack,t)}async revokeTokens(e,t){if(kr(this.client.options))throw new A("Cannot revoke tokens when using token auth",40162,401);let n=this.client.options.keyName,i=t??{},r=y({targets:e.map(b=>`${b.type}:${b.value}`)},i),a=this.client.options.useBinaryProtocol?"msgpack":"json",d=F.defaultPostHeaders(this.client.options);this.client.options.headers&&q(d,this.client.options.headers);let f=qe(r,this.client._MsgPack,a),v=await me.post(this.client,`/keys/${n}/revokeTokens`,f,d,{},null,!0);return v.unpacked?v.body:de(v.body,this.client._MsgPack,a)}},vc=class{constructor(e){this.client=e,this.all=Object.create(null)}get(e,t){e=String(e);let n=this.all[e];return n?t&&n.setOptions(t):this.all[e]=n=new fc(this.client,e,t),n}release(e){delete this.all[String(e)]}},yc=class extends Vr{constructor(e){super(F.objectifyOptions(e,!1,"BaseRest",c.defaultLogger,{Rest:Qr}))}},Xr={Rest:Qr},Zr=class extends $e{static async fromEncoded(e,t){return jr(c.defaultLogger,w.Crypto,e,t)}static async fromEncodedArray(e,t){return hc(c.defaultLogger,w.Crypto,e,t)}static fromValues(e){return $e.fromValues(e)}},es=class extends Ye{static async fromEncoded(e,t){return qr(c.defaultLogger,w.Crypto,e,t)}static async fromEncodedArray(e,t){return rc(c.defaultLogger,w.Crypto,e,t)}static fromValues(e){return Ye.fromValues(e)}},ts=["annotation.create","annotation.delete"];async function ns(e,t,n){return vt.fromValues(t).decode(n||{},e)}async function wc(e,t,n){return Promise.all(t.map(function(i){return ns(e,i,n)}))}async function _c(e,t){return vt.fromValues(e).decode(t.channelOptions,t.logger)}async function Ac(e,t){return Promise.all(e.map(function(n){return _c(n,t)}))}var is=class Oi extends mt{async encode(){let t=Object.assign(new vt,this,{action:ts.indexOf(this.action||"annotation.create")});return ti(t,{})}static fromValues(t){return Object.assign(new Oi,t)}static fromValuesArray(t){return t.map(n=>Oi.fromValues(n))}toString(){return gt(this,"Annotation")}},vt=class Ii extends mt{toJSON(...t){return ii.call(this,...t)}static fromValues(t){return Object.assign(new Ii,t)}static fromValuesArray(t){return t.map(n=>Ii.fromValues(n))}async decode(t,n){let i=Object.assign(new is,I(y({},this),{action:ts[this.action]}));try{await ni(i,t)}catch(r){c.logAction(n,c.LOG_ERROR,"WireAnnotation.decode()",te(r))}return i}toString(){return gt(this,"WireAnnotation")}},yt=is,rs=class extends yt{static async fromEncoded(e,t){return ns(c.defaultLogger,e,t)}static async fromEncodedArray(e,t){return wc(c.defaultLogger,e,t)}static fromValues(e){return yt.fromValues(e)}};function ss(e){let t;switch(typeof e){case"string":t=e;break;case"object":t=e.serial;break}if(!t||typeof t!="string")throw new A("First argument of annotations.publish() must be either a Message (or at least an object with a string `serial` property) or a message serial (string)",40003,400);return t}function os(e,t){let n=ss(e);if(!t||typeof t!="object")throw new A("Second argument of annotations.publish() must be an object (the intended annotation to publish)",40003,400);let i=yt.fromValues(t);return i.messageSerial=n,i.action||(i.action="annotation.create"),i}function as(e,t){return e.client.rest.channelMixin.basePath(e)+"/messages/"+encodeURIComponent(t)+"/annotations"}var Cc=class{constructor(e){this.channel=e}async publish(e,t){let n=os(e,t),i=await n.encode(),r=this.channel.client,a=r.options,d=a.useBinaryProtocol?"msgpack":"json",f=F.defaultPostHeaders(r.options),v={};q(f,r.options.headers);let b=qe([i],r._MsgPack,d);await me.post(r,as(this.channel,n.messageSerial),b,f,v,null,!0)}async delete(e,t){return t.action="annotation.delete",this.publish(e,t)}async get(e,t){let n=this.channel.client,i=ss(e),r=n.options.useBinaryProtocol?"msgpack":"json",a=n.http.supportsLinkHeaders?void 0:r,d=F.defaultGetHeaders(n.options);return q(d,n.options.headers),new ze(n,as(this.channel,i),d,a,async(f,v,b)=>{let k=b?f:de(f,n._MsgPack,r);return Ac(k,this.channel)}).get(t)}},gn=Cc,xc=qe;function mn(e){let t=[];if(e)for(let n=0;n<e.length;n++)t.push(e[n].toString());return"[ "+t.join(", ")+" ]"}function kc(e,t,n,i,r,a){let d=de(e,t,a);return ri(d,n,i,r)}function ri(e,t,n,i){let r;e.error&&(r=A.fromValues(e.error));let a;e.messages&&(a=Vt.fromValuesArray(e.messages));let d;t&&e.presence&&(d=t.WirePresenceMessage.fromValuesArray(e.presence));let f;n&&e.annotations&&(f=n.WireAnnotation.fromValuesArray(e.annotations));let v;return i&&e.state&&(v=i.WireObjectMessage.fromValuesArray(e.state,ie,un)),Object.assign(new oi,I(y({},e),{presence:d,messages:a,annotations:f,state:v,error:r}))}function cs(e){return t=>{var n;return ri(t,{PresenceMessage:Ye,WirePresenceMessage:Et},{Annotation:yt,WireAnnotation:vt,RealtimeAnnotations:ci,RestAnnotations:gn},(n=e?.LiveObjectsPlugin)!=null?n:null)}}function Ve(e){return Object.assign(new oi,e)}function si(e,t,n,i){let r="[ProtocolMessage";e.action!==void 0&&(r+="; action="+Sr[e.action]||e.action);let a=["id","channel","channelSerial","connectionId","count","msgSerial","timestamp"],d;for(let f=0;f<a.length;f++)d=a[f],e[d]!==void 0&&(r+="; "+d+"="+e[d]);if(e.messages&&(r+="; messages="+mn(Vt.fromValuesArray(e.messages))),e.presence&&t&&(r+="; presence="+mn(t.WirePresenceMessage.fromValuesArray(e.presence))),e.annotations&&n&&(r+="; annotations="+mn(n.WireAnnotation.fromValuesArray(e.annotations))),e.state&&i&&(r+="; state="+mn(i.WireObjectMessage.fromValuesArray(e.state,ie,un))),e.error&&(r+="; error="+A.fromValues(e.error).toString()),e.auth&&e.auth.accessToken&&(r+="; token="+e.auth.accessToken),e.flags&&(r+="; flags="+Da.filter(e.hasFlag).join(",")),e.params){let f="";sn(e.params,function(v){f.length>0&&(f+="; "),f+=v+"="+e.params[v]}),f.length>0&&(r+="; params=["+f+"]")}return r+="]",r}var oi=class{constructor(){this.hasFlag=e=>(this.flags&Ee[e])>0}setFlag(e){return this.flags=this.flags|Ee[e]}getMode(){return(this.flags||0)&Ee.MODE_ALL}encodeModesToFlags(e){e.forEach(t=>this.setFlag(t))}decodeModesFromFlags(){let e=[];return Mr.forEach(t=>{this.hasFlag(t)&&e.push(t)}),e.length>0?e:void 0}},Sc=oi,Mc=class{constructor(e,t,n,i,r){this.previous=e,this.current=t,t==="attached"&&(this.resumed=n,this.hasBacklog=i),r&&(this.reason=r)}},ai=Mc;function Rc(e){if(e&&"params"in e&&!Q(e.params))return new A("options.params must be an object",4e4,400);if(e&&"modes"in e){if(!Array.isArray(e.modes))return new A("options.modes must be an array",4e4,400);for(let t=0;t<e.modes.length;t++){let n=e.modes[t];if(!n||typeof n!="string"||!Mr.includes(String.prototype.toUpperCase.call(n)))return new A("Invalid channel mode: "+n,4e4,400)}}}var Tc=class Pi extends ke{constructor(t,n,i){var r,a;super(t.logger),this._annotations=null,this._mode=0,this.retryCount=0,this.history=async function(d){c.logAction(this.logger,c.LOG_MICRO,"RealtimeChannel.history()","channel = "+this.name);let f=this.client.rest.channelMixin;if(d&&d.untilAttach){if(this.state!=="attached")throw new A("option untilAttach requires the channel to be attached",4e4,400);if(!this.properties.attachSerial)throw new A("untilAttach was specified and channel is attached, but attachSerial is not defined",4e4,400);delete d.untilAttach,d.from_serial=this.properties.attachSerial}return f.history(this,d)},this.whenState=d=>ke.prototype.whenState.call(this,d,this.state),c.logAction(this.logger,c.LOG_MINOR,"RealtimeChannel()","started; name = "+n),this.name=n,this.channelOptions=hn((r=t._Crypto)!=null?r:null,this.logger,i),this.client=t,this._presence=t._RealtimePresence?new t._RealtimePresence.RealtimePresence(this):null,t._Annotations&&(this._annotations=new t._Annotations.RealtimeAnnotations(this)),this.connectionManager=t.connection.connectionManager,this.state="initialized",this.subscriptions=new ke(this.logger),this.syncChannelSerial=void 0,this.properties={attachSerial:void 0,channelSerial:void 0},this.setOptions(i),this.errorReason=null,this._attachResume=!1,this._decodingContext={channelOptions:this.channelOptions,plugins:t.options.plugins||{},baseEncodedPreviousPayload:void 0},this._lastPayload={messageId:null,protocolMessageChannelSerial:null,decodeFailureRecoveryInProgress:null},this._attachedReceived=new ke(this.logger),this.internalStateChanges=new ke(this.logger),(a=t.options.plugins)!=null&&a.Push&&(this._push=new t.options.plugins.Push.PushChannel(this)),t._liveObjectsPlugin&&(this._object=new t._liveObjectsPlugin.RealtimeObject(this))}get presence(){return this._presence||Me("RealtimePresence"),this._presence}get annotations(){return this._annotations||Me("Annotations"),this._annotations}get push(){return this._push||Me("Push"),this._push}get object(){return this._object||Me("LiveObjects"),this._object}emit(t,...n){super.emit(t,...n),this.internalStateChanges.emit(t,...n)}invalidStateError(){return new A("Channel operation failed as channel state is "+this.state,90001,400,this.errorReason||void 0)}static processListenerArgs(t){return t=Array.prototype.slice.call(t),typeof t[0]=="function"&&t.unshift(null),t}async setOptions(t){var n;let i=this.channelOptions,r=Rc(t);if(r)throw r;if(this.channelOptions=hn((n=this.client._Crypto)!=null?n:null,this.logger,t),this._decodingContext&&(this._decodingContext.channelOptions=this.channelOptions),this._shouldReattachToSetOptions(t,i))return this.attachImpl(),new Promise((a,d)=>{let f=()=>{this._attachedReceived.off(v),this.internalStateChanges.off(b)},v=()=>{f(),a()},b=k=>{f(),d(k.reason)};this._attachedReceived.once("attached",v),this.internalStateChanges.once(["detached","failed"],b)})}_shouldReattachToSetOptions(t,n){if(!(this.state==="attached"||this.state==="attaching"))return!1;if(t?.params){let i=ls(t.params),r=ls(n.params);if(Object.keys(i).length!==Object.keys(r).length||!or(r,i))return!0}return!!(t?.modes&&(!n.modes||!cr(t.modes,n.modes)))}async publish(...t){let n=t[0],i=t[1],r,a;if(typeof n=="string"||n===null||n===void 0)r=[$e.fromValues({name:n,data:i})],a=t[2];else if(Q(n))r=[$e.fromValues(n)],a=t[1];else if(Array.isArray(n))r=$e.fromValuesArray(n),a=t[1];else throw new A("The single-argument form of publish() expects a message object or an array of message objects",40013,400);let d=this.client.options.maxMessageSize,f=await zr(r,this.channelOptions),v=Kr(f);if(v>d)throw new A(`Maximum size of messages that can be published at once exceeded (was ${v} bytes; limit is ${d} bytes)`,40009,400);this.throwIfUnpublishableState(),c.logAction(this.logger,c.LOG_MICRO,"RealtimeChannel.publish()","sending message; channel state is "+this.state+", message count = "+f.length);let b=Ve({action:j.MESSAGE,channel:this.name,messages:f,params:a?Pt(a):void 0});return this.sendAndAwaitAck(b)}throwIfUnpublishableState(){if(!this.connectionManager.activeState())throw this.connectionManager.getError();if(this.state==="failed"||this.state==="suspended")throw this.invalidStateError()}onEvent(t){c.logAction(this.logger,c.LOG_MICRO,"RealtimeChannel.onEvent()","received message");let n=this.subscriptions;for(let i=0;i<t.length;i++){let r=t[i];n.emit(r.name,r)}}async attach(){return this.state==="attached"?null:new Promise((t,n)=>{this._attach(!1,null,(i,r)=>i?n(i):t(r))})}_attach(t,n,i){i||(i=a=>{a&&c.logAction(this.logger,c.LOG_ERROR,"RealtimeChannel._attach()","Channel attach failed: "+a.toString())});let r=this.connectionManager;if(!r.activeState()){i(r.getError());return}(this.state!=="attaching"||t)&&this.requestState("attaching",n),this.internalStateChanges.once(function(a){switch(this.event){case"attached":i?.(null,a);break;case"detached":case"suspended":case"failed":i?.(a.reason||r.getError()||new A("Unable to attach; reason unknown; state = "+this.event,9e4,500));break;case"detaching":i?.(new A("Attach request superseded by a subsequent detach request",9e4,409));break}})}attachImpl(){c.logAction(this.logger,c.LOG_MICRO,"RealtimeChannel.attachImpl()","sending ATTACH message");let t=Ve({action:j.ATTACH,channel:this.name,params:this.channelOptions.params,channelSerial:this.properties.channelSerial});this.channelOptions.modes&&t.encodeModesToFlags(ir(this.channelOptions.modes)),this._attachResume&&t.setFlag("ATTACH_RESUME"),this._lastPayload.decodeFailureRecoveryInProgress&&(t.channelSerial=this._lastPayload.protocolMessageChannelSerial),this.send(t)}async detach(){let t=this.connectionManager;switch(this.state){case"suspended":this.notifyState("detached");return;case"detached":return;case"failed":throw new A("Unable to detach; channel state = failed",90001,400);default:if(t.state.state!=="connected"){this.notifyState("detached");return}this.requestState("detaching");case"detaching":return new Promise((n,i)=>{this.internalStateChanges.once(function(r){switch(this.event){case"detached":n();break;case"attached":case"suspended":case"failed":i(r.reason||t.getError()||new A("Unable to detach; reason unknown; state = "+this.event,9e4,500));break;case"attaching":i(new A("Detach request superseded by a subsequent attach request",9e4,409));break}})})}}detachImpl(){c.logAction(this.logger,c.LOG_MICRO,"RealtimeChannel.detach()","sending DETACH message");let t=Ve({action:j.DETACH,channel:this.name});this.send(t)}async subscribe(...t){let[n,i]=Pi.processListenerArgs(t);if(this.state==="failed")throw A.fromValues(this.invalidStateError());return n&&typeof n=="object"&&!Array.isArray(n)?this.client._FilteredSubscriptions.subscribeFilter(this,n,i):this.subscriptions.on(n,i),this.channelOptions.attachOnSubscribe!==!1?this.attach():null}unsubscribe(...t){var n;let[i,r]=Pi.processListenerArgs(t);if(typeof i=="object"&&!r||(n=this.filteredSubscriptions)!=null&&n.has(r)){this.client._FilteredSubscriptions.getAndDeleteFilteredSubscriptions(this,i,r).forEach(a=>this.subscriptions.off(a));return}this.subscriptions.off(i,r)}sync(){switch(this.state){case"initialized":case"detaching":case"detached":throw new pe("Unable to sync to channel; not attached",4e4);default:}let t=this.connectionManager;if(!t.activeState())throw t.getError();let n=Ve({action:j.SYNC,channel:this.name});this.syncChannelSerial&&(n.channelSerial=this.syncChannelSerial),t.send(n)}send(t){this.connectionManager.send(t)}async sendAndAwaitAck(t){return new Promise((n,i)=>{this.connectionManager.send(t,this.client.options.queueMessages,(r,a)=>{r?i(r):n(a)})})}async sendPresence(t){let n=Ve({action:j.PRESENCE,channel:this.name,presence:t});await this.sendAndAwaitAck(n)}async sendState(t){let n=Ve({action:j.OBJECT,channel:this.name,state:t});return this.sendAndAwaitAck(n)}async processMessage(t){(t.action===j.ATTACHED||t.action===j.MESSAGE||t.action===j.PRESENCE||t.action===j.OBJECT||t.action===j.ANNOTATION)&&this.setChannelSerial(t.channelSerial);let n,i=!1;switch(t.action){case j.ATTACHED:{this.properties.attachSerial=t.channelSerial,this._mode=t.getMode(),this.params=t.params||{};let r=t.decodeModesFromFlags();this.modes=r&&$n(r)||void 0;let a=t.hasFlag("RESUMED"),d=t.hasFlag("HAS_PRESENCE"),f=t.hasFlag("HAS_BACKLOG"),v=t.hasFlag("HAS_OBJECTS");if(this._attachedReceived.emit("attached"),this.state==="attached"){a||this._presence&&this._presence.onAttached(d),this._object&&this._object.onAttached(v);let b=new ai(this.state,this.state,a,f,t.error);(!a||this.channelOptions.updateOnAttached)&&this.emit("update",b)}else this.state==="detaching"?this.checkPendingState():this.notifyState("attached",t.error,a,d,f,v);break}case j.DETACHED:{let r=t.error?A.fromValues(t.error):new A("Channel detached",90001,404);this.state==="detaching"?this.notifyState("detached",r):this.state==="attaching"?this.notifyState("suspended",r):(this.state==="attached"||this.state==="suspended")&&this.requestState("attaching",r);break}case j.SYNC:if(i=!0,n=this.syncChannelSerial=t.channelSerial,!t.presence)break;case j.PRESENCE:{if(!t.presence)break;pn(t);let r=this.channelOptions;if(this._presence){let a=await Promise.all(t.presence.map(d=>d.decode(r,this.logger)));this._presence.setPresence(a,i,n)}break}case j.OBJECT:case j.OBJECT_SYNC:{if(!this._object||!t.state)return;pn(t);let r=this.client.connection.connectionManager.getActiveTransportFormat(),a=t.state.map(d=>d.decode(this.client,r));t.action===j.OBJECT?this._object.handleObjectMessages(a):this._object.handleObjectSyncMessages(a,t.channelSerial);break}case j.MESSAGE:{if(this.state!=="attached"){c.logAction(this.logger,c.LOG_MAJOR,"RealtimeChannel.processMessage()",'Message "'+t.id+'" skipped as this channel "'+this.name+'" state is not "attached" (state is "'+this.state+'").');return}pn(t);let r=t.messages,a=r[0],d=r[r.length-1];if(a.extras&&a.extras.delta&&a.extras.delta.from!==this._lastPayload.messageId){let v='Delta message decode failure - previous message not available for message "'+t.id+'" on this channel "'+this.name+'".';c.logAction(this.logger,c.LOG_ERROR,"RealtimeChannel.processMessage()",v),this._startDecodeFailureRecovery(new A(v,40018,400));break}let f=[];for(let v=0;v<r.length;v++){let{decoded:b,err:k}=await r[v].decodeWithErr(this._decodingContext,this.logger);if(f[v]=b,k)switch(k.code){case 40018:this._startDecodeFailureRecovery(k);return;case 40019:case 40021:this.notifyState("failed",k);return;default:}}this._lastPayload.messageId=d.id,this._lastPayload.protocolMessageChannelSerial=t.channelSerial,this.onEvent(f);break}case j.ANNOTATION:{pn(t);let r=this.channelOptions;if(this._annotations){let a=await Promise.all((t.annotations||[]).map(d=>d.decode(r,this.logger)));this._annotations._processIncoming(a)}break}case j.ERROR:{let r=t.error;r&&r.code==80016?this.checkPendingState():this.notifyState("failed",A.fromValues(r));break}default:c.logAction(this.logger,c.LOG_MAJOR,"RealtimeChannel.processMessage()","Protocol error: unrecognised message action ("+t.action+")")}}_startDecodeFailureRecovery(t){this._lastPayload.decodeFailureRecoveryInProgress||(c.logAction(this.logger,c.LOG_MAJOR,"RealtimeChannel.processMessage()","Starting decode failure recovery process."),this._lastPayload.decodeFailureRecoveryInProgress=!0,this._attach(!0,t,()=>{this._lastPayload.decodeFailureRecoveryInProgress=!1}))}onAttached(){c.logAction(this.logger,c.LOG_MINOR,"RealtimeChannel.onAttached","activating channel; name = "+this.name)}notifyState(t,n,i,r,a,d){if(c.logAction(this.logger,c.LOG_MICRO,"RealtimeChannel.notifyState","name = "+this.name+", current state = "+this.state+", notifying state "+t),this.clearStateTimer(),["detached","suspended","failed"].includes(t)&&(this.properties.channelSerial=null),t===this.state)return;this._presence&&this._presence.actOnChannelState(t,r,n),this._object&&this._object.actOnChannelState(t,d),t==="suspended"&&this.connectionManager.state.sendEvents?this.startRetryTimer():this.cancelRetryTimer(),n&&(this.errorReason=n);let f=new ai(this.state,t,i,a,n),v='Channel state for channel "'+this.name+'"',b=t+(n?"; reason: "+n:"");t==="failed"?c.logAction(this.logger,c.LOG_ERROR,v,b):c.logAction(this.logger,c.LOG_MAJOR,v,b),t!=="attaching"&&t!=="suspended"&&(this.retryCount=0),t==="attached"&&this.onAttached(),t==="attached"?this._attachResume=!0:(t==="detaching"||t==="failed")&&(this._attachResume=!1),this.state=t,this.emit(t,f)}requestState(t,n){c.logAction(this.logger,c.LOG_MINOR,"RealtimeChannel.requestState","name = "+this.name+", state = "+t),this.notifyState(t,n),this.checkPendingState()}checkPendingState(){if(!this.connectionManager.state.sendEvents){c.logAction(this.logger,c.LOG_MINOR,"RealtimeChannel.checkPendingState","sendEvents is false; state is "+this.connectionManager.state.state);return}switch(c.logAction(this.logger,c.LOG_MINOR,"RealtimeChannel.checkPendingState","name = "+this.name+", state = "+this.state),this.state){case"attaching":this.startStateTimerIfNotRunning(),this.attachImpl();break;case"detaching":this.startStateTimerIfNotRunning(),this.detachImpl();break;case"attached":this.sync();break;default:break}}timeoutPendingState(){switch(this.state){case"attaching":{let t=new A("Channel attach timed out",90007,408);this.notifyState("suspended",t);break}case"detaching":{let t=new A("Channel detach timed out",90007,408);this.notifyState("attached",t);break}default:this.checkPendingState();break}}startStateTimerIfNotRunning(){this.stateTimer||(this.stateTimer=setTimeout(()=>{c.logAction(this.logger,c.LOG_MINOR,"RealtimeChannel.startStateTimerIfNotRunning","timer expired"),this.stateTimer=null,this.timeoutPendingState()},this.client.options.timeouts.realtimeRequestTimeout))}clearStateTimer(){let t=this.stateTimer;t&&(clearTimeout(t),this.stateTimer=null)}startRetryTimer(){if(this.retryTimer)return;this.retryCount++;let t=Kn(this.client.options.timeouts.channelRetryTimeout,this.retryCount);this.retryTimer=setTimeout(()=>{this.state==="suspended"&&this.connectionManager.state.sendEvents&&(this.retryTimer=null,c.logAction(this.logger,c.LOG_MINOR,"RealtimeChannel retry timer expired","attempting a new attach"),this.requestState("attaching"))},t)}cancelRetryTimer(){this.retryTimer&&(clearTimeout(this.retryTimer),this.retryTimer=null)}getReleaseErr(){let t=this.state;return t==="initialized"||t==="detached"||t==="failed"?null:new A("Can only release a channel in a state where there is no possibility of further updates from the server being received (initialized, detached, or failed); was "+t,90001,400)}setChannelSerial(t){c.logAction(this.logger,c.LOG_MICRO,"RealtimeChannel.setChannelSerial()","Updating channel serial; serial = "+t+"; previous = "+this.properties.channelSerial),t&&(this.properties.channelSerial=t)}async status(){return this.client.rest.channelMixin.status(this)}async getMessage(t){return c.logAction(this.logger,c.LOG_MICRO,"RealtimeChannel.getMessage()","channel = "+this.name),this.client.rest.channelMixin.getMessage(this,t)}async updateMessage(t,n,i){return c.logAction(this.logger,c.LOG_MICRO,"RealtimeChannel.updateMessage()","channel = "+this.name),this.sendUpdate(t,"message.update",n,i)}async deleteMessage(t,n,i){return c.logAction(this.logger,c.LOG_MICRO,"RealtimeChannel.deleteMessage()","channel = "+this.name),this.sendUpdate(t,"message.delete",n,i)}async appendMessage(t,n,i){return c.logAction(this.logger,c.LOG_MICRO,"RealtimeChannel.appendMessage()","channel = "+this.name),this.sendUpdate(t,"message.append",n,i)}async sendUpdate(t,n,i,r){var a;if(!t.serial)throw new A('This message lacks a serial and cannot be updated. Make sure you have enabled "Message annotations, updates, and deletes" in channel settings on your dashboard.',40003,400);this.throwIfUnpublishableState();let f=await $e.fromValues(I(y({},t),{action:n,version:i})).encode(this.channelOptions),v=Ve({action:j.MESSAGE,channel:this.name,messages:[f],params:r?Pt(r):void 0});return{versionSerial:(a=(await this.sendAndAwaitAck(v)).serials[0])!=null?a:null}}async getMessageVersions(t,n){return c.logAction(this.logger,c.LOG_MICRO,"RealtimeChannel.getMessageVersions()","channel = "+this.name),this.client.rest.channelMixin.getMessageVersions(this,t,n)}async ensureAttached(){switch(this.state){case"attached":case"suspended":break;case"initialized":case"detached":case"detaching":case"attaching":await this.attach();break;default:throw A.fromValues(this.invalidStateError())}}};function ls(e){let t=e||{},{agent:n}=t;return T(t,["agent"])}var Lt=Tc,Oc=class{constructor(e){this.channel=e,this.logger=e.logger,this.subscriptions=new ke(this.logger)}async publish(e,t){let n=this.channel.name,i=os(e,t),r=await i.encode();this.channel.throwIfUnpublishableState(),c.logAction(this.logger,c.LOG_MICRO,"RealtimeAnnotations.publish()","channelName = "+n+", sending annotation with messageSerial = "+i.messageSerial+", type = "+i.type);let a=Ve({action:j.ANNOTATION,channel:n,annotations:[r]});await this.channel.sendAndAwaitAck(a)}async delete(e,t){t.action="annotation.delete",await this.publish(e,t)}async subscribe(...e){let t=Lt.processListenerArgs(e),n=t[0],i=t[1],r=this.channel;if(r.state==="failed")throw A.fromValues(r.invalidStateError());if(this.subscriptions.on(n,i),this.channel.channelOptions.attachOnSubscribe!==!1&&await r.attach(),(this.channel.state==="attached"&&this.channel._mode&Ee.ANNOTATION_SUBSCRIBE)===0)throw new A("You are trying to add an annotation listener, but you haven't requested the annotation_subscribe channel mode in ChannelOptions, so this won't do anything (we only deliver annotations to clients who have explicitly requested them)",93001,400)}unsubscribe(...e){let t=Lt.processListenerArgs(e),n=t[0],i=t[1];this.subscriptions.off(n,i)}_processIncoming(e){for(let t of e)this.subscriptions.emit(t.type||"",t)}async get(e,t){return gn.prototype.get.call(this,e,t)}},ci=Oc,ct=class An extends yc{constructor(t){var n,i;if(!An._MsgPack)throw new Error("Expected DefaultRest._MsgPack to have been set");super(F.objectifyOptions(t,!0,"Rest",c.defaultLogger,I(y({},Xr),{Crypto:(n=An.Crypto)!=null?n:void 0,MsgPack:(i=An._MsgPack)!=null?i:void 0,Annotations:{Annotation:yt,WireAnnotation:vt,RealtimeAnnotations:ci,RestAnnotations:gn}})))}static get Crypto(){if(this._Crypto===null)throw new Error("Encryption not enabled; use ably.encryption.js instead");return this._Crypto}static set Crypto(t){this._Crypto=t}};ct._Crypto=null,ct.Message=Zr,ct.PresenceMessage=es,ct.Annotation=rs,ct._MsgPack=null,ct._Http=Zn;var li=ct,Ic=class extends ke{constructor(e){super(e),this.messages=[]}count(){return this.messages.length}push(e){this.messages.push(e)}shift(){return this.messages.shift()}last(){return this.messages[this.messages.length-1]}copyAll(){return this.messages.slice()}append(e){this.messages.push.apply(this.messages,e)}prepend(e){this.messages.unshift.apply(this.messages,e)}completeMessages(e,t,n){c.logAction(this.logger,c.LOG_MICRO,"MessageQueue.completeMessages()",e=="all"?"(all)":"serial = "+e.serial+"; count = "+e.count),t=t||null;let i=this.messages;if(i.length===0)throw new Error("MessageQueue.completeMessages(): completeMessages called on any empty MessageQueue");let r=[];if(e==="all")r=i.splice(0);else{let a=i[0];if(a){let d=a.message.msgSerial,f=e.serial+e.count;f>d&&(r=i.splice(0,f-d))}}for(let a=0;a<r.length;a++){let d=r[a],f=n?.[a];d.callback(t,f)}i.length==0&&this.emit("idle")}completeAllMessages(e){this.completeMessages("all",e)}resetSendAttempted(){for(let e of this.messages)e.sendAttempted=!1}clear(){c.logAction(this.logger,c.LOG_MICRO,"MessageQueue.clear()","clearing "+this.messages.length+" messages"),this.messages=[],this.emit("idle")}},hs=Ic,ds=class{constructor(e,t){this.message=e,this.callback=t,this.merged=!1;let n=e.action;this.sendAttempted=!1,this.ackRequired=typeof n=="number"&&[j.MESSAGE,j.PRESENCE,j.ANNOTATION,j.OBJECT].includes(n)}},Pc=class extends ke{constructor(e){super(e.logger),this.transport=e,this.messageQueue=new hs(this.logger),e.on("ack",(t,n,i)=>{this.onAck(t,n,i)}),e.on("nack",(t,n,i)=>{this.onNack(t,n,i)})}onAck(e,t,n){c.logAction(this.logger,c.LOG_MICRO,"Protocol.onAck()","serial = "+e+"; count = "+t),this.messageQueue.completeMessages({serial:e,count:t},null,n)}onNack(e,t,n){c.logAction(this.logger,c.LOG_ERROR,"Protocol.onNack()","serial = "+e+"; count = "+t+"; err = "+te(n)),n||(n=new A("Unable to send message; channel not responding",50001,500)),this.messageQueue.completeMessages({serial:e,count:t},n)}onceIdle(e){let t=this.messageQueue;if(t.count()===0){e();return}t.once("idle",e)}send(e){e.ackRequired&&this.messageQueue.push(e),this.logger.shouldLog(c.LOG_MICRO)&&c.logActionNoStrip(this.logger,c.LOG_MICRO,"Protocol.send()","sending msg; "+si(e.message,this.transport.connectionManager.realtime._RealtimePresence,this.transport.connectionManager.realtime._Annotations,this.transport.connectionManager.realtime._liveObjectsPlugin)),e.sendAttempted=!0,this.transport.send(e.message)}getTransport(){return this.transport}getPendingMessages(){return this.messageQueue.copyAll()}clearPendingMessages(){return this.messageQueue.clear()}finish(){let e=this.transport;this.onceIdle(function(){e.disconnect()})}},Ec=Pc,Vc=class{constructor(e,t,n,i){this.previous=e,this.current=t,n&&(this.retryIn=n),i&&(this.reason=i)}},bn=Vc,nt={DISCONNECTED:80003,SUSPENDED:80002,FAILED:8e4,CLOSING:80017,CLOSED:80017,UNKNOWN_CONNECTION_ERR:50002,UNKNOWN_CHANNEL_ERR:50001},Lc={disconnected:()=>A.fromValues({statusCode:400,code:nt.DISCONNECTED,message:"Connection to server temporarily unavailable"}),suspended:()=>A.fromValues({statusCode:400,code:nt.SUSPENDED,message:"Connection to server unavailable"}),failed:()=>A.fromValues({statusCode:400,code:nt.FAILED,message:"Connection failed or disconnected by server"}),closing:()=>A.fromValues({statusCode:400,code:nt.CLOSING,message:"Connection closing"}),closed:()=>A.fromValues({statusCode:400,code:nt.CLOSED,message:"Connection closed"}),unknownConnectionErr:()=>A.fromValues({statusCode:500,code:nt.UNKNOWN_CONNECTION_ERR,message:"Internal connection error"}),unknownChannelErr:()=>A.fromValues({statusCode:500,code:nt.UNKNOWN_CONNECTION_ERR,message:"Internal channel error"})};function Nc(e){return!e.statusCode||!e.code||e.statusCode>=500?!0:Object.values(nt).includes(e.code)}var lt=Lc,Bc=Ve({action:j.CLOSE}),Uc=Ve({action:j.DISCONNECT}),qc=class extends ke{constructor(e,t,n,i){super(e.logger),i&&(n.format=void 0,n.heartbeats=!0),this.connectionManager=e,this.auth=t,this.params=n,this.timeouts=n.options.timeouts,this.format=n.format,this.isConnected=!1,this.isFinished=!1,this.isDisposed=!1,this.maxIdleInterval=null,this.idleTimer=null,this.lastActivity=null}connect(){}close(){this.isConnected&&this.requestClose(),this.finish("closed",lt.closed())}disconnect(e){this.isConnected&&this.requestDisconnect(),this.finish("disconnected",e||lt.disconnected())}fail(e){this.isConnected&&this.requestDisconnect(),this.finish("failed",e||lt.failed())}finish(e,t){var n;this.isFinished||(this.isFinished=!0,this.isConnected=!1,this.maxIdleInterval=null,clearTimeout((n=this.idleTimer)!=null?n:void 0),this.idleTimer=null,this.emit(e,t),this.dispose())}onProtocolMessage(e){switch(this.logger.shouldLog(c.LOG_MICRO)&&c.logActionNoStrip(this.logger,c.LOG_MICRO,"Transport.onProtocolMessage()","received on "+this.shortName+": "+si(e,this.connectionManager.realtime._RealtimePresence,this.connectionManager.realtime._Annotations,this.connectionManager.realtime._liveObjectsPlugin)+"; connectionId = "+this.connectionManager.connectionId),this.onActivity(),e.action){case j.HEARTBEAT:c.logActionNoStrip(this.logger,c.LOG_MICRO,"Transport.onProtocolMessage()",this.shortName+" heartbeat; connectionId = "+this.connectionManager.connectionId),this.emit("heartbeat",e.id);break;case j.CONNECTED:this.onConnect(e),this.emit("connected",e.error,e.connectionId,e.connectionDetails,e);break;case j.CLOSED:this.onClose(e);break;case j.DISCONNECTED:this.onDisconnect(e);break;case j.ACK:this.emit("ack",e.msgSerial,e.count,e.res);break;case j.NACK:this.emit("nack",e.msgSerial,e.count,e.error);break;case j.SYNC:this.connectionManager.onChannelMessage(e,this);break;case j.ACTIVATE:break;case j.AUTH:ge(this.auth.authorize(),t=>{t&&c.logAction(this.logger,c.LOG_ERROR,"Transport.onProtocolMessage()","Ably requested re-authentication, but unable to obtain a new token: "+te(t))});break;case j.ERROR:if(c.logAction(this.logger,c.LOG_MINOR,"Transport.onProtocolMessage()","received error action; connectionId = "+this.connectionManager.connectionId+"; err = "+w.Config.inspect(e.error)+(e.channel?", channel: "+e.channel:"")),e.channel===void 0){this.onFatalError(e);break}this.connectionManager.onChannelMessage(e,this);break;default:this.connectionManager.onChannelMessage(e,this)}}onConnect(e){if(this.isConnected=!0,!e.connectionDetails)throw new Error("Transport.onConnect(): Connect message recieved without connectionDetails");let t=e.connectionDetails.maxIdleInterval;t&&(this.maxIdleInterval=t+this.timeouts.realtimeRequestTimeout,this.onActivity())}onDisconnect(e){let t=e&&e.error;c.logAction(this.logger,c.LOG_MINOR,"Transport.onDisconnect()","err = "+te(t)),this.finish("disconnected",t)}onFatalError(e){let t=e&&e.error;c.logAction(this.logger,c.LOG_MINOR,"Transport.onFatalError()","err = "+te(t)),this.finish("failed",t)}onClose(e){let t=e&&e.error;c.logAction(this.logger,c.LOG_MINOR,"Transport.onClose()","err = "+te(t)),this.finish("closed",t)}requestClose(){c.logAction(this.logger,c.LOG_MINOR,"Transport.requestClose()",""),this.send(Bc)}requestDisconnect(){c.logAction(this.logger,c.LOG_MINOR,"Transport.requestDisconnect()",""),this.send(Uc)}ping(e){let t={action:j.HEARTBEAT};e&&(t.id=e),this.send(Ve(t))}dispose(){c.logAction(this.logger,c.LOG_MINOR,"Transport.dispose()",""),this.isDisposed=!0,this.off()}onActivity(){this.maxIdleInterval&&(this.lastActivity=this.connectionManager.lastActivity=Date.now(),this.setIdleTimer(this.maxIdleInterval+100))}setIdleTimer(e){this.idleTimer||(this.idleTimer=setTimeout(()=>{this.onIdleTimerExpire()},e))}onIdleTimerExpire(){if(!this.lastActivity||!this.maxIdleInterval)throw new Error("Transport.onIdleTimerExpire(): lastActivity/maxIdleInterval not set");this.idleTimer=null;let e=Date.now()-this.lastActivity,t=this.maxIdleInterval-e;if(t<=0){let n="No activity seen from realtime in "+e+"ms; assuming connection has dropped";c.logAction(this.logger,c.LOG_ERROR,"Transport.onIdleTimerExpire()",n),this.disconnect(new A(n,80003,408))}else this.setIdleTimer(t+100)}static tryConnect(e,t,n,i,r){let a=new e(t,n,i),d,f=function(b){clearTimeout(d),r({event:this.event,error:b})},v=t.options.timeouts.realtimeRequestTimeout;return d=setTimeout(()=>{a.off(["preconnect","disconnected","failed"]),a.dispose(),f.call({event:"disconnected"},new A("Timeout waiting for transport to indicate itself viable",5e4,500))},v),a.on(["failed","disconnected"],f),a.on("preconnect",function(){c.logAction(t.logger,c.LOG_MINOR,"Transport.tryConnect()","viable transport "+a),clearTimeout(d),a.off(["failed","disconnected"],f),r(null,a)}),a.connect(),a}static isAvailable(){throw new A("isAvailable not implemented for transport",5e4,500)}},wt=qc,Le;(e=>{e.WebSocket="web_socket",e.Comet="comet",e.XhrPolling="xhr_polling"})(Le||(Le={}));var Dc=typeof global<"u"?global:typeof window<"u"?window:self,hi=()=>{var e;return typeof w.WebStorage<"u"&&((e=w.WebStorage)==null?void 0:e.localSupported)},Nt=()=>{var e;return typeof w.WebStorage<"u"&&((e=w.WebStorage)==null?void 0:e.sessionSupported)},us=function(){},di="ably-transport-preference";function ui(e){try{return JSON.parse(e)}catch{return null}}var Hc=class{constructor(e,t,n,i){this.options=e,this.host=t,this.mode=n,this.connectionKey=i,this.format=e.useBinaryProtocol?"msgpack":"json"}getConnectParams(e){let t=e?Pe(e):{},n=this.options;switch(this.mode){case"resume":t.resume=this.connectionKey;break;case"recover":{let i=ui(n.recover);i&&(t.recover=i.connectionKey);break}default:}return n.clientId!==void 0&&(t.clientId=n.clientId),n.echoMessages===!1&&(t.echo="false"),this.format!==void 0&&(t.format=this.format),this.stream!==void 0&&(t.stream=this.stream),this.heartbeats!==void 0&&(t.heartbeats=this.heartbeats),t.v=F.protocolVersion,t.agent=Yn(this.options),n.transportParams!==void 0&&q(t,n.transportParams),t}toString(){let e="[mode="+this.mode;return this.host&&(e+=",host="+this.host),this.connectionKey&&(e+=",connectionKey="+this.connectionKey),this.format&&(e+=",format="+this.format),e+="]",e}},Gc=class Us extends ke{constructor(t,n){super(t.logger),this.supportedTransports={},this.disconnectedRetryCount=0,this.pendingChannelMessagesState={isProcessing:!1,queue:[]},this.realtime=t,this.initTransports(),this.options=n;let i=n.timeouts,r=i.webSocketConnectTimeout+i.realtimeRequestTimeout;if(this.states={initialized:{state:"initialized",terminal:!1,queueEvents:!0,sendEvents:!1,failState:"disconnected"},connecting:{state:"connecting",terminal:!1,queueEvents:!0,sendEvents:!1,retryDelay:r,failState:"disconnected"},connected:{state:"connected",terminal:!1,queueEvents:!1,sendEvents:!0,failState:"disconnected"},disconnected:{state:"disconnected",terminal:!1,queueEvents:!0,sendEvents:!1,retryDelay:i.disconnectedRetryTimeout,failState:"disconnected"},suspended:{state:"suspended",terminal:!1,queueEvents:!1,sendEvents:!1,retryDelay:i.suspendedRetryTimeout,failState:"suspended"},closing:{state:"closing",terminal:!1,queueEvents:!1,sendEvents:!1,retryDelay:i.realtimeRequestTimeout,failState:"closed"},closed:{state:"closed",terminal:!0,queueEvents:!1,sendEvents:!1,failState:"closed"},failed:{state:"failed",terminal:!0,queueEvents:!1,sendEvents:!1,failState:"failed"}},this.state=this.states.initialized,this.errorReason=null,this.queuedMessages=new hs(this.logger),this.msgSerial=0,this.connectionDetails=void 0,this.connectionId=void 0,this.connectionKey=void 0,this.connectionStateTtl=i.connectionStateTtl,this.maxIdleInterval=null,this.transports=Fe(n.transports||F.defaultTransports,this.supportedTransports),this.transportPreference=null,this.transports.includes(Le.WebSocket)&&(this.webSocketTransportAvailable=!0),this.transports.includes(Le.XhrPolling)?this.baseTransport=Le.XhrPolling:this.transports.includes(Le.Comet)&&(this.baseTransport=Le.Comet),this.domains=F.getHosts(n),this.activeProtocol=null,this.host=null,this.lastAutoReconnectAttempt=null,this.lastActivity=null,this.forceFallbackHost=!1,this.connectCounter=0,this.wsCheckResult=null,this.webSocketSlowTimer=null,this.webSocketGiveUpTimer=null,this.abandonedWebSocket=!1,c.logAction(this.logger,c.LOG_MINOR,"Realtime.ConnectionManager()","started"),c.logAction(this.logger,c.LOG_MICRO,"Realtime.ConnectionManager()","requested transports = ["+(n.transports||F.defaultTransports)+"]"),c.logAction(this.logger,c.LOG_MICRO,"Realtime.ConnectionManager()","available transports = ["+this.transports+"]"),c.logAction(this.logger,c.LOG_MICRO,"Realtime.ConnectionManager()","http domains = ["+this.domains+"]"),!this.transports.length){let d="no requested transports available";throw c.logAction(this.logger,c.LOG_ERROR,"realtime.ConnectionManager()",d),new Error(d)}let a=w.Config.addEventListener;a&&(Nt()&&typeof n.recover=="function"&&a("beforeunload",this.persistConnection.bind(this)),n.closeOnUnload===!0&&a("beforeunload",()=>{c.logAction(this.logger,c.LOG_MAJOR,"Realtime.ConnectionManager()","beforeunload event has triggered the connection to close as closeOnUnload is true"),this.requestState({state:"closing"})}),a("online",()=>{var d;this.state==this.states.disconnected||this.state==this.states.suspended?(c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager caught browser \u2018online\u2019 event","reattempting connection"),this.requestState({state:"connecting"})):this.state==this.states.connecting&&((d=this.pendingTransport)==null||d.off(),this.disconnectAllTransports(),this.startConnect())}),a("offline",()=>{this.state==this.states.connected&&(c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager caught browser \u2018offline\u2019 event","disconnecting active transport"),this.disconnectAllTransports())}))}static supportedTransports(t){let n={supportedTransports:{}};return this.initTransports(t,n),n.supportedTransports}static initTransports(t,n){let i=y(y({},w.Transports.bundledImplementations),t);[Le.WebSocket,...w.Transports.order].forEach(r=>{let a=i[r];a&&a.isAvailable()&&(n.supportedTransports[r]=a)})}initTransports(){Us.initTransports(this.realtime._additionalTransportImplementations,this)}createTransportParams(t,n){return new Hc(this.options,t,n,this.connectionKey)}getTransportParams(t){(i=>{if(this.connectionKey){i("resume");return}if(typeof this.options.recover=="string"){i("recover");return}let r=this.options.recover,a=this.getSessionRecoverData(),d=this.sessionRecoveryName();if(a&&typeof r=="function"){c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager.getTransportParams()","Calling clientOptions-provided recover function with last session data (recovery scope: "+d+")"),r(a,f=>{f?(this.options.recover=a.recoveryKey,i("recover")):i("clean")});return}i("clean")})(i=>{let r=this.createTransportParams(null,i);if(i==="recover"){c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager.getTransportParams()","Transport recovery mode = recover; recoveryKey = "+this.options.recover);let a=ui(this.options.recover);a&&(this.msgSerial=a.msgSerial)}else c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager.getTransportParams()","Transport params = "+r.toString());t(r)})}tryATransport(t,n,i){c.logAction(this.logger,c.LOG_MICRO,"ConnectionManager.tryATransport()","trying "+n),this.proposedTransport=wt.tryConnect(this.supportedTransports[n],this,this.realtime.auth,t,(r,a)=>{let d=this.state;if(d==this.states.closing||d==this.states.closed||d==this.states.failed){a&&(c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager.tryATransport()","connection "+d.state+" while we were attempting the transport; closing "+a),a.close()),i(!0);return}if(r){c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager.tryATransport()","transport "+n+" "+r.event+", err: "+r.error.toString()),Je.isTokenErr(r.error)&&!(this.errorReason&&Je.isTokenErr(this.errorReason))?(this.errorReason=r.error,ge(this.realtime.auth._forceNewToken(null,null),f=>{if(f){this.actOnErrorFromAuthorize(f);return}this.tryATransport(t,n,i)})):r.event==="failed"?(this.notifyState({state:"failed",error:r.error}),i(!0)):r.event==="disconnected"&&(Nc(r.error)?i(!1):(this.notifyState({state:this.states.connecting.failState,error:r.error}),i(!0)));return}c.logAction(this.logger,c.LOG_MICRO,"ConnectionManager.tryATransport()","viable transport "+n+"; setting pending"),this.setTransportPending(a,t),i(null,a)})}setTransportPending(t,n){let i=n.mode;c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager.setTransportPending()","transport = "+t+"; mode = "+i),this.pendingTransport=t,this.cancelWebSocketSlowTimer(),this.cancelWebSocketGiveUpTimer(),t.once("connected",(a,d,f)=>{this.activateTransport(a,t,d,f),i==="recover"&&this.options.recover&&(delete this.options.recover,this.unpersistConnection())});let r=this;t.on(["disconnected","closed","failed"],function(a){r.deactivateTransport(t,this.event,a)}),this.emit("transport.pending",t)}activateTransport(t,n,i,r){c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager.activateTransport()","transport = "+n),t&&c.logAction(this.logger,c.LOG_ERROR,"ConnectionManager.activateTransport()","error = "+t),i&&c.logAction(this.logger,c.LOG_MICRO,"ConnectionManager.activateTransport()","connectionId =  "+i),r&&c.logAction(this.logger,c.LOG_MICRO,"ConnectionManager.activateTransport()","connectionDetails =  "+JSON.stringify(r)),this.persistTransportPreference(n);let a=this.state,d=this.states.connected.state;if(c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager.activateTransport()","current state = "+a.state),a.state==this.states.closing.state||a.state==this.states.closed.state||a.state==this.states.failed.state)return c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager.activateTransport()","Disconnecting transport and abandoning"),n.disconnect(),!1;if(delete this.pendingTransport,!n.isConnected)return c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager.activateTransport()","Declining to activate transport "+n+" since it appears to no longer be connected"),!1;let f=this.activeProtocol;this.activeProtocol=new Ec(n),this.host=n.params.host;let v=r.connectionKey;if(v&&this.connectionKey!=v&&this.setConnection(i,r,!!t),this.onConnectionDetailsUpdate(r,n),w.Config.nextTick(()=>{n.on("connected",(b,k,M)=>{this.onConnectionDetailsUpdate(M,n),this.emit("update",new bn(d,d,null,b))})}),a.state===this.states.connected.state?t&&(this.errorReason=this.realtime.connection.errorReason=t,this.emit("update",new bn(d,d,null,t))):(this.notifyState({state:"connected",error:t}),this.errorReason=this.realtime.connection.errorReason=t||null),this.emit("transport.active",n),f)if(f.messageQueue.count()>0&&c.logAction(this.logger,c.LOG_ERROR,"ConnectionManager.activateTransport()","Previous active protocol (for transport "+f.transport.shortName+", new one is "+n.shortName+") finishing with "+f.messageQueue.count()+" messages still pending"),f.transport===n){let b="Assumption violated: activating a transport that was also the transport for the previous active protocol; transport = "+n.shortName+"; stack = "+new Error().stack;c.logAction(this.logger,c.LOG_ERROR,"ConnectionManager.activateTransport()",b)}else f.finish();return!0}deactivateTransport(t,n,i){let r=this.activeProtocol,a=r&&r.getTransport()===t,d=t===this.pendingTransport,f=this.noTransportsScheduledForActivation();if(c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager.deactivateTransport()","transport = "+t),c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager.deactivateTransport()","state = "+n+(a?"; was active":d?"; was pending":"")+(f?"":"; another transport is scheduled for activation")),i&&i.message&&c.logAction(this.logger,c.LOG_MICRO,"ConnectionManager.deactivateTransport()","reason =  "+i.message),a&&(c.logAction(this.logger,c.LOG_MICRO,"ConnectionManager.deactivateTransport()","Getting, clearing, and requeuing "+this.activeProtocol.messageQueue.count()+" pending messages"),this.queuePendingMessages(r.getPendingMessages()),r.clearPendingMessages(),this.activeProtocol=this.host=null),this.emit("transport.inactive",t),a&&f||a&&n==="failed"||n==="closed"||r===null&&d){if(n==="disconnected"&&i&&i.statusCode>500&&this.domains.length>1){this.unpersistTransportPreference(),this.forceFallbackHost=!0,this.notifyState({state:n,error:i,retryImmediately:!0});return}let v=n==="failed"&&Je.isTokenErr(i)?"disconnected":n;this.notifyState({state:v,error:i});return}}noTransportsScheduledForActivation(){return!this.pendingTransport||!this.pendingTransport.isConnected}setConnection(t,n,i){let r=this.connectionId;(r&&r!==t||!r&&i)&&(c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager.setConnection()","Resetting msgSerial"),this.msgSerial=0,this.queuedMessages.resetSendAttempted()),this.connectionId!==t&&c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager.setConnection()","New connectionId; reattaching any attached channels"),this.realtime.connection.id=this.connectionId=t,this.realtime.connection.key=this.connectionKey=n.connectionKey}clearConnection(){this.realtime.connection.id=this.connectionId=void 0,this.realtime.connection.key=this.connectionKey=void 0,this.msgSerial=0,this.queuedMessages.resetSendAttempted(),this.unpersistConnection()}createRecoveryKey(){return this.connectionKey?JSON.stringify({connectionKey:this.connectionKey,msgSerial:this.msgSerial,channelSerials:this.realtime.channels.channelSerials()}):null}checkConnectionStateFreshness(){if(!this.lastActivity||!this.connectionId)return;let t=Date.now()-this.lastActivity;t>this.connectionStateTtl+this.maxIdleInterval&&(c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager.checkConnectionStateFreshness()","Last known activity from realtime was "+t+"ms ago; discarding connection state"),this.clearConnection(),this.states.connecting.failState="suspended")}persistConnection(){if(Nt()){let t=this.createRecoveryKey();t&&this.setSessionRecoverData({recoveryKey:t,disconnectedAt:Date.now(),location:Dc.location,clientId:this.realtime.auth.clientId})}}unpersistConnection(){this.clearSessionRecoverData()}getActiveTransportFormat(){var t;return(t=this.activeProtocol)==null?void 0:t.getTransport().format}getError(){if(this.errorReason){let t=pe.fromValues(this.errorReason);return t.cause=this.errorReason,t}return this.getStateError()}getStateError(){var t,n;return(n=(t=lt)[this.state.state])==null?void 0:n.call(t)}activeState(){return this.state.queueEvents||this.state.sendEvents}enactStateChange(t){let n="Connection state",i=t.current+(t.reason?"; reason: "+t.reason:"");t.current==="failed"?c.logAction(this.logger,c.LOG_ERROR,n,i):c.logAction(this.logger,c.LOG_MAJOR,n,i),c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager.enactStateChange","setting new state: "+t.current+"; reason = "+(t.reason&&t.reason.message));let r=this.state=this.states[t.current];t.reason&&(this.errorReason=t.reason,this.realtime.connection.errorReason=t.reason),(r.terminal||r.state==="suspended")&&this.clearConnection(),this.emit("connectionstate",t)}startTransitionTimer(t){c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager.startTransitionTimer()","transitionState: "+t.state),this.transitionTimer&&(c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager.startTransitionTimer()","clearing already-running timer"),clearTimeout(this.transitionTimer)),this.transitionTimer=setTimeout(()=>{this.transitionTimer&&(this.transitionTimer=null,c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager "+t.state+" timer expired","requesting new state: "+t.failState),this.notifyState({state:t.failState}))},t.retryDelay)}cancelTransitionTimer(){c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager.cancelTransitionTimer()",""),this.transitionTimer&&(clearTimeout(this.transitionTimer),this.transitionTimer=null)}startSuspendTimer(){this.suspendTimer||(this.suspendTimer=setTimeout(()=>{this.suspendTimer&&(this.suspendTimer=null,c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager suspend timer expired","requesting new state: suspended"),this.states.connecting.failState="suspended",this.notifyState({state:"suspended"}))},this.connectionStateTtl))}checkSuspendTimer(t){t!=="disconnected"&&t!=="suspended"&&t!=="connecting"&&this.cancelSuspendTimer()}cancelSuspendTimer(){this.states.connecting.failState="disconnected",this.suspendTimer&&(clearTimeout(this.suspendTimer),this.suspendTimer=null)}startRetryTimer(t){this.retryTimer=setTimeout(()=>{c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager retry timer expired","retrying"),this.retryTimer=null,this.requestState({state:"connecting"})},t)}cancelRetryTimer(){this.retryTimer&&(clearTimeout(this.retryTimer),this.retryTimer=null)}startWebSocketSlowTimer(){this.webSocketSlowTimer=setTimeout(()=>{c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager WebSocket slow timer","checking connectivity"),this.checkWsConnectivity().then(()=>{c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager WebSocket slow timer","ws connectivity check succeeded"),this.wsCheckResult=!0}).catch(()=>{c.logAction(this.logger,c.LOG_MAJOR,"ConnectionManager WebSocket slow timer","ws connectivity check failed"),this.wsCheckResult=!1}),this.realtime.http.checkConnectivity&&ge(this.realtime.http.checkConnectivity(),(t,n)=>{t||!n?(c.logAction(this.logger,c.LOG_MAJOR,"ConnectionManager WebSocket slow timer","http connectivity check failed"),this.cancelWebSocketGiveUpTimer(),this.notifyState({state:"disconnected",error:new A("Unable to connect (network unreachable)",80003,404)})):c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager WebSocket slow timer","http connectivity check succeeded")})},this.options.timeouts.webSocketSlowTimeout)}cancelWebSocketSlowTimer(){this.webSocketSlowTimer&&(clearTimeout(this.webSocketSlowTimer),this.webSocketSlowTimer=null)}startWebSocketGiveUpTimer(t){this.webSocketGiveUpTimer=setTimeout(()=>{var n,i;this.wsCheckResult||(c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager WebSocket give up timer","websocket connection took more than 10s; "+(this.baseTransport?"trying base transport":"")),this.baseTransport?(this.abandonedWebSocket=!0,(n=this.proposedTransport)==null||n.dispose(),(i=this.pendingTransport)==null||i.dispose(),this.connectBase(t,++this.connectCounter)):c.logAction(this.logger,c.LOG_MAJOR,"ConnectionManager WebSocket give up timer","websocket connectivity appears to be unavailable but no other transports to try"))},this.options.timeouts.webSocketConnectTimeout)}cancelWebSocketGiveUpTimer(){this.webSocketGiveUpTimer&&(clearTimeout(this.webSocketGiveUpTimer),this.webSocketGiveUpTimer=null)}notifyState(t){var n,i;let r=t.state,a=r==="disconnected"&&(this.state===this.states.connected||t.retryImmediately||this.state===this.states.connecting&&t.error&&Je.isTokenErr(t.error)&&!(this.errorReason&&Je.isTokenErr(this.errorReason)));if(c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager.notifyState()","new state: "+r+(a?"; will retry connection immediately":"")),r==this.state.state||(this.cancelTransitionTimer(),this.cancelRetryTimer(),this.cancelWebSocketSlowTimer(),this.cancelWebSocketGiveUpTimer(),this.checkSuspendTimer(t.state),(r==="suspended"||r==="connected")&&(this.disconnectedRetryCount=0),this.state.terminal))return;let d=this.states[t.state],f=d.retryDelay;d.state==="disconnected"&&(this.disconnectedRetryCount++,f=Kn(d.retryDelay,this.disconnectedRetryCount));let v=new bn(this.state.state,d.state,f,t.error||((i=(n=lt)[d.state])==null?void 0:i.call(n)));if(a){let b=()=>{this.state===this.states.disconnected&&(this.lastAutoReconnectAttempt=Date.now(),this.requestState({state:"connecting"}))},k=this.lastAutoReconnectAttempt&&Date.now()-this.lastAutoReconnectAttempt+1;k&&k<1e3?(c.logAction(this.logger,c.LOG_MICRO,"ConnectionManager.notifyState()","Last reconnect attempt was only "+k+"ms ago, waiting another "+(1e3-k)+"ms before trying again"),setTimeout(b,1e3-k)):w.Config.nextTick(b)}else(r==="disconnected"||r==="suspended")&&this.startRetryTimer(f);(r==="disconnected"&&!a||r==="suspended"||d.terminal)&&w.Config.nextTick(()=>{this.disconnectAllTransports()}),r=="connected"&&!this.activeProtocol&&c.logAction(this.logger,c.LOG_ERROR,"ConnectionManager.notifyState()","Broken invariant: attempted to go into connected state, but there is no active protocol"),this.enactStateChange(v),this.state.sendEvents?this.sendQueuedMessages():this.state.queueEvents||(this.realtime.channels.propogateConnectionInterruption(r,v.reason),this.failQueuedMessages(v.reason))}requestState(t){var n,i;let r=t.state;if(c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager.requestState()","requested state: "+r+"; current state: "+this.state.state),r==this.state.state||(this.cancelWebSocketSlowTimer(),this.cancelWebSocketGiveUpTimer(),this.cancelTransitionTimer(),this.cancelRetryTimer(),this.checkSuspendTimer(r),r=="connecting"&&this.state.state=="connected")||r=="closing"&&this.state.state=="closed")return;let a=this.states[r],d=new bn(this.state.state,a.state,null,t.error||((i=(n=lt)[a.state])==null?void 0:i.call(n)));this.enactStateChange(d),r=="connecting"&&w.Config.nextTick(()=>{this.startConnect()}),r=="closing"&&this.closeImpl()}startConnect(){if(this.state!==this.states.connecting){c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager.startConnect()","Must be in connecting state to connect, but was "+this.state.state);return}let t=this.realtime.auth,n=++this.connectCounter,i=()=>{this.checkConnectionStateFreshness(),this.getTransportParams(r=>{if(r.mode==="recover"&&r.options.recover){let a=ui(r.options.recover);a&&this.realtime.channels.recoverChannels(a.channelSerials)}n===this.connectCounter&&this.connectImpl(r,n)})};if(c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager.startConnect()","starting connection"),this.startSuspendTimer(),this.startTransitionTimer(this.states.connecting),t.method==="basic")i();else{let r=a=>{n===this.connectCounter&&(a?this.actOnErrorFromAuthorize(a):i())};this.errorReason&&Je.isTokenErr(this.errorReason)?ge(t._forceNewToken(null,null),r):ge(t._ensureValidAuthCredentials(!1),r)}}connectImpl(t,n){let i=this.state.state;if(i!==this.states.connecting.state){c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager.connectImpl()","Must be in connecting state to connect, but was "+i);return}let r=this.getTransportPreference();r&&r===this.baseTransport&&this.webSocketTransportAvailable&&this.checkWsConnectivity().then(()=>{this.unpersistTransportPreference(),this.state===this.states.connecting&&(c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager.connectImpl():","web socket connectivity available, cancelling connection attempt with "+this.baseTransport),this.disconnectAllTransports(),this.connectWs(t,++this.connectCounter))}).catch(us),r&&r===this.baseTransport||this.baseTransport&&!this.webSocketTransportAvailable?this.connectBase(t,n):this.connectWs(t,n)}connectWs(t,n){c.logAction(this.logger,c.LOG_MICRO,"ConnectionManager.connectWs()"),this.wsCheckResult=null,this.abandonedWebSocket=!1,this.startWebSocketSlowTimer(),this.startWebSocketGiveUpTimer(t),this.tryTransportWithFallbacks("web_socket",t,!0,n,()=>this.wsCheckResult!==!1&&!this.abandonedWebSocket)}connectBase(t,n){c.logAction(this.logger,c.LOG_MICRO,"ConnectionManager.connectBase()"),this.baseTransport?this.tryTransportWithFallbacks(this.baseTransport,t,!1,n,()=>!0):this.notifyState({state:"disconnected",error:new A("No transports left to try",8e4,404)})}tryTransportWithFallbacks(t,n,i,r,a){c.logAction(this.logger,c.LOG_MICRO,"ConnectionManager.tryTransportWithFallbacks()",t);let d=M=>{this.notifyState({state:this.states.connecting.failState,error:M})},f=this.domains.slice(),v=(M,O)=>{if(r===this.connectCounter){if(!a()){O&&O.dispose();return}!O&&!M&&k()}},b=f.shift();if(!b){d(new A("Unable to connect (no available host)",80003,404));return}n.host=b;let k=()=>{if(!f.length){d(new A("Unable to connect (and no more fallback hosts to try)",80003,404));return}if(!this.realtime.http.checkConnectivity){d(new pe("Internal error: Http.checkConnectivity not set",null,500));return}ge(this.realtime.http.checkConnectivity(),(M,O)=>{if(r===this.connectCounter&&a()){if(M){d(M);return}if(!O){d(new A("Unable to connect (network unreachable)",80003,404));return}n.host=It(f),this.tryATransport(n,t,v)}})};if(this.forceFallbackHost&&f.length){this.forceFallbackHost=!1,k();return}this.tryATransport(n,t,v)}closeImpl(){c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager.closeImpl()","closing connection"),this.cancelSuspendTimer(),this.startTransitionTimer(this.states.closing),this.pendingTransport&&(c.logAction(this.logger,c.LOG_MICRO,"ConnectionManager.closeImpl()","Closing pending transport: "+this.pendingTransport),this.pendingTransport.close()),this.activeProtocol&&(c.logAction(this.logger,c.LOG_MICRO,"ConnectionManager.closeImpl()","Closing active transport: "+this.activeProtocol.getTransport()),this.activeProtocol.getTransport().close()),this.notifyState({state:"closed"})}onAuthUpdated(t,n){var i;switch(this.state.state){case"connected":{c.logAction(this.logger,c.LOG_MICRO,"ConnectionManager.onAuthUpdated()","Sending AUTH message on active transport");let r=(i=this.activeProtocol)==null?void 0:i.getTransport();r&&r.onAuthUpdated&&r.onAuthUpdated(t);let a=Ve({action:j.AUTH,auth:{accessToken:t.token}});this.send(a);let d=()=>{this.off(f),n(null,t)},f=v=>{v.current==="failed"&&(this.off(d),this.off(f),n(v.reason||this.getStateError()))};this.once("connectiondetails",d),this.on("connectionstate",f);break}case"connecting":c.logAction(this.logger,c.LOG_MICRO,"ConnectionManager.onAuthUpdated()","Aborting current connection attempts in order to start again with the new auth details"),this.disconnectAllTransports();default:{c.logAction(this.logger,c.LOG_MICRO,"ConnectionManager.onAuthUpdated()","Connection state is "+this.state.state+"; waiting until either connected or failed");let r=a=>{switch(a.current){case"connected":this.off(r),n(null,t);break;case"failed":case"closed":case"suspended":this.off(r),n(a.reason||this.getStateError());break;default:break}};this.on("connectionstate",r),this.state.state==="connecting"?this.startConnect():this.requestState({state:"connecting"})}}}disconnectAllTransports(){c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager.disconnectAllTransports()","Disconnecting all transports"),this.connectCounter++,this.pendingTransport&&(c.logAction(this.logger,c.LOG_MICRO,"ConnectionManager.disconnectAllTransports()","Disconnecting pending transport: "+this.pendingTransport),this.pendingTransport.disconnect()),delete this.pendingTransport,this.proposedTransport&&(c.logAction(this.logger,c.LOG_MICRO,"ConnectionManager.disconnectAllTransports()","Disconnecting proposed transport: "+this.pendingTransport),this.proposedTransport.disconnect()),delete this.pendingTransport,this.activeProtocol&&(c.logAction(this.logger,c.LOG_MICRO,"ConnectionManager.disconnectAllTransports()","Disconnecting active transport: "+this.activeProtocol.getTransport()),this.activeProtocol.getTransport().disconnect())}send(t,n,i){i=i||us;let r=this.state;if(r.sendEvents){c.logAction(this.logger,c.LOG_MICRO,"ConnectionManager.send()","sending event"),this.sendImpl(new ds(t,i));return}if(!(n&&r.queueEvents)){let d="rejecting event, queueEvent was "+n+", state was "+r.state;c.logAction(this.logger,c.LOG_MICRO,"ConnectionManager.send()",d),i(this.errorReason||new A(d,9e4,400));return}this.logger.shouldLog(c.LOG_MICRO)&&c.logAction(this.logger,c.LOG_MICRO,"ConnectionManager.send()","queueing msg; "+si(t,this.realtime._RealtimePresence,this.realtime._Annotations,this.realtime._liveObjectsPlugin)),this.queue(t,i)}sendImpl(t){let n=t.message;t.ackRequired&&!t.sendAttempted&&(n.msgSerial=this.msgSerial++);try{this.activeProtocol.send(t)}catch(i){c.logAction(this.logger,c.LOG_ERROR,"ConnectionManager.sendImpl()","Unexpected exception in transport.send(): "+i.stack)}}queue(t,n){c.logAction(this.logger,c.LOG_MICRO,"ConnectionManager.queue()","queueing event"),this.queuedMessages.push(new ds(t,n))}sendQueuedMessages(){c.logAction(this.logger,c.LOG_MICRO,"ConnectionManager.sendQueuedMessages()","sending "+this.queuedMessages.count()+" queued messages");let t;for(;t=this.queuedMessages.shift();)this.sendImpl(t)}queuePendingMessages(t){t&&t.length&&(c.logAction(this.logger,c.LOG_MICRO,"ConnectionManager.queuePendingMessages()","queueing "+t.length+" pending messages"),this.queuedMessages.prepend(t))}failQueuedMessages(t){let n=this.queuedMessages.count();n>0&&(c.logAction(this.logger,c.LOG_ERROR,"ConnectionManager.failQueuedMessages()","failing "+n+" queued messages, err = "+te(t)),this.queuedMessages.completeAllMessages(t))}onChannelMessage(t,n){this.pendingChannelMessagesState.queue.push({message:t,transport:n}),this.pendingChannelMessagesState.isProcessing||this.processNextPendingChannelMessage()}processNextPendingChannelMessage(){if(this.pendingChannelMessagesState.queue.length>0){this.pendingChannelMessagesState.isProcessing=!0;let t=this.pendingChannelMessagesState.queue.shift();this.processChannelMessage(t.message).catch(n=>{c.logAction(this.logger,c.LOG_ERROR,"ConnectionManager.processNextPendingChannelMessage() received error ",n)}).finally(()=>{this.pendingChannelMessagesState.isProcessing=!1,this.processNextPendingChannelMessage()})}}async processChannelMessage(t){await this.realtime.channels.processChannelMessage(t)}async ping(){var t;if(this.state.state!=="connected")throw new A("Unable to ping service; not connected",4e4,400);let n=(t=this.activeProtocol)==null?void 0:t.getTransport();if(!n)throw this.getStateError();c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager.ping()","transport = "+n);let i=Date.now(),r=se();return lr(new Promise(a=>{let d=f=>{f===r&&(n.off("heartbeat",d),a(Date.now()-i))};n.on("heartbeat",d),n.ping(r)}),this.options.timeouts.realtimeRequestTimeout,"Timeout waiting for heartbeat response")}abort(t){this.activeProtocol.getTransport().fail(t)}getTransportPreference(){var t,n;return this.transportPreference||hi()&&((n=(t=w.WebStorage)==null?void 0:t.get)==null?void 0:n.call(t,di))}persistTransportPreference(t){var n,i;this.transportPreference=t.shortName,hi()&&((i=(n=w.WebStorage)==null?void 0:n.set)==null||i.call(n,di,t.shortName))}unpersistTransportPreference(){var t,n;this.transportPreference=null,hi()&&((n=(t=w.WebStorage)==null?void 0:t.remove)==null||n.call(t,di))}actOnErrorFromAuthorize(t){if(t.code===40171)this.notifyState({state:"failed",error:t});else if(t.code===40102)this.notifyState({state:"failed",error:t});else if(t.statusCode===dn.Forbidden){let n="Client configured authentication provider returned 403; failing the connection";c.logAction(this.logger,c.LOG_ERROR,"ConnectionManager.actOnErrorFromAuthorize()",n),this.notifyState({state:"failed",error:new A(n,80019,403,t)})}else{let n="Client configured authentication provider request failed";c.logAction(this.logger,c.LOG_MINOR,"ConnectionManager.actOnErrorFromAuthorize",n),this.notifyState({state:this.state.failState,error:new A(n,80019,401,t)})}}onConnectionDetailsUpdate(t,n){if(!t)return;this.connectionDetails=t,t.maxMessageSize&&(this.options.maxMessageSize=t.maxMessageSize);let i=t.clientId;if(i){let a=this.realtime.auth._uncheckedSetClientId(i);if(a){c.logAction(this.logger,c.LOG_ERROR,"ConnectionManager.onConnectionDetailsUpdate()",a.message),n.fail(a);return}}let r=t.connectionStateTtl;r&&(this.connectionStateTtl=r),this.maxIdleInterval=t.maxIdleInterval,this.emit("connectiondetails",t)}checkWsConnectivity(){let t=this.options.wsConnectivityCheckUrl||F.wsConnectivityCheckUrl,n=new w.Config.WebSocket(t);return new Promise((i,r)=>{let a=!1;n.onopen=()=>{a||(a=!0,i(),n.close())},n.onclose=n.onerror=()=>{a||(a=!0,r())}})}sessionRecoveryName(){return this.options.recoveryKeyStorageName||"ably-connection-recovery"}getSessionRecoverData(){var t,n;return Nt()&&((n=(t=w.WebStorage)==null?void 0:t.getSession)==null?void 0:n.call(t,this.sessionRecoveryName()))}setSessionRecoverData(t){var n,i;return Nt()&&((i=(n=w.WebStorage)==null?void 0:n.setSession)==null?void 0:i.call(n,this.sessionRecoveryName(),t))}clearSessionRecoverData(){var t,n;return Nt()&&((n=(t=w.WebStorage)==null?void 0:t.removeSession)==null?void 0:n.call(t,this.sessionRecoveryName()))}},ps=Gc,jc=class extends ke{constructor(e,t){super(e.logger),this.whenState=n=>ke.prototype.whenState.call(this,n,this.state),this.ably=e,this.connectionManager=new ps(e,t),this.state=this.connectionManager.state.state,this.key=void 0,this.id=void 0,this.errorReason=null,this.connectionManager.on("connectionstate",n=>{let i=this.state=n.current;w.Config.nextTick(()=>{this.emit(i,n)})}),this.connectionManager.on("update",n=>{w.Config.nextTick(()=>{this.emit("update",n)})})}connect(){c.logAction(this.logger,c.LOG_MINOR,"Connection.connect()",""),this.connectionManager.requestState({state:"connecting"})}async ping(){return c.logAction(this.logger,c.LOG_MINOR,"Connection.ping()",""),this.connectionManager.ping()}close(){c.logAction(this.logger,c.LOG_MINOR,"Connection.close()","connectionKey = "+this.key),this.connectionManager.requestState({state:"closing"})}get recoveryKey(){return this.logger.deprecationWarning("The `Connection.recoveryKey` attribute has been replaced by the `Connection.createRecoveryKey()` method. Replace your usage of `recoveryKey` with the return value of `createRecoveryKey()`. `recoveryKey` will be removed in a future version."),this.createRecoveryKey()}createRecoveryKey(){return this.connectionManager.createRecoveryKey()}},Fc=jc,fs=class qs extends Vr{constructor(t){var n,i;if(super(F.objectifyOptions(t,!1,"BaseRealtime",c.defaultLogger)),c.logAction(this.logger,c.LOG_MINOR,"Realtime()",""),typeof EdgeRuntime=="string")throw new A(`Ably.Realtime instance cannot be used in Vercel Edge runtime. If you are running Vercel Edge functions, please replace your "new Ably.Realtime()" with "new Ably.Rest()" and use Ably Rest API instead of the Realtime API. If you are server-rendering your application in the Vercel Edge runtime, please use the condition "if (typeof EdgeRuntime === 'string')" to prevent instantiating Ably.Realtime instance during SSR in the Vercel Edge runtime.`,4e4,400);this._additionalTransportImplementations=qs.transportImplementationsFromPlugins(this.options.plugins),this._RealtimePresence=(i=(n=this.options.plugins)==null?void 0:n.RealtimePresence)!=null?i:null,this.connection=new Fc(this,this.options),this._channels=new zc(this),this.options.autoConnect!==!1&&this.connect()}static transportImplementationsFromPlugins(t){let n={};return t?.WebSocketTransport&&(n[Le.WebSocket]=t.WebSocketTransport),t?.XHRPolling&&(n[Le.XhrPolling]=t.XHRPolling),n}get channels(){return this._channels}get clientId(){return this.auth.clientId}connect(){c.logAction(this.logger,c.LOG_MINOR,"Realtime.connect()",""),this.connection.connect()}close(){c.logAction(this.logger,c.LOG_MINOR,"Realtime.close()",""),this.connection.close()}};fs.EventEmitter=ke;var Wc=fs,zc=class extends ke{constructor(e){super(e.logger),this.realtime=e,this.all=Object.create(null),e.connection.connectionManager.on("transport.active",()=>{this.onTransportActive()})}channelSerials(){let e={};for(let t of st(this.all,!0)){let n=this.all[t];n.properties.channelSerial&&(e[t]=n.properties.channelSerial)}return e}recoverChannels(e){for(let t of st(e,!0)){let n=this.get(t);n.properties.channelSerial=e[t]}}async processChannelMessage(e){let t=e.channel;if(t===void 0){c.logAction(this.logger,c.LOG_ERROR,"Channels.processChannelMessage()","received event unspecified channel, action = "+e.action);return}let n=this.all[t];if(!n){c.logAction(this.logger,c.LOG_ERROR,"Channels.processChannelMessage()","received event for non-existent channel: "+t);return}await n.processMessage(e)}onTransportActive(){for(let e in this.all){let t=this.all[e];t.state==="attaching"||t.state==="detaching"?t.checkPendingState():t.state==="suspended"?t._attach(!1,null):t.state==="attached"&&t.requestState("attaching")}}propogateConnectionInterruption(e,t){let n={closing:"detached",closed:"detached",failed:"failed",suspended:"suspended"},i=["attaching","attached","detaching","suspended"],r=n[e];for(let a in this.all){let d=this.all[a];i.includes(d.state)&&d.notifyState(r,t)}}get(e,t){e=String(e);let n=this.all[e];if(!n)n=this.all[e]=new Lt(this.realtime,e,t);else if(t){if(n._shouldReattachToSetOptions(t,n.channelOptions))throw new A("Channels.get() cannot be used to set channel options that would cause the channel to reattach. Please, use RealtimeChannel.setOptions() instead.",4e4,400);n.setOptions(t)}return n}getDerived(e,t,n){if(t.filter){let i=cn(t.filter),r=ar(e);e=`[filter=${i}${r.qualifierParam}]${r.channelName}`}return this.get(e,n)}release(e){e=String(e);let t=this.all[e];if(!t)return;let n=t.getReleaseErr();if(n)throw n;delete this.all[e]}},$c=Wc;function Kc(e,t){if(e.isSynthesized()||t.isSynthesized())return e.timestamp>=t.timestamp;let n=e.parseId(),i=t.parseId();return n.msgSerial===i.msgSerial?n.index>i.index:n.msgSerial>i.msgSerial}var pi=class extends ke{constructor(e,t,n=Kc){super(e.logger),this.presence=e,this.map=Object.create(null),this.syncInProgress=!1,this.residualMembers=null,this.memberKey=t,this.newerThan=n}get(e){return this.map[e]}getClient(e){let t=this.map,n=[];for(let i in t){let r=t[i];r.clientId==e&&r.action!="absent"&&n.push(r)}return n}list(e){let t=this.map,n=e&&e.clientId,i=e&&e.connectionId,r=[];for(let a in t){let d=t[a];d.action!=="absent"&&(n&&n!=d.clientId||i&&i!=d.connectionId||r.push(d))}return r}put(e){(e.action==="enter"||e.action==="update")&&(e=Ye.fromValues(e),e.action="present");let t=this.map,n=this.memberKey(e);this.residualMembers&&delete this.residualMembers[n];let i=t[n];return i&&!this.newerThan(e,i)?!1:(t[n]=e,!0)}values(){let e=this.map,t=[];for(let n in e){let i=e[n];i.action!="absent"&&t.push(i)}return t}remove(e){let t=this.map,n=this.memberKey(e),i=t[n];return i&&!this.newerThan(e,i)?!1:(this.syncInProgress?(e=Ye.fromValues(e),e.action="absent",t[n]=e):delete t[n],!!i)}startSync(){let e=this.map,t=this.syncInProgress;c.logAction(this.logger,c.LOG_MINOR,"PresenceMap.startSync()","channel = "+this.presence.channel.name+"; syncInProgress = "+t),this.syncInProgress||(this.residualMembers=Pe(e),this.setInProgress(!0))}endSync(){let e=this.map,t=this.syncInProgress;if(c.logAction(this.logger,c.LOG_MINOR,"PresenceMap.endSync()","channel = "+this.presence.channel.name+"; syncInProgress = "+t),t){for(let n in e)e[n].action==="absent"&&delete e[n];this.presence._synthesizeLeaves(rn(this.residualMembers));for(let n in this.residualMembers)delete e[n];this.residualMembers=null,this.setInProgress(!1)}this.emit("sync")}async waitSync(){let e=this.syncInProgress;c.logAction(this.logger,c.LOG_MINOR,"PresenceMap.waitSync()","channel = "+this.presence.channel.name+"; syncInProgress = "+e),e&&await this.once("sync")}clear(){this.map={},this.setInProgress(!1),this.residualMembers=null}setInProgress(e){c.logAction(this.logger,c.LOG_MICRO,"PresenceMap.setInProgress()","inProgress = "+e),this.syncInProgress=e,this.presence.syncComplete=!e}};function Jc(e){return e.channel.client.auth.clientId}function fi(e){let t=e.channel.client,n=t.auth.clientId;return(!n||n==="*")&&t.connection.state==="connected"}var Yc=class extends ke{constructor(e){super(e.logger),this.channel=e,this.syncComplete=!1,this.members=new pi(this,t=>t.clientId+":"+t.connectionId),this._myMembers=new pi(this,t=>t.clientId),this.subscriptions=new ke(this.logger),this.pendingPresence=[]}async enter(e){if(fi(this))throw new A("clientId must be specified to enter a presence channel",40012,400);return this._enterOrUpdateClient(void 0,void 0,e,"enter")}async update(e){if(fi(this))throw new A("clientId must be specified to update presence data",40012,400);return this._enterOrUpdateClient(void 0,void 0,e,"update")}async enterClient(e,t){return this._enterOrUpdateClient(void 0,e,t,"enter")}async updateClient(e,t){return this._enterOrUpdateClient(void 0,e,t,"update")}async _enterOrUpdateClient(e,t,n,i){let r=this.channel;if(!r.connectionManager.activeState())throw r.connectionManager.getError();c.logAction(this.logger,c.LOG_MICRO,"RealtimePresence."+i+"Client()","channel = "+r.name+", id = "+e+", client = "+(t||"(implicit) "+Jc(this)));let a=Ye.fromData(n);a.action=i,e&&(a.id=e),t&&(a.clientId=t);let d=await a.encode(r.channelOptions);switch(r.state){case"attached":return r.sendPresence([d]);case"initialized":case"detached":r.attach();case"attaching":return new Promise((f,v)=>{this.pendingPresence.push({presence:d,callback:b=>b?v(b):f()})});default:{let f=new pe("Unable to "+i+" presence channel while in "+r.state+" state",90001);throw f.code=90001,f}}}async leave(e){if(fi(this))throw new A("clientId must have been specified to enter or leave a presence channel",40012,400);return this.leaveClient(void 0,e)}async leaveClient(e,t){let n=this.channel;if(!n.connectionManager.activeState())throw n.connectionManager.getError();c.logAction(this.logger,c.LOG_MICRO,"RealtimePresence.leaveClient()","leaving; channel = "+this.channel.name+", client = "+e);let i=Ye.fromData(t);i.action="leave",e&&(i.clientId=e);let r=await i.encode(n.channelOptions);switch(n.state){case"attached":return n.sendPresence([r]);case"attaching":return new Promise((a,d)=>{this.pendingPresence.push({presence:r,callback:f=>f?d(f):a()})});case"initialized":case"failed":throw new pe("Unable to leave presence channel (incompatible state)",90001);default:throw n.invalidStateError()}}async get(e){let t=!e||("waitForSync"in e?e.waitForSync:!0);function n(r){return e?r.list(e):r.values()}if(this.channel.state==="suspended"){if(t)throw A.fromValues({statusCode:400,code:91005,message:"Presence state is out of sync due to channel being in the SUSPENDED state"});return n(this.members)}await this.channel.ensureAttached();let i=this.members;return t&&await i.waitSync(),n(this.members)}async history(e){c.logAction(this.logger,c.LOG_MICRO,"RealtimePresence.history()","channel = "+this.name);let t=this.channel.client.rest.presenceMixin;if(e&&e.untilAttach)if(this.channel.state==="attached")delete e.untilAttach,e.from_serial=this.channel.properties.attachSerial;else throw new A("option untilAttach requires the channel to be attached, was: "+this.channel.state,4e4,400);return t.history(this,e)}setPresence(e,t,n){c.logAction(this.logger,c.LOG_MICRO,"RealtimePresence.setPresence()","received presence for "+e.length+" participants; syncChannelSerial = "+n);let i,r,a=this.members,d=this._myMembers,f=[],v=this.channel.connectionManager.connectionId;t&&(this.members.startSync(),n&&(r=n.match(/^[\w-]+:(.*)$/))&&(i=r[1]));for(let b of e)switch(b.action){case"leave":a.remove(b)&&f.push(b),b.connectionId===v&&!b.isSynthesized()&&d.remove(b);break;case"enter":case"present":case"update":a.put(b)&&f.push(b),b.connectionId===v&&d.put(b);break}t&&!i&&(a.endSync(),this.channel.syncChannelSerial=null);for(let b=0;b<f.length;b++){let k=f[b];this.subscriptions.emit(k.action,k)}}onAttached(e){c.logAction(this.logger,c.LOG_MINOR,"RealtimePresence.onAttached()","channel = "+this.channel.name+", hasPresence = "+e),e?this.members.startSync():(this._synthesizeLeaves(this.members.values()),this.members.clear()),this._ensureMyMembersPresent();let t=this.pendingPresence,n=t.length;if(n){this.pendingPresence=[];let i=[],r=yr.create(this.logger);c.logAction(this.logger,c.LOG_MICRO,"RealtimePresence.onAttached","sending "+n+" queued presence messages");for(let a=0;a<n;a++){let d=t[a];i.push(d.presence),r.push(d.callback)}this.channel.sendPresence(i).then(()=>r()).catch(a=>r(a))}}actOnChannelState(e,t,n){switch(e){case"attached":this.onAttached(t);break;case"detached":case"failed":this._clearMyMembers(),this.members.clear();case"suspended":this.failPendingPresence(n);break}}failPendingPresence(e){if(this.pendingPresence.length){c.logAction(this.logger,c.LOG_MINOR,"RealtimeChannel.failPendingPresence","channel; name = "+this.channel.name+", err = "+te(e));for(let t=0;t<this.pendingPresence.length;t++)try{this.pendingPresence[t].callback(e)}catch{}this.pendingPresence=[]}}_clearMyMembers(){this._myMembers.clear()}_ensureMyMembersPresent(){let e=this._myMembers,t=this.channel.connectionManager.connectionId;for(let n in e.map){let i=e.map[n];c.logAction(this.logger,c.LOG_MICRO,"RealtimePresence._ensureMyMembersPresent()",'Auto-reentering clientId "'+i.clientId+'" into the presence set');let r=i.connectionId===t?i.id:void 0;this._enterOrUpdateClient(r,i.clientId,i.data,"enter").catch(a=>{let d=new A("Presence auto re-enter failed",91004,400,a);c.logAction(this.logger,c.LOG_ERROR,"RealtimePresence._ensureMyMembersPresent()","Presence auto re-enter failed; reason = "+te(a));let f=new ai(this.channel.state,this.channel.state,!0,!1,d);this.channel.emit("update",f)})}}_synthesizeLeaves(e){let t=this.subscriptions;e.forEach(function(n){let i=Ye.fromValues({action:"leave",connectionId:n.connectionId,clientId:n.clientId,data:n.data,encoding:n.encoding,timestamp:Date.now()});t.emit("leave",i)})}async subscribe(...e){let t=Lt.processListenerArgs(e),n=t[0],i=t[1],r=this.channel;if(r.state==="failed")throw A.fromValues(r.invalidStateError());this.subscriptions.on(n,i),r.channelOptions.attachOnSubscribe!==!1&&await r.attach()}unsubscribe(...e){let t=Lt.processListenerArgs(e),n=t[0],i=t[1];this.subscriptions.off(n,i)}},Qc=Yc,Xc=Le.WebSocket;function Zc(e){return!!e.on}var el=class extends wt{constructor(e,t,n){super(e,t,n),this.shortName=Xc,n.heartbeats=w.Config.useProtocolHeartbeats,this.wsHost=n.host}static isAvailable(){return!!w.Config.WebSocket}createWebSocket(e,t){return this.uri=e+ot(t),new w.Config.WebSocket(this.uri)}toString(){return"WebSocketTransport; uri="+this.uri}connect(){c.logAction(this.logger,c.LOG_MINOR,"WebSocketTransport.connect()","starting"),wt.prototype.connect.call(this);let e=this,t=this.params,n=t.options,r=(n.tls?"wss://":"ws://")+this.wsHost+":"+F.getPort(n)+"/";c.logAction(this.logger,c.LOG_MINOR,"WebSocketTransport.connect()","uri: "+r),ge(this.auth.getAuthParams(),function(a,d){if(e.isDisposed)return;let f="";for(let b in d)f+=" "+b+": "+d[b]+";";if(c.logAction(e.logger,c.LOG_MINOR,"WebSocketTransport.connect()","authParams:"+f+" err: "+a),a){e.disconnect(a);return}let v=t.getConnectParams(d);try{let b=e.wsConnection=e.createWebSocket(r,v);b.binaryType=w.Config.binaryType,b.onopen=function(){e.onWsOpen()},b.onclose=function(k){e.onWsClose(k)},b.onmessage=function(k){e.onWsData(k.data)},b.onerror=function(k){e.onWsError(k)},Zc(b)&&b.on("ping",function(){e.onActivity()})}catch(b){c.logAction(e.logger,c.LOG_ERROR,"WebSocketTransport.connect()","Unexpected exception creating websocket: err = "+(b.stack||b.message)),e.disconnect(b)}})}send(e){let t=this.wsConnection;if(!t){c.logAction(this.logger,c.LOG_ERROR,"WebSocketTransport.send()","No socket connection");return}try{t.send(xc(e,this.connectionManager.realtime._MsgPack,this.params.format))}catch(n){let i="Exception from ws connection when trying to send: "+te(n);c.logAction(this.logger,c.LOG_ERROR,"WebSocketTransport.send()",i),this.finish("disconnected",new A(i,5e4,500))}}onWsData(e){c.logAction(this.logger,c.LOG_MICRO,"WebSocketTransport.onWsData()","data received; length = "+e.length+"; type = "+typeof e);try{this.onProtocolMessage(kc(e,this.connectionManager.realtime._MsgPack,this.connectionManager.realtime._RealtimePresence,this.connectionManager.realtime._Annotations,this.connectionManager.realtime._liveObjectsPlugin,this.format))}catch(t){c.logAction(this.logger,c.LOG_ERROR,"WebSocketTransport.onWsData()","Unexpected exception handing channel message: "+t.stack)}}onWsOpen(){c.logAction(this.logger,c.LOG_MINOR,"WebSocketTransport.onWsOpen()","opened WebSocket"),this.emit("preconnect")}onWsClose(e){let t,n;if(typeof e=="object"?(n=e.code,t=e.wasClean||n===1e3):(n=e,t=n==1e3),delete this.wsConnection,t){c.logAction(this.logger,c.LOG_MINOR,"WebSocketTransport.onWsClose()","Cleanly closed WebSocket");let i=new A("Websocket closed",80003,400);this.finish("disconnected",i)}else{let i="Unclean disconnection of WebSocket ; code = "+n,r=new A(i,80003,400);c.logAction(this.logger,c.LOG_MINOR,"WebSocketTransport.onWsClose()",i),this.finish("disconnected",r)}this.emit("disposed")}onWsError(e){c.logAction(this.logger,c.LOG_MINOR,"WebSocketTransport.onError()","Error from WebSocket: "+e.message),w.Config.nextTick(()=>{this.disconnect(Error(e.message))})}dispose(){c.logAction(this.logger,c.LOG_MINOR,"WebSocketTransport.dispose()",""),this.isDisposed=!0;let e=this.wsConnection;e&&(e.onmessage=function(){},delete this.wsConnection,w.Config.nextTick(()=>{if(c.logAction(this.logger,c.LOG_MICRO,"WebSocketTransport.dispose()","closing websocket"),!e)throw new Error("WebSocketTransport.dispose(): wsConnection is not defined");e.close()}))}},gs=el,tl=class{static subscribeFilter(e,t,n){let i=r=>{var a,d,f,v,b,k;let M={name:r.name,refTimeserial:(d=(a=r.extras)==null?void 0:a.ref)==null?void 0:d.timeserial,refType:(v=(f=r.extras)==null?void 0:f.ref)==null?void 0:v.type,isRef:!!((k=(b=r.extras)==null?void 0:b.ref)!=null&&k.timeserial),clientId:r.clientId};Object.entries(t).find(([O,x])=>x!==void 0?M[O]!==x:!1)||n(r)};this.addFilteredSubscription(e,t,n,i),e.subscriptions.on(i)}static addFilteredSubscription(e,t,n,i){var r;if(e.filteredSubscriptions||(e.filteredSubscriptions=new Map),e.filteredSubscriptions.has(n)){let a=e.filteredSubscriptions.get(n);a.set(t,((r=a?.get(t))==null?void 0:r.concat(i))||[i])}else e.filteredSubscriptions.set(n,new Map([[t,[i]]]))}static getAndDeleteFilteredSubscriptions(e,t,n){if(!e.filteredSubscriptions)return[];if(!n&&t)return Array.from(e.filteredSubscriptions.entries()).map(([a,d])=>{var f;let v=d.get(t);return d.delete(t),d.size===0&&((f=e.filteredSubscriptions)==null||f.delete(a)),v}).reduce((a,d)=>d?a.concat(...d):a,[]);if(!n||!e.filteredSubscriptions.has(n))return[];let i=e.filteredSubscriptions.get(n);if(!t){let a=Array.from(i.values()).reduce((d,f)=>d.concat(...f),[]);return e.filteredSubscriptions.delete(n),a}let r=i.get(t);return i.delete(t),r||[]}},je=class Ei extends $c{constructor(t){var n;let i=Ei._MsgPack;if(!i)throw new Error("Expected DefaultRealtime._MsgPack to have been set");super(F.objectifyOptions(t,!0,"Realtime",c.defaultLogger,I(y({},Xr),{Crypto:(n=Ei.Crypto)!=null?n:void 0,MsgPack:i,RealtimePresence:{RealtimePresence:Qc,PresenceMessage:Ye,WirePresenceMessage:Et},Annotations:{Annotation:yt,WireAnnotation:vt,RealtimeAnnotations:ci,RestAnnotations:gn},WebSocketTransport:gs,MessageInteractions:tl})))}static get Crypto(){if(this._Crypto===null)throw new Error("Encryption not enabled; use ably.encryption.js instead");return this._Crypto}static set Crypto(t){this._Crypto=t}};je.Utils=ie,je.ConnectionManager=ps,je.ProtocolMessage=Sc,je._Crypto=null,je.Message=Zr,je.PresenceMessage=es,je.Annotation=rs,je._MsgPack=null,je._Http=Zn,je._PresenceMap=pi,je._MessageEncoding=un;var gi=je,mi=Uint8Array,Bt=Uint32Array,bi=Math.pow,ms=new Bt(8),bs=[],Ut=new Bt(64);function vs(e){return(e-(e|0))*bi(2,32)|0}for(var qt=2,Dt=0;Dt<64;){for(vi=!0,vn=2;vn<=qt/2;vn++)qt%vn===0&&(vi=!1);vi&&(Dt<8&&(ms[Dt]=vs(bi(qt,1/2))),bs[Dt]=vs(bi(qt,1/3)),Dt++),qt++}var vi,vn,nl=!!new mi(new Bt([1]).buffer)[0];function yi(e){return nl?e>>>24|(e>>>16&255)<<8|(e&65280)<<8|e<<24:e}function Ke(e,t){return e>>>t|e<<32-t}function yn(e){var t=ms.slice(),n=e.length,i=n*8,r=512-(i+64)%512-1+i+65,a=new mi(r/8),d=new Bt(a.buffer);a.set(e,0),a[n]=128,d[d.length-1]=yi(i);for(var f,v=0;v<r/32;v+=16){var b=t.slice();for(f=0;f<64;f++){var k;if(f<16)k=yi(d[v+f]);else{var M=Ut[f-15],O=Ut[f-2];k=Ut[f-7]+Ut[f-16]+(Ke(M,7)^Ke(M,18)^M>>>3)+(Ke(O,17)^Ke(O,19)^O>>>10)}Ut[f]=k|=0;for(var x=(Ke(b[4],6)^Ke(b[4],11)^Ke(b[4],25))+(b[4]&b[5]^~b[4]&b[6])+b[7]+k+bs[f],V=(Ke(b[0],2)^Ke(b[0],13)^Ke(b[0],22))+(b[0]&b[1]^b[2]&(b[0]^b[1])),L=7;L>0;L--)b[L]=b[L-1];b[0]=x+V|0,b[4]=b[4]+x|0}for(f=0;f<8;f++)t[f]=t[f]+b[f]|0}return new mi(new Bt(t.map(function(W){return yi(W)})).buffer)}function il(e,t){if(e.length>64&&(e=yn(e)),e.length<64){let f=new Uint8Array(64);f.set(e,0),e=f}for(var n=new Uint8Array(64),i=new Uint8Array(64),r=0;r<64;r++)n[r]=54^e[r],i[r]=92^e[r];var a=new Uint8Array(t.length+64);a.set(n,0),a.set(t,64);var d=new Uint8Array(96);return d.set(i,0),d.set(yn(a),64),yn(d)}var rl=class{constructor(){this.base64CharSet="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",this.hexCharSet="0123456789abcdef"}uint8ViewToBase64(e){let t="",n=this.base64CharSet,i=e.byteLength,r=i%3,a=i-r,d,f,v,b,k;for(let M=0;M<a;M=M+3)k=e[M]<<16|e[M+1]<<8|e[M+2],d=(k&16515072)>>18,f=(k&258048)>>12,v=(k&4032)>>6,b=k&63,t+=n[d]+n[f]+n[v]+n[b];return r==1?(k=e[a],d=(k&252)>>2,f=(k&3)<<4,t+=n[d]+n[f]+"=="):r==2&&(k=e[a]<<8|e[a+1],d=(k&64512)>>10,f=(k&1008)>>4,v=(k&15)<<2,t+=n[d]+n[f]+n[v]+"="),t}base64ToArrayBuffer(e){let t=atob?.(e),n=t.length,i=new Uint8Array(n);for(let r=0;r<n;r++){let a=t.charCodeAt(r);i[r]=a}return this.toArrayBuffer(i)}isBuffer(e){return e instanceof ArrayBuffer||ArrayBuffer.isView(e)}toBuffer(e){if(!ArrayBuffer)throw new Error("Can't convert to Buffer: browser does not support the necessary types");if(e instanceof ArrayBuffer)return new Uint8Array(e);if(ArrayBuffer.isView(e))return new Uint8Array(this.toArrayBuffer(e));throw new Error("BufferUtils.toBuffer expected an ArrayBuffer or a view onto one")}toArrayBuffer(e){if(!ArrayBuffer)throw new Error("Can't convert to ArrayBuffer: browser does not support the necessary types");if(e instanceof ArrayBuffer)return e;if(ArrayBuffer.isView(e))return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength);throw new Error("BufferUtils.toArrayBuffer expected an ArrayBuffer or a view onto one")}base64Encode(e){return this.uint8ViewToBase64(this.toBuffer(e))}base64UrlEncode(e){return this.base64Encode(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}base64Decode(e){if(ArrayBuffer&&w.Config.atob)return this.base64ToArrayBuffer(e);throw new Error("Expected ArrayBuffer to exist and Platform.Config.atob to be configured")}hexEncode(e){return this.toBuffer(e).reduce((n,i)=>n+i.toString(16).padStart(2,"0"),"")}hexDecode(e){if(e.length%2!==0)throw new Error("Can't create a byte array from a hex string of odd length");let t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++)t[n]=parseInt(e.slice(2*n,2*(n+1)),16);return this.toArrayBuffer(t)}utf8Encode(e){if(w.Config.TextEncoder){let t=new w.Config.TextEncoder().encode(e);return this.toArrayBuffer(t)}else throw new Error("Expected TextEncoder to be configured")}utf8Decode(e){if(!this.isBuffer(e))throw new Error("Expected input of utf8decode to be an arraybuffer or typed array");if(TextDecoder)return new TextDecoder().decode(e);throw new Error("Expected TextDecoder to be configured")}areBuffersEqual(e,t){if(!e||!t)return!1;let n=this.toArrayBuffer(e),i=this.toArrayBuffer(t);if(n.byteLength!=i.byteLength)return!1;let r=new Uint8Array(n),a=new Uint8Array(i);for(var d=0;d<r.length;d++)if(r[d]!=a[d])return!1;return!0}byteLength(e){return e instanceof ArrayBuffer||ArrayBuffer.isView(e)?e.byteLength:-1}arrayBufferViewToBuffer(e){return this.toArrayBuffer(e)}concat(e){let t=e.reduce((r,a)=>r+a.byteLength,0),n=new Uint8Array(t),i=0;for(let r of e){let a=this.toBuffer(r);n.set(a,i),i+=a.byteLength}return n.buffer}sha256(e){let t=yn(this.toBuffer(e));return this.toArrayBuffer(t)}hmacSha256(e,t){let n=il(this.toBuffer(t),this.toBuffer(e));return this.toArrayBuffer(n)}},ys=new rl,sl=function(e,t){var n="aes",i=256,r="cbc",a=16;function d(O){if(O.algorithm==="aes"&&O.mode==="cbc"){if(O.keyLength===128||O.keyLength===256)return;throw new Error("Unsupported key length "+O.keyLength+" for aes-cbc encryption. Encryption key must be 128 or 256 bits (16 or 32 ASCII characters)")}}function f(O){return O.replace("_","/").replace("-","+")}function v(O){return O instanceof b}class b{constructor(x,V,L,W){this.algorithm=x,this.keyLength=V,this.mode=L,this.key=W}}class k{static getDefaultParams(x){var V;if(!x.key)throw new Error("Crypto.getDefaultParams: a key is required");typeof x.key=="string"?V=t.toArrayBuffer(t.base64Decode(f(x.key))):x.key instanceof ArrayBuffer?V=x.key:V=t.toArrayBuffer(x.key);var L=x.algorithm||n,W=V.byteLength*8,ne=x.mode||r,ce=new b(L,W,ne,V);if(x.keyLength&&x.keyLength!==ce.keyLength)throw new Error("Crypto.getDefaultParams: a keyLength of "+x.keyLength+" was specified, but the key actually has length "+ce.keyLength);return d(ce),ce}static async generateRandomKey(x){try{return e.getRandomArrayBuffer((x||i)/8)}catch(V){throw new A("Failed to generate random key: "+V.message,400,5e4)}}static getCipher(x,V){var L,W=v(x)?x:this.getDefaultParams(x);return{cipherParams:W,cipher:new M(W,(L=x.iv)!=null?L:null,V)}}}k.CipherParams=b;class M{constructor(x,V,L){if(this.logger=L,!crypto.subtle)throw isSecureContext?new Error("Crypto operations are not possible since the browser\u2019s SubtleCrypto class is unavailable (reason unknown)."):new Error("Crypto operations are is not possible since the current environment is a non-secure context and hence the browser\u2019s SubtleCrypto class is not available.");this.algorithm=x.algorithm+"-"+String(x.keyLength)+"-"+x.mode,this.webCryptoAlgorithm=x.algorithm+"-"+x.mode,this.key=t.toArrayBuffer(x.key),this.iv=V?t.toArrayBuffer(V):null}concat(x,V){let L=new ArrayBuffer(x.byteLength+V.byteLength),W=new DataView(L),ne=new DataView(t.toArrayBuffer(x));for(let ue=0;ue<ne.byteLength;ue++)W.setInt8(ue,ne.getInt8(ue));let ce=new DataView(t.toArrayBuffer(V));for(let ue=0;ue<ce.byteLength;ue++)W.setInt8(ne.byteLength+ue,ce.getInt8(ue));return L}async encrypt(x){c.logAction(this.logger,c.LOG_MICRO,"CBCCipher.encrypt()","");let V=await this.getIv(),L=await crypto.subtle.importKey("raw",this.key,this.webCryptoAlgorithm,!1,["encrypt"]),W=await crypto.subtle.encrypt({name:this.webCryptoAlgorithm,iv:V},L,x);return this.concat(V,W)}async decrypt(x){c.logAction(this.logger,c.LOG_MICRO,"CBCCipher.decrypt()","");let V=t.toArrayBuffer(x),L=V.slice(0,a),W=V.slice(a),ne=await crypto.subtle.importKey("raw",this.key,this.webCryptoAlgorithm,!1,["decrypt"]);return crypto.subtle.decrypt({name:this.webCryptoAlgorithm,iv:L},ne,W)}async getIv(){if(this.iv){var x=this.iv;return this.iv=null,x}let V=await e.getRandomArrayBuffer(a);return t.toArrayBuffer(V)}}return k},ws=(e=>(e[e.REQ_SEND=0]="REQ_SEND",e[e.REQ_RECV=1]="REQ_RECV",e[e.REQ_RECV_POLL=2]="REQ_RECV_POLL",e[e.REQ_RECV_STREAM=3]="REQ_RECV_STREAM",e))(ws||{}),Qe=ws;function _s(){return new A("No HTTP request plugin provided. Provide at least one of the FetchRequest or XHRRequest plugins.",400,4e4)}var Ht,As=(Ht=class{constructor(e){this.checksInProgress=null,this.checkConnectivity=void 0,this.supportsAuthHeaders=!1,this.supportsLinkHeaders=!1;var t;this.client=e??null;let n=e?.options.connectivityCheckUrl||F.connectivityCheckUrl,i=(t=e?.options.connectivityCheckParams)!=null?t:null,r=!e?.options.connectivityCheckUrl,a=y(y({},As.bundledRequestImplementations),e?._additionalHTTPRequestImplementations),d=a.XHRRequest,f=a.FetchRequest,v=!!(d||f);if(!v)throw _s();w.Config.xhrSupported&&d?(this.supportsAuthHeaders=!0,this.Request=async function(b,k,M,O,x){return new Promise(V=>{var L;let W=d.createRequest(k,M,O,x,Qe.REQ_SEND,(L=e&&e.options.timeouts)!=null?L:null,this.logger,b);W.once("complete",(ne,ce,ue,K,De)=>V({error:ne,body:ce,headers:ue,unpacked:K,statusCode:De})),W.exec()})},e?.options.disableConnectivityCheck?this.checkConnectivity=async function(){return!0}:this.checkConnectivity=async function(){var b;c.logAction(this.logger,c.LOG_MICRO,"(XHRRequest)Http.checkConnectivity()","Sending; "+n);let k=await this.doUri(we.Get,n,null,null,i),M=!1;return r?M=!k.error&&((b=k.body)==null?void 0:b.replace(/\n/,""))=="yes":M=!k.error&&Ma(k.statusCode),c.logAction(this.logger,c.LOG_MICRO,"(XHRRequest)Http.checkConnectivity()","Result: "+M),M}):w.Config.fetchSupported&&f?(this.supportsAuthHeaders=!0,this.Request=async(b,k,M,O,x)=>f(b,e??null,k,M,O,x),e?.options.disableConnectivityCheck?this.checkConnectivity=async function(){return!0}:this.checkConnectivity=async function(){var b;c.logAction(this.logger,c.LOG_MICRO,"(Fetch)Http.checkConnectivity()","Sending; "+n);let k=await this.doUri(we.Get,n,null,null,null),M=!k.error&&((b=k.body)==null?void 0:b.replace(/\n/,""))=="yes";return c.logAction(this.logger,c.LOG_MICRO,"(Fetch)Http.checkConnectivity()","Result: "+M),M}):this.Request=async()=>({error:v?new pe("no supported HTTP transports available",null,400):_s()})}get logger(){var e,t;return(t=(e=this.client)==null?void 0:e.logger)!=null?t:c.defaultLogger}async doUri(e,t,n,i,r){return this.Request?this.Request(e,t,n,r,i):{error:new pe("Request invoked before assigned to",null,500)}}shouldFallback(e){let t=e.statusCode;return t===408&&!e.code||t===400&&!e.code||t>=500&&t<=504}},Ht.methods=[we.Get,we.Delete,we.Post,we.Put,we.Patch],Ht.methodsWithoutBody=[we.Get,we.Delete],Ht.methodsWithBody=[we.Post,we.Put,we.Patch],Ht),Cs=As,_t="ablyjs-storage-test",At=typeof global<"u"?global:typeof window<"u"?window:self,ol=class{constructor(){try{At.sessionStorage.setItem(_t,_t),At.sessionStorage.removeItem(_t),this.sessionSupported=!0}catch{this.sessionSupported=!1}try{At.localStorage.setItem(_t,_t),At.localStorage.removeItem(_t),this.localSupported=!0}catch{this.localSupported=!1}}get(e){return this._get(e,!1)}getSession(e){return this._get(e,!0)}remove(e){return this._remove(e,!1)}removeSession(e){return this._remove(e,!0)}set(e,t,n){return this._set(e,t,n,!1)}setSession(e,t,n){return this._set(e,t,n,!0)}_set(e,t,n,i){let r={value:t};return n&&(r.expires=Date.now()+n),this.storageInterface(i).setItem(e,JSON.stringify(r))}_get(e,t){if(t&&!this.sessionSupported)throw new Error("Session Storage not supported");if(!t&&!this.localSupported)throw new Error("Local Storage not supported");let n=this.storageInterface(t).getItem(e);if(!n)return null;let i=JSON.parse(n);return i.expires&&i.expires<Date.now()?(this.storageInterface(t).removeItem(e),null):i.value}_remove(e,t){return this.storageInterface(t).removeItem(e)}storageInterface(e){return e?At.sessionStorage:At.localStorage}},xs=new ol,Ae=Jn(),al=typeof EdgeRuntime=="string";typeof Window>"u"&&typeof WorkerGlobalScope>"u"&&!al&&console.log("Warning: this distribution of Ably is intended for browsers. On nodejs, please use the 'ably' package on npm");function cl(){let e=Ae.location;return!Ae.WebSocket||!e||!e.origin||e.origin.indexOf("http")>-1}function ll(){return typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope}var hl=Ae.navigator&&Ae.navigator.userAgent.toString(),dl=Ae.location&&Ae.location.href,ul={agent:"browser",logTimestamps:!0,userAgent:hl,currentUrl:dl,binaryType:"arraybuffer",WebSocket:Ae.WebSocket,fetchSupported:!!Ae.fetch,xhrSupported:Ae.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest,allowComet:cl(),useProtocolHeartbeats:!0,supportsBinary:!!Ae.TextDecoder,preferBinary:!1,ArrayBuffer:Ae.ArrayBuffer,atob:Ae.atob,nextTick:typeof Ae.queueMicrotask=="function"?e=>Ae.queueMicrotask(e):e=>Promise.resolve().then(e),addEventListener:Ae.addEventListener,inspect:JSON.stringify,stringByteSize:function(e){return Ae.TextDecoder&&new Ae.TextEncoder().encode(e).length||e.length},TextEncoder:Ae.TextEncoder,TextDecoder:Ae.TextDecoder,getRandomArrayBuffer:async function(e){let t=new Uint8Array(e);return Ae.crypto.getRandomValues(t),t.buffer},isWebworker:ll(),push:{platform:"browser",formFactor:"desktop",storage:xs}},ks=ul;function pl(e){let t=[80015,80017,80030];return e.code?Je.isTokenErr(e)?!1:t.includes(e.code)?!0:e.code>=4e4&&e.code<5e4:!1}function wi(e){return pl(e)?[Ve({action:j.ERROR,error:e})]:[Ve({action:j.DISCONNECTED,error:e})]}var fl=class extends wt{constructor(e,t,n){super(e,t,n,!0),this.onAuthUpdated=i=>{this.authParams={access_token:i.token}},this.stream="stream"in n?n.stream:!0,this.sendRequest=null,this.recvRequest=null,this.pendingCallback=null,this.pendingItems=null}connect(){c.logAction(this.logger,c.LOG_MINOR,"CometTransport.connect()","starting"),wt.prototype.connect.call(this);let e=this.params,t=e.options,n=e.host||t.primaryDomain,i=F.getPort(t),r=t.tls?"https://":"http://";this.baseUri=r+n+":"+i+"/comet/";let a=this.baseUri+"connect";c.logAction(this.logger,c.LOG_MINOR,"CometTransport.connect()","uri: "+a),ge(this.auth.getAuthParams(),(d,f)=>{if(d){this.disconnect(d);return}if(this.isDisposed)return;this.authParams=f;let v=this.params.getConnectParams(f);"stream"in v&&(this.stream=v.stream),c.logAction(this.logger,c.LOG_MINOR,"CometTransport.connect()","connectParams:"+ot(v));let b=!1,k=this.recvRequest=this.createRequest(a,null,v,null,this.stream?Qe.REQ_RECV_STREAM:Qe.REQ_RECV);k.on("data",M=>{this.recvRequest&&(b||(b=!0,this.emit("preconnect")),this.onData(M))}),k.on("complete",M=>{if(this.recvRequest||(M=M||new A("Request cancelled",80003,400)),this.recvRequest=null,!b&&!M&&(b=!0,this.emit("preconnect")),this.onActivity(),M){M.code?this.onData(wi(M)):this.disconnect(M);return}w.Config.nextTick(()=>{this.recv()})}),k.exec()})}requestClose(){c.logAction(this.logger,c.LOG_MINOR,"CometTransport.requestClose()"),this._requestCloseOrDisconnect(!0)}requestDisconnect(){c.logAction(this.logger,c.LOG_MINOR,"CometTransport.requestDisconnect()"),this._requestCloseOrDisconnect(!1)}_requestCloseOrDisconnect(e){let t=e?this.closeUri:this.disconnectUri;if(t){let n=this.createRequest(t,null,this.authParams,null,Qe.REQ_SEND);n.on("complete",i=>{i&&(c.logAction(this.logger,c.LOG_ERROR,"CometTransport.request"+(e?"Close()":"Disconnect()"),"request returned err = "+te(i)),this.finish("disconnected",i))}),n.exec()}}dispose(){c.logAction(this.logger,c.LOG_MINOR,"CometTransport.dispose()",""),this.isDisposed||(this.isDisposed=!0,this.recvRequest&&(c.logAction(this.logger,c.LOG_MINOR,"CometTransport.dispose()","aborting recv request"),this.recvRequest.abort(),this.recvRequest=null),this.finish("disconnected",lt.disconnected()),w.Config.nextTick(()=>{this.emit("disposed")}))}onConnect(e){var t;if(this.isDisposed)return;let n=(t=e.connectionDetails)==null?void 0:t.connectionKey;wt.prototype.onConnect.call(this,e);let i=this.baseUri+n;c.logAction(this.logger,c.LOG_MICRO,"CometTransport.onConnect()","baseUri = "+i),this.sendUri=i+"/send",this.recvUri=i+"/recv",this.closeUri=i+"/close",this.disconnectUri=i+"/disconnect"}send(e){if(this.sendRequest){this.pendingItems=this.pendingItems||[],this.pendingItems.push(e);return}let t=this.pendingItems||[];t.push(e),this.pendingItems=null,this.sendItems(t)}sendAnyPending(){let e=this.pendingItems;e&&(this.pendingItems=null,this.sendItems(e))}sendItems(e){let t=this.sendRequest=this.createRequest(this.sendUri,null,this.authParams,this.encodeRequest(e),Qe.REQ_SEND);t.on("complete",(n,i)=>{if(n&&c.logAction(this.logger,c.LOG_ERROR,"CometTransport.sendItems()","on complete: err = "+te(n)),this.sendRequest=null,n){n.code?this.onData(wi(n)):this.disconnect(n);return}i&&this.onData(i),this.pendingItems&&w.Config.nextTick(()=>{this.sendRequest||this.sendAnyPending()})}),t.exec()}recv(){if(this.recvRequest||!this.isConnected)return;let e=this.recvRequest=this.createRequest(this.recvUri,null,this.authParams,null,this.stream?Qe.REQ_RECV_STREAM:Qe.REQ_RECV_POLL);e.on("data",t=>{this.onData(t)}),e.on("complete",t=>{if(this.recvRequest=null,this.onActivity(),t){t.code?this.onData(wi(t)):this.disconnect(t);return}w.Config.nextTick(()=>{this.recv()})}),e.exec()}onData(e){try{let t=this.decodeResponse(e);if(t&&t.length)for(let n=0;n<t.length;n++)this.onProtocolMessage(ri(t[n],this.connectionManager.realtime._RealtimePresence,this.connectionManager.realtime._Annotations,this.connectionManager.realtime._liveObjectsPlugin))}catch(t){c.logAction(this.logger,c.LOG_ERROR,"CometTransport.onData()","Unexpected exception handing channel event: "+t.stack)}}encodeRequest(e){return JSON.stringify(e)}decodeResponse(e){return typeof e=="string"?JSON.parse(e):e}},gl=fl;function ml(e,t){return $n(st(t)).includes("x-ably-errorcode")}function bl(e,t){if(ml(e,t))return e.error&&A.fromValues(e.error)}var vl=function(){},yl=0,Ss={};function wl(e,t){return e.getResponseHeader&&e.getResponseHeader(t)}function _l(e){return e.getResponseHeader&&(e.getResponseHeader("transfer-encoding")||!e.getResponseHeader("content-length"))}function Al(e){let t=e.getAllResponseHeaders().trim().split(`\r
`),n={};for(let i=0;i<t.length;i++){let r=t[i].split(":").map(a=>a.trim());n[r[0].toLowerCase()]=r[1]}return n}var Cl=class Ds extends ke{constructor(t,n,i,r,a,d,f,v){super(f),i=i||{},i.rnd=se(),this.uri=t+ot(i),this.headers=n||{},this.body=r,this.method=v?v.toUpperCase():Z(r)?"GET":"POST",this.requestMode=a,this.timeouts=d,this.timedOut=!1,this.requestComplete=!1,this.id=String(++yl),Ss[this.id]=this}static createRequest(t,n,i,r,a,d,f,v){let b=d||F.TIMEOUTS;return new Ds(t,n,Pe(i),r,a,b,f,v)}complete(t,n,i,r,a){this.requestComplete||(this.requestComplete=!0,!t&&n&&this.emit("data",n),this.emit("complete",t,n,i,r,a),this.dispose())}abort(){this.dispose()}exec(){let t=this.headers,n=this.requestMode==Qe.REQ_SEND?this.timeouts.httpRequestTimeout:this.timeouts.recvTimeout,i=this.timer=setTimeout(()=>{this.timedOut=!0,a.abort()},n),r=this.method,a=this.xhr=new XMLHttpRequest,d=t.accept,f=this.body,v="text";d?d.indexOf("application/x-msgpack")===0&&(v="arraybuffer"):t.accept="application/json",f&&(t["content-type"]||(t["content-type"]="application/json")).indexOf("application/json")>-1&&typeof f!="string"&&(f=JSON.stringify(f)),a.open(r,this.uri,!0),a.responseType=v,"authorization"in t&&(a.withCredentials=!0);for(let K in t)a.setRequestHeader(K,t[K]);let b=(K,De,Oe,Wt)=>{var Ct;let xi=De+" (event type: "+K.type+")";(Ct=this==null?void 0:this.xhr)!=null&&Ct.statusText&&(xi+=", current statusText is "+this.xhr.statusText),c.logAction(this.logger,c.LOG_ERROR,"Request.on"+K.type+"()",xi),this.complete(new pe(xi,Oe,Wt))};a.onerror=K=>{b(K,"XHR error occurred",null,400)},a.onabort=K=>{this.timedOut?b(K,"Request aborted due to request timeout expiring",null,408):b(K,"Request cancelled",null,400)},a.ontimeout=K=>{b(K,"Request timed out",null,408)};let k,M,O,x=0,V=!1,L=()=>{if(clearTimeout(i),O=M<400,M==204){this.complete(null,null,null,null,M);return}k=this.requestMode==Qe.REQ_RECV_STREAM&&O&&_l(a)},W=()=>{let K;try{let Oe=wl(a,"content-type");if(Oe?Oe.indexOf("application/json")>=0:a.responseType=="text"){let Ct=a.responseType==="arraybuffer"?w.BufferUtils.utf8Decode(a.response):String(a.responseText);Ct.length?K=JSON.parse(Ct):K=Ct,V=!0}else K=a.response;K.response!==void 0?(M=K.statusCode,O=M<400,t=K.headers,K=K.response):t=Al(a)}catch(Oe){this.complete(new pe("Malformed response body from server: "+Oe.message,null,400));return}if(O||Array.isArray(K)){this.complete(null,K,t,V,M);return}let De=bl(K,t);De||(De=new pe("Error response received from server: "+M+" body was: "+w.Config.inspect(K),null,M)),this.complete(De,K,t,V,M)};function ne(){let K=a.responseText,De=K.length-1,Oe,Wt;for(;x<De&&(Oe=K.indexOf(`
`,x))>-1;)Wt=K.slice(x,Oe),x=Oe+1,ce(Wt)}let ce=K=>{try{K=JSON.parse(K)}catch(De){this.complete(new pe("Malformed response body from server: "+De.message,null,400));return}this.emit("data",K)},ue=()=>{ne(),this.streamComplete=!0,w.Config.nextTick(()=>{this.complete()})};a.onreadystatechange=()=>{let K=a.readyState;K<3||a.status!==0&&(M===void 0&&(M=a.status,L()),K==3&&k?ne():K==4&&(k?ue():W()))},a.send(f)}dispose(){let t=this.xhr;if(t){t.onreadystatechange=t.onerror=t.onabort=t.ontimeout=vl,this.xhr=null;let n=this.timer;n&&(clearTimeout(n),this.timer=null),this.requestComplete||t.abort()}delete Ss[this.id]}},Ms=Cl,Rs=Le.XhrPolling,xl=class extends gl{constructor(e,t,n){super(e,t,n),this.shortName=Rs,n.stream=!1,this.shortName=Rs}static isAvailable(){return!!(w.Config.xhrSupported&&w.Config.allowComet)}toString(){return"XHRPollingTransport; uri="+this.baseUri+"; isConnected="+this.isConnected}createRequest(e,t,n,i,r){return Ms.createRequest(e,t,n,i,r,this.timeouts,this.logger)}},kl=xl,Sl=["xhr_polling"],Ml={order:Sl,bundledImplementations:{web_socket:gs,xhr_polling:kl}},Rl=Ml,Tl={connectivityCheckUrl:"https://internet-up.ably-realtime.com/is-the-internet-up.txt",wsConnectivityCheckUrl:"wss://ws-up.ably-realtime.com",defaultTransports:[Le.XhrPolling,Le.WebSocket]},Ol=Tl;function Il(e){if(e===void 0)return"undefined";let t,n;if(e instanceof ArrayBuffer?(n="ArrayBuffer",t=new DataView(e)):e instanceof DataView&&(n="DataView",t=e),!t)return JSON.stringify(e);let i=[];for(let r=0;r<e.byteLength;r++){if(r>20){i.push("...");break}let a=t.getUint8(r).toString(16);a.length===1&&(a="0"+a),i.push(a)}return"<"+n+" "+i.join(" ")+">"}function Gt(e,t,n){let r=new TextEncoder().encode(n);for(let a=0;a<r.length;a++)e.setUint8(t+a,r[a])}function Ts(e,t,n){return new TextDecoder().decode(e.buffer.slice(t,t+n))}function _i(e){return new TextEncoder().encode(e).length}function Pl(e,t){let n=Ft(e,t);if(n===0)return;let i=new ArrayBuffer(n),r=new DataView(i);return jt(e,r,0,t),i}var Ai=65536*65536,Os=1/Ai;function El(e,t){return t=t||0,e.getInt32(t)*Ai+e.getUint32(t+4)}function Vl(e,t){return t=t||0,e.getUint32(t)*Ai+e.getUint32(t+4)}function Ll(e,t,n){n<9223372036854776e3?(e.setInt32(t,Math.floor(n*Os)),e.setInt32(t+4,n&-1)):(e.setUint32(t,2147483647),e.setUint32(t+4,2147483647))}function Nl(e,t,n){n<18446744073709552e3?(e.setUint32(t,Math.floor(n*Os)),e.setInt32(t+4,n&-1)):(e.setUint32(t,4294967295),e.setUint32(t+4,4294967295))}var Bl=class{constructor(e,t){this.map=n=>{let i={};for(let r=0;r<n;r++){let a=this.parse();i[a]=this.parse()}return i},this.bin=n=>{let i=new ArrayBuffer(n);return new Uint8Array(i).set(new Uint8Array(this.view.buffer,this.offset,n),0),this.offset+=n,i},this.buf=this.bin,this.str=n=>{let i=Ts(this.view,this.offset,n);return this.offset+=n,i},this.array=n=>{let i=new Array(n);for(let r=0;r<n;r++)i[r]=this.parse();return i},this.ext=n=>(this.offset+=n,{type:this.view.getInt8(this.offset),data:this.buf(n)}),this.parse=()=>{let n=this.view.getUint8(this.offset),i,r;if((n&128)===0)return this.offset++,n;if((n&240)===128)return r=n&15,this.offset++,this.map(r);if((n&240)===144)return r=n&15,this.offset++,this.array(r);if((n&224)===160)return r=n&31,this.offset++,this.str(r);if((n&224)===224)return i=this.view.getInt8(this.offset),this.offset++,i;switch(n){case 192:return this.offset++,null;case 193:this.offset++;return;case 194:return this.offset++,!1;case 195:return this.offset++,!0;case 196:return r=this.view.getUint8(this.offset+1),this.offset+=2,this.bin(r);case 197:return r=this.view.getUint16(this.offset+1),this.offset+=3,this.bin(r);case 198:return r=this.view.getUint32(this.offset+1),this.offset+=5,this.bin(r);case 199:return r=this.view.getUint8(this.offset+1),this.offset+=2,this.ext(r);case 200:return r=this.view.getUint16(this.offset+1),this.offset+=3,this.ext(r);case 201:return r=this.view.getUint32(this.offset+1),this.offset+=5,this.ext(r);case 202:return i=this.view.getFloat32(this.offset+1),this.offset+=5,i;case 203:return i=this.view.getFloat64(this.offset+1),this.offset+=9,i;case 204:return i=this.view.getUint8(this.offset+1),this.offset+=2,i;case 205:return i=this.view.getUint16(this.offset+1),this.offset+=3,i;case 206:return i=this.view.getUint32(this.offset+1),this.offset+=5,i;case 207:return i=Vl(this.view,this.offset+1),this.offset+=9,i;case 208:return i=this.view.getInt8(this.offset+1),this.offset+=2,i;case 209:return i=this.view.getInt16(this.offset+1),this.offset+=3,i;case 210:return i=this.view.getInt32(this.offset+1),this.offset+=5,i;case 211:return i=El(this.view,this.offset+1),this.offset+=9,i;case 212:return r=1,this.offset++,this.ext(r);case 213:return r=2,this.offset++,this.ext(r);case 214:return r=4,this.offset++,this.ext(r);case 215:return r=8,this.offset++,this.ext(r);case 216:return r=16,this.offset++,this.ext(r);case 217:return r=this.view.getUint8(this.offset+1),this.offset+=2,this.str(r);case 218:return r=this.view.getUint16(this.offset+1),this.offset+=3,this.str(r);case 219:return r=this.view.getUint32(this.offset+1),this.offset+=5,this.str(r);case 220:return r=this.view.getUint16(this.offset+1),this.offset+=3,this.array(r);case 221:return r=this.view.getUint32(this.offset+1),this.offset+=5,this.array(r);case 222:return r=this.view.getUint16(this.offset+1),this.offset+=3,this.map(r);case 223:return r=this.view.getUint32(this.offset+1),this.offset+=5,this.map(r)}throw new Error("Unknown type 0x"+n.toString(16))},this.offset=t||0,this.view=e}};function Ul(e){let t=new DataView(e),n=new Bl(t),i=n.parse();if(n.offset!==e.byteLength)throw new Error(e.byteLength-n.offset+" trailing bytes");return i}function Is(e,t){return Object.keys(e).filter(function(n){let i=e[n],r=typeof i;return(!t||i!=null)&&(r!=="function"||!!i.toJSON)})}function jt(e,t,n,i){let r=typeof e;if(typeof e=="string"){let a=_i(e);if(a<32)return t.setUint8(n,a|160),Gt(t,n+1,e),1+a;if(a<256)return t.setUint8(n,217),t.setUint8(n+1,a),Gt(t,n+2,e),2+a;if(a<65536)return t.setUint8(n,218),t.setUint16(n+1,a),Gt(t,n+3,e),3+a;if(a<4294967296)return t.setUint8(n,219),t.setUint32(n+1,a),Gt(t,n+5,e),5+a}if(ArrayBuffer.isView&&ArrayBuffer.isView(e)&&(e=e.buffer),e instanceof ArrayBuffer){let a=e.byteLength;if(a<256)return t.setUint8(n,196),t.setUint8(n+1,a),new Uint8Array(t.buffer).set(new Uint8Array(e),n+2),2+a;if(a<65536)return t.setUint8(n,197),t.setUint16(n+1,a),new Uint8Array(t.buffer).set(new Uint8Array(e),n+3),3+a;if(a<4294967296)return t.setUint8(n,198),t.setUint32(n+1,a),new Uint8Array(t.buffer).set(new Uint8Array(e),n+5),5+a}if(typeof e=="number"){if(Math.floor(e)!==e)return t.setUint8(n,203),t.setFloat64(n+1,e),9;if(e>=0){if(e<128)return t.setUint8(n,e),1;if(e<256)return t.setUint8(n,204),t.setUint8(n+1,e),2;if(e<65536)return t.setUint8(n,205),t.setUint16(n+1,e),3;if(e<4294967296)return t.setUint8(n,206),t.setUint32(n+1,e),5;if(e<18446744073709552e3)return t.setUint8(n,207),Nl(t,n+1,e),9;throw new Error("Number too big 0x"+e.toString(16))}if(e>=-32)return t.setInt8(n,e),1;if(e>=-128)return t.setUint8(n,208),t.setInt8(n+1,e),2;if(e>=-32768)return t.setUint8(n,209),t.setInt16(n+1,e),3;if(e>=-2147483648)return t.setUint8(n,210),t.setInt32(n+1,e),5;if(e>=-9223372036854776e3)return t.setUint8(n,211),Ll(t,n+1,e),9;throw new Error("Number too small -0x"+(-e).toString(16).substr(1))}if(r==="undefined")return i?0:(t.setUint8(n,212),t.setUint8(n+1,0),t.setUint8(n+2,0),3);if(e===null)return i?0:(t.setUint8(n,192),1);if(r==="boolean")return t.setUint8(n,e?195:194),1;if(typeof e.toJSON=="function")return jt(e.toJSON(),t,n,i);if(r==="object"){let a,d=0,f,v=Array.isArray(e);if(v?a=e.length:(f=Is(e,i),a=f.length),a<16?(t.setUint8(n,a|(v?144:128)),d=1):a<65536?(t.setUint8(n,v?220:222),t.setUint16(n+1,a),d=3):a<4294967296&&(t.setUint8(n,v?221:223),t.setUint32(n+1,a),d=5),v)for(let b=0;b<a;b++)d+=jt(e[b],t,n+d,i);else if(f)for(let b=0;b<a;b++){let k=f[b];d+=jt(k,t,n+d),d+=jt(e[k],t,n+d,i)}return d}if(r==="function")return 0;throw new Error("Unknown type "+r)}function Ft(e,t){let n=typeof e;if(n==="string"){let i=_i(e);if(i<32)return 1+i;if(i<256)return 2+i;if(i<65536)return 3+i;if(i<4294967296)return 5+i}if(ArrayBuffer.isView&&ArrayBuffer.isView(e)&&(e=e.buffer),e instanceof ArrayBuffer){let i=e.byteLength;if(i<256)return 2+i;if(i<65536)return 3+i;if(i<4294967296)return 5+i}if(typeof e=="number"){if(Math.floor(e)!==e)return 9;if(e>=0){if(e<128)return 1;if(e<256)return 2;if(e<65536)return 3;if(e<4294967296)return 5;if(e<18446744073709552e3)return 9;throw new Error("Number too big 0x"+e.toString(16))}if(e>=-32)return 1;if(e>=-128)return 2;if(e>=-32768)return 3;if(e>=-2147483648)return 5;if(e>=-9223372036854776e3)return 9;throw new Error("Number too small -0x"+e.toString(16).substr(1))}if(n==="boolean")return 1;if(e===null)return t?0:1;if(e===void 0)return t?0:3;if(typeof e.toJSON=="function")return Ft(e.toJSON(),t);if(n==="object"){let i,r=0;if(Array.isArray(e)){i=e.length;for(let a=0;a<i;a++)r+=Ft(e[a],t)}else{let a=Is(e,t);i=a.length;for(let d=0;d<i;d++){let f=a[d];r+=Ft(f)+Ft(e[f],t)}}if(i<16)return 1+r;if(i<65536)return 3+r;if(i<4294967296)return 5+r;throw new Error("Array or object too long 0x"+i.toString(16))}if(n==="function")return 0;throw new Error("Unknown type "+n)}var Ci={encode:Pl,decode:Ul,inspect:Il,utf8Write:Gt,utf8Read:Ts,utf8ByteCount:_i};function ql(e,t){return!!t.get("x-ably-errorcode")}function Dl(e,t){if(ql(e,t))return e.error&&A.fromValues(e.error)}function Hl(e){let t={};return e.forEach((n,i)=>{t[i]=n}),t}async function Gl(e,t,n,i,r,a){let d=new Headers(i||{}),f=e?e.toUpperCase():Z(a)?"GET":"POST",v=new AbortController,b,k=new Promise(x=>{b=setTimeout(()=>{v.abort(),x({error:new pe("Request timed out",null,408)})},t?t.options.timeouts.httpRequestTimeout:F.TIMEOUTS.httpRequestTimeout)}),M={method:f,headers:d,body:a,signal:v.signal};w.Config.isWebworker||(M.credentials=d.has("authorization")?"include":"same-origin");let O=(async()=>{try{let x=new URLSearchParams(r||{});x.set("rnd",se());let V=n+"?"+x,L=await Jn().fetch(V,M);if(clearTimeout(b),L.status==204)return{error:null,statusCode:L.status};let W=L.headers.get("Content-Type"),ne;W&&W.indexOf("application/x-msgpack")>-1?ne=await L.arrayBuffer():W&&W.indexOf("application/json")>-1?ne=await L.json():ne=await L.text();let ce=!!W&&W.indexOf("application/x-msgpack")===-1,ue=Hl(L.headers);return L.ok?{error:null,body:ne,headers:ue,unpacked:ce,statusCode:L.status}:{error:Dl(ne,L.headers)||new pe("Error response received from server: "+L.status+" body was: "+w.Config.inspect(ne),null,L.status),body:ne,headers:ue,unpacked:ce,statusCode:L.status}}catch(x){return clearTimeout(b),{error:x}}})();return Promise.race([k,O])}var jl={XHRRequest:Ms,FetchRequest:Gl},Ps=sl(ks,ys);w.Crypto=Ps,w.BufferUtils=ys,w.Http=Cs,w.Config=ks,w.Transports=Rl,w.WebStorage=xs;for(let e of[li,gi])e.Crypto=Ps,e._MsgPack=Ci;Cs.bundledRequestImplementations=jl,c.initLogHandlers(),w.Defaults=ka(Ol),w.Config.agent&&(w.Defaults.agent+=" "+w.Config.agent);var Fl={ErrorInfo:A,Rest:li,Realtime:gi,msgpack:Ci,makeProtocolMessageFromDeserialized:cs};if(typeof s.exports=="object"&&typeof o=="object"){var Wl=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Object.getOwnPropertyNames(t))!Object.prototype.hasOwnProperty.call(e,r)&&r!==n&&Object.defineProperty(e,r,{get:()=>t[r],enumerable:!(i=Object.getOwnPropertyDescriptor(t,r))||i.enumerable});return e};s.exports=Wl(s.exports,o)}return s.exports})});var rd={};Xl(rd,{BaseportalChat:()=>tn,default:()=>id});var eh="https://api.baseportal.io/public/chat",_n=class{constructor(s){this.channelToken=s,this.baseUrl=eh}setVisitorIdentity(s,l,p){this.visitorEmail=s,this.visitorHash=l,this.visitorTs=p}clearVisitorIdentity(){this.visitorEmail=void 0,this.visitorHash=void 0,this.visitorTs=void 0}headers(){let s={"Content-Type":"application/json","x-channel-token":this.channelToken};return this.visitorEmail&&(s["x-visitor-email"]=this.visitorEmail),this.visitorHash&&(s["x-visitor-hash"]=this.visitorHash),this.visitorTs!==void 0&&(s["x-visitor-ts"]=String(this.visitorTs)),s}async request(s,l,p){let u=await fetch(`${this.baseUrl}${l}`,{method:s,headers:this.headers(),body:p?JSON.stringify(p):void 0});if(!u.ok){let g=await u.text().catch(()=>"");throw new Error(`[BaseportalChat] API error ${u.status}: ${g}`)}return u.json()}async getChannelInfo(){return this.request("GET","/channel-info")}async identify(s){return this.request("POST","/identify",s)}async initConversation(s){return this.request("POST","/conversations",{...s,channelToken:this.channelToken})}async getConversation(s){return this.request("GET",`/conversations/${s}`)}async getMessages(s,l){let p=new URLSearchParams;l?.limit&&p.set("limit",String(l.limit)),l?.page&&p.set("page",String(l.page));let u=p.toString()?`?${p.toString()}`:"";return this.request("GET",`/conversations/${s}/messages${u}`)}async uploadFile(s,l){let p=new FormData;p.append("file",l);let u={"x-channel-token":this.channelToken};this.visitorEmail&&(u["x-visitor-email"]=this.visitorEmail),this.visitorHash&&(u["x-visitor-hash"]=this.visitorHash),this.visitorTs!==void 0&&(u["x-visitor-ts"]=String(this.visitorTs));let g=await fetch(`${this.baseUrl}/conversations/${s}/upload`,{method:"POST",headers:u,body:p});if(!g.ok){let m=await g.text().catch(()=>"");throw new Error(`[BaseportalChat] Upload error ${g.status}: ${m}`)}return g.json()}async sendMessage(s,l){return this.request("POST",`/conversations/${s}/messages`,l)}async getVisitorConversations(){return this.request("GET","/conversations")}async reopenConversation(s){return this.request("POST",`/conversations/${s}/reopen`)}async getAblyToken(s){return this.request("POST","/ably-token",{conversationId:s})}async getVisitorAblyToken(){return this.request("POST","/visitor-ably-token")}async searchArticles(s,l){let p=new URLSearchParams;s&&s.trim().length>0&&p.set("search",s.trim()),l&&p.set("limit",String(l));let u=p.toString()?`?${p.toString()}`:"";return this.request("GET",`/articles${u}`)}async getArticle(s){return this.request("GET",`/articles/${encodeURIComponent(s)}`)}async rateArticle(s,l){return this.request("POST",`/articles/${encodeURIComponent(s)}/rate`,{helpful:l})}async trackPage(s){try{await this.request("POST","/visitor-pages",s)}catch{}}async getPendingModals(){try{return await this.request("GET","/pending-modals")}catch{return{deliveries:[]}}}async postModalEvent(s,l){try{await this.request("POST",`/modal-deliveries/${encodeURIComponent(s)}/event`,{event:l})}catch{}}async getPendingNotifications(){try{return await this.request("GET","/pending-notifications")}catch{return{count:0,latest:null}}}};var Hs=Vs(Li()),Cn=class{constructor(s){this.client=null;this.channel=null;this.conversationId=null;this.handlers=null;this.apiClient=s}async subscribe(s,l){this.unsubscribe(),this.conversationId=s,this.handlers=l;try{let p=await this.apiClient.getAblyToken(s);this.client=new Hs.Realtime({authCallback:(g,m)=>{m(null,p)},clientId:`visitor-${s}`});let u=`conversation-${s}`;this.channel=this.client.channels.get(u),this.channel.subscribe(g=>{if(g.data)try{let m=typeof g.data=="string"?JSON.parse(g.data):g.data;m.text==="conversation_status_updated"&&m.metadata?l.onConversationStatusUpdate(m.metadata):m.text==="created_or_updated_message"&&m.metadata&&l.onMessage(m.metadata)}catch(m){console.error("[BaseportalChat] Error parsing realtime message:",m)}})}catch(p){console.error("[BaseportalChat] Error connecting to realtime:",p)}}unsubscribe(){this.channel&&(this.channel.unsubscribe(),this.channel=null),this.client&&(this.client.close(),this.client=null),this.conversationId=null,this.handlers=null}isConnected(){return this.client?.connection.state==="connected"}};var th={prechat:{title:"Iniciar conversa",description:"Preencha os dados abaixo para iniciar o atendimento.",name:"Nome",namePlaceholder:"Seu nome",email:"E-mail",emailPlaceholder:"seu@email.com",start:"Iniciar conversa",loading:"Iniciando...",privacyPrefix:"Ao enviar, voc\xEA concorda com nossa",privacyLink:"Pol\xEDtica de Privacidade"},chat:{placeholder:"Digite uma mensagem...",closed:"Esta conversa foi encerrada.",reopen:"Reabrir conversa",newConversation:"Nova conversa",attachFile:"Anexar arquivo",uploading:"Enviando...",fileTooLarge:"Arquivo muito grande (m\xE1x. 25MB)",download:"Baixar",emptyTitle:"Comece a conversar",emptyDescription:"Mande sua primeira mensagem \u2014 costumamos responder r\xE1pido.",recordAudio:"Gravar \xE1udio",cancelAudio:"Cancelar grava\xE7\xE3o",sendAudio:"Enviar \xE1udio",recordingHint:"Toque em \u25B8 para enviar",audioPermissionDenied:"Permiss\xE3o de microfone negada.",audioCorrupted:"Falha ao gravar \xE1udio. Tente novamente."},conversations:{title:"Atendimento",newConversation:"Nova conversa",empty:"Nenhuma conversa encontrada.",open:"Aberta",closed:"Fechada",noMessages:"Nenhuma mensagem ainda"},home:{helloFallback:"Ol\xE1",helloName:"Ol\xE1, {{name}}",howCanWeHelp:"Como podemos ajudar?",startConversation:"Iniciar uma conversa",responseInUnderMin:"Resposta em geral em menos de 1 min",responseInUnderMins:"Resposta em geral em menos de {{mins}} min",responseInUnderHour:"Resposta em geral em menos de 1 hora",typicallyReplies:"Costumamos responder r\xE1pido",teamOnline:"Time online",teamOffline:"Responderemos em breve",agentsOnline:"{{count}} agentes online",agentOnline:"1 agente online",continueWhereLeftOff:"Continue de onde parou",recommendedArticles:"Artigos recomendados",seeAll:"Ver tudo",searchHelpPlaceholder:"Buscar ajuda\u2026"},tabs:{home:"In\xEDcio",messages:"Mensagens",help:"Ajuda"},messages:{title:"Mensagens",subtitleCounts:"{{open}} aberta(s) \xB7 {{closed}} conclu\xEDda(s)",inProgress:"Em atendimento",new:"+ Nova",completed:"Conclu\xEDdas",statusOpen:"Em atendimento",statusClosed:"Conclu\xEDda",empty:"Voc\xEA ainda n\xE3o tem conversas."},help:{title:"Central de ajuda",subtitle:"Pesquise artigos ou navegue por categoria",searchPlaceholder:"Buscar artigos\u2026",popular:"Mais lidos",noArticles:"Nenhum artigo publicado ainda.",noResults:"Nenhum artigo encontrado."},article:{minRead:"1 min de leitura",minsRead:"{{mins}} min de leitura",feedbackQuestion:"Esse artigo foi \xFAtil?",feedbackYes:"Sim",feedbackNo:"N\xE3o",feedbackThanks:"Obrigado pelo feedback!",backToHelp:"Voltar"}},nh={prechat:{title:"Start a conversation",description:"Fill in the details below to start chatting.",name:"Name",namePlaceholder:"Your name",email:"Email",emailPlaceholder:"you@email.com",start:"Start conversation",loading:"Starting...",privacyPrefix:"By sending, you agree to our",privacyLink:"Privacy Policy"},chat:{placeholder:"Type a message...",closed:"This conversation has been closed.",reopen:"Reopen conversation",newConversation:"New conversation",attachFile:"Attach file",uploading:"Uploading...",fileTooLarge:"File too large (max 25MB)",download:"Download",emptyTitle:"Start the conversation",emptyDescription:"Send your first message \u2014 we usually reply fast.",recordAudio:"Record audio",cancelAudio:"Cancel recording",sendAudio:"Send audio",recordingHint:"Tap \u25B8 to send",audioPermissionDenied:"Microphone permission denied.",audioCorrupted:"Recording failed. Please try again."},conversations:{title:"Support",newConversation:"New conversation",empty:"No conversations found.",open:"Open",closed:"Closed",noMessages:"No messages yet"},home:{helloFallback:"Hello",helloName:"Hi, {{name}}",howCanWeHelp:"How can we help?",startConversation:"Start a conversation",responseInUnderMin:"Typically replies in under 1 min",responseInUnderMins:"Typically replies in under {{mins}} min",responseInUnderHour:"Typically replies in under 1 hour",typicallyReplies:"We usually reply fast",teamOnline:"Team online",teamOffline:"We'll reply soon",agentsOnline:"{{count}} agents online",agentOnline:"1 agent online",continueWhereLeftOff:"Pick up where you left off",recommendedArticles:"Recommended articles",seeAll:"See all",searchHelpPlaceholder:"Search help\u2026"},tabs:{home:"Home",messages:"Messages",help:"Help"},messages:{title:"Messages",subtitleCounts:"{{open}} open \xB7 {{closed}} closed",inProgress:"In progress",new:"+ New",completed:"Closed",statusOpen:"In progress",statusClosed:"Closed",empty:"You don't have any conversations yet."},help:{title:"Help center",subtitle:"Search articles or browse by category",searchPlaceholder:"Search articles\u2026",popular:"Most read",noArticles:"No published articles yet.",noResults:"No articles found."},article:{minRead:"1 min read",minsRead:"{{mins}} min read",feedbackQuestion:"Was this article helpful?",feedbackYes:"Yes",feedbackNo:"No",feedbackThanks:"Thanks for the feedback!",backToHelp:"Back"}},ih={prechat:{title:"Iniciar conversaci\xF3n",description:"Complete los datos a continuaci\xF3n para iniciar la atenci\xF3n.",name:"Nombre",namePlaceholder:"Tu nombre",email:"Correo electr\xF3nico",emailPlaceholder:"tu@email.com",start:"Iniciar conversaci\xF3n",loading:"Iniciando...",privacyPrefix:"Al enviar, aceptas nuestra",privacyLink:"Pol\xEDtica de Privacidad"},chat:{placeholder:"Escribe un mensaje...",closed:"Esta conversaci\xF3n ha sido cerrada.",reopen:"Reabrir conversaci\xF3n",newConversation:"Nueva conversaci\xF3n",attachFile:"Adjuntar archivo",uploading:"Subiendo...",fileTooLarge:"Archivo demasiado grande (m\xE1x. 25MB)",download:"Descargar",emptyTitle:"Empieza la conversaci\xF3n",emptyDescription:"Env\xEDa tu primer mensaje \u2014 solemos responder r\xE1pido.",recordAudio:"Grabar audio",cancelAudio:"Cancelar grabaci\xF3n",sendAudio:"Enviar audio",recordingHint:"Toca \u25B8 para enviar",audioPermissionDenied:"Permiso de micr\xF3fono denegado.",audioCorrupted:"Error al grabar audio. Intenta de nuevo."},conversations:{title:"Atenci\xF3n",newConversation:"Nueva conversaci\xF3n",empty:"No se encontraron conversaciones.",open:"Abierta",closed:"Cerrada",noMessages:"Sin mensajes a\xFAn"},home:{helloFallback:"Hola",helloName:"Hola, {{name}}",howCanWeHelp:"\xBFC\xF3mo podemos ayudar?",startConversation:"Iniciar una conversaci\xF3n",responseInUnderMin:"Solemos responder en menos de 1 min",responseInUnderMins:"Solemos responder en menos de {{mins}} min",responseInUnderHour:"Solemos responder en menos de 1 hora",typicallyReplies:"Solemos responder r\xE1pido",teamOnline:"Equipo en l\xEDnea",teamOffline:"Responderemos pronto",agentsOnline:"{{count}} agentes en l\xEDnea",agentOnline:"1 agente en l\xEDnea",continueWhereLeftOff:"Contin\xFAa donde lo dejaste",recommendedArticles:"Art\xEDculos recomendados",seeAll:"Ver todo",searchHelpPlaceholder:"Buscar ayuda\u2026"},tabs:{home:"Inicio",messages:"Mensajes",help:"Ayuda"},messages:{title:"Mensajes",subtitleCounts:"{{open}} abierta(s) \xB7 {{closed}} cerrada(s)",inProgress:"En atenci\xF3n",new:"+ Nueva",completed:"Cerradas",statusOpen:"En atenci\xF3n",statusClosed:"Cerrada",empty:"A\xFAn no tienes conversaciones."},help:{title:"Centro de ayuda",subtitle:"Busca art\xEDculos o navega por categor\xEDa",searchPlaceholder:"Buscar art\xEDculos\u2026",popular:"M\xE1s le\xEDdos",noArticles:"A\xFAn no hay art\xEDculos publicados.",noResults:"No se encontraron art\xEDculos."},article:{minRead:"1 min de lectura",minsRead:"{{mins}} min de lectura",feedbackQuestion:"\xBFTe result\xF3 \xFAtil este art\xEDculo?",feedbackYes:"S\xED",feedbackNo:"No",feedbackThanks:"\xA1Gracias por tu opini\xF3n!",backToHelp:"Volver"}},Gs={pt:th,en:nh,es:ih};function js(o){return Gs[o]||Gs.pt}function Xe(o,s){return o.replace(/\{\{(\w+)\}\}/g,(l,p)=>String(s[p]??""))}var In,oe,Ks,rh,it,Fs,Js,Ys,Ni,kn,Yt,Qs,Di,Bi,Ui,sh,Rn={},Tn=[],oh=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Pn=Array.isArray;function Ze(o,s){for(var l in s)o[l]=s[l];return o}function Hi(o){o&&o.parentNode&&o.parentNode.removeChild(o)}function Gi(o,s,l){var p,u,g,m={};for(g in s)g=="key"?p=s[g]:g=="ref"?u=s[g]:m[g]=s[g];if(arguments.length>2&&(m.children=arguments.length>3?In.call(arguments,2):l),typeof o=="function"&&o.defaultProps!=null)for(g in o.defaultProps)m[g]===void 0&&(m[g]=o.defaultProps[g]);return Sn(o,m,p,u,null)}function Sn(o,s,l,p,u){var g={type:o,props:s,key:l,ref:p,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:u??++Ks,__i:-1,__u:0};return u==null&&oe.vnode!=null&&oe.vnode(g),g}function be(o){return o.children}function Mn(o,s){this.props=o,this.context=s}function St(o,s){if(s==null)return o.__?St(o.__,o.__i+1):null;for(var l;s<o.__k.length;s++)if((l=o.__k[s])!=null&&l.__e!=null)return l.__e;return typeof o.type=="function"?St(o):null}function ah(o){if(o.__P&&o.__d){var s=o.__v,l=s.__e,p=[],u=[],g=Ze({},s);g.__v=s.__v+1,oe.vnode&&oe.vnode(g),ji(o.__P,g,s,o.__n,o.__P.namespaceURI,32&s.__u?[l]:null,p,l??St(s),!!(32&s.__u),u),g.__v=s.__v,g.__.__k[g.__i]=g,to(p,g,u),s.__e=s.__=null,g.__e!=l&&Xs(g)}}function Xs(o){if((o=o.__)!=null&&o.__c!=null)return o.__e=o.__c.base=null,o.__k.some(function(s){if(s!=null&&s.__e!=null)return o.__e=o.__c.base=s.__e}),Xs(o)}function Ws(o){(!o.__d&&(o.__d=!0)&&it.push(o)&&!On.__r++||Fs!=oe.debounceRendering)&&((Fs=oe.debounceRendering)||Js)(On)}function On(){try{for(var o,s=1;it.length;)it.length>s&&it.sort(Ys),o=it.shift(),s=it.length,ah(o)}finally{it.length=On.__r=0}}function Zs(o,s,l,p,u,g,m,_,S,C,R){var y,I,T,N,U,E,P,G=p&&p.__k||Tn,X=s.length;for(S=ch(l,s,G,S,X),y=0;y<X;y++)(T=l.__k[y])!=null&&(I=T.__i!=-1&&G[T.__i]||Rn,T.__i=y,E=ji(o,T,I,u,g,m,_,S,C,R),N=T.__e,T.ref&&I.ref!=T.ref&&(I.ref&&Fi(I.ref,null,T),R.push(T.ref,T.__c||N,T)),U==null&&N!=null&&(U=N),(P=!!(4&T.__u))||I.__k===T.__k?(S=eo(T,S,o,P),P&&I.__e&&(I.__e=null)):typeof T.type=="function"&&E!==void 0?S=E:N&&(S=N.nextSibling),T.__u&=-7);return l.__e=U,S}function ch(o,s,l,p,u){var g,m,_,S,C,R=l.length,y=R,I=0;for(o.__k=new Array(u),g=0;g<u;g++)(m=s[g])!=null&&typeof m!="boolean"&&typeof m!="function"?(typeof m=="string"||typeof m=="number"||typeof m=="bigint"||m.constructor==String?m=o.__k[g]=Sn(null,m,null,null,null):Pn(m)?m=o.__k[g]=Sn(be,{children:m},null,null,null):m.constructor===void 0&&m.__b>0?m=o.__k[g]=Sn(m.type,m.props,m.key,m.ref?m.ref:null,m.__v):o.__k[g]=m,S=g+I,m.__=o,m.__b=o.__b+1,_=null,(C=m.__i=lh(m,l,S,y))!=-1&&(y--,(_=l[C])&&(_.__u|=2)),_==null||_.__v==null?(C==-1&&(u>R?I--:u<R&&I++),typeof m.type!="function"&&(m.__u|=4)):C!=S&&(C==S-1?I--:C==S+1?I++:(C>S?I--:I++,m.__u|=4))):o.__k[g]=null;if(y)for(g=0;g<R;g++)(_=l[g])!=null&&(2&_.__u)==0&&(_.__e==p&&(p=St(_)),io(_,_));return p}function eo(o,s,l,p){var u,g;if(typeof o.type=="function"){for(u=o.__k,g=0;u&&g<u.length;g++)u[g]&&(u[g].__=o,s=eo(u[g],s,l,p));return s}o.__e!=s&&(p&&(s&&o.type&&!s.parentNode&&(s=St(o)),l.insertBefore(o.__e,s||null)),s=o.__e);do s=s&&s.nextSibling;while(s!=null&&s.nodeType==8);return s}function lh(o,s,l,p){var u,g,m,_=o.key,S=o.type,C=s[l],R=C!=null&&(2&C.__u)==0;if(C===null&&_==null||R&&_==C.key&&S==C.type)return l;if(p>(R?1:0)){for(u=l-1,g=l+1;u>=0||g<s.length;)if((C=s[m=u>=0?u--:g++])!=null&&(2&C.__u)==0&&_==C.key&&S==C.type)return m}return-1}function zs(o,s,l){s[0]=="-"?o.setProperty(s,l??""):o[s]=l==null?"":typeof l!="number"||oh.test(s)?l:l+"px"}function xn(o,s,l,p,u){var g,m;e:if(s=="style")if(typeof l=="string")o.style.cssText=l;else{if(typeof p=="string"&&(o.style.cssText=p=""),p)for(s in p)l&&s in l||zs(o.style,s,"");if(l)for(s in l)p&&l[s]==p[s]||zs(o.style,s,l[s])}else if(s[0]=="o"&&s[1]=="n")g=s!=(s=s.replace(Qs,"$1")),m=s.toLowerCase(),s=m in o||s=="onFocusOut"||s=="onFocusIn"?m.slice(2):s.slice(2),o.l||(o.l={}),o.l[s+g]=l,l?p?l[Yt]=p[Yt]:(l[Yt]=Di,o.addEventListener(s,g?Ui:Bi,g)):o.removeEventListener(s,g?Ui:Bi,g);else{if(u=="http://www.w3.org/2000/svg")s=s.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(s!="width"&&s!="height"&&s!="href"&&s!="list"&&s!="form"&&s!="tabIndex"&&s!="download"&&s!="rowSpan"&&s!="colSpan"&&s!="role"&&s!="popover"&&s in o)try{o[s]=l??"";break e}catch{}typeof l=="function"||(l==null||l===!1&&s[4]!="-"?o.removeAttribute(s):o.setAttribute(s,s=="popover"&&l==1?"":l))}}function $s(o){return function(s){if(this.l){var l=this.l[s.type+o];if(s[kn]==null)s[kn]=Di++;else if(s[kn]<l[Yt])return;return l(oe.event?oe.event(s):s)}}}function ji(o,s,l,p,u,g,m,_,S,C){var R,y,I,T,N,U,E,P,G,X,w,ee,J,z,re,D=s.type;if(s.constructor!==void 0)return null;128&l.__u&&(S=!!(32&l.__u),g=[_=s.__e=l.__e]),(R=oe.__b)&&R(s);e:if(typeof D=="function")try{if(P=s.props,G=D.prototype&&D.prototype.render,X=(R=D.contextType)&&p[R.__c],w=R?X?X.props.value:R.__:p,l.__c?E=(y=s.__c=l.__c).__=y.__E:(G?s.__c=y=new D(P,w):(s.__c=y=new Mn(P,w),y.constructor=D,y.render=dh),X&&X.sub(y),y.state||(y.state={}),y.__n=p,I=y.__d=!0,y.__h=[],y._sb=[]),G&&y.__s==null&&(y.__s=y.state),G&&D.getDerivedStateFromProps!=null&&(y.__s==y.state&&(y.__s=Ze({},y.__s)),Ze(y.__s,D.getDerivedStateFromProps(P,y.__s))),T=y.props,N=y.state,y.__v=s,I)G&&D.getDerivedStateFromProps==null&&y.componentWillMount!=null&&y.componentWillMount(),G&&y.componentDidMount!=null&&y.__h.push(y.componentDidMount);else{if(G&&D.getDerivedStateFromProps==null&&P!==T&&y.componentWillReceiveProps!=null&&y.componentWillReceiveProps(P,w),s.__v==l.__v||!y.__e&&y.shouldComponentUpdate!=null&&y.shouldComponentUpdate(P,y.__s,w)===!1){s.__v!=l.__v&&(y.props=P,y.state=y.__s,y.__d=!1),s.__e=l.__e,s.__k=l.__k,s.__k.some(function(Y){Y&&(Y.__=s)}),Tn.push.apply(y.__h,y._sb),y._sb=[],y.__h.length&&m.push(y);break e}y.componentWillUpdate!=null&&y.componentWillUpdate(P,y.__s,w),G&&y.componentDidUpdate!=null&&y.__h.push(function(){y.componentDidUpdate(T,N,U)})}if(y.context=w,y.props=P,y.__P=o,y.__e=!1,ee=oe.__r,J=0,G)y.state=y.__s,y.__d=!1,ee&&ee(s),R=y.render(y.props,y.state,y.context),Tn.push.apply(y.__h,y._sb),y._sb=[];else do y.__d=!1,ee&&ee(s),R=y.render(y.props,y.state,y.context),y.state=y.__s;while(y.__d&&++J<25);y.state=y.__s,y.getChildContext!=null&&(p=Ze(Ze({},p),y.getChildContext())),G&&!I&&y.getSnapshotBeforeUpdate!=null&&(U=y.getSnapshotBeforeUpdate(T,N)),z=R!=null&&R.type===be&&R.key==null?no(R.props.children):R,_=Zs(o,Pn(z)?z:[z],s,l,p,u,g,m,_,S,C),y.base=s.__e,s.__u&=-161,y.__h.length&&m.push(y),E&&(y.__E=y.__=null)}catch(Y){if(s.__v=null,S||g!=null)if(Y.then){for(s.__u|=S?160:128;_&&_.nodeType==8&&_.nextSibling;)_=_.nextSibling;g[g.indexOf(_)]=null,s.__e=_}else{for(re=g.length;re--;)Hi(g[re]);qi(s)}else s.__e=l.__e,s.__k=l.__k,Y.then||qi(s);oe.__e(Y,s,l)}else g==null&&s.__v==l.__v?(s.__k=l.__k,s.__e=l.__e):_=s.__e=hh(l.__e,s,l,p,u,g,m,S,C);return(R=oe.diffed)&&R(s),128&s.__u?void 0:_}function qi(o){o&&(o.__c&&(o.__c.__e=!0),o.__k&&o.__k.some(qi))}function to(o,s,l){for(var p=0;p<l.length;p++)Fi(l[p],l[++p],l[++p]);oe.__c&&oe.__c(s,o),o.some(function(u){try{o=u.__h,u.__h=[],o.some(function(g){g.call(u)})}catch(g){oe.__e(g,u.__v)}})}function no(o){return typeof o!="object"||o==null||o.__b>0?o:Pn(o)?o.map(no):Ze({},o)}function hh(o,s,l,p,u,g,m,_,S){var C,R,y,I,T,N,U,E=l.props||Rn,P=s.props,G=s.type;if(G=="svg"?u="http://www.w3.org/2000/svg":G=="math"?u="http://www.w3.org/1998/Math/MathML":u||(u="http://www.w3.org/1999/xhtml"),g!=null){for(C=0;C<g.length;C++)if((T=g[C])&&"setAttribute"in T==!!G&&(G?T.localName==G:T.nodeType==3)){o=T,g[C]=null;break}}if(o==null){if(G==null)return document.createTextNode(P);o=document.createElementNS(u,G,P.is&&P),_&&(oe.__m&&oe.__m(s,g),_=!1),g=null}if(G==null)E===P||_&&o.data==P||(o.data=P);else{if(g=g&&In.call(o.childNodes),!_&&g!=null)for(E={},C=0;C<o.attributes.length;C++)E[(T=o.attributes[C]).name]=T.value;for(C in E)T=E[C],C=="dangerouslySetInnerHTML"?y=T:C=="children"||C in P||C=="value"&&"defaultValue"in P||C=="checked"&&"defaultChecked"in P||xn(o,C,null,T,u);for(C in P)T=P[C],C=="children"?I=T:C=="dangerouslySetInnerHTML"?R=T:C=="value"?N=T:C=="checked"?U=T:_&&typeof T!="function"||E[C]===T||xn(o,C,T,E[C],u);if(R)_||y&&(R.__html==y.__html||R.__html==o.innerHTML)||(o.innerHTML=R.__html),s.__k=[];else if(y&&(o.innerHTML=""),Zs(s.type=="template"?o.content:o,Pn(I)?I:[I],s,l,p,G=="foreignObject"?"http://www.w3.org/1999/xhtml":u,g,m,g?g[0]:l.__k&&St(l,0),_,S),g!=null)for(C=g.length;C--;)Hi(g[C]);_||(C="value",G=="progress"&&N==null?o.removeAttribute("value"):N!=null&&(N!==o[C]||G=="progress"&&!N||G=="option"&&N!=E[C])&&xn(o,C,N,E[C],u),C="checked",U!=null&&U!=o[C]&&xn(o,C,U,E[C],u))}return o}function Fi(o,s,l){try{if(typeof o=="function"){var p=typeof o.__u=="function";p&&o.__u(),p&&s==null||(o.__u=o(s))}else o.current=s}catch(u){oe.__e(u,l)}}function io(o,s,l){var p,u;if(oe.unmount&&oe.unmount(o),(p=o.ref)&&(p.current&&p.current!=o.__e||Fi(p,null,s)),(p=o.__c)!=null){if(p.componentWillUnmount)try{p.componentWillUnmount()}catch(g){oe.__e(g,s)}p.base=p.__P=null}if(p=o.__k)for(u=0;u<p.length;u++)p[u]&&io(p[u],s,l||typeof o.type!="function");l||Hi(o.__e),o.__c=o.__=o.__e=void 0}function dh(o,s,l){return this.constructor(o,l)}function Wi(o,s,l){var p,u,g,m;s==document&&(s=document.documentElement),oe.__&&oe.__(o,s),u=(p=typeof l=="function")?null:l&&l.__k||s.__k,g=[],m=[],ji(s,o=(!p&&l||s).__k=Gi(be,null,[o]),u||Rn,Rn,s.namespaceURI,!p&&l?[l]:u?null:s.firstChild?In.call(s.childNodes):null,g,!p&&l?l:u?u.__e:s.firstChild,p,m),to(g,o,m)}In=Tn.slice,oe={__e:function(o,s,l,p){for(var u,g,m;s=s.__;)if((u=s.__c)&&!u.__)try{if((g=u.constructor)&&g.getDerivedStateFromError!=null&&(u.setState(g.getDerivedStateFromError(o)),m=u.__d),u.componentDidCatch!=null&&(u.componentDidCatch(o,p||{}),m=u.__d),m)return u.__E=u}catch(_){o=_}throw o}},Ks=0,rh=function(o){return o!=null&&o.constructor===void 0},Mn.prototype.setState=function(o,s){var l;l=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Ze({},this.state),typeof o=="function"&&(o=o(Ze({},l),this.props)),o&&Ze(l,o),o!=null&&this.__v&&(s&&this._sb.push(s),Ws(this))},Mn.prototype.forceUpdate=function(o){this.__v&&(this.__e=!0,o&&this.__h.push(o),Ws(this))},Mn.prototype.render=be,it=[],Js=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ys=function(o,s){return o.__v.__b-s.__v.__b},On.__r=0,Ni=Math.random().toString(8),kn="__d"+Ni,Yt="__a"+Ni,Qs=/(PointerCapture)$|Capture$/i,Di=0,Bi=$s(!1),Ui=$s(!0),sh=0;var Qt,_e,zi,ro,Xt=0,po=[],Ce=oe,so=Ce.__b,oo=Ce.__r,ao=Ce.diffed,co=Ce.__c,lo=Ce.unmount,ho=Ce.__;function Ki(o,s){Ce.__h&&Ce.__h(_e,o,Xt||s),Xt=0;var l=_e.__H||(_e.__H={__:[],__h:[]});return o>=l.__.length&&l.__.push({}),l.__[o]}function H(o){return Xt=1,uh(go,o)}function uh(o,s,l){var p=Ki(Qt++,2);if(p.t=o,!p.__c&&(p.__=[l?l(s):go(void 0,s),function(_){var S=p.__N?p.__N[0]:p.__[0],C=p.t(S,_);S!==C&&(p.__N=[C,p.__[1]],p.__c.setState({}))}],p.__c=_e,!_e.__f)){var u=function(_,S,C){if(!p.__c.__H)return!0;var R=p.__c.__H.__.filter(function(I){return I.__c});if(R.every(function(I){return!I.__N}))return!g||g.call(this,_,S,C);var y=p.__c.props!==_;return R.some(function(I){if(I.__N){var T=I.__[0];I.__=I.__N,I.__N=void 0,T!==I.__[0]&&(y=!0)}}),g&&g.call(this,_,S,C)||y};_e.__f=!0;var g=_e.shouldComponentUpdate,m=_e.componentWillUpdate;_e.componentWillUpdate=function(_,S,C){if(this.__e){var R=g;g=void 0,u(_,S,C),g=R}m&&m.call(this,_,S,C)},_e.shouldComponentUpdate=u}return p.__N||p.__}function le(o,s){var l=Ki(Qt++,3);!Ce.__s&&fo(l.__H,s)&&(l.__=o,l.u=s,_e.__H.__h.push(l))}function xe(o){return Xt=5,ht(function(){return{current:o}},[])}function ht(o,s){var l=Ki(Qt++,7);return fo(l.__H,s)&&(l.__=o(),l.__H=s,l.__h=o),l.__}function he(o,s){return Xt=8,ht(function(){return o},s)}function ph(){for(var o;o=po.shift();){var s=o.__H;if(o.__P&&s)try{s.__h.some(En),s.__h.some($i),s.__h=[]}catch(l){s.__h=[],Ce.__e(l,o.__v)}}}Ce.__b=function(o){_e=null,so&&so(o)},Ce.__=function(o,s){o&&s.__k&&s.__k.__m&&(o.__m=s.__k.__m),ho&&ho(o,s)},Ce.__r=function(o){oo&&oo(o),Qt=0;var s=(_e=o.__c).__H;s&&(zi===_e?(s.__h=[],_e.__h=[],s.__.some(function(l){l.__N&&(l.__=l.__N),l.u=l.__N=void 0})):(s.__h.some(En),s.__h.some($i),s.__h=[],Qt=0)),zi=_e},Ce.diffed=function(o){ao&&ao(o);var s=o.__c;s&&s.__H&&(s.__H.__h.length&&(po.push(s)!==1&&ro===Ce.requestAnimationFrame||((ro=Ce.requestAnimationFrame)||fh)(ph)),s.__H.__.some(function(l){l.u&&(l.__H=l.u),l.u=void 0})),zi=_e=null},Ce.__c=function(o,s){s.some(function(l){try{l.__h.some(En),l.__h=l.__h.filter(function(p){return!p.__||$i(p)})}catch(p){s.some(function(u){u.__h&&(u.__h=[])}),s=[],Ce.__e(p,l.__v)}}),co&&co(o,s)},Ce.unmount=function(o){lo&&lo(o);var s,l=o.__c;l&&l.__H&&(l.__H.__.some(function(p){try{En(p)}catch(u){s=u}}),l.__H=void 0,s&&Ce.__e(s,l.__v))};var uo=typeof requestAnimationFrame=="function";function fh(o){var s,l=function(){clearTimeout(p),uo&&cancelAnimationFrame(s),setTimeout(o)},p=setTimeout(l,35);uo&&(s=requestAnimationFrame(l))}function En(o){var s=_e,l=o.__c;typeof l=="function"&&(o.__c=void 0,l()),_e=s}function $i(o){var s=_e;o.__c=o.__(),_e=s}function fo(o,s){return!o||o.length!==s.length||s.some(function(l,p){return l!==o[p]})}function go(o,s){return typeof s=="function"?s(o):s}var vo=Vs(Li()),gh=280,mo=1024,mh=200,rt=64;function et(o,s){return typeof o!="string"||o.length===0?null:o.length>s?o.slice(0,s):o}function Se(o,s){return o==null?null:et(o,s)}function bh(o){if(!o||typeof o!="object")return null;let s=o;if(s.text!=="new_message_notification")return null;let l=et(s.conversationId,rt),p=et(s.messageId,rt);if(!l||!p)return null;let u=et(s.preview,gh)??"",g=et(s.createdAt,64)??new Date().toISOString(),m=s.from&&typeof s.from=="object"?s.from:{},_={name:Se(m.name,mh),avatarUrl:Se(m.avatarUrl,mo)},S=Se(s.previewImageUrl,mo),C=S&&/^https?:\/\//i.test(S)?S:null;return{text:"new_message_notification",conversationId:l,messageId:p,preview:u,previewImageUrl:C,from:_,createdAt:g,source:Se(s.source,64),automationId:Se(s.automationId,rt),campaignId:Se(s.campaignId,rt)}}var bo=64e3;function vh(o){if(!o||typeof o!="object")return null;let s=o;if(s.text!=="visitor_modal_show")return null;let l=et(s.deliveryId,rt),p=et(s.modalId,rt);if(!l||!p)return null;let u=s.modal&&typeof s.modal=="object"?s.modal:null;if(!u)return null;let g=Se(u.size,16)??"medium",m=["small","medium","large","custom"].includes(g)?g:"medium",_=Array.isArray(u.includePaths)?u.includePaths.map(N=>et(N,255)).filter(N=>!!N).slice(0,50):[],S=Array.isArray(u.excludePaths)?u.excludePaths.map(N=>et(N,255)).filter(N=>!!N).slice(0,50):[],C=Se(s.sourceType,16)??"manual",R=["automation","campaign","manual"].includes(C)?C:"manual",y=Se(u.displayMode,32)??"always",I=["always","once","until_dismissed","limited"].includes(y)?y:"always",T=(()=>{let N=u.frameConfig;if(!N||typeof N!="object")return null;let U=N,E=(J,z,re)=>Math.max(z,Math.min(re,J)),P={},G=Se(U.backgroundColor,64);G&&(P.backgroundColor=G);let X=Se(U.borderColor,64);X!==void 0&&(P.borderColor=X),typeof U.borderRadius=="number"&&(P.borderRadius=E(U.borderRadius,0,64)),typeof U.borderWidth=="number"&&(P.borderWidth=E(U.borderWidth,0,16)),typeof U.padding=="number"&&(P.padding=E(U.padding,0,64));let w=Se(U.backgroundImageUrl,4096);w&&(P.backgroundImageUrl=w);let ee=Se(U.mobileBackgroundImageUrl,4096);return ee&&(P.mobileBackgroundImageUrl=ee),Object.keys(P).length>0?P:null})();return{text:"visitor_modal_show",deliveryId:l,modalId:p,sourceType:R,automationId:Se(s.automationId,rt),campaignId:Se(s.campaignId,rt),modal:{id:p,size:m,customWidth:Se(u.customWidth,32),customMaxHeight:Se(u.customMaxHeight,32),content:Se(u.content,bo),mobileContent:Se(u.mobileContent,bo),includePaths:_,excludePaths:S,displayMode:I,frameConfig:T}}}var Vn=class{constructor(s){this.client=null;this.channel=null;this.handlers=null;this.apiClient=s}async connect(s){if(this.handlers=s,this.client&&this.channel)return;let l;try{l=await this.apiClient.getVisitorAblyToken()}catch(p){console.info("[BaseportalChat] visitor token unavailable, retrying after identify",p);return}try{this.client=new vo.Realtime({authCallback:(g,m)=>{m(null,l)},clientId:l.clientId??void 0});let p=JSON.parse(l.capability??"{}"),u=Object.keys(p)[0];if(!u){console.warn("[BaseportalChat] visitor token has no channel capability \u2014 skipping subscribe");return}this.channel=this.client.channels.get(u),this.channel.once("attached",()=>{console.info(`[BaseportalChat] visitor realtime: subscribed to ${u}`)}),this.channel.once("failed",g=>{console.warn("[BaseportalChat] visitor realtime: channel failed",g)}),this.channel.subscribe("notification",g=>{if(!(!g.data||!this.handlers))try{let m=typeof g.data=="string"?JSON.parse(g.data):g.data;if(m&&typeof m=="object"&&m.text==="visitor_modal_show"){let S=vh(m);S&&this.handlers.onModalShow&&this.handlers.onModalShow(S);return}let _=bh(m);_&&this.handlers.onNotification(_)}catch(m){console.warn("[BaseportalChat] visitor realtime: malformed payload",m)}}),this.channel.attach()}catch(p){console.warn("[BaseportalChat] visitor realtime connect failed:",p)}}disconnect(){this.channel&&(this.channel.unsubscribe(),this.channel=null),this.client&&(this.client.close(),this.client=null),this.handlers=null}};var yo=!1;function wo(o){yo=o}function Ne(...o){yo&&console.warn("[BaseportalChat]",...o)}var yh="data:audio/mpeg;base64,SUQzBAAAAAAAIlRTU0UAAAAOAAADTGF2ZjYyLjMuMTAwAAAAAAAAAAAAAAD/84DAAAAAAAAAAAAASW5mbwAAAA8AAAASAAAPgQAaGhoaGigoKCgoKDU1NTU1Q0NDQ0NDUFBQUFBeXl5eXl5ra2tra3l5eXl5eYaGhoaGlJSUlJSUoaGhoaGhr6+vr6+8vLy8vLzKysrKytfX19fX1+Xl5eXl8vLy8vLy//////8AAAAATGF2YzYyLjExAAAAAAAAAAAAAAAAJAPMAAAAAAAAD4EpAwOsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//OAxAAqMWYQAVvgAc886enjcNv+77XGcM4YYuxQBMREwAABhYKXzRvMRLzUXM5GnOxpzeQ83C8Ol0s5a5zRYhMTFwzYYDHgEMJjkx+HTBRANIpk0WZw41mIigZwQxpJKGjDwZcGAgCZkosGWCcY+Fhh4KGDAMAgIW0QcSISLTHVOu9ibO2vuW77kP4/j+P5GIxGIxG43G43L6enp6ekpKSkpKSkwAw8PDw8AAAAAAw8PH+wACECgpBLVdLLvl0neF2BWtcLABGAeEuYjxKBav/zgsQaKSj2NLWN8AAMC8EMxpHChQBUEBDGE9M0aJ4KpgOjrGjoYsZPhcRgKjinIOymeoRohjGBvHhlOIY8IzJlrijmH0BWjyZdA7RkXSSmdOHLNGjGQibUHsBiNDEV1QXct3IL//9Jq36w0LFjum4DMOllq75C1zIy13T03UIi7XhM7uVte3qtctSbYwaiS6HrqpfoVH9SjcbjdvVSMP5Dk/chh2HIgR7X3VcSgAxbQwAAA3MBsANTABQA0wEkEMMIrBbjBRQKwxIVi/NfokOz//OCxDk2UZ4YAd/4ABQgSlMRgDezA5AJ4wSEEwMJVFsDJ+RYQ7Su89MAkJ5zFcQT4xt8KeMIbDdjF6yaow3296O7aA4DH8BR0wfIA0MBjAkjAcAB8wBQB6MDFAmhwB2FgAKTu219y3clm5XG43L7es6ent91hhhb7+GGGHP/WGH/vPP//6+f/+953RzDJwogkfOG2hZy36s66t2+0v+ha8kY6+iLO8e/9Lu13UOq6gE/219+qt+Kq/DBCqkNsgTHCgEMDhMw0NjI6/O7R872yVj/84LEIyIAzlFeHzykxZQHgUDCYCoAhgAABmAuB0YHAq5o1SCGAEA+oMYtAF5gTARmAsCMYerFhxnAXGAuAOIgBEu2lupIyoABIsg7llgqemDBUFQVYDQlg0Ig+KLNGKOvNv9Xq1/9Xds//3zBrUO4/+guUvtnjGmuqYoZBYADBIAcYAMATmAPgKxgJAFOYDyCdGHtLMB8bUT8ZGoI5mFrhDhgtQLiYGGCwGAlBE5gJxDcZFN0CmCtBchgkAHoZOiBpmEIgFpg3AF8YxWtEH1yA//zgsRfLAGiGAAP6pRUYSKA4mBwAIxgN4COYBOAdmAHAFQJAGwEKYNqWp/9a91XZ9GzfUpe6/opP2Uc4jdVSmfzc5ZfWgmHqVt8C1E3pLMk0sF5aiiQc3xdvLbifal+k70TgboJzs4THMcSNavOdSMCDAhTA1gN4wXkGpML0ENDLxUrc22CwVMAiEbjA2gc8wHUEyCwJuYEED8GDgj7pxuOxkYdGFzmDOgyZktwZMYIkAvGCQAFJjEYd2fggATgoR/MDSAFDAXQC0wBUAvBgBMS//OCxHMpEMoYABa+hIAyWAKqUNnG1GYN1J86L1Vk2Z/owXk1HMzYkiMu8XpoOH51STb/dq6/19NNC8bpKusq9X/OEDEoDDDcAYEmBllgGxmmCoEAYR4bph/DOGQ+eqb2SUp8H5y8Y2uAjmDkADpgdIAKYF0AzGB3gjZhDQn8dIJFMmHzBEhgjgNgYuuHcmCggF5gmgEaYlWnanZ/AsJg14BsTAmpgHoAiYAGANlUAWEQAaIwHhZjfWz1qxa312Mbr/Z3W+ns/b//r9P25D9tfbX/84LEkiRYyiAAp77ATEFNRTMuMTAwVVVVVVVVVVVVA3wEtsds/oD3xBpZqOtiWyOgBCABsQgnGE0pUfIT2RkNB1mFGCwYKQEIQD0YJQCxhbh3n6u4sYroN5gog5mJkKEFgMDAwBPMT2ak8yApTBlAUCAKVXtjaU4IJ4PH6/s7+74WelHK/93s//8x1xbd7ClVTGdW31JMQU1FMy4xMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqJsAiWWf/zgsSyHajORf4PpLCTvLLjlD7xh3y5BpSesGAagGZgLwDAYFmBimC6BBhi/JRSZaAuamBPhJBgUAGmYDyAvGA7AEIOBWzBuAI45AYP/MMyAwDAjATwwJ0M5MA3ABzAgANswm1tLNgeB+zA1QGowDwAZGgA5Q0tkXhCoBkix/Z/tbNe6zT26G/7v9u63u//7P/oru7VukxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqql9SP+EdtdjF0lDDmTQNjf3TAaAJ//OCxMkjcMot9A4+hIMCtBAzBMgeQwoUR5MkqDeT+80v4x3kC3MG+AIzAkQBwSABzAygFMwrMKePrXT5zFOQCUwO8GrMMTE/DA4QUowNgIhMND1UzfnBA0wSEECMBSAZQKAMBwAaYA2ABAIApMANATCYA05Qc973O21XL5nF9ZxkO9+1i6P7P+v//2Kq2bk1X23KpkNdTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUCAKlar7//84LE2CcozhwAFr6EzxWGZEchjwRKDSg6AXlgBeFALswBgGQMFUQfDwYF2AxyYMTMItBWDBAAK8wGUAuMBJAkjB3BCk7PJ6kMO8AuzAIgUwxSQQFMDMAGjADAb8wafLdNFeDzTAgwOwwAwBdBAA8HADAsAXCQBCa+FMHWa10t3+iKo+G93MaOzp/0df1fb/6WO1b/9aVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf1/UO+jA3YXeYxBwun50YDOA//zgsTKI7DKIUKf8MwZgVgFMYJqCimE4BpRk8KOeZqxOsmDth+xgkQLiYE+BKGAeABhgHQJKYMSMkHLd2fJhhIN4YA4BJmPFhfRgsoJMYDkEnmAv9zJhcAkOAQSgAgP5gDABwYA8ABDwCeUAGg8ATFACAEkp1Jl+83U7tleGcr29/5Pr1rsbYuJqL//61p9t1tBa3vl1UxBTUUzLjEwMFVVVVXHu+81vDe9Z1M5Q4apF7qzAUiZRYa+eYKAQhhFhymH4NgZEp+JxjJNn2Ur4hi3//OCxNYmkMocABZ+hGBpmC0AJ5gQ4EcYBAB3mAVA/xge5MiZ4phAGERhXJghII2Y/sD0mDjANRgq4KOYp5wOmcKgbZgwADcYEuAdmAnAFhgEwAsYAuADgYAEEIAeLAGruP/DkXn5yjor9m/y0DIMgyKigfn7CI1LEENRYzX+7YSMbf1bPs7vy1f3qfazS6oqk7SnYrWqTEFNRTMuMTAwqqqqqqqqqqqqqizL/qrGnZYanMgJBoAMYAIANmANgIhgIQEWYDOCCGBuLoB8XiPwZE7/84LE8i2I/hwA177AB45hS4O0YI4CkmAVgnRgdoOeYbINIGrgagpi1gXcYPcEsGSXgbhgNYFaYOaArmRua7ZsTYPSYXgA6GCSgKJgRwCwYBkAnGAJgH4EAKgDX4KRVLetVuijV7VL/66ut9fdtTmY207QIXXh9u60bWqlIL5lchrrULHYwwizxSiohQknk9k9MXs6V1VAzu8//3rv8/f/NvoudyFhzIKOGM/PjAZwGkwKwCwMEzBTzCeAywydczzMoEgnTBFQxwwHYEtJAK4wIf/zgsTsLCmeFAAP6JTAizBVgKAw/sCPOOHqijGbwfMwUcKtMaEBIDA5AIgwgUFOMkKj3TbPwjYwvwB5EgkYwH4AwMAYARBwA9BIBUDAEceAKdb/+c/1yUk1V1oiJ8NIXM7akV1ZSKrsqTNoiPuykb0lVt97fcm0zLV5ktY8xrlF5RN+vD7c1a5TerfALoDr0avjRBd8sXXbXm5/7MeppSY7/+8/L/3+/rSuQOusAoeAABDAXAtMAYCowOwTTDEFSMCML02rLZzbi07ow68GAMHc//OCxP8zIrYQqs/E0QDkwLsCECAdkwEcI2MP8FzTbXmCcxHYFzMFoBqDDKQFMwXAGXMFRDXDHBCnE0HMSEMIMBeTBHwAwwAYARBwAMFgD0wCkASMAOAIygAFpOfnlzf/j/6/9/lv//973/P7r9/v+73hr/////1j2og8u2FtRLCwBUKPp4Fxjqz51DXJUDIkUyoDFBho0ZyToY1qU8SxYtebY9WYtPnnqgMCAhjAGBfb/MoAL5GPPAQrrzNNjgEjNGTNH/0YGuDCmBUggxlLsUn/84LE9jNJnhADXvgAGAQgU5g9gMyYQeJfUzsvgZUYI0mM8Iqx399hkYKqG/GJbhhRhzQ9rNQ9HTUby1wwcdpsNaBFTzA8ALww3IWtMMmCTjDOwcIeAIX1lkPPsYDUBGmAtgDpgMAB4YBgASBwBQYCaAzGAqgJCxRCAAGAEgBkrpMu+BgBeHHcLvoJy/ZdwvqYAIABmABAArSmXRqg////9dDOF1tUXCxdabTl8NaWGaSoKzmVX6Wa//////WK/MbWAa5DcfaK2KYVWjEudpyoBf/zgsTsVKvB3AOa+AD5w/GrWlUNVaX////////4o/7On3aJD7G3eWQ312TvO+tuFUu6XGajVqlwy/cM1rW///////////SGfSPwyz1xpK/LprcfehjbXnDct98XYi7OquFrK6+taNRqVS67VjLs5VaWal2VTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//OCxDsAAANIAcAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",wh=3e3,dt=null,_o=0;function Ji(o){if(o.isWidgetActive||typeof document<"u"&&document.hasFocus()&&document.visibilityState==="visible")return;let s=Date.now();if(!(s-_o<wh)){_o=s;try{dt||(dt=new Audio(yh),dt.volume=.5,dt.preload="auto"),dt.pause(),dt.currentTime=0;let l=dt.play();l&&typeof l.catch=="function"&&l.catch(p=>{Ne("notification sound play rejected:",p)})}catch(l){Ne("notification sound failed:",l)}}}var _h=0;function h(o,s,l,p,u,g){s||(s={});var m,_,S=s;if("ref"in S)for(_ in S={},s)_=="ref"?m=s[_]:S[_]=s[_];var C={type:o,props:S,key:l,ref:m,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--_h,__i:-1,__u:0,__source:u,__self:g};if(typeof o=="function"&&(m=o.defaultProps))for(_ in m)S[_]===void 0&&(S[_]=m[_]);return oe.vnode&&oe.vnode(C),C}var Ln=()=>h("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:h("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),Be=()=>h("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[h("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),h("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),Ao=()=>h("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[h("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),h("polyline",{points:"12 19 5 12 12 5"})]}),Mt=()=>h("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[h("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),h("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]});var Co=()=>h("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:h("path",{d:"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"})}),xo=()=>h("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[h("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),h("polyline",{points:"7 10 12 15 17 10"}),h("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),Nn=()=>h("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[h("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),h("polyline",{points:"14 2 14 8 20 8"})]}),Bn=()=>h("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[h("circle",{cx:"11",cy:"11",r:"8"}),h("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),ko=()=>h("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[h("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),h("polyline",{points:"9 22 9 12 15 12 15 22"})]}),So=()=>h("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:h("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),Mo=()=>h("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[h("circle",{cx:"12",cy:"12",r:"10"}),h("path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}),h("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),Un=()=>h("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:h("polyline",{points:"9 18 15 12 9 6"})}),Ro=()=>h("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[h("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),h("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"})]}),To=()=>h("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[h("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),h("polyline",{points:"15 3 21 3 21 9"}),h("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),Oo=()=>h("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:h("path",{d:"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"})}),Io=()=>h("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:h("path",{d:"M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zM17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"})}),Po=()=>h("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[h("rect",{x:"9",y:"2",width:"6",height:"12",rx:"3"}),h("path",{d:"M5 10v2a7 7 0 0 0 14 0v-2"}),h("line",{x1:"12",y1:"19",x2:"12",y2:"23"}),h("line",{x1:"8",y1:"23",x2:"16",y2:"23"})]}),Eo=()=>h("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[h("polyline",{points:"3 6 5 6 21 6"}),h("path",{d:"M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),Vo=()=>h("svg",{viewBox:"0 0 24 24",fill:"currentColor",stroke:"none",children:h("polygon",{points:"6 4 20 12 6 20 6 4"})});function Lo({isOpen:o,position:s,unreadCount:l,onClick:p}){return h("button",{class:`bp-bubble ${s==="bottom-left"?"bp-bubble--left":"bp-bubble--right"}`,onClick:p,"aria-label":o?"Close chat":"Open chat",children:[o?h(Be,{}):h(Ln,{}),!o&&l>0&&h("span",{class:"bp-bubble__badge",children:l>99?"99+":l})]})}var Ah=18;function No({onSend:o,onModeChange:s,disabled:l,hidden:p,t:u}){let[g,m]=H("idle"),[_,S]=H(0),[C,R]=H(null),y=xe(null),I=xe(null),T=xe([]),N=xe(0),U=xe(!1);le(()=>{s?.(g)},[g,s]),le(()=>{if(g!=="recording")return;let J=window.setInterval(()=>{S(Math.floor((Date.now()-N.current)/1e3))},250);return()=>window.clearInterval(J)},[g]),le(()=>()=>{E()},[]);let E=()=>{try{y.current?.stop()}catch{}I.current?.getTracks().forEach(J=>J.stop()),I.current=null,y.current=null,T.current=[]},P=()=>{let J=["audio/mp4;codecs=mp4a.40.2","audio/mp4","audio/webm;codecs=opus","audio/webm"];for(let z of J)if(typeof MediaRecorder<"u"&&MediaRecorder.isTypeSupported(z))return z;return""},G=J=>new Promise(z=>{let re=URL.createObjectURL(J),D=new Audio,Y=()=>{D.onloadedmetadata=null,D.onerror=null,URL.revokeObjectURL(re)};D.onloadedmetadata=()=>{Y(),z(!0)},D.onerror=()=>{Ne("recorded audio is not playable",{code:D.error?.code,message:D.error?.message}),Y(),z(!1)},D.src=re}),X=async()=>{if(!(l||g!=="idle")){R(null),U.current=!1,T.current=[];try{let J=await navigator.mediaDevices.getUserMedia({audio:!0});I.current=J;let z=P(),re=z?new MediaRecorder(J,{mimeType:z}):new MediaRecorder(J);y.current=re,re.ondataavailable=D=>{D.data&&D.data.size>0&&T.current.push(D.data)},re.onstop=async()=>{let D=re.mimeType||z||"audio/webm",Y=new Blob(T.current,{type:D}),c=Math.max(1,Math.floor((Date.now()-N.current)/1e3));if(I.current?.getTracks().forEach(ve=>ve.stop()),I.current=null,U.current){m("idle");return}if(Y.size===0){m("idle");return}if(!await G(Y)){R(u.chat.audioCorrupted),m("idle"),T.current=[];return}m("sending");try{await o(Y,c)}catch(ve){Ne("audio send failed:",ve)}finally{T.current=[],m("idle")}},N.current=Date.now(),S(0),re.start(),m("recording")}catch(J){Ne("mic permission denied or unavailable:",J),R(u.chat.audioPermissionDenied),E(),m("idle")}}},w=()=>{U.current=!1,y.current?.stop()},ee=()=>{U.current=!0,y.current?.stop()};return g==="idle"?h(be,{children:[h("button",{class:"bp-wcomp__btn",onClick:X,disabled:l,title:u.chat.recordAudio,"aria-label":u.chat.recordAudio,style:p?{display:"none"}:void 0,children:h(Po,{})}),C&&!p&&h("div",{class:"bp-wcomp__error",children:C})]}):h("div",{class:"bp-wrec",children:[h("button",{class:"bp-wrec__cancel",onClick:ee,disabled:g==="sending",title:u.chat.cancelAudio,"aria-label":u.chat.cancelAudio,children:h(Eo,{})}),h("span",{class:"bp-wrec__indicator",children:[h("span",{class:"bp-wrec__dot"}),h("span",{class:"bp-wrec__time",children:Ch(_)})]}),h("span",{class:"bp-wrec__wave","aria-hidden":"true",children:Array.from({length:Ah}).map((J,z)=>h("i",{style:{animationDelay:`${z%6*.1}s`}},z))}),h("button",{class:"bp-wrec__send",onClick:w,disabled:g==="sending",title:u.chat.sendAudio,"aria-label":u.chat.sendAudio,children:h(Mt,{})})]})}function Ch(o){let s=Math.floor(o/60),l=o%60;return`${s}:${String(l).padStart(2,"0")}`}function Bo({value:o,onChange:s,onSend:l,onFileSelect:p,onFileRemove:u,onSendAudio:g,attachedFile:m,uploading:_,disabled:S,placeholder:C,t:R}){let y=xe(null),I=xe(null),[T,N]=H("idle"),U=T!=="idle",E=he(D=>{D.key==="Enter"&&!D.shiftKey&&(D.preventDefault(),l())},[l]),P=he(D=>{let Y=D.target;s(Y.value),Y.style.height="auto",Y.style.height=`${Math.min(Y.scrollHeight,100)}px`},[s]),G=he(()=>{I.current?.click()},[]),X=he(D=>{let Y=D.target,c=Y.files?.[0];c&&p(c),Y.value=""},[p]),w=m?.file.type.startsWith("image/"),ee=(o.trim()||m)&&!S&&!_,J=!!o.trim()||!!m,z=!!g&&!J,re=J&&!U;return h("div",{class:"bp-wcomp",children:[m&&!U&&h("div",{class:"bp-wcomp__preview",children:[w&&m.preview?h("img",{src:m.preview,alt:m.file.name,class:"bp-wcomp__preview-thumb"}):h(Nn,{}),h("div",{class:"bp-wcomp__preview-name",children:[m.file.name,_&&h("span",{style:{opacity:.7},children:[" \xB7 ",R.chat.uploading]})]}),!_&&h("button",{class:"bp-wcomp__preview-remove",onClick:u,"aria-label":"Remove file",children:h(Be,{})})]}),h("div",{class:`bp-wcomp__row ${U?"bp-wcomp__row--bare":""}`,children:[!U&&h("button",{class:"bp-wcomp__btn",onClick:G,disabled:S||_||!!m,"aria-label":R.chat.attachFile,children:h(Co,{})}),!U&&h("textarea",{ref:y,class:"bp-wcomp__input",value:o,onInput:P,onKeyDown:E,placeholder:C||R.chat.placeholder,disabled:S,rows:1}),g&&h(No,{onSend:g,onModeChange:N,disabled:S||_,hidden:!z&&!U,t:R}),re&&h("button",{class:"bp-wcomp__btn bp-wcomp__btn--send",onClick:l,disabled:!ee,"aria-label":"Send message",children:h(Mt,{})})]}),h("input",{type:"file",ref:I,onChange:X,style:{display:"none"},accept:"image/*,video/mp4,audio/*,.pdf,.doc,.docx,.xls,.xlsx,.txt"})]})}function xh(o){return o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Uo(o){if(!o)return"";let s=xh(o);return s=s.replace(/```([\s\S]+?)```/g,(l,p)=>`<pre><code>${p}</code></pre>`),s=s.replace(/`([^`\n]+)`/g,"<code>$1</code>"),s=s.replace(/(^|\W)\*([^\s*][^*\n]*?)\*(?=\W|$)/g,"$1<strong>$2</strong>"),s=s.replace(/(^|\W)_([^\s_][^_\n]*?)_(?=\W|$)/g,"$1<em>$2</em>"),s=s.replace(/(^|\W)~([^\s~][^~\n]*?)~(?=\W|$)/g,"$1<s>$2</s>"),s=s.replace(/(^|[^"'>=])(https?:\/\/[^\s<]+)/g,'$1<a href="$2" target="_blank" rel="noopener noreferrer">$2</a>'),s}var kh=new Set(["p","br","strong","b","em","i","u","s","strike","a","ul","ol","li","blockquote","code","pre","h1","h2","h3","h4","h5","h6","span","div","img","figure","figcaption"]),Sh=new Set(["script","style","noscript","iframe","object","embed","frame","frameset","svg","math","template","link","meta","base","form","input","textarea","select","option","button"]),Mh=new Set(["class"]),Rh={a:new Set(["href","title"]),img:new Set(["src","alt","title","width","height"])};function Th(o){if(!o)return!1;let s=o.trim().toLowerCase();return s.startsWith("javascript:")||s.startsWith("vbscript:")?!1:s.startsWith("data:")?/^data:image\/(png|jpe?g|gif|webp|avif);/.test(s):!0}function qo(o){let s=o.tagName.toLowerCase();if(!kh.has(s)){if(Sh.has(s)){o.remove();return}let p=o.textContent??"";o.replaceWith(document.createTextNode(p));return}let l=Rh[s];Array.from(o.attributes).forEach(p=>{let u=p.name.toLowerCase();if(u.startsWith("on")){o.removeAttribute(p.name);return}if(l?.has(u)||Mh.has(u)){(u==="href"||u==="src")&&!Th(p.value)&&o.removeAttribute(p.name);return}o.removeAttribute(p.name)}),s==="a"&&(o.setAttribute("target","_blank"),o.setAttribute("rel","noopener noreferrer")),Array.from(o.children).forEach(p=>qo(p))}function Do(o){if(!o||typeof window>"u"||typeof DOMParser>"u")return"";let l=new DOMParser().parseFromString(`<div>${o}</div>`,"text/html").body.firstElementChild;return l?(Array.from(l.children).forEach(p=>qo(p)),l.innerHTML):""}function Ho({src:o,alt:s,onClose:l}){let p=he(u=>{u.key==="Escape"&&l()},[l]);return le(()=>(document.addEventListener("keydown",p),()=>document.removeEventListener("keydown",p)),[p]),h("div",{class:"bp-lightbox",onClick:l,children:[h("button",{class:"bp-lightbox__close",onClick:l,children:h(Be,{})}),h("img",{src:o,alt:s||"",class:"bp-lightbox__img",onClick:u=>u.stopPropagation()})]})}var Go=28;function jo({src:o,seed:s}){let l=xe(null),[p,u]=H(!1),[g,m]=H(0),[_,S]=H(0),C=ht(()=>Ih(s,Go),[s]),[R,y]=H(null);le(()=>{let E=l.current;if(!E)return;let P=!1,G=()=>u(!0),X=()=>u(!1),w=()=>m(E.currentTime),ee=()=>{if(Number.isFinite(E.duration)&&E.duration>0){S(E.duration);return}if(!P){P=!0;try{E.currentTime=1e10}catch{}}},J=()=>{if(Number.isFinite(E.duration)&&E.duration>0&&S(E.duration),P&&E.currentTime!==0)try{E.currentTime=0}catch{}},z=()=>{u(!1),m(0)},re=()=>{let D=E.error?.code,Y=E.error?.message;Ne("audio failed to load",{src:o,code:D,message:Y}),y(`Audio failed (${D??"?"})`)};return E.addEventListener("play",G),E.addEventListener("pause",X),E.addEventListener("timeupdate",w),E.addEventListener("loadedmetadata",ee),E.addEventListener("durationchange",ee),E.addEventListener("seeked",J),E.addEventListener("ended",z),E.addEventListener("error",re),()=>{E.removeEventListener("play",G),E.removeEventListener("pause",X),E.removeEventListener("timeupdate",w),E.removeEventListener("loadedmetadata",ee),E.removeEventListener("durationchange",ee),E.removeEventListener("seeked",J),E.removeEventListener("ended",z),E.removeEventListener("error",re)}},[o]);let I=()=>{let E=l.current;E&&(E.paused?E.play().catch(P=>{Ne("audio play rejected",P),y(`Play blocked: ${P?.name||"unknown"}`)}):E.pause())},T=_>0?Math.min(1,g/_):0,N=Math.round(T*Go),U=p||g>0?g:_;return h("div",{class:"bp-audio",children:[h("button",{class:"bp-audio__play",onClick:I,"aria-label":p?"Pause":"Play",children:p?h(Oh,{}):h(Vo,{})}),h("div",{class:"bp-audio__wave","aria-hidden":"true",children:C.map((E,P)=>h("i",{class:P<N?"is-played":"",style:{height:`${Math.round(E*100)}%`}},P))}),h("span",{class:"bp-audio__time",children:Ph(U)}),h("audio",{ref:l,src:o,preload:"metadata"})]})}function Oh(){return h("svg",{viewBox:"0 0 24 24",fill:"currentColor",stroke:"none",children:[h("rect",{x:"6",y:"5",width:"4",height:"14",rx:"1"}),h("rect",{x:"14",y:"5",width:"4",height:"14",rx:"1"})]})}function Ih(o,s){let l=0;for(let u=0;u<o.length;u++)l=l*31+o.charCodeAt(u)|0;let p=[];for(let u=0;u<s;u++){l=l*1103515245+12345|0;let g=(l>>>16)%1e3/1e3,m=1-Math.abs((u-s/2)/(s/2))*.4,_=.25+g*.75*m;p.push(_)}return p}function Ph(o){if(!Number.isFinite(o)||o<=0)return"0:00";let s=Math.floor(o/60),l=Math.floor(o%60);return`${s}:${String(l).padStart(2,"0")}`}function Fo({media:o,onImageClick:s,t:l}){let p=(o.mimeType||"").toLowerCase();if(p.startsWith("image/")||o.kind==="image"){let u=o.streamUrlData?.small||o.url,g=o.streamUrlData?.large||o.url;return h("img",{src:u,alt:o.name,class:"bp-media-img",onClick:()=>s(g)})}return p.startsWith("video/")?h("video",{controls:!0,class:"bp-media-video",preload:"metadata",children:h("source",{src:o.url,type:p})}):p.startsWith("audio/")||o.kind==="audio"?h(jo,{src:o.url,seed:o.id}):h("a",{href:o.url,target:"_blank",rel:"noopener noreferrer",class:"bp-media-file",download:o.name,children:[h("div",{class:"bp-media-file__icon",children:h(Nn,{})}),h("span",{class:"bp-media-file__name",children:o.name}),h("span",{class:"bp-media-file__download",children:h(xo,{})})]})}function Wo({messages:o,loading:s,t:l}){let p=xe(null),[u,g]=H(null);return le(()=>{p.current?.scrollIntoView({behavior:"smooth"})},[o.length]),s?h("div",{class:"bp-loading",children:h("div",{class:"bp-spinner"})}):o.length===0?h("div",{class:"bp-wthread bp-wthread--empty",children:h("div",{class:"bp-wempty",children:[h("div",{class:"bp-wempty__ico",children:h(Ln,{})}),h("h4",{children:l.chat.emptyTitle}),h("p",{children:l.chat.emptyDescription})]})}):h("div",{class:"bp-wthread",children:[o.map(m=>h(Eh,{message:m,onImageClick:g,t:l},m.id)),h("div",{ref:p}),u&&h(Ho,{src:u,onClose:()=>g(null)})]})}function Eh({message:o,onImageClick:s,t:l}){let p=o.role==="client",u=p?"bp-wmsg bp-wmsg--me":"bp-wmsg bp-wmsg--them",g=new Date(o.createdAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return h("div",{class:u,children:[!p&&h("div",{class:"bp-wmsg__avatar",children:o.user?.avatar?.url?h("img",{src:o.user.avatar.url,alt:o.user.firstName||"Agent"}):(o.user?.firstName?.[0]||"A").toUpperCase()}),h("div",{class:"bp-wmsg__body",children:[h("div",{class:"bp-wmsg__bubble",children:[o.media&&h(Fo,{media:o.media,onImageClick:s,t:l}),o.htmlContent?h("div",{class:"bp-wmsg__rich",dangerouslySetInnerHTML:{__html:Do(o.htmlContent)}}):o.content&&h("div",{dangerouslySetInnerHTML:{__html:Uo(o.content)}})]}),h("div",{class:"bp-wmsg__time",children:g})]})]})}function zo({channelInfo:o,onSubmit:s,loading:l,t:p}){let[u,g]=H(""),[m,_]=H(""),{requireName:S,requireEmail:C,privacyPolicyUrl:R}=o.config,y=T=>{T.preventDefault(),s({name:u.trim()||void 0,email:m.trim()||void 0})},I=(!S||u.trim())&&(!C||m.trim());return h("form",{class:"bp-prechat",onSubmit:y,children:[h("div",{class:"bp-prechat__title",children:p.prechat.title}),h("div",{class:"bp-prechat__desc",children:p.prechat.description}),S&&h("div",{class:"bp-prechat__field",children:[h("label",{class:"bp-prechat__label",children:p.prechat.name}),h("input",{class:"bp-prechat__input",type:"text",value:u,onInput:T=>g(T.target.value),placeholder:p.prechat.namePlaceholder,required:!0})]}),C&&h("div",{class:"bp-prechat__field",children:[h("label",{class:"bp-prechat__label",children:p.prechat.email}),h("input",{class:"bp-prechat__input",type:"email",value:m,onInput:T=>_(T.target.value),placeholder:p.prechat.emailPlaceholder,required:!0})]}),h("button",{class:"bp-prechat__submit",type:"submit",disabled:!I||l,children:l?p.prechat.loading:p.prechat.start}),R&&h("div",{class:"bp-prechat__privacy",children:[p.prechat.privacyPrefix," ",h("a",{href:R,target:"_blank",rel:"noopener noreferrer",children:p.prechat.privacyLink})]})]})}function Yi({active:o,onChange:s,unreadCount:l,showHelp:p,t:u}){let m=[{id:"home",label:u.tabs.home,Icon:ko,visible:!0},{id:"msgs",label:u.tabs.messages,Icon:So,visible:!0},{id:"help",label:u.tabs.help,Icon:Mo,visible:p}].filter(_=>_.visible);return h("div",{class:"bp-wtabs",style:{gridTemplateColumns:`repeat(${m.length}, 1fr)`},children:m.map(({id:_,label:S,Icon:C})=>h("button",{class:`bp-wtabs__btn ${o===_?"is-active":""}`,onClick:()=>s(_),children:[h(C,{}),S,_==="msgs"&&l>0&&h("span",{class:"bp-wtabs__count",children:l})]},_))})}function qn({initials:o,imageUrl:s,variantSeed:l,online:p,size:u="md",class:g=""}){let m=`bp-av-${Vh(l||o)}`,_=u==="sm"?{width:24,height:24,fontSize:10}:u==="lg"?{width:44,height:44,fontSize:14}:void 0;return h("div",{class:`bp-avatar ${m} ${g}`.trim(),style:_,children:[s?h("img",{src:s,alt:o}):o,p&&h("span",{class:"bp-avatar__online"})]})}function Vh(o){let s=0;for(let l=0;l<o.length;l++)s=s*31+o.charCodeAt(l)|0;return Math.abs(s)%6+1}function $o({visitorName:o,administrators:s,responseTimeSeconds:l,onClose:p,search:u,t:g}){let m=o?Xe(g.home.helloName,{name:o}):g.home.helloFallback,_=s.length>0,C=s.filter(R=>R.isOnline).length>0?g.home.teamOnline:g.home.teamOffline;return h("div",{class:"bp-wh bp-wh--gradient",children:[h("button",{class:"bp-wh__close",onClick:p,"aria-label":"Close",children:h(Be,{})}),h("div",{class:"bp-wh__hero",children:[h("h1",{class:"bp-wh__hello",children:[m,h("span",{children:" \u{1F44B}"}),h("br",{}),h("b",{children:g.home.howCanWeHelp})]}),_&&h("div",{class:"bp-wh__crew",children:[h("div",{class:"bp-wh__avs",children:s.slice(0,3).map(R=>h(qn,{initials:Lh(R.firstName,R.lastName),imageUrl:R.avatarUrl,variantSeed:R.id,online:R.isOnline},R.id))}),h("div",{class:"bp-wh__crew-meta",children:[h("b",{children:C}),Nh(l,g)]})]})]}),u&&h("div",{class:"bp-wh__search",children:[h(Bn,{}),h("input",{type:"text",value:u.value,onInput:R=>u.onInput(R.target.value),placeholder:u.placeholder})]})]})}function Lh(o,s){return`${(o||"").charAt(0)}${(s||"").charAt(0)}`.toUpperCase()||"?"}function Nh(o,s){if(o===null||o<=0)return s.home.typicallyReplies;let l=Math.max(1,Math.round(o/60));return l<=1?s.home.responseInUnderMin:l>=60?s.home.responseInUnderHour:Xe(s.home.responseInUnderMins,{mins:l})}function Dn({onBack:o,onClose:s,children:l}){return h("div",{class:"bp-wh-nav",children:[h("button",{class:"bp-wh-nav__back",onClick:o,"aria-label":"Back",children:h(Ao,{})}),h("span",{class:"bp-wh-nav__title",children:l}),s&&h("button",{class:"bp-wh-nav__close",onClick:s,"aria-label":"Close",children:h(Be,{})})]})}function Qi({title:o,subtitle:s,onClose:l}){return h("div",{class:"bp-wh bp-wh--solid",children:[h("button",{class:"bp-wh__close",onClick:l,"aria-label":"Close",children:h(Be,{})}),h("h1",{class:"bp-wh__title",children:o}),s&&h("p",{class:"bp-wh__sub",children:s})]})}function Ko({apiClient:o,slug:s,knowledgeBase:l,t:p}){let[u,g]=H(null),[m,_]=H(!0),[S,C]=H(null);le(()=>{let T=!1;return _(!0),C(null),o.getArticle(s).then(N=>{T||g(N)}).catch(()=>{T||g(null)}).finally(()=>{T||_(!1)}),()=>{T=!0}},[s,o]);let R=async T=>{if(u){C(T?"helpful":"not_helpful");try{await o.rateArticle(u.slug,T)}catch{}}};if(m)return h("div",{class:"bp-loading",children:h("div",{class:"bp-spinner"})});if(!u)return h("div",{class:"bp-wempty",children:h("h4",{children:p.help.noResults})});let y=u.mins<=1?p.article.minRead:Xe(p.article.minsRead,{mins:u.mins}),I=l?.kbSubdomain?`https://${l.kbSubdomain}/articles/${u.slug}`:null;return h("div",{class:"bp-warticle-view",children:[h("div",{class:"bp-warticle-view__meta",children:h("span",{children:y})}),h("h1",{children:u.title}),u.summary&&h("p",{class:"bp-warticle-view__summary",children:u.summary}),h("div",{class:"bp-warticle-view__body",dangerouslySetInnerHTML:{__html:u.content}}),I&&h("p",{children:h("a",{href:I,target:"_blank",rel:"noopener noreferrer",children:[h(To,{})," ",l?.name]})}),h("div",{class:"bp-warticle-view__feedback",children:S?h("p",{class:"bp-warticle-view__feedback-q",children:p.article.feedbackThanks}):h(be,{children:[h("p",{class:"bp-warticle-view__feedback-q",children:p.article.feedbackQuestion}),h("div",{class:"bp-warticle-view__feedback-btns",children:[h("button",{class:"bp-warticle-view__feedback-btn",onClick:()=>R(!0),children:[h(Oo,{})," ",p.article.feedbackYes]}),h("button",{class:"bp-warticle-view__feedback-btn",onClick:()=>R(!1),children:[h(Io,{})," ",p.article.feedbackNo]})]})]})})]})}function Zt({article:o,onClick:s,t:l}){let p=o.mins<=1?l.article.minRead:Xe(l.article.minsRead,{mins:o.mins});return h("button",{class:"bp-warticle",onClick:s,children:[h("div",{class:"bp-warticle__icon",children:h(Ro,{})}),h("div",{class:"bp-warticle__body",children:[h("div",{class:"bp-warticle__title",children:o.title}),o.summary&&h("div",{class:"bp-warticle__sub",children:o.summary}),h("div",{class:"bp-warticle__meta",children:h("span",{children:p})})]}),h("span",{class:"bp-warticle__chev",children:h(Un,{})})]})}function Jo({value:o,onInput:s,placeholder:l,variant:p="card"}){return h("div",{class:`bp-wsearch ${p==="inline"?"bp-wsearch--inline":""}`,children:[h(Bn,{}),h("input",{type:"text",value:o,onInput:u=>s(u.target.value),placeholder:l})]})}function en({title:o,action:s}){return h("div",{class:"bp-wsec",children:[h("span",{class:"bp-wsec__title",children:o}),s&&h("button",{class:"bp-wsec__more",onClick:s.onClick,children:s.label})]})}function Yo({apiClient:o,onOpenArticle:s,t:l}){let[p,u]=H(""),[g,m]=H([]),[_,S]=H(!0);le(()=>{let R=!1;S(!0);let y=setTimeout(async()=>{try{let I=await o.searchArticles(p||void 0,20);R||m(I)}catch{R||m([])}finally{R||S(!1)}},p?250:0);return()=>{R=!0,clearTimeout(y)}},[p,o]);let C=p.trim().length===0;return h("div",{class:"bp-wb bp-wb--white",children:[h(Jo,{value:p,onInput:u,placeholder:l.help.searchPlaceholder,variant:"inline"}),C&&g.length>0&&h(en,{title:l.help.popular}),_?h("div",{class:"bp-loading",children:h("div",{class:"bp-spinner"})}):g.length===0?h("div",{class:"bp-wempty",children:h("h4",{children:C?l.help.noArticles:l.help.noResults})}):g.map(R=>h(Zt,{article:R,onClick:()=>s(R.slug),t:l},R.id))]})}function Hn({name:o,preview:s,time:l,unread:p,status:u,avatarSeed:g,avatarInitials:m,onClick:_,t:S}){return h("button",{class:"bp-wconv",onClick:_,children:[h("div",{class:"bp-wconv__avs",children:h(qn,{initials:m,variantSeed:g})}),h("div",{class:"bp-wconv__body",children:[h("div",{class:"bp-wconv__head",children:[h("span",{class:"bp-wconv__name",children:o}),h("span",{class:"bp-wconv__time",children:l})]}),h("div",{class:"bp-wconv__last",children:s}),u&&h("span",{class:`bp-wconv__status bp-wconv__status--${u}`,children:[h("span",{class:"bp-dot"}),u==="open"?S.messages.statusOpen:S.messages.statusClosed]})]}),h("span",{class:"bp-wconv__chev",children:h(Un,{})}),p>0&&h("div",{class:"bp-wconv__pin",children:p})]})}function Qo({channelInfo:o,openConversations:s,onStartConversation:l,onOpenConversation:p,onOpenArticle:u,onGoToHelp:g,apiClient:m,search:_,t:S}){let C=o.recommendedArticles||[],R=Bh(o.responseTime?.seconds??null,S),y=_.trim(),I=y.length>0,[T,N]=H([]),[U,E]=H(!1);return le(()=>{if(!I){N([]),E(!1);return}let P=!1;E(!0);let G=setTimeout(async()=>{try{let X=await m.searchArticles(y,10);P||N(X)}catch{P||N([])}finally{P||E(!1)}},250);return()=>{P=!0,clearTimeout(G)}},[y,I,m]),I?h("div",{class:"bp-wb",children:U&&T.length===0?h("div",{class:"bp-loading",style:{padding:32},children:h("div",{class:"bp-spinner"})}):T.length===0?h("div",{class:"bp-wempty",children:h("h4",{children:S.help.noResults})}):h(be,{children:[T.map(P=>h(Zt,{article:P,onClick:()=>u(P.slug),t:S},P.id)),h("div",{style:{padding:"12px 16px"},children:h("button",{class:"bp-wsec__more",style:{display:"block",textAlign:"center",width:"100%"},onClick:g,children:S.home.seeAll})})]})}):h("div",{class:"bp-wb",children:[h("button",{class:"bp-wstart",onClick:l,children:[h("div",{children:[h("div",{children:S.home.startConversation}),R&&h("span",{class:"bp-wstart__sub",children:R})]}),h(Mt,{})]}),s.length>0&&h(be,{children:[h(en,{title:S.home.continueWhereLeftOff}),s.map(P=>h(Hn,{id:P.id,name:Uh(P),preview:qh(P),time:Dh(P),unread:0,status:P.open?"open":"closed",avatarSeed:P.id,avatarInitials:Hh(P),onClick:()=>p(P.id),t:S},P.id))]}),C.length>0&&h(be,{children:[h(en,{title:S.home.recommendedArticles,action:{label:S.home.seeAll,onClick:g}}),C.slice(0,3).map(P=>h(Zt,{article:P,onClick:()=>u(P.slug),t:S},P.id))]})]})}function Bh(o,s){if(o===null||o<=0)return null;let l=Math.max(1,Math.round(o/60));return l<=1?s.home.responseInUnderMin:l>=60?s.home.responseInUnderHour:s.home.responseInUnderMins.replace("{{mins}}",String(l))}function Uh(o){return o.lastMessage?.user?`${o.lastMessage.user.firstName} ${o.lastMessage.user.lastName}`:"Conversa"}function qh(o){return o.lastMessage?.content||""}function Dh(o){return o.updatedAt?Gh(new Date(o.updatedAt)):""}function Hh(o){let s=o.lastMessage?.user;return s?`${(s.firstName||"").charAt(0)}${(s.lastName||"").charAt(0)}`.toUpperCase()||"?":"C"}function Gh(o){let s=Math.round((Date.now()-o.getTime())/1e3);if(s<60)return"agora";let l=Math.round(s/60);if(l<60)return`${l}m`;let p=Math.round(l/60);return p<24?`${p}h`:`${Math.round(p/24)}d`}function Zo({conversations:o,onOpen:s,onNew:l,t:p}){let u=o.filter(m=>m.open),g=o.filter(m=>!m.open);return o.length===0?h("div",{class:"bp-wb",children:h("div",{class:"bp-wempty",children:[h("h4",{children:p.messages.empty}),h("button",{class:"bp-wstart",onClick:l,style:{width:"auto",display:"inline-flex",marginTop:16},children:p.home.startConversation})]})}):h("div",{class:"bp-wb",children:[h("div",{class:"bp-wgrouph",children:[p.messages.inProgress,h("button",{class:"bp-wgrouph__action",onClick:l,children:p.messages.new})]}),u.length===0?h("div",{class:"bp-wempty",style:{padding:"8px 20px 16px",textAlign:"left"},children:h("p",{children:p.messages.empty})}):u.map(m=>h(Xo,{c:m,onClick:()=>s(m.id),t:p},m.id)),g.length>0&&h(be,{children:[h("div",{class:"bp-wgrouph",children:Xe(p.messages.subtitleCounts,{open:u.length,closed:g.length}).split("\xB7")[1]?.trim()||`${g.length} ${p.messages.completed}`}),g.map(m=>h(Xo,{c:m,onClick:()=>s(m.id),t:p},m.id))]})]})}function Xo({c:o,onClick:s,t:l}){let p=o.lastMessage?.user,u=p?`${(p.firstName||"").charAt(0)}${(p.lastName||"").charAt(0)}`.toUpperCase():"C",g=p?`${p.firstName} ${p.lastName}`:"Conversa",m=o.lastMessage?.content||l.conversations.noMessages,_=o.updatedAt?jh(new Date(o.updatedAt)):"";return h(Hn,{id:o.id,name:g,preview:m,time:_,unread:0,status:o.open?"open":"closed",avatarSeed:o.id,avatarInitials:u||"?",onClick:s,t:l})}function jh(o){let s=Math.round((Date.now()-o.getTime())/1e3);if(s<60)return"agora";let l=Math.round(s/60);if(l<60)return`${l}m`;let p=Math.round(l/60);return p<24?`${p}h`:`${Math.round(p/24)}d`}function ea({channelInfo:o,apiClient:s,realtimeClient:l,storage:p,events:u,visitor:g,isAuthenticated:m,position:_,onClose:S,t:C,initialConversationId:R,isInContainer:y}){let[I,T]=H("home"),[N,U]=H(null),[E,P]=H(""),[G,X]=H([]),[w,ee]=H(null),[J,z]=H([]),[re,D]=H(null),[Y,c]=H(""),[ie,ve]=H(!0),[A,pe]=H(!1),[Ue,q]=H(null),[Pe,Ge]=H(null),[Q,fe]=H(!1),Z=o.config.allowViewHistory&&m,Re=!!o.knowledgeBase,ye=xe(async()=>{}),Tt=he(()=>g?.name&&g?.email?!1:o.config.requireName||o.config.requireEmail,[o,g]),Te=he(B=>{l.subscribe(B,{onMessage:$=>{z(se=>se.some(ae=>ae.id===$.id)?se.map(ae=>ae.id===$.id?{...ae,...$}:ae):[...se.filter(ae=>!String(ae.id).startsWith("temp-")||ae.content!==$.content),$]),u.emit("message:received",$)},onConversationStatusUpdate:$=>{ee(se=>se&&{...se,open:$.open}),$.open||(m||(X([]),p.clearConversationId()),u.emit("conversation:closed",$))}})},[l,u,m,p]),Fe=he(async B=>{ve(!0);try{let[$,se]=await Promise.all([s.getConversation(B),s.getMessages(B,{limit:50})]);ee($),m||X($.open?[$]:[]),z(Array.isArray(se)?se.reverse():[]),U("chat"),u.emit("conversation:viewing",B),$.open?(p.setConversationId(B),Te(B)):m?p.setConversationId(B):p.clearConversationId()}catch($){console.error("[BaseportalChat] Error opening conversation:",$)}finally{ve(!1)}},[s,p,Te,u,m]),tt=he(async()=>{ve(!0);try{let B=await s.initConversation({name:g?.name,email:g?.email});ee(B),m||X([B]),z(B.messages||[]),U("chat"),u.emit("conversation:viewing",B.id),p.setConversationId(B.id),Te(B.id),u.emit("conversation:started",B)}catch(B){console.error("[BaseportalChat] Error starting conversation:",B)}finally{ve(!1)}},[s,g,p,Te,u,m]);ye.current=tt;let pt=he(()=>{Tt()?U("prechat"):tt()},[Tt,tt]),Ot=he(async()=>{if(Z)try{let B=await s.getVisitorConversations();X(B)}catch{}},[Z,s]);le(()=>{let B=!1;return(async()=>{ve(!0);try{if(Z){let Ie=await s.getVisitorConversations();if(B)return;if(X(Ie),R){let ae=Ie.find(ge=>ge.id===R);if(ae){await Fe(ae.id);return}}}let se=R||p.getConversationId();if(se&&!Z)try{await Fe(se);return}catch{p.clear()}}catch(se){console.error("[BaseportalChat] Error initializing:",se)}finally{B||ve(!1)}})(),()=>{B=!0,l.unsubscribe(),u.emit("conversation:viewing",null)}},[]);let nn=he(B=>{D(B),U("article")},[]),st=he(()=>{U(null),N==="chat"&&(l.unsubscribe(),z([]),ee(null),u.emit("conversation:viewing",null),Ot())},[N,l,Ot,u]),rn=he(async B=>{p.setVisitor({...g,...B});let $=await s.initConversation(B);ee($),m||X([$]),z($.messages||[]),U("chat"),u.emit("conversation:viewing",$.id),p.setConversationId($.id),Te($.id),u.emit("conversation:started",$)},[s,g,p,Te,u,m]),sn=he(async B=>{if(!w)return;let $=25*1024*1024;if(B.size>$){Ne("File too large");return}let se=B.type.startsWith("image/")?URL.createObjectURL(B):void 0;q({file:B,preview:se}),fe(!0);try{let Ie=await s.uploadFile(w.id,B);Ge(Ie.id)}catch(Ie){console.error("[BaseportalChat] Error uploading file:",Ie),q(null),se&&URL.revokeObjectURL(se)}finally{fe(!1)}},[s,w]),zn=he(()=>{Ue?.preview&&URL.revokeObjectURL(Ue.preview),q(null),Ge(null)},[Ue]),on=he(async(B,$)=>{if(!w)return;let se=B.type.includes("mp4")?"m4a":"webm",Ie=new File([B],`audio-${Date.now()}.${se}`,{type:B.type||"audio/webm"});try{let ae=await s.uploadFile(w.id,Ie),ge=await s.sendMessage(w.id,{mediaId:ae.id});u.emit("message:sent",ge)}catch(ae){throw console.error("[BaseportalChat] Error sending audio:",ae),ae}},[s,w,u]),It=he(async()=>{let B=Y.trim();if(!B&&!Pe||!w||A)return;let $=`temp-${Date.now()}`,se={id:$,content:B,role:"client",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()},Ie=Pe||void 0;c(""),q(null),Ge(null),pe(!0),z(ae=>[...ae,se]);try{let ae=await s.sendMessage(w.id,{content:B||void 0,mediaId:Ie});z(ge=>ge.map(de=>de.id===$?ae:de)),u.emit("message:sent",ae)}catch(ae){console.error("[BaseportalChat] Error sending message:",ae),z(de=>de.filter(qe=>qe.id!==$));let ge=ae instanceof Error?ae.message:"";ge.includes("Row not found")||ge.includes("404")?(l.unsubscribe(),ee(de=>de&&{...de,open:!1}),m||(X([]),p.clearConversationId())):c(B)}finally{pe(!1)}},[Y,Pe,w,A,s,u,l,m,p]),ot=he(async()=>{if(w)try{let B=await s.reopenConversation(w.id);ee($=>$&&{...$,open:B.open??!0})}catch(B){console.error("[BaseportalChat] Error reopening conversation:",B)}},[w,s]),Pt=G.filter(B=>B.open).slice().sort((B,$)=>{let se=B.updatedAt?new Date(B.updatedAt).getTime():0;return($.updatedAt?new Date($.updatedAt).getTime():0)-se}),at=G.reduce((B,$)=>B+($.unreadMessagesCount||0),0),te=y?"bp-window--in-container":_==="bottom-left"?"bp-window--left":"bp-window--right";if(N==="prechat")return h("div",{class:`bp-window ${te}`,children:[h(Dn,{onBack:()=>U(null),onClose:S,children:C.prechat.title}),h(zo,{channelInfo:o,onSubmit:rn,loading:ie,t:C})]});if(N==="chat"){let B=w?.lastMessage?.user?`${w.lastMessage.user.firstName} ${w.lastMessage.user.lastName}`:o.name,$=w?.open!==!1;return h("div",{class:`bp-window ${te}`,children:[h(Dn,{onBack:st,onClose:S,children:B}),h(Wo,{messages:J,loading:ie,t:C}),$?h(Bo,{value:Y,onChange:c,onSend:It,onFileSelect:sn,onFileRemove:zn,onSendAudio:on,attachedFile:Ue,uploading:Q,disabled:A||ie,placeholder:C.chat.placeholder,t:C}):h("div",{class:"bp-closed-banner",children:[h("span",{class:"bp-closed-banner__text",children:C.chat.closed}),o.config.allowReopenConversation?h("button",{class:"bp-closed-banner__reopen",onClick:ot,children:C.chat.reopen}):h("button",{class:"bp-closed-banner__reopen",onClick:pt,children:C.chat.newConversation})]}),o.config.privacyPolicyUrl&&h("div",{class:"bp-privacy-footer",children:h("a",{href:o.config.privacyPolicyUrl,target:"_blank",rel:"noopener noreferrer",children:C.prechat.privacyLink})})]})}return N==="article"&&re?h("div",{class:`bp-window ${te}`,children:[h(Dn,{onBack:()=>U(null),onClose:S,children:C.article.backToHelp}),h(Ko,{apiClient:s,slug:re,knowledgeBase:o.knowledgeBase||null,t:C}),h(Yi,{active:"help",onChange:B=>{U(null),T(B)},unreadCount:at,showHelp:Re,t:C})]}):h("div",{class:`bp-window ${te}`,children:[I==="home"&&h(be,{children:[h($o,{channelName:o.name,visitorName:g?.name,administrators:o.administrators||[],responseTimeSeconds:o.responseTime?.seconds??null,onClose:S,search:Re?{value:E,onInput:P,placeholder:C.home.searchHelpPlaceholder}:void 0,t:C}),h(Qo,{channelInfo:o,visitorName:g?.name,openConversations:Pt,onStartConversation:pt,onOpenConversation:Fe,onOpenArticle:nn,onGoToHelp:()=>T("help"),apiClient:s,search:E,onSearchChange:P,t:C})]}),I==="msgs"&&h(be,{children:[h(Qi,{title:C.messages.title,onClose:S}),h(Zo,{conversations:G,onOpen:Fe,onNew:pt,t:C})]}),I==="help"&&h(be,{children:[h(Qi,{title:C.help.title,subtitle:C.help.subtitle,onClose:S}),h(Yo,{apiClient:s,onOpenArticle:nn,t:C})]}),h(Yi,{active:I,onChange:T,unreadCount:at,showHelp:Re,t:C})]})}function ta(o){return{id:o.messageId,conversationId:o.conversationId,preview:o.preview,previewImageUrl:o.previewImageUrl,fromName:o.from.name,fromAvatarUrl:o.from.avatarUrl,receivedAt:Date.now()}}var Fh=3;function na({previews:o,onOpen:s,onDismiss:l,position:p="bottom-right"}){if(o.length===0)return null;let u=o.slice(-Fh);return h("div",{class:`bp-floating-preview-layer bp-floating-preview-layer--${p}`,children:u.map(g=>h(Wh,{preview:g,onOpen:()=>s(g),onDismiss:()=>l(g.id)},g.id))})}function Wh({preview:o,onOpen:s,onDismiss:l}){let[p,u]=H(!1),g=(o.fromName?.[0]||"A").toUpperCase();return h("div",{class:`bp-floating-preview ${p?"bp-floating-preview--pressed":""}`,role:"alert","aria-live":"polite",children:[h("button",{type:"button",class:"bp-floating-preview__body",onMouseDown:()=>u(!0),onMouseUp:()=>u(!1),onMouseLeave:()=>u(!1),onClick:s,children:[h("div",{class:"bp-floating-preview__avatar",children:o.fromAvatarUrl?h("img",{src:o.fromAvatarUrl,alt:""}):g}),h("div",{class:"bp-floating-preview__text",children:[o.fromName&&h("div",{class:"bp-floating-preview__name",children:o.fromName}),h("div",{class:"bp-floating-preview__snippet",children:o.preview})]}),o.previewImageUrl&&h("img",{class:"bp-floating-preview__thumb",src:o.previewImageUrl,alt:"",loading:"lazy"})]}),h("button",{type:"button",class:"bp-floating-preview__close",onClick:m=>{m.stopPropagation(),l()},"aria-label":"Fechar",children:h(Be,{})})]})}var zh=new Set(["p","div","span","h1","h2","h3","h4","h5","h6","strong","b","em","i","u","s","br","hr","ul","ol","li","blockquote","a","img","button","figure","figcaption"]),$h=new Set(["script","style","iframe","object","embed","svg","math","foreignobject","use","link","meta","base","form","input","textarea","select","option","noscript","template","noembed","frame","frameset","image","animate","set"]),Kh={a:new Set(["href","target","style","data-link-type","data-link-href","data-link-target"]),img:new Set(["src","alt","title","width","height","style","data-link-type","data-link-href","data-link-target"]),button:new Set(["data-action","data-href","style"]),span:new Set(["style","data-link-type","data-link-href","data-link-target"]),div:new Set(["style","data-section","data-bg","data-link-type","data-link-href","data-link-target"]),p:new Set(["style","data-link-type","data-link-href","data-link-target"]),h1:new Set(["style","data-link-type","data-link-href","data-link-target"]),h2:new Set(["style","data-link-type","data-link-href","data-link-target"]),h3:new Set(["style","data-link-type","data-link-href","data-link-target"]),h4:new Set(["style","data-link-type","data-link-href","data-link-target"]),h5:new Set(["style","data-link-type","data-link-href","data-link-target"]),h6:new Set(["style","data-link-type","data-link-href","data-link-target"]),blockquote:new Set(["style"]),ul:new Set(["style"]),ol:new Set(["style"]),li:new Set(["style"]),figure:new Set(["style","data-link-type","data-link-href","data-link-target"]),figcaption:new Set(["style"])},Jh=new Set(["url","chat","tel","mailto"]),Yh=new Set(["color","background-color","font-size","font-weight","font-style","font-family","text-align","text-decoration","line-height","letter-spacing","padding","padding-top","padding-right","padding-bottom","padding-left","margin","margin-top","margin-right","margin-bottom","margin-left","border","border-radius","border-color","border-width","border-style","width","max-width","min-width","height","max-height","min-height","display","gap","flex"]);function Zi(o){let s=o.trim();return!s||s.startsWith("//")?null:/^(https?:|mailto:|tel:|\/|#)/i.test(s)?s:null}function Qh(o){let s=[];for(let l of o.split(";")){let p=l.indexOf(":");if(p<0)continue;let u=l.slice(0,p).trim().toLowerCase(),g=l.slice(p+1).trim();Yh.has(u)&&(/url\s*\(/i.test(g)||/expression\s*\(/i.test(g)||/javascript:/i.test(g)||/\\/.test(g)||s.push(`${u}: ${g}`))}return s.join("; ")}function Xi(o,s){if(o.nodeType===3)return s.createTextNode(o.textContent||"");if(o.nodeType!==1)return null;let l=o,p=l.tagName.toLowerCase();if($h.has(p))return null;if(!zh.has(p)){let m=s.createDocumentFragment();for(let _ of Array.from(l.childNodes)){let S=Xi(_,s);S&&m.appendChild(S)}return m}let u=s.createElement(p),g=Kh[p]??new Set;for(let m of Array.from(l.attributes)){let _=m.name.toLowerCase();if(_.startsWith("on")||!g.has(_))continue;let S=m.value;if(_==="href"||_==="src"||_==="data-href"||_==="data-link-href"){let R=!/[:/]/.test(S)?S:Zi(S);if(!R)continue;u.setAttribute(_,R)}else if(_==="style"){let C=Qh(S);C&&u.setAttribute("style",C)}else if(_==="target"||_==="data-link-target"){let C=S==="_self"?"_self":"_blank";u.setAttribute(_,C),_==="target"&&C==="_blank"&&u.setAttribute("rel","noopener noreferrer")}else _==="data-link-type"?Jh.has(S)&&u.setAttribute(_,S):u.setAttribute(_,S)}p==="a"&&u.getAttribute("target")==="_blank"&&!u.hasAttribute("rel")&&u.setAttribute("rel","noopener noreferrer"),u.hasAttribute("data-link-target")&&!u.hasAttribute("data-link-href")&&u.removeAttribute("data-link-target");for(let m of Array.from(l.childNodes)){let _=Xi(m,s);_&&u.appendChild(_)}return u}function ia(o){if(!o||typeof DOMParser>"u")return"";let s=new DOMParser().parseFromString(`<div id="root">${o}</div>`,"text/html"),l=s.getElementById("root");if(!l)return"";let p=s.createElement("div");for(let u of Array.from(l.childNodes)){let g=Xi(u,s);g&&p.appendChild(g)}return p.innerHTML}var ra=768;function Xh(o){let s=o.trim();return!s||s.startsWith("//")||!/^https?:\/\//i.test(s)||/["\\\n\r]/.test(s)||s.length>4096?null:s}var Gn={small:{width:"400px",desktopHeight:"min(60vh, 270px)",mobileHeight:"min(70vh, 480px)"},medium:{width:"600px",desktopHeight:"min(70vh, 400px)",mobileHeight:"min(75vh, 600px)"},large:{width:"800px",desktopHeight:"min(80vh, 540px)",mobileHeight:"min(85vh, 700px)"}};function Zh(o){let s=o??(typeof window<"u"&&window.innerWidth<ra?"mobile":"desktop"),[l,p]=H(s);return le(()=>{if(o){p(o);return}if(typeof window>"u")return;let u=window.matchMedia(`(max-width: ${ra-1}px)`),g=m=>p(m.matches?"mobile":"desktop");return g({matches:u.matches}),u.addEventListener("change",g),()=>u.removeEventListener("change",g)},[o]),l}function sa({modal:o,onDismiss:s,onOptOut:l,onOpenChat:p,previewMode:u,forceVariant:g}){let m=Zh(g),_=ht(()=>{let ie=m==="mobile"&&o.mobileContent?o.mobileContent:o.content||"",ve=ia(ie);return ie.trim().length>0&&ve.trim().length===0&&console.warn("[BaseportalChat] modal content was empty after sanitization \u2014 check for unsupported tags",{modalId:o.id,rawLength:ie.length}),ve},[o.content,o.mobileContent,o.id,m]);le(()=>{if(u)return;let ie=ve=>{ve.key==="Escape"&&s()};return document.addEventListener("keydown",ie),()=>document.removeEventListener("keydown",ie)},[u,s]);let S=ht(()=>{if(o.size==="custom"&&(o.customWidth||o.customMaxHeight))return{width:o.customWidth??"600px",height:o.customMaxHeight??(m==="mobile"?Gn.medium.mobileHeight:Gn.medium.desktopHeight)};let ie=Gn[o.size]??Gn.medium;return{width:ie.width,height:m==="mobile"?ie.mobileHeight:ie.desktopHeight}},[o.size,o.customWidth,o.customMaxHeight,m]),C=m==="mobile"?`min(${S.width}, calc(100vw - 32px))`:S.width,R=u?{position:"relative",width:C,height:S.height,margin:"0 auto"}:{position:"fixed",inset:"0",zIndex:"2147483646",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.55)"},y=o.frameConfig??{},I=y.backgroundColor??"#ffffff",T=typeof y.borderRadius=="number"?`${y.borderRadius}px`:"16px",N=y.borderColor&&typeof y.borderWidth=="number"&&y.borderWidth>0?`${y.borderWidth}px solid ${y.borderColor}`:"none",U=typeof y.padding=="number"?`${y.padding}px`:"24px",E=m==="mobile"&&y.mobileBackgroundImageUrl?y.mobileBackgroundImageUrl:y.backgroundImageUrl,P=E?Xh(E):null,G=P?`url("${P}")`:"none",X={position:"relative",width:C,height:S.height,maxHeight:"calc(100vh - 32px)",background:I,backgroundImage:G,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",borderRadius:T,border:N,boxShadow:"0 24px 48px rgba(0, 0, 0, 0.25)",overflow:"hidden",display:"flex",flexDirection:"column",fontFamily:'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'},w={flex:"1",minHeight:"0",overflow:"auto",padding:U},ee={color:"#94a3b8",fontSize:"13px",textAlign:"center",padding:"16px"},J={position:"absolute",top:"12px",right:"12px",width:"32px",height:"32px",borderRadius:"999px",background:"#f1f5f9",color:"#0f172a",border:"none",cursor:"pointer",fontSize:"18px",lineHeight:"1",display:"flex",alignItems:"center",justifyContent:"center",zIndex:"2"},z=!u&&!!l&&o.displayMode==="until_dismissed",re={display:"inline-block",marginTop:"12px",padding:"4px 8px",background:"transparent",color:"#64748b",border:"none",cursor:"pointer",textDecoration:"underline",fontSize:"12px"},D=ie=>{u||ie.target===ie.currentTarget&&s()},Y=ie=>{if(u)return;let A=ie.target?.closest("[data-link-type], [data-link-href]");if(!A)return;let pe=A.getAttribute("data-link-type");if(pe==="chat"){ie.preventDefault(),p?.(),s();return}let Ue=A.getAttribute("data-link-href");if(!Ue)return;ie.preventDefault();let q=A.getAttribute("data-link-target")==="_blank"?"_blank":"_self",Pe=pe==="tel"?`tel:${Ue}`:pe==="mailto"?`mailto:${Ue}`:Ue,Ge=Zi(Pe);Ge&&(q==="_blank"?window.open(Ge,"_blank","noopener,noreferrer"):window.location.href=Ge)},c=_.trim().length>0;return h("div",{style:R,onClick:D,role:"dialog","aria-modal":"true",children:h("div",{style:X,children:[h("button",{type:"button",onClick:s,"aria-label":"Close",style:J,children:"\xD7"}),h("div",{style:w,children:[h("style",{children:"[data-link-type]{cursor:pointer}"}),c?h("div",{dangerouslySetInnerHTML:{__html:_},onClick:Y,style:{color:"#0f172a",fontSize:"15px",lineHeight:"1.6"}}):!G||G==="none"?h("div",{style:ee,children:"Conte\xFAdo indispon\xEDvel"}):null,z&&h("div",{style:{textAlign:"center"},children:h("button",{type:"button",onClick:l,style:re,children:"N\xE3o ver mais"})})]})]})})}function aa(o){if(!o)return"/";let s=o.split("?")[0].split("#")[0];return s==="/"?"/":s.endsWith("/")?s.slice(0,-1):s}function ed(o){let s=aa(o);if(s==="*")return/^.*$/;let p=s.replace(/[.+?^${}()|[\]\\]/g,"\\$&").replace(/\\\*/g,"*");return p.endsWith("/*")&&(p=p.slice(0,-2)+"(?:/.*)?"),p=p.replace(/\*/g,"[^/]+"),new RegExp(`^${p}$`)}function oa(o,s){if(!s||s.length===0)return!1;let l=aa(o);for(let p of s)try{if(ed(p).test(l))return!0}catch{continue}return!1}function ca(o,s,l){return oa(o,l)?!1:!s||s.length===0?!0:oa(o,s)}var td=1440*60*1e3,er=20*1e3,jn=class{constructor(s){this.queue=[];this.currentDeliveryId=null;this.originalPushState=null;this.originalReplaceState=null;this.popstateHandler=null;this.connected=!1;this.lastShownAt=0;this.cooldownTimer=null;this.handlers=s}connect(){if(this.connected||typeof window>"u")return;this.connected=!0,this.originalPushState=history.pushState,this.originalReplaceState=history.replaceState;let s=()=>this.evaluate();this.popstateHandler=s,history.pushState=(...l)=>{this.originalPushState.apply(history,l),s()},history.replaceState=(...l)=>{this.originalReplaceState.apply(history,l),s()},window.addEventListener("popstate",s)}disconnect(){this.connected&&(typeof window>"u"||(this.originalPushState&&(history.pushState=this.originalPushState),this.originalReplaceState&&(history.replaceState=this.originalReplaceState),this.popstateHandler&&window.removeEventListener("popstate",this.popstateHandler),this.clearCooldownTimer(),this.connected=!1,this.queue=[],this.currentDeliveryId=null,this.lastShownAt=0))}enqueue(s){this.queue.some(l=>l.deliveryId===s.deliveryId)||this.currentDeliveryId!==s.deliveryId&&(this.queue.push({deliveryId:s.deliveryId,modalId:s.modalId,sourceType:s.sourceType,automationId:s.automationId,campaignId:s.campaignId,modal:s.modal,queuedAt:Date.now()}),this.evaluate())}markShown(s){this.currentDeliveryId===s&&(this.currentDeliveryId=null,this.scheduleCooldownEval())}markDismissed(s){this.markShown(s)}currentPath(){return typeof window>"u"?"/":window.location.pathname||"/"}evaluate(){if(this.currentDeliveryId||typeof window>"u")return;let s=this.currentPath();this.handlers.onActivePath(s);let l=Date.now();if(this.queue=this.queue.filter(u=>l-u.queuedAt<td),this.lastShownAt>0){let u=l-this.lastShownAt;if(u<er){this.scheduleCooldownEval(er-u);return}}let p=this.queue.find(u=>ca(s,u.modal.includePaths,u.modal.excludePaths));p&&(this.queue=this.queue.filter(u=>u.deliveryId!==p.deliveryId),this.currentDeliveryId=p.deliveryId,this.lastShownAt=Date.now(),this.clearCooldownTimer(),this.handlers.onShowModal(p))}scheduleCooldownEval(s=er){this.clearCooldownTimer(),this.cooldownTimer=setTimeout(()=>{this.cooldownTimer=null,this.evaluate()},Math.max(0,s))}clearCooldownTimer(){this.cooldownTimer&&(clearTimeout(this.cooldownTimer),this.cooldownTimer=null)}};var la=20;function ha({channelInfo:o,apiClient:s,realtimeClient:l,storage:p,events:u,visitor:g,isAuthenticated:m,position:_,hidden:S,t:C,isOpenRef:R,setIsOpen:y,notificationSound:I}){let[T,N]=H(R.current),[U,E]=H(S),[P,G]=H(0),[X,w]=H([]),[ee,J]=H(null),[z,re]=H(null),D=xe(null),Y=xe(null),c=xe(null),ie=xe(I);ie.current=I,le(()=>{let Q=()=>{N(!0),R.current=!0,y(!0)},fe=()=>{N(!1),R.current=!1,y(!1)},Z=()=>E(!1),Re=()=>{E(!0),N(!1),R.current=!1,y(!1)};return u.on("_open",Q),u.on("_close",fe),u.on("show",Z),u.on("hide",Re),()=>{u.off("_open",Q),u.off("_close",fe),u.off("show",Z),u.off("hide",Re)}},[u,R,y]),le(()=>{if(!I)return;let Q=fe=>{if(!fe||fe.role==="client")return;let Z=R.current&&typeof document<"u"&&document.hasFocus()&&document.visibilityState==="visible";Ji({isWidgetActive:Z})};return u.on("message:received",Q),()=>{u.off("message:received",Q)}},[u,R,I]),le(()=>{T?G(0):(c.current=null,J(null))},[T]),le(()=>{let Q=fe=>{c.current=fe};return u.on("conversation:viewing",Q),()=>{u.off("conversation:viewing",Q)}},[u]),le(()=>{let Q=new Vn(s);D.current=Q;let fe={onModalShow:ye=>{Y.current?.enqueue(ye)},onNotification:ye=>{if(R.current&&c.current===ye.conversationId||(G(Te=>Math.min(99,Te+1)),w(Te=>{if(Te.some(tt=>tt.id===ye.messageId))return Te;let Fe=[...Te,ta(ye)];return Fe.length>la?Fe.slice(-la):Fe})),ie.current){let Te=typeof document<"u"&&document.hasFocus()&&document.visibilityState==="visible";Ji({isWidgetActive:Te})}}};Q.connect(fe);let Z=async()=>{try{let ye=await s.getPendingNotifications();ye.count>0&&ye.latest&&fe.onNotification(ye.latest)}catch{}};Z();let Re=()=>{Q.connect(fe),Z()};return u.on("identify-success",Re),()=>{u.off("identify-success",Re),Q.disconnect(),D.current=null}},[s,u,R]),le(()=>{let Q=new jn({onShowModal:Re=>{re(Re),s.postModalEvent(Re.deliveryId,"shown")},onActivePath:()=>{}});Q.connect(),Y.current=Q;let fe=async()=>{try{let Re=await s.getPendingModals();for(let ye of Re.deliveries)Q.enqueue({text:"visitor_modal_show",deliveryId:ye.deliveryId,modalId:ye.modal.id,sourceType:ye.sourceType,automationId:ye.automationId,campaignId:ye.campaignId,modal:ye.modal})}catch{}};fe();let Z=()=>{fe()};return u.on("identify-success",Z),()=>{u.off("identify-success",Z),Q.disconnect(),Y.current=null}},[s,u]);let ve=he(()=>{z&&(s.postModalEvent(z.deliveryId,"dismissed"),Y.current?.markDismissed(z.deliveryId),re(null))},[z,s]),A=he(()=>{z&&(s.postModalEvent(z.deliveryId,"opt_out"),Y.current?.markDismissed(z.deliveryId),re(null))},[z,s]),pe=he(()=>{u.emit("_open"),u.emit("open")},[u]),Ue=()=>{let Q=!T;N(Q),R.current=Q,y(Q),u.emit(Q?"open":"close")},q=()=>{N(!1),R.current=!1,y(!1),u.emit("close")},Pe=he(Q=>{J(Q.conversationId),w(fe=>fe.filter(Z=>Z.id!==Q.id)),N(!0),R.current=!0,y(!0),u.emit("open")},[u,R,y]),Ge=he(Q=>{w(fe=>fe.filter(Z=>Z.id!==Q))},[]);return h(be,{children:[!U&&h(Lo,{isOpen:T,position:_,unreadCount:P,onClick:Ue}),!U&&!T&&h(na,{previews:X,onOpen:Pe,onDismiss:Ge,position:_}),T&&h(ea,{channelInfo:o,apiClient:s,realtimeClient:l,storage:p,events:u,visitor:g,isAuthenticated:m,position:_,onClose:q,t:C,initialConversationId:ee}),z&&!U&&h(sa,{modal:z.modal,onDismiss:ve,onOptOut:A,onOpenChat:pe})]})}var da=`/* Baseportal Chat Widget \u2014 V1 (Home com tabs) */
/* Loaded inside a Shadow DOM root by mount.ts. Host page CSS does
   not reach this stylesheet; we control the universe. */

:host {
  /* Brand */
  --bp-primary: #1e4dd8;
  --bp-primary-50: #eef2ff;
  --bp-primary-100: #dbe3ff;
  --bp-primary-700: #1740b8;
  --bp-primary-contrast: #ffffff;

  /* Type */
  --bp-font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  --bp-font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco,
    Consolas, monospace;

  /* Surfaces */
  --bp-bg: #fbfbfc;
  --bp-bg-muted: #f4f4f6;
  --bp-border: #e5e6ea;
  --bp-border-strong: #d0d2d8;
  --bp-divider: #eceef2;

  /* Text */
  --bp-text: #15161a;
  --bp-text-secondary: #4b4d57;
  --bp-text-muted: #8a8d98;
  --bp-text-faint: #b8bac2;

  /* States */
  --bp-success: #0e8f4f;
  --bp-success-bg: #e3f5ec;
  --bp-danger: #c4382c;
  --bp-danger-bg: #fce7e4;
  --bp-ai-violet: #6e3ae8;
  --bp-ai-violet-bg: #f0e9ff;

  /* Geometry */
  --bp-radius: 18px;
  --bp-radius-sm: 12px;
  --bp-bubble-size: 56px;
  --bp-shadow:
    0 4px 12px rgba(16, 17, 22, 0.06),
    0 18px 60px rgba(16, 17, 22, 0.18);
  --bp-shadow-sm: 0 2px 8px rgba(16, 17, 22, 0.08);
  --bp-transition: 0.15s ease;

  /* Default font for everything inside the shadow tree. The reset
     below relies on inheritance \u2014 children that don't set their own
     font-family pick this up automatically. */
  font-family: var(--bp-font-family);
  font-size: 14px;
  line-height: 1.5;
  color: var(--bp-text);
}

.bp-root,
.bp-root * {
  box-sizing: border-box;
  /* Force Inter on every descendant. User-agent stylesheets default
     <input>, <textarea>, <button>, etc. to system fonts; pure
     inheritance from \`:host\` doesn't reach them. Setting it here
     keeps the visual identity consistent. Specific exceptions (the
     mono font for monetary / time numerics) are re-declared with
     higher specificity below. */
  font-family: var(--bp-font-family);
}

/* SVG default sizing \u2014 without this, icons in flex contexts
   (search bar, start CTA, article rows, chevrons) stretch to fill
   the cross-axis. Per-context rules below override when a different
   size is needed (tabs at 20px, bubble at 26px, send at 16px, etc). */
svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  display: inline-block;
  vertical-align: middle;
}

/* Mono font reserved for tabular numerics (timers, response time
   labels). Re-declared here so the universal Inter rule above
   doesn't beat the per-component mono request. */
.bp-root .bp-font-mono,
.bp-root code,
.bp-root pre,
.bp-root .bp-wvoice__time,
.bp-root .bp-rec__time,
.bp-root .bp-warticle-view__cover,
.bp-root .bp-warticle-view code {
  font-family: var(--bp-font-mono);
}

/* ===== Bubble (FAB) ===== */
.bp-bubble {
  pointer-events: auto;
  position: fixed;
  bottom: 24px;
  z-index: 2147483646;
  width: var(--bp-bubble-size);
  height: var(--bp-bubble-size);
  border-radius: 50%;
  background: var(--bp-primary);
  color: var(--bp-primary-contrast);
  border: none;
  cursor: pointer;
  display: grid;
  place-items: center;
  box-shadow: 0 12px 30px rgba(30, 77, 216, 0.35);
  transition:
    transform var(--bp-transition),
    box-shadow var(--bp-transition);
}
.bp-bubble:hover {
  transform: scale(1.06);
  box-shadow: 0 14px 36px rgba(30, 77, 216, 0.45);
}
.bp-bubble--right { right: 24px; }
.bp-bubble--left { left: 24px; }
.bp-bubble svg { width: 26px; height: 26px; fill: currentColor; }
.bp-bubble__badge {
  position: absolute;
  top: -2px;
  right: -2px;
  min-width: 20px;
  height: 20px;
  border-radius: 10px;
  background: var(--bp-danger);
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  display: grid;
  place-items: center;
  padding: 0 5px;
}

/* ===== Window ===== */
.bp-window {
  pointer-events: auto;
  position: fixed;
  bottom: 96px;
  z-index: 2147483647;
  width: 400px;
  height: 680px;
  max-height: calc(100vh - 120px);
  background: #fff;
  color: var(--bp-text);
  border-radius: var(--bp-radius);
  box-shadow: var(--bp-shadow);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  font-size: 13.5px;
  isolation: isolate;
  animation: bp-slide-up 0.25s ease-out;
}
.bp-bubble { color: var(--bp-primary-contrast); }
.bp-window--right { right: 24px; }
.bp-window--left { left: 24px; }

/* Container mode (mounted inside a host element) */
.bp-window--in-container {
  position: relative;
  inset: auto;
  width: 100%;
  height: 100%;
  border-radius: 0;
  bottom: auto;
}

@keyframes bp-slide-up {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 480px) {
  .bp-window {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
}

/* ===== Header variants ===== */
.bp-wh {
  position: relative;
  flex-shrink: 0;
  padding: 18px 20px 16px;
  color: #fff;
}
.bp-wh--solid .bp-wh__sub,
.bp-wh--gradient .bp-wh__crew-meta { color: rgba(255, 255, 255, 0.85); }
.bp-wh--solid { background: var(--bp-primary); }
.bp-wh--gradient { background: var(--bp-primary); }
.bp-wh--light {
  background: #fff;
  color: var(--bp-text);
  border-bottom: 1px solid var(--bp-border);
}
.bp-wh__close {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  background: transparent;
  color: inherit;
  opacity: 0.85;
  cursor: pointer;
  border: 0;
}
.bp-wh__close:hover { background: rgba(255, 255, 255, 0.12); }
.bp-wh--light .bp-wh__close:hover { background: var(--bp-bg-muted); }
.bp-wh__close svg { width: 18px; height: 18px; }

.bp-wh__title { font-size: 18px; font-weight: 650; letter-spacing: -0.01em; margin: 0; color: inherit; }
.bp-wh__sub { margin: 2px 0 0; font-size: 12.5px; opacity: 0.85; color: inherit; }

.bp-wh__hero { padding: 6px 0 4px; }
.bp-wh__hello {
  font-size: 22px;
  font-weight: 650;
  letter-spacing: -0.02em;
  margin: 0;
  line-height: 1.2;
  color: inherit;
}
.bp-wh__hello b { color: rgba(255, 255, 255, 0.85); font-weight: 650; }
.bp-wh--gradient .bp-wh__hello span { color: #bfd0ff; }

.bp-wh__crew {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 14px;
}
.bp-wh__avs { display: flex; }
.bp-wh__avs .bp-avatar {
  width: 30px;
  height: 30px;
  margin-left: -7px;
  box-shadow: 0 0 0 2px var(--bp-header-bg, var(--bp-primary));
}
.bp-wh__avs .bp-avatar:first-child { margin-left: 0; }
.bp-wh__crew-meta { font-size: 11.5px; opacity: 0.85; line-height: 1.35; color: inherit; }
.bp-wh__crew-meta b {
  font-size: 12px;
  opacity: 1;
  display: block;
  font-weight: 600;
  color: inherit;
}

.bp-wh__pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 22px;
  padding: 0 9px;
  background: rgba(255, 255, 255, 0.16);
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  margin-top: 10px;
  color: inherit;
}
.bp-wh__pill .bp-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #5ee3a1;
  box-shadow: 0 0 0 2px rgba(94, 227, 161, 0.25);
}

/* Sub-header nav (back button + title) */
.bp-wh-nav {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border-bottom: 1px solid var(--bp-border);
  background: #fff;
  color: var(--bp-text);
  flex-shrink: 0;
}
.bp-wh-nav__back {
  appearance: none;
  background: transparent;
  border: 0;
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  color: var(--bp-text-secondary);
  cursor: pointer;
}
.bp-wh-nav__back:hover { background: var(--bp-bg-muted); color: var(--bp-text); }
.bp-wh-nav__back svg { width: 18px; height: 18px; }
.bp-wh-nav__title {
  font-weight: 600;
  font-size: 13.5px;
  flex: 1;
  color: var(--bp-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bp-wh-nav__close {
  appearance: none;
  background: transparent;
  border: 0;
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  color: var(--bp-text-secondary);
  cursor: pointer;
}
.bp-wh-nav__close:hover { background: var(--bp-bg-muted); color: var(--bp-text); }
.bp-wh-nav__close svg { width: 18px; height: 18px; }

/* ===== Body ===== */
.bp-wb {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  background: var(--bp-bg);
  display: flex;
  flex-direction: column;
}
.bp-wb--white { background: #fff; }
.bp-wb::-webkit-scrollbar { width: 4px; }
.bp-wb::-webkit-scrollbar-thumb { background: var(--bp-border-strong); border-radius: 2px; }

/* ===== Search inside the hero (Home tab) =====
   Renders as a child of .bp-wh--gradient. No overlap shenanigans \u2014
   the bar sits below the crew strip with its own padding. */
.bp-wh__search {
  margin: 14px 0 0;
  background: #fff;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 12px;
  padding: 11px 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--bp-text);
  font-family: var(--bp-font-family);
}
.bp-wh__search svg { color: var(--bp-text-muted); flex-shrink: 0; }
.bp-wh__search input {
  flex: 1;
  border: 0;
  outline: 0;
  background: transparent;
  font-family: inherit;
  font-size: 14px;
  color: var(--bp-text);
}
.bp-wh__search input::placeholder { color: var(--bp-text-muted); }

/* ===== Search bar inside body (Help tab) ===== */
.bp-wsearch {
  margin: 16px;
  background: #fff;
  border: 1px solid var(--bp-border);
  border-radius: 12px;
  padding: 11px 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--bp-text);
  font-family: var(--bp-font-family);
}
.bp-wsearch--inline {
  margin: 16px;
  box-shadow: none;
}
.bp-wsearch svg { color: var(--bp-text-muted); flex-shrink: 0; }
.bp-wsearch input {
  flex: 1;
  border: 0;
  outline: 0;
  background: transparent;
  font-family: inherit;
  font-size: 14px;
  color: var(--bp-text);
}
.bp-wsearch input::placeholder { color: var(--bp-text-muted); }

/* ===== Section header ===== */
.bp-wsec {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px 8px;
}
.bp-wsec__title {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--bp-text-muted);
  font-weight: 600;
}
.bp-wsec__more {
  font-size: 12px;
  color: var(--bp-primary);
  font-weight: 500;
  cursor: pointer;
  background: none;
  border: 0;
  padding: 0;
  font-family: inherit;
}

/* ===== Start CTA ===== */
.bp-wstart {
  margin: 12px 16px 4px;
  background: var(--bp-primary);
  color: #fff;
  border: 0;
  width: calc(100% - 32px);
  border-radius: 14px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-weight: 600;
  font-size: 13.5px;
  box-shadow: 0 4px 14px rgba(30, 77, 216, 0.25);
  font-family: inherit;
  text-align: left;
}
.bp-wstart svg { opacity: 0.9; width: 18px; height: 18px; color: #fff; }
.bp-wstart__sub {
  display: block;
  font-size: 11.5px;
  opacity: 0.85;
  font-weight: 400;
  margin-top: 2px;
  color: inherit;
}

/* ===== Conversation row ===== */
.bp-wconv {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 20px;
  cursor: pointer;
  position: relative;
  background: transparent;
  border: 0;
  width: 100%;
  text-align: left;
  font-family: inherit;
}
.bp-wconv:hover { background: var(--bp-bg-muted); }
.bp-wconv + .bp-wconv { border-top: 1px solid var(--bp-divider); }
.bp-wconv__avs { position: relative; flex-shrink: 0; }
.bp-wconv__body { flex: 1; min-width: 0; }
.bp-wconv__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
}
.bp-wconv__name {
  font-weight: 600;
  font-size: 13px;
  color: var(--bp-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bp-wconv__time {
  font-size: 11px;
  color: var(--bp-text-muted);
  white-space: nowrap;
  flex-shrink: 0;
}
.bp-wconv__last {
  font-size: 12.5px;
  color: var(--bp-text-secondary);
  margin-top: 2px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.bp-wconv__last b { color: var(--bp-text); font-weight: 500; }
.bp-wconv__chev { align-self: center; color: var(--bp-text-muted); flex-shrink: 0; }
.bp-wconv__pin {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--bp-primary);
  color: #fff;
  font-size: 10.5px;
  font-weight: 700;
  display: grid;
  place-items: center;
}
.bp-wconv__status {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 1px 7px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 600;
  margin-top: 4px;
  background: var(--bp-bg-muted);
  color: var(--bp-text-muted);
}
.bp-wconv__status--open { background: var(--bp-success-bg); color: var(--bp-success); }
.bp-wconv__status--closed { background: var(--bp-bg-muted); color: var(--bp-text-muted); }
.bp-wconv__status .bp-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: currentColor;
}

/* ===== Article row ===== */
.bp-warticle {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 20px;
  cursor: pointer;
  background: transparent;
  border: 0;
  width: 100%;
  text-align: left;
  font-family: inherit;
}
.bp-warticle:hover { background: var(--bp-bg-muted); }
.bp-warticle + .bp-warticle { border-top: 1px solid var(--bp-divider); }
.bp-warticle__icon {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: var(--bp-primary-50);
  color: var(--bp-primary);
  display: grid;
  place-items: center;
  flex-shrink: 0;
}
.bp-warticle__body { flex: 1; min-width: 0; }
.bp-warticle__title { font-weight: 550; font-size: 13px; color: var(--bp-text); }
.bp-warticle__sub {
  font-size: 11.5px;
  color: var(--bp-text-muted);
  margin-top: 2px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.bp-warticle__meta {
  font-size: 11px;
  color: var(--bp-text-muted);
  margin-top: 4px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.bp-warticle__meta span + span::before {
  content: '';
  display: inline-block;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--bp-text-faint);
  margin-right: 6px;
  vertical-align: middle;
}
.bp-warticle__chev { color: var(--bp-text-faint); align-self: center; flex-shrink: 0; }

/* Inline article preview inside chat */
.bp-warticle-card {
  margin-top: 8px;
  border: 1px solid var(--bp-border);
  background: #fff;
  border-radius: 12px;
  padding: 12px 14px;
  display: flex;
  gap: 10px;
  align-items: flex-start;
  cursor: pointer;
}
.bp-warticle-card:hover { border-color: var(--bp-border-strong); background: var(--bp-bg-muted); }
.bp-warticle-card__icon {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: var(--bp-primary-50);
  color: var(--bp-primary);
  display: grid;
  place-items: center;
  flex-shrink: 0;
}
.bp-warticle-card__body { flex: 1; min-width: 0; }
.bp-warticle-card__title {
  font-weight: 600;
  font-size: 12.5px;
  color: var(--bp-text);
  display: flex;
  align-items: center;
  gap: 6px;
}
.bp-warticle-card__sub {
  font-size: 11.5px;
  color: var(--bp-text-muted);
  margin-top: 2px;
}

/* ===== Chat thread ===== */
.bp-wthread {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 18px 16px 12px;
  overflow-y: auto;
  background: var(--bp-bg);
}
.bp-wthread--empty {
  align-items: center;
  justify-content: center;
  padding: 0;
}
.bp-wthread--empty .bp-wempty {
  padding: 24px;
}
.bp-wthread--empty .bp-wempty__ico {
  background: var(--bp-primary-50);
  color: var(--bp-primary);
}
.bp-wthread::-webkit-scrollbar { width: 4px; }
.bp-wthread::-webkit-scrollbar-thumb { background: var(--bp-border-strong); border-radius: 2px; }
.bp-wthread__day {
  text-align: center;
  font-size: 11px;
  color: var(--bp-text-muted);
  margin: 8px 0;
}

.bp-wmsg { display: flex; gap: 8px; max-width: 100%; }
.bp-wmsg__avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 11px;
  font-weight: 600;
  color: #fff;
  flex-shrink: 0;
  align-self: flex-end;
  background: var(--bp-primary);
}
.bp-wmsg__avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}
.bp-wmsg__body { display: flex; flex-direction: column; max-width: 78%; }
.bp-wmsg__bubble {
  background: #fff;
  border: 1px solid var(--bp-border);
  border-radius: 14px 14px 14px 4px;
  padding: 10px 13px;
  font-size: 13.5px;
  line-height: 1.45;
  color: var(--bp-text);
  white-space: pre-wrap;
  word-break: break-word;
}
.bp-wmsg__bubble p { margin: 0; }
.bp-wmsg__bubble p + p { margin-top: 6px; }
.bp-wmsg__bubble strong { font-weight: 600; }
.bp-wmsg__bubble em { font-style: italic; }
.bp-wmsg__bubble s { text-decoration: line-through; opacity: 0.75; }
.bp-wmsg__bubble code {
  font-family: var(--bp-font-mono);
  font-size: 0.9em;
  padding: 1px 4px;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.06);
}
.bp-wmsg__bubble pre {
  margin: 6px 0;
  padding: 8px 10px;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.06);
  overflow-x: auto;
}
.bp-wmsg__bubble pre code { background: transparent; padding: 0; }
.bp-wmsg__bubble a { color: inherit; text-decoration: underline; word-break: break-all; }
.bp-wmsg__time { font-size: 10.5px; color: var(--bp-text-muted); margin-top: 4px; }

.bp-wmsg--me { flex-direction: row-reverse; }
.bp-wmsg--me .bp-wmsg__avatar { display: none; }
.bp-wmsg--me .bp-wmsg__bubble {
  background: var(--bp-primary);
  border-color: var(--bp-primary);
  color: #fff;
  border-radius: 14px 14px 4px 14px;
}
.bp-wmsg--me .bp-wmsg__bubble * { color: #fff; }
.bp-wmsg--me .bp-wmsg__time { text-align: right; color: var(--bp-text-muted); }
.bp-wmsg--me .bp-wmsg__bubble code,
.bp-wmsg--me .bp-wmsg__bubble pre { background: rgba(255, 255, 255, 0.18); }

.bp-wmsg--ai .bp-wmsg__avatar {
  background: linear-gradient(135deg, var(--bp-ai-violet), #a070ff);
}
.bp-wmsg--ai .bp-wmsg__bubble {
  background: linear-gradient(180deg, #fafaff 0%, #f4eeff 100%);
  border-color: #e5daff;
}

/* ===== Composer ===== */
.bp-wcomp {
  flex-shrink: 0;
  border-top: 1px solid var(--bp-border);
  background: #fff;
  padding: 10px 12px 12px;
}
.bp-wcomp__row {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  border: 1px solid var(--bp-border);
  border-radius: 22px;
  padding: 4px 4px 4px 14px;
  transition: border-color var(--bp-transition);
}
.bp-wcomp__row:focus-within {
  border-color: var(--bp-primary);
  box-shadow: 0 0 0 3px rgba(30, 77, 216, 0.12);
}
/* While recording, the AudioRecorder draws its own danger-bordered
   pill (\`.bp-wrec\`). Drop the wrapper's outline + padding so we
   don't get double borders. */
.bp-wcomp__row--bare {
  border: 0;
  padding: 0;
  background: transparent;
}
.bp-wcomp__row--bare:focus-within { box-shadow: none; }
.bp-wcomp__input {
  flex: 1;
  border: 0;
  outline: 0;
  background: transparent;
  font: inherit;
  font-size: 13.5px;
  padding: 8px 0;
  resize: none;
  max-height: 120px;
  color: var(--bp-text);
}
.bp-wcomp__input::placeholder { color: var(--bp-text-muted); }
.bp-wcomp__input:disabled { background: transparent; cursor: not-allowed; opacity: 0.6; }
.bp-wcomp__btn {
  appearance: none;
  border: 0;
  cursor: pointer;
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: transparent;
  color: var(--bp-text-muted);
  flex-shrink: 0;
}
.bp-wcomp__btn:hover { background: var(--bp-bg-muted); color: var(--bp-text); }
.bp-wcomp__btn--send {
  background: var(--bp-primary);
  color: #fff;
}
.bp-wcomp__btn--send:hover { background: var(--bp-primary-700); color: #fff; }
.bp-wcomp__btn--send:disabled {
  background: var(--bp-bg-muted);
  color: var(--bp-text-faint);
  cursor: default;
}
.bp-wcomp__btn svg { width: 18px; height: 18px; }
.bp-wcomp__btn--send svg { width: 16px; height: 16px; }

.bp-wcomp__preview {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--bp-bg-muted);
  border: 1px solid var(--bp-border);
  border-radius: 10px;
  padding: 6px 10px;
  margin-bottom: 8px;
  font-size: 12.5px;
  color: var(--bp-text);
}
.bp-wcomp__preview-thumb {
  width: 36px;
  height: 36px;
  border-radius: 6px;
  object-fit: cover;
  flex-shrink: 0;
}
.bp-wcomp__preview-name {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bp-wcomp__preview-remove {
  appearance: none;
  background: transparent;
  border: 0;
  cursor: pointer;
  width: 22px;
  height: 22px;
  display: grid;
  place-items: center;
  color: var(--bp-text-muted);
  border-radius: 50%;
}
.bp-wcomp__preview-remove:hover { background: #fff; color: var(--bp-danger); }

/* ===== Recording row =====
   AudioRecorder takes the whole composer row when active: cancel
   button on the left, pulsing dot + timer, animated waveform across
   the middle, and a primary send button on the right.
   \`flex: 1; width: 100%\` \u2014 without these the recorder shrinks to its
   intrinsic width inside the flex \`.bp-wcomp__row--bare\`, which left
   the right half of the composer empty. */
.bp-wrec {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px 4px 4px 10px;
  background: #fff;
  border: 1px solid var(--bp-danger);
  border-radius: 22px;
  flex: 1;
  width: 100%;
  min-width: 0;
}
.bp-wrec__cancel,
.bp-wrec__send {
  appearance: none;
  border: 0;
  cursor: pointer;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}
.bp-wrec__cancel {
  background: transparent;
  color: var(--bp-text-muted);
}
.bp-wrec__cancel:hover { background: var(--bp-bg-muted); color: var(--bp-danger); }
.bp-wrec__cancel svg { width: 16px; height: 16px; }
.bp-wrec__send {
  background: var(--bp-primary);
  color: #fff;
}
.bp-wrec__send:hover { background: var(--bp-primary-700); }
.bp-wrec__send:disabled {
  background: var(--bp-bg-muted);
  color: var(--bp-text-faint);
  cursor: default;
}
.bp-wrec__send svg { width: 16px; height: 16px; }
.bp-wrec__indicator {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}
.bp-wrec__dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--bp-danger);
  animation: bp-rec-pulse 1.2s ease-in-out infinite;
  flex-shrink: 0;
}
@keyframes bp-rec-pulse {
  0%, 100% {
    opacity: 1;
    box-shadow: 0 0 0 0 rgba(196, 56, 44, 0.5);
  }
  50% {
    opacity: 0.6;
    box-shadow: 0 0 0 5px rgba(196, 56, 44, 0);
  }
}
.bp-wrec__time {
  font-family: var(--bp-font-mono);
  font-size: 12px;
  font-weight: 600;
  color: var(--bp-danger);
  font-variant-numeric: tabular-nums;
}
.bp-wrec__wave {
  flex: 1;
  height: 28px;
  display: flex;
  align-items: center;
  gap: 2px;
  /* Soft fade at the edges so the wave doesn't end abruptly */
  mask: linear-gradient(90deg, transparent 0, #000 12%, #000 88%, transparent 100%);
  -webkit-mask: linear-gradient(90deg, transparent 0, #000 12%, #000 88%, transparent 100%);
}
.bp-wrec__wave i {
  display: block;
  width: 2px;
  flex: 1;
  background: var(--bp-danger);
  border-radius: 2px;
  opacity: 0.85;
  animation: bp-wave-bounce 0.9s ease-in-out infinite;
  transform-origin: center;
}
@keyframes bp-wave-bounce {
  0%, 100% { transform: scaleY(0.35); }
  50%      { transform: scaleY(1); }
}
.bp-wcomp__error {
  margin-top: 6px;
  padding: 6px 10px;
  background: var(--bp-danger-bg);
  color: var(--bp-danger);
  border-radius: 8px;
  font-size: 11.5px;
  text-align: center;
}

/* ===== Audio player inside message bubbles =====
   Replaces the file-download card for audio mime types. The
   waveform bar heights are computed in JS (deterministic from
   message id); CSS only renders + animates the played-vs-future
   contrast. */
.bp-audio {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 200px;
  max-width: 280px;
}
.bp-audio__play {
  appearance: none;
  border: 0;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.2);
  color: inherit;
  flex-shrink: 0;
}
.bp-audio__play:hover { background: rgba(255, 255, 255, 0.32); }
.bp-audio__play svg { width: 14px; height: 14px; }
/* Receiver-side bubbles (them / ai) have a light background, so the
   play button needs a contrasting fill. */
.bp-wmsg--them .bp-audio__play,
.bp-wmsg--ai .bp-audio__play {
  background: var(--bp-primary-50);
  color: var(--bp-primary);
}
.bp-wmsg--them .bp-audio__play:hover,
.bp-wmsg--ai .bp-audio__play:hover {
  background: var(--bp-primary-100);
}
.bp-audio__wave {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 2px;
  height: 24px;
}
.bp-audio__wave i {
  display: block;
  width: 2px;
  background: currentColor;
  border-radius: 2px;
  opacity: 0.35;
  flex: 1;
  transition: opacity 0.1s linear;
}
.bp-audio__wave i.is-played { opacity: 1; }
.bp-audio__time {
  font-family: var(--bp-font-mono);
  font-size: 11px;
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
  opacity: 0.85;
}

/* ===== Footer tabs ===== */
.bp-wtabs {
  flex-shrink: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid var(--bp-border);
  background: #fff;
}
.bp-wtabs__btn {
  appearance: none;
  border: 0;
  cursor: pointer;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  padding: 10px 6px 12px;
  font-size: 11px;
  color: var(--bp-text-muted);
  font-weight: 500;
  position: relative;
  font-family: inherit;
}
.bp-wtabs__btn.is-active { color: var(--bp-primary); font-weight: 600; }
.bp-wtabs__btn.is-active::before {
  content: '';
  position: absolute;
  top: 0;
  left: 30%;
  right: 30%;
  height: 2px;
  background: var(--bp-primary);
  border-radius: 0 0 2px 2px;
}
.bp-wtabs__btn svg { width: 20px; height: 20px; }
.bp-wtabs__count {
  position: absolute;
  top: 6px;
  right: 30%;
  background: var(--bp-danger);
  color: #fff;
  min-width: 16px;
  height: 16px;
  font-size: 10px;
  font-weight: 700;
  border-radius: 999px;
  padding: 0 4px;
  display: grid;
  place-items: center;
}

/* ===== Group header inside lists ===== */
.bp-wgrouph {
  padding: 14px 20px 6px;
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--bp-text-muted);
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.bp-wgrouph__action {
  text-transform: none;
  letter-spacing: 0;
  color: var(--bp-primary);
  font-weight: 500;
  cursor: pointer;
  background: none;
  border: 0;
  padding: 0;
  font-family: inherit;
  font-size: 11px;
}

/* ===== Empty state ===== */
.bp-wempty {
  text-align: center;
  padding: 40px 24px;
  color: var(--bp-text-muted);
}
.bp-wempty__ico {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  margin: 0 auto 14px;
  display: grid;
  place-items: center;
  background: var(--bp-bg-muted);
  color: var(--bp-text-muted);
}
.bp-wempty h4 {
  font-size: 14.5px;
  font-weight: 600;
  color: var(--bp-text);
  margin: 0 0 4px;
  letter-spacing: -0.005em;
}
.bp-wempty p { font-size: 12.5px; margin: 0; color: var(--bp-text-muted); }

/* ===== Article view (full-body reader) ===== */
.bp-warticle-view {
  flex: 1;
  overflow-y: auto;
  padding: 20px 22px 28px;
  background: #fff;
}
.bp-warticle-view::-webkit-scrollbar { width: 4px; }
.bp-warticle-view::-webkit-scrollbar-thumb { background: var(--bp-border-strong); border-radius: 2px; }
.bp-warticle-view h1 {
  font-size: 20px;
  font-weight: 650;
  letter-spacing: -0.015em;
  margin: 4px 0 6px;
  color: var(--bp-text);
}
.bp-warticle-view__meta {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11.5px;
  color: var(--bp-text-muted);
  margin-bottom: 14px;
}
.bp-warticle-view__cover {
  width: calc(100% + 44px);
  margin: 0 -22px 16px;
  height: 130px;
  background:
    repeating-linear-gradient(45deg, rgba(30, 77, 216, 0.08) 0 8px, rgba(30, 77, 216, 0.04) 8px 16px),
    var(--bp-primary-50);
  display: grid;
  place-items: center;
  font-family: var(--bp-font-mono);
  font-size: 11px;
  color: var(--bp-primary);
}
.bp-warticle-view p {
  font-size: 13.5px;
  line-height: 1.6;
  color: var(--bp-text-secondary);
  margin: 10px 0;
}
.bp-warticle-view__summary {
  font-weight: 500;
  color: var(--bp-text);
}
.bp-warticle-view h2 {
  font-size: 15px;
  font-weight: 600;
  margin: 18px 0 6px;
  letter-spacing: -0.005em;
  color: var(--bp-text);
}
.bp-warticle-view h3 {
  font-size: 14px;
  font-weight: 600;
  margin: 16px 0 4px;
  letter-spacing: -0.005em;
  color: var(--bp-text);
}
.bp-warticle-view h4 {
  font-size: 13.5px;
  font-weight: 600;
  margin: 14px 0 2px;
  color: var(--bp-text);
}
.bp-warticle-view ol,
.bp-warticle-view ul {
  margin: 8px 0;
  padding-left: 22px;
  color: var(--bp-text-secondary);
  font-size: 13px;
  line-height: 1.6;
}
.bp-warticle-view li { margin: 4px 0; }
.bp-warticle-view li > p { margin: 0; }
.bp-warticle-view li > p + p { margin-top: 4px; }
.bp-warticle-view code {
  background: var(--bp-bg-muted);
  padding: 1px 6px;
  border-radius: 4px;
  font-family: var(--bp-font-mono);
  font-size: 12px;
  color: var(--bp-text);
}
.bp-warticle-view pre {
  background: var(--bp-bg-muted);
  padding: 10px 12px;
  border-radius: 8px;
  font-family: var(--bp-font-mono);
  font-size: 12px;
  color: var(--bp-text);
  overflow-x: auto;
  margin: 10px 0;
  line-height: 1.5;
}
.bp-warticle-view pre code { background: transparent; padding: 0; }
.bp-warticle-view a { color: var(--bp-primary); text-decoration: underline; }
/* Images coming from the KB editor have inline \`style="max-width:
   100%; height: auto; display: block; margin: 0 auto;"\`. The reset
   here just rounds the corners and adds vertical breathing room to
   match the article rhythm. */
.bp-warticle-view img {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 12px auto;
  border-radius: 8px;
}
.bp-warticle-view blockquote {
  margin: 12px 0;
  padding: 8px 14px;
  border-left: 3px solid var(--bp-border-strong);
  color: var(--bp-text-secondary);
  font-style: italic;
}
.bp-warticle-view hr {
  border: 0;
  border-top: 1px solid var(--bp-divider);
  margin: 16px 0;
}
.bp-warticle-view strong { font-weight: 600; color: var(--bp-text); }
.bp-warticle-view em { font-style: italic; }
.bp-warticle-view table {
  border-collapse: collapse;
  margin: 12px 0;
  width: 100%;
  font-size: 12.5px;
}
.bp-warticle-view th,
.bp-warticle-view td {
  border: 1px solid var(--bp-border);
  padding: 6px 10px;
  text-align: left;
  vertical-align: top;
}
.bp-warticle-view th { background: var(--bp-bg-muted); font-weight: 600; }
.bp-warticle-view__feedback {
  margin-top: 22px;
  padding: 14px;
  border: 1px solid var(--bp-border);
  border-radius: 12px;
  background: var(--bp-bg-muted);
  text-align: center;
}
.bp-warticle-view__feedback-q {
  margin: 0 0 10px;
  font-size: 12.5px;
  color: var(--bp-text);
  font-weight: 500;
}
.bp-warticle-view__feedback-btns {
  display: flex;
  gap: 8px;
  justify-content: center;
}
.bp-warticle-view__feedback-btn {
  appearance: none;
  border: 1px solid var(--bp-border);
  background: #fff;
  cursor: pointer;
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 12.5px;
  font-family: inherit;
  color: var(--bp-text);
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.bp-warticle-view__feedback-btn:hover { border-color: var(--bp-border-strong); }
.bp-warticle-view__feedback-btn.is-selected {
  background: var(--bp-primary-50);
  border-color: var(--bp-primary);
  color: var(--bp-primary);
}

/* ===== Closed conversation banner ===== */
.bp-closed-banner {
  padding: 12px 16px;
  border-top: 1px solid var(--bp-border);
  text-align: center;
  background: var(--bp-bg-muted);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.bp-closed-banner__text {
  font-size: 13px;
  color: var(--bp-text-secondary);
}
.bp-closed-banner__reopen {
  appearance: none;
  border: 0;
  background: var(--bp-primary);
  color: #fff;
  border-radius: 8px;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
}

/* ===== Privacy footer ===== */
.bp-privacy-footer {
  padding: 4px 16px 8px;
  text-align: center;
  font-size: 11px;
  color: var(--bp-text-muted);
  flex-shrink: 0;
  background: #fff;
}
.bp-privacy-footer a { color: var(--bp-primary); text-decoration: underline; }

/* ===== Loading ===== */
.bp-loading {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bp-spinner {
  width: 32px;
  height: 32px;
  border: 3px solid var(--bp-border);
  border-top-color: var(--bp-primary);
  border-radius: 50%;
  animation: bp-spin 0.6s linear infinite;
}
@keyframes bp-spin { to { transform: rotate(360deg); } }

/* ===== Pre-Chat Form ===== */
.bp-prechat {
  flex: 1;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
  background: #fff;
}
.bp-prechat__title { font-size: 16px; font-weight: 600; color: var(--bp-text); }
.bp-prechat__desc { font-size: 13px; color: var(--bp-text-muted); }
.bp-prechat__field { display: flex; flex-direction: column; gap: 4px; }
.bp-prechat__label { font-size: 13px; font-weight: 500; color: var(--bp-text-secondary); }
.bp-prechat__input {
  border: 1px solid var(--bp-border);
  border-radius: var(--bp-radius-sm);
  padding: 10px 12px;
  font-size: 14px;
  font-family: inherit;
  outline: none;
  transition: border-color var(--bp-transition);
  color: var(--bp-text);
}
.bp-prechat__input:focus { border-color: var(--bp-primary); }
.bp-prechat__submit {
  padding: 10px 20px;
  border-radius: var(--bp-radius-sm);
  background: var(--bp-primary);
  color: #fff;
  border: none;
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: opacity var(--bp-transition);
}
.bp-prechat__submit:disabled { opacity: 0.6; cursor: not-allowed; }
.bp-prechat__privacy {
  font-size: 12px;
  color: var(--bp-text-muted);
  text-align: center;
  margin-top: auto;
}
.bp-prechat__privacy a { color: var(--bp-primary); text-decoration: underline; }

/* ===== Avatar primitive ===== */
.bp-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  background: var(--bp-primary);
  flex-shrink: 0;
  position: relative;
}
.bp-avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}
.bp-avatar__online {
  position: absolute;
  bottom: -1px;
  right: -1px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #5ee3a1;
  border: 2px solid var(--bp-header-bg, #fff);
}
.bp-avatar.bp-av-1 { background: #1e4dd8; }
.bp-avatar.bp-av-2 { background: #6e3ae8; }
.bp-avatar.bp-av-3 { background: #0e8f4f; }
.bp-avatar.bp-av-4 { background: #c4382c; }
.bp-avatar.bp-av-5 { background: #e08a00; }
.bp-avatar.bp-av-6 { background: #00838f; }

/* ===== Image lightbox ===== */
.bp-lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 2147483647;
  display: grid;
  place-items: center;
  cursor: zoom-out;
}
.bp-lightbox img {
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 8px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
}

/* ===== Media (image/video/file) inside message ===== */
.bp-media-image {
  max-width: 100%;
  max-height: 280px;
  border-radius: 10px;
  display: block;
  cursor: zoom-in;
}
.bp-media-video {
  max-width: 100%;
  max-height: 280px;
  border-radius: 10px;
  display: block;
}
.bp-media-file {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  color: inherit;
  text-decoration: none;
  font-size: 12.5px;
  font-weight: 500;
}
.bp-wmsg--them .bp-media-file,
.bp-wmsg--ai .bp-media-file {
  background: var(--bp-bg-muted);
  color: var(--bp-text);
}

/* ===== Hidden helper ===== */
.bp-hidden { display: none !important; }

/* ===== Rich-content message body (Tiptap HTML) ===== */
/* Outbound automation messages opt into HTML rendering via \`htmlContent\`.
   Constrain shapes so banners/bubbles stay tidy regardless of editor
   formatting choices. */
.bp-wmsg__rich p { margin: 0 0 6px; }
.bp-wmsg__rich p:last-child { margin-bottom: 0; }
.bp-wmsg__rich h1,
.bp-wmsg__rich h2,
.bp-wmsg__rich h3 { margin: 8px 0 4px; font-size: 15px; font-weight: 600; }
.bp-wmsg__rich ul,
.bp-wmsg__rich ol { margin: 4px 0 6px 18px; padding: 0; }
.bp-wmsg__rich li { margin-bottom: 2px; }
.bp-wmsg__rich a { color: inherit; text-decoration: underline; }
.bp-wmsg__rich img { max-width: 100%; border-radius: 8px; margin: 4px 0; }
.bp-wmsg__rich iframe {
  max-width: 100%;
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 0;
  border-radius: 8px;
  margin: 4px 0;
}
.bp-wmsg__rich blockquote {
  border-left: 3px solid var(--bp-border);
  padding-left: 8px;
  margin: 4px 0;
  color: var(--bp-text-muted);
}
.bp-wmsg__rich code {
  background: rgba(0, 0, 0, 0.06);
  padding: 1px 4px;
  border-radius: 4px;
  font-size: 12px;
}
.bp-wmsg__rich pre {
  background: rgba(0, 0, 0, 0.06);
  padding: 8px;
  border-radius: 6px;
  overflow-x: auto;
  font-size: 12px;
}

/* ===== Floating preview (Instagram-style notification toast) ===== */
/* Stacks above the FAB when the widget is closed but the visitor has
   pending automation / admin messages. Click body \u2192 opens widget on
   that conversation. Click X \u2192 dismiss locally (no server ack \u2014 the
   real message stays in the conversation thread regardless). */
.bp-floating-preview-layer {
  position: fixed;
  z-index: 2147483645; /* below the FAB (which is +1), above page content */
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;
  pointer-events: none; /* let clicks pass through gaps to the page */
  /* Keep a tight max-width so the layer doesn't claim the whole bottom row. */
  max-width: 360px;
}
.bp-floating-preview-layer--bottom-right {
  right: 24px;
  bottom: 88px; /* clears the 64px FAB + 16px gap + 8px padding */
}
.bp-floating-preview-layer--bottom-left {
  left: 24px;
  bottom: 88px;
}
.bp-floating-preview {
  position: relative;
  pointer-events: auto;
  background: var(--bp-bg, #fff);
  color: var(--bp-text, #1f2937);
  border: 1px solid var(--bp-border, rgba(0, 0, 0, 0.08));
  border-radius: 14px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);
  width: 320px;
  max-width: calc(100vw - 48px);
  display: flex;
  align-items: stretch;
  overflow: hidden;
  animation: bp-floating-preview-in 220ms ease-out;
  transform-origin: bottom right;
}
.bp-floating-preview--pressed { transform: scale(0.98); transition: transform 80ms ease; }
@keyframes bp-floating-preview-in {
  from { opacity: 0; transform: translateY(8px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
.bp-floating-preview__body {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border: 0;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;
  min-width: 0;
}
.bp-floating-preview__body:hover {
  background: rgba(0, 0, 0, 0.03);
}
.bp-floating-preview__avatar {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--bp-primary, #6366f1);
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  overflow: hidden;
}
.bp-floating-preview__avatar img {
  width: 100%; height: 100%; object-fit: cover;
}
.bp-floating-preview__text { min-width: 0; flex: 1; }
.bp-floating-preview__name {
  font-size: 13px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bp-floating-preview__snippet {
  font-size: 13px;
  line-height: 1.35;
  color: var(--bp-text-muted, #6b7280);
  /* Two-line clamp keeps the card a predictable height. */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
}
.bp-floating-preview__thumb {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  object-fit: cover;
  background: rgba(0, 0, 0, 0.04);
  margin-left: 4px;
}
.bp-floating-preview__close {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 22px;
  height: 22px;
  border: 0;
  background: transparent;
  color: var(--bp-text-muted, #6b7280);
  border-radius: 6px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
.bp-floating-preview__close:hover {
  background: rgba(0, 0, 0, 0.06);
  color: var(--bp-text, #1f2937);
}
`;var He=null,Fn=null,ut=null;function ua(o){He=document.createElement("div"),He.id="baseportal-chat-widget",He.style.cssText="all: initial; display: block; position: static; width: 0; height: 0;",(o.container||document.body).appendChild(He),Fn=He.attachShadow({mode:"open"}),nd();let l=document.createElement("style");l.textContent=da,Fn.appendChild(l);let p=o.channelInfo.theme?.primaryColor||"#1e4dd8",u=pa(p);He.style.setProperty("--bp-primary",p),He.style.setProperty("--bp-primary-contrast",u),ut=document.createElement("div"),ut.className="bp-root",Fn.appendChild(ut),Wi(Gi(ha,{channelInfo:o.channelInfo,apiClient:o.apiClient,realtimeClient:o.realtimeClient,storage:o.storage,events:o.events,visitor:o.visitor,isAuthenticated:o.isAuthenticated,position:o.position,hidden:o.hidden,t:o.t,isOpenRef:o.isOpenRef,setIsOpen:o.setIsOpen,notificationSound:o.notificationSound}),ut)}function tr(){ut&&(Wi(null,ut),ut=null),Fn=null,He&&(He.remove(),He=null)}function nr(o){He&&(He.style.setProperty("--bp-primary",o),He.style.setProperty("--bp-primary-contrast",pa(o)))}function nd(){let o="baseportal-chat-widget-font";if(document.getElementById(o))return;let s=document.createElement("link");s.id=o,s.rel="stylesheet",s.href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;650;700&display=swap",document.head.appendChild(s)}function pa(o){let s=parseInt(o.slice(1,3),16),l=parseInt(o.slice(3,5),16),p=parseInt(o.slice(5,7),16);return(.299*s+.587*l+.114*p)/255>.5?"#000000":"#ffffff"}var Wn=class{constructor(){this.listeners=new Map}on(s,l){this.listeners.has(s)||this.listeners.set(s,new Set),this.listeners.get(s).add(l)}off(s,l){this.listeners.get(s)?.delete(l)}emit(s,...l){this.listeners.get(s)?.forEach(p=>{try{p(...l)}catch(u){console.error(`[BaseportalChat] Error in ${s} handler:`,u)}})}removeAllListeners(){this.listeners.clear()}};var Rt=class{constructor(s,l){this.prefix=l?`bp_chat_${s}_${l}`:`bp_chat_${s}`}get(){try{let s=localStorage.getItem(this.prefix);return s?JSON.parse(s):{}}catch{return{}}}set(s){try{let l=this.get();localStorage.setItem(this.prefix,JSON.stringify({...l,...s}))}catch{}}getConversationId(){return this.get().conversationId}setConversationId(s){this.set({conversationId:s})}clearConversationId(){try{let s=this.get(),{conversationId:l,...p}=s;localStorage.setItem(this.prefix,JSON.stringify(p))}catch{}}getVisitor(){return this.get().visitor}setVisitor(s){this.set({visitor:s})}clear(){try{localStorage.removeItem(this.prefix)}catch{}}};var tn=class{constructor(s){this.events=new Wn;this.channelInfo=null;this.visitor=null;this.isAuthenticated=!1;this.isOpenRef={current:!1};this.mounted=!1;this.currentPath=null;this.patchedHistory=!1;this.historyHandlers=null;this.config={...s,position:s.position||"bottom-right",locale:s.locale||"pt"},wo(!!s.debug),this.hidden=s.hideOnLoad||!1,this.visitor=s.visitor||null,this.isAuthenticated=!!s.visitor?.email,this.apiClient=new _n(this.config.channelToken),this.isAuthenticated&&this.visitor?.email&&this.apiClient.setVisitorIdentity(this.visitor.email,this.visitor.hash,this.visitor.ts),this.storage=new Rt(this.config.channelToken,this.isAuthenticated?this.visitor?.email:void 0),this.realtimeClient=new Cn(this.apiClient),this.visitor||(this.visitor=this.storage.getVisitor()||null),this.init(),this.startPageTracking()}startPageTracking(){if(typeof window>"u"||typeof history>"u"||this.patchedHistory)return;this.patchedHistory=!0;let s=()=>{let m=window.location.pathname;m!==this.currentPath&&(this.currentPath&&this.apiClient.trackPage({path:this.currentPath,action:"leave"}),this.currentPath=m,this.apiClient.trackPage({path:m,query:window.location.search.replace(/^\?/,"")||void 0,referrer:document.referrer||void 0,action:"enter"}))},l=history.pushState,p=history.replaceState;history.pushState=function(...m){let _=l.apply(this,m);return window.dispatchEvent(new Event("bp:locationchange")),_},history.replaceState=function(...m){let _=p.apply(this,m);return window.dispatchEvent(new Event("bp:locationchange")),_};let u=()=>s(),g=()=>{this.currentPath&&this.apiClient.trackPage({path:this.currentPath,action:"leave"})};window.addEventListener("popstate",u),window.addEventListener("bp:locationchange",u),window.addEventListener("pagehide",g),this.historyHandlers={popstate:u,pagehide:g},s()}async init(){try{this.channelInfo=await this.apiClient.getChannelInfo(),this.maybeIdentify(this.visitor);let s=this.config.theme?.primaryColor||this.channelInfo.theme?.primaryColor||"#6366f1",l=js(this.config.locale);ua({channelInfo:this.channelInfo,apiClient:this.apiClient,realtimeClient:this.realtimeClient,storage:this.storage,events:this.events,visitor:this.visitor,isAuthenticated:this.isAuthenticated,position:this.config.position,hidden:this.hidden,t:l,container:this.config.container,isOpenRef:this.isOpenRef,setIsOpen:p=>{this.isOpenRef.current=p},notificationSound:this.config.notificationSound!==!1}),s!=="#6366f1"&&nr(s),this.mounted=!0,this.events.emit("ready")}catch(s){console.error("[BaseportalChat] Failed to initialize:",s)}}open(){this.mounted&&(this.events.emit("_open"),this.events.emit("open"))}close(){this.mounted&&(this.events.emit("_close"),this.events.emit("close"))}toggle(){this.isOpenRef.current?this.close():this.open()}show(){this.hidden=!1,this.events.emit("show")}hide(){this.hidden=!0,this.events.emit("hide")}isOpen(){return this.isOpenRef.current}identify(s){this.visitor=s,this.isAuthenticated=!0,this.apiClient.setVisitorIdentity(s.email,s.hash,s.ts),this.storage=new Rt(this.config.channelToken,s.email),this.storage.setVisitor(s),this.events.emit("identified",s),this.maybeIdentify(s),this.mounted&&this.remount()}async updateVisitor(s){if(!this.visitor)return{ok:!1};this.visitor={...this.visitor,...s},this.storage.setVisitor(this.visitor),s.hash!==void 0&&this.visitor.email&&this.apiClient.setVisitorIdentity(this.visitor.email,s.hash,s.ts);let l=await this.maybeIdentify(this.visitor);return l.ok&&this.events.emit("visitor:updated",this.visitor),l}async maybeIdentify(s){if(!this.channelInfo)return{ok:!1};if(!this.channelInfo.config.identifyEnabled)return{ok:!1};if(!s)return{ok:!1};if(!s.email&&!s.phoneNumber)return{ok:!1};try{let l=await this.apiClient.identify({email:s.email,phoneNumber:s.phoneNumber,name:s.name,metadata:s.metadata,ts:s.ts});return l.ok&&this.events.emit("identify-success",void 0),{ok:!!l.ok}}catch(l){return Ne("identify failed:",l),{ok:!1}}}clearVisitor(){this.visitor=null,this.isAuthenticated=!1,this.apiClient.clearVisitorIdentity(),this.storage.clear(),this.storage=new Rt(this.config.channelToken),this.realtimeClient.unsubscribe(),this.mounted&&this.remount()}sendMessage(s){this.events.emit("_sendMessage",s)}setConversationId(s){this.events.emit("_setConversationId",s)}newConversation(){this.events.emit("_newConversation")}setTheme(s){s.primaryColor&&nr(s.primaryColor)}setPosition(s){this.config.position=s,this.mounted&&this.remount()}setLocale(s){this.config.locale=s,this.mounted&&this.remount()}on(s,l){this.events.on(s,l)}off(s,l){this.events.off(s,l)}destroy(){this.realtimeClient.unsubscribe(),this.events.removeAllListeners(),this.historyHandlers&&typeof window<"u"&&(window.removeEventListener("popstate",this.historyHandlers.popstate),window.removeEventListener("bp:locationchange",this.historyHandlers.popstate),window.removeEventListener("pagehide",this.historyHandlers.pagehide),this.historyHandlers=null),tr(),this.mounted=!1}remount(){tr(),this.mounted=!1,this.init()}};var id=tn;return Zl(rd);})();
/*! Bundled license information:

ably/build/ably.js:
  (*@license Copyright 2015-2022 Ably Real-time Ltd (ably.com)
  
  Ably JavaScript Library v2.21.0
  https://github.com/ably/ably-js
  
  Released under the Apache Licence v2.0*)
*/
(function(){var s=BaseportalChatSDK;if(s&&s.default){var c=window.BaseportalChat;if(c&&c.channelToken){var inst=new s.default(c);Object.keys(inst).forEach(function(k){if(typeof inst[k]==='function')c[k]=inst[k].bind(inst)});window.BaseportalChat=c}}})();
//# sourceMappingURL=index.iife.js.map