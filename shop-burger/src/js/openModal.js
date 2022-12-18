import { API_URL, PREFIX_PRODUCT } from './const.js';
import {
    modalProduct,
    modalProductTitle,
    modalProductImage,
    modalProductDescription,
    ingredientsList,
    ingredientsCalories,
    modalProductPrice,
    modalProductBtn
} from './elements.js';
import { getData } from './getData.js';

export const openModal = async (id) => {

    const product = await getData(`${API_URL}${PREFIX_PRODUCT}/${id}`);

    modalProductTitle.textContent = product.title;
    modalProductImage.src = `${API_URL}/${product.image}`;
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
    modalProductBtn.dataset.idProduct = product.id;
};