import { libraryLogic } from './workWithLocalStorage';
import { refs } from './refs';
import renderMarkupFilmsCard from './renderMarkupFilmsCard';
document.addEventListener('DOMContentLoaded', gettingMoviesFromWatched);

refs.buttonWatched.addEventListener('click', gettingMoviesFromWatched);

refs.buttonQueue.addEventListener('click', gettingMoviesFromQueue);

function gettingMoviesFromWatched() {
  const arr = libraryLogic.getFromStorage('watched');
  refs.buttonWatched.classList.add('this-library');
  refs.buttonQueue.classList.remove('this-library');
  arr.map(item => {
    const keys = item.genres.map(item => Object.values(item)[0]);
    item.genre_ids = keys;
  });
  refs.cardContainer.innerHTML = renderMarkupFilmsCard(arr);
}

function gettingMoviesFromQueue() {
  const arr = libraryLogic.getFromStorage('queue');
  refs.buttonQueue.classList.add('this-library');
  refs.buttonWatched.classList.remove('this-library');
  arr.map(item => {
    const keys = item.genres.map(item => Object.values(item)[0]);
    item.genre_ids = keys;
  });
  refs.cardContainer.innerHTML = renderMarkupFilmsCard(arr);
}
