const overlayButton = document.querySelector(".overlay-button");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");

overlayButton.addEventListener("click", () => {
  overlay.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});