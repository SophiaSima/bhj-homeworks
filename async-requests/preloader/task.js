const items = document.getElementById("items");
const loader = document.getElementById("loader");

const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses",
);

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    const data = JSON.parse(xhr.response);

    for (const key in data.response.Valute) {
      const valute = data.response.Valute[key];

      items.insertAdjacentHTML(
        "beforeend",
        `
        <div class="item">
          <div class="item__code">${valute.CharCode}</div>
          <div class="item__value">${valute.Value}</div>
          <div class="item__currency">руб.</div>
        </div>
        `,
      );
    }
  }

  // Скрываем анимацию загрузки после завершения запроса
  loader.classList.remove("loader_active");
};

xhr.onerror = function () {
  // При ошибке сети тоже убираем лоадер
  loader.classList.remove("loader_active");
};

xhr.send();

// fetch("https://students.netoservices.ru/nestjs-backend/slow-get-courses")
//   .then((response) => response.json())
//   .then((data) => {
//     const valutes = data.response.Valute;

//     for (const key in valutes) {
//       const valute = valutes[key];

//       items.insertAdjacentHTML(
//         "beforeend",
//         `
//         <div class="item">
//           <div class="item__code">${valute.CharCode}</div>
//           <div class="item__value">${valute.Value}</div>
//           <div class="item__currency">руб.</div>
//         </div>
//         `,
//       );
//     }
//   })
//   .finally(() => {
//     // Запрос завершён (успех или ошибка) — скрываем индикатор загрузки
//     loader.classList.remove("loader_active");
//   });
