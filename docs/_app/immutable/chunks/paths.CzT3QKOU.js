import{n as u,s as h}from"./scheduler.D9gYHG_8.js";const n=[];function k(e,o){return{subscribe:p(e,o).subscribe}}function p(e,o=u){let i;const r=new Set;function b(t){if(h(e,t)&&(e=t,i)){const c=!n.length;for(const s of r)s[1](),n.push(s,e);if(c){for(let s=0;s<n.length;s+=2)n[s][0](n[s+1]);n.length=0}}}function a(t){b(t(e))}function _(t,c=u){const s=[t,c];return r.add(s),r.size===1&&(i=o(b,a)||u),t(e),()=>{r.delete(s),r.size===0&&i&&(i(),i=null)}}return{set:b,update:a,subscribe:_}}var f;const d=((f=globalThis.__sveltekit_1kjyafw)==null?void 0:f.base)??"";var l;const w=((l=globalThis.__sveltekit_1kjyafw)==null?void 0:l.assets)??d;export{w as a,d as b,k as r,p as w};
