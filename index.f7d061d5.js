!function(){function t(t){return t&&t.__esModule?t.default:t}function e(t,e,n,o){Object.defineProperty(t,e,{get:n,set:o,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},a=n.parcelRequired7c6;null==a&&((a=function(t){if(t in o)return o[t].exports;if(t in r){var e=r[t];delete r[t];var n={id:t,exports:{}};return o[t]=n,e.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){r[t]=e},n.parcelRequired7c6=a),a.register("2JJTb",(function(n,o){e(n.exports,"libraryLogic",(function(){return p}));var r=a("bpxeT"),i=a("8MBJY"),c=a("a2hTj"),u=a("2TvXO"),s=a("jUnVF");function l(){return(l=t(r)(t(u).mark((function e(){var n;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==localStorage.getItem("28")&&null==localStorage.getItem("10770")){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,s.apiService.fetchMovieGenres();case 4:n=t.sent,n.genres.map((function(t){var e=Object.values(t);localStorage.setItem(e[0],e[1])}));case 7:case"end":return t.stop()}}),e)})))).apply(this,arguments)}!function(){l.apply(this,arguments)}();var p=new(function(){"use strict";function e(){t(i)(this,e),this.page=1,this.total_pages=1}return t(c)(e,[{key:"addToLocalStorage",value:function(t,e){var n;"watched"===e?n=JSON.parse(localStorage.getItem("watched"))||[]:"queue"===e&&(n=JSON.parse(localStorage.getItem("queue"))||[]),n.find((function(e){return e.id===t.id}))||(n.push(t),localStorage.setItem(e,JSON.stringify(n)))}},{key:"removeFromLocalstorage",value:function(t,e){if("queue"!=e){var n=JSON.parse(localStorage.getItem("watched"));n.find((function(e){return e.id===t.id}))&&localStorage.setItem("watched",JSON.stringify(n.filter((function(e){return e.id!==t.id}))))}else{var o=JSON.parse(localStorage.getItem("queue"));o.find((function(e){return e.id===t.id}))&&localStorage.setItem("queue",JSON.stringify(o.filter((function(e){return e.id!==t.id}))))}}},{key:"getFromStorage",value:function(t){try{var e=localStorage.getItem(t);return null===e?[]:JSON.parse(e)}catch(t){return console.log("Error"),[]}}},{key:"currentPage",get:function(){return this.page},set:function(t){this.page=t}},{key:"totalPages",get:function(){return this.total_pages},set:function(t){this.total_pages=t}},{key:"pages",get:function(){return{page:this.page,total_pages:this.total_pages}}}]),e}())})),a.register("bpxeT",(function(t,e){"use strict";function n(t,e,n,o,r,a,i){try{var c=t[a](i),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(o,r)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return function(){var e=this,o=arguments;return new Promise((function(r,a){var i=t.apply(e,o);function c(t){n(i,r,a,c,u,"next",t)}function u(t){n(i,r,a,c,u,"throw",t)}c(void 0)}))}}})),a.register("8MBJY",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}})),a.register("a2hTj",(function(t,e){"use strict";function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,o){e&&n(t.prototype,e);o&&n(t,o);return t}})),a.register("2TvXO",(function(t,e){var n=function(t){"use strict";var e,n=Object.prototype,o=n.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function s(t,e,n,o){var r=e&&e.prototype instanceof h?e:h,a=Object.create(r.prototype),i=new q(o||[]);return a._invoke=function(t,e,n){var o=p;return function(r,a){if(o===b)throw new Error("Generator is already running");if(o===g){if("throw"===r)throw a;return O()}for(n.method=r,n.arg=a;;){var i=n.delegate;if(i){var c=E(i,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=b;var u=l(t,e,n);if("normal"===u.type){if(o=n.done?g:d,u.arg===f)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=g,n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var p="suspendedStart",d="suspendedYield",b="executing",g="completed",f={};function h(){}function v(){}function m(){}var y={};u(y,a,(function(){return this}));var w=Object.getPrototypeOf,k=w&&w(w(j([])));k&&k!==n&&o.call(k,a)&&(y=k);var x=m.prototype=h.prototype=Object.create(y);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function n(r,a,i,c){var u=l(t[r],t,a);if("throw"!==u.type){var s=u.arg,p=s.value;return p&&"object"==typeof p&&o.call(p,"__await")?e.resolve(p.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(p).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}var r;this._invoke=function(t,o){function a(){return new e((function(e,r){n(t,o,e,r)}))}return r=r?r.then(a,a):a()}}function E(t,n){var o=t.iterator[n.method];if(o===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return f;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=l(o,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,f;var a=r.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,f):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function q(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function j(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function n(){for(;++r<t.length;)if(o.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:O}}function O(){return{value:e,done:!0}}return v.prototype=m,u(x,"constructor",m),u(m,"constructor",v),v.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(_.prototype),u(_.prototype,i,(function(){return this})),t.AsyncIterator=_,t.async=function(e,n,o,r,a){void 0===a&&(a=Promise);var i=new _(s(e,n,o,r),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(x),u(x,c,"Generator"),u(x,a,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var o=e.pop();if(o in t)return n.value=o,n.done=!1,n}return n.done=!0,n}},t.values=j,q.prototype={constructor:q,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(o,r){return c.type="throw",c.arg=t,n.next=o,r&&(n.method="next",n.arg=e),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var r=o.arg;T(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,o){return this.delegate={iterator:j(t),resultName:n,nextLoc:o},"next"===this.method&&(this.arg=e),f}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),a.register("jUnVF",(function(n,o){e(n.exports,"apiService",(function(){return p}));var r=a("bpxeT"),i=a("8MBJY"),c=a("a2hTj"),u=a("2TvXO"),s="https://api.themoviedb.org/3/",l="aa05d9ef1feff0e96ac321d8773a5c67",p=new(function(){"use strict";function e(){t(i)(this,e),this.searchQuery="",this.page=1,this.requestType="trending"}return t(c)(e,[{key:"fetchMovieByQuery",value:function(){var e=this;return t(r)(t(u).mark((function n(){var o,r;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(s).concat(e.requestType,"/movie?api_key=").concat(l,"&query=").concat(e.searchQuery,"&page=").concat(e.page));case 2:return o=t.sent,t.next=5,o.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),n)})))()}},{key:"getPopularMovies",value:function(){var e=this;return t(r)(t(u).mark((function n(){var o,r,a;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(s).concat(e.requestType,"/movie/day?api_key=").concat(l,"&page=").concat(e.page));case 3:return o=t.sent,t.next=6,o.json();case 6:return r=t.sent,a=r,t.abrupt("return",a);case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),n,null,[[0,11]])})))()}},{key:"fetchMovieGenres",value:function(){return t(r)(t(u).mark((function e(){var n,o,r;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="".concat(s,"genre/movie/list?api_key=").concat(l),t.next=4,fetch(n);case 4:if((o=t.sent).ok){t.next=7;break}throw new Error("error");case 7:return t.next=9,o.json();case 9:return r=t.sent,t.abrupt("return",r);case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:case"end":return t.stop()}}),e,null,[[0,13]])})))()}},{key:"getMoviesDetails",value:function(e){var n=this;return t(r)(t(u).mark((function o(){var r,a;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(s,"movie/").concat(e,"?api_key=").concat(l,"&language=").concat(n.lang));case 3:if((r=t.sent).ok){t.next=6;break}throw new Error("error");case 6:return t.next=8,r.json();case 8:return a=t.sent,t.abrupt("return",a);case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),o,null,[[0,12]])})))()}},{key:"getMovieTrailer",value:function(e){return t(r)(t(u).mark((function n(){var o,r,a;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o="".concat(s,"movie/").concat(e,"/videos?api_key=").concat(l),t.prev=1,t.next=4,fetch(o);case 4:if((r=t.sent).ok){t.next=7;break}throw new Error("Error");case 7:return t.next=9,r.json();case 9:return a=t.sent,t.abrupt("return",a);case 13:t.prev=13,t.t0=t.catch(1),console.error("Error:",t.t0);case 16:case"end":return t.stop()}}),n,null,[[1,13]])})))()}},{key:"query",get:function(){return this.searchQuery},set:function(t){this.searchQuery=t}},{key:"pages",get:function(){return this.page},set:function(t){this.page=t}},{key:"type",get:function(){return this.requestType},set:function(t){this.requestType=t}}]),e}())})),a.register("4Nugj",(function(t,n){e(t.exports,"refs",(function(){return o}));var o={homeHeaderForm:document.querySelector(".header__form"),cardContainer:document.querySelector(".cards-container"),buttonBack:document.querySelector(".button-back"),buttonForward:document.querySelector(".button-forward"),buttonsPagesList:document.querySelector(".buttons-pages"),buttonQueue:document.querySelector(".header__btn-queue"),buttonWatched:document.querySelector(".header__btn-watched"),buttonToTop:document.querySelector(".button-top")}})),a.register("1WxKN",(function(t,n){function o(t){return t.map((function(t){var e=t.title,n=t.poster_path,o=t.release_date,r=t.genre_ids,a=t.id,i=r.map((function(t){return localStorage.getItem(t)}));i.length>2&&i.splice(2,i.length-2,"Other");var c=i.join(", "),u=o.slice(0,4);return'\n          <li class="films-list__item">\n                <a class="films-list__link" id='.concat(a,'>\n                  <img class="films-list-item__poster" src="https://image.tmdb.org/t/p/w500').concat(n,'" alt="').concat(e,'" loading="lazy"  />\n                  <div class="films-list-item__info">\n                    <h2 class="films-list-item__tittle">').concat(e,'</h2>\n                    <p class="films-list-item__ganres">\n                      <span class="films-list-item__year">').concat(c," | ").concat(u,"</span>\n                    </p>\n                  </div>\n                </a></li>")})).join("")}e(t.exports,"default",(function(){return o}))})),a.register("1DdQm",(function(t,n){e(t.exports,"lastPage",(function(){return r})),e(t.exports,"buildingPagination",(function(){return i}));var o=a("4Nugj"),r=null;function i(t){var e=t.page,n=t.total_pages,a=window.screen.width;if(r=n,a<768){if(n<5){for(var i=[],c=1;c<=n;c+=1)i.push('<li><button class="button-pagination button-page" type="button" id="page-'.concat(c,'">').concat(c,"</button></li>"));return o.refs.buttonsPagesList.innerHTML="".concat(i.join("")),void document.querySelector("#page-".concat(e)).classList.add("current-page")}if(e<4)return o.refs.buttonsPagesList.innerHTML='<li><button class="button-pagination button-page" type="button" id="page-1">1</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-2">2</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-3">3</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-4">4</button></li>\n    <li><button class="button-pagination button-page" type="button id="page-5">5</button></li>\n',void document.querySelector("#page-".concat(e)).classList.add("current-page");if(e+2>=n)return o.refs.buttonsPagesList.innerHTML='\n    <li><button class="button-pagination button-page" type="button" id="page-'.concat(n-4,'">').concat(n-4,'</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-').concat(n-3,'">').concat(n-3,'</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-').concat(n-2,'">').concat(n-2,'</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-').concat(n-1,'">').concat(n-1,'</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-').concat(n,'">').concat(n,"</button></li>\n    "),void document.querySelector("#page-".concat(e)).classList.add("current-page");if(e>=4)return void(o.refs.buttonsPagesList.innerHTML='<li><button class="button-pagination button-page" type="button">'.concat(e-2,'</button></li>\n    <li><button class="button-pagination button-page" type="button">').concat(e-1,'</button></li>\n    <li><button class="button-pagination button-page current-page" type="button">').concat(e,'</button></li>\n    <li><button class="button-pagination button-page" type="button">').concat(e+1,'</button></li>\n    <li><button class="button-pagination button-page" type="button">').concat(e+2,"</button></li>\n    "))}if(n<10){for(var u=[],s=1;s<=n;s+=1)u.push('<li><button class="button-pagination button-page" type="button" id="page-'.concat(s,'">').concat(s,"</button></li>"));return o.refs.buttonsPagesList.innerHTML="".concat(u.join("")),void document.querySelector("#page-".concat(e)).classList.add("current-page")}return e<5?(o.refs.buttonsPagesList.innerHTML='<li><button class="button-pagination button-page" type="button" id="page-1">1</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-2">2</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-3">3</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-4">4</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-5">5</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-6">6</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-7">7</button></li>\n    <li><button class="button-pagination button-page" type="button" disabled>...</button></li>\n    <li><button class="button-pagination button-page" type="button">'.concat(n,"</button></li>\n"),void document.querySelector("#page-".concat(e)).classList.add("current-page")):e+5>=n?(o.refs.buttonsPagesList.innerHTML='<li><button class="button-pagination button-page" type="button">1</button></li>\n    <li><button class="button-pagination button-page" type="button" disabled>...</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-'.concat(n-6,'">').concat(n-6,'</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-').concat(n-5,'">').concat(n-5,'</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-').concat(n-4,'">').concat(n-4,'</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-').concat(n-3,'">').concat(n-3,'</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-').concat(n-2,'">').concat(n-2,'</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-').concat(n-1,'">').concat(n-1,'</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-').concat(n,'">').concat(n,"</button></li>\n    "),void document.querySelector("#page-".concat(e)).classList.add("current-page")):void(e>=5&&(o.refs.buttonsPagesList.innerHTML='\n        <li><button class="button-pagination button-page" type="button">1</button></li>\n        <li><button class="button-pagination button-page" type="button" disabled>...</button></li>\n        <li><button class="button-pagination button-page" type="button">'.concat(e-2,'</button></li>\n        <li><button class="button-pagination button-page" type="button">').concat(e-1,'</button></li>\n        <li><button class="button-pagination button-page current-page" type="button">').concat(e,'</button></li>\n        <li><button class="button-pagination button-page" type="button">').concat(e+1,'</button></li>\n        <li><button class="button-pagination button-page" type="button">').concat(e+2,'</button></li>\n        <li><button class="button-pagination button-page" type="button" disabled>...</button></li>\n        <li><button class="button-pagination button-page" type="button">').concat(n,"</button></li>\n    ")))}})),a.register("2Nth1",(function(t,e){var n,o,r,i,c,u,s,l=a("jUnVF"),p=a("2JJTb"),d=document.body;function b(){n.remove(),o.remove(),d.classList.remove("disabled-scroll")}function g(t){"Add to Watched"===t.currentTarget.textContent?(i.setAttribute("disabled",""),t.currentTarget.textContent="Remove from Watched",p.libraryLogic.addToLocalStorage(c,"watched")):"Remove from Watched"===t.currentTarget.textContent&&(t.currentTarget.textContent="Add to Watched",i.removeAttribute("disabled",""),p.libraryLogic.removeFromLocalstorage(c,"watched"))}function f(t){"Add to Queue"===t.currentTarget.textContent?(r.setAttribute("disabled",""),t.currentTarget.textContent="Remove from Queue",p.libraryLogic.addToLocalStorage(c,"queue")):"Remove from Queue"===t.currentTarget.textContent&&(t.currentTarget.textContent="Add to Queue",r.removeAttribute("disabled",""),p.libraryLogic.removeFromLocalstorage(c,"queue"))}document.querySelector(".cards-container").addEventListener("click",(function(t){if(t.target.closest(".films-list__link")){var e=t.target.closest(".films-list__link").getAttribute("id");l.apiService.getMoviesDetails(e).then((function(t){(c=t,function(t){(n=document.createElement("div")).classList.add("modal"),d.classList.add("disabled-scroll");var e='\n      <div class="modal_content">\n      <div class="close">\n      <svg width="16" height="16" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">\n  <path d="M8 8L22 22" stroke="black" stroke-width="2"/>\n  <path d="M8 22L22 8" stroke="black" stroke-width="2"/>\n  </svg>\n    </div>\n        <img src="https://image.tmdb.org/t/p/w500/'.concat(t.poster_path,'" class="modal_img">\n        <div class="tablet_modal">\n        <h2 class="main_text_modal">').concat(t.title,'</h2>\n        <div class="modal_items_container">\n          <ul class="modal_list modal-text">\n            <li>Vote / Votes</li>\n            <li>Popularity</li>\n            <li>Original Title</li>\n            <li>Genre</li>\n          </ul>\n          <ul class="modal_list modal_list--black modal-text">\n            <li>\n              <span class="modal-item__info vote_span">').concat(t.vote_average.toFixed(1),'</span>\n              <span class="delimiter"> / </span>\n              <span class="modal-item__info vote_count_span">').concat(t.vote_count,"</span>\n            </li>\n            <li>").concat(t.popularity.toFixed(1),"</li>\n            <li>").concat(t.title,"</li>\n            <li>").concat(t.genres[0].name,'</li>\n          </ul>\n        </div>\n        <p class="about_modal_text modal-text">About</p>\n        <p class="overview_modal modal-text">').concat(t.overview,'</p>\n        <div class="buttons-modal">\n          <button class="button-modal button-watched" type="button">Add to Watched</button>\n          <button class="button-modal button-queue" type="button">Add to Queue</button>\n        </div>\n      </div>\n      </div>\n    ');n.innerHTML=e,document.body.appendChild(n),n.querySelector(".close").addEventListener("click",(function(){b(),o.remove()}));var r=function(t){"Escape"===t.key&&(b(),o.remove())};document.addEventListener("keydown",r)}(t),function(){(o=document.createElement("div")).classList.add("modal-backdrop"),document.body.appendChild(o);var t=function(){b()};o.addEventListener("click",t);var e=function(n){"Escape"===n.key&&(t(),document.removeEventListener("keydown",e))};document.addEventListener("keydown",e)}(),r=document.querySelector(".button-watched"),i=document.querySelector(".button-queue"),u=JSON.parse(localStorage.getItem("watched")),s=JSON.parse(localStorage.getItem("queue")),u)&&(u.find((function(t){return t.id===c.id}))&&(r.textContent="Remove from Watched",i.setAttribute("disabled","")));s&&(s.find((function(t){return t.id===c.id}))&&(i.textContent="Remove from Queue",r.setAttribute("disabled","")));r.addEventListener("click",g),i.addEventListener("click",f)}))}}))})),a.register("hUsXy",(function(t,e){var n=a("kYEL6"),o=a("6NoYd"),r=document.querySelector(".footer-submit");r.addEventListener("click",(function(){var t=document.body;t.classList.add("disabled-scroll");var e=function(){var t=document.createElement("div");return t.setAttribute("class","modal-backdrop"),t.innerHTML='\n<div class="backdrop footer_backdrop">\n  <div class="footer_modal modal">\n    <div class="footer_modal-header">\n      <img\n        src="https://www.edu.goit.global/_next/image?url=https%3A%2F%2Fs3.eu-north-1.amazonaws.com%2Flms.goit.files%2F0618d8e0-2652-3e30-ae44-fd6ff17d55a1.png&w=2048&q=75"\n        alt=" GoIT logo"\n        height="15"\n        width="auto"\n        class="footer-modal_img"\n      />\n      <h2 class="footer-modal_title">Student team</h2>\n    </div>\n    <div class="gallery footer_gallery">\n       <button class="gallery-arrow left fa-solid fa-solid fa-arrow-left button-queue" ></button>\n       <div class="box box-list"></div>\n       <button class="gallery-arrow right fa-solid fa-arrow-right button-queue"></button>\n    </div>\n    <button type="button" class="footer-modal_button button-modal button-watched" data-action="close-footer-modal">\n      Close\n    </button>\n  </div>\n</div>\n',document.body.append(t),t}();(0,n.sliderComponate)(o.state,"");var r=document.querySelector(".footer-modal_button"),a=function(){e.remove(),t.classList.remove("disabled-scroll")};r.addEventListener("click",(function(){return a()})),document.addEventListener("keydown",(function(t){"Escape"===t.key&&a()})),e.addEventListener("click",(function(t){t.target===e&&a()}))}))})),a.register("kYEL6",(function(t,n){e(t.exports,"sliderComponate",(function(){return r}));var o=function(t,e){var n=document.createElement("div");n.classList.add("team");var o=document.createElement("div");o.classList.add("team-container");var r=document.createElement("img");r.setAttribute("src",t.array[t.idEl1].preview),r.setAttribute("class","team-modal_img");var a=document.createElement("a");a.setAttribute("href",t.array[t.idEl1].link),a.innerText=t.array[t.idEl1].name,a.setAttribute("class","team-title main_text_modal");var i=document.createElement("p");i.innerText=t.array[t.idEl1].title,i.classList.add("team-description"),o.append(r,a,i);var c=document.createElement("div");c.classList.add("team-container");var u=document.createElement("img");u.setAttribute("src",t.array[t.idEl2].preview),u.setAttribute("class","team-modal_img");var s=document.createElement("a");s.setAttribute("href",t.array[t.idEl2].link),s.innerText=t.array[t.idEl2].name,s.setAttribute("class","team-title main_text_modal");var l=document.createElement("p");l.innerText=t.array[t.idEl2].title,l.classList.add("team-description"),c.append(u,s,l),n.append(o,c),e.replaceChildren(),e.append(n)},r=function(t){var e,n,r={triangleLeft:document.querySelector(".left"),triangleRight:document.querySelector(".right"),boxForImages:document.querySelector(".box-list")},a=(e=t,n=r.boxForImages,{start:function(){o(e,n)},moveLeft:function(){e.idEl1=0===e.idEl1?e.array.length-1:e.idEl1-1,e.idEl2=0===e.idEl2?e.array.length-1:e.idEl2-1,o(e,n)},moveRight:function(){e.idEl1=e.idEl1===e.array.length-1?0:e.idEl1+1,e.idEl2=e.idEl2===e.array.length-1?0:e.idEl2+1,o(e,n)}});r.triangleLeft.addEventListener("click",a.moveLeft),r.triangleRight.addEventListener("click",a.moveRight),a.start()}})),a.register("6NoYd",(function(t,n){e(t.exports,"state",(function(){return o}));var o={array:[{preview:"https://i.ibb.co/QP3xN6t/photo-5312334487830513914-y.jpg",name:"Valerii Streltsov",title:"Team Lead",link:"https://www.linkedin.com/in/valerii-streltsov-aa72a1261/"},{preview:"https://i.ibb.co/c8g9fCR/photo-1915316730254698453-c.jpg",name:"Oleksii Hrabovskyi",title:"Scrum master",link:"https://www.linkedin.com/in/aleks-hrabovskyi-9a0427267/"},{preview:"https://i.ibb.co/XxjWYJP/photo-4490760334196451242-c.jpg",name:"Inna Starzhynska",title:"Developer",link:"https://www.linkedin.com/in/inna-starzhynska-1b439b271/"},{preview:"https://i.ibb.co/GV3msMx/photo-5352969731763715271-c.jpg",name:"Evgenia Berezhna",title:"Developer",link:"https://www.linkedin.com/in/evgenia-berezhna-212867266/"},{preview:"https://i.ibb.co/WsYnqBH/photo-5307493917954001293-y.jpg",name:"Kateryna Humeniuk ",title:"Developer",link:"https://www.linkedin.com/in/kateryna-humeniuk/"},{preview:"https://i.ibb.co/7WV189V/photo-5310057790091413138-y.jpg",name:"Oleh Dashkevych",title:"Developer",link:"https://www.linkedin.com/in/oleh-dashkevych-639273237/"},{preview:"https://i.ibb.co/6HDRTvZ/photo-5312092659696912460-y.jpg",name:"Oleksandra Luki",title:"Developer",link:"https://www.linkedin.com/in/aleksandra-luki-5516a6270/"},{preview:"https://i.ibb.co/Z28T3Kq/DSC04230.jpg",name:"Andrey Savin",title:"Developer",link:"https://www.linkedin.com/in/andrey-savin-288487270/"},{preview:"https://i.ibb.co/2WKwtpR/photo-5310265224126907781-y.jpg",name:"Maria Zherebtsova",title:"Developer",link:"https://www.linkedin.com/in/maria-zherebtsova-299577270/"},{preview:"https://i.ibb.co/SrznqTL/photo-2023-04-01-22-01-57.jpg",name:"Iryna Yermolova",title:"Developer",link:"https://www.linkedin.com/in/iryna-yermolova-b52376270/"},{preview:"https://i.ibb.co/khHhmSP/IMG-6900-1.jpg",name:"Hanna Lytvynenko",title:"Developer",link:"https://www.linkedin.com/in/hanna-lytvynenko/"}],idEl1:0,idEl2:1}})),a.register("pev4y",(function(t,e){var n=a("4Nugj"),o=0;function r(){o=window.pageYOffset;var t=document.documentElement.clientHeight;o>t?n.refs.buttonToTop.classList.add("visually-button"):n.refs.buttonToTop.classList.remove("visually-button")}window.onload=function(){n.refs.buttonToTop.addEventListener("click",(function(){window.scrollTo({top:0,left:0,behavior:"smooth"})})),window.addEventListener("scroll",r)}}))}();
//# sourceMappingURL=index.f7d061d5.js.map
