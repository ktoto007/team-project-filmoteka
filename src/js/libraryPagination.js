import renderMarkupFilmsCard from './renderMarkupFilmsCard';
import { loader } from './loader'
import { lastPage, buildingPagination } from './renderingPagination';
import { libraryLogic } from './workWithLocalStorage';
import { refs } from './refs';

function renderingPaginationForFirstPage() {
        const filmsWatched = libraryLogic.getFromStorage('watched');
        const filmsAmount = filmsWatched.length;
        const pages = {
            page: 1,
            total_pages: Math.ceil(filmsAmount / 20)
        };
        if (filmsAmount === 0) {
            return 
    }
        if (pages.total_pages === 1) {
            buildingPagination(pages);
        } else {
                
                buildingPagination(pages)
        }
}

renderingPaginationForFirstPage()

refs.buttonsPagesList.addEventListener('click', renderingLibraryByPageNumber)

function renderingLibraryByPageNumber(evt) {
    if (evt.target.type !== 'button') {
        return
    }
    const selectLibrary = document.querySelector('.this-library');
    const queryPage = Number(evt.target.textContent);
    console.log(selectLibrary.textContent.trim().toLocaleLowerCase())
    const films = libraryLogic.getFromStorage(`${selectLibrary.textContent.trim().toLocaleLowerCase()}`);
    const filmsAmount = films.length;
    const pages = {
        page: queryPage,
        total_pages: Math.ceil(filmsAmount / 20)
    };
    if (pages.page === 1) {
        const filmsForOnePage = [...films].splice(0, 20);
        buildingPagination(pages);
        filmsForOnePage.map(item => {
            const keys = item.genres.map(item => Object.values(item)[0]);
            item.genre_ids = keys;
        });
        refs.cardContainer.innerHTML = renderMarkupFilmsCard(filmsForOnePage);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
        const filmsForPage = [...films].splice((pages.page * 10 + (pages.page - 2) * 10), 20);
        buildingPagination(pages);
        filmsForPage.map(item => {
            const keys = item.genres.map(item => Object.values(item)[0]);
            item.genre_ids = keys;
        });
        refs.cardContainer.innerHTML = renderMarkupFilmsCard(filmsForPage);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
}

// Слухач на кнопку назад
refs.buttonBack.addEventListener('click', goBackOnePageLibrary);
// Слухач на клік по кнопці вперед
refs.buttonForward.addEventListener('click', goForwardOnePageLibrary);

function goBackOnePageLibrary() {
    const selectLibrary = document.querySelector('.this-library');
    const queryPage = Number(document.querySelector('.current-page').textContent) - 1;
    const films = libraryLogic.getFromStorage(`${selectLibrary.textContent.trim().toLocaleLowerCase()}`);
    const filmsAmount = films.length;
    const pages = {
        page: queryPage,
        total_pages: Math.ceil(filmsAmount / 20)
    };
        if (queryPage !== 1) {
            const filmsForPage = [...films].splice((pages.page * 10 + (pages.page - 2) * 10), 20);
        buildingPagination(pages);
        filmsForPage.map(item => {
            const keys = item.genres.map(item => Object.values(item)[0]);
            item.genre_ids = keys;
        });
        refs.cardContainer.innerHTML = renderMarkupFilmsCard(filmsForPage);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        
        return
    }
}

function goForwardOnePageLibrary() {
    const selectLibrary = document.querySelector('.this-library');
    const queryPage = Number(document.querySelector('.current-page').textContent) + 1;
    const films = libraryLogic.getFromStorage(`${selectLibrary.textContent.trim().toLocaleLowerCase()}`);
    const filmsAmount = films.length;
    const pages = {
        page: queryPage,
        total_pages: Math.ceil(filmsAmount / 20)
    };
    if (queryPage > pages.total_pages) {
        return
    } else {
        const filmsForPage = [...films].splice((pages.page * 10 + (pages.page - 2) * 10), 20);
        buildingPagination(pages);
        filmsForPage.map(item => {
            const keys = item.genres.map(item => Object.values(item)[0]);
            item.genre_ids = keys;
        });
        refs.cardContainer.innerHTML = renderMarkupFilmsCard(filmsForPage);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        
        return
    }
}
