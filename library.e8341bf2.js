var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var i=n("25dvs"),o=n("krGWQ"),a=n("cGFyt");function s(){const e=i.libraryLogic.getFromStorage("watched");o.refs.buttonWatched.classList.add("this-library"),o.refs.buttonQueue.classList.remove("this-library"),e.map((e=>{const t=e.genres.map((e=>Object.values(e)[0]));e.genre_ids=t})),o.refs.cardContainer.innerHTML=(0,a.default)(e.slice(0,20))}document.addEventListener("DOMContentLoaded",s),o.refs.buttonWatched.addEventListener("click",s),o.refs.buttonQueue.addEventListener("click",(function(){const e=i.libraryLogic.getFromStorage("queue");o.refs.buttonQueue.classList.add("this-library"),o.refs.buttonWatched.classList.remove("this-library"),e.map((e=>{const t=e.genres.map((e=>Object.values(e)[0]));e.genre_ids=t})),o.refs.cardContainer.innerHTML=(0,a.default)(e.slice(0,20))})),n("8cwzF"),n("cGFyt"),n("gjiCh");var c=n("aJ15F");i=n("25dvs");n("krGWQ");document.querySelector(".button-back"),document.querySelector(".button-forward"),document.querySelector(".buttons-pages");!function(){const e=i.libraryLogic.getFromStorage("watched"),t=e.length,r={page:1,total_pages:Math.ceil(t/20)};if(0!==t)if(1===r.total_pages)(0,c.buildingPagination)(r);else{e.slice(0,20);(0,c.buildingPagination)(r)}}();
//# sourceMappingURL=library.e8341bf2.js.map