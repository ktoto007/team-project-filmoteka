// Сюди бажано не лізти
import { apiService } from './filmsAPIServise';
import { refs } from './refs';
import renderMarkupFilmsCard from './renderMarkupFilmsCard';
import { loader } from './loader';
import { lastPage, buildingPagination } from './renderingPagination';

document.addEventListener('DOMContentLoaded', receivingPopularFilms);

export default async function receivingPopularFilms() {
  loader.show();
  const responce = await apiService.getPopularMovies();
  loader.hide();

  apiService.requestType = 'trending';
  try {
    localStorage.setItem('currentPage', JSON.stringify(responce));
  } catch (error) {
    console.log(error.message);
  }
  buildingPagination(responce);
  return (refs.cardContainer.innerHTML = renderMarkupFilmsCard(
    responce.results
  ));
}

window.addEventListener('resize', evt => {
  try {
    const filmsForCurrentPage = JSON.parse(localStorage.getItem('currentPage'));
    apiService.page = filmsForCurrentPage.page;
    buildingPagination(filmsForCurrentPage);
  } catch (error) {
    console.log(error.message);
  }
});
document.addEventListener('submit', gettingMoviesByKeyword);

async function gettingMoviesByKeyword(e) {
  e.preventDefault();

  apiService.query = refs.homeHeaderForm.query.value;
  apiService.requestType = 'search';

  loader.show();
  const responce = await apiService.fetchMovieByQuery();

  loader.hide();
  if (responce.results == 0) {
    refs.paragrafAboutResult.classList.remove('search-incorrect');
    return;
  }
  refs.paragrafAboutResult.classList.add('search-incorrect');
  buildingPagination(responce);
  return (refs.cardContainer.innerHTML = renderMarkupFilmsCard(
    responce.results
  ));
}
