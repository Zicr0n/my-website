import{s as M,b as U,u as j,d as q,e as D,c as F,o as L}from"../chunks/scheduler.B35ASNvL.js";import{S as T,i as V,e as b,s as E,t as A,c as v,a as k,d as h,f as N,b as I,k as m,g,h as J,r as w,o as z,u as B,v as O,j as G}from"../chunks/index.B56sKvy2.js";import{e as y}from"../chunks/each.D6YF6ztN.js";import{b as H}from"../chunks/paths.B3gqEi-s.js";import{s as K}from"../chunks/user.B8WoXpt6.js";import{a as P}from"../chunks/entry.B_GOzU3n.js";function C(c,t,o){const l=c.slice();return l[5]=t[o],l}function R(c){let t,o=c[5].name.toUpperCase()+"",l,_;return{c(){t=b("a"),l=A(o),this.h()},l(s){t=v(s,"A",{style:!0,id:!0,href:!0,class:!0});var r=k(t);l=I(r,o),r.forEach(h),this.h()},h(){O(t,"background-color",c[5].color),m(t,"id","prev_search"),m(t,"href",_=c[5].link),m(t,"class","svelte-9ff7n0")},m(s,r){g(s,t,r),J(t,l)},p(s,r){r&1&&o!==(o=s[5].name.toUpperCase()+"")&&G(l,o),r&1&&O(t,"background-color",s[5].color),r&1&&_!==(_=s[5].link)&&m(t,"href",_)},d(s){s&&h(t)}}}function Q(c){let t,o,l,_,s,r,u;const S=c[2].default,f=U(S,c,c[1],null);let p=y(c[0]),n=[];for(let e=0;e<p.length;e+=1)n[e]=R(C(c,p,e));return{c(){t=b("div"),o=E(),l=b("main"),f&&f.c(),_=E(),s=b("footer"),r=A(`Recent Searches :\r
    `);for(let e=0;e<n.length;e+=1)n[e].c();this.h()},l(e){t=v(e,"DIV",{class:!0}),k(t).forEach(h),o=N(e),l=v(e,"MAIN",{class:!0});var i=k(l);f&&f.l(i),i.forEach(h),_=N(e),s=v(e,"FOOTER",{class:!0});var a=k(s);r=I(a,`Recent Searches :\r
    `);for(let d=0;d<n.length;d+=1)n[d].l(a);a.forEach(h),this.h()},h(){m(t,"class","backdrop svelte-9ff7n0"),m(l,"class","svelte-9ff7n0"),m(s,"class","svelte-9ff7n0")},m(e,i){g(e,t,i),g(e,o,i),g(e,l,i),f&&f.m(l,null),g(e,_,i),g(e,s,i),J(s,r);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(s,null);u=!0},p(e,[i]){if(f&&f.p&&(!u||i&2)&&j(f,S,e,e[1],u?D(S,e[1],i,null):q(e[1]),null),i&1){p=y(e[0]);let a;for(a=0;a<p.length;a+=1){const d=C(e,p,a);n[a]?n[a].p(d,i):(n[a]=R(d),n[a].c(),n[a].m(s,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=p.length}},i(e){u||(w(f,e),u=!0)},o(e){z(f,e),u=!1},d(e){e&&(h(t),h(o),h(l),h(_),h(s)),f&&f.d(e),B(n,e)}}}function W(c,t,o){let l;F(c,K,u=>o(3,l=u));let{$$slots:_={},$$scope:s}=t;console.log(H);let r=[];return L(()=>{o(0,r=l.length>2?JSON.parse(l):[]),o(0,r)}),P(()=>{o(0,r=l.length>2?JSON.parse(l):[]),o(0,r)}),c.$$set=u=>{"$$scope"in u&&o(1,s=u.$$scope)},[r,s,_]}class te extends T{constructor(t){super(),V(this,t,W,Q,M,{})}}export{te as component};
