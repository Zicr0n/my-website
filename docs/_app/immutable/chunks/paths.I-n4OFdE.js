import{n as u,s as h}from"./scheduler.D9gYHG_8.js";const n=[];function k(e,o){return{subscribe:d(e,o).subscribe}}function d(e,o=u){let i;const r=new Set;function b(t){if(h(e,t)&&(e=t,i)){const c=!n.length;for(const s of r)s[1](),n.push(s,e);if(c){for(let s=0;s<n.length;s+=2)n[s][0](n[s+1]);n.length=0}}}function f(t){b(t(e))}function _(t,c=u){const s=[t,c];return r.add(s),r.size===1&&(i=o(b,f)||u),t(e),()=>{r.delete(s),r.size===0&&i&&(i(),i=null)}}return{set:b,update:f,subscribe:_}}var a;const p=((a=globalThis.__sveltekit_hfdkvx)==null?void 0:a.base)??"";var l;const q=((l=globalThis.__sveltekit_hfdkvx)==null?void 0:l.assets)??p;export{q as a,p as b,k as r,d as w};
