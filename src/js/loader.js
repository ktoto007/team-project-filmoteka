 class Loader {
  constructor() {
    this.loaderElement = document.createElement('div');
    this.loaderElement.className = 'loader';
  }

  show() {
    document.body.appendChild(this.loaderElement);
  }

  hide() {
    this.loaderElement.remove();
  }
}

export const loader = new Loader();