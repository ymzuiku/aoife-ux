var at=Object.defineProperty,rt=Object.defineProperties;var st=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var be=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable;var ye=(e,t,n)=>t in e?at(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))be.call(t,n)&&ye(e,n,t[n]);if(q)for(var n of q(t))ge.call(t,n)&&ye(e,n,t[n]);return e},ne=(e,t)=>rt(e,st(t));var y=(e,t)=>{var n={};for(var o in e)be.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&q)for(var o of q(e))t.indexOf(o)<0&&ge.call(e,o)&&(n[o]=e[o]);return n};var C=(e,t,n)=>new Promise((o,a)=>{var i=s=>{try{r(n.next(s))}catch(c){a(c)}},l=s=>{try{r(n.throw(s))}catch(c){a(c)}},r=s=>s.done?o(s.value):Promise.resolve(s.value).then(i,l);r((n=n.apply(e,t)).next())});var xe={childList:!0,subtree:!0},I=new WeakMap,_=new WeakMap,F=new WeakMap;function G(e,t){if(I.has(e)){I.get(e).push(t);return}I.set(e,[t]);let n=new MutationObserver(o=>{if(document.contains(e)){n.disconnect();let a=I.get(e);a&&a.forEach(i=>i(e)),I.delete(e)}});n.observe(document,xe)}function oe(e,t){if(_.has(e)){_.get(e).push(t);return}_.set(e,[t]),G(e,()=>{let n=new MutationObserver(()=>{if(!document.contains(e)){n.disconnect();let o=_.get(e);o&&o.forEach(a=>a(e)),_.delete(e)}});n.observe(document,xe)})}var he=(e,t,{minHeight:n="50px",root:o}={})=>{if(F.has(e)){F.get(e).push(t);return}F.set(e,[t]),G(e,()=>{if(e.style.minHeight||(e.style.minHeight=n),!e.getAttribute("data-lazy")){e.setAttribute("data-lazy","1");let a=new IntersectionObserver(i=>{i.forEach(l=>{if(e.setAttribute("data-lazy","2"),l.isIntersecting){a.disconnect();let r=F.get(e);r&&r.forEach(s=>s(l)),F.delete(e)}})},{root:o,rootMargin:window.innerHeight/2+"px"});a.observe(e),oe(e,()=>{a.disconnect()})}})};function j(e){let t=Object.prototype.toString.call(e);if(t==="[object String]"||t==="[object Number]")return!0}function U(e){return Object.prototype.toString.call(e).indexOf("lement")>0}var ve=e=>{let t=[];return e.forEach(n=>{Array.isArray(n)?t=t.concat(n):t.push(n)}),t};function it(e){return!!(e.__isSvg||e.tagName==="svg"||e.ownerSVGElement)}function we(e,t){return!!(ae[t]||/-/.test(t)||it(e))}var ae={autofocus:!0,role:!0,viewBox:!0};function ke(e){let t=[];if(e)if(typeof e=="string"){let n="",o=e.split(", ");o.forEach((a,i)=>{a=a.trim(),i===o.length-1?n+=`${a}[bind-state], ${a} [bind-state]`:n+=`${a}[bind-state], ${a} [bind-state],`}),t=document.body.querySelectorAll(n)}else Object.prototype.toString.call(e)==="[object Array]"?(t=[...e],e.forEach(n=>{t.push(...n.querySelectorAll("*"))})):(t=[e],t.push(...e.querySelectorAll("*")));return t}var Ee=(e,t)=>{e||(e="*");let n=ke(t),o=ke(e),a=o.length;for(let i=0;i<a;i++){let l=o[i];if(l.__bindState&&document.body.contains(l)){if(n.length){let r=n.length,s=!1;for(let c=0;c<r;c++){let f=n[c];if(f===l||f.contains(l)){s=!0;break}}if(s)continue}l.__bindState.forEach(r=>{r()})}}},P=(e,t,n)=>{if(t&&/^on/.test(t)){e[t]=n;return}if(typeof n!="function"){we(e,t)?e.setAttribute(t,n):typeof n=="object"?Object.assign(e[t],n):e[t]=n;return}e.__bindState||(e.setAttribute("bind-state",""),e.__bindState=new Map);let o;t===null?o=()=>n(e):we(e,t)?o=()=>{Promise.resolve(n(e)).then(a=>{e.getAttribute(t)!==a&&e.setAttribute(t,a)})}:o=()=>{Promise.resolve(n(e)).then(a=>{typeof a=="object"?Object.assign(e[t],a):e[t]!==a&&(e[t]=a)})},o(),e.__bindState.set(t,o)};function re(e,t){e.isEqualNode(t)||e.replaceWith(t)}function $e(e,t){if(!Array.isArray(e))return;e.filter(o=>o!=null).forEach((o,a)=>{if(j(o)){let i=document.createTextNode(o);i.key=a,t.append(i)}else if(typeof o=="function"){let i=document.createTextNode("");t.append(i);let l=()=>C(this,null,function*(){let r=yield Promise.resolve(o());if(j(r)){let s=document.createTextNode(r);s.key=a;let c=!1;return t.childNodes.forEach(f=>{if(f.key===s.key){if(f.textContent===s.textContent){c=!0;return}re(f,s),c=!0}}),c||t.insertBefore(s,i),a}else if(Array.isArray(r)){let s={},c={};r.forEach((p,m)=>{p.___forList=a,p.key||(p.key=`fn(${a})-list(${m})`),c[p.key]=p});let f=[];return t.childNodes.forEach(p=>{p.___forList===a&&(c[p.key]?s[p.key]=p:f.push(p))}),f.forEach(p=>{p.remove()}),r.forEach(p=>{let m=s[p.key];m?m.isEqualNode(p)||re(m,p):p!==!1&&t.insertBefore(p,i)}),"for-list-"+a}else if(r){r.key||(r.key=a);let s=!1;return t.childNodes.forEach(c=>{c.key===r.key&&(re(c,r),s=!0)}),s||t.insertBefore(r,i),r.key}});l(),P(t,null,l)}else if(U(o))t.append(o);else if(o!==!1)if(Object.prototype.toString.call(o)==="[object Array]"){let i=[];for(let l=0;l<o.length;l++){let r=o[l];r!==!1&&i.push(r)}t.append(...i)}else t.appendChild(o)})}var Ce=new Set(["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"]);var lt={class:1,onUpdate:1,onAppend:1,onRemove:1,onEntry:1,children:1,length:1},ct="http://www.w3.org/2000/svg",L=(e,t,...n)=>{let o={};if(t&&(typeof t=="function"||j(t)||U(t)?n=[t,...n]:Array.isArray(t)?n=[...t,...n]:o=t),n=ve(n),(!o.children||!o.children.length)&&(o.children=[...n]),o.class&&(o.className=o.class,delete o.class),Array.isArray(e))return L(...e);let a;if(typeof e=="function"){if(a=e(o),a&&typeof a.then=="function"){let i=document.createElement("span");return i.setAttribute("promise-span",""),a.then(l=>{i.replaceWith(l)}),i}return a}if(typeof e=="string")if(e==="template"&&o.children){let i="";o.children.forEach(l=>{(typeof l=="string"||typeof l=="number")&&(i+=l)}),a=document.createElement("template"),a.innerHTML=i}else Ce.has(e)?(a=document.createElementNS(ct,e),a.__isSvg=!0):a=document.createElement(e);else U(e)&&(a=e);return Object.keys(o).forEach(i=>{lt[i]||P(a,i,o[i])}),$e(o.children,a),typeof o.onUpdate=="function"&&P(a,null,o.onUpdate),typeof o.onAppend=="function"&&G(a,o.onAppend),typeof o.onRemove=="function"&&oe(a,o.onRemove),typeof o.onEntry=="function"&&he(a,o.onEntry),a},pt=e=>e&&e.children?L("span",{style:{all:"unset"}},...e.children):"";L.jsxFrag=pt;L.next=Ee;L.attributeKeys=ae;window.aoife=L;var v={compMap:{"":{}},classNameCache:{}};var S=navigator.userAgent.toLocaleLowerCase(),se=/(?:android)/.test(S),Se=/(?:firefox)/.test(S),dt=/(?:chrome|crios)/.test(S),ft=/(safari)/.test(S),Te=/(?:ipad|playbook)/.test(S)||se&&!/(?:mobile)/.test(S)||Se&&/(?:tablet)/.test(S),Ne=/(?:iphone)/.test(S)&&!Te,Ae=!Ne&&!se,Me=!Ae,mt=Me&&/(micromessenger|wechat)/.test(S),O={android:se,firefox:Se,chrome:dt,tablet:Te,ios:Ne,wechat:mt,desktop:Ae,phone:Me,safari:ft};function ut(e,t,n){e.comp=t[n],e.comp?e.compName=n:e.name=n}function bt(e,t){W[t]?(e.media=W[t],e.mediaName=t):O[t]!==void 0&&(e.media=`@media screen and (min-width: ${O[t]?"0px":"9999px"})`,e.mediaName=t)}var W={all:"",print:"@media print",speech:"@media speech",fine:"@media (pointer: fine)",dark:"@media (prefers-color-scheme: dark)",xs:"@media screen and (min-width: 480px)",sm:"@media screen and (min-width: 640px)",md:"@media screen and (min-width: 768px)",lg:"@media screen and (min-width: 1024px)",xl:"@media screen and (min-width: 1280px)",xxl:"@media screen and (min-width: 1536px)","in-xs":"@media screen (max-width:479px) and (min-width: 0px)","in-sm":"@media screen (max-width:767px) and (min-width: 479px)","in-md":"@media screen (max-width:1023px) and (min-width: 767px)","in-lg":"@media screen (max-width:1279px) and (min-width: 1023px)","in-xl":"@media screen (max-width:1535px) and (min-width: 1279px)","in-xxl":"@media screen (max-width:9999px) and (min-width: 1535px)"},ie={};function gt(e,t){!t||(e.comp&&(t=t.replace(/\((.*?)\)/g,n=>n.replace(/\,/g,"^^^"))),e.value=t)}function T(e,t){let n=e+"_$$_"+t,o=ie[n];if(o)return o;let a={comp:void 0,compName:"",pesudo:"",pesudoName:"",media:"",mediaName:"",name:"",value:"",query:""};if(!t||t[0]==="/"&&t[1]==="/")return ie[n]=a,a;let i=v.compMap[e]||{},l=t.split(":");bt(a,l[0]),a.mediaName&&l.shift();let r=l.length,s=l[r-1],c=r>=2?l[r-2]:"",f=[...l];return i[s]?(a.comp=i[s],a.compName=s,f.pop()):c?(ut(a,i,c),gt(a,s),f.pop(),f.pop()):(a.name=s,f.pop()),a.pesudo=f.join(":"),a.pesudoName=a.pesudo,ie[n]=a,a}var yt={"(":1,";":1,":":1,"=":1},X=({css:e,name:t="",media:n="",mediaName:o="",pesudo:a="",group:i=""})=>{if(!e)return;let l=`^sty_${e}_${t}_${n}_${a}_${i}`;if(v.classNameCache[l])return;v.classNameCache[l]=!0;let r=T(i,e),s=r.value;if(!s)return;let c=s[s.length-1];if(yt[c])return;if(c==="!"&&(s=s.replace(/(!$)/," !important")),r.media&&(n=r.media),r.mediaName&&(o=r.mediaName),r.pesudo&&(a=r.pesudo),/\~/.test(s)){let x=s.split("~").map(g=>g?`"${g}"`:"").join(" ");s=" "+x,s+=";"}s=s.replace(/calc\((.*?)\)/g,d=>(d=d.replace(/(-|\+|\*|\/)/g,x=>" "+x+" "),d)),s=s.replace(/\|/g," "),s=s.replace(/var\((.*?)\)/g,d=>d.replace(/(var\(|\))/g,"")),s=s.replace(/--([a-zA-Z0-9_-]*)/g,d=>`var(${d})`),s=s.replace(/\^\^\^/g,",");let f=(t||e).replace(/(\:|#|\*|!|,|\.|>|<|@|~|%|\||\$|\{|\}|\[|\]|\(|\)|\+|\*|\/)/g,d=>"\\"+d),p=i?`.\\*${i}`:"";/^(\w|\*)/.test(a)&&(a=" "+a),a=a.replace(/\|/g," ");let m=document.createElement("style");if(n?m.textContent=`${n} {.${f}${p}${a}{${r.name}:${s}}}`:m.textContent=`.${f}${p}${a}{${r.name}:${s}}`,m.setAttribute("flavor-css",""),document.head.append(m),o){let d=document.createElement("style");d.textContent=`.media-${o} .${f}${p}${a}{${r.name}:${s}}`,d.setAttribute("flavor-css",""),document.head.append(d)}};var le={},K=e=>{let t=le[e];if(t)return t;let n=[];e=e.replace(/\n/g," ");let o=[],a=e.match(/\*(.\w?)\s/g),i={};if(a)a.forEach(s=>{if(s){let c=s.replace(/(\*|\s)/g,"");c&&(o.push(c),i[c]=!0)}});else return n.push({group:"",cssItem:e}),le[e]=n,n;let l=/\*(.*?)\s/g,r=e.split(l);return r.forEach((s,c)=>{if(s=s.trim(),!s)return;let f=r[c+1];c===0&&!i[s]&&n.push({cssItem:s,group:""}),i[s]&&f&&!i[f]&&n.push({cssItem:f.trim(),group:s})}),le[e]=n,n};var H=(e,t="",n="",o="",a="",i="")=>{let l=`^parser_${e}_${t}_${n}_${o}_${a}`;return v.classNameCache[l]||(v.classNameCache[l]=!0,K(e).forEach(({cssItem:r,group:s})=>{r.split(" ").filter(Boolean).forEach(c=>{let f=s,p=T(s,c);if(p.comp||(p=T("",c),f=""),p.comp){let m=p.comp(p.value.split(","));H(m,c,p.media,p.mediaName,p.pesudo,f)}else X({css:c,name:t,media:n,mediaName:o,pesudo:a,group:i})})})),e};var Le={},Ie=(e,t,n)=>{let o=`^group_${e}_${t}_${n}`;Le[o]||(Le[o]=!0,v.compMap[e]||(v.compMap[e]={}),v.compMap[e][t]=a=>{let i=n;a.forEach((c,f)=>{i=i.replace(new RegExp(`(\\$${f+1})`,"g"),c)});let l=a[a.length],r=c=>{i.indexOf("$"+c)>-1&&(i=i.replace(new RegExp(`(\\$${c+1})`,"g"),l),r(c+1))};r(n.length+1);let s="";return K(i).forEach(({cssItem:c,group:f})=>{c.split(" ").forEach(p=>{let m=T(f,p);m.comp||(m=T(e,p),!m.comp&&e!==""&&f!==""&&(m=T("",p))),m.comp&&m.compName!==t?m.comp(m.value.split(",")).split(" ").forEach(x=>{s+=[m.query,m.mediaName,m.pesudoName,x].filter(Boolean).join(":")+" "}):s+=p+" "})}),s})};var Y=(e,t)=>{!t||(t=t.replace(`
`,""),t=t.replace(/(\/\/\s)/g,"//"),t.trim().split(";").forEach(n=>{let[o,...a]=n.split(":");o=o.trim(),o&&Ie(e,o,a.join(":").trim())}))},_e=(e,t)=>{t?Y(e,t):Y("",e)};var ce="[class]",Fe=()=>{document.head.querySelectorAll("style[flavor-css]").forEach(e=>{e.remove()}),v.compMap={},v.classNameCache={},document.querySelectorAll("[flavor]").forEach(J),document.body.querySelectorAll(ce).forEach(z)};function J(e){let t=e.getAttribute("flavor");if(t==null)return;let n="";if(e.tagName==="TEMPLATE"){let o=e.content.cloneNode(!0);o&&(n=o.textContent)}else n=e.textContent;Y(t,n)}function z(e){!e||e.className&&typeof e.className=="string"&&H(e.className)}var xt=()=>{let e=(n,...o)=>{let a=n.length;for(let i=0;i<a;i++){let l=n[i];if(l.type==="childList"){let r=l.target;if(r.__flavorIgnore&&r.closest("[flavor-ignore]")&&!r.getAttribute("flavor-ignore")){r.__flavorIgnore=!0;return}J(r),z(r),l.addedNodes.length&&(r.querySelectorAll("[flavor]").forEach(J),r.querySelectorAll(ce).forEach(z))}else l.type==="attributes"&&z(l.target)}};new MutationObserver(e).observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class"],characterData:!1,attributeOldValue:!1,characterDataOldValue:!1})},je=!1;var V=()=>{if(!(typeof window=="undefined"||typeof document=="undefined"||!window.location)&&!je){if(!window.MutationObserver){console.error("[flavorcss] Your Browser not supported MutationObserver");return}if(!document.body){requestAnimationFrame(V);return}document.querySelectorAll("[flavor]").forEach(J),document.body.querySelectorAll(ce).forEach(e=>{z(e)}),xt(),je=!0}};V();var pe={addStyle:X,os:O,parser:H,observeClass:V,addGroup:_e,mediaList:W,cache:v,reset:Fe};window.flavorcss=pe;var Ue=':root{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}hr{height:0;color:inherit}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Consolas,"Liberation Mono",Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}';var Wn=/native=1/.test(location.search),Z="";[["white","255,255,255"],["black","0,0,0"]].forEach(function(e){let[t,n]=e;Z+=`--${t}-0:rgba(${n},0); --${t}-5:rgba(${n},0.05);`;for(var o=0;o<=99;o+=5)o>5&&(Z+=`--${t}-${o}:rgba(${n},0.${o}); `);Z+=`--${t}:rgba(${n},1); `});var Pe=`
--bg-weak: #FAFBFD;
--bg: #fff;
--bg-deep: #dbdbdc;

--light-weak: #FAFBFD;
--light: #fff;
--light-deep: #dbdbdc;

--dark-weak: #5b6169;
--dark: #333A44;
--dark-deep: #000;

--gray-weak: #F8FAFC;
--gray: #EFF2F6;
--gray-deep: #E7EBF1;

--title-weak: #7f848a;
--title: #6F757D;
--title-deep: #3c4246;

--text-weak: #82878e;
--text: #6F757D;
--text-deep: #595F63;

--label-weak: #b9bec1;
--label: #9EA8AE;
--label-deep: #8C969C;

--primary-weak: #d9dbfd;
--primary: #747CEC;
--primary-deep: #6269C9;

--secondary-weak: #cbf3e0;
--secondary: #5FCC9B;
--secondary-deep: #50AC83;

--active-weak: rgba(196,206,236,0.1);
--active: rgba(196,206,236,0.3);
--active-deep: rgba(196,206,236,0.5);

--warn-weak: #FDF1D0;
--warn: #d4c396;
--warn-deep: #937224;

--error-weak: #FFCFCF;
--error: #ffaeae;
--error-deep: #CC3F3F;

--info-weak: #F1F3F9;
--info: #c0c6d8;
--info-deep: #6E757C;

--disable-weak: #DFE1E5;
--disable: #afb1b5;
--disable-deep: #677388;
`,Oe=`
--bg-weak: #3e4650;
--bg: #353C45;
--bg-deep: #2e333c;

--light-weak: #85909F;
--light: #dadbdc;
--light-deep: #fff;

--dark-weak: #242B38;
--dark: #181d23;
--dark-deep: #000000;

--gray-weak: #3b414a;
--gray: #424953;
--gray-deep: #585f69;

--title-weak: #7f848a;
--title: #c4cad2;
--title-deep: #dee2e4;

--text-weak: #8d97a2;
--text: #aab4bf;
--text-deep: #E2E2E2;

--label-weak: #727b88;
--label: #8791A0;
--label-deep: #93A0B5;

--primary-weak: #d9dbfd;
--primary: #747CEC;
--primary-deep: #6269C9;

--secondary-weak: #cbf3e0;
--secondary: #5FCC9B;
--secondary-deep: #50AC83;

--active-weak: rgba(196,206,236,0.1);
--active: rgba(196,206,236,0.3);
--active-deep: rgba(196,206,236,0.5);

--warn-weak: #FDF1D0;
--warn: #d4c396;
--warn-deep: #937224;

--error-weak: #FFCFCF;
--error: #ffaeae;
--error-deep: #CC3F3F;

--info-weak: #F1F3F9;
--info: #c0c6d8;
--info-deep: #6E757C;

--disable-weak: #DFE1E5;
--disable: #afb1b5;
--disable-deep: #677388;


`,ht=`
${Ue}
:root {
--sans: system-ui, -apple-system, "SF Pro SC","PingFang SC",'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji',"Segoe UI", Roboto, "Noto Sans";
--serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
--mono: ui-monospace,SFMono-Regular,Consolas,"Liberation Mono",Menlo,monospace;
--ease: cubic-bezier(0.23, 1, 0.32, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--mask: rgba(0,0,0,0.35);
--mask-deep: rgba(0,0,0,0.6);
--base-fs: 16px;
--px: 1px;
--r: 7px;
--h: 44px;
--w: 240px;
--a1: 10px;
--a2: 20px;
--a3: 30px;
--a4: 30px;
--a4: 40px;
--a5: 50px;
--a6: 60px;
--screen-xs: 480px;
--screen-sm: 640px;
--screen-md: 768px;
--screen-lg: 1024px;
--screen-xl: 1280px;
--screen-xxl: 1536px;
${Z}
}
:root {
  ${Pe}
}
@media (prefers-color-scheme:dark) {
  :root {
    ${Oe}
  }
}
.light {
  ${Pe}
}
.dark {
  ${Oe}
}

body {
  margin: 0px;
  padding: 0px;
  background: var(--bg);
  font-size: var(--base-fs);
  font-family: var(--sans);
  height: 100vh;
  width: 100vw;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}


button, input, a, select {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-appearance: none;
  outline: none;
  border: none;
}

@media (pointer: fine) {
  .pointer, button, a, select {
    cursor: pointer;
  }
}

.h-safe-top {
  height: 0;  
  height: constant(safe-area-inset-top);
  height: env(safe-area-inset-top);
}
.h-safe-bottom {
  height: 0;  
  height: constant(safe-area-inset-bottom);
  height: env(safe-area-inset-bottom);
}
.m-safe-top {
  margin-top: 0;  
  margin-top: constant(safe-area-inset-top);
  margin-top: env(safe-area-inset-top);
}
.m-safe-bottom {
  margin-bottom: 0;  
  margin-bottom: constant(safe-area-inset-bottom);
  margin-bottom: env(safe-area-inset-bottom);
}
.p-safe-top {
  padding-top: 0;  
  padding-top: constant(safe-area-inset-top);
  padding-top: env(safe-area-inset-top);
}
.p-safe-bottom {
  padding-bottom: 0;  
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
.scroll-snap-x {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}
.scroll-snap-y {
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  scroll-snap-type: y mandatory;
}
.scroll-snap-x > *, .scroll-snap-y > * {
  scroll-snap-align: start;
  flex: 0 0 100%;
}
  `,He=document.createElement("style");He.textContent=ht;document.head.append(He);var vt=`
box: width:100% lg:max-width:$1 margin:0|auto;

tt: transition:$1;
tf: transform:$1;
d: display:$1;
pe: pointer-events:$1;
pos: position:$1;
ta: text-align:$1;

f-col: display:flex flex-direction:column;
f-col-r: display:flex flex-direction:column-reverse;
f-row: display:flex flex-direction:row;
f-row-r: display:flex flex-direction:row-reverse;

gap: grid-gap:$1;
g-area: grid-area:$1;
g-areas: display:grid grid-template-areas:$1;

g-col: display:grid grid-auto-flow:column;
g-col-d: display:grid grid-auto-flow:column|dense;
g-row: display:grid grid-auto-flow:row;
g-row-d: display:grid grid-auto-flow:row|dense;

g-rows: display:grid grid-template-rows:$1;
g-cols: display:grid grid-template-columns:$1;


pc: place-content:$1;
pi: place-items:$1;
ps: place-self:$1;
jc: justify-content:$1;
ji: justify-items:$1;
js: justify-self:$1;
ac: align-content:$1;
ai: align-items:$1;
as: align-self:$1;

bg: background:$1;
bgm: background-image:url('$1') background-repeat:no-repeat background-position:center|center background-size:cover;
bgg: background-image:linear-gradient($1,$2,$3);
bgc: -webkit-background-clip:text background-image:linear-gradient($1,$2,$3) color:rgba(0,0,0,0);

h: height:$1;
min-h: min-height:$1;
max-h: max-height:$1;

w: width:$1;
min-w: min-width:$1;
max-w: max-width:$1;

s: width:$1 height:$1;
min-s: min-width:$1 min-height:$1;
max-s: max-width:$1 max-height:$1;

m: margin:$1;
mt: margin-top:$1;
mr: margin-right:$1;
ml: margin-left:$1;
mb: margin-bottom:$1;

p: padding:$1;
pt: padding-top:$1;
pr: padding-right:$1;
pl: padding-left:$1;
pb: padding-bottom:$1;

fs: font-size:$1;
fw: font-weight:$1;
fm: font-family:$1;
lp: letter-spacing:$1;

br: border-right:$1;
bl: border-left:$1;
bt: border-top:$1;
bb: border-bottom:$1;
b: border:$1;

b-px: border:--px|solid|$1;
br-px: border-right:--px|solid|$1;
bl-px: border-left:--px|solid|$1;
bt-px: border-top:--px|solid|$1;
bb-px: border-bottom:--px|solid|$1;

z: z-index:$1;
c: color:$1;
shadow: box-shadow:$1;

f: flex:$1;
fl: filter:$1;
bfl: -webkit-backdrop-filter:$1; backdrop-filter:$1;

r: border-radius:$1;
ol: outline:$1;
o: overflow:$1 -webkit-overflow-scrolling:touch;
ox: overflow-x:$1 -webkit-overflow-scrolling:touch;
oy: overflow-y:$1 -webkit-overflow-scrolling:touch;
opa: opacity:$1;
`,de=document.createElement("template");de.setAttribute("flavor","");de.innerHTML=vt;document.body.append(de);var wt=pe.os.desktop,ze=()=>{if(wt||window.__setMobileCss)return;window.__setCanNotScale=!0;let e=`
    * {
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      -moz-user-select:none; -webkit-user-select:none; -ms-user-select:none; user-select:none; 
      touch-action: manipulation;
    }
    .can-user-select, input, textarea {
      -moz-user-select:auto; -webkit-user-select:auto;-ms-user-select:auto; user-select:auto;
    }
  `,t=document.createElement("style");t.textContent=e;let n=document.createElement("meta");n.setAttribute("name","viewport"),n.setAttribute("content","width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui, viewport-fit=cover"),document.head.append(t,n),document.addEventListener("gesturestart",function(o){o.preventDefault()})};var kt="h:--h ts:0.3s|all|--ease r:--r bg:--primary color:--light  p:0|--a2 :active:bg:--primary-deep :focus-within:shadow:0|0|0|3px|--active-weak";function Jn(i){var l=i,{children:e,oninput:t,className:n,style:o}=l,a=y(l,["children","oninput","className","style"]);return aoife("button",b({class:[kt,n].join(" ")},a),e)}function Be(i){var l=i,{data:e,onChange:t,className:n,children:o}=l,a=y(l,["data","onChange","className","children"]);let r={selectedNum:0},s=e.map(f=>({label:f.label,element:f.element(),selectedElement:f.selectedElement?f.selectedElement():f.element()})),c=aoife("div",b({class:["pt:5px p-safe-bottom w:100% g-col pi:center bt:--divide bg:--plan",n].join(" ")},a),s.map((f,p)=>([["fill","var(--app-tab)"],["width","20px"],["height","20px"]].forEach(m=>{f.element.setAttribute(m[0],m[1]),f.selectedElement.setAttribute(m[0],m[1])}),aoife("div",{class:()=>{let m=p===r.selectedNum;return["g-row pc:center pointer",m?"--app-tab:--primary":"--app-tab:--weak"].join(" ")},onclick:()=>{r.selectedNum=p,t&&t(p),aoife.next(c)}},aoife("div",{class:"c:--disable place-self:center"},()=>p===r.selectedNum?f.selectedElement:f.element),aoife("p",{class:()=>["fs:10px sm:fs:13px ta:center",p===r.selectedNum?"c:--primary-deep":"c:--disable"].join(" ")},f.label)))));return c}var De=e=>C(void 0,null,function*(){let t=e();return t.then&&(t=yield t.then(n=>n.default())),t});function oo({children:e,className:t,data:n}){let o=[];function a(l){return C(this,null,function*(){if(!o[l]&&n[l].page){o[l]=yield De(n[l].page);let r=i.children.item(l);r&&r.replaceWith(o[l])}for(let r=0;r<n.length;r++){let s=i.children.item(r);r===l?s.style.display="grid":s.style.display="none"}})}let i=aoife("div",null,Array(n.length).fill(0).map(()=>aoife("div",null)));return a(0),aoife("div",null,i,aoife("div",{class:"w:1px h:100px"}),aoife(Be,{class:"pos:fixed bottom:0px left:0px",data:n,onChange:l=>{a(l)}}))}var Et='<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>',$t="p:0|--a1 h:--h bb-px:--disable-weak :hover:bg:--active-weak g-cols:1fr|auto :active:bg:--active";function ro(o){var a=o,{children:e,className:t}=a,n=y(a,["children","className"]);return aoife("div",b({class:[$t,t].join(" ")},n),aoife("select",b({class:"bg:--black-0 ol:none"},n),e),aoife("i",{class:"s:100% fs:1.2em g-col c:--disable-deep pc:center",innerHTML:Et}))}var Ct=Object.create,fe=Object.defineProperty,St=Object.getPrototypeOf,Tt=Object.prototype.hasOwnProperty,Nt=Object.getOwnPropertyNames,At=Object.getOwnPropertyDescriptor,Mt=e=>fe(e,"__esModule",{value:!0}),Lt=(e,t)=>()=>(t||(t={exports:{}},e(t.exports,t)),t.exports),It=(e,t,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Nt(t))!Tt.call(e,o)&&o!=="default"&&fe(e,o,{get:()=>t[o],enumerable:!(n=At(t,o))||n.enumerable});return e},_t=e=>e&&e.__esModule?e:It(Mt(fe(e!=null?Ct(St(e)):{},"default",{value:e,enumerable:!0})),e),Ft=Lt((e,t)=>{(function(n,o){typeof e=="object"&&typeof t!="undefined"?t.exports=o():typeof define=="function"&&define.amd?define(o):(n=n||self).templateFn=o()})(e,function(){"use strict";return function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(1<n.length){var a=n[0],i=n.slice(1),l="";return a.forEach(function(r,s){l+=r,i[s]&&(l+=i[s])}),l}return typeof n[0]=="string"?n[0]:n[0]?n[0].join(""):""}})}),jt=_t(Ft()),Re={};function Ut(...e){let t=jt.default(...e);if(Re[t])return;Re[t]=!0;let n=document.createElement("style");n.innerHTML=t,document.head.append(n)}var N=Ut;function qe(l){var r=l,{oninput:e,className:t,placeholder:n,right:o,style:a}=r,i=y(r,["oninput","className","placeholder","right","style"]);let s={haveText:!1},f=aoife("input",b({class:"ux-input__input",oninput:m=>{s.haveText=!!m.target.value,aoife.next(p),e&&e(m)}},i)),p=aoife("div",{class:["ux-input",t].join(" "),style:a},aoife("label",{class:()=>["ux-input__label",s.haveText&&"js-have-text"].join(" ")},n||"Please input"),f,o&&o);return p}N`
  .ux-input {
    font-family: var(--sans);
    position: relative;
    transition: 0.2s all ease-out;
    border-radius: var(--r);
    border: 1px solid var(--disable-weak);
    display: grid;
    grid-template-columns: 1fr auto;
  }
  @media (pinter: fine) {
    .ux-input:hover {
      border: 1px solid var(--primary);
    }
  }
  .ux-input > .ux-input__label {
    color: var(--label);
    transform-origin: left;
    transition: 0.17s all ease-out;
    position: absolute;
    left: var(--a1);
    top: calc(var(--a1) * 1.75);
    pointer-events: none;
  }

  .ux-input:focus-within {
    border: 1px solid var(--primary);
    box-shadow: 0px 0px 0px 3px var(--active);
  }
  .ux-input:focus-within > .ux-input__label,
  .ux-input > .js-have-text {
    transform: translate(0, calc(var(--a1) * -1.5)) scale(0.8);
  }
  .ux-input > .ux-input__input {
    padding: calc(var(--a1) * 2.5) var(--a1) var(--a1) var(--a1);
    background: rgba(0, 0, 0, 0);
    width: 100%;
    outline: none;
    border: none;
  }
`;var Q=(e,t,{storage:n="localStorage",version:o}={})=>{if(e=e+(o||Q.version),typeof t!="object")throw"NanoDb: init need a object";if(t.set||t.reinit||t.initData)throw"NanoDb: init object can not use props: ['set', 'initData', 'reinit']";let a=JSON.parse(JSON.stringify(t)),i={initData:JSON.parse(JSON.stringify(t)),reinit:()=>{let r=JSON.stringify(i.initData),s=JSON.parse(r);window[n].setItem(e,r),Object.assign(i,s)},set:r=>{Object.assign(a,r),Object.assign(i,r),window[n].setItem(e,JSON.stringify(a))}},l=window[n].getItem(e);if(l)try{let r=JSON.parse(l);i.set(r)}catch(r){console.error(r),i.set(t)}else i.set(t);return i};Q.version="";function bo(l){var r=l,{localKey:e="ux-send-code",onSend:t,waitTime:n=10,children:o,version:a}=r,i=y(r,["localKey","onSend","waitTime","children","version"]);let s=Q(e,{now:0},{version:a}),c=()=>s.now+n*1e3>Date.now(),f=()=>~~((s.now+n*1e3-Date.now())/1e3),p,m=()=>{c()?(p&&clearTimeout(p),p=setTimeout(m,1e3)):s.reinit(),aoife.next(x)},x=aoife("button",{type:"button",tabIndex:1,debounce:"onclick",onclick:w=>C(this,null,function*(){if(c())return;if(t){let u=yield Promise.resolve(t(w));if(!u||u.error)return}let k=g.querySelector("input");k&&k.focus(),s.set({now:Date.now()}),m()}),class:()=>["ux-send-code",c()&&"js-loading"].join(" ")},()=>c()?f():o[1]||"\u53D1\u9001\u9A8C\u8BC1\u7801");c()&&aoife(x,{onAppend:m});let g=aoife(qe,b({right:x},i));return g}N`
  .ux-send-code {
    color: var(--light);
    background: var(--primary);
    font-weight: 500;
    margin: 6px;
    font-size: 16px;
    padding: 0 20px;
    min-width: 80px;
    border-radius: var(--r);
  }
  .ux-send-code * {
    cursor: pointer;
  }
  @media (pointer: fine) {
    .ux-send-code:hover {
      background: var(--primary-deep);
    }
  }
  .ux-send-code.js-loading {
    font-size: 20px;
    font-weight: 400;
    color: var(--light);
    background: var(--disable);
  }
`;var Pt={bottom:"ux-model-bottom",top:"ux-model-top",left:"ux-model-left",right:"ux-model-right",center:"ux-model-center"},Ot={bottom:{transform:"translate(0, 100vh)"},top:{transform:"translate(0, -100vh)"},left:{transform:"translate(-100vw, 0)"},right:{transform:"translate(100vw, 0)"},center:{transform:"scale(0.7)"}},Ht={bottom:{transform:"translate(0, 0px)"},top:{transform:"translate(0, 0px)"},left:{transform:"translate(0px, 0)"},right:{transform:"translate(0px, 0)"},center:{transform:"scale(1)"}},B=(e,t)=>{Object.keys(t).forEach(n=>{e.style[n]=t[n]})};function zt(f,...c){var p=f,{getClose:e,maskClickClose:t=!1,animeTime:n=300,direction:o="bottom",opacity:a=.4,mask:i=!0,maskColor:l="bg-black",closeTimeout:r}=p,s=y(p,["getClose","maskClickClose","animeTime","direction","opacity","mask","maskColor","closeTimeout"]);let m=Pt[o],d=aoife("div",{class:["ux-model",m].join(" ")}),x=aoife("div",null),g=Ot[o],w=Ht[o];setTimeout(()=>{d.style.background="var(--black-50)",B(x,w)});let k=()=>{d.style.background="var(--black-0)",o==="center"?B(x,ne(b({},g),{opacity:0})):B(x,ne(b({},g),{opacity:1})),setTimeout(()=>{B(d,{pointerEvents:"none"}),B(x,{pointerEvents:"none"})},n/2),setTimeout(()=>{d.remove()},n)};e&&e(k),r&&setTimeout(k,r);let u=document.body.querySelectorAll("[mask-plan]").length;return u>0&&(a=a/u/2),aoife(d,b({"mask-plan":!0,style:{transition:`all ${n}ms var(--ease)`,width:"100vw",height:"100vh",position:"fixed",top:"0px",left:"0px",background:"var(--black-0)",pointerEvents:i?void 0:"none",zIndex:1100,overflow:"hidden"},onclick:()=>{t&&i&&k()}},s),aoife(x,{style:b({transition:`all ${n}ms var(--ease)`},g),onclick:h=>{h.stopPropagation()}},c))}function Ge(n){var o=n,{children:e}=o,t=y(o,["children"]);return zt(t,e)}N`
  .ux-model {
    font-family: var(--sans);
    display: grid;
  }
  .ux-model-bottom {
    place-content: end center;
  }
  .ux-model-top {
    place-content: start center;
  }
  .ux-model-left {
    place-content: center start;
  }
  .ux-model-right {
    place-content: center end;
  }
  .ux-model-center {
    place-content: center;
  }
`;function We(e,t,n,o){return aoife("div",{class:["ux-alert-btn",o&&"ux-alert-btn-cancel"].join(" "),onclick:()=>{t?t(n.close):n.close()}},e)}function Bt({events:e,title:t,ok:n,oncancel:o,onok:a,cancel:i="Cancel",children:l}){return aoife("form",{onsubmit:()=>{a&&a(e.close)},class:"ux-alert-form"},t&&aoife("div",{class:"ux-alert-form-title"},t),aoife("div",{class:"ux-alert-content"},l),aoife("div",{class:"ux-alert-btns"},n&&aoife(We([n],a,e),{style:{borderBottom:"1px solid var(--gray-300)",background:"#ff"}}),We([i],o,e,!0)))}function ko(o={}){var a=o,{global:e,children:t}=a,n=y(a,["global","children"]);let i={close:()=>{}};return aoife(Ge,{global:e,direction:"center",getClose:l=>{n.getClose&&n.getClose(l),i.close=l}},aoife(Bt,b({events:i},n),t))}N`
  .ux-alert-btns {
    display: grid;
    grid-auto-flow: row;
  }
  @media (min-width: 640px) {
    .ux-alert-btns {
      display: grid;
      grid-auto-flow: column;
    }
  }
  .ux-alert-btn {
    font-weight: 500;
    font-size: 14px;
    border-top: 1px solid var(--disable-weak);
    text-align: center;
    padding: var(--a2, 16px);
    cursor: pointer;
    color: var(--primary);
  }
  @media (pointer: fine) {
    .ux-alert-btn {
      border-left: 1px solid var(--disable-weak);
    }
    .ux-alert-btn:hover {
      background: var(--active-weak);
    }
  }
  .ux-alert-btn:active {
    background: var(--active);
  }
  .ux-alert-btn-cancel {
    color: var(--label-deep) !important;
  }
  .ux-alert-form {
    width: 80vw;
    max-width: 500px;
    background: var(--bg);
    border-radius: var(--r);
    box-shadow: 0px 4px 10px var(--black-10);
    overflow: hidden;
  }
  /* @media (max-width: 640px) {
    .ux-alert-form {
      width: 70vw;
      max-width: 1024px;
    }
  } */
  .ux-alert-title {
    font-size: 16px;
    font-weight: 500;
    padding: 20px;
    padding-bottom: 0px;
    background: var(--bg);
  }
  .ux-alert-content {
    padding: 20px;
    background: var(--bg);
  }
`;var Dt=`<svg
viewBox="0 0 1024 1024"
xmlns="http://www.w3.org/2000/svg"
width="20px"
height="20px"
fill="currentColor"
>
<path d="M689.621 512l-328.832-328.832-60.331 60.331 268.501 268.501-268.501 268.501 60.331 60.331z"></path>
</svg>`,Rt=`
g-cols:1fr|auto
gap:--a1
p:--a1
bg:--bg
bb-px:--disable-weak
ts:0.2s|all|--ease
pointer
:hover:bg:--active-weak
:active:bg:--active
  `;function $o(i){var l=i,{selected:e,topCell:t,className:n,children:o}=l,a=y(l,["selected","topCell","className","children"]);return aoife("div",b({class:[t&&"bt-px:--gray-deep",e&&"bl:1px|solid|--primary",Rt,n].join(" ")},a),aoife("div",null,o),aoife("div",{class:"align-self:center opacity:0.3",innerHTML:Dt}))}function So(a){var i=a,{onChange:e,children:t,className:n}=i,o=y(i,["onChange","children","className"]);let l=0,r=0,s=-1,c=0,f=0,p=t.length,m=!1,d=aoife("div",b({class:()=>["f-row will-change:transform",n].join(" ")},o),t.map(u=>aoife("div",{class:"h:100% f:0|0|100%"},u)));window.addEventListener("scroll",()=>{m=!0});let x=!1,g=(u,h)=>{if(x=!0,s<0){let M=d.children.item(0);M&&(s=M.offsetWidth)}m=!1,f=Date.now(),l=h?u.touches[0].clientX:u.clientX,d.style.transition="0.2s transform var(--ease)",u.stopPropagation()};d.addEventListener("touchstart",u=>g(u,!0)),d.addEventListener("mousedown",u=>g(u,!1));let w=(u,h)=>{if(!x)return;if(r=(h?u.touches[0].clientX:u.clientX)-l,m){r!==0&&(r=0,d.style.transform=`translateX(${c*s+r}px)`,e&&e(-c,{moveX:r,containerWidth:s,nowNum:-c,length:p,kind:"touch"}));return}r<80&&r>-80||(d.style.transform=`translateX(${c*s+r}px)`,e&&e(-c,{moveX:r,containerWidth:s,nowNum:-c,length:p,kind:"touch"}),u.stopPropagation())};d.addEventListener("touchmove",u=>w(u,!0)),d.addEventListener("mousemove",u=>w(u,!1));let k=(u,h)=>{if(x=!1,m)return;let M=0,ot=Date.now()-f,te=3;ot<800&&(te=10),r>0&&r>s/te?M=1:r<0&&r<s/te&&(M=-1),u.stopPropagation(),c+=~~(r/s)+M,r=0,c<-p+1?c=-p+1:c>0&&(c=0),d.style.transition="0.5s transform var(--ease)",setTimeout(()=>{d.style.transform=`translateX(${c*s}px)`},30),e&&e(-c,{moveX:r,containerWidth:s,nowNum:-c,length:p,kind:"touch"})};return d.addEventListener("touchend",u=>k(u,!0)),d.addEventListener("mouseup",u=>k(u,!1)),d.addEventListener("mouseout",u=>k(u,!1)),d.moveTo=u=>{document.contains(d)&&(c=u,d.style.transition="0.5s transform var(--ease)",setTimeout(()=>{d.style.transform=`translateX(${c*s}px)`},30),e&&e(-c,{moveX:r,containerWidth:s,nowNum:-c,length:p,kind:"event"}))},aoife("div",{class:"s:100% overflow:hidden"},d)}var qt="outline:none h:--h w:100% bg:--gray r:--r p:0px|14px :focus:bg:--gray-deep t:all|0.2s|--ease tt:0.2s|all|--ease";function No(n){var o=n,{className:e}=o,t=y(o,["className"]);return aoife("input",b({class:[qt,e].join(" ")},t))}var Gt=`
  h:--h w:100% bg:--bg r:--r p:0|--a1 :focus-within:shadow:0|0|0|3px|--active 
  :hover:b-px:--primary-weak
  :focus-within:b-px:--primary 
  b-px:--disable-weak
  ts:0.2s|all|--ease `;function Mo(n){var o=n,{className:e}=o,t=y(o,["className"]);return aoife("input",b({class:[Gt,e].join(" ")},t))}var Xe=document.createElement("style"),D=20;Xe.textContent=`
.vanilla-message-btn {
  cursor:pointer;
  background: rgba(0,0,0,0);
}
.vanilla-message-btn:hover {
  background: rgba(0,0,0,0.08);
}
.vanilla-message-btn:active {
  background: rgba(0,0,0,0.16);
}
@keyframes move-toast {
  0% {
    transform: translateY(-${D*1.5}px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
@keyframes move-toast-reverse {
  0% {
    transform: translateY(0px);
    opacity: 1;
  }
  100% {
    transform: translateY(-${D*1.5}px);
    opacity: 0;
  }
}
@keyframes move-toast-down {
  0% {
    transform: translateY(${D*1.5}px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
@keyframes move-toast-down-reverse {
  0% {
    transform: translateY(0px);
    opacity: 1;
  }
  100% {
    transform: translateY(${D*1.5}px);
    opacity: 0;
  }
}

.move-toast-in {
  animation: move-toast 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}
.move-toast-out {
  animation: move-toast-reverse 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  animation-fill-mode: forwards;
}

.move-toast-in-down {
  animation: move-toast-down 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}
.move-toast-out-down {
  animation: move-toast-down-reverse 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  animation-fill-mode: forwards;
}
`;document.head.append(Xe);function Ke(e,t){let n=document.createElement("div");return n.className="vanilla-message-btn",n.style.display="block",n.style.border="none",n.style.textAlign="center",n.style.height="100%",n.style.outline="none",n.style.userSelect="none",n.style.padding="10px 3px",n.style.fontSize="12px",n.style.width="100%",n.textContent=e,n.style.minWidth="80px",n.style.color=t&&t.color?t.color:"#fff",n}var $=(n,...o)=>C(void 0,[n,...o],function*(e,t={}){return new Promise(a=>{let{position:i,className:l="",outTime:r,onClick:s=()=>{},onHidden:c=()=>{},style:f={},ok:p,cancel:m}=t;if(typeof e=="undefined"||e==="")return;i||(p||m?i="center":i="top");let d=document.createElement("div"),x=h=>{d&&(i==="top"?d.className="move-toast-out "+l:d.className="move-toast-out-down "+l,c&&c(),setTimeout(()=>{d.remove()},1e3),a(h))};d.className="normal-body vanilla-message-box "+l,d.style.width="100%",d.style.zIndex=f.zIndex||"9999",d.style.position="fixed",d.style.pointerEvents="none",d.style.display="flex",d.style.flexDirection="column",d.style.justifyContent="center",d.style.alignItems="flex-start",d.style.left="0px",d.style.fontSize="16px",i==="top"?(d.style.top="0px",d.className="move-toast-in"):i==="bottom"?(d.style.bottom="20px",d.className="move-toast-in-down"):(d.style.bottom="50%",d.className="move-toast-in-down");let g=document.createElement("div");g.className="vanilla-message",g.style.border="none",g.style.outline="none",g.style.pointerEvents="auto",g.style.margin=`${D}px auto`,g.style.textAlign="center",g.style.alignSelf="center",g.style.background="rgb(50,50,50)",g.style.display="flex",g.style.flexDirection="column",g.style.justifyContent="flex-start",g.style.alignItems="center",g.style.borderRadius="3px",Object.keys(f).forEach(h=>{g.style[h]=f[h]}),!p&&!m&&(g.onclick=h=>{s&&s(),x(!1)});let w=document.createElement("div");w.style.padding="12px",w.style.fontSize="14px",typeof e=="string"?w.textContent=e:w.appendChild(e),w.style.color=f&&f.color?f.color:"#fff",g.appendChild(w);let k=!1,u=document.createElement("div");if(u.style.display="flex",u.style.flexDirection="row",u.style.justifyContent="flex-start",u.style.alignItems="center",u.style.width="100%",u.style.borderTop="1px solid rgba(0,0,0,0.08)",g.appendChild(u),m){k=!0;let h=Ke(m,f);h.style.opacity="0.7",h.onclick=()=>{x(!1)},u.appendChild(h)}if(p){k=!0;let h=Ke(p,f);h.onclick=()=>{x(!0)},u.appendChild(h)}g.appendChild(u),d.appendChild(g),k||setTimeout(()=>x(!1),r||3e3),document.body.appendChild(d)})});$.white=(e,t={})=>{let a=t,{style:n}=a,o=y(a,["style"]);return $(e,b({style:b({color:"var(--black, #000)",background:"var(--white, #fff)"},n)},o))};$.black=(e,t={})=>{let a=t,{style:n}=a,o=y(a,["style"]);return $(e,b({style:b({background:"var(--black, #000)"},n)},o))};$.info=(e,t={})=>{let a=t,{style:n}=a,o=y(a,["style"]);return $(e,b({style:b({background:"var(--primary5, #488)"},n)},o))};$.success=(e,t={})=>{let a=t,{style:n}=a,o=y(a,["style"]);return $(e,b({style:b({background:"var(--primary9, #67f)"},n)},o))};$.error=(e,t={})=>{let a=t,{style:n}=a,o=y(a,["style"]);return $(e,b({style:b({background:"var(--red5, #f33)"},n)},o))};var me=$;var Fo={info:e=>me.black(e,{style:{fontFamily:"var(--sans)",borderRadius:"var(--r)"}}),error:e=>{me.error(e,{style:{fontFamily:"var(--sans)",borderRadius:"var(--r)"}})}};var Uo=()=>{let e=`
  --bg-weak
  --bg
  --bg-deep
  
  --light-weak
  --light
  --light-deep
  
  --dark-weak
  --dark
  --dark-deep
  
  --title-weak
  --title
  --title-deep
  
  --text-weak
  --text
  --text-deep
  
  --label-weak
  --label
  --label-deep
  
  --primary-weak
  --primary
  --primary-deep
  
  --secondary-weak
  --secondary
  --secondary-deep
  
  --active-weak
  --active
  --active-deep
  
  --warn-weak
  --warn
  --warn-deep
  
  --error-weak
  --error
  --error-deep
  
  --info-weak
  --info
  --info-deep
  
  --disable-weak
  --disable
  --disable-deep

  --gray-weak
  --gray
  --gray-deep
  `.split(`
`).map(n=>n.trim()).filter(Boolean),t=[];return["black","white"].forEach(function(n){for(var o=0;o<=99;o+=5)t.push(`--${n}-${o}`);t.push(`--${n}`)}),aoife("section",{"scroll-y":!0,class:"oy:auto"},aoife("div",{class:"g-col"},["light","dark"].map(n=>aoife("div",{class:n},aoife("div",{class:"bg:--bg g-row p:--a4 r:--r"},aoife("h2",{class:"c:--title-deep"},n),e.map(o=>aoife("div",{class:"m:--a1 g-row pi:center grid-gap:--a1"},aoife("div",{class:`bg:${o} s:60px r:--r b:4px|solid|--black-10 as:center`}),aoife("p",{class:"bg:--bg c:--text ta:center"},o))))))),aoife("h2",{class:"p:--a3"},"White And Black"),aoife("p",{class:"p:--a1"},"\u9ED1\u767D\u8272\u540420\u4E2A\u900F\u660E\u5EA6\u9636\u68AF\uFF0C\u4E0D\u968Fdark\u53D8\u5316\uFF0C\u4E00\u822C\u7528\u5728\u6295\u5F71\uFF0C\u906E\u7F69\u7B49\u533A\u57DF"),aoife("div",{class:"bg:#888 r:--r g-row"},aoife("div",{class:"g-row"},t.map(n=>aoife("div",{class:"m:--a1 g-col pi:center grid-gap:--a1"},aoife("div",{class:`bg:${n} s:60px r:--r b:4px|solid|--black-10 as:center`}),aoife("p",{class:"bg:--bg c:--title-deep ta:center bg:--black-0"},n))))))};var Wt="mr:--a1 outline:none h:--h w:--h bg:--gray :focus:bg:--gray-deep r:--r t:all|0.2s|--ease box-sizing:border-box text-align:center :disabled:bg:--warn-weak :disabled:pe:none",Oo=l=>{var r=l,{len:e=6,disabled:t=!1,onlyNumber:n=!0,className:o,atInput:a}=r,i=y(r,["len","disabled","onlyNumber","className","atInput"]);let s=()=>{let p="";return c.forEach(m=>{p+=m.value}),p},c=Array(e).fill(0).map((p,m)=>{let d=aoife("input",{"data-sim":m,disabled:()=>t,onfocus:()=>{c.forEach((x,g)=>{g>=m&&(x.value="")})},onkeydown:x=>{if(x.target.value="",x.key==="Backspace"||x.key==="Delete"){let g=f.querySelector(`[data-sim="${m-1}"]`);g&&(g.value="",g.focus())}},oninput:x=>{if(n&&!/\d/.test(x.target.value)){x.target.value="";return}let g=document.querySelector(`[data-sim="${m+1}"]`);g&&(g.value="",g.focus());let w=s();a&&setTimeout(()=>a(w))},maxLength:1,class:Wt});return m===0&&aoife(d,{onAppend:()=>{d.focus()}}),d}),f=aoife("div",b({class:["f-row",o].join(" ")},i),c);return f};import R from"querystring-number";var Ye=navigator.userAgent.toLocaleLowerCase(),Xt=/(?:iphone)/.test(Ye),Kt=/micromessenger/.test(Ye),ee={},Je=[];["popstate","pushState","replaceState","backState"].forEach(e=>{window.addEventListener(e,()=>{E.state=R.parse(location.search),(e==="popstate"||e==="backState")&&delete ee[et],Je.forEach(t=>t()),e==="popstate"&&A.pop()})});function Ve(e){let t=document.createElement("span");return t.style.display="none",t.setAttribute("vanilla-route",e),t.setAttribute("vanilla-route-empty",e),t}function Ze(e){return typeof e=="function"?e():R.decode(window.location.pathname)===e}var Qe=0,et="",A=[],ue={},E=({url:e,render:t,preload:n,keep:o})=>{if(typeof t!="function")throw"AoifeRoute.render need a Function";!n&&typeof e=="string"&&(ue[e]=t),Qe+=1;let a=""+Qe,i=()=>{if(n){let c=typeof n=="number"?n:50;setTimeout(()=>{t()},c)}let l=ee[e];if(typeof e=="string"&&l){let c=document.querySelector(`[vanilla-route="${l}"]`);return c.__display||(c.__display=window.getComputedStyle?window.getComputedStyle(c).display:"block"),Ze(e)?c.style.display=c.__display:c.style.display="none",c}if(!Ze(e))return Ve(a);let r=o&&typeof e=="string",s=t();if(s.then){let c=Ve(a);return Promise.resolve(s).then(f=>{if(f.default){let p=document.querySelector(`[vanilla-route="${a}"]`);if(!p)return;let m=f.default();m.setAttribute("vanilla-route",a),r&&(ee[e]=a),p.replaceWith(m)}}),c}return s.setAttribute("vanilla-route",a),r&&(ee[e]=a),s};return Je.push(()=>{let l=document.querySelector(`[vanilla-route="${a}"]`);if(!l)return;let r=i();r.getAttribute("vanilla-route-empty")&&l.getAttribute("vanilla-route-empty")||r!==l&&l.replaceWith(r)}),i()};E.onlyReplace=Kt&&Xt;E.preload=e=>{let t=ue[e];typeof t=="function"&&(t(),ue[e]=!0)};E.state={};E.queryString=R;E.push=(e,t)=>{if(E.onlyReplace){E.replace(e,t);return}A.push({state:t,url:e}),t&&(e+="?"+R.stringify(t)),window.scrollTo&&window.scrollTo({top:0}),setTimeout(()=>{history.pushState(t,"",e),window.dispatchEvent(new Event("pushState"))})};E.replace=(e,t)=>{A.push({state:t,url:e}),t&&(e+="?"+R.stringify(t)),window.scrollTo&&window.scrollTo({top:0}),setTimeout(()=>{history.replaceState(t,"",e),window.dispatchEvent(new Event("replaceState"))})};var Yt=()=>{if(et=location.pathname,A.length===0){history.replaceState({},"","/"),window.dispatchEvent(new Event("backState"));return}if(E.onlyReplace){if(A.pop(),A.length===0)history.replaceState({},"","/");else{let{state:e,url:t}=A[A.length-1];history.replaceState(e,"",t)}window.dispatchEvent(new Event("backState"));return}history.back()},tt=(e=1,t)=>{if(e<=0){t&&setTimeout(()=>{t()});return}e-=1,Yt(),setTimeout(()=>{tt(e,t)})};E.back=(e=1)=>new Promise(t=>{tt(e,t)});E.rootURL="/";var Jt=()=>`<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.25 12.2743L19.25 12.2743" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M10.2998 18.2987L4.2498 12.2747L10.2998 6.24969" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>`,nt=a=>{var i=a,{className:e,onclick:t,label:n="\u8FD4\u56DE"}=i,o=y(i,["className","onclick","label"]);return aoife("div",b({class:["pr:6px pointer f-row ai:center :active:bg:--gray r:--r",e].join(" "),onclick:l=>{t?t(l):E.back()}},o),aoife("i",{class:"s:36px g-col pc:center fs:20px",innerHTML:Jt()}),aoife("span",null,n))};var Go=r=>{var s=r,{backLabel:e,title:t,left:n,right:o,onlyMobile:a,className:i}=s,l=y(s,["backLabel","title","left","right","onlyMobile","className"]);return aoife("div",b({class:["p-safe-top z:100",a&&"d:black sm:d:none",i].join(" ")},l),aoife("nav",{class:"px:--a1 h:--a5 bg:--light f-row ai:center shadow:0|2px|6px|--black-5"},aoife("div",null,n||aoife(nt,{label:e})),aoife("div",{class:"flex:1 ta:center"},t),aoife("div",null,o)))};ze();export{ko as UxAlert,oo as UxApp,Be as UxAppTabs,nt as UxBackButton,Jn as UxButton,$o as UxCell,Uo as UxColorsPreview,Oo as UxInputCodes,Mo as UxInputOutline,bo as UxInputSendCode,qe as UxInputTip,No as UxInputWeak,Fo as UxMessage,Ge as UxModel,Go as UxNavBar,ro as UxSelect,So as UxSwipe,zt as _Model};
