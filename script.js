// Define los prerrequisitos
const prerrequisitos = {
  bioestadistica: ['matematica'],
  bioquimica: ['quimica'],
  // Agrega más según la malla
};

// Estado de cursos aprobados
let cursosAprobados = new Set();

function toggleRamo(element) {
  const id = element.dataset.id;

  // Si está bloqueado, no se puede seleccionar
  if (element.classList.contains('bloqueado')) return;

  // Alterna entre aprobado/no aprobado
  if (element.classList.contains('aprobado')) {
    element.classList.remove('aprobado');
    cursosAprobados.delete(id);
  } else {
    element.classList.add('aprobado');
    cursosAprobados.add(id);
  }

  actualizarBloqueos();
}

function actualizarBloqueos() {
  document.querySelectorAll('.ramo').forEach(el => {
    const id = el.dataset.id;
    const requisitos = prerrequisitos[id] || [];

    const cumple = requisitos.every(req => cursosAprobados.has(req));

    if (requisitos.length > 0 && !cumple) {
      el.classList.add('bloqueado');
    } else {
      el.classList.remove('bloqueado');
    }
  });
}

document.addEventListener('DOMContentLoaded', actualizarBloqueos);

