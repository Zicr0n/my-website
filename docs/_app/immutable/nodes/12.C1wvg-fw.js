import{s as f,n as i,r as d}from"../chunks/scheduler.D9gYHG_8.js";import{S as _,i as g,e as l,c as p,a as v,d as u,k as m,g as b,h as y,l as h,m as c,p as k}from"../chunks/index.2neWSbZO.js";import{g as S}from"../chunks/entry.DijM_Lql.js";import{b as P}from"../chunks/paths.BuAoeEjp.js";function q(r){let t,e,s,o;return{c(){t=l("form"),e=l("input"),this.h()},l(a){t=p(a,"FORM",{});var n=v(t);e=p(n,"INPUT",{type:!0,placeholder:!0}),n.forEach(u),this.h()},h(){m(e,"type","text"),m(e,"placeholder","Sök upp en pokemon")},m(a,n){b(a,t,n),y(t,e),h(e,r[0]),s||(o=[c(e,"input",r[1]),c(t,"submit",k(r[2]))],s=!0)},p(a,[n]){n&1&&e.value!==a[0]&&h(e,a[0])},i,o:i,d(a){a&&u(t),s=!1,d(o)}}}function C(r,t,e){let{search:s}=t;function o(){s=this.value,e(0,s)}const a=()=>S(P+"/search/"+s);return r.$$set=n=>{"search"in n&&e(0,s=n.search)},[s,o,a]}class N extends _{constructor(t){super(),g(this,t,C,q,f,{search:0})}}export{N as component};
