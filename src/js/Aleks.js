
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


    const image = document.createElement('img');
  image.src = `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`;
  image.classList.add('modal_img')
  
    const voteAverage = document.createElement('p');
    voteAverage.textContent = `Vote / Votes: ${movieData.vote_average}/ ${movieData.vote_count}`;

    const popularity = document.createElement('p');
    popularity.textContent = `Popularity: ${movieData.popularity}`;

    const titleOriginal = document.createElement('p');
    titleOriginal.textContent = `Original Title: ${movieData.title}`;

    const genre = document.createElement('p');
    genre.textContent = `Genre: ${movieData.genres.map(g => g.name).join(', ')}`;
  
    const overview = document.createElement('p');
    overview.textContent = movieData.overview;

    const addToWatched = document.createElement('button');
    addToWatched.classList.add('button-watched');
    addToWatched.textContent = `Add To Watched`

    const addToQueue = document.createElement('button');
    addToQueue.classList.add('button-queue');
    addToQueue.textContent = `Add To Queue`


  
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(image);
    modalContent.appendChild(title);

    modalContent.appendChild(voteAverage);
    modalContent.appendChild(popularity);
    modalContent.appendChild(titleOriginal);
    modalContent.appendChild(genre);
    modalContent.appendChild(overview);
  
    modal.appendChild(modalContent);

    modalContent.appendChild(addToWatched)
    modalContent.appendChild(addToQueue)

  
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
