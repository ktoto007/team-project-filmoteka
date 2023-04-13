import { libraryLogic } from './workWithLocalStorage';
import { refs } from './refs';
import renderMarkupFilmsCard from './renderMarkupFilmsCard';
document.addEventListener('DOMContentLoaded', gettingMoviesFromWatched);

// refs.buttonWatched.addEventListener(
//   'click',
//   gettingMoviesFromWatced('watched')
// );

// refs.buttonQueue.addEventListener('click', gettingMoviesFromWatced('queue'));

function gettingMoviesFromWatched() {
  const arr = libraryLogic.getFromStorage('watched');
  arr.map(item => {
    const keys = item.genres.map(item => Object.values(item)[0]);
    item.genre_ids = keys;
  });
  refs.cardContainer.innerHTML = renderMarkupFilmsCard(arr);
}
