import { refs } from './refs';

export let lastPage = null; 

export function buildingPagination({ page, total_pages: totalPages }) {
   const screenWidth = window.screen.width;
    lastPage = totalPages;
    
// Пагінація для Mobile
  if (screenWidth < 768) {
    if (page < 4) {
      refs.buttonsPagesList.innerHTML = `<li><button class="button-pagination button-page" type="button" id="page-1">1</button></li>
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
      refs.buttonsPagesList.innerHTML = `
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
      refs.buttonsPagesList.innerHTML = `<li><button class="button-pagination button-page" type="button">${page - 2}</button></li>
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
    refs.buttonsPagesList.innerHTML = `<li><button class="button-pagination button-page" type="button" id="page-1">1</button></li>
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
    refs.buttonsPagesList.innerHTML = `<li><button class="button-pagination button-page" type="button">1</button></li>
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
    refs.buttonsPagesList.innerHTML = `
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