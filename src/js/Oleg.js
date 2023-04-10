// Функція, яка показує спіннер
export function showLoad() {
  const loader = document.createElement('div');
  loader.className = 'loader';
  document.body.appendChild(loader);
}

// Функція, яка ховає спіннер 
export function hideLoad() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.remove();
  }
}

// showLoad();
// hideLoad();