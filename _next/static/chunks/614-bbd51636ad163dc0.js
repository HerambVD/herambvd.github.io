(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[614],{3298:function(t,n,r){"use strict";r.d(n,{Z:function(){return o}});var l=r(5531);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,l.Z)("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]])},6539:function(t,n,r){"use strict";r.d(n,{Z:function(){return o}});var l=r(5531);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,l.Z)("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]])},7461:function(t,n,r){"use strict";r.d(n,{Z:function(){return o}});var l=r(5531);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,l.Z)("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]])},3039:function(t,n,r){"use strict";r.d(n,{Z:function(){return o}});var l=r(5531);/**
 * @license lucide-react v0.456.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,l.Z)("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]])},6435:function(t,n,r){"use strict";r.d(n,{F:function(){return y},f:function(){return $}});var l=r(2265);let o=["light","dark"],a="(prefers-color-scheme: dark)",s="undefined"==typeof window,i=(0,l.createContext)(void 0),c={setTheme:t=>{},themes:[]},y=()=>{var t;return null!==(t=(0,l.useContext)(i))&&void 0!==t?t:c},$=t=>(0,l.useContext)(i)?l.createElement(l.Fragment,null,t.children):l.createElement(f,t),u=["light","dark"],f=({forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:r=!0,enableColorScheme:s=!0,storageKey:c="theme",themes:m=u,defaultTheme:h=r?"system":"light",attribute:v="data-theme",value:g,children:w,nonce:k})=>{let[C,E]=(0,l.useState)(()=>S(c,h)),[_,x]=(0,l.useState)(()=>S(c)),O=g?Object.values(g):m,T=(0,l.useCallback)(t=>{let l=t;if(!l)return;"system"===t&&r&&(l=p());let a=g?g[l]:l,i=n?b():null,c=document.documentElement;if("class"===v?(c.classList.remove(...O),a&&c.classList.add(a)):a?c.setAttribute(v,a):c.removeAttribute(v),s){let t=o.includes(h)?h:null,n=o.includes(l)?l:t;c.style.colorScheme=n}null==i||i()},[]),j=(0,l.useCallback)(t=>{E(t);try{localStorage.setItem(c,t)}catch(t){}},[t]),N=(0,l.useCallback)(n=>{let l=p(n);x(l),"system"===C&&r&&!t&&T("system")},[C,t]);(0,l.useEffect)(()=>{let t=window.matchMedia(a);return t.addListener(N),N(t),()=>t.removeListener(N)},[N]),(0,l.useEffect)(()=>{let e=t=>{t.key===c&&j(t.newValue||h)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[j]),(0,l.useEffect)(()=>{T(null!=t?t:C)},[t,C]);let I=(0,l.useMemo)(()=>({theme:C,setTheme:j,forcedTheme:t,resolvedTheme:"system"===C?_:C,themes:r?[...m,"system"]:m,systemTheme:r?_:void 0}),[C,j,t,_,r,m]);return l.createElement(i.Provider,{value:I},l.createElement(d,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:r,enableColorScheme:s,storageKey:c,themes:m,defaultTheme:h,attribute:v,value:g,children:w,attrs:O,nonce:k}),w)},d=(0,l.memo)(({forcedTheme:t,storageKey:n,attribute:r,enableSystem:s,enableColorScheme:i,defaultTheme:c,value:u,attrs:d,nonce:m})=>{let h="system"===c,v="class"===r?`var d=document.documentElement,c=d.classList;c.remove(${d.map(t=>`'${t}'`).join(",")});`:`var d=document.documentElement,n='${r}',s='setAttribute';`,g=i?o.includes(c)&&c?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${c}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",$=(t,n=!1,l=!0)=>{let a=u?u[t]:t,s=n?t+"|| ''":`'${a}'`,c="";return i&&l&&!n&&o.includes(t)&&(c+=`d.style.colorScheme = '${t}';`),"class"===r?c+=n||a?`c.add(${s})`:"null":a&&(c+=`d[s](n,${s})`),c},w=t?`!function(){${v}${$(t)}}()`:s?`!function(){try{${v}var e=localStorage.getItem('${n}');if('system'===e||(!e&&${h})){var t='${a}',m=window.matchMedia(t);if(m.media!==t||m.matches){${$("dark")}}else{${$("light")}}}else if(e){${u?`var x=${JSON.stringify(u)};`:""}${$(u?"x[e]":"e",!0)}}${h?"":"else{"+$(c,!1,!1)+"}"}${g}}catch(e){}}()`:`!function(){try{${v}var e=localStorage.getItem('${n}');if(e){${u?`var x=${JSON.stringify(u)};`:""}${$(u?"x[e]":"e",!0)}}else{${$(c,!1,!1)};}${g}}catch(t){}}();`;return l.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:w}})},()=>!0),S=(t,n)=>{let r;if(!s){try{r=localStorage.getItem(t)||void 0}catch(t){}return r||n}},b=()=>{let t=document.createElement("style");return t.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},p=t=>(t||(t=window.matchMedia(a)),t.matches?"dark":"light")},4033:function(t,n,r){t.exports=r(94)},1172:function(t,n,r){"use strict";r.d(n,{w_:function(){return GenIcon}});var l=r(2265),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=l.createContext&&l.createContext(o),__assign=function(){return(__assign=Object.assign||function(t){for(var n,r=1,l=arguments.length;r<l;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)},__rest=function(t,n){var r={};for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&0>n.indexOf(l)&&(r[l]=t[l]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,l=Object.getOwnPropertySymbols(t);o<l.length;o++)0>n.indexOf(l[o])&&Object.prototype.propertyIsEnumerable.call(t,l[o])&&(r[l[o]]=t[l[o]]);return r};function GenIcon(t){return function(n){return l.createElement(IconBase,__assign({attr:__assign({},t.attr)},n),function Tree2Element(t){return t&&t.map(function(t,n){return l.createElement(t.tag,__assign({key:n},t.attr),Tree2Element(t.child))})}(t.child))}}function IconBase(t){var elem=function(n){var r,o=t.attr,a=t.size,s=t.title,i=__rest(t,["attr","size","title"]),c=a||n.size||"1em";return n.className&&(r=n.className),t.className&&(r=(r?r+" ":"")+t.className),l.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,i,{className:r,style:__assign(__assign({color:t.color||n.color},n.style),t.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),s&&l.createElement("title",null,s),t.children)};return void 0!==a?l.createElement(a.Consumer,null,function(t){return elem(t)}):elem(o)}},2210:function(t,n,r){"use strict";r.d(n,{F:function(){return composeRefs},e:function(){return useComposedRefs}});var l=r(2265);function composeRefs(...t){return n=>t.forEach(t=>{"function"==typeof t?t(n):null!=t&&(t.current=n)})}function useComposedRefs(...t){return l.useCallback(composeRefs(...t),t)}},7256:function(t,n,r){"use strict";r.d(n,{A4:function(){return Slottable},g7:function(){return s}});var l=r(2265),o=r(2210),a=r(7437),s=l.forwardRef((t,n)=>{let{children:r,...o}=t,s=l.Children.toArray(r),c=s.find(isSlottable);if(c){let t=c.props.children,r=s.map(n=>n!==c?n:l.Children.count(t)>1?l.Children.only(null):l.isValidElement(t)?t.props.children:null);return(0,a.jsx)(i,{...o,ref:n,children:l.isValidElement(t)?l.cloneElement(t,void 0,r):null})}return(0,a.jsx)(i,{...o,ref:n,children:r})});s.displayName="Slot";var i=l.forwardRef((t,n)=>{let{children:r,...a}=t;if(l.isValidElement(r)){let t,s;let i=(t=Object.getOwnPropertyDescriptor(r.props,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning?r.ref:(t=Object.getOwnPropertyDescriptor(r,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning?r.props.ref:r.props.ref||r.ref;return l.cloneElement(r,{...function(t,n){let r={...n};for(let l in n){let o=t[l],a=n[l],s=/^on[A-Z]/.test(l);s?o&&a?r[l]=(...t)=>{a(...t),o(...t)}:o&&(r[l]=o):"style"===l?r[l]={...o,...a}:"className"===l&&(r[l]=[o,a].filter(Boolean).join(" "))}return{...t,...r}}(a,r.props),ref:n?(0,o.F)(n,i):i})}return l.Children.count(r)>1?l.Children.only(null):null});i.displayName="SlotClone";var Slottable=({children:t})=>(0,a.jsx)(a.Fragment,{children:t});function isSlottable(t){return l.isValidElement(t)&&t.type===Slottable}},6061:function(t,n,r){"use strict";r.d(n,{j:function(){return cva}});var l=r(7042);let falsyToString=t=>"boolean"==typeof t?`${t}`:0===t?"0":t,o=l.W,cva=(t,n)=>r=>{var l;if((null==n?void 0:n.variants)==null)return o(t,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:a,defaultVariants:s}=n,i=Object.keys(a).map(t=>{let n=null==r?void 0:r[t],l=null==s?void 0:s[t];if(null===n)return null;let o=falsyToString(n)||falsyToString(l);return a[t][o]}),c=r&&Object.entries(r).reduce((t,n)=>{let[r,l]=n;return void 0===l||(t[r]=l),t},{}),u=null==n?void 0:null===(l=n.compoundVariants)||void 0===l?void 0:l.reduce((t,n)=>{let{class:r,className:l,...o}=n;return Object.entries(o).every(t=>{let[n,r]=t;return Array.isArray(r)?r.includes({...s,...c}[n]):({...s,...c})[n]===r})?[...t,r,l]:t},[]);return o(t,i,u,null==r?void 0:r.class,null==r?void 0:r.className)}}}]);