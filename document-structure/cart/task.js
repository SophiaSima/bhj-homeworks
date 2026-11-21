const cart = document.querySelector(".cart__products");

const productQuantityControl = document.querySelectorAll(
  ".product__quantity-control",
);

const productAdd = document.querySelectorAll(".product__add");

// обработчик кнопок + и -
productQuantityControl.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // выбранная кнопка
    const control = e.target.closest(".product__quantity-control");

    // нормализуем клик по кнопке
    if (!control) return;

    // находим элемент с количеством
    const valueEl = control
      .closest(".product__quantity-controls")
      .querySelector(".product__quantity-value");
    // количество, преобразованное в число или 1 при отсутствии
    let currentValue = parseInt(valueEl.textContent.trim(), 10) || 1;

    // проверка, + ли это
    if (control.classList.contains("product__quantity-control_inc")) {
      currentValue++;
    } else {
      currentValue = Math.max(1, currentValue - 1);
    }

    valueEl.textContent = currentValue;
  });
});

// обработчик добавления в корзину
productAdd.forEach((addBtn) => {
  addBtn.addEventListener("click", () => {
    console.log("click");
    const productCard = addBtn.closest(".product");
    const id = productCard.dataset.id;
    const productQuantity = productCard.querySelector(
      ".product__quantity-value",
    );
    const productImg = productCard.querySelector(".product__image");

    const quantity = parseInt(productQuantity.textContent.trim(), 10) || 1;

    // есть ли товар в корзине
    const existing = cart.querySelector(`.cart__product[data-id="${id}"]`);

    // увеличиваем количество, если товар в корзине
    if (existing) {
      const countEl = existing.querySelector(".cart__product-count");
      const currentCount = parseInt(countEl.textContent.trim(), 10) || 1;
      countEl.textContent = currentCount + quantity;
      return;
    }

    // если нет, то добавляем новый товар в корзину
    const newCartProduct = document.createElement("div");
    newCartProduct.className = "cart__product";
    newCartProduct.dataset.id = id;
    newCartProduct.innerHTML = `
        <img class="cart__product-image" src="${productImg.src}">
        <div class="cart__product-count">${quantity}</div>
    `;
    cart.appendChild(newCartProduct);
  });
});
