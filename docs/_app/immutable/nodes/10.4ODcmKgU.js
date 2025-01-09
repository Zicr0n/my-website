import{s as ce,e as fe,n as Z,r as de,c as he,o as ve,f as _e}from"../chunks/scheduler.D9gYHG_8.js";import{S as pe,i as me,e as f,s as z,c as d,a as q,k as T,f as y,d as w,l as e,u as O,g as ie,h as l,m as A,y as ae,n as R,v as ge,x as be,t as Ce,b as ze,z as ye}from"../chunks/index.D8CxMlqv.js";import{e as re}from"../chunks/each.D6YF6ztN.js";import{b as Ee}from"../chunks/paths.CZ0Klx7I.js";import{u as ne}from"../chunks/user.AyREW1_m.js";function oe(r,a,u){const i=r.slice();return i[12]=a[u],i}function ue(r){let a,u=r[12].name+"",i;return{c(){a=f("option"),i=Ce(u),this.h()},l(_){a=d(_,"OPTION",{class:!0});var g=q(a);i=ze(g,u),g.forEach(w),this.h()},h(){a.__value=r[12].value,A(a,a.__value),e(a,"class","svelte-uolrgz")},m(_,g){ie(_,a,g),l(a,i)},p:Z,d(_){_&&w(a)}}}function ke(r){let a,u,i,_="Register",g,t,p,P="Username:",U,h,D,E,V="E-mail:",M,v,F,k,$="Password:",J,C,W,x,ee="Favorite Color",j,N,b,G,L,K,S,Q,I,te="Have an account already? Log in.",X,le,B=re(r[5]),c=[];for(let s=0;s<B.length;s+=1)c[s]=ue(oe(r,B,s));return{c(){a=f("main"),u=f("div"),i=f("h2"),i.textContent=_,g=z(),t=f("form"),p=f("label"),p.textContent=P,U=z(),h=f("input"),D=z(),E=f("label"),E.textContent=V,M=z(),v=f("input"),F=z(),k=f("label"),k.textContent=$,J=z(),C=f("input"),W=z(),x=f("label"),x.textContent=ee,j=z(),N=f("div"),b=f("select");for(let s=0;s<c.length;s+=1)c[s].c();G=z(),L=f("div"),K=z(),S=f("input"),Q=z(),I=f("a"),I.textContent=te,this.h()},l(s){a=d(s,"MAIN",{class:!0});var m=q(a);u=d(m,"DIV",{class:!0});var n=q(u);i=d(n,"H2",{class:!0,"data-svelte-h":!0}),T(i)!=="svelte-d4pubn"&&(i.textContent=_),g=y(n),t=d(n,"FORM",{action:!0,class:!0});var o=q(t);p=d(o,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),T(p)!=="svelte-1c8yrdk"&&(p.textContent=P),U=y(o),h=d(o,"INPUT",{type:!0,id:!0,minlength:!0,maxlength:!0,class:!0}),D=y(o),E=d(o,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),T(E)!=="svelte-14ub8vr"&&(E.textContent=V),M=y(o),v=d(o,"INPUT",{type:!0,id:!0,class:!0}),F=y(o),k=d(o,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),T(k)!=="svelte-bhu94"&&(k.textContent=$),J=y(o),C=d(o,"INPUT",{type:!0,minlength:!0,id:!0,class:!0}),W=y(o),x=d(o,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),T(x)!=="svelte-48luiq"&&(x.textContent=ee),j=y(o),N=d(o,"DIV",{class:!0});var H=q(N);b=d(H,"SELECT",{id:!0,class:!0});var se=q(b);for(let Y=0;Y<c.length;Y+=1)c[Y].l(se);se.forEach(w),G=y(H),L=d(H,"DIV",{style:!0}),q(L).forEach(w),H.forEach(w),K=y(o),S=d(o,"INPUT",{id:!0,type:!0,class:!0}),o.forEach(w),n.forEach(w),Q=y(m),I=d(m,"A",{id:!0,href:!0,class:!0,"data-svelte-h":!0}),T(I)!=="svelte-14aphdk"&&(I.textContent=te),m.forEach(w),this.h()},h(){e(i,"class","svelte-uolrgz"),e(p,"for","username"),e(p,"class","svelte-uolrgz"),e(h,"type","text"),e(h,"id","username"),h.required=!0,e(h,"minlength","3"),e(h,"maxlength","16"),e(h,"class","svelte-uolrgz"),e(E,"for","email"),e(E,"class","svelte-uolrgz"),e(v,"type","email"),e(v,"id","email"),v.required=!0,e(v,"class","svelte-uolrgz"),e(k,"for","password"),e(k,"class","svelte-uolrgz"),e(C,"type","password"),e(C,"minlength","8"),C.required=!0,e(C,"id","password"),e(C,"class","svelte-uolrgz"),e(x,"for","favoriteColor"),e(x,"class","svelte-uolrgz"),b.required=!0,e(b,"id","favoriteColor"),e(b,"class","svelte-uolrgz"),r[0]===void 0&&fe(()=>r[9].call(b)),O(L,"width","50px"),O(L,"height","50px"),O(L,"border-radius","50%"),O(L,"overflow","hidden"),O(L,"background",r[0]),e(N,"class","colorSelection svelte-uolrgz"),e(S,"id","submit"),e(S,"type","submit"),S.value="register",e(S,"class","svelte-uolrgz"),e(t,"action",""),e(t,"class","svelte-uolrgz"),e(u,"class","container svelte-uolrgz"),e(I,"id","login"),e(I,"href",Ee+"/login"),e(I,"class","svelte-uolrgz"),e(a,"class","svelte-uolrgz")},m(s,m){ie(s,a,m),l(a,u),l(u,i),l(u,g),l(u,t),l(t,p),l(t,U),l(t,h),A(h,r[1]),l(t,D),l(t,E),l(t,M),l(t,v),A(v,r[2]),l(t,F),l(t,k),l(t,J),l(t,C),A(C,r[3]),l(t,W),l(t,x),l(t,j),l(t,N),l(N,b);for(let n=0;n<c.length;n+=1)c[n]&&c[n].m(b,null);ae(b,r[0],!0),l(N,G),l(N,L),l(t,K),l(t,S),l(a,Q),l(a,I),X||(le=[R(h,"input",r[6]),R(v,"input",r[7]),R(C,"input",r[8]),R(b,"change",r[9]),R(t,"submit",ge(r[4]))],X=!0)},p(s,[m]){if(m&2&&h.value!==s[1]&&A(h,s[1]),m&4&&v.value!==s[2]&&A(v,s[2]),m&8&&C.value!==s[3]&&A(C,s[3]),m&32){B=re(s[5]);let n;for(n=0;n<B.length;n+=1){const o=oe(s,B,n);c[n]?c[n].p(o,m):(c[n]=ue(o),c[n].c(),c[n].m(b,null))}for(;n<c.length;n+=1)c[n].d(1);c.length=B.length}m&33&&ae(b,s[0]),m&1&&O(L,"background",s[0])},i:Z,o:Z,d(s){s&&w(a),be(c,s),X=!1,de(le)}}}function Le(r,a,u){let i;he(r,ne,v=>u(11,i=v)),ve(()=>{i.length>2&&(_=JSON.parse(i))});let _=[],g="black",t="",p="",P="";function U(){let v={username:t,password:P,email:p,color:g};_.filter(k=>k.email==v.email).length!=0?alert(p+" is already taken, try logging in"):(alert("Welcome, register successful!"),_=[..._,v],_e(ne,i=JSON.stringify(_),i))}let h=[{name:"Black",value:"black"},{name:"Blue",value:"blue"},{name:"Red",value:"red"}];function D(){t=this.value,u(1,t)}function E(){p=this.value,u(2,p)}function V(){P=this.value,u(3,P)}function M(){g=ye(this),u(0,g),u(5,h)}return[g,t,p,P,U,h,D,E,V,M]}class Se extends pe{constructor(a){super(),me(this,a,Le,ke,ce,{})}}export{Se as component};
