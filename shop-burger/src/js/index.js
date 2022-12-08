const modalProduct = document.querySelector('.modal_product');
const catalogList = document.querySelector('.catalog__list');

const modalProductTitle = document.querySelector('.modal-product__title');
const modalProductImage = document.querySelector('.modal-product__image');
const modalProductDescription = document.querySelector('.modal-product__description');
const ingredientsList = document.querySelector('.ingredients__list');
const ingredientsCalories = document.querySelector('.ingredients__calories');
const modalProductPrice = document.querySelector('.modal-product__price-count');

const product = {
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

/*product.ingredients.forEach(ingredient => {
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

catalogList.addEventListener('click', (e) => {
    const target = e.target;

    if(target.closest('.product__detail') || target.closest('.product__image')) {
        modalProduct.classList.add('modal_open');
    };
});

modalProduct.addEventListener('click', (e) => {
    const target = e.target;

    if(target.closest('.modal__close') || target === modalProduct) {
        modalProduct.classList.remove('modal_open');
    };
});