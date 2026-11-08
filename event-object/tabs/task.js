const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab__content");

tabs.forEach((tab) =>
  tab.addEventListener("click", () => {
    // убираем активные классы
    tabs.forEach((t) => t.classList.remove("tab_active"));
    contents.forEach((content) =>
      content.classList.remove("tab__content_active"),
    );

    // находим индекс нажатой вкладки
    const index = Array.from(tabs).indexOf(tab);

    tab.classList.add("tab_active");
    contents[index].classList.add("tab__content_active");
  }),
);
