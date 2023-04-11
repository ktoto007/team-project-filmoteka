// Сюди бажано не лізти
import NewFilmApiServise from './filmsAPIServise';
// import refs from './refs';
import renderMarkupFilmsCard from './renderMarkupFilmsCard';
import Loader from './loader';

const refs = {
  homeHeaderForm: document.querySelector('.header__form'),
  cardContainer: document.querySelector('.cards-container'),
};

const apiService = new NewFilmApiServise();
const loader = new Loader();

document.addEventListener('DOMContentLoaded', receivingPopularFilms);

async function receivingPopularFilms() {
  loader.show();
  const responce = await apiService.getPopularMovies();
  loader.hide();

  return (refs.cardContainer.innerHTML = renderMarkupFilmsCard(
    responce.results
  ));
}

document.addEventListener('submit', gettingMoviesByKeyword);

async function gettingMoviesByKeyword(e) {
  e.preventDefault();

  apiService.type = 'search';
  apiService.query = refs.homeHeaderForm.query.value;

  loader.show();
  const responce = await apiService.fetchMovieByQuery();
  loader.hide();

  return (refs.cardContainer.innerHTML = renderMarkupFilmsCard(
    responce.results
  ));
}
