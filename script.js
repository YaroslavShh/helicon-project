let catalog = [
   {
      id: 'el1',
      name: 'ПРОДУКТ 1',
      img: 'img/bravo-10.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis rhoncus mi. Duis ultrices augue nunc, sit amet placerat ligula pretium vel. Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. Nunc finibus consequat risus, vel tristique ex dapibus et. Proin tempus nulla quis erat blandit vehicula. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. Aliquam quis rhoncus mi.',
      price: '1 200',
      button: 'ДОБАВИТЬ В КОРЗИНУ'
   },
   {
      id: 'el2',
      name: 'ПРОДУКТ 2',
      img: 'img/bravo-20.png',
      description: 'Aliquam quis rhoncus mi. Duis ultrices augue nunc, sit amet placerat ligula pretium vel. Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. Nunc finibus consequat risus, vel tristique ex dapibus et. Proin tempus nulla quis erat blandit vehicula.  Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim.',
      price: '1 400',
      button: 'ДОБАВИТЬ В КОРЗИНУ'
   },
   {
      id: 'el3',
      name: 'ПРОДУКТ 3',
      img: 'img/bravo-30.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis rhoncus mi. Duis ultrices augue nunc, sit amet placerat ligula pretium vel. Aenean eget quam ante.  Proin tempus nulla quis erat blandit vehicula.  Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim.',
      price: '1 600',
      button: 'ДОБАВИТЬ В КОРЗИНУ'
   }
];




const ROOT_PRODUCTS = document.getElementById('products');

      let htmlCatalog = '';
      catalog.forEach(({ id, name, img, description, price, button }) => {
         htmlCatalog += `
            <div id="${id}" class="shop__products-flex">
               <div class="products-flex__title">${name}</div>
               <img src="${img}">
               <div class="products-flex__desc">${description}</div>
               <div class="products-flex__price">${price}<span class="products-flex__currency"> РУБ</span></div>
               <button data-cart class="products-flex__btn">${button}</button>
            </div>
         `;
      })

      ROOT_PRODUCTS.innerHTML = htmlCatalog;



//Создаю функцию для подсчета сумму товаров      
function calcCartPrice() {
   // Нахожу все карточки товаров
   const card = document.querySelectorAll('.shop__products-flex');
   const sumPriceEl = document.getElementById('sum-price');
   let totalPrice = 0;

   //прохожусь по всем карточкам товаров
   card.forEach(function (item) {
      const btn = item.querySelector('.products-flex__btn');

      //Отслеживаю нажатие кнопки определенной карточки товара
      btn.addEventListener('click', ()=> {
         const priceEl = item.querySelector('.products-flex__price');
         const num = priceEl.innerText;
         const currentPrice = parseInt(num.replace(/\D/g, ''));
         btn.style.background = '#22943C';
         btn.innerText = 'ДОБАВЛЕНО';
         btn.disabled = 'true';
         totalPrice += currentPrice;
         const changeNumPrice = new Intl.NumberFormat('ru-RU').format(totalPrice);
         sumPriceEl.innerText = changeNumPrice;
      })
   })
}

calcCartPrice();