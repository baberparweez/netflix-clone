(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{32:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(2),o=n.n(i),a=n(19),r=n.n(a),s=(n(32),n(8)),l=n.p+"static/media/Netflix_icon.8e8e8efb.png";var d=function(){return Object(c.jsx)(s.b,{children:Object(c.jsxs)(s.a,{children:[Object(c.jsx)("title",{children:"Netflix Clone"}),Object(c.jsx)("meta",{property:"og:title",content:"Netflix"}),Object(c.jsx)("meta",{property:"og:image",content:l}),Object(c.jsx)("meta",{property:"og:description",content:"A Netflix Interface created using React"}),Object(c.jsx)("meta",{property:"og:url",content:"https://netflix-clone-b8973.web.app"})]})})},u=n(4);var v=function(){var e=Object(i.useState)(!1),t=Object(u.a)(e,2),n=t[0],o=t[1];return Object(i.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?o(!0):o(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(c.jsxs)("div",{className:"nav ".concat(n?"nav__scrolled":""),children:[Object(c.jsx)("img",{className:"nav__logo",src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",alt:"Netflix Logo"}),Object(c.jsx)("img",{className:"nav__avatar",src:"https://i.pinimg.com/564x/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.jpg",alt:"Netflix Logo"})]})},j=n(5),h=n.n(j),f=n(6),b=n(22),p=n.n(b).a.create({baseURL:"https://api.themoviedb.org/3"}),g="386b9106e6bb5860bdc2598f98566009",m={fetchTrending:"/trending/all/week?api_key=".concat(g,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(g,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(g,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(g,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(g,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(g,"&with_genres=27"),fetchRomanceovies:"/discover/movie?api_key=".concat(g,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(g,"&with_genres=99")};var x=function(){var e,t,n=Object(i.useState)([]),o=Object(u.a)(n,2),a=o[0],r=o[1];return Object(i.useEffect)((function(){function e(){return(e=Object(f.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get(m.fetchNetflixOriginals);case 2:return t=e.sent,r(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.jsx)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===a||void 0===a?void 0:a.backdrop_path,'")'),backgroundPosition:"top left"},children:Object(c.jsxs)("div",{className:"banner__content",children:[Object(c.jsx)("h1",{className:"banner__title",children:(null===a||void 0===a?void 0:a.title)||(null===a||void 0===a?void 0:a.name)||(null===a||void 0===a?void 0:a.original_name)}),Object(c.jsx)("div",{className:"banner__button",children:"Play"}),Object(c.jsx)("div",{className:"banner__button",children:"My List"}),Object(c.jsx)("h2",{className:"banner__description",children:(e=a.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]})})},O=n(23),_=n(26),w=n.n(_);var N=function(e){var t=e.title,n=e.fetchURL,o=e.isLargeRow,a=Object(i.useState)([]),r=Object(u.a)(a,2),s=r[0],l=r[1],d=Object(i.useState)(""),v=Object(u.a)(d,2),j=v[0],b=v[1];return Object(i.useEffect)((function(){function e(){return(e=Object(f.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get(n);case 2:return t=e.sent,l(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("h2",{children:t}),Object(c.jsx)("div",{className:"row__posters",children:s.map((function(e){return Object(c.jsx)("img",{onClick:function(){return function(e){j?b(""):w()((null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.original_name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);b(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},className:"row__poster ".concat(o&&"row__posterLarge"),src:"https://image.tmdb.org/t/p/original/".concat(o?null===e||void 0===e?void 0:e.poster_path:null===e||void 0===e?void 0:e.backdrop_path),alt:(null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.original_name)},e.id)}))}),j&&Object(c.jsx)(O.a,{videoId:j,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})};n(65);var y=function(){return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(d,{}),Object(c.jsx)(v,{}),Object(c.jsx)(x,{}),Object(c.jsx)(N,{title:"NETFLIX ORIGINALS",fetchURL:m.fetchNetflixOriginals,isLargeRow:!0}),Object(c.jsx)(N,{title:"Trending Now",fetchURL:m.fetchTrending}),Object(c.jsx)(N,{title:"Top Rated",fetchURL:m.fetchTopRated}),Object(c.jsx)(N,{title:"Action Movies",fetchURL:m.fetchActionMovies}),Object(c.jsx)(N,{title:"Comedy Movies",fetchURL:m.fetchComedyMovies}),Object(c.jsx)(N,{title:"Horror Movies",fetchURL:m.fetchHorrorMovies}),Object(c.jsx)(N,{title:"Romance Movies",fetchURL:m.fetchRomanceovies}),Object(c.jsx)(N,{title:"Documentaries",fetchURL:m.fetchDocumentaries})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),o(e),a(e)}))};r.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),L()}},[[66,1,2]]]);
//# sourceMappingURL=main.93ac4a82.chunk.js.map