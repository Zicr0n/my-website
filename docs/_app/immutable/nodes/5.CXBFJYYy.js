import{s as se,n as Y,a as W,i as le}from"../chunks/scheduler.NrZV1iTz.js";import{S as ae,i as re,e as q,s as T,t as U,c as C,l as Z,f as D,a as N,d as o,b as j,n as h,u as O,g as k,h as b,q as te,j as J,v as oe}from"../chunks/index.jmqBrE3f.js";import{e as x}from"../chunks/each.D6YF6ztN.js";function $(l,s,t){const a=l.slice();return a[13]=s[t],a}function ee(l){let s,t,a,u,g,m,p,E,v;return{c(){s=q("button"),t=q("img"),u=T(),g=q("img"),p=T(),this.h()},l(i){s=C(i,"BUTTON",{class:!0});var c=N(s);t=C(c,"IMG",{class:!0,src:!0,alt:!0}),u=D(c),g=C(c,"IMG",{class:!0,src:!0,alt:!0}),p=D(c),c.forEach(o),this.h()},h(){h(t,"class","front svelte-tyqamk"),W(t.src,a=l[13].image)||h(t,"src",a),h(t,"alt","memoryCard"),h(g,"class","back svelte-tyqamk"),W(g.src,m="favicon.png")||h(g,"src",m),h(g,"alt","memoryCard"),h(s,"class","card svelte-tyqamk"),O(s,"flipped",l[13].flipped)},m(i,c){k(i,s,c),b(s,t),b(s,u),b(s,g),b(s,p),E||(v=te(s,"click",function(){le(l[7](l[13]))&&l[7](l[13]).apply(this,arguments)}),E=!0)},p(i,c){l=i,c&1&&!W(t.src,a=l[13].image)&&h(t,"src",a),c&1&&O(s,"flipped",l[13].flipped)},d(i){i&&o(s),E=!1,v()}}}function ie(l){let s,t="Memory",a,u,g,m,p,E,v,i,c,w,A,y,R="Restart",n,d,S,I,M,z,H,B,K,G=x(l[0]),_=[];for(let e=0;e<G.length;e+=1)_[e]=ee($(l,G,e));return{c(){s=q("h1"),s.textContent=t,a=T(),u=q("aside"),g=T(),m=q("aside"),p=q("p"),E=U(l[2]),v=T(),i=q("aside"),c=q("p"),w=U(l[1]),A=T(),y=q("button"),y.textContent=R,n=T(),d=q("main");for(let e=0;e<_.length;e+=1)_[e].c();S=T(),I=q("div"),M=q("h2"),z=U("The winner is "),H=U(l[3]),this.h()},l(e){s=C(e,"H1",{class:!0,"data-svelte-h":!0}),Z(s)!=="svelte-d4dgzr"&&(s.textContent=t),a=D(e),u=C(e,"ASIDE",{class:!0}),N(u).forEach(o),g=D(e),m=C(e,"ASIDE",{class:!0});var r=N(m);p=C(r,"P",{class:!0});var f=N(p);E=j(f,l[2]),f.forEach(o),r.forEach(o),v=D(e),i=C(e,"ASIDE",{class:!0});var P=N(i);c=C(P,"P",{class:!0});var L=N(c);w=j(L,l[1]),L.forEach(o),P.forEach(o),A=D(e),y=C(e,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),Z(y)!=="svelte-1op6zaj"&&(y.textContent=R),n=D(e),d=C(e,"MAIN",{class:!0});var Q=N(d);for(let V=0;V<_.length;V+=1)_[V].l(Q);Q.forEach(o),S=D(e),I=C(e,"DIV",{class:!0});var X=N(I);M=C(X,"H2",{});var F=N(M);z=j(F,"The winner is "),H=j(F,l[3]),F.forEach(o),X.forEach(o),this.h()},h(){h(s,"class","svelte-tyqamk"),h(u,"class","turn svelte-tyqamk"),O(u,"blue",l[5]),h(p,"class","svelte-tyqamk"),h(m,"class","svelte-tyqamk"),h(c,"class","svelte-tyqamk"),h(i,"class","blue svelte-tyqamk"),h(y,"id","restart"),h(y,"class","svelte-tyqamk"),h(d,"class","svelte-tyqamk"),h(I,"class","winDisplay svelte-tyqamk"),O(I,"winner",l[4])},m(e,r){k(e,s,r),k(e,a,r),k(e,u,r),k(e,g,r),k(e,m,r),b(m,p),b(p,E),k(e,v,r),k(e,i,r),b(i,c),b(c,w),k(e,A,r),k(e,y,r),k(e,n,r),k(e,d,r);for(let f=0;f<_.length;f+=1)_[f]&&_[f].m(d,null);k(e,S,r),k(e,I,r),b(I,M),b(M,z),b(M,H),B||(K=te(y,"click",l[6]),B=!0)},p(e,[r]){if(r&32&&O(u,"blue",e[5]),r&4&&J(E,e[2]),r&2&&J(w,e[1]),r&129){G=x(e[0]);let f;for(f=0;f<G.length;f+=1){const P=$(e,G,f);_[f]?_[f].p(P,r):(_[f]=ee(P),_[f].c(),_[f].m(d,null))}for(;f<_.length;f+=1)_[f].d(1);_.length=G.length}r&8&&J(H,e[3]),r&16&&O(I,"winner",e[4])},i:Y,o:Y,d(e){e&&(o(s),o(a),o(u),o(g),o(m),o(v),o(i),o(A),o(y),o(n),o(d),o(S),o(I)),oe(_,e),B=!1,K()}}}function ne(l){let s=l.length;for(;s!=0;){let t=Math.floor(Math.random()*s);s--,[l[s],l[t]]=[l[t],l[s]]}}function fe(l,s,t){let a=[],u=[],g=["memory/circle.png","memory/circle2.png","memory/sqaure.png","memory/sqaure2.png","memory/star.png","memory/star2.png"],m=0,p=0,E=m>p?"GREEN":"RED",v=!1,i=!0;w();function c(){console.log("restart"),t(4,v=!1),t(1,m=0),t(2,p=0),u=[],t(0,a=[]),w(),t(5,i=!0)}function w(){for(let n=0;n<g.length;n++)a.push({id:n,flipped:!1,complete:!1,image:g[n]}),a.push({id:n,flipped:!1,complete:!1,image:g[n]});ne(a),t(0,a)}function A(){t(4,v=!0),t(4,v),m>p?t(3,E="GREEN"):m<p?t(3,E="RED"):t(3,E="NO ONE"),t(3,E)}function y(){setTimeout(()=>{a.forEach(d=>{d.flipped=d.complete}),u=[],t(0,a);let n=0;a.forEach(d=>{d.complete===!0&&n++}),n==a.length&&A()},1e3)}function R(n){if(u.length<2&&n.flipped===!1&&(n.flipped=!0,u.push(n),t(0,a),u.length===2)){let d=u[0];n.id===d.id?(d.complete=!0,n.complete=!0,t(0,a),i?t(1,m++,m):t(2,p++,p),console.log("POINT AWARDED")):(console.log("MISMATCH NO POINT"),t(5,i=!i),console.log("TURNS CHANGED")),t(0,a),y()}}return[a,m,p,E,v,i,c,R]}class pe extends ae{constructor(s){super(),re(this,s,fe,ie,se,{})}}export{pe as component};
