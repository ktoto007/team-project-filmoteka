const BASE_URL = 'https://api.themoviedb.org/3/search/movie?';
const API_KEY = 'aa05d9ef1feff0e96ac321d8773a5c67';

export default class Apiservice {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchMovieByQuery() {
    const response = await fetch(
      `${BASE_URL}api_key=${API_KEY}&query=${this.searchQuery}&page=${this.page}`
    );
    const results = response.json();
    return response;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    return (this.searchQuery = newQuery);
  }

  get page() {
    return this.page;
  }

  set page(newPage) {
    return (this.page = newPage);
  }
}

///////////////Функція для збереження жанрів у вебсховище////////////

function getGenresInfo(genresArray) {
  const response = genresArray;

  const genres = response.genres;
  genres.map(item => {
    const values = Object.values(item);
    localStorage.setItem(values[0], values[1]);
  });
}



//////Clear localstorage on click "Remove from Queue"///////////

function clearLocalstorageFromQueue(film) {
        
    const currentMovie = film;
    const queueMovies = JSON.parse(localStorage.getItem('queue'));
 
    
    if (queueMovies.find(queueMovie => queueMovie.id === currentMovie.id)) {
        
        localStorage.setItem('queue', JSON.stringify(queueMovies.filter(queueMovie => queueMovie.id !== currentMovie.id)));
    }
    return;
}


//////Clear localstorage on click "Remove from Watched"///////////

function clearLocalstorageFromWatched(film) {
        
    const currentMovie = film;
    const watchedMovies = JSON.parse(localStorage.getItem('watched'));
 
    
    if (watchedMovies.find(watchedMovies => watchedMovies.id === watchedMovies.id)) {
        
        localStorage.setItem('watched', JSON.stringify(watchedMovies.filter(watchedMovies => watchedMovies.id !== currentMovie.id)));
    }
    return;
}