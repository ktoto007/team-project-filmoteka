import NewFilmApiServise from './js/filmsAPIServise';

const apiService = new NewFilmApiServise();

const refs = {
  homeHeaderForm: document.querySelector('.header__form'),
  cardContainer: document.querySelector('.cards-container'),
};

document.addEventListener('DOMContentLoaded', receivingPopularFilms);

async function receivingPopularFilms() {
  const responce = await apiService.getPopularMovies();
  renderMarkupFilmsCard(responce.results);
}

document.addEventListener('submit', gettingMoviesByKeyword);

async function gettingMoviesByKeyword(e) {
  e.preventDefault();
  apiService.type = 'search';
  apiService.query = refs.homeHeaderForm.query.value;
  const responce = await apiService.fetchMovieByQuery();
  renderMarkupFilmsCard(responce.results);
  //   console.log(refs.homeHeaderForm.query.value);
}

function renderMarkupFilmsCard(films) {
  // Властивість, що перевіряє розмір екрану
  const screenWidth = window.innerWidth;

  const markupFilmsCard = films
    .map(({ title, poster_path, release_date, genre_ids }) => {
      // Перевірка розміру екрана і передача необхідного розміру постера для розмітки
      let imageSize;
      if (screenWidth >= 1200) {
        imageSize = '395px';
      } else if (screenWidth >= 768) {
        imageSize = '336px';
      } else {
        imageSize = '280px';
      }

      // Перевірка кількості жанрів
      if (genre_ids.length > 2) {
        genre_ids.splice(2, genre_ids.length - 2, 'Other');
      }

      // Обрізання повної дати до року
      const yearRelease = release_date.slice(0, 4);

      return `
          <li class="films-list__item">
                <a href="">
                  <img class="films-list-item__poster" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" loading="lazy" width=${imageSize} />
                  <div class="films-list-item__info">
                    <h2 class="films-list-item__tittle">${title}</h2>
                    <p class="films-list-item__ganres">
                      <span class="films-list-item__year">${genre_ids} | ${yearRelease}</span>
                    </p>
                  </div>
                </a>`;
    })
    .join('');

  return (refs.cardContainer.innerHTML = markupFilmsCard);
}
