function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i,c;function u(t,e){return t===e||(i||(i=document.createElement("a")),i.href=e,t===i.href)}function a(e,...n){if(null==e){for(const t of n)t(void 0);return t}const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function d(t,e,n){t.$$.on_destroy.push(a(e,n))}function l(t,e,n){return t.set(n),e}function $(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode&&t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function g(t){return document.createElement(t)}function _(t){return document.createTextNode(t)}function m(){return _(" ")}function b(){return _("")}function y(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function w(t,e,n){const o=new Set;for(let e=0;e<t.length;e+=1)t[e].checked&&o.add(t[e].__value);return n||o.delete(e),Array.from(o)}function E(t){let e;return{p(...n){e=n,e.forEach((e=>t.push(e)))},r(){e.forEach((e=>t.splice(t.indexOf(e),1)))}}}function k(t,e){e=""+e,t.data!==e&&(t.data=e)}function x(t,e){t.value=null==e?"":e}function j(t,e,n,o){null==n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function N(t,e,n){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}n&&void 0===e||(t.selectedIndex=-1)}function A(t){const e=t.querySelector(":checked");return e&&e.__value}function L(t,e,n){t.classList.toggle(e,!!n)}function O(t){c=t}function S(){if(!c)throw new Error("Function called outside component initialization");return c}function C(t){S().$$.on_mount.push(t)}function P(){const t=S();return(e,n,{cancelable:o=!1}={})=>{const s=t.$$.callbacks[e];if(s){const r=function(t,e,{bubbles:n=!1,cancelable:o=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:o})}(e,n,{cancelable:o});return s.slice().forEach((e=>{e.call(t,r)})),!r.defaultPrevented}return!0}}const T=[],M=[];let B=[];const H=[],I=Promise.resolve();let R=!1;function D(t){B.push(t)}const F=new Set;let z=0;function G(){if(0!==z)return;const t=c;do{try{for(;z<T.length;){const t=T[z];z++,O(t),J(t.$$)}}catch(t){throw T.length=0,z=0,t}for(O(null),T.length=0,z=0;M.length;)M.pop()();for(let t=0;t<B.length;t+=1){const e=B[t];F.has(e)||(F.add(e),e())}B.length=0}while(T.length);for(;H.length;)H.pop()();R=!1,F.clear(),O(t)}function J(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}const W=new Set;let q,V;function K(){q={r:0,c:[],p:q}}function Q(){q.r||o(q.c),q=q.p}function U(t,e){t&&t.i&&(W.delete(t),t.i(e))}function X(t,e,n,o){if(t&&t.o){if(W.has(t))return;W.add(t),q.c.push((()=>{W.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function Y(t){return void 0!==t?.length?t:Array.from(t)}function Z(t,e){t.d(1),e.delete(t.key)}function tt(t,e,n,s,r,i,c,u,a,d,l,$){let f=t.length,p=i.length,h=f;const g={};for(;h--;)g[t[h].key]=h;const _=[],m=new Map,b=new Map,y=[];for(h=p;h--;){const t=$(r,i,h),o=n(t);let u=c.get(o);u?s&&y.push((()=>u.p(t,e))):(u=d(o,t),u.c()),m.set(o,_[h]=u),o in g&&b.set(o,Math.abs(h-g[o]))}const v=new Set,w=new Set;function E(t){U(t,1),t.m(u,l),c.set(t.key,t),l=t.first,p--}for(;f&&p;){const e=_[p-1],n=t[f-1],o=e.key,s=n.key;e===n?(l=e.first,f--,p--):m.has(s)?!c.has(o)||v.has(o)?E(e):w.has(s)?f--:b.get(o)>b.get(s)?(w.add(o),E(e)):(v.add(s),f--):(a(n,c),f--)}for(;f--;){const e=t[f];m.has(e.key)||a(e,c)}for(;p;)E(_[p-1]);return o(y),_}function et(t){t&&t.c()}function nt(t,n,r){const{fragment:i,after_update:c}=t.$$;i&&i.m(n,r),D((()=>{const n=t.$$.on_mount.map(e).filter(s);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),c.forEach(D)}function ot(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];B.forEach((o=>-1===t.indexOf(o)?e.push(o):n.push(o))),n.forEach((t=>t())),B=e}(n.after_update),o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){-1===t.$$.dirty[0]&&(T.push(t),R||(R=!0,I.then(G)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function rt(e,s,r,i,u,a,d=null,l=[-1]){const $=c;O(e);const f=e.$$={fragment:null,ctx:[],props:a,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||($?$.$$.context:[])),callbacks:n(),dirty:l,skip_bound:!1,root:s.target||$.$$.root};d&&d(f.root);let h=!1;if(f.ctx=r?r(e,s.props||{},((t,n,...o)=>{const s=o.length?o[0]:n;return f.ctx&&u(f.ctx[t],f.ctx[t]=s)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](s),h&&st(e,t)),n})):[],f.update(),h=!0,o(f.before_update),f.fragment=!!i&&i(f.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);f.fragment&&f.fragment.l(t),t.forEach(p)}else f.fragment&&f.fragment.c();s.intro&&U(e.$$.fragment),nt(e,s.target,s.anchor),G()}O($)}function it(t,e,n,o){const s=n[t]?.type;if(e="Boolean"===s&&"boolean"!=typeof e?null!=e:e,!o||!n[t])return e;if("toAttribute"===o)switch(s){case"Object":case"Array":return null==e?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return null==e?null:e;default:return e}else switch(s){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":default:return e;case"Number":return null!=e?+e:e}}function ct(t,e,n,o,s,r){let i=class extends V{constructor(){super(t,n,s),this.$$p_d=e}static get observedAttributes(){return Object.keys(e).map((t=>(e[t].attribute||t).toLowerCase()))}};return Object.keys(e).forEach((t=>{Object.defineProperty(i.prototype,t,{get(){return this.$$c&&t in this.$$c?this.$$c[t]:this.$$d[t]},set(n){n=it(t,n,e),this.$$d[t]=n,this.$$c?.$set({[t]:n})}})})),o.forEach((t=>{Object.defineProperty(i.prototype,t,{get(){return this.$$c?.[t]}})})),r&&(i=r(i)),t.element=i,i}"function"==typeof HTMLElement&&(V=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;constructor(t,e,n){super(),this.$$ctor=t,this.$$s=e,n&&this.attachShadow({mode:"open"})}addEventListener(t,e,n){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(e),this.$$c){const n=this.$$c.$on(t,e);this.$$l_u.set(e,n)}super.addEventListener(t,e,n)}removeEventListener(t,e,n){if(super.removeEventListener(t,e,n),this.$$c){const t=this.$$l_u.get(e);t&&(t(),this.$$l_u.delete(e))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){if(await Promise.resolve(),!this.$$cn)return;function t(t){return()=>{let e;return{c:function(){e=g("slot"),"default"!==t&&v(e,"name",t)},m:function(t,n){f(t,e,n)},d:function(t){t&&p(e)}}}}const e={},n=function(t){const e={};return t.childNodes.forEach((t=>{e[t.slot||"default"]=!0})),e}(this);for(const s of this.$$s)s in n&&(e[s]=[t(s)]);for(const r of this.attributes){const i=this.$$g_p(r.name);i in this.$$d||(this.$$d[i]=it(i,r.value,this.$$p_d,"toProp"))}this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:e,$$scope:{ctx:[]}}});const o=()=>{this.$$r=!0;for(const t in this.$$p_d)if(this.$$d[t]=this.$$c.$$.ctx[this.$$c.$$.props[t]],this.$$p_d[t].reflect){const e=it(t,this.$$d[t],this.$$p_d,"toAttribute");null==e?this.removeAttribute(this.$$p_d[t].attribute||t):this.setAttribute(this.$$p_d[t].attribute||t,e)}this.$$r=!1};this.$$c.$$.after_update.push(o),o();for(const c in this.$$l)for(const u of this.$$l[c]){const a=this.$$c.$on(c,u);this.$$l_u.set(u,a)}this.$$l={}}}attributeChangedCallback(t,e,n){this.$$r||(t=this.$$g_p(t),this.$$d[t]=it(t,n,this.$$p_d,"toProp"),this.$$c?.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then((()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)}))}$$g_p(t){return Object.keys(this.$$p_d).find((e=>this.$$p_d[e].attribute===t||!this.$$p_d[e].attribute&&e.toLowerCase()===t))||t}});class ut{$$=void 0;$$set=void 0;$destroy(){ot(this,1),this.$destroy=t}$on(e,n){if(!s(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4");const at=[];function dt(e,n=t){let o;const s=new Set;function i(t){if(r(e,t)&&(e=t,o)){const t=!at.length;for(const t of s)t[1](),at.push(t,e);if(t){for(let t=0;t<at.length;t+=2)at[t][0](at[t+1]);at.length=0}}}function c(t){i(t(e))}return{set:i,update:c,subscribe:function(r,u=t){const a=[r,u];return s.add(a),1===s.size&&(o=n(i,c)||t),r(e),()=>{s.delete(a),0===s.size&&o&&(o(),o=null)}}}}const lt=dt(0),$t=dt({lhcVersion:0,last_actions_index:0,last_actions:[],userDepartments:[],userProductNames:[],userDepartmentsGroups:[],userGroups:[],userList:[],widgets:[],additionalColumns:[],excludeIcons:[],notifIcons:[],departmentd:[],departmentd_dpgroups:[],departmentdNames:[],operatord:[],operatord_dpgroups:[],operatord_ugroups:[],operatordNames:[],actived:[],actived_products:[],actived_dpgroups:[],actived_ugroups:[],activedNames:[],mcd:[],mcd_products:[],mcd_dpgroups:[],mcdNames:[],unreadd:[],unreadd_products:[],unreadd_dpgroups:[],unreaddNames:[],pendingd:[],pendingd_products:[],pendingd_dpgroups:[],pendingd_ugroups:[],pendingdNames:[],botd:[],botd_products:[],botd_dpgroups:[],botd_ugroups:[],botdNames:[],subjectd:[],subjectd_products:[],subjectd_dpgroups:[],subjectd_ugroups:[],subjectdNames:[],closedd:[],closedd_products:[],closedd_dpgroups:[],closeddNames:[],statusNotifications:[],toggleWidgetData:[],isListLoaded:!1,activeu:[],pendingu:[],subjectu:[],oopu:[],custom_extension_filter:"",depFilterText:"",userFilterText:"",limitb:"10",limita:"10",limitu:"10",limitp:"10",limito:String(confLH.dlist.op_n),limitc:"10",limitd:"10",limitmc:"10",limitgc:"10",limits:"10",new_group_type:"1",bot_st:{},departmentd_hide_dep:!1,departmentd_hide_dgroup:!1,lmtoggle:!1,rmtoggle:!1,current_user_id:confLH.user_id}),ft=dt({});const pt=await fetch(WWW_DIR_JAVASCRIPT+"restapi/lang/lhcbo",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":confLH.csrf_token}}).catch((t=>{console.log("Translations could not be loaded!")})),ht=await pt.json();const gt=function(e,n,r){const i=!Array.isArray(e),c=i?[e]:e;if(!c.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const u=n.length<2;return d=(e,r)=>{let d=!1;const l=[];let $=0,f=t;const p=()=>{if($)return;f();const o=n(i?l[0]:l,e,r);u?e(o):f=s(o)?o:t},h=c.map(((t,e)=>a(t,(t=>{l[e]=t,$&=~(1<<e),d&&p()}),(()=>{$|=1<<e}))));return d=!0,p(),function(){o(h),f(),d=!1}},{subscribe:dt(r,d).subscribe};var d}(dt("lhcbo"),(t=>(e,n={})=>function(t,e,n){if(!e)throw new Error("no key provided to $t()");if(!t)throw new Error(`no translation for key "${e}"`);let o=ht[e];return o?(Object.keys(n).map((t=>{const e=new RegExp(`{{${t}}}`,"g");o=o.replace(e,n[t])})),o):(console.log(`no translation found for ${e}`),e)}(t,e,n)));export{h as A,a as B,A as C,tt as D,Z as E,D as F,N as G,u as H,j as I,E as J,w as K,U as L,X as M,Q as N,K as O,et as P,nt as Q,ot as R,ut as S,ft as T,P as U,d as a,lt as b,ct as c,l as d,m as e,G as f,b as g,f as h,rt as i,p as j,g as k,$t as l,v as m,t as n,C as o,$ as p,k as q,y as r,r as s,_ as t,gt as u,x as v,o as w,L as x,s as y,Y as z};
//# sourceMappingURL=i18n.VeTWoJ_t.js.map
