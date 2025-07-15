
document.addEventListener("DOMContentLoaded", () => {
  const ramos = document.querySelectorAll(".ramo");

  function updateStates() {
    ramos.forEach(ramo => {
      const prereqs = Array.from(ramo.attributes)
        .filter(attr => attr.name.startsWith("data-prereq"))
        .map(attr => attr.value);

      const allApproved = prereqs.every(pr => {
        const prereqRamo = document.querySelector(`.ramo[data-nombre='${pr}']`);
        return prereqRamo && prereqRamo.classList.contains("aprobado");
      });

      if (prereqs.length === 0 || allApproved) {
        if (!ramo.classList.contains("aprobado")) {
          ramo.classList.remove("bloqueado");
          ramo.classList.add("pendiente");
        }
      } else {
        if (!ramo.classList.contains("aprobado")) {
          ramo.classList.remove("pendiente");
          ramo.classList.add("bloqueado");
        }
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
