function p(){}const B=t=>t;function w(t,n){for(const e in n)t[e]=n[e];return t}function C(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function j(t){return t()}function D(){return Object.create(null)}function E(t){t.forEach(j)}function q(t){return typeof t=="function"}function F(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let a;function M(t,n){return t===n?!0:(a||(a=document.createElement("a")),a.href=n,t===a.href)}function P(t){return Object.keys(t).length===0}function b(t,...n){if(t==null){for(const o of n)o(void 0);return p}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function S(t){let n;return b(t,e=>n=e)(),n}function U(t,n,e){t.$$.on_destroy.push(b(n,e))}function G(t,n,e,o){if(t){const u=g(t,n,e,o);return t[0](u)}}function g(t,n,e,o){return t[1]&&o?w(e.ctx.slice(),t[1](o(n))):e.ctx}function H(t,n,e,o){return t[2],n.dirty}function I(t,n,e,o,u,k){if(u){const x=g(n,e,o,k);t.p(x,u)}}function J(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function K(t,n,e){return t.set(e),n}function L(t){return t&&q(t.destroy)?t.destroy:p}let i;function f(t){i=t}function y(){if(!i)throw new Error("Function called outside component initialization");return i}function N(t){y().$$.on_mount.push(t)}function Q(t){y().$$.after_update.push(t)}const s=[],d=[];let c=[];const h=[],m=Promise.resolve();let _=!1;function v(){_||(_=!0,m.then(z))}function R(){return v(),m}function O(t){c.push(t)}const l=new Set;let r=0;function z(){if(r!==0)return;const t=i;do{try{for(;r<s.length;){const n=s[r];r++,f(n),A(n.$$)}}catch(n){throw s.length=0,r=0,n}for(f(null),s.length=0,r=0;d.length;)d.pop()();for(let n=0;n<c.length;n+=1){const e=c[n];l.has(e)||(l.add(e),e())}c.length=0}while(s.length);for(;h.length;)h.pop()();_=!1,l.clear(),f(t)}function A(t){if(t.fragment!==null){t.update(),E(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function T(t){const n=[],e=[];c.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),c=n}export{j as A,s as B,v as C,S as D,G as a,H as b,U as c,M as d,O as e,K as f,J as g,B as h,q as i,Q as j,d as k,C as l,y as m,p as n,N as o,f as p,z as q,E as r,F as s,R as t,I as u,L as v,D as w,P as x,T as y,i as z};
