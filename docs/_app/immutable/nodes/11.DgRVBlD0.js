import{s as f,n as i,r as d}from"../chunks/scheduler.DZprM1kE.js";import{S as _,i as g,e as l,c as u,a as v,d as p,m as h,g as y,h as S,n as m,o as c,p as b}from"../chunks/index.DCUrm-tw.js";import{g as k}from"../chunks/entry.w1FpF6TT.js";function P(r){let t,e,n,o;return{c(){t=l("form"),e=l("input"),this.h()},l(a){t=u(a,"FORM",{});var s=v(t);e=u(s,"INPUT",{type:!0,placeholder:!0}),s.forEach(p),this.h()},h(){h(e,"type","text"),h(e,"placeholder","Sök upp en pokemon")},m(a,s){y(a,t,s),S(t,e),m(e,r[0]),n||(o=[c(e,"input",r[1]),c(t,"submit",b(r[2]))],n=!0)},p(a,[s]){s&1&&e.value!==a[0]&&m(e,a[0])},i,o:i,d(a){a&&p(t),n=!1,d(o)}}}function q(r,t,e){let{search:n}=t;function o(){n=this.value,e(0,n)}const a=()=>k("search/"+n);return r.$$set=s=>{"search"in s&&e(0,n=s.search)},[n,o,a]}class I extends _{constructor(t){super(),g(this,t,q,P,f,{search:0})}}export{I as component};
