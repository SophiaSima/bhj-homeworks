const fontSize = document.querySelectorAll(".font-size");
const bookContent = document.querySelector(".book__content");

// смена размера шрифта
fontSize.forEach((font) => {
  font.addEventListener("click", (event) => {
    // чтобы клик по ссылке не перезагружал страницу
    event.preventDefault();

    fontSize.forEach((f) => f.classList.remove("font-size_active"));
    font.classList.add("font-size_active");

    bookContent.classList.remove("book_fs-big", "book_fs-small");

    if (font.dataset.size) {
      bookContent.classList.add(`book_fs-${font.dataset.size}`);
    }
  });
});

// универсальный обработчик смены цвета текста и фона
function handleColorToggle(selectorsOfClass, prefixOfColor) {
  const selectors = document.querySelectorAll(selectorsOfClass);

  selectors.forEach((selector) => {
    selector.addEventListener("click", (event) => {
      event.preventDefault();

      selectors.forEach((s) => s.classList.remove("color_active"));
      selector.classList.add("color_active");

      // сбрасываем с помощью фильтра селекторы
      bookContent.className = bookContent.className
        .split(" ")
        .filter((cls) => !cls.startsWith(prefixOfColor))
        .join(" ");

      const value = selector.dataset.textColor || selector.dataset.bgColor;
      if (value) {
        bookContent.classList.add(`${prefixOfColor}${value}`);
      }
    });
  });
}

handleColorToggle(".book__control_color .color", "book_color-");
handleColorToggle(".book__control_background .color", "book_bg-");
