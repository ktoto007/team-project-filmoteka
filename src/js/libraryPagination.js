import renderMarkupFilmsCard from './renderMarkupFilmsCard';
import { loader } from './loader'
import { lastPage, buildingPagination } from './renderingPagination';
import { libraryLogic } from './workWithLocalStorage';
import { refs } from './refs';

const buttonBack = document.querySelector('.button-back');
const buttonForward = document.querySelector('.button-forward');
const buttonsPagesList = document.querySelector('.buttons-pages');

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
                const filmsForOnePage = filmsWatched.slice(0, 20);
                buildingPagination(pages)
        }
}

renderingPaginationForFirstPage()

// buttonsPagesList.addEventListener('click', (evt) => {
//     if (evt.target.type !== 'button') {
//     return
//     }
//   const queryPage = evt.target.textContent;
//   const films = libraryLogic.getFromStorage('watched');
//   console.log(films)
//         const filmsAmount = films.length;
//         const pages = {
//             page: Number(queryPage),
//             total_pages: Math.ceil(filmsAmount / 20)
//         };
//         if (pages.page === 1) {
//             renderingPaginationForFirstPage();
//             refs.cardContainer.innerHTML = renderMarkupFilmsCard(films);
//             return
//         }
//         const filmsForPage = films.slice(pages.page*10, pages.page*20);
//                 buildingPagination(pages);
//                 refs.cardContainer.innerHTML = renderMarkupFilmsCard(filmsForPage);
// })

