function getHole(index) {
  return document.getElementById(`hole${index}`);
}

function resetStatistic() {
  deadCounter.textContent = 0;
  lostCounter.textContent = 0;
}

const deadCounter = document.getElementById("dead");
const lostCounter = document.getElementById("lost");

for (let i = 1; i <= 9; i++) {
  const holeElement = getHole(i);
  holeElement.onclick = () => {
    if (holeElement.classList.contains("hole_has-mole")) {
      deadCounter.textContent++;
    } else {
      lostCounter.textContent++;
    }

    if (Number(deadCounter.textContent) === 5) {
      alert("Вы победили!");
      resetStatistic();
    } else if (Number(lostCounter.textContent) === 10) {
      alert("Вы проиграли :(");
      resetStatistic();
    }
  };
}
