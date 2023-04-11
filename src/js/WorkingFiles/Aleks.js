async function fetchMovieDetails(movieId) {
    const apiKey = 'aa05d9ef1feff0e96ac321d8773a5c67';
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
    );
    const data = await response.json();
    return data;
  }

// import movieId from './Oleksandra';
  // Определение функции для создания модального окна и заполнения его данными
  
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
        <img src="https://image.tmdb.org/t/p/w500/${movieData.poster_path}" class="modal_img">
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
              <span class="vote_span">${movieData.vote_average.toFixed(1)}</span>
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
        <div class="buttons">
          <button class="button-watched">Add to Watched</button>
          <button class="button-queue">Add to Queue</button>
        </div>
      </div>
      </div>
    `;
  
    modal.innerHTML += modalHTML;
  
    document.body.appendChild(modal);
  
    const closeBtn = modal.querySelector('.close');
  
    closeBtn.addEventListener('click', () => {
      closeModal();
      backdrop.remove();
    });
  
    const closeOnEsc = (event) => {
      if (event.key === 'Escape') {
        closeModal();
        backdrop.remove();
      }
    }
  
    document.addEventListener('keydown', closeOnEsc);
  }
  
  //================= Определение функции для обработки нажатия на кнопку и получения данных от API================
  async function handleModalBtnClick() {
    const movieId = 255; // ID фильма, для которого нужно открыть модальное окно==========================
    const movieData = await fetchMovieDetails(movieId);
    createModal(movieData);
    createBackdrop();
  }
  
  
  //===========БЕКДРОП=================
  function createBackdrop() {
    backdrop = document.createElement('div');
    backdrop.classList.add('modal-backdrop');
  
    document.body.appendChild(backdrop);
  
    const closeBackdrop = () => {
      backdrop.remove();
      closeModal();
    }
  
    backdrop.addEventListener('click', closeBackdrop);
  
    const closeOnEsc = (event) => {
      if (event.key === 'Escape') {
        closeBackdrop();
        backdrop.remove();
  
      }
    }
  
    document.addEventListener('keydown', closeOnEsc);
  }
  
  //=================== Добавление обработчика события на кнопку "Открыть модальное окно"================
  const modalBtn = document.querySelector('#modalBtn');
  modalBtn.addEventListener('click', handleModalBtnClick);
  
  
  //========
  
  function closeModal() {
    modal.remove();
    backdrop.remove();
    document.removeEventListener('keydown', closeOnEsc);
  }
  