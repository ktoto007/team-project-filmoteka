!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return r[e]=i,n.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){t[e]=r},e.parcelRequired7c6=n);var i=n("2JJTb"),a=n("4Nugj"),o=n("1WxKN");function s(){var e=i.libraryLogic.getFromStorage("watched");a.refs.buttonWatched.classList.add("this-library"),a.refs.buttonQueue.classList.remove("this-library"),e.map((function(e){var r=e.genres.map((function(e){return Object.values(e)[0]}));e.genre_ids=r})),a.refs.cardContainer.innerHTML=(0,o.default)(e)}document.addEventListener("DOMContentLoaded",s),a.refs.buttonWatched.addEventListener("click",s),a.refs.buttonQueue.addEventListener("click",(function(){var e=i.libraryLogic.getFromStorage("queue");a.refs.buttonQueue.classList.add("this-library"),a.refs.buttonWatched.classList.remove("this-library"),e.map((function(e){var r=e.genres.map((function(e){return Object.values(e)[0]}));e.genre_ids=r})),a.refs.cardContainer.innerHTML=(0,o.default)(e)})),n("2Nth1")}();
//# sourceMappingURL=library.ef7934eb.js.map
