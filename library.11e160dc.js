!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var i=n("2JJTb"),a=n("4Nugj"),o=n("1WxKN");function u(){var e=i.libraryLogic.getFromStorage("watched");a.refs.buttonWatched.classList.add("this-library"),a.refs.buttonQueue.classList.remove("this-library"),e.map((function(e){var t=e.genres.map((function(e){return Object.values(e)[0]}));e.genre_ids=t})),a.refs.cardContainer.innerHTML=(0,o.default)(e.slice(0,20))}document.addEventListener("DOMContentLoaded",u),a.refs.buttonWatched.addEventListener("click",u),a.refs.buttonQueue.addEventListener("click",(function(){var e=i.libraryLogic.getFromStorage("queue");a.refs.buttonQueue.classList.add("this-library"),a.refs.buttonWatched.classList.remove("this-library"),e.map((function(e){var t=e.genres.map((function(e){return Object.values(e)[0]}));e.genre_ids=t})),a.refs.cardContainer.innerHTML=(0,o.default)(e.slice(0,20))})),n("2Nth1"),n("1WxKN"),n("kvC6y");var s=n("1DdQm");i=n("2JJTb");n("4Nugj");document.querySelector(".button-back"),document.querySelector(".button-forward"),document.querySelector(".buttons-pages");!function(){var e=i.libraryLogic.getFromStorage("watched"),t=e.length,r={page:1,total_pages:Math.ceil(t/20)};if(0!==t)if(1===r.total_pages)(0,s.buildingPagination)(r);else{e.slice(0,20);(0,s.buildingPagination)(r)}}()}();
//# sourceMappingURL=library.11e160dc.js.map