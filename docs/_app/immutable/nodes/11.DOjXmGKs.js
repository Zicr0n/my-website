import{s as c,n as i,r as d}from"../chunks/scheduler.D9gYHG_8.js";import{S as _,i as g,e as l,c as p,a as v,d as u,k as m,g as y,h as $,l as h,m as f,p as b}from"../chunks/index.2neWSbZO.js";import{g as k}from"../chunks/entry.AVU_5Mo7.js";import"../chunks/paths.DrZU_JBk.js";function S(r){let t,e,n,o;return{c(){t=l("form"),e=l("input"),this.h()},l(a){t=p(a,"FORM",{});var s=v(t);e=p(s,"INPUT",{type:!0,placeholder:!0}),s.forEach(u),this.h()},h(){m(e,"type","text"),m(e,"placeholder","Sök upp en pokemon")},m(a,s){y(a,t,s),$(t,e),h(e,r[0]),n||(o=[f(e,"input",r[1]),f(t,"submit",b(r[2]))],n=!0)},p(a,[s]){s&1&&e.value!==a[0]&&h(e,a[0])},i,o:i,d(a){a&&u(t),n=!1,d(o)}}}function P(r,t,e){let n=" nig";function o(){n=this.value,e(0,n)}return[n,o,()=>k("/search/"+n)]}class I extends _{constructor(t){super(),g(this,t,P,S,c,{})}}export{I as component};
