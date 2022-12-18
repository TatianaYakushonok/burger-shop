import {
    catalogTitle,
    navigationList,
    navigationListItems
} from './elements.js';

export const navigationListController = (cb) => {
    navigationList.addEventListener('click', (e) => {
        const categoryItem = e.target.closest('.navigation__button');

        if (!categoryItem) return;

        navigationListItems.forEach((el) => {
            if(el === categoryItem) {
                el.classList.add('navigation__button_active');
                catalogTitle.textContent = el.textContent;
                cb(el.dataset.category);
            }else {
                el.classList.remove('navigation__button_active');
            };
        });
    });
};