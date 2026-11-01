// const timer = document.getElementById("timer");
// setInterval(() => {
//   if (Number(timer.textContent) === 0) {
//     return alert("Вы победили в конкурсе!");
//   }
//   timer.textContent--;
// }, 1000);

// Повышенный уровень сложности #1

// const timerElement = document.getElementById("timer_1");

// const intervalId = setInterval(() => {
//   const currentTime = new Date(
//     `${new Date().toISOString().split("T")[0]}T${timerElement.textContent}`,
//   );
//   const timeToEnd = currentTime - 1;
//   const dateTimeToEnd = new Date(timeToEnd);

//   const hours = String(dateTimeToEnd.getHours()).padStart(2, "0");
//   const minutes = String(dateTimeToEnd.getMinutes()).padStart(2, "0");
//   const seconds = String(dateTimeToEnd.getSeconds()).padStart(2, "0");

//   timerElement.textContent = `${hours}:${minutes}:${seconds}`;

//   if (
//     dateTimeToEnd.getHours() === 0 &&
//     dateTimeToEnd.getMinutes() === 0 &&
//     dateTimeToEnd.getSeconds() === 0
//   ) {
//     clearInterval(intervalId);
//     alert("Вы победили в конкурсе!");
//     return;
//   }
// }, 1000);

// Повышенный уровень сложности #2
const timerToDownload = document.getElementById("timer_2");
const timerText = document.getElementById("timer_text");
const buttonDownload = document.getElementById("button_download");

buttonDownload.onclick = () => {
  timerText.style.display = "block";
  const intervalId = setInterval(() => {
    if (Number(timerToDownload.textContent) === 0) {
      clearInterval(intervalId);
      window.location = "task.css";
      return;
    }
    timerToDownload.textContent--;
  }, 1000);
};
