import{S as ue,i as de,s as me,k as r,q as i,a as f,l as s,m as o,r as u,h as n,c as _,n as t,b as ce,N as e,u as re,C as ie}from"../../../chunks/index-21ed4b6f.js";function pe(y){let a,E,b,I,p,S,j,w=y[0].user.username+"",q,z,d,g,A,T,G,J,h,N,K,C=y[0].user.instagram+"",x,L,m,P,Q,O,W,X,v,U,Y,D=y[0].user.email+"",B,Z,V,$;return{c(){a=r("section"),E=r("h1"),b=i("Profile"),I=f(),p=r("div"),S=r("p"),j=i("Username: "),q=i(w),z=f(),d=r("form"),g=r("input"),A=f(),T=r("button"),G=i("Save"),J=f(),h=r("div"),N=r("p"),K=i("Instagram: "),x=i(C),L=f(),m=r("form"),P=r("input"),Q=f(),O=r("button"),W=i("Save"),X=f(),v=r("div"),U=r("p"),Y=i("Email: "),B=i(D),Z=f(),V=r("p"),$=i("Please contact our support to change your email address."),this.h()},l(c){a=s(c,"SECTION",{});var l=o(a);E=s(l,"H1",{});var se=o(E);b=u(se,"Profile"),se.forEach(n),I=_(l),p=s(l,"DIV",{class:!0});var F=o(p);S=s(F,"P",{});var ee=o(S);j=u(ee,"Username: "),q=u(ee,w),ee.forEach(n),z=_(F),d=s(F,"FORM",{action:!0,method:!0});var M=o(d);g=s(M,"INPUT",{type:!0,name:!0,id:!0,placeholder:!0}),A=_(M),T=s(M,"BUTTON",{type:!0});var le=o(T);G=u(le,"Save"),le.forEach(n),M.forEach(n),F.forEach(n),J=_(l),h=s(l,"DIV",{class:!0});var R=o(h);N=s(R,"P",{});var te=o(N);K=u(te,"Instagram: "),x=u(te,C),te.forEach(n),L=_(R),m=s(R,"FORM",{action:!0,method:!0});var k=o(m);P=s(k,"INPUT",{type:!0,name:!0,id:!0,placeholder:!0}),Q=_(k),O=s(k,"BUTTON",{type:!0});var ne=o(O);W=u(ne,"Save"),ne.forEach(n),k.forEach(n),R.forEach(n),X=_(l),v=s(l,"DIV",{class:!0});var H=o(v);U=s(H,"P",{});var ae=o(U);Y=u(ae,"Email: "),B=u(ae,D),ae.forEach(n),Z=_(H),V=s(H,"P",{});var oe=o(V);$=u(oe,"Please contact our support to change your email address."),oe.forEach(n),H.forEach(n),l.forEach(n),this.h()},h(){t(g,"type","text"),t(g,"name","username"),t(g,"id","username"),t(g,"placeholder","New username"),t(T,"type","submit"),t(d,"action","?/updateUser"),t(d,"method","POST"),t(p,"class","username svelte-llwp77"),t(P,"type","text"),t(P,"name","instagram"),t(P,"id","instagram"),t(P,"placeholder","New instagram address"),t(O,"type","submit"),t(m,"action","?/updateIg"),t(m,"method","POST"),t(h,"class","instagram svelte-llwp77"),t(v,"class","email svelte-llwp77")},m(c,l){ce(c,a,l),e(a,E),e(E,b),e(a,I),e(a,p),e(p,S),e(S,j),e(S,q),e(p,z),e(p,d),e(d,g),e(d,A),e(d,T),e(T,G),e(a,J),e(a,h),e(h,N),e(N,K),e(N,x),e(h,L),e(h,m),e(m,P),e(m,Q),e(m,O),e(O,W),e(a,X),e(a,v),e(v,U),e(U,Y),e(U,B),e(v,Z),e(v,V),e(V,$)},p(c,[l]){l&1&&w!==(w=c[0].user.username+"")&&re(q,w),l&1&&C!==(C=c[0].user.instagram+"")&&re(x,C),l&1&&D!==(D=c[0].user.email+"")&&re(B,D)},i:ie,o:ie,d(c){c&&n(a)}}}function he(y,a,E){let{data:b}=a;return y.$$set=I=>{"data"in I&&E(0,b=I.data)},[b]}class fe extends ue{constructor(a){super(),de(this,a,he,pe,me,{data:0})}}export{fe as default};