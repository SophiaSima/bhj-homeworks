const titleEl = document.getElementById("poll__title");
const answersEl = document.getElementById("poll__answers");

let pollId = null;

// Загружаем случайный опрос
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");

xhr.addEventListener("load", () => {
  const response = JSON.parse(xhr.responseText);

  pollId = response.id;
  const { title, answers } = response.data;

  // Рисуем вопрос
  titleEl.textContent = title;

  // Рисуем кнопки с ответами
  answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "poll__answer";
    button.textContent = answer;

    button.addEventListener("click", () => sendVote(index));
    answersEl.appendChild(button);
  });
});

xhr.send();

// Отправляем голос и показываем результаты
function sendVote(answerIndex) {
  const xhrVote = new XMLHttpRequest();
  xhrVote.open("POST", "https://students.netoservices.ru/nestjs-backend/poll");
  xhrVote.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhrVote.addEventListener("load", () => {
    const response = JSON.parse(xhrVote.responseText);
    showResults(response.stat);

    alert("Спасибо, ваш голос засчитан!");
  });

  xhrVote.send(`vote=${pollId}&answer=${answerIndex}`);
}

// Рендерим результаты: ответ и процент голосов
function showResults(stat) {
  // Считаем общее число голосов, чтобы вычислить проценты
  const total = stat.reduce((sum, item) => sum + item.votes, 0);

  answersEl.innerHTML = "";
  answersEl.classList.remove("poll__answers_active");

  stat.forEach((item) => {
    const percent = total > 0 ? Math.round((item.votes / total) * 100) : 0;

    const answerEl = document.createElement("div");
    answerEl.className = "poll__answer poll__answer_result";
    answerEl.innerHTML = `
            <div class="poll__answer_text">${item.answer}</div>
            <div class="poll__answer_votes">${percent}%</div>
        `;

    answersEl.appendChild(answerEl);
  });
}
