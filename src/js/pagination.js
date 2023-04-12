import { apiService } from './filmsAPIServise';
import { refs } from './refs' ;
import renderMarkupFilmsCard from './renderMarkupFilmsCard';
import { loader } from './loader';
import {lastPage, buildingPagination } from './renderingPagination';

const buttonBack = document.querySelector('.button-back');
const buttonForward = document.querySelector('.button-forward');
const buttonsPagesList = document.querySelector('.buttons-pages');

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
        loader.show();
        apiService.getPopularMovies().then(data => {
            buildingPagination(data);
            refs.cardContainer.innerHTML = renderMarkupFilmsCard(data.results);
            try { localStorage.setItem('currentPage', JSON.stringify(data)) } catch (error) { console.log(error.message) }
        }).catch(error => error.message).finally(() => loader.hide());
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        return
    }

    if (apiService.requestType === 'search') {
        const fetchPage = evt.target.textContent;
        apiService.page = Number(fetchPage);
        loader.show();
        apiService.fetchMovieByQuery().then(data => {
            buildingPagination(data);
            refs.cardContainer.innerHTML = renderMarkupFilmsCard(data.results)
            try { localStorage.setItem('currentPage', JSON.stringify(data)) } catch (error) { console.log(error.message) }
        }).catch(error => error.message).finally(() => loader.hide());
        
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); 
    }
}

function goBackOnePage() {
    if (apiService.requestType === 'trending') {
        if (apiService.page !== 1) {
            apiService.page -= 1;
            loader.show();
            apiService.getPopularMovies().then(data => {
                buildingPagination(data);
                refs.cardContainer.innerHTML = renderMarkupFilmsCard(data.results);
                try { localStorage.setItem('currentPage', JSON.stringify(data)) } catch (error) { console.log(error.message) }
            }).catch(error => error.message).finally(() => loader.hide());
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        }
        return
    }
    if (apiService.requestType === 'search') {
        if (apiService.page !== 1) {
            apiService.page -= 1;
            loader.show();
            apiService.fetchMovieByQuery().then(data => {
                buildingPagination(data);
                refs.cardContainer.innerHTML = renderMarkupFilmsCard(data.results);
                try { localStorage.setItem('currentPage', JSON.stringify(data)) } catch (error) { console.log(error.message) }
            }).catch(error => error.message).finally(() => loader.hide());
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        }
    }
}

function goForwardOnePage() {
    if (apiService.requestType === 'trending') {
        if (apiService.page !== lastPage) {
            apiService.page += 1;
            loader.show();
            apiService.getPopularMovies().then(data => {
                buildingPagination(data);
                refs.cardContainer.innerHTML = renderMarkupFilmsCard(data.results);
                try { localStorage.setItem('currentPage', JSON.stringify(data)) } catch (error) { console.log(error.message) }
            }).catch(error => error.message).finally(() => loader.hide());
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        }
    }

    if (apiService.requestType === 'search') {
        if (apiService.page !== lastPage) {
            apiService.page += 1;
            loader.show();
            apiService.fetchMovieByQuery().then(data => {
                buildingPagination(data);
                refs.cardContainer.innerHTML = renderMarkupFilmsCard(data.results)
                try { localStorage.setItem('currentPage', JSON.stringify(data)) } catch (error) { console.log(error.message) }
                 loader.hide();
            }).catch(error => error.message).finally(() => loader.hide());
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        }
    }
}

// Pagination for Library
// const films = [{ "adult": false, "backdrop_path": "/wybmSmviUXxlBmX44gtpow5Y9TB.jpg", "id": 594767, "title": "Shazam! Fury of the Gods", "original_language": "en", "original_title": "Shazam! Fury of the Gods", "overview": "Billy Batson and his foster siblings, who transform into superheroes by saying \"Shazam!\", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.", "poster_path": "/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg", "media_type": "movie", "genre_ids": [28, 35, 14], "popularity": 2123.685, "release_date": "2023-03-15", "video": false, "vote_average": 6.951, "vote_count": 617 }, { "adult": false, "backdrop_path": "/eSVu1FvGPy86TDo4hQbpuHx55DJ.jpg", "id": 700391, "title": "65", "original_language": "en", "original_title": "65", "overview": "After a catastrophic crash on an unknown planet, pilot Mills quickly discovers he's actually stranded on Earth…65 million years ago. Now, with only one chance at rescue, Mills and the only other survivor, Koa, must make their way across an unknown terrain riddled with dangerous prehistoric creatures in an epic fight to survive.", "poster_path": "/rzRb63TldOKdKydCvWJM8B6EkPM.jpg", "media_type": "movie", "genre_ids": [878, 12, 53, 28], "popularity": 699.201, "release_date": "2023-03-02", "video": false, "vote_average": 6.386, "vote_count": 361 }, { "adult": false, "backdrop_path": "/ytdebEE0ndYLSTEctPgh8e0vaBs.jpg", "id": 76600, "title": "Avatar: The Way of Water", "original_language": "en", "original_title": "Avatar: The Way of Water", "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.", "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg", "media_type": "movie", "genre_ids": [878, 12, 28], "popularity": 8112.525, "release_date": "2022-12-14", "video": false, "vote_average": 7.746, "vote_count": 6860 }];
// try { localStorage.setItem('pagination', JSON.stringify(films)) } catch(error) {console.log(error.message)}

// function renderingPaginationForQueque() {
//     try {
//         const filmsQueque = JSON.parse(localStorage.getItem('pagination'));
//         const filmsAmount = filmsQueque.length;
//         const pages = {
//             page: 1,
//             total_pages: Math.ceil(filmsAmount / 20)
//         };
//         if (pages.total_pages === 1) {
//             buildingPagination(pages);
//             refs.cardContainer.innerHTML = renderMarkupFilmsCard(filmsQueque);
//         } else {
//             for (i = 0; i < filmsAmount; i += 20){
//                 const filmsForOnePage = filmsQueque.slice(i, i + 20);
//             }
//         }
//         console.log (totalPages)
//     } catch (error) { console.log(error.message) }
// }

// renderingPaginationForQueque()