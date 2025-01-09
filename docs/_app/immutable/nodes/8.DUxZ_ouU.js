import{s as se,n as Y,d as W,i as le}from"../chunks/scheduler.D9gYHG_8.js";import{S as re,i as ae,e as C,s as A,t as U,c as v,k as Z,f as M,a as w,d as i,b as j,l as u,w as R,g as E,h as T,n as te,j as J,x as ie}from"../chunks/index.D8CxMlqv.js";import{e as x}from"../chunks/each.D6YF6ztN.js";function $(l,s,t){const r=l.slice();return r[13]=s[t],r}function ee(l){let s,t,r,p,h,d,m,b,I;return{c(){s=C("button"),t=C("img"),p=A(),h=C("img"),m=A(),this.h()},l(n){s=v(n,"BUTTON",{class:!0});var c=w(s);t=v(c,"IMG",{class:!0,src:!0,draggable:!0,alt:!0}),p=M(c),h=v(c,"IMG",{class:!0,src:!0,draggable:!0,alt:!0}),m=M(c),c.forEach(i),this.h()},h(){u(t,"class","front svelte-6d8b6e"),W(t.src,r=l[13].image)||u(t,"src",r),u(t,"draggable","false"),u(t,"alt","memoryCard"),u(h,"class","back svelte-6d8b6e"),W(h.src,d="favicon.png")||u(h,"src",d),u(h,"draggable","false"),u(h,"alt","memoryCard"),u(s,"class","card svelte-6d8b6e"),R(s,"flipped",l[13].flipped)},m(n,c){E(n,s,c),T(s,t),T(s,p),T(s,h),T(s,m),b||(I=te(s,"click",function(){le(l[7](l[13]))&&l[7](l[13]).apply(this,arguments)}),b=!0)},p(n,c){l=n,c&1&&!W(t.src,r=l[13].image)&&u(t,"src",r),c&1&&R(s,"flipped",l[13].flipped)},d(n){n&&i(s),b=!1,I()}}}function ne(l){let s,t="Memory",r,p,h,d,m,b,I,n,c,k,G,N,q="Restart",o,_,y,D,O,z,H,B,K,P=x(l[0]),g=[];for(let e=0;e<P.length;e+=1)g[e]=ee($(l,P,e));return{c(){s=C("h1"),s.textContent=t,r=A(),p=C("aside"),h=A(),d=C("aside"),m=C("p"),b=U(l[2]),I=A(),n=C("aside"),c=C("p"),k=U(l[1]),G=A(),N=C("button"),N.textContent=q,o=A(),_=C("main");for(let e=0;e<g.length;e+=1)g[e].c();y=A(),D=C("div"),O=C("h2"),z=U("The winner is "),H=U(l[3]),this.h()},l(e){s=v(e,"H1",{class:!0,"data-svelte-h":!0}),Z(s)!=="svelte-d4dgzr"&&(s.textContent=t),r=M(e),p=v(e,"ASIDE",{class:!0}),w(p).forEach(i),h=M(e),d=v(e,"ASIDE",{class:!0});var a=w(d);m=v(a,"P",{class:!0});var f=w(m);b=j(f,l[2]),f.forEach(i),a.forEach(i),I=M(e),n=v(e,"ASIDE",{class:!0});var S=w(n);c=v(S,"P",{class:!0});var L=w(c);k=j(L,l[1]),L.forEach(i),S.forEach(i),G=M(e),N=v(e,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),Z(N)!=="svelte-1op6zaj"&&(N.textContent=q),o=M(e),_=v(e,"MAIN",{class:!0});var Q=w(_);for(let V=0;V<g.length;V+=1)g[V].l(Q);Q.forEach(i),y=M(e),D=v(e,"DIV",{class:!0});var X=w(D);O=v(X,"H2",{});var F=w(O);z=j(F,"The winner is "),H=j(F,l[3]),F.forEach(i),X.forEach(i),this.h()},h(){u(s,"class","svelte-6d8b6e"),u(p,"class","turn svelte-6d8b6e"),R(p,"blue",l[5]),u(m,"class","svelte-6d8b6e"),u(d,"class","svelte-6d8b6e"),u(c,"class","svelte-6d8b6e"),u(n,"class","blue svelte-6d8b6e"),u(N,"id","restart"),u(N,"class","svelte-6d8b6e"),u(_,"class","svelte-6d8b6e"),u(D,"class","winDisplay svelte-6d8b6e"),R(D,"winner",l[4])},m(e,a){E(e,s,a),E(e,r,a),E(e,p,a),E(e,h,a),E(e,d,a),T(d,m),T(m,b),E(e,I,a),E(e,n,a),T(n,c),T(c,k),E(e,G,a),E(e,N,a),E(e,o,a),E(e,_,a);for(let f=0;f<g.length;f+=1)g[f]&&g[f].m(_,null);E(e,y,a),E(e,D,a),T(D,O),T(O,z),T(O,H),B||(K=te(N,"click",l[6]),B=!0)},p(e,[a]){if(a&32&&R(p,"blue",e[5]),a&4&&J(b,e[2]),a&2&&J(k,e[1]),a&129){P=x(e[0]);let f;for(f=0;f<P.length;f+=1){const S=$(e,P,f);g[f]?g[f].p(S,a):(g[f]=ee(S),g[f].c(),g[f].m(_,null))}for(;f<g.length;f+=1)g[f].d(1);g.length=P.length}a&8&&J(H,e[3]),a&16&&R(D,"winner",e[4])},i:Y,o:Y,d(e){e&&(i(s),i(r),i(p),i(h),i(d),i(I),i(n),i(G),i(N),i(o),i(_),i(y),i(D)),ie(g,e),B=!1,K()}}}function oe(l){let s=l.length;for(;s!=0;){let t=Math.floor(Math.random()*s);s--,[l[s],l[t]]=[l[t],l[s]]}}function fe(l,s,t){let r=[],p=[],h=["memory/circle.png","memory/circle2.png","memory/sqaure.png","memory/sqaure2.png","memory/star.png","memory/star2.png"],d=0,m=0,b=d>m?"GREEN":"RED",I=!1,n=!0;k();function c(){t(4,I=!1),t(2,m=0),t(0,r=[]),k(),t(5,n=!0)}function k(){for(let o=0;o<h.length;o++)r.push({id:o,flipped:!1,complete:!1,image:h[o]}),r.push({id:o,flipped:!1,complete:!1,image:h[o]});oe(r),t(0,r)}function G(){t(4,I=!0),t(4,I),d>m?t(3,b="GREEN"):d<m?t(3,b="RED"):t(3,b="NO ONE"),t(3,b)}function N(){setTimeout(()=>{r.forEach(_=>{_.flipped=_.complete}),p=[],t(0,r);let o=0;r.forEach(_=>{_.complete===!0&&o++}),o==r.length&&G()},1e3)}function q(o){if(p.length<2&&o.flipped===!1&&(o.flipped=!0,p.push(o),t(0,r),p.length===2)){let _=p[0];o.id===_.id?(_.complete=!0,o.complete=!0,t(0,r),n?t(1,d++,d):t(2,m++,m),console.log("POINT AWARDED")):(console.log("MISMATCH NO POINT"),t(5,n=!n),console.log("TURNS CHANGED")),t(0,r),N()}}return[r,d,m,b,I,n,c,q]}class me extends re{constructor(s){super(),ae(this,s,fe,ne,se,{})}}export{me as component};
