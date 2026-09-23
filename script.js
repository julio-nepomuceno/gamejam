document.querySelectorAll("[data-aviso]").forEach((link) => {
  const dialog = document.getElementById(link.dataset.aviso);
  const jogar = dialog.querySelector("[data-jogar]");

  link.addEventListener("click", (e) => {
    e.preventDefault();
    jogar.href = link.href;
    dialog.showModal();
  });

  dialog
    .querySelector("[data-fechar]")
    .addEventListener("click", () => dialog.close());
  jogar.addEventListener("click", () => dialog.close());

  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.close();
  });
});
