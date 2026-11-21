document.querySelectorAll(".has-tooltip").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // убираем активные подсказки
    document
      .querySelectorAll(".tooltip")
      .forEach((t) => t.classList.remove("tooltip_active"));

    let tooltip = document.createElement("div");
    tooltip.classList = "tooltip tooltip_active";
    tooltip.style = "left: 0; top: 20";
    tooltip.textContent = link.title.trim();

    link.appendChild(tooltip);
    console.log(link.title.trim());
  });
});
