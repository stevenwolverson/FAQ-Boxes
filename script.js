const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

const expands = document.querySelectorAll(".card-expand");

expands.forEach((expand) => {
  expand.addEventListener("click", () => {
    expand.classList.toggle("active");
  });
});
