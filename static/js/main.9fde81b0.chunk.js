(this["webpackJsonphome-assigment-peer39"]=this["webpackJsonphome-assigment-peer39"]||[]).push([[0],{26:function(e,t,c){},64:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(37),a=c.n(i),s=(c(64),c(26),c(20)),r=c(28),o=c(1),j=function(){var e=window.innerWidth;return Object(o.jsx)(r.ErrorBoundary,{children:Object(o.jsxs)("nav",{"data-testid":!0,className:"navbar-container",children:[Object(o.jsx)("h1",{children:"Lior App"}),e>460?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(s.b,{className:"navbar-link",to:"/main",children:" Main "}),Object(o.jsx)(s.b,{className:"navbar-link",to:"/episode/1",children:" Episode "}),Object(o.jsx)(s.b,{className:"navbar-link",to:"/character",children:" character "})]}):Object(o.jsx)(o.Fragment,{})]})})},d=function(){return Object(o.jsx)("footer",{title:"footer",className:"Footer-container",children:Object(o.jsx)("div",{className:"social-links",children:Object(o.jsxs)("ul",{className:"social-links-list",children:[Object(o.jsx)("li",{children:"Github"}),Object(o.jsx)("li",{children:"Linkedin"})]})})})},l=c(7),h=c(9),b=(c(66),c(49)),u=c(50),O=c(97),x=c(96),m=c(93),p=function(e){var t=e.setPage,c={background:"transparent",color:"white"};window.innerWidth;return Object(o.jsx)("div",{title:"pagination-container",className:"pagination-container",children:Object(o.jsx)(m.a,{spacing:2,children:Object(o.jsx)(O.a,{renderItem:function(e){return function(e){return t(e.page),Object(o.jsx)(x.a,Object(u.a)({sx:c},e))}(e)},count:10,variant:"text"})})})},f=Object(n.createContext)([]),v=f.Provider,g=c(95),N=c(103),w=c(101),k=c(100),E=c(99),F=c(102),y=function(e){var t=e.item,c=window.innerWidth;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(g.a,{"data-testid":"ListItem",children:[Object(o.jsx)(w.a,{primary:"Episode",secondary:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(F.a,{sx:{display:"block",fontSize:"1.3rem"},component:"h3",variant:"div",children:Object(o.jsx)(s.b,{"data-testid":"link",to:"/episode/".concat(t.episode_id),children:t.title})}),Object(o.jsx)(F.a,{sx:{display:"inline",fontSize:"1.3rem"},component:"h3",variant:"div",children:t.air_date})]})}),Object(o.jsx)(k.a,{className:"img-container",children:Object(o.jsx)(E.a,{sx:{display:c<460?"none":"block",width:"70px",height:"70px"},src:"https://upload.wikimedia.org/wikipedia/en/6/61/Breaking_Bad_title_card.png"})})]}),Object(o.jsx)(N.a,{})]})},B=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(1),s=Object(h.a)(a,2),r=s[0],j=s[1];return Object(n.useEffect)((function(){fetch("https://www.breakingbadapi.com/api/episodes?season=1").then((function(e){return e.json()})).then((function(e){return function(e){var t=e.splice(7*(r-2),7);i(t)}(e)})).catch((function(e){return console.log(e)}))}),[r]),Object(o.jsxs)(v,{value:{episodes:c,setEpisodes:i},children:[Object(o.jsx)("div",{"data-testid":"container",className:"users-list-container",children:c.map((function(e){return Object(o.jsx)(y,{item:e})}))}),Object(o.jsx)(p,{setPage:j}),Object(o.jsx)(b.a,{})]})},P=function(){var e=Object(n.useState)({title:"Pilot",air_date:"01-20-2008"}),t=Object(h.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(["Walter White","Jesse Pinkman"]),r=Object(h.a)(a,2),j=r[0],d=r[1],b=Object(l.g)();return Object(n.useEffect)((function(){fetch("https://www.breakingbadapi.com/api/episodes/".concat(b.id)).then((function(e){return e.json()})).then((function(e){i(e[0]||{}),d(c.characters)})).catch((function(e){return console.log(e)}))}),[j]),Object(o.jsx)("div",{"data-testid":"episode",className:"episode-details-container",children:Object(o.jsx)("div",{className:"episode-descripition",children:c?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h4",{className:"episode-header",children:"Episode title:"}),Object(o.jsx)("h1",{className:"episode-header",children:null===c||void 0===c?void 0:c.title}),Object(o.jsx)("p",{className:"episode-info",children:"air_date:"}),Object(o.jsx)("p",{className:"episode-info",children:null===c||void 0===c?void 0:c.air_date}),Object(o.jsx)("ul",{children:null===j||void 0===j?void 0:j.map((function(e){return Object(o.jsx)(s.b,{to:"/character/".concat(e),children:Object(o.jsx)("li",{children:e})})}))})]}):"No episode"})})},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e=e.trim().replace(" ","+")};S(" lior solomon ");var _=function(){var e,t=Object(n.useState)({}),c=Object(h.a)(t,2),i=c[0],a=c[1],s=Object(l.g)(),r=window.innerWidth;return Object(n.useEffect)((function(){var e=S(s.name)||"";fetch("https://www.breakingbadapi.com/api/characters?name=".concat(e)).then((function(e){return e.json()})).then((function(e){return a(e[0])})).catch((function(e){return console.log(e)}))}),[]),Object(o.jsxs)("div",{className:"character-details-container",children:[r>460&&Object(o.jsx)("div",{className:"character-image-container",children:Object(o.jsx)("img",{className:"character-image",src:i?i.img:"https://media.istockphoto.com/photos/iceberg-with-its-visible-and-underwater-or-submerged-parts-floating-picture-id1264160353?k=20&m=1264160353&s=612x612&w=0&h=aXfvgjOEvLekxZqIpbJByj80OLYx0esPjJ2jwyi-fUk=",alt:"No Character found"})}),Object(o.jsxs)("div",{className:"character-descripition",children:[r<460&&Object(o.jsx)(k.a,{children:Object(o.jsx)(E.a,{sx:{objectFit:"fill",width:"150px",height:"150px"},src:i.img})}),Object(o.jsx)("h1",{className:"character-header",children:(null===i||void 0===i?void 0:i.name)||"Not found"}),Object(o.jsx)("h3",{className:"character-header",children:(null===i||void 0===i?void 0:i.nickname)||"Not found"}),Object(o.jsx)("h3",{className:"character-header",children:(null===i||void 0===i?void 0:i.status)||"Not found"}),Object(o.jsx)("p",{className:"character-info",children:(null===i||void 0===i?void 0:i.birth)||"Not found"}),Object(o.jsx)("ul",{children:i?null===(e=i.occupation)||void 0===e?void 0:e.map((function(e){return Object(o.jsx)("li",{className:"episode-links-list",children:e})})):Object(o.jsx)("li",{children:"No characters found"})})]})]})},L=function(){return Object(o.jsx)(r.ErrorBoundary,{children:Object(o.jsx)(s.a,{children:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(j,{}),Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"/home-assignment-peer39",element:Object(o.jsx)(B,{})}),Object(o.jsx)(l.a,{path:"/main",element:Object(o.jsx)(B,{})}),Object(o.jsx)(l.a,{path:"/episode/:id",exact:!0,element:Object(o.jsx)(P,{})}),Object(o.jsx)(l.a,{path:"/character/:name",exact:!0,element:Object(o.jsx)(_,{})})]}),Object(o.jsx)(d,{})]})})})},W=function(){return Object(o.jsx)("main",{className:"light",children:Object(o.jsx)(L,{})})};var C=function(){return Object(o.jsx)(W,{})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,104)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))};a.a.render(Object(o.jsx)(r.ErrorBoundary,{children:Object(o.jsx)(C,{})}),document.getElementById("root")),I()}},[[69,1,2]]]);
//# sourceMappingURL=main.9fde81b0.chunk.js.map