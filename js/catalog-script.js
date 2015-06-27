var shoppingPopup = document.querySelector(".popup-shopping");
var checkoutLink = document.querySelector(".btn-checkout");
var continueShoppingLink = document.querySelector(".btn-continue-shopping");


//Слушаем все клики и фильтруем по классу цели. По хорошему уже тут можно было бы рефракторить весь код и все предыдущие клики запихать в этот обработчик, но пока оставлю так.
addEventListener("click", function (event) {
    //Клики по кнопкам купить
    if (event.target.classList.contains("shop-item-buy-btn")) {
        event.preventDefault();
        shoppingPopup.classList.add("popup-content-show");
    }

    //Клики по красным крестикам
    if (event.target.classList.contains("popup-close-icon")) {
        //Шоппинг попап
        if (shoppingPopup.classList.contains("popup-content-show")) {
            shoppingPopup.classList.remove("popup-content-show");
        }
    }
});

checkoutLink.addEventListener("click", function (event) {
    //Тут должен быть код, связанный с чекаутом, но поскольку это учебный проект, просто закроем окошко, чтобы проверяющий мог спокойно проверять дальше.
    event.preventDefault();
    shoppingPopup.classList.remove("popup-content-show");
});

continueShoppingLink.addEventListener("click", function (event) {
    event.preventDefault();
    shoppingPopup.classList.remove("popup-content-show");
});