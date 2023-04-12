import { apiService } from './filmsAPIServise';

//=================== Добавление обработчика события на кнопку "Открыть модальное окно"================
let modal;
let backdrop;
let btnWatched;
let btnQueue;
const cardsContainer = document.querySelector('.cards-container');
cardsContainer.addEventListener('click', handleModalBtnClick);

function handleModalBtnClick(event) {
  if (event.target.closest('.films-list__link')) {
    const idFilm = event.target.closest('.films-list__link').getAttribute('id');

    apiService.getMoviesDetails(idFilm).then(movieData => {
      createModal(movieData);
      createBackdrop();
    });
  }
}

function createModal(movieData) {
  modal = document.createElement('div');
  modal.classList.add('modal');

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
          <ul class="modal_list">
            <li>Vote / Votes</li>
            <li>Popularity</li>
            <li>Original Title</li>
            <li>Genre</li>
          </ul>
          <ul class="modal_list_value">
            <li>
              <span class="vote_span">${movieData.vote_average.toFixed(
                1
              )}</span>
              <span class="delimiter"> / </span>
              <span class="vote_count_span">${movieData.vote_count}</span>
            </li>
            <li>${movieData.popularity.toFixed(1)}</li>
            <li>${movieData.title}</li>
            <li>${movieData.genres[0].name}</li>
          </ul>
        </div>
        <p class="about_modal_text">About</p>
        <p class="overview_modal">${movieData.overview}</p>
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

  btnWatched = document.querySelector('.button-watched');
  btnQueue = document.querySelector('.button-queue');
  console.log(btnWatched);
  console.log(btnQueue);
  btnWatched.addEventListener('click', openWatchedList);
  btnQueue.addEventListener('click', addFilmToQueue);

  
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
}

function openWatchedList(event) {
    console.log('виконую функцію watched')
    btnQueue.setAttribute('disabled', '')

    if (event.currentTarget.textContent === 'Add to Watched') {
        event.currentTarget.textContent = 'Remove from Watched';
        return
    } else if(event.currentTarget.textContent === 'Remove from Watched') {
        event.currentTarget.textContent = 'Add to Watched'
        btnQueue.removeAttribute('disabled');
    }

  }

function addFilmToQueue() {
    console.log('виконую функцію Queue')
  }