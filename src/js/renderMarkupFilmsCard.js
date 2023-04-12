//Катя Допрацьовуєш тут

export default function renderMarkupFilmsCard(films) {
  const markupFilmsCard = films
    .map(({ title, poster_path, release_date, genre_ids, id }) => {
      // Перевірка кількості жанрів

      const genresId = genre_ids.map(id => localStorage.getItem(id));
      
      if (genresId.length > 2) {
        genresId.splice(2, genresId.length - 2, 'Other');
      }

      const genres = genresId.join(', ');
      
      // Обрізання повної дати до року
      const yearRelease = release_date.slice(0, 4);

      return `
          <li class="films-list__item">
                <a class="films-list__link" id=${id}>
                  <img class="films-list-item__poster" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" loading="lazy"  />
                  <div class="films-list-item__info">
                    <h2 class="films-list-item__tittle">${title}</h2>
                    <p class="films-list-item__ganres">
                      <span class="films-list-item__year">${genres} | ${yearRelease}</span>
                    </p>
                  </div>
                </a></li>`;
    })
    .join('');

  return markupFilmsCard;
}



