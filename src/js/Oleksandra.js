const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'aa05d9ef1feff0e96ac321d8773a5c67';

// Запит на повну інформвцію по фільму

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