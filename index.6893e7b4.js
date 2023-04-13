const t=new class{async fetchMovieByQuery(){const t=await fetch(`https://api.themoviedb.org/3/${this.requestType}/movie?api_key=aa05d9ef1feff0e96ac321d8773a5c67&query=${this.searchQuery}&page=${this.page}`);return await t.json()}async getPopularMovies(){try{const t=await fetch(`https://api.themoviedb.org/3/${this.requestType}/movie/day?api_key=aa05d9ef1feff0e96ac321d8773a5c67&page=${this.page}`),e=await t.json();return e}catch(t){console.log(t)}}async fetchMovieGenres(){try{const t="https://api.themoviedb.org/3/genre/movie/list?api_key=aa05d9ef1feff0e96ac321d8773a5c67",e=await fetch(t);if(!e.ok)throw new Error("error");return await e.json()}catch(t){console.log(t)}}async getMoviesDetails(t){try{const e=await fetch(`https://api.themoviedb.org/3/movie/${t}?api_key=aa05d9ef1feff0e96ac321d8773a5c67&language=${this.lang}`);if(!e.ok)throw new Error("error");return await e.json()}catch(t){console.log(t)}}async getMovieTrailer(t){const e=`https://api.themoviedb.org/3/movie/${t}/videos?api_key=aa05d9ef1feff0e96ac321d8773a5c67`;try{const t=await fetch(e);if(!t.ok)throw new Error("Error");return await t.json()}catch(t){console.error("Error:",t)}}get query(){return this.searchQuery}set query(t){this.searchQuery=t}get pages(){return this.page}set pages(t){this.page=t}get type(){return this.requestType}set type(t){this.requestType=t}constructor(){this.searchQuery="",this.page=1,this.requestType="trending"}};!async function(){(await t.fetchMovieGenres()).genres.map((t=>{const e=Object.values(t);localStorage.setItem(e[0],e[1])}))}();const e=new class{addToLocalStorage(t,e){let n;"watched"===e?n=JSON.parse(localStorage.getItem("watched"))||[]:"queue"===e&&(n=JSON.parse(localStorage.getItem("queue"))||[]),n.find((e=>e.id===t.id))||(n.push(t),localStorage.setItem(e,JSON.stringify(n)))}removeFromLocalstorage(t,e){if("Queue"==e){const e=JSON.parse(localStorage.getItem("queue"));e.find((e=>e.id===t.id))&&localStorage.setItem("queue",JSON.stringify(e.filter((e=>e.id!==t.id))))}else{const e=JSON.parse(localStorage.getItem("watched"));e.find((e=>e.id===t.id))&&localStorage.setItem("watched",JSON.stringify(e.filter((e=>e.id!==t.id))))}}constructor(){}};function n(t){return t.map((({title:t,poster_path:e,release_date:n,genre_ids:o,id:a})=>{const i=o.map((t=>localStorage.getItem(t)));i.length>2&&i.splice(2,i.length-2,"Other");return`\n          <li class="films-list__item">\n                <a class="films-list__link" id=${a}>\n                  <img class="films-list-item__poster" src="https://image.tmdb.org/t/p/w500${e}" alt="${t}" loading="lazy"  />\n                  <div class="films-list-item__info">\n                    <h2 class="films-list-item__tittle">${t}</h2>\n                    <p class="films-list-item__ganres">\n                      <span class="films-list-item__year">${i.join(", ")} | ${n.slice(0,4)}</span>\n                    </p>\n                  </div>\n                </a></li>`})).join("")}const o=new class{show(){document.body.appendChild(this.loaderElement)}hide(){this.loaderElement.remove()}constructor(){this.loaderElement=document.createElement("div"),this.loaderElement.className="loader"}},a={homeHeaderForm:document.querySelector(".header__form"),cardContainer:document.querySelector(".cards-container"),conbuttonBack:document.querySelector(".button-back"),buttonForward:document.querySelector(".button-forward"),buttonsPagesList:document.querySelector(".buttons-pages")};let i=null;function s({page:t,total_pages:e}){const n=window.screen.width;if(i=e,n<768){if(t<4){a.buttonsPagesList.innerHTML='<li><button class="button-pagination button-page" type="button" id="page-1">1</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-2">2</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-3">3</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-4">4</button></li>\n    <li><button class="button-pagination button-page" type="button id="page-5">5</button></li>\n';return void document.querySelector(`#page-${t}`).classList.add("current-page")}if(t+2>=e){a.buttonsPagesList.innerHTML=`\n    <li><button class="button-pagination button-page" type="button" id="page-${e-4}">${e-4}</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-${e-3}">${e-3}</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-${e-2}">${e-2}</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-${e-1}">${e-1}</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-${e}">${e}</button></li>\n    `;return void document.querySelector(`#page-${t}`).classList.add("current-page")}if(t>=4)return void(a.buttonsPagesList.innerHTML=`<li><button class="button-pagination button-page" type="button">${t-2}</button></li>\n    <li><button class="button-pagination button-page" type="button">${t-1}</button></li>\n    <li><button class="button-pagination button-page current-page" type="button">${t}</button></li>\n    <li><button class="button-pagination button-page" type="button">${t+1}</button></li>\n    <li><button class="button-pagination button-page" type="button">${t+2}</button></li>\n    `)}if(t<5){a.buttonsPagesList.innerHTML=`<li><button class="button-pagination button-page" type="button" id="page-1">1</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-2">2</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-3">3</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-4">4</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-5">5</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-6">6</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-7">7</button></li>\n    <li><button class="button-pagination button-page" type="button" disabled>...</button></li>\n    <li><button class="button-pagination button-page" type="button">${e}</button></li>\n`;document.querySelector(`#page-${t}`).classList.add("current-page")}else if(t+5>=e){a.buttonsPagesList.innerHTML=`<li><button class="button-pagination button-page" type="button">1</button></li>\n    <li><button class="button-pagination button-page" type="button" disabled>...</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-${e-6}">${e-6}</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-${e-5}">${e-5}</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-${e-4}">${e-4}</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-${e-3}">${e-3}</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-${e-2}">${e-2}</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-${e-1}">${e-1}</button></li>\n    <li><button class="button-pagination button-page" type="button" id="page-${e}">${e}</button></li>\n    `;document.querySelector(`#page-${t}`).classList.add("current-page")}else t>=5&&(a.buttonsPagesList.innerHTML=`\n        <li><button class="button-pagination button-page" type="button">1</button></li>\n        <li><button class="button-pagination button-page" type="button" disabled>...</button></li>\n        <li><button class="button-pagination button-page" type="button">${t-2}</button></li>\n        <li><button class="button-pagination button-page" type="button">${t-1}</button></li>\n        <li><button class="button-pagination button-page current-page" type="button">${t}</button></li>\n        <li><button class="button-pagination button-page" type="button">${t+1}</button></li>\n        <li><button class="button-pagination button-page" type="button">${t+2}</button></li>\n        <li><button class="button-pagination button-page" type="button" disabled>...</button></li>\n        <li><button class="button-pagination button-page" type="button">${e}</button></li>\n    `)}const u={homeHeaderForm:document.querySelector(".header__form"),cardContainer:document.querySelector(".cards-container")};document.addEventListener("DOMContentLoaded",(async function(){o.show();const e=await t.getPopularMovies();o.hide(),t.requestType="trending";try{localStorage.setItem("currentPage",JSON.stringify(e))}catch(t){console.log(t.message)}return s(e),u.cardContainer.innerHTML=n(e.results)})),window.addEventListener("resize",(e=>{try{const e=JSON.parse(localStorage.getItem("currentPage"));t.page=e.page,s(e)}catch(t){console.log(t.message)}})),document.addEventListener("submit",(async function(e){e.preventDefault(),t.query=u.homeHeaderForm.query.value,t.requestType="search",console.log(t.requestType),o.show();const a=await t.fetchMovieByQuery();return o.hide(),s(a),u.cardContainer.innerHTML=n(a.results)}));const r=document.querySelector(".button-back"),l=document.querySelector(".button-forward");let c,d,g,p,b;document.querySelector(".buttons-pages").addEventListener("click",(function(e){if("button"!==e.target.type)return;if("trending"===t.requestType){const i=e.target.textContent;return t.page=Number(i),o.show(),t.getPopularMovies().then((t=>{s(t),a.cardContainer.innerHTML=n(t.results);try{localStorage.setItem("currentPage",JSON.stringify(t))}catch(t){console.log(t.message)}})).catch((t=>t.message)).finally((()=>o.hide())),void window.scrollTo({top:0,left:0,behavior:"smooth"})}if("search"===t.requestType){const i=e.target.textContent;t.page=Number(i),o.show(),t.fetchMovieByQuery().then((t=>{s(t),a.cardContainer.innerHTML=n(t.results);try{localStorage.setItem("currentPage",JSON.stringify(t))}catch(t){console.log(t.message)}})).catch((t=>t.message)).finally((()=>o.hide())),window.scrollTo({top:0,left:0,behavior:"smooth"})}})),r.addEventListener("click",(function(){if("trending"===t.requestType)return void(1!==t.page&&(t.page-=1,o.show(),t.getPopularMovies().then((t=>{s(t),a.cardContainer.innerHTML=n(t.results);try{localStorage.setItem("currentPage",JSON.stringify(t))}catch(t){console.log(t.message)}})).catch((t=>t.message)).finally((()=>o.hide())),window.scrollTo({top:0,left:0,behavior:"smooth"})));"search"===t.requestType&&1!==t.page&&(t.page-=1,o.show(),t.fetchMovieByQuery().then((t=>{s(t),a.cardContainer.innerHTML=n(t.results);try{localStorage.setItem("currentPage",JSON.stringify(t))}catch(t){console.log(t.message)}})).catch((t=>t.message)).finally((()=>o.hide())),window.scrollTo({top:0,left:0,behavior:"smooth"}))})),l.addEventListener("click",(function(){"trending"===t.requestType&&t.page!==i&&(t.page+=1,o.show(),t.getPopularMovies().then((t=>{s(t),a.cardContainer.innerHTML=n(t.results);try{localStorage.setItem("currentPage",JSON.stringify(t))}catch(t){console.log(t.message)}})).catch((t=>t.message)).finally((()=>o.hide())),window.scrollTo({top:0,left:0,behavior:"smooth"}));"search"===t.requestType&&t.page!==i&&(t.page+=1,o.show(),t.fetchMovieByQuery().then((t=>{s(t),a.cardContainer.innerHTML=n(t.results);try{localStorage.setItem("currentPage",JSON.stringify(t))}catch(t){console.log(t.message)}o.hide()})).catch((t=>t.message)).finally((()=>o.hide())),window.scrollTo({top:0,left:0,behavior:"smooth"}))}));function m(){c.remove(),d.remove()}function y(t){if(p.setAttribute("disabled",""),"Add to Watched"===t.currentTarget.textContent)return t.currentTarget.textContent="Remove from Watched",void e.addToLocalStorage(b,"watched");"Remove from Watched"===t.currentTarget.textContent&&(t.currentTarget.textContent="Add to Watched",p.removeAttribute("disabled"),e.removeFromLocalstorage(b,"watched"))}function h(t){if(g.setAttribute("disabled",""),"Add to Queue"===t.currentTarget.textContent)return t.currentTarget.textContent="Remove from Queue",void e.addToLocalStorage(b,"queue");"Remove from Queue"===t.currentTarget.textContent&&(t.currentTarget.textContent="Add to Queue",g.removeAttribute("disabled",""),e.removeFromLocalstorage(b,"Queue"))}document.querySelector(".cards-container").addEventListener("click",(function(e){if(e.target.closest(".films-list__link")){const n=e.target.closest(".films-list__link").getAttribute("id");t.getMoviesDetails(n).then((t=>{b=t,function(t){c=document.createElement("div"),c.classList.add("modal");const e=`\n      <div class="modal_content">\n      <div class="close">\n      <svg width="16" height="16" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">\n  <path d="M8 8L22 22" stroke="black" stroke-width="2"/>\n  <path d="M8 22L22 8" stroke="black" stroke-width="2"/>\n  </svg>\n    </div>\n        <img src="https://image.tmdb.org/t/p/w500/${t.poster_path}" class="modal_img">\n        <div class="tablet_modal">\n        <h2 class="main_text_modal">${t.title}</h2>\n        <div class="modal_items_container">\n          <ul class="modal_list">\n            <li>Vote / Votes</li>\n            <li>Popularity</li>\n            <li>Original Title</li>\n            <li>Genre</li>\n          </ul>\n          <ul class="modal_list_value">\n            <li>\n              <span class="vote_span">${t.vote_average.toFixed(1)}</span>\n              <span class="delimiter"> / </span>\n              <span class="vote_count_span">${t.vote_count}</span>\n            </li>\n            <li>${t.popularity.toFixed(1)}</li>\n            <li>${t.title}</li>\n            <li>${t.genres[0].name}</li>\n          </ul>\n        </div>\n        <p class="about_modal_text">About</p>\n        <p class="overview_modal">${t.overview}</p>\n        <div class="buttons-modal">\n          <button class="button-modal button-watched" type="button">Add to Watched</button>\n          <button class="button-modal button-queue" type="button">Add to Queue</button>\n        </div>\n      </div>\n      </div>\n    `;c.innerHTML=e,document.body.appendChild(c);c.querySelector(".close").addEventListener("click",(()=>{m(),d.remove()}));const n=t=>{"Escape"===t.key&&(m(),d.remove())};document.addEventListener("keydown",n)}(t),function(){d=document.createElement("div"),d.classList.add("modal-backdrop"),document.body.appendChild(d);const t=()=>{m()};d.addEventListener("click",t);const e=n=>{"Escape"===n.key&&(t(),document.removeEventListener("keydown",e))};document.addEventListener("keydown",e)}(),g=document.querySelector(".button-watched"),p=document.querySelector(".button-queue"),g.addEventListener("click",y),p.addEventListener("click",h)}))}}));
//# sourceMappingURL=index.6893e7b4.js.map
