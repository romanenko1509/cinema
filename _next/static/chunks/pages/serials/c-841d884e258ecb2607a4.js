_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{e1MO:function(e,t,r){"use strict";r.r(t);var n=r("nKUr"),a=r("vJKn"),c=r.n(a),i=r("rg98"),s=r("q1tI"),o=r("g4pe"),u=r.n(o),l=r("aoTL"),b=r("20a2"),f=r("dba/"),d=r("9xx/"),p=r("uYoF"),j=r("p7Y9"),h=r("xsdi");function m(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return k(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return k(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){s=!0,c=e},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw c}}}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var v=Object(l.b)((function(){var e=Object(j.b)().rootStore.generalStore,t=Object(b.useRouter)(),r=Object(s.useState)(!0),a=r[0],o=r[1],l=Object(s.useState)(""),k=l[0],v=l[1],O=Object(s.useState)([]),g=O[0],_=O[1],w=Object(s.useState)(1),x=w[0],y=w[1],N=Object(s.useState)(0),S=N[0],A=N[1];Object(s.useEffect)((function(){if(v(E()),""!==k)switch(I(),k){case"\u0430\u043d\u0438\u043c\u0435":A(6);break;case"\u0431\u0438\u043e\u0433\u0440\u0430\u0444\u0438\u044f":A(2);break;case"\u0431\u043e\u0435\u0432\u0438\u043a":A(14);break;case"\u0432\u0435\u0441\u0442\u0435\u0440\u043d":A(1);break;case"\u0432\u043e\u0435\u043d\u043d\u044b\u0439":A(3);break;case"\u0434\u0435\u0442\u0435\u043a\u0442\u0438\u0432":A(19);break;case"\u0434\u0435\u0442\u0441\u043a\u0438\u0439":A(1);break;case"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0439":A(6);break;case"\u0434\u0440\u0430\u043c\u0430":A(50);break;case"\u0438\u0441\u0442\u043e\u0440\u0438\u044f":A(6);break;case"\u043a\u043e\u043c\u0435\u0434\u0438\u044f":A(28);break;case"\u043a\u043e\u043d\u0446\u0435\u0440\u0442":case"\u043a\u043e\u0440\u043e\u0442\u043a\u043e\u043c\u0435\u0442\u0440\u0430\u0436\u043a\u0430":A(1);break;case"\u043a\u0440\u0438\u043c\u0438\u043d\u0430\u043b":A(20);break;case"\u043c\u0435\u043b\u043e\u0434\u0440\u0430\u043c\u0430":A(18);break;case"\u043c\u0443\u0437\u044b\u043a\u0430":A(1);break;case"\u043c\u0443\u043b\u044c\u0442\u0444\u0438\u043b\u044c\u043c":A(12);break;case"\u043c\u044e\u0437\u0438\u043a\u043b":case"\u043d\u043e\u0432\u043e\u0441\u0442\u0438":A(1);break;case"\u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f":A(11);break;case"\u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0435 \u0422\u0412":A(2);break;case"\u0441\u0435\u043c\u0435\u0439\u043d\u044b\u0439":A(6);break;case"\u0441\u043f\u043e\u0440\u0442":A(2);break;case"\u0442\u0440\u0438\u043b\u043b\u0435\u0440":A(17);break;case"\u0443\u0436\u0430\u0441\u044b":A(5);break;case"\u0444\u0430\u043d\u0442\u0430\u0441\u0442\u0438\u043a\u0430":A(11);break;case"\u0444\u0438\u043b\u044c\u043c-\u043d\u0443\u0430\u0440":A(1);break;case"\u0444\u044d\u043d\u0442\u0435\u0437\u0438":A(12)}}),[k,x,t.query]);var P,C,E=function(){return window.location.search.replace("?name=","").length>=1?decodeURI(window.location.search.replace("?name=","")):""},I=function(){var e=Object(i.a)(c.a.mark((function e(){var r,a,i,s,u,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],e.next=3,fetch("https://bazon.cc/api/json?token=".concat(h.d,"&type=serial&cat=").concat(k,"&page=").concat(x));case 3:return a=e.sent,e.next=6,a.json();case 6:if(void 0===(i=e.sent).error){e.next=11;break}return console.error(i.error),t.push("/"),e.abrupt("return");case 11:s=m(i.results);try{for(s.s();!(u=s.n()).done;)l=u.value,r.push(Object(n.jsx)(f.a,{title:l.info.rus,id:l.kinopoisk_id,poster:l.info.poster,year:l.info.year,genre:l.info.genre,country:l.info.country,rating:l.info.rating?+l.info.rating.rating_imdb:0,vote:l.info.rating?+l.info.rating.vote_num_imdb:0},"serials_".concat(k).concat(l.kinopoisk_id)))}catch(c){s.e(c)}finally{s.f()}_(r.sort((function(e,t){return t.vote-e.vote}))),o(!1);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(u.a,{children:[Object(n.jsxs)("title",{children:["\u0421\u0435\u0440\u0438\u0430\u043b\u044b \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 ",k," | YOURCINEMA.COM.UA"]}),Object(n.jsx)("meta",{name:"description",content:"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0444\u0438\u043b\u044c\u043c\u044b \u0438 \u0441\u0435\u0440\u0438\u0430\u043b\u044b \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 ".concat(k," \u043d\u0430 YOURCINEMA.COM.UA")})]}),a?Object(n.jsx)(d.a,{}):Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h1",{className:"page__title",children:(P="\u0421\u0435\u0440\u0438\u0430\u043b\u044b \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 "+k,C="\u0421\u0435\u0440\u0456\u0430\u043b\u0438 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u0457 "+k,"ua"===e.currLang?C:P)}),Object(n.jsx)("div",{className:"filmsRow",children:g}),Object(n.jsx)(p.a,{click:function(e){y(e),window.scrollTo(0,0)},curPage:x,totalPages:S})]})]})}));t.default=v},e63f:function(e,t,r){e.exports={wrapper:"BasePagination_wrapper__2XnGA",current:"BasePagination_current__-gP82",item:"BasePagination_item__2M1JS"}},pkm6:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/serials/c",function(){return r("e1MO")}])},uYoF:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("nKUr"),a=(r("q1tI"),r("e63f")),c=r.n(a),i=function(e){var t=e.curPage,r=e.totalPages,a=e.click;return Object(n.jsx)("div",{className:c.a.wrapper,children:function(){var e=[];return t>=3&&e.push(Object(n.jsx)("div",{className:c.a.item,onClick:function(){return a(1)},children:1})),t>=4&&e.push(Object(n.jsx)("div",{className:c.a.item,children:"..."})),t>=2&&e.push(Object(n.jsx)("div",{className:c.a.item,onClick:function(){return a(t-1)},children:t-1})),e.push(Object(n.jsx)("div",{className:c.a.current,children:t})),t+1<r&&e.push(Object(n.jsx)("div",{className:c.a.item,onClick:function(){return a(t+1)},children:t+1})),t<r-2&&e.push(Object(n.jsx)("div",{className:c.a.item,children:"..."})),t<r&&e.push(Object(n.jsx)("div",{className:c.a.item,onClick:function(){return a(r)},children:r})),e}()})}}},[["pkm6",1,2,5,0,4,3,6]]]);