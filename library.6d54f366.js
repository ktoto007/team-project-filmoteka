!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}}));var a=o("2JJTb"),i=o("4Nugj"),u=o("1WxKN");function l(){var e=a.libraryLogic.getFromStorage("watched");i.refs.buttonWatched.classList.add("this-library"),i.refs.buttonQueue.classList.remove("this-library"),e.map((function(e){var t=e.genres.map((function(e){return Object.values(e)[0]}));e.genre_ids=t})),i.refs.cardContainer.innerHTML=(0,u.default)(e.slice(0,20))}document.addEventListener("DOMContentLoaded",l),i.refs.buttonWatched.addEventListener("click",l),i.refs.buttonQueue.addEventListener("click",(function(){var e=a.libraryLogic.getFromStorage("queue");i.refs.buttonQueue.classList.add("this-library"),i.refs.buttonWatched.classList.remove("this-library"),e.map((function(e){var t=e.genres.map((function(e){return Object.values(e)[0]}));e.genre_ids=t})),i.refs.cardContainer.innerHTML=(0,u.default)(e.slice(0,20))})),i.refs.homeHeaderForm.addEventListener("submit",searchForMoviesByWord),o("2Nth1");var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e){return c.default(e)||d.default(e)||g.default(e)||f.default()};var c=p(o("kMC0W")),d=p(o("7AJDX")),f=p(o("8CtQK")),g=p(o("auk6i"));function p(e){return e&&e.__esModule?e:{default:e}}u=o("1WxKN");o("kvC6y");var b,v,m=o("1DdQm");a=o("2JJTb"),i=o("4Nugj");b=a.libraryLogic.getFromStorage("watched").length,v={page:1,total_pages:Math.ceil(b/20)},0!==b&&(0,m.buildingPagination)(v),i.refs.buttonsPagesList.addEventListener("click",(function(t){if("button"!==t.target.type)return;var r=document.querySelector(".this-library"),n=Number(t.target.textContent);console.log(r.textContent.trim().toLocaleLowerCase());var o=a.libraryLogic.getFromStorage("".concat(r.textContent.trim().toLocaleLowerCase())),l=o.length,c={page:n,total_pages:Math.ceil(l/20)};if(1===c.page){var d=e(s)(o).splice(0,20);(0,m.buildingPagination)(c),d.map((function(e){var t=e.genres.map((function(e){return Object.values(e)[0]}));e.genre_ids=t})),i.refs.cardContainer.innerHTML=(0,u.default)(d),window.scrollTo({top:0,left:0,behavior:"smooth"})}else{var f=e(s)(o).splice(10*c.page+10*(c.page-2),20);(0,m.buildingPagination)(c),f.map((function(e){var t=e.genres.map((function(e){return Object.values(e)[0]}));e.genre_ids=t})),i.refs.cardContainer.innerHTML=(0,u.default)(f),window.scrollTo({top:0,left:0,behavior:"smooth"})}})),i.refs.buttonBack.addEventListener("click",(function(){var t=document.querySelector(".this-library"),r=Number(document.querySelector(".current-page").textContent)-1,n=a.libraryLogic.getFromStorage("".concat(t.textContent.trim().toLocaleLowerCase())),o=n.length,l={page:r,total_pages:Math.ceil(o/20)};if(1!==r){var c=e(s)(n).splice(10*l.page+10*(l.page-2),20);return(0,m.buildingPagination)(l),c.map((function(e){var t=e.genres.map((function(e){return Object.values(e)[0]}));e.genre_ids=t})),i.refs.cardContainer.innerHTML=(0,u.default)(c),void window.scrollTo({top:0,left:0,behavior:"smooth"})}})),i.refs.buttonForward.addEventListener("click",(function(){var t=document.querySelector(".this-library"),r=Number(document.querySelector(".current-page").textContent)+1,n=a.libraryLogic.getFromStorage("".concat(t.textContent.trim().toLocaleLowerCase())),o=n.length,l={page:r,total_pages:Math.ceil(o/20)};if(r>l.total_pages)return;var c=e(s)(n).splice(10*l.page+10*(l.page-2),20);return(0,m.buildingPagination)(l),c.map((function(e){var t=e.genres.map((function(e){return Object.values(e)[0]}));e.genre_ids=t})),i.refs.cardContainer.innerHTML=(0,u.default)(c),void window.scrollTo({top:0,left:0,behavior:"smooth"})})),o("hUsXy")}();
//# sourceMappingURL=library.6d54f366.js.map