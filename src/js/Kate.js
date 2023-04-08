function renderMarkupFilmsCard(films) {
    const markupFilmsCard = films.map(({title, original_title, poster_path}) => {
        return `
        <li class="films-list__item">
              <a href="">
                <img class="films-list-item__poster" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}" loading="lazy" width=280px />
                <div class="films-list-item__info">
                  <h2 class="films-list-item__tittle">${title}</h2>
                  <p class="films-list-item__ganres"></p>
                </div>
              </a>`
    }).join('');

}

