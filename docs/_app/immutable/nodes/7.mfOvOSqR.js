import{s as R,n as O,c as T}from"../chunks/scheduler.B35ASNvL.js";import{S as w,i as z,e as E,t as f,s as j,c as b,a as q,b as _,f as I,d as H,g as A,h as t,j as S}from"../chunks/index.B56sKvy2.js";import{p as B}from"../chunks/stores.kI40GpDz.js";function D(o){let e,r=console.log(o[0].params)+"",n,p,c,i="You searched for: "+o[0].params.pokemon,u,$,k,C,l,m=o[0].status+"",d,Y,h=o[0].error.message+"",g;return{c(){e=E("section"),n=f(r),p=j(),c=E("h1"),u=f(i),$=j(),k=E("hr"),C=j(),l=E("h2"),d=f(m),Y=f(": "),g=f(h)},l(s){e=b(s,"SECTION",{});var a=q(e);n=_(a,r),p=I(a),c=b(a,"H1",{});var N=q(c);u=_(N,i),N.forEach(H),$=I(a),k=b(a,"HR",{}),C=I(a),l=b(a,"H2",{});var v=q(l);d=_(v,m),Y=_(v,": "),g=_(v,h),v.forEach(H),a.forEach(H)},m(s,a){A(s,e,a),t(e,n),t(e,p),t(e,c),t(c,u),t(e,$),t(e,k),t(e,C),t(e,l),t(l,d),t(l,Y),t(l,g)},p(s,[a]){a&1&&r!==(r=console.log(s[0].params)+"")&&S(n,r),a&1&&i!==(i="You searched for: "+s[0].params.pokemon)&&S(u,i),a&1&&m!==(m=s[0].status+"")&&S(d,m),a&1&&h!==(h=s[0].error.message+"")&&S(g,h)},i:O,o:O,d(s){s&&H(e)}}}function F(o,e,r){let n;return T(o,B,p=>r(0,n=p)),[n]}class L extends w{constructor(e){super(),z(this,e,F,D,R,{})}}export{L as component};
