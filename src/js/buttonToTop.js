import { refs } from "./refs";

let scrolled = 0;

window.onload = function () {
    refs.buttonToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    })
    window.addEventListener('scroll', trackScroll)
}

function trackScroll() {
  scrolled = window.pageYOffset;
  let coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    refs.buttonToTop.classList.add('visually-button');
  }
  else {
    refs.buttonToTop.classList.remove('visually-button');
  }
}