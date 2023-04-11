export default function renderMarkupFilmsCard(films) {
  const markupFilmsCard = films
    .map(({ title, poster_path, release_date, genre_ids }) => {

      // Перевірка кількості жанрів
      if (genre_ids.length > 2) {
        genre_ids.splice(2, genre_ids.length - 2, 'Other');
      }

      // Обрізання повної дати до року
      const yearRelease = release_date.slice(0, 4);

      return `
        <li class="films-list__item">
              <a href="">
                <img class="films-list-item__poster" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" loading="lazy"/>
                  <h2 class="films-item__info films-list-item__tittle">${title}</h2>
                  <p class="films-item__info films-list-item__ganres">
                    <span class="films-list-item__year">${genre_ids} | ${yearRelease}</span>
                  </p>
              </a>`;
    })
    .join('');

  return (filmsList.innerHTML = markupFilmsCard);
}
