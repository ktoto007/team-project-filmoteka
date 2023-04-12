import { apiService } from './filmsAPIServise';

async function getGenresInfo() {
  const response = await apiService.fetchMovieGenres();

  const genres = response.genres;
  genres.map(item => {
    const values = Object.values(item);
    localStorage.setItem(values[0], values[1]);
  });
}

getGenresInfo();

class LibraryLogic {
  constructor() { }
  addToLocalStorage(film, listType) {
  let moviesList;

   // Перевірка типу списку та отримання відповідного списку фільмів з localStorage
  if (listType === 'watched') {
    moviesList = JSON.parse(localStorage.getItem('watched')) || [];
  } else if (listType === 'queue') {
    moviesList = JSON.parse(localStorage.getItem('queue')) || [];
  }

  // Перевірка на наявність дублікатів в списку фільмів
  if (!moviesList.find(movie => movie.id === film.id)) {
    
    // Додавання фільму до списку
    moviesList.push(film);
    
    // Оновлення localStorage
    localStorage.setItem(listType, JSON.stringify(moviesList));
  }
}

  removeFromLocalstorage(film, type) {
    if (type == 'Queue') {
      const queueMovies = JSON.parse(localStorage.getItem('queue'));
      if (queueMovies.find(queueMovie => queueMovie.id === film.id)) {
        localStorage.setItem(
          'queue',
          JSON.stringify(
            queueMovies.filter(queueMovie => queueMovie.id !== film.id)
          )
        );
      }
      return;
    } else {
      const watchedMovies = JSON.parse(localStorage.getItem('watched'));

      if (watchedMovies.find(watchedMovie => watchedMovie.id === film.id)) {
        localStorage.setItem(
          'watched',
          JSON.stringify(
            watchedMovies.filter(watchedMovie => watchedMovie.id !== film.id)
          )
        );
      }
      return;
    }
  }
}

export const libraryLogic = new LibraryLogic();
