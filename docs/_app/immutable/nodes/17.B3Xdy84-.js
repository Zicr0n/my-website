import{s as ue,h as fe,n as ae,r as he,j as me}from"../chunks/scheduler.B35ASNvL.js";import{S as de,i as pe,e as h,s as U,c as m,a as k,d as _,f as D,x as R,k as a,A as N,v as P,g as ce,h as s,l as oe,m as B,p as ve,u as _e,t as ke,b as ge,j as be}from"../chunks/index.B56sKvy2.js";import{e as ne}from"../chunks/each.D6YF6ztN.js";import{g as G}from"../chunks/entry.B_GOzU3n.js";import{b as H}from"../chunks/paths.B3gqEi-s.js";import{g as Ce}from"../chunks/pokemonList.C0vSFawH.js";import"../chunks/index.CzR0xuCU.js";function re(e,t,n){const p=e.slice();return p[11]=t[n],p}function ie(e){let t,n=e[11]+"",p,i;return{c(){t=h("a"),p=ke(n),this.h()},l(o){t=m(o,"A",{class:!0,href:!0});var r=k(t);p=ge(r,n),r.forEach(_),this.h()},h(){a(t,"class","autoComplete-option svelte-1k25cwb"),a(t,"href",i=H+"/search/"+e[11])},m(o,r){ce(o,t,r),s(t,p)},p(o,r){r&2&&n!==(n=o[11]+"")&&be(p,n),r&2&&i!==(i=H+"/search/"+o[11])&&a(t,"href",i)},d(o){o&&_(t)}}}function we(e){let t,n,p,i,o,r,c,M='<img src="images/pokeball.png" alt="Pokemon Logo" class="svelte-1k25cwb"/>',O,g,J,j,E,Z="Pokedex",K,y,b,d,Q,V,C,W,w,I,$="Sök",X,T,ee="Överraska Mig!",Y,te,L=ne(e[1]),u=[];for(let f=0;f<L.length;f+=1)u[f]=ie(re(e,L,f));return{c(){t=h("main"),n=h("div"),p=U(),i=h("div"),o=h("div"),r=h("div"),c=h("button"),c.innerHTML=M,O=U(),g=h("img"),j=U(),E=h("h1"),E.textContent=Z,K=U(),y=h("div"),b=h("form"),d=h("input"),Q=U(),V=h("div"),C=h("div");for(let f=0;f<u.length;f+=1)u[f].c();W=U(),w=h("div"),I=h("button"),I.textContent=$,X=U(),T=h("button"),T.textContent=ee,this.h()},l(f){t=m(f,"MAIN",{class:!0});var v=k(t);n=m(v,"DIV",{class:!0}),k(n).forEach(_),p=D(v),i=m(v,"DIV",{class:!0});var l=k(i);o=m(l,"DIV",{style:!0});var S=k(o);r=m(S,"DIV",{style:!0});var z=k(r);c=m(z,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),R(c)!=="svelte-bphk07"&&(c.innerHTML=M),O=D(z),g=m(z,"IMG",{class:!0,src:!0,alt:!0}),z.forEach(_),j=D(S),E=m(S,"H1",{class:!0,"data-svelte-h":!0}),R(E)!=="svelte-1z0hoow"&&(E.textContent=Z),S.forEach(_),K=D(l),y=m(l,"DIV",{class:!0});var A=k(y);b=m(A,"FORM",{autocomplete:!0,class:!0});var q=k(b);d=m(q,"INPUT",{type:!0,placeholder:!0,class:!0}),Q=D(q),V=m(q,"DIV",{class:!0});var se=k(V);C=m(se,"DIV",{class:!0});var le=k(C);for(let x=0;x<u.length;x+=1)u[x].l(le);le.forEach(_),se.forEach(_),q.forEach(_),W=D(A),w=m(A,"DIV",{style:!0});var F=k(w);I=m(F,"BUTTON",{class:!0,"data-svelte-h":!0}),R(I)!=="svelte-jvsi1f"&&(I.textContent=$),X=D(F),T=m(F,"BUTTON",{class:!0,"data-svelte-h":!0}),R(T)!=="svelte-y9nzt9"&&(T.textContent=ee),F.forEach(_),A.forEach(_),l.forEach(_),v.forEach(_),this.h()},h(){a(n,"class","backdrop svelte-1k25cwb"),a(c,"id","logo"),a(c,"class","svelte-1k25cwb"),a(g,"class","pikachu svelte-1k25cwb"),fe(g.src,J="images/pikachu.png")||a(g,"src",J),a(g,"alt","Pikachu Hiding"),N(g,"popUp",e[0]),P(r,"position","relative"),a(E,"class","svelte-1k25cwb"),P(o,"display","flex"),P(o,"flex-direction","column"),P(o,"align-items","center"),a(d,"type","text"),a(d,"placeholder","Sök upp en pokemon"),a(d,"class","svelte-1k25cwb"),N(d,"focused",!!(e[3]&&e[2].trim()!="")),a(C,"class","autoComplete-list svelte-1k25cwb"),N(C,"invisible",e[2].trim()==""),a(V,"class","autoComplete svelte-1k25cwb"),a(b,"autocomplete","off"),a(b,"class","svelte-1k25cwb"),a(I,"class","navButton svelte-1k25cwb"),a(T,"class","navButton svelte-1k25cwb"),P(w,"display","flex"),P(w,"align-items","center"),a(y,"class","search svelte-1k25cwb"),a(i,"class","content svelte-1k25cwb"),a(t,"class","svelte-1k25cwb")},m(f,v){ce(f,t,v),s(t,n),s(t,p),s(t,i),s(i,o),s(o,r),s(r,c),s(r,O),s(r,g),s(o,j),s(o,E),s(i,K),s(i,y),s(y,b),s(b,d),oe(d,e[2]),s(b,Q),s(b,V),s(V,C);for(let l=0;l<u.length;l+=1)u[l]&&u[l].m(C,null);s(y,W),s(y,w),s(w,I),s(w,X),s(w,T),Y||(te=[B(c,"click",e[5]),B(d,"input",e[6]),B(d,"input",e[7]),B(d,"focusout",e[8]),B(d,"focus",e[9]),B(b,"submit",ve(e[10])),B(I,"click",function(){me(e[2]===""||e[2]==null?alert("Sök efter en pokemon"):G(H+"/search/"+e[2]))&&(e[2]===""||e[2]==null?alert("Sök efter en pokemon"):G(H+"/search/"+e[2])).apply(this,arguments)}),B(T,"click",e[4])],Y=!0)},p(f,[v]){if(e=f,v&1&&N(g,"popUp",e[0]),v&4&&d.value!==e[2]&&oe(d,e[2]),v&12&&N(d,"focused",!!(e[3]&&e[2].trim()!="")),v&2){L=ne(e[1]);let l;for(l=0;l<L.length;l+=1){const S=re(e,L,l);u[l]?u[l].p(S,v):(u[l]=ie(S),u[l].c(),u[l].m(C,null))}for(;l<u.length;l+=1)u[l].d(1);u.length=L.length}v&4&&N(C,"invisible",e[2].trim()=="")},i:ae,o:ae,d(f){f&&_(t),_e(u,f),Y=!1,he(te)}}}function Ee(e,t,n){function p(){let Z=Math.floor(Math.random()*1025)+1;G(H+"search/"+Z)}let i=!1;function o(){if(i)return;n(0,i=!0),document.getElementById("logo").animate([{transform:"rotateZ(0deg)"},{transform:"rotateZ(6deg)"},{transform:"rotateZ(-6deg)"},{transform:"rotateZ(0deg)"}],{duration:500,easing:"cubic-bezier(.19,1,.42,1.19)",iterations:1}),setTimeout(()=>{n(0,i=!1),document.getElementsByClassName("popUp")[0].classList.remove("popUp"),document.getElementsByClassName("popUp")[0].classList.add("pikachu")},2e3)}let r=[],c="",M=!1;function O(){c=this.value,n(2,c)}return[i,r,c,M,p,o,O,()=>{n(1,r=Ce(c))},()=>n(3,M=!1),()=>n(3,M=!0),()=>c===""||c==null?alert("Sök efter en pokemon"):G(H+"/search/"+c.trim())]}class Me extends de{constructor(t){super(),pe(this,t,Ee,we,ue,{})}}export{Me as component};
