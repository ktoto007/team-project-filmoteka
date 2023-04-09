const BASE_URL = 'https://api.themoviedb.org/3/search/movie?';
const API_KEY = 'aa05d9ef1feff0e96ac321d8773a5c67';

export default class Apiservice {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    async fetchMovieByQuery() {
      
        const results = await fetch(
            `${BASE_URL}api_key=${API_KEY}&query=${this.searchQuery}&page=${this.page}`
        );

        return results;
    };

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
