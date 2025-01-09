import{e as be,s as Ce,n as oe,r as te,b as W,i as X}from"../chunks/scheduler.BxQ7HAB6.js";import{S as ke,i as Te,e as m,s as U,c as g,a as H,l as M,f as j,d as I,n as d,g as J,h as s,p as V,q as K,v as se,y as Y,z as Z,A as he,B as pe,C as de,x as ae,t as ve,b as me,o as w,w as $,j as ge,D as x}from"../chunks/index.BhOWVWD9.js";import{e as R}from"../chunks/each.D6YF6ztN.js";function ee(l,{delay:n=0,duration:e=400,easing:t=be}={}){const f=+getComputedStyle(l).opacity;return{delay:n,duration:e,easing:t,css:a=>`opacity: ${a*f}`}}function re(l,n,e){const t=l.slice();return t[8]=n[e],t[9]=n,t[10]=e,t}function ie(l,n,e){const t=l.slice();return t[8]=n[e],t[11]=n,t[12]=e,t}function ue(l){let n,e,t,f="Hög",a,T="Mid",u,z="Låg",N,r,h=(l[8].bought?"":l[8].name)+"",v,L,b,B="x",q,p,C,A,D;function S(){l[6].call(e,l[11],l[12])}return{c(){n=m("li"),e=m("select"),t=m("option"),t.textContent=f,a=m("option"),a.textContent=T,u=m("option"),u.textContent=z,N=U(),r=m("button"),v=ve(h),L=U(),b=m("button"),b.textContent=B,q=U(),this.h()},l(_){n=g(_,"LI",{class:!0});var c=H(n);e=g(c,"SELECT",{style:!0,class:!0});var O=H(e);t=g(O,"OPTION",{style:!0,"data-svelte-h":!0}),M(t)!=="svelte-19rjouz"&&(t.textContent=f),a=g(O,"OPTION",{style:!0,"data-svelte-h":!0}),M(a)!=="svelte-icr2os"&&(a.textContent=T),u=g(O,"OPTION",{style:!0,"data-svelte-h":!0}),M(u)!=="svelte-1q6dbc6"&&(u.textContent=z),O.forEach(I),N=j(c),r=g(c,"BUTTON",{id:!0,class:!0});var k=H(r);v=me(k,h),k.forEach(I),L=j(c),b=g(c,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),M(b)!=="svelte-1cd20ny"&&(b.textContent=B),q=j(c),c.forEach(I),this.h()},h(){t.__value="red",V(t,t.__value),w(t,"background-color","red"),a.__value="yellow",V(a,a.__value),w(a,"background-color","yellow"),u.__value="green",V(u,u.__value),w(u,"background-color","green"),w(e,"background-color",l[8].prio),w(e,"color","transparent"),d(e,"class","svelte-a98msp"),l[8].prio===void 0&&W(S),d(r,"id","moveItemButton"),d(r,"class","svelte-a98msp"),d(b,"id","removeItemButton"),d(b,"class","svelte-a98msp"),d(n,"class","svelte-a98msp")},m(_,c){J(_,n,c),s(n,e),s(e,t),s(e,a),s(e,u),$(e,l[8].prio,!0),s(n,N),s(n,r),s(r,v),s(n,L),s(n,b),s(n,q),C=!0,A||(D=[K(e,"change",S),K(r,"click",function(){X(l[4](l[8]))&&l[4](l[8]).apply(this,arguments)}),K(b,"click",function(){X(l[3](l[8]))&&l[3](l[8]).apply(this,arguments)})],A=!0)},p(_,c){l=_,(!C||c&1)&&w(e,"background-color",l[8].prio),c&1&&$(e,l[8].prio),(!C||c&1)&&h!==(h=(l[8].bought?"":l[8].name)+"")&&ge(v,h)},i(_){C||(_&&W(()=>{C&&(p||(p=x(n,ee,{},!0)),p.run(1))}),C=!0)},o(_){_&&(p||(p=x(n,ee,{},!1)),p.run(0)),C=!1},d(_){_&&I(n),_&&p&&p.end(),A=!1,te(D)}}}function ce(l){let n,e=l[8].bought===!1&&ue(l);return{c(){e&&e.c(),n=Y()},l(t){e&&e.l(t),n=Y()},m(t,f){e&&e.m(t,f),J(t,n,f)},p(t,f){t[8].bought===!1?e?(e.p(t,f),f&1&&Z(e,1)):(e=ue(t),e.c(),Z(e,1),e.m(n.parentNode,n)):e&&(he(),pe(e,1,1,()=>{e=null}),de())},d(t){t&&I(n),e&&e.d(t)}}}function fe(l){let n,e,t,f="Hög",a,T="Mid",u,z="Låg",N,r,h=(l[8].bought?l[8].name:"")+"",v,L,b,B="x",q,p,C,A,D;function S(){l[7].call(e,l[9],l[10])}return{c(){n=m("li"),e=m("select"),t=m("option"),t.textContent=f,a=m("option"),a.textContent=T,u=m("option"),u.textContent=z,N=U(),r=m("button"),v=ve(h),L=U(),b=m("button"),b.textContent=B,q=U(),this.h()},l(_){n=g(_,"LI",{class:!0});var c=H(n);e=g(c,"SELECT",{style:!0,class:!0});var O=H(e);t=g(O,"OPTION",{style:!0,"data-svelte-h":!0}),M(t)!=="svelte-19rjouz"&&(t.textContent=f),a=g(O,"OPTION",{style:!0,"data-svelte-h":!0}),M(a)!=="svelte-icr2os"&&(a.textContent=T),u=g(O,"OPTION",{style:!0,"data-svelte-h":!0}),M(u)!=="svelte-1q6dbc6"&&(u.textContent=z),O.forEach(I),N=j(c),r=g(c,"BUTTON",{id:!0,class:!0});var k=H(r);v=me(k,h),k.forEach(I),L=j(c),b=g(c,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),M(b)!=="svelte-1cd20ny"&&(b.textContent=B),q=j(c),c.forEach(I),this.h()},h(){t.__value="red",V(t,t.__value),w(t,"background-color","red"),a.__value="yellow",V(a,a.__value),w(a,"background-color","yellow"),u.__value="green",V(u,u.__value),w(u,"background-color","green"),w(e,"background-color",l[8].prio),w(e,"color","transparent"),d(e,"class","svelte-a98msp"),l[8].prio===void 0&&W(S),d(r,"id","moveItemButton"),d(r,"class","svelte-a98msp"),d(b,"id","removeItemButton"),d(b,"class","svelte-a98msp"),d(n,"class","svelte-a98msp")},m(_,c){J(_,n,c),s(n,e),s(e,t),s(e,a),s(e,u),$(e,l[8].prio,!0),s(n,N),s(n,r),s(r,v),s(n,L),s(n,b),s(n,q),C=!0,A||(D=[K(e,"change",S),K(r,"click",function(){X(l[4](l[8]))&&l[4](l[8]).apply(this,arguments)}),K(b,"click",function(){X(l[3](l[8]))&&l[3](l[8]).apply(this,arguments)})],A=!0)},p(_,c){l=_,(!C||c&1)&&w(e,"background-color",l[8].prio),c&1&&$(e,l[8].prio),(!C||c&1)&&h!==(h=(l[8].bought?l[8].name:"")+"")&&ge(v,h)},i(_){C||(_&&W(()=>{C&&(p||(p=x(n,ee,{},!0)),p.run(1))}),C=!0)},o(_){_&&(p||(p=x(n,ee,{},!1)),p.run(0)),C=!1},d(_){_&&I(n),_&&p&&p.end(),A=!1,te(D)}}}function _e(l){let n,e=l[8].bought===!0&&fe(l);return{c(){e&&e.c(),n=Y()},l(t){e&&e.l(t),n=Y()},m(t,f){e&&e.m(t,f),J(t,n,f)},p(t,f){t[8].bought===!0?e?(e.p(t,f),f&1&&Z(e,1)):(e=fe(t),e.c(),Z(e,1),e.m(n.parentNode,n)):e&&(he(),pe(e,1,1,()=>{e=null}),de())},d(t){t&&I(n),e&&e.d(t)}}}function ye(l){let n,e,t="Shopping List",f,a,T,u,z="Varor att köpa",N,r,h,v,L="<strong>Lägg till vara</strong>",b,B,q,p,C,A="Köpta varor",D,S,_,c,O=R(l[0]),k=[];for(let i=0;i<O.length;i+=1)k[i]=ce(ie(l,O,i));let G=R(l[0]),y=[];for(let i=0;i<G.length;i+=1)y[i]=_e(re(l,G,i));return{c(){n=m("main"),e=m("h1"),e.textContent=t,f=U(),a=m("div"),T=m("section"),u=m("h2"),u.textContent=z,N=U(),r=m("input"),h=U(),v=m("button"),v.innerHTML=L,b=U(),B=m("ul");for(let i=0;i<k.length;i+=1)k[i].c();q=U(),p=m("section"),C=m("h2"),C.textContent=A,D=U(),S=m("ul");for(let i=0;i<y.length;i+=1)y[i].c();this.h()},l(i){n=g(i,"MAIN",{class:!0});var P=H(n);e=g(P,"H1",{class:!0,"data-svelte-h":!0}),M(e)!=="svelte-1ycj1me"&&(e.textContent=t),f=j(P),a=g(P,"DIV",{class:!0});var o=H(a);T=g(o,"SECTION",{class:!0});var E=H(T);u=g(E,"H2",{class:!0,"data-svelte-h":!0}),M(u)!=="svelte-1lj1vgt"&&(u.textContent=z),N=j(E),r=g(E,"INPUT",{type:!0,id:!0,maxlength:!0,placeholder:!0,class:!0}),h=j(E),v=g(E,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),M(v)!=="svelte-mjd19i"&&(v.innerHTML=L),b=j(E),B=g(E,"UL",{});var le=H(B);for(let F=0;F<k.length;F+=1)k[F].l(le);le.forEach(I),E.forEach(I),q=j(o),p=g(o,"SECTION",{class:!0});var Q=H(p);C=g(Q,"H2",{class:!0,"data-svelte-h":!0}),M(C)!=="svelte-tcetzy"&&(C.textContent=A),D=j(Q),S=g(Q,"UL",{});var ne=H(S);for(let F=0;F<y.length;F+=1)y[F].l(ne);ne.forEach(I),Q.forEach(I),o.forEach(I),P.forEach(I),this.h()},h(){d(e,"class","svelte-a98msp"),d(u,"class","svelte-a98msp"),d(r,"type","text"),d(r,"id","itemToAdd"),d(r,"maxlength","16"),d(r,"placeholder","Skriv ner varan"),d(r,"class","svelte-a98msp"),d(v,"id","addItemButton"),d(v,"class","svelte-a98msp"),d(T,"class","svelte-a98msp"),d(C,"class","svelte-a98msp"),d(p,"class","svelte-a98msp"),d(a,"class","categories_container svelte-a98msp"),d(n,"class","container svelte-a98msp")},m(i,P){J(i,n,P),s(n,e),s(n,f),s(n,a),s(a,T),s(T,u),s(T,N),s(T,r),V(r,l[1]),s(T,h),s(T,v),s(T,b),s(T,B);for(let o=0;o<k.length;o+=1)k[o]&&k[o].m(B,null);s(a,q),s(a,p),s(p,C),s(p,D),s(p,S);for(let o=0;o<y.length;o+=1)y[o]&&y[o].m(S,null);_||(c=[K(r,"input",l[5]),K(v,"click",l[2])],_=!0)},p(i,[P]){if(P&2&&r.value!==i[1]&&V(r,i[1]),P&25){O=R(i[0]);let o;for(o=0;o<O.length;o+=1){const E=ie(i,O,o);k[o]?k[o].p(E,P):(k[o]=ce(E),k[o].c(),k[o].m(B,null))}for(;o<k.length;o+=1)k[o].d(1);k.length=O.length}if(P&25){G=R(i[0]);let o;for(o=0;o<G.length;o+=1){const E=re(i,G,o);y[o]?y[o].p(E,P):(y[o]=_e(E),y[o].c(),y[o].m(S,null))}for(;o<y.length;o+=1)y[o].d(1);y.length=G.length}},i:oe,o:oe,d(i){i&&I(n),se(k,i),se(y,i),_=!1,te(c)}}}function Ie(l,n,e){let t=[{name:"Milk",bought:!1,prio:"green"}],f="";function a(){if(f==""){alert("There is nothing to add!");return}t.unshift({name:f,bought:!1,prio:"green"}),e(0,t)}function T(h){t.splice(t.indexOf(h),1),e(0,t)}function u(h){h.bought=!h.bought,e(0,t)}function z(){f=this.value,e(1,f)}function N(h,v){h[v].prio=ae(this),e(0,t)}function r(h,v){h[v].prio=ae(this),e(0,t)}return l.$$.update=()=>{l.$$.dirty&1&&t.sort((h,v)=>{const L={red:0,yellow:1,green:2};return L[h.prio]-L[v.prio]})},[t,f,a,T,u,z,N,r]}class Le extends ke{constructor(n){super(),Te(this,n,Ie,ye,Ce,{})}}export{Le as component};
