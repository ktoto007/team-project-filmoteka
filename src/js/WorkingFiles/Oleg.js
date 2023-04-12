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


// =================================== new WATCHED & QUEUE ===================================

function addToLocalStorage(film, listType) {
  const currentMovie = film;
  let moviesList;

   // Перевірка типу списку та отримання відповідного списку фільмів з localStorage
  if (listType === 'watched') {
    moviesList = JSON.parse(localStorage.getItem('watched')) || [];
  } else if (listType === 'queue') {
    moviesList = JSON.parse(localStorage.getItem('queue')) || [];
  }

  // Перевірка на наявність дублікатів в списку фільмів
  if (!moviesList.find(movie => movie.id === currentMovie.id)) {
    
    // Додавання фільму до списку
    moviesList.push(currentMovie);
    
    // Оновлення localStorage
    localStorage.setItem(listType, JSON.stringify(moviesList));
  }
}

// посилання на кнопки за відповідними data-атрибутом
const watchedButton = document.querySelector('[data-id="watched"]');
const queueButton = document.querySelector('[data-id="queue"]');

watchedButton.addEventListener('click', handleButtonsClick);
queueButton.addEventListener('click', handleButtonsClick);

function handleButtonsClick(e) {
  const clickedButton = e.target;
  const clickedButtonId = clickedButton.dataset.id;

  // встановлення disabled на протилежній кнопці
  let oppositeButton;
  if (clickedButtonId === 'watched') {
    oppositeButton = queueButton;
  } else if (clickedButtonId === 'queue') {
    oppositeButton = watchedButton;
  }
  oppositeButton.disabled = true;

   // Виконання дії для натиснутої кнопки
  if (clickedButtonId === 'watch') {
    if (clickedButton.textContent === 'add to watched') {
      // Додавання фільму до списку watched
      clickedButton.textContent = 'remove from watched';
      // Виконати додаткову дію для 'add to watched'
      // ...
    } else {
      // Видалення фільму зі списку watched
      clickedButton.textContent = 'add to watched';
      // Виконати додаткову дію для 'remove from watched'
      // ...
    }
  } else if (clickedButtonId === 'queue') {
    if (clickedButton.textContent === 'add to queue') {
      // Додавання фільму до списку queue
      clickedButton.textContent = 'remove from queue';
      // Виконати додаткову дію для 'add to queue'
      // ...
    } else {
      // Видалення фільму зі списку queue
      clickedButton.textContent = 'add to queue';
      // Виконати додаткову дію для 'remove from queue'
      // ...
    }
  }

  // Зняття стану "disabled" з протилежної кнопки
  oppositeButton.disabled = false;
}


// ================================== old Watched & Queue ================================

// function addToWatched(film) {
//   const currentMovie = film;

//   // перевірка на наявність даних в localStorage
//   const watchedMovies = JSON.parse(localStorage.getItem('watched')) || [];
  
//   // перевірка на дублювання
//   if (!watchedMovies.find(watchedMovie => watchedMovie.id === currentMovie.id)) {

//   // додавання фільму до списку
//     watchedMovies.push(currentMovie);

//   // оновлення localStorage
//         localStorage.setItem('watched', JSON.stringify(watchedMovies));
//   }
// }

// function addToQueue(film) {
//   const currentMovie = film;
  
//   // перевірка на наявність даних в localStorage
//     const queueMovies = JSON.parse(localStorage.getItem('queue')) || [];

//   // перевірка на дублювання
//   if (!queueMovies.find(queueMovie => queueMovie.id === currentMovie.id)) {
      
//     // додавання фільму до списку
//     queueMovies.push(currentMovie);
    
//     // оновлення localStorage
//         localStorage.setItem('queue', JSON.stringify(queueMovies));
//   }
// }