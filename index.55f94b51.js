class e{async fetchMovieByQuery(){const e=await fetch(`https://api.themoviedb.org/3/${this.requestType}/movie?api_key=aa05d9ef1feff0e96ac321d8773a5c67&query=${this.searchQuery}&page=${this.page}`);return await e.json()}async getPopularMovies(){try{const e=await fetch(`https://api.themoviedb.org/3/${this.requestType}/movie/day?api_key=aa05d9ef1feff0e96ac321d8773a5c67&page=${this.page}`),t=await e.json();return t}catch(e){console.log(e)}}async fetchMovieGenres(){try{const e="https://api.themoviedb.org/3/genre/movie/list?api_key=aa05d9ef1feff0e96ac321d8773a5c67",t=await fetch(e);if(!t.ok)throw new Error("error");return await t.json()}catch(e){console.log(e)}}async getMoviesDetails(e){try{const t=await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=aa05d9ef1feff0e96ac321d8773a5c67&language=${this.lang}`);if(!t.ok)throw new Error("error");return await t.json()}catch(e){console.log(e)}}async getMovieTrailer(e){const t=`https://api.themoviedb.org/3/movie/${e}/videos?api_key=aa05d9ef1feff0e96ac321d8773a5c67`;try{const e=await fetch(t);if(!e.ok)throw new Error("Error");return await e.json()}catch(e){console.error("Error:",e)}}get query(){return this.searchQuery}set query(e){this.searchQuery=e}get pages(){return this.page}set pages(e){this.page=e}get type(){return this.requestType}set type(e){this.requestType=e}constructor(){this.searchQuery="",this.page=1,this.requestType="trending"}}const t=new e;function a(e){return e.map((({title:e,poster_path:t,release_date:a,genre_ids:r})=>{const s=r.map((e=>localStorage.getItem(e)));s.length>2&&s.splice(2,s.length-2,"Other");return`\n          <li class="films-list__item">\n                <a href="">\n                  <img class="films-list-item__poster" src="https://image.tmdb.org/t/p/w500${t}" alt="${e}" loading="lazy"  />\n                  <div class="films-list-item__info">\n                    <h2 class="films-list-item__tittle">${e}</h2>\n                    <p class="films-list-item__ganres">\n                      <span class="films-list-item__year">${s.join(", ")} | ${a.slice(0,4)}</span>\n                    </p>\n                  </div>\n                </a>`})).join("")}!async function(){(await t.fetchMovieGenres()).genres.map((e=>{const t=Object.values(e);localStorage.setItem(t[0],t[1])}))}();const r={homeHeaderForm:document.querySelector(".header__form"),cardContainer:document.querySelector(".cards-container")},s=new e,i=new class{show(){document.body.appendChild(this.loaderElement)}hide(){this.loaderElement.remove()}constructor(){this.loaderElement=document.createElement("div"),this.loaderElement.className="loader"}};document.addEventListener("DOMContentLoaded",(async function(){i.show();const e=await s.getPopularMovies();return i.hide(),r.cardContainer.innerHTML=a(e.results)})),document.addEventListener("submit",(async function(e){e.preventDefault(),s.type="search",s.query=r.homeHeaderForm.query.value,i.show();const t=await s.fetchMovieByQuery();return i.hide(),r.cardContainer.innerHTML=a(t.results)}));
//# sourceMappingURL=index.55f94b51.js.map
