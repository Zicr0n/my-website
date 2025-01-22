import{s as ce,k as fe,n as Z,r as de,c as he,o as ve,l as pe}from"../chunks/scheduler.B35ASNvL.js";import{S as _e,i as me,e as f,s as z,c as d,a as S,x as T,f as k,d as w,k as e,v as O,g as ie,h as l,l as q,B as ae,m as R,p as ge,u as be,t as Ce,b as ze,C as ke}from"../chunks/index.B56sKvy2.js";import{e as re}from"../chunks/each.D6YF6ztN.js";import{b as Ee}from"../chunks/paths.B3gqEi-s.js";import{u as ne}from"../chunks/user.B8WoXpt6.js";function oe(r,a,u){const i=r.slice();return i[12]=a[u],i}function ue(r){let a,u=r[12].name+"",i;return{c(){a=f("option"),i=Ce(u),this.h()},l(p){a=d(p,"OPTION",{class:!0});var g=S(a);i=ze(g,u),g.forEach(w),this.h()},h(){a.__value=r[12].value,q(a,a.__value),e(a,"class","svelte-uolrgz")},m(p,g){ie(p,a,g),l(a,i)},p:Z,d(p){p&&w(a)}}}function ye(r){let a,u,i,p="Register",g,t,_,B="Username:",U,h,D,E,V="E-mail:",M,v,F,y,$="Password:",J,C,W,x,ee="Favorite Color",j,N,b,G,L,K,P,Q,I,te="Have an account already? Log in.",X,le,A=re(r[5]),c=[];for(let s=0;s<A.length;s+=1)c[s]=ue(oe(r,A,s));return{c(){a=f("main"),u=f("div"),i=f("h2"),i.textContent=p,g=z(),t=f("form"),_=f("label"),_.textContent=B,U=z(),h=f("input"),D=z(),E=f("label"),E.textContent=V,M=z(),v=f("input"),F=z(),y=f("label"),y.textContent=$,J=z(),C=f("input"),W=z(),x=f("label"),x.textContent=ee,j=z(),N=f("div"),b=f("select");for(let s=0;s<c.length;s+=1)c[s].c();G=z(),L=f("div"),K=z(),P=f("input"),Q=z(),I=f("a"),I.textContent=te,this.h()},l(s){a=d(s,"MAIN",{class:!0});var m=S(a);u=d(m,"DIV",{class:!0});var n=S(u);i=d(n,"H2",{class:!0,"data-svelte-h":!0}),T(i)!=="svelte-d4pubn"&&(i.textContent=p),g=k(n),t=d(n,"FORM",{action:!0,class:!0});var o=S(t);_=d(o,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),T(_)!=="svelte-1c8yrdk"&&(_.textContent=B),U=k(o),h=d(o,"INPUT",{type:!0,id:!0,minlength:!0,maxlength:!0,class:!0}),D=k(o),E=d(o,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),T(E)!=="svelte-14ub8vr"&&(E.textContent=V),M=k(o),v=d(o,"INPUT",{type:!0,id:!0,class:!0}),F=k(o),y=d(o,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),T(y)!=="svelte-bhu94"&&(y.textContent=$),J=k(o),C=d(o,"INPUT",{type:!0,minlength:!0,id:!0,class:!0}),W=k(o),x=d(o,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),T(x)!=="svelte-48luiq"&&(x.textContent=ee),j=k(o),N=d(o,"DIV",{class:!0});var H=S(N);b=d(H,"SELECT",{id:!0,class:!0});var se=S(b);for(let Y=0;Y<c.length;Y+=1)c[Y].l(se);se.forEach(w),G=k(H),L=d(H,"DIV",{style:!0}),S(L).forEach(w),H.forEach(w),K=k(o),P=d(o,"INPUT",{id:!0,type:!0,class:!0}),o.forEach(w),n.forEach(w),Q=k(m),I=d(m,"A",{id:!0,href:!0,class:!0,"data-svelte-h":!0}),T(I)!=="svelte-14aphdk"&&(I.textContent=te),m.forEach(w),this.h()},h(){e(i,"class","svelte-uolrgz"),e(_,"for","username"),e(_,"class","svelte-uolrgz"),e(h,"type","text"),e(h,"id","username"),h.required=!0,e(h,"minlength","3"),e(h,"maxlength","16"),e(h,"class","svelte-uolrgz"),e(E,"for","email"),e(E,"class","svelte-uolrgz"),e(v,"type","email"),e(v,"id","email"),v.required=!0,e(v,"class","svelte-uolrgz"),e(y,"for","password"),e(y,"class","svelte-uolrgz"),e(C,"type","password"),e(C,"minlength","8"),C.required=!0,e(C,"id","password"),e(C,"class","svelte-uolrgz"),e(x,"for","favoriteColor"),e(x,"class","svelte-uolrgz"),b.required=!0,e(b,"id","favoriteColor"),e(b,"class","svelte-uolrgz"),r[0]===void 0&&fe(()=>r[9].call(b)),O(L,"width","50px"),O(L,"height","50px"),O(L,"border-radius","50%"),O(L,"overflow","hidden"),O(L,"background",r[0]),e(N,"class","colorSelection svelte-uolrgz"),e(P,"id","submit"),e(P,"type","submit"),P.value="register",e(P,"class","svelte-uolrgz"),e(t,"action",""),e(t,"class","svelte-uolrgz"),e(u,"class","container svelte-uolrgz"),e(I,"id","login"),e(I,"href",Ee+"/login"),e(I,"class","svelte-uolrgz"),e(a,"class","svelte-uolrgz")},m(s,m){ie(s,a,m),l(a,u),l(u,i),l(u,g),l(u,t),l(t,_),l(t,U),l(t,h),q(h,r[1]),l(t,D),l(t,E),l(t,M),l(t,v),q(v,r[2]),l(t,F),l(t,y),l(t,J),l(t,C),q(C,r[3]),l(t,W),l(t,x),l(t,j),l(t,N),l(N,b);for(let n=0;n<c.length;n+=1)c[n]&&c[n].m(b,null);ae(b,r[0],!0),l(N,G),l(N,L),l(t,K),l(t,P),l(a,Q),l(a,I),X||(le=[R(h,"input",r[6]),R(v,"input",r[7]),R(C,"input",r[8]),R(b,"change",r[9]),R(t,"submit",ge(r[4]))],X=!0)},p(s,[m]){if(m&2&&h.value!==s[1]&&q(h,s[1]),m&4&&v.value!==s[2]&&q(v,s[2]),m&8&&C.value!==s[3]&&q(C,s[3]),m&32){A=re(s[5]);let n;for(n=0;n<A.length;n+=1){const o=oe(s,A,n);c[n]?c[n].p(o,m):(c[n]=ue(o),c[n].c(),c[n].m(b,null))}for(;n<c.length;n+=1)c[n].d(1);c.length=A.length}m&33&&ae(b,s[0]),m&1&&O(L,"background",s[0])},i:Z,o:Z,d(s){s&&w(a),be(c,s),X=!1,de(le)}}}function Le(r,a,u){let i;he(r,ne,v=>u(11,i=v)),ve(()=>{i.length>2&&(p=JSON.parse(i))});let p=[],g="black",t="",_="",B="";function U(){let v={username:t,password:B,email:_,color:g};p.filter(y=>y.email==v.email).length!=0?alert(_+" is already taken, try logging in"):(alert("Welcome, register successful!"),p=[...p,v],pe(ne,i=JSON.stringify(p),i))}let h=[{name:"Black",value:"black"},{name:"Blue",value:"blue"},{name:"Red",value:"red"}];function D(){t=this.value,u(1,t)}function E(){_=this.value,u(2,_)}function V(){B=this.value,u(3,B)}function M(){g=ke(this),u(0,g),u(5,h)}return[g,t,_,B,U,h,D,E,V,M]}class Pe extends _e{constructor(a){super(),me(this,a,Le,ye,ce,{})}}export{Pe as component};
