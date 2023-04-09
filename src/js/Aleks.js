
async function fetchMovieDetails(movieId) {
    const apiKey = 'aa05d9ef1feff0e96ac321d8773a5c67'; // замените на свой API-ключ
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
    const data = await response.json();
    return data;
  }
  
  
  // Определение функции для создания модального окна и заполнения его данными
  function createModal(movieData) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
  
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
  
    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close');
    closeBtn.innerHTML = '&times;';
  
    const title = document.createElement('h2');
    title.textContent = movieData.title;
  
    const releaseDate = document.createElement('p');
    releaseDate.textContent = `Дата выпуска: ${movieData.release_date}`;
  
    const overview = document.createElement('p');
    overview.textContent = movieData.overview;
  
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(title);
    modalContent.appendChild(releaseDate);
    modalContent.appendChild(overview);
  
    modal.appendChild(modalContent);
  
    document.body.appendChild(modal);
  
    // Добавление обработчика события на кнопку "Закрыть"
    closeBtn.addEventListener('click', () => {
      modal.remove();
    });
  }
  
  // Определение функции для обработки нажатия на кнопку и получения данных от API
  async function handleModalBtnClick() {
    const movieId = 400; // ID фильма, для которого нужно открыть модальное окно
    const movieData = await fetchMovieDetails(movieId);
    createModal(movieData);
  }
  
  // Добавление обработчика события на кнопку "Открыть модальное окно"
  const modalBtn = document.querySelector('#modalBtn');
  modalBtn.addEventListener('click', handleModalBtnClick);
  


  
  function openModal() {
    var modal = document.querySelector(".modal");
    if (!modal) {
      createModal();
      modal = document.querySelector(".modal");
    }
    modal.style.display = "block";
  }
  
  function closeModal() {
    var modal = document.querySelector(".modal");
    modal.style.display = "none";
  }
  console.log(createModal());
