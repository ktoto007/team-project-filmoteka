import { libraryLogic } from './workWithLocalStorage';
import { refs } from './refs';
import renderMarkupFilmsCard from './renderMarkupFilmsCard';
import { renderingPaginationForFirstPageQueue, renderingPaginationForFirstPageWatched } from './libraryPagination';
document.addEventListener('DOMContentLoaded', gettingMoviesFromWatched);

refs.buttonWatched.addEventListener('click', gettingMoviesFromWatched);

function gettingMoviesFromWatched() {
  renderingPaginationForFirstPageWatched();
  const arr = libraryLogic.getFromStorage('watched');
  refs.buttonWatched.classList.add('this-library');
  refs.buttonQueue.classList.remove('this-library');
  if (arr.length == 0) {
    refs.cardContainer.innerHTML =
      "<li class='clear-storage-text'><p>Sorry, but you haven't added any movies to this category yet</p></li>";
    return;
  }

  arr.map(item => {
    const keys = item.genres.map(item => Object.values(item)[0]);
    item.genre_ids = keys;
  });
  refs.cardContainer.innerHTML = renderMarkupFilmsCard(arr.slice(0, 20));
}

refs.buttonQueue.addEventListener('click', gettingMoviesFromQueue);

function gettingMoviesFromQueue() {
  renderingPaginationForFirstPageQueue();
  const arr = libraryLogic.getFromStorage('queue');
  refs.buttonQueue.classList.add('this-library');
  refs.buttonWatched.classList.remove('this-library');
  if (arr.length == 0) {
    refs.cardContainer.innerHTML =
      "<li class='clear-storage-text'><p>Sorry, but you haven't added any movies to this category yet</p></li>";
    return;
  }

  arr.map(item => {
    const keys = item.genres.map(item => Object.values(item)[0]);
    item.genre_ids = keys;
  });
  refs.cardContainer.innerHTML = renderMarkupFilmsCard(arr.slice(0, 20));
  
}
