"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[643],{6650:function(t,n,e){e.d(n,{$w:function(){return p},Df:function(){return a},Pg:function(){return s},Wf:function(){return c},Xj:function(){return u}});var i=e(4569),o=e.n(i);o().defaults.baseURL="https://api.themoviedb.org/3";var r="b97b15a6557134236e51fc0964baa8bb";function a(){return o().get("/trending/movie/week?api_key=".concat(r))}function c(t){return o().get("/search/movie?api_key=".concat(r,"&query=").concat(t,"&page=1&include_adult=false"))}function s(t){return o().get("/movie/".concat(t,"?api_key=").concat(r))}function p(t){return o().get("/movie/".concat(t,"/credits?api_key=").concat(r))}function u(t){return o().get("/movie/".concat(t,"/reviews?api_key=").concat(r))}},5643:function(t,n,e){e.r(n),e.d(n,{Home:function(){return P}});var i,o,r,a,c,s,p,u=e(885),f=e(6650),l=e(2791),x=e(470),d=e(168),h=e(6444),g=e(1087),m=h.ZP.div(i||(i=(0,d.Z)(["\n\tmax-width: 1170px;\n\tpadding: 0 15px;\n\tmargin: 0 auto;\n\ttext-align: center;\n"]))),v=h.ZP.h2(o||(o=(0,d.Z)(["\n\tpadding: 10px 20px;\n\tmargin: 1em 0 0.5em 0;\n\n\tcolor: #f4f2f0;\n\tfont-size: 20px;\n\tline-height: 40px;\n\tfont-weight: 100;\n\ttext-transform: uppercase;\n\tfont-family: 'Josefin Sans', sans-serif;\n\tletter-spacing: 1px;\n"]))),b=h.ZP.ul(r||(r=(0,d.Z)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\tflex-wrap: wrap;\n\tgap: 20px;\n\tlist-style: none;\n"]))),w=h.ZP.li(a||(a=(0,d.Z)(["\n\t/* width: 20%; */\n"]))),Z=(0,h.ZP)(g.rU)(c||(c=(0,d.Z)(["\n\ttext-decoration: none;\n\n\t&:focus,\n\t&:hover,\n\t&:visited,\n\t&:link,\n\t&:active {\n\t\ttext-decoration: none;\n\t}\n"]))),k=h.ZP.img(s||(s=(0,d.Z)(["\n\tdisplay: block;\n\twidth: 300px;\n\theight: 450px;\n\tborder-radius: 20px;\n\tbox-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n\t\trgba(0, 0, 0, 0.3) 0px 30px 60px -30px,\n\t\trgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n"]))),y=h.ZP.p(p||(p=(0,d.Z)(["\n\tfont-family: 'Scada', sans-serif;\n\tfont-size: 16px;\n\tcolor: white;\n\n\t&:focus,\n\t&:hover {\n\t\tcolor: #de6b10;\n\t}\n"]))),_=e(1072),j=e(184);function P(){var t=(0,l.useState)(null),n=(0,u.Z)(t,2),e=n[0],i=n[1],o=(0,l.useState)(!1),r=(0,u.Z)(o,2),a=r[0],c=r[1],s=(0,x.TH)();return(0,l.useEffect)((function(){c(!0),(0,f.Df)().then((function(t){var n=t.data;console.log(n.results),i(n.results)})).catch(console.log).finally((function(){c(!1)}))}),[]),(0,j.jsxs)(m,{children:[(0,j.jsx)(v,{children:"Trending Today"}),a?(0,j.jsx)(_.a,{}):(0,j.jsx)(b,{children:e&&e.map((function(t){var n=t.id,e=t.title,i=t.poster_path;return(0,j.jsx)(w,{children:(0,j.jsxs)(Z,{to:"/movies/".concat(n),state:{from:s},children:[(0,j.jsx)(k,{alt:e,src:"http://image.tmdb.org/t/p/w500".concat(i)}),(0,j.jsx)(y,{children:e})]})},n)}))})]})}}}]);
//# sourceMappingURL=643.10b17b77.chunk.js.map