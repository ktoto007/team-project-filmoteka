function t(t,e,n,o){Object.defineProperty(t,e,{get:n,set:o,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=e.parcelRequired7c6;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},e.parcelRequired7c6=a),a.register("25dvs",(function(e,n){t(e.exports,"libraryLogic",(function(){return i}));var o=a("9CftO");!async function(){(await o.apiService.fetchMovieGenres()).genres.map((t=>{const e=Object.values(t);localStorage.setItem(e[0],e[1])}))}();const i=new class{addToLocalStorage(t,e){let n;"watched"===e?n=JSON.parse(localStorage.getItem("watched"))||[]:"queue"===e&&(n=JSON.parse(localStorage.getItem("queue"))||[]),n.find((e=>e.id===t.id))||(n.push(t),localStorage.setItem(e,JSON.stringify(n)))}removeFromLocalstorage(t,e){if("queue"==e){const e=JSON.parse(localStorage.getItem("queue"));e.find((e=>e.id===t.id))&&localStorage.setItem("queue",JSON.stringify(e.filter((e=>e.id!==t.id))))}else{const e=JSON.parse(localStorage.getItem("watched"));e.find((e=>e.id===t.id))&&localStorage.setItem("watched",JSON.stringify(e.filter((e=>e.id!==t.id))))}}getFromStorage(t){try{const e=localStorage.getItem(t);return null===e?[]:JSON.parse(e)}catch(t){return console.log("Error"),[]}}constructor(){}}})),a.register("9CftO",(function(e,n){t(e.exports,"apiService",(function(){return o}));const o=new class{async fetchMovieByQuery(){const t=await fetch(`https://api.themoviedb.org/3/${this.requestType}/movie?api_key=aa05d9ef1feff0e96ac321d8773a5c67&query=${this.searchQuery}&page=${this.page}`);return await t.json()}async getPopularMovies(){try{const t=await fetch(`https://api.themoviedb.org/3/${this.requestType}/movie/day?api_key=aa05d9ef1feff0e96ac321d8773a5c67&page=${this.page}`),e=await t.json();return e}catch(t){console.log(t)}}async fetchMovieGenres(){try{const t="https://api.themoviedb.org/3/genre/movie/list?api_key=aa05d9ef1feff0e96ac321d8773a5c67",e=await fetch(t);if(!e.ok)throw new Error("error");return await e.json()}catch(t){console.log(t)}}async getMoviesDetails(t){try{const e=await fetch(`https://api.themoviedb.org/3/movie/${t}?api_key=aa05d9ef1feff0e96ac321d8773a5c67&language=${this.lang}`);if(!e.ok)throw new Error("error");return await e.json()}catch(t){console.log(t)}}async getMovieTrailer(t){const e=`https://api.themoviedb.org/3/movie/${t}/videos?api_key=aa05d9ef1feff0e96ac321d8773a5c67`;try{const t=await fetch(e);if(!t.ok)throw new Error("Error");return await t.json()}catch(t){console.error("Error:",t)}}get query(){return this.searchQuery}set query(t){this.searchQuery=t}get pages(){return this.page}set pages(t){this.page=t}get type(){return this.requestType}set type(t){this.requestType=t}constructor(){this.searchQuery="",this.page=1,this.requestType="trending"}}})),a.register("cGFyt",(function(e,n){function o(t){return t.map((({title:t,poster_path:e,release_date:n,genre_ids:o,id:a})=>{const i=o.map((t=>localStorage.getItem(t)));i.length>2&&i.splice(2,i.length-2,"Other");return`\n          <li class="films-list__item">\n                <a class="films-list__link" id=${a}>\n                  <img class="films-list-item__poster" src="https://image.tmdb.org/t/p/w500${e}" alt="${t}" loading="lazy"  />\n                  <div class="films-list-item__info">\n                    <h2 class="films-list-item__tittle">${t}</h2>\n                    <p class="films-list-item__ganres">\n                      <span class="films-list-item__year">${i.join(", ")} | ${n.slice(0,4)}</span>\n                    </p>\n                  </div>\n                </a></li>`})).join("")}t(e.exports,"default",(function(){return o}))})),a.register("gjiCh",(function(e,n){t(e.exports,"loader",(function(){return o}));const o=new class{show(){document.body.appendChild(this.loaderElement)}hide(){this.loaderElement.remove()}constructor(){this.loaderElement=document.createElement("div"),this.loaderElement.className="loader"}}})),a.register("aJ15F",(function(e,n){t(e.exports,"lastPage",(function(){return u})),t(e.exports,"buildingPagination",(function(){return s}));var o=a("krGWQ");let u=null;function s({page:t,total_pages:e}){const n=window.screen.width;if(u=e,n<768){if(e<5){const n=[];for(i=1;i<=e;i+=1)n.push(`<li><button class="button-pagination button-page" type="button" id="page-${i}">${i}</button></li>`);o.refs.buttonsPagesList.innerHTML=`${n.join("")}`;return void document.querySelector(`#page-${t}`).classList.add("current-page")}if(t<4){o.refs.buttonsPagesList.innerHTML='<li><button class="button-pagination button-page" type="button" id="page-1">1</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-2">2</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-3">3</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-4">4</button></li>\n    <li><button class="button-pagination button-page" type="button id="page-5">5</button></li>\n';return void document.querySelector(`#page-${t}`).classList.add("current-page")}if(t+2>=e){o.refs.buttonsPagesList.innerHTML=`\n    <li><button class="button-pagination button-page" type="button" id="page-${e-4}">${e-4}</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-${e-3}">${e-3}</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-${e-2}">${e-2}</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-${e-1}">${e-1}</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-${e}">${e}</button></li>\n    `;return void document.querySelector(`#page-${t}`).classList.add("current-page")}if(t>=4)return void(o.refs.buttonsPagesList.innerHTML=`<li><button class="button-pagination button-page" type="button">${t-2}</button></li>\n    <li><button class="button-pagination button-page" type="button">${t-1}</button></li>\n    <li><button class="button-pagination button-page current-page" type="button">${t}</button></li>\n    <li><button class="button-pagination button-page" type="button">${t+1}</button></li>\n    <li><button class="button-pagination button-page" type="button">${t+2}</button></li>\n    `)}if(e<10){const n=[];for(i=1;i<=e;i+=1)n.push(`<li><button class="button-pagination button-page" type="button" id="page-${i}">${i}</button></li>`);o.refs.buttonsPagesList.innerHTML=`${n.join("")}`;document.querySelector(`#page-${t}`).classList.add("current-page")}else if(t<5){o.refs.buttonsPagesList.innerHTML=`<li><button class="button-pagination button-page" type="button" id="page-1">1</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-2">2</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-3">3</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-4">4</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-5">5</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-6">6</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-7">7</button></li>\n    <li><button class="button-pagination button-page" type="button" disabled>...</button></li>\n    <li><button class="button-pagination button-page" type="button">${e}</button></li>\n`;document.querySelector(`#page-${t}`).classList.add("current-page")}else if(t+5>=e){o.refs.buttonsPagesList.innerHTML=`<li><button class="button-pagination button-page" type="button">1</button></li>\n    <li><button class="button-pagination button-page" type="button" disabled>...</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-${e-6}">${e-6}</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-${e-5}">${e-5}</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-${e-4}">${e-4}</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-${e-3}">${e-3}</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-${e-2}">${e-2}</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-${e-1}">${e-1}</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-${e}">${e}</button></li>\n    `;document.querySelector(`#page-${t}`).classList.add("current-page")}else t>=5&&(o.refs.buttonsPagesList.innerHTML=`\n        <li><button class="button-pagination button-page" type="button">1</button></li>\n        <li><button class="button-pagination button-page" type="button" disabled>...</button></li>\n        <li><button class="button-pagination button-page" type="button">${t-2}</button></li>\n        <li><button class="button-pagination button-page" type="button">${t-1}</button></li>\n        <li><button class="button-pagination button-page current-page" type="button">${t}</button></li>\n        <li><button class="button-pagination button-page" type="button">${t+1}</button></li>\n        <li><button class="button-pagination button-page" type="button">${t+2}</button></li>\n        <li><button class="button-pagination button-page" type="button" disabled>...</button></li>\n        <li><button class="button-pagination button-page" type="button">${e}</button></li>\n    `)}})),a.register("krGWQ",(function(e,n){t(e.exports,"refs",(function(){return o}));const o={homeHeaderForm:document.querySelector(".header__form"),cardContainer:document.querySelector(".cards-container"),conbuttonBack:document.querySelector(".button-back"),buttonForward:document.querySelector(".button-forward"),buttonsPagesList:document.querySelector(".buttons-pages"),buttonQueue:document.querySelector(".header__btn-queue"),buttonWatched:document.querySelector(".header__btn-watched")}})),a.register("8cwzF",(function(t,e){var n=a("9CftO"),o=a("25dvs");let i,u,s,r,l;function c(){i.remove(),u.remove()}function b(t){if(r.setAttribute("disabled",""),"Add to Watched"===t.currentTarget.textContent)return t.currentTarget.textContent="Remove from Watched",void o.libraryLogic.addToLocalStorage(l,"watched");"Remove from Watched"===t.currentTarget.textContent&&(t.currentTarget.textContent="Add to Watched",r.removeAttribute("disabled"),o.libraryLogic.removeFromLocalstorage(l,"watched"))}function p(t){if(s.setAttribute("disabled",""),"Add to Queue"===t.currentTarget.textContent)return t.currentTarget.textContent="Remove from Queue",void o.libraryLogic.addToLocalStorage(l,"queue");"Remove from Queue"===t.currentTarget.textContent&&(t.currentTarget.textContent="Add to Queue",s.removeAttribute("disabled",""),o.libraryLogic.removeFromLocalstorage(l,"Queue"))}document.querySelector(".cards-container").addEventListener("click",(function(t){if(t.target.closest(".films-list__link")){const e=t.target.closest(".films-list__link").getAttribute("id");n.apiService.getMoviesDetails(e).then((t=>{l=t,function(t){i=document.createElement("div"),i.classList.add("modal");const e=`\n      <div class="modal_content">\n      <div class="close">\n      <svg width="16" height="16" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">\n  <path d="M8 8L22 22" stroke="black" stroke-width="2"/>\n  <path d="M8 22L22 8" stroke="black" stroke-width="2"/>\n  </svg>\n    </div>\n        <img src="https://image.tmdb.org/t/p/w500/${t.poster_path}" class="modal_img">\n        <div class="tablet_modal">\n        <h2 class="main_text_modal">${t.title}</h2>\n        <div class="modal_items_container">\n          <ul class="modal_list">\n            <li>Vote / Votes</li>\n            <li>Popularity</li>\n            <li>Original Title</li>\n            <li>Genre</li>\n          </ul>\n          <ul class="modal_list_value">\n            <li>\n              <span class="vote_span">${t.vote_average.toFixed(1)}</span>\n              <span class="delimiter"> / </span>\n              <span class="vote_count_span">${t.vote_count}</span>\n            </li>\n            <li>${t.popularity.toFixed(1)}</li>\n            <li>${t.title}</li>\n            <li>${t.genres[0].name}</li>\n          </ul>\n        </div>\n        <p class="about_modal_text">About</p>\n        <p class="overview_modal">${t.overview}</p>\n        <div class="buttons-modal">\n          <button class="button-modal button-watched" type="button">Add to Watched</button>\n          <button class="button-modal button-queue" type="button">Add to Queue</button>\n        </div>\n      </div>\n      </div>\n    `;i.innerHTML=e,document.body.appendChild(i);i.querySelector(".close").addEventListener("click",(()=>{c(),u.remove()}));const n=t=>{"Escape"===t.key&&(c(),u.remove())};document.addEventListener("keydown",n)}(t),function(){u=document.createElement("div"),u.classList.add("modal-backdrop"),document.body.appendChild(u);const t=()=>{c()};u.addEventListener("click",t);const e=n=>{"Escape"===n.key&&(t(),document.removeEventListener("keydown",e))};document.addEventListener("keydown",e)}(),s=document.querySelector(".button-watched"),r=document.querySelector(".button-queue"),s.addEventListener("click",b),r.addEventListener("click",p)}))}}))}));
//# sourceMappingURL=index.e0c16bb1.js.map
