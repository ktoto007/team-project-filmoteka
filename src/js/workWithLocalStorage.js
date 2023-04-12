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
  constructor() {}
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
    }
  }
}

export const libraryLogic = new LibraryLogic();
