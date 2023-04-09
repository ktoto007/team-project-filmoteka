const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'aa05d9ef1feff0e96ac321d8773a5c67';

export default class Apiservice {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.requestType = 'trending';
  }

  async fetchMovieByQuery() {
    const response = await fetch(
      `${BASE_URL}${this.requestType}/movie?api_key=${API_KEY}&query=${this.searchQuery}&page=${this.page}`
    );
    const results = await response.json();
    return results;
  }

  async getPopularMovies() {
    try {
      const response = await fetch(
        `${BASE_URL}${this.requestType}/movie/day?api_key=${API_KEY}&page=${this.page}`
      );
      const data = await response.json();
      const popularMovies = data;
      return popularMovies;
    } catch (error) {
      console.log(error);
    }
  }

  async getFilmDetails(id) {
    try {
      const response = await fetch(
        `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=${this.lang}`
      );
      if (!response.ok) {
        throw new Error('error');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get pages() {
    return this.page;
  }
  set pages(newPage) {
    this.page = newPage;
  }
  get type() {
    return this.requestType;
  }

  set type(newType) {
    this.requestType = newType;
  }
}
