import{n as u,s as h}from"./scheduler.NrZV1iTz.js";const i=[];function q(e,r){return{subscribe:p(e,r).subscribe}}function p(e,r=u){let n;const b=new Set;function o(t){if(h(e,t)&&(e=t,n)){const c=!i.length;for(const s of b)s[1](),i.push(s,e);if(c){for(let s=0;s<i.length;s+=2)i[s][0](i[s+1]);i.length=0}}}function a(t){o(t(e))}function _(t,c=u){const s=[t,c];return b.add(s),b.size===1&&(n=r(o,a)||u),t(e),()=>{b.delete(s),b.size===0&&n&&(n(),n=null)}}return{set:o,update:a,subscribe:_}}var f;const d=((f=globalThis.__sveltekit_bis16b)==null?void 0:f.base)??"";var l;const k=((l=globalThis.__sveltekit_bis16b)==null?void 0:l.assets)??d;export{k as a,d as b,q as r,p as w};