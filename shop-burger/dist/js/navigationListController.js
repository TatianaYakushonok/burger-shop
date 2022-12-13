import {
    catalogTitle,
    navigationList,
    navigationListItems
} from './elements.js';

export const navigationListController = () => {
    navigationList.addEventListener('click', (e) => {
        const categoryItem = e.target.closest('.navigation__button');

        if (!categoryItem) return;

        navigationListItems.forEach((el) => {
            if(el === categoryItem) {
                el.classList.add('navigation__button_active');
                catalogTitle.textContent = el.textContent;
            }else {
                el.classList.remove('navigation__button_active');
            };
        });
    });
};