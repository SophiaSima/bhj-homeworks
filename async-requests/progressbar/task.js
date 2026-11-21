const form = document.getElementById("form");
const input = document.getElementById("file");
const progress = document.getElementById("progress");
const fileDesc = document.querySelector(".input__wrapper-desc");

// Показываем имя выбранного файла вместо «Имя файла...»
input.addEventListener("change", () => {
  if (input.files.length > 0) {
    fileDesc.textContent = input.files[0].name;
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault(); // отменяем обычную отправку формы

  const file = input.files[0];
  if (!file) return;

  const xhr = new XMLHttpRequest();

  const formData = new FormData();
  formData.append("file", file);

  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");

  // Событие хода загрузки — обновляем прогресс-бар
  xhr.upload.addEventListener("progress", (event) => {
    if (event.lengthComputable) {
      progress.value = event.loaded / event.total;
    }
  });

  xhr.upload.addEventListener("load", () => {
    progress.value = 1.0;
  });

  xhr.addEventListener("error", () => {
    console.error("Ошибка при загрузке файла");
  });

  xhr.send(formData);
});
