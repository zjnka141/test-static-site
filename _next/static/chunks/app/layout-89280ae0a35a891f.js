(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{6011:function(e,t,n){Promise.resolve().then(n.t.bind(n,3994,23)),Promise.resolve().then(n.bind(n,6755)),Promise.resolve().then(n.bind(n,9626))},863:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return isEqualNode},default:function(){return initHeadManager}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function reactElementToDOM(e){let{type:t,props:n}=e,a=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let o=r[e]||e.toLowerCase();"script"===t&&("async"===o||"defer"===o||"noModule"===o)?a[o]=!!n[e]:a.setAttribute(o,n[e])}let{children:o,dangerouslySetInnerHTML:i}=n;return i?a.innerHTML=i.__html||"":o&&(a.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):""),a}function isEqualNode(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function initHeadManager(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,a="";if(r){let{children:e}=r.props;a="string"==typeof e?e:Array.isArray(e)?e.join(""):""}a!==document.title&&(document.title=a),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),a=Number(r.content),o=[];for(let t=0,n=r.previousElementSibling;t<a;t++,n=(null==n?void 0:n.previousElementSibling)||null){var i;(null==n?void 0:null==(i=n.tagName)?void 0:i.toLowerCase())===e&&o.push(n)}let l=t.map(reactElementToDOM).filter(e=>{for(let t=0,n=o.length;t<n;t++){let n=o[t];if(isEqualNode(n,e))return o.splice(t,1),!1}return!0});o.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),l.forEach(e=>n.insertBefore(e,r)),r.content=(a-o.length+l.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2389:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return r}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3994:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return handleClientScriptLoad},initScriptLoader:function(){return initScriptLoader},default:function(){return p}});let r=n(1024),a=n(8533),o=r._(n(4887)),i=a._(n(2265)),l=n(1852),c=n(863),u=n(2389),s=new Map,d=new Set,f=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],insertStylesheets=e=>{if(o.default.preinit){e.forEach(e=>{o.default.preinit(e,{as:"style"})});return}{let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},loadScript=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:a=null,dangerouslySetInnerHTML:o,children:i="",strategy:l="afterInteractive",onError:u,stylesheets:p}=e,m=n||t;if(m&&d.has(m))return;if(s.has(t)){d.add(m),s.get(t).then(r,u);return}let afterLoad=()=>{a&&a(),d.add(m)},y=document.createElement("script"),h=new Promise((e,t)=>{y.addEventListener("load",function(t){e(),r&&r.call(this,t),afterLoad()}),y.addEventListener("error",function(e){t(e)})}).catch(function(e){u&&u(e)});for(let[n,r]of(o?(y.innerHTML=o.__html||"",afterLoad()):i?(y.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",afterLoad()):t&&(y.src=t,s.set(t,h)),Object.entries(e))){if(void 0===r||f.includes(n))continue;let e=c.DOMAttributeNames[n]||n.toLowerCase();y.setAttribute(e,r)}"worker"===l&&y.setAttribute("type","text/partytown"),y.setAttribute("data-nscript",l),p&&insertStylesheets(p),document.body.appendChild(y)};function handleClientScriptLoad(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>loadScript(e))}):loadScript(e)}function initScriptLoader(e){e.forEach(handleClientScriptLoad),function(){let e=[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')];e.forEach(e=>{let t=e.id||e.getAttribute("src");d.add(t)})}()}function Script(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:a=null,strategy:c="afterInteractive",onError:s,stylesheets:f,...p}=e,{updateScripts:m,scripts:y,getIsSsr:h,appDir:_,nonce:b}=(0,i.useContext)(l.HeadManagerContext),g=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=t||n;g.current||(a&&e&&d.has(e)&&a(),g.current=!0)},[a,t,n]);let v=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{!v.current&&("afterInteractive"===c?loadScript(e):"lazyOnload"===c&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>loadScript(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>loadScript(e))})),v.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(m?(y[c]=(y[c]||[]).concat([{id:t,src:n,onLoad:r,onReady:a,onError:s,...p}]),m(y)):h&&h()?d.add(t||n):h&&!h()&&loadScript(e)),_){if(f&&f.forEach(e=>{o.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return n?(o.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"}),i.default.createElement("script",{nonce:b,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n])+")"}})):(p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),i.default.createElement("script",{nonce:b,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...p}])+")"}}));"afterInteractive"===c&&n&&o.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"})}return null}Object.defineProperty(Script,"__nextScript",{value:!0});let p=Script;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6755:function(e,t,n){"use strict";n.r(t);var r=n(4763);let a={translations:{en:{googleAnalytics:{title:"Google Analytics",description:"The analytics service ran by a most definitely non-evil company."},purposes:{analytics:"Analytics",styling:"Styling"}}},services:[{name:"matomo",default:!0,title:"Matomo",purposes:["analytics"],cookies:[[/^_pk_.*$/,"/","localhost"],[/^_mtm_.*$/,"/","localhost"],[/^MATOMO.*$/,"/","localhost"]],callback:function(e,t){"undefined"!=typeof _paq&&(!0==e?(_paq.push(["setConsentGiven"]),_paq.push(["setCookieConsentGiven"])):(_paq.push(["forgetConsentGiven"]),_paq.push(["forgetCookieConsentGiven"])))},required:!1,optOut:!1,onlyOnce:!0}]};window.klaro=r,window.klaroConfig=a,r.setup(a)},9626:function(e,t,n){"use strict";n.r(t),n.d(t,{MatomoTracker:function(){return MatomoTracker}});var r=n(2265);function MatomoTracker(){return(0,r.useEffect)(()=>{window._mtm=window._mtm||[],window._mtm.push({"mtm.startTime":new Date().getTime(),event:"mtm.Start"});var e=document,t=e.createElement("script"),n=e.getElementsByTagName("script")[0];t.async=!0,t.type="text/plain",t.dataset.name="matomo",t.dataset.type="application/javascript",t.dataset.src="https://cdn.matomo.cloud/frolickingganache50466anetlifyapp.matomo.cloud/container_xUi7BchD.js",n.parentNode.insertBefore(t,n)},[]),null}t.default=MatomoTracker}},function(e){e.O(0,[615,971,472,744],function(){return e(e.s=6011)}),_N_E=e.O()}]);