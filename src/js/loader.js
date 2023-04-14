//  class Loader {
//   constructor() {
//     this.loaderElement = document.createElement('div');
//     this.loaderElement.className = 'loader';
//   }

//   show() {
//     document.body.appendChild(this.loaderElement);
//   }

//   hide() {
//     this.loaderElement.remove();
//   }
// }

// export const loader = new Loader();

class Loader {
  constructor() {
    this.loaderElement = document.createElement('div');
    this.loaderElement.classList.add('loader');

    const filmstripElement = document.createElement('div');
    filmstripElement.classList.add('loader__filmstrip');

    const textElement = document.createElement('p');
    textElement.classList.add('loader__text');
    textElement.textContent = 'loading';

    this.loaderElement.appendChild(filmstripElement);
    this.loaderElement.appendChild(textElement);
  }

  show() {
    document.body.appendChild(this.loaderElement);
  }

  hide() {
    document.body.removeChild(this.loaderElement);
  }
}

export const loader = new Loader();