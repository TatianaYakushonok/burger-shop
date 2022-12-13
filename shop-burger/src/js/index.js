import {
    modalProduct,
    catalogList,
    modalProductBtn
} from './elements.js';
import { navigationListController } from './navigationListController.js';
import { openModal } from './openModal.js';
import { renderListProduct } from './renderListProduct.js';

const burgerMax = {
    title: 'Бургер Макс',
    price: 10000,
    weight: 5000,
    calories: 15000,
    description: 'Огромный бургер для большой компании',
    image: './img/megaburger.jpg',
    ingredients: [
        'Пшеничная булочка',
        'Мега котлета из говядины',
        'Много сыра',
        'Листья салата',
        'Соус Чипотл'
    ]
};

const closeModal = (event) => {

    if(event.target.closest('.modal__close') 
      || event.target === modalProduct
      || event.key === 'Escape') {
        modalProduct.classList.remove('modal_open');
        document.removeEventListener('keydown', closeModal);
    };
};

catalogList.addEventListener('click', (e) => {
    const target = e.target;

    if(target.closest('.product__detail') 
      || target.closest('.product__image')) {
        openModal(burgerMax);
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
    navigationListController();
};

init();