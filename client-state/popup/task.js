const modal = document.getElementById("subscribe-modal");
const modalClose = document.querySelector(".modal__close");

window.addEventListener("load", () => {
  if (getCookie("modal") === "closet") {
    modal.classList.remove("modal_active");
  }
});

modalClose.addEventListener("click", () => {
  modal.classList.remove("modal_active");
  setCookie("modal", "closet");
});

function setCookie(name, value) {
  document.cookie = name + "=" + value;
}

function getCookie(name) {
  // получаем строку со всеми cookie. кроме первого (session_id)
  const value = `; ${document.cookie} `;
  let parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop();
  }
}
