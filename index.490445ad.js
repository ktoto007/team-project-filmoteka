!function(){function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=r.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){n[e]=r},r.parcelRequired7c6=i),i("2JJTb");var a=i("bpxeT"),o=i("2TvXO"),c=i("jUnVF"),s=i("4Nugj"),u=i("1WxKN"),l=i("kvC6y"),d=i("1DdQm");function f(){return(f=e(a)(e(o).mark((function r(){var t;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.loader.show(),e.next=3,c.apiService.getPopularMovies();case 3:t=e.sent,l.loader.hide(),c.apiService.requestType="trending";try{localStorage.setItem("currentPage",JSON.stringify(t))}catch(e){console.log(e.message)}return(0,d.buildingPagination)(t),e.abrupt("return",s.refs.cardContainer.innerHTML=(0,u.default)(t.results));case 9:case"end":return e.stop()}}),r)})))).apply(this,arguments)}function g(){return(g=e(a)(e(o).mark((function r(t){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c.apiService.query=s.refs.homeHeaderForm.query.value,c.apiService.requestType="search",console.log(c.apiService.requestType),l.loader.show(),e.next=7,c.apiService.fetchMovieByQuery();case 7:return n=e.sent,l.loader.hide(),(0,d.buildingPagination)(n),e.abrupt("return",s.refs.cardContainer.innerHTML=(0,u.default)(n.results));case 11:case"end":return e.stop()}}),r)})))).apply(this,arguments)}document.addEventListener("DOMContentLoaded",(function(){return f.apply(this,arguments)})),window.addEventListener("resize",(function(e){try{var r=JSON.parse(localStorage.getItem("currentPage"));c.apiService.page=r.page,(0,d.buildingPagination)(r)}catch(e){console.log(e.message)}})),document.addEventListener("submit",(function(e){return g.apply(this,arguments)}));c=i("jUnVF"),s=i("4Nugj"),u=i("1WxKN"),l=i("kvC6y"),d=i("1DdQm");s.refs.buttonsPagesList.addEventListener("click",(function(e){if("button"!==e.target.type)return;if("trending"===c.apiService.requestType){var r=e.target.textContent;return c.apiService.page=Number(r),l.loader.show(),c.apiService.getPopularMovies().then((function(e){(0,d.buildingPagination)(e),s.refs.cardContainer.innerHTML=(0,u.default)(e.results);try{localStorage.setItem("currentPage",JSON.stringify(e))}catch(e){console.log(e.message)}})).catch((function(e){return e.message})).finally((function(){return l.loader.hide()})),void window.scrollTo({top:0,left:0,behavior:"smooth"})}if("search"===c.apiService.requestType){var t=e.target.textContent;c.apiService.page=Number(t),l.loader.show(),c.apiService.fetchMovieByQuery().then((function(e){(0,d.buildingPagination)(e),s.refs.cardContainer.innerHTML=(0,u.default)(e.results);try{localStorage.setItem("currentPage",JSON.stringify(e))}catch(e){console.log(e.message)}})).catch((function(e){return e.message})).finally((function(){return l.loader.hide()})),window.scrollTo({top:0,left:0,behavior:"smooth"})}})),s.refs.buttonBack.addEventListener("click",(function(){if("trending"===c.apiService.requestType)return void(1!==c.apiService.page&&(c.apiService.page-=1,l.loader.show(),c.apiService.getPopularMovies().then((function(e){(0,d.buildingPagination)(e),s.refs.cardContainer.innerHTML=(0,u.default)(e.results);try{localStorage.setItem("currentPage",JSON.stringify(e))}catch(e){console.log(e.message)}})).catch((function(e){return e.message})).finally((function(){return l.loader.hide()})),window.scrollTo({top:0,left:0,behavior:"smooth"})));"search"===c.apiService.requestType&&1!==c.apiService.page&&(c.apiService.page-=1,l.loader.show(),c.apiService.fetchMovieByQuery().then((function(e){(0,d.buildingPagination)(e),s.refs.cardContainer.innerHTML=(0,u.default)(e.results);try{localStorage.setItem("currentPage",JSON.stringify(e))}catch(e){console.log(e.message)}})).catch((function(e){return e.message})).finally((function(){return l.loader.hide()})),window.scrollTo({top:0,left:0,behavior:"smooth"}))})),s.refs.buttonForward.addEventListener("click",(function(){"trending"===c.apiService.requestType&&c.apiService.page!==d.lastPage&&(c.apiService.page+=1,l.loader.show(),c.apiService.getPopularMovies().then((function(e){(0,d.buildingPagination)(e),s.refs.cardContainer.innerHTML=(0,u.default)(e.results);try{localStorage.setItem("currentPage",JSON.stringify(e))}catch(e){console.log(e.message)}})).catch((function(e){return e.message})).finally((function(){return l.loader.hide()})),window.scrollTo({top:0,left:0,behavior:"smooth"}));"search"===c.apiService.requestType&&c.apiService.page!==d.lastPage&&(c.apiService.page+=1,l.loader.show(),c.apiService.fetchMovieByQuery().then((function(e){(0,d.buildingPagination)(e),s.refs.cardContainer.innerHTML=(0,u.default)(e.results);try{localStorage.setItem("currentPage",JSON.stringify(e))}catch(e){console.log(e.message)}l.loader.hide()})).catch((function(e){return e.message})).finally((function(){return l.loader.hide()})),window.scrollTo({top:0,left:0,behavior:"smooth"}))})),i("2Nth1"),i("hUsXy")}();
//# sourceMappingURL=index.490445ad.js.map