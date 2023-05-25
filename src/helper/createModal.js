import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

function createModal(product) {
  const instance = basicLightbox.create(`
	   <div class="modal">
        <img src="${product.img}" alt="${product.name}" width="200"/>
        <h2>${product.name}</h2>
        <h3>${product.price} грн</h3>
        <p>${product.description}</p>
        <div>
          <button class="js-favorite">Add to favorite</button>
          <button class="js-basket">Add to basket</button>
        </div>
      </div>
`);
  instance.show();
}

export { createModal };
