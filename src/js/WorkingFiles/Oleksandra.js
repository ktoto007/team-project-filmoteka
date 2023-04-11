const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'aa05d9ef1feff0e96ac321d8773a5c67';

// Запит на повну інформaцію по фільму

async function getFilmDetails(id) {
   
    try {
      const response = await fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=${this.lang}`);
      if (!response.ok) {
        throw new Error('error');
      }
      const data = await response.json();
      return data;
    } catch (error) {
     console.log(error);
    }
  }
//   getFilmDetails().then((data) => {
//       console.log(data);
//     }).catch((error) => {
//       console.log(error);
//     });


// Запит фільму за жанром

async function fetchMoviesByGenre() { 
  try { 
    const url = `${BASE_URL}genre/movie/list?api_key=${API_KEY}`; 
    const response = await fetch(url); 
 
    if (!response.ok) { 
      throw new Error('error'); 
    } 
 
    const data = await response.json(); 
    return data; 
  } catch (error) { 
    console.log(error); 
  } 
} 
fetchMoviesByGenre();

// fetchMoviesByGenre().then((result) => {
//     console.log(result);
//   });