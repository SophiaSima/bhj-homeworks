const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
const clickerSpeedCounter = document.getElementById("clicker__speed-counter");
let timeOfLastClick = new Date();

cookie.onclick = () => {
  clickerSpeedCounter.textContent = (
    1 /
    ((new Date() - timeOfLastClick) / 1000)
  ).toFixed(2);
  timeOfLastClick = new Date();

  clickerCounter.textContent++;
  if (Number(clickerCounter.textContent) % 2) {
    cookie.width *= 2;
  } else {
    cookie.width /= 2;
  }
};
