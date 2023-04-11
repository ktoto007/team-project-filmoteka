import { apiService } from './filmsAPIServise';
import { refs } from './mainRendering' ;
import renderMarkupFilmsCard from './renderMarkupFilmsCard';

const buttonBack = document.querySelector('.button-back');
const buttonForward = document.querySelector('.button-forward');
const buttonsPagesList = document.querySelector('.buttons-pages');

let screenWidth = null;
let lastPage = null;

// Рендеринг пагінації
export default function buildingPagination({ page, total_pages: totalPages }) {
    screenWidth = window.screen.width;
    lastPage = totalPages;
    
// Пагінація для Mobile
  if (screenWidth < 768) {
    if (page < 4) {
      buttonsPagesList.innerHTML = `<li><button class="button-pagination button-page" type="button" id="page-1">1</button></li>
    <li><button class="button-pagination button-page" type="button" id="page-2">2</button></li>
    <li><button class="button-pagination button-page" type="button" id="page-3">3</button></li>
    <li><button class="button-pagination button-page" type="button" id="page-4">4</button></li>
    <li><button class="button-pagination button-page" type="button id="page-5">5</button></li>
`;
        const currentPage = document.querySelector(`#page-${page}`);
        currentPage.classList.add('current-page')
        return;
    }

    if (page + 2 >= totalPages) {
      buttonsPagesList.innerHTML = `
    <li><button class="button-pagination button-page" type="button" id="page-${totalPages - 4}">${totalPages - 4}</button></li>
    <li><button class="button-pagination button-page" type="button" id="page-${totalPages - 3}">${totalPages - 3}</button></li>
    <li><button class="button-pagination button-page" type="button" id="page-${totalPages - 2}">${totalPages - 2}</button></li>
    <li><button class="button-pagination button-page" type="button" id="page-${totalPages - 1}">${totalPages - 1}</button></li>
    <li><button class="button-pagination button-page" type="button" id="page-${totalPages}">${totalPages}</button></li>
    `;
        const currentPage = document.querySelector(`#page-${page}`);
        currentPage.classList.add('current-page')
        return;
    }
    if (page >= 4) {
      buttonsPagesList.innerHTML = `<li><button class="button-pagination button-page" type="button">${page - 2}</button></li>
    <li><button class="button-pagination button-page" type="button">${page - 1}</button></li>
    <li><button class="button-pagination button-page current-page" type="button">${page}</button></li>
    <li><button class="button-pagination button-page" type="button">${page + 1}</button></li>
    <li><button class="button-pagination button-page" type="button">${page + 2}</button></li>
    `;
      return;
    }
  }

    // Пагінація для Tablet, Desktop
  if (page < 5) {
    buttonsPagesList.innerHTML = `<li><button class="button-pagination button-page" type="button" id="page-1">1</button></li>
    <li><button class="button-pagination button-page" type="button" id="page-2">2</button></li>
    <li><button class="button-pagination button-page" type="button" id="page-3">3</button></li>
    <li><button class="button-pagination button-page" type="button" id="page-4">4</button></li>
    <li><button class="button-pagination button-page" type="button" id="page-5">5</button></li>
    <li><button class="button-pagination button-page" type="button" id="page-6">6</button></li>
    <li><button class="button-pagination button-page" type="button" id="page-7">7</button></li>
    <li><button class="button-pagination button-page" type="button">...</button></li>
    <li><button class="button-pagination button-page" type="button">${totalPages}</button></li>
`;
    const currentPage = document.querySelector(`#page-${page}`);
    currentPage.classList.add('current-page')
    return;
  }

  if (page + 5 >= totalPages) {
    buttonsPagesList.innerHTML = `<li><button class="button-pagination button-page" type="button">1</button></li>
    <li><button class="button-pagination button-page" type="button">...</button></li>
    <li><button class="button-pagination button-page" type="button" id="page-${totalPages-6}">${totalPages - 6}</button></li>
    <li><button class="button-pagination button-page" type="button" id="page-${totalPages-5}">${totalPages - 5}</button></li>
    <li><button class="button-pagination button-page" type="button" id="page-${totalPages-4}">${totalPages - 4}</button></li>
    <li><button class="button-pagination button-page" type="button" id="page-${totalPages-3}">${totalPages - 3}</button></li>
    <li><button class="button-pagination button-page" type="button" id="page-${totalPages-2}">${totalPages - 2}</button></li>
    <li><button class="button-pagination button-page" type="button" id="page-${totalPages-1}">${totalPages - 1}</button></li>
    <li><button class="button-pagination button-page" type="button" id="page-${totalPages}">${totalPages}</button></li>
    `;
      
    const currentPage = document.querySelector(`#page-${page}`);
    currentPage.classList.add('current-page')
    return;
  }

  if (page >= 5) {
    buttonsPagesList.innerHTML = `
        <li><button class="button-pagination button-page" type="button">1</button></li>
        <li><button class="button-pagination button-page" type="button">...</button></li>
        <li><button class="button-pagination button-page" type="button">${page - 2}</button></li>
        <li><button class="button-pagination button-page" type="button">${page - 1}</button></li>
        <li><button class="button-pagination button-page current-page" type="button">${page}</button></li>
        <li><button class="button-pagination button-page" type="button">${page + 1}</button></li>
        <li><button class="button-pagination button-page" type="button">${page + 2}</button></li>
        <li><button class="button-pagination button-page" type="button">...</button></li>
        <li><button class="button-pagination button-page" type="button">${totalPages}</button></li>
    `;
      return;
  }
}

// Слухач на клік по кнопці з номером сторінки
buttonsPagesList.addEventListener('click', renderingFilmsByPageNumber);
// Слухач на клік по кнопці назад
buttonBack.addEventListener('click', goBackOnePage);
// Слухач на клік по кнопці вперед
buttonForward.addEventListener('click', goForwardOnePage);

function renderingFilmsByPageNumber(evt) {
    if (evt.target.type !== 'button') {
    return
    }

    if (apiService.requestType === 'trending') {
        const fetchPage = evt.target.textContent;
        apiService.page = Number(fetchPage);
        apiService.getPopularMovies().then(data => {
            buildingPagination(data);
            refs.cardContainer.innerHTML = renderMarkupFilmsCard(data.results)
        }).catch(error => error.messsge);
        return
    }

    if (apiService.requestType === 'search') {
        const fetchPage = evt.target.textContent;
        apiService.page = Number(fetchPage);
        apiService.fetchMovieByQuery().then(data => {
            buildingPagination(data);
            refs.cardContainer.innerHTML = renderMarkupFilmsCard(data.results)
        }).catch(error => error.messsge);
    }
}

function goBackOnePage() {
    if (apiService.requestType === 'trending') {
        if (apiService.page !== 1) {
            apiService.page -= 1;
            apiService.getPopularMovies().then(data => {
                buildingPagination(data);
                refs.cardContainer.innerHTML = renderMarkupFilmsCard(data.results)
            }).catch(error => error.message);
        }
        return
    }
    if (apiService.requestType === 'search') {
        if (apiService.page !== 1) {
            apiService.page -= 1;
            apiService.fetchMovieByQuery().then(data => {
                buildingPagination(data);
                refs.cardContainer.innerHTML = renderMarkupFilmsCard(data.results)
            }).catch(error => error.message);
        }
    }
}

function goForwardOnePage() {
    if (apiService.requestType === 'trending') {
        if (apiService.page !== lastPage) {
            apiService.page += 1;
            apiService.getPopularMovies().then(data => {
                buildingPagination(data);
                refs.cardContainer.innerHTML = renderMarkupFilmsCard(data.results);
            }).catch(error => error.message);
        }
    }

    if (apiService.requestType === 'search') {
        if (apiService.page !== lastPage) {
            apiService.page += 1;
            apiService.fetchMovieByQuery().then(data => {
                buildingPagination(data);
                refs.cardContainer.innerHTML = renderMarkupFilmsCard(data.results)
            }).catch(error => error.message);
        }
    }
}
