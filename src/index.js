import { common } from './common';
import { createMarckup } from './helper/createMarckup';
import { createModal } from './helper/createModal';
import { instruments } from './helper/instruments';
import 'basiclightbox/dist/basicLightbox.min.css';

const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');
const favoriteArr = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
const basketArr = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];

createMarckup(instruments, list);
list.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains('js-info')) {
    const product = findProduct(evt.target);
    createModal(product);
  }

  if (evt.target.classList.contains('js-basket')) {
    const product = findProduct(evt.target);
    basketArr.push(product);
    localStorage.setItem(common.KEY_BASKET, JSON.stringify(basketArr));
  }

  if (evt.target.classList.contains('js-favorite')) {
    const product = findProduct(evt.target);
    const favoriteInStorage = favoriteArr.some(({ id }) => id === product.id);

    if (favoriteInStorage) {
      return;
    }

    favoriteArr.push(product);
    localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favoriteArr));
  }
}

function findProduct(elem) {
  const productId = Number(elem.closest('.js-card').dataset.id);
  return instruments.find(({ id }) => id === productId);
}
