import{s as se,n as Y,d as W,i as le}from"../chunks/scheduler.DZprM1kE.js";import{S as re,i as ae,e as C,s as A,t as U,c as v,q as Z,f as M,a as w,d as i,b as j,m as u,y as S,g as E,h as T,o as te,j as J,r as ie}from"../chunks/index.DCUrm-tw.js";import{e as x}from"../chunks/each.D6YF6ztN.js";function $(l,s,t){const r=l.slice();return r[13]=s[t],r}function ee(l){let s,t,r,c,d,m,h,b,I;return{c(){s=C("button"),t=C("img"),c=A(),d=C("img"),h=A(),this.h()},l(o){s=v(o,"BUTTON",{class:!0});var p=w(s);t=v(p,"IMG",{class:!0,src:!0,draggable:!0,alt:!0}),c=M(p),d=v(p,"IMG",{class:!0,src:!0,draggable:!0,alt:!0}),h=M(p),p.forEach(i),this.h()},h(){u(t,"class","front svelte-6d8b6e"),W(t.src,r=l[13].image)||u(t,"src",r),u(t,"draggable","false"),u(t,"alt","memoryCard"),u(d,"class","back svelte-6d8b6e"),W(d.src,m="favicon.png")||u(d,"src",m),u(d,"draggable","false"),u(d,"alt","memoryCard"),u(s,"class","card svelte-6d8b6e"),S(s,"flipped",l[13].flipped)},m(o,p){E(o,s,p),T(s,t),T(s,c),T(s,d),T(s,h),b||(I=te(s,"click",function(){le(l[7](l[13]))&&l[7](l[13]).apply(this,arguments)}),b=!0)},p(o,p){l=o,p&1&&!W(t.src,r=l[13].image)&&u(t,"src",r),p&1&&S(s,"flipped",l[13].flipped)},d(o){o&&i(s),b=!1,I()}}}function oe(l){let s,t="Memory",r,c,d,m,h,b,I,o,p,G,O,N,q="Restart",n,_,y,D,P,z,H,B,K,R=x(l[0]),g=[];for(let e=0;e<R.length;e+=1)g[e]=ee($(l,R,e));return{c(){s=C("h1"),s.textContent=t,r=A(),c=C("aside"),d=A(),m=C("aside"),h=C("p"),b=U(l[2]),I=A(),o=C("aside"),p=C("p"),G=U(l[1]),O=A(),N=C("button"),N.textContent=q,n=A(),_=C("main");for(let e=0;e<g.length;e+=1)g[e].c();y=A(),D=C("div"),P=C("h2"),z=U("The winner is "),H=U(l[3]),this.h()},l(e){s=v(e,"H1",{class:!0,"data-svelte-h":!0}),Z(s)!=="svelte-d4dgzr"&&(s.textContent=t),r=M(e),c=v(e,"ASIDE",{class:!0}),w(c).forEach(i),d=M(e),m=v(e,"ASIDE",{class:!0});var a=w(m);h=v(a,"P",{class:!0});var f=w(h);b=j(f,l[2]),f.forEach(i),a.forEach(i),I=M(e),o=v(e,"ASIDE",{class:!0});var k=w(o);p=v(k,"P",{class:!0});var L=w(p);G=j(L,l[1]),L.forEach(i),k.forEach(i),O=M(e),N=v(e,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),Z(N)!=="svelte-1op6zaj"&&(N.textContent=q),n=M(e),_=v(e,"MAIN",{class:!0});var Q=w(_);for(let V=0;V<g.length;V+=1)g[V].l(Q);Q.forEach(i),y=M(e),D=v(e,"DIV",{class:!0});var X=w(D);P=v(X,"H2",{});var F=w(P);z=j(F,"The winner is "),H=j(F,l[3]),F.forEach(i),X.forEach(i),this.h()},h(){u(s,"class","svelte-6d8b6e"),u(c,"class","turn svelte-6d8b6e"),S(c,"blue",l[5]),u(h,"class","svelte-6d8b6e"),u(m,"class","svelte-6d8b6e"),u(p,"class","svelte-6d8b6e"),u(o,"class","blue svelte-6d8b6e"),u(N,"id","restart"),u(N,"class","svelte-6d8b6e"),u(_,"class","svelte-6d8b6e"),u(D,"class","winDisplay svelte-6d8b6e"),S(D,"winner",l[4])},m(e,a){E(e,s,a),E(e,r,a),E(e,c,a),E(e,d,a),E(e,m,a),T(m,h),T(h,b),E(e,I,a),E(e,o,a),T(o,p),T(p,G),E(e,O,a),E(e,N,a),E(e,n,a),E(e,_,a);for(let f=0;f<g.length;f+=1)g[f]&&g[f].m(_,null);E(e,y,a),E(e,D,a),T(D,P),T(P,z),T(P,H),B||(K=te(N,"click",l[6]),B=!0)},p(e,[a]){if(a&32&&S(c,"blue",e[5]),a&4&&J(b,e[2]),a&2&&J(G,e[1]),a&129){R=x(e[0]);let f;for(f=0;f<R.length;f+=1){const k=$(e,R,f);g[f]?g[f].p(k,a):(g[f]=ee(k),g[f].c(),g[f].m(_,null))}for(;f<g.length;f+=1)g[f].d(1);g.length=R.length}a&8&&J(H,e[3]),a&16&&S(D,"winner",e[4])},i:Y,o:Y,d(e){e&&(i(s),i(r),i(c),i(d),i(m),i(I),i(o),i(O),i(N),i(n),i(_),i(y),i(D)),ie(g,e),B=!1,K()}}}function ne(l){let s=l.length;for(;s!=0;){let t=Math.floor(Math.random()*s);s--,[l[s],l[t]]=[l[t],l[s]]}}function fe(l,s,t){let r=[],c=[],d=["memory/circle.png","memory/circle2.png","memory/sqaure.png","memory/sqaure2.png","memory/star.png","memory/star2.png"],m=0,h=0,b=m>h?"GREEN":"RED",I=!1,o=!0;G();function p(){t(4,I=!1),t(1,m=0),t(2,h=0),c=[],t(0,r=[]),G(),t(5,o=!0)}function G(){for(let n=0;n<d.length;n++)r.push({id:n,flipped:!1,complete:!1,image:d[n]}),r.push({id:n,flipped:!1,complete:!1,image:d[n]});ne(r),t(0,r)}function O(){t(4,I=!0),t(4,I),m>h?t(3,b="GREEN"):m<h?t(3,b="RED"):t(3,b="NO ONE"),t(3,b)}function N(){setTimeout(()=>{r.forEach(_=>{_.flipped=_.complete}),c=[],t(0,r);let n=0;r.forEach(_=>{_.complete===!0&&n++}),n==r.length&&O()},1e3)}function q(n){if(c.length<2&&n.flipped===!1&&(n.flipped=!0,c.push(n),t(0,r),c.length===2)){let _=c[0];n.id===_.id?(_.complete=!0,n.complete=!0,t(0,r),o?t(1,m++,m):t(2,h++,h),console.log("POINT AWARDED")):(console.log("MISMATCH NO POINT"),t(5,o=!o),console.log("TURNS CHANGED")),t(0,r),N()}}return[r,m,h,b,I,o,p,q]}class me extends re{constructor(s){super(),ae(this,s,fe,oe,se,{})}}export{me as component};
