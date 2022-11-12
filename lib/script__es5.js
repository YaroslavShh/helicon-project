"use strict";

var catalog = [{ id: "el1", name: "ПРОДУКТ 1", img: "img/bravo-10.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis rhoncus mi. Duis ultrices augue nunc, sit amet placerat ligula pretium vel. Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. Nunc finibus consequat risus, vel tristique ex dapibus et. Proin tempus nulla quis erat blandit vehicula. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. Aliquam quis rhoncus mi.", price: "1 200", button: "ДОБАВИТЬ В КОРЗИНУ" }, { id: "el2", name: "ПРОДУКТ 2", img: "img/bravo-20.png", description: "Aliquam quis rhoncus mi. Duis ultrices augue nunc, sit amet placerat ligula pretium vel. Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. Nunc finibus consequat risus, vel tristique ex dapibus et. Proin tempus nulla quis erat blandit vehicula.  Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim.", price: "1 400", button: "ДОБАВИТЬ В КОРЗИНУ" }, { id: "el3", name: "ПРОДУКТ 3", img: "img/bravo-30.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis rhoncus mi. Duis ultrices augue nunc, sit amet placerat ligula pretium vel. Aenean eget quam ante.  Proin tempus nulla quis erat blandit vehicula.  Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim.", price: "1 600", button: "ДОБАВИТЬ В КОРЗИНУ" }];var ROOT_PRODUCTS = document.getElementById("products");var htmlCatalog = "";function calcCartPrice() {
  var e = document.querySelectorAll(".shop__products-flex"),
      i = document.getElementById("sum-price");var t = 0;e.forEach(function (e) {
    var u = e.querySelector(".products-flex__btn");u.addEventListener("click", function () {
      var n = e.querySelector(".products-flex__price").innerText,
          s = parseInt(n.replace(/\D/g, ""));u.style.background = "#22943C", u.innerText = "ДОБАВЛЕНО", u.disabled = "true", t += s;var a = new Intl.NumberFormat("ru-RU").format(t);i.innerText = a;
    });
  });
}catalog.forEach(function (_ref) {
  var e = _ref.id,
      i = _ref.name,
      t = _ref.img,
      u = _ref.description,
      n = _ref.price,
      s = _ref.button;
  htmlCatalog += "\n            <div id=\"" + e + "\" class=\"shop__products-flex\">\n               <div class=\"products-flex__title\">" + i + "</div>\n               <img src=\"" + t + "\">\n               <div class=\"products-flex__desc\">" + u + "</div>\n               <div class=\"products-flex__price\">" + n + "<span class=\"products-flex__currency\"> \u0420\u0423\u0411</span></div>\n               <button data-cart class=\"products-flex__btn\">" + s + "</button>\n            </div>\n         ";
}), ROOT_PRODUCTS.innerHTML = htmlCatalog, calcCartPrice();