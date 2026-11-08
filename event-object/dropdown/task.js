document.addEventListener("DOMContentLoaded", () => {
  const dropdownValue = document.querySelector(".dropdown__value");
  const dropdownList = document.querySelector(".dropdown__list");

  dropdownValue.onclick = function () {
    dropdownList.classList.toggle("dropdown__list_active");
  };

  dropdownList.addEventListener("click", (event) => {
    event.preventDefault();

    const dropdownLink = event.target.closest(".dropdown__link");
    if (!dropdownLink) return;

    dropdownValue.textContent = dropdownLink.textContent.trim();
    dropdownList.classList.remove("dropdown__list_active");
  });
});
