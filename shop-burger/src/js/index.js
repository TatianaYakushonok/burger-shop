import { 
    cartInit 
} from './cart.js';
import {
    modalProduct,
    catalogList,
    modalProductBtn
} from './elements.js';
import { navigationListController } from './navigationListController.js';
import { openModal } from './openModal.js';
import { renderListProduct } from './renderListProduct.js';

const closeModal = (event) => {

    if (event.target.closest('.modal__close')
        || event.target === modalProduct
        || event.key === 'Escape') {
        modalProduct.classList.remove('modal_open');
        document.removeEventListener('keydown', closeModal);
    };
};

catalogList.addEventListener('click', (e) => {
    const target = e.target;

    if (target.closest('.product__detail')
        || target.closest('.product__image')) {
        const id = target.closest('.product').dataset.idProduct;
        openModal(id);
        modalProductBtn.focus();
        document.addEventListener('keydown', closeModal);
    };
});

/*const closeModal = ({target, currentTarget}) => {

    if(target.closest('.modal__close') 
      || target === currentTarget) {
        currentTarget.classList.remove('modal_open');
    };

    if (event.key === 'Escape') {
        modalProduct.classList.remove('modal_open');
    }
};*/

modalProduct.addEventListener('click', closeModal);

const init = () => {
    renderListProduct();
    navigationListController(renderListProduct);
    cartInit();
};

init();