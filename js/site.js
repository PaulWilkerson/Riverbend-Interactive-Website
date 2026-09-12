(function () {
  const btn = document.querySelector("[data-menu-toggle]");
  const panel = document.getElementById("mobile-nav");
  if (!btn || !panel) return;

  btn.addEventListener("click", function () {
    const open = panel.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    const label = btn.querySelector(".sr-only");
    if (label) label.textContent = open ? "Close menu" : "Open menu";
  });
})();
