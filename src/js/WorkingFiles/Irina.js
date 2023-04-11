const API_KEY = 'aa05d9ef1feff0e96ac321d8773a5c67';

const BASE_URL = 'https://api.themoviedb.org/3/';

async function getPopularMovies() {
  try {
    const response = await fetch(
      `${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=${this.page}`
    );
    const data = await response.json();
    const popularMovies = data;
    return popularMovies;
  } catch (error) {
    console.log(error);
  }
}
 
//!!!!!!!!!!!!!!!!!!!// FETCH ON YOU TUBE//!!!!!!!!!!!!!!!!!//


async function getMovieTrailer(id) {
  const url = `${BASE_URL}movie/${id}/videos?api_key=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error`);
    }
    const data = await response.json();
    return data;
   
  } catch (error) {
    console.error('Error:', error);
  }
} 
  