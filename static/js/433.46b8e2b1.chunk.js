"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[433],{729:function(e,t,n){n.d(t,{Hx:function(){return m},Y5:function(){return s},uV:function(){return u},wr:function(){return a},z1:function(){return r}});var c="https://api.themoviedb.org/3",o="7e0e2e2f9218fa3d19d5f8d5dd18ff00";function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch(e,t).then((function(e){if(!e.ok)throw new Error("Failed to fetch");return e.json()}))}function a(){return i("".concat(c,"/trending/movie/day?api_key=").concat(o))}function r(e){return i("".concat(c,"/search/movie?api_key=").concat(o,"&query=").concat(e))}function s(e){return i("".concat(c,"/movie/").concat(e,"?api_key=").concat(o))}function u(e){return i("".concat(c,"/movie/").concat(e,"/credits?api_key=").concat(o))}function m(e){return i("".concat(c,"/movie/").concat(e,"/reviews?api_key=").concat(o))}},11:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var c=n(439),o=n(791),i=n(87),a=n(729),r="Home_movieList__dew6t",s="Home_movieItem__yfa+9",u="Home_movieLink__Vy9G5",m="Home_movieImage__F3Uf2",l="Home_noImage__ENWxv",d="Home_movieTitle__Zx60k",f=n(184);function h(){var e=(0,o.useState)([]),t=(0,c.Z)(e,2),n=t[0],h=t[1],_=(0,o.useState)(!0),v=(0,c.Z)(_,2),p=v[0],k=v[1],g=(0,o.useState)(null),x=(0,c.Z)(g,2),w=x[0],j=x[1];return(0,o.useEffect)((function(){(0,a.wr)().then((function(e){h(e.results),k(!1)})).catch((function(e){j(e),k(!1)}))}),[]),p?(0,f.jsx)("div",{children:"Loading movies..."}):w?(0,f.jsxs)("div",{children:["There was an error loading the movies: ",w.message]}):(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{children:"Popular Movies Today"}),(0,f.jsx)("ul",{className:r,children:n.map((function(e){return(0,f.jsx)("li",{className:s,children:(0,f.jsxs)(i.rU,{to:"/movies/".concat(e.id),className:u,children:[e.poster_path?(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w185".concat(e.poster_path),alt:e.title,className:m}):(0,f.jsx)("div",{className:l,children:"No Image Available"}),(0,f.jsx)("span",{className:d,children:e.title})]})},e.id)}))})]})}}}]);
//# sourceMappingURL=433.46b8e2b1.chunk.js.map