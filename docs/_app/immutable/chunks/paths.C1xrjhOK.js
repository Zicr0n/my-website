import{n as u,s as h}from"./scheduler.D9gYHG_8.js";const n=[];function q(e,o){return{subscribe:p(e,o).subscribe}}function p(e,o=u){let r;const i=new Set;function b(t){if(h(e,t)&&(e=t,r)){const c=!n.length;for(const s of i)s[1](),n.push(s,e);if(c){for(let s=0;s<n.length;s+=2)n[s][0](n[s+1]);n.length=0}}}function a(t){b(t(e))}function _(t,c=u){const s=[t,c];return i.add(s),i.size===1&&(r=o(b,a)||u),t(e),()=>{i.delete(s),i.size===0&&r&&(r(),r=null)}}return{set:b,update:a,subscribe:_}}var f;const d=((f=globalThis.__sveltekit_yjer5o)==null?void 0:f.base)??"";var l;const j=((l=globalThis.__sveltekit_yjer5o)==null?void 0:l.assets)??d;export{j as a,d as b,q as r,p as w};
