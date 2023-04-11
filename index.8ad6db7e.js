class e{async fetchMovieByQuery(){const e=await fetch(`https://api.themoviedb.org/3/${this.requestType}/movie?api_key=aa05d9ef1feff0e96ac321d8773a5c67&query=${this.searchQuery}&page=${this.page}`);return await e.json()}async getPopularMovies(){try{const e=await fetch(`https://api.themoviedb.org/3/${this.requestType}/movie/day?api_key=aa05d9ef1feff0e96ac321d8773a5c67&page=${this.page}`),t=await e.json();return t}catch(e){console.log(e)}}async fetchMovieGenres(){try{const e="https://api.themoviedb.org/3/genre/movie/list?api_key=aa05d9ef1feff0e96ac321d8773a5c67",t=await fetch(e);if(!t.ok)throw new Error("error");return await t.json()}catch(e){console.log(e)}}async getMoviesDetails(e){try{const t=await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=aa05d9ef1feff0e96ac321d8773a5c67&language=${this.lang}`);if(!t.ok)throw new Error("error");return await t.json()}catch(e){console.log(e)}}async getMovieTrailer(e){const t=`https://api.themoviedb.org/3/movie/${e}/videos?api_key=aa05d9ef1feff0e96ac321d8773a5c67`;try{const e=await fetch(t);if(!e.ok)throw new Error("Error");return await e.json()}catch(e){console.error("Error:",e)}}get query(){return this.searchQuery}set query(e){this.searchQuery=e}get pages(){return this.page}set pages(e){this.page=e}get type(){return this.requestType}set type(e){this.requestType=e}constructor(){this.searchQuery="",this.page=1,this.requestType="trending"}}const t=new e;function a(e){return e.map((({title:e,poster_path:t,release_date:a,genre_ids:n})=>{const o=n.map((e=>localStorage.getItem(e)));o.length>2&&o.splice(2,o.length-2,"Other");return`\n          <li class="films-list__item">\n                <a href="">\n                  <img class="films-list-item__poster" src="https://image.tmdb.org/t/p/w500${t}" alt="${e}" loading="lazy"  />\n                  <div class="films-list-item__info">\n                    <h2 class="films-list-item__tittle">${e}</h2>\n                    <p class="films-list-item__ganres">\n                      <span class="films-list-item__year">${o.join(", ")} | ${a.slice(0,4)}</span>\n                    </p>\n                  </div>\n                </a>`})).join("")}!async function(){(await t.fetchMovieGenres()).genres.map((e=>{const t=Object.values(e);localStorage.setItem(t[0],t[1])}))}();const n={homeHeaderForm:document.querySelector(".header__form"),cardContainer:document.querySelector(".cards-container")},o=new e,s=new class{show(){document.body.appendChild(this.loaderElement)}hide(){this.loaderElement.remove()}constructor(){this.loaderElement=document.createElement("div"),this.loaderElement.className="loader"}};document.addEventListener("DOMContentLoaded",(async function(){s.show();const e=await o.getPopularMovies();return s.hide(),n.cardContainer.innerHTML=a(e.results)})),document.addEventListener("submit",(async function(e){e.preventDefault(),o.type="search",o.query=n.homeHeaderForm.query.value,s.show();const t=await o.fetchMovieByQuery();return s.hide(),n.cardContainer.innerHTML=a(t.results)}));function i(){modal.remove(),backdrop.remove(),document.removeEventListener("keydown",closeOnEsc)}document.querySelector("#modalBtn").addEventListener("click",(async function(){const e=await async function(e){const t=await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=aa05d9ef1feff0e96ac321d8773a5c67`);return await t.json()}(255);!function(e){modal=document.createElement("div"),modal.classList.add("modal");const t=`\n      <div class="modal_content">\n      <div class="close">\n      <svg width="16" height="16" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">\n  <path d="M8 8L22 22" stroke="black" stroke-width="2"/>\n  <path d="M8 22L22 8" stroke="black" stroke-width="2"/>\n  </svg>\n    </div>\n        <img src="https://image.tmdb.org/t/p/w500/${e.poster_path}" class="modal_img">\n        <div class="tablet_modal">\n        <h2 class="main_text_modal">${e.title}</h2>\n        <div class="modal_items_container">\n          <ul class="modal_list">\n            <li>Vote / Votes</li>\n            <li>Popularity</li>\n            <li>Original Title</li>\n            <li>Genre</li>\n          </ul>\n          <ul class="modal_list_value">\n            <li>\n              <span class="vote_span">${e.vote_average.toFixed(1)}</span>\n              <span class="delimiter"> / </span>\n              <span class="vote_count_span">${e.vote_count}</span>\n            </li>\n            <li>${e.popularity.toFixed(1)}</li>\n            <li>${e.title}</li>\n            <li>${e.genres[0].name}</li>\n          </ul>\n        </div>\n        <p class="about_modal_text">About</p>\n        <p class="overview_modal">${e.overview}</p>\n        <div class="buttons">\n          <button class="button-watched">Add to Watched</button>\n          <button class="button-queue">Add to Queue</button>\n        </div>\n      </div>\n      </div>\n    `;modal.innerHTML+=t,document.body.appendChild(modal),modal.querySelector(".close").addEventListener("click",(()=>{i(),backdrop.remove()})),document.addEventListener("keydown",(e=>{"Escape"===e.key&&(i(),backdrop.remove())}))}(e),function(){backdrop=document.createElement("div"),backdrop.classList.add("modal-backdrop"),document.body.appendChild(backdrop);const e=()=>{backdrop.remove(),i()};backdrop.addEventListener("click",e);const t=t=>{"Escape"===t.key&&(e(),backdrop.remove())};document.addEventListener("keydown",t)}()}));
//# sourceMappingURL=index.8ad6db7e.js.map
