_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"20a2":function(e,t,n){e.exports=n("nOHt")},YFqc:function(e,t,n){e.exports=n("cTJO")},blM6:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("cpVT"),c=n("nKUr"),o=(n("q1tI"),n("YFqc")),a=n.n(o),i=n("20a2"),s=n("iuhU"),u=n("uYQm"),l=n.n(u);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function(e){var t=e.children,n=e.path,o=e.extraClassName,u=e.nativeClick,f=e.exact,d=void 0===f||f,b=e.external,v=e.openNewTab,h=void 0===v||v,j=Object(i.useRouter)(),O=d?j.asPath===n:j.asPath.includes(n);return b?Object(c.jsx)("a",p(p({href:n,className:o},h&&{target:"_blank",rel:"nofollow"}),{},{onClick:u,children:t})):Object(c.jsx)(a.a,{href:n,prefetch:!1,children:Object(c.jsx)("a",{className:Object(s.a)(l.a.wrapper,o,Object(r.a)({},l.a.active,O)),onClick:u,children:t})})}},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),c=n("7KCV");t.__esModule=!0,t.default=void 0;var o=c(n("q1tI")),a=n("elyg"),i=n("nOHt"),s=n("vNVm"),u={};function l(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(c?"%"+c:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),c=n&&n.pathname||"/",f=o.default.useMemo((function(){var t=(0,a.resolveHref)(c,e.href,!0),n=r(t,2),o=n[0],i=n[1];return{href:o,as:e.as?(0,a.resolveHref)(c,e.as):i||o}}),[c,e.href,e.as]),p=f.href,d=f.as,b=e.children,v=e.replace,h=e.shallow,j=e.scroll,O=e.locale;"string"===typeof b&&(b=o.default.createElement("a",null,b));var m=o.Children.only(b),y=m&&"object"===typeof m&&m.ref,g=(0,s.useIntersection)({rootMargin:"200px"}),w=r(g,2),_=w[0],x=w[1],E=o.default.useCallback((function(e){_(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,_]);(0,o.useEffect)((function(){var e=x&&t&&(0,a.isLocalURL)(p),r="undefined"!==typeof O?O:n&&n.locale,c=u[p+"%"+d+(r?"%"+r:"")];e&&!c&&l(n,p,d,{locale:r})}),[d,p,x,O,t,n]);var N={ref:E,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,o,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:o,locale:s,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,n,p,d,v,h,j,O)},onMouseEnter:function(e){(0,a.isLocalURL)(p)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),l(n,p,d,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var C="undefined"!==typeof O?O:n&&n.locale,M=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(d,C,n&&n.locales,n&&n.domainLocales);N.href=M||(0,a.addBasePath)((0,a.addLocale)(d,C,n&&n.defaultLocale))}return o.default.cloneElement(m,N)};t.default=f},cg2l:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),c=(n("q1tI"),n("g4pe")),o=n.n(c),a=n("aoTL"),i=n("blM6"),s=n("p7Y9"),u=n("xsdi"),l=Object(a.b)((function(){var e,t,n=Object(s.b)().rootStore.generalStore;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(o.a,{children:[Object(r.jsx)("title",{children:"\u0424\u0438\u043b\u044c\u043c\u044b \u043f\u043e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f\u043c | YOURCINEMA.COM.UA"}),Object(r.jsx)("meta",{name:"description",content:"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0444\u0438\u043b\u044c\u043c\u044b \u0438 \u0441\u0435\u0440\u0438\u0430\u043b\u044b \u043f\u043e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f\u043c \u043d\u0430 YOURCINEMA.COM.UA"})]}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{className:"page__title",children:(e="\u0424\u0438\u043b\u044c\u043c\u044b",t="\u0424\u0456\u043b\u044c\u043c\u0438","ua"===n.currLang?t:e)}),Object(r.jsx)("div",{className:"catsRow",children:u.a.map((function(e){return Object(r.jsx)(i.a,{path:"/films/c/?name=".concat(e),extraClassName:"catsItem",children:e})}))})]})]})}));t.default=l},iuhU:function(e,t,n){"use strict";function r(e){var t,n,c="";if("string"===typeof e||"number"===typeof e)c+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(c&&(c+=" "),c+=n);else for(t in e)e[t]&&(c&&(c+=" "),c+=t);return c}t.a=function(){for(var e,t,n=0,c="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(c&&(c+=" "),c+=t);return c}},q3jW:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/films",function(){return n("cg2l")}])},uYQm:function(e,t,n){e.exports={wrapper:"BaseLink_wrapper__3Fe6n",active:"BaseLink_active__2pFEj"}},vNVm:function(e,t,n){"use strict";var r=n("zoAU");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=(0,c.useRef)(),u=(0,c.useState)(!1),l=r(u,2),f=l[0],p=l[1],d=(0,c.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:c,elements:r}),n}(n),c=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),i.delete(c))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,f]);return(0,c.useEffect)((function(){if(!a&&!f){var e=(0,o.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[d,f]};var c=n("q1tI"),o=n("0G5g"),a="undefined"!==typeof IntersectionObserver;var i=new Map},xsdi:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return a}));var r="9af84bacc941024d6bf3eb9c220396de",c="9af73ce8-ceef-4af3-bf5a-27333f5b2eec",o=["\u0430\u043d\u0438\u043c\u0435","\u0431\u0438\u043e\u0433\u0440\u0430\u0444\u0438\u044f","\u0431\u043e\u0435\u0432\u0438\u043a","\u0432\u0435\u0441\u0442\u0435\u0440\u043d","\u0432\u043e\u0435\u043d\u043d\u044b\u0439","\u0434\u0435\u0442\u0435\u043a\u0442\u0438\u0432","\u0434\u0435\u0442\u0441\u043a\u0438\u0439","\u0434\u043b\u044f \u0432\u0437\u0440\u043e\u0441\u043b\u044b\u0445","\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0439","\u0434\u0440\u0430\u043c\u0430","\u0438\u0441\u0442\u043e\u0440\u0438\u044f","\u043a\u043e\u043c\u0435\u0434\u0438\u044f","\u043a\u043e\u043d\u0446\u0435\u0440\u0442","\u043a\u043e\u0440\u043e\u0442\u043a\u043e\u043c\u0435\u0442\u0440\u0430\u0436\u043a\u0430","\u043a\u0440\u0438\u043c\u0438\u043d\u0430\u043b","\u043c\u0435\u043b\u043e\u0434\u0440\u0430\u043c\u0430","\u043c\u0443\u0437\u044b\u043a\u0430","\u043c\u0443\u043b\u044c\u0442\u0444\u0438\u043b\u044c\u043c","\u043c\u044e\u0437\u0438\u043a\u043b","\u043d\u043e\u0432\u043e\u0441\u0442\u0438","\u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f","\u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0435 \u0422\u0412","\u0441\u0435\u043c\u0435\u0439\u043d\u044b\u0439","\u0441\u043f\u043e\u0440\u0442","\u0442\u0440\u0438\u043b\u043b\u0435\u0440","\u0443\u0436\u0430\u0441\u044b","\u0444\u0430\u043d\u0442\u0430\u0441\u0442\u0438\u043a\u0430","\u0444\u0438\u043b\u044c\u043c-\u043d\u0443\u0430\u0440","\u0444\u044d\u043d\u0442\u0435\u0437\u0438"],a=["\u0430\u043d\u0438\u043c\u0435","\u0431\u0438\u043e\u0433\u0440\u0430\u0444\u0438\u044f","\u0431\u043e\u0435\u0432\u0438\u043a","\u0432\u0435\u0441\u0442\u0435\u0440\u043d","\u0432\u043e\u0435\u043d\u043d\u044b\u0439","\u0434\u0435\u0442\u0435\u043a\u0442\u0438\u0432","\u0434\u0435\u0442\u0441\u043a\u0438\u0439","\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u044b\u0439","\u0434\u0440\u0430\u043c\u0430","\u0438\u0441\u0442\u043e\u0440\u0438\u044f","\u043a\u043e\u043c\u0435\u0434\u0438\u044f","\u043a\u043e\u043d\u0446\u0435\u0440\u0442","\u043a\u043e\u0440\u043e\u0442\u043a\u043e\u043c\u0435\u0442\u0440\u0430\u0436\u043a\u0430","\u043a\u0440\u0438\u043c\u0438\u043d\u0430\u043b","\u043c\u0435\u043b\u043e\u0434\u0440\u0430\u043c\u0430","\u043c\u0443\u0437\u044b\u043a\u0430","\u043c\u0443\u043b\u044c\u0442\u0444\u0438\u043b\u044c\u043c","\u043c\u044e\u0437\u0438\u043a\u043b","\u043d\u043e\u0432\u043e\u0441\u0442\u0438","\u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f","\u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0435 \u0422\u0412","\u0441\u0435\u043c\u0435\u0439\u043d\u044b\u0439","\u0441\u043f\u043e\u0440\u0442","\u0442\u0440\u0438\u043b\u043b\u0435\u0440","\u0443\u0436\u0430\u0441\u044b","\u0444\u0430\u043d\u0442\u0430\u0441\u0442\u0438\u043a\u0430","\u0444\u0438\u043b\u044c\u043c-\u043d\u0443\u0430\u0440","\u0444\u044d\u043d\u0442\u0435\u0437\u0438"]}},[["q3jW",0,1,4,3,2]]]);