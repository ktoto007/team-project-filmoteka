import renderMarkupFilmsCard from './renderMarkupFilmsCard';
import { lastPage, buildingPagination } from './renderingPagination';
import { libraryLogic } from './workWithLocalStorage';
import { refs } from './refs';

refs.buttonsPagesList.addEventListener('click', renderingLibraryByPageNumber);
refs.buttonBack.addEventListener('click', goBackOnePageLibrary);
refs.buttonForward.addEventListener('click', goForwardOnePageLibrary);

function renderingLibraryByPageNumber(evt) {
    if (evt.target.type !== 'button') {
        return
    }

    const selectLibrary = document.querySelector('.this-library');
    libraryLogic.currentPage = Number(evt.target.textContent);
    const films = libraryLogic.getFromStorage(`${selectLibrary.textContent.trim().toLocaleLowerCase()}`);
    const filmsAmount = films.length;
    libraryLogic.totalPages = Math.ceil(filmsAmount / 20);

    if (libraryLogic.currentPage === 1) {
        const filmsForOnePage = [...films].splice(0, 20);
        buildingPagination(libraryLogic.pages);
        filmsForOnePage.map(item => {
            const keys = item.genres.map(item => Object.values(item)[0]);
            item.genre_ids = keys;
        });
        refs.cardContainer.innerHTML = renderMarkupFilmsCard(filmsForOnePage);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
        const filmsForOnePage = [...films].splice((libraryLogic.currentPage * 10 + (libraryLogic.currentPage - 2) * 10), 20);
        buildingPagination(libraryLogic.pages);
        filmsForOnePage.map(item => {
            const keys = item.genres.map(item => Object.values(item)[0]);
            item.genre_ids = keys;
        });
        refs.cardContainer.innerHTML = renderMarkupFilmsCard(filmsForOnePage);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
}

function goBackOnePageLibrary() {
    if (libraryLogic.currentPage === 1) {
        return
    }

    const selectLibrary = document.querySelector('.this-library');
    libraryLogic.currentPage -= 1;
    const films = libraryLogic.getFromStorage(`${selectLibrary.textContent.trim().toLocaleLowerCase()}`);
    const filmsAmount = films.length;
    libraryLogic.totalPages = Math.ceil(filmsAmount / 20);

    const filmsForOnePage = films.slice(((libraryLogic.currentPage-1) * 20), (libraryLogic.currentPage * 20));
    buildingPagination(libraryLogic.pages);
    filmsForOnePage.map(item => {
    const keys = item.genres.map(item => Object.values(item)[0]);
    item.genre_ids = keys;
        });
    refs.cardContainer.innerHTML = renderMarkupFilmsCard(filmsForOnePage);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    
}

function goForwardOnePageLibrary() {
    if (libraryLogic.currentPage === libraryLogic.totalPages) {
        return
    }

    const selectLibrary = document.querySelector('.this-library');
    libraryLogic.currentPage += 1;
    const films = libraryLogic.getFromStorage(`${selectLibrary.textContent.trim().toLocaleLowerCase()}`);
    const filmsAmount = films.length;
    libraryLogic.totalPages = Math.ceil(filmsAmount / 20);

   const filmsForOnePage = films.slice(((libraryLogic.currentPage-1) * 20), (libraryLogic.currentPage * 20));
    buildingPagination(libraryLogic.pages);
    filmsForOnePage.map(item => {
    const keys = item.genres.map(item => Object.values(item)[0]);
    item.genre_ids = keys;
        });
    refs.cardContainer.innerHTML = renderMarkupFilmsCard(filmsForOnePage);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

export function renderingPaginationForFirstPageWatched() {
    const filmsWatched = libraryLogic.getFromStorage('watched');
        const filmsAmount = filmsWatched.length;
        libraryLogic.currentPage = 1;
        libraryLogic.totalPages = Math.ceil(filmsAmount / 20);
        
    if (filmsAmount === 0) {
        refs.buttonsPagesList.innerHTML = '';
        refs.buttonBack.classList.add('button-hidden');
        refs.buttonForward.classList.add('button-hidden')

        return
    } 
        refs.buttonBack.classList.remove('button-hidden');
    refs.buttonForward.classList.remove('button-hidden');
        buildingPagination(libraryLogic.pages)
    }

export function renderingPaginationForFirstPageQueue() {
    const filmsQueue = libraryLogic.getFromStorage('queue');
    const filmsAmount = filmsQueue.length;
    libraryLogic.currentPage = 1;
        libraryLogic.totalPages = Math.ceil(filmsAmount / 20);
        
    if (filmsAmount === 0) {
        refs.buttonsPagesList.innerHTML = '';
        refs.buttonBack.classList.add('button-hidden');
        refs.buttonForward.classList.add('button-hidden')
            return 
    }
    
    refs.buttonBack.classList.remove('button-hidden');
    refs.buttonForward.classList.remove('button-hidden');
    buildingPagination(libraryLogic.pages);
    }
    
