import{s as G,a as K,u as Q,g as W,b as X,r as Y,c as Z,o as $}from"../chunks/scheduler.DZprM1kE.js";import{S as x,i as ee,e as b,s as O,t as z,c as y,a as S,d as p,f as I,q as te,b as B,m as h,g as E,h as k,n as J,o as T,p as se,k as le,l as ae,r as re,u as V,j as oe}from"../chunks/index.DCUrm-tw.js";import{e as H}from"../chunks/each.D6YF6ztN.js";import{b as D}from"../chunks/paths.C7JpQdG5.js";import{s as ne}from"../chunks/user.kMJKb8bx.js";import{a as ie,g as ce}from"../chunks/entry.YXitRPU7.js";function L(o,t,r){const s=o.slice();return s[7]=t[r],s}function P(o){let t,r=o[7].name.toUpperCase()+"",s,u;return{c(){t=b("a"),s=z(r),this.h()},l(l){t=y(l,"A",{style:!0,id:!0,href:!0,class:!0});var i=S(t);s=B(i,r),i.forEach(p),this.h()},h(){V(t,"background-color",o[7].color),h(t,"id","prev_search"),h(t,"href",u=o[7].link),h(t,"class","svelte-2wyqhi")},m(l,i){E(l,t,i),k(t,s)},p(l,i){i&2&&r!==(r=l[7].name.toUpperCase()+"")&&oe(s,r),i&2&&V(t,"background-color",l[7].color),i&2&&u!==(u=l[7].link)&&h(t,"href",u)},d(l){l&&p(t)}}}function ue(o){let t,r,s,u,l,i="Home",m,d,_,g,N,v,R,q,A,F;const M=o[3].default,f=K(M,o,o[2],null);let w=H(o[1]),n=[];for(let e=0;e<w.length;e+=1)n[e]=P(L(o,w,e));return{c(){t=b("div"),r=O(),s=b("main"),u=b("div"),l=b("a"),l.textContent=i,m=O(),d=b("form"),_=b("input"),g=O(),f&&f.c(),N=O(),v=b("footer"),R=z(`Recent Searches :\r
    `);for(let e=0;e<n.length;e+=1)n[e].c();this.h()},l(e){t=y(e,"DIV",{class:!0}),S(t).forEach(p),r=I(e),s=y(e,"MAIN",{class:!0});var c=S(s);u=y(c,"DIV",{class:!0});var a=S(u);l=y(a,"A",{id:!0,href:!0,class:!0,"data-svelte-h":!0}),te(l)!=="svelte-xjb5qg"&&(l.textContent=i),m=I(a),d=y(a,"FORM",{class:!0});var C=S(d);_=y(C,"INPUT",{type:!0,placeholder:!0,class:!0}),C.forEach(p),a.forEach(p),g=I(c),f&&f.l(c),c.forEach(p),N=I(e),v=y(e,"FOOTER",{class:!0});var U=S(v);R=B(U,`Recent Searches :\r
    `);for(let j=0;j<n.length;j+=1)n[j].l(U);U.forEach(p),this.h()},h(){h(t,"class","backdrop svelte-2wyqhi"),h(l,"id","home"),h(l,"href",D+"/search"),h(l,"class","svelte-2wyqhi"),h(_,"type","text"),h(_,"placeholder","Sök upp en pokemon"),h(_,"class","svelte-2wyqhi"),h(d,"class","svelte-2wyqhi"),h(u,"class","head svelte-2wyqhi"),h(s,"class","svelte-2wyqhi"),h(v,"class","svelte-2wyqhi")},m(e,c){E(e,t,c),E(e,r,c),E(e,s,c),k(s,u),k(u,l),k(u,m),k(u,d),k(d,_),J(_,o[0]),k(s,g),f&&f.m(s,null),E(e,N,c),E(e,v,c),k(v,R);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(v,null);q=!0,A||(F=[T(_,"input",o[4]),T(d,"submit",se(o[5]))],A=!0)},p(e,[c]){if(c&1&&_.value!==e[0]&&J(_,e[0]),f&&f.p&&(!q||c&4)&&Q(f,M,e,e[2],q?X(M,e[2],c,null):W(e[2]),null),c&2){w=H(e[1]);let a;for(a=0;a<w.length;a+=1){const C=L(e,w,a);n[a]?n[a].p(C,c):(n[a]=P(C),n[a].c(),n[a].m(v,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=w.length}},i(e){q||(le(f,e),q=!0)},o(e){ae(f,e),q=!1},d(e){e&&(p(t),p(r),p(s),p(N),p(v)),f&&f.d(e),re(n,e),A=!1,Y(F)}}}function he(o,t,r){let s;Z(o,ne,g=>r(6,s=g));let{$$slots:u={},$$scope:l}=t;console.log(D);let i,m=[];$(()=>{r(1,m=s.length>2?JSON.parse(s):[]),r(1,m)}),ie(()=>{r(1,m=s.length>2?JSON.parse(s):[]),r(1,m)});function d(){i=this.value,r(0,i)}const _=()=>ce(D+"/search/"+i);return o.$$set=g=>{"$$scope"in g&&r(2,l=g.$$scope)},[i,m,l,u,d,_]}class ge extends x{constructor(t){super(),ee(this,t,he,ue,G,{})}}export{ge as component};
