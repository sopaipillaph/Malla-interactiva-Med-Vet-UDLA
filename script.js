document.addEventListener("DOMContentLoaded", () => {
  const ramos = document.querySelectorAll(".ramo");
  ramos.forEach(ramo => {
    const prereqs = ramo.dataset.prerrequisitos.split(',').filter(p => p);
    if (prereqs.length > 0) {
      ramo.classList.add("bloqueado");
      ramo.classList.remove("pendiente");
    }
  });
  updateUnlocks();
});

function toggleAprobado(element) {
  if (element.classList.contains("bloqueado")) return;
  element.classList.toggle("aprobado");
  element.classList.toggle("pendiente");
  updateUnlocks();
}

function updateUnlocks() {
  const ramos = document.querySelectorAll(".ramo");
  const aprobados = new Set([...ramos].filter(r => r.classList.contains("aprobado")).map(r => r.id));
  ramos.forEach(ramo => {
    const prereqs = ramo.dataset.prerrequisitos.split(',').filter(p => p);
    if (prereqs.length === 0) return;
    const allMet = prereqs.every(p => aprobados.has(p));
    if (allMet) {
      ramo.classList.remove("bloqueado");
      if (!ramo.classList.contains("aprobado")) {
        ramo.classList.add("pendiente");
      }
    } else {
      if (!ramo.classList.contains("aprobado")) {
        ramo.classList.add("bloqueado");
        ramo.classList.remove("pendiente");
      }
    }
  });
}
