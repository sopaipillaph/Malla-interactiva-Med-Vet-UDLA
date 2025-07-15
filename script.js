
document.addEventListener("DOMContentLoaded", () => {
  const ramos = document.querySelectorAll(".ramo");

  function updateStates() {
    ramos.forEach(ramo => {
      const prereqs = ramo.dataset.prereqs ? ramo.dataset.prereqs.split(",") : [];
      const allApproved = prereqs.every(id => document.getElementById(id)?.classList.contains("aprobado"));
      if (prereqs.length > 0 && !allApproved && !ramo.classList.contains("aprobado")) {
        ramo.classList.add("bloqueado");
        ramo.classList.remove("pendiente");
      } else if (!ramo.classList.contains("aprobado")) {
        ramo.classList.remove("bloqueado");
        ramo.classList.add("pendiente");
      }
    });
  }

  ramos.forEach(ramo => {
    ramo.addEventListener("click", () => {
      if (ramo.classList.contains("bloqueado")) return;
      ramo.classList.toggle("aprobado");
      ramo.classList.toggle("pendiente");
      updateStates();
    });
  });

  updateStates();
});
