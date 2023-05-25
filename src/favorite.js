import { common } from './common';
import { createMarckup } from './helper/createMarckup';

const list = document.querySelector('.js-list');
const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
createMarckup(favorite, list);
