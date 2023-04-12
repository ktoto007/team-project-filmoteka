// =================================== LOADER ===================================

// export default class Loader {
//   constructor() {
//     this.loaderElement = document.createElement('div');
//     this.loaderElement.className = 'loader';
//   }

//   show() {
//     document.body.appendChild(this.loaderElement);
//   }

//   hide() {
//     this.loaderElement.remove();
//   }
// }


// =================================== WATCHED & QUEUE ===================================


function addToWatched(film) {
  const currentMovie = film;

  // перевірка на наявність даних в localStorage
  const watchedMovies = JSON.parse(localStorage.getItem('watched')) || [];
  
  // перевірка на дублювання
  if (!watchedMovies.find(watchedMovie => watchedMovie.id === currentMovie.id)) {

  // додавання фільму до списку
    watchedMovies.push(currentMovie);

  // оновлення localStorage
        localStorage.setItem('watched', JSON.stringify(watchedMovies));
  }
}

function addToQueue(film) {
  const currentMovie = film;
  
  // перевірка на наявність даних в localStorage
    const queueMovies = JSON.parse(localStorage.getItem('queue')) || [];

  // перевірка на дублювання
  if (!queueMovies.find(queueMovie => queueMovie.id === currentMovie.id)) {
      
    // додавання фільму до списку
    queueMovies.push(currentMovie);
    
    // оновлення localStorage
        localStorage.setItem('queue', JSON.stringify(queueMovies));
  }
}