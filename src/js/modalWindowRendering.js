import { apiService } from './filmsAPIServise';
import { libraryLogic } from './workWithLocalStorage';

//=================== Добавление обработчика события на кнопку "Открыть модальное окно"================
let modal;
let backdrop;
let btnWatched;
let btnQueue;
let film;
let moviesListWatched;
let moviesListQueue;
const body = document.body;
const cardsContainer = document.querySelector('.cards-container');
cardsContainer.addEventListener('click', handleModalBtnClick);

function handleModalBtnClick(event) {
  if (event.target.closest('.films-list__link')) {
    const idFilm = event.target.closest('.films-list__link').getAttribute('id');

    apiService.getMoviesDetails(idFilm).then(movieData => {
      film = movieData;
      createModal(movieData);
      createBackdrop();


      btnWatched = document.querySelector('.button-watched');
      btnQueue = document.querySelector('.button-queue');

      moviesListWatched = JSON.parse(localStorage.getItem('watched'));
      moviesListQueue = JSON.parse(localStorage.getItem('queue'));

      if (moviesListWatched) {
        const listWatched = moviesListWatched.find(
          movie => movie.id === film.id
        );
        if (listWatched) {
          btnWatched.textContent = 'Remove from Watched';
          btnQueue.setAttribute('disabled', '');
        }
      }

      if (moviesListQueue) {
        const listQueue = moviesListQueue.find(
          queueMovie => queueMovie.id === film.id
        );
        if (listQueue) {
          btnQueue.textContent = 'Remove from Queue';
          btnWatched.setAttribute('disabled', '');
        }
      }

      btnWatched.addEventListener('click', addFilmToListWatched);
      btnQueue.addEventListener('click', addFilmToListQueue);
    });
  }
}

function createModal(movieData) {
  modal = document.createElement('div');
  modal.classList.add('modal');
  body.classList.add('disabled-scroll');

  const modalHTML = `
      <div class="modal_content">
      <div class="close">
      <svg width="16" height="16" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 8L22 22" stroke="black" stroke-width="2"/>
  <path d="M8 22L22 8" stroke="black" stroke-width="2"/>
  </svg>
    </div>
        <img src="https://image.tmdb.org/t/p/w500/${
          movieData.poster_path
        }" class="modal_img">
        <div class="tablet_modal">
        <h2 class="main_text_modal">${movieData.title}</h2>
        <div class="modal_items_container">
          <ul class="modal_list modal-text">
            <li class="modal-list__item">Vote / Votes</li>
            <li class="modal-list__item">Popularity</li>
            <li class="modal-list__item">Original Title</li>
            <li class="modal-list__item">Genre</li>
          </ul>
          <ul class="modal_list modal_list--black modal-text">
            <li class="modal-list__item">
              <span class="modal-item__info vote_span">${movieData.vote_average.toFixed(
                1
              )}</span>
              <span class="delimiter"> / </span>
              <span class="modal-item__info vote_count_span">${
                movieData.vote_count
              }</span>
            </li>
            <li class="modal-list__item">${movieData.popularity.toFixed(1)}</li>
            <li class="modal-list__item">${movieData.title}</li>
            <li class="modal-list__item">${movieData.genres[0].name}</li>
          </ul>
        </div>
        <p class="about_modal_text modal-text">About</p>
        <p class="overview_modal modal-text">${movieData.overview}</p>
        <div class="buttons-modal">
          <button class="button-modal button-watched" type="button">Add to Watched</button>
          <button class="button-modal button-queue" type="button">Add to Queue</button>
        </div>
      </div>
      </div>
    `;

  modal.innerHTML = modalHTML;

  document.body.appendChild(modal);

  const closeBtn = modal.querySelector('.close');

  closeBtn.addEventListener('click', () => {
    closeModal();
    backdrop.remove();
  });

  const closeOnEsc = event => {
    if (event.key === 'Escape') {
      closeModal();
      backdrop.remove();
    }
  };

  document.addEventListener('keydown', closeOnEsc);
}

//===========БЕКДРОП=================
function createBackdrop() {
  backdrop = document.createElement('div');
  backdrop.classList.add('modal-backdrop');

  document.body.appendChild(backdrop);

  const closeBackdrop = () => {
    // backdrop.remove();
    closeModal();
  };

  backdrop.addEventListener('click', closeBackdrop);

  const closeOnEsc = event => {
    if (event.key === 'Escape') {
      closeBackdrop();
      document.removeEventListener('keydown', closeOnEsc);
    }
  };

  document.addEventListener('keydown', closeOnEsc);
}

function closeModal() {
  modal.remove();
  backdrop.remove();
  body.classList.remove('disabled-scroll');
}

function addFilmToListWatched(event) {
  if (event.currentTarget.textContent === 'Add to Watched') {
    btnQueue.setAttribute('disabled', '');
    event.currentTarget.textContent = 'Remove from Watched';
    libraryLogic.addToLocalStorage(film, 'watched');
  } else if (event.currentTarget.textContent === 'Remove from Watched') {
    event.currentTarget.textContent = 'Add to Watched';
    btnQueue.removeAttribute('disabled', '');
    libraryLogic.removeFromLocalstorage(film, 'watched');
  }
}

function addFilmToListQueue(event) {
  if (event.currentTarget.textContent === 'Add to Queue') {
    btnWatched.setAttribute('disabled', '');
    event.currentTarget.textContent = 'Remove from Queue';
    libraryLogic.addToLocalStorage(film, 'queue');
  } else if (event.currentTarget.textContent === 'Remove from Queue') {
    event.currentTarget.textContent = 'Add to Queue';
    btnWatched.removeAttribute('disabled', '');
    libraryLogic.removeFromLocalstorage(film, 'queue');
  }
}
