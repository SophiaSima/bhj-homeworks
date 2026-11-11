const revealBlocks = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  revealBlocks.forEach((block) => {
    const viewportHeight = window.innerHeight;
    const rect = block.getBoundingClientRect();

    if (rect.top < viewportHeight && rect.bottom > 0) {
      block.classList.add("reveal_active");
    }
  });
});
