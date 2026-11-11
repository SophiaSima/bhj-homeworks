function createRotator(rotator) {
  const cases = Array.from(rotator.querySelectorAll(".rotator__case"));
  let currentIndex = cases.findIndex((el) =>
    el.classList.contains("rotator__case_active"),
  );

  // меняем цвет через датасет
  const applyStyles = (el) => {
    if (el.dataset.color) {
      el.style.color = el.dataset.color;
    }
  };

  // меняем активный класс
  const show = (index) => {
    cases[currentIndex].classList.remove("rotator__case_active");
    currentIndex = index;
    cases[currentIndex].classList.add("rotator__case_active");
    applyStyles(cases[currentIndex]);
  };

  const tick = () => {
    // бесконечый цикл, после последнего слайда индекс снова становится нулевым
    const nextIndex = (currentIndex + 1) % cases.length;
    show(nextIndex);
    // извлекаем скорость из датасета, либо устанавливаем 1000 при отсутствии датасета
    const speed = parseInt(cases[nextIndex].dataset.speed, 10) || 1000;
    // перезапускает сам себя, поэтому цикл никогда не останавливается
    setTimeout(tick, speed);
  };

  // применяем стили к изначально активному слайду
  applyStyles(cases[currentIndex]);
  // извлекаем скорость из датасета, либо устанавливаем 1000 при отсутствии датасета
  const firstSpeed = parseInt(cases[currentIndex].dataset.speed, 10) || 1000;
  setTimeout(tick, firstSpeed);
}

// можно использовать несколько ротаторов на странице
document.querySelectorAll(".rotator").forEach(createRotator);
