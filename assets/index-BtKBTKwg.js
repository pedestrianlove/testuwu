(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const v of a)if(v.type==="childList")for(const n of v.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(a){const v={};return a.integrity&&(v.integrity=a.integrity),a.referrerPolicy&&(v.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?v.credentials="include":a.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function r(a){if(a.ep)return;a.ep=!0;const v=e(a);fetch(a.href,v)}})();var ye=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ve(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ne={exports:{}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */(function(t){(function(o,e){t.exports?t.exports=e():o.Toastify=e()})(ye,function(o){var e=function(n){return new e.lib.init(n)},r="1.12.0";e.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},e.lib=e.prototype={toastify:r,constructor:e,init:function(n){return n||(n={}),this.options={},this.toastElement=null,this.options.text=n.text||e.defaults.text,this.options.node=n.node||e.defaults.node,this.options.duration=n.duration===0?0:n.duration||e.defaults.duration,this.options.selector=n.selector||e.defaults.selector,this.options.callback=n.callback||e.defaults.callback,this.options.destination=n.destination||e.defaults.destination,this.options.newWindow=n.newWindow||e.defaults.newWindow,this.options.close=n.close||e.defaults.close,this.options.gravity=n.gravity==="bottom"?"toastify-bottom":e.defaults.gravity,this.options.positionLeft=n.positionLeft||e.defaults.positionLeft,this.options.position=n.position||e.defaults.position,this.options.backgroundColor=n.backgroundColor||e.defaults.backgroundColor,this.options.avatar=n.avatar||e.defaults.avatar,this.options.className=n.className||e.defaults.className,this.options.stopOnFocus=n.stopOnFocus===void 0?e.defaults.stopOnFocus:n.stopOnFocus,this.options.onClick=n.onClick||e.defaults.onClick,this.options.offset=n.offset||e.defaults.offset,this.options.escapeMarkup=n.escapeMarkup!==void 0?n.escapeMarkup:e.defaults.escapeMarkup,this.options.ariaLive=n.ariaLive||e.defaults.ariaLive,this.options.style=n.style||e.defaults.style,n.backgroundColor&&(this.options.style.background=n.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var n=document.createElement("div");n.className="toastify on "+this.options.className,this.options.position?n.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(n.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):n.className+=" toastify-right",n.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var b in this.options.style)n.style[b]=this.options.style[b];if(this.options.ariaLive&&n.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)n.appendChild(this.options.node);else if(this.options.escapeMarkup?n.innerText=this.options.text:n.innerHTML=this.options.text,this.options.avatar!==""){var N=document.createElement("img");N.src=this.options.avatar,N.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?n.appendChild(N):n.insertAdjacentElement("afterbegin",N)}if(this.options.close===!0){var C=document.createElement("button");C.type="button",C.setAttribute("aria-label","Close"),C.className="toast-close",C.innerHTML="&#10006;",C.addEventListener("click",(function(j){j.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var w=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&w>360?n.insertAdjacentElement("afterbegin",C):n.appendChild(C)}if(this.options.stopOnFocus&&this.options.duration>0){var x=this;n.addEventListener("mouseover",function(j){window.clearTimeout(n.timeOutValue)}),n.addEventListener("mouseleave",function(){n.timeOutValue=window.setTimeout(function(){x.removeElement(n)},x.options.duration)})}if(typeof this.options.destination<"u"&&n.addEventListener("click",(function(j){j.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&n.addEventListener("click",(function(j){j.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var F=a("x",this.options),D=a("y",this.options),U=this.options.position=="left"?F:"-"+F,z=this.options.gravity=="toastify-top"?D:"-"+D;n.style.transform="translate("+U+","+z+")"}return n},showToast:function(){this.toastElement=this.buildToast();var n;if(typeof this.options.selector=="string"?n=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?n=this.options.selector:n=document.body,!n)throw"Root element is not defined";var b=e.defaults.oldestFirst?n.firstChild:n.lastChild;return n.insertBefore(this.toastElement,b),e.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(n){n.className=n.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),n.parentNode&&n.parentNode.removeChild(n),this.options.callback.call(n),e.reposition()}).bind(this),400)}},e.reposition=function(){for(var n={top:15,bottom:15},b={top:15,bottom:15},N={top:15,bottom:15},C=document.getElementsByClassName("toastify"),w,x=0;x<C.length;x++){v(C[x],"toastify-top")===!0?w="toastify-top":w="toastify-bottom";var F=C[x].offsetHeight;w=w.substr(9,w.length-1);var D=15,U=window.innerWidth>0?window.innerWidth:screen.width;U<=360?(C[x].style[w]=N[w]+"px",N[w]+=F+D):v(C[x],"toastify-left")===!0?(C[x].style[w]=n[w]+"px",n[w]+=F+D):(C[x].style[w]=b[w]+"px",b[w]+=F+D)}return this};function a(n,b){return b.offset[n]?isNaN(b.offset[n])?b.offset[n]:b.offset[n]+"px":"0px"}function v(n,b){return!n||typeof b!="string"?!1:!!(n.className&&n.className.trim().split(/\s+/gi).indexOf(b)>-1)}return e.lib.init.prototype=e.lib,e})})(ne);var be=ne.exports;const V=ve(be);var oe={exports:{}};(function(t){(function(o){var e=he(),r=me(),a=pe(),v=ge(),n={imagePlaceholder:void 0,cacheBust:!1},b={toSvg:N,toPng:w,toJpeg:x,toBlob:F,toPixelData:C,impl:{fontFaces:a,images:v,util:e,inliner:r,options:{}}};t.exports=b;function N(c,s){return s=s||{},D(s),Promise.resolve(c).then(function(d){return z(d,s.filter,!0)}).then(j).then(de).then(l).then(function(d){return fe(d,s.width||e.width(c),s.height||e.height(c))});function l(d){return s.bgcolor&&(d.style.backgroundColor=s.bgcolor),s.width&&(d.style.width=s.width+"px"),s.height&&(d.style.height=s.height+"px"),s.style&&Object.keys(s.style).forEach(function(p){d.style[p]=s.style[p]}),d}}function C(c,s){return U(c,s||{}).then(function(l){return l.getContext("2d").getImageData(0,0,e.width(c),e.height(c)).data})}function w(c,s){return U(c,s||{}).then(function(l){return l.toDataURL()})}function x(c,s){return s=s||{},U(c,s).then(function(l){return l.toDataURL("image/jpeg",s.quality||1)})}function F(c,s){return U(c,s||{}).then(e.canvasToBlob)}function D(c){typeof c.imagePlaceholder>"u"?b.impl.options.imagePlaceholder=n.imagePlaceholder:b.impl.options.imagePlaceholder=c.imagePlaceholder,typeof c.cacheBust>"u"?b.impl.options.cacheBust=n.cacheBust:b.impl.options.cacheBust=c.cacheBust}function U(c,s){return N(c,s).then(e.makeImage).then(e.delay(100)).then(function(d){var p=l(c);return p.getContext("2d").drawImage(d,0,0),p});function l(d){var p=document.createElement("canvas");if(p.width=s.width||e.width(d),p.height=s.height||e.height(d),s.bgcolor){var m=p.getContext("2d");m.fillStyle=s.bgcolor,m.fillRect(0,0,p.width,p.height)}return p}}function z(c,s,l){if(!l&&s&&!s(c))return Promise.resolve();return Promise.resolve(c).then(d).then(function(u){return p(c,u,s)}).then(function(u){return m(c,u)});function d(u){return u instanceof HTMLCanvasElement?e.makeImage(u.toDataURL()):u.cloneNode(!1)}function p(u,f,S){var B=u.childNodes;if(B.length===0)return Promise.resolve(f);return E(f,e.asArray(B),S).then(function(){return f});function E(H,L,P){var k=Promise.resolve();return L.forEach(function(_){k=k.then(function(){return z(_,P)}).then(function(A){A&&H.appendChild(A)})}),k}}function m(u,f){if(!(f instanceof Element))return f;return Promise.resolve().then(S).then(B).then(E).then(H).then(function(){return f});function S(){L(window.getComputedStyle(u),f.style);function L(P,k){P.cssText?k.cssText=P.cssText:_(P,k);function _(A,M){e.asArray(A).forEach(function(i){M.setProperty(i,A.getPropertyValue(i),A.getPropertyPriority(i))})}}}function B(){[":before",":after"].forEach(function(P){L(P)});function L(P){var k=window.getComputedStyle(u,P),_=k.getPropertyValue("content");if(_===""||_==="none")return;var A=e.uid();f.className=f.className+" "+A;var M=document.createElement("style");M.appendChild(i(A,P,k)),f.appendChild(M);function i(h,y,g){var T="."+h+":"+y,I=g.cssText?Y(g):Q(g);return document.createTextNode(T+"{"+I+"}");function Y($){var R=$.getPropertyValue("content");return $.cssText+" content: "+R+";"}function Q($){return e.asArray($).map(R).join("; ")+";";function R(W){return W+": "+$.getPropertyValue(W)+($.getPropertyPriority(W)?" !important":"")}}}}}function E(){u instanceof HTMLTextAreaElement&&(f.innerHTML=u.value),u instanceof HTMLInputElement&&f.setAttribute("value",u.value)}function H(){f instanceof SVGElement&&(f.setAttribute("xmlns","http://www.w3.org/2000/svg"),f instanceof SVGRectElement&&["width","height"].forEach(function(L){var P=f.getAttribute(L);P&&f.style.setProperty(L,P)}))}}}function j(c){return a.resolveAll().then(function(s){var l=document.createElement("style");return c.appendChild(l),l.appendChild(document.createTextNode(s)),c})}function de(c){return v.inlineAll(c).then(function(){return c})}function fe(c,s,l){return Promise.resolve(c).then(function(d){return d.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),new XMLSerializer().serializeToString(d)}).then(e.escapeXhtml).then(function(d){return'<foreignObject x="0" y="0" width="100%" height="100%">'+d+"</foreignObject>"}).then(function(d){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+s+'" height="'+l+'">'+d+"</svg>"}).then(function(d){return"data:image/svg+xml;charset=utf-8,"+d})}function he(){return{escape:H,parseExtension:s,mimeType:l,dataAsUrl:E,isDataUrl:d,canvasToBlob:m,resolveUrl:u,getAndEncode:B,uid:f(),delay:L,asArray:P,escapeXhtml:k,makeImage:S,width:_,height:A};function c(){var i="application/font-woff",h="image/jpeg";return{woff:i,woff2:i,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:h,jpeg:h,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}function s(i){var h=/\.([^\.\/]*?)$/g.exec(i);return h?h[1]:""}function l(i){var h=s(i).toLowerCase();return c()[h]||""}function d(i){return i.search(/^(data:)/)!==-1}function p(i){return new Promise(function(h){for(var y=window.atob(i.toDataURL().split(",")[1]),g=y.length,T=new Uint8Array(g),I=0;I<g;I++)T[I]=y.charCodeAt(I);h(new Blob([T],{type:"image/png"}))})}function m(i){return i.toBlob?new Promise(function(h){i.toBlob(h)}):p(i)}function u(i,h){var y=document.implementation.createHTMLDocument(),g=y.createElement("base");y.head.appendChild(g);var T=y.createElement("a");return y.body.appendChild(T),g.href=h,T.href=i,T.href}function f(){var i=0;return function(){return"u"+h()+i++;function h(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}}}function S(i){return new Promise(function(h,y){var g=new Image;g.onload=function(){h(g)},g.onerror=y,g.src=i})}function B(i){var h=3e4;return b.impl.options.cacheBust&&(i+=(/\?/.test(i)?"&":"?")+new Date().getTime()),new Promise(function(y){var g=new XMLHttpRequest;g.onreadystatechange=Y,g.ontimeout=Q,g.responseType="blob",g.timeout=h,g.open("GET",i,!0),g.send();var T;if(b.impl.options.imagePlaceholder){var I=b.impl.options.imagePlaceholder.split(/,/);I&&I[1]&&(T=I[1])}function Y(){if(g.readyState===4){if(g.status!==200){T?y(T):$("cannot fetch resource: "+i+", status: "+g.status);return}var R=new FileReader;R.onloadend=function(){var W=R.result.split(/,/)[1];y(W)},R.readAsDataURL(g.response)}}function Q(){T?y(T):$("timeout of "+h+"ms occured while fetching resource: "+i)}function $(R){console.error(R),y("")}})}function E(i,h){return"data:"+h+";base64,"+i}function H(i){return i.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}function L(i){return function(h){return new Promise(function(y){setTimeout(function(){y(h)},i)})}}function P(i){for(var h=[],y=i.length,g=0;g<y;g++)h.push(i[g]);return h}function k(i){return i.replace(/#/g,"%23").replace(/\n/g,"%0A")}function _(i){var h=M(i,"border-left-width"),y=M(i,"border-right-width");return i.scrollWidth+h+y}function A(i){var h=M(i,"border-top-width"),y=M(i,"border-bottom-width");return i.scrollHeight+h+y}function M(i,h){var y=window.getComputedStyle(i).getPropertyValue(h);return parseFloat(y.replace("px",""))}}function me(){var c=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:p,shouldProcess:s,impl:{readUrls:l,inline:d}};function s(m){return m.search(c)!==-1}function l(m){for(var u=[],f;(f=c.exec(m))!==null;)u.push(f[1]);return u.filter(function(S){return!e.isDataUrl(S)})}function d(m,u,f,S){return Promise.resolve(u).then(function(E){return f?e.resolveUrl(E,f):E}).then(S||e.getAndEncode).then(function(E){return e.dataAsUrl(E,e.mimeType(u))}).then(function(E){return m.replace(B(u),"$1"+E+"$3")});function B(E){return new RegExp(`(url\\(['"]?)(`+e.escape(E)+`)(['"]?\\))`,"g")}}function p(m,u,f){if(S())return Promise.resolve(m);return Promise.resolve(m).then(l).then(function(B){var E=Promise.resolve(m);return B.forEach(function(H){E=E.then(function(L){return d(L,H,u,f)})}),E});function S(){return!s(m)}}}function pe(){return{resolveAll:c,impl:{readAll:s}};function c(){return s().then(function(l){return Promise.all(l.map(function(d){return d.resolve()}))}).then(function(l){return l.join(`
`)})}function s(){return Promise.resolve(e.asArray(document.styleSheets)).then(d).then(l).then(function(m){return m.map(p)});function l(m){return m.filter(function(u){return u.type===CSSRule.FONT_FACE_RULE}).filter(function(u){return r.shouldProcess(u.style.getPropertyValue("src"))})}function d(m){var u=[];return m.forEach(function(f){try{e.asArray(f.cssRules||[]).forEach(u.push.bind(u))}catch(S){console.log("Error while reading CSS rules from "+f.href,S.toString())}}),u}function p(m){return{resolve:function(){var f=(m.parentStyleSheet||{}).href;return r.inlineAll(m.cssText,f)},src:function(){return m.style.getPropertyValue("src")}}}}}function ge(){return{inlineAll:s,impl:{newImage:c}};function c(l){return{inline:d};function d(p){return e.isDataUrl(l.src)?Promise.resolve():Promise.resolve(l.src).then(p||e.getAndEncode).then(function(m){return e.dataAsUrl(m,e.mimeType(l.src))}).then(function(m){return new Promise(function(u,f){l.onload=u,l.onerror=f,l.src=m})})}}function s(l){if(!(l instanceof Element))return Promise.resolve(l);return d(l).then(function(){return l instanceof HTMLImageElement?c(l).inline():Promise.all(e.asArray(l.childNodes).map(function(p){return s(p)}))});function d(p){var m=p.style.getPropertyValue("background");return m?r.inlineAll(m).then(function(u){p.style.setProperty("background",u,p.style.getPropertyPriority("background"))}).then(function(){return p}):Promise.resolve(p)}}}})()})(oe);var we=oe.exports;const G="113",X="1";document.getElementById("semester-tag").innerHTML=`${G} 學年度 第 ${X} 學期`;document.getElementById("semester-tag").href=`https://course.thu.edu.tw/view-dept/${G}/${X}`;const re={A:"7:10 ~ 8:00",1:"8:10 ~ 9:00",2:"9:10 ~ 10:00",3:"10:20 ~ 11:10",4:"11:20 ~ 12:10",B:"12:10 ~ 13:00",5:"13:10 ~ 14:00",6:"14:10 ~ 15:00",7:"15:20 ~ 16:10",8:"16:20 ~ 17:10",9:"17:20 ~ 18:10",10:"18:20 ~ 19:10",11:"19:20 ~ 20:10",12:"20:20 ~ 21:10",13:"21:20 ~ 22:10"};function Ee(t,o){if(Number.isFinite(t)&&Number.isFinite(o))return parseFloat(t)-parseFloat(o);{let e=t,r=o;return t==="A"&&(e=0),o==="A"&&(r=0),t==="B"&&(e=4.5),o==="B"&&(r=4.5),parseFloat(e)-parseFloat(r)}}const ie=Object.keys(re).sort(Ee),Ce={一:1,二:2,三:3,四:4,五:5,六:6,日:7},se=`${location.protocol}//${location.host}${location.pathname}`;let O={},K={},q={},J="0";function Pe(t,o=36){return[...t.toString()].reduce((e,r)=>e*BigInt(o)+BigInt(parseInt(r,o)),BigInt(0))}function Te(t){const o=t.length%4;if(o!==0){const e=4-o;t="0".repeat(e)+t}return t}function xe(){const t=new URLSearchParams(location.search).get("share");return Te(Pe(t).toString()).match(/.{1,4}/g).reduce((e,r)=>(e[r]=!0,e),{})}function Se(){return JSON.parse(localStorage.getItem("selectedCourse"))||{}}const ae=()=>Object.keys(q).reduce((t,o)=>+O[o].credit+t,0);let ce=!1;location.search.includes("share=")&&(ce=!0,document.querySelector(".sidebar").classList.add("is-hidden"),document.querySelector("#import").classList.remove("is-hidden"),document.querySelector(".loading").classList.remove("is-hidden"));ie.forEach(t=>{const o=document.createElement("div");o.textContent=`${t} / ${re[t]}`,document.querySelector(".time-interval").appendChild(o)});ie.forEach(t=>{for(let o=1;o<=7;++o){const e=document.createElement("div");e.id=`${o}${t}`,document.querySelector(".content").appendChild(e)}});fetch(`course-data/${G}${X}-dep-data.json`).then(t=>t.json()).then(t=>{K=t;const o=Object.entries(K).reduce((e,[r,a])=>{const v=a.college;return e[v]||(e[v]=[]),e[v].push({key:r,value:a}),e},{});Object.keys(o).forEach(e=>{const r=document.createElement("optgroup");r.label=e,o[e].forEach(a=>{const v=new Option(a.value.name,a.key);r.appendChild(v)}),document.querySelector("#department-dropdown").appendChild(r)})});fetch(`course-data/${G}${X}-data.json`).then(t=>t.json()).then(t=>{O=t,q=ce?xe():Se(),document.querySelector("#search-bar").disabled=!1,document.querySelector("#search-bar").placeholder="課號 / 課名 / 老師 / 備註",document.querySelector(".loading").classList.add("is-hidden");for(const o in q){const e=O[o];ue(e),Z(e)}document.querySelector(".credits").textContent=`${ae()} 學分`});function ee(t){return t.closest(".course,.period").dataset.id}function Le(t){return t.closest("select").value}document.addEventListener("click",function({target:t}){t.classList.contains("toggle-course")&&Ae(ee(t)),t.classList.contains("modal-launcher")&&ke(ee(t))});document.addEventListener("mouseover",function(t){if(t.target.matches(".result .course, .result .course *")){const o=ee(t.target);te(O[o].time).forEach(r=>{const a=document.getElementById(r);a.childElementCount&&a.firstElementChild.classList.add("has-background-danger","has-text-white"),a.classList.add("has-background-info-light")})}});document.addEventListener("mouseout",function(t){t.target.matches(".result .course, .result .course *")&&document.querySelectorAll('.timetable>.content>[class="has-background-info-light"]').forEach(o=>{var e;o.className="",(e=o.firstElementChild)==null||e.classList.remove("has-background-danger","has-text-white")})});function ke(t){const o=document.querySelector(".modal");o.classList.add("is-active");const e=O[t],r=o.querySelectorAll("dd");r[0].textContent=e.id,r[1].textContent=K[e.department_id].name,r[2].textContent=e.credit,r[3].textContent=e.teacher,r[4].textContent=e.time,r[5].textContent=e.brief,r[6].textContent=e.description,r[7].querySelector("tbody").innerHTML="",e.grading.forEach(a=>{r[7].querySelector("tbody").innerHTML+=`
    	<tr>
    	<td>${a.target}</td>
    	<td>${a.ratio}</td>
    	<td>${a.description}</td>
	</tr>
    	`}),o.querySelector(".card-header-title").textContent=e.type+"-"+e.name,o.querySelector("#outline").href=e.url}function Z(t,o=!1){const e=document.getElementById("courseTemplate");e.content.getElementById("id-tag").textContent=t.id;const r=e.content.getElementById("type-tag");r.textContent=t.type,r.className=t.type==="必修"?"tag is-rounded is-danger":"tag is-rounded is-white",r.className=t.type==="必選"?"tag is-rounded is-info":r.className,e.content.getElementById("name").textContent=t.name,e.content.getElementById("detail").textContent=`${t.teacher}・${+t.credit} 學分`,e.content.querySelector(".course").dataset.id=t.id,e.content.querySelector(".toggle-course").classList.toggle("is-selected",t.id in q);const a=document.importNode(e.content,!0);document.querySelector(o?".result":".selected").appendChild(a)}function le(t){if(!t&&!J)return[];const o=RegExp(t,"i");return Object.values(O).filter(r=>J==="0"?!0:r.department_id===J).filter(r=>r.id.match(o)||r.teacher.match(o)||r.name.match(o)||r.brief.match(o)||K[r.department_id].name.match(o)).slice(0,50)}function Ae(t){const o=document.querySelector(`.course[data-id="${t}"] .toggle-course`);if(t in q)delete q[t],document.querySelector(`.selected [data-id="${t}"]`).remove(),document.querySelectorAll(`.period[data-id="${t}"]`).forEach(e=>e.remove()),o==null||o.classList.remove("is-selected");else{if(O[t].time==="無資料"){V({text:"此課程無上課時間資料，無法加入課表",backgroundColor:"linear-gradient(147deg, #f71735 0%, #db3445 74%)",close:!0,duration:3e3}).showToast();return}if(te(O[t].time).some(a=>document.getElementById(a).childElementCount)){V({text:"和目前課程衝堂了欸",backgroundColor:"linear-gradient(147deg, #f71735 0%, #db3445 74%)",close:!0,duration:3e3}).showToast();return}q[t]=!0,Z(O[t]),ue(O[t]),o==null||o.classList.add("is-selected")}localStorage.setItem("selectedCourse",JSON.stringify(q)),document.querySelector(".credits").textContent=`${ae()} 學分`}function te(t){const o=t.match(/[\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u65E5]\/(([0-9]+)|([AB]))(\,(([0-9]+)|([AB])))*/g);return o?o.map(function(e){return e.split("/")[1].split(",").map(a=>Ce[e[0]]+a)}).flat():[]}function ue(t){te(t.time).forEach(e=>document.getElementById(e).innerHTML=`
    <div data-id="${t.id}" class="period modal-launcher">
        <span>${t.name}</span>
    </div>`)}document.querySelector("#search-bar").oninput=t=>{document.querySelector(".result").innerHTML="";const o=t.target.value.trim();le(o).forEach(r=>Z(r,!0))};document.querySelector("#department-dropdown").onchange=function({target:t}){J=Le(t);const o=document.querySelector("#search-bar").value.trim();document.querySelector(".result").innerHTML="",le(o).forEach(r=>Z(r,!0))};document.getElementById("import").onclick=()=>{confirm("接下來將會覆蓋你的目前課表ㄛ，確定嗎？")&&(localStorage.setItem("selectedCourse",JSON.stringify(q)),V({text:"匯入完成！點此前往選課模擬",destination:se,close:!0,duration:3e3}).showToast())};document.getElementById("copy-link").onclick=()=>{const t=BigInt(Object.keys(q).join("")).toString(36),o=`${se}?share=${t}`,e=document.createElement("div");e.textContent=o,document.body.appendChild(e);const r=document.createRange();r.selectNode(e);const a=window.getSelection();a.removeAllRanges(),a.addRange(r);try{document.execCommand("copy"),V({text:"複製好了！點此可直接前往",style:{background:"linear-gradient(147deg, #00d2ff 0%, #3a7bd5 74%)"},destination:o,newWindow:!0,close:!0,duration:3e3}).showToast()}catch{console.log("Oops, unable to copy")}document.body.removeChild(e)};document.getElementById("download-link").onclick=()=>{document.querySelectorAll("#main-table").forEach(t=>{t.classList.add("bg-white")}),document.querySelectorAll(".btn-outline-light").forEach(t=>{t.classList.remove("btn-outline-light"),t.classList.add("btn-outline-dark")}),setTimeout(function(){const t=document.getElementById("main-table");we.toPng(t).then(function(o){const e=document.createElement("a");e.href=o,e.download=G+"-"+X+"_timetable.png",document.body.appendChild(e),e.click(),document.body.removeChild(e)})},500)};document.getElementById("clear-table").onclick=()=>{const o=document.getElementsByClassName("selected course-list")[0].getElementsByClassName("toggle-course is-selected");if(o.length===0)V({text:"您尚未選課，無法清空課表",style:{background:"linear-gradient(147deg, #f71735 0%, #db3445 74%)"},close:!0,duration:3e3}).showToast();else{let e=o.length;for(;e-- >0;)o[0].click();V({text:"已清空課表!",style:{background:"linear-gradient(147deg, #00d2ff 0%, #3a7bd5 74%)"},close:!0,duration:3e3}).showToast()}};document.querySelector(".modal-background").onclick=document.querySelector(".card-header-icon").onclick=()=>document.querySelector(".modal").classList.remove("is-active");
