// Сюди бажано не лізти
import { apiService } from './filmsAPIServise';
// import refs from './refs';
import renderMarkupFilmsCard from './renderMarkupFilmsCard';
import Loader from './loader';
import buildingPagination from './pagination';

 export const refs = {
  homeHeaderForm: document.querySelector('.header__form'),
  cardContainer: document.querySelector('.cards-container'),
};

const loader = new Loader();

document.addEventListener('DOMContentLoaded', receivingPopularFilms);

 export default async function receivingPopularFilms() {
  loader.show();
  const responce = await apiService.getPopularMovies();
  loader.hide();

  apiService.requestType = 'trending';
  buildingPagination(responce);
  return (refs.cardContainer.innerHTML = renderMarkupFilmsCard(
    responce.results
  ));
}

document.addEventListener('submit', gettingMoviesByKeyword);

async function gettingMoviesByKeyword(e) {
  e.preventDefault();

  apiService.query = refs.homeHeaderForm.query.value;
  apiService.requestType = 'search';
  console.log(apiService.requestType);

  loader.show();
  const responce = await apiService.fetchMovieByQuery();
  loader.hide();

  buildingPagination(responce);
  return (refs.cardContainer.innerHTML = renderMarkupFilmsCard(
    responce.results
  ));
}
