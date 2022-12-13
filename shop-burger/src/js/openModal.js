import {
    modalProduct,
    modalProductTitle,
    modalProductImage,
    modalProductDescription,
    ingredientsList,
    ingredientsCalories,
    modalProductPrice
} from './elements.js';

export const openModal = (product) => {

    modalProductTitle.textContent = product.title;
    modalProductImage.src = product.image;
    modalProductDescription.textContent = product.description;
    ingredientsList.textContent = '';
    ingredientsCalories.textContent = `${product.weight}г, ккал ${product.calories}`;
    modalProductPrice.textContent = product.price;

    /*for (let i = 0; i < product.ingredients.length; i++) {
        const li = document.createElement('li');
        li.classList.add('ingredients__item');
        li.textContent = product.ingredients[i];

        ingredientsList.append(li);
    };

    product.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.classList.add('ingredients__item');
        li.textContent = ingredient;

        ingredientsList.append(li);
    });*/

    const ingredientsListItem = product.ingredients.map(ingredient => {
        const li = document.createElement('li');
        li.classList.add('ingredients__item');
        li.textContent = ingredient;

        return li;
    });

    ingredientsList.append(...ingredientsListItem);
    modalProduct.classList.add('modal_open');
};