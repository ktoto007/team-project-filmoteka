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
