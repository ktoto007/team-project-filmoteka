var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in t){var i=t[e];delete t[e];var a={id:e,exports:{}};return r[e]=a,i.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,r){t[e]=r},e.parcelRequired7c6=i);var a=i("25dvs"),o=i("krGWQ"),n=i("cGFyt"),c=(n=i("cGFyt"),i("aJ15F"));a=i("25dvs");function l(){const e=a.libraryLogic.getFromStorage("watched").length;a.libraryLogic.currentPage=1,a.libraryLogic.totalPages=Math.ceil(e/20),0!==e&&(0,c.buildingPagination)(a.libraryLogic.pages)}function s(){const e=a.libraryLogic.getFromStorage("queue").length;a.libraryLogic.currentPage=1,a.libraryLogic.totalPages=Math.ceil(e/20),0!==e&&(0,c.buildingPagination)(a.libraryLogic.pages)}function g(){const e=a.libraryLogic.getFromStorage("watched");o.refs.buttonWatched.classList.add("this-library"),o.refs.buttonQueue.classList.remove("this-library"),0!=e.length?(e.map((e=>{const r=e.genres.map((e=>Object.values(e)[0]));e.genre_ids=r})),o.refs.cardContainer.innerHTML=(0,n.default)(e.slice(0,20)),l()):o.refs.cardContainer.innerHTML="<li class='clear-storage-text'><p>Sorry, but you haven't added any movies to this category yet</p></li>"}(o=i("krGWQ")).refs.buttonsPagesList.addEventListener("click",(function(e){if("button"!==e.target.type)return;const r=document.querySelector(".this-library");a.libraryLogic.currentPage=Number(e.target.textContent);const t=a.libraryLogic.getFromStorage(`${r.textContent.trim().toLocaleLowerCase()}`),i=t.length;if(a.libraryLogic.totalPages=Math.ceil(i/20),1===a.libraryLogic.currentPage){const e=[...t].splice(0,20);(0,c.buildingPagination)(a.libraryLogic.pages),e.map((e=>{const r=e.genres.map((e=>Object.values(e)[0]));e.genre_ids=r})),o.refs.cardContainer.innerHTML=(0,n.default)(e),window.scrollTo({top:0,left:0,behavior:"smooth"})}else{const e=[...t].splice(10*a.libraryLogic.currentPage+10*(a.libraryLogic.currentPage-2),20);(0,c.buildingPagination)(a.libraryLogic.pages),e.map((e=>{const r=e.genres.map((e=>Object.values(e)[0]));e.genre_ids=r})),o.refs.cardContainer.innerHTML=(0,n.default)(e),window.scrollTo({top:0,left:0,behavior:"smooth"})}})),o.refs.buttonBack.addEventListener("click",(function(){if(1===a.libraryLogic.currentPage)return;const e=document.querySelector(".this-library");a.libraryLogic.currentPage-=1;const r=a.libraryLogic.getFromStorage(`${e.textContent.trim().toLocaleLowerCase()}`),t=r.length;a.libraryLogic.totalPages=Math.ceil(t/20);const i=r.slice(20*(a.libraryLogic.currentPage-1),20*a.libraryLogic.currentPage);(0,c.buildingPagination)(a.libraryLogic.pages),i.map((e=>{const r=e.genres.map((e=>Object.values(e)[0]));e.genre_ids=r})),o.refs.cardContainer.innerHTML=(0,n.default)(i),window.scrollTo({top:0,left:0,behavior:"smooth"})})),o.refs.buttonForward.addEventListener("click",(function(){if(a.libraryLogic.currentPage===a.libraryLogic.totalPages)return;const e=document.querySelector(".this-library");a.libraryLogic.currentPage+=1;const r=a.libraryLogic.getFromStorage(`${e.textContent.trim().toLocaleLowerCase()}`),t=r.length;a.libraryLogic.totalPages=Math.ceil(t/20);const i=r.slice(20*(a.libraryLogic.currentPage-1),20*a.libraryLogic.currentPage);(0,c.buildingPagination)(a.libraryLogic.pages),i.map((e=>{const r=e.genres.map((e=>Object.values(e)[0]));e.genre_ids=r})),o.refs.cardContainer.innerHTML=(0,n.default)(i),window.scrollTo({top:0,left:0,behavior:"smooth"})})),document.addEventListener("DOMContentLoaded",g),o.refs.buttonWatched.addEventListener("click",g),o.refs.buttonQueue.addEventListener("click",(function(){const e=a.libraryLogic.getFromStorage("queue");if(o.refs.buttonQueue.classList.add("this-library"),o.refs.buttonWatched.classList.remove("this-library"),0==e.length)return void(o.refs.cardContainer.innerHTML="<li class='clear-storage-text'><p>Sorry, but you haven't added any movies to this category yet</p></li>");e.map((e=>{const r=e.genres.map((e=>Object.values(e)[0]));e.genre_ids=r})),o.refs.cardContainer.innerHTML=(0,n.default)(e.slice(0,20)),s()})),i("8cwzF"),i("jXTiU"),i("g1tlT");
//# sourceMappingURL=library.76afe325.js.map