const malla = {
  "1° Semestre": [
    { nombre: "Matemática general", prerrequisitos: [] },
    { nombre: "Taller de comunicación oral y escrita", prerrequisitos: [] },
    { nombre: "Introducción a la medicina veterinaria", prerrequisitos: [] },
    { nombre: "Practica básica", prerrequisitos: [] },
    { nombre: "Biología celular", prerrequisitos: [] },
    { nombre: "Química", prerrequisitos: [] },
    { nombre: "Bioquímica", prerrequisitos: ["Química"] }
  ],
  "2° Semestre": [
    { nombre: "Bioestadística", prerrequisitos: ["Matemática general"] },
    { nombre: "Genética", prerrequisitos: [] },
    { nombre: "Inglés 1", prerrequisitos: [] },
    { nombre: "Inglés 2", prerrequisitos: ["Inglés 1"] },
    { nombre: "Anatomía del canino", prerrequisitos: [] },
    { nombre: "Histoembriología", prerrequisitos: [] }
  ],
  "3° Semestre": [
    { nombre: "Anatomía comparada", prerrequisitos: ["Anatomía del canino"] },
    { nombre: "Semiología", prerrequisitos: [] },
    { nombre: "Zoología", prerrequisitos: [] },
    { nombre: "Producción porcina", prerrequisitos: [] },
    { nombre: "Medio ambiente y gestión ambiental", prerrequisitos: [] },
    { nombre: "Práctica básica", prerrequisitos: ["Introducción a la medicina veterinaria", "Anatomía del canino"] }
  ]
};

let aprobados = new Set();

function crearMalla() {
  const contenedor = document.getElementById("malla-container");

  for (const [semestre, ramos] of Object.entries(malla)) {
    const divSemestre = document.createElement("div");
    divSemestre.className = "semestre";

    const h2 = document.createElement("h2");
    h2.textContent = semestre;
    divSemestre.appendChild(h2);

    ramos.forEach(ramo => {
      const divRamo = document.createElement("div");
      divRamo.className = "ramo";
      divRamo.textContent = ramo.nombre;
      divRamo.dataset.nombre = ramo.nombre;
      divRamo.dataset.prerequisitos = JSON.stringify(ramo.prerrequisitos);
      divRamo.addEventListener("click", () => toggleRamo(divRamo));
      divSemestre.appendChild(divRamo);
    });

    contenedor.appendChild(divSemestre);
  }

  actualizarBloqueos();
}

function toggleRamo(element) {
  if (element.classList.contains("bloqueado")) return;

  const nombre = element.dataset.nombre;
  if (element.classList.contains("aprobado")) {
    element.classList.remove("aprobado");
    aprobados.delete(nombre);
  } else {
    element.classList.add("aprobado");
    aprobados.add(nombre);
  }

  actualizarBloqueos();
}

function actualizarBloqueos() {
  document.querySelectorAll(".ramo").forEach(element => {
    const nombre = element.dataset.nombre;
    const prerequisitos = JSON.parse(element.dataset.prerequisitos || "[]");

    const faltan = prerequisitos.filter(r => !aprobados.has(r));
    if (faltan.length > 0 && !aprobados.has(nombre)) {
      element.classList.add("bloqueado");
    } else {
      element.classList.remove("bloqueado");
    }
  });
}

document.addEventListener("DOMContentLoaded", crearMalla);

