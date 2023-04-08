const apiKey = 'aa05d9ef1feff0e96ac321d8773a5c67';
const popularMoviesUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;

export async function getPopularMovies() {
  try {
    const response = await fetch(popularMoviesUrl);
    const data = await response.json();   
    const popularMovies = data.result;  
    return popularMovies;    
  } catch (error) {
    console.log(error);      
  }
}
