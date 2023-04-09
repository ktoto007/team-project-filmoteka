function renderMarkupFilmsCard(films) {
  
  const markupFilmsCard = films.map(({title, poster_path, release_date, genre_ids
    }) => {
      const yearRelease = release_date.slice(0, 4);

        return `
        <li class="films-list__item">
              <a href="">
                <img class="films-list-item__poster" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" loading="lazy" width=280px />
                <div class="films-list-item__info">
                  <h2 class="films-list-item__tittle">${title}</h2>
                  <p class="films-list-item__ganres">
                    <span class="films-list-item__year"> | ${yearRelease}</span>
                  </p>
                </div>
              </a>`
    }).join('');

    return filmsList.innerHTML = markupFilmsCard;

}

