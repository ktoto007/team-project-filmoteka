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
 ///////////////////////////////////////////////////////////////////////////////////

//выводим из локал//

function getFromStorage(key) {
  try {
    const movieStorage = localStorage.getItem(key);
    if (movieStorage === null) {
      return [];
    } else {
      return JSON.parse(movieStorage);
    }
  } catch (error) {
    console.log(`Error`);
    return [];
  }
}

console.log(getFromStorage('data'));// проверяем в консоли//


// добавляем в локал//

// function saveToStorage(key, value) {
//   try {
//     if (value === null) {
//       localStorage.removeItem(key);
//     } else {
//       const movieStorage = JSON.stringify(value);
//       localStorage.setItem(key, movieStorage);
//     }
//   } catch (error) { 
//     console.log(`Error`);
//   }
// }
// saveToStorage('data', [1, 2, 3]);// проверяем в консоли//
// console.log('Data save');
