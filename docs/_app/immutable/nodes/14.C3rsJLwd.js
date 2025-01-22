import{s as se,n as Y,h as W,j as le}from"../chunks/scheduler.B35ASNvL.js";import{S as re,i as ae,e as C,s as w,t as j,c as v,x as Z,f as M,a as A,d as i,b as U,k as u,A as R,g as E,h as T,m as te,j as J,u as ie}from"../chunks/index.B56sKvy2.js";import{e as x}from"../chunks/each.D6YF6ztN.js";function $(l,s,t){const r=l.slice();return r[13]=s[t],r}function ee(l){let s,t,r,c,d,m,h,b,I;return{c(){s=C("button"),t=C("img"),c=w(),d=C("img"),h=w(),this.h()},l(n){s=v(n,"BUTTON",{class:!0});var p=A(s);t=v(p,"IMG",{class:!0,src:!0,draggable:!0,alt:!0}),c=M(p),d=v(p,"IMG",{class:!0,src:!0,draggable:!0,alt:!0}),h=M(p),p.forEach(i),this.h()},h(){u(t,"class","front svelte-6d8b6e"),W(t.src,r=l[13].image)||u(t,"src",r),u(t,"draggable","false"),u(t,"alt","memoryCard"),u(d,"class","back svelte-6d8b6e"),W(d.src,m="favicon.png")||u(d,"src",m),u(d,"draggable","false"),u(d,"alt","memoryCard"),u(s,"class","card svelte-6d8b6e"),R(s,"flipped",l[13].flipped)},m(n,p){E(n,s,p),T(s,t),T(s,c),T(s,d),T(s,h),b||(I=te(s,"click",function(){le(l[7](l[13]))&&l[7](l[13]).apply(this,arguments)}),b=!0)},p(n,p){l=n,p&1&&!W(t.src,r=l[13].image)&&u(t,"src",r),p&1&&R(s,"flipped",l[13].flipped)},d(n){n&&i(s),b=!1,I()}}}function ne(l){let s,t="Memory",r,c,d,m,h,b,I,n,p,k,G,N,q="Restart",o,_,y,D,O,z,H,B,K,P=x(l[0]),g=[];for(let e=0;e<P.length;e+=1)g[e]=ee($(l,P,e));return{c(){s=C("h1"),s.textContent=t,r=w(),c=C("aside"),d=w(),m=C("aside"),h=C("p"),b=j(l[2]),I=w(),n=C("aside"),p=C("p"),k=j(l[1]),G=w(),N=C("button"),N.textContent=q,o=w(),_=C("main");for(let e=0;e<g.length;e+=1)g[e].c();y=w(),D=C("div"),O=C("h2"),z=j("The winner is "),H=j(l[3]),this.h()},l(e){s=v(e,"H1",{class:!0,"data-svelte-h":!0}),Z(s)!=="svelte-d4dgzr"&&(s.textContent=t),r=M(e),c=v(e,"ASIDE",{class:!0}),A(c).forEach(i),d=M(e),m=v(e,"ASIDE",{class:!0});var a=A(m);h=v(a,"P",{class:!0});var f=A(h);b=U(f,l[2]),f.forEach(i),a.forEach(i),I=M(e),n=v(e,"ASIDE",{class:!0});var S=A(n);p=v(S,"P",{class:!0});var L=A(p);k=U(L,l[1]),L.forEach(i),S.forEach(i),G=M(e),N=v(e,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),Z(N)!=="svelte-1op6zaj"&&(N.textContent=q),o=M(e),_=v(e,"MAIN",{class:!0});var Q=A(_);for(let V=0;V<g.length;V+=1)g[V].l(Q);Q.forEach(i),y=M(e),D=v(e,"DIV",{class:!0});var X=A(D);O=v(X,"H2",{});var F=A(O);z=U(F,"The winner is "),H=U(F,l[3]),F.forEach(i),X.forEach(i),this.h()},h(){u(s,"class","svelte-6d8b6e"),u(c,"class","turn svelte-6d8b6e"),R(c,"blue",l[5]),u(h,"class","svelte-6d8b6e"),u(m,"class","svelte-6d8b6e"),u(p,"class","svelte-6d8b6e"),u(n,"class","blue svelte-6d8b6e"),u(N,"id","restart"),u(N,"class","svelte-6d8b6e"),u(_,"class","svelte-6d8b6e"),u(D,"class","winDisplay svelte-6d8b6e"),R(D,"winner",l[4])},m(e,a){E(e,s,a),E(e,r,a),E(e,c,a),E(e,d,a),E(e,m,a),T(m,h),T(h,b),E(e,I,a),E(e,n,a),T(n,p),T(p,k),E(e,G,a),E(e,N,a),E(e,o,a),E(e,_,a);for(let f=0;f<g.length;f+=1)g[f]&&g[f].m(_,null);E(e,y,a),E(e,D,a),T(D,O),T(O,z),T(O,H),B||(K=te(N,"click",l[6]),B=!0)},p(e,[a]){if(a&32&&R(c,"blue",e[5]),a&4&&J(b,e[2]),a&2&&J(k,e[1]),a&129){P=x(e[0]);let f;for(f=0;f<P.length;f+=1){const S=$(e,P,f);g[f]?g[f].p(S,a):(g[f]=ee(S),g[f].c(),g[f].m(_,null))}for(;f<g.length;f+=1)g[f].d(1);g.length=P.length}a&8&&J(H,e[3]),a&16&&R(D,"winner",e[4])},i:Y,o:Y,d(e){e&&(i(s),i(r),i(c),i(d),i(m),i(I),i(n),i(G),i(N),i(o),i(_),i(y),i(D)),ie(g,e),B=!1,K()}}}function oe(l){let s=l.length;for(;s!=0;){let t=Math.floor(Math.random()*s);s--,[l[s],l[t]]=[l[t],l[s]]}}function fe(l,s,t){let r=[],c=[],d=["memory/circle.png","memory/circle2.png","memory/sqaure.png","memory/sqaure2.png","memory/star.png","memory/star2.png"],m=0,h=0,b=m>h?"GREEN":"RED",I=!1,n=!0;k();function p(){t(4,I=!1),t(1,m=0),t(2,h=0),c=[],t(0,r=[]),k(),t(5,n=!0)}function k(){for(let o=0;o<d.length;o++)r.push({id:o,flipped:!1,complete:!1,image:d[o]}),r.push({id:o,flipped:!1,complete:!1,image:d[o]});oe(r),t(0,r)}function G(){t(4,I=!0),t(4,I),m>h?t(3,b="GREEN"):m<h?t(3,b="RED"):t(3,b="NO ONE"),t(3,b)}function N(){setTimeout(()=>{r.forEach(_=>{_.flipped=_.complete}),c=[],t(0,r);let o=0;r.forEach(_=>{_.complete===!0&&o++}),o==r.length&&G()},1e3)}function q(o){if(c.length<2&&o.flipped===!1&&(o.flipped=!0,c.push(o),t(0,r),c.length===2)){let _=c[0];o.id===_.id?(_.complete=!0,o.complete=!0,t(0,r),n?t(1,m++,m):t(2,h++,h),console.log("POINT AWARDED")):(console.log("MISMATCH NO POINT"),t(5,n=!n),console.log("TURNS CHANGED")),t(0,r),N()}}return[r,m,h,b,I,n,p,q]}class me extends re{constructor(s){super(),ae(this,s,fe,ne,se,{})}}export{me as component};
