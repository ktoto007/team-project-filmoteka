import { apiService } from './filmsAPIServise';
import { refs } from './refs' ;
import renderMarkupFilmsCard from './renderMarkupFilmsCard';
import { loader } from './loader';
import {lastPage, buildingPagination } from './renderingPagination';

refs.buttonsPagesList.addEventListener('click', renderingFilmsByPageNumber);
refs.buttonBack.addEventListener('click', goBackOnePage);
refs.buttonForward.addEventListener('click', goForwardOnePage);

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
