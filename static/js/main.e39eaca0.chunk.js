(this["webpackJsonprick-and-morty"]=this["webpackJsonprick-and-morty"]||[]).push([[0],{48:function(n,e,t){"use strict";t.r(e);var r,c,a,i,s,o=t(1),d=t.n(o),j=t(31),b=t.n(j),l=t(50),p=t(35),u=t(4),x=t(5),h=t(11),f=x.b.ul(r||(r=Object(u.a)(["\n  margin-top: 3em;\n  display: flex;\n  justify-content: center;\n  color: rgb(158, 158, 158);\n  flex-wrap: wrap;\n"]))),O=x.b.li(c||(c=Object(u.a)(["\n  list-style: none;\n  margin: 1em;\n  transition: ease 0.1s;\n  font-size: 1.4rem;\n  font-weight: 500;\n\n  &:hover,\n  .active {\n    color: rgb(255, 152, 0);\n  }\n"]))),m=Object(x.b)(h.c)(a||(a=Object(u.a)(["\n  text-decoration: none;\n  color: inherit;\n"]))),g=t(0);function v(n){var e=n.categories;return Object(g.jsx)(f,{children:e.map((function(n){return Object(g.jsx)(O,{children:Object(g.jsx)(m,{to:"/".concat(n),children:n})},n)}))})}var w,y=x.b.header(i||(i=Object(u.a)(["\n  background: url('https://i.imgur.com/easQdbn.png') white center;\n  background-size: cover;\n  padding: 200px;\n  text-align: center;\n\n  .active {\n    color: rgba(255, 152, 0, 0.6);\n  }\n"]))),k=Object(x.b)(h.c)(s||(s=Object(u.a)(["\n  font-weight: 900;\n  font-size: clamp(2rem, 10vw, 5.5rem);\n  text-decoration: none;\n  color: black;\n  transition: ease 0.1s;\n\n  &:hover {\n    color: rgb(255, 152, 0);\n  }\n"])));function S(){return Object(g.jsx)(y,{children:Object(g.jsx)(k,{to:"/",children:"The Rick and Morty"})})}var z,N,L,E,P,C,F=x.b.div(w||(w=Object(u.a)(["\n  background: rgb(36, 40, 47);\n  min-height: 100vh;\n  width: 100%;\n  //overflow-x: hidden;\n"]))),M=t(8),T=t(25),J=t(9),R=t.n(J),A=t(14),B=t(51),D=x.b.div(z||(z=Object(u.a)(["\n  position: relative;\n  padding-left: 15px;\n  font-size: 0.8rem;\n  &::before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%);\n    border-radius: 50%;\n    width: 10px;\n    height: 10px;\n    background: ",";\n  }\n"])),(function(n){var e=n.status;return"Alive"===e?"rgb(85, 204, 68)":"Dead"===e?"rgb(214, 61, 46)":"rgb(158, 158, 158)"})),G=Object(x.b)(h.b)(N||(N=Object(u.a)(["\n  width: clamp(400px, 40%, 500px);\n  height: 200px;\n  display: flex;\n  overflow: hidden;\n  background: rgb(60, 62, 68);\n  border-radius: 0.5rem;\n  margin: 0.75rem;\n  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px,\n    rgb(0 0 0 / 6%) 0px 2px 4px -1px;\n  text-decoration: none;\n  transition: 0.5s ease-in-out;\n  &:hover {\n    box-shadow: #f08d49 2px 2px 2px -1px;\n  }\n"]))),I=x.b.div(L||(L=Object(u.a)(["\n  width: 229px;\n  height: 200px;\n"]))),Q=x.b.img(E||(E=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n"]))),Y=x.b.div(P||(P=Object(u.a)(["\n  padding: 0.75rem;\n  color: rgb(255, 255, 255);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  header {\n    font-size: 1.5rem;\n  }\n  .information {\n    color: gray;\n    font-size: 0.75rem;\n  }\n"])));function q(n){var e=n.name,t=n.status,r=n.image,c=n.species,a=n.location,i=n.origin,s=n.id;return Object(g.jsxs)(G,{to:"/characters/".concat(s),children:[Object(g.jsx)(I,{children:Object(g.jsx)(Q,{src:r})}),Object(g.jsxs)(Y,{children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("header",{children:e}),Object(g.jsxs)(D,{status:t,children:[t," - ",c]})]}),Object(g.jsxs)("p",{children:[Object(g.jsxs)("span",{className:"information",children:["Last known location: ",Object(g.jsx)("br",{})]}),a.name]}),Object(g.jsxs)("p",{children:[Object(g.jsxs)("span",{className:"information",children:["Origin: ",Object(g.jsx)("br",{})," "]}),i.name]})]})]})}var H,K=x.b.section(C||(C=Object(u.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  padding: 0 1em 1em;\n"]))),U=x.b.div(H||(H=Object(u.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  .lds-ring {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n  }\n\n  .lds-ring div {\n    box-sizing: border-box;\n    display: block;\n    position: absolute;\n    width: 64px;\n    height: 64px;\n    margin: 8px;\n    border: 8px solid #fff;\n    border-radius: 50%;\n    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    border-color: #fff transparent transparent transparent;\n  }\n\n  .lds-ring div:nth-child(1) {\n    animation-delay: -0.45s;\n  }\n\n  .lds-ring div:nth-child(2) {\n    animation-delay: -0.3s;\n  }\n\n  .lds-ring div:nth-child(3) {\n    animation-delay: -0.15s;\n  }\n\n  @keyframes lds-ring {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]))),V=function(){return Object(g.jsx)(U,{children:Object(g.jsxs)("div",{className:"lds-ring",children:[Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{})]})})},W=function(){var n=Object(A.a)(R.a.mark((function n(e){var t;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://rickandmortyapi.com/api/character/".concat(e));case 2:return t=n.sent,n.abrupt("return",t.json());case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function X(){var n=function(){for(var n=[],e=0;e<6;e++){var t=Math.floor(671*Math.random()+1);n.push(t)}return n}(),e=Object(B.a)(["randomCharacters"],(function(){return W(n)})),t=e.isLoading,r=e.data,c=e.isSuccess,a=e.isError;return Object(g.jsxs)(g.Fragment,{children:[a&&Object(g.jsx)("h1",{children:"Sorry but we couldn't load data for you"}),t&&Object(g.jsx)(V,{}),c&&Object(g.jsx)(K,{children:r.map((function(n){return Object(g.jsx)(q,Object(T.a)({},n),n.id)}))})]})}var Z,$,_,nn,en,tn=t(19),rn=x.b.ul(Z||(Z=Object(u.a)(["\n  color: white;\n  font-size: 1.1rem;\n  text-align: center;\n  list-style: none;\n"]))),cn=x.b.li($||($=Object(u.a)(["\n  margin: 0.5em 0;\n"]))),an=x.b.header(_||(_=Object(u.a)(["\n  color: white;\n  font-size: 3rem;\n  padding: 1em;\n  text-align: center;\n"]))),sn=x.b.section(nn||(nn=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n"]))),on=x.b.button(en||(en=Object(u.a)(["\n  padding: 1em;\n  border: 1px solid rgb(158, 158, 158);\n  color: rgb(158, 158, 158);\n  background: transparent;\n  outline: none;\n  font-size: 1rem;\n"])));function dn(n){var e=n.page,t=n.setPage,r=n.pages,c=n.topScroll;return Object(o.useEffect)((function(){window.scrollTo({behavior:"smooth",top:c})}),[e,c]),Object(g.jsxs)(sn,{children:[Object(g.jsx)(on,{disabled:1===e,onClick:function(){return t(1)},children:"First"}),Object(g.jsx)(on,{disabled:1===e,onClick:function(){return t(e-1)},children:"Prev"}),Object(g.jsx)(on,{disabled:!0,children:e}),Object(g.jsx)(on,{disabled:e===r,onClick:function(){return t(e+1)},children:"Next"}),Object(g.jsx)(on,{disabled:e===r,onClick:function(){return t(r)},children:"Last"})]})}var jn,bn,ln,pn,un=function(){var n=Object(A.a)(R.a.mark((function n(e){var t;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://rickandmortyapi.com/api/episode/?page=".concat(e));case 2:return t=n.sent,n.abrupt("return",t.json());case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function xn(){var n=Object(o.useState)(1),e=Object(tn.a)(n,2),t=e[0],r=e[1],c=Object(B.a)(["episodes",t],(function(){return un(t)})),a=c.isLoading,i=c.isError,s=c.isSuccess,d=c.data,j=(null===d||void 0===d?void 0:d.info.pages)||1;return Object(g.jsxs)("div",{children:[Object(g.jsx)(an,{children:"Episode"}),a&&Object(g.jsx)(V,{}),i&&Object(g.jsx)("h1",{children:"Sorry, but we couldn't load data for you. Please refresh the page"}),s&&d&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(rn,{children:d.results.map((function(n){var e=n.id,t=n.name;return Object(g.jsx)(cn,{children:t},e)}))}),Object(g.jsx)(dn,{page:t,setPage:r,pages:j,topScroll:400})]})]})}var hn=x.b.article(jn||(jn=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 22px;\n  color: rgb(255, 255, 255);\n\n  .img-container {\n    max-width: 329px;\n    margin-bottom: 1em;\n  }\n\n  .information {\n    color: gray;\n    font-size: 0.9rem;\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    border-radius: 5%;\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,\n      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\n  }\n"]))),fn=Object(x.b)(h.b)(bn||(bn=Object(u.a)(["\n  position: absolute;\n  top: 5%;\n  left: 5%;\n  padding: 20px;\n  color: white;\n  text-decoration: none;\n  display: grid;\n  place-items: center;\n"]))),On=x.b.i(ln||(ln=Object(u.a)(["\n  position: relative;\n  background: #fff;\n  height: 3px;\n  width: 30px;\n  margin: 0 auto;\n  cursor: pointer;\n\n  &:before,\n  &:after {\n    content: '';\n    background: #fff;\n    position: absolute;\n    height: 3px;\n    width: 15px;\n  }\n\n  &:before {\n    left: -3px;\n    bottom: 4px;\n    transform: rotate(-45deg);\n  }\n\n  &:after {\n    left: -3px;\n    top: 4px;\n    transform: rotate(45deg);\n  }\n"]))),mn=x.b.section(pn||(pn=Object(u.a)(["\n  position: relative;\n"]))),gn=function(){var n=Object(A.a)(R.a.mark((function n(e){var t;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://rickandmortyapi.com/api/character/".concat(e));case 2:return t=n.sent,n.abrupt("return",t.json());case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function vn(){var n=Object(M.f)().id,e=Object(B.a)(["characters",n],(function(){return gn(n)})),t=e.isLoading,r=e.isError,c=e.isSuccess,a=e.data;return Object(g.jsxs)(g.Fragment,{children:[t&&Object(g.jsx)(V,{}),r&&Object(g.jsx)("h1",{children:"Sorry, but we couldn't load data for you"}),c&&a&&Object(g.jsxs)(mn,{children:[Object(g.jsx)(fn,{to:"/characters",children:Object(g.jsx)(On,{})}),Object(g.jsx)(an,{children:a.name}),Object(g.jsxs)(hn,{children:[Object(g.jsx)("div",{className:"img-container",children:Object(g.jsx)("img",{src:a.image,alt:a.name})}),Object(g.jsx)("div",{className:"inner-wrapper",children:Object(g.jsxs)(D,{status:a.status,children:[a.status," - ",a.species]})}),Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{className:"information",children:"Last known location:"}),"  ",a.location.name]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{className:"information",children:"Origin: "}),"  ",a.origin.name]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{className:"information",children:"Gender: "}),"  ",a.gender]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{className:"information",children:"Type: "}),"  ",a.type]})]})]})]})}var wn=function(){var n=Object(A.a)(R.a.mark((function n(e){var t;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://rickandmortyapi.com/api/character/?page=".concat(e));case 2:return t=n.sent,n.abrupt("return",t.json());case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function yn(){var n=Object(o.useState)(1),e=Object(tn.a)(n,2),t=e[0],r=e[1],c=Object(M.g)(),a=Object(B.a)(["characters",t],(function(){return wn(t)})),i=a.isLoading,s=a.isError,d=a.isSuccess,j=a.data,b=(null===j||void 0===j?void 0:j.info.pages)||1;return Object(g.jsx)("div",{children:Object(g.jsxs)(M.c,{children:[Object(g.jsx)(M.a,{path:"".concat(c.path,"/:id"),children:Object(g.jsx)(vn,{})}),Object(g.jsxs)(M.a,{path:c.path,children:[i&&Object(g.jsx)(V,{}),s&&Object(g.jsx)("h1",{children:"Sorry, but we couldn't load data for you"}),d&&j&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(an,{children:"Characters"}),Object(g.jsx)(K,{children:j.results.map((function(n){return Object(g.jsx)(q,Object(T.a)({},n),n.id)}))}),Object(g.jsx)(dn,{page:t,setPage:r,pages:b,topScroll:500})]})]})]})})}var kn=function(){var n=Object(A.a)(R.a.mark((function n(e){var t;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://rickandmortyapi.com/api/location/?page=".concat(e));case 2:return t=n.sent,n.abrupt("return",t.json());case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();function Sn(){var n=Object(o.useState)(1),e=Object(tn.a)(n,2),t=e[0],r=e[1],c=Object(B.a)(["locations",t],(function(){return kn(t)})),a=c.isLoading,i=c.isError,s=c.isSuccess,d=c.data,j=(null===d||void 0===d?void 0:d.info.pages)||1;return Object(g.jsxs)("div",{children:[Object(g.jsx)(an,{children:"Locations"}),a&&Object(g.jsx)(V,{}),i&&Object(g.jsx)("h1",{children:"Sorry, but we couldn't load data for you. Please refresh the page"}),s&&d&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(rn,{children:d.results.map((function(n){var e=n.id,t=n.name;return Object(g.jsx)(cn,{children:t},e)}))}),Object(g.jsx)(dn,{page:t,setPage:r,pages:j,topScroll:400})]})]})}var zn,Nn=[{component:Object(g.jsx)(yn,{}),link:"characters"},{component:Object(g.jsx)(Sn,{}),link:"locations"},{component:Object(g.jsx)(xn,{}),link:"episodes"}];function Ln(){return Object(g.jsx)(h.a,{basename:"/Rick-and-Morty",children:Object(g.jsxs)(F,{children:[Object(g.jsx)(S,{}),Object(g.jsxs)(M.c,{children:[Nn.map((function(n){var e=n.component,t=n.link;return Object(g.jsx)(M.a,{path:"/".concat(t),children:e},t)})),Object(g.jsx)(M.a,{path:"/",children:Object(g.jsx)(X,{})})]}),Object(g.jsx)(v,{categories:Nn.map((function(n){return n.link}))})]})})}var En=Object(x.a)(zn||(zn=Object(u.a)(["\n  *, *::before, *::after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n  }\n\n  html, body {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 12px;\n    @media (min-width: 756px) {\n      font-size: 16px;\n    }\n  }\n\n  body {\n    overflow-x: hidden;\n  }\n"]))),Pn=new l.a;function Cn(){return Object(g.jsxs)(p.a,{client:Pn,children:[Object(g.jsx)(En,{}),Object(g.jsx)(Ln,{})]})}b.a.render(Object(g.jsx)(d.a.StrictMode,{children:Object(g.jsx)(Cn,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.e39eaca0.chunk.js.map